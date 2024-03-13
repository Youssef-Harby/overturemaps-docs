"use strict";(self.webpackChunkoverture_how_to=self.webpackChunkoverture_how_to||[]).push([[886],{1153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>A,frontMatter:()=>u,metadata:()=>h,toc:()=>p});var s=t(5893),r=t(1151),a=t(8859);const i="SELECT *\nFROM overture.release.__ATHENA_OVERTURE_RELEASE\nLIMIT 10\n",o="CREATE EXTERNAL TABLE `__ATHENA_OVERTURE_RELEASE` (\n  `id` string,\n  `geometry` binary,\n  `bbox` struct<minx:double,maxx:double,miny:double,maxy:double>,\n  `admin_level` int,\n  `is_maritime` boolean,\n  `geopol_display` string,\n  `version` int,\n  `update_time` string,\n  `sources` array<struct<property:string,dataset:string,record_id:string,confidence:double>>,\n  `subtype` string,\n  `locality_type` string,\n  `wikidata` string,\n  `context_id` string,\n  `population` int,\n  `iso_country_code_alpha_2` string,\n  `iso_sub_country_code` string,\n  `default_language` string,\n  `driving_side` string,\n  `names` struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>,\n  `locality_id` string,\n  `class` string,\n  `elevation` int,\n  `source_tags` map<string,string>,\n  `surface` string,\n  `is_salt` boolean,\n  `is_intermittent` boolean,\n  `level` int,\n  `has_parts` boolean,\n  `height` double,\n  `num_floors` int,\n  `facade_color` string,\n  `facade_material` string,\n  `roof_material` string,\n  `roof_shape` string,\n  `roof_direction` double,\n  `roof_orientation` string,\n  `roof_color` string,\n  `eave_height` double,\n  `min_height` double,\n  `building_id` string,\n  `categories` struct<main:string,alternate:array<string>>,\n  `confidence` double,\n  `websites` array<string>,\n  `socials` array<string>,\n  `emails` array<string>,\n  `phones` array<string>,\n  `brand` struct<wikidata:string,names:struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>>,\n  `addresses` array<struct<freeform:string,locality:string,postcode:string,region:string,country:string>>,\n  `connector_ids` array<string>,\n  `road` string)\nPARTITIONED BY (\n  `theme` string,\n  `type` string)\nSTORED AS PARQUET\nLOCATION\n  's3://overturemaps-us-west-2/release/__OVERTURE_RELEASE'\n",l="SELECT TOP 10 *\nFROM\n    OPENROWSET(\n        BULK 'https://overturemapswestus2.blob.core.windows.net/release/__OVERTURE_RELEASE/theme=places/type=place/',\n        FORMAT = 'PARQUET'\n    )\nWITH\n    (\n        names VARCHAR(MAX),\n        categories VARCHAR(MAX),\n        websites VARCHAR(MAX),\n        phones VARCHAR(MAX),\n        bbox VARCHAR(200),\n        geometry VARBINARY(MAX)\n    )\n    AS\n        [result]\nWHERE\n        TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.minx')) > -122.4447744\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.maxx')) < -122.2477071\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.miny')) > 47.5621587\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.maxy')) < 47.7120663\n",c="SELECT id,\n       class,\n       CAST(sources AS JSON) AS sources,\n       sources[1].dataset AS primary_source,\n       CAST(names AS JSON) AS names,\n       ST_GeomFromBinary(geometry) AS geometry\nFROM\n    overture.release.__ATHENA_OVERTURE_RELEASE\nWHERE theme='places'\n    AND type='place'\n    AND bbox.minX > -122.4447744\n        AND bbox.maxX < -122.2477071\n        AND bbox.minY > 47.5621587\n        AND bbox.maxY < 47.7120663\n",u={title:"Querying Data in the Cloud"},d=void 0,h={id:"accessing-data/cloud-services",title:"Querying Data in the Cloud",description:"You can access and query Overture parquet files directly in the cloud using one of the SQL query options documented below. You'll need an AWS account or a Microsoft Azure account.",source:"@site/docs/accessing-data/cloud-services.mdx",sourceDirName:"accessing-data",slug:"/accessing-data/cloud-services",permalink:"/how-to/accessing-data/cloud-services",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Querying Data in the Cloud"},sidebar:"docs",previous:{title:"Getting Overture Data",permalink:"/how-to/accessing-data/"},next:{title:"Querying Data Locally",permalink:"/how-to/accessing-data/locally"}},g={},p=[{value:"Amazon Athena (AWS)",id:"amazon-athena-aws",level:2},{value:"Optional: Add the table directly using the DDL",id:"optional-add-the-table-directly-using-the-ddl",level:4},{value:"Microsft Synapse (Azure)",id:"microsft-synapse-azure",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Details:u}=n;return u||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"You can access and query Overture parquet files directly in the cloud using one of the SQL query options documented below. You'll need an AWS account or a Microsoft Azure account."}),"\n",(0,s.jsx)(n.h2,{id:"amazon-athena-aws",children:"Amazon Athena (AWS)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add Overture as a cross-account data source using ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue-cross-account.html",children:"these instructions"}),".\nThe Catalog ID is ",(0,s.jsx)(n.code,{children:"913550007193"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["TIP: Overture's S3 bucket is located in the us-west-2 AWS region, so use Athena in ",(0,s.jsx)(n.code,{children:"us-west-2"})," for best performance."]}),"\n"]}),"\n",(0,s.jsxs)(u,{children:[(0,s.jsx)("summary",{children:"Screenshot"}),(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"AWS Glue Catalog",src:t(3523).Z+"",width:"1936",height:"1454"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Now each release is available as a table under the ",(0,s.jsx)(n.code,{children:"release"})," database in the ",(0,s.jsx)(n.code,{children:"overture"})," data source (note the ",(0,s.jsx)(n.code,{children:"v"})," at the beginning of the table name):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"AWS Glue Catalog",src:t(1019).Z+"",width:"333",height:"640"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"overture"})," data catalog will be updated with a new table for each release in the future."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Access Overture data in a particular release like this:"}),"\n",(0,s.jsx)(a.Z,{query:i}),"\n",(0,s.jsx)(n.p,{children:"Example Athena SQL query to download a CSV of places in Seattle:"}),"\n",(0,s.jsx)(a.Z,{query:c}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["More information on using Athena is available in the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html",children:"Amazon Athena User Guide"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"optional-add-the-table-directly-using-the-ddl",children:"Optional: Add the table directly using the DDL"}),"\n",(0,s.jsx)(n.p,{children:"If you prefer to create the table in your own data catalog, you can run the complete DDL query in the Athena Query Console. This will create tables in your AWS account's data catalog pointing directly to data hosted on Overture's S3 bucket."}),"\n",(0,s.jsxs)(u,{children:[(0,s.jsx)("summary",{children:"DDL Query Statement"}),(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,{query:o})})]}),"\n",(0,s.jsxs)(n.p,{children:["After you run the set-up query, you can load the partitions by running ",(0,s.jsx)(n.code,{children:"MSCK REPAIR TABLE overture"}),' or choosing "Load Partitions" from the table options menu.']}),"\n",(0,s.jsx)(n.h2,{id:"microsft-synapse-azure",children:"Microsft Synapse (Azure)"}),"\n",(0,s.jsxs)(n.p,{children:["In your Azure account, create a ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace",children:"Synapse workspace"}),". You can then run this SQL query to read places in Seattle:"]}),"\n",(0,s.jsx)(a.Z,{query:l}),"\n",(0,s.jsxs)(n.p,{children:["More information is available at ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/training/modules/query-data-lake-using-azure-synapse-serverless-sql-pools/3-query-files",children:'"Query files using a serverless SQL pool"'})," on Microsoft Learn."]})]})}function A(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8859:(e,n,t)=>{t.d(n,{Z:()=>i});var s=t(9286),r=t(2263),a=t(5893);function i(e){const{siteConfig:{customFields:n}}=(0,r.Z)();var t=e.query.replace("__OVERTURE_RELEASE",n.overtureRelease);t=t.replace("__ATHENA_OVERTURE_RELEASE","v"+n.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var i=e.language||"sql";return(0,a.jsx)(s.Z,{language:i,title:e.title,children:t})}},3523:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/aws-glue-data-catalog-values-56499d44a76f8a08a4ccd2037b1bab47.png"},1019:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/overture-release-tables-8c80faf8726c74bb9d8439b401bc9232.png"}}]);