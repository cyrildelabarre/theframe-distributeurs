(function(document) {

  var buttonsData = {
    fnac: {
      text: 'ACHETER',
      link: 'http://www.fnac.com/TV-Lifestyle/Par-technologie/nsh475226/w-4',
      color: 'white',
      border: '2px solid transparent',
      borderRadius: '4px',
      background: '#f5b027'
    },
    cobra: {
      link: 'http://www.cobra.fr/tv-lifestyle.html',
    },
    darty: {
      text: 'ACHETER',
      link: 'http://www.darty.com/nav/achat/hifi_video/televiseurs-led/grand_ecran_led/filtre__samsung_the_frame__368192.html',
    },
    boulanger: {
      text: 'ACHETER',
      link: 'https://www.boulanger.com/c/televiseur/_usage~tv20lifestyle',
      color: '#ff5c00',
      border: '2px solid #ff5c00',
      borderRadius: '4px',
      background: 'white'
    },
    ubaldi: {
      text: 'ACHETER',
      link: 'http://www.ubaldi.com/18/tv-lifestyle--pl2422.php',
      color: '#0A1129',
      border: '2px solid transparent',
      borderRadius: '4px',
      background: 'linear-gradient(to top,#ffd600,#ffe902,#ffd600)'
    }
  };

//if (document.location.href.indexOf('distributeur') === -1){ 
//  window.location.replace("http://www.samsung.com/fr/theframe/shop/");
//}

  var query = document.location.search;

  if (query) {

    var dist = query.split('=')[1];
    var buttonData = buttonsData[dist];

    if (buttonData) {

      var $topButton = document.querySelector('.buynow');
      var $topButtonA = $topButton.querySelector('a');
      var $topButtonCont = $topButtonA.querySelector('.cont');


      // var $section = document.querySelector('.scrollify.static');
      var $bottomButton = document.querySelector('button.fill--brown.distrib');
      var $bottomButtonA = $bottomButton.parentNode;
      var $bottomButtonCont = $bottomButtonA.querySelector('.cont');

      $topButton.style.borderRadius = buttonData.borderRadius;
      $bottomButton.style.borderRadius = buttonData.borderRadius;
      $topButtonA.setAttribute('href', buttonData.link);
      $bottomButtonA.setAttribute('href', buttonData.link);

      if (dist !== 'cobra') {
        $topButtonCont.innerHTML = buttonData.text;
        $topButtonCont.style.fontFamily = 'Arial,Helvetica,sans-serif';
        $topButtonCont.style.textTransform = 'capitalize';
        $topButton.style.background = buttonData.background;
        $topButtonCont.style.color = buttonData.color;
        $topButton.style.border = buttonData.border;

        $bottomButton.style.background = buttonData.background;
        $bottomButton.style.color = buttonData.color;
        $bottomButton.style.border = buttonData.border;
        $bottomButton.innerHTML = buttonData.text;

      } else {

        var cobraImg = 'images/partenaire/cobra_img.png';
        var $buttonHtmlTop = '<img src="' + cobraImg + '" style="" />';
        var $buttonHtmlBottom = '<img src="' + cobraImg + '" style="position: absolute; left: 50%; bottom: 2%; transform: translateX(-50%); z-index: 88;" />';

        $topButton.style.background = 'transparent';
        $topButton.style.boxShadow = 'none';
        $topButton.style.margin = '0';
        $topButton.style.width = 'auto';
        $topButtonA.style.display = 'block';
        $topButtonA.innerHTML = $buttonHtmlTop;
        $bottomButtonA.style.textAlign = 'center';
        $bottomButtonA.style.display = 'block';
        $bottomButtonA.innerHTML = $buttonHtmlBottom;

      }

      var context = document.querySelector('#content');
      var links = context.querySelectorAll('a[href^="./"]');

      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        link.setAttribute('href', href + '?distributeur=' + dist);
      }

      var $fillShadow = document.querySelectorAll('.buynow .fill--shadow, .fill--brown.distrib');
      for (var j = 0; j < $fillShadow.length; j++) {
        $fillShadow[j].className = '';
      }

    }

  }

})(document);







// init.js
;(function($) {
	var ___GALAXY_START_TIME = (new Date()).getTime();
	var ___IS_GALAXY = (location.href.indexOf('/global/galaxy/')>-1||window.IS_CAMPAIGN===true) ? true : false;
	(function() {
	var width = document.documentElement.offsetWidth,
		sizeMode = width > 1440 ? 4 : width > 1023 ? 3 : width > 767 ? 2 : 1,
		html5tags = ['article', 'aside', 'details', 'figcaption', 'figure', 'footer', 'header', 'hgroup', 'nav', 'section', 'summary'],
		i = 0, max = html5tags.length;
	for (i = 0; i < max; i++) document.createElement(html5tags[i]);
	document.documentElement.className += (' s'+ sizeMode +' s'+ (3 > sizeMode ? 12 : 34) + (360 > width ? ' s0' : '')) + (___IS_GALAXY?'':' dotcom');
	})();
})(window.jQuery);

