(this["webpackJsonppass-gen"]=this["webpackJsonppass-gen"]||[]).push([[0],{113:function(t,e,n){},117:function(t,e){},119:function(t,e){},129:function(t,e){},131:function(t,e){},158:function(t,e){},159:function(t,e){},164:function(t,e){},166:function(t,e){},173:function(t,e){},192:function(t,e){},209:function(t,e,n){"use strict";n.r(e);var c=n(11),a=n.n(c),s=n(107),o=n.n(s),i=(n(113),n(31)),u=n(108),r=n.n(u),l=n(5);var f=function(){var t=a.a.useState(16),e=Object(i.a)(t,2),n=e[0],c=e[1],s=a.a.useState(""),o=Object(i.a)(s,2),u=o[0],f=o[1],b=a.a.useState(0),j=Object(i.a)(b,2),h=j[0],d=j[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{className:"heading",children:"Generate your password!"}),Object(l.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var e=function(t){return r.a.randomBytes(t).toString("hex")}(+n);f(e),d(e.length)},children:[Object(l.jsx)("input",{className:"input",id:"input",value:n,onChange:function(t){t.target.value>=0&&t.target.value<=32&&c(t.target.value)},placeholder:"Nubmer from 0 to 32"}),Object(l.jsx)("button",{className:"submit-button",type:"submit",children:"Generate Password"})]}),Object(l.jsxs)("div",{className:"result-wrapper",children:[Object(l.jsx)("p",{className:"result",children:u}),Object(l.jsx)("button",{className:"copy-button",onClick:function(t){navigator.clipboard.writeText(u).then((function(){var t=u;f("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!"),setTimeout((function(){f(t)}),500)})).catch((function(t){console.log(t)}))},children:"Copy"})]}),Object(l.jsxs)("p",{className:"result-length",children:["Length: ",h]})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),s(t),o(t)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}},[[209,1,2]]]);
//# sourceMappingURL=main.68adf3b5.chunk.js.map