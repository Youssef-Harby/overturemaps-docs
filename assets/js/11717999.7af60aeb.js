"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[778],{4633:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(5893),r=i(1151);const t={title:"Buildings"},c=void 0,o={id:"guides/buildings",title:"Buildings",description:"Overview",source:"@site/docs/guides/buildings.mdx",sourceDirName:"guides",slug:"/guides/buildings",permalink:"/guides/buildings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Buildings"},sidebar:"docs",previous:{title:"Places",permalink:"/guides/places"},next:{title:"Admins",permalink:"/guides/admins"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Key schema design choices",id:"key-schema-design-choices",level:2},{value:"Schema reference",id:"schema-reference",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The Overture Maps ",(0,s.jsx)(n.code,{children:"buildings"})," theme describes human-made structures with roofs or interior spaces that are permanently or semi-permanently in one place (source: ",(0,s.jsx)(n.a,{href:"https://wiki.openstreetmap.org/wiki/Key:building",children:"OSM building definition"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"key-schema-design-choices",children:"Key schema design choices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Extensible attributes."})," Overture starts from a basic model containing footprint polygons and a small number of optional attributes. Attributes currently not covered in the official schema release are allowed to exist with the prefix ",(0,s.jsx)(n.code,{children:"ext"})," in their name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Easy transformation from other data sources."})," Classes such as ",(0,s.jsx)(n.code,{children:"residential"}),", ",(0,s.jsx)(n.code,{children:"commercial"})," or ",(0,s.jsx)(n.code,{children:"education"})," are intended to be broad categories in which many different OSM tagging combinations can map to the same class."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.overturemaps.org/schema/reference/buildings/building",children:"Explore the schema reference for the building feature type"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.overturemaps.org/schema/reference/buildings/building_part",children:"Explore the schema reference for the building part feature type"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var s=i(7294);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);