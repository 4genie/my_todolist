(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(12),i=n.n(o),a=n(2),l=n(3),s=n(4),d=n(16),r=n(6),u=n(27),j="todos",b=function(){return JSON.parse(localStorage.getItem(j))};function f(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useRef)(),a=Object(c.useState)(n),l=Object(r.a)(a,2),f=l[0],O=l[1];function h(){var e=i.current.value;""!==e&&(o([{id:Object(u.a)(),content:e,isDone:!1}].concat(Object(d.a)(n))),i.current.value=null)}Object(c.useEffect)((function(){b()&&o(b())}),[]),Object(c.useEffect)((function(){!function(e){localStorage.setItem(j,JSON.stringify(e))}(n),O(n)}),[n]);var m=Object(c.useCallback)((function(e){o(n.map((function(t){return t.id===e.id?e:t})))}),[n]),p=Object(c.useCallback)((function(e){var t=e.target.innerText;"\u5168\u90e8"===t&&O(n),"\u5df2\u5b8c\u6210"===t&&O(n.filter((function(e){return e.isDone}))),"\u672a\u5b8c\u6210"===t&&O(n.filter((function(e){return!e.isDone})))}),[n]);return{filterValue:f,todoCotentRef:i,AddTodo:h,handleAddTodo:function(){h()},handleKeyDown:function(e){"Enter"===e.key&&""!==i.current.value&&h()},handleDeleteTodo:function(e){o(n.filter((function(t){return t.id!==e})))},handleToggleIsDone:function(e){o(n.map((function(t){return t.id!==e?t:Object(s.a)(Object(s.a)({},t),{},{isDone:!t.isDone})})))},handleClearIsDoneTodos:function(){o(n.filter((function(e){return!e.isDone})))},handleFilter:p,editTodo:m,handleUnfinishedCount:function(){return n.filter((function(e){return!e.isDone})).length}}}var O,h,m=n(1),p=l.a.input(O||(O=Object(a.a)(["\n  font-size: 14px;\n  padding: 1px;\n  border: solid 0.2px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  outline: none;\n"]))),x=l.a.button(h||(h=Object(a.a)([""])));function g(e){var t=e.todo,n=e.handleDeleteTodo,o=e.handleToggleIsDone,i=e.editTodo,a=Object(c.useState)(!1),l=Object(r.a)(a,2),d=l[0],u=l[1],j=Object(c.useRef)(),b=function(){if(!j.current.value)return u(!1);i(Object(s.a)(Object(s.a)({},t),{},{content:j.current.value})),u(!1)};return Object(m.jsxs)("div",{className:"todo list-group-item list-group-item-action d-flex justify-content-between align-items-center",children:[Object(m.jsx)("div",{className:"todo__content-wrapper custom-control custom-checkbox",children:d?Object(m.jsx)(p,{ref:j,onKeyDown:function(e){"Enter"===e.key&&b()}}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"checkbox",className:"custom-control-input",id:t.id,onClick:function(){o(t.id)},defaultChecked:t.isDone?"checked":""}),Object(m.jsx)("label",{className:"todo__content custom-control-label",htmlFor:t.id,children:t.content})]})}),d?Object(m.jsx)(x,{onClick:function(){b()},className:"todo-btns btn btn-info",children:"\u4fee\u6539\u5b8c\u6210"}):Object(m.jsx)(x,{onClick:function(){u(!0)},className:"todo-btns btn btn-info",children:"\u7de8\u8f2f"}),Object(m.jsx)(x,{onClick:function(){n(t.id)},className:"todo-btns btn btn-danger",children:"\u522a\u9664"})]},t.id)}n(24);var v,N,D,k,T,C,y=l.a.h1(v||(v=Object(a.a)(["\n  margin-top: 10px;\n  text-align: center;\n"]))),w=l.a.div(N||(N=Object(a.a)([""]))),I=l.a.div(D||(D=Object(a.a)([""]))),S=l.a.div(k||(k=Object(a.a)([""]))),E=l.a.input(T||(T=Object(a.a)([""]))),F=l.a.button(C||(C=Object(a.a)([""])));function J(){var e=f(),t=e.filterValue,n=e.todoCotentRef,c=e.handleAddTodo,o=e.handleKeyDown,i=e.handleDeleteTodo,a=e.handleToggleIsDone,l=e.handleClearIsDoneTodos,s=e.handleFilter,d=e.editTodo,r=e.handleUnfinishedCount;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-lg-6",children:[Object(m.jsx)(y,{children:"Todo List"}),Object(m.jsxs)(S,{className:"input-group mb-3",children:[Object(m.jsx)(E,{ref:n,type:"text",className:"input-todo form-control",placeholder:"todo",onKeyDown:o}),Object(m.jsx)("div",{className:"input-group-append",children:Object(m.jsx)(F,{onClick:c,className:"btn btn-add btn-outline-secondary",children:"\u65b0\u589e"})})]}),Object(m.jsx)(w,{className:"todos list-group",children:t.map((function(e){return Object(m.jsx)(g,{todo:e,handleDeleteTodo:i,handleToggleIsDone:a,editTodo:d},e.id)}))}),Object(m.jsxs)(I,{className:"info mt-1 d-flex justify-content-between align-items-center",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"uncomplete-count",children:r()}),"\u500b\u672a\u5b8c\u6210"]}),Object(m.jsxs)("div",{className:"options d-flex",children:[Object(m.jsx)("div",{className:"active",onClick:s,selected:!0,children:"\u5168\u90e8"}),Object(m.jsx)("div",{className:"ml-2",onClick:s,children:"\u672a\u5b8c\u6210"}),Object(m.jsx)("div",{className:"ml-2",onClick:s,children:"\u5df2\u5b8c\u6210"})]}),Object(m.jsx)("div",{onClick:l,className:"clear-all",children:"\u79fb\u9664\u5df2\u5b8c\u6210\u5f85\u8fa6\u4e8b\u9805"})]})]})})})})}i.a.render(Object(m.jsx)(J,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.eb543808.chunk.js.map