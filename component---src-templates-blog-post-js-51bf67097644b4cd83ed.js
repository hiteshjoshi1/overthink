(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EYWl:function(e,t,n){"use strict";n("91GP");var a=n("c/e4"),r=n("q1tI"),i=n.n(r),l=n("TJpk"),o=n.n(l),s=n("Wbzz");function c(e){var t=e.meta,n=e.image,r=e.title,l=e.description,c=e.slug,u=e.lang,p=void 0===u?"en":u;return i.a.createElement(s.StaticQuery,{query:"3236765318",render:function(e){var a=e.site.siteMetadata,s=l||a.description,u=n?a.siteUrl+"/"+n:null,m=""+a.siteUrl+c;return i.a.createElement(o.a,Object.assign({htmlAttributes:{lang:p}},r?{titleTemplate:"%s — "+a.title,title:r}:{title:a.title+" — A blog by Hitesh Joshi"},{meta:[{name:"description",content:s},{property:"og:url",content:m},{property:"og:title",content:r||a.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:a})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,a(r))}},Nr18:function(e,t,n){"use strict";var a=n("S/j/"),r=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=a(this),n=i(t.length),l=arguments.length,o=r(l>1?arguments[1]:void 0,n),s=l>2?arguments[2]:void 0,c=void 0===s?n:r(s,n);c>o;)t[o++]=e;return t}},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-110e9eff930edde944df5869dbb61f83.jpeg"},SbOt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("ODHz"),l=n.n(i),o=n("p3AD");var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2)}},r.a.createElement("img",{src:l.a,alt:"Hitesh Joshi",style:{marginRight:Object(o.a)(.5),marginBottom:0,width:Object(o.a)(2),height:Object(o.a)(2),borderRadius:"50%"}}),r.a.createElement("p",{style:{maxWidth:400}},"Personal thoughts and musings"," ",r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/hiteshjoshi1/"},"Hitesh Joshi"),". Opinions are my own."))},a}(r.a.Component);t.a=s},bHtr:function(e,t,n){var a=n("XKFU");a(a.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Overthink","author":"Hitesh JOshi","description":"Personal thoughts and musings by Hitesh Joshi. Thoughts are my own.","siteUrl":"https://blog.hiteshj.com","social":{"twitter":"@joshi_ji"}}}}}')},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},yZlL:function(e,t,n){"use strict";n.r(t);n("91GP"),n("Vd3H"),n("Oyvg"),n("pIFo");var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),l=n("mwIZ"),o=n.n(l),s=(n("vPK/"),n("SbOt")),c=n("7oih"),u=n("EYWl"),p=n("JLKy"),m=n("L6NH"),d=n("p3AD"),h=(n("SRfc"),n("k7Sn")),f={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},g=function(e){return h.supportedLanguages[e].replace(/ /g," ")};function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"pageQuery",(function(){return k}));var y='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',E=function(e){function t(){return e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,l=e.editUrl,o=t.filter((function(e){return"ru"!==e})),s=-1!==t.indexOf("ru");return r.a.createElement("div",{className:"translations"},r.a.createElement(p.a,{style:{fontFamily:y}},t.length>0&&r.a.createElement("span",null,s&&r.a.createElement("span",null,"Originally written in:"," ","en"===n?r.a.createElement("b",null,g("en")):r.a.createElement(i.Link,{to:a("en")},"English")," • ","ru"===n?r.a.createElement("b",null,"Русский (авторский перевод)"):r.a.createElement(i.Link,{to:a("ru")},"Русский (авторский перевод)"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("span",null,"Translated by readers into: "),o.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e},e===n?r.a.createElement("b",null,g(e)):r.a.createElement(i.Link,{to:a(e)},g(e)),t===o.length-1?"":" • ")}))),"en"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),"ru"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Link,{to:a("en")},"Read the original")," • ",r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),r.a.createElement(i.Link,{to:"/"+n},"View all translated posts")," ")))},t}(r.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=o()(this.props,"data.site.siteMetadata.title");console.log(e);var a=this.props.pageContext,l=a.previous,p=a.next,b=a.slug,v=a.translations,k=a.translatedLinks,w=e.fields.langKey,j=e.html;j=function(e,t){var n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&h.supportedLanguages[t]?(n.forEach((function(n){f[n]&&f[n][t]&&(e=e.replace(n,f[n][t]))})),e):e}(j,w),k.forEach((function(e){var t="/"+w+e;j=j.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')})),(v=v.slice()).sort((function(e,t){return g(e)<g(t)?-1:1})),function(e){switch(e){case"ru":case"bg":n.e(0).then(n.t.bind(null,"EsZP",7)),n.e(0).then(n.t.bind(null,"s85H",7));break;case"uk":n.e(0).then(n.t.bind(null,"EsZP",7)),n.e(0).then(n.t.bind(null,"s85H",7)),n.e(0).then(n.t.bind(null,"Mq6Z",7)),n.e(0).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n.e(0).then(n.t.bind(null,"Mq6Z",7)),n.e(0).then(n.t.bind(null,"e/YJ",7));break;case"vi":n.e(0).then(n.t.bind(null,"Vjog",7)),n.e(0).then(n.t.bind(null,"Pf5Y",7));break;case"fa":n.e(0).then(n.t.bind(null,"BiVN",7));break;case"ar":n.e(0).then(n.t.bind(null,"xpFW",7))}}(w);var O=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:""+e+n}}(b,w),L=O("en"),S="https://github.com/hiteshjoshi1/overthink/edit/master/src/pages/"+L.slice(1,L.length-1)+"/index"+("en"===w?"":"."+w)+".md",x="https://mobile.twitter.com/search?q="+encodeURIComponent("http://hiteshj.com"+L);return r.a.createElement(c.a,{location:this.props.location,title:t},r.a.createElement(u.a,{lang:w,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-.8)})}," ",e.frontmatter.version?"Version - "+e.frontmatter.version:""," ","  "+Object(m.b)(e.timeToRead)," ",r.a.createElement("br",null),"First published - ",Object(m.a)(e.frontmatter.date,w)," "," ",e.frontmatter.updatedate?"Updated - "+Object(m.a)(e.frontmatter.updatedate,w):""," ",r.a.createElement("br",null)),v.length>0&&r.a.createElement(E,{translations:v,editUrl:S,languageLink:O,lang:w})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:j}}),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:x,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",r.a.createElement("a",{href:S,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),r.a.createElement("aside",null,r.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:y}}),r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(d.a)(.25)}},r.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"Overthink")),r.a.createElement(s.a,null),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,l&&r.a.createElement(i.Link,{to:l.fields.slug,rel:"prev",style:{marginRight:20}},"← ",l.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(i.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(r.a.Component),k=(t.default=v,"4157638696")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-51bf67097644b4cd83ed.js.map