(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(15),s=a(27),o=a(60),l=a(67),u="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",b="LIKE_POST",f=Object(s.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),m=a(40),x=a(148),h=a(149),O=a(140),g=a(152),v=a(147),y=a(16),C=a.n(y),w=a(28),k=a(29),N=a.n(k),I="/posts",E=function(e,t){return N.a.patch("".concat(I,"/").concat(e),t)},S=function(e){return N.a.delete("".concat(I,"/").concat(e))},_=function(e){return N.a.patch("".concat(I,"/").concat(e,"/likePost"))},T=a(146),D=a(134),z=Object(D.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),A=a(137),F=a(139),L=a(151),W=a(142),M=a(143),B=a(141),H=a(144),P=a(145),R=a(65),J=a.n(R),K=a(5),U=function(e){var t=e.post,a=e.setCurrentId,n=z(),r=Object(i.b)();return Object(K.jsxs)(A.a,{className:n.card,children:[Object(K.jsx)(F.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(K.jsxs)("div",{className:n.overlay,children:[Object(K.jsx)(O.a,{variant:"h6",children:t.creator}),Object(K.jsx)(O.a,{variant:"body2",children:J()(t.createdAt).fromNow()})]}),Object(K.jsx)("div",{className:n.overlay2,children:Object(K.jsx)(L.a,{style:{color:"white"},size:"small",onClick:function(){a(t._id)},children:Object(K.jsx)(B.a,{fontSize:"default"})})}),Object(K.jsx)("div",{className:n.details,children:Object(K.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(K.jsx)(O.a,{className:n.title,variant:"h5",children:t.title}),Object(K.jsx)(W.a,{children:Object(K.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(K.jsxs)(M.a,{className:n.cardActions,children:[Object(K.jsxs)(L.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:n=t.sent,r=n.data,a({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(K.jsx)(H.a,{fontSize:"small"}),"like \xa0",t.likeCount]}),Object(K.jsxs)(L.a,{size:"small",color:"primary",onClick:function(){var e;r((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(K.jsx)(P.a,{fontSize:"small"}),"Delete"]})]})]})},V=Object(D.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),q=function(e){var t=e.setCurrentId,a=V(),n=Object(i.c)((function(e){return e.posts}));return n.length?Object(K.jsx)(v.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(K.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(K.jsx)(U,{post:e,setCurrentId:t})},e._id)}))}):Object(K.jsx)(T.a,{})},G=a(17),Q=a(69),X=a(150),Y=a(66),Z=a.n(Y),$=Object(D.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ee=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(m.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),j=$(),p=Object(i.b)();Object(n.useEffect)((function(){l&&o(l)}),[l]);var b=function(){a(null),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(K.jsx)(Q.a,{className:j.paper,children:Object(K.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:function(e){e.preventDefault(),p(t?function(e,t){return function(){var a=Object(w.a)(C.a.mark((function a(n){var r,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,s):function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,N.a.post(I,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),b()},children:[Object(K.jsxs)(O.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(K.jsx)(X.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object(G.a)(Object(G.a)({},s),{},{creator:e.target.value}))}}),Object(K.jsx)(X.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(G.a)(Object(G.a)({},s),{},{title:e.target.value}))}}),Object(K.jsx)(X.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return o(Object(G.a)(Object(G.a)({},s),{},{message:e.target.value}))}}),Object(K.jsx)(X.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(G.a)(Object(G.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(K.jsx)("div",{className:j.fileInput,children:Object(K.jsx)(Z.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(G.a)(Object(G.a)({},s),{},{selectedFile:t}))}})}),Object(K.jsx)(L.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(K.jsx)(L.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})})},te=a.p+"static/media/memories.5a669b82.png",ae=a(39),ne=Object(D.a)((function(e){return Object(ae.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),re=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=ne(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(w.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get(I);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[s,a]),Object(K.jsxs)(x.a,{maxwidth:"lg",children:[Object(K.jsxs)(h.a,{position:"static",color:"inherit",className:c.appBar,children:[Object(K.jsx)(O.a,{variant:"h2",align:"center",className:c.heading,children:"Memories"}),Object(K.jsx)("img",{src:te,alt:"memories",height:"60",className:c.image})]}),Object(K.jsx)(g.a,{in:!0,children:Object(K.jsx)(x.a,{children:Object(K.jsxs)(v.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(K.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(K.jsx)(q,{setCurrentId:r})}),Object(K.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(K.jsx)(ee,{currentId:a,setCurrentId:r})})]})})})]})},ce=(a(103),Object(s.d)(f,Object(s.c)(Object(s.a)(o.a))));c.a.render(Object(K.jsx)(i.a,{store:ce,children:Object(K.jsx)(re,{})}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.7a63d6f5.chunk.js.map