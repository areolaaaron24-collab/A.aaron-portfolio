/*====================================

        INTRO SEQUENCE

====================================*/

const introScreen =
document.getElementById("intro-screen");

const introTyping =
document.getElementById("intro-typing");

const introFinalText =
document.querySelector(".intro-final-text");


const introLines = [

"I'M AARON AREOLA.",

"A COMPUTER SCIENCE STUDENT.",

"A STUDENT PROGRAMMER.",

"A BUILDER.",

"A LEARNER.",

"AND THIS...",

"IS MY PORTFOLIO."

];


let introIndex = 0;


function startIntroSequence(){

    if(
        !introScreen ||
        !introTyping ||
        !introFinalText
    ){

        return;

    }


    introTyping.textContent = "";

    introTyping.style.opacity = "0";

    introTyping.style.transform =
    "translateY(20px)";

    introFinalText.style.opacity = "0";

    introFinalText.style.transform =
    "translate(-50%,calc(-50% + 20px))";


    setTimeout(()=>{

        introTyping.style.opacity = "1";

        introTyping.style.transform =
        "translateY(0)";

        showNextIntroLine();

    },700);

}


function showNextIntroLine(){

    if(
        introIndex >= introLines.length
    ){

        setTimeout(()=>{

            introTyping.style.opacity = "0";

            introTyping.style.transform =
            "translateY(-20px)";


            setTimeout(()=>{

                introFinalText.style.opacity = "1";

                introFinalText.style.transform =
                "translate(-50%,-50%)";


                setTimeout(()=>{

                    introScreen.classList.add(
                        "intro-hide"
                    );


                    setTimeout(()=>{

                        introScreen.style.display =
                        "none";

                    },1000);

                },1800);

            },500);

        },600);

        return;

    }


    introTyping.style.opacity = "0";

    introTyping.style.transform =
    "translateY(20px)";


    setTimeout(()=>{

        introTyping.textContent =
        introLines[introIndex];


        introTyping.style.opacity = "1";

        introTyping.style.transform =
        "translateY(0)";


        introIndex++;


        setTimeout(()=>{

            showNextIntroLine();

        },1100);

    },350);

}


if(introScreen){

    startIntroSequence();

}


/*====================================

        TYPING EFFECT

====================================*/

const typing =
document.getElementById("typing");


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

    if(!typing){

        return;

    }


    const currentWord =
    words[wordIndex];


    if(!deleting){

        typing.textContent =
        currentWord.substring(
            0,
            charIndex
        );


        charIndex++;


        if(
            charIndex >
            currentWord.length
        ){

            deleting = true;


            setTimeout(
                typeEffect,
                1500
            );


            return;

        }

    }else{

        typing.textContent =
        currentWord.substring(
            0,
            charIndex
        );


        charIndex--;


        if(charIndex < 0){

            deleting = false;

            wordIndex++;


            if(
                wordIndex >=
                words.length
            ){

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 50 : 100

    );

}


typeEffect();


/*====================================

        MOBILE MENU

====================================*/

const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");


if(
    menuBtn &&
    navLinks
){

    menuBtn.onclick = ()=>{

        navLinks.classList.toggle(
            "active"
        );

    };

}


/*====================================

        CLOSE MENU

====================================*/

document.querySelectorAll(
    ".nav-links a"
)
.forEach(link=>{

    link.addEventListener(
        "click",
        ()=>{

            if(navLinks){

                navLinks.classList.remove(
                    "active"
                );

            }

        }
    );

});


/*====================================

        TOP BUTTON

====================================*/

const topBtn =
document.getElementById("topBtn");


if(topBtn){

    window.addEventListener(
        "scroll",
        ()=>{

            if(
                window.scrollY > 500
            ){

                topBtn.style.display =
                "block";

            }else{

                topBtn.style.display =
                "none";

            }

        }
    );


    topBtn.onclick = ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

}


/*====================================

        SCROLL REVEAL

====================================*/

const hiddenElements =
document.querySelectorAll(

    ".section, " +
    ".project-card, " +
    ".skill-box, " +
    ".certificate-card, " +
    ".timeline-item, " +
    ".learning-card"

);


const observer =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(
                entry.isIntersecting
            ){

                entry.target.classList.add(
                    "show"
                );

            }

        });

    },

    {

        threshold:.15

    }

);


hiddenElements.forEach(el=>{

    el.classList.add(
        "hidden"
    );

    observer.observe(el);

});


/*====================================

        ACTIVE NAVBAR

====================================*/

const sections =
document.querySelectorAll(
    "section"
);


