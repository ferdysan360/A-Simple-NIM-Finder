(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),l=a.n(r),o=(a(25),a(3)),c=a(4),i=a(6),u=a(5),m=a(7),p=(a(26),a(18)),h=a(8),d=a.n(h),g=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setCookie=function(e){var t=new Date;t.setDate(t.getDate()+1);var a="username="+e+(";expires="+t.toUTCString())+";path=/;";document.cookie=a},a.serialize=function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")},a.optionRegister=function(e){a.setState({option:"register"})},a.optionLogin=function(e){a.setState({option:"login"})},a.assignToken=function(e){this.setState({token:e})},a.assignMahasiswa=function(e){this.setState({mahasiswa:e})},a.searchTypeName=function(e){a.setState({searchType:"byname"}),a.setState({page:0}),a.setState({searchTemp:a.state.search})},a.searchTypeId=function(e){a.setState({searchType:"byid"}),a.setState({page:0}),a.setState({searchTemp:a.state.search})},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleNext=function(e){a.setState({page:a.state.page+1})},a.handlePrev=function(e){a.setState({page:a.state.page-1})},a.handleSearch=function(e){var t;e.preventDefault(),a.state.page>0?a.setState({prev:!1}):a.setState({prev:!0}),t="byid"===a.state.searchType?{query:a.state.searchTemp,count:a.state.count,page:a.state.page}:{name:a.state.searchTemp,count:a.state.count,page:a.state.page};var n={method:"GET",url:"https://api.stya.net/nim/"+a.state.searchType+"?"+a.serialize(t),headers:{"Auth-Token":a.state.token}};d()(n).then(function(e){var r=e.data.status;e.data.code>=0?(20===e.data.code?(t.page=t.page+1,n.url="https://api.stya.net/nim/"+a.state.searchType+"?"+a.serialize(t),d()(n).then(function(e){0===e.data.code?a.setState({next:!0}):e.data.code>0&&a.setState({next:!1})}).catch(function(e){console.log(e)})):a.setState({next:!0}),a.assignMahasiswa(e.data.payload)):(l.a.render(s.a.createElement("div",null,r),document.getElementById("statusSearch")),a.setState({prev:!0}),a.setState({next:!0}),a.setState({page:0}),a.assignMahasiswa([]),a.setState({user:""}),a.assignToken(""))}).catch(function(e){console.log(e)})},a.handleRegisterLogin=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password},n={method:"POST",url:"https://api.stya.net/nim/"+a.state.option,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:a.serialize(t)};d()(n).then(function(e){var t=e.data.status;0===e.data.code?(l.a.render(s.a.createElement("div",null,a.state.option," Successful"),document.getElementById("statusLogin")),l.a.render(s.a.createElement("div",null),document.getElementById("statusSearch")),a.setState({user:a.state.username}),a.assignToken(e.data.token),a.setCookie(JSON.stringify({username:a.state.username,token:a.state.token}))):(l.a.render(s.a.createElement("div",null,t),document.getElementById("statusLogin")),a.setState({user:""}),a.assignToken(""),document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")}).catch(function(e){console.log(e)})};var n=document.cookie,r=n.split(";"),c="",m="";if(""!==n){var h=JSON.parse(r[0].replace("username=",""));m=h.username,c=h.token}return a.state={username:"",password:"",option:"",token:c,search:"",searchTemp:"",count:20,page:0,searchType:"",mahasiswa:[],prev:!0,next:!0,user:m},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.search,r=e.mahasiswa,l=e.prev,o=e.next,c=e.user;return s.a.createElement("div",null,s.a.createElement("h1",null,"A Simple ITB NIM Finder"),s.a.createElement("form",{onSubmit:this.handleRegisterLogin},s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Username",ref:"username",type:"text",name:"username",value:t,onChange:this.handleChange})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Password",ref:"password",type:"password",name:"password",value:a,onChange:this.handleChange})),s.a.createElement("button",{className:"button1",type:"submit",onClick:this.optionRegister},s.a.createElement("span",null,"Register")),s.a.createElement("button",{className:"button1",type:"submit",onClick:this.optionLogin},s.a.createElement("span",null,"Login")),s.a.createElement("h3",{id:"statusLogin"}," ")),s.a.createElement("br",null),s.a.createElement("form",{onSubmit:this.handleSearch},s.a.createElement("h3",null,"Welcome, ",c),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Type in Name or NIM...",ref:"search",type:"text",name:"search",value:n,onChange:this.handleChange}),s.a.createElement("button",{className:"button2",type:"submit",onClick:this.searchTypeName},s.a.createElement("span",null,"Search by Name")),s.a.createElement("button",{className:"button2",type:"submit",onClick:this.searchTypeId},s.a.createElement("span",null,"Search by NIM"))),s.a.createElement("h3",{id:"statusSearch"}," "),s.a.createElement("br",null),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Nama"),s.a.createElement("th",null,"NIM TPB"),s.a.createElement("th",null,"NIM Jurusan"),s.a.createElement("th",null,"Prodi")),r.length?r.map(function(e){return s.a.createElement("tr",{key:e.nim_tpb},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.nim_tpb),s.a.createElement("td",null,e.nim_jur),s.a.createElement("td",null,e.prodi))}):null)),s.a.createElement("p",{align:"center"},s.a.createElement("button",{className:"button3",type:"submit",disabled:l,onClick:this.handlePrev},s.a.createElement("span",null,"Prev")),s.a.createElement("label",null,this.state.page+1),s.a.createElement("button",{className:"button4",type:"submit",disabled:o,onClick:this.handleNext},s.a.createElement("span",null,"Next")))))}}]),t}(s.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.34f26401.chunk.js.map