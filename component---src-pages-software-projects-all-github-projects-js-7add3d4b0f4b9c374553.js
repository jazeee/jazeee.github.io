(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(e,t,a){"use strict";a.r(t),a.d(t,"AllGithubProjects",function(){return g});a(65),a(62);var n=a(472),r=a.n(n),c=(a(215),a(337),a(0)),o=a.n(c),i=a(219),l=a(218),s=a(278),u=a(297),m=a(488),d=a(298),f=a.n(d),p=a(263),h=a(214),E=a(502);function v(e,t,a,n,r,c,o){try{var i=e[c](o),l=i.value}catch(s){return void a(s)}i.done?t(l):Promise.resolve(l).then(n,r)}var g=function(){var e=Object(c.useState)([]),t=e[0],a=e[1],n=Object(c.useState)(1),i=n[0],l=n[1],d=Object(c.useState)(""),g=d[0],b=d[1],w=Object(c.useState)(!0),j=w[0],y=w[1];return Object(c.useEffect)(function(){var e=!0;return function(){var t,n=(t=r.a.mark(function t(){var n,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a([]),b(""),y(!0),t.prev=3,t.next=6,fetch("https://api.github.com/users/jazeee/repos?sort=updated&page="+i);case 6:if(!(n=t.sent).ok){t.next=14;break}return t.next=10,n.json();case 10:c=t.sent,e&&(o=c.map(function(e){var t=e.name,a=e.description,n=e.full_name;return{name:t,description:a||"-",url:e.html_url,githubFullName:n}}),a(o),y(!1)),t.next=15;break;case 14:throw new Error(n.status+" - Bad response.");case 15:t.next=22;break;case 17:t.prev=17,t.t0=t.catch(3),b("Error retrieving data: "+t.t0),console.log(t.t0),y(!1);case 22:case"end":return t.stop()}},t,null,[[3,17]])}),function(){var e=this,a=arguments;return new Promise(function(n,r){var c=t.apply(e,a);function o(e){v(c,n,r,o,i,"next",e)}function i(e){v(c,n,r,o,i,"throw",e)}o(void 0)})});return function(){return n.apply(this,arguments)}}()(),function(){return e=!1}},[a,y,i,b]),o.a.createElement(s.a,{className:f.a.projects},o.a.createElement("h1",{className:f.a.header},"All Github Projects"),j&&o.a.createElement(E.a,null),g&&o.a.createElement(m.a,{variant:"h4"},g),t.map(function(e){return o.a.createElement(p.a,{key:e.name,project:e})}),o.a.createElement(s.a,{className:f.a.actions},o.a.createElement(u.a,{variant:"contained",disabled:i<=1,onClick:function(){return l(i-1)}},"Previous Page"),o.a.createElement(u.a,{variant:"contained",disabled:30!==t.length,onClick:function(){return l(i+1)}},"Next Page"),o.a.createElement(u.a,null,o.a.createElement(h.b,{to:"/software-projects"},"Featured Projects"))))};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(l.a,{title:"All Github Projects"}),o.a.createElement(g,null))}},214:function(e,t,a){"use strict";a(60);var n=a(0),r=a.n(n),c=a(487),o=a(59),i=a.n(o);a(217),r.a.createContext({});a.d(t,"b",function(){return l}),a.d(t,"a",function(){return s});var l=r.a.forwardRef(function(e,t){return r.a.createElement(c.a,Object.assign({component:i.a,ref:t},e))}),s=r.a.forwardRef(function(e,t){return r.a.createElement(l,Object.assign({innerRef:t},e))})},216:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(135),a(95),a(62),a(226),a(60);var n=a(0),r=a.n(n),c=a(487);var o=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children"]);return r.a.createElement(c.a,Object.assign({color:"secondary"},a,{target:"_blank",rel:"noopener noreferrer"}),t)}},217:function(e,t,a){var n;e.exports=(n=a(225))&&n.default||n},218:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(227),r=a(0),c=a.n(r),o=a(239),i=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return c.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s},{name:"keywords",content:l.siteMetadata.keywords}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""}},219:function(e,t,a){"use strict";var n=a(224),r=a(0),c=a.n(r),o=a(499),i=a(500),l=a(347),s=a(477),u=Object(s.a)({palette:{primary:{main:"#2F2001"},secondary:{main:"#0094FF"},error:{main:l.a.A400},background:{default:"#000"}}}),m=(a(237),a(496)),d=a(497),f=a(488),p=a(498),h=a(238),E=a.n(h),v=a(506),g=a(489),b=a(214),w=(a(215),a(490)),j=a(491),y=a(492),k=[{name:"Home",path:"/"},{name:"Github Projects",path:"/software-projects/all-github-projects/"},{name:"Skill Plots",path:"/skills-plots/"},{name:"Publications",path:"/publications/"},{name:"Presentations",path:"/presentations/"}],S=a(26),M=Object(g.a)({sideBar:{width:250},selectedLink:{color:"#0094FF"}}),P=function(e){var t=M(),a=e.closeSideBar;return c.a.createElement("div",{className:t.sideBar,role:"presentation",onClick:a,onKeyDown:a},c.a.createElement(S.Location,null,function(e){var a=e.location;return c.a.createElement(w.a,null,k.map(function(e){var n=e.name,r=e.path,o=a.pathname===r;return c.a.createElement(j.a,{className:o?t.selectedLink:void 0,key:n,component:b.a,button:!0,to:r},c.a.createElement(y.a,{primary:n}))}))}))},N=a(216),O=a(221),x=(a(60),a(305));function A(e){return c.a.createElement(x.a,Object.assign({fontSize:"inherit"},e),c.a.createElement("path",{d:"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}))}var z=a(493),C=a(494);function F(e){var t=e.children,a=Object(z.a)();return c.a.createElement(C.a,{appear:!1,direction:"down",in:!a},t)}var G=Object(g.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},social:{marginLeft:e.spacing(1)}}}),J=function(e){var t=c.a.useState(!1),a=t[0],n=t[1],r=e.siteTitle,o=G();return c.a.createElement("div",{className:o.root},c.a.createElement(v.a,{anchor:"left",open:a,onClose:function(){return n(!1)}},c.a.createElement(P,{closeSideBar:function(){return n(!1)}})),c.a.createElement(F,null,c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"Menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(){return n(!0)}},c.a.createElement(E.a,null)),c.a.createElement(f.a,{variant:"h6",className:o.title},c.a.createElement(b.b,{to:"/",color:"inherit"},r)),c.a.createElement(f.a,{variant:"h6",className:o.social},c.a.createElement(N.a,{color:"secondary",href:"http://www.linkedin.com/in/jazeee"},c.a.createElement(A,null))),c.a.createElement(f.a,{variant:"h6",className:o.social},c.a.createElement(N.a,{color:"secondary",href:"https://github.com/jazeee"},c.a.createElement(O.a,null)))))),c.a.createElement(d.a,null))};J.defaultProps={siteTitle:""},a.d(t,"a",function(){return L});var L=function(e){var t=e.children,a=n.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(i.a,{theme:u},c.a.createElement(J,{siteTitle:a.site.siteMetadata.title}),c.a.createElement("div",null,t),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",c.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},221:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(60);var n=a(0),r=a.n(n),c=a(305);function o(e){return r.a.createElement(c.a,Object.assign({fontSize:"inherit"},e),r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))}},224:function(e){e.exports={data:{site:{siteMetadata:{title:"Jaz Singh"}}}}},225:function(e,t,a){"use strict";a.r(t);a(60);var n=a(0),r=a.n(n),c=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Jaz Singh",description:"Jaz Singh: a software engineer and technical lead. I work with React, ES6+, Meteor, Java, PostgreSQL, MySQL, Arduino, ESP8266 among other things.",author:"@jazeee",keywords:"jazeee Jaz Software Engineer React ES6 JavaScript PostgreSQL MySQL Mongo Meteor Java c++"}}}}},263:function(e,t,a){"use strict";a.d(t,"a",function(){return u});a(215);var n=a(0),r=a.n(n),c=a(299),o=a.n(c),i=a(488),l=a(216),s=a(221),u=function(e){var t=e.project;return r.a.createElement("div",{className:o.a.project},r.a.createElement(i.a,{className:o.a.summary},r.a.createElement(l.a,{color:"secondary",href:t.url},t.name)," ","- ",t.description),r.a.createElement(i.a,{className:o.a.codeLink},r.a.createElement(l.a,{color:"secondary",href:"https://github.com/"+t.githubFullName},r.a.createElement(s.a,{className:o.a.GithubIcon}),"Github")))}}}]);
//# sourceMappingURL=component---src-pages-software-projects-all-github-projects-js-7add3d4b0f4b9c374553.js.map