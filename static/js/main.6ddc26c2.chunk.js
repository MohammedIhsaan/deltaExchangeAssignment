(this["webpackJsonpdelta-exchange-assignment"]=this["webpackJsonpdelta-exchange-assignment"]||[]).push([[0],{63:function(e,t,A){},67:function(e,t,A){},69:function(e,t,A){},70:function(e,t,A){},71:function(e,t,A){"use strict";A.r(t);var c=A(4),n=A.n(c),s=A(30),a=A.n(s),r=A(16),i=A(26),l=A(14),o=A(21),j={ADD_MEMBER:"ADD_MEMBER",DELETE_MEMBER:"DELETE_MEMBER",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAIL:"LOGIN_FAIL",USER_REQUEST:"USER_REQUEST",LOG_OUT:"LOG_OUT",LOAD_PROFILE:"LOAD_PROFILE",REGISTER_SUCCESS:"REGISTER_SUCCESS",REGISTER_FAIL:"REGISTER_FAIL",LOGIN_BY_EMAIL_SUCCESS:"LOGIN_BY_EMAIL_SUCCESS",LOGIN_BY_EMAIL_FAIL:"LOGIN_BY_EMAIL_FAIL"},u={member:[{id:0,name:"Wayne Rooney",company:"DC United",status:"Active",lastUpdate:"7/07/2017",notes:"ManUtd Heighest scorer"},{id:1,name:"Ryan Giggs",company:"Manchester United",status:"Closed",lastUpdate:"3/08/2011",notes:"Most matches played"},{id:2,name:"Zlatan Ibrahimvic",company:"lA Galaxy",status:"Active",lastUpdate:"3/09/2018",notes:"I am `ZALTAN`"}]},d={accessToken:sessionStorage.getItem("access-token")?sessionStorage.getItem("access-token"):null,user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null,loading:!1,error:null},b=Object(i.b)({allMember:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,A=t.type,c=t.payload;switch(A){case j.ADD_MEMBER:var n=[].concat(Object(o.a)(e.member),[c]);return Object(l.a)(Object(l.a)({},e),{},{member:n});case j.DELETE_MEMBER:var s=e.member.filter((function(e){return e.id!==Number(c)}));return Object(l.a)(Object(l.a)({},e),{},{member:s});default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,A=t.type,c=t.payload;switch(A){case j.USER_REQUEST:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case j.LOGIN_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{accessToken:c,loading:!1});case j.LOGIN_FAIL:return Object(l.a)(Object(l.a)({},e),{},{accessToken:null,loading:!1,error:c});case j.LOAD_PROFILE:return Object(l.a)(Object(l.a)({},e),{},{user:c});case j.REGISTER_SUCCESS:case j.LOGIN_BY_EMAIL_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{user:c,loading:!1});case j.REGISTER_FAIL:case j.LOGIN_BY_EMAIL_FAIL:return Object(l.a)(Object(l.a)({},e),{},{error:c,loading:!1});default:return e}}}),p=A(47),O=A(44),m=Object(i.d)(b,{},Object(O.a)(Object(i.a)(p.a))),f=A(27),h=A(9),x=A(10),g=(A(63),"data:image/png;base64,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"),v=A(0),S=A.n(v),E=A(1),N=A(34),y=(A(65),N.a.initializeApp({apiKey:"AIzaSyB0qZ8I5vNvwdOmAbU_LVECBV6ieJVa1EQ",authDomain:"auth-development-982da.firebaseapp.com",projectId:"auth-development-982da",storageBucket:"auth-development-982da.appspot.com",messagingSenderId:"1021453073791",appId:"1:1021453073791:web:2b4240eba3f685a907ee4a"})),L=y.auth(),C=function(){return function(){var e=Object(E.a)(S.a.mark((function e(t){var A,c,n,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:j.USER_REQUEST}),A=new N.a.auth.GoogleAuthProvider,e.next=5,L.signInWithPopup(A);case 5:c=e.sent,n=c.credential.accessToken,s={name:c.additionalUserInfo.profile.name,photo:c.additionalUserInfo.profile.picture},sessionStorage.setItem("access-token",n),sessionStorage.setItem("user",JSON.stringify(s)),t({type:j.LOGIN_SUCCESS,payload:n}),t({type:j.LOAD_PROFILE,payload:s}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0.message),t({type:j.LOGIN_FAIL,payload:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e,t,A){return function(c){c({type:j.USER_REQUEST}),L.createUserWithEmailAndPassword(e,t).then((function(e){var t=e.user;t.updateProfile({displayName:A}),sessionStorage.setItem("user",JSON.stringify(t)),c(function(e){return{type:j.REGISTER_SUCCESS,payload:e}}(t))})).catch((function(e){return c(function(e){return{type:j.REGISTER_FAIL,payload:e}}(e.message))}))}},R=function(e,t){return function(A){console.log("disptach"),A({type:j.USER_REQUEST}),L.signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;sessionStorage.setItem("user",JSON.stringify(t)),A(function(e){return{type:j.LOGIN_BY_EMAIL_SUCCESS,payload:e}}(t))})).catch((function(e){return A(function(e){return{type:j.LOGIN_BY_EMAIL_FAIL,payload:e}}(e.message))}))}},w=(A(67),A(3));function D(e){var t=e.popup,A=e.setpopup,n=e.setblur,s=Object(r.c)((function(e){return e.allMember.member})),a=Object(r.b)(),i=Object(c.useRef)(null),l=Object(c.useRef)(null),o=Object(c.useRef)(null),u=Object(c.useRef)(null),d=function(){A("formModal display"),n("table")};return Object(w.jsxs)("div",{className:t,children:[Object(w.jsx)("button",{className:"button-closed",onClick:d,children:"x"}),Object(w.jsx)("h3",{children:"Add members"}),Object(w.jsxs)("form",{children:[Object(w.jsx)("label",{children:"Name"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{className:"modal-input",type:"text",ref:i}),Object(w.jsx)("br",{}),Object(w.jsx)("label",{children:"Company"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{className:"modal-input",type:"text",ref:l}),Object(w.jsx)("br",{}),Object(w.jsx)("label",{children:"Status"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{className:"modal-input",type:"text",ref:o}),Object(w.jsx)("br",{}),Object(w.jsx)("label",{children:"Notes"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{className:"modal-input",type:"text",ref:u})]}),Object(w.jsxs)("div",{className:"button-div",children:[Object(w.jsx)("button",{className:"modal-button",onClick:function(){d()},children:"Cancel"}),Object(w.jsx)("button",{className:"modal-button",onClick:function(){console.log("handleSubmit",i.current.value,l.current.value,o.current.value,u.current.value);var e,t=i.current.value,A=l.current.value,c=o.current.value,n=u.current.value,r=new Date;""!==t&&""!==A&&""!==c&&""!==n&&(a((e={id:s.length,name:t,company:A,status:c,notes:n,lastUpdate:r.getDate()+"/"+r.getMonth()+"/"+r.getFullYear()},{type:j.ADD_MEMBER,payload:e})),d())},children:"Save"})]})]})}function P(){var e=Object(r.c)((function(e){return e.allMember.member})),t=Object(c.useState)("dropdown-check-list"),A=Object(x.a)(t,2),n=A[0],s=A[1],a=Object(c.useState)("icon iconSize"),i=Object(x.a)(a,2),l=i[0],o=i[1],u=Object(c.useState)(0),d=Object(x.a)(u,2),b=d[0],p=d[1],O=Object(c.useState)("formModal display"),m=Object(x.a)(O,2),f=m[0],h=m[1],v=Object(c.useState)("table"),S=Object(x.a)(v,2),E=S[0],N=S[1],y=Object(c.useState)(new Array(e.length).fill(!1)),L=Object(x.a)(y,2),C=L[0],I=L[1],R=Object(c.useState)(!1),P=Object(x.a)(R,2),U=P[0],k=P[1],B=Object(r.b)(),_=function(e){var t=e.target.id;B({type:j.DELETE_MEMBER,payload:t})},M=function(e){var t=C.map((function(t,A){return A===Number(e.target.id)?!t:t}));I(t)},Q=function(e){e.target.checked?p(b+1):p(b-1)};return console.log(b),Object(c.useEffect)((function(){C.every((function(e){return!0===e}))?k(!0):k(!1)}),[C]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:E,children:[Object(w.jsxs)("div",{className:"teamMember",children:[Object(w.jsx)("h2",{children:"Team Members"}),Object(w.jsxs)("button",{onClick:function(){h("formModal"),N("table blur")},className:"addBuuton",children:["Add Members ",Object(w.jsx)("span",{style:{fontSize:"24px"},children:"+"})]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"check-boxes",children:[Object(w.jsxs)("div",{id:"list1",className:n,children:[Object(w.jsxs)("span",{onClick:function(){console.log("select"),s("dropdown-check-list"===n?"dropdown-check-list visible":"dropdown-check-list"),o("icon iconSize"===l?"icon iconSize iconRotate":"icon iconSize")},className:"anchor",children:[Object(w.jsxs)("span",{style:{paddingRight:"10px"},children:["Company(",b,")"]}),Object(w.jsx)("img",{className:l,src:g,alt:"img"})," "]}),Object(w.jsxs)("ul",{className:"items",children:[Object(w.jsxs)("li",{children:[Object(w.jsx)("input",{checked:U,onChange:function(){console.log("changed"),k(!U),p(e.length);var t=C.map((function(e){return!0}));I(t)},type:"checkbox"}),"Select All"]}),null===e||void 0===e?void 0:e.map((function(e,t){return Object(w.jsxs)("li",{children:[Object(w.jsx)("input",{onClick:Q,onChange:M,type:"checkbox",id:t,checked:C[t]}),e.company]},t)}))]})]}),Object(w.jsxs)("div",{id:"list2",className:"dropdown-check-list",children:[Object(w.jsxs)("span",{className:"anchor",children:[Object(w.jsx)("span",{style:{paddingRight:"10px"},children:"Status"}),Object(w.jsx)("img",{className:"iconSize",alt:"img",src:g})]}),Object(w.jsxs)("ul",{className:"items",children:[Object(w.jsxs)("li",{children:[Object(w.jsx)("input",{type:"checkbox"}),"Active"]}),Object(w.jsxs)("li",{children:[Object(w.jsx)("input",{type:"checkbox"}),"Close"]})]})]})]}),Object(w.jsx)("table",{children:Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{}),Object(w.jsx)("th",{children:"Name"}),Object(w.jsx)("th",{children:"Company"}),Object(w.jsx)("th",{children:"Status"}),Object(w.jsx)("th",{children:"Last Updated"}),Object(w.jsx)("th",{children:"Notes"})]}),null===e||void 0===e?void 0:e.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:Object(w.jsx)("input",{type:"checkbox",id:"vehicle1"})}),Object(w.jsx)("td",{children:e.name}),Object(w.jsx)("td",{children:e.company}),Object(w.jsx)("td",{children:e.status}),Object(w.jsx)("td",{children:e.lastUpdate}),Object(w.jsx)("td",{children:e.notes}),Object(w.jsx)("td",{children:Object(w.jsx)("span",{children:Object(w.jsx)("img",{id:e.id,onClick:_,className:"delete_icon",alt:"img",src:"https://img.icons8.com/material/48/000000/filled-trash.png"})})})]},t)}))]})})]}),Object(w.jsx)(D,{popup:f,setpopup:h,setblur:N})]})}A(69);function U(){var e=Object(r.b)(),t=Object(h.f)(),A=Object(c.useState)(""),n=Object(x.a)(A,2),s=n[0],a=n[1],i=Object(c.useRef)(),l=Object(c.useRef)(),o=Object(r.c)((function(e){return e.authReducer})),j=o.accessToken,u=o.user,d=o.error;function b(){return(b=Object(E.a)(S.a.mark((function t(A){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A.preventDefault(),a(""),i.current.value&&l.current.value){t.next=5;break}return a("Fill All Input"),t.abrupt("return");case 5:e(R(i.current.value,l.current.value));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){j&&t("/deltaExchangeAssignment"),u&&(console.log("user form if",u),t("/deltaExchangeAssignment"))}),[j,t,u]),Object(w.jsx)("div",{className:"login-container",children:Object(w.jsxs)("div",{className:"form-login",children:[Object(w.jsx)("div",{className:"login-header",children:Object(w.jsx)("h4",{className:"user-icon",children:Object(w.jsx)("i",{className:"fa fa-user-circle",style:{fontSize:"110px"}})})}),s&&Object(w.jsx)("div",{className:"login-error",children:s}),d&&Object(w.jsx)("div",{className:"login-error",children:d}),Object(w.jsxs)("div",{className:"body-form",children:[Object(w.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(w.jsxs)("div",{className:"login-input-div",children:[Object(w.jsx)("i",{className:"fa fa-user"}),Object(w.jsx)("input",{type:"text",className:"login-input",ref:i,placeholder:"Email"})]}),Object(w.jsxs)("div",{className:"login-input-div",children:[Object(w.jsx)("i",{className:"fa fa-lock"}),Object(w.jsx)("input",{type:"password",className:"login-input",ref:l,placeholder:"Password"})]}),Object(w.jsx)("button",{type:"submit",className:"btn-login",children:"LOGIN"}),Object(w.jsxs)("div",{className:"login-new-user-signup",children:[Object(w.jsx)("span",{children:"new user"})," ",Object(w.jsx)(f.b,{className:"login-signup",style:{paddingLeft:"10px"},to:"/deltaExchangeAssignment/signup",children:"SignUp"})]})]}),Object(w.jsx)("h5",{style:{textAlign:"center",fontSize:"24px",paddingTop:"10px"},children:"Or sign in with:"}),Object(w.jsx)("div",{className:"login-social",children:Object(w.jsx)("i",{onClick:function(){e(C())},className:"fab fa-google"})})]})]})})}A(70);function k(e){e.setpath;var t=Object(c.useState)(""),A=Object(x.a)(t,2),n=A[0],s=A[1],a=Object(r.b)(),i=Object(h.f)(),l=Object(c.useRef)(),o=Object(c.useRef)(),j=Object(c.useRef)(),u=Object(c.useRef)(),d=Object(r.c)((function(e){return e.authReducer})),b=d.accessToken,p=d.user,O=d.error;function m(){return(m=Object(E.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s(""),o.current.value===j.current.value){e.next=5;break}return s("password do not matched"),e.abrupt("return");case 5:""!==l.current.value&&""!==u.current.value&&""!==o.current.value&&""!==j.current.value||s("Fill All Input"),a(I(l.current.value,o.current.value,u.current.value));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){b&&i("/deltaExchangeAssignment"),p&&(console.log("user form if",p),i("/deltaExchangeAssignment"))}),[b,i,p]),Object(w.jsx)("div",{className:"signup-container",children:Object(w.jsxs)("div",{className:"form-signup",children:[Object(w.jsx)("div",{className:"header",children:Object(w.jsx)("h4",{className:"user-icon",children:Object(w.jsx)("i",{className:"fa fa-user-circle",style:{fontSize:"110px"}})})}),n&&Object(w.jsx)("span",{className:"signup-error",children:n}),O&&Object(w.jsx)("span",{className:"signup-error",children:O}),Object(w.jsxs)("div",{className:"body-form",children:[Object(w.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(w.jsxs)("div",{className:"input-div",children:[Object(w.jsx)("i",{class:"fa fa-user"}),Object(w.jsx)("input",{type:"text",className:"input",ref:u,placeholder:"Name"})]}),Object(w.jsxs)("div",{className:"input-div",children:[Object(w.jsx)("i",{class:"fa fa-solid fa-envelope"}),Object(w.jsx)("input",{type:"text",className:"input",ref:l,placeholder:"Email"})]}),Object(w.jsxs)("div",{className:"input-div",children:[Object(w.jsx)("i",{class:"fa fa-lock"}),Object(w.jsx)("input",{type:"Password",className:"input",ref:o,placeholder:"Password"})]}),Object(w.jsxs)("div",{className:"input-div",children:[Object(w.jsx)("i",{className:"fa fa-lock"}),Object(w.jsx)("input",{type:"Password",className:"input",ref:j,placeholder:"Confirm Password"})]}),Object(w.jsx)("button",{type:"submit",className:"btn-signup",children:"SignUp"}),Object(w.jsxs)("div",{className:"new-user-signup",children:[Object(w.jsx)("span",{children:"Already have account"})," ",Object(w.jsx)(f.b,{className:"signup",style:{paddingLeft:"10px"},to:"/deltaExchangeAssignment/login",children:"Login"})]})]}),Object(w.jsx)("h5",{style:{textAlign:"center",fontSize:"24px",paddingTop:"10px"},children:"Or sign in with:"}),Object(w.jsx)("div",{className:"social",children:Object(w.jsx)("i",{onClick:function(){a(C())},className:"fab fa-google"})})]})]})})}function B(){var e=Object(r.c)((function(e){return e.authReducer})),t=e.accessToken,A=e.user,n=Object(h.f)();return Object(c.useEffect)((function(){n(A?"/deltaExchangeAssignment":"/deltaExchangeAssignment/login"),n(t?"/deltaExchangeAssignment":"/deltaExchangeAssignment/login")}),[A,t,n]),Object(w.jsx)("div",{children:Object(w.jsxs)(h.c,{children:[Object(w.jsx)(h.a,{path:"/deltaExchangeAssignment",element:Object(w.jsx)(P,{})}),Object(w.jsx)(h.a,{path:"/deltaExchangeAssignment/login",element:Object(w.jsx)(U,{})}),Object(w.jsx)(h.a,{path:"/deltaExchangeAssignment/signup",element:Object(w.jsx)(k,{})})]})})}a.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(r.a,{store:m,children:Object(w.jsx)(f.a,{children:Object(w.jsx)(B,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.6ddc26c2.chunk.js.map