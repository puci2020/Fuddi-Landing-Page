(window["webpackJsonpreact-translate-app"]=window["webpackJsonpreact-translate-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),i=(a(53),a(18)),o=a(19),s=a(23),u=a(20),m=a(24),d=(a(54),a(55),a(34)),E=a.n(d),p=(a(56),a(11));var f=function(){var e=Object(p.b)().t;return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,e("home.header1")),r.a.createElement("h1",null,e("home.header2")),r.a.createElement("button",null,"Sprawd\u017a teraz!"))},h=a(39),g=a.n(h),v=a(21),w=a(115),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,className:"caption",xs:12,md:6},r.a.createElement(f,null)),r.a.createElement(w.a,{item:!0,className:"caption",xs:12,md:6},r.a.createElement(v.Parallax,{className:"phone",y:[160,-30],tagOuter:"figure"},r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:g.a}))))),r.a.createElement("img",{className:"layer white",src:E.a}))}}]),t}(n.Component);a(88);var y=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h3",null,"elasdasdasdasdasdo"))},k=a(46);a(89),a(90);var O=function(){var e=Object(p.b)(),t=e.t,a=e.i18n;function n(e){a.changeLanguage(e)}return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},t("link1.1"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},t("link2.1"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},t("link3.1"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},t("link4.1"))),r.a.createElement("li",null,r.a.createElement("select",{id:"lang",onChange:function(){return function(){var e=document.getElementById("lang").value;a.changeLanguage(e)}()}},r.a.createElement("option",{value:"pl"},"PL"),r.a.createElement("option",{value:"en"},"EN"))),r.a.createElement("ul",{id:"lang2"},r.a.createElement("button",{onClick:function(){return n("pl")}},"PL"),r.a.createElement("button",{onClick:function(){return n("en")}},"EN"))))},N=(a(91),function(e){return r.a.createElement("div",{className:"Burger",id:"burger",onClick:e.click},r.a.createElement("div",{id:"first"}),r.a.createElement("div",{id:"secound"}),r.a.createElement("div",{id:"third"}))}),j=a(41),B=a.n(j),x=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),l=a[0],c=a[1];return window.addEventListener("scroll",function(){window.scrollY>=80?c(!0):c(!1)}),r.a.createElement("header",{className:l?"navbar active":"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:B.a})),r.a.createElement(N,{click:e.drawerClickHandler}),r.a.createElement(O,null))},C=(a(92),function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement(O,null))}),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1,active:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}),a.setState(function(e){return{active:!e.active}}),a.state.active?(document.getElementById("secound").style.display="block",document.getElementById("first").style.transform="rotate(180deg)",document.getElementById("first").style.marginTop="0",document.getElementById("third").style.transform="rotate(0)",document.getElementById("third").style.marginBottom="0"):(document.getElementById("secound").style.display="none",document.getElementById("first").style.transform="translateY(8px) rotate(45deg)",document.getElementById("third").style.transform="translateY(-8px) rotate(-45deg)")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(C,{show:this.state.sideDrawerOpen})),r.a.createElement("div",{className:"App"},r.a.createElement(v.ParallaxProvider,null,r.a.createElement(b,null)),r.a.createElement(x,{drawerClickHandler:this.drawerToggleClickHandler}),e,r.a.createElement(y,null),r.a.createElement(y,null))}}]),t}(n.Component),P=a(26),S=a(42),z=a(43),D=a.n(z),L={en:{translation:a(44)},pl:{translation:a(45)}};P.a.use(S.a).use(D.a).use(p.a).init({fallbackLng:"pl",debug:!0,lng:"pl",resources:L,whitelist:["en","pl"],interpolation:{escapeValue:!1}});P.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){e.exports=a.p+"static/media/white3.06bf648d.png"},39:function(e,t,a){e.exports=a.p+"static/media/app.e0aab94f.png"},41:function(e,t,a){e.exports=a.p+"static/media/logo.8329ff52.png"},44:function(e){e.exports=JSON.parse('{"link1":{"1":"Home"},"link2":{"1":"RoadMap"},"link3":{"1":"About Us FAQ"},"link4":{"1":"Contact"},"home":{"header1":"Fresh vegetables and fruits without leaving your home?","header2":"Fuddi is the application for you!","header3":"Download the Beta on Google Play now"}}')},45:function(e){e.exports=JSON.parse('{"link1":{"1":"Strona g\u0142\xf3wna"},"link2":{"1":"Droga do sukcesu"},"link3":{"1":"O Nas FAQ"},"link4":{"1":"Kontakt"},"home":{"header1":"\u015awie\u017ce warzywa i owoce bez wychodzenia z domu?","header2":"Fuddi to aplikacja dla Ciebie!","header3":"Pobierz ju\u017c teraz wersj\u0119 Beta w Google Play"}}')},48:function(e,t,a){e.exports=a(102)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.042e8efb.chunk.js.map