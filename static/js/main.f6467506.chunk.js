(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n(7),i=n.n(c),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))}),s=n(6),u=n(8),l=n(16),h=n(17),d=(n(29),n(18)),b=n(2),f=n(3),j=n(5),p=n(4),v="CHANGE_SEARCHFIELD",g="REQUEST_ROBOTS_PENDING",O="REQUEST_ROBOTS_SUCCESS",w="REQUEST_ROBOTS_FAILED",x=function(){return function(e){var t;e({type:g}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:O,payload:t})})).catch((function(t){return e({type:w,payload:t})}))}},m=function(e){var t=e.name,n=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200"),height:"200px",width:"200px",maxHeight:"200px",maxWidth:"200px"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},y=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(m,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},C=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{"aria-label":"Search Box",id:"searchBox",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},k=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={count:0},r}return Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("button",{id:"counter",color:this.props.color,onClick:function(){return e.setState((function(e){return{count:e.count+1}}))},children:["Count: ",this.state.count]})}}]),n}(o.Component),S=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(k,{})]})}}]),n}(o.Component),R=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},E=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(o.Component),F=(n(30),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).filterRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.isPending;return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(S,{}),Object(r.jsx)(C,{searchChange:t}),Object(r.jsx)(R,{children:n?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsx)(E,{children:Object(r.jsx)(y,{robots:this.filterRobots()})})})]})}}]),n}(o.Component)),P=(n(31),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(F,Object(d.a)({},this.props))})}}]),n}(o.Component)),L=Object(u.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:v,payload:n}));var n},onRequestRobots:function(){return e(x())}}}))(P),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U={searchField:""},W={robots:[],isPending:!1},B=Object(h.createLogger)(),A=Object(s.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object.assign({},e,{isPending:!0});case O:return Object.assign({},e,{robots:t.payload,isPending:!1});case w:return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{searchField:t.payload});default:return e}}}),_=Object(s.d)(A,Object(s.a)(l.a,B));i.a.render(Object(r.jsx)(u.a,{store:_,children:Object(r.jsx)(L,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-robofriends","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}(),a()}},[[32,1,2]]]);
//# sourceMappingURL=main.f6467506.chunk.js.map