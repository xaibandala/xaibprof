(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=my-app_components_d7972e54._.js.map