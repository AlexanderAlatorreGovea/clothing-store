(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),i=n.n(c),s=(n(65),n(21)),l=n(22),o=n(24),u=n(23),m=n(25),p=(n(66),n(18)),d=n(8),f=n(7),E=(n(71),n(26)),b=Object(E.g)(function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,s=e.match;return console.log(i),r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(s.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}),h=(n(73),Object(f.a)([function(e){return e.directory}],function(e){return e.sections})),O=Object(f.b)({sections:h}),v=Object(d.b)(O)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,n=Object(p.a)(e,["id"]);return r.a.createElement(b,Object.assign({key:t},n))}))}),g=(n(74),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(v,null))}),S=n(11),N=function(e){return e.shop},C=Object(f.a)([N],function(e){return e.collections}),_=Object(f.a)([C],function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]}),y=Object(f.a)([N],function(e){return e.isFetching}),I=Object(f.a)([N],function(e){return!!e.collections}),j=(n(75),function(e){return function(t){var n=t.isLoading,a=Object(p.a)(t,["isLoading"]);return n?r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"})):r.a.createElement(e,a)}}),w=(n(76),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(p.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),T={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},k=function(){return{type:T.TOGGLE_CART_HIDDEN}},U=function(e){return{type:T.ADD_ITEM,payload:e}},x=function(){return{type:T.CLEAR_CART}},A=(n(77),Object(d.b)(null,function(e){return{addItem:function(t){return e(U(t))}}})(function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(w,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))})),R=(n(78),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(A,{key:e.id,item:e})})))}),L=(n(79),Object(f.b)({collections:_})),G=Object(d.b)(L)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,n=Object(p.a)(e,["id"]);return r.a.createElement(R,Object.assign({key:t},n))}))}),P=Object(f.b)({isLoading:y}),F=Object(S.d)(Object(d.b)(P),j)(G),M=(n(80),Object(d.b)(function(e,t){return{collection:(n=t.match.params.collectionId,Object(f.a)([C],function(e){return e?e[n]:null}))(e)};var n})(function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map(function(e){return r.a.createElement(A,{key:e.id,item:e})})))})),H=Object(f.b)({isLoading:function(e){return!I(e)}}),D=Object(S.d)(Object(d.b)(H),j)(M),q={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},V=n(2),z=n.n(V),W=n(10),K=n(27),B=n(30),J=n.n(B);n(82),n(85);J.a.initializeApp({apiKey:"AIzaSyAbK7-PBkm-uOdhCCQN7uld9VxOrVioBMI",authDomain:"crown-db-88763.firebaseapp.com",databaseURL:"https://crown-db-88763.firebaseio.com",projectId:"crown-db-88763",storageBucket:"",messagingSenderId:"881324738232",appId:"1:881324738232:web:ddadf1233ab8bbcd"});var Q=function(){var e=Object(K.a)(z.a.mark(function e(t,n){var a,r,c,i;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Z.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(W.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}(),$=function(e){return e.docs.map(function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}).reduce(function(e,t){return e[t.title.toLowerCase()]=t,e},{})},Y=function(){return new Promise(function(e,t){var n=X.onAuthStateChanged(function(t){n(),e(t)},t)})},X=J.a.auth(),Z=J.a.firestore(),ee=new J.a.auth.GoogleAuthProvider;ee.setCustomParameters({prompt:"select_account"});var te=function(){return X.signInWithPopup(ee)},ne=(J.a,function(){return{type:q.FETCH_COLLECTIONS_START}}),ae=function(e){return{type:q.FETCH_COLLECTIONS_SUCCESS,payload:e}},re=function(e){return{type:q.FETCH_COLLECTIONS_FAILURE,payload:e}},ce=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromSnapshot=null,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(E.b,{exact:!0,path:"".concat(e.path),component:F}),r.a.createElement(E.b,{path:"".concat(e.path,"/:collectionId"),component:D}))}}]),t}(a.Component),ie=Object(d.b)(null,function(e){return{fetchCollectionsStart:function(){return e(ne())}}})(ce),se=n(29),le=(n(87),n(88),function(e){var t=e.handleChange,n=e.label,a=Object(p.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),oe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=Object(K.a)(z.a.mark(function e(t){var a,r,c;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,X.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(se.a)({},r,a))},n.state={email:"",password:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(le,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(le,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(w,{type:"submit"}," Sign in "),r.a.createElement(w,{onClick:te,isGoogleSignIn:!0}," Sign in with google "))))}}]),t}(a.Component),ue={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},me=function(e){return{type:ue.SIGN_IN_SUCCESS,payload:e}},pe=function(e){return{type:ue.SIGN_IN_FAILURE,payload:e}},de=function(){return{type:ue.SIGN_OUT_SUCCESS}},fe=function(e){return{type:ue.SIGN_OUT_FAILURE,payload:e}},Ee=function(e){var t=e.user,n=e.additionalData;return{type:ue.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},be=function(e){return{type:ue.SIGN_UP_FAILURE,payload:e}},he=(n(89),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(){var t=Object(K.a)(z.a.mark(function t(n){var a,r,c,i,s,l;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.props.signUpStart,r=e.state,c=r.displayName,i=r.email,s=r.password,l=r.confirmPassword,s===l){t.next=6;break}return alert("passwords don't match"),t.abrupt("return");case 6:a({displayName:c,email:i,password:s});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(se.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(le,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(le,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(le,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(le,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(w,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),Oe=Object(d.b)(null,function(e){return{signUpStart:function(t){return e(function(e){return{type:ue.SIGN_UP_START,payload:e}}(t))}}})(he),ve=(n(90),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(oe,null),r.a.createElement(Oe,null))}),ge=(n(91),Object(d.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:T.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(U(t))},removeItem:function(t){return e(function(e){return{type:T.REMOVE_ITEM,payload:e}}(t))}}})(function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},l),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))})),Se=n(54),Ne=n.n(Se),Ce=n(55),_e=n.n(Ce),ye=function(e){var t=e.price,n=100*t;return r.a.createElement(Ne.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){_e()({url:"payment",method:"post",data:{amount:n,token:e}}).then(function(e){alert("succesful payment")}).catch(function(e){console.log("Payment Error: ",JSON.parse(e)),alert("There was an issue with your payment! Please make sure you use the provided credit card.")})},stripeKey:"pk_test_Hf57iAx5mdXgGnkvekE97aqK00NsdvL39K"})},Ie=function(e){return e.cart},je=Object(f.a)([Ie],function(e){return e.cartItems}),we=Object(f.a)([Ie],function(e){return e.hidden}),Te=Object(f.a)([je],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),ke=Object(f.a)([je],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}),Ue=(n(109),Object(f.b)({cartItems:je,total:ke})),xe=Object(d.b)(Ue)(function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(ge,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(ye,{price:n}))}),Ae=n(16);function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ge=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Fe=r.a.createElement("g",null),Me=r.a.createElement("g",null),He=r.a.createElement("g",null),De=r.a.createElement("g",null),qe=r.a.createElement("g",null),Ve=r.a.createElement("g",null),ze=r.a.createElement("g",null),We=r.a.createElement("g",null),Ke=r.a.createElement("g",null),Be=r.a.createElement("g",null),Je=r.a.createElement("g",null),Qe=r.a.createElement("g",null),$e=r.a.createElement("g",null),Ye=function(e){var t=e.svgRef,n=Le(e,["svgRef"]);return r.a.createElement("svg",Re({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ge,Pe,Fe,Me,He,De,qe,Ve,ze,We,Ke,Be,Je,Qe,$e)},Xe=r.a.forwardRef(function(e,t){return r.a.createElement(Ye,Re({svgRef:t},e))}),Ze=(n.p,n(110),Object(f.b)({itemCount:Te})),et=Object(d.b)(Ze,function(e){return{toggleCartHidden:function(){return e(k())}}})(function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Xe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}),tt=Object(f.a)([function(e){return e.user}],function(e){return e.currentUser});function nt(){return(nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function at(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var rt=r.a.createElement("title",null,"Group"),ct=r.a.createElement("desc",null,"Created with Sketch."),it=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),st=function(e){var t=e.svgRef,n=at(e,["svgRef"]);return r.a.createElement("svg",nt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),rt,ct,it)},lt=r.a.forwardRef(function(e,t){return r.a.createElement(st,nt({svgRef:t},e))}),ot=(n.p,n(111),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),ut=(n(112),Object(f.b)({cartItems:je})),mt=Object(E.g)(Object(d.b)(ut)(function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return r.a.createElement(ot,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(w,{onClick:function(){n.push("/checkout"),a(k())}},"GO TO CHECKOUT"))})),pt=(n(113),Object(f.b)({currentUser:tt,hidden:we})),dt=Object(d.b)(pt,function(e){return{signOutStart:function(){return e({type:ue.SIGN_OUT_START})}}})(function(e){var t=e.currentUser,n=e.hidden,a=e.signOutStart;return r.a.createElement("div",{className:"header"},r.a.createElement(Ae.b,{to:"/"},r.a.createElement(lt,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(Ae.b,{className:"option",to:"/Contact"},"CONTACT"),r.a.createElement(Ae.b,{className:"option",to:"/Shop"},"SHOP"),t?r.a.createElement("div",{className:"option",onClick:a},"SIGN OUT"):r.a.createElement(Ae.b,{className:"option",to:"/SignInAndUp"},"SIGN IN"),r.a.createElement(et,null)),n?null:r.a.createElement(mt,null))}),ft=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.checkUserSession)()}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(dt,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:g}),r.a.createElement(E.b,{path:"/Shop",component:ie}),r.a.createElement(E.b,{path:"/CheckOut",component:xe}),r.a.createElement(E.b,{exact:!0,path:"/SignInAndUp",render:function(){return e.props.currentUser?r.a.createElement(E.a,{to:"/"}):r.a.createElement(ve,null)}})))}}]),t}(a.Component),Et=Object(f.b)({currentUser:tt}),bt=Object(d.b)(Et,function(e){return{checkUserSession:function(){return e({type:ue.CHECK_USER_SESSION})}}})(ft),ht=n(56),Ot=n(32),vt=(n(114),n(59)),gt=n(57),St=n.n(gt),Nt={currentUser:null,error:null},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.SIGN_IN_SUCCESS:return Object(W.a)({},e,{currentUser:t.payload,error:null});case ue.SIGN_OUT_SUCCESS:return Object(W.a)({},e,{currentUser:null,error:null});case ue.SIGN_IN_FAILURE:case ue.SIGN_OUT_FAILURE:case ue.SIGN_UP_FAILURE:return Object(W.a)({},e,{error:t.payload});default:return e}},_t=n(58),yt=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(W.a)({},e,{quantity:e.quantity-1}):e})},It={hidden:!0,cartItems:[]},jt=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T.TOGGLE_CART_HIDDEN:return Object(W.a)({},n,{hidden:!n.hidden});case T.ADD_ITEM:return Object(W.a)({},n,{cartItems:(e=n.cartItems,t=a.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(W.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(_t.a)(e),[Object(W.a)({},t,{quantity:1})]))});case T.REMOVE_ITEM:return Object(W.a)({},n,{cartItems:yt(n.cartItems,a.payload)});case T.CLEAR_ITEM_FROM_CART:return Object(W.a)({},n,{cartItems:n.cartItems.filter(function(e){return e.id!==a.payload.id})});case T.CLEAR_CART:return Object(W.a)({},n,{cartItems:[]});default:return n}},wt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt;return(arguments.length>1?arguments[1]:void 0).type,e},kt={collections:null,isFetching:!1,errorMessage:void 0},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.FETCH_COLLECTIONS_START:return Object(W.a)({},e,{isFetching:!0});case q.FETCH_COLLECTIONS_SUCCESS:return Object(W.a)({},e,{isFetching:!1,collections:t.payload});case q.FETCH_COLLECTIONS_FAILURE:return Object(W.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},xt={key:"root",storage:St.a,whitelist:["cart"]},At=Object(S.c)({user:Ct,cart:jt,directory:Tt,shop:Ut}),Rt=Object(Ot.a)(xt,At),Lt=n(4),Gt=z.a.mark(Mt),Pt=z.a.mark(Ht),Ft=z.a.mark(Dt);function Mt(){var e,t,n;return z.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=Z.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(Lt.b)($,t);case 7:return n=a.sent,a.next=10,Object(Lt.c)(ae(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(Lt.c)(re(a.t0.message));case 16:case"end":return a.stop()}},Gt,null,[[0,12]])}function Ht(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(q.FETCH_COLLECTIONS_START,Mt);case 2:case"end":return e.stop()}},Pt)}function Dt(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.a)([Object(Lt.b)(Ht)]);case 2:case"end":return e.stop()}},Ft)}var qt=z.a.mark(tn),Vt=z.a.mark(nn),zt=z.a.mark(an),Wt=z.a.mark(rn),Kt=z.a.mark(cn),Bt=z.a.mark(sn),Jt=z.a.mark(ln),Qt=z.a.mark(on),$t=z.a.mark(un),Yt=z.a.mark(mn),Xt=z.a.mark(pn),Zt=z.a.mark(dn),en=z.a.mark(fn);function tn(e,t){var n,a;return z.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Lt.b)(Q,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(Lt.c)(me(Object(W.a)({id:a.id},a.data())));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(Lt.c)(pe(r.t0));case 15:case"end":return r.stop()}},qt,null,[[0,11]])}function nn(){var e,t;return z.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X.signInWithPopup(ee);case 3:return e=n.sent,t=e.user,n.next=7,tn(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Lt.c)(pe(n.t0));case 13:case"end":return n.stop()}},Vt,null,[[0,9]])}function an(e){var t,n,a,r,c;return z.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,X.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,tn(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Lt.c)(pe(i.t0));case 14:case"end":return i.stop()}},zt,null,[[1,10]])}function rn(){var e;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,tn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Lt.c)(pe(t.t0));case 14:case"end":return t.stop()}},Wt,null,[[0,10]])}function cn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.signOut();case 3:return e.next=5,Object(Lt.c)(de());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Lt.c)(fe(e.t0));case 11:case"end":return e.stop()}},Kt,null,[[0,7]])}function sn(e){var t,n,a,r,c,i;return z.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,s.prev=1,s.next=4,X.createUserWithEmailAndPassword(n,a);case 4:return c=s.sent,i=c.user,s.next=8,Object(Lt.c)(Ee({user:i,additionalData:{displayName:r}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Lt.c)(be(s.t0));case 14:case"end":return s.stop()}},Bt,null,[[1,10]])}function ln(e){var t,n,a;return z.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData,r.next=3,tn(n,a);case 3:case"end":return r.stop()}},Jt)}function on(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(ue.GOOGLE_SIGN_IN_START,nn);case 2:case"end":return e.stop()}},Qt)}function un(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(ue.EMAIL_SIGN_IN_START,an);case 2:case"end":return e.stop()}},$t)}function mn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(ue.SIGN_OUT_START,cn);case 2:case"end":return e.stop()}},Yt)}function pn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(ue.SIGN_UP_START,sn);case 2:case"end":return e.stop()}},Xt)}function dn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(ue.SIGN_UP_SUCCESS,ln);case 2:case"end":return e.stop()}},Zt)}function fn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.a)([Object(Lt.b)(on),Object(Lt.b)(un),Object(Lt.b)(rn),Object(Lt.b)(mn),Object(Lt.b)(pn),Object(Lt.b)(dn)]);case 2:case"end":return e.stop()}},en)}var En=z.a.mark(On),bn=z.a.mark(vn),hn=z.a.mark(gn);function On(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.c)(x());case 2:case"end":return e.stop()}},En)}function vn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.d)(ue.SIGN_OUT_SUCCESS,On);case 2:case"end":return e.stop()}},bn)}function gn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.a)([Object(Lt.b)(vn)]);case 2:case"end":return e.stop()}},hn)}var Sn=z.a.mark(Nn);function Nn(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt.a)([Object(Lt.b)(Dt),Object(Lt.b)(fn),Object(Lt.b)(gn)]);case 2:case"end":return e.stop()}},Sn)}var Cn=Object(vt.a)(),_n=[Cn];var yn=Object(S.e)(Rt,S.a.apply(void 0,_n));Cn.run(Nn);var In=Object(Ot.b)(yn);Ot.b;i.a.render(r.a.createElement(d.a,{store:yn},r.a.createElement(Ae.a,null,r.a.createElement(ht.a,{persistor:In},r.a.createElement(bt,null)))),document.getElementById("root"))},60:function(e,t,n){e.exports=n(117)},65:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.c3244824.chunk.js.map