const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-BvqDU5XI.js","assets/iframe-C0MRCKEq.js","assets/index-DBsGMxVV.js","assets/index-CEXj7t9i.js","assets/index-Cu4lwwaE.js","assets/index-ogSvIofg.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-C0MRCKEq.js";var o=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,s]=r;return s.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-BvqDU5XI.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>o[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
