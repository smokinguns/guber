(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{9663:function(e,t,s){Promise.resolve().then(s.bind(s,3692))},3692:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(9268),l=s(6006),a=s(3722),o=s.n(a),r=s(7931),c=s(4066),i=s(4612),u=s(9249),d=s(5857),x=s(2556),h=s(3882);function j(e){return console.log(e.items),(0,n.jsx)("ul",{children:e.items.map(t=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/video/".concat(e.videoId,"?startPos=").concat(t.start,"&endPos=").concat(t.end),children:t.title})},t.title))})}function m(e){e.sections[0];let[t,s]=(0,l.useState)(!1),a=(0,l.useRef)(null),[m,f]=(0,l.useState)(1),[P,Z]=(0,l.useState)(e.startPos),[p,v]=(0,l.useState)(e.endPos),[S,k]=(0,l.useState)(!1),[g,b]=(0,l.useState)(85),[C,E]=(0,l.useState)("0:00");(0,l.useEffect)(()=>{s(!0)},[]);let[w,y]=(0,l.useState)(""),[_,I]=(0,l.useState)(e.videoId);(0,l.useEffect)(()=>{y("https://www.youtube.com/watch?v=".concat(_))},[_]),(0,l.useEffect)(()=>()=>{S||O()},[S]);let[T,V]=(0,l.useState)(!1),F=()=>{V(!1)},N=e=>{let{playedSeconds:t}=e;E("".concat(Math.floor(t/60),":").concat(("00"+Math.floor(t%60)).slice(-2))),S&&t>=p&&a.current.seekTo(P)},M=()=>{console.log(a.current);let e=a.current;h.Z.request(e)},O=()=>{var e;null===(e=a.current)||void 0===e||e.seekTo(P)},R=()=>{a.current.seekTo(P),V(!0)};return(0,n.jsx)("div",{children:t?(0,n.jsx)("div",{children:(0,n.jsxs)(c.ZP,{container:!0,spacing:"24",children:[(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(o(),{ref:a,url:w,playing:T,controls:!0,config:{playerVars:{autoplay:0,controls:1}},volume:g,playbackRate:m,onProgress:N})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(j,{videoId:_,items:e.sections})}),(0,n.jsxs)(c.ZP,{item:!0,xs:12,children:["Elapsed Time: ",C]}),(0,n.jsx)(c.ZP,{item:!0,xs:2,children:(0,n.jsx)(i.Z,{label:"Start Position",value:P,onChange:e=>{Z(parseInt(e.target.value))}})}),(0,n.jsx)(c.ZP,{item:!0,xs:2,children:(0,n.jsx)(i.Z,{label:"End Position",value:p,onChange:e=>{v(parseInt(e.target.value))}})}),(0,n.jsx)(c.ZP,{item:!0,xs:2,children:(0,n.jsx)(u.Z,{label:"Loop",control:(0,n.jsx)(d.Z,{value:S,onChange:e=>{k(e.target.checked)}})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(u.Z,{label:"Playback Speed",labelPlacement:"top",control:(0,n.jsx)(x.ZP,{value:m,onChange:(e,t)=>{f(parseFloat(t.toString()))},defaultValue:1,step:.25,marks:!0,min:0,max:1})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(u.Z,{label:"Volume",labelPlacement:"top",control:(0,n.jsx)(x.ZP,{value:g,onChange:(e,t)=>{let s=parseFloat(t.toString());b(s)},defaultValue:.85,step:.01,marks:!0,min:0,max:1})})}),(0,n.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,n.jsx)(r.Z,{onClick:R,children:"Start"}),(0,n.jsx)(r.Z,{onClick:F,children:"Stop"}),(0,n.jsx)(r.Z,{onClick:O,children:"Seek"}),(0,n.jsx)(r.Z,{onClick:M,children:"Full Screen"})]})]})}):(0,n.jsx)("div",{})})}}},function(e){e.O(0,[806,667,139,744],function(){return e(e.s=9663)}),_N_E=e.O()}]);