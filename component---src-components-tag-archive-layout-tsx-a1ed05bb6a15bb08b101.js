(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+nq0":function(e,a,t){"use strict";t("E9XD");var n=t("q1tI"),r=t.n(n),l=t("IL04"),c=t("gRv6"),i=t("0lfv"),m=function(e){var a=e.title,t=e.data.allMdx.edges;if(!t)return null;var n=t.reduce((function(e,a){var t=a.node,n=t.frontmatter;if(n){var r=new Date(n.date).getFullYear().toString();e[r]||(e[r]=[]),e[r].push(t)}return e}),{});return r.a.createElement(l.a,{title:a},Object.entries(n).reverse().map((function(e,a){var t=e[0],n=e[1];return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("h2",null,t),r.a.createElement("ul",null,n.map((function(e,a){var t=i.b.SafeMetadataFromMdx(e),n=t.title,l=t.dateFormatted,m=t.url;return r.a.createElement("li",{key:a},r.a.createElement("h3",{className:"post-entry"},r.a.createElement(c.a,{to:m},n," ",r.a.createElement("small",null,l))))}))))})))};m.displayName="ArchiveLayout",a.a=m},IL04:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("RnvD"),c=function(e){var a=e.title,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{type:"page",title:a}),r.a.createElement("main",{role:"main",id:"main"},r.a.createElement("article",{className:"page"},r.a.createElement("header",{className:"page-header"},r.a.createElement("h1",{className:"page-title"},a)),r.a.createElement("div",{className:"page-content"},t))))};c.displayName="PageLayout",a.a=c},bGAR:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("+nq0"),c=function(e){var a=e.data,t=e.pageContext.tag;return r.a.createElement(l.a,{title:"Tag: "+t,data:a})};c.displayName="TagArchiveLayout",a.default=c}}]);
//# sourceMappingURL=component---src-components-tag-archive-layout-tsx-a1ed05bb6a15bb08b101.js.map