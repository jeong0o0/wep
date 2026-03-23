// 현재 시간을 표시하는 기능
// 페이지가 로드될 때 'time' 아이디를 가진 요소가 있는 경우에만 실행되도록 안전하게 작성
if (document.getElementById('time')) {
  document.getElementById('time').innerHTML = new Date().toLocaleString()
}

// 배경색 변경 함수들
function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
}

function reset() {
  document.body.style.backgroundColor = 'linen'
}

// 학습 섹션: 이미지와 설명 표시 함수
// 주의: HTML.png, CSS.png, js.png 파일이 html 파일과 같은 위치에 있어야 합니다.
// 만약 img 폴더 안에 있다면 'img/HTML.png' 식으로 경로를 수정하세요.

function showhtml() {
  const fig = document.getElementById('fig')
  const desc = document.getElementById('desc')
  if (fig && desc) {
    fig.src = 'HTML.png' // 또는 'img/HTML.png'
    desc.innerHTML =
      '<span style="color:red;">HTML5</span>는 웹 페이지의 구조를 정의하는 마크업 언어입니다.'
  }
}

function showcss() {
  const fig = document.getElementById('fig')
  const desc = document.getElementById('desc')
  if (fig && desc) {
    fig.src = 'CSS.png' // 또는 'img/CSS.png'
    desc.innerHTML =
      '<span style="color:red;">CSS3</span>는 문서의 스타일을 지정하기 위한 언어입니다.'
  }
}

function showjs() {
  const fig = document.getElementById('fig')
  const desc = document.getElementById('desc')
  if (fig && desc) {
    fig.src = 'js.png' // 또는 'img/js.png'
    desc.innerHTML =
      '<span style="color:red;">JavaScript</span>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 합니다.'
  }
}

function hide() {
  const fig = document.getElementById('fig')
  const desc = document.getElementById('desc')
  if (fig && desc) {
    fig.src = ''
    desc.innerHTML = ''
  }
}
