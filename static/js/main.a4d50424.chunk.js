(window["webpackJsonpreact-translate-app"]=window["webpackJsonpreact-translate-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),o=(a(54),a(18)),i=a(19),s=a(24),u=a(20),m=a(25),d=(a(55),a(56),a(35)),E=a.n(d),p=(a(57),a(11));var f=function(){var e=Object(p.b)().t;return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,e("home.header1")),r.a.createElement("h1",null,e("home.header2")),r.a.createElement("a",{href:"#about"},r.a.createElement("button",null,e("home.button"))))},h=a(40),g=a.n(h),v=a(21),w=a(117),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home",id:"home"},r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,className:"caption",xs:12,md:6},r.a.createElement(f,null)),r.a.createElement(w.a,{item:!0,className:"caption",xs:12,md:6},r.a.createElement(v.Parallax,{className:"phone",y:[160,-30],tagOuter:"figure"},r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:g.a}))))),r.a.createElement("img",{className:"layer white",src:E.a}))}}]),t}(n.Component),k=a(23);a(89);var y=function(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0],l=t[1];return window.addEventListener("scroll",function(){window.scrollY>=700?l(!0):l(!1)}),r.a.createElement("div",{className:a?"about scr":"about",id:"about"},r.a.createElement("h3",null,"elasdasdasdasdasdo"))};a(90),a(91);var O=function(){var e=Object(p.b)(),t=e.t,a=e.i18n;function n(e){a.changeLanguage(e)}return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#home"},t("link1.1"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},t("link3.1"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#roadmap"},t("link2.1"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},t("link4.1"))),r.a.createElement("li",null,r.a.createElement("select",{id:"lang",onChange:function(){return function(){var e=document.getElementById("lang").value;a.changeLanguage(e)}()}},r.a.createElement("option",{value:"pl"},"PL"),r.a.createElement("option",{value:"en"},"EN"))),r.a.createElement("ul",{id:"lang2"},r.a.createElement("button",{onClick:function(){return n("pl")}},"PL"),r.a.createElement("button",{onClick:function(){return n("en")}},"EN"))))},N=(a(92),function(e){return r.a.createElement("div",{className:"Burger",id:"burger",onClick:e.click},r.a.createElement("div",{id:"first"}),r.a.createElement("div",{id:"secound"}),r.a.createElement("div",{id:"third"}))}),j=a(42),B=a.n(j),x=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),l=a[0],c=a[1];return window.addEventListener("scroll",function(){window.scrollY>=80?c(!0):c(!1)}),r.a.createElement("header",{className:l?"navbar active":"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:B.a})),r.a.createElement("div",{className:l?"logo_title logo_active":"logo_title"},"Fuddi"),r.a.createElement(N,{click:e.drawerClickHandler}),r.a.createElement(O,null))},C=(a(93),function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement(O,null))}),I=(a(94),a(43)),S=a.n(I);var L=function(){return r.a.createElement("div",{className:"roadmap",id:"roadmap"},r.a.createElement("div",{className:"space"}),r.a.createElement("h2",null," Road Map"),r.a.createElement("div",{className:"map"},r.a.createElement("img",{src:S.a})))},P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1,active:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}),a.setState(function(e){return{active:!e.active}}),a.state.active?(document.getElementById("secound").style.display="block",document.getElementById("first").style.transform="rotate(180deg)",document.getElementById("first").style.marginTop="0",document.getElementById("third").style.transform="rotate(0)",document.getElementById("third").style.marginBottom="0"):(document.getElementById("secound").style.display="none",document.getElementById("first").style.transform="translateY(8px) rotate(45deg)",document.getElementById("third").style.transform="translateY(-8px) rotate(-45deg)")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(C,{show:this.state.sideDrawerOpen})),r.a.createElement("div",{className:"App"},r.a.createElement(v.ParallaxProvider,null,r.a.createElement(b,null)),r.a.createElement(x,{drawerClickHandler:this.drawerToggleClickHandler}),e,r.a.createElement(y,null),r.a.createElement(L,null))}}]),t}(n.Component),z=a(27),D=a(44),F=a(45),A=a.n(F),H={en:{translation:a(46)},pl:{translation:a(47)}};z.a.use(D.a).use(A.a).use(p.a).init({fallbackLng:"pl",debug:!0,lng:"pl",resources:H,whitelist:["en","pl"],interpolation:{escapeValue:!1}});z.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){e.exports=a.p+"static/media/white3.06bf648d.png"},40:function(e,t,a){e.exports=a.p+"static/media/app.e0aab94f.png"},42:function(e,t,a){e.exports=a.p+"static/media/logo.c00b11a0.png"},43:function(e,t,a){e.exports=a.p+"static/media/roadmap.f5ec31af.png"},46:function(e){e.exports=JSON.parse('{"link1":{"1":"Home"},"link2":{"1":"RoadMap"},"link3":{"1":"About Us FAQ"},"link4":{"1":"Contact"},"home":{"header1":"Fresh vegetables and fruits without leaving your home?","header2":"Fuddi is the application for you!","header3":"Download the Beta on Google Play now","button":"Check now!"}}')},47:function(e){e.exports=JSON.parse('{"link1":{"1":"Strona g\u0142\xf3wna"},"link2":{"1":"Droga do sukcesu"},"link3":{"1":"O Nas FAQ"},"link4":{"1":"Kontakt"},"home":{"header1":"\u015awie\u017ce warzywa i owoce bez wychodzenia z domu?","header2":"Fuddi to aplikacja dla Ciebie!","header3":"Pobierz ju\u017c teraz wersj\u0119 Beta w Google Play","button":"Sprawd\u017a teraz!"}}')},49:function(e,t,a){e.exports=a(104)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.a4d50424.chunk.js.map