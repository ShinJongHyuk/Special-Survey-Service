# SSS(Special Survey Service)


## 1. 💻 Developer

<div align="center">
<table>
  <tr>
    <td align="center"><br /><p><b>박슬빈</b></p></<small>🍀 Back-End Developer</small></td>
    <td align="center"><br /><p><b>최연재</b></p></<small>🍀 Back-End Developer</small></td>
    <td align="center"><br /><p><b>권선근</b></p></<small>🍀 Back-End Developer</small></td>
  </tr> 
  <tr>
    <td align="center"><br /><p><b>곽보선</b></p></<small>🍀 Front-End Developer</small></td>
    <td align="center"><br /><p><b>전대현</b></p></<small>🍀 Front-End Developer</small></td>
    <td align="center"><br /><p><b>신종혁</b></p></<small>🍀 Front-End Developer</small></td>
  </tr>
</table>
</div>
<br>

## 2. ✍️ 서비스 소개
SSS는 설문조사 후 투명하고 공정하게 리워드를 지급받는 서비스입니다.
저희는 제작한 설문에 대해 랜덤 알고리즘을 이용하여 당첨자를 추출하도록 하였습니다. 그리고 실시간 로그를 이용하여 당첨자를 투명하게 공개함으로써 모두가 당첨자를 확인할 수 있도록 하였습니다.
<br>

## 3. 💡 주요 기능

### 회원가입/ 로그인 페이지

> 회원가입 기능

- 회원가입을 할 수 있습니다.
![회원가입](/Image/signup.png)


### 메인 페이지

> 설문 목록 보기

- 일반 설문, 즉시 당첨 설문의 목록을 볼 수 있습니다.
![메인 페이지](/Image/mainPage.png) 

### 설문 목록 페이지

> 목록 보기

- 모든 설문 목록을 볼 수 있는 페이지입니다.
![일반 페이지](/Image/normal.png)

### 설문 제작 페이지

> 설문 설정

- 설문의 대상, 타입 기간을 설정할 수 있는 페이지입니다.
![설문 설정 페이지](/Image/surveySet.png)

> 설문 제작

- 여러 타입을 질문을 제작할 수 있는 페이지입니다.
![설문 제작 페이지](/Image/makesurvey.png)

> 결제

- 설문 제작 시 제공할 리워드를 결제하는 페이지입니다.
![설문 제작 페이지](/Image/payment.png)

### 설문 응답 페이지

> 설문 디테일

- 설문에 대한 정보 및 실시간 당첨자 로그를 볼 수 있는 페이지 입니다
![설문 디테일 페이지](/Image/surveyDetail.png)

> 설문 응답

- 설문에 대한 응답을 할 수 있는 페이지입니다.
![설문 응답 페이지](/Image/surveyAnswer.png)

> 실시간 당첨 결과

- 설문 제출 완료 후 실시간으로 당첨여부를 확인할 수 있는 페이지입니다.
![설문 결과 페이지](/Image/surveyResult.png)
 
### 마이 페이지

> 마이 페이지

- 회원정보 수정, 만든 설문, 응답한 설문, 당첨된 상품을 확인할 수 있는 페이지입니다.
![마이 페이지](/Image/myPage.png)

### 통계 페이지

> 통계 페이지

- 제작한 설문에 대한 응답의 통계를 확인할 수 있는 페이지 입니다.
![통계 페이지](/Image/statistics.png)

### 결제 정보 확인 페이지

> 결제 정보 확인 페이지
- 설문 응답 시 제공할 리워드를 결제한 후 결제 정보를 확인할 수 있는 페이지
![결제 확인 페이지](/Image/paymentResult.png)


## 4. ⚙️ 기술 스택

### 사용 기술 스택

| Next.js(v13.4.8) | React(v18.2.0) | TypeScript(v5.1.6) | Node(v16.20.1) |
| :--------------: | :------------: | :----------------: | :------------: |
|    ![nextjs]     |    ![react]    |        ![ts]       |     ![node]    |

| styled-component(v6.0.2) | zustand(v4.3.9) |
| :----------------------: | :-------------: |
|           ![sc]          |                 |

### 개발 환경

|  Eslint(v8.2.0)   | Prettier(v3.0.0) |
| :---------------: | :--------------: |
|     ![eslint]     |    ![prettier]   |


[nextjs]: /Image/stack/nextjs.svg
[ts]: /Image/stack/typescript.svg
[react]: /Image/stack/react.svg
[node]: /Image/stack/node.svg
[eslint]: /Image/stack/eslint.svg
[prettier]: /Image/stack/prettier-color.svg
[sc]: /Image/stack/styledcomponents-color.svg


## 5. 📝 참고사항
1. 즉시당첨 설문
- 설문이 끝난 즉시 바로 리워드 당첨 여부를 확인할 수 있다.

2. 일반 설문
- 일반설문은 설문이 끝난 후 추첨번호를 부여받으며 설문이 마감된 후 번호를 추첨하는 알고리즘을 통해 당첨자를 선정하는 방식이며, 마감 기한이 24시간이 남으면 설문 타입명이 일반설문에서 타임어택으로 바뀐다.