(function(e){function n(n){for(var a,c,o=n[0],d=n[1],p=n[2],f=0,l=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&l.push(i[c][0]),i[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);s&&s(n);while(l.length)l.shift()();return r.push.apply(r,p||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,o=1;o<t.length;o++){var d=t[o];0!==i[d]&&(a=!1)}a&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},i={app:0},r=[];function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/elbereth/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=n,o=o.slice();for(var p=0;p<o.length;p++)n(o[p]);var s=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("6868")},"034f":function(e,n,t){"use strict";var a=t("e6d4"),i=t.n(a);i.a},"067d":function(e,n,t){e.exports=t.p+"img/InvNoCoin.c011d9bb.png"},"217a":function(e,n,t){e.exports=t.p+"img/Open.80f2237f.png"},"22c7":function(e,n,t){e.exports=t.p+"img/InvNoHelm.c51f2cfa.png"},"2be3":function(e,n,t){e.exports=t.p+"img/wood.6ca97484.jpg"},"30ad":function(e,n,t){e.exports=t.p+"img/Staff.23929926.png"},"30e8":function(e,n,t){e.exports=t.p+"img/InvNoArmor.a965b034.png"},3119:function(e,n,t){e.exports=t.p+"img/InvBow.9de84706.png"},"3d57":function(e,n,t){e.exports=t.p+"img/Descend.3ee5a890.png"},"3dfd":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Map"),t("HUD")],1)},i=[],r=(t("9eec"),t("04ca"),t("fc30"),t("4dc8"),t("8dcc"),t("aa12"),t("4809"),t("e821")),c=t("bd56"),o=t("3777"),d=t("2f62");function p(e){var n=[];e.map.forEach((function(t){(t.safe||t.flipped)&&[[t.x,t.y-1],[t.x,t.y+1],[t.x-1,t.y],[t.x+1,t.y]].forEach((function(t,a){f(t[0],t[1],e.map)||s(t[0],t[1],a,e)&&n.push(t)}))})),n.length&&p(e)}function s(e,n,t,a){if(a.deck.length){var i=a.deck.pop();if(i)return i.x=e,i.y=n,a.map.push(i),!0}return!1}function f(e,n,t){var a=null;return t.forEach((function(t){e===t.x&&n===t.y&&(a=t)})),a}o["a"].use(d["a"]);var l={name:"Entrance",id:"entrance",safe:!0,x:0,y:0,flipped:!1},u={name:"Descend",id:"descend",safe:!0,flipped:!1,x:1,y:0},m={name:"Dragon",id:"dragon",strength:6,type:"boss",flipped:!1,safe:!1,x:0,y:0},g=new d["a"].Store({state:{die:0,floor:1,forceHUD:!1,requiredStrength:0,engaged:null,shopping:!1,map:[l],deckSize:45,deck:[u,m].concat(Object(c["a"])(v("Rat",7,{safe:!1,strength:3})),Object(c["a"])(v("Spider",7,{safe:!1,strength:4})),Object(c["a"])(v("Snake",7,{safe:!1,strength:5})),Object(c["a"])(v("Shop",2,{safe:!0})),Object(c["a"])(v("Wall",12,{safe:!1})),[{name:"Sword",id:"sword",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Staff",id:"staff",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Bow",id:"bow",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Helm",id:"helm",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Gauntlets",id:"gauntlets",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Armor",id:"armor",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Coin",id:"coin",safe:!0,flipped:!1,type:"item",x:0,y:0}]),inv:{sword:{name:"Sword",type:"weapon",inv:!0,flipped:!1,discarded:!1},staff:{name:"Staff",type:"weapon",inv:!0,flipped:!0,discarded:!1},bow:{name:"Bow",type:"weapon",inv:!0,flipped:!0,discarded:!1},armor:{name:"Armor",type:"armor",inv:!0,flipped:!1,discarded:!1},gauntlets:{name:"Gauntlets",type:"armor",inv:!0,flipped:!0,discarded:!1},helm:{name:"Helm",type:"armor",inv:!0,flipped:!0,discarded:!1},coin:{name:"Coin",inv:!0,flipped:!0},key:{name:"Key",inv:!0,flipped:!0}}},mutations:{shuffle:function(e){for(var n=e.deck.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=[e.deck[t],e.deck[n]];e.deck[n]=a[0],e.deck[t]=a[1]}},explore:function(e){p(e)},setStrength:function(e,n){e.requiredStrength=n.strength},forceHUD:function(e){e.forceHUD=!0},releaseHUD:function(e){e.forceHUD=!1},startShopping:function(e){e.shopping=!0},stopShopping:function(e){e.shopping=!1},engage:function(e,n){e.engaged=n.card},flip:function(e,n){n.card.flipped=!n.card.flipped},roll:function(e){e.die=Math.floor(6*Math.random())+1},increaseDie:function(e){e.die+=1},discard:function(e,n){n.card.discarded=!0}},actions:{descend:function(e){var n=e.commit,t=e.state;t.inv.key.flipped=!0,t.map=t.map.filter((function(e){return"Entrance"!==e.name&&"Descend"!==e.name&&"boss"!==e.type})),t.deck=t.deck.filter((function(e){return"Entrance"!==e.name&&"Descend"!==e.name&&"boss"!==e.type})),t.deck=[].concat(Object(c["a"])(t.deck),Object(c["a"])(t.map)),n("shuffle"),t.deck=[].concat(Object(c["a"])(t.deck.splice(7)),[m,u]),n("shuffle"),t.deck.forEach((function(e){e.x=0,e.y=0,e.flipped=!1})),t.map=[l],t.deckSize=t.deck.length+1,t.floor+=1,window.recenter(),n("explore")}}});function v(e,n,t){for(var a=[],i=1;i<=n;i++)a.push(Object(r["a"])({name:e,flipped:!1,id:"".concat(e,"-").concat(i),safe:!1,x:0,y:0},t));return a}var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"map"},[t("div",{staticClass:"map-inner",style:e.wood},e._l(e.map,(function(n){return t("Card",{key:n.id,attrs:{card:n},on:{click:e.click}})})),1)])},y=[],b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card",class:{flipped:e.flipped,safe:e.safe,inv:e.inv,engaged:e.engaged,boss:e.boss,descend:e.descend},style:e.pos,on:{click:function(n){return e.$emit("click",n,e.card)}}},[t("div",{staticClass:"card-front",style:e.frontImage},[e.card.strength?t("div",{staticClass:"strength"},[e._v(" "+e._s(e.card.strength)+" ")]):e._e()]),t("div",{staticClass:"card-back",style:e.backImage})])},w=[];function x(e,n){var t=window.map.width/2,a=window.map.height/2,i=85,r=118,c=5;return{x:t+e*(i+c),y:a+n*(r+c)}}var k=x,S=t("8b13"),I=t.n(S),C=t("3d57"),_=t.n(C),D=t("df1a"),H=t.n(D),O=t("abae"),j=t.n(O),U=t("fea3"),N=t.n(U),E=t("79fe"),M=t.n(E),q=t("d803"),A=t.n(q),B=t("44bb"),G=t.n(B),P=t("f9e9"),W=t.n(P),$=t("30ad"),z=t.n($),K=t("acd6"),R=t.n(K),T=t("6aef"),J=t.n(T),F=t("f48e"),L=t.n(F),Q=t("551e"),V=t.n(Q),X=t("eaed"),Y=t.n(X),Z=t("217a"),ee=t.n(Z),ne=t("4709"),te=t.n(ne),ae=t("65ca"),ie=t.n(ae),re=t("3119"),ce=t.n(re),oe=t("d301"),de=t.n(oe),pe=t("7785"),se=t.n(pe),fe=t("8f62"),le=t.n(fe),ue=t("42d2"),me=t.n(ue),ge=t("df67"),ve=t.n(ge),he=t("64d7"),ye=t.n(he),be=t("f350"),we=t.n(be),xe=t("30e8"),ke=t.n(xe),Se=t("cf47"),Ie=t.n(Se),Ce=t("22c7"),_e=t.n(Ce),De=t("067d"),He=t.n(De),Oe={Entrance:I.a,Descend:_.a,Shop:H.a,Wall:j.a,Rat:N.a,Spider:M.a,Snake:A.a,Dragon:G.a,Sword:W.a,Staff:z.a,Bow:R.a,Armor:J.a,Gauntlets:L.a,Helm:V.a,Coin:Y.a,Open:ee.a,InvSword:te.a,InvStaff:ie.a,InvBow:ce.a,InvArmor:de.a,InvGauntlets:se.a,InvHelm:le.a,InvCoin:me.a,InvNoSword:ve.a,InvNoStaff:ye.a,InvNoBow:we.a,InvNoGauntlets:Ie.a,InvNoHelm:_e.a,InvNoCoin:He.a,InvNoArmor:ke.a},je={props:["card"],computed:{flipped:function(){return this.card.flipped},safe:function(){return this.card.safe},inv:function(){return this.card.inv},boss:function(){return"boss"===this.card.type},descend:function(){return"descend"===this.card.id},engaged:function(){return!!g.state.engaged&&this.card.id===g.state.engaged.id},pos:function(){if(void 0!==this.card.x&&void 0!==this.card.y){var e=k(this.card.x,this.card.y);return{left:"".concat(e.x,"px"),top:"".concat(e.y,"px")}}return{}},frontImage:function(){return this.card.inv?{backgroundImage:"url(".concat(Oe["Inv"+this.card.name],")")}:{backgroundImage:"url(".concat(Oe[this.card.name],")")}},backImage:function(){return this.card.inv?{backgroundImage:"url(".concat(Oe["InvNo"+this.card.name],")")}:{backgroundImage:"url(".concat(Oe.Open,")")}}}},Ue=je,Ne=(t("8efd"),t("95c6")),Ee=Object(Ne["a"])(Ue,b,w,!1,null,"723c18e3",null),Me=Ee.exports,qe=t("2be3"),Ae=t.n(qe);window.map={width:5e3,height:5e3},window.recenter=function(){var e=document.querySelector(".map-inner");e.style.width=window.map.width+"px",e.style.height=window.map.height+"px",document.querySelector(".map").scrollTo(window.map.width/2-window.innerWidth/2,window.map.height/2-window.innerHeight/2)};var Be={components:{Card:Me},mounted:function(){window.recenter()},computed:{map:function(){return g.state.map},wood:function(){return{backgroundImage:"url(".concat(Ae.a,")")}}},methods:{click:function(e,n){if(n.flipped)return!1;if(g.state.engaged&&g.state.engaged.id===n.id)return!1;var t=n.strength;if(t)g.commit("roll"),g.state.die>=t?(g.commit({type:"flip",card:n}),g.commit("explore"),"boss"===n.type&&g.commit("flip",{card:g.state.inv.key})):(g.commit({type:"setStrength",strength:t}),g.commit("forceHUD"),g.commit({type:"engage",card:n}));else if("item"===n.type){var a=g.state.inv[n.id];a&&a.flipped&&(g.commit({type:"flip",card:n}),g.commit({type:"flip",card:a}))}else if("Wall"===n.name){g.commit({type:"flip",card:n}),g.commit("explore");var i=Math.floor(6*Math.random())+1,r=["sword","staff","bow","armor","helm","gauntlets"],c=r[i-1];g.state.inv[c].flipped?g.commit({type:"discard",card:g.state.inv[c]}):g.commit({type:"flip",card:g.state.inv[c]})}else"Shop"===n.name?g.state.inv.coin.flipped||(g.commit({type:"flip",card:g.state.inv.coin}),g.commit("forceHUD"),g.commit("startShopping")):"descend"!==n.id||g.state.inv.key.flipped||g.dispatch("descend")}}},Ge=Be,Pe=(t("667a"),Object(Ne["a"])(Ge,h,y,!1,null,"0625a06c",null)),We=Pe.exports,$e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"HUD"},[e.die?t("div",{staticClass:"die"},[e._v(e._s(e.die))]):e._e(),t("div",{staticClass:"remaining"},[t("span",[e._v(e._s(e.remaining)+" / "+e._s(e.total))]),t("span",{staticClass:"floor"},[e._v("Floor "+e._s(e.floor))])]),t("div",{staticClass:"cards",class:{force:e.forceHUD}},[t("div",{staticClass:"group left"},[e.inv.sword.discarded?e._e():t("Card",{attrs:{card:e.inv.sword},on:{click:e.click}}),e.inv.staff.discarded?e._e():t("Card",{attrs:{card:e.inv.staff},on:{click:e.click}}),e.inv.bow.discarded?e._e():t("Card",{attrs:{card:e.inv.bow},on:{click:e.click}})],1),t("div",{staticClass:"group middle"},[e.inv.armor.discarded?e._e():t("Card",{attrs:{card:e.inv.armor},on:{click:e.click}}),e.inv.helm.discarded?e._e():t("Card",{attrs:{card:e.inv.helm},on:{click:e.click}}),e.inv.gauntlets.discarded?e._e():t("Card",{attrs:{card:e.inv.gauntlets},on:{click:e.click}})],1),t("div",{staticClass:"group right"},[t("Card",{attrs:{card:e.inv.coin},on:{click:e.click}}),t("Card",{attrs:{card:e.inv.key},on:{click:e.click}})],1)])])},ze=[],Ke={components:{Card:Me},methods:{click:function(e,n){g.state.shopping?n.flipped&&"Key"!==n.name&&(g.commit({type:"flip",card:n}),g.commit("stopShopping"),g.commit("releaseHUD")):g.state.forceHUD&&(n.flipped?"Coin"!==n.name&&"Key"!==n.name&&(g.commit({type:"discard",card:n}),g.commit("releaseHUD"),g.commit("engage",{card:null}),g.commit({type:"setStrength",requiredStrength:0})):(g.commit({type:"flip",card:n}),"armor"===n.type?(g.commit("releaseHUD"),g.commit("engage",{card:null}),g.commit({type:"setStrength",requiredStrength:0})):"weapon"===n.type&&(g.commit("increaseDie"),g.state.die>=g.state.requiredStrength&&(g.commit({type:"setStrength",requiredStrength:0}),g.commit({type:"flip",card:g.state.engaged}),g.commit("releaseHUD"),g.commit("explore"),"boss"===g.state.engaged.type&&g.commit("flip",{card:g.state.inv.key}),g.commit("engage",{card:null})))))}},computed:{inv:function(){return g.state.inv},strength:function(){return g.state.requiredStrength},floor:function(){return g.state.floor},remaining:function(){return g.state.deck.length},total:function(){return g.state.deckSize},forceHUD:function(){return g.state.forceHUD},die:function(){return g.state.die}}},Re=Ke,Te=(t("5c66"),Object(Ne["a"])(Re,$e,ze,!1,null,"f75835f8",null)),Je=Te.exports;g.commit("shuffle"),g.commit("explore");var Fe={components:{Map:We,HUD:Je}},Le=Fe,Qe=(t("034f"),Object(Ne["a"])(Le,a,i,!1,null,null,null));n["a"]=Qe.exports},"42d2":function(e,n,t){e.exports=t.p+"img/InvCoin.7bfe2ac2.png"},"44bb":function(e,n,t){e.exports=t.p+"img/Dragon.db0e4d44.png"},4709:function(e,n,t){e.exports=t.p+"img/InvSword.26ad09da.png"},"551e":function(e,n,t){e.exports=t.p+"img/Helm.fbd1e333.png"},"5c66":function(e,n,t){"use strict";var a=t("c9d4"),i=t.n(a);i.a},"64d7":function(e,n,t){e.exports=t.p+"img/InvNoStaff.095c2dfd.png"},"65ca":function(e,n,t){e.exports=t.p+"img/InvStaff.b7c7e999.png"},"667a":function(e,n,t){"use strict";var a=t("b363"),i=t.n(a);i.a},"6aa0":function(e,n,t){},"6aef":function(e,n,t){e.exports=t.p+"img/Armor.d916f67d.png"},7785:function(e,n,t){e.exports=t.p+"img/InvGauntlets.fba8797f.png"},"79fe":function(e,n,t){e.exports=t.p+"img/Spider.becbcd09.png"},"8b13":function(e,n,t){e.exports=t.p+"img/Entrance.07882ae7.png"},"8efd":function(e,n,t){"use strict";var a=t("6aa0"),i=t.n(a);i.a},"8f62":function(e,n,t){e.exports=t.p+"img/InvHelm.08ade446.png"},abae:function(e,n,t){e.exports=t.p+"img/Wall.975a122a.png"},acd6:function(e,n,t){e.exports=t.p+"img/Bow.894bfb4d.png"},b363:function(e,n,t){},c9d4:function(e,n,t){},cf47:function(e,n,t){e.exports=t.p+"img/InvNoGauntlets.b0045ce9.png"},d301:function(e,n,t){e.exports=t.p+"img/InvArmor.77b04f22.png"},d803:function(e,n,t){e.exports=t.p+"img/Snake.8353d8e9.png"},df1a:function(e,n,t){e.exports=t.p+"img/Shop.29cbf800.png"},df67:function(e,n,t){e.exports=t.p+"img/InvNoSword.df02dca5.png"},e6d4:function(e,n,t){},eaed:function(e,n,t){e.exports=t.p+"img/Coin.b5813e62.png"},f350:function(e,n,t){e.exports=t.p+"img/InvNoBow.058a16f3.png"},f48e:function(e,n,t){e.exports=t.p+"img/Gauntlets.285226b8.png"},f9e9:function(e,n,t){e.exports=t.p+"img/Sword.f5db9640.png"},fea3:function(e,n,t){e.exports=t.p+"img/Rat.4a84733b.png"}});
//# sourceMappingURL=app.8f37cab1.js.map