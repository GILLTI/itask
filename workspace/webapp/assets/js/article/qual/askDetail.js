const tagBtns = document.querySelectorAll('.lch-askDetail-tag-btn');

tagBtns.forEach((tagBtn) => {
  tagBtn.addEventListener('click', function () {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
    // 모든 버튼에서 lch-ask-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('lch-askDetail-select'));

    // 클릭된 버튼에 lch-ask-select 클래스 추가
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
    // 모든 버튼에서 lch-askDetail-select 클래스 제거
    tagBtns.forEach((btn) => btn.classList.remove('lch-askDetail-select'));

    // 클릭된 버튼에 lch-askDetail-select 클래스 추가
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> keh
>>>>>>> main
=======
>>>>>>> keh
>>>>>>> main
    tagBtn.classList.add('lch-askDetail-select');
  });
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
//게시글 모니터 버튼 누르면 1증가
let count = -1;
const img = document.getElementById('Detail-moniter-img');
const countplus = document.getElementById('Detail-monitercount');
img.addEventListener('click', function () {
  if (count === -1) {
    count = 1;
  } else {
    count = -1;
  }
  countplus.textContent = parseInt(countplus.textContent) + count;
});

//수정삭제 드롭다운
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main

// 게시글 모니터
let count = -1;

const img = document.getElementById('Detail-moniter-img')
const countplus = document.getElementById('Detail-monitercount')

img.addEventListener('click',function(){
  if(count===-1){
    count = 1;
  }else{
    count = -1;
  }
  countplus.textContent = parseInt(countplus.textContent)+count;
})

// 댓글 모니터
let commentCnt = -1;

const monitorClk = document.querySelector('.lch-askDetail-comment-cnt');
//lch-askDetail-comment-monitor-num
const commentMPlus = document.getElementById('askDetail-comment-monitor-num');

console.log(monitorClk);
console.log(commentMPlus);

monitorClk.addEventListener('click',function(){
  if(commentCnt===-1){
    commentCnt = 1;
  }else{
    commentCnt = -1;
  }
  commentMPlus.textContent = parseInt(commentMPlus.textContent)+commentCnt;
})

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> keh
>>>>>>> main
=======
>>>>>>> keh
>>>>>>> main
function Dropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
//게시물 삭제
const postDeletebtn = document.getElementById('postdelete');
postDeletebtn.addEventListener('click', function () {
  confirm('게시글을 삭제하시겠습니까?');
});

//게시글 공유
const postshare = document.getElementById('Detail-share-img');
postshare.addEventListener('click', function () {
  confirm('다음 링크를 복사하세요');
});


=======
>>>>>>> keh
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
// 댓글 수 초기화는 0으로 해야되는데 html에 더미 댓글 하나 있어서
// 초기 세팅을 1로 설정해뒀습니다~
// 나중에 바꿔주시면 됩니다!
let commentCount = 1;

function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
>>>>>>> main

=======
  
>>>>>>> keh
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
  // 댓글이 비어 있지 않으면
  if (commentText !== '') {
    // 새로운 댓글을 생성

    // 댓글의 모든 정보를 담은 제일 큰 박스
    const commentArea = document.createElement('div');
    commentArea.classList.add('lch-askDetail-comment-show');

    // 댓글 작성자
    const commmentAuthor = document.createElement('span');
    commmentAuthor.classList.add('lch-askDetail-commnet-author');
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    //lch-askDetail-commnet-author
=======
>>>>>>> keh
>>>>>>> main
=======
    //lch-askDetail-commnet-author
=======
>>>>>>> keh
>>>>>>> main
    commmentAuthor.textContent = "3inch 임초현🏅"; // 나중에 불러오는거 여기 추가

    // 댓글 (진짜)
    const comment = document.createElement('div');
    comment.classList.add('lch-askDetail-comment-section');
    comment.textContent = commentText;

    // 작성일자, 조회수, 모니터 담은 박스
    const commentInfo = document.createElement('div');
    commentInfo.classList.add('lch-askDetail-comment-info');

    // 작성일자
    const commentDate = document.createElement('span');
    commentDate.classList.add('lch-askDetail-comment-date');
    commentDate.textContent = "1시간 전" // 나중에 불러오는거 여기 추가

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main
    // 조회수
    const commentViews = document.createElement('span');
    commentViews.classList.add('lch-askDetail-comment-views');
    commentViews.textContent = "조회수 316"; // 나중에 불러오는거 여기 추가

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> keh
>>>>>>> main
=======
>>>>>>> keh
>>>>>>> main
    // 모니터 수, 이미지 박스
    const commentMonitor = document.createElement('span');
    commentMonitor.classList.add('lch-askDetail-comment-monitor');

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main

    // 모니터 수
    const commentMonitorNum = document.createElement('span');
    commentMonitorNum.classList.add('lch-askDetail-comment-monitor-num');
    commentMonitorNum.textContent = " 0"; // 나중에 불러오는거 여기 추가

    //댓글 삭제
    const commentdelete = document.createElement('span');
    commentdelete.addEventListener('click', function () {
      if(comment.classList.contains("lch-askDetail-delete-comment-style")){
        alert('이미 삭제된 댓글입니다.');
      }else if (confirm('댓글을 삭제하시겠습니까?')) {
        comment.textContent = '삭제된 댓글입니다.';
        comment.classList.add('lch-askDetail-delete-comment-style');
        // 모니터 수 - 변경
        commentMonitorNum.textContent = '-';
      }
    });
    commentdelete.classList.add('lch-askDetail-comment-delete');
    commentdelete.textContent = " 삭제";

    //댓글 수정
    const commentmodify = document.createElement('span');


    
    // commentmodify.addEventListener('click', function () {
    //   if (comment.textContent === '삭제된 댓글입니다.') {
    //     alert('삭제한 댓글은 수정할 수 없습니다.')
    //   } else if (confirm('댓글을 수정하시겠습니까?')) {

    //     const modifycomment = prompt('수정할 댓글을 입력해주세요');
    //     comment.textContent = modifycomment + ' (수정됨)';
    //   }
    // });

    //null값 출력 오류 코드 수정 ------------------------------------
    commentmodify.addEventListener('click', function () {
      if (comment.textContent === '삭제된 댓글입니다.') {
        alert('삭제한 댓글은 수정할 수 없습니다.')
      } else if (confirm('댓글을 수정하시겠습니까?')) {

        const modifycomment = prompt('수정할 댓글을 입력해주세요');
        //여깅입니다 준혁님!
        console.log(modifycomment);
        if(modifycomment!==null){
          comment.textContent = modifycomment + ' (수정됨)';
        }
      }
    });
    // 코드 수정 ---------------------------------------------------
    commentmodify.classList.add('lch-askDetail-comment-modify');
    commentmodify.textContent = "수정 ";

=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
    // 모니터 수
    const commentMonitorNum = document.createElement('span');
    //askDetail-comment-monitor-num
    commentMonitorNum.setAttribute('id', 'askDetail-comment-monitor-num');
    commentMonitorNum.textContent = " 24"; // 나중에 불러오는거 여기 추가
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> keh
>>>>>>> main
=======
>>>>>>> keh
>>>>>>> main

    //모니터 이미지
    const monitorImg = document.createElement('img');
    monitorImg.setAttribute('src', './../../../assets/img/monitor.png');
    monitorImg.setAttribute('alt', '사진오류');

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
    let commentCnt = -1;

    monitorImg.addEventListener('click', function () {
      if (comment.textContent === '삭제된 댓글입니다.') {
        alert('삭제한 댓글에는 모니터기능이 제한됩니다.');
        commentCnt = 316;
      } else if (commentCnt === -1) {
        commentCnt = 1;
        commentMonitorNum.textContent = parseInt(commentMonitorNum.textContent) + commentCnt;
      } else {
        commentCnt = -1;
        commentMonitorNum.textContent = parseInt(commentMonitorNum.textContent) + commentCnt;
      }
    });

=======
>>>>>>> keh
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
    // 댓글을 댓글 섹션에 추가
    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(commentArea);
    commentArea.appendChild(commmentAuthor);
    commentArea.appendChild(comment);
    commentArea.appendChild(commentInfo);
    commentInfo.appendChild(commentDate);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
    commentInfo.appendChild(commentMonitor);
    commentMonitor.appendChild(monitorImg);
    commentMonitor.appendChild(commentMonitorNum);
    commentInfo.appendChild(commentmodify);
    commentInfo.appendChild(commentdelete);

=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
    commentInfo.appendChild(commentViews);
    commentInfo.appendChild(commentMonitor);
    commentMonitor.appendChild(monitorImg);
    commentMonitor.appendChild(commentMonitorNum);
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> keh
>>>>>>> main
=======
>>>>>>> keh
>>>>>>> main
    // 댓글 수 증가
    commentCount++;

    // 댓글 수 업데이트
    document.getElementById('comment-count').textContent = commentCount;

    // 입력창 비우기
    commentInput.value = '';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
=======
>>>>>>> keh
>>>>>>> main
=======
    
=======
>>>>>>> keh
>>>>>>> main
  } else {
    alert('댓글을 입력해주세요!');
  }
}