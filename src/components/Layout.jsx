import { css, Global } from '@emotion/core'
import React from 'react'
import Helmet from 'react-helmet'

const globalStyle = css`
/* RESET */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration:none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
/*body {
    line-height: 1;
}*/
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
article, aside, figure, footer, header, hgroup, menu, nav, section {
    display:block;
}



/* BODY */

body{
    font-size: 62.5%;
}
body, input, textarea, select, button{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
    font-family: 'Asap', sans-serif;
    font-weight: 400;
    color: #5e5e5e;
}
p{
    text-rendering: optimizeLegibility;
}
strong{
    font-weight: 600;
}
em{
    font-style: italic;
}
input, textarea, select, button{
    border: none;
    outline: none;
    resize: none;
    border-radius: 0;
    background-color: transparent;
    padding: 0;
    margin: 0;
}
input:not([type="checkbox"]):not([type="radio"]), textarea, select, button{
    -webkit-appearance: none;
}

button{
    overflow: visible;
}

a, button{
    color: #00b6e1;
    -webkit-tap-highlight-color: rgba(128, 195, 0, 0);
    cursor: pointer;
    outline: none;
    
    transition:
        color 200ms ease-out,
        background 200ms ease-out,
        border 200ms ease-out,
        opacity 200ms ease-out,
        box-shadow 200ms ease-out;
    -webkit-transition:
        color 200ms ease-out,
        background 200ms ease-out,
        border 200ms ease-out,
        opacity 200ms ease-out,
        -webkit-box-shadow 200ms ease-out;
    -moz-transition:
        color 200ms ease-out,
        background 200ms ease-out,
        border 200ms ease-out,
        opacity 200ms ease-out,
        box-shadow 200ms ease-out;
    -o-transition:
        color 200ms ease-out,
        background 200ms ease-out,
        border 200ms ease-out,
        opacity 200ms ease-out,
        box-shadow 200ms ease-out;
}

img{
    display:inline-block;
    max-width: 100%;
}



/* HIDDENS */

@media (max-width: 767px) {
    .hidden\@xs{
        display: none !important;
    }
}
@media (min-width: 768px) and (max-width: 979px) {
    .hidden\@sm{
        display: none !important;
    }
}
@media (min-width: 980px) and (max-width: 1199px) {
    .hidden\@md{
        display: none !important;
    }
}
@media (min-width: 1200px) {
    .hidden\@lg{
        display: none !important;
    }
}



/* ******* MOBILE ******* */

/* GENERAL */

.notVisible{
    position: absolute;
    left: -9999px;
}
.scrollable{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.scrollable.scroll-x{
    overflow:hidden;
    overflow-x:auto;
}

.img{
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
}

/* ESTRUCTURA */

.wrapper{
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.section{
    padding-top: 70px;
    padding-bottom: 70px;
}
.section-t{
    padding-top: 70px;
}
.section-b{
    padding-bottom: 70px;
}

.row > .col:not(:first-child){
    margin-top: 20px;
}

.text-center{
    text-align: center;
}

/* ALIGNS */

.align-middle:before{
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
.align-middle > .align{
    display: inline-block;
    vertical-align: middle;
}



/* HEADER */

@media (max-width: 979px){

    .header .menu-btn{
        display: block;
        width: 44px;
        height: 44px;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -22px;
        z-index: 10;
    }
    .header .menu-btn span,
    .header .menu-btn span:before,
    .header .menu-btn span:after{
        content: "";
        display: block;
        width: 20px;
        height: 2px;
        position: relative;
        background-color: #fff;
        border-radius: 20px;
    }
    .header .menu-btn span{
        margin: 0 auto;
    }
    .header .menu-btn span:before,
    .header .menu-btn span:after{
        position: absolute;
        left: 0;
        top: -6px;
    }
    .header .menu-btn span:after{
        top: auto;
        bottom: -6px;
    }

    /* Animation */

    .header .menu-btn{
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    
        -webkit-transition: -webkit-transform 600ms cubic-bezier(0.785, 0.135, 0.150, 0.860);
        -o-transition: -o-transform 600ms cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: transform 600ms cubic-bezier(0.785, 0.135, 0.150, 0.860);
    }
    .header .menu-btn span{
        -webkit-transition: background-color 300ms ease-out;
        -o-transition: background-color 300ms ease-out;
        transition: background-color 300ms ease-out;
    }
    .header .menu-btn span:before,
    .header .menu-btn span:after{
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    
        -webkit-transition:
            -webkit-transform 300ms ease-out,
            top 300ms ease-out,
            bottom 300ms ease-out;
        -o-transition:
            -o-transform 300ms ease-out,
            top 300ms ease-out,
            bottom 300ms ease-out;
        transition:
            transform 300ms ease-out,
            top 300ms ease-out,
            bottom 300ms ease-out;
    }

    .header .menu-btn.active{
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
    .header .menu-btn.active span{
        background-color: rgba(255,255,255,0);
    }
    .header .menu-btn.active span:before{
        top: 0;

        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .header .menu-btn.active span:after{
        bottom: 0;

        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

}

.header{
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 400;
    background-color:transparent;
    text-align: left;
}
.header .wrapper{
    height: 60px;
}
.header.fixed{
     background-color: #242946;
         /*box-shadow: 0 0 10px 0 rgba(0,0,0, 0.2);*/
}

.header .logo,
.header .logo a{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 10;
}
.header .logo a{
    display: block;
    width: 130px;
    margin: 0 auto;
    background: no-repeat left center/contain;
    background-image: url(../images/logo@2.png);
}
.header .logo a:before{
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 20.83%;
}


@media (max-width: 979px){

    .nav{
        display: none;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 5;
        overflow: hidden;
        text-align: center;
    }
    .nav .overlay{
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        background: rgb(36,41,70);
        background: -moz-linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
        background: linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#242946",endColorstr="#6e7fd8",GradientType=1);
    }
    .nav .menu{
        position: relative;
        z-index: 1;
        padding: 10px 20px 30px;
        text-align: center;
    }
    .nav .menu .item{
        margin-top: 10px;
    }
    .nav .menu .item .link{
        display: inline-block;
        vertical-align: middle;
        padding: 10px 0;
        font-size: 3em;
        font-weight: 700;
        color: #fff;
    }
  
   
    /* Animation */

    .nav .overlay{
        opacity: 0;
    
        -webkit-transition: opacity 300ms ease-out;
        -o-transition: opacity 300ms ease-out;
        transition: opacity 300ms ease-out;
    }
    .nav .menu{
        opacity: 0;
    
        -webkit-transform: translate3d(0, -100px, 0);
        -ms-transform: translate3d(0, -100px, 0);
        -o-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    
        -webkit-transition:
            opacity 200ms ease-out,
            -webkit-transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
        -o-transition:
            opacity 200ms ease-out,
            -o-transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
        transition:
            opacity 200ms ease-out,
            transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .nav.show .overlay{
        opacity: 0.9;
    }
    .nav.show .menu{
        opacity: 1;
    
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    
        -webkit-transition-delay: 300ms;
        -o-transition-delay: 300ms;
        transition-delay: 300ms;
    }

}

.nav .menu .item.active .link{
    position: relative;
}
.nav .menu .item.active .link::after{
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 20px;
    margin-left: -10px;
    height: 4px;
    background: #fff;
    border-radius: 10px;
}


/* HEADING */

.heading{
    font-size: 3.3em;
    line-height: 1.25;
    color: #fff;
    font-weight: 700;
}
.text{
    font-size: 1.5em;
    line-height: 1.5;
}
.subtitle{
    font-size: 3em;
    color: #404041;
    position: relative;
    font-weight: 700;
}
.text-center .subtitle::after{
    margin: 0 auto;
    margin-top: 18px;
}
.subtitle:after{
    content: "";
    display: block;
    margin-top: 18px;
    width: 62px;
    height: 5px;
    border-radius: 8px;
    
    background: rgb(110,127,216);
    background: -moz-linear-gradient(90deg, rgba(110,127,216,1) 0%, rgba(0,180,223,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(110,127,216,1) 0%, rgba(0,180,223,1) 100%);
    background: linear-gradient(90deg, rgba(110,127,216,1) 0%, rgba(0,180,223,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6e7fd8",endColorstr="#00b4df",GradientType=1);
}

.subtitle + .text{
    margin-top: 25px;
}

/* BTN */

.fill-btn{
    display: inline-block;
    padding: 10px 30px 12px;
    position: relative;
    left: 3px;
    font-size: 1.5em;
    line-height: 1;
    color: #fff;
    background-color: #00b4df;
    border-radius: 50px;
    font-weight: 400;
}

.arrow-btn{
    padding: 6px 0;
    font-size: 1.5em;
    position: relative;
    padding-right: 15px;
    z-index: 2;
}
.arrow-btn:after{
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 6px;
    height: 6px;
    margin-top: -4px;
    border: solid #00b4df;
    border-width: 0 2px 2px 0;

    transform: rotate(-45deg);

}


/* INTRO */

#intro{
    position: relative;
    overflow: hidden;
    padding-top: 100px; /*Padding-top + section*/
    padding-bottom: 80%; /*Mask + section*/

    background: rgb(36,41,70);
    background: -moz-linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
    background: linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#242946",endColorstr="#6e7fd8",GradientType=1);
}
#intro .iso{
    position: absolute;
    width: 100%;
    max-width: 400px;
    top: 50%;
    right: -120px;
    background-size: contain;
    background-image: url(../images/intro-iso@2.png);
    background-repeat: no-repeat;
    background-position: top center;

    -webkit-transform: translate3d(0,-50%,0);
    -moz-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
}
#intro .iso:before{
    content: "";
    display: block;
    height: 0;
    padding-bottom: 102.36%;
}
#intro .intro-img{
    position: absolute;
    bottom: -20px;
    left: 20px;
    width: 100%;
    z-index: 1;
}
#intro .intro-img:before{
    content: "";
    display: block;
    height: 0;
    padding-bottom: 70.45%;
}
#intro .mask{
    display: block;
    width: 100%;
    height: 100px;
    position: absolute;
    left: 0;
    bottom: -2px;
    z-index: 2;
}
#intro .mask:before{
    content: "";
    display: block;
    width: 200%;
    height: 100%;
    background: repeat-x center bottom/auto 100px;
    background-image: url(../images/intro-mask.svg);
}
#intro .caption{
    color: #00b4df;
    text-transform: uppercase;
    letter-spacing:0.1em;
    font-size: 1.5em;
    opacity: .8;
}
#intro .caption + .heading{
    margin-top: 7px;
}
#intro .text{
    color: #fff;
    margin-top: 20px;
}
#intro .fill-btn{
    margin-top: 35px;
}


/* List */

.list .item{
    margin: 0 auto;
    margin-top: 35px;
    text-align: center;
    max-width: 400px;
}
.list .item .img-holder{
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 210px;
}
.list .item .img-holder .img {
    display: block;
    position: relative;
}
.list .item .img-holder .img::before{
    content: "";
    display: block;
    height: 0;
    padding-bottom: 88.67%;
}
.list .item .caption{
    color: #00b4df;
    text-transform: uppercase;
    letter-spacing:0.1em;
    font-size: 1.3em;
    opacity: .8;
}
.list .item .title{
    margin-top: 7px;
    font-size: 2.5em;
    color: #404041;
    position: relative;
    font-weight: 700;
}
.list .item .title::before{
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 62px;
    height: 20px;
    background-color: #00b4df;
    opacity: .1;

    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    transform: translateX(-50%);
}
.list .item .text{
    margin-top: 18px;
}
.list .item .arrow-btn{
    display: inline-block;
    margin-top: 18px;
}


/* CTA */

#cta{
    overflow: hidden;
    position: relative;
    padding: 100px 0;

    background: rgb(36,41,70);
    background: -moz-linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
    background: linear-gradient(90deg, rgba(36,41,70,1) 0%, rgba(110,127,216,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#242946",endColorstr="#6e7fd8",GradientType=1);
}

#cta .wrapper{
    position: relative;
    z-index: 1;
}

#cta .iso{
    position: absolute;
    width: 100%;
    max-width: 500px;
    top: 50%;
    left: 50%;
    background-size: contain;
    background-image: url(../images/intro-iso@2.png);
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 0;

    -webkit-transform: translate3d(-50%,-50%,0);
    -moz-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
}
#cta .iso:before{
    content: "";
    display: block;
    height: 0;
    padding-bottom: 102.36%;
}

#cta .heading{
    color: #fff;
    font-weight: 700;
}
#cta .fill-btn{
    margin-top: 20px;
}
#cta .mask{
    display: block;
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: -2px;
    z-index: 2;
}
#cta .mask:before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: repeat-x center bottom/auto 60px;
    background-image: url(../images/intro-mask.svg);
}
#cta .mask.top-mask{
    bottom: auto;
    top: -2px;    
}
#cta .mask.top-mask:before{
    background-image: url(../images/top-mask.svg);
}


/* CONTACTO */

#contacto{
    text-align: center;
    background-color: #242946;
    color: #fff;
    margin-top: 20px;
}
#contacto .col{
    margin-top: 25px;
}
#contacto .col:first-child{
    margin-top: 0;
}
#contacto .title{
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 15px;
}
#contacto .menu .item{
    padding: 8px 0;
    font-size: 1.4em;
}
#contacto .menu .item a{
    display: inline-block;
    color: inherit;
}
#contacto .copyright{
    font-size: 1.5em;
}
#contacto .copyright span{
    display: block;
    margin-top: 3px;
    font-size: 0.9em;
}
#contacto .bloque{
    font-size: 1.4em;
    margin-top: 35px;
}
#contacto .bloque a{
    display: inline-block;
    vertical-align: middle;
    width: 39px;
    height: 27px;
    margin-top: -2px;
    margin-left: 7px;
    background-image: url(../images/bloque.png)
}


/* POPUP */

.u-mask {
    border: 0!important;
    clip: rect(0 0 0 0)!important;
    -webkit-clip-path: inset(50%)!important;
    clip-path: inset(50%)!important;
    height: 1px!important;
    margin: -1px!important;
    overflow: hidden!important;
    padding: 0!important;
    position: absolute!important;
    white-space: nowrap!important;
    width: 1px!important;
}

.popup{
    display: none;
}
.popup.is-active{
    display: block;
}
.popup .holder{
    display: block;
    padding: 60px 0;
}
.popup .close-btn{
    display: block;
    width: 44px;
    height: 44px;
    position: fixed;
    right: 8px;
    top: 4px;
    z-index: 1;
    background-image: url(../images/close-btn@2.png);
    background-size: 70%;
    background-position: center;
}
.popup .subtitle{
    font-size: 3.4em;
    color: #242946;
}


/* STYLED FORM */

.styled-form{
    margin-top: 35px;
}
.styled-form .input-holder{
    display: block;
    margin-top: 20px;
    text-align: left !important;
}
.styled-form .label{
    font-size: 1.5em;
    font-weight: 700;
}
.styled-form .input{
    display: block;
    margin-top: 12px;
    padding: 10px 15px 12px;
    width: 100%;
    background-color: #f6f6f6;
    border: 1px solid #ececec;
    font-size: 1.5em;
    border-radius: 5px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.styled-form .select-container{
    position: relative;
    padding: 0;
    
}
.styled-form .select-container::after{
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    width: 6px;
    height: 6px;
    margin-top: -5px;
    border: solid #005bb1;
    border-width: 0 2px 2px 0;
    pointer-events: none;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);

}
.styled-form .select-container .select{
    width: 100%;
    font-size: 1em;
    padding: 10px 15px 12px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

}

.styled-form .submit-holder{
    margin-top: 40px;
}
.styled-form .input-holder.has-error .input{
    background: rgba(241, 40, 40, 0.08);
    border-color:rgba(241, 40, 40, 0.2 );
}
.styled-form .input-holder label.error{
    display: block;
    margin-top: 7px;
    font-size: 1.4em;
    font-weight: 700;
    color: #f35656;
}

.styled-form .inputs{
    position: relative;
}
.styled-form.sending .inputs:before,
.styled-form.sent .inputs:before{  
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: .6;
    z-index: 1;
}


.styled-form .response{
    display: none;
    width: 100%;
    padding: 10px 0 12px;
    font-size: 1.8em;
    font-weight: 700;
}
.styled-form[data-success="true"] .response{
    color: #80c300;
}
.styled-form[data-success="false"]:not(.sending) .response{
    display: block;
    color: #f35656;
}
.styled-form.sent .response{
    display: block;
}
.styled-form.sent .fill-btn{
    display: none;
}

.styled-form.sending .fill-btn.loading{
    background-color: rgba(37, 42, 70, 0.20);
    cursor: default;
    position: relative;
}
.styled-form.sending .fill-btn.loading:after{
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 13px;
    height: 13px;
    margin-top: -3px;
    margin-left: 14px;
    border: 2px solid rgba(255,255,255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: loading 400ms linear infinite;
}


@media (min-width:600px){

    #intro{
        padding-top: 90px;
        padding-bottom: 140px;
    }
    #intro .holder{
        width: 55%;
        position: relative;
        z-index: 2;
    }
    #intro .iso{
        max-width: 580px;
    }
    #intro .intro-img{
        bottom: auto;
        right: -200px;
        top: 50%;
        left: auto;
        width: 500px;

        -webkit-transform: translate3d(0,-50%,0);
        -moz-transform: translate3d(0,-50%,0);
        transform: translate3d(0,-50%,0);
    }

    /* POPUP */

    .popup .subtitle{
        font-size: 5em;
    }
    .popup .subtitle + .text{
        margin: 0 auto;
        margin-top: 30px;
        width: 70%;
        font-size: 1.7em;
    }

    /* STYLED FORM */

    .styled-form .input-holder{
        display: inline-block;
        vertical-align: top;
        width: 50%;
        padding: 0 15px;
        margin-top: 30px;

            
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .styled-form .input-holder.third{
        width: 33.33333%;
    }
    .styled-form .input-holder.total{
        width: 100%;
    }

    .styled-form .submit-holder{
        margin-top: 60px;
    }

}


/* ********************** de Mobile a TABLET ********************** */

@media (min-width: 768px) {


    /* ESTRUCTURA */

    .wrapper{
        padding-left: 30px;
        padding-right: 30px;
    }

    /* HEADER */

    .header .menu-btn{
        right: 25px;
    }

    /* INTRO */

    #intro{
        padding-top: 160px;
        padding-bottom: 170px;
    }
    #intro .holder{
        width: 50%;
    }
    #intro .intro-img{
        width: 560px;
    }

    #intro .caption{
        font-size: 1.7em;
    }

    /* HEADING */

    .heading{
        font-size: 3.8em;
    }
    .subtitle{
        font-size: 3.6em;
    }


    /* List */

    .list .item{
        max-width: none;
    }
    .list .item .holder,
    .list .item .img-holder{
        display: inline-block;
        vertical-align: middle;
        padding: 0 15px;
        width: 70%;
        text-align: left;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .list .item .img-holder{
        width: 30%;
        max-width: none;
        margin-bottom: 0;
    }
    .list .item .img-holder .img{
        width: 100%;
        margin-bottom: 0;
    }
    .list .item .title{
        margin-top: 0;
    }
    .list .item .title::before{
        left: -15px;

        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
   


    /* CTA */

    #cta{
        padding:180px 0;
    }
    #cta .mask{
        height: 100px;
    }
    #cta .mask:before{
        background: repeat-x center bottom/auto 100px;
        background-image: url(../images/intro-mask.svg);
    }
    

    /* CONTACTO */

    #contacto .row{
        margin: 0 -15px;
    }
    #contacto .row > .col{
        display: inline-block;
        vertical-align: top;
        width: 33.33333%;
        margin-top: 0;
        text-align: left;
        padding:  0 15px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    #contacto .menu .item{
        width: 65%;
        margin-top:10px;
    }


    /* Icon menu */

    #contacto .menu.icon-menu .item{
        position: relative;
        padding-left: 38px;
    }
    #contacto .menu.icon-menu .item:before{
        content: "";
        position: absolute;
        left: 0;
        top: 7px;
        width: 24px;
        height: 24px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top center;
    }
    #contacto .menu.icon-menu .item.mail::before{
        background-image: url(../images/mail-icon@2.png)
    }
    #contacto .menu.icon-menu .item.tel::before{
        background-image: url(../images/tel-icon@2.png)
    }
    #contacto .menu.icon-menu .item.pin::before{
        background-image: url(../images/pin-icon@2.png)
    }


}




/* ********************** de Tablet a DESKTOP ********************** */

@media (min-width: 980px) {

    
    /* ESTRUCTURA */

    .wrapper.mini{
        max-width: 980px
    }
    .wrapper.extra-mini{
        max-width: 720px
    }

    .row{
        margin-right: -15px;
        margin-left: -15px;
    }
    .row > .col{
        display: inline-block;
        vertical-align: middle;
        width: 50%;
        padding-right: 15px;
        padding-left: 15px;
        margin-top: 0 !important;
    
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .row > .col.lg{
        width: 70%;
    }
    .row > .col.sm{
        width: 30%;
    }
    



    /* HEADER */
    
    .header,
    .header .wrapper{
        height: 78px;
    }

    .header{
        display: block;
        width: 100%;
        text-align: left;
        background-color: transparent;

        -webkit-transition:
            background-color 200ms ease-out,
            -webkit-box-shadow 200ms ease-out;
        -o-transition:
            background-color 200ms ease-out,
            box-shadow 200ms ease-out;
        transition:
            background-color 200ms ease-out,
            box-shadow 200ms ease-out;

    }
    .header .holder{
        box-shadow: none;
        text-align: left;
    
    }

    .header .align{
        width: 100%;
    }

    .header .logo{
        position: absolute;
        top: 50%;

        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .header .logo a{
        width: 180px;
    }

    .header .menu-btn{
        display: none;
    }

    /* Nav */

    .nav{
        display: block !important;
        text-align: right;
        margin-right: -12px;
    }
    .nav .menu .item{
        margin-left: 35px;
    }
    .nav .menu .item:first-child{
        margin-left: 0;
    }
    .nav .menu .item,
    .nav .menu .item a{
        display: inline-block;
        vertical-align: middle;
    }
    .nav .menu .item .link{
        padding: 10px 0;
        font-size: 1.7em;
        color: #fff;
    }
    .nav .menu .item.active .link::after{
        width: 16px;
        margin-left: -8px;
        height: 2px;
    }

    
    .nav .menu .item.highlight{
        margin-left: 35px;
    }
    .nav .menu .item.highlight .link{
        padding: 6px 20px 8px;
        background-color: #00b4df;
        border-radius: 50px;
    }

    .header .logo a,
    .nav .menu .item .link{
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    
        -webkit-transition: -webkit-transform 200ms ease-out;
        -o-transition: -o-transform 200ms ease-out;
        transition: transform 200ms ease-out;
    }
    .header .logo a:hover,
    .header .logo a:focus,
    .nav .menu .item .link:hover,
    .nav .menu .item .link:focus{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }


    /* HEADING */

    .heading{
        font-size: 4.7em;
    }

    .text{
        font-size: 1.6em;
    }


    /* FILL BTN */

    .fill-btn{
        font-size: 1.7em;
    
        -webkit-transition:
            -webkit-transform 200ms ease-out,
            background-color 200ms ease-out;
        -o-transition:
            -o-transform 200ms ease-out,
            background-color 200ms ease-out;
        transition:
            transform 200ms ease-out,
            background-color 200ms ease-out;
    
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    .fill-btn:hover,
    .fill-btn:focus{
        background-color: #005bb1;

        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }
    
    
    
    /* INTRO */
    
    #intro{
        height: calc(100vh - 200px);
        min-height: 720px;
        max-height: 720px;
        padding-top: 0;
        padding-bottom: 0;
    }
    #intro .holder{
        width: 40%;
    }
    #intro .align{
        width: 100%;
    }
    #intro .intro-img{
        right: -20px;
        width: 590px;
        z-index: 1;
    }
    #intro .iso{
        max-width: 680px;
    }

    /*List*/

    .list .item .arrow-btn{
        -webkit-transition:
            -webkit-transform 200ms ease-out;
        -o-transition:
            -o-transform 200ms ease-out;
        transition:
            transform 200ms ease-out;
    
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1)
    }
    .list .item .arrow-btn:hover,
    .list .item .arrow-btn:focus{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }
    

      /* CTA */

    #cta{
        padding:230px 0;
    }
    #cta .mask{
        height: 140px;
    }
    #cta .mask:before{
        background: repeat-x center bottom/auto 140px;
        background-image: url(../images/intro-mask.svg);
    }

    /* CONTACTO */

    #contacto .title{
        font-size: 2.1em;
    }
    #contacto .menu .item{
        font-size: 1.5em;
    }
    #contacto .menu .item .link{    

        -webkit-transition:
            -webkit-transform 200ms ease-out;
        -o-transition:
            -o-transform 200ms ease-out;
        transition:
            transform 200ms ease-out;
    
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1)
    }
    #contacto .menu .item .link:hover,
    #contacto .menu .item .link:focus{

        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }

    #contacto .bloque a{
        opacity: .7;
    }
    #contacto .bloque a:focus,
    #contacto .bloque a:hover{
        opacity: 1;
    }

    /*  POPUP */

    .popup .close-btn{
        -webkit-transition:
            -webkit-transform 200ms ease-out;
        -o-transition:
            -o-transform 200ms ease-out;
        transition:
            transform 200ms ease-out;
    
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1)
    }
    .popup .close-btn:hover,
    .popup .close-btn:focus{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }

    /* STYLED FORM */

    .styled-form .input-holder .input{
        -webkit-transition: border 100ms ease-out;
        -moz-transition: border 100ms ease-out;
        transition: border 100ms ease-out;
    }
    .styled-form .input-holder .input:focus{
        border-color: #cecece;
    }
     
}




/* ********************** de Desktop a DESKTOP 2 ********************** */

@media (min-width: 1200px) {

    /* INTRO */

    #intro .holder{
        width: 50%;
    }
    #intro .intro-img{
        width: 630px;
    }

}
@media (min-width: 1200px) and (min-height: 790px){

    

}




/* ********************** de Desktop 2 a HD ********************** */

@media (min-width: 1400px) {


}




/* ********************** de Hd a FULL HD ********************** */

@media (min-width: 1680px) {

    /* INTRO */

    #intro .wrapper{
        position: relative;
    }
    #intro .holder{
        width: 40%;
    }
    #intro .intro-img{
        right: -40px;

    
    }

}
@media (min-width: 1600px) and (min-height: 790px){
}

@media (min-width: 1921px){

    #intro .mask:before{
        width: 100%;

        background-position: center bottom;
    
        -webkit-transform: none !important;
        -ms-transform: none !important;
        -o-transform: none !important;
        transform: none !important;
    }

}


/* KEYFRAMES */

/* Loading */

@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-moz-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}


/* MODULOS */

@media (max-width:767px){
      #modulos .list{
          position: relative;
      }
      #modulos .list::before{
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          z-index: -1;
          background-size: contain;
          background-repeat: repeat-y;
          background-image: url(../images/road@2.png);
          opacity: .08;
      }
      #modulos .list .item .title,
      #modulos .list .item .text{
          background-color: #fff;
      }
      #modulos .list .item .img-holder{
          max-width: 300px
      }
  }

  /* ********************** de Mobile a TABLET ********************** */

@media (min-width: 768px) {
  
   
    /* MODULOS */

    #modulos .list .item{
      margin: 0 -30px;
      position: relative;
  }
  #modulos .list .item .img-holder,
  #modulos .list .item .holder{
      display: inline-block;
      vertical-align: middle;
      width: 50%;
      padding-left: 30px;
      padding-right: 30px;
      text-align: left;
      
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  #modulos .list .item .holder{
      padding-top: 40px;
      padding-bottom: 40px;
  }

  #modulos .list .item:nth-child(even){
      padding-right: 50%;
  }
  #modulos .list .item:nth-child(even) .holder{
      width: calc(100% - 60px);
  }
  #modulos .list .item:nth-child(even) .img-holder{
      position: absolute;
      right: 0;
      top: 50%;

      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      transform: translateY(-50%);
  }   

  #modulos .list .item .title{
      margin-top: 10px;
  }
  
  /* Road */

  #modulos .list .item:after{
      content: "";
      position: absolute;
      bottom: -90px;
      left: 40%;
      height: 50%;
      width: 33%;

      background-image: url(../images/road-up@2.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
  

      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      transform: translateX(-50%);
 
      z-index: 1;
  }
  #modulos .list .item:nth-child(even):after{
      left: 36%;
      background-image: url(../images/road-down@2.png);
  }

  #modulos .list .item:last-child:after{
      display: none;
  }

}

  /* ********************** de Tablet a DESKTOP ********************** */

  @media (min-width: 980px) {
  

    /* MODULOS */

    #modulos .list .item{
      margin: 0 -50px;
  }
  
  #modulos .list .item .img-holder,
  #modulos .list .item .holder{
      padding-left: 50px;
      padding-right: 50px;
  }
  #modulos .list .item .holder{
      padding-top: 80px;
      padding-bottom: 80px;
  }
  #modulos .list .item .text{
      width: 90%;
  }
  #modulos .list .item:nth-child(even) .holder{
      width: calc(100% - 100px);
  }

  /* Road */

  #modulos .list .item:after{
      width: 39%;
      bottom:-105px;
  }
  #modulos .list .item:nth-child(even):after{
      width: 36%;
      bottom: -100px;
  }

}

`

const Layout = ({ children }) => (
  <div>
    <Global styles={globalStyle} />
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Helmet>
    {children}
  </div>
)

export default Layout
