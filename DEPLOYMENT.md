# 배포 가이드 (Deployment Guide)

## 🚀 Vercel로 배포하기 (추천)

### 방법 1: Vercel CLI (가장 빠름!)

이미 설치되었습니다! 다음 단계만 따라하세요:

#### 1단계: Vercel 로그인 및 배포
```bash
cd Physiognomy
vercel
```

#### 2단계: 질문에 답하기
```
? Set up and deploy "~/Physiognomy"? [Y/n]
→ Y 입력

? Which scope do you want to deploy to?
→ 본인 계정 선택

? Link to existing project? [y/N]
→ N 입력 (새 프로젝트)

? What's your project's name?
→ physiognomy 또는 원하는 이름

? In which directory is your code located?
→ ./ (엔터)

? Want to override the settings? [y/N]
→ N 입력
```

#### 3단계: 배포 완료!
```
✅ Production: https://physiognomy-xxxx.vercel.app
```

이 URL이 당신의 앱 주소입니다!

### 방법 2: Vercel 웹사이트

#### 1단계: GitHub에 푸시 (선택사항)

GitHub 저장소를 만들고:
```bash
# GitHub에서 새 저장소 만들기
# 그 다음:
cd Physiognomy
git remote add origin https://github.com/username/physiognomy.git
git branch -M main
git push -u origin main
```

#### 2단계: Vercel에서 Import

1. https://vercel.com 접속
2. "Add New" → "Project" 클릭
3. GitHub 저장소 선택 (또는 Git 저장소 연결)
4. "Deploy" 클릭

끝! 🎉

## 🔧 배포 후 설정

### 환경 변수 추가 (나중에 OpenAI 사용 시)

Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Environment Variables
3. 추가:
   ```
   OPENAI_API_KEY = sk-your-key-here
   ```
4. "Save" 클릭
5. Deployments 탭에서 "Redeploy" 클릭

## 📱 커스텀 도메인 연결

### 무료 도메인
Vercel이 자동으로 제공:
```
https://your-project.vercel.app
```

### 커스텀 도메인 (선택)
1. 도메인 구매 (GoDaddy, Namecheap 등)
2. Vercel 대시보드 → Settings → Domains
3. 도메인 추가
4. DNS 설정 안내에 따라 설정

## 🔄 업데이트 배포

코드를 변경한 후:

```bash
cd Physiognomy
git add .
git commit -m "Update: 변경 내용"
vercel --prod
```

또는 GitHub 연결 시:
```bash
git push
```

자동으로 배포됩니다!

## ✅ 배포 체크리스트

- [ ] Vercel CLI 설치 완료
- [ ] `vercel` 명령어 실행
- [ ] 로그인 완료
- [ ] 프로젝트 설정 완료
- [ ] 배포 URL 받음
- [ ] URL 테스트 완료
- [ ] PayPal 링크 작동 확인
- [ ] 사진 업로드 테스트
- [ ] 분석 결과 확인
- [ ] 셀럽 예시 클릭 테스트

## 🎯 배포 후 할 일

### 1. URL 공유
```
https://your-project.vercel.app
```

### 2. 소셜 미디어 마케팅
- Reddit r/kpop에 포스팅
- Twitter/X에 트윗
- TikTok 콘텐츠 제작

### 3. 성능 모니터링
Vercel 대시보드에서:
- 방문자 수 확인
- 로딩 속도 체크
- 에러 로그 확인

### 4. 피드백 수집
- 첫 사용자 의견 듣기
- 개선 사항 파악
- 버그 수정

## 🐛 문제 해결

### "vercel: command not found"
```bash
npm install -g vercel
```

### 빌드 에러
```bash
# 로컬에서 빌드 테스트
cd Physiognomy
npm run build

# 에러 수정 후
vercel --prod
```

### 환경 변수 에러
Vercel 대시보드에서 환경 변수 확인

## 💰 비용

### Vercel 무료 플랜
- ✅ 무제한 배포
- ✅ 자동 HTTPS
- ✅ 글로벌 CDN
- ✅ 자동 Git 통합
- ✅ 100GB 대역폭/월
- ✅ 커스텀 도메인

월 방문자 수천 명까지 완전 무료!

## 📊 성공 지표

### 첫 주 목표
- 100명 방문
- 10명 결제 ($10)

### 첫 달 목표
- 1,000명 방문
- 100명 결제 ($100)

### 3개월 목표
- 10,000명 방문
- 1,000명 결제 ($1,000)

## 🎉 배포 완료 후

축하합니다! 🎊

당신의 한국 관상 앱이 이제 전 세계에 공개되었습니다!

**다음 단계:**
1. ✅ URL 테스트
2. ✅ 친구들에게 공유
3. ✅ Reddit/Twitter 포스팅
4. ✅ 첫 고객 기다리기!

---

**당신의 앱이 라이브 상태입니다!** 🚀

지금 바로 마케팅을 시작하세요!
