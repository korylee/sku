(function(t,d){typeof exports=="object"&&typeof module!="undefined"?d(exports,require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue-demi"],d):(t=typeof globalThis!="undefined"?globalThis:t||self,d(t["@korylee/sku"]={},t["vue-demi"]))})(this,function(t,d){"use strict";function E(n){return n!=null&&n!==void 0?Array.isArray(n)?n:[n]:[]}function v(n){return n!=null&&n.length?n.length===1?n[0].map(u=>[u]):n.reduce((u,e)=>{const o=[];return u.forEach(i=>{e.forEach(f=>{o.push([...E(i),f])})}),o}):[]}function j(n,u){return!n.some(e=>!u.includes(e))}const m=()=>{};function h(n){const u=n.filter(({options:e})=>e==null?void 0:e.length).map(({options:e})=>e);return v(u)}const D=n=>n.map(u=>u.uid);function M(n,{variations:u,descartesOptions:e,updateItem:o=m}){const i=[],f=[];e=e!=null?e:h(u),n.forEach((r,g)=>{let p=!0;e.forEach((l,s)=>{j(l,r.options)&&(f[s]||(p=!1),r.options=l,o==null||o(r,l,u),f[s]=!0)}),p&&i.push(g)});const c=i.length;for(let r=c-1;r>=0;r--){const g=i[r];n.splice(g,1)}}function x(n,{variations:u,descartesOptions:e,createItem:o=c=>({options:c}),updateItem:i=m,addItems:f=[]}){e=e!=null?e:h(u),e.forEach(c=>{if(n.findIndex(l=>{const s=j(l.options,c);return s&&(l.options=c,i==null||i(l,c,u)),s})!==-1||!(f!=null&&f.length?c.some(({uid:l})=>f.some(s=>l===s.uid)):!0))return;const p=o(c,u);n.push(p)})}function V(n,u){return n.map((e,o)=>u[o].options.findIndex(i=>i.uid===e))}function A(n,u){n.sort((e,o)=>parseInt(V(D(e.options),u).join(""))-parseInt(V(D(o.options),u).join("")))}const O=new WeakMap;function w(n,u,e,o,i=!0){var c;const f=(c=O.get(n))!=null?c:(()=>{const r=d.computed(()=>h(n.value));return O.set(n,r),r})();return{descartesOptions:f,add:r=>{x(u.value,{variations:n.value,descartesOptions:f.value,updateItem:o,createItem:e,addItems:E(r)}),i&&A(u.value,n.value)},remove:()=>{M(u.value,{variations:n.value,descartesOptions:f.value,updateItem:o}),i&&A(u.value,n.value)}}}t.addVariationOption=x,t.getDescartesOptions=h,t.removeVariationOption=M,t.sortVariationOption=A,t.uidsToIndex=V,t.useVariationOption=w,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});