const navItems =
document.querySelectorAll(
    ".nav-links a"
);


window.addEventListener(
    "scroll",
    ()=>{

        let current = "";


        sections.forEach(section=>{

            const sectionTop =
            section.offsetTop - 150;


            if(
                scrollY >= sectionTop
            ){

                current =
                section.getAttribute(
                    "id"
                );

            }

        });


        navItems.forEach(link=>{

            link.classList.remove(
                "active"
            );


            if(
                link.getAttribute("href")
                ===
                "#" + current
            ){

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/*====================================

        NAVBAR BACKGROUND

====================================*/

const navbar =
document.querySelector(
    ".navbar"
);


if(navbar){

    window.addEventListener(
        "scroll",
        ()=>{

            if(
                window.scrollY > 50
            ){

                navbar.style.background =
                "rgba(5,11,22,.92)";


                navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.25)";

            }else{

                navbar.style.background =
                "rgba(0,0,0,.25)";


                navbar.style.boxShadow =
                "none";

            }

        }
    );

}


/*====================================

        SMOOTH LINKS

====================================*/

document.querySelectorAll(
    'a[href^="#"]'
)
.forEach(anchor=>{

    anchor.addEventListener(
        "click",
        function(e){

            const href =
            this.getAttribute(
                "href"
            );


            if(
                !href ||
                href === "#"
            ){

                return;

            }


            const target =
            document.querySelector(
                href
            );


            if(target){

                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }
    );

});


/*====================================

        PARALLAX EFFECT

====================================*/

const profileBox =
document.querySelector(
    ".profile-box"
);


document.addEventListener(
    "mousemove",
    (e)=>{

        const x =
        (
            window.innerWidth / 2
            -
            e.clientX
        ) / 35;


        const y =
        (
            window.innerHeight / 2
            -
            e.clientY
        ) / 35;


        if(profileBox){

            profileBox.style.transform =
            `rotateY(${-x}deg) rotateX(${y}deg)`;

        }

    }
);


/*====================================

        HERO FLOATING CARDS

====================================*/

const floatingCards =
document.querySelectorAll(
    ".floating-card"
);


window.addEventListener(
    "mousemove",
    (e)=>{

        const moveX =
        (
            e.clientX /
            window.innerWidth
        ) * 20;


        const moveY =
        (
            e.clientY /
            window.innerHeight
        ) * 20;


        floatingCards.forEach(
            (card,index)=>{

                const speed =
                (index + 1) * 0.25;


                card.style.transform =

                `translate(
                    ${moveX * speed}px,
                    ${moveY * speed}px
                )`;

            }
        );

    }
);


/*====================================

        SKILL BAR ANIMATION

====================================*/

const progressBars =
document.querySelectorAll(
    ".progress-bar"
);


const skillObserver =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(
                entry.isIntersecting
            ){

                const width =
                getComputedStyle(
                    entry.target
                ).width;


                entry.target.style.width =
                "0";


                setTimeout(()=>{

                    entry.target.style.transition =
                    "1.5s";


                    entry.target.style.width =
                    width;

                },150);

            }

        });

    },

    {

        threshold:.5

    }

);


progressBars.forEach(bar=>{

    skillObserver.observe(bar);

});


/*====================================

        PROJECT HOVER

====================================*/

const projectCards =
document.querySelectorAll(
    ".project-card"
);


projectCards.forEach(card=>{

    card.addEventListener(
        "mouseenter",
        ()=>{

            card.style.transform =
            "translateY(-15px) scale(1.02)";

        }
    );


    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform =
            "translateY(0) scale(1)";

        }
    );

});


/*====================================

        BUTTON RIPPLE EFFECT

====================================*/

const buttons =
document.querySelectorAll(

    ".btn, " +
    ".btn-outline, " +
    ".btn-download"

);


buttons.forEach(button=>{

    button.addEventListener(
        "click",
        (e)=>{

            const ripple =
            document.createElement(
                "span"
            );


            const rect =
            button.getBoundingClientRect();


            const size =
            Math.max(
                rect.width,
                rect.height
            );


            ripple.style.width =
            size + "px";


            ripple.style.height =
            size + "px";


            ripple.style.left =

            (
                e.clientX
                -
                rect.left
                -
                size / 2
            )
            +
            "px";


            ripple.style.top =

            (
                e.clientY
                -
                rect.top
                -
                size / 2
            )
            +
            "px";


            ripple.classList.add(
                "ripple"
            );


            button.appendChild(
                ripple
            );


            setTimeout(()=>{

                ripple.remove();

            },600);

        }
    );

});


