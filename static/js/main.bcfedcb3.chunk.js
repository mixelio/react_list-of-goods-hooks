(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),u=n(3),l=n.n(u),b=(n(13),n(14),n(0));!function(t){t.SORT_FIELD_ALPHABET="ab",t.SORT_FIELD_LENGTH="length",t.DEFAULT="default"}(c||(c={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var j=function(){var t=Object(a.useState)(c.DEFAULT),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),j=u[0],d=u[1],O=function(t,e,n){var s=Object(r.a)(t);return e&&s.sort((function(t,n){switch(e){case c.SORT_FIELD_ALPHABET:return t.localeCompare(n);case c.SORT_FIELD_LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.SORT_FIELD_ALPHABET}),onClick:function(){return s(c.SORT_FIELD_ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.SORT_FIELD_LENGTH}),onClick:function(){return s(c.SORT_FIELD_LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!j}),onClick:function(){return d(!j)},children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:l()("button is-info is-light",{"is-hidden":n===c.DEFAULT&&!1===j}),onClick:function(){s(c.DEFAULT),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:O.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bcfedcb3.chunk.js.map