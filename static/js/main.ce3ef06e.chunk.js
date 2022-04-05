(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(19),o=n(30),s=n(79),l=n(95),u="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",b="LIKE",h="AUTH",m="LOGOUT",f=n(13),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return localStorage.setItem("profile",JSON.stringify(Object(f.a)({},null===t||void 0===t?void 0:t.data))),Object(f.a)(Object(f.a)({},e),{},{authData:t.data,loading:!1,errors:null});case m:return localStorage.clear(),Object(f.a)(Object(f.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},x=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:g}),O=n(181),v=n(42),y=n(14),w=n(27),C=n(171),k=n(138),N=n(173),S=n(186),I=n(174),E=n.p+"static/media/memories.9cfa8a46.png",P=n(167),T=n(170),A=Object(P.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(T.a[500]),backgroundColor:T.a[500]}}})),D=n(84),F=n(2),M=function(){var e=A(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(w.a)(t,2),r=n[0],c=n[1],o=Object(i.b)(),s=Object(y.f)(),l=Object(y.g)(),u=function(){o({type:"LOGOUT"}),s.push("/MERN-Project"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(D.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(F.jsxs)(C.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(F.jsxs)("div",{className:e.brandContainer,children:[Object(F.jsx)(k.a,{component:v.b,to:"/MERN-Project",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(F.jsx)("img",{className:e.image,src:E,alt:"icon",height:"60"})]}),Object(F.jsx)(N.a,{className:e.toolbar,children:r?Object(F.jsxs)("div",{className:e.profile,children:[Object(F.jsx)(S.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(F.jsx)(k.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(F.jsx)(I.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(F.jsx)(I.a,{component:v.b,to:"/MERN-Project/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},L=n(185),_=n(180),R=n(12),z=n.n(R),B=n(21),U=n(85),W=n.n(U).a.create({baseURL:"https://memories-project-mern-test.herokuapp.com",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});W.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var J=function(e){return W.patch("/posts/".concat(e,"/likePost"))},H=function(e,t){return W.patch("/posts/".concat(e),t)},G=function(e){return W.delete("/posts/".concat(e))},q=function(e){return W.post("/user/signin",e)},V=function(e){return W.post("/user/signup",e)},K=function(e){return function(){var t=Object(B.a)(z.a.mark((function t(n){var a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,W.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Y=function(e,t){return function(){var n=Object(B.a)(z.a.mark((function n(a){var r,c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H(e,t);case 3:r=n.sent,c=r.data,a({type:d,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},Z=n(179),Q=n(175),X=n(176),$=n(177),ee=n(178),te=n(87),ne=n.n(te),ae=n(65),re=n.n(ae),ce=n(89),ie=n.n(ce),oe=n(88),se=n.n(oe),le=n(86),ue=n.n(le),de=Object(P.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),je=function(e){var t,n,a,r,c=e.post,o=e.setCurrentId,s=Object(i.b)(),l=de(),u=JSON.parse(localStorage.getItem("profile")),d=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ne.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(re.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(re.a,{fontSize:"small"}),"\xa0Like"]})};return Object(F.jsxs)(Q.a,{className:l.card,children:[Object(F.jsx)(X.a,{className:l.media,image:c.selectedFile,title:c.title}),Object(F.jsxs)("div",{className:l.overlay,children:[Object(F.jsx)(k.a,{variant:"h6",children:c.name}),Object(F.jsx)(k.a,{variant:"body2",children:ue()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(F.jsx)("div",{className:l.overlay2,children:Object(F.jsx)(I.a,{style:{color:"white"},size:"small",onClick:function(){o(c._id)},children:Object(F.jsx)(se.a,{fontSize:"default"})})}),Object(F.jsx)("div",{className:l.details,children:Object(F.jsx)(k.a,{variant:"body2",color:"textSecondary",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(F.jsx)(k.a,{className:l.title,variant:"h5",gutterBottom:!0,children:c.title}),Object(F.jsx)($.a,{children:Object(F.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(F.jsxs)(ee.a,{className:l.cardActions,children:[Object(F.jsx)(I.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){var e;s((e=c._id,function(){var t=Object(B.a)(z.a.mark((function t(n){var a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:a=t.sent,r=a.data,n({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:Object(F.jsx)(d,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(F.jsxs)(I.a,{size:"small",color:"primary",onClick:function(){var e;s((e=c._id,function(){var t=Object(B.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(e);case 3:n({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(F.jsx)(ie.a,{fontSize:"small"}),"Delete"]})]})]})},pe=Object(P.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),be=function(e){e.currentId;var t=e.setCurrentId,n=Object(i.c)((function(e){return e.posts})),a=pe();return console.log(n),n.length?Object(F.jsx)(_.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(F.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(je,{post:e,setCurrentId:t})},e._id)}))}):Object(F.jsx)(Z.a,{})},he=n(97),me=n(184),fe=n(90),ge=n.n(fe),xe=Object(P.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Oe=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),o=Object(w.a)(c,2),s=o[0],l=o[1],u=Object(i.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),d=Object(i.b)(),j=xe(),p=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){u&&l(u)}),[u]);var b=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(B.a)(z.a.mark((function e(t){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(d(K(Object(f.a)(Object(f.a)({},s),{},{name:null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.name}))),b()):(d(Y(n,Object(f.a)(Object(f.a)({},s),{},{name:null===p||void 0===p||null===(r=p.result)||void 0===r?void 0:r.name}))),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name)?Object(F.jsx)(he.a,{className:j.paper,children:Object(F.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:h,children:[Object(F.jsx)(k.a,{variant:"h6",children:n?'Editing "'.concat(u.title,'"'):"Creating a Memory"}),Object(F.jsx)(me.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return l(Object(f.a)(Object(f.a)({},s),{},{title:e.target.value}))}}),Object(F.jsx)(me.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return l(Object(f.a)(Object(f.a)({},s),{},{message:e.target.value}))}}),Object(F.jsx)(me.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return l(Object(f.a)(Object(f.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(F.jsx)("div",{className:j.fileInput,children:Object(F.jsx)(ge.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(f.a)(Object(f.a)({},s),{},{selectedFile:t}))}})}),Object(F.jsx)(I.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(F.jsx)(I.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(F.jsx)(he.a,{className:j.paper,children:Object(F.jsx)(k.a,{variant:"h6",align:"center",children:"Please Sign in to create your own memories and like others memories."})})},ve=function(){var e=Object(a.useState)(0),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(B.a)(z.a.mark((function e(t){var n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("/posts");case 3:n=e.sent,a=n.data,t({type:p,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(F.jsx)(L.a,{in:!0,children:Object(F.jsx)(O.a,{children:Object(F.jsxs)(_.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(F.jsx)(_.a,{item:!0,xs:12,sm:7,children:Object(F.jsx)(be,{setCurrentId:r})}),Object(F.jsx)(_.a,{item:!0,xs:12,sm:4,children:Object(F.jsx)(Oe,{currentId:n,setCurrentId:r})})]})})})},ye=n(57),we=n(94),Ce=n.n(we),ke=n(91),Ne=function(){return Object(F.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(F.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Se=Object(P.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ie=n(182),Ee=n(183),Pe=n(92),Te=n.n(Pe),Ae=n(93),De=n.n(Ae),Fe=function(e){var t=e.name,n=e.label,a=e.half,r=e.handleChange,c=e.handleShowPassword,i=e.type,o=e.autoFocus;return Object(F.jsx)(_.a,{item:!0,xs:12,sm:a?6:12,children:Object(F.jsx)(me.a,{name:t,label:n,onChange:r,variant:"outlined",required:!0,fullWidth:!0,autoFocus:o,type:i,InputProps:"password"===t&&{endAdornment:Object(F.jsx)(Ie.a,{position:"end",children:Object(F.jsx)(Ee.a,{onClick:c,children:"password"===i?Object(F.jsx)(Te.a,{}):Object(F.jsx)(De.a,{})})})}})})},Me={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Le=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(w.a)(c,2),s=o[0],l=o[1],u=Object(a.useState)(Me),d=Object(w.a)(u,2),j=d[0],p=d[1],b=Se(),m=Object(i.b)(),g=Object(y.f)(),x=function(e){p(Object(f.a)(Object(f.a)({},j),{},Object(ye.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(B.a)(z.a.mark((function e(t){var n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{m({type:"AUTH",data:{result:n,token:a}}),g.push("/MERN-Project")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsx)(O.a,{component:"main",maxWidth:"xs",children:Object(F.jsxs)(he.a,{className:b.paper,elevation:3,children:[Object(F.jsx)(S.a,{className:b.avatar,children:Object(F.jsx)(Ce.a,{})}),Object(F.jsx)(k.a,{variant:"h5",children:s?"Sign Up":"Sign In"}),Object(F.jsxs)("form",{className:b.form,onSubmit:function(e){e.preventDefault(),m(s?function(e,t){return function(){var n=Object(B.a)(z.a.mark((function n(a){var r,c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V(e);case 3:r=n.sent,c=r.data,a({type:h,data:c}),t.push("/MERN-Project"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(j,g):function(e,t){return function(){var n=Object(B.a)(z.a.mark((function n(a){var r,c;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e);case 3:r=n.sent,c=r.data,a({type:h,data:c}),t.push("/MERN-Project"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(j,g))},children:[Object(F.jsxs)(_.a,{container:!0,spacing:2,children:[s&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Fe,{name:"firstName",label:"First Name",handleChange:x,autoFocus:!0,half:!0}),Object(F.jsx)(Fe,{name:"lastName",label:"Last Name",handleChange:x,half:!0})]}),Object(F.jsx)(Fe,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(F.jsx)(Fe,{name:"password",label:"Password",handleChange:x,type:n?"text":"password",handleShowPassword:function(){r((function(e){return!e}))}}),s&&Object(F.jsx)(Fe,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})]}),Object(F.jsxs)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:b.submit,children:[" ",s?"Sign Up":"Sign In"," "]}),Object(F.jsx)(ke.GoogleLogin,{clientId:"717057806217-e6ihc3vg8tpteqmhbkjt1nrq3ddb784m.apps.googleusercontent.com",render:function(e){return Object(F.jsx)(I.a,{className:b.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(F.jsx)(Ne,{}),variant:"contained",children:"Google Sign In "})},onSuccess:v,onFailure:function(e){console.log(e),console.log("Google Sign in was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(F.jsx)(_.a,{container:!0,justify:"flex-end",children:Object(F.jsx)(_.a,{item:!0,children:Object(F.jsxs)(I.a,{onClick:function(){p(Me),l((function(e){return!e})),r(!1)},children:[" ",s?"Already have an account? Sign In":"Don't have an account? Sign Up"," "]})})})]})]})})},_e=function(){return Object(F.jsx)(v.a,{children:Object(F.jsxs)(O.a,{maxwidth:"lg",children:[Object(F.jsx)(M,{}),Object(F.jsxs)(y.c,{children:[Object(F.jsx)(y.a,{path:"/MERN-Project",exact:!0,component:ve}),Object(F.jsx)(y.a,{path:"/MERN-Project/auth",exact:!0,component:Le})]})]})})},Re=(n(135),Object(o.e)(x,Object(o.d)(Object(o.a)(s.a))));c.a.render(Object(F.jsx)(i.a,{store:Re,children:Object(F.jsx)(_e,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.ce3ef06e.chunk.js.map