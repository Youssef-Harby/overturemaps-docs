"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[773],{4928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var a=t(5893),r=t(1151),i=t(8859);const s="SELECT\n    id,\n    theme,\n    class,\n    CAST(sources AS JSON) AS sources,\n    sources[1].dataset AS primary_source,\n    CAST(names AS JSON) AS names,\n    ST_GeomFromBinary(geometry) AS geometry\nFROM overture\nWHERE theme='buildings'\n    AND type='building'\n    AND  bbox.xmin > 78.4194\n    AND bbox.xmax < 78.5129\n    AND bbox.ymin > 17.3427\n    AND bbox.ymax < 17.4192\n",l="LOAD spatial;\nLOAD httpfs;\n\nCOPY (\n    SELECT\n        id,\n        level,\n        height,\n        JSON(names) AS names,\n        sources[1].dataset AS primary_source,\n        JSON(sources) AS sources,\n        ST_GeomFromWkb(geometry) AS geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=*/*', filename=true, hive_partitioning=1)\n    WHERE\n        bbox.xmin > 78.4194\n        AND bbox.xmax < 78.5129\n        AND bbox.ymin > 17.3427\n        AND bbox.ymax < 17.4192\n) TO 'buildings_hyderabad.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n",o={title:"Overture Maps + kepler.gl"},d=void 0,u={id:"examples/kepler-gl",title:"Overture Maps + kepler.gl",description:"In this example, we'll query the Overture Maps buildings theme and download data for a specified bounding box. Then we'll load the data into kepler.gl, an open-source tool for working with large map datasets, and visualize the buildings data by data source: OpenStreetMap, Microsoft ML Building Footprints, and Google Open Buildings.",source:"@site/docs/examples/kepler-gl.mdx",sourceDirName:"examples",slug:"/examples/kepler-gl",permalink:"/examples/kepler-gl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overture Maps + kepler.gl"},sidebar:"docs",previous:{title:"Examples",permalink:"/examples/"},next:{title:"Visualizing Places in Rapid",permalink:"/examples/rapid-id"}},p={},h=[{value:"Query the data in AWS Athena",id:"query-the-data-in-aws-athena",level:2},{value:"Query the data using DuckDB",id:"query-the-data-using-duckdb",level:2},{value:"Explore the data in kepler.gl",id:"explore-the-data-in-keplergl",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In this example, we'll query the Overture Maps buildings theme and download data for a specified bounding box. Then we'll load the data into ",(0,a.jsx)(n.a,{href:"https://kepler.gl/demo",children:"kepler.gl"}),", an open-source tool for working with large map datasets, and visualize the buildings data by data source: ",(0,a.jsx)(n.a,{href:"https://wiki.openstreetmap.org/wiki/Key:building",children:"OpenStreetMap"}),", ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/GlobalMLBuildingFootprints",children:"Microsoft ML Building Footprints"}),", and ",(0,a.jsx)(n.a,{href:"https://sites.research.google/open-buildings/",children:"Google Open Buildings"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Requirements: you'll need an AWS account and access to an S3 bucket if you want to use Athena. If you're using DuckDB (we recommend 0.10.0), you'll need to install and load the spatial and S3 or Azure extensions. You do not need an account on kepler.gl."}),"\n",(0,a.jsx)(n.h2,{id:"query-the-data-in-aws-athena",children:"Query the data in AWS Athena"}),"\n",(0,a.jsxs)(n.p,{children:["Follow the ",(0,a.jsx)(n.a,{href:"/getting-data/cloud-services",children:"instructions for running the set-up queries"})," in Amazon Athena. Then you can run this in the Athena query console:"]}),"\n",(0,a.jsx)(i.Z,{query:s}),"\n",(0,a.jsx)(n.p,{children:"This outputs around 106,000 buildings in a table view that you can download as a CSV file."}),"\n",(0,a.jsx)(n.h2,{id:"query-the-data-using-duckdb",children:"Query the data using DuckDB"}),"\n",(0,a.jsx)(n.p,{children:"Here's a similar query in DuckDB's flavor of SQL that outputs a GeoJSON file."}),"\n",(0,a.jsx)(i.Z,{query:l}),"\n",(0,a.jsx)(n.h2,{id:"explore-the-data-in-keplergl",children:"Explore the data in kepler.gl"}),"\n",(0,a.jsxs)(n.p,{children:["Drag and drop the CSV or GeoJSON file into ",(0,a.jsx)(n.a,{href:"https://kepler.gl/demo",children:"kepler.gl"}),". Style the feature layer by choosing different colors based on the ",(0,a.jsx)(n.code,{children:"primary_source"})," field. Then you can explore the data sources that Overture Maps conflated to create the buildings theme."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"kepler.gl example",src:t(246).Z+"",width:"1279",height:"772"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"kepler.gl gif",src:t(352).Z+"",width:"1270",height:"772"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8859:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(9286),r=t(2263),i=t(5893);function s(e){const{siteConfig:{customFields:n}}=(0,r.Z)();var t=e.query.replace("__OVERTURE_RELEASE",n.overtureRelease);t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+n.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var s=e.language||"sql";return(0,i.jsx)(a.Z,{language:s,title:e.title,children:t})}},246:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kepler-overture-hyderabad-075eda9a6f53b5239a586e34f2009db5.png"},352:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kepler_overture_buildings_hyderabad-48f61bd38da94df6776371f57ab63d03.gif"}}]);