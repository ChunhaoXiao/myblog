(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{ZAYa:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryRule=d,t.addRule=i,t.updateRule=p,t.removeRule=f,t.forceDeleteRule=w,t.restoreRule=v;var n=r(a("d6i3")),u=r(a("1l/V")),c=r(a("sy1d"));function d(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/friends",{params:t}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function i(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/friends",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function p(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/friends/".concat(t.id),{method:"PUT",data:t}));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/friends/".concat(t.id),{method:"DELETE",data:t}));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/friends/".concat(t.id,"/forceDelete"),{method:"DELETE",data:t}));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/friends/".concat(t.id,"/restore"),{method:"PATCH",data:t}));case 1:case"end":return e.stop()}},e)})),m.apply(this,arguments)}},scMl:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),u=r(a("d6i3")),c=a("ZAYa"),d={namespace:"adminFriendship",state:{data:{list:[],pagination:{}}},effects:{fetch:u.default.mark(function e(t,a){var r,n,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,d=a.put,e.next=4,n(c.queryRule,r);case 4:return l=e.sent,e.next=7,d({type:"save",payload:l});case 7:case"end":return e.stop()}},e)}),add:u.default.mark(function e(t,a){var r,n,d,l,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,d=a.call,l=a.put,e.next=4,d(c.addRule,r);case 4:return i=e.sent,e.next=7,l({type:"new",payload:i});case 7:n&&n();case 8:case"end":return e.stop()}},e)}),update:u.default.mark(function e(t,a){var r,n,d,l,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,d=a.call,l=a.put,e.next=4,d(c.updateRule,r);case 4:return i=e.sent,e.next=7,l({type:"edit",payload:i});case 7:n&&n();case 8:case"end":return e.stop()}},e)}),destroy:u.default.mark(function e(t,a){var r,n,d,l,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,d=a.call,l=a.put,e.next=4,d(c.removeRule,r);case 4:return i=e.sent,e.next=7,l({type:"edit",payload:i});case 7:n&&n();case 8:case"end":return e.stop()}},e)}),forceDelete:u.default.mark(function e(t,a){var r,n,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,d=a.call,l=a.put,e.next=4,d(c.forceDeleteRule,r);case 4:return e.next=6,l({type:"remove",payload:r.id});case 6:n&&n();case 7:case"end":return e.stop()}},e)}),restore:u.default.mark(function e(t,a){var r,n,d,l,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,d=a.call,l=a.put,e.next=4,d(c.restoreRule,r);case 4:return i=e.sent,e.next=7,l({type:"edit",payload:i});case 7:n&&n();case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,n.default)({},e,{data:t.payload})},new:function(e,t){return void 0!==e&&e.data.list.push(t.payload.data),(0,n.default)({data:t.payload},e)},edit:function(e,t){return void 0!==e&&e.data.list.forEach(function(a,r){a.id===t.payload.data.id&&(e.data.list[r]=t.payload.data)}),(0,n.default)({data:t.payload},e)},remove:function(e,t){return void 0!==e&&e.data.list.forEach(function(a,r){a.id===t.payload&&e.data.list.splice(r,1)}),(0,n.default)({data:t.payload},e)}}},l=d;t.default=l}}]);