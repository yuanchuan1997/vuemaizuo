(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f6bb0ec"],{"185b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.nowPlaying,(function(t,i){return n("div",{key:i,staticClass:"item-box"},[n("mvItem",{attrs:{data:t,title:"购票",id:t.id}},[n("p",{attrs:{slot:"other"},slot:"other"},[e._v(e._s(e._f("getFrom")(t.pubdates[0]))+" | "+e._s(t.durations[0]))])])],1)})),0)},r=[],o=(n("c975"),n("fb6a"),n("a434"),{name:"nowPlaying",mounted:function(){var e=this,t="https://douban.uieee.com/v2/movie/in_theaters";this.axios.get(t).then((function(t){var n=t.data.subjects;n.splice(0,2),e.nowPlaying=n}))},data:function(){return{nowPlaying:[]}},filters:{getFrom:function(e){var t=e.indexOf("("),n=e.indexOf(")");return e.slice(t+1,n)}}}),a=o,s=n("2877"),c=Object(s["a"])(a,i,r,!1,null,"68eb847c",null);t["default"]=c.exports},a434:function(e,t,n){"use strict";var i=n("23e7"),r=n("23cb"),o=n("a691"),a=n("50c4"),s=n("7b0b"),c=n("65f0"),f=n("8418"),l=n("1dde"),d=Math.max,u=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!l("splice")},{splice:function(e,t){var n,i,l,b,g,v,m=s(this),x=a(m.length),w=r(e,x),y=arguments.length;if(0===y?n=i=0:1===y?(n=0,i=x-w):(n=y-2,i=u(d(o(t),0),x-w)),x+n-i>h)throw TypeError(p);for(l=c(m,i),b=0;b<i;b++)g=w+b,g in m&&f(l,b,m[g]);if(l.length=i,n<i){for(b=w;b<x-i;b++)g=b+i,v=b+n,g in m?m[v]=m[g]:delete m[v];for(b=x;b>x-i+n;b--)delete m[b-1]}else if(n>i)for(b=x-i;b>w;b--)g=b+i-1,v=b+n-1,g in m?m[v]=m[g]:delete m[v];for(b=0;b<n;b++)m[b+w]=arguments[b+2];return m.length=x-i+n,l}})},c975:function(e,t,n){"use strict";var i=n("23e7"),r=n("4d64").indexOf,o=n("b301"),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0,c=o("indexOf");i({target:"Array",proto:!0,forced:s||c},{indexOf:function(e){return s?a.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-8f6bb0ec.7af8350c.js.map