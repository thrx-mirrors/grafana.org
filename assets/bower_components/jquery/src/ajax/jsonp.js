define(["../core","./var/nonce","./var/rquery","../ajax"],function(t,e,n){var i=[],r=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=i.pop()||t.expando+"_"+e++;return this[n]=!0,n}}),t.ajaxPrefilter("json jsonp",function(e,o,s){var a,c,l,u=e.jsonp!==!1&&(r.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&r.test(e.data)&&"data");return u||"jsonp"===e.dataTypes[0]?(a=e.jsonpCallback=t.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,u?e[u]=e[u].replace(r,"$1"+a):e.jsonp!==!1&&(e.url+=(n.test(e.url)?"&":"?")+e.jsonp+"="+a),e.converters["script json"]=function(){return l||t.error(a+" was not called"),l[0]},e.dataTypes[0]="json",c=window[a],window[a]=function(){l=arguments},s.always(function(){window[a]=c,e[a]&&(e.jsonpCallback=o.jsonpCallback,i.push(a)),l&&t.isFunction(c)&&c(l[0]),l=c=void 0}),"script"):void 0})});