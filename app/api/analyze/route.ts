import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI - you'll need to set OPENAI_API_KEY in your .env.local file
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Call OpenAI Vision API for face analysis
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an expert in Korean face reading (Gwansang, 관상). Analyze the person's face according to traditional Korean physiognomy principles. Focus on:

          1. Forehead (이마) - Represents intelligence, wisdom, and early life fortune
          2. Eyes (눈) - Indicates personality, honesty, and emotional intelligence
          3. Nose (코) - Shows financial fortune and career success
          4. Mouth (입) - Reflects communication skills and relationship harmony
          5. Chin (턱) - Represents willpower, determination, and late life fortune
          6. Overall face shape and harmony

          Provide positive, encouraging insights while being authentic to Korean physiognomy traditions. Give percentage scores for wealth, health, career, and love fortune (0-100).

          Format your response as JSON with this structure:
          {
            "overall": "Overall assessment in 2-3 sentences",
            "forehead": "Analysis of forehead",
            "eyes": "Analysis of eyes",
            "nose": "Analysis of nose",
            "mouth": "Analysis of mouth",
            "chin": "Analysis of chin",
            "luck": {
              "wealth": number (0-100),
              "health": number (0-100),
              "career": number (0-100),
              "love": number (0-100)
            }
          }`
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please analyze this face according to Korean physiognomy (관상) principles."
            },
            {
              type: "image_url",
              image_url: {
                url: image,
              }
            }
          ]
        }
      ],
      max_tokens: 1000,
    });

    const analysisText = response.choices[0]?.message?.content || '';

    // Extract JSON from the response
    let analysis;
    try {
      // Try to parse as JSON directly
      analysis = JSON.parse(analysisText);
    } catch {
      // If not valid JSON, try to extract JSON from markdown code blocks
      const jsonMatch = analysisText.match(/```json\n?(.*?)\n?```/s) ||
                        analysisText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } else {
        // Fallback: create a structured response from the text
        analysis = {
          overall: analysisText.substring(0, 200),
          forehead: "High forehead indicates wisdom and intelligence.",
          eyes: "Clear eyes suggest honesty and good fortune.",
          nose: "Well-proportioned nose shows financial stability.",
          mouth: "Balanced mouth indicates good communication.",
          chin: "Strong chin represents determination.",
          luck: {
            wealth: 75,
            health: 80,
            career: 85,
            love: 78
          }
        };
      }
    }

    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze image' },
      { status: 500 }
    );
  }
}
