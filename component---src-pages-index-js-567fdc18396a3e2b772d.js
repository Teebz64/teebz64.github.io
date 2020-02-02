(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(207),r=a(188),s=a(208);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const c=[{slug:"transcend",thumbnail:"/images/logos/transcend-logo.svg",categories:["Logo Design","Branding"],title:"Transcend"},{slug:"knowledge-exchange",thumbnail:"/images/knowledge-exchange/feed-in-laptop.png",categories:["Architecture","Design"],title:"Humana:",subtitle:"Knowledge Exchange"},{slug:"two-bards",thumbnail:"/images/two-bards/two-bards-seal--purple.svg",categories:["Logo Design","Branding"],title:"Two Bards"},{slug:"ooh-icon-system",video:"/images/ooh-icon-system/output.export.mp4",categories:["Development","Animation"],title:"Oohology",subtitle:"Icon System"},{slug:"champion-windows",thumbnail:"/images/champion-windows/slider.png",categories:["Design"],title:"Champion",subtitle:"Windows"}];t.default=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Portfolio"}),i.a.createElement("section",{className:"section section--hero section--index"},i.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"01"),i.a.createElement(r.a,{pill:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"ポートフォリオ"),i.a.createElement("div",{className:"masthead__timespan"},"'18–'19")),heading:i.a.createElement(i.a.Fragment,null,"St",i.a.createElement("em",null,"e"),"v",i.a.createElement("em",null,"e"),"n D",i.a.createElement("em",null,"a"),"n",i.a.createElement("em",null,"a")),text:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"masthead__textline masthead__textline--large"},"Design & Development"),i.a.createElement("div",{className:"masthead__textline masthead__textline--medium"},"Selected Work")),hasBackButton:!1})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"section__indicator"},"02"),i.a.createElement("ul",{className:"work"},c.map((e,t)=>i.a.createElement(l.a,o({},e,{upNext:c[t>0?t-1:c.length-1],key:t}))))))},207:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(35),r=a(18),s=a(33);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class c extends i.a.PureComponent{constructor(...e){super(...e),o(this,"state",{hasEntered:!1}),o(this,"shutters",i.a.createRef()),o(this,"thumbnail",i.a.createRef()),o(this,"figure",i.a.createRef()),o(this,"title",i.a.createRef()),o(this,"listItem",i.a.createRef()),o(this,"text",i.a.createRef()),o(this,"titleScrollConfig",{from:"top-bottom",to:"top-middle",timing:"expoOut",direct:!0,inside:()=>this.onEnter(),props:{"--title-opacity":{from:0,to:.99},"--title-ty":{from:"-20px",to:"0px"},"--title-accent-scale":{from:0,to:1},"--title-accent-ty":{from:"20px",to:"0px"}}}),o(this,"listItemScrollConfig",{from:"top-bottom",to:"bottom-top",timing:"expoOut",direct:!0,props:{"--image-opacity":{from:0,to:.99},"--thumbnail-ty":{from:"60px",to:"-60px"}}}),o(this,"componentWillUnmount",()=>{this.titleScroll.destroy(),this.listItemScroll.destroy()}),o(this,"onEnter",()=>{this.state.hasEntered||(this.setState({hasEntered:!0}),this.shutters.current&&Object(r.a)({easing:"easeOutExpo",targets:this.shutters.current.children,scaleY:[1,0],duration:1650,delay:r.a.stagger(100)}),Object(r.a)({easing:"easeOutExpo",targets:this.thumbnail.current,opacity:[.01,1],duration:0}),Object(r.a)({easing:"easeOutExpo",targets:this.text.current,opacity:[.01,1],duration:750,delay:750,complete:()=>{this.listItem.current&&this.listItem.current.classList.add("work--entered")}}))})}componentDidMount(){this.titleScroll=s.create({elem:this.title.current,...this.titleScrollConfig}),this.listItemScroll=s.create({elem:this.listItem.current,...this.listItemScrollConfig}),this.titleScroll.start(),this.listItemScroll.start(),window.addEventListener("resize",()=>{this.titleScroll.calculate(),this.titleScroll.update(),this.listItemScroll.calculate(),this.listItemScroll.update()})}render(){const{slug:e,thumbnail:t,video:a,categories:n,title:r,subtitle:s}=this.props,{hasEntered:o}=this.state;return i.a.createElement("li",{"data-trigger":e,ref:this.listItem},i.a.createElement(l.Link,{className:"work__main",to:`/${e}/`,ref:this.figure},i.a.createElement("div",{className:"work__item-container",ref:this.thumbnail},i.a.createElement("ul",{className:"work__shutters",ref:this.shutters},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("ul",{className:"work__crosshairs"},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("div",{className:"work__thumbnail-container"},i.a.createElement("div",{className:"work__gradient"}),t&&i.a.createElement("img",{className:`\n                                        work__thumbnail\n                                        work__thumbnail--${e}\n                                    `,src:t,alt:r}),a&&!t&&i.a.createElement("div",{className:"video work__video"},i.a.createElement("video",{className:"video__video",autoPlay:!0,loop:!0,muted:!0,width:"1176",height:" 650",src:a})))),i.a.createElement("div",{className:"work__text",ref:this.text},i.a.createElement("div",{className:"work__category"},n.map((e,t)=>t+1===n.length?e:`${e} • `)),i.a.createElement("button",{className:"work__title",ref:this.title},i.a.createElement("div",null,r),s&&i.a.createElement("em",null,s)))))}}t.a=c},208:function(e,t,a){"use strict";var n=a(189),i=a(0),l=a.n(i),r=a(1),s=a.n(r),o=a(190),c=a.n(o);function m({description:e,lang:t,meta:a,title:i}){const{site:r}=n.data,s=e||r.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:t},title:i,titleTemplate:`%s | ${r.siteMetadata.title}`,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(a)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-567fdc18396a3e2b772d.js.map