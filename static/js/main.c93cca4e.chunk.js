(this.webpackJsonpvenbest=this.webpackJsonpvenbest||[]).push([[0],{1:function(e,t,a){e.exports={filter:"Filter_filter__uEc3s",title:"Filter_title__2uGoS",form:"Filter_form__2ECpd",group:"Filter_group__2-P5b",input:"Filter_input__2lHgr",label:"Filter_label__2TfA7",bar:"Filter_bar__1RNiX",sex:"Filter_sex__zrb8i",button:"Filter_button__3AL8z"}},20:function(e,t,a){e.exports={list:"ListPerson_list__21D-p"}},24:function(e,t,a){e.exports={wrapper:"App_wrapper__3q4EA"}},27:function(e,t,a){e.exports=a(79)},32:function(e,t,a){},4:function(e,t,a){e.exports={listItem:"CardPerson_listItem__-UWn1",name:"CardPerson_name__1mW63",age:"CardPerson_age__212D8",sex:"CardPerson_sex__hjMvk"}},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),s=(a(32),a(5)),m=a(7),i=a(18),u=a(19),o=a(26),p=a(25),f=a(1),h=a.n(f),b={name:"",lastname:"",age:"",man:!1,fem:!1},E=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state=b,e.handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;"age"===l?e.setState(Object(m.a)({},l,n.replace(/\D/,""))):e.setState(Object(m.a)({},l,n))},e.cleanFilter=function(){e.setState((function(e){return b}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t!==this.state&&this.props.filter(this.state),t.man!==this.state.man&&this.setState((function(e){return e.fem=!1})),t.fem!==this.state.fem&&this.setState((function(e){return e.man=!1}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.lastname,n=e.age,r=e.man,c=e.fem;return l.a.createElement("div",{className:h.a.filter},l.a.createElement("p",{className:h.a.title},"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0438"),l.a.createElement("form",{className:h.a.form},l.a.createElement("div",{className:h.a.group},l.a.createElement("input",{className:h.a.input,value:t,name:"name",type:"text",onChange:this.handleChange}),l.a.createElement("span",{className:h.a.bar}),l.a.createElement("label",{className:h.a.label},"\u0406\u043c'\u044f:")),l.a.createElement("div",{className:h.a.group},l.a.createElement("input",{className:h.a.input,value:a,name:"lastname",type:"text",onChange:this.handleChange}),l.a.createElement("span",{className:h.a.bar}),l.a.createElement("label",{className:h.a.label},"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435:")),l.a.createElement("div",{className:h.a.group},l.a.createElement("input",{className:h.a.input,value:n,name:"age",type:"text",onChange:this.handleChange}),l.a.createElement("span",{className:h.a.bar}),l.a.createElement("label",{className:h.a.label},"\u0412\u0456\u043a")),l.a.createElement("div",{className:h.a.sex},l.a.createElement("span",null," \u0421\u0442\u0430\u0442\u044c: "),l.a.createElement("div",null,l.a.createElement("label",null,"\u0447",l.a.createElement("input",{className:h.a.checkbox,name:"man",type:"checkbox",checked:r,onChange:this.handleChange})),l.a.createElement("label",null,"\u0436",l.a.createElement("input",{className:h.a.checkbox,name:"fem",type:"checkbox",checked:c,onChange:this.handleChange})))),l.a.createElement("input",{type:"button",value:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0438",className:h.a.button,onClick:this.cleanFilter})))}}]),a}(n.Component),_=a(4),d=a.n(_),g=function(e){var t=e.data;return l.a.createElement("li",{className:d.a.listItem},l.a.createElement("p",{className:d.a.name},t.name," ",t.lastname),l.a.createElement("p",{className:d.a.age},"\u0432\u0456\u043a: ",l.a.createElement("span",null,t.age)," "),l.a.createElement("p",{className:d.a.sex},"\u0441\u0442\u0430\u0442\u044c: ",l.a.createElement("span",null,"m"===t.sex?"\u0447\u043e\u043b\u043e\u0432\u0456\u0447\u0430":"\u0436\u0456\u043d\u043e\u0447\u0430")," "))},v=a(20),N=a.n(v),x=function(e){var t=e.data;return l.a.createElement("ul",{className:N.a.list},t.map((function(e){return l.a.createElement(g,{key:e.id,data:e})})))},C=a(21),O=a.n(C),j=function(){return O.a.get("https://venbest-test.herokuapp.com/\n    ")},k=a(22),y=a.n(k),F=function(e){return e.map((function(e){return e.id=y()()}))},w=function(e){return e.map((function(e){return e.age=e.age+""}))},S=a(23),L=a.n(S),P=a(24),A=a.n(P),D=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),m=Object(s.a)(c,2),i=m[0],u=m[1],o=Object(n.useState)(!1),p=Object(s.a)(o,2),f=p[0],h=p[1],b=Object(n.useState)(a),_=Object(s.a)(b,2),d=_[0],g=_[1];Object(n.useEffect)((function(){j().then((function(e){var t=e.data;return r(t)})).catch((function(e){return h(!!e)})).finally((function(){return u(!1)}))}),[]),Object(n.useEffect)((function(){g(a),F(a),w(a)}),[a]);return l.a.createElement("div",{className:A.a.wrapper},l.a.createElement(E,{filter:function(e){var t=a,n=[];n=t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.name.trim().toLowerCase())?t.name:null})),g(n),n=(t=n).filter((function(t){return-1!==t.lastname.toLowerCase().indexOf(e.lastname.trim().toLowerCase())?t.lastname:null})),g(n),n=(t=n).filter((function(t){return-1!==t.age.indexOf(e.age.trim())?t.age:null})),g(n),n=(t=n).filter((function(t){return e.man?"m"===t.sex:t})),g(n),n=(t=n).filter((function(t){return e.fem?"f"===t.sex:t})),g(n),t=n}}),f&&l.a.createElement("p",null,"Error please reload the page!"),i&&l.a.createElement(L.a,{type:"Oval",color:"#00BFFF",height:300,width:300}),a.length>0&&l.a.createElement(x,{data:d}),!d.length&&l.a.createElement("p",null,"\u041d\u0435\u043c\u0430\u0454 \u0437\u0431\u0456\u0433\u0456\u0432!"))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c93cca4e.chunk.js.map