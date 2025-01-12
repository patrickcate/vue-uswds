import{U as t}from"./UsaCollectionItem-bc3b6b88.js";import{U as N}from"./UsaCollectionCalendar-00a451a5.js";import{U as $}from"./UsaCollectionMeta-09af4ca8.js";import{U as J}from"./UsaCollectionMetaItem-80b478c5.js";import"./vue.esm-bundler-d9807bdf.js";import"./UsaCollectionHeading-f530fb68.js";import"./BaseHeading-19544782.js";import"./BaseLink-378e51d3.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const e={heading:t.props.heading.default,headingTag:t.props.headingTag.default,href:t.props.href.default,to:t.props.to.default,routerComponentName:t.props.routerComponentName.default,customClasses:t.props.customClasses.default()},j='<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',V={component:t,title:"Components/UsaCollectionItem",argTypes:{heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},customClasses:{control:{type:"object"}},media:{control:{type:"text"}},calendar:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},description:{control:{type:"text"}},default:{control:{type:"text"}},meta:{control:{type:"text"}}},args:{heading:e.heading,headingTag:e.headingTag,href:e.href,to:e.to,routerComponentName:e.routerComponentName,customClasses:e.customClasses,media:"",calendar:"","slot:heading":"",description:"",default:"Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.",meta:""},decorators:[()=>({template:'<ul class="usa-collection"><story /></ul>'})],render:a=>({components:{UsaCollectionItem:t,UsaCollectionCalendar:N,UsaCollectionMeta:$,UsaCollectionMetaItem:J},props:Object.keys(t.props),setup(){return{args:a}},template:`<UsaCollectionItem
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >
    <template #media v-if="!!args.media">${a.media}</template>
    <template #calendar v-if="!!args.calendar">${a.calendar}</template>
    <template #heading v-if="!!args['slot:heading']">${a["slot:heading"]}</template>
    <template #description v-if="!!args.description">{{
      args.description
    }}</template>
    <template #default v-if="!!args.default">${a.default}</template>
    <template #meta v-if="!!args.meta">${a.meta}</template>
  </UsaCollectionItem>`})},o={args:{...e,heading:"Collection Item"},name:"Default",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Collection Item">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>`}}}},n={args:{...e,heading:"Collection w/ Media",media:j},name:"Collection w/ Media",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Collection w/ Media"><template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>`}}}},s={args:{...e,heading:"Collection w/ Calendar",media:"",calendar:'<UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" />'},name:"Collection w/ Calendar",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Collection w/ Calendar">
	<template #calendar><UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" /></template>
	<template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template>
</UsaCollectionItem>`}}}},i={args:{...e,heading:"Collection w/ Meta Items",media:j,meta:`<UsaCollectionMeta aria-label="Topics">
        <UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>
        <UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>
      </UsaCollectionMeta>`},name:"Collection w/ Meta Items",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Collection w/ Meta Items">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template>
	<template #meta>
		<UsaCollectionMeta aria-label="Topics">
			<UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>
			<UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>
		</UsaCollectionMeta>
	</template>
</UsaCollectionItem>`}}}},r={args:{...e,headingTag:"h4",heading:"Custom heading tag"},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Custom heading tag" heading-tag="h4">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>`}}}},l={args:{...e,"slot:heading":"Custom header slot"},name:"Header Slot",parameters:{docs:{source:{code:`<UsaCollectionItem heading-tag="h4"><template #heading>Custom header slot</template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>`}}}},d={args:{...e,heading:"Collection Item w/ description slot",description:"Custom description slot"},name:"Description Slot",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Collection Item w/ description slot"><template #heading>Custom header slot</template><template #description>Custom description slot</template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>`}}}},c={args:{...e,heading:"Collection Item",customClasses:{media:["test-media-class"],heading:["test-heading-class"],link:["test-link-class"],description:["test-description-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaCollectionItem heading="Collection Item" :custom-classes="{ media: ['test-media-class'],
      heading: ['test-heading-class'],
      link: ['test-link-class'],
      description: ['test-description-class'] }">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>`}}}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection Item'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Collection Item">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>\`
      }
    }
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection w/ Media',
    media: testMedia
  },
  name: 'Collection w/ Media',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Collection w/ Media"><template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>\`
      }
    }
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var C,w,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection w/ Calendar',
    media: '',
    calendar: '<UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" />'
  },
  name: 'Collection w/ Calendar',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Collection w/ Calendar">\\n\\t<template #calendar><UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" /></template>\\n\\t<template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template>\\n</UsaCollectionItem>\`
      }
    }
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var U,v,A;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection w/ Meta Items',
    media: testMedia,
    meta: \`<UsaCollectionMeta aria-label="Topics">
        <UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>
        <UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>
      </UsaCollectionMeta>\`
  },
  name: 'Collection w/ Meta Items',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Collection w/ Meta Items">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template>\\n\\t<template #meta>\\n\\t\\t<UsaCollectionMeta aria-label="Topics">\\n\\t\\t\\t<UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>\\n\\t\\t\\t<UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>\\n\\t\\t</UsaCollectionMeta>\\n\\t</template>\\n</UsaCollectionItem>\`
      }
    }
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var M,T,k;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headingTag: 'h4',
    heading: 'Custom heading tag'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Custom heading tag" heading-tag="h4">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>\`
      }
    }
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var y,G,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:heading': 'Custom header slot'
  },
  name: 'Header Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading-tag="h4"><template #heading>Custom header slot</template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>\`
      }
    }
  }
}`,...(b=(G=l.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var P,z,S;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection Item w/ description slot',
    description: 'Custom description slot'
  },
  name: 'Description Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Collection Item w/ description slot"><template #heading>Custom header slot</template><template #description>Custom description slot</template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>\`
      }
    }
  }
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var x,D,H;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection Item',
    customClasses: {
      media: ['test-media-class'],
      heading: ['test-heading-class'],
      link: ['test-link-class'],
      description: ['test-description-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionItem heading="Collection Item" :custom-classes="{ media: ['test-media-class'],
      heading: ['test-heading-class'],
      link: ['test-link-class'],
      description: ['test-description-class'] }">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>\`
      }
    }
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const W=["DefaultCollectionItem","MediaCollectionItem","CalendarCollectionItem","MetaItemsCollectionItem","CustomHeadingTagCollectionItem","HeadingSlotCollectionItem","DescriptionSlotCollectionItem","CustomClassesCollectionItem"];export{s as CalendarCollectionItem,c as CustomClassesCollectionItem,r as CustomHeadingTagCollectionItem,o as DefaultCollectionItem,d as DescriptionSlotCollectionItem,l as HeadingSlotCollectionItem,n as MediaCollectionItem,i as MetaItemsCollectionItem,W as __namedExportsOrder,V as default};
