## 채팅앱  

### 패키치 설치  
기본 프로젝트 생성 후
```
npm i styled-components
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo i react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-commuity/masked-view
npm i @react-navigation/stack @react-navigation/native
```  
추후에 추가될 라이브러리 정보  
![추가 라이브러리 기능](https://user-images.githubusercontent.com/75245755/113990568-8f2f0980-988c-11eb-9951-bcc4843de307.PNG)  


### 설계  
![설계](https://user-images.githubusercontent.com/75245755/113990508-7d4d6680-988c-11eb-9658-f45fea188643.PNG)  

### 구조  
![구조](https://user-images.githubusercontent.com/75245755/113990537-85a5a180-988c-11eb-826f-8e2544e12329.PNG)  

</br></br>

### firebase 설정  
처음에 ` npm i firebase ` 를 실행해준다.  
https://console.firebase.google.com/  링크로 들어가서 기본 프로젝트 생성  
설정으로 들어가 앱추가 버튼 클릭  
</br></br>
![설정앱추가](https://user-images.githubusercontent.com/75245755/113993232-2e550080-988f-11eb-8bd2-3e6b1895ac40.PNG)  
</br></br>
sdk 에서 키값 복사해서 프로젝트 firebase.json 파일을 만들어 복붙  
![키](https://user-images.githubusercontent.com/75245755/113993395-66f4da00-988f-11eb-80eb-6a70a93e05f4.PNG)  

왼족 메뉴탭에 auth 인증 탭으로 들어가 이메일/비밀번호 활성화
![이메일 비밀번호](https://user-images.githubusercontent.com/75245755/113993258-3745d200-988f-11eb-9eee-960749c4e0c9.PNG)  
</br></br>
이제 데이터베이스를 만들어줍니다  
사진처럼 왼쪽메뉴 두번쨰 태그로 들어가 데이터베이스를 생성합니다. 
![데이터베이스](https://user-images.githubusercontent.com/75245755/113994662-8a6c5480-9890-11eb-9236-88ba174f998c.PNG)
</br></br>
지역 설정인데 가까운곳으로 설정합니다.  
![데베 지역](https://user-images.githubusercontent.com/75245755/113994805-a53ec900-9890-11eb-88aa-b95cf83d33bf.PNG) 
</br></br>
유틸 폴더를 만들어서 다음과 같이 작성해 설정을 마무리합니다.  
![유틸](https://user-images.githubusercontent.com/75245755/113995321-1b433000-9891-11eb-86af-ff1ebadf0685.PNG)  

### 키보드 감추기  
![키보드감추기](https://user-images.githubusercontent.com/75245755/114148552-dc76ae00-9954-11eb-939a-ccc275767ec8.PNG)  


### 키보드 감추기 화면가림현상 해결  
npm 설치  

npm i react-native-keyboard-aware-scroll-view  
![키보드 감추기 가려짐해결](https://user-images.githubusercontent.com/75245755/114329625-d19d6280-9b7a-11eb-93de-d65acbb983b1.PNG)  
  
  
###  유효성검사  
유효성 검사 정규식표현 공백제거와 이메일 형식  
![정규식](https://user-images.githubusercontent.com/75245755/114329947-97809080-9b7b-11eb-9f6d-31c04e5ec9f4.PNG)
</br>
로그인 컴포넌트에 common내용을 불러와 사용 (input에 적용해야한다.)   
![유효성검사](https://user-images.githubusercontent.com/75245755/114330060-d6164b00-9b7b-11eb-9073-d6a4e5331553.PNG)
</br>

### 공백시 버튼클릭 x  
버튼 명시적 효과  
TouchableOpaciy 컴포넌트에 disabled 속성을 전달하여 값에따라 클릭등의 상호작용 이 동작하지 않아 disabled 값을 props로 전달하는것으로 버튼 비활섣화 기능 추가  
![공백시 버튼이 동작x](https://user-images.githubusercontent.com/75245755/114331707-93ef0880-9b7f-11eb-9e5b-3e1540072042.PNG)  
useEffect를 이용해 이메일 패스워드 에러메시지 상태가 변할떄마다 disabled 상태가 변하도록 작성  
![버튼 동작x](https://user-images.githubusercontent.com/75245755/114331927-15df3180-9b80-11eb-97dc-a41352ff4380.PNG)  
  
### 회원가입 화면 구성후 짤림현상  
회원가입 화면을 만들고나서 인풋텍스트를 클릭시 화면이 짤리는데 그걸 수정한다  
![회원가입화면 짤림수정](https://user-images.githubusercontent.com/75245755/114500633-64b1c780-9c63-11eb-9ecd-c63c55c2fe52.PNG)  

### 에러메시지  
아래 주석처리된 부분을 추가하여 기존에 아무것도 입력하지 않았을때도 에러메시지가 뜨던걸 수정  
![회원가입화면 짤림수정](https://user-images.githubusercontent.com/75245755/114500633-64b1c780-9c63-11eb-9ecd-c63c55c2fe52.PNG)  
  
### 프로필이미지버튼 넣기  
![프로필이미지넣기](https://user-images.githubusercontent.com/75245755/114503320-118e4380-9c68-11eb-9a58-7622f871b416.PNG)  
![프로필이미지넣기2](https://user-images.githubusercontent.com/75245755/114503326-13580700-9c68-11eb-9d7a-12445abce7ec.PNG)  

### 사진첩 접근  
expo install  
`npm i expo-image-picker`  
코드  
ios는 권한요청과정이 필요해 ios만 설정  
![사진첩접근 2](https://user-images.githubusercontent.com/75245755/114504431-d42ab580-9c69-11eb-983d-f4d5c31011ab.PNG)  

![사진첩접근](https://user-images.githubusercontent.com/75245755/114504419-cffe9800-9c69-11eb-9742-4a354482c5cb.PNG)  
![권한요청 설명](https://user-images.githubusercontent.com/75245755/114504820-6f238f80-9c6a-11eb-8f1f-e9117f3a0ba7.PNG)  

### 로그인,회원가입기능  

![로그인기능](https://user-images.githubusercontent.com/75245755/114514855-b152ce00-9c76-11eb-988a-f02d38555493.PNG)  
![로그인기능2](https://user-images.githubusercontent.com/75245755/114514864-b31c9180-9c76-11eb-8c94-67c4ddf9c3d9.PNG)  
![회원가입기능](https://user-images.githubusercontent.com/75245755/114514873-b6178200-9c76-11eb-9c40-f1838240fa2b.PNG)  
  
### 회원가입 사진받기  
이름은 문자열로 입력가능하지만 사진은 약간 변화가필요하다  
라이브러리를 이용해 받은 사진은 "file://"형태여서 사용이 불가해 사진을 스토리지에 업로드하고 업로드된 사진의 url을 이용하는 방법으로 해결한다  
스토리지에 업로드하고 signup 함수를 수정해 생성되는 사진과 이름을 설정하도록 수정  
![스토리지사진올리기](https://user-images.githubusercontent.com/75245755/114516715-a26d1b00-9c78-11eb-8984-e222e125f47b.PNG)  
screens/Sigunup.js 파일에 회원가입버튼함수에  
signup({email, password, name, photoUrl}) 을 추가해준다  
파이어베이스 rule에 사진추가  
![파이어베이스 사진추가](https://user-images.githubusercontent.com/75245755/114517089-f37d0f00-9c78-11eb-9ed2-d50fddce834f.PNG)  

### 스피너 항시뜨지않게하기  
![스피너 버튼로딩](https://user-images.githubusercontent.com/75245755/114535417-fe409f80-9c8a-11eb-9333-9552858b18c1.PNG)  

### 메인화면 탭네비게이션  
npm i @react-navigation/bottom-tabs  

### DB규칙 생성  
![db규칙](https://user-images.githubusercontent.com/75245755/114681496-2e4e7800-9d49-11eb-9338-d7292935ed02.PNG)  














