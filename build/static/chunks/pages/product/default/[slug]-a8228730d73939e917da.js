(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{8408:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var u=o(7294),r=o(4047),c=o(8765),s=o(4138),l=u.createElement;function n(e){var t=e.index,o=e.product,r=(0,u.useState)(0),c=r[0],s=r[1],n=(0,u.useState)(4),a=n[0],d=n[1];function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up",t="up"===e?1:-1,o=document.querySelector(".product-thumb"),u=document.querySelector(".product-thumbs-one").offsetHeight,r=o.offsetHeight+parseInt(window.getComputedStyle(o).getPropertyValue("margin-bottom"));document.querySelector(".product-thumbs").style.top="down"===e?-r*(c-t)+(u-r*a)+parseInt(window.getComputedStyle(o).getPropertyValue("margin-bottom"))+"px":-r*(c-t)+"px"}function m(e){document.querySelector(".product-thumbs").querySelector(".active.product-thumb")&&document.querySelector(".product-thumbs").querySelectorAll(".active.product-thumb").forEach((function(e){e.classList.remove("active")}));document.querySelector(".product-thumbs").querySelectorAll(".product-thumb")[e].classList.add("active")}(0,u.useEffect)((function(){return window.addEventListener("resize",p),setTimeout((function(){var e=document.querySelector(".product-thumb"),t=(document.querySelector(".product-thumbs-one").offsetHeight,parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom"))),o=e.offsetHeight+t,u=document.querySelector(".product-gallery.pg-vertical").offsetHeight+t;(u=parseInt(u/o))!==a&&d(u)}),300),function(){window.removeEventListener("resize",p)}}),[]),(0,u.useEffect)((function(){var e=document.querySelector(".product-thumbs-one");window.innerWidth<992?(document.querySelector(".product-thumbs-one").style.display="none",document.querySelector(".product-thumbs-two").style.display="block",window.jQuery(".owl-carousel").trigger("refresh.owl.carousel")):(document.querySelector(".product-thumbs-one").style.display="block",document.querySelector(".product-thumbs-two").style.display="none"),s(0),a<o.pictures.length?e.querySelector(".thumb-down").classList.remove("disabled"):e.querySelector(".thumb-down").classList.add("disabled"),document.querySelector(".product-thumbs")&&(m(0),e.querySelector(".thumb-up").classList.add("disabled"),document.querySelector(".product-thumbs").style.top=0)}),[o]),(0,u.useEffect)((function(){c+a-1<t&&(i("down"),s(c+1)),t<c&&(i("up"),s(c-1)),m(t)}),[t]),(0,u.useEffect)((function(){var e=document.querySelector(".product-thumbs-one");c+a<o.pictures.length?e.querySelector(".thumb-down").classList.remove("disabled"):e.querySelector(".thumb-down").classList.add("disabled"),o.pictures.length}),[a]),(0,u.useEffect)((function(){var e=document.querySelector(".product-thumbs-one");e&&(c>0?e.querySelector(".thumb-up").classList.remove("disabled"):e.querySelector(".thumb-up").classList.add("disabled"),c+a<o.pictures.length?e.querySelector(".thumb-down").classList.remove("disabled"):e.querySelector(".thumb-down").classList.add("disabled"))}),[c]);var p=function(){window.innerWidth<992?(document.querySelector(".product-thumbs-one").style.display="none",document.querySelector(".product-thumbs-two").style.display="block",window.jQuery(".owl-carousel").trigger("refresh.owl.carousel")):(document.querySelector(".product-thumbs-one").style.display="block",document.querySelector(".product-thumbs-two").style.display="none",h())},h=function(){setTimeout((function(){var e=document.querySelector(".product-thumb"),u=document.querySelector(".product-thumbs-one").offsetHeight,r=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom")),c=e.offsetHeight+r,s=document.querySelector(".product-gallery.pg-vertical").offsetHeight+r;s=parseInt(s/c),console.log("new term is",s,window.innerWidth),s!==a&&d(s);var l=document.querySelector(".product-thumbs-one");if(o.pictures.length<=s)setTimeout((function(){l.querySelector(".product-thumbs").style.top=0}),100);else{var n=parseInt(window.getComputedStyle(l.querySelector(".product-thumbs")).getPropertyValue("top")),i=u-(n+c*o.pictures.length-r);(t>s-1||i>=0)&&o.pictures.length>s&&(l.querySelector(".product-thumbs").style.top=n+i+"px")}}),300)};return l("div",{className:"product-thumbs-wrap product-thumbs-one"},l("div",{className:"product-thumbs",id:"product-thumbs"},o.pictures.map((function(t,o){return l("div",{className:"product-thumb",key:"thumb - "+o,onClick:function(t){return function(t,o){e.onChangeIndex&&e.onChangeIndex(o),m(o)}(0,o)}},l("img",{src:"https://d-themes.com/react_asset_api/riode"+t.url,alt:"product thumbnail",width:"109",height:"122"}))}))),l("button",{className:"thumb-up",onClick:function(){s(c-1),i("up")}},l("i",{className:"fas fa-chevron-left"})),l("button",{className:"thumb-down",onClick:function(){s(c+1),i("down")}},l("i",{className:"fas fa-chevron-right"})))}var a=o(6295),d=o(8866),i=o(4943),m=u.createElement;function p(e){var t=e.product,o=(0,u.useState)(0),l=o[0],p=o[1],h=(0,u.useState)(!1),b=h[0],y=h[1],f=(0,u.useState)(null),g=f[0],v=f[1],S=t.large_pictures?t.large_pictures:t.pictures;(0,u.useEffect)((function(){p(0)}),[window.location.pathname]),(0,u.useEffect)((function(){null!==g&&null!==g.current&&l>=0&&g.current.$car.to(l,300,!0)}),[l]);var w=function(e){e!==l&&p(e)},q={onTranslate:function(e){e.target&&document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs").querySelectorAll(".product-thumb")[e.item.index].classList.add("active"))}};return m(u.Fragment,null,m("div",{className:"product-gallery pb-0 pg-vertical media-default",style:{top:"88px"}},m("div",{className:"product-label-group"},0===t.stock?m("label",{className:"product-label label-out"},"out"):"",t.is_top?m("label",{className:"product-label label-top"},"top"):"",t.is_new?m("label",{className:"product-label label-new"},"new"):"",t.discount?m("label",{className:"product-label label-sale"},"sale"):""),m(s.Z,{adClass:"product-single-carousel owl-theme owl-nav-inner",options:i.Hr,onChangeIndex:w,onChangeRef:function(e){void 0!==e.current&&v(e)},events:q},S.map((function(e,t){return m("div",{key:e+"-"+t},m(r.lb,{imageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"}))}))),m(c.Z,{href:"#",className:"product-image-full",onClick:function(){y(!0)}},m("i",{className:"d-icon-zoom"})),m(n,{product:t,index:l,onChangeIndex:w}),m(a.Z,{product:t,index:l,onChangeIndex:w})),m(d.Z,{images:S,isOpen:b,changeOpenState:function(e){y(e)},index:l,product:t}))}},6295:function(e,t,o){"use strict";var u=o(7294),r=o(4138),c=o(4943),s=u.createElement;function l(e){var t=e.product,o=e.index,l=void 0===o?0:o,n=t.pictures,a=(0,u.useState)(null),d=a[0],i=a[1];(0,u.useEffect)((function(){null!==d&&l>=0&&(d.current.$car.to(l,300,!0),document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[l]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[l]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[l].querySelector(".product-thumb").classList.add("active")))}),[l]);return s("div",{className:"product-thumbs-wrap product-thumbs-two"},s(r.Z,{adClass:"product-thumbs product-thumb-carousel",options:c.tv,onChangeRef:function(e){void 0!==e.current&&null===d&&i(e)}},n.map((function(t,o){return s("div",{className:"product-thumb ".concat(0===o?"active":""),onClick:function(t){!function(t,o){e.onChangeIndex(o),document.querySelector(".product-thumbs")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),t.currentTarget.classList.add("active")}(t,o)},key:t+"-2-"+o},s("img",{src:"https://d-themes.com/react_asset_api/riode"+t.url,alt:"product thumbnail",width:"137",height:"137"}))}))))}t.Z=u.memo(l)},620:function(e,t,o){"use strict";o.r(t);var u=o(7294),r=o(1163),c=o(2244),s=o(4593),l=o(7564),n=o.n(l),a=o(5584),d=o(4836),i=o(4138),m=o(8408),p=o(1338),h=o(7999),b=o(4943),y=u.createElement;t.default=(0,a.Z)({ssr:!1})((function(){var e=(0,r.useRouter)().query.slug,t=(0,c.a)(d.N4,{variables:{slug:e}}),o=t.data,l=t.loading,a=(t.error,(0,u.useState)(!1)),f=a[0],g=a[1],v=o&&o.product.data,S=o&&o.product.related;return(0,u.useEffect)((function(){!l&&v&&n()("main").on("done",(function(){g(!0)})).on("progress",(function(){g(!1)})),l&&g(!1)}),[l,v]),y("main",{className:"main mt-6 single-product"},y(s.Z,null,y("title",null,"Riode React eCommerce Template | Product Default")),y("h1",{className:"d-none"},"Riode React eCommerce Template - Product Default"),void 0!==v?y("div",{className:"page-content mb-10 pb-6 ".concat(f?"":"d-none")},y("div",{className:"container-fluid vertical"},y("div",{className:"product product-single row pb-4 mb-md-10"},y("div",{className:"col-md-6 sticky-sidebar-wrapper mb-4 mb-md-0"},y(m.Z,{product:v})),y("div",{className:"col-md-6"},y(p.Z,{data:o,adClass:"pt-0",isDesc:!0}))),y(h.Z,{products:S,adClass:""}))):"",f&&!l?"":y("div",{className:"skeleton-body container-fluid mb-10"},y("div",{className:"row pb-4 mb-md-10"},y("div",{className:"col-md-6 pg-vertical"},y("div",{className:"skel-pro-gallery"})),y("div",{className:"col-md-6"},y("div",{className:"skel-pro-summary"}))),y("div",{className:"skel-pro-tabs"}),y("section",{className:"pt-3 mt-4"},y("h2",{className:"title justify-content-center"},"Related Products"),y(i.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:b.yH},[1,2,3,4,5,6].map((function(e){return y("div",{className:"product-loading-overlay",key:"popup-skel-"+e})}))))))}))},3302:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/default/[slug]",function(){return o(620)}])}},function(e){e.O(0,[2879,2418,9774,2888,179],(function(){return t=3302,e(e.s=t);var t}));var t=e.O();_N_E=t}]);