(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(5378)}])},2077:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893),o=t(8495),a=t.n(o);function s(e){var r=e.text,t=e.link,o=e.isFunc,s=e.top,l=e.bottom,i=e.width,c=e.color,u=void 0===c?"var(--color-fg)":c,d=e.textColor,p=void 0===d?"var(--color-bg)":d,f=e.borderColor,m=e.borderWidth,h=void 0===m?2:m;return(0,n.jsx)("button",{className:a().btn,onClick:o?t:function(){t&&(window.location.href=t)},style:{marginTop:s,marginBottom:l,width:i,border:"".concat(h,"px solid ").concat(f),background:u},children:(0,n.jsx)("p",{className:a().text,style:{background:u,color:p},children:r})})}},3193:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893),o=t(3952),a=t.n(o);function s(){return(0,n.jsxs)("footer",{className:a().footerRoot,children:[(0,n.jsxs)("div",{className:a().titleWrapper,children:[(0,n.jsx)("div",{className:a().line}),(0,n.jsx)("h3",{className:a().futureblur,children:"Futureblur"}),(0,n.jsx)("div",{className:a().line})]}),(0,n.jsxs)("div",{className:a().socialsWrapper,children:[l("https://futureblur.com/instagram","logo-instagram"),l("https://futureblur.com/twitter","logo-twitter"),l("https://futureblur.com/youtube","logo-youtube")]}),(0,n.jsxs)("div",{className:a().linksWrapper,children:[(0,n.jsxs)("div",{className:a().footerSection,children:[(0,n.jsx)("span",{className:a().boldHeader,children:"EXPLORE"}),(0,n.jsx)("a",{className:a().linkItem,href:"https://instagram.com/itsfutureblur",children:"Virtual Gallery"}),(0,n.jsx)("a",{className:a().linkItem,href:"https://github.com/futureblur",children:"Open Source"}),(0,n.jsx)("a",{className:a().linkItem,href:"https://youtube.com/playlist?list=PLF32kULKiTMRpXWteNeJTRiAx7yxiRfhb",children:"Exclusives"})]}),(0,n.jsxs)("div",{className:a().footerSection,children:[(0,n.jsx)("span",{className:a().boldHeader,children:"SUPPORT"}),(0,n.jsx)("a",{className:a().linkItem,href:"https://futureblur.com/discord",children:"Join the community"}),(0,n.jsx)("a",{className:a().linkItem,href:"https://futureblur.com/contact",children:"Contact"}),(0,n.jsx)("a",{className:a().linkItem,href:"https://futureblur.com/legal",children:"Legal Notice"})]})]}),(0,n.jsx)("span",{className:a().version,children:"Version 3.3 (Spring Drop)"}),(0,n.jsx)("span",{className:a().copyright,children:"Copyright \xa9 2022 Futureblur. All rights reserved."})]})}function l(e,r){return(0,n.jsx)("a",{href:e,children:(0,n.jsx)("ion-icon",{name:r,size:"large"})})}},5378:function(e,r,t){"use strict";function n(e,r,t,n,o,a,s){try{var l=e[a](s),i=l.value}catch(c){return void t(c)}l.done?r(i):Promise.resolve(i).then(n,o)}t.r(r),t.d(r,{__N_SSG:function(){return _},default:function(){return v}});var o=t(4051),a=t.n(o),s=t(5893),l=t(7272),i=t.n(l),c=t(3193),u=t(2077),d=t(7294),p=t(9008),f=t.n(p),m=t(1163),h="https://futureblur-api.herokuapp.com",x="var(--color-gray)",b="var(--color-error)",_=!0;function v(e){var r=e.props,t=(0,d.useRef)(null),o=(0,d.useRef)(null),l=(0,d.useRef)(null),p=(0,d.useRef)(null),_=(0,d.useRef)(null),v=(0,d.useRef)(null),j=(0,d.useRef)(null),N=(0,d.useRef)(null);(0,d.useEffect)((function(){N.current.style.display="none"}),[]);var k,C=(0,m.useRouter)();r||(k=!0);var w=function(){var e,s=(e=a().mark((function e(n){var s,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!k){e.next=4;break}return C.reload(),e.abrupt("return");case 4:if(_.current&&(_.current.style.borderColor=x),t.current.style.borderColor=x,l.current.style.borderColor=x,o.current.style.display="none",p.current.style.display="none",v.current.style.display="none",s=!0,g(t.current.value)||(t.current.style.borderColor=b,o.current.style.display="block",s=!1),l.current.value.toString()||(l.current.style.borderColor=b,p.current.style.display="block",s=!1),_.current?_.current.value.toString()||(_.current.style.borderColor=b,v.current.style.display="block",s=!1):s=!1,s){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,fetch(h+"/captcha/validate?id=".concat(r.data.id,"&code=").concat(_.current.value));case 18:if(429===(i=e.sent).status){e.next=34;break}return e.next=22,i.json();case 22:if(e.sent.valid){e.next=27;break}_.current&&(_.current.style.borderColor=b,v.current.innerText="Incorrect input",v.current.style.display="block"),e.next=32;break;case 27:return c=JSON.stringify({address:t.current.value,message:l.current.value}),e.next=30,fetch(h+"/contactEmail",{method:"POST",body:c,headers:{"Content-Type":"application/json"}}).catch();case 30:200===e.sent.status&&(j.current.style.display="none",N.current.style.display="flex");case 32:e.next=35;break;case 34:k=!0;case 35:return e.next=37,C.replace(C.asPath);case 37:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(o,a){var s=e.apply(r,t);function l(e){n(s,o,a,l,i,"next",e)}function i(e){n(s,o,a,l,i,"throw",e)}l(void 0)}))});return function(e){return s.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsxs)(f(),{children:[(0,s.jsx)("title",{children:"Contact // Futureblur"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,s.jsx)("meta",{name:"description",content:"Software Engineer and creative digital artist who strives to produce high quality content."})]}),(0,s.jsx)("h1",{className:i().title,style:{marginBottom:"-5px"},children:"Contact"}),(0,s.jsx)("div",{className:i().formWrapper,children:(0,s.jsxs)("form",{className:i().formClass,onSubmit:w,ref:j,children:[(0,s.jsx)("label",{className:i().formLabel,children:"Email"}),(0,s.jsx)("input",{className:i().formInputField,placeholder:"example@gmail.com",type:"email",ref:t}),(0,s.jsx)("label",{className:i().formErrorLabel,ref:o,children:"Invalid email address"}),(0,s.jsx)("label",{className:i().formLabel,children:"Message"}),(0,s.jsx)("textarea",{className:i().formInputField,placeholder:"How can we help you?",ref:l,style:{height:"100px"}}),(0,s.jsx)("label",{className:i().formErrorLabel,ref:p,children:"This field is required"}),(0,s.jsx)("label",{className:i().formLabel,children:"Captcha"}),y(r,_,k),(0,s.jsx)("label",{className:i().formErrorLabel,ref:v,children:"Please solve the captcha"}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"40px",marginBottom:"90px"},children:(0,s.jsx)(u.Z,{text:k?"Refresh":"Submit",width:"100%"})})]})}),(0,s.jsx)("div",{ref:N,style:{display:"flex",justifyContent:"center",margin:"100px auto",padding:"var(--base-padding)"},children:(0,s.jsxs)("div",{style:{display:"inline-flex",padding:"10px 20px",background:"var(--color-primary-dark)",borderColor:"var(--color-primary)",borderWidth:"1px",borderRadius:"8px",borderStyle:"solid",boxShadow:"0 10px 50px rgba(109, 1, 231, 0.7)"},children:[(0,s.jsx)("div",{style:{display:"flex",alignItems:"center",paddingRight:"10px",color:"white",fontSize:"26px"},children:(0,s.jsx)("ion-icon",{name:"checkmark-circle-outline"})}),(0,s.jsx)("p",{style:{color:"var(--color-fg)"},children:"Your message was sent! We will reach out to you as soon as possible."})]})}),(0,s.jsx)(c.Z,{})]})}function y(e,r,t){return t?(0,s.jsx)("div",{children:(0,s.jsx)("label",{className:i().formLabel,style:{color:b,fontWeight:"600",margin:"10px auto"},children:"To prevent bots, we limit the number of captchas you can generate in a short period of time. Please try again later."})}):(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:{userSelect:"none"},children:(0,s.jsx)("img",{src:e.data.image,alt:"",style:{filter:"invert(1)",borderRadius:"6px",pointerEvents:"none",userSelect:"none"}})}),(0,s.jsx)("input",{className:i().formInputField,placeholder:"Enter the generated code above",ref:r})]})}var g=function(e){return/\S+@\S+\.\S+/.test(e)&&e.toString().length>0}},8495:function(e){e.exports={btn:"Button_btn__gkj_d",text:"Button_text__zLCn6"}},7272:function(e){e.exports={title:"Contact_title__iGKSD",formWrapper:"Contact_formWrapper__DmEW9",formClass:"Contact_formClass__N5F5A",formLabel:"Contact_formLabel__TpSMU",formErrorLabel:"Contact_formErrorLabel__wxIbF",formInputField:"Contact_formInputField__KijpG"}},3952:function(e){e.exports={footerRoot:"Footer_footerRoot__9K8CP",titleWrapper:"Footer_titleWrapper__hqO91",line:"Footer_line__MlDvK",futureblur:"Footer_futureblur__iOmTq",socialsWrapper:"Footer_socialsWrapper__Ar_zg",linksWrapper:"Footer_linksWrapper__CRNxF",footerSection:"Footer_footerSection__m5WLg",boldHeader:"Footer_boldHeader__qP71K",linkItem:"Footer_linkItem__dlh9q",version:"Footer_version__Y9BeB",copyright:"Footer_copyright__0_Me0"}},9008:function(e,r,t){e.exports=t(5443)},1163:function(e,r,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return r=8105,e(e.s=r);var r}));var r=e.O();_N_E=r}]);