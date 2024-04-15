"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[597],{7246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(5893),i=a(1151);const s={title:"Global Entity Reference System (GERS)"},r=void 0,o={id:"guides/gers",title:"Global Entity Reference System (GERS)",description:"Understanding GERS",source:"@site/docs/guides/gers.mdx",sourceDirName:"guides",slug:"/guides/gers",permalink:"/guides/gers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Global Entity Reference System (GERS)"},sidebar:"docs",previous:{title:"Scoping Rules",permalink:"/guides/feature-model/scoping-rules"},next:{title:"Places",permalink:"/guides/places"}},l={},d=[{value:"Understanding GERS",id:"understanding-gers",level:2},{value:"What is an entity?",id:"what-is-an-entity",level:2},{value:"What does a GERS ID look like?",id:"what-does-a-gers-id-look-like",level:2},{value:"Stability and Traceability",id:"stability-and-traceability",level:2},{value:"Using GERS",id:"using-gers",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"understanding-gers",children:"Understanding GERS"}),"\n",(0,n.jsx)(t.p,{children:"Overture's Global Entity Reference System (GERS) is a framework for structuring, encoding and matching map data to a shared universal reference. Overture is building this common ID system to solve the difficult problem of integrating geospatial datasets; to make it easier to share and sell map data; and to enable cooperation among companies, non-profits, government agencies and other organizations."}),"\n",(0,n.jsx)(t.p,{children:'GERS provides a mechanism to conflate datasets, matching one or more features via unique IDs. For example, two geospatial datasets each containing a polygon that represents the footprint of the Empire State Building can be easily matched because both polygons will contain the same GERS ID. The resulting dataset will have a single polygon feature, with one GERS ID, that represents the real-world entity known as "New York\'s Empire State Building."'}),"\n",(0,n.jsx)(t.h2,{id:"what-is-an-entity",children:"What is an entity?"}),"\n",(0,n.jsx)(t.p,{children:"Overture defines an entity as a physical thing or concept in the real world, represented as a feature in a geospatial dataset. It could be a segment of road, a city boundary, a grocery store, a building or a park. Overture assigns unique IDs, called GERS IDs, to these features. In most cases it's helpful to think of an entity and a feature as the same thing, but in practice it can be more complicated. An entity in the world could be represented by multiple features in a dataset, and a feature in a dataset might be a representation of multiple entities in the world. For example, a school building and its entrances and exits might be considered a single entity in the world but could be represented as multiple features in a dataset, each feature with its own GERS ID."}),"\n",(0,n.jsx)(t.h2,{id:"what-does-a-gers-id-look-like",children:"What does a GERS ID look like?"}),"\n",(0,n.jsx)(t.p,{children:"Each unique ID generated by Overture is 128 bits. Here is an example query that outputs a list of GERS IDs for five building features in Overture's March 2024 data release."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"D SET s3_region='us-west-2';\nD SELECT id FROM read_parquet('s3://overturemaps-us-west-2/release/2024-03-12-alpha.0/theme=buildings/type=*/*', filename=true, hive_partitioning=1) limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                id                \u2502\n\u2502             varchar              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 08bf2a40219b0fff0200c394dae731bd \u2502\n\u2502 08bf35ad6a05afff0200e90ab3b011fa \u2502\n\u2502 08bf35ad6a058fff020009945ce09d65 \u2502\n\u2502 08bf35ad6a04efff02006264a736fc56 \u2502\n\u2502 08bf35ad6a04afff0200cf5e511a3f1b \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502             5 rows               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,n.jsx)(t.h2,{id:"stability-and-traceability",children:"Stability and Traceability"}),"\n",(0,n.jsx)(t.p,{children:"GERS IDs are intended to be stable (within a reasonable tolerance of error) across multiple versions of Overture data. When stability is not possible, Overture will attempt to provide traceability. For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"a single road segment is bisected by a new road and becomes two road segments: 1 unique ID \u2192 2 new unique IDs;"}),"\n",(0,n.jsx)(t.li,{children:"a large building footprint is determined to be four smaller buildings when a higher resolution dataset becomes available: 1 unique ID \u2192 4 new unique ID;"}),"\n",(0,n.jsx)(t.li,{children:"a building is shifted 10 meters to the west when higher resolution imagery is made available: the unique ID is preserved for that feature"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-gers",children:"Using GERS"}),"\n",(0,n.jsx)(t.p,{children:"Currently, Overture's partners are using GERS in two ways:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contributing data."})," If an organization contributes data to the Overture Maps Foundation, the Overture engineering team matches the features in that dataset to existing features in the current Overture datasets. Matched features are assigned an existing GERS ID. New features may be assigned a new GERS ID."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Associating data."})," Users can independently conflate their own data with a current Overture dataset, identifying matches among features in both datasets. Only the features in the associated dataset that match an existing feature in the Overture data corpus can be assigned a GERS ID. The associated data will not become part of the Overture corpus, but it will become GERS-enabled data, ready to be matched to any of the available datasets in the Overture data ecosystem."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Feedback on GERS is welcome on ",(0,n.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema/discussions",children:"GitHub"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(7294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);