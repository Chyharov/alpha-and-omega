"use strict";(self.webpackChunkalpha_ritual=self.webpackChunkalpha_ritual||[]).push([[580],{4477:function(e,a,n){n(2791);a.Z=n.p+"static/media/arrowLeft.ced4667617a94daa01f2833b1d67fd96.svg"},7314:function(e,a,n){n(2791);a.Z=n.p+"static/media/arrowRight.b9c84fae764af70935f7733002b2b213.svg"},710:function(e,a,n){n(2791);a.Z=n.p+"static/media/closeIcon.6aff52bdc493825673f954b613e93f63.svg"},2510:function(e,a,n){n.d(a,{Z:function(){return m}});var s=n(2791),t=n(710),i=n(4477),r=n(7314),c="ModalWindow_modal__oBSLx",l="ModalWindow_modalContent__qvODG",o="ModalWindow_modalImage__wrybe",d="ModalWindow_closeModal__9HBLA",u="ModalWindow_centerButtonModal__O92oh",f="ModalWindow_buttonModal__P5AR7",_=n(184),m=function(e){var a=e.selectedImage,n=e.arrayPhoto,m=e.setSelectedImage,p=e.setModalOpen,V=function(){p(!1),document.body.style.overflow="auto"},x=function(e){"Escape"===e.key&&V()};return(0,s.useEffect)((function(){return window.addEventListener("keydown",x),function(){window.removeEventListener("keydown",x)}})),(0,_.jsx)("div",{className:c,onClick:function(e){e.target===e.currentTarget&&V()},children:(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("span",{className:d,onClick:V,children:(0,_.jsx)("img",{src:t.Z,alt:"closeIcon"})}),(0,_.jsx)("img",{className:o,id:a.id,src:a.src,alt:a.alt}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("button",{className:f,"aria-label":"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0441\u043b\u0430\u0439\u0434",onClick:function(){return m(function(){var e=(n.findIndex((function(e){return e.id===a.id}))-1+n.length)%n.length;return n[e]}())},children:(0,_.jsx)("img",{src:i.Z,alt:"arrowLeft"})}),(0,_.jsx)("button",{className:f,"aria-label":"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0441\u043b\u0430\u0439\u0434",onClick:function(){return m(function(){var e=(n.findIndex((function(e){return e.id===a.id}))+1)%n.length;return n[e]}())},children:(0,_.jsx)("img",{src:r.Z,alt:"arrowRight"})})]})]})})}},8350:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var s=n(959),t=n(9439),i=n(2791),r=n(2510),c={funeralVases:"SectionFuneralVases_funeralVases__NaXEA",funeralVasesContainer:"SectionFuneralVases_funeralVasesContainer__SrZQj",funeralVasesDescriptionContainer:"SectionFuneralVases_funeralVasesDescriptionContainer__nKJc-",funeralVases__list:"SectionFuneralVases_funeralVases__list__EgJZw",funeralVases__listItem:"SectionFuneralVases_funeralVases__listItem__8HeHw",funeralVasesPictureList:"SectionFuneralVases_funeralVasesPictureList__k7+LO",funeralVasesPictureList_img:"SectionFuneralVases_funeralVasesPictureList_img__LIEON",modal:"SectionFuneralVases_modal__QlJtm",modalContent:"SectionFuneralVases_modalContent__nsCGt",modalImage:"SectionFuneralVases_modalImage__rspgO",closeModal:"SectionFuneralVases_closeModal__MZD6g",closeModalIcon:"SectionFuneralVases_closeModalIcon__-KIaS",modalDescription:"SectionFuneralVases_modalDescription__LqRUd",carouselCenterButtonModal:"SectionFuneralVases_carouselCenterButtonModal__N8zw2",carouselButtonModal:"SectionFuneralVases_carouselButtonModal__EbDHi"},l=n(184),o=[{id:1,src:n(8618),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 1"},{id:2,src:n(4863),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 2"},{id:3,src:n(9473),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 3"},{id:4,src:n(6403),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 4"},{id:5,src:n(3189),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 5"},{id:6,src:n(5271),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 6"},{id:7,src:n(3384),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 7"},{id:8,src:n(7395),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 8"},{id:9,src:n(8359),alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f 9"}],d=function(){var e=(0,i.useState)(!1),a=(0,t.Z)(e,2),n=a[0],s=a[1],d=(0,i.useState)(null),u=(0,t.Z)(d,2),f=u[0],_=u[1];return(0,l.jsx)("section",{className:c.funeralVases,children:(0,l.jsx)("div",{className:"container "+c.funeralVasesContainer,children:(0,l.jsxs)("div",{className:c.funeralVasesDescriptionContainer,children:[(0,l.jsx)("h2",{className:"title",children:"\u0423\u0440\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u0430\u0445\u0443"}),(0,l.jsx)("ul",{className:c.funeralVasesPictureList,children:o.map((function(e){return(0,l.jsx)("li",{className:c.funeralVasesPictureList__item,children:(0,l.jsx)("img",{className:c.funeralVasesPictureList_img,id:e.id,src:e.src,alt:e.alt,onClick:function(){return a=e.id,e.src,e.alt,_(o.find((function(e){return e.id===a}))),s(!0),void(document.body.style.overflow="hidden");var a}})},e.id)}))}),n&&f&&(0,l.jsx)(r.Z,{selectedImage:f,arrayPhoto:o,setSelectedImage:_,setModalOpen:s})]})})})},u=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{}),(0,l.jsx)("main",{children:(0,l.jsx)(d,{})})]})}},8618:function(e,a,n){e.exports=n.p+"static/media/funeralVases1.a88a12034cc3df2441e6.webp"},4863:function(e,a,n){e.exports=n.p+"static/media/funeralVases2.c4e05a56aba70ce0267e.webp"},9473:function(e,a,n){e.exports=n.p+"static/media/funeralVases3.d0dfea6446d850c807ff.webp"},6403:function(e,a,n){e.exports=n.p+"static/media/funeralVases4.10dd1fc7cd3d5220cdd0.webp"},3189:function(e,a,n){e.exports=n.p+"static/media/funeralVases5.8f25feb13e65c9124e42.webp"},5271:function(e,a,n){e.exports=n.p+"static/media/funeralVases6.0a931766972aa7ffc64d.webp"},3384:function(e,a,n){e.exports=n.p+"static/media/funeralVases7.cc18fbf11119ecdd6c1a.webp"},7395:function(e,a,n){e.exports=n.p+"static/media/funeralVases8.683319f7514c6dc583a5.webp"},8359:function(e,a,n){e.exports=n.p+"static/media/funeralVases9.d896315325b2767f48e9.webp"}}]);
//# sourceMappingURL=580.fc6f00e2.chunk.js.map