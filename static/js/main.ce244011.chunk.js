(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(19),s=n(30),o=n(79),l=n(95),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",m="AUTH",h="LOGOUT",f=n(13),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return localStorage.setItem("profile",JSON.stringify(Object(f.a)({},null===t||void 0===t?void 0:t.data))),Object(f.a)(Object(f.a)({},e),{},{authData:t.data,loading:!1,errors:null});case h:return localStorage.clear(),Object(f.a)(Object(f.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},x=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:g}),O=n(181),v=n(42),y=n(14),w=n(27),C=n(171),k=n(138),S=n(173),N=n(186),I=n(174),T=n.p+"static/media/memories.9cfa8a46.png",D=n(167),F=n(170),L=Object(D.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(F.a[500]),backgroundColor:F.a[500]}}})),A=n(84),E=n(2),_=function(){var e=L(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(w.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(y.f)(),l=Object(y.g)(),u=function(){s({type:"LOGOUT"}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(A.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(E.jsxs)(C.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(E.jsxs)("div",{className:e.brandContainer,children:[Object(E.jsx)(k.a,{component:v.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(E.jsx)("img",{className:e.image,src:T,alt:"icon",height:"60"})]}),Object(E.jsx)(S.a,{className:e.toolbar,children:r?Object(E.jsxs)("div",{className:e.profile,children:[Object(E.jsx)(N.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(E.jsx)(k.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(E.jsx)(I.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(E.jsx)(I.a,{component:v.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},z=n(185),B=n(180),P=n(12),U=n.n(P),W=n(21),J=n(85),M=n.n(J).a.create({baseURL:"https://memories-project-mern-test.herokuapp.com"});M.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var H=function(e){return M.patch("/posts/".concat(e,"/likePost"))},G=function(e,t){return M.patch("/posts/".concat(e),t)},R=function(e){return M.delete("/posts/".concat(e))},q=function(e){return M.post("/user/signin",e)},V=function(e){return M.post("/user/signup",e)},K=function(e){return function(){var t=Object(W.a)(U.a.mark((function t(n){var a,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,M.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Y=function(e,t){return function(){var n=Object(W.a)(U.a.mark((function n(a){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G(e,t);case 3:r=n.sent,c=r.data,a({type:d,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},Z=n(179),Q=n(175),X=n(176),$=n(177),ee=n(178),te=n(87),ne=n.n(te),ae=n(65),re=n.n(ae),ce=n(89),ie=n.n(ce),se=n(88),oe=n.n(se),le=n(86),ue=n.n(le),de=Object(D.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),pe=function(e){var t,n,a,r,c=e.post,s=e.setCurrentId,o=Object(i.b)(),l=de(),u=JSON.parse(localStorage.getItem("profile")),d=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ne.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(re.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(re.a,{fontSize:"small"}),"\xa0Like"]})};return Object(E.jsxs)(Q.a,{className:l.card,children:[Object(E.jsx)(X.a,{className:l.media,image:c.selectedFile,title:c.title}),Object(E.jsxs)("div",{className:l.overlay,children:[Object(E.jsx)(k.a,{variant:"h6",children:c.name}),Object(E.jsx)(k.a,{variant:"body2",children:ue()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(E.jsx)("div",{className:l.overlay2,children:Object(E.jsx)(I.a,{style:{color:"white"},size:"small",onClick:function(){s(c._id)},children:Object(E.jsx)(oe.a,{fontSize:"default"})})}),Object(E.jsx)("div",{className:l.details,children:Object(E.jsx)(k.a,{variant:"body2",color:"textSecondary",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(E.jsx)(k.a,{className:l.title,variant:"h5",gutterBottom:!0,children:c.title}),Object(E.jsx)($.a,{children:Object(E.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(E.jsxs)(ee.a,{className:l.cardActions,children:[Object(E.jsx)(I.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){var e;o((e=c._id,function(){var t=Object(W.a)(U.a.mark((function t(n){var a,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e);case 3:a=t.sent,r=a.data,n({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:Object(E.jsx)(d,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(E.jsxs)(I.a,{size:"small",color:"primary",onClick:function(){var e;o((e=c._id,function(){var t=Object(W.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e);case 3:n({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(E.jsx)(ie.a,{fontSize:"small"}),"Delete"]})]})]})},je=Object(D.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),be=function(e){e.currentId;var t=e.setCurrentId,n=Object(i.c)((function(e){return e.posts})),a=je();return console.log(n),n.length?Object(E.jsx)(B.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(E.jsx)(B.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(pe,{post:e,setCurrentId:t})},e._id)}))}):Object(E.jsx)(Z.a,{})},me=n(97),he=n(184),fe=n(90),ge=n.n(fe),xe=Object(D.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Oe=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(w.a)(c,2),o=s[0],l=s[1],u=Object(i.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),d=Object(i.b)(),p=xe(),j=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){u&&l(u)}),[u]);var b=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})},m=function(){var e=Object(W.a)(U.a.mark((function e(t){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(d(K(Object(f.a)(Object(f.a)({},o),{},{name:null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a.name}))),b()):(d(Y(n,Object(f.a)(Object(f.a)({},o),{},{name:null===j||void 0===j||null===(r=j.result)||void 0===r?void 0:r.name}))),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.name)?Object(E.jsx)(me.a,{className:p.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:m,children:[Object(E.jsx)(k.a,{variant:"h6",children:n?'Editing "'.concat(u.title,'"'):"Creating a Memory"}),Object(E.jsx)(he.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(f.a)(Object(f.a)({},o),{},{title:e.target.value}))}}),Object(E.jsx)(he.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(f.a)(Object(f.a)({},o),{},{message:e.target.value}))}}),Object(E.jsx)(he.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(f.a)(Object(f.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(E.jsx)("div",{className:p.fileInput,children:Object(E.jsx)(ge.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(f.a)(Object(f.a)({},o),{},{selectedFile:t}))}})}),Object(E.jsx)(I.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(E.jsx)(I.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(E.jsx)(me.a,{className:p.paper,children:Object(E.jsx)(k.a,{variant:"h6",align:"center",children:"Please Sign in to create your own memories and like others memories."})})},ve=function(){var e=Object(a.useState)(0),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(W.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("/posts");case 3:n=e.sent,a=n.data,t({type:j,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(E.jsx)(z.a,{in:!0,children:Object(E.jsx)(O.a,{children:Object(E.jsxs)(B.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(B.a,{item:!0,xs:12,sm:7,children:Object(E.jsx)(be,{setCurrentId:r})}),Object(E.jsx)(B.a,{item:!0,xs:12,sm:4,children:Object(E.jsx)(Oe,{currentId:n,setCurrentId:r})})]})})})},ye=n(57),we=n(94),Ce=n.n(we),ke=n(91),Se=function(){return Object(E.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(E.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Ne=Object(D.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ie=n(182),Te=n(183),De=n(92),Fe=n.n(De),Le=n(93),Ae=n.n(Le),Ee=function(e){var t=e.name,n=e.label,a=e.half,r=e.handleChange,c=e.handleShowPassword,i=e.type,s=e.autoFocus;return Object(E.jsx)(B.a,{item:!0,xs:12,sm:a?6:12,children:Object(E.jsx)(he.a,{name:t,label:n,onChange:r,variant:"outlined",required:!0,fullWidth:!0,autoFocus:s,type:i,InputProps:"password"===t&&{endAdornment:Object(E.jsx)(Ie.a,{position:"end",children:Object(E.jsx)(Te.a,{onClick:c,children:"password"===i?Object(E.jsx)(Fe.a,{}):Object(E.jsx)(Ae.a,{})})})}})})},_e={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},ze=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(w.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(_e),d=Object(w.a)(u,2),p=d[0],j=d[1],b=Ne(),h=Object(i.b)(),g=Object(y.f)(),x=function(e){j(Object(f.a)(Object(f.a)({},p),{},Object(ye.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(W.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{h({type:"AUTH",data:{result:n,token:a}}),g.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(O.a,{component:"main",maxWidth:"xs",children:Object(E.jsxs)(me.a,{className:b.paper,elevation:3,children:[Object(E.jsx)(N.a,{className:b.avatar,children:Object(E.jsx)(Ce.a,{})}),Object(E.jsx)(k.a,{variant:"h5",children:o?"Sign Up":"Sign In"}),Object(E.jsxs)("form",{className:b.form,onSubmit:function(e){e.preventDefault(),h(o?function(e,t){return function(){var n=Object(W.a)(U.a.mark((function n(a){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V(e);case 3:r=n.sent,c=r.data,a({type:m,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(p,g):function(e,t){return function(){var n=Object(W.a)(U.a.mark((function n(a){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e);case 3:r=n.sent,c=r.data,a({type:m,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(p,g))},children:[Object(E.jsxs)(B.a,{container:!0,spacing:2,children:[o&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Ee,{name:"firstName",label:"First Name",handleChange:x,autoFocus:!0,half:!0}),Object(E.jsx)(Ee,{name:"lastName",label:"Last Name",handleChange:x,half:!0})]}),Object(E.jsx)(Ee,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(E.jsx)(Ee,{name:"password",label:"Password",handleChange:x,type:n?"text":"password",handleShowPassword:function(){r((function(e){return!e}))}}),o&&Object(E.jsx)(Ee,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})]}),Object(E.jsxs)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:b.submit,children:[" ",o?"Sign Up":"Sign In"," "]}),Object(E.jsx)(ke.GoogleLogin,{clientId:"717057806217-e6ihc3vg8tpteqmhbkjt1nrq3ddb784m.apps.googleusercontent.com",render:function(e){return Object(E.jsx)(I.a,{className:b.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(E.jsx)(Se,{}),variant:"contained",children:"Google Sign In "})},onSuccess:v,onFailure:function(e){console.log(e),console.log("Google Sign in was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(E.jsx)(B.a,{container:!0,justify:"flex-end",children:Object(E.jsx)(B.a,{item:!0,children:Object(E.jsxs)(I.a,{onClick:function(){j(_e),l((function(e){return!e})),r(!1)},children:[" ",o?"Already have an account? Sign In":"Don't have an account? Sign Up"," "]})})})]})]})})},Be=function(){return Object(E.jsx)(v.a,{children:Object(E.jsxs)(O.a,{maxwidth:"lg",children:[Object(E.jsx)(_,{}),Object(E.jsxs)(y.c,{children:[Object(E.jsx)(y.a,{path:"/",exact:!0,component:ve}),Object(E.jsx)(y.a,{path:"/auth",exact:!0,component:ze})]})]})})},Pe=(n(135),Object(s.e)(x,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(E.jsx)(i.a,{store:Pe,children:Object(E.jsx)(Be,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.ce244011.chunk.js.map