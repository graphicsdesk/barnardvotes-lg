parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Dvza":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof e&&e.amd?e(n):(t=t||self).scrollama=n()}(this,function(){"use strict";function e({id:e,step:t,marginTop:n}){const{index:o,height:r}=t,s=`scrollama__debug-step--${e}-${o}`;let i=document.querySelector(`.${s}`);i||(i=function(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const n=document.createElement("p");return n.style.position="absolute",n.style.left="0",n.style.height="1px",n.style.width="100%",n.style.borderTop="1px dashed black",t.appendChild(n),document.body.appendChild(t),t}(s)),i.style.top=`${-1*n}px`,i.style.height=`${r}px`,i.querySelector("p").style.top=`${r/2}px`}function t(e){console.error(`scrollama error: ${e}`)}function n(e){return+e.getAttribute("data-scrollama-index")}function o(e){if("string"==typeof e&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}return"number"!=typeof e&&isNaN(+e)?null:(e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)})}function r(e){const{top:t}=e.getBoundingClientRect();return t+window.pageYOffset-(document.body.clientTop||0)}let s,i,c;function a(e){const t=e?e.scrollTop:window.pageYOffset;s!==t&&((s=t)>i?c="down":s<i&&(c="up"),i=s)}return function(){let l,f,p,u={},d=function(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),n=[];for(let o=0;o<6;o+=1){const t=e[Math.floor(Math.random()*e.length)];n.push(t)}return`${n.join("")}${t}`}(),h=[],g=0,m=!1,x=!1,b=!1,y=!1,v=[];function E(){u={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},v=[]}function w(e){e&&!m&&z(),!e&&m&&O(),m=e}function $(e,t){const o=n(e),r=h[o];void 0!==t&&(r.progress=t);const s={element:e,index:o,progress:t,direction:c};"enter"===r.state&&u.stepProgress(s)}function S([e]){const t=n(e.target),o=h[t],r=e.target.offsetHeight;r!==o.height&&(o.height=r,q(o),N(o),A(o))}function k([e]){a(f);const{isIntersecting:t,target:o}=e;t?function(e,t=!0){const o=n(e),r=h[o],s={element:e,index:o,direction:c};r.direction=c,r.state="enter",v[o]||u.stepEnter(s),y&&(v[o]=!0)}(o):function(e,t=!0){const o=n(e),r=h[o];if(!r.state)return!1;const s={element:e,index:o,direction:c};x&&("down"===c&&r.progress<1?$(e,1):"up"===c&&r.progress>0&&$(e,0)),r.direction=c,r.state="exit",u.stepExit(s)}(o)}function M([e]){const t=n(e.target),o=h[t],{isIntersecting:r,intersectionRatio:s,target:i}=e;r&&"enter"===o.state&&$(i,s)}function q({observers:e}){Object.keys(e).map(t=>{e[t].disconnect()})}function O(){h.forEach(q)}function A(e){const t=new ResizeObserver(S);t.observe(e.node),e.observers.resize=t}function N(t){const n=window.innerHeight,o=t.offset||l,r="pixels"===o.format?1:n,s=o.value*r,i=t.height/2-s,c=t.height/2-(n-s),a=new IntersectionObserver(k,{rootMargin:`${i}px 0px ${c}px 0px`,threshold:.5,root:p});a.observe(t.node),t.observers.step=a,b&&e({id:d,step:t,marginTop:i,marginBottom:c})}function T(e){const t=window.innerHeight,n=e.offset||l,o="pixels"===n.format?1:t,r=n.value*o,s=`${-r+e.height}px 0px ${r-t}px 0px`,i=function(e,t){const n=Math.ceil(e/t),o=[],r=1/n;for(let s=0;s<n+1;s+=1)o.push(s*r);return o}(e.height,g),c=new IntersectionObserver(M,{rootMargin:s,threshold:i});c.observe(e.node),e.observers.progress=c}function z(){O(),h.forEach(A),h.forEach(N),x&&h.forEach(T)}const I={};return I.setup=(({step:e,parent:n,offset:c=.5,threshold:u=4,progress:d=!1,once:m=!1,debug:v=!1,container:$,root:S=null})=>(function(e){s=0,i=0,document.addEventListener("scroll",()=>a(e))}($),(h=function(e,t=document){return"string"==typeof e?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}(e,n).map((e,t)=>({index:t,direction:void 0,height:e.offsetHeight,node:e,observers:{},offset:o(e.dataset.offset),top:r(e),progress:0,state:void 0}))).length?(x=d,y=m,b=v,g=Math.max(1,+u),l=o(c),f=$,p=S,E(),function(e){e.forEach(e=>e.node.setAttribute("data-scrollama-index",e.index))}(h),w(!0),I):(t("no step elements"),I))),I.enable=(()=>(w(!0),I)),I.disable=(()=>(w(!1),I)),I.destroy=(()=>(w(!1),E(),I)),I.resize=(()=>(z(),I)),I.offset=(e=>null==e?l.value:(l=o(e),z(),I)),I.onStepEnter=(e=>("function"==typeof e?u.stepEnter=e:t("onStepEnter requires a function"),I)),I.onStepExit=(e=>("function"==typeof e?u.stepExit=e:t("onStepExit requires a function"),I)),I.onStepProgress=(e=>("function"==typeof e?u.stepProgress=e:t("onStepProgress requires a function"),I)),I}});
},{}],"Nj2M":[function(require,module,exports) {
"use strict";var e=t(require("scrollama"));function t(e){return e&&e.__esModule?e:{default:e}}var l=(0,e.default)(),s=0;function i(){l.setup({step:"#scrolly article .step",offset:.45,debug:!1}).onStepEnter(function(e){e.element;var t=e.index,l=e.direction;if("down"===l){if(1===t&&1!=s){for(var i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#331832",(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#331832"}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#331832",(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#331832"}for(i=1;i<=7;i++){(d=document.querySelector("#novotes"+String(i))).classList.add("fill-fade"),d.style.fill="#331832",(d=document.querySelector("#novotes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#331832"}}if(2===t&&2!=s){for(i=1;i<=68;i++){(d=document.querySelector("#noballot"+String(i))).classList.add("opacity-fade"),d.style.opacity="0",(d=document.querySelector("#noballot"+String(i)+"-2")).classList.add("opacity-fade"),d.style.opacity="0"}for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=1;i<=7;i++){(d=document.querySelector("#novotes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#novotes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=2;i<=15;i++){(d=document.querySelector("#ballots-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=17;i<=30;i++){(d=document.querySelector("#ballots-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}}if(3===t&&3!=s){for(i=2;i<=243;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="hidden"}for(i=2;i<=239;i++){(d=document.querySelector("#statement1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=245;i<=486;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="hidden"}for(i=241;i<=478;i++){(d=document.querySelector("#statement1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}}if(4===t&&4!=s){for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=2;i<=48;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="hidden"}for(i=2;i<=48;i++){(d=document.querySelector("#yess1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=46;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="hidden"}for(i=2;i<=45;i++){(d=document.querySelector("#nos1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=46;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#novote1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=50;i<=96;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="hidden"}for(i=50;i<=96;i++){(d=document.querySelector("#yess1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=47;i<=92;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="hidden"}for(i=47;i<=90;i++){(d=document.querySelector("#nos1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}for(i=48;i<=92;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="hidden"}for(i=48;i<=92;i++){(d=document.querySelector("#novote1-"+String(i))).classList.add("fill-fade"),d.style.fill="#000000"}}if(5===t&&5!=s){for(i=2;i<=239;i++){(d=document.querySelector("#statement1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=2;i<=48;i++){(d=document.querySelector("#yess1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=45;i++){(d=document.querySelector("#nos1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=46;i++){(d=document.querySelector("#novote1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=241;i<=478;i++){(d=document.querySelector("#statement1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=50;i<=96;i++){(d=document.querySelector("#yess1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=47;i<=90;i++){(d=document.querySelector("#nos1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=48;i<=92;i++){(d=document.querySelector("#novote1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}}if(6===t&&6!=s){for(i=2;i<=239;i++){(d=document.querySelector("#statement1-"+String(i))).style.visibility="hidden"}for(i=2;i<=243;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=241;i<=478;i++){(d=document.querySelector("#statement1-"+String(i))).style.visibility="hidden"}for(i=245;i<=486;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}}if(7===t&&7!=s){for(i=1;i<=116;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=118;i<=120;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=127;i<=130;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=136;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=2;i<=3;i++){(d=document.querySelector("#novotes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#novotes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}(d=document.querySelector("#novotes5")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#novotes5-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25);for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}(d=document.querySelector("#yes117")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes117-2")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25);for(i=121;i<=126;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=131;i<=135;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=2;i<=48;i++){(d=document.querySelector("#yess1-"+String(i))).style.visibility="hidden"}for(i=2;i<=48;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=45;i++){(d=document.querySelector("#nos1-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=46;i++){(d=document.querySelector("#novote1-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=105;i++){(d=document.querySelector("#note-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=50;i<=96;i++){(d=document.querySelector("#yess1-"+String(i))).style.visibility="hidden"}for(i=50;i<=96;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=47;i<=90;i++){(d=document.querySelector("#nos1-"+String(i))).style.visibility="hidden"}for(i=47;i<=92;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=48;i<=92;i++){(d=document.querySelector("#novote1-"+String(i))).style.visibility="hidden"}for(i=48;i<=92;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=107;i<=210;i++){(d=document.querySelector("#note-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}}}if("up"===l){if(6===t&&6!=s){for(i=1;i<=116;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=118;i<=120;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=127;i<=130;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=136;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=2;i<=3;i++){(d=document.querySelector("#novotes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#novotes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}(d=document.querySelector("#novotes5")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#novotes5-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25);for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}(d=document.querySelector("#yes117")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes117-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25);for(i=121;i<=126;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=131;i<=135;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=2;i<=48;i++){(d=document.querySelector("#yess1-"+String(i))).style.visibility="hidden"}for(i=2;i<=48;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=45;i++){(d=document.querySelector("#nos1-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=46;i++){(d=document.querySelector("#novote1-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=105;i++){(d=document.querySelector("#note-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=50;i<=96;i++){(d=document.querySelector("#yess1-"+String(i))).style.visibility="hidden"}for(i=50;i<=96;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=47;i<=90;i++){(d=document.querySelector("#nos1-"+String(i))).style.visibility="hidden"}for(i=47;i<=92;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=48;i<=92;i++){(d=document.querySelector("#novote1-"+String(i))).style.visibility="hidden"}for(i=48;i<=92;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=107;i<=210;i++){(d=document.querySelector("#note-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}}if(5===t&&5!=s){for(i=2;i<=239;i++){(d=document.querySelector("#statement1-"+String(i))).style.visibility="hidden"}for(i=2;i<=243;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=241;i<=478;i++){(d=document.querySelector("#statement1-"+String(i))).style.visibility="hidden"}for(i=245;i<=486;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#FFFFFF"}}if(4===t&&4!=s){for(i=2;i<=239;i++){(d=document.querySelector("#statement1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#9FC2CC",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#694D75",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=2;i<=48;i++){(d=document.querySelector("#yess1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=45;i++){(d=document.querySelector("#nos1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=2;i<=46;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#novote1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=245;i<=486;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="hidden"}for(i=241;i<=478;i++){(d=document.querySelector("#statement1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=50;i<=96;i++){(d=document.querySelector("#yess1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=47;i<=90;i++){(d=document.querySelector("#nos1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}for(i=48;i<=92;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="hidden"}for(i=48;i<=92;i++){(d=document.querySelector("#novote1-"+String(i))).style.visibility="visible",d.classList.add("fill-fade"),d.style.fill="#000000"}}if(3===t&&3!=s){for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)+25)}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=2;i<=48;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="hidden"}for(i=2;i<=48;i++){(d=document.querySelector("#yess1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=46;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="hidden"}for(i=2;i<=45;i++){(d=document.querySelector("#nos1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=2;i<=46;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="hidden"}for(i=2;i<=46;i++){(d=document.querySelector("#novote1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=50;i<=96;i++){(d=document.querySelector("#yess2-"+String(i))).style.visibility="hidden"}for(i=50;i<=96;i++){(d=document.querySelector("#yess1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=47;i<=92;i++){(d=document.querySelector("#nos2-"+String(i))).style.visibility="hidden"}for(i=47;i<=90;i++){(d=document.querySelector("#nos1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=48;i<=92;i++){(d=document.querySelector("#novote2-"+String(i))).style.visibility="hidden"}for(i=48;i<=92;i++){(d=document.querySelector("#novote1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}}if(2===t&&2!=s){for(i=2;i<=243;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="hidden"}for(i=2;i<=239;i++){(d=document.querySelector("#statement1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=245;i<=486;i++){(d=document.querySelector("#statement2-"+String(i))).style.visibility="hidden"}for(i=241;i<=478;i++){(d=document.querySelector("#statement1-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}}if(1==t&&1!=s){for(i=1;i<=68;i++){(d=document.querySelector("#noballot"+String(i))).classList.add("opacity-fade"),d.style.opacity="100",(d=document.querySelector("#noballot"+String(i)+"-2")).classList.add("opacity-fade"),d.style.opacity="100"}for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#331832",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#331832",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#331832",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#331832",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=1;i<=7;i++){(d=document.querySelector("#novotes"+String(i))).classList.add("fill-fade"),d.style.fill="#331832",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-100),(d=document.querySelector("#novotes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#331832",d.classList.add("move-fade"),d.setAttribute("cx",Number(d.cx.baseVal.value)-25)}for(i=2;i<=15;i++){(d=document.querySelector("#ballots-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}for(i=17;i<=30;i++){(d=document.querySelector("#ballots-"+String(i))).classList.add("fill-fade"),d.style.fill="#FFFFFF"}}if(0==t&&0!=s){for(i=1;i<=142;i++){(d=document.querySelector("#yes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",(d=document.querySelector("#yes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3"}for(i=1;i<=18;i++){(d=document.querySelector("#no"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",(d=document.querySelector("#no"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3"}for(i=1;i<=7;i++){var d;(d=document.querySelector("#novotes"+String(i))).classList.add("fill-fade"),d.style.fill="#d3d3d3",(d=document.querySelector("#novotes"+String(i)+"-2")).classList.add("fill-fade"),d.style.fill="#d3d3d3"}}}s=t})}document.addEventListener("DOMContentLoaded",i);
},{"scrollama":"Dvza"}]},{},["Nj2M"], "script")
//# sourceMappingURL=scrollyscript.a1c783c8.js.map