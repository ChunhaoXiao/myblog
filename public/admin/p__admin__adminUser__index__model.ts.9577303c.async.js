(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{Z5it:function(a,e,t){"use strict";var n=t("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=n(t("p0pE")),r=n(t("d6i3")),u=t("i1hH"),c={namespace:"adminUser",state:{data:{list:[],pagination:{}}},effects:{fetch:r.default.mark(function a(e,t){var n,d,c,i;return r.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,d=t.call,c=t.put,a.next=4,d(u.queryRule,n);case 4:return i=a.sent,a.next=7,c({type:"save",payload:i});case 7:case"end":return a.stop()}},a)}),update:r.default.mark(function a(e,t){var n,d,c,i,l;return r.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,d=e.callback,c=t.call,i=t.put,a.next=4,c(u.updateRule,n);case 4:return l=a.sent,a.next=7,i({type:"edit",payload:l});case 7:d&&d();case 8:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return(0,d.default)({},a,{data:e.payload})},edit:function(a,e){return void 0!==a&&a.data.list.forEach(function(t,n){t.id===e.payload.data.id&&(a.data.list[n]=e.payload.data)}),(0,d.default)({data:e.payload},a)}}},i=c;e.default=i}}]);