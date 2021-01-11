const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const INITIAL_COLOR = "#2c2c2c";
// 크기 오류가 있을 수 있으므로 div(canvas)의 크기를 가져와서 입력
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
// ctx 기본 속성
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width, canvas.height);
ctx.lineWidth = 2.5;


// stroke style 의 영향을 받지 않음 > fillStyle
// ctx.fillStyle = "green";
// ctx.fillRect(50,20,100,40);

function startPainting(){
  painting = true;
}

let painting = false;
let filling = false;
function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

function stopPainting(event){
  painting = false;
}
function onMouseDown(event){
  painting = true;
}
function handleColorClick(event){
  const color = event.target.style.backgroundColor;
  console.log(color);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event){
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(){
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  }else{
    filling = true;
    mode.innerText = "Painting";
  }
}

function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }
}
// 우클릭 방지
function handleCM(event){
  event.preventDefault();
}

function handleSaveClick(){
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  // 이미지 링크
  link.href = image;
  // 파일 이름
  link.download = "PaintJs[EXPORT]";
  console.log(link);
  // fake click;
  link.click();
}

if(canvas){
  canvas.addEventListener("mousemove",onMouseMove);
  // clientx,y 는 윈도우의 위치
  // offsetx,y 는 해당 el 의 위치
  canvas.addEventListener("mousedown",startPainting);
  canvas.addEventListener("mouseup",stopPainting);
  canvas.addEventListener("mouseleave",stopPainting);
  canvas.addEventListener("click",handleCanvasClick);
  canvas.addEventListener("contextmenu",handleCM);
}
if(colors){
// htmlcollection type -> array 로 변환
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))
}

if(range){
  range.addEventListener("input",handleRangeChange)  
}

if(mode){
  mode.addEventListener("click",handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click",handleSaveClick);
}