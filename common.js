.grid {
    margin: 0px 6vw;
    width: 88vw;
    position: absolute;
    display: inline-flex;
    justify-content: space-between;
    padding: 0;
    z-index: 1;
}

.grid_bar {
    /* padding-right: 40px; */
    width: 9vw;
    height: 700vw;
    background: #ff0000;
    opacity: 10%;
    list-style: none;
}



/* body {
    background: #FFFDFC;
} */


html {
    scroll-behavior: smooth;
}

* {
    font-family: 'SUIT Variable', sans-serif;
    margin: 0;
    color: #323232;
}

.wrap {
    position: relative;
    z-index: 2;
}

::-webkit-scrollbar {
    display: none;
}

.nav-area {
    position: fixed;
    top: -6vw;
    height: 12vw;
    width: 98vw;
    z-index: 9;
    pointer-events: all;
}

nav {
    position: fixed;
    top: -6vw;
    width: 98vw;
    transition: top 1s ease-in-out;
    z-index: 10;
}

.gnb {
    position: fixed;
    display: inline-flex;
    width: -webkit-fill-available;
    justify-content: space-between;
    margin: 0;
    align-items: center;
    padding: 1.5vw 0;
    /* background: linear-gradient(to bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.792) 75%, transparent ); */
    background: rgba(255, 255, 255, 0.771);
}

.gnb li {
    list-style: none;
    /* text-decoration: none; */
}

.gnb_right li {
    width: 4.4vw;
    text-align: center;
}

.gnb_right {
    display: inline-flex;
    justify-content: space-between;
    width: 37.8vw;
    padding: 0;
    padding-right: 10.4vw;
}

/* .gnb_2 {
    padding-left: 1.4vw;
}

.gnb_3 {
    padding-left: 1.5vw;
} */

.logo {
    width: 2.5vw;
    margin-left: 6vw;
}

.navMenu {
    border: none;
    background: none;
    font-size: 1.1vw;
    font-weight: 300;
}

.navMenu:hover {
    font-weight: 500;
    color: #FF5F1F;
}

/* .nav-up {
    top: -2vw;
} */
.gnb a {
    font-weight: 200;
    text-decoration: none;
}

.bold_red {
    color: #FF5F1F;
    font-weight: 700;
}

.list {
    margin-bottom: 6vw;
    font-size: 1.5vw;
    font-weight: 300;
    color: #FF5F1F;
}

.bold{
    color: #817A7A;
    font-size: 1vw;
    font-weight: 700;
}



/******************************************** main **************************************/
main {
    position: relative;
    z-index: 2;
    /* background: #FFFDFC; */

}

.main_container {
    display: inline-flex;
    justify-content: space-between;
    width: 51vw;
    padding: 0 6vw;
    height: 60vw;
    position: fixed;
    background: #fffdfc;
    z-index: 1;
}

.main_text {
    margin-top: 15vw;
}

.main_text div {
    display: inline-flex;
    align-items: center;
}

.subTitle {
    font-size: 1.9vw;
    font-weight: 600;
    color: #FF5F1F;
    margin: 1vw 0 2vw 0;
    line-height: 2.5vw;
}

.mainTitle {
    margin-right: 1vw;
    font-size: 6vw;
    font-weight: 800;
    color: #FF5F1F;
}

.titlelogo {
    width: 6vw;
    height: 6vw;
}

.subText {
    font-size: 1.1vw;
    font-weight: 200;
    color: #310f0b5d;
    margin: 0;
}

.mainImg {
    position: absolute;
    width: 40vw;
    z-index: 2;
}

.connect1{
    position: absolute;
    margin: -5.95vw 0 0 4.9vw;
    width: 90vw;
    height: 0.2vw;
    background: #FF5F1F;
}

.connect2{
    position: absolute;
    margin: -3.6vw 0 0 -6vw;
    width: 6.1vw;
    height: 0.2vw;
    background: #FF5F1F;
}



.topBtn {
    position: fixed;
    display: inline-flex;
    justify-content: center;
    top: 51vw;
    left: 94vw;
    background: #ffffff;
    width: 3vw;
    height: 3vw;
    border-radius: 0.5vw;
    align-items: center;
    z-index: 6;
}

.topBtn img {
    color: #FF5F1F;
    width: 1.5vw;
}



.page0 {
    display: block;
    height: 60vw;
    visibility: hidden;
}



/* page1 */


.page1 {
    /* margin-top: 60vw; */
    background: url("./img/page3bg.png");
    background-size: cover;
    text-align: center;
}

.sub1 {
    padding: 18vw 0 1vw 0;
    color: #FF5F1F;
    font-size: 1.6vw;
    font-weight: 400;
}

.tit1 {
    color: #FF5F1F;
    font-size: 4vw;
    font-weight: 900;
}

.text1 {
    padding: 2vw 0 23vw 0;
    color: #dedede;
    font-size: 1.2vw;
    font-weight: 200;
    line-height: 2vw;
}

.page1 .bold {
    color: #fff;
    font-size: 1.3vw;
    font-weight: 700;
}



/* page2 */

.page2 {
    padding-top: 5vw;
    padding-bottom: 12vw;
    background: #FFFDFC;
}

.sub2 {
    margin-bottom: 0.5vw;
    font-weight: 400;
    font-size: 1.5vw;
    color: #FF5F1F;
}

.page2_t {
    margin-left: 30vw;
}

.page2 .text_section {
    display: inline-flex;
    width: 50vw;
    align-items: center;
}


.page2_t .bold {
    /* margin-top: 18vw; */
    font-weight: 700;
    font-size: 2.5vw;
    color: #FF5F1F;
}

.page2_t span {
    margin: 0vw 1vw;
    width: 20vw;
    background: #FF5F1F;
    height: 0.2vw;
}



.page2 .rolling_list {
    display: flex;
    margin-top: 4vw;
    overflow: hidden;
    position: relative;
}

.page2 .rolling_img {
    display: flex;
    animation: scroll 10s linear infinite;
    padding: 0;
}

.page2 .rolling_img.list2 {
    position: absolute;
    left: 100%;
    /* list2가 정확하게 첫 번째 리스트의 끝에 위치 */
    margin-left: 53vw;
}

.page2 .rolling_list li {
    list-style: none;
}

.page2 .rolling_img img {
    height: 10vw;
    margin-right: 1vw;
}

