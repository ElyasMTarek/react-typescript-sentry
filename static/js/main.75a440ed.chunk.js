(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},26:function(e){e.exports={a:"0.1.0"}},27:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},34:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),l=(n(32),n(6)),i=n(7),s=n(10),u=n(8),h=n(9),m=n(25),d=n.n(m),p=(n(34),n(13)),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,errorInfo:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t}),this.setState({error:e}),p.withScope(function(n){Object.keys(t).forEach(function(e){n.setExtra(e,t[e])}),p.captureException(e)})}},{key:"render",value:function(){return this.state.errorInfo?a.a.createElement("div",null,a.a.createElement("h2",null,"Something went wrong."),a.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),a.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.a.Component),E=n(12),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={counter:0},n.handleClick=n.handleClick.bind(Object(E.a)(Object(E.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.setState(function(e){return{counter:e.counter+1}})}},{key:"render",value:function(){if(3===this.state.counter)throw new Error("This is my custom error!");return a.a.createElement("h1",{onClick:this.handleClick},this.state.counter)}}]),t}(r.Component),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).callError=function(){if(6==n.props)return!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:d.a,style:{height:"50px"},className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.tsx")," and save to reload."),a.a.createElement(f,null,a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("b",null,"This is an example of error boundaries in React 16.",a.a.createElement("br",null),a.a.createElement("br",null),"Click on the numbers to increase the counters.",a.a.createElement("br",null),"The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.")),a.a.createElement("hr",null),a.a.createElement(f,null,this.callError(),a.a.createElement("p",null,"These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them."),a.a.createElement(b,null),a.a.createElement(b,null)),a.a.createElement("hr",null),a.a.createElement("p",null,"These two counters are each inside of their own error boundary. So if one crashes, the other is not affected."),a.a.createElement(f,null,a.a.createElement(b,null)),a.a.createElement(f,null,a.a.createElement(b,null))))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(26);c.a.render(a.a.createElement(w,null),document.getElementById("root")),p.init({dsn:"https://cd1cddbeff664ad1aed5d1a882c01d25@sentry.io/1370243",release:v.a}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.75a440ed.chunk.js.map