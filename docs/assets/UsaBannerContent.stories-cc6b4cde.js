import{U as o}from"./UsaBannerContent-cfadfaa8.js";import"./vue.esm-bundler-d9807bdf.js";import"./constants-fce87d39.js";const l={},C={component:o,title:"Components/UsaBannerContent",argTypes:{"tld-icon":{control:{type:"text"}},tldIcon:{control:{type:"text"},name:"tldIcon (deprecated: use `tld-icon`)"},"tld-description":{control:{type:"text"}},tldDescription:{control:{type:"text"},name:"tldDescription (deprecated: use `tld-description`)"},"https-icon":{control:{type:"text"}},httpsIcon:{control:{type:"text"},name:"httpsIcon (deprecated: use `https-icon`)"},"https-description":{control:{type:"text"}},httpsDescription:{control:{type:"text"},name:"httpsDescription (deprecated: use `https-description`)"}},render:t=>({components:{UsaBannerContent:o},setup(){return{args:t}},template:`
    <UsaBannerContent>
      <template v-if="!!args['tld-icon']" #tld-icon>${t["tld-icon"]}</template>
      <template v-else-if="!!args.tldIcon" #tldIcon>${t.tldIcon}</template>
      <template v-if="!!args['tld-description']" #tld-description>${t["tld-description"]}</template>
      <template v-else-if="!!args.tldDescription" #tldDescription>${t.tldDescription}</template>
      <template v-if="!!args['https-icon']" #https-icon>${t["https-icon"]}</template>
      <template v-else-if="!!args.httpsIcon" #httpsIcon>${t.httpsIcon}</template>
      <template v-if="!!args['https-description']" #https-description>${t["https-description"]}</template>
      <template v-else-if="!!args.httpsDescription" #httpsDescription>${t.httpsDescription}</template>
    </UsaBannerContent>`})},e={args:{...l},name:"Default",parameters:{docs:{source:{code:"<UsaBannerContent></UsaBannerContent>"}}}},n={args:{...l,"tld-icon":"Custom TLD Icon","tld-description":"Custom TLD Description","https-icon":"Custom HTTPS Icon","https-description":"Custom HTTPS Description"},name:"Custom Slot Content",parameters:{docs:{source:{code:`<UsaBannerContent>
	<template #tld-icon>Custom TLD Icon</template>
	<template #tld-description>Custom TLD Description</template>
	<template #https-icon>Custom HTTPS Icon</template>
	<template #https-description>Custom HTTPS Description</template>
</UsaBannerContent>
`}}}};var s,p,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBannerContent></UsaBannerContent>\`
      }
    }
  }
}`,...(r=(p=e.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var a,c,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'tld-icon': 'Custom TLD Icon',
    'tld-description': 'Custom TLD Description',
    'https-icon': 'Custom HTTPS Icon',
    'https-description': 'Custom HTTPS Description'
  },
  name: 'Custom Slot Content',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBannerContent>\\n\\t<template #tld-icon>Custom TLD Icon</template>\\n\\t<template #tld-description>Custom TLD Description</template>\\n\\t<template #https-icon>Custom HTTPS Icon</template>\\n\\t<template #https-description>Custom HTTPS Description</template>\\n</UsaBannerContent>
\`
      }
    }
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const D=["DefaultBannerContent","CustomSlotBannerContent"];export{n as CustomSlotBannerContent,e as DefaultBannerContent,D as __namedExportsOrder,C as default};
