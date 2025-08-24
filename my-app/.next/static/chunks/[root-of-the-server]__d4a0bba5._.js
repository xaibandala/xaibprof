(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/geist_a71539c9.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_a71539c9-module__T19VSG__className",
  "variable": "geist_a71539c9-module__T19VSG__variable",
});
}),
"[next]/internal/font/google/geist_a71539c9.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_a71539c9.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_8d43a2aa.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_8d43a2aa-module__8Li5zG__className",
  "variable": "geist_mono_8d43a2aa-module__8Li5zG__variable",
});
}),
"[next]/internal/font/google/geist_mono_8d43a2aa.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_8d43a2aa.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/my-app/components/ClickSpark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ClickSpark = (param)=>{
    let { sparkColor = "#fff", sparkSize = 10, sparkRadius = 15, sparkCount = 8, duration = 400, easing = "ease-out", extraScale = 1.0, children, className } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sparksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClickSpark.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const parent = canvas.parentElement;
            if (!parent) return;
            let resizeTimeout;
            const resizeCanvas = {
                "ClickSpark.useEffect.resizeCanvas": ()=>{
                    const { width, height } = parent.getBoundingClientRect();
                    if (canvas.width !== width || canvas.height !== height) {
                        canvas.width = width;
                        canvas.height = height;
                    }
                }
            }["ClickSpark.useEffect.resizeCanvas"];
            const handleResize = {
                "ClickSpark.useEffect.handleResize": ()=>{
                    if (resizeTimeout) window.clearTimeout(resizeTimeout);
                    resizeTimeout = window.setTimeout(resizeCanvas, 100);
                }
            }["ClickSpark.useEffect.handleResize"];
            const ro = new ResizeObserver(handleResize);
            ro.observe(parent);
            resizeCanvas();
            return ({
                "ClickSpark.useEffect": ()=>{
                    ro.disconnect();
                    if (resizeTimeout) window.clearTimeout(resizeTimeout);
                }
            })["ClickSpark.useEffect"];
        }
    }["ClickSpark.useEffect"], []);
    const easeFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClickSpark.useCallback[easeFunc]": (t)=>{
            switch(easing){
                case "linear":
                    return t;
                case "ease-in":
                    return t * t;
                case "ease-in-out":
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:
                    return t * (2 - t);
            }
        }
    }["ClickSpark.useCallback[easeFunc]"], [
        easing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClickSpark.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationId = 0;
            const draw = {
                "ClickSpark.useEffect.draw": (timestamp)=>{
                    if (!startTimeRef.current) {
                        startTimeRef.current = timestamp;
                    }
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    sparksRef.current = sparksRef.current.filter({
                        "ClickSpark.useEffect.draw": (spark)=>{
                            const elapsed = timestamp - spark.startTime;
                            if (elapsed >= duration) {
                                return false;
                            }
                            const progress = elapsed / duration;
                            const eased = easeFunc(progress);
                            const distance = eased * sparkRadius * extraScale;
                            const lineLength = sparkSize * (1 - eased);
                            const x1 = spark.x + distance * Math.cos(spark.angle);
                            const y1 = spark.y + distance * Math.sin(spark.angle);
                            const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                            const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
                            ctx.strokeStyle = sparkColor;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.stroke();
                            return true;
                        }
                    }["ClickSpark.useEffect.draw"]);
                    animationId = requestAnimationFrame(draw);
                }
            }["ClickSpark.useEffect.draw"];
            animationId = requestAnimationFrame(draw);
            return ({
                "ClickSpark.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                }
            })["ClickSpark.useEffect"];
        }
    }["ClickSpark.useEffect"], [
        sparkColor,
        sparkSize,
        sparkRadius,
        sparkCount,
        duration,
        easeFunc,
        extraScale
    ]);
    const handleClick = (e)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const now = performance.now();
        const newSparks = Array.from({
            length: sparkCount
        }, (_, i)=>({
                x,
                y,
                angle: 2 * Math.PI * i / sparkCount,
                startTime: now
            }));
        sparksRef.current.push(...newSparks);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: "relative",
            width: "100%",
            height: "100%"
        },
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    width: "100%",
                    height: "100%",
                    display: "block",
                    userSelect: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/my-app/components/ClickSpark.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/components/ClickSpark.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ClickSpark, "Co5ZLok9jWEvDtYfE8EPujoRllo=");
