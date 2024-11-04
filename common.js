


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


document.addEventListener('DOMContentLoaded', () => {
    const graphs = document.querySelectorAll('.barchart, .bar2chart'); // 애니메이션을 적용할 그래프 요소들
    const windowHeight = window.innerHeight; // 현재 창의 높이

    // 스크롤 이벤트를 감지
    window.addEventListener('scroll', () => {
        graphs.forEach((graph) => {
            const graphPosition = graph.getBoundingClientRect().top; // 그래프의 화면 내 위치

            // 그래프가 화면에 진입했을 때 애니메이션 실행
            if (graphPosition < windowHeight) {
                graph.classList.add('animate'); // 애니메이션 클래스 추가
            }
        });
    });

    // 페이지 로드 시 애니메이션 실행 (스크롤 없이도 실행)
    graphs.forEach((graph) => {
        const graphPosition = graph.getBoundingClientRect().top;
        if (graphPosition < windowHeight) {
            graph.classList.add('animate'); // 페이지 로드 시 애니메이션 실행
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

// 마우스 버튼을 누를 때
scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

// 마우스가 영역을 떠날 때
scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

// 마우스 버튼을 놓을 때
scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

// 마우스가 움직일 때
scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; // 마우스가 눌려있지 않으면 함수 종료
    e.preventDefault(); // 기본 동작 방지
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조정
    scrollContainer.scrollLeft = scrollLeft - walk; // 가로 스크롤 위치 변경
});

// 마우스 휠로 스크롤
scrollContainer.addEventListener('wheel', (event) => {
    const atLeftEnd = (scrollContainer.scrollLeft === 0);
    const atRightEnd = (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth);

    // 휠 이벤트가 위로 가는 것인지 아래로 가는 것인지 확인
    const scrollingDown = (event.deltaY > 0);
    const scrollingUp = (event.deltaY < 0);

    // 가로 스크롤이 양 끝에 도달했을 때 세로 스크롤 허용
    if ((atLeftEnd && scrollingUp) || (atRightEnd && scrollingDown)) {
        return; // 기본 동작을 수행하여 수직 스크롤을 허용합니다.
    }

    // 기본 스크롤 방지
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY; // 마우스 휠 이벤트를 가로 스크롤로 변환
});

// 부모 요소에서 wheel 이벤트 리스너를 추가하여 세로 스크롤을 처리
document.addEventListener('wheel', (event) => {
    // 가로 스크롤 영역에서 세로 스크롤 방지
    if (scrollContainer.contains(event.target)) {
        // 가로 스크롤이 끝났을 때만 세로 스크롤을 허용
        const atRightEnd = (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth);
        const atLeftEnd = (scrollContainer.scrollLeft === 0);
        
        // 가로 스크롤이 끝났을 때, 세로 스크롤을 허용하지 않음
        if (!atRightEnd && !atLeftEnd) {
            event.preventDefault(); // 세로 스크롤 방지
            return;
        }
    }

    // 가로 스크롤 영역 밖에서는 세로 스크롤 허용
    scrollContainer.parentElement.scrollTop += event.deltaY; // 세로 스크롤 적용
    event.preventDefault(); // 기본 스크롤 방지
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


