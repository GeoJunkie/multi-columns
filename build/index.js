(()=>{"use strict";var e,l={202:()=>{const e=window.wp.blocks,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,t=window.ReactJSXRuntime,a=e=>{const{min:l,max:n,step:a,value:u,onChange:r,label:i,...s}=e,c=l.toString().length;return(0,t.jsx)(o.BaseControl,{label:i,children:(0,t.jsx)("input",{type:"number",min:l,max:n,step:a,value:u,onChange:e=>{let o=e.target.value;e.target.value.length>=c&&(o=o>n?n:o,o=o<l?l:o),r(o)},onBlur:e=>{let n=e.target.value;e.target.value.length<c&&(n=l),r(n)},style:{marginLeft:"8px"}})})},u=JSON.parse('{"UU":"create-block/multi-columns"}');(0,e.registerBlockType)(u.UU,{edit:function({attributes:e,setAttributes:u}){const r=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lectus non interdum cursus, arcu sapien mollis lacus, et tincidunt odio nisi ut purus. Duis eleifend, magna placerat faucibus tincidunt, orci nulla ornare tortor, eget egestas tortor nunc quis sem. Cras in tortor justo. Nulla consectetur leo vel blandit consectetur. Fusce quis sapien ante. Vestibulum non varius augue, et ultricies urna. Integer hendrerit suscipit nibh.","Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vestibulum mauris diam. Praesent semper diam a efficitur iaculis. Nullam lacinia augue quis lorem accumsan tempus. Maecenas dapibus velit eu blandit pretium. Nullam posuere ut ipsum in commodo. Fusce fringilla quis turpis a placerat. Etiam hendrerit velit a lacus varius ornare."],i=[["core/heading",{level:2,placeholder:"Heading..."}],["core/paragraph",{placeholder:r[0]}],["core/heading",{level:4,placeholder:"Sub-heading..."}],["core/paragraph",{placeholder:r[1]}]],{columnCount:s,columnWidth:c,columnGap:m,columnRuleStyle:d,columnRuleWidth:p,columnRuleColor:h}=e,v={columnCount:s,columnWidth:c,columnGap:m,columnRuleStyle:d,columnRuleWidth:p,columnRuleColor:h};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.InspectorControls,{children:[(0,t.jsxs)(o.PanelBody,{title:"Column Settings",children:[(0,t.jsx)(o.RangeControl,{label:(0,l.__)("Columns"),value:s,onChange:e=>{u({columnCount:e})},min:2,max:6}),(0,t.jsx)(a,{label:"Width",value:c,onChange:e=>{u({columnWidth:Number(e)})},min:120,max:500,step:10}),(0,t.jsx)(a,{label:"Gap",value:m,onChange:e=>{u({columnGap:Number(e)})},min:10,max:100})]}),(0,t.jsxs)(o.PanelBody,{title:"Column Separator",children:[(0,t.jsx)(o.SelectControl,{label:"Separator Style",onChange:e=>{u({columnRuleStyle:e})},value:d,options:[{label:"None",value:"none"},{label:"Solid",value:"solid"},{label:"Dotted",value:"dotted"},{label:"Dashed",value:"dashed"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"Ridge",value:"ridge"}]}),(0,t.jsx)(a,{label:"Width",onChange:e=>{u({columnRuleWidth:Number(e)})},value:p,min:1,max:8})]}),(0,t.jsx)(n.PanelColorSettings,{title:"Color settings",colorSettings:[{label:"Separator Color",value:h,onChange:e=>{u({columnRuleColor:e})}}]})]}),(0,t.jsx)("div",{...(0,n.useBlockProps)({style:v}),children:(0,t.jsx)(n.InnerBlocks,{allowedBlocks:["core/heading","core/paragraph","core/image"],template:i})})]})},save:function({attributes:e}){const{columnCount:l,columnWidth:o,columnGap:a,columnRuleStyle:u,columnRuleWidth:r,columnRuleColor:i}=e,s={columnCount:l,columnWidth:o,columnGap:a,columnRuleStyle:u,columnRuleWidth:r,columnRuleColor:i};return(0,t.jsx)("div",{...n.useBlockProps.save(),style:s,children:(0,t.jsx)(n.InnerBlocks.Content,{})})}})}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return l[e](a,a.exports,o),a.exports}o.m=l,e=[],o.O=(l,n,t,a)=>{if(!n){var u=1/0;for(c=0;c<e.length;c++){n=e[c][0],t=e[c][1],a=e[c][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||u>=a)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(r=!1,a<u&&(u=a));if(r){e.splice(c--,1);var s=t();void 0!==s&&(l=s)}}return l}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,t,a]},o.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={57:0,350:0};o.O.j=l=>0===e[l];var l=(l,n)=>{var t,a,u=n[0],r=n[1],i=n[2],s=0;if(u.some((l=>0!==e[l]))){for(t in r)o.o(r,t)&&(o.m[t]=r[t]);if(i)var c=i(o)}for(l&&l(n);s<u.length;s++)a=u[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self.webpackChunkmulti_columns=self.webpackChunkmulti_columns||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))})();var t=o.O(void 0,[350],(()=>o(202)));t=o.O(t)})();