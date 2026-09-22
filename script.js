/*====================================

        TYPING EFFECT

====================================*/

const typing = document.getElementById("typing");

const words = [

"Computer Science Student",

"Future Software Engineer",

"Full Stack Developer",

"C# Programmer",

"Web Developer",

"Networking Enthusiast"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent = currentWord.substring(0,charIndex);

charIndex++;

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent = currentWord.substring(0,charIndex);

charIndex--;

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();

/*====================================

        MOBILE MENU

====================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () =>{

navLinks.classList.toggle("active");

}

/*====================================

        CLOSE MENU

====================================*/

document.querySelectorAll(".nav-links a")

.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/*====================================

        TOP BUTTON

====================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}
/*====================================

        SCROLL REVEAL

====================================*/

const hiddenElements = document.querySelectorAll(

".section, .project-card, .skill-box, .certificate-card, .timeline-item"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*====================================

        ACTIVE NAVBAR

====================================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/*====================================

        NAVBAR BACKGROUND

====================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(5,11,22,.92)";

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

navbar.style.background="rgba(0,0,0,.25)";

navbar.style.boxShadow="none";

}

});

/*====================================

        SMOOTH LINKS

====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*====================================

        PARALLAX EFFECT

====================================*/

const profileBox = document.querySelector(".profile-box");

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.clientX)/35;
const y = (window.innerHeight/2 - e.clientY)/35;

if(profileBox){

profileBox.style.transform =

`rotateY(${-x}deg) rotateX(${y}deg)`;

}

});

/*====================================

        HERO FLOATING CARDS

====================================*/

const floatingCards = document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(e)=>{

const moveX = (e.clientX/window.innerWidth)*20;
const moveY = (e.clientY/window.innerHeight)*20;

floatingCards.forEach((card,index)=>{

const speed=(index+1)*0.25;

card.style.transform=

`translate(${moveX*speed}px,${moveY*speed}px)`;

});

});

/*====================================

        SKILL BAR ANIMATION

====================================*/

const progressBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width = entry.target.style.width;

entry.target.style.width="0";

setTimeout(()=>{

entry.target.style.transition="1.5s";

entry.target.style.width=width;

},150);

}

});

},{threshold:.5});

progressBars.forEach(bar=>{

skillObserver.observe(bar);

});

/*====================================

        PROJECT HOVER

====================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*====================================

        BUTTON RIPPLE EFFECT

====================================*/

const buttons = document.querySelectorAll(

".btn,.btn-outline,.btn-download"

);

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
/*====================================

        CURSOR GLOW

====================================*/

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

/*====================================

        PAGE LOADING

====================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*====================================

        PROJECT CARD EFFECT

====================================*/

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/18;

const rotateY = (x - rect.width/2)/18;

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

/*====================================

        COUNTER ANIMATION

====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target/120;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*====================================

        IMAGE FADE

====================================*/

document.querySelectorAll("img").forEach(img=>{

img.onload=()=>{

img.style.opacity="1";

};

});

/*====================================

        CONSOLE MESSAGE

====================================*/

console.log("%cAaron Areola Portfolio",

"color:#3b82f6;font-size:22px;font-weight:bold;");

console.log("%cDesigned with HTML, CSS & JavaScript",

"color:#06b6d4;font-size:14px;");
/*====================================

        RIPPLE STYLE

====================================*/

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

.btn,
.btn-outline,
.btn-download{

position:relative;
overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.45);

transform:scale(0);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

/* Cursor Glow */

.cursor-glow{

position:fixed;

width:25px;

height:25px;

border-radius:50%;

background:rgba(59,130,246,.35);

pointer-events:none;

transform:translate(-50%,-50%);

backdrop-filter:blur(4px);

transition:

left .05s linear,

top .05s linear;

z-index:99999;

}

/* Image Fade */

img{

opacity:0;

transition:opacity .8s ease;

}

`;

document.head.appendChild(rippleStyle);

/*====================================

        DISABLE IMAGE DRAG

====================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/*====================================

        OPTIONAL RIGHT CLICK

====================================*/

// Kung gusto mong i-disable ang right click,
// alisin lang ang // sa ibaba.

/*

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

*/

/*====================================

        OPTIONAL SHORTCUTS

====================================*/

// Para i-disable ang F12 at Ctrl+Shift+I,
// alisin lang ang // sa ibaba.

/*

document.addEventListener("keydown",(e)=>{

if(e.key==="F12"){

e.preventDefault();

}

if(

e.ctrlKey &&

e.shiftKey &&

e.key==="I"

){

e.preventDefault();

}

});

*/

/*====================================

        YEAR AUTO UPDATE

====================================*/

const yearText=document.querySelector(".copyright");

if(yearText){

yearText.innerHTML=

`© ${new Date().getFullYear()} Aaron Areola.
All Rights Reserved.`;

}

/*====================================

        PORTFOLIO READY

====================================*/

window.addEventListener("load",()=>{

console.clear();

console.log("%c✔ Portfolio Loaded Successfully",

"color:#22c55e;font-size:18px;font-weight:bold;");

});

/*====================================

        END OF SCRIPT.JS

        Version 2.0

        Aaron Areola Portfolio

====================================*/