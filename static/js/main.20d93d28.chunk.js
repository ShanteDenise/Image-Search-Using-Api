(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),l=(a(22),a(2)),i=a(3),o=a(5),u=a(4),h=a(6),m=(a(24),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"image-results"},this.props.results.map(function(e){return c.a.createElement("div",null,c.a.createElement("a",{href:e.user.links.html,alt:"linktounsplash",target:"_blank"},c.a.createElement("img",{className:"img-list",src:e.urls.small,alt:"searchresult",key:e.id}),c.a.createElement("div",{class:"middle"},c.a.createElement("p",{class:"text"},e.user.username))))}))}}]),t}(c.a.Component)),d=a(15),p=a.n(d),b="".concat("cb6c50dadc18d965aab5c2d992629702ccd24721858b5737a172f8dc09054a49"),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={value:"",searchResult:[]},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.value;p.a.get("https://api.unsplash.com/search/photos/?client_id=".concat(b,"&per_page=15&orientation=landscape&query=").concat(t,"}")).then(function(e){a.setState({searchResult:e.data.results}),console.log(e.data.results)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit,className:"search-container"},c.a.createElement("input",{class:"field-container",type:"text",value:this.state.value,placeholder:"Search Images...",onChange:this.handleChange}),c.a.createElement("button",{className:"btn-warning",type:"submit"},c.a.createElement("i",{class:"fa fa-search"}))),c.a.createElement(m,{results:this.state.searchResult}))}}]),t}(c.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container"},c.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.20d93d28.chunk.js.map