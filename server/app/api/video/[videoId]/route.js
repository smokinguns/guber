"use strict";
(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 32196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 16478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "handlers": () => (/* reexport */ route_namespaceObject),
  "headerHooks": () => (/* reexport */ headers),
  "requestAsyncStorage": () => (/* reexport */ request_async_storage.requestAsyncStorage),
  "resolvedPagePath": () => (/* binding */ resolvedPagePath),
  "serverHooks": () => (/* reexport */ hooks_server_context),
  "staticGenerationAsyncStorage": () => (/* reexport */ static_generation_async_storage.staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* reexport */ static_generation_bailout.staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/video/[videoId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(57376);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(70139);
// EXTERNAL MODULE: ./src/logger.ts
var logger = __webpack_require__(4112);
;// CONCATENATED MODULE: ./src/app/api/video/[videoId]/route.ts


async function GET(request, { params  }) {
    console.log(logger/* logger.log */.k.log());
    switch(params.videoId){
        case "xUQV6x0Hm2o":
            return server.NextResponse.json({
                "videoId": "xUQV6x0Hm2o",
                "title": "MR Tabs Paradise City",
                "section": [
                    {
                        "title": "intro",
                        "start": 50,
                        "end": 80
                    },
                    {
                        "title": "chrous",
                        "start": 88,
                        "end": 95
                    }
                ]
            });
    }
    return server.NextResponse.json({
        "title": "not found"
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/client/components/static-generation-async-storage.js
var static_generation_async_storage = __webpack_require__(79029);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/hooks-server-context.js
var hooks_server_context = __webpack_require__(94065);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/static-generation-bailout.js
var static_generation_bailout = __webpack_require__(40224);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/headers.js
var headers = __webpack_require__(5153);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/request-async-storage.js
var request_async_storage = __webpack_require__(32458);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvideo%2F%5BvideoId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fvideo%2F%5BvideoId%5D%2Froute.ts&appDir=%2Fhome%2Frunner%2Fwork%2Fguber%2Fguber%2Fsrc%2Fapp&appPaths=%2Fapi%2Fvideo%2F%5BvideoId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=!

    

    
    const resolvedPagePath = "/home/runner/work/guber/guber/src/app/api/video/[videoId]/route.ts"

    
  
    
    
    
    
    
  
    
  

/***/ }),

/***/ 4112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15279);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_0__);


const logger = {
    log: ()=>{
        console.log((0,next_headers__WEBPACK_IMPORTED_MODULE_0__.headers)().get("x-request-id"));
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [359,153,302], () => (__webpack_exec__(16478)));
module.exports = __webpack_exports__;

})();