(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2283],{2078:function(e,a,t){"use strict";var s=t(6265),i=t(7294),r=t(1163),c=t(8765),l=i.createElement;function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e){e.maxShowCounts;for(var a=e.totalPage,t=void 0===a?1:a,s=e.distance,o=void 0===s?2:s,p=(0,r.useRouter)(),m=p.query,d=m.page?parseInt(m.page):1,g=[],u=Math.max(d-o,2),h=Math.min(d+o,t-1),f=u;f<=h;f++)g[f-u+1]=f;return g[0]=1,g[h-u+2]=t,l(i.Fragment,null,t>1&&l("ul",{className:"pagination"},l("li",{className:"page-item ".concat(d<2?"disabled":"")},l(c.Z,{className:"page-link page-link-prev",href:d>1?{pathname:p.pathname,query:n(n({},m),{},{page:d-1})}:"#",scroll:!1},l("i",{className:"d-icon-arrow-left"}),"Prev")),g.map((function(e,a){return 1===a&&e>2?l(i.Fragment,{key:"page-".concat(a)},l("span",{className:"page-item dots"},"..."),l("li",{className:"page-item ".concat(d===e?"active":"")},l(c.Z,{className:"page-link",href:d===e?"#":{pathname:p.pathname,query:n(n({},m),{},{page:e})},scroll:!1},e,d===e&&l("span",{className:"sr-only"},"(current)")))):a===g.length-2&&e+1<t?l(i.Fragment,{key:"page-".concat(a)},l("li",{className:"page-item ".concat(d===e?"active":"")},l(c.Z,{className:"page-link",href:d===e?"#":{pathname:p.pathname,query:n(n({},m),{},{page:e})},scroll:!1},e,d===e&&l("span",{className:"sr-only"},"(current)"))),l("span",{className:"page-item dots"},"...")):l("li",{className:"page-item ".concat(d===e?"active":""),key:"page-".concat(a)},l(c.Z,{className:"page-link",href:d===e?"#":{pathname:p.pathname,query:n(n({},m),{},{page:e})},scroll:!1},e,d===e&&l("span",{className:"sr-only"},"(current)")))})),l("li",{className:"page-item ".concat(d>t-1?"disabled":"")},l(c.Z,{className:"page-link page-link-next",href:d<t?{pathname:p.pathname,query:n(n({},m),{},{page:d+1})}:"#",scroll:!1},"Next",l("i",{className:"d-icon-arrow-right"})))))}a.Z=i.memo(p)},4018:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var s=t(7294),i=t(2244),r=t(1163),c=t(9617),l=t(5584),o=t(4836),n=t(8765),p=t(2674),m=t(2679),d=s.createElement;var g=function(e){var a=e.post,t=e.adClass,s=void 0===t?"":t,i=e.isLazy,r=void 0!==i&&i;return d("div",{className:"post post-list-sm ".concat(s)},d("figure",{className:"post-media"},d(n.Z,{href:"/blog/single/".concat(a.slug)},r?d(m.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+a.small_picture[0].url,alt:"post image",width:a.small_picture[0].width,height:a.small_picture[0].height,effect:"opacity",style:{backgroundColor:"#DEE6E8"}}):d("img",{src:"https://d-themes.com/react_asset_api/riode"+a.small_picture[0].url,alt:"post image",width:a.small_picture[0].width,height:a.small_picture[0].height}))),d("div",{className:"post-details"},d("div",{className:"post-meta"},d(n.Z,{href:"#",className:"post-date"},new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))),d("h4",{className:"post-title"},d(n.Z,{href:"/blog/single/".concat(a.slug)},a.title))))},u=s.createElement;var h=(0,l.Z)({ssr:!1})((function(){var e=(0,i.a)(o.oG),a=e.data,t=e.loading,l=(e.error,a&&a.postSidebarData.categories,a&&a.postSidebarData.recent),m=(0,r.useRouter)().query;return u("div",{className:"col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper"},u("div",{className:"sidebar-overlay",onClick:function(e){document.querySelector("body").classList.remove("right-sidebar-active")}},u(n.Z,{className:"sidebar-close",href:"#"},u("i",{className:"close-icon"}))),u("div",{className:"sidebar-toggle",onClick:function(e){document.querySelector("body").classList.toggle("right-sidebar-active")}},u("i",{className:"fas fa-chevron-left"})),u(c.Z,{offsetTop:88,className:"blog-sidebar-wrapper"},u("div",{className:"sidebar-content"},!t&&l?u(s.Fragment,null,u("div",{className:"widget widget-search border-no mb-2"},u("form",{action:"#",className:"input-wrapper input-wrapper-inline btn-absolute"},u("input",{type:"text",className:"form-control",name:"search",autoComplete:"off",placeholder:"Search in Blog",required:!0}),u("button",{className:"btn btn-search btn-link",type:"submit"},u("i",{className:"d-icon-search"})))),u("div",{className:"widget widget-collapsible border-no"},u(p.Z,{title:"<h3 class='widget-title border-no'>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body filter-items search-ul"},u("li",{className:"".concat("fashion"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"fashion"}},scroll:!1},"Fashion")),u("li",{className:"".concat("lifestyle"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"lifestyle"}},scroll:!1},"Lifestyle")),u("li",{className:"".concat("shopping"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"shopping"}},scroll:!1},"Shopping")),u("li",{className:"".concat("sport"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"sport"}},scroll:!1},"Sport")),u("li",{className:"".concat("travel"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"travel"}},scroll:!1},"Travel"))))),u("div",{className:"widget widget-collapsible"},u(p.Z,{title:"<h3 class='widget-title'>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body"},l.slice(0,3).map((function(e,a){return u("div",{className:"post-col",key:"Small Post "+a},u(g,{post:e}))}))))),u("div",{className:"widget widget-collapsible"},u(p.Z,{title:"<h3 class='widget-title'>About us<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body"},u("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.")))),u("div",{className:"widget widget-collapsible widget-posts"},u(p.Z,{title:"<h3 class='widget-title'>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body"},u(n.Z,{href:"#",className:"tag"},"Bag"),u(n.Z,{href:"#",className:"tag"},"Classic"),u(n.Z,{href:"#",className:"tag"},"Converse"),u(n.Z,{href:"#",className:"tag"},"Leather"),u(n.Z,{href:"#",className:"tag"},"Fit"),u(n.Z,{href:"#",className:"tag"},"Green"),u(n.Z,{href:"#",className:"tag"},"Man"),u(n.Z,{href:"#",className:"tag"},"Jeans"),u(n.Z,{href:"#",className:"tag"},"Women"))))):u("div",{className:"widget-2"}))))}))},5859:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return v}});var s=t(4121),i=t(7294),r=t(4593),c=t(8460),l=t(1163),o=t(5584),n=t(4836),p=t(8765),m=t(2078),d=t(2679),g=t(4138),u=t(6442),h=t(4943),f=i.createElement;var y=function(e){var a=e.post,t=e.adClass,s=void 0===t?"mb-7":t,r=e.isLazy,c=void 0!==r&&r,l=e.isOriginal,o=void 0!==l&&l,n=e.btnText,m=void 0===n?"Read more":n,y=e.btnAdClass,N=void 0===y?"":y,b=e.isButton,v=void 0===b||b;return f("div",{className:"post post-classic ".concat("video"===a.type?"post-video":""," ").concat(s)},"image"===a.type||"video"===a.type?f("figure",{className:"post-media ".concat("image"===a.type?"overlay-zoom":"")},f(p.Z,{href:"/blog/single/".concat(a.slug)},c?f(d.LazyLoadImage,o?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:100,height:a.large_picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}):f("img",o?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:100,height:a.large_picture[0].height}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height})),"video"===a.type?f(i.Fragment,null,f("span",{className:"video-play",onClick:u.X9}),f("video",{width:"380"},f("source",{src:"https://d-themes.com/react_asset_api/riode"+a.video.url,type:"video/mp4"}))):""):f("figure",{className:"post-media"},f(g.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:h.cQ},c?a.picture.map((function(e,a){return f(d.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}})})):a.picture.map((function(e,a){return f("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height})})))),f("div",{className:"post-details"},f("div",{className:"post-meta"},"by ",f(p.Z,{href:"#",className:"post-author"},a.author)," on ",f(p.Z,{href:"#",className:"post-date"},new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))," | ",f(p.Z,{href:"#",className:"post-comment"},f("span",null,a.comments)," Comments")),f("h4",{className:"post-title"},f(p.Z,{href:"/blog/single/".concat(a.slug)},a.title)),f("p",{className:"post-content"},a.content),v?f(p.Z,{href:"/blog/single/".concat(a.slug),className:"btn btn-link btn-underline btn-primary ".concat(N)},m,f("i",{className:"d-icon-arrow-right"})):""))},N=t(4018),b=i.createElement;var v=(0,o.Z)({ssr:!1})((function(){var e=(0,l.useRouter)(),a=(0,i.useState)(!0),t=a[0],o=a[1],d=e.query,g=(0,c.t)(n.p$),h=(0,s.Z)(g,2),f=h[0],v=h[1],w=v.data,Z=v.loading,_=(v.error,(0,i.useState)(8)),k=_[0],C=(_[1],w&&w.posts.data),E=w?parseInt(w.posts.total/k)+(w.posts.total%k?1:0):1,O=d.page?d.page:1;return(0,i.useEffect)((function(){f({variables:{category:d.category,from:k*(O-1),to:k*O}}),setTimeout((function(){t?o(!1):(0,u._M)()}),100)}),[d]),b("main",{className:"main skeleton-body"},b(r.Z,null,b("title",null,"Riode React eCommerce Template | Blog Classic")),b("h1",{className:"d-none"},"Riode React eCommerce Template - Blog Classic"),b("nav",{className:"breadcrumb-nav"},b("div",{className:"container"},b("ul",{className:"breadcrumb"},b("li",null,b(p.Z,{href:"/"},b("i",{className:"d-icon-home"}))),b("li",null,b(p.Z,{href:"#",className:"active"},"Blog")),b("li",null,"Classic")))),b("div",{className:"page-content with-sidebar"},b("div",{className:"container"},b("div",{className:"row gutter-lg"},b("div",{className:"col-lg-9"},b("div",{className:"posts"},Z?new Array(parseInt(k)).fill(1).map((function(e,a){return b("div",{key:"Skeleton:"+a},b("div",{className:"skel-post"}))})):C?C.length?C.slice(0,C.length).map((function(e,a){return b(i.Fragment,{key:"post-one"+a},b(y,{post:e}))})):b("div",{className:"info-box with-icon"},b("p",{className:"mt-4"},"No blogs were found matching your selection.")):""),b(m.Z,{totalPage:E})),b(N.Z,null)))))}))},511:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/classic",function(){return t(5859)}])}},function(e){e.O(0,[9617,9774,2888,179],(function(){return a=511,e(e.s=a);var a}));var a=e.O();_N_E=a}]);