# jsPainting
jsPainting
2021-01-11 노마드 코더 js 그림판 만들기
![image](https://user-images.githubusercontent.com/52985166/104195347-d9f3dd80-5465-11eb-94a3-2f9b8cd1b80d.png)
<pre>
<code>
// 우클릭 방지   
function handleCM(event){   
   event.preventDefault();   
}   
</code>
</pre>
<pre>
<code>
// 이미지 다운로드   
function handleSaveClick(){   
   const image = canvas.toDataURL("image/jpeg");   
   const link = document.createElement("a");   
   // 이미지 링크   
   link.href = image;   
   // 파일 이름   
   link.download = "PaintJs[EXPORT]";   
   console.log(link);   
   // fake click;   
   link.click();   
}   
</code>
</pre>
