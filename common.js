


document.addEventListener("DOMContentLoaded", () => {
    const navArea = document.querySelector('.nav-area');
    const nav = document.querySelector('nav');
    let isScrolling;

    if (navArea) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll === 0) {
                nav.style.top = '0';
                clearTimeout(isScrolling);
            } else {
                nav.style.top = '0';
                clearTimeout(isScrolling);

                isScrolling = setTimeout(() => {
                    nav.style.top = '-6.5vw';
                }, 2000);
            }
        });

        navArea.addEventListener('mouseenter', () => {
            nav.style.transition = 'top 0.5s ease-in-out';
            nav.style.top = '0'; 
        });

        nav.addEventListener('mouseenter', () => {
            nav.style.transition = 'none';
            nav.style.top = '0';
        });

        nav.addEventListener('mouseleave', () => {
            nav.style.transition = 'top 0.5s ease-in-out';
            if (window.scrollY > 0) {
                nav.style.top = '-6.5vw';
            }
        });

        navArea.addEventListener('mouseleave', () => {
            if (window.scrollY > 0) {
                nav.style.top = '-6.5vw';
            }
        });
    }
});






const pyramids = document.querySelectorAll(".pyr");

pyramids.forEach((pyramid) => {
    pyramid.addEventListener("mouseenter", () => {
        pyramids.forEach((otherPyramid) => {
            if (otherPyramid !== pyramid) {
                otherPyramid.src = otherPyramid.getAttribute("data-hover");
            }
        });
    });

    pyramid.addEventListener("mouseleave", () => {
        pyramids.forEach((otherPyramid) => {
            if (otherPyramid !== pyramid) {
                otherPyramid.src = otherPyramid.getAttribute("data-original");
            }
        });
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const rsBottom = document.querySelector('.rs_bottom');
    const fontExElements = rsBottom.querySelectorAll('div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const allVisible = Array.from(fontExElements).every(el => {
                    const rect = el.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.bottom <= window.innerHeight
                    );
                });

                if (allVisible) {
                    fontExElements.forEach(element => {
                        element.classList.add('play-animation');
                    });
                }
            } else {
                fontExElements.forEach(element => {
                    element.classList.remove('play-animation');
                });
            }
        });
    }, { threshold: 1.0 });

    observer.observe(rsBottom);
});


document.addEventListener('DOMContentLoaded', () => {
    const graphs = document.querySelectorAll('.barchart, .bar2chart'); 
    const windowHeight = window.innerHeight; 

    window.addEventListener('scroll', () => {
        graphs.forEach((graph) => {
            const graphPosition = graph.getBoundingClientRect().top; 
            if (graphPosition < windowHeight) {
                graph.classList.add('animate'); 
            }
        });
    });

    graphs.forEach((graph) => {
        const graphPosition = graph.getBoundingClientRect().top;
        if (graphPosition < windowHeight) {
            graph.classList.add('animate'); 
        }
    });
});




// const scrollContainer = document.getElementById('scrollContainer');
// let isDown = false;
// let startX;
// let scrollLeft;

// scrollContainer.addEventListener('mousedown', (e) => {
//     isDown = true;
//     scrollContainer.classList.add('active');
//     startX = e.pageX - scrollContainer.offsetLeft;
//     scrollLeft = scrollContainer.scrollLeft;
// });

// scrollContainer.addEventListener('mouseleave', () => {
//     isDown = false;
//     scrollContainer.classList.remove('active');
// });

// scrollContainer.addEventListener('mouseup', () => {
//     isDown = false;
//     scrollContainer.classList.remove('active');
// });

// scrollContainer.addEventListener('mousemove', (e) => {
//     if (!isDown) return; // 마우스가 눌려있지 않으면 함수 종료
//     e.preventDefault(); // 기본 동작 방지
//     const x = e.pageX - scrollContainer.offsetLeft;
//     const walk = (x - startX) * 2; // 스크롤 속도 조정
//     scrollContainer.scrollLeft = scrollLeft - walk; // 가로 스크롤 위치 변경
// });

// // 마우스 휠로 스크롤
// scrollContainer.addEventListener('wheel', (event) => {
//     event.preventDefault(); // 기본 스크롤 방지
//     scrollContainer.scrollLeft += event.deltaY; // 마우스 휠 이벤트를 가로 스크롤로 변환
// });


const scrollContainer = document.getElementById('scrollContainer');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault(); 
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollContainer.scrollLeft = scrollLeft - walk; 
});

scrollContainer.addEventListener('wheel', (event) => {
    const atLeftEnd = (scrollContainer.scrollLeft === 0);
    const atRightEnd = (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth);

    const scrollingDown = (event.deltaY > 0);
    const scrollingUp = (event.deltaY < 0);

    if ((atLeftEnd && scrollingUp) || (atRightEnd && scrollingDown)) {
        return;
    }

    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});

document.addEventListener('wheel', (event) => {
    if (scrollContainer.contains(event.target)) {
        const atRightEnd = (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth);
        const atLeftEnd = (scrollContainer.scrollLeft === 0);
        
        if (!atRightEnd && !atLeftEnd) {
            event.preventDefault(); 
            return;
        }
    }

    scrollContainer.parentElement.scrollTop += event.deltaY;
    event.preventDefault(); 
});













document.addEventListener("DOMContentLoaded", function () {
    const page5 = document.querySelector(".page5");
    const overlay = document.querySelector(".gradation-overlay");
    const painpoint = document.querySelector('.point1');
    const balloon = document.querySelector('.painBalloon');
    const balloonImg = document.querySelector('.balloon3');
    const balloonFont = document.querySelector('.painBall_font');
    const connector = document.querySelector('.connect1')
    


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                overlay.style.opacity = 1;
            } else {
                overlay.style.opacity = 0;
            }
        });
    }, { threshold: 0.1 });

    observer.observe(page5);

    balloon.addEventListener("mouseenter", () => {
        painpoint.style.opacity = "1";
        painpoint.style.visibility = "visible";
        balloonImg.src = "./img/balloon5.png";
        balloonFont.style.color = "#ff5e1f";

    });

    balloon.addEventListener("mouseleave", () => {
        painpoint.style.opacity = "0";
        painpoint.style.visibility = "hidden";
        balloonImg.src = "./img/balloon4.png";
        balloonFont.style.color = "#ffffff";
    });


});




document.querySelector('.nextBtn').addEventListener('click', function () {
    const changePersona = document.querySelector('.change_persona');
    const changePersona2 = document.querySelector('.changepersona2');


    changePersona.style.display = "none"
    changePersona2.style.display = "block"
    
});

document.querySelector('.nextBtn2').addEventListener('click', function () {
    const changePersona = document.querySelector('.change_persona');
    const changePersona2 = document.querySelector('.changepersona2');


    changePersona.style.display = "block"
    changePersona2.style.display = "none"
    
});



const balloon2 = document.querySelector('.painBalloon2');
const painpoint2 = document.querySelector('.point2');
const connector2 = document.querySelector('.connect2');
const balloonImg2 = document.querySelector('.balloon4');
const balloonFont2 = document.querySelector('.painBall_font2');




balloon2.addEventListener("mouseenter", () => {
    painpoint2.style.opacity = "1";
    painpoint2.style.visibility = "visible";
    balloonImg2.src = "./img/balloon7.png";
    balloonFont2.style.color = "#674FDC";

});

balloon2.addEventListener("mouseleave", () => {
    painpoint2.style.opacity = "0";
    painpoint2.style.visibility = "hidden";
    balloonImg2.src = "./img/balloon6.png";
    balloonFont2.style.color = "#ffffff";
});