// plugin.js
;(function($) {

/*!
 * src : common/js/src/vendor/jquery/jquery-1.11.3.min.smg.js
 */

/**
 * samsung.com jQuery v1.11.3 - $.noConflict();
 */
if (window.$ && 'function' === typeof window.$ && window.$().jquery !== '1.11.3') {
	window._isExist = true;
}


/**
* jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license
*/
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/**
 * samsung.com jQuery v1.11.3 - $.noConflict();
 */
if (window._isExist) {
	jQuery.noConflict();
	window._isExist = null;
}
/*

	/*!
	 * VERSION: 1.16.1
	 * DATE: 2015-03-13
	 * UPDATES AND DOCS AT: http://greensock.com
	 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
	 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * @author: Jack Doyle, jack@greensock.com
	 **/
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.16.1",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,f,c=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=c?(this._totalTime=c,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=f=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=f=!e||t||y===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&f!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var f,c,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),f=t.length-1,m=0;f>=m;m++){c={};for(d in n)c[d]=n[d];c.delay=g,m===f&&l&&(c.onComplete=y),v[m]=new r(t[m],e,c),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,f=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in f)for(l=f[_].target.parentNode;l;)l===t&&(n=n.concat(f[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var f=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){f(!0,t,e,i)},r.resumeAll=function(t,e,i){f(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],p=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,p=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=p,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.16.1",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&p.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&p.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&p.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,p=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=f(r.startAt)),p.to(t[u],e,f(r),u*n);return this.add(p,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,p,f,c;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,c=f.rawTime()>r._startTime;f._timeline;)c&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,c,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,p=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,m=this._timeScale,d=this._paused;if(t>=p)this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||u)),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u))),o&&(this._gc||(c===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||u)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.16.1",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,f=this._dirty?this.totalDuration():this._totalDuration,c=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=f)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",u=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=c,t=c+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===c&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(u=a=!0,_="onReverseComplete"):y>=0&&this._first&&(u=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=c||!e||t||this._rawPrevTime===t?t:r,0===t&&a)for(s=this._first;s&&0===s._startTime;)s._duration||(a=!1),s=s._next;t=0,this._initted||(u=!0)}else 0===c&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=c+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=c-this._time),this._time>c?(this._time=c,t=c+1e-4):0>this._time?this._time=t=0:t=this._time));if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*c,w>this._cycle?x=!x:this._totalTime+=c,this._time=m,this._rawPrevTime=0===c?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:c,this.render(m,e,0===c),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?c+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,f=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,p,f,c,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)f=t[b],_=f.a,u=f.d,p=t[b+1].d,o?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),c=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(c+((m-c)*(3*y/(y+T)+.5)/4||0))):(c=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(c+m)/2),c+=d,m+=d,f.c=g=c,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,p,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=n[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][s],0,0,t[h+1][s]),f},u=function(t,n,a,h,u,p){var f,c,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(c in t[0])x.push(c);if(t.length>1){for(T=t[t.length-1],y=!0,f=x.length;--f>-1;)if(c=x[f],Math.abs(b[c]-T[c])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,f=x.length;--f>-1;)c=x[f],r[c]=-1!==u.indexOf(","+c+","),w[c]=_(t,c,r[c],p);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!h){for(f=x.length;--f>-1;)if(r[c])for(m=w[x[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=x.length,d=a?4:1;--f>-1;)c=x[f],m=w[c],l(m,n,a,h,r[c]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},p=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,p,f,c,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(c=t[_][p])&&"="===c.charAt(1)?i[p]+Number(c.charAt(0)+c.substr(2)):Number(c),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=c=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,f,c=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=c*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],p=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):p(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;
	s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,f=this._func,c=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),f[n]?c[n](h):c[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],f[n]?c[n](h):c[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,p=e.values,f=p.length-1,c=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,p[l],a,o,h,f!==l),c[l]=u.end;for(_ in e)d[_]=e[_];return d.values=c,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.16.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,p,f,c,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,w=/opacity *= *([^)]*)/i,x=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,S=/([A-Z])/g,k=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,A=function(t,e){return e.toUpperCase()},O=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},E=document,N=function(t){return E.createElementNS?E.createElementNS("http://www.w3.org/1999/xhtml",t):E.createElement(t)},L=N("div"),X=N("img"),U=a._internals={_specialProps:h},Y=navigator.userAgent,j=function(){var t=Y.indexOf("Android"),e=N("a");return p=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),c=p&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),B=function(t){return w.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return j||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(S,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):B(t)},$=U.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=O.test(i),u=t,p=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=U.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||be===r)&&(n[r.replace(k,A)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||xe===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(k,A)]=e[i]);return j||(n.opacity=B(t)),s=Me(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Se&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new fe(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(c=t.replace(M,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(_e)||[n])[0],p=t.split(e).join("").match(v)||[],f=p.length,_>f--)for(;_>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(v)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},pe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},fe=(U._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),ce=(U._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},f={},c=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(l=new fe(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],p[o]=s[h],n||(l=new fe(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:f,firstMPT:l,pt:_}},U.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof ce||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),me=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new ce(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,p,f,c,m,v,y,T,w,x,b,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,O=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=l,u=0;A>u;u++)if(c=k[u],m=R[u],T=parseFloat(c),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),O&&-1!==m.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||oe[c]||P.test(c)))S=","===m.charAt(m.length-1)?"),":")",c=le(c),m=le(m),w=c.length+m.length>6,w&&!j&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(j||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],m[0]-c[0],",",!0,!0).appendXtra("",c[1],m[1]-c[1],",",!0).appendXtra("",c[2],m[2]-c[2],w?",":S,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>m.length?1:m[3])-c,S,!1)));else if(v=c.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)b=v[p],x=c.indexOf(b,f),a.appendXtra(c.substr(f,x-f),Number(b),re(y[p],b),"",O&&"px"===c.substr(x+b.length,2),0===p),f=x+b.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},de=9;for(l=ce.prototype,l.l=l.pr=0;--de>0;)l["xn"+de]=0,l["xs"+de]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new ce(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ge=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ve=U._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ge(n[s],e)},ye=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ve(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ge.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(-1===u?o[a]=o[a].split(p).join(""):-1===_&&(o[a]+=" "+p)));e=o.join(", "),i=h.join(", ")}return me(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ve(t,{parser:function(t,s,r,n,a,o){var h=new ce(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=p;var Te,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=W("transform"),be=V+"transform",Pe=W("transformOrigin"),Se=null!==W("perspective"),ke=U.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Re=window.SVGElement,Ae=function(t,e,i){var s,r=E.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Oe=E.documentElement,Ce=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return E.createElementNS&&!s&&(t=Ae("svg",Oe),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Pe]="50% 50%",e.style[xe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Se),Oe.removeChild(t)),s}(),De=function(t,e,i,s){var r,n;s&&(n=s.split(" ")).length||(r=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*r.width:parseFloat(e[0]))+r.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*r.height:parseFloat(e[1]))+r.y]),i.xOrigin=parseFloat(n[0]),i.yOrigin=parseFloat(n[1]),t.setAttribute("data-svg-origin",n.join(" "))},Me=U.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var n,o,h,l,_,u,p,f,c,m,d=i?t._gsTransform||new ke:new ke,g=0>d.scaleX,v=2e-5,y=1e5,T=Se?parseFloat(Q(t,Pe,e,!1,"0 0 0").split(" ")[2])||d.zOrigin||0:0,w=parseFloat(a.defaultTransformPerspective)||0;if(xe?o=Q(t,be,e,!0):t.currentStyle&&(o=t.currentStyle.filter.match(C),o=o&&4===o.length?[o[0].substr(4),Number(o[2].substr(4)),Number(o[1].substr(4)),o[3].substr(4),d.x||0,d.y||0].join(","):""),n=!o||"none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o,d.svg=!!(Re&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),d.svg&&(n&&-1!==(t.style[xe]+"").indexOf("matrix")&&(o=t.style[xe],n=!1),De(t,Q(t,Pe,r,!1,"50% 50%")+"",d,t.getAttribute("data-svg-origin")),Te=a.useSVGTransformAttr||Ce,h=t.getAttribute("transform"),n&&h&&-1!==h.indexOf("matrix")&&(o=h,n=0)),!n){for(h=(o||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=h.length;--l>-1;)_=Number(h[l]),h[l]=(u=_-(_|=0))?(0|u*y+(0>u?-.5:.5))/y+_:_;if(16===h.length){var x,b,P,S,k,R=h[0],A=h[1],O=h[2],D=h[3],M=h[4],z=h[5],F=h[6],E=h[7],N=h[8],L=h[9],X=h[10],U=h[12],Y=h[13],j=h[14],B=h[11],q=Math.atan2(F,X);d.zOrigin&&(j=-d.zOrigin,U=N*j-h[12],Y=L*j-h[13],j=X*j+d.zOrigin-h[14]),d.rotationX=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),x=M*S+N*k,b=z*S+L*k,P=F*S+X*k,N=M*-k+N*S,L=z*-k+L*S,X=F*-k+X*S,B=E*-k+B*S,M=x,z=b,F=P),q=Math.atan2(N,X),d.rotationY=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),x=R*S-N*k,b=A*S-L*k,P=O*S-X*k,L=A*k+L*S,X=O*k+X*S,B=D*k+B*S,R=x,A=b,O=P),q=Math.atan2(A,R),d.rotation=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),R=R*S+M*k,b=A*S+z*k,z=A*-k+z*S,F=O*-k+F*S,A=b),d.rotationX&&Math.abs(d.rotationX)+Math.abs(d.rotation)>359.9&&(d.rotationX=d.rotation=0,d.rotationY+=180),d.scaleX=(0|Math.sqrt(R*R+A*A)*y+.5)/y,d.scaleY=(0|Math.sqrt(z*z+L*L)*y+.5)/y,d.scaleZ=(0|Math.sqrt(F*F+X*X)*y+.5)/y,d.skewX=0,d.perspective=B?1/(0>B?-B:B):0,d.x=U,d.y=Y,d.z=j,d.svg&&(d.x-=d.xOrigin-(d.xOrigin*R-d.yOrigin*M),d.y-=d.yOrigin-(d.yOrigin*A-d.xOrigin*z))}else if(!(Se&&!s&&h.length&&d.x===h[4]&&d.y===h[5]&&(d.rotationX||d.rotationY)||void 0!==d.x&&"none"===Q(t,"display",e))){var V=h.length>=6,G=V?h[0]:1,W=h[1]||0,Z=h[2]||0,$=V?h[3]:1;d.x=h[4]||0,d.y=h[5]||0,p=Math.sqrt(G*G+W*W),f=Math.sqrt($*$+Z*Z),c=G||W?Math.atan2(W,G)*I:d.rotation||0,m=Z||$?Math.atan2(Z,$)*I+c:d.skewX||0,Math.abs(m)>90&&270>Math.abs(m)&&(g?(p*=-1,m+=0>=c?180:-180,c+=0>=c?180:-180):(f*=-1,m+=0>=m?180:-180)),d.scaleX=p,d.scaleY=f,d.rotation=c,d.skewX=m,Se&&(d.rotationX=d.rotationY=d.z=0,d.perspective=w,d.scaleZ=1),d.svg&&(d.x-=d.xOrigin-(d.xOrigin*G-d.yOrigin*W),d.y-=d.yOrigin-(d.yOrigin*$-d.xOrigin*Z))}d.zOrigin=T;for(l in d)v>d[l]&&d[l]>-v&&(d[l]=0)}return i&&(t._gsTransform=d,d.svg&&(Te&&t.style[xe]?Ee(t.style,xe):!Te&&t.getAttribute("transform")&&t.removeAttribute("transform"))),d},ze=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var f,c,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,c=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=f-(f*o+c*h),b+=c-(f*l+c*_)),v?(f=d/2,c=g/2,y+=", Dx="+(f-(f*o+c*h)+x)+", Dy="+(c-(f*l+c*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||w.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>m?1:-1;for(f=s.ieOffsetX||0,c=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),de=0;4>de;de++)S=ee[de],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(T,""))||0,k=i!==s[S]?2>de?-s.ieOffsetX:-s.ieOffsetY:2>de?f-s.ieOffsetX:c-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===de||2===de?1:R)))+"px"}}},Ie=U.set3DTransformRatio=U.setTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p,c,m,d,g,v,y,T,w,x,b,P,S=this.data,k=this.t.style,R=S.rotation,A=S.rotationX,O=S.rotationY,C=S.scaleX,D=S.scaleY,M=S.scaleZ,I=S.x,F=S.y,E=S.z,N=S.svg,L=S.perspective,X=S.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||E||L||O||A)&&(!Te||!N)&&Se))return R||S.skewX||N?(R*=z,b=S.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===S.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,S.skewY&&(e*=v,r*=v)),N&&(I+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),F+=S.yOrigin-(S.xOrigin*r+S.yOrigin*n),m=1e-6,m>I&&I>-m&&(I=0),m>F&&F>-m&&(F=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+I+","+F+")",N&&Te?this.t.setAttribute("transform","matrix("+T):k[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+T):k[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+I+","+F+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||S.z||S.rotationX||S.rotationY||(L=0)),R||S.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),S.skewX&&(R-=S.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===S.skewType&&(v=Math.tan(S.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,S.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(O||A||1!==M||L||N))return k[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+F+"px,"+E+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,p=L?-1/L:0,c=S.zOrigin,m=1e-6,w=",",x="0",R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=p*-g,s=e*g,a=r*g,l=d,p*=d,e*=d,r*=d),R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,h=l*g,u=p*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,p*=d,i=v,n=y),1!==M&&(s*=M,a*=M,l*=M,p*=M),1!==D&&(i*=D,n*=D,h*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(c||N)&&(c&&(I+=s*-c,F+=a*-c,E+=l*-c+c),N&&(I+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),F+=S.yOrigin-(S.xOrigin*r+S.yOrigin*n)),m>I&&I>-m&&(I=x),m>F&&F>-m&&(F=x),m>E&&E>-m&&(E=0)),T=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?x:e)+w+(m>r&&r>-m?x:r)+w+(m>o&&o>-m?x:o),T+=w+(m>_&&_>-m?x:_)+w+(m>i&&i>-m?x:i)+w+(m>n&&n>-m?x:n),A||O?(T+=w+(m>h&&h>-m?x:h)+w+(m>u&&u>-m?x:u)+w+(m>s&&s>-m?x:s),T+=w+(m>a&&a>-m?x:a)+w+(m>l&&l>-m?x:l)+w+(m>p&&p>-m?x:p)+w):T+=",0,0,0,0,1,0,",T+=I+w+F+w+E+w+(L?1+-E/L:1)+")",k[xe]=T};l=ke.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=0,l.scaleX=l.scaleY=l.scaleZ=1,ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,p,f,c,m,d=s._transform=Me(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=we.length,T=h,w={};if("string"==typeof T.transform&&xe)u=L.style,u[xe]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(L),l=Me(L,null,!1),E.body.removeChild(L);else if("object"==typeof T){if(l={scaleX:ne(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:ne(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:ne(T.scaleZ,d.scaleZ),x:ne(T.x,d.x),y:ne(T.y,d.y),z:ne(T.z,d.z),xPercent:ne(T.xPercent,d.xPercent),yPercent:ne(T.yPercent,d.yPercent),perspective:ne(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=ne(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=ne(T.y,d.yPercent)),l.rotation=ae("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),Se&&(l.rotationX=ae("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=ae("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:ae(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:ae(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=T.force3D&&(d.force3D=T.force3D,c=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,f=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,f||null==T.scale||(l.scaleZ=1);--y>-1;)i=we[y],p=l[i]-d[i],(p>v||-v>p||null!=T[i]||null!=F[i])&&(c=!0,n=new ce(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,d.svg&&(p||T.svgOrigin)&&(De(t,se(p),l,T.svgOrigin),n=new ce(d,"xOrigin",d.xOrigin,l.xOrigin-d.xOrigin,n,-1,"transformOrigin"),n.b=d.xOrigin,n.e=n.xs0=l.xOrigin,n=new ce(d,"yOrigin",d.yOrigin,l.yOrigin-d.yOrigin,n,-1,"transformOrigin"),n.b=d.yOrigin,n.e=n.xs0=l.yOrigin,p=Te?null:"0px 0px"),(p||Se&&f&&d.zOrigin)&&(xe?(c=!0,i=Pe,p=(p||Q(t,i,r,!1,"50% 50%"))+"",n=new ce(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,Se?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new ce(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):se(p+"",d)),c&&(s._transformType=d.svg&&Te||!f&&3!==this._transformType?2:3),n},prefix:!0}),ve("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ve("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,f,c,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),w=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+c+g,l=parseFloat(_)+c+g)),a=me(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ve("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,f="background-position",c=r||Z(t,null),d=this.format((c?m?c.getPropertyValue(f+"-x")+" "+c.getPropertyValue(f+"-y"):c.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ve("backgroundSize",{defaultValue:"0 0",formatter:se}),ve("perspective",{defaultValue:"0px",prefix:!0}),ve("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ve("transformStyle",{prefix:!0}),ve("backfaceVisibility",{prefix:!0}),ve("userSelect",{prefix:!0}),ve("margin",{parser:pe("marginTop,marginRight,marginBottom,marginLeft")}),ve("padding",{parser:pe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ve("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ve("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ve("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ve("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ve("borderWidth",{parser:pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ve("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new ce(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Fe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(w,"opacity="+r))};ve("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),j?n=new ce(h,"opacity",o,e-o,n):(n=new ce(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Fe),l&&(n=new ce(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ee=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},Ne=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ee(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)
	}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ve("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,f,c=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new ce(t,s,0,0,a,2),a.setRatio=Ne,a.pr=-11,i=!0,a.b=c,_=K(t,r),u=t._gsClassPT){for(p={},f=u.data;f;)p[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),l=J(t,_,K(t),h,p),t.setAttribute("class",c),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)}});var Le=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=h.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===o?r=!0:i="transformOrigin"===i?Pe:h[i].p),Ee(a,i);r&&(Ee(a,xe),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ve("clearProps",{parser:function(t,e,s,r,n){return n=new ce(t,s,0,0,n,2),n.setRatio=Le,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),de=l.length;de--;)ye(l[de]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var l,f,m,d,g,v,y,T,w,b=t.style;if(u&&""===b.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,l=K(t,r),b.cssText=d+";"+e,l=J(t,l,K(t)).difs,!j&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,b.cssText=d),this._firstPT=f=e.className?h.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(w=3===this._transformType,xe?p&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),c&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(w?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new ce(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=xe?Ie:ze,T.data=this._transform||Me(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,o,l,u,p,f,c,m,d,g,v=t.style;for(a in e)f=e[a],o=h[a],o?i=o.parse(t,f,a,this,i,n,e):(p=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=le(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=me(v,a,p,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(l=parseFloat(p),c=l||0===l?p.substr((l+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(l=ie(t,a,r),c="px"):"left"===a||"top"===a?(l=H(t,a,r),c="px"):(l="opacity"!==a?0:1,c="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:c),f=u||0===u?(g?u+l:u)+m:e[a],c!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,c),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new ce(v,a,u||l||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):q("invalid "+a+" tween value: "+e[a]):(i=new ce(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,p,f),i.xs0=m)):i=me(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transform=this._transform||Me(this._target,r,!0),this._transformType=this._transform.svg&&Te||!t&&3!==this._transformType?2:3};var Xe=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new ce(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Xe,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ue=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ue(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ue(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,h=e.to(t,i,s),l=[h],_=[],u=[],p=[],f=e._internals.reservedProps;for(t=h._targets||h.target,Ue(t,_,p),h.render(i,!0,!0),Ue(t,u),h.render(0,!0,!0),h._enabled(!0),r=p.length;--r>-1;)if(n=J(p[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];l.push(e.fromTo(p[r],i,o,n))}return l},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},c=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,c=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=c?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),c?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),f=u;--f>-1;)a=l[f],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),c},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},m=function(s,r,n,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,f,d=r.length,g=d;--d>-1;)(_=c[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),f=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),f=e!==!1&&P,c=500,m=33,d="tick",g=function(t){var e,a,o=k()-R;o>c&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){c=t||1/_,m=Math.min(e,c,0)},l.sleep=function(){null!=r&&(f&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-c+5),s=0===i?p:f&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),f=t,l.fps(i),void 0):f},l.fps(t),setTimeout(function(){f&&5>l.frame&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?j:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var O=function(){o&&k()-R>2e3&&a.wake(),setTimeout(O,2e3)};O(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&V())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new A,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=G(n,this,!1),1===h&&this._siblings[r].length>1&&Z(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===h&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.16.1",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},E=D._internals={isArray:f,isSelector:M,lazyTweens:I},N=D._plugins={},L=E.tweenLookup={},X=0,U=E.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=A._rootFramesTimeline=new C,B=A._rootTimeline=new C,q=30,V=E.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};B._startTime=a.time,j._startTime=a.frame,B._active=j._active=!0,setTimeout(V,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&V(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&V(),a.frame>=q){q=a.frame+(parseInt(D.autoSleep,10)||120);for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=B._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var G=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},W=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Z=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||W(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,p=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,c),0===Q(o,l,c)&&(p[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(p[f++]=o)));for(n=f;--n>-1;)if(o=p[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!W(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(h=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);
	else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,f=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if(!W(this,i,e,u))return!1}for(n in l)(a=o[n])&&(a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=G(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(n=$.prototype,$.version="1.10.1",$.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(N[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){$.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new $(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,$.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in c)c[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
	/*
	* "GreenSock | TweenMax"(http://greensock.com/tweenmax) with jQuery.
	* by @psyonline (http://www.psyonline.kr/, majorartist@gmail.com)
	* https://github.com/psyonline/jquery-with-gsap
	* License - http://creativecommons.org/licenses/by-sa/2.0/kr/
	*/
	;(function(h){function g(d,b){return function(c){b.call(d,c)}}var l=h.isPlainObject,m=CSSPlugin._internals.getTransform,k=["{self}"];h.fn.__css=function(d,b){var c;if(l(d))TweenMax.set(this,d);else if(void 0!==b)c={},c[d]=b,TweenMax.set(this,c);else{if(-1!=="scale,scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,rotationZ,perspective,xPercent,yPercent,zOrigin,".indexOf(d+",")){var e=this[0];c=d;e=e._gsTransform||m(e);"rotationZ"==c?c="rotation":"scale"==c&&(c="scaleX");return e[c]}return this.css(d)}return this};
	h.fn.__animate=function(d,b,c,e){var a={},f;for(f in d)a[f]=d[f];if(l(b))for(f in b)a[f]=b[f];else"function"==typeof e?(a.duration=b,a.easing=c,a.complete=e):"function"==typeof c?("number"==typeof b?a.duration=b:a.easing=b,a.complete=c):"number"==typeof b?a.duration=b:"string"==typeof b?a.easing=b:"function"==typeof b&&(a.complete=b);a.duration=(void 0!==a.duration?a.duration:400)/1E3;void 0!==a.delay&&(a.delay/=1E3);void 0!==a.repeatDelay&&(a.repeatDelay/=1E3);a.start&&(a.onStart=g(this,a.start),
	a.onStartParams=k,delete a.start);if(a.step||a.progress)a.onUpdate=g(this,a.step||a.progress),a.onUpdateParams=k,delete a.step,delete a.progress;a.repeatStep&&(a.onRepeat=g(this,a.repeatStep),a.onRepeatParams=k,delete a.repeatStep);a.complete&&(a.onComplete=g(this,a.complete),a.onCompleteParams=k,delete a.complete);a.easing&&(a.ease=a.easing,delete a.easing);delete a.queue;d=a.duration;delete a.duration;this.data("TweenMax",TweenMax.to(this,d,a));return this};h.fn.__stop=function(d,b){var c=this.data("TweenMax");
	c&&c.kill(d,b);return this};(function(){function d(a){return function(b){return a.getRatio(b)}}var b,c,e,a,f,g;if(h.easing&&window.GreenSockGlobals&&window.GreenSockGlobals.Ease&&window.GreenSockGlobals.Ease.map)for(b="Quad Cubic Quart Quint Sine Expo Circ Elastic Back Bounce".split(" "),c=["In","Out","InOut"],e=window.GreenSockGlobals.Ease.map,f=0;f<b.length;f++)for(g=0;g<c.length;g++)a="ease"+c[g]+b[f],e[a]&&!h.easing[a]&&(h.easing[a]=d(e[a]))})()})(window.jQuery);
	/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
	(function(g,n,f){function p(a,b){this.wrapper="string"==typeof a?n.querySelector(a):a;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var c in b)this.options[c]=
	b[c];this.translateZ=this.options.HWCompositing&&d.hasPerspective?" translateZ(0)":"";this.options.useTransition=d.hasTransition&&this.options.useTransition;this.options.useTransform=d.hasTransform&&this.options.useTransform;this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY;
	this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing="string"==typeof this.options.bounceEasing?d.ease[this.options.bounceEasing]||d.ease.circular:this.options.bounceEasing;this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling;
	!0===this.options.tap&&(this.options.tap="tap");"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1);this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;this.directionY=this.directionX=this.y=this.x=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}function t(a,b,c){var e=n.createElement("div"),d=n.createElement("div");!0===c&&(e.style.cssText="position:absolute;z-index:9999",d.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");
	d.className="iScrollIndicator";"h"==a?(!0===c&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",d.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(!0===c&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",d.style.width="100%"),e.className="iScrollVerticalScrollbar");e.style.cssText+=";overflow:hidden";b||(e.style.pointerEvents="none");e.appendChild(d);return e}function u(a,b){this.wrapper="string"==typeof b.el?n.querySelector(b.el):b.el;this.wrapperStyle=this.wrapper.style;
	this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=a;this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var c in b)this.options[c]=b[c];this.sizeRatioY=this.sizeRatioX=1;this.maxPosY=this.maxPosX=0;this.options.interactive&&(this.options.disableTouch||(d.addEvent(this.indicator,"touchstart",this),d.addEvent(g,"touchend",this)),this.options.disablePointer||(d.addEvent(this.indicator,
	d.prefixPointerEvent("pointerdown"),this),d.addEvent(g,d.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(d.addEvent(this.indicator,"mousedown",this),d.addEvent(g,"mouseup",this)));this.options.fade&&(this.wrapperStyle[d.style.transform]=this.scroller.translateZ,this.wrapperStyle[d.style.transitionDuration]=d.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var v=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||
	g.msRequestAnimationFrame||function(a){g.setTimeout(a,1E3/60)},d=function(){function a(a){return!1===e?!1:""===e?a:e+a.charAt(0).toUpperCase()+a.substr(1)}var b={},c=n.createElement("div").style,e=function(){for(var a=["t","webkitT","MozT","msT","OT"],b,e=0,d=a.length;e<d;e++)if(b=a[e]+"ransform",b in c)return a[e].substr(0,a[e].length-1);return!1}();b.getTime=Date.now||function(){return(new Date).getTime()};b.extend=function(a,b){for(var c in b)a[c]=b[c]};b.addEvent=function(a,b,c,e){a.addEventListener&&a.addEventListener(b,
	c,!!e)};b.removeEvent=function(a,b,c,e){a.removeEventListener&&a.removeEventListener(b,c,!!e)};b.prefixPointerEvent=function(a){return g.MSPointerEvent?"MSPointer"+a.charAt(9).toUpperCase()+a.substr(10):a};b.momentum=function(a,b,c,e,d,k){b=a-b;c=f.abs(b)/c;var g;k=void 0===k?6E-4:k;g=a+c*c/(2*k)*(0>b?-1:1);k=c/k;g<e?(g=d?e-d/2.5*(c/8):e,b=f.abs(g-a),k=b/c):0<g&&(g=d?d/2.5*(c/8):0,b=f.abs(a)+g,k=b/c);return{destination:f.round(g),duration:k}};var d=a("transform");b.extend(b,{hasTransform:!1!==d,hasPerspective:a("perspective")in
	c,hasTouch:"ontouchstart"in g,hasPointer:g.PointerEvent||g.MSPointerEvent,hasTransition:a("transition")in c});b.isBadAndroid=/Android /.test(g.navigator.appVersion)&&!/Chrome\/\d/.test(g.navigator.appVersion);b.extend(b.style={},{transform:d,transitionTimingFunction:a("transitionTimingFunction"),transitionDuration:a("transitionDuration"),transitionDelay:a("transitionDelay"),transformOrigin:a("transformOrigin")});b.hasClass=function(a,b){return(new RegExp("(^|\\s)"+b+"(\\s|$)")).test(a.className)};
	b.addClass=function(a,c){if(!b.hasClass(a,c)){var e=a.className.split(" ");e.push(c);a.className=e.join(" ")}};b.removeClass=function(a,c){b.hasClass(a,c)&&(a.className=a.className.replace(new RegExp("(^|\\s)"+c+"(\\s|$)","g")," "))};b.offset=function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;return{left:b,top:c}};b.preventDefaultException=function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1};b.extend(b.eventType={},{touchstart:1,touchmove:1,
	touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});b.extend(b.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return f.sqrt(1- --a*a)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(a){return--a*a*(5*a+4)+1}},bounce:{style:"",fn:function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*
	(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}},elastic:{style:"",fn:function(a){return 0===a?0:1==a?1:.4*f.pow(2,-10*a)*f.sin(2*(a-.055)*f.PI/.22)+1}}});b.tap=function(a,b){var c=n.createEvent("Event");c.initEvent(b,!0,!0);c.pageX=a.pageX;c.pageY=a.pageY;a.target.dispatchEvent(c)};b.click=function(a){var b=a.target,c;/(SELECT|INPUT|TEXTAREA)/i.test(b.tagName)||(c=n.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,a.view,1,b.screenX,b.screenY,
	b.clientX,b.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),c._constructed=!0,b.dispatchEvent(c))};return b}();p.prototype={version:"5.1.3",_init:function(){this._initEvents();(this.options.scrollbars||this.options.indicators)&&this._initIndicators();this.options.mouseWheel&&this._initWheel();this.options.snap&&this._initSnap();this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0);this._execEvent("destroy")},_transitionEnd:function(a){a.target==this.scroller&&
	this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(a){if(!(1!=d.eventType[a.type]&&0!==a.button||!this.enabled||this.initiated&&d.eventType[a.type]!==this.initiated)){!this.options.preventDefault||d.isBadAndroid||d.preventDefaultException(a.target,this.options.preventDefaultException)||a.preventDefault();var b=a.touches?a.touches[0]:a;this.initiated=d.eventType[a.type];this.moved=!1;this.directionLocked=
	this.directionY=this.directionX=this.distY=this.distX=0;this._transitionTime();this.startTime=d.getTime();this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,a=this.getComputedPosition(),this._translate(f.round(a.x),f.round(a.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd"));this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=b.pageX;this.pointY=b.pageY;this._execEvent("beforeScrollStart")}},
	_move:function(a){if(this.enabled&&d.eventType[a.type]===this.initiated){this.options.preventDefault&&a.preventDefault();var b=a.touches?a.touches[0]:a,c=b.pageX-this.pointX,e=b.pageY-this.pointY,k=d.getTime(),h;this.pointX=b.pageX;this.pointY=b.pageY;this.distX+=c;this.distY+=e;b=f.abs(this.distX);h=f.abs(this.distY);if(!(300<k-this.endTime&&10>b&&10>h)){this.directionLocked||this.options.freeScroll||(this.directionLocked=b>h+this.options.directionLockThreshold?"h":h>=b+this.options.directionLockThreshold?
	"v":"n");if("h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)a.preventDefault();else if("horizontal"==this.options.eventPassthrough){this.initiated=!1;return}e=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)a.preventDefault();else if("vertical"==this.options.eventPassthrough){this.initiated=!1;return}c=0}c=this.hasHorizontalScroll?c:0;e=this.hasVerticalScroll?e:0;a=this.x+c;b=this.y+e;if(0<a||a<this.maxScrollX)a=this.options.bounce?this.x+
	c/3:0<a?0:this.maxScrollX;if(0<b||b<this.maxScrollY)b=this.options.bounce?this.y+e/3:0<b?0:this.maxScrollY;this.directionX=0<c?-1:0>c?1:0;this.directionY=0<e?-1:0>e?1:0;this.moved||this._execEvent("scrollStart");this.moved=!0;this._translate(a,b);300<k-this.startTime&&(this.startTime=k,this.startX=this.x,this.startY=this.y)}}},_end:function(a){if(this.enabled&&d.eventType[a.type]===this.initiated){this.options.preventDefault&&!d.preventDefaultException(a.target,this.options.preventDefaultException)&&
	a.preventDefault();var b,c;c=d.getTime()-this.startTime;var e=f.round(this.x),k=f.round(this.y),h=f.abs(e-this.startX),g=f.abs(k-this.startY);b=0;var l="";this.initiated=this.isInTransition=0;this.endTime=d.getTime();if(!this.resetPosition(this.options.bounceTime))if(this.scrollTo(e,k),this.moved)if(this._events.flick&&200>c&&100>h&&100>g)this._execEvent("flick");else if(this.options.momentum&&300>c&&(b=this.hasHorizontalScroll?d.momentum(this.x,this.startX,c,this.maxScrollX,this.options.bounce?this.wrapperWidth:
	0,this.options.deceleration):{destination:e,duration:0},c=this.hasVerticalScroll?d.momentum(this.y,this.startY,c,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:k,duration:0},e=b.destination,k=c.destination,b=f.max(b.duration,c.duration),this.isInTransition=1),this.options.snap&&(this.currentPage=l=this._nearestSnap(e,k),b=this.options.snapSpeed||f.max(f.max(f.min(f.abs(e-l.x),1E3),f.min(f.abs(k-l.y),1E3)),300),e=l.x,k=l.y,this.directionY=this.directionX=
	0,l=this.options.bounceEasing),e!=this.x||k!=this.y){if(0<e||e<this.maxScrollX||0<k||k<this.maxScrollY)l=d.ease.quadratic;this.scrollTo(e,k,b,l)}else this._execEvent("scrollEnd");else this.options.tap&&d.tap(a,this.options.tap),this.options.click&&d.click(a),this._execEvent("scrollCancel")}},_resize:function(){var a=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){a.refresh()},this.options.resizePolling)},resetPosition:function(a){var b=this.x,c=this.y;!this.hasHorizontalScroll||
	0<this.x?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX);!this.hasVerticalScroll||0<this.y?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY);if(b==this.x&&c==this.y)return!1;this.scrollTo(b,c,a||0,this.options.bounceEasing);return!0},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;
	this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&0>this.maxScrollX;this.hasVerticalScroll=this.options.scrollY&&0>this.maxScrollY;this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth);this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight);this.directionY=this.directionX=this.endTime=0;this.wrapperOffset=d.offset(this.wrapper);this._execEvent("refresh");
	this.resetPosition()},on:function(a,b){this._events[a]||(this._events[a]=[]);this._events[a].push(b)},off:function(a,b){if(this._events[a]){var c=this._events[a].indexOf(b);-1<c&&this._events[a].splice(c,1)}},_execEvent:function(a){if(this._events[a]){var b=0,c=this._events[a].length;if(c)for(;b<c;b++)this._events[a][b].apply(this,[].slice.call(arguments,1))}},scrollBy:function(a,b,c,e){a=this.x+a;b=this.y+b;this.scrollTo(a,b,c||0,e)},scrollTo:function(a,b,c,e){e=e||d.ease.circular;this.isInTransition=
	this.options.useTransition&&0<c;!c||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(c),this._translate(a,b)):this._animate(a,b,c,e.fn)},scrollToElement:function(a,b,c,e,k){if(a=a.nodeType?a:this.scroller.querySelector(a)){var h=d.offset(a);h.left-=this.wrapperOffset.left;h.top-=this.wrapperOffset.top;!0===c&&(c=f.round(a.offsetWidth/2-this.wrapper.offsetWidth/2));!0===e&&(e=f.round(a.offsetHeight/2-this.wrapper.offsetHeight/2));h.left-=c||0;h.top-=
	e||0;h.left=0<h.left?0:h.left<this.maxScrollX?this.maxScrollX:h.left;h.top=0<h.top?0:h.top<this.maxScrollY?this.maxScrollY:h.top;b=void 0===b||null===b||"auto"===b?f.max(f.abs(this.x-h.left),f.abs(this.y-h.top)):b;this.scrollTo(h.left,h.top,b,k)}},_transitionTime:function(a){a=a||0;this.scrollerStyle[d.style.transitionDuration]=a+"ms";!a&&d.isBadAndroid&&(this.scrollerStyle[d.style.transitionDuration]="0.001s");if(this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTime(a)},
	_transitionTimingFunction:function(a){this.scrollerStyle[d.style.transitionTimingFunction]=a;if(this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTimingFunction(a)},_translate:function(a,b){this.options.useTransform?this.scrollerStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.translateZ:(a=f.round(a),b=f.round(b),this.scrollerStyle.left=a+"px",this.scrollerStyle.top=b+"px");this.x=a;this.y=b;if(this.indicators)for(var c=this.indicators.length;c--;)this.indicators[c].updatePosition()},
	_initEvents:function(a){a=a?d.removeEvent:d.addEvent;var b=this.options.bindToWrapper?this.wrapper:g;a(g,"orientationchange",this);a(g,"resize",this);this.options.click&&a(this.wrapper,"click",this,!0);this.options.disableMouse||(a(this.wrapper,"mousedown",this),a(b,"mousemove",this),a(b,"mousecancel",this),a(b,"mouseup",this));d.hasPointer&&!this.options.disablePointer&&(a(this.wrapper,d.prefixPointerEvent("pointerdown"),this),a(b,d.prefixPointerEvent("pointermove"),this),a(b,d.prefixPointerEvent("pointercancel"),
	this),a(b,d.prefixPointerEvent("pointerup"),this));d.hasTouch&&!this.options.disableTouch&&(a(this.wrapper,"touchstart",this),a(b,"touchmove",this),a(b,"touchcancel",this),a(b,"touchend",this));a(this.scroller,"transitionend",this);a(this.scroller,"webkitTransitionEnd",this);a(this.scroller,"oTransitionEnd",this);a(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var a=g.getComputedStyle(this.scroller,null),b;this.options.useTransform?(a=a[d.style.transform].split(")")[0].split(", "),
	b=+(a[12]||a[4]),a=+(a[13]||a[5])):(b=+a.left.replace(/[^-\d.]/g,""),a=+a.top.replace(/[^-\d.]/g,""));return{x:b,y:a}},_initIndicators:function(){function a(a){for(var b=f.indicators.length;b--;)a.call(f.indicators[b])}var b=this.options.interactiveScrollbars,c="string"!=typeof this.options.scrollbars,e=[],d,f=this;this.indicators=[];this.options.scrollbars&&(this.options.scrollY&&(d={el:t("v",b,this.options.scrollbars),interactive:b,defaultScrollbars:!0,customStyle:c,resize:this.options.resizeScrollbars,
	shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(d.el),e.push(d)),this.options.scrollX&&(d={el:t("h",b,this.options.scrollbars),interactive:b,defaultScrollbars:!0,customStyle:c,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(d.el),e.push(d)));this.options.indicators&&(e=e.concat(this.options.indicators));for(b=e.length;b--;)this.indicators.push(new u(this,
	e[b]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){a(function(){this.fade()})}),this.on("scrollCancel",function(){a(function(){this.fade()})}),this.on("scrollStart",function(){a(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){a(function(){this.fade(1,!0)})}));this.on("refresh",function(){a(function(){this.refresh()})});this.on("destroy",function(){a(function(){this.destroy()});delete this.indicators})},_initWheel:function(){d.addEvent(this.wrapper,"wheel",this);
	d.addEvent(this.wrapper,"mousewheel",this);d.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){d.removeEvent(this.wrapper,"wheel",this);d.removeEvent(this.wrapper,"mousewheel",this);d.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(a){if(this.enabled){a.preventDefault();a.stopPropagation();var b,c,e,d=this;void 0===this.wheelTimeout&&d._execEvent("scrollStart");clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){d._execEvent("scrollEnd");
	d.wheelTimeout=void 0},400);if("deltaX"in a)1===a.deltaMode?(b=-a.deltaX*this.options.mouseWheelSpeed,a=-a.deltaY*this.options.mouseWheelSpeed):(b=-a.deltaX,a=-a.deltaY);else if("wheelDeltaX"in a)b=a.wheelDeltaX/120*this.options.mouseWheelSpeed,a=a.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in a)b=a=a.wheelDelta/120*this.options.mouseWheelSpeed;else if("detail"in a)b=a=-a.detail/3*this.options.mouseWheelSpeed;else return;b*=this.options.invertWheelDirection;a*=this.options.invertWheelDirection;
	this.hasVerticalScroll||(b=a,a=0);this.options.snap?(c=this.currentPage.pageX,e=this.currentPage.pageY,0<b?c--:0>b&&c++,0<a?e--:0>a&&e++,this.goToPage(c,e)):(c=this.x+f.round(this.hasHorizontalScroll?b:0),e=this.y+f.round(this.hasVerticalScroll?a:0),0<c?c=0:c<this.maxScrollX&&(c=this.maxScrollX),0<e?e=0:e<this.maxScrollY&&(e=this.maxScrollY),this.scrollTo(c,e,0))}},_initSnap:function(){this.currentPage={};"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap));
	this.on("refresh",function(){var a=0,b,c=0,e,d,h,g=0,l;e=this.options.snapStepX||this.wrapperWidth;var m=this.options.snapStepY||this.wrapperHeight;this.pages=[];if(this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(d=f.round(e/2),h=f.round(m/2);g>-this.scrollerWidth;){this.pages[a]=[];for(l=b=0;l>-this.scrollerHeight;)this.pages[a][b]={x:f.max(g,this.maxScrollX),y:f.max(l,this.maxScrollY),width:e,height:m,cx:g-d,cy:l-h},l-=m,b++;g-=e;a++}else for(m=
	this.options.snap,b=m.length,e=-1;a<b;a++){if(0===a||m[a].offsetLeft<=m[a-1].offsetLeft)c=0,e++;this.pages[c]||(this.pages[c]=[]);g=f.max(-m[a].offsetLeft,this.maxScrollX);l=f.max(-m[a].offsetTop,this.maxScrollY);d=g-f.round(m[a].offsetWidth/2);h=l-f.round(m[a].offsetHeight/2);this.pages[c][e]={x:g,y:l,width:m[a].offsetWidth,height:m[a].offsetHeight,cx:d,cy:h};g>this.maxScrollX&&c++}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);0===this.options.snapThreshold%1?this.snapThresholdY=
	this.snapThresholdX=this.options.snapThreshold:(this.snapThresholdX=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}});this.on("flick",function(){var a=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.x-this.startX),1E3),f.min(f.abs(this.y-this.startY),1E3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+
	this.directionY,a)})},_nearestSnap:function(a,b){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var c=0,e=this.pages.length,d=0;if(f.abs(a-this.absStartX)<this.snapThresholdX&&f.abs(b-this.absStartY)<this.snapThresholdY)return this.currentPage;0<a?a=0:a<this.maxScrollX&&(a=this.maxScrollX);0<b?b=0:b<this.maxScrollY&&(b=this.maxScrollY);for(;c<e;c++)if(a>=this.pages[c][0].cx){a=this.pages[c][0].x;break}for(e=this.pages[c].length;d<e;d++)if(b>=this.pages[0][d].cy){b=this.pages[0][d].y;break}c==
	this.currentPage.pageX&&(c+=this.directionX,0>c?c=0:c>=this.pages.length&&(c=this.pages.length-1),a=this.pages[c][0].x);d==this.currentPage.pageY&&(d+=this.directionY,0>d?d=0:d>=this.pages[0].length&&(d=this.pages[0].length-1),b=this.pages[0][d].y);return{x:a,y:b,pageX:c,pageY:d}},goToPage:function(a,b,c,d){d=d||this.options.bounceEasing;a>=this.pages.length?a=this.pages.length-1:0>a&&(a=0);b>=this.pages[a].length?b=this.pages[a].length-1:0>b&&(b=0);var g=this.pages[a][b].x,h=this.pages[a][b].y;c=
	void 0===c?this.options.snapSpeed||f.max(f.max(f.min(f.abs(g-this.x),1E3),f.min(f.abs(h-this.y),1E3)),300):c;this.currentPage={x:g,y:h,pageX:a,pageY:b};this.scrollTo(g,h,c,d)},next:function(a,b){var c=this.currentPage.pageX,d=this.currentPage.pageY;c++;c>=this.pages.length&&this.hasVerticalScroll&&(c=0,d++);this.goToPage(c,d,a,b)},prev:function(a,b){var c=this.currentPage.pageX,d=this.currentPage.pageY;c--;0>c&&this.hasVerticalScroll&&(c=0,d--);this.goToPage(c,d,a,b)},_initKeys:function(a){a={pageUp:33,
	pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var b;if("object"==typeof this.options.keyBindings)for(b in this.options.keyBindings)"string"==typeof this.options.keyBindings[b]&&(this.options.keyBindings[b]=this.options.keyBindings[b].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(b in a)this.options.keyBindings[b]=this.options.keyBindings[b]||a[b];d.addEvent(g,"keydown",this);this.on("destroy",function(){d.removeEvent(g,"keydown",this)})},_key:function(a){if(this.enabled){var b=
	this.options.snap,c=b?this.currentPage.pageX:this.x,e=b?this.currentPage.pageY:this.y,g=d.getTime(),h=this.keyTime||0,n;this.options.useTransition&&this.isInTransition&&(n=this.getComputedPosition(),this._translate(f.round(n.x),f.round(n.y)),this.isInTransition=!1);this.keyAcceleration=200>g-h?f.min(this.keyAcceleration+.25,50):0;switch(a.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?c+=b?1:this.wrapperWidth:e+=b?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&
	!this.hasVerticalScroll?c-=b?1:this.wrapperWidth:e-=b?1:this.wrapperHeight;break;case this.options.keyBindings.end:c=b?this.pages.length-1:this.maxScrollX;e=b?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:e=c=0;break;case this.options.keyBindings.left:c+=b?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:e+=b?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:c-=b?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:e-=
	b?1:5+this.keyAcceleration>>0;break;default:return}b?this.goToPage(c,e):(0<c?this.keyAcceleration=c=0:c<this.maxScrollX&&(c=this.maxScrollX,this.keyAcceleration=0),0<e?this.keyAcceleration=e=0:e<this.maxScrollY&&(e=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(c,e,0),this.keyTime=g)}},_animate:function(a,b,c,e){function f(){var q=d.getTime(),r;q>=p?(g.isAnimating=!1,g._translate(a,b),g.resetPosition(g.options.bounceTime)||g._execEvent("scrollEnd")):(q=(q-m)/c,r=e(q),q=(a-n)*r+n,r=(b-l)*r+
	l,g._translate(q,r),g.isAnimating&&v(f))}var g=this,n=this.x,l=this.y,m=d.getTime(),p=m+c;this.isAnimating=!0;f()},handleEvent:function(a){switch(a.type){case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":this._start(a);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":this._end(a);
	break;case "orientationchange":case "resize":this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":this._transitionEnd(a);break;case "wheel":case "DOMMouseScroll":case "mousewheel":this._wheel(a);break;case "keydown":this._key(a);break;case "click":a._constructed||(a.preventDefault(),a.stopPropagation())}}};u.prototype={handleEvent:function(a){switch(a.type){case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":this._start(a);
	break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":this._end(a)}},destroy:function(){this.options.interactive&&(d.removeEvent(this.indicator,"touchstart",this),d.removeEvent(this.indicator,d.prefixPointerEvent("pointerdown"),this),d.removeEvent(this.indicator,"mousedown",this),d.removeEvent(g,"touchmove",
	this),d.removeEvent(g,d.prefixPointerEvent("pointermove"),this),d.removeEvent(g,"mousemove",this),d.removeEvent(g,"touchend",this),d.removeEvent(g,d.prefixPointerEvent("pointerup"),this),d.removeEvent(g,"mouseup",this));this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(a){var b=a.touches?a.touches[0]:a;a.preventDefault();a.stopPropagation();this.transitionTime();this.initiated=!0;this.moved=!1;this.lastPointX=b.pageX;this.lastPointY=b.pageY;this.startTime=
	d.getTime();this.options.disableTouch||d.addEvent(g,"touchmove",this);this.options.disablePointer||d.addEvent(g,d.prefixPointerEvent("pointermove"),this);this.options.disableMouse||d.addEvent(g,"mousemove",this);this.scroller._execEvent("beforeScrollStart")},_move:function(a){var b=a.touches?a.touches[0]:a,c,e;d.getTime();this.moved||this.scroller._execEvent("scrollStart");this.moved=!0;c=b.pageX-this.lastPointX;this.lastPointX=b.pageX;e=b.pageY-this.lastPointY;this.lastPointY=b.pageY;this._pos(this.x+
	c,this.y+e);a.preventDefault();a.stopPropagation()},_end:function(a){if(this.initiated){this.initiated=!1;a.preventDefault();a.stopPropagation();d.removeEvent(g,"touchmove",this);d.removeEvent(g,d.prefixPointerEvent("pointermove"),this);d.removeEvent(g,"mousemove",this);if(this.scroller.options.snap){a=this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var b=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.scroller.x-a.x),1E3),f.min(f.abs(this.scroller.y-a.y),1E3)),300);if(this.scroller.x!=
	a.x||this.scroller.y!=a.y)this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=a,this.scroller.scrollTo(a.x,a.y,b,this.scroller.options.bounceEasing)}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(a){a=a||0;this.indicatorStyle[d.style.transitionDuration]=a+"ms";!a&&d.isBadAndroid&&(this.indicatorStyle[d.style.transitionDuration]="0.001s")},transitionTimingFunction:function(a){this.indicatorStyle[d.style.transitionTimingFunction]=a},refresh:function(){this.transitionTime();
	this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none";this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(d.addClass(this.wrapper,"iScrollBothScrollbars"),d.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&
	(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(d.removeClass(this.wrapper,"iScrollBothScrollbars"),d.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=f.max(f.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||
	this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX);this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,
	this.options.resize?(this.indicatorHeight=f.max(f.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-
	this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY);this.updatePosition()},updatePosition:function(){var a=this.options.listenX&&f.round(this.sizeRatioX*this.scroller.x)||0,b=this.options.listenY&&f.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(a<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=f.max(this.indicatorWidth+a,8),this.indicatorStyle.width=this.width+"px"),a=this.minBoundaryX):
	a>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=f.max(this.indicatorWidth-(a-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",a=this.maxPosX+this.indicatorWidth-this.width):a=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),b<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=f.max(this.indicatorHeight+3*b,8),this.indicatorStyle.height=this.height+"px"),b=this.minBoundaryY):
	b>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=f.max(this.indicatorHeight-3*(b-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",b=this.maxPosY+this.indicatorHeight-this.height):b=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px"));this.x=a;this.y=b;this.scroller.options.useTransform?this.indicatorStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.scroller.translateZ:
	(this.indicatorStyle.left=a+"px",this.indicatorStyle.top=b+"px")},_pos:function(a,b){0>a?a=0:a>this.maxPosX&&(a=this.maxPosX);0>b?b=0:b>this.maxPosY&&(b=this.maxPosY);a=this.options.listenX?f.round(a/this.sizeRatioX):this.scroller.x;b=this.options.listenY?f.round(b/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(a,b)},fade:function(a,b){if(!b||this.visible){clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var c=a?250:500,e=a?0:300;this.wrapperStyle[d.style.transitionDuration]=c+"ms";this.fadeTimeout=
	setTimeout(function(a){this.wrapperStyle.opacity=a;this.visible=+a}.bind(this,a?"1":"0"),e)}}};p.utils=d;"undefined"!=typeof module&&module.exports?module.exports=p:g.IScroll=p})(window,document,Math);

	;(function(){if(!Array.prototype.indexOf)Array.prototype.indexOf=function(s){var n=-1;for(var i=0;i<this.length;i++)if(this[i]===s)n=i;return n;};})();


	/*
	* expand jquery to support
	* by @psyonline(http://www.psyonline.kr/,majorartist@gmail.com)
	*/
	;(function($) {

		'use strict';

		var
			ua = navigator.userAgent,
			div = document.createElement('div'),

			ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),

			prefix = ['Webkit', 'Moz', 'O'],
			transition = 'transition',
			transform = 'transform',
			requestanimationframe = 'requestAnimationFrame',
			cancelanimationframe = 'CancelAnimationFrame',

			transforms = {
				translate3d: 'translate3d(0px, 0px, 0px)',
				translate: 'translate(0px, 0px)',
				scale3d: 'scale3d(1, 1, 1)',
				scale: 'scale(1, 1)'
			},

			browser = $.browser,
			support = $.support,
			version, i;


		if ( !browser ) {
			$.browser = browser = {};
		}
		browser.local = !(/^http:\/\//).test(location.href);
		browser.firefox = (/firefox/i).test(ua);
		browser.webkit = (/applewebkit/i).test(ua);
		browser.chrome = (/chrome/i).test(ua);
		browser.opera = (/opera/i).test(ua);
		browser.ios = (/ip(ad|hone|od)/i).test(ua);
		browser.android = (/android/i).test(ua);
		browser.safari = browser.webkit && !browser.chrome;

		support.touch = browser.ios || browser.android || (document.ontouchstart !== undefined && document.ontouchstart !== null);
		browser.mobile = support.touch && ( browser.ios || browser.android );

		for ( i in browser ) {
			if( !browser[i] ) {
				delete browser[i];
			}
		}
		browser.os = (navigator.appVersion).match(/(mac|win|linux)/i);
		browser.os = ( browser.os )? browser.os[1].toLowerCase() : '';
		
		if ( browser.ios || browser.android ) {
			version = ua.match(/applewebkit\/([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.webkitversion = version[1];
			}
			if ( browser.ios ) {
				version = ua.match(/version\/([0-9.]+)/i);
				if ( version && version.length > 1 ) {
					browser.ios = version[1];
				}
			} else if ( browser.android ) {
				version = ua.match(/android ([0-9.]+)/i);
				if ( version && version.length > 1 ) {
					browser.android = parseInt(version[1].replace(/\./g, ''));
				}
			}
		}

		support.svgimage = true;
		support.pointerevents = true;
		if ( ie ) {
			browser.ie = ie = parseInt( ie[1] || ie[2] );
			if ( 9 > ie ) {
				browser.oldie = true;
			} else if ( 9 == ie ) {
				prefix.push('ms');
			}
			if ( 11 > ie ) {
				support.pointerevents = false;
			}
			if ( 9 > ie ) {
				support.svgimage = false;
			}
		}

		support.pushstate = !!history.pushState;
		support.mediaquery = typeof(window.matchMedia) == 'function' || !browser.oldie;
		support.video = document.createElement('video').canPlayType !== undefined;
		support.backgroundsize = 'backgroundSize' in div.style;
		if ( support.backgroundsize ) {
			div.style.backgroundSize = 'cover';
			support.backgroundsize = div.style.backgroundSize == 'cover';
		}
		try {
			div.style.background = 'rgba(0, 0, 0, 0)';
			support.rgba = div.style.background == 'rgba(0, 0, 0, 0)';
		} catch(e) {
			support.rgba = false;
		}
		support.canvas = document.createElement('canvas');
		support.canvas = support.canvas.getContext && support.canvas.getContext('2d');

		if ( div.style[transform] != undefined ) {
			support.transform = transform;
		} else {
			transform = 'Transform';
			for ( i = 0; i < 4; i++ ) {
				if ( div.style[prefix[i]+transform] !== undefined ) {
					support.transform = prefix[i]+transform;
					break;
				}
			}
		}
		if ( support.transform ) {
			transform = support.transform;
			for ( i in transforms ) {
				div.style[transform] = '';
				div.style[transform] = transforms[i];
				support[i] = div.style[transform];
			}
			if ( browser.ie && 10 > browser.ie ) {
			}
			if ( browser.android && 430 > browser.android ) {
			}
		}
		if ( div.style[transition] != undefined ) {
			support.transition = transition;
		} else {
			transition = 'Transition';
			for ( i = 0; i < 4; i++ ) {
				if ( div.style[prefix[i]+transition] !== undefined ) {
					support.transition = prefix[i]+transition;
					break;
				}
			}
		}
		if ( window[requestanimationframe] ) {
			support.requestanimationframe = true;
		} else {
			requestanimationframe = 'RequestAnimationFrame';
			for ( i = 0; i < 4; i++ ) {
				if ( window[prefix[i]+requestanimationframe] !== undefined ) {
					window.requestAnimationFrame = window[prefix[i]+requestanimationframe];
					window.cancelAnimationFrame = window[prefix[i]+cancelanimationframe];
					support.requestanimationframe = true;
					break;
				}
			}
		}
		if ( !support.requestanimationframe ) {
			window.requestAnimationFrame = (function() {
				var lasttime = 0;
				return function(callback) {
					var currenttime = gettime();
					var timetocall = Math.max(0, 16-(currenttime-lasttime));
					lasttime = currenttime+timetocall;
					return setTimeout(function() { callback(currenttime+timetocall); }, timetocall);
				}
			})();
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			}
		}
		$._cookie = {
			set: function(name, value, term, path, domain) {
				var cookieset = name + '=' + value + ';',
					expdate;
				if ( term ) {
					expdate = new Date();
					expdate.setTime( expdate.getTime()+term*1000*60*60*24 ); // term 1 is a day
					cookieset += 'expires=' + expdate.toGMTString() + ';';
				}
				if ( path ) {
					cookieset += 'path=' + path + ';';
				}
				if ( domain ) {
					cookieset += 'domain=' + domain + ';';
				}
				document.cookie = cookieset;
			},
			get: function(name) {
				var match = ( document.cookie || ' ' ).match( new RegExp(name+' *= *([^;]+)') );
				return ( match )? match[1] : null;
			}
		};
		$._query = {
			parse: (function() {
				var matches, i, max;
				function resetdata(v) {
					if ( v ) {
						v = decodeURIComponent(v).replace(/\+/g, ' ');
						if ( v.indexOf(',') != -1 ) {
							v = v.split(',');
							for ( i = 0, max = v.length; i < max; i++ ) {
								v[i] = resetdata(v[i]);
							}
						} else if ( expint.test(v) ) {
							v = parseFloat(v);
						}
					}
					return v;
				}
				return function(query) {
					var rv = {};
					query = ( (/^#/).test(query) )? query.substring(query.lastIndexOf('#')+1)
							: ( !query || (/\?/).test(query) )? ( query || location.href ).split('?')[1]
							: query;
					if ( query ) {
						query = query.split('#')[0];
						while ( matches = expqueries.exec(query) ) {
							rv[matches[1]] = resetdata(matches[2]);
						}
						return rv;
					} else {
						return false;
					}
				}
			})(),
			make: function(data) {
				var key, newdata, datatype = typeof(data);
				if ( datatype == 'string' ) {
					return data;
				} else if ( datatype == 'object' ) {
					newdata = [];
					for ( key in data ) {
						newdata.push( key +'='+ encodeURIComponent(data[key]));
					}
					return newdata.join('&');
				}
			}
		};
	/*
	* easings.
	* Convert to JS from "Robert Penner's Easing Functions" http://www.robertpenner.com/easing/
	*/
		var easings = {
				linear : function(t,b,c,d){return c*t/d+b;},
				easeInQuad : function(t,b,c,d){return c*(t/=d)*t+b;},
				easeOutQuad : function(t,b,c,d){return -c*(t/=d)*(t-2)+b;},
				easeInOutQuad : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return -c/2*((--t)*(t-2)-1)+b;},
				easeOutInQuad : function(t,b,c,d){if(t < d/2)return easings.easeOutQuad(t*2,b,c/2,d);return easings.easeInQuad((t*2)-d,b+c/2,c/2,d);},
				easeInCubic : function(t,b,c,d){return c*(t/=d)*t*t+b;},
				easeOutCubic : function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},
				easeInOutCubic : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},
				easeOutInCubic : function(t,b,c,d){if(t<d/2)return easings.easeOutCubic(t*2,b,c/2,d);return easings.easeInCubic((t*2)-d,b+c/2,c/2,d);},
				easeInQuart : function(t,b,c,d){return c*(t/=d)*t*t*t+b;},
				easeOutQuart : function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b;},
				easeInOutQuart : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return -c/2*((t-=2)*t*t*t-2)+b;},
				easeOutInQuart : function(t,b,c,d){if(t<d/2)return easings.easeOutQuart(t*2,b,c/2,d);return easings.easeInQuart((t*2)-d,b+c/2,c/2,d);},
				easeInQuint : function(t,b,c,d){return c*(t/=d)*t*t*t*t+b;},
				easeOutQuint : function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},
				easeInOutQuint : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},
				easeOutInQuint : function(t,b,c,d){if(t<d/2)return easings.easeOutQuint(t*2,b,c/2,d);return easings.easeInQuint((t*2)-d,b+c/2,c/2,d);},
				easeInSine : function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b;},
				easeOutSine : function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},
				easeInOutSine : function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b;},
				easeOutInSine : function(t,b,c,d){if(t<d/2)return easings.easeOutSine(t*2,b,c/2,d);return easings.easeInSine((t*2)-d,b+c/2,c/2,d);},
				easeInExpo : function(t,b,c,d){return (t==0)? b : c*Math.pow(2,10*(t/d-1))+b-c*0.001;},
				easeOutExpo : function(t,b,c,d){return (t==d)? b+c : c*1.001*(-Math.pow(2,-10*t/d)+1)+b;},
				easeInOutExpo : function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b-c*0.0005;return c/2*1.0005*(-Math.pow(2,-10*--t)+2)+b;},
				easeOutInExpo : function(t,b,c,d){if(t<d/2)return easings.easeOutExpo(t*2,b,c/2,d);return easings.easeInExpo((t*2)-d,b+c/2,c/2,d);},
				easeInCirc : function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;},
				easeOutCirc : function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},
				easeInOutCirc : function(t,b,c,d){if((t/=d/2)<1)return -c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},
				easeOutInCirc : function(t,b,c,d){if (t<d/2)return easings.easeOutCirc(t*2,b,c/2,d);return easings.easeInCirc((t*2)-d,b+c/2,c/2,d);},
				easeInElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},
				easeOutElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return (a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);},
				easeInOutElastic : function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;var s,p=d*(.3*1.5),a=0;var s,p=(!p||typeof(p)!='number')? d*(.3*1.5) : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},
				easeOutInElastic : function(t,b,c,d,a,p){if (t<d/2)return easings.easeOutElastic(t*2,b,c/2,d,a,p);return easings.easeInElastic((t*2)-d,b+c/2,c/2,d,a,p);},
				easeInBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*(t/=d)*t*((s+1)*t-s)+b;},
				easeOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},
				easeInOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},
				easeOutInBack : function(t,b,c,d,s){if(t<d/2)return easings.easeOutBack(t*2,b,c/2,d,s);return easings.easeInBack((t*2)-d,b+c/2,c/2,d,s);},
				easeInBounce : function(t,b,c,d){return c-easings.easeOutBounce(d-t,0,c,d)+b;},
				easeOutBounce : function(t,b,c,d){if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;},
				easeInOutBounce : function(t,b,c,d){if(t<d/2)return easings.easeInBounce(t*2,0,c,d)*.5+b;else return easings.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b;},
				easeOutInBounce : function(t,b,c,d){if(t<d/2)return easings.easeOutBounce(t*2,b,c/2,d);return easings.easeInBounce((t*2)-d,b+c/2,c/2,d);}
			},
			easing,
	/*
	* css transition cubic-bezier
	* from "Ceaser - CSS Easing Animation Tool - Matthew Lein" http://matthewlein.com/ceaser/
	*/
			cubicbeziers = {
				linear: '0.250, 0.250, 0.750, 0.750',
				ease: '0.250, 0.100, 0.250, 1.000',
				'ease-in': '0.420, 0.000, 1.000, 1.000',
				'ease-out': '0.000, 0.000, 0.580, 1.000',
				'ease-in-out': '0.420, 0.000, 0.580, 1.000',
				easeInQuad: '0.550, 0.085, 0.680, 0.530',
				easeInCubic: '0.550, 0.055, 0.675, 0.190',
				easeInQuart: '0.895, 0.030, 0.685, 0.220',
				easeInQuint: '0.755, 0.050, 0.855, 0.060',
				easeInSine: '0.470, 0.000, 0.745, 0.715',
				easeInExpo: '0.950, 0.050, 0.795, 0.035',
				easeInCirc: '0.600, 0.040, 0.980, 0.335',
				easeInBack: '0.600, -0.280, 0.735, 0.045',
				easeOutQuad: '0.250, 0.460, 0.450, 0.940',
				easeOutCubic: '0.215, 0.610, 0.355, 1.000',
				easeOutQuart: '0.165, 0.840, 0.440, 1.000',
				easeOutQuint: '0.230, 1.000, 0.320, 1.000',
				easeOutSine: '0.390, 0.575, 0.565, 1.000',
				easeOutExpo: '0.190, 1.000, 0.220, 1.000',
				easeOutCirc: '0.075, 0.820, 0.165, 1.000',
				easeOutBack: '0.175, 0.885, 0.320, 1.275',
				easeInOutQuad: '0.455, 0.030, 0.515, 0.955',
				easeInOutCubic: '0.645, 0.045, 0.355, 1.000',
				easeInOutQuart: '0.770, 0.000, 0.175, 1.000',
				easeInOutQuint: '0.860, 0.000, 0.070, 1.000',
				easeInOutSine: '0.445, 0.050, 0.550, 0.950',
				easeInOutExpo: '1.000, 0.000, 0.000, 1.000',
				easeInOutCirc: '0.785, 0.135, 0.150, 0.860',
				easeInOutBack: '0.680, -0.550, 0.265, 1.550'
			};

		for ( easing in easings ) {
			$.easing[easing] = (function(easingname) {
				return function(x, t, b, c, d) {
					return easings[easingname](t, b, c, d);
				}
			})(easing);
		}
		var
			poorbrowser = browser.ie && 9 > browser.ie,

			expint = /^-?[0-9\.]+$/,
			exprgb = /rgba?\(/,
			expisbody = /body/i,
			expiscolor = /color/i,
			expgetrgb = /rgba?\(([0-9]+), *([0-9]+), *([0-9]+)/,
			expqueries = /([^=&]+)=?([^=&]*)/g,

			transitionname = support.transition,
			transitionable = !!transitionname,
			transitionendnames = 'transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd',

			gettime = function() {
				return new Date().getTime();
			},

			isobject = $.isPlainObject,

			color = {
				getcode: function(target, property) {
					return this.tohex.apply( null, this.torgb( target, property, style.get(target, property) ) );
				},
				torgb: function(target, property, v) {
					var temp;
					if ( v == 'transparent' || v == 'rgba(0, 0, 0, 0)' ) {
						while ( !expisbody.test(target.nodeName) ) {
							target = target.parentNode;
							temp = style.get(target, property);
							if ( temp != 'transparent' && temp != 'rgba(0, 0, 0, 0)' ) {
								return this.torgb(target, property, temp);
							}
						}
						return [ 255, 255, 255 ];
					} else if ( v.match(exprgb) ) {
						v = v.match(expgetrgb);
						return [ parseInt(v[1]), parseInt(v[2]), parseInt(v[3]) ];
					} else {
						if ( v.length>5 ) {
							v = [ v.substr(1, 2), v.substr(3, 2), v.substr(5, 2) ];
						} else {
							v = [ v.substr(1, 1), v.substr(2, 1), v.substr(3, 1) ];
							v = [ v[0]+v[0], v[1]+v[1], v[2]+v[2] ];
						}
						return [
							parseInt( ( eval('0x'+v[0]) ).toString(10) ),
							parseInt( ( eval('0x'+v[1]) ).toString(10) ),
							parseInt( ( eval('0x'+v[2]) ).toString(10) )
						];
					}
				},
				tohex: function() {
					var temp, i = 0, rv = '';
					for ( ; i < 3; i++ ) {
						temp = Math.max( Math.min(255, arguments[i]), 0 ).toString(16);
						rv += ( 2 > temp.length )? '0'+temp : temp;
					}
					return '#'+rv;
				}
			},

			style = (function() {

				var
					supporttransform = support.transform,
					transforms = ['translate3d', 'translate', 'scale3d', 'scale', 'skew', 'skewX', 'skewY', 'rotate', 'rotateX', 'rotateY', 'rotateZ'],
					nex = '[e0-9\-\.]+', pxex = '(?:px)?', vex = '(?:(?:px|deg))?', xyzex = /(X|Y|Z)$/,
					expressions = {
						isxyztarget: /^(scale|scale3d|translate|translate3d)$/,
						nopx: /(zIndex)/
					},
					is3dtransform = /3d/, istranslate = /^translate/,
					isscale = /^scale/, isrotate = /^rotate/,
					isx = /X$/, isy = /Y$/,
					isstupidbrowser = browser.ie == 9,
					i = 0, max = transforms.length;

				for ( ; i < max; i++ ) {
					expressions[transforms[i]] = [
						new RegExp(transforms[i] + '\\(('+ nex +')'+ vex +'(?:, ('+ nex +')'+ vex +'(?:, ('+ nex +')'+ vex +')?)?'),
						new RegExp('('+transforms[i] + '\\()'+ nex + vex)
					];
					if ( !isrotate.test(transforms[i]) ) {
						expressions[transforms[i]][2] = new RegExp('('+transforms[i] + '\\('+ nex + vex +', )'+ nex + vex),
						expressions[transforms[i]][3] = new RegExp('('+transforms[i] + '\\('+ nex + vex +', '+ nex + vex +', )'+ nex + vex);
					}
				}

				function istransform(property) {
					property = css3(property);
					if ( (/^(matrix|translate|scale|rotate|skew|perspective)/).test(property) ) {
						return true;
					}
					return false;
				}

				function isxyztarget(property) {
					var check = property.match(expressions.isxyztarget);
					return ( check )? check[1] : false;
				}

				function issvg(target) {
					return window.SVGElement && target instanceof SVGElement;
				}

				function css3(property) {
					if ( istranslate.test(property) ) {
						if ( !support.translate ) {
							return (/X$/).test(property)? 'left' : 'top';
						} else if ( is3dtransform.test(property) && !support.translate3d ) {
							return property.replace('3d', '');
						}
					} else if ( isscale.test(property) ) {
						if ( is3dtransform.test(property) && !support.scale3d ) {
							return property.replace('3d', '');
						}
					}
					return property;
				}

				function ie9scale(target, property, value) {
					var temp = target.style[supporttransform].match(expressions.scale[0]),
						x, y;
					if ( !temp ) {
						return 1;
					} else {
						x = parseFloat(temp[1]);
						y = ( temp[2] !== undefined )? parseFloat(temp[2]) : x;
						if ( value !== undefined ) {
							if ( isx.test(property) ) {
								x = value;
							} else {
								y = value;
							}
							target.style[supporttransform] = target.style[supporttransform].replace(expressions.scale[0], 'scale('+ x +', '+ y);
						} else {
							return ( isx.test(property) )? x : y;
						}
					}
				}

				function get(target, property) {
					var rv, transform, xyz;
					property = css3(property);
					if ( istransform(property) ) {
						xyz = isxyztarget(property);
						if ( xyz ) {
							return get(target, xyz+'X');
						}
						transform = property;
						property = supporttransform;
					}
					if ( property == 'opacity' && !support.opacity ){
						property = 'filter';
					} else if ( property == 'scrollTop' ) {
						return target.scrollTop;
					}
					rv = (target) ? (issvg(target) && target.attributes[property]) ? parseInt(target.attributes[property].value) :
							(!target.style)? target[property] :
							(target.style[property])? target.style[property] :
								(target.currentStyle)? target.currentStyle[property] :
									document.defaultView.getComputedStyle(target, null)[property] : 0;
					if ( transform && supporttransform ) {
						xyz = transform.match(xyzex);
						xyz = ( xyz )? xyz[0] : '';
						if ( isrotate.test(transform) ) {
							rv = rv.match(expressions[transform][0]);
							return (!rv)? 0 : parseFloat(rv[1]);
						} else if ( isstupidbrowser && isscale.test(transform) ) {
							return ie9scale(target, transform);
						} else if( rv ) {
							rv = rv.match( expressions[transform.replace(xyzex, '')][0] );
							return (!rv)? ( isscale.test(transform) )? 1 : 0 : parseFloat(rv[( xyz == 'X' )? 1 : ( xyz == 'Y' )? 2 : 3]);
						}
					}
					if ( property == 'opacity' ) {
						return parseFloat(rv);
					}
					if ( property == 'filter' ) {
						rv = rv.match(/alpha *\( *opacity *[=:] *([0-9\.]+) *\)/i);
						rv = (rv)? parseFloat(rv[1]) : 1;
						return (rv || rv===0)? rv/100 : 1;
					}
					return (rv=='auto')? 0 : ((/(pt|px)$/).test(rv))? parseInt(rv) : rv;
				}

				function set(target, property, value) {
					var i, exist, transform, xyz;
					if ( typeof(property) == 'object' ) {
						for ( i in property) {
							style.set(target, i, property[i]);
						}
						return;
					}
					if ( value !== undefined ) {
						if ( issvg(target) && target.attributes[property] ) {
							target.attributes[property].value = value;
						} else if ( !target.style ) {
							target[property] = value;
						} else {
							property = css3(property);
							if ( istransform(property) && supporttransform ) {
								xyz = isxyztarget(property);
								if ( xyz ) {
									set(target, xyz+'X', value);
									set(target, xyz+'Y', value);
									set(target, xyz+'Z', value);
									return;
								}
								exist = target.style[supporttransform] || style.get(target, supporttransform);
								if (exist.indexOf('(') == -1) {
									exist = '';
								}
								if ( isrotate.test(property) ) {
									if ( !expressions[property][0].test(exist) ) {
										exist += property+'(0)';
									}
									target.style[supporttransform] = exist.replace(expressions[property][1], '$1'+ value +'deg');
								} else {
									transform = property.replace(xyzex, '');
									if ( !expressions[transform][0].test(exist) ) {
										exist += support[transform];
									}
									if ( isstupidbrowser && isscale.test(property) ) {
										ie9scale(target, property, value);
									} else {
										target.style[supporttransform] = exist.replace(
											expressions[transform][isx.test(property)? 1 : isy.test(property)? 2 : 3],
											'$1'+ value + ( isscale.test(transform)? '' : 'px' )
										);
									}
								}
							} else if ( property == 'opacity' ) {
								if ( !support.opacity ) {
									target.style.filter = ( value === '' )? '' : 'alpha(opacity='+(value*100)+')';
								} else {
									target.style.opacity = value;
								}
							} else if ( property == 'scrollTop' ) {
								target.scrollTop = value;
							} else {
								try {
									target.style[property] = ( value && !isNaN(value) && !expressions.nopx.test(property) )? value+'px' : value;
								} catch(e) {
									window.console && console.log(e.message+'('+target + ' : id="'+ target.id +'", class="'+ target.className +'", property="'+ property +'", value : "'+ value +'")');
								}

							}
						}
					}
				}

				return { get: get, set: set, istransform: istransform };

			})(),

			ani = (function() {

				var tweens = [],

					_fps = 60, _time = 1, _easing = 'easeOutCubic',

					nowframe = 0,
					totalframes = 0,
					starttime = 0,
					playing = false,

					getstyle = style.get, setstyle = style.set,

					torgb = color.torgb, tocolorcode = color.tohex,

					istransform = style.istransform,
					issplitxyztarget = style.issplitxyztarget,

					timer = null,
					timerdelay = 1000/_fps,

					isemptytween,

					i, max;

				function set(target, property, _option) {

					if ( !target ) {
						return;
					}

					if ( target.constructor == Array ) {
						for ( i = 0, max = target.length; i < max; i++ ) {
							set(target[i], property, _option);
						}
						return;
					}

					var tween,
						option = _option || {},
						time = option.time || _time,
						frames = Math.round( _fps*time ),
						delay = Math.round( _fps*( option.delay || 0 ) ),
						easing = option.easing || _easing,
						p, rounding, fromcolor, tocolor, rgb, i, temp,
						values = {};

					for ( p in property ) {
						rounding = ( option.rounding === false || p == 'opacity' )? false : !istransform(p);
						if ( property[p].constructor == Array ) {
							values[p] = property[p];
							frames = Math.max(frames, Math.round( _fps*values[p].length/_fps ));
						} else if ( expiscolor.test(p) ) {
							fromcolor = torgb(target, p, getstyle(target, p));
							tocolor = torgb(target, p, property[p]);
							rgb = [];
							for ( i = 0; i < 3; i++ ) {
								rgb[i] = getvalues(p, fromcolor[i], tocolor[i], frames, easing, true);
							}
							values[p] = [];
							for ( i = 0; i < frames; i++ ) {
								values[p][i] = tocolorcode(rgb[0][i], rgb[1][i], rgb[2][i]);
							}
						} else {
							values[p] = getvalues(p, getstyle(target, p), property[p], frames, easing, rounding);
						}
					}

					stop(target, property);

					tweens.push({
						el: target,
						vs: values,
						sf: option.bystep ? -1-delay : nowframe + delay,
						tf: frames,
						bs: option.bystep,
						es: option.onstart,
						eu: option.onupdate,
						ee: option.onend,
						lp: option.loop
					});

					totalframes = Math.max( totalframes, nowframe + delay + frames + _fps );

					if ( !playing ) {
						starttime = gettime();
						timer = window.requestAnimationFrame(action);
						playing = true;
					}

				}

				function stop(target, property, _jumptoend) {

					var i = 0, max = tweens.length,
						tween, p, properties;

					if ( property ) {
						if ( typeof(property) != 'string' ) {
							properties = [];
							for ( p in property ) {
								properties.push(p);
							}
							properties = properties.join(' ')+' ';
						} else {
							properties = property+' ';
						}
					}

					isemptytween = true;
					for ( ; i < max; i++ ) {
						tween = tweens[i];
						if ( tween && tween.el == target ) {
							if ( property ) {
								for ( p in tween.vs ) {
									if ( properties.indexOf(p+' ') != -1 ) {
										if ( _jumptoend ) {
											setstyle(tween.el, p, tween.vs[p][tween.tf-1]);
										}
										delete tween.vs[p];
									} else {
										isemptytween = false;
									}
								}
							}
							if ( isemptytween ) {
								if ( _jumptoend ) {
									jumptoend(tweens[i]);
								}
								tweens[i] = null;
							}
						}
					}

				}

				function jumptoend(tween) {
					var p, lastframe = tween.tf-1;
					for ( p in tween.vs ) {
						setstyle(tween.el, p, tween.vs[p][lastframe]);
					}
					tween.eu && tween.eu.call( tween.el, geteventvalue(tween, 'update', lastframe, lastframe) );
					tween.ee && tween.ee.call( tween.el, geteventvalue(tween, 'end', lastframe, lastframe) );
				}

				function sprite(target, framewidth, totalframe, property, time, loop) {
					var currentframe, temp = { };
					totalframe--;
					function onupdate(e) {
						var frame = Math.round(totalframe*e.v);
						if ( currentframe != frame ) {
							style.set(target, property, -framewidth*frame);
							currentframe = frame;
						}
					}
					function play() {
						_stop();
						set(temp, { v: 1 }, { time: time, loop: loop, rounding: false, easing: 'linear', onupdate: onupdate });
					}
					function _stop() {
						stop(temp);
						currentframe = -1;
						temp.v = 0;
					}
					return { play: play, stop: _stop }
				}

				function action() {
					nowframe = Math.floor( ( gettime()-starttime ) / timerdelay );
					if ( totalframes > nowframe ) {
						setproperties(nowframe);
						timer = window.requestAnimationFrame(action);
					} else {
						window.cancelAnimationFrame(timer);
						setproperties(totalframes);
						nowframe = totalframes = 0;
						tweens = [];
						playing = false;
					}
				}

				function setproperties(step) {

					var tween, mystep, myframes,
						p, i = 0, max = tweens.length;

					for ( ; i < max; i++ ) {

						tween = tweens[i];

						if ( tween && step >= tween.sf ) {

							myframes = tween.tf-1;

							if (tween.bs) {
								mystep = tween.sf = tween.sf+1;
							} else {
								mystep = Math.min( myframes, step-tween.sf );
							}

							if (mystep > -1) {

								if ( tween.es ) {
									tween.es.call( tween.el, geteventvalue(tween, 'start', 0, myframes) );
									delete tween.es;
								}

								if (!tweens[i]) {
									continue;
								}

								for ( p in tween.vs ) {
									setstyle(tween.el, p, tween.vs[p][mystep]);
								}

								tween.eu && tween.eu.call( tween.el, geteventvalue(tween, 'update', mystep, myframes) );

								if ( mystep == myframes ) {
									tween.ee && tween.ee.call( tween.el, geteventvalue(tween, 'end', mystep, myframes) );
									if ( tween.lp ) {
										tween.sf = tween.bs ? -1 : nowframe;
										totalframes += tweens[i].tf+_fps;
										if ( tween.lp == 'yoyo' ) {
											for ( p in tween.vs ) {
												tween.vs[p].reverse();
											}
										}
									} else {
										tweens[i] = null;
									}
								}
							}

						}
					}

				}

				function geteventvalue(tween, type, step, totalstep) {
					var values = tween.vs,
						eventvalue = { type: type, percent: step/totalstep },
						p;
					for ( p in values ) {
						eventvalue[p] = values[p][step];
					}
					return eventvalue;
				}

				function getvalues(property, from, to, totalframe, easing, rounding) {
					var nv, rv = [], gap = to-from, i = 0;
					totalframe--;
					for ( ; i <= totalframe; i++ ) {
						nv = easings[easing](i, from, gap, totalframe);
						rv.push( ( rounding )? Math.round(nv) : nv );
					}
					return rv;
				}

				return { set: set, stop: stop, sprite: sprite, getvalues: getvalues };

			})();


		$.fn._css = function(property, value) {
			var p;
			if ( isobject(property) ) {
				for ( p in property ) {
					this._css(p, property[p]);
				}
			} else if ( value !== undefined ) {
				this.each(function() {
					style.set(this, property, value);
				});
			} else {
				return style.get(this[0], property);
			}
			return this;
		}

		$.fn._animate = function(properties, d, e, c) {
			var delaybase, options = assignanimationoptions(d, e, c);
			if (options.autodelay) {
				delaybase = options.delay;
			}
			return this.each(function(i) {
				if (i) {
					options.step = options.complete = null;
				}
				if (delaybase) {
					options.delay = i*delaybase;
				}
				ani.set(this, properties, options);
			});
		}

		$.fn._spriteanimation = function sprite(framewidth, totalframe, property, time, loop) {
			return this.each(function(i) {
				$(this).data('spriteanimation', ani.sprite(this, framewidth, totalframe, property, time, loop));
			});
		}

		$._getanimationvalues = ani.getvalues;

		$.fn._stop = function(property, jumptoend) {
			if ( property === true || property === false ) {
				jumptoend = property;
				property = null;
			}
			return this._css(transitionname, '').each(function() {
				ani.stop(this, property, jumptoend);
			});
		}

		$.fn._transition = function(properties, d, e, c) {
			var $target = this,
				options = assignanimationoptions(d, e, c),
				p, setting, onend, onendfired;
			if ( transitionable ) {
				setting = [];
				for ( p in properties ) {
					if ( style.istransform(p) ) {
						p = support.transform;
					}
					setting.push([killcamels(p), ' ', options.time, 's ', (options.delay)? options.delay+'s ' : '', 'cubic-bezier(', ( cubicbeziers[options.easing] || cubicbeziers.ease ), ')'].join(''));
				}
				setting = setting.join(',');
				onend = options.onend;
				options.onend = function() {
					if ( !onendfired ) {
						$target.css(transitionname, '').unbind(transitionendnames, options.onend);
						setTimeout(function() {
							onend && onend.call($target[0]);
						}, 0);
						onendfired = true;
					}
				}
				setTimeout(function() {
					$target.each(function() {
						$(this).css(transitionname, setting)._css(properties).bind(transitionendnames, options.onend);
					});
				}, 0);
				return this;
			} else {
				return this.each(function() {
					ani.set(this, properties, options);
				});
			}
		}

		$.fn._fill = function($area, sizes) {
			return this.each(function() {
				filling(this, $area, sizes);
			});
		}

		$.fn.decideClass = function(classname, condition) {
			return this[condition ? 'addClass' : 'removeClass'](classname);
		}

		function filling(target, $area, _sizes) {

			if ( !$area ) {
				$area = $(target.parentNode);
			}
			if ( !$area.length ) {
				return false;
			}

			var position,
				sizes = _sizes || {},
				targetwidth = sizes.width || target.offsetWidth, targetheight = sizes.height || target.offsetHeight,
				areawidth = sizes.areawidth || $area[0].offsetWidth, areaheight = sizes.areaheight || $area[0].offsetHeight,
				rate, newwidth, newheight, marginleft, margintop;

			if (!targetwidth || !targetheight || !areawidth || !areaheight) {
				return false;
			}

			position = $area._css('backgroundPosition');
			if ( position ) {
				position = position.split(' ');
				position[0] = position[0] == 'center' ? 0.5 : position[0].indexOf('%') != -1 ? parseInt(position[0])/100 : 0;
				position[1] = position[1] == 'center' ? 0.5 : position[1].indexOf('%') != -1 ? parseInt(position[1])/100 : 0;
			}

			rate = ( targetwidth > targetheight )? areaheight/targetheight : areawidth/targetwidth;
			rate = ( areaheight > Math.round(targetheight*rate) )? areaheight/targetheight : ( areawidth > targetwidth*rate )? areawidth/targetwidth : rate;

			newwidth = Math.max(areawidth, Math.round(targetwidth*rate));
			newheight = Math.max(areaheight, Math.round(targetheight*rate));

			if (position) {
				if (position[0]) {
					marginleft = (areawidth-newwidth)*position[0];
				}
				if (position[1]) {
					margintop = (areaheight-newheight)*position[1];
				}
			}

			$(target).css({
				width: newwidth,
				height: newheight,
				marginLeft: marginleft || '',
				marginTop: margintop || ''
			});

		}

		function assignanimationoptions(d, e, c) {
			var options;
			if ( isobject(d) ) {
				options = { time: d.duration, loop: d.loop, delay: d.delay, bystep: d.bystep, rounding: d.rounding, easing: d.easing, onstart: d.start, onupdate: d.step, onend: d.complete };
			} else if ( typeof(c) == 'function' ) {
				options = { time: d, easing: e, onend: c };
			} else if ( typeof(e) == 'function' ) {
				options = ( typeof(d) == 'number' )? { time: d } : { easing: d }
				options.onend = e;
			} else if ( typeof(d) == 'function' ) {
				options = { onend: d };
			}
			if ( options.time === undefined ) {
				options.time = 400;
			}
			options.time /= 1000;
			if (options.delay && !isNaN(parseInt(options.delay))) {
				if (typeof(options.delay) == 'string') {
					options.autodelay = true;
				}
				options.delay = parseInt(options.delay)/1000;
			}
			return options;
		}

		function killcamels(property) {
			return property.replace(/([A-Z])/g, '-$1').toLowerCase();
		}

		$._event = (function() {

			var
				supporttouch = support.touch,
				typemap = supporttouch ? {mousedown: 'touchstart', mousemove: 'touchmove', mouseup: 'touchend'} : {};

			return {
				gettype: function(types) {
					var type, newtypes;
					if (supporttouch) {
						newtypes = {};
						for (type in types) {
							newtypes[typemap[type] || type] = types[type];
						}
						return newtypes;
					}
					return types;
				},
				getpoint: function(e) {
					e = e.originalEvent;
					if (e.touches || e.changedTouches) {
						return [
							e.touches[0] ? e.touches[0].pageX : e.changedTouches[0].pageX,
							e.touches[0] ? e.touches[0].pageY : e.changedTouches[0].pageY
						];
					}
					return [e.clientX, e.clientY];
				}
			}

		})();
		
		div = null;

		$(document.documentElement)
			.addClass(browser.os)
			.addClass(browser.chrome ? 'chrome' : browser.firefox ? 'firefox' : browser.opera ? 'opera' : browser.safari ? 'safari' : browser.ie ? 'ie ie'+browser.ie : '')
			.addClass(browser.webkit ? 'webkit' : '')
			.addClass(browser.ie && 8 > browser.ie ? 'ie8' : '')
			.addClass(browser.ios ? 'ios' : browser.android ? 'android' : '')
			.addClass(support.transition ? 'transition' : 'notransition')
			.addClass(support.transform ? 'transform' : 'notransform')
			.addClass(support.backgroundsize ? 'backgroundsize' : 'nobackgroundsize')
			.addClass(support.rgba ? 'rgba' : 'norgba')
			.addClass(support.svgimage ? 'svg' : 'nosvg')
			.addClass(support.pointerevents ? 'pointerevents' : 'nopointerevents')
			.addClass(support.opacity ? 'opacity' : 'noopacity');

		if (!window.console) {
			window.console = {};
			window.console.log = window.console.table = window.console.error = window.console.clear = function() {};
		}

		window.trace = (function() {
		
			var box = null,
				number = 1;
		
			function tostring(v) {
				var rv, i, max;
				if ( v === null ) {
					return 'null';
				} else if ( v === undefined ) {
					return 'undefined';
				} else if ( v == window ) {
					return '[object Window]';
				} else if ( v == document ) {
					return '[object HTMLDocument]';
				} else if ( v === true || v === false || typeof(v) == 'number' || typeof(v) == 'function' ) {
					return v;
				} else if ( typeof(v) == 'object' ) {
					if ( v.constructor == Array ) {
						rv = [];
						for ( i = 0, max = v.length; i < max; i++ ) {
							rv.push(tostring(v[i]));
						}
						return '['+ rv.join(',') +']';
					} else if ( v.constructor == String ) {
						return '"'+ v.replace(/\</g, '<') +'"';
					} else if ( v.constructor == Boolean || v.constructor === Number || v.constructor == RegExp ) {
						return v;
					} else if ( v.constructor == Date ) {
						return 'Date('+ v.getTime() +', '+ v +')';
					} else if ( v.each && v.bind ) {
						rv = [];
						for ( i = 0, max = v.length; i < max; i++ ) {
							rv.push(i +':'+ tostring(v[i]));
						}
						rv.push('length:'+ max);
						return '${'+ rv.join(',') +'}';
					} else if ( v.nodeType ) {
						return '[object '+ v.nodeName.toUpperCase() +' Element]';
					} else {
						rv = [];
						for ( i in v ) {
							rv.push('\''+ i +'\':'+ tostring(v[i]));
						}
						return '{'+ rv.join(',') +'}';
					}
				} else {
					return '"'+ ((v.replace)? v.replace(/\</g, '<') : v) +'"';
				}
			}
		
			function create() {
				if ( !box ) {
					box = document.createElement('ol');
					box.style.cssText = 'position:absolute;left:5px;top:5px;max-width:75%;font-family:verdana;font-size:9px;color:#000;line-height:1.35em;margin:0;padding:3px 3px 2px 38px;border:1px solid #000;background:#fff;display:none;z-index:10000;opacity:0.75;filter:alpha(opacity=75);';
					box.onclick = clear;
					addbox();
				}
			}

			function addbox() {
				if ( document.body ) {
					document.body.appendChild(box);
				} else {
					setTimeout(addbox, 10);
				}
			}

			function clear(){
				if ( box ) {
					box.innerHTML = '';
					box.style.display = 'none';
					number = 1;
				}
			}

			return {
				log: function() {
					for ( var i = 0, max = arguments.length, v = [], li = document.createElement('li'); i < max; i++ ) {
						v.push(tostring(arguments[i]));
					}
					li.style.cssText = 'list-style:decimal;margin-bottom:1px;padding:2px 3px 3px;background:'+ ((number%2)? '#eee;' : '#ddd;');
					li.innerHTML = v.join(', ');
					create();
					box.appendChild(li);
					box.style.display = 'block';
					number++;
				},
				fixed: function(flag) {
					create();
					box.style.position = ( flag === false )? 'absolute' : 'fixed';
				},
				clear: clear
			}
		
		})();

	})(window.jQuery);
	/*
	* x slider with jquery-d
	* by @psyonline ( http://www.psyonline.kr/, majorartist@gmail.com )
	*/
	;(function($) {

		'use strict';

		if ( !$ || $.fn.xlider ) {
			return;
		}

		var
			$win = $(window),
			$doc = $(document.documentElement),
			$body = $(document.body),

			isMobile = $.browser.mobile,
			isIOS = $.browser.ios,
			isAndroid = $.browser.android,
			supportTransform = $.support.transform,
			supportTransition = $.support.transition,

			getEventType = $._event.gettype,
			getEventPoint = $._event.getpoint,

			regExpIsUL = /ul/i,

			windowWidth,
			resizeFunctions = [],

			last;

		$.fn.xlider = function(_option, value, pretendTo, noAnimation) {
			var forState;
			if (!_option || $.isPlainObject(_option)) {
				this.each(function() {
					xlider($(this), _option);
				});
			} else if (typeof(_option) == 'string') {
				if (_option == 'prev' || _option == 'next') {
					noAnimation = value;
				} else if (_option == 'toggleAuto') {
					forState = {v: 0, value: value};
					$(this).trigger('xlider-'+_option, forState, value);
					return forState.v;
				} else if (_option == 'change' || typeof pretendTo != 'string') {
					noAnimation = pretendTo;
				}
				this.trigger('xlider-'+_option, {to: value, pretendTo: pretendTo, noAnimation: noAnimation});
			}
			return this;
		}

		$win.resize(function() {
			windowWidth = $doc[0].clientWidth;
			$.each(resizeFunctions, function() {
				this();
			});
		});

		function xlider($box, option) {

			var option = option || {},

				endless = option.endless,
				arrows = option.arrows,
				arrowsTag = arrows ? arrows.constructor == Array ? 'pre' : typeof arrows == 'string' ? arrows : 'button' : '',
				paging = option.paging,
				pagingTag = paging ? paging.length && paging[0].nodeType ? 'pre' : typeof paging == 'string' ? paging : 'button' : '',
				useSwipe = option.swipe !== false,
				useFade = option.fade,
				animate = option.animate !== false,
				animateDuration = option.duration,
				autoPlay = option.autoPlay,
				useTransition = option.useTransition && supportTransition,
				numDisplay = option.numDisplay || 1,
				newstyle = option.newstyle || false,
				maxview = option.maxview || 5,
				mode = option.mode || 'all',

				eventMove = option.onMove,
				eventChange = option.onChange,
				eventChangeEnd = option.onChangeEnd,
				eventreset = option.reset,

				$wrapper,
				$arrows, $prev, $next,
				$paging, $pagingItems,

				$items = $box.children(),
				$fakeItem,

				$blocker,

				boxWidth, itemWidth, moveSize,
				downX, downY, baseX, swipeAngle, startTime, moved, realX, setX,

				multiMode = numDisplay > 1,
				classicMode = false,

				clickAble = true,
				blockerAdded = false,
				checkStart = false,
				changePhone = false,
				dragPoint = true,

				autoPlaying = !!autoPlay,
				autoPlayTimer = null,

				wrapperClassName = 'xlider-wrapper',

				zIndex = 0,
				limitCount = 1,
				lastX = 0,
				resetMover,
				realAni = true,
				resetting = false,

				i = 0, max = $items.length,

				nowPage = option.defaultPage && option.defaultPage > -1 ? Math.min(max-1, option.defaultPage) : 0,

				aniOption = {
					slide: {queue: false, step: onMove, easing: 'easeOutCubic', complete: changeEnd},
					back: {queue: false, step: onMove, easing: 'easeOutCubic', complete: changeEnd},
					fade: {queue: false, easing: 'easeOutSine', complete: changeEnd}
				};

			if (VD.isPoorBrowser) {
				newstyle = false;
			}


			if (!$body.length) {
				$body = $(document.body);
			}

			if (!max) {
				return;
			}

			if (useFade) {
				useSwipe = false;
				endless = true;
			}

			if (regExpIsUL.test($box[0].nodeName)) {
				$wrapper = $box.addClass(wrapperClassName);
				$box = $wrapper.parent();
			} else if (2 > max && regExpIsUL.test($items[0].nodeName)) {
				$wrapper = $items.addClass(wrapperClassName);
				$items = $items.find('> li');
				max = $items.length;
			}
			if (!$wrapper) {
				$wrapper = $('<div class="'+ wrapperClassName +'" />').appendTo($box);
			}
			if ($wrapper.css('position') == 'static') {
				$wrapper.css('position', 'relative');
			}
			if ($wrapper.css('zIndex') == 'auto') {
				$wrapper.css('zIndex', 0);
			}
			$box.css('overflow', 'hidden');

			if (!useFade && endless && 2 > max) {
				endless = false;
			}

			if (arrows && max > 1) {
				if (arrowsTag == 'pre') {
					$prev = arrows[0];
					$next = arrows[1];
				} else {
					$arrows = $('<p class="arrows" />').appendTo($box);
					$prev = $('<'+ arrows +' class="prev">Prev</'+ arrows +'>').appendTo($arrows);
					$next = $('<'+ arrows +' class="next">Next</'+ arrows +'>').appendTo($arrows);
				}
				$prev.attr('data-flag', 'prev').click(toPrev);
				$next.attr('data-flag', 'next').click(toNext);
			} else if (2 > max) {
				if (arrows == 'pre') {
					arrows[0].remove();
					arrows[1].remove();
				}
				arrows = null;
			}

			if (paging) {
				if (pagingTag == 'pre') {
					$paging = $(paging);
					$pagingItems = $paging.children();
				} else {
					$paging = $('<p class="paging" />').appendTo($box);
					$pagingItems = [];
					for (i = 0; i < max; i++) {
						$pagingItems[i] = $('<'+pagingTag+' />');
						$pagingItems[i][0].innerHTML = i+1;
					}
				}
			}

			for (i = 0; i < max; i++) {
				$items[i] = $($items[i]);
				if (!newstyle) {
					$items[i] = $($items[i]).css({left: useFade ? 0 : '200%', top: 0, width: '100%', display: i == nowPage ? '' : 'none'});
					$items[i].appendTo($wrapper);
					$items[i].find('a, button, input, textarea').attr('data-xlider-page', i).focus(itemFocusablesFocused);
				} 
				if ($items[0].parent().parent().hasClass('g-contents')) {
					$items[i].addClass('hide');
				}
				if (paging) {
					$pagingItems[i] = $($pagingItems[i]).attr('data-page', i)
						.click(pagingClick)
						.appendTo($paging);
				}
			}

			function settingView() {
				if (newstyle) {
					if ($('html').hasClass('s'+mode) || (mode == 'all')) {
						if (!resetting) {
							if ($wrapper&&$wrapper.length) {
								for (i = 0; i < max; i++) {
									var actCounr = Math.ceil(maxview / 2);
									$items[i] =  $($items[i]).attr('data-call', i);
									if (i < actCounr) {
										var count = Math.ceil((max - 1) - i);
										$wrapper.prepend($items[count]);
									}
								}
							}
							resetting = true;
						}
						if ($wrapper&&$wrapper.length) {
							newcenterSet();
						}
					} else {
						if (resetting) {
							if ($wrapper&&$wrapper.length) {
								$wrapper.html('');
								for (i = 0; i < max; i++) {
									$items[i] =  $($items[i]).attr('data-call', i);
									$items[i].appendTo($wrapper);
									if (i == max-1) {
										eventreset && eventreset.call();
									}
								}
							}
							resetting = false;
						}
					}
				}
				
			}

			function pagingClick() {
				if (!newstyle) {
					jump({to: parseInt(this.getAttribute('data-page'))});
				} else {
					var page = $(this).attr('data-page');
					if (!clickAble || page == nowPage) {
						return false;
					}
					var center = $wrapper.find('> li.show').index();
					var allC = [];
					var full = $pagingItems.length;
					for (i = 0;i<full;i++) {
						allC[i] = $wrapper.find('> li').eq(i).attr('data-call');
					}
					var clickPAge = allC.indexOf(page);
					var countPage = clickPAge - center;
					if (realAni) {
						changeNew(countPage);
					}
				}
				return false;
			}

			function changeNew(idx) {
				realAni = false;
				var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
				var limit = $wrapper.find(' > li').eq(max-1).innerWidth() + (limitMg * 2);
				var thisinDex = $wrapper.find(' > li.show').index();
				var currinDex = $wrapper.find(' > li').eq(thisinDex+idx).attr('data-call');
				var field;
				var movedRe;
				var limitNew = 1;
				var half = limit / 2;
				var newCall;
				var transX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					transX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				var caseOne = Math.abs(idx);
				var noX = 0;
				var fakeX = false;
				var time = 0;
				if ($.browser.mobile) {
					time = 10;
				}
				var remake = function () {
					if (idx > 0) {
						field = 0;
					} else {
						field = max - 1;
					}
					var lastCont = $wrapper.find('> li').eq(field).attr('data-call');
					$wrapper.find('> li').eq(field).remove();
					if (field != 0) {
						$wrapper.prepend($items[lastCont]);
					} else {
						$wrapper.append($items[lastCont]);
					}
					if (idx > 0) {
						noX = transX + (Math.abs(limit));
					} else {
						noX = transX - (Math.abs(limit));
					}
					limitNew++;
					fakeX = true;
				}
				newCall = setInterval(function () {
					var noWtransX = Math.ceil($wrapper.css('transform').split(',')[4]);
					if ($.browser.ie > 9) {
						noWtransX = Math.ceil($wrapper.css('transform').split(',')[12]);
					}
					if (fakeX) {
						movedRe = transX;
						fakeX = false;
					} else {
						if (idx > 0) {
							movedRe = noWtransX-(20);
						} else {
							movedRe = noWtransX+(20);
						}
					}
					$wrapper._css({translate3dX:movedRe});
					var noWtransX2 = Math.ceil($wrapper.css('transform').split(',')[4]);
					if ($.browser.ie > 9) {
						noWtransX2 = Math.ceil($wrapper.css('transform').split(',')[12]);
					}
					var movedRecheck = noWtransX2-transX;
					if (isMobile && changePhone) {
						movedRecheck = Math.abs(movedRecheck)+Math.abs(setX-transX);
					}
					if ((limit) < Math.abs(movedRecheck)) {
						remake();
					}
					if (limitNew == caseOne+1) {
						clearInterval(newCall);
						if (isMobile && changePhone) {
							$wrapper._css({translate3dX:setX});
						} else {
							$wrapper._css({translate3dX:transX});
						}
						nowPage = currinDex;
						setButtons();
						changeEnd();
						changePhone = false;
						if (isMobile) {
							setTimeout(function () {
								realAni = true;
								dragPoint = true;
							}, 100);
						} else {
							realAni = true;
							dragPoint = true;
						}
					}
				}, time);
			}

			if (useSwipe) {
				if (window.navigator.pointerEnabled) {
					$wrapper[0].style.cssText += 'touch-action: pan-y;';
				} else if (window.navigator.msPointerEnabled ){
					$wrapper[0].style.cssText += '-ms-touch-action: pan-y;';
				}
				$wrapper.bind(getEventType({mousedown: down}));
				$wrapper.bind('selectstart dragstart', function() {
					return false;
				});
			}

			function newcenterSet(idt) {
				if (newstyle) {
					var settingX = Math.ceil($wrapper.css('transform').split(',')[4]);
					if ($.browser.ie > 9) {
						settingX = Math.ceil($wrapper.css('transform').split(',')[12]);
					}
					var center = $win.width() / 2;
					var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
					var limit = $wrapper.find(' > li').eq(max-1).innerWidth();
					var thisIndex = $wrapper.find(' > li.show').offset().left;
					var moveAni = thisIndex + limit/2 - center;
					if (checkStart) {
						moveAni = thisIndex + limit/2 - center - settingX;
					}
					$wrapper._animate({translate3dX:-moveAni}, {duration: 550, easing: 'easeOutCubic', force3D: true});
					checkStart = true;
				}
			}

			

			$box.bind('xlider-prev', function(e, option) {
				toPrev(e, false, option.noAnimation);
			});
			$box.bind('xlider-next', function(e, option) {
				toNext(e, false, option.noAnimation);
			});
			$box.bind('xlider-jump', function(e, option) {
				jump(option);
			});
			$box.bind('xlider-change', function(e, option) {
				change(option);
			});
			$box.bind('xlider-toggleAuto', function(e, forState) {
				forState.v = toggleAuto(forState.value);
			});
			$box.bind('xlider-remove', function(e) {
				for (i = 0; i < max; i++) {
					$items[i].find('a, button, input, textarea').removeAttr('data-xlider-page');
					if (!regExpIsUL.test($wrapper[0].nodeName)) {
						$items[i].appendTo($box);
					}
					if (paging) {
						if (pagingTag != 'pre') {
							$pagingItems[i].remove();
						} else {
							$pagingItems[i].unbind('click');
						}
					}
				}
				$wrapper._css({position: '', translate3dX: ''}).removeClass(wrapperClassName);
				$wrapper.unbind(getEventType({mousedown: down}));
				if (!regExpIsUL.test($wrapper[0].nodeName)) {
					$wrapper.remove();
				}
				if (paging && pagingTag != 'pre') {
					$paging.remove();
				}
				if (arrows) { 
					if (arrowsTag != 'pre') {
						$prev.remove();
						$next.remove();
					} else {
						$prev.unbind('click');
						$next.unbind('click');
					}
				}
				$fakeItem && $fakeItem.remove();
				$blocker.remove();
				$box.unbind('xlider-prev xlider-next xlider-jump xlider-change xlider-toggleAuto xlider-remove');
				$box = $wrapper = $prev = $next = $pagingItems = null;
				for (i = 0, max = resizeFunctions.length; i < max; i++) {
					if (resizeFunctions[i] == resize) {
						resizeFunctions.splice(i, 1);
						break;
					}
				}
			});

			$blocker = $('<div class="blocker" style="position:absolute;left:0;top:0;width:100%;height:100%;background:#000;" />').css('opacity', 0);

			setButtons();
			resize();
			changeEnd();

			resizeFunctions.push(resize);

			function down(e) {

				clearAutoPlay();

				if (!clickAble) {
					realAni
				}

				downX = baseX = getEventPoint(e)[0];
				returnX = downX;

				if (isIOS && (15 > downX || downX > windowWidth-15)) {
					return true;
				}

				downY = getEventPoint(e)[1];
				startTime = new Date().getTime();

				moved = 0;
				swipeAngle = false;
				if  (!realAni && isMobile) {
					return false;
				}
				if (!dragPoint) {
					return false;
				}
				if ($.support.transform) {
					realX = Math.ceil($wrapper.css('transform').split(',')[4]);
					setX = Math.ceil($wrapper.css('transform').split(',')[4]);
					if ($.browser.ie > 9) {
						realX = Math.ceil($wrapper.css('transform').split(',')[12]);
						setX = Math.ceil($wrapper.css('transform').split(',')[12]);
					}
				}
				if (realX == undefined) {
					realX = 0;
					setX = 0;
				}
				$doc.bind(getEventType({mousemove: move, mouseup: up}));

			}

			/* newStyle */
			var mapword = '',
				recount = true,
				returnX;

			function move(e) {
				var x = getEventPoint(e)[0],
					y = getEventPoint(e)[1],
					nowTime = new Date().getTime();


				if (swipeAngle === false) {
					swipeAngle = Math.abs((Math.atan2(downX-x, downY-y)*180)/Math.PI);
					if (45 > swipeAngle || swipeAngle > 135) {
						$doc.unbind(getEventType({mousemove: move, mouseup: up}));
						return true;
					}
				}
				if ($items[0].parent().parent().hasClass('g-contents')) {
					if (nowPage != 0) {
						$items[nowPage - 1].addClass('show');
						if ((max - 1) != nowPage) {
							$items[nowPage + 1].addClass('show');
						} else {
							$items[0].addClass('show');
						}
					} else {
						$items[nowPage + 1].addClass('show');
						$items[max - 1].addClass('show');
					} 
				}


				moved = x-downX;

				if (newstyle) {
					
					var movedcheck = x-returnX;
					var mapCheck = x-lastX;
					var faker = realX;
					var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
					var limit = $wrapper.find(' > li').eq(max-1).innerWidth() + (limitMg * 2);
					var half = limit / 2;
					if ((mapCheck > 0) && (lastX != 0) && (!isMobile)) {//right
						if (mapword == 'left') {
							recount = true;
							mapword = 'right';
						}
						if (recount) {
							limitCount = 1;
							recount = false;
							returnX = x;
						} 
						movedcheck = x-returnX;
						var caseOne = Math.abs(Math.floor((Math.abs(movedcheck) + limit) / limit) - limitCount + 1);
	 					var remakeRi = function () {
							var lastCont = $wrapper.find('> li').eq(max-1).attr('data-call');
							$wrapper.find('> li').eq(max-1).remove();
							$wrapper.prepend($items[lastCont]);
							limitCount++;
							realX = faker - (Math.abs(limit) * caseOne);
						}
						if ((limit * limitCount) < (Math.abs(movedcheck) + half)) {
							for (i=0;i<caseOne;i++) {
								remakeRi();
							}
						}
						mapword = 'right';
					} else if ((mapCheck < 0) && (lastX != 0) && (!isMobile)) {//left
						if (mapword == 'right') {
							recount = true;
							mapword = 'left';
						}
						if (recount) {
							limitCount = 1;
							recount = false;
							returnX = x;
						}
						movedcheck = x-returnX;
						var caseOne = Math.abs(Math.floor((Math.abs(movedcheck) + limit) / limit) - limitCount + 1);
						var remakeLe = function () {
							var lastCont = $wrapper.find('> li').eq(0).attr('data-call');
							$wrapper.find('> li').eq(0).remove();
							$wrapper.append($items[lastCont]);
							limitCount++;
							realX = faker + (Math.abs(limit) * caseOne);
						}
						if ((limit * limitCount) < (Math.abs(movedcheck) + half)) {
							for (i=0;i<caseOne;i++) {
								remakeLe();
							}
						}
						mapword = 'left';
					}
					moved = realX+(x-downX);
				}
				if (!endless && (!nowPage || nowPage == max-1)) {
					moved /= 2;
				}

				if (!useFade) $wrapper._css('translate3dX', moved);
				onMove(moved);

				if (nowTime-300 > startTime) {
					startTime = nowTime;
					baseX = x;
				}

				if (!isMobile && !blockerAdded) {
					$blocker.appendTo($box);
					blockerAdded = true;
				}

				lastX = x;
				$(document).on('mouseleave', function () {
					if ($('html').hasClass('firefox')) {
						up(e)
					}
				});
				e.preventDefault();


			}

			function onMove(v, moveOnly) {
				var now = $.isPlainObject(v) ? v.translate3dX : v;
				moveOnly !== true && eventMove && eventMove.call($box, now);
			}

			function up(e) {

				var x = getEventPoint(e)[0],
					movedvalue = x - baseX;

				if (x != downX) {
					if (!newstyle) {
						if (10 > Math.abs(x-downX)) {
							back();
						} else if (!movedvalue || new Date().getTime()-startTime > 300) {
							if (moved > boxWidth/2 && (endless || nowPage)) {
								toPrev(false, true);
							} else if (-boxWidth/2 > moved && (endless || nowPage != max-1)) {
								toNext(false, true);
							} else {
								back();
							}
						} else {
							if (movedvalue > 0 && (endless || nowPage)) {
								toPrev(false, true);
							} else if (0 > movedvalue && (endless || nowPage != max-1)) {
								toNext(false, true);
							} else {
								back();
							}
						}
					} else {
						dragPoint = false;
						
						limitCount = 1;
						if (isMobile) {
							if (Math.abs(movedvalue) > 10) {
								if (movedvalue > 0) {
									if (realAni) {
										changeNew(-1);
									}
								} else {
									if (realAni) {
										changeNew(1);
									}
								}
								changePhone = true;
							} else {
								$wrapper._animate({translate3dX:setX}, {duration: 300, easing: 'easeOutCubic', force3D: true, complete: callEnd});
							}
						} else {
							$wrapper._animate({translate3dX:setX}, {duration: 300, easing: 'easeOutCubic', force3D: true, complete: callEnd});
						}
					}
				} else {
					setAutoPlay();
				}

				if (!isMobile && blockerAdded) {
					$blocker.detach();
					blockerAdded = false;
				}

				$doc.unbind(getEventType({mousemove: move, mouseup: up}));

			}
			function callEnd() {
				var center = $win.width() / 2;
				var allC = [];
				var allCsma = [];
				var full = $wrapper.find(' > li').length;
				for (i = 0;i<full;i++) {
					allC[i] = Math.abs($wrapper.find(' > li').eq(i).offset().left + ($wrapper.find(' > li').eq(i).innerWidth() / 2) - center);
					allCsma[i] = Math.ceil($wrapper.find(' > li').eq(i).offset().left + ($wrapper.find(' > li').eq(i).innerWidth() / 2) - center);
				}
				var currin = Math.min.apply(null, allC);
	    		var curr;
	    		if(!Array.indexOf){
			        for(var i=0; i<allC.length; i++){
			            if(allC[i]==currin){
			                curr = i;
			            }
			        }
				} else {
					curr = allC.indexOf(currin);
				}
				nowPage = $wrapper.find(' > li').eq(curr).attr('data-call');
				setButtons();
				changeEnd();
				dragPoint = true;
			}

			function back() {
				wrapperMove(0, 'back');
			}

			function change(option) {
				var nextPage, moveTo, page = parseInt(option.to);
				if (!clickAble) {
					return false;
				}
				nextPage = typeof page == 'number' && !isNaN(page) ? page : this.getAttribute ? parseInt(this.getAttribute('data-page')) : null;
				if ($items[0].parent().parent().hasClass('g-contents')) {
					if (nextPage != 0) {
						$items[nextPage - 1].addClass('show');
						if ((max - 1) != nextPage) {
							$items[nextPage + 1].addClass('show');
						}
					} else {
						$items[nextPage + 1].addClass('show');
					}
				}
				if (nextPage !== null && nextPage != nowPage && nextPage > -1 && max > nextPage) {

					resize();
					if (useFade) {
						fade(nextPage, option.noAnimation);
					} else {
						moveTo = (nowPage-nextPage)*moveSize;
						readyToMove(nextPage);
						wrapperMove(moveTo, 'slide', option.noAnimation);
					}
				}
				return false;
			}

			function toPrev(e, fromSwipe, noAnimation) {
				var nextPage;
				if (!clickAble || (!endless && !nowPage)) {
					return false;
				}
				if (!newstyle) {
					nextPage = !nowPage ? max-1 : nowPage-1;
					if (useFade) {
						fade(nextPage, noAnimation);
					} else {
						readyToMove(nextPage, 'prev', fromSwipe);
						wrapperMove(moveSize, 'slide', noAnimation);
					}
				} else {
					if (realAni) {
						changeNew(-1);
					}
				}
				e && e.preventDefault();
				return false;
			}

			function toNext(e, fromSwipe, noAnimation) {
				var nextPage;
				if (!clickAble || (!endless && nowPage == max-1)) {
					return false;
				}
				if (!newstyle) {
					nextPage = nowPage == max-1 ? 0 : nowPage+1;
					if (useFade) {
						fade(nextPage, noAnimation);
					} else {
						readyToMove(nextPage, 'next', fromSwipe);
						wrapperMove(-moveSize, 'slide', noAnimation);
					}
				} else {
					if (realAni) {
						changeNew(1);
					}
				}
				e && e.preventDefault();
				return false;
			}

			function jump(option) {
				var direction, page = option.to;
				if (!clickAble || page == nowPage) {
					return false;
				}
				if (useFade) {
					change(option);
				} else {
					for (i = 0; i < max; i++) {
						if (!$items[0].parent().parent().hasClass('g-contents')) {
							i != page && i != nowPage && $items[i].hide();
						} else {
							i != page && i != nowPage && $items[i].removeClass('show');
						}	
					}
					direction = option.pretendTo ? option.pretendTo : nowPage > page ? 'prev' : 'next';
					readyToMove(page, direction);
					wrapperMove(direction == 'prev' ? moveSize : -moveSize, 'slide', option.noAnimation);
				}
				return false;
			}

			function readyToMove(nextPage, prevOrNext, withoutDisplays) {
				var from, to;
				if (!withoutDisplays) {
					if (prevOrNext) {
						appendItem(nextPage, prevOrNext == 'next' ? '100%' : '-100%');
					} else {
						from = Math.min(nowPage, nextPage);
						to = Math.max(nowPage, nextPage);
						for (i = from; i <= to; i++) {
							if (i != nowPage) {
								appendItem(i, (i-nowPage)*100+'%');
							}
						}
					}
				}

				ready(nextPage);
			}

			function ready(nextPage) {
				clearAutoPlay();
				clickAble = false;
				nowPage = nextPage;
				setButtons();
				eventChange && eventChange.call($box, nowPage, max);
				resize();
			}

			function appendItem(target, left) {
				if (!newstyle) {
					(typeof target == 'number' ? $items[target] : target).css({position: 'absolute', left: left}).show();
				}
				if ((!$items[0].parent().parent().hasClass('g-contents')) && (!newstyle)) {
					(typeof target == 'number' ? $items[target] : target).addClass('show');
				}
				
			}

			function fade(nextPage, noAnimation) {
				var fadeDelay;
				clearTimeout(fadeDelay);

				if (animate && !noAnimation) {
					appendItem(nowPage, 0);
					if (useTransition) {
						$items[nowPage]._animate({opacity: 0}, aniOption.fade);
						fadeDelay = setTimeout(function () {
							$items[nextPage].show()._animate({opacity: 1}, aniOption.fade);
						},500);
					} else {
						$items[nowPage]._animate({opacity: 0}, aniOption.fade);
						fadeDelay = setTimeout(function () {
							$items[nextPage].show()._animate({opacity: 1}, aniOption.fade);
						},500);
					}
					nowPage = nextPage;
					setButtons();
				} else {
					changeEnd();
				}
			}

			function wrapperMove(value, aniOptionKey, noAnimation) {
				if ($items[0].parent().parent().hasClass('g-contents')) {
					$items[nowPage].addClass('show');
				}
				if (animate && !noAnimation) {
					if (useTransition) {
						$wrapper._transition({translate3dX: value}, aniOption[aniOptionKey]);
					} else {
						$wrapper._animate({translate3dX: value}, aniOption[aniOptionKey]);
					}
				} else {
					changeEnd();
				}
			}

			function setButtons() {
				for (i = 0; i < max; i++) {
					if (paging) {
						$pagingItems[i][ ( i == nowPage )? 'addClass' : 'removeClass' ]('on');
					}
				}
				if (!endless && arrows) {
					$prev[!nowPage ? 'addClass' : 'removeClass' ]('disabled');
					$next[nowPage == max-1 ? 'addClass' : 'removeClass' ]('disabled');
				}
			}

			function changeEnd() {
				var $prevItem, $nextItem, $nowItem;
				for (i = 0; i < max; i++) {
					if (i == nowPage) {
						$items[i].css({position: 'relative', left: 0}).addClass('xlider-current show');
						$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
						$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1];
					} else {
						if ((!$items[0].parent().parent().hasClass('g-contents')) && (!newstyle)) {
							$items[i].hide().removeClass('xlider-current');
						} else {
							$items[i].removeClass('xlider-current show');
						}
					}
				}

				if ((!useFade) && (!newstyle)) {

					if ($fakeItem) {
						$fakeItem.remove();
						$fakeItem = null;
					}

					$wrapper._css('translate3dX', 0);

					$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
					$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1],
					$nowItem = $items[nowPage];

					if (endless && $prevItem[0] == $nextItem[0]) {
						$fakeItem = $prevItem.clone().addClass('xlider-fake');
						$fakeItem.appendTo($wrapper);
						appendItem($fakeItem, itemWidth, true);
					}

					for (i = 0; i < max; i++) {
						if ($prevItem && $items[i][0] == $prevItem[0]) {
							appendItem(i, '-'+ itemWidth);
						} else if ($nextItem && $items[i][0] == $nextItem[0]) {
							appendItem(i, itemWidth);
						}
					}

				}
				if (newstyle) {
					$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
					$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1],
					$nowItem = $items[nowPage];
				}


				clickAble = true;

				eventChangeEnd && eventChangeEnd.call($box, nowPage, max);

				setAutoPlay();

			}

			function autoPlayAction() {
				jump({to: nowPage == max-1 ? 0 : nowPage+1, pretendTo: 'next'});
			}

			function clearAutoPlay() {
				clearTimeout(autoPlayTimer);
			}

			function setAutoPlay() {
				clearAutoPlay();
				if (autoPlaying) {
					autoPlayTimer = setTimeout(autoPlayAction, autoPlay);
				}
			}

			function toggleAuto(value) {
				autoPlaying = typeof(value) == 'boolean' ? value : !autoPlaying;
				if (!autoPlaying) {
					clearAutoPlay();
				} else {
					setAutoPlay();
				}
				return autoPlaying;
			}

			function setWrapperMS() {
				if (animate) {
					aniOption.slide.duration = animateDuration || Math.max(450, Math.min(moveSize, 750));
					aniOption.back.duration = (animateDuration || aniOption.slide.duration)*0.75;
					aniOption.fade.duration = animateDuration || 200;
				}
			}

			function itemFocusablesFocused() {
				var index;
				if ($box) {
					index = parseInt(this.getAttribute('data-xlider-page'));
					$box[0].scrollLeft = 0;
					setTimeout(function() {
						$box[0].scrollLeft = 0;
					}, 0);
					$box.xlider('change', index, true);
				}
			}

			function resize() {
				boxWidth = $box[0].offsetWidth;
				itemWidth = multiMode ? $items[0][0].offsetWidth : '100%';
				moveSize = multiMode ? itemWidth : boxWidth;
				if (newstyle) {
					clearTimeout(resetMover);
					resetMover = setTimeout(function() {
						settingView();
					}, 100);
				}
				setWrapperMS();
			}
			
		}

		function cancelEvent(e) {
			e.preventDefault();
		}

		

	})(window.jQuery);



	/*############################################################################# added by damyo after this line ################################################################################*/

	/*!
	 * Stickyfill -- `position: sticky` polyfill
	 * v. 1.1.4 | https://github.com/wilddeer/stickyfill
	 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
	 *
	 * MIT License
	 */
	!function(a,b){function c(){y=D=z=A=B=C=K}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(){F={top:b.pageYOffset,left:b.pageXOffset}}function g(){return b.pageXOffset!=F.left?(f(),void z()):void(b.pageYOffset!=F.top&&(f(),i()))}function h(a){setTimeout(function(){b.pageYOffset!=F.top&&(F.top=b.pageYOffset,i())},0)}function i(){for(var a=H.length-1;a>=0;a--)j(H[a])}function j(a){if(a.inited){var b=F.top<=a.limit.start?0:F.top>=a.limit.end?2:1;a.mode!=b&&p(a,b)}}function k(){for(var a=H.length-1;a>=0;a--)if(H[a].inited){var b=Math.abs(t(H[a].clone)-H[a].docOffsetTop),c=Math.abs(H[a].parent.node.offsetHeight-H[a].parent.height);if(b>=2||c>=2)return!1}return!0}function l(a){isNaN(parseFloat(a.computed.top))||a.isCell||"none"==a.computed.display||(a.inited=!0,a.clone||q(a),"absolute"!=a.parent.computed.position&&"relative"!=a.parent.computed.position&&(a.parent.node.style.position="relative"),j(a),a.parent.height=a.parent.node.offsetHeight,a.docOffsetTop=t(a.clone))}function m(a){var b=!0;a.clone&&r(a),d(a.node.style,a.css);for(var c=H.length-1;c>=0;c--)if(H[c].node!==a.node&&H[c].parent.node===a.parent.node){b=!1;break}b&&(a.parent.node.style.position=a.parent.css.position),a.mode=-1}function n(){for(var a=H.length-1;a>=0;a--)l(H[a])}function o(){for(var a=H.length-1;a>=0;a--)m(H[a])}function p(a,b){var c=a.node.style;switch(b){case 0:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top=a.offset.top+"px",c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 1:c.position="fixed",c.left=a.box.left+"px",c.right=a.box.right+"px",c.top=a.css.top,c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 2:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top="auto",c.bottom=0,c.width="auto",c.marginLeft=0,c.marginRight=0}a.mode=b}function q(a){a.clone=document.createElement("div");var b=a.node.nextSibling||a.node,c=a.clone.style;c.height=a.height+"px",c.width=a.width+"px",c.marginTop=a.computed.marginTop,c.marginBottom=a.computed.marginBottom,c.marginLeft=a.computed.marginLeft,c.marginRight=a.computed.marginRight,c.padding=c.border=c.borderSpacing=0,c.fontSize="1em",c.position="static",c.cssFloat=a.computed.cssFloat,a.node.parentNode.insertBefore(a.clone,b)}function r(a){a.clone.parentNode.removeChild(a.clone),a.clone=void 0}function s(a){var b=getComputedStyle(a),c=a.parentNode,d=getComputedStyle(c),f=a.style.position;a.style.position="relative";var g={top:b.top,marginTop:b.marginTop,marginBottom:b.marginBottom,marginLeft:b.marginLeft,marginRight:b.marginRight,cssFloat:b.cssFloat,display:b.display},h={top:e(b.top),marginBottom:e(b.marginBottom),paddingLeft:e(b.paddingLeft),paddingRight:e(b.paddingRight),borderLeftWidth:e(b.borderLeftWidth),borderRightWidth:e(b.borderRightWidth)};a.style.position=f;var i={position:a.style.position,top:a.style.top,bottom:a.style.bottom,left:a.style.left,right:a.style.right,width:a.style.width,marginTop:a.style.marginTop,marginLeft:a.style.marginLeft,marginRight:a.style.marginRight},j=u(a),k=u(c),l={node:c,css:{position:c.style.position},computed:{position:d.position},numeric:{borderLeftWidth:e(d.borderLeftWidth),borderRightWidth:e(d.borderRightWidth),borderTopWidth:e(d.borderTopWidth),borderBottomWidth:e(d.borderBottomWidth)}},m={node:a,box:{left:j.win.left,right:J.clientWidth-j.win.right},offset:{top:j.win.top-k.win.top-l.numeric.borderTopWidth,left:j.win.left-k.win.left-l.numeric.borderLeftWidth,right:-j.win.right+k.win.right-l.numeric.borderRightWidth},css:i,isCell:"table-cell"==b.display,computed:g,numeric:h,width:j.win.right-j.win.left,height:j.win.bottom-j.win.top,mode:-1,inited:!1,parent:l,limit:{start:j.doc.top-h.top,end:k.doc.top+c.offsetHeight-l.numeric.borderBottomWidth-a.offsetHeight-h.top-h.marginBottom}};return m}function t(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function u(a){var c=a.getBoundingClientRect();return{doc:{top:c.top+b.pageYOffset,left:c.left+b.pageXOffset},win:c}}function v(){G=setInterval(function(){!k()&&z()},500)}function w(){clearInterval(G)}function x(){I&&(document[L]?w():v())}function y(){I||(f(),n(),b.addEventListener("scroll",g),b.addEventListener("wheel",h),b.addEventListener("resize",z),b.addEventListener("orientationchange",z),a.addEventListener(M,x),v(),I=!0)}function z(){if(I){o();for(var a=H.length-1;a>=0;a--)H[a]=s(H[a].node);n()}}function A(){b.removeEventListener("scroll",g),b.removeEventListener("wheel",h),b.removeEventListener("resize",z),b.removeEventListener("orientationchange",z),a.removeEventListener(M,x),w(),I=!1}function B(){A(),o()}function C(){for(B();H.length;)H.pop()}function D(a){for(var b=H.length-1;b>=0;b--)if(H[b].node===a)return;var c=s(a);H.push(c),I?l(c):y()}function E(a){for(var b=H.length-1;b>=0;b--)H[b].node===a&&(m(H[b]),H.splice(b,1))}var F,G,H=[],I=!1,J=a.documentElement,K=function(){},L="hidden",M="visibilitychange";void 0!==a.webkitHidden&&(L="webkitHidden",M="webkitvisibilitychange"),b.getComputedStyle||c();for(var N=["","-webkit-","-moz-","-ms-"],O=document.createElement("div"),P=N.length-1;P>=0;P--){try{O.style.position=N[P]+"sticky"}catch(Q){}""!=O.style.position&&c()}f(),b.Stickyfill={stickies:H,add:D,remove:E,init:y,rebuild:z,pause:A,stop:B,kill:C}}(document,window),window.jQuery&&!function($){$.fn.Stickyfill=function(a){return this.each(function(){Stickyfill.add(this)}),this}}(window.jQuery);

	/*!
	 * jQuery Scrollify
	 * Version 1.0.14
	 *
	 * Requires:
	 * - jQuery 1.7 or higher
	 *
	 * https://github.com/lukehaas/Scrollify
	 *
	 * Copyright 2016, Luke Haas
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"), to deal in
	 * the Software without restriction, including without limitation the rights to
	 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	 * the Software, and to permit persons to whom the Software is furnished to do so,
	 * subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



	if touchScroll is false - update index

	 */
	(function (global,factory) {
		"use strict";
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(['jquery'], function($) {
				return factory($, global, global.document);
			});
		} else if (typeof module === 'object' && module.exports) {
			// Node/CommonJS
			module.exports = factory(require('jquery'), global, global.document);
		} else {
			// Browser globals
			factory(jQuery, global, global.document);
		}
	}(typeof window !== 'undefined' ? window : this, function ($, window, document, undefined) {
		"use strict";
		var heights = [],
			names = [],
			elements = [],
			overflow = [],
			index = 0,
			currentIndex = 0,
			interstitialIndex = 1,
			hasLocation = false,
			timeoutId,
			timeoutId2,
			$window = $(window),
			top = $window.scrollTop(),
			scrollable = false,
			locked = false,
			scrolled = false,
			manualScroll,
			swipeScroll,
			util,
			disabled = false,
			scrollSamples = [],
			scrollTime = new Date().getTime(),
			firstLoad = true,
			initialised = false,
			destination = 0,
			wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll',
			settings = {
				//section should be an identifier that is the same for each section
				section: ".section",
				sectionName: "section-name",
				interstitialSection: "",
				easing: "easeOutExpo",
				scrollSpeed: 1100,
				offset : 0,
				scrollbars: true,
				target:"html,body",
				standardScrollElements: false,
				setHeights: true,
				overflowScroll:true,
				updateHash: true,
				touchScroll:true,
				before:function() {},
				after:function() {},
				afterResize:function() {},
				afterRender:function() {}
			};
		function animateScroll(index,instant,callbacks,toTop) {
			if(currentIndex===index) {
				callbacks = false;
			}
			if(disabled===true) {
				return true;
			}
			if(names[index]) {
				scrollable = false;
				if(callbacks) {
					settings.before(index,elements);
				}
				interstitialIndex = 1;
				destination = heights[index];
				if(firstLoad===false && currentIndex>index && toTop===false) {
					//We're going backwards
					if(overflow[index]) {

						interstitialIndex = parseInt(elements[index].outerHeight()/$window.height());

						destination = parseInt(heights[index])+(elements[index].outerHeight()-$window.height());
					}
				}


				if(settings.updateHash && settings.sectionName && !(firstLoad===true && index===0)) {
					if(history.pushState) {
					    try {
								history.replaceState(null, null, names[index]);
					    } catch (e) {
					    	if(window.console) {
					    		console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.");
					    	}
					    }

					} else {
						window.location.hash = names[index];
					}
				}
				if(firstLoad) {
						settings.afterRender();
						firstLoad = false;
				}


				currentIndex = index;
				if(instant) {
					$(settings.target).stop().scrollTop(destination);
					if(callbacks) {
						settings.after(index,elements);
					}
				} else {
					locked = true;
					if( $().velocity ) {
						$(settings.target).stop().velocity('scroll', {
						  duration: settings.scrollSpeed,
						  easing: settings.easing,
						  offset: destination,
						  mobileHA: false
					  });
					} else {
						$(settings.target).stop().animate({
							scrollTop: destination
						}, settings.scrollSpeed,settings.easing);
					}

					if(window.location.hash.length && settings.sectionName && window.console) {
						try {
							if($(window.location.hash).length) {
								console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.");
							}
						} catch (e) {}
					}
					$(settings.target).promise().done(function(){
						locked = false;
						firstLoad = false;
						if(callbacks) {
							settings.after(index,elements);
						}
					});
				}

			}
		}

		function isAccelerating(samples) {
					function average(num) {
						var sum = 0;

						var lastElements = samples.slice(Math.max(samples.length - num, 1));

	          for(var i = 0; i < lastElements.length; i++){
	              sum += lastElements[i];
	          }

	          return Math.ceil(sum/num);
					}

					var avEnd = average(10);
	        var avMiddle = average(70);

	        if(avEnd >= avMiddle) {
						return true;
					} else {
						return false;
					}
		}
		var scrollify = function(options) {
			initialised = true;
			$.easing['easeOutExpo'] = function(x, t, b, c, d) {
				return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
			};

			manualScroll = {
				handleMousedown:function() {
					if(disabled===true) {
						return true;
					}
					scrollable = false;
					scrolled = false;
				},
				handleMouseup:function() {
					if(disabled===true) {
						return true;
					}
					scrollable = true;
					if(scrolled) {
						//instant,callbacks
						manualScroll.calculateNearest(false,true);
					}
				},
				handleScroll:function() {
					if(disabled===true) {
						return true;
					}
					if(timeoutId){
						clearTimeout(timeoutId);
					}

					timeoutId = setTimeout(function(){
						scrolled = true;
						if(scrollable===false) {
							return false;
						}
						scrollable = false;
						//instant,callbacks
						manualScroll.calculateNearest(false,true);
					}, 200);
				},
				calculateNearest:function(instant,callbacks) {
					top = $window.scrollTop();
					var i =1,
						max = heights.length,
						closest = 0,
						prev = Math.abs(heights[0] - top),
						diff;
					for(;i<max;i++) {
						diff = Math.abs(heights[i] - top);

						if(diff < prev) {
							prev = diff;
							closest = i;
						}
					}
					if((atBottom() && closest>index) || atTop()) {
						index = closest;
						//index, instant, callbacks, toTop
						animateScroll(closest,instant,callbacks,false);
					}
				},
				wheelHandler:function(e) {
					if(disabled===true) {
						return true;
					} else if(settings.standardScrollElements) {
						if($(e.target).is(settings.standardScrollElements) || $(e.target).closest(settings.standardScrollElements).length) {
							return true;
						}
					}
					if(!overflow[index]) {
						e.preventDefault();
					}
					var currentScrollTime = new Date().getTime();



					e = e || window.event;
					var value = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
					var delta = Math.max(-1, Math.min(1, value));



					//delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;


					if(scrollSamples.length > 149){
						scrollSamples.shift();
					}
					//scrollSamples.push(Math.abs(delta*10));
					scrollSamples.push(Math.abs(value));

					if((currentScrollTime-scrollTime) > 200){
						scrollSamples = [];
					}
					scrollTime = currentScrollTime;


					if(locked) {
						return false;
					}
					if(delta<0) {
						if(index<heights.length-1) {
							if(atBottom()) {
								if(isAccelerating(scrollSamples)) {
									e.preventDefault();
									index++;
									locked = true;
									//index, instant, callbacks, toTop
									animateScroll(index,false,true, false);
								} else {
									return false;
								}
							}
						}
					} else if(delta>0) {
						if(index>0) {
							if(atTop()) {
								if(isAccelerating(scrollSamples)) {
									e.preventDefault();
									index--;
									locked = true;
									//index, instant, callbacks, toTop
									animateScroll(index,false,true, false);
								} else {
									return false
								}
							}
						}
					}

				},
				keyHandler:function(e) {
					if(disabled===true) {
						return true;
					}
					if(locked===true) {
						return false;
					}
					if(e.keyCode==38 || e.keyCode==33) {
						if(index>0) {
							if(atTop()) {
								e.preventDefault();
								index--;
								//index, instant, callbacks, toTop
								animateScroll(index,false,true,false);
							}
						}
					} else if(e.keyCode==40 || e.keyCode==34) {
						if(index<heights.length-1) {
							if(atBottom()) {
								e.preventDefault();
								index++;
								//index, instant, callbacks, toTop
								animateScroll(index,false,true,false);
							}
						}
					}
				},
				init:function() {
					if(settings.scrollbars) {
						$window.on('mousedown', manualScroll.handleMousedown);
						$window.on('mouseup', manualScroll.handleMouseup);
						$window.on('scroll', manualScroll.handleScroll);
					} else {
						$("body").css({"overflow":"hidden"});
					}
					$window.on(wheelEvent,manualScroll.wheelHandler);
					//$(document).bind(wheelEvent,manualScroll.wheelHandler);
					$window.on('keydown', manualScroll.keyHandler);
				}
			};

			swipeScroll = {
				touches : {
					"touchstart": {"y":-1,"x":-1},
					"touchmove" : {"y":-1,"x":-1},
					"touchend"  : false,
					"direction" : "undetermined"
				},
				options:{
					"distance" : 30,
					"timeGap" : 800,
					"timeStamp" : new Date().getTime()
				},
				touchHandler: function(event) {
					if(disabled===true) {
						return true;
					} else if(settings.standardScrollElements) {
						if($(event.target).is(settings.standardScrollElements) || $(event.target).closest(settings.standardScrollElements).length) {
							return true;
						}
					}
					var touch;
					if (typeof event !== 'undefined'){
						if (typeof event.touches !== 'undefined') {
							touch = event.touches[0];
							switch (event.type) {
								case 'touchstart':
									swipeScroll.touches.touchstart.y = touch.pageY;
									swipeScroll.touches.touchmove.y = -1;

									swipeScroll.touches.touchstart.x = touch.pageX;
									swipeScroll.touches.touchmove.x = -1;

									swipeScroll.options.timeStamp = new Date().getTime();
									swipeScroll.touches.touchend = false;
								case 'touchmove':
									swipeScroll.touches.touchmove.y = touch.pageY;
									swipeScroll.touches.touchmove.x = touch.pageX;
									if(swipeScroll.touches.touchstart.y!==swipeScroll.touches.touchmove.y && (Math.abs(swipeScroll.touches.touchstart.y-swipeScroll.touches.touchmove.y)>Math.abs(swipeScroll.touches.touchstart.x-swipeScroll.touches.touchmove.x))) {
										//if(!overflow[index]) {
											event.preventDefault();
										//}
										swipeScroll.touches.direction = "y";
										if((swipeScroll.options.timeStamp+swipeScroll.options.timeGap)<(new Date().getTime()) && swipeScroll.touches.touchend == false) {

											swipeScroll.touches.touchend = true;
											if (swipeScroll.touches.touchstart.y > -1) {

												if(Math.abs(swipeScroll.touches.touchmove.y-swipeScroll.touches.touchstart.y)>swipeScroll.options.distance) {
													if(swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {

														swipeScroll.up();

													} else {
														swipeScroll.down();

													}
												}
											}
										}
									}
									break;
								case 'touchend':
									if(swipeScroll.touches[event.type]===false) {
										swipeScroll.touches[event.type] = true;
										if (swipeScroll.touches.touchstart.y > -1 && swipeScroll.touches.touchmove.y > -1 && swipeScroll.touches.direction==="y") {

											if(Math.abs(swipeScroll.touches.touchmove.y-swipeScroll.touches.touchstart.y)>swipeScroll.options.distance) {
												if(swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {
													swipeScroll.up();

												} else {
													swipeScroll.down();

												}
											}
											swipeScroll.touches.touchstart.y = -1;
											swipeScroll.touches.touchstart.x = -1;
											swipeScroll.touches.direction = "undetermined";
										}
									}
								default:
									break;
							}
						}
					}
				},
				down: function() {

					if(index<heights.length-1) {

						if(atBottom() && index<heights.length-1) {

							index++;
							//index, instant, callbacks, toTop
							animateScroll(index,false,true,false);
						} else {
							if(Math.floor(elements[index].height()/$window.height())>interstitialIndex) {

								interstitialScroll(parseInt(heights[index])+($window.height()*interstitialIndex));
								interstitialIndex += 1;

							} else {
								interstitialScroll(parseInt(heights[index])+(elements[index].outerHeight()-$window.height()));
							}

						}
					}
				},
				up: function() {
					if(index>=0) {
						if(atTop() && index>0) {

							index--;
							//index, instant, callbacks, toTop
							animateScroll(index,false,true,false);
						} else {

							if(interstitialIndex>2) {

								interstitialIndex -= 1;
								interstitialScroll(parseInt(heights[index])+($window.height()*interstitialIndex));

							} else {

								interstitialIndex = 1;
								interstitialScroll(parseInt(heights[index]));
							}
						}

					}
				},
				init: function() {
					if (document.addEventListener && settings.touchScroll) {
						var eventListenerOptions = {
							passive: false,
						};
						document.addEventListener('touchstart', swipeScroll.touchHandler, eventListenerOptions);
						document.addEventListener('touchmove', swipeScroll.touchHandler, eventListenerOptions);
						document.addEventListener('touchend', swipeScroll.touchHandler, eventListenerOptions);
					}
				}
			};


			util = {
				refresh:function(withCallback,scroll) {
					clearTimeout(timeoutId2);
					timeoutId2 = setTimeout(function() {
						//retain position
						sizePanels(true);
						//scroll, firstLoad
						calculatePositions(scroll,false);
						if(withCallback) {
								settings.afterResize();
						}
					},400);
				},
				handleUpdate:function() {
					//callbacks, scroll
					//changed from false,true to false,false
					util.refresh(false,false);
				},
				handleResize:function() {
					//callbacks, scroll
					util.refresh(true,false);
				},
				handleOrientation:function() {
					//callbacks, scroll
					util.refresh(true,true);
				}
			};
			settings = $.extend(settings, options);

			//retain position
			sizePanels(false);

			calculatePositions(false,true);

			if(true===hasLocation) {
				//index, instant, callbacks, toTop
				animateScroll(index,false,true,true);
			} else {
				setTimeout(function() {
					//instant,callbacks
					manualScroll.calculateNearest(true,false);
				},200);
			}
			if(heights.length) {
				manualScroll.init();
				swipeScroll.init();

				$window.on("resize",util.handleResize);
				if (document.addEventListener) {
					window.addEventListener("orientationchange", util.handleOrientation, false);
				}
			}
			function interstitialScroll(pos) {
				if( $().velocity ) {
					$(settings.target).stop().velocity('scroll', {
						duration: settings.scrollSpeed,
						easing: settings.easing,
						offset: pos,
						mobileHA: false
					});
				} else {
					$(settings.target).stop().animate({
						scrollTop: pos
					}, settings.scrollSpeed,settings.easing);
				}
			}

			function sizePanels(keepPosition) {
				if(keepPosition) {
					top = $window.scrollTop();
				}

				var selector = settings.section;
				overflow = [];
				if(settings.interstitialSection.length) {
					selector += "," + settings.interstitialSection;
				}
				if(settings.scrollbars===false) {
					settings.overflowScroll = false;
				}
				$(selector).each(function(i) {
					var $this = $(this);

					if(settings.setHeights) {
						if($this.is(settings.interstitialSection)) {
							overflow[i] = false;
						} else {
							if(($this.css("height","auto").outerHeight()<$window.height()) || $this.css("overflow")==="hidden") {
								$this.css({"height":$window.height()});

								overflow[i] = false;
							} else {

								$this.css({"height":$this.height()});

								if(settings.overflowScroll) {
									overflow[i] = true;
								} else {
									overflow[i] = false;
								}
							}

						}

					} else {

						if(($this.outerHeight()<$window.height()) || (settings.overflowScroll===false)) {
							overflow[i] = false;
						} else {
							overflow[i] = true;
						}
					}
				});
				if(keepPosition) {
					$window.scrollTop(top);
				}
			}
			function calculatePositions(scroll,firstLoad) {
				var selector = settings.section;
				if(settings.interstitialSection.length) {
					selector += "," + settings.interstitialSection;
				}
				heights = [];
				names = [];
				elements = [];
				$(selector).each(function(i){
						var $this = $(this);
						if(i>0) {
							heights[i] = parseInt($this.offset().top) + settings.offset;
						} else {
							heights[i] = parseInt($this.offset().top);
						}
						if(settings.sectionName && $this.data(settings.sectionName)) {
							names[i] = "#" + $this.data(settings.sectionName).toString().replace(/ /g,"-");
						} else {
							if($this.is(settings.interstitialSection)===false) {
								names[i] = "#" + (i + 1);
							} else {
								names[i] = "#";
								if(i===$(selector).length-1 && i>1) {

									heights[i] = heights[i-1]+(parseInt($($(selector)[i-1]).outerHeight())-parseInt($(window).height()))+parseInt($this.outerHeight());
								}
							}
						}
						elements[i] = $this;
						try {
							if($(names[i]).length && window.console) {
								console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.");
							}
						} catch (e) {}

						if(window.location.hash===names[i]) {
							index = i;
							hasLocation = true;
						}

				});

				if(true===scroll) {
					//index, instant, callbacks, toTop
					animateScroll(index,false,false,false);
				}
			}

			function atTop() {
				if(!overflow[index]) {
					return true;
				}
				top = $window.scrollTop();
				if(top>parseInt(heights[index])) {
					return false;
				} else {
					return true;
				}
			}
			function atBottom() {
				if(!overflow[index]) {
					return true;
				}
				top = $window.scrollTop();

				if(top<parseInt(heights[index])+(elements[index].outerHeight()-$window.height())-28) {

					return false;

				} else {
					return true;
				}
			}
		}

		function move(panel,instant) {
			var z = names.length;
			for(;z>=0;z--) {
				if(typeof panel === 'string') {
					if (names[z]===panel) {
						index = z;
						//index, instant, callbacks, toTop
						animateScroll(z,instant,true,true);
					}
				} else {
					if(z===panel) {
						index = z;
						//index, instant, callbacks, toTop
						animateScroll(z,instant,true,true);
					}
				}
			}
		}
		scrollify.move = function(panel) {
			if(panel===undefined) {
				return false;
			}
			if(panel.originalEvent) {
				panel = $(this).attr("href");
			}
			move(panel,false);
		};
		scrollify.instantMove = function(panel) {
			if(panel===undefined) {
				return false;
			}
			move(panel,true);
		};
		scrollify.next = function() {
			if(index<names.length) {
				index += 1;
				//index, instant, callbacks, toTop
				animateScroll(index,false,true,true);
			}
		};
		scrollify.previous = function() {
			if(index>0) {
				index -= 1;
				//index, instant, callbacks, toTop
				animateScroll(index,false,true,true);
			}
		};
		scrollify.instantNext = function() {
			if(index<names.length) {
				index += 1;
				//index, instant, callbacks, toTop
				animateScroll(index,true,true,true);
			}
		};
		scrollify.instantPrevious = function() {
			if(index>0) {
				index -= 1;
				//index, instant, callbacks, toTop
				animateScroll(index,true,true,true);
			}
		};
		scrollify.destroy = function() {
			if(!initialised) {
				return false;
			}
			if(settings.setHeights) {
				$(settings.section).each(function() {
					$(this).css("height","auto");
				});
			}
			$window.off("resize",util.handleResize);
			if(settings.scrollbars) {
				$window.off('mousedown', manualScroll.handleMousedown);
				$window.off('mouseup', manualScroll.handleMouseup);
				$window.off('scroll', manualScroll.handleScroll);
			}
			$window.off(wheelEvent,manualScroll.wheelHandler);
			$window.off('keydown', manualScroll.keyHandler);

			if (document.addEventListener && settings.touchScroll) {
				document.removeEventListener('touchstart', swipeScroll.touchHandler, false);
				document.removeEventListener('touchmove', swipeScroll.touchHandler, false);
				document.removeEventListener('touchend', swipeScroll.touchHandler, false);
			}
			heights = [];
			names = [];
			elements = [];
			overflow = [];
		};
		scrollify.update = function() {
			if(!initialised) {
				return false;
			}
			util.handleUpdate();
		};
		scrollify.current = function() {
			return elements[index];
		};
		scrollify.disable = function() {
			disabled = true;
		};
		scrollify.enable = function() {
			disabled = false;
			if (initialised) {
				//instant,callbacks
				manualScroll.calculateNearest(false,false);
			}
		};
		scrollify.isDisabled = function() {
			return disabled;
		};
		scrollify.setOptions = function(updatedOptions) {
			if(!initialised) {
				return false;
			}
			if(typeof updatedOptions === "object") {
				settings = $.extend(settings, updatedOptions);
				util.handleUpdate();
			} else if(window.console) {
				console.warn("Scrollify warning: setOptions expects an object.");
			}
		};
		$.scrollify = scrollify;
		return scrollify;
	}));
})(window.jQuery);

