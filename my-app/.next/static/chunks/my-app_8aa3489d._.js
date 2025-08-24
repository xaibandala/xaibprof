(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-app/components/SplitText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// SplitText is a paid GSAP plugin. We'll try to load it if available.
let SplitTextPlugin = null;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    SplitTextPlugin = __turbopack_context__.r("[project]/my-app/node_modules/gsap/SplitText.js [app-client] (ecmascript)").SplitText || __turbopack_context__.r("[project]/my-app/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
    if (SplitTextPlugin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(SplitTextPlugin);
    }
} catch (e) {
// Plugin not available; component will gracefully degrade without animation.
}
// Register ScrollTrigger (free plugin, safe to import)
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SplitText = (param)=>{
    let { text, className = "", delay = 100, duration = 0.6, ease = "power3.out", splitType = "chars", from = {
        opacity: 0,
        y: 40
    }, to = {
        opacity: 1,
        y: 0
    }, threshold = 0.1, rootMargin = "-100px", textAlign = "center", onLetterAnimationComplete } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationCompletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitText.useEffect": ()=>{
            if ("object" === "undefined" || !ref.current || !text) return;
            const el = ref.current;
            animationCompletedRef.current = false;
            const absoluteLines = splitType === "lines";
            if (absoluteLines) el.style.position = "relative";
            let splitter;
            try {
                if (!SplitTextPlugin) {
                    var _to_opacity, _to_y;
                    // If plugin missing, simply set final state and exit.
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                        opacity: (_to_opacity = to === null || to === void 0 ? void 0 : to.opacity) !== null && _to_opacity !== void 0 ? _to_opacity : 1,
                        y: (_to_y = to === null || to === void 0 ? void 0 : to.y) !== null && _to_y !== void 0 ? _to_y : 0
                    });
                    return;
                }
                // eslint-disable-next-line new-cap
                splitter = new SplitTextPlugin(el, {
                    type: splitType,
                    absolute: absoluteLines,
                    linesClass: "split-line"
                });
            } catch (error) {
                console.error("Failed to create SplitText:", error);
                return;
            }
            let targets = [];
            switch(splitType){
                case "lines":
                    targets = splitter.lines;
                    break;
                case "words":
                    targets = splitter.words;
                    break;
                case "chars":
                default:
                    targets = splitter.chars;
                    break;
            }
            if (!targets || targets.length === 0) {
                console.warn("No targets found for SplitText animation");
                splitter.revert();
                return;
            }
            targets.forEach({
                "SplitText.useEffect": (t)=>{
                    t.style.willChange = "transform, opacity";
                }
            }["SplitText.useEffect"]);
            // Build ScrollTrigger start value based on threshold and rootMargin
            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(\-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
            const sign = marginValue < 0 ? "-=".concat(Math.abs(marginValue)).concat(marginUnit) : "+=".concat(marginValue).concat(marginUnit);
            const start = "top ".concat(startPct, "%").concat(sign);
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: "play none none none",
                    once: true,
                    onToggle: {
                        "SplitText.useEffect.tl": (self)=>{
                            scrollTriggerRef.current = self;
                        }
                    }["SplitText.useEffect.tl"]
                },
                smoothChildTiming: true,
                onComplete: {
                    "SplitText.useEffect.tl": ()=>{
                        animationCompletedRef.current = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(targets, {
                            ...to,
                            clearProps: "willChange",
                            immediateRender: true
                        });
                        onLetterAnimationComplete === null || onLetterAnimationComplete === void 0 ? void 0 : onLetterAnimationComplete();
                    }
                }["SplitText.useEffect.tl"]
            });
            tl.set(targets, {
                ...from,
                immediateRender: false,
                force3D: true
            });
            tl.to(targets, {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                force3D: true
            });
            return ({
                "SplitText.useEffect": ()=>{
                    tl.kill();
                    if (scrollTriggerRef.current) {
                        scrollTriggerRef.current.kill();
                        scrollTriggerRef.current = null;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(targets);
                    try {
                        splitter && splitter.revert && splitter.revert();
                    } catch (e) {}
                }
            })["SplitText.useEffect"];
        }
    }["SplitText.useEffect"], [
        text,
        delay,
        duration,
        ease,
        splitType,
        from,
        to,
        threshold,
        rootMargin,
        onLetterAnimationComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: "split-parent overflow-hidden inline-block whitespace-normal ".concat(className),
        style: {
            textAlign,
            wordWrap: "break-word"
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/my-app/components/SplitText.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SplitText, "z+8PvH38x2DFvRkTFgxn++ukmGA=");
_c = SplitText;
const __TURBOPACK__default__export__ = SplitText;
var _c;
__turbopack_context__.k.register(_c, "SplitText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/components/AnimatedContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const AnimatedContent = (param)=>{
    let { children, distance = 100, direction = "vertical", reverse = false, duration = 1.4, ease = "power3.out", initialOpacity = 0, animateOpacity = true, scale = 1, threshold = 0.1, delay = 0, onComplete, className } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedContent.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const axis = direction === "horizontal" ? "x" : "y";
            const offset = reverse ? -distance : distance;
            const startPct = (1 - Math.min(Math.max(threshold, 0), 1)) * 100;
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                [axis]: offset,
                scale,
                opacity: animateOpacity ? initialOpacity : 1
            });
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                [axis]: 0,
                scale: 1,
                opacity: 1,
                duration,
                ease,
                delay,
                onComplete,
                scrollTrigger: {
                    trigger: el,
                    start: "top ".concat(startPct, "%"),
                    toggleActions: "play none none none",
                    once: true
                }
            });
            return ({
                "AnimatedContent.useEffect": ()=>{
                    var _tween_scrollTrigger;
                    (_tween_scrollTrigger = tween.scrollTrigger) === null || _tween_scrollTrigger === void 0 ? void 0 : _tween_scrollTrigger.kill();
                    tween.kill();
                }
            })["AnimatedContent.useEffect"];
        }
    }["AnimatedContent.useEffect"], [
        distance,
        direction,
        reverse,
        duration,
        ease,
        initialOpacity,
        animateOpacity,
        scale,
        threshold,
        delay,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/my-app/components/AnimatedContent.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedContent, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = AnimatedContent;
const __TURBOPACK__default__export__ = AnimatedContent;
var _c;
__turbopack_context__.k.register(_c, "AnimatedContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/components/TargetCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TargetCursor = (param)=>{
    let { targetSelector = ".cursor-target", spinDuration = 2, hideDefaultCursor = true } = param;
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cornersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const constants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TargetCursor.useMemo[constants]": ()=>({
                borderWidth: 3,
                cornerSize: 12,
                parallaxStrength: 0.00005
            })
    }["TargetCursor.useMemo[constants]"], []);
    const moveCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TargetCursor.useCallback[moveCursor]": (x, y)=>{
            if (!cursorRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                x,
                y,
                duration: 0.1,
                ease: "power3.out"
            });
        }
    }["TargetCursor.useCallback[moveCursor]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TargetCursor.useEffect": ()=>{
            if (!cursorRef.current) return;
            const originalCursor = document.body.style.cursor;
            if (hideDefaultCursor) {
                document.body.style.cursor = "none";
            }
            const cursor = cursorRef.current;
            cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");
            let activeTarget = null;
            let currentTargetMove = null;
            let currentLeaveHandler = null;
            let isAnimatingToTarget = false;
            let resumeTimeout = null;
            const cleanupTarget = {
                "TargetCursor.useEffect.cleanupTarget": (target)=>{
                    if (currentTargetMove) {
                        target.removeEventListener("mousemove", currentTargetMove);
                    }
                    if (currentLeaveHandler) {
                        target.removeEventListener("mouseleave", currentLeaveHandler);
                    }
                    currentTargetMove = null;
                    currentLeaveHandler = null;
                }
            }["TargetCursor.useEffect.cleanupTarget"];
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursor, {
                xPercent: -50,
                yPercent: -50,
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            });
            const createSpinTimeline = {
                "TargetCursor.useEffect.createSpinTimeline": ()=>{
                    if (spinTl.current) {
                        spinTl.current.kill();
                    }
                    spinTl.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        repeat: -1
                    }).to(cursor, {
                        rotation: "+=360",
                        duration: spinDuration,
                        ease: "none"
                    });
                }
            }["TargetCursor.useEffect.createSpinTimeline"];
            createSpinTimeline();
            const moveHandler = {
                "TargetCursor.useEffect.moveHandler": (e)=>moveCursor(e.clientX, e.clientY)
            }["TargetCursor.useEffect.moveHandler"];
            window.addEventListener("mousemove", moveHandler);
            const scrollHandler = {
                "TargetCursor.useEffect.scrollHandler": ()=>{
                    if (!activeTarget || !cursorRef.current) return;
                    const mouseX = Number(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(cursorRef.current, "x"));
                    const mouseY = Number(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(cursorRef.current, "y"));
                    const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
                    const isStillOverTarget = elementUnderMouse && (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);
                    if (!isStillOverTarget) {
                        if (currentLeaveHandler) {
                            currentLeaveHandler();
                        }
                    }
                }
            }["TargetCursor.useEffect.scrollHandler"];
            window.addEventListener("scroll", scrollHandler, {
                passive: true
            });
            // Click scale animation
            const mouseDownHandler = {
                "TargetCursor.useEffect.mouseDownHandler": ()=>{
                    if (!dotRef.current || !cursorRef.current) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dotRef.current, {
                        scale: 0.7,
                        duration: 0.3
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                        scale: 0.9,
                        duration: 0.2
                    });
                }
            }["TargetCursor.useEffect.mouseDownHandler"];
            const mouseUpHandler = {
                "TargetCursor.useEffect.mouseUpHandler": ()=>{
                    if (!dotRef.current || !cursorRef.current) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dotRef.current, {
                        scale: 1,
                        duration: 0.3
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                        scale: 1,
                        duration: 0.2
                    });
                }
            }["TargetCursor.useEffect.mouseUpHandler"];
            window.addEventListener("mousedown", mouseDownHandler);
            window.addEventListener("mouseup", mouseUpHandler);
            const enterHandler = {
                "TargetCursor.useEffect.enterHandler": (e)=>{
                    var _spinTl_current;
                    const directTarget = e.target;
                    const allTargets = [];
                    let current = directTarget;
                    while(current && current !== document.body){
                        if (current.matches(targetSelector)) {
                            allTargets.push(current);
                        }
                        current = current.parentElement;
                    }
                    const target = allTargets[0] || null;
                    if (!target || !cursorRef.current || !cornersRef.current) return;
                    if (activeTarget === target) return;
                    if (activeTarget) {
                        cleanupTarget(activeTarget);
                    }
                    if (resumeTimeout) {
                        clearTimeout(resumeTimeout);
                        resumeTimeout = null;
                    }
                    activeTarget = target;
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(cursorRef.current, "rotation");
                    (_spinTl_current = spinTl.current) === null || _spinTl_current === void 0 ? void 0 : _spinTl_current.pause();
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                        rotation: 0
                    });
                    const updateCorners = {
                        "TargetCursor.useEffect.enterHandler.updateCorners": (mouseX, mouseY)=>{
                            const rect = target.getBoundingClientRect();
                            const cursorRect = cursorRef.current.getBoundingClientRect();
                            const cursorCenterX = cursorRect.left + cursorRect.width / 2;
                            const cursorCenterY = cursorRect.top + cursorRect.height / 2;
                            const [tlc, trc, brc, blc] = Array.from(cornersRef.current);
                            const { borderWidth, cornerSize, parallaxStrength } = constants;
                            let tlOffset = {
                                x: rect.left - cursorCenterX - borderWidth,
                                y: rect.top - cursorCenterY - borderWidth
                            };
                            let trOffset = {
                                x: rect.right - cursorCenterX + borderWidth - cornerSize,
                                y: rect.top - cursorCenterY - borderWidth
                            };
                            let brOffset = {
                                x: rect.right - cursorCenterX + borderWidth - cornerSize,
                                y: rect.bottom - cursorCenterY + borderWidth - cornerSize
                            };
                            let blOffset = {
                                x: rect.left - cursorCenterX - borderWidth,
                                y: rect.bottom - cursorCenterY + borderWidth - cornerSize
                            };
                            if (mouseX !== undefined && mouseY !== undefined) {
                                const targetCenterX = rect.left + rect.width / 2;
                                const targetCenterY = rect.top + rect.height / 2;
                                const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
                                const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;
                                tlOffset.x += mouseOffsetX;
                                tlOffset.y += mouseOffsetY;
                                trOffset.x += mouseOffsetX;
                                trOffset.y += mouseOffsetY;
                                brOffset.x += mouseOffsetX;
                                brOffset.y += mouseOffsetY;
                                blOffset.x += mouseOffsetX;
                                blOffset.y += mouseOffsetY;
                            }
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                            const corners = [
                                tlc,
                                trc,
                                brc,
                                blc
                            ];
                            const offsets = [
                                tlOffset,
                                trOffset,
                                brOffset,
                                blOffset
                            ];
                            corners.forEach({
                                "TargetCursor.useEffect.enterHandler.updateCorners": (corner, index)=>{
                                    tl.to(corner, {
                                        x: offsets[index].x,
                                        y: offsets[index].y,
                                        duration: 0.2,
                                        ease: "power2.out"
                                    }, 0);
                                }
                            }["TargetCursor.useEffect.enterHandler.updateCorners"]);
                        }
                    }["TargetCursor.useEffect.enterHandler.updateCorners"];
                    isAnimatingToTarget = true;
                    updateCorners();
                    setTimeout({
                        "TargetCursor.useEffect.enterHandler": ()=>{
                            isAnimatingToTarget = false;
                        }
                    }["TargetCursor.useEffect.enterHandler"], 1);
                    let moveThrottle = null;
                    const targetMove = {
                        "TargetCursor.useEffect.enterHandler.targetMove": (ev)=>{
                            if (moveThrottle || isAnimatingToTarget) return;
                            moveThrottle = requestAnimationFrame({
                                "TargetCursor.useEffect.enterHandler.targetMove": ()=>{
                                    const mouseEvent = ev;
                                    updateCorners(mouseEvent.clientX, mouseEvent.clientY);
                                    moveThrottle = null;
                                }
                            }["TargetCursor.useEffect.enterHandler.targetMove"]);
                        }
                    }["TargetCursor.useEffect.enterHandler.targetMove"];
                    const leaveHandler = {
                        "TargetCursor.useEffect.enterHandler.leaveHandler": ()=>{
                            activeTarget = null;
                            isAnimatingToTarget = false;
                            if (cornersRef.current) {
                                const corners = Array.from(cornersRef.current);
                                __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(corners);
                                const { cornerSize } = constants;
                                const positions = [
                                    {
                                        x: -cornerSize * 1.5,
                                        y: -cornerSize * 1.5
                                    },
                                    {
                                        x: cornerSize * 0.5,
                                        y: -cornerSize * 1.5
                                    },
                                    {
                                        x: cornerSize * 0.5,
                                        y: cornerSize * 0.5
                                    },
                                    {
                                        x: -cornerSize * 1.5,
                                        y: cornerSize * 0.5
                                    }
                                ];
                                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                                corners.forEach({
                                    "TargetCursor.useEffect.enterHandler.leaveHandler": (corner, index)=>{
                                        tl.to(corner, {
                                            x: positions[index].x,
                                            y: positions[index].y,
                                            duration: 0.3,
                                            ease: "power3.out"
                                        }, 0);
                                    }
                                }["TargetCursor.useEffect.enterHandler.leaveHandler"]);
                            }
                            resumeTimeout = window.setTimeout({
                                "TargetCursor.useEffect.enterHandler.leaveHandler": ()=>{
                                    if (!activeTarget && cursorRef.current && spinTl.current) {
                                        const currentRotation = Number(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(cursorRef.current, "rotation"));
                                        const normalizedRotation = currentRotation % 360;
                                        spinTl.current.kill();
                                        spinTl.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                            repeat: -1
                                        }).to(cursorRef.current, {
                                            rotation: "+=360",
                                            duration: spinDuration,
                                            ease: "none"
                                        });
                                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                                            rotation: normalizedRotation + 360,
                                            duration: spinDuration * (1 - normalizedRotation / 360),
                                            ease: "none",
                                            onComplete: {
                                                "TargetCursor.useEffect.enterHandler.leaveHandler": ()=>{
                                                    var _spinTl_current;
                                                    (_spinTl_current = spinTl.current) === null || _spinTl_current === void 0 ? void 0 : _spinTl_current.restart();
                                                }
                                            }["TargetCursor.useEffect.enterHandler.leaveHandler"]
                                        });
                                    }
                                    resumeTimeout = null;
                                }
                            }["TargetCursor.useEffect.enterHandler.leaveHandler"], 50);
                            cleanupTarget(target);
                        }
                    }["TargetCursor.useEffect.enterHandler.leaveHandler"];
                    currentTargetMove = targetMove;
                    currentLeaveHandler = leaveHandler;
                    target.addEventListener("mousemove", targetMove);
                    target.addEventListener("mouseleave", leaveHandler);
                }
            }["TargetCursor.useEffect.enterHandler"];
            window.addEventListener("mouseover", enterHandler, {
                passive: true
            });
            return ({
                "TargetCursor.useEffect": ()=>{
                    var _spinTl_current;
                    window.removeEventListener("mousemove", moveHandler);
                    window.removeEventListener("mouseover", enterHandler);
                    window.removeEventListener("scroll", scrollHandler);
                    if (activeTarget) {
                        cleanupTarget(activeTarget);
                    }
                    (_spinTl_current = spinTl.current) === null || _spinTl_current === void 0 ? void 0 : _spinTl_current.kill();
                    document.body.style.cursor = originalCursor;
                }
            })["TargetCursor.useEffect"];
        }
    }["TargetCursor.useEffect"], [
        targetSelector,
        spinDuration,
        moveCursor,
        constants,
        hideDefaultCursor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TargetCursor.useEffect": ()=>{
            if (!cursorRef.current || !spinTl.current) return;
            if (spinTl.current.isActive()) {
                spinTl.current.kill();
                spinTl.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                    repeat: -1
                }).to(cursorRef.current, {
                    rotation: "+=360",
                    duration: spinDuration,
                    ease: "none"
                });
            }
        }
    }["TargetCursor.useEffect"], [
        spinDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: "target-cursor-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "target-cursor-dot"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-tl"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-tr"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-br"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-bl"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/components/TargetCursor.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TargetCursor, "GYx0BFN0E5I3KTy9Yvi1M5bRuDY=");
_c = TargetCursor;
const __TURBOPACK__default__export__ = TargetCursor;
var _c;
__turbopack_context__.k.register(_c, "TargetCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/components/CircularText.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "circularText": "CircularText-module__PpuquG__circularText",
  "letter": "CircularText-module__PpuquG__letter",
});
}),
"[project]/my-app/components/CircularText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/my-app/components/CircularText.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const getRotationTransition = function(duration) {
    let loop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return {
        duration,
        easing: "linear",
        repeat: loop ? Infinity : 0
    };
};
const CircularText = (param)=>{
    let { text, spinDuration = 20, onHover = "speedUp", className = "" } = param;
    _s();
    const letters = Array.from(text);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircularText.useEffect": ()=>{
            const start = rotation.get();
            controls.start({
                rotate: start + 360,
                scale: 1,
                transition: {
                    rotate: getRotationTransition(spinDuration)
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CircularText.useEffect"], [
        spinDuration,
        text,
        onHover
    ]);
    const handleHoverStart = ()=>{
        const start = rotation.get();
        if (!onHover) return;
        let transitionConfig;
        let scaleVal = 1;
        switch(onHover){
            case "slowDown":
                transitionConfig = {
                    rotate: getRotationTransition(spinDuration * 2)
                };
                break;
            case "speedUp":
                transitionConfig = {
                    rotate: getRotationTransition(spinDuration / 4)
                };
                break;
            case "pause":
                transitionConfig = {
                    rotate: {
                        duration: 0.001,
                        repeat: 0
                    }
                };
                scaleVal = 1;
                break;
            case "goBonkers":
                transitionConfig = {
                    rotate: getRotationTransition(spinDuration / 20)
                };
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = {
                    rotate: getRotationTransition(spinDuration)
                };
        }
        controls.start({
            rotate: start + 360,
            scale: scaleVal,
            transition: transitionConfig
        });
    };
    const handleHoverEnd = ()=>{
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: {
                rotate: getRotationTransition(spinDuration)
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circularText, " ").concat(className),
        style: {
            rotate: rotation
        },
        initial: {
            rotate: 0
        },
        animate: controls,
        onMouseEnter: handleHoverStart,
        onMouseLeave: handleHoverEnd,
        children: letters.map((letter, i)=>{
            const rotationDeg = 360 / letters.length * i;
            const factor = Math.PI / letters.length;
            const x = factor * i;
            const y = factor * i;
            const transform = "rotateZ(".concat(rotationDeg, "deg) translate3d(").concat(x, "px, ").concat(y, "px, 0)");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].letter,
                style: {
                    transform,
                    WebkitTransform: transform
                },
                children: letter
            }, i, false, {
                fileName: "[project]/my-app/components/CircularText.tsx",
                lineNumber: 99,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/my-app/components/CircularText.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CircularText, "xbJChhEMd1e1Dy7CWTuS6TcG5K0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = CircularText;
const __TURBOPACK__default__export__ = CircularText;
var _c;
__turbopack_context__.k.register(_c, "CircularText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/SplitText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/AnimatedContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ClickSpark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$TargetCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/TargetCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/CircularText.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const handleAnimationComplete = ()=>{
        console.log("All letters have animated!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$TargetCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/my-app/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sparkColor: "#ffffff",
                sparkSize: 10,
                sparkRadius: 15,
                sparkCount: 10,
                duration: 450,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "relative z-10 px-6 sm:px-10 pb-24 sm:pb-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-6xl py-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "top",
                                className: "w-full flex flex-col items-center justify-center text-center relative",
                                style: {
                                    aspectRatio: "4 / 3"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 80,
                                        direction: "vertical",
                                        duration: 1.6,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: "Hello, Xai!",
                                            className: "mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center",
                                            delay: 160,
                                            duration: 1.2,
                                            ease: "power3.out",
                                            splitType: "chars",
                                            from: {
                                                opacity: 0,
                                                y: 40
                                            },
                                            to: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            threshold: 0.1,
                                            rootMargin: "-100px",
                                            textAlign: "center",
                                            onLetterAnimationComplete: handleAnimationComplete
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 40,
                                        direction: "vertical",
                                        duration: 1,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/",
                                                    target: "_blank",
                                                    "aria-label": "GitHub",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/10 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 cursor-target",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-5 w-5",
                                                        fill: "currentColor",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.78-1.34-1.78-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-app/app/page.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 103
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/",
                                                    target: "_blank",
                                                    "aria-label": "LinkedIn",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/10 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 cursor-target",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-5 w-5",
                                                        fill: "currentColor",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.97v5.69h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2.01 3.6 4.62v5.56z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-app/app/page.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 103
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:hello@example.com",
                                                    "aria-label": "Email",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/10 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 cursor-target",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-5 w-5",
                                                        fill: "currentColor",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 .5v.4l8 5.1 8-5.1v-.4H4zm16 2.3-8 5.1-8-5.1V19h16V7.8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-app/app/page.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 103
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 40,
                                        direction: "vertical",
                                        duration: 1,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/contact",
                                                className: "group inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm ring-1 ring-white/10 shadow transition hover:bg-white/10 hover:-translate-y-0.5 cursor-target",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Let’s work together"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block transition group-hover:translate-x-0.5",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-app/app/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#about-bottom",
                                        "aria-label": "Scroll to About Me bottom",
                                        className: "absolute left-3 bottom-3 cursor-target hidden sm:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: "SCROLL•DOWN•",
                                            onHover: "speedUp",
                                            spinDuration: 20,
                                            className: "scale-50 sm:scale-75 opacity-90 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "tech",
                                className: "w-full mt-12 mb-12 sm:mb-20 flex flex-col items-center justify-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 60,
                                        direction: "vertical",
                                        duration: 1.2,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                text: "Tech Stack",
                                                className: "text-2xl sm:text-3xl font-semibold tracking-tight",
                                                delay: 120,
                                                duration: 1,
                                                ease: "power3.out",
                                                splitType: "chars",
                                                from: {
                                                    opacity: 0,
                                                    y: 24
                                                },
                                                to: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                threshold: 0.1,
                                                rootMargin: "-100px",
                                                textAlign: "center"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-white/70",
                                                children: "Tools and technologies I use"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 40,
                                        direction: "vertical",
                                        duration: 1.2,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-wrap justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2 cursor-target",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#E44D26",
                                                                        d: "M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 124
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#F16529",
                                                                        d: "M50.093 92.344V7.39h36.048l-6.88 76.811"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 200
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#EBEBEB",
                                                                        d: "M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 266
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        d: "M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 420
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "HTML"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2 cursor-target",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#264DE4",
                                                                        d: "m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 126
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#2965F1",
                                                                        d: "m79.265 84.26 6.864-76.9H50.087v84.988z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 203
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#EBEBEB",
                                                                        d: "m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 269
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        d: "m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 462
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "CSS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2 cursor-target",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                viewBox: "0 0 48 48",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#ffd600",
                                                                        d: "M6,42V6h36v36H6z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#000001",
                                                                        d: "M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "JavaScript"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2 cursor-target",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#06B6D4",
                                                                    d: "M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-app/app/page.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 126
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "Tailwind CSS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2 cursor-target",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 101 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#61DAFB",
                                                                        d: "M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 124
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        stroke: "#61DAFB",
                                                                        strokeWidth: "5",
                                                                        d: "M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 219
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        stroke: "#61DAFB",
                                                                        strokeWidth: "5",
                                                                        d: "M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 397
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        stroke: "#61DAFB",
                                                                        strokeWidth: "5",
                                                                        d: "M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 591
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "React"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2 cursor-target",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#6E81B6",
                                                                        fillRule: "evenodd",
                                                                        d: "M50 75.677c27.614 0 50-11.345 50-25.338S77.614 25 50 25 0 36.345 0 50.339s22.386 25.338 50 25.338",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 124
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        fillRule: "evenodd",
                                                                        d: "m60.133 58.528 2.48-12.764c.56-2.881.095-5.03-1.383-6.388-1.43-1.314-3.86-1.953-7.426-1.953H49.51l1.228-6.324a.814.814 0 0 0-.797-.969h-5.928a.81.81 0 0 0-.798.659l-2.634 13.55c-.24-1.524-.83-2.835-1.774-3.916-1.74-1.99-4.49-3-8.176-3H19.14a.81.81 0 0 0-.798.658l-5.33 27.43a.81.81 0 0 0 .798.968h5.974c.39 0 .724-.276.798-.66l1.29-6.634h4.447c2.334 0 4.295-.252 5.826-.75 1.566-.51 3.006-1.373 4.276-2.562a13.1 13.1 0 0 0 2.526-3.136l-1.065 5.48a.81.81 0 0 0 .798.968h5.929a.814.814 0 0 0 .798-.658l2.925-15.056H52.4c1.734 0 2.242.345 2.38.493.125.135.385.612.093 2.116l-2.358 12.136a.815.815 0 0 0 .798.968h6.023a.81.81 0 0 0 .797-.656M32.65 47.981c-.373 1.914-1.074 3.279-2.086 4.057-1.028.793-2.672 1.194-4.887 1.194h-2.648l1.915-9.854h3.424c2.515 0 3.528.538 3.935.988.565.625.684 1.876.347 3.615m52.455-7.558c-1.738-1.99-4.489-3-8.175-3H65.44a.81.81 0 0 0-.798.658l-5.33 27.43a.814.814 0 0 0 .797.968h5.975c.39 0 .724-.276.798-.66l1.29-6.634h4.448c2.334 0 4.294-.252 5.825-.75 1.566-.51 3.007-1.373 4.276-2.562a13.1 13.1 0 0 0 2.59-3.247 13.2 13.2 0 0 0 1.41-3.915c.68-3.495.136-6.283-1.616-8.288m-5.817 7.558c-.373 1.914-1.074 3.279-2.085 4.057-1.029.793-2.672 1.194-4.887 1.194h-2.648l1.914-9.854h3.424c2.516 0 3.529.538 3.936.988.563.625.683 1.876.346 3.615",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 286
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#000",
                                                                        fillRule: "evenodd",
                                                                        d: "M28.197 42.565q3.405 0 4.54 1.257 1.133 1.258.54 4.315-.621 3.184-2.388 4.546-1.77 1.362-5.382 1.362H21.87l2.232-11.48zm-14.558 23.1h5.974l1.418-7.291h5.118q3.387 0 5.575-.713 2.187-.712 3.977-2.386a12.2 12.2 0 0 0 2.432-3.045q.93-1.665 1.32-3.674.949-4.877-1.43-7.598-2.377-2.721-7.563-2.721H18.97zm30.201-34.72h5.929l-1.418 7.293h5.282q4.984 0 6.... 876 1.738t1.135 5.634l-2.48 12.765h-6.022L55.5 46.237q.403-2.072-.297-2.825t-2.974-.753h-4.738l-3.054 15.715H38.51zm30.994 11.621q3.405 0 4.54 1.257 1.133 1.258.54 4.315-.619 3.184-2.388 4.546t-5.38 1.362H68.51l2.23-11.48zm-14.56 23.1h5.976l1.417-7.291h5.118q3.389 0 5.576-.713 2.187-.712 3.977-2.386a12.2 12.2 0 0 0 2.43-3.045q.93-1.665 1.322-3.674.948-4.877-1.43-7.598-2.377-2.721-7.563-2.721h-11.49z",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 1614
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "PHP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#00546B",
                                                                    d: "M92.11 77.066c-5.44-.137-9.657.415-13.194 1.934-1.02.413-2.653.414-2.789 1.726.544.552.612 1.45 1.089 2.209.817 1.38 2.244 3.245 3.536 4.212 1.428 1.104 2.857 2.208 4.353 3.175 2.652 1.657 5.645 2.623 8.23 4.28 1.497.966 2.992 2.21 4.488 3.245.749.552 1.224 1.45 2.177 1.795v-.207c-.477-.622-.613-1.519-1.088-2.21-.68-.69-1.36-1.311-2.04-2.002-1.973-2.692-4.421-5.04-7.074-6.972-2.176-1.52-6.938-3.59-7.821-6.145 0 0-.069-.068-.136-.137 1.496-.138 3.264-.69 4.693-1.105 2.312-.622 4.42-.484 6.8-1.105 1.089-.276 2.177-.621 3.265-.967v-.62c-1.224-1.243-2.108-2.9-3.4-4.074-3.469-3.038-7.278-6.007-11.222-8.492-2.11-1.38-4.83-2.278-7.074-3.452-.816-.414-2.176-.621-2.652-1.312-1.225-1.518-1.905-3.52-2.789-5.315-1.972-3.798-3.877-8.009-5.577-12.013-1.224-2.692-1.972-5.385-3.469-7.87-7.005-11.737-14.622-18.848-26.32-25.82-2.517-1.45-5.51-2.072-8.706-2.83-1.7-.07-3.4-.208-5.1-.278-1.09-.483-2.178-1.794-3.13-2.416C13.284 1.815 3.286-3.57.43 3.541c-1.837 4.487 2.72 8.906 4.284 11.184 1.157 1.588 2.652 3.383 3.469 5.178.476 1.173.611 2.417 1.088 3.66 1.088 3.036 2.108 6.42 3.537 9.25.748 1.45 1.564 2.969 2.516 4.28.544.76 1.496 1.105 1.7 2.348-.951 1.38-1.02 3.452-1.564 5.178-2.449 7.801-1.496 17.466 1.972 23.196 1.088 1.726 3.673 5.524 7.142 4.074 3.06-1.243 2.38-5.178 3.264-8.63.205-.83.069-1.38.476-1.933v.138c.953 1.933 1.904 3.797 2.789 5.73 2.108 3.383 5.78 6.904 8.841 9.252 1.633 1.242 2.925 3.382 4.966 4.142v-.208h-.137c-.408-.621-1.02-.897-1.564-1.38-1.224-1.243-2.585-2.762-3.536-4.143-2.857-3.866-5.374-8.146-7.618-12.565-1.088-2.14-2.04-4.487-2.924-6.627-.409-.83-.409-2.072-1.089-2.485-1.02 1.518-2.516 2.83-3.264 4.694-1.292 2.968-1.428 6.627-1.904 10.424-.273.07-.137 0-.273.14-2.176-.554-2.924-2.832-3.74-4.765-2.041-4.901-2.381-12.772-.613-18.433.477-1.45 2.517-6.006 1.701-7.387-.408-1.312-1.769-2.071-2.517-3.107-.884-1.312-1.836-2.968-2.448-4.418-1.633-3.866-2.449-8.147-4.217-12.013-.816-1.795-2.244-3.659-3.4-5.316-1.293-1.864-2.721-3.176-3.741-5.385-.34-.759-.817-2.002-.272-2.83.136-.553.407-.76.952-.898.884-.76 3.4.207 4.284.621 2.517 1.035 4.625 2.003 6.734 3.452.952.69 1.972 2.003 3.196 2.348h1.429c2.176.483 4.624.138 6.665.759 3.605 1.173 6.87 2.9 9.794 4.764 8.91 5.73 16.255 13.876 21.22 23.61.816 1.588 1.156 3.039 1.904 4.695 1.429 3.383 3.197 6.835 4.625 10.149 1.428 3.244 2.788 6.559 4.829 9.251 1.02 1.45 5.1 2.21 6.937 2.969 1.36.62 3.47 1.174 4.693 1.933 2.312 1.449 4.625 3.107 6.801 4.694 1.089.829 4.489 2.555 4.693 3.935"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-app/app/page.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 124
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "MySQL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#563D7C",
                                                                        d: "M0 87.106C0 94.228 5.773 100 12.894 100h74.212C94.228 100 100 94.227 100 87.106V12.895C100 5.772 94.227 0 87.106 0H12.895C5.773 0 0 5.773 0 12.894z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 124
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        d: "M41.468 44.234V30.072h12.465q1.782 0 3.435.297 1.654.296 2.926 1.06a5.65 5.65 0 0 1 2.035 2.12q.762 1.356.763 3.476 0 3.816-2.29 5.513-2.289 1.696-5.85 1.696zM28.154 19.727v60.546h29.341q4.07 0 7.93-1.017 3.856-1.018 6.868-3.138 3.01-2.12 4.791-5.47 1.781-3.348 1.78-7.928 0-5.681-2.755-9.71-2.757-4.028-8.353-5.639 4.07-1.95 6.148-5.003t2.078-7.632q0-4.24-1.4-7.123-1.398-2.883-3.943-4.622-2.543-1.739-6.105-2.501-3.562-.764-7.887-.763zm13.314 50.2v-16.62h14.5q4.326 0 6.955 1.993t2.629 6.657q-.001 2.374-.806 3.9-.806 1.527-2.163 2.417-1.356.891-3.137 1.272-1.781.382-3.732.382z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 298
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "Bootstrap"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        d: "M50 99.999c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 124
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "url(#a)",
                                                                        d: "M83.06 87.51 38.412 30H30v39.983h6.73V38.545L77.777 91.58a50 50 0 0 0 5.283-4.07"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 232
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "url(#b)",
                                                                        d: "M70.556 29.999h-6.667v40h6.667z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 339
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                id: "a",
                                                                                x1: "60.556",
                                                                                x2: "80.278",
                                                                                y1: "64.721",
                                                                                y2: "89.166",
                                                                                gradientUnits: "userSpaceOnUse",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {}, void 0, false, {
                                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                                        lineNumber: 158,
                                                                                        columnNumber: 505
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "1",
                                                                                        stopColor: "#fff",
                                                                                        stopOpacity: "0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                                        lineNumber: 158,
                                                                                        columnNumber: 512
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                                lineNumber: 158,
                                                                                columnNumber: 403
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                id: "b",
                                                                                x1: "67.222",
                                                                                x2: "67.111",
                                                                                y1: "29.999",
                                                                                y2: "59.374",
                                                                                gradientUnits: "userSpaceOnUse",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {}, void 0, false, {
                                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                                        lineNumber: 158,
                                                                                        columnNumber: 682
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "1",
                                                                                        stopColor: "#fff",
                                                                                        stopOpacity: "0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                                        lineNumber: 158,
                                                                                        columnNumber: 689
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                                lineNumber: 158,
                                                                                columnNumber: 580
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 397
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "Next.js"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#fff",
                                                                    d: "M93.06 40.937c1.25-3.438 1.563-6.875 1.25-10.313-.312-3.437-1.562-6.875-3.125-10-2.812-4.687-6.875-8.437-11.562-10.625-5-2.187-10.313-2.812-15.625-1.562-2.5-2.5-5.313-4.688-8.438-6.25S48.685-.001 45.248-.001c-5.313 0-10.625 1.563-15 4.688a24.16 24.16 0 0 0-9.063 12.5c-3.75.937-6.875 2.5-10 4.374-2.812 2.188-5 5-6.875 7.813-2.812 4.688-3.75 10-3.125 15.313a27.2 27.2 0 0 0 6.25 14.375c-1.25 3.437-1.562 6.874-1.25 10.312s1.563 6.875 3.125 10c2.813 4.688 6.875 8.438 11.563 10.625 5 2.188 10.312 2.813 15.625 1.563 2.5 2.5 5.312 4.687 8.437 6.25s6.875 2.187 10.313 2.187c5.312 0 10.625-1.562 15-4.687s7.5-7.5 9.062-12.5c3.438-.626 6.875-2.188 9.688-4.376 2.812-2.187 5.312-4.687 6.875-7.812 2.812-4.687 3.75-10 3.125-15.312-.625-5.313-2.5-10.313-5.938-14.375m-37.5 52.5c-5 0-8.75-1.563-12.187-4.376 0 0 .312-.312.625-.312l20-11.562c.625-.313.937-.626 1.25-1.25.312-.626.312-.938.312-1.563V46.249l8.438 5v23.125c.312 10.938-8.438 19.063-18.438 19.063M15.248 76.249c-2.188-3.75-3.125-8.125-2.188-12.5 0 0 .313.312.625.312l20 11.563c.625.313.938.313 1.563.313s1.25 0 1.562-.313l24.375-14.062v9.687L40.873 83.124c-4.375 2.5-9.375 3.125-14.063 1.875-5-1.25-9.062-4.375-11.562-8.75M9.935 32.812c2.188-3.75 5.625-6.563 9.688-8.125v23.75c0 .625 0 1.25.312 1.562.313.625.625.938 1.25 1.25L45.56 65.311l-8.437 5-20-11.562c-4.375-2.5-7.5-6.562-8.75-11.25s-.938-10.312 1.562-14.687m69.063 15.937L54.623 34.687l8.437-5 20 11.562c3.125 1.875 5.625 4.375 7.188 7.5s2.5 6.563 2.187 10.313c-.312 3.437-1.562 6.874-3.75 9.687s-5 5-8.437 6.25v-23.75c0-.625 0-1.25-.313-1.562 0 0-.312-.625-.937-.938m8.437-12.5s-.312-.312-.625-.312l-20-11.563c-.625-.312-.937-.312-1.562-.312s-1.25 0-1.563.312L39.31 38.437v-9.688l20.313-11.875c3.125-1.875 6.562-2.5 10.312-2.5 3.438 0 6.875 1.25 10 3.437 2.813 2.188 5.313 5 6.563 8.125s1.562 6.876.937 10.313m-52.5 17.5-8.437-5V25.311c0-3.437.937-7.187 2.812-10 1.875-3.124 4.688-5.312 7.813-6.874 3.125-1.563 6.875-2.188 10.312-1.563 3.438.313 6.875 1.875 9.688 4.063 0 0-.313.312-.625.312l-20 11.562c-.625.313-.938.625-1.25 1.25s-.313.938-.313 1.563zm4.375-10 10.938-6.25 10.937 6.25v12.5l-10.937 6.25-10.938-6.25z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-app/app/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 124
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "OpenAI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow transition hover:-translate-y-0.5 w-24 h-24 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-8 w-8 opacity-90",
                                                                fill: "none",
                                                                viewBox: "0 0 100 100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        d: "M50 1C22.39 1 0 23.386 0 51c0 22.092 14.326 40.834 34.193 47.446 2.499.462 3.416-1.085 3.416-2.406 0-1.192-.046-5.131-.067-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.552-7.315-5.552-7.315-4.536-3.104.342-3.04.342-3.04 5.021.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.543-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.39 4.595 3.39 9.26 0 6.69-.057 12.074-.057 13.721 0 1.33.9 2.89 3.434 2.399C85.691 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 126
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fill: "#fff",
                                                                        d: "M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.108-.256.5-.327.862-.156.363.163.57.505.445.755m2.459 2.194c-.238.221-.705.118-1.021-.231-.327-.349-.388-.814-.146-1.04.245-.22.698-.117 1.025.232.328.353.391.816.142 1.04zm1.687 2.808c-.306.213-.807.013-1.117-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.117.42.306.452.306.985-.007 1.203m2.854 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.294.191.435.403.567.979.275 1.278m3.687 1.098c-.12.391-.682.57-1.249.403-.565-.171-.935-.63-.821-1.026.117-.394.682-.58 1.253-.401.564.17.935.625.818 1.024m4.198.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.089-.726 0-.416.47-.755 1.067-.765.595-.012 1.082.32 1.082.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.349-.826.928-.933.591-.103 1.12.14 1.196.548"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-app/app/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 970
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs",
                                                                children: "Git"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "w-full mt-12 flex flex-col items-center justify-center text-center relative",
                                style: {
                                    aspectRatio: "4 / 3"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 60,
                                        direction: "vertical",
                                        duration: 1.2,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                text: "About Me",
                                                className: "text-2xl sm:text-3xl font-semibold tracking-tight",
                                                delay: 120,
                                                duration: 1,
                                                ease: "power3.out",
                                                splitType: "chars",
                                                from: {
                                                    opacity: 0,
                                                    y: 24
                                                },
                                                to: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                threshold: 0.1,
                                                rootMargin: "-100px",
                                                textAlign: "center"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-2xl mx-auto text-sm text-white/70",
                                                children: "Designer-turned-developer who enjoys crafting smooth interactions and clear UI patterns. I iterate quickly, sweat the details, and love shipping tiny improvements that add up to delightful experiences."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        distance: 40,
                                        direction: "vertical",
                                        duration: 1.0,
                                        initialOpacity: 0,
                                        animateOpacity: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    delay: 0.05,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-target p-6 rounded-xl bg-white/5 ring-1 ring-white/10 shadow text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base font-semibold",
                                                                children: "UI/UX"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-white/70",
                                                                children: "Rapid wireframing, motion as feedback, and accessible patterns. I balance aesthetics with clarity and keep copy short but meaningful."
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    delay: 0.2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-target p-6 rounded-xl bg-white/5 ring-1 ring-white/10 shadow text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base font-semibold",
                                                                children: "Frontend Development"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-white/70",
                                                                children: "Strong with React/Next.js, component design, and animation tooling. I favor clean props, small abstractions, and measurable performance wins."
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    distance: 24,
                                                    direction: "vertical",
                                                    duration: 0.8,
                                                    initialOpacity: 0,
                                                    animateOpacity: true,
                                                    delay: 0.35,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-target p-6 rounded-xl bg-white/5 ring-1 ring-white/10 shadow text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base font-semibold",
                                                                children: "Problem Solving"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-white/70",
                                                                children: "I prototype, test, and iterate. When stuck, I instrument, log, and reduce the scope until the issue is obvious—then automate the fix."
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-app/app/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/app/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#top",
                                        "aria-label": "Scroll to top",
                                        className: "absolute right-3 bottom-3 cursor-target hidden sm:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: "SCROLL•UP•",
                                            onHover: "speedUp",
                                            spinDuration: 20,
                                            className: "scale-50 sm:scale-75 opacity-90 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "about-bottom"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/app/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-app_8aa3489d._.js.map