_c = ClickSpark;
const __TURBOPACK__default__export__ = ClickSpark;
var _c;
__turbopack_context__.k.register(_c, "ClickSpark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/components/SiteNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ClickSpark.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SiteNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "Certificates",
            href: "/certificates"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ];
    // Close menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNav.useEffect": ()=>{
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        }
    }["SiteNav.useEffect"], [
        pathname
    ]);
    // Prevent scrolling when menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNav.useEffect": ()=>{
            if (isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return ({
                "SiteNav.useEffect": ()=>{
                    document.body.style.overflow = 'auto';
                }
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], [
        isMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between py-3 sm:py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "font-semibold tracking-tight text-white",
                                children: "MyPortfolio"
                            }, void 0, false, {
                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-6",
                                children: navItems.map((item)=>{
                                    const isActive = (pathname || "/") === item.href;
                                    const linkClass = isActive ? "text-white" : "text-white/70 hover:text-white transition-colors";
                                    const underlineClass = isActive ? "w-full" : "w-0 group-hover:w-full";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative group inline-flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: linkClass,
                                                "aria-current": isActive ? "page" : undefined,
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-white/80 ".concat(underlineClass, " transition-[width] duration-300 ease-out")
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/my-app/components/SiteNav.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    className: "relative z-50 p-2 text-white",
                                    "aria-label": "Toggle menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 flex flex-col justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ".concat(isMenuOpen ? 'rotate-45 translate-y-2.5' : '')
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ".concat(isMenuOpen ? 'opacity-0' : '')
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ".concat(isMenuOpen ? '-rotate-45 -translate-y-2.5' : '')
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/components/SiteNav.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/SiteNav.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/components/SiteNav.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/components/SiteNav.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/components/SiteNav.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/components/SiteNav.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden fixed inset-0 z-40 bg-black/85 backdrop-blur-xl transition-all duration-300 ease-in-out ".concat(isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center h-screen gap-10 px-6",
                    children: navItems.map((item, index)=>{
                        const isActive = (pathname || "/") === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "block text-3xl font-semibold transition-colors duration-200 whitespace-nowrap ".concat(isActive ? 'text-white' : 'text-white/75 hover:text-white'),
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/SiteNav.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-0.5 bg-white/70 mx-auto mt-3"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/SiteNav.tsx",
                                    lineNumber: 111,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/my-app/components/SiteNav.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/my-app/components/SiteNav.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/components/SiteNav.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/components/SiteNav.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(SiteNav, "tm0lf2hP1Te6dXxCD/3Y7R4gpIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteNav;
var _c;
__turbopack_context__.k.register(_c, "SiteNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/components/Threads.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Threads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const vertexShader = "\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n";
const fragmentShader = "\nprecision highp float;\n\nuniform float iTime;\nuniform vec3 iResolution;\nuniform vec3 uColor;\nuniform float uAmplitude;\nuniform float uDistance;\nuniform vec2 uMouse;\n\n#define PI 3.1415926538\n\nconst int u_line_count = 40;\nconst float u_line_width = 7.0;\nconst float u_line_blur = 10.0;\n\nfloat Perlin2D(vec2 P) {\n    vec2 Pi = floor(P);\n    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);\n    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);\n    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;\n    Pt += vec2(26.0, 161.0).xyxy;\n    Pt *= Pt;\n    Pt = Pt.xzxz * Pt.yyww;\n    vec4 hash_x = fract(Pt * (1.0 / 951.135664));\n    vec4 hash_y = fract(Pt * (1.0 / 642.949883));\n    vec4 grad_x = hash_x - 0.49999;\n    vec4 grad_y = hash_y - 0.49999;\n    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)\n        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);\n    grad_results *= 1.4142135623730950;\n    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy\n               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);\n    vec4 blend2 = vec4(blend, vec2(1.0 - blend));\n    return dot(grad_results, blend2.zxzx * blend2.wwyy);\n}\n\nfloat pixel(float count, vec2 resolution) {\n    return (1.0 / max(resolution.x, resolution.y)) * count;\n}\n\nfloat lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {\n    float split_offset = (perc * 0.4);\n    float split_point = 0.1 + split_offset;\n\n    float amplitude_normal = smoothstep(split_point, 0.7, st.x);\n    float amplitude_strength = 0.5;\n    float finalAmplitude = amplitude_normal * amplitude_strength\n                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);\n\n    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;\n    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;\n\n    float xnoise = mix(\n        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),\n        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,\n        st.x * 0.3\n    );\n\n    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;\n\n    float line_start = smoothstep(\n        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),\n        y,\n        st.y\n    );\n\n    float line_end = smoothstep(\n        y,\n        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),\n        st.y\n    );\n\n    return clamp(\n        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),\n        0.0,\n        1.0\n    );\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\n    vec2 uv = fragCoord / iResolution.xy;\n\n    float line_strength = 1.0;\n    for (int i = 0; i < u_line_count; i++) {\n        float p = float(i) / float(u_line_count);\n        line_strength *= (1.0 - lineFn(\n            uv,\n            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),\n            p,\n            (PI * 1.0) * p,\n            uMouse,\n            iTime,\n            uAmplitude,\n            uDistance\n        ));\n    }\n\n    float colorVal = 1.0 - line_strength;\n    fragColor = vec4(uColor * colorVal, colorVal);\n}\n\nvoid main() {\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n";
function Threads(param) {
    let { baseColor = [
        1,
        1,
        1
    ], amplitude = 1, distance = 0, enableMouseInteraction = false, ...rest } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Threads.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: true
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            container.appendChild(gl.canvas);
            // Make canvas non-blocking for pointer events to keep UX
            Object.assign(gl.canvas.style, {
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
                pointerEvents: "none"
            });
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
                    },
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](...baseColor)
                    },
                    uAmplitude: {
                        value: amplitude
                    },
                    uDistance: {
                        value: distance
                    },
                    uMouse: {
                        value: new Float32Array([
                            0.5,
                            0.5
                        ])
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            function resize() {
                const { clientWidth, clientHeight } = container;
                renderer.setSize(clientWidth, clientHeight);
                program.uniforms.iResolution.value.r = clientWidth;
                program.uniforms.iResolution.value.g = clientHeight;
                program.uniforms.iResolution.value.b = clientWidth / Math.max(1, clientHeight);
            }
            window.addEventListener("resize", resize);
            resize();
            let currentMouse = [
                0.5,
                0.5
            ];
            let targetMouse = [
                0.5,
                0.5
            ];
            function handleMouseMove(e) {
                const rect = container.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = 1.0 - (e.clientY - rect.top) / rect.height;
                targetMouse = [
                    x,
                    y
                ];
            }
            function handleMouseLeave() {
                targetMouse = [
                    0.5,
                    0.5
                ];
            }
            if (enableMouseInteraction) {
                // Listen on window so clicks pass through (canvas has pointer-events none)
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseleave", handleMouseLeave);
            }
            function update(t) {
                if (enableMouseInteraction) {
                    const smoothing = 0.05;
                    currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
                    currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
                    program.uniforms.uMouse.value[0] = currentMouse[0];
                    program.uniforms.uMouse.value[1] = currentMouse[1];
                } else {
                    program.uniforms.uMouse.value[0] = 0.5;
                    program.uniforms.uMouse.value[1] = 0.5;
                }
                program.uniforms.iTime.value = t * 0.001;
                renderer.render({
                    scene: mesh
                });
                animationFrameId.current = requestAnimationFrame(update);
            }
            animationFrameId.current = requestAnimationFrame(update);
            return ({
                "Threads.useEffect": ()=>{
                    var _gl_getExtension;
                    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
                    window.removeEventListener("resize", resize);
                    if (enableMouseInteraction) {
                        window.removeEventListener("mousemove", handleMouseMove);
                        window.removeEventListener("mouseleave", handleMouseLeave);
                    }
                    if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
                    (_gl_getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl_getExtension === void 0 ? void 0 : _gl_getExtension.loseContext();
                }
            })["Threads.useEffect"];
        }
    }["Threads.useEffect"], [
        baseColor,
        amplitude,
        distance,
        enableMouseInteraction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "threads-container",
        ...rest
    }, void 0, false, {
        fileName: "[project]/my-app/components/Threads.tsx",
        lineNumber: 242,
        columnNumber: 10
    }, this);
}
_s(Threads, "ajEYVWde01g5rLH4HHi9cEXT1ag=");
_c = Threads;
var _c;
__turbopack_context__.k.register(_c, "Threads");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_a71539c9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_8d43a2aa.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SiteNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/SiteNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$Threads$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/Threads.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout(param) {
    let { children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const showThreads = pathname !== "/contact"; // hide threads on contact page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " ").concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " antialiased"),
            children: [
                showThreads && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 -z-10 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '100%',
                            position: 'relative'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$Threads$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            amplitude: 1,
                            distance: 0,
                            enableMouseInteraction: true
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/layout.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/layout.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/app/layout.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SiteNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/my-app/app/layout.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-16 sm:pt-20",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/my-app/app/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/layout.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/layout.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(RootLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d4a0bba5._.js.map