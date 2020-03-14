(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{214:function(e,t,a){e.exports=a(412)},219:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),c=a.n(r),i=a(88),l=a.n(i),o=(a(219),a(5)),s=a(30),u=a(6),m=Object(u.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/create"},"New Project")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),d=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signup"},"Signup")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signin"},"Login")))},h=Object(u.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(m,{profile:a}):c.a.createElement(d,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-1"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{to:"/",className:"brand-logo"}," MarioPlan "),n))})),p=a(25),E=a(26),f=a(28),b=a(27),g=a(29),N=a(50),v=a.n(N),j=function(e){var t=e.notifications;return console.log("notifications",t),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user," "),c.a.createElement("span",null,e.content),c.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))))},O=function(e){var t=e.project;return c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text"},v()(t.createdAt.toDate()).calendar())))},y=function(e){var t=e.projects;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return c.a.createElement(o.b,{to:"/project/"+e.id,key:e.id},c.a.createElement(O,{project:e}))})))},C=a(20),S=a(14),w=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(y,{projects:t})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(j,{notifications:n})))):c.a.createElement(s.a,{to:"/signin"})}}]),t}(r.Component),R=Object(S.d)(Object(u.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),F=Object(S.d)(Object(u.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?(console.log(t),t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"}," ",t.title),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null,v()(t.createdAt.toDate()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading project...."))):c.a.createElement(s.a,{to:"/signin"})})),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",onChange:this.handleChange,id:"email"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",onChange:this.handleChange,id:"password"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),c.a.createElement("div",{className:"red-text center"},t?c.a.createElement("p",null," ",t," "):null))))}}]),t}(r.Component),x=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(k),I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement("input",{type:"text",onChange:this.handleChange,id:"firstName"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{type:"text",onChange:this.handleChange,id:"lastName"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",onChange:this.handleChange,id:"email"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",onChange:this.handleChange,id:"password"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SignUp")),c.a.createElement("div",{className:"red-text center"},a?c.a.createElement("p",null," ",a," "):null)))}}]),t}(r.Component),P=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I),A=a(38),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",onChange:this.handleChange,id:"title"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"},"Project Content"),c.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):c.a.createElement(s.a,{to:"/signin"})}}]),t}(r.Component),U=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(A.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(L);var _=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:R}),c.a.createElement(s.b,{path:"/project/:id",component:F}),c.a.createElement(s.b,{path:"/signin",component:x}),c.a.createElement(s.b,{path:"/signup",component:P}),c.a.createElement(s.b,{path:"/create",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login fail"),Object(A.a)({},e,{authError:"login error"});case"LOGIN_SUCCESS":return console.log("login success"),Object(A.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(A.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(A.a)({},e,{authError:t.err.message});default:return e}},z={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":console.log("create project error",t.err);break;default:return e}},B=a(51),J=Object(S.c)({auth:G,project:D,firestore:B.firestoreReducer,firebase:C.firebaseReducer}),W=a(213),M=a(39),Z=a.n(M);a(406),a(410);Z.a.initializeApp({apiKey:"AIzaSyBzdy2LfvAZ7g_N17LhiOkAqc-2dBMIaEM",authDomain:"marioplan-5cea1.firebaseapp.com",databaseURL:"https://marioplan-5cea1.firebaseio.com",projectId:"marioplan-5cea1",storageBucket:"marioplan-5cea1.appspot.com",messagingSenderId:"508672315847",appId:"1:508672315847:web:75b73e0000eb372d8889e2",measurementId:"G-T8VWZQSMD1"}),Z.a.firestore().settings({});var q,H=Z.a,K=Object(S.e)(J,Object(S.d)(Object(S.a)(W.a.withExtraArgument({getFirestore:B.getFirestore,getFirebase:C.getFirebase})),Object(B.reduxFirestore)(Z.a,H))),Q=(q={firebase:Z.a,config:H},Object(n.a)(q,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(q,"dispatch",K.dispatch),Object(n.a)(q,"createFirestoreInstance",B.createFirestoreInstance),q);l.a.render(c.a.createElement(u.a,{store:K},c.a.createElement(C.ReactReduxFirebaseProvider,Q,c.a.createElement((function(e){var t=e.children,a=Object(u.c)((function(e){return e.firebase.auth}));return Object(C.isLoaded)(a)?t:c.a.createElement("div",null,"Loading Screen...")}),null,c.a.createElement(_,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.9f16fe55.chunk.js.map