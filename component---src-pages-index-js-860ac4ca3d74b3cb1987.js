(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9,10],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"Skills",function(){return u});var n=a(0),r=a.n(n),i=a(217),o=a(215),l=a(302),s=a.n(l),c=a(247).a.getDomainSkillNames("Software Engineering").filter(function(e,t){return t<12}),u=function(){return r.a.createElement("div",{className:s.a.aboutJaz},r.a.createElement("div",{className:s.a.container},r.a.createElement("div",{className:s.a.skillsHeaderOverlay},r.a.createElement("h1",null,"Full Stack Web Developer"),r.a.createElement("h4",null,"Primary Developer Skills (Sorted by skill level)"),r.a.createElement("ul",null,c.map(function(e){return r.a.createElement("li",{key:e},e)})),r.a.createElement("a",{href:"http://goo.gl/qWsPm",target:"_blank",rel:"noopener noreferrer"},"Resume"))))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Skills"}),r.a.createElement(u,null))}},203:function(e,t,a){"use strict";a.r(t),a.d(t,"SkillsPlotWithChooser",function(){return k}),a.d(t,"SkillsPlots",function(){return j});var n=a(0),r=a.n(n),i=a(322),o=a.n(i),l=a(217),s=a(215),c=a(269),u=a(462),m=a(287),p=a(491),d=a(493),g=a(324),f=a.n(g),h=a(247),S=a(323),v=a.n(S),b=a(218);function E(e){return e.error?r.a.createElement("div",null,"Error! ",r.a.createElement("button",{onClick:e.retry},"Retry")):r.a.createElement("div",null,"Loading...")}var y=o()({loader:function(){return Promise.all([a.e(0),a.e(15),a.e(16)]).then(a.bind(null,330))},render:function(e,t){var a=e.SkillsPlot;return r.a.createElement(a,t)},loading:function(){return r.a.createElement(E,null)}}),w=h.a.skillTypes,k=function(){var e=Object(n.useState)(w[0]),t=e[0],a=e[1],i=r.a.useState(null),o=i[0],l=i[1];return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Skills",r.a.createElement(m.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){var t=e.currentTarget;return l(t)},variant:"contained",color:"secondary",className:v.a.skillChooser},t,r.a.createElement(f.a,null))),r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(p.a,{id:"plot-chooser",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},w.map(function(e){return r.a.createElement(d.a,{key:e,onClick:function(){return a(e),void l(null)}},e)}),r.a.createElement(d.a,{key:"Show All Skills",component:b.a,to:"/skills-plots"}," ","Show All Skills"))),r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(y,{showTitle:!1,skillType:t}))))},j=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Skill Plots"),r.a.createElement(u.a,{container:!0,spacing:2},h.a.skillTypes.map(function(e){return r.a.createElement(u.a,{item:!0,xs:12,sm:12,md:6,key:e},r.a.createElement(y,{skillType:e}))})))};t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"Skill Plots"}),r.a.createElement(j,null))}},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(269),o=a(462),l=[{name:"Instrument Control via Web Interfaces at Web Design Meetup",location:"Madison WI",date:"2013-07-15",image:"images/scientific-instrument-control-and-visualization-2013-256px.png",links:[{name:"Presentation",url:"https://goo.gl/QAM6lm"},{name:"Meet Up",url:"http://www.meetup.com/madisonwebmeetup/events/124662962/"}]},{name:"Presenter, Co-Organizer of MadJS Meetup",location:"Madison WI",date:"2015-10-01 to 2016-09-12",image:"images/madjs-256px.jpeg",links:[{name:"Meet Up",url:"https://www.meetup.com/MadisonJS/"}]},{name:"MeteorJS (First Presentation)",location:"MadJS - Madison WI",date:"2015-05-11",image:"images/meteor-256px.png",links:[{name:"Presentation",url:"https://docs.google.com/presentation/d/18hfoQmwRLck6PjhKBw0-6Di6aZRmMjuwlRLMErj-ZYY/edit#slide=id.p­"},{name:"Video",url:"https://youtu.be/lK5gX7fNiT8"},{name:"Code",url:"https://github.com/jazeee/meteor-presentation"},{name:"MadJS Meet Up",url:"https://www.meetup.com/MadisonJS/events/qrhcbcythbpb/"}]},{name:"MeteorJS (Second Presentation)",location:"Meteor-Raleigh-Durham Meetup - Durham NC",date:"2015-08-25",image:"images/meteor2-256px.png",links:[{name:"Presentation",url:"https://docs.google.com/presentation/d/18hfoQmwRLck6PjhKBw0-6Di6aZRmMjuwlRLMErj-ZYY/edit#slide=id.p­"},{name:"Video",url:"https://youtu.be/63OEBoQljFY"},{name:"Meet Up",url:"http://www.meetup.com/Meteor-Raleigh-Durham/events/224412562/"}]},{name:"Scientific Instrument Control and Visualization",location:"Cary NC",date:"2015-12-08",image:"images/scientific-instrument-control-256px.png",links:[{name:"Presentation",url:"https://goo.gl/fn0M8k"},{name:"Video",url:"https://www.youtube.com/watch?v=jjHAyvvcgYc"},{name:"Meet Up",url:"http://www.meetup.com/Triangle-JavaScript/events/226738658/"},{name:"Repeat Event 2016-09-12",url:"https://www.meetup.com/MadisonJS/events/wqxgqlyvmbqb/"}]},{name:"Scientific Instrument Control and Visualization",location:"Madison WI",date:"2016-09-12",image:"images/scientific-instrument-control-2-256px.png",links:[{name:"Presentation",url:"https://goo.gl/fn0M8k"},{name:"Video",url:"https://www.youtube.com/watch?v=jjHAyvvcgYc&feature=youtu.be"},{name:"Meet Up",url:"https://www.meetup.com/MadisonJS/events/228040497/"}]},{name:"CoffeeScript Tips and Tricks",location:"Madison WI",date:"2015-12-14",image:"images/coffeescript-tips-and-tricks-256px.png",links:[{name:"Presentation",url:"https://goo.gl/lOmu3i"},{name:"Video",url:"https://www.youtube.com/watch?v=lB959j6ACLQ&feature=youtu.be"},{name:"Meet Up",url:"https://www.meetup.com/MadisonJS/events/gndnklytqbsb/"}]},{name:"Lightning Talk",location:"Durham NC",date:"2016-06-14",image:"images/lightning-talk-256px.png",links:[{name:"Code",url:"https://github.com/jazeee/triangle-js-lightning-talk"},{name:"More Code",url:"https://github.com/jazeee/meteor-chat"},{name:"Meet Up",url:"http://www.meetup.com/Triangle-JavaScript/events/231335330/"}]}],s=(a(216),a(326)),c=a.n(s),u=a(1),m=a.n(u),p=a(9),d=a.n(p),g=(a(15),a(61)),f=a(485),h=a(212),S=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.raised,o=void 0!==i&&i,l=d()(e,["classes","className","raised"]);return r.a.createElement(f.a,m()({className:Object(g.a)(a.root,n),elevation:o?8:1,ref:t},l))}),v=Object(h.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(S),b=r.a.forwardRef(function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,i=e.classes,o=e.className,l=d()(e,["disableSpacing","classes","className"]);return r.a.createElement("div",m()({className:Object(g.a)(i.root,o,!n&&i.spacing),ref:t},l))}),E=Object(h.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiCardActions"})(b),y=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.component,o=void 0===i?"div":i,l=d()(e,["classes","className","component"]);return r.a.createElement(o,m()({className:Object(g.a)(a.root,n),ref:t},l))}),w=Object(h.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(y),k=(a(21),["video","audio","picture","iframe","img"]),j=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.component,o=void 0===i?"div":i,l=e.image,s=e.src,c=e.style,u=d()(e,["classes","className","component","image","src","style"]),p=-1!==k.indexOf(o),f=!p&&l?m()({backgroundImage:'url("'.concat(l,'")')},c):c;return r.a.createElement(o,m()({className:Object(g.a)(a.root,n,p&&a.media),ref:t,style:f,src:p?l||s:void 0},u))}),M=Object(h.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%",objectFit:"cover"}},{name:"MuiCardMedia"})(j),P=a(287),x=a(480),C=a(214),N=function(e){var t=e.presentation,a=t.name,n=t.location,i=t.date,o=t.image,l=t.links;return r.a.createElement(v,{className:c.a.presentation},r.a.createElement(M,{className:c.a.media,title:a,image:o}),r.a.createElement(w,null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},n," on ",i)),r.a.createElement(E,null,l.map(function(e){var t=e.name,a=e.url;return r.a.createElement(P.a,{key:a,size:"small",color:"primary"},r.a.createElement(C.a,{href:a},t))})))},A=a(217),z=a(215);a.d(t,"Presentations",function(){return O});var O=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Presentations"),r.a.createElement(o.a,{container:!0,spacing:2},l.map(function(e,t){return r.a.createElement(o.a,{item:!0,xs:12,sm:12,md:6,key:t},r.a.createElement(N,{presentation:e}))})))};t.default=function(){return r.a.createElement(A.a,null,r.a.createElement(z.a,{title:"Presentations"}),r.a.createElement(O,null))}},205:function(e,t,a){"use strict";a.r(t);a(216);var n=a(0),r=a.n(n),i=a(269),o=a(327),l=a.n(o),s=[{name:"Correction for illumination non-uniformity during the synthesis of arrays of oligomers",date:"2008-09-09",media:"United States Patent 7422851",authors:"Green, R. Cerrina, F. & Singh J.",url:"https://patents.google.com/patent/US20030143550?oq=Correction+for+illumination+non-uniformity+during+the+synthesis+of+arrays+of+oligomers"},{name:"Complete genome sequence of Treponema pallidum ssp. pallidum strain SS14 determined with oligonucleotide arrays",date:"2008-05-15",media:"BMC Microbiology",authors:"Matějková et al.",url:"https://bmcmicrobiol.biomedcentral.com/articles/10.1186/1471-2180-8-76"},{name:"Mutation discovery in bacterial genomes: metronidazole resistance in Helicobacter pylori",date:"2005-11-18",media:"Nature Methods",authors:"Albert, T. et al.",url:"https://www.nature.com/articles/nmeth805"},{name:"Gene expression analysis using oligonucleotide arrays produced by maskless photolithography",date:"2002-09-10",media:"Cold Spring Harbor Laboratory Press",authors:"Nuwaysir, E. et al.",url:"https://genome.cshlp.org/content/12/11/1749"},{name:"X-ray mask fabrication at CxrL",date:"1999-06",media:"Proc SPIE",authors:"Leonard, Q., Bansel, J. et al.",url:"https://ui.adsabs.harvard.edu/abs/1999SPIE.3676...56L/abstract"},{name:"Heating of X-ray Masks During E-beam Writing",date:"1999-03",media:"Proc SPIE",authors:"Krasnoperov, N.,Bansel, J. et al.",url:"https://ui.adsabs.harvard.edu/abs/1999SPIE.3676..106K/abstract"}],c=a(328),u=a.n(c),m=a(480),p=a(214),d=function(e){var t=e.publication;return r.a.createElement("div",{className:u.a.publication},r.a.createElement("div",null,r.a.createElement(m.a,{variant:"h6",className:u.a.title},r.a.createElement(p.a,{color:"secondary",href:t.url},t.name)),r.a.createElement(m.a,{variant:"subtitle1",className:u.a.caption},t.authors)),r.a.createElement("div",null,r.a.createElement(m.a,{variant:"caption",className:u.a.caption},t.media," - (",t.date,")")))},g=a(217),f=a(215);a.d(t,"Publications",function(){return h});var h=function(){return r.a.createElement(i.a,{className:l.a.publications},r.a.createElement("h1",{className:l.a.header},"Publications"),s.map(function(e){return r.a.createElement(d,{key:e.name,publication:e})}))};t.default=function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{title:"Publications"}),r.a.createElement(h,null))}},206:function(e,t,a){"use strict";a.r(t);a(216);var n=a(0),r=a.n(n),i=a(269),o=a(287),l=[{name:"This Site",url:"http://www.jazeee.com",description:"Source code for this site (React, Gatsby, D3.js).",githubFullName:"jazeee/www.jazeee.com-2.0.0"},{name:"Dexcom Android Wall Panel",url:"https://github.com/jazeee/dexcom-android-wall-panel",description:"Displays graphical data of blood glucose readings. Implemented with React Native.",githubFullName:"jazeee/dexcom-android-wall-panel"},{name:"Practical React Tutorial Class Code",url:"https://github.com/jazeee/practical-react-demos-2018",description:"Practical React Tutorial code for team development classes.",githubFullName:"jazeee/practical-react-demos-2018"},{name:"Simple Meteor Chat",url:"http://meteor-chat.jazeee.com",description:"Deployed on Heroku, so wait a few seconds to launch.",githubFullName:"jazeee/meteor-chat"},{name:"Meteor presentation for MadJS",url:"https://github.com/jazeee/meteor-presentation",description:"Presented at MadJS, Meteor Madison, Meteor Raleigh Durham meetups.",githubFullName:"jazeee/meteor-presentation"},{name:"Jazeee Meteor Spiderable",url:"https://github.com/jazeee/jazeee-meteor-spiderable",description:"Spiderable package for Meteor with caching and other support features.",githubFullName:"jazeee/jazeee-meteor-spiderable"},{name:"Arduino Tardis Motion Detector",url:"https://github.com/jazeee/ArduinoTardisMotionDetector",description:"Fun project. Arduino Motion Detector that plays a Tardis sample and manipulates the lights.",githubFullName:"jazeee/ArduinoTardisMotionDetector"},{name:"Raspberry PI Node Playground",url:"https://github.com/jazeee/raspberry-pi-node-playground",description:"This is some play around code for my Raspberry PI.",githubFullName:"jazeee/raspberry-pi-node-playground"},{name:"NodeSchool Solutions",url:"https://github.com/jazeee/rerun-nodeschool-2018",description:"NodeSchool workshop solutions (ReRun) for team development",githubFullName:"jazeee/rerun-nodeschool-2018"}],s=a(288),c=a.n(s),u=a(257),m=a(217),p=a(215),d=a(218);a.d(t,"SoftwareProjects",function(){return g});var g=function(){return r.a.createElement(i.a,{className:c.a.projects},r.a.createElement("h1",{className:c.a.header},"Software Projects"),l.map(function(e){return r.a.createElement(u.a,{key:e.name,project:e})}),r.a.createElement(i.a,{className:c.a.actions},r.a.createElement(o.a,{variant:"contained",component:d.a,to:"/software-projects/all-github-projects"},"All Github Projects")))};t.default=function(){return r.a.createElement(m.a,null,r.a.createElement(p.a,{title:"Software Projects"}),r.a.createElement(g,null))}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(217),o=a(215),l=a(202),s=a(203),c=a(206),u=a(204),m=a(205);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(l.Skills,null),r.a.createElement(s.SkillsPlotWithChooser,null),r.a.createElement(c.SoftwareProjects,null),r.a.createElement(u.Presentations,null),r.a.createElement(m.Publications,null))}},213:function(e,t,a){var n;e.exports=(n=a(224))&&n.default||n},214:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(135),a(95),a(62),a(225),a(60);var n=a(0),r=a.n(n),i=a(479);var o=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children"]);return r.a.createElement(i.a,Object.assign({},a,{target:"_blank",rel:"noopener noreferrer"}),t)}},215:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(226),r=a(0),i=a.n(r),o=a(235),l=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c},{name:"keywords",content:s.siteMetadata.keywords}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""}},217:function(e,t,a){"use strict";var n=a(223),r=a(0),i=a.n(r),o=a(488),l=a(489),s=a(338),c=a(468),u=Object(c.a)({palette:{primary:{main:"#2F2001"},secondary:{main:"#0094FF"},error:{main:s.a.A400},background:{default:"#000"}}}),m=(a(233),a(484)),p=a(486),d=a(480),g=a(487),f=a(234),h=a.n(f),S=a(483),v=a(218),b=a(214),E=a(219),y=(a(60),a(293));function w(e){return i.a.createElement(y.a,Object.assign({fontSize:"inherit"},e),i.a.createElement("path",{d:"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}))}var k=a(481),j=a(482);function M(e){var t=e.children,a=Object(k.a)();return i.a.createElement(j.a,{appear:!1,direction:"down",in:!a},t)}var P=Object(S.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},social:{marginLeft:e.spacing(1)}}}),x=function(e){var t=e.siteTitle,a=P();return i.a.createElement("div",{className:a.root},i.a.createElement(M,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement(g.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(h.a,null)),i.a.createElement(d.a,{variant:"h6",className:a.title},i.a.createElement(v.b,{to:"/",color:"inherit"},t)),i.a.createElement(d.a,{variant:"h6",className:a.social},i.a.createElement(b.a,{color:"secondary",href:"http://www.linkedin.com/in/jazeee"},i.a.createElement(w,null))),i.a.createElement(d.a,{variant:"h6",className:a.social},i.a.createElement(b.a,{color:"secondary",href:"https://github.com/jazeee"},i.a.createElement(E.a,null)))))),i.a.createElement(p.a,null))};x.defaultProps={siteTitle:""},a.d(t,"a",function(){return C});var C=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null),i.a.createElement(l.a,{theme:u},i.a.createElement(x,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},218:function(e,t,a){"use strict";a(60);var n=a(0),r=a.n(n),i=a(479),o=a(59),l=a.n(o);a(213),r.a.createContext({});a.d(t,"b",function(){return s}),a.d(t,"a",function(){return c});var s=r.a.forwardRef(function(e,t){return r.a.createElement(i.a,Object.assign({component:l.a,ref:t},e))}),c=r.a.forwardRef(function(e,t){return r.a.createElement(s,Object.assign({innerRef:t},e))})},219:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(60);var n=a(0),r=a.n(n),i=a(293);function o(e){return r.a.createElement(i.a,Object.assign({fontSize:"inherit"},e),r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))}},223:function(e){e.exports={data:{site:{siteMetadata:{title:"Jaz Singh"}}}}},224:function(e,t,a){"use strict";a.r(t);a(60);var n=a(0),r=a.n(n),i=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},226:function(e){e.exports={data:{site:{siteMetadata:{title:"Jaz Singh",description:"Jaz Singh: a software engineer and technical lead. I work with React, ES6+, Meteor, Java, PostgreSQL, MySQL, Arduino, ESP8266 among other things.",author:"@jazeee",keywords:"jazeee Jaz Software Engineer React ES6 JavaScript PostgreSQL MySQL Mongo Meteor Java c++"}}}}},247:function(e,t,a){"use strict";a(140),a(136),a(137),a(138),a(139),a(275),a(259),a(142),a(143),a(216),a(60),a(135),a(95),a(62),a(225);var n=a(276),r=a.n(n),i=a(285),o=a.n(i),l=a(246),s=a.n(l),c=a(286),u=a.n(c);function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p={"JavaScript/ES6+":{type:"Language",experience:{2005:0,2007:10,2008:15,2011:20,2012:30,2013:60,2014:85,2015:90,2019:90},domains:["WebApp","Server","Software Engineering"],scoreWeight:3,isCurrentSkill:!0},CoffeeScript:{type:"Language",experience:{2012:0,2013:60,2014:85,2015:95,2016:80,2017:60,2018:0},domains:["WebApp","Server","Software Engineering"],scoreWeight:1},"Meteor.js":{type:"Platform",experience:{2013:0,2014:40,2015:70,2016:85,2017:65,2018:70,2019:70},domains:["WebApp","Server","Software Engineering"],scoreWeight:1.5,isCurrentSkill:!0},"Node.js":{type:"Platform",experience:{2011:0,2012:10,2013:20,2014:40,2015:60,2016:75,2018:75,2019:85},domains:["WebApp","Server","Software Engineering"],scoreWeight:2,isCurrentSkill:!0},React:{type:"Platform",experience:{2014:0,2015:10,2016:60,2017:80,2018:80,2019:90},domains:["WebApp","Software Engineering"],scoreWeight:2,isCurrentSkill:!0},"AngularJS 1.5":{type:"Platform",experience:{2012:0,2013:60,2014:80,2015:80,2016:90,2017:0},domains:["WebApp","Software Engineering"]},"AngularJS 2.0":{type:"Platform",experience:{2014:0,2015:10,2016:20,2017:20,2018:10},domains:["WebApp","Software Engineering"]},Bootstrap:{type:"Platform",experience:{2012:0,2013:55,2014:80,2015:85,2016:90,2017:90,2018:60},domains:["WebApp","Software Engineering"]},"Material-UI":{type:"Platform",experience:{2016:0,2017:20,2018:70,2019:80},domains:["WebApp","Software Engineering"],isCurrentSkill:!0},"D3.js":{type:"Platform",experience:{2012:0,2013:60,2014:75,2015:80,2016:80,2017:70,2018:60,2019:60},domains:["WebApp","Software Engineering"],scoreWeight:2,isCurrentSkill:!0},JQuery:{type:"Platform",experience:{2010:0,2011:20,2012:30,2013:40,2014:50,2015:70,2016:70,2017:40,2018:20},domains:["WebApp"]},"Jade/Pug":{type:"Language",experience:{2012:0,2013:60,2014:100,2016:100,2018:0},domains:["WebApp","Software Engineering"],scoreWeight:1},"HTML/CSS/Sass/Less":{type:"Language",experience:{2005:0,2006:10,2008:20,2010:20,2012:30,2013:50,2014:75,2015:85,2016:90,2017:90,2018:90,2019:90},domains:["WebApp","Software Engineering"],scoreWeight:2,isCurrentSkill:!0},Java:{type:"Language",experience:{2007:0,2008:10,2009:30,2010:60,2011:75,2012:85,2013:90,2014:85,2015:85,2016:85,2017:75,2018:70,2019:70},domains:["WebApp","Server","Android","Software Engineering"],scoreWeight:2,isCurrentSkill:!0},"ReST/WebSockets":{type:"Platform",experience:{2006:0,2007:40,2008:50,2009:70,2010:75,2011:75,2012:75,2013:80,2014:90,2015:90,2016:90,2017:90,2018:90,2019:90},domains:["WebApp","Server","Software Engineering"],isCurrentSkill:!0},Spring:{type:"Platform",experience:{2009:0,2010:30,2011:40,2012:40,2013:50,2014:50,2015:60,2016:60,2017:0},domains:["Server","Software Engineering"]},Python:{type:"Language",experience:{2010:0,2012:15,2013:25,2014:40,2015:50,2016:50,2017:60,2018:60,2019:65},domains:["Server","Software Engineering"],isCurrentSkill:!0},"c++":{type:"Language",experience:{1995:0,1996:10,1998:20,2e3:30,2001:40,2002:50,2004:70,2005:70,2006:85,2010:85,2012:80,2014:75,2015:70,2016:60,2017:50,2018:50,2019:50},domains:["Server","Software Engineering"]},STL:{type:"Platform",experience:{2002:0,2003:20,2004:50,2005:60,2006:70,2008:70,2010:60,2012:50,2014:40,2015:40,2016:30,2017:30,2018:30},domains:["Server","Software Engineering"]},"VC++":{type:"Language",experience:{1995:0,1996:10,1998:20,2e3:30,2001:40,2002:50,2004:70,2005:70,2006:70,2008:70,2010:50,2011:30,2013:0},domains:["Windows"]},Mongo:{type:"Database",experience:{2012:0,2013:10,2014:20,2015:45,2016:60,2017:60,2018:60,2019:60},domains:["Server","Software Engineering"],isCurrentSkill:!0},Postgresql:{type:"Database",experience:{2010:0,2011:10,2013:40,2014:60,2015:70,2016:85,2017:65,2018:45,2019:45},domains:["Server","Software Engineering"],isCurrentSkill:!0},MySQL:{type:"Database",experience:{2006:0,2008:10,2009:30,2010:60,2011:50,2013:50,2014:50,2015:50,2016:40,2017:60,2018:80,2019:80},domains:["Server","Software Engineering"],isCurrentSkill:!0},Linux:{type:"Environment",experience:{1999:0,2e3:10,2001:20,2002:50,2004:70,2005:75,2006:85,2008:85,2010:85,2012:90,2014:90,2015:90,2016:90,2017:90,2018:90,2019:90},domains:["Server","Linux","Software Engineering"],skillWeight:3,isCurrentSkill:!0},Windows:{type:"Environment",experience:{1992:0,1995:20,1997:40,1998:60,2e3:70,2001:70,2002:70,2004:70,2005:70,2006:70,2008:70,2010:70,2012:60,2014:50,2015:45,2016:45,2017:30,2018:30,2019:30},domains:["Windows"]},git:{type:"Source Control",experience:{2011:0,2012:10,2013:20,2014:30,2015:60,2016:80,2017:80,2018:80,2019:90},domains:["Process","Software Engineering"],skillWeight:3,isCurrentSkill:!0},"subversion (svn)":{type:"Source Control",experience:{2006:0,2007:10,2008:30,2009:50,2010:60,2011:70,2013:75,2014:75,2015:80,2016:70,2017:0},domains:["Process"]},cvs:{type:"Source Control",experience:{2003:0,2004:10,2005:20,2006:30,2007:30,2008:0},domains:["Process"]},"Visual Source Safe":{type:"Source Control",experience:{1997:0,1998:10,2e3:30,2002:40,2004:50,2005:45,2006:40,2007:20,2008:0},domains:["Process"]},"Team Leadership":{type:"Project Management",experience:{2002:0,2003:15,2004:25,2005:30,2006:35,2007:40,2008:50,2009:65,2010:75,2011:85,2012:90,2013:95,2014:95,2015:95,2016:95,2017:95,2018:95,2019:90},domains:["Process"],isCurrentSkill:!0},"Atlassian, Phabricator, Arcanist":{type:"Project Management",experience:{2007:0,2008:10,2009:30,2010:60,2011:70,2012:75,2013:85,2014:85,2015:85,2016:90,2017:90,2018:90,2019:90},domains:["Process"],isCurrentSkill:!0},"Agile/Kanban":{type:"Project Management",experience:{2008:0,2009:10,2010:35,2011:60,2012:75,2013:85,2014:90,2015:90,2016:90,2017:90,2018:90,2019:80},domains:["Process"],isCurrentSkill:!0}},d={};Object.keys(p).forEach(function(e){for(var t=p[e],a=t.experience,n=Object.keys(a),r=Math.min.apply(Math,m(n)),i=Math.max.apply(Math,m(n)),o=0,l=r+1;l<i;l++)if(null==a[l]){var s=n[o],c=n[o+1],u=c-s||1,g=(a[c]-a[s])/u,f=Math.max(0,Math.min(100,a[s]+g*(l-s)));a[l]=f}else o+=1;d[e]=Object.assign({},t,{experience:a})});var g=a(250);function f(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return h});var h=new function(){var e=this;this.getSkillData=function(e,t){void 0===t&&(t={});var a=t.minimumYearToInclude,n=d;return a&&(n=Object.keys(n).reduce(function(e,t){var r=n[t],i=r.experience,o={};return Object.keys(i).filter(function(e){return e>=a}).forEach(function(e){return o[e]=i[e]}),e[t]=Object.assign({},r,{experience:o}),e},{})),null!=e&&(n=u()(n,function(t){return t.type===e})),n},this.getSkillNames=function(t){var a=s()(e.getSkillData(t));return(a=o()(a,function(t){var a=r()(e.data,function(e){return e.name===t});return e.getSkillScore(a)})).reverse()},this.getSkillYearScore=function(t,a,n){return null==n&&(n=1),Math.max(.5,t-(e.latestYear-6))*a*n},this.getSkillScore=function(t){var a=0,n=t.experience;for(var r in n){var i=n[r];a+=e.getSkillYearScore(r,i,t.scoreWeight)}return a},this.getDomainSkills=function(t){var a=e.data.filter(function(e){return e.domains.includes(t)});return(a=o()(a,e.getSkillScore)).reverse()},this.getSkills=function(e){var t=[],a=0;for(var n in d){var r=d[n],i=r.type;if(null==e||e===i){var o=r.experience;for(var l in o){var s=o[l];t.push({skillName:n,year:l,skillLevel:s,type:i,index:a}),a++}}}return t},this.getDomainSkillNames=function(t){return e.getDomainSkills(t).map(function(e){return e.name})},this.data=[];var t=2010;for(var a in d){var n=Object.assign({name:a},d[a]);this.data.push(n),t=Object.keys(n.experience).map(function(e){return+e}).reduce(function(e,t){return Math.max(e,t)},t),n.score=this.getSkillScore(n)}this.latestYear=t,this.skillTypes=Object.values(d).map(function(e){return e.type}),this.skillTypes=["Language","Platform","Database","Environment","Source Control","Project Management"].concat(f(this.skillTypes)),this.skillTypes=this.skillTypes.filter(function(e,t,a){return a.indexOf(e)===t}),this.skillDomains=Object.values(d).map(function(e){return e.domains}).reduce(function(e,t){return[].concat(f(e),f(t))},[]),this.skillDomains=this.skillDomains.filter(function(e,t,a){return a.indexOf(e)===t}),this.skillNames=Object.keys(d).sort(),this.skillIndex={},this.skillColors={},this.skillNames.forEach(function(t,a){e.skillColors[t]=Object(g.a)(a),e.skillIndex[t]=a})}},250:function(e,t,a){"use strict";a.d(t,"a",function(){return s});for(var n=["orange","maroon","CornflowerBlue","coral","aqua","darkgoldenrod","lightgreen","Chocolate","red","darkgreen","blue","purple"],r=[],i=0;i<n.length/2;i++)for(var o=0;o<2;o++){r.push(n[2*i+o]);var l=20*i;1===o&&(l=120+l),r.push("hsl("+l+", 85%, 30%)"),r.push("hsl("+(l+8)+", 75%, 15%)"),r.push("hsl("+(l+15)+", 95%, 45%)")}var s=function(e){return r[e%r.length]}},257:function(e,t,a){"use strict";a.d(t,"a",function(){return u});a(216);var n=a(0),r=a.n(n),i=a(289),o=a.n(i),l=a(480),s=a(214),c=a(219),u=function(e){var t=e.project;return r.a.createElement("div",{className:o.a.project},r.a.createElement(l.a,{className:o.a.summary},r.a.createElement(s.a,{color:"secondary",href:t.url},t.name)," ","- ",t.description),r.a.createElement(l.a,{className:o.a.codeLink},r.a.createElement(s.a,{color:"secondary",href:"https://github.com/"+t.githubFullName},r.a.createElement(c.a,{className:o.a.GithubIcon}),"Github")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-860ac4ca3d74b3cb1987.js.map