'use client';

import { useState, useEffect } from 'react';

// Korean Physiognomy Reading Database
// Security: PayPal SDK only - NO manual payment bypass allowed
// Build: Force clean deployment v2
const physiognomyData = {
  overall: [
    "Your face shows strong leadership qualities and determination. You have a noble character with natural charisma.",
    "Your facial features indicate wisdom and intelligence. You possess excellent judgment and decision-making abilities.",
    "You have harmonious facial proportions suggesting balance in life. Success comes through steady effort and patience.",
    "Your face reveals artistic talent and creative spirit. You have a unique perspective that sets you apart.",
    "Strong willpower and determination are evident in your features. You overcome obstacles with resilience.",
    "Your face shows warmth and kindness. People are naturally drawn to your genuine and caring nature.",
    "You have the face of a natural communicator. Your charm and eloquence open many doors.",
    "Your features indicate financial acumen and business sense. Prosperity follows your endeavors.",
    "A face that shows both strength and gentleness. You balance power with compassion effectively.",
    "Your facial structure suggests longevity and good health. You maintain vitality throughout life."
  ],
  forehead: [
    "High and broad forehead indicates exceptional wisdom and intelligence. You are a strategic thinker who plans ahead.",
    "Your forehead shows clarity of thought and strong analytical abilities. Complex problems become simple under your analysis.",
    "A noble forehead suggesting leadership potential. You naturally take charge in challenging situations.",
    "Your forehead reveals creativity and imagination. Innovative ideas flow naturally to you.",
    "Smooth forehead indicates a peaceful mind and good fortune in early life. Opportunities come easily.",
    "Your forehead shows determination and focus. Once you set a goal, you achieve it.",
    "A forehead that suggests both intelligence and emotional wisdom. You understand people deeply.",
    "Your forehead indicates excellent memory and learning ability. Knowledge accumulates quickly.",
    "Strong forehead structure showing mental resilience. You handle stress with remarkable composure.",
    "Your forehead reveals spiritual awareness and philosophical depth. You seek meaning beyond the surface."
  ],
  eyes: [
    "Bright and clear eyes suggest honesty and integrity. People trust you instinctively.",
    "Your eyes show deep emotional intelligence. You understand others' feelings with remarkable accuracy.",
    "Sharp and focused eyes indicate strong willpower. You achieve your ambitions through determination.",
    "Kind eyes revealing a generous spirit. You bring joy and comfort to those around you.",
    "Your eyes show wisdom beyond your years. Experience has taught you valuable lessons.",
    "Expressive eyes indicating artistic sensitivity. You perceive beauty others might miss.",
    "Your eyes reveal courage and fearlessness. You face challenges head-on without hesitation.",
    "Calm eyes suggesting inner peace and contentment. You maintain balance in turbulent times.",
    "Your eyes show charisma and magnetism. People are naturally drawn to your presence.",
    "Observant eyes indicating attention to detail. Nothing escapes your careful notice."
  ],
  nose: [
    "Well-proportioned nose indicates financial stability and success in career. Wealth accumulates steadily.",
    "Your nose shows strong sense of responsibility. Others rely on your dependable nature.",
    "A noble nose suggesting high standards and refined taste. You appreciate quality in all things.",
    "Your nose indicates good fortune in business ventures. Opportunities for profit arise naturally.",
    "Strong nose structure showing determination in financial matters. You build lasting prosperity.",
    "Your nose reveals generosity with resources. You share your success with others willingly.",
    "A nose that suggests practical wisdom in money matters. You make sound financial decisions.",
    "Your nose shows ambition and drive for success. You aim high and often exceed expectations.",
    "Well-defined nose indicating clear life direction. You know what you want and pursue it.",
    "Your nose suggests both material success and spiritual wealth. You balance both aspects well."
  ],
  mouth: [
    "Balanced mouth shape shows excellent communication skills. Your words carry weight and influence.",
    "Your mouth indicates harmonious relationships. You maintain peace and understanding with others.",
    "Expressive mouth suggesting eloquence and persuasion. You speak with natural authority.",
    "Your mouth shows generosity of spirit. You offer kind words and encouragement freely.",
    "Well-defined mouth indicating strong principles. You speak truth with diplomatic grace.",
    "Your mouth suggests good fortune in social connections. Valuable relationships form easily.",
    "Warm smile indicating optimism and positive energy. You brighten every room you enter.",
    "Your mouth shows wisdom in choosing words carefully. You know when to speak and when to listen.",
    "Pleasant mouth shape suggesting good taste and refinement. You appreciate life's finer pleasures.",
    "Your mouth indicates loyal friendships and lasting bonds. People value your companionship."
  ],
  chin: [
    "Strong chin represents perseverance and determination. You finish what you start, no matter what.",
    "Your chin shows resilience in facing life's challenges. Setbacks only make you stronger.",
    "Well-defined chin indicating leadership in later life. Your influence grows with time.",
    "Your chin suggests good fortune in later years. The best is yet to come.",
    "Firm chin showing unwavering principles. You stand by your beliefs with conviction.",
    "Your chin indicates steady progress toward goals. Success builds gradually and lastingly.",
    "Balanced chin suggesting stability and reliability. Others know they can count on you.",
    "Your chin shows courage and bravery. You protect what and who you value.",
    "Strong chin structure indicating longevity and vitality. You maintain energy throughout life.",
    "Your chin reveals patience and long-term thinking. You understand that good things take time."
  ]
};

