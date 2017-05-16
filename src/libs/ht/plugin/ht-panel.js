!function(S,O,h){"use strict";var L="ht",g=S[L],i=g.Default,K=i.isTouchable,s=g.Color,b="px",Z="0",B="innerHTML",l="className",Y="position",E="absolute",M="width",C="height",q="left",m="top",k="right",r="bottom",$="max-width",T="max-height",I=null,p="none",d="",N=S.parseInt,A=S.setTimeout,u=i.getInternal(),_=i.animate,J=s.titleIconBackground,t=function(){return document},X=function(m){return t().createElement(m)},R=function(){return X("div")},H=function(){return X("canvas")},P=function(h,l,q){h.style.setProperty(l,q,I)},G=function(t,n){return t.style.getPropertyValue(n)},o=function(s,D){s.appendChild(D)},F=function(c,S){c.removeChild(S)},z=function(_){var E=_.scrollWidth,K=_.scrollHeight;return _===t().body&&(E=Math.max(E,t().documentElement.scrollWidth),K=Math.max(K,t().documentElement.scrollHeight)),{width:E,height:K}},j=function(v){var W=v.touches[0];return W?W:v.changedTouches[0]};u.addMethod(i,{panelExpandIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:J,rotation:3.14}]},panelCollapseIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:J}]},panelLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:J},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,44],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:J}]},panelUnLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:J},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,26],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:J}]},panelMinimizeIcon:{width:100,height:100,comps:[{type:"shape",points:[10,35,35,35,35,10],segments:[1,2,2],borderWidth:8,borderColor:J},{type:"shape",points:[90,35,65,35,65,10],segments:[1,2,2],borderWidth:8,borderColor:J},{type:"shape",points:[10,65,35,65,35,90],segments:[1,2,2],borderWidth:8,borderColor:J},{type:"shape",points:[65,90,65,65,90,65],segments:[1,2,2],borderWidth:8,borderColor:J}]},panelRestoreIcon:{width:300,height:300,comps:[{type:"rect",rect:[10,24,268,56],background:J},{type:"rect",rect:[10,118,268,56],background:J},{type:"rect",rect:[10,213,268,56],background:J}]},panelTitleLabelColor:i.labelSelectColor,panelTitleLabelFont:i.labelFont,panelContentLabelFont:i.labelFont,panelTitleBackground:s.titleBackground,panelSeparatorWidth:1,panelSeparatorColor:h},!0);var x=g.widget.Panel=function(M){var J=this,V=J._view=u.createView(null,J);J.$1i=0,J.$18i=new g.Notifier,J.$2i="leftTop",P(V,m,Z),P(V,q,Z),P(V,Y,E),P(V,"overflow","hidden"),J._interactor=new Q(J),J.setConfig(M),J.addEventListener(function(l){var M=J.getPanelConfig(l.id),g=M.content;("beginRestore"===l.kind||"betweenResize"===l.kind||"endToggle"===l.kind)&&(g&&g.invalidate&&g.invalidate(),M.items&&M.items.forEach(function(J){J&&J.content&&J.content.invalidate&&J.content.invalidate()}))})};i.def(x,O,{ms_v:1,_dragContainment:"parent",setConfig:function(i){function g(Z){Z.expanded=!Z.expanded,H.togglePanel(Z.id,!0,!0)}if(i){var H=this;H._view[B]=d,H._config=i,H.$35i=[],i.expanded==I&&(i.expanded=i.expand!=I?i.expand:!0);var z=H._view,Q=H.$24i(i,z,!0),_=Q[2],a=i.width;H.$35i.push(Q[1]),i.items&&i.items.forEach(function(n){n.expanded==I&&(n.expanded=n.expand!=I?n.expand:!0);var M=H.$24i(n,_.children[0]);H.$35i.push(M[1])});var y=R();P(y,M,10+b),P(y,C,10+b),P(y,Y,E),P(y,r,Z),P(y,k,Z),y[l]="resize-area",o(z,y),H.$10i(),i.flowLayout&&P(z,Y,"relative"),P(z,"opacity",Z),o(t().body,z),a==I&&(a=z.offsetWidth),P(z,M,a+b),P(z,$,a+b),i.items&&i.items.forEach(function(b){g(b)}),i.buttons&&i.buttons.indexOf("toggle")<0||g(i),i.minimized==I&&i.minimize!=I&&(i.minimized=i.minimize),i.minimized&&i.minimizable!==!1&&H.minimize(!0),F(t().body,z),P(z,"opacity",d),H.iv()}},getPanelConfig:function(g){var V=this,K=V._config,L=K.items;if(K.id===g)return K;if(L)for(var i=0;i<L.length;i++){var G=L[i];if(G.id===g)return G}},getPanelView:function(J){for(var m=this,X=m.$35i,E=0;E<X.length;E++){var W=X[E],a=W.parentNode;if(a.$15i===J)return a}},setDragContainment:function(C){this._dragContainment=C},getDragContainment:function(){return this._dragContainment},$20i:function(){var S=this._config,r=S.restoreIconSize||24;return r},$5i:function(F){var j=F.titleIconSize||16;return K&&(j*=1.2),j},$4i:function(r){var H=r.titleHeight||i.widgetTitleHeight;return H},setTitle:function(Z,j){if(j==I&&(j=this._config.id),j!=I){var F=this.getPanelConfig(j),u=this.getPanelView(j);F.title=Z,u.querySelector(".panel-title span").innerHTML=Z}},setInnerPanel:function(C){var f,K,M=this,y=C.id,k=M.$35i,U=!1;if(C.expanded==I&&(C.expanded=!0),y!=I){var z=M.getPanelConfig(y);if(z){U=!0;var N,Z=M.getPanelView(y),u=Z.parentNode,s=Z.children[0];if(Z!==M._view){M.$11i();for(N in z)delete z.key;for(N in C)z[N]=C[N];f=M.$24i(C,u,!1,Z),K=f[1],u.removeChild(Z);for(var _=0;_<k.length;_++)if(k[_]===s){k.splice(_,1,K);break}M.$12i(),z.expanded=!z.expanded,M.togglePanel(z.id,!0,!0),M.iv()}}}if(!U){M.$11i(),f=M.$24i(C,M._view.children[1]),K=f[1],k.push(K),M._config.items||(M._config.items=[]);var p=M._config.items;if(p.push(C),M.$12i(),p.length>1){var G=p[p.length-2],w=M.getPanelView(G.id).children[0];P(w,"border-bottom",M.$55i(G))}C.expanded=!C.expanded,M.togglePanel(C.id,!0,!0),M.iv()}},removeInnerPanel:function(f){var n,t=this,B=-1,D=t._config.items;if(D)for(n=0;n<D.length;n++){var Z=D[n];if(Z.id===f){B=n;break}}if(t.$11i(),B>=0){var S=t.$35i,_=t.getPanelView(f),K=_.children[0];for(n=0;n<S.length;n++)if(S[n]===K){S.splice(n,1);break}D.splice(B,1),_.parentNode.removeChild(_)}if(t.$12i(),D.length>0){var T=D[D.length-1],m=t.getPanelView(T.id).children[0];P(m,"border-bottom",t.$55i(T))}},$6i:function(h){P(h,"cursor","pointer"),P(h,"display","inline-block"),P(h,"margin-right",(K?8:4)+b),P(h,"vertical-align",m)},$24i:function(O,E,$,U){var s=this,A=s._config.flowLayout,Y=$?E:R(),X=s.$50i(O),B=s.$3i(O,$);Y[l]="ht-widget-panel"+($?" outer-panel":" inner-panel"),O.borderWidth==I&&(O.borderWidth=$?2:0);var h=O.borderWidth;if(h="0 "+h+b+" "+h+b+" "+h+b+" ",P(Y,"padding",h),o(Y,B),o(Y,X),$||(U?E.insertBefore(Y,U):o(E,Y)),!A&&$&&O.minimizable!==!1){var _=H(),K=s.$20i(),M=O.restoreToolTip;u.setCanvas(_,K,K),_[l]="control-button button-minimize button-minimize-restore",s.$6i(_),P(_,"display","none"),o(E,_),_.title=M||""}var w=O.titleBackground||i.panelTitleBackground;if(P(Y,"background-color",w),O.id==I){for(var Q=s.$1i++;s.getPanelConfig(Q);)Q=s.$1i++;O.id=Q}return Y.$15i=O.id,O.width&&(Y.style.width=O.width+b),[Y,B,X]},$9i:function(Q){var A=H();A[l]="control-button button-toggle button-toggle-expand",A.title=Q.toggleToolTip||"";var p=this.$4i(Q),L=this.$5i(Q);return this.$6i(A),u.setCanvas(A,L,p),A},$8i:function(X){var k=H(),D="control-button button-independent-switch";k[l]=X.independent===!0?D+" button-independent-switch-on":D+" button-independent-switch-off",k.title=X.independentSwitchToolTip||"";var U=this.$4i(X),R=this.$5i(X);return this.$6i(k),u.setCanvas(k,R,U),k},$7i:function(j){var m=H();m[l]="control-button button-minimize button-minimize-minimize",m.title=j.minimizeToolTip||"";var X=this.$4i(j),$=this.$5i(j);return this.$6i(m),u.setCanvas(m,$,X),m},$55i:function(K){var P=this._config,s=P.items,X=K.separatorWidth||i.panelSeparatorWidth,A=K.titleBackground||i.panelTitleBackground,u=K.expanded!==!1?A:K.separatorColor||i.panelSeparatorColor||i.brighter(A);return(P===K||s&&s.indexOf(K)===s.length-1)&&(X=0),X+b+" solid "+u},$3i:function(x,F){var _=this,n=_._config.flowLayout,A=R(),S=R(),t=_.$4i(x),d=x.titleBackground,J=x.titleColor,$=x.titleIcon,Q=x.buttons;if(A[l]="panel-title",P(A,Y,"relative"),P(A,"background",d||i.panelTitleBackground),P(A,"color",J||i.panelTitleLabelColor),P(A,m,Z),P(A,"box-sizing","border-box"),P(A,"-moz-box-sizing","border-box"),P(A,"padding","0 5px 0 0"),P(A,M,"100%"),P(A,"cursor","default"),P(A,"white-space","nowrap"),P(A,"font",i.panelTitleLabelFont),$){var T=H();T[l]="control-button panel-title-icon";var O=_.$4i(x),w=_.$5i(x);_.$6i(T),u.setCanvas(T,w,O),o(A,T)}var h=X("span");P(h,"display","inline-block"),P(h,"margin-left","5px"),h[B]="<span>"+x.title+"</span>",o(A,h),P(A,"line-height",t+b),S[l]="panel-title-controls",P(S,Y,E),P(S,q,Z),P(S,k,5+b),P(S,m,Z),P(S,r,Z),P(S,"text-align",k);var G=function(){var n=_.$9i(x);o(S,n)},W=function(){if(!n&&F&&x.minimizable!==!1){var q=_.$7i(x);o(S,q)}},e=function(){if(!F){var X=_.$8i(x);o(S,X)}},g=function(m){var M=H();M[l]="control-button custombutton-"+m.name,M.title=m.toolTip||"",M._action=m.action;var i=_.$4i(x),U=_.$5i(x);_.$6i(M),u.setCanvas(M,U,i),o(S,M)};if(Q)for(var v=0;v<Q.length;v++){var V=Q[v];"string"==typeof V?"minimize"===V?W():"independentSwitch"===V?e():"toggle"===V&&G():"object"==typeof V&&g(V)}else W(),G();return o(A,S),A},$50i:function(y){var n=R(),D=y.contentHeight,U=R();if(P(U,Y,"relative"),n[l]="panel-body",P(n,"overflow","hidden"),P(n,"background","white"),P(n,"font",i.panelContentLabelFont),o(n,U),y.content){var t;y.content.getView?(o(U,y.content.getView()),t=U.children[0]):y.content instanceof Element?(o(U,y.content),t=U.children[0]):U[B]=y.content,t&&(P(t,M,"100%"),P(t,C,"100%")),D&&P(U,C,D+b)}return n},$10i:function(){var v=this,q=v._config,D=v._view,H=D.querySelector(".resize-area").style;H.display=q.flowLayout||q.minimized===!0||q.expanded===!1?p:"block"},$11i:function(){var b=this._view,y=b.children[1];this.$13i>=0?this.$13i++:this.$13i=1,P(y,T,d),P(b,$,d)},$12i:function(){var K=--this.$13i;if(0===K){var M=this._view,O=M.children[1];P(O,T,O.scrollHeight+b),P(M,$,M.offsetWidth+b)}},$14i:function(){var P=this._view,Y=P.children[0],$=Y.children[1].children,y=this._config,r=0;P.$26i=P.offsetWidth,r+=Y.children[0].offsetWidth,y.titleIcon&&(r+=Y.children[1].offsetWidth,$=Y.children[2].children);for(var Z=0;Z<$.length;Z++){var d=$[Z];r+=d.offsetWidth+5}P.$51i=r+15},togglePanel:function(r,S,G){function L(K){var z=K.target,S=z.parentNode,U=f.getPanelConfig(S.$15i);delete S.$19i,z!==O&&f.$12i(),f.$18i.fire({kind:"endToggle",target:f,id:U.id})}for(var f=this,C=f._view,O=C.children[1],B=I,g=f.$35i,x=g.length,p=f._config.exclusive,j=f.$2i,K=[],V=f._config.narrowWhenCollapse,h=0;x>h;h++){var u=g[h],k=u.parentNode,y=k.$15i,N=f.getPanelConfig(y);y===r&&(B=k),!S&&p&&N.expanded&&k!==C&&y!==r&&N.independent!==!0&&K.push(k)}if(B&&!B.$19i){B.$19i=!0;var e=B.children[1],n=B.querySelector(".button-toggle"),A=f.getPanelConfig(B.$15i);if(!n)return;B===C||A.expanded||A.independent===!0||K.forEach(function(E){f.togglePanel(E.$15i,!0)}),B!==C&&f.$11i();var Q=200;if(G&&(Q=0),f.$18i.fire({kind:"beginToggle",target:f,id:B.$15i}),A.expanded){var c=function(){n[l]="control-button button-toggle",n[l]+=j.indexOf("Bottom")>=0?" button-toggle-expand":" button-toggle-collapse",P(e,M,e.clientWidth+b),A.expanded=!1,P(B.children[0],"border-bottom",f.$55i(A)),_(e).duration(Q).set("opacity",Z).set(T,Z).end(L),V&&B===C&&_(B).duration(Q).set($,B.$51i+b).end(),B[l]+=" panel-collapse",_(B).duration(Q).set("padding-bottom",Z).end(),f.$28i(A,!0),f.$10i()};V&&B===C&&f.$14i(),c()}else n[l]="control-button button-toggle",n[l]+=j.indexOf("Bottom")>=0?" button-toggle-collapse":" button-toggle-expand",P(e,M,d),A.expanded=!0,P(B.children[0],"border-bottom",f.$55i(A)),_(e).duration(Q).set("opacity","1").set(T,e.scrollHeight+b).end(L),V&&B===C&&_(B).duration(Q).set($,(B.$26i||B.offsetWidth)+b).end(),B[l]=B[l].replace(" panel-collapse",d),_(B).duration(Q).set("padding-bottom",A.borderWidth+b).end(),f.$28i(A,!0),f.$10i()}},$16i:function(){var o=this._view,M=o.$22i,i=o.$23i,W=this.$2i;return M==I&&(W.indexOf(q)>=0?M=o.$22i=0:W.indexOf(k)>=0&&(M=o.$22i=100)),i==I&&(W.indexOf("Top")>=0?i=o.$23i=0:W.indexOf("Bottom")>=0&&(i=o.$23i=100)),[M,i]},$25i:function(){var J=this,V=J._view,B=V.$21i,e=J.$20i(),L=J.$16i(),R=L[0],f=L[1],O=J.$2i;V.children[0].style.display=p,V.children[1].style.display=p,V.children[2].style.display=d,P(V,"padding",Z),P(V,$,e+b),"leftTop"===O?(P(V,q,N(G(V,q))+(B.width-e)*R/100+b),P(V,m,N(G(V,m))+(B.height-e)*f/100+b)):"leftBottom"===O?(P(V,q,N(G(V,q))+(B.width-e)*R/100+b),P(V,r,N(G(V,r))+(B.height-e)*(1-f/100)+b)):"rightTop"===O?(P(V,k,N(G(V,k))+(B.width-e)*(1-R/100)+b),P(V,m,N(G(V,m))+(B.height-e)*f/100+b)):"rightBottom"===O&&(P(V,k,N(G(V,k))+(B.width-e)*(1-R/100)+b),P(V,r,N(G(V,r))+(B.height-e)*(1-f/100)+b)),V[l]+=" panel-minimized",J.$18i.fire({kind:"endMinimize",target:J,id:V.$15i})},$17i:function(){var H=this,B=H._config,j=H._view;P(j,"-webkit-transform",d),P(j,"-ms-transform",d),P(j,"transform",d),B.minimized?H.$25i():(H.$18i.fire({kind:"endRestore",target:H,id:B.id}),j[l]=j[l].replace(" panel-minimized",d)),delete j.$19i},minimize:function($){var M=this,X=M._view;if(!X.$19i&&X.children[0].style.display!==p){var e=M._config,u=X.getBoundingClientRect(),K=M.$20i(),J=u.width,N=u.height,c=K/J,L=K/N,x=M.$16i(),A=x[0],g=x[1];X.$52i=c,X.$53i=L,X.$21i=u,M.$18i.fire({kind:"beginMinimize",target:M,id:X.$15i});var i=200;$&&(i=0),e.minimized=!0,X.$19i=!0,e.expanded&&(X.$26i=X.offsetWidth);var C=A+"% "+g+"%";P(X,"-webkit-transform-origin",C),P(X,"-ms-transform-origin",C),P(X,"transform-origin",C),_(X).duration(i).scale(c,L).end(function(){M.$17i()}),M.$10i()}},restore:function(){var f,H,i,h,v,T,d,u,a,W,V,Z,U=this,B=U._view,g=B.parentNode,j=U._config;if(!B.$19i&&j.minimized){var R=B.$21i,O=B.$52i,w=B.$53i,D=j.borderWidth+b,o=D,Q=D,F=0,l=U.$20i(),c=z(g),E=U.$2i;"leftTop"===E?(f=N(G(B,q)),i=N(G(B,m)),v=f,d=i,a=f+R.width-c.width,W=i+R.height-c.height,a>0&&(a>=f?f=0:f-=a),W>0&&(W>=i?i=0:i-=W),V=100*((v-f)/(R.width-l)),Z=100*((d-i)/(R.height-l)),P(B,q,f+b),P(B,m,i+b)):"leftBottom"===E?(f=N(G(B,q)),h=N(G(B,r)),v=f,u=h,a=f+R.width-c.width,W=h+R.height-c.height,a>0&&(a>=f?f=0:f-=a),W>0&&(W>=h?h=0:h-=W),V=100*((v-f)/(R.width-l)),Z=100*(1-(u-h)/(R.height-l)),P(B,q,f+b),P(B,r,h+b)):"rightTop"===E?(H=N(G(B,k)),i=N(G(B,m)),T=H,d=i,a=H+R.width-c.width,W=i+R.height-c.height,a>0&&(a>=H?H=0:H-=a),W>0&&(W>=i?i=0:i-=W),V=100*(1-(T-H)/(R.width-l)),Z=100*((d-i)/(R.height-l)),P(B,k,H+b),P(B,m,i+b)):"rightBottom"===E&&(H=N(G(B,k)),h=N(G(B,r)),T=H,u=h,a=H+R.width-c.width,W=h+R.height-c.height,a>0&&(a>=H?H=0:H-=a),W>0&&(W>=h?h=0:h-=W),V=100*(1-(T-H)/(R.width-l)),Z=100*(1-(u-h)/(R.height-l)),P(B,k,H+b),P(B,r,h+b)),B.children[0].style.display="block",B.children[1].style.display="block",B.children[2].style.display=p,P(B,"padding",F+" "+o+" "+Q+" "+D),P(B,"-webkit-transform","scale("+O+", "+w+")"),P(B,"-ms-transform","scale("+O+", "+w+")"),P(B,"transform","scale("+O+", "+w+")"),B.$22i=V,B.$23i=Z,P(B,"-webkit-transform-origin",V+"% "+Z+"%"),P(B,"-ms-transform-origin",V+"% "+Z+"%"),P(B,"transform-origin",V+"% "+Z+"%"),j.narrowWhenCollapse&&!j.expanded?P(B,$,B.$51i+b):P(B,$,B.$26i+b),U.$18i.fire({kind:"beginRestore",target:U,id:B.$15i}),B.$19i=!0,j.minimized=!1,A(function(){_(B).scale(1,1).end(function(){U.$17i()})},30),U.$10i()}},addEventListener:function(q,v,c){this.$18i.add(q,v,c)},removeEventListener:function(Z,Q){this.$18i.remove(Z,Q)},setPosition:function(c,K){var T=this._view,S=this.$2i;"leftTop"===S?(P(T,q,c+b),P(T,m,K+b),P(T,k,d),P(T,r,d)):"leftBottom"===S?(P(T,q,c+b),P(T,r,K+b),P(T,k,d),P(T,m,d)):"rightTop"===S?(P(T,k,c+b),P(T,m,K+b),P(T,q,d),P(T,r,d)):"rightBottom"===S&&(P(T,k,c+b),P(T,r,K+b),P(T,q,d),P(T,m,d)),delete T.$22i,delete T.$23i},getPosition:function(){var a=this._view,P=this.$2i;return"leftTop"===P?{x:N(G(a,q)),y:N(G(a,m))}:"leftBottom"===P?{x:N(G(a,q)),y:N(G(a,r))}:"rightTop"===P?{x:N(G(a,k)),y:N(G(a,m))}:"rightBottom"===P?{x:N(G(a,k)),y:N(G(a,r))}:void 0},setPositionRelativeTo:function(B){var m=this,E=m._view.querySelectorAll(".button-toggle"),K="control-button button-toggle",n=m.getPosition();m.$2i=B,m.setPosition(n.x,n.y);for(var y=0;y<E.length;y++){var F=E[y],d=m.getPanelConfig(F.parentNode.parentNode.parentNode.$15i);F[l]=d.expanded?B.indexOf("Bottom")>=0?K+" button-toggle-collapse":K+" button-toggle-expand":B.indexOf("Bottom")>=0?K+" button-toggle-expand":K+" button-toggle-collapse"}m.iv()},getPositionRelativeTo:function(){return this.$2i},invalidate:function(j){var E=this;E._68I||(E._68I=1,i.callLater(E.validate,E,I,j),E.onInvalidated&&E.onInvalidated(),E.fireViewEvent("invalidate"));var l=this._config,w=l.content;w&&w.invalidate&&w.invalidate(),l.items&&l.items.forEach(function(e){e&&e.content&&e.content.invalidate&&e.content.invalidate()})},$27i:function(M,G,c,z){var n=u.initContext(M);u.translateAndScale(n,0,0,1),n.clearRect(0,0,c,c);var $=(c-z)/2;i.drawStretchImage(n,i.getImage(G),"fill",0,$,z,z),n.restore()},$28i:function(j){var w,V,D,K=this,n=j.id,B=K.getPanelView(n),Y=B.querySelector(".button-toggle"),e=K.$2i.indexOf("Bottom")>=0;if(V=e?i.panelCollapseIcon:i.panelExpandIcon,D=e?i.panelExpandIcon:i.panelCollapseIcon,Y){w=j.expanded?i.getImage(D):i.getImage(V);var R=K.$4i(j),H=K.$5i(j);K.$27i(Y,w,R,H)}},$29i:function(B){var N,e=this,G=B.id,L=e.getPanelView(G),A=L.querySelector(".button-independent-switch"),y=i.panelUnLockIcon,W=i.panelLockIcon;if(A){N=B.independent!==!0?i.getImage(W):i.getImage(y);var b=e.$4i(B),d=e.$5i(B);e.$27i(A,N,b,d)}},$30i:function(T){var O=this,B=T.id,t=O.getPanelView(B),l=t.querySelector(".button-minimize-minimize"),j=i.panelMinimizeIcon;if(l){var w=O.$4i(T),G=O.$5i(T);O.$27i(l,i.getImage(j),w,G)}},$31i:function(X){var Y=this,k=X.id,p=Y.getPanelView(k),h=p.querySelector(".button-minimize-restore"),v=X.titleIcon||i.panelRestoreIcon;if(h){var F=Y.$20i();Y.$27i(h,i.getImage(v),F,F)}},$32i:function(_){var Y=this,r=_.id,v=Y.getPanelView(r);if(_.buttons){var j=_.buttons;j.forEach(function(Q){var q=Q.name,p=Q.icon;if(q&&p){var G=v.querySelector(".custombutton-"+q);if(G){var S=Y.$4i(_),A=Y.$5i(_)-1;Y.$27i(G,i.getImage(p),S,A)}}})}},$33i:function(Z){var M=this,Q=Z.id,S=M.getPanelView(Q),u=S.querySelector(".panel-title-icon"),D=Z.titleIcon;if(u&&D){var c=M.$4i(Z),x=M.$5i(Z);M.$27i(u,i.getImage(D),c,x)}},validateImpl:function(){var o=this,b=o._config;o.$28i(b),o.$30i(b),o.$31i(b),o.$32i(b),o.$33i(b),b.items&&b.items.forEach(function(x){o.$28i(x),o.$29i(x),o.$32i(x)})}});var Q=function(l){var c=this,R=l.getView();c.$34i=l,c.addListeners(),R.addEventListener("dblclick",c.$42i.bind(c))};i.def(Q,O,{ms_listener:1,getView:function(){return this.$34i.getView()},clear:function(){delete this.$37i,delete this.$38i,delete this.$36i,delete this.$39i},$42i:function(o){for(var r=this.$34i,R=o.target,J=r.$35i,b=J.length,m=0;b>m;m++){var G=J[m];G.contains(R)&&(o.preventDefault(),r.togglePanel(G.parentNode.$15i))}},handle_touchstart:function(p){var A=this,x=A.$34i,r=x._config,C=r.flowLayout,Z=p;if(i.preventDefault(p),i.isLeftButton(p)){var $=p.target,q=x.getView().children[0],B=x.getView().querySelector(".button-minimize-restore");K&&(Z=j(p));var f=A.$40i={x:Z.pageX,y:Z.pageY};A.$41i={x:f.x,y:f.y},(!C&&q.contains($)||B&&B.contains($))&&(A.$38i=!0,i.startDragging(A,p)),!C&&A.handle_mousemove(p)&&(A.$37i=!0,i.startDragging(A,p),x.$11i())}},handle_mousedown:function(w){this.handle_touchstart(w)},handle_touchend:function(G){var H=this,x=H.$34i,K=G.target,y=x.$35i,F=y.length,p=0,m=x.getView(),U=m.querySelector(".button-minimize"),g=m.querySelector(".button-minimize-restore");if(!H.$39i&&!H.$36i){if(U&&U.contains(K)||g&&g.contains(K))G.preventDefault(),x._config.minimized?x.restore():x.minimize();else for(;F>p;p++){var W=y[p],u=W.parentNode,d=u.$15i,z=x.getPanelConfig(d),b=W.querySelector(".button-toggle"),i=W.querySelector(".button-independent-switch");if(b===K)G.preventDefault(),x.togglePanel(d);else if(i===K){G.preventDefault();var v="button-independent-switch-off",s="button-independent-switch-on";z.independent=z.independent==I?!0:!z.independent,i[l]=z.independent?i[l].replace(v,s):i[l].replace(s,v),x.$29i(z)}else K[l]&&K[l].indexOf("control-button custombutton-")>=0&&W.contains(K)&&K._action.call(x,z,x.getPanelView(d),G)}delete H.$40i,delete H.$41i}},handle_mouseup:function(K){this.handle_touchend(K)},handleWindowTouchEnd:function(){var q=this,O=q.$34i;q.$37i&&q.$36i?(O.$18i.fire({kind:"endResize",target:O,id:O.getView().$15i}),O.$12i()):q.$38i&&q.$39i&&O.$18i.fire({kind:"endMove",target:O,id:O.getView().$15i}),this.clear()},handleWindowMouseUp:function(I){this.handleWindowTouchEnd(I)},handle_mousemove:function(z){var S=this,l=S.getView(),F=l.querySelector(".resize-area"),T=F.getBoundingClientRect(),x={x:T.left,y:T.top,width:T.width,height:T.height};z=K?j(z):z;var L=z.clientX,$=z.clientY,N=S.$34i._config;return N.expanded&&N.minimized!==!0&&i.containsPoint(x,{x:L,y:$})?(l.style.cursor="nwse-resize",!0):(l.style.cursor=d,void 0)},handleWindowTouchMove:function(Q){Q.preventDefault();var y=Q;K&&(y=j(Q));var c=this,I=c.$40i,Z=c.$41i;if(!(Z.x==I.x&&Z.y==I.y&&i.getDistance(Z,{x:y.pageX,y:y.pageY})<=1)){var A=c.$34i,o=c.getView(),F=o.parentNode,g=A._config,s=g.resizeMode||"wh",U=y.pageX-I.x,T=y.pageY-I.y,S=A.$2i;if(c.$37i){var t=o.children[1].children[0],e=o.clientWidth,B=t.clientHeight,H=e+U,h=B+T;H=Math.max(H,100),h=Math.max(h,100),"w"===s?(P(o,M,H+b),g.width=H,I.x+=H-e,S.indexOf(k)>=0&&P(o,k,N(G(o,k))-(H-e)+b)):"h"===s?(P(t,C,h+b),g.contentHeight=h,I.y+=h-B,S.indexOf("Bottom")>=0&&P(o,r,N(G(o,r))-(h-B)+b)):"wh"===s&&(P(o,M,H+b),P(t,C,h+b),g.width=H,g.contentHeight=h,I.x+=H-e,I.y+=h-B,S.indexOf("right")>=0&&P(o,k,N(G(o,k))-(H-e)+b),S.indexOf("Bottom")>=0&&P(o,r,N(G(o,r))-(h-B)+b)),c.$36i?A.$18i.fire({kind:"betweenResize",target:A,id:A.getView().$15i}):(c.$36i=!0,A.$18i.fire({kind:"beginResize",target:A,id:A.getView().$15i}))}else if(c.$38i){var E,v,f,W,D,O,u,J,l,V,x=o.getBoundingClientRect(),$=x.width,d=x.height,p=z(F),Y=p.width,w=p.height,X=A._dragContainment;"leftTop"===S?(E=N(G(o,q))||0,f=N(G(o,m))||0,D=E+U,u=f+T,"parent"===X&&(D+$>Y&&(D=Y-$),u+d>w&&(u=w-d),0>D&&(D=0),0>u&&(u=0)),l=D-E,V=u-f,A.setPosition(D,u),I.x+=l,I.y+=V):"rightBottom"===S?(v=N(G(o,k))||0,W=N(G(o,r))||0,O=v-U,J=W-T,"parent"===X&&(0>O&&(O=0),0>J&&(J=0),O+$>Y&&(O=Y-$),J+d>w&&(J=w-d)),l=O-v,V=J-W,A.setPosition(O,J),I.x-=l,I.y-=V):"rightTop"===S?(v=N(G(o,k))||0,f=N(G(o,m))||0,O=v-U,u=f+T,"parent"===X&&(0>O&&(O=0),0>u&&(u=0),O+$>Y&&(O=Y-$),u+d>w&&(u=w-d)),l=O-v,V=u-f,A.setPosition(O,u),I.x-=l,I.y+=V):"leftBottom"===S&&(E=N(G(o,q))||0,W=N(G(o,r))||0,D=E+U,J=W-T,"parent"===X&&(0>D&&(D=0),0>J&&(J=0),D+$>Y&&(D=Y-$),J+d>w&&(J=w-d)),l=D-E,V=J-W,A.setPosition(D,J),I.x+=l,I.y-=V),c.$39i?A.$18i.fire({kind:"betweenMove",target:A,id:A.getView().$15i}):(c.$39i=!0,A.$18i.fire({kind:"beginMove",target:A,id:A.getView().$15i}))}}},handleWindowMouseMove:function(a){this.handleWindowTouchMove(a)}});var f=g.widget.PanelGroup=function(w){var h=this,p=h._view=u.createView(null,h);p.style.border="1px dashed black",p.style.position="absolute",p.style.background="rgba(120, 120, 120, 0.4)",h.$48i=new g.List,h._tolerance=100,h._config=w||{hGap:0,vGap:0},h.bindHandlePanelMove=h.handlePanelMove.bind(h),h.bindHandlePanelEvent=h.handlePanelEvent.bind(h),h.invalidate()};i.def(f,O,{invalidate:function(){var j=this;j._68I||(j._68I=1,A(function(){j.validate()},50))},validate:function(){if(this._68I){delete this._68I;var f=this.$48i.get(0);if(f){var o=f.getView().parentNode;o&&(this.layoutPanels(o,"leftTop"),this.layoutPanels(o,"rightTop"),this.layoutPanels(o,"leftBottom"),this.layoutPanels(o,"rightBottom"))}}},setLeftTopPanels:function(){var f=this,X=f.$43i,D=f.$48i;X==I&&(X=f.$43i=new g.List);for(var r=0;r<arguments.length;r++){var V=arguments[r];if("string"==typeof V)X.$49i=V;else{if(V._config.flowLayout)continue;V.setPositionRelativeTo("leftTop"),X.contains(V)||X.add(V),D.contains(V)||f.add(V)}}},setRightTopPanels:function(){var _=this,j=_.$44i,z=_.$48i;j==I&&(j=_.$44i=new g.List);for(var X=0;X<arguments.length;X++){var e=arguments[X];if("string"==typeof e)j.$49i=e;else{if(e._config.flowLayout)continue;e.setPositionRelativeTo("rightTop"),j.contains(e)||j.add(e),z.contains(e)||_.add(e)}}},setLeftBottomPanels:function(){var e=this,$=e.$45i,d=e.$48i;$==I&&($=e.$45i=new g.List);for(var c=0;c<arguments.length;c++){var N=arguments[c];if("string"==typeof N)$.$49i=N;else{if(N._config.flowLayout)continue;N.setPositionRelativeTo("leftBottom"),$.contains(N)||$.add(N),d.contains(N)||e.add(N)}}},setRightBottomPanels:function(){var t=this,d=t.$46i,y=t.$48i;d==I&&(d=t.$46i=new g.List);for(var U=0;U<arguments.length;U++){var p=arguments[U];if("string"==typeof p)d.$49i=p;else{if(p._config.flowLayout)continue;p.setPositionRelativeTo("rightBottom"),d.contains(p)||d.add(p),y.contains(p)||t.add(p)}}},add:function(n){if(!n._config.flowLayout){var F=this,g=F.$48i;g.contains(n)||(n.addEventListener(F.bindHandlePanelMove),n.addEventListener(F.bindHandlePanelEvent),g.add(n))}},remove:function(F){var V=this,r=V.$48i;r.contains(F)&&(F.removeEventListener(V.bindHandlePanelMove),F.removeEventListener(V.bindHandlePanelEvent),r.remove(F),V.$43i.contains(F)&&V.$43i.remove(F),V.$44i.contains(F)&&V.$44i.remove(F),V.$45i.contains(F)&&V.$45i.remove(F),V.$46i.contains(F)&&V.$46i.remove(F))},layoutPanels:function(H,r,t){var c=this,Y=c._config,W=Y.hGap||0,T=Y.vGap||0;if(H){var A=c.$43i;if("leftBottom"===r?A=c.$45i:"rightTop"===r?A=c.$44i:"rightBottom"===r&&(A=c.$46i),!A)return;var R=A.$49i,O=W,Z=T;if(H.contains(c._view)&&H.removeChild(c._view),A&&A.size()>0)for(var L=0;L<A.size();L++){var v=A.get(L),M=v.getView();H=H||M.parentNode,t!==L?v.setPosition(O,Z):("leftTop"===r?(c._view.style.right="",c._view.style.bottom="",c._view.style.left=O+b,c._view.style.top=Z+b):"leftBottom"===r?(c._view.style.right="",c._view.style.top="",c._view.style.left=O+b,c._view.style.bottom=Z+b):"rightTop"===r?(c._view.style.left="",c._view.style.bottom="",c._view.style.right=O+b,c._view.style.top=Z+b):"rightBottom"===r&&(c._view.style.left="",c._view.style.top="",c._view.style.right=O+b,c._view.style.bottom=Z+b),c._view.style.width=M.offsetWidth+b,c._view.style.height=M.offsetHeight+b,H.insertBefore(c._view,M)),"h"===R?O+=M.offsetWidth+W:"v"===R&&(Z+=M.offsetHeight+T)}}},handlePanelEvent:function(j){if("beginToggle"===j.kind||"endToggle"===j.kind||"beginRestore"===j.kind||"endMinimize"===j.kind||"endResize"===j.kind){var v=this,m=j.target,y=m.getView(),U=y.parentNode,S=v.$43i,o=v.$44i,Q=v.$45i,O=v.$46i,g=v._config,$=I,s=I,z=m.$47i;if(z==I&&(z=m.$47i=0),"beginToggle"===j.kind?z=m.$47i=z+1:"endToggle"===j.kind&&(z=m.$47i=z-1),S&&S.contains(m)?($="leftTop",s=S):Q&&Q.contains(m)?($="leftBottom",s=Q):o&&o.contains(m)?($="rightTop",s=o):O&&O.contains(m)&&($="rightBottom",s=O),"beginToggle"===j.kind&&$&&1===z){var Y=R(),H=Y.style,a=s.$49i,p="each";H.fontSize="0",H.position="absolute",H.width="100%","leftTop"===$?(H.left=0,H.top=0):"leftBottom"===$?(H.left=0,H.bottom=0,"v"===a&&(p="reverseEach")):"rightTop"===$?(H.right=0,H.top=0,H.textAlign="right","h"===a&&(p="reverseEach")):"rightBottom"===$&&(H.right=0,H.bottom=0,H.textAlign="right",p="reverseEach"),s[p](function(d){var v=d.getView(),U=v.style,f=R();U.position="static",f.style.textAlign="left",f.style.position="relative",f.style.display="inline-block","leftTop"===$?(f.style.marginLeft=g.hGap+b,f.style.marginTop=g.vGap+b):"leftBottom"===$?(f.style.marginLeft=g.hGap+b,f.style.marginBottom=g.vGap+b):"rightTop"===$?(f.style.marginRight=g.hGap+b,f.style.marginTop=g.vGap+b):"rightBottom"===$&&(f.style.marginRight=g.hGap+b,f.style.marginBottom=g.vGap+b),f.appendChild(v),Y.appendChild(f),"h"===a?f.style.verticalAlign="leftTop"===$||"rightTop"===$?"top":"bottom":Y.appendChild(X("br"))}),v.$54i=Y,U.appendChild(Y)}else"endToggle"===j.kind&&$&&0===z?A(function(){U=U.parentNode.parentNode,U.removeChild(v.$54i),delete v.$54i,s.each(function(d){var X=d.getView(),W=X.style;W.position="absolute",U.appendChild(X)}),v.layoutPanels(U,$)},30):("beginRestore"===j.kind||"endMinimize"===j.kind||"endResize"===j.kind)&&$&&v.layoutPanels(U,$)}},handlePanelMove:function(K){if(!(K.kind.indexOf("Move")<0)){var b=this,R=b._config,p=R.hGap||0,c=R.vGap||0,Z=K.target,w=Z._view,n=w.getBoundingClientRect(),A=n.width,O=n.height,s=A/2,f=O/2,Q=w.parentNode,y=b.$43i,$=b.$44i,X=b.$45i,o=b.$46i,d=Q.getBoundingClientRect(),u=b._tolerance;if("endMove"===K.kind){var B=b._corner;B&&(Z.setPositionRelativeTo(B),b.layoutPanels(Q,B)),delete b._corner}if("betweenMove"===K.kind){var j=d.left,F=d.top,v=d.width,M=d.height,_=n.left+A/2,r=n.top+O/2;y==I&&(y=b.$43i=new g.List),X==I&&(X=b.$45i=new g.List),$==I&&($=b.$44i=new g.List),o==I&&(o=b.$46i=new g.List),delete b._corner,y.contains(Z)?(y.remove(Z),b.layoutPanels(Q,"leftTop")):X.contains(Z)?(X.remove(Z),b.layoutPanels(Q,"leftBottom")):$.contains(Z)?($.remove(Z),b.layoutPanels(Q,"rightTop")):o.contains(Z)&&(o.remove(Z),b.layoutPanels(Q,"rightBottom"));var m=function(y,V){var g=j+p,J=F+c;if(0===V.size()){var e=g+s,Y=J+f;"leftBottom"===y?Y=F+M-c-f:"rightTop"===y?e=j+v-p-s:"rightBottom"===y&&(e=j+v-p-s,Y=F+M-c-f);var R=_-e,U=r-Y,K=Math.sqrt(R*R+U*U);if(u>K)return b._corner=y,V.add(Z),b.layoutPanels(Q,y,0),!0}else if(1===V.size()){var W=V.get(0),t=W.getView().getBoundingClientRect(),z=t.left+s,w=t.top+f,O=t.left+t.width+p+s,B=J+f,E=g+s,h=t.top+t.height+c+f;"leftBottom"===y?(w=t.top+t.height-f,B=F+M-c-f,h=t.top-c-f):"rightTop"===y?(z=t.left+t.width-s,O=t.left-p-s,E=j+v-p-s):"rightBottom"===y&&(z=t.left+t.width-s,w=t.top+t.height-f,O=t.left-p-s,B=F+M-c-f,E=j+v-p-s,h=t.top-c-f);var i=_-z,D=r-w,S=_-O,A=r-B,P=_-E,T=r-h,G=N(Math.sqrt(i*i+D*D)),x=N(Math.sqrt(S*S+A*A)),o=N(Math.sqrt(P*P+T*T)),C=[G,x,o];C.sort(function(j,A){return j-A});var q=C[0];if(u>q){if(b._corner=y,q===G)return V.add(Z,0),b.layoutPanels(Q,y,0),!0;if(q===x)return V.add(Z),V.$49i="h",b.layoutPanels(Q,y,1),!0;if(q===o)return V.add(Z),V.$49i="v",b.layoutPanels(Q,y,1),!0}}else if(V.size()>1){for(var k=I,L={},l=[],m=V.$49i,H=0;H<V.size();H++){var d=V.get(H),a=d.getView(),X=a.getBoundingClientRect(),n=X.left+s,$=X.top+f;"leftBottom"===y?$=X.top+X.height-f:"rightTop"===y?n=X.left+X.width-s:"rightBottom"===y&&(n=X.left+X.width-s,$=X.top+X.height-f),H===V.size()-1&&(k=X);var R=_-n,U=r-$,K=N(Math.sqrt(R*R+U*U));L[K]=H,l.push(K)}"leftTop"===y&&"h"===m?(e=k.left+k.width+p+s,Y=J+f):"leftTop"===y&&"v"===m?(e=g+s,Y=k.top+k.height+c+f):"leftBottom"===y&&"h"===m?(e=k.left+k.width+p+s,Y=F+M-c-f):"leftBottom"===y&&"v"===m?(e=g+s,Y=k.top-c-f):"rightTop"===y&&"h"===m?(e=k.left-p-s,Y=J+f):"rightTop"===y&&"v"===m?(e=j+v-p-s,Y=k.top+k.height+c+f):"rightBottom"===y&&"h"===m?(e=k.left-p-s,Y=F+M-c-f):"rightBottom"===y&&"v"===m&&(e=j+v-p-s,Y=k.top-c-f),R=_-e,U=r-Y,K=N(Math.sqrt(R*R+U*U)),L[K]=H,l.push(K),l.sort(function(F,b){return F-b});var q=l[0];if(u>q)return b._corner=y,V.add(Z,L[q]),b.layoutPanels(Q,y,L[q]),!0}};m("leftTop",y)||m("leftBottom",X)||m("rightTop",$)||m("rightBottom",o)}}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);