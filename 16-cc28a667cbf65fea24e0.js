(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{325:function(e,n,t){"use strict";t.r(n),t.d(n,"SkillsPlot",function(){return v});t(258),t(216),t(135),t(95),t(62),t(225);var a=t(0),r=t.n(a),i=t(459),o=t.n(i),l=t(244),u=t(460),c=t.n(u),s=t(249),v=function(e){var n=Object(a.useState)(""),t=n[0],i=n[1],u=e.skillType,v=void 0===u?"Language":u,m=l.a.getSkillData(v,{minimumYearToInclude:2010}),d=Object.keys(m).map(function(e,n){var a=m[e],r=a.scoreWeight,i=void 0===r?1:r,o=a.isCurrentSkill,l=a.experience,u=Object.keys(l),c=Object.values(l).map(function(e,n){var t=u.length-n;return e*(i*(o?1+16/(t+6):1))});return{name:e,x:u,y:c,type:"bar",hoverinfo:"name",marker:{color:t&&t!==e?"gray":Object(s.a)(n)}}}),k=function(e){var n=((e.points||[])[0]||{}).data;i((void 0===n?{}:n).name)};return r.a.createElement(c.a,{data:d,useResizeHandler:!0,className:o.a.plot,layout:{title:v,autosize:!0,xaxis:{title:"Year"},yaxis:{title:"Relative Skill Level",showticklabels:!1},barmode:"stack",hovermode:"closest"},onHover:k,onUnhover:function(){return i("")},onClick:k,onLegendClick:function(e){var n=e.curveNumber,a=d[n];if(a){var r=a.name;i(t===r?"":r)}else i("");return!1},onLegendDoubleClick:function(){return!1}})};n.default=function(e){return r.a.createElement(v,e)}}}]);
//# sourceMappingURL=16-cc28a667cbf65fea24e0.js.map