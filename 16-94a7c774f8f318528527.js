(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{338:function(e,t,n){"use strict";n.r(t);n(268),n(215),n(135),n(95),n(62),n(226);var r=n(0),i=n.n(r),o=n(473),a=n.n(o),u=n(252),c=n(474),l=n.n(c),s=n(256);function d(){var e=window;return{width:e.outerWidth,height:e.outerHeight}}n.d(t,"SkillsPlot",function(){return v});var v=function(e){var t=Object(r.useState)(""),n=t[0],o=t[1],c=function(){var e=Object(r.useState)(d()),t=e[0],n=e[1];return Object(r.useEffect)(function(){function e(){n(d())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}().width<=480,v=e.skillType,f=void 0===v?"Language":v,m=e.showTitle,w=void 0===m||m,h=u.a.getSkillData(f,{minimumYearToInclude:2010}),k=Object.keys(h).map(function(e,t){var r=h[e],i=r.scoreWeight,o=void 0===i?1:i,a=r.isCurrentSkill,u=r.experience,c=Object.keys(u),l=Object.values(u).map(function(e,t){var n=c.length-t;return e*(o*(a?1+16/(n+6):1))});return{name:e,x:c,y:l,type:"bar",hoverinfo:"name",marker:{color:n&&n!==e?"gray":Object(s.a)(t)}}}),b=function(e){var t=((e.points||[])[0]||{}).data;o((void 0===t?{}:t).name)};return i.a.createElement(l.a,{data:k,useResizeHandler:!0,className:a.a.plot,layout:{title:w?f:void 0,autosize:!0,xaxis:{title:"Year"},yaxis:{title:"Relative Skill Level",showticklabels:!1},barmode:"stack",hovermode:"closest",showlegend:!c},onHover:b,onUnhover:function(){return o("")},onClick:b,onLegendClick:function(e){var t=e.curveNumber,r=k[t];if(r){var i=r.name;o(n===i?"":i)}else o("");return!1},onLegendDoubleClick:function(){return!1}})};t.default=function(e){return i.a.createElement(v,e)}}}]);
//# sourceMappingURL=16-94a7c774f8f318528527.js.map