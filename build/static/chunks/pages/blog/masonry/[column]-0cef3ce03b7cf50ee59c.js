(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{2078:function(e,a,t){"use strict";var s=t(6265),n=t(7294),r=t(1163),l=t(8765),o=n.createElement;function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e){e.maxShowCounts;for(var a=e.totalPage,t=void 0===a?1:a,s=e.distance,c=void 0===s?2:s,m=(0,r.useRouter)(),p=m.query,u=p.page?parseInt(p.page):1,g=[],h=Math.max(u-c,2),d=Math.min(u+c,t-1),f=h;f<=d;f++)g[f-h+1]=f;return g[0]=1,g[d-h+2]=t,o(n.Fragment,null,t>1&&o("ul",{className:"pagination"},o("li",{className:"page-item ".concat(u<2?"disabled":"")},o(l.Z,{className:"page-link page-link-prev",href:u>1?{pathname:m.pathname,query:i(i({},p),{},{page:u-1})}:"#",scroll:!1},o("i",{className:"d-icon-arrow-left"}),"Prev")),g.map((function(e,a){return 1===a&&e>2?o(n.Fragment,{key:"page-".concat(a)},o("span",{className:"page-item dots"},"..."),o("li",{className:"page-item ".concat(u===e?"active":"")},o(l.Z,{className:"page-link",href:u===e?"#":{pathname:m.pathname,query:i(i({},p),{},{page:e})},scroll:!1},e,u===e&&o("span",{className:"sr-only"},"(current)")))):a===g.length-2&&e+1<t?o(n.Fragment,{key:"page-".concat(a)},o("li",{className:"page-item ".concat(u===e?"active":"")},o(l.Z,{className:"page-link",href:u===e?"#":{pathname:m.pathname,query:i(i({},p),{},{page:e})},scroll:!1},e,u===e&&o("span",{className:"sr-only"},"(current)"))),o("span",{className:"page-item dots"},"...")):o("li",{className:"page-item ".concat(u===e?"active":""),key:"page-".concat(a)},o(l.Z,{className:"page-link",href:u===e?"#":{pathname:m.pathname,query:i(i({},p),{},{page:e})},scroll:!1},e,u===e&&o("span",{className:"sr-only"},"(current)")))})),o("li",{className:"page-item ".concat(u>t-1?"disabled":"")},o(l.Z,{className:"page-link page-link-next",href:u<t?{pathname:m.pathname,query:i(i({},p),{},{page:u+1})}:"#",scroll:!1},"Next",o("i",{className:"d-icon-arrow-right"})))))}a.Z=n.memo(m)},5780:function(e,a,t){"use strict";var s=t(7294),n=t(2679),r=t(8765),l=t(4138),o=t(6442),c=t(4943),i=s.createElement;a.Z=function(e){var a=e.post,t=e.adClass,m=void 0===t?"":t,p=e.isLazy,u=void 0!==p&&p,g=e.isOriginal,h=void 0!==g&&g,d=e.btnText,f=void 0===d?"Read more":d,y=e.btnAdClass,v=void 0===y?"":y,N=e.type,b=void 0===N?"grid":N;return i("div",{className:"post post-grid ".concat("video"===a.type?"post-video":""," ").concat(m)},"image"===a.type||"video"===a.type||"masonry"===b?i("figure",{className:"post-media"},i(r.Z,{href:"/blog/single/".concat(a.slug)},u?i(n.LazyLoadImage,h?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:100,height:a.large_picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}):i("img",h?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:100,height:a.large_picture[0].height}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height})),"video"===a.type?i(s.Fragment,null,i("span",{className:"video-play",onClick:o.X9}),i("video",{width:"380"},i("source",{src:"https://d-themes.com/react_asset_api/riode"+a.video.url,type:"video/mp4"}))):""):i("figure",{className:"post-media"},i(l.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:c.cQ},u?a.picture.map((function(e,a){return i(n.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}})})):a.picture.map((function(e,a){return i("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height})})))),i("div",{className:"post-details"},i("div",{className:"post-meta"},"on ",i(r.Z,{href:"#",className:"post-date"},new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))," | ",i(r.Z,{href:"#",className:"post-comment"},i("span",null,a.comments)," Comments")),i("h4",{className:"post-title"},i(r.Z,{href:"/blog/single/".concat(a.slug)},a.title)),i("p",{className:"post-content"},a.content),i(r.Z,{href:"/blog/single/".concat(a.slug),className:"btn btn-link btn-underline btn-primary ".concat(v)},f,i("i",{className:"d-icon-arrow-right"}))))}},9106:function(e,a,t){"use strict";t.r(a);var s=t(809),n=t.n(s),r=t(2447),l=t(4121),o=t(1163),c=t(7294),i=t(8460),m=t(4593),p=t(7564),u=t.n(p),g=t(5584),h=t(4836),d=t(8765),f=t(2078),y=t(5780),v=t(6442),N=c.createElement;a.default=(0,g.Z)({ssr:!1})((0,o.withRouter)((function(e){var a=e.router,s=a.query.column;if(!s)return"";var o=(0,c.useState)(!0),p=o[0],g=o[1],b=a.query.category?a.query.category:null,w=a.query,Z=(0,i.t)(h.p$),_=(0,l.Z)(Z,2),k=_[0],E=_[1],O=E.data,q=E.loading,C=(E.error,(0,c.useState)(8)),S=C[0],P=(C[1],O&&O.posts.data),j=O?parseInt(O.posts.total/S)+(O.posts.total%S?1:0):1,x=w.page?w.page:1,D=S*(x-1),R=S*x,L={"2cols":"col-sm-6","3cols":"col-sm-6 col-lg-4","4cols":"col-sm-6 col-lg-4 col-xl-3"},T=(0,c.useRef)(null);function F(){return(F=(0,r.Z)(n().mark((function e(){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3391).then(t.t.bind(t,3391,23));case 2:a=e.sent.default,new a(T.current,{itemSelector:".grid-item"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){k({variables:{category:w.category,from:D,to:R}}),p?g(!1):(0,v._M)()}),[w]),(0,c.useEffect)((function(){if(!q&&P){var e=document.querySelector(".posts.grid");e&&u()(e).on("done",(function(){!function(){F.apply(this,arguments)}()}))}}),[q,P,s]),N("main",{className:"main skeleton-body"},N(m.Z,null,N("title",null,"Riode React eCommerce Template | Blog Masonry ",s)),N("h1",{className:"d-none"},"Riode React eCommerce Template - Blog Masonry ",s),N("nav",{className:"breadcrumb-nav"},N("div",{className:"container"},N("ul",{className:"breadcrumb"},N("li",null,N(d.Z,{href:"/"},N("i",{className:"d-icon-home"}))),N("li",null,N(d.Z,{href:"/blog/classic",className:"active"},"Blog")),N("li",null,"Masonry ",s[0]," Columns")))),N("div",{className:"page-content pb-10 mb-10"},N("div",{className:"container"},N("ul",{className:"nav-filters filter-underline blog-filters justify-content-center"},N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:""}},className:"nav-filter ".concat(""===b||null===b?"active":""," "),scroll:!1},"All"),N("span",null,"18")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"fashion"}},className:"nav-filter ".concat("fashion"===b?"active":""," "),scroll:!1},"Fashion"),N("span",null,"12")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"lifestyle"}},className:"nav-filter ".concat("lifestyle"===b?"active":""," "),scroll:!1},"Lifestyle"),N("span",null,"13")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"shopping"}},className:"nav-filter ".concat("shopping"===b?"active":""," "),scroll:!1},"Shopping"),N("span",null,"2")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"sport"}},className:"nav-filter ".concat("sport"===b?"active":""," "),scroll:!1},"Sport"),N("span",null,"6")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"summer-sale"}},className:"nav-filter ".concat("summer-sale"===b?"active":""," "),scroll:!1},"Summer Sale"),N("span",null,"1")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"travel"}},className:"nav-filter ".concat("travel"===b?"active":""," "),scroll:!1},"Travel"),N("span",null,"3")),N("li",null,N(d.Z,{href:{pathname:"/blog/masonry/".concat(s),query:{category:"winter-sale"}},className:"nav-filter ".concat("winter-sale"===b?"active":""," "),scroll:!1},"Winter Sale"),N("span",null,"2"))),q?N("div",{className:"posts grid row",style:{display:"flex"}},new Array(parseInt(S)).fill(1).map((function(e,a){return N("div",{className:"".concat(L[s]),key:"skel-post"+a},N("div",{className:"skel-post"}))}))):"",N("div",{className:"posts grid row masonry masonry-".concat(s),ref:T},q?"":P?P.length?P.slice(0,P.length).map((function(e,a){return N(c.Fragment,{key:"post-nine"+a},N("div",{className:"grid-item ".concat(L[s])},N(y.Z,{post:e,isOriginal:!0,type:"masonry"})))})):N("div",{className:"info-box with-icon"},N("p",{className:"mt-4"},"No blogs were found matching your selection.")):""),N(f.Z,{totalPage:j}))))})))},459:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/masonry/[column]",function(){return t(9106)}])}},function(e){e.O(0,[9774,2888,179],(function(){return a=459,e(e.s=a);var a}));var a=e.O();_N_E=a}]);