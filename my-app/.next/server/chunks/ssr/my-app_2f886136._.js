module.exports = [
"[project]/my-app/components/AnimatedContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const AnimatedContent = ({ children, distance = 100, direction = "vertical", reverse = false, duration = 1.4, ease = "power3.out", initialOpacity = 0, animateOpacity = true, scale = 1, threshold = 0.1, delay = 0, onComplete, className })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const axis = direction === "horizontal" ? "x" : "y";
        const offset = reverse ? -distance : distance;
        const startPct = (1 - Math.min(Math.max(threshold, 0), 1)) * 100;
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
            [axis]: offset,
            scale,
            opacity: animateOpacity ? initialOpacity : 1
        });
        const tween = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
            [axis]: 0,
            scale: 1,
            opacity: 1,
            duration,
            ease,
            delay,
            onComplete,
            scrollTrigger: {
                trigger: el,
                start: `top ${startPct}%`,
                toggleActions: "play none none none",
                once: true
            }
        });
        return ()=>{
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/my-app/components/AnimatedContent.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnimatedContent;
}),
"[project]/my-app/components/ProfileCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DEFAULT_BEHIND_GRADIENT = "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)";
const DEFAULT_INNER_GRADIENT = "none";
const ANIMATION_CONFIG = {
    SMOOTH_DURATION: 600,
    INITIAL_DURATION: 1500,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20
};
const clamp = (value, min = 0, max = 100)=>Math.min(Math.max(value, min), max);
const round = (value, precision = 3)=>parseFloat(value.toFixed(precision));
const adjust = (value, fromMin, fromMax, toMin, toMax)=>round(toMin + (toMax - toMin) * (value - fromMin) / (fromMax - fromMin));
const easeInOutCubic = (x)=>x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const ProfileCardComponent = ({ avatarUrl = "/file.svg", iconUrl = "", grainUrl = "", behindGradient, innerGradient, showBehindGradient = true, className = "", enableTilt = true, enableMobileTilt = false, mobileTiltSensitivity = 5, miniAvatarUrl, name = "Javi A. Torres", title = "Software Engineer", handle = "javicodes", status = "Online", contactText = "Contact", showUserInfo = true, onContactClick })=>{
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!enableTilt) return null;
        let rafId = null;
        const updateCardTransform = (offsetX, offsetY, card, wrap)=>{
            const width = card.clientWidth;
            const height = card.clientHeight;
            const percentX = clamp(100 / width * offsetX);
            const percentY = clamp(100 / height * offsetY);
            const centerX = percentX - 50;
            const centerY = percentY - 50;
            const properties = {
                "--pointer-x": `${percentX}%`,
                "--pointer-y": `${percentY}%`,
                "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
                "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
                "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                "--pointer-from-top": `${percentY / 100}`,
                "--pointer-from-left": `${percentX / 100}`,
                "--rotate-x": `${round(-(centerX / 5))}deg`,
                "--rotate-y": `${round(centerY / 4)}deg`
            };
            Object.entries(properties).forEach(([property, value])=>{
                wrap.style.setProperty(property, value);
            });
        };
        const createSmoothAnimation = (duration, startX, startY, card, wrap)=>{
            const startTime = performance.now();
            const targetX = wrap.clientWidth / 2;
            const targetY = wrap.clientHeight / 2;
            const animationLoop = (currentTime)=>{
                const elapsed = currentTime - startTime;
                const progress = clamp(elapsed / duration);
                const easedProgress = easeInOutCubic(progress);
                const currentX = adjust(easedProgress, 0, 1, startX, targetX);
                const currentY = adjust(easedProgress, 0, 1, startY, targetY);
                updateCardTransform(currentX, currentY, card, wrap);
                if (progress < 1) {
                    rafId = requestAnimationFrame(animationLoop);
                }
            };
            rafId = requestAnimationFrame(animationLoop);
        };
        const handlers = {
            updateCardTransform,
            createSmoothAnimation,
            cancelAnimation: ()=>{
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }
        };
        return handlers;
    }, [
        enableTilt
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap || !animationHandlers) return;
        const rect = card.getBoundingClientRect();
        animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
    }, [
        animationHandlers
    ]);
    const handlePointerEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap || !animationHandlers) return;
        animationHandlers.cancelAnimation();
        wrap.classList.add("active");
        card.classList.add("active");
    }, [
        animationHandlers
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap || !animationHandlers) return;
        animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.SMOOTH_DURATION, event.offsetX, event.offsetY, card, wrap);
        wrap.classList.remove("active");
        card.classList.remove("active");
    }, [
        animationHandlers
    ]);
    const handleDeviceOrientation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap || !animationHandlers) return;
        const { beta, gamma } = event;
        if (beta == null || gamma == null) return;
        animationHandlers.updateCardTransform(card.clientHeight / 2 + gamma * mobileTiltSensitivity, card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity, card, wrap);
    }, [
        animationHandlers,
        mobileTiltSensitivity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enableTilt || !animationHandlers) return;
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap) return;
        const pointerMoveHandler = handlePointerMove;
        const pointerEnterHandler = handlePointerEnter;
        const pointerLeaveHandler = handlePointerLeave;
        const deviceOrientationHandler = handleDeviceOrientation;
        const handleClick = ()=>{
            if (!enableMobileTilt || location.protocol !== "https:") return;
            const anyWindow = window;
            if (typeof anyWindow.DeviceMotionEvent?.requestPermission === "function") {
                anyWindow.DeviceMotionEvent.requestPermission().then((state)=>{
                    if (state === "granted") {
                        window.addEventListener("deviceorientation", deviceOrientationHandler);
                    }
                }).catch((err)=>console.error(err));
            } else {
                window.addEventListener("deviceorientation", deviceOrientationHandler);
            }
        };
        card.addEventListener("pointerenter", pointerEnterHandler);
        card.addEventListener("pointermove", pointerMoveHandler);
        card.addEventListener("pointerleave", pointerLeaveHandler);
        card.addEventListener("click", handleClick);
        const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
        const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
        animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
        animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);
        return ()=>{
            card.removeEventListener("pointerenter", pointerEnterHandler);
            card.removeEventListener("pointermove", pointerMoveHandler);
            card.removeEventListener("pointerleave", pointerLeaveHandler);
            card.removeEventListener("click", handleClick);
            window.removeEventListener("deviceorientation", deviceOrientationHandler);
            animationHandlers.cancelAnimation();
        };
    }, [
        enableTilt,
        enableMobileTilt,
        animationHandlers,
        handlePointerMove,
        handlePointerEnter,
        handlePointerLeave,
        handleDeviceOrientation
    ]);
    const cardStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            "--icon": iconUrl ? `url(${iconUrl})` : "none",
            "--grain": grainUrl ? `url(${grainUrl})` : "none",
            "--behind-gradient": showBehindGradient ? behindGradient ?? DEFAULT_BEHIND_GRADIENT : "none",
            "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT
        }), [
        iconUrl,
        grainUrl,
        showBehindGradient,
        behindGradient,
        innerGradient
    ]);
    const handleContactClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onContactClick?.();
    }, [
        onContactClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: `pc-card-wrapper ${className}`.trim(),
        style: cardStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: cardRef,
            className: "pc-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pc-inside",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-shine"
                    }, void 0, false, {
                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-glare"
                    }, void 0, false, {
                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-content pc-avatar-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "avatar",
                                src: avatarUrl,
                                alt: `${name || "User"} avatar`,
                                loading: "lazy",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/my-app/components/ProfileCard.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showUserInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pc-user-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pc-user-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pc-mini-avatar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: miniAvatarUrl || avatarUrl,
                                                    alt: `${name || "User"} mini avatar`,
                                                    loading: "lazy",
                                                    onError: (e)=>{
                                                        const target = e.target;
                                                        target.style.opacity = "0.5";
                                                        target.src = avatarUrl;
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/components/ProfileCard.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/components/ProfileCard.tsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pc-user-text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pc-handle",
                                                        children: [
                                                            "@",
                                                            handle
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pc-status",
                                                        children: status
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-app/components/ProfileCard.tsx",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                                        lineNumber: 339,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pc-contact-btn",
                                        onClick: handleContactClick,
                                        style: {
                                            pointerEvents: "auto"
                                        },
                                        type: "button",
                                        "aria-label": `Contact ${name || "user"}`,
                                        children: contactText
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/components/ProfileCard.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pc-details",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/ProfileCard.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/ProfileCard.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/components/ProfileCard.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/my-app/components/ProfileCard.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/components/ProfileCard.tsx",
                lineNumber: 323,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/my-app/components/ProfileCard.tsx",
            lineNumber: 322,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/my-app/components/ProfileCard.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ProfileCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ProfileCardComponent);
const __TURBOPACK__default__export__ = ProfileCard;
}),
"[project]/my-app/components/FallingText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const FallingText = ({ className = "", text = "", highlightWords = [], highlightClass = "highlighted", trigger = "auto", backgroundColor = "transparent", wireframes = false, gravity = 1, mouseConstraintStiffness = 0.2, fontSize = "1rem" })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [effectStarted, setEffectStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!textRef.current) return;
        const words = text.split(" ");
        const newHTML = words.map((word)=>{
            const isHighlighted = highlightWords.some((hw)=>word.startsWith(hw));
            return `<span class="word ${isHighlighted ? highlightClass : ""}">${word}</span>`;
        }).join(" ");
        textRef.current.innerHTML = newHTML;
    }, [
        text,
        highlightWords,
        highlightClass
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (trigger === "auto") {
            setEffectStarted(true);
            return;
        }
        if (trigger === "scroll" && containerRef.current) {
            const observer = new IntersectionObserver(([entry])=>{
                if (entry.isIntersecting) {
                    setEffectStarted(true);
                    observer.disconnect();
                }
            }, {
                threshold: 0.1
            });
            observer.observe(containerRef.current);
            return ()=>observer.disconnect();
        }
    }, [
        trigger
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!effectStarted) return;
        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
        const container = containerRef.current;
        const textEl = textRef.current;
        const canvasEl = canvasContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;
        if (width <= 0 || height <= 0) {
            return;
        }
        const engine = Engine.create();
        engine.world.gravity.y = gravity;
        const render = Render.create({
            element: canvasEl,
            engine,
            options: {
                width,
                height,
                background: backgroundColor,
                wireframes
            }
        });
        const boundaryOptions = {
            isStatic: true,
            render: {
                fillStyle: "transparent"
            }
        };
        const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
        const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
        const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
        const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);
        const wordSpans = textEl.querySelectorAll(".word");
        const wordBodies = Array.from(wordSpans).map((elem)=>{
            const rect = elem.getBoundingClientRect();
            const x = rect.left - containerRect.left + rect.width / 2;
            const y = rect.top - containerRect.top + rect.height / 2;
            const body = Bodies.rectangle(x, y, rect.width, rect.height, {
                render: {
                    fillStyle: "transparent"
                },
                restitution: 0.8,
                frictionAir: 0.01,
                friction: 0.2
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 5,
                y: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
            return {
                elem,
                body
            };
        });
        wordBodies.forEach(({ elem, body })=>{
            elem.style.position = "absolute";
            elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
            elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
            elem.style.transform = "none";
        });
        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: mouseConstraintStiffness,
                render: {
                    visible: false
                }
            }
        });
        render.mouse = mouse;
        World.add(engine.world, [
            floor,
            leftWall,
            rightWall,
            ceiling,
            mouseConstraint,
            ...wordBodies.map((wb)=>wb.body)
        ]);
        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);
        const updateLoop = ()=>{
            wordBodies.forEach(({ body, elem })=>{
                const { x, y } = body.position;
                elem.style.left = `${x}px`;
                elem.style.top = `${y}px`;
                elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Engine.update(engine);
            requestAnimationFrame(updateLoop);
        };
        updateLoop();
        return ()=>{
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas && canvasEl) {
                try {
                    canvasEl.removeChild(render.canvas);
                } catch  {}
            }
            World.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, [
        effectStarted,
        gravity,
        wireframes,
        backgroundColor,
        mouseConstraintStiffness
    ]);
    const handleTrigger = ()=>{
        if (!effectStarted && (trigger === "click" || trigger === "hover")) {
            setEffectStarted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `falling-text-container ${className}`,
        onClick: trigger === "click" ? handleTrigger : undefined,
        onMouseEnter: trigger === "hover" ? handleTrigger : undefined,
        style: {
            position: "relative",
            overflow: "visible",
            minHeight: "400px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "falling-text-target",
                style: {
                    fontSize: fontSize,
                    lineHeight: 1.4
                }
            }, void 0, false, {
                fileName: "[project]/my-app/components/FallingText.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasContainerRef,
                className: "falling-text-canvas",
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/my-app/components/FallingText.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/components/FallingText.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FallingText;
}),
"[project]/my-app/components/SplitText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// SplitText is a paid GSAP plugin. We'll try to load it if available.
let SplitTextPlugin = null;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    SplitTextPlugin = __turbopack_context__.r("[project]/my-app/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)").SplitText || __turbopack_context__.r("[project]/my-app/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
    if (SplitTextPlugin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(SplitTextPlugin);
    }
} catch (e) {
// Plugin not available; component will gracefully degrade without animation.
}
// Register ScrollTrigger (free plugin, safe to import)
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SplitText = ({ text, className = "", delay = 100, duration = 0.6, ease = "power3.out", splitType = "chars", from = {
    opacity: 0,
    y: 40
}, to = {
    opacity: 1,
    y: 0
}, threshold = 0.1, rootMargin = "-100px", textAlign = "center", onLetterAnimationComplete })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationCompletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const el = undefined;
        const absoluteLines = undefined;
        let splitter;
        let targets;
        // Build ScrollTrigger start value based on threshold and rootMargin
        const startPct = undefined;
        const marginMatch = undefined;
        const marginValue = undefined;
        const marginUnit = undefined;
        const sign = undefined;
        const start = undefined;
        const tl = undefined;
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: `split-parent overflow-hidden inline-block whitespace-normal ${className}`,
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
const __TURBOPACK__default__export__ = SplitText;
}),
"[project]/my-app/components/RollingGallery.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "galleryContainer": "RollingGallery-module__MAfk0G__galleryContainer",
  "galleryContent": "RollingGallery-module__MAfk0G__galleryContent",
  "galleryGradient": "RollingGallery-module__MAfk0G__galleryGradient",
  "galleryGradientLeft": "RollingGallery-module__MAfk0G__galleryGradientLeft",
  "galleryGradientRight": "RollingGallery-module__MAfk0G__galleryGradientRight",
  "galleryImg": "RollingGallery-module__MAfk0G__galleryImg",
  "galleryItem": "RollingGallery-module__MAfk0G__galleryItem",
  "galleryTrack": "RollingGallery-module__MAfk0G__galleryTrack",
});
}),
"[project]/my-app/components/RollingGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/my-app/components/RollingGallery.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const DEFAULT_IMGS = [
    "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = DEFAULT_IMGS })=>{
    const [isScreenSm, setIsScreenSm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Determine initial size on client
        const check = ()=>setIsScreenSm(window.innerWidth <= 640);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, []);
    const cylinderWidth = isScreenSm ? 1100 : 1800;
    const faceCount = images.length;
    const faceWidth = cylinderWidth / faceCount * 1.5;
    const dragFactor = 0.05;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const autoplayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleDrag = (_, info)=>{
        rotation.set(rotation.get() + info.offset.x * dragFactor);
    };
    const handleDragEnd = (_, info)=>{
        controls.start({
            rotateY: rotation.get() + info.velocity.x * dragFactor,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 0.1,
                ease: "easeOut"
            }
        });
    };
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(rotation, (value)=>`rotate3d(0, 1, 0, ${value}deg)`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoplay) return;
        autoplayRef.current = setInterval(()=>{
            controls.start({
                rotateY: rotation.get() - 360 / faceCount,
                transition: {
                    duration: 2,
                    ease: "linear"
                }
            });
            rotation.set(rotation.get() - 360 / faceCount);
        }, 2000);
        return ()=>{
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [
        autoplay,
        rotation,
        controls,
        faceCount
    ]);
    const handleMouseEnter = ()=>{
        if (autoplay && pauseOnHover) {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
            controls.stop();
        }
    };
    const handleMouseLeave = ()=>{
        if (autoplay && pauseOnHover) {
            controls.start({
                rotateY: rotation.get() - 360 / faceCount,
                transition: {
                    duration: 2,
                    ease: "linear"
                }
            });
            rotation.set(rotation.get() - 360 / faceCount);
            autoplayRef.current = setInterval(()=>{
                controls.start({
                    rotateY: rotation.get() - 360 / faceCount,
                    transition: {
                        duration: 2,
                        ease: "linear"
                    }
                });
                rotation.set(rotation.get() - 360 / faceCount);
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryGradient} ${__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryGradientLeft}`
            }, void 0, false, {
                fileName: "[project]/my-app/components/RollingGallery.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryGradient} ${__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryGradientRight}`
            }, void 0, false, {
                fileName: "[project]/my-app/components/RollingGallery.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    drag: "x",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryTrack,
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    style: {
                        transform: transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d"
                    },
                    onDrag: handleDrag,
                    onDragEnd: handleDragEnd,
                    animate: controls,
                    children: images.map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryItem,
                            style: {
                                width: `${faceWidth}px`,
                                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: url,
                                alt: "gallery",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryImg
                            }, void 0, false, {
                                fileName: "[project]/my-app/components/RollingGallery.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/my-app/components/RollingGallery.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/my-app/components/RollingGallery.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-app/components/RollingGallery.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/components/RollingGallery.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RollingGallery;
}),
"[project]/my-app/app/about/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/AnimatedContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ProfileCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$FallingText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/FallingText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ClickSpark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/SplitText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/RollingGallery.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function AboutPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        sparkColor: "#ffffff",
        sparkSize: 10,
        sparkRadius: 15,
        sparkCount: 10,
        duration: 450,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "px-6 sm:px-10 py-10 mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    distance: 80,
                    direction: "vertical",
                    duration: 1.2,
                    initialOpacity: 0,
                    animateOpacity: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 sm:mb-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "About",
                            className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight",
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
                            textAlign: "center"
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/about/page.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "min-h-[60vh] sm:min-h-[70vh] grid gap-6 sm:gap-8 sm:grid-cols-5 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "sm:col-span-2",
                            distance: 120,
                            direction: "horizontal",
                            reverse: true,
                            duration: 0.9,
                            initialOpacity: 0,
                            animateOpacity: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: "Xai Bandala",
                                        title: "Software Engineer",
                                        handle: "javicodes",
                                        status: "Online",
                                        contactText: "Contact Me",
                                        avatarUrl: "/xai.jpeg",
                                        showUserInfo: true,
                                        enableTilt: true,
                                        enableMobileTilt: false,
                                        showBehindGradient: false,
                                        onContactClick: ()=>router.push('/contact')
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/about/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 35,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "sm:col-span-3",
                            distance: 120,
                            direction: "horizontal",
                            duration: 0.9,
                            initialOpacity: 0,
                            animateOpacity: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-foreground/90 leading-relaxed relative",
                                style: {
                                    overflow: "visible",
                                    minHeight: "clamp(400px, 50vh, 600px)",
                                    paddingBottom: "clamp(150px, 25vh, 300px)",
                                    zIndex: 10
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$FallingText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Passionate about User Interface Design, I have honed my skills through several projects using Figma to create intuitive and visually appealing user experiences. I am eager to continue expanding my expertise in this field, constantly learning and adapting to new design trends and technologies. My goal is to contribute to impactful projects that blend creativity with functionality, enhancing user satisfaction through thoughtful design.",
                                    highlightWords: [
                                        "User Interface Design",
                                        "Figma",
                                        "intuitive",
                                        "visually appealing",
                                        "expertise",
                                        "design trends",
                                        "technologies",
                                        "creativity",
                                        "functionality",
                                        "user satisfaction",
                                        "thoughtful design"
                                    ],
                                    highlightClass: "highlighted",
                                    trigger: "click",
                                    backgroundColor: "rgba(0, 0, 0, 0.02)",
                                    wireframes: false,
                                    gravity: 0.8,
                                    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                                    mouseConstraintStiffness: 0.7,
                                    className: "text-foreground/90 leading-relaxed text-base sm:text-lg md:text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/about/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 54,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$RollingGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        autoplay: true,
                        pauseOnHover: true
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/about/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 77,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            distance: 80,
                            direction: "vertical",
                            duration: 1.0,
                            initialOpacity: 0,
                            animateOpacity: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Education",
                                    className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight",
                                    delay: 120,
                                    duration: 1.0,
                                    ease: "power3.out",
                                    splitType: "chars",
                                    from: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    to: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    threshold: 0.1,
                                    rootMargin: "-100px",
                                    textAlign: "center"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/about/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 82,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "B.S. in Computer Science"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Your University • 2018–2022"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Relevant coursework: Data Structures, Web Development, Computer Graphics."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Frontend Engineering Nanodegree"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Online Program • 2022"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Focus: React, Next.js, animations, accessibility, performance."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Certificate: UI/UX Design"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Design School • 2021"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Emphasis on motion, micro-interactions, and design systems."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "M.S. in Software Engineering"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Tech University • 2023–2025"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Specialization: Distributed systems, cloud-native architectures, CI/CD."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Full-Stack Web Bootcamp"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Intensive Program • 2020"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Built projects with React, Node.js, databases, and deployment workflows."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Workshop: Advanced CSS & Animations"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "DesignConf • 2019"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Learned modern layout techniques, GPU-accelerated motion, and micro-interactions."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Certificate: React Performance Optimization"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Frontend Masters • 2021"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Learned profiling, memoization strategies, Suspense, and code-splitting for large apps."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Course: WebGL and Shaders"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Udacity • 2020"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Explored GPU pipelines, GLSL, and interactive visuals powering effects like the circular gallery."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.8,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                children: "Bootcamp: Full‑Stack Development"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "General Assembly • 2018"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Built production‑ready apps with Node.js, Next.js, and modern CI/CD practices."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 81,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/about/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/about/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=my-app_2f886136._.js.map