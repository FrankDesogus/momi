(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4677],{5379:function(e,t,a){"use strict";var c=a(7294),s=a(2679),o=a(8765),r=a(6442),l=c.createElement;function i(e){var t=e.product,a=e.adClass,i=e.isReviewCount,n=void 0===i||i;return l("div",{className:"product product-list-sm ".concat(a)},l("figure",{className:"product-media"},l(o.Z,{href:"/product/default/".concat(t.slug)},l(s.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+t.pictures[0].url,threshold:500,effect:"opacity",width:"300",height:"338"}),t.pictures.length>=2?l(s.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+t.pictures[1].url,threshold:500,width:"300",height:"338",effect:"opacity",wrapperClassName:"product-image-hover"}):"")),l("div",{className:"product-details"},l("h3",{className:"product-name"},l(o.Z,{href:"/product/default/".concat(t.slug)},t.name)),l("div",{className:"product-price"},t.price[0]!==t.price[1]?0===t.variants.length||t.variants.length>0&&!t.variants[0].price?l(c.Fragment,null,l("ins",{className:"new-price"},"$",(0,r.YM)(t.price[0])),l("del",{className:"old-price"},"$",(0,r.YM)(t.price[1]))):l("del",{className:"new-price"},"$",(0,r.YM)(t.price[0])," \u2013 $",(0,r.YM)(t.price[1])):l("ins",{className:"new-price"},"$",(0,r.YM)(t.price[0]))),l("div",{className:"ratings-container"},l("div",{className:"ratings-full"},l("span",{className:"ratings",style:{width:20*t.ratings+"%"}}),l("span",{className:"tooltiptext tooltip-top"},(0,r.YM)(t.ratings))),n?l(o.Z,{href:"/product/default/".concat(t.slug),className:"rating-reviews"},"( ",t.reviews," reviews )"):"")))}t.Z=c.memo(i)},4422:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var c=a(7294),s=a(4047),o=a(8765),r=a(4138),l=a(6295),i=a(8866),n=a(4943),u=c.createElement;function d(e){var t=e.product,a=e.adClass,d=void 0===a?"":a,m=(0,c.useState)(0),p=m[0],v=m[1],b=(0,c.useState)(0),h=(b[0],b[1],(0,c.useState)(!1)),g=h[0],N=h[1],f=(0,c.useState)(null),y=f[0],w=f[1],x=t.large_pictures?t.large_pictures:t.pictures;(0,c.useEffect)((function(){v(0)}),[window.location.pathname]),(0,c.useEffect)((function(){null!==y&&null!==y.current&&p>=0&&y.current.$car.to(p,300,!0)}),[p]);var S=function(e){e!==p&&v(e)},k={onTranslate:function(e){e.target&&document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs").querySelectorAll(".product-thumb")[e.item.index].classList.add("active"))}};return u("div",{className:"product-gallery product-gallery-vertical product-gallery-sticky ".concat(d)},u("div",{className:"product-label-group"},0===t.stock?u("label",{className:"product-label label-out"},"out"):"",t.is_top?u("label",{className:"product-label label-top"},"top"):"",t.is_new?u("label",{className:"product-label label-new"},"new"):"",t.discount?u("label",{className:"product-label label-sale"},"sale"):""),u(r.Z,{adClass:"product-single-carousel owl-theme owl-nav-inner",options:n.Hr,onChangeIndex:S,onChangeRef:function(e){void 0!==e.current&&w(e)},events:k},x.map((function(e,t){return u("div",{key:e+"-"+t},u(s.lb,{imageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"}))}))),u(o.Z,{href:"#",className:"product-image-full",onClick:function(){N(!0)}},u("i",{className:"d-icon-zoom"})),u(l.Z,{product:t,index:p,onChangeIndex:S}),u(i.Z,{images:x,isOpen:g,changeOpenState:function(e){N(e)},index:p,product:t}))}},7081:function(e,t,a){"use strict";var c=a(7294),s=a(2244),o=a(2679),r=a(5584),l=a(4836),i=a(8765),n=a(4138),u=a(5379),d=a(4943),m=c.createElement;t.Z=(0,r.Z)({ssr:!1})((function(e){var t=e.adClass,a=void 0===t?"":t,c=e.type,r=void 0===c?"right":c,p=(0,s.a)(l.EP,{variables:{featured:!0}}),v=p.data,b=p.loading,h=(p.error,v&&v.shopSidebarData.featured);return m("aside",{className:"col-lg-3 sidebar-fixed sticky-sidebar-wrapper ".concat(a," ").concat("left"===r?"sidebar":"right-sidebar")},m("div",{className:"sidebar-overlay",onClick:function(e){"right"===r?document.querySelector("body").classList.remove("right-sidebar-active"):document.querySelector("body").classList.remove("sidebar-active")}},m(i.Z,{className:"sidebar-close",href:"#"},m("i",{className:"d-icon-times"}))),m("div",{className:"sidebar-toggle",onClick:function(e){"right"===r?document.querySelector("body").classList.toggle("right-sidebar-active"):document.querySelector("body").classList.toggle("sidebar-active")}},m("i","right"===r?{className:"fas fa-chevron-left"}:{className:"fas fa-chevron-right"})),m("div",{className:"sidebar-content"},b?m("div",{className:"widget-2"}):m("div",{className:"sticky-sidebar"},m("div",{className:"service-list mb-4"},m("div",{className:"icon-box icon-box-side icon-box3"},m("span",{className:"icon-box-icon"},m("i",{className:"d-icon-secure"})),m("div",{className:"icon-box-content"},m("h4",{className:"icon-box-title text-capitalize"},"Secured Payment"),m("p",null,"We secure payment!"))),m("div",{className:"icon-box icon-box-side icon-box1"},m("span",{className:"icon-box-icon"},m("i",{className:"d-icon-truck"})),m("div",{className:"icon-box-content"},m("h4",{className:"icon-box-title text-capitalize"},"Free Shipping"),m("p",null,"For all orders over $99"))),m("div",{className:"icon-box icon-box-side icon-box2"},m("span",{className:"icon-box-icon"},m("i",{className:"d-icon-money"})),m("div",{className:"icon-box-content"},m("h4",{className:"icon-box-title text-capitalize"},"Money Back"),m("p",null,"Any back within 30 days")))),m("div",{className:"banner banner-fixed mb-7"},m("figure",null,m(o.LazyLoadImage,{src:"./images/product-banner.jpg",alt:"banner",width:"280",height:"320",effect:"opacity",style:{backgroundColor:"#BDD0DE"}})),m("div",{className:"banner-content text-center"},m("h5",{className:"banner-subtitle ls-l text-uppercase mb-0"},"Gucci Shoes"),m("h3",{className:"banner-title ls-s text-uppercase mb-0"},"New Trend 2021"))),m("div",{className:"widget widget-products"},m("h4",{className:"widget-title mb-3 lh-1 border-no text-capitalize "},"Our Featured"),m("ul",{className:"widget-body"},m(n.Z,{adClass:"owl-nav-top",options:d.wI},m("div",{className:"products-col"},h.slice(0,3).map((function(e,t){return m(u.Z,{product:e,key:"small-product-"+t})}))),m("div",{className:"products-col"},h.slice(0,3).map((function(e,t){return m(u.Z,{product:e,key:"small-product-"+t})})))))))))}))},6295:function(e,t,a){"use strict";var c=a(7294),s=a(4138),o=a(4943),r=c.createElement;function l(e){var t=e.product,a=e.index,l=void 0===a?0:a,i=t.pictures,n=(0,c.useState)(null),u=n[0],d=n[1];(0,c.useEffect)((function(){null!==u&&l>=0&&(u.current.$car.to(l,300,!0),document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[l]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[l]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[l].querySelector(".product-thumb").classList.add("active")))}),[l]);return r("div",{className:"product-thumbs-wrap product-thumbs-two"},r(s.Z,{adClass:"product-thumbs product-thumb-carousel",options:o.tv,onChangeRef:function(e){void 0!==e.current&&null===u&&d(e)}},i.map((function(t,a){return r("div",{className:"product-thumb ".concat(0===a?"active":""),onClick:function(t){!function(t,a){e.onChangeIndex(a),document.querySelector(".product-thumbs")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),t.currentTarget.classList.add("active")}(t,a)},key:t+"-2-"+a},r("img",{src:"https://d-themes.com/react_asset_api/riode"+t.url,alt:"product thumbnail",width:"137",height:"137"}))}))))}t.Z=c.memo(l)},6701:function(e,t,a){"use strict";a.r(t);var c=a(7294),s=a(1163),o=a(2244),r=a(4593),l=a(7564),i=a.n(l),n=a(5584),u=a(4836),d=a(8765),m=a(4138),p=a(4422),v=a(4302),b=a(7999),h=a(7684),g=a(7081),N=a(4943),f=c.createElement;t.default=(0,n.Z)({ssr:!1})((function(){var e=(0,s.useRouter)().query.slug;if(!e)return"";var t=(0,o.a)(u.N4,{variables:{slug:e}}),a=t.data,l=t.loading,n=(t.error,(0,c.useState)(!1)),y=n[0],w=n[1],x=a&&a.product.data,S=a&&a.product.related;return(0,c.useEffect)((function(){!l&&x&&i()("main").on("done",(function(){w(!0)})).on("progress",(function(){w(!1)})),l&&w(!1)}),[l,x]),f("main",{className:"main single-product"},f(r.Z,null,f("title",null,"Riode React eCommerce Template | Product Fullwidth")),f("h1",{className:"d-none"},"Riode React eCommerce Template - Product Fullwidth"),void 0!==x?f("div",{className:"page-content mb-10 ".concat(y?"":"d-none")},f("div",{className:"container-fluid skeleton-body"},f("div",{className:"product-navigation"},f("ul",{className:"breadcrumb breadcrumb-lg"},f("li",null,f(d.Z,{href:"/"},f("i",{className:"d-icon-home"}))),f("li",null,f(d.Z,{href:"#",className:"active"},"Products")),f("li",null,"Detail")),f(h.Z,{product:a.product})),f("div",{className:"row gutter-lg"},f(g.Z,{adClass:"col-xxl-2"}),f("div",{className:"col-lg-9 col-xxl-10"},f("div",{className:"product product-single row"},f("div",{className:"col-md-6"},f(p.Z,{product:x})),f("div",{className:"col-md-6"},f(v.Z,{data:a,isDesc:!0,isProductNav:!1}))),f(b.Z,{products:S,adClass:"pt-3"}))))):"",y&&!l?"":f("div",{className:"skeleton-body container-fluid mt-10 pt-3 mb-10"},f("div",{className:"row gutter-lg"},f("div",{className:"col-lg-3 col-xxl-2 right-sidebar sidebar-fixed sticky-sidebar-wrapper"},f("div",{className:"sidebar-content"},f("div",{className:"widget-2"}))),f("div",{className:"col-lg-9 col-xxl-10"},f("div",{className:"row"},f("div",{className:"col-md-6"},f("div",{className:"skel-pro-gallery"})),f("div",{className:"col-md-6"},f("div",{className:"skel-pro-summary"}),f("div",{className:"skel-pro-tabs"}))),f("section",{className:"pt-3 mt-4"},f("h2",{className:"title justify-content-center"},"Related Products"),f(m.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:N.F6},[1,2,3,4,5,6].map((function(e){return f("div",{className:"product-loading-overlay",key:"popup-skel-"+e})}))))))))}))},1291:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/full-width/[slug]",function(){return a(6701)}])}},function(e){e.O(0,[2879,7595,9774,2888,179],(function(){return t=1291,e(e.s=t);var t}));var t=e.O();_N_E=t}]);