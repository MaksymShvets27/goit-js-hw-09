const e=document.querySelector("form"),o=document.querySelectorAll("input"),t=o[0],n=o[1],l=o[2];document.querySelector("button");function s(e,o){setTimeout((()=>Math.random()>.3?Promise.resolve({position:e,delay:o}):Promise.reject({position:e,delay:o})),o)}e.addEventListener("input",(()=>{const o=parseInt(t.value),i=parseInt(n.value),r=parseInt(l.value);e.addEventListener("submit",(e=>{e.preventDefault();for(let e=0;e<=r-1;e+=1)console.log(o,i,r),s(e,o).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),o+=i}))}));
//# sourceMappingURL=03-promises.dc75de5d.js.map
