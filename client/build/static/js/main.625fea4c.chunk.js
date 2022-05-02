(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{75:function(e,t,a){e.exports=a(92)},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(60),o=a.n(c),l=a(4),i=a(11),s=a(9),u=a(7),m=a(70),d=a(27),p=function(e,t){switch(t.type){case"UPDATE_BOOKS":return Object(l.a)(Object(l.a)({},e),{},{books:Object(d.a)(t.books)});case"UPDATE_FILTERS":return Object(l.a)(Object(l.a)({},e),{},{filters:Object(d.a)(t.filters)});case"UPDATE_CURRENT_FILTER":return Object(l.a)(Object(l.a)({},e),{},{currentFilter:t.currentFilter});case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(d.a)(e.cart),[t.book])});case"ADD_MULTIPLE_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(d.a)(e.cart),Object(d.a)(t.books))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(l.a)(Object(l.a)({},e),{},{cart:a});case"UPDATE_CART_QUANTITY":return Object(l.a)(Object(l.a)({},e),{},{cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[]});default:return e}};var b=["value"],f=Object(n.createContext)(),E=f.Provider,v=function(e){e.value;var t,a=Object(m.a)(e,b),c=(t={books:[],cart:[],filters:[],currentFilter:""},Object(n.useReducer)(p,t)),o=Object(u.a)(c,2),l=o[0],i=o[1];return r.a.createElement(E,Object.assign({value:[l,i]},a))},g=function(){return Object(n.useContext)(f)},h=a(69),O=a(72),k=a(104),j=a(102),y=a(68);function N(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("textos-antiguos",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("books",{keyPath:"_id"}),t.createObjectStore("filters",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var s=l.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var w,_,T,A,S,x=function(e){var t=g(),a=Object(u.a)(t,2),n=a[0],c=a[1],o=e.image,s=(e.description,e.price),m=e.name,d=(e.quantity,e.filter,e.author,e.year,e._id),p=n.cart;return r.a.createElement("article",{className:"col-md-6 col-lg-3 text-center bookItem"},r.a.createElement(i.b,{to:"/books/".concat(d)},r.a.createElement("div",{className:"bookBorder"},r.a.createElement("img",{alt:m,src:"../../images/".concat(o)}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",{className:"price"},"$",s)))),r.a.createElement("button",{className:"button",onClick:function(){var t=p.find((function(e){return e._id===d}));t?(c({type:"UPDATE_CART_QUANTITY",_id:d,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),N("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",book:Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})}),N("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})))}},"+ cart"))},C=a(63),D=a(24),I=a(103),R=(Object(I.a)(w||(w=Object(D.a)(["\n    {\n        books {\n            _id\n            name\n            description\n            price\n            quantity\n            filter {\n                name\n            }\n        }\n    }\n"]))),Object(I.a)(_||(_=Object(D.a)(["\n    query getBooks($filter: ID) {\n        books(filter: $filter) {\n            _id\n            name\n            description\n            price\n            quantity\n            image\n            filter {\n                _id\n            }\n        }\n    }\n"])))),U=Object(I.a)(T||(T=Object(D.a)(["\n    {\n        filters {\n            _id\n            name\n        }\n    }\n"]))),P=Object(I.a)(A||(A=Object(D.a)(["\n    {\n        user {\n            firstName\n            lastName\n            orders {\n                _id\n                purchaseDate\n                books {\n                _id\n                name\n                description\n                price\n                quantity\n                image\n                }\n            }\n        }\n    }\n"]))),F=Object(I.a)(S||(S=Object(D.a)(["\n    query getCheckout($books: [ID]!) {\n        checkout(books: $books) {\n            session\n        }\n    }\n"])));var $=function(){var e=g(),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.currentFilter,l=Object(C.a)(R),i=l.loading,s=l.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_BOOKS",books:s.books}),s.books.forEach((function(e){N("books","put",e)}))):i||N("books","get").then((function(e){c({type:"UPDATE_BOOKS",books:e})}))}),[s,i,c]),r.a.createElement("div",{className:"px-3 col-8 "},a.books.length?r.a.createElement("div",{className:"book-list d-flex flex-row justify-content-around flex-wrap"},(o?a.books.filter((function(e){return e.filter_id===o})):a.books).map((function(e){return r.a.createElement(x,{key:e._id,_id:e._id,author:e.author,year:e.year,image:e.image,name:e.name,price:e.price,description:e.description,quantity:e.quantity})}))):r.a.createElement("h3",null,"Looks like we are out of stock. Try again later !"),i?r.a.createElement("p",null,"working on it !"):null)},L=a(18),Q=a.n(L),B=a(26),q=a(65),M=a(100),W=function(e){var t=e.item,a=g(),n=Object(u.a)(a,2)[1];return r.a.createElement("div",{className:"cartItem d-flex justify-content-around"},r.a.createElement("div",{className:"itemImg"},r.a.createElement("img",{className:"cartImg",src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",{className:"itemInfo"},r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},r.a.createElement("span",null,"X"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),N("cart","delete",Object(l.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),N("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),N("cart","delete",Object(l.a)({},e))}(t)}}," ","remove"," "))))},H=a(66),K=a(67),Y=a(52),G=a.n(Y),V=new(function(){function e(){Object(H.a)(this,e)}return Object(K.a)(e,[{key:"getProfile",value:function(){return G()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return G()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),J=(a(88),Object(q.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),X=function(){var e=g(),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(M.a)(F),l=Object(u.a)(o,2),i=l[0],s=l[1].data;return Object(n.useEffect)((function(){s&&J.then((function(e){e.redirectToCheckout({sessionId:s.checkout.session})}))}),[s]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("cart","get");case 2:t=e.sent,c({type:"ADD_MULTIPLE_TO_CART",books:Object(d.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,c]),r.a.createElement("div",{className:"cart p-3 col set-width"},r.a.createElement("h2",null,"Cart"),a.cart.length?r.a.createElement("div",{className:""},r.a.createElement("div",{className:"books "},a.cart.map((function(e){return r.a.createElement(W,{key:e._id,item:e})}))),r.a.createElement("div",{className:"cartInfo "},r.a.createElement("strong",null,"Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()," USD"),V.loggedIn()?r.a.createElement("button",{className:"button",onClick:function(){var e=[];a.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),i({variables:{books:e}})}},"Checkout"):r.a.createElement("p",null,"(log in to check out)"))):r.a.createElement("p",null,"Haven't found anything you like yet ?"))},z=function(){return r.a.createElement("div",{className:"h-100"},r.a.createElement("div",{className:"content row h-75 com-con"},r.a.createElement($,null),r.a.createElement(X,null)),r.a.createElement("div",{className:"about row h-25"},r.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit diam, malesuada nec luctus non, lobortis id mi. Mauris eget vulputate velit. Praesent sit amet neque ac elit mollis tristique. Pellentesque vulputate, mi ut ornare rutrum, nulla leo aliquet dolor, ac maximus nisl erat eget tellus. Aliquam bibendum mauris eget suscipit fringilla.  ")))};var Z,ee,te,ae=function(){var e=g(),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(s.f)().id,m=Object(n.useState)({}),d=Object(u.a)(m,2),p=d[0],b=d[1],f=Object(C.a)(R),E=f.loading,v=f.data,h=a.books,O=a.cart;return Object(n.useEffect)((function(){h.length?b(h.find((function(e){return e._id===o}))):v?(c({type:"UPDATE_BOOKS",books:v.books}),v.books.forEach((function(e){N("books","put",e)}))):E||N("books","get").then((function(e){c({type:"UPDATE_BOOKS",books:e})}))}),[h,v,E,c,o]),r.a.createElement(r.a.Fragment,null,p&&O?r.a.createElement("div",{className:"px-3 col-8 "},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Books"),r.a.createElement("div",{className:"singleBook d-flex justify-content-center "},r.a.createElement("div",{className:"p-3 singleBorder"},r.a.createElement("img",{className:"coverImg",src:"/images/".concat(p.image),alt:p.name})),r.a.createElement("div",{className:"p-3"},r.a.createElement("h2",null,p.name),r.a.createElement("h2",null,"$",p.price),r.a.createElement("p",null,p.description),r.a.createElement("button",{className:"button",onClick:function(){c({type:"ADD_TO_CART",book:Object(l.a)(Object(l.a)({},p),{},{purchaseQuantity:1})}),N("cart","put",Object(l.a)(Object(l.a)({},p),{},{purchaseQuantity:1}))}},"Add to Cart")))):null,E?r.a.createElement("p",null,"One second !"):null,r.a.createElement(X,null))},ne=function(){return r.a.createElement("div",null)},re=a(32),ce=a(101),oe=Object(I.a)(Z||(Z=Object(D.a)(["\n    mutation login($email: String!, $password: String!) {\n            login(email: $email, password: $password) {\n            token\n            user {\n                _id\n            }\n        }\n    }\n"]))),le=Object(I.a)(ee||(ee=Object(D.a)(["\n    mutation addOrder($books: [ID]!) {\n        addOrder(books: $books) {\n            purchaseDate\n            books {\n                _id\n                name\n                description\n                price\n                quantity\n                filter {\n                    name\n                }\n            }\n        }\n    }\n"]))),ie=Object(I.a)(te||(te=Object(D.a)(["\n    mutation addUser(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $password: String!\n    ){\n        addUser(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            password: $password\n        ) {\n            token\n            user {\n                _id\n            }\n        }\n    }\n"])));var se=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(ce.a)(oe),m=Object(u.a)(s,2),d=m[0],p=m[1].error,b=function(){var e=Object(B.a)(Q.a.mark((function e(t){var a,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,V.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(re.a)({},a,n)))};return r.a.createElement("div",{className:""},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:b},r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"please provide your email address",name:"email",type:"email",id:"email",onChange:f})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:f})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:""},r.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(ce.a)(ie),m=Object(u.a)(s,1)[0],d=function(){var e=Object(B.a)(Q.a.mark((function e(t){var a,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,V.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(re.a)({},a,n)))};return r.a.createElement("div",{className:""},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"please provide your email address",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:""},r.a.createElement("button",{type:"submit"},"Submit"))))};var me=function(){var e,t=Object(C.a)(P).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Books"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:""},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:""},e.books.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:""},r.a.createElement(i.b,{to:"/books/".concat(a)},r.a.createElement("img",{alt:c,src:"/assets/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))};var de=function(){var e=Object(ce.a)(le),t=Object(u.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(Q.a.mark((function e(){var a,n,r,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{books:n}});case 7:r=e.sent,c=r.data,c.addOrder.books.forEach((function(e){N("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null)};var pe=function(){var e=g(),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.filters,l=Object(C.a)(U),i=l.loading,s=l.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_FILTERS",filters:s.filters}),s.filters.forEach((function(e){N("filters","put",e)}))):i||N("filters","get").then((function(e){c({type:"UPDATE_FILTERS",filters:e})}))}),[s,i,c]),r.a.createElement("div",null,r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",null,r.a.createElement("button",{className:"filter-btn",key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_FILTER",currentFilter:t})}},e.name))}))))};a(89);var be=function(){return r.a.createElement("header",{className:"flex-row p-3"},r.a.createElement("h1",{className:"logo"},r.a.createElement(i.b,{to:"/"},"TEXTOS ANTIGUOS")),r.a.createElement("nav",null,V.loggedIn()?r.a.createElement("ul",{className:"under"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:function(){return V.logout()}},"Logout"))):r.a.createElement("ul",{className:"under"},r.a.createElement("li",{className:"spacing"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"spacing"},r.a.createElement(i.b,{to:"/login"},"Login"))),r.a.createElement(pe,null)))},fe=Object(h.a)({uri:"/graphql"}),Ee=Object(y.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),ve=new O.a({link:Ee.concat(fe),cache:new k.a});var ge=function(){return r.a.createElement(j.a,{client:ve},r.a.createElement(i.a,null,r.a.createElement("div",{className:"row h-100 page-bg"},r.a.createElement(v,null,r.a.createElement("div",{className:"side-menu col-3 com-con"},r.a.createElement(be,null)),r.a.createElement("div",{className:" main-page col-9"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:z}),r.a.createElement(s.a,{exact:!0,path:"/login",component:se}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:ue}),r.a.createElement(s.a,{exact:!0,path:"/orderHistory",component:me}),r.a.createElement(s.a,{exact:!0,path:"/books/:id",component:ae}),r.a.createElement(s.a,{exact:!0,path:"/success",component:de}),r.a.createElement(s.a,{component:ne})))))))},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(90),a(91);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Oe(t,e)}))}}()}},[[75,1,2]]]);
//# sourceMappingURL=main.625fea4c.chunk.js.map