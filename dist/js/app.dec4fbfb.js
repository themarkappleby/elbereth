(function(e){function t(t){for(var a,r,c=t[0],s=t[1],p=t[2],f=0,l=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/elbereth/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("6868")},"034f":function(e,t,n){"use strict";var a=n("e6d4"),i=n.n(a);i.a},"0602":function(e,t,n){"use strict";var a=n("bb38"),i=n.n(a);i.a},"067d":function(e,t,n){e.exports=n.p+"img/InvNoCoin.c011d9bb.png"},"1f69":function(e,t,n){"use strict";var a=n("9e69"),i=n.n(a);i.a},"217a":function(e,t,n){e.exports=n.p+"img/Open.80f2237f.png"},"22c7":function(e,t,n){e.exports=n.p+"img/InvNoHelm.c51f2cfa.png"},"282b":function(e,t,n){"use strict";var a=n("72c9"),i=n.n(a);i.a},"2be3":function(e,t,n){e.exports=n.p+"img/wood.6ca97484.jpg"},"30ad":function(e,t,n){e.exports=n.p+"img/Staff.23929926.png"},"30e8":function(e,t,n){e.exports=n.p+"img/InvNoArmor.a965b034.png"},3119:function(e,t,n){e.exports=n.p+"img/InvBow.a80fba8d.png"},"3c7e":function(e,t,n){},"3d57":function(e,t,n){e.exports=n.p+"img/Descend.63678ac0.png"},"3dfd":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Map"),n("HUD")],1)},i=[],o=(n("9eec"),n("04ca"),n("fc30"),n("4dc8"),n("8dcc"),n("aa12"),n("4809"),n("e821")),r=n("bd56"),c=n("3777"),s=n("2f62");function p(e){var t=[];e.map.forEach((function(n){(n.safe||n.flipped)&&[[n.x,n.y-1],[n.x,n.y+1],[n.x-1,n.y],[n.x+1,n.y]].forEach((function(n,a){f(n[0],n[1],e.map)||d(n[0],n[1],a,e)&&t.push(n)}))})),t.length&&p(e)}function d(e,t,n,a){if(a.deck.length){var i=a.deck.pop();if(i)return i.x=e,i.y=t,a.map.push(i),!0}return!1}function f(e,t,n){var a=null;return n.forEach((function(n){e===n.x&&t===n.y&&(a=n)})),a}c["a"].use(s["a"]);var l={name:"Entrance",id:"entrance",safe:!0,x:0,y:0,flipped:!1},u={name:"Descend",id:"descend",safe:!0,flipped:!1,x:1,y:0},m={name:"Dragon",id:"dragon",strength:6,type:"boss",flipped:!1,safe:!1,x:0,y:0},g=new s["a"].Store({state:{die:0,floor:1,discardPerFloor:7,forceHUD:!1,requiredStrength:0,engaged:null,shopping:!1,map:[l],deck:[u,m].concat(Object(r["a"])(v("Rat",12,{safe:!1,strength:3})),Object(r["a"])(v("Spider",12,{safe:!1,strength:4})),Object(r["a"])(v("Snake",12,{safe:!1,strength:5})),Object(r["a"])(v("Wall",15,{safe:!1})),Object(r["a"])(v("Shop",3,{safe:!0})),Object(r["a"])(v("Coin",3,{safe:!0,flipped:!1,type:"item",x:0,y:0})),[{name:"Sword",id:"sword",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Staff",id:"staff",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Bow",id:"bow",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Helm",id:"helm",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Gauntlets",id:"gauntlets",safe:!0,flipped:!1,type:"item",x:0,y:0},{name:"Armor",id:"armor",safe:!0,flipped:!1,type:"item",x:0,y:0}]),inv:{sword:{name:"Sword",type:"weapon",inv:!0,flipped:!1},staff:{name:"Staff",type:"weapon",inv:!0,flipped:!0},bow:{name:"Bow",type:"weapon",inv:!0,flipped:!0},armor:{name:"Armor",type:"armor",inv:!0,flipped:!1},gauntlets:{name:"Gauntlets",type:"armor",inv:!0,flipped:!0},helm:{name:"Helm",type:"armor",inv:!0,flipped:!0},coin:{name:"Coin",inv:!0,flipped:!0},key:{name:"Key",inv:!0,flipped:!0}}},mutations:{shuffle:function(e){for(var t=e.deck.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e.deck[n],e.deck[t]];e.deck[t]=a[0],e.deck[n]=a[1]}},explore:function(e){p(e)},setStrength:function(e,t){e.requiredStrength=t.strength},forceHUD:function(e){e.forceHUD=!0},releaseHUD:function(e){e.forceHUD=!1},startShopping:function(e){e.shopping=!0},stopShopping:function(e){e.shopping=!1},engage:function(e,t){e.engaged=t.card},flip:function(e,t){t.card.flipped=!t.card.flipped},roll:function(e){e.die=Math.floor(6*Math.random())+1},increaseDie:function(e){e.die+=1},discard:function(e,t){t.card.type="damage",t.card.flipped=!1}},actions:{descend:function(e){var t=e.commit,n=e.state;n.inv.key.flipped=!0,n.map=n.map.filter((function(e){return"Entrance"!==e.name&&"Descend"!==e.name&&"boss"!==e.type})),n.deck=n.deck.filter((function(e){return"Entrance"!==e.name&&"Descend"!==e.name&&"boss"!==e.type})),n.deck=[].concat(Object(r["a"])(n.deck),Object(r["a"])(n.map)),t("shuffle"),n.deck=[].concat(Object(r["a"])(n.deck.splice(n.discardPerFloor)),[m,u]),t("shuffle"),n.deck.forEach((function(e){e.x=0,e.y=0,e.flipped=!1})),n.map=[l],n.floor+=1,window.recenter(),t("explore")}}});function v(e,t,n){for(var a=[],i=1;i<=t;i++)a.push(Object(o["a"])({name:e,flipped:!1,id:"".concat(e,"-").concat(i),safe:!1,x:0,y:0},n));return a}var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"},[n("div",{staticClass:"map-inner",style:e.wood},e._l(e.map,(function(t){return n("Card",{key:t.id,attrs:{card:t},on:{click:e.click}})})),1)])},y=[],b=(n("2cff"),n("9cb7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"card",staticClass:"card",class:e.classes,style:e.pos,on:{click:function(t){return e.$emit("click",t,e.card)}}},[n("div",{staticClass:"card-front",style:e.frontImage},[n("Die",{attrs:{value:e.card.strength,size:"small"}})],1),n("div",{staticClass:"card-back",style:e.backImage})])}),w=[];function x(e,t,n,a){var i=window.map.width/2,o=window.map.height/2,r=8;return{x:i+e*(n+r),y:o+t*(a+r)}}var k=x,S=n("8b13"),C=n.n(S),I=n("3d57"),D=n.n(I),H=n("df1a"),O=n.n(H),j=n("abae"),_=n.n(j),U=n("fea3"),N=n.n(U),E=n("79fe"),M=n.n(E),P=n("d803"),A=n.n(P),q=n("44bb"),B=n.n(q),G=n("f9e9"),T=n.n(G),W=n("30ad"),$=n.n(W),K=n("acd6"),F=n.n(K),z=n("6aef"),L=n.n(z),R=n("f48e"),Y=n.n(R),J=n("551e"),Q=n.n(J),V=n("eaed"),X=n.n(V),Z=n("217a"),ee=n.n(Z),te=n("4709"),ne=n.n(te),ae=n("65ca"),ie=n.n(ae),oe=n("3119"),re=n.n(oe),ce=n("d301"),se=n.n(ce),pe=n("7785"),de=n.n(pe),fe=n("8f62"),le=n.n(fe),ue=n("42d2"),me=n.n(ue),ge=n("6250"),ve=n.n(ge),he=n("df67"),ye=n.n(he),be=n("64d7"),we=n.n(be),xe=n("f350"),ke=n.n(xe),Se=n("30e8"),Ce=n.n(Se),Ie=n("cf47"),De=n.n(Ie),He=n("22c7"),Oe=n.n(He),je=n("067d"),_e=n.n(je),Ue=n("b9bd"),Ne=n.n(Ue),Ee={Entrance:C.a,Descend:D.a,Shop:O.a,Wall:_.a,Rat:N.a,Spider:M.a,Snake:A.a,Dragon:B.a,Sword:T.a,Staff:$.a,Bow:F.a,Armor:L.a,Gauntlets:Y.a,Helm:Q.a,Coin:X.a,Open:ee.a,InvSword:ne.a,InvStaff:ie.a,InvBow:re.a,InvArmor:se.a,InvGauntlets:de.a,InvHelm:le.a,InvCoin:me.a,InvKey:ve.a,InvNoSword:ye.a,InvNoStaff:we.a,InvNoBow:ke.a,InvNoGauntlets:De.a,InvNoHelm:Oe.a,InvNoCoin:_e.a,InvNoKey:Ne.a,InvNoArmor:Ce.a},Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.value?n("div",{staticClass:"die",class:e.dieClass},[n("span",{staticClass:"pip"}),n("span",{staticClass:"pip"}),n("span",{staticClass:"pip"}),n("span",{staticClass:"pip"}),n("span",{staticClass:"pip"}),n("span",{staticClass:"pip"})]):e._e()},Pe=[],Ae={props:["value","size"],computed:{dieClass:function(){var e={};return e["die-".concat(this.value)]=!0,this.size&&(e["die-".concat(this.size)]=!0),e}}},qe=Ae,Be=(n("1f69"),n("95c6")),Ge=Object(Be["a"])(qe,Me,Pe,!1,null,"6fde5a48",null),Te=Ge.exports,We={components:{Die:Te},props:["card"],data:function(){return{pos:{}}},mounted:$e,watch:{card:{handler:$e,deep:!0}},computed:{classes:function(){var e={};return this.card.flipped&&(e.flipped=!0),this.card.safe&&(e.safe=!0),this.card.inv&&(e.inv=!0),"damage"===this.card.type&&(e.damage=!0),"boss"===this.card.type&&(e.boss=!0),"descend"===this.card.id&&(e.descend=!0),e[this.card.name]=!0,g.state.engaged&&g.state.engaged.id===this.card.id&&(e.engaged=!0),e},frontImage:function(){return this.card.inv?{backgroundImage:"url(".concat(Ee["Inv"+this.card.name],")")}:{backgroundImage:"url(".concat(Ee[this.card.name],")")}},backImage:function(){return this.card.inv?{backgroundImage:"url(".concat(Ee["InvNo"+this.card.name],")")}:{backgroundImage:"url(".concat(Ee.Open,")")}}}};function $e(){if(!this.card.inv&&"damage"!==this.card.type){var e=this.$refs.card.clientWidth,t=this.$refs.card.clientHeight,n=k(this.card.x,this.card.y,e,t);this.pos={left:"".concat(n.x,"px"),top:"".concat(n.y,"px"),marginLeft:"-".concat(e/2,"px"),marginTop:"-".concat(t/2,"px")}}}var Ke=We,Fe=(n("282b"),Object(Be["a"])(Ke,b,w,!1,null,"5f8abfec",null)),ze=Fe.exports,Le=n("2be3"),Re=n.n(Le);window.map={width:5e3,height:5e3},window.recenter=function(){var e=document.querySelector(".map-inner");e.style.width=window.map.width+"px",e.style.height=window.map.height+"px",document.querySelector(".map").scrollTo(window.map.width/2-window.innerWidth/2,window.map.height/2-window.innerHeight/2+50)};var Ye={components:{Card:ze},mounted:function(){window.recenter()},data:function(){return{floors:(g.state.deck.length+g.state.map.length-3)/g.state.discardPerFloor+1}},computed:{map:function(){return g.state.map},wood:function(){return{backgroundImage:"url(".concat(Re.a,")")}}},methods:{click:function(e,t){if(t.flipped)return!1;if(g.state.forceHUD)return!1;if(g.state.engaged&&g.state.engaged.id===t.id)return!1;var n=t.strength;if(n)g.commit("roll"),g.state.die>=n?(g.commit({type:"flip",card:t}),g.commit("explore"),"boss"===t.type&&(g.commit("flip",{card:g.state.inv.key}),g.state.floor===this.floors&&window.setTimeout((function(){alert("Congratulations! You Won!"),window.location.reload()}),500))):(g.commit({type:"setStrength",strength:n}),g.commit("forceHUD"),g.commit({type:"engage",card:t}),Je(g.state.inv)&&window.setTimeout((function(){alert("You Lose. Try Again."),window.location.reload()}),500));else if("item"===t.type){var a=g.state.inv[t.name.toLowerCase()];a&&a.flipped&&(g.commit({type:"flip",card:t}),g.commit({type:"flip",card:a}))}else if("Wall"===t.name){g.commit({type:"flip",card:t}),g.commit("explore");var i=Math.floor(6*Math.random())+1,o=["sword","staff","bow","armor","helm","gauntlets"],r=o[i-1];g.state.inv[r].flipped?g.commit({type:"discard",card:g.state.inv[r]}):"damage"!==g.state.inv[r].type&&g.commit({type:"flip",card:g.state.inv[r]})}else"Shop"===t.name?g.state.inv.coin.flipped||(g.commit({type:"flip",card:g.state.inv.coin}),g.commit("forceHUD"),g.commit("startShopping")):"descend"!==t.id||g.state.inv.key.flipped||g.dispatch("descend")}}};function Je(e){var t=!0;return Object.keys(e).forEach((function(n){"damage"!==e[n].type&&"coin"!==n&&"key"!==n&&(t=!1)})),t}var Qe=Ye,Ve=(n("d91e"),Object(Be["a"])(Qe,h,y,!1,null,"64ae5362",null)),Xe=Ve.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"HUD"},[n("Die",{attrs:{value:e.die}}),n("div",{staticClass:"remaining"},[n("div",{staticClass:"remaining-floor"},[e._v(" Floor "+e._s(e.floor)+" of "+e._s(e.floors)+" ")]),n("div",{staticClass:"remaining-cards"},[e._v(" Cards "+e._s(e.seenCards)+" of "+e._s(e.totalCards)+" ")])]),n("div",{staticClass:"overlay",class:{force:e.forceHUD}}),n("div",{staticClass:"cards",class:{force:e.forceHUD}},[n("Card",{attrs:{card:e.inv.sword},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.staff},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.bow},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.armor},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.helm},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.gauntlets},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.coin},on:{click:e.click}}),n("Card",{attrs:{card:e.inv.key},on:{click:e.click}})],1)],1)},et=[],tt={components:{Card:ze,Die:Te},methods:{click:function(e,t){"damage"!==t.type&&(g.state.shopping?t.flipped&&"Key"!==t.name&&(g.commit({type:"flip",card:t}),g.commit("stopShopping"),g.commit("releaseHUD")):g.state.forceHUD&&(t.flipped?"Coin"!==t.name&&"Key"!==t.name&&(g.commit({type:"discard",card:t}),g.commit("releaseHUD"),g.commit("engage",{card:null}),g.commit({type:"setStrength",requiredStrength:0})):(g.commit({type:"flip",card:t}),"armor"===t.type?(g.commit("releaseHUD"),g.commit("engage",{card:null}),g.commit({type:"setStrength",requiredStrength:0})):"weapon"===t.type&&(g.commit("increaseDie"),g.state.die>=g.state.requiredStrength&&(g.commit({type:"setStrength",requiredStrength:0}),g.commit({type:"flip",card:g.state.engaged}),g.commit("releaseHUD"),g.commit("explore"),"boss"===g.state.engaged.type&&(g.commit("flip",{card:g.state.inv.key}),g.state.floor===this.floors&&window.setTimeout((function(){alert("Congratulations! You Won!"),window.location.reload()}),500)),g.commit("engage",{card:null}))))))}},data:function(){return{floors:(g.state.deck.length+g.state.map.length-3)/g.state.discardPerFloor+1}},computed:{inv:function(){return g.state.inv},floor:function(){return g.state.floor},seenCards:function(){return g.state.map.length},totalCards:function(){return g.state.deck.length+g.state.map.length},forceHUD:function(){return g.state.forceHUD},damage:function(){return g.state.damage},die:function(){return g.state.die}}},nt=tt,at=(n("0602"),Object(Be["a"])(nt,Ze,et,!1,null,"6604f162",null)),it=at.exports,ot=n("fe3c"),rt=n.n(ot);rt.a.attach(document.body),g.commit("shuffle"),g.commit("explore");var ct={components:{Map:Xe,HUD:it}},st=ct,pt=(n("034f"),Object(Be["a"])(st,a,i,!1,null,null,null));t["a"]=pt.exports},"42d2":function(e,t,n){e.exports=n.p+"img/InvCoin.7bfe2ac2.png"},"44bb":function(e,t,n){e.exports=n.p+"img/Dragon.ee1f3f14.png"},4709:function(e,t,n){e.exports=n.p+"img/InvSword.6db0098a.png"},"551e":function(e,t,n){e.exports=n.p+"img/Helm.fbd1e333.png"},6250:function(e,t,n){e.exports=n.p+"img/InvKey.63178932.png"},"64d7":function(e,t,n){e.exports=n.p+"img/InvNoStaff.095c2dfd.png"},"65ca":function(e,t,n){e.exports=n.p+"img/InvStaff.283539d9.png"},"6aef":function(e,t,n){e.exports=n.p+"img/Armor.d916f67d.png"},"72c9":function(e,t,n){},7785:function(e,t,n){e.exports=n.p+"img/InvGauntlets.6cac8911.png"},"79fe":function(e,t,n){e.exports=n.p+"img/Spider.becbcd09.png"},"8b13":function(e,t,n){e.exports=n.p+"img/Entrance.07882ae7.png"},"8f62":function(e,t,n){e.exports=n.p+"img/InvHelm.4e72cf17.png"},"9e69":function(e,t,n){},abae:function(e,t,n){e.exports=n.p+"img/Wall.975a122a.png"},acd6:function(e,t,n){e.exports=n.p+"img/Bow.894bfb4d.png"},b9bd:function(e,t,n){e.exports=n.p+"img/InvNoKey.323dc651.png"},bb38:function(e,t,n){},cf47:function(e,t,n){e.exports=n.p+"img/InvNoGauntlets.b0045ce9.png"},d301:function(e,t,n){e.exports=n.p+"img/InvArmor.519d1b27.png"},d803:function(e,t,n){e.exports=n.p+"img/Snake.8353d8e9.png"},d91e:function(e,t,n){"use strict";var a=n("3c7e"),i=n.n(a);i.a},df1a:function(e,t,n){e.exports=n.p+"img/Shop.29cbf800.png"},df67:function(e,t,n){e.exports=n.p+"img/InvNoSword.df02dca5.png"},e6d4:function(e,t,n){},eaed:function(e,t,n){e.exports=n.p+"img/Coin.b5813e62.png"},f350:function(e,t,n){e.exports=n.p+"img/InvNoBow.058a16f3.png"},f48e:function(e,t,n){e.exports=n.p+"img/Gauntlets.285226b8.png"},f9e9:function(e,t,n){e.exports=n.p+"img/Sword.f5db9640.png"},fea3:function(e,t,n){e.exports=n.p+"img/Rat.4a84733b.png"}});
//# sourceMappingURL=app.dec4fbfb.js.map