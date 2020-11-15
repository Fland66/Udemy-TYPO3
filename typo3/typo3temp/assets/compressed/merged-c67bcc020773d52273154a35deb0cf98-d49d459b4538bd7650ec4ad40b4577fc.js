
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 2.7.0
 */
if (typeof YAHOO == "undefined" || !YAHOO) {
	var YAHOO = {};
}
YAHOO.namespace = function() {
	var A = arguments,E = null,C,B,D;
	for (C = 0; C < A.length; C = C + 1) {
		D = ("" + A[C]).split(".");
		E = YAHOO;
		for (B = (D[0] == "YAHOO") ? 1 : 0; B < D.length; B = B + 1) {
			E[D[B]] = E[D[B]] || {};
			E = E[D[B]];
		}
	}
	return E;
};
YAHOO.log = function(D, A, C) {
	var B = YAHOO.widget.Logger;
	if (B && B.log) {
		return B.log(D, A, C);
	} else {
		return false;
	}
};
YAHOO.register = function(A, E, D) {
	var I = YAHOO.env.modules,B,H,G,F,C;
	if (!I[A]) {
		I[A] = {versions:[],builds:[]};
	}
	B = I[A];
	H = D.version;
	G = D.build;
	F = YAHOO.env.listeners;
	B.name = A;
	B.version = H;
	B.build = G;
	B.versions.push(H);
	B.builds.push(G);
	B.mainClass = E;
	for (C = 0; C < F.length; C = C + 1) {
		F[C](B);
	}
	if (E) {
		E.VERSION = H;
		E.BUILD = G;
	} else {
		YAHOO.log("mainClass is undefined for module " + A, "warn");
	}
};
YAHOO.env = YAHOO.env || {modules:[],listeners:[]};
YAHOO.env.getVersion = function(A) {
	return YAHOO.env.modules[A] || null;
};
YAHOO.env.ua = function() {
	var C = {ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:0},B = navigator.userAgent,A;
	if ((/KHTML/).test(B)) {
		C.webkit = 1;
	}
	A = B.match(/AppleWebKit\/([^\s]*)/);
	if (A && A[1]) {
		C.webkit = parseFloat(A[1]);
		if (/ Mobile\//.test(B)) {
			C.mobile = "Apple";
		} else {
			A = B.match(/NokiaN[^\/]*/);
			if (A) {
				C.mobile = A[0];
			}
		}
		A = B.match(/AdobeAIR\/([^\s]*)/);
		if (A) {
			C.air = A[0];
		}
	}
	if (!C.webkit) {
		A = B.match(/Opera[\s\/]([^\s]*)/);
		if (A && A[1]) {
			C.opera = parseFloat(A[1]);
			A = B.match(/Opera Mini[^;]*/);
			if (A) {
				C.mobile = A[0];
			}
		} else {
			A = B.match(/MSIE\s([^;]*)/);
			if (A && A[1]) {
				C.ie = parseFloat(A[1]);
			} else {
				A = B.match(/Gecko\/([^\s]*)/);
				if (A) {
					C.gecko = 1;
					A = B.match(/rv:([^\s\)]*)/);
					if (A && A[1]) {
						C.gecko = parseFloat(A[1]);
					}
				}
			}
		}
	}
	A = B.match(/Caja\/([^\s]*)/);
	if (A && A[1]) {
		C.caja = parseFloat(A[1]);
	}
	return C;
}();
(function() {
	YAHOO.namespace("util", "widget", "example");
	if ("undefined" !== typeof YAHOO_config) {
		var B = YAHOO_config.listener,A = YAHOO.env.listeners,D = true,C;
		if (B) {
			for (C = 0; C < A.length; C = C + 1) {
				if (A[C] == B) {
					D = false;
					break;
				}
			}
			if (D) {
				A.push(B);
			}
		}
	}
})();
YAHOO.lang = YAHOO.lang || {};
(function() {
	var B = YAHOO.lang,F = "[object Array]",C = "[object Function]",A = Object.prototype,E = ["toString","valueOf"],D = {isArray:function(G) {
		return A.toString.apply(G) === F;
	},isBoolean:function(G) {
		return typeof G === "boolean";
	},isFunction:function(G) {
		return A.toString.apply(G) === C;
	},isNull:function(G) {
		return G === null;
	},isNumber:function(G) {
		return typeof G === "number" && isFinite(G);
	},isObject:function(G) {
		return(G && (typeof G === "object" || B.isFunction(G))) || false;
	},isString:function(G) {
		return typeof G === "string";
	},isUndefined:function(G) {
		return typeof G === "undefined";
	},_IEEnumFix:(YAHOO.env.ua.ie) ? function(I, H) {
		var G,K,J;
		for (G = 0; G < E.length; G = G + 1) {
			K = E[G];
			J = H[K];
			if (B.isFunction(J) && J != A[K]) {
				I[K] = J;
			}
		}
	} : function() {
	},extend:function(J, K, I) {
		if (!K || !J) {
			throw new Error("extend failed, please check that " + "all dependencies are included.");
		}
		var H = function() {
		},G;
		H.prototype = K.prototype;
		J.prototype = new H();
		J.prototype.constructor = J;
		J.superclass = K.prototype;
		if (K.prototype.constructor == A.constructor) {
			K.prototype.constructor = K;
		}
		if (I) {
			for (G in I) {
				if (B.hasOwnProperty(I, G)) {
					J.prototype[G] = I[G];
				}
			}
			B._IEEnumFix(J.prototype, I);
		}
	},augmentObject:function(K, J) {
		if (!J || !K) {
			throw new Error("Absorb failed, verify dependencies.");
		}
		var G = arguments,I,L,H = G[2];
		if (H && H !== true) {
			for (I = 2; I < G.length; I = I + 1) {
				K[G[I]] = J[G[I]];
			}
		} else {
			for (L in J) {
				if (H || !(L in K)) {
					K[L] = J[L];
				}
			}
			B._IEEnumFix(K, J);
		}
	},augmentProto:function(J, I) {
		if (!I || !J) {
			throw new Error("Augment failed, verify dependencies.");
		}
		var G = [J.prototype,I.prototype],H;
		for (H = 2; H < arguments.length; H = H + 1) {
			G.push(arguments[H]);
		}
		B.augmentObject.apply(this, G);
	},dump:function(G, L) {
		var I,K,N = [],O = "{...}",H = "f(){...}",M = ", ",J = " => ";
		if (!B.isObject(G)) {
			return G + "";
		} else {
			if (G instanceof Date || ("nodeType" in G && "tagName" in G)) {
				return G;
			} else {
				if (B.isFunction(G)) {
					return H;
				}
			}
		}
		L = (B.isNumber(L)) ? L : 3;
		if (B.isArray(G)) {
			N.push("[");
			for (I = 0,K = G.length; I < K; I = I + 1) {
				if (B.isObject(G[I])) {
					N.push((L > 0) ? B.dump(G[I], L - 1) : O);
				} else {
					N.push(G[I]);
				}
				N.push(M);
			}
			if (N.length > 1) {
				N.pop();
			}
			N.push("]");
		} else {
			N.push("{");
			for (I in G) {
				if (B.hasOwnProperty(G, I)) {
					N.push(I + J);
					if (B.isObject(G[I])) {
						N.push((L > 0) ? B.dump(G[I], L - 1) : O);
					} else {
						N.push(G[I]);
					}
					N.push(M);
				}
			}
			if (N.length > 1) {
				N.pop();
			}
			N.push("}");
		}
		return N.join("");
	},substitute:function(V, H, O) {
		var L,K,J,R,S,U,Q = [],I,M = "dump",P = " ",G = "{",T = "}",N;
		for (; ;) {
			L = V.lastIndexOf(G);
			if (L < 0) {
				break;
			}
			K = V.indexOf(T, L);
			if (L + 1 >= K) {
				break;
			}
			I = V.substring(L + 1, K);
			R = I;
			U = null;
			J = R.indexOf(P);
			if (J > -1) {
				U = R.substring(J + 1);
				R = R.substring(0, J);
			}
			S = H[R];
			if (O) {
				S = O(R, S, U);
			}
			if (B.isObject(S)) {
				if (B.isArray(S)) {
					S = B.dump(S, parseInt(U, 10));
				} else {
					U = U || "";
					N = U.indexOf(M);
					if (N > -1) {
						U = U.substring(4);
					}
					if (S.toString === A.toString || N > -1) {
						S = B.dump(S, parseInt(U, 10));
					} else {
						S = S.toString();
					}
				}
			} else {
				if (!B.isString(S) && !B.isNumber(S)) {
					S = "~-" + Q.length + "-~";
					Q[Q.length] = I;
				}
			}
			V = V.substring(0, L) + S + V.substring(K + 1);
		}
		for (L = Q.length - 1; L >= 0; L = L - 1) {
			V = V.replace(new RegExp("~-" + L + "-~"), "{" + Q[L] + "}", "g");
		}
		return V;
	},trim:function(G) {
		try {
			return G.replace(/^\s+|\s+$/g, "");
		} catch(H) {
			return G;
		}
	},merge:function() {
		var J = {},H = arguments,G = H.length,I;
		for (I = 0; I < G; I = I + 1) {
			B.augmentObject(J, H[I], true);
		}
		return J;
	},later:function(N, H, O, J, K) {
		N = N || 0;
		H = H || {};
		var I = O,M = J,L,G;
		if (B.isString(O)) {
			I = H[O];
		}
		if (!I) {
			throw new TypeError("method undefined");
		}
		if (!B.isArray(M)) {
			M = [J];
		}
		L = function() {
			I.apply(H, M);
		};
		G = (K) ? setInterval(L, N) : setTimeout(L, N);
		return{interval:K,cancel:function() {
			if (this.interval) {
				clearInterval(G);
			} else {
				clearTimeout(G);
			}
		}};
	},isValue:function(G) {
		return(B.isObject(G) || B.isString(G) || B.isNumber(G) || B.isBoolean(G));
	}};
	B.hasOwnProperty = (A.hasOwnProperty) ? function(G, H) {
		return G && G.hasOwnProperty(H);
	} : function(G, H) {
		return !B.isUndefined(G[H]) && G.constructor.prototype[H] !== G[H];
	};
	D.augmentObject(B, D, true);
	YAHOO.util.Lang = B;
	B.augment = B.augmentProto;
	YAHOO.augment = B.augmentProto;
	YAHOO.extend = B.extend;
})();
YAHOO.register("yahoo", YAHOO, {version:"2.7.0",build:"1799"});
YAHOO.util.Get = function() {
	var M = {},L = 0,R = 0,E = false,N = YAHOO.env.ua,S = YAHOO.lang;
	var J = function(W, T, X) {
		var U = X || window,Y = U.document,Z = Y.createElement(W);
		for (var V in T) {
			if (T[V] && YAHOO.lang.hasOwnProperty(T, V)) {
				Z.setAttribute(V, T[V]);
			}
		}
		return Z;
	};
	var I = function(T, U, W) {
		var V = W || "utf-8";
		return J("link", {"id":"yui__dyn_" + (R++),"type":"text/css","charset":V,"rel":"stylesheet","href":T}, U);
	};
	var P = function(T, U, W) {
		var V = W || "utf-8";
		return J("script", {"id":"yui__dyn_" + (R++),"type":"text/javascript","charset":V,"src":T}, U);
	};
	var A = function(T, U) {
		return{tId:T.tId,win:T.win,data:T.data,nodes:T.nodes,msg:U,purge:function() {
			D(this.tId);
		}};
	};
	var B = function(T, W) {
		var U = M[W],V = (S.isString(T)) ? U.win.document.getElementById(T) : T;
		if (!V) {
			Q(W, "target node not found: " + T);
		}
		return V;
	};
	var Q = function(W, V) {
		var T = M[W];
		if (T.onFailure) {
			var U = T.scope || T.win;
			T.onFailure.call(U, A(T, V));
		}
	};
	var C = function(W) {
		var T = M[W];
		T.finished = true;
		if (T.aborted) {
			var V = "transaction " + W + " was aborted";
			Q(W, V);
			return;
		}
		if (T.onSuccess) {
			var U = T.scope || T.win;
			T.onSuccess.call(U, A(T));
		}
	};
	var O = function(V) {
		var T = M[V];
		if (T.onTimeout) {
			var U = T.scope || T;
			T.onTimeout.call(U, A(T));
		}
	};
	var G = function(V, Z) {
		var U = M[V];
		if (U.timer) {
			U.timer.cancel();
		}
		if (U.aborted) {
			var X = "transaction " + V + " was aborted";
			Q(V, X);
			return;
		}
		if (Z) {
			U.url.shift();
			if (U.varName) {
				U.varName.shift();
			}
		} else {
			U.url = (S.isString(U.url)) ? [U.url] : U.url;
			if (U.varName) {
				U.varName = (S.isString(U.varName)) ? [U.varName] : U.varName;
			}
		}
		var c = U.win,b = c.document,a = b.getElementsByTagName("head")[0],W;
		if (U.url.length === 0) {
			if (U.type === "script" && N.webkit && N.webkit < 420 && !U.finalpass && !U.varName) {
				var Y = P(null, U.win, U.charset);
				Y.innerHTML = 'YAHOO.util.Get._finalize("' + V + '");';
				U.nodes.push(Y);
				a.appendChild(Y);
			} else {
				C(V);
			}
			return;
		}
		var T = U.url[0];
		if (!T) {
			U.url.shift();
			return G(V);
		}
		if (U.timeout) {
			U.timer = S.later(U.timeout, U, O, V);
		}
		if (U.type === "script") {
			W = P(T, c, U.charset);
		} else {
			W = I(T, c, U.charset);
		}
		F(U.type, W, V, T, c, U.url.length);
		U.nodes.push(W);
		if (U.insertBefore) {
			var e = B(U.insertBefore, V);
			if (e) {
				e.parentNode.insertBefore(W, e);
			}
		} else {
			a.appendChild(W);
		}
		if ((N.webkit || N.gecko) && U.type === "css") {
			G(V, T);
		}
	};
	var K = function() {
		if (E) {
			return;
		}
		E = true;
		for (var T in M) {
			var U = M[T];
			if (U.autopurge && U.finished) {
				D(U.tId);
				delete M[T];
			}
		}
		E = false;
	};
	var D = function(a) {
		var X = M[a];
		if (X) {
			var Z = X.nodes,T = Z.length,Y = X.win.document,W = Y.getElementsByTagName("head")[0];
			if (X.insertBefore) {
				var V = B(X.insertBefore, a);
				if (V) {
					W = V.parentNode;
				}
			}
			for (var U = 0; U < T; U = U + 1) {
				W.removeChild(Z[U]);
			}
			X.nodes = [];
		}
	};
	var H = function(U, T, V) {
		var X = "q" + (L++);
		V = V || {};
		if (L % YAHOO.util.Get.PURGE_THRESH === 0) {
			K();
		}
		M[X] = S.merge(V, {tId:X,type:U,url:T,finished:false,aborted:false,nodes:[]});
		var W = M[X];
		W.win = W.win || window;
		W.scope = W.scope || W.win;
		W.autopurge = ("autopurge" in W) ? W.autopurge : (U === "script") ? true : false;
		S.later(0, W, G, X);
		return{tId:X};
	};
	var F = function(c, X, W, U, Y, Z, b) {
		var a = b || G;
		if (N.ie) {
			X.onreadystatechange = function() {
				var d = this.readyState;
				if ("loaded" === d || "complete" === d) {
					X.onreadystatechange = null;
					a(W, U);
				}
			};
		} else {
			if (N.webkit) {
				if (c === "script") {
					if (N.webkit >= 420) {
						X.addEventListener("load", function() {
							a(W, U);
						});
					} else {
						var T = M[W];
						if (T.varName) {
							var V = YAHOO.util.Get.POLL_FREQ;
							T.maxattempts = YAHOO.util.Get.TIMEOUT / V;
							T.attempts = 0;
							T._cache = T.varName[0].split(".");
							T.timer = S.later(V, T, function(j) {
								var f = this._cache,e = f.length,d = this.win,g;
								for (g = 0; g < e; g = g + 1) {
									d = d[f[g]];
									if (!d) {
										this.attempts++;
										if (this.attempts++ > this.maxattempts) {
											var h = "Over retry limit, giving up";
											T.timer.cancel();
											Q(W, h);
										} else {
										}
										return;
									}
								}
								T.timer.cancel();
								a(W, U);
							}, null, true);
						} else {
							S.later(YAHOO.util.Get.POLL_FREQ, null, a, [W,U]);
						}
					}
				}
			} else {
				X.onload = function() {
					a(W, U);
				};
			}
		}
	};
	return{POLL_FREQ:10,PURGE_THRESH:20,TIMEOUT:2000,_finalize:function(T) {
		S.later(0, null, C, T);
	},abort:function(U) {
		var V = (S.isString(U)) ? U : U.tId;
		var T = M[V];
		if (T) {
			T.aborted = true;
		}
	},script:function(T, U) {
		return H("script", T, U);
	},css:function(T, U) {
		return H("css", T, U);
	}};
}();
YAHOO.register("get", YAHOO.util.Get, {version:"2.7.0",build:"1799"});
(function() {
	var Y = YAHOO,util = Y.util,lang = Y.lang,env = Y.env,PROV = "_provides",SUPER = "_supersedes",REQ = "expanded",AFTER = "_after";
	var YUI = {dupsAllowed:{"yahoo":true,"get":true},info:{"root":"2.7.0/build/","base":"http://yui.yahooapis.com/2.7.0/build/","comboBase":"http://yui.yahooapis.com/combo?","skin":{"defaultSkin":"sam","base":"assets/skins/","path":"skin.css","after":["reset","fonts","grids","base"],"rollup":3},dupsAllowed:["yahoo","get"],"moduleInfo":{"animation":{"type":"js","path":"animation/animation-min.js","requires":["dom","event"]},"autocomplete":{"type":"js","path":"autocomplete/autocomplete-min.js","requires":["dom","event","datasource"],"optional":["connection","animation"],"skinnable":true},"base":{"type":"css","path":"base/base-min.css","after":["reset","fonts","grids"]},"button":{"type":"js","path":"button/button-min.js","requires":["element"],"optional":["menu"],"skinnable":true},"calendar":{"type":"js","path":"calendar/calendar-min.js","requires":["event","dom"],"skinnable":true},"carousel":{"type":"js","path":"carousel/carousel-min.js","requires":["element"],"optional":["animation"],"skinnable":true},"charts":{"type":"js","path":"charts/charts-min.js","requires":["element","json","datasource"]},"colorpicker":{"type":"js","path":"colorpicker/colorpicker-min.js","requires":["slider","element"],"optional":["animation"],"skinnable":true},"connection":{"type":"js","path":"connection/connection-min.js","requires":["event"]},"container":{"type":"js","path":"container/container-min.js","requires":["dom","event"],"optional":["dragdrop","animation","connection"],"supersedes":["containercore"],"skinnable":true},"containercore":{"type":"js","path":"container/container_core-min.js","requires":["dom","event"],"pkg":"container"},"cookie":{"type":"js","path":"cookie/cookie-min.js","requires":["yahoo"]},"datasource":{"type":"js","path":"datasource/datasource-min.js","requires":["event"],"optional":["connection"]},"datatable":{"type":"js","path":"datatable/datatable-min.js","requires":["element","datasource"],"optional":["calendar","dragdrop","paginator"],"skinnable":true},"dom":{"type":"js","path":"dom/dom-min.js","requires":["yahoo"]},"dragdrop":{"type":"js","path":"dragdrop/dragdrop-min.js","requires":["dom","event"]},"editor":{"type":"js","path":"editor/editor-min.js","requires":["menu","element","button"],"optional":["animation","dragdrop"],"supersedes":["simpleeditor"],"skinnable":true},"element":{"type":"js","path":"element/element-min.js","requires":["dom","event"]},"event":{"type":"js","path":"event/event-min.js","requires":["yahoo"]},"fonts":{"type":"css","path":"fonts/fonts-min.css"},"get":{"type":"js","path":"get/get-min.js","requires":["yahoo"]},"grids":{"type":"css","path":"grids/grids-min.css","requires":["fonts"],"optional":["reset"]},"history":{"type":"js","path":"history/history-min.js","requires":["event"]},"imagecropper":{"type":"js","path":"imagecropper/imagecropper-min.js","requires":["dom","event","dragdrop","element","resize"],"skinnable":true},"imageloader":{"type":"js","path":"imageloader/imageloader-min.js","requires":["event","dom"]},"json":{"type":"js","path":"json/json-min.js","requires":["yahoo"]},"layout":{"type":"js","path":"layout/layout-min.js","requires":["dom","event","element"],"optional":["animation","dragdrop","resize","selector"],"skinnable":true},"logger":{"type":"js","path":"logger/logger-min.js","requires":["event","dom"],"optional":["dragdrop"],"skinnable":true},"menu":{"type":"js","path":"menu/menu-min.js","requires":["containercore"],"skinnable":true},"paginator":{"type":"js","path":"paginator/paginator-min.js","requires":["element"],"skinnable":true},"profiler":{"type":"js","path":"profiler/profiler-min.js","requires":["yahoo"]},"profilerviewer":{"type":"js","path":"profilerviewer/profilerviewer-min.js","requires":["profiler","yuiloader","element"],"skinnable":true},"reset":{"type":"css","path":"reset/reset-min.css"},"reset-fonts-grids":{"type":"css","path":"reset-fonts-grids/reset-fonts-grids.css","supersedes":["reset","fonts","grids","reset-fonts"],"rollup":4},"reset-fonts":{"type":"css","path":"reset-fonts/reset-fonts.css","supersedes":["reset","fonts"],"rollup":2},"resize":{"type":"js","path":"resize/resize-min.js","requires":["dom","event","dragdrop","element"],"optional":["animation"],"skinnable":true},"selector":{"type":"js","path":"selector/selector-min.js","requires":["yahoo","dom"]},"simpleeditor":{"type":"js","path":"editor/simpleeditor-min.js","requires":["element"],"optional":["containercore","menu","button","animation","dragdrop"],"skinnable":true,"pkg":"editor"},"slider":{"type":"js","path":"slider/slider-min.js","requires":["dragdrop"],"optional":["animation"],"skinnable":true},"stylesheet":{"type":"js","path":"stylesheet/stylesheet-min.js","requires":["yahoo"]},"tabview":{"type":"js","path":"tabview/tabview-min.js","requires":["element"],"optional":["connection"],"skinnable":true},"treeview":{"type":"js","path":"treeview/treeview-min.js","requires":["event","dom"],"optional":["json"],"skinnable":true},"uploader":{"type":"js","path":"uploader/uploader.js","requires":["element"]},"utilities":{"type":"js","path":"utilities/utilities.js","supersedes":["yahoo","event","dragdrop","animation","dom","connection","element","yahoo-dom-event","get","yuiloader","yuiloader-dom-event"],"rollup":8},"yahoo":{"type":"js","path":"yahoo/yahoo-min.js"},"yahoo-dom-event":{"type":"js","path":"yahoo-dom-event/yahoo-dom-event.js","supersedes":["yahoo","event","dom"],"rollup":3},"yuiloader":{"type":"js","path":"yuiloader/yuiloader-min.js","supersedes":["yahoo","get"]},"yuiloader-dom-event":{"type":"js","path":"yuiloader-dom-event/yuiloader-dom-event.js","supersedes":["yahoo","dom","event","get","yuiloader","yahoo-dom-event"],"rollup":5},"yuitest":{"type":"js","path":"yuitest/yuitest-min.js","requires":["logger"],"skinnable":true}}},ObjectUtil:{appendArray:function(o, a) {
		if (a) {
			for (var i = 0;
					i < a.length; i = i + 1) {
				o[a[i]] = true;
			}
		}
	},keys:function(o, ordered) {
		var a = [],i;
		for (i in o) {
			if (lang.hasOwnProperty(o, i)) {
				a.push(i);
			}
		}
		return a;
	}},ArrayUtil:{appendArray:function(a1, a2) {
		Array.prototype.push.apply(a1, a2);
	},indexOf:function(a, val) {
		for (var i = 0; i < a.length; i = i + 1) {
			if (a[i] === val) {
				return i;
			}
		}
		return -1;
	},toObject:function(a) {
		var o = {};
		for (var i = 0; i < a.length; i = i + 1) {
			o[a[i]] = true;
		}
		return o;
	},uniq:function(a) {
		return YUI.ObjectUtil.keys(YUI.ArrayUtil.toObject(a));
	}}};
	YAHOO.util.YUILoader = function(o) {
		this._internalCallback = null;
		this._useYahooListener = false;
		this.onSuccess = null;
		this.onFailure = Y.log;
		this.onProgress = null;
		this.onTimeout = null;
		this.scope = this;
		this.data = null;
		this.insertBefore = null;
		this.charset = null;
		this.varName = null;
		this.base = YUI.info.base;
		this.comboBase = YUI.info.comboBase;
		this.combine = false;
		this.root = YUI.info.root;
		this.timeout = 0;
		this.ignore = null;
		this.force = null;
		this.allowRollup = true;
		this.filter = null;
		this.required = {};
		this.moduleInfo = lang.merge(YUI.info.moduleInfo);
		this.rollups = null;
		this.loadOptional = false;
		this.sorted = [];
		this.loaded = {};
		this.dirty = true;
		this.inserted = {};
		var self = this;
		env.listeners.push(function(m) {
			if (self._useYahooListener) {
				self.loadNext(m.name);
			}
		});
		this.skin = lang.merge(YUI.info.skin);
		this._config(o);
	};
	Y.util.YUILoader.prototype = {FILTERS:{RAW:{"searchExp":"-min\\.js","replaceStr":".js"},DEBUG:{"searchExp":"-min\\.js","replaceStr":"-debug.js"}},SKIN_PREFIX:"skin-",_config:function(o) {
		if (o) {
			for (var i in o) {
				if (lang.hasOwnProperty(o, i)) {
					if (i == "require") {
						this.require(o[i]);
					} else {
						this[i] = o[i];
					}
				}
			}
		}
		var f = this.filter;
		if (lang.isString(f)) {
			f = f.toUpperCase();
			if (f === "DEBUG") {
				this.require("logger");
			}
			if (!Y.widget.LogWriter) {
				Y.widget.LogWriter = function() {
					return Y;
				};
			}
			this.filter = this.FILTERS[f];
		}
	},addModule:function(o) {
		if (!o || !o.name || !o.type || (!o.path && !o.fullpath)) {
			return false;
		}
		o.ext = ("ext" in o) ? o.ext : true;
		o.requires = o.requires || [];
		this.moduleInfo[o.name] = o;
		this.dirty = true;
		return true;
	},require:function(what) {
		var a = (typeof what === "string") ? arguments : what;
		this.dirty = true;
		YUI.ObjectUtil.appendArray(this.required, a);
	},_addSkin:function(skin, mod) {
		var name = this.formatSkin(skin),info = this.moduleInfo,sinf = this.skin,ext = info[mod] && info[mod].ext;
		if (!info[name]) {
			this.addModule({"name":name,"type":"css","path":sinf.base + skin + "/" + sinf.path,"after":sinf.after,"rollup":sinf.rollup,"ext":ext});
		}
		if (mod) {
			name = this.formatSkin(skin, mod);
			if (!info[name]) {
				var mdef = info[mod],pkg = mdef.pkg || mod;
				this.addModule({"name":name,"type":"css","after":sinf.after,"path":pkg + "/" + sinf.base + skin + "/" + mod + ".css","ext":ext});
			}
		}
		return name;
	},getRequires:function(mod) {
		if (!mod) {
			return[];
		}
		if (!this.dirty && mod.expanded) {
			return mod.expanded;
		}
		mod.requires = mod.requires || [];
		var i,d = [],r = mod.requires,o = mod.optional,info = this.moduleInfo,m;
		for (i = 0; i < r.length; i = i + 1) {
			d.push(r[i]);
			m = info[r[i]];
			YUI.ArrayUtil.appendArray(d, this.getRequires(m));
		}
		if (o && this.loadOptional) {
			for (i = 0; i < o.length; i = i + 1) {
				d.push(o[i]);
				YUI.ArrayUtil.appendArray(d, this.getRequires(info[o[i]]));
			}
		}
		mod.expanded = YUI.ArrayUtil.uniq(d);
		return mod.expanded;
	},getProvides:function(name, notMe) {
		var addMe = !(notMe),ckey = (addMe) ? PROV : SUPER,m = this.moduleInfo[name],o = {};
		if (!m) {
			return o;
		}
		if (m[ckey]) {
			return m[ckey];
		}
		var s = m.supersedes,done = {},me = this;
		var add = function(mm) {
			if (!done[mm]) {
				done[mm] = true;
				lang.augmentObject(o, me.getProvides(mm));
			}
		};
		if (s) {
			for (var i = 0; i < s.length; i = i + 1) {
				add(s[i]);
			}
		}
		m[SUPER] = o;
		m[PROV] = lang.merge(o);
		m[PROV][name] = true;
		return m[ckey];
	},calculate:function(o) {
		if (o || this.dirty) {
			this._config(o);
			this._setup();
			this._explode();
			if (this.allowRollup) {
				this._rollup();
			}
			this._reduce();
			this._sort();
			this.dirty = false;
		}
	},_setup:function() {
		var info = this.moduleInfo,name,i,j;
		for (name in info) {
			if (lang.hasOwnProperty(info, name)) {
				var m = info[name];
				if (m && m.skinnable) {
					var o = this.skin.overrides,smod;
					if (o && o[name]) {
						for (i = 0; i < o[name].length; i = i + 1) {
							smod = this._addSkin(o[name][i], name);
						}
					} else {
						smod = this._addSkin(this.skin.defaultSkin, name);
					}
					m.requires.push(smod);
				}
			}
		}
		var l = lang.merge(this.inserted);
		if (!this._sandbox) {
			l = lang.merge(l, env.modules);
		}
		if (this.ignore) {
			YUI.ObjectUtil.appendArray(l, this.ignore);
		}
		if (this.force) {
			for (i = 0; i < this.force.length; i = i + 1) {
				if (this.force[i] in l) {
					delete l[this.force[i]];
				}
			}
		}
		for (j in l) {
			if (lang.hasOwnProperty(l, j)) {
				lang.augmentObject(l, this.getProvides(j));
			}
		}
		this.loaded = l;
	},_explode:function() {
		var r = this.required,i,mod;
		for (i in r) {
			if (lang.hasOwnProperty(r, i)) {
				mod = this.moduleInfo[i];
				if (mod) {
					var req = this.getRequires(mod);
					if (req) {
						YUI.ObjectUtil.appendArray(r, req);
					}
				}
			}
		}
	},_skin:function() {
	},formatSkin:function(skin, mod) {
		var s = this.SKIN_PREFIX + skin;
		if (mod) {
			s = s + "-" + mod;
		}
		return s;
	},parseSkin:function(mod) {
		if (mod.indexOf(this.SKIN_PREFIX) === 0) {
			var a = mod.split("-");
			return{skin:a[1],module:a[2]};
		}
		return null;
	},_rollup:function() {
		var i,j,m,s,rollups = {},r = this.required,roll,info = this.moduleInfo;
		if (this.dirty || !this.rollups) {
			for (i in info) {
				if (lang.hasOwnProperty(info, i)) {
					m = info[i];
					if (m && m.rollup) {
						rollups[i] = m;
					}
				}
			}
			this.rollups = rollups;
		}
		for (; ;) {
			var rolled = false;
			for (i in rollups) {
				if (!r[i] && !this.loaded[i]) {
					m = info[i];
					s = m.supersedes;
					roll = false;
					if (!m.rollup) {
						continue;
					}
					var skin = (m.ext) ? false : this.parseSkin(i),c = 0;
					if (skin) {
						for (j in r) {
							if (lang.hasOwnProperty(r, j)) {
								if (i !== j && this.parseSkin(j)) {
									c++;
									roll = (c >= m.rollup);
									if (roll) {
										break;
									}
								}
							}
						}
					} else {
						for (j = 0; j < s.length; j = j + 1) {
							if (this.loaded[s[j]] && (!YUI.dupsAllowed[s[j]])) {
								roll = false;
								break;
							} else {
								if (r[s[j]]) {
									c++;
									roll = (c >= m.rollup);
									if (roll) {
										break;
									}
								}
							}
						}
					}
					if (roll) {
						r[i] = true;
						rolled = true;
						this.getRequires(m);
					}
				}
			}
			if (!rolled) {
				break;
			}
		}
	},_reduce:function() {
		var i,j,s,m,r = this.required;
		for (i in r) {
			if (i in this.loaded) {
				delete r[i];
			} else {
				var skinDef = this.parseSkin(i);
				if (skinDef) {
					if (!skinDef.module) {
						var skin_pre = this.SKIN_PREFIX + skinDef.skin;
						for (j in r) {
							if (lang.hasOwnProperty(r, j)) {
								m = this.moduleInfo[j];
								var ext = m && m.ext;
								if (!ext && j !== i && j.indexOf(skin_pre) > -1) {
									delete r[j];
								}
							}
						}
					}
				} else {
					m = this.moduleInfo[i];
					s = m && m.supersedes;
					if (s) {
						for (j = 0; j < s.length; j = j + 1) {
							if (s[j] in r) {
								delete r[s[j]];
							}
						}
					}
				}
			}
		}
	},_onFailure:function(msg) {
		YAHOO.log("Failure", "info", "loader");
		var f = this.onFailure;
		if (f) {
			f.call(this.scope, {msg:"failure: " + msg,data:this.data,success:false});
		}
	},_onTimeout:function() {
		YAHOO.log("Timeout", "info", "loader");
		var f = this.onTimeout;
		if (f) {
			f.call(this.scope, {msg:"timeout",data:this.data,success:false});
		}
	},_sort:function() {
		var s = [],info = this.moduleInfo,loaded = this.loaded,checkOptional = !this.loadOptional,me = this;
		var requires = function(aa, bb) {
			var mm = info[aa];
			if (loaded[bb] || !mm) {
				return false;
			}
			var ii,rr = mm.expanded,after = mm.after,other = info[bb],optional = mm.optional;
			if (rr && YUI.ArrayUtil.indexOf(rr, bb) > -1) {
				return true;
			}
			if (after && YUI.ArrayUtil.indexOf(after, bb) > -1) {
				return true;
			}
			if (checkOptional && optional && YUI.ArrayUtil.indexOf(optional, bb) > -1) {
				return true;
			}
			var ss = info[bb] && info[bb].supersedes;
			if (ss) {
				for (ii = 0; ii < ss.length; ii = ii + 1) {
					if (requires(aa, ss[ii])) {
						return true;
					}
				}
			}
			if (mm.ext && mm.type == "css" && !other.ext && other.type == "css") {
				return true;
			}
			return false;
		};
		for (var i in this.required) {
			if (lang.hasOwnProperty(this.required, i)) {
				s.push(i);
			}
		}
		var p = 0;
		for (; ;) {
			var l = s.length,a,b,j,k,moved = false;
			for (j = p; j < l; j = j + 1) {
				a = s[j];
				for (k = j + 1; k < l; k = k + 1) {
					if (requires(a, s[k])) {
						b = s.splice(k, 1);
						s.splice(j, 0, b[0]);
						moved = true;
						break;
					}
				}
				if (moved) {
					break;
				} else {
					p = p + 1;
				}
			}
			if (!moved) {
				break;
			}
		}
		this.sorted = s;
	},toString:function() {
		var o = {type:"YUILoader",base:this.base,filter:this.filter,required:this.required,loaded:this.loaded,inserted:this.inserted};
		lang.dump(o, 1);
	},_combine:function() {
		this._combining = [];
		var self = this,s = this.sorted,len = s.length,js = this.comboBase,css = this.comboBase,target,startLen = js.length,i,m,type = this.loadType;
		YAHOO.log("type " + type);
		for (i = 0; i < len; i = i + 1) {
			m = this.moduleInfo[s[i]];
			if (m && !m.ext && (!type || type === m.type)) {
				target = this.root + m.path;
				target += "&";
				if (m.type == "js") {
					js += target;
				} else {
					css += target;
				}
				this._combining.push(s[i]);
			}
		}
		if (this._combining.length) {
			YAHOO.log("Attempting to combine: " + this._combining, "info", "loader");
			var callback = function(o) {
				var c = this._combining,len = c.length,i,m;
				for (i = 0; i < len; i = i + 1) {
					this.inserted[c[i]] = true;
				}
				this.loadNext(o.data);
			},loadScript = function() {
				if (js.length > startLen) {
					YAHOO.util.Get.script(self._filter(js), {data:self._loading,onSuccess:callback,onFailure:self._onFailure,onTimeout:self._onTimeout,insertBefore:self.insertBefore,charset:self.charset,timeout:self.timeout,scope:self});
				}
			};
			if (css.length > startLen) {
				YAHOO.util.Get.css(this._filter(css), {data:this._loading,onSuccess:loadScript,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,scope:self});
			} else {
				loadScript();
			}
			return;
		} else {
			this.loadNext(this._loading);
		}
	},insert:function(o, type) {
		this.calculate(o);
		this._loading = true;
		this.loadType = type;
		if (this.combine) {
			return this._combine();
		}
		if (!type) {
			var self = this;
			this._internalCallback = function() {
				self._internalCallback = null;
				self.insert(null, "js");
			};
			this.insert(null, "css");
			return;
		}
		this.loadNext();
	},sandbox:function(o, type) {
		this._config(o);
		if (!this.onSuccess) {
			throw new Error("You must supply an onSuccess handler for your sandbox");
		}
		this._sandbox = true;
		var self = this;
		if (!type || type !== "js") {
			this._internalCallback = function() {
				self._internalCallback = null;
				self.sandbox(null, "js");
			};
			this.insert(null, "css");
			return;
		}
		if (!util.Connect) {
			var ld = new YAHOO.util.YUILoader();
			ld.insert({base:this.base,filter:this.filter,require:"connection",insertBefore:this.insertBefore,charset:this.charset,onSuccess:function() {
				this.sandbox(null, "js");
			},scope:this}, "js");
			return;
		}
		this._scriptText = [];
		this._loadCount = 0;
		this._stopCount = this.sorted.length;
		this._xhr = [];
		this.calculate();
		var s = this.sorted,l = s.length,i,m,url;
		for (i = 0; i < l; i = i + 1) {
			m = this.moduleInfo[s[i]];
			if (!m) {
				this._onFailure("undefined module " + m);
				for (var j = 0; j < this._xhr.length; j = j + 1) {
					this._xhr[j].abort();
				}
				return;
			}
			if (m.type !== "js") {
				this._loadCount++;
				continue;
			}
			url = m.fullpath;
			url = (url) ? this._filter(url) : this._url(m.path);
			var xhrData = {success:function(o) {
				var idx = o.argument[0],name = o.argument[2];
				this._scriptText[idx] = o.responseText;
				if (this.onProgress) {
					this.onProgress.call(this.scope, {name:name,scriptText:o.responseText,xhrResponse:o,data:this.data});
				}
				this._loadCount++;
				if (this._loadCount >= this._stopCount) {
					var v = this.varName || "YAHOO";
					var t = "(function() {\n";
					var b = "\nreturn " + v + ";\n})();";
					var ref = eval(t + this._scriptText.join("\n") + b);
					this._pushEvents(ref);
					if (ref) {
						this.onSuccess.call(this.scope, {reference:ref,data:this.data});
					} else {
						this._onFailure.call(this.varName + " reference failure");
					}
				}
			},failure:function(o) {
				this.onFailure.call(this.scope, {msg:"XHR failure",xhrResponse:o,data:this.data});
			},scope:this,argument:[i,url,s[i]]};
			this._xhr.push(util.Connect.asyncRequest("GET", url, xhrData));
		}
	},loadNext:function(mname) {
		if (!this._loading) {
			return;
		}
		if (mname) {
			if (mname !== this._loading) {
				return;
			}
			this.inserted[mname] = true;
			if (this.onProgress) {
				this.onProgress.call(this.scope, {name:mname,data:this.data});
			}
		}
		var s = this.sorted,len = s.length,i,m;
		for (i = 0; i < len; i = i + 1) {
			if (s[i] in this.inserted) {
				continue;
			}
			if (s[i] === this._loading) {
				return;
			}
			m = this.moduleInfo[s[i]];
			if (!m) {
				this.onFailure.call(this.scope, {msg:"undefined module " + m,data:this.data});
				return;
			}
			if (!this.loadType || this.loadType === m.type) {
				this._loading = s[i];
				var fn = (m.type === "css") ? util.Get.css : util.Get.script,url = m.fullpath,self = this,c = function(o) {
					self.loadNext(o.data);
				};
				url = (url) ? this._filter(url) : this._url(m.path);
				if (env.ua.webkit && env.ua.webkit < 420 && m.type === "js" && !m.varName) {
					c = null;
					this._useYahooListener = true;
				}
				fn(url, {data:s[i],onSuccess:c,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,varName:m.varName,scope:self});
				return;
			}
		}
		this._loading = null;
		if (this._internalCallback) {
			var f = this._internalCallback;
			this._internalCallback = null;
			f.call(this);
		} else {
			if (this.onSuccess) {
				this._pushEvents();
				this.onSuccess.call(this.scope, {data:this.data});
			}
		}
	},_pushEvents:function(ref) {
		var r = ref || YAHOO;
		if (r.util && r.util.Event) {
			r.util.Event._load();
		}
	},_filter:function(str) {
		var f = this.filter;
		return(f) ? str.replace(new RegExp(f.searchExp, "g"), f.replaceStr) : str;
	},_url:function(path) {
		return this._filter((this.base || "") + path);
	}};
})();
YAHOO.register("yuiloader", YAHOO.util.YUILoader, {version:"2.7.0",build:"1799"});
(function() {
	YAHOO.env._id_counter = YAHOO.env._id_counter || 0;
	var E = YAHOO.util,L = YAHOO.lang,m = YAHOO.env.ua,A = YAHOO.lang.trim,d = {},h = {},N = /^t(?:able|d|h)$/i,X = /color$/i,K = window.document,W = K.documentElement,e = "ownerDocument",n = "defaultView",v = "documentElement",t = "compatMode",b = "offsetLeft",P = "offsetTop",u = "offsetParent",Z = "parentNode",l = "nodeType",C = "tagName",O = "scrollLeft",i = "scrollTop",Q = "getBoundingClientRect",w = "getComputedStyle",a = "currentStyle",M = "CSS1Compat",c = "BackCompat",g = "class",F = "className",J = "",B = " ",s = "(?:^|\\s)",k = "(?= |$)",U = "g",p = "position",f = "fixed",V = "relative",j = "left",o = "top",r = "medium",q = "borderLeftWidth",R = "borderTopWidth",D = m.opera,I = m.webkit,H = m.gecko,T = m.ie;
	E.Dom = {CUSTOM_ATTRIBUTES:(!W.hasAttribute) ? {"for":"htmlFor","class":F} : {"htmlFor":"for","className":g},get:function(y) {
		var AA,Y,z,x,G;
		if (y) {
			if (y[l] || y.item) {
				return y;
			}
			if (typeof y === "string") {
				AA = y;
				y = K.getElementById(y);
				if (y && y.id === AA) {
					return y;
				} else {
					if (y && K.all) {
						y = null;
						Y = K.all[AA];
						for (x = 0,G = Y.length; x < G; ++x) {
							if (Y[x].id === AA) {
								return Y[x];
							}
						}
					}
				}
				return y;
			}
			if (y.DOM_EVENTS) {
				y = y.get("element");
			}
			if ("length" in y) {
				z = [];
				for (x = 0,G = y.length; x < G; ++x) {
					z[z.length] = E.Dom.get(y[x]);
				}
				return z;
			}
			return y;
		}
		return null;
	},getComputedStyle:function(G, Y) {
		if (window[w]) {
			return G[e][n][w](G, null)[Y];
		} else {
			if (G[a]) {
				return E.Dom.IE_ComputedStyle.get(G, Y);
			}
		}
	},getStyle:function(G, Y) {
		return E.Dom.batch(G, E.Dom._getStyle, Y);
	},_getStyle:function() {
		if (window[w]) {
			return function(G, y) {
				y = (y === "float") ? y = "cssFloat" : E.Dom._toCamel(y);
				var x = G.style[y],Y;
				if (!x) {
					Y = G[e][n][w](G, null);
					if (Y) {
						x = Y[y];
					}
				}
				return x;
			};
		} else {
			if (W[a]) {
				return function(G, y) {
					var x;
					switch (y) {
						case"opacity":
							x = 100;
							try {
								x = G.filters["DXImageTransform.Microsoft.Alpha"].opacity;
							} catch(z) {
								try {
									x = G.filters("alpha").opacity;
								} catch(Y) {
								}
							}
							return x / 100;
						case"float":
							y = "styleFloat";
						default:
							y = E.Dom._toCamel(y);
							x = G[a] ? G[a][y] : null;
							return(G.style[y] || x);
					}
				};
			}
		}
	}(),setStyle:function(G, Y, x) {
		E.Dom.batch(G, E.Dom._setStyle, {prop:Y,val:x});
	},_setStyle:function() {
		if (T) {
			return function(Y, G) {
				var x = E.Dom._toCamel(G.prop),y = G.val;
				if (Y) {
					switch (x) {
						case"opacity":
							if (L.isString(Y.style.filter)) {
								Y.style.filter = "alpha(opacity=" + y * 100 + ")";
								if (!Y[a] || !Y[a].hasLayout) {
									Y.style.zoom = 1;
								}
							}
							break;
						case"float":
							x = "styleFloat";
						default:
							Y.style[x] = y;
					}
				} else {
				}
			};
		} else {
			return function(Y, G) {
				var x = E.Dom._toCamel(G.prop),y = G.val;
				if (Y) {
					if (x == "float") {
						x = "cssFloat";
					}
					Y.style[x] = y;
				} else {
				}
			};
		}
	}(),getXY:function(G) {
		return E.Dom.batch(G, E.Dom._getXY);
	},_canPosition:function(G) {
		return(E.Dom._getStyle(G, "display") !== "none" && E.Dom._inDoc(G));
	},_getXY:function() {
		if (K[v][Q]) {
			return function(y) {
				var z,Y,AA,AF,AE,AD,AC,G,x,AB = Math.floor,AG = false;
				if (E.Dom._canPosition(y)) {
					AA = y[Q]();
					AF = y[e];
					z = E.Dom.getDocumentScrollLeft(AF);
					Y = E.Dom.getDocumentScrollTop(AF);
					AG = [AB(AA[j]),AB(AA[o])];
					if (T && m.ie < 8) {
						AE = 2;
						AD = 2;
						AC = AF[t];
						G = S(AF[v], q);
						x = S(AF[v], R);
						if (m.ie === 6) {
							if (AC !== c) {
								AE = 0;
								AD = 0;
							}
						}
						if ((AC == c)) {
							if (G !== r) {
								AE = parseInt(G, 10);
							}
							if (x !== r) {
								AD = parseInt(x, 10);
							}
						}
						AG[0] -= AE;
						AG[1] -= AD;
					}
					if ((Y || z)) {
						AG[0] += z;
						AG[1] += Y;
					}
					AG[0] = AB(AG[0]);
					AG[1] = AB(AG[1]);
				} else {
				}
				return AG;
			};
		} else {
			return function(y) {
				var x,Y,AA,AB,AC,z = false,G = y;
				if (E.Dom._canPosition(y)) {
					z = [y[b],y[P]];
					x = E.Dom.getDocumentScrollLeft(y[e]);
					Y = E.Dom.getDocumentScrollTop(y[e]);
					AC = ((H || m.webkit > 519) ? true : false);
					while ((G = G[u])) {
						z[0] += G[b];
						z[1] += G[P];
						if (AC) {
							z = E.Dom._calcBorders(G, z);
						}
					}
					if (E.Dom._getStyle(y, p) !== f) {
						G = y;
						while ((G = G[Z]) && G[C]) {
							AA = G[i];
							AB = G[O];
							if (H && (E.Dom._getStyle(G, "overflow") !== "visible")) {
								z = E.Dom._calcBorders(G, z);
							}
							if (AA || AB) {
								z[0] -= AB;
								z[1] -= AA;
							}
						}
						z[0] += x;
						z[1] += Y;
					} else {
						if (D) {
							z[0] -= x;
							z[1] -= Y;
						} else {
							if (I || H) {
								z[0] += x;
								z[1] += Y;
							}
						}
					}
					z[0] = Math.floor(z[0]);
					z[1] = Math.floor(z[1]);
				} else {
				}
				return z;
			};
		}
	}(),getX:function(G) {
		var Y = function(x) {
			return E.Dom.getXY(x)[0];
		};
		return E.Dom.batch(G, Y, E.Dom, true);
	},getY:function(G) {
		var Y = function(x) {
			return E.Dom.getXY(x)[1];
		};
		return E.Dom.batch(G, Y, E.Dom, true);
	},setXY:function(G, x, Y) {
		E.Dom.batch(G, E.Dom._setXY, {pos:x,noRetry:Y});
	},_setXY:function(G, z) {
		var AA = E.Dom._getStyle(G, p),y = E.Dom.setStyle,AD = z.pos,Y = z.noRetry,AB = [parseInt(E.Dom.getComputedStyle(G, j), 10),parseInt(E.Dom.getComputedStyle(G, o), 10)],AC,x;
		if (AA == "static") {
			AA = V;
			y(G, p, AA);
		}
		AC = E.Dom._getXY(G);
		if (!AD || AC === false) {
			return false;
		}
		if (isNaN(AB[0])) {
			AB[0] = (AA == V) ? 0 : G[b];
		}
		if (isNaN(AB[1])) {
			AB[1] = (AA == V) ? 0 : G[P];
		}
		if (AD[0] !== null) {
			y(G, j, AD[0] - AC[0] + AB[0] + "px");
		}
		if (AD[1] !== null) {
			y(G, o, AD[1] - AC[1] + AB[1] + "px");
		}
		if (!Y) {
			x = E.Dom._getXY(G);
			if ((AD[0] !== null && x[0] != AD[0]) || (AD[1] !== null && x[1] != AD[1])) {
				E.Dom._setXY(G, {pos:AD,noRetry:true});
			}
		}
	},setX:function(Y, G) {
		E.Dom.setXY(Y, [G,null]);
	},setY:function(G, Y) {
		E.Dom.setXY(G, [null,Y]);
	},getRegion:function(G) {
		var Y = function(x) {
			var y = false;
			if (E.Dom._canPosition(x)) {
				y = E.Region.getRegion(x);
			} else {
			}
			return y;
		};
		return E.Dom.batch(G, Y, E.Dom, true);
	},getClientWidth:function() {
		return E.Dom.getViewportWidth();
	},getClientHeight:function() {
		return E.Dom.getViewportHeight();
	},getElementsByClassName:function(AB, AF, AC, AE, x, AD) {
		AB = L.trim(AB);
		AF = AF || "*";
		AC = (AC) ? E.Dom.get(AC) : null || K;
		if (!AC) {
			return[];
		}
		var Y = [],G = AC.getElementsByTagName(AF),z = E.Dom.hasClass;
		for (var y = 0,AA = G.length; y < AA; ++y) {
			if (z(G[y], AB)) {
				Y[Y.length] = G[y];
			}
		}
		if (AE) {
			E.Dom.batch(Y, AE, x, AD);
		}
		return Y;
	},hasClass:function(Y, G) {
		return E.Dom.batch(Y, E.Dom._hasClass, G);
	},_hasClass:function(x, Y) {
		var G = false,y;
		if (x && Y) {
			y = E.Dom.getAttribute(x, F) || J;
			if (Y.exec) {
				G = Y.test(y);
			} else {
				G = Y && (B + y + B).indexOf(B + Y + B) > -1;
			}
		} else {
		}
		return G;
	},addClass:function(Y, G) {
		return E.Dom.batch(Y, E.Dom._addClass, G);
	},_addClass:function(x, Y) {
		var G = false,y;
		if (x && Y) {
			y = E.Dom.getAttribute(x, F) || J;
			if (!E.Dom._hasClass(x, Y)) {
				E.Dom.setAttribute(x, F, A(y + B + Y));
				G = true;
			}
		} else {
		}
		return G;
	},removeClass:function(Y, G) {
		return E.Dom.batch(Y, E.Dom._removeClass, G);
	},_removeClass:function(y, x) {
		var Y = false,AA,z,G;
		if (y && x) {
			AA = E.Dom.getAttribute(y, F) || J;
			E.Dom.setAttribute(y, F, AA.replace(E.Dom._getClassRegex(x), J));
			z = E.Dom.getAttribute(y, F);
			if (AA !== z) {
				E.Dom.setAttribute(y, F, A(z));
				Y = true;
				if (E.Dom.getAttribute(y, F) === "") {
					G = (y.hasAttribute && y.hasAttribute(g)) ? g : F;
					y.removeAttribute(G);
				}
			}
		} else {
		}
		return Y;
	},replaceClass:function(x, Y, G) {
		return E.Dom.batch(x, E.Dom._replaceClass, {from:Y,to:G});
	},_replaceClass:function(y, x) {
		var Y,AB,AA,G = false,z;
		if (y && x) {
			AB = x.from;
			AA = x.to;
			if (!AA) {
				G = false;
			} else {
				if (!AB) {
					G = E.Dom._addClass(y, x.to);
				} else {
					if (AB !== AA) {
						z = E.Dom.getAttribute(y, F) || J;
						Y = (B + z.replace(E.Dom._getClassRegex(AB), B + AA)).split(E.Dom._getClassRegex(AA));
						Y.splice(1, 0, B + AA);
						E.Dom.setAttribute(y, F, A(Y.join(J)));
						G = true;
					}
				}
			}
		} else {
		}
		return G;
	},generateId:function(G, x) {
		x = x || "yui-gen";
		var Y = function(y) {
			if (y && y.id) {
				return y.id;
			}
			var z = x + YAHOO.env._id_counter++;
			if (y) {
				if (y[e].getElementById(z)) {
					return E.Dom.generateId(y, z + x);
				}
				y.id = z;
			}
			return z;
		};
		return E.Dom.batch(G, Y, E.Dom, true) || Y.apply(E.Dom, arguments);
	},isAncestor:function(Y, x) {
		Y = E.Dom.get(Y);
		x = E.Dom.get(x);
		var G = false;
		if ((Y && x) && (Y[l] && x[l])) {
			if (Y.contains && Y !== x) {
				G = Y.contains(x);
			} else {
				if (Y.compareDocumentPosition) {
					G = !!(Y.compareDocumentPosition(x) & 16);
				}
			}
		} else {
		}
		return G;
	},inDocument:function(G, Y) {
		return E.Dom._inDoc(E.Dom.get(G), Y);
	},_inDoc:function(Y, x) {
		var G = false;
		if (Y && Y[C]) {
			x = x || Y[e];
			G = E.Dom.isAncestor(x[v], Y);
		} else {
		}
		return G;
	},getElementsBy:function(Y, AF, AB, AD, y, AC, AE) {
		AF = AF || "*";
		AB = (AB) ? E.Dom.get(AB) : null || K;
		if (!AB) {
			return[];
		}
		var x = [],G = AB.getElementsByTagName(AF);
		for (var z = 0,AA = G.length; z < AA; ++z) {
			if (Y(G[z])) {
				if (AE) {
					x = G[z];
					break;
				} else {
					x[x.length] = G[z];
				}
			}
		}
		if (AD) {
			E.Dom.batch(x, AD, y, AC);
		}
		return x;
	},getElementBy:function(x, G, Y) {
		return E.Dom.getElementsBy(x, G, Y, null, null, null, true);
	},batch:function(x, AB, AA, z) {
		var y = [],Y = (z) ? AA : window;
		x = (x && (x[C] || x.item)) ? x : E.Dom.get(x);
		if (x && AB) {
			if (x[C] || x.length === undefined) {
				return AB.call(Y, x, AA);
			}
			for (var G = 0; G < x.length; ++G) {
				y[y.length] = AB.call(Y, x[G], AA);
			}
		} else {
			return false;
		}
		return y;
	},getDocumentHeight:function() {
		var Y = (K[t] != M || I) ? K.body.scrollHeight : W.scrollHeight,G = Math.max(Y, E.Dom.getViewportHeight());
		return G;
	},getDocumentWidth:function() {
		var Y = (K[t] != M || I) ? K.body.scrollWidth : W.scrollWidth,G = Math.max(Y, E.Dom.getViewportWidth());
		return G;
	},getViewportHeight:function() {
		var G = self.innerHeight,Y = K[t];
		if ((Y || T) && !D) {
			G = (Y == M) ? W.clientHeight : K.body.clientHeight;
		}
		return G;
	},getViewportWidth:function() {
		var G = self.innerWidth,Y = K[t];
		if (Y || T) {
			G = (Y == M) ? W.clientWidth : K.body.clientWidth;
		}
		return G;
	},getAncestorBy:function(G, Y) {
		while ((G = G[Z])) {
			if (E.Dom._testElement(G, Y)) {
				return G;
			}
		}
		return null;
	},getAncestorByClassName:function(Y, G) {
		Y = E.Dom.get(Y);
		if (!Y) {
			return null;
		}
		var x = function(y) {
			return E.Dom.hasClass(y, G);
		};
		return E.Dom.getAncestorBy(Y, x);
	},getAncestorByTagName:function(Y, G) {
		Y = E.Dom.get(Y);
		if (!Y) {
			return null;
		}
		var x = function(y) {
			return y[C] && y[C].toUpperCase() == G.toUpperCase();
		};
		return E.Dom.getAncestorBy(Y, x);
	},getPreviousSiblingBy:function(G, Y) {
		while (G) {
			G = G.previousSibling;
			if (E.Dom._testElement(G, Y)) {
				return G;
			}
		}
		return null;
	},getPreviousSibling:function(G) {
		G = E.Dom.get(G);
		if (!G) {
			return null;
		}
		return E.Dom.getPreviousSiblingBy(G);
	},getNextSiblingBy:function(G, Y) {
		while (G) {
			G = G.nextSibling;
			if (E.Dom._testElement(G, Y)) {
				return G;
			}
		}
		return null;
	},getNextSibling:function(G) {
		G = E.Dom.get(G);
		if (!G) {
			return null;
		}
		return E.Dom.getNextSiblingBy(G);
	},getFirstChildBy:function(G, x) {
		var Y = (E.Dom._testElement(G.firstChild, x)) ? G.firstChild : null;
		return Y || E.Dom.getNextSiblingBy(G.firstChild, x);
	},getFirstChild:function(G, Y) {
		G = E.Dom.get(G);
		if (!G) {
			return null;
		}
		return E.Dom.getFirstChildBy(G);
	},getLastChildBy:function(G, x) {
		if (!G) {
			return null;
		}
		var Y = (E.Dom._testElement(G.lastChild, x)) ? G.lastChild : null;
		return Y || E.Dom.getPreviousSiblingBy(G.lastChild, x);
	},getLastChild:function(G) {
		G = E.Dom.get(G);
		return E.Dom.getLastChildBy(G);
	},getChildrenBy:function(Y, y) {
		var x = E.Dom.getFirstChildBy(Y, y),G = x ? [x] : [];
		E.Dom.getNextSiblingBy(x, function(z) {
			if (!y || y(z)) {
				G[G.length] = z;
			}
			return false;
		});
		return G;
	},getChildren:function(G) {
		G = E.Dom.get(G);
		if (!G) {
		}
		return E.Dom.getChildrenBy(G);
	},getDocumentScrollLeft:function(G) {
		G = G || K;
		return Math.max(G[v].scrollLeft, G.body.scrollLeft);
	},getDocumentScrollTop:function(G) {
		G = G || K;
		return Math.max(G[v].scrollTop, G.body.scrollTop);
	},insertBefore:function(Y, G) {
		Y = E.Dom.get(Y);
		G = E.Dom.get(G);
		if (!Y || !G || !G[Z]) {
			return null;
		}
		return G[Z].insertBefore(Y, G);
	},insertAfter:function(Y, G) {
		Y = E.Dom.get(Y);
		G = E.Dom.get(G);
		if (!Y || !G || !G[Z]) {
			return null;
		}
		if (G.nextSibling) {
			return G[Z].insertBefore(Y, G.nextSibling);
		} else {
			return G[Z].appendChild(Y);
		}
	},getClientRegion:function() {
		var x = E.Dom.getDocumentScrollTop(),Y = E.Dom.getDocumentScrollLeft(),y = E.Dom.getViewportWidth() + Y,G = E.Dom.getViewportHeight() + x;
		return new E.Region(x, y, G, Y);
	},setAttribute:function(Y, G, x) {
		G = E.Dom.CUSTOM_ATTRIBUTES[G] || G;
		Y.setAttribute(G, x);
	},getAttribute:function(Y, G) {
		G = E.Dom.CUSTOM_ATTRIBUTES[G] || G;
		return Y.getAttribute(G);
	},_toCamel:function(Y) {
		var x = d;

		function G(y, z) {
			return z.toUpperCase();
		}

		return x[Y] || (x[Y] = Y.indexOf("-") === -1 ? Y : Y.replace(/-([a-z])/gi, G));
	},_getClassRegex:function(Y) {
		var G;
		if (Y !== undefined) {
			if (Y.exec) {
				G = Y;
			} else {
				G = h[Y];
				if (!G) {
					Y = Y.replace(E.Dom._patterns.CLASS_RE_TOKENS, "\\$1");
					G = h[Y] = new RegExp(s + Y + k, U);
				}
			}
		}
		return G;
	},_patterns:{ROOT_TAG:/^body|html$/i,CLASS_RE_TOKENS:/([\.\(\)\^\$\*\+\?\|\[\]\{\}])/g},_testElement:function(G, Y) {
		return G && G[l] == 1 && (!Y || Y(G));
	},_calcBorders:function(x, y) {
		var Y = parseInt(E.Dom[w](x, R), 10) || 0,G = parseInt(E.Dom[w](x, q), 10) || 0;
		if (H) {
			if (N.test(x[C])) {
				Y = 0;
				G = 0;
			}
		}
		y[0] += G;
		y[1] += Y;
		return y;
	}};
	var S = E.Dom[w];
	if (m.opera) {
		E.Dom[w] = function(Y, G) {
			var x = S(Y, G);
			if (X.test(G)) {
				x = E.Dom.Color.toRGB(x);
			}
			return x;
		};
	}
	if (m.webkit) {
		E.Dom[w] = function(Y, G) {
			var x = S(Y, G);
			if (x === "rgba(0, 0, 0, 0)") {
				x = "transparent";
			}
			return x;
		};
	}
})();
YAHOO.util.Region = function(C, D, A, B) {
	this.top = C;
	this.y = C;
	this[1] = C;
	this.right = D;
	this.bottom = A;
	this.left = B;
	this.x = B;
	this[0] = B;
	this.width = this.right - this.left;
	this.height = this.bottom - this.top;
};
YAHOO.util.Region.prototype.contains = function(A) {
	return(A.left >= this.left && A.right <= this.right && A.top >= this.top && A.bottom <= this.bottom);
};
YAHOO.util.Region.prototype.getArea = function() {
	return((this.bottom - this.top) * (this.right - this.left));
};
YAHOO.util.Region.prototype.intersect = function(E) {
	var C = Math.max(this.top, E.top),D = Math.min(this.right, E.right),A = Math.min(this.bottom, E.bottom),B = Math.max(this.left, E.left);
	if (A >= C && D >= B) {
		return new YAHOO.util.Region(C, D, A, B);
	} else {
		return null;
	}
};
YAHOO.util.Region.prototype.union = function(E) {
	var C = Math.min(this.top, E.top),D = Math.max(this.right, E.right),A = Math.max(this.bottom, E.bottom),B = Math.min(this.left, E.left);
	return new YAHOO.util.Region(C, D, A, B);
};
YAHOO.util.Region.prototype.toString = function() {
	return("Region {" + "top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + ", left: " + this.left + ", height: " + this.height + ", width: " + this.width + "}");
};
YAHOO.util.Region.getRegion = function(D) {
	var F = YAHOO.util.Dom.getXY(D),C = F[1],E = F[0] + D.offsetWidth,A = F[1] + D.offsetHeight,B = F[0];
	return new YAHOO.util.Region(C, E, A, B);
};
YAHOO.util.Point = function(A, B) {
	if (YAHOO.lang.isArray(A)) {
		B = A[1];
		A = A[0];
	}
	YAHOO.util.Point.superclass.constructor.call(this, B, A, B, A);
};
YAHOO.extend(YAHOO.util.Point, YAHOO.util.Region);
(function() {
	var B = YAHOO.util,A = "clientTop",F = "clientLeft",J = "parentNode",K = "right",W = "hasLayout",I = "px",U = "opacity",L = "auto",D = "borderLeftWidth",G = "borderTopWidth",P = "borderRightWidth",V = "borderBottomWidth",S = "visible",Q = "transparent",N = "height",E = "width",H = "style",T = "currentStyle",R = /^width|height$/,O = /^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,M = {get:function(X, Z) {
		var Y = "",a = X[T][Z];
		if (Z === U) {
			Y = B.Dom.getStyle(X, U);
		} else {
			if (!a || (a.indexOf && a.indexOf(I) > -1)) {
				Y = a;
			} else {
				if (B.Dom.IE_COMPUTED[Z]) {
					Y = B.Dom.IE_COMPUTED[Z](X, Z);
				} else {
					if (O.test(a)) {
						Y = B.Dom.IE.ComputedStyle.getPixel(X, Z);
					} else {
						Y = a;
					}
				}
			}
		}
		return Y;
	},getOffset:function(Z, e) {
		var b = Z[T][e],X = e.charAt(0).toUpperCase() + e.substr(1),c = "offset" + X,Y = "pixel" + X,a = "",d;
		if (b == L) {
			d = Z[c];
			if (d === undefined) {
				a = 0;
			}
			a = d;
			if (R.test(e)) {
				Z[H][e] = d;
				if (Z[c] > d) {
					a = d - (Z[c] - d);
				}
				Z[H][e] = L;
			}
		} else {
			if (!Z[H][Y] && !Z[H][e]) {
				Z[H][e] = b;
			}
			a = Z[H][Y];
		}
		return a + I;
	},getBorderWidth:function(X, Z) {
		var Y = null;
		if (!X[T][W]) {
			X[H].zoom = 1;
		}
		switch (Z) {
			case G:
				Y = X[A];
				break;
			case V:
				Y = X.offsetHeight - X.clientHeight - X[A];
				break;
			case D:
				Y = X[F];
				break;
			case P:
				Y = X.offsetWidth - X.clientWidth - X[F];
				break;
		}
		return Y + I;
	},getPixel:function(Y, X) {
		var a = null,b = Y[T][K],Z = Y[T][X];
		Y[H][K] = Z;
		a = Y[H].pixelRight;
		Y[H][K] = b;
		return a + I;
	},getMargin:function(Y, X) {
		var Z;
		if (Y[T][X] == L) {
			Z = 0 + I;
		} else {
			Z = B.Dom.IE.ComputedStyle.getPixel(Y, X);
		}
		return Z;
	},getVisibility:function(Y, X) {
		var Z;
		while ((Z = Y[T]) && Z[X] == "inherit") {
			Y = Y[J];
		}
		return(Z) ? Z[X] : S;
	},getColor:function(Y, X) {
		return B.Dom.Color.toRGB(Y[T][X]) || Q;
	},getBorderColor:function(Y, X) {
		var Z = Y[T],a = Z[X] || Z.color;
		return B.Dom.Color.toRGB(B.Dom.Color.toHex(a));
	}},C = {};
	C.top = C.right = C.bottom = C.left = C[E] = C[N] = M.getOffset;
	C.color = M.getColor;
	C[G] = C[P] = C[V] = C[D] = M.getBorderWidth;
	C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = M.getMargin;
	C.visibility = M.getVisibility;
	C.borderColor = C.borderTopColor = C.borderRightColor = C.borderBottomColor = C.borderLeftColor = M.getBorderColor;
	B.Dom.IE_COMPUTED = C;
	B.Dom.IE_ComputedStyle = M;
})();
(function() {
	var C = "toString",A = parseInt,B = RegExp,D = YAHOO.util;
	D.Dom.Color = {KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(E) {
		if (!D.Dom.Color.re_RGB.test(E)) {
			E = D.Dom.Color.toHex(E);
		}
		if (D.Dom.Color.re_hex.exec(E)) {
			E = "rgb(" + [A(B.$1, 16),A(B.$2, 16),A(B.$3, 16)].join(", ") + ")";
		}
		return E;
	},toHex:function(H) {
		H = D.Dom.Color.KEYWORDS[H] || H;
		if (D.Dom.Color.re_RGB.exec(H)) {
			var G = (B.$1.length === 1) ? "0" + B.$1 : Number(B.$1),F = (B.$2.length === 1) ? "0" + B.$2 : Number(B.$2),E = (B.$3.length === 1) ? "0" + B.$3 : Number(B.$3);
			H = [G[C](16),F[C](16),E[C](16)].join("");
		}
		if (H.length < 6) {
			H = H.replace(D.Dom.Color.re_hex3, "$1$1");
		}
		if (H !== "transparent" && H.indexOf("#") < 0) {
			H = "#" + H;
		}
		return H.toLowerCase();
	}};
}());
YAHOO.register("dom", YAHOO.util.Dom, {version:"2.7.0",build:"1799"});
YAHOO.util.CustomEvent = function(D, C, B, A) {
	this.type = D;
	this.scope = C || window;
	this.silent = B;
	this.signature = A || YAHOO.util.CustomEvent.LIST;
	this.subscribers = [];
	if (!this.silent) {
	}
	var E = "_YUICEOnSubscribe";
	if (D !== E) {
		this.subscribeEvent = new YAHOO.util.CustomEvent(E, this, true);
	}
	this.lastError = null;
};
YAHOO.util.CustomEvent.LIST = 0;
YAHOO.util.CustomEvent.FLAT = 1;
YAHOO.util.CustomEvent.prototype = {subscribe:function(A, B, C) {
	if (!A) {
		throw new Error("Invalid callback for subscriber to '" + this.type + "'");
	}
	if (this.subscribeEvent) {
		this.subscribeEvent.fire(A, B, C);
	}
	this.subscribers.push(new YAHOO.util.Subscriber(A, B, C));
},unsubscribe:function(D, F) {
	if (!D) {
		return this.unsubscribeAll();
	}
	var E = false;
	for (var B = 0,A = this.subscribers.length; B < A; ++B) {
		var C = this.subscribers[B];
		if (C && C.contains(D, F)) {
			this._delete(B);
			E = true;
		}
	}
	return E;
},fire:function() {
	this.lastError = null;
	var K = [],E = this.subscribers.length;
	if (!E && this.silent) {
		return true;
	}
	var I = [].slice.call(arguments, 0),G = true,D,J = false;
	if (!this.silent) {
	}
	var C = this.subscribers.slice(),A = YAHOO.util.Event.throwErrors;
	for (D = 0; D < E; ++D) {
		var M = C[D];
		if (!M) {
			J = true;
		} else {
			if (!this.silent) {
			}
			var L = M.getScope(this.scope);
			if (this.signature == YAHOO.util.CustomEvent.FLAT) {
				var B = null;
				if (I.length > 0) {
					B = I[0];
				}
				try {
					G = M.fn.call(L, B, M.obj);
				} catch(F) {
					this.lastError = F;
					if (A) {
						throw F;
					}
				}
			} else {
				try {
					G = M.fn.call(L, this.type, I, M.obj);
				} catch(H) {
					this.lastError = H;
					if (A) {
						throw H;
					}
				}
			}
			if (false === G) {
				if (!this.silent) {
				}
				break;
			}
		}
	}
	return(G !== false);
},unsubscribeAll:function() {
	var A = this.subscribers.length,B;
	for (B = A - 1; B > -1; B--) {
		this._delete(B);
	}
	this.subscribers = [];
	return A;
},_delete:function(A) {
	var B = this.subscribers[A];
	if (B) {
		delete B.fn;
		delete B.obj;
	}
	this.subscribers.splice(A, 1);
},toString:function() {
	return"CustomEvent: " + "'" + this.type + "', " + "context: " + this.scope;
}};
YAHOO.util.Subscriber = function(A, B, C) {
	this.fn = A;
	this.obj = YAHOO.lang.isUndefined(B) ? null : B;
	this.overrideContext = C;
};
YAHOO.util.Subscriber.prototype.getScope = function(A) {
	if (this.overrideContext) {
		if (this.overrideContext === true) {
			return this.obj;
		} else {
			return this.overrideContext;
		}
	}
	return A;
};
YAHOO.util.Subscriber.prototype.contains = function(A, B) {
	if (B) {
		return(this.fn == A && this.obj == B);
	} else {
		return(this.fn == A);
	}
};
YAHOO.util.Subscriber.prototype.toString = function() {
	return"Subscriber { obj: " + this.obj + ", overrideContext: " + (this.overrideContext || "no") + " }";
};
if (!YAHOO.util.Event) {
	YAHOO.util.Event = function() {
		var H = false;
		var I = [];
		var J = [];
		var G = [];
		var E = [];
		var C = 0;
		var F = [];
		var B = [];
		var A = 0;
		var D = {63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9};
		var K = YAHOO.env.ua.ie ? "focusin" : "focus";
		var L = YAHOO.env.ua.ie ? "focusout" : "blur";
		return{POLL_RETRYS:2000,POLL_INTERVAL:20,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:YAHOO.env.ua.ie,_interval:null,_dri:null,DOMReady:false,throwErrors:false,startInterval:function() {
			if (!this._interval) {
				var M = this;
				var N = function() {
					M._tryPreloadAttach();
				};
				this._interval = setInterval(N, this.POLL_INTERVAL);
			}
		},onAvailable:function(S, O, Q, R, P) {
			var M = (YAHOO.lang.isString(S)) ? [S] : S;
			for (var N = 0; N < M.length; N = N + 1) {
				F.push({id:M[N],fn:O,obj:Q,overrideContext:R,checkReady:P});
			}
			C = this.POLL_RETRYS;
			this.startInterval();
		},onContentReady:function(P, M, N, O) {
			this.onAvailable(P, M, N, O, true);
		},onDOMReady:function(M, N, O) {
			if (this.DOMReady) {
				setTimeout(function() {
					var P = window;
					if (O) {
						if (O === true) {
							P = N;
						} else {
							P = O;
						}
					}
					M.call(P, "DOMReady", [], N);
				}, 0);
			} else {
				this.DOMReadyEvent.subscribe(M, N, O);
			}
		},_addListener:function(O, M, Y, S, W, b) {
			if (!Y || !Y.call) {
				return false;
			}
			if (this._isValidCollection(O)) {
				var Z = true;
				for (var T = 0,V = O.length; T < V; ++T) {
					Z = this.on(O[T], M, Y, S, W) && Z;
				}
				return Z;
			} else {
				if (YAHOO.lang.isString(O)) {
					var R = this.getEl(O);
					if (R) {
						O = R;
					} else {
						this.onAvailable(O, function() {
							YAHOO.util.Event.on(O, M, Y, S, W);
						});
						return true;
					}
				}
			}
			if (!O) {
				return false;
			}
			if ("unload" == M && S !== this) {
				J[J.length] = [O,M,Y,S,W];
				return true;
			}
			var N = O;
			if (W) {
				if (W === true) {
					N = S;
				} else {
					N = W;
				}
			}
			var P = function(c) {
				return Y.call(N, YAHOO.util.Event.getEvent(c, O), S);
			};
			var a = [O,M,Y,P,N,S,W];
			var U = I.length;
			I[U] = a;
			if (this.useLegacyEvent(O, M)) {
				var Q = this.getLegacyIndex(O, M);
				if (Q == -1 || O != G[Q][0]) {
					Q = G.length;
					B[O.id + M] = Q;
					G[Q] = [O,M,O["on" + M]];
					E[Q] = [];
					O["on" + M] = function(c) {
						YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(c), Q);
					};
				}
				E[Q].push(a);
			} else {
				try {
					this._simpleAdd(O, M, P, b);
				} catch(X) {
					this.lastError = X;
					this.removeListener(O, M, Y);
					return false;
				}
			}
			return true;
		},addListener:function(N, Q, M, O, P) {
			return this._addListener(N, Q, M, O, P, false);
		},addFocusListener:function(N, M, O, P) {
			return this._addListener(N, K, M, O, P, true);
		},removeFocusListener:function(N, M) {
			return this.removeListener(N, K, M);
		},addBlurListener:function(N, M, O, P) {
			return this._addListener(N, L, M, O, P, true);
		},removeBlurListener:function(N, M) {
			return this.removeListener(N, L, M);
		},fireLegacyEvent:function(R, P) {
			var T = true,M,V,U,N,S;
			V = E[P].slice();
			for (var O = 0,Q = V.length; O < Q; ++O) {
				U = V[O];
				if (U && U[this.WFN]) {
					N = U[this.ADJ_SCOPE];
					S = U[this.WFN].call(N, R);
					T = (T && S);
				}
			}
			M = G[P];
			if (M && M[2]) {
				M[2](R);
			}
			return T;
		},getLegacyIndex:function(N, O) {
			var M = this.generateId(N) + O;
			if (typeof B[M] == "undefined") {
				return -1;
			} else {
				return B[M];
			}
		},useLegacyEvent:function(M, N) {
			return(this.webkit && this.webkit < 419 && ("click" == N || "dblclick" == N));
		},removeListener:function(N, M, V) {
			var Q,T,X;
			if (typeof N == "string") {
				N = this.getEl(N);
			} else {
				if (this._isValidCollection(N)) {
					var W = true;
					for (Q = N.length - 1; Q > -1; Q--) {
						W = (this.removeListener(N[Q], M, V) && W);
					}
					return W;
				}
			}
			if (!V || !V.call) {
				return this.purgeElement(N, false, M);
			}
			if ("unload" == M) {
				for (Q = J.length - 1; Q > -1; Q--) {
					X = J[Q];
					if (X && X[0] == N && X[1] == M && X[2] == V) {
						J.splice(Q, 1);
						return true;
					}
				}
				return false;
			}
			var R = null;
			var S = arguments[3];
			if ("undefined" === typeof S) {
				S = this._getCacheIndex(N, M, V);
			}
			if (S >= 0) {
				R = I[S];
			}
			if (!N || !R) {
				return false;
			}
			if (this.useLegacyEvent(N, M)) {
				var P = this.getLegacyIndex(N, M);
				var O = E[P];
				if (O) {
					for (Q = 0,T = O.length; Q < T; ++Q) {
						X = O[Q];
						if (X && X[this.EL] == N && X[this.TYPE] == M && X[this.FN] == V) {
							O.splice(Q, 1);
							break;
						}
					}
				}
			} else {
				try {
					this._simpleRemove(N, M, R[this.WFN], false);
				} catch(U) {
					this.lastError = U;
					return false;
				}
			}
			delete I[S][this.WFN];
			delete I[S][this.FN];
			I.splice(S, 1);
			return true;
		},getTarget:function(O, N) {
			var M = O.target || O.srcElement;
			return this.resolveTextNode(M);
		},resolveTextNode:function(N) {
			try {
				if (N && 3 == N.nodeType) {
					return N.parentNode;
				}
			} catch(M) {
			}
			return N;
		},getPageX:function(N) {
			var M = N.pageX;
			if (!M && 0 !== M) {
				M = N.clientX || 0;
				if (this.isIE) {
					M += this._getScrollLeft();
				}
			}
			return M;
		},getPageY:function(M) {
			var N = M.pageY;
			if (!N && 0 !== N) {
				N = M.clientY || 0;
				if (this.isIE) {
					N += this._getScrollTop();
				}
			}
			return N;
		},getXY:function(M) {
			return[this.getPageX(M),this.getPageY(M)];
		},getRelatedTarget:function(N) {
			var M = N.relatedTarget;
			if (!M) {
				if (N.type == "mouseout") {
					M = N.toElement;
				} else {
					if (N.type == "mouseover") {
						M = N.fromElement;
					}
				}
			}
			return this.resolveTextNode(M);
		},getTime:function(O) {
			if (!O.time) {
				var N = new Date().getTime();
				try {
					O.time = N;
				} catch(M) {
					this.lastError = M;
					return N;
				}
			}
			return O.time;
		},stopEvent:function(M) {
			this.stopPropagation(M);
			this.preventDefault(M);
		},stopPropagation:function(M) {
			if (M.stopPropagation) {
				M.stopPropagation();
			} else {
				M.cancelBubble = true;
			}
		},preventDefault:function(M) {
			if (M.preventDefault) {
				M.preventDefault();
			} else {
				M.returnValue = false;
			}
		},getEvent:function(O, M) {
			var N = O || window.event;
			if (!N) {
				var P = this.getEvent.caller;
				while (P) {
					N = P.arguments[0];
					if (N && Event == N.constructor) {
						break;
					}
					P = P.caller;
				}
			}
			return N;
		},getCharCode:function(N) {
			var M = N.keyCode || N.charCode || 0;
			if (YAHOO.env.ua.webkit && (M in D)) {
				M = D[M];
			}
			return M;
		},_getCacheIndex:function(Q, R, P) {
			for (var O = 0,N = I.length; O < N; O = O + 1) {
				var M = I[O];
				if (M && M[this.FN] == P && M[this.EL] == Q && M[this.TYPE] == R) {
					return O;
				}
			}
			return -1;
		},generateId:function(M) {
			var N = M.id;
			if (!N) {
				N = "yuievtautoid-" + A;
				++A;
				M.id = N;
			}
			return N;
		},_isValidCollection:function(N) {
			try {
				return(N && typeof N !== "string" && N.length && !N.tagName && !N.alert && typeof N[0] !== "undefined");
			} catch(M) {
				return false;
			}
		},elCache:{},getEl:function(M) {
			return(typeof M === "string") ? document.getElementById(M) : M;
		},clearCache:function() {
		},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady", this),_load:function(N) {
			if (!H) {
				H = true;
				var M = YAHOO.util.Event;
				M._ready();
				M._tryPreloadAttach();
			}
		},_ready:function(N) {
			var M = YAHOO.util.Event;
			if (!M.DOMReady) {
				M.DOMReady = true;
				M.DOMReadyEvent.fire();
				M._simpleRemove(document, "DOMContentLoaded", M._ready);
			}
		},_tryPreloadAttach:function() {
			if (F.length === 0) {
				C = 0;
				if (this._interval) {
					clearInterval(this._interval);
					this._interval = null;
				}
				return;
			}
			if (this.locked) {
				return;
			}
			if (this.isIE) {
				if (!this.DOMReady) {
					this.startInterval();
					return;
				}
			}
			this.locked = true;
			var S = !H;
			if (!S) {
				S = (C > 0 && F.length > 0);
			}
			var R = [];
			var T = function(V, W) {
				var U = V;
				if (W.overrideContext) {
					if (W.overrideContext === true) {
						U = W.obj;
					} else {
						U = W.overrideContext;
					}
				}
				W.fn.call(U, W.obj);
			};
			var N,M,Q,P,O = [];
			for (N = 0,M = F.length; N < M; N = N + 1) {
				Q = F[N];
				if (Q) {
					P = this.getEl(Q.id);
					if (P) {
						if (Q.checkReady) {
							if (H || P.nextSibling || !S) {
								O.push(Q);
								F[N] = null;
							}
						} else {
							T(P, Q);
							F[N] = null;
						}
					} else {
						R.push(Q);
					}
				}
			}
			for (N = 0,M = O.length; N < M; N = N + 1) {
				Q = O[N];
				T(this.getEl(Q.id), Q);
			}
			C--;
			if (S) {
				for (N = F.length - 1; N > -1; N--) {
					Q = F[N];
					if (!Q || !Q.id) {
						F.splice(N, 1);
					}
				}
				this.startInterval();
			} else {
				if (this._interval) {
					clearInterval(this._interval);
					this._interval = null;
				}
			}
			this.locked = false;
		},purgeElement:function(Q, R, T) {
			var O = (YAHOO.lang.isString(Q)) ? this.getEl(Q) : Q;
			var S = this.getListeners(O, T),P,M;
			if (S) {
				for (P = S.length - 1; P > -1; P--) {
					var N = S[P];
					this.removeListener(O, N.type, N.fn);
				}
			}
			if (R && O && O.childNodes) {
				for (P = 0,M = O.childNodes.length; P < M; ++P) {
					this.purgeElement(O.childNodes[P], R, T);
				}
			}
		},getListeners:function(O, M) {
			var R = [],N;
			if (!M) {
				N = [I,J];
			} else {
				if (M === "unload") {
					N = [J];
				} else {
					N = [I];
				}
			}
			var T = (YAHOO.lang.isString(O)) ? this.getEl(O) : O;
			for (var Q = 0; Q < N.length; Q = Q + 1) {
				var V = N[Q];
				if (V) {
					for (var S = 0,U = V.length; S < U; ++S) {
						var P = V[S];
						if (P && P[this.EL] === T && (!M || M === P[this.TYPE])) {
							R.push({type:P[this.TYPE],fn:P[this.FN],obj:P[this.OBJ],adjust:P[this.OVERRIDE],scope:P[this.ADJ_SCOPE],index:S});
						}
					}
				}
			}
			return(R.length) ? R : null;
		},_unload:function(T) {
			var N = YAHOO.util.Event,Q,P,O,S,R,U = J.slice(),M;
			for (Q = 0,S = J.length; Q < S; ++Q) {
				O = U[Q];
				if (O) {
					M = window;
					if (O[N.ADJ_SCOPE]) {
						if (O[N.ADJ_SCOPE] === true) {
							M = O[N.UNLOAD_OBJ];
						} else {
							M = O[N.ADJ_SCOPE];
						}
					}
					O[N.FN].call(M, N.getEvent(T, O[N.EL]), O[N.UNLOAD_OBJ]);
					U[Q] = null;
				}
			}
			O = null;
			M = null;
			J = null;
			if (I) {
				for (P = I.length - 1; P > -1; P--) {
					O = I[P];
					if (O) {
						N.removeListener(O[N.EL], O[N.TYPE], O[N.FN], P);
					}
				}
				O = null;
			}
			G = null;
			N._simpleRemove(window, "unload", N._unload);
		},_getScrollLeft:function() {
			return this._getScroll()[1];
		},_getScrollTop:function() {
			return this._getScroll()[0];
		},_getScroll:function() {
			var M = document.documentElement,N = document.body;
			if (M && (M.scrollTop || M.scrollLeft)) {
				return[M.scrollTop,M.scrollLeft];
			} else {
				if (N) {
					return[N.scrollTop,N.scrollLeft];
				} else {
					return[0,0];
				}
			}
		},regCE:function() {
		},_simpleAdd:function() {
			if (window.addEventListener) {
				return function(O, P, N, M) {
					O.addEventListener(P, N, (M));
				};
			} else {
				if (window.attachEvent) {
					return function(O, P, N, M) {
						O.attachEvent("on" + P, N);
					};
				} else {
					return function() {
					};
				}
			}
		}(),_simpleRemove:function() {
			if (window.removeEventListener) {
				return function(O, P, N, M) {
					O.removeEventListener(P, N, (M));
				};
			} else {
				if (window.detachEvent) {
					return function(N, O, M) {
						N.detachEvent("on" + O, M);
					};
				} else {
					return function() {
					};
				}
			}
		}()};
	}();
	(function() {
		var EU = YAHOO.util.Event;
		EU.on = EU.addListener;
		EU.onFocus = EU.addFocusListener;
		EU.onBlur = EU.addBlurListener;
		/* DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller */
		if (EU.isIE) {
			YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach, YAHOO.util.Event, true);
			var n = document.createElement("p");
			EU._dri = setInterval(function() {
				try {
					n.doScroll("left");
					clearInterval(EU._dri);
					EU._dri = null;
					EU._ready();
					n = null;
				} catch(ex) {
				}
			}, EU.POLL_INTERVAL);
		} else {
			if (EU.webkit && EU.webkit < 525) {
				EU._dri = setInterval(function() {
					var rs = document.readyState;
					if ("loaded" == rs || "complete" == rs) {
						clearInterval(EU._dri);
						EU._dri = null;
						EU._ready();
					}
				}, EU.POLL_INTERVAL);
			} else {
				EU._simpleAdd(document, "DOMContentLoaded", EU._ready);
			}
		}
		EU._simpleAdd(window, "load", EU._load);
		EU._simpleAdd(window, "unload", EU._unload);
		EU._tryPreloadAttach();
	})();
}
YAHOO.util.EventProvider = function() {
};
YAHOO.util.EventProvider.prototype = {__yui_events:null,__yui_subscribers:null,subscribe:function(A, C, F, E) {
	this.__yui_events = this.__yui_events || {};
	var D = this.__yui_events[A];
	if (D) {
		D.subscribe(C, F, E);
	} else {
		this.__yui_subscribers = this.__yui_subscribers || {};
		var B = this.__yui_subscribers;
		if (!B[A]) {
			B[A] = [];
		}
		B[A].push({fn:C,obj:F,overrideContext:E});
	}
},unsubscribe:function(C, E, G) {
	this.__yui_events = this.__yui_events || {};
	var A = this.__yui_events;
	if (C) {
		var F = A[C];
		if (F) {
			return F.unsubscribe(E, G);
		}
	} else {
		var B = true;
		for (var D in A) {
			if (YAHOO.lang.hasOwnProperty(A, D)) {
				B = B && A[D].unsubscribe(E, G);
			}
		}
		return B;
	}
	return false;
},unsubscribeAll:function(A) {
	return this.unsubscribe(A);
},createEvent:function(G, D) {
	this.__yui_events = this.__yui_events || {};
	var A = D || {};
	var I = this.__yui_events;
	if (I[G]) {
	} else {
		var H = A.scope || this;
		var E = (A.silent);
		var B = new YAHOO.util.CustomEvent(G, H, E, YAHOO.util.CustomEvent.FLAT);
		I[G] = B;
		if (A.onSubscribeCallback) {
			B.subscribeEvent.subscribe(A.onSubscribeCallback);
		}
		this.__yui_subscribers = this.__yui_subscribers || {};
		var F = this.__yui_subscribers[G];
		if (F) {
			for (var C = 0; C < F.length; ++C) {
				B.subscribe(F[C].fn, F[C].obj, F[C].overrideContext);
			}
		}
	}
	return I[G];
},fireEvent:function(E, D, A, C) {
	this.__yui_events = this.__yui_events || {};
	var G = this.__yui_events[E];
	if (!G) {
		return null;
	}
	var B = [];
	for (var F = 1; F < arguments.length; ++F) {
		B.push(arguments[F]);
	}
	return G.fire.apply(G, B);
},hasEvent:function(A) {
	if (this.__yui_events) {
		if (this.__yui_events[A]) {
			return true;
		}
	}
	return false;
}};
(function() {
	var A = YAHOO.util.Event,C = YAHOO.lang;
	YAHOO.util.KeyListener = function(D, I, E, F) {
		if (!D) {
		} else {
			if (!I) {
			} else {
				if (!E) {
				}
			}
		}
		if (!F) {
			F = YAHOO.util.KeyListener.KEYDOWN;
		}
		var G = new YAHOO.util.CustomEvent("keyPressed");
		this.enabledEvent = new YAHOO.util.CustomEvent("enabled");
		this.disabledEvent = new YAHOO.util.CustomEvent("disabled");
		if (C.isString(D)) {
			D = document.getElementById(D);
		}
		if (C.isFunction(E)) {
			G.subscribe(E);
		} else {
			G.subscribe(E.fn, E.scope, E.correctScope);
		}
		function H(O, N) {
			if (!I.shift) {
				I.shift = false;
			}
			if (!I.alt) {
				I.alt = false;
			}
			if (!I.ctrl) {
				I.ctrl = false;
			}
			if (O.shiftKey == I.shift && O.altKey == I.alt && O.ctrlKey == I.ctrl) {
				var J,M = I.keys,L;
				if (YAHOO.lang.isArray(M)) {
					for (var K = 0; K < M.length; K++) {
						J = M[K];
						L = A.getCharCode(O);
						if (J == L) {
							G.fire(L, O);
							break;
						}
					}
				} else {
					L = A.getCharCode(O);
					if (M == L) {
						G.fire(L, O);
					}
				}
			}
		}

		this.enable = function() {
			if (!this.enabled) {
				A.on(D, F, H);
				this.enabledEvent.fire(I);
			}
			this.enabled = true;
		};
		this.disable = function() {
			if (this.enabled) {
				A.removeListener(D, F, H);
				this.disabledEvent.fire(I);
			}
			this.enabled = false;
		};
		this.toString = function() {
			return"KeyListener [" + I.keys + "] " + D.tagName + (D.id ? "[" + D.id + "]" : "");
		};
	};
	var B = YAHOO.util.KeyListener;
	B.KEYDOWN = "keydown";
	B.KEYUP = "keyup";
	B.KEY = {ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};
})();
YAHOO.register("event", YAHOO.util.Event, {version:"2.7.0",build:"1799"});
YAHOO.util.Connect = {_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_isFormSubmit:false,_isFileUpload:false,_formNode:null,_sFormData:null,_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,_submitElementValue:null,_hasSubmitListener:(function() {
	if (YAHOO.util.Event) {
		YAHOO.util.Event.addListener(document, "click", function(C) {
			var B = YAHOO.util.Event.getTarget(C),A = B.nodeName.toLowerCase();
			if ((A === "input" || A === "button") && (B.type && B.type.toLowerCase() == "submit")) {
				YAHOO.util.Connect._submitElementValue = encodeURIComponent(B.name) + "=" + encodeURIComponent(B.value);
			}
		});
		return true;
	}
	return false;
})(),startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),uploadEvent:new YAHOO.util.CustomEvent("upload"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(A) {
	this._msxml_progid.unshift(A);
},setDefaultPostHeader:function(A) {
	if (typeof A == "string") {
		this._default_post_header = A;
	} else {
		if (typeof A == "boolean") {
			this._use_default_post_header = A;
		}
	}
},setDefaultXhrHeader:function(A) {
	if (typeof A == "string") {
		this._default_xhr_header = A;
	} else {
		this._use_default_xhr_header = A;
	}
},setPollingInterval:function(A) {
	if (typeof A == "number" && isFinite(A)) {
		this._polling_interval = A;
	}
},createXhrObject:function(F) {
	var E,A;
	try {
		A = new XMLHttpRequest();
		E = {conn:A,tId:F};
	} catch(D) {
		for (var B = 0; B < this._msxml_progid.length; ++B) {
			try {
				A = new ActiveXObject(this._msxml_progid[B]);
				E = {conn:A,tId:F};
				break;
			} catch(C) {
			}
		}
	} finally {
		return E;
	}
},getConnectionObject:function(A) {
	var C;
	var D = this._transaction_id;
	try {
		if (!A) {
			C = this.createXhrObject(D);
		} else {
			C = {};
			C.tId = D;
			C.isUpload = true;
		}
		if (C) {
			this._transaction_id++;
		}
	} catch(B) {
	} finally {
		return C;
	}
},asyncRequest:function(F, C, E, A) {
	var D = (this._isFileUpload) ? this.getConnectionObject(true) : this.getConnectionObject();
	var B = (E && E.argument) ? E.argument : null;
	if (!D) {
		return null;
	} else {
		if (E && E.customevents) {
			this.initCustomEvents(D, E);
		}
		if (this._isFormSubmit) {
			if (this._isFileUpload) {
				this.uploadFile(D, E, C, A);
				return D;
			}
			if (F.toUpperCase() == "GET") {
				if (this._sFormData.length !== 0) {
					C += ((C.indexOf("?") == -1) ? "?" : "&") + this._sFormData;
				}
			} else {
				if (F.toUpperCase() == "POST") {
					A = A ? this._sFormData + "&" + A : this._sFormData;
				}
			}
		}
		if (F.toUpperCase() == "GET" && (E && E.cache === false)) {
			C += ((C.indexOf("?") == -1) ? "?" : "&") + "rnd=" + new Date().valueOf().toString();
		}
		D.conn.open(F, C, true);
		if (this._use_default_xhr_header) {
			if (!this._default_headers["X-Requested-With"]) {
				this.initHeader("X-Requested-With", this._default_xhr_header, true);
			}
		}
		if ((F.toUpperCase() === "POST" && this._use_default_post_header) && this._isFormSubmit === false) {
			this.initHeader("Content-Type", this._default_post_header);
		}
		if (this._has_default_headers || this._has_http_headers) {
			this.setHeader(D);
		}
		this.handleReadyState(D, E);
		D.conn.send(A || "");
		if (this._isFormSubmit === true) {
			this.resetFormState();
		}
		this.startEvent.fire(D, B);
		if (D.startEvent) {
			D.startEvent.fire(D, B);
		}
		return D;
	}
},initCustomEvents:function(A, C) {
	var B;
	for (B in C.customevents) {
		if (this._customEvents[B][0]) {
			A[this._customEvents[B][0]] = new YAHOO.util.CustomEvent(this._customEvents[B][1], (C.scope) ? C.scope : null);
			A[this._customEvents[B][0]].subscribe(C.customevents[B]);
		}
	}
},handleReadyState:function(C, D) {
	var B = this;
	var A = (D && D.argument) ? D.argument : null;
	if (D && D.timeout) {
		this._timeOut[C.tId] = window.setTimeout(function() {
			B.abort(C, D, true);
		}, D.timeout);
	}
	this._poll[C.tId] = window.setInterval(function() {
		if (C.conn && C.conn.readyState === 4) {
			window.clearInterval(B._poll[C.tId]);
			delete B._poll[C.tId];
			if (D && D.timeout) {
				window.clearTimeout(B._timeOut[C.tId]);
				delete B._timeOut[C.tId];
			}
			B.completeEvent.fire(C, A);
			if (C.completeEvent) {
				C.completeEvent.fire(C, A);
			}
			B.handleTransactionResponse(C, D);
		}
	}, this._polling_interval);
},handleTransactionResponse:function(F, G, A) {
	var D,C;
	var B = (G && G.argument) ? G.argument : null;
	try {
		if (F.conn.status !== undefined && F.conn.status !== 0) {
			D = F.conn.status;
		} else {
			D = 13030;
		}
	} catch(E) {
		D = 13030;
	}
	if (D >= 200 && D < 300 || D === 1223) {
		C = this.createResponseObject(F, B);
		if (G && G.success) {
			if (!G.scope) {
				G.success(C);
			} else {
				G.success.apply(G.scope, [C]);
			}
		}
		this.successEvent.fire(C);
		if (F.successEvent) {
			F.successEvent.fire(C);
		}
	} else {
		switch (D) {
			case 12002:
			case 12029:
			case 12030:
			case 12031:
			case 12152:
			case 13030:
				C = this.createExceptionObject(F.tId, B, (A ? A : false));
				if (G && G.failure) {
					if (!G.scope) {
						G.failure(C);
					} else {
						G.failure.apply(G.scope, [C]);
					}
				}
				break;
			default:
				C = this.createResponseObject(F, B);
				if (G && G.failure) {
					if (!G.scope) {
						G.failure(C);
					} else {
						G.failure.apply(G.scope, [C]);
					}
				}
		}
		this.failureEvent.fire(C);
		if (F.failureEvent) {
			F.failureEvent.fire(C);
		}
	}
	this.releaseObject(F);
	C = null;
},createResponseObject:function(A, G) {
	var D = {};
	var I = {};
	try {
		var C = A.conn.getAllResponseHeaders();
		var F = C.split("\n");
		for (var E = 0; E < F.length; E++) {
			var B = F[E].indexOf(":");
			if (B != -1) {
				I[F[E].substring(0, B)] = F[E].substring(B + 2);
			}
		}
	} catch(H) {
	}
	D.tId = A.tId;
	D.status = (A.conn.status == 1223) ? 204 : A.conn.status;
	D.statusText = (A.conn.status == 1223) ? "No Content" : A.conn.statusText;
	D.getResponseHeader = I;
	D.getAllResponseHeaders = C;
	D.responseText = A.conn.responseText;
	D.responseXML = A.conn.responseXML;
	if (G) {
		D.argument = G;
	}
	return D;
},createExceptionObject:function(H, D, A) {
	var F = 0;
	var G = "communication failure";
	var C = -1;
	var B = "transaction aborted";
	var E = {};
	E.tId = H;
	if (A) {
		E.status = C;
		E.statusText = B;
	} else {
		E.status = F;
		E.statusText = G;
	}
	if (D) {
		E.argument = D;
	}
	return E;
},initHeader:function(A, D, C) {
	var B = (C) ? this._default_headers : this._http_headers;
	B[A] = D;
	if (C) {
		this._has_default_headers = true;
	} else {
		this._has_http_headers = true;
	}
},setHeader:function(A) {
	var B;
	if (this._has_default_headers) {
		for (B in this._default_headers) {
			if (YAHOO.lang.hasOwnProperty(this._default_headers, B)) {
				A.conn.setRequestHeader(B, this._default_headers[B]);
			}
		}
	}
	if (this._has_http_headers) {
		for (B in this._http_headers) {
			if (YAHOO.lang.hasOwnProperty(this._http_headers, B)) {
				A.conn.setRequestHeader(B, this._http_headers[B]);
			}
		}
		delete this._http_headers;
		this._http_headers = {};
		this._has_http_headers = false;
	}
},resetDefaultHeaders:function() {
	delete this._default_headers;
	this._default_headers = {};
	this._has_default_headers = false;
},setForm:function(M, H, C) {
	var L,B,K,I,P,J = false,F = [],O = 0,E,G,D,N,A;
	this.resetFormState();
	if (typeof M == "string") {
		L = (document.getElementById(M) || document.forms[M]);
	} else {
		if (typeof M == "object") {
			L = M;
		} else {
			return;
		}
	}
	if (H) {
		this.createFrame(C ? C : null);
		this._isFormSubmit = true;
		this._isFileUpload = true;
		this._formNode = L;
		return;
	}
	for (E = 0,G = L.elements.length; E < G; ++E) {
		B = L.elements[E];
		P = B.disabled;
		K = B.name;
		if (!P && K) {
			K = encodeURIComponent(K) + "=";
			I = encodeURIComponent(B.value);
			switch (B.type) {
				case"select-one":
					if (B.selectedIndex > -1) {
						A = B.options[B.selectedIndex];
						F[O++] = K + encodeURIComponent((A.attributes.value && A.attributes.value.specified) ? A.value : A.text);
					}
					break;
				case"select-multiple":
					if (B.selectedIndex > -1) {
						for (D = B.selectedIndex,N = B.options.length; D < N; ++D) {
							A = B.options[D];
							if (A.selected) {
								F[O++] = K + encodeURIComponent((A.attributes.value && A.attributes.value.specified) ? A.value : A.text);
							}
						}
					}
					break;
				case"radio":
				case"checkbox":
					if (B.checked) {
						F[O++] = K + I;
					}
					break;
				case"file":
				case undefined:
				case"reset":
				case"button":
					break;
				case"submit":
					if (J === false) {
						if (this._hasSubmitListener && this._submitElementValue) {
							F[O++] = this._submitElementValue;
						}
						J = true;
					}
					break;
				default:
					F[O++] = K + I;
			}
		}
	}
	this._isFormSubmit = true;
	this._sFormData = F.join("&");
	this.initHeader("Content-Type", this._default_form_header);
	return this._sFormData;
},resetFormState:function() {
	this._isFormSubmit = false;
	this._isFileUpload = false;
	this._formNode = null;
	this._sFormData = "";
},createFrame:function(A) {
	var B = "yuiIO" + this._transaction_id;
	var C;
	if (YAHOO.env.ua.ie) {
		C = document.createElement('<iframe id="' + B + '" name="' + B + '" />');
		if (typeof A == "boolean") {
			C.src = "javascript:false";
		}
	} else {
		C = document.createElement("iframe");
		C.id = B;
		C.name = B;
	}
	C.style.position = "absolute";
	C.style.top = "-1000px";
	C.style.left = "-1000px";
	document.body.appendChild(C);
},appendPostData:function(A) {
	var D = [],B = A.split("&"),C,E;
	for (C = 0; C < B.length; C++) {
		E = B[C].indexOf("=");
		if (E != -1) {
			D[C] = document.createElement("input");
			D[C].type = "hidden";
			D[C].name = decodeURIComponent(B[C].substring(0, E));
			D[C].value = decodeURIComponent(B[C].substring(E + 1));
			this._formNode.appendChild(D[C]);
		}
	}
	return D;
},uploadFile:function(D, N, E, C) {
	var I = "yuiIO" + D.tId,J = "multipart/form-data",L = document.getElementById(I),O = this,K = (N && N.argument) ? N.argument : null,M,H,B,G;
	var A = {action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};
	this._formNode.setAttribute("action", E);
	this._formNode.setAttribute("method", "POST");
	this._formNode.setAttribute("target", I);
	if (YAHOO.env.ua.ie) {
		this._formNode.setAttribute("encoding", J);
	} else {
		this._formNode.setAttribute("enctype", J);
	}
	if (C) {
		M = this.appendPostData(C);
	}
	this._formNode.submit();
	this.startEvent.fire(D, K);
	if (D.startEvent) {
		D.startEvent.fire(D, K);
	}
	if (N && N.timeout) {
		this._timeOut[D.tId] = window.setTimeout(function() {
			O.abort(D, N, true);
		}, N.timeout);
	}
	if (M && M.length > 0) {
		for (H = 0; H < M.length; H++) {
			this._formNode.removeChild(M[H]);
		}
	}
	for (B in A) {
		if (YAHOO.lang.hasOwnProperty(A, B)) {
			if (A[B]) {
				this._formNode.setAttribute(B, A[B]);
			} else {
				this._formNode.removeAttribute(B);
			}
		}
	}
	this.resetFormState();
	var F = function() {
		if (N && N.timeout) {
			window.clearTimeout(O._timeOut[D.tId]);
			delete O._timeOut[D.tId];
		}
		O.completeEvent.fire(D, K);
		if (D.completeEvent) {
			D.completeEvent.fire(D, K);
		}
		G = {tId:D.tId,argument:N.argument};
		try {
			G.responseText = L.contentWindow.document.body ? L.contentWindow.document.body.innerHTML : L.contentWindow.document.documentElement.textContent;
			G.responseXML = L.contentWindow.document.XMLDocument ? L.contentWindow.document.XMLDocument : L.contentWindow.document;
		} catch(P) {
		}
		if (N && N.upload) {
			if (!N.scope) {
				N.upload(G);
			} else {
				N.upload.apply(N.scope, [G]);
			}
		}
		O.uploadEvent.fire(G);
		if (D.uploadEvent) {
			D.uploadEvent.fire(G);
		}
		YAHOO.util.Event.removeListener(L, "load", F);
		setTimeout(function() {
			document.body.removeChild(L);
			O.releaseObject(D);
		}, 100);
	};
	YAHOO.util.Event.addListener(L, "load", F);
},abort:function(E, G, A) {
	var D;
	var B = (G && G.argument) ? G.argument : null;
	if (E && E.conn) {
		if (this.isCallInProgress(E)) {
			E.conn.abort();
			window.clearInterval(this._poll[E.tId]);
			delete this._poll[E.tId];
			if (A) {
				window.clearTimeout(this._timeOut[E.tId]);
				delete this._timeOut[E.tId];
			}
			D = true;
		}
	} else {
		if (E && E.isUpload === true) {
			var C = "yuiIO" + E.tId;
			var F = document.getElementById(C);
			if (F) {
				YAHOO.util.Event.removeListener(F, "load");
				document.body.removeChild(F);
				if (A) {
					window.clearTimeout(this._timeOut[E.tId]);
					delete this._timeOut[E.tId];
				}
				D = true;
			}
		} else {
			D = false;
		}
	}
	if (D === true) {
		this.abortEvent.fire(E, B);
		if (E.abortEvent) {
			E.abortEvent.fire(E, B);
		}
		this.handleTransactionResponse(E, G, true);
	}
	return D;
},isCallInProgress:function(B) {
	if (B && B.conn) {
		return B.conn.readyState !== 4 && B.conn.readyState !== 0;
	} else {
		if (B && B.isUpload === true) {
			var A = "yuiIO" + B.tId;
			return document.getElementById(A) ? true : false;
		} else {
			return false;
		}
	}
},releaseObject:function(A) {
	if (A && A.conn) {
		A.conn = null;
		A = null;
	}
}};
YAHOO.register("connection", YAHOO.util.Connect, {version:"2.7.0",build:"1799"});
(function() {
	var B = YAHOO.util;
	var A = function(D, C, E, F) {
		if (!D) {
		}
		this.init(D, C, E, F);
	};
	A.NAME = "Anim";
	A.prototype = {toString:function() {
		var C = this.getEl() || {};
		var D = C.id || C.tagName;
		return(this.constructor.NAME + ": " + D);
	},patterns:{noNegatives:/width|height|opacity|padding/i,offsetAttribute:/^((width|height)|(top|left))$/,defaultUnit:/width|height|top$|bottom$|left$|right$/i,offsetUnit:/\d+(em|%|en|ex|pt|in|cm|mm|pc)$/i},doMethod:function(C, E, D) {
		return this.method(this.currentFrame, E, D - E, this.totalFrames);
	},setAttribute:function(C, F, E) {
		var D = this.getEl();
		if (this.patterns.noNegatives.test(C)) {
			F = (F > 0) ? F : 0;
		}
		if ("style" in D) {
			B.Dom.setStyle(D, C, F + E);
		} else {
			if (C in D) {
				D[C] = F;
			}
		}
	},getAttribute:function(C) {
		var E = this.getEl();
		var G = B.Dom.getStyle(E, C);
		if (G !== "auto" && !this.patterns.offsetUnit.test(G)) {
			return parseFloat(G);
		}
		var D = this.patterns.offsetAttribute.exec(C) || [];
		var H = !!(D[3]);
		var F = !!(D[2]);
		if ("style" in E) {
			if (F || (B.Dom.getStyle(E, "position") == "absolute" && H)) {
				G = E["offset" + D[0].charAt(0).toUpperCase() + D[0].substr(1)];
			} else {
				G = 0;
			}
		} else {
			if (C in E) {
				G = E[C];
			}
		}
		return G;
	},getDefaultUnit:function(C) {
		if (this.patterns.defaultUnit.test(C)) {
			return"px";
		}
		return"";
	},setRuntimeAttribute:function(D) {
		var I;
		var E;
		var F = this.attributes;
		this.runtimeAttributes[D] = {};
		var H = function(J) {
			return(typeof J !== "undefined");
		};
		if (!H(F[D]["to"]) && !H(F[D]["by"])) {
			return false;
		}
		I = (H(F[D]["from"])) ? F[D]["from"] : this.getAttribute(D);
		if (H(F[D]["to"])) {
			E = F[D]["to"];
		} else {
			if (H(F[D]["by"])) {
				if (I.constructor == Array) {
					E = [];
					for (var G = 0,C = I.length; G < C; ++G) {
						E[G] = I[G] + F[D]["by"][G] * 1;
					}
				} else {
					E = I + F[D]["by"] * 1;
				}
			}
		}
		this.runtimeAttributes[D].start = I;
		this.runtimeAttributes[D].end = E;
		this.runtimeAttributes[D].unit = (H(F[D].unit)) ? F[D]["unit"] : this.getDefaultUnit(D);
		return true;
	},init:function(E, J, I, C) {
		var D = false;
		var F = null;
		var H = 0;
		E = B.Dom.get(E);
		this.attributes = J || {};
		this.duration = !YAHOO.lang.isUndefined(I) ? I : 1;
		this.method = C || B.Easing.easeNone;
		this.useSeconds = true;
		this.currentFrame = 0;
		this.totalFrames = B.AnimMgr.fps;
		this.setEl = function(M) {
			E = B.Dom.get(M);
		};
		this.getEl = function() {
			return E;
		};
		this.isAnimated = function() {
			return D;
		};
		this.getStartTime = function() {
			return F;
		};
		this.runtimeAttributes = {};
		this.animate = function() {
			if (this.isAnimated()) {
				return false;
			}
			this.currentFrame = 0;
			this.totalFrames = (this.useSeconds) ? Math.ceil(B.AnimMgr.fps * this.duration) : this.duration;
			if (this.duration === 0 && this.useSeconds) {
				this.totalFrames = 1;
			}
			B.AnimMgr.registerElement(this);
			return true;
		};
		this.stop = function(M) {
			if (!this.isAnimated()) {
				return false;
			}
			if (M) {
				this.currentFrame = this.totalFrames;
				this._onTween.fire();
			}
			B.AnimMgr.stop(this);
		};
		var L = function() {
			this.onStart.fire();
			this.runtimeAttributes = {};
			for (var M in this.attributes) {
				this.setRuntimeAttribute(M);
			}
			D = true;
			H = 0;
			F = new Date();
		};
		var K = function() {
			var O = {duration:new Date() - this.getStartTime(),currentFrame:this.currentFrame};
			O.toString = function() {
				return("duration: " + O.duration + ", currentFrame: " + O.currentFrame);
			};
			this.onTween.fire(O);
			var N = this.runtimeAttributes;
			for (var M in N) {
				this.setAttribute(M, this.doMethod(M, N[M].start, N[M].end), N[M].unit);
			}
			H += 1;
		};
		var G = function() {
			var M = (new Date() - F) / 1000;
			var N = {duration:M,frames:H,fps:H / M};
			N.toString = function() {
				return("duration: " + N.duration + ", frames: " + N.frames + ", fps: " + N.fps);
			};
			D = false;
			H = 0;
			this.onComplete.fire(N);
		};
		this._onStart = new B.CustomEvent("_start", this, true);
		this.onStart = new B.CustomEvent("start", this);
		this.onTween = new B.CustomEvent("tween", this);
		this._onTween = new B.CustomEvent("_tween", this, true);
		this.onComplete = new B.CustomEvent("complete", this);
		this._onComplete = new B.CustomEvent("_complete", this, true);
		this._onStart.subscribe(L);
		this._onTween.subscribe(K);
		this._onComplete.subscribe(G);
	}};
	B.Anim = A;
})();
YAHOO.util.AnimMgr = new function() {
	var C = null;
	var B = [];
	var A = 0;
	this.fps = 1000;
	this.delay = 1;
	this.registerElement = function(F) {
		B[B.length] = F;
		A += 1;
		F._onStart.fire();
		this.start();
	};
	this.unRegister = function(G, F) {
		F = F || E(G);
		if (!G.isAnimated() || F == -1) {
			return false;
		}
		G._onComplete.fire();
		B.splice(F, 1);
		A -= 1;
		if (A <= 0) {
			this.stop();
		}
		return true;
	};
	this.start = function() {
		if (C === null) {
			C = setInterval(this.run, this.delay);
		}
	};
	this.stop = function(H) {
		if (!H) {
			clearInterval(C);
			for (var G = 0,F = B.length; G < F; ++G) {
				this.unRegister(B[0], 0);
			}
			B = [];
			C = null;
			A = 0;
		} else {
			this.unRegister(H);
		}
	};
	this.run = function() {
		for (var H = 0,F = B.length; H < F; ++H) {
			var G = B[H];
			if (!G || !G.isAnimated()) {
				continue;
			}
			if (G.currentFrame < G.totalFrames || G.totalFrames === null) {
				G.currentFrame += 1;
				if (G.useSeconds) {
					D(G);
				}
				G._onTween.fire();
			} else {
				YAHOO.util.AnimMgr.stop(G, H);
			}
		}
	};
	var E = function(H) {
		for (var G = 0,F = B.length; G < F; ++G) {
			if (B[G] == H) {
				return G;
			}
		}
		return -1;
	};
	var D = function(G) {
		var J = G.totalFrames;
		var I = G.currentFrame;
		var H = (G.currentFrame * G.duration * 1000 / G.totalFrames);
		var F = (new Date() - G.getStartTime());
		var K = 0;
		if (F < G.duration * 1000) {
			K = Math.round((F / H - 1) * G.currentFrame);
		} else {
			K = J - (I + 1);
		}
		if (K > 0 && isFinite(K)) {
			if (G.currentFrame + K >= J) {
				K = J - (I + 1);
			}
			G.currentFrame += K;
		}
	};
};
YAHOO.util.Bezier = new function() {
	this.getPosition = function(E, D) {
		var F = E.length;
		var C = [];
		for (var B = 0; B < F; ++B) {
			C[B] = [E[B][0],E[B][1]];
		}
		for (var A = 1; A < F; ++A) {
			for (B = 0; B < F - A; ++B) {
				C[B][0] = (1 - D) * C[B][0] + D * C[parseInt(B + 1, 10)][0];
				C[B][1] = (1 - D) * C[B][1] + D * C[parseInt(B + 1, 10)][1];
			}
		}
		return[C[0][0],C[0][1]];
	};
};
(function() {
	var A = function(F, E, G, H) {
		A.superclass.constructor.call(this, F, E, G, H);
	};
	A.NAME = "ColorAnim";
	A.DEFAULT_BGCOLOR = "#fff";
	var C = YAHOO.util;
	YAHOO.extend(A, C.Anim);
	var D = A.superclass;
	var B = A.prototype;
	B.patterns.color = /color$/i;
	B.patterns.rgb = /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i;
	B.patterns.hex = /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i;
	B.patterns.hex3 = /^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i;
	B.patterns.transparent = /^transparent|rgba\(0, 0, 0, 0\)$/;
	B.parseColor = function(E) {
		if (E.length == 3) {
			return E;
		}
		var F = this.patterns.hex.exec(E);
		if (F && F.length == 4) {
			return[parseInt(F[1], 16),parseInt(F[2], 16),parseInt(F[3], 16)];
		}
		F = this.patterns.rgb.exec(E);
		if (F && F.length == 4) {
			return[parseInt(F[1], 10),parseInt(F[2], 10),parseInt(F[3], 10)];
		}
		F = this.patterns.hex3.exec(E);
		if (F && F.length == 4) {
			return[parseInt(F[1] + F[1], 16),parseInt(F[2] + F[2], 16),parseInt(F[3] + F[3], 16)];
		}
		return null;
	};
	B.getAttribute = function(E) {
		var G = this.getEl();
		if (this.patterns.color.test(E)) {
			var I = YAHOO.util.Dom.getStyle(G, E);
			var H = this;
			if (this.patterns.transparent.test(I)) {
				var F = YAHOO.util.Dom.getAncestorBy(G, function(J) {
					return !H.patterns.transparent.test(I);
				});
				if (F) {
					I = C.Dom.getStyle(F, E);
				} else {
					I = A.DEFAULT_BGCOLOR;
				}
			}
		} else {
			I = D.getAttribute.call(this, E);
		}
		return I;
	};
	B.doMethod = function(F, J, G) {
		var I;
		if (this.patterns.color.test(F)) {
			I = [];
			for (var H = 0,E = J.length; H < E; ++H) {
				I[H] = D.doMethod.call(this, F, J[H], G[H]);
			}
			I = "rgb(" + Math.floor(I[0]) + "," + Math.floor(I[1]) + "," + Math.floor(I[2]) + ")";
		} else {
			I = D.doMethod.call(this, F, J, G);
		}
		return I;
	};
	B.setRuntimeAttribute = function(F) {
		D.setRuntimeAttribute.call(this, F);
		if (this.patterns.color.test(F)) {
			var H = this.attributes;
			var J = this.parseColor(this.runtimeAttributes[F].start);
			var G = this.parseColor(this.runtimeAttributes[F].end);
			if (typeof H[F]["to"] === "undefined" && typeof H[F]["by"] !== "undefined") {
				G = this.parseColor(H[F].by);
				for (var I = 0,E = J.length; I < E; ++I) {
					G[I] = J[I] + G[I];
				}
			}
			this.runtimeAttributes[F].start = J;
			this.runtimeAttributes[F].end = G;
		}
	};
	C.ColorAnim = A;
})();
/*
 TERMS OF USE - EASING EQUATIONS
 Open source under the BSD License.
 Copyright 2001 Robert Penner All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
YAHOO.util.Easing = {easeNone:function(B, A, D, C) {
	return D * B / C + A;
},easeIn:function(B, A, D, C) {
	return D * (B /= C) * B + A;
},easeOut:function(B, A, D, C) {
	return -D * (B /= C) * (B - 2) + A;
},easeBoth:function(B, A, D, C) {
	if ((B /= C / 2) < 1) {
		return D / 2 * B * B + A;
	}
	return -D / 2 * ((--B) * (B - 2) - 1) + A;
},easeInStrong:function(B, A, D, C) {
	return D * (B /= C) * B * B * B + A;
},easeOutStrong:function(B, A, D, C) {
	return -D * ((B = B / C - 1) * B * B * B - 1) + A;
},easeBothStrong:function(B, A, D, C) {
	if ((B /= C / 2) < 1) {
		return D / 2 * B * B * B * B + A;
	}
	return -D / 2 * ((B -= 2) * B * B * B - 2) + A;
},elasticIn:function(C, A, G, F, B, E) {
	if (C == 0) {
		return A;
	}
	if ((C /= F) == 1) {
		return A + G;
	}
	if (!E) {
		E = F * 0.3;
	}
	if (!B || B < Math.abs(G)) {
		B = G;
		var D = E / 4;
	} else {
		var D = E / (2 * Math.PI) * Math.asin(G / B);
	}
	return -(B * Math.pow(2, 10 * (C -= 1)) * Math.sin((C * F - D) * (2 * Math.PI) / E)) + A;
},elasticOut:function(C, A, G, F, B, E) {
	if (C == 0) {
		return A;
	}
	if ((C /= F) == 1) {
		return A + G;
	}
	if (!E) {
		E = F * 0.3;
	}
	if (!B || B < Math.abs(G)) {
		B = G;
		var D = E / 4;
	} else {
		var D = E / (2 * Math.PI) * Math.asin(G / B);
	}
	return B * Math.pow(2, -10 * C) * Math.sin((C * F - D) * (2 * Math.PI) / E) + G + A;
},elasticBoth:function(C, A, G, F, B, E) {
	if (C == 0) {
		return A;
	}
	if ((C /= F / 2) == 2) {
		return A + G;
	}
	if (!E) {
		E = F * (0.3 * 1.5);
	}
	if (!B || B < Math.abs(G)) {
		B = G;
		var D = E / 4;
	} else {
		var D = E / (2 * Math.PI) * Math.asin(G / B);
	}
	if (C < 1) {
		return -0.5 * (B * Math.pow(2, 10 * (C -= 1)) * Math.sin((C * F - D) * (2 * Math.PI) / E)) + A;
	}
	return B * Math.pow(2, -10 * (C -= 1)) * Math.sin((C * F - D) * (2 * Math.PI) / E) * 0.5 + G + A;
},backIn:function(B, A, E, D, C) {
	if (typeof C == "undefined") {
		C = 1.70158;
	}
	return E * (B /= D) * B * ((C + 1) * B - C) + A;
},backOut:function(B, A, E, D, C) {
	if (typeof C == "undefined") {
		C = 1.70158;
	}
	return E * ((B = B / D - 1) * B * ((C + 1) * B + C) + 1) + A;
},backBoth:function(B, A, E, D, C) {
	if (typeof C == "undefined") {
		C = 1.70158;
	}
	if ((B /= D / 2) < 1) {
		return E / 2 * (B * B * (((C *= (1.525)) + 1) * B - C)) + A;
	}
	return E / 2 * ((B -= 2) * B * (((C *= (1.525)) + 1) * B + C) + 2) + A;
},bounceIn:function(B, A, D, C) {
	return D - YAHOO.util.Easing.bounceOut(C - B, 0, D, C) + A;
},bounceOut:function(B, A, D, C) {
	if ((B /= C) < (1 / 2.75)) {
		return D * (7.5625 * B * B) + A;
	} else {
		if (B < (2 / 2.75)) {
			return D * (7.5625 * (B -= (1.5 / 2.75)) * B + 0.75) + A;
		} else {
			if (B < (2.5 / 2.75)) {
				return D * (7.5625 * (B -= (2.25 / 2.75)) * B + 0.9375) + A;
			}
		}
	}
	return D * (7.5625 * (B -= (2.625 / 2.75)) * B + 0.984375) + A;
},bounceBoth:function(B, A, D, C) {
	if (B < C / 2) {
		return YAHOO.util.Easing.bounceIn(B * 2, 0, D, C) * 0.5 + A;
	}
	return YAHOO.util.Easing.bounceOut(B * 2 - C, 0, D, C) * 0.5 + D * 0.5 + A;
}};
(function() {
	var A = function(H, G, I, J) {
		if (H) {
			A.superclass.constructor.call(this, H, G, I, J);
		}
	};
	A.NAME = "Motion";
	var E = YAHOO.util;
	YAHOO.extend(A, E.ColorAnim);
	var F = A.superclass;
	var C = A.prototype;
	C.patterns.points = /^points$/i;
	C.setAttribute = function(G, I, H) {
		if (this.patterns.points.test(G)) {
			H = H || "px";
			F.setAttribute.call(this, "left", I[0], H);
			F.setAttribute.call(this, "top", I[1], H);
		} else {
			F.setAttribute.call(this, G, I, H);
		}
	};
	C.getAttribute = function(G) {
		if (this.patterns.points.test(G)) {
			var H = [F.getAttribute.call(this, "left"),F.getAttribute.call(this, "top")];
		} else {
			H = F.getAttribute.call(this, G);
		}
		return H;
	};
	C.doMethod = function(G, K, H) {
		var J = null;
		if (this.patterns.points.test(G)) {
			var I = this.method(this.currentFrame, 0, 100, this.totalFrames) / 100;
			J = E.Bezier.getPosition(this.runtimeAttributes[G], I);
		} else {
			J = F.doMethod.call(this, G, K, H);
		}
		return J;
	};
	C.setRuntimeAttribute = function(P) {
		if (this.patterns.points.test(P)) {
			var H = this.getEl();
			var J = this.attributes;
			var G;
			var L = J["points"]["control"] || [];
			var I;
			var M,O;
			if (L.length > 0 && !(L[0] instanceof Array)) {
				L = [L];
			} else {
				var K = [];
				for (M = 0,O = L.length; M < O; ++M) {
					K[M] = L[M];
				}
				L = K;
			}
			if (E.Dom.getStyle(H, "position") == "static") {
				E.Dom.setStyle(H, "position", "relative");
			}
			if (D(J["points"]["from"])) {
				E.Dom.setXY(H, J["points"]["from"]);
			} else {
				E.Dom.setXY(H, E.Dom.getXY(H));
			}
			G = this.getAttribute("points");
			if (D(J["points"]["to"])) {
				I = B.call(this, J["points"]["to"], G);
				var N = E.Dom.getXY(this.getEl());
				for (M = 0,O = L.length; M < O; ++M) {
					L[M] = B.call(this, L[M], G);
				}
			} else {
				if (D(J["points"]["by"])) {
					I = [G[0] + J["points"]["by"][0],G[1] + J["points"]["by"][1]];
					for (M = 0,O = L.length; M < O; ++M) {
						L[M] = [G[0] + L[M][0],G[1] + L[M][1]];
					}
				}
			}
			this.runtimeAttributes[P] = [G];
			if (L.length > 0) {
				this.runtimeAttributes[P] = this.runtimeAttributes[P].concat(L);
			}
			this.runtimeAttributes[P][this.runtimeAttributes[P].length] = I;
		} else {
			F.setRuntimeAttribute.call(this, P);
		}
	};
	var B = function(G, I) {
		var H = E.Dom.getXY(this.getEl());
		G = [G[0] - H[0] + I[0],G[1] - H[1] + I[1]];
		return G;
	};
	var D = function(G) {
		return(typeof G !== "undefined");
	};
	E.Motion = A;
})();
(function() {
	var D = function(F, E, G, H) {
		if (F) {
			D.superclass.constructor.call(this, F, E, G, H);
		}
	};
	D.NAME = "Scroll";
	var B = YAHOO.util;
	YAHOO.extend(D, B.ColorAnim);
	var C = D.superclass;
	var A = D.prototype;
	A.doMethod = function(E, H, F) {
		var G = null;
		if (E == "scroll") {
			G = [this.method(this.currentFrame, H[0], F[0] - H[0], this.totalFrames),this.method(this.currentFrame, H[1], F[1] - H[1], this.totalFrames)];
		} else {
			G = C.doMethod.call(this, E, H, F);
		}
		return G;
	};
	A.getAttribute = function(E) {
		var G = null;
		var F = this.getEl();
		if (E == "scroll") {
			G = [F.scrollLeft,F.scrollTop];
		} else {
			G = C.getAttribute.call(this, E);
		}
		return G;
	};
	A.setAttribute = function(E, H, G) {
		var F = this.getEl();
		if (E == "scroll") {
			F.scrollLeft = H[0];
			F.scrollTop = H[1];
		} else {
			C.setAttribute.call(this, E, H, G);
		}
	};
	B.Scroll = D;
})();
YAHOO.register("animation", YAHOO.util.Anim, {version:"2.7.0",build:"1799"});
if (!YAHOO.util.DragDropMgr) {
	YAHOO.util.DragDropMgr = function() {
		var A = YAHOO.util.Event,B = YAHOO.util.Dom;
		return{useShim:false,_shimActive:false,_shimState:false,_debugShim:false,_createShim:function() {
			var C = document.createElement("div");
			C.id = "yui-ddm-shim";
			if (document.body.firstChild) {
				document.body.insertBefore(C, document.body.firstChild);
			} else {
				document.body.appendChild(C);
			}
			C.style.display = "none";
			C.style.backgroundColor = "red";
			C.style.position = "absolute";
			C.style.zIndex = "99999";
			B.setStyle(C, "opacity", "0");
			this._shim = C;
			A.on(C, "mouseup", this.handleMouseUp, this, true);
			A.on(C, "mousemove", this.handleMouseMove, this, true);
			A.on(window, "scroll", this._sizeShim, this, true);
		},_sizeShim:function() {
			if (this._shimActive) {
				var C = this._shim;
				C.style.height = B.getDocumentHeight() + "px";
				C.style.width = B.getDocumentWidth() + "px";
				C.style.top = "0";
				C.style.left = "0";
			}
		},_activateShim:function() {
			if (this.useShim) {
				if (!this._shim) {
					this._createShim();
				}
				this._shimActive = true;
				var C = this._shim,D = "0";
				if (this._debugShim) {
					D = ".5";
				}
				B.setStyle(C, "opacity", D);
				this._sizeShim();
				C.style.display = "block";
			}
		},_deactivateShim:function() {
			this._shim.style.display = "none";
			this._shimActive = false;
		},_shim:null,ids:{},handleIds:{},dragCurrent:null,dragOvers:{},deltaX:0,deltaY:0,preventDefault:true,stopPropagation:true,initialized:false,locked:false,interactionInfo:null,init:function() {
			this.initialized = true;
		},POINT:0,INTERSECT:1,STRICT_INTERSECT:2,mode:0,_execOnAll:function(E, D) {
			for (var F in this.ids) {
				for (var C in this.ids[F]) {
					var G = this.ids[F][C];
					if (!this.isTypeOfDD(G)) {
						continue;
					}
					G[E].apply(G, D);
				}
			}
		},_onLoad:function() {
			this.init();
			A.on(document, "mouseup", this.handleMouseUp, this, true);
			A.on(document, "mousemove", this.handleMouseMove, this, true);
			A.on(window, "unload", this._onUnload, this, true);
			A.on(window, "resize", this._onResize, this, true);
		},_onResize:function(C) {
			this._execOnAll("resetConstraints", []);
		},lock:function() {
			this.locked = true;
		},unlock:function() {
			this.locked = false;
		},isLocked:function() {
			return this.locked;
		},locationCache:{},useCache:true,clickPixelThresh:3,clickTimeThresh:1000,dragThreshMet:false,clickTimeout:null,startX:0,startY:0,fromTimeout:false,regDragDrop:function(D, C) {
			if (!this.initialized) {
				this.init();
			}
			if (!this.ids[C]) {
				this.ids[C] = {};
			}
			this.ids[C][D.id] = D;
		},removeDDFromGroup:function(E, C) {
			if (!this.ids[C]) {
				this.ids[C] = {};
			}
			var D = this.ids[C];
			if (D && D[E.id]) {
				delete D[E.id];
			}
		},_remove:function(E) {
			for (var D in E.groups) {
				if (D) {
					var C = this.ids[D];
					if (C && C[E.id]) {
						delete C[E.id];
					}
				}
			}
			delete this.handleIds[E.id];
		},regHandle:function(D, C) {
			if (!this.handleIds[D]) {
				this.handleIds[D] = {};
			}
			this.handleIds[D][C] = C;
		},isDragDrop:function(C) {
			return(this.getDDById(C)) ? true : false;
		},getRelated:function(H, D) {
			var G = [];
			for (var F in H.groups) {
				for (var E in this.ids[F]) {
					var C = this.ids[F][E];
					if (!this.isTypeOfDD(C)) {
						continue;
					}
					if (!D || C.isTarget) {
						G[G.length] = C;
					}
				}
			}
			return G;
		},isLegalTarget:function(G, F) {
			var D = this.getRelated(G, true);
			for (var E = 0,C = D.length; E < C; ++E) {
				if (D[E].id == F.id) {
					return true;
				}
			}
			return false;
		},isTypeOfDD:function(C) {
			return(C && C.__ygDragDrop);
		},isHandle:function(D, C) {
			return(this.handleIds[D] && this.handleIds[D][C]);
		},getDDById:function(D) {
			for (var C in this.ids) {
				if (this.ids[C][D]) {
					return this.ids[C][D];
				}
			}
			return null;
		},handleMouseDown:function(E, D) {
			this.currentTarget = YAHOO.util.Event.getTarget(E);
			this.dragCurrent = D;
			var C = D.getEl();
			this.startX = YAHOO.util.Event.getPageX(E);
			this.startY = YAHOO.util.Event.getPageY(E);
			this.deltaX = this.startX - C.offsetLeft;
			this.deltaY = this.startY - C.offsetTop;
			this.dragThreshMet = false;
			this.clickTimeout = setTimeout(function() {
				var F = YAHOO.util.DDM;
				F.startDrag(F.startX, F.startY);
				F.fromTimeout = true;
			}, this.clickTimeThresh);
		},startDrag:function(C, E) {
			if (this.dragCurrent && this.dragCurrent.useShim) {
				this._shimState = this.useShim;
				this.useShim = true;
			}
			this._activateShim();
			clearTimeout(this.clickTimeout);
			var D = this.dragCurrent;
			if (D && D.events.b4StartDrag) {
				D.b4StartDrag(C, E);
				D.fireEvent("b4StartDragEvent", {x:C,y:E});
			}
			if (D && D.events.startDrag) {
				D.startDrag(C, E);
				D.fireEvent("startDragEvent", {x:C,y:E});
			}
			this.dragThreshMet = true;
		},handleMouseUp:function(C) {
			if (this.dragCurrent) {
				clearTimeout(this.clickTimeout);
				if (this.dragThreshMet) {
					if (this.fromTimeout) {
						this.fromTimeout = false;
						this.handleMouseMove(C);
					}
					this.fromTimeout = false;
					this.fireEvents(C, true);
				} else {
				}
				this.stopDrag(C);
				this.stopEvent(C);
			}
		},stopEvent:function(C) {
			if (this.stopPropagation) {
				YAHOO.util.Event.stopPropagation(C);
			}
			if (this.preventDefault) {
				YAHOO.util.Event.preventDefault(C);
			}
		},stopDrag:function(E, D) {
			var C = this.dragCurrent;
			if (C && !D) {
				if (this.dragThreshMet) {
					if (C.events.b4EndDrag) {
						C.b4EndDrag(E);
						C.fireEvent("b4EndDragEvent", {e:E});
					}
					if (C.events.endDrag) {
						C.endDrag(E);
						C.fireEvent("endDragEvent", {e:E});
					}
				}
				if (C.events.mouseUp) {
					C.onMouseUp(E);
					C.fireEvent("mouseUpEvent", {e:E});
				}
			}
			if (this._shimActive) {
				this._deactivateShim();
				if (this.dragCurrent && this.dragCurrent.useShim) {
					this.useShim = this._shimState;
					this._shimState = false;
				}
			}
			this.dragCurrent = null;
			this.dragOvers = {};
		},handleMouseMove:function(F) {
			var C = this.dragCurrent;
			if (C) {
				if (YAHOO.util.Event.isIE && !F.button) {
					this.stopEvent(F);
					return this.handleMouseUp(F);
				} else {
					if (F.clientX < 0 || F.clientY < 0) {
					}
				}
				if (!this.dragThreshMet) {
					var E = Math.abs(this.startX - YAHOO.util.Event.getPageX(F));
					var D = Math.abs(this.startY - YAHOO.util.Event.getPageY(F));
					if (E > this.clickPixelThresh || D > this.clickPixelThresh) {
						this.startDrag(this.startX, this.startY);
					}
				}
				if (this.dragThreshMet) {
					if (C && C.events.b4Drag) {
						C.b4Drag(F);
						C.fireEvent("b4DragEvent", {e:F});
					}
					if (C && C.events.drag) {
						C.onDrag(F);
						C.fireEvent("dragEvent", {e:F});
					}
					if (C) {
						this.fireEvents(F, false);
					}
				}
				this.stopEvent(F);
			}
		},fireEvents:function(V, L) {
			var a = this.dragCurrent;
			if (!a || a.isLocked() || a.dragOnly) {
				return;
			}
			var N = YAHOO.util.Event.getPageX(V),M = YAHOO.util.Event.getPageY(V),P = new YAHOO.util.Point(N, M),K = a.getTargetCoord(P.x, P.y),F = a.getDragEl(),E = ["out","over","drop","enter"],U = new YAHOO.util.Region(K.y, K.x + F.offsetWidth, K.y + F.offsetHeight, K.x),I = [],D = {},Q = [],c = {outEvts:[],overEvts:[],dropEvts:[],enterEvts:[]};
			for (var S in this.dragOvers) {
				var d = this.dragOvers[S];
				if (!this.isTypeOfDD(d)) {
					continue;
				}
				if (!this.isOverTarget(P, d, this.mode, U)) {
					c.outEvts.push(d);
				}
				I[S] = true;
				delete this.dragOvers[S];
			}
			for (var R in a.groups) {
				if ("string" != typeof R) {
					continue;
				}
				for (S in this.ids[R]) {
					var G = this.ids[R][S];
					if (!this.isTypeOfDD(G)) {
						continue;
					}
					if (G.isTarget && !G.isLocked() && G != a) {
						if (this.isOverTarget(P, G, this.mode, U)) {
							D[R] = true;
							if (L) {
								c.dropEvts.push(G);
							} else {
								if (!I[G.id]) {
									c.enterEvts.push(G);
								} else {
									c.overEvts.push(G);
								}
								this.dragOvers[G.id] = G;
							}
						}
					}
				}
			}
			this.interactionInfo = {out:c.outEvts,enter:c.enterEvts,over:c.overEvts,drop:c.dropEvts,point:P,draggedRegion:U,sourceRegion:this.locationCache[a.id],validDrop:L};
			for (var C in D) {
				Q.push(C);
			}
			if (L && !c.dropEvts.length) {
				this.interactionInfo.validDrop = false;
				if (a.events.invalidDrop) {
					a.onInvalidDrop(V);
					a.fireEvent("invalidDropEvent", {e:V});
				}
			}
			for (S = 0; S < E.length; S++) {
				var Y = null;
				if (c[E[S] + "Evts"]) {
					Y = c[E[S] + "Evts"];
				}
				if (Y && Y.length) {
					var H = E[S].charAt(0).toUpperCase() + E[S].substr(1),X = "onDrag" + H,J = "b4Drag" + H,O = "drag" + H + "Event",W = "drag" + H;
					if (this.mode) {
						if (a.events[J]) {
							a[J](V, Y, Q);
							a.fireEvent(J + "Event", {event:V,info:Y,group:Q});
						}
						if (a.events[W]) {
							a[X](V, Y, Q);
							a.fireEvent(O, {event:V,info:Y,group:Q});
						}
					} else {
						for (var Z = 0,T = Y.length; Z < T; ++Z) {
							if (a.events[J]) {
								a[J](V, Y[Z].id, Q[0]);
								a.fireEvent(J + "Event", {event:V,info:Y[Z].id,group:Q[0]});
							}
							if (a.events[W]) {
								a[X](V, Y[Z].id, Q[0]);
								a.fireEvent(O, {event:V,info:Y[Z].id,group:Q[0]});
							}
						}
					}
				}
			}
		},getBestMatch:function(E) {
			var G = null;
			var D = E.length;
			if (D == 1) {
				G = E[0];
			} else {
				for (var F = 0; F < D; ++F) {
					var C = E[F];
					if (this.mode == this.INTERSECT && C.cursorIsOver) {
						G = C;
						break;
					} else {
						if (!G || !G.overlap || (C.overlap && G.overlap.getArea() < C.overlap.getArea())) {
							G = C;
						}
					}
				}
			}
			return G;
		},refreshCache:function(D) {
			var F = D || this.ids;
			for (var C in F) {
				if ("string" != typeof C) {
					continue;
				}
				for (var E in this.ids[C]) {
					var G = this.ids[C][E];
					if (this.isTypeOfDD(G)) {
						var H = this.getLocation(G);
						if (H) {
							this.locationCache[G.id] = H;
						} else {
							delete this.locationCache[G.id];
						}
					}
				}
			}
		},verifyEl:function(D) {
			try {
				if (D) {
					var C = D.offsetParent;
					if (C) {
						return true;
					}
				}
			} catch(E) {
			}
			return false;
		},getLocation:function(H) {
			if (!this.isTypeOfDD(H)) {
				return null;
			}
			var F = H.getEl(),K,E,D,M,L,N,C,J,G;
			try {
				K = YAHOO.util.Dom.getXY(F);
			} catch(I) {
			}
			if (!K) {
				return null;
			}
			E = K[0];
			D = E + F.offsetWidth;
			M = K[1];
			L = M + F.offsetHeight;
			N = M - H.padding[0];
			C = D + H.padding[1];
			J = L + H.padding[2];
			G = E - H.padding[3];
			return new YAHOO.util.Region(N, C, J, G);
		},isOverTarget:function(K, C, E, F) {
			var G = this.locationCache[C.id];
			if (!G || !this.useCache) {
				G = this.getLocation(C);
				this.locationCache[C.id] = G;
			}
			if (!G) {
				return false;
			}
			C.cursorIsOver = G.contains(K);
			var J = this.dragCurrent;
			if (!J || (!E && !J.constrainX && !J.constrainY)) {
				return C.cursorIsOver;
			}
			C.overlap = null;
			if (!F) {
				var H = J.getTargetCoord(K.x, K.y);
				var D = J.getDragEl();
				F = new YAHOO.util.Region(H.y, H.x + D.offsetWidth, H.y + D.offsetHeight, H.x);
			}
			var I = F.intersect(G);
			if (I) {
				C.overlap = I;
				return(E) ? true : C.cursorIsOver;
			} else {
				return false;
			}
		},_onUnload:function(D, C) {
			this.unregAll();
		},unregAll:function() {
			if (this.dragCurrent) {
				this.stopDrag();
				this.dragCurrent = null;
			}
			this._execOnAll("unreg", []);
			this.ids = {};
		},elementCache:{},getElWrapper:function(D) {
			var C = this.elementCache[D];
			if (!C || !C.el) {
				C = this.elementCache[D] = new this.ElementWrapper(YAHOO.util.Dom.get(D));
			}
			return C;
		},getElement:function(C) {
			return YAHOO.util.Dom.get(C);
		},getCss:function(D) {
			var C = YAHOO.util.Dom.get(D);
			return(C) ? C.style : null;
		},ElementWrapper:function(C) {
			this.el = C || null;
			this.id = this.el && C.id;
			this.css = this.el && C.style;
		},getPosX:function(C) {
			return YAHOO.util.Dom.getX(C);
		},getPosY:function(C) {
			return YAHOO.util.Dom.getY(C);
		},swapNode:function(E, C) {
			if (E.swapNode) {
				E.swapNode(C);
			} else {
				var F = C.parentNode;
				var D = C.nextSibling;
				if (D == E) {
					F.insertBefore(E, C);
				} else {
					if (C == E.nextSibling) {
						F.insertBefore(C, E);
					} else {
						E.parentNode.replaceChild(C, E);
						F.insertBefore(E, D);
					}
				}
			}
		},getScroll:function() {
			var E,C,F = document.documentElement,D = document.body;
			if (F && (F.scrollTop || F.scrollLeft)) {
				E = F.scrollTop;
				C = F.scrollLeft;
			} else {
				if (D) {
					E = D.scrollTop;
					C = D.scrollLeft;
				} else {
				}
			}
			return{top:E,left:C};
		},getStyle:function(D, C) {
			return YAHOO.util.Dom.getStyle(D, C);
		},getScrollTop:function() {
			return this.getScroll().top;
		},getScrollLeft:function() {
			return this.getScroll().left;
		},moveToEl:function(C, E) {
			var D = YAHOO.util.Dom.getXY(E);
			YAHOO.util.Dom.setXY(C, D);
		},getClientHeight:function() {
			return YAHOO.util.Dom.getViewportHeight();
		},getClientWidth:function() {
			return YAHOO.util.Dom.getViewportWidth();
		},numericSort:function(D, C) {
			return(D - C);
		},_timeoutCount:0,_addListeners:function() {
			var C = YAHOO.util.DDM;
			if (YAHOO.util.Event && document) {
				C._onLoad();
			} else {
				if (C._timeoutCount > 2000) {
				} else {
					setTimeout(C._addListeners, 10);
					if (document && document.body) {
						C._timeoutCount += 1;
					}
				}
			}
		},handleWasClicked:function(C, E) {
			if (this.isHandle(E, C.id)) {
				return true;
			} else {
				var D = C.parentNode;
				while (D) {
					if (this.isHandle(E, D.id)) {
						return true;
					} else {
						D = D.parentNode;
					}
				}
			}
			return false;
		}};
	}();
	YAHOO.util.DDM = YAHOO.util.DragDropMgr;
	YAHOO.util.DDM._addListeners();
}
(function() {
	var A = YAHOO.util.Event;
	var B = YAHOO.util.Dom;
	YAHOO.util.DragDrop = function(E, C, D) {
		if (E) {
			this.init(E, C, D);
		}
	};
	YAHOO.util.DragDrop.prototype = {events:null,on:function() {
		this.subscribe.apply(this, arguments);
	},id:null,config:null,dragElId:null,handleElId:null,invalidHandleTypes:null,invalidHandleIds:null,invalidHandleClasses:null,startPageX:0,startPageY:0,groups:null,locked:false,lock:function() {
		this.locked = true;
	},unlock:function() {
		this.locked = false;
	},isTarget:true,padding:null,dragOnly:false,useShim:false,_domRef:null,__ygDragDrop:true,constrainX:false,constrainY:false,minX:0,maxX:0,minY:0,maxY:0,deltaX:0,deltaY:0,maintainOffset:false,xTicks:null,yTicks:null,primaryButtonOnly:true,available:false,hasOuterHandles:false,cursorIsOver:false,overlap:null,b4StartDrag:function(C, D) {
	},startDrag:function(C, D) {
	},b4Drag:function(C) {
	},onDrag:function(C) {
	},onDragEnter:function(C, D) {
	},b4DragOver:function(C) {
	},onDragOver:function(C, D) {
	},b4DragOut:function(C) {
	},onDragOut:function(C, D) {
	},b4DragDrop:function(C) {
	},onDragDrop:function(C, D) {
	},onInvalidDrop:function(C) {
	},b4EndDrag:function(C) {
	},endDrag:function(C) {
	},b4MouseDown:function(C) {
	},onMouseDown:function(C) {
	},onMouseUp:function(C) {
	},onAvailable:function() {
	},getEl:function() {
		if (!this._domRef) {
			this._domRef = B.get(this.id);
		}
		return this._domRef;
	},getDragEl:function() {
		return B.get(this.dragElId);
	},init:function(F, C, D) {
		this.initTarget(F, C, D);
		A.on(this._domRef || this.id, "mousedown", this.handleMouseDown, this, true);
		for (var E in this.events) {
			this.createEvent(E + "Event");
		}
	},initTarget:function(E, C, D) {
		this.config = D || {};
		this.events = {};
		this.DDM = YAHOO.util.DDM;
		this.groups = {};
		if (typeof E !== "string") {
			this._domRef = E;
			E = B.generateId(E);
		}
		this.id = E;
		this.addToGroup((C) ? C : "default");
		this.handleElId = E;
		A.onAvailable(E, this.handleOnAvailable, this, true);
		this.setDragElId(E);
		this.invalidHandleTypes = {A:"A"};
		this.invalidHandleIds = {};
		this.invalidHandleClasses = [];
		this.applyConfig();
	},applyConfig:function() {
		this.events = {mouseDown:true,b4MouseDown:true,mouseUp:true,b4StartDrag:true,startDrag:true,b4EndDrag:true,endDrag:true,drag:true,b4Drag:true,invalidDrop:true,b4DragOut:true,dragOut:true,dragEnter:true,b4DragOver:true,dragOver:true,b4DragDrop:true,dragDrop:true};
		if (this.config.events) {
			for (var C in this.config.events) {
				if (this.config.events[C] === false) {
					this.events[C] = false;
				}
			}
		}
		this.padding = this.config.padding || [0,0,0,0];
		this.isTarget = (this.config.isTarget !== false);
		this.maintainOffset = (this.config.maintainOffset);
		this.primaryButtonOnly = (this.config.primaryButtonOnly !== false);
		this.dragOnly = ((this.config.dragOnly === true) ? true : false);
		this.useShim = ((this.config.useShim === true) ? true : false);
	},handleOnAvailable:function() {
		this.available = true;
		this.resetConstraints();
		this.onAvailable();
	},setPadding:function(E, C, F, D) {
		if (!C && 0 !== C) {
			this.padding = [E,E,E,E];
		} else {
			if (!F && 0 !== F) {
				this.padding = [E,C,E,C];
			} else {
				this.padding = [E,C,F,D];
			}
		}
	},setInitPosition:function(F, E) {
		var G = this.getEl();
		if (!this.DDM.verifyEl(G)) {
			if (G && G.style && (G.style.display == "none")) {
			} else {
			}
			return;
		}
		var D = F || 0;
		var C = E || 0;
		var H = B.getXY(G);
		this.initPageX = H[0] - D;
		this.initPageY = H[1] - C;
		this.lastPageX = H[0];
		this.lastPageY = H[1];
		this.setStartPosition(H);
	},setStartPosition:function(D) {
		var C = D || B.getXY(this.getEl());
		this.deltaSetXY = null;
		this.startPageX = C[0];
		this.startPageY = C[1];
	},addToGroup:function(C) {
		this.groups[C] = true;
		this.DDM.regDragDrop(this, C);
	},removeFromGroup:function(C) {
		if (this.groups[C]) {
			delete this.groups[C];
		}
		this.DDM.removeDDFromGroup(this, C);
	},setDragElId:function(C) {
		this.dragElId = C;
	},setHandleElId:function(C) {
		if (typeof C !== "string") {
			C = B.generateId(C);
		}
		this.handleElId = C;
		this.DDM.regHandle(this.id, C);
	},setOuterHandleElId:function(C) {
		if (typeof C !== "string") {
			C = B.generateId(C);
		}
		A.on(C, "mousedown", this.handleMouseDown, this, true);
		this.setHandleElId(C);
		this.hasOuterHandles = true;
	},unreg:function() {
		A.removeListener(this.id, "mousedown", this.handleMouseDown);
		this._domRef = null;
		this.DDM._remove(this);
	},isLocked:function() {
		return(this.DDM.isLocked() || this.locked);
	},handleMouseDown:function(J, I) {
		var D = J.which || J.button;
		if (this.primaryButtonOnly && D > 1) {
			return;
		}
		if (this.isLocked()) {
			return;
		}
		var C = this.b4MouseDown(J),F = true;
		if (this.events.b4MouseDown) {
			F = this.fireEvent("b4MouseDownEvent", J);
		}
		var E = this.onMouseDown(J),H = true;
		if (this.events.mouseDown) {
			H = this.fireEvent("mouseDownEvent", J);
		}
		if ((C === false) || (E === false) || (F === false) || (H === false)) {
			return;
		}
		this.DDM.refreshCache(this.groups);
		var G = new YAHOO.util.Point(A.getPageX(J), A.getPageY(J));
		if (!this.hasOuterHandles && !this.DDM.isOverTarget(G, this)) {
		} else {
			if (this.clickValidator(J)) {
				this.setStartPosition();
				this.DDM.handleMouseDown(J, this);
				this.DDM.stopEvent(J);
			} else {
			}
		}
	},clickValidator:function(D) {
		var C = YAHOO.util.Event.getTarget(D);
		return(this.isValidHandleChild(C) && (this.id == this.handleElId || this.DDM.handleWasClicked(C, this.id)));
	},getTargetCoord:function(E, D) {
		var C = E - this.deltaX;
		var F = D - this.deltaY;
		if (this.constrainX) {
			if (C < this.minX) {
				C = this.minX;
			}
			if (C > this.maxX) {
				C = this.maxX;
			}
		}
		if (this.constrainY) {
			if (F < this.minY) {
				F = this.minY;
			}
			if (F > this.maxY) {
				F = this.maxY;
			}
		}
		C = this.getTick(C, this.xTicks);
		F = this.getTick(F, this.yTicks);
		return{x:C,y:F};
	},addInvalidHandleType:function(C) {
		var D = C.toUpperCase();
		this.invalidHandleTypes[D] = D;
	},addInvalidHandleId:function(C) {
		if (typeof C !== "string") {
			C = B.generateId(C);
		}
		this.invalidHandleIds[C] = C;
	},addInvalidHandleClass:function(C) {
		this.invalidHandleClasses.push(C);
	},removeInvalidHandleType:function(C) {
		var D = C.toUpperCase();
		delete this.invalidHandleTypes[D];
	},removeInvalidHandleId:function(C) {
		if (typeof C !== "string") {
			C = B.generateId(C);
		}
		delete this.invalidHandleIds[C];
	},removeInvalidHandleClass:function(D) {
		for (var E = 0,C = this.invalidHandleClasses.length; E < C; ++E) {
			if (this.invalidHandleClasses[E] == D) {
				delete this.invalidHandleClasses[E];
			}
		}
	},isValidHandleChild:function(F) {
		var E = true;
		var H;
		try {
			H = F.nodeName.toUpperCase();
		} catch(G) {
			H = F.nodeName;
		}
		E = E && !this.invalidHandleTypes[H];
		E = E && !this.invalidHandleIds[F.id];
		for (var D = 0,C = this.invalidHandleClasses.length; E && D < C; ++D) {
			E = !B.hasClass(F, this.invalidHandleClasses[D]);
		}
		return E;
	},setXTicks:function(F, C) {
		this.xTicks = [];
		this.xTickSize = C;
		var E = {};
		for (var D = this.initPageX; D >= this.minX; D = D - C) {
			if (!E[D]) {
				this.xTicks[this.xTicks.length] = D;
				E[D] = true;
			}
		}
		for (D = this.initPageX; D <= this.maxX; D = D + C) {
			if (!E[D]) {
				this.xTicks[this.xTicks.length] = D;
				E[D] = true;
			}
		}
		this.xTicks.sort(this.DDM.numericSort);
	},setYTicks:function(F, C) {
		this.yTicks = [];
		this.yTickSize = C;
		var E = {};
		for (var D = this.initPageY; D >= this.minY; D = D - C) {
			if (!E[D]) {
				this.yTicks[this.yTicks.length] = D;
				E[D] = true;
			}
		}
		for (D = this.initPageY; D <= this.maxY; D = D + C) {
			if (!E[D]) {
				this.yTicks[this.yTicks.length] = D;
				E[D] = true;
			}
		}
		this.yTicks.sort(this.DDM.numericSort);
	},setXConstraint:function(E, D, C) {
		this.leftConstraint = parseInt(E, 10);
		this.rightConstraint = parseInt(D, 10);
		this.minX = this.initPageX - this.leftConstraint;
		this.maxX = this.initPageX + this.rightConstraint;
		if (C) {
			this.setXTicks(this.initPageX, C);
		}
		this.constrainX = true;
	},clearConstraints:function() {
		this.constrainX = false;
		this.constrainY = false;
		this.clearTicks();
	},clearTicks:function() {
		this.xTicks = null;
		this.yTicks = null;
		this.xTickSize = 0;
		this.yTickSize = 0;
	},setYConstraint:function(C, E, D) {
		this.topConstraint = parseInt(C, 10);
		this.bottomConstraint = parseInt(E, 10);
		this.minY = this.initPageY - this.topConstraint;
		this.maxY = this.initPageY + this.bottomConstraint;
		if (D) {
			this.setYTicks(this.initPageY, D);
		}
		this.constrainY = true;
	},resetConstraints:function() {
		if (this.initPageX || this.initPageX === 0) {
			var D = (this.maintainOffset) ? this.lastPageX - this.initPageX : 0;
			var C = (this.maintainOffset) ? this.lastPageY - this.initPageY : 0;
			this.setInitPosition(D, C);
		} else {
			this.setInitPosition();
		}
		if (this.constrainX) {
			this.setXConstraint(this.leftConstraint, this.rightConstraint, this.xTickSize);
		}
		if (this.constrainY) {
			this.setYConstraint(this.topConstraint, this.bottomConstraint, this.yTickSize);
		}
	},getTick:function(I, F) {
		if (!F) {
			return I;
		} else {
			if (F[0] >= I) {
				return F[0];
			} else {
				for (var D = 0,C = F.length; D < C; ++D) {
					var E = D + 1;
					if (F[E] && F[E] >= I) {
						var H = I - F[D];
						var G = F[E] - I;
						return(G > H) ? F[D] : F[E];
					}
				}
				return F[F.length - 1];
			}
		}
	},toString:function() {
		return("DragDrop " + this.id);
	}};
	YAHOO.augment(YAHOO.util.DragDrop, YAHOO.util.EventProvider);
})();
YAHOO.util.DD = function(C, A, B) {
	if (C) {
		this.init(C, A, B);
	}
};
YAHOO.extend(YAHOO.util.DD, YAHOO.util.DragDrop, {scroll:true,autoOffset:function(C, B) {
	var A = C - this.startPageX;
	var D = B - this.startPageY;
	this.setDelta(A, D);
},setDelta:function(B, A) {
	this.deltaX = B;
	this.deltaY = A;
},setDragElPos:function(C, B) {
	var A = this.getDragEl();
	this.alignElWithMouse(A, C, B);
},alignElWithMouse:function(C, G, F) {
	var E = this.getTargetCoord(G, F);
	if (!this.deltaSetXY) {
		var H = [E.x,E.y];
		YAHOO.util.Dom.setXY(C, H);
		var D = parseInt(YAHOO.util.Dom.getStyle(C, "left"), 10);
		var B = parseInt(YAHOO.util.Dom.getStyle(C, "top"), 10);
		this.deltaSetXY = [D - E.x,B - E.y];
	} else {
		YAHOO.util.Dom.setStyle(C, "left", (E.x + this.deltaSetXY[0]) + "px");
		YAHOO.util.Dom.setStyle(C, "top", (E.y + this.deltaSetXY[1]) + "px");
	}
	this.cachePosition(E.x, E.y);
	var A = this;
	setTimeout(function() {
		A.autoScroll.call(A, E.x, E.y, C.offsetHeight, C.offsetWidth);
	}, 0);
},cachePosition:function(B, A) {
	if (B) {
		this.lastPageX = B;
		this.lastPageY = A;
	} else {
		var C = YAHOO.util.Dom.getXY(this.getEl());
		this.lastPageX = C[0];
		this.lastPageY = C[1];
	}
},autoScroll:function(J, I, E, K) {
	if (this.scroll) {
		var L = this.DDM.getClientHeight();
		var B = this.DDM.getClientWidth();
		var N = this.DDM.getScrollTop();
		var D = this.DDM.getScrollLeft();
		var H = E + I;
		var M = K + J;
		var G = (L + N - I - this.deltaY);
		var F = (B + D - J - this.deltaX);
		var C = 40;
		var A = (document.all) ? 80 : 30;
		if (H > L && G < C) {
			window.scrollTo(D, N + A);
		}
		if (I < N && N > 0 && I - N < C) {
			window.scrollTo(D, N - A);
		}
		if (M > B && F < C) {
			window.scrollTo(D + A, N);
		}
		if (J < D && D > 0 && J - D < C) {
			window.scrollTo(D - A, N);
		}
	}
},applyConfig:function() {
	YAHOO.util.DD.superclass.applyConfig.call(this);
	this.scroll = (this.config.scroll !== false);
},b4MouseDown:function(A) {
	this.setStartPosition();
	this.autoOffset(YAHOO.util.Event.getPageX(A), YAHOO.util.Event.getPageY(A));
},b4Drag:function(A) {
	this.setDragElPos(YAHOO.util.Event.getPageX(A), YAHOO.util.Event.getPageY(A));
},toString:function() {
	return("DD " + this.id);
}});
YAHOO.util.DDProxy = function(C, A, B) {
	if (C) {
		this.init(C, A, B);
		this.initFrame();
	}
};
YAHOO.util.DDProxy.dragElId = "ygddfdiv";
YAHOO.extend(YAHOO.util.DDProxy, YAHOO.util.DD, {resizeFrame:true,centerFrame:false,createFrame:function() {
	var B = this,A = document.body;
	if (!A || !A.firstChild) {
		setTimeout(function() {
			B.createFrame();
		}, 50);
		return;
	}
	var F = this.getDragEl(),E = YAHOO.util.Dom;
	if (!F) {
		F = document.createElement("div");
		F.id = this.dragElId;
		var D = F.style;
		D.position = "absolute";
		D.visibility = "hidden";
		D.cursor = "move";
		D.border = "2px solid #aaa";
		D.zIndex = 999;
		D.height = "25px";
		D.width = "25px";
		var C = document.createElement("div");
		E.setStyle(C, "height", "100%");
		E.setStyle(C, "width", "100%");
		E.setStyle(C, "background-color", "#ccc");
		E.setStyle(C, "opacity", "0");
		F.appendChild(C);
		A.insertBefore(F, A.firstChild);
	}
},initFrame:function() {
	this.createFrame();
},applyConfig:function() {
	YAHOO.util.DDProxy.superclass.applyConfig.call(this);
	this.resizeFrame = (this.config.resizeFrame !== false);
	this.centerFrame = (this.config.centerFrame);
	this.setDragElId(this.config.dragElId || YAHOO.util.DDProxy.dragElId);
},showFrame:function(E, D) {
	var C = this.getEl();
	var A = this.getDragEl();
	var B = A.style;
	this._resizeProxy();
	if (this.centerFrame) {
		this.setDelta(Math.round(parseInt(B.width, 10) / 2), Math.round(parseInt(B.height, 10) / 2));
	}
	this.setDragElPos(E, D);
	YAHOO.util.Dom.setStyle(A, "visibility", "visible");
},_resizeProxy:function() {
	if (this.resizeFrame) {
		var H = YAHOO.util.Dom;
		var B = this.getEl();
		var C = this.getDragEl();
		var G = parseInt(H.getStyle(C, "borderTopWidth"), 10);
		var I = parseInt(H.getStyle(C, "borderRightWidth"), 10);
		var F = parseInt(H.getStyle(C, "borderBottomWidth"), 10);
		var D = parseInt(H.getStyle(C, "borderLeftWidth"), 10);
		if (isNaN(G)) {
			G = 0;
		}
		if (isNaN(I)) {
			I = 0;
		}
		if (isNaN(F)) {
			F = 0;
		}
		if (isNaN(D)) {
			D = 0;
		}
		var E = Math.max(0, B.offsetWidth - I - D);
		var A = Math.max(0, B.offsetHeight - G - F);
		H.setStyle(C, "width", E + "px");
		H.setStyle(C, "height", A + "px");
	}
},b4MouseDown:function(B) {
	this.setStartPosition();
	var A = YAHOO.util.Event.getPageX(B);
	var C = YAHOO.util.Event.getPageY(B);
	this.autoOffset(A, C);
},b4StartDrag:function(A, B) {
	this.showFrame(A, B);
},b4EndDrag:function(A) {
	YAHOO.util.Dom.setStyle(this.getDragEl(), "visibility", "hidden");
},endDrag:function(D) {
	var C = YAHOO.util.Dom;
	var B = this.getEl();
	var A = this.getDragEl();
	C.setStyle(A, "visibility", "");
	C.setStyle(B, "visibility", "hidden");
	YAHOO.util.DDM.moveToEl(B, A);
	C.setStyle(A, "visibility", "hidden");
	C.setStyle(B, "visibility", "");
},toString:function() {
	return("DDProxy " + this.id);
}});
YAHOO.util.DDTarget = function(C, A, B) {
	if (C) {
		this.initTarget(C, A, B);
	}
};
YAHOO.extend(YAHOO.util.DDTarget, YAHOO.util.DragDrop, {toString:function() {
	return("DDTarget " + this.id);
}});
YAHOO.register("dragdrop", YAHOO.util.DragDropMgr, {version:"2.7.0",build:"1799"});
YAHOO.util.Attribute = function(B, A) {
	if (A) {
		this.owner = A;
		this.configure(B, true);
	}
};
YAHOO.util.Attribute.prototype = {name:undefined,value:null,owner:null,readOnly:false,writeOnce:false,_initialConfig:null,_written:false,method:null,setter:null,getter:null,validator:null,getValue:function() {
	var A = this.value;
	if (this.getter) {
		A = this.getter.call(this.owner, this.name);
	}
	return A;
},setValue:function(F, B) {
	var E,A = this.owner,C = this.name;
	var D = {type:C,prevValue:this.getValue(),newValue:F};
	if (this.readOnly || (this.writeOnce && this._written)) {
		return false;
	}
	if (this.validator && !this.validator.call(A, F)) {
		return false;
	}
	if (!B) {
		E = A.fireBeforeChangeEvent(D);
		if (E === false) {
			return false;
		}
	}
	if (this.setter) {
		F = this.setter.call(A, F, this.name);
		if (F === undefined) {
		}
	}
	if (this.method) {
		this.method.call(A, F, this.name);
	}
	this.value = F;
	this._written = true;
	D.type = C;
	if (!B) {
		this.owner.fireChangeEvent(D);
	}
	return true;
},configure:function(B, C) {
	B = B || {};
	if (C) {
		this._written = false;
	}
	this._initialConfig = this._initialConfig || {};
	for (var A in B) {
		if (B.hasOwnProperty(A)) {
			this[A] = B[A];
			if (C) {
				this._initialConfig[A] = B[A];
			}
		}
	}
},resetValue:function() {
	return this.setValue(this._initialConfig.value);
},resetConfig:function() {
	this.configure(this._initialConfig, true);
},refresh:function(A) {
	this.setValue(this.value, A);
}};
(function() {
	var A = YAHOO.util.Lang;
	YAHOO.util.AttributeProvider = function() {
	};
	YAHOO.util.AttributeProvider.prototype = {_configs:null,get:function(C) {
		this._configs = this._configs || {};
		var B = this._configs[C];
		if (!B || !this._configs.hasOwnProperty(C)) {
			return null;
		}
		return B.getValue();
	},set:function(D, E, B) {
		this._configs = this._configs || {};
		var C = this._configs[D];
		if (!C) {
			return false;
		}
		return C.setValue(E, B);
	},getAttributeKeys:function() {
		this._configs = this._configs;
		var C = [],B;
		for (B in this._configs) {
			if (A.hasOwnProperty(this._configs, B) && !A.isUndefined(this._configs[B])) {
				C[C.length] = B;
			}
		}
		return C;
	},setAttributes:function(D, B) {
		for (var C in D) {
			if (A.hasOwnProperty(D, C)) {
				this.set(C, D[C], B);
			}
		}
	},resetValue:function(C, B) {
		this._configs = this._configs || {};
		if (this._configs[C]) {
			this.set(C, this._configs[C]._initialConfig.value, B);
			return true;
		}
		return false;
	},refresh:function(E, C) {
		this._configs = this._configs || {};
		var F = this._configs;
		E = ((A.isString(E)) ? [E] : E) || this.getAttributeKeys();
		for (var D = 0,B = E.length; D < B; ++D) {
			if (F.hasOwnProperty(E[D])) {
				this._configs[E[D]].refresh(C);
			}
		}
	},register:function(B, C) {
		this.setAttributeConfig(B, C);
	},getAttributeConfig:function(C) {
		this._configs = this._configs || {};
		var B = this._configs[C] || {};
		var D = {};
		for (C in B) {
			if (A.hasOwnProperty(B, C)) {
				D[C] = B[C];
			}
		}
		return D;
	},setAttributeConfig:function(B, C, D) {
		this._configs = this._configs || {};
		C = C || {};
		if (!this._configs[B]) {
			C.name = B;
			this._configs[B] = this.createAttribute(C);
		} else {
			this._configs[B].configure(C, D);
		}
	},configureAttribute:function(B, C, D) {
		this.setAttributeConfig(B, C, D);
	},resetAttributeConfig:function(B) {
		this._configs = this._configs || {};
		this._configs[B].resetConfig();
	},subscribe:function(B, C) {
		this._events = this._events || {};
		if (!(B in this._events)) {
			this._events[B] = this.createEvent(B);
		}
		YAHOO.util.EventProvider.prototype.subscribe.apply(this, arguments);
	},on:function() {
		this.subscribe.apply(this, arguments);
	},addListener:function() {
		this.subscribe.apply(this, arguments);
	},fireBeforeChangeEvent:function(C) {
		var B = "before";
		B += C.type.charAt(0).toUpperCase() + C.type.substr(1) + "Change";
		C.type = B;
		return this.fireEvent(C.type, C);
	},fireChangeEvent:function(B) {
		B.type += "Change";
		return this.fireEvent(B.type, B);
	},createAttribute:function(B) {
		return new YAHOO.util.Attribute(B, this);
	}};
	YAHOO.augment(YAHOO.util.AttributeProvider, YAHOO.util.EventProvider);
})();
(function() {
	var B = YAHOO.util.Dom,C = YAHOO.util.AttributeProvider;
	var A = function(D, E) {
		this.init.apply(this, arguments);
	};
	A.DOM_EVENTS = {"click":true,"dblclick":true,"keydown":true,"keypress":true,"keyup":true,"mousedown":true,"mousemove":true,"mouseout":true,"mouseover":true,"mouseup":true,"focus":true,"blur":true,"submit":true,"change":true};
	A.prototype = {DOM_EVENTS:null,DEFAULT_HTML_SETTER:function(F, D) {
		var E = this.get("element");
		if (E) {
			E[D] = F;
		}
	},DEFAULT_HTML_GETTER:function(D) {
		var E = this.get("element"),F;
		if (E) {
			F = E[D];
		}
		return F;
	},appendChild:function(D) {
		D = D.get ? D.get("element") : D;
		return this.get("element").appendChild(D);
	},getElementsByTagName:function(D) {
		return this.get("element").getElementsByTagName(D);
	},hasChildNodes:function() {
		return this.get("element").hasChildNodes();
	},insertBefore:function(D, E) {
		D = D.get ? D.get("element") : D;
		E = (E && E.get) ? E.get("element") : E;
		return this.get("element").insertBefore(D, E);
	},removeChild:function(D) {
		D = D.get ? D.get("element") : D;
		return this.get("element").removeChild(D);
	},replaceChild:function(D, E) {
		D = D.get ? D.get("element") : D;
		E = E.get ? E.get("element") : E;
		return this.get("element").replaceChild(D, E);
	},initAttributes:function(D) {
	},addListener:function(H, G, I, F) {
		var E = this.get("element") || this.get("id");
		F = F || this;
		var D = this;
		if (!this._events[H]) {
			if (E && this.DOM_EVENTS[H]) {
				YAHOO.util.Event.addListener(E, H, function(J) {
					if (J.srcElement && !J.target) {
						J.target = J.srcElement;
					}
					D.fireEvent(H, J);
				}, I, F);
			}
			this.createEvent(H, this);
		}
		return YAHOO.util.EventProvider.prototype.subscribe.apply(this, arguments);
	},on:function() {
		return this.addListener.apply(this, arguments);
	},subscribe:function() {
		return this.addListener.apply(this, arguments);
	},removeListener:function(E, D) {
		return this.unsubscribe.apply(this, arguments);
	},addClass:function(D) {
		B.addClass(this.get("element"), D);
	},getElementsByClassName:function(E, D) {
		return B.getElementsByClassName(E, D, this.get("element"));
	},hasClass:function(D) {
		return B.hasClass(this.get("element"), D);
	},removeClass:function(D) {
		return B.removeClass(this.get("element"), D);
	},replaceClass:function(E, D) {
		return B.replaceClass(this.get("element"), E, D);
	},setStyle:function(E, D) {
		return B.setStyle(this.get("element"), E, D);
	},getStyle:function(D) {
		return B.getStyle(this.get("element"), D);
	},fireQueue:function() {
		var E = this._queue;
		for (var F = 0,D = E.length; F < D; ++F) {
			this[E[F][0]].apply(this, E[F][1]);
		}
	},appendTo:function(E, F) {
		E = (E.get) ? E.get("element") : B.get(E);
		this.fireEvent("beforeAppendTo", {type:"beforeAppendTo",target:E});
		F = (F && F.get) ? F.get("element") : B.get(F);
		var D = this.get("element");
		if (!D) {
			return false;
		}
		if (!E) {
			return false;
		}
		if (D.parent != E) {
			if (F) {
				E.insertBefore(D, F);
			} else {
				E.appendChild(D);
			}
		}
		this.fireEvent("appendTo", {type:"appendTo",target:E});
		return D;
	},get:function(D) {
		var F = this._configs || {},E = F.element;
		if (E && !F[D] && !YAHOO.lang.isUndefined(E.value[D])) {
			this._setHTMLAttrConfig(D);
		}
		return C.prototype.get.call(this, D);
	},setAttributes:function(J, G) {
		var E = {},H = this._configOrder;
		for (var I = 0,D = H.length; I < D; ++I) {
			if (J[H[I]] !== undefined) {
				E[H[I]] = true;
				this.set(H[I], J[H[I]], G);
			}
		}
		for (var F in J) {
			if (J.hasOwnProperty(F) && !E[F]) {
				this.set(F, J[F], G);
			}
		}
	},set:function(E, G, D) {
		var F = this.get("element");
		if (!F) {
			this._queue[this._queue.length] = ["set",arguments];
			if (this._configs[E]) {
				this._configs[E].value = G;
			}
			return;
		}
		if (!this._configs[E] && !YAHOO.lang.isUndefined(F[E])) {
			this._setHTMLAttrConfig(E);
		}
		return C.prototype.set.apply(this, arguments);
	},setAttributeConfig:function(D, E, F) {
		this._configOrder.push(D);
		C.prototype.setAttributeConfig.apply(this, arguments);
	},createEvent:function(E, D) {
		this._events[E] = true;
		return C.prototype.createEvent.apply(this, arguments);
	},init:function(E, D) {
		this._initElement(E, D);
	},destroy:function() {
		var D = this.get("element");
		YAHOO.util.Event.purgeElement(D, true);
		this.unsubscribeAll();
		if (D && D.parentNode) {
			D.parentNode.removeChild(D);
		}
		this._queue = [];
		this._events = {};
		this._configs = {};
		this._configOrder = [];
	},_initElement:function(F, E) {
		this._queue = this._queue || [];
		this._events = this._events || {};
		this._configs = this._configs || {};
		this._configOrder = [];
		E = E || {};
		E.element = E.element || F || null;
		var H = false;
		var D = A.DOM_EVENTS;
		this.DOM_EVENTS = this.DOM_EVENTS || {};
		for (var G in D) {
			if (D.hasOwnProperty(G)) {
				this.DOM_EVENTS[G] = D[G];
			}
		}
		if (typeof E.element === "string") {
			this._setHTMLAttrConfig("id", {value:E.element});
		}
		if (B.get(E.element)) {
			H = true;
			this._initHTMLElement(E);
			this._initContent(E);
		}
		YAHOO.util.Event.onAvailable(E.element, function() {
			if (!H) {
				this._initHTMLElement(E);
			}
			this.fireEvent("available", {type:"available",target:B.get(E.element)});
		}, this, true);
		YAHOO.util.Event.onContentReady(E.element, function() {
			if (!H) {
				this._initContent(E);
			}
			this.fireEvent("contentReady", {type:"contentReady",target:B.get(E.element)});
		}, this, true);
	},_initHTMLElement:function(D) {
		this.setAttributeConfig("element", {value:B.get(D.element),readOnly:true});
	},_initContent:function(D) {
		this.initAttributes(D);
		this.setAttributes(D, true);
		this.fireQueue();
	},_setHTMLAttrConfig:function(D, F) {
		var E = this.get("element");
		F = F || {};
		F.name = D;
		F.setter = F.setter || this.DEFAULT_HTML_SETTER;
		F.getter = F.getter || this.DEFAULT_HTML_GETTER;
		F.value = F.value || E[D];
		this._configs[D] = new YAHOO.util.Attribute(F, this);
	}};
	YAHOO.augment(A, C);
	YAHOO.util.Element = A;
})();
YAHOO.register("element", YAHOO.util.Element, {version:"2.7.0",build:"1799"});
YAHOO.register("utilities", YAHOO, {version: "2.7.0", build: "1799"});

/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 2.7.0
 */
(function() {
	var E = YAHOO.util.Dom,A = YAHOO.util.Event,C = YAHOO.lang;
	var B = function(F, D) {
		var G = {element:F,attributes:D || {}};
		B.superclass.constructor.call(this, G.element, G.attributes);
	};
	B._instances = {};
	B.getResizeById = function(D) {
		if (B._instances[D]) {
			return B._instances[D];
		}
		return false;
	};
	YAHOO.extend(B, YAHOO.util.Element, {CSS_RESIZE:"yui-resize",CSS_DRAG:"yui-draggable",CSS_HOVER:"yui-resize-hover",CSS_PROXY:"yui-resize-proxy",CSS_WRAP:"yui-resize-wrap",CSS_KNOB:"yui-resize-knob",CSS_HIDDEN:"yui-resize-hidden",CSS_HANDLE:"yui-resize-handle",CSS_STATUS:"yui-resize-status",CSS_GHOST:"yui-resize-ghost",CSS_RESIZING:"yui-resize-resizing",_resizeEvent:null,dd:null,browser:YAHOO.env.ua,_locked:null,_positioned:null,_dds:null,_wrap:null,_proxy:null,_handles:null,_currentHandle:null,_currentDD:null,_cache:null,_active:null,_createProxy:function() {
		if (this.get("proxy")) {
			this._proxy = document.createElement("div");
			this._proxy.className = this.CSS_PROXY;
			this._proxy.style.height = this.get("element").clientHeight + "px";
			this._proxy.style.width = this.get("element").clientWidth + "px";
			this._wrap.parentNode.appendChild(this._proxy);
		} else {
			this.set("animate", false);
		}
	},_createWrap:function() {
		this._positioned = false;
		if (this.get("wrap") === false) {
			switch (this.get("element").tagName.toLowerCase()) {
				case"img":
				case"textarea":
				case"input":
				case"iframe":
				case"select":
					this.set("wrap", true);
					break;
			}
		}
		if (this.get("wrap") === true) {
			this._wrap = document.createElement("div");
			this._wrap.id = this.get("element").id + "_wrap";
			this._wrap.className = this.CSS_WRAP;
			if (this.get("element").tagName.toLowerCase() == "textarea") {
				E.addClass(this._wrap, "yui-resize-textarea");
			}
			E.setStyle(this._wrap, "width", this.get("width") + "px");
			E.setStyle(this._wrap, "height", this.get("height") + "px");
			E.setStyle(this._wrap, "z-index", this.getStyle("z-index"));
			this.setStyle("z-index", 0);
			var F = E.getStyle(this.get("element"), "position");
			E.setStyle(this._wrap, "position", ((F == "static") ? "relative" : F));
			E.setStyle(this._wrap, "top", E.getStyle(this.get("element"), "top"));
			E.setStyle(this._wrap, "left", E.getStyle(this.get("element"), "left"));
			if (E.getStyle(this.get("element"), "position") == "absolute") {
				this._positioned = true;
				E.setStyle(this.get("element"), "position", "relative");
				E.setStyle(this.get("element"), "top", "0");
				E.setStyle(this.get("element"), "left", "0");
			}
			var D = this.get("element").parentNode;
			D.replaceChild(this._wrap, this.get("element"));
			this._wrap.appendChild(this.get("element"));
		} else {
			this._wrap = this.get("element");
			if (E.getStyle(this._wrap, "position") == "absolute") {
				this._positioned = true;
			}
		}
		if (this.get("draggable")) {
			this._setupDragDrop();
		}
		if (this.get("hover")) {
			E.addClass(this._wrap, this.CSS_HOVER);
		}
		if (this.get("knobHandles")) {
			E.addClass(this._wrap, this.CSS_KNOB);
		}
		if (this.get("hiddenHandles")) {
			E.addClass(this._wrap, this.CSS_HIDDEN);
		}
		E.addClass(this._wrap, this.CSS_RESIZE);
	},_setupDragDrop:function() {
		E.addClass(this._wrap, this.CSS_DRAG);
		this.dd = new YAHOO.util.DD(this._wrap, this.get("id") + "-resize", {dragOnly:true,useShim:this.get("useShim")});
		this.dd.on("dragEvent", function() {
			this.fireEvent("dragEvent", arguments);
		}, this, true);
	},_createHandles:function() {
		this._handles = {};
		this._dds = {};
		var G = this.get("handles");
		for (var F = 0; F < G.length; F++) {
			this._handles[G[F]] = document.createElement("div");
			this._handles[G[F]].id = E.generateId(this._handles[G[F]]);
			this._handles[G[F]].className = this.CSS_HANDLE + " " + this.CSS_HANDLE + "-" + G[F];
			var D = document.createElement("div");
			D.className = this.CSS_HANDLE + "-inner-" + G[F];
			this._handles[G[F]].appendChild(D);
			this._wrap.appendChild(this._handles[G[F]]);
			A.on(this._handles[G[F]], "mouseover", this._handleMouseOver, this, true);
			A.on(this._handles[G[F]], "mouseout", this._handleMouseOut, this, true);
			this._dds[G[F]] = new YAHOO.util.DragDrop(this._handles[G[F]], this.get("id") + "-handle-" + G, {useShim:this.get("useShim")});
			this._dds[G[F]].setPadding(15, 15, 15, 15);
			this._dds[G[F]].on("startDragEvent", this._handleStartDrag, this._dds[G[F]], this);
			this._dds[G[F]].on("mouseDownEvent", this._handleMouseDown, this._dds[G[F]], this);
		}
		this._status = document.createElement("span");
		this._status.className = this.CSS_STATUS;
		document.body.insertBefore(this._status, document.body.firstChild);
	},_ieSelectFix:function() {
		return false;
	},_ieSelectBack:null,_setAutoRatio:function(D) {
		if (this.get("autoRatio")) {
			if (D && D.shiftKey) {
				this.set("ratio", true);
			} else {
				this.set("ratio", this._configs.ratio._initialConfig.value);
			}
		}
	},_handleMouseDown:function(D) {
		if (this._locked) {
			return false;
		}
		if (E.getStyle(this._wrap, "position") == "absolute") {
			this._positioned = true;
		}
		if (D) {
			this._setAutoRatio(D);
		}
		if (this.browser.ie) {
			this._ieSelectBack = document.body.onselectstart;
			document.body.onselectstart = this._ieSelectFix;
		}
	},_handleMouseOver:function(G) {
		if (this._locked) {
			return false;
		}
		E.removeClass(this._wrap, this.CSS_RESIZE);
		if (this.get("hover")) {
			E.removeClass(this._wrap, this.CSS_HOVER);
		}
		var D = A.getTarget(G);
		if (!E.hasClass(D, this.CSS_HANDLE)) {
			D = D.parentNode;
		}
		if (E.hasClass(D, this.CSS_HANDLE) && !this._active) {
			E.addClass(D, this.CSS_HANDLE + "-active");
			for (var F in this._handles) {
				if (C.hasOwnProperty(this._handles, F)) {
					if (this._handles[F] == D) {
						E.addClass(D, this.CSS_HANDLE + "-" + F + "-active");
						break;
					}
				}
			}
		}
		E.addClass(this._wrap, this.CSS_RESIZE);
	},_handleMouseOut:function(G) {
		E.removeClass(this._wrap, this.CSS_RESIZE);
		if (this.get("hover") && !this._active) {
			E.addClass(this._wrap, this.CSS_HOVER);
		}
		var D = A.getTarget(G);
		if (!E.hasClass(D, this.CSS_HANDLE)) {
			D = D.parentNode;
		}
		if (E.hasClass(D, this.CSS_HANDLE) && !this._active) {
			E.removeClass(D, this.CSS_HANDLE + "-active");
			for (var F in this._handles) {
				if (C.hasOwnProperty(this._handles, F)) {
					if (this._handles[F] == D) {
						E.removeClass(D, this.CSS_HANDLE + "-" + F + "-active");
						break;
					}
				}
			}
		}
		E.addClass(this._wrap, this.CSS_RESIZE);
	},_handleStartDrag:function(G, F) {
		var D = F.getDragEl();
		if (E.hasClass(D, this.CSS_HANDLE)) {
			if (E.getStyle(this._wrap, "position") == "absolute") {
				this._positioned = true;
			}
			this._active = true;
			this._currentDD = F;
			if (this._proxy) {
				this._proxy.style.visibility = "visible";
				this._proxy.style.zIndex = "1000";
				this._proxy.style.height = this.get("element").clientHeight + "px";
				this._proxy.style.width = this.get("element").clientWidth + "px";
			}
			for (var H in this._handles) {
				if (C.hasOwnProperty(this._handles, H)) {
					if (this._handles[H] == D) {
						this._currentHandle = H;
						var I = "_handle_for_" + H;
						E.addClass(D, this.CSS_HANDLE + "-" + H + "-active");
						F.on("dragEvent", this[I], this, true);
						F.on("mouseUpEvent", this._handleMouseUp, this, true);
						break;
					}
				}
			}
			E.addClass(D, this.CSS_HANDLE + "-active");
			if (this.get("proxy")) {
				var J = E.getXY(this.get("element"));
				E.setXY(this._proxy, J);
				if (this.get("ghost")) {
					this.addClass(this.CSS_GHOST);
				}
			}
			E.addClass(this._wrap, this.CSS_RESIZING);
			this._setCache();
			this._updateStatus(this._cache.height, this._cache.width, this._cache.top, this._cache.left);
			this.fireEvent("startResize", {type:"startresize",target:this});
		}
	},_setCache:function() {
		this._cache.xy = E.getXY(this._wrap);
		E.setXY(this._wrap, this._cache.xy);
		this._cache.height = this.get("clientHeight");
		this._cache.width = this.get("clientWidth");
		this._cache.start.height = this._cache.height;
		this._cache.start.width = this._cache.width;
		this._cache.start.top = this._cache.xy[1];
		this._cache.start.left = this._cache.xy[0];
		this._cache.top = this._cache.xy[1];
		this._cache.left = this._cache.xy[0];
		this.set("height", this._cache.height, true);
		this.set("width", this._cache.width, true);
	},_handleMouseUp:function(F) {
		this._active = false;
		var G = "_handle_for_" + this._currentHandle;
		this._currentDD.unsubscribe("dragEvent", this[G], this, true);
		this._currentDD.unsubscribe("mouseUpEvent", this._handleMouseUp, this, true);
		if (this._proxy) {
			this._proxy.style.visibility = "hidden";
			this._proxy.style.zIndex = "-1";
			if (this.get("setSize")) {
				this.resize(F, this._cache.height, this._cache.width, this._cache.top, this._cache.left, true);
			} else {
				this.fireEvent("resize", {ev:"resize",target:this,height:this._cache.height,width:this._cache.width,top:this._cache.top,left:this._cache.left});
			}
			if (this.get("ghost")) {
				this.removeClass(this.CSS_GHOST);
			}
		}
		if (this.get("hover")) {
			E.addClass(this._wrap, this.CSS_HOVER);
		}
		if (this._status) {
			E.setStyle(this._status, "display", "none");
		}
		if (this.browser.ie) {
			document.body.onselectstart = this._ieSelectBack;
		}
		if (this.browser.ie) {
			E.removeClass(this._wrap, this.CSS_RESIZE);
		}
		for (var D in this._handles) {
			if (C.hasOwnProperty(this._handles, D)) {
				E.removeClass(this._handles[D], this.CSS_HANDLE + "-active");
			}
		}
		if (this.get("hover") && !this._active) {
			E.addClass(this._wrap, this.CSS_HOVER);
		}
		E.removeClass(this._wrap, this.CSS_RESIZING);
		E.removeClass(this._handles[this._currentHandle], this.CSS_HANDLE + "-" + this._currentHandle + "-active");
		E.removeClass(this._handles[this._currentHandle], this.CSS_HANDLE + "-active");
		if (this.browser.ie) {
			E.addClass(this._wrap, this.CSS_RESIZE);
		}
		this._resizeEvent = null;
		this._currentHandle = null;
		if (!this.get("animate")) {
			this.set("height", this._cache.height, true);
			this.set("width", this._cache.width, true);
		}
		this.fireEvent("endResize", {ev:"endResize",target:this,height:this._cache.height,width:this._cache.width,top:this._cache.top,left:this._cache.left});
	},_setRatio:function(K, N, Q, I) {
		var O = K,G = N;
		if (this.get("ratio")) {
			var P = this._cache.height,H = this._cache.width,F = parseInt(this.get("height"), 10),L = parseInt(this.get("width"), 10),M = this.get("maxHeight"),R = this.get("minHeight"),D = this.get("maxWidth"),J = this.get("minWidth");
			switch (this._currentHandle) {
				case"l":
					K = F * (N / L);
					K = Math.min(Math.max(R, K), M);
					N = L * (K / F);
					Q = (this._cache.start.top - (-((F - K) / 2)));
					I = (this._cache.start.left - (-((L - N))));
					break;
				case"r":
					K = F * (N / L);
					K = Math.min(Math.max(R, K), M);
					N = L * (K / F);
					Q = (this._cache.start.top - (-((F - K) / 2)));
					break;
				case"t":
					N = L * (K / F);
					K = F * (N / L);
					I = (this._cache.start.left - (-((L - N) / 2)));
					Q = (this._cache.start.top - (-((F - K))));
					break;
				case"b":
					N = L * (K / F);
					K = F * (N / L);
					I = (this._cache.start.left - (-((L - N) / 2)));
					break;
				case"bl":
					K = F * (N / L);
					N = L * (K / F);
					I = (this._cache.start.left - (-((L - N))));
					break;
				case"br":
					K = F * (N / L);
					N = L * (K / F);
					break;
				case"tl":
					K = F * (N / L);
					N = L * (K / F);
					I = (this._cache.start.left - (-((L - N))));
					Q = (this._cache.start.top - (-((F - K))));
					break;
				case"tr":
					K = F * (N / L);
					N = L * (K / F);
					I = (this._cache.start.left);
					Q = (this._cache.start.top - (-((F - K))));
					break;
			}
			O = this._checkHeight(K);
			G = this._checkWidth(N);
			if ((O != K) || (G != N)) {
				Q = 0;
				I = 0;
				if (O != K) {
					G = this._cache.width;
				}
				if (G != N) {
					O = this._cache.height;
				}
			}
		}
		return[O,G,Q,I];
	},_updateStatus:function(K, G, J, F) {
		if (this._resizeEvent && (!C.isString(this._resizeEvent))) {
			K = ((K === 0) ? this._cache.start.height : K);
			G = ((G === 0) ? this._cache.start.width : G);
			var I = parseInt(this.get("height"), 10),D = parseInt(this.get("width"), 10);
			if (isNaN(I)) {
				I = parseInt(K, 10);
			}
			if (isNaN(D)) {
				D = parseInt(G, 10);
			}
			var L = (parseInt(K, 10) - I);
			var H = (parseInt(G, 10) - D);
			this._cache.offsetHeight = L;
			this._cache.offsetWidth = H;
			if (this.get("status")) {
				E.setStyle(this._status, "display", "inline");
				this._status.innerHTML = "<strong>" + parseInt(K, 10) + " x " + parseInt(G, 10) + "</strong><em>" + ((L > 0) ? "+" : "") + L + " x " + ((H > 0) ? "+" : "") + H + "</em>";
				E.setXY(this._status, [A.getPageX(this._resizeEvent) + 12,A.getPageY(this._resizeEvent) + 12]);
			}
		}
	},lock:function(D) {
		this._locked = true;
		if (D && this.dd) {
			E.removeClass(this._wrap, "yui-draggable");
			this.dd.lock();
		}
		return this;
	},unlock:function(D) {
		this._locked = false;
		if (D && this.dd) {
			E.addClass(this._wrap, "yui-draggable");
			this.dd.unlock();
		}
		return this;
	},isLocked:function() {
		return this._locked;
	},reset:function() {
		this.resize(null, this._cache.start.height, this._cache.start.width, this._cache.start.top, this._cache.start.left, true);
		return this;
	},resize:function(M, J, P, Q, H, F, K) {
		if (this._locked) {
			return false;
		}
		this._resizeEvent = M;
		var G = this._wrap,I = this.get("animate"),O = true;
		if (this._proxy && !F) {
			G = this._proxy;
			I = false;
		}
		this._setAutoRatio(M);
		if (this._positioned) {
			if (this._proxy) {
				Q = this._cache.top - Q;
				H = this._cache.left - H;
			}
		}
		var L = this._setRatio(J, P, Q, H);
		J = parseInt(L[0], 10);
		P = parseInt(L[1], 10);
		Q = parseInt(L[2], 10);
		H = parseInt(L[3], 10);
		if (Q == 0) {
			Q = E.getY(G);
		}
		if (H == 0) {
			H = E.getX(G);
		}
		if (this._positioned) {
			if (this._proxy && F) {
				if (!I) {
					G.style.top = this._proxy.style.top;
					G.style.left = this._proxy.style.left;
				} else {
					Q = this._proxy.style.top;
					H = this._proxy.style.left;
				}
			} else {
				if (!this.get("ratio") && !this._proxy) {
					Q = this._cache.top + -(Q);
					H = this._cache.left + -(H);
				}
				if (Q) {
					if (this.get("minY")) {
						if (Q < this.get("minY")) {
							Q = this.get("minY");
						}
					}
					if (this.get("maxY")) {
						if (Q > this.get("maxY")) {
							Q = this.get("maxY");
						}
					}
				}
				if (H) {
					if (this.get("minX")) {
						if (H < this.get("minX")) {
							H = this.get("minX");
						}
					}
					if (this.get("maxX")) {
						if ((H + P) > this.get("maxX")) {
							H = (this.get("maxX") - P);
						}
					}
				}
			}
		}
		if (!K) {
			var N = this.fireEvent("beforeResize", {ev:"beforeResize",target:this,height:J,width:P,top:Q,left:H});
			if (N === false) {
				return false;
			}
		}
		this._updateStatus(J, P, Q, H);
		if (this._positioned) {
			if (this._proxy && F) {
			} else {
				if (Q) {
					E.setY(G, Q);
					this._cache.top = Q;
				}
				if (H) {
					E.setX(G, H);
					this._cache.left = H;
				}
			}
		}
		if (J) {
			if (!I) {
				O = true;
				if (this._proxy && F) {
					if (!this.get("setSize")) {
						O = false;
					}
				}
				if (O) {
					G.style.height = J + "px";
				}
				if ((this._proxy && F) || !this._proxy) {
					if (this._wrap != this.get("element")) {
						this.get("element").style.height = J + "px";
					}
				}
			}
			this._cache.height = J;
		}
		if (P) {
			this._cache.width = P;
			if (!I) {
				O = true;
				if (this._proxy && F) {
					if (!this.get("setSize")) {
						O = false;
					}
				}
				if (O) {
					G.style.width = P + "px";
				}
				if ((this._proxy && F) || !this._proxy) {
					if (this._wrap != this.get("element")) {
						this.get("element").style.width = P + "px";
					}
				}
			}
		}
		if (I) {
			if (YAHOO.util.Anim) {
				var D = new YAHOO.util.Anim(G, {height:{to:this._cache.height},width:{to:this._cache.width}}, this.get("animateDuration"), this.get("animateEasing"));
				if (this._positioned) {
					if (Q) {
						D.attributes.top = {to:parseInt(Q, 10)};
					}
					if (H) {
						D.attributes.left = {to:parseInt(H, 10)};
					}
				}
				if (this._wrap != this.get("element")) {
					D.onTween.subscribe(function() {
						this.get("element").style.height = G.style.height;
						this.get("element").style.width = G.style.width;
					}, this, true);
				}
				D.onComplete.subscribe(function() {
					this.set("height", J);
					this.set("width", P);
					this.fireEvent("resize", {ev:"resize",target:this,height:J,width:P,top:Q,left:H});
				}, this, true);
				D.animate();
			}
		} else {
			if (this._proxy && !F) {
				this.fireEvent("proxyResize", {ev:"proxyresize",target:this,height:J,width:P,top:Q,left:H});
			} else {
				this.fireEvent("resize", {ev:"resize",target:this,height:J,width:P,top:Q,left:H});
			}
		}
		return this;
	},_handle_for_br:function(F) {
		var G = this._setWidth(F.e);
		var D = this._setHeight(F.e);
		this.resize(F.e, D, G, 0, 0);
	},_handle_for_bl:function(G) {
		var H = this._setWidth(G.e, true);
		var F = this._setHeight(G.e);
		var D = (H - this._cache.width);
		this.resize(G.e, F, H, 0, D);
	},_handle_for_tl:function(G) {
		var I = this._setWidth(G.e, true);
		var F = this._setHeight(G.e, true);
		var H = (F - this._cache.height);
		var D = (I - this._cache.width);
		this.resize(G.e, F, I, H, D);
	},_handle_for_tr:function(F) {
		var H = this._setWidth(F.e);
		var D = this._setHeight(F.e, true);
		var G = (D - this._cache.height);
		this.resize(F.e, D, H, G, 0);
	},_handle_for_r:function(D) {
		this._dds.r.setYConstraint(0, 0);
		var F = this._setWidth(D.e);
		this.resize(D.e, 0, F, 0, 0);
	},_handle_for_l:function(F) {
		this._dds.l.setYConstraint(0, 0);
		var G = this._setWidth(F.e, true);
		var D = (G - this._cache.width);
		this.resize(F.e, 0, G, 0, D);
	},_handle_for_b:function(F) {
		this._dds.b.setXConstraint(0, 0);
		var D = this._setHeight(F.e);
		this.resize(F.e, D, 0, 0, 0);
	},_handle_for_t:function(F) {
		this._dds.t.setXConstraint(0, 0);
		var D = this._setHeight(F.e, true);
		var G = (D - this._cache.height);
		this.resize(F.e, D, 0, G, 0);
	},_setWidth:function(H, J) {
		var I = this._cache.xy[0],G = this._cache.width,D = A.getPageX(H),F = (D - I);
		if (J) {
			F = (I - D) + parseInt(this.get("width"), 10);
		}
		F = this._snapTick(F, this.get("xTicks"));
		F = this._checkWidth(F);
		return F;
	},_checkWidth:function(D) {
		if (this.get("minWidth")) {
			if (D <= this.get("minWidth")) {
				D = this.get("minWidth");
			}
		}
		if (this.get("maxWidth")) {
			if (D >= this.get("maxWidth")) {
				D = this.get("maxWidth");
			}
		}
		return D;
	},_checkHeight:function(D) {
		if (this.get("minHeight")) {
			if (D <= this.get("minHeight")) {
				D = this.get("minHeight");
			}
		}
		if (this.get("maxHeight")) {
			if (D >= this.get("maxHeight")) {
				D = this.get("maxHeight");
			}
		}
		return D;
	},_setHeight:function(G, I) {
		var H = this._cache.xy[1],F = this._cache.height,J = A.getPageY(G),D = (J - H);
		if (I) {
			D = (H - J) + parseInt(this.get("height"), 10);
		}
		D = this._snapTick(D, this.get("yTicks"));
		D = this._checkHeight(D);
		return D;
	},_snapTick:function(G, F) {
		if (!G || !F) {
			return G;
		}
		var H = G;
		var D = G % F;
		if (D > 0) {
			if (D > (F / 2)) {
				H = G + (F - D);
			} else {
				H = G - D;
			}
		}
		return H;
	},init:function(H, F) {
		this._locked = false;
		this._cache = {xy:[],height:0,width:0,top:0,left:0,offsetHeight:0,offsetWidth:0,start:{height:0,width:0,top:0,left:0}};
		B.superclass.init.call(this, H, F);
		this.set("setSize", this.get("setSize"));
		if (F.height) {
			this.set("height", parseInt(F.height, 10));
		} else {
			var G = this.getStyle("height");
			if (G == "auto") {
				this.set("height", parseInt(this.get("element").offsetHeight, 10));
			}
		}
		if (F.width) {
			this.set("width", parseInt(F.width, 10));
		} else {
			var D = this.getStyle("width");
			if (D == "auto") {
				this.set("width", parseInt(this.get("element").offsetWidth, 10));
			}
		}
		var I = H;
		if (!C.isString(I)) {
			I = E.generateId(I);
		}
		B._instances[I] = this;
		this._active = false;
		this._createWrap();
		this._createProxy();
		this._createHandles();
	},getProxyEl:function() {
		return this._proxy;
	},getWrapEl:function() {
		return this._wrap;
	},getStatusEl:function() {
		return this._status;
	},getActiveHandleEl:function() {
		return this._handles[this._currentHandle];
	},isActive:function() {
		return((this._active) ? true : false);
	},initAttributes:function(D) {
		B.superclass.initAttributes.call(this, D);
		this.setAttributeConfig("useShim", {value:((D.useShim === true) ? true : false),validator:YAHOO.lang.isBoolean,method:function(F) {
			for (var G in this._dds) {
				if (C.hasOwnProperty(this._dds, G)) {
					this._dds[G].useShim = F;
				}
			}
			if (this.dd) {
				this.dd.useShim = F;
			}
		}});
		this.setAttributeConfig("setSize", {value:((D.setSize === false) ? false : true),validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("wrap", {writeOnce:true,validator:YAHOO.lang.isBoolean,value:D.wrap || false});
		this.setAttributeConfig("handles", {writeOnce:true,value:D.handles || ["r","b","br"],validator:function(F) {
			if (C.isString(F) && F.toLowerCase() == "all") {
				F = ["t","b","r","l","bl","br","tl","tr"];
			}
			if (!C.isArray(F)) {
				F = F.replace(/, /g, ",");
				F = F.split(",");
			}
			this._configs.handles.value = F;
		}});
		this.setAttributeConfig("width", {value:D.width || parseInt(this.getStyle("width"), 10),validator:YAHOO.lang.isNumber,method:function(F) {
			F = parseInt(F, 10);
			if (F > 0) {
				if (this.get("setSize")) {
					this.setStyle("width", F + "px");
				}
				this._cache.width = F;
				this._configs.width.value = F;
			}
		}});
		this.setAttributeConfig("height", {value:D.height || parseInt(this.getStyle("height"), 10),validator:YAHOO.lang.isNumber,method:function(F) {
			F = parseInt(F, 10);
			if (F > 0) {
				if (this.get("setSize")) {
					this.setStyle("height", F + "px");
				}
				this._cache.height = F;
				this._configs.height.value = F;
			}
		}});
		this.setAttributeConfig("minWidth", {value:D.minWidth || 15,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("minHeight", {value:D.minHeight || 15,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("maxWidth", {value:D.maxWidth || 10000,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("maxHeight", {value:D.maxHeight || 10000,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("minY", {value:D.minY || false});
		this.setAttributeConfig("minX", {value:D.minX || false});
		this.setAttributeConfig("maxY", {value:D.maxY || false});
		this.setAttributeConfig("maxX", {value:D.maxX || false});
		this.setAttributeConfig("animate", {value:D.animate || false,validator:function(G) {
			var F = true;
			if (!YAHOO.util.Anim) {
				F = false;
			}
			return F;
		}});
		this.setAttributeConfig("animateEasing", {value:D.animateEasing || function() {
			var F = false;
			if (YAHOO.util.Easing && YAHOO.util.Easing.easeOut) {
				F = YAHOO.util.Easing.easeOut;
			}
			return F;
		}()});
		this.setAttributeConfig("animateDuration", {value:D.animateDuration || 0.5});
		this.setAttributeConfig("proxy", {value:D.proxy || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("ratio", {value:D.ratio || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("ghost", {value:D.ghost || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("draggable", {value:D.draggable || false,validator:YAHOO.lang.isBoolean,method:function(F) {
			if (F && this._wrap) {
				this._setupDragDrop();
			} else {
				if (this.dd) {
					E.removeClass(this._wrap, this.CSS_DRAG);
					this.dd.unreg();
				}
			}
		}});
		this.setAttributeConfig("hover", {value:D.hover || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("hiddenHandles", {value:D.hiddenHandles || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("knobHandles", {value:D.knobHandles || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("xTicks", {value:D.xTicks || false});
		this.setAttributeConfig("yTicks", {value:D.yTicks || false});
		this.setAttributeConfig("status", {value:D.status || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("autoRatio", {value:D.autoRatio || false,validator:YAHOO.lang.isBoolean});
	},destroy:function() {
		for (var F in this._handles) {
			if (C.hasOwnProperty(this._handles, F)) {
				A.purgeElement(this._handles[F]);
				this._handles[F].parentNode.removeChild(this._handles[F]);
			}
		}
		if (this._proxy) {
			this._proxy.parentNode.removeChild(this._proxy);
		}
		if (this._status) {
			this._status.parentNode.removeChild(this._status);
		}
		if (this.dd) {
			this.dd.unreg();
			E.removeClass(this._wrap, this.CSS_DRAG);
		}
		if (this._wrap != this.get("element")) {
			this.setStyle("position", "");
			this.setStyle("top", "");
			this.setStyle("left", "");
			this._wrap.parentNode.replaceChild(this.get("element"), this._wrap);
		}
		this.removeClass(this.CSS_RESIZE);
		delete YAHOO.util.Resize._instances[this.get("id")];
		for (var D in this) {
			if (C.hasOwnProperty(this, D)) {
				this[D] = null;
				delete this[D];
			}
		}
	},toString:function() {
		if (this.get) {
			return"Resize (#" + this.get("id") + ")";
		}
		return"Resize Utility";
	}});
	YAHOO.util.Resize = B;
})();
YAHOO.register("resize", YAHOO.util.Resize, {version:"2.7.0",build:"1799"});
/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 2.7.0
 */
(function() {
	var C = YAHOO.util.Dom,A = YAHOO.util.Event,D = YAHOO.lang;
	var B = function(F, E) {
		if (D.isObject(F) && !F.tagName) {
			E = F;
			F = null;
		}
		if (D.isString(F)) {
			if (C.get(F)) {
				F = C.get(F);
			}
		}
		if (!F) {
			F = document.body;
		}
		var G = {element:F,attributes:E || {}};
		B.superclass.constructor.call(this, G.element, G.attributes);
	};
	B._instances = {};
	B.getLayoutById = function(E) {
		if (B._instances[E]) {
			return B._instances[E];
		}
		return false;
	};
	YAHOO.extend(B, YAHOO.util.Element, {browser:function() {
		var E = YAHOO.env.ua;
		E.standardsMode = false;
		E.secure = false;
		return E;
	}(),_units:null,_rendered:null,_zIndex:null,_sizes:null,_setBodySize:function(G) {
		var F = 0,E = 0;
		G = ((G === false) ? false : true);
		if (this._isBody) {
			F = C.getClientHeight();
			E = C.getClientWidth();
		} else {
			F = parseInt(this.getStyle("height"), 10);
			E = parseInt(this.getStyle("width"), 10);
			if (isNaN(E)) {
				E = this.get("element").clientWidth;
			}
			if (isNaN(F)) {
				F = this.get("element").clientHeight;
			}
		}
		if (this.get("minWidth")) {
			if (E < this.get("minWidth")) {
				E = this.get("minWidth");
			}
		}
		if (this.get("minHeight")) {
			if (F < this.get("minHeight")) {
				F = this.get("minHeight");
			}
		}
		if (G) {
			C.setStyle(this._doc, "height", F + "px");
			C.setStyle(this._doc, "width", E + "px");
		}
		this._sizes.doc = {h:F,w:E};
		this._setSides(G);
	},_setSides:function(J) {
		var H = ((this._units.top) ? this._units.top.get("height") : 0),G = ((this._units.bottom) ? this._units.bottom.get("height") : 0),I = this._sizes.doc.h,E = this._sizes.doc.w;
		J = ((J === false) ? false : true);
		this._sizes.top = {h:H,w:((this._units.top) ? E : 0),t:0};
		this._sizes.bottom = {h:G,w:((this._units.bottom) ? E : 0)};
		var F = (I - (H + G));
		this._sizes.left = {h:F,w:((this._units.left) ? this._units.left.get("width") : 0)};
		this._sizes.right = {h:F,w:((this._units.right) ? this._units.right.get("width") : 0),l:((this._units.right) ? (E - this._units.right.get("width")) : 0),t:((this._units.top) ? this._sizes.top.h : 0)};
		if (this._units.right && J) {
			this._units.right.set("top", this._sizes.right.t);
			if (!this._units.right._collapsing) {
				this._units.right.set("left", this._sizes.right.l);
			}
			this._units.right.set("height", this._sizes.right.h, true);
		}
		if (this._units.left) {
			this._sizes.left.l = 0;
			if (this._units.top) {
				this._sizes.left.t = this._sizes.top.h;
			} else {
				this._sizes.left.t = 0;
			}
			if (J) {
				this._units.left.set("top", this._sizes.left.t);
				this._units.left.set("height", this._sizes.left.h, true);
				this._units.left.set("left", 0);
			}
		}
		if (this._units.bottom) {
			this._sizes.bottom.t = this._sizes.top.h + this._sizes.left.h;
			if (J) {
				this._units.bottom.set("top", this._sizes.bottom.t);
				this._units.bottom.set("width", this._sizes.bottom.w, true);
			}
		}
		if (this._units.top) {
			if (J) {
				this._units.top.set("width", this._sizes.top.w, true);
			}
		}
		this._setCenter(J);
	},_setCenter:function(G) {
		G = ((G === false) ? false : true);
		var F = this._sizes.left.h;
		var E = (this._sizes.doc.w - (this._sizes.left.w + this._sizes.right.w));
		if (G) {
			this._units.center.set("height", F, true);
			this._units.center.set("width", E, true);
			this._units.center.set("top", this._sizes.top.h);
			this._units.center.set("left", this._sizes.left.w);
		}
		this._sizes.center = {h:F,w:E,t:this._sizes.top.h,l:this._sizes.left.w};
	},getSizes:function() {
		return this._sizes;
	},getUnitById:function(E) {
		return YAHOO.widget.LayoutUnit.getLayoutUnitById(E);
	},getUnitByPosition:function(E) {
		if (E) {
			E = E.toLowerCase();
			if (this._units[E]) {
				return this._units[E];
			}
			return false;
		}
		return false;
	},removeUnit:function(E) {
		delete this._units[E.get("position")];
		this.resize();
	},addUnit:function(G) {
		if (!G.position) {
			return false;
		}
		if (this._units[G.position]) {
			return false;
		}
		var H = null,J = null;
		if (G.id) {
			if (C.get(G.id)) {
				H = C.get(G.id);
				delete G.id;
			}
		}
		if (G.element) {
			H = G.element;
		}
		if (!J) {
			J = document.createElement("div");
			var L = C.generateId();
			J.id = L;
		}
		if (!H) {
			H = document.createElement("div");
		}
		C.addClass(H, "yui-layout-wrap");
		if (this.browser.ie && !this.browser.standardsMode) {
			J.style.zoom = 1;
			H.style.zoom = 1;
		}
		if (J.firstChild) {
			J.insertBefore(H, J.firstChild);
		} else {
			J.appendChild(H);
		}
		this._doc.appendChild(J);
		var I = false,F = false;
		if (G.height) {
			I = parseInt(G.height, 10);
		}
		if (G.width) {
			F = parseInt(G.width, 10);
		}
		var E = {};
		YAHOO.lang.augmentObject(E, G);
		E.parent = this;
		E.wrap = H;
		E.height = I;
		E.width = F;
		var K = new YAHOO.widget.LayoutUnit(J, E);
		K.on("heightChange", this.resize, this, true);
		K.on("widthChange", this.resize, this, true);
		K.on("gutterChange", this.resize, this, true);
		this._units[G.position] = K;
		if (this._rendered) {
			this.resize();
		}
		return K;
	},_createUnits:function() {
		var E = this.get("units");
		for (var F in E) {
			if (D.hasOwnProperty(E, F)) {
				this.addUnit(E[F]);
			}
		}
	},resize:function(F) {
		F = ((F === false) ? false : true);
		if (F) {
			var E = this.fireEvent("beforeResize");
			if (E === false) {
				F = false;
			}
			if (this.browser.ie) {
				if (this._isBody) {
					C.removeClass(document.documentElement, "yui-layout");
					C.addClass(document.documentElement, "yui-layout");
				} else {
					this.removeClass("yui-layout");
					this.addClass("yui-layout");
				}
			}
		}
		this._setBodySize(F);
		if (F) {
			this.fireEvent("resize", {target:this,sizes:this._sizes});
		}
		return this;
	},_setupBodyElements:function() {
		this._doc = C.get("layout-doc");
		if (!this._doc) {
			this._doc = document.createElement("div");
			this._doc.id = "layout-doc";
			if (document.body.firstChild) {
				document.body.insertBefore(this._doc, document.body.firstChild);
			} else {
				document.body.appendChild(this._doc);
			}
		}
		this._createUnits();
		this._setBodySize();
		A.on(window, "resize", this.resize, this, true);
		C.addClass(this._doc, "yui-layout-doc");
	},_setupElements:function() {
		this._doc = this.getElementsByClassName("yui-layout-doc")[0];
		if (!this._doc) {
			this._doc = document.createElement("div");
			this.get("element").appendChild(this._doc);
		}
		this._createUnits();
		this._setBodySize();
		C.addClass(this._doc, "yui-layout-doc");
	},_isBody:null,_doc:null,init:function(F, E) {
		this._zIndex = 0;
		B.superclass.init.call(this, F, E);
		if (this.get("parent")) {
			this._zIndex = this.get("parent")._zIndex + 10;
		}
		this._sizes = {};
		this._units = {};
		var G = F;
		if (!D.isString(G)) {
			G = C.generateId(G);
		}
		B._instances[G] = this;
	},render:function() {
		this._stamp();
		var E = this.get("element");
		if (E && E.tagName && (E.tagName.toLowerCase() == "body")) {
			this._isBody = true;
			C.addClass(document.body, "yui-layout");
			if (C.hasClass(document.body, "yui-skin-sam")) {
				C.addClass(document.documentElement, "yui-skin-sam");
				C.removeClass(document.body, "yui-skin-sam");
			}
			this._setupBodyElements();
		} else {
			this._isBody = false;
			this.addClass("yui-layout");
			this._setupElements();
		}
		this.resize();
		this._rendered = true;
		this.fireEvent("render");
		return this;
	},_stamp:function() {
		if (document.compatMode == "CSS1Compat") {
			this.browser.standardsMode = true;
		}
		if (window.location.href.toLowerCase().indexOf("https") === 0) {
			C.addClass(document.documentElement, "secure");
			this.browser.secure = true;
		}
	},initAttributes:function(E) {
		B.superclass.initAttributes.call(this, E);
		this.setAttributeConfig("units", {writeOnce:true,validator:YAHOO.lang.isArray,value:E.units || []});
		this.setAttributeConfig("minHeight", {value:E.minHeight || false,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("minWidth", {value:E.minWidth || false,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("height", {value:E.height || false,validator:YAHOO.lang.isNumber,method:function(F) {
			this.setStyle("height", F + "px");
		}});
		this.setAttributeConfig("width", {value:E.width || false,validator:YAHOO.lang.isNumber,method:function(F) {
			this.setStyle("width", F + "px");
		}});
		this.setAttributeConfig("parent", {writeOnce:true,value:E.parent || false,method:function(F) {
			if (F) {
				F.on("resize", this.resize, this, true);
			}
		}});
	},destroy:function() {
		var G = this.get("parent");
		if (G) {
			G.removeListener("resize", this.resize, this, true);
		}
		A.removeListener(window, "resize", this.resize, this, true);
		this.unsubscribeAll();
		for (var E in this._units) {
			if (D.hasOwnProperty(this._units, E)) {
				if (this._units[E]) {
					this._units[E].destroy(true);
				}
			}
		}
		A.purgeElement(this.get("element"));
		this.get("parentNode").removeChild(this.get("element"));
		delete YAHOO.widget.Layout._instances[this.get("id")];
		for (var F in this) {
			if (D.hasOwnProperty(this, F)) {
				this[F] = null;
				delete this[F];
			}
		}
		if (G) {
			G.resize();
		}
	},toString:function() {
		if (this.get) {
			return"Layout #" + this.get("id");
		}
		return"Layout";
	}});
	YAHOO.widget.Layout = B;
})();
(function() {
	var D = YAHOO.util.Dom,C = YAHOO.util.Selector,A = YAHOO.util.Event,E = YAHOO.lang;
	var B = function(G, F) {
		var H = {element:G,attributes:F || {}};
		B.superclass.constructor.call(this, H.element, H.attributes);
	};
	B._instances = {};
	B.getLayoutUnitById = function(F) {
		if (B._instances[F]) {
			return B._instances[F];
		}
		return false;
	};
	YAHOO.extend(B, YAHOO.util.Element, {STR_CLOSE:"Click to close this pane.",STR_COLLAPSE:"Click to collapse this pane.",STR_EXPAND:"Click to expand this pane.",LOADING_CLASSNAME:"loading",browser:null,_sizes:null,_anim:null,_resize:null,_clip:null,_gutter:null,header:null,body:null,footer:null,_collapsed:null,_collapsing:null,_lastWidth:null,_lastHeight:null,_lastTop:null,_lastLeft:null,_lastScroll:null,_lastCenterScroll:null,_lastScrollTop:null,resize:function(F) {
		var G = this.fireEvent("beforeResize");
		if (G === false) {
			return this;
		}
		if (!this._collapsing || (F === true)) {
			var N = this.get("scroll");
			this.set("scroll", false);
			var K = this._getBoxSize(this.header),J = this._getBoxSize(this.footer),L = [this.get("height"),this.get("width")];
			var H = (L[0] - K[0] - J[0]) - (this._gutter.top + this._gutter.bottom),M = L[1] - (this._gutter.left + this._gutter.right);
			var O = (H + (K[0] + J[0])),I = M;
			if (this._collapsed && !this._collapsing) {
				this._setHeight(this._clip, O);
				this._setWidth(this._clip, I);
				D.setStyle(this._clip, "top", this.get("top") + this._gutter.top + "px");
				D.setStyle(this._clip, "left", this.get("left") + this._gutter.left + "px");
			} else {
				if (!this._collapsed || (this._collapsed && this._collapsing)) {
					O = this._setHeight(this.get("wrap"), O);
					I = this._setWidth(this.get("wrap"), I);
					this._sizes.wrap.h = O;
					this._sizes.wrap.w = I;
					D.setStyle(this.get("wrap"), "top", this._gutter.top + "px");
					D.setStyle(this.get("wrap"), "left", this._gutter.left + "px");
					this._sizes.header.w = this._setWidth(this.header, I);
					this._sizes.header.h = K[0];
					this._sizes.footer.w = this._setWidth(this.footer, I);
					this._sizes.footer.h = J[0];
					D.setStyle(this.footer, "bottom", "0px");
					this._sizes.body.h = this._setHeight(this.body, (O - (K[0] + J[0])));
					this._sizes.body.w = this._setWidth(this.body, I);
					D.setStyle(this.body, "top", K[0] + "px");
					this.set("scroll", N);
					this.fireEvent("resize");
				}
			}
		}
		return this;
	},_setWidth:function(H, G) {
		if (H) {
			var F = this._getBorderSizes(H);
			G = (G - (F[1] + F[3]));
			G = this._fixQuirks(H, G, "w");
			if (G < 0) {
				G = 0;
			}
			D.setStyle(H, "width", G + "px");
		}
		return G;
	},_setHeight:function(H, G) {
		if (H) {
			var F = this._getBorderSizes(H);
			G = (G - (F[0] + F[2]));
			G = this._fixQuirks(H, G, "h");
			if (G < 0) {
				G = 0;
			}
			D.setStyle(H, "height", G + "px");
		}
		return G;
	},_fixQuirks:function(I, L, G) {
		var K = 0,H = 2;
		if (G == "w") {
			K = 1;
			H = 3;
		}
		if (this.browser.ie && !this.browser.standardsMode) {
			var F = this._getBorderSizes(I),J = this._getBorderSizes(I.parentNode);
			if ((F[K] === 0) && (F[H] === 0)) {
				if ((J[K] !== 0) && (J[H] !== 0)) {
					L = (L - (J[K] + J[H]));
				}
			} else {
				if ((J[K] === 0) && (J[H] === 0)) {
					L = (L + (F[K] + F[H]));
				}
			}
		}
		return L;
	},_getBoxSize:function(H) {
		var G = [0,0];
		if (H) {
			if (this.browser.ie && !this.browser.standardsMode) {
				H.style.zoom = 1;
			}
			var F = this._getBorderSizes(H);
			G[0] = H.clientHeight + (F[0] + F[2]);
			G[1] = H.clientWidth + (F[1] + F[3]);
		}
		return G;
	},_getBorderSizes:function(H) {
		var G = [];
		H = H || this.get("element");
		if (this.browser.ie && !this.browser.standardsMode) {
			H.style.zoom = 1;
		}
		G[0] = parseInt(D.getStyle(H, "borderTopWidth"), 10);
		G[1] = parseInt(D.getStyle(H, "borderRightWidth"), 10);
		G[2] = parseInt(D.getStyle(H, "borderBottomWidth"), 10);
		G[3] = parseInt(D.getStyle(H, "borderLeftWidth"), 10);
		for (var F = 0; F < G.length; F++) {
			if (isNaN(G[F])) {
				G[F] = 0;
			}
		}
		return G;
	},_createClip:function() {
		if (!this._clip) {
			this._clip = document.createElement("div");
			this._clip.className = "yui-layout-clip yui-layout-clip-" + this.get("position");
			this._clip.innerHTML = '<div class="collapse"></div>';
			var F = this._clip.firstChild;
			F.title = this.STR_EXPAND;
			A.on(F, "click", this.expand, this, true);
			this.get("element").parentNode.appendChild(this._clip);
		}
	},_toggleClip:function() {
		if (!this._collapsed) {
			var J = this._getBoxSize(this.header),K = this._getBoxSize(this.footer),I = [this.get("height"),this.get("width")];
			var H = (I[0] - J[0] - K[0]) - (this._gutter.top + this._gutter.bottom),F = I[1] - (this._gutter.left + this._gutter.right),G = (H + (J[0] + K[0]));
			switch (this.get("position")) {
				case"top":
				case"bottom":
					this._setWidth(this._clip, F);
					this._setHeight(this._clip, this.get("collapseSize"));
					D.setStyle(this._clip, "left", (this._lastLeft + this._gutter.left) + "px");
					if (this.get("position") == "bottom") {
						D.setStyle(this._clip, "top", ((this._lastTop + this._lastHeight) - (this.get("collapseSize") - this._gutter.top)) + "px");
					} else {
						D.setStyle(this._clip, "top", this.get("top") + this._gutter.top + "px");
					}
					break;
				case"left":
				case"right":
					this._setWidth(this._clip, this.get("collapseSize"));
					this._setHeight(this._clip, G);
					D.setStyle(this._clip, "top", (this.get("top") + this._gutter.top) + "px");
					if (this.get("position") == "right") {
						D.setStyle(this._clip, "left", (((this._lastLeft + this._lastWidth) - this.get("collapseSize")) - this._gutter.left) + "px");
					} else {
						D.setStyle(this._clip, "left", (this.get("left") + this._gutter.left) + "px");
					}
					break;
			}
			D.setStyle(this._clip, "display", "block");
			this.setStyle("display", "none");
		} else {
			D.setStyle(this._clip, "display", "none");
		}
	},getSizes:function() {
		return this._sizes;
	},toggle:function() {
		if (this._collapsed) {
			this.expand();
		} else {
			this.collapse();
		}
		return this;
	},expand:function() {
		if (!this._collapsed) {
			return this;
		}
		var L = this.fireEvent("beforeExpand");
		if (L === false) {
			return this;
		}
		this._collapsing = true;
		this.setStyle("zIndex", this.get("parent")._zIndex + 1);
		if (this._anim) {
			this.setStyle("display", "none");
			var F = {},H;
			switch (this.get("position")) {
				case"left":
				case"right":
					this.set("width", this._lastWidth, true);
					this.setStyle("width", this._lastWidth + "px");
					this.get("parent").resize(false);
					H = this.get("parent").getSizes()[this.get("position")];
					this.set("height", H.h, true);
					var K = H.l;
					F = {left:{to:K}};
					if (this.get("position") == "left") {
						F.left.from = (K - H.w);
						this.setStyle("left", (K - H.w) + "px");
					}
					break;
				case"top":
				case"bottom":
					this.set("height", this._lastHeight, true);
					this.setStyle("height", this._lastHeight + "px");
					this.get("parent").resize(false);
					H = this.get("parent").getSizes()[this.get("position")];
					this.set("width", H.w, true);
					var J = H.t;
					F = {top:{to:J}};
					if (this.get("position") == "top") {
						this.setStyle("top", (J - H.h) + "px");
						F.top.from = (J - H.h);
					}
					break;
			}
			this._anim.attributes = F;
			var I = function() {
				this.setStyle("display", "block");
				this.resize(true);
				this._anim.onStart.unsubscribe(I, this, true);
			};
			var G = function() {
				this._collapsing = false;
				this.setStyle("zIndex", this.get("parent")._zIndex);
				this.set("width", this._lastWidth);
				this.set("height", this._lastHeight);
				this._collapsed = false;
				this.resize();
				this.set("scroll", this._lastScroll);
				if (this._lastScrollTop > 0) {
					this.body.scrollTop = this._lastScrollTop;
				}
				this._anim.onComplete.unsubscribe(G, this, true);
				this.fireEvent("expand");
			};
			this._anim.onStart.subscribe(I, this, true);
			this._anim.onComplete.subscribe(G, this, true);
			this._anim.animate();
			this._toggleClip();
		} else {
			this._collapsing = false;
			this._toggleClip();
			this._collapsed = false;
			this.setStyle("zIndex", this.get("parent")._zIndex);
			this.setStyle("display", "block");
			this.set("width", this._lastWidth);
			this.set("height", this._lastHeight);
			this.resize();
			this.set("scroll", this._lastScroll);
			if (this._lastScrollTop > 0) {
				this.body.scrollTop = this._lastScrollTop;
			}
			this.fireEvent("expand");
		}
		return this;
	},collapse:function() {
		if (this._collapsed) {
			return this;
		}
		var J = this.fireEvent("beforeCollapse");
		if (J === false) {
			return this;
		}
		if (!this._clip) {
			this._createClip();
		}
		this._collapsing = true;
		var G = this.get("width"),H = this.get("height"),F = {};
		this._lastWidth = G;
		this._lastHeight = H;
		this._lastScroll = this.get("scroll");
		this._lastScrollTop = this.body.scrollTop;
		this.set("scroll", false, true);
		this._lastLeft = parseInt(this.get("element").style.left, 10);
		this._lastTop = parseInt(this.get("element").style.top, 10);
		if (isNaN(this._lastTop)) {
			this._lastTop = 0;
			this.set("top", 0);
		}
		if (isNaN(this._lastLeft)) {
			this._lastLeft = 0;
			this.set("left", 0);
		}
		this.setStyle("zIndex", this.get("parent")._zIndex + 1);
		var K = this.get("position");
		switch (K) {
			case"top":
			case"bottom":
				this.set("height", (this.get("collapseSize") + (this._gutter.top + this._gutter.bottom)));
				F = {top:{to:(this.get("top") - H)}};
				if (K == "bottom") {
					F.top.to = (this.get("top") + H);
				}
				break;
			case"left":
			case"right":
				this.set("width", (this.get("collapseSize") + (this._gutter.left + this._gutter.right)));
				F = {left:{to:-(this._lastWidth)}};
				if (K == "right") {
					F.left = {to:(this.get("left") + G)};
				}
				break;
		}
		if (this._anim) {
			this._anim.attributes = F;
			var I = function() {
				this._collapsing = false;
				this._toggleClip();
				this.setStyle("zIndex", this.get("parent")._zIndex);
				this._collapsed = true;
				this.get("parent").resize();
				this._anim.onComplete.unsubscribe(I, this, true);
				this.fireEvent("collapse");
			};
			this._anim.onComplete.subscribe(I, this, true);
			this._anim.animate();
		} else {
			this._collapsing = false;
			this.setStyle("display", "none");
			this._toggleClip();
			this.setStyle("zIndex", this.get("parent")._zIndex);
			this.get("parent").resize();
			this._collapsed = true;
			this.fireEvent("collapse");
		}
		return this;
	},close:function() {
		this.setStyle("display", "none");
		this.get("parent").removeUnit(this);
		this.fireEvent("close");
		if (this._clip) {
			this._clip.parentNode.removeChild(this._clip);
			this._clip = null;
		}
		return this.get("parent");
	},loadHandler:{success:function(F) {
		this.body.innerHTML = F.responseText;
		this.resize(true);
	},failure:function(F) {
	}},dataConnection:null,_loading:false,loadContent:function() {
		if (YAHOO.util.Connect && this.get("dataSrc") && !this._loading && !this.get("dataLoaded")) {
			this._loading = true;
			D.addClass(this.body, this.LOADING_CLASSNAME);
			this.dataConnection = YAHOO.util.Connect.asyncRequest(this.get("loadMethod"), this.get("dataSrc"), {success:function(F) {
				this.loadHandler.success.call(this, F);
				this.set("dataLoaded", true);
				this.dataConnection = null;
				D.removeClass(this.body, this.LOADING_CLASSNAME);
				this._loading = false;
				this.fireEvent("load");
			},failure:function(F) {
				this.loadHandler.failure.call(this, F);
				this.dataConnection = null;
				D.removeClass(this.body, this.LOADING_CLASSNAME);
				this._loading = false;
				this.fireEvent("loadError", {error:F});
			},scope:this,timeout:this.get("dataTimeout")});
			return this.dataConnection;
		}
		return false;
	},init:function(H, G) {
		this._gutter = {left:0,right:0,top:0,bottom:0};
		this._sizes = {wrap:{h:0,w:0},header:{h:0,w:0},body:{h:0,w:0},footer:{h:0,w:0}};
		B.superclass.init.call(this, H, G);
		this.browser = this.get("parent").browser;
		var K = H;
		if (!E.isString(K)) {
			K = D.generateId(K);
		}
		B._instances[K] = this;
		this.setStyle("position", "absolute");
		this.addClass("yui-layout-unit");
		this.addClass("yui-layout-unit-" + this.get("position"));
		var J = this.getElementsByClassName("yui-layout-hd", "div")[0];
		if (J) {
			this.header = J;
		}
		var F = this.getElementsByClassName("yui-layout-bd", "div")[0];
		if (F) {
			this.body = F;
		}
		var I = this.getElementsByClassName("yui-layout-ft", "div")[0];
		if (I) {
			this.footer = I;
		}
		this.on("contentChange", this.resize, this, true);
		this._lastScrollTop = 0;
		this.set("animate", this.get("animate"));
	},initAttributes:function(F) {
		B.superclass.initAttributes.call(this, F);
		this.setAttributeConfig("wrap", {value:F.wrap || null,method:function(G) {
			if (G) {
				var H = D.generateId(G);
				B._instances[H] = this;
			}
		}});
		this.setAttributeConfig("grids", {value:F.grids || false});
		this.setAttributeConfig("top", {value:F.top || 0,validator:E.isNumber,method:function(G) {
			if (!this._collapsing) {
				this.setStyle("top", G + "px");
			}
		}});
		this.setAttributeConfig("left", {value:F.left || 0,validator:E.isNumber,method:function(G) {
			if (!this._collapsing) {
				this.setStyle("left", G + "px");
			}
		}});
		this.setAttributeConfig("minWidth", {value:F.minWidth || false,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("maxWidth", {value:F.maxWidth || false,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("minHeight", {value:F.minHeight || false,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("maxHeight", {value:F.maxHeight || false,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("height", {value:F.height,validator:E.isNumber,method:function(G) {
			if (!this._collapsing) {
				if (G < 0) {
					G = 0;
				}
				this.setStyle("height", G + "px");
			}
		}});
		this.setAttributeConfig("width", {value:F.width,validator:E.isNumber,method:function(G) {
			if (!this._collapsing) {
				if (G < 0) {
					G = 0;
				}
				this.setStyle("width", G + "px");
			}
		}});
		this.setAttributeConfig("zIndex", {value:F.zIndex || false,method:function(G) {
			this.setStyle("zIndex", G);
		}});
		this.setAttributeConfig("position", {value:F.position});
		this.setAttributeConfig("gutter", {value:F.gutter || 0,validator:YAHOO.lang.isString,method:function(H) {
			var G = H.split(" ");
			if (G.length) {
				this._gutter.top = parseInt(G[0], 10);
				if (G[1]) {
					this._gutter.right = parseInt(G[1], 10);
				} else {
					this._gutter.right = this._gutter.top;
				}
				if (G[2]) {
					this._gutter.bottom = parseInt(G[2], 10);
				} else {
					this._gutter.bottom = this._gutter.top;
				}
				if (G[3]) {
					this._gutter.left = parseInt(G[3], 10);
				} else {
					if (G[1]) {
						this._gutter.left = this._gutter.right;
					} else {
						this._gutter.left = this._gutter.top;
					}
				}
			}
		}});
		this.setAttributeConfig("parent", {writeOnce:true,value:F.parent || false,method:function(G) {
			if (G) {
				G.on("resize", this.resize, this, true);
			}
		}});
		this.setAttributeConfig("collapseSize", {value:F.collapseSize || 25,validator:YAHOO.lang.isNumber});
		this.setAttributeConfig("duration", {value:F.duration || 0.5});
		this.setAttributeConfig("easing", {value:F.easing || ((YAHOO.util && YAHOO.util.Easing) ? YAHOO.util.Easing.BounceIn : "false")});
		this.setAttributeConfig("animate", {value:((F.animate === false) ? false : true),validator:function() {
			var G = false;
			if (YAHOO.util.Anim) {
				G = true;
			}
			return G;
		},method:function(G) {
			if (G) {
				this._anim = new YAHOO.util.Anim(this.get("element"), {}, this.get("duration"), this.get("easing"));
			} else {
				this._anim = false;
			}
		}});
		this.setAttributeConfig("header", {value:F.header || false,method:function(G) {
			if (G === false) {
				if (this.header) {
					D.addClass(this.body, "yui-layout-bd-nohd");
					this.header.parentNode.removeChild(this.header);
					this.header = null;
				}
			} else {
				if (!this.header) {
					var I = this.getElementsByClassName("yui-layout-hd", "div")[0];
					if (!I) {
						I = this._createHeader();
					}
					this.header = I;
				}
				var H = this.header.getElementsByTagName("h2")[0];
				if (!H) {
					H = document.createElement("h2");
					this.header.appendChild(H);
				}
				H.innerHTML = G;
				if (this.body) {
					D.removeClass(this.body, "yui-layout-bd-nohd");
				}
			}
			this.fireEvent("contentChange", {target:"header"});
		}});
		this.setAttributeConfig("proxy", {writeOnce:true,value:((F.proxy === false) ? false : true)});
		this.setAttributeConfig("body", {value:F.body || false,method:function(I) {
			if (!this.body) {
				var G = this.getElementsByClassName("yui-layout-bd", "div")[0];
				if (G) {
					this.body = G;
				} else {
					G = document.createElement("div");
					G.className = "yui-layout-bd";
					this.body = G;
					this.get("wrap").appendChild(G);
				}
			}
			if (!this.header) {
				D.addClass(this.body, "yui-layout-bd-nohd");
			}
			D.addClass(this.body, "yui-layout-bd-noft");
			var H = null;
			if (E.isString(I)) {
				H = D.get(I);
			} else {
				if (I && I.tagName) {
					H = I;
				}
			}
			if (H) {
				var J = D.generateId(H);
				B._instances[J] = this;
				this.body.appendChild(H);
			} else {
				this.body.innerHTML = I;
			}
			this._cleanGrids();
			this.fireEvent("contentChange", {target:"body"});
		}});
		this.setAttributeConfig("footer", {value:F.footer || false,method:function(H) {
			if (H === false) {
				if (this.footer) {
					D.addClass(this.body, "yui-layout-bd-noft");
					this.footer.parentNode.removeChild(this.footer);
					this.footer = null;
				}
			} else {
				if (!this.footer) {
					var I = this.getElementsByClassName("yui-layout-ft", "div")[0];
					if (!I) {
						I = document.createElement("div");
						I.className = "yui-layout-ft";
						this.footer = I;
						this.get("wrap").appendChild(I);
					} else {
						this.footer = I;
					}
				}
				var G = null;
				if (E.isString(H)) {
					G = D.get(H);
				} else {
					if (H && H.tagName) {
						G = H;
					}
				}
				if (G) {
					this.footer.appendChild(G);
				} else {
					this.footer.innerHTML = H;
				}
				D.removeClass(this.body, "yui-layout-bd-noft");
			}
			this.fireEvent("contentChange", {target:"footer"});
		}});
		this.setAttributeConfig("close", {value:F.close || false,method:function(G) {
			if (this.get("position") == "center") {
				return false;
			}
			if (!this.header) {
				this._createHeader();
			}
			var H = D.getElementsByClassName("close", "div", this.header)[0];
			if (G) {
				if (!this.get("header")) {
					this.set("header", "&nbsp;");
				}
				if (!H) {
					H = document.createElement("div");
					H.className = "close";
					this.header.appendChild(H);
					A.on(H, "click", this.close, this, true);
				}
				H.title = this.STR_CLOSE;
			} else {
				if (H) {
					A.purgeElement(H);
					H.parentNode.removeChild(H);
				}
			}
			this._configs.close.value = G;
			this.set("collapse", this.get("collapse"));
		}});
		this.setAttributeConfig("collapse", {value:F.collapse || false,method:function(G) {
			if (this.get("position") == "center") {
				return false;
			}
			if (!this.header) {
				this._createHeader();
			}
			var H = D.getElementsByClassName("collapse", "div", this.header)[0];
			if (G) {
				if (!this.get("header")) {
					this.set("header", "&nbsp;");
				}
				if (!H) {
					H = document.createElement("div");
					this.header.appendChild(H);
					A.on(H, "click", this.collapse, this, true);
				}
				H.title = this.STR_COLLAPSE;
				H.className = "collapse" + ((this.get("close")) ? " collapse-close" : "");
			} else {
				if (H) {
					A.purgeElement(H);
					H.parentNode.removeChild(H);
				}
			}
		}});
		this.setAttributeConfig("scroll", {value:(((F.scroll === true) || (F.scroll === false) || (F.scroll === null)) ? F.scroll : false),method:function(G) {
			if ((G === false) && !this._collapsed) {
				if (this.body) {
					if (this.body.scrollTop > 0) {
						this._lastScrollTop = this.body.scrollTop;
					}
				}
			}
			if (G === true) {
				this.addClass("yui-layout-scroll");
				this.removeClass("yui-layout-noscroll");
				if (this._lastScrollTop > 0) {
					if (this.body) {
						this.body.scrollTop = this._lastScrollTop;
					}
				}
			} else {
				if (G === false) {
					this.removeClass("yui-layout-scroll");
					this.addClass("yui-layout-noscroll");
				} else {
					if (G === null) {
						this.removeClass("yui-layout-scroll");
						this.removeClass("yui-layout-noscroll");
					}
				}
			}
		}});
		this.setAttributeConfig("hover", {writeOnce:true,value:F.hover || false,validator:YAHOO.lang.isBoolean});
		this.setAttributeConfig("useShim", {value:F.useShim || false,validator:YAHOO.lang.isBoolean,method:function(G) {
			if (this._resize) {
				this._resize.set("useShim", G);
			}
		}});
		this.setAttributeConfig("resize", {value:F.resize || false,validator:function(G) {
			if (YAHOO.util && YAHOO.util.Resize) {
				return true;
			}
			return false;
		},method:function(G) {
			if (G && !this._resize) {
				if (this.get("position") == "center") {
					return false;
				}
				var I = false;
				switch (this.get("position")) {
					case"top":
						I = "b";
						break;
					case"bottom":
						I = "t";
						break;
					case"right":
						I = "l";
						break;
					case"left":
						I = "r";
						break;
				}
				this.setStyle("position", "absolute");
				if (I) {
					this._resize = new YAHOO.util.Resize(this.get("element"), {proxy:this.get("proxy"),hover:this.get("hover"),status:false,autoRatio:false,handles:[I],minWidth:this.get("minWidth"),maxWidth:this.get("maxWidth"),minHeight:this.get("minHeight"),maxHeight:this.get("maxHeight"),height:this.get("height"),width:this.get("width"),setSize:false,useShim:this.get("useShim"),wrap:false});
					this._resize._handles[I].innerHTML = '<div class="yui-layout-resize-knob"></div>';
					if (this.get("proxy")) {
						var H = this._resize.getProxyEl();
						H.innerHTML = '<div class="yui-layout-handle-' + I + '"></div>';
					}
					this._resize.on("startResize", function(J) {
						this._lastScroll = this.get("scroll");
						this.set("scroll", false);
						if (this.get("parent")) {
							this.get("parent").fireEvent("startResize");
							var K = this.get("parent").getUnitByPosition("center");
							this._lastCenterScroll = K.get("scroll");
							K.addClass(this._resize.CSS_RESIZING);
							K.set("scroll", false);
						}
						this.fireEvent("startResize");
					}, this, true);
					this._resize.on("resize", function(J) {
						this.set("height", J.height);
						this.set("width", J.width);
					}, this, true);
					this._resize.on("endResize", function(J) {
						this.set("scroll", this._lastScroll);
						if (this.get("parent")) {
							var K = this.get("parent").getUnitByPosition("center");
							K.set("scroll", this._lastCenterScroll);
							K.removeClass(this._resize.CSS_RESIZING);
						}
						this.resize();
						this.fireEvent("endResize");
					}, this, true);
				}
			} else {
				if (this._resize) {
					this._resize.destroy();
				}
			}
		}});
		this.setAttributeConfig("dataSrc", {value:F.dataSrc});
		this.setAttributeConfig("loadMethod", {value:F.loadMethod || "GET",validator:YAHOO.lang.isString});
		this.setAttributeConfig("dataLoaded", {value:false,validator:YAHOO.lang.isBoolean,writeOnce:true});
		this.setAttributeConfig("dataTimeout", {value:F.dataTimeout || null,validator:YAHOO.lang.isNumber});
	},_cleanGrids:function() {
		if (this.get("grids")) {
			var F = C.query("div.yui-b", this.body, true);
			if (F) {
				D.removeClass(F, "yui-b");
			}
			A.onAvailable("yui-main", function() {
				D.setStyle(C.query("#yui-main"), "margin-left", "0");
				D.setStyle(C.query("#yui-main"), "margin-right", "0");
			});
		}
	},_createHeader:function() {
		var F = document.createElement("div");
		F.className = "yui-layout-hd";
		if (this.get("firstChild")) {
			this.get("wrap").insertBefore(F, this.get("wrap").firstChild);
		} else {
			this.get("wrap").appendChild(F);
		}
		this.header = F;
		return F;
	},destroy:function(H) {
		if (this._resize) {
			this._resize.destroy();
		}
		var G = this.get("parent");
		this.setStyle("display", "none");
		if (this._clip) {
			this._clip.parentNode.removeChild(this._clip);
			this._clip = null;
		}
		if (!H) {
			G.removeUnit(this);
		}
		if (G) {
			G.removeListener("resize", this.resize, this, true);
		}
		this.unsubscribeAll();
		A.purgeElement(this.get("element"));
		this.get("parentNode").removeChild(this.get("element"));
		delete YAHOO.widget.LayoutUnit._instances[this.get("id")];
		for (var F in this) {
			if (E.hasOwnProperty(this, F)) {
				this[F] = null;
				delete this[F];
			}
		}
		return G;
	},toString:function() {
		if (this.get) {
			return"LayoutUnit #" + this.get("id") + " (" + this.get("position") + ")";
		}
		return"LayoutUnit";
	}});
	YAHOO.widget.LayoutUnit = B;
})();
YAHOO.register("layout", YAHOO.widget.Layout, {version:"2.7.0",build:"1799"});
/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 2.7.0
 */
(function() {
	YAHOO.util.Config = function(D) {
		if (D) {
			this.init(D);
		}
	};
	var B = YAHOO.lang,C = YAHOO.util.CustomEvent,A = YAHOO.util.Config;
	A.CONFIG_CHANGED_EVENT = "configChanged";
	A.BOOLEAN_TYPE = "boolean";
	A.prototype = {owner:null,queueInProgress:false,config:null,initialConfig:null,eventQueue:null,configChangedEvent:null,init:function(D) {
		this.owner = D;
		this.configChangedEvent = this.createEvent(A.CONFIG_CHANGED_EVENT);
		this.configChangedEvent.signature = C.LIST;
		this.queueInProgress = false;
		this.config = {};
		this.initialConfig = {};
		this.eventQueue = [];
	},checkBoolean:function(D) {
		return(typeof D == A.BOOLEAN_TYPE);
	},checkNumber:function(D) {
		return(!isNaN(D));
	},fireEvent:function(D, F) {
		var E = this.config[D];
		if (E && E.event) {
			E.event.fire(F);
		}
	},addProperty:function(E, D) {
		E = E.toLowerCase();
		this.config[E] = D;
		D.event = this.createEvent(E, {scope:this.owner});
		D.event.signature = C.LIST;
		D.key = E;
		if (D.handler) {
			D.event.subscribe(D.handler, this.owner);
		}
		this.setProperty(E, D.value, true);
		if (!D.suppressEvent) {
			this.queueProperty(E, D.value);
		}
	},getConfig:function() {
		var D = {},F = this.config,G,E;
		for (G in F) {
			if (B.hasOwnProperty(F, G)) {
				E = F[G];
				if (E && E.event) {
					D[G] = E.value;
				}
			}
		}
		return D;
	},getProperty:function(D) {
		var E = this.config[D.toLowerCase()];
		if (E && E.event) {
			return E.value;
		} else {
			return undefined;
		}
	},resetProperty:function(D) {
		D = D.toLowerCase();
		var E = this.config[D];
		if (E && E.event) {
			if (this.initialConfig[D] && !B.isUndefined(this.initialConfig[D])) {
				this.setProperty(D, this.initialConfig[D]);
				return true;
			}
		} else {
			return false;
		}
	},setProperty:function(E, G, D) {
		var F;
		E = E.toLowerCase();
		if (this.queueInProgress && !D) {
			this.queueProperty(E, G);
			return true;
		} else {
			F = this.config[E];
			if (F && F.event) {
				if (F.validator && !F.validator(G)) {
					return false;
				} else {
					F.value = G;
					if (!D) {
						this.fireEvent(E, G);
						this.configChangedEvent.fire([E,G]);
					}
					return true;
				}
			} else {
				return false;
			}
		}
	},queueProperty:function(S, P) {
		S = S.toLowerCase();
		var R = this.config[S],K = false,J,G,H,I,O,Q,F,M,N,D,L,T,E;
		if (R && R.event) {
			if (!B.isUndefined(P) && R.validator && !R.validator(P)) {
				return false;
			} else {
				if (!B.isUndefined(P)) {
					R.value = P;
				} else {
					P = R.value;
				}
				K = false;
				J = this.eventQueue.length;
				for (L = 0; L < J; L++) {
					G = this.eventQueue[L];
					if (G) {
						H = G[0];
						I = G[1];
						if (H == S) {
							this.eventQueue[L] = null;
							this.eventQueue.push([S,(!B.isUndefined(P) ? P : I)]);
							K = true;
							break;
						}
					}
				}
				if (!K && !B.isUndefined(P)) {
					this.eventQueue.push([S,P]);
				}
			}
			if (R.supercedes) {
				O = R.supercedes.length;
				for (T = 0; T < O; T++) {
					Q = R.supercedes[T];
					F = this.eventQueue.length;
					for (E = 0; E < F; E++) {
						M = this.eventQueue[E];
						if (M) {
							N = M[0];
							D = M[1];
							if (N == Q.toLowerCase()) {
								this.eventQueue.push([N,D]);
								this.eventQueue[E] = null;
								break;
							}
						}
					}
				}
			}
			return true;
		} else {
			return false;
		}
	},refireEvent:function(D) {
		D = D.toLowerCase();
		var E = this.config[D];
		if (E && E.event && !B.isUndefined(E.value)) {
			if (this.queueInProgress) {
				this.queueProperty(D);
			} else {
				this.fireEvent(D, E.value);
			}
		}
	},applyConfig:function(D, G) {
		var F,E;
		if (G) {
			E = {};
			for (F in D) {
				if (B.hasOwnProperty(D, F)) {
					E[F.toLowerCase()] = D[F];
				}
			}
			this.initialConfig = E;
		}
		for (F in D) {
			if (B.hasOwnProperty(D, F)) {
				this.queueProperty(F, D[F]);
			}
		}
	},refresh:function() {
		var D;
		for (D in this.config) {
			if (B.hasOwnProperty(this.config, D)) {
				this.refireEvent(D);
			}
		}
	},fireQueue:function() {
		var E,H,D,G,F;
		this.queueInProgress = true;
		for (E = 0; E < this.eventQueue.length; E++) {
			H = this.eventQueue[E];
			if (H) {
				D = H[0];
				G = H[1];
				F = this.config[D];
				F.value = G;
				this.eventQueue[E] = null;
				this.fireEvent(D, G);
			}
		}
		this.queueInProgress = false;
		this.eventQueue = [];
	},subscribeToConfigEvent:function(E, F, H, D) {
		var G = this.config[E.toLowerCase()];
		if (G && G.event) {
			if (!A.alreadySubscribed(G.event, F, H)) {
				G.event.subscribe(F, H, D);
			}
			return true;
		} else {
			return false;
		}
	},unsubscribeFromConfigEvent:function(D, E, G) {
		var F = this.config[D.toLowerCase()];
		if (F && F.event) {
			return F.event.unsubscribe(E, G);
		} else {
			return false;
		}
	},toString:function() {
		var D = "Config";
		if (this.owner) {
			D += " [" + this.owner.toString() + "]";
		}
		return D;
	},outputEventQueue:function() {
		var D = "",G,E,F = this.eventQueue.length;
		for (E = 0; E < F; E++) {
			G = this.eventQueue[E];
			if (G) {
				D += G[0] + "=" + G[1] + ", ";
			}
		}
		return D;
	},destroy:function() {
		var E = this.config,D,F;
		for (D in E) {
			if (B.hasOwnProperty(E, D)) {
				F = E[D];
				F.event.unsubscribeAll();
				F.event = null;
			}
		}
		this.configChangedEvent.unsubscribeAll();
		this.configChangedEvent = null;
		this.owner = null;
		this.config = null;
		this.initialConfig = null;
		this.eventQueue = null;
	}};
	A.alreadySubscribed = function(E, H, I) {
		var F = E.subscribers.length,D,G;
		if (F > 0) {
			G = F - 1;
			do{
				D = E.subscribers[G];
				if (D && D.obj == I && D.fn == H) {
					return true;
				}
			} while (G--);
		}
		return false;
	};
	YAHOO.lang.augmentProto(A, YAHOO.util.EventProvider);
}());
(function() {
	YAHOO.widget.Module = function(R, Q) {
		if (R) {
			this.init(R, Q);
		} else {
		}
	};
	var F = YAHOO.util.Dom,D = YAHOO.util.Config,N = YAHOO.util.Event,M = YAHOO.util.CustomEvent,G = YAHOO.widget.Module,I = YAHOO.env.ua,H,P,O,E,A = {"BEFORE_INIT":"beforeInit","INIT":"init","APPEND":"append","BEFORE_RENDER":"beforeRender","RENDER":"render","CHANGE_HEADER":"changeHeader","CHANGE_BODY":"changeBody","CHANGE_FOOTER":"changeFooter","CHANGE_CONTENT":"changeContent","DESTORY":"destroy","BEFORE_SHOW":"beforeShow","SHOW":"show","BEFORE_HIDE":"beforeHide","HIDE":"hide"},J = {"VISIBLE":{key:"visible",value:true,validator:YAHOO.lang.isBoolean},"EFFECT":{key:"effect",suppressEvent:true,supercedes:["visible"]},"MONITOR_RESIZE":{key:"monitorresize",value:true},"APPEND_TO_DOCUMENT_BODY":{key:"appendtodocumentbody",value:false}};
	G.IMG_ROOT = null;
	G.IMG_ROOT_SSL = null;
	G.CSS_MODULE = "yui-module";
	G.CSS_HEADER = "hd";
	G.CSS_BODY = "bd";
	G.CSS_FOOTER = "ft";
	G.RESIZE_MONITOR_SECURE_URL = "javascript:false;";
	G.RESIZE_MONITOR_BUFFER = 1;
	G.textResizeEvent = new M("textResize");
	G.forceDocumentRedraw = function() {
		var Q = document.documentElement;
		if (Q) {
			Q.className += " ";
			Q.className = YAHOO.lang.trim(Q.className);
		}
	};
	function L() {
		if (!H) {
			H = document.createElement("div");
			H.innerHTML = ('<div class="' + G.CSS_HEADER + '"></div>' + '<div class="' + G.CSS_BODY + '"></div><div class="' + G.CSS_FOOTER + '"></div>');
			P = H.firstChild;
			O = P.nextSibling;
			E = O.nextSibling;
		}
		return H;
	}

	function K() {
		if (!P) {
			L();
		}
		return(P.cloneNode(false));
	}

	function B() {
		if (!O) {
			L();
		}
		return(O.cloneNode(false));
	}

	function C() {
		if (!E) {
			L();
		}
		return(E.cloneNode(false));
	}

	G.prototype = {constructor:G,element:null,header:null,body:null,footer:null,id:null,imageRoot:G.IMG_ROOT,initEvents:function() {
		var Q = M.LIST;
		this.beforeInitEvent = this.createEvent(A.BEFORE_INIT);
		this.beforeInitEvent.signature = Q;
		this.initEvent = this.createEvent(A.INIT);
		this.initEvent.signature = Q;
		this.appendEvent = this.createEvent(A.APPEND);
		this.appendEvent.signature = Q;
		this.beforeRenderEvent = this.createEvent(A.BEFORE_RENDER);
		this.beforeRenderEvent.signature = Q;
		this.renderEvent = this.createEvent(A.RENDER);
		this.renderEvent.signature = Q;
		this.changeHeaderEvent = this.createEvent(A.CHANGE_HEADER);
		this.changeHeaderEvent.signature = Q;
		this.changeBodyEvent = this.createEvent(A.CHANGE_BODY);
		this.changeBodyEvent.signature = Q;
		this.changeFooterEvent = this.createEvent(A.CHANGE_FOOTER);
		this.changeFooterEvent.signature = Q;
		this.changeContentEvent = this.createEvent(A.CHANGE_CONTENT);
		this.changeContentEvent.signature = Q;
		this.destroyEvent = this.createEvent(A.DESTORY);
		this.destroyEvent.signature = Q;
		this.beforeShowEvent = this.createEvent(A.BEFORE_SHOW);
		this.beforeShowEvent.signature = Q;
		this.showEvent = this.createEvent(A.SHOW);
		this.showEvent.signature = Q;
		this.beforeHideEvent = this.createEvent(A.BEFORE_HIDE);
		this.beforeHideEvent.signature = Q;
		this.hideEvent = this.createEvent(A.HIDE);
		this.hideEvent.signature = Q;
	},platform:function() {
		var Q = navigator.userAgent.toLowerCase();
		if (Q.indexOf("windows") != -1 || Q.indexOf("win32") != -1) {
			return"windows";
		} else {
			if (Q.indexOf("macintosh") != -1) {
				return"mac";
			} else {
				return false;
			}
		}
	}(),browser:function() {
		var Q = navigator.userAgent.toLowerCase();
		if (Q.indexOf("opera") != -1) {
			return"opera";
		} else {
			if (Q.indexOf("msie 7") != -1) {
				return"ie7";
			} else {
				if (Q.indexOf("msie") != -1) {
					return"ie";
				} else {
					if (Q.indexOf("safari") != -1) {
						return"safari";
					} else {
						if (Q.indexOf("gecko") != -1) {
							return"gecko";
						} else {
							return false;
						}
					}
				}
			}
		}
	}(),isSecure:function() {
		if (window.location.href.toLowerCase().indexOf("https") === 0) {
			return true;
		} else {
			return false;
		}
	}(),initDefaultConfig:function() {
		this.cfg.addProperty(J.VISIBLE.key, {handler:this.configVisible,value:J.VISIBLE.value,validator:J.VISIBLE.validator});
		this.cfg.addProperty(J.EFFECT.key, {suppressEvent:J.EFFECT.suppressEvent,supercedes:J.EFFECT.supercedes});
		this.cfg.addProperty(J.MONITOR_RESIZE.key, {handler:this.configMonitorResize,value:J.MONITOR_RESIZE.value});
		this.cfg.addProperty(J.APPEND_TO_DOCUMENT_BODY.key, {value:J.APPEND_TO_DOCUMENT_BODY.value});
	},init:function(V, U) {
		var S,W;
		this.initEvents();
		this.beforeInitEvent.fire(G);
		this.cfg = new D(this);
		if (this.isSecure) {
			this.imageRoot = G.IMG_ROOT_SSL;
		}
		if (typeof V == "string") {
			S = V;
			V = document.getElementById(V);
			if (!V) {
				V = (L()).cloneNode(false);
				V.id = S;
			}
		}
		this.id = F.generateId(V);
		this.element = V;
		W = this.element.firstChild;
		if (W) {
			var R = false,Q = false,T = false;
			do{
				if (1 == W.nodeType) {
					if (!R && F.hasClass(W, G.CSS_HEADER)) {
						this.header = W;
						R = true;
					} else {
						if (!Q && F.hasClass(W, G.CSS_BODY)) {
							this.body = W;
							Q = true;
						} else {
							if (!T && F.hasClass(W, G.CSS_FOOTER)) {
								this.footer = W;
								T = true;
							}
						}
					}
				}
			} while ((W = W.nextSibling));
		}
		this.initDefaultConfig();
		F.addClass(this.element, G.CSS_MODULE);
		if (U) {
			this.cfg.applyConfig(U, true);
		}
		if (!D.alreadySubscribed(this.renderEvent, this.cfg.fireQueue, this.cfg)) {
			this.renderEvent.subscribe(this.cfg.fireQueue, this.cfg, true);
		}
		this.initEvent.fire(G);
	},initResizeMonitor:function() {
		var R = (I.gecko && this.platform == "windows");
		if (R) {
			var Q = this;
			setTimeout(function() {
				Q._initResizeMonitor();
			}, 0);
		} else {
			this._initResizeMonitor();
		}
	},_initResizeMonitor:function() {
		var Q,S,U;

		function W() {
			G.textResizeEvent.fire();
		}

		if (!I.opera) {
			S = F.get("_yuiResizeMonitor");
			var V = this._supportsCWResize();
			if (!S) {
				S = document.createElement("iframe");
				if (this.isSecure && G.RESIZE_MONITOR_SECURE_URL && I.ie) {
					S.src = G.RESIZE_MONITOR_SECURE_URL;
				}
				if (!V) {
					U = ["<html><head><script ",'type="text/javascript">',"window.onresize=function(){window.parent.","YAHOO.widget.Module.textResizeEvent.","fire();};<","/script></head>","<body></body></html>"].join("");
					S.src = "data:text/html;charset=utf-8," + encodeURIComponent(U);
				}
				S.id = "_yuiResizeMonitor";
				S.title = "Text Resize Monitor";
				S.style.position = "absolute";
				S.style.visibility = "hidden";
				var R = document.body,T = R.firstChild;
				if (T) {
					R.insertBefore(S, T);
				} else {
					R.appendChild(S);
				}
				S.style.width = "2em";
				S.style.height = "2em";
				S.style.top = (-1 * (S.offsetHeight + G.RESIZE_MONITOR_BUFFER)) + "px";
				S.style.left = "0";
				S.style.borderWidth = "0";
				S.style.visibility = "visible";
				if (I.webkit) {
					Q = S.contentWindow.document;
					Q.open();
					Q.close();
				}
			}
			if (S && S.contentWindow) {
				G.textResizeEvent.subscribe(this.onDomResize, this, true);
				if (!G.textResizeInitialized) {
					if (V) {
						if (!N.on(S.contentWindow, "resize", W)) {
							N.on(S, "resize", W);
						}
					}
					G.textResizeInitialized = true;
				}
				this.resizeMonitor = S;
			}
		}
	},_supportsCWResize:function() {
		var Q = true;
		if (I.gecko && I.gecko <= 1.8) {
			Q = false;
		}
		return Q;
	},onDomResize:function(S, R) {
		var Q = -1 * (this.resizeMonitor.offsetHeight + G.RESIZE_MONITOR_BUFFER);
		this.resizeMonitor.style.top = Q + "px";
		this.resizeMonitor.style.left = "0";
	},setHeader:function(R) {
		var Q = this.header || (this.header = K());
		if (R.nodeName) {
			Q.innerHTML = "";
			Q.appendChild(R);
		} else {
			Q.innerHTML = R;
		}
		this.changeHeaderEvent.fire(R);
		this.changeContentEvent.fire();
	},appendToHeader:function(R) {
		var Q = this.header || (this.header = K());
		Q.appendChild(R);
		this.changeHeaderEvent.fire(R);
		this.changeContentEvent.fire();
	},setBody:function(R) {
		var Q = this.body || (this.body = B());
		if (R.nodeName) {
			Q.innerHTML = "";
			Q.appendChild(R);
		} else {
			Q.innerHTML = R;
		}
		this.changeBodyEvent.fire(R);
		this.changeContentEvent.fire();
	},appendToBody:function(R) {
		var Q = this.body || (this.body = B());
		Q.appendChild(R);
		this.changeBodyEvent.fire(R);
		this.changeContentEvent.fire();
	},setFooter:function(R) {
		var Q = this.footer || (this.footer = C());
		if (R.nodeName) {
			Q.innerHTML = "";
			Q.appendChild(R);
		} else {
			Q.innerHTML = R;
		}
		this.changeFooterEvent.fire(R);
		this.changeContentEvent.fire();
	},appendToFooter:function(R) {
		var Q = this.footer || (this.footer = C());
		Q.appendChild(R);
		this.changeFooterEvent.fire(R);
		this.changeContentEvent.fire();
	},render:function(S, Q) {
		var T = this,U;

		function R(V) {
			if (typeof V == "string") {
				V = document.getElementById(V);
			}
			if (V) {
				T._addToParent(V, T.element);
				T.appendEvent.fire();
			}
		}

		this.beforeRenderEvent.fire();
		if (!Q) {
			Q = this.element;
		}
		if (S) {
			R(S);
		} else {
			if (!F.inDocument(this.element)) {
				return false;
			}
		}
		if (this.header && !F.inDocument(this.header)) {
			U = Q.firstChild;
			if (U) {
				Q.insertBefore(this.header, U);
			} else {
				Q.appendChild(this.header);
			}
		}
		if (this.body && !F.inDocument(this.body)) {
			if (this.footer && F.isAncestor(this.moduleElement, this.footer)) {
				Q.insertBefore(this.body, this.footer);
			} else {
				Q.appendChild(this.body);
			}
		}
		if (this.footer && !F.inDocument(this.footer)) {
			Q.appendChild(this.footer);
		}
		this.renderEvent.fire();
		return true;
	},destroy:function() {
		var Q;
		if (this.element) {
			N.purgeElement(this.element, true);
			Q = this.element.parentNode;
		}
		if (Q) {
			Q.removeChild(this.element);
		}
		this.element = null;
		this.header = null;
		this.body = null;
		this.footer = null;
		G.textResizeEvent.unsubscribe(this.onDomResize, this);
		this.cfg.destroy();
		this.cfg = null;
		this.destroyEvent.fire();
	},show:function() {
		this.cfg.setProperty("visible", true);
	},hide:function() {
		this.cfg.setProperty("visible", false);
	},configVisible:function(R, Q, S) {
		var T = Q[0];
		if (T) {
			this.beforeShowEvent.fire();
			F.setStyle(this.element, "display", "block");
			this.showEvent.fire();
		} else {
			this.beforeHideEvent.fire();
			F.setStyle(this.element, "display", "none");
			this.hideEvent.fire();
		}
	},configMonitorResize:function(S, R, T) {
		var Q = R[0];
		if (Q) {
			this.initResizeMonitor();
		} else {
			G.textResizeEvent.unsubscribe(this.onDomResize, this, true);
			this.resizeMonitor = null;
		}
	},_addToParent:function(Q, R) {
		if (!this.cfg.getProperty("appendtodocumentbody") && Q === document.body && Q.firstChild) {
			Q.insertBefore(R, Q.firstChild);
		} else {
			Q.appendChild(R);
		}
	},toString:function() {
		return"Module " + this.id;
	}};
	YAHOO.lang.augmentProto(G, YAHOO.util.EventProvider);
}());
(function() {
	YAHOO.widget.Overlay = function(P, O) {
		YAHOO.widget.Overlay.superclass.constructor.call(this, P, O);
	};
	var I = YAHOO.lang,M = YAHOO.util.CustomEvent,G = YAHOO.widget.Module,N = YAHOO.util.Event,F = YAHOO.util.Dom,D = YAHOO.util.Config,K = YAHOO.env.ua,B = YAHOO.widget.Overlay,H = "subscribe",E = "unsubscribe",C = "contained",J,A = {"BEFORE_MOVE":"beforeMove","MOVE":"move"},L = {"X":{key:"x",validator:I.isNumber,suppressEvent:true,supercedes:["iframe"]},"Y":{key:"y",validator:I.isNumber,suppressEvent:true,supercedes:["iframe"]},"XY":{key:"xy",suppressEvent:true,supercedes:["iframe"]},"CONTEXT":{key:"context",suppressEvent:true,supercedes:["iframe"]},"FIXED_CENTER":{key:"fixedcenter",value:false,supercedes:["iframe","visible"]},"WIDTH":{key:"width",suppressEvent:true,supercedes:["context","fixedcenter","iframe"]},"HEIGHT":{key:"height",suppressEvent:true,supercedes:["context","fixedcenter","iframe"]},"AUTO_FILL_HEIGHT":{key:"autofillheight",supercedes:["height"],value:"body"},"ZINDEX":{key:"zindex",value:null},"CONSTRAIN_TO_VIEWPORT":{key:"constraintoviewport",value:false,validator:I.isBoolean,supercedes:["iframe","x","y","xy"]},"IFRAME":{key:"iframe",value:(K.ie == 6 ? true : false),validator:I.isBoolean,supercedes:["zindex"]},"PREVENT_CONTEXT_OVERLAP":{key:"preventcontextoverlap",value:false,validator:I.isBoolean,supercedes:["constraintoviewport"]}};
	B.IFRAME_SRC = "javascript:false;";
	B.IFRAME_OFFSET = 3;
	B.VIEWPORT_OFFSET = 10;
	B.TOP_LEFT = "tl";
	B.TOP_RIGHT = "tr";
	B.BOTTOM_LEFT = "bl";
	B.BOTTOM_RIGHT = "br";
	B.CSS_OVERLAY = "yui-overlay";
	B.STD_MOD_RE = /^\s*?(body|footer|header)\s*?$/i;
	B.windowScrollEvent = new M("windowScroll");
	B.windowResizeEvent = new M("windowResize");
	B.windowScrollHandler = function(P) {
		var O = N.getTarget(P);
		if (!O || O === window || O === window.document) {
			if (K.ie) {
				if (!window.scrollEnd) {
					window.scrollEnd = -1;
				}
				clearTimeout(window.scrollEnd);
				window.scrollEnd = setTimeout(function() {
					B.windowScrollEvent.fire();
				}, 1);
			} else {
				B.windowScrollEvent.fire();
			}
		}
	};
	B.windowResizeHandler = function(O) {
		if (K.ie) {
			if (!window.resizeEnd) {
				window.resizeEnd = -1;
			}
			clearTimeout(window.resizeEnd);
			window.resizeEnd = setTimeout(function() {
				B.windowResizeEvent.fire();
			}, 100);
		} else {
			B.windowResizeEvent.fire();
		}
	};
	B._initialized = null;
	if (B._initialized === null) {
		N.on(window, "scroll", B.windowScrollHandler);
		N.on(window, "resize", B.windowResizeHandler);
		B._initialized = true;
	}
	B._TRIGGER_MAP = {"windowScroll":B.windowScrollEvent,"windowResize":B.windowResizeEvent,"textResize":G.textResizeEvent};
	YAHOO.extend(B, G, {CONTEXT_TRIGGERS:[],init:function(P, O) {
		B.superclass.init.call(this, P);
		this.beforeInitEvent.fire(B);
		F.addClass(this.element, B.CSS_OVERLAY);
		if (O) {
			this.cfg.applyConfig(O, true);
		}
		if (this.platform == "mac" && K.gecko) {
			if (!D.alreadySubscribed(this.showEvent, this.showMacGeckoScrollbars, this)) {
				this.showEvent.subscribe(this.showMacGeckoScrollbars, this, true);
			}
			if (!D.alreadySubscribed(this.hideEvent, this.hideMacGeckoScrollbars, this)) {
				this.hideEvent.subscribe(this.hideMacGeckoScrollbars, this, true);
			}
		}
		this.initEvent.fire(B);
	},initEvents:function() {
		B.superclass.initEvents.call(this);
		var O = M.LIST;
		this.beforeMoveEvent = this.createEvent(A.BEFORE_MOVE);
		this.beforeMoveEvent.signature = O;
		this.moveEvent = this.createEvent(A.MOVE);
		this.moveEvent.signature = O;
	},initDefaultConfig:function() {
		B.superclass.initDefaultConfig.call(this);
		var O = this.cfg;
		O.addProperty(L.X.key, {handler:this.configX,validator:L.X.validator,suppressEvent:L.X.suppressEvent,supercedes:L.X.supercedes});
		O.addProperty(L.Y.key, {handler:this.configY,validator:L.Y.validator,suppressEvent:L.Y.suppressEvent,supercedes:L.Y.supercedes});
		O.addProperty(L.XY.key, {handler:this.configXY,suppressEvent:L.XY.suppressEvent,supercedes:L.XY.supercedes});
		O.addProperty(L.CONTEXT.key, {handler:this.configContext,suppressEvent:L.CONTEXT.suppressEvent,supercedes:L.CONTEXT.supercedes});
		O.addProperty(L.FIXED_CENTER.key, {handler:this.configFixedCenter,value:L.FIXED_CENTER.value,validator:L.FIXED_CENTER.validator,supercedes:L.FIXED_CENTER.supercedes});
		O.addProperty(L.WIDTH.key, {handler:this.configWidth,suppressEvent:L.WIDTH.suppressEvent,supercedes:L.WIDTH.supercedes});
		O.addProperty(L.HEIGHT.key, {handler:this.configHeight,suppressEvent:L.HEIGHT.suppressEvent,supercedes:L.HEIGHT.supercedes});
		O.addProperty(L.AUTO_FILL_HEIGHT.key, {handler:this.configAutoFillHeight,value:L.AUTO_FILL_HEIGHT.value,validator:this._validateAutoFill,supercedes:L.AUTO_FILL_HEIGHT.supercedes});
		O.addProperty(L.ZINDEX.key, {handler:this.configzIndex,value:L.ZINDEX.value});
		O.addProperty(L.CONSTRAIN_TO_VIEWPORT.key, {handler:this.configConstrainToViewport,value:L.CONSTRAIN_TO_VIEWPORT.value,validator:L.CONSTRAIN_TO_VIEWPORT.validator,supercedes:L.CONSTRAIN_TO_VIEWPORT.supercedes});
		O.addProperty(L.IFRAME.key, {handler:this.configIframe,value:L.IFRAME.value,validator:L.IFRAME.validator,supercedes:L.IFRAME.supercedes});
		O.addProperty(L.PREVENT_CONTEXT_OVERLAP.key, {value:L.PREVENT_CONTEXT_OVERLAP.value,validator:L.PREVENT_CONTEXT_OVERLAP.validator,supercedes:L.PREVENT_CONTEXT_OVERLAP.supercedes});
	},moveTo:function(O, P) {
		this.cfg.setProperty("xy", [O,P]);
	},hideMacGeckoScrollbars:function() {
		F.replaceClass(this.element, "show-scrollbars", "hide-scrollbars");
	},showMacGeckoScrollbars:function() {
		F.replaceClass(this.element, "hide-scrollbars", "show-scrollbars");
	},_setDomVisibility:function(O) {
		F.setStyle(this.element, "visibility", (O) ? "visible" : "hidden");
		if (O) {
			F.removeClass(this.element, "yui-overlay-hidden");
		} else {
			F.addClass(this.element, "yui-overlay-hidden");
		}
	},configVisible:function(R, O, X) {
		var Q = O[0],S = F.getStyle(this.element, "visibility"),Y = this.cfg.getProperty("effect"),V = [],U = (this.platform == "mac" && K.gecko),g = D.alreadySubscribed,W,P,f,c,b,a,d,Z,T;
		if (S == "inherit") {
			f = this.element.parentNode;
			while (f.nodeType != 9 && f.nodeType != 11) {
				S = F.getStyle(f, "visibility");
				if (S != "inherit") {
					break;
				}
				f = f.parentNode;
			}
			if (S == "inherit") {
				S = "visible";
			}
		}
		if (Y) {
			if (Y instanceof Array) {
				Z = Y.length;
				for (c = 0; c < Z; c++) {
					W = Y[c];
					V[V.length] = W.effect(this, W.duration);
				}
			} else {
				V[V.length] = Y.effect(this, Y.duration);
			}
		}
		if (Q) {
			if (U) {
				this.showMacGeckoScrollbars();
			}
			if (Y) {
				if (Q) {
					if (S != "visible" || S === "") {
						this.beforeShowEvent.fire();
						T = V.length;
						for (b = 0; b < T; b++) {
							P = V[b];
							if (b === 0 && !g(P.animateInCompleteEvent, this.showEvent.fire, this.showEvent)) {
								P.animateInCompleteEvent.subscribe(this.showEvent.fire, this.showEvent, true);
							}
							P.animateIn();
						}
					}
				}
			} else {
				if (S != "visible" || S === "") {
					this.beforeShowEvent.fire();
					this._setDomVisibility(true);
					this.cfg.refireEvent("iframe");
					this.showEvent.fire();
				} else {
					this._setDomVisibility(true);
				}
			}
		} else {
			if (U) {
				this.hideMacGeckoScrollbars();
			}
			if (Y) {
				if (S == "visible") {
					this.beforeHideEvent.fire();
					T = V.length;
					for (a = 0; a < T; a++) {
						d = V[a];
						if (a === 0 && !g(d.animateOutCompleteEvent, this.hideEvent.fire, this.hideEvent)) {
							d.animateOutCompleteEvent.subscribe(this.hideEvent.fire, this.hideEvent, true);
						}
						d.animateOut();
					}
				} else {
					if (S === "") {
						this._setDomVisibility(false);
					}
				}
			} else {
				if (S == "visible" || S === "") {
					this.beforeHideEvent.fire();
					this._setDomVisibility(false);
					this.hideEvent.fire();
				} else {
					this._setDomVisibility(false);
				}
			}
		}
	},doCenterOnDOMEvent:function() {
		var O = this.cfg,P = O.getProperty("fixedcenter");
		if (O.getProperty("visible")) {
			if (P && (P !== C || this.fitsInViewport())) {
				this.center();
			}
		}
	},fitsInViewport:function() {
		var S = B.VIEWPORT_OFFSET,Q = this.element,T = Q.offsetWidth,R = Q.offsetHeight,O = F.getViewportWidth(),P = F.getViewportHeight();
		return((T + S < O) && (R + S < P));
	},configFixedCenter:function(S, Q, T) {
		var U = Q[0],P = D.alreadySubscribed,R = B.windowResizeEvent,O = B.windowScrollEvent;
		if (U) {
			this.center();
			if (!P(this.beforeShowEvent, this.center)) {
				this.beforeShowEvent.subscribe(this.center);
			}
			if (!P(R, this.doCenterOnDOMEvent, this)) {
				R.subscribe(this.doCenterOnDOMEvent, this, true);
			}
			if (!P(O, this.doCenterOnDOMEvent, this)) {
				O.subscribe(this.doCenterOnDOMEvent, this, true);
			}
		} else {
			this.beforeShowEvent.unsubscribe(this.center);
			R.unsubscribe(this.doCenterOnDOMEvent, this);
			O.unsubscribe(this.doCenterOnDOMEvent, this);
		}
	},configHeight:function(R, P, S) {
		var O = P[0],Q = this.element;
		F.setStyle(Q, "height", O);
		this.cfg.refireEvent("iframe");
	},configAutoFillHeight:function(T, S, P) {
		var V = S[0],Q = this.cfg,U = "autofillheight",W = "height",R = Q.getProperty(U),O = this._autoFillOnHeightChange;
		Q.unsubscribeFromConfigEvent(W, O);
		G.textResizeEvent.unsubscribe(O);
		this.changeContentEvent.unsubscribe(O);
		if (R && V !== R && this[R]) {
			F.setStyle(this[R], W, "");
		}
		if (V) {
			V = I.trim(V.toLowerCase());
			Q.subscribeToConfigEvent(W, O, this[V], this);
			G.textResizeEvent.subscribe(O, this[V], this);
			this.changeContentEvent.subscribe(O, this[V], this);
			Q.setProperty(U, V, true);
		}
	},configWidth:function(R, O, S) {
		var Q = O[0],P = this.element;
		F.setStyle(P, "width", Q);
		this.cfg.refireEvent("iframe");
	},configzIndex:function(Q, O, R) {
		var S = O[0],P = this.element;
		if (!S) {
			S = F.getStyle(P, "zIndex");
			if (!S || isNaN(S)) {
				S = 0;
			}
		}
		if (this.iframe || this.cfg.getProperty("iframe") === true) {
			if (S <= 0) {
				S = 1;
			}
		}
		F.setStyle(P, "zIndex", S);
		this.cfg.setProperty("zIndex", S, true);
		if (this.iframe) {
			this.stackIframe();
		}
	},configXY:function(Q, P, R) {
		var T = P[0],O = T[0],S = T[1];
		this.cfg.setProperty("x", O);
		this.cfg.setProperty("y", S);
		this.beforeMoveEvent.fire([O,S]);
		O = this.cfg.getProperty("x");
		S = this.cfg.getProperty("y");
		this.cfg.refireEvent("iframe");
		this.moveEvent.fire([O,S]);
	},configX:function(Q, P, R) {
		var O = P[0],S = this.cfg.getProperty("y");
		this.cfg.setProperty("x", O, true);
		this.cfg.setProperty("y", S, true);
		this.beforeMoveEvent.fire([O,S]);
		O = this.cfg.getProperty("x");
		S = this.cfg.getProperty("y");
		F.setX(this.element, O, true);
		this.cfg.setProperty("xy", [O,S], true);
		this.cfg.refireEvent("iframe");
		this.moveEvent.fire([O,S]);
	},configY:function(Q, P, R) {
		var O = this.cfg.getProperty("x"),S = P[0];
		this.cfg.setProperty("x", O, true);
		this.cfg.setProperty("y", S, true);
		this.beforeMoveEvent.fire([O,S]);
		O = this.cfg.getProperty("x");
		S = this.cfg.getProperty("y");
		F.setY(this.element, S, true);
		this.cfg.setProperty("xy", [O,S], true);
		this.cfg.refireEvent("iframe");
		this.moveEvent.fire([O,S]);
	},showIframe:function() {
		var P = this.iframe,O;
		if (P) {
			O = this.element.parentNode;
			if (O != P.parentNode) {
				this._addToParent(O, P);
			}
			P.style.display = "block";
		}
	},hideIframe:function() {
		if (this.iframe) {
			this.iframe.style.display = "none";
		}
	},syncIframe:function() {
		var O = this.iframe,Q = this.element,S = B.IFRAME_OFFSET,P = (S * 2),R;
		if (O) {
			O.style.width = (Q.offsetWidth + P + "px");
			O.style.height = (Q.offsetHeight + P + "px");
			R = this.cfg.getProperty("xy");
			if (!I.isArray(R) || (isNaN(R[0]) || isNaN(R[1]))) {
				this.syncPosition();
				R = this.cfg.getProperty("xy");
			}
			F.setXY(O, [(R[0] - S),(R[1] - S)]);
		}
	},stackIframe:function() {
		if (this.iframe) {
			var O = F.getStyle(this.element, "zIndex");
			if (!YAHOO.lang.isUndefined(O) && !isNaN(O)) {
				F.setStyle(this.iframe, "zIndex", (O - 1));
			}
		}
	},configIframe:function(R, Q, S) {
		var O = Q[0];

		function T() {
			var V = this.iframe,W = this.element,X;
			if (!V) {
				if (!J) {
					J = document.createElement("iframe");
					if (this.isSecure) {
						J.src = B.IFRAME_SRC;
					}
					if (K.ie) {
						J.style.filter = "alpha(opacity=0)";
						J.frameBorder = 0;
					} else {
						J.style.opacity = "0";
					}
					J.style.position = "absolute";
					J.style.border = "none";
					J.style.margin = "0";
					J.style.padding = "0";
					J.style.display = "none";
					J.tabIndex = -1;
				}
				V = J.cloneNode(false);
				X = W.parentNode;
				var U = X || document.body;
				this._addToParent(U, V);
				this.iframe = V;
			}
			this.showIframe();
			this.syncIframe();
			this.stackIframe();
			if (!this._hasIframeEventListeners) {
				this.showEvent.subscribe(this.showIframe);
				this.hideEvent.subscribe(this.hideIframe);
				this.changeContentEvent.subscribe(this.syncIframe);
				this._hasIframeEventListeners = true;
			}
		}

		function P() {
			T.call(this);
			this.beforeShowEvent.unsubscribe(P);
			this._iframeDeferred = false;
		}

		if (O) {
			if (this.cfg.getProperty("visible")) {
				T.call(this);
			} else {
				if (!this._iframeDeferred) {
					this.beforeShowEvent.subscribe(P);
					this._iframeDeferred = true;
				}
			}
		} else {
			this.hideIframe();
			if (this._hasIframeEventListeners) {
				this.showEvent.unsubscribe(this.showIframe);
				this.hideEvent.unsubscribe(this.hideIframe);
				this.changeContentEvent.unsubscribe(this.syncIframe);
				this._hasIframeEventListeners = false;
			}
		}
	},_primeXYFromDOM:function() {
		if (YAHOO.lang.isUndefined(this.cfg.getProperty("xy"))) {
			this.syncPosition();
			this.cfg.refireEvent("xy");
			this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);
		}
	},configConstrainToViewport:function(P, O, Q) {
		var R = O[0];
		if (R) {
			if (!D.alreadySubscribed(this.beforeMoveEvent, this.enforceConstraints, this)) {
				this.beforeMoveEvent.subscribe(this.enforceConstraints, this, true);
			}
			if (!D.alreadySubscribed(this.beforeShowEvent, this._primeXYFromDOM)) {
				this.beforeShowEvent.subscribe(this._primeXYFromDOM);
			}
		} else {
			this.beforeShowEvent.unsubscribe(this._primeXYFromDOM);
			this.beforeMoveEvent.unsubscribe(this.enforceConstraints, this);
		}
	},configContext:function(T, S, P) {
		var W = S[0],Q,O,U,R,V = this.CONTEXT_TRIGGERS;
		if (W) {
			Q = W[0];
			O = W[1];
			U = W[2];
			R = W[3];
			if (V && V.length > 0) {
				R = (R || []).concat(V);
			}
			if (Q) {
				if (typeof Q == "string") {
					this.cfg.setProperty("context", [document.getElementById(Q),O,U,R], true);
				}
				if (O && U) {
					this.align(O, U);
				}
				if (this._contextTriggers) {
					this._processTriggers(this._contextTriggers, E, this._alignOnTrigger);
				}
				if (R) {
					this._processTriggers(R, H, this._alignOnTrigger);
					this._contextTriggers = R;
				}
			}
		}
	},_alignOnTrigger:function(P, O) {
		this.align();
	},_findTriggerCE:function(O) {
		var P = null;
		if (O instanceof M) {
			P = O;
		} else {
			if (B._TRIGGER_MAP[O]) {
				P = B._TRIGGER_MAP[O];
			}
		}
		return P;
	},_processTriggers:function(S, U, R) {
		var Q,T;
		for (var P = 0,O = S.length; P < O; ++P) {
			Q = S[P];
			T = this._findTriggerCE(Q);
			if (T) {
				T[U](R, this, true);
			} else {
				this[U](Q, R);
			}
		}
	},align:function(P, O) {
		var U = this.cfg.getProperty("context"),T = this,S,R,V;

		function Q(W, X) {
			switch (P) {
				case B.TOP_LEFT:
					T.moveTo(X, W);
					break;
				case B.TOP_RIGHT:
					T.moveTo((X - R.offsetWidth), W);
					break;
				case B.BOTTOM_LEFT:
					T.moveTo(X, (W - R.offsetHeight));
					break;
				case B.BOTTOM_RIGHT:
					T.moveTo((X - R.offsetWidth), (W - R.offsetHeight));
					break;
			}
		}

		if (U) {
			S = U[0];
			R = this.element;
			T = this;
			if (!P) {
				P = U[1];
			}
			if (!O) {
				O = U[2];
			}
			if (R && S) {
				V = F.getRegion(S);
				switch (O) {
					case B.TOP_LEFT:
						Q(V.top, V.left);
						break;
					case B.TOP_RIGHT:
						Q(V.top, V.right);
						break;
					case B.BOTTOM_LEFT:
						Q(V.bottom, V.left);
						break;
					case B.BOTTOM_RIGHT:
						Q(V.bottom, V.right);
						break;
				}
			}
		}
	},enforceConstraints:function(P, O, Q) {
		var S = O[0];
		var R = this.getConstrainedXY(S[0], S[1]);
		this.cfg.setProperty("x", R[0], true);
		this.cfg.setProperty("y", R[1], true);
		this.cfg.setProperty("xy", R, true);
	},getConstrainedX:function(V) {
		var S = this,O = S.element,e = O.offsetWidth,c = B.VIEWPORT_OFFSET,h = F.getViewportWidth(),d = F.getDocumentScrollLeft(),Y = (e + c < h),b = this.cfg.getProperty("context"),Q,X,j,T = false,f,W,g = d + c,P = d + h - e - c,i = V,U = {"tltr":true,"blbr":true,"brbl":true,"trtl":true};
		var Z = function() {
			var k;
			if ((S.cfg.getProperty("x") - d) > X) {
				k = (X - e);
			} else {
				k = (X + j);
			}
			S.cfg.setProperty("x", (k + d), true);
			return k;
		};
		var R = function() {
			if ((S.cfg.getProperty("x") - d) > X) {
				return(W - c);
			} else {
				return(f - c);
			}
		};
		var a = function() {
			var k = R(),l;
			if (e > k) {
				if (T) {
					Z();
				} else {
					Z();
					T = true;
					l = a();
				}
			}
			return l;
		};
		if (V < g || V > P) {
			if (Y) {
				if (this.cfg.getProperty("preventcontextoverlap") && b && U[(b[1] + b[2])]) {
					Q = b[0];
					X = F.getX(Q) - d;
					j = Q.offsetWidth;
					f = X;
					W = (h - (X + j));
					a();
					i = this.cfg.getProperty("x");
				} else {
					if (V < g) {
						i = g;
					} else {
						if (V > P) {
							i = P;
						}
					}
				}
			} else {
				i = c + d;
			}
		}
		return i;
	},getConstrainedY:function(Z) {
		var W = this,P = W.element,i = P.offsetHeight,h = B.VIEWPORT_OFFSET,d = F.getViewportHeight(),g = F.getDocumentScrollTop(),e = (i + h < d),f = this.cfg.getProperty("context"),U,a,b,X = false,V,Q,c = g + h,S = g + d - i - h,O = Z,Y = {"trbr":true,"tlbl":true,"bltl":true,"brtr":true};
		var T = function() {
			var k;
			if ((W.cfg.getProperty("y") - g) > a) {
				k = (a - i);
			} else {
				k = (a + b);
			}
			W.cfg.setProperty("y", (k + g), true);
			return k;
		};
		var R = function() {
			if ((W.cfg.getProperty("y") - g) > a) {
				return(Q - h);
			} else {
				return(V - h);
			}
		};
		var j = function() {
			var l = R(),k;
			if (i > l) {
				if (X) {
					T();
				} else {
					T();
					X = true;
					k = j();
				}
			}
			return k;
		};
		if (Z < c || Z > S) {
			if (e) {
				if (this.cfg.getProperty("preventcontextoverlap") && f && Y[(f[1] + f[2])]) {
					U = f[0];
					b = U.offsetHeight;
					a = (F.getY(U) - g);
					V = a;
					Q = (d - (a + b));
					j();
					O = W.cfg.getProperty("y");
				} else {
					if (Z < c) {
						O = c;
					} else {
						if (Z > S) {
							O = S;
						}
					}
				}
			} else {
				O = h + g;
			}
		}
		return O;
	},getConstrainedXY:function(O, P) {
		return[this.getConstrainedX(O),this.getConstrainedY(P)];
	},center:function() {
		var R = B.VIEWPORT_OFFSET,S = this.element.offsetWidth,Q = this.element.offsetHeight,P = F.getViewportWidth(),T = F.getViewportHeight(),O,U;
		if (S < P) {
			O = (P / 2) - (S / 2) + F.getDocumentScrollLeft();
		} else {
			O = R + F.getDocumentScrollLeft();
		}
		if (Q < T) {
			U = (T / 2) - (Q / 2) + F.getDocumentScrollTop();
		} else {
			U = R + F.getDocumentScrollTop();
		}
		this.cfg.setProperty("xy", [parseInt(O, 10),parseInt(U, 10)]);
		this.cfg.refireEvent("iframe");
		if (K.webkit) {
			this.forceContainerRedraw();
		}
	},syncPosition:function() {
		var O = F.getXY(this.element);
		this.cfg.setProperty("x", O[0], true);
		this.cfg.setProperty("y", O[1], true);
		this.cfg.setProperty("xy", O, true);
	},onDomResize:function(Q, P) {
		var O = this;
		B.superclass.onDomResize.call(this, Q, P);
		setTimeout(function() {
			O.syncPosition();
			O.cfg.refireEvent("iframe");
			O.cfg.refireEvent("context");
		}, 0);
	},_getComputedHeight:(function() {
		if (document.defaultView && document.defaultView.getComputedStyle) {
			return function(P) {
				var O = null;
				if (P.ownerDocument && P.ownerDocument.defaultView) {
					var Q = P.ownerDocument.defaultView.getComputedStyle(P, "");
					if (Q) {
						O = parseInt(Q.height, 10);
					}
				}
				return(I.isNumber(O)) ? O : null;
			};
		} else {
			return function(P) {
				var O = null;
				if (P.style.pixelHeight) {
					O = P.style.pixelHeight;
				}
				return(I.isNumber(O)) ? O : null;
			};
		}
	})(),_validateAutoFillHeight:function(O) {
		return(!O) || (I.isString(O) && B.STD_MOD_RE.test(O));
	},_autoFillOnHeightChange:function(R, P, Q) {
		var O = this.cfg.getProperty("height");
		if ((O && O !== "auto") || (O === 0)) {
			this.fillHeight(Q);
		}
	},_getPreciseHeight:function(P) {
		var O = P.offsetHeight;
		if (P.getBoundingClientRect) {
			var Q = P.getBoundingClientRect();
			O = Q.bottom - Q.top;
		}
		return O;
	},fillHeight:function(R) {
		if (R) {
			var P = this.innerElement || this.element,O = [this.header,this.body,this.footer],V,W = 0,X = 0,T = 0,Q = false;
			for (var U = 0,S = O.length; U < S; U++) {
				V = O[U];
				if (V) {
					if (R !== V) {
						X += this._getPreciseHeight(V);
					} else {
						Q = true;
					}
				}
			}
			if (Q) {
				if (K.ie || K.opera) {
					F.setStyle(R, "height", 0 + "px");
				}
				W = this._getComputedHeight(P);
				if (W === null) {
					F.addClass(P, "yui-override-padding");
					W = P.clientHeight;
					F.removeClass(P, "yui-override-padding");
				}
				T = Math.max(W - X, 0);
				F.setStyle(R, "height", T + "px");
				if (R.offsetHeight != T) {
					T = Math.max(T - (R.offsetHeight - T), 0);
				}
				F.setStyle(R, "height", T + "px");
			}
		}
	},bringToTop:function() {
		var S = [],R = this.element;

		function V(Z, Y) {
			var b = F.getStyle(Z, "zIndex"),a = F.getStyle(Y, "zIndex"),X = (!b || isNaN(b)) ? 0 : parseInt(b, 10),W = (!a || isNaN(a)) ? 0 : parseInt(a, 10);
			if (X > W) {
				return -1;
			} else {
				if (X < W) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		function Q(Y) {
			var X = F.hasClass(Y, B.CSS_OVERLAY),W = YAHOO.widget.Panel;
			if (X && !F.isAncestor(R, Y)) {
				if (W && F.hasClass(Y, W.CSS_PANEL)) {
					S[S.length] = Y.parentNode;
				} else {
					S[S.length] = Y;
				}
			}
		}

		F.getElementsBy(Q, "DIV", document.body);
		S.sort(V);
		var O = S[0],U;
		if (O) {
			U = F.getStyle(O, "zIndex");
			if (!isNaN(U)) {
				var T = false;
				if (O != R) {
					T = true;
				} else {
					if (S.length > 1) {
						var P = F.getStyle(S[1], "zIndex");
						if (!isNaN(P) && (U == P)) {
							T = true;
						}
					}
				}
				if (T) {
					this.cfg.setProperty("zindex", (parseInt(U, 10) + 2));
				}
			}
		}
	},destroy:function() {
		if (this.iframe) {
			this.iframe.parentNode.removeChild(this.iframe);
		}
		this.iframe = null;
		B.windowResizeEvent.unsubscribe(this.doCenterOnDOMEvent, this);
		B.windowScrollEvent.unsubscribe(this.doCenterOnDOMEvent, this);
		G.textResizeEvent.unsubscribe(this._autoFillOnHeightChange);
		B.superclass.destroy.call(this);
	},forceContainerRedraw:function() {
		var O = this;
		F.addClass(O.element, "yui-force-redraw");
		setTimeout(function() {
			F.removeClass(O.element, "yui-force-redraw");
		}, 0);
	},toString:function() {
		return"Overlay " + this.id;
	}});
}());
(function() {
	YAHOO.widget.OverlayManager = function(G) {
		this.init(G);
	};
	var D = YAHOO.widget.Overlay,C = YAHOO.util.Event,E = YAHOO.util.Dom,B = YAHOO.util.Config,F = YAHOO.util.CustomEvent,A = YAHOO.widget.OverlayManager;
	A.CSS_FOCUSED = "focused";
	A.prototype = {constructor:A,overlays:null,initDefaultConfig:function() {
		this.cfg.addProperty("overlays", {suppressEvent:true});
		this.cfg.addProperty("focusevent", {value:"mousedown"});
	},init:function(I) {
		this.cfg = new B(this);
		this.initDefaultConfig();
		if (I) {
			this.cfg.applyConfig(I, true);
		}
		this.cfg.fireQueue();
		var H = null;
		this.getActive = function() {
			return H;
		};
		this.focus = function(J) {
			var K = this.find(J);
			if (K) {
				K.focus();
			}
		};
		this.remove = function(K) {
			var M = this.find(K),J;
			if (M) {
				if (H == M) {
					H = null;
				}
				var L = (M.element === null && M.cfg === null) ? true : false;
				if (!L) {
					J = E.getStyle(M.element, "zIndex");
					M.cfg.setProperty("zIndex", -1000, true);
				}
				this.overlays.sort(this.compareZIndexDesc);
				this.overlays = this.overlays.slice(0, (this.overlays.length - 1));
				M.hideEvent.unsubscribe(M.blur);
				M.destroyEvent.unsubscribe(this._onOverlayDestroy, M);
				M.focusEvent.unsubscribe(this._onOverlayFocusHandler, M);
				M.blurEvent.unsubscribe(this._onOverlayBlurHandler, M);
				if (!L) {
					C.removeListener(M.element, this.cfg.getProperty("focusevent"), this._onOverlayElementFocus);
					M.cfg.setProperty("zIndex", J, true);
					M.cfg.setProperty("manager", null);
				}
				if (M.focusEvent._managed) {
					M.focusEvent = null;
				}
				if (M.blurEvent._managed) {
					M.blurEvent = null;
				}
				if (M.focus._managed) {
					M.focus = null;
				}
				if (M.blur._managed) {
					M.blur = null;
				}
			}
		};
		this.blurAll = function() {
			var K = this.overlays.length,J;
			if (K > 0) {
				J = K - 1;
				do{
					this.overlays[J].blur();
				} while (J--);
			}
		};
		this._manageBlur = function(J) {
			var K = false;
			if (H == J) {
				E.removeClass(H.element, A.CSS_FOCUSED);
				H = null;
				K = true;
			}
			return K;
		};
		this._manageFocus = function(J) {
			var K = false;
			if (H != J) {
				if (H) {
					H.blur();
				}
				H = J;
				this.bringToTop(H);
				E.addClass(H.element, A.CSS_FOCUSED);
				K = true;
			}
			return K;
		};
		var G = this.cfg.getProperty("overlays");
		if (!this.overlays) {
			this.overlays = [];
		}
		if (G) {
			this.register(G);
			this.overlays.sort(this.compareZIndexDesc);
		}
	},_onOverlayElementFocus:function(I) {
		var G = C.getTarget(I),H = this.close;
		if (H && (G == H || E.isAncestor(H, G))) {
			this.blur();
		} else {
			this.focus();
		}
	},_onOverlayDestroy:function(H, G, I) {
		this.remove(I);
	},_onOverlayFocusHandler:function(H, G, I) {
		this._manageFocus(I);
	},_onOverlayBlurHandler:function(H, G, I) {
		this._manageBlur(I);
	},_bindFocus:function(G) {
		var H = this;
		if (!G.focusEvent) {
			G.focusEvent = G.createEvent("focus");
			G.focusEvent.signature = F.LIST;
			G.focusEvent._managed = true;
		} else {
			G.focusEvent.subscribe(H._onOverlayFocusHandler, G, H);
		}
		if (!G.focus) {
			C.on(G.element, H.cfg.getProperty("focusevent"), H._onOverlayElementFocus, null, G);
			G.focus = function() {
				if (H._manageFocus(this)) {
					if (this.cfg.getProperty("visible") && this.focusFirst) {
						this.focusFirst();
					}
					this.focusEvent.fire();
				}
			};
			G.focus._managed = true;
		}
	},_bindBlur:function(G) {
		var H = this;
		if (!G.blurEvent) {
			G.blurEvent = G.createEvent("blur");
			G.blurEvent.signature = F.LIST;
			G.focusEvent._managed = true;
		} else {
			G.blurEvent.subscribe(H._onOverlayBlurHandler, G, H);
		}
		if (!G.blur) {
			G.blur = function() {
				if (H._manageBlur(this)) {
					this.blurEvent.fire();
				}
			};
			G.blur._managed = true;
		}
		G.hideEvent.subscribe(G.blur);
	},_bindDestroy:function(G) {
		var H = this;
		G.destroyEvent.subscribe(H._onOverlayDestroy, G, H);
	},_syncZIndex:function(G) {
		var H = E.getStyle(G.element, "zIndex");
		if (!isNaN(H)) {
			G.cfg.setProperty("zIndex", parseInt(H, 10));
		} else {
			G.cfg.setProperty("zIndex", 0);
		}
	},register:function(G) {
		var J = false,H,I;
		if (G instanceof D) {
			G.cfg.addProperty("manager", {value:this});
			this._bindFocus(G);
			this._bindBlur(G);
			this._bindDestroy(G);
			this._syncZIndex(G);
			this.overlays.push(G);
			this.bringToTop(G);
			J = true;
		} else {
			if (G instanceof Array) {
				for (H = 0,I = G.length; H < I; H++) {
					J = this.register(G[H]) || J;
				}
			}
		}
		return J;
	},bringToTop:function(M) {
		var I = this.find(M),L,G,J;
		if (I) {
			J = this.overlays;
			J.sort(this.compareZIndexDesc);
			G = J[0];
			if (G) {
				L = E.getStyle(G.element, "zIndex");
				if (!isNaN(L)) {
					var K = false;
					if (G !== I) {
						K = true;
					} else {
						if (J.length > 1) {
							var H = E.getStyle(J[1].element, "zIndex");
							if (!isNaN(H) && (L == H)) {
								K = true;
							}
						}
					}
					if (K) {
						I.cfg.setProperty("zindex", (parseInt(L, 10) + 2));
					}
				}
				J.sort(this.compareZIndexDesc);
			}
		}
	},find:function(G) {
		var K = G instanceof D,I = this.overlays,M = I.length,J = null,L,H;
		if (K || typeof G == "string") {
			for (H = M - 1; H >= 0; H--) {
				L = I[H];
				if ((K && (L === G)) || (L.id == G)) {
					J = L;
					break;
				}
			}
		}
		return J;
	},compareZIndexDesc:function(J, I) {
		var H = (J.cfg) ? J.cfg.getProperty("zIndex") : null,G = (I.cfg) ? I.cfg.getProperty("zIndex") : null;
		if (H === null && G === null) {
			return 0;
		} else {
			if (H === null) {
				return 1;
			} else {
				if (G === null) {
					return -1;
				} else {
					if (H > G) {
						return -1;
					} else {
						if (H < G) {
							return 1;
						} else {
							return 0;
						}
					}
				}
			}
		}
	},showAll:function() {
		var H = this.overlays,I = H.length,G;
		for (G = I - 1; G >= 0; G--) {
			H[G].show();
		}
	},hideAll:function() {
		var H = this.overlays,I = H.length,G;
		for (G = I - 1; G >= 0; G--) {
			H[G].hide();
		}
	},toString:function() {
		return"OverlayManager";
	}};
}());
(function() {
	YAHOO.widget.Tooltip = function(P, O) {
		YAHOO.widget.Tooltip.superclass.constructor.call(this, P, O);
	};
	var E = YAHOO.lang,N = YAHOO.util.Event,M = YAHOO.util.CustomEvent,C = YAHOO.util.Dom,J = YAHOO.widget.Tooltip,H = YAHOO.env.ua,G = (H.ie && (H.ie <= 6 || document.compatMode == "BackCompat")),F,I = {"PREVENT_OVERLAP":{key:"preventoverlap",value:true,validator:E.isBoolean,supercedes:["x","y","xy"]},"SHOW_DELAY":{key:"showdelay",value:200,validator:E.isNumber},"AUTO_DISMISS_DELAY":{key:"autodismissdelay",value:5000,validator:E.isNumber},"HIDE_DELAY":{key:"hidedelay",value:250,validator:E.isNumber},"TEXT":{key:"text",suppressEvent:true},"CONTAINER":{key:"container"},"DISABLED":{key:"disabled",value:false,suppressEvent:true}},A = {"CONTEXT_MOUSE_OVER":"contextMouseOver","CONTEXT_MOUSE_OUT":"contextMouseOut","CONTEXT_TRIGGER":"contextTrigger"};
	J.CSS_TOOLTIP = "yui-tt";
	function K(Q, O) {
		var P = this.cfg,R = P.getProperty("width");
		if (R == O) {
			P.setProperty("width", Q);
		}
	}

	function D(P, O) {
		if ("_originalWidth" in this) {
			K.call(this, this._originalWidth, this._forcedWidth);
		}
		var Q = document.body,U = this.cfg,T = U.getProperty("width"),R,S;
		if ((!T || T == "auto") && (U.getProperty("container") != Q || U.getProperty("x") >= C.getViewportWidth() || U.getProperty("y") >= C.getViewportHeight())) {
			S = this.element.cloneNode(true);
			S.style.visibility = "hidden";
			S.style.top = "0px";
			S.style.left = "0px";
			Q.appendChild(S);
			R = (S.offsetWidth + "px");
			Q.removeChild(S);
			S = null;
			U.setProperty("width", R);
			U.refireEvent("xy");
			this._originalWidth = T || "";
			this._forcedWidth = R;
		}
	}

	function B(P, O, Q) {
		this.render(Q);
	}

	function L() {
		N.onDOMReady(B, this.cfg.getProperty("container"), this);
	}

	YAHOO.extend(J, YAHOO.widget.Overlay, {init:function(P, O) {
		J.superclass.init.call(this, P);
		this.beforeInitEvent.fire(J);
		C.addClass(this.element, J.CSS_TOOLTIP);
		if (O) {
			this.cfg.applyConfig(O, true);
		}
		this.cfg.queueProperty("visible", false);
		this.cfg.queueProperty("constraintoviewport", true);
		this.setBody("");
		this.subscribe("changeContent", D);
		this.subscribe("init", L);
		this.subscribe("render", this.onRender);
		this.initEvent.fire(J);
	},initEvents:function() {
		J.superclass.initEvents.call(this);
		var O = M.LIST;
		this.contextMouseOverEvent = this.createEvent(A.CONTEXT_MOUSE_OVER);
		this.contextMouseOverEvent.signature = O;
		this.contextMouseOutEvent = this.createEvent(A.CONTEXT_MOUSE_OUT);
		this.contextMouseOutEvent.signature = O;
		this.contextTriggerEvent = this.createEvent(A.CONTEXT_TRIGGER);
		this.contextTriggerEvent.signature = O;
	},initDefaultConfig:function() {
		J.superclass.initDefaultConfig.call(this);
		this.cfg.addProperty(I.PREVENT_OVERLAP.key, {value:I.PREVENT_OVERLAP.value,validator:I.PREVENT_OVERLAP.validator,supercedes:I.PREVENT_OVERLAP.supercedes});
		this.cfg.addProperty(I.SHOW_DELAY.key, {handler:this.configShowDelay,value:200,validator:I.SHOW_DELAY.validator});
		this.cfg.addProperty(I.AUTO_DISMISS_DELAY.key, {handler:this.configAutoDismissDelay,value:I.AUTO_DISMISS_DELAY.value,validator:I.AUTO_DISMISS_DELAY.validator});
		this.cfg.addProperty(I.HIDE_DELAY.key, {handler:this.configHideDelay,value:I.HIDE_DELAY.value,validator:I.HIDE_DELAY.validator});
		this.cfg.addProperty(I.TEXT.key, {handler:this.configText,suppressEvent:I.TEXT.suppressEvent});
		this.cfg.addProperty(I.CONTAINER.key, {handler:this.configContainer,value:document.body});
		this.cfg.addProperty(I.DISABLED.key, {handler:this.configContainer,value:I.DISABLED.value,supressEvent:I.DISABLED.suppressEvent});
	},configText:function(P, O, Q) {
		var R = O[0];
		if (R) {
			this.setBody(R);
		}
	},configContainer:function(Q, P, R) {
		var O = P[0];
		if (typeof O == "string") {
			this.cfg.setProperty("container", document.getElementById(O), true);
		}
	},_removeEventListeners:function() {
		var R = this._context,O,Q,P;
		if (R) {
			O = R.length;
			if (O > 0) {
				P = O - 1;
				do{
					Q = R[P];
					N.removeListener(Q, "mouseover", this.onContextMouseOver);
					N.removeListener(Q, "mousemove", this.onContextMouseMove);
					N.removeListener(Q, "mouseout", this.onContextMouseOut);
				} while (P--);
			}
		}
	},configContext:function(T, P, U) {
		var S = P[0],V,O,R,Q;
		if (S) {
			if (!(S instanceof Array)) {
				if (typeof S == "string") {
					this.cfg.setProperty("context", [document.getElementById(S)], true);
				} else {
					this.cfg.setProperty("context", [S], true);
				}
				S = this.cfg.getProperty("context");
			}
			this._removeEventListeners();
			this._context = S;
			V = this._context;
			if (V) {
				O = V.length;
				if (O > 0) {
					Q = O - 1;
					do{
						R = V[Q];
						N.on(R, "mouseover", this.onContextMouseOver, this);
						N.on(R, "mousemove", this.onContextMouseMove, this);
						N.on(R, "mouseout", this.onContextMouseOut, this);
					} while (Q--);
				}
			}
		}
	},onContextMouseMove:function(P, O) {
		O.pageX = N.getPageX(P);
		O.pageY = N.getPageY(P);
	},onContextMouseOver:function(Q, P) {
		var O = this;
		if (O.title) {
			P._tempTitle = O.title;
			O.title = "";
		}
		if (P.fireEvent("contextMouseOver", O, Q) !== false && !P.cfg.getProperty("disabled")) {
			if (P.hideProcId) {
				clearTimeout(P.hideProcId);
				P.hideProcId = null;
			}
			N.on(O, "mousemove", P.onContextMouseMove, P);
			P.showProcId = P.doShow(Q, O);
		}
	},onContextMouseOut:function(Q, P) {
		var O = this;
		if (P._tempTitle) {
			O.title = P._tempTitle;
			P._tempTitle = null;
		}
		if (P.showProcId) {
			clearTimeout(P.showProcId);
			P.showProcId = null;
		}
		if (P.hideProcId) {
			clearTimeout(P.hideProcId);
			P.hideProcId = null;
		}
		P.fireEvent("contextMouseOut", O, Q);
		P.hideProcId = setTimeout(function() {
			P.hide();
		}, P.cfg.getProperty("hidedelay"));
	},doShow:function(Q, O) {
		var R = 25,P = this;
		if (H.opera && O.tagName && O.tagName.toUpperCase() == "A") {
			R += 12;
		}
		return setTimeout(function() {
			var S = P.cfg.getProperty("text");
			if (P._tempTitle && (S === "" || YAHOO.lang.isUndefined(S) || YAHOO.lang.isNull(S))) {
				P.setBody(P._tempTitle);
			} else {
				P.cfg.refireEvent("text");
			}
			P.moveTo(P.pageX, P.pageY + R);
			if (P.cfg.getProperty("preventoverlap")) {
				P.preventOverlap(P.pageX, P.pageY);
			}
			N.removeListener(O, "mousemove", P.onContextMouseMove);
			P.contextTriggerEvent.fire(O);
			P.show();
			P.hideProcId = P.doHide();
		}, this.cfg.getProperty("showdelay"));
	},doHide:function() {
		var O = this;
		return setTimeout(function() {
			O.hide();
		}, this.cfg.getProperty("autodismissdelay"));
	},preventOverlap:function(S, R) {
		var O = this.element.offsetHeight,Q = new YAHOO.util.Point(S, R),P = C.getRegion(this.element);
		P.top -= 5;
		P.left -= 5;
		P.right += 5;
		P.bottom += 5;
		if (P.contains(Q)) {
			this.cfg.setProperty("y", (R - O - 5));
		}
	},onRender:function(S, R) {
		function T() {
			var W = this.element,V = this.underlay;
			if (V) {
				V.style.width = (W.offsetWidth + 6) + "px";
				V.style.height = (W.offsetHeight + 1) + "px";
			}
		}

		function P() {
			C.addClass(this.underlay, "yui-tt-shadow-visible");
			if (H.ie) {
				this.forceUnderlayRedraw();
			}
		}

		function O() {
			C.removeClass(this.underlay, "yui-tt-shadow-visible");
		}

		function U() {
			var X = this.underlay,W,V,Z,Y;
			if (!X) {
				W = this.element;
				V = YAHOO.widget.Module;
				Z = H.ie;
				Y = this;
				if (!F) {
					F = document.createElement("div");
					F.className = "yui-tt-shadow";
				}
				X = F.cloneNode(false);
				W.appendChild(X);
				this.underlay = X;
				this._shadow = this.underlay;
				P.call(this);
				this.subscribe("beforeShow", P);
				this.subscribe("hide", O);
				if (G) {
					window.setTimeout(function() {
						T.call(Y);
					}, 0);
					this.cfg.subscribeToConfigEvent("width", T);
					this.cfg.subscribeToConfigEvent("height", T);
					this.subscribe("changeContent", T);
					V.textResizeEvent.subscribe(T, this, true);
					this.subscribe("destroy", function() {
						V.textResizeEvent.unsubscribe(T, this);
					});
				}
			}
		}

		function Q() {
			U.call(this);
			this.unsubscribe("beforeShow", Q);
		}

		if (this.cfg.getProperty("visible")) {
			U.call(this);
		} else {
			this.subscribe("beforeShow", Q);
		}
	},forceUnderlayRedraw:function() {
		var O = this;
		C.addClass(O.underlay, "yui-force-redraw");
		setTimeout(function() {
			C.removeClass(O.underlay, "yui-force-redraw");
		}, 0);
	},destroy:function() {
		this._removeEventListeners();
		J.superclass.destroy.call(this);
	},toString:function() {
		return"Tooltip " + this.id;
	}});
}());
(function() {
	YAHOO.widget.Panel = function(V, U) {
		YAHOO.widget.Panel.superclass.constructor.call(this, V, U);
	};
	var S = null;
	var E = YAHOO.lang,F = YAHOO.util,A = F.Dom,T = F.Event,M = F.CustomEvent,K = YAHOO.util.KeyListener,I = F.Config,H = YAHOO.widget.Overlay,O = YAHOO.widget.Panel,L = YAHOO.env.ua,P = (L.ie && (L.ie <= 6 || document.compatMode == "BackCompat")),G,Q,C,D = {"SHOW_MASK":"showMask","HIDE_MASK":"hideMask","DRAG":"drag"},N = {"CLOSE":{key:"close",value:true,validator:E.isBoolean,supercedes:["visible"]},"DRAGGABLE":{key:"draggable",value:(F.DD ? true : false),validator:E.isBoolean,supercedes:["visible"]},"DRAG_ONLY":{key:"dragonly",value:false,validator:E.isBoolean,supercedes:["draggable"]},"UNDERLAY":{key:"underlay",value:"shadow",supercedes:["visible"]},"MODAL":{key:"modal",value:false,validator:E.isBoolean,supercedes:["visible","zindex"]},"KEY_LISTENERS":{key:"keylisteners",suppressEvent:true,supercedes:["visible"]},"STRINGS":{key:"strings",supercedes:["close"],validator:E.isObject,value:{close:"Close"}}};
	O.CSS_PANEL = "yui-panel";
	O.CSS_PANEL_CONTAINER = "yui-panel-container";
	O.FOCUSABLE = ["a","button","select","textarea","input","iframe"];
	function J(V, U) {
		if (!this.header && this.cfg.getProperty("draggable")) {
			this.setHeader("&#160;");
		}
	}

	function R(V, U, W) {
		var Z = W[0],X = W[1],Y = this.cfg,a = Y.getProperty("width");
		if (a == X) {
			Y.setProperty("width", Z);
		}
		this.unsubscribe("hide", R, W);
	}

	function B(V, U) {
		var Y,X,W;
		if (P) {
			Y = this.cfg;
			X = Y.getProperty("width");
			if (!X || X == "auto") {
				W = (this.element.offsetWidth + "px");
				Y.setProperty("width", W);
				this.subscribe("hide", R, [(X || ""),W]);
			}
		}
	}

	YAHOO.extend(O, H, {init:function(V, U) {
		O.superclass.init.call(this, V);
		this.beforeInitEvent.fire(O);
		A.addClass(this.element, O.CSS_PANEL);
		this.buildWrapper();
		if (U) {
			this.cfg.applyConfig(U, true);
		}
		this.subscribe("showMask", this._addFocusHandlers);
		this.subscribe("hideMask", this._removeFocusHandlers);
		this.subscribe("beforeRender", J);
		this.subscribe("render", function() {
			this.setFirstLastFocusable();
			this.subscribe("changeContent", this.setFirstLastFocusable);
		});
		this.subscribe("show", this.focusFirst);
		this.initEvent.fire(O);
	},_onElementFocus:function(Z) {
		if (S === this) {
			var Y = T.getTarget(Z),X = document.documentElement,V = (Y !== X && Y !== window);
			if (V && Y !== this.element && Y !== this.mask && !A.isAncestor(this.element, Y)) {
				try {
					if (this.firstElement) {
						this.firstElement.focus();
					} else {
						if (this._modalFocus) {
							this._modalFocus.focus();
						} else {
							this.innerElement.focus();
						}
					}
				} catch(W) {
					try {
						if (V && Y !== document.body) {
							Y.blur();
						}
					} catch(U) {
					}
				}
			}
		}
	},_addFocusHandlers:function(V, U) {
		if (!this.firstElement) {
			if (L.webkit || L.opera) {
				if (!this._modalFocus) {
					this._createHiddenFocusElement();
				}
			} else {
				this.innerElement.tabIndex = 0;
			}
		}
		this.setTabLoop(this.firstElement, this.lastElement);
		T.onFocus(document.documentElement, this._onElementFocus, this, true);
		S = this;
	},_createHiddenFocusElement:function() {
		var U = document.createElement("button");
		U.style.height = "1px";
		U.style.width = "1px";
		U.style.position = "absolute";
		U.style.left = "-10000em";
		U.style.opacity = 0;
		U.tabIndex = -1;
		this.innerElement.appendChild(U);
		this._modalFocus = U;
	},_removeFocusHandlers:function(V, U) {
		T.removeFocusListener(document.documentElement, this._onElementFocus, this);
		if (S == this) {
			S = null;
		}
	},focusFirst:function(W, U, Y) {
		var V = this.firstElement;
		if (U && U[1]) {
			T.stopEvent(U[1]);
		}
		if (V) {
			try {
				V.focus();
			} catch(X) {
			}
		}
	},focusLast:function(W, U, Y) {
		var V = this.lastElement;
		if (U && U[1]) {
			T.stopEvent(U[1]);
		}
		if (V) {
			try {
				V.focus();
			} catch(X) {
			}
		}
	},setTabLoop:function(X, Z) {
		var V = this.preventBackTab,W = this.preventTabOut,U = this.showEvent,Y = this.hideEvent;
		if (V) {
			V.disable();
			U.unsubscribe(V.enable, V);
			Y.unsubscribe(V.disable, V);
			V = this.preventBackTab = null;
		}
		if (W) {
			W.disable();
			U.unsubscribe(W.enable, W);
			Y.unsubscribe(W.disable, W);
			W = this.preventTabOut = null;
		}
		if (X) {
			this.preventBackTab = new K(X, {shift:true,keys:9}, {fn:this.focusLast,scope:this,correctScope:true});
			V = this.preventBackTab;
			U.subscribe(V.enable, V, true);
			Y.subscribe(V.disable, V, true);
		}
		if (Z) {
			this.preventTabOut = new K(Z, {shift:false,keys:9}, {fn:this.focusFirst,scope:this,correctScope:true});
			W = this.preventTabOut;
			U.subscribe(W.enable, W, true);
			Y.subscribe(W.disable, W, true);
		}
	},getFocusableElements:function(U) {
		U = U || this.innerElement;
		var X = {};
		for (var W = 0; W < O.FOCUSABLE.length; W++) {
			X[O.FOCUSABLE[W]] = true;
		}
		function V(Y) {
			if (Y.focus && Y.type !== "hidden" && !Y.disabled && X[Y.tagName.toLowerCase()]) {
				return true;
			}
			return false;
		}

		return A.getElementsBy(V, null, U);
	},setFirstLastFocusable:function() {
		this.firstElement = null;
		this.lastElement = null;
		var U = this.getFocusableElements();
		this.focusableElements = U;
		if (U.length > 0) {
			this.firstElement = U[0];
			this.lastElement = U[U.length - 1];
		}
		if (this.cfg.getProperty("modal")) {
			this.setTabLoop(this.firstElement, this.lastElement);
		}
	},initEvents:function() {
		O.superclass.initEvents.call(this);
		var U = M.LIST;
		this.showMaskEvent = this.createEvent(D.SHOW_MASK);
		this.showMaskEvent.signature = U;
		this.hideMaskEvent = this.createEvent(D.HIDE_MASK);
		this.hideMaskEvent.signature = U;
		this.dragEvent = this.createEvent(D.DRAG);
		this.dragEvent.signature = U;
	},initDefaultConfig:function() {
		O.superclass.initDefaultConfig.call(this);
		this.cfg.addProperty(N.CLOSE.key, {handler:this.configClose,value:N.CLOSE.value,validator:N.CLOSE.validator,supercedes:N.CLOSE.supercedes});
		this.cfg.addProperty(N.DRAGGABLE.key, {handler:this.configDraggable,value:(F.DD) ? true : false,validator:N.DRAGGABLE.validator,supercedes:N.DRAGGABLE.supercedes});
		this.cfg.addProperty(N.DRAG_ONLY.key, {value:N.DRAG_ONLY.value,validator:N.DRAG_ONLY.validator,supercedes:N.DRAG_ONLY.supercedes});
		this.cfg.addProperty(N.UNDERLAY.key, {handler:this.configUnderlay,value:N.UNDERLAY.value,supercedes:N.UNDERLAY.supercedes});
		this.cfg.addProperty(N.MODAL.key, {handler:this.configModal,value:N.MODAL.value,validator:N.MODAL.validator,supercedes:N.MODAL.supercedes});
		this.cfg.addProperty(N.KEY_LISTENERS.key, {handler:this.configKeyListeners,suppressEvent:N.KEY_LISTENERS.suppressEvent,supercedes:N.KEY_LISTENERS.supercedes});
		this.cfg.addProperty(N.STRINGS.key, {value:N.STRINGS.value,handler:this.configStrings,validator:N.STRINGS.validator,supercedes:N.STRINGS.supercedes});
	},configClose:function(X, V, Y) {
		var Z = V[0],W = this.close,U = this.cfg.getProperty("strings");
		if (Z) {
			if (!W) {
				if (!C) {
					C = document.createElement("a");
					C.className = "container-close";
					C.href = "#";
				}
				W = C.cloneNode(true);
				this.innerElement.appendChild(W);
				W.innerHTML = (U && U.close) ? U.close : "&#160;";
				T.on(W, "click", this._doClose, this, true);
				this.close = W;
			} else {
				W.style.display = "block";
			}
		} else {
			if (W) {
				W.style.display = "none";
			}
		}
	},_doClose:function(U) {
		T.preventDefault(U);
		this.hide();
	},configDraggable:function(V, U, W) {
		var X = U[0];
		if (X) {
			if (!F.DD) {
				this.cfg.setProperty("draggable", false);
				return;
			}
			if (this.header) {
				A.setStyle(this.header, "cursor", "move");
				this.registerDragDrop();
			}
			this.subscribe("beforeShow", B);
		} else {
			if (this.dd) {
				this.dd.unreg();
			}
			if (this.header) {
				A.setStyle(this.header, "cursor", "auto");
			}
			this.unsubscribe("beforeShow", B);
		}
	},configUnderlay:function(d, c, Z) {
		var b = (this.platform == "mac" && L.gecko),e = c[0].toLowerCase(),V = this.underlay,W = this.element;

		function X() {
			var f = false;
			if (!V) {
				if (!Q) {
					Q = document.createElement("div");
					Q.className = "underlay";
				}
				V = Q.cloneNode(false);
				this.element.appendChild(V);
				this.underlay = V;
				if (P) {
					this.sizeUnderlay();
					this.cfg.subscribeToConfigEvent("width", this.sizeUnderlay);
					this.cfg.subscribeToConfigEvent("height", this.sizeUnderlay);
					this.changeContentEvent.subscribe(this.sizeUnderlay);
					YAHOO.widget.Module.textResizeEvent.subscribe(this.sizeUnderlay, this, true);
				}
				if (L.webkit && L.webkit < 420) {
					this.changeContentEvent.subscribe(this.forceUnderlayRedraw);
				}
				f = true;
			}
		}

		function a() {
			var f = X.call(this);
			if (!f && P) {
				this.sizeUnderlay();
			}
			this._underlayDeferred = false;
			this.beforeShowEvent.unsubscribe(a);
		}

		function Y() {
			if (this._underlayDeferred) {
				this.beforeShowEvent.unsubscribe(a);
				this._underlayDeferred = false;
			}
			if (V) {
				this.cfg.unsubscribeFromConfigEvent("width", this.sizeUnderlay);
				this.cfg.unsubscribeFromConfigEvent("height", this.sizeUnderlay);
				this.changeContentEvent.unsubscribe(this.sizeUnderlay);
				this.changeContentEvent.unsubscribe(this.forceUnderlayRedraw);
				YAHOO.widget.Module.textResizeEvent.unsubscribe(this.sizeUnderlay, this, true);
				this.element.removeChild(V);
				this.underlay = null;
			}
		}

		switch (e) {
			case"shadow":
				A.removeClass(W, "matte");
				A.addClass(W, "shadow");
				break;
			case"matte":
				if (!b) {
					Y.call(this);
				}
				A.removeClass(W, "shadow");
				A.addClass(W, "matte");
				break;
			default:
				if (!b) {
					Y.call(this);
				}
				A.removeClass(W, "shadow");
				A.removeClass(W, "matte");
				break;
		}
		if ((e == "shadow") || (b && !V)) {
			if (this.cfg.getProperty("visible")) {
				var U = X.call(this);
				if (!U && P) {
					this.sizeUnderlay();
				}
			} else {
				if (!this._underlayDeferred) {
					this.beforeShowEvent.subscribe(a);
					this._underlayDeferred = true;
				}
			}
		}
	},configModal:function(V, U, X) {
		var W = U[0];
		if (W) {
			if (!this._hasModalityEventListeners) {
				this.subscribe("beforeShow", this.buildMask);
				this.subscribe("beforeShow", this.bringToTop);
				this.subscribe("beforeShow", this.showMask);
				this.subscribe("hide", this.hideMask);
				H.windowResizeEvent.subscribe(this.sizeMask, this, true);
				this._hasModalityEventListeners = true;
			}
		} else {
			if (this._hasModalityEventListeners) {
				if (this.cfg.getProperty("visible")) {
					this.hideMask();
					this.removeMask();
				}
				this.unsubscribe("beforeShow", this.buildMask);
				this.unsubscribe("beforeShow", this.bringToTop);
				this.unsubscribe("beforeShow", this.showMask);
				this.unsubscribe("hide", this.hideMask);
				H.windowResizeEvent.unsubscribe(this.sizeMask, this);
				this._hasModalityEventListeners = false;
			}
		}
	},removeMask:function() {
		var V = this.mask,U;
		if (V) {
			this.hideMask();
			U = V.parentNode;
			if (U) {
				U.removeChild(V);
			}
			this.mask = null;
		}
	},configKeyListeners:function(X, U, a) {
		var W = U[0],Z,Y,V;
		if (W) {
			if (W instanceof Array) {
				Y = W.length;
				for (V = 0; V < Y; V++) {
					Z = W[V];
					if (!I.alreadySubscribed(this.showEvent, Z.enable, Z)) {
						this.showEvent.subscribe(Z.enable, Z, true);
					}
					if (!I.alreadySubscribed(this.hideEvent, Z.disable, Z)) {
						this.hideEvent.subscribe(Z.disable, Z, true);
						this.destroyEvent.subscribe(Z.disable, Z, true);
					}
				}
			} else {
				if (!I.alreadySubscribed(this.showEvent, W.enable, W)) {
					this.showEvent.subscribe(W.enable, W, true);
				}
				if (!I.alreadySubscribed(this.hideEvent, W.disable, W)) {
					this.hideEvent.subscribe(W.disable, W, true);
					this.destroyEvent.subscribe(W.disable, W, true);
				}
			}
		}
	},configStrings:function(V, U, W) {
		var X = E.merge(N.STRINGS.value, U[0]);
		this.cfg.setProperty(N.STRINGS.key, X, true);
	},configHeight:function(X, V, Y) {
		var U = V[0],W = this.innerElement;
		A.setStyle(W, "height", U);
		this.cfg.refireEvent("iframe");
	},_autoFillOnHeightChange:function(X, V, W) {
		O.superclass._autoFillOnHeightChange.apply(this, arguments);
		if (P) {
			var U = this;
			setTimeout(function() {
				U.sizeUnderlay();
			}, 0);
		}
	},configWidth:function(X, U, Y) {
		var W = U[0],V = this.innerElement;
		A.setStyle(V, "width", W);
		this.cfg.refireEvent("iframe");
	},configzIndex:function(V, U, X) {
		O.superclass.configzIndex.call(this, V, U, X);
		if (this.mask || this.cfg.getProperty("modal") === true) {
			var W = A.getStyle(this.element, "zIndex");
			if (!W || isNaN(W)) {
				W = 0;
			}
			if (W === 0) {
				this.cfg.setProperty("zIndex", 1);
			} else {
				this.stackMask();
			}
		}
	},buildWrapper:function() {
		var W = this.element.parentNode,U = this.element,V = document.createElement("div");
		V.className = O.CSS_PANEL_CONTAINER;
		V.id = U.id + "_c";
		if (W) {
			W.insertBefore(V, U);
		}
		V.appendChild(U);
		this.element = V;
		this.innerElement = U;
		A.setStyle(this.innerElement, "visibility", "inherit");
	},sizeUnderlay:function() {
		var V = this.underlay,U;
		if (V) {
			U = this.element;
			V.style.width = U.offsetWidth + "px";
			V.style.height = U.offsetHeight + "px";
		}
	},registerDragDrop:function() {
		var V = this;
		if (this.header) {
			if (!F.DD) {
				return;
			}
			var U = (this.cfg.getProperty("dragonly") === true);
			this.dd = new F.DD(this.element.id, this.id, {dragOnly:U});
			if (!this.header.id) {
				this.header.id = this.id + "_h";
			}
			this.dd.startDrag = function() {
				var X,Z,W,c,b,a;
				if (YAHOO.env.ua.ie == 6) {
					A.addClass(V.element, "drag");
				}
				if (V.cfg.getProperty("constraintoviewport")) {
					var Y = H.VIEWPORT_OFFSET;
					X = V.element.offsetHeight;
					Z = V.element.offsetWidth;
					W = A.getViewportWidth();
					c = A.getViewportHeight();
					b = A.getDocumentScrollLeft();
					a = A.getDocumentScrollTop();
					if (X + Y < c) {
						this.minY = a + Y;
						this.maxY = a + c - X - Y;
					} else {
						this.minY = a + Y;
						this.maxY = a + Y;
					}
					if (Z + Y < W) {
						this.minX = b + Y;
						this.maxX = b + W - Z - Y;
					} else {
						this.minX = b + Y;
						this.maxX = b + Y;
					}
					this.constrainX = true;
					this.constrainY = true;
				} else {
					this.constrainX = false;
					this.constrainY = false;
				}
				V.dragEvent.fire("startDrag", arguments);
			};
			this.dd.onDrag = function() {
				V.syncPosition();
				V.cfg.refireEvent("iframe");
				if (this.platform == "mac" && YAHOO.env.ua.gecko) {
					this.showMacGeckoScrollbars();
				}
				V.dragEvent.fire("onDrag", arguments);
			};
			this.dd.endDrag = function() {
				if (YAHOO.env.ua.ie == 6) {
					A.removeClass(V.element, "drag");
				}
				V.dragEvent.fire("endDrag", arguments);
				V.moveEvent.fire(V.cfg.getProperty("xy"));
			};
			this.dd.setHandleElId(this.header.id);
			this.dd.addInvalidHandleType("INPUT");
			this.dd.addInvalidHandleType("SELECT");
			this.dd.addInvalidHandleType("TEXTAREA");
		}
	},buildMask:function() {
		var U = this.mask;
		if (!U) {
			if (!G) {
				G = document.createElement("div");
				G.className = "mask";
				G.innerHTML = "&#160;";
			}
			U = G.cloneNode(true);
			U.id = this.id + "_mask";
			document.body.insertBefore(U, document.body.firstChild);
			this.mask = U;
			if (YAHOO.env.ua.gecko && this.platform == "mac") {
				A.addClass(this.mask, "block-scrollbars");
			}
			this.stackMask();
		}
	},hideMask:function() {
		if (this.cfg.getProperty("modal") && this.mask) {
			this.mask.style.display = "none";
			A.removeClass(document.body, "masked");
			this.hideMaskEvent.fire();
		}
	},showMask:function() {
		if (this.cfg.getProperty("modal") && this.mask) {
			A.addClass(document.body, "masked");
			this.sizeMask();
			this.mask.style.display = "block";
			this.showMaskEvent.fire();
		}
	},sizeMask:function() {
		if (this.mask) {
			var V = this.mask,W = A.getViewportWidth(),U = A.getViewportHeight();
			if (V.offsetHeight > U) {
				V.style.height = U + "px";
			}
			if (V.offsetWidth > W) {
				V.style.width = W + "px";
			}
			V.style.height = A.getDocumentHeight() + "px";
			V.style.width = A.getDocumentWidth() + "px";
		}
	},stackMask:function() {
		if (this.mask) {
			var U = A.getStyle(this.element, "zIndex");
			if (!YAHOO.lang.isUndefined(U) && !isNaN(U)) {
				A.setStyle(this.mask, "zIndex", U - 1);
			}
		}
	},render:function(U) {
		return O.superclass.render.call(this, U, this.innerElement);
	},destroy:function() {
		H.windowResizeEvent.unsubscribe(this.sizeMask, this);
		this.removeMask();
		if (this.close) {
			T.purgeElement(this.close);
		}
		O.superclass.destroy.call(this);
	},forceUnderlayRedraw:function() {
		var U = this.underlay;
		A.addClass(U, "yui-force-redraw");
		setTimeout(function() {
			A.removeClass(U, "yui-force-redraw");
		}, 0);
	},toString:function() {
		return"Panel " + this.id;
	}});
}());
(function() {
	YAHOO.widget.Dialog = function(J, I) {
		YAHOO.widget.Dialog.superclass.constructor.call(this, J, I);
	};
	var B = YAHOO.util.Event,G = YAHOO.util.CustomEvent,E = YAHOO.util.Dom,A = YAHOO.widget.Dialog,F = YAHOO.lang,H = {"BEFORE_SUBMIT":"beforeSubmit","SUBMIT":"submit","MANUAL_SUBMIT":"manualSubmit","ASYNC_SUBMIT":"asyncSubmit","FORM_SUBMIT":"formSubmit","CANCEL":"cancel"},C = {"POST_METHOD":{key:"postmethod",value:"async"},"POST_DATA":{key:"postdata",value:null},"BUTTONS":{key:"buttons",value:"none",supercedes:["visible"]},"HIDEAFTERSUBMIT":{key:"hideaftersubmit",value:true}};
	A.CSS_DIALOG = "yui-dialog";
	function D() {
		var L = this._aButtons,J,K,I;
		if (F.isArray(L)) {
			J = L.length;
			if (J > 0) {
				I = J - 1;
				do{
					K = L[I];
					if (YAHOO.widget.Button && K instanceof YAHOO.widget.Button) {
						K.destroy();
					} else {
						if (K.tagName.toUpperCase() == "BUTTON") {
							B.purgeElement(K);
							B.purgeElement(K, false);
						}
					}
				} while (I--);
			}
		}
	}

	YAHOO.extend(A, YAHOO.widget.Panel, {form:null,initDefaultConfig:function() {
		A.superclass.initDefaultConfig.call(this);
		this.callback = {success:null,failure:null,argument:null};
		this.cfg.addProperty(C.POST_METHOD.key, {handler:this.configPostMethod,value:C.POST_METHOD.value,validator:function(I) {
			if (I != "form" && I != "async" && I != "none" && I != "manual") {
				return false;
			} else {
				return true;
			}
		}});
		this.cfg.addProperty(C.POST_DATA.key, {value:C.POST_DATA.value});
		this.cfg.addProperty(C.HIDEAFTERSUBMIT.key, {value:C.HIDEAFTERSUBMIT.value});
		this.cfg.addProperty(C.BUTTONS.key, {handler:this.configButtons,value:C.BUTTONS.value,supercedes:C.BUTTONS.supercedes});
	},initEvents:function() {
		A.superclass.initEvents.call(this);
		var I = G.LIST;
		this.beforeSubmitEvent = this.createEvent(H.BEFORE_SUBMIT);
		this.beforeSubmitEvent.signature = I;
		this.submitEvent = this.createEvent(H.SUBMIT);
		this.submitEvent.signature = I;
		this.manualSubmitEvent = this.createEvent(H.MANUAL_SUBMIT);
		this.manualSubmitEvent.signature = I;
		this.asyncSubmitEvent = this.createEvent(H.ASYNC_SUBMIT);
		this.asyncSubmitEvent.signature = I;
		this.formSubmitEvent = this.createEvent(H.FORM_SUBMIT);
		this.formSubmitEvent.signature = I;
		this.cancelEvent = this.createEvent(H.CANCEL);
		this.cancelEvent.signature = I;
	},init:function(J, I) {
		A.superclass.init.call(this, J);
		this.beforeInitEvent.fire(A);
		E.addClass(this.element, A.CSS_DIALOG);
		this.cfg.setProperty("visible", false);
		if (I) {
			this.cfg.applyConfig(I, true);
		}
		this.showEvent.subscribe(this.focusFirst, this, true);
		this.beforeHideEvent.subscribe(this.blurButtons, this, true);
		this.subscribe("changeBody", this.registerForm);
		this.initEvent.fire(A);
	},doSubmit:function() {
		var P = YAHOO.util.Connect,Q = this.form,K = false,N = false,R,M,L,I;
		switch (this.cfg.getProperty("postmethod")) {
			case"async":
				R = Q.elements;
				M = R.length;
				if (M > 0) {
					L = M - 1;
					do{
						if (R[L].type == "file") {
							K = true;
							break;
						}
					} while (L--);
				}
				if (K && YAHOO.env.ua.ie && this.isSecure) {
					N = true;
				}
				I = this._getFormAttributes(Q);
				P.setForm(Q, K, N);
				var J = this.cfg.getProperty("postdata");
				var O = P.asyncRequest(I.method, I.action, this.callback, J);
				this.asyncSubmitEvent.fire(O);
				break;
			case"form":
				Q.submit();
				this.formSubmitEvent.fire();
				break;
			case"none":
			case"manual":
				this.manualSubmitEvent.fire();
				break;
		}
	},_getFormAttributes:function(K) {
		var I = {method:null,action:null};
		if (K) {
			if (K.getAttributeNode) {
				var J = K.getAttributeNode("action");
				var L = K.getAttributeNode("method");
				if (J) {
					I.action = J.value;
				}
				if (L) {
					I.method = L.value;
				}
			} else {
				I.action = K.getAttribute("action");
				I.method = K.getAttribute("method");
			}
		}
		I.method = (F.isString(I.method) ? I.method : "POST").toUpperCase();
		I.action = F.isString(I.action) ? I.action : "";
		return I;
	},registerForm:function() {
		var I = this.element.getElementsByTagName("form")[0];
		if (this.form) {
			if (this.form == I && E.isAncestor(this.element, this.form)) {
				return;
			} else {
				B.purgeElement(this.form);
				this.form = null;
			}
		}
		if (!I) {
			I = document.createElement("form");
			I.name = "frm_" + this.id;
			this.body.appendChild(I);
		}
		if (I) {
			this.form = I;
			B.on(I, "submit", this._submitHandler, this, true);
		}
	},_submitHandler:function(I) {
		B.stopEvent(I);
		this.submit();
		this.form.blur();
	},setTabLoop:function(I, J) {
		I = I || this.firstButton;
		J = this.lastButton || J;
		A.superclass.setTabLoop.call(this, I, J);
	},setFirstLastFocusable:function() {
		A.superclass.setFirstLastFocusable.call(this);
		var J,I,K,L = this.focusableElements;
		this.firstFormElement = null;
		this.lastFormElement = null;
		if (this.form && L && L.length > 0) {
			I = L.length;
			for (J = 0; J < I; ++J) {
				K = L[J];
				if (this.form === K.form) {
					this.firstFormElement = K;
					break;
				}
			}
			for (J = I - 1; J >= 0; --J) {
				K = L[J];
				if (this.form === K.form) {
					this.lastFormElement = K;
					break;
				}
			}
		}
	},configClose:function(J, I, K) {
		A.superclass.configClose.apply(this, arguments);
	},_doClose:function(I) {
		B.preventDefault(I);
		this.cancel();
	},configButtons:function(S, R, M) {
		var N = YAHOO.widget.Button,U = R[0],K = this.innerElement,T,P,J,Q,O,I,L;
		D.call(this);
		this._aButtons = null;
		if (F.isArray(U)) {
			O = document.createElement("span");
			O.className = "button-group";
			Q = U.length;
			this._aButtons = [];
			this.defaultHtmlButton = null;
			for (L = 0; L < Q; L++) {
				T = U[L];
				if (N) {
					J = new N({label:T.text});
					J.appendTo(O);
					P = J.get("element");
					if (T.isDefault) {
						J.addClass("default");
						this.defaultHtmlButton = P;
					}
					if (F.isFunction(T.handler)) {
						J.set("onclick", {fn:T.handler,obj:this,scope:this});
					} else {
						if (F.isObject(T.handler) && F.isFunction(T.handler.fn)) {
							J.set("onclick", {fn:T.handler.fn,obj:((!F.isUndefined(T.handler.obj)) ? T.handler.obj : this),scope:(T.handler.scope || this)});
						}
					}
					this._aButtons[this._aButtons.length] = J;
				} else {
					P = document.createElement("button");
					P.setAttribute("type", "button");
					if (T.isDefault) {
						P.className = "default";
						this.defaultHtmlButton = P;
					}
					P.innerHTML = T.text;
					if (F.isFunction(T.handler)) {
						B.on(P, "click", T.handler, this, true);
					} else {
						if (F.isObject(T.handler) && F.isFunction(T.handler.fn)) {
							B.on(P, "click", T.handler.fn, ((!F.isUndefined(T.handler.obj)) ? T.handler.obj : this), (T.handler.scope || this));
						}
					}
					O.appendChild(P);
					this._aButtons[this._aButtons.length] = P;
				}
				T.htmlButton = P;
				if (L === 0) {
					this.firstButton = P;
				}
				if (L == (Q - 1)) {
					this.lastButton = P;
				}
			}
			this.setFooter(O);
			I = this.footer;
			if (E.inDocument(this.element) && !E.isAncestor(K, I)) {
				K.appendChild(I);
			}
			this.buttonSpan = O;
		} else {
			O = this.buttonSpan;
			I = this.footer;
			if (O && I) {
				I.removeChild(O);
				this.buttonSpan = null;
				this.firstButton = null;
				this.lastButton = null;
				this.defaultHtmlButton = null;
			}
		}
		this.changeContentEvent.fire();
	},getButtons:function() {
		return this._aButtons || null;
	},focusFirst:function(K, I, M) {
		var J = this.firstFormElement;
		if (I && I[1]) {
			B.stopEvent(I[1]);
		}
		if (J) {
			try {
				J.focus();
			} catch(L) {
			}
		} else {
			if (this.defaultHtmlButton) {
				this.focusDefaultButton();
			} else {
				this.focusFirstButton();
			}
		}
	},focusLast:function(K, I, M) {
		var N = this.cfg.getProperty("buttons"),J = this.lastFormElement;
		if (I && I[1]) {
			B.stopEvent(I[1]);
		}
		if (N && F.isArray(N)) {
			this.focusLastButton();
		} else {
			if (J) {
				try {
					J.focus();
				} catch(L) {
				}
			}
		}
	},_getButton:function(J) {
		var I = YAHOO.widget.Button;
		if (I && J && J.nodeName && J.id) {
			J = I.getButton(J.id) || J;
		}
		return J;
	},focusDefaultButton:function() {
		var I = this._getButton(this.defaultHtmlButton);
		if (I) {
			try {
				I.focus();
			} catch(J) {
			}
		}
	},blurButtons:function() {
		var N = this.cfg.getProperty("buttons"),K,M,J,I;
		if (N && F.isArray(N)) {
			K = N.length;
			if (K > 0) {
				I = (K - 1);
				do{
					M = N[I];
					if (M) {
						J = this._getButton(M.htmlButton);
						if (J) {
							try {
								J.blur();
							} catch(L) {
							}
						}
					}
				} while (I--);
			}
		}
	},focusFirstButton:function() {
		var L = this.cfg.getProperty("buttons"),K,I;
		if (L && F.isArray(L)) {
			K = L[0];
			if (K) {
				I = this._getButton(K.htmlButton);
				if (I) {
					try {
						I.focus();
					} catch(J) {
					}
				}
			}
		}
	},focusLastButton:function() {
		var M = this.cfg.getProperty("buttons"),J,L,I;
		if (M && F.isArray(M)) {
			J = M.length;
			if (J > 0) {
				L = M[(J - 1)];
				if (L) {
					I = this._getButton(L.htmlButton);
					if (I) {
						try {
							I.focus();
						} catch(K) {
						}
					}
				}
			}
		}
	},configPostMethod:function(J, I, K) {
		this.registerForm();
	},validate:function() {
		return true;
	},submit:function() {
		if (this.validate()) {
			this.beforeSubmitEvent.fire();
			this.doSubmit();
			this.submitEvent.fire();
			if (this.cfg.getProperty("hideaftersubmit")) {
				this.hide();
			}
			return true;
		} else {
			return false;
		}
	},cancel:function() {
		this.cancelEvent.fire();
		this.hide();
	},getData:function() {
		var Y = this.form,K,R,U,M,S,P,O,J,V,L,W,Z,I,N,a,X,T;

		function Q(c) {
			var b = c.tagName.toUpperCase();
			return((b == "INPUT" || b == "TEXTAREA" || b == "SELECT") && c.name == M);
		}

		if (Y) {
			K = Y.elements;
			R = K.length;
			U = {};
			for (X = 0; X < R; X++) {
				M = K[X].name;
				S = E.getElementsBy(Q, "*", Y);
				P = S.length;
				if (P > 0) {
					if (P == 1) {
						S = S[0];
						O = S.type;
						J = S.tagName.toUpperCase();
						switch (J) {
							case"INPUT":
								if (O == "checkbox") {
									U[M] = S.checked;
								} else {
									if (O != "radio") {
										U[M] = S.value;
									}
								}
								break;
							case"TEXTAREA":
								U[M] = S.value;
								break;
							case"SELECT":
								V = S.options;
								L = V.length;
								W = [];
								for (T = 0; T < L; T++) {
									Z = V[T];
									if (Z.selected) {
										I = Z.value;
										if (!I || I === "") {
											I = Z.text;
										}
										W[W.length] = I;
									}
								}
								U[M] = W;
								break;
						}
					} else {
						O = S[0].type;
						switch (O) {
							case"radio":
								for (T = 0; T < P; T++) {
									N = S[T];
									if (N.checked) {
										U[M] = N.value;
										break;
									}
								}
								break;
							case"checkbox":
								W = [];
								for (T = 0; T < P; T++) {
									a = S[T];
									if (a.checked) {
										W[W.length] = a.value;
									}
								}
								U[M] = W;
								break;
						}
					}
				}
			}
		}
		return U;
	},destroy:function() {
		D.call(this);
		this._aButtons = null;
		var I = this.element.getElementsByTagName("form"),J;
		if (I.length > 0) {
			J = I[0];
			if (J) {
				B.purgeElement(J);
				if (J.parentNode) {
					J.parentNode.removeChild(J);
				}
				this.form = null;
			}
		}
		A.superclass.destroy.call(this);
	},toString:function() {
		return"Dialog " + this.id;
	}});
}());
(function() {
	YAHOO.widget.SimpleDialog = function(E, D) {
		YAHOO.widget.SimpleDialog.superclass.constructor.call(this, E, D);
	};
	var C = YAHOO.util.Dom,B = YAHOO.widget.SimpleDialog,A = {"ICON":{key:"icon",value:"none",suppressEvent:true},"TEXT":{key:"text",value:"",suppressEvent:true,supercedes:["icon"]}};
	B.ICON_BLOCK = "blckicon";
	B.ICON_ALARM = "alrticon";
	B.ICON_HELP = "hlpicon";
	B.ICON_INFO = "infoicon";
	B.ICON_WARN = "warnicon";
	B.ICON_TIP = "tipicon";
	B.ICON_CSS_CLASSNAME = "yui-icon";
	B.CSS_SIMPLEDIALOG = "yui-simple-dialog";
	YAHOO.extend(B, YAHOO.widget.Dialog, {initDefaultConfig:function() {
		B.superclass.initDefaultConfig.call(this);
		this.cfg.addProperty(A.ICON.key, {handler:this.configIcon,value:A.ICON.value,suppressEvent:A.ICON.suppressEvent});
		this.cfg.addProperty(A.TEXT.key, {handler:this.configText,value:A.TEXT.value,suppressEvent:A.TEXT.suppressEvent,supercedes:A.TEXT.supercedes});
	},init:function(E, D) {
		B.superclass.init.call(this, E);
		this.beforeInitEvent.fire(B);
		C.addClass(this.element, B.CSS_SIMPLEDIALOG);
		this.cfg.queueProperty("postmethod", "manual");
		if (D) {
			this.cfg.applyConfig(D, true);
		}
		this.beforeRenderEvent.subscribe(function() {
			if (!this.body) {
				this.setBody("");
			}
		}, this, true);
		this.initEvent.fire(B);
	},registerForm:function() {
		B.superclass.registerForm.call(this);
		this.form.innerHTML += '<input type="hidden" name="' + this.id + '" value=""/>';
	},configIcon:function(F, E, J) {
		var K = E[0],D = this.body,I = B.ICON_CSS_CLASSNAME,H,G;
		if (K && K != "none") {
			H = C.getElementsByClassName(I, "*", D);
			if (H) {
				G = H.parentNode;
				if (G) {
					G.removeChild(H);
					H = null;
				}
			}
			if (K.indexOf(".") == -1) {
				H = document.createElement("span");
				H.className = (I + " " + K);
				H.innerHTML = "&#160;";
			} else {
				H = document.createElement("img");
				H.src = (this.imageRoot + K);
				H.className = I;
			}
			if (H) {
				D.insertBefore(H, D.firstChild);
			}
		}
	},configText:function(E, D, F) {
		var G = D[0];
		if (G) {
			this.setBody(G);
			this.cfg.refireEvent("icon");
		}
	},toString:function() {
		return"SimpleDialog " + this.id;
	}});
}());
(function() {
	YAHOO.widget.ContainerEffect = function(E, H, G, D, F) {
		if (!F) {
			F = YAHOO.util.Anim;
		}
		this.overlay = E;
		this.attrIn = H;
		this.attrOut = G;
		this.targetElement = D || E.element;
		this.animClass = F;
	};
	var B = YAHOO.util.Dom,C = YAHOO.util.CustomEvent,A = YAHOO.widget.ContainerEffect;
	A.FADE = function(D, F) {
		var G = YAHOO.util.Easing,I = {attributes:{opacity:{from:0,to:1}},duration:F,method:G.easeIn},E = {attributes:{opacity:{to:0}},duration:F,method:G.easeOut},H = new A(D, I, E, D.element);
		H.handleUnderlayStart = function() {
			var K = this.overlay.underlay;
			if (K && YAHOO.env.ua.ie) {
				var J = (K.filters && K.filters.length > 0);
				if (J) {
					B.addClass(D.element, "yui-effect-fade");
				}
			}
		};
		H.handleUnderlayComplete = function() {
			var J = this.overlay.underlay;
			if (J && YAHOO.env.ua.ie) {
				B.removeClass(D.element, "yui-effect-fade");
			}
		};
		H.handleStartAnimateIn = function(K, J, L) {
			B.addClass(L.overlay.element, "hide-select");
			if (!L.overlay.underlay) {
				L.overlay.cfg.refireEvent("underlay");
			}
			L.handleUnderlayStart();
			L.overlay._setDomVisibility(true);
			B.setStyle(L.overlay.element, "opacity", 0);
		};
		H.handleCompleteAnimateIn = function(K, J, L) {
			B.removeClass(L.overlay.element, "hide-select");
			if (L.overlay.element.style.filter) {
				L.overlay.element.style.filter = null;
			}
			L.handleUnderlayComplete();
			L.overlay.cfg.refireEvent("iframe");
			L.animateInCompleteEvent.fire();
		};
		H.handleStartAnimateOut = function(K, J, L) {
			B.addClass(L.overlay.element, "hide-select");
			L.handleUnderlayStart();
		};
		H.handleCompleteAnimateOut = function(K, J, L) {
			B.removeClass(L.overlay.element, "hide-select");
			if (L.overlay.element.style.filter) {
				L.overlay.element.style.filter = null;
			}
			L.overlay._setDomVisibility(false);
			B.setStyle(L.overlay.element, "opacity", 1);
			L.handleUnderlayComplete();
			L.overlay.cfg.refireEvent("iframe");
			L.animateOutCompleteEvent.fire();
		};
		H.init();
		return H;
	};
	A.SLIDE = function(F, D) {
		var I = YAHOO.util.Easing,L = F.cfg.getProperty("x") || B.getX(F.element),K = F.cfg.getProperty("y") || B.getY(F.element),M = B.getClientWidth(),H = F.element.offsetWidth,J = {attributes:{points:{to:[L,K]}},duration:D,method:I.easeIn},E = {attributes:{points:{to:[(M + 25),K]}},duration:D,method:I.easeOut},G = new A(F, J, E, F.element, YAHOO.util.Motion);
		G.handleStartAnimateIn = function(O, N, P) {
			P.overlay.element.style.left = ((-25) - H) + "px";
			P.overlay.element.style.top = K + "px";
		};
		G.handleTweenAnimateIn = function(Q, P, R) {
			var S = B.getXY(R.overlay.element),O = S[0],N = S[1];
			if (B.getStyle(R.overlay.element, "visibility") == "hidden" && O < L) {
				R.overlay._setDomVisibility(true);
			}
			R.overlay.cfg.setProperty("xy", [O,N], true);
			R.overlay.cfg.refireEvent("iframe");
		};
		G.handleCompleteAnimateIn = function(O, N, P) {
			P.overlay.cfg.setProperty("xy", [L,K], true);
			P.startX = L;
			P.startY = K;
			P.overlay.cfg.refireEvent("iframe");
			P.animateInCompleteEvent.fire();
		};
		G.handleStartAnimateOut = function(O, N, R) {
			var P = B.getViewportWidth(),S = B.getXY(R.overlay.element),Q = S[1];
			R.animOut.attributes.points.to = [(P + 25),Q];
		};
		G.handleTweenAnimateOut = function(P, O, Q) {
			var S = B.getXY(Q.overlay.element),N = S[0],R = S[1];
			Q.overlay.cfg.setProperty("xy", [N,R], true);
			Q.overlay.cfg.refireEvent("iframe");
		};
		G.handleCompleteAnimateOut = function(O, N, P) {
			P.overlay._setDomVisibility(false);
			P.overlay.cfg.setProperty("xy", [L,K]);
			P.animateOutCompleteEvent.fire();
		};
		G.init();
		return G;
	};
	A.prototype = {init:function() {
		this.beforeAnimateInEvent = this.createEvent("beforeAnimateIn");
		this.beforeAnimateInEvent.signature = C.LIST;
		this.beforeAnimateOutEvent = this.createEvent("beforeAnimateOut");
		this.beforeAnimateOutEvent.signature = C.LIST;
		this.animateInCompleteEvent = this.createEvent("animateInComplete");
		this.animateInCompleteEvent.signature = C.LIST;
		this.animateOutCompleteEvent = this.createEvent("animateOutComplete");
		this.animateOutCompleteEvent.signature = C.LIST;
		this.animIn = new this.animClass(this.targetElement, this.attrIn.attributes, this.attrIn.duration, this.attrIn.method);
		this.animIn.onStart.subscribe(this.handleStartAnimateIn, this);
		this.animIn.onTween.subscribe(this.handleTweenAnimateIn, this);
		this.animIn.onComplete.subscribe(this.handleCompleteAnimateIn, this);
		this.animOut = new this.animClass(this.targetElement, this.attrOut.attributes, this.attrOut.duration, this.attrOut.method);
		this.animOut.onStart.subscribe(this.handleStartAnimateOut, this);
		this.animOut.onTween.subscribe(this.handleTweenAnimateOut, this);
		this.animOut.onComplete.subscribe(this.handleCompleteAnimateOut, this);
	},animateIn:function() {
		this.beforeAnimateInEvent.fire();
		this.animIn.animate();
	},animateOut:function() {
		this.beforeAnimateOutEvent.fire();
		this.animOut.animate();
	},handleStartAnimateIn:function(E, D, F) {
	},handleTweenAnimateIn:function(E, D, F) {
	},handleCompleteAnimateIn:function(E, D, F) {
	},handleStartAnimateOut:function(E, D, F) {
	},handleTweenAnimateOut:function(E, D, F) {
	},handleCompleteAnimateOut:function(E, D, F) {
	},toString:function() {
		var D = "ContainerEffect";
		if (this.overlay) {
			D += " [" + this.overlay.toString() + "]";
		}
		return D;
	}};
	YAHOO.lang.augmentProto(A, YAHOO.util.EventProvider);
})();
YAHOO.register("container", YAHOO.widget.Module, {version:"2.7.0",build:"1799"});
/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 2.7.0
 */
YAHOO.lang.JSON = (function() {
	var l = YAHOO.lang,_UNICODE_EXCEPTIONS = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_ESCAPES = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,_VALUES = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_BRACKETS = /(?:^|:|,)(?:\s*\[)+/g,_INVALID = /^[\],:{}\s]*$/,_SPECIAL_CHARS = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_CHARS = {"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};

	function _revive(data, reviver) {
		var walk = function(o, key) {
			var k,v,value = o[key];
			if (value && typeof value === "object") {
				for (k in value) {
					if (l.hasOwnProperty(value, k)) {
						v = walk(value, k);
						if (v === undefined) {
							delete value[k];
						} else {
							value[k] = v;
						}
					}
				}
			}
			return reviver.call(o, key, value);
		};
		return typeof reviver === "function" ? walk({"":data}, "") : data;
	}

	function _char(c) {
		if (!_CHARS[c]) {
			_CHARS[c] = "\\u" + ("0000" + (+(c.charCodeAt(0))).toString(16)).slice(-4);
		}
		return _CHARS[c];
	}

	function _prepare(s) {
		return s.replace(_UNICODE_EXCEPTIONS, _char);
	}

	function _isValid(str) {
		return l.isString(str) && _INVALID.test(str.replace(_ESCAPES, "@").replace(_VALUES, "]").replace(_BRACKETS, ""));
	}

	function _string(s) {
		return'"' + s.replace(_SPECIAL_CHARS, _char) + '"';
	}

	function _stringify(h, key, d, w, pstack) {
		var o = typeof w === "function" ? w.call(h, key, h[key]) : h[key],i,len,j,k,v,isArray,a;
		if (o instanceof Date) {
			o = l.JSON.dateToString(o);
		} else {
			if (o instanceof String || o instanceof Boolean || o instanceof Number) {
				o = o.valueOf();
			}
		}
		switch (typeof o) {
			case"string":
				return _string(o);
			case"number":
				return isFinite(o) ? String(o) : "null";
			case"boolean":
				return String(o);
			case"object":
				if (o === null) {
					return"null";
				}
				for (i = pstack.length - 1; i >= 0; --i) {
					if (pstack[i] === o) {
						return"null";
					}
				}
				pstack[pstack.length] = o;
				a = [];
				isArray = l.isArray(o);
				if (d > 0) {
					if (isArray) {
						for (i = o.length - 1; i >= 0; --i) {
							a[i] = _stringify(o, i, d - 1, w, pstack) || "null";
						}
					} else {
						j = 0;
						if (l.isArray(w)) {
							for (i = 0,len = w.length; i < len; ++i) {
								k = w[i];
								v = _stringify(o, k, d - 1, w, pstack);
								if (v) {
									a[j++] = _string(k) + ":" + v;
								}
							}
						} else {
							for (k in o) {
								if (typeof k === "string" && l.hasOwnProperty(o, k)) {
									v = _stringify(o, k, d - 1, w, pstack);
									if (v) {
										a[j++] = _string(k) + ":" + v;
									}
								}
							}
						}
						a.sort();
					}
				}
				pstack.pop();
				return isArray ? "[" + a.join(",") + "]" : "{" + a.join(",") + "}";
		}
		return undefined;
	}

	return{isValid:function(s) {
		return _isValid(_prepare(s));
	},parse:function(s, reviver) {
		s = _prepare(s);
		if (_isValid(s)) {
			return _revive(eval("(" + s + ")"), reviver);
		}
		throw new SyntaxError("parseJSON");
	},stringify:function(o, w, d) {
		if (o !== undefined) {
			if (l.isArray(w)) {
				w = (function(a) {
					var uniq = [],map = {},v,i,j,len;
					for (i = 0,j = 0,len = a.length; i < len; ++i) {
						v = a[i];
						if (typeof v === "string" && map[v] === undefined) {
							uniq[(map[v] = j++)] = v;
						}
					}
					return uniq;
				})(w);
			}
			d = d >= 0 ? d : 1 / 0;
			return _stringify({"":o}, "", d, w, []);
		}
		return undefined;
	},dateToString:function(d) {
		function _zeroPad(v) {
			return v < 10 ? "0" + v : v;
		}

		return d.getUTCFullYear() + "-" + _zeroPad(d.getUTCMonth() + 1) + "-" + _zeroPad(d.getUTCDate()) + "T" + _zeroPad(d.getUTCHours()) + ":" + _zeroPad(d.getUTCMinutes()) + ":" + _zeroPad(d.getUTCSeconds()) + "Z";
	},stringToDate:function(str) {
		if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/.test(str)) {
			var d = new Date();
			d.setUTCFullYear(RegExp.$1, (RegExp.$2 | 0) - 1, RegExp.$3);
			d.setUTCHours(RegExp.$4, RegExp.$5, RegExp.$6);
			return d;
		}
		return str;
	}};
})();
YAHOO.register("json", YAHOO.lang.JSON, {version:"2.7.0",build:"1799"});
/*
 Copyright (c) 2009, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.net/yui/license.txt
 version: 2.7.0
 */
(function() {
	var G = YAHOO.util.Dom,M = YAHOO.util.Event,I = YAHOO.lang,L = YAHOO.env.ua,B = YAHOO.widget.Overlay,J = YAHOO.widget.Menu,D = {},K = null,E = null,C = null;

	function F(O, N, R, P) {
		var S,Q;
		if (I.isString(O) && I.isString(N)) {
			if (L.ie) {
				Q = '<input type="' + O + '" name="' + N + '"';
				if (P) {
					Q += " checked";
				}
				Q += ">";
				S = document.createElement(Q);
			} else {
				S = document.createElement("input");
				S.name = N;
				S.type = O;
				if (P) {
					S.checked = true;
				}
			}
			S.value = R;
		}
		return S;
	}

	function H(O, U) {
		var N = O.nodeName.toUpperCase(),S = this,T,P,Q;

		function V(W) {
			if (!(W in U)) {
				T = O.getAttributeNode(W);
				if (T && ("value" in T)) {
					U[W] = T.value;
				}
			}
		}

		function R() {
			V("type");
			if (U.type == "button") {
				U.type = "push";
			}
			if (!("disabled" in U)) {
				U.disabled = O.disabled;
			}
			V("name");
			V("value");
			V("title");
		}

		switch (N) {
			case"A":
				U.type = "link";
				V("href");
				V("target");
				break;
			case"INPUT":
				R();
				if (!("checked" in U)) {
					U.checked = O.checked;
				}
				break;
			case"BUTTON":
				R();
				P = O.parentNode.parentNode;
				if (G.hasClass(P, this.CSS_CLASS_NAME + "-checked")) {
					U.checked = true;
				}
				if (G.hasClass(P, this.CSS_CLASS_NAME + "-disabled")) {
					U.disabled = true;
				}
				O.removeAttribute("value");
				O.setAttribute("type", "button");
				break;
		}
		O.removeAttribute("id");
		O.removeAttribute("name");
		if (!("tabindex" in U)) {
			U.tabindex = O.tabIndex;
		}
		if (!("label" in U)) {
			Q = N == "INPUT" ? O.value : O.innerHTML;
			if (Q && Q.length > 0) {
				U.label = Q;
			}
		}
	}

	function A(P) {
		var O = P.attributes,N = O.srcelement,R = N.nodeName.toUpperCase(),Q = this;
		if (R == this.NODE_NAME) {
			P.element = N;
			P.id = N.id;
			G.getElementsBy(function(S) {
				switch (S.nodeName.toUpperCase()) {
					case"BUTTON":
					case"A":
					case"INPUT":
						H.call(Q, S, O);
						break;
				}
			}, "*", N);
		} else {
			switch (R) {
				case"BUTTON":
				case"A":
				case"INPUT":
					H.call(this, N, O);
					break;
			}
		}
	}

	YAHOO.widget.Button = function(R, O) {
		if (!B && YAHOO.widget.Overlay) {
			B = YAHOO.widget.Overlay;
		}
		if (!J && YAHOO.widget.Menu) {
			J = YAHOO.widget.Menu;
		}
		var Q = YAHOO.widget.Button.superclass.constructor,P,N;
		if (arguments.length == 1 && !I.isString(R) && !R.nodeName) {
			if (!R.id) {
				R.id = G.generateId();
			}
			Q.call(this, (this.createButtonElement(R.type)), R);
		} else {
			P = {element:null,attributes:(O || {})};
			if (I.isString(R)) {
				N = G.get(R);
				if (N) {
					if (!P.attributes.id) {
						P.attributes.id = R;
					}
					P.attributes.srcelement = N;
					A.call(this, P);
					if (!P.element) {
						P.element = this.createButtonElement(P.attributes.type);
					}
					Q.call(this, P.element, P.attributes);
				}
			} else {
				if (R.nodeName) {
					if (!P.attributes.id) {
						if (R.id) {
							P.attributes.id = R.id;
						} else {
							P.attributes.id = G.generateId();
						}
					}
					P.attributes.srcelement = R;
					A.call(this, P);
					if (!P.element) {
						P.element = this.createButtonElement(P.attributes.type);
					}
					Q.call(this, P.element, P.attributes);
				}
			}
		}
	};
	YAHOO.extend(YAHOO.widget.Button, YAHOO.util.Element, {_button:null,_menu:null,_hiddenFields:null,_onclickAttributeValue:null,_activationKeyPressed:false,_activationButtonPressed:false,_hasKeyEventHandlers:false,_hasMouseEventHandlers:false,_nOptionRegionX:0,NODE_NAME:"SPAN",CHECK_ACTIVATION_KEYS:[32],ACTIVATION_KEYS:[13,32],OPTION_AREA_WIDTH:20,CSS_CLASS_NAME:"yui-button",RADIO_DEFAULT_TITLE:"Unchecked.  Click to check.",RADIO_CHECKED_TITLE:"Checked.  Click another button to uncheck",CHECKBOX_DEFAULT_TITLE:"Unchecked.  Click to check.",CHECKBOX_CHECKED_TITLE:"Checked.  Click to uncheck.",MENUBUTTON_DEFAULT_TITLE:"Menu collapsed.  Click to expand.",MENUBUTTON_MENU_VISIBLE_TITLE:"Menu expanded.  Click or press Esc to collapse.",SPLITBUTTON_DEFAULT_TITLE:("Menu collapsed.  Click inside option " + "region or press down arrow key to show the menu."),SPLITBUTTON_OPTION_VISIBLE_TITLE:"Menu expanded.  Press Esc to hide the menu.",SUBMIT_TITLE:"Click to submit form.",_setType:function(N) {
		if (N == "split") {
			this.on("option", this._onOption);
		}
	},_setLabel:function(O) {
		this._button.innerHTML = O;
		var P,N = L.gecko;
		if (N && N < 1.9 && G.inDocument(this.get("element"))) {
			P = this.CSS_CLASS_NAME;
			this.removeClass(P);
			I.later(0, this, this.addClass, P);
		}
	},_setTabIndex:function(N) {
		this._button.tabIndex = N;
	},_setTitle:function(O) {
		var N = O;
		if (this.get("type") != "link") {
			if (!N) {
				switch (this.get("type")) {
					case"radio":
						N = this.RADIO_DEFAULT_TITLE;
						break;
					case"checkbox":
						N = this.CHECKBOX_DEFAULT_TITLE;
						break;
					case"menu":
						N = this.MENUBUTTON_DEFAULT_TITLE;
						break;
					case"split":
						N = this.SPLITBUTTON_DEFAULT_TITLE;
						break;
					case"submit":
						N = this.SUBMIT_TITLE;
						break;
				}
			}
			this._button.title = N;
		}
	},_setDisabled:function(N) {
		if (this.get("type") != "link") {
			if (N) {
				if (this._menu) {
					this._menu.hide();
				}
				if (this.hasFocus()) {
					this.blur();
				}
				this._button.setAttribute("disabled", "disabled");
				this.addStateCSSClasses("disabled");
				this.removeStateCSSClasses("hover");
				this.removeStateCSSClasses("active");
				this.removeStateCSSClasses("focus");
			} else {
				this._button.removeAttribute("disabled");
				this.removeStateCSSClasses("disabled");
			}
		}
	},_setHref:function(N) {
		if (this.get("type") == "link") {
			this._button.href = N;
		}
	},_setTarget:function(N) {
		if (this.get("type") == "link") {
			this._button.setAttribute("target", N);
		}
	},_setChecked:function(O) {
		var P = this.get("type"),N;
		if (P == "checkbox" || P == "radio") {
			if (O) {
				this.addStateCSSClasses("checked");
				N = (P == "radio") ? this.RADIO_CHECKED_TITLE : this.CHECKBOX_CHECKED_TITLE;
			} else {
				this.removeStateCSSClasses("checked");
				N = (P == "radio") ? this.RADIO_DEFAULT_TITLE : this.CHECKBOX_DEFAULT_TITLE;
			}
			if (!this._hasDefaultTitle) {
				this.set("title", N);
			}
		}
	},_setMenu:function(U) {
		var P = this.get("lazyloadmenu"),R = this.get("element"),N,W = false,X,O,Q;

		function V() {
			X.render(R.parentNode);
			this.removeListener("appendTo", V);
		}

		function T() {
			X.cfg.queueProperty("container", R.parentNode);
			this.removeListener("appendTo", T);
		}

		function S() {
			var Y;
			if (X) {
				G.addClass(X.element, this.get("menuclassname"));
				G.addClass(X.element, "yui-" + this.get("type") + "-button-menu");
				X.showEvent.subscribe(this._onMenuShow, null, this);
				X.hideEvent.subscribe(this._onMenuHide, null, this);
				X.renderEvent.subscribe(this._onMenuRender, null, this);
				if (J && X instanceof J) {
					if (P) {
						Y = this.get("container");
						if (Y) {
							X.cfg.queueProperty("container", Y);
						} else {
							this.on("appendTo", T);
						}
					}
					X.cfg.queueProperty("clicktohide", false);
					X.keyDownEvent.subscribe(this._onMenuKeyDown, this, true);
					X.subscribe("click", this._onMenuClick, this, true);
					this.on("selectedMenuItemChange", this._onSelectedMenuItemChange);
					Q = X.srcElement;
					if (Q && Q.nodeName.toUpperCase() == "SELECT") {
						Q.style.display = "none";
						Q.parentNode.removeChild(Q);
					}
				} else {
					if (B && X instanceof B) {
						if (!K) {
							K = new YAHOO.widget.OverlayManager();
						}
						K.register(X);
					}
				}
				this._menu = X;
				if (!W && !P) {
					if (G.inDocument(R)) {
						X.render(R.parentNode);
					} else {
						this.on("appendTo", V);
					}
				}
			}
		}

		if (B) {
			if (J) {
				N = J.prototype.CSS_CLASS_NAME;
			}
			if (U && J && (U instanceof J)) {
				X = U;
				W = true;
				S.call(this);
			} else {
				if (B && U && (U instanceof B)) {
					X = U;
					W = true;
					X.cfg.queueProperty("visible", false);
					S.call(this);
				} else {
					if (J && I.isArray(U)) {
						X = new J(G.generateId(), {lazyload:P,itemdata:U});
						this._menu = X;
						this.on("appendTo", S);
					} else {
						if (I.isString(U)) {
							O = G.get(U);
							if (O) {
								if (J && G.hasClass(O, N) || O.nodeName.toUpperCase() == "SELECT") {
									X = new J(U, {lazyload:P});
									S.call(this);
								} else {
									if (B) {
										X = new B(U, {visible:false});
										S.call(this);
									}
								}
							}
						} else {
							if (U && U.nodeName) {
								if (J && G.hasClass(U, N) || U.nodeName.toUpperCase() == "SELECT") {
									X = new J(U, {lazyload:P});
									S.call(this);
								} else {
									if (B) {
										if (!U.id) {
											G.generateId(U);
										}
										X = new B(U, {visible:false});
										S.call(this);
									}
								}
							}
						}
					}
				}
			}
		}
	},_setOnClick:function(N) {
		if (this._onclickAttributeValue && (this._onclickAttributeValue != N)) {
			this.removeListener("click", this._onclickAttributeValue.fn);
			this._onclickAttributeValue = null;
		}
		if (!this._onclickAttributeValue && I.isObject(N) && I.isFunction(N.fn)) {
			this.on("click", N.fn, N.obj, N.scope);
			this._onclickAttributeValue = N;
		}
	},_isActivationKey:function(N) {
		var S = this.get("type"),O = (S == "checkbox" || S == "radio") ? this.CHECK_ACTIVATION_KEYS : this.ACTIVATION_KEYS,Q = O.length,R = false,P;
		if (Q > 0) {
			P = Q - 1;
			do{
				if (N == O[P]) {
					R = true;
					break;
				}
			} while (P--);
		}
		return R;
	},_isSplitButtonOptionKey:function(P) {
		var O = (M.getCharCode(P) == 40);
		var N = function(Q) {
			M.preventDefault(Q);
			this.removeListener("keypress", N);
		};
		if (O) {
			if (L.opera) {
				this.on("keypress", N);
			}
			M.preventDefault(P);
		}
		return O;
	},_addListenersToForm:function() {
		var T = this.getForm(),S = YAHOO.widget.Button.onFormKeyPress,R,N,Q,P,O;
		if (T) {
			M.on(T, "reset", this._onFormReset, null, this);
			M.on(T, "submit", this._onFormSubmit, null, this);
			N = this.get("srcelement");
			if (this.get("type") == "submit" || (N && N.type == "submit")) {
				Q = M.getListeners(T, "keypress");
				R = false;
				if (Q) {
					P = Q.length;
					if (P > 0) {
						O = P - 1;
						do{
							if (Q[O].fn == S) {
								R = true;
								break;
							}
						} while (O--);
					}
				}
				if (!R) {
					M.on(T, "keypress", S);
				}
			}
		}
	},_showMenu:function(R) {
		if (YAHOO.widget.MenuManager) {
			YAHOO.widget.MenuManager.hideVisible();
		}
		if (K) {
			K.hideAll();
		}
		var N = this._menu,Q = this.get("menualignment"),P = this.get("focusmenu"),O;
		if (this._renderedMenu) {
			N.cfg.setProperty("context", [this.get("element"),Q[0],Q[1]]);
			N.cfg.setProperty("preventcontextoverlap", true);
			N.cfg.setProperty("constraintoviewport", true);
		} else {
			N.cfg.queueProperty("context", [this.get("element"),Q[0],Q[1]]);
			N.cfg.queueProperty("preventcontextoverlap", true);
			N.cfg.queueProperty("constraintoviewport", true);
		}
		this.focus();
		if (J && N && (N instanceof J)) {
			O = N.focus;
			N.focus = function() {
			};
			if (this._renderedMenu) {
				N.cfg.setProperty("minscrollheight", this.get("menuminscrollheight"));
				N.cfg.setProperty("maxheight", this.get("menumaxheight"));
			} else {
				N.cfg.queueProperty("minscrollheight", this.get("menuminscrollheight"));
				N.cfg.queueProperty("maxheight", this.get("menumaxheight"));
			}
			N.show();
			N.focus = O;
			N.align();
			if (R.type == "mousedown") {
				M.stopPropagation(R);
			}
			if (P) {
				N.focus();
			}
		} else {
			if (B && N && (N instanceof B)) {
				if (!this._renderedMenu) {
					N.render(this.get("element").parentNode);
				}
				N.show();
				N.align();
			}
		}
	},_hideMenu:function() {
		var N = this._menu;
		if (N) {
			N.hide();
		}
	},_onMouseOver:function(O) {
		var Q = this.get("type"),N,P;
		if (Q === "split") {
			N = this.get("element");
			P = (G.getX(N) + (N.offsetWidth - this.OPTION_AREA_WIDTH));
			this._nOptionRegionX = P;
		}
		if (!this._hasMouseEventHandlers) {
			if (Q === "split") {
				this.on("mousemove", this._onMouseMove);
			}
			this.on("mouseout", this._onMouseOut);
			this._hasMouseEventHandlers = true;
		}
		this.addStateCSSClasses("hover");
		if (Q === "split" && (M.getPageX(O) > P)) {
			this.addStateCSSClasses("hoveroption");
		}
		if (this._activationButtonPressed) {
			this.addStateCSSClasses("active");
		}
		if (this._bOptionPressed) {
			this.addStateCSSClasses("activeoption");
		}
		if (this._activationButtonPressed || this._bOptionPressed) {
			M.removeListener(document, "mouseup", this._onDocumentMouseUp);
		}
	},_onMouseMove:function(N) {
		var O = this._nOptionRegionX;
		if (O) {
			if (M.getPageX(N) > O) {
				this.addStateCSSClasses("hoveroption");
			} else {
				this.removeStateCSSClasses("hoveroption");
			}
		}
	},_onMouseOut:function(N) {
		var O = this.get("type");
		this.removeStateCSSClasses("hover");
		if (O != "menu") {
			this.removeStateCSSClasses("active");
		}
		if (this._activationButtonPressed || this._bOptionPressed) {
			M.on(document, "mouseup", this._onDocumentMouseUp, null, this);
		}
		if (O === "split" && (M.getPageX(N) > this._nOptionRegionX)) {
			this.removeStateCSSClasses("hoveroption");
		}
	},_onDocumentMouseUp:function(P) {
		this._activationButtonPressed = false;
		this._bOptionPressed = false;
		var Q = this.get("type"),N,O;
		if (Q == "menu" || Q == "split") {
			N = M.getTarget(P);
			O = this._menu.element;
			if (N != O && !G.isAncestor(O, N)) {
				this.removeStateCSSClasses((Q == "menu" ? "active" : "activeoption"));
				this._hideMenu();
			}
		}
		M.removeListener(document, "mouseup", this._onDocumentMouseUp);
	},_onMouseDown:function(P) {
		var Q,O = true;

		function N() {
			this._hideMenu();
			this.removeListener("mouseup", N);
		}

		if ((P.which || P.button) == 1) {
			if (!this.hasFocus()) {
				this.focus();
			}
			Q = this.get("type");
			if (Q == "split") {
				if (M.getPageX(P) > this._nOptionRegionX) {
					this.fireEvent("option", P);
					O = false;
				} else {
					this.addStateCSSClasses("active");
					this._activationButtonPressed = true;
				}
			} else {
				if (Q == "menu") {
					if (this.isActive()) {
						this._hideMenu();
						this._activationButtonPressed = false;
					} else {
						this._showMenu(P);
						this._activationButtonPressed = true;
					}
				} else {
					this.addStateCSSClasses("active");
					this._activationButtonPressed = true;
				}
			}
			if (Q == "split" || Q == "menu") {
				this._hideMenuTimer = I.later(250, this, this.on, ["mouseup",N]);
			}
		}
		return O;
	},_onMouseUp:function(P) {
		var Q = this.get("type"),N = this._hideMenuTimer,O = true;
		if (N) {
			N.cancel();
		}
		if (Q == "checkbox" || Q == "radio") {
			this.set("checked", !(this.get("checked")));
		}
		this._activationButtonPressed = false;
		if (Q != "menu") {
			this.removeStateCSSClasses("active");
		}
		if (Q == "split" && M.getPageX(P) > this._nOptionRegionX) {
			O = false;
		}
		return O;
	},_onFocus:function(O) {
		var N;
		this.addStateCSSClasses("focus");
		if (this._activationKeyPressed) {
			this.addStateCSSClasses("active");
		}
		C = this;
		if (!this._hasKeyEventHandlers) {
			N = this._button;
			M.on(N, "blur", this._onBlur, null, this);
			M.on(N, "keydown", this._onKeyDown, null, this);
			M.on(N, "keyup", this._onKeyUp, null, this);
			this._hasKeyEventHandlers = true;
		}
		this.fireEvent("focus", O);
	},_onBlur:function(N) {
		this.removeStateCSSClasses("focus");
		if (this.get("type") != "menu") {
			this.removeStateCSSClasses("active");
		}
		if (this._activationKeyPressed) {
			M.on(document, "keyup", this._onDocumentKeyUp, null, this);
		}
		C = null;
		this.fireEvent("blur", N);
	},_onDocumentKeyUp:function(N) {
		if (this._isActivationKey(M.getCharCode(N))) {
			this._activationKeyPressed = false;
			M.removeListener(document, "keyup", this._onDocumentKeyUp);
		}
	},_onKeyDown:function(O) {
		var N = this._menu;
		if (this.get("type") == "split" && this._isSplitButtonOptionKey(O)) {
			this.fireEvent("option", O);
		} else {
			if (this._isActivationKey(M.getCharCode(O))) {
				if (this.get("type") == "menu") {
					this._showMenu(O);
				} else {
					this._activationKeyPressed = true;
					this.addStateCSSClasses("active");
				}
			}
		}
		if (N && N.cfg.getProperty("visible") && M.getCharCode(O) == 27) {
			N.hide();
			this.focus();
		}
	},_onKeyUp:function(N) {
		var O;
		if (this._isActivationKey(M.getCharCode(N))) {
			O = this.get("type");
			if (O == "checkbox" || O == "radio") {
				this.set("checked", !(this.get("checked")));
			}
			this._activationKeyPressed = false;
			if (this.get("type") != "menu") {
				this.removeStateCSSClasses("active");
			}
		}
	},_onClick:function(Q) {
		var S = this.get("type"),N,R,O,P;
		switch (S) {
			case"radio":
			case"checkbox":
				if (!this._hasDefaultTitle) {
					if (this.get("checked")) {
						N = (S == "radio") ? this.RADIO_CHECKED_TITLE : this.CHECKBOX_CHECKED_TITLE;
					} else {
						N = (S == "radio") ? this.RADIO_DEFAULT_TITLE : this.CHECKBOX_DEFAULT_TITLE;
					}
					this.set("title", N);
				}
				break;
			case"submit":
				if (Q.returnValue !== false) {
					this.submitForm();
				}
				break;
			case"reset":
				R = this.getForm();
				if (R) {
					R.reset();
				}
				break;
			case"menu":
				N = this._menu.cfg.getProperty("visible") ? this.MENUBUTTON_MENU_VISIBLE_TITLE : this.MENUBUTTON_DEFAULT_TITLE;
				this.set("title", N);
				break;
			case"split":
				if (this._nOptionRegionX > 0 && (M.getPageX(Q) > this._nOptionRegionX)) {
					P = false;
				} else {
					this._hideMenu();
					O = this.get("srcelement");
					if (O && O.type == "submit" && Q.returnValue !== false) {
						this.submitForm();
					}
				}
				N = this._menu.cfg.getProperty("visible") ? this.SPLITBUTTON_OPTION_VISIBLE_TITLE : this.SPLITBUTTON_DEFAULT_TITLE;
				this.set("title", N);
				break;
		}
		return P;
	},_onDblClick:function(O) {
		var N = true;
		if (this.get("type") == "split" && M.getPageX(O) > this._nOptionRegionX) {
			N = false;
		}
		return N;
	},_onAppendTo:function(N) {
		I.later(0, this, this._addListenersToForm);
	},_onFormReset:function(O) {
		var P = this.get("type"),N = this._menu;
		if (P == "checkbox" || P == "radio") {
			this.resetValue("checked");
		}
		if (J && N && (N instanceof J)) {
			this.resetValue("selectedMenuItem");
		}
	},_onFormSubmit:function(N) {
		this.createHiddenFields();
	},_onDocumentMouseDown:function(Q) {
		var N = M.getTarget(Q),P = this.get("element"),O = this._menu.element;
		if (N != P && !G.isAncestor(P, N) && N != O && !G.isAncestor(O, N)) {
			this._hideMenu();
			M.removeListener(document, "mousedown", this._onDocumentMouseDown);
		}
	},_onOption:function(N) {
		if (this.hasClass("yui-split-button-activeoption")) {
			this._hideMenu();
			this._bOptionPressed = false;
		} else {
			this._showMenu(N);
			this._bOptionPressed = true;
		}
	},_onMenuShow:function(O) {
		M.on(document, "mousedown", this._onDocumentMouseDown, null, this);
		var N,P;
		if (this.get("type") == "split") {
			N = this.SPLITBUTTON_OPTION_VISIBLE_TITLE;
			P = "activeoption";
		} else {
			N = this.MENUBUTTON_MENU_VISIBLE_TITLE;
			P = "active";
		}
		this.addStateCSSClasses(P);
		this.set("title", N);
	},_onMenuHide:function(P) {
		var O = this._menu,N,Q;
		if (this.get("type") == "split") {
			N = this.SPLITBUTTON_DEFAULT_TITLE;
			Q = "activeoption";
		} else {
			N = this.MENUBUTTON_DEFAULT_TITLE;
			Q = "active";
		}
		this.removeStateCSSClasses(Q);
		this.set("title", N);
		if (this.get("type") == "split") {
			this._bOptionPressed = false;
		}
	},_onMenuKeyDown:function(P, O) {
		var N = O[0];
		if (M.getCharCode(N) == 27) {
			this.focus();
			if (this.get("type") == "split") {
				this._bOptionPressed = false;
			}
		}
	},_onMenuRender:function(P) {
		var S = this.get("element"),O = S.parentNode,N = this._menu,R = N.element,Q = N.srcElement;
		if (O != R.parentNode) {
			O.appendChild(R);
		}
		this._renderedMenu = true;
		if (Q && Q.nodeName.toLowerCase() === "select" && Q.value) {
			this.set("selectedMenuItem", N.getItem(Q.selectedIndex));
		}
	},_onMenuClick:function(O, N) {
		var Q = N[1],P;
		if (Q) {
			this.set("selectedMenuItem", Q);
			P = this.get("srcelement");
			if (P && P.type == "submit") {
				this.submitForm();
			}
			this._hideMenu();
		}
	},_onSelectedMenuItemChange:function(N) {
		var O = N.prevValue,P = N.newValue;
		if (O) {
			G.removeClass(O.element, "yui-button-selectedmenuitem");
		}
		if (P) {
			G.addClass(P.element, "yui-button-selectedmenuitem");
		}
	},createButtonElement:function(N) {
		var P = this.NODE_NAME,O = document.createElement(P);
		O.innerHTML = "<" + P + ' class="first-child">' + (N == "link" ? "<a></a>" : '<button type="button"></button>') + "</" + P + ">";
		return O;
	},addStateCSSClasses:function(N) {
		var O = this.get("type");
		if (I.isString(N)) {
			if (N != "activeoption" && N != "hoveroption") {
				this.addClass(this.CSS_CLASS_NAME + ("-" + N));
			}
			this.addClass("yui-" + O + ("-button-" + N));
		}
	},removeStateCSSClasses:function(N) {
		var O = this.get("type");
		if (I.isString(N)) {
			this.removeClass(this.CSS_CLASS_NAME + ("-" + N));
			this.removeClass("yui-" + O + ("-button-" + N));
		}
	},createHiddenFields:function() {
		this.removeHiddenFields();
		var V = this.getForm(),Z,O,S,X,Y,T,U,N,R,W,P,Q = false;
		if (V && !this.get("disabled")) {
			O = this.get("type");
			S = (O == "checkbox" || O == "radio");
			if ((S && this.get("checked")) || (E == this)) {
				Z = F((S ? O : "hidden"), this.get("name"), this.get("value"), this.get("checked"));
				if (Z) {
					if (S) {
						Z.style.display = "none";
					}
					V.appendChild(Z);
				}
			}
			X = this._menu;
			if (J && X && (X instanceof J)) {
				Y = this.get("selectedMenuItem");
				P = X.srcElement;
				Q = (P && P.nodeName.toUpperCase() == "SELECT");
				if (Y) {
					U = (Y.value === null || Y.value === "") ? Y.cfg.getProperty("text") : Y.value;
					T = this.get("name");
					if (Q) {
						W = P.name;
					} else {
						if (T) {
							W = (T + "_options");
						}
					}
					if (U && W) {
						N = F("hidden", W, U);
						V.appendChild(N);
					}
				} else {
					if (Q) {
						V.appendChild(P);
					}
				}
			}
			if (Z && N) {
				this._hiddenFields = [Z,N];
			} else {
				if (!Z && N) {
					this._hiddenFields = N;
				} else {
					if (Z && !N) {
						this._hiddenFields = Z;
					}
				}
			}
			R = this._hiddenFields;
		}
		return R;
	},removeHiddenFields:function() {
		var Q = this._hiddenFields,O,P;

		function N(R) {
			if (G.inDocument(R)) {
				R.parentNode.removeChild(R);
			}
		}

		if (Q) {
			if (I.isArray(Q)) {
				O = Q.length;
				if (O > 0) {
					P = O - 1;
					do{
						N(Q[P]);
					} while (P--);
				}
			} else {
				N(Q);
			}
			this._hiddenFields = null;
		}
	},submitForm:function() {
		var Q = this.getForm(),P = this.get("srcelement"),O = false,N;
		if (Q) {
			if (this.get("type") == "submit" || (P && P.type == "submit")) {
				E = this;
			}
			if (L.ie) {
				O = Q.fireEvent("onsubmit");
			} else {
				N = document.createEvent("HTMLEvents");
				N.initEvent("submit", true, true);
				O = Q.dispatchEvent(N);
			}
			if ((L.ie || L.webkit) && O) {
				Q.submit();
			}
		}
		return O;
	},init:function(O, a) {
		var Q = a.type == "link" ? "a" : "button",V = a.srcelement,Z = O.getElementsByTagName(Q)[0],X;
		if (!Z) {
			X = O.getElementsByTagName("input")[0];
			if (X) {
				Z = document.createElement("button");
				Z.setAttribute("type", "button");
				X.parentNode.replaceChild(Z, X);
			}
		}
		this._button = Z;
		this._hasDefaultTitle = (a.title && a.title.length > 0);
		YAHOO.widget.Button.superclass.init.call(this, O, a);
		var T = this.get("id"),N = T + "-button";
		Z.id = N;
		var U,W;
		var d = function(e) {
			return(e.htmlFor === T);
		};
		var S = function() {
			W.setAttribute((L.ie ? "htmlFor" : "for"), N);
		};
		if (V && this.get("type") != "link") {
			U = G.getElementsBy(d, "label");
			if (I.isArray(U) && U.length > 0) {
				W = U[0];
			}
		}
		D[T] = this;
		this.addClass(this.CSS_CLASS_NAME);
		this.addClass("yui-" + this.get("type") + "-button");
		M.on(this._button, "focus", this._onFocus, null, this);
		this.on("mouseover", this._onMouseOver);
		this.on("mousedown", this._onMouseDown);
		this.on("mouseup", this._onMouseUp);
		this.on("click", this._onClick);
		var Y = this.get("onclick");
		this.set("onclick", null);
		this.set("onclick", Y);
		this.on("dblclick", this._onDblClick);
		if (W) {
			this.on("appendTo", S);
		}
		this.on("appendTo", this._onAppendTo);
		var c = this.get("container"),P = this.get("element"),b = G.inDocument(P),R;
		if (c) {
			if (V && V != P) {
				R = V.parentNode;
				if (R) {
					R.removeChild(V);
				}
			}
			if (I.isString(c)) {
				M.onContentReady(c, this.appendTo, c, this);
			} else {
				this.on("init", function() {
					I.later(0, this, this.appendTo, c);
				});
			}
		} else {
			if (!b && V && V != P) {
				R = V.parentNode;
				if (R) {
					this.fireEvent("beforeAppendTo", {type:"beforeAppendTo",target:R});
					R.replaceChild(P, V);
					this.fireEvent("appendTo", {type:"appendTo",target:R});
				}
			} else {
				if (this.get("type") != "link" && b && V && V == P) {
					this._addListenersToForm();
				}
			}
		}
		this.fireEvent("init", {type:"init",target:this});
	},initAttributes:function(O) {
		var N = O || {};
		YAHOO.widget.Button.superclass.initAttributes.call(this, N);
		this.setAttributeConfig("type", {value:(N.type || "push"),validator:I.isString,writeOnce:true,method:this._setType});
		this.setAttributeConfig("label", {value:N.label,validator:I.isString,method:this._setLabel});
		this.setAttributeConfig("value", {value:N.value});
		this.setAttributeConfig("name", {value:N.name,validator:I.isString});
		this.setAttributeConfig("tabindex", {value:N.tabindex,validator:I.isNumber,method:this._setTabIndex});
		this.configureAttribute("title", {value:N.title,validator:I.isString,method:this._setTitle});
		this.setAttributeConfig("disabled", {value:(N.disabled || false),validator:I.isBoolean,method:this._setDisabled});
		this.setAttributeConfig("href", {value:N.href,validator:I.isString,method:this._setHref});
		this.setAttributeConfig("target", {value:N.target,validator:I.isString,method:this._setTarget});
		this.setAttributeConfig("checked", {value:(N.checked || false),validator:I.isBoolean,method:this._setChecked});
		this.setAttributeConfig("container", {value:N.container,writeOnce:true});
		this.setAttributeConfig("srcelement", {value:N.srcelement,writeOnce:true});
		this.setAttributeConfig("menu", {value:null,method:this._setMenu,writeOnce:true});
		this.setAttributeConfig("lazyloadmenu", {value:(N.lazyloadmenu === false ? false : true),validator:I.isBoolean,writeOnce:true});
		this.setAttributeConfig("menuclassname", {value:(N.menuclassname || "yui-button-menu"),validator:I.isString,method:this._setMenuClassName,writeOnce:true});
		this.setAttributeConfig("menuminscrollheight", {value:(N.menuminscrollheight || 90),validator:I.isNumber});
		this.setAttributeConfig("menumaxheight", {value:(N.menumaxheight || 0),validator:I.isNumber});
		this.setAttributeConfig("menualignment", {value:(N.menualignment || ["tl","bl"]),validator:I.isArray});
		this.setAttributeConfig("selectedMenuItem", {value:null});
		this.setAttributeConfig("onclick", {value:N.onclick,method:this._setOnClick});
		this.setAttributeConfig("focusmenu", {value:(N.focusmenu === false ? false : true),validator:I.isBoolean});
	},focus:function() {
		if (!this.get("disabled")) {
			this._button.focus();
		}
	},blur:function() {
		if (!this.get("disabled")) {
			this._button.blur();
		}
	},hasFocus:function() {
		return(C == this);
	},isActive:function() {
		return this.hasClass(this.CSS_CLASS_NAME + "-active");
	},getMenu:function() {
		return this._menu;
	},getForm:function() {
		var N = this._button,O;
		if (N) {
			O = N.form;
		}
		return O;
	},getHiddenFields:function() {
		return this._hiddenFields;
	},destroy:function() {
		var P = this.get("element"),O = P.parentNode,N = this._menu,R;
		if (N) {
			if (K && K.find(N)) {
				K.remove(N);
			}
			N.destroy();
		}
		M.purgeElement(P);
		M.purgeElement(this._button);
		M.removeListener(document, "mouseup", this._onDocumentMouseUp);
		M.removeListener(document, "keyup", this._onDocumentKeyUp);
		M.removeListener(document, "mousedown", this._onDocumentMouseDown);
		var Q = this.getForm();
		if (Q) {
			M.removeListener(Q, "reset", this._onFormReset);
			M.removeListener(Q, "submit", this._onFormSubmit);
		}
		this.unsubscribeAll();
		if (O) {
			O.removeChild(P);
		}
		delete D[this.get("id")];
		R = G.getElementsByClassName(this.CSS_CLASS_NAME, this.NODE_NAME, Q);
		if (I.isArray(R) && R.length === 0) {
			M.removeListener(Q, "keypress", YAHOO.widget.Button.onFormKeyPress);
		}
	},fireEvent:function(O, N) {
		var P = arguments[0];
		if (this.DOM_EVENTS[P] && this.get("disabled")) {
			return false;
		}
		return YAHOO.widget.Button.superclass.fireEvent.apply(this, arguments);
	},toString:function() {
		return("Button " + this.get("id"));
	}});
	YAHOO.widget.Button.onFormKeyPress = function(R) {
		var P = M.getTarget(R),S = M.getCharCode(R),Q = P.nodeName && P.nodeName.toUpperCase(),N = P.type,T = false,V,X,O,W;

		function U(a) {
			var Z,Y;
			switch (a.nodeName.toUpperCase()) {
				case"INPUT":
				case"BUTTON":
					if (a.type == "submit" && !a.disabled) {
						if (!T && !O) {
							O = a;
						}
					}
					break;
				default:
					Z = a.id;
					if (Z) {
						V = D[Z];
						if (V) {
							T = true;
							if (!V.get("disabled")) {
								Y = V.get("srcelement");
								if (!X && (V.get("type") == "submit" || (Y && Y.type == "submit"))) {
									X = V;
								}
							}
						}
					}
					break;
			}
		}

		if (S == 13 && ((Q == "INPUT" && (N == "text" || N == "password" || N == "checkbox" || N == "radio" || N == "file")) || Q == "SELECT")) {
			G.getElementsBy(U, "*", this);
			if (O) {
				O.focus();
			} else {
				if (!O && X) {
					M.preventDefault(R);
					if (L.ie) {
						X.get("element").fireEvent("onclick");
					} else {
						W = document.createEvent("HTMLEvents");
						W.initEvent("click", true, true);
						if (L.gecko < 1.9) {
							X.fireEvent("click", W);
						} else {
							X.get("element").dispatchEvent(W);
						}
					}
				}
			}
		}
	};
	YAHOO.widget.Button.addHiddenFieldsToForm = function(N) {
		var S = G.getElementsByClassName(YAHOO.widget.Button.prototype.CSS_CLASS_NAME, "*", N),Q = S.length,R,O,P;
		if (Q > 0) {
			for (P = 0; P < Q; P++) {
				O = S[P].id;
				if (O) {
					R = D[O];
					if (R) {
						R.createHiddenFields();
					}
				}
			}
		}
	};
	YAHOO.widget.Button.getButton = function(N) {
		return D[N];
	};
})();
(function() {
	var C = YAHOO.util.Dom,B = YAHOO.util.Event,D = YAHOO.lang,A = YAHOO.widget.Button,E = {};
	YAHOO.widget.ButtonGroup = function(J, H) {
		var I = YAHOO.widget.ButtonGroup.superclass.constructor,K,G,F;
		if (arguments.length == 1 && !D.isString(J) && !J.nodeName) {
			if (!J.id) {
				F = C.generateId();
				J.id = F;
			}
			I.call(this, (this._createGroupElement()), J);
		} else {
			if (D.isString(J)) {
				G = C.get(J);
				if (G) {
					if (G.nodeName.toUpperCase() == this.NODE_NAME) {
						I.call(this, G, H);
					}
				}
			} else {
				K = J.nodeName.toUpperCase();
				if (K && K == this.NODE_NAME) {
					if (!J.id) {
						J.id = C.generateId();
					}
					I.call(this, J, H);
				}
			}
		}
	};
	YAHOO.extend(YAHOO.widget.ButtonGroup, YAHOO.util.Element, {_buttons:null,NODE_NAME:"DIV",CSS_CLASS_NAME:"yui-buttongroup",_createGroupElement:function() {
		var F = document.createElement(this.NODE_NAME);
		return F;
	},_setDisabled:function(G) {
		var H = this.getCount(),F;
		if (H > 0) {
			F = H - 1;
			do{
				this._buttons[F].set("disabled", G);
			} while (F--);
		}
	},_onKeyDown:function(K) {
		var G = B.getTarget(K),I = B.getCharCode(K),H = G.parentNode.parentNode.id,J = E[H],F = -1;
		if (I == 37 || I == 38) {
			F = (J.index === 0) ? (this._buttons.length - 1) : (J.index - 1);
		} else {
			if (I == 39 || I == 40) {
				F = (J.index === (this._buttons.length - 1)) ? 0 : (J.index + 1);
			}
		}
		if (F > -1) {
			this.check(F);
			this.getButton(F).focus();
		}
	},_onAppendTo:function(H) {
		var I = this._buttons,G = I.length,F;
		for (F = 0; F < G; F++) {
			I[F].appendTo(this.get("element"));
		}
	},_onButtonCheckedChange:function(G, F) {
		var I = G.newValue,H = this.get("checkedButton");
		if (I && H != F) {
			if (H) {
				H.set("checked", false, true);
			}
			this.set("checkedButton", F);
			this.set("value", F.get("value"));
		} else {
			if (H && !H.set("checked")) {
				H.set("checked", true, true);
			}
		}
	},init:function(I, H) {
		this._buttons = [];
		YAHOO.widget.ButtonGroup.superclass.init.call(this, I, H);
		this.addClass(this.CSS_CLASS_NAME);
		var J = this.getElementsByClassName("yui-radio-button");
		if (J.length > 0) {
			this.addButtons(J);
		}
		function F(K) {
			return(K.type == "radio");
		}

		J = C.getElementsBy(F, "input", this.get("element"));
		if (J.length > 0) {
			this.addButtons(J);
		}
		this.on("keydown", this._onKeyDown);
		this.on("appendTo", this._onAppendTo);
		var G = this.get("container");
		if (G) {
			if (D.isString(G)) {
				B.onContentReady(G, function() {
					this.appendTo(G);
				}, null, this);
			} else {
				this.appendTo(G);
			}
		}
	},initAttributes:function(G) {
		var F = G || {};
		YAHOO.widget.ButtonGroup.superclass.initAttributes.call(this, F);
		this.setAttributeConfig("name", {value:F.name,validator:D.isString});
		this.setAttributeConfig("disabled", {value:(F.disabled || false),validator:D.isBoolean,method:this._setDisabled});
		this.setAttributeConfig("value", {value:F.value});
		this.setAttributeConfig("container", {value:F.container,writeOnce:true});
		this.setAttributeConfig("checkedButton", {value:null});
	},addButton:function(J) {
		var L,K,G,F,H,I;
		if (J instanceof A && J.get("type") == "radio") {
			L = J;
		} else {
			if (!D.isString(J) && !J.nodeName) {
				J.type = "radio";
				L = new A(J);
			} else {
				L = new A(J, {type:"radio"});
			}
		}
		if (L) {
			F = this._buttons.length;
			H = L.get("name");
			I = this.get("name");
			L.index = F;
			this._buttons[F] = L;
			E[L.get("id")] = L;
			if (H != I) {
				L.set("name", I);
			}
			if (this.get("disabled")) {
				L.set("disabled", true);
			}
			if (L.get("checked")) {
				this.set("checkedButton", L);
			}
			K = L.get("element");
			G = this.get("element");
			if (K.parentNode != G) {
				G.appendChild(K);
			}
			L.on("checkedChange", this._onButtonCheckedChange, L, this);
		}
		return L;
	},addButtons:function(G) {
		var H,I,J,F;
		if (D.isArray(G)) {
			H = G.length;
			J = [];
			if (H > 0) {
				for (F = 0; F < H; F++) {
					I = this.addButton(G[F]);
					if (I) {
						J[J.length] = I;
					}
				}
			}
		}
		return J;
	},removeButton:function(H) {
		var I = this.getButton(H),G,F;
		if (I) {
			this._buttons.splice(H, 1);
			delete E[I.get("id")];
			I.removeListener("checkedChange", this._onButtonCheckedChange);
			I.destroy();
			G = this._buttons.length;
			if (G > 0) {
				F = this._buttons.length - 1;
				do{
					this._buttons[F].index = F;
				} while (F--);
			}
		}
	},getButton:function(F) {
		return this._buttons[F];
	},getButtons:function() {
		return this._buttons;
	},getCount:function() {
		return this._buttons.length;
	},focus:function(H) {
		var I,G,F;
		if (D.isNumber(H)) {
			I = this._buttons[H];
			if (I) {
				I.focus();
			}
		} else {
			G = this.getCount();
			for (F = 0; F < G; F++) {
				I = this._buttons[F];
				if (!I.get("disabled")) {
					I.focus();
					break;
				}
			}
		}
	},check:function(F) {
		var G = this.getButton(F);
		if (G) {
			G.set("checked", true);
		}
	},destroy:function() {
		var I = this._buttons.length,H = this.get("element"),F = H.parentNode,G;
		if (I > 0) {
			G = this._buttons.length - 1;
			do{
				this._buttons[G].destroy();
			} while (G--);
		}
		B.purgeElement(H);
		F.removeChild(H);
	},toString:function() {
		return("ButtonGroup " + this.get("id"));
	}});
})();
YAHOO.register("button", YAHOO.widget.Button, {version:"2.7.0",build:"1799"});
/**
 * Provide SMD support
 * http://groups.google.com/group/json-schema/web/service-mapping-description-proposal
 * Not implemented: REST envelope, TCP/IP transport
 *
 * @namespace YAHOO.rpc
 */
YAHOO.namespace("rpc");

(function() {

	var rpc = YAHOO.rpc, lang = YAHOO.lang, util = YAHOO.util;

	/**
	 * Take a string as a url to retrieve an smd or an object that is an smd or partial smd to use
	 * as a definition for the service
	 * @class YAHOO.rpc.Service
	 * @constructor
	 */
	YAHOO.rpc.Service = function(smd, callback) {

		if (lang.isString(smd)) {
			this.smdUrl = smd;
			this.fetch(smd, callback);
		} else if (lang.isObject(smd)) {
			this._smd = smd;
			this.process(callback);
		} else {
			throw new Error("smd should be an object or an url");
		}
	};


	YAHOO.rpc.Service.prototype = {

		/**
		 * Generate the function from a service definition
		 * @method _generateService
		 * @param {String} serviceName
		 * @param {Method definition} method
		 */
		_generateService: function(serviceName, method) {

			if (this[method]) {
				throw new Error("WARNING: " + serviceName + " already exists for service. Unable to generate function");
			}
			method.name = serviceName;

			var self = this;
			var func = function(data, opts) {
				var envelope = rpc.Envelope[method.envelope || self._smd.envelope];
				var callback = {
					success: function(o) {
						var results = envelope.deserialize(o);
						opts.success.call(opts.scope || self, results);
					},
					failure: function(o) {
						if (lang.isFunction(opts.failure)) {
							parent.console.log(o);
							var errorMessage = "Server responded with Status-Code: " + o.status + "<br />Statustext: " + o.statusText;
							if (typeof o.error != 'undefined') {
								errorMessage += 'Response:<div style="width:360px;height:300px;overflow: scroll">' + o.error + '</div>';
							}
							if (typeof o.responseText != 'undefined') {
								errorMessage += '<br /><a href="#" id="debugPopup" style="text-decoration: underline">Show response</a>';
								window.setTimeout(function() {
									document.getElementById('debugPopup').onclick = function() {
										var f = window.open('', "Debug", "width=900,height=400,scrollbars=yes");
										f.document.write(o.responseText);
										f.focus();
									};
								}, 1000);
							}
							opts.failure.call(opts.scope || self, {error:errorMessage});
						}
					},
					scope: self
				};


				var params = {};
				if (self._smd.additionalParameters && lang.isArray(self._smd.parameters)) {
					for (var i = 0; i < self._smd.parameters.length; i++) {
						var p = self._smd.parameters[i];
						params[p.name] = p["default"];
					}
				}
				lang.augmentObject(params, data, true);

				var url = method.target || self._smd.target;
				if (url.match(/^\//)) {
					var hostname = window.location.hostname;
					if (window.location.port) {
						hostname = hostname + ':' + window.location.port;
					}
					url = window.location.protocol + '//' + hostname + url;
				}

				var r = {
					target: url,
					callback: callback,
					data: params,
					origData: data,
					opts: opts,
					callbackParamName: method.callbackParamName || self._smd.callbackParamName,
					transport: method.transport || self._smd.transport
				};
				var serialized = envelope.serialize(self._smd, method, params);
				lang.augmentObject(r, serialized, true);

				rpc.Transport[r.transport].call(self, r);
			};

			func.name = serviceName;
			func.description = method.description;
			func._parameters = method.parameters;

			return func;
		},

		/**
		 * Process the SMD definition
		 * @method process
		 */
		process: function(callback) {

			var serviceDefs = this._smd.services;

			// Generate the methods to this object
			for (var serviceName in serviceDefs) {
				if (serviceDefs.hasOwnProperty(serviceName)) {

					// Get the object that will contain the method.
					// handles "namespaced" services by breaking apart by '.'
					var current = this;
					var pieces = serviceName.split(".");
					for (var i = 0; i < pieces.length - 1; i++) {
						current = current[pieces[i]] || (current[pieces[i]] = {});
					}

					current[pieces[pieces.length - 1]] = this._generateService(serviceName, serviceDefs[serviceName]);
				}
			}

			// call the success handler
			if (lang.isObject(callback) && lang.isFunction(callback.success)) {
				callback.success.call(callback.scope || this);
			}
		},

		/**
		 * Download the SMD at the given url
		 * @method fetch
		 * @param {String} Absolute or relative url
		 */
		fetch: function(url, callback) {

			/**
			 * TODO: if url is not in the same domain, we should use jsonp !
			 */

			util.Connect.asyncRequest('GET', url, {
				success: function(o) {
					try {
						this._smd = lang.JSON.parse(o.responseText);
						this.process(callback);
					}
					catch(ex) {
						if (lang.isObject(console) && lang.isFunction(console.log))
							console.log(ex);
						if (lang.isFunction(callback.failure)) {
							callback.failure.call(callback.scope || this, {error: ex});
						}
					}
				},
				failure: function(o) {
					if (lang.isFunction(callback.failure)) {
						callback.failure.call(callback.scope || this, {error: "unable to fetch url " + url});
					}
				},
				scope: this
			});
		}
	};


	YAHOO.rpc.Service._requestId = 1;


	/**
	 * @namespace YAHOO.rpc.Transport
	 */
	YAHOO.rpc.Transport = {

		"POST": function(r) {
			return util.Connect.asyncRequest('POST', r.target, r.callback, r.data);
		},

		"GET": function(r) {
			return util.Connect.asyncRequest('GET', r.target + (r.data ? '?' + r.data : ''), r.callback, '');
		},

		"REST": function(r) {
			// TODO
		},

		jsonp_id: 0,
		"JSONP": function(r) {
			r.callbackParamName = r.callbackParamName || "callback";
			var fctName = encodeURIComponent("YAHOO.rpc.Transport.JSONP.jsonpCallback" + YAHOO.rpc.Transport.jsonp_id);
			YAHOO.rpc.Transport["JSONP"]["jsonpCallback" + YAHOO.rpc.Transport.jsonp_id] = function(results) {
				if (lang.isObject(r.callback) && lang.isFunction(r.callback.success)) {
					r.callback.success.call(r.callback.scope || this, results);
				}
			};
			YAHOO.rpc.Transport.jsonp_id += 1;
			return util.Get.script(r.target + ((r.target.indexOf("?") == -1) ? '?' : '&') + r.data + "&" + r.callbackParamName + "=" + fctName);
		},

		"TCP/IP": function(r) {
			throw new Error("TCP/IP transport not implemented !");
		}
	};


	/**
	 * @namespace YAHOO.rpc.Envelope
	 */
	YAHOO.rpc.Envelope = {

		"URL":  {
			serialize: function(smd, method, data) {
				var eURI = encodeURIComponent;
				var params = [];
				for (var name in data) {
					if (data.hasOwnProperty(name)) {
						var value = data[name];
						if (lang.isArray(value)) {
							for (var i = 0; i < value.length; i++) {
								params.push(eURI(name) + "=" + eURI(value[i]));
							}
						} else {
							params.push(eURI(name) + "=" + eURI(value));
						}
					}
				}
				return {
					data: params.join("&")
				};
			},
			deserialize: function(results) {
				return results;
			}
		},

		"PATH": {
			serialize: function(smd, method, data) {
				var target = method.target || smd.target, i;
				if (lang.isArray(data)) {
					for (i = 0; i < data.length; i++) {
						target += '/' + data[i];
					}
				} else {
					for (i in data) {
						if (data.hasOwnProperty(i)) {
							target += '/' + i + '/' + data[i];
						}
					}
				}
				return {
					data: '',
					target: target
				};
			},
			deserialize: function(results) {
				return results;
			}
		},

		"JSON": {
			serialize: function(smd, method, data) {
				return {
					data: lang.JSON.stringify(data)
				};
			},
			deserialize: function(results) {
				return results;
			}
		},

		"JSON-RPC-1.0":  {
			serialize: function(smd, method, data) {
				return {
					data: lang.JSON.stringify({
						"id": rpc.Service._requestId++,
						"method": method.name,
						"params": data
					})
				};
			},
			deserialize: function(results) {
				try {
					lang.JSON.parse(results.responseText);
				} catch(err) {
					//parent.console.log(results);
					return {'error' : results.responseText};
				}
				return lang.JSON.parse(results.responseText);
			}
		},

		"JSON-RPC-2.0": {
			serialize: function(smd, method, data) {
				return {
					data: lang.JSON.stringify({
						"id": rpc.Service._requestId++,
						"method": method.name,
						"version": "json-rpc-2.0",
						"params": data
					})
				};
			},
			deserialize: function(results) {
				try {
					lang.JSON.parse(results.responseText);
				} catch(err) {
					//parent.console.log(results);
					return {'error' : results.responseText};
				}
				return lang.JSON.parse(results.responseText);
			}
		}
	};
})();

/**
 * @fileoverview Main inputEx file. Define inputEx namespace in YAHOO.inputEx
 */
(function() {

	var lang = YAHOO.lang;

	/**
	 * Build a field from an object like: { type: 'color' or fieldClass: inputEx.ColorField, inputParams: {} }<br />
	 * The inputParams property is the object that will be passed as the <code>options</code> parameter to the field class constructor.<br />
	 * If the neither type or fieldClass are found, it uses inputEx.StringField
	 * @name inputEx
	 * @namespace The inputEx global namespace object.
	 * @static
	 * @param {Object} fieldOptions
	 * @return {inputEx.Field} Created field instance
	 */
	YAHOO.inputEx = function(fieldOptions) {
		var fieldClass = null;
		if (fieldOptions.type) {
			fieldClass = YAHOO.inputEx.getFieldClass(fieldOptions.type);
			if (fieldClass === null) fieldClass = YAHOO.inputEx.StringField;
		}
		else {
			fieldClass = fieldOptions.fieldClass ? fieldOptions.fieldClass : inputEx.StringField;
		}

		// Instanciate the field
		var inputInstance = new fieldClass(fieldOptions.inputParams);

		// Add the flatten attribute if present in the params
		/*if(fieldOptions.flatten) {
		 inputInstance._flatten = true;
		 }*/

		return inputInstance;
	};

	/**
	 * Test de documentation inputEx
	 */
	var inputEx = YAHOO.inputEx;

	lang.augmentObject(inputEx,
			/**
			 * @scope inputEx
			 */
					   {

						   VERSION: "0.2.1",

						   /**
							* Url to the spacer image. This url schould be changed according to your project directories
							* @type String
							*/
						   spacerUrl: "images/space.gif", // 1x1 px

						   /**
							* Field empty state constant
							* @type String
							*/
						   stateEmpty: 'empty',

						   /**
							* Field required state constant
							* @type String
							*/
						   stateRequired: 'required',

						   /**
							* Field valid state constant
							* @type String
							*/
						   stateValid: 'valid',

						   /**
							* Field invalid state constant
							* @type String
							*/
						   stateInvalid: 'invalid',

						   /**
							* Associative array containing field messages
							*/
						   messages: {
							   required: "This field is required",
							   invalid: "This field is invalid",
							   valid: "This field is valid",
							   defaultDateFormat: "m/d/Y",
							   months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
						   },

						   /**
							* @namespace inputEx widget namespace
							*/
						   widget: {},

						   /**
							* Associative array containing common regular expressions
							*/
						   regexps: {
							   email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							   url: /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/i,
							   password: /^[0-9a-zA-Z\x20-\x7E]*$/
						   },

						   /**
							* Hash between inputEx types and classes (ex: <code>inputEx.typeClasses.color = inputEx.ColorField</code>)<br />
							* Please register the types with the <code>registerType</code> method
							*/
						   typeClasses: {},

						   /**
							* When you create a new inputEx Field Class, you can register it to give it a simple type.
							* ex:   inputEx.registerType("color", inputEx.ColorField);
							* @static
							*/
						   registerType: function(type, field) {
							   if (!lang.isString(type)) {
								   throw new Error("inputEx.registerType: first argument must be a string");
							   }
							   if (!lang.isFunction(field)) {
								   throw new Error("inputEx.registerType: second argument must be a function");
							   }
							   this.typeClasses[type] = field;
						   },

						   /**
							* Returns the class for the given type
							* ex: inputEx.getFieldClass("color") returns inputEx.ColorField
							* @static
							* @param {String} type String type of the field
							*/
						   getFieldClass: function(type) {
							   return lang.isFunction(this.typeClasses[type]) ? this.typeClasses[type] : null;
						   },

						   /**
							* Get the inputex type for the given class (ex: <code>inputEx.getType(inputEx.ColorField)</code> returns "color")
							* @static
							* @param {inputEx.Field} FieldClass An inputEx.Field or derivated class
							* @return {String} returns the inputEx type string or <code>null</code>
							*/
						   getType: function(FieldClass) {
							   for (var type in this.typeClasses) {
								   if (this.typeClasses.hasOwnProperty(type)) {
									   if (this.typeClasses[type] == FieldClass) {
										   return type;
									   }
								   }
							   }
							   return null;
						   },

						   /**
							* Kept for backward compatibility
							* @alias inputEx
							* @param {Object} fieldOptions
							* @return {inputEx.Field} Created field instance
							*/
						   buildField: function(fieldOptions) {
							   return inputEx(fieldOptions);
						   },

						   /**
							* Helper function to set DOM node attributes and style attributes.
							* @static
							* @param {HTMLElement} el The element to set attributes to
							* @param {Object} domAttributes An object containing key/value pairs to set as node attributes (ex: {id: 'myElement', className: 'myCssClass', ...})
							* @param {Object} styleAttributes Same thing for style attributes. Please use camelCase for style attributes (ex: backgroundColor for 'background-color')
							*/
						   sn: function(el, domAttributes, styleAttributes) {
							   if (!el) {
								   return;
							   }

							   if (domAttributes) {
								   for (var i in domAttributes) {
									   var domAttribute = domAttributes[i];
									   if (lang.isFunction(domAttribute)) {
										   continue;
									   }
									   if (i == "className") {
										   i = "class";
										   el.className = domAttribute;
									   }
									   if (domAttribute !== el.getAttribute(i)) {
										   try {
											   if (domAttribute === false) {
												   el.removeAttribute(i);
											   } else {
												   el.setAttribute(i, domAttribute);
											   }
										   }
										   catch(err) {
											   //console.log("WARNING: WireIt.sn failed for "+el.tagName+", attr "+i+", val "+domAttribute);
										   }
									   }
								   }
							   }

							   if (styleAttributes) {
								   for (var i in styleAttributes) {
									   if (lang.isFunction(styleAttributes[i])) {
										   continue;
									   }
									   if (el.style[i] != styleAttributes[i]) {
										   el.style[i] = styleAttributes[i];
									   }
								   }
							   }
						   },


						   /**
							* Helper function to create a DOM node. (wrapps the document.createElement tag and the inputEx.sn functions)
							* @static
							* @param {String} tag The tagName to create (ex: 'div', 'a', ...)
							* @param {Object} [domAttributes] see inputEx.sn
							* @param {Object} [styleAttributes] see inputEx.sn
							* @param {String} [innerHTML] The html string to append into the created element
							* @return {HTMLElement} The created node
							*/
						   cn: function(tag, domAttributes, styleAttributes, innerHTML) {
							   if (tag == 'input' && YAHOO.env.ua.ie) { //only limit to input tag that has no tag body
								   var strDom = '<' + tag;
								   if (domAttributes !== 'undefined') {
									   for (var k in domAttributes) {
										   strDom += ' ' + k + '="' + domAttributes[k] + '"';
									   }
								   }
								   strDom += '/' + '>';
								   return document.createElement(strDom);

							   } else {
								   var el = document.createElement(tag);
								   this.sn(el, domAttributes, styleAttributes);
								   if (innerHTML) {
									   el.innerHTML = innerHTML;
								   }
								   return el;
							   }
						   },


						   /**
							* Find the position of the given element. (This method is not available in IE 6)
							* @static
							* @param {Object} el Value to search
							* @param {Array} arr The array to search
							* @return {number} Element position, -1 if not found
							*/
						   indexOf: function(el, arr) {
							   var l = arr.length,i;
							   for (i = 0; i < l; i++) {
								   if (arr[i] == el) return i;
							   }
							   return -1;
						   },


						   /**
							* Create a new array without the null or undefined values
							* @static
							* @param {Array} arr The array to compact
							* @return {Array} The new array
							*/
						   compactArray: function(arr) {
							   var n = [], l = arr.length,i;
							   for (i = 0; i < l; i++) {
								   if (!lang.isNull(arr[i]) && !lang.isUndefined(arr[i])) {
									   n.push(arr[i]);
								   }
							   }
							   return n;
						   }

					   });

})();


// The main inputEx namespace shortcut
var inputEx = YAHOO.inputEx;

(function() {
	var inputEx = YAHOO.inputEx, Dom = YAHOO.util.Dom, lang = YAHOO.lang, util = YAHOO.util, Event = YAHOO.util.Event;

	/**
	 * @class An abstract class that contains the shared features for all fields
	 * @constructor
	 * @param {Object} options Configuration object
	 * <ul>
	 *	  <li>name: the name of the field</li>
	 *	  <li>required: boolean, the field cannot be null if true</li>
	 *   <li>className: CSS class name for the div wrapper (default 'inputEx-Field')</li>
	 *   <li>value: initial value</li>
	 *   <li>parentEl: HTMLElement or String id, append the field to this DOM element</li>
	 * </ul>
	 */
	inputEx.Field = function(options) {

		if (!options) {
			var options = {};
		}

		// Set the default values of the options
		this.setOptions(options);

		// Call the render of the dom
		this.render();

		/**
		 * @event
		 * @param {Any} value The new value of the field
		 * @desc YAHOO custom event fired when the field is "updated"<br /> subscribe with: this.updatedEvt.subscribe(function(e, params) { var value = params[0]; console.log("updated",value, this.updatedEvt); }, this, true);
		 */
		this.updatedEvt = new util.CustomEvent('updated', this);

		// initialize behaviour events
		this.initEvents();

		// Set the initial value
		//   -> no initial value = no style (setClassFromState called by setValue)
		if (!lang.isUndefined(this.options.value)) {
			this.setValue(this.options.value, false);
		}

		// append it immediatly to the parent DOM element
		if (options.parentEl) {
			if (lang.isString(options.parentEl)) {
				Dom.get(options.parentEl).appendChild(this.getEl());
			}
			else {
				options.parentEl.appendChild(this.getEl());
			}
		}
	};


	inputEx.Field.prototype = {

		/**
		 * Set the default values of the options
		 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
		 */
		setOptions: function(options) {
			/**
			 * Configuration object to set the options for this class and the parent classes. See constructor details for options added by this class.
			 */
			this.options = {};

			// Basic options
			this.options.name = options.name;
			this.options.value = options.value;
			this.options.id = options.id || Dom.generateId();
			this.options.label = options.label;
			this.options.description = options.description;
			this.options.helpLink = options.helpLink;

			// Define default messages
			this.options.messages = {};
			this.options.messages.required = (options.messages && options.messages.required) ? options.messages.required : inputEx.messages.required;
			this.options.messages.invalid = (options.messages && options.messages.invalid) ? options.messages.invalid : inputEx.messages.invalid;
			//this.options.messages.valid = (options.messages && options.messages.valid) ? options.messages.valid : inputEx.messages.valid;

			// Other options
			this.options.className = options.className ? options.className : 'inputEx-Field';
			this.options.wrapperClassName = options.wrapperClassName ? options.wrapperClassName : 'inputEx-fieldWrapper';
			this.options.required = lang.isUndefined(options.required) ? false : options.required;
			this.options.showMsg = lang.isUndefined(options.showMsg) ? false : options.showMsg;
			this.options.advancedMode = lang.isUndefined(options.advancedMode) ? false : options.advancedMode;
		},

		/**
		 * Default render of the dom element. Create a divEl that wraps the field.
		 */
		render: function() {

			// Create a DIV element to wrap the editing el and the image
			this.divEl = inputEx.cn('div', {className: this.options.wrapperClassName});
			//qwertz
			if (this.options.id) {
				this.divEl.id = this.options.id;
			}
			if (this.options.required) {
				Dom.addClass(this.divEl, "inputEx-required");
			}
			if(this.options.advancedMode) {
			  Dom.addClass(this.divEl, "advancedMode");
		   }

			// Label element
			if (this.options.label) {
				var labelClassName = '';
				var linkEl;
				if (this.options.description) {
					labelClassName = 'helpAvailable';
				}
				this.labelDiv = inputEx.cn('div', {id: this.divEl.id + '-label', className: 'inputEx-label', 'for': this.divEl.id + '-field'});
				this.labelEl = inputEx.cn('label', {className: labelClassName});
				this.labelEl.appendChild(document.createTextNode(this.options.label));
				this.labelDiv.appendChild(this.labelEl);
				if (this.options.helpLink) {
					linkEl = inputEx.cn('a', {href: this.options.helpLink, target: '_blank', title: 'Open TYPO3 documentation in new window'});
					linkEl.innerHTML = '<img src="./sysext/core/Resources/Public/Icons/T3Icons/apps/apps-toolbar-menu-help.svg" width="12" height="12" style="margin-left: 10px; margin-bottom:2px">';
					this.labelDiv.appendChild(linkEl);
				}
				this.divEl.appendChild(this.labelDiv);
			}

			if (this.options.description) {
				this.options.className += ' helpAvailable';
			}

			this.fieldContainer = inputEx.cn('div', {className: this.options.className}); // for wrapping the field and description

			// Render the component directly
			this.renderComponent();

			// Description
			if (this.options.description) {
				this.descriptionElement = inputEx.cn('div', {id: this.divEl.id + '-desc', className: 'inputEx-description'}, null, this.options.description);
				this.fieldContainer.appendChild(this.descriptionElement);
				Event.addListener(this.labelDiv, "mouseover", this.showDescription, this, true);
				Event.addListener(this.labelDiv, "mouseout", this.hideDescription, this, true);
			}

			this.divEl.appendChild(this.fieldContainer);

			// Insert a float breaker
			this.divEl.appendChild(inputEx.cn('div', null, {clear: 'both'}, " "));
		},

		showDescription: function() {
			this.descriptionElement.style.display = 'block';
		},
		hideDescription: function() {
			this.descriptionElement.style.display = 'none';
		},

		/**
		 * Fire the "updated" event (only if the field validated)
		 * Escape the stack using a setTimeout
		 */
		fireUpdatedEvt: function() {
			// Uses setTimeout to escape the stack (that originiated in an event)
			var that = this;
			setTimeout(function() {
				that.updatedEvt.fire(that.getValue(), that);
			}, 50);
		},

		/**
		 * Render the interface component into this.divEl
		 */
		renderComponent: function() {
			// override me
		},

		/**
		 * The default render creates a div to put in the messages
		 * @return {HTMLElement} divEl The main DIV wrapper
		 */
		getEl: function() {
			return this.divEl;
		},

		/**
		 * Initialize events of the Input
		 */
		initEvents: function() {
			// override me
		},

		/**
		 * Return the value of the input
		 * @return {Any} value of the field
		 */
		getValue: function() {
			// override me
		},

		/**
		 * Function to set the value
		 * @param {Any} value The new value
		 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
		 */
		setValue: function(value, sendUpdatedEvt) {
			// to be inherited

			// set corresponding style
			this.setClassFromState();

			if (sendUpdatedEvt !== false) {
				// fire update event
				this.fireUpdatedEvt();
			}
		},

		/**
		 * Set the styles for valid/invalide state
		 */
		setClassFromState: function() {

			// remove previous class
			if (this.previousState) {
				// remove invalid className for both required and invalid fields
				var className = 'inputEx-' + ((this.previousState == inputEx.stateRequired) ? inputEx.stateInvalid : this.previousState);
				Dom.removeClass(this.divEl, className);
			}

			// add new class
			var state = this.getState();
			if (!(state == inputEx.stateEmpty && Dom.hasClass(this.divEl, 'inputEx-focused') )) {
				// add invalid className for both required and invalid fields
				var className = 'inputEx-' + ((state == inputEx.stateRequired) ? inputEx.stateInvalid : state);
				Dom.addClass(this.divEl, className);
			}

			if (this.options.showMsg) {
				this.displayMessage(this.getStateString(state));
			}

			this.previousState = state;
		},

		/**
		 * Get the string for the given state
		 */
		getStateString: function(state) {
			if (state == inputEx.stateRequired) {
				return this.options.messages.required;
			}
			else if (state == inputEx.stateInvalid) {
				return this.options.messages.invalid;
			}
			else {
				return '';
			}
		},

		/**
		 * Returns the current state (given its value)
		 * @return {String} One of the following states: 'empty', 'required', 'valid' or 'invalid'
		 */
		getState: function() {
			// if the field is empty :
			if (this.isEmpty()) {
				return this.options.required ? inputEx.stateRequired : inputEx.stateEmpty;
			}
			return this.validate() ? inputEx.stateValid : inputEx.stateInvalid;
		},

		/**
		 * Validation of the field
		 * @return {Boolean} field validation status (true/false)
		 */
		validate: function() {
			return true;
		},

		/**
		 * Function called on the focus event
		 * @param {Event} e The original 'focus' event
		 */
		onFocus: function(e) {
			var el = this.getEl();
			Dom.removeClass(el, 'inputEx-empty');
			Dom.addClass(el, 'inputEx-focused');
		},

		/**
		 * Function called on the blur event
		 * @param {Event} e The original 'blur' event
		 */
		onBlur: function(e) {
			Dom.removeClass(this.getEl(), 'inputEx-focused');

			// Call setClassFromState on Blur
			this.setClassFromState();
		},

		/**
		 * onChange event handler
		 * @param {Event} e The original 'change' event
		 */
		onChange: function(e) {
			this.fireUpdatedEvt();
		},

		/**
		 * Close the field and eventually opened popups...
		 */
		close: function() {
		},

		/**
		 * Disable the field
		 */
		disable: function() {
		},

		/**
		 * Enable the field
		 */
		enable: function() {
		},

		/**
		 * Focus the field
		 */
		focus: function() {
		},

		/**
		 * Purge all event listeners and remove the component from the dom
		 */
		destroy: function() {
			var el = this.getEl();

			// Unsubscribe all listeners on the updatedEvt
			this.updatedEvt.unsubscribeAll();

			// Remove from DOM
			if (Dom.inDocument(el)) {
				el.parentNode.removeChild(el);
			}

			// recursively purge element
			util.Event.purgeElement(el, true);
		},

		/**
		 * Update the message
		 * @param {String} msg Message to display
		 */
		displayMessage: function(msg) {
			if (!this.fieldContainer) {
				return;
			}
			if (!this.msgEl) {
				this.msgEl = inputEx.cn('div', {className: 'inputEx-message'});
				try {
					var divElements = this.divEl.getElementsByTagName('div');
					this.divEl.insertBefore(this.msgEl, divElements[(divElements.length - 1 >= 0) ? divElements.length - 1 : 0]); //insertBefore the clear:both div
				} catch(e) {
					alert(e);
				}
			}
			this.msgEl.innerHTML = msg;
		},

		/**
		 * Show the field
		 */
		show: function() {
			this.divEl.style.display = '';
		},

		/**
		 * Hide the field
		 */
		hide: function() {
			this.divEl.style.display = 'none';
		},

		/**
		 * Clear the field by setting the field value to this.options.value
		 * @param {boolean} [sendUpdatedEvt] (optional) Wether this clear should fire the updatedEvt or not (default is true, pass false to NOT send the event)
		 */
		clear: function(sendUpdatedEvt) {
			this.setValue(lang.isUndefined(this.options.value) ? '' : this.options.value, sendUpdatedEvt);
		},

		/**
		 * Should return true if empty
		 */
		isEmpty: function() {
			return this.getValue() === '';
		}
	};

})();
/****************************************************
 * 		overwrite the default listField to enable
 * 		value manipulation after a "Add" event
 * 		(see line
 **************************************************/
(function() {

	   var inputEx = YAHOO.inputEx, lang = YAHOO.lang, Event = YAHOO.util.Event, Dom = YAHOO.util.Dom;
	/**
	 * @class   Meta field to create a list of other fields
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options:
	 * <ul>
	 *   <li>sortable: Add arrows to sort the items if true (default false)</li>
	 *   <li>elementType: an element type definition (default is {type: 'string'})</li>
	 *   <li>useButtons: use buttons instead of links (default false)</li>
	 *   <li>unique: require values to be unique (default false)</li>
	 *   <li>listAddLabel: if useButtons is false, text to add an item</li>
	 *   <li>listRemoveLabel: if useButtons is false, text to remove an item</li>
	 * </ul>
	 */
	inputEx.ListField = function(options) {

	   /**
	    * List of all the subField instances
	    */
	   this.subFields = [];

	   inputEx.ListField.superclass.constructor.call(this, options);
	};
	lang.extend(inputEx.ListField,inputEx.Field,
	/**
	 * @scope inputEx.ListField.prototype
	 */
	{
		// reference to the last copied fieldset
		lastCopiedFieldSet : {},
		/**
		 * Set the ListField classname
		 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
		 */
		setOptions: function(options) {
		   inputEx.ListField.superclass.setOptions.call(this, options);

		   this.options.className = options.className ? options.className : 'inputEx-Field inputEx-ListField';

		   this.options.sortable = lang.isUndefined(options.sortable) ? false : options.sortable;
		   this.options.elementType = options.elementType || {type: 'string'};
		   this.options.useButtons = lang.isUndefined(options.useButtons) ? false : options.useButtons;
		   this.options.unique = lang.isUndefined(options.unique) ? false : options.unique;

		   this.options.listAddLabel = options.listAddLabel || inputEx.messages.listAddLink;
		   this.options.listRemoveLabel = options.listRemoveLabel || inputEx.messages.listRemoveLink;
		},

		/**
		 * Render the addButton
		 */
		renderComponent: function() {

		   // Add element button
		   if(this.options.useButtons) {
		      this.addButton = inputEx.cn('img', {src: inputEx.spacerUrl, className: 'inputEx-ListField-addButton'});
		      this.fieldContainer.appendChild(this.addButton);
	      }

		   // List label
		   this.fieldContainer.appendChild( inputEx.cn('span', null, {marginLeft: "4px"}, this.options.listLabel) );

		   // Div element to contain the children
		   this.childContainer = inputEx.cn('div', {className: 'inputEx-ListField-childContainer'});
		   this.fieldContainer.appendChild(this.childContainer);

		   // Add link
		   if(!this.options.useButtons) {
		      this.addButton = inputEx.cn('a', {className: 'inputEx-List-link'}, null, this.options.listAddLabel);
		      this.fieldContainer.appendChild(this.addButton);
	      }
		},

		/**
		 * Handle the click event on the add button
		 */
		initEvents: function() {
		   Event.addListener(this.addButton, 'click', this.onAddButton, this, true);
		},

		/**
	    * Validate each field
	    * @returns {Boolean} true if all fields validate, required fields are not empty and unique constraint (if specified) is not violated
	    */
	   validate: function() {
	      var response = true;
	      var uniques = {};

	      // Validate all the sub fields
	      for (var i = 0 ; i < this.subFields.length && response; i++) {
	         var input = this.subFields[i];
	         input.setClassFromState(); // update field classes (mark invalid fields...)
	         var state = input.getState();
	         if( state == inputEx.stateRequired || state == inputEx.stateInvalid ) {
	            response = false; // but keep looping on fields to set classes
	         }
	         if(this.options.unique) {
	            var hash = lang.dump(input.getValue());
	            //logDebug('listfied index ',i, 'hash', hash);
	            if(uniques[hash]) {
	               response = false;    // not unique
	            } else {
	               uniques[hash] = true;
	            }
	          }
	      }
	      return response;
	   },

		/**
		 * Set the value of all the subfields
		 * @param {Array} value The list of values to set
		 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
		 */
		setValue: function(value, sendUpdatedEvt) {

		   if(!lang.isArray(value) ) {
		      // TODO: throw exceptions ?
		      return;
		   }

		   // Set the values (and add the lines if necessary)
		   for(var i = 0 ; i < value.length ; i++) {
		      if(i == this.subFields.length) {
		         this.addElement(value[i]);
		      }
		      else {
		         this.subFields[i].setValue(value[i], false);
		      }
		   }

		   // Remove additional subFields
		   var additionalElements = this.subFields.length-value.length;
		   if(additionalElements > 0) {
		      for(var i = 0 ; i < additionalElements ; i++) {
		         this.removeElement(value.length);
		      }
		   };

		   inputEx.ListField.superclass.setValue.call(this, value, sendUpdatedEvt);
		},

		/**
		 * Return the array of values
		 * @return {Array} The array
		 */
		getValue: function() {
		   var values = [];
		   for(var i = 0 ; i < this.subFields.length ; i++) {
		      values[i] = this.subFields[i].getValue();
		   }
		   return values;
		},

		/**
		 * Adds an element
		 * @param {Any} The initial value of the subfield to create
		 * @return {inputEx.Field} SubField added instance
		 */
		addElement: function(value) {

		   // Render the subField
		   var subFieldEl = this.renderSubField(value);

		   // Adds it to the local list
		   this.subFields.push(subFieldEl);

		   return subFieldEl;
		},

		/**
		 * Add a new element to the list and fire updated event
		 * @param {Event} e The original click event
		 */
		onAddButton: function(e) {
		   Event.stopEvent(e);
		   // Add a field with no value:
		   var subFieldEl = this.addElement(),
			   fieldset,
			   copiedFieldSet = this.lastCopiedFieldSet;
			if(typeof copiedFieldSet['inputs'] !='undefined'){
				for(i = 0;i <  copiedFieldSet['inputs'].length;i++){
					fieldName =  copiedFieldSet['inputs'][i]['options']['name'];
					if (fieldName == 'relationName' || fieldName == 'propertyName'|| fieldName == 'propertyDescription') {
						copiedFieldSet['inputs'][i].setValue('');
					} else if (fieldName == 'uid') {
						copiedFieldSet['inputs'][i].setValue(parseInt(new Date().getTime() * Math.random(), 10));
					} else if (fieldName == 'propertyType') {
						fieldset = copiedFieldSet.fieldset;
						fieldset.removeAttribute('class');
						Dom.addClass(fieldset, copiedFieldSet['inputs'][i].getValue());
					} else if (fieldName == 'advancedSettings') {
						if (copiedFieldSet.options.value) {
							fieldset = copiedFieldSet.fieldset;
							fieldset.removeAttribute('class');
							Dom.addClass(fieldset, copiedFieldSet.options.value.relationType);
						}
					}
				}
			}

		   // Focus on this field
		   subFieldEl.focus();

		   // Fire updated !
		   this.fireUpdatedEvt();
		},

		/**
		 * Adds a new line to the List Field
	 	 * @param {Any} The initial value of the subfield to create
		 * @return  {inputEx.Field} instance of the created field (inputEx.Field or derivative)
		 */
		renderSubField: function(value) {

		   // Div that wraps the deleteButton + the subField
		   var newDiv = inputEx.cn('div');

		   // Delete button
		   if(this.options.useButtons) {
		      var delButton = inputEx.cn('img', {src: inputEx.spacerUrl, className: 'inputEx-ListField-delButton'});
		      Event.addListener( delButton, 'click', this.onDelete, this, true);
		      newDiv.appendChild( delButton );
	      }

		   // Instanciate the new subField
		   var opts = lang.merge({}, this.options.elementType);
		   if(!opts.inputParams) opts.inputParams = {};
		   if(!lang.isUndefined(value)) opts.inputParams.value = value;

		   // IS: Quick hack to get the list element number from within the field and its subfields.
		   document.currentListElementNumber = this.subFields.length;

		   var el = inputEx.buildField(opts);

		   /****  set a reference to the copy to enable value manipulation ****/
		   this.lastCopiedFieldSet = el;
		   var subFieldEl = el.getEl();

		   Dom.setStyle(subFieldEl, 'margin-left', '4px');
		   Dom.setStyle(subFieldEl, 'float', 'left');
		   newDiv.appendChild( subFieldEl );

		   // Subscribe the onChange event to resend it
		   el.updatedEvt.subscribe(this.onChange, this, true);

		   // Arrows to order:
		   if(this.options.sortable) {
		      var arrowUp = inputEx.cn('div', {className: 'inputEx-ListField-Arrow inputEx-ListField-ArrowUp t3js-icon icon icon-size-small '});
		      arrowUp.innerHTML = '<span class="icon-markup"> <img src="./sysext/core/Resources/Public/Icons/T3Icons/actions/actions-move-up.svg" width="16" height="16"> </span>';
		      Event.addListener(arrowUp, 'click', this.onArrowUp, this, true);
		      var arrowDown = inputEx.cn('div', {className: 'inputEx-ListField-Arrow inputEx-ListField-ArrowDown t3js-icon icon icon-size-small '});
			   arrowDown.innerHTML = '<span class="icon-markup"> <img src="./sysext/core/Resources/Public/Icons/T3Icons/actions/actions-move-down.svg" width="16" height="16"> </span>';
		      Event.addListener(arrowDown, 'click', this.onArrowDown, this, true);
		      newDiv.appendChild( arrowUp );
		      newDiv.appendChild( arrowDown );
		   }

		   // Delete link
		   if(!this.options.useButtons) {
		      var delButton = inputEx.cn('div', {className: 'inputEx-List-link t3js-icon icon icon-size-small icon-state-default t3-icon-edit-delete deleteButton icon-actions-edit-delete'}, null, this.options.listRemoveLabel);
			  delButton.innerHTML = '<span class="icon-markup"><img src="./sysext/core/Resources/Public/Icons/T3Icons/actions/actions-edit-delete.svg" width="16" height="16"></span>';
		      Event.addListener( delButton, 'click', this.onDelete, this, true);
		      newDiv.appendChild( delButton );
	      }

		   // Line breaker
		   newDiv.appendChild( inputEx.cn('div', null, {clear: "both"}) );

		   this.childContainer.appendChild(newDiv);

		   return el;
		},

		/**
		 * Switch a subField with its previous one
		 * Called when the user clicked on the up arrow of a sortable list
		 * @param {Event} e Original click event
		 */
		onArrowUp: function(e) {
		   var childElement = Event.getTarget(e).parentNode.parentNode.parentNode;

		   var previousChildNode = null;
		   var nodeIndex = -1;
		   for(var i = 1 ; i < childElement.parentNode.childNodes.length ; i++) {
		      var el=childElement.parentNode.childNodes[i];
		      if(el == childElement) {
		         previousChildNode = childElement.parentNode.childNodes[i-1];
		         nodeIndex = i;
		         break;
		      }
		   }

		   if(previousChildNode) {
		      // Remove the line
		      var removedEl = this.childContainer.removeChild(childElement);

		      // Adds it before the previousChildNode
		      var insertedEl = this.childContainer.insertBefore(removedEl, previousChildNode);

		      // Swap this.subFields elements (i,i-1)
		      var temp = this.subFields[nodeIndex];
		      this.subFields[nodeIndex] = this.subFields[nodeIndex-1];
		      this.subFields[nodeIndex-1] = temp;

		      // Color Animation
		      if(this.arrowAnim) {
		         this.arrowAnim.stop(true);
		      }
		      this.arrowAnim = new YAHOO.util.ColorAnim(insertedEl, {backgroundColor: { from: '#eeee33' , to: '#eeeeee' }}, 0.4);
		      this.arrowAnim.onComplete.subscribe(function() { Dom.setStyle(insertedEl, 'background-color', ''); });
		      this.arrowAnim.animate();

		      // Fire updated !
		      this.fireUpdatedEvt();
		   }
		},

		/**
		 * Switch a subField with its next one
		 * Called when the user clicked on the down arrow of a sortable list
		 * @param {Event} e Original click event
		 */
		onArrowDown: function(e) {
		   var childElement = Event.getTarget(e).parentNode.parentNode.parentNode;

		   var nodeIndex = -1;
		   var nextChildNode = null;
		   for(var i = 0 ; i < childElement.parentNode.childNodes.length ; i++) {
		      var el=childElement.parentNode.childNodes[i];
		      if(el == childElement) {
		         nextChildNode = childElement.parentNode.childNodes[i+1];
		         nodeIndex = i;
		         break;
		      }
		   }

		   if(nextChildNode) {
		      // Remove the line
		      var removedEl = this.childContainer.removeChild(childElement);
		      // Adds it after the nextChildNode
		      var insertedEl = Dom.insertAfter(removedEl, nextChildNode);

		      // Swap this.subFields elements (i,i+1)
		      var temp = this.subFields[nodeIndex];
		      this.subFields[nodeIndex] = this.subFields[nodeIndex+1];
		      this.subFields[nodeIndex+1] = temp;

		      // Color Animation
		      if(this.arrowAnim) {
		         this.arrowAnim.stop(true);
		      }
		      this.arrowAnim = new YAHOO.util.ColorAnim(insertedEl, {backgroundColor: { from: '#eeee33' , to: '#eeeeee' }}, 1);
		      this.arrowAnim.onComplete.subscribe(function() { Dom.setStyle(insertedEl, 'background-color', ''); });
		      this.arrowAnim.animate();

		      // Fire updated !
		      this.fireUpdatedEvt();
		   }
		},

		/**
		 * Called when the user clicked on a delete button.
		 * @param {Event} e The original click event
		 */
		onDelete: function(e) {

		   Event.stopEvent(e);

		   // Get the wrapping div element
		   var elementDiv = Event.getTarget(e).parentNode.parentNode.parentNode;

		   // Get the index of the subField
		   var index = -1;

		   var subFieldEl = elementDiv.childNodes[this.options.useButtons ? 1 : 0];
		   for(var i = 0 ; i < this.subFields.length ; i++) {
		      if(this.subFields[i].getEl() == subFieldEl) {
		         index = i;
		         break;
		      }
		   }

		   // Remove it
		   if(index != -1) {
		      this.removeElement(index);
		   }

		   // Fire the updated event
		   this.fireUpdatedEvt();
		},

		/**
		 * Remove the line from the dom and the subField from the list.
		 * @param {integer} index The index of the element to remove
		 */
		removeElement: function(index) {
		   var elementDiv = this.subFields[index].getEl().parentNode;
			var fieldToRemove = this.subFields[index];
			if (fieldToRemove.inputs) {
				for(var i = 0; i < fieldToRemove.inputs.length; i++) {
					if(fieldToRemove.inputs[i].terminal !== undefined) {
						fieldToRemove.inputs[i].terminal.removeAllWires();
					}
				}
			}

		   this.subFields[index] = undefined;
		   this.subFields = inputEx.compactArray(this.subFields);

		   // Remove the element
		   elementDiv.parentNode.removeChild(elementDiv);
		}

	});

	/**
	 * Register this class as "list" type
	 */
	inputEx.registerType("list", inputEx.ListField);


	inputEx.messages.listAddLink = TYPO3.settings.extensionBuilder._LOCAL_LANG.add;
	inputEx.messages.listRemoveLink = TYPO3.settings.extensionBuilder._LOCAL_LANG.remove;

	})();

(function() {

   var inputEx = YAHOO.inputEx, lang = YAHOO.lang, Dom = YAHOO.util.Dom, Event = YAHOO.util.Event;

/**
 * @class Handle a group of fields
 * @extends inputEx.Field
 * @constructor
 * @param {Object} options The following options are added for Groups and subclasses:
 * <ul>
 *   <li>fields: Array of input fields declared like { label: 'Enter the value:' , type: 'text' or fieldClass: inputEx.Field, optional: true/false, inputParams: {inputparams object} }</li>
 *   <li>legend: The legend for the fieldset (default is an empty string)</li>
 *   <li>collapsible: Boolean to make the group collapsible (default is false)</li>
 *   <li>collapsed: If collapsible only, will be collapsed at creation (default is false)</li>
 *   <li>flatten:</li>
 * </ul>
 */
inputEx.Group = function(options) {
   inputEx.Group.superclass.constructor.call(this,options);

   if(this.hasInteractions) {
      for(var i = 0 ; i < this.inputs.length ; i++) {
         this.runInteractions(this.inputs[i],this.inputs[i].getValue());
      }
   }
};
lang.extend(inputEx.Group, inputEx.Field,
/**
 * @scope inputEx.Group.prototype
 */
{

   /**
    * Adds some options: legend, collapsible, fields...
    * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
    */
   setOptions: function(options) {

   	this.options = {};

   	this.options.className = options.className || 'inputEx-Group';

   	this.options.fields = options.fields;

   	this.options.id = options.id;

   	this.options.name = options.name;

   	this.options.value = options.value;

   	this.options.flatten = options.flatten;

      this.options.legend = options.legend || '';

      // leave this for compatibility reasons
      this.inputConfigs = options.fields;

      this.options.collapsible = lang.isUndefined(options.collapsible) ? false : options.collapsible;
      this.options.collapsed = lang.isUndefined(options.collapsed) ? false : options.collapsed;

      this.options.disabled = lang.isUndefined(options.disabled) ? false : options.disabled;

      // Array containing the list of the field instances
      this.inputs = [];

      // Associative array containing the field instances by names
      this.inputsNames = {};
   },

   /**
    * Render the group
    */
   render: function() {
	   var className = this.options.className;
		if (this.options.collapsible) {
			className += ' expanded';
		}
		// Create the div wrapper for this group
		this.divEl = inputEx.cn('div', {className: className});
	   if(this.options.id) {
   	   this.divEl.id = this.options.id;
   	}

  	   this.renderFields(this.divEl);

  	   if(this.options.disabled) {
  	      this.disable();
  	   }
   },

   /**
    * Render all the fields.
    * We use the parentEl so that inputEx.Form can append them to the FORM tag
    */
   renderFields: function(parentEl) {

      this.fieldset = inputEx.cn('fieldset');
      this.legend = inputEx.cn('legend', {className: 'inputEx-Group-legend'});

      // Option Collapsible
      //TODO: <MF> should it be renamed to 'collapsed'?
      if(this.options.collapsible) {
         var collapseImg = inputEx.cn('div', {className: 'inputEx-Group-collapseImg'}, null, ' ');
         this.legend.appendChild(collapseImg);
         inputEx.sn(this.fieldset,{className:'inputEx-Expanded'});
      }

      if(!lang.isUndefined(this.options.legend) && this.options.legend !== ''){
         this.legend.appendChild( document.createTextNode(" "+this.options.legend) );
      }

      if( this.options.collapsible || (!lang.isUndefined(this.options.legend) && this.options.legend !== '') ) {
         this.fieldset.appendChild(this.legend);
      }

      // Iterate this.createInput on input fields
      for (var i = 0 ; i < this.options.fields.length ; i++) {
         var input = this.options.fields[i];

         // Render the field
		// input = this.createUniqueIdForUidField(input);

		if(input.inputParams.name == 'uid' && typeof input.inputParams.value == 'undefined') {
			var d = new Date,
			uniqueUid = parseInt(d.getTime() * Math.random());
			input.inputParams.value = uniqueUid;
		}

         var field = this.renderField(input);


         this.fieldset.appendChild(field.getEl() );
  	   }

  	   // Collapsed at creation ?
  	   if(this.options.collapsed) {
  	      this.toggleCollapse();
  	   }

  	   // Append the fieldset
  	   parentEl.appendChild(this.fieldset);
   },

   /**
    * Instanciate one field given its parameters, type or fieldClass
    * @param {Object} fieldOptions The field properties as required bu inputEx.buildField
    */
   renderField: function(fieldOptions) {

      // Instanciate the field
      var fieldInstance = inputEx.buildField(fieldOptions);

	   this.inputs.push(fieldInstance);

      // Create an index to access fields by their name
      if(fieldInstance.options.name) {
         this.inputsNames[fieldInstance.options.name] = fieldInstance;
      }

      // Create the this.hasInteractions to run interactions at startup
      if(!this.hasInteractions && fieldOptions.interactions) {
         this.hasInteractions = true;
      }

	   // Subscribe to the field "updated" event to send the group "updated" event
      fieldInstance.updatedEvt.subscribe(this.onChange, this, true);

      return fieldInstance;
   },

   /**
    * Add a listener for the 'collapsible' option
    */
   initEvents: function() {
      if(this.options.collapsible) {
         Event.addListener(this.legend, "click", this.toggleCollapse, this, true);
      }
   },

   /**
    * Toggle the collapse state
    */
   toggleCollapse: function() {
       var fieldset = $(this.fieldset),
           divElement = $(this.divEl);
      if(fieldset.hasClass('inputEx-Expanded')) {
          fieldset.removeClass('inputEx-Expanded').addClass('inputEx-Collapsed');
          $(this.divEl).removeClass('expanded').addClass('collapsed');
      }
      else {
          var container = divElement.parents('.WireIt-Container').first();
		  if(container.length) {
              //var containerId = container.id;
              container.find('.inputEx-Expanded,.fieldset').each(function(index, el) {
                  $(el).removeClass('inputEx-Expanded').addClass('inputEx-Collapsed');
			  });
              $('.expanded').each(function(index, el) {
                  $(el).removeClass('expanded').addClass('collapsed');
			  });
		  }
          fieldset.removeClass('inputEx-Collapsed').addClass('inputEx-Expanded');
          divElement.removeClass('collapsed').addClass('expanded');
      }
   },

   /**
    * Validate each field
    * @returns {Boolean} true if all fields validate and required fields are not empty
    */
   validate: function() {
      var response = true;

      // Validate all the sub fields
      for (var i = 0 ; i < this.inputs.length ; i++) {
   	   var input = this.inputs[i];
   	   input.setClassFromState(); // update field classes (mark invalid fields...)
   	   var state = input.getState();
   	   if( state == inputEx.stateRequired || state == inputEx.stateInvalid ) {
   		   response = false; // but keep looping on fields to set classes
   	   }
      }
      return response;
   },

   /**
    * Enable all fields in the group
    */
   enable: function() {
 	   for (var i = 0 ; i < this.inputs.length ; i++) {
 	      this.inputs[i].enable();
      }
   },

   /**
    * Disable all fields in the group
    */
   disable: function() {
 	   for (var i = 0 ; i < this.inputs.length ; i++) {
 	      this.inputs[i].disable();
      }
   },

   /**
    * Set the values of each field from a key/value hash object
     * @param {Any} value The group value
     * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
    */
   setValue: function(oValues, sendUpdatedEvt) {
      if(!oValues) {
         return;
      }
	   for (var i = 0 ; i < this.inputs.length ; i++) {
	      var field = this.inputs[i];
	      var name = field.options.name;
	      if(name && !lang.isUndefined(oValues[name]) ) {
	         field.setValue(oValues[name], false); // don't fire the updated event !
	      }
	      else {
	         field.clear(false);
	      }
      }

	   if(sendUpdatedEvt !== false) {
	      // fire update event
         this.fireUpdatedEvt();
      }
   },

   /**
    * Return an object with all the values of the fields
    */
   getValue: function() {
	   var o = {};
	   for (var i = 0 ; i < this.inputs.length ; i++) {
	      var v = this.inputs[i].getValue();
	      if(this.inputs[i].options.name) {
	         if(this.inputs[i].options.flatten && lang.isObject(v) ) {
	            lang.augmentObject( o, v);
	         }
	         else {
		         o[this.inputs[i].options.name] = v;
	         }
	      }
      }
	   return o;
   },

   /**
    * Close the group (recursively calls "close" on each field, does NOT hide the group )
    * Call this function before hidding the group to close any field popup
    */
   close: function() {
      for (var i = 0 ; i < this.inputs.length ; i++) {
 	      this.inputs[i].close();
      }
   },

   /**
    * Set the focus to the first input in the group
    */
   focus: function() {
      if( this.inputs.length > 0 ) {
         this.inputs[0].focus();
      }
   },

   /**
    * Return the sub-field instance by its name property
    * @param {String} fieldName The name property
    */
   getFieldByName: function(fieldName) {
      if( !this.inputsNames.hasOwnProperty(fieldName) ) {
         return null;
      }
      return this.inputsNames[fieldName];
   },


   /**
    * Called when one of the group subfields is updated.
    * @param {String} eventName Event name
    * @param {Array} args Array of [fieldValue, fieldInstance]
    */
   onChange: function(eventName, args) {

      // Run interactions
      var fieldValue = args[0];
      var fieldInstance = args[1];
      this.runInteractions(fieldInstance,fieldValue);

      //this.setClassFromState();

      this.fireUpdatedEvt();
   },

   /**
    * Run an action (for interactions)
    * @param {Object} action inputEx action object
    * @param {Any} triggerValue The value that triggered the interaction
    */
   runAction: function(action, triggerValue) {
      var field = this.getFieldByName(action.name);
      if( YAHOO.lang.isFunction(field[action.action]) ) {
         field[action.action].call(field);
      }
      else if( YAHOO.lang.isFunction(action.action) ) {
         action.action.call(field, triggerValue);
      }
      else {
         throw new Error("action "+action.action+" is not a valid action for field "+action.name);
      }
   },

   /**
    * Run the interactions for the given field instance
    * @param {inputEx.Field} fieldInstance Field that just changed
    * @param {Any} fieldValue Field value
    */
   runInteractions: function(fieldInstance,fieldValue) {

      var index = inputEx.indexOf(fieldInstance, this.inputs);
      var fieldConfig = this.options.fields[index];
      if( YAHOO.lang.isUndefined(fieldConfig.interactions) ) return;

      // Let's run the interactions !
      var interactions = fieldConfig.interactions;
      for(var i = 0 ; i < interactions.length ; i++) {
         var interaction = interactions[i];
         if(interaction.valueTrigger === fieldValue) {
            for(var j = 0 ; j < interaction.actions.length ; j++) {
               this.runAction(interaction.actions[j], fieldValue);
            }
         }
      }

   },

	/**
	 * Clear all subfields
	 * @param {boolean} [sendUpdatedEvt] (optional) Wether this clear should fire the updatedEvt or not (default is true, pass false to NOT send the event)
	 */
	clear: function(sendUpdatedEvt) {
	   for(var i = 0 ; i < this.inputs.length ; i++) {
	      this.inputs[i].clear(false);
	   }
	   if(sendUpdatedEvt !== false) {
	      // fire update event
         this.fireUpdatedEvt();
      }
	}


});


/**
 * Register this class as "group" type
 */
inputEx.registerType("group", inputEx.Group);


})();
// This file should be placed between "inputEx/field.js" and all other inputEx fields
// see http://javascript.neyric.com/inputex
(function() {

	var lang = YAHOO.lang;

	/**
	 * Copy of the original inputEx.Field class that we're gonna override to extend it.
	 * @class BaseField
	 * @namespace inputEx
	 */
	inputEx.BaseField = inputEx.Field;

	/**
	 * Class to make inputEx Fields "wirable".Re-create inputEx.Field adding the wirable properties
	 * @class Field
	 * @namespace inputEx
	 * @extends inputEx.BaseField
	 */
	inputEx.Field = function(options) {
		inputEx.Field.superclass.constructor.call(this, options);
	};

	lang.extend(inputEx.Field, inputEx.BaseField, {

		/**
		 * Adds a wirable option to every field
		 * @method setOptions
		 */
		setOptions: function(options) {
			inputEx.Field.superclass.setOptions.call(this, options);

			this.options.wirable = lang.isUndefined(options.wirable) ? false : options.wirable;
			this.options.container = options.container;

			// IS: Make it possible to supply custom drag drop configuration
			this.options.ddConfig = options.ddConfig;
		},

		/**
		 * Adds a terminal to each field
		 * @method render
		 */
		render: function() {

			// IS:
			this.listElementNumber = document.currentListElementNumber;

			inputEx.Field.superclass.render.call(this);

			if (this.options.wirable) {
				this.renderTerminal();
			}
		},

		/**
		 * Render the associated input terminal
		 * @method renderTerminal
		 */
		renderTerminal: function() {

			var wrapper = inputEx.cn('div', {className: 'WireIt-InputExTerminal'});
			this.divEl.insertBefore(wrapper, this.fieldContainer);
			this.terminal = new WireIt.Terminal(wrapper, {
				name: this.options.name + '_' + this.listElementNumber,
				direction: [-1,0],
				fakeDirection: [0, 1],
				ddConfig: this.options.ddConfig || {
					type: "input",
					allowedTypes: ["output"]
				},
				nMaxWires: 1 }, this.options.container);

			// Dfly name for this terminal
			this.terminal.dflyName = "input_" + this.options.name;

			// Reference to the container
			if (this.options.container) {
				this.options.container.terminals.push(this.terminal);
			}

			// Register the events
			this.terminal.eventAddWire.subscribe(this.onAddWire, this, true);
			this.terminal.eventRemoveWire.subscribe(this.onRemoveWire, this, true);
		},

		/**
		 * Remove the input wired state on the
		 * @method onAddWire
		 */
		onAddWire: function(e, params) {
			this.options.container.onAddWire(e, params);
			this.disable();
			this.el.value = "[wired]";
		},

		/**
		 * Remove the input wired state on the
		 * @method onRemoveWire
		 */
		onRemoveWire: function(e, params) {
			this.options.container.onRemoveWire(e, params);
			this.enable();
			this.el.value = "";
		}

	});


})();
(function() {

	var inputEx = YAHOO.inputEx, lang = YAHOO.lang;
	/**
	 * Contains the various visualization methods
	 */
	inputEx.visus = {

		/**
		 * Use the trimpath-template engine
		 * see http://code.google.com/p/trimpath/wiki/JavaScriptTemplates for syntax
		 * options = {visuType: 'trimpath', template: "String template"}
		 */
		trimpath: function(options, data) {
			if (!TrimPath) {
				alert('TrimPath is not on the page. Please load inputex/lib/trimpath-template.js');
				return;
			}
			var tpl = TrimPath.parseTemplate(options.template);
			var ret = tpl.process(data);
			return ret;
		},

		/**
		 * Use a rendering function
		 * options = {visuType: 'func', func: function(data) { ...code here...} }
		 */
		"func": function(options, data) {
			return options.func(data);
		},

		/**
		 * Use YAHOO.lang.dump
		 * options = {visuType: 'dump'}
		 */
		dump: function(options, data) {
			return lang.dump(data);
		}

	};

	/**
	 * Render 'data' using a visualization function described by 'visuOptions'
	 * @static
	 * @param {Object} visuOptions The visu parameters {visuType: 'myType', ...args...}
	 * @param {Object} data The input data to send to the template
	 * @param {HTMLElement || String} parentEl optional Set the result as content of parentEl
	 * @return {HTMLElement || String} Either the inserted HTMLElement or the String set to parentEl.innerHTML
	 */
	inputEx.renderVisu = function(visuOptions, data, parentEl) {

		var opts = visuOptions || {};
		var visuType = opts.visuType || 'dump';

		if (!inputEx.visus.hasOwnProperty(visuType)) {
			throw new Error("inputEx: no visu for visuType: " + visuType);
		}

		var f = inputEx.visus[visuType];
		if (!lang.isFunction(f)) {
			throw new Error("inputEx: no visu for visuType: " + visuType);
		}

		var v = null;
		try {
			v = f(opts, data);
		}
		catch(ex) {
			throw new Error("inputEx: error while running visu " + visuType + " : " + ex.message);
			return;
		}

		// Get the node
		var node = null;
		if (parentEl) {
			if (lang.isString(parentEl)) {
				node = YAHOO.util.Dom.get(parentEl);
			}
			else {
				node = parentEl;
			}
		}

		// Insert it
		if (node) {
			if (YAHOO.lang.isObject(v) && v.tagName) {
				node.innerHTML = "";
				node.appendChild(v);
			}
			else {
				node.innerHTML = v;
			}
		}

		return v;
	};

})();
(function() {

	var inputEx = YAHOO.inputEx, lang = YAHOO.lang, Event = YAHOO.util.Event, Dom = YAHOO.util.Dom;

	/**
	 * @class Basic string field (equivalent to the input type "text")
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options:
	 * <ul>
	 *	  <li>regexp: regular expression used to validate (otherwise it always validate)</li>
	 *   <li>size: size attribute of the input</li>
	 *   <li>maxLength: maximum size of the string field (no message display, uses the maxlength html attribute)</li>
	 *   <li>minLength: minimum size of the string field (will display an error message if shorter)</li>
	 *   <li>typeInvite: string displayed when the field is empty</li>
	 *   <li>readonly: set the field as readonly</li>
	 * </ul>
	 */
	inputEx.StringField = function(options) {
		inputEx.StringField.superclass.constructor.call(this, options);

		if (this.options.typeInvite) {
			this.updateTypeInvite();
		}
	};

	lang.extend(inputEx.StringField, inputEx.Field,
		/**
		 * @scope inputEx.StringField.prototype
		 */
		{
			/**
			 * Set the default values of the options
			 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
			 */
			setOptions: function(options) {
				inputEx.StringField.superclass.setOptions.call(this, options);
				this.options.regexp = options.regexp;
				this.options.size = options.size;
				this.options.maxLength = options.maxLength;
				this.options.minLength = options.minLength;
				this.options.typeInvite = options.typeInvite;
				this.options.readonly = options.readonly;
				this.options.forceLowerCase = options.forceLowerCase;
				this.options.forceAlphaNumeric = options.forceAlphaNumeric;
				this.options.forceAlphaNumericUnderscore = options.forceAlphaNumericUnderscore;
				this.options.noSpaces = options.noSpaces;
				this.options.ucFirst = options.ucFirst;
				this.options.lcFirst = options.lcFirst;
				this.options.firstCharNonNumeric = options.firstCharNonNumeric;
				this.options.advancedMode = options.advancedMode ? options.advancedMode : false;
				this.options.classname = options.classname;
				this.options.placeholder = options.placeholder;
			},


			/**
			 * Render an 'INPUT' DOM node
			 */
			renderComponent: function() {

				// This element wraps the input node in a float: none div
				this.wrapEl = inputEx.cn('div', {className: 'inputEx-StringField-wrapper'});

				// Attributes of the input field
				var attributes = {};
				attributes.type = 'text';
				attributes.id = this.divEl.id ? this.divEl.id + '-field' : YAHOO.util.Dom.generateId();
				if (this.options.size) attributes.size = this.options.size;
				if (this.options.name) attributes.name = this.options.name;
				if (this.options.placeholder) attributes.placeholder = this.options.placeholder;
				if (this.options.readonly) attributes.readonly = 'readonly';

				if (this.options.maxLength) attributes.maxLength = this.options.maxLength;

				// Create the node
				this.el = inputEx.cn('input', attributes);

				// Append it to the main element
				this.wrapEl.appendChild(this.el);
				Dom.addClass(this.divEl,'textfieldWrapper');
				if(this.options.advancedMode) {
				  Dom.addClass(this.divEl, "advancedMode");
			    }
				if(this.options.classname) {
				  Dom.addClass(this.divEl, this.options.classname);
				}
				this.fieldContainer.appendChild(this.wrapEl);
			},

			/**
			 * Register the change, focus and blur events
			 */
			initEvents: function() {
				Event.addListener(this.el, "change", this.onChange, this, true);

				if (YAHOO.env.ua.ie) { // refer to inputEx-95
					var field = this.el;
					new YAHOO.util.KeyListener(this.el, {keys:[13]}, {fn:function() {
						field.blur();
						field.focus();
					}}).enable();
				}

				Event.addFocusListener(this.el, this.onFocus, this, true);
				Event.addBlurListener(this.el, this.onBlur, this, true);

				Event.addListener(this.el, "keypress", this.onKeyPress, this, true);
				Event.addListener(this.el, "keyup", this.onKeyUp, this, true);
			},

			/**
			 * Return the string value
			 * @param {String} The string value
			 */
			getValue: function() {
				return (this.options.typeInvite && this.el.value == this.options.typeInvite) ? '' : this.el.value;
			},

			/**
			 * Function to set the value
			 * @param {String} value The new value
			 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
			 */
			setValue: function(value, sendUpdatedEvt) {
				this.el.value = value;
				this.el.setAttribute('title', value);
				// call parent class method to set style and fire updatedEvt
				inputEx.StringField.superclass.setValue.call(this, value, sendUpdatedEvt);
			},

			/**
			 * Uses the optional regexp to validate the field value
			 */
			validate: function() {
				var val = this.getValue();

				// empty field
				if (val == '') {
					// validate only if not required
					return !this.options.required;
				}

				// Check regex matching and minLength (both used in password field...)
				var result = true;

				// if we are using a regular expression
				if (this.options.regexp) {
					var reg = new RegExp(this.options.regexp);
					result = result && reg.test(val);
				}
				if (this.options.minLength) {
					result = result && val.length >= this.options.minLength;
				}
				if (this.options.forceAlphaNumeric) {
					var forceAlphaNumericRegex = new RegExp(/[^a-zA-Z0-9]/g);
					result = result && !forceAlphaNumericRegex.test(val);
				}
				if (this.options.forceAlphaNumericUnderscore) {
					var forceAlphaNumericUnderscoreRegex = new RegExp(/[^a-zA-Z0-9_]/g);
					result = result && !forceAlphaNumericUnderscoreRegex.test(val);
				}
				if (this.options.firstCharNonNumeric) {
					var firstCharNonNumericRegex = new RegExp(/(^[a-zA-Z])/);
					result = result && firstCharNonNumericRegex.test(val);
				}
				return result;
			},

			/**
			 * Disable the field
			 */
			disable: function() {
				this.el.disabled = true;
			},

			/**
			 * Enable the field
			 */
			enable: function() {
				this.el.disabled = false;
			},

			/**
			 * Set the focus to this field
			 */
			focus: function() {
				// Can't use lang.isFunction because IE >= 6 would say focus is not a function (IE says it's an object) !!
				if (!!this.el && !lang.isUndefined(this.el.focus)) {
					this.el.focus();
				}
			},

			/**
			 * Add the minLength string message handling
			 */
			getStateString: function(state) {
				if (state == inputEx.stateInvalid && this.options.minLength && this.el.value.length < this.options.minLength) {
					return inputEx.messages.stringTooShort[0] + this.options.minLength + inputEx.messages.stringTooShort[1];
				}
				return inputEx.StringField.superclass.getStateString.call(this, state);
			},

			/**
			 * Display the type invite after setting the class
			 */
			setClassFromState: function() {
				inputEx.StringField.superclass.setClassFromState.call(this);

				// display/mask typeInvite
				if (this.options.typeInvite) {
					this.updateTypeInvite();
				}
			},

			updateTypeInvite: function() {

				// field not focused
				if (!Dom.hasClass(this.divEl, "inputEx-focused")) {

					// show type invite if field is empty
					if (this.isEmpty()) {
						Dom.addClass(this.divEl, "inputEx-typeInvite");
						this.el.value = this.options.typeInvite;

						// important for setValue to work with typeInvite
					} else {
						Dom.removeClass(this.divEl, "inputEx-typeInvite");
					}

					// field focused : remove type invite
				} else {
					if (Dom.hasClass(this.divEl, "inputEx-typeInvite")) {
						// remove text
						this.el.value = "";

						// remove the "empty" state and class
						this.previousState = null;
						Dom.removeClass(this.divEl, "inputEx-typeInvite");
					}
				}
			},

			/**
			 * Clear the typeInvite when the field gains focus
			 */
			onFocus: function(e) {
				inputEx.StringField.superclass.onFocus.call(this, e);

				if (this.options.typeInvite) {
					this.updateTypeInvite();
				}
			},

			onKeyPress: function(e) {
				// override me
			},

			onKeyUp: function(e) {
				if (this.options.forceLowerCase) {
					this.el.value = this.el.value.toLowerCase();
				}
				if (this.options.noSpaces) {
					this.el.value = this.el.value.replace(/\s/g, '');
				}
				if (this.options.lcFirst || this.options.ucFirst) {
					var first = this.el.value.charAt(0);
					var tmp = this.el.value.substr(1);
					if (this.options.lcFirst) {
						first = first.toLowerCase();
					} else {
						first = first.toUpperCase();
					}
					this.el.value = first + tmp;
				}
			}

		}
	);


	inputEx.messages.stringTooShort = ["This field should contain at least "," numbers or characters"];

	/**
	 * Register this class as "string" type
	 */
	inputEx.registerType("string", inputEx.StringField);

})();

	(function() {

	var inputEx = YAHOO.inputEx, Event = YAHOO.util.Event;

	/**
	 * @class Create a textarea input
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options:
	 * <ul>
	 *	   <li>rows: rows attribute</li>
	 *	   <li>cols: cols attribute</li>
	 * </ul>
	 */
	inputEx.Textarea = function(options) {
		inputEx.Textarea.superclass.constructor.call(this, options);
	};
	YAHOO.lang.extend(inputEx.Textarea, inputEx.StringField,
			/**
			 * @scope inputEx.Textarea.prototype
			 */
					  {

						  /**
						   * Set the specific options (rows and cols)
						   * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
						   */
						  setOptions: function(options) {
							  inputEx.Textarea.superclass.setOptions.call(this, options);
							  this.options.rows = options.rows || 6;
							  this.options.cols = options.cols || 23;
							  this.options.advancedMode = options.advancedMode ? options.advancedMode : false;
							  this.options.placeholder = options.placeholder;
						  },

						  /**
						   * Render an 'INPUT' DOM node
						   */
						  renderComponent: function() {

							  // This element wraps the input node in a float: none div
							  this.wrapEl = inputEx.cn('div', {className: 'inputEx-StringField-wrapper'});

							  // Attributes of the input field
							  var attributes = {};
							  attributes.id = this.divEl.id ? this.divEl.id + '-field' : YAHOO.util.Dom.generateId();
							  attributes.rows = this.options.rows;
							  attributes.cols = this.options.cols;
							  if (this.options.name) attributes.name = this.options.name;
							  if (this.options.placeholder) attributes.placeholder = this.options.placeholder;

							  //if(this.options.maxLength) attributes.maxLength = this.options.maxLength;

							  // Create the node
							  this.el = inputEx.cn('textarea', attributes, null, this.options.value);

							  // Append it to the main element
							  this.wrapEl.appendChild(this.el);
							  YAHOO.util.Dom.addClass(this.divEl,'textfieldWrapper');
							  if(this.options.advancedMode) {
								  YAHOO.util.Dom.addClass(this.divEl, "advancedMode");
							   }
							  this.fieldContainer.appendChild(this.wrapEl);
						  },

						  /**
						   * Uses the optional regexp to validate the field value
						   */
						  validate: function() {
							  var previous = inputEx.Textarea.superclass.validate.call(this);

							  // emulate maxLength property for textarea
							  //   -> user can still type but field is invalid
							  if (this.options.maxLength) {
								  previous = previous && this.getValue().length <= this.options.maxLength;
							  }

							  return previous;
						  },

						  /**
						   * Add the minLength string message handling
						   */
						  getStateString: function(state) {
							  if (state == inputEx.stateInvalid && this.options.minLength && this.el.value.length < this.options.minLength) {
								  return inputEx.messages.stringTooShort[0] + this.options.minLength + inputEx.messages.stringTooShort[1];

								  // Add message too long
							  } else if (state == inputEx.stateInvalid && this.options.maxLength && this.el.value.length > this.options.maxLength) {
								  return inputEx.messages.stringTooLong[0] + this.options.maxLength + inputEx.messages.stringTooLong[1];
							  }
							  return inputEx.Textarea.superclass.getStateString.call(this, state);
						  }

					  });

	inputEx.messages.stringTooLong = ["This field should contain at most "," numbers or characters"];

	/**
	 * Register this class as "text" type
	 */
	inputEx.registerType("text", inputEx.Textarea);

})();
(function() {

	var inputEx = YAHOO.inputEx, Event = YAHOO.util.Event, lang = YAHOO.lang;

	/**
	 * @class Create a select field
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options:
	 * <ul>
	 *	   <li>selectValues: contains the list of options values</li>
	 *	   <li>selectOptions: list of option element texts</li>
	 *	<li>multiple: boolean to allow multiple selections</li>
	 * </ul>
	 */
	inputEx.SelectField = function(options) {
		inputEx.SelectField.superclass.constructor.call(this, options);
	};
	lang.extend(inputEx.SelectField, inputEx.Field,
			/**
			 * @scope inputEx.SelectField.prototype
			 */
				{
					/**
					 * Set the default values of the options
					 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
					 */
					setOptions: function(options) {
						inputEx.SelectField.superclass.setOptions.call(this, options);

						this.options.multiple = lang.isUndefined(options.multiple) ? false : options.multiple;
						this.options.selectValues = [];
						this.options.selectOptions = [];

						for (var i = 0, length = options.selectValues.length; i < length; i++) {

							this.options.selectValues.push(options.selectValues[i]);
							// ""+  hack to convert into text (values may be 0 for example)
							this.options.selectOptions.push("" + ((options.selectOptions && !lang.isUndefined(options.selectOptions[i])) ? options.selectOptions[i] : options.selectValues[i]));

						}

					},

					/**
					 * Build a select tag with options
					 */
					renderComponent: function() {

						this.el = inputEx.cn('select', {id: this.divEl.id ? this.divEl.id + '-field' : YAHOO.util.Dom.generateId(), name: this.options.name || ''});

						if (this.options.multiple) {
							this.el.multiple = true;
							this.el.size = this.options.selectValues.length;
						}

						this.optionEls = {};

						var optionEl;
						for (var i = 0; i < this.options.selectValues.length; i++) {

							optionEl = inputEx.cn('option', {value: this.options.selectValues[i]}, null, this.options.selectOptions[i]);

							this.optionEls[this.options.selectOptions[i]] = optionEl;
							this.el.appendChild(optionEl);
						}
						YAHOO.util.Dom.addClass(this.divEl,'selectFieldWrapper');
						this.fieldContainer.appendChild(this.el);
					},

					/**
					 * Register the "change" event
					 */
					initEvents: function() {
						Event.addListener(this.el, "change", this.onChange, this, true);
						Event.addFocusListener(this.el, this.onFocus, this, true);
						Event.addBlurListener(this.el, this.onBlur, this, true);
					},

					/**
					 * Set the value
					 * @param {String} value The value to set
					 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
					 */
					setValue: function(value, sendUpdatedEvt) {
						var index = 0;
						var option;
						for (var i = 0; i < this.options.selectValues.length; i++) {
							if (value === this.options.selectValues[i]) {
								option = this.el.childNodes[i];
								option.selected = "selected";
							}
						}

						// Call Field.setValue to set class and fire updated event
						inputEx.SelectField.superclass.setValue.call(this, value, sendUpdatedEvt);
					},

					/**
					 * Return the value
					 * @return {Any} the selected value from the selectValues array
					 */
					getValue: function() {
						return this.options.selectValues[this.el.selectedIndex];
					},

					/**
					 * Disable the field
					 */
					disable: function() {
						this.el.disabled = true;
					},

					/**
					 * Enable the field
					 */
					enable: function() {
						this.el.disabled = false;
					},

					/**
					 * Add an option in the selector
					 * @param {Object} item
					 */
					addOption: function(config) {

						var value = config.value;
						var option = "" + (!lang.isUndefined(config.option) ? config.option : config.value);
						var nbOptions = this.options.selectOptions.length;

						// position of new option (default last)
						var position = nbOptions;

						if (lang.isNumber(config.position) && config.position >= 0 && config.position <= position) {
							position = parseInt(config.position, 10);

						} else if (lang.isString(config.before)) {

							for (var i = 0; i < nbOptions; i++) {
								if (this.options.selectOptions[i] === config.before) {
									position = i;
									break;
								}
							}

						} else if (lang.isString(config.after)) {

							for (var i = 0; i < nbOptions; i++) {
								if (this.options.selectOptions[i] === config.after) {
									position = i + 1;
									break;
								}
							}
						}

						// update values and options lists
						this.options.selectValues = this.options.selectValues.slice(0, position).concat([value]).concat(this.options.selectValues.slice(position, nbOptions));
						this.options.selectOptions = this.options.selectOptions.slice(0, position).concat([option]).concat(this.options.selectOptions.slice(position, nbOptions));

						// new option in select
						var newOption = inputEx.cn('option', {value: value}, null, option);
						this.optionEls[option] = newOption;

						if (position < nbOptions) {
							YAHOO.util.Dom.insertBefore(newOption, this.el.childNodes[position]);
						} else {
							this.el.appendChild(newOption);
						}

						// select new option
						if (!!config.selected) {
							// setTimeout for IE6 (let time to create dom option)
							var that = this;
							setTimeout(function() {
								that.setValue(value);
							}, 0);
						}
					},

					removeOption: function(config) {

						var position;
						var nbOptions = this.options.selectOptions.length;
						var selectedIndex = this.el.selectedIndex;

						if (lang.isNumber(config.position) && config.position >= 0 && config.position <= nbOptions) {

							position = parseInt(config.position, 10);

						} else if (lang.isString(config.option)) {

							for (var i = 0; i < nbOptions; i++) {
								if (this.options.selectOptions[i] === config.option) {
									position = i;
									break;
								}
							}

						} else if (lang.isString(config.value)) {

							for (var i = 0; i < nbOptions; i++) {
								if (this.options.selectValues[i] === config.value) {
									position = i;
									break;
								}
							}
						}

						if (!lang.isNumber(position)) {
							throw new Error("SelectField : invalid or missing position, option or value in removeOption");
						}

						// remove from selectValues / selectOptions array
						this.options.selectValues.splice(position, 1);
						var removedOption = this.options.selectOptions.splice(position, 1);

						// remove from selector
						this.el.removeChild(this.optionEls[removedOption]);
						delete this.optionEls[removedOption];

						// clear if previous selected value doesn't exist anymore
						if (selectedIndex == position) {
							this.clear();
						}
					}

				});

	/**
	 * Register this class as "select" type
	 */
	inputEx.registerType("select", inputEx.SelectField);

})();
(function() {

	var inputEx = YAHOO.inputEx;

	/**
	 * @class Field that adds the email regexp for validation. Result is always lower case.
	 * @extends inputEx.StringField
	 * @constructor
	 * @param {Object} options inputEx.Field options object
	 */
	inputEx.EmailField = function(options) {
		inputEx.EmailField.superclass.constructor.call(this, options);
	};
	YAHOO.lang.extend(inputEx.EmailField, inputEx.StringField,
			/**
			 * @scope inputEx.EmailField.prototype
			 */
					  {

						  /**
						   * Set the email regexp and invalid message
						   * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
						   */
						  setOptions: function(options) {
							  inputEx.EmailField.superclass.setOptions.call(this, options);
							  // Overwrite options
							  this.options.messages.invalid = inputEx.messages.invalidEmail;
							  this.options.regexp = inputEx.regexps.email;
						  },

						  /**
						   * Set the value to lower case since email have no case
						   * @return {String} The email string
						   */
						  getValue: function() {
							  return this.el.value.toLowerCase();
						  }

					  });

// Specific message for the email field
	inputEx.messages.invalidEmail = "Invalid email, ex: sample@test.com";

	/**
	 * Register this class as "email" type
	 */
	inputEx.registerType("email", inputEx.EmailField);

})();
(function() {

	var inputEx = YAHOO.inputEx, lang = YAHOO.lang;

	/**
	 * @class Adds an url regexp, and display the favicon at this url
	 * @extends inputEx.StringField
	 * @constructor
	 * @param {Object} options inputEx.Field options object
	 * <ul>
	 *   <li>favicon: boolean whether the domain favicon.ico should be displayed or not (default is true, except for https)</li>
	 * </ul>
	 */
	inputEx.UrlField = function(options) {
		inputEx.UrlField.superclass.constructor.call(this, options);
	};

	lang.extend(inputEx.UrlField, inputEx.StringField,
			/**
			 * @scope inputEx.UrlField.prototype
			 */
				{

					/**
					 * Adds the invalid Url message
					 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
					 */
					setOptions: function(options) {
						inputEx.UrlField.superclass.setOptions.call(this, options);

						this.options.className = options.className ? options.className : "inputEx-Field inputEx-UrlField";
						this.options.messages.invalid = inputEx.messages.invalidUrl;
						this.options.favicon = lang.isUndefined(options.favicon) ? (("https:" == document.location.protocol) ? false : true) : options.favicon;
						this.options.size = options.size || 50;

						// validate with url regexp
						this.options.regexp = inputEx.regexps.url;
					},

					/**
					 * Adds a img tag before the field to display the favicon
					 */
					render: function() {
						inputEx.UrlField.superclass.render.call(this);
						this.el.size = this.options.size;

						if (!this.options.favicon) {
							YAHOO.util.Dom.addClass(this.el, 'nofavicon');
						}

						// Create the favicon image tag
						if (this.options.favicon) {
							this.favicon = inputEx.cn('img', {src: inputEx.spacerUrl});
							this.fieldContainer.insertBefore(this.favicon, this.fieldContainer.childNodes[0]);

							// focus field when clicking on favicon
							YAHOO.util.Event.addListener(this.favicon, "click", function() {
								this.focus();
							}, this, true);
						}
					},

					setClassFromState: function() {
						inputEx.UrlField.superclass.setClassFromState.call(this);

						if (this.options.favicon) {
							// try to update with url only if valid url (else pass null to display inputEx.spacerUrl)
							this.updateFavicon((this.previousState == inputEx.stateValid) ? this.getValue() : null);
						}
					},


					updateFavicon: function(url) {
						var newSrc = url ? url.match(/https?:\/\/[^\/]*/) + '/favicon.ico' : inputEx.spacerUrl;
						if (newSrc != this.favicon.src) {

							// Hide the favicon
							inputEx.sn(this.favicon, null, {visibility: 'hidden'});

							// Change the src
							this.favicon.src = newSrc;

							// Set the timer to launch displayFavicon in 1s
							if (this.timer) {
								clearTimeout(this.timer);
							}
							var that = this;
							this.timer = setTimeout(function() {
								that.displayFavicon();
							}, 1000);
						}
					},

					/**
					 * Display the favicon if the icon was found (use of the naturalWidth property)
					 */
					displayFavicon: function() {
						inputEx.sn(this.favicon, null, {visibility: (this.favicon.naturalWidth != 0) ? 'visible' : 'hidden'});
					}


				});

	inputEx.messages.invalidUrl = "Invalid URL, ex: http://www.test.com";


	/**
	 * Register this class as "url" type
	 */
	inputEx.registerType("url", inputEx.UrlField);

})();
(function() {

	var inputEx = YAHOO.inputEx, lang = YAHOO.lang, Event = YAHOO.util.Event, Dom = YAHOO.util.Dom;

	/**
	 * @class Create a checkbox.
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options for CheckBoxes:
	 * <ul>
	 *   <li>sentValues: 2D vector of values for checked/unchecked states (default is [true, false])</li>
	 * </ul>
	 */
	inputEx.CheckBox = function(options) {
		inputEx.CheckBox.superclass.constructor.call(this, options);
	};

	lang.extend(inputEx.CheckBox, inputEx.Field,
			/**
			 * @scope inputEx.CheckBox.prototype
			 */
				{

					/**
					 * Adds the CheckBox specific options
					 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
					 */
					setOptions: function(options) {
						inputEx.CheckBox.superclass.setOptions.call(this, options);

						// Overwrite options:
						this.options.className = options.className ? options.className : 'inputEx-Field inputEx-CheckBox';

						this.options.rightLabel = options.rightLabel || '';

						// Added options
						this.sentValues = options.sentValues || [true, false];
						this.options.sentValues = this.sentValues; // for compatibility
						this.checkedValue = this.sentValues[0];
						this.uncheckedValue = this.sentValues[1];
					},

					/**
					 * Render the checkbox and the hidden field
					 */
					renderComponent: function() {

						var checkBoxId = this.divEl.id ? this.divEl.id + '-field' : YAHOO.util.Dom.generateId();

						this.el = inputEx.cn('input', { id: checkBoxId, type: 'checkbox', checked:(this.options.checked === false) ? false : true });
						this.fieldContainer.appendChild(this.el);

						this.rightLabelEl = inputEx.cn('label', {"for": checkBoxId, className: 'inputEx-CheckBox-rightLabel'}, null, this.options.rightLabel);
						this.fieldContainer.appendChild(this.rightLabelEl);
						Dom.addClass(this.divEl,'checkBoxFieldWrapper');

						// Keep state of checkbox in a hidden field (format : this.checkedValue or this.uncheckedValue)
						this.hiddenEl = inputEx.cn('input', {type: 'hidden', name: this.options.name || '', value: this.el.checked ? this.checkedValue : this.uncheckedValue});
						this.fieldContainer.appendChild(this.hiddenEl);
					},

					/**
					 * Clear the previous events and listen for the "change" event
					 */
					initEvents: function() {
						Event.addListener(this.el, "change", this.onChange, this, true);

						// Awful Hack to work in IE6 and below (the checkbox doesn't fire the change event)
						// It seems IE 8 removed this behavior from IE7 so it only works with IE 7 ??
						/*if( YAHOO.env.ua.ie && parseInt(YAHOO.env.ua.ie,10) != 7 ) {
						 Event.addListener(this.el, "click", function() { this.fireUpdatedEvt(); }, this, true);
						 }*/
						if (YAHOO.env.ua.ie) {
							Event.addListener(this.el, "click", function() {
								YAHOO.lang.later(10, this, this.fireUpdatedEvt);
							}, this, true);
						}

						Event.addFocusListener(this.el, this.onFocus, this, true);
						Event.addBlurListener(this.el, this.onBlur, this, true);
					},

					/**
					 * Function called when the checkbox is toggled
					 * @param {Event} e The original 'change' event
					 */
					onChange: function(e) {
						this.hiddenEl.value = this.el.checked ? this.checkedValue : this.uncheckedValue;

						// In IE the fireUpdatedEvent is sent by the click ! We need to send it only once !
						if (!YAHOO.env.ua.ie) {
							inputEx.CheckBox.superclass.onChange.call(this, e);
						}
					},

					/**
					 * Get the state value
					 * @return {Any} one of [checkedValue,uncheckedValue]
					 */
					getValue: function() {
						return this.el.checked ? this.checkedValue : this.uncheckedValue;
					},

					/**
					 * Set the value of the checkedbox
					 * @param {Any} value The value schould be one of [checkedValue,uncheckedValue]
					 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
					 */
					setValue: function(value, sendUpdatedEvt) {
						if (value === this.checkedValue) {
							this.hiddenEl.value = value;
							this.el.checked = true;
						}
						else {
							// DEBUG :
							/*if (value!==this.uncheckedValue && lang.isObject(console) && lang.isFunction(console.log) ) {
							 console.log("inputEx.CheckBox: value is *"+value+"*, schould be in ["+this.checkedValue+","+this.uncheckedValue+"]");
							 }*/
							this.hiddenEl.value = value;
							this.el.checked = false;
						}

						// Call Field.setValue to set class and fire updated event
						inputEx.CheckBox.superclass.setValue.call(this, value, sendUpdatedEvt);
					},

					/**
					 * Disable the field
					 */
					disable: function() {
						this.el.disabled = true;
					},

					/**
					 * Enable the field
					 */
					enable: function() {
						this.el.disabled = false;
					}

				});

	/**
	 * Register this class as "boolean" type
	 */
	inputEx.registerType("boolean", inputEx.CheckBox);

})();
(function() {

	var inputEx = YAHOO.inputEx, lang = YAHOO.lang, Event = YAHOO.util.Event, Dom = YAHOO.util.Dom;

	/**
	 * @class Meta field providing in place editing (the editor appears when you click on the formatted value).
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options:
	 * <ul>
	 *   <li>visu</li>
	 *   <li>editorField</li>
	 *   <li>animColors</li>
	 * </ul>
	 */
	inputEx.InPlaceEdit = function(options) {
		inputEx.InPlaceEdit.superclass.constructor.call(this, options);
	};

	lang.extend(inputEx.InPlaceEdit, inputEx.Field,
			/**
			 * @scope inputEx.InPlaceEdit.prototype
			 */
				{
					/**
					 * Set the default values of the options
					 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
					 */
					setOptions: function(options) {
						inputEx.InPlaceEdit.superclass.setOptions.call(this, options);

						this.options.animColors = options.animColors || {from: '#ffff99' , to: '#ffffff'};
						/*this.options.formatDom = options.formatDom;
						 this.options.formatValue = options.formatValue;*/
						this.options.visu = options.visu;
						this.options.editorField = options.editorField;
					},

					/**
					 * Override renderComponent to create 2 divs: the visualization one, and the edit in place form
					 */
					renderComponent: function() {
						this.renderVisuDiv();
						this.renderEditor();
					},

					/**
					 * Render the editor
					 */
					renderEditor: function() {

						this.editorContainer = inputEx.cn('div', {className: 'inputEx-InPlaceEdit-editor'}, {display: 'none'});

						// Render the editor field
						this.editorField = inputEx.buildField(this.options.editorField);

						this.editorContainer.appendChild(this.editorField.getEl());
						Dom.setStyle(this.editorField.getEl(), 'float', 'left');

						// Line breaker
						this.editorContainer.appendChild(inputEx.cn('div', null, {clear: 'both'}));

						//this.divEl.appendChild(this.editorContainer);
						this.fieldContainer.appendChild(this.editorContainer);

					},

					/**
					 * Set the color when hovering the field
					 * @param {Event} e The original mouseover event
					 */
					onVisuMouseOver: function(e) {
						if (this.colorAnim) {
							this.colorAnim.stop(true);
						}
						inputEx.sn(this.formattedContainer, null, {backgroundColor: this.options.animColors.from });
					},

					/**
					 * Start the color animation when hovering the field
					 * @param {Event} e The original mouseout event
					 */
					onVisuMouseOut: function(e) {
						// Start animation
						if (this.colorAnim) {
							this.colorAnim.stop(true);
						}
						this.colorAnim = new YAHOO.util.ColorAnim(this.formattedContainer, {backgroundColor: this.options.animColors}, 1);
						this.colorAnim.onComplete.subscribe(function() {
							Dom.setStyle(this.formattedContainer, 'background-color', '');
						}, this, true);
						this.colorAnim.animate();
					},

					/**
					 * Create the div that will contain the visualization of the value
					 */
					renderVisuDiv: function() {
						this.formattedContainer = inputEx.cn('div', {className: 'inputEx-InPlaceEdit-visu'});

						if (lang.isFunction(this.options.formatDom)) {
							this.formattedContainer.appendChild(this.options.formatDom(this.options.value));
						}
						else if (lang.isFunction(this.options.formatValue)) {
							this.formattedContainer.innerHTML = this.options.formatValue(this.options.value);
						}
						else {
							this.formattedContainer.innerHTML = lang.isUndefined(this.options.value) ? inputEx.messages.emptyInPlaceEdit : this.options.value;
						}

						this.fieldContainer.appendChild(this.formattedContainer);

					},

					/**
					 * Adds the events for the editor and color animations
					 */
					initEvents: function() {
						Event.addListener(this.formattedContainer, "click", this.openEditor, this, true);

						// For color animation
						Event.addListener(this.formattedContainer, 'mouseover', this.onVisuMouseOver, this, true);
						Event.addListener(this.formattedContainer, 'mouseout', this.onVisuMouseOut, this, true);

						// Editor:
						//Event.addListener(this.okButton, 'click', this.onOkEditor, this, true);
						//Event.addListener(this.cancelLink, 'click', this.onCancelEditor, this, true);

						if (this.editorField.el) {
							// Register some listeners
							Event.addListener(this.editorField.el, "keyup", this.onKeyUp, this, true);
							Event.addListener(this.editorField.el, "keydown", this.onKeyDown, this, true);
							Event.addListener(this.editorField.el, "blur", this.onOkEditor, this, true);
						}
					},

					/**
					 * Handle some keys events to close the editor
					 * @param {Event} e The original keyup event
					 */
					onKeyUp: function(e) {
						// Enter
						if (e.keyCode == 13) {
							this.onOkEditor();
						}
						// Escape
						if (e.keyCode == 27) {
							this.onCancelEditor(e);
						}
						var first = this.editorField.el.value.charAt(0);
						var tmp = this.editorField.el.value.substr(1).replace(/[^a-zA-Z0-9]/g, '');
						this.editorField.el.value = first.toUpperCase() + tmp;
					},

					/**
					 * Handle the tabulation key to close the editor
					 * @param {Event} e The original keydown event
					 */
					onKeyDown: function(e) {
						// Tab
						if (e.keyCode == 9) {
							this.onOkEditor();
						}
					},

					/**
					 * Validate the editor (ok button, enter key or tabulation key)
					 */
					onOkEditor: function() {
						var newValue = this.editorField.getValue();
						this.setValue(newValue);

						this.editorContainer.style.display = 'none';
						this.formattedContainer.style.display = '';

						var that = this;
						setTimeout(function() {
							that.updatedEvt.fire(newValue);
						}, 50);
					},


					/**
					 * Close the editor on cancel (cancel button, blur event or escape key)
					 * @param {Event} e The original event (click, blur or keydown)
					 */
					onCancelEditor: function(e) {
						Event.stopEvent(e);
						this.editorContainer.style.display = 'none';
						this.formattedContainer.style.display = '';
					},

					/**
					 * Display the editor
					 */
					openEditor: function() {
						var value = this.getValue();
						this.editorContainer.style.display = '';
						this.formattedContainer.style.display = 'none';

						if (!lang.isUndefined(value)) {
							this.editorField.setValue(value);
						}

						// Set focus in the element !
						this.editorField.focus();

						// Select the content
						if (this.editorField.el && lang.isFunction(this.editorField.el.setSelectionRange) && (!!value && !!value.length)) {
							this.editorField.el.setSelectionRange(0, value.length);
						}

					},

					/**
					 * Returned the previously stored value
					 * @return {Any} The value of the subfield
					 */
					getValue: function() {
						var editorOpened = (this.editorContainer.style.display == '');
						return editorOpened ? this.editorField.getValue() : this.value;
					},

					/**
					 * Set the value and update the display
					 * @param {Any} value The value to set
					 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
					 */
					setValue: function(value, sendUpdatedEvt) {
						// Store the value
						this.value = value;

						if (lang.isUndefined(value) || value == "") {
							inputEx.renderVisu(this.options.visu, inputEx.messages.emptyInPlaceEdit, this.formattedContainer);
						}
						else {
							inputEx.renderVisu(this.options.visu, this.value, this.formattedContainer);
						}

						// If the editor is opened, update it
						if (this.editorContainer.style.display == '') {
							this.editorField.setValue(value);
						}

						inputEx.InPlaceEdit.superclass.setValue.call(this, value, sendUpdatedEvt);
					},

					/**
					 * Close the editor when calling the close function on this field
					 */
					close: function() {
						this.editorContainer.style.display = 'none';
						this.formattedContainer.style.display = '';
					}

				});

	inputEx.messages.emptyInPlaceEdit = "(click to edit)";
	inputEx.messages.cancelEditor = "cancel";
	inputEx.messages.okEditor = "Ok";

	/**
	 * Register this class as "inplaceedit" type
	 */
	inputEx.registerType("inplaceedit", inputEx.InPlaceEdit);

})();
(function() {

	var inputEx = YAHOO.inputEx, Event = YAHOO.util.Event, lang = YAHOO.lang;

	/**
	 * @class Create a menu field
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options Added options:
	 * <ul>
	 *	   <li>menuItems : contains descriptions of menu items</li>
	 *	   <li>menuTrigger : event to trigger menu show</li>
	 *	<li>menuInvite : text to display when no selection made</li>
	 *	<li>menuPosition : array of corners positions (syntax : ['menu popup corner','invite div corner'])</li>
	 * </ul>
	 */
	inputEx.MenuField = function(options) {
		inputEx.MenuField.superclass.constructor.call(this, options);
	};

	lang.extend(inputEx.MenuField, inputEx.Field,
			/**
			 * @scope inputEx.MenuField.prototype
			 */
				{
					/**
					 * Set the default values of the options
					 * @param {Object} options Options object (inputEx inputParams) as passed to the constructor
					 */
					setOptions: function(options) {
						inputEx.MenuField.superclass.setOptions.call(this, options);

						// Overwrite options:
						this.options.className = options.className ? options.className : 'inputEx-Field inputEx-MenuField';

						// New options
						this.options.menuInvite = options.menuInvite || inputEx.messages.menuInvite;
						this.options.menuTrigger = options.menuTrigger || "click";
						this.options.menuPosition = options.menuPosition || ["tl","tr"];
						this.options.menuItems = options.menuItems;
					},


					/**
					 * Build a menu
					 */
					renderComponent: function() {

						// Div to display the invite, then the selected text
						this.el = inputEx.cn('div', {className:'inputEx-Result'}, null, this.options.menuInvite);
						YAHOO.util.Dom.addClass(this.el, (this.options.menuPosition[1] == "tr") ? "inputEx-RightArrow" : "inputEx-DownArrow");
						this.fieldContainer.appendChild(this.el);

						// Keep selected value in a hidden field
						this.hiddenEl = inputEx.cn('input', {type: 'hidden', name: this.options.name || '', value: this.options.value || ''});
						this.fieldContainer.appendChild(this.hiddenEl);

						// Init Menu
						this.initMenu();
					},


					// Parse menuItems option to add ids, listeners, etc.
					initMenuItems: function() {

						// Keep corresponding text for each value selectable in the menu
						//   -> will be used to display selection after click
						this._textFromValue = {};

						var that = this;

						/*
						 * Recursive function to edit a level of menuItems
						 *
						 * args :
						 *   -> conf : an array of menuItems
						 *   -> level : how deeply nested are these menuItems (4 is max)
						 */
						function levelInit(conf, level) {
							if (level > 4) throw new Error("MenuField : too much recursion, menuItems property should be 5 level deep at most.");

							var item;
							for (var i = 0, length = conf.length; i < length; i++) {
								item = conf[i];

								// item with submenu
								//   -> explore deeper
								if (!YAHOO.lang.isUndefined(item.submenu)) {

									// ensure there is an id on submenu (else submenu is not created)
									if (YAHOO.lang.isUndefined(item.submenu.id)) {
										item.submenu.id = YAHOO.util.Dom.generateId();
									}

									// continue one level deeper
									levelInit(item.submenu.itemdata, level + 1);

									// item without submenu
									//   -> add click listener to this item
									//   -> pass selected value to the listener (as the 3rd argument)
								} else {
									that._textFromValue[item.value] = item.text;
									item.onclick = {fn:function() {
										that.onItemClick.apply(that, arguments);
									},obj:item.value};
								}
							}
						}

						;

						levelInit(this.options.menuItems, 0);

					},


					initMenu: function() {
						this.initMenuItems(); // edit this.options.menuItems

						this.menuContainer = inputEx.cn('div');
						this.fieldContainer.appendChild(this.menuContainer);

						var context = [this.el].concat(this.options.menuPosition);

						this.menu = new YAHOO.widget.Menu(YAHOO.util.Dom.generateId(), {context:context});
						this.menu.addItems(this.options.menuItems);
						this.menu.render(this.menuContainer);
					},


					initEvents: function() {
						this.menu.subscribe("show", this.menu.focus);

						// Listener to show menu
						YAHOO.util.Event.addListener(this.el, this.options.menuTrigger, function() {
							if (!this.menu.cfg.getProperty("visible")) {
								this.menu.align();
								this.menu.show();
							}
						}, null, this);
					},


					onItemClick: function(p_sType, p_aArgs, p_Value) {
						this.setValue(p_Value, true);
					},


					getValue: function() {
						return this.hiddenEl.value;
					},


					setValue: function(value, sendUpdatedEvt) {
						// update text
						this.el.innerHTML = this._textFromValue[value] || this.options.menuInvite;

						// set value
						this.hiddenEl.value = (!!this._textFromValue[value]) ? value : '';
						inputEx.MenuField.superclass.setValue.call(this, value, sendUpdatedEvt);
					}

				});

	inputEx.messages.menuInvite = "Click here to select";

	/**
	 * Register this class as "menu" type
	 */
	inputEx.registerType("menu", inputEx.MenuField);

})();
(function() {

	var inputEx = YAHOO.inputEx, Event = YAHOO.util.Event, Dom = YAHOO.util.Dom, lang = YAHOO.lang;

	/**
	 * @class TypeField is a field to create fields. The user can create any value he wants by switching fields.
	 * @extends inputEx.Field
	 * @constructor
	 * @param {Object} options  Standard inputEx inputParams definition
	 */
	inputEx.TypeField = function(options) {
		inputEx.TypeField.superclass.constructor.call(this, options);

		// Build the updateFieldValue
		if (lang.isUndefined(this.options.value)) {
			this.updateFieldValue();
		}
	};

	lang.extend(inputEx.TypeField, inputEx.Field,
			/**
			 * @scope inputEx.TypeField.prototype
			 */
				{

					/**
					 * Render the TypeField: create a button with a property panel that contains the field options
					 */
					renderComponent: function() {
						// DIV element to wrap the Field "default value"
						this.fieldValueWrapper = inputEx.cn('div', {className: "inputEx-TypeField-FieldValueWrapper"});
						this.fieldContainer.appendChild(this.fieldValueWrapper);

						// Render the popup that will contain the property form
						this.propertyPanel = inputEx.cn('div', {className: "inputEx-TypeField-PropertiesPanel"}, {display: 'none'});

						// The list of all inputEx declared types to be used in the "type" selector
						var selectOptions = [];
						for (var key in inputEx.typeClasses) {
							if (inputEx.typeClasses.hasOwnProperty(key)) {
								selectOptions.push(key);
							}
						}
						this.typeSelect = new inputEx.SelectField({label: "Type", selectOptions: selectOptions, selectValues: selectOptions, parentEl: this.propertyPanel});

						// DIV element to wrap the options group
						this.groupOptionsWrapper = inputEx.cn('div');
						this.propertyPanel.appendChild(this.groupOptionsWrapper);

						// Button to switch the panel
						this.button = inputEx.cn('div', {className: "inputEx-TypeField-EditButton"});
						this.button.appendChild(this.propertyPanel);
						this.fieldContainer.appendChild(this.button);

						// Build the groupOptions
						this.rebuildGroupOptions();
					},

					/**
					 * Adds 2 event listeners:
					 *  - on the button to toggel the propertiesPanel
					 */
					initEvents: function() {
						inputEx.TypeField.superclass.initEvents.call(this);

						// "Toggle the properties panel" button :
						Event.addListener(this.button, 'click', this.onTogglePropertiesPanel, this, true);

						// Prevent the button to receive a "click" event if the propertyPanel doesn't catch it
						Event.addListener(this.propertyPanel, 'click', function(e) {
							Event.stopPropagation(e);
						}, this, true);

						// Listen the "type" selector to update the groupOptions
						// Hack the type selector to rebuild the group option
						this.typeSelect.updatedEvt.subscribe(this.rebuildGroupOptions, this, true);
					},

					/**
					 * Regenerate the property form
					 */
					rebuildGroupOptions: function() {
						try {

							// Save the previous value:
							var previousVal = null;

							// Close a previously created group
							if (this.group) {
								previousVal = this.group.getValue();
								this.group.close();
								this.group.destroy();
								this.groupOptionsWrapper.innerHTML = "";
							}

							// Get value is directly the class !!
							var classO = inputEx.getFieldClass(this.typeSelect.getValue());

							// Instanciate the group
							var groupParams = {fields: classO.groupOptions, parentEl: this.groupOptionsWrapper};
							this.group = new inputEx.Group(groupParams);

							// Set the previous name/label
							if (previousVal) {
								this.group.setValue({
														name: previousVal.name,
														label: previousVal.label
													}, false);
							}

							// Register the updated event
							this.group.updatedEvt.subscribe(this.onChangeGroupOptions, this, true);

							// Create the value field
							this.updateFieldValue();

						} catch(ex) {
							if (YAHOO.lang.isObject(window["console"]) && YAHOO.lang.isFunction(window["console"]["log"])) {
								console.log("inputEx.TypeField.rebuildGroupOptions: ", ex);
							}
						}

					},

					/**
					 * Toggle the property panel
					 */
					onTogglePropertiesPanel: function() {
						if (this.propertyPanel.style.display == 'none') {
							this.propertyPanel.style.display = '';
							Dom.addClass(this.button, "opened");
						} else {
							this.propertyPanel.style.display = 'none';
							Dom.removeClass(this.button, "opened");
						}
					},

					/**
					 * Update the fieldValue with the changed properties
					 */
					onChangeGroupOptions: function() {

						// Update the field value
						this.updateFieldValue();

						// Fire updatedEvt
						this.fireUpdatedEvt();
					},

					/**
					 * Update the fieldValue
					 */
					updateFieldValue: function() {
						try {
							// Close previous field
							if (this.fieldValue) {
								this.fieldValue.close();
								this.fieldValue.destroy();
								this.fieldValue = null;
								this.fieldValueWrapper.innerHTML = '';
							}

							// Re-build the fieldValue
							var fieldOptions = { type: this.getValue().type, inputParams: this.group.getValue() };
							fieldOptions.inputParams.parentEl = this.fieldValueWrapper;
							this.fieldValue = inputEx(fieldOptions);

							// Refire the event when the fieldValue is updated
							this.fieldValue.updatedEvt.subscribe(this.fireUpdatedEvt, this, true);
						}
						catch(ex) {
							console.log("Error while updateFieldValue", ex.message);
						}
					},


					/**
					 * Set the value of the label, typeProperties and group
					 * @param {Object} value Type object configuration
					 * @param {boolean} [sendUpdatedEvt] (optional) Wether this setValue should fire the updatedEvt or not (default is true, pass false to NOT send the event)
					 */
					setValue: function(value, sendUpdatedEvt) {

						// Set type in property panel
						this.typeSelect.setValue(value.type, false);

						// Rebuild the panel propertues
						this.rebuildGroupOptions();

						// Set the parameters value
						this.group.setValue(value.inputParams, false);

						// Rebuild the fieldValue
						this.updateFieldValue();

						// Set field value
						if (lang.isObject(value.inputParams) && typeof value.inputParams.value != "undefined") {
							this.fieldValue.setValue(value.inputParams.value);
						}

						if (sendUpdatedEvt !== false) {
							// fire update event
							this.fireUpdatedEvt();
						}
					},

					/**
					 * Return the config for a entry in an Group
					 * @return {Object} Type object configuration
					 */
					getValue: function() {

						function getDefaultValueForField(classObj, paramName) {
							for (var i = 0; i < classObj.groupOptions.length; i++) {
								var f = classObj.groupOptions[i];
								if (f.inputParams.name == paramName) return f.inputParams.value;
							}
							return undefined;
						}

						;

						var inputParams = this.group.getValue();
						var classObj = inputEx.getFieldClass(this.typeSelect.getValue());

						for (var key in inputParams) {
							if (inputParams.hasOwnProperty(key)) {
								var value1 = getDefaultValueForField(classObj, key);
								var value2 = inputParams[key];
								if (value1 == value2) {
									inputParams[key] = undefined;
								}
							}
						}


						var obj = {
							// The field type
							type: this.typeSelect.getValue(),

							// The field parameters
							inputParams: inputParams
						};

						// The value defined by the fieldValue
						if (this.fieldValue) obj.inputParams.value = this.fieldValue.getValue();

						return obj;
					}

				});


	/**
	 * Register this class as "select" type
	 */
	inputEx.registerType("type", inputEx.TypeField);


	/**
	 * group Options for each field
	 */
	inputEx.Field.groupOptions = [
		{ type: "string", inputParams:{label: "Label", name: "label", value: ''} },
		{ type: "string", inputParams:{label: "Name", name: "name", value: ''} },
		{ type: "string", inputParams: {label: "Description",name: "description", value: ''} },
		{ type: "boolean", inputParams: {label: "Required?",name: "required", value: false} },
		{ type: "boolean", inputParams: {label: "Show messages",name: "showMsg", value: false} }
	];

	inputEx.StringField.groupOptions = inputEx.StringField.superclass.constructor.groupOptions.concat([
																										  { type: 'string',  inputParams: { label: 'Type invite', name: 'typeInvite', value: ''}},
																										  { type: 'integer', inputParams: { label: 'Size', name: 'size', value: 20}},
																										  { type: 'integer', inputParams: { label: 'Min. length', name: 'minLength', value: 0}}
																									  ]);


	if (inputEx.CheckBox) {
		inputEx.CheckBox.groupOptions = inputEx.CheckBox.superclass.constructor.groupOptions.concat([
																										{type: 'string', inputParams: {label: 'Right Label', name: 'rightLabel'} }
																									]);
	}

	if (inputEx.ColorField) {
		inputEx.ColorField.groupOptions = inputEx.ColorField.superclass.constructor.groupOptions.concat([]);
	}

	if (inputEx.DateField) {
		inputEx.DateField.groupOptions = inputEx.DateField.superclass.constructor.groupOptions.concat([
																										  {type: 'select', inputParams: {label: 'Date format', name: 'dateFormat', selectOptions: ["m/d/Y", "d/m/Y"], selectValues: ["m/d/Y", "d/m/Y"] } }
																									  ]);
	}

	if (inputEx.CombineField) {
		inputEx.CombineField.groupOptions = inputEx.CombineField.superclass.constructor.groupOptions.concat([
																												{ type: 'list', inputParams: {name: 'fields', label: 'Elements', required: true, elementType: {type: 'type'} } },
																												{ type: 'list', inputParams: {name: 'separators', label: 'Separators', required: true } }
																											]);
	}

	if (inputEx.PairField) {
		inputEx.PairField.groupOptions = inputEx.Field.groupOptions.concat([
																			   { type: 'type', inputParams: {label: 'Left field', name: 'leftFieldOptions', required: true} },
																			   { type: 'type', inputParams: {label: 'Right field', name: 'rightFieldOptions', required: true} }
																		   ]);
	}

	if (inputEx.EmailField) {
		inputEx.EmailField.groupOptions = ([]).concat(inputEx.StringField.groupOptions);
	}

	if (inputEx.IPv4Field) {
		inputEx.IPv4Field.groupOptions = [];
	}

	if (inputEx.PasswordField) {
		inputEx.PasswordField.groupOptions = inputEx.PasswordField.superclass.constructor.groupOptions.concat([
																												  {type: 'boolean', inputParams: {label: 'Strength indicator', name: 'strengthIndicator', value: false} },
																												  {type: 'boolean', inputParams: {label: 'CapsLock warning', name: 'capsLockWarning', value: false} }
																											  ]);
	}


	if (inputEx.RadioField) {
		inputEx.RadioField.groupOptions = inputEx.RadioField.superclass.constructor.groupOptions.concat([
																											{type: 'list', inputParams: {label: 'Options', name: 'choices', elementType: {type: 'string'} } },
																											{type: 'boolean', inputParams: {label: 'Allow custom value', name: 'allowAny'}, value: false  }
																										]);
	}

	if (inputEx.RTEField) {
		inputEx.RTEField.groupOptions = inputEx.RTEField.superclass.constructor.groupOptions.concat([]);
	}

	if (inputEx.UrlField) {
		inputEx.UrlField.groupOptions = inputEx.UrlField.superclass.constructor.groupOptions.concat([
																										{  type: 'boolean', inputParams: {label: 'Display favicon', name:'favicon', value: true}}
																									]);
	}

	if (inputEx.Textarea) {
		inputEx.Textarea.groupOptions = inputEx.Textarea.superclass.constructor.groupOptions.concat([
																										{ type: 'integer', inputParams: {label: 'Rows',  name: 'rows', value: 6} },
																										{ type: 'integer', inputParams: {label: 'Cols', name: 'cols', value: 23} }
																									]);
	}

	if (inputEx.SelectField) {
		inputEx.SelectField.groupOptions = inputEx.SelectField.superclass.constructor.groupOptions.concat([
																											  {  type: 'list', inputParams: {name: 'selectValues', label: 'Values', elementType: {type: 'string'}, required: true } },
																											  {  type: 'list', inputParams: {name: 'selectOptions', label: 'Options', elementType: {type: 'string'} } }
																										  ]);
	}


	if (inputEx.SliderField) {
		inputEx.SliderField.groupOptions = inputEx.SliderField.superclass.constructor.groupOptions.concat([
																											  { type: 'integer', inputParams: {label: 'Min. value',  name: 'minValue', value: 0} },
																											  { type: 'integer', inputParams: {label: 'Max. value', name: 'maxValue', value: 100} }
																										  ]);
	}

	if (inputEx.ListField && typeof inputEx.ListField.superclass.constructor.groupOptions != 'undefined') {
		inputEx.ListField.groupOptions = inputEx.ListField.superclass.constructor.groupOptions.concat([
																										  { type: 'string', inputParams: {label: 'List label', name: 'listLabel', value: ''}},
																										  { type: 'type', inputParams: {label: 'List element type', required: true, name: 'elementType'} }
																									  ]);
	}


	if (inputEx.IntegerField) {
		inputEx.IntegerField.groupOptions = inputEx.IntegerField.superclass.constructor.groupOptions.concat([
																												//{ type: 'integer', inputParams: {label: 'Radix', name: 'radix', value: 10}},
																												{type: 'boolean', inputParams: {label: 'Accept negative', name: 'negative', value: false} }
																											]);
	}

	if (inputEx.NumberField) {
		inputEx.NumberField.groupOptions = inputEx.NumberField.superclass.constructor.groupOptions.concat([]);
	}

	if (inputEx.VectorField) {
		inputEx.VectorField.groupOptions = inputEx.Field.groupOptions.concat([
																				 { type: 'integer', inputParams: { label: 'Dimension', name:'dimension', value: 2}},
																				 { type: 'integer', inputParams: { label: 'Size', name:'size', value: 3}},
																				 { type: 'list', inputParams: {name: 'separators', label: 'Separators', required: true } }
																			 ]);
	}

	inputEx.TypeField.groupOptions = inputEx.TypeField.superclass.constructor.groupOptions.concat([]);


	inputEx.Group.groupOptions = [
		{ type: "string", inputParams:{label: "Name", name: "name", value: ''} },
		{ type: 'string', inputParams: { label: 'Legend', name:'legend'}},
		{ type: 'boolean', inputParams: {label: 'Collapsible', name:'collapsible', value: false}},
		{ type: 'boolean', inputParams: {label: 'Collapsed', name:'collapsed', value: false}},
		{ type: 'list', inputParams:{ label: 'Fields', name: 'fields', elementType: {type: 'type' } } }
	];


	if (inputEx.Form) {
		inputEx.Form.groupOptions = inputEx.Form.superclass.constructor.groupOptions.concat([
																								{type: 'list', inputParams:{
																									label: 'Buttons',
																									name: 'buttons',
																									elementType: {
																										type: 'group',
																										inputParams: {
																											fields: [
																												{ inputParams: {label: 'Label', name: 'value'}},
																												{ type: 'select', inputParams: {label: 'Type', name: 'type', selectValues:["button", "submit"]} }
																											]
																										}
																									}
																								}
																								}
																							]);
	}


	if (inputEx.InPlaceEdit) {
		inputEx.InPlaceEdit.groupOptions = inputEx.InPlaceEdit.superclass.constructor.groupOptions.concat([
																											  { type:'type', inputParams: {label: 'Editor', name: 'editorField'} }
																										  ]);
	}


})();
// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Known Issues:
//
// * Patterns are not implemented.
// * Radial gradient are not implemented. The VML version of these look very
//   different from the canvas one.
// * Clipping paths are not implemented.
// * Coordsize. The width and height attribute have higher priority than the
//   width and height style values which isn't correct.
// * Painting mode isn't implemented.
// * Canvas width/height should is using content-box by default. IE in
//   Quirks mode will draw the canvas using border-box. Either change your
//   doctype to HTML5
//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
//   or use Box Sizing Behavior from WebFX
//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
// * Non uniform scaling does not correctly scale strokes.
// * Optimize. There is always room for speed improvements.

// Only add this code if we do not already have a canvas implementation
if (!document.createElement('canvas').getContext) {

	(function() {

		// alias some functions to make (compiled) code shorter
		var m = Math;
		var mr = m.round;
		var ms = m.sin;
		var mc = m.cos;
		var abs = m.abs;
		var sqrt = m.sqrt;

		// this is used for sub pixel precision
		var Z = 10;
		var Z2 = Z / 2;

		/**
		 * This funtion is assigned to the <canvas> elements as element.getContext().
		 * @this {HTMLElement}
		 * @return {CanvasRenderingContext2D_}
		 */
		function getContext() {
			return this.context_ ||
				   (this.context_ = new CanvasRenderingContext2D_(this));
		}

		var slice = Array.prototype.slice;

		/**
		 * Binds a function to an object. The returned function will always use the
		 * passed in {@code obj} as {@code this}.
		 *
		 * Example:
		 *
		 *   g = bind(f, obj, a, b)
		 *   g(c, d) // will do f.call(obj, a, b, c, d)
		 *
		 * @param {Function} f The function to bind the object to
		 * @param {Object} obj The object that should act as this when the function
		 *	 is called
		 * @param {*} var_args Rest arguments that will be used as the initial
		 *	 arguments when the function is called
		 * @return {Function} A new function that has bound this
		 */
		function bind(f, obj, var_args) {
			var a = slice.call(arguments, 2);
			return function() {
				return f.apply(obj, a.concat(slice.call(arguments)));
			};
		}

		var G_vmlCanvasManager_ = {
			init: function(opt_doc) {
				if (/MSIE/.test(navigator.userAgent) && !window.opera) {
					var doc = opt_doc || document;
					// Create a dummy element so that IE will allow canvas elements to be
					// recognized.
					doc.createElement('canvas');
					doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
				}
			},

			init_: function(doc) {
				// create xmlns
				if (!doc.namespaces['g_vml_']) {
					doc.namespaces.add('g_vml_', 'urn:schemas-microsoft-com:vml',
									   '#default#VML');

				}
				if (!doc.namespaces['g_o_']) {
					doc.namespaces.add('g_o_', 'urn:schemas-microsoft-com:office:office',
									   '#default#VML');
				}

				// Setup default CSS.  Only add one style sheet per document
				if (!doc.styleSheets['ex_canvas_']) {
					var ss = doc.createStyleSheet();
					ss.owningElement.id = 'ex_canvas_';
					ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
									 // default size is 300x150 in Gecko and Opera
								 'text-align:left;width:300px;height:150px}' +
								 'g_vml_\\:*{behavior:url(#default#VML)}' +
								 'g_o_\\:*{behavior:url(#default#VML)}';

				}

				// find all canvas elements
				var els = doc.getElementsByTagName('canvas');
				for (var i = 0; i < els.length; i++) {
					this.initElement(els[i]);
				}
			},

			/**
			 * Public initializes a canvas element so that it can be used as canvas
			 * element from now on. This is called automatically before the page is
			 * loaded but if you are creating elements using createElement you need to
			 * make sure this is called on the element.
			 * @param {HTMLElement} el The canvas element to initialize.
			 * @return {HTMLElement} the element that was created.
			 */
			initElement: function(el) {
				if (!el.getContext) {

					el.getContext = getContext;

					// Remove fallback content. There is no way to hide text nodes so we
					// just remove all childNodes. We could hide all elements and remove
					// text nodes but who really cares about the fallback content.
					el.innerHTML = '';

					// do not use inline function because that will leak memory
					el.attachEvent('onpropertychange', onPropertyChange);
					el.attachEvent('onresize', onResize);

					var attrs = el.attributes;
					if (attrs.width && attrs.width.specified) {
						// TODO: use runtimeStyle and coordsize
						// el.getContext().setWidth_(attrs.width.nodeValue);
						el.style.width = attrs.width.nodeValue + 'px';
					} else {
						el.width = el.clientWidth;
					}
					if (attrs.height && attrs.height.specified) {
						// TODO: use runtimeStyle and coordsize
						// el.getContext().setHeight_(attrs.height.nodeValue);
						el.style.height = attrs.height.nodeValue + 'px';
					} else {
						el.height = el.clientHeight;
					}
					//el.getContext().setCoordsize_()
				}
				return el;
			}
		};

		function onPropertyChange(e) {
			var el = e.srcElement;

			switch (e.propertyName) {
				case 'width':
					el.style.width = el.attributes.width.nodeValue + 'px';
					el.getContext().clearRect();
					break;
				case 'height':
					el.style.height = el.attributes.height.nodeValue + 'px';
					el.getContext().clearRect();
					break;
			}
		}

		function onResize(e) {
			var el = e.srcElement;
			if (el.firstChild) {
				el.firstChild.style.width = el.clientWidth + 'px';
				el.firstChild.style.height = el.clientHeight + 'px';
			}
		}

		G_vmlCanvasManager_.init();

		// precompute "00" to "FF"
		var dec2hex = [];
		for (var i = 0; i < 16; i++) {
			for (var j = 0; j < 16; j++) {
				dec2hex[i * 16 + j] = i.toString(16) + j.toString(16);
			}
		}

		function createMatrixIdentity() {
			return [
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1]
			];
		}

		function matrixMultiply(m1, m2) {
			var result = createMatrixIdentity();

			for (var x = 0; x < 3; x++) {
				for (var y = 0; y < 3; y++) {
					var sum = 0;

					for (var z = 0; z < 3; z++) {
						sum += m1[x][z] * m2[z][y];
					}

					result[x][y] = sum;
				}
			}
			return result;
		}

		function copyState(o1, o2) {
			o2.fillStyle = o1.fillStyle;
			o2.lineCap = o1.lineCap;
			o2.lineJoin = o1.lineJoin;
			o2.lineWidth = o1.lineWidth;
			o2.miterLimit = o1.miterLimit;
			o2.shadowBlur = o1.shadowBlur;
			o2.shadowColor = o1.shadowColor;
			o2.shadowOffsetX = o1.shadowOffsetX;
			o2.shadowOffsetY = o1.shadowOffsetY;
			o2.strokeStyle = o1.strokeStyle;
			o2.globalAlpha = o1.globalAlpha;
			o2.arcScaleX_ = o1.arcScaleX_;
			o2.arcScaleY_ = o1.arcScaleY_;
			o2.lineScale_ = o1.lineScale_;
		}

		function processStyle(styleString) {
			var str, alpha = 1;

			styleString = String(styleString);
			if (styleString.substring(0, 3) == 'rgb') {
				var start = styleString.indexOf('(', 3);
				var end = styleString.indexOf(')', start + 1);
				var guts = styleString.substring(start + 1, end).split(',');

				str = '#';
				for (var i = 0; i < 3; i++) {
					str += dec2hex[Number(guts[i])];
				}

				if (guts.length == 4 && styleString.substr(3, 1) == 'a') {
					alpha = guts[3];
				}
			} else {
				str = styleString;
			}

			return {color: str, alpha: alpha};
		}

		function processLineCap(lineCap) {
			switch (lineCap) {
				case 'butt':
					return 'flat';
				case 'round':
					return 'round';
				case 'square':
				default:
					return 'square';
			}
		}

		/**
		 * This class implements CanvasRenderingContext2D interface as described by
		 * the WHATWG.
		 * @param {HTMLElement} surfaceElement The element that the 2D context should
		 * be associated with
		 */
		function CanvasRenderingContext2D_(surfaceElement) {
			this.m_ = createMatrixIdentity();

			this.mStack_ = [];
			this.aStack_ = [];
			this.currentPath_ = [];

			// Canvas context properties
			this.strokeStyle = '#000';
			this.fillStyle = '#000';

			this.lineWidth = 1;
			this.lineJoin = 'miter';
			this.lineCap = 'butt';
			this.miterLimit = Z * 1;
			this.globalAlpha = 1;
			this.canvas = surfaceElement;

			var el = surfaceElement.ownerDocument.createElement('div');
			el.style.width = surfaceElement.clientWidth + 'px';
			el.style.height = surfaceElement.clientHeight + 'px';
			el.style.overflow = 'hidden';
			el.style.position = 'absolute';
			surfaceElement.appendChild(el);

			this.element_ = el;
			this.arcScaleX_ = 1;
			this.arcScaleY_ = 1;
			this.lineScale_ = 1;
		}

		var contextPrototype = CanvasRenderingContext2D_.prototype;
		contextPrototype.clearRect = function() {
			this.element_.innerHTML = '';
		};

		contextPrototype.beginPath = function() {
			// TODO: Branch current matrix so that save/restore has no effect
			//       as per safari docs.
			this.currentPath_ = [];
		};

		contextPrototype.moveTo = function(aX, aY) {
			var p = this.getCoords_(aX, aY);
			this.currentPath_.push({type: 'moveTo', x: p.x, y: p.y});
			this.currentX_ = p.x;
			this.currentY_ = p.y;
		};

		contextPrototype.lineTo = function(aX, aY) {
			var p = this.getCoords_(aX, aY);
			this.currentPath_.push({type: 'lineTo', x: p.x, y: p.y});

			this.currentX_ = p.x;
			this.currentY_ = p.y;
		};

		contextPrototype.bezierCurveTo = function(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
			var p = this.getCoords_(aX, aY);
			var cp1 = this.getCoords_(aCP1x, aCP1y);
			var cp2 = this.getCoords_(aCP2x, aCP2y);
			bezierCurveTo(this, cp1, cp2, p);
		};

		// Helper function that takes the already fixed cordinates.
		function bezierCurveTo(self, cp1, cp2, p) {
			self.currentPath_.push({
									   type: 'bezierCurveTo',
									   cp1x: cp1.x,
									   cp1y: cp1.y,
									   cp2x: cp2.x,
									   cp2y: cp2.y,
									   x: p.x,
									   y: p.y
								   });
			self.currentX_ = p.x;
			self.currentY_ = p.y;
		}

		contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {
			// the following is lifted almost directly from
			// http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

			var cp = this.getCoords_(aCPx, aCPy);
			var p = this.getCoords_(aX, aY);

			var cp1 = {
				x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
				y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
			};
			var cp2 = {
				x: cp1.x + (p.x - this.currentX_) / 3.0,
				y: cp1.y + (p.y - this.currentY_) / 3.0
			};

			bezierCurveTo(this, cp1, cp2, p);
		};

		contextPrototype.arc = function(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
			aRadius *= Z;
			var arcType = aClockwise ? 'at' : 'wa';

			var xStart = aX + mc(aStartAngle) * aRadius - Z2;
			var yStart = aY + ms(aStartAngle) * aRadius - Z2;

			var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
			var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

			// IE won't render arches drawn counter clockwise if xStart == xEnd.
			if (xStart == xEnd && !aClockwise) {
				xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
				// that can be represented in binary
			}

			var p = this.getCoords_(aX, aY);
			var pStart = this.getCoords_(xStart, yStart);
			var pEnd = this.getCoords_(xEnd, yEnd);

			this.currentPath_.push({type: arcType,
									   x: p.x,
									   y: p.y,
									   radius: aRadius,
									   xStart: pStart.x,
									   yStart: pStart.y,
									   xEnd: pEnd.x,
									   yEnd: pEnd.y});

		};

		contextPrototype.rect = function(aX, aY, aWidth, aHeight) {
			this.moveTo(aX, aY);
			this.lineTo(aX + aWidth, aY);
			this.lineTo(aX + aWidth, aY + aHeight);
			this.lineTo(aX, aY + aHeight);
			this.closePath();
		};

		contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight) {
			var oldPath = this.currentPath_;
			this.beginPath();

			this.moveTo(aX, aY);
			this.lineTo(aX + aWidth, aY);
			this.lineTo(aX + aWidth, aY + aHeight);
			this.lineTo(aX, aY + aHeight);
			this.closePath();
			this.stroke();

			this.currentPath_ = oldPath;
		};

		contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
			var oldPath = this.currentPath_;
			this.beginPath();

			this.moveTo(aX, aY);
			this.lineTo(aX + aWidth, aY);
			this.lineTo(aX + aWidth, aY + aHeight);
			this.lineTo(aX, aY + aHeight);
			this.closePath();
			this.fill();

			this.currentPath_ = oldPath;
		};

		contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1) {
			var gradient = new CanvasGradient_('gradient');
			gradient.x0_ = aX0;
			gradient.y0_ = aY0;
			gradient.x1_ = aX1;
			gradient.y1_ = aY1;
			return gradient;
		};

		contextPrototype.createRadialGradient = function(aX0, aY0, aR0, aX1, aY1, aR1) {
			var gradient = new CanvasGradient_('gradientradial');
			gradient.x0_ = aX0;
			gradient.y0_ = aY0;
			gradient.r0_ = aR0;
			gradient.x1_ = aX1;
			gradient.y1_ = aY1;
			gradient.r1_ = aR1;
			return gradient;
		};

		contextPrototype.drawImage = function(image, var_args) {
			var dx, dy, dw, dh, sx, sy, sw, sh;

			// to find the original width we overide the width and height
			var oldRuntimeWidth = image.runtimeStyle.width;
			var oldRuntimeHeight = image.runtimeStyle.height;
			image.runtimeStyle.width = 'auto';
			image.runtimeStyle.height = 'auto';

			// get the original size
			var w = image.width;
			var h = image.height;

			// and remove overides
			image.runtimeStyle.width = oldRuntimeWidth;
			image.runtimeStyle.height = oldRuntimeHeight;

			if (arguments.length == 3) {
				dx = arguments[1];
				dy = arguments[2];
				sx = sy = 0;
				sw = dw = w;
				sh = dh = h;
			} else if (arguments.length == 5) {
				dx = arguments[1];
				dy = arguments[2];
				dw = arguments[3];
				dh = arguments[4];
				sx = sy = 0;
				sw = w;
				sh = h;
			} else if (arguments.length == 9) {
				sx = arguments[1];
				sy = arguments[2];
				sw = arguments[3];
				sh = arguments[4];
				dx = arguments[5];
				dy = arguments[6];
				dw = arguments[7];
				dh = arguments[8];
			} else {
				throw Error('Invalid number of arguments');
			}

			var d = this.getCoords_(dx, dy);

			var w2 = sw / 2;
			var h2 = sh / 2;

			var vmlStr = [];

			var W = 10;
			var H = 10;

			// For some reason that I've now forgotten, using divs didn't work
			vmlStr.push(' <g_vml_:group',
						' coordsize="', Z * W, ',', Z * H, '"',
						' coordorigin="0,0"',
						' style="width:', W, 'px;height:', H, 'px;position:absolute;');

			// If filters are necessary (rotation exists), create them
			// filters are bog-slow, so only create them if abbsolutely necessary
			// The following check doesn't account for skews (which don't exist
			// in the canvas spec (yet) anyway.

			if (this.m_[0][0] != 1 || this.m_[0][1]) {
				var filter = [];

				// Note the 12/21 reversal
				filter.push('M11=', this.m_[0][0], ',',
							'M12=', this.m_[1][0], ',',
							'M21=', this.m_[0][1], ',',
							'M22=', this.m_[1][1], ',',
							'Dx=', mr(d.x / Z), ',',
							'Dy=', mr(d.y / Z), '');

				// Bounding box calculation (need to minimize displayed area so that
				// filters don't waste time on unused pixels.
				var max = d;
				var c2 = this.getCoords_(dx + dw, dy);
				var c3 = this.getCoords_(dx, dy + dh);
				var c4 = this.getCoords_(dx + dw, dy + dh);

				max.x = m.max(max.x, c2.x, c3.x, c4.x);
				max.y = m.max(max.y, c2.y, c3.y, c4.y);

				vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
							'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
							filter.join(''), ", sizingmethod='clip');")
			} else {
				vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
			}

			vmlStr.push(' ">',
						'<g_vml_:image src="', image.src, '"',
						' style="width:', Z * dw, 'px;',
						' height:', Z * dh, 'px;"',
						' cropleft="', sx / w, '"',
						' croptop="', sy / h, '"',
						' cropright="', (w - sx - sw) / w, '"',
						' cropbottom="', (h - sy - sh) / h, '"',
						' />',
						'</g_vml_:group>');

			this.element_.insertAdjacentHTML('BeforeEnd',
											 vmlStr.join(''));
		};

		contextPrototype.stroke = function(aFill) {
			var lineStr = [];
			var lineOpen = false;
			var a = processStyle(aFill ? this.fillStyle : this.strokeStyle);
			var color = a.color;
			var opacity = a.alpha * this.globalAlpha;

			var W = 10;
			var H = 10;

			lineStr.push('<g_vml_:shape',
						 ' filled="', !!aFill, '"',
						 ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
						 ' coordorigin="0 0" coordsize="', Z * W, ' ', Z * H, '"',
						 ' stroked="', !aFill, '"',
						 ' path="');

			var newSeq = false;
			var min = {x: null, y: null};
			var max = {x: null, y: null};

			for (var i = 0; i < this.currentPath_.length; i++) {
				var p = this.currentPath_[i];
				var c;

				switch (p.type) {
					case 'moveTo':
						c = p;
						lineStr.push(' m ', mr(p.x), ',', mr(p.y));
						break;
					case 'lineTo':
						lineStr.push(' l ', mr(p.x), ',', mr(p.y));
						break;
					case 'close':
						lineStr.push(' x ');
						p = null;
						break;
					case 'bezierCurveTo':
						lineStr.push(' c ',
									 mr(p.cp1x), ',', mr(p.cp1y), ',',
									 mr(p.cp2x), ',', mr(p.cp2y), ',',
									 mr(p.x), ',', mr(p.y));
						break;
					case 'at':
					case 'wa':
						lineStr.push(' ', p.type, ' ',
									 mr(p.x - this.arcScaleX_ * p.radius), ',',
									 mr(p.y - this.arcScaleY_ * p.radius), ' ',
									 mr(p.x + this.arcScaleX_ * p.radius), ',',
									 mr(p.y + this.arcScaleY_ * p.radius), ' ',
									 mr(p.xStart), ',', mr(p.yStart), ' ',
									 mr(p.xEnd), ',', mr(p.yEnd));
						break;
				}


				// TODO: Following is broken for curves due to
				//       move to proper paths.

				// Figure out dimensions so we can do gradient fills
				// properly
				if (p) {
					if (min.x == null || p.x < min.x) {
						min.x = p.x;
					}
					if (max.x == null || p.x > max.x) {
						max.x = p.x;
					}
					if (min.y == null || p.y < min.y) {
						min.y = p.y;
					}
					if (max.y == null || p.y > max.y) {
						max.y = p.y;
					}
				}
			}
			lineStr.push(' ">');

			if (!aFill) {
				var lineWidth = this.lineScale_ * this.lineWidth;

				// VML cannot correctly render a line if the width is less than 1px.
				// In that case, we dilute the color to make the line look thinner.
				if (lineWidth < 1) {
					opacity *= lineWidth;
				}

				lineStr.push(
						'<g_vml_:stroke',
						' opacity="', opacity, '"',
						' joinstyle="', this.lineJoin, '"',
						' miterlimit="', this.miterLimit, '"',
						' endcap="', processLineCap(this.lineCap), '"',
						' weight="', lineWidth, 'px"',
						' color="', color, '" />'
				);
			} else if (typeof this.fillStyle == 'object') {
				var fillStyle = this.fillStyle;
				var angle = 0;
				var focus = {x: 0, y: 0};

				// additional offset
				var shift = 0;
				// scale factor for offset
				var expansion = 1;

				if (fillStyle.type_ == 'gradient') {
					var x0 = fillStyle.x0_ / this.arcScaleX_;
					var y0 = fillStyle.y0_ / this.arcScaleY_;
					var x1 = fillStyle.x1_ / this.arcScaleX_;
					var y1 = fillStyle.y1_ / this.arcScaleY_;
					var p0 = this.getCoords_(x0, y0);
					var p1 = this.getCoords_(x1, y1);
					var dx = p1.x - p0.x;
					var dy = p1.y - p0.y;
					angle = Math.atan2(dx, dy) * 180 / Math.PI;

					// The angle should be a non-negative number.
					if (angle < 0) {
						angle += 360;
					}

					// Very small angles produce an unexpected result because they are
					// converted to a scientific notation string.
					if (angle < 1e-6) {
						angle = 0;
					}
				} else {
					var p0 = this.getCoords_(fillStyle.x0_, fillStyle.y0_);
					var width = max.x - min.x;
					var height = max.y - min.y;
					focus = {
						x: (p0.x - min.x) / width,
						y: (p0.y - min.y) / height
					};

					width /= this.arcScaleX_ * Z;
					height /= this.arcScaleY_ * Z;
					var dimension = m.max(width, height);
					shift = 2 * fillStyle.r0_ / dimension;
					expansion = 2 * fillStyle.r1_ / dimension - shift;
				}

				// We need to sort the color stops in ascending order by offset,
				// otherwise IE won't interpret it correctly.
				var stops = fillStyle.colors_;
				stops.sort(function(cs1, cs2) {
					return cs1.offset - cs2.offset;
				});

				var length = stops.length;
				var color1 = stops[0].color;
				var color2 = stops[length - 1].color;
				var opacity1 = stops[0].alpha * this.globalAlpha;
				var opacity2 = stops[length - 1].alpha * this.globalAlpha;

				var colors = [];
				for (var i = 0; i < length; i++) {
					var stop = stops[i];
					colors.push(stop.offset * expansion + shift + ' ' + stop.color);
				}

				// When colors attribute is used, the meanings of opacity and o:opacity2
				// are reversed.
				lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
							 ' method="none" focus="100%"',
							 ' color="', color1, '"',
							 ' color2="', color2, '"',
							 ' colors="', colors.join(','), '"',
							 ' opacity="', opacity2, '"',
							 ' g_o_:opacity2="', opacity1, '"',
							 ' angle="', angle, '"',
							 ' focusposition="', focus.x, ',', focus.y, '" />');
			} else {
				lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
							 '" />');
			}

			lineStr.push('</g_vml_:shape>');

			this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
		};

		contextPrototype.fill = function() {
			this.stroke(true);
		}

		contextPrototype.closePath = function() {
			this.currentPath_.push({type: 'close'});
		};

		/**
		 * @private
		 */
		contextPrototype.getCoords_ = function(aX, aY) {
			var m = this.m_;
			return {
				x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
				y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
			}
		};

		contextPrototype.save = function() {
			var o = {};
			copyState(this, o);
			this.aStack_.push(o);
			this.mStack_.push(this.m_);
			this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
		};

		contextPrototype.restore = function() {
			copyState(this.aStack_.pop(), this);
			this.m_ = this.mStack_.pop();
		};

		function matrixIsFinite(m) {
			for (var j = 0; j < 3; j++) {
				for (var k = 0; k < 2; k++) {
					if (!isFinite(m[j][k]) || isNaN(m[j][k])) {
						return false;
					}
				}
			}
			return true;
		}

		function setM(ctx, m, updateLineScale) {
			if (!matrixIsFinite(m)) {
				return;
			}
			ctx.m_ = m;

			if (updateLineScale) {
				// Get the line scale.
				// Determinant of this.m_ means how much the area is enlarged by the
				// transformation. So its square root can be used as a scale factor
				// for width.
				var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
				ctx.lineScale_ = sqrt(abs(det));
			}
		}

		contextPrototype.translate = function(aX, aY) {
			var m1 = [
				[1,  0,  0],
				[0,  1,  0],
				[aX, aY, 1]
			];

			setM(this, matrixMultiply(m1, this.m_), false);
		};

		contextPrototype.rotate = function(aRot) {
			var c = mc(aRot);
			var s = ms(aRot);

			var m1 = [
				[c,  s, 0],
				[-s, c, 0],
				[0,  0, 1]
			];

			setM(this, matrixMultiply(m1, this.m_), false);
		};

		contextPrototype.scale = function(aX, aY) {
			this.arcScaleX_ *= aX;
			this.arcScaleY_ *= aY;
			var m1 = [
				[aX, 0,  0],
				[0,  aY, 0],
				[0,  0,  1]
			];

			setM(this, matrixMultiply(m1, this.m_), true);
		};

		contextPrototype.transform = function(m11, m12, m21, m22, dx, dy) {
			var m1 = [
				[m11, m12, 0],
				[m21, m22, 0],
				[dx,  dy,  1]
			];

			setM(this, matrixMultiply(m1, this.m_), true);
		};

		contextPrototype.setTransform = function(m11, m12, m21, m22, dx, dy) {
			var m = [
				[m11, m12, 0],
				[m21, m22, 0],
				[dx,  dy,  1]
			];

			setM(this, m, true);
		};

		/******** STUBS ********/
		contextPrototype.clip = function() {
			// TODO: Implement
		};

		contextPrototype.arcTo = function() {
			// TODO: Implement
		};

		contextPrototype.createPattern = function() {
			return new CanvasPattern_;
		};

		// Gradient / Pattern Stubs
		function CanvasGradient_(aType) {
			this.type_ = aType;
			this.x0_ = 0;
			this.y0_ = 0;
			this.r0_ = 0;
			this.x1_ = 0;
			this.y1_ = 0;
			this.r1_ = 0;
			this.colors_ = [];
		}

		CanvasGradient_.prototype.addColorStop = function(aOffset, aColor) {
			aColor = processStyle(aColor);
			this.colors_.push({offset: aOffset,
								  color: aColor.color,
								  alpha: aColor.alpha});
		};

		function CanvasPattern_() {
		}

		// set up externs
		G_vmlCanvasManager = G_vmlCanvasManager_;
		CanvasRenderingContext2D = CanvasRenderingContext2D_;
		CanvasGradient = CanvasGradient_;
		CanvasPattern = CanvasPattern_;

	})();

} // if

/**
 * WireIt provide classes to build wirable interfaces
 * @module WireIt
 */
/**
 * @class WireIt
 * @static
 * @namespace WireIt
 */
var WireIt = {

	/**
	 * Get a css property in pixels and convert it to an integer
	 * @method getIntStyle
	 * @namespace WireIt
	 * @static
	 * @param {HTMLElement} el The element
	 * @param {String} style css-property to get
	 * @return {Integer} integer size
	 */
	getIntStyle: function(el, style) {
		var sStyle = YAHOO.util.Dom.getStyle(el, style);
		return parseInt(sStyle.substr(0, sStyle.length - 2), 10);
	},

	/**
	 * Helper function to set DOM node attributes and style attributes.
	 * @method sn
	 * @static
	 * @param {HTMLElement} el The element to set attributes to
	 * @param {Object} domAttributes An object containing key/value pairs to set as node attributes (ex: {id: 'myElement', className: 'myCssClass', ...})
	 * @param {Object} styleAttributes Same thing for style attributes. Please use camelCase for style attributes (ex: backgroundColor for 'background-color')
	 */
	sn: function(el, domAttributes, styleAttributes) {
		if (!el) {
			return;
		}
		if (domAttributes) {
			for (var i in domAttributes) {
				var domAttribute = domAttributes[i];
				if (typeof (domAttribute) == "function") {
					continue;
				}
				if (i == "className") {
					i = "class";
					el.className = domAttribute;
				}
				if (domAttribute !== el.getAttribute(i)) {
					if (domAttribute === false) {
						el.removeAttribute(i);
					} else {
						el.setAttribute(i, domAttribute);
					}
				}
			}
		}
		if (styleAttributes) {
			for (var i in styleAttributes) {
				if (typeof (styleAttributes[i]) == "function") {
					continue;
				}
				if (el.style[i] != styleAttributes[i]) {
					el.style[i] = styleAttributes[i];
				}
			}
		}

	},


	/**
	 * Helper function to create a DOM node. (wrapps the document.createElement tag and the inputEx.sn functions)
	 * @method cn
	 * @static
	 * @param {String} tag The tagName to create (ex: 'div', 'a', ...)
	 * @param {Object} [domAttributes] see inputEx.sn
	 * @param {Object} [styleAttributes] see inputEx.sn
	 * @param {String} [innerHTML] The html string to append into the created element
	 * @return {HTMLElement} The created node
	 */
	cn: function(tag, domAttributes, styleAttributes, innerHTML) {
		var el = document.createElement(tag);
		this.sn(el, domAttributes, styleAttributes);
		if (innerHTML) {
			el.innerHTML = innerHTML;
		}
		return el;
	},

	/**
	 * indexOf replace Array.indexOf for cases where it isn't available (IE6 only ?)
	 * @method indexOf
	 * @static
	 * @param {Any} el element to search for
	 * @param {Array} arr Array to search into
	 * @return {Integer} element index or -1 if not found
	 */
	indexOf: YAHOO.lang.isFunction(Array.prototype.indexOf) ?
			function(el, arr) {
				return arr.indexOf(el);
			} :
			function(el, arr) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == el) return i;
				}
				return -1;
			},

	/**
	 * compact replace Array.compact for cases where it isn't available
	 * @method compact
	 * @static
	 * @param {Array} arr Array to compact
	 * @return {Array} compacted array
	 */
	compact: YAHOO.lang.isFunction(Array.prototype.compact) ?
			function(arr) {
				return arr.compact();
			} :
			function(arr) {
				var n = [];
				for (var i = 0; i < arr.length; i++) {
					if (arr[i]) {
						n.push(arr[i]);
					}
				}
				return n;
			}
};


/**
 * WireIt.util contains utility classes
 */
WireIt.util = {};

(function () {

	// Shortcuts
	var Event = YAHOO.util.Event, UA = YAHOO.env.ua;

	/**
	 * Create a canvas element and wrap cross-browser hacks to resize it
	 * @class CanvasElement
	 * @namespace WireIt
	 * @constructor
	 * @param {HTMLElement} parentNode The canvas tag will be append to this parent DOM node.
	 */
	WireIt.CanvasElement = function(parentNode) {

		/**
		 * The canvas element
		 * @property element
		 * @type HTMLElement
		 */
		this.element = document.createElement('canvas');

		// Append to parentNode
		parentNode.appendChild(this.element);

		// excanvas.js for dynamic canvas tags
		if (typeof (G_vmlCanvasManager) != "undefined") {
			this.element = G_vmlCanvasManager.initElement(this.element);
		}

	};

	WireIt.CanvasElement.prototype = {

		/**
		 * Get a drawing context
		 * @method getContext
		 * @param {String} [mode] Context mode (default "2d")
		 * @return {CanvasContext} the context
		 */
		getContext: function(mode) {
			return this.element.getContext(mode || "2d");
		},

		/**
		 * Purge all event listeners and remove the component from the dom
		 * @method destroy
		 */
		destroy: function() {
			var el = this.element;

			// Remove from DOM
			if (YAHOO.util.Dom.inDocument(el)) {
				el.parentNode.removeChild(el);
			}

			// recursively purge element
			Event.purgeElement(el, true);
		},

		/**
		 * Set the canvas position and size.
		 * <b>Warning:</b> This method changes the <i>element</i> property under some brother. Don't copy references !
		 * @method SetCanvasRegion
		 * @param {Number} left Left position
		 * @param {Number} top Top position
		 * @param {Number} width New width
		 * @param {Number} height New height
		 */
		SetCanvasRegion: UA.ie ?
			// IE
				function(left, top, width, height) {
					var el = this.element;
					WireIt.sn(el, null, {left:left + "px",top:top + "px",width:width + "px",height:height + "px"});
					el.getContext("2d").clearRect(0, 0, width, height);
					this.element = el;
				} :
				( (UA.webkit || UA.opera) ?
					// Webkit (Safari & Chrome) and Opera
						function(left, top, width, height) {
							var el = this.element;
							var newCanvas = WireIt.cn("canvas", {className:el.className || el.getAttribute("class"),width:width,height:height}, {left:left + "px",top:top + "px"});
							var listeners = Event.getListeners(el);
							for (var listener in listeners) {
								var l = listeners[listener];
								Event.addListener(newCanvas, l.type, l.fn, l.obj, l.adjust);
							}
							Event.purgeElement(el);
							el.parentNode.replaceChild(newCanvas, el);
							this.element = newCanvas;
						} :
					// Other (Firefox)
						function(left, top, width, height) {
							WireIt.sn(this.element, {width:width,height:height}, {left:left + "px",top:top + "px"});
						})
	};

})();
/**
 * The wire widget that uses a canvas to render
 * @class Wire
 * @namespace WireIt
 * @extends WireIt.CanvasElement
 * @constructor
 * @param  {WireIt.Terminal}	terminal1   Source terminal
 * @param  {WireIt.Terminal}	terminal2   Target terminal
 * @param  {HTMLElement} parentEl	Container of the CANVAS tag
 * @param  {Obj}				options	  Wire configuration (see options property)
 */
WireIt.Wire = function(terminal1, terminal2, parentEl, options) {

	/**
	 * Reference to the parent dom element
	 * @property parentEl
	 * @type HTMLElement
	 */
	this.parentEl = parentEl;

	/**
	 * Source terminal
	 * @property terminal1
	 * @type WireIt.Terminal
	 */
	this.terminal1 = terminal1;

	/**
	 * Target terminal
	 * @property terminal2
	 * @type WireIt.Terminal || WireIt.TerminalProxy
	 */
	this.terminal2 = terminal2;


	/**
	 * Event that is fired when a wire is clicked (on the wire, not the canvas)
	 * You can register this event with myWire.eventWireClick.subscribe(function(e,params) { var wire = params[0], xy = params[1];}, scope);
	 * @event eventMouseClick
	 */
	this.eventMouseClick = new YAHOO.util.CustomEvent("eventMouseClick");

	/**
	 * Event that is fired when the mouse enter the wire
	 * You can register this event with myWire.eventMouseIn.subscribe(function(e,params) { var wire = params[0], xy = params[1];}, scope);
	 * @event eventMouseIn
	 */
	this.eventMouseIn = new YAHOO.util.CustomEvent("eventMouseIn");

	/**
	 * Event that is fired when the mouse exits the wire
	 * You can register this event with myWire.eventMouseOut.subscribe(function(e,params) { var wire = params[0], xy = params[1];}, scope);
	 * @event eventMouseOut
	 */
	this.eventMouseOut = new YAHOO.util.CustomEvent("eventMouseOut");

	/**
	 * Event that is fired when the mouse moves inside the wire
	 * You can register this event with myWire.eventMouseMove.subscribe(function(e,params) { var wire = params[0], xy = params[1];}, scope);
	 * @event eventMouseMove
	 */
	this.eventMouseMove = new YAHOO.util.CustomEvent("eventMouseMove");


	// Init the options property
	this.setOptions(options || {});

	// Create the canvas element and append it to parentEl
	WireIt.Wire.superclass.constructor.call(this, this.parentEl);

	// CSS classname
	YAHOO.util.Dom.addClass(this.element, this.options.className);

	// Call addWire on both terminals
	this.terminal1.addWire(this);
	this.terminal2.addWire(this);
};


YAHOO.lang.extend(WireIt.Wire, WireIt.CanvasElement, {

	/**
	 * Build options object and set default properties
	 * @method setOptions
	 */
	setOptions: function(options) {
		/**
		 * Wire styling, and properties:
		 * <ul>
		 *   <li>className: CSS class name of the canvas element (default 'WireIt-Wire')</li>
		 *   <li>coeffMulDirection: Parameter for bezier style</li>
		 *   <li>cap: default 'round'</li>
		 *   <li>bordercap: default 'round'</li>
		 *   <li>width: Wire width (default to 3)</li>
		 *   <li>borderwidth: Border Width (default to 1)</li>
		 *   <li>color: Wire color (default to rgb(173, 216, 230) )</li>
		 *   <li>bordercolor: Border color (default to #0000ff )</li>
		 * </ul>
		 * @property options
		 */
		this.options = {};
		this.options.className = options.className || 'WireIt-Wire';
		this.options.coeffMulDirection = YAHOO.lang.isUndefined(options.coeffMulDirection) ? 100 : options.coeffMulDirection;

		// Syling
		this.options.drawingMethod = options.drawingMethod || 'bezier';
		this.options.cap = options.cap || 'round';
		this.options.bordercap = options.bordercap || 'round';
		this.options.width = options.width || 3;
		this.options.borderwidth = options.borderwidth || 1;
		this.options.color = options.color || 'rgb(173, 216, 230)';
		this.options.bordercolor = options.bordercolor || '#0000ff';
	},

	/**
	 * Remove a Wire from the Dom
	 * @method remove
	 */
	remove: function() {

		// Remove the canvas from the dom
		this.parentEl.removeChild(this.element);

		// Remove the wire reference from the connected terminals
		if (this.terminal1 && this.terminal1.removeWire) {
			this.terminal1.removeWire(this);
		}
		if (this.terminal2 && this.terminal2.removeWire) {
			this.terminal2.removeWire(this);
		}

		// Remove references to old terminals
		this.terminal1 = null;
		this.terminal2 = null;
	},

	/**
	 * Redraw the Wire
	 * @method drawBezierCurve
	 */
	drawBezierCurve: function() {

		// Get the positions of the terminals
		var p1 = this.terminal1.getXY();
		var p2 = this.terminal2.getXY();

		// Coefficient multiplicateur de direction
		// 100 par defaut, si distance(p1,p2) < 100, on passe en distance/2
		var coeffMulDirection = this.options.coeffMulDirection;


		var distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
		if (distance < coeffMulDirection) {
			coeffMulDirection = distance / 2;
		}

		// Calcul des vecteurs directeurs d1 et d2 :
		var d1 = [this.terminal1.options.direction[0] * coeffMulDirection,
				  this.terminal1.options.direction[1] * coeffMulDirection];
		var d2 = [this.terminal2.options.direction[0] * coeffMulDirection,
				  this.terminal2.options.direction[1] * coeffMulDirection];

		var bezierPoints = [];
		bezierPoints[0] = p1;
		bezierPoints[1] = [p1[0] + d1[0],p1[1] + d1[1]];
		bezierPoints[2] = [p2[0] + d2[0],p2[1] + d2[1]];
		bezierPoints[3] = p2;
		var min = [p1[0],p1[1]];
		var max = [p1[0],p1[1]];
		for (var i = 1; i < bezierPoints.length; i++) {
			var p = bezierPoints[i];
			if (p[0] < min[0]) {
				min[0] = p[0];
			}
			if (p[1] < min[1]) {
				min[1] = p[1];
			}
			if (p[0] > max[0]) {
				max[0] = p[0];
			}
			if (p[1] > max[1]) {
				max[1] = p[1];
			}
		}
		// Redimensionnement du canvas
		var margin = [4,4];
		min[0] = min[0] - margin[0];
		min[1] = min[1] - margin[1];
		max[0] = max[0] + margin[0];
		max[1] = max[1] + margin[1];
		var lw = Math.abs(max[0] - min[0]);
		var lh = Math.abs(max[1] - min[1]);

		this.SetCanvasRegion(min[0], min[1], lw, lh);

		var ctxt = this.getContext();
		for (i = 0; i < bezierPoints.length; i++) {
			bezierPoints[i][0] = bezierPoints[i][0] - min[0];
			bezierPoints[i][1] = bezierPoints[i][1] - min[1];
		}

		// Draw the border
		ctxt.lineCap = this.options.bordercap;
		ctxt.strokeStyle = this.options.bordercolor;
		ctxt.lineWidth = this.options.width + this.options.borderwidth * 2;
		ctxt.beginPath();
		ctxt.moveTo(bezierPoints[0][0], bezierPoints[0][1]);
		ctxt.bezierCurveTo(bezierPoints[1][0], bezierPoints[1][1], bezierPoints[2][0], bezierPoints[2][1], bezierPoints[3][0], bezierPoints[3][1]);
		ctxt.stroke();

		// Draw the inner bezier curve
		ctxt.lineCap = this.options.cap;
		ctxt.strokeStyle = this.options.color;
		ctxt.lineWidth = this.options.width;
		ctxt.beginPath();
		ctxt.moveTo(bezierPoints[0][0], bezierPoints[0][1]);
		ctxt.bezierCurveTo(bezierPoints[1][0], bezierPoints[1][1], bezierPoints[2][0], bezierPoints[2][1], bezierPoints[3][0], bezierPoints[3][1]);
		ctxt.stroke();

	},

	/**
	 * Attempted bezier drawing method for arrows
	 * @method drawBezierArrows
	 */
	drawBezierArrows: function() {
		//From drawArrows function

		var arrowWidth = Math.round(this.options.width * 1.5 + 20);
		var arrowLength = Math.round(this.options.width * 1.2 + 20);
		var d = arrowWidth / 2; // arrow width/2
		var redim = d + 3; //we have to make the canvas a little bigger because of arrows
		var margin = [4 + redim,4 + redim];

		// Get the positions of the terminals
		var p1 = this.terminal1.getXY();
		var p2 = this.terminal2.getXY();

		// Coefficient multiplicateur de direction
		// 100 par defaut, si distance(p1,p2) < 100, on passe en distance/2
		var coeffMulDirection = this.options.coeffMulDirection;


		var distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
		if (distance < coeffMulDirection) {
			coeffMulDirection = distance / 2;
		}

		// Calcul des vecteurs directeurs d1 et d2 :
		var d1 = [this.terminal1.options.direction[0] * coeffMulDirection,
				  this.terminal1.options.direction[1] * coeffMulDirection];
		var d2 = [this.terminal2.options.direction[0] * coeffMulDirection,
				  this.terminal2.options.direction[1] * coeffMulDirection];

		var bezierPoints = [];
		bezierPoints[0] = p1;
		bezierPoints[1] = [p1[0] + d1[0],p1[1] + d1[1]];
		bezierPoints[2] = [p2[0] + d2[0],p2[1] + d2[1]];
		bezierPoints[3] = p2;
		var min = [p1[0],p1[1]];
		var max = [p1[0],p1[1]];
		for (var i = 1; i < bezierPoints.length; i++) {
			var p = bezierPoints[i];
			if (p[0] < min[0]) {
				min[0] = p[0];
			}
			if (p[1] < min[1]) {
				min[1] = p[1];
			}
			if (p[0] > max[0]) {
				max[0] = p[0];
			}
			if (p[1] > max[1]) {
				max[1] = p[1];
			}
		}
		// Redimensionnement du canvas
		//var margin = [4,4];
		min[0] = min[0] - margin[0];
		min[1] = min[1] - margin[1];
		max[0] = max[0] + margin[0];
		max[1] = max[1] + margin[1];
		var lw = Math.abs(max[0] - min[0]);
		var lh = Math.abs(max[1] - min[1]);

		this.SetCanvasRegion(min[0], min[1], lw, lh);

		var ctxt = this.getContext();
		for (i = 0; i < bezierPoints.length; i++) {
			bezierPoints[i][0] = bezierPoints[i][0] - min[0];
			bezierPoints[i][1] = bezierPoints[i][1] - min[1];
		}

		// Draw the border
		ctxt.lineCap = this.options.bordercap;
		ctxt.strokeStyle = this.options.bordercolor;
		ctxt.lineWidth = this.options.width + this.options.borderwidth * 2;
		ctxt.beginPath();
		ctxt.moveTo(bezierPoints[0][0], bezierPoints[0][1]);
		ctxt.bezierCurveTo(bezierPoints[1][0], bezierPoints[1][1], bezierPoints[2][0], bezierPoints[2][1], bezierPoints[3][0], bezierPoints[3][1] + arrowLength / 2 * this.terminal2.options.direction[1]);
		ctxt.stroke();

		// Draw the inner bezier curve
		ctxt.lineCap = this.options.cap;
		ctxt.strokeStyle = this.options.color;
		ctxt.lineWidth = this.options.width;
		ctxt.beginPath();
		ctxt.moveTo(bezierPoints[0][0], bezierPoints[0][1]);
		ctxt.bezierCurveTo(bezierPoints[1][0], bezierPoints[1][1], bezierPoints[2][0], bezierPoints[2][1], bezierPoints[3][0], bezierPoints[3][1] + arrowLength / 2 * this.terminal2.options.direction[1]);
		ctxt.stroke();

		//Variables from drawArrows
		//var t1 = p1;
		var t1 = bezierPoints[2],
				t2 = p2;

		var z = [0,0]; //point on the wire with constant distance (dlug) from terminal2
		var dlug = arrowLength; //arrow length
		var t = 1 - (dlug / distance);
		z[0] = Math.abs(t1[0] + t * (t2[0] - t1[0]));
		z[1] = Math.abs(t1[1] + t * (t2[1] - t1[1]));

		//line which connects the terminals: y=ax+b
		var W = t1[0] - t2[0];
		var Wa = t1[1] - t2[1];
		var Wb = t1[0] * t2[1] - t1[1] * t2[0];
		if (W !== 0) {
			a = Wa / W;
			b = Wb / W;
		}
		else {
			a = 0;
		}
		//line perpendicular to the main line: y = aProst*x + b
		if (a === 0) {
			aProst = 0;
		}
		else {
			aProst = -1 / a;
		}
		bProst = z[1] - aProst * z[0]; //point z lays on this line

		//we have to calculate coordinates of 2 points, which lay on perpendicular line and have the same distance (d) from point z
		var A = 1 + Math.pow(aProst, 2),
				B = 2 * aProst * bProst - 2 * z[0] - 2 * z[1] * aProst,
				C = -2 * z[1] * bProst + Math.pow(z[0], 2) + Math.pow(z[1], 2) - Math.pow(d, 2) + Math.pow(bProst, 2),
				delta = Math.pow(B, 2) - 4 * A * C;

		if (delta < 0) {
			return;
		}

		var x1 = (-B + Math.sqrt(delta)) / (2 * A),
				x2 = (-B - Math.sqrt(delta)) / (2 * A),
				y1 = aProst * x1 + bProst,
				y2 = aProst * x2 + bProst;

		if (t1[1] == t2[1]) {
			var o = (t1[0] > t2[0]) ? 1 : -1;
			x1 = t2[0] + o * dlug;
			x2 = x1;
			y1 -= d;
			y2 += d;
		}

		//triangle fill
		ctxt.fillStyle = this.options.color;
		ctxt.beginPath();
		ctxt.moveTo(t2[0], t2[1]);
		ctxt.lineTo(x1, y1);
		ctxt.lineTo(x2, y2);
		ctxt.fill();

		//triangle border
		ctxt.strokeStyle = this.options.bordercolor;
		ctxt.lineWidth = this.options.borderwidth;
		ctxt.beginPath();
		ctxt.moveTo(t2[0], t2[1]);
		ctxt.lineTo(x1, y1);
		ctxt.lineTo(x2, y2);
		ctxt.lineTo(t2[0], t2[1]);
		ctxt.stroke();

	},



	/**
	 * This function returns terminal1 if the first argument is terminal2 and vice-versa
	 * @method getOtherTerminal
	 * @param   {WireIt.Terminal} terminal
	 * @return  {WireIt.Terminal} terminal	the terminal that is NOT passed as argument
	 */
	getOtherTerminal: function(terminal) {
		return (terminal == this.terminal1) ? this.terminal2 : this.terminal1;
	},


	/**
	 * Drawing methods for arrows
	 * @method drawArrows
	 */
	drawArrows: function() {
		var d = 7; // arrow width/2
		var redim = d + 3; //we have to make the canvas a little bigger because of arrows
		var margin = [4 + redim,4 + redim];

		// Get the positions of the terminals
		var p1 = this.terminal1.getXY();
		var p2 = this.terminal2.getXY();

		var distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

		var min = [ Math.min(p1[0], p2[0]) - margin[0], Math.min(p1[1], p2[1]) - margin[1]];
		var max = [ Math.max(p1[0], p2[0]) + margin[0], Math.max(p1[1], p2[1]) + margin[1]];

		// Redimensionnement du canvas

		var lw = Math.abs(max[0] - min[0]) + redim;
		var lh = Math.abs(max[1] - min[1]) + redim;

		p1[0] = p1[0] - min[0];
		p1[1] = p1[1] - min[1];
		p2[0] = p2[0] - min[0];
		p2[1] = p2[1] - min[1];

		this.SetCanvasRegion(min[0], min[1], lw, lh);

		var ctxt = this.getContext();

		// Draw the border
		ctxt.lineCap = this.options.bordercap;
		ctxt.strokeStyle = this.options.bordercolor;
		ctxt.lineWidth = this.options.width + this.options.borderwidth * 2;
		ctxt.beginPath();
		ctxt.moveTo(p1[0], p1[1]);
		ctxt.lineTo(p2[0], p2[1]);
		ctxt.stroke();

		// Draw the inner bezier curve
		ctxt.lineCap = this.options.cap;
		ctxt.strokeStyle = this.options.color;
		ctxt.lineWidth = this.options.width;
		ctxt.beginPath();
		ctxt.moveTo(p1[0], p1[1]);
		ctxt.lineTo(p2[0], p2[1]);
		ctxt.stroke();

		/* start drawing arrows */

		var t1 = p1;
		var t2 = p2;

		var z = [0,0]; //point on the wire with constant distance (dlug) from terminal2
		var dlug = 20; //arrow length
		var t = (distance == 0) ? 0 : 1 - (dlug / distance);
		z[0] = Math.abs(t1[0] + t * (t2[0] - t1[0]));
		z[1] = Math.abs(t1[1] + t * (t2[1] - t1[1]));

		//line which connects the terminals: y=ax+b
		var W = t1[0] - t2[0];
		var Wa = t1[1] - t2[1];
		var Wb = t1[0] * t2[1] - t1[1] * t2[0];
		if (W !== 0) {
			a = Wa / W;
			b = Wb / W;
		}
		else {
			a = 0;
		}
		//line perpendicular to the main line: y = aProst*x + b
		if (a == 0) {
			aProst = 0;
		}
		else {
			aProst = -1 / a;
		}
		bProst = z[1] - aProst * z[0]; //point z lays on this line

		//we have to calculate coordinates of 2 points, which lay on perpendicular line and have the same distance (d) from point z
		var A = 1 + Math.pow(aProst, 2);
		var B = 2 * aProst * bProst - 2 * z[0] - 2 * z[1] * aProst;
		var C = -2 * z[1] * bProst + Math.pow(z[0], 2) + Math.pow(z[1], 2) - Math.pow(d, 2) + Math.pow(bProst, 2);
		var delta = Math.pow(B, 2) - 4 * A * C;
		if (delta < 0) {
			return;
		}

		var x1 = (-B + Math.sqrt(delta)) / (2 * A);
		var x2 = (-B - Math.sqrt(delta)) / (2 * A);
		var y1 = aProst * x1 + bProst;
		var y2 = aProst * x2 + bProst;

		if (t1[1] == t2[1]) {
			var o = (t1[0] > t2[0]) ? 1 : -1;
			x1 = t2[0] + o * dlug;
			x2 = x1;
			y1 -= d;
			y2 += d;
		}

		//triangle fill
		ctxt.fillStyle = this.options.color;
		ctxt.beginPath();
		ctxt.moveTo(t2[0], t2[1]);
		ctxt.lineTo(x1, y1);
		ctxt.lineTo(x2, y2);
		ctxt.fill();

		//triangle border
		ctxt.strokeStyle = this.options.bordercolor;
		ctxt.lineWidth = this.options.borderwidth;
		ctxt.beginPath();
		ctxt.moveTo(t2[0], t2[1]);
		ctxt.lineTo(x1, y1);
		ctxt.lineTo(x2, y2);
		ctxt.lineTo(t2[0], t2[1]);
		ctxt.stroke();

	},

	/**
	 * Drawing method for arrows
	 * @method drawStraight
	 */
	drawStraight: function() {
		var margin = [4,4];

		// Get the positions of the terminals
		var p1 = this.terminal1.getXY();
		var p2 = this.terminal2.getXY();

		var min = [ Math.min(p1[0], p2[0]) - margin[0], Math.min(p1[1], p2[1]) - margin[1]];
		var max = [ Math.max(p1[0], p2[0]) + margin[0], Math.max(p1[1], p2[1]) + margin[1]];

		// Redimensionnement du canvas
		var lw = Math.abs(max[0] - min[0]);
		var lh = Math.abs(max[1] - min[1]);

		// Convert points in canvas coordinates
		p1[0] = p1[0] - min[0];
		p1[1] = p1[1] - min[1];
		p2[0] = p2[0] - min[0];
		p2[1] = p2[1] - min[1];

		this.SetCanvasRegion(min[0], min[1], lw, lh);

		var ctxt = this.getContext();

		// Draw the border
		ctxt.lineCap = this.options.bordercap;
		ctxt.strokeStyle = this.options.bordercolor;
		ctxt.lineWidth = this.options.width + this.options.borderwidth * 2;
		ctxt.beginPath();
		ctxt.moveTo(p1[0], p1[1]);
		ctxt.lineTo(p2[0], p2[1]);
		ctxt.stroke();

		// Draw the inner bezier curve
		ctxt.lineCap = this.options.cap;
		ctxt.strokeStyle = this.options.color;
		ctxt.lineWidth = this.options.width;
		ctxt.beginPath();
		ctxt.moveTo(p1[0], p1[1]);
		ctxt.lineTo(p2[0], p2[1]);
		ctxt.stroke();
	},

	/**
	 * Redraw the canvas (according to the drawingMethod option)
	 * @method redraw
	 */
	redraw: function() {
		if (this.options.drawingMethod == 'straight') {
			this.drawStraight();
		}
		else if (this.options.drawingMethod == 'arrows') {
			this.drawArrows();
		}
		else if (this.options.drawingMethod == 'bezier') {
				this.drawBezierCurve();
			}
			else if (this.options.drawingMethod == 'bezierArrows') {
					this.drawBezierArrows();
				}
				else {
					throw new Error("WireIt.Wire unable to find '" + this.drawingMethod + "' drawing method.");
				}
	},

	/**
	 * Determine if the wire is drawn at position (x,y) relative to the canvas element. This is used for mouse events.
	 * @method wireDrawnAt
	 * @return {Boolean} true if the wire is drawn at position (x,y) relative to the canvas element
	 */
	wireDrawnAt: function(x, y) {
		var ctxt = this.getContext();
		var imgData = ctxt.getImageData(x, y, 1, 1);
		var pixel = imgData.data;
		return !( pixel[0] === 0 && pixel[1] === 0 && pixel[2] === 0 && pixel[3] === 0 );
	},

	/**
	 * Called by the Layer when the mouse moves over the canvas element.
	 * Note: the event is not listened directly, to receive the event event if the wire is behind another wire
	 * @method onMouseMove
	 * @param {Integer} x left position of the mouse (relative to the canvas)
	 * @param {Integer} y top position of the mouse (relative to the canvas)
	 */
	onMouseMove: function(x, y) {

		if (typeof this.mouseInState === undefined) {
			this.mouseInState = false;
		}

		if (this.wireDrawnAt(x, y)) {
			if (!this.mouseInState) {
				this.mouseInState = true;
				this.onWireIn(x, y);
			}
			// should we call both ??
			// else {
			this.onWireMove(x, y);
			// }
		}
		else {
			if (this.mouseInState) {
				this.mouseInState = false;
				this.onWireOut(x, y);
			}
		}

	},

	/**
	 * When the mouse moves over a wire
	 * Note: this will only work within a layer
	 * @method onWireMove
	 * @param {Integer} x left position of the mouse (relative to the canvas)
	 * @param {Integer} y top position of the mouse (relative to the canvas)
	 */
	onWireMove: function(x, y) {
		this.eventMouseMove.fire(this, [x,y]);
	},

	/**
	 * When the mouse comes into the wire
	 * Note: this will only work within a layer
	 * @method onWireIn
	 * @param {Integer} x left position of the mouse (relative to the canvas)
	 * @param {Integer} y top position of the mouse (relative to the canvas)
	 */
	onWireIn: function(x, y) {
		this.eventMouseIn.fire(this, [x,y]);
	},

	/**
	 * When the mouse comes out of the wire
	 * Note: this will only work within a layer
	 * @method onWireOut
	 * @param {Integer} x left position of the mouse (relative to the canvas)
	 * @param {Integer} y top position of the mouse (relative to the canvas)
	 */
	onWireOut: function(x, y) {
		this.eventMouseOut.fire(this, [x,y]);
	},

	/**
	 * When the mouse clicked on the canvas
	 * Note: this will only work within a layer
	 * @method onClick
	 * @param {Integer} x left position of the mouse (relative to the canvas)
	 * @param {Integer} y top position of the mouse (relative to the canvas)
	 */
	onClick: function(x, y) {
		if (this.wireDrawnAt(x, y)) {
			this.onWireClick(x, y);
		}
	},

	/**
	 * When the mouse clicked on the wire
	 * Note: this will only work within a layer
	 * @method onWireClick
	 * @param {Integer} x left position of the mouse (relative to the canvas)
	 * @param {Integer} y top position of the mouse (relative to the canvas)
	 */
	onWireClick: function(x, y) {
		this.eventMouseClick.fire(this, [x,y]);
	}


});


(function() {

	var util = YAHOO.util;
	var Event = util.Event, lang = YAHOO.lang, Dom = util.Dom, CSS_PREFIX = "WireIt-";

	/**
	 * Scissors widget to cut wires
	 * @class Scissors
	 * @namespace WireIt
	 * @extends YAHOO.util.Element
	 * @constructor
	 * @param {WireIt.Terminal} terminal Associated terminal
	 * @param {Object} oConfigs
	 */
	WireIt.Scissors = function(terminal, oConfigs) {
		WireIt.Scissors.superclass.constructor.call(this, document.createElement('div'), oConfigs);

		/**
		 * The terminal it is associated to
		 * @property _terminal
		 * @type {WireIt.Terminal}
		 */
		this._terminal = terminal;

		this.initScissors();
	};
	WireIt.Scissors.visibleInstance = null;
	lang.extend(WireIt.Scissors, util.Element, {

		/**
		 * Init the scissors
		 * @method initScissors
		 */
		initScissors: function() {

			// Display the cut button
			this.hideNow();
			this.addClass(CSS_PREFIX + "Wire-scissors");

			// The scissors are within the terminal element
			this.appendTo(this._terminal.container ? this._terminal.container.layer.el : this._terminal.el.parentNode.parentNode);

			// Ajoute un listener sur le scissor:
			this.on("mouseover", this.show, this, true);
			this.on("mouseout", this.hide, this, true);
			this.on("click", this.scissorClick, this, true);

			// On mouseover/mouseout to display/hide the scissors
			Event.addListener(this._terminal.el, "mouseover", this.mouseOver, this, true);
			Event.addListener(this._terminal.el, "mouseout", this.hide, this, true);
		},

		/**
		 * @method setPosition
		 */
		setPosition: function() {
			var pos = this._terminal.getXY();
			this.setStyle("left", (pos[0] + this._terminal.options.direction[0] * 30 - 8) + "px");
			this.setStyle("top", (pos[1] + this._terminal.options.direction[1] * 30 - 8) + "px");
		},
		/**
		 * @method mouseOver
		 */
		mouseOver: function() {
			if (this._terminal.wires.length > 0) {
				this.show();
			}
		},

		/**
		 * @method scissorClick
		 */
		scissorClick: function() {
			this._terminal.removeAllWires();
			if (this.terminalTimeout) {
				this.terminalTimeout.cancel();
			}
			this.hideNow();
		},
		/**
		 * @method show
		 */
		show: function() {
			this.setPosition();
			this.setStyle('display', '');

			if (WireIt.Scissors.visibleInstance && WireIt.Scissors.visibleInstance != this) {
				if (WireIt.Scissors.visibleInstance.terminalTimeout) {
					WireIt.Scissors.visibleInstance.terminalTimeout.cancel();
				}
				WireIt.Scissors.visibleInstance.hideNow();
			}
			WireIt.Scissors.visibleInstance = this;

			if (this.terminalTimeout) {
				this.terminalTimeout.cancel();
			}
		},
		/**
		 * @method hide
		 */
		hide: function() {
			this.terminalTimeout = lang.later(700, this, this.hideNow);
		},
		/**
		 * @method hideNow
		 */
		hideNow: function() {
			WireIt.Scissors.visibleInstance = null;
			this.setStyle('display', 'none');
		}

	});


	/**
	 * This class is used for wire edition. It inherits from YAHOO.util.DDProxy and acts as a "temporary" Terminal.
	 * @class TerminalProxy
	 * @namespace WireIt
	 * @extends YAHOO.util.DDProxy
	 * @constructor
	 * @param {WireIt.Terminal} terminal Parent terminal
	 * @param {Object} options Configuration object (see "termConfig" property for details)
	 */
	WireIt.TerminalProxy = function(terminal, options) {

		/**
		 * Reference to the terminal parent
		 */
		this.terminal = terminal;

		/**
		 * Object containing the configuration object
		 * <ul>
		 *   <li>type: 'type' of this terminal. If no "allowedTypes" is specified in the options, the terminal will only connect to the same type of terminal</li>
		 *   <li>allowedTypes: list of all the allowed types that we can connect to.</li>
		 *   <li>{Integer} terminalProxySize: size of the drag drop proxy element. default is 10 for "10px"</li>
		 * </ul>
		 * @property termConfig
		 */
		// WARNING: the object config cannot be called "config" because YAHOO.util.DDProxy already has a "config" property
		this.termConfig = options || {};

		this.terminalProxySize = options.terminalProxySize || 10;

		/**
		 * Object that emulate a terminal which is following the mouse
		 */
		this.fakeTerminal = null;

		// Init the DDProxy
		WireIt.TerminalProxy.superclass.constructor.call(this, this.terminal.el, undefined, {
			dragElId: "WireIt-TerminalProxy",
			resizeFrame: false,
			centerFrame: true
		});
	};

// Mode Intersect to get the DD objects
	util.DDM.mode = util.DDM.INTERSECT;

	lang.extend(WireIt.TerminalProxy, util.DDProxy, {

		/**
		 * Took this method from the YAHOO.util.DDProxy class
		 * to overwrite the creation of the proxy Element with our custom size
		 * @method createFrame
		 */
		createFrame: function() {
			var self = this, body = document.body;
			if (!body || !body.firstChild) {
				setTimeout(function() {
					self.createFrame();
				}, 50);
				return;
			}
			var div = this.getDragEl(), Dom = YAHOO.util.Dom;
			if (!div) {
				div = document.createElement("div");
				div.id = this.dragElId;
				var s = div.style;
				s.position = "absolute";
				s.visibility = "hidden";
				s.cursor = "move";
				s.border = "2px solid #aaa";
				s.zIndex = 999;
				var size = this.terminalProxySize + "px";
				s.height = size;
				s.width = size;
				var _data = document.createElement('div');
				Dom.setStyle(_data, 'height', '100%');
				Dom.setStyle(_data, 'width', '100%');
				Dom.setStyle(_data, 'background-color', '#ccc');
				Dom.setStyle(_data, 'opacity', '0');
				div.appendChild(_data);
				body.insertBefore(div, body.firstChild);
			}
		},

		/**
		 * @method startDrag
		 */
		startDrag: function() {

			// If only one wire admitted, we remove the previous wire
			if (this.terminal.options.nMaxWires == 1 && this.terminal.wires.length == 1) {
				this.terminal.wires[0].remove();
			}
			// If the number of wires is at its maximum, prevent editing...
			else if (this.terminal.wires.length >= this.terminal.options.nMaxWires) {
				return;
			}

			var halfProxySize = this.terminalProxySize / 2;
			this.fakeTerminal = {
				options: {direction: this.terminal.options.fakeDirection},
				pos: [200,200],
				addWire: function() {
				},
				removeWire: function() {
				},
				getXY: function() {
					var layers = Dom.getElementsByClassName('WireIt-Layer');
					if (layers.length > 0) {
						var orig = Dom.getXY(layers[0]);
						return [this.pos[0] - orig[0] + halfProxySize, this.pos[1] - orig[1] + halfProxySize];
					}
					return this.pos;
				}
			};

			var parentEl = this.terminal.parentEl.parentNode;
			if (this.terminal.container) {
				parentEl = this.terminal.container.layer.el;
			}
			this.editingWire = new WireIt.Wire(this.terminal, this.fakeTerminal, parentEl, this.terminal.options.editingWireConfig);
			Dom.addClass(this.editingWire.element, CSS_PREFIX + 'Wire-editing');
		},

		/**
		 * @method onDrag
		 */
		onDrag: function(e) {

			// Prevention when the editing wire could not be created (due to nMaxWires)
			if (!this.editingWire) {
				return;
			}

			if (this.terminal.container) {
				var obj = this.terminal.container.layer.el;
				var curleft = 0;
				var curtop = 0;
				if (obj.offsetParent) {
					do {
						curleft += obj.scrollLeft;
						curtop += obj.scrollTop;
						obj = obj.offsetParent;
					} while (obj);
				}
				this.fakeTerminal.pos = [e.clientX + curleft, e.clientY + curtop];
			}
			else {
				this.fakeTerminal.pos = (YAHOO.env.ua.ie) ? [e.clientX, e.clientY] : [e.clientX + window.pageXOffset, e.clientY + window.pageYOffset];
				//this.fakeTerminal.pos = [e.clientX, e.clientY];
			}
			this.editingWire.redraw();
		},


		/**
		 * @method endDrag
		 */
		endDrag: function(e) {
			if (this.editingWire) {
				this.editingWire.remove();
				this.editingWire = null;
			}
		},

		/**
		 * @method onDragEnter
		 */
		onDragEnter: function(e, ddTargets) {

			// Prevention when the editing wire could not be created (due to nMaxWires)
			if (!this.editingWire) {
				return;
			}

			for (var i = 0; i < ddTargets.length; i++) {
				if (this.isValidWireTerminal(ddTargets[i])) {
					ddTargets[i].terminal.setDropInvitation(true);
				}
			}
		},

		/**
		 * @method onDragOut
		 */
		onDragOut: function(e, ddTargets) {

			// Prevention when the editing wire could not be created (due to nMaxWires)
			if (!this.editingWire) {
				return;
			}

			for (var i = 0; i < ddTargets.length; i++) {
				if (this.isValidWireTerminal(ddTargets[i])) {
					ddTargets[i].terminal.setDropInvitation(false);
				}
			}
		},

		/**
		 * @method onDragDrop
		 */
		onDragDrop: function(e, ddTargets) {

			// Prevention when the editing wire could not be created (due to nMaxWires)
			if (!this.editingWire) {
				return;
			}

			this.onDragOut(e, ddTargets);

			// Connect to the FIRST target terminal
			var targetTerminalProxy = null;
			for (var i = 0; i < ddTargets.length; i++) {
				if (this.isValidWireTerminal(ddTargets[i])) {
					targetTerminalProxy = ddTargets[i];
					break;
				}
			}

			// Quit if no valid terminal found
			if (!targetTerminalProxy) {
				return;
			}

			// Remove the editing wire
			this.editingWire.remove();
			this.editingWire = null;

			// Don't create the wire if it already exists between the 2 terminals !!
			var termAlreadyConnected = false;
			for (var i = 0; i < this.terminal.wires.length; i++) {
				if (this.terminal.wires[i].terminal1 == this.terminal) {
					if (this.terminal.wires[i].terminal2 == targetTerminalProxy.terminal) {
						termAlreadyConnected = true;
						break;
					}
				}
				else if (this.terminal.wires[i].terminal2 == this.terminal) {
					if (this.terminal.wires[i].terminal1 == targetTerminalProxy.terminal) {
						termAlreadyConnected = true;
						break;
					}
				}
			}

			// Create the wire only if the terminals aren't connected yet
			if (termAlreadyConnected) {
				//console.log("terminals already connected ");
				return;
			}

			var parentEl = this.terminal.parentEl.parentNode;
			if (this.terminal.container) {
				parentEl = this.terminal.container.layer.el;
			}

			// Switch the order of the terminals if tgt as the "alwaysSrc" property
			var term1 = this.terminal;
			var term2 = targetTerminalProxy.terminal;
			if (term2.options.alwaysSrc) {
				term1 = targetTerminalProxy.terminal;
				term2 = this.terminal;
			}

			// Check the number of wires for this terminal
			var tgtTerm = targetTerminalProxy.terminal;
			if (tgtTerm.options.nMaxWires == 1) {
				if (tgtTerm.wires.length > 0) {
					tgtTerm.wires[0].remove();
				}
				var w = new WireIt.Wire(term1, term2, parentEl, term1.options.wireConfig);
				w.redraw();
			}
			else if (tgtTerm.wires.length < tgtTerm.options.nMaxWires) {
				var w = new WireIt.Wire(term1, term2, parentEl, term1.options.wireConfig);
				w.redraw();
			}
			/*else {
			 console.log("Cannot connect to this terminal: nMaxWires = ", ddTargets[0].terminal.options.nMaxWires);
			 }*/

		},


		// to distinct from other YAHOO.util.DragDrop objects
		isWireItTerminal: true,


		/**
		 * @method isValidWireTerminal
		 */
		isValidWireTerminal: function(DDterminal) {

			if (!DDterminal.isWireItTerminal) {
				return false;
			}

			// If this terminal has the type property:
			if (this.termConfig.type) {
				if (this.termConfig.allowedTypes) {
					if (WireIt.indexOf(DDterminal.termConfig.type, this.termConfig.allowedTypes) == -1) {
						return false;
					}
				}
				else {
					if (this.termConfig.type != DDterminal.termConfig.type) {
						return false;
					}
				}
			}
			// The other terminal may have type property too:
			else if (DDterminal.termConfig.type) {
				if (DDterminal.termConfig.allowedTypes) {
					if (WireIt.indexOf(this.termConfig.type, DDterminal.termConfig.allowedTypes) == -1) {
						return false;
					}
				}
				else {
					if (this.termConfig.type != DDterminal.termConfig.type) {
						return false;
					}
				}
			}

			// Check the allowSelfWiring
			if (this.terminal.container) {
				if (this.terminal.container.options.preventSelfWiring) {
					if (DDterminal.terminal.container == this.terminal.container) {
						return false;
					}
				}
			}

			return true;
		}

	});


	/**
	 * Terminals represent the end points of the "wires"
	 * @class Terminal
	 * @constructor
	 * @param {HTMLElement} parentEl Element that will contain the terminal
	 * @param {Object} options Configuration object
	 * @param {WireIt.Container} container (Optional) Container containing this terminal
	 */
	WireIt.Terminal = function(parentEl, options, container) {

		/**
		 * DOM parent element
		 * @property parentEl
		 * @type {HTMLElement}
		 */
		this.parentEl = parentEl;

		/**
		 * Container (optional). Parent container of this terminal
		 * @property container
		 * @type {WireIt.Container}
		 */
		this.container = container;

		/**
		 * List of the associated wires
		 * @property wires
		 * @type {Array}
		 */
		this.wires = [];


		this.setOptions(options);

		/**
		 * Event that is fired when a wire is added
		 * You can register this event with myTerminal.eventAddWire.subscribe(function(e,params) { var wire=params[0];}, scope);
		 * @event eventAddWire
		 */
		this.eventAddWire = new util.CustomEvent("eventAddWire");

		/**
		 * Event that is fired when a wire is removed
		 * You can register this event with myTerminal.eventRemoveWire.subscribe(function(e,params) { var wire=params[0];}, scope);
		 * @event eventRemoveWire
		 */
		this.eventRemoveWire = new util.CustomEvent("eventRemoveWire");

		/**
		 * DIV dom element that will display the Terminal
		 * @property el
		 * @type {HTMLElement}
		 */
		this.el = null;


		this.render();

		// Create the TerminalProxy object to make the terminal editable
		if (this.options.editable) {
			this.dd = new WireIt.TerminalProxy(this, this.options.ddConfig);
			this.scissors = new WireIt.Scissors(this);
		}
	};

	WireIt.Terminal.prototype = {

		/**
		 * @method setOptions
		 * @param {Object} options
		 */
		setOptions: function(options) {

			/**
			 * <p>Object that contains the terminal configuration:</p>
			 *
			 * <ul>
			 *   <li><b>name</b>: terminal name</li>
			 *   <li><b>direction</b>: direction vector of the wires when connected to this terminal (default [0,1])</li>
			 *   <li><b>fakeDirection</b>: direction vector of the "editing" wire when it started from this terminal (default to -direction)</li>
			 *   <li><b>editable</b>: boolean that makes the terminal editable (default to true)</li>
			 *   <li><b>nMaxWires</b>: maximum number of wires for this terminal (default to Infinity)</li>
			 *   <li><b>offsetPosition</b>: offset position from the parentEl position. Can be an array [top,left] or an object {left: 100, bottom: 20} or {right: 10, top: 5} etc... (default to [0,0])</li>
			 *   <li><b>ddConfig</b>: configuration of the WireIt.TerminalProxy object (only if editable)</li>
			 *   <li><b>alwaysSrc</b>: alwaysSrc forces this terminal to be the src terminal in the wire config (default false, only if editable)</li>
			 *   <li><b>className</b>: CSS class name of the terminal (default to "WireIt-Terminal")</li>
			 *   <li><b>connectedClassName</b>: CSS class added to the terminal when it is connected (default to "WireIt-Terminal-connected")</li>
			 *   <li><b>dropinviteClassName</b>: CSS class added for drop invitation (default to "WireIt-Terminal-dropinvite")</li>
			 * </ul>
			 * @property options
			 */
			this.options = {};
			this.options.name = options.name;
			this.options.direction = options.direction || [0,1];
			this.options.fakeDirection = options.fakeDirection || [-this.options.direction[0],-this.options.direction[1]];
			this.options.className = options.className || CSS_PREFIX + 'Terminal';
			this.options.connectedClassName = options.connectedClassName || CSS_PREFIX + 'Terminal-connected';
			this.options.dropinviteClassName = options.dropinviteClassName || CSS_PREFIX + 'Terminal-dropinvite';
			this.options.editable = lang.isUndefined(options.editable) ? true : options.editable;
			this.options.nMaxWires = options.nMaxWires || Infinity;
			this.options.wireConfig = options.wireConfig || {};
			this.options.editingWireConfig = options.editingWireConfig || this.options.wireConfig;
			this.options.offsetPosition = options.offsetPosition;
			this.options.alwaysSrc = lang.isUndefined(options.alwaysSrc) ? false : options.alwaysSrc;
			this.options.ddConfig = options.ddConfig || {};
		},

		/**
		 * Show or hide the drop invitation. (by adding/removing this.options.dropinviteClassName CSS class)
		 * @method setDropInvitation
		 * @param {Boolean} display Show the invitation if true, hide it otherwise
		 */
		setDropInvitation: function(display) {
			if (display) {
				Dom.addClass(this.el, this.options.dropinviteClassName);
			}
			else {
				Dom.removeClass(this.el, this.options.dropinviteClassName);
			}
		},

		/**
		 * Render the DOM of the terminal
		 * @method render
		 */
		render: function() {
			// Create the DIV element
			this.el = WireIt.cn('div', {className: this.options.className});
			if (this.options.name) {
				this.el.title = this.options.name;
			}

// Set the offset position
			var pos = this.options.offsetPosition;
			if (pos) {
				// Kept old version [x,y] for retro-compatibility
				if (lang.isArray(pos)) {
					this.el.style.left = pos[0] + "px";
					this.el.style.top = pos[1] + "px";
				}
				// New version: {top: 32, left: 23}
				else if (lang.isObject(pos)) {
					for (var key in pos) {
						if (pos.hasOwnProperty(key) && pos[key] != "") {
							this.el.style[key] = pos[key] + "px";
						}
					}
				}
			}

			// Append the element to the parent
			this.parentEl.appendChild(this.el);

		},


		/**
		 * Add a wire to this terminal.
		 * @method addWire
		 * @param {WireIt.Wire} wire Wire instance to add
		 */
		addWire: function(wire) {

			// Adds this wire to the list of connected wires :
			this.wires.push(wire);

			// Set class indicating that the wire is connected
			Dom.addClass(this.el, this.options.connectedClassName);

			// Fire the event
			this.eventAddWire.fire(wire);
		},

		/**
		 * Remove a wire
		 * @method removeWire
		 * @param {WireIt.Wire} wire Wire instance to remove
		 */
		removeWire: function(wire) {
			var index = WireIt.indexOf(wire, this.wires), w;
			if (index != -1) {

				this.wires[index].destroy();

				this.wires[index] = null;
				this.wires = WireIt.compact(this.wires);

				// Remove the connected class if it has no more wires:
				if (this.wires.length == 0) {
					Dom.removeClass(this.el, this.options.connectedClassName);
				}

				// Fire the event
				this.eventRemoveWire.fire(wire);
			}
		},


		/**
		 * This function is a temporary test. I added the border width while traversing the DOM and
		 * I calculated the offset to center the wire in the terminal just after its creation
		 * @method getXY
		 */
		getXY: function() {

			var layerEl = this.container && this.container.layer ? this.container.layer.el : document.body;

			var obj = this.el;
			var curleft = curtop = 0;
			if (obj.offsetParent) {
				do {
					curleft += obj.offsetLeft;
					curtop += obj.offsetTop;
					obj = obj.offsetParent;
				} while (!!obj && obj != layerEl);
			}

			return [curleft + 15,curtop + 15];
		},



		/**
		 * Remove the terminal from the DOM
		 * @method remove
		 */
		remove: function() {
			// This isn't very nice but...
			// the method Wire.remove calls Terminal.removeWire to remove the reference
			while (this.wires.length > 0) {
				this.wires[0].remove();
			}
			this.parentEl.removeChild(this.el);

			// Remove all event listeners
			Event.purgeElement(this.el);

			// Remove scissors widget
			if (this.scissors) {
				Event.purgeElement(this.scissors.get('element'));
			}

		},



		/**
		 * Returns a list of all the terminals connecter to this terminal through its wires.
		 * @method getConnectedTerminals
		 * @return  {Array}  List of all connected terminals
		 */
		getConnectedTerminals: function() {
			var terminalList = [];
			if (this.wires) {
				for (var i = 0; i < this.wires.length; i++) {
					terminalList.push(this.wires[i].getOtherTerminal(this));
				}
			}
			return terminalList;
		},


		/**
		 * Redraw all the wires connected to this terminal
		 * @method redrawAllWires
		 */
		redrawAllWires: function() {
			if (this.wires) {
				for (var i = 0; i < this.wires.length; i++) {
					this.wires[i].redraw();
				}
			}
		},

		/**
		 * Remove all wires
		 * @method removeAllWires
		 */
		removeAllWires: function() {
			while (this.wires.length > 0) {
				this.wires[0].remove();
			}
		}

	};

	/**
	 * Class that extends Terminal to differenciate Input/Output terminals
	 * @class WireIt.util.TerminalInput
	 * @extends WireIt.Terminal
	 * @constructor
	 * @param {HTMLElement} parentEl Parent dom element
	 * @param {Object} options configuration object
	 * @param {WireIt.Container} container (Optional) Container containing this terminal
	 */
	WireIt.util.TerminalInput = function(parentEl, options, container) {
		WireIt.util.TerminalInput.superclass.constructor.call(this, parentEl, options, container);
	};
	lang.extend(WireIt.util.TerminalInput, WireIt.Terminal, {

		/**
		 * Override setOptions to add the default options for TerminalInput
		 * @method setOptions
		 */
		setOptions: function(options) {

			WireIt.util.TerminalInput.superclass.setOptions.call(this, options);

			this.options.direction = options.direction || [0,-1];
			this.options.fakeDirection = options.fakeDirection || [0,1];
			this.options.ddConfig = {
				type: "input",
				allowedTypes: ["output"]
			};
			this.options.nMaxWires = options.nMaxWires || 1;
		}

	});


	/**
	 * Class that extends Terminal to differenciate Input/Output terminals
	 * @class WireIt.util.TerminalOutput
	 * @extends WireIt.Terminal
	 * @constructor
	 * @param {HTMLElement} parentEl Parent dom element
	 * @param {Object} options configuration object
	 * @param {WireIt.Container} container (Optional) Container containing this terminal
	 */
	WireIt.util.TerminalOutput = function(parentEl, options, container) {
		WireIt.util.TerminalOutput.superclass.constructor.call(this, parentEl, options, container);
	};
	lang.extend(WireIt.util.TerminalOutput, WireIt.Terminal, {

		/**
		 * Override setOptions to add the default options for TerminalOutput
		 * @method setOptions
		 */
		setOptions: function(options) {

			WireIt.util.TerminalOutput.superclass.setOptions.call(this, options);

			this.options.direction = options.direction || [0,1];
			this.options.fakeDirection = options.fakeDirection || [0,-1];
			this.options.ddConfig = {
				type: "output",
				allowedTypes: ["input"]
			};
			this.options.alwaysSrc = true;
		}

	});


})();
/**
 * WireIt.util.DD is a wrapper class for YAHOO.util.DD, to redraw the wires associated with the given terminals while drag-dropping
 * @class DD
 * @namespace WireIt.util
 * @extends YAHOO.util.DD
 * @constructor
 * @param {Array} terminals List of WireIt.Terminal objects associated within the DragDrop element
 * @param {String} id Parameter of YAHOO.util.DD
 * @param {String} sGroup Parameter of YAHOO.util.DD
 * @param {Object} config Parameter of YAHOO.util.DD
 */
WireIt.util.DD = function(terminals, id, sGroup, config) {
	if (!terminals) {
		throw new Error("WireIt.util.DD needs at least terminals and id");
	}
	/**
	 * List of the contained terminals
	 * @property _WireItTerminals
	 * @type {Array}
	 */
	this._WireItTerminals = terminals;

	WireIt.util.DD.superclass.constructor.call(this, id, sGroup, config);
};

YAHOO.extend(WireIt.util.DD, YAHOO.util.DD, {

	/**
	 * Override YAHOO.util.DD.prototype.onDrag to redraw the wires
	 * @method onDrag
	 */
	onDrag: function(e) {
		var leftPanel = $('.yui-layout-unit-left');
		var leftWidth = leftPanel.width() + 10;

		// Make sure terminalList is an array
		var terminalList = YAHOO.lang.isArray(this._WireItTerminals) ? this._WireItTerminals : (this._WireItTerminals.isWireItTerminal ? [this._WireItTerminals] : []);
		// Redraw all the wires
		for (var i = 0; i < terminalList.length; i++) {
			if (terminalList[i].wires) {
				for (var k = 0; k < terminalList[i].wires.length; k++) {
					terminalList[i].wires[k].redraw();

				}
			}
		}

	},

	/**
	 * In case you change the terminals since you created the WireIt.util.DD:
	 * @method setTerminals
	 */
	setTerminals: function(terminals) {
		this._WireItTerminals = terminals;
	}

});

/**
 * Make a container resizable
 * @class DDResize
 * @namespace WireIt.util
 * @extends YAHOO.util.DragDrop
 * @constructor
 * @param {WireIt.Container} container The container that is to be resizable
 * @param {Object} config Configuration object
 */
WireIt.util.DDResize = function(container, config) {

	/**
	 * Configuration object
	 * <ul>
	 *   <li>minWidth: minimum width (default 50)</li>
	 *   <li>minHeight: minimum height (default 50)</li>
	 * </ul>
	 * @property myConf
	 */
	// WARNING: the object config cannot be called "config" because YAHOO.util.DragDrop already has a "config" property
	this.myConf = config || {};
	this.myConf.container = container;
	this.myConf.minWidth = this.myConf.minWidth || 50;
	this.myConf.minHeight = this.myConf.minHeight || 50;

	// Call the superconstructor
	WireIt.util.DDResize.superclass.constructor.apply(this, [container.el, container.ddResizeHandle]);

	// Set the resize handle
	this.setHandleElId(container.ddResizeHandle);

	/**
	 * The event fired when the container is resized
	 * @event eventResize
	 */
	this.eventResize = new YAHOO.util.CustomEvent("eventResize");
};

YAHOO.extend(WireIt.util.DDResize, YAHOO.util.DragDrop, {

	/**
	 * @method onMouseDown
	 */
	onMouseDown: function(e) {
		var panel = this.getEl();
		this.startWidth = panel.offsetWidth;
		this.startHeight = panel.offsetHeight;

		this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
	},

	/**
	 * @method onDrag
	 */
	onDrag: function(e) {
		var newPos = [YAHOO.util.Event.getPageX(e),  YAHOO.util.Event.getPageY(e)];

		var offsetX = newPos[0] - this.startPos[0];
		var offsetY = newPos[1] - this.startPos[1];

		var newWidth = Math.max(this.startWidth + offsetX, this.myConf.minWidth);
		var newHeight = Math.max(this.startHeight + offsetY, this.myConf.minHeight);

		var panel = this.getEl();
		panel.style.width = newWidth + "px";
		panel.style.height = newHeight + "px";

		// Fire the resize event
		this.eventResize.fire([newWidth, newHeight]);
	}
});

(function() {

	var util = YAHOO.util;
	var Dom = util.Dom, Event = util.Event, CSS_PREFIX = "WireIt-";

	/**
	 * Visual module that contains terminals. The wires are updated when the module is dragged around.
	 * @class Container
	 * @namespace WireIt
	 * @constructor
	 * @param {Object}   options	  Configuration object (see options property)
	 * @param {WireIt.Layer}   layer The WireIt.Layer (or subclass) instance that contains this container
	 */
	WireIt.Container = function(options, layer) {

		// Set the options
		this.setOptions(options);

		/**
		 * the WireIt.Layer object that schould contain this container
		 * @property layer
		 * @type {WireIt.Layer}
		 */
		this.layer = layer;

		/**
		 * List of the terminals
		 * @property terminals
		 * @type {Array}
		 */
		this.terminals = [];

		/**
		 * List of all the wires connected to this container terminals
		 * @property wires
		 * @type {Array}
		 */
		this.wires = [];

		/**
		 * Container DOM element
		 * @property el
		 * @type {HTMLElement}
		 */
		this.el = null;

		/**
		 * Body element
		 * @property bodyEl
		 * @type {HTMLElement}
		 */
		this.bodyEl = null;

		/**
		 * Event that is fired when a wire is added
		 * You can register this event with myTerminal.eventAddWire.subscribe(function(e,params) { var wire=params[0];}, scope);
		 * @event eventAddWire
		 */
		this.eventAddWire = new util.CustomEvent("eventAddWire");

		/**
		 * Event that is fired when a wire is removed
		 * You can register this event with myTerminal.eventRemoveWire.subscribe(function(e,params) { var wire=params[0];}, scope);
		 * @event eventRemoveWire
		 */
		this.eventRemoveWire = new util.CustomEvent("eventRemoveWire");

		// Render the div object
		this.render();

		// Init the terminals
		this.initTerminals(this.options.terminals);

		// Make the container draggable
		if (this.options.draggable) {

			if (this.options.resizable) {
				// Make resizeable
				this.ddResize = new WireIt.util.DDResize(this);
				this.ddResize.eventResize.subscribe(this.onResize, this, true);
			}

			// Use the drag'n drop utility to make the container draggable
			this.dd = new WireIt.util.DD(this.terminals, this.el);

			// Sets ddHandle as the drag'n drop handle
			if (this.options.ddHandle) {
				this.dd.setHandleElId(this.ddHandle);
			}

			// Mark the resize handle as an invalid drag'n drop handle and vice versa
			if (this.options.resizable) {
				this.dd.addInvalidHandleId(this.ddResizeHandle);
				this.ddResize.addInvalidHandleId(this.ddHandle);
			}
		}

	};

	WireIt.Container.prototype = {

		/**
		 * set the options
		 * @method setOptions
		 */
		setOptions: function(options) {

			/**
			 * Main options object
			 * <ul>
			 *	<li>terminals: list of the terminals configuration</li>
			 *	<li>draggable: boolean that enables drag'n drop on this container (default: true)</li>
			 *	<li>className: CSS class name for the container element (default 'WireIt-Container')</li>
			 *	<li>position: initial position of the container</li>
			 *	<li>ddHandle: (only if draggable) boolean indicating we use a handle for drag'n drop (default true)</li>
			 *	<li>ddHandleClassName: CSS class name for the drag'n drop handle (default 'WireIt-Container-ddhandle')</li>
			 *	<li>resizable: boolean that makes the container resizable (default true)</li>
			 *	<li>resizeHandleClassName: CSS class name for the resize handle (default 'WireIt-Container-resizehandle')</li>
			 *	<li>width: initial width of the container (no default so it autoadjusts to the content)</li>
			 *	<li>height: initial height of the container (default 100)</li>
			 *	<li>close: display a button to close the container (default true)</li>
			 *	<li>closeButtonClassName: CSS class name for the close button (default "WireIt-Container-closebutton")</li>
			 *	<li>title: text that will appear in the module header</li>
			 *	<li>icon: image url to be displayed in the module header</li>
			 *	<li>preventSelfWiring: option to prevent connections between terminals of this same container (default true)</li>
			 * </ul>
			 * @property options
			 * @type {Object}
			 */
			this.options = {};
			this.options.terminals = options.terminals || [];
			this.options.draggable = (typeof options.draggable == "undefined") ? true : options.draggable;
			this.options.position = options.position || [100,100];
			this.options.className = options.className || CSS_PREFIX + 'Container';

			this.options.ddHandle = (typeof options.ddHandle == "undefined") ? true : options.ddHandle;
			this.options.ddHandleClassName = options.ddHandleClassName || CSS_PREFIX + "Container-ddhandle";

			this.options.resizable = (typeof options.resizable == "undefined") ? true : options.resizable;
			this.options.resizeHandleClassName = options.resizeHandleClassName || CSS_PREFIX + "Container-resizehandle";

			this.options.width = options.width; // no default
			this.options.height = options.height;

			this.options.close = (typeof options.close == "undefined") ? true : options.close;
			this.options.closeButtonClassName = options.closeButtonClassName || CSS_PREFIX + "Container-closebutton t3js-icon icon icon-size-small icon-state-default icon-actions-edit-delete";

			this.options.title = options.title; // no default

			this.options.icon = options.icon;

			this.options.preventSelfWiring = (typeof options.preventSelfWiring == "undefined") ? true : options.preventSelfWiring;
		},

		/**
		 * Function called when the container is being resized.
		 * It doesn't do anything, so please override it.
		 * @method onResize
		 */
		onResize: function(event, args) {
			var size = args[0];
			WireIt.sn(this.bodyEl, null, {width: (size[0] - 10) + "px", height: (size[1] - 44) + "px"});
		},

		/**
		 * Render the dom of the container
		 * @method render
		 */
		render: function() {

			// Create the element
			this.el = WireIt.cn('div', {className: this.options.className});

			if (this.options.width) {
				this.el.style.width = this.options.width + "px";
			}
			if (this.options.height) {
				this.el.style.height = this.options.height + "px";
			}

			// Adds a handler for mousedown so we can notice the layer
			Event.addListener(this.el, "mousedown", this.onMouseDown, this, true);

			if (this.options.ddHandle) {
				// Create the drag/drop handle
				this.ddHandle = WireIt.cn('div', {className: this.options.ddHandleClassName});
				this.el.appendChild(this.ddHandle);

				// Set title
				if (this.options.title) {
					this.ddHandle.appendChild(WireIt.cn('span', null, null, this.options.title));
				}

				// Icon
				if (this.options.icon) {
					var iconCn = WireIt.cn('img', {src: this.options.icon, className: 'WireIt-Container-icon'});
					this.ddHandle.appendChild(iconCn);
				}

			}

			// Create the body element
			this.bodyEl = WireIt.cn('div', {className: "body"});
			this.el.appendChild(this.bodyEl);

			if (this.options.resizable) {
				// Create the resize handle
				this.ddResizeHandle = WireIt.cn('div', {className: this.options.resizeHandleClassName});
				this.el.appendChild(this.ddResizeHandle);
			}

			if (this.options.close) {
				// Close button
				//this.closeButton = WireIt.cn('div', {className: this.options.closeButtonClassName});
				this.closeButton = WireIt.cn('img', {className: this.options.closeButtonClassName, src: './sysext/core/Resources/Public/Icons/T3Icons/actions/actions-edit-delete.svg', width: 16});
				this.el.appendChild(this.closeButton);
				Event.addListener(this.closeButton, "click", this.onCloseButton, this, true);
			}

			// Append to the layer element
			this.layer.el.appendChild(this.el);

			// Set the position
			this.el.style.left = this.options.position[0] + "px";
			this.el.style.top = this.options.position[1] + "px";
		},

		/**
		 * Sets the content of the body element
		 * @method setBody
		 * @param {String or HTMLElement} content
		 */
		setBody: function(content) {
			if (typeof content == "string") {
				this.bodyEl.innerHTML = content;
			}
			else {
				this.bodyEl.innerHTML = "";
				this.bodyEl.appendChild(content);
			}
		},

		/**
		 * Called when the user made a mouse down on the container and sets the focus to this container (only if within a Layer)
		 * @method onMouseDown
		 */
		onMouseDown: function() {
			if (this.layer) {
				if (this.layer.focusedContainer && this.layer.focusedContainer != this) {
					this.layer.focusedContainer.removeFocus();
				}
				this.setFocus();
				this.layer.focusedContainer = this;
			}
		},

		/**
		 * Adds the class that shows the container as "focused"
		 * @method setFocus
		 */
		setFocus: function() {
			Dom.addClass(this.el, CSS_PREFIX + "Container-focused");
		},

		/**
		 * Remove the class that shows the container as "focused"
		 * @method removeFocus
		 */
		removeFocus: function() {
			Dom.removeClass(this.el, CSS_PREFIX + "Container-focused");
		},

		/**
		 * Called when the user clicked on the close button
		 * @method onCloseButton
		 */
		onCloseButton: function(e, args) {
			Event.stopEvent(e);
			this.layer.removeContainer(this);
		},

		/**
		 * Remove this container from the dom
		 * @method remove
		 */
		remove: function() {

			// Remove the terminals (and thus remove the wires)
			this.removeAllTerminals();

			// Remove from the dom
			this.layer.el.removeChild(this.el);

			// Remove all event listeners
			Event.purgeElement(this.el);
		},


		/**
		 * Call the addTerminal method for each terminal configuration.
		 * @method initTerminals
		 */
		initTerminals: function(terminalConfigs) {
			for (var i = 0; i < terminalConfigs.length; i++) {
				this.addTerminal(terminalConfigs[i]);
			}
		},


		/**
		 * Instanciate the terminal from the class pointer "xtype" (default WireIt.Terminal)
		 * @method addTerminal
		 * @return {WireIt.Terminal}  terminal Created terminal
		 */
		addTerminal: function(terminalConfig) {

			// Terminal type
			var type = eval(terminalConfig.xtype || "WireIt.Terminal");

			// Instanciate the terminal
			var term = new type(this.el, terminalConfig, this);

			// Add the terminal to the list
			this.terminals.push(term);

			// Event listeners
			term.eventAddWire.subscribe(this.onAddWire, this, true);
			term.eventRemoveWire.subscribe(this.onRemoveWire, this, true);

			return term;
		},

		/**
		 * This method is called when a wire is added to one of the terminals
		 * @method onAddWire
		 * @param {Event} event The eventAddWire event fired by the terminal
		 * @param {Array} args This array contains a single element args[0] which is the added Wire instance
		 */
		onAddWire: function(event, args) {
			var wire = args[0];
			// add the wire to the list if it isn't in
			if (WireIt.indexOf(wire, this.wires) == -1) {
				this.wires.push(wire);
				this.eventAddWire.fire(wire);
			}
		},

		/**
		 * This method is called when a wire is removed from one of the terminals
		 * @method onRemoveWire
		 * @param {Event} event The eventRemoveWire event fired by the terminal
		 * @param {Array} args This array contains a single element args[0] which is the removed Wire instance
		 */
		onRemoveWire: function(event, args) {
			var wire = args[0];
			var index = WireIt.indexOf(wire, this.wires);
			if (index != -1) {
				this.eventRemoveWire.fire(wire);
				this.wires[index] = null;
			}
			this.wires = WireIt.compact(this.wires);
		},

		/**
		 * Remove all terminals
		 * @method removeAllTerminals
		 */
		removeAllTerminals: function() {
			for (var i = 0; i < this.terminals.length; i++) {
				this.terminals[i].remove();
			}
			this.terminals = [];
		},

		/**
		 * Redraw all the wires connected to the terminals of this container
		 * @method redrawAllTerminals
		 */
		redrawAllWires: function() {
			for (var i = 0; i < this.terminals.length; i++) {
				this.terminals[i].redrawAllWires();
			}
		},

		/**
		 * Return the config of this container.
		 * @method getConfig
		 */
		getConfig: function() {
			var obj = {};

			// Position
			obj.position = Dom.getXY(this.el);
			if (this.layer) {
				// remove the layer position to the container position
				var layerPos = Dom.getXY(this.layer.el);
				obj.position[0] -= layerPos[0];
				obj.position[1] -= layerPos[1];
				// add the scroll position of the layer to the container position
				obj.position[0] += this.layer.el.scrollLeft;
				obj.position[1] += this.layer.el.scrollTop;
			}

			// xtype
			if (this.options.xtype) {
				obj.xtype = this.options.xtype;
			}

			return obj;
		},

		/**
		 * Subclasses should override this method.
		 * @method getValue
		 * @return {Object} value
		 */
		getValue: function() {
			return {};
		},

		/**
		 * Subclasses should override this method.
		 * @method setValue
		 * @param {Any} val Value
		 */
		setValue: function(val) {
		},


		/**
		 * @method getTerminal
		 */
		getTerminal: function(name) {
			var term;
			for (var i = 0; i < this.terminals.length; i++) {
				term = this.terminals[i];
				if (term.options.name == name) {
					return term;
				}
			}
			return null;
		}

	};

})();
/**
 * Container represented by an image
 * @class ImageContainer
 * @extends WireIt.Container
 * @constructor
 * @param {Object} options
 * @param {WireIt.Layer} layer
 */
WireIt.ImageContainer = function(options, layer) {
	WireIt.ImageContainer.superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(WireIt.ImageContainer, WireIt.Container, {

	/**
	 * @method setOptions
	 * @param {Object} options the options object
	 */
	setOptions: function(options) {
		WireIt.ImageContainer.superclass.setOptions.call(this, options);

		this.options.image = options.image;
		this.options.xtype = "WireIt.ImageContainer";

		this.options.className = options.className || "WireIt-Container WireIt-ImageContainer";

		// Overwrite default value for options:
		this.options.resizable = (typeof options.resizable == "undefined") ? false : options.resizable;
		this.options.ddHandle = (typeof options.ddHandle == "undefined") ? false : options.ddHandle;
	},

	/**
	 * @method render
	 */
	render: function() {
		WireIt.ImageContainer.superclass.render.call(this);
		YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url(" + this.options.image + ")");
	}

});
/**
 * A layer encapsulate a bunch of containers and wires
 * @class Layer
 * @namespace WireIt
 * @constructor
 * @param {Object}   options   Configuration object (see the properties)
 */
WireIt.Layer = function(options) {

	this.setOptions(options);

	/**
	 * List of all the WireIt.Container (or subclass) instances in this layer
	 * @property containers
	 * @type {Array}
	 */
	this.containers = [];

	/**
	 * List of all the WireIt.Wire (or subclass) instances in this layer
	 * @property wires
	 * @type {Array}
	 */
	this.wires = [];

	/**
	 * Layer DOM element
	 * @property el
	 * @type {HTMLElement}
	 */
	this.el = null;

	/**
	 * Event that is fired when the layer has been changed
	 * You can register this event with myTerminal.eventChanged.subscribe(function(e,params) { }, scope);
	 * @event eventChanged
	 */
	this.eventChanged = new YAHOO.util.CustomEvent("eventChanged");

	/**
	 * Event that is fired when a wire is added
	 * You can register this event with myTerminal.eventAddWire.subscribe(function(e,params) { var wire=params[0];}, scope);
	 * @event eventAddWire
	 */
	this.eventAddWire = new YAHOO.util.CustomEvent("eventAddWire");

	/**
	 * Event that is fired when a wire is removed
	 * You can register this event with myTerminal.eventRemoveWire.subscribe(function(e,params) { var wire=params[0];}, scope);
	 * @event eventRemoveWire
	 */
	this.eventRemoveWire = new YAHOO.util.CustomEvent("eventRemoveWire");

	/**
	 * Event that is fired when a container is added
	 * You can register this event with myTerminal.eventAddContainer.subscribe(function(e,params) { var container=params[0];}, scope);
	 * @event eventAddContainer
	 */
	this.eventAddContainer = new YAHOO.util.CustomEvent("eventAddContainer");

	/**
	 * Event that is fired when a container is removed
	 * You can register this event with myTerminal.eventRemoveContainer.subscribe(function(e,params) { var container=params[0];}, scope);
	 * @event eventRemoveContainer
	 */
	this.eventRemoveContainer = new YAHOO.util.CustomEvent("eventRemoveContainer");

	/**
	 * Event that is fired when a container has been moved
	 * You can register this event with myTerminal.eventContainerDragged.subscribe(function(e,params) { var container=params[0];}, scope);
	 * @event eventContainerDragged
	 */
	this.eventContainerDragged = new YAHOO.util.CustomEvent("eventContainerDragged");

	/**
	 * Event that is fired when a container has been resized
	 * You can register this event with myTerminal.eventContainerResized.subscribe(function(e,params) { var container=params[0];}, scope);
	 * @event eventContainerResized
	 */
	this.eventContainerResized = new YAHOO.util.CustomEvent("eventContainerResized");

	this.render();

	this.initContainers();

	this.initWires();

	if (this.options.layerMap) {
		new WireIt.LayerMap(this, this.options.layerMapOptions);
	}

};

WireIt.Layer.prototype = {

	/**
	 * @method setOptions
	 */
	setOptions: function(options) {
		/**
		 * Configuration object of the layer
		 * <ul>
		 *   <li>className: CSS class name for the layer element (default 'WireIt-Layer')</li>
		 *   <li>parentEl: DOM element that schould contain the layer (default document.body)</li>
		 *   <li>containers: array of container configuration objects</li>
		 *   <li>wires: array of wire configuration objects</li>
		 *   <li>layerMap: boolean</li>
		 *   <li>layerMapOptions: layer map options</li>
		 * </ul>
		 * @property options
		 */
		this.options = {};
		this.options.className = options.className || 'WireIt-Layer';
		this.options.parentEl = options.parentEl || document.body;
		this.options.containers = options.containers || [];
		this.options.wires = options.wires || [];
		this.options.layerMap = YAHOO.lang.isUndefined(options.layerMap) ? false : options.layerMap;
		this.options.layerMapOptions = options.layerMapOptions;
		this.options.enableMouseEvents = YAHOO.lang.isUndefined(options.enableMouseEvents) ? true : options.enableMouseEvents;
	},

	/**
	 * Create the dom of the layer and insert it into the parent element
	 * @method render
	 */
	render: function() {

		this.el = WireIt.cn('div', {className: this.options.className});

		this.options.parentEl.appendChild(this.el);
	},


	/**
	 * Create all the containers passed as options
	 * @method initContainers
	 */
	initContainers: function() {
		for (var i = 0; i < this.options.containers.length; i++) {
			this.addContainer(this.options.containers[i]);
		}
	},

	/**
	 * Create all the wires passed in the config
	 * @method initWires
	 */
	initWires: function() {
		for (var i = 0; i < this.options.wires.length; i++) {
			this.addWire(this.options.wires[i]);
		}
	},

	/**
	 * Instanciate a wire given its "xtype" (default to WireIt.Wire)
	 * @method addWire
	 * @param {Object} wireConfig  Wire configuration object (see WireIt.Wire class for details)
	 * @return {WireIt.Wire} Wire instance build from the xtype
	 */
	addWire: function(wireConfig) {
		var type = eval(wireConfig.xtype || "WireIt.Wire");

		var src = wireConfig.src;
		var tgt = wireConfig.tgt;

		var terminal1 = this.containers[src.moduleId].getTerminal(src.terminal);
		var terminal2 = this.containers[tgt.moduleId].getTerminal(tgt.terminal);
		var wire = new type(terminal1, terminal2, this.el, wireConfig);
		wire.redraw();

		return wire;
	},

	/**
	 * Instanciate a container given its "xtype": WireIt.Container (default) or a subclass of it.
	 * @method addContainer
	 * @param {Object} containerConfig  Container configuration object (see WireIt.Container class for details)
	 * @return {WireIt.Container} Container instance build from the xtype
	 */
	addContainer: function(containerConfig) {

		var type = eval('(' + (containerConfig.xtype || "WireIt.Container") + ')');
		if (!YAHOO.lang.isFunction(type)) {
			throw new Error("WireIt layer unable to add container: xtype '" + containerConfig.xtype + "' not found");
		}
		var container = new type(containerConfig, this);

		this.containers.push(container);

		// Event listeners
		container.eventAddWire.subscribe(this.onAddWire, this, true);
		container.eventRemoveWire.subscribe(this.onRemoveWire, this, true);

		if (container.ddResize) {
			container.ddResize.on('endDragEvent', function() {
				this.eventContainerResized.fire(container);
				this.eventChanged.fire(this);
			}, this, true);
		}
		if (container.dd) {
			container.dd.on('endDragEvent', function() {
				this.eventContainerDragged.fire(container);
				this.eventChanged.fire(this);
			}, this, true);
		}

		this.eventAddContainer.fire(container);

		this.eventChanged.fire(this);

		return container;
	},

	/**
	 * Remove a container
	 * @method removeContainer
	 * @param {WireIt.Container} container Container instance to remove
	 */
	removeContainer: function(container) {
		var index = WireIt.indexOf(container, this.containers);
		if (index != -1) {
			container.remove();
			this.containers[index] = null;
			this.containers = WireIt.compact(this.containers);

			this.eventRemoveContainer.fire(container);

			this.eventChanged.fire(this);
		}
	},

	/**
	 * Update the wire list when any of the containers fired the eventAddWire
	 * @method onAddWire
	 * @param {Event} event The eventAddWire event fired by the container
	 * @param {Array} args This array contains a single element args[0] which is the added Wire instance
	 */
	onAddWire: function(event, args) {
		var wire = args[0];
		// add the wire to the list if it isn't in
		if (WireIt.indexOf(wire, this.wires) == -1) {
			this.wires.push(wire);

			if (this.options.enableMouseEvents) {
				YAHOO.util.Event.addListener(wire.element, "mousemove", this.onWireMouseMove, this, true);
				YAHOO.util.Event.addListener(wire.element, "click", this.onWireClick, this, true);
			}

			// Re-Fire an event at the layer level
			this.eventAddWire.fire(wire);

			// Fire the layer changed event
			this.eventChanged.fire(this);
		}
	},

	/**
	 * Update the wire list when a wire is removed
	 * @method onRemoveWire
	 * @param {Event} event The eventRemoveWire event fired by the container
	 * @param {Array} args This array contains a single element args[0] which is the removed Wire instance
	 */
	onRemoveWire: function(event, args) {
		var wire = args[0];
		var index = WireIt.indexOf(wire, this.wires);
		if (index != -1) {
			this.wires[index] = null;
			this.wires = WireIt.compact(this.wires);
			this.eventRemoveWire.fire(wire);
			this.eventChanged.fire(this);
		}
	},


	/**
	 * Remove all the containers in this layer (and the associated terminals and wires)
	 * @method clear
	 */
	clear: function() {
		while (this.containers.length > 0) {
			this.removeContainer(this.containers[0]);
		}
	},

	/**
	 * Alias for clear
	 * @deprecated
	 * @method removeAllContainers
	 */
	removeAllContainers: function() {
		this.clear();
	},


	/**
	 * Return an object that represent the state of the layer including the containers and the wires
	 * @method getWiring
	 * @return {Obj} layer configuration
	 */
	getWiring: function() {

		var i;
		var obj = {containers: [], wires: []};

		for (i = 0; i < this.containers.length; i++) {
			obj.containers.push(this.containers[i].getConfig());
		}

		for (i = 0; i < this.wires.length; i++) {
			var wire = this.wires[i];

			var wireObj = {
				src: {moduleId: WireIt.indexOf(wire.terminal1.container, this.containers), terminal: wire.terminal1.name },
				tgt: {moduleId: WireIt.indexOf(wire.terminal2.container, this.containers), terminal: wire.terminal2.name }
			};
			obj.wires.push(wireObj);
		}

		return obj;
	},

	/**
	 * Load a layer configuration object
	 * @method setWiring
	 * @param {Object} wiring layer configuration
	 */
	setWiring: function(wiring) {
		this.clear();

		if (YAHOO.lang.isArray(wiring.containers)) {
			for (var i = 0; i < wiring.containers.length; i++) {
				this.addContainer(wiring.containers[i]);
			}
		}
		if (YAHOO.lang.isArray(wiring.wires)) {
			for (var i = 0; i < wiring.wires.length; i++) {
				this.addWire(wiring.wires[i]);
			}
		}
	},

	/**
	 * Returns a position relative to the layer from a mouse event
	 * @method _getMouseEvtPos
	 * @param {Event} e Mouse event
	 * @return {Array} position
	 */
	_getMouseEvtPos: function(e) {
		var tgt = YAHOO.util.Event.getTarget(e);
		var tgtPos = [tgt.offsetLeft, tgt.offsetTop];
		return [tgtPos[0] + e.layerX, tgtPos[1] + e.layerY];
	},

	/**
	 * Handles click on any wire canvas
	 * Note: we treat mouse events globally so that wires behind others can still receive the events
	 * @method onWireClick
	 * @param {Event} e Mouse click event
	 */
	onWireClick: function(e) {
		var p = this._getMouseEvtPos(e);
		var lx = p[0], ly = p[1], n = this.wires.length, w;
		for (var i = 0; i < n; i++) {
			w = this.wires[i];
			var elx = w.element.offsetLeft, ely = w.element.offsetTop;
			// Check if the mouse is within the canvas boundaries
			if (lx >= elx && lx < elx + w.element.width && ly >= ely && ly < ely + w.element.height) {
				var rx = lx - elx, ry = ly - ely; // relative to the canvas
				w.onClick(rx, ry);
			}
		}
	},

	/**
	 * Handles mousemove events on any wire canvas
	 * Note: we treat mouse events globally so that wires behind others can still receive the events
	 * @method onWireMouseMove
	 * @param {Event} e Mouse click event
	 */
	onWireMouseMove: function(e) {
		var p = this._getMouseEvtPos(e);
		var lx = p[0], ly = p[1], n = this.wires.length, w;
		for (var i = 0; i < n; i++) {
			w = this.wires[i];
			var elx = w.element.offsetLeft, ely = w.element.offsetTop;
			// Check if the mouse is within the canvas boundaries
			if (lx >= elx && lx < elx + w.element.width && ly >= ely && ly < ely + w.element.height) {
				var rx = lx - elx, ry = ly - ely; // relative to the canvas
				w.onMouseMove(rx, ry);
			}
		}
	},


	/**
	 * Layer explosing animation
	 * @method clearExplode
	 */
	clearExplode: function(callback, bind) {

		var center = [ Math.floor(YAHOO.util.Dom.getViewportWidth() / 2),
					   Math.floor(YAHOO.util.Dom.getViewportHeight() / 2)];
		var R = 1.2 * Math.sqrt(Math.pow(center[0], 2) + Math.pow(center[1], 2));

		for (var i = 0; i < this.containers.length; i++) {
			var left = parseInt(dbWire.layer.containers[i].el.style.left.substr(0, dbWire.layer.containers[i].el.style.left.length - 2), 10);
			var top = parseInt(dbWire.layer.containers[i].el.style.top.substr(0, dbWire.layer.containers[i].el.style.top.length - 2), 10);

			var d = Math.sqrt(Math.pow(left - center[0], 2) + Math.pow(top - center[1], 2));

			var u = [ (left - center[0]) / d, (top - center[1]) / d];
			YAHOO.util.Dom.setStyle(this.containers[i].el, "opacity", "0.8");

			var myAnim = new WireIt.util.Anim(this.containers[i].terminals, this.containers[i].el, {
				left: { to: center[0] + R * u[0] },
				top: { to: center[1] + R * u[1] },
				opacity: { to: 0, by: 0.05},
				duration: 3
			});
			if (i == this.containers.length - 1) {
				myAnim.onComplete.subscribe(function() {
					this.clear();
					callback.call(bind);
				}, this, true);
			}
			myAnim.animate();
		}

	}


};

// Comment by Ingmar Schlecht, 4. March 2010: The cloneObject function is needed later in this file, in order to make the back reference
// from the subfields to the container work, which is necessary for the positioning etc. of the wires of subfields

// Clone function for all objects. From: http://my.opera.com/GreyWyvern/blog/show.dml/1725165
// This is needed for function renderForm() in wireit/js/util/inputex/FormContainer-beta.js, where the option object needs to be cloned
/**
Object.prototype.cloneObject = function() {
	var newObj = (this instanceof Array) ? [] : {};
	for (i in this) {
		if (i == 'cloneObject') continue;
		if (this[i] && typeof this[i] == "object") {
			newObj[i] = this[i].cloneObject();
		} else newObj[i] = this[i]
	}
	return newObj;
};
 */

/**
 * extending objects prototype causes error in ExtJS
 * since there is an unfiltered for key in object call...
 * @param obj
 * @returns {Array}
 */
function cloneObject(obj) {
	var newObj = (obj instanceof Array) ? [] : {};
	for (var i in obj) {
		if (i == 'cloneObject') continue;
		if (obj[i] && typeof obj[i] == "object") {
			newObj[i] = cloneObject(obj[i]);
		} else newObj[i] = obj[i];
	}
	return newObj;
}


/**
 * Class used to build a container with inputEx forms
 * @class FormContainer
 * @namespace WireIt
 * @extends WireIt.Container
 * @constructor
 * @param {Object}   options  Configuration object (see properties)
 * @param {WireIt.Layer}   layer The WireIt.Layer (or subclass) instance that contains this container
 */
WireIt.FormContainer = function(options, layer) {
	WireIt.FormContainer.superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(WireIt.FormContainer, WireIt.Container, {

	/**
	 * @method setOptions
	 */
	setOptions: function(options) {
		WireIt.FormContainer.superclass.setOptions.call(this, options);

		this.options.legend = options.legend;
		this.options.collapsible = options.collapsible;
		this.options.fields = options.fields;
	},

	/**
	 * The render method is overrided to call renderForm
	 * @method render
	 */
	render: function() {
		WireIt.FormContainer.superclass.render.call(this);
		this.renderForm();
	},

	/**
	 * Render the form
	 * @method renderForm
	 */
	renderForm: function() {

		// IS:
		// Clone field options, so we have our own copy here.
		this.options = cloneObject(this.options);

		this.setBackReferenceOnFieldOptionsRecursively(this.options.fields);

		var groupParams = {parentEl: this.bodyEl, fields: this.options.fields, legend: this.options.legend, collapsible: this.options.collapsible};
		this.form = new YAHOO.inputEx.Group(groupParams);
	},

	/**
	 * When creating wirable input fields, the field configuration (inputParams) must have a reference to the current container (this is used for positionning).
	 * For complex fields (like object or list), the reference is set recursively AFTER the field creation.
	 * @method setBackReferenceOnFieldOptionsRecursively
	 */
	setBackReferenceOnFieldOptionsRecursively: function(fieldArray) {
		for (var i = 0; i < fieldArray.length; i++) {
			var inputParams = fieldArray[i].inputParams;
			inputParams.container = this;

			// Checking for group sub elements
			if (inputParams.fields && typeof inputParams.fields == 'object') {
				this.setBackReferenceOnFieldOptionsRecursively(inputParams.fields);
			}

			// Checking for list sub elements
			if (inputParams.elementType) {
				inputParams.elementType.inputParams.container = this;

				// Checking for group elements within list elements
				if (inputParams.elementType.inputParams.fields && typeof inputParams.elementType.inputParams.fields == 'object') {
					this.setBackReferenceOnFieldOptionsRecursively(inputParams.elementType.inputParams.fields);
				}
			}
		}
	},

	/**
	 * @method getValue
	 */
	getValue: function() {
		return this.form.getValue();
	},

	/**
	 * @method setValue
	 */
	setValue: function(val) {
		this.form.setValue(val);
	}

});

(function() {

	var Dom = YAHOO.util.Dom, Event = YAHOO.util.Event;

	/**
	 * Widget to display a minimap on a layer
	 * @class LayerMap
	 * @namespace WireIt
	 * @extends WireIt.CanvasElement
	 * @constructor
	 * @param {WireIt.Layer} layer the layer object it is attached to
	 * @param {Obj} options configuration object
	 */
	WireIt.LayerMap = function(layer, options) {

		/**
		 * @property layer
		 */
		this.layer = layer;

		this.setOptions(options);

		// Create the canvas element
		WireIt.LayerMap.superclass.constructor.call(this, this.options.parentEl);

		// Set the className
		this.element.className = this.options.className;

		this.initEvents();

		this.draw();
	};

	YAHOO.lang.extend(WireIt.LayerMap, WireIt.CanvasElement, {

		/**
		 * @method setOptions
		 * @param {Object} options
		 */
		setOptions: function(options) {
			var options = options || {};
			/**
			 * Options:
			 * <ul>
			 *	<li>parentEl: parent element (defaut layer.el)</li>
			 *	<li>className: default to "WireIt-LayerMap"</li>
			 *	<li>style: display style, default to "rgba(0, 0, 200, 0.5)"</li>
			 *	<li>lineWidth: default 2</li>
			 * </ul>
			 * @property options
			 */
			this.options = {};
			this.options.parentEl = Dom.get(options.parentEl || this.layer.el);
			this.options.className = options.className || "WireIt-LayerMap";
			this.options.style = options.style || "rgba(0, 0, 200, 0.5)";
			this.options.lineWidth = options.lineWidth || 2;
		},


		/**
		 * Listen for various events that should redraw the layer map
		 * @method initEvents
		 */
		initEvents: function() {

			var layer = this.layer;

			Event.addListener(this.element, 'mousedown', this.onMouseDown, this, true);
			Event.addListener(this.element, 'mouseup', this.onMouseUp, this, true);
			Event.addListener(this.element, 'mousemove', this.onMouseMove, this, true);
			Event.addListener(this.element, 'mouseout', this.onMouseUp, this, true);

			layer.eventAddWire.subscribe(this.draw, this, true);
			layer.eventRemoveWire.subscribe(this.draw, this, true);
			layer.eventAddContainer.subscribe(this.draw, this, true);
			layer.eventRemoveContainer.subscribe(this.draw, this, true);
			layer.eventContainerDragged.subscribe(this.draw, this, true);
			layer.eventContainerResized.subscribe(this.draw, this, true);

			Event.addListener(this.layer.el, "scroll", this.onLayerScroll, this, true);
		},

		/**
		 * When a mouse move is received
		 * @method onMouseMove
		 * @param {Event} e Original event
		 * @param {Array} args event parameters
		 */
		onMouseMove: function(e, args) {
			Event.stopEvent(e);
			if (this.isMouseDown)
				this.scrollLayer(e.clientX, e.clientY);
		},

		/**
		 * When a mouseup or mouseout is received
		 * @method onMouseUp
		 * @param {Event} e Original event
		 * @param {Array} args event parameters
		 */
		onMouseUp: function(e, args) {
			Event.stopEvent(e);
			this.isMouseDown = false;
		},

		/**
		 * When a mouse down is received
		 * @method onMouseDown
		 * @param {Event} e Original event
		 * @param {Array} args event parameters
		 */
		onMouseDown: function(e, args) {
			Event.stopEvent(e);
			this.scrollLayer(e.clientX, e.clientY);
			this.isMouseDown = true;
		},

		/**
		 * Scroll the layer from mousedown/mousemove
		 * @method scrollLayer
		 * @param {Integer} clientX mouse event x coordinate
		 * @param {Integer} clientY mouse event y coordinate
		 */
		scrollLayer: function(clientX, clientY) {

			var canvasPos = Dom.getXY(this.element);
			var click = [ clientX - canvasPos[0], clientY - canvasPos[1] ];

			// Canvas Region
			var canvasRegion = Dom.getRegion(this.element);
			var canvasWidth = canvasRegion.right - canvasRegion.left - 4;
			var canvasHeight = canvasRegion.bottom - canvasRegion.top - 4;

			// Calculate ratio
			var layerWidth = this.layer.el.scrollWidth;
			var layerHeight = this.layer.el.scrollHeight;
			var hRatio = Math.floor(100 * canvasWidth / layerWidth) / 100;
			var vRatio = Math.floor(100 * canvasHeight / layerHeight) / 100;

			// Center position:
			var center = [ click[0] / hRatio, click[1] / vRatio ];

			// Region
			var region = Dom.getRegion(this.layer.el);
			var viewportWidth = region.right - region.left;
			var viewportHeight = region.bottom - region.top;

			// Calculate the scroll position of the layer
			var topleft = [ Math.max(Math.floor(center[0] - viewportWidth / 2), 0) ,  Math.max(Math.floor(center[1] - viewportHeight / 2), 0) ];
			if (topleft[0] + viewportWidth > layerWidth) {
				topleft[0] = layerWidth - viewportWidth;
			}
			if (topleft[1] + viewportHeight > layerHeight) {
				topleft[1] = layerHeight - viewportHeight;
			}

			this.layer.el.scrollLeft = topleft[0];
			this.layer.el.scrollTop = topleft[1];

		},

		/**
		 * Redraw after a timeout
		 * @method onLayerScroll
		 */
		onLayerScroll: function() {

			if (this.scrollTimer) {
				clearTimeout(this.scrollTimer);
			}
			var that = this;
			this.scrollTimer = setTimeout(function() {
				that.draw();
			}, 50);

		},

		/**
		 * Redraw the layer map
		 * @method draw
		 */
		draw: function() {
			var ctxt = this.getContext();

			// Canvas Region
			var canvasRegion = Dom.getRegion(this.element);
			var canvasWidth = canvasRegion.right - canvasRegion.left - 4;
			var canvasHeight = canvasRegion.bottom - canvasRegion.top - 4;

			// Clear Rect
			ctxt.clearRect(0, 0, canvasWidth, canvasHeight);

			// Calculate ratio
			var layerWidth = this.layer.el.scrollWidth;
			var layerHeight = this.layer.el.scrollHeight;
			var hRatio = Math.floor(100 * canvasWidth / layerWidth) / 100;
			var vRatio = Math.floor(100 * canvasHeight / layerHeight) / 100;

			// Draw the viewport
			var region = Dom.getRegion(this.layer.el);
			var viewportWidth = region.right - region.left;
			var viewportHeight = region.bottom - region.top;
			var viewportX = this.layer.el.scrollLeft;
			var viewportY = this.layer.el.scrollTop;
			ctxt.strokeStyle = "rgb(200, 50, 50)";
			ctxt.lineWidth = 1;
			ctxt.strokeRect(viewportX * hRatio, viewportY * vRatio, viewportWidth * hRatio, viewportHeight * vRatio);

			// Draw containers and wires
			ctxt.fillStyle = this.options.style;
			ctxt.strokeStyle = this.options.style;
			ctxt.lineWidth = this.options.lineWidth;
			this.drawContainers(ctxt, hRatio, vRatio);
			this.drawWires(ctxt, hRatio, vRatio);
		},

		/**
		 * Subroutine to draw the containers
		 * @method drawContainers
		 */
		drawContainers: function(ctxt, hRatio, vRatio) {
			var containers = this.layer.containers;
			var n = containers.length,i,gIS = WireIt.getIntStyle,containerEl;
			for (i = 0; i < n; i++) {
				containerEl = containers[i].el;
				ctxt.fillRect(gIS(containerEl, "left") * hRatio, gIS(containerEl, "top") * vRatio,
							  gIS(containerEl, "width") * hRatio, gIS(containerEl, "height") * vRatio);
			}
		},

		/**
		 * Subroutine to draw the wires
		 * @method drawWires
		 */
		drawWires: function(ctxt, hRatio, vRatio) {
			var wires = this.layer.wires;
			var n = wires.length,i,wire;
			for (i = 0; i < n; i++) {
				wire = wires[i];
				var pos1 = wire.terminal1.getXY(),
						pos2 = wire.terminal2.getXY();

				// Stroked line
				// TODO:
				ctxt.beginPath();
				ctxt.moveTo(pos1[0] * hRatio, pos1[1] * vRatio);
				ctxt.lineTo(pos2[0] * hRatio, pos2[1] * vRatio);
				ctxt.closePath();
				ctxt.stroke();
			}

		}


	});

})();
(function() {
	var util = YAHOO.util,lang = YAHOO.lang;
	var Event = util.Event, Dom = util.Dom, Connect = util.Connect,JSON = lang.JSON,widget = YAHOO.widget;


	/**
	 * Module Proxy handle the drag/dropping from the module list to the layer (in the WiringEditor)
	 * @class ModuleProxy
	 * @constructor
	 * @param {HTMLElement} el
	 * @param {WireIt.WiringEditor} WiringEditor
	 */
	WireIt.ModuleProxy = function(el, WiringEditor) {

		this._WiringEditor = WiringEditor;

		// Init the DDProxy
		WireIt.ModuleProxy.superclass.constructor.call(this, el, "module", {
			dragElId: "moduleProxy"
		});

		this.isTarget = false;
	};
	YAHOO.extend(WireIt.ModuleProxy, YAHOO.util.DDProxy, {

		/**
		 * copy the html and apply selected classes
		 * @method startDrag
		 */
		startDrag: function(e) {
			WireIt.ModuleProxy.superclass.startDrag.call(this, e);
			var del = this.getDragEl();
			var lel = this.getEl();
			del.innerHTML = lel.innerHTML;
			del.className = lel.className;
		},

		/**
		 * Override default behavior of DDProxy
		 * @method endDrag
		 */
		endDrag: function(e) {
		},

		/**
		 * Add the module to the WiringEditor on drop on layer
		 * @method onDragDrop
		 */
		onDragDrop: function(e, ddTargets) {

			// The layer is the only target :
			var layerTarget = ddTargets[0];
			var layer = ddTargets[0]._layer;
			var del = this.getDragEl();
			var pos = YAHOO.util.Dom.getXY(del);

//	   // Make sure new models are not positioned outside the window
//	   if (pos[1] < 60) {
//		   pos[1] = 60;
//	   }
//
//	   if (pos[0] < this._WiringEditor.layout._sizes.left.w) {
//		   pos[0] = this._WiringEditor.layout._sizes.left.w;
//	   }
//	   // End make sure new models are not positioned outside the window

			var layerPos = YAHOO.util.Dom.getXY(layer.el);
			this._WiringEditor.addModule(this._module, [pos[0] - layerPos[0], pos[1] - layerPos[1]]);
		}

	});


	/**
	 * The WiringEditor class provides a full page interface
	 * @class WiringEditor
	 * @constructor
	 * @param {Object} options
	 */
	WireIt.WiringEditor = function(options) {


		// set the default options
		this.setOptions(options);

		/**
		 * Container DOM element
		 * @property el
		 */
		this.el = Dom.get(options.parentEl);

		/**
		 * @property helpPanel
		 * @type {YAHOO.widget.Panel}
		 */
		this.helpPanel = new widget.Panel('helpPanel', {
			fixedcenter: true,
			draggable: true,
			visible: false,
			modal: true
		});
		this.helpPanel.render();

		this.alertPanel = new widget.Panel('alertPanel', {
			fixedcenter: true,
			draggable: true,
			visible: false,
			modal: true
		});
		this.alertPanel.setBody("<div id='wireEditorMessageBox'></div><button id='alertPanelButton'>Ok</button>");
		this.alertPanel.render(document.body);

		this.confirmPanel = new widget.Panel('confirmPanel', {
			fixedcenter: true,
			draggable: true,
			visible: false,
			modal: true
		});
		this.confirmPanel.setBody("<div id='wireEditorConfirmMessageBox'></div><button id='confirmPanelButton'>Ok</button>&nbsp;&nbsp;<button id='confirmPanelCancelButton'>Cancel</button>");
		this.confirmPanel.render(document.body);

		this.confirmUpdatesPanel = new widget.Panel('confirmUpdatesPanel', {
			fixedcenter: true,
			draggable: true,
			visible: false,
			modal: true
		});
		this.confirmUpdatesPanel.setBody("<div id='wireEditorConfirmUpdatesMessageBox'></div><button id='confirmUpdatePanelButton'>Ok</button>&nbsp;&nbsp;<button id='confirmUpdatePanelCancelButton'>Cancel</button>");
		this.confirmUpdatesPanel.render(document.body);

		this.showSpinnerPanel = new YAHOO.widget.Panel("wait",
			{ width:"240px",
				fixedcenter:true,
				close:true,
				draggable:false,
				zindex:4,
				modal:true,
				visible:false
			}
		);

		this.showSpinnerPanel.setHeader("Saving, please wait...");
		this.showSpinnerPanel.setBody('<img src="' + TYPO3.settings.extensionBuilder.baseUrl + 'Resources/Public/jsDomainModeling/wireit/images/loading.gif" />');
		this.showSpinnerPanel.render(document.body);


		/**
		 * @property layout
		 * @type {YAHOO.widget.Layout}
		 */
		this.layout = new widget.Layout(this.el, this.options.layoutOptions);
		this.layout.render();

		// collapse right
		// this.layout.getUnitById('right').collapse();
		// this.layout.getUnitById('right').set('animate', true, false);

		// collapse left
		//this.layout.getUnitById('left').collapse();
		this.layout.getUnitById('left').set('animate', true, false);
		/**
		 // register events to collapse the other one if this is expanded
		 this.layout.getUnitById('right').subscribe(
		 'beforeExpand',
		 function() {
		 this.layout.getUnitById('left').collapse();
		 },
		 this,
		 this
		 )
		 */
		this.layout.getUnitById('left').subscribe(
				'beforeExpand',
				function() {
					this.layout.getUnitById('right').collapse();
				},
				this,
				this
		);


		/**
		 * @property layer
		 * @type {WireIt.Layer}
		 */
		this.layer = new WireIt.Layer(this.options.layerOptions);

		// Render module list
		this.buildModulesList();

		// Render buttons
		this.renderButtons();

		// Properties Form
		this.renderPropertiesForm();

		// Load Service
		this.loadSMD();

	};

	WireIt.WiringEditor.prototype = {

		/**
		 * @method setOptions
		 * @param {Object} options
		 */
		setOptions: function(options) {

			/**
			 * @property options
			 * @type {Object}
			 */
			this.options = {};

			// Load the modules from options
			this.modules = options.modules || ([]);
			this.modulesByName = {};
			for (var i = 0; i < this.modules.length; i++) {
				var m = this.modules[i];
				this.modulesByName[m.name] = m;
			}


			this.options.languageName = options.languageName || 'anonymousLanguage';

			this.options.smdUrl = options.smdUrl || 'WiringEditor.smd';

			this.options.propertiesFields = options.propertiesFields;

			this.options.layoutOptions = options.layoutOptions || {
				units: [
					{ position: 'top', height: 50, body: 'top'},
					{ position: 'left', width: 200, resize: true, body: 'left', gutter: '5px', collapse: true,
						collapseSize: 25, header: 'Modules', scroll: true, animate: true },
					{ position: 'center', body: 'center', gutter: '5px' },
					{ position: 'right', width: 320, resize: true, body: 'right', gutter: '5px', collapse: true,
						collapseSize: 25, header: 'Properties', scroll: true, animate: true }
				]
			};

			this.options.layerOptions = {};
			var layerOptions = options.layerOptions || {};
			this.options.layerOptions.parentEl = layerOptions.parentEl ? layerOptions.parentEl : Dom.get('modelingLayer');

			this.dataToSubmit = {name: '', working: '', language: this.options.languageName };

			// IS: Disable layer map:
			// this.options.layerOptions.layerMap = YAHOO.lang.isUndefined(layerOptions.layerMap) ? true : layerOptions.layerMap;
			// this.options.layerOptions.layerMapOptions = layerOptions.layerMapOptions || { parentEl: 'layerMap' };
		},

		/**
		 * Render the properties form
		 * @method renderPropertiesForm
		 */
		renderPropertiesForm: function() {
			this.propertiesForm = new inputEx.Group({
				parentEl: YAHOO.util.Dom.get('propertiesForm'),
				fields: this.options.propertiesFields
			});
		},

		/**
		 * Build the left menu on the left
		 * @method buildModulesList
		 */
		buildModulesList: function() {

			var left = Dom.get('moduleBar');

			var modules = this.modules;
			for (var i = 0; i < modules.length; i++) {
				var module = modules[i];
				var div = WireIt.cn('div', {className: "WiringEditor-module"});
				if (module.container.icon) {
					div.appendChild(WireIt.cn('img', {src: module.container.icon}));
				}
				div.appendChild(WireIt.cn('span', null, null, module.name));
				var ddProxy = new WireIt.ModuleProxy(div, this);
				ddProxy._module = module;
				left.appendChild(div);
			}

			// Make the layer a drag drop target
			if (!this.ddTarget) {
				this.ddTarget = new YAHOO.util.DDTarget(this.layer.el, "module");
				this.ddTarget._layer = this.layer;
			}

		},

		/**
		 * add a module at the given pos
		 */
		addModule: function(module, pos) {
			try {
				var containerConfig = module.container;
				containerConfig.position = pos;
				containerConfig.title = module.name;
				var container = this.layer.addContainer(containerConfig);
				Dom.addClass(container.el, "WiringEditor-module-" + module.name);
			}
			catch(ex) {
				//debug("Error Layer.addContainer", ex.message);
			}
		},

		/**
		 * Toolbar
		 * @method renderButtons
		 */
		renderButtons: function() {
			Event.addListener('WiringEditor-newButton-button', 'click', this.onNew, this, true);
			Event.addListener('WiringEditor-loadButton-button', 'click', this.onLoad, this, true);
			Event.addListener('WiringEditor-saveButton-button', 'click', this.onSave, this, true);
		},


		/**
		 * WiringEditor uses a SMD to connect to the backend
		 * @method loadSMD
		 */
			loadSMD: function() {
			this.service = new YAHOO.rpc.Service(this.options.smdUrl, {
				success: this.onSMDsuccess,
				failure: this.onSMDfailure,
				scope: this
			});

		},

		/**
		 * callback for loadSMD request
		 * @method onSMDsuccess
		 */
		onSMDsuccess: function() {
			//console.log("onSMDsuccess",this.service);
		},

		/**
		 * callback for loadSMD request
		 * @method onSMDfailure
		 */
		onSMDfailure: function() {
			//console.log("onSMDfailure", this.service);
		},

		loginCheck: function(o) {
			eval('var result = ' + o.responseText + ';');
			if (result.login.timed_out || result.login.will_time_out) {
				if (typeof parent.TYPO3.loginRefresh != 'undefined') {
					parent.TYPO3.loginRefresh.showLoginPopup();
				}
				else {
					o.argument.editor.alert('Login expired', 'Your login is expired. Please refresh your login in a separate browser window and save again');
				}
			} else {
				o.argument.editor.saveModule(true);
			}

		},
		/**
		 * save the current module
		 * @method saveModule
		 */
		saveModule: function(login) {

            if (typeof login == 'undefined') {
				var baseUrl;
				if (typeof parent.TYPO3.configuration != 'undefined') {
					baseUrl = parent.TYPO3.configuration.PATH_typo3;
				}
				else {
					baseUrl = window.location.href.split('index.php')[0];
				}

				Connect.asyncRequest(
						'POST',
						TYPO3.settings.ajaxUrls['login_timedout']
						? TYPO3.settings.ajaxUrls['login_timedout'] // TYPO3 CMS >7.5.0
						: TYPO3.settings.ajaxUrls['BackendLogin::isTimedOut'],
						{
							'success':this.loginCheck
							,argument: {'editor':this}
						},
						'skipSessionUpdate=1'
				);
				return;
			}

			var value = this.getValue();

			if (!this.propertiesForm.validate()) {
				this.alert(
					this.localize('modeler_invalidExtensionPropertiesTitle'),
					this.localize('modeler_invalidExtensionProperties')
				);
				return;
			}

			if (!this.validateModels(value)) {
				return false;
			}

			this.showSpinnerPanel.show();
			this.dataToSubmit.name = value.name;
			this.dataToSubmit.working = JSON.stringify(value.working);
			this.service.saveWiring(this.dataToSubmit, {
				success: this.saveModuleSuccess,
				failure: this.saveModuleFailure,
				scope: this
			});

		},


		validateModels: function(value) {
			var modelNames = {},
				propertyNames = {},
				modelName,
				propertyName,
				model,
				modelForm;
			if (value.working.modules) {
				for (var modelIndex = 0; modelIndex < value.working.modules.length; modelIndex++) {
					model = value.working.modules[modelIndex].value;
					modelName = model.name;
					if (!modelName || modelName.length < 2) {
						this.alert(this.localize('modeler_invalidConfigurationTitle'), this.localize('modeler_missingModelName'));
						return false;
					}
					if (modelNames[modelName] !== undefined) {
						this.alert(this.localize('modeler_duplicateModelNamesTitle'),'2 x "' + modelName + '"');
						return false;
					}
					modelNames[modelName] = 1;
					modelForm = this.layer.containers[modelIndex].form;
					if(!modelForm.validate()) {
						this.alert(this.localize('modeler_invalidConfigurationTitle'), this.localize('modeler_invalidModelConfiguration') + modelName);
						return false;
					}
					propertyNames = {};
					for (var propertyIndex = 0; propertyIndex < model.propertyGroup.properties.length; propertyIndex++) {
						propertyName = model.propertyGroup.properties[propertyIndex].propertyName;
						if (propertyNames[propertyName] !== undefined) {
							this.alert(this.localize('modeler_duplicatePropertyNamesTitle'),'2 x "' + propertyName + '" in model "' + modelName + '"');
							return false;
						}
						propertyNames[propertyName] = 1;
					}
					for (var relationIndex = 0; relationIndex < model.relationGroup.relations.length; relationIndex++) {
						propertyName = model.relationGroup.relations[relationIndex].relationName;
						if (propertyNames[propertyName] !== undefined) {
							this.alert(this.localize('modeler_duplicatePropertyNamesTitle'),'2 x "' + propertyName + '" in model "' + modelName + '"');
							return false;
						}
						propertyNames[propertyName] = 1;
					}
				}
			}
			return true;
		},

		localize: function(key) {
			if (TYPO3.settings.extensionBuilder._LOCAL_LANG[key] !== undefined) {
				return TYPO3.settings.extensionBuilder._LOCAL_LANG[key];
			}
			return key;
		},

		/**
		 * saveModule success callback
		 * @method saveModuleSuccess
		 */
		saveModuleSuccess: function(o) {
			this.showSpinnerPanel.hide();
			if (typeof o.confirm != 'undefined') {
				title = 'Please confirm';
				message = o.confirm;
				this.confirm(title, message, o.confirmFieldName);
				return;
			}

			if (typeof o.confirmUpdate != 'undefined') {
				title = 'Success';
				message = o.success;
				this.confirmUpdates(title, message);
				return;
			}

			if (typeof o.success != 'undefined') {
				title = 'Success';
				message = o.success;
			}
			else if (typeof o.error != 'undefined') {
				title = '<span style="color:red">Error!</span>';
				message = this.localize('modeler_extensionSaveError') + "\n " + o.error;
			}
			else if (typeof o.warning != 'undefined') {
				title = 'Warning';
				message = o.warning;
			}

			this.alert(title, message);


		},

		alert: function(title, message) {
			this.alertPanel.setHeader(title);
			Dom.get('wireEditorMessageBox').innerHTML = message;
			this.alertPanel.show();
			Event.addListener('alertPanelButton', 'click', function() {
				this.alertPanel.hide();
			}, this, true);
		},

		confirm: function(title, message, confirmFieldName) {
			this.confirmPanel.setHeader(title);
			Dom.get('wireEditorConfirmMessageBox').innerHTML = message;
			this.confirmPanel.show();
			Event.addListener(
					'confirmPanelButton',
					'click',
					function() {
						this.dataToSubmit[confirmFieldName] = 1;
						this.confirmPanel.hide();
						this.onSave();
					}, this, true);
			Event.addListener('confirmPanelCancelButton', 'click', function() {
				this.confirmPanel.hide();
			}, this, true);
		},

		updateEventListenerAdded: false,

		confirmUpdates: function(title, message) {
			this.confirmPanel.setHeader(title);
			Dom.get('wireEditorConfirmUpdatesMessageBox').innerHTML = message;
			this.confirmUpdatesPanel.show();
			if (!this.updateEventListenerAdded) {
				Event.addListener(
						'confirmUpdatePanelButton',
						'click',
						function() {
							this.confirmUpdatesPanel.hide();
							this.performDbUpdates();
						}, this, true);
				Event.addListener('confirmUpdatePanelCancelButton', 'click', function() {
					this.confirmUpdatesPanel.hide();
				}, this, true);
				this.updateEventListenerAdded = true;
			}

		},

		performDbUpdates: function() {
			var extensionProperties = this.propertiesForm.getValue();
			var updateStatements = [];
			Dom.getElementsBy(
				function(el){
					if (el.checked) {
						updateStatements.push(el.value);
					}
				},
				'input',
				'confirmUpdatesPanel'
			);

			this.dataToSubmit.updateStatements = updateStatements;
			this.dataToSubmit.extensionKey = extensionProperties.extensionKey;
			this.dataToSubmit.vendorName = extensionProperties.vendorName;
			this.showSpinnerPanel.show();
			this.service.updateDb(this.dataToSubmit, {
				success: this.saveModuleSuccess,
				failure: this.saveModuleFailure,
				scope: this
			});
			this.updatePerformed  = true;
		},

		/**
		 * saveModule failure callback
		 * @method saveModuleFailure
		 */
		saveModuleFailure: function(o, t) {
			this.showSpinnerPanel.hide();
			this.alert('Error', "Error while saving: " + o.error);
		},


		/**
		 * Create a help panel
		 * @method onHelp
		 */
		onHelp: function() {
			this.helpPanel.show();
		},

		/**
		 * @method onNew
		 */
		onNew: function() {
			if(this.layer.containers.length > 0) {
                if (!confirm(this.localize('modeler_loadPipeConfirmMessage'))) {
                    return false;
                }
            }
			this.layer.clear();
			this.propertiesForm.destroy();
			this.renderPropertiesForm();
			this.layout.getUnitById('left').expand();
		},

		/**
		 * @method onDelete
		 */
		onDelete: function() {
			if (confirm("Are you sure you want to delete this wiring ?")) {

				var value = this.getValue();
				this.service.deleteWiring({name: value.name, language: this.options.languageName}, {
					success: function(result) {
						alert("Deleted !");
					}
				});

			}
		},

		/**
		 * @method onSave
		 */
		onSave: function() {
			this.saveModule();
		},

		/**
		 * @method renderLoadPanel
		 */
		renderLoadPanel: function() {
			if (!this.loadPanel) {
				this.loadPanel = new widget.Panel('WiringEditor-loadPanel', {
					fixedcenter: true,
					draggable: true,
					width: '500px',
					visible: false,
					modal: true
				});
				this.loadPanel.setHeader("Select module");
				this.loadPanel.setBody("<div id='loadPanelBody'></div>");
				this.loadPanel.render(document.body);
			}
		},

		/**
		 * @method updateLoadPanelList
		 */
		updateLoadPanelList: function() {
			var list = WireIt.cn("ul");
			if (lang.isArray(this.pipes)) {
				for (var i = 0; i < this.pipes.length; i++) {
					var module = this.pipes[i];

					this.pipesByName[module.name] = module;

					var li = WireIt.cn('li', null, {cursor: 'pointer'}, module.name);
					Event.addListener(li, 'click', function(e, args) {
						try {
							this.loadPipe(Event.getTarget(e).innerHTML);
						}
						catch(ex) {
							console.log(ex);
						}
					}, this, true);
					list.appendChild(li);
				}
			}
			var panelBody = Dom.get('loadPanelBody');
			panelBody.innerHTML = "";
			panelBody.appendChild(list);
		},

		/**
		 * @method onLoad
		 */
		onLoad: function() {

			this.service.listWirings({language: this.options.languageName}, {
				 success: function(result) {
					 this.pipes = result.result;
					 this.pipesByName = {};
					 this.renderLoadPanel();
					 this.updateLoadPanelList();
					 this.loadPanel.show();
					 this.layout.getUnitById('left').collapse();
				 },
				 scope: this
			 }
			);

		},

		onPipeLoaded: function() {
			roundtrip.onModuleLoaded();
		},

		/**
		 * @method getPipeByName
		 * @param {String} name Pipe's name
		 * @return {Object} return the evaled json pipe configuration
		 */
		getPipeByName: function(name) {
			var n = this.pipes.length,ret;
			for (var i = 0; i < n; i++) {
				if (this.pipes[i].name == name) {
					// Try to eval working property:
					try {
						ret = JSON.parse(this.pipes[i].working);
						return ret;
					}
					catch(ex) {
						console.log("Unable to eval working json for module " + name);
						return null;
					}
				}
			}

			return null;
		},

		/**
		 * @method loadPipe
		 * @param {String} name Pipe name
		 */
		loadPipe: function(name) {
			var pipe = this.getPipeByName(name), i;
			// TODO: check if current pipe is saved...
            if(this.layer.containers.length > 0) {
                if (!confirm(this.localize('modeler_loadPipeConfirmMessage'))){
                    return false;
                }
            }

			this.layer.clear();

			this.propertiesForm.setValue(pipe.properties);

			if (lang.isArray(pipe.modules)) {

				// Containers
				for (i = 0; i < pipe.modules.length; i++) {
					var m = pipe.modules[i];
					if (this.modulesByName[m.name]) {
						var baseContainerConfig = this.modulesByName[m.name].container;
						YAHOO.lang.augmentObject(m.config, baseContainerConfig);
						m.config.title = m.name;
						var container = this.layer.addContainer(m.config);
						Dom.addClass(container.el, "WiringEditor-module-" + m.name);
						container.setValue(m.value);
					}
					else {
						throw new Error("WiringEditor: module '" + m.name + "' not found !");
					}
				}

				// Wires
				if (lang.isArray(pipe.wires)) {
					for (i = 0; i < pipe.wires.length; i++) {
						// On doit chercher dans la liste des terminaux de chacun des modules l'index des terminaux...
						this.layer.addWire(pipe.wires[i]);
					}
				}
			}

			this.loadPanel.hide();
			this.onPipeLoaded();
		},


		/**
		 * This method return a wiring within the given vocabulary described by the modules list
		 * @method getValue
		 */
		getValue: function() {

			var i;
			var obj = {modules: [], wires: [], properties: null};

			for (i = 0; i < this.layer.containers.length; i++) {
				obj.modules.push({name: this.layer.containers[i].options.title, value: this.layer.containers[i].getValue(), config: this.layer.containers[i].getConfig()});
			}

			for (i = 0; i < this.layer.wires.length; i++) {
				var wire = this.layer.wires[i];

				if (wire.terminal2.el.getAttribute('title') != 'SOURCES') {
					// this happens if the wire was drawn from child to parent
					var tmpTerminal = wire.terminal1;
					wire.terminal1 = wire.terminal2;
					wire.terminal2 = tmpTerminal;
				}

				var wireObj = {
					src: {moduleId: WireIt.indexOf(wire.terminal1.container, this.layer.containers), terminal: wire.terminal1.options.name, uid:this.getUidForTerminal(wire.terminal1)},
					tgt: {moduleId: WireIt.indexOf(wire.terminal2.container, this.layer.containers), terminal: wire.terminal2.options.name, uid:this.getUidForTerminal(wire.terminal2)}
				};
				obj.wires.push(wireObj);
			}

			obj.properties = this.propertiesForm.getValue();

			return {
				name: obj.properties.name,
				working: obj
			};
		},

		// add uids to terminals to identify the connection from relations
		// to other models
		getUidForTerminal	:	function(terminal) {
			var parentId,
				terminalUid;
			if (terminal.el.getAttribute('title') == 'SOURCES') {
				// id of the module
				terminalUid = $(terminal.el).parents('.WireIt-Container').first().find('input[name="uid"]').val();
			}
			else {
				// id of the wrapper of the first field in the fieldset
				terminalUid = $(terminal.el).parents('.relationGroup').find('input[name="uid"]').val();
			}
			return terminalUid;
		}

	};

})();
var extbaseModeling_wiringEditorLanguage = {
	parentEl: 'domainModelEditor',
	languageName: "extbaseModeling",
	smdUrl: TYPO3.settings.ajaxUrls['ExtensionBuilder::wiringEditorSmdEndpoint'],
	layerOptions: {
	},
	modules: []
};


(function(){
	var inputEx = YAHOO.inputEx, Event = YAHOO.util.Event, lang = YAHOO.lang, dom = YAHOO.util.Dom;
		function addFieldsetClass (selectElement) {
			if ($(selectElement).parent().hasClass('isDependant')) {
				return;
			}
			var fieldset = $(selectElement).parents('fieldset').first();
			if (selectElement.name == 'relationType') {
				// relations
				fieldset = $(fieldset).parents('fieldset').first();
				var renderTypeSelect = fieldset.find("select[name='renderType']").first();
				updateRenderTypeOptions(selectElement.value, renderTypeSelect);
			}
			fieldset.attr('class', '');
			fieldset.addClass(selectElement.value);
		}


		function updateRenderTypeOptions (selectedRelationType, renderTypeSelect) {
			renderTypeSelect.find("option").hide();
			var optionValueMap = {
				'zeroToOne': ["selectSingle", "inline"],
				'manyToOne': ["selectSingle"],
				'zeroToMany': ["inline"],
				'manyToMany': ["selectMultipleSideBySide", "selectSingleBox", "selectCheckBox"]
			};
			var validOptions = optionValueMap[selectedRelationType];

			$.each(validOptions, function(i, e) {
				renderTypeSelect.find("option[value='" + e + "']").show();
			});
			if (validOptions.indexOf(renderTypeSelect.val()) < 0) {
				renderTypeSelect.val(validOptions[0]);
			}

		}

		inputEx.SelectField.prototype.onChange = function (evt) {
			addFieldsetClass(evt.target);
		};

		/**
		 * add the selected propertyType as classname to all propertyGroup fieldsets
		 */
		WireIt.WiringEditor.prototype.onPipeLoaded = function () {
			var propertyTypeSelects = $('.propertyGroup select');
			if (propertyTypeSelects) {
				propertyTypeSelects.each(function (index, el) {
					addFieldsetClass(el);
				});
			}
			var relationTypeSelects = $('.relationGroup select');
			if (relationTypeSelects) {
				relationTypeSelects.each(function (index, el) {
					addFieldsetClass(el);
				});
			}
		};
})();



YAHOO.util.Event.onAvailable('extensionDependencies-field', function () {
	/**
	 * Update dependencies in textarea
	 */
	$('#targetVersionSelector-field').onchange =
	function (event) {
		var updatedDependencies = '';
		var dependenciesField = $('extensionDependencies-field');
		var dependencies = dependenciesField.value.split("\n");
		for (i = 0; i < dependencies.length; i++) {
			parts = dependencies[i].split('=>');
			if (parts[0].indexOf('typo3') > -1) {
				updatedDependencies += 'typo3 => ' + event.target.value + "\n";
			} else {
				updatedDependencies += dependencies[i] + "\n";
			}

		}
		dependenciesField.value = updatedDependencies;
	};
});

YAHOO.util.Event.onAvailable('toggleAdvancedOptions', function () {

	$('body').addClass('yui-skin-sam');
	$('.t3js-module-docheader-bar-buttons').show();
	if (window.top.location.href === window.location.href) {
		$("#opennewwindow").hide();
	}
	var advancedMode = false;
	$('#toggleAdvancedOptions').click(
	function () {
		if (!advancedMode) {
			$('#domainModelEditor').addClass('showAdvancedOptions');
			$('#toggleAdvancedOptions .simpleMode').hide();
			$('#toggleAdvancedOptions .advancedMode').show();
			advancedMode = true;
		} else {
			$('#domainModelEditor').removeClass('showAdvancedOptions');
			$('#toggleAdvancedOptions .simpleMode').show();
			$('#toggleAdvancedOptions .advancedMode').hide();
			advancedMode = false;
		}
		return false;
	});
});
// Configuration of the whole layout. See documentation of YUI's widget.Layout()
extbaseModeling_wiringEditorLanguage.layoutOptions =
{
	units: [
		{
			position: 'left',
			width: 280,
			resize: true,
			body: 'left',
			gutter: '5px',
			collapse: true,
			collapseSize: 20,
			header: TYPO3.settings.extensionBuilder._LOCAL_LANG.extensionProperties,
			scroll: true,
			animate: false
		},
		{
			position: 'center',
			body: 'center',
			gutter: '5px',
			scroll: false
		},
		{
			position: 'bottom',
			height: 27,
			body: 'bottom'
		}
	]
};
extbaseModeling_wiringEditorLanguage.propertiesFields =
[
	{
		type: "string",
		inputParams: {
			name: "name",
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.name,
			typeInvite: TYPO3.settings.extensionBuilder._LOCAL_LANG.extensionTitle,
			required: true
		}
	},
	{
		type: "string",
		inputParams: {
			name: "vendorName",
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.vendorName,
			placeholder: TYPO3.settings.extensionBuilder._LOCAL_LANG.vendorName,
			helpLink: 'https://docs.typo3.org/typo3cms/CoreApiReference/ApiOverview/Namespaces/#usage-in-extensions',
			ucFirst: true,
            regexp: /^[A-Za-z]/,
            minLength: 2,
			forceAlphaNumeric: true,
			cols: 30,
			description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_vendorName,
			required: true
		}
	},
	{
		type: "string",
		inputParams: {
			name: "extensionKey",
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.key,
			helpLink: 'https://docs.typo3.org/typo3cms/CoreApiReference/ExtensionArchitecture/ExtensionKey/',
			typeInvite: TYPO3.settings.extensionBuilder._LOCAL_LANG.extensionKey,
			helpLink: 'https://docs.typo3.org/typo3cms/CoreApiReference/ExtensionArchitecture/ExtensionKey/',
			forceLowerCase: true,
			forceAlphaNumericUnderscore: true,
            minLength: 3,
            maxLength: 30,
			cols: 30,
			description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_extensionKey,
			required: true
		}
	},
	{
		inputParams: {
			name: "originalExtensionKey",
			className:'hiddenField'
		}
	},
    {
        inputParams: {
            name: "originalVendorName",
            className:'hiddenField'
        }
    },
	{
		type: "text",
		inputParams: {
			name: "description",
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.short_description,
			typeInvite: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
			cols: 30
		}
	},
	{
		type: 'group',
		inputParams: {
			collapsible: true,
			collapsed: true,
			className: 'emConf mainGroup',
			legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.moreOptions,
			name: "emConf",
			fields: [
					{
						type: "select",
						inputParams: {
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.category,
							name: "category",
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_category,
							selectValues: [ "plugin", "module", "misc", "be", "fe", "services", "templates", "distribution", "example", "doc"],
							selectOptions: [
								TYPO3.settings.extensionBuilder._LOCAL_LANG.plugins,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.backendModules,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.misc,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.backend,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.frontend,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.services,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.templates,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.distribution,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.examples,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.documentation
							]
						}
					},
					{
						type: "string",
						inputParams: {
							name: "custom_category",
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.custom_category,
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_custom_category,
							cols: 30
						}
					},
					{
						type: "string",
						inputParams: {
							name: "version",
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.version,
							required: false,
							size: 5,
							value: '1.0.0'
						}
					},
					{
						type: "select",
						inputParams: {
							name: "state",
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.state,
							selectOptions: [
								TYPO3.settings.extensionBuilder._LOCAL_LANG.alpha,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.beta,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.stable,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.experimental,
								TYPO3.settings.extensionBuilder._LOCAL_LANG.test
							],
							selectValues: ["alpha","beta","stable","experimental","test"]
						}
					},
					{
						type: "boolean",
						inputParams: {
							name: "disableVersioning",
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.disableVersioning,
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_disableVersioning,
							value: 0
						}
					},
					{
						type: "boolean",
						inputParams: {
							name: "disableLocalization",
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.disableLocalization,
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_disableLocalization,
							value: 0
						}
					},
					{
						type: "boolean",
						inputParams: {
							name: "skipGenerateDocumentationTemplate",
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.skipGenerateDocumentationTemplate,
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_skipGenerateDocumentationTemplate,
							value: 1
						}
					},
					{
						type: "string",
						inputParams: {
							name: "sourceLanguage",
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_sourceLanguage,
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.sourceLanguage,
							value: 'en',
							cols: 30
						}
					},
					{
						type: "select",
						inputParams: {
							name: "targetVersion",
							id: 'targetVersionSelector',
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.target_version,
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_target_version,
							selectOptions: [
								'TYPO3 v 9.5'
							],
                            selectValues: ["9.5.0-9.5.99"],
							value: '9.5.0-9.5.99'
                        }
                    },
					{
						type: "text",
						inputParams: {
							label: TYPO3.settings.extensionBuilder._LOCAL_LANG.dependsOn,
							name: "dependsOn",
							id: 'extensionDependencies',
							description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_dependsOn,
							cols:20,
							rows:6,
							value : "typo3 => 9.5.0-9.5.99\n"
						}
					}
			]
		}
	},
	{
		type: "list",
		inputParams: {
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.persons,
			name: "persons",
			sortable: true,
			className: 'persons mainGroup',
			elementType: {
				type: "group",
				inputParams: {
					name: "property",
					fields: [
						{
							inputParams: {
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.name,
								name: "name",
								required: true
							}
						},
						{
							type: "select",
							inputParams: {
								name: "role",
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.role,
								selectOptions: [
									TYPO3.settings.extensionBuilder._LOCAL_LANG.developer,
									TYPO3.settings.extensionBuilder._LOCAL_LANG.product_manager
								],
								selectValues: ["Developer", "Product Manager"]
							}
						},
						{
							inputParams: {
								name: "email",
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.email,
								required: false
							}
						},
						{
							inputParams: {
								name: "company",
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.company,
								required: false
							}
						}
					]
				}
			}
		}
	},
	{
		type: "list",
		inputParams: {
			name: "plugins",
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.plugins,
			sortable: true,
			className: 'plugins mainGroup',
			elementType: {
				type: "group",
				inputParams: {
					name: "property",
					fields: [
						{
							inputParams: {
								name: "name",
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.name,
								required: true
							}
						},
						{
							inputParams: {
								name: "key",
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.key,
								required: true,
								forceLowerCase: true,
								forceAlphaNumeric: true,
								noSpaces: true,
								description: TYPO3.settings.extensionBuilder._LOCAL_LANG.uniqueInThisModel
							}
						},
						{
							type: 'text',
							inputParams: {
								name: "description",
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
								required: false,
								cols:20,
								rows:6
							}
						},
						{
							type: 'group',
							inputParams: {
								collapsible: true,
								collapsed: true,
								legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.advancedOptions,
								name: "actions",
								className:"wideTextfields",
								fields: [
									{
										type: "text",
										inputParams: {
											name: "controllerActionCombinations",
											label: TYPO3.settings.extensionBuilder._LOCAL_LANG.controller_action_combinations,
											description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_controller_action_combinations,
											placeholder: 'ControllerName => action1,action2',
											cols: 38,
											rows: 3
										}
									},
									{
										type: "text",
										inputParams: {
											name: "noncacheableActions",
											label: TYPO3.settings.extensionBuilder._LOCAL_LANG.noncacheable_actions,
											placeholder: 'ControllerName => action1,action2',
											description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_noncacheable_actions,
											cols: 38,
											rows: 3
										}
									},
									{
										type: "text",
										inputParams: {
											name: "switchableActions",
											label: TYPO3.settings.extensionBuilder._LOCAL_LANG.switchableActions,
											description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_switchableActions,
											cols: 38,
											rows: 3
										}
									}
								]
							}
						}
					]
				}
			}
		}
	},
	{
		type: "list",
		inputParams: {
			label: TYPO3.settings.extensionBuilder._LOCAL_LANG.backendModules,
			name: "backendModules",
			className: 'bottomBorder mainGroup',
			sortable: true,
			elementType: {
				type: "group",
				className: 'smallBottomBorder',
				inputParams: {
					name: "properties",
					fields: [
						{
							inputParams: {
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.name,
								name: "name",
								required: true
							}
						},
						{
							inputParams: {
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.key,
								name: "key",
								required: true,
								forceLowerCase: true,
								forceAlphaNumeric: true,
								noSpaces: true,
								description: TYPO3.settings.extensionBuilder._LOCAL_LANG.uniqueInThisModel
							}
						},
						{
							inputParams: {
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.short_description,
								name: "description"
							}
						},
						{
							inputParams: {
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.tab_label,
								name: "tabLabel"
							}
						},
						{
							type: 'select',
							inputParams: {
								label: TYPO3.settings.extensionBuilder._LOCAL_LANG.mainModule,
								name: "mainModule",
								required: true,
								selectValues: ["web", "user","tools","help"]
							}
						},
						{
							type: 'group',
							inputParams: {
								collapsible: true,
								collapsed: true,
								legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.advancedOptions,
								name: "actions",
								className:"wideTextfields",
								fields: [
									{
										type: "text",
										inputParams: {
											name: "controllerActionCombinations",
											label: TYPO3.settings.extensionBuilder._LOCAL_LANG.controller_action_combinations,
											description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_controller_action_combinations,
											cols: 38,
											rows: 3
										}
									}
								]
							}
						}
					]
				}
			}
		}
	}

];

extbaseModeling_wiringEditorLanguage.modules.push(

	{
		name: "New Model Object",
		container: {	// Configuration according to WireIt.Container.options
			xtype: "WireIt.FormContainer",
			title: "Title",	// this will be overriden in WiteIt.WiringEditor.addModule() with the module name, so it could also be left empty here
			preventSelfWiring: false,
			fields: [
				{
					type: "inplaceedit",
					inputParams: {
						name: "name",
						className: "inputEx-Field extbase-modelTitleEditor",
						editorField:{
							type: "string",
							inputParams: {
								required	: true,
								firstCharNonNumeric: true
							}
						},
						animColors: {from: "#cccccc" , to: "#cccccc"}
					}
				},
				{
					type: "group",
					inputParams: {
						collapsible: true,
						collapsed: true,
						legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.domainObjectSettings,
						className:'objectSettings',
						name: "objectsettings",
						fields: [
							{
								inputParams: {
									name: "uid",
									className:'hiddenField'
								}
							},
							{
								type: "select",
								inputParams: {
									name: "type",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.objectType,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_objectType,
									selectValues: ["Entity", "ValueObject"],
									selectOptions: [
										TYPO3.settings.extensionBuilder._LOCAL_LANG.entity,
										TYPO3.settings.extensionBuilder._LOCAL_LANG.valueObject
									]
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "aggregateRoot",
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.isAggregateRoot,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_isAggregateRoot,
									value: false
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "sorting",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.enableSorting,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_enableSorting,
									value: false
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "addDeletedField",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.addDeletedField,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_addDeletedField,
									value: true
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "addHiddenField",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.addHiddenField,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_addHiddenField,
									value: true
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "addStarttimeEndtimeFields",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.addStarttimeEndtimeFields,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_addStarttimeEndtimeFields,
									value: true
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "categorizable",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.enableCategorizable,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_enableCategorizable,
									value: false
								}
							},
							{
								type: "text",
								inputParams: {
									name: "description",
									className: 'bottomBorder',
									placeholder: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
									required: false,
									cols:20,
									rows:2
								}
							},
							{
								type: "string",
								inputParams: {
									name: "mapToTable",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.mapToTable,
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_mapToTable,
									required: false
								}
							},
							{
								type: "string",
								inputParams: {
									name: "parentClass",
									advancedMode: true,
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.parentClass,
									placeholder: '\\Fully\\Qualified\\Classname',
									description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_parentClass,
									required: false
								}
							}
						]
					}
				},
				{
					type: "group",
					inputParams: {
						collapsible: true,
						collapsed: true,
						legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.defaultActions,
						name: "actionGroup",
						className: 'actionGroup',
						fields: [
							{
								type: "boolean",
								inputParams: {
									name: "_default0_list",
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.list,
									value: false
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "_default1_show",
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.show,
									value: false
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "_default2_new_create",
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.create_new,
									value: false
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "_default3_edit_update",
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.edit_update,
									value: false
								}
							},
							{
								type: "boolean",
								inputParams: {
									name: "_default4_delete",
									label: TYPO3.settings.extensionBuilder._LOCAL_LANG.delete,
									value: false
								}
							},
							{
								type: "list",
								inputParams: {
									label: "Custom actions",
									name: "customActions",
									sortable: false,
									elementType: {
										type: "input",
										inputParams: {
											name: "customAction",
											label: TYPO3.settings.extensionBuilder._LOCAL_LANG.customAction,
											forceAlphaNumeric: true,
											firstCharNonNumeric: true,
											lcFirst: true
										}
									}
								}
							}
						]
					}
				},
				{
					type: "group",
					inputParams: {
						collapsible: true,
						collapsed: true,
						className:'properties',
						legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.properties,
						name: "propertyGroup",
						fields: [
							{
								type: "list",
								inputParams: {
									label: "",
									name: "properties",
									wirable: false,
									sortable: true,
									elementType: {
										type: "group",
										inputParams: {
											name: "property",
											className: "propertyGroup",
											fields: [
												{
													type: "hidden",
														inputParams: {
														name: "uid",
														className:'hiddenField'
													}
												},
												{
													type: 'string',
													inputParams: {
														name: "propertyName",
														forceAlphaNumeric: true,
														lcFirst: true,
														firstCharNonNumeric: true,
														placeholder : TYPO3.settings.extensionBuilder._LOCAL_LANG.propertyName,
														description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_propertyName,
														required: true
													}
												},
												{
													type: "select",
													inputParams: {
														name: "propertyType",
														//label: TYPO3.settings.extensionBuilder._LOCAL_LANG.propertyType,
                                                        description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_propertyType,
                                                        selectValues: [
															"String",
															"Text",
															"RichText",
															"Password",
															"Email",
															"Integer",
															"Float",
															"Boolean",
															"NativeDate",
															"NativeDateTime",
															"Date",
															"DateTime",
															"Time",
															"TimeSec",
															"Select",
															"File",
															"Image"
														],
														selectOptions: [
															TYPO3.settings.extensionBuilder._LOCAL_LANG.string,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.text,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.richText,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.password,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.email,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.integer,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.floatingPoint,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.boolean,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.nativeDate,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.nativeDateTime,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.date,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.dateTime,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.time,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.timeSec,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.selectList,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.file,
															TYPO3.settings.extensionBuilder._LOCAL_LANG.image
														]
													}
												},
												{
													type:'text',
													inputParams: {
														advancedMode: true,
														name: "propertyDescription",
														placeholder: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
														cols:23,
														rows:2
													}
												},
												{
													type:'string',
													inputParams: {
														classname: 'textfieldWrapper dependant fileOnly',
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.allowedFileTypes,
														description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_allowedFileTypes,
														advancedMode: true,
														name: "allowedFileTypes"
													}
												},
												{
													type:'string',
													inputParams: {
														classname: 'textfieldWrapper dependant fileOnly imageOnly small',
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.maxItems,
														advancedMode: true,
														name: "maxItems",
														value: 1
													}
												},
												{
													type: "boolean",
													inputParams: {
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.isRequired,
														advancedMode: true,
														name: "propertyIsRequired",
														value: false
													}
												},
												{
													type: "boolean",
													inputParams: {
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.isExcludeField,
														advancedMode: true,
														name: "propertyIsExcludeField",
														description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_isExcludeField,
														value: true
													}
												},
												{
													type: "boolean",
													inputParams: {
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.isL10nModeExclude,
														advancedMode: true,
														name: "propertyIsL10nModeExclude",
														description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_isL10nModeExclude,
														value: false
													}
												}
											]
										}
									}
								}
							}
						]
					}
				},
				{
					type: "group",
					inputParams: {
						collapsible: false,
						collapsed: false,
						legend: TYPO3.settings.extensionBuilder._LOCAL_LANG.relations,
						name: "relationGroup",
						fields: [
							{
								type: "list",
								inputParams: {
									name: "relations",
									className: "relations",
									wirable: false,
									sortable: true,
									elementType: {
										type: "group",
										inputParams: {
											name: "relation",
											className: "relationGroup",
											fields: [
												{
													type: "hidden",
													inputParams: {
														name: "uid",
														className:'hiddenField'
													}
												},
												{
													type: "string",
													inputParams: {
														placeholder: TYPO3.settings.extensionBuilder._LOCAL_LANG.relationName,
														name: "relationName",
														forceAlphaNumeric: true,
														firstCharNonNumeric: true,
														lcFirst: true,
														description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_relationName,
														required: true
													}
												},
												{
													type: "boolean",
													inputParams: {
														name: "propertyIsExcludeField",
														advancedMode: true,
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.isExcludeField,
														description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_isExcludeField,
														value: true
													}
												},
												{
													type: "text",
													inputParams: {
														name: "relationDescription",
														label: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
														placeholder: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
														required: false,
														cols:20,
														rows:3
													}
												},
												{
													type: "string",
													inputParams: {
														label: "",
														name: "relationWire",
														required: false,
														wirable: true,
														className: 'terminalFieldWrap',
														ddConfig: {
															type: "input",
															allowedTypes: ["output", "input"]
														}
													}
												}
											]
										}
									}
								}
							}
						]
					}
				}
			],
			terminals: [
				{
					name: "SOURCES",
					direction: [0,-1],
					offsetPosition: {
						left: 5,
						top: -2
					},
					ddConfig: {
						type: "output",
						allowedTypes: ["input"]
					}
				}
			]
		}
	}

);

var advancedFields = {
		type: "group",
		inputParams: {
			collapsible: true,
			flatten:true,
			collapsed: true,
			className:"advancedSettings",
			name: "advancedSettings",
			fields: [
				{
					type: "select",
					inputParams: {
						label: TYPO3.settings.extensionBuilder._LOCAL_LANG.type,
						name: "relationType",
						selectValues: ["zeroToOne", "zeroToMany", "manyToOne", "manyToMany"],
						selectOptions: [
							TYPO3.settings.extensionBuilder._LOCAL_LANG.zeroToOne,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.zeroToMany,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.manyToOne,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.manyToMany
						]
					}
				},
				{
					type: "select",
					inputParams: {
						label: TYPO3.settings.extensionBuilder._LOCAL_LANG.renderType,
						description: TYPO3.settings.extensionBuilder._LOCAL_LANG.desc_renderType,
						wrapperClassName: 'inputEx-fieldWrapper dependant renderType',
						className: 'inputEx-Field isDependant',
						name: "renderType",
						//advancedMode: true,
						selectValues: ["selectSingleBox", "selectCheckBox","selectMultipleSideBySide", "inline", "selectSingle"],
						selectOptions: [
							TYPO3.settings.extensionBuilder._LOCAL_LANG.selectSingleBox,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.selectCheckBox,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.selectMultipleSideBySide,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.inline,
							TYPO3.settings.extensionBuilder._LOCAL_LANG.select
						]
					}
				},
				{
					type: "text",
					inputParams: {
						placeholder: TYPO3.settings.extensionBuilder._LOCAL_LANG.description,
						name: "relationDescription",
						cols:20,
						rows:2
					}
				},
				{
					type: "boolean",
					inputParams: {
						label: TYPO3.settings.extensionBuilder._LOCAL_LANG.isExcludeField,
						name: "propertyIsExcludeField",
						advancedMode: true,
						value: true,
						description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_isExcludeField
					}
				},
				{
					type: 'boolean',
					inputParams: {
						label: TYPO3.settings.extensionBuilder._LOCAL_LANG.lazyLoading,
						name: 'lazyLoading',
						advancedMode: true,
						description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_lazyLoading,
						value: false
					}
				},
				{
					type: "string",
					inputParams: {
						label: TYPO3.settings.extensionBuilder._LOCAL_LANG.foreignRelationClass,
						name: "foreignRelationClass",
						placeholder: '\\Fully\\Qualified\\Classname',
						advancedMode: true,
						description: TYPO3.settings.extensionBuilder._LOCAL_LANG.descr_foreignRelationClass
					}
				}

			]
		}
	};

var relationFieldSet = extbaseModeling_wiringEditorLanguage.modules[0].container.fields[4].inputParams.fields[0].inputParams.elementType.inputParams.fields;
relationFieldSet[5] = advancedFields;
Array.prototype.remove = function(from, to){
  this.splice(from,
	!to ||
	1 + to - from + (!(to < 0 ^ from >= 0) && (to < 0 || -1) * this.length));
  return this.length;
};
// remove excludeField in first level form
relationFieldSet.remove(2);
// remove Description in first level form
relationFieldSet.remove(2);


/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 *
 * modified by bmack to wrap it as jQuery module for the backend, will be dropped for twbs 4.0
 * please do not reference outside of the TYPO3 Core (not in your own extensions)
 * as this is preliminary as long as twbs does not support AMD modules
 * this file will be deleted once twbs 4 is included
 */
// IIFE for faster access to jQuery and save $use

;(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// register bootstrap as requirejs module
		define("bootstrap", ["jquery"], function($) {
			factory($);
		});
	} else {
		factory(jQuery);
	}
})(function(jQuery) {
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
});
