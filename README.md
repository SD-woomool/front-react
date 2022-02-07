# JoyCourse

좋았던 추억과 경험들을 공유해보자 시작했습니다.

---

### How to start?
`yarn start` or `npm run start`

#### Structure
```text
'/'로 끝나는 이름은 폴더를 뜻한다. 그 외는 파일이다.

public/                   # static file
src/
├─ api/                  # 서버와 통신하는 코드
├─ components/           # 재사용되는 components
├─ context/              # 전역으로 사용될 상태 값들
│  └─ auth/              # auth 관련 코드
│     ├─ local-storage/  # redux 대신 localStorage 사용
│     └─ index.js        
├─ assets/               # 사진, svg 등 사용될 기타 요소
├─ pages/                # page
├─ index.js              
├─ Router.js             # route 관리
└─ App.js                # 초기 설정 및 스플래시 화면 보여주기
```
