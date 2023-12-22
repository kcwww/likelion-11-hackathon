# Hackathon

## TEAM AILION

## 👨‍👩‍👧‍👦 팀 역할 👨‍👧‍👦 
|이름|한윤수|안재진|박서희|김찬우|손민주|윤채연|
|:----|:----|:----|:----|:----|:----|:----|
|구분|Back-End|Back-End|Back-End|Front-End|Front-End|Front-End|
|역할|`로그인` `AI 추천 페이지` `마이 페이지` `서버 구축 및 배포`|`AI 커뮤니티` `메인 페이지` `마이페이지`|`AI 정보 페이지`|`프론트`|`프론트`|`프론트`|

## 🧑‍💻 프로젝트 소개 🧑‍💻
### 프로젝트 개요
![image](https://github.com/likelion11-kangwon/Hackathon-1/assets/69111959/7fbe2828-77c7-48dc-828d-24a24ca0687e)

### 프로젝트 아키텍처
![image](https://github.com/likelion11-kangwon/Hackathon-1/assets/69111959/6d322b27-71fc-4a35-babd-6ce66e8c9c63)

### 프로젝트 ERD
![image](https://github.com/likelion11-kangwon/Hackathon-1/assets/69111959/b34db263-bddc-4c57-90b5-540019fc8c39)


## 기술 스택
 ### Frontend<br>
 * React

<br>

 ### Backend<br>
* Java 16
* SpringBoot 2.7.14
* Spring Data JPA
* Spring Security
* JWT
* Lombok
* Validation 
* MySQL 8.0.31
* AWS EC2


## 깃 규칙
### 작업태그
|message|설명|
|---|---|
|**Init**|프로젝트 초기 설정|
|**Feat**|새로운 기능 추가, 디자인 변경사항|
|**Fix**|버그 수정|
|**Docs**|문서 추가 및 수정 (README, templates, Assets)|
|**Refactor**|코드 리팩토링 (성능 개선만 해당)|
|**Style**|코드 의미 및 성능에 영향을 주지 않는 수정|
|**Chore**|빌드, 설정 파일 등의 수정|
|**Comment**|주석의 수정|


### Commit message 형태
- `[작업태그] #이슈번호 - 작업내용`  ex) [Fix] #6 -fix css conflict
- commit 메세지는 영어로 작성, 동사로 시작 부탁드립니다.
- 최대한 문서 마다 고유 commit message가 보일수 있도록 여러번 commit 부탁드립니다.


### Branch 운영
원래는 개발, 배포, 기능구현 브랜치를 구성하는것이 일반적이나, 팀 프로젝트 기반 개인 브랜치 별로 나누었습니다.
- main : FE, BE 코드를 합친 최종 버전, 현재 배포 가능한 서비스
- FE/main : FE 코드를 합친 FE 제작 브랜치
- BE/main : BE 코드를 합친 BE 제작 브랜치
- develop : 작성한 FE, BE 코드 merge 후 배포 전 개발 브랜치
- bug/bugName : main 브랜치에서 급한 버그 발생시, 버그 해결을 위해 main에서 분기하는 브랜치. Merge 이후 remote에서 삭제.

![workflow](https://github.com/likelion11-kangwon/MaeumgaGYM/assets/98443541/1eed7807-171b-474f-8a8d-17264c86d75f)
