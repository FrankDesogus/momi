(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7200],{2078:function(e,a,t){"use strict";var s=t(6265),i=t(7294),r=t(1163),l=t(8765),c=i.createElement;function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e){e.maxShowCounts;for(var a=e.totalPage,t=void 0===a?1:a,s=e.distance,o=void 0===s?2:s,p=(0,r.useRouter)(),m=p.query,d=m.page?parseInt(m.page):1,g=[],u=Math.max(d-o,2),h=Math.min(d+o,t-1),f=u;f<=h;f++)g[f-u+1]=f;return g[0]=1,g[h-u+2]=t,c(i.Fragment,null,t>1&&c("ul",{className:"pagination"},c("li",{className:"page-item ".concat(d<2?"disabled":"")},c(l.Z,{className:"page-link page-link-prev",href:d>1?{pathname:p.pathname,query:n(n({},m),{},{page:d-1})}:"#",scroll:!1},c("i",{className:"d-icon-arrow-left"}),"Prev")),g.map((function(e,a){return 1===a&&e>2?c(i.Fragment,{key:"page-".concat(a)},c("span",{className:"page-item dots"},"..."),c("li",{className:"page-item ".concat(d===e?"active":"")},c(l.Z,{className:"page-link",href:d===e?"#":{pathname:p.pathname,query:n(n({},m),{},{page:e})},scroll:!1},e,d===e&&c("span",{className:"sr-only"},"(current)")))):a===g.length-2&&e+1<t?c(i.Fragment,{key:"page-".concat(a)},c("li",{className:"page-item ".concat(d===e?"active":"")},c(l.Z,{className:"page-link",href:d===e?"#":{pathname:p.pathname,query:n(n({},m),{},{page:e})},scroll:!1},e,d===e&&c("span",{className:"sr-only"},"(current)"))),c("span",{className:"page-item dots"},"...")):c("li",{className:"page-item ".concat(d===e?"active":""),key:"page-".concat(a)},c(l.Z,{className:"page-link",href:d===e?"#":{pathname:p.pathname,query:n(n({},m),{},{page:e})},scroll:!1},e,d===e&&c("span",{className:"sr-only"},"(current)")))})),c("li",{className:"page-item ".concat(d>t-1?"disabled":"")},c(l.Z,{className:"page-link page-link-next",href:d<t?{pathname:p.pathname,query:n(n({},m),{},{page:d+1})}:"#",scroll:!1},"Next",c("i",{className:"d-icon-arrow-right"})))))}a.Z=i.memo(p)},5780:function(e,a,t){"use strict";var s=t(7294),i=t(2679),r=t(8765),l=t(4138),c=t(6442),o=t(4943),n=s.createElement;a.Z=function(e){var a=e.post,t=e.adClass,p=void 0===t?"":t,m=e.isLazy,d=void 0!==m&&m,g=e.isOriginal,u=void 0!==g&&g,h=e.btnText,f=void 0===h?"Read more":h,y=e.btnAdClass,N=void 0===y?"":y,b=e.type,v=void 0===b?"grid":b;return n("div",{className:"post post-grid ".concat("video"===a.type?"post-video":""," ").concat(p)},"image"===a.type||"video"===a.type||"masonry"===v?n("figure",{className:"post-media"},n(r.Z,{href:"/blog/single/".concat(a.slug)},d?n(i.LazyLoadImage,u?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:100,height:a.large_picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}):n("img",u?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:100,height:a.large_picture[0].height}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height})),"video"===a.type?n(s.Fragment,null,n("span",{className:"video-play",onClick:c.X9}),n("video",{width:"380"},n("source",{src:"https://d-themes.com/react_asset_api/riode"+a.video.url,type:"video/mp4"}))):""):n("figure",{className:"post-media"},n(l.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:o.cQ},d?a.picture.map((function(e,a){return n(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}})})):a.picture.map((function(e,a){return n("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height})})))),n("div",{className:"post-details"},n("div",{className:"post-meta"},"on ",n(r.Z,{href:"#",className:"post-date"},new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))," | ",n(r.Z,{href:"#",className:"post-comment"},n("span",null,a.comments)," Comments")),n("h4",{className:"post-title"},n(r.Z,{href:"/blog/single/".concat(a.slug)},a.title)),n("p",{className:"post-content"},a.content),n(r.Z,{href:"/blog/single/".concat(a.slug),className:"btn btn-link btn-underline btn-primary ".concat(N)},f,n("i",{className:"d-icon-arrow-right"}))))}},4018:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var s=t(7294),i=t(2244),r=t(1163),l=t(1243),c=t(5584),o=t(4836),n=t(8765),p=t(2674),m=t(2679),d=s.createElement;var g=function(e){var a=e.post,t=e.adClass,s=void 0===t?"":t,i=e.isLazy,r=void 0!==i&&i;return d("div",{className:"post post-list-sm ".concat(s)},d("figure",{className:"post-media"},d(n.Z,{href:"/blog/single/".concat(a.slug)},r?d(m.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+a.small_picture[0].url,alt:"post image",width:a.small_picture[0].width,height:a.small_picture[0].height,effect:"opacity",style:{backgroundColor:"#DEE6E8"}}):d("img",{src:"https://d-themes.com/react_asset_api/riode"+a.small_picture[0].url,alt:"post image",width:a.small_picture[0].width,height:a.small_picture[0].height}))),d("div",{className:"post-details"},d("div",{className:"post-meta"},d(n.Z,{href:"#",className:"post-date"},new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))),d("h4",{className:"post-title"},d(n.Z,{href:"/blog/single/".concat(a.slug)},a.title))))},u=s.createElement;var h=(0,c.Z)({ssr:!1})((function(){var e=(0,i.a)(o.oG),a=e.data,t=e.loading,c=(e.error,a&&a.postSidebarData.categories,a&&a.postSidebarData.recent),m=(0,r.useRouter)().query;return u("div",{className:"col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper"},u("div",{className:"sidebar-overlay",onClick:function(e){document.querySelector("body").classList.remove("right-sidebar-active")}},u(n.Z,{className:"sidebar-close",href:"#"},u("i",{className:"close-icon"}))),u("div",{className:"sidebar-toggle",onClick:function(e){document.querySelector("body").classList.toggle("right-sidebar-active")}},u("i",{className:"fas fa-chevron-left"})),u(l.Z,{offsetTop:88,className:"blog-sidebar-wrapper"},u("div",{className:"sidebar-content"},!t&&c?u(s.Fragment,null,u("div",{className:"widget widget-search border-no mb-2"},u("form",{action:"#",className:"input-wrapper input-wrapper-inline btn-absolute"},u("input",{type:"text",className:"form-control",name:"search",autoComplete:"off",placeholder:"Search in Blog",required:!0}),u("button",{className:"btn btn-search btn-link",type:"submit"},u("i",{className:"d-icon-search"})))),u("div",{className:"widget widget-collapsible border-no"},u(p.Z,{title:"<h3 class='widget-title border-no'>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body filter-items search-ul"},u("li",{className:"".concat("fashion"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"fashion"}},scroll:!1},"Fashion")),u("li",{className:"".concat("lifestyle"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"lifestyle"}},scroll:!1},"Lifestyle")),u("li",{className:"".concat("shopping"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"shopping"}},scroll:!1},"Shopping")),u("li",{className:"".concat("sport"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"sport"}},scroll:!1},"Sport")),u("li",{className:"".concat("travel"===m.category?"active":"")},u(n.Z,{href:{pathname:"/blog/classic",query:{category:"travel"}},scroll:!1},"Travel"))))),u("div",{className:"widget widget-collapsible"},u(p.Z,{title:"<h3 class='widget-title'>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body"},c.slice(0,3).map((function(e,a){return u("div",{className:"post-col",key:"Small Post "+a},u(g,{post:e}))}))))),u("div",{className:"widget widget-collapsible"},u(p.Z,{title:"<h3 class='widget-title'>About us<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body"},u("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.")))),u("div",{className:"widget widget-collapsible widget-posts"},u(p.Z,{title:"<h3 class='widget-title'>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},u("ul",{className:"widget-body"},u(n.Z,{href:"#",className:"tag"},"Bag"),u(n.Z,{href:"#",className:"tag"},"Classic"),u(n.Z,{href:"#",className:"tag"},"Converse"),u(n.Z,{href:"#",className:"tag"},"Leather"),u(n.Z,{href:"#",className:"tag"},"Fit"),u(n.Z,{href:"#",className:"tag"},"Green"),u(n.Z,{href:"#",className:"tag"},"Man"),u(n.Z,{href:"#",className:"tag"},"Jeans"),u(n.Z,{href:"#",className:"tag"},"Women"))))):u("div",{className:"widget-2"}))))}))},2887:function(e,a,t){"use strict";t.r(a);var s=t(4121),i=t(1163),r=t(7294),l=t(8460),c=t(4593),o=t(5584),n=t(4836),p=t(8765),m=t(2078),d=t(5780),g=t(4018),u=t(6442),h=r.createElement;a.default=(0,o.Z)({ssr:!1})((function(){var e=(0,i.useRouter)(),a=(0,r.useState)(!0),t=a[0],o=a[1],f=e.query,y=(0,l.t)(n.p$),N=(0,s.Z)(y,2),b=N[0],v=N[1],w=v.data,Z=v.loading,_=(v.error,(0,r.useState)(8)),k=_[0],E=(_[1],w&&w.posts.data),C=w?parseInt(w.posts.total/k)+(w.posts.total%k?1:0):1,S=f.page?f.page:1;return(0,r.useEffect)((function(){b({variables:{category:f.category,from:k*(S-1),to:k*S}}),t?o(!1):(0,u._M)()}),[f]),h("main",{className:"main skeleton-body"},h(c.Z,null,h("title",null,"Riode React eCommerce Template | Blog Grid Sidebar")),h("h1",{className:"d-none"},"Riode React eCommerce Template - Blog Grid Sidebar"),h("nav",{className:"breadcrumb-nav"},h("div",{className:"container"},h("ul",{className:"breadcrumb"},h("li",null,h(p.Z,{href:"/"},h("i",{className:"d-icon-home"}))),h("li",null,h(p.Z,{href:"/blog/classic",className:"active"},"Blog")),h("li",null,"Grid With Sidebar")))),h("div",{className:"page-content with-sidebar"},h("div",{className:"container"},h("div",{className:"row gutter-lg"},h("div",{className:"col-lg-9"},h("div",{className:"posts grid row grid grid-2cols"},Z?new Array(parseInt(k)).fill(1).map((function(e,a){return h("div",{key:"Skeleton:"+a},h("div",{className:"skel-post"}))})):E?E.length?E.slice(0,E.length).map((function(e,a){return h(r.Fragment,{key:"post-one"+a},h("div",{className:"grid-item"},h(d.Z,{post:e})))})):h("div",{className:"info-box with-icon"},h("p",{className:"mt-4"},"No blogs were found matching your selection.")):""),h(m.Z,{totalPage:C})),h(g.Z,null)))))}))},9573:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/grid/sidebar",function(){return t(2887)}])}},function(e){e.O(0,[1243,9774,2888,179],(function(){return a=9573,e(e.s=a);var a}));var a=e.O();_N_E=a}]);