/* 자연스럽게 반복되는 애니메이션 */
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}



/* page3 */

.page3 {
    background: #F3F3F3;
    padding: 5vw 6vw 10vw 6vw;
    width: 88vw;
    display: inline-flex;
    justify-content: space-between;
    /* margin-bottom: 10vw; */
}

.tit3 {
    margin-top: 6vw;
    color: #FF5F1F;
    font-size: 3vw;
    font-weight: 800;
}

.page3_left .normal {
    margin-top: 1vw;
    font-size: 1.15vw;
    font-weight: 300;
    line-height: 1.9vw;
}

.q_box {
    margin: 6vw 0 1vw 0;
    padding: 0 1.5vw;
    width: 28.4vw;
    display: inline-grid;
    height: 5vw;
    background: #FFFAF2;
    border: 0.1vw #FF5F1F solid;
    border-radius: 0.5vw;
    align-items: center;

}

.q_box p {
    color: #FF5F1F;
    font-size: 1.1vw;
    font-weight: 300;
    line-height: 1.5vw;
}

.q_box p .font_red {
    color: #FF5F1F;
    font-size: 1.1vw;
    font-weight: 700;
}

/* .page2_text2{
    display: inline-flex;
} */

.font_red {
    color: #FF5F1F;
}

.page3 .text_section {
    font-size: 1.05vw;
    font-weight: 300;
    line-height: 1.5vw;
}

.page3_right {
    display: inline-flex;
    margin: 10vw 5vw 0 0;
}

.pyramid_container {
    display: grid;
    justify-items: end;
    margin-right: 1vw;
}

.pyramid1 {
    height: 6.6vw;
    padding-left: 1vw;
}

.pyramid2 {
    height: 4.95vw;
    padding-top: 0.5vw;
}

.pyramid3 {
    height: 4.9vw;
    padding-top: 0.6vw;
}

.pyramid4 {
    height: 4.95vw;
    padding-top: 0.6vw;
}

.pyramid5 {
    height: 4.6vw;
    padding-top: 0.5vw;
}

.pyr_info {
    padding: 3.0vw 0 1.15vw 0;
    font-size: 1.2vw;
    font-weight: 300;
    color: #666666;
}


.page3_bottom {
    padding: 5vw 6vw 10vw 6vw;
    display: inline-flex;
    width: 88vw;
    background: #F3F3F3;
    align-items: center;
    justify-content: space-between;
}

.page3_bottom .text_section {
    margin-right: 3vw;
}

.page3_sectit {
    margin-bottom: 2vw;
    font-size: 1.8vw;
    font-weight: 800;
    color: #FF5F1F;
    line-height: 2.5vw;
}

.page3_bottom .normal {
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.5vw;
}

.ex1 {
    padding: 2vw;
    width: 27vw;
    height: 20vw;
    background: #ffffff;
    border: 0.13vw #FF5F1F solid;
    border-radius: 2vw;
}

.ex1 .question {
    font-size: 1.3vw;
    font-weight: 400;
    color: #FF5F1F;
    line-height: 1.8vw;
}

.page3_graph {
    display: inline-flex;
    margin-top: 1vw;
}

.page3_graph .year {
    margin: 2.5vw 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
}

.page3_graph .year p {
    font-size: 0.8vw;
    font-weight: 500;
}

.page3_graph .year p:first-child {
    color: #FF5F1F;
}

.page3_graph .divide {
    margin: 0 0 0 1vw;
    width: 0.13vw;
    height: 15vw;
    background: #FF5F1F;
}


