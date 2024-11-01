
// let lastScrollY = window.scrollY;
// let isScrolling;

// // 스크롤 이벤트에 따른 네비게이션 표시
// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('nav');
//     nav.style.top = '0';
//     clearTimeout(isScrolling);

//     isScrolling = setTimeout(() => {
//         document.querySelector('nav').style.top = '-100px'; // 스크롤 멈추면 네비게이션 숨기기
//     }, 500);
// });

// let isScrolling;

// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('nav');
//     const currentScroll = window.scrollY;

//     if (currentScroll === 0) {
//         nav.style.top = '0';
//         clearTimeout(isScrolling);
//     } else {
//         nav.style.top = '0'; 
//         clearTimeout(isScrolling);

        
//         isScrolling = setTimeout(() => {
//             nav.style.top = '-100px';
//         }, 1000);
//     }
// });


// document.querySelector('.nav-area').addEventListener('mouseenter', () => {
//     document.querySelector('nav').style.top = '0';
// });

// document.querySelector('.nav-area').addEventListener('mouseleave', () => {
//     if (window.scrollY > 0) {
//         document.querySelector('nav').style.top = '-6.5vw';
//     }
// });




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

    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 모든 자식 요소가 화면에 들어오면 애니메이션 실행
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
                // 요소가 화면에서 벗어나면 애니메이션 정지
                fontExElements.forEach(element => {
                    element.classList.remove('play-animation');
                });
            }
        });
    }, { threshold: 1.0 }); // 100%가 보일 때 애니메이션 시작

    // .rs_bottom에 대해 관찰 시작
    observer.observe(rsBottom);
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
        connector.style.opacity = "1";
        painpoint.style.visibility = "visible";
        connector.style.visibility = "visible";
        balloonImg.src = "./img/balloon5.png";
        balloonFont.style.color = "#ff5e1f";

    });

    balloon.addEventListener("mouseleave", () => {
        painpoint.style.opacity = "0";
        connector.style.opacity = "0";
        painpoint.style.visibility = "hidden";
        connector.style.visibility = "hidden";
        balloonImg.src = "./img/balloon4.png";
        balloonFont.style.color = "#ffffff";
    });


});




document.querySelector('.nextBtn').addEventListener('click', function () {
    const changePersona = document.querySelector('.change_persona');
    const changePersona2 = document.querySelector('.changepersona2');


    changePersona.style.display = "none"
    changePersona2.style.display = "block"

    
    changePersona.querySelectorAll('*').forEach(element => {
        const computedStyle = getComputedStyle(element);
        ['color', 'backgroundColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
            if (computedStyle[prop] === '#674FDC)') {
                element.style[prop] = 'rgb(255, 94, 31)';
            }
        });
    });
    
});

document.querySelector('.nextBtn2').addEventListener('click', function () {
    const changePersona = document.querySelector('.change_persona');
    const changePersona2 = document.querySelector('.changepersona2');


    changePersona.style.display = "block"
    changePersona2.style.display = "none"

    changePersona2.querySelectorAll('*').forEach(element => {
        const computedStyle = getComputedStyle(element);
        ['color', 'backgroundColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
            if (computedStyle[prop] === 'rgb(255, 94, 31)') {
                element.style[prop] = '#674FDC';
            }
        });
    });
    
});



const balloon2 = document.querySelector('.painBalloon2');
const painpoint2 = document.querySelector('.point2');
const connector2 = document.querySelector('.connect2');
const balloonImg2 = document.querySelector('.balloon4');
const balloonFont2 = document.querySelector('.painBall_font2');




balloon2.addEventListener("mouseenter", () => {
    painpoint2.style.opacity = "1";
    connector2.style.opacity = "1";
    painpoint2.style.visibility = "visible";
    connector2.style.visibility = "visible";
    balloonImg2.src = "./img/balloon7.png";
    balloonFont2.style.color = "#674FDC";

});

balloon2.addEventListener("mouseleave", () => {
    painpoint2.style.opacity = "0";
    connector2.style.opacity = "0";
    painpoint2.style.visibility = "hidden";
    connector2.style.visibility = "hidden";
    balloonImg2.src = "./img/balloon6.png";
    balloonFont2.style.color = "#ffffff";
});


