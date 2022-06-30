# 🌝 React Darkmode

> Styled-Components & Context API로 리액트 다크모드 구현하기

<br/>

<p align="center">
  <img width="800" alt="darkmode_web" src="https://user-images.githubusercontent.com/71811780/114021498-bba64e00-98ab-11eb-9c90-281093fbfc90.gif">
</p>

<br/>

## ✍🏻 Description

사용자 경험을 최상으로 이끌어주는 디자인 트렌드 `다크모드 UI`를 리액트 애플리케이션에 적용한 서비스입니다.
다크모드 UI 적용을 위해 `styled-components`, 테마 상태관리를 위해 `context api` 및 `custom hook`을 사용했습니다.

<br/>

## 🚀 Quick Start
- 애플리케이션 설치
```bash
$> npm i
```
- 애플리케이션 실행
```bash
$> npm start
```

<br/>

## 🔎 Features
1. 다크모드 테마 및 글로벌 스타일 설정
2. Context API로 ThemeProvider 커스텀
3. Custom hook으로 테마 관리
4. 로컬스토리지에 테마 저장 및 유지
5. 다크모드 토글 버튼 생성

- 기능 별 자세한 설명 및 프로그래밍 과정은 https://velog.io/@gparkkii/reactdarkmode 에서 확인 가능합니다.

<br/>

## 🛠 Project Structure

#### 주요 라이브러리 (package)
```text
package.json
├── react : 리액트 라이브러리
├── styled-components : UI 라이브러리
├── styled-reset : css 초기화 라이브러리
└── react-router-dom : 리액트 라우트 처리
```

<br/>

#### 프로젝트 구조 (/src)

```text
src
├── assets ───────────────  이미지 파일
│   └── logo
│
├── components ───────────  view 컴포넌트
│   ├── AppLayout
│   ├── Header
│   ├── Main
│   └── Sub
│
├── context ──────────────  darkmode context api
│   └── themeProvider
│
├── style ────────────────  styled-components' custom style
│   ├── media_query
│   └── styles
│
├── theme ────────────────  다크모드 테마, 토글 버튼 디렉토리
│   ├── GlobalStyles
│   ├── ThemeToggle
│   └── theme
│
├── App.js ───────────────  Route 처리 및 Theme Context 적용
├── index.css ────────────  공통 css
└── index.js ─────────────  애플리케이션 엔트리 포인트
```
