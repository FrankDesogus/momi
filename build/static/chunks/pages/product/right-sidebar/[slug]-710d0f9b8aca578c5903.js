(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3633],{5379:function(e,t,a){"use strict";var s=a(7294),l=a(2679),i=a(8765),n=a(6442),r=s.createElement;function c(e){var t=e.product,a=e.adClass,c=e.isReviewCount,o=void 0===c||c;return r("div",{className:"product product-list-sm ".concat(a)},r("figure",{className:"product-media"},r(i.Z,{href:"/product/default/".concat(t.slug)},r(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+t.pictures[0].url,threshold:500,effect:"opacity",width:"300",height:"338"}),t.pictures.length>=2?r(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+t.pictures[1].url,threshold:500,width:"300",height:"338",effect:"opacity",wrapperClassName:"product-image-hover"}):"")),r("div",{className:"product-details"},r("h3",{className:"product-name"},r(i.Z,{href:"/product/default/".concat(t.slug)},t.name)),r("div",{className:"product-price"},t.price[0]!==t.price[1]?0===t.variants.length||t.variants.length>0&&!t.variants[0].price?r(s.Fragment,null,r("ins",{className:"new-price"},"$",(0,n.YM)(t.price[0])),r("del",{className:"old-price"},"$",(0,n.YM)(t.price[1]))):r("del",{className:"new-price"},"$",(0,n.YM)(t.price[0])," \u2013 $",(0,n.YM)(t.price[1])):r("ins",{className:"new-price"},"$",(0,n.YM)(t.price[0]))),r("div",{className:"ratings-container"},r("div",{className:"ratings-full"},r("span",{className:"ratings",style:{width:20*t.ratings+"%"}}),r("span",{className:"tooltiptext tooltip-top"},(0,n.YM)(t.ratings))),o?r(i.Z,{href:"/product/default/".concat(t.slug),className:"rating-reviews"},"( ",t.reviews," reviews )"):"")))}t.Z=s.memo(c)},4617:function(e,t,a){"use strict";var s=a(7294),l=a(8216),i=a(340),n=a(8765),r=a(6723),c=a(6442),o=s.createElement;t.Z=(0,l.$j)("",{openModal:r.n.openModal})((function(e){var t=e.product,a=e.isGuide,l=void 0===a||a,r=e.isDivider,m=void 0===r||r,u=e.openModal,d=[],p=[];t.variants.length>0&&(t.variants[0].size&&t.variants.forEach((function(e){-1===p.findIndex((function(t){return t.name===e.size.name}))&&p.push({name:e.size.name,value:e.size.size})})),t.variants[0].color&&t.variants.forEach((function(e){-1===d.findIndex((function(t){return t.name===e.color.name}))&&d.push({name:e.color.name,value:e.color.color})})));var b=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return o(i.mQ,{className:"tab tab-nav-simple product-tabs",selectedTabClassName:"show",selectedTabPanelClassName:"active",defaultIndex:0},o(i.td,{className:"nav nav-tabs justify-content-center",role:"tablist"},o(i.OK,{className:"nav-item"},o("span",{className:"nav-link"},"Description")),t&&t.brands.length>0||d.length>0||p.length>0?o(i.OK,{className:"nav-item"},o("span",{className:"nav-link"},"Additional information")):"",l?o(i.OK,{className:"nav-item"},o("span",{className:"nav-link"},"Size Guide")):"",o(i.OK,{className:"nav-item"},o("span",{className:"nav-link"},"Reviews (",t.reviews,")"))),o("div",{className:"tab-content"},o(i.x4,{className:"tab-pane product-tab-description"},o("div",{className:"row mt-6"},o("div",{className:"col-md-6"},o("h5",{className:"description-title mb-4 font-weight-semi-bold ls-m"},"Features"),o("p",{className:"mb-2"},"Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti iMassa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id enim sit amet."),o("ul",{className:"mb-8"},o("li",null,"Praesent id enim sit amet.Tdio vulputate"),o("li",null,"Eleifend in in tortor. ellus massa.Dristique sitii"),o("li",null,"Massa ristique sit amet condim vel"),o("li",null,"Dilisis Facilisis quis sapien. Praesent id enim sit amet")),o("h5",{className:"description-title mb-3 font-weight-semi-bold ls-m"},"Specifications"),o("table",{className:"table"},o("tbody",null,o("tr",null,o("th",{className:"font-weight-semi-bold text-dark pl-0"},"Material"),o("td",{className:"pl-4"},"Praesent id enim sit amet.Tdio")),o("tr",null,o("th",{className:"font-weight-semi-bold text-dark pl-0"},"Claimed Size"),o("td",{className:"pl-4"},"Praesent id enim sit")),o("tr",null,o("th",{className:"font-weight-semi-bold text-dark pl-0"},"Recommended Use"),o("td",{className:"pl-4"},"Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti")),o("tr",null,o("th",{className:"font-weight-semi-bold text-dark border-no pl-0"},"Manufacturer"),o("td",{className:"border-no pl-4"},"Praesent id enim"))))),o("div",{className:"col-md-6 pl-md-6 pt-4 pt-md-0"},o("h5",{className:"description-title font-weight-semi-bold ls-m mb-5"},"Video Description"),o("figure",{className:"p-relative d-inline-block mb-3"},o("img",{src:"./images/product.jpg",width:"559",height:"370",alt:"Product"}),o("a",{className:"btn-play btn-iframe",href:"#",data:"/uploads/video/video-1.mp4",onClick:function(e){e.preventDefault();var t=e.currentTarget.closest(".btn-play").getAttribute("data");u(t)}},o("i",{className:"d-icon-play-solid"}))),o("div",{className:"icon-box-wrap d-flex flex-wrap"},o("div",{className:"icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10"},o("div",{className:"icon-box-icon"},o("i",{className:"d-icon-lock"})),o("div",{className:"icon-box-content"},o("h4",{className:"icon-box-title lh-1 pt-1 ls-s text-normal"},"2 year warranty"),o("p",null,"Guarantee with no doubt"))),m?o("div",{className:"divider d-xl-show mr-10"}):"",o("div",{className:"icon-box icon-box-side icon-border pt-2 pb-2 mb-4"},o("div",{className:"icon-box-icon"},o("i",{className:"d-icon-truck"})),o("div",{className:"icon-box-content"},o("h4",{className:"icon-box-title lh-1 pt-1 ls-s text-normal"},"Free shipping"),o("p",null,"On orders over $50.00"))))))),t&&t.brands.length>0||d.length>0||p.length>0?o(i.x4,{className:"tab-pane product-tab-additional"},o("ul",{className:"list-none"},t.categories.length>0?o("li",null,o("label",null,"Categories:"),o("p",null,t.categories.map((function(e,a){return o(s.Fragment,{key:e.name+"-"+a},e.name,a<t.categories.length-1?", ":"")})))):"",t.brands.length>0?o("li",null,o("label",null,"Brands:"),o("p",null,t.brands.map((function(e,a){return o(s.Fragment,{key:e.name+"-"+a},e.name,a<t.brands.length-1?", ":"")})))):"",d.length>0?o("li",null,o("label",null,"Color:"),o("p",null,d.map((function(e,t){return o(s.Fragment,{key:e.name+"-"+t},e.name,t<d.length-1?", ":"")})))):"",p.length>0?o("li",null,o("label",null,"Size:"),o("p",null,p.map((function(e,t){return o(s.Fragment,{key:e.name+"-"+t},e.name,t<p.length-1?", ":"")})))):"")):"",l?o(i.x4,{className:"tab-pane product-tab-size-guide"},o("figure",{className:"size-image mt-4 mb-4"},o("img",{src:"./images/size_guide.png",alt:"Size Guide Image",width:"217",height:"398"})),o("figure",{className:"size-table mt-4 mb-4"},o("table",null,o("thead",null,o("tr",null,o("th",null,"SIZE"),o("th",null,"CHEST(IN.)"),o("th",null,"WEIST(IN.)"),o("th",null,"HIPS(IN.)"))),o("tbody",null,o("tr",null,o("th",null,"XS"),o("td",null,"34-36"),o("td",null,"27-29"),o("td",null,"34.5-36.5")),o("tr",null,o("th",null,"S"),o("td",null,"36-38"),o("td",null,"29-31"),o("td",null,"36.5-38.5")),o("tr",null,o("th",null,"M"),o("td",null,"38-40"),o("td",null,"31-33"),o("td",null,"38.5-40.5")),o("tr",null,o("th",null,"L"),o("td",null,"40-42"),o("td",null,"33-36"),o("td",null,"40.5-43.5")),o("tr",null,o("th",null,"XL"),o("td",null,"42-45"),o("td",null,"36-40"),o("td",null,"43.5-47.5")),o("tr",null,o("th",null,"XXL"),o("td",null,"45-48"),o("td",null,"40-44"),o("td",null,"47.5-51.5")))))):"",o(i.x4,{className:"tab-pane product-tab-reviews"},0===t.reviews?o("div",{className:"comments mb-2 pt-2 pb-2 border-no"},"There are no reviews yet."):o("div",{className:"comments mb-8 pt-2 pb-2 border-no"},o("ul",null,o("li",null,o("div",{className:"comment"},o("figure",{className:"comment-media"},o(n.Z,{href:"#"},o("img",{src:"./images/blog/comments/1.jpg",alt:"avatar",width:"100",height:"100"}))),o("div",{className:"comment-body"},o("div",{className:"comment-rating ratings-container mb-0"},o("div",{className:"ratings-full"},o("span",{className:"ratings",style:{width:20*t.ratings+"%"}}),o("span",{className:"tooltiptext tooltip-top"},(0,c.YM)(t.ratings)))),o("div",{className:"comment-user"},o("span",{className:"comment-date text-body"},"September 22, 2020 at 9:42 pm"),o("h4",null,o(n.Z,{href:"#"},"John Doe"))),o("div",{className:"comment-content"},o("p",null,"Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."))))),t.reviews>1?o("li",null,o("div",{className:"comment"},o("figure",{className:"comment-media"},o(n.Z,{href:"#"},o("img",{src:"./images/blog/comments/2.jpg",alt:"avatar",width:"100",height:"100"}))),o("div",{className:"comment-body"},o("div",{className:"comment-rating ratings-container mb-0"},o("div",{className:"ratings-full"},o("span",{className:"ratings",style:{width:20*t.ratings+"%"}}),o("span",{className:"tooltiptext tooltip-top"},(0,c.YM)(t.ratings)))),o("div",{className:"comment-user"},o("span",{className:"comment-date text-body"},"September 22, 2020 at 9:42 pm"),o("h4",null,o(n.Z,{href:"#"},"John Doe"))),o("div",{className:"comment-content"},o("p",null,"Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat."))))):"")),o("div",{className:"reply"},o("div",{className:"title-wrapper text-left"},o("h3",{className:"title title-simple text-left text-normal"},t.reviews>0?"Add a Review":"Be The First To Review \u201c"+t.name+"\u201d"),o("p",null,"Your email address will not be published. Required fields are marked *")),o("div",{className:"rating-form"},o("label",{htmlFor:"rating",className:"text-dark"},"Your rating * "),o("span",{className:"rating-stars selected"},[1,2,3,4,5].map((function(e,t){return o("a",{className:"star-".concat(e),href:"#",onClick:b,key:"star-"+t},e)}))),o("select",{name:"rating",id:"rating",required:"",style:{display:"none"}},o("option",{value:""},"Rate\u2026"),o("option",{value:"5"},"Perfect"),o("option",{value:"4"},"Good"),o("option",{value:"3"},"Average"),o("option",{value:"2"},"Not that bad"),o("option",{value:"1"},"Very poor"))),o("form",{action:"#"},o("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-4",placeholder:"Comment *",required:!0}),o("div",{className:"row"},o("div",{className:"col-md-6 mb-5"},o("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})),o("div",{className:"col-md-6 mb-5"},o("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0}))),o("div",{className:"form-checkbox mb-4"},o("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),o("label",{className:"form-control-label",htmlFor:"signin-remember"},"Save my name, email, and website in this browser for the next time I comment.")),o("button",{type:"submit",className:"btn btn-primary btn-rounded"},"Submit",o("i",{className:"d-icon-arrow-right"})))))))}))},4422:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var s=a(7294),l=a(4047),i=a(8765),n=a(4138),r=a(6295),c=a(8866),o=a(4943),m=s.createElement;function u(e){var t=e.product,a=e.adClass,u=void 0===a?"":a,d=(0,s.useState)(0),p=d[0],b=d[1],v=(0,s.useState)(0),g=(v[0],v[1],(0,s.useState)(!1)),h=g[0],N=g[1],f=(0,s.useState)(null),y=f[0],w=f[1],x=t.large_pictures?t.large_pictures:t.pictures;(0,s.useEffect)((function(){b(0)}),[window.location.pathname]),(0,s.useEffect)((function(){null!==y&&null!==y.current&&p>=0&&y.current.$car.to(p,300,!0)}),[p]);var S=function(e){e!==p&&b(e)},k={onTranslate:function(e){e.target&&document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs").querySelectorAll(".product-thumb")[e.item.index].classList.add("active"))}};return m("div",{className:"product-gallery product-gallery-vertical product-gallery-sticky ".concat(u)},m("div",{className:"product-label-group"},0===t.stock?m("label",{className:"product-label label-out"},"out"):"",t.is_top?m("label",{className:"product-label label-top"},"top"):"",t.is_new?m("label",{className:"product-label label-new"},"new"):"",t.discount?m("label",{className:"product-label label-sale"},"sale"):""),m(n.Z,{adClass:"product-single-carousel owl-theme owl-nav-inner",options:o.Hr,onChangeIndex:S,onChangeRef:function(e){void 0!==e.current&&w(e)},events:k},x.map((function(e,t){return m("div",{key:e+"-"+t},m(l.lb,{imageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"}))}))),m(i.Z,{href:"#",className:"product-image-full",onClick:function(){N(!0)}},m("i",{className:"d-icon-zoom"})),m(r.Z,{product:t,index:p,onChangeIndex:S}),m(c.Z,{images:x,isOpen:h,changeOpenState:function(e){N(e)},index:p,product:t}))}},7081:function(e,t,a){"use strict";var s=a(7294),l=a(2244),i=a(2679),n=a(5584),r=a(4836),c=a(8765),o=a(4138),m=a(5379),u=a(4943),d=s.createElement;t.Z=(0,n.Z)({ssr:!1})((function(e){var t=e.adClass,a=void 0===t?"":t,s=e.type,n=void 0===s?"right":s,p=(0,l.a)(r.EP,{variables:{featured:!0}}),b=p.data,v=p.loading,g=(p.error,b&&b.shopSidebarData.featured);return d("aside",{className:"col-lg-3 sidebar-fixed sticky-sidebar-wrapper ".concat(a," ").concat("left"===n?"sidebar":"right-sidebar")},d("div",{className:"sidebar-overlay",onClick:function(e){"right"===n?document.querySelector("body").classList.remove("right-sidebar-active"):document.querySelector("body").classList.remove("sidebar-active")}},d(c.Z,{className:"sidebar-close",href:"#"},d("i",{className:"d-icon-times"}))),d("div",{className:"sidebar-toggle",onClick:function(e){"right"===n?document.querySelector("body").classList.toggle("right-sidebar-active"):document.querySelector("body").classList.toggle("sidebar-active")}},d("i","right"===n?{className:"fas fa-chevron-left"}:{className:"fas fa-chevron-right"})),d("div",{className:"sidebar-content"},v?d("div",{className:"widget-2"}):d("div",{className:"sticky-sidebar"},d("div",{className:"service-list mb-4"},d("div",{className:"icon-box icon-box-side icon-box3"},d("span",{className:"icon-box-icon"},d("i",{className:"d-icon-secure"})),d("div",{className:"icon-box-content"},d("h4",{className:"icon-box-title text-capitalize"},"Secured Payment"),d("p",null,"We secure payment!"))),d("div",{className:"icon-box icon-box-side icon-box1"},d("span",{className:"icon-box-icon"},d("i",{className:"d-icon-truck"})),d("div",{className:"icon-box-content"},d("h4",{className:"icon-box-title text-capitalize"},"Free Shipping"),d("p",null,"For all orders over $99"))),d("div",{className:"icon-box icon-box-side icon-box2"},d("span",{className:"icon-box-icon"},d("i",{className:"d-icon-money"})),d("div",{className:"icon-box-content"},d("h4",{className:"icon-box-title text-capitalize"},"Money Back"),d("p",null,"Any back within 30 days")))),d("div",{className:"banner banner-fixed mb-7"},d("figure",null,d(i.LazyLoadImage,{src:"./images/product-banner.jpg",alt:"banner",width:"280",height:"320",effect:"opacity",style:{backgroundColor:"#BDD0DE"}})),d("div",{className:"banner-content text-center"},d("h5",{className:"banner-subtitle ls-l text-uppercase mb-0"},"Gucci Shoes"),d("h3",{className:"banner-title ls-s text-uppercase mb-0"},"New Trend 2021"))),d("div",{className:"widget widget-products"},d("h4",{className:"widget-title mb-3 lh-1 border-no text-capitalize "},"Our Featured"),d("ul",{className:"widget-body"},d(o.Z,{adClass:"owl-nav-top",options:u.wI},d("div",{className:"products-col"},g.slice(0,3).map((function(e,t){return d(m.Z,{product:e,key:"small-product-"+t})}))),d("div",{className:"products-col"},g.slice(0,3).map((function(e,t){return d(m.Z,{product:e,key:"small-product-"+t})})))))))))}))},6295:function(e,t,a){"use strict";var s=a(7294),l=a(4138),i=a(4943),n=s.createElement;function r(e){var t=e.product,a=e.index,r=void 0===a?0:a,c=t.pictures,o=(0,s.useState)(null),m=o[0],u=o[1];(0,s.useEffect)((function(){null!==m&&r>=0&&(m.current.$car.to(r,300,!0),document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[r]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[r]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[r].querySelector(".product-thumb").classList.add("active")))}),[r]);return n("div",{className:"product-thumbs-wrap product-thumbs-two"},n(l.Z,{adClass:"product-thumbs product-thumb-carousel",options:i.tv,onChangeRef:function(e){void 0!==e.current&&null===m&&u(e)}},c.map((function(t,a){return n("div",{className:"product-thumb ".concat(0===a?"active":""),onClick:function(t){!function(t,a){e.onChangeIndex(a),document.querySelector(".product-thumbs")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),t.currentTarget.classList.add("active")}(t,a)},key:t+"-2-"+a},n("img",{src:"https://d-themes.com/react_asset_api/riode"+t.url,alt:"product thumbnail",width:"137",height:"137"}))}))))}t.Z=s.memo(r)},2756:function(e,t,a){"use strict";a.r(t);var s=a(7294),l=a(1163),i=a(2244),n=a(4593),r=a(7564),c=a.n(r),o=a(5584),m=a(4836),u=a(4138),d=a(4422),p=a(1338),b=a(4617),v=a(7999),g=a(7081),h=a(4943),N=s.createElement;t.default=(0,o.Z)({ssr:!1})((function(){var e=(0,l.useRouter)().query.slug;if(!e)return"";var t=(0,i.a)(m.N4,{variables:{slug:e}}),a=t.data,r=t.loading,o=(t.error,(0,s.useState)(!1)),f=o[0],y=o[1],w=a&&a.product.data,x=a&&a.product.related;return(0,s.useEffect)((function(){!r&&w&&c()("main").on("done",(function(){y(!0)})).on("progress",(function(){y(!1)})),r&&y(!1)}),[r,w]),N("main",{className:"main single-product"},N(n.Z,null,N("title",null,"Riode React eCommerce Template | Product With Right Sidebar")),N("h1",{className:"d-none"},"Riode React eCommerce Template - Product With Right Sidebar"),void 0!==w?N("div",{className:"page-content mb-10 pb-6 ".concat(f?"":"d-none")},N("div",{className:"container skeleton-body"},N("div",{className:"row mt-6 gutter-lg"},N(g.Z,null),N("div",{className:"col-lg-9"},N("div",{className:"product product-single row mb-4"},N("div",{className:"col-md-6"},N(d.Z,{product:w,adClass:"pb-0"})),N("div",{className:"col-md-6"},N(p.Z,{data:a}))),N(b.Z,{product:w,isDivider:!1}),N(v.Z,{products:x}))))):"",f&&!r?"":N("div",{className:"skeleton-body container mb-10"},N("div",{className:"row mt-6 gutter-lg"},N("div",{className:"col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper"},N("div",{className:"sidebar-content"},N("div",{className:"widget-2"}))),N("div",{className:"col-lg-9"},N("div",{className:"row mb-4"},N("div",{className:"col-md-6"},N("div",{className:"skel-pro-gallery"})),N("div",{className:"col-md-6"},N("div",{className:"skel-pro-summary"}))),N("div",{className:"skel-pro-tabs"}),N("section",{className:"pt-3 mt-4"},N("h2",{className:"title justify-content-center"},"Related Products"),N(u.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:h.F6},[1,2,3,4,5,6].map((function(e){return N("div",{className:"product-loading-overlay",key:"popup-skel-"+e})}))))))))}))},853:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/right-sidebar/[slug]",function(){return a(2756)}])}},function(e){e.O(0,[2879,2418,9774,2888,179],(function(){return t=853,e(e.s=t);var t}));var t=e.O();_N_E=t}]);