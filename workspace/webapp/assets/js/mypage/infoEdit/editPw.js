// 내정보 수정하기 - 3.비밀번호변경

// 새 비밀번호 눈버튼 누르면 password에서 text박스로 바뀌게 하는 기능
const input = document.querySelector(".keh-editPw-pw");  // 이거는 input 태그의 class명을 적용하면됩니다 
const mark = document.querySelector(".mark"); // 이거는 눈있는 태그에 class="mark" 를 추가하고 사용해야합니다

let pwStatus = false; // 초기 상태: 비밀번호 숨김

mark.addEventListener("click", () => {
  if (pwStatus) {
    input.type = "password"; // 비밀번호 숨김
    mark.src = "./../../../assets/img/hidden 4.png"; // 아이콘 변경
  } else {
    input.type = "text"; // 비밀번호 표시
    mark.src = "./../../../assets/img/Eye.png"; // 아이콘 변경
  }
  pwStatus = !pwStatus; // 상태 변경
});


//비밀번호 확인 눈버튼 누르면 password에서 text박스로 바뀌게 하는 기능
const input2 = document.querySelector(".keh-editPw-pw2");  // 이거는 input 태그의 class명을 적용하면됩니다 
const mark2 = document.querySelector(".mark2"); // 이거는 눈있는 태그에 class="mark" 를 추가하고 사용해야합니다

// let pwStatus = false; // 초기 상태: 비밀번호 숨김

mark2.addEventListener("click", () => {
  if (pwStatus) {
    input2.type = "password"; // 비밀번호 숨김
    mark2.src = "./../../../assets/img/hidden 4.png"; // 아이콘 변경
  } else {
    input2.type = "text"; // 비밀번호 표시
    mark2.src = "./../../../assets/img/Eye.png"; // 아이콘 변경
  }
  pwStatus = !pwStatus; // 상태 변경
});


// 비밀번호 확인 밑 안내문구
const pwCheck1 = document.querySelector(".keh-editPw-check1").innerHTML;
const pwCheck2 = document.querySelector(".keh-editPw-check2").innerHTML;

const noticeWrong = document.querySelector(".keh-editPw-check2-1");
const noticeRight = document.querySelector(".keh-editPw-check2-2");
// console.log(pwCheck);

pwCheck2.checkSame("click", () => {
  if (pwCheck1 === pwCheck2) {
    noticeRight.setAttribute("display","block");
    noticeRight.setAttribute("display","none");
  } else {
    noticeRight.setAttribute("display","none");
    noticeRight.setAttribute("display","block");
  }
});