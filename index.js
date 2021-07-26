function hide() {
  document.getElementById('button').style.display = 'none';
  document.body.style.cursor = 'none';
}
let per = document.getElementById('per');
let p = 0;
function edit(num) {
  if (p <= 100) {
    per.innerHTML = `업데이트 작업 중  ${num}%<br />PC를 끄지 마세요. 이 작업은 시간이 걸립니다.`;
  }
}
function makeRandom(min, max) {
  var RandVal = Math.floor(Math.random() * (max - min + 1)) + min;
  return RandVal;
}
function count() {
  var rand = makeRandom(5000, 8000);
  setInterval(function () {
    p++;
    edit(p);
  }, rand);
}
