(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2185],{2346:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var s=t(7294),c=t(4047),l=t(8866),o=s.createElement;function r(e){var a=e.product,t=e.adClass,r=void 0===t?"":t,i=(0,s.useState)(0),n=i[0],u=i[1],d=(0,s.useState)(!1),m=d[0],p=d[1],f=a.large_pictures?a.large_pictures:a.pictures;(0,s.useEffect)((function(){u(0)}),[window.location.pathname]);var v=function(e){e.preventDefault(),u(parseInt(e.currentTarget.getAttribute("index"))),p(!0)};return o(s.Fragment,null,o("div",{className:"product-gallery row mb-4"},f.slice(0,4).map((function(e,t){return o("figure",{className:"product-image mb-4 ".concat(r),key:"image"+t},o(c.lb,{imageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"}),0===t?o("div",{className:"product-label-group"},0===a.stock?o("label",{className:"product-label label-out"},"out"):"",a.is_top?o("label",{className:"product-label label-top"},"top"):"",a.is_new?o("label",{className:"product-label label-new"},"new"):"",a.discount?o("label",{className:"product-label label-sale"},"sale"):""):"",o("a",{href:"#",className:"product-image-full",onClick:v,index:t},o("i",{className:"d-icon-zoom"})))}))),o(l.Z,{images:f.slice(0,4),isOpen:m,changeOpenState:function(e){p(e)},index:n,product:a}))}},6462:function(e,a,t){"use strict";t.r(a);var s=t(7294),c=t(1163),l=t(2244),o=t(4593),r=t(7564),i=t.n(r),n=t(5584),u=t(4836),d=t(4138),m=t(2346),p=t(4302),f=t(7999),v=t(4943),N=s.createElement;a.default=(0,n.Z)({ssr:!1})((function(){var e=(0,c.useRouter)().query.slug;if(!e)return"";var a=(0,l.a)(u.N4,{variables:{slug:e}}),t=a.data,r=a.loading,n=(a.error,(0,s.useState)(!1)),g=n[0],b=n[1],k=t&&t.product.data,_=t&&t.product.related;return(0,s.useEffect)((function(){!r&&k&&i()("main").on("done",(function(){b(!0)})).on("progress",(function(){b(!1)})),r&&b(!1)}),[r,k]),N("main",{className:"main mt-6 single-product product-sticky-info"},N(o.Z,null,N("title",null,"Riode React eCommerce Template | Product Sticky Info")),N("h1",{className:"d-none"},"Riode React eCommerce Template - Product Sticky Info"),void 0!==k?N("div",{className:"page-content mb-10 pb-6 ".concat(g?"":"d-none")},N("div",{className:"container skeleton-body"},N("div",{className:"product product-single row"},N("div",{className:"col-md-6"},N(m.Z,{product:k})),N("div",{className:"col-md-6"},N(p.Z,{data:t,isDesc:!0,isGuide:!0,isSticky:!0}))),N(f.Z,{products:_,adClass:"pt-3 mt-2"}))):"",g&&!r?"":N("div",{className:"skeleton-body sticky-info container mb-10"},N("div",{className:"row"},N("div",{className:"col-md-6 sticky-sidebar-wrapper"},N("div",{className:"skel-pro-gallery"})),N("div",{className:"col-md-6"},N("div",{className:"product-details sticky"},N("div",{className:"skel-pro-summary mt-4 mt-md-0"}),N("div",{className:"skel-pro-tabs"})))),N("section",{className:"pt-3 mt-4"},N("h2",{className:"title justify-content-center"},"Related Products"),N(d.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:v.F6},[1,2,3,4,5,6].map((function(e){return N("div",{className:"product-loading-overlay",key:"popup-skel-"+e})}))))))}))},4258:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/sticky-info/[slug]",function(){return t(6462)}])}},function(e){e.O(0,[2879,7595,9774,2888,179],(function(){return a=4258,e(e.s=a);var a}));var a=e.O();_N_E=a}]);