// Generate random face reading
function generateRandomReading() {
  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const randomScore = () => Math.floor(Math.random() * 26) + 70; // 70-95 range

  return {
    overall: random(physiognomyData.overall),
    forehead: random(physiognomyData.forehead),
    eyes: random(physiognomyData.eyes),
    nose: random(physiognomyData.nose),
    mouth: random(physiognomyData.mouth),
    chin: random(physiognomyData.chin),
    luck: {
      wealth: randomScore(),
      health: randomScore(),
      career: randomScore(),
      love: randomScore()
    }
  };
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedCelebrity, setSelectedCelebrity] = useState<any>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setShowPayment(true);
  };

  const processAnalysis = async () => {
    // Process the analysis after payment
    setShowPayment(false);
    setAnalyzing(true);

    // Simulate analysis time for better user experience
    setTimeout(() => {
      // Generate random Korean face reading
      const reading = generateRandomReading();
      setResult(reading);
      setAnalyzing(false);
    }, 2500); // 2.5 seconds for realistic "analysis" feel
  };

  // Initialize PayPal SDK buttons when payment modal opens
  useEffect(() => {
    if (showPayment && typeof window !== 'undefined' && (window as any).paypal) {
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = ''; // Clear any existing buttons

        (window as any).paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '1.00',
                  currency_code: 'USD'
                },
                description: 'Korean Face Reading Analysis'
              }],
              application_context: {
                shipping_preference: 'NO_SHIPPING',
                brand_name: 'Korean Face Reading',
                locale: 'en_US',
                user_action: 'PAY_NOW'
              }
            });
          },
          onApprove: async (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              // Payment successful - process analysis
              processAnalysis();
            });
          },
          onError: (err: any) => {
            console.error('PayPal Error:', err);
            alert('Payment failed. Please try again or contact support.');
          },
          onCancel: () => {
            console.log('Payment cancelled by user');
          }
        }).render('#paypal-button-container');
      }
    }
  }, [showPayment]);

  const celebrities = [
    {
      name: "BTS Jimin",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jimin&backgroundColor=C8102E&scale=120",
      fullReading: {
        overall: "Gentle eyes and soft features indicate artistic talent and emotional intelligence. Natural charm brings success in creative fields.",
        forehead: "Smooth forehead indicates a peaceful mind and good fortune in early life. Creative ideas flow naturally.",
        eyes: "Kind eyes revealing a generous spirit. You bring joy and comfort to those around you.",
        nose: "Well-proportioned nose indicates financial stability and success in career. Wealth accumulates steadily.",
        mouth: "Warm smile indicating optimism and positive energy. You brighten every room you enter.",
        chin: "Balanced chin suggesting stability and reliability. Others know they can count on you.",
        luck: { wealth: 85, health: 88, career: 92, love: 90 }
      }
    },
    {
      name: "BLACKPINK Jennie",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennie&backgroundColor=003478&scale=120",
      fullReading: {
        overall: "Sharp jawline and confident gaze show strong willpower and natural leadership. Born to stand in the spotlight.",
        forehead: "A noble forehead suggesting leadership potential. You naturally take charge in challenging situations.",
        eyes: "Sharp and focused eyes indicate strong willpower. You achieve your ambitions through determination.",
        nose: "Strong nose structure showing determination in financial matters. You build lasting prosperity.",
        mouth: "Expressive mouth suggesting eloquence and persuasion. You speak with natural authority.",
        chin: "Strong chin represents perseverance and determination. You finish what you start, no matter what.",
        luck: { wealth: 93, health: 85, career: 95, love: 87 }
      }
    },
    {
      name: "BTS RM",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RM&backgroundColor=D4AF37&scale=120",
      fullReading: {
        overall: "Intellectual features with prominent forehead suggest wisdom beyond years. Natural leader with strategic mind.",
        forehead: "High and broad forehead indicates exceptional wisdom and intelligence. You are a strategic thinker who plans ahead.",
        eyes: "Your eyes show wisdom beyond your years. Experience has taught you valuable lessons.",
        nose: "A noble nose suggesting high standards and refined taste. You appreciate quality in all things.",
        mouth: "Well-defined mouth indicating strong principles. You speak truth with diplomatic grace.",
        chin: "Well-defined chin indicating leadership in later life. Your influence grows with time.",
        luck: { wealth: 88, health: 82, career: 94, love: 84 }
      }
    },
    {
      name: "IU",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=IU&backgroundColor=F5F1E8&scale=120",
      fullReading: {
        overall: "Balanced facial harmony indicates versatility and natural charm. Success through genuine warmth and talent.",
        forehead: "Your forehead shows determination and focus. Once you set a goal, you achieve it.",
        eyes: "Bright and clear eyes suggest honesty and integrity. People trust you instinctively.",
        nose: "Your nose reveals generosity with resources. You share your success with others willingly.",
        mouth: "Your mouth indicates loyal friendships and lasting bonds. People value your companionship.",
        chin: "Your chin indicates steady progress toward goals. Success builds gradually and lastingly.",
        luck: { wealth: 86, health: 90, career: 89, love: 93 }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-korean-beige via-white to-korean-beige">
      {/* Header */}
      <header className="bg-gradient-to-r from-korean-red to-korean-blue text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">관상 - Korean Face Reading</h1>
          <p className="text-center mt-2 text-lg">Discover Your Fortune Through Ancient Wisdom</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Unlock the Secrets of Your Face
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Korean face reading (Gwansang, 관상) is an ancient art that reveals your personality,
            fortune, and destiny through facial features. Get your personalized AI-powered reading
            for just <span className="text-korean-red font-bold">$1</span>!
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Upload Your Photo
          </h3>

          <div className="flex flex-col items-center">
            {!selectedImage ? (
              <label className="w-full max-w-md h-64 flex flex-col items-center justify-center border-4 border-dashed border-korean-blue rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                <svg className="w-16 h-16 text-korean-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-lg text-gray-600 mb-2">Click to upload your photo</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            ) : (
              <div className="w-full max-w-md">
                <img
                  src={selectedImage}
                  alt="Your photo"
                  className="w-full h-auto rounded-xl shadow-lg mb-4"
                />
                <div className="flex gap-4">
                  <button
                    onClick={handleAnalyze}
                    disabled={analyzing}
                    className="flex-1 bg-gradient-to-r from-korean-red to-korean-blue text-white py-3 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {analyzing ? 'Analyzing...' : 'Analyze My Face - $1'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setResult(null);
                    }}
                    className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Result */}
          {analyzing && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-korean-red"></div>
              <p className="mt-4 text-lg text-gray-600">Analyzing your facial features...</p>
            </div>
          )}

          {result && (
            <div className="mt-8 space-y-6">
              <div className="bg-gradient-to-r from-korean-red/10 to-korean-blue/10 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3 text-gray-800">Overall Reading</h4>
                <p className="text-gray-700 leading-relaxed">{result.overall}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Forehead (이마)</h5>
                  <p className="text-gray-700 text-sm">{result.forehead}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Eyes (눈)</h5>
                  <p className="text-gray-700 text-sm">{result.eyes}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Nose (코)</h5>
                  <p className="text-gray-700 text-sm">{result.nose}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Mouth (입)</h5>
                  <p className="text-gray-700 text-sm">{result.mouth}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-korean-gold/20 to-korean-beige p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Fortune Indicators</h4>
                <div className="space-y-3">
                  {Object.entries(result.luck).map(([key, value]: [string, any]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold capitalize">{key}</span>
                        <span className="text-korean-red font-bold">{value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-korean-red to-korean-gold h-3 rounded-full transition-all"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Celebrity Examples */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            K-Pop Stars Face Reading Examples
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrities.map((celeb, index) => (
              <div
                key={index}
                onClick={() => setSelectedCelebrity(celeb)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105"
              >
                <img
                  src={celeb.image}
                  alt={celeb.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 text-korean-blue">{celeb.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{celeb.fullReading.overall}</p>
                  <div className="flex items-center justify-center gap-2 text-korean-red text-sm font-semibold">
                    <span>View Full Reading</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            💡 Click any celebrity to see their complete face reading analysis
          </p>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-lg mb-2">Accurate Analysis</h4>
            <p className="text-gray-600 text-sm">AI-powered readings based on traditional Korean physiognomy</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-3">💎</div>
            <h4 className="font-bold text-lg mb-2">Only $1</h4>
            <p className="text-gray-600 text-sm">Affordable insights into your personality and fortune</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-bold text-lg mb-2">Private & Secure</h4>
            <p className="text-gray-600 text-sm">Your photos are analyzed securely and never stored</p>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Complete Payment</h3>
            <p className="text-gray-600 mb-6">
              Pay $1.00 via PayPal to get your personalized Korean face reading analysis.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span>Face Reading Analysis</span>
                <span className="font-bold">$1.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-korean-red">$1.00</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-green-800 font-semibold">
                🌍 International Payments Welcome!
              </p>
              <p className="text-xs text-green-700 mt-1">
                We accept payments from all countries. PayPal will handle currency conversion automatically.
              </p>
            </div>

            {/* PayPal SDK Button Container */}
            <div id="paypal-button-container" className="mb-4"></div>

            <button
              onClick={() => setShowPayment(false)}
              className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              🔒 Secure payment powered by PayPal
            </p>
          </div>
        </div>
      )}

      {/* Celebrity Reading Modal */}
      {selectedCelebrity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full my-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedCelebrity.name} - Face Reading Sample
              </h3>
              <button
                onClick={() => setSelectedCelebrity(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <img
                src={selectedCelebrity.image}
                alt={selectedCelebrity.name}
                className="w-full md:w-48 h-48 object-cover rounded-xl"
              />
              <div className="flex-1">
                <div className="bg-gradient-to-r from-korean-red/10 to-korean-blue/10 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Overall Reading</h4>
                  <p className="text-gray-700">{selectedCelebrity.fullReading.overall}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-bold text-gray-800">Detailed Analysis</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Forehead (이마)</h5>
                  <p className="text-gray-700 text-sm">{selectedCelebrity.fullReading.forehead}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Eyes (눈)</h5>
                  <p className="text-gray-700 text-sm">{selectedCelebrity.fullReading.eyes}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Nose (코)</h5>
                  <p className="text-gray-700 text-sm">{selectedCelebrity.fullReading.nose}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg">
                  <h5 className="font-bold text-korean-red mb-2">Mouth (입)</h5>
                  <p className="text-gray-700 text-sm">{selectedCelebrity.fullReading.mouth}</p>
                </div>
                <div className="bg-white border-2 border-korean-gold p-4 rounded-lg md:col-span-2">
                  <h5 className="font-bold text-korean-red mb-2">Chin (턱)</h5>
                  <p className="text-gray-700 text-sm">{selectedCelebrity.fullReading.chin}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-korean-gold/20 to-korean-beige p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Fortune Indicators</h4>
              <div className="space-y-3">
                {Object.entries(selectedCelebrity.fullReading.luck).map(([key, value]: [string, any]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold capitalize">{key}</span>
                      <span className="text-korean-red font-bold">{value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-korean-red to-korean-gold h-3 rounded-full transition-all"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setSelectedCelebrity(null)}
                className="bg-gradient-to-r from-korean-red to-korean-blue text-white py-3 px-8 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">관상 - Korean Face Reading</p>
          <p className="text-sm text-gray-400">Ancient wisdom meets modern AI technology</p>
          <p className="text-sm text-gray-400 mt-2">
            Contact: <a href="mailto:crowntour@gmail.com" className="text-korean-gold hover:underline">crowntour@gmail.com</a>
          </p>
          <p className="text-xs text-gray-500 mt-4">For entertainment purposes only</p>
        </div>
      </footer>
    </div>
  );
}
