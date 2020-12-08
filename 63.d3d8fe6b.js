(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(144);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(150);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var s=n(145);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var a=n(154);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return a.isSamePath}});var c=n(155);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var i=n(146);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return i.DocsPreferredVersionContextProvider}})},139:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},140:function(e,t,n){try{e.exports=n(151)}catch(r){e.exports={}}},142:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},144:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(22));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(140);t.isDocsPluginEnabled=!!r.useAllDocsData},146:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const c=s(n(0)),i=n(144),u=n(145),l=n(140),d=a(n(156));function f({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=d.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(d.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function p(){const e=l.useAllDocsData(),t=i.useThemeConfig().docs.versionPersistence,n=c.useMemo((()=>Object.keys(e)),[e]),[r,o]=c.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));c.useEffect((()=>{o(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,c.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const g=c.createContext(null);function m({children:e}){const t=p();return c.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return u.isDocsPluginEnabled?c.default.createElement(m,null,e):c.default.createElement(c.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=c.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},149:function(e,t,n){"use strict";var r=n(0),o=n(159);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(142),o=n(152),s=n(153);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return s.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getDocVersionSuggestions(n,o)}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return s})),n.d(t,"usePluginData",(function(){return a}));var r=n(22);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function s(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function a(e,t="default"){const n=s(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(142);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),s=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(s.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),s=o.activeVersion!==r;return{latestDocSuggestion:s?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:s?r:void 0}}},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(146),s=n(140),a=n(157);t.useDocsPreferredVersion=function(e=a.DEFAULT_PLUGIN_ID){const t=s.useDocsData(e),[n,c]=o.useDocsPreferredVersionContext(),{preferredVersionName:i}=n[e];return{preferredVersion:i?t.versions.find((e=>e.name===i)):null,savePreferredVersionName:r.useCallback((t=>{c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){const e=s.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},157:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},158:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},159:function(e,t,n){"use strict";var r=n(0);const o=n.n(r).a.createContext(void 0);t.a=o},161:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let s=!1;o.rangeCount>0&&(s=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(c){}return n.remove(),s&&(o.removeAllRanges(),o.addRange(s)),r&&r.focus(),a};e.exports=r,e.exports.default=r},162:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},163:function(e,t,n){"use strict";var r=n(3),o=n(0),s=n.n(o),a=n(139),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,s=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(s.style=a.plain),void 0!==o&&(s.style=void 0!==s.style?l({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return s[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[a].concat(c))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,s=e.token,a=l({},m(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,s=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],s=0,a=0,c=[],i=[c];a>-1;){for(;(s=r[a]++)<o[a];){var u=void 0,l=t[a],g=n[a][s];if("string"==typeof g?(l=a>0?l:["plain"],u=g):(l=p(l,g.type),g.alias&&(l=p(l,g.alias)),u=g.content),"string"==typeof u){var m=u.split(d),h=m.length;c.push({types:l,content:m[0]});for(var y=1;y<h;y++)f(c),i.push(c=[]),c.push({types:l,content:m[y]})}else a++,t.push(l),n.push(u),r.push(0),o.push(u.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return f(c),i}(void 0!==a?t.tokenize(r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),y=n(161),v=n.n(y),b=n(162),D=n.n(b),P={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(149),C=n(138);var O=()=>{const{prism:e}=Object(C.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||P,r=e.darkTheme||n;return t?r:n},k=n(54),A=n.n(k);const E=/{([\d,-]+)}/,V=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},S=/(?:title=")(.*)(?:")/;t.a=({children:e,className:t,metastring:n})=>{const{prism:c}=Object(C.useThemeConfig)(),[u,l]=Object(o.useState)(!1),[d,f]=Object(o.useState)(!1);Object(o.useEffect)((()=>{f(!0)}),[]);const p=Object(o.useRef)(null);let g=[],m="";const y=O();if(Array.isArray(e)&&(e=e.join("")),n&&E.test(n)){const e=n.match(E)[1];g=D()(e).filter((e=>e>0))}n&&S.test(n)&&(m=n.match(S)[1]);let b=t&&t.replace(/language-/,"");!b&&c.defaultLanguage&&(b=c.defaultLanguage);let P=e.replace(/\n$/,"");if(0===g.length&&void 0!==b){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return V(["js","jsBlock"]);case"jsx":case"tsx":return V(["js","jsBlock","jsx"]);case"html":return V(["js","jsBlock","html"]);case"python":case"py":return V(["python"]);default:return V()}})(b),r=e.replace(/\n$/,"").split("\n");let o;for(let e=0;e<r.length;){const s=e+1,a=r[e].match(n);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${s},`;break;case"highlight-start":o=s;break;case"highlight-end":t+=`${o}-${s-1},`}r.splice(e,1)}else e+=1}g=D()(t),P=r.join("\n")}const j=()=>{v()(P),l(!0),setTimeout((()=>l(!1)),2e3)};return s.a.createElement(h,Object(r.a)({},i,{key:String(d),theme:y,code:P,language:b}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:c})=>s.a.createElement(s.a.Fragment,null,m&&s.a.createElement("div",{style:t,className:A.a.codeBlockTitle},m),s.a.createElement("div",{className:A.a.codeBlockContent},s.a.createElement("div",{tabIndex:0,className:Object(a.a)(e,A.a.codeBlock,"thin-scrollbar",{[A.a.codeBlockWithTitle]:m})},s.a.createElement("div",{className:A.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return g.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),s.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>s.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t}))))))})))),s.a.createElement("button",{ref:p,type:"button","aria-label":"Copy code to clipboard",className:Object(a.a)(A.a.copyButton),onClick:j},u?"Copied":"Copy")))))}},164:function(e,t,n){"use strict";var r=n(0),o=n(158);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},168:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(139),a=n(138),c=n(164),i=n(55),u=n.n(i);t.a=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(c.a)(),{announcementBar:n}=Object(a.useThemeConfig)();if(!n)return null;const{content:r,backgroundColor:i,textColor:l,isCloseable:d}=n;return!r||d&&e?null:o.a.createElement("div",{className:u.a.announcementBar,style:{backgroundColor:i,color:l},role:"banner"},o.a.createElement("div",{className:Object(s.a)(u.a.announcementBarContent,{[u.a.announcementBarCloseable]:d}),dangerouslySetInnerHTML:{__html:r}}),d?o.a.createElement("button",{type:"button",className:u.a.announcementBarClose,onClick:t,"aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},173:function(e,t,n){"use strict";var r=n(0),o=n.n(r);const s="docusaurus.tab.";var a=()=>{const[e,t]=Object(r.useState)({}),n=Object(r.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(s)){e[n.substring(s.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,r)=>{t((t=>({...t,[e]:r}))),n(e,r)}}},c=n(138);const i="docusaurus.announcement.dismiss",u="docusaurus.announcement.id";var l=()=>{const{announcementBar:e}=Object(c.useThemeConfig)(),[t,n]=Object(r.useState)(!0),o=Object(r.useCallback)((()=>{localStorage.setItem(i,"true"),n(!0)}),[]);return Object(r.useEffect)((()=>{if(!e)return;const{id:t}=e;let r=localStorage.getItem(u);"annoucement-bar"===r&&(r="announcement-bar");const o=t!==r;localStorage.setItem(u,t),o&&localStorage.setItem(i,"false"),(o||"false"===localStorage.getItem(i))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:o}},d=n(158);t.a=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=a(),{isAnnouncementBarClosed:r,closeAnnouncementBar:s}=l();return o.a.createElement(d.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:r,closeAnnouncementBar:s}},e.children)}},174:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(8),a=n(138);const c="light",i="dark",u=e=>e===i?i:c,l=()=>s.a.canUseDOM?u(document.documentElement.getAttribute("data-theme")):c,d=e=>{try{localStorage.setItem("theme",u(e))}catch(t){console.error(t)}};var f=()=>{const{colorMode:{disableSwitch:e=!1}}=Object(a.useThemeConfig)(),[t,n]=Object(r.useState)(l),o=Object(r.useCallback)((()=>{n(c),d(c)}),[]),s=Object(r.useCallback)((()=>{n(i),d(i)}),[]);return Object(r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",u(t))}),[t]),Object(r.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(u(e))}catch(t){console.error(t)}}),[n]),Object(r.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{n(e?i:c)}))}),[]),{isDarkTheme:t===i,setLightTheme:o,setDarkTheme:s}},p=n(159);t.a=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=f();return o.a.createElement(p.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)}}}]);