(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),l=(a(13),a(4)),s=a(5),o=a(7),u=a(6),m=(a(14),a(1)),b=a.n(m),p=(b.a.shape({title:b.a.string.isRequired,content:b.a.string.isRequired}),function(e){var t=e.title,a=e.isActive,n=e.click;return c.a.createElement("button",{type:"button",onClick:n,className:"nav-link ".concat(a?"active":"")},t)}),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={index:0},e.onTabSelected=function(t){return function(){e.setState({index:t})}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabs,a=this.state.index;return c.a.createElement("div",{className:"center"},c.a.createElement("ul",{className:"nav nav-tabs"},t.map((function(t,n){return c.a.createElement("li",{key:e.props.title},c.a.createElement(p,{title:t.title,isActive:a===n,click:e.onTabSelected(n)}))}))),c.a.createElement("div",{id:"myTabContent",className:"tab-content"},c.a.createElement("div",{className:"tab-pane fade show active",id:"home"},c.a.createElement("p",null,t[a].content))))}}]),a}(c.a.Component),v=[{title:"Tab 1",content:"Liverpool is the champion"},{title:"Tab 2",content:"of Premier League"},{title:"Tab 3",content:"first time for the last 30 years"}],f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"heading"},"React tabs"),c.a.createElement(d,{tabs:v}))};r.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.280fa87b.chunk.js.map