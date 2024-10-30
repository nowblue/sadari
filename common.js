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


