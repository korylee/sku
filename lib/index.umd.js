(function(r,d){typeof exports=="object"&&typeof module!="undefined"?d(exports,require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue-demi"],d):(r=typeof globalThis!="undefined"?globalThis:r||self,d(r["@korylee/sku"]={},r["vue-demi"]))})(this,function(r,d){"use strict";const O=n=>n===null,v=n=>n===void 0,A=Symbol("skip");function w(n,e,u){const i=[];for(let o=0;o<n.length;o++){const t=n[o],f=e.call(u,t,o,n);f!==A&&i.push(f)}return i}function E(n){return O(n)||v(n)?[]:Array.isArray(n)?n:[n]}function C(n){return n!=null&&n.length?n.length===1?n[0].map(e=>[e]):n.reduce((e,u)=>{const i=[];return e.forEach(o=>{u.forEach(t=>{i.push([...E(o),t])})}),i}):[]}function j(n,e){return!n.some(u=>!e.includes(u))}const D=()=>{};function h(n){const e=w(n,({options:u})=>u!=null&&u.length?u:A);return C(e)}const M=n=>n.map(e=>e.uid);function k(n,{variations:e,descartesOptions:u,updateItem:i=D}){const o=[],t=[];u=u!=null?u:h(e),n.forEach((c,g)=>{let p=!0;u.forEach((l,s)=>{j(l,c.options)&&(t[s]||(p=!1),c.options=l,i==null||i(c,l,e),t[s]=!0)}),p&&o.push(g)});const f=o.length;for(let c=f-1;c>=0;c--){const g=o[c];n.splice(g,1)}}function x(n,{variations:e,descartesOptions:u,createItem:i=f=>({options:f}),updateItem:o=D,addItems:t=[]}){u=u!=null?u:h(e),u.forEach(f=>{if(n.findIndex(l=>{const s=j(l.options,f);return s&&(l.options=f,o==null||o(l,f,e)),s})!==-1||!(t!=null&&t.length?f.some(({uid:l})=>t.some(s=>l===s.uid)):!0))return;const p=i(f,e);n.push(p)})}function m(n,e){return n.map((u,i)=>e[i].options.findIndex(o=>o.uid===u))}function V(n,e){n.sort((u,i)=>parseInt(m(M(u.options),e).join(""))-parseInt(m(M(i.options),e).join("")))}const y=new WeakMap;function U(n,e,u,i,o=!0){var f;const t=(f=y.get(n))!=null?f:(()=>{const c=d.computed(()=>h(n.value));return y.set(n,c),c})();return{descartesOptions:t,add:c=>{x(e.value,{variations:n.value,descartesOptions:t.value,updateItem:i,createItem:u,addItems:E(c)}),o&&V(e.value,n.value)},remove:()=>{k(e.value,{variations:n.value,descartesOptions:t.value,updateItem:i}),o&&V(e.value,n.value)}}}r.addVariationOption=x,r.getDescartesOptions=h,r.removeVariationOption=k,r.sortVariationOption=V,r.uidsToIndex=m,r.useVariationOption=U,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});