/*====================================

        CURSOR GLOW

====================================*/

const glow =
document.createElement(
    "div"
);


glow.className =
"cursor-glow";


document.body.appendChild(
    glow
);


document.addEventListener(
    "mousemove",
    (e)=>{

        glow.style.left =
        e.clientX + "px";


        glow.style.top =
        e.clientY + "px";

    }
);


/*====================================

        PAGE LOADING

====================================*/

window.addEventListener(
    "load",
    ()=>{

        document.body.classList.add(
            "loaded"
        );

    }
);


/*====================================

        PROJECT CARD EFFECT

====================================*/

projectCards.forEach(card=>{

    card.addEventListener(
        "mousemove",
        (e)=>{

            const rect =
            card.getBoundingClientRect();


            const x =
            e.clientX -
            rect.left;


            const y =
            e.clientY -
            rect.top;


            const rotateX =
            -(
                y -
                rect.height / 2
            ) / 18;


            const rotateY =
            (
                x -
                rect.width / 2
            ) / 18;


            card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform =

            "perspective(1000px) " +
            "rotateX(0deg) " +
            "rotateY(0deg) " +
            "scale(1)";

        }
    );

});


/*====================================

        COUNTER ANIMATION

====================================*/

const counters =
document.querySelectorAll(
    ".counter"
);


const counterObserver =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(
                entry.isIntersecting
            ){

                const counter =
                entry.target;


                const target =
                +counter.dataset.target;


                let count = 0;


                const speed =
                target / 120;


                const update = ()=>{

                    count += speed;


                    if(
                        count < target
                    ){

                        counter.innerText =
                        Math.floor(
                            count
                        );


                        requestAnimationFrame(
                            update
                        );

                    }else{

                        counter.innerText =
                        target;

                    }

                };


                update();


                counterObserver.unobserve(
                    counter
                );

            }

        });

    },

    {

        threshold:.5

    }

);


counters.forEach(counter=>{

    counterObserver.observe(
        counter
    );

});


/*====================================

        PROJECT MODAL

====================================*/

const projectModal =
document.getElementById(
    "project-modal"
);


const modalClose =
document.getElementById(
    "modal-close"
);


const modalOverlay =
document.querySelector(
    ".modal-overlay"
);


const modalImage =
document.getElementById(
    "modal-image"
);


const modalCategory =
document.getElementById(
    "modal-category"
);


const modalTitle =
document.getElementById(
    "modal-title"
);


const modalDescription =
document.getElementById(
    "modal-description"
);


const modalTech =
document.getElementById(
    "modal-tech"
);


const modalFeatures =
document.getElementById(
    "modal-features"
);


const modalGithub =
document.getElementById(
    "modal-github"
);


const projectData = {


    "school-management": {

        category:
        "C# / .NET PROJECT",


        title:
        "School Management System",


        image:
        "assets/image/project1.png",


        description:

        "A school management console application " +
        "built to practice student registration, " +
        "searching, sorting, records management, " +
        "and data handling.",


        tech:[

            "C#",

            ".NET",

            "Console",

            "Database"

        ],


        features:[

            "Student registration",

            "Student searching",

            "Sorting and organization",

            "Record management",

            "Data saving"

        ],


        github:
        "https://github.com/areolaaaron24-collab"

    },


    "attendx": {

        category:
        "PYTHON PROJECT",


        title:
        "AttendX – Attendance System",


        image:
        "assets/image/project2.png",


        description:

        "A school attendance management system " +
        "focused on student registration, teacher " +
        "accounts, schedules, attendance tracking, " +
        "and multiple attendance methods.",


        tech:[

            "Python",

            "SQLite",

            "CustomTkinter",

            "QR",

            "Face Recognition"

        ],


        features:[

            "Student Registration",

            "Teacher / TC Accounts",

            "Class Schedules",

            "Attendance Tracking",

            "QR Attendance",

            "Face Recognition",

            "Fingerprint Support"

        ],


        github:
        "https://github.com/areolaaaron24-collab"

    },


    "auto-calcu": {

        category:
        "C# / WINFORMS PROJECT",


        title:
        "Auto Calcu",


        image:
        "assets/image/project3.png",


        description:

        "A calculator application developed " +
        "using C# and Windows Forms with a " +
        "clean interface and support for " +
        "common arithmetic operations.",


        tech:[

            "C#",

            "WinForms"

        ],


        features:[

            "Addition",

            "Subtraction",

            "Multiplication",

            "Division",

            "Clean user interface"

        ],


        github:
        "https://github.com/areolaaaron24-collab"

    }

};


