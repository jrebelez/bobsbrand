(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/logo.1bc99912.png"},42:function(e,t,a){e.exports=a.p+"static/media/item1.def813c3.png"},43:function(e,t,a){e.exports=a.p+"static/media/item2.79079c74.png"},44:function(e,t,a){e.exports=a.p+"static/media/item3.ae630790.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/item4.21b5a536.png"},46:function(e,t,a){e.exports=a.p+"static/media/item5.80bc91d9.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/item6.ef21bdd8.jpg"},50:function(e,t,a){e.exports=a(71)},55:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),r=a.n(c),o=(a(55),a(11)),l=a(12),s=a(14),d=a(13),m=a(15),u=a(10),p=a(18),b=a(16),f=a(37),h=a.n(f),E=a(72),v=a(73),g=a(74),x=a(75),y=a(76),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(a)),a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(E.a,{style:{backgroundColor:"white"},expand:"md"},i.a.createElement(u.b,{to:"/"}," ",i.a.createElement("img",{src:h.a,width:"100px",height:"auto",alt:"bobsbrand"})),i.a.createElement(v.a,{onClick:this.toggle}),i.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(x.a,{className:"ml-auto",navbar:!0},i.a.createElement(y.a,null,i.a.createElement(u.b,{to:"/shop"},"Shop")),i.a.createElement(y.a,null,i.a.createElement(u.b,{to:"/cart"},i.a.createElement("i",{className:"fa fa-shopping-cart"})))))))}}]),t}(i.a.Component),j=a(17),I=a(41),N=a(77),k=a(78),C=a(79),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(b.a)(a)),a.previous=a.previous.bind(Object(b.a)(a)),a.goToIndex=a.goToIndex.bind(Object(b.a)(a)),a.onExiting=a.onExiting.bind(Object(b.a)(a)),a.onExited=a.onExited.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=this.props.items.map(function(t){return i.a.createElement(I.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.id},i.a.createElement("img",{src:t.img,style:{width:"400px"},alt:t.title}))});return i.a.createElement("div",{className:"container"},i.a.createElement(N.a,{activeIndex:t,next:this.next,previous:this.previous},i.a.createElement(k.a,{items:this.props.items,activeIndex:t,onClickHandler:this.goToIndex}),a,i.a.createElement(C.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(C.a,{direction:"next",directionText:"Next",onClickHandler:this.next})),i.a.createElement(u.b,{to:"/shop/"},i.a.createElement("button",{type:"button",className:"btn btn-primary"},"Shop our Collection ")))}}]),t}(n.Component),A=Object(j.b)(function(e){return{items:e.items}})(T),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(e){a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t){return i.a.createElement("div",{className:"card",style:{width:"22rem"},key:t.id},i.a.createElement("div",null,i.a.createElement("img",{className:"card-img-top",src:t.img,alt:t.title}),i.a.createElement("h3",{className:"card-title"},t.title," ")),i.a.createElement("div",{className:"card-text"},i.a.createElement("p",null,t.desc),i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",t.price,"$")),i.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){e.handleClick(t.id)}},"Add to Cart")))});return i.a.createElement("div",{className:"container"},i.a.createElement("h3",{className:"center-block"}," Fall Collection "),i.a.createElement("div",{className:"row"},t))}}]),t}(n.Component),Q=Object(j.b)(function(e){return{items:e.items}},function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}})(w),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleRemove=function(e){a.props.removeItem(e)},a.handleAddQuantity=function(e){a.props.addQuantity(e)},a.handleSubtractQuantity=function(e){a.props.subtractQuantity(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map(function(t){return i.a.createElement("li",{className:"media",key:t.id},i.a.createElement("img",{className:"mr-3",src:t.img,alt:t.title,style:{width:"300px"}}),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",{className:"mt-0 mb-1"},i.a.createElement("strong",null,t.title," ")),i.a.createElement("h6",null,i.a.createElement("strong",null,"Price: ",t.price,"$ ",i.a.createElement("span",{className:"text-muted"},"x"))),i.a.createElement("p",null,i.a.createElement("b",null,"Quantity: ",t.quantity)),i.a.createElement("div",{className:"add-remove"},i.a.createElement(u.b,{to:"/cart"},i.a.createElement("i",{className:"fa fa-sort-up",onClick:function(){e.handleAddQuantity(t.id)}})),i.a.createElement(u.b,{to:"/cart"},i.a.createElement("i",{className:"fa fa-sort-down",onClick:function(){e.handleSubtractQuantity(t.id)}}))),i.a.createElement("button",{className:"btn btn-primary ",onClick:function(){e.handleRemove(t.id)}},"Remove")))}):i.a.createElement("p",null,"Nothing.");return i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("h5",null,"You have ordered:"),i.a.createElement("ul",{className:"list-unstyled"},t),i.a.createElement("b",null,"Total: ",this.props.total," $")))}}]),t}(n.Component),M=Object(j.b)(function(e){return{items:e.addedItems,addedItems:e.addedItems,total:e.total}},function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}})(S),_=(a(68),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(O,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:A}),"                 ",i.a.createElement(p.a,{exact:!0,path:"/shop",component:Q}),i.a.createElement(p.a,{exact:!0,path:"/cart",component:M}))))}}]),t}(n.Component)),D=(a(69),a(70),a(48)),q=a(21),L=a(42),R=a.n(L),U=a(43),Y=a.n(U),H=a(44),J=a.n(H),B=a(45),P=a.n(B),$=a(46),V=a.n($),F=a(47),G=a.n(F),W={items:[{id:1,title:"Woof Hoodie",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:100,img:R.a},{id:2,title:"Sup T-Shirt",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:50,img:Y.a},{id:3,title:"Jordans",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:250,img:J.a},{id:4,title:"Adidas pants",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:70,img:P.a},{id:5,title:"Canada Goose",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:800,img:V.a},{id:6,title:"Levi Jeans",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:55,img:G.a}],addedItems:[],total:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find(function(e){return e.id===t.id});if(e.addedItems.find(function(e){return t.id===e.id}))return a.quantity+=1,Object(q.a)({},e,{total:e.total+a.price});a.quantity=1;var n=e.total+a.price;return Object(q.a)({},e,{addedItems:[].concat(Object(D.a)(e.addedItems),[a]),total:n})}if("REMOVE_ITEM"===t.type){var i=e.addedItems.find(function(e){return t.id===e.id}),c=e.addedItems.filter(function(e){return t.id!==e.id}),r=e.total-i.price*i.quantity;return console.log(i),Object(q.a)({},e,{addedItems:c,total:r})}if("ADD_QUANTITY"===t.type){var o=e.items.find(function(e){return e.id===t.id});o.quantity+=1;var l=e.total+o.price;return Object(q.a)({},e,{total:l})}if("SUB_QUANTITY"===t.type){var s=e.items.find(function(e){return e.id===t.id});if(1===s.quantity){var d=e.addedItems.filter(function(e){return e.id!==t.id}),m=e.total-s.price;return Object(q.a)({},e,{addedItems:d,total:m})}s.quantity-=1;var u=e.total-s.price;return Object(q.a)({},e,{total:u})}return e},K=a(27),X=Object(K.b)(z);r.a.render(i.a.createElement(j.a,{store:X},i.a.createElement(_,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a110f140.chunk.js.map