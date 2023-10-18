exports.id = 5961;
exports.ids = [5961];
exports.modules = {

/***/ 5438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5766);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(806);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


const API_URI = `${"https://d-themes.com/riode_react_api"}/graphql`;
const apolloClient = new (apollo_boost__WEBPACK_IMPORTED_MODULE_1___default())({
  uri: API_URI,
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["Z"] = ((0,next_apollo__WEBPACK_IMPORTED_MODULE_0__.withApollo)(apolloClient));

/***/ }),

/***/ 4733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ct": function() { return /* binding */ currentDemo; },
/* harmony export */   "tT": function() { return /* binding */ GET_PRODUCTS; },
/* harmony export */   "N4": function() { return /* binding */ GET_PRODUCT; },
/* harmony export */   "EP": function() { return /* binding */ GET_SHOP_SIDEBAR_DATA; },
/* harmony export */   "p$": function() { return /* binding */ GET_POSTS; },
/* harmony export */   "QI": function() { return /* binding */ GET_POST; },
/* harmony export */   "oG": function() { return /* binding */ GET_POST_SIDEBAR_DATA; },
/* harmony export */   "vP": function() { return /* binding */ GET_HOME_DATA; }
/* harmony export */ });
/* unused harmony exports GET_SPECIAL_PRODUCTS, GET_VIDEO */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9875);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const currentDemo = `"8"`;
const PRODUCT_SIMPLE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    fragment ProductSimple on Product {
        name
        slug
        price
        ratings
        reviews
        stock
        short_description
        is_featured
        is_new
        until
        discount
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        categories {
            name
            slug
        }
        variants {
            price
            sale_price
        }
    }
`;
const PRODUCT_SMALL = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    fragment ProductSmall on Product {
        id
        name
        slug
        price
        ratings
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        variants {
            price
            sale_price
        }
    }
`;
const GET_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query products($search: String, $colors: [String], $sizes: [String], $brands: [String], $min_price: Int, $max_price: Int, $category: String, $tag: String, $sortBy: String, $from: Int, $to: Int, $list: Boolean = false) {
        products(demo: ${currentDemo}, search: $search, colors: $colors, sizes: $sizes, brands: $brands, min_price: $min_price, max_price: $max_price, category: $category, tag: $tag, sortBy: $sortBy, from: $from, to: $to ) {
            data {
                short_description @include(if: $list)
                ...ProductSimple

            }
            total
        }
    }
    ${PRODUCT_SIMPLE}
`;
const GET_SPECIAL_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query specialProducts($featured: Boolean = false, $bestSelling: Boolean = false, $topRated: Boolean = false, $onSale: Boolean = false, $count: Int) {
        specialProducts(demo: ${currentDemo}, featured: $featured, bestSelling: $bestSelling, topRated: $topRated, onSale: $onSale, count: $count) {
            featured @include(if: $featured) {
                ...ProductSmall
            }
            bestSelling @include(if: $bestSelling) {
                ...ProductSmall
            }
            topRated @include(if: $topRated) {
                ...ProductSmall
            }
            latest @include(if: $latest) {
                ...ProductSmall
            }
        }
    }
    ${PRODUCT_SMALL}
`;
const GET_PRODUCT = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query product($slug: String!, $onlyData: Boolean = false) {
        product(demo: ${currentDemo}, slug: $slug, onlyData: $onlyData) {
            data {
                id
                slug
                name
                price
                discount
                short_description
                sku
                stock
                ratings
                reviews
                sale_count
                is_new
                is_top
                until
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                }
                large_pictures {
                    url
                    width
                    height
                }
                categories {
                    name
                    slug
                }
                tags {
                    name
                    slug
                }
                brands {
                    name
                    slug
                }
                variants {
                    price
                    sale_price
                    color {
                        name
                        color
                        thumb {
                            url
                            width
                            height
                        }
                    }
                    size {
                        name
                        size
                        thumb {
                            url
                            width
                            height
                        }
                    }
                }
            }
            prev @skip(if: $onlyData) {
                slug
                name
                pictures {
                    url
                    width
                    height
                }
            }
            next @skip(if: $onlyData) {
                slug
                name
                pictures {
                    url
                    width
                    height
                }
            }
            related @skip(if: $onlyData) {
                ...ProductSimple
            }
        }
    }
    ${PRODUCT_SIMPLE}
`;
const GET_VIDEO = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query video($slug: String!) {
        video(demo: ${currentDemo}, slug: $slug) {
            data {
                url
                width
                height
            }
        }
    }
`;
const GET_SHOP_SIDEBAR_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query shopSidebarData($featured: Boolean = false) {
        shopSidebarData(demo: ${currentDemo}, featured: $featured) {
            categories {
                name
                slug
                children {
                    name
                    slug
                }
            }
            featured @include(if: $featured) {
                slug
                name
                price
                ratings
                reviews
                pictures {
                    url
                    width
                    height
                }
                variants {
                    price
                }
            }
        }
    }
`;
const GET_POSTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query posts($category: String, $from: Int, $to: Int, $categories: [String]) {
        posts(demo: ${currentDemo}, category: $category, from: $from, to: $to, categories: $categories ) {
            data {
                title
                slug
                date
                comments
                content
                type
                author
                large_picture {
                    url
                    width
                    height
                }
                picture {
                    url
                    width
                    height
                }
                small_picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
            }
            total
        }
    }
`;
const GET_POST = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query post($slug: String!) {
        post(demo: ${currentDemo}, slug: $slug) {
            data {
                title
                slug
                author
                date
                comments
                content
                type
                large_picture {
                    url
                    width
                    height
                }
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
                categories {
                    name
                    slug
                }
            }
            related {
                title
                slug
                date
                type
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
            }
        }
    }
`;
const GET_POST_SIDEBAR_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query postSidbarData {
        postSidebarData(demo: ${currentDemo}) {
            categories {
                name
                slug
            }
            recent {
                title
                slug
                date
                small_picture {
                    url
                    width
                    height
                }
            }
        }
    }
`;
const GET_HOME_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query indexData($productsCount: Int, $postsCount: Int) {
        specialProducts(demo: ${currentDemo}, featured: true, bestSelling: true, topRated: true, latest: true, onSale: true, count: $productsCount) {
            featured {
                ...ProductSimple
            }
            bestSelling {
                ...ProductSimple
            }
            topRated {
                ...ProductSimple
            }
            latest {
                ...ProductSimple
            }
            onSale {
                ...ProductSimple
            }
        }
        posts(demo: ${currentDemo}, to: $postsCount) {
            data {
                title
                slug
                date
                type
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
                large_picture {
                    url
                    width
                    height
                }
            }
        }
    }
    ${PRODUCT_SIMPLE}
`;

/***/ })

};
;