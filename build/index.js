(()=>{"use strict";var e,l={202:()=>{const e=window.wp.blocks,l=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components,t=window.ReactJSXRuntime,u=e=>{const{min:l,max:o,step:u,value:a,onChange:r,label:i,...s}=e,c=l.toString().length;return(0,t.jsx)(n.BaseControl,{label:i,children:(0,t.jsx)("input",{type:"number",min:l,max:o,step:u,value:a,onChange:e=>{let n=e.target.value;e.target.value.length>=c&&(n=n>o?o:n,n=n<l?l:n),r(n)},onBlur:e=>{let o=e.target.value;e.target.value.length<c&&(o=l),r(o)},style:{marginLeft:"8px"}})})},a=JSON.parse('{"UU":"create-block/multi-columns"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{columnCount:r,columnWidth:i,columnGap:s,columnRuleStyle:c,columnRuleWidth:m,columnRuleColor:h}=e,d={columnCount:r,columnWidth:i,columnGap:s,columnRuleStyle:c,columnRuleWidth:m,columnRuleColor:h};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.InspectorControls,{children:[(0,t.jsxs)(n.PanelBody,{title:"Column Settings",children:[(0,t.jsx)(n.RangeControl,{label:(0,l.__)("Columns"),value:r,onChange:e=>{a({columnCount:e})},min:2,max:6}),(0,t.jsx)(u,{label:"Width",value:i,onChange:e=>{a({columnWidth:Number(e)})},min:120,max:500,step:10}),(0,t.jsx)(u,{label:"Gap",value:s,onChange:e=>{a({columnGap:Number(e)})},min:10,max:100})]}),(0,t.jsxs)(n.PanelBody,{title:"Column Separator",children:[(0,t.jsx)(n.SelectControl,{label:"Separator Style",onChange:e=>{a({columnRuleStyle:e})},value:c,options:[{label:"None",value:"none"},{label:"Solid",value:"solid"},{label:"Dotted",value:"dotted"},{label:"Dashed",value:"dashed"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"Ridge",value:"ridge"}]}),(0,t.jsx)(u,{label:"Width",onChange:e=>{a({columnRuleWidth:Number(e)})},value:m,min:1,max:8})]}),(0,t.jsx)(o.PanelColorSettings,{title:"Color settings",colorSettings:[{label:"Separator Color",value:h,onChange:e=>{a({columnRuleColor:e})}}]})]}),(0,t.jsx)(o.RichText,{...(0,o.useBlockProps)({style:d}),tagName:"p",onChange:e=>{a({content:e})},value:e.content,placeholder:"Enter some text here..."})]})},save:function({attributes:e}){const{columnCount:l,columnWidth:n,columnGap:u,columnRuleStyle:a,columnRuleWidth:r,columnRuleColor:i}=e,s={columnCount:l,columnWidth:n,columnGap:u,columnRuleStyle:a,columnRuleWidth:r,columnRuleColor:i};return(0,t.jsx)(o.RichText.Content,{...o.useBlockProps.save({style:s}),tagName:"p",value:e.content})}})}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var u=o[e]={exports:{}};return l[e](u,u.exports,n),u.exports}n.m=l,e=[],n.O=(l,o,t,u)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],t=e[c][1],u=e[c][2];for(var r=!0,i=0;i<o.length;i++)(!1&u||a>=u)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(r=!1,u<a&&(a=u));if(r){e.splice(c--,1);var s=t();void 0!==s&&(l=s)}}return l}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[o,t,u]},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={57:0,350:0};n.O.j=l=>0===e[l];var l=(l,o)=>{var t,u,a=o[0],r=o[1],i=o[2],s=0;if(a.some((l=>0!==e[l]))){for(t in r)n.o(r,t)&&(n.m[t]=r[t]);if(i)var c=i(n)}for(l&&l(o);s<a.length;s++)u=a[s],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},o=self.webpackChunkmulti_columns=self.webpackChunkmulti_columns||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))})();var t=n.O(void 0,[350],(()=>n(202)));t=n.O(t)})();