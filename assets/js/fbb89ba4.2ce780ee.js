"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[147],{7699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),o=a(4762),s=a(2425);const r={title:"Locally (DuckDB)"},i=void 0,u={unversionedId:"accessing-the-data/locally",id:"accessing-the-data/locally",title:"Locally (DuckDB)",description:"DuckDB is an analytics tool you can install locally that can efficiently query remote Parquet files using SQL. It will only download the subset of files it needs to fulfill your queries.",source:"@site/docs/accessing-the-data/locally.mdx",sourceDirName:"accessing-the-data",slug:"/accessing-the-data/locally",permalink:"/accessing-the-data/locally",draft:!1,tags:[],version:"current",frontMatter:{title:"Locally (DuckDB)"},sidebar:"docs",previous:{title:"Cloud Services",permalink:"/accessing-the-data/cloud-services"},next:{title:"Build a Basemap",permalink:"/getting_started/build-a-map"}},c={},d=[],m={toc:d},p="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://duckdb.org/"},"DuckDB")," is an analytics tool you can install locally that can efficiently query remote Parquet files using SQL. It will only download the subset of files it needs to fulfill your queries."),(0,l.kt)("p",null,"You will need to install the following extensions (from the DuckDB CLI)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL SPATIAL;")," to install the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/duckdblabs/duckdb_spatial"},"duckdb_spatial")," extension."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL httpfs;")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL azure;")," to read from either Amazon S3 (",(0,l.kt)("a",{parentName:"li",href:"https://duckdb.org/docs/guides/import/s3_import.html"},"httpfs"),") or Microsoft Azure Blob Storage (",(0,l.kt)("a",{parentName:"li",href:"https://duckdb.org/docs/extensions/azure"},"azure"),").")),(0,l.kt)("p",null,"Load the extensions and set the DuckDB environment variables for either s3 or Azure:"),(0,l.kt)(o.Z,{queryString:"duckdb-setup",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"s3",label:"Amazon S3",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," LOAD spatial;\n LOAD httpfs;\n SET s3_region='us-west-2';\n"))),(0,l.kt)(s.Z,{value:"azure",label:"Azure",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," LOAD spatial;\n LOAD azure;\n SET azure_storage_connection_string = 'DefaultEndpointsProtocol=https;AccountName=overturemapswestus2;AccountKey=;EndpointSuffix=core.windows.net';\n")))),(0,l.kt)("p",null,"Here is an example query to download all of the Country boundaries from the ",(0,l.kt)("inlineCode",{parentName:"p"},"admins")," theme and create a single GeoJSON file using DuckDB:"),(0,l.kt)(o.Z,{queryString:"duckdb-setup",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"s3",label:"Amazon S3",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\n    SELECT\n           type,\n           subType,\n           localityType,\n           adminLevel,\n           isoCountryCodeAlpha2,\n           JSON(names) AS names,\n           JSON(sources) AS sources,\n           ST_GeomFromWkb(geometry) AS geometry\n      FROM read_parquet('s3://overturemaps-us-west-2/release/2023-10-19-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\n     WHERE adminLevel = 2\n       AND ST_GeometryType(ST_GeomFromWkb(geometry)) IN ('POLYGON','MULTIPOLYGON')\n) TO 'countries.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n"))),(0,l.kt)(s.Z,{value:"azure",label:"Azure",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\n    SELECT\n           type,\n           subType,\n           localityType,\n           adminLevel,\n           isoCountryCodeAlpha2,\n           JSON(names) AS names,\n           JSON(sources) AS sources,\n           ST_GeomFromWkb(geometry) AS geometry\n      FROM read_parquet('azure://release/2023-10-19-alpha.0/theme=admins/type=*/*', filename=true, hive_partitioning=1)\n     WHERE adminLevel = 2\n       AND ST_GeometryType(ST_GeomFromWkb(geometry)) IN ('POLYGON','MULTIPOLYGON')\n) TO 'countries.geojson'\nWITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');\n")))))}k.isMDXComponent=!0}}]);