document.querySelectorAll(
    ".project-view-btn"
)
.forEach(button=>{

    button.addEventListener(
        "click",
        ()=>{

            const projectId =
            button.getAttribute(
                "data-project"
            );


            const project =
            projectData[projectId];


            if(
                !project ||
                !projectModal
            ){

                return;

            }


            modalCategory.textContent =
            project.category;


            modalTitle.textContent =
            project.title;


            modalDescription.textContent =
            project.description;


            modalImage.src =
            project.image;


            modalImage.alt =
            project.title;


            modalGithub.href =
            project.github;


            modalTech.innerHTML =
            "";


            project.tech.forEach(
                tech=>{

                    const tag =
                    document.createElement(
                        "span"
                    );


                    tag.textContent =
                    tech;


                    modalTech.appendChild(
                        tag
                    );

                }
            );


            modalFeatures.innerHTML =
            "";


            project.features.forEach(
                feature=>{

                    const li =
                    document.createElement(
                        "li"
                    );


                    li.textContent =
                    feature;


                    modalFeatures.appendChild(
                        li
                    );

                }
            );


            projectModal.classList.add(
                "active"
            );


            document.body.style.overflow =
            "hidden";

        }
    );

});


function closeProjectModal(){

    if(!projectModal){

        return;

    }


    projectModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
    "";

}


if(modalClose){

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


if(modalOverlay){

    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );

}


document.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.key === "Escape"
        ){

            closeProjectModal();

        }

    }
);


/*====================================

        IMAGE FADE

====================================*/

document.querySelectorAll(
    "img"
)
.forEach(img=>{


    img.setAttribute(
        "draggable",
        "false"
    );


    const showImage = ()=>{

        img.style.opacity =
        "1";

    };


    img.addEventListener(
        "load",
        showImage
    );


    if(
        img.complete
    ){

        showImage();

    }

});


/*====================================

        CONSOLE MESSAGE

====================================*/

console.log(
    "%cAaron Areola Portfolio",

    "color:#3b82f6;" +
    "font-size:22px;" +
    "font-weight:bold;"
);


console.log(
    "%cDesigned with HTML, CSS & JavaScript",

    "color:#06b6d4;" +
    "font-size:14px;"
);


/*====================================

        RIPPLE STYLE

====================================*/

const rippleStyle =
document.createElement(
    "style"
);


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

background:
rgba(255,255,255,.45);

transform:scale(0);

animation:
ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.cursor-glow{

position:fixed;

width:25px;

height:25px;

border-radius:50%;

background:
rgba(59,130,246,.35);

pointer-events:none;

transform:
translate(-50%,-50%);

backdrop-filter:
blur(4px);

transition:

left .05s linear,

top .05s linear;

z-index:99999;

}

#intro-typing,
.intro-final-text{

transition:

opacity .5s ease,

transform .5s ease;

}

`;


document.head.appendChild(
    rippleStyle
);


/*====================================

        DISABLE IMAGE DRAG

====================================*/

document.querySelectorAll(
    "img"
)
.forEach(img=>{

    img.setAttribute(
        "draggable",
        "false"
    );

});


/*====================================

        OPTIONAL RIGHT CLICK

====================================*/

// Kung gusto mong i-disable ang right click,
// alisin lang ang // sa ibaba.

/*

document.addEventListener(
    "contextmenu",
    (e)=>{

        e.preventDefault();

    }
);

*/


/*====================================

        OPTIONAL SHORTCUTS

====================================*/

// Para i-disable ang F12 at Ctrl+Shift+I,
// alisin lang ang // sa ibaba.

/*

document.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.key === "F12"
        ){

            e.preventDefault();

        }


        if(

            e.ctrlKey &&

            e.shiftKey &&

            e.key === "I"

        ){

            e.preventDefault();

        }

    }
);

*/


/*====================================

        YEAR AUTO UPDATE

====================================*/

const yearText =
document.querySelector(
    ".copyright"
);


if(yearText){

    yearText.innerHTML =

    `© ${new Date().getFullYear()} Aaron Areola.
    All Rights Reserved.`;

}


/*====================================

        PORTFOLIO READY

====================================*/

window.addEventListener(
    "load",
    ()=>{

        console.log(

            "%c✔ Portfolio Loaded Successfully",

            "color:#22c55e;" +
            "font-size:18px;" +
            "font-weight:bold;"

        );

    }
);


/*====================================

        END OF SCRIPT.JS

        Aaron Areola Portfolio

====================================*/