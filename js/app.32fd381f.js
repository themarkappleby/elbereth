(function(e){function n(n){for(var a,o,c=n[0],s=n[1],d=n[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var s=t[c];0!==i[s]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},i={app:0},r=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/elbereth/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var p=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("6868")},"034f":function(e,n,t){"use strict";var a=t("e6d4"),i=t.n(a);i.a},"067d":function(e,n,t){e.exports=t.p+"img/InvNoCoin.c011d9bb.png"},"0e6d":function(e,n,t){"use strict";var a=t("f714"),i=t.n(a);i.a},"1c74":function(e,n,t){"use strict";var a=t("482c"),i=t.n(a);i.a},"1f69":function(e,n,t){"use strict";var a=t("9e69"),i=t.n(a);i.a},"217a":function(e,n,t){e.exports=t.p+"img/Open.80f2237f.png"},"22c7":function(e,n,t){e.exports=t.p+"img/InvNoHelm.c51f2cfa.png"},"2be3":function(e,n,t){e.exports=t.p+"img/wood.6ca97484.jpg"},"30ad":function(e,n,t){e.exports=t.p+"img/Staff.23929926.png"},"30e8":function(e,n,t){e.exports=t.p+"img/InvNoArmor.a965b034.png"},3119:function(e,n,t){e.exports=t.p+"img/InvBow.9de84706.png"},"3d57":function(e,n,t){e.exports=t.p+"img/Descend.3ee5a890.png"},"3dfd":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Map"),t("HUD")],1)},i=[],r=(t("9eec"),t("04ca"),t("fc30"),t("4dc8"),t("8dcc"),t("aa12"),t("4809"),t("e821")),o=t("bd56"),c=t("3777"),s=t("2f62");function d(e){var n=[];e.map.forEach((function(t){(t.safe||t.flipped)&&[[t.x,t.y-1],[t.x,t.y+1],[t.x-1,t.y],[t.x+1,t.y]].forEach((function(t,a){f(t[0],t[1],e.map)||p(t[0],t[1],a,e)&&n.push(t)}))})),n.length&&d(e)}function p(e,n,t,a){if(a.deck.length){var i=a.deck.pop();if(i)return i.x=e,i.y=n,a.map.push(i),!0}return!1}function f(e,n,t){var a=null;return t.forEach((function(t){e===t.x&&n===t.y&&(a=t)})),a}c["a"].use(s["a"]);var l={name:"Entrance",id:"entrance",safe:!0,x:0,y:0,flipped:!1},u={name:"Descend",id:"descend",safe:!0,flipped:!1,x:1,y:0},m={name:"Dragon",id:"dragon",strength:6,type:"boss",flipped:!1,safe:!1,x:0,y:0},g=new s["a"].Store({state:{die:0,floor:1,forceHUD:!1,requiredStrength:0,engaged:null,shopping:!1,map:[l],deck:[u,m].concat(Object(o["a"])(v("Rat",12,{safe:!1,strength:3})),Object(o["a"])(v("Spider",12,{safe:!1,strength:4})),Object(o["a"])(v("Snake",12,{safe:!1,strength:5})),Object(o["a"])(v("Wall",15,{safe:!1})),Object(o["a"])(v("Shop",3,{safe:!0})),Object(o["a"])(v("Coin",3,{safe:!0,flipped:!1,type:"item",x:0,y:0})),[{name:"Sword",id:"sword",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Staff",id:"staff",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Bow",id:"bow",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Helm",id:"helm",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Gauntlets",id:"gauntlets",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Armor",id:"armor",safe:!0,flipped:!1,type:"item",x:0,y:0}]),inv:{sword:{name:"Sword",type:"weapon",inv:!0,flipped:!1,discarded:!1},staff:{name:"Staff",type:"weapon",inv:!0,flipped:!0,discarded:!1},bow:{name:"Bow",type:"weapon",inv:!0,flipped:!0,discarded:!1},armor:{name:"Armor",type:"armor",inv:!0,flipped:!1,discarded:!1},gauntlets:{name:"Gauntlets",type:"armor",inv:!0,flipped:!0,discarded:!1},helm:{name:"Helm",type:"armor",inv:!0,flipped:!0,discarded:!1},coin:{name:"Coin",inv:!0,flipped:!0},key:{name:"Key",inv:!0,flipped:!0}}},mutations:{shuffle:function(e){for(var n=e.deck.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=[e.deck[t],e.deck[n]];e.deck[n]=a[0],e.deck[t]=a[1]}},explore:function(e){d(e)},setStrength:function(e,n){e.requiredStrength=n.strength},forceHUD:function(e){e.forceHUD=!0},releaseHUD:function(e){e.forceHUD=!1},startShopping:function(e){e.shopping=!0},stopShopping:function(e){e.shopping=!1},engage:function(e,n){e.engaged=n.card},flip:function(e,n){n.card.flipped=!n.card.flipped},roll:function(e){e.die=Math.floor(6*Math.random())+1},increaseDie:function(e){e.die+=1},discard:function(e,n){n.card.discarded=!0}},actions:{descend:function(e){var n=e.commit,t=e.state;t.inv.key.flipped=!0,t.map=t.map.filter((function(e){return"Entrance"!==e.name&&"Descend"!==e.name&&"boss"!==e.type})),t.deck=t.deck.filter((function(e){return"Entrance"!==e.name&&"Descend"!==e.name&&"boss"!==e.type})),t.deck=[].concat(Object(o["a"])(t.deck),Object(o["a"])(t.map)),n("shuffle"),t.deck=[].concat(Object(o["a"])(t.deck.splice(7)),[m,u]),n("shuffle"),t.deck.forEach((function(e){e.x=0,e.y=0,e.flipped=!1})),console.log(t.deck),t.map=[l],t.floor+=1,window.recenter(),n("explore")}}});function v(e,n,t){for(var a=[],i=1;i<=n;i++)a.push(Object(r["a"])({name:e,flipped:!1,id:"".concat(e,"-").concat(i),safe:!1,x:0,y:0},t));return a}var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"map"},[t("div",{staticClass:"map-inner",style:e.wood},e._l(e.map,(function(n){return t("Card",{key:n.id,attrs:{card:n},on:{click:e.click}})})),1)])},y=[],b=(t("2cff"),t("9cb7"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"card",staticClass:"card",class:{flipped:e.flipped,safe:e.safe,inv:e.inv,engaged:e.engaged,boss:e.boss,descend:e.descend},style:e.pos,on:{click:function(n){return e.$emit("click",n,e.card)}}},[t("div",{staticClass:"card-front",style:e.frontImage},[t("Die",{attrs:{value:e.card.strength,size:"small"}})],1),t("div",{staticClass:"card-back",style:e.backImage})])}),w=[];function x(e,n,t,a){var i=window.map.width/2,r=window.map.height/2,o=8;return{x:i+e*(t+o),y:r+n*(a+o)}}var k=x,S=t("8b13"),C=t.n(S),I=t("3d57"),D=t.n(I),H=t("df1a"),O=t.n(H),_=t("abae"),j=t.n(_),U=t("fea3"),E=t.n(U),N=t("79fe"),M=t.n(N),A=t("d803"),q=t.n(A),B=t("44bb"),G=t.n(B),T=t("f9e9"),W=t.n(T),$=t("30ad"),P=t.n($),z=t("acd6"),K=t.n(z),L=t("6aef"),R=t.n(L),Y=t("f48e"),J=t.n(Y),F=t("551e"),Q=t.n(F),V=t("eaed"),X=t.n(V),Z=t("217a"),ee=t.n(Z),ne=t("4709"),te=t.n(ne),ae=t("65ca"),ie=t.n(ae),re=t("3119"),oe=t.n(re),ce=t("d301"),se=t.n(ce),de=t("7785"),pe=t.n(de),fe=t("8f62"),le=t.n(fe),ue=t("42d2"),me=t.n(ue),ge=t("df67"),ve=t.n(ge),he=t("64d7"),ye=t.n(he),be=t("f350"),we=t.n(be),xe=t("30e8"),ke=t.n(xe),Se=t("cf47"),Ce=t.n(Se),Ie=t("22c7"),De=t.n(Ie),He=t("067d"),Oe=t.n(He),_e={Entrance:C.a,Descend:D.a,Shop:O.a,Wall:j.a,Rat:E.a,Spider:M.a,Snake:q.a,Dragon:G.a,Sword:W.a,Staff:P.a,Bow:K.a,Armor:R.a,Gauntlets:J.a,Helm:Q.a,Coin:X.a,Open:ee.a,InvSword:te.a,InvStaff:ie.a,InvBow:oe.a,InvArmor:se.a,InvGauntlets:pe.a,InvHelm:le.a,InvCoin:me.a,InvNoSword:ve.a,InvNoStaff:ye.a,InvNoBow:we.a,InvNoGauntlets:Ce.a,InvNoHelm:De.a,InvNoCoin:Oe.a,InvNoArmor:ke.a},je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.value?t("div",{staticClass:"die",class:e.dieClass},[t("span",{staticClass:"pip"}),t("span",{staticClass:"pip"}),t("span",{staticClass:"pip"}),t("span",{staticClass:"pip"}),t("span",{staticClass:"pip"}),t("span",{staticClass:"pip"})]):e._e()},Ue=[],Ee={props:["value","size"],computed:{dieClass:function(){var e={};return e["die-".concat(this.value)]=!0,this.size&&(e["die-".concat(this.size)]=!0),e}}},Ne=Ee,Me=(t("1f69"),t("95c6")),Ae=Object(Me["a"])(Ne,je,Ue,!1,null,"6fde5a48",null),qe=Ae.exports,Be={components:{Die:qe},props:["card"],data:function(){return{pos:{}}},mounted:Ge,watch:{card:{handler:Ge,deep:!0}},computed:{flipped:function(){return this.card.flipped},safe:function(){return this.card.safe},inv:function(){return this.card.inv},boss:function(){return"boss"===this.card.type},descend:function(){return"descend"===this.card.id},engaged:function(){return!!g.state.engaged&&this.card.id===g.state.engaged.id},frontImage:function(){return this.card.inv?{backgroundImage:"url(".concat(_e["Inv"+this.card.name],")")}:{backgroundImage:"url(".concat(_e[this.card.name],")")}},backImage:function(){return this.card.inv?{backgroundImage:"url(".concat(_e["InvNo"+this.card.name],")")}:{backgroundImage:"url(".concat(_e.Open,")")}}}};function Ge(){if(!this.card.inv){var e=this.$refs.card.clientWidth,n=this.$refs.card.clientHeight,t=k(this.card.x,this.card.y,e,n);this.pos={left:"".concat(t.x,"px"),top:"".concat(t.y,"px"),marginLeft:"-".concat(e/2,"px"),marginTop:"-".concat(n/2,"px")}}}var Te=Be,We=(t("0e6d"),Object(Me["a"])(Te,b,w,!1,null,"334ae638",null)),$e=We.exports,Pe=t("2be3"),ze=t.n(Pe);window.map={width:5e3,height:5e3},window.recenter=function(){var e=document.querySelector(".map-inner");e.style.width=window.map.width+"px",e.style.height=window.map.height+"px",document.querySelector(".map").scrollTo(window.map.width/2-window.innerWidth/2,window.map.height/2-window.innerHeight/2+50)};var Ke={components:{Card:$e},mounted:function(){window.recenter()},computed:{map:function(){return g.state.map},wood:function(){return{backgroundImage:"url(".concat(ze.a,")")}}},methods:{click:function(e,n){if(n.flipped)return!1;if(g.state.forceHUD)return!1;if(g.state.engaged&&g.state.engaged.id===n.id)return!1;var t=n.strength;if(t)g.commit("roll"),g.state.die>=t?(g.commit({type:"flip",card:n}),g.commit("explore"),"boss"===n.type&&(g.commit("flip",{card:g.state.inv.key}),7===g.state.floor&&window.setTimeout((function(){alert("Congratulations! You Won!"),window.location.reload()}),500))):(g.commit({type:"setStrength",strength:t}),g.commit("forceHUD"),g.commit({type:"engage",card:n}),Le(g.state.inv)&&window.setTimeout((function(){alert("You Lose. Try Again."),window.location.reload()}),500));else if("item"===n.type){var a=g.state.inv[n.name.toLowerCase()];a&&a.flipped&&(g.commit({type:"flip",card:n}),g.commit({type:"flip",card:a}))}else if("Wall"===n.name){g.commit({type:"flip",card:n}),g.commit("explore");var i=Math.floor(6*Math.random())+1,r=["sword","staff","bow","armor","helm","gauntlets"],o=r[i-1];g.state.inv[o].flipped?g.commit({type:"discard",card:g.state.inv[o]}):g.commit({type:"flip",card:g.state.inv[o]})}else"Shop"===n.name?g.state.inv.coin.flipped||(g.commit({type:"flip",card:g.state.inv.coin}),g.commit("forceHUD"),g.commit("startShopping")):"descend"!==n.id||g.state.inv.key.flipped||g.dispatch("descend")}}};function Le(e){var n=!0;return Object.keys(e).forEach((function(t){!1===e[t].discarded&&(n=!1)})),n}var Re=Ke,Ye=(t("c723"),Object(Me["a"])(Re,h,y,!1,null,"cd04af02",null)),Je=Ye.exports,Fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"HUD"},[t("Die",{attrs:{value:e.die}}),t("div",{staticClass:"remaining"},[t("div",{staticClass:"remaining-floor"},[e._v(" Floor "+e._s(e.floor)+" of "+e._s(e.floors)+" ")]),t("div",{staticClass:"remaining-cards"},[e._v(" Cards "+e._s(e.seenCards)+" of "+e._s(e.totalCards)+" ")])]),t("div",{staticClass:"overlay",class:{force:e.forceHUD}}),t("div",{staticClass:"cards",class:{force:e.forceHUD}},[e.inv.sword.discarded?e._e():t("Card",{attrs:{card:e.inv.sword},on:{click:e.click}}),e.inv.staff.discarded?e._e():t("Card",{attrs:{card:e.inv.staff},on:{click:e.click}}),e.inv.bow.discarded?e._e():t("Card",{attrs:{card:e.inv.bow},on:{click:e.click}}),e.inv.armor.discarded?e._e():t("Card",{attrs:{card:e.inv.armor},on:{click:e.click}}),e.inv.helm.discarded?e._e():t("Card",{attrs:{card:e.inv.helm},on:{click:e.click}}),e.inv.gauntlets.discarded?e._e():t("Card",{attrs:{card:e.inv.gauntlets},on:{click:e.click}}),t("Card",{attrs:{card:e.inv.coin},on:{click:e.click}}),t("Card",{attrs:{card:e.inv.key},on:{click:e.click}})],1)],1)},Qe=[],Ve={components:{Card:$e,Die:qe},methods:{click:function(e,n){g.state.shopping?n.flipped&&"Key"!==n.name&&(g.commit({type:"flip",card:n}),g.commit("stopShopping"),g.commit("releaseHUD")):g.state.forceHUD&&(n.flipped?"Coin"!==n.name&&"Key"!==n.name&&(g.commit({type:"discard",card:n}),g.commit("releaseHUD"),g.commit("engage",{card:null}),g.commit({type:"setStrength",requiredStrength:0})):(g.commit({type:"flip",card:n}),"armor"===n.type?(g.commit("releaseHUD"),g.commit("engage",{card:null}),g.commit({type:"setStrength",requiredStrength:0})):"weapon"===n.type&&(g.commit("increaseDie"),g.state.die>=g.state.requiredStrength&&(g.commit({type:"setStrength",requiredStrength:0}),g.commit({type:"flip",card:g.state.engaged}),g.commit("releaseHUD"),g.commit("explore"),"boss"===g.state.engaged.type&&(g.commit("flip",{card:g.state.inv.key}),7===g.state.floor&&window.setTimeout((function(){alert("Congratulations! You Won!"),window.location.reload()}),500)),g.commit("engage",{card:null})))))}},data:function(){return{floors:(g.state.deck.length+g.state.map.length-3)/7+1}},computed:{inv:function(){return g.state.inv},floor:function(){return g.state.floor},seenCards:function(){return g.state.map.length},totalCards:function(){return g.state.deck.length+g.state.map.length},forceHUD:function(){return g.state.forceHUD},die:function(){return g.state.die}}},Xe=Ve,Ze=(t("1c74"),Object(Me["a"])(Xe,Fe,Qe,!1,null,"41044b85",null)),en=Ze.exports;g.commit("shuffle"),g.commit("explore");var nn={components:{Map:Je,HUD:en}},tn=nn,an=(t("034f"),Object(Me["a"])(tn,a,i,!1,null,null,null));n["a"]=an.exports},"42d2":function(e,n,t){e.exports=t.p+"img/InvCoin.7bfe2ac2.png"},"44bb":function(e,n,t){e.exports=t.p+"img/Dragon.db0e4d44.png"},4709:function(e,n,t){e.exports=t.p+"img/InvSword.26ad09da.png"},"482c":function(e,n,t){},"551e":function(e,n,t){e.exports=t.p+"img/Helm.fbd1e333.png"},"64d7":function(e,n,t){e.exports=t.p+"img/InvNoStaff.095c2dfd.png"},"65ca":function(e,n,t){e.exports=t.p+"img/InvStaff.b7c7e999.png"},"6aef":function(e,n,t){e.exports=t.p+"img/Armor.d916f67d.png"},7785:function(e,n,t){e.exports=t.p+"img/InvGauntlets.fba8797f.png"},"79fe":function(e,n,t){e.exports=t.p+"img/Spider.becbcd09.png"},"8b13":function(e,n,t){e.exports=t.p+"img/Entrance.07882ae7.png"},"8f62":function(e,n,t){e.exports=t.p+"img/InvHelm.08ade446.png"},"9e69":function(e,n,t){},abae:function(e,n,t){e.exports=t.p+"img/Wall.975a122a.png"},acd6:function(e,n,t){e.exports=t.p+"img/Bow.894bfb4d.png"},c723:function(e,n,t){"use strict";var a=t("d256"),i=t.n(a);i.a},cf47:function(e,n,t){e.exports=t.p+"img/InvNoGauntlets.b0045ce9.png"},d256:function(e,n,t){},d301:function(e,n,t){e.exports=t.p+"img/InvArmor.77b04f22.png"},d803:function(e,n,t){e.exports=t.p+"img/Snake.8353d8e9.png"},df1a:function(e,n,t){e.exports=t.p+"img/Shop.29cbf800.png"},df67:function(e,n,t){e.exports=t.p+"img/InvNoSword.df02dca5.png"},e6d4:function(e,n,t){},eaed:function(e,n,t){e.exports=t.p+"img/Coin.b5813e62.png"},f350:function(e,n,t){e.exports=t.p+"img/InvNoBow.058a16f3.png"},f48e:function(e,n,t){e.exports=t.p+"img/Gauntlets.285226b8.png"},f714:function(e,n,t){},f9e9:function(e,n,t){e.exports=t.p+"img/Sword.f5db9640.png"},fea3:function(e,n,t){e.exports=t.p+"img/Rat.4a84733b.png"}});
//# sourceMappingURL=app.32fd381f.js.map