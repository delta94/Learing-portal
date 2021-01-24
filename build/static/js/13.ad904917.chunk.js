(this["webpackJsonplearning-app"]=this["webpackJsonplearning-app"]||[]).push([[13],{1114:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(21),r=t(1),o=t.n(r),i=t(618),l=t(265),c=t(811),s=t(12),m=t(626),d=t(318),p=t(619),u=t(709),g=t(9),b=Object(l.a)((function(e){return{card:Object(n.a)({marginTop:"10px",width:"95%",borderRadius:16},e.breakpoints.only("xs"),{width:"100%"}),header:{fontFamily:"Barlow, san-serif"},headline:{color:e.palette.primary.main,fontSize:"1.25rem",fontWeight:600},link:{color:"#2281bb",padding:"0 0.25rem",fontSize:"0.875rem"},actions:{color:"#BDC9D7"},divider:{backgroundColor:"#d9e2ee",margin:"0 20px"},caption:Object(n.a)({overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitLineClamp:3,WebkitBoxOrient:"vertical",color:"#59626f"},e.breakpoints.down("sm"),{fontSize:"10px"}),category:Object(n.a)({color:" #59636f"},e.breakpoints.down("sm"),{fontSize:"10px"}),name:Object(n.a)({color:e.palette.primary.main,overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},e.breakpoints.down("sm"),{fontSize:"12px"}),items:{marginBottom:4,transition:"transform 0.7s ease-in-out","&:hover":{transform:"scale(1.05)"}},image:{borderRadius:10,boxShadow:"0 4px 4px 0 #BDC9D7"},cardMedia:{paddingTop:"75%",borderRadius:e.shape.borderRadius,boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"},dot:{height:"10px",width:"10px",backgroundColor:"#cfcde6",borderRadius:"50%",display:"inline-block",marginLeft:10,marginRight:4}}}));function f(e){var a=e.data,t=b(),n=Object(r.useState)(!1),l=Object(s.a)(n,2),c=l[0],f=l[1],x=Object(g.e)((function(e){return e.course})),h=x.categories,E=x.colorCategory;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:2,className:t.items,onClick:function(){f(!0)}},o.a.createElement(i.a,{item:!0,xs:5},o.a.createElement(m.a,{style:{background:"url('".concat(a.thumbnail,"')"),backgroundSize:"cover"},image:a.thumbnail,className:t.cardMedia,title:a.name})),o.a.createElement(i.a,{item:!0,xs:7},o.a.createElement(d.a,{fontSize:14,fontWeight:700,className:t.name},a.name),o.a.createElement(d.a,{fontSize:14,fontWeight:700,className:t.name},a.code),o.a.createElement(d.a,{fontSize:12,fontWeight:700,className:t.category},o.a.createElement("div",{className:t.dot,style:{background:E[a.courseCategoryId-1]}}),0!==h.length&&h[a.courseCategoryId-1].name),o.a.createElement(d.a,{fontSize:12,fontWeight:400,className:t.caption},a.learningObjective),o.a.createElement(p.a,null))),o.a.createElement(u.default,{open:c,setOpen:f,data:a}))}var x=Object(l.a)((function(e){return{card:Object(n.a)({marginTop:"10px",width:"95%",borderRadius:16},e.breakpoints.only("xs"),{width:"100%"}),header:{fontFamily:"Barlow, san-serif"},headline:{color:e.palette.primary.main,fontSize:"1.25rem",fontWeight:600},link:{color:"#2281bb",padding:"0 0.25rem",fontSize:"0.875rem"},actions:{color:"#BDC9D7"},divider:{backgroundColor:"#d9e2ee",margin:"0 20px"},caption:Object(n.a)({overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitLineClamp:3,WebkitBoxOrient:"vertical",color:"#59626f"},e.breakpoints.down("sm"),{fontSize:"10px"}),category:Object(n.a)({color:" #59636f"},e.breakpoints.down("sm"),{fontSize:"10px"}),name:Object(n.a)({color:e.palette.primary.main,overflow:"hidden",display:"-webkit-box",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},e.breakpoints.down("sm"),{fontSize:"12px"}),items:{marginBottom:4,transition:"transform 0.7s ease-in-out","&:hover":{transform:"scale(1.05)"}},image:{borderRadius:10,boxShadow:"0 4px 4px 0 #BDC9D7"},cardMedia:{paddingTop:"75%",borderRadius:e.shape.borderRadius,boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"},dot:{height:"10px",width:"10px",backgroundColor:"#cfcde6",borderRadius:"50%",display:"inline-block",marginLeft:10,marginRight:4}}}));function h(e){var a=e.title,t=e.data,n=x();return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Column,{p:0,gap:0,className:n.card},o.a.createElement(c.Row,{wrap:!0,p:2,alignItems:"baseline",className:n.header},o.a.createElement(c.Item,{stretched:!0,className:n.headline},a)),o.a.createElement(i.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},t.map((function(e,a){return o.a.createElement(f,{data:e,key:a})})))))}},709:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return W}));var n=t(41),r=t(1),o=t.n(r),i=t(265),l=t(326),c=t(8),s=t(46),m=t.n(s),d=t(628),p=t(114),u=t(324),g=t(615),b=t(616),f=t(614),x=t(618),h=t(660),E=t(404),k=t(422),v=t(26),w=t(9),y=t(817),O=t(818),j=t(819),S=t(820),C=Object(i.a)((function(e){return{root:{"& .MuiPaper-root":{background:"#ffffff94",backdropFilter:"blur(8px)",color:"#1b1a1a"}},avatar:{color:e.palette.getContrastText(k.a[500]),backgroundColor:k.a[500],marginRight:10},button:{textAlign:"center",margin:4,padding:4,fontWeight:700,fontSize:16},action:{textAlign:"center",margin:4,padding:4}}})),N=Object(c.a)((function(e){return Object(l.a)({root:{zIndex:2,margin:0,padding:e.spacing(2),color:"#1b1a1a"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},subtitle:{color:"#1b1a1a"}})}))((function(e){var a=e.children,t=e.classes,r=e.onClose,i=Object(n.a)(e,["children","classes","onClose"]);return o.a.createElement(d.a,Object.assign({disableTypography:!0,className:t.root},i),o.a.createElement(p.a,{variant:"h6"},a),r?o.a.createElement(u.a,{"aria-label":"close",className:t.closeButton,onClick:r},o.a.createElement(m.a,null)):null)})),z=Object(c.a)((function(e){return{root:{padding:e.spacing(2),color:"#1b1a1a"}}}))(g.a),B=Object(c.a)((function(e){return{root:{margin:0,padding:e.spacing(1),display:"block"}}}))(b.a);function W(e){var a=e.open,t=e.setOpen,n=e.data,r=function(){t(!1)},i=Object(w.d)(),l=C();return o.a.createElement("div",null,o.a.createElement(f.a,{onClose:r,fullWidth:!0,maxWidth:"sm",className:l.root,"aria-labelledby":"customized-dialog-title",open:a},o.a.createElement(N,{id:"customized-dialog-title",onClose:r},o.a.createElement(p.a,{variant:"h6"},n.name)),o.a.createElement(z,{dividers:!0},o.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement(x.a,{item:!0},o.a.createElement(h.a,{className:l.avatar},o.a.createElement(y.a,null))),o.a.createElement(x.a,{item:!0},o.a.createElement("h2",null,"\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49"))),o.a.createElement(p.a,{gutterBottom:!0,className:"color:'#90a0aa',fontWeigth:300"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.learningObjective}})),o.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement(x.a,{item:!0},o.a.createElement(h.a,{className:l.avatar},o.a.createElement(O.a,null))),o.a.createElement(x.a,{item:!0},o.a.createElement("h2",null,"\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49"))),o.a.createElement(p.a,{gutterBottom:!0},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.learningTopic}})),o.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement(x.a,{item:!0},o.a.createElement(h.a,{className:l.avatar},o.a.createElement(j.a,null))),o.a.createElement(x.a,{item:!0},o.a.createElement("h2",null,"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22"))),o.a.createElement(p.a,{gutterBottom:!0},"  ",o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.targetGroup}})),o.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement(x.a,{item:!0},o.a.createElement(h.a,{className:l.avatar},o.a.createElement(S.a,null))),o.a.createElement(x.a,{item:!0},o.a.createElement("h2",null,"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e1c\u0e25"))),o.a.createElement(p.a,{gutterBottom:!0},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.assessment}}))),o.a.createElement(B,{className:l.action},o.a.createElement(E.a,{onClick:function(){t(!1);var e=v.M(n.id);i(e),window.open(n.link,"_blank")},className:l.button},"\u0e40\u0e02\u0e49\u0e32\u0e40\u0e23\u0e35\u0e22\u0e19"))))}}}]);
//# sourceMappingURL=13.ad904917.chunk.js.map