(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/marca.957fb590.jpg"},41:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l);a(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(75),s=a(74),i=a(66),u=a(64),m=a(65),h=a(67),d=a(68),p=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(p.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},f=p,b=a(8),g=a(26),v=a.n(g),w=(a(53),a(55),{apiKey:"AIzaSyBcChLoo-IjiYpNWu6_5RPYZnEbR7x1LZA",authDomain:"react-85fdf.firebaseapp.com",databaseURL:"https://react-85fdf.firebaseio.com",projectId:"react-85fdf",storageBucket:"",messagingSenderId:"764037073534",appId:"1:764037073534:web:b0f5ac6cc2423cc9"}),O=function e(){var t=this;Object(b.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},v.a.initializeApp(w),this.auth=v.a.auth(),this.db=v.a.database()},j=E(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),C="/home",y=r.a.createContext(null),S=a(9),P=a(11),k=a(10),A=a(12),x=function(e){var t=function(t){function a(e){var t;return Object(b.a)(this,a),(t=Object(P.a)(this,Object(k.a)(a).call(this,e))).state={authUser:null},t}return Object(A.a)(a,t),Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return E(t)},U=a(76),I=a(24),N=function(e){return function(t){var a=function(a){function n(){return Object(b.a)(this,n),Object(P.a)(this,Object(k.a)(n).apply(this,arguments))}return Object(A.a)(n,a),Object(S.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(y.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(I.a)(U.a,E)(a)}},R=function(){return r.a.createElement("div",null,r.a.createElement(u.a,{bg:"dark",pills:!0,className:"justify-content-center"},r.a.createElement(m.a,null,r.a.createElement(i.a,{to:"/"},"Realidad Aumentada")),r.a.createElement(m.a,null,r.a.createElement(i.a,{to:"/ar"},"Realidad Aument")),r.a.createElement(m.a,null,r.a.createElement(i.a,{to:C},"Inicio")),r.a.createElement(m.a,null,r.a.createElement(i.a,{to:"/account"},"Cuenta")),r.a.createElement(m.a,null,r.a.createElement(i.a,{to:"/admin"},"Administrador")),r.a.createElement(m.a,null,r.a.createElement(j,null))))},W=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{color:"light",light:!0,expand:"md"},r.a.createElement(d.a,{href:"/"},"AR"),r.a.createElement(u.a,{className:"ml-auto",navbar:!0},r.a.createElement(m.a,null,r.a.createElement(i.a,{to:"/signin"}," Iniciar Sesion")))))},D=function(){return r.a.createElement("div",null,r.a.createElement(y.Consumer,null,function(e){return e?r.a.createElement(R,null):r.a.createElement(W,null)}))},T=a(32);function M(){return r.a.createElement(T.AFrameRenderer,{arToolKit:{sourceType:"webcam"}},r.a.createElement(T.Marker,{parameters:{preset:"hiro"}},r.a.createElement("a-box",{color:"blue",material:"opacity: 1;",position:"0 0.09 0",scale:"0.4 0.8 0.8"},r.a.createElement("a-animation",{attribute:"rotation",to:"360 0 0",dur:"5000",easing:"linear",repeat:"indefinite"}))))}var L=a(39),B=a.n(L),F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ventana de Inicio"),r.a.createElement("img",{src:B.a,alt:"imagen hiro"}))},z=a(15),H=a(13),J=a(69),K=a(70),Y=a(71),Z=a(72),G=a(73),V="ADMIN",$={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},_=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(P.a)(this,Object(k.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,l=t.passwordOne,o=t.isAdmin,c={};o&&(c[V]=V),a.props.firebase.doCreateUserWithEmailAndPassword(r,l).then(function(e){a.props.firebase.user(e.user.uid).set({username:n,email:r,roles:c}).then(function(){a.setState(Object(H.a)({},$)),a.props.history.push(C)}).catch(function(e){a.setState({error:e})})}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.onChangeCheckbox=function(e){a.setState(Object(z.a)({},e.target.name,e.target.checked))},a.state=Object(H.a)({},$),a}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,l=e.passwordTwo,o=e.isAdmin,c=e.error,s=n!==l||""===n||""===a||""===t;return r.a.createElement("div",null,r.a.createElement(J.a,{onSubmit:this.onSubmit},r.a.createElement(K.a,null,r.a.createElement(Y.a,{for:"text"},"Usuario"),r.a.createElement(Z.a,{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"})),r.a.createElement(K.a,null,r.a.createElement(Y.a,{for:"exampleEmail"},"Email"),r.a.createElement(Z.a,{name:"email",value:a,onChange:this.onChange,type:"email",placeholder:"Email Address"})),r.a.createElement(K.a,null,r.a.createElement(Y.a,{for:"examplePassword"},"Contrase\xf1a"),r.a.createElement(Z.a,{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement(K.a,null,r.a.createElement(Y.a,{for:"Password"},"Confirmar contrase\xf1a"),r.a.createElement(Z.a,{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password"})),r.a.createElement(K.a,null,r.a.createElement(Y.a,null,"Admin:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:o,onChange:this.onChangeCheckbox}))),r.a.createElement(G.a,{disabled:s,type:"submit"},"Registrarse"),c&&r.a.createElement("p",null,c.message)))}}]),t}(n.Component),q=function(){return r.a.createElement("p",{align:"center"},"\xbfNo tienes una cuenta? ",r.a.createElement(i.a,{to:"/signup"},"Registrarse"))},Q=Object(U.a)(E(_)),X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(Q,null))},ee={email:"",error:null},te=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(P.a)(this,Object(k.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(H.a)({},ee))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(H.a)({},ee),a}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),ae=function(){return r.a.createElement("p",{align:"center"},r.a.createElement(i.a,{to:"/pw-forget"},"Olvisaste la contrase\xf1a?"))},ne=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(re,null))},re=E(te),le={email:"",password:"",error:null},oe=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(P.a)(this,Object(k.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(H.a)({},le)),a.props.history.push(C)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(H.a)({},le),a}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,l=""===a||""===t;return r.a.createElement(J.a,{inline:!0,className:"justify-content-center",onSubmit:this.onSubmit},r.a.createElement(K.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(Y.a,{for:"exampleEmail",className:"mr-sm-2"},"Email"),r.a.createElement(Z.a,{name:"email",value:t,onChange:this.onChange,type:"email",placeholder:"Email Address"})),r.a.createElement(K.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(Y.a,{for:"examplePassword",className:"mr-sm-2"},"Password"),r.a.createElement(Z.a,{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement(G.a,{color:"danger",disabled:l,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),ce=Object(I.a)(U.a,E)(oe),se=function(){return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"}," LOGIN"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce,null),r.a.createElement("br",null),r.a.createElement(ae,null),r.a.createElement(q,null))},ie=N(function(e){return!!e})(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."),r.a.createElement(G.a,{color:"danger"},"Danger!"))}),ue={passwordOne:"",passwordTwo:"",error:null},me=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(P.a)(this,Object(k.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(H.a)({},ue))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(H.a)({},ue),a}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,l=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),he=E(me),de=N(function(e){return!!e})(function(){return r.a.createElement(y.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(re,null),r.a.createElement(he,null))})}),pe=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(P.a)(this,Object(k.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(A.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(H.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(Ee,{users:t}))}}]),t}(n.Component),Ee=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},fe=E(pe),be=x(function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("hr",null),r.a.createElement(s.a,{exact:!0,path:"/",component:F}),r.a.createElement(s.a,{exact:!0,path:"/ar",component:M}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:X}),r.a.createElement(s.a,{exact:!0,path:"/signin",component:se}),r.a.createElement(s.a,{exact:!0,path:"/pw-forget",component:ne}),r.a.createElement(s.a,{exact:!0,path:C,component:ie}),r.a.createElement(s.a,{exact:!0,path:"/account",component:de}),r.a.createElement(s.a,{exact:!0,path:"/admin",component:fe})))});o.a.render(r.a.createElement(f.Provider,{value:new O},r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.d5df3df9.chunk.js.map