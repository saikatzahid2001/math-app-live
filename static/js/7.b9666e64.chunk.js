(this["webpackJsonpmath-app"]=this["webpackJsonpmath-app"]||[]).push([[7],{117:function(t,e,r){t.exports={container:"Profile_container__OHYvv",profile_image:"Profile_profile_image__-GozH",image:"Profile_image__qdjAi",name:"Profile_name___JKHv",navigations:"Profile_navigations__2g4J-",profile_details:"Profile_profile_details__3Is9t",update_profile:"Profile_update_profile__3e4Dq",update_password:"Profile_update_password__20BLk",delete_user:"Profile_delete_user__UWiZj"}},125:function(t,e,r){"use strict";r.r(e);var n=r(45),a=r(1),o=r(48),c=r.n(o),i=r(24),s=r.n(i),u=r(43),l=r(69),f=r(46),h=r(49),d=r(51),p=r(53),m=r(117),b=r.n(m),j=r(72),v=r(60),y=r(16),g=r(5);e.default=function(t){var e=t.history,r=Object(a.useState)(!1),o=Object(n.a)(r,2),i=o[0],m=o[1],O=Object(a.useState)(!1),x=Object(n.a)(O,2),w=x[0],_=x[1],S=Object(a.useState)(!1),P=Object(n.a)(S,2),E=P[0],k=P[1],F=Object(a.useState)(!1),L=Object(n.a)(F,2),N=L[0],I=L[1],B=Object(a.useState)(!1),G=Object(n.a)(B,2),J=G[0],T=G[1],C=Object(a.useState)(""),D=Object(n.a)(C,2),U=D[0],Y=D[1],A=Object(a.useState)(""),H=Object(n.a)(A,2),R=H[0],q=H[1],z=Object(a.useState)(""),V=Object(n.a)(z,2),W=V[0],Z=V[1],K=Object(a.useState)(""),M=Object(n.a)(K,2),Q=M[0],X=M[1],$=Object(a.useState)(""),tt=Object(n.a)($,2),et=tt[0],rt=tt[1],nt=Object(a.useState)(""),at=Object(n.a)(nt,2),ot=at[0],ct=at[1],it=Object(a.useState)(""),st=Object(n.a)(it,2),ut=st[0],lt=st[1],ft=Object(a.useState)(""),ht=Object(n.a)(ft,2),dt=ht[0],pt=ht[1],mt=Object(a.useState)(""),bt=Object(n.a)(mt,2),jt=bt[0],vt=bt[1],yt=Object(a.useState)(""),gt=Object(n.a)(yt,2),Ot=gt[0],xt=gt[1],wt=function(){if(localStorage&&localStorage.getItem("user")){var t=JSON.parse(localStorage.getItem("user"));Z(t.name),ct(t.image),X(t.email)}};Object(a.useEffect)((function(){Object(v.a)(e)().then((function(t){t||e.push("".concat("/math-app-live","/"))})),wt()}),[e]);return Object(g.jsxs)("div",{className:b.a.container,children:[Object(g.jsxs)("div",{className:b.a.profile_image,children:[Object(g.jsx)("div",{className:b.a.image,children:Object(g.jsx)("img",{src:ot,alt:"Profile"})}),Object(g.jsx)("div",{className:b.a.name,children:Object(g.jsx)("h1",{children:W})}),Object(g.jsxs)("div",{className:b.a.navigations,children:[Object(g.jsx)(y.b,{to:"".concat("/math-app-live","/app"),children:"Go to app"}),Object(g.jsx)("a",{href:"void:javascript",onClick:function(t){t.preventDefault(),Object(l.a)(e)},children:"Logout"})]})]}),Object(g.jsxs)("div",{className:b.a.profile_details,children:[Object(g.jsxs)("div",{className:b.a.update_profile,children:[Object(g.jsx)(h.a,{title:"Update Profile"}),i?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{i:{id:"token",type:"text",placeholder:"Paste your token here",label:"Paste token",setFn:lt}}),N?Object(g.jsx)(f.a,{}):Object(g.jsx)(p.a,{text:"Verify Email",clickFn:function(){I(!0),c.a.get("".concat(u.a,"/verify-email/").concat(ut),Object(u.b)()).then((function(t){I(!1),localStorage.setItem("user",JSON.stringify(t.data.data.user)),wt(),s()("Verification success!","Your email has been updated successfully!","success",{button:"Okay"}).then((function(){m(!1),document.getElementById("name").value=""}))})).catch((function(t){I(!1),s()("Error!","".concat(t.response.data.message),"error",{button:"Okay"})}))}})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{i:{id:"name",type:"text",placeholder:"".concat(W),label:"Enter your new name",setFn:Y}}),Object(g.jsx)(d.a,{i:{id:"email",type:"email",placeholder:"".concat(Q),label:"Enter your new email",setFn:q}}),Object(g.jsx)(j.a,{i:{id:"image",setFn:function(t){rt(t);var e=new FileReader;e.onload=function(){2===e.readyState&&ct(e.result)},e.readAsDataURL(t)}}}),w?Object(g.jsx)(f.a,{}):Object(g.jsx)(p.a,{text:"Update Profile",clickFn:function(){_(!0);var t=new FormData;U.length>0&&t.append("name",U),R.length>0&&t.append("email",R),et.type&&t.append("image",et),c.a.patch("".concat(u.a,"/update-user"),t,Object(u.b)()).then((function(t){_(!1),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("image").value="",wt(),t.data.verify?s()("Success!",t.data.message,"success",{button:"Okay"}).then((function(){m(!0)})):(localStorage.setItem("user",JSON.stringify(t.data.data.user)),s()("Success!","Profile updated successfully!","success",{button:"Okay"}))})).catch((function(t){_(!1),s()("Error!","".concat(t.response.data.message),"error",{button:"Okay"})}))}})]})]}),Object(g.jsxs)("div",{className:b.a.update_password,children:[Object(g.jsx)(h.a,{title:"Update Password"}),Object(g.jsx)(d.a,{i:{id:"currentPassword",type:"password",placeholder:"********",label:"Current Password",setFn:vt}}),Object(g.jsx)(d.a,{i:{id:"newPassword",type:"password",placeholder:"********",label:"New Password",setFn:pt}}),Object(g.jsx)(d.a,{i:{id:"confirmPassword",type:"password",placeholder:"********",label:"Confirm Password",setFn:xt}}),E?Object(g.jsx)(f.a,{}):Object(g.jsx)(p.a,{text:"Update Password",clickFn:function(){k(!0);var t={password:dt,confirmPassword:Ot,currentPassword:jt};c.a.patch("".concat(u.a,"/update-password"),t,Object(u.b)()).then((function(t){k(!1),localStorage.setItem("authToken",JSON.stringify(t.data.token)),document.getElementById("currentPassword").value="",document.getElementById("newPassword").value="",document.getElementById("confirmPassword").value="",wt(),s()("Success!","Password updated successfully!","success",{button:"Okay"})})).catch((function(t){k(!1),s()("Error!","".concat(t.response.data.message),"error",{button:"Okay"})}))}})]}),Object(g.jsxs)("div",{className:b.a.delete_user,children:[Object(g.jsx)(h.a,{title:"Danger Zone"}),J?Object(g.jsx)(f.a,{}):Object(g.jsx)(p.a,{text:"Delete account",clickFn:function(){T(!0),c.a.delete("".concat(u.a,"/delete-user"),Object(u.b)()).then((function(t){T(!1),localStorage.clear(),s()("Good bye!","Your account has been deleted successfully!","info",{button:"Bye"}).then((function(){e.push("".concat("/math-app-live","/"))}))})).catch((function(t){T(!1),s()("Error!","".concat(t.response.data.message),"error",{button:"Okay"})}))}})]})]})]})}},43:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n="https://morning-dusk-90435.herokuapp.com/api/v1/users",a=function(){return{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authToken")))}}}},46:function(t,e,r){"use strict";r(1);var n=r(47),a=r.n(n),o=r(59),c=r.n(o),i=r(5);e.a=function(){return Object(i.jsx)("div",{className:a.a.loader,children:Object(i.jsx)(c.a,{color:"#858585",size:10,margin:3})})}},47:function(t,e,r){t.exports={loader:"FormLoader_loader__1oWto"}},49:function(t,e,r){"use strict";r(1);var n=r(50),a=r.n(n),o=r(5);e.a=function(t){return Object(o.jsx)("div",{className:a.a.container,children:Object(o.jsx)("h1",{children:t.title})})}},50:function(t,e,r){t.exports={container:"FormHeader_container__3-BJb"}},51:function(t,e,r){"use strict";r(1);var n=r(52),a=r.n(n),o=r(5);e.a=function(t){var e=t.i;return Object(o.jsxs)("div",{className:a.a.container,children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.label}),Object(o.jsx)("input",{type:e.type,placeholder:e.placeholder,required:e.required,id:e.id,onChange:function(t){return e.setFn(t.target.value)}})]})}},52:function(t,e,r){t.exports={container:"FormInput_container__RVPHx"}},53:function(t,e,r){"use strict";r(1);var n=r(54),a=r.n(n),o=r(5);e.a=function(t){return Object(o.jsx)("div",{className:a.a.container,children:Object(o.jsx)("button",{className:a.a.submit,onClick:t.clickFn,children:t.text})})}},54:function(t,e,r){t.exports={container:"FormSubmit_container__3l7xP",submit:"FormSubmit_submit__24D7N"}},55:function(t,e,r){t.exports=r(61)},56:function(t,e,r){"use strict";function n(t,e,r,n,a,o,c){try{var i=t[o](c),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,s,"next",t)}function s(t){n(c,a,o,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},60:function(t,e,r){"use strict";var n=r(55),a=r.n(n),o=r(56),c=r(48),i=r.n(c),s=r(24),u=r.n(s),l=r(43);e.a=function(t){return Object(o.a)(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("authToken")||t.push("".concat("/math-app-live","/")),e.prev=1,e.next=4,i.a.get("".concat(l.a,"/auth"),Object(l.b)());case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),u()("Error!","You are not logged in! Please log in!","error",{button:"Login"}).then((function(){t.push("".concat("/math-app-live","/login"))})),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))}},61:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),c=new k(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=S(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,c),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function b(){}function j(){}function v(){}var y={};y[o]=function(){return this};var g=Object.getPrototypeOf,O=g&&g(g(F([])));O&&O!==r&&n.call(O,o)&&(y=O);var x=v.prototype=b.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,o,c,i){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return j.prototype=x.constructor=v,v.constructor=j,j.displayName=s(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(_.prototype),_.prototype[c]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new _(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(x),s(x,i,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},69:function(t,e,r){"use strict";var n=r(24),a=r.n(n);e.a=function(t){localStorage.clear(),a()("See you!","You are now logged out","info",{button:"Bye"}).then((function(){t.push("".concat("/math-app-live","/"))}))}},72:function(t,e,r){"use strict";r(1);var n=r(73),a=r.n(n),o=r(5);e.a=function(t){var e=t.i;return Object(o.jsxs)("div",{className:a.a.upload_image,children:[Object(o.jsx)("label",{htmlFor:e.id,children:"Choose File"}),Object(o.jsx)("input",{type:"file",id:e.id,onChange:function(t){e.setFn(t.target.files[0])}})]})}},73:function(t,e,r){t.exports={upload_image:"FormUpload_upload_image__17byS"}}}]);
//# sourceMappingURL=7.b9666e64.chunk.js.map