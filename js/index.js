var aaaa=document.getElementById("zz6");
var bbbb=document.getElementById("zz7");
aaaa.add(new Option(10));
aaaa.add(new Option(50));
aaaa.add(new Option(100));
aaaa.onclick=function(){
	var index1=aaaa.selectedIndex ; 
	var sum = aaaa.options[index1].text;
	bbbb.innerHTML = "¥" +" "+sum;
}

var box = document.getElementById('box');
var nav = document.getElementById('nav');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var index = 1;
var timer;
var isMoving = false;

window.onload = function(){
	var cover = document.getElementById('window');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>130){
			cover.style.position = "fixed";
			cover.style.left="0";
			cover.style.top="0";
			// box.style.position = "relative";
			// slider.style.position = "absolute";
			// nav.style.position = "absolute";
		}
		else{
			// box.style.position = "relative";
			// slider.style.position = "absolute";
			// nav.style.position = "absolute";
			cover.style.position = "static";
		}
	}
}

box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-809*index});
		}
	})(i);
}
right.onclick = next;
left.onclick = prev;
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-809*index},function(){
		if(index==0){
			slider.style.left = '-4854px';
			index = 6;
		}
		isMoving = false;
	});
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-809*index},function(){
		if(index==7){
			slider.style.left = '-809px';
			index = 1;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var div0 = document.getElementById("div0");
var div3 = document.getElementById("div3");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var div=new Array(div0,div3,div8);
for(var num=0;num<3;num++){
	div[num].onmouseover=function(){
		this.style.right="0";
	}
	div[num].onmouseout=function(){
		this.style.right="-80px";
	}
}
var div71 = document.getElementById("div71");
var div72 = document.getElementById("div72");
div7.onmouseover=function(){
	this.style.right="0";
	div71.setAttribute('src',"");
	div71.className='';
	div72.setAttribute('src',"../images/index/erwei.png")
}
div7.onmouseout=function(){
	this.style.right="-80px";
	div71.setAttribute('src',"../images/index/serwei.png");
	div71.className='div71';
	div72.setAttribute('src',"")
}

var ww = document.getElementById("ww");
var all = document.getElementById("all");
var con = document.getElementById("con");
con.innerHTML=all.innerHTML;
var time;
ww.onmouseover = function(){
	clearInterval(time)
}
ww.onmouseout = function(){
	time = setInterval(roll, 50);
}
time = setInterval(roll,50);
function roll(){
	if(ww.scrollTop>=con.offsetHeight)
    {
      ww.scrollTop=0;
    }else
    {
      ww.scrollTop++;
    }
}
