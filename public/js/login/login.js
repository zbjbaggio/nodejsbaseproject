"use strict";function _asyncToGenerator(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,t){function r(o,u){try{var a=e[o](u),i=a.value}catch(n){return void t(n)}return a.done?void n(i):Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)})}return r("next")})}}var getName=function(){return new Promise(function(n){n("jayazhang")})},test=function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,getName();case 2:e=n.sent,console.log(e);case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();test();