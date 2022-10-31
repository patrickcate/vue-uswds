var zt=Object.defineProperty,qt=Object.defineProperties;var Gt=Object.getOwnPropertyDescriptors;var tt=Object.getOwnPropertySymbols;var Zt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var rt=(t,e,o)=>e in t?zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))Zt.call(e,o)&&rt(t,o,e[o]);if(tt)for(var o of tt(e))Jt.call(e,o)&&rt(t,o,e[o]);return t},ue=(t,e)=>qt(t,Gt(e));import{r as R,Y as Kt,Z as Ee,a9 as fe,aa as de,X as Qt,a0 as Ue,j as $,a2 as yt,a4 as _t,ab as ee,R as er,ac as tr,ad as wt,ae as Ce,af as M,ag as W,ah as U,ai as D,aj as bt,ak as Fe,al as He,am as pe,an as ot,ao as Ot,ap as rr,aq as or}from"./iframe.715bc15e.js";import{r as nr}from"./index.3cc9492d.js";var nt,it;function ir(t,e){return cr(t)||lr(t,e)||sr(t,e)||ar()}function ar(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sr(t,e){if(!!t){if(typeof t=="string")return at(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return at(t,e)}}function at(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function lr(t,e){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var r=[],n=!0,i=!1,s,a;try{for(o=o.call(t);!(n=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));n=!0);}catch(l){i=!0,a=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw a}}return r}}function cr(t){if(Array.isArray(t))return t}function xt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Pe(t){return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(t)}function I(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ne(t){var e=F(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=F(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Tt(t){if(typeof ShadowRoot=="undefined")return!1;var e=F(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ur(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!L(i)||!I(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function pr(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!L(n)||!I(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var fr={name:"applyStyles",enabled:!0,phase:"write",fn:ur,effect:pr,requires:["computeStyles"]};function V(t){return t.split("-")[0]}var te=Math.max,Se=Math.min,ie=Math.round;function ae(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(L(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ie(o.width)/s||1),i>0&&(n=ie(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Ne(t){var e=ae(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function Rt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&Tt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Y(t){return F(t).getComputedStyle(t)}function dr(t){return["table","td","th"].indexOf(I(t))>=0}function Z(t){return((ne(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ae(t){return I(t)==="html"?t:t.assignedSlot||t.parentNode||(Tt(t)?t.host:null)||Z(t)}function st(t){return!L(t)||Y(t).position==="fixed"?null:t.offsetParent}function vr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&L(t)){var r=Y(t);if(r.position==="fixed")return null}for(var n=Ae(t);L(n)&&["html","body"].indexOf(I(n))<0;){var i=Y(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function me(t){for(var e=F(t),o=st(t);o&&dr(o)&&Y(o).position==="static";)o=st(o);return o&&(I(o)==="html"||I(o)==="body"&&Y(o).position==="static")?e:o||vr(t)||e}function Ve(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ve(t,e,o){return te(t,Se(e,o))}function hr(t,e,o){var r=ve(t,e,o);return r>o?o:r}function Ct(){return{top:0,right:0,bottom:0,left:0}}function Pt(t){return Object.assign({},Ct(),t)}function St(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var gr=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,Pt(typeof e!="number"?e:St(e,Fe))};function mr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=V(o.placement),l=Ve(a),u=[D,W].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!s)){var d=gr(n.padding,o),m=Ne(i),p=l==="y"?M:D,v=l==="y"?U:W,h=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],g=s[l]-o.rects.reference[l],O=me(i),T=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=h/2-g/2,f=d[p],w=T-m[c]-d[v],b=T/2-m[c]/2+y,x=ve(f,b,w),C=l;o.modifiersData[r]=(e={},e[C]=x,e.centerOffset=x-b,e)}}function yr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!Rt(e.elements.popper,n)||(e.elements.arrow=n))}var wr={name:"arrow",enabled:!0,phase:"main",fn:mr,effect:yr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(t){return t.split("-")[1]}var br={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Or(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ie(e*n)/n||0,y:ie(o*n)/n||0}}function lt(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),y=D,f=M,w=window;if(u){var b=me(o),x="clientHeight",C="clientWidth";if(b===F(o)&&(b=Z(o),Y(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",C="scrollWidth")),b=b,n===M||(n===D||n===W)&&i===He){f=U;var E=d&&w.visualViewport?w.visualViewport.height:b[x];h-=E-r.height,h*=l?1:-1}if(n===D||(n===M||n===U)&&i===He){y=W;var S=d&&w.visualViewport?w.visualViewport.width:b[C];p-=S-r.width,p*=l?1:-1}}var P=Object.assign({position:a},u&&br),B=c===!0?Or({x:p,y:h}):{x:p,y:h};if(p=B.x,h=B.y,l){var A;return Object.assign({},P,(A={},A[f]=T?"0":"",A[y]=O?"0":"",A.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A))}return Object.assign({},P,(e={},e[f]=T?h+"px":"",e[y]=O?p+"px":"",e.transform="",e))}function xr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,u={placement:V(e.placement),variation:se(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,lt(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,lt(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Tr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:xr,data:{}},xe={passive:!0};function Rr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=F(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",o.update,xe)}),a&&l.addEventListener("resize",o.update,xe),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",o.update,xe)}),a&&l.removeEventListener("resize",o.update,xe)}}var Cr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Rr,data:{}},Pr={left:"right",right:"left",bottom:"top",top:"bottom"};function Te(t){return t.replace(/left|right|bottom|top/g,function(e){return Pr[e]})}var Sr={start:"end",end:"start"};function ct(t){return t.replace(/start|end/g,function(e){return Sr[e]})}function Ie(t){var e=F(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ye(t){return ae(Z(t)).left+Ie(t).scrollLeft}function Er(t){var e=F(t),o=Z(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ye(t),y:a}}function Ar(t){var e,o=Z(t),r=Ie(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=te(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=te(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ye(t),l=-r.scrollTop;return Y(n||o).direction==="rtl"&&(a+=te(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Xe(t){var e=Y(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Et(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:L(t)&&Xe(t)?t:Et(Ae(t))}function he(t,e){var o;e===void 0&&(e=[]);var r=Et(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=F(r),s=n?[i].concat(i.visualViewport||[],Xe(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(he(Ae(s)))}function Le(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function kr(t){var e=ae(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ut(t,e){return e===Ot?Le(Er(t)):ne(e)?kr(e):Le(Ar(Z(t)))}function Br(t){var e=he(Ae(t)),o=["absolute","fixed"].indexOf(Y(t).position)>=0,r=o&&L(t)?me(t):t;return ne(r)?e.filter(function(n){return ne(n)&&Rt(n,r)&&I(n)!=="body"}):[]}function jr(t,e,o){var r=e==="clippingParents"?Br(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var u=ut(t,l);return a.top=te(u.top,a.top),a.right=Se(u.right,a.right),a.bottom=Se(u.bottom,a.bottom),a.left=te(u.left,a.left),a},ut(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function At(t){var e=t.reference,o=t.element,r=t.placement,n=r?V(r):null,i=r?se(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case M:l={x:s,y:e.y-o.height};break;case U:l={x:s,y:e.y+e.height};break;case W:l={x:e.x+e.width,y:a};break;case D:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var u=n?Ve(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case Ce:l[u]=l[u]-(e[c]/2-o[c]/2);break;case He:l[u]=l[u]+(e[c]/2-o[c]/2);break}}return l}function ge(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?or:i,a=o.rootBoundary,l=a===void 0?Ot:a,u=o.elementContext,c=u===void 0?pe:u,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=Pt(typeof v!="number"?v:St(v,Fe)),g=c===pe?rr:pe,O=t.rects.popper,T=t.elements[m?g:c],y=jr(ne(T)?T:T.contextElement||Z(t.elements.popper),s,l),f=ae(t.elements.reference),w=At({reference:f,element:O,strategy:"absolute",placement:n}),b=Le(Object.assign({},O,w)),x=c===pe?b:f,C={top:y.top-x.top+h.top,bottom:x.bottom-y.bottom+h.bottom,left:y.left-x.left+h.left,right:x.right-y.right+h.right},E=t.modifiersData.offset;if(c===pe&&E){var S=E[n];Object.keys(C).forEach(function(P){var B=[W,U].indexOf(P)>=0?1:-1,A=[M,U].indexOf(P)>=0?"y":"x";C[P]+=S[A]*B})}return C}function Mr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,u=l===void 0?bt:l,c=se(r),d=c?a?ot:ot.filter(function(v){return se(v)===c}):Fe,m=d.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=ge(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[V(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function Dr(t){if(V(t)===wt)return[];var e=Te(t);return[ct(t),e,ct(e)]}function Hr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,u=o.padding,c=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=V(g),T=O===g,y=l||(T||!v?[Te(g)]:Dr(g)),f=[g].concat(y).reduce(function(oe,q){return oe.concat(V(q)===wt?Mr(e,{placement:q,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:h}):q)},[]),w=e.rects.reference,b=e.rects.popper,x=new Map,C=!0,E=f[0],S=0;S<f.length;S++){var P=f[S],B=V(P),A=se(P)===Ce,X=[M,U].indexOf(B)>=0,z=X?"width":"height",k=ge(e,{placement:P,boundary:c,rootBoundary:d,altBoundary:m,padding:u}),j=X?A?W:D:A?U:M;w[z]>b[z]&&(j=Te(j));var re=Te(j),J=[];if(i&&J.push(k[B]<=0),a&&J.push(k[j]<=0,k[re]<=0),J.every(function(oe){return oe})){E=P,C=!1;break}x.set(P,J)}if(C)for(var ye=v?3:1,ke=function(q){var ce=f.find(function(be){var K=x.get(be);if(K)return K.slice(0,q).every(function(Be){return Be})});if(ce)return E=ce,"break"},le=ye;le>0;le--){var we=ke(le);if(we==="break")break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}}var Lr={name:"flip",enabled:!0,phase:"main",fn:Hr,requiresIfExists:["offset"],data:{_skip:!1}};function pt(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function ft(t){return[M,W,U,D].some(function(e){return t[e]>=0})}function $r(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=ge(e,{elementContext:"reference"}),a=ge(e,{altBoundary:!0}),l=pt(s,r),u=pt(a,n,i),c=ft(l),d=ft(u);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var Wr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$r};function Ur(t,e,o){var r=V(t),n=[D,M].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[D,W].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Fr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=bt.reduce(function(c,d){return c[d]=Ur(d,e.rects,i),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}var Nr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Fr};function Vr(t){var e=t.state,o=t.name;e.modifiersData[o]=At({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Ir={name:"popperOffsets",enabled:!0,phase:"read",fn:Vr,data:{}};function Yr(t){return t==="x"?"y":"x"}function Xr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,u=o.rootBoundary,c=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=ge(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),O=V(e.placement),T=se(e.placement),y=!T,f=Ve(O),w=Yr(f),b=e.modifiersData.popperOffsets,x=e.rects.reference,C=e.rects.popper,E=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,S=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,B={x:0,y:0};if(!!b){if(i){var A,X=f==="y"?M:D,z=f==="y"?U:W,k=f==="y"?"height":"width",j=b[f],re=j+g[X],J=j-g[z],ye=p?-C[k]/2:0,ke=T===Ce?x[k]:C[k],le=T===Ce?-C[k]:-x[k],we=e.elements.arrow,oe=p&&we?Ne(we):{width:0,height:0},q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ct(),ce=q[X],be=q[z],K=ve(0,x[k],oe[k]),Be=y?x[k]/2-ye-K-ce-S.mainAxis:ke-K-ce-S.mainAxis,Ft=y?-x[k]/2+ye+K+be+S.mainAxis:le+K+be+S.mainAxis,je=e.elements.arrow&&me(e.elements.arrow),Nt=je?f==="y"?je.clientTop||0:je.clientLeft||0:0,ze=(A=P==null?void 0:P[f])!=null?A:0,Vt=j+Be-ze-Nt,It=j+Ft-ze,qe=ve(p?Se(re,Vt):re,j,p?te(J,It):J);b[f]=qe,B[f]=qe-j}if(a){var Ge,Yt=f==="x"?M:D,Xt=f==="x"?U:W,Q=b[w],Oe=w==="y"?"height":"width",Ze=Q+g[Yt],Je=Q-g[Xt],Me=[M,D].indexOf(O)!==-1,Ke=(Ge=P==null?void 0:P[w])!=null?Ge:0,Qe=Me?Ze:Q-x[Oe]-C[Oe]-Ke+S.altAxis,_e=Me?Q+x[Oe]+C[Oe]-Ke-S.altAxis:Je,et=p&&Me?hr(Qe,Q,_e):ve(p?Qe:Ze,Q,p?_e:Je);b[w]=et,B[w]=et-Q}e.modifiersData[r]=B}}var zr={name:"preventOverflow",enabled:!0,phase:"main",fn:Xr,requiresIfExists:["offset"]};function qr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Gr(t){return t===F(t)||!L(t)?Ie(t):qr(t)}function Zr(t){var e=t.getBoundingClientRect(),o=ie(e.width)/t.offsetWidth||1,r=ie(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Jr(t,e,o){o===void 0&&(o=!1);var r=L(e),n=L(e)&&Zr(e),i=Z(e),s=ae(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((I(e)!=="body"||Xe(i))&&(a=Gr(e)),L(e)?(l=ae(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Ye(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Kr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Qr(t){var e=Kr(t);return tr.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function _r(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function eo(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var dt={placement:"bottom",modifiers:[],strategy:"absolute"};function vt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function to(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?dt:n;return function(a,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},dt,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:c,setOptions:function(O){var T=typeof O=="function"?O(c.options):O;h(),c.options=Object.assign({},i,c.options,T),c.scrollParents={reference:ne(a)?he(a):a.contextElement?he(a.contextElement):[],popper:he(l)};var y=Qr(eo([].concat(r,c.options.modifiers)));return c.orderedModifiers=y.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=c.elements,T=O.reference,y=O.popper;if(!!vt(T,y)){c.rects={reference:Jr(T,me(y),c.options.strategy==="fixed"),popper:Ne(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(S){return c.modifiersData[S.name]=Object.assign({},S.data)});for(var f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var w=c.orderedModifiers[f],b=w.fn,x=w.options,C=x===void 0?{}:x,E=w.name;typeof b=="function"&&(c=b({state:c,options:C,name:E,instance:p})||c)}}}},update:_r(function(){return new Promise(function(g){p.forceUpdate(),g(c)})}),destroy:function(){h(),m=!0}};if(!vt(a,l))return p;p.setOptions(u).then(function(g){!m&&u.onFirstUpdate&&u.onFirstUpdate(g)});function v(){c.orderedModifiers.forEach(function(g){var O=g.name,T=g.options,y=T===void 0?{}:T,f=g.effect;if(typeof f=="function"){var w=f({state:c,name:O,instance:p,options:y}),b=function(){};d.push(w||b)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var ro=[Cr,Ir,Tr,fr,Nr,Lr,zr,wr,Wr],oo=to({defaultModifiers:ro});function $e(t,e){return $e=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},$e(t,e)}function kt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,$e(t,e)}var Bt=R.exports.createContext(),jt=R.exports.createContext();function no(t){var e=t.children,o=R.exports.useState(null),r=o[0],n=o[1],i=R.exports.useRef(!1);R.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=R.exports.useCallback(function(a){i.current||n(a)},[]);return $(Bt.Provider,{value:r,children:$(jt.Provider,{value:s,children:e})})}var Mt=function(e){return Array.isArray(e)?e[0]:e},Dt=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},We=function(e,o){if(typeof e=="function")return Dt(e,o);e!=null&&(e.current=o)},ht=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},gt=typeof window!="undefined"&&window.document&&window.document.createElement?R.exports.useLayoutEffect:R.exports.useEffect,io=typeof Element!="undefined",ao=typeof Map=="function",so=typeof Set=="function",lo=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Re(t,e){if(t===e)return!0;if(t&&e&&Pe(t)=="object"&&Pe(e)=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Re(t[r],e[r]))return!1;return!0}var i;if(ao&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Re(r.value[1],e.get(r.value[0])))return!1;return!0}if(so&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(lo&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(io&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Re(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var co=function(e,o){try{return Re(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},uo=[],po=function(e,o,r){r===void 0&&(r={});var n=R.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||uo},s=R.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],u=R.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);l({styles:ht(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:ht(h.map(function(g){return[g,v.attributes[g]]}))})},requires:["computeStyles"]}},[]),c=R.exports.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return co(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=R.exports.useRef();return gt(function(){d.current&&d.current.setOptions(c)},[c]),gt(function(){if(!(e==null||o==null)){var m=r.createPopper||oo,p=m(e,o,c);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},fo=function(){},vo=function(){return Promise.resolve(null)},ho=[];function go(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?ho:i,a=t.referenceElement,l=t.onFirstUpdate,u=t.innerRef,c=t.children,d=R.exports.useContext(Bt),m=R.exports.useState(null),p=m[0],v=m[1],h=R.exports.useState(null),g=h[0],O=h[1];R.exports.useEffect(function(){We(u,p)},[u,p]);var T=R.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),y=po(a||d,p,T),f=y.state,w=y.styles,b=y.forceUpdate,x=y.update,C=R.exports.useMemo(function(){return{ref:v,style:w.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:O},forceUpdate:b||fo,update:x||vo}},[v,O,o,f,w,x,b]);return Mt(c)(C)}function mo(t){var e=t.children,o=t.innerRef,r=R.exports.useContext(jt),n=R.exports.useCallback(function(i){We(o,i),Dt(r,i)},[o,r]);return R.exports.useEffect(function(){return function(){return We(o,null)}}),R.exports.useEffect(function(){},[r]),Mt(e)({ref:n})}var Ht=er.createContext({}),N=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},yo=function(){},mt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},wo=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Lt=function(t){kt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,wo(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),ee({},a,{style:ee({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),ee({},a,r.isTriggeredBy("hover")&&{onMouseEnter:N(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:N(r.props.hideTooltip,a.onMouseLeave)},{style:ee({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return $(Ht.Provider,{value:this.contextValue,children:a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef})})},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(R.exports.Component);Lt.contextType=Ht;var bo={childList:!0,subtree:!0},$t=function(t){kt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,u=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=ee({},c,{pageX:l,pageY:u})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,u=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:u})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.getTriggerProps=function(a){return a===void 0&&(a={}),ee({},a,r.isTriggeredBy("click")&&{onClick:N(r.clickToggle,a.onClick),onTouchEnd:N(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:N(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&ee({onMouseEnter:N(r.showTooltip,a.onMouseEnter),onMouseLeave:N(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:N(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:N(r.showTooltip,a.onFocus),onBlur:N(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,u=i.trigger,c=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,T=_t(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=$(go,ue(_({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(w){n.popperOffset=w.state.rects.popper}}].concat(d)},T),{children:function(f){var w=f.ref,b=f.style,x=f.placement,C=f.arrowProps,E=f.isReferenceHidden,S=f.update;if(h&&n.popperOffset){var P=n.state,B=P.pageX,A=P.pageY,X=n.popperOffset,z=X.width,k=X.height,j=B+z>window.pageXOffset+document.body.offsetWidth?B-z:B,re=A+k>window.pageYOffset+document.body.offsetHeight?A-k:A;b.transform="translate3d("+j+"px, "+re+"px, 0"}return $(Lt,{arrowProps:C,closeOnReferenceHidden:m,isReferenceHidden:E,placement:x,update:S,style:b,tooltip:a,trigger:u,mutationObserverOptions:O,clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:w})}}));return yt(no,{children:[$(mo,{innerRef:c,children:function(f){var w=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:w})}}),this.getState()&&(p?nr.exports.createPortal(y,v):y)]})},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(R.exports.Component);$t.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:yo,placement:"right",portalContainer:mt()?document.body:null,trigger:"hover",usePortal:mt(),mutationObserverOptions:bo,modifiers:[]};var Oo=$t,H=Kt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),G=8,xo=Ee.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(H("top",r,G*-1,"auto"),"px"),top:"".concat(H("bottom",r,G*-1,"auto"),"px"),right:"".concat(H("left",r,G*-1,"auto"),"px"),left:"".concat(H("right",r,G*-1,"auto"),"px"),borderBottomWidth:"".concat(H("top",r,"0",G),"px"),borderTopWidth:"".concat(H("bottom",r,"0",G),"px"),borderRightWidth:"".concat(H("left",r,"0",G),"px"),borderLeftWidth:"".concat(H("right",r,"0",G),"px"),borderTopColor:H("top",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderBottomColor:H("bottom",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderLeftColor:H("left",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderRightColor:H("right",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent")}}),To=Ee.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Wt=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,u=Ue(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return yt(To,ue(_({},Object.assign({hasChrome:r,placement:o,ref:s},u,{color:l})),{children:[r&&$(xo,_({},Object.assign({placement:o,ref:a},i,{color:l}))),n]}))};Wt.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var De=Qt.document,Ro=Ee.div(nt||(nt=xt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Co=Ee.g(it||(it=xt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Ut=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,u=e.tooltipShown,c=e.onVisibilityChange,d=Ue(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?Co:Ro;return $(Oo,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,T=v.arrowRef,y=v.placement;return $(Wt,ue(_({},Object.assign({hasChrome:s,placement:y,tooltipRef:O,arrowRef:T,arrowProps:g()},h())),{children:typeof a=="function"?a({onHide:function(){return c(!1)}}):a}))},children:function(p){var v=p.getTriggerProps,h=p.triggerRef;return $(m,ue(_({},Object.assign({ref:h},v(),d)),{children:l}))}})};Ut.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Ao=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Ue(e,["startOpen","onVisibilityChange"]),i=R.exports.useState(o||!1),s=ir(i,2),a=s[0],l=s[1],u=R.exports.useCallback(function(c){r&&r(c)===!1||l(c)},[r]);return R.exports.useEffect(function(){var c=function(){return u(!1)};De.addEventListener("keydown",c,!1);var d=Array.from(De.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",c),m.push(function(){try{p.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){De.removeEventListener("keydown",c),m.forEach(function(p){p()})}}),$(Ut,_({},Object.assign({},n,{tooltipShown:a,onVisibilityChange:u})))};export{Ao as WithToolTipState,Ao as WithTooltip,Ut as WithTooltipPure};
//# sourceMappingURL=WithTooltip-167e9982.2296ebbe.js.map