.page3_graph .graphDiv {
    /* margin: 1vw 0; */
    display: inline-flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.etc{
    margin-top: 0.5vw;
    color: #B4B4B4;
    font-size: 0.8vw;
    font-weight: 300vw;
}

.barchart {
    height: 3vw;
    width: 24vw;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
}

.barchart1 span {
    display: block;
    padding: 0 1vw;
    background: #FF5F1F;
    width: 100%;
    height: 3vw;
    font-size: 1.3vw;
    font-weight: 700;
    line-height: 3vw;
    text-align: right;
    box-sizing: border-box;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    color: #ffffff;
    animation: graphIncrease 2s 1 ease-in-out forwards;
}

.barchart2 span {
    display: block;
    padding: 0 1.5vw;
    background: #EAEAEA;
    width: 70.66%;
    height: 3vw;
    font-size: 1vw;
    font-weight: 300;
    line-height: 3vw;
    text-align: right;
    box-sizing: border-box;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    color: #929292;
    animation: graphIncrease2 2s 1 ease-in-out forwards;
}

.barchart3 span {
    display: block;
    padding: 0 1.5vw;
    background: #EAEAEA;
    width: 81.07%;
    height: 3vw;
    line-height: 3vw;
    font-size: 1vw;
    font-weight: 300;
    text-align: right;
    box-sizing: border-box;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    color: #929292;
    animation: graphIncrease3 2s 1 ease-in-out forwards;
}

/* .barchart.animate span,
.bar2chart.animate span {
    animation: graphIncrease 1s forwards;
} */

@keyframes graphIncrease {
    0% {
        width: 0;
        color: rgba(255, 255, 255, 0);
    }

    20% {
        color: rgba(255, 255, 255, 0);
    }

    100% {
        width: 100%;
        color: rgba(255, 255, 255, 1);
    }
}

@keyframes graphIncrease2 {
    0% {
        width: 0;
        color: rgba(255, 255, 255, 0);
    }

    20% {
        color: rgba(255, 255, 255, 0);
    }

    100% {
        width: 70.66%;
        color: rgb(0, 0, 0);
    }
}

@keyframes graphIncrease3 {
    0% {
        width: 0;
        color: rgba(255, 255, 255, 0);
    }

    20% {
        color: rgba(255, 255, 255, 0);
    }

    100% {
        width: 81.07%;
        color: rgb(0, 0, 0);
    }
}

.page3_graph2 {
    display: inline-flex;
    margin-top: 1vw;
    flex-direction: column
}

.barchartB {
    position: absolute;
    display: inline-flex;
}

.barchartB img {
    width: 4vw;
    height: 2vw;
}

.barchartB p {
    position: absolute;
    /* margin-left: 1vw; */
    color: #929292;
    font-size: 0.9vw;
    font-weight: 500;
    line-height: 1.7vw;
}

.barchartB .barchart4Ball p {
    color: #fff;
}

.barchart1Ball {
    display: inline-flex;
    margin: 2vw 0 0 1.6vw;
    flex-direction: column;
    align-items: center;
}

.barchart2Ball {
    display: inline-flex;
    margin: 9vw 0 0 0.9vw;
    flex-direction: column;
    align-items: center;
}

.barchart3Ball {
    display: inline-flex;
    margin: 7vw 0 0 0.9vw;
    flex-direction: column;
    align-items: center;
}

.barchart4Ball {
    display: inline-flex;
    margin: -3vw 0 0 0.9vw;
    flex-direction: column;
    align-items: center;
}

.barchart5Ball {
    display: inline-flex;
    margin: -1vw 0 0 0.9vw;
    flex-direction: column;
    align-items: center;
}

.page3_graph2 .divide2 {
    margin-bottom: 0.5vw;
    width: 27vw;
    height: 0.13vw;
    background: #FF5F1F;
}

.page3_graph2 .year {
    margin: 0 1vw;
    display: inline-flex;
    justify-content: space-evenly;
    text-align: center;
}

.page3_graph2 .year p {
    font-size: 0.8vw;
    font-weight: 500;
    width: 5vw;
}

.page3_graph2 .graphDiv {
    /* margin: 1vw 0; */
    display: inline-flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
}

.bar2chart {
    display: inline-flex;
    height: 15vw;
    width: 2.5vw;
    border-top-right-radius: 2vw;
    border-top-left-radius: 2vw;
    background: #EAEAEA;
    align-items: flex-end;
}

.bar2chart span {
    margin-top: 1.6vw;
    display: block;
    padding: 0 1vw;
    background: #FF5F1F;
    width: 2.5vw;
    box-sizing: border-box;
    display: inline-flex;
    align-items: flex-end;
}

.barchart4 {
    height: 10.27vw;
}

.barchart4 span {
    height: 85%;
    animation: graphIncrease4 1s ease-in-out;
}

.barchart5 {
    height: 3vw;
}

.barchart5 span {
    height: 52%;
    animation: graphIncrease5 1s 1 ease-in-out;
}

.barchart6 {
    height: 5.24vw;
}

.barchart6 span {
    height: 72%;
    animation: graphIncrease6 1s 1 ease-in-out;
}

.barchart7 {
    height: 15vw;
}

.barchart7 span {
    height: 90%;
    animation: graphIncrease7 1s 1 ease-in-out;
}

.barchart8 {
    height: 13.06vw;
}

.barchart8 span {
    height: 88%;
    animation: graphIncrease8 1s 1 ease-in-out;
}

@keyframes graphIncrease4 {
    0% {
        height: 0;
    }

    100% {
        height: 85%;
    }
}

@keyframes graphIncrease5 {
    0% {
        height: 0;
    }

    100% {
        height: 52%;
    }
}

@keyframes graphIncrease6 {
    0% {
        height: 0;
    }

    100% {
        height: 72%;
    }
}

@keyframes graphIncrease7 {
    0% {
        height: 0;
    }

    100% {
        height: 90%;
    }
}

@keyframes graphIncrease8 {
    0% {
        height: 0;
    }

    100% {
        height: 88%;
    }
}



/* page4 */

.page4 {
    background: #FFFDFC;
    padding: 5vw 6vw 13vw 6vw;
}

.sub4 {
    font-size: 1.1vw;
    font-weight: 500;
    padding-bottom: 0.5vw;
}

.tit4 {
    margin-bottom: 2vw;
    color: #FF5F1F;
    font-size: 2vw;
    font-weight: 800;
}

.scroll_container {
    display: inline-flex;
    overflow-x: auto;
    /* 가로 스크롤을 허용 */
    overflow-y: hidden;
    /* 세로 스크롤을 숨김 */
    width: 94vw;
    height: 22vw;
}

.scroll_wrap {
    width: 31.4vw;
    height: 20vw;
    border: 0.13vw #FF5F1F solid;
    border-radius: 1.7vw;
    margin: 0vw 2.25vw 0 0;
}

.scroll {
    padding: 2vw;
    width: 27.4vw;
}

.scrollQuestion {
    font-size: 1vw;
}

.graph {
    margin: 2vw 0 0 0;
    display: inline-flex;
}

.line {
    background: #FF5F1F;
    width: 0.1vw;
    height: 13vw;
}

.bar_container {
    display: inline-flex;
    flex-direction: column;
}

.barEach {
    display: inline-flex;
    align-items: center;
    margin-top: 0.6vw;
}

.barEach .normal {
    font-weight: 300;
}

.barEach p {
    margin-left: 0.5vw;
    font-size: 1vw;
}

.bar1 {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    background: #EFEFEF;
    width: 4vw;
    height: 2.5vw;
    padding-right: 0.5vw;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    text-align: end;
    font-size: 1vw;
    font-weight: 300;
}

.bar2 {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    background: #EFEFEF;
    width: 12vw;
    height: 2.5vw;
    padding-right: 0.5vw;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    font-size: 1vw;
    font-weight: 300;
}

.bar3 {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    background: #FF5F1F;
    color: #ffffff;
    width: 22.5vw;
    height: 2.5vw;
    padding-right: 0.5vw;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    font-size: 1vw;
    font-weight: 700;
}

.bar4 {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    background: #EFEFEF;
    width: 11.2vw;
    height: 2.5vw;
    padding-right: 0.5vw;
    border-top-right-radius: 2vw;
    border-bottom-right-radius: 2vw;
    font-size: 1vw;
    font-weight: 300;
}



.donut p {
    position: relative;
    text-align: center;
    font-size: 1vw;
    font-weight: 400;
}

.chart {
    width: 13vw;
    padding-bottom: 13vw;
    margin: 1vw auto;
    border-radius: 50%;
    position: relative;
    text-align: center;
    transition: background .3s ease-in-out;
    background: conic-gradient(#efefef 0% 28.6%, #FF5F1F 28.6% 100%);
}

.do1 .font_white {
    margin-top: -7vw;
    margin-left: -4vw;
    color: #ffffff;
}

.do1 .normal {
    margin-top: -6.5vw;
    margin-right: -6vw;
}

.chart2 {
    width: 13vw;
    padding-bottom: 13vw;
    margin: 2vw auto;
    border-radius: 50%;
    position: relative;
    text-align: center;
    transition: background .3s ease-in-out;
    background: conic-gradient(#efefef 0% 48.2%, #FF5F1F 48.2% 100%);
}

.do2 .font_white {
    margin-top: -9vw;
    margin-left: -5.5vw;
    color: #ffffff;
}

.do2 .normal {
    margin-top: -3.5vw;
    margin-right: -6.5vw;
}

.chart3 {
    width: 13vw;
    padding-bottom: 13vw;
    margin: 1vw auto;
    border-radius: 50%;
    position: relative;
    text-align: center;
    transition: background .3s ease-in-out;
    background: conic-gradient(#efefef 0% 39.3%, #FF5F1F 39.3% 100%);
}

.do3 .font_white {
    margin-top: -8vw;
    margin-left: -5vw;
    color: #ffffff;
}

.do3 .normal {
    margin-top: -4vw;
    margin-right: -6.5vw;
}

.response {
    margin: 2vw auto;
}

.re_red {
    display: inline-flex;
    margin-bottom: 0.5vw;
    width: 14vw;
    height: 2.5vw;
    background: #FFFAF2;
    border: 0.13vw #FF5F1F solid;
    border-radius: 2vw;
    color: #FF5F1F;
    font-size: 0.85vw;
    font-weight: 600;
    justify-content: center;
    align-items: center;
}

.re_blue {
    display: inline-flex;
    margin-bottom: 0.5vw;
    width: 14vw;
    height: 2.5vw;
    background: #FFFAF2;
    border: 0.13vw #674FDC solid;
    border-radius: 2vw;
    color: #674FDC;
    font-size: 0.85vw;
    font-weight: 600;
    justify-content: center;
    align-items: center;
}

.re_right {
    margin-left: 13vw;
}

.response2 {
    display: inline-flex;
    margin: 2vw auto;
}


.round {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5vw;
    font-size: 0.85vw;
}

.re1 {
    background: #FFFAF2;
    width: 5.7vw;
    height: 5.7vw;
    border: 0.13vw #674FDC solid;
    color: #674FDC;
}

.re2 {
    /* background: #FFFAF2; */
    margin: 6.3vw 0 0 -5vw;
    width: 5.4vw;
    height: 5.4vw;
    border: 0.13vw #FF5F1F solid;
    color: #FF5F1F;
}

.re3 {
    background: #FF5F1F;
    margin: 1.5vw 0 0 -0.5vw;
    width: 8.2vw;
    height: 8.2vw;
    color: #ffffff;
}

.re4 {
    margin: -0.5vw 0 0 0vw;
    width: 6.2vw;
    height: 6.2vw;
    border: 0.13vw #FF5F1F solid;
    color: #FF5F1F;
}

.re5 {
    margin: 6.4vw 0 0 -7vw;
    width: 6.6vw;
    height: 6.6vw;
    border: 0.13vw #674FDC solid;
    color: #674FDC;
}

.re6 {
    background: #FFFAF2;
    margin: 2.8vw 0 0 -0.3vw;
    width: 7.3vw;
    height: 7.3vw;
    border: 0.13vw #FF5F1F solid;
    color: #FF5F1F;
}


/* .scrollbar {
    margin-top: 22vw;
    position: absolute;
    width: 88vw;
    height: 0.5vw;
    background: #EFEFEF; 
}

.scrollbar-thumb {
    height: 140%; 
    background: #FF5F1F; 
    border-radius: 2vw; 
    cursor: pointer; 
    width: 10%; 
} */






/* needs & wants */
.Needs {
    background: #FFFDFC;
}

.needs_wants {
    display: inline-flex;
    background: #F5F5F5;
}

.needsBox {
    padding: 6vw;
    width: 37.83vw;
    height: 13.5vw;
    background: #F5F5F5;
    border-top: 0.12vw #d9d9d9 solid;
    border-right: 0.06vw #d9d9d9 solid;
    border-bottom: 0.12vw #d9d9d9 solid;
    border-left: 0.12vw #d9d9d9 solid;
    transition: all .4s ease-in-out;
}

.needsBox:hover {
    padding: 6vw;
    width: 37.77vw;
    height: 13.5vw;
    background: #ffffff;
    border: 0.12vw #674FDC solid;
}

.needsBox:hover h1 {
    color: #674FDC;
}

.needsBox h1 {
    padding-bottom: 2vw;
    color: #817A7A;
    font-size: 3vw;
    font-weight: 700;
    transition: all .4s ease-in-out;
}

.needsBox p {
    color: #817A7A;
    font-size: 1.1vw;
    font-weight: 200;
    line-height: 2vw;
}

.wantsBox {
    padding: 6vw;
    width: 37.83vw;
    height: 13.5vw;
    background: #F5F5F5;
    border-top: 0.12vw #d9d9d9 solid;
    border-right: 0.12vw #d9d9d9 solid;
    border-bottom: 0.12vw #d9d9d9 solid;
    border-left: 0.06vw #d9d9d9 solid;
    transition: all .4s ease-in-out;
}

.wantsBox h1 {
    padding-bottom: 2vw;
    color: #817A7A;
    font-size: 3vw;
    font-weight: 700;
    transition: all .4s ease-in-out;
}

.wantsBox p {
    color: #817A7A;
    font-size: 1.1vw;
    font-weight: 200;
    line-height: 2vw;
}

.wantsBox:hover {
    padding: 6vw;
    width: 37.77vw;
    height: 13.5vw;
    background: #ffffff;
    border: 0.12vw #FF5F1F solid;
}

.wantsBox:hover h1 {
    color: #FF5F1F;
}

.detail {
    padding: 8vw 0 10vw 17.2vw;
}

.col {
    display: inline-flex;
    margin-right: 1.9vw;
    align-items: center;
    flex-direction: column;
}

.col .normal {
    margin-top: -19.8vw;
    font-size: 1.2vw;
    font-weight: 500;
}

.col .font_blue {
    margin-top: 5.5vw;
    color: #674FDC;
    font-size: 1.2vw;
    font-weight: 500;
    text-align: center;
}

.balloon {
    width: 20.4vw;
}

.redBar {
    margin-top: -0.5vw;
    height: 8vw;
}

.red_box {
    display: inline-flex;
    margin-top: 9.5vw;
    width: 20.4vw;
    height: 12vw;
    background: #FF5F1F;
    color: #ffffff;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 2.2vw;
    border-radius: 1.5vw;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* page5 */

.page5 {
    position: relative;
    padding: 5vw 0 32vw 6vw;
    background: url("./img/2.png");
    background-size: cover;
    overflow: hidden;
}


.gradation-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 26%, rgb(0, 0, 0, .5) 75%, transparent);
    opacity: 0;
    transition: opacity 2.5s ease-in-out;
    pointer-events: none;
    z-index: 1;
}

.page5 article {
    position: relative;
    z-index: 2;
}

.gradation {
    /* font-size: 1.2vw; */
    font-weight: bolder;
    background-image: linear-gradient(to right, #ffffff 10%, #FF6D34 24%, #fc5d1e 56%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.sub5 {
    font-size: 1.5vw;
    font-weight: 200;
}

.tit5 {
    margin: 0.5vw 0 1.5vw 0;
    font-size: 4.1vw;
    font-weight: 700;
}

.page5 .normal {
    color: #ededed;
    font-size: 1.2vw;
    font-weight: 200;
    line-height: 2vw;
}

.page5 .bold {
    color: #ffffff;
    font-size: 1.3vw;
    font-weight: 600;
}





/* page6 */

.page6 {
    padding: 5vw 6vw 0vw 6vw;
    background: #FFFDFC;
}

.page6_1_top {
    display: inline-flex;
    align-items: center;
}

.page6 .normal {
    font-size: 1.4vw;
    font-weight: 200;
}

.profile {
    display: inline-flex;
    margin: 1.5vw 0;
    border-top-left-radius: 1vw;
    border-bottom-left-radius: 1vw;
    border-top-right-radius: 1.5vw;
    border-bottom-right-radius: 1.5vw;
    box-shadow: 0.1vw 0vw 0.3vw #C2AC9C;
}

.profileImg {
    width: 11vw;
}

.info_area {
    display: inline-flex;
    padding: 1.5vw 2vw 1.5vw 2vw;
    width: 38.4vw;
    background: #ffffff;
}

.name_area {
    width: 18.24vw;
}

.name_area h1 {

    font-size: 2vw;
    font-weight: 800;
}

.hastag {
    margin: 0.7vw 0;
    font-size: 0.85vw;
    font-weight: 200;
    line-height: 1.1vw;
}

.name_area .font_red {
    font-size: 1vw;
    font-weight: 700;
    line-height: 1.5vw;
}

.info_area .divide {
    margin: 0 2vw;
    width: 0.1vw;
    height: 12vw;
    background: #d9d9d9;
}

.goal_area .font_red {
    margin: 1vw 0 0.7vw 0;
    font-size: 1.1vw;
    font-weight: 600;
}

.goal_area .explain {
    margin-bottom: 0.5vw;
    font-size: 0.95vw;
    font-weight: 300;
}

.nextBtn {
    width: 3vw;
    background: #FF5F1F;
    color: #ffffff;
    font-size: 1.5vw;
    font-weight: 300;
    border: none;
    border-top-right-radius: 1.5vw;
    border-bottom-right-radius: 1.5vw;
}

.nextBtn:hover {
    background: #ed5519;
}

.nextBtn2 {
    width: 3vw;
    background: #674FDC;
    color: #ffffff;
    font-size: 1.5vw;
    font-weight: 300;
    border: none;
    border-top-right-radius: 1.5vw;
    border-bottom-right-radius: 1.5vw;
}

.nextBtn2:hover {
    background: #5a3bc3;
    /* hover 색상도 변경하면 좋을 것 같습니다. */
}

.painpoint {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

/* .point2{
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
} */

.painpoint_area {
    display: inline-flex;
    flex-direction: column;
    margin: 0 0 0 9vw;
    padding: 2vw 3vw 0 2vw;
    height: 13vw;
    border: 0.13vw #FF5F1F solid;
    border-radius: 1.5vw;
}

.painpoint .font_red {
    margin: 0 0 0.5vw 0;
    font-size: 1vw;
    font-weight: 800;
}

.painpoint .normal {
    font-size: 0.8vw;
    font-weight: 400;
    line-height: 1.3vw;
}

.painpoint .divide {
    margin: 1vw 0;
    width: 15vw;
    height: 0.1vw;
    background: #d9d9d9;
}

.connector {
    position: absolute;
    left: 67.3vw;
    margin-top: 18.8vw;
    width: 4vw;
    height: 19vw;
    border-top: 0.13vw #FF5F1F solid;
    border-left: 0.13vw #FF5F1F solid;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

/* journy map */

.page6_1_bottom {
    padding-bottom: 15vw;
}

.journyMap {
    display: inline-flex;
    border-top: 0.13vw #FF5F1F solid;
    border-bottom: 0.13vw #FF5F1F solid;
}

.journy {
    width: 28.9vw;
}

.journyMap .font_red {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4vw;
    color: #FF5F1F;
    font-size: 1.3vw;
    font-weight: 700;
    border-bottom: 0.13vw #FF5F1F solid;
}

.journyMap .normal {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFAF2;
    height: 4vw;
    font-size: 0.9vw;
    font-weight: 300;
    border-left: 0.1vw #FF5F1F solid;
    border-right: 0.1vw #FF5F1F solid;
    border-bottom: 0.2vw #FF5F1F solid;
}

.journyMap .side1 {
    border-left: none;
}

.journyMap .side3 {
    border-right: none;
}

.journyMap .font_gray {
    margin-top: -5.5vw;
    font-size: 0.8vw;
    font-weight: 200;
    line-height: 1.3vw;
}

.journyMap .font_gray2 {
    margin-top: -6.6vw;
    font-size: 0.8vw;
    font-weight: 200;
    line-height: 1.3vw;
}

.graph_section1 {
    display: inline-flex;
    width: 28.9vw;
    border-right: 0.1vw #FF5F1F solid;
    border-bottom: 0.1vw #FF5F1F solid;
}

.graph_section2 {
    display: inline-flex;
    width: 28.9vw;
    border-bottom: 0.1vw #FF5F1F solid;
}

.painBall_font {
    margin-top: -7.6vw;
    color: #ffffff;
    font-size: 0.8vw;
    font-weight: 400;
    line-height: 1.3vw;
    transition: all .5s ease-in-out;
}

.painBall_font2 {
    margin-top: -6vw;
    color: #ffffff;
    font-size: 0.8vw;
    font-weight: 400;
    line-height: 1.3vw;
    transition: all .5s ease-in-out;
}

.balloon2 {
    margin-top: 1.5vw;
    width: 13vw;
}

.balloon3 {
    margin-top: 1.1vw;
    width: 14vw;
    transition: all .5s ease-in-out;
}

.balloon4 {
    margin-top: 1.1vw;
    width: 14vw;
    transition: all .5s ease-in-out;
}

.journy .each {
    width: 14.6vw;
}

.journy .row1 {
    justify-items: center;
    height: 10.5vw;
    border-right: 0.1vw #FF5F1F solid;
    border-bottom: 0.1vw #FF5F1F solid;
}

.journy .row2 {
    height: 3.45vw;
    border-right: 0.1vw #FF5F1F solid;
    border-bottom: 0.1vw #FF5F1F solid;
}

.journy .row3 {
    height: 3.45vw;
    border-right: 0.1vw #FF5F1F solid;
}

.journy .row4 {
    justify-items: center;
    height: 10.5vw;
    border-bottom: 0.1vw #FF5F1F solid;
}

.journy .row5 {
    height: 3.45vw;
    border-bottom: 0.1vw #FF5F1F solid;
}

.journy .row6 {
    height: 3.45vw;
}

.nextsign {
    position: absolute;
    color: #FF5F1F;
    font-size: 1.8vw;
    font-weight: 300;
}

.journyMap .next1 {
    margin-top: 0.8vw;
    left: 34.5vw;
}

.journyMap .next2 {
    margin-top: 0.8vw;
    left: 63.5vw;
}

.journyMap .graphgra {
    position: absolute;
    margin-top: 16.5vw;
    width: 86.7vw;
}

.journyMap .graphgra2 {
    position: absolute;
    margin-top: 16.85vw;
    width: 86.7vw;
}

.painBalloon {
    display: contents;
}

.painBalloon2 {
    display: contents;
}

.changepersona2 {
    display: none;
}









/* info & arch */
.info_arch {
    background: #FFFDFC;
}


.info_arch .normal {
    padding: 0 6vw 2vw 6vw;
    font-size: 1.4vw;
    font-weight: 200;
}

.arch {
    margin: 6vw 6vw 0 6vw;
    width: 85vw;
}

.wireframe {
    margin-top: -12vw;
    height: 85vw;
    background: url('./img/wireframe.svg');
    background-size: cover;
}



/* design system */

.page7 {
    padding: 0 6vw;
    background: #FFFDFC;

}

.page7 .font_red {
    margin-bottom: 0.5vw;
    color: #FF5F1F;
    font-size: 1.5vw;
    font-weight: 500;
}

.page7 .normal {
    color: #817A7A;
    font-size: 1.2vw;
    font-weight: 200;
    line-height: 1.4vw;
}

.page7 .normal .font_bold {
    color: #817A7A;
    font-size: 1.2vw;
    font-weight: 700;
}

.svg {
    position: absolute;
    margin-top: -24vw;
    width: 100vw;
    stroke-dasharray: 3000;
    stroke-dashoffset: -6000;
    animation: dash 4s cubic-bezier(0.43, 0.14, 0.5, 0.76) infinite;
}

@keyframes dash {
    0% {
        stroke-dashoffset: -6000;
    }

    100% {
        stroke-dashoffset: 0;
    }
}

.tit7 {
    margin: 15vw 0 5vw -1.7vw;
    color: #FF5F1F;
    font-size: 3vw;
    font-weight: 800;
}

.font_section {
    margin-top: 4vw;
}

.font_name {
    color: #000;
    font-size: 1.5vw;
    font-weight: 500;
}


.font_container {
    margin-top: 13vw;
    display: inline-flex;
}

.font_container .leftSide {
    margin-top: 9vw;
}



.font_section .top {
    display: inline-flex;
    align-items: baseline;
    justify-content: space-evenly;
    height: 17vw;
    width: 40vw;
}

.font_section .font_red {
    font-size: 1.3vw;
}

.f_motion {
    position: absolute;
    animation: fontVariation 5s ease-in-out infinite;
    color: #FF5F1F;
}

.font_a {
    margin-left: -24vw;
    font-size: 13vw;
    font-weight: 700;
}

.font_b {
    margin-left: 16.5vw;
    font-size: 13vw;
    font-weight: 700;
}

.font_c {
    margin: 5vw 0 0 35vw;
    font-size: 8vw;
    font-weight: 700;
}

@keyframes fontVariation {
    0% {
        font-weight: 100;
    }

    50% {
        font-weight: 900;
    }

    100% {
        font-weight: 100;
    }
}

.font_container .bottom {
    display: inline-flex;
    font-size: 1.2vw;
    font-weight: 500;
}

.font_container .bottom p {
    padding-right: 2vw;
}

.font_container .rightSide {
    width: 50vw;
}

.font_container .normal {
    color: #817A7A;
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.4vw;
}

.rs_bottom {
    display: inline-flex;
    margin-top: 4vw;
    width: 31vw;
    height: 23.5vw;
    font-size: 1.4vw;
    flex-direction: column;
    /* justify-content: space-between; */
}

.rs_bottom .weight {
    font-size: 1vw;
    font-weight: 300;
}

.rs_bottom div {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}

.font_down {
    /* animation: down 2s ease-in-out forwards; */
    animation: none;

}

.font_down.play-animation {
    animation: down 2s ease-in-out forwards;
}

.font_ex1 {
    font-weight: 100;
}

.font_ex2 {
    font-weight: 200;
}

.font_ex3 {
    font-weight: 300;
}

.font_ex4 {
    font-weight: 400;
}

.font_ex5 {
    font-weight: 500;
}

.font_ex6 {
    font-weight: 600;
}

.font_ex7 {
    font-weight: 700;
}

.font_ex8 {
    font-weight: 800;
}

.font_ex9 {
    font-weight: 900;
}

@keyframes down {
    0% {
        margin-top: -1.77vw;
    }

    100% {
        margin-top: 1vw;
    }
}

.color_section {
    margin: 8vw 0 10vw 0;
}

.color_section .font_red {
    margin-bottom: 0.8vw;
    font-size: 1.3vw;
}

.color_section .normal {
    color: #817A7A;
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.4vw;
}

.colorBar {
    display: inline-flex;
    width: 88vw;
    height: 35vw;
    justify-content: space-between;
}

.colorPick {
    display: inline-flex;
    width: 13.5vw;
    height: 32vw;
    border-radius: 1.5vw;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.color_code {
    display: inline-flex;
    width: 12.5vw;
    height: 32vw;
    /* margin-top: 20vw; */
    padding: 0 1vw 0 0;
    opacity: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.337) 1%, rgba(0, 0, 0, 0.132) 40%, transparent);
    font-size: 1.5vw;
    font-weight: 700;
    border-radius: 1.5vw;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-start;
    transition: all ease-in-out cubic-bezier(0.57, 0.01, 0.32, 0.98);
    transition-duration: .5s;
    z-index: 1;
}

.color_code h1 {
    margin-left: 1.5vw;
    color: #ffffff;
}

.c_info {
    margin-top: 2vw;
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.c_info div {
    display: inline-flex;
    padding: 2vw 0vw 2vw 2vw;
    /* width: 30vw; */
    flex-direction: column;
}

.c_info p {
    color: #ffffff;
    line-height: 1.8vw;
    font-size: 0.9vw;
    font-weight: 200;
}

.colorPick:hover>.color_code {
    opacity: 1;
}

.cBBack1 {
    background: #FF5F1F;
}

.cBBack2 {
    background: #674FDC;
}

.cBBack3 {
    background: #310F0B;
}

.cBBack4 {
    background: #EAEAEA;
}

.cBBack5 {
    background: #c2c2c2;
}

.cBBack6 {
    background: #888888;
}




/* .page7_2{

} */

.logo_section {
    padding: 8vw 0 5vw 0vw;
    background: #FFFDFC;
    /* background: #F3F3F3; */
}

.logo_section .text_section {
    margin-left: 54vw;
}

.logo_section .font_red {
    font-size: 1.3vw;
    margin-bottom: 0.8vw;
}

.logo_section .normal {
    color: #817A7A;
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.4vw;
}

.img_section {
    margin: 4vw 0;
    display: inline-flex;
    width: 87vw;
    justify-content: space-between;
    align-items: center;
}

.logo_mainImg {
    width: 33vw;
}

.logo_lineImg:hover {
    opacity: 1;
}

.logo_lineImg {
    position: absolute;
    margin-left: -33vw;
    width: 33vw;
    opacity: 0;
    transition: all 1s ease-in-out;
}

.logo_variation {
    display: inline-flex;
    width: 33vw;
    flex-wrap: wrap;
    align-content: flex-start;
}

.logo_variation img {
    width: 10.9vw;
    /* height: 12.48vw; */
}



/* icon */

.icon_section {
    padding-bottom: 10vw;
    background: #f7f7f7;
}

.icon_section .text_section {
    margin-left: 54vw;
    padding: 6vw 6vw 4vw 6vw;
}

.icon_section .font_red {
    font-size: 1.3vw;
    margin-bottom: 0.8vw;
}

.icon_section .normal {
    color: #817A7A;
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.4vw;
}

.icon_section .rolling_list {
    display: flex;
    margin-top: 1vw;
    overflow: hidden;
    position: relative;
}

.icon_section .rolling_list2 {
    display: flex;
    margin-top: 1vw;
    overflow: hidden;
    position: relative;
}

.icon_section .rolling_list .rolling_img {
    display: flex;
    animation: scroll 20s linear infinite;
    padding: 0;
}

.icon_section .rolling_list .rolling_img.list2 {
    position: absolute;
    left: 100%;
    /* list2가 정확하게 첫 번째 리스트의 끝에 위치 */
    margin-left: 8vw;
}

.icon_section .rolling_list2 .rolling_img {
    display: flex;
    animation: scrollReverse 20s linear infinite;
    padding: 0;
}

.icon_section .rolling_list2 .list2 {
    position: absolute;
    left: 100%;
    /* list2가 정확하게 첫 번째 리스트의 끝에 위치 */
    margin-left: 8vw;
}

.icon_section .rolling_list2 .list3 {
    position: absolute;
    left: 100%;
    /* list2가 정확하게 첫 번째 리스트의 끝에 위치 */
    margin-left: -5vw;
}

.icon_section .rolling_list li {
    list-style: none;
}

.icon_section .rolling_img img {
    height: 6vw;
    margin-right: 1vw;
}

/* 자연스럽게 반복되는 애니메이션 */
@keyframes scrollReverse {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}


/* character */

.character_section {
    background: #FFFDFC;
    padding: 10vw 6vw;
    display: inline-flex;
    width: 88vw;
    align-items: center;
    justify-content: space-between;
}

.character_section .char {
    width: 40vw;
}

.char_right .subtit {
    font-size: 2vw;
    font-weight: 400;
}

.char_right .chartit {
    color: #310F0B;
    font-size: 8vw;
    font-weight: 800;
    margin-bottom: 1vw;
}

.character_section .subbox {
    display: inline-flex;
}

.character_section .script {
    position: absolute;
    margin: 1.3vw 0 0 3.5vw;
    color: #ffffff;
    font-size: 1.3vw;
    font-weight: 600;
}

.character_section .balloon12 {
    width: 30vw;
}

.char_right .font_red {
    font-size: 1.3vw;
    margin: 1.5vw 0;
}

.char_right .normal {
    color: #817A7A;
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.4vw;
}

.charslide {
    background: #FFFDFC;
    padding: 0 6vw;
}

.charslide article{
    /* margin-left: 6vw; */
    display: inline-flex;
    overflow-x: auto; /* 수평 스크롤 활성화 */
    scroll-snap-type: x mandatory; /* 스냅 효과 */
    width: 94vw; /* 섹션 너비를 100%로 설정 */
    box-sizing: border-box; /* 패딩 포함하여 전체 너비 계산 */
}

.charslide img {
    width: 20vw;
    margin-right: 1vw;
    scroll-snap-align: start;
}

.charslide::-webkit-scrollbar {
    height: 1vw; /* 스크롤바 높이 */
}

.charslide::-webkit-scrollbar-thumb {
    background-color: #FF5F1F; /* 스크롤바 색상 */
    border-radius: 2vw; /* 스크롤바 모서리 둥글게 */
}

.charslide::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 트랙 색상 */
}



/* video */

.video {
    padding: 10vw 6vw;
    background: #FFFDFC;
}

.video_char {
    display: inline-flex;
    align-items: center;
}

.video .charimg {
    width: 20vw;
}

.video_balloon {
    display: inline-flex;
    height: 7.5vw;
}

.video_balloon p {
    position: absolute;
    margin: 1.5vw 0 0 4.3vw;
    color: #ffffff;
    font-size: 1.3vw;
    font-weight: 600;
}

.video_balloon img {
    width: 15vw;
    padding-bottom: 3vw;
}


/* function */

.function_section {
    background: #FFFDFC;
}

.function_section .mokup_banner {
    height: 27.66vw;
}

.function_section .phone_mokup {
    width: 20vw;
    margin-right: 1vw;
}

.function_section .phone_mokup2 {
    width: 20vw;
    margin-right: 1vw;
}

.function_section .text_sec {
    display: inline-flex;
    flex-direction: column
}

.function_section .font_red {
    font-size: 2.2vw;
    font-weight: 700;
}

.function_section .subtit {
    margin: 1.5vw 0 0.5vw 0;
    color: #898A8D;
    font-size: 1.2vw;
    font-weight: 700;
}

.function_section .normal {
    color: #817A7A;
    font-size: 1vw;
    font-weight: 200;
    line-height: 1.5vw;
}


.function_0 {
    display: inline-flex;
    margin: 7vw 6vw 0vw 6vw;
    height: 40vw;
    width: 88vw;
}

.functit {
    color: #FF5F1F;
    font-size: 3vw;
    font-weight: 800;
}

.function_0 .pic_sec {
    display: inline-flex;
    width: 30vw;
}

.function_0 .pic_sec .mainmokup {
    position: absolute;
    margin: -16vw 0 0 6vw;
    width: 20vw;
    z-index: 2;
}

.function_0 .pic_sec .charimg {
    position: absolute;
    margin: -6vw 0 0 13vw;
    transform: rotate(50deg);
    z-index: 1;
    width: 27vw;
}

.function_0 .balloon13 {
    margin: 17vw 0 0 37vw;
    height: 5vw;
}

.function_0 .pic_sec p {
    position: absolute;
    margin: 18.7vw 0 0 41vw;
    color: #ffffff;
    font-size: 1.3vw;
    font-weight: 500;
}

.function_1 {
    margin: 5vw 6vw 0 6vw;
    display: inline-flex;
    width: 88vw;
    height: 50vw;
    justify-content: space-between;
}

.function_1 .text_sec {
    margin: 2vw 10vw 0 0;
}

.function_1 .divide {
    position: absolute;
    margin: 1.5vw 0 0 10vw;
    width: 30.3vw;
    height: 0.2vw;
    background: #FF5F1F;
}

.function_2 {
    margin: 5vw 6vw 5vw 6vw;
    display: inline-flex;
    width: 88vw;
    height: 50vw;
    justify-content: space-between;
}

.function_2 .text_sec {
    position: absolute;
    margin: 2vw 10vw 0 0;
    z-index: 2;
}

.function_2 .pic_sec {
    margin-left:68vw;
}



.function_2 .pic_sec .phone_mokup {
    position: absolute;
    margin-left: -21.5vw;
    z-index: 2;
}

.function_2 .pic_sec .phone_mokup2 {
    position: absolute;
    z-index: 2;
}

.function_2 .divide {
    position: absolute;
    margin: 1.5vw 0 0 20vw;
    width: 74vw;
    height: 0.2vw;
    background: #ffffff;
    z-index: 2;
}

.function_2 .red {
    margin: -7vw 0 0 -73.94vw;
    position: absolute;
    background: #FF5F1F;
    width: 100vw;
    height: 27vw;
    z-index: 1;
}

.function_2 .font_red,
.function_2 .subtit,
.function_2 .normal {
    color: #ffffff;
}







.function_3 {
    margin: 5vw 6vw 0 6vw;
    display: inline-flex;
    width: 88vw;
    height: 50vw;
    justify-content: space-between;
}

.function_3 .red {
    margin: -7vw 0 0 -6vw;
    position: absolute;
    background: #FF5F1F;
    width: 100vw;
    height: 27vw;
    z-index: 1;
}

.function_3 .phone_mokup{
    position: absolute;
    margin-left: 20vw;    
    z-index: 2;
}

.function_3 .pic_sec .charimg {
    position: absolute;
    margin: 12vw 0 0 5vw;
    transform: rotate(-50deg);
    z-index: 1;
    width: 27vw;
}

.function_3box {
    position: absolute;
    display: inline-flex;
    width: 88vw;
    justify-content: space-between;
    z-index: 2;
}

.function_3 .text_sec {
    margin: 2vw 6.2vw 0 0;
}

.function_3 .divide {
    position: absolute;
    margin: 1.5vw 0 0 16.5vw;
    width: 25vw;
    height: 0.2vw;
    background: #FF5F1F;
}




.function_4 {
    padding: 5vw 6vw 5vw 6vw;
    display: inline-flex;
    width: 88vw;
    height: 50vw;
    justify-content: space-between;
    /* background: #FFFDFC; */
}


.function_4 .text_sec {
    margin: 2vw 10vw 0 0;
    position: absolute;
    /* margin-left: 47vw; */
    z-index: 3;
}

.function_4 .pic_sec {
    position: absolute;
    margin-left: 47vw;
    z-index: 3;
}

.function_4 .divide {
    position: absolute;
    margin: 1.5vw 0 0 10vw;
    width: 84vw;
    height: 0.2vw;
    background: #FF5F1F;
    z-index: 2;
}



.function_5 {
    margin: 5vw 6vw 0 6vw;
    display: inline-flex;
    width: 88vw;
    height: 50vw;
    justify-content: space-between;
}

.function_5 .red {
    margin: 20vw 0 0 -6vw;
    position: absolute;
    background: #FF5F1F;
    width: 100vw;
    height: 27vw;
    z-index: 1;
}

.function_5box {
    position: absolute;
    display: inline-flex;
    width: 88vw;
    justify-content: space-between;
    z-index: 2;
}

.function_5 .text_sec {
    margin: 2vw 7.4vw 0 0;
}

.function_5 .phone_mokup {
    position: absolute;
    z-index: 2;
}

.function_5 .phone_mokup2 {
    margin-left: 21vw;
    width: 20vw;
    position: absolute;
    z-index: 2;
}

.function_5 .divide {
    position: absolute;
    margin: 1.5vw 0 0 10vw;
    width: 30.3vw;
    height: 0.2vw;
    background: #ff5f1f;
}
