(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/pokeball.f1910ad9.gif"},43:function(e,a,t){e.exports=t.p+"static/media/large.f09ba51b.jpg"},46:function(e,a,t){e.exports=t(75)},51:function(e,a,t){},53:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(37),r=t.n(c),l=(t(51),t(20)),o=t(11),i=(t(52),t(53),t(6)),m=t(7),d=t(9),p=t(8),h=t(10),u=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},s.a.createElement("a",{href:"",className:"navbar-brand  col-md-2 mr-0 align-item-center"}," Pok\xe9dex")))}}]),a}(n.Component),g=t(14),f=t.n(g),E=t(19),v=t(17),b=t.n(v),N=t(18),k=t(13),y=t(38),w=t.n(y);function x(){var e=Object(N.a)(["\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transittion: all 0.3s cubic-bezier(0.25,0.8,0.25,1);\n  &:hover{\n    box-shadow:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n  -noz-user-select:none;\n  -website-ser-select:none;\n  user-select:none;\n  -o-user-select:none;\n"]);return x=function(){return e},e}function j(){var e=Object(N.a)(["\n  width: Sem;\n  height: Sem;\n  display:none;\n  \n"]);return j=function(){return e},e}var O=k.a.img(j()),C=k.a.div(x()),S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",imageUrl:"",pokemonIndex:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.name,t=e.url,n=t.split("/")[t.split("/").length-2],s="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(n,".png?raw=true");this.setState({name:a,imageUrl:s,pokemonIndex:n})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},s.a.createElement(l.b,{to:"pokemon/".concat(this.state.pokemonIndex),style:{color:"black",textDecoration:"none"}},s.a.createElement(C,{className:"card"},s.a.createElement("h5",{className:"card-header"}," ",this.state.pokemonIndex," "),this.state.imageLoading?s.a.createElement("img",{src:w.a,style:{width:" 5em",height:"5em"},className:"card-img-top rounded mx-auto d-block mt-2"}):null,s.a.createElement(O,{className:"card-img-top rounded mx-auto mt-2",onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({toManyRequest:!0})},src:this.state.imageUrl,style:this.state.toManyRequest?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.toManyRequest?s.a.createElement("h6",null,s.a.createElement("span",{className:"badge badge-danger mt-2"},"To many Request")):null,s.a.createElement("div",{className:"card-body mx-auto"},s.a.createElement("h6",{className:"card-title capitalize "}," ",this.state.name," ")," "))))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200",pokemon:null},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(this.state.url);case 2:a=e.sent,this.setState({pokemon:a.data.results});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,this.state.pokemon?s.a.createElement("div",{className:"row "},this.state.pokemon.map(function(e){return s.a.createElement(S,{key:e.name,name:e.name,url:e.url})})):s.a.createElement("h1",null," Loading Pokemon... "))}}]),a}(n.Component),B=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement(A,null)))}}]),a}(n.Component);function D(){var e=Object(N.a)(["\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transittion: all 0.3s cubic-bezier(0.25,0.8,0.25,1);\n  &:hover{\n    box-shadow:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n  -noz-user-select:none;\n  -website-ser-select:none;\n  user-select:none;\n  -o-user-select:none;\n"]);return D=function(){return e},e}var R=k.a.div(D()),_={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E7380C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},M=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",pokemonIndex:"",imageUrl:"",types:[],description:"",stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroup:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a,t,n,s,c,r,l,o,i,m,d,p,h,u,g,E,v,N=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.pokemonIndex,t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),n="https://pokeapi.co/api/v2/pokemon-species/".concat(a,"/"),e.next=5,b.a.get(t);case 5:return s=e.sent,c=s.data.name,r=s.data.sprites.front_default,"",l="".hp,o="".attack,i="".defense,m="".speed,d="".specialAttack,p="".specialDefense,s.data.stats.map(function(e){switch(e.stat.name){case"hp":l=e.base_stat;break;case"attack":o=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":m=e.base_stat;break;case"special-attack ":d=e.base_stat;break;case"special-defense":p=e.base_stat}}),h=Math.round(100*(.328084*s.data.height+1e-4))/100,u=Math.round(s.data.weight/10),g=s.data.types.map(function(e){return e.type.name}),E=s.data.abilities.map(function(e){return e.ability.name.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}),v=s.data.stats.filter(function(e){return e.effort>0}).map(function(e){return"".concat(e.effort," ").concat(e.stat.name).toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),e.next=17,b.a.get(n).then(function(e){var a="";e.data.flavor_text_entries.some(function(e){"en"!==e.language.name||(a=e.flavor_text)});var t=e.data.gender_rate,n=12.5*t,s=12.5*(8-t),c=Math.round(100/255*e.data.capture_rate),r=e.data.egg_groups.map(function(e){return e.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),l=255*(e.data.hatch_counter+1);N.setState({description:a,genderRatioFemale:n,genderRatioMale:s,catchRate:c,eggGroup:r,hatchSteps:l})});case 17:this.setState({imageUrl:r,pokemonIndex:a,name:c,types:g,stats:{hp:l,attack:o,defense:i,speed:m,specialAttack:d,specialDefense:p},height:h,weight:u,abilities:E,evs:v});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"col"},s.a.createElement(R,{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-5"},s.a.createElement("h5",null,this.state.pokemonIndex)),s.a.createElement("div",{className:"col-7"},s.a.createElement("div",{className:"float-right"},this.state.types.map(function(e){return s.a.createElement("span",{key:e,className:"badge badge-pill mr-1 capitalize",style:{backgroundColor:"#".concat(_[e]),color:"white"}},e)}))))),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("img",{src:this.state.imageUrl,className:"card-img-top rounded mx-auto mt-2"})),s.a.createElement("div",{className:"col-md-9"},s.a.createElement("h4",{className:"mx-auto capitalize"},this.state.name),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3",style:{fontWeight:"bold",fontStyle:"italic"}},"HP"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.hp,"%")}},s.a.createElement("small",{style:{fontWeight:"bold"}},this.state.stats.hp))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3",style:{fontWeight:"bold",fontStyle:"italic"}},"Attack"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.attack,"%"),background:"#f3323d"}},s.a.createElement("small",{style:{fontWeight:"bold"}},this.state.stats.attack))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3",style:{fontWeight:"bold",fontStyle:"italic"}},"Defense"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.defense,"%"),background:"#00cd00"}},s.a.createElement("small",{style:{fontWeight:"bold"}},this.state.stats.defense))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3",style:{fontWeight:"bold",fontStyle:"italic"}},"Speed"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.speed,"%"),background:"#ff0033"}},s.a.createElement("small",{style:{fontWeight:"bold"}},this.state.stats.speed))))),s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-12 col-md-3",style:{fontWeight:"bold",fontStyle:"italic"}},"Special Defense"),s.a.createElement("div",{className:"col-12 col-md-9"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialDefense,"%"),background:"#ff8000"}},s.a.createElement("small",{style:{fontWeight:"bold"}},this.state.stats.specialDefense))))),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row mt-1"},s.a.createElement("div",{className:"col"},s.a.createElement("h4",{className:"p-2 font-weight-bold font-italic",align:"center | justify "},this.state.description))))),s.a.createElement("hr",null),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title text-center"},"Profile"),s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Height:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.height," ft.")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Weight:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.weight," Kg")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Catch Rate:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.catchRate," %")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Gender Ratio:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{class:"progress"},s.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioFemale,"%"),backgroundColor:"#c2185b"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.genderRatioFemale)),s.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioMale,"%"),backgroundColor:"#1976d2"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},s.a.createElement("small",null,this.state.genderRatioMale)))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Egg Group:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.eggGroup)),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Hatch Steps:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.hatchSteps)),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"Abilities:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.abilities)),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-right"},"EVS:")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",{className:"float-left"},this.state.evs)))))))))}}]),a}(n.Component),W=t(43),F=t.n(W);var I=function(){return s.a.createElement(l.a,null,s.a.createElement("div",{className:"App",style:{background:"url(".concat(F.a,")")}},s.a.createElement(u,null),s.a.createElement("div",{className:"container"},s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:B}),s.a.createElement(o.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.b2d11698.chunk.js.map