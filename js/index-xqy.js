

var z2=document.getElementById("z2");
var z4=document.getElementById("z4");
var z5=document.getElementById("z5");
var z7=document.getElementById("z7");
var bb2= document.getElementById("bb2");
z5.onclick=function(){
	// var z5img = document.createElement('img');
 //    z5img.setAttribute('src',"../images/index-xqy/duigou.png");
 //    z5img.className='z4';
 	z7.setAttribute('src',"../images/index-xqy/duigou.png");
    z2.className='z5';
    z5.className='z2';
    z4.removeAttribute("src");
    bb2.innerHTML='"200ml"';
}
z2.onclick=function(){
	z2.className='z2';
    z5.className='z5';
    z4.setAttribute('src',"../images/index-xqy/duigou.png");
    z7.removeAttribute("src");
    bb2.innerHTML='"150ml"';
}
var aa3=document.getElementById("aa3");
var aa4=document.getElementById("aa4");
var aa5=document.getElementById("aa5");
aa5.onmouseover=function(){
	if(aa4.innerHTML==5)
		aa5.style.cursor="not-allowed";
	else
		aa5.style.cursor="pointer";
}
aa3.onmouseover=function(){
	if(aa4.innerHTML==1)
		aa3.style.cursor="not-allowed";
	else
		aa3.style.cursor="pointer";	
}
aa3.onclick=function(){
	if(aa4.innerHTML>1)
		aa4.innerHTML --;
	if(aa4.innerHTML==1)
		aa3.style.cursor="not-allowed";
	else
		aa3.style.cursor="pointer";	
}
aa5.onclick=function(){
	if(aa4.innerHTML<5)
		aa4.innerHTML ++;
	if(aa4.innerHTML==5)
		aa5.style.cursor="not-allowed";
	else
		aa5.style.cursor="pointer";
}

var cc2=document.getElementById("cc2");
var box = document.getElementById("box");
var x = document.getElementById("x");
var x2 = document.getElementById("x2");
var effectItem = document.getElementById("body");
var divItem = document.getElementById("cover");
cc2.onclick=function(){
	box.style.display='block';
	divItem.style.display='block';
	x.style.position="static";
	x2.style.position="static";
	divItem.style.lineHeight=effectItem.offsetHeight+"px";
	divItem.style.width=effectItem.offsetWidth+"px";
	divItem.style.height=effectItem.offsetHeight+"px";
	// divItem.style.top=effectItem.offsetTop+"px";
	// divItem.style.left=effectItem.offsetLeft+"px";
}
var box1=document.getElementById("box1");
var box3=document.getElementById("box3");
box3.onclick=function(){
	box.style.display='none';
	divItem.style.display='none';
	x.style.position="relative";
	x2.style.position="relative";
}
box1.onclick=function(){
	box.style.display='none';
	divItem.style.display='none';
	x.style.position="relative";
	x2.style.position="relative";
}
var x8 =document.getElementById("x8");
var x9 =document.getElementById("x9");
var x7 =document.getElementById("x7");
x8.onmouseover=function(){
	x8.style.borderStyle='solid';
	x8.style.borderColor='#ff9003';
	x8.style.borderWidth='2px';
	x7.setAttribute('src',"../images/index-xqy/pp0.jpeg");
	x9.style.borderStyle='0';
	x9.style.borderColor='0';
	x9.style.borderWidth='0';
}
x9.onmouseover=function(){
	x8.style.borderStyle='0';
	x8.style.borderColor='0';
	x8.style.borderWidth='0';
	x7.setAttribute('src',"../images/index-xqy/pp1.jpeg");
	x9.style.borderStyle='solid';
	x9.style.borderColor='#ff9003';
	x9.style.borderWidth='2px';
}
var big= document.getElementById("big");
var slider = document.getElementById("slider");
var bimg = document.getElementById("bimg");
var glass = document.getElementById("glass");
x2.onmouseover=function(){
    slider.style.display='block';
	big.style.display='block';
}
x2.onmouseout=function(){
    slider.style.display='none';
	big.style.display='none';
}
x2.onmousemove=function(ev){
	bimg.setAttribute('src',x7.getAttribute('src'));
	var ev=ev||event;
	  
	var oL=ev.clientX-x2.getBoundingClientRect().left-slider.offsetWidth/2;
	var oT=ev.clientY-x2.getBoundingClientRect().top-slider.offsetHeight/2;
	  
	var oMaxw=x2.offsetWidth-slider.offsetWidth;
	var oMaxh=x2.offsetHeight-slider.offsetHeight;
	  
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
	
	var oBmaxw = big.offsetWidth - bimg.offsetWidth; 
	var oBmaxh = big.offsetHeight - bimg.offsetHeight; 
	bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
	bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
}