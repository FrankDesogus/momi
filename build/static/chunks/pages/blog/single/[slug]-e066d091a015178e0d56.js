(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{2644:function(e,a,t){"use strict";var s=t(7294),l=t(2679),i=t(8765),o=t(4138),r=t(6442),c=t(4943),n=s.createElement;a.Z=function(e){var a=e.post,t=e.adClass,m=void 0===t?"":t,d=e.isLazy,u=void 0!==d&&d,p=e.isOriginal,g=void 0!==p&&p,h=e.btnText,N=void 0===h?"Read more":h,b=e.btnAdClass,f=void 0===b?"btn-dark":b,v=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];return n("div",{className:"post ".concat("gallery"===a.type?"":"overlay-zoom"," overlay-dark ").concat("video"===a.type?"post-video":""," ").concat(m)},"image"===a.type||"video"===a.type?n("figure",{className:"post-media"},n(i.Z,{href:"/blog/single/".concat(a.slug)},u?n(l.LazyLoadImage,g?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:380,height:230,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}):n("img",g?{src:"https://d-themes.com/react_asset_api/riode"+a.large_picture[0].url,alt:"post image",width:380,height:230}:{src:"https://d-themes.com/react_asset_api/riode"+a.picture[0].url,alt:"post image",width:a.picture[0].width,height:a.picture[0].height})),"video"===a.type?n(s.Fragment,null,n("span",{className:"video-play",onClick:r.X9}),n("video",{width:"380"},n("source",{src:"https://d-themes.com/react_asset_api/riode"+a.video.url,type:"video/mp4"}))):"",n("div",{className:"post-calendar"},n("span",{className:"post-day"},new Date(a.date).getDay()+1),n("span",{className:"post-month"},v[new Date(a.date).getMonth()]))):n("figure",{className:"post-media"},n(o.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:c.cQ},u?a.picture.map((function(e,a){return n(l.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}})})):a.picture.map((function(e,a){return n("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height})}))),n("div",{className:"post-calendar"},n("span",{className:"post-day"},new Date(a.date).getDay()+1),n("span",{className:"post-month"},v[new Date(a.date).getMonth()]))),n("div",{className:"post-details"},n("h4",{className:"post-title"},n(i.Z,{href:"/blog/single/".concat(a.slug)},a.title)),n("p",{className:"post-content"},a.content),n(i.Z,{href:"/blog/single/".concat(a.slug),className:"btn btn-link btn-underline ".concat(f)},N,n("i",{className:"d-icon-arrow-right"}))))}},4018:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var s=t(7294),l=t(2244),i=t(1163),o=t(9617),r=t(5584),c=t(4836),n=t(8765),m=t(2674),d=t(2679),u=s.createElement;var p=function(e){var a=e.post,t=e.adClass,s=void 0===t?"":t,l=e.isLazy,i=void 0!==l&&l;return u("div",{className:"post post-list-sm ".concat(s)},u("figure",{className:"post-media"},u(n.Z,{href:"/blog/single/".concat(a.slug)},i?u(d.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+a.small_picture[0].url,alt:"post image",width:a.small_picture[0].width,height:a.small_picture[0].height,effect:"opacity",style:{backgroundColor:"#DEE6E8"}}):u("img",{src:"https://d-themes.com/react_asset_api/riode"+a.small_picture[0].url,alt:"post image",width:a.small_picture[0].width,height:a.small_picture[0].height}))),u("div",{className:"post-details"},u("div",{className:"post-meta"},u(n.Z,{href:"#",className:"post-date"},new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))),u("h4",{className:"post-title"},u(n.Z,{href:"/blog/single/".concat(a.slug)},a.title))))},g=s.createElement;var h=(0,r.Z)({ssr:!1})((function(){var e=(0,l.a)(c.oG),a=e.data,t=e.loading,r=(e.error,a&&a.postSidebarData.categories,a&&a.postSidebarData.recent),d=(0,i.useRouter)().query;return g("div",{className:"col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper"},g("div",{className:"sidebar-overlay",onClick:function(e){document.querySelector("body").classList.remove("right-sidebar-active")}},g(n.Z,{className:"sidebar-close",href:"#"},g("i",{className:"close-icon"}))),g("div",{className:"sidebar-toggle",onClick:function(e){document.querySelector("body").classList.toggle("right-sidebar-active")}},g("i",{className:"fas fa-chevron-left"})),g(o.Z,{offsetTop:88,className:"blog-sidebar-wrapper"},g("div",{className:"sidebar-content"},!t&&r?g(s.Fragment,null,g("div",{className:"widget widget-search border-no mb-2"},g("form",{action:"#",className:"input-wrapper input-wrapper-inline btn-absolute"},g("input",{type:"text",className:"form-control",name:"search",autoComplete:"off",placeholder:"Search in Blog",required:!0}),g("button",{className:"btn btn-search btn-link",type:"submit"},g("i",{className:"d-icon-search"})))),g("div",{className:"widget widget-collapsible border-no"},g(m.Z,{title:"<h3 class='widget-title border-no'>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},g("ul",{className:"widget-body filter-items search-ul"},g("li",{className:"".concat("fashion"===d.category?"active":"")},g(n.Z,{href:{pathname:"/blog/classic",query:{category:"fashion"}},scroll:!1},"Fashion")),g("li",{className:"".concat("lifestyle"===d.category?"active":"")},g(n.Z,{href:{pathname:"/blog/classic",query:{category:"lifestyle"}},scroll:!1},"Lifestyle")),g("li",{className:"".concat("shopping"===d.category?"active":"")},g(n.Z,{href:{pathname:"/blog/classic",query:{category:"shopping"}},scroll:!1},"Shopping")),g("li",{className:"".concat("sport"===d.category?"active":"")},g(n.Z,{href:{pathname:"/blog/classic",query:{category:"sport"}},scroll:!1},"Sport")),g("li",{className:"".concat("travel"===d.category?"active":"")},g(n.Z,{href:{pathname:"/blog/classic",query:{category:"travel"}},scroll:!1},"Travel"))))),g("div",{className:"widget widget-collapsible"},g(m.Z,{title:"<h3 class='widget-title'>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},g("ul",{className:"widget-body"},r.slice(0,3).map((function(e,a){return g("div",{className:"post-col",key:"Small Post "+a},g(p,{post:e}))}))))),g("div",{className:"widget widget-collapsible"},g(m.Z,{title:"<h3 class='widget-title'>About us<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},g("ul",{className:"widget-body"},g("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.")))),g("div",{className:"widget widget-collapsible widget-posts"},g(m.Z,{title:"<h3 class='widget-title'>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0},g("ul",{className:"widget-body"},g(n.Z,{href:"#",className:"tag"},"Bag"),g(n.Z,{href:"#",className:"tag"},"Classic"),g(n.Z,{href:"#",className:"tag"},"Converse"),g(n.Z,{href:"#",className:"tag"},"Leather"),g(n.Z,{href:"#",className:"tag"},"Fit"),g(n.Z,{href:"#",className:"tag"},"Green"),g(n.Z,{href:"#",className:"tag"},"Man"),g(n.Z,{href:"#",className:"tag"},"Jeans"),g(n.Z,{href:"#",className:"tag"},"Women"))))):g("div",{className:"widget-2"}))))}))},7483:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var s=t(7294),l=t(1163),i=t(2244),o=t(2679),r=t(4593),c=t(5584),n=t(4836),m=t(8765),d=t(4138),u=t(2246),p=t(4018),g=t(2644),h=t(4943),N=s.createElement;function b(e){var a=e.posts,t=e.loading;return N("div",{className:"related-posts"},N("h3",{className:"title title-simple text-left text-normal font-weight-bold ls-normal"},"Related Posts"),N(d.Z,{adClass:"owl-theme",options:h.Ju},t?new Array(parseInt(4)).fill(1).map((function(e,a){return N("div",{key:"Skeleton:"+a},N("div",{className:"skel-post"}))})):a?a.length?a.slice(0,a.length).map((function(e,a){return N(s.Fragment,{key:"post-one"+a},N(g.Z,{post:e,btnAdClass:"btn-primary"}))})):N("div",{className:"info-box with-icon"},N("p",{className:"mt-4"},"No blogs were found matching your selection.")):""))}var f=t(6442),v=s.createElement;var y=(0,c.Z)({ssr:!1})((function(){var e=(0,l.useRouter)().query.slug;if(!e)return"";var a=(0,i.a)(n.QI,{variables:{slug:e}}),t=a.data,c=a.loading,g=a.error,N=t&&t.post.data,y=t&&t.post.related;return g?v(u.default,null):v("main",{className:"main skeleton-body"},v(r.Z,null,v("title",null,"Riode React eCommerce Template | Blog Single")),v("h1",{className:"d-none"},"Riode React eCommerce Template - Blog Single"),v("nav",{className:"breadcrumb-nav"},v("div",{className:"container"},v("ul",{className:"breadcrumb"},v("li",null,v(m.Z,{href:"/"},v("i",{className:"d-icon-home"}))),v("li",null,v(m.Z,{href:"/blog/classic",className:"active"},"Blog")),v("li",null,"Single Post")))),v("div",{className:"page-content with-sidebar"},v("div",{className:"container"},v("div",{className:"row gutter-lg"},v("div",{className:"col-lg-9"},c?v("div",{className:"skel-post"}):v("div",{className:"post post-single ".concat("video"===N.type?"post-video":"")},"image"===N.type||"video"===N.type?v("figure",{className:"post-media"},v(m.Z,{href:"#"},v(o.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+N.large_picture[0].url,alt:"post image",width:"900",height:500,style:{backgroundColor:"#DEE6E8"}})),"video"===N.type?v(s.Fragment,null,v("span",{className:"video-play",onClick:f.X9}),v("video",{width:"380"},v("source",{src:"https://d-themes.com/react_asset_api/riode"+N.video.url,type:"video/mp4"}))):""):v("figure",{className:"post-media"},v(d.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:h.cQ},N.picture.map((function(e,a){return v("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",key:e.title+"-"+a,width:e.width,height:e.height,style:{backgroundColor:"#DEE6E8"}})})))),v("div",{className:"post-details"},v("div",{className:"post-meta"},"by ",v(m.Z,{href:"#",className:"post-author"},N.author)," on ",v(m.Z,{href:"#",className:"post-date"},new Date(N.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))," | ",v(m.Z,{href:"#",className:"post-comment"},v("span",null,N.comments)," Comments")),v("h4",{className:"post-title"},v(m.Z,{href:"#"},N.title)),v("div",{className:"post-body mb-7"},v("p",{className:"mb-5"},N.content),v("p",{className:"mb-6"},"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ",v(m.Z,{href:"#"},"ultrices sagittis"),", mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."),v("div",{className:"with-img row align-items-center"},v("div",{className:"col-md-6 mb-6"},v("figure",null,v(o.LazyLoadImage,{src:"./images/blog/1.jpg",alt:"post single image",width:336,height:415,effect:"opacity",className:"float-left",style:{backgroundColor:"#DEE6E8"}}),v("figcaption",{className:"text-left mt-1"},"Designe by ",v(m.Z,{href:"#"},"Casper Dalin")))),v("div",{className:"col-md-6 mb-6"},v("h4",{className:"font-weight-semi-bold ls-s"},"Quisque volutpat mattiseros."),v("p",{className:"mb-8 col-lg-11"},"Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. "),v("h4",{className:"font-weight-semi-bold ls-s"},"More Details"),v("ul",{className:"list list-type-check mb-6"},v("li",null,"Praesent id enim sit amet."),v("li",null,"Tdio vulputate eleifend in in tortor. ellus massa."),v("li",null,"Massa ristique sit amet condim vel"),v("li",null,"Dilisis Facilisis quis sapien. Praesent id enim sit amet"),v("li",null,"Praesent id enim sit amet."),v("li",null,"Tdio vulputate eleifend in in tortor. ellus massa.")))),v("blockquote",{className:"mt-1 mb-6 p-relative"},v("p",{className:"font-weight-semi-bold ls-m"},"\u201c Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. \u201d")),v("p",null,"Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. ")),v("div",{className:"post-author-detail"},v("figure",{className:"author-media"},v(m.Z,{href:"#"},v("img",{src:"./images/blog/comments/1.jpg",alt:"avatar",width:"50",height:"50"}))),v("div",{className:"author-body"},v("div",{className:"author-header d-flex justify-content-between align-items-center"},v("div",null,v("span",{className:"author-title"},"AUTHOR"),v("h4",{className:"author-name font-weight-bold mb-0"},"John Doe")),v("div",null,v(m.Z,{href:"#",className:"author-link font-weight-semi-bold"},"View all posts by John Doe ",v("i",{className:"d-icon-arrow-right"})))),v("div",{className:"author-content"},v("p",{className:"mb-0"},"Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros euerat. Aliquam erat volutpat.")))),v("div",{className:"post-footer mt-7 mb-3"},v("div",{className:"post-tags"},v(m.Z,{href:"#",className:"tag"},"classic"),v(m.Z,{href:"#",className:"tag"},"converse")),v("div",{className:"social-icons"},v(m.Z,{href:"#",className:"social-icon social-facebook",title:"Facebook"},v("i",{className:"fab fa-facebook-f"})),v(m.Z,{href:"#",className:"social-icon social-twitter",title:"Twitter"},v("i",{className:"fab fa-twitter"})),v(m.Z,{href:"#",className:"social-icon social-pinterest",title:"Pinterest"},v("i",{className:"fab fa-pinterest-p"})))))),c?"":v("nav",{className:"page-nav"},v(m.Z,{className:"pager-link pager-link-prev",href:"/blog/single/".concat(y[0].slug)},"Previous Post",v("span",{className:"pager-link-title"},y[0].title)),v(m.Z,{className:"pager-link pager-link-next",href:"/blog/single/".concat(y[y.length-1].slug)},"Go To Post",v("span",{className:"pager-link-title"},y[y.length-1].title))),v(b,{posts:y,loading:c}),c?"":v("div",{className:"comments"},v("h3",{className:"title title-simple text-left text-normal font-weight-bold"},N.comments," Comments"),N.comments>0?"":v("h3",{className:"title title-simple text-left text-normal font-weight-normal",style:{fontSize:"1.8rem"}},"Be The First To Review \u201c"+N.title+"\u201d"),v("ul",null,N.comments>0?v("li",null,v("div",{className:"comment"},v("figure",{className:"comment-media"},v(m.Z,{href:"#"},v("img",{src:"images/blog/comments/1.jpg",alt:"avatar",width:"100",height:"100"}))),v("div",{className:"comment-body"},v("div",{className:"comment-user"},v("span",{className:"comment-date"},"November 9, 2018 at 2:19 pm"),v("h4",null,v(m.Z,{href:"#"},"Jimmy Pearson"))),v("div",{className:"comment-content mb-2"},v("p",null,"Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ")),v(m.Z,{href:"#",className:"btn btn-link btn-reveal-right"},"REPLY",v("i",{className:"d-icon-arrow-right"})))),N.comments>1?v("ul",null,v("li",null,v("div",{className:"comment"},v("figure",{className:"comment-media"},v(m.Z,{href:"#"},v("img",{src:"images/blog/comments/2.jpg",alt:"avatar",width:"100",height:"100"}))),v("div",{className:"comment-body"},v("div",{className:"comment-user"},v("span",{className:"comment-date"},"November 9, 2018 at 2:19 pm"),v("h4",null,v(m.Z,{href:"#"},"Lena Knight"))),v("div",{className:"comment-content mb-2"},v("p",null,"Morbi interdum mollis sapien. Sed ac risus.")),v(m.Z,{href:"#",className:"btn btn-link btn-reveal-right"},"REPLY",v("i",{className:"d-icon-arrow-right"})))))):""):"",N.comments>2?v("li",null,v("div",{className:"comment"},v("figure",{className:"comment-media"},v(m.Z,{href:"#"},v("img",{src:"images/blog/comments/1.jpg",alt:"avatar",width:"100",height:"100"}))),v("div",{className:"comment-body"},v("div",{className:"comment-user"},v("span",{className:"comment-date"},"November 9, 2018 at 2:19 pm"),v("h4",null,v(m.Z,{href:"#"},"Johnathan Castillo"))),v("div",{className:"comment-content mb-2"},v("p",null,"Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")),v(m.Z,{href:"#",className:"btn btn-link btn-reveal-right"},"REPLY",v("i",{className:"d-icon-arrow-right"}))))):"")),v("div",{className:"reply"},v("div",{className:"title-wrapper text-left"},v("h3",{className:"title title-simple text-left text-normal"},"Leave A Reply"),v("p",null,"Your email address will not be published. Required fields are marked *")),v("form",{action:"#"},v("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-4",placeholder:"Comment *",required:!0}),v("div",{className:"row"},v("div",{className:"col-md-6 mb-5"},v("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})),v("div",{className:"col-md-6 mb-5"},v("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0}))),v("button",{type:"submit",className:"btn btn-primary btn-rounded"},"POST COMMENT",v("i",{className:"d-icon-arrow-right"}))))),v(p.Z,null)))))}))},2246:function(e,a,t){"use strict";t.r(a);var s=t(7294),l=t(4593),i=t(8765),o=t(6442),r=s.createElement;function c(){return(0,s.useEffect)((function(){return window.addEventListener("scroll",o.K6,!0),function(){window.removeEventListener("scroll",o.K6,!0)}}),[]),r("main",{className:"main"},r(l.Z,null,r("title",null,"Riode React eCommerce Template | 404")),r("h1",{className:"d-none"},"Riode React eCommerce Template - 404"),r("div",{className:"page-content"},r("section",{className:"error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3"},r("h1",{className:"mb-2 ls-m"},"Error 404"),r("img",{src:"./images/subpages/404.png",alt:"error 404",width:"609",height:"131"}),r("h4",{className:"mt-7 mb-0 ls-m text-uppercase"},"Ooopps! That page can\u2019t be found."),r("p",{className:"text-grey font-primary ls-m"},"It looks like nothing was found at this location."),r(i.Z,{href:"/",className:"btn btn-primary btn-rounded mb-4"},"Go home"))))}a.default=s.memo(c)},3054:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/single/[slug]",function(){return t(7483)}])}},function(e){e.O(0,[9617,9774,2888,179],(function(){return a=3054,e(e.s=a);var a}));var a=e.O();_N_E=a}]);