// common.js
;(function($) {
	window.VD = {

		isMobile: $.browser.mobile,
		isPoorBrowser: $.browser.ie && 9 > $.browser.ie,

		swipeAble: !!(!!$.browser.mobile || window.PointerEvent || window.MSPointerEvent),
		parallaxAble: !($.browser.ie && 9 > $.browser.ie) && !$.browser.mobile && $.support.transition,

		areaWidth: 0,
		areaHeight: 0,

		prevSizeMode: -1,
		sizeMode: 0,

		scrollBarWidth: 0,
		scrollTop: 0,

		mediaBaseURL: window.MEDIA_BASE_URL || '/',

		isTestURL: location.href.indexOf('samsung.com') < 0,

		isVd: location.pathname.indexOf('/content') === 0 || window.IS_CAMPAIGN === true,

		isGPSI: navigator.userAgent.toLowerCase().replace(/ /g, '').indexOf('googlepagespeedinsights') != -1,

		scrollFunctions: [],
		resizeFunctions: [],
		readyFunctions: [],
		loadFunctions: [],


		path: {
			root: '/content'
		},

		initialized: false,

		dom: {
			header: $('#header').get(0) || $('header').get(0)
		},

		sections: function() {

			var
				$wrap = $('#wrap'),
				$contents = $('#contents'),
				$sections = $contents.children('[class^="m_"]'),

				$blocks = [],
				$children = null,

				keyvisual = null,
				keyvisualType2 = null,
				controls = [],

				isMobile = VD.isMobile,
				isPoorBrowser = VD.isPoorBrowser,

				transformName = $.support.transform,
				supportTransition = $.support.transition,
				supportTransform = $.support.transform,

				parallaxAble = VD.parallaxAble,
				parallaxAbleTypes = /^(x|y|s|a|c)$/,
				parallaxFloatTypes = /^(s|a)$/,

				i = 0, j = 0, numSections = $sections.length,
				k, kmax,
				numBlocks;


			if ($.browser.ie && $.support.canvas) {
				!$(document.documentElement).hasClass('s1') && $sections.not('#kv, .m_spec_list').find('span[class*="ico_obj-"]').each(function() {
					VD.imageResizeViaCanvas(this.children[0], this.children[0].offsetWidth, this.children[0].offsetHeight);
				});
				!$(document.documentElement).hasClass('s1') && !$(document.documentElement).hasClass('s2') && $sections.filter('.m_spec_list').find('span[class*="ico_obj-"]').each(function() {
					VD.imageResizeViaCanvas(this.children[0], 200, 200);
				});
			}

			for (; i < numSections; i++, j++) {
				$blocks[j] = $($sections[i]);
				controls[j] = createControls($blocks[j]);
				if (!controls[j]) {
					for ($children = $blocks[j].children('[class^="m_"]'), k = 0, kmax = $children.length; k < kmax; j++, k++) {
						$blocks[j] = $($children[k]);
						controls[j] = createControls($blocks[j]);
					}
					if (kmax) {
						j--;
					} else {
						controls[j] = getArticleControl($blocks[j]);
					}
				}
			}
			numBlocks = $blocks.length;

			$contents.find('a[data-layer-toggle]').each(VD.setLayerToggler);

			$.browser.ie && $('[class*="logo_galaxy-"] img').each(function() {
				var ieFix = this.getAttribute('data-ie-fix');
				if (ieFix != 'no') {
					this.src = this.src.replace('.png', (ieFix || '_ie') +'.png');
				}
			});


			keyvisual = (function() {

				var $visual = $sections.filter('#kv, #kv-type2'),
					$article = $visual.find('article'),
					$title = $article.find('[class*="f_header-"] .kv-title'),
					$text = $article.find('[class*="f_header-"] .kv-text'),
					$figure = $article.find('figure'),
					$image = $figure.find('img'),
					$video = $figure.find('video'),
					$preButton = $article.find('div.f_btn_pre'),

					imageDisplayed = false,
					tryToVideoPlay = false,

					minWidthBound = 0.75,
					sizeMode, areaWidth, areaHeight,
					show = false,
					type, setImage;


				if (!$visual.length) {
					VD.header && VD.header.onKeyVisualShow();
					return {resize: $.noop};
				}


				type = $visual.attr('id').match('kv-type([0-9])');
				type = type ? parseInt(type[1]) : 1;

				if (!isPoorBrowser) {
					$article.bind({'video-play-kv': videoPlay, 'video-pause-kv': videoPause});
				}
				$title.show();
				$text.show();
				$preButton.show();


				function videoPlay() {
					tryToVideoPlay = true;
					if (imageDisplayed) {
						$article.trigger('video-play');
					}
				}

				function videoPause() {
					tryToVideoPlay = false;
					$article.trigger('video-pause');
				}

				function onImageShow() {
					imageDisplayed = true;
					tryToVideoPlay && videoPlay();
				}

				function getMobileImageHeight() {
					for (var i = 0; i < $image.length; i++) {
						if ($image[i].offsetHeight) {
							return $image[i].offsetHeight;
						}
					}
				}

				setImage = {

					1: function() {

						var imageWidth = areaHeight/9*16,
							visualTop = '',
							visualWidth = Math.min(areaWidth, 1920),
							visualHeight = areaHeight;

						if (sizeMode > 2) {
							if (visualWidth > imageWidth) {
								imageWidth = visualWidth;
							}
							if (imageWidth*minWidthBound > visualWidth) {
								imageWidth = visualWidth/(minWidthBound*10)*10;
								visualHeight = Math.round(imageWidth/16*9);
							}
							if (imageWidth/16*9 > visualHeight) {
								visualTop = (visualHeight-imageWidth/16*9)/2;
							}
						} else {
							imageWidth = visualWidth = areaWidth;
							$figure.css('width', areaWidth);
							visualTop = (areaHeight-getMobileImageHeight())/2;
							visualHeight = areaHeight;
						}

						$visual.css({height: visualHeight});
						$figure.css({top: visualTop, width: imageWidth, marginLeft: Math.min(0, (visualWidth-imageWidth)/2)});
						$video.css('height', imageWidth*0.5625);

						setImage.after(500, 1500, $text.length ? 3000 : 2000, 1500);

					},

					2: function() {
						setImage.after(1000, 500, 2000);
					},

					after: function(delayForTitle, delayForText, delayForPreButton) {
						if (!show) {
							if ($title.get(0)) {
								$title.parent().show();
							} else {
								$text.parent().show();
							}
							if ($article.hasClass('invisible')) {
								onImageShow();
							} else {
								if (!isPoorBrowser) {
									if (VD.sizeMode>1) {
									} else {
										onImageShow();
									}
								}
							}
							show = true;
						}
						VD.header && VD.header.onKeyVisualShow();
					}

				}

				return {
					scroll: function(v) {
					},
					resize: function resize(_sizeMode) {
						sizeMode = _sizeMode;
						areaWidth = Math.min(VD.areaWidth, 1920);
						areaHeight = VD.areaHeight;
						VD.loadImage($image, setImage[type]);
					}
				};

			})();

			function createControls($section) {

				var className = $section.attr('class') || '',
					$children = $section.children().not('nav'),
					i = 0, numChildren = $children.length;

				if ((/^m_feature/).test(className) && (/article/i).test($section[0].nodeName)) {
					return getArticleControl($section);
				} else if (numChildren == 1) {
					if (className.indexOf('m_product_gallery') != -1) {
						return getProductGalleryControl($section);
					} else if (className.indexOf('m_content-colorset') != -1) {
						return getProductColorsetControl($children);
					} else if (className.indexOf('m_content-video') != -1) {
						return getVideoControl($children);
					} else {
						return getArticleControl($children);
					}
				} else if (className) {
					if (className.indexOf('m_spec_list') != -1) {
						return getSpecListControl($section);
					} else if (className.indexOf('m_content-slider') != -1) {
						return getSliderControl($section);
					} else if (className.indexOf('m_content-tab') != -1) {
						return getTabControl($section);
					}
				}

			}

			function getVideoControl($article) {

				var $figureContainer = $article.find('.f_container'),
					$playButton  = $figureContainer.find('a'),
					control = getArticleControl($article),
					added = false,
					videoId = '',
					videoParam = '';

				control.name = 'video';

				$playButton.click(function() {
					if (!added) {
						videoId = $playButton.attr('href').split('?v=')[1];
						videoParam = $playButton.attr('data-video-param');
						if (supportTransition) {
							VD.setTransitionEndEvent($playButton.find('img.play'), addVideo);
							$article.parent().addClass('video-added');
						} else {
							addVideo();
						}
						added = true;
					}
					return false;
				});

				function addVideo() {
					$('<iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="'+ VD.getYoutubePlayerLink(videoId, true, videoParam) +'"></iframe>')
						.appendTo($article).focus();
				}

				return control;

			}

			function getProductColorsetControl($article) {

				var $buttons = $article.find('nav a'),
					$images = $article.find('.f_container figure'),
					$fakeSlider = null,
					$fakeSliderItems = null,
					control = getArticleControl($article),
					prevColor = 0,
					nowColor = 0,
					i = 0, numColors = $buttons.length;


				if (!$images.get(0)||$images.length<2) {
					return getArticleControl($article);
				}

				control.name = 'colorset';

				if (VD.swipeAble) {
					$fakeSlider = $('<div class="fake-slider" />');
					$fakeSliderItems = [];
				}
				for (; i < numColors; i++) {
					$buttons[i] = $($buttons[i]).attr('data-index', i)
						.bind('click', changeColor);
					$images[i] = $($images[i]).show();
					if (i && !isPoorBrowser) {
						$($images[i]).css('opacity', 0);
					}
					if ($fakeSlider) {
						$fakeSliderItems[i] = $('<div class="fake-slider-item" />').appendTo($fakeSlider);
					}
				}
				$images[0].css('zIndex', 1);

				if ($fakeSlider) {
					$fakeSlider.appendTo($article);
					$fakeSlider.xlider({
						endless: true,
						swipe: true,
						onMove: function(v) {
							var percent = Math.abs(v)/$fakeSlider[0].offsetWidth;
							$images[nowColor]._css({opacity: 1-percent});
							$images[0 > v ? nowColor == numColors-1 ? 0 : nowColor+1 : !nowColor ? numColors-1 : nowColor-1]
								.css('opacity', percent);
						},
						onChange: function(page) {
							setButtons(page);
						},
						onChangeEnd: function(page) {
							$images[nowColor]._css('translate3dX', 0);
							changed(page);
							onColorChanged();
						}
					});
				}

				function changeColor() {
					var index = parseInt(this.getAttribute('data-index'));
					if (nowColor != index) {
						setButtons(index);
						changed(index);

						$images[index].stop().css({zIndex: 1, opacity: 0, 'display': 'block'})
							.animate({opacity: 1}, 500, 'easeInOutSine', function () {
								onColorChanged();
							});
						$images[prevColor].stop().animate({'opacity': 0}, 500);
					}
					return false;
				}

				function setButtons(index) {
					$buttons[nowColor].removeClass('on');
					$buttons[index].addClass('on');
				}

				function changed(index) {
					prevColor = nowColor;
					nowColor = index;
				}

				function onChanging(v) {
					$images[prevColor].css('opacity', 1-v.opacity);
				}

				function onColorChanged() {
					$images[prevColor].css('zIndex', 0);
				}

				return control;

			}

			function getSpecListControl($section) {

				var
					$mask = $section.find('div.m_inner'),
					$list = $mask.find('> ul'),
					$moreButton = $section.find('div.m_more a'),
					$moreButtonText = $moreButton.find('em'),
					control = getArticleControl($section),
					opened = false;


				control.name = 'spec';

				$moreButton.click(more);
				$moreButtonText.html('Learn more');
				if (VD.hashMenu == 'spec') {
					setTimeout(more, 1000);
				}


				function more() {
					if (!opened) {
						VD.setHash('spec');
						// VD.setSmoothScrollTop($section[0].offsetTop + ($subNav.length ? -$subNav[0].offsetHeight : 0), 750);
						$mask._animate({height: $list[0].offsetHeight}, {queue: false, duration: 750, easing: 'easeInOutQuint', complete: onMore});
						opened = true;
					} else {
						less();
					}
					return false;
				}

				function onMore() {
					$mask.addClass('on').css('height', '');
					$moreButtonText.html('Close');
				}

				function less() {
					var $checker, lessHeight;
					if (opened) {
						VD.setHash('');
						$checker = $mask.clone().removeClass('on').appendTo($mask.parent());
						lessHeight = $checker[0].offsetHeight;
						$checker.remove();
						$mask.__animate({height: lessHeight}, {queue: false, duration: 750, easing: 'easeInOutQuart', complete: onLess});
						opened = false;
					}
				}

				function onLess() {
					$mask.removeClass('on').css('height', '');
					$moreButtonText.html('Learn more');
				}

				return control;

			}

			function getProductGalleryControl($section) {

				var
					$body = $(document.body),
					$sliders = $section.find('div.m_list'),
					$sliderItems = [],
					$nav = $section.find('nav'),
					$prev = $nav.find('a[class$=prev]'),
					$next = $nav.find('a[class$=next]'),
					$colors = $nav.find('div.c_paging-type2 a'),
					$items = [],
					$opener = null,
					hashname = $section.attr('data-hash-name'),
					layerId = $section.attr('data-layer-id'),
					$layer = $((layerId===undefined||layerId==='') ? '#layer-gallery' : '#'+layerId),
					$layerColorName = $layer.find('.c_txt_ly-type1 em'),
					$layerList = $layer.find('ul.ly_gallery_list'),
					$layerPrev = $layer.find('button[class$=prev]'),
					$layerNext = $layer.find('button[class$=next]'),
					$layerPagingBox = $layer.find('div.m_paging_type1'),
					$layerClose = $layer.find('button.c_btn_close-type1'),
					$baseContentsArea = $('#wrap'),
					$baseContentsClickable = null,

					$perspectiveImagesForRubbishIE,
					lastSettedPerspectiveImageName = 'ie...',

					layerAdded = false,
					layerSetted = false,
					layerPagingClick = false,

					hasListImage = $section.attr('data-has-list-image'),
					lastSizeMode = -1,
					regSizeModeImageName = /(_s[1-4])?\.png/,

					colorNames = [],

					nowPage = 0,
					nowLayerPage = 0,
					prevLayerPage = null,
					nowColor = 0,
					clickAble = true,
					isSincing = false,

					numSliderItems = $sliders.length,
					numPages = $sliders.first().find('> ul').length,
					numItems = $sliders.first().find('li').length,

					control = getArticleControl($section),

					readyClassName = 'product-gallery-ready-for-load',
					src = '',
					imageSizeMode = '',

					i = 0, j;
					
				if ((hashname === undefined) || (hashname === '')) {
					hashname = 'gallery';
				}


				if (hasListImage) {
					hasListImage += ',';
				}

				$colors.bind('click touchend', changeColor);

				for (; i < numSliderItems; i++) {
					$sliderItems[i] = $($sliders[i]);
					$colors[i] = $($colors[i]).attr('data-index', i);
					$items[i] = $sliderItems[i].find('li');
					for (j = 0; j < numItems; j++) {
						$items[i][j] = $($items[i][j]);
						$items[i][j].find('a').attr('data-index', j).click(showLayer);
						if (!isMobile && !isPoorBrowser) {
							$items[i][j].find('a').bind({mouseenter: itemHover, mouseleave: itemLeave, focus: itemHover, blur: itemLeave});
						}
						if (i==0) {
							src = VD.setMediaBaseURL($items[i][j].find('img').attr('data-image'));
							if (hasListImage) {
								imageSizeMode = (hasListImage.indexOf(VD.sizeMode+',') != -1) ? VD.sizeMode : hasListImage.split(',')[0];
								src = src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
							}
							$items[i][j].find('img').attr('src', src);
						} else {
							$items[i][j].find('img').addClass(readyClassName);
						}
					}
					colorNames[i] = $colors[i].text();
				}

				$section.bind('welcome', function() {
					$('.'+readyClassName).each(function() {
						src = VD.setMediaBaseURL($(this).attr('data-image'));
						if (hasListImage) {
							imageSizeMode = (hasListImage.indexOf(VD.sizeMode+',') != -1) ? VD.sizeMode : hasListImage.split(',')[0];
							src = src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
						}
						$(this).attr('src', src).removeClass(readyClassName);
					});
				});

				$sliders.xlider({
					swipe: VD.swipeAble,
					onChange: function(page) {
						isSliding = true;
						if (!isSincing) {
							setButtons(page);
						}
					},
					onChangeEnd: function() {
						if (!isSincing) {
							isSliding = false;
						}
					}
				});
				$prev.click(function() {
					for (var i = 0; i < numSliderItems; i++) {
						isSincing = i != nowColor;
						$sliderItems[i].xlider('prev', i != nowColor);
					}
					isSincing = false;
					return false;
				});
				$next.click(function() {
					for (var i = 0; i < numSliderItems; i++) {
						isSincing = i != nowColor;
						$sliderItems[i].xlider('next', i != nowColor);
					}
					isSincing = false;
					return false;
				});

				control.setSizeMode = function(sizeMode) {
					if (lastSizeMode != sizeMode) {
						hasListImage && setSizeModeImages(sizeMode);
						lastSizeMode = sizeMode;
					}
					resizeLayer();
				}
				control.name = 'product-gallery';

				setButtons(0);
				colorChanged();

				if (VD.hashMenu == hashname) {
					$sliderItems[nowColor].find('a').eq(0).click();
				}


				function setSizeModeImages(sizeMode) {
					var imageSizeMode = (hasListImage.indexOf(sizeMode+',') != -1) ? sizeMode : hasListImage.split(',')[0];
					$section.find('div.m_list img').each(function() {
						var src = this.src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
						if (this.src!=src) {
							this.src = src;
						}
					});
				}

				function itemHover() {
					!isSliding && itemFocusing(parseInt(this.getAttribute('data-index')));
				}

				function itemLeave() {
					!isSliding && itemFocusing(-1);
				}

				function itemFocusing(index) {
					var sizeMode = VD.sizeMode;
					for (i = 0, $currentItems = $items[nowColor]; i < numItems; i++) {
						$currentItems[i]._stop()._animate({opacity: (index == -1 || i == index) ? 1 : 0.5}, {queue: false, duration: 350, easing: 'easeOutQuad'});
					}
				}

				function showLayer() {
					var index = parseInt(this.getAttribute('data-index'));
					if (!layerAdded && !$('html').hasClass('s1')) {
						$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
						$baseContentsClickable.each(function() {
							var tabindex = $(this).attr('tabindex');
							if (tabindex!==undefined&&tabindex!==null) {
								$(this).data('prev-tabindex', tabindex);
							}
							$(this).attr('tabindex','-1');
						});

						$('#layer-gallery-space button').each(function(){
							$(this).attr('tabindex','');
						});

						$opener = $(this);
						setLayerContent();
						$layerColorName.html(colorNames[nowColor]);
						$layerList.xlider('change', index, true);
						if (!isPoorBrowser) {
							$layerList[0].children[index].style.opacity = 1;
						}
						$layer.addClass('show');
						VD.setHash(hashname);
						VD.noScroll.on();
						layerAdded = true;
						resizeLayer();
					}
					return false;
				}

				function setLayerContent() {

					var $images = $sliderItems[nowColor].find('img'),
						$imageButtons = $sliderItems[nowColor].find('a'),
						$layerImages, i;

					if (!layerSetted) {
						for (i = 0; i < numItems; i++) {
							$('<li><span><img alt=""></span></li>').appendTo($layerList);
							$('<a href="#"><span>'+ $images[i].alt +'</span></a>').appendTo($layerPagingBox);
						}
						for ($layerImages = $layerList.find('img'), i = 0; i < numItems; i++) {
							$layerImages[i].alt = $images[i].alt;
						}
						$layerClose.bind('click touchend', hideLayer);
						$layerPagingBox.find('a').click(function() {
							layerPagingClick = true;
						}).each(function(i) {
							var omni = $imageButtons.eq(i).attr('data-omni');
							if (omni&&omni.length>0) {
								$(this).attr({'data-omni':omni}).click(VD.tracking);
							}
						});
						$layerList.xlider({
							endless: true,
							swipe: VD.swipeAble,
							onMove: !isPoorBrowser ? onLayerSliderMove : null,
							arrows: [$layerPrev, $layerNext],
							paging: $layerPagingBox,
							onChange: function(page) {
								prevLayerPage = nowLayerPage;
								nowLayerPage = page;
							},
							onChangeEnd: function(page) {
								prevLayerPage = null;
								layerPagingClick = false;
							}
						});
						$layer.bind('touchmove', VD.preventDefault);
						layerSetted = true;
					}

					for ($layerImages = $layerList.find('img'), i = 0; i < numItems; i++) {
						$layerImages[i].src = $images[i].src.replace(regSizeModeImageName, '.png');
						$layerImages[i].alt = $images[i].alt; // 20161130 update.
					}
					if (hasListImage && $.browser.ie) {
						$perspectiveImagesForRubbishIE = $layerList.find('img[src*="-perspective"]');
					}

				}

				function checkPerspectiveImageSize() {
					var imageName;
					if ($perspectiveImagesForRubbishIE) {
						imageName = $layerList[0].offsetHeight > 650 ? '' : '_m';
						if (imageName != lastSettedPerspectiveImageName) {
							$perspectiveImagesForRubbishIE.each(function() {
								this.src = this.src.replace(/(_m)?\.png/i, imageName +'.png');
							});
							lastSettedPerspectiveImageName = imageName;
						}
					}
				}

				function onLayerSliderMove(now) {

					if (layerPagingClick) {
						return;
					}

					return;

					var children = $layerList[0].children,
						minWidth = $layerList[0].offsetWidth/3,
						maxWidth = minWidth*2,
						currentIndex = prevLayerPage !== null ? prevLayerPage : nowLayerPage,
						percent, i = 0;

					for (; i < numItems; i++) {
						if (i == currentIndex) {
							percent = 1-Math.min(1, Math.abs(now)/minWidth);
							children[i].style.opacity = percent;
						} else if ((now > 0 && (i == currentIndex-1 || i == numItems-1)) ||
							(0 > now && (i == currentIndex+1 || i == 0))) {
							percent = Math.max(0, Math.min(1, (Math.abs(now)-maxWidth)/minWidth));
							children[i].style.opacity = percent;
						}
					}

				}

				function resizeLayer() {
					if (layerAdded) {
						$layerList.css('marginTop', ($layerList[0].parentNode.offsetHeight-$layerList[0].offsetHeight)/2);
						checkPerspectiveImageSize();
					}
				}

				function hideLayer() {
					$layer.removeClass('show');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
					});
					$opener && $opener.focus();
					$opener = null;
					VD.setHash('');
					VD.setTransitionEndEvent($layer, function() {
						VD.noScroll.off();
					});
					layerAdded = false;
					lastSettedPerspectiveImageName = '...';
					return false;
				}

				function changeColor() {
					var index;
					if (clickAble) {
						index = parseInt(this.getAttribute('data-index'));
						if (index != nowColor) {
							clickAble = false;
							if (!isPoorBrowser) {
								$sliderItems[nowColor]._animate({opacity: 0}, {queue: false, duration: 500, easing: 'easeInOutQuad'});
								$sliderItems[index].addClass('over')
									.css({zIndex: 1, opacity: 0}).show()
									._animate({opacity: 1}, {queue: false, duration: 500, easing: 'easeInOutQuad', complete: colorChanged});
							}
							nowColor = index;
							for (i = 0; i < numSliderItems; i++) {
								$($colors[i]).decideClass('on', i == nowColor);
							}
							if (isPoorBrowser) {
								$sliderItems[index].css({zIndex: 1}).show();
								colorChanged();
							}
						}
					}
					return false;
				}

				function colorChanged() {
					clickAble = true;
					for (i = 0; i < numSliderItems; i++) {
						$sliderItems[i].removeClass('over').css({zIndex: 0});
						if (i != nowColor) {
							$sliderItems[i].hide();
						}
					}
				}

				function setButtons(_nowPage) {
					var i;
					nowPage = _nowPage;
					$prev.decideClass('hide', !nowPage);
					$next.decideClass('hide', nowPage == numPages-1);

					if (!nowPage) {
						$prev.attr('tabindex', -1).css('zIndex', -1);
						$prev.on('click', function () {
							$next.focus();
						});
					}else {
						$prev.attr('tabindex', 0).css('zIndex', 2);
					}
					if (nowPage == numPages-1) {
						$next.attr('tabindex', -1).css('zIndex', -1);
					}else {
						$next.attr('tabindex', 0).css('zIndex', 2);
						$next.on('click', function () {
							$prev.focus();
						});
					}
					isSincing = true;
					for (i = 0; i < numSliderItems; i++) {
						i != nowColor && $sliderItems[i].xlider('change', nowPage, true);
					}
					isSincing = false;
				}

				return control;

			}

			function getSliderControl($section) {

				var $nav = $section.find('> nav'),
					$items = $section.children().not('nav, .fixedCont'),
					$slider = $items.wrapAll('<div style="height: 100%;" />').parent(),
					$prev = $nav.find('a[class*=-prev]'),
					$next = $nav.find('a[class*=-next]'),
					$pagingBox = $nav.find('[class^="m_paging_type"]'),
					$paging = [],
					controls = [],
					pagingOmnitureBase = $pagingBox.attr('data-omni'),
					pagingNameBase = $pagingBox.attr('data-alt'),
					pagingIsNumbering = $pagingBox.hasClass('numbering'),
					lastVisiblePercent = 0,
					lastVisibility = false,
					lastInvisibility = true,
					regThemeArrow = /m_btn_type([0-9]+)/,
					regThemePage = /m_paging_type([0-9]+)/,
					themeArrowDefault = 1,
					themePageDefault = 1,
					nowPage = -1,
					i = 0, numItems = $items.length,
					gaer360Swipe = VD.swipeAble;

				if (regThemeArrow.test($prev.attr('class'))) {
					themeArrowDefault = parseInt($prev.attr('class').match(regThemeArrow)[1]);
				}
				if (regThemePage.test($pagingBox.attr('class'))) {
					themePageDefault = parseInt($pagingBox.attr('class').match(regThemePage)[1]);
				}
				if (pagingNameBase == undefined) {
					pagingNameBase = $section[0].parentNode.className.indexOf('m_content_sub') != -1 ? 'Sub Feature' : 'Feature';
				}
				pagingNameBase = pagingNameBase ? pagingNameBase +' ' : '';

				for (; i < numItems; i++) {
					$items[i] = $($items[i]).bind('tab-changed', setTheme);
					if (!pagingIsNumbering) {
						$paging[i] = $('<a href="#" data-page="'+ i +'"'+ (
							pagingOmnitureBase ? ' data-omni="'+ pagingOmnitureBase.replace('<no>', (i+1)) +'"' : '') +'><span>'+ pagingNameBase + (i+1) +'</span></a>')
							.click(changePage)
							.appendTo($pagingBox);
					}
					controls[i] = createControls($($items[i]));
				}
				if (pagingIsNumbering) {
					$paging = $('<span />').appendTo($pagingBox);
				}
				if ( $section.hasClass('m_content-slider') ) {
					$section.each(function() {
						if ( $(this).hasClass('videos') ) {
							$(this).find('.m_paging_type2 a').each(function() {
								var index = $(this).index();
								$(this).attr('data-omni', ':banner_left:index_' + (index + 1));
							});
						} else if ( $(this).hasClass('banners') ) {
							$(this).find('.m_paging_type2 a').each(function() {
								var index = $(this).index();
								$(this).attr('data-omni', ':banner_right:index_' + (index + 1));
							});
						}
					});
				}
				if ($section.attr('id') == 'quality') gaer360Swipe = false;

				$slider.xlider({
					swipe: gaer360Swipe,
					onChange: setButtons,
					endless: $('.main_contents').find($section),
					onChangeEnd: setVisibles
				});
				$prev.click(function() {
					$slider.xlider('prev');
					return false;
				});
				$next.click(function() {
					$slider.xlider('next');
					return false;
				});
				setButtons(0);


				function changePage() {
					var page = parseInt(this.getAttribute('data-page'));
					$slider.xlider('jump', page);
					return false;
				}

				function setButtons(_nowPage) {
					nowPage = _nowPage;
					if (pagingIsNumbering) {
						$paging.html((nowPage+1) +'/'+ numItems);
					} else{
						for (i = 0; i < numItems; i++) {
							$paging[i].decideClass('on', i == nowPage);
						}
					}
					if ( ! $('.main_contents').find($section) ) {
						$prev.decideClass('hide', !nowPage);
						$next.decideClass('hide', nowPage == numItems-1);
					}
					setTheme();
					$section.trigger('xlider-changed', {page: nowPage});
				}

				function setTheme() {
					if (0 > nowPage) {
						return;
					}
					var $currentItem = controls[nowPage].name == 'tab' ? controls[nowPage].getCurrentItem() : $items[nowPage],
						themeArrow = $currentItem.attr('data-theme-arrow') || themeArrowDefault,
						themePage = $currentItem.attr('data-theme-page') || themePageDefault;
					$prev.attr('class', $prev.attr('class').replace(regThemeArrow, 'm_btn_type'+ themeArrow));
					$next.attr('class', $next.attr('class').replace(regThemeArrow, 'm_btn_type'+ themeArrow));
					$pagingBox.attr('class', $pagingBox.attr('class').replace(regThemePage, 'm_paging_type'+ themePage));
				}

				function setVisibles() {
					setParallax(lastVisiblePercent);
					setVisible(lastVisibility);
					setInvisible(lastInvisibility);
					for (i = 0; i < numItems; i++) {
						i != nowPage && controls[i].resetVideo();
					}
				}

				function setParallax(visiblePercent) {
					lastVisiblePercent = visiblePercent;
					for (var i = 0; i < numItems; i++) {
						controls[i].setParallax(visiblePercent);
					}
				}

				function setVisible(visible) {
					lastVisibility = visible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setVisible(i == nowPage ? visible : false);
					}
				}

				function setInvisible(invisible) {
					lastInvisibility = invisible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setInvisible(2 >Math.abs(nowPage-i) ? invisible : true);
					}
				}

				return {
					name: 'slider',
					resetVideo: function() {
						for (var i = 0; i < numItems; i++) {
							controls[i].resetVideo();
						}
					},
					setSizeMode: function(sizeMode) {
						for (var i = 0; i < numItems; i++) {
							controls[i].setSizeMode(sizeMode);
						}
					},
					setParallax: setParallax,
					setVisible: setVisible,
					setInvisible: setInvisible
				}

			}

			function getTabControl($section) {

				var $nav = $section.find('> nav'),
					$items = $section.children().not($nav),
					$tabs = $nav.find('a'),
					$itemHeaders = [],
					controls = [],
					lastVisibility = false,
					lastInvisibility = true,
					lastZIndex = 0,
					nowIndex = -1,
					isNewTabModule = $nav[0].className.indexOf('c_tab2-') != -1,
					isFirst = true,
					i = 0, numItems = $items.length;


				for (; i < numItems; i++) {
					$items[i] = $($items[i]);
					if (isNewTabModule) {
						$itemHeaders[i] = $items[i].find('[class*="f_header-"]');
					}
					controls[i] = createControls($items[i]);
				}
				$tabs.click(tabChange).eq(0).click();


				function tabChange() {
					var index = $tabs.index(this),
						i = 0;
					if (index != nowIndex) {
						nowIndex = index;
						$items[index].css({left: 0, zIndex: ++lastZIndex});
						if (!isPoorBrowser) {
							$items[index].css({opacity: 0})
								.animate({opacity: 1}, {queue: false, duration: 500, easing: 'easeInOutQuad', complete: setVisibles});
								if (!isFirst&&$.browser.firefox) {
									setVisibles();
								}
						}
						$nav.css('zIndex', lastZIndex+1);
						$tabs.removeClass('on').eq(index).addClass('on');
						$section.trigger('tab-changed');
						resize(VD.sizeMode, !isFirst);
						if (isFirst) {
							$nav.show();
							isFirst = false;
						}
					}
					return false;
				}

				function setVisibles() {
					setVisible(lastVisibility);
					setInvisible(lastInvisibility);
				}

				function setVisible(visible) {
					lastVisibility = visible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setVisible(i == nowIndex ? visible : false);
					}
				}

				function setInvisible(invisible) {
					lastInvisibility = invisible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setInvisible(i == nowIndex ? invisible : true);
					}
				}

				function resize(sizeMode, animate) {
					for (var i = 0; i < numItems; i++) {
						controls[i].setSizeMode(sizeMode);
					}
					if (isNewTabModule) {
						$nav['_'+ (isPoorBrowser || animate !== true ? 'css' : 'animate')]({top: $itemHeaders[nowIndex][0].offsetTop+$itemHeaders[nowIndex][0].offsetHeight},
							{duration: 500, easing: 'easeInOutCubic'});
					}
				}

				return {
					name: 'tab',
					getCurrentItem: function() {
						return $items[nowIndex];
					},
					resetVideo: function() {
						for (var i = 0; i < numItems; i++) {
							controls[i].resetVideo();
						}
					},
					setSizeMode: resize,
					setParallax: function(visiblePercent) {
						for (var i = 0; i < numItems; i++) {
							controls[i].setParallax(visiblePercent);
						}
					},
					setVisible: setVisible,
					setInvisible: setInvisible
				}

			}

			function getArticleControl($article) {

				var $figures = $article.find('figure'),
					$images = $article.find('figure img'),
					$parallaxs = null,

					imageSources = [],
					parallaxs = [],

					videos = [],
					hasVideo = false,
					videoPlaying = false,
					videoHided = false,

					show = false,
					visible = false,
					invisible = false,
					welcome = true,
					hello = [],

					isKeyvisual = $article.parent().attr('id') == 'kv',
					isParallaxVideo = false,

					$parallaxer = $({p: 0}),
					parallaxAnimateOption = {queue: false, duration: 850, bystep: false, rounding: false, easing: 'easeOutQuint', step: onParallaxAnimate},

					i, j, max;


				for (i = 0, max = $figures.length; i < max; i++) {

					$figures[i] = $($figures[i]);

					$images[i] = $($images[i]);
					imageSources[i] = VD.getImageSources($images[i]);

					videos[i] = VD.setVideoControl($figures[i], $article);
					hasVideo = hasVideo || videos[i];

					isParallaxVideo = isParallaxVideo || $figures[i].attr('data-parallax-video');

				}

				$parallaxs = $article.find('[data-parallax]');
				for (i = 0, max = $parallaxs.length; i < max; i++) {
					$parallaxs[i] = $($parallaxs[i]);
					parallaxs[i] = $parallaxs[i].attr('data-parallax');
					if (parallaxs[i]) {
						parallaxs[i] = parallaxs[i].split('|');
						for (j = 0; j < parallaxs[i].length; j++) {
							parallaxs[i][j] = parallaxs[i][j].split(',');
							if (parallaxAbleTypes.test(parallaxs[i][j][0])) {
								parallaxs[i][j][10] = parallaxs[i][j][0].toLowerCase();
								parallaxs[i][j].shift();
							} else {
								parallaxs[i][j][9] = 'y';
							}
							if (parallaxs[i][j][9] != 'c') {
								parallaxs[i][j][0] = parseFloat(parallaxs[i][j][0]);
								parallaxs[i][j][1] = parallaxs[i][j][0]-parseFloat(parallaxs[i][j][1]);
								if (parallaxs[i][j][2] !== undefined) {
									parallaxs[i][j][5] = parseFloat(parallaxs[i][j][2]);
								}
								if (parallaxs[i][j][3] !== undefined) {
									parallaxs[i][j][6] = parseFloat(parallaxs[i][j][3]);
								}
								parallaxs[i][j][2] = 0;
								parallaxs[i][j][3] = 0;
								parallaxs[i][j][4] = 0;
								if (parallaxs[i][j][9] == 's') {
									parallaxs[i][j][2] = parallaxs[i][j][0];
								}
							}
						}
					}
				}

				hello = $article.data('hello');
				if (!hello) {
					hello = [];
				}

				function onParallaxAnimate(v) {
					for (var properties, value, transform,
							i = 0, j, max = $parallaxs.length; i < max; i++) {
						for (j = 0, properties = {}, transform = '';
								j < parallaxs[i].length; j++) {
							if (parallaxs[i][j][9] == 'c') {
								continue;
							}
							value = parallaxs[i][j][3]+(parallaxs[i][j][4]-parallaxs[i][j][3])*v.p;
							properties[parallaxs[i][j][9]] = parallaxs[i][j][2] = value;
						}
						$parallaxs[i][0].style[transformName] = [
								'scale(', properties.s !== undefined ? properties.s : 1, ', ', properties.s !== undefined ? properties.s : 1, ')', ' ',
								'translate3d(', properties.x || 0, 'px, ', properties.y || 0, 'px, 0)'
							].join('');
						if (properties.a !== undefined) {
							$parallaxs[i][0].style.opacity = properties.a;
						}
					}
				}

				function resetVideo() {
					hasVideo && $article.trigger('video-reset');
				}


				return {

					name: 'article',
					resetVideo: resetVideo,

					setSizeMode: function(sizeMode) {
						for (var newSrc, i = 0, max = $figures.length; i < max; i++) {
							newSrc = ''+imageSources[i][sizeMode];
							if ($images[i][0] && $images[i][0].src && ($images[i][0].src.indexOf(newSrc.replace('/','')) == -1)) {
								$images[i][0].src = VD.setMediaBaseURL(newSrc);
							}
							if (hasVideo) {
								$article.trigger('video-change');
								if (3 > sizeMode && !videoHided) {
									$article.trigger('video-hide');
									videoHided = true;
								} else if (sizeMode > 2) {
									if (videoHided) {
										$article.trigger('video-show');
										videoHided = false;
									} else {
										if (VD.prevSizeMode!==sizeMode) {
											$article.trigger(isKeyvisual ? 'video-play-kv' : 'video-play');
										}
									}
								}
							}
						}
					},

					setParallax: function(visiblePercent) {
						var i, j, max, valueTo, sizeMode;
						if (parallaxAble) {
							visiblePercent = Math.max(0, visiblePercent, Math.min(1, visiblePercent));
							sizeMode = VD.sizeMode;
							$parallaxer._stop();
							if (3 > sizeMode) {
								for (i = 0, max = $parallaxs.length; i < max; i++) {
									for (j = 0; j < parallaxs[i].length; j++) {
										parallaxs[i][j][2] = 0;
									}
									$parallaxs[i][0].style[transformName] = $parallaxs[i][0].style.opacity = '';
								}
							} else {
								for (i = 0, max = $parallaxs.length; i < max; i++) {
									for (j = 0; j < parallaxs[i].length; j++) {
										if (parallaxs[i][j][9] == 'c') {
											window[parallaxs[i][j][0]] && window[parallaxs[i][j][0]](visiblePercent);
										} else {
											parallaxs[i][j][3] = parallaxs[i][j][2];
											valueTo = parallaxs[i][j][0]-parallaxs[i][j][1]*visiblePercent;
											if (parallaxs[i][j][5] !== undefined) {
												valueTo = Math.max(parallaxs[i][j][5], valueTo);
											}
											if (parallaxs[i][j][6] !== undefined) {
												valueTo = Math.min(parallaxs[i][j][6], valueTo);
											}
											if (sizeMode == 3 && parallaxs[i][j][9] != 's' && parallaxs[i][j][9] != 'a') {
												valueTo *= 0.75;
											}
											if (!parallaxFloatTypes.test(parallaxs[i][j][9])) {
												valueTo = Math.round(valueTo);
											}
											parallaxs[i][j][4] = valueTo;
										}
									}
								}
								$parallaxer[0].p = 0;
								$parallaxer._animate({p: 1}, parallaxAnimateOption);
							}

							if (hasVideo && !videoHided && isParallaxVideo && visiblePercent && 1 > visiblePercent) {
								$article.trigger('video-parallax', visiblePercent);
							}

						}
					},

					setVisible: function(_visible) {
						if (_visible) {
							if (!show) {
								$article.addClass('show');
								show = true;
							}
							if (!visible) {
								$article.addClass('visible').trigger('visible');
								visible = true;
							}
							if (hasVideo && !videoPlaying && !isParallaxVideo) {
								$article.trigger(isKeyvisual ? 'video-play-kv' : 'video-play');
								videoPlaying = true;
							}
						} else {
							if (visible) {
								$article.removeClass('visible');
								visible = false;
							}
						}
					},

					setInvisible: function(_invisible) {
						if (_invisible) {
							if (!invisible) {
								if (hasVideo && videoPlaying && !isParallaxVideo) {
									$article.trigger(isKeyvisual ? 'video-pause-kv' : 'video-pause');
									videoPlaying = false;
								}
								if (hello.length) {
									$.each(hello, function(i) {
										if ($article.hasClass(this.css)) {
											if (typeof(this.off)=='function') {
												this.off();
											}
											$article.removeClass(this.css);
										}
										//console.log('hello: off');
									});
								}
								$article.addClass('invisible').trigger('inactive').trigger('invisible');
								resetVideo();
								invisible = true;
								this.updateHelloPosition();
							}
						} else {
							if (invisible) {
								$article.removeClass('invisible').trigger('active');
								invisible = false;
							} else {
								if (welcome) {
									$article.trigger('active');
								}
							}
							if (welcome) {
								$article.trigger('welcome');
								welcome = false;
							}
							this.updateHelloPosition();
						}

						if (!invisible) {
							this.checkHello();
						}



					},

					updateHelloPosition: function() {
						if (hello.length) {
							$.each(hello, function() {
								this.helloTop = this.$elementTop.offset().top;
								this.helloBottom = this.$elementBottom.offset().top + this.$elementBottom.height();
								this.viewportHeight = $(window).height();
							});
						}
					},

					checkHello: function() {
						if (hello.length) {
							$.each(hello, function(i) {
								var baseLine = ((''+this.baseLine).toLowerCase().indexOf('px')>-1)
													? parseInt(this.baseLine)
													: this.viewportHeight/parseInt(this.baseLine,10);

								if (this.helloTop<VD.scrollTop+this.viewportHeight-baseLine
									&&this.helloBottom>VD.scrollTop+baseLine) {
									if (!$article.hasClass(this.css)) {
										$article.addClass(this.css);
										//console.log('hello: hello');
										if (typeof(this.on)=='function') {
											this.on();
										}
									}
								}
							});
						}
					}

				}

			}

			function scroll(scrollTop, maxScrollTop) {

				var sizeMode = VD.sizeMode,
					areaHeight = VD.areaHeight,
					blockTop, blockHeight,
					visibleSize, visibleHeight, visiblePercent, visibleBase,
					i = 0, j, jmax;

				for (; i < numBlocks; i++) {
					blockTop = !i ? $blocks[i][0].offsetTop-scrollTop : $blocks[i][0].getBoundingClientRect().top;

					if (blockTop>0||$blocks[i].css('display')!='none') {

						blockHeight = $blocks[i][0].offsetHeight;

						if (!i) {
							visibleSize = 1-((blockHeight+blockTop)/blockHeight);
						} else {
							visibleSize = -(blockTop-areaHeight)/(areaHeight+blockHeight);
						}
						if (parallaxAble) {
							visiblePercent = visibleSize;
							if (visiblePercent >= -0.15 && 1.15 >= visiblePercent) {
								controls[i].setParallax(visiblePercent);
							}
						}

						visibleBase = Math.min(blockHeight*0.66, VD.areaHeight*0.66);
						visibleHeight = Math.min(areaHeight, 0 >= blockTop ? blockHeight+blockTop : Math.min(blockHeight, areaHeight-blockTop));
						controls[i].setVisible(visibleHeight >= visibleBase);

						controls[i].setInvisible(0 > visibleSize || visibleSize > 1);
					}

				}

				keyvisual.scroll && keyvisual.scroll(scrollTop);

			}

			function resize() {

				var i = 0, sizeMode = VD.sizeMode;

				for (; i < numBlocks; i++) {
					controls[i].setSizeMode(sizeMode);
				}

				keyvisual.resize(sizeMode);

			}

			return {
				scroll: scroll,
				resize: resize
			}

		},

		setVideoControl: function($figure, $article, $cover) {
			var $video = null,
				source = '',
				setVideoimg = $figure.find('.setting-img'),
				isKeyvisual = ($article.attr('class') || '').indexOf('-kv') != -1,
				ready = false,
				tryToPlay = false,
				coverHided = false,
				videoHided = false,
				preferWebm = false,
				justOne = true,
				tweener = null,
				invisible = true,
				duration = 0,
				sizeMode = 0,
				noneplay = $figure.attr('data-none-play'),
				autoplayText = '',
				coverImg = $figure.attr('data-set-img'),
				newVideo = $figure.attr('data-media-v4'),
				canvasLoop = $figure.attr('data-canvas-loop'),
				mobileCheck = VD.isMobile;


			if (newVideo != undefined) {
				mobileCheck = false;
			}
			if ((10 > $.browser.ie) || mobileCheck || VD.isPoorNetwork) {
				if ($cover == undefined) {
					removeReady();
					return false;
				}
			}
			if ($cover == undefined) {
				$cover = $figure.find('img:not(".setting-img")');
			}


			source = $figure.attr('data-media-video') || $figure.attr('data-media-v4');
			if (newVideo != undefined) {
				source = newVideo;
				var isCount = 0;
				$(document).on('touchstart', function () {
					if (isCount == 0) {
						isCount = 1;
						$('video').each(function () {
							$(this)[0].load();
						});
					}
				});
			}
			if (!source) {
				return false;
			}
			if (noneplay === undefined) {
				autoplayText = ' autoplay'
			}
			source = VD.setMediaBaseURL(source);
			source = {
				mp4: '<source src="'+ source +'.mp4" type="video/mp4">',
				webm: '<source src="'+ source +'.webm" type="video/webm">',
				ogv: '<source src="'+ source +'.ogv" type="video/ogg">'
			}
			preferWebm = $figure.attr('data-video-prefer-webm');

			if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
				$canvers = $figure.append('<canvas class="canvas"></canvas>');
			}

			$video = $([
				'<video preload="metadata" muted' , $.browser.firefox ? autoplayText : '', ' ', $figure.attr('data-video-setting'), '>',
					preferWebm ? source.webm : source.mp4,
					preferWebm ? source.mp4 : source.webm,
					source.ogv,
				'</video>'].join(''))
				.bind({
					play: function() {
						if (invisible && newVideo == undefined) {
							$video[0].pause();
							$video[0].currentTime = 0;
						} else {
							$video[0].play();
						}
					},
					playing: function() {
						if (justOne && (newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
							justOne = false;
							setTimeout(function () {
								$video[0].pause();
								$video[0].currentTime = -0.1;
							}, 1000);

						}
					},
					canplay: function() {
						if (!ready) {
							ready = true;
							duration = this.duration;
							if (mobileCheck) {
								!isKeyvisual && VD.sizeMode > 2 && hideCover();
							}
							tryToPlay && play();
						}
						if (justOne && (newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
							$video[0].play();
						}
						removeReady();
					},
					ended: function() {
						$video.addClass('playend');
					},
					error: function() {
						removeReady();
					}
				})
				.insertBefore($cover);

			if ($.browser.android) {
				$video.on('click', function () {
					$video[0].play();
				});
			}

			setTimeout(function() {
				if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
					if (canvasLoop == 'loop') {
						var canvasVideo = new CanvasVideoPlayer({
							videoSelector: $video,
							canvasSelector: $figure.find('canvas'),
							loop: true
						});
					} else {
						var canvasVideo = new CanvasVideoPlayer({
							videoSelector: $video,
							canvasSelector: $figure.find('canvas')
						});
					}
				} else if (newVideo == undefined){
					$video[0].load();
				}
			}, 100);

			$article.bind({
				visible: function() {
					invisible = false;
					if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
						coverHided = false;
						videoHided = true;
						if (noneplay != 'none') {
							$figure.find('canvas').click();
						}
					} else if ((newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
						coverHided = true;
						videoHided = false;
						if ((noneplay != 'none') && ($(this).find('video').length > 0)) {
							$(this).find('video')[0].play();
						}
					} else if (newVideo != undefined) {
						coverHided = true;
						videoHided = false;
						if (noneplay != 'none') {
							$(this).find('video')[0].play();
						}
					}
					else {
						if ( VD.sizeMode < 3 ) {
							coverHided = true;
							videoHided = false;
						} else {
							coverHided = false;
							videoHided = false;
						}
					}
				}, invisible: function() {
					invisible = true;
					if ((newVideo != undefined) && $(this).find('video').length > 0 && $('html').hasClass('firefox')) {
						$(this).find('video')[0].pause();
						$(this).find('video')[0].currentTime = 0;

					}
				},
				'video-play': play, 'video-pause': pause, 'video-reset': reset, 'video-show': show, 'video-hide': hide, 'video-change': changSrc, 'video-parallax': parallax});


			function removeReady() {
				if(setVideoimg) {
					setVideoimg.remove();
				}
			}

			function play() {
				tryToPlay = true;
				if (ready && !videoHided && (noneplay != 'none')) {
					hideCover();
					videoPlay();
				}
			}

			function videoPlay() {
				if (!$video.hasClass('playend')) {
					$video.css('opacity', '')[0].play();
					coverHided = false;
				}
			}

			function hideCover() {
				if (ready && !coverHided) {
					$cover.css('visibility', 'hidden');
					$video.css('visibility', '');
					coverHided = true;
				}
			}

			function pause() {
				tryToPlay = false;
				ready && $video[0].pause();
			}

			function reset() {
				if (ready) {
					$video[0].pause();
					$video[0].currentTime = 0;
					$video.removeClass('playend');
				}

			}

			function show() {
				hideCover();
				ready && tryToPlay && videoPlay();
				videoHided = false;
			}

			function hide() {
				if (newVideo == undefined) {
					if (coverHided || VD.sizeMode<3) {
						$video[0].pause();
						$cover.css('visibility', '');
						$video.css('visibility', 'hidden');
						coverHided = false;
						videoHided = true;
					}
				} else {
					videoHided = false;
				}
			}

			function changSrc() {
				if (newVideo != undefined) {
					var getVideoSources = function($figure) {
						var s4 = $figure.attr('data-media-v4'),
							s3 = $figure.attr('data-media-v3') || s4,
							s2 = $figure.attr('data-media-v2') || s3,
							s1 = $figure.attr('data-media-v1') || s2;
						return [null, s1, s2, s3, s4];
					}
					var _sizeMode = VD.sizeMode;
					if (_sizeMode != sizeMode) {
						sizeMode = _sizeMode;
						if (getVideoSources($figure)[sizeMode] == 'none' || getVideoSources($figure)[sizeMode] == 'NONE') {
							$video[0].pause();
							$cover.css('visibility', '');
							$video.css('visibility', 'hidden');
							coverHided = false;
							videoHided = true;
						} else {
							$cover.css('visibility', 'hidden');
							$video.css('visibility', '');
							var crateSouce = '<source src="' + getVideoSources($figure)[sizeMode] + '.mp4" type="video/mp4"><source src="'+ getVideoSources($figure)[sizeMode] +'.webm" type="video/webm"><source src="'+ getVideoSources($figure)[sizeMode] +'.ogv" type="video/ogg">'
							$video.innerHTML = crateSouce;
							$video[0].load();
							coverHided = false;
							videoHided = true;
						}

					}
				}
			}

			var parallaxer = {currentTime: 0},
				prevVideoTime = 0;

			function parallax(e, visiblePercent) {
				if (ready) {
					visiblePercent = Math.max(0, Math.min(1, (visiblePercent*1.25)-0.125));
					tweener && tweener.kill();
					tweener = TweenMax.to(parallaxer, 0.5, {
						startAt: {currentTime: $video[0].currentTime},
						currentTime: Math.min(duration-0.05/* ie11 bug */, duration*visiblePercent),
						ease: 'easeOutQuad',
						lazy: true,
						onUpdate: function() {
							$video[0].currentTime = parallaxer.currentTime;
							return;
							var current = Math.round(parallaxer.currentTime*10000)/10000;
							if (prevVideoTime != current) {
								$video[0].currentTime = current;
								prevVideoTime = current;
							}
						}
					});
				}
			}

			return true;

		},

		setLayerToggler: function() {

			var $button = $(this),
				$layer = $($button.attr('href')),
				$layerTitle = $layer.find('.layer-title'),
				$opener = null,
				opened = false;

			if (!$layer.length) {
				return;
			}

			$button.click(function() {
				$opener = $button;
				show();
				return false;
			});

			$layer.find('button[class*="c_btn_close"]').click(hide);

			function show() {
				if (!opened) {
					$layer.addClass('show');
					VD.noScroll.on();
					$layerTitle.focus();
					opened = true;
				}
			}

			function hide() {
				if (opened) {
					$layer.removeClass('show');
					$opener && $opener.focus();
					$opener = null;
					VD.setTransitionEndEvent($layer, function() {
						VD.noScroll.off();
					});
					opened = false;
				}
			}

		},

		vodPlayer: (function() {

			var $layer, $layerTitle, $iframeBox, $iframe, $closeButton,
				$opener = null,
				opened = false,
				$baseContentsArea = null,
				$baseContentsClickable = null,
				isKeydown = false;


			function show(url, opener, autoplay) {

				var id = url.split('?v=')[1];

				if (!$layer) {
					$layer = $([
						'<div id="layer-youtube" class="m_layer-youtube"><div class="m_ly_inner">',
							'<span class="layer-title" tabindex="0">Movie player Layer</span>',
							'<div class="m_ly_header">',
								'<h3 class="c_txt_ly-type1 heading">Official introduction</h3>',
							'</div>',
							'<div class="m_ly_contents">',
								'<div class="m_video_view"><iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="about:blank"></iframe></div>',
							'</div>',
							'<nav><button type="button" class="c_btn_close-type1">Youtube Close</button></nav>',
						'</div></div>'
					].join(''));
					$layerTitle = $layer.find('span.layer-title');
					$iframe = $layer.find('iframe');
					$iframeBox = $iframe.parent();
					$closeButton = $layer.find('button[class*="_btn_close"]');
					$closeButton.one('keydown', function() {
						isKeydown = true;
					});
					$closeButton.bind('click touchend', hide);
					$layer.bind('touchmove', VD.preventDefault)
						.appendTo(document.body);
				}
				$baseContentsArea = $('#wrap');
				$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
				$baseContentsClickable.each(function() {
					var tabindex = $(this).attr('tabindex');
					if (tabindex!==undefined&&tabindex!==null) {
						$(this).data('prev-tabindex', tabindex);
					}
					$(this).attr('tabindex','-1');
				});

				if (!opened) {
					if (opener) {
						$opener = $(opener);
					}
					$iframe.attr('src', VD.getYoutubePlayerLink(id, autoplay)).appendTo($iframeBox);
					$layer.addClass('show');
					$layerTitle.focus();
					VD.noScroll.on();
					opened = true;
				}

			}

			function hide() {
				if (opened) {
					$layer.removeClass('show');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
					});
					isKeydown && $opener && $opener.focus();
					$opener = null;
					VD.setTransitionEndEvent($layer, function() {
						$iframe.attr('src', 'about:blank').detach();
						VD.noScroll.off();
					});
					opened = false;
				}
				isKeydown = false;
			}

			return {
				show: show,
				hide: hide
			}

		})(),

		getYoutubePlayerLink: function(id, autoplay, option) {
			return 'https://www.youtube.com/embed/'+ id +'?enablejsapi=1&version=3&autoplay='+ (autoplay ? 1 : 0) +'&wmode=opaque' + (option&&option!=''?'&'+option:'');
		},

		imageResizeViaCanvas: (function() {

			function canvasResizer(_image, width, height, widthTo, heightTo, callback) {
				var canvas = document.createElement('canvas'),
					context = canvas.getContext('2d'),
					image = new Image();
				image.onload = function() {
					canvas.width = widthTo;
					canvas.height = heightTo;
					context.drawImage(image, 0, 0, widthTo, heightTo);
					this.onload = null;
					this.src = canvas.toDataURL();
					callback(this);
				}
				image.src = _image.src;
			}

			return function(image, widthTo, heightTo) {

				var resizedImage = new Image(),
					nowWidth, nowHeight;

				resizedImage.onload = function() {
					nowWidth = this.width;
					nowHeight = this.height;
					this.onload = null;
					check(this);
				}
				resizedImage.src = image.src;

				function check(_image) {
					resizedImage = _image;
					if (nowWidth/2 > widthTo && nowHeight/2 > heightTo) {
						canvasResizer(resizedImage, nowWidth, nowHeight, nowWidth/2, nowHeight/2, check);
						nowWidth = nowWidth/2;
						nowHeight = nowHeight/2;
					} else if (nowWidth) {
						canvasResizer(resizedImage, nowWidth, nowHeight, widthTo, heightTo, check);
						nowWidth = nowHeight = 0;
					} else {
						image.src = resizedImage.src;
					}
				}

			}

		})(),

		noScroll: (function() {

			var $documentElement,
				$wrap,
				$header,
				$headerButtonBox,
				$topButtonBox,
				scrollBarWidth;

			function assign() {
				$documentElement = $(document.documentElement);
				$wrap = $('#wrap');
				$header = $(VD.isVd?'#header':VD.dom.header);
				$headerButtonBox = $header.find('p.link');
				$topButtonBox = $('div.f_backtotop');
				scrollBarWidth = VD.scrollBarWidth;
			}

			return {
				activated: false,
				on: function() {
					var paddingRight = 0;
					!$documentElement && assign();
					VD.scrollFixSkip = true;
					$documentElement.addClass('no-scroll').css('paddingRight', scrollBarWidth);
					if (VD.areaWidth > 1920+scrollBarWidth) {
						paddingRight = scrollBarWidth;
					} else {
					}
					$topButtonBox.css('paddingRight', scrollBarWidth);
					if ($wrap.hasClass('subnav-fixed')) {
					}
					VD.noScroll.activated = true;
					VD.noScroll.resize();
				},
				off: function() {
					VD.noScroll.activated = false;
					VD.scrollFixSkip = false;
					$documentElement.removeClass('no-scroll').css('paddingRight', '');
					$topButtonBox.css('paddingRight', '');
					VD.noScroll.resize();
				},
				resize: function() {
					!$documentElement && assign();
					if (VD.isPoorBrowser) {
						return;
					}
					var marginRight = Math.round((VD.areaWidth-(($header[0])?$header[0].offsetWidth:0))/2);
					if (VD.noScroll.activated) {
						marginRight += VD.scrollBarWidth;
					}
					$headerButtonBox.css('marginRight', marginRight);
				}
			}

		})(),

		bodyTabKeyControls: (function() {

			var $baseContentsArea, $baseContentsClickable;

			return {
				on: function() {
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('o-prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
						$(this).removeData('o-prev-tabindex');
					});
					$baseContentsArea = $baseContentsClickable = null;
				},
				off: function($base) {
					$baseContentsArea = $base ? $base : $('#wrap');
					$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).attr('tabindex');
						var prevTabindex = $(this).data('o-prev-tabindex');
						if (prevTabindex==undefined||prevTabindex==null||prevTabindex=="") {
							if (tabindex!==undefined&&tabindex!==null) {
								$(this).data('o-prev-tabindex', tabindex);
							}
							$(this).attr('tabindex','-1');
						}
					});

				},
			}
		})(),

		setOverflowYEdges: function($target) {

			var pointYAtStart, getPoint = $._event.getpoint;

			$target.bind('touchstart', function(e) {
				pointYAtStart = VD.getEventPoint(e)[1];
			});

			$target.bind('touchmove', function(e) {
				var pointY = VD.getEventPoint(e)[1];
				if (
					( this.scrollTop === 0 && pointY > pointYAtStart ) ||
					( this.scrollTop >= this.scrollHeight-this.offsetHeight && pointYAtStart > pointY )
				) {
					e.preventDefault();
					return false;
				}
				e.stopPropagation();
				return true;
			});

		},

		getImageSources: function($image) {
			var s4 = $image.attr('data-media-s4') || $image.attr('src'),
				s3 = $image.attr('data-media-s3') || s4,
				s2 = $image.attr('data-media-s2') || s3,
				s1 = $image.attr('data-media-s1') || s2;
			return [null, s1, s2, s3, s4];
		},

		setTabFocusTrap: function($box, $toFocus, tabIndex) {
			$('<div tabindex="'+ (tabIndex || 0) +'" />')
				.focus(function() {
					$toFocus.focus();
				})
				.appendTo($box);
		},

		getEventType: $._event.gettype,
		getEventPoint: $._event.getpoint,

		setTransitionEndEvent: (function() {
			var supportTransition = $.support.transition,
				transitionEndName = 'transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd';
			return function($target, callback) {
				if (supportTransition) {
					$target.bind(transitionEndName, function(e) {
						if (e.target == this) {
							callback.call(this);
							$target.unbind(transitionEndName);
						}
					});
				} else {
					callback.call($target[0]);
				}
			}
		})(),

		loadImage: function($image, callback) {
			if ($image[0].complete) {
				$image.unbind({load: callback});
				callback.call($image);
			} else {
				if ($image[0].src==$image[0].src) {
					if ($image[0].complete) {
						$image.unbind({load: callback});
						callback.call($image);
					} else {
						$image.unbind({load: callback}).bind({load: callback});
					}
				} else {
					$image.bind({load: callback});
					$image[0].src = $image[0].src;
				}
			}
		},

		setMediaBaseURL: function(mediaBaseURL) {
			return function(src) {
				return (/^(http|\/global\/)/).test(src)||(''+src).indexOf('.')==0 ? src : mediaBaseURL+src;
			}
		},

		sharing: function() {

			var
				$body = $(document.body),
				provider = VD.stripTags(this.innerHTML).replace(/ /g, '').toLowerCase(),
				//bodyDataURL = $body.attr('data-url'),
				//url = encodeURIComponent(this.getAttribute('data-share-url') || (!bodyDataURL || bodyDataURL == '-' ? location.href : bodyDataURL)),
				url = encodeURIComponent(location.href),
				message = encodeURIComponent(this.getAttribute('data-share-msg') || $body.attr('data-msg') || ''),
				tags = encodeURIComponent(this.getAttribute('data-share-tags') || $body.attr('data-tags') || 'SamsungMobile'),
				popupSize, popupURL, popup;

			if (provider == 'facebook') {
				popupSize = [560, 525];
				popupURL = 'https://www.facebook.com/sharer/sharer.php?u='+ url;
			} else if (provider == 'twitter') {
				//if ($body.attr('data-url') == '-') {
				//	url = null;
				//}
				popupSize = [680, 400];
				popupURL = 'https://twitter.com/intent/tweet?text='+ message +'&hashtags='+ tags + (url ? '&url='+ url : '');
			} else if (provider == 'googleplus' || provider == 'google+') {
				popupSize = [510, 510];
				popupURL = 'https://plus.google.com/share?url='+ url;
			} else if (provider == 'linkedin') {
				popupSize = [550, 500];
				popupURL = 'https://www.linkedin.com/shareArticle?url='+ url;
			}

			popup = VD.popup(popupURL, popupSize[0], popupSize[1], 'shareWindow');
			popup && popup.focus();

			return false;

		},

		setHash: function(hash) {
			var href = location.href.split('#')[0];
			location.replace(href +'#!/'+ (hash || ''));
		},

		scrollTracking: function() {
			var omniCode = $(this).data('omni-scroll-code');
			var prevOmniCode = VD.___scroll_omniCode;
			VD.___scroll_omniCode = omniCode;
			if (omniCode!=null&&omniCode!=''&&omniCode!=prevOmniCode) {
				VD.omniture('scroll:'+omniCode);
			}
		},

		tracking: function() {
			var omniCode = this.getAttribute('data-omni');
			var omniType = this.getAttribute('data-omni-type');
			if (omniCode!=null&&omniCode!='') {
				VD.omniture(omniCode, omniType);
			}
		},

		omniture: function(name, type) {
			var omniTag,
				isMicrositeAction = (type&&type!='') ? false : true;
			if (VD.isVd) {
				omniTag = [
					'global:', (window.OMNI_CAMPAIGN_NAME || ''),
					name.indexOf(':') !== 0 ? ':'+ (window.OMNI_PAGE_NAME || '') +':'+ name : name
				].join('');
				if (VD.isTestURL) {
					console.log('omniture: "'+ omniTag +'"');
				} else {
					window.omniture_click && omniture_click(omniTag);
				}
			} else {
				type = (isMicrositeAction) ? 'microsite_action' : type;
				if (isMicrositeAction) {
					/*
					omniTag = [
						(window.OMNI_CAMPAIGN_NAME || 'galaxy2016'),
						name.indexOf(':') !== 0 ? ':'+ (window.OMNI_PAGE_NAME || '') +':'+ name : name
					].join('');
					*/
					omniTag = name.indexOf(':') !== 0 ? (window.OMNI_PAGE_NAME || '') +':'+ name : name.substring(1);
				} else {
					omniTag = name;
				}
				if (VD.isTestURL) {
					console.log('omniture : "'+ type +'", "'+ omniTag +'"');
				} else {
					window.sendClickCode && sendClickCode(type, omniTag);
				}
			}
		},

		svgFillTween: (function() {
			if (!$.browser.ie) {
				return function(element, color) {
					element.setAttribute('fill', color);
				}
			} else {
				return function(element, color) {
					$('span').css('color', element.getAttribute('fill'))
						._animate({color: color}, {queue: false, duration: 250, easing: 'easeInOutQuad', step: function(v) {
							element.setAttribute('fill', v.color);
						}});
				}
			}
		})(),

		popup: function(url, width, height, name) {
			return window.open(url, name || '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+ (width+VD.scrollBarWidth) +',height='+ height);
		},

		stripTags: function(text) {
			return text.replace(/<[^>]+>/g, '');
		},

		addZero: function(value) {
			return 10 > value ? '0'+ value : value;
		},

		preventDefault: function(e) {
			e.preventDefault();
		},

		returnFalse: function() {
			return false;
		},

		getScrollTop: function() {
			return document.documentElement.scrollTop || document.body.scrollTop || 0;
		},

		getScrollHeight: function() {
			return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		},

		getMaxScrollTop: function() {
			return VD.getScrollHeight()-VD.areaHeight;
		},

		setScrollTop: function(v) {
			$(window).scrollTop(v);
		},

		setSmoothScrollTop: function(v, time, callback) {
			$('html, body')._animate({scrollTop: v}, {queue: false, duration: time || 1000, easing: 'easeInOutQuart', complete: callback});
		},

		getScrollBarWidth: function() {
			var div = document.createElement('div'), scrollBarWidth;
			div.style.cssText = 'position: absolute; left: -999em; width: 100px; height: 100px; overflow: scroll;';
			document.body.appendChild(div);
			scrollBarWidth = 100-div.clientWidth;
			document.body.removeChild(div);
			div = null;
			return scrollBarWidth;
		},

		scroll: (function(e) {

			var
				ie = navigator.userAgent.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),
				webkit = (/applewebkit/i).test(navigator.userAgent),
				documentElement = document.documentElement,
				scrollCaptured = false,
				lastScrollTop = 0,
				maxScrollTop = 0;

			if ((/win/i).test(navigator.appVersion) && ie) {
				$(documentElement)
					.bind('mousewheel', function(e) {
						if (VD.scrollFixSkip === true) {
							return true;
						}
						scrollFix(e.originalEvent.wheelDelta*-1);
						e.preventDefault();
					})
					.bind('keydown', function(e) {
						if (VD.scrollFixSkip) {
							return true;
						}
						var keyCode = e.keyCode, documentHeight = documentElement.clientHeight, newScrollTop;
						if ((/^(32|33|34|38|40)$/).test(keyCode)) {
							scrollFix(keyCode == 32 || keyCode == 34 ? documentHeight : keyCode == 33 ? -documentHeight : keyCode == 38 ? -75 : 75);
							e.preventDefault();
						}
					});
			}

			function scrollFix(scrollBy) {
				var newScrollTop = Math.min(getMaxScrollTop(), Math.max(0, getScrollTop()+scrollBy));
				if (newScrollTop != lastScrollTop) {
					scroll(newScrollTop);
					scrollCaptured = true;
					document[webkit ? 'body' : 'documentElement'].scrollTop = newScrollTop;
				}
			}

			function getScrollTop() {
				return documentElement.scrollTop || (document.body ? document.body.scrollTop : 0) || 0;
			}

			function getMaxScrollTop() {
				return Math.max(document.body ? document.body.scrollHeight : 0, documentElement.scrollHeight)-Math.min(documentElement.offsetHeight, documentElement.clientHeight);
			}

			function scroll(_scrollTop) {

				var scrollTop = typeof(_scrollTop) == 'number' ? _scrollTop : getScrollTop();
				lastScrollTop = scrollTop;
				if (scrollCaptured) {
					scrollCaptured = false;
					return false;
				}

				VD.scrollTop = scrollTop;
				maxScrollTop = getMaxScrollTop();

				VD.scrollTop = scrollTop;
				VD.header && VD.header.scroll && VD.header.scroll(scrollTop, maxScrollTop);
				VD.sections && VD.sections.scroll && VD.sections.scroll(scrollTop, maxScrollTop);
				// VD.footer && VD.footer.scroll && VD.footer.scroll(scrollTop, maxScrollTop);

				if (VD.scrollFunctions.length) {
					$.each(VD.scrollFunctions, function() {
						this(scrollTop, maxScrollTop);
					});
				}

			}

			return scroll;

		})(),


		hello: function(selector, opt) {
			var $element = $(selector), arr,
				$article = $element.closest('section[class^="m_"] > article');
			if ($article&&$article.get(0)) {
				arr = $article.data('hello');
				if (!arr) {
					arr = [];
				}
				if (!opt) {
					opt = {};
				}
				opt.css = (!opt.css) ? (arr.length) ? 'hello-'+(arr.length+1) : 'hello' : opt.css;
				opt.$elementTop = $element;
				opt.$elementBottom = (!opt.bottom) ? $element : $(opt.bottom);
				opt.baseLine = (!opt.baseLine) ? 3 : opt.baseLine;
				arr.push(opt);
				$article.data('hello', arr);
			}
			return this;
		},



		resize: function(func) {

			if (typeof(func)=='function') {
				this.resizeFunctions.push(func);
				return this;
			}

			var documentElement = document.documentElement,
				width, height, sizeMode;

			width = documentElement.clientWidth;
			if (VD.isPoorBrowser) {
				width = Math.max(document.getElementById('wrap').offsetWidth, width);
			}
			height = $(window).height();

			// ignore Mode
			if (func !== true) {
				if (!$.browser.mobile && width == VD.areaWidth && height == VD.areaHeight) {
					return;
				} else if ($.browser.mobile && width == VD.areaWidth) {
					return;
				}
			}

			sizeMode = width > 1440 ? 4 : width > 1023 ? 3 : width > 767 ? 2 : 1;
			VD.prevSizeMode = VD.sizeMode;
			if (sizeMode != VD.sizeMode) {
				VD.sizeMode = sizeMode;
				documentElement.className = documentElement.className.replace(/ *s[1-4][1-4]?/g, '') +' s'+ sizeMode +' s'+ (sizeMode > 2 ? 34 : 12);
			}
			documentElement.className = documentElement.className.replace(/ *s0/, '') + (360 > width ? ' s0' : '');

			VD.areaWidth = width;
			VD.areaHeight = height;

			VD.header && VD.header.resize && VD.header.resize();
			VD.sections && VD.sections.resize && VD.sections.resize();
			// VD.footer && VD.footer.resize && VD.footer.resize();
			VD.noScroll.resize();

			if (VD.resizeFunctions.length) {
				$.each(VD.resizeFunctions, function() {
					this();
				});
			}

			VD.scroll();

		},

		ready: function(func) {
			if (func===undefined) {
				if (this.readyFunctions.length) {
					$.each(this.readyFunctions, function() {
						this();
					});
				}
			} else {
				if (typeof(func)=='function') {
					this.readyFunctions.push(func);
				}
			}
			return this;
		},

		load: function(func) {
			if (func===undefined) {
				if (this.loadFunctions.length) {
					$.each(this.loadFunctions, function() {
						this();
					});
				}
			} else {
				if (typeof(func)=='function') {
					this.loadFunctions.push(func);
				}
			}
			var checkGnb = location.href.split('/#')[1];
			
			return this;

		},

		initialize: function() {

			if (this.initialized) {
				return;
			}
			this.initialized = true;


			this.ready();


			if (!this.isVd) {
				this.path.root = '..';
				this.mediaBaseURL = ' ';
			}

			$(document.documentElement)
				.addClass($.browser.mobile ? 'mobile' : 'desktop')
				.decideClass('oldandroid', $.browser.android && 430 > $.browser.android)
				.decideClass('color_yb', $._cookie.get('highContrastMode') == '1');


			this.hashMenu = location.href.split('#!/')[1];
			this.hashMenu && this.isTestURL && console.log('hash menu: "'+ this.hashMenu + '"');

			this.mediaBaseURL = this.mediaBaseURL.replace(/\/$/, '');
			this.setMediaBaseURL = this.setMediaBaseURL(this.mediaBaseURL);

			this.scrollBarWidth = this.getScrollBarWidth();

			$('body style').each(function() {
				this.removeAttribute('scoped');
			});


			if (VD.isGPSI) {
				this.resize(true);
				$('body img')
					.not('#kv [class*="f_header-"] img')
					.not('#kv-type2 [class*="f_header-"] img')
					.not('div.gift_header .heading img')
					.not('div.theme-steps div.img img')
					.each(function(i) {
						var $image = $(this),
							source = VD.setMediaBaseURL(VD.getImageSources($image)[VD.sizeMode].replace(/^\./, ''));
						$image.attr('src', '/dam/blank.gif');
						$image.css({
							backgroundImage: 'url('+ source +')',
							backgroundRepeat: 'no-repeat',
							backgroundSize: VD.sizeMode > 2 ? 'cover' : '100% auto',
							backgroundPosition: '50% 50%'
						});
					});
				$('#kv,#kv-type2').find('[class*="f_header-"]').find('.kv-title, .kv-text, div').show();
				$('#kv,#kv-type2').css({width: '100%', height: $(window).height()+100})
					.find('div.f_container figure')
						.css({left: 'auto', width: '100%', marginLeft: 'auto'})
						.css($.support.transform, 'none')
					.find('img').css({width: '100%', height: '100%'});
				$('#kv,#kv-type2').find('div.f_container figure').each(function() {
					this.style.marginLeft = Math.min(0, (this.parentNode.offsetWidth-this.offsetWidth)/2) +'px';
				});
				if ($('#kv').hasClass('m_content-slider')||$('#kv-type2').hasClass('m_content-slider')) {
					$('#kv,#kv-type2').children().not('nav').not(':first').hide();
				}
				return;
			}

			this.sections = this.sections();

			if (VD.isVd) {
				$('a[data-omni], button[data-omni]')
					.unbind('click', VD.tracking)
					.bind('click', VD.tracking);
			} else {
				$('#content a[data-omni], #content button[data-omni]')
					.unbind('click', VD.tracking)
					.bind('click', VD.tracking);
			}

			$(window).resize(this.resize)
					.scroll(this.scroll);

			this.resize(true);

			setTimeout(function() {
				window.initBuyNowButtons && window.initBuyNowButtons();
				$(document.documentElement).addClass('load');
				VD.load();

				setTimeout(function() {
					var hash = location.hash, $section, pattern = /#[A-Z0-9-_]+$/i;
					pattern.test(hash) && ($section = $(hash)).length && VD.setScrollTop($section.offset().top, 750);
				}, 100);
			}, 100);
		}
	};


	$(window).load(function() {
		setTimeout(function() {
			VD.initialize();
		}, 0);
	});
})(window.jQuery);

if ($.browser.ie > 9) {
	var enableInlineVideo=function(){"use strict";
	function e(e,i,n,r){function t(n){d=i(t,r),e(n-(a||n)),a=n}var d,a;return{start:function(){d||t(0)},stop:function(){n(d),d=null,a=0}}}function i(i){return e(i,requestAnimationFrame,cancelAnimationFrame)}function n(e,i,n,r){function t(i){Boolean(e[n])===Boolean(r)&&i.stopImmediatePropagation(),delete e[n]}return e.addEventListener(i,t,!1),t}function r(e,i,n,r){function t(){return n[i]}function d(e){n[i]=e}r&&d(e[i]),Object.defineProperty(e,i,{get:t,set:d})}function t(e,i,n){n.addEventListener(i,function(){return e.dispatchEvent(new Event(i))})}function d(e,i){Promise.resolve().then(function(){e.dispatchEvent(new Event(i))})}function a(e){var i=new Audio;return t(e,"play",i),t(e,"playing",i),t(e,"pause",i),i.crossOrigin=e.crossOrigin,i.src=e.src||e.currentSrc||"data:",i}function o(e,i,n){(m||0)+200<Date.now()&&(e[b]=!0,m=Date.now()),n||(e.currentTime=i),w[++T%3]=100*i|0}function u(e){return e.driver.currentTime>=e.video.duration}function s(e){var i=this;i.video.readyState>=i.video.HAVE_FUTURE_DATA?(i.hasAudio||(i.driver.currentTime=i.video.currentTime+e*i.video.playbackRate/1e3,i.video.loop&&u(i)&&(i.driver.currentTime=0)),o(i.video,i.driver.currentTime)):i.video.networkState===i.video.NETWORK_IDLE&&0===i.video.buffered.length&&i.video.load(),i.video.ended&&(delete i.video[b],i.video.pause(!0))}function c(){var e=this,i=e[h];return e.webkitDisplayingFullscreen?void e[g]():("data:"!==i.driver.src&&i.driver.src!==e.src&&(o(e,0,!0),i.driver.src=e.src),void(e.paused&&(i.paused=!1,0===e.buffered.length&&e.load(),i.driver.play(),i.updater.start(),i.hasAudio||(d(e,"play"),i.video.readyState>=i.video.HAVE_ENOUGH_DATA&&d(e,"playing")))))}function v(e){var i=this,n=i[h];n.driver.pause(),n.updater.stop(),i.webkitDisplayingFullscreen&&i[E](),n.paused&&!e||(n.paused=!0,n.hasAudio||d(i,"pause"),i.ended&&(i[b]=!0,d(i,"ended")))}function p(e,n){var r=e[h]={};r.paused=!0,r.hasAudio=n,r.video=e,r.updater=i(s.bind(r)),n?r.driver=a(e):(e.addEventListener("canplay",function(){e.paused||d(e,"playing")}),r.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){r.driver.paused=!0},play:function(){r.driver.paused=!1,u(r)&&o(e,0)},get ended(){return u(r)}}),e.addEventListener("emptied",function(){var i=!r.driver.src||"data:"===r.driver.src;r.driver.src&&r.driver.src!==e.src&&(o(e,0,!0),r.driver.src=e.src,i?r.driver.play():r.updater.stop())},!1),e.addEventListener("webkitbeginfullscreen",function(){e.paused?n&&0===r.driver.buffered.length&&r.driver.load():(e.pause(),e[g]())}),n&&(e.addEventListener("webkitendfullscreen",function(){r.driver.currentTime=e.currentTime}),e.addEventListener("seeking",function(){w.indexOf(100*e.currentTime|0)<0&&(r.driver.currentTime=e.currentTime)}))}function l(e){var i=e[h];e[g]=e.play,e[E]=e.pause,e.play=c,e.pause=v,r(e,"paused",i.driver),r(e,"muted",i.driver,!0),r(e,"playbackRate",i.driver,!0),r(e,"ended",i.driver),r(e,"loop",i.driver,!0),n(e,"seeking"),n(e,"seeked"),n(e,"timeupdate",b,!1),n(e,"ended",b,!1)}function f(e,i){if(void 0===i&&(i={}),!e[h]){if(!i.everywhere){if(!y)return;if(!(i.iPad||i.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent))return}!e.paused&&e.webkitDisplayingFullscreen&&e.pause(),p(e,!e.muted),l(e),e.classList.add("IIV"),e.muted&&e.autoplay&&e.play(),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}var m,y="object"==typeof document&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches,h="bfred-it:iphone-inline-video",b="bfred-it:iphone-inline-video:event",g="bfred-it:iphone-inline-video:nativeplay",E="bfred-it:iphone-inline-video:nativepause",w=[],T=0;return f}();
}

;(function($) {
    $(".cookie-notice button").on("click",function(){
        var h = $(".cookie-notice").outerHeight();
        var vh = $enterKv.height();
        $enterKv.height(vh+h);
        $(".cookie-notice").css("display","none");
    });

    $('#accessibility').on('click', function () {
        $(this).toggleClass('active');
        $('html').toggleClass('color_bw');
        return false;
    });

    var wrap_height, lnbHeight, active_menu;

    /*<!-- LNB -->*/
    $('.sticky nav li').each(function() {
        var $frame = $('<span class="frame-top" /><span class="frame-bottom" />');
        $(this).append($frame);
    });
    /*<!-- // LNB -->*/
    $(window).resize(function(e){
        /*<!-- LNB -->*/
        active_menu = $('.sticky nav li.is-active');
        $('.sticky .bar').css({'left': $('a', active_menu).offset().left + parseInt($('a', active_menu).css('padding-left')), 'width': $('a', active_menu).width()});
        /*<!-- // LNB -->*/
    });
    $(window).load(function(){
        $('.sticky .bar').css({'left': $('a', active_menu).offset().left + parseInt($('a', active_menu).css('padding-left')), 'width': $('a', active_menu).width()});
        /*<!-- LNB -->*/
        var stickyInit = setInterval(function() {
            if($('.sticky').css('position') !== '-webkit-sticky' && $('.sticky').css('position') !== 'sticky' && $('.sticky').css('position') !== 'fixed') {
                $('.sticky').Stickyfill();
            } else {
                clearInterval(stickyInit);
            }
        }, 400);
        /*<!-- // LNB -->*/
    });


    // mask motion
    var 
    maskSquare = "<div class='mask top'></div><div class='mask lft'></div><div class='mask rgh'></div>",
    preTop = [],
    startPosition;
    
    moskMotion = function () {
        ($('html').hasClass('s1')) ? startPosition = 100 : startPosition = 0;

        $('.mask_motion').each(function () {
            var thisIdx = $('.mask_motion').index(this);

            if ( $(document).scrollTop() >= preTop[thisIdx] - $(this).height() - startPosition ) {
                $(this).addClass("on");
            }
        });
    }
    
    var squareMotion = function(e){
        var st = e.currentTarget.pageYOffset;
        var wh = $(window).height();
        
        var square = $(".square");
        if(st > square.offset().top-(wh/1.3)){
           square.addClass("on");
        }
    }
    $(window).scroll(function (e) {
        moskMotion();
        squareMotion(e);
    });

    setTimeout(function () {
        preTop.length = 0;
        $('.mask_motion').each(function () {
            $(this).append(maskSquare);
            preTop.push($(this).offset().top);
        });
    },100);
    VD.resize(function () {
        preTop.length = 0;
        $('.mask_motion').each(function () {
            preTop.push($(this).offset().top);
        });
    });
    
    $(window).on("scroll",function(e){
       if($(window).scrollTop() > 0){
            $(".scroll-guide").addClass("fade")
        }else{
            $(".scroll-guide").removeClass("fade");
        }
    });

    // KV
    var 
    $enterKv = $('.m_content_entertainment_kv'),
    $enterKvVideo = $enterKv.find('video');

    startMotion = function(start){
        var st = $(window).scrollTop(),
            screen = $(".m_content_entertainment_kv"),
            bg = screen.find('.bg'),
            w = screen.find(".bg.lft,.bg.rgh"),
            h = screen.find(".bg.btm"),
            motion;
        if(start == true){
            $("body, html").animate({"scrollTop":screen.height()},700)
        }
        if(st < screen.height()){
            if ($('html').hasClass('s1')) {
                motion = st/5;
                w.css("width",motion/2);
                h.css({"height" : motion/2, 'bottom' : -motion/10 });
            }else {
                motion = st/5;
                w.css("width",motion);
                h.css({"height" : motion, 'bottom' : -motion/2});
            }
        }
    }
    
    var breadcrumbHeight = 0; //header/footer

    $(window).load(function () {
        $('.load_dimd').css('display', 'none');
        if (!$('html').hasClass('android') && !$('html').hasClass('ios')) deviceKvVideo();

        $('.m_content_entertainment_kv').css({'width' : $(window).width(), 'height' : $(window).height()});

        if (!$('html').hasClass('ie8')) {
            $enterKvVideo.on('timeupdate', function() {
                $enterKv.decideClass('desc_show', this.currentTime >= this.duration);
                if (this.currentTime >= this.duration) {
                    $enterKvVideo[0].currentTime = 0;
                    $enterKvVideo[0].play();
                }
            });
        }

         //header/footer
        if ($('.cm-breadcrumb').length) {
            ($('html').hasClass('s12')) ? breadcrumbHeight = $('.cm-breadcrumb-title').outerHeight() : breadcrumbHeight = $('.cm-breadcrumb').outerHeight();
        }else {
            breadcrumbHeight = 0;
        }

        if ($('#header').length) {
            $enterKv.css({
                'width' : $(window).width(),
                'height' : ($(window).height() - $('.sticky').outerHeight() - $('#header').outerHeight() - breadcrumbHeight)
            });
        }else {
            $enterKv.css({
                'width' : $(window).width(),
                'height' : ($(window).height() - $('.sticky').outerHeight())
            });
        }
         //header/footer

         $enterKv.addClass('load');
    });
    VD.resize(function () {
        //header/footer
        if ($('.cm-breadcrumb').length) {
            ($('html').hasClass('s12')) ? breadcrumbHeight = $('.cm-breadcrumb-title').outerHeight() : breadcrumbHeight = $('.cm-breadcrumb').outerHeight();
        }else {
            breadcrumbHeight = 0;
        }
        if ($('#header').length) {
            $enterKv.css({
                'width' : $(window).width(),
                'height' : ($(window).height() - $('.sticky').outerHeight() - $('#header').outerHeight() - breadcrumbHeight)
            });
        }else {
            $enterKv.css({
                'width' : $(window).width(),
                'height' : ($(window).height() - $('.sticky').outerHeight())
            });
        }
         //header/footer
    });

    $(window).scroll(function () {
        startMotion(false);
    });
    $(".scroll-guide a").on("click",function(){
       startMotion(true);
        return false;
    });

    // kv video popup
    var 
    $uhdPopup = $('.uhd_video_layer'),
    $uhdPopupVideo = $uhdPopup.find('video')[0],
    $uhdPopupClose = $uhdPopup.find('.close');

    $enterKv.find('.play-ctrl > button').on('click', function () {
        $('html').css('overflow', 'hidden');
        $uhdPopup.css('display', 'block');

        if (!$('html').hasClass('ie8')) {
            $uhdPopupVideo.currentTime = 0;
            $uhdPopupVideo.play();
            
            $enterKvVideo[0].pause();
        }
        
        $('html *').attr('tabIndex', -1);
        $uhdPopup.find('.content video').attr('tabIndex', 0);
        $uhdPopup.find('.content .close').attr('tabIndex', 0);
        $uhdPopup.find('.content video').focus();

        $('html, body').off('scroll.disabledScroll mousewheel.disabledScroll DOMMouseScroll.disabledScroll touchmove.disabledScroll', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $uhdPopup.find('video').on('timeupdate', function() {
            if (this.currentTime >= this.duration) $uhdPopupClose.trigger('click');
        });
        $('#accessibility').css('display', 'none');
    });
    $uhdPopupClose.on('click', function () {
        $('html').css('overflow', '');
        $uhdPopup.css('display', 'none');

        $('html *').attr('tabIndex', '');
        $dragBtn.attr('tabIndex', 0);
        $enterKv.find('.play-ctrl > button').focus();

        $('html, body').off('.disabledScroll');

        if (!$('html').hasClass('ie8')) {
            $uhdPopupVideo.pause();
            $enterKvVideo[0].currentTime = 0;
            $enterKvVideo[0].play();
        }
        $('#accessibility').css('display', 'block');

        return false;
    });

$('.uhd_video_layer .close').on('click', function(){
setTimeout(function(){$('html.dotcom').css('overflow-y', 'scroll');},400);
})

    // UHD
    var
    $uhdWrap = $('.m_content_uhd'),
    $uhdArticle = $uhdWrap.find('article'),
    $uhdImgWrap = $uhdWrap.find('.img_wrap'),
    $uhdBgImg = $uhdWrap.find('.bg_img > img'),
    $uhdFrame = $uhdWrap.find('.frame'),
    $uhdFrameImg = $uhdWrap.find('.frame_img > img'),
    $uhdFrameEdge = $uhdWrap.find('.frame_edge'),
    _uhdHeight = 4000,
    _uhdMoveArea = 2300,
    _uhdOffset = 1138,
    _uhdBgScale = 0.28,
    _uhdBgMove = 411,
    uhdVideoStart = true,
    movetype = 0,
    oldClass,
    prevClass;

    $uhdWrap.css('height', _uhdHeight);

    $('body,html').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {
        if (!$('html').hasClass('ie8')) {
            if ($uhdWrap.hasClass('fixed') && !$('html').hasClass('s12')) {
                wheelDelta = e.originalEvent.wheelDelta;
                oldClass = $uhdImgWrap.attr('class');

                if (wheelDelta < 0) {
                    $uhdImgWrap.removeClass('up');
                    $uhdImgWrap.addClass('down');
                } else {
                    $uhdImgWrap.removeClass('down');
                    $uhdImgWrap.addClass('up');
                }

               if ( (oldClass != prevClass) ) {
                    // var moveTop = movetype ? $uhdWrap.offset().top - 100 : _uhdHeight + 200;
                    var moveTop = movetype ? $uhdWrap.offset().top - 100 : ($uhdWrap.offset().top + _uhdHeight) - _uhdOffset +50;

                    $('html, body').on('scroll.disabledScroll mousewheel.disabledScroll DOMMouseScroll.disabledScroll MozMousePixelScroll.disabledScroll', function (e) {
                         e.preventDefault();
                         e.stopPropagation();
                         return false;
                    });
                    VD.setSmoothScrollTop(moveTop, 2000, function() {
                          $uhdImgWrap.removeClass('down');
                          $uhdImgWrap.removeClass('up');

                          $('html, body').off('.disabledScroll');
                    });
                }
                prevClass = $uhdImgWrap.attr('class');
            }
        }
     });

    uhdScroll = function () {
        var
        moveTop = $(document).scrollTop() - $uhdWrap.offset().top,
        hudScrollEnd = ($uhdWrap.offset().top + _uhdHeight) - _uhdOffset,
        hudPercent = Math.min(1, moveTop/_uhdMoveArea );
        hudPercent = Math.min(1, Math.max(0, hudPercent));

        var stickyHeight = $('.sticky').outerHeight();

        if ($(document).scrollTop() >= ($uhdWrap.offset().top - stickyHeight) ) {
            var hudEndTop = _uhdHeight - _uhdOffset;

            if ($(document).scrollTop() >= hudScrollEnd) {
                $uhdWrap.removeClass('fixed');
                $uhdWrap.addClass('absol');
                $uhdArticle.css('top', hudEndTop + stickyHeight);

                movetype = 1;
            }else {
                $uhdWrap.addClass('fixed');
                $uhdWrap.removeClass('absol');
                $uhdArticle.css('top', stickyHeight);

                TweenMax.to($('.frame_edge .edge'), 1, {width : '100%', height : '100%', opacity : 1}, 0.1);
            }
        }else {
            $uhdWrap.removeClass('fixed');
            $uhdArticle.css('top', 0);

            TweenMax.to($('.frame_edge .edge'), 1, {width : 0, height : 0, opacity : 0}, 0.1);
            movetype = 0;
        }

        $uhdImgWrap.__css({ y : (_uhdBgMove * hudPercent), scale : 1 + ((_uhdBgScale-1) * hudPercent), force3D: true });
        $uhdBgImg.__css({opacity : 1-hudPercent, force3D: true });
        $uhdFrameEdge.__css({ opacity : 1-hudPercent, scale : 1+(hudPercent*2), force3D: true });

        if (!$('html').hasClass('android') && !$('html').hasClass('ios')) deviceKvVideo();
    }

    deviceKvVideo = function () {
        hudScrollEnd = ($uhdWrap.offset().top + _uhdHeight) - _uhdOffset;

        if ($(document).scrollTop() >= ($uhdWrap.offset().top - $('.sticky').outerHeight()) ) {
            if ($(document).scrollTop() < hudScrollEnd) {
                if(!$('html').hasClass('ie8')) $enterKvVideo[0].pause();
            }
        }else {
            if(!$('html').hasClass('ie8')) $enterKvVideo[0].play();
        }
    }

    uhdMobileMotionOn = function () {
        TweenMax.to($('.frame_edge .edge.left-top'), .05, { delay: 0 });
        TweenMax.to($('.frame_edge .edge.right-bottom'), .05, { delay: 0 });
        TweenMax.to($('.frame_edge .edge'), 1, {
            width: '100%',
            height: '100%',
            ease: Power3.easeInOut
        });
    }
    uhdMobileMotionOff = function () {
        TweenMax.to($('.frame_edge .edge.left-top'), .05, { delay: 0 });
        TweenMax.to($('.frame_edge .edge.right-bottom'), .05, { delay: 0 });
        TweenMax.to($('.frame_edge .edge'), 1, {
            width: '0',
            height: '0',
            ease: Power3.easeInOut
        });
    }

    VD.hello('.m_content_uhd .f_container .hello', {
        on: function() {
            $uhdWrap.addClass('hello');
            
            if ($('html').hasClass('s12')) {
                uhdMobileMotionOn();
            }else {
                if ($.browser.mobile) uhdMobileMotionOn();
            }
        },
        off: function() {
            $uhdWrap.removeClass('hello');

            if ($('html').hasClass('s12')) {
                uhdMobileMotionOff();
            }else {
                if ($.browser.mobile) uhdMobileMotionOff();
            }
        }
    });

    $(window).scroll(function () {
        if (!$('html').hasClass('s12')) {
            if(!$.browser.mobile) {
                if (!$('html').hasClass('ie8')) uhdScroll();
            }else {
                if (!$('html').hasClass('android') && !$('html').hasClass('ios')) deviceKvVideo();
            }
        }else {
            $uhdImgWrap.removeAttr('style');
            $uhdBgImg.removeAttr('style');
            $uhdFrameEdge.removeAttr('style');
            if (!$('html').hasClass('android') && !$('html').hasClass('ios')) deviceKvVideo();
        }
    });
    VD.resize(function () {
        if (!$('html').hasClass('s12')) {
            if(!$.browser.mobile && !$('html').hasClass('ie8')) uhdScroll();
        }
    });



    // drag event
    var
    $dragWrap = $('.qhdr_drag_box'), 
    $dragBtn = $('.qhdr_drag_box .control .hdr_btn'),
    $dragBg = $('.qhdr_drag_box .bar'),
    dragBtnSize,
    dragBtnSizeGap,
    dragValue = 0,
    dragValue2 = 0,
    btnLeft, prevLeft, currenLeft, keyLeft = 0,
    btnMinLeft = 12;

    // mouse event
    $dragBtn.on('click', function () {
        return false;
    });
    $dragBtn.on('mousedown touchstart', function (e) {
        prevLeft = e.pageX;
        btnLeft = parseInt($dragBtn.css('left'), 10);
        if (e.type == 'touchstart') prevLeft = e.originalEvent.touches[0].pageX;

        $('#contents').bind('mousemove touchmove', function (e) {
            e.preventDefault();
            currenLeft = e.pageX;
            if (e.type == 'touchmove') currenLeft = e.originalEvent.touches[0].pageX;
            moveDrag(e);
        });
    });
    $(document).on('mouseup touchend', function () {
        $('#contents').unbind('mousemove touchmove');
    });

    // keyboard event
    $dragBtn.on('keydown', function (e) {
        btnLeft = parseInt($dragBtn.css('left'), 10);
        if (e.keyCode == 39) {
            keyLeft = 20;
        }else if (e.keyCode == 37) {
            keyLeft = -20;
        }
        moveDrag(e);
    });

    $('.hdr_image').mousedown(function(){
        return false;
    });

    function moveDrag(e) {
        if(e.type == 'mousemove' || e.type == 'touchmove') $dragBtn.css('left', btnLeft + (currenLeft-prevLeft));
        if(e.type == 'keydown') $dragBtn.css('left', btnLeft + keyLeft);
        if (parseInt($dragBtn.css('left'), 10) < btnMinLeft) $dragBtn.css('left', btnMinLeft);
        if (parseInt($dragBtn.css('left'), 10) > $dragWrap.width() - ($dragBtn.width()/2) - btnMinLeft) $dragBtn.css('left', $dragWrap.width() - ($dragBtn.width()/2) - btnMinLeft);

        dragValue = Math.abs( (( parseInt($dragBtn.css('left'), 10) / ($dragWrap.width() - ($dragBtn.width()/2)) ) * 100) -100 );
        dragValue2 = ( parseInt($dragBtn.css('left'), 10) / ($dragWrap.width() - ($dragBtn.width()/2)) ) * dragBtnSizeGap;

        $('.hdr_image .on_view').css('opacity', 1-(dragValue/100) );
        $dragBg.css('width', parseInt($dragBtn.css('left'), 10));
    }

    function dragLoadMotion() {
        $dragBtn.addClass('ani');
        $('.hdr_image .on_view').stop().animate({'opacity' : 1}, 1000);

        $dragBtn.stop().animate({'left' : $dragWrap.width() - 30 }, 1000);
        $dragBg.stop().animate({'width' : $dragWrap.width()}, 1000, function () {
            // reverse
            $dragBtn.stop().animate({'left' : ($dragWrap.width()/2) - btnMinLeft }, 1000);
            $dragBg.stop().animate({'width' : $dragWrap.width()/2 }, 1000);
            $('.hdr_image .on_view').stop().animate({'opacity' : 0.5}, 1000);
        });
    }
    
    $(window).load(function () {
        $dragBtn.css('left', 0);
        $dragBg.css('width', 0);
        $('.hdr_image .on_view').css('opacity',0);
    });
    
    var resize = function() {
        if ($dragBtn.hasClass('ani')) {
            $dragBtn.css('left', ($dragWrap.width()/2) - btnMinLeft);
            $dragBg.css('width', $dragWrap.width()/2);
            $('.hdr_image .on_view').css('opacity',0.5);
        }
    }
    VD.resize(resize);

    VD.hello('.product_area .f_container .hello', {
        on: function() {
            if (!$dragBtn.hasClass('ani')) dragLoadMotion();
        }
    });


    /*<!-- SPEC -->*/
    var ie8 = ($.browser.ie == 8) ? true : false;
	var wrap_width, wrap_height, lnb_height;
	if(window.devicePixelRatio < 4) $('html').addClass('none-retina');

	var on = $.fn.on, timer;
	$.fn.on = function () {
	    var args = Array.apply(null, arguments);
	    var last = args[args.length - 1];

	    if (isNaN(last) || (last === 1 && args.pop())) return on.apply(this, args);

	    var delay = args.pop();
	    var fn = args.pop();

	    args.push(function () {
	        var self = this, params = arguments;
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	            fn.apply(self, params);
	        }, delay);
	    });

	    return on.apply(this, args);
	};

	$(window).resize(function() {
	    wrap_width = window.innerWidth;
	    wrap_height = window.innerHeight;
	    lnb_height = $('.sticky').innerHeight();
	    setTimeout(function() {
	        var specImgWidth = $('[data-section-name="spec"] article .image-group ul li:eq(0) img').width();
	        if(wrap_width > 782) {
	            $('[data-section-name="spec"] article .image-group a').css({'margin-top': specImgWidth * 0.2277, 'margin-left': 0});
	        } else {
	            $('[data-section-name="spec"] article .image-group a').css({'margin-top': specImgWidth * -0.3194, 'margin-left': specImgWidth * 0.29});
	        }
	        $('[data-section-name="spec"] article .image-group button.up').css('margin-top', specImgWidth * -0.3680);
	        $('[data-section-name="spec"] article .image-group button.down').css('margin-bottom', specImgWidth * -0.3680);

	        if($('[data-section-name="spec"] article .info table').innerHeight() > wrap_height * 0.5133 && wrap_width > 782) {
	            $('[data-section-name="spec"]').addClass('static');
	        } else {
	            $('[data-section-name="spec"]').removeClass('static');
	        }
	    }, 1);
	}).trigger('resize');

	// Spec 확대컷
	$('[data-section-name="spec"] .image-group .zoom').on('click touchstart', function(e) {
	    $('html *').attr('tabIndex',-1);
	    $('.zoom-box').attr('tabIndex',0);
	    $('.zoom-box + a').attr('tabIndex',0);
	    $('#accessibility').attr('tabIndex',0);
	    $('.zoom-box').focus();
	    var $zoomWrapper = $('<div class="zoom-wrapper" />');
	    if($('.zoom-wrapper').length == 0) {
	        e.preventDefault();
	        e.stopPropagation();
	        var zoom_img_src = $('[data-section-name="spec"] .image-group li.active img').attr('src').replace('spec_', 'spec_zoom_');
	        var zoom_alt = $('[data-section-name="spec"] .image-group li.active img').attr('alt');
	        if(wrap_width <= 782) {
	            zoom_img_src = zoom_img_src.replace('tmp_', 'mob_');
	        }
	        var $zoom = $('<div class="zoom-box" style="background-image: url(\'' + zoom_img_src + '\')"><img src="' + zoom_img_src + '" alt="' + zoom_alt + '"></div>');
	        var $closeBtn = $('<a href="javascript:;" class="close" data-omni-type="microsite_contentinter" data-omni="vd mkt page_the frame:spec:zoom out_1">Close</a>');
	        $zoomWrapper.append($zoom, $closeBtn);
	        $('[data-section-name="spec"]').append($zoomWrapper);
	        $('body').on('DOMMouseScroll mousewheel wheel', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	        });
	        var scrollTop = (($('img.dimd').innerHeight() + 100) * 0.5) - (window.innerHeight * 0.5);
	        var scrollLeft = (($('img.dimd').innerWidth() + 100) * 0.5) - (window.innerWidth * 0.5);
	        if(wrap_width <= 782) {
	            setTimeout(function() {
	                $zoom.scrollTop(scrollTop).scrollLeft(scrollLeft);
	                $zoomWrapper.animate({'opacity': 1}, 400);
	            }, 100);
	        } else {
	            $zoomWrapper.stop().animate({'opacity': 1}, 400);
	        }
	    }
	    return false;
	});
	$(document).on('click touchstart', '[data-section-name="spec"] .zoom-box + a', function(e) {
	    $('html *').attr('tabIndex','');
	    $dragBtn.attr('tabIndex', 0);
	    $('[data-section-name="spec"] .zoom-wrapper').stop().animate({'opacity': 0}, 400, function() {
	        $('body').off('DOMMouseScroll mousewheel wheel');
	        if(wrap_width > 782) {
	            $('[data-section-name="spec"]').attr('tabIndex', 0).focus();
	        }
	        $('[data-section-name="spec"] .zoom-wrapper').remove();
	    });
	});
    /*<!-- // SPEC -->*/
})(window.jQuery);
