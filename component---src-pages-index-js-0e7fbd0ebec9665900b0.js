(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{263:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),l=a.n(n),r=a(275),i=a(256),o=a(276),s=[{slug:"transcend",thumbnail:"/images/logos/transcend-logo.svg",categories:["Logo Design","Branding"],title:"Transcend"},{slug:"knowledge-exchange",thumbnail:"/images/knowledge-exchange/feed-in-laptop.png",categories:["Architecture","Design"],title:"Humana:",subtitle:"Knowledge Exchange"},{slug:"two-bards",thumbnail:"/images/two-bards/two-bards-seal--purple.svg",categories:["Logo Design","Branding"],title:"Two Bards"},{slug:"ooh-icon-system",video:"/images/ooh-icon-system/output.export.mp4",categories:["Development","Animation"],title:"Oohology",subtitle:"Icon System"},{slug:"champion-windows",thumbnail:"/images/champion-windows/slider.png",categories:["Design"],title:"Champion",subtitle:"Windows"}];t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:"Portfolio"}),l.a.createElement("section",{className:"section section--hero section--index"},l.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"01"),l.a.createElement(i.a,{pill:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"ポートフォリオ"),l.a.createElement("div",{className:"masthead__timespan"},"'18–'19")),heading:l.a.createElement(l.a.Fragment,null,"St",l.a.createElement("em",null,"e"),"v",l.a.createElement("em",null,"e"),"n D",l.a.createElement("em",null,"a"),"n",l.a.createElement("em",null,"a")),text:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"masthead__textline masthead__textline--large"},"Design & Development"),l.a.createElement("div",{className:"masthead__textline masthead__textline--medium"},"Selected Work")),hasBackButton:!1})),l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"section__indicator"},"02"),l.a.createElement("ul",{className:"work"},s.map((function(e,t){return l.a.createElement(r.a,Object.assign({},e,{upNext:s[t>0?t-1:s.length-1],key:t}))})))))}},275:function(e,t,a){"use strict";a(10);var n=a(0),l=a.n(n),r=a(72),i=a(33),o=a(67);var s=function(e){var t,a;function n(){for(var t,a,n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=e.call.apply(e,[this].concat(o))||this).state={hasEntered:!1},n.shutters=l.a.createRef(),n.thumbnail=l.a.createRef(),n.figure=l.a.createRef(),n.title=l.a.createRef(),n.listItem=l.a.createRef(),n.text=l.a.createRef(),n.titleScrollConfig={from:"top-bottom",to:"top-middle",timing:"expoOut",direct:!0,inside:function(){return n.onEnter()},props:(t={},t["--title-opacity"]={from:0,to:.99},t["--title-ty"]={from:"-20px",to:"0px"},t["--title-accent-scale"]={from:0,to:1},t["--title-accent-ty"]={from:"20px",to:"0px"},t)},n.listItemScrollConfig={from:"top-bottom",to:"bottom-top",timing:"expoOut",direct:!0,props:(a={},a["--image-opacity"]={from:0,to:.99},a["--thumbnail-ty"]={from:"60px",to:"-60px"},a)},n.componentWillUnmount=function(){n.titleScroll.destroy(),n.listItemScroll.destroy()},n.onEnter=function(){n.state.hasEntered||(n.setState({hasEntered:!0}),n.shutters.current&&Object(i.a)({easing:"easeOutExpo",targets:n.shutters.current.children,scaleY:[1,0],duration:1650,delay:i.a.stagger(100)}),Object(i.a)({easing:"easeOutExpo",targets:n.thumbnail.current,opacity:[.01,1],duration:0}),Object(i.a)({easing:"easeOutExpo",targets:n.text.current,opacity:[.01,1],duration:750,delay:750,complete:function(){n.listItem.current&&n.listItem.current.classList.add("work--entered")}}))},n}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentDidMount=function(){var e=this;this.titleScroll=o.create(Object.assign({elem:this.title.current},this.titleScrollConfig)),this.listItemScroll=o.create(Object.assign({elem:this.listItem.current},this.listItemScrollConfig)),this.titleScroll.start(),this.listItemScroll.start(),window.addEventListener("resize",(function(){e.titleScroll.calculate(),e.titleScroll.update(),e.listItemScroll.calculate(),e.listItemScroll.update()}))},s.render=function(){var e=this.props,t=e.slug,a=e.thumbnail,n=e.video,i=e.categories,o=e.title,s=e.subtitle;this.state.hasEntered;return l.a.createElement("li",{"data-trigger":t,ref:this.listItem},l.a.createElement(r.Link,{className:"work__main",to:"/"+t+"/",ref:this.figure},l.a.createElement("div",{className:"work__item-container",ref:this.thumbnail},l.a.createElement("ul",{className:"work__shutters",ref:this.shutters},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)),l.a.createElement("ul",{className:"work__crosshairs"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)),l.a.createElement("div",{className:"work__thumbnail-container"},l.a.createElement("div",{className:"work__gradient"}),a&&l.a.createElement("img",{className:"\n                                        work__thumbnail\n                                        work__thumbnail--"+t+"\n                                    ",src:a,alt:o}),n&&!a&&l.a.createElement("div",{className:"video work__video"},l.a.createElement("video",{className:"video__video",autoPlay:!0,loop:!0,muted:!0,width:"1176",height:" 650",src:n})))),l.a.createElement("div",{className:"work__text",ref:this.text},l.a.createElement("div",{className:"work__category"},i.map((function(e,t){return t+1===i.length?e:e+" • "}))),l.a.createElement("button",{className:"work__title",ref:this.title},l.a.createElement("div",null,o),s&&l.a.createElement("em",null,s)))))},n}(l.a.PureComponent);t.a=s},276:function(e,t,a){"use strict";var n=a(257),l=a(0),r=a.n(l),i=a(258),o=a.n(i);function s(e){var t=e.description,a=e.lang,l=e.meta,i=e.title,s=n.data.site,c=t||s.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(l)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-0e7fbd0ebec9665900b0.js.map