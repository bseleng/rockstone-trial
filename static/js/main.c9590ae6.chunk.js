(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{10:function(e,t,s){e.exports={OrgMessageWrapper:"OrgMessageWrapper_OrgMessageWrapper__aKBKm",MessageInput:"OrgMessageWrapper_MessageInput__2B72D",InputBar:"OrgMessageWrapper_InputBar__2nHsR"}},16:function(e,t,s){e.exports={AdMessageInput:"MclMessageInput_AdMessageInput__1JvRr"}},17:function(e,t,s){e.exports={AtmMessageBox:"AtmMessageBox_AtmMessageBox__EKSlu"}},24:function(e,t,s){},25:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(15),r=s.n(c),u=(s(24),s(25),s(3)),o=s(5),i=s(2),j=s(10),g=s.n(j),l=s(19),b=s(16),O=s.n(b),d=s(0),p=function(e){var t=e.message,s=e.setMessage,n=e.sendMessage;return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("textarea",{onChange:function(e){s(e.target.value)},value:t,placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onKeyPress:function(e){13!==e.charCode||e.shiftKey||(e.preventDefault(),n())}})]})},f=function(e){var t=e.name,s=e.onClick;return Object(d.jsxs)("button",{onClick:s,children:[" ",t]})},m=function(e){var t=e.btnName,s=e.messageArr,a=e.setMessageArr,c=Object(n.useState)(""),r=Object(i.a)(c,2),u=r[0],o=r[1],j=function(){""!==u?(a((function(e){return[].concat(Object(l.a)(e),["".concat(u)])})),o("")):alert("\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")};return Object(n.useEffect)((function(){}),[s]),Object(d.jsxs)("div",{className:O.a.AdMessageInput,children:[Object(d.jsx)(p,{message:u,setMessage:o,sendMessage:j}),Object(d.jsx)(f,{name:t,message:u,onClick:j})]})},x=s(17),M=s.n(x),h=s(9),v=s.n(h),_=function(e){var t=e.message;return Object(d.jsx)("div",{className:M.a.AtmMessageBox,children:Object(d.jsx)(v.a,{options:{strings:t,autoStart:!0,cursor:"",delay:50}})})},B=function(e){var t=e.btnName,s=Object(n.useState)([]),a=Object(i.a)(s,2),c=a[0],r=a[1];return Object(d.jsxs)("div",{className:g.a.OrgMessageWrapper,children:[Object(d.jsx)("div",{className:g.a.InputBar,children:Object(d.jsx)("div",{className:g.a.MessageInput,children:Object(d.jsx)(m,{btnName:t,messageArr:c,setMessageArr:r})})}),c.map((function(e,t){return Object(d.jsx)(_,{message:e},"msg-".concat(t))}))]})},S=s(6),I=s.n(S),A=s(18),N=s.n(A),T=function(){var e=new Date,t=Object(n.useRef)(null),s=Object(n.useState)(null),a=Object(i.a)(s,2),c=a[0],r=a[1],u=function(e){return e.toString().padStart(2,"0")};return t.current="".concat(u(e.getHours())," : ").concat(u(e.getMinutes())," : ").concat(u(e.getSeconds())),setInterval((function(){r(t.current)}),1e3),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("div",{children:[" ",c]}):Object(d.jsx)(v.a,{options:{strings:"...",autoStart:!0,cursor:"",loop:!0,delay:50,deleteSpeed:50,pauseFor:50}})})},k=function(){var e=Object(n.useRef)(0),t=Object(n.useRef)(0),s=Object(n.useState)({0:e.current,1:t.current}),a=Object(i.a)(s,2),c=a[0],r=a[1],j=function(s){switch(s){case"0":r((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(u.a)({},"0",e.current.scrollTop))}));break;case"1":r((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(u.a)({},"1",t.current.scrollTop))}));break;default:return}};return Object(d.jsx)("div",{children:Object(d.jsxs)(N.a,{enableMouseEvents:!0,onChangeIndex:function(s,n){return function(s){switch(s){case 0:e.current.scrollTop=c[0];break;case 1:t.current.scrollTop=c[1];break;default:return}}(s)},children:[Object(d.jsx)("div",{className:"".concat(I.a.Base," ").concat(I.a.Messages),ref:e,onScroll:function(){return j("0")},children:Object(d.jsx)(B,{btnName:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})}),Object(d.jsxs)("div",{className:"".concat(I.a.Base," ").concat(I.a.Time),ref:t,onScroll:function(){return j("1")},children:["\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",Object(d.jsx)(T,{})]})]})})};var C=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(k,{})})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),W()},6:function(e,t,s){e.exports={Base:"PgMessageTime_Base__GWuxi",Messages:"PgMessageTime_Messages__1GaAO",Time:"PgMessageTime_Time__1h_yk"}}},[[47,1,2]]]);
//# sourceMappingURL=main.c9590ae6.chunk.js.map