(this["webpackJsonpmath-app"]=this["webpackJsonpmath-app"]||[]).push([[8],{114:function(t,e,n){t.exports={container:"Login_container__3Bmay",inputs_container:"Login_inputs_container__18vMA",forget_password:"Login_forget_password__3bvwq"}},122:function(t,e,n){"use strict";n.r(e);var a=n(45),r=n(1),c=n(48),i=n.n(c),o=n(24),s=n.n(o),u=n(43),l=n(57),d=n(49),p=n(51),j=n(53),b=n(70),h=n(114),m=n.n(h),_=n(46),f=n(16),x=n(5);e.default=function(t){var e=t.history,n=Object(r.useState)(""),c=Object(a.a)(n,2),o=c[0],h=c[1],O=Object(r.useState)(""),v=Object(a.a)(O,2),g=v[0],F=v[1],N=Object(r.useState)(!1),k=Object(a.a)(N,2),w=k[0],S=k[1];return Object(x.jsx)("div",{className:m.a.container,children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(d.a,{title:"Login"}),Object(x.jsxs)("div",{className:m.a.inputs_container,children:[Object(x.jsx)(p.a,{i:{id:"email",type:"email",placeholder:"Enter your email",label:"Your e-mail",setFn:h}}),Object(x.jsx)(p.a,{i:{id:"password",type:"password",placeholder:"********",label:"Password",setFn:F}}),w?Object(x.jsx)(_.a,{}):Object(x.jsx)(j.a,{text:"Login",clickFn:function(){S(!0),console.log(g),i.a.post("".concat(u.a,"/login"),{email:o,password:g}).then((function(t){S(!1),localStorage.setItem("authToken",JSON.stringify(t.data.token)),localStorage.setItem("user",JSON.stringify(t.data.data.user)),s()("Login success!","You will now redirect to the App page!","success",{button:"Okay"}).then((function(){e.push("".concat("/math-app-live","/app"))}))})).catch((function(t){S(!1),s()("Error!","".concat(t.response.data.message),"error",{button:"Okay"})}))}})]}),Object(x.jsx)(b.a,{d:{title:"Don't have an account?",btn:"Signup",btn_link:"/signup"}}),Object(x.jsx)("div",{className:m.a.forget_password,children:Object(x.jsxs)("p",{children:["Forgot password ?"," ",Object(x.jsx)(f.b,{to:"".concat("/math-app-live","/forget-password"),children:"Click here to reset password"})]})})]})})}},43:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a="https://morning-dusk-90435.herokuapp.com/api/v1/users",r=function(){return{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authToken")))}}}},46:function(t,e,n){"use strict";n(1);var a=n(47),r=n.n(a),c=n(59),i=n.n(c),o=n(5);e.a=function(){return Object(o.jsx)("div",{className:r.a.loader,children:Object(o.jsx)(i.a,{color:"#858585",size:10,margin:3})})}},47:function(t,e,n){t.exports={loader:"FormLoader_loader__1oWto"}},49:function(t,e,n){"use strict";n(1);var a=n(50),r=n.n(a),c=n(5);e.a=function(t){return Object(c.jsx)("div",{className:r.a.container,children:Object(c.jsx)("h1",{children:t.title})})}},50:function(t,e,n){t.exports={container:"FormHeader_container__3-BJb"}},51:function(t,e,n){"use strict";n(1);var a=n(52),r=n.n(a),c=n(5);e.a=function(t){var e=t.i;return Object(c.jsxs)("div",{className:r.a.container,children:[Object(c.jsx)("label",{htmlFor:e.id,children:e.label}),Object(c.jsx)("input",{type:e.type,placeholder:e.placeholder,required:e.required,id:e.id,onChange:function(t){return e.setFn(t.target.value)}})]})}},52:function(t,e,n){t.exports={container:"FormInput_container__RVPHx"}},53:function(t,e,n){"use strict";n(1);var a=n(54),r=n.n(a),c=n(5);e.a=function(t){return Object(c.jsx)("div",{className:r.a.container,children:Object(c.jsx)("button",{className:r.a.submit,onClick:t.clickFn,children:t.text})})}},54:function(t,e,n){t.exports={container:"FormSubmit_container__3l7xP",submit:"FormSubmit_submit__24D7N"}},57:function(t,e,n){"use strict";n(1);var a=n(58),r=n.n(a),c=n(5);e.a=function(t){return Object(c.jsx)("div",{className:r.a.container,children:Object(c.jsx)("div",{className:r.a.inner,children:t.children})})}},58:function(t,e,n){t.exports={container:"FormBase_container__1z7WF",inner:"FormBase_inner__1f5ZF"}},70:function(t,e,n){"use strict";n(1);var a=n(71),r=n.n(a),c=n(16),i=n(5);e.a=function(t){var e=t.d;return Object(i.jsxs)("div",{className:r.a.container,children:[Object(i.jsx)("p",{children:e.title}),Object(i.jsx)(c.b,{to:"".concat("/math-app-live","/").concat(e.btn_link),children:e.btn})]})}},71:function(t,e,n){t.exports={container:"FormFooter_container__2bQNZ"}}}]);
//# sourceMappingURL=8.ef752a55.chunk.js.map