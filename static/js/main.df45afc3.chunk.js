(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},30:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=(n(30),n(42)),l=n(44),u=n(43),m=(n(32),n(8)),d=n(3),s=n(4),p=n(6),h=n(5),g=n(7),b=n(41),f=n(9),v=Object(a.createContext)(),E=v.Consumer,w=v.Provider,x=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={on:!1},n.toggle=function(){n.setState(function(e){return{on:!e.on}})},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return(0,this.props.children)({on:this.state.on,toggle:this.toggle})}}]),t}(a.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.props.name){case"close":return r.a.createElement("svg",{x:"0px",y:"0px",width:"18px",height:"18px",viewBox:"0 0 31.11 31.11",enableBackground:"new 0 0 31.11 31.11"},r.a.createElement("polygon",{fill:this.props.color,points:"31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "}));case"check":return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"60px",height:"60px",viewBox:"0 0 31.11 31.11",enableBackground:"new 0 0 31.11 31.11",fill:this.props.color},r.a.createElement("g",{"data-name":"checkmark"},r.a.createElement("rect",{width:"24px",height:"24px",opacity:"0"}),r.a.createElement("path",{d:"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"})));case"remove":return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"60px",height:"60px",viewBox:"0 0 31.11 31.11",enableBackground:"new 0 0 31.11 31.11",fill:this.props.color},r.a.createElement("g",{"data-name":"Layer 2"},r.a.createElement("g",{"data-name":"close"},r.a.createElement("rect",{width:"18",height:"18",transform:"rotate(180 12 12)",opacity:"0"}),r.a.createElement("path",{d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"}))));case"edit":return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"60px",height:"60px",viewBox:"0 0 31.11 31.11",enableBackground:"new 0 0 31.11 31.11",fill:this.props.color},r.a.createElement("g",{"data-name":"Layer 2"},r.a.createElement("g",{"data-name":"edit-2"},r.a.createElement("rect",{width:"24",height:"24",opacity:"0"}),r.a.createElement("path",{d:"M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"}),r.a.createElement("path",{d:"M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"}))));case"back":return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"60px",height:"60px",viewBox:"0 0 31.11 31.11",enableBackground:"new 0 0 31.11 31.11",fill:this.props.color},r.a.createElement("g",{"data-name":"Layer 2"},r.a.createElement("g",{"data-name":"arrow-back"},r.a.createElement("rect",{width:"24",height:"24",transform:"rotate(90 12 12)",opacity:"0"}),r.a.createElement("path",{d:"M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"}))));default:return null}}}]),t}(a.Component);function k(){var e=Object(m.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: black;\n  opacity: 0.5;\n"]);return k=function(){return e},e}function j(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background: transparent;\n  padding: 10px;\n"]);return j=function(){return e},e}function _(){var e=Object(m.a)(["\n  position: relative;\n  min-width: 320px;\n  z-index: 10;\n  margin-bottom: 100px;\n  background: white;\n  border-radius: 5px;\n  padding: 15px;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);\n"]);return _=function(){return e},e}function O(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return O=function(){return e},e}y.defaultProps={color:"red"};var C=document.getElementById("modal"),N=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).componentDidMount=function(){return C.appendChild(e.el)},e.componentWillUnmount=function(){return C.removeChild(e.el)},e.el=document.createElement("div"),e}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(e,this.el)}}]),t}(a.Component),A=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.toggle,a=e.on;return r.a.createElement(N,null,a&&r.a.createElement(S,null,r.a.createElement(B,null,r.a.createElement(F,{onClick:n},r.a.createElement(y,{name:"close"})),r.a.createElement("div",null,t)),r.a.createElement(D,{onClick:n})))}}]),t}(a.Component),S=f.a.div(O()),B=f.a.div(_()),F=f.a.button(j()),D=f.a.div(k());function L(){var e=Object(m.a)(["\n  width: 100px;\n  height: 100px;\n  clip-path: circle(50% at 50% 50%);\n  margin: 0 auto;\n  img {\n    width: 100px;\n    min-height: 100px;\n    object-fit: cover;\n  }\n"]);return L=function(){return e},e}function M(){var e=Object(m.a)(["\n  margin: 1em auto;\n  padding: 0.5em;\n  background: whitesmoke;\n  width: 80%;\n  border-radius: 5px;\n  color: black;\n\n  div#details {\n    text-align: center;\n    padding: 0.6em;\n  }\n\n  .button-group {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin: 0 auto;\n\n    button {\n      padding: 0.5em;\n      color: white;\n      width: 60px;\n      margin: 0 1em;\n      border: none;\n      border-radius: 2px;\n      &:hover {\n        transform: scale(1.2);\n        transition-duration: 300ms;\n        cursor: pointer;\n      }\n    }\n\n    #remove {\n      background: red;\n    }\n\n    #edit {\n      background: teal;\n    }\n  }\n"]);return M=function(){return e},e}var z=function(e){var t=e.name,n=e.img,o=e.email,c=e.number,i=e.id;return r.a.createElement(E,null,function(e){var l=e.remove;return r.a.createElement(I,{className:"drop-shadow"},r.a.createElement(V,null,r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{id:"details"},r.a.createElement("h3",null,t),r.a.createElement("small",null,o),r.a.createElement("br",null),r.a.createElement("small",null,c)),r.a.createElement("div",{className:"button-group"},r.a.createElement(b.a,{to:"/".concat(i)},r.a.createElement("button",{id:"edit"},"Edit")),r.a.createElement(x,null,function(e){var n=e.on,o=e.toggle;return r.a.createElement(a.Fragment,null,r.a.createElement(b.a,{to:"#"},r.a.createElement("button",{id:"remove",onClick:o},"Remove")),r.a.createElement(A,{on:n,toggle:o},r.a.createElement("h3",null,"Are you sure you want to delete ",t,"'s contact?"),r.a.createElement("div",{className:"button-group",style:{textAlign:"center"}},r.a.createElement(H,{style:{background:"transparent",display:"inline-block",margin:"1em"},onClick:function(){l(i),o()}},r.a.createElement(y,{name:"check",color:"green"})),r.a.createElement(H,{style:{background:"transparent",display:"inline-block",margin:"1em"},onClick:o},r.a.createElement(y,{name:"remove",color:"red"})))))})))})},I=f.a.div(M()),V=f.a.div(L());function J(){var e=Object(m.a)(["\n  background: lightslategray;\n  color: whitesmoke;\n  padding: 0.7em;\n  width: 15%;\n  border: none;\n  border-radius: 2px;\n  display: block;\n  margin: 1em auto;\n  &:hover {\n    background: hsl(0, 100%, 71%);\n    color: whitesmoke;\n    cursor: pointer;\n  }\n"]);return J=function(){return e},e}function T(){var e=Object(m.a)(["\n  margin: 1.5em auto;\n  text-align: center;\n"]);return T=function(){return e},e}function G(){var e=Object(m.a)(["\n  margin: 0 auto;\n  color: whitesmoke;\n  padding: 1.5em;\n  background: #282c34;\n  #contacts {\n    display: grid;\n    grid-template-columns: repeat(4, .8fr);\n  }\n"]);return G=function(){return e},e}var $=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,function(e){var t=e.contacts;return r.a.createElement(P,null,r.a.createElement(U,null,r.a.createElement("h1",null,"Contacts")),r.a.createElement(b.a,{to:"/add"},r.a.createElement(H,{style:{width:"auto"},className:"shadow"},"Add contact")),r.a.createElement("div",{id:"contacts",className:"drop-shadow"},t.map(function(e){return r.a.createElement(z,{key:e.id,name:e.name,email:e.email,img:e.image_url,number:e.phone_number,id:e.id})})))})}}]),t}(a.Component),P=f.a.div(G()),U=f.a.div(T()),H=f.a.button(J());function K(){var e=Object(m.a)(["\n  width: 120px;\n  display: inline-block;\n  margin: 0 1em;\n  background: ",";\n  padding: 0.5em;\n  border-radius: 4px;\n  a {\n    color: black;\n  }\n"]);return K=function(){return e},e}function R(){var e=Object(m.a)(["\n  margin: 1.5em auto;\n  padding: 1em;\n  border: 2px solid black;\n  border-radius: 5px;\n  background: whitesmoke;\n  color: black;\n  width: 50%;\n  justify-content: center;\n\n  svg {\n    margin-top: 10px;\n    &:hover {\n      cursor: default;\n    }\n  }\n\n  h1 {\n    text-align: center;\n  }\n\n  #form-add,\n  #form-edit {\n    margin: 0 auto;\n    justify-content: center;\n    padding: 0 1em;\n  }\n\n  #form-add label {\n    margin-left: 1.8em;\n  }\n\n  input {\n    display: block;\n    margin: 1.5em auto;\n    padding: 0.5em;\n    width: 80%;\n  }\n\n  #default-img {\n    width: auto;\n    padding: 0.4em;\n    background: lightgreen;\n    border-radius: 4px;\n    margin-left: 6px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return R=function(){return e},e}var W=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={id:Math.round(1e8*Math.random()),name:"",email:"",phone_number:"",image_url:"",contactAdded:!1},n.handleSubmit=function(e){e.preventDefault(),n.contactForm.reset()},n.isValidEmail=function(e){/^[^@]+@[^@.]+\.[a-z]+$/i.test(e)||alert("please enter a valid email")},n.formatNumber=function(e){var t=e.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");n.number.value=t},n.addContact=function(){return n.state.contactAdded?null:n.setState({contactAdded:!0})},n.useDefaultImg=function(e){e.preventDefault(),n.setState({image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg/200px-Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg"},function(){console.log(n.state),n.image.defaultValue=n.state.image_url})},n.handleName=function(e){return n.setState({name:e.target.value})},n.handleEmail=function(e){return n.setState({email:e.target.value})},n.handleNumber=function(e){return n.setState({phone_number:e.target.value})},n.handleImage=function(e){return n.setState({image_url:e.target.value})},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E,null,function(t){var n=t.add;return r.a.createElement(q,{onSubmit:function(t){return e.handleSubmit(t)},ref:function(t){return e.contactForm=t}},r.a.createElement("h1",null,"New Contact"),r.a.createElement(b.a,{to:"/",style:{position:"absolute",top:40}},r.a.createElement(y,{name:"back",color:"black"})),r.a.createElement("hr",null),r.a.createElement("div",{id:"form-add"},r.a.createElement("label",{htmlFor:"name"},"Contact Name"),r.a.createElement("input",{type:"text",placeholder:"name",onChange:e.handleName}),r.a.createElement("label",{htmlFor:"email"},"Contact Email"),r.a.createElement("input",{type:"email",placeholder:"email",onChange:e.handleEmail,onBlur:function(){return e.isValidEmail(e.state.email)}}),r.a.createElement("label",{htmlFor:"number"},"Contact Number"),r.a.createElement("input",{type:"text",placeholder:"number",onChange:e.handleNumber,ref:function(t){return e.number=t},onBlur:function(){return e.formatNumber(e.number.value)}}),r.a.createElement("label",{htmlFor:"image"},"Contact Image"),r.a.createElement("button",{id:"default-img",onClick:e.useDefaultImg},"use default image"),r.a.createElement("input",{type:"text",placeholder:"image",onChange:e.handleImage,ref:function(t){return e.image=t}})),r.a.createElement("div",{className:"button-group",style:{textAlign:"center"}},r.a.createElement(Q,{type:"submit",color:"lightblue",onClick:function(){e.addContact(),n(e.state)}},"Add"),e.state.contactAdded&&r.a.createElement(Q,{color:"lightgreen"},r.a.createElement(b.a,{to:"/"},"Return to contacts"))))})}}]),t}(a.Component),q=f.a.form(R()),Q=f.a.button(K(),function(e){return e.color}),X=n(23),Y=function(e){var t=e.reduce(function(e,t){return e[t.name]=t.value!==t.defaultValue?t.value:t.defaultValue,e},{});return{name:t.name,email:t.email,phone_number:t.phone_number,image_url:t.image_url}},Z=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone_number:"",image_url:""},n.collectState=function(){var e=Object(X.a)(n.contactForm.querySelectorAll("input")),t=Y(e),a=t.name,r=t.email,o=t.phone_number,c=t.image_url;n.setState({name:a,email:r,phone_number:o,image_url:c},function(){return n.props.update(n.state)})},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.email,o=t.phone_number,c=t.image_url;return r.a.createElement(q,{onSubmit:function(e){return e.preventDefault()},ref:function(t){return e.contactForm=t}},r.a.createElement("h4",null,"Editting ",n,"'s contact"),r.a.createElement(V,null,r.a.createElement("img",{src:c,alt:"contact"})),r.a.createElement(y,{name:"edit",color:"teal"}),r.a.createElement("div",{id:"form-edit"},r.a.createElement("input",{type:"text",name:"name",defaultValue:n,autoFocus:!0}),r.a.createElement("input",{type:"email",name:"email",defaultValue:a}),r.a.createElement("input",{type:"text",name:"phone_number",defaultValue:o}),r.a.createElement("input",{type:"text",name:"image_url",defaultValue:c}),r.a.createElement(H,{style:{width:"auto"},type:"button",onClick:this.collectState},"Finish editing")),r.a.createElement(b.a,{to:"/"},r.a.createElement(H,{style:{background:"teal",width:"auto"}},"Return to contacts")))}}]),t}(a.Component);function ee(){var e=Object(m.a)(["\n  margin: 0 auto;\n  padding: 1em;\n  font-size: 1.5em;\n  text-align: center;\n\n  input {\n    width: 90%;\n  }\n"]);return ee=function(){return e},e}Z.getDerivedStateFromProps=function(e){return{id:e.id}};var te=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return r.a.createElement(E,null,function(t){var n=t.contacts,a=t.update,o=n.find(function(t){return t.id===Number(e)});return void 0!==o&&r.a.createElement(ne,{className:"drop-shadow"},r.a.createElement(Z,{id:Number(e),name:o.name,email:o.email,image_url:o.image_url,phone_number:o.phone_number,update:a}))})}}]),t}(a.Component),ne=f.a.div(ee()),ae=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[]},n.componentDidMount=function(){n.setState({contacts:n.dummyContacts})},n.removeContact=function(e){n.setState(function(t){return{contacts:t.contacts.filter(function(t){return t.id!==e})}})},n.addContact=function(e){n.setState(function(t){return{contacts:t.contacts.concat(e)}},function(){return console.log(n.state.contacts)})},n.updateContact=function(e){var t=n.state.contacts,a=t.find(function(t){return t.id===Number(e.id)}),r=t.map(function(t){return t.id===a.id?t=e:t});n.setState({contacts:r})},n.dummyContacts=[{id:70219577,name:"Albert Einstein",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKLxacs6mf33EYjU5tSXJJgx3byM7_Ut3UhED1mu7BNGOamBd3TTcToo",email:"aeinstein@example.com",phone_number:"15555555555"},{id:21030349,name:"Alan Turing",image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg",email:"turing@example.com",phone_number:"16666666666"},{id:70384954,name:"Isaac Newton",image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg",email:"newton@example.com",phone_number:"15588855555"},{id:703832904,name:"Benjamin Franklin",image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg/440px-Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg",email:"franklin@example.com",phone_number:"15588855577"}],n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w,{value:{contacts:this.state.contacts,remove:this.removeContact,add:this.addContact,update:this.updateContact}},this.props.children)}}]),t}(a.Component),re=function(){return r.a.createElement(ae,null,r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:$}),r.a.createElement(u.a,{path:"/add",component:W}),r.a.createElement(u.a,{path:"/:id",component:te}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.df45afc3.chunk.js.map