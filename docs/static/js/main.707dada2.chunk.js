(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),o=n.n(s),i=n(1),u=n(2),p=n(4),c=n(3),l=n(5),m=(n(14),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("ul",null,this.props.data.map(function(t,n){return a.a.createElement("li",{className:"pokemon",key:"p".concat(n)},a.a.createElement("div",{className:"cardPokemon"},a.a.createElement("img",{alt:t.name,src:t.url}),a.a.createElement("h2",null," ",t.name),a.a.createElement("ul",null,e.props.category[n])))}))}}]),t}(a.a.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("ul",{className:"listPokemon"},a.a.createElement(m,{data:this.props.info,category:this.props.category}))}}]),t}(a.a.Component),b=[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}],g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={pokemon:b},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.pokemon,t=e.map(function(e,t){return e.types});return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement("h1",{className:"title"},"Mi lista de pokemon")),a.a.createElement("main",{className:"main"},a.a.createElement(h,{info:e,category:t})))}}]),t}(a.a.Component);o.a.render(a.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.707dada2.chunk.js.map