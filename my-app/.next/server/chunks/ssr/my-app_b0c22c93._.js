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
            overflow: "hidden"
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
                className: "falling-text-canvas"
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
"[project]/my-app/components/CircularGallery.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "circularGallery": "CircularGallery-module__qyBAhW__circularGallery",
});
}),
"[project]/my-app/components/CircularGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircularGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Camera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/extras/Plane.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Program.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Renderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/ogl/src/core/Transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/my-app/components/CircularGallery.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(()=>func.apply(this, args), wait);
    };
}
function lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
}
function autoBind(instance) {
    const proto = Object.getPrototypeOf(instance);
    Object.getOwnPropertyNames(proto).forEach((key)=>{
        if (key !== "constructor" && typeof instance[key] === "function") {
            instance[key] = instance[key].bind(instance);
        }
    });
}
function createTextTexture(gl, text, font = "bold 30px monospace", color = "black") {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    const textWidth = Math.ceil(metrics.width);
    const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
    canvas.width = textWidth + 20;
    canvas.height = textHeight + 20;
    context.font = font;
    context.fillStyle = color;
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](gl, {
        generateMipmaps: false
    });
    texture.image = canvas;
    return {
        texture,
        width: canvas.width,
        height: canvas.height
    };
}
class Title {
    gl;
    plane;
    renderer;
    text;
    textColor;
    font;
    mesh;
    constructor({ gl, plane, renderer, text, textColor = "#545050", font = "30px sans-serif" }){
        autoBind(this);
        this.gl = gl;
        this.plane = plane;
        this.renderer = renderer;
        this.text = text;
        this.textColor = textColor;
        this.font = font;
        this.createMesh();
    }
    createMesh() {
        const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plane"](this.gl);
        const program = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Program"](this.gl, {
            vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
            uniforms: {
                tMap: {
                    value: texture
                }
            },
            transparent: true
        });
        this.mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.gl, {
            geometry,
            program
        });
        const aspect = width / height;
        const textHeight = this.plane.scale.y * 0.15;
        const textWidth = textHeight * aspect;
        this.mesh.scale.set(textWidth, textHeight, 1);
        this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
        this.mesh.setParent(this.plane);
    }
}
class Media {
    extra = 0;
    geometry;
    gl;
    image;
    index;
    length;
    renderer;
    scene;
    screen;
    text;
    viewport;
    bend;
    textColor;
    borderRadius;
    font;
    program;
    plane;
    title;
    widthTotal;
    x;
    scale;
    width;
    padding;
    isBefore;
    isAfter;
    speed;
    constructor({ geometry, gl, image, index, length, renderer, scene, screen, text, viewport, bend, textColor, borderRadius = 0, font }){
        this.geometry = geometry;
        this.gl = gl;
        this.image = image;
        this.index = index;
        this.length = length;
        this.renderer = renderer;
        this.scene = scene;
        this.screen = screen;
        this.text = text;
        this.viewport = viewport;
        this.bend = bend;
        this.textColor = textColor;
        this.borderRadius = borderRadius;
        this.font = font;
        this.createShader();
        this.createMesh();
        this.createTitle();
        this.onResize({});
    }
    createShader() {
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](this.gl, {
            generateMipmaps: true
        });
        this.program = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Program"](this.gl, {
            depthTest: false,
            depthWrite: false,
            vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
            uniforms: {
                tMap: {
                    value: texture
                },
                uPlaneSizes: {
                    value: [
                        0,
                        0
                    ]
                },
                uImageSizes: {
                    value: [
                        0,
                        0
                    ]
                },
                uSpeed: {
                    value: 0
                },
                uTime: {
                    value: 100 * Math.random()
                },
                uBorderRadius: {
                    value: this.borderRadius
                }
            },
            transparent: true
        });
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = this.image;
        img.onload = ()=>{
            texture.image = img;
            this.program.uniforms.uImageSizes.value = [
                img.naturalWidth,
                img.naturalHeight
            ];
        };
    }
    createMesh() {
        this.plane = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.plane.setParent(this.scene);
    }
    createTitle() {
        this.title = new Title({
            gl: this.gl,
            plane: this.plane,
            renderer: this.renderer,
            text: this.text,
            textColor: this.textColor,
            fontFamily: this.font
        });
    }
    update(scroll, direction) {
        this.plane.position.x = this.x - scroll.current - this.extra;
        const x = this.plane.position.x;
        const H = this.viewport.width / 2;
        if (this.bend === 0) {
            this.plane.position.y = 0;
            this.plane.rotation.z = 0;
        } else {
            const B_abs = Math.abs(this.bend);
            const R = (H * H + B_abs * B_abs) / (2 * B_abs);
            const effectiveX = Math.min(Math.abs(x), H);
            const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
            if (this.bend > 0) {
                this.plane.position.y = -arc;
                this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
            } else {
                this.plane.position.y = arc;
                this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
            }
        }
        this.speed = scroll.current - scroll.last;
        this.program.uniforms.uTime.value += 0.04;
        this.program.uniforms.uSpeed.value = this.speed;
        const planeOffset = this.plane.scale.x / 2;
        const viewportOffset = this.viewport.width / 2;
        this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
        this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
        if (direction === "right" && this.isBefore) {
            this.extra -= this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
        if (direction === "left" && this.isAfter) {
            this.extra += this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
    }
    onResize({ screen, viewport } = {}) {
        if (screen) this.screen = screen;
        if (viewport) {
            this.viewport = viewport;
            if (this.plane.program.uniforms.uViewportSizes) {
                this.plane.program.uniforms.uViewportSizes.value = [
                    this.viewport.width,
                    this.viewport.height
                ];
            }
        }
        this.scale = this.screen.height / 1500;
        this.plane.scale.y = this.viewport.height * (900 * this.scale) / this.screen.height;
        this.plane.scale.x = this.viewport.width * (700 * this.scale) / this.screen.width;
        this.plane.program.uniforms.uPlaneSizes.value = [
            this.plane.scale.x,
            this.plane.scale.y
        ];
        this.padding = 2;
        this.width = this.plane.scale.x + this.padding;
        this.widthTotal = this.width * this.length;
        this.x = this.width * this.index;
    }
}
class App {
    container;
    renderer;
    gl;
    camera;
    scene;
    planeGeometry;
    medias;
    mediasImages;
    screen;
    viewport;
    scroll;
    onCheckDebounce;
    bend;
    raf = 0;
    isDown;
    start;
    scrollSpeed;
    constructor(container, { items, bend, textColor = "#ffffff", borderRadius = 0, font = "bold 30px Figtree", scrollSpeed = 2, scrollEase = 0.05 } = {}){
        document.documentElement.classList.remove("no-js");
        this.container = container;
        this.scrollSpeed = scrollSpeed;
        this.scroll = {
            ease: scrollEase,
            current: 0,
            target: 0,
            last: 0
        };
        this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.onResize();
        this.createGeometry();
        this.createMedias(items, bend, textColor, borderRadius, font);
        this.update();
        this.addEventListeners();
    }
    createRenderer() {
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Renderer"]({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0, 0, 0, 0);
        this.container.appendChild(this.gl.canvas);
    }
    createCamera() {
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"](this.gl);
        this.camera.fov = 45;
        this.camera.position.z = 20;
    }
    createScene() {
        this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"]();
    }
    createGeometry() {
        this.planeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plane"](this.gl, {
            heightSegments: 50,
            widthSegments: 100
        });
    }
    createMedias(items, bend = 1, textColor, borderRadius, font) {
        const defaultItems = [
            {
                image: `https://picsum.photos/seed/1/800/600`,
                text: "Bridge"
            },
            {
                image: `https://picsum.photos/seed/2/800/600`,
                text: "Desk Setup"
            },
            {
                image: `https://picsum.photos/seed/3/800/600`,
                text: "Waterfall"
            },
            {
                image: `https://picsum.photos/seed/4/800/600`,
                text: "Strawberries"
            },
            {
                image: `https://picsum.photos/seed/5/800/600`,
                text: "Deep Diving"
            },
            {
                image: `https://picsum.photos/seed/16/800/600`,
                text: "Train Track"
            },
            {
                image: `https://picsum.photos/seed/17/800/600`,
                text: "Santorini"
            },
            {
                image: `https://picsum.photos/seed/8/800/600`,
                text: "Blurry Lights"
            },
            {
                image: `https://picsum.photos/seed/9/800/600`,
                text: "New York"
            },
            {
                image: `https://picsum.photos/seed/10/800/600`,
                text: "Good Boy"
            },
            {
                image: `https://picsum.photos/seed/21/800/600`,
                text: "Coastline"
            },
            {
                image: `https://picsum.photos/seed/12/800/600`,
                text: "Palm Trees"
            }
        ];
        const galleryItems = items && items.length ? items : defaultItems;
        this.mediasImages = galleryItems.concat(galleryItems);
        this.medias = this.mediasImages.map((data, index)=>{
            return new Media({
                geometry: this.planeGeometry,
                gl: this.gl,
                image: data.image,
                index,
                length: this.mediasImages.length,
                renderer: this.renderer,
                scene: this.scene,
                screen: this.screen,
                text: data.text,
                viewport: this.viewport,
                bend,
                textColor,
                borderRadius,
                font
            });
        });
    }
    onTouchDown = (e)=>{
        this.isDown = true;
        this.scroll.position = this.scroll.current;
        const touch = e.touches ? e.touches[0] : e;
        this.start = touch.clientX;
    };
    onTouchMove = (e)=>{
        if (!this.isDown) return;
        const touch = e.touches ? e.touches[0] : e;
        const x = touch.clientX;
        const distance = (this.start - x) * (this.scrollSpeed * 0.025);
        this.scroll.target = this.scroll.position + distance;
    };
    onTouchUp = ()=>{
        this.isDown = false;
        this.onCheck();
    };
    onWheel = (e)=>{
        const delta = e.deltaY || e.wheelDelta || e.detail;
        this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
        this.onCheckDebounce();
    };
    onCheck = ()=>{
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
        const item = width * itemIndex;
        this.scroll.target = this.scroll.target < 0 ? -item : item;
    };
    onResize = ()=>{
        this.screen = {
            width: this.container.clientWidth,
            height: this.container.clientHeight
        };
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.camera.perspective({
            aspect: this.screen.width / this.screen.height
        });
        const fov = this.camera.fov * Math.PI / 180;
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const width = height * this.camera.aspect;
        this.viewport = {
            width,
            height
        };
        if (this.medias) {
            this.medias.forEach((media)=>media.onResize({
                    screen: this.screen,
                    viewport: this.viewport
                }));
        }
    };
    update = ()=>{
        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        const direction = this.scroll.current > this.scroll.last ? "right" : "left";
        if (this.medias) {
            this.medias.forEach((media)=>media.update(this.scroll, direction));
        }
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });
        this.scroll.last = this.scroll.current;
        this.raf = window.requestAnimationFrame(this.update);
    };
    addEventListeners() {
        window.addEventListener("resize", this.onResize);
        window.addEventListener("mousewheel", this.onWheel);
        window.addEventListener("wheel", this.onWheel);
        window.addEventListener("mousedown", this.onTouchDown);
        window.addEventListener("mousemove", this.onTouchMove);
        window.addEventListener("mouseup", this.onTouchUp);
        window.addEventListener("touchstart", this.onTouchDown);
        window.addEventListener("touchmove", this.onTouchMove);
        window.addEventListener("touchend", this.onTouchUp);
    }
    destroy() {
        window.cancelAnimationFrame(this.raf);
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("mousewheel", this.onWheel);
        window.removeEventListener("wheel", this.onWheel);
        window.removeEventListener("mousedown", this.onTouchDown);
        window.removeEventListener("mousemove", this.onTouchMove);
        window.removeEventListener("mouseup", this.onTouchUp);
        window.removeEventListener("touchstart", this.onTouchDown);
        window.removeEventListener("touchmove", this.onTouchMove);
        window.removeEventListener("touchend", this.onTouchUp);
        if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
            this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
        }
    }
}
function CircularGallery({ items, bend = 3, textColor = "#ffffff", borderRadius = 0.05, font = "bold 30px Figtree", scrollSpeed = 2, scrollEase = 0.05 }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const app = new App(containerRef.current, {
            items,
            bend,
            textColor,
            borderRadius,
            font,
            scrollSpeed,
            scrollEase
        });
        return ()=>{
            app.destroy();
        };
    }, [
        items,
        bend,
        textColor,
        borderRadius,
        font,
        scrollSpeed,
        scrollEase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularGallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].circularGallery,
        ref: containerRef
    }, void 0, false, {
        fileName: "[project]/my-app/components/CircularGallery.tsx",
        lineNumber: 537,
        columnNumber: 10
    }, this);
}
}),
"[project]/my-app/components/NeonScrollLine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NeonScrollLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function NeonScrollLine({ startRef, right = 24, anchorRef, side = "right", offset = 24, topOffset = 120, bottomOffset = 120, color = "#22d3ee", pinToFirstCard = true }) {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [animatedProgress, setAnimatedProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [leftPx, setLeftPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const easing = 0.06; // smaller = slower & smoother
    const dotSize = 8; // px
    const [dotOffsets, setDotOffsets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // offsets from first dot (px)
    const [baseTop, setBaseTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(topOffset); // locked top after entering section
    const [locked, setLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Page-space (document) Y of the locked first card center; stable across scroll
    const [lockedFirstCenterPageY, setLockedFirstCenterPageY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleFlags, setVisibleFlags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function clamp(n, min, max) {
            return Math.max(min, Math.min(max, n));
        }
        const onScroll = ()=>{
            const scrolled = window.scrollY;
            const startEl = startRef.current;
            if (!startEl) return;
            const rect = startEl.getBoundingClientRect();
            let p = 0; // scroll-based progress between first and last centers (for edge cases)
            if (anchorRef?.current) {
                const children = Array.from(anchorRef.current.children);
                const centersPage = children.map((el)=>{
                    const r = el.getBoundingClientRect();
                    return r.top + window.scrollY + r.height / 2; // page-space Y
                });
                if (centersPage.length > 0) {
                    const startY = centersPage[0] - topOffset; // page-space start
                    const endY = centersPage[centersPage.length - 1] - topOffset; // page-space end at last dot
                    const denom = Math.max(1, endY - startY);
                    p = clamp((scrolled - startY) / denom, 0, 1);
                } else {
                    // fallback to section-based
                    const startY = rect.top + window.scrollY - topOffset;
                    const endY = startY + Math.max(0, rect.height - (topOffset + bottomOffset));
                    const denom = Math.max(1, endY - startY);
                    p = clamp((scrolled - startY) / denom, 0, 1);
                }
            } else {
                // fallback to section-based
                const startY = rect.top + window.scrollY - topOffset;
                const endY = startY + Math.max(0, rect.height - (topOffset + bottomOffset));
                const denom = Math.max(1, endY - startY);
                p = clamp((scrolled - startY) / denom, 0, 1);
            }
            // Determine target height based on visibility of cards
            const lastVisibleIdx = (()=>{
                for(let i = visibleFlags.length - 1; i >= 0; i--)if (visibleFlags[i]) return i;
                return -1;
            })();
            const dotsSpan = dotOffsets.length > 1 ? Math.max(0, dotOffsets[dotOffsets.length - 1]) : 0;
            let targetHeightPx = 0;
            // Check if the section is in the viewport at all
            const sectionInView = rect.bottom > 0 && rect.top < window.innerHeight;
            if (p >= 1) {
                // fully scrolled past last -> connect to last
                targetHeightPx = dotsSpan;
            } else if (lastVisibleIdx >= 0) {
                // connect to the last visible card
                targetHeightPx = dotOffsets[lastVisibleIdx];
            } else if (sectionInView) {
                // Option B: as soon as the section enters view, show a minimal stub from the first dot
                // This makes the line appear anchored even before any card is marked visible
                const stub = 6; // px minimal visible line
                targetHeightPx = Math.min(stub, dotsSpan);
            } else if (p <= 0) {
                targetHeightPx = 0;
            } else {
                targetHeightPx = 0; // between but no visible yet
            }
            const maxH = dotsSpan || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 300);
            const targetProgress = maxH > 0 ? targetHeightPx / maxH : 0;
            setProgress(targetProgress);
            // Update dot offsets every scroll so dots stay aligned with cards, using page-space
            if (anchorRef?.current) {
                const children = Array.from(anchorRef.current.children);
                const centersPage = children.map((el)=>{
                    const r = el.getBoundingClientRect();
                    return r.top + window.scrollY + r.height / 2; // page-space Y
                });
                if (centersPage.length > 0) {
                    const basePage = lockedFirstCenterPageY ?? centersPage[0];
                    setDotOffsets(centersPage.map((c)=>Math.max(0, Math.round(c - basePage))));
                } else {
                    setDotOffsets([]);
                }
            }
            // Lock baseTop to first card's center when entering the section
            if (pinToFirstCard && anchorRef?.current) {
                if (p > 0 && !locked) {
                    const firstChild = anchorRef.current.children[0];
                    if (firstChild) {
                        const r = firstChild.getBoundingClientRect();
                        setBaseTop(r.top + r.height / 2); // viewport position for rendering
                        setLockedFirstCenterPageY(r.top + window.scrollY + r.height / 2); // page-space
                        setLocked(true);
                    }
                } else if (p === 0 && locked) {
                    // reset when leaving the section above
                    setLocked(false);
                    setBaseTop(topOffset);
                    setLockedFirstCenterPageY(null);
                }
            }
        };
        const onResize = ()=>{
            onScroll();
            if (anchorRef?.current && side === "left") {
                const rect = anchorRef.current.getBoundingClientRect();
                setLeftPx(rect.left - offset);
            } else {
                setLeftPx(null);
            }
            // Compute per-card dot offsets using page-space centers (or locked base)
            if (anchorRef?.current) {
                const children = Array.from(anchorRef.current.children);
                const centersPage = children.map((el)=>{
                    const r = el.getBoundingClientRect();
                    return r.top + window.scrollY + r.height / 2; // page-space Y
                });
                if (centersPage.length > 0) {
                    const basePage = lockedFirstCenterPageY ?? centersPage[0];
                    const offsets = centersPage.map((c)=>Math.max(0, Math.round(c - basePage)));
                    setDotOffsets(offsets);
                    // If locked, keep baseTop aligned to first card on resize
                    if (pinToFirstCard && locked) {
                        // Recompute viewport position to keep visual alignment
                        const firstChild = anchorRef.current.children[0];
                        if (firstChild) {
                            const rr = firstChild.getBoundingClientRect();
                            setBaseTop(rr.top + rr.height / 2);
                        }
                    }
                    // Resize visible flags length
                    setVisibleFlags((prev)=>prev.length === centersPage.length ? prev : Array(centersPage.length).fill(false));
                } else {
                    setDotOffsets([]);
                    setVisibleFlags([]);
                }
            } else {
                setDotOffsets([]);
                setVisibleFlags([]);
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onResize);
        onResize();
        // Observe card visibility
        let observer = null;
        if (anchorRef?.current) {
            const children = Array.from(anchorRef.current.children);
            observer = new IntersectionObserver((entries)=>{
                setVisibleFlags((prev)=>{
                    const next = prev.slice();
                    // initialize if needed
                    if (next.length !== children.length) {
                        next.length = children.length;
                        next.fill(false);
                    }
                    for (const entry of entries){
                        const idx = children.indexOf(entry.target);
                        if (idx >= 0) next[idx] = entry.isIntersecting && entry.intersectionRatio > 0;
                    }
                    return next;
                });
            }, {
                root: null,
                threshold: [
                    0,
                    0.1,
                    0.25,
                    0.5,
                    0.75,
                    1
                ]
            });
            children.forEach((el)=>observer.observe(el));
        }
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            if (observer) observer.disconnect();
        };
    }, [
        startRef,
        anchorRef,
        side,
        offset,
        topOffset,
        bottomOffset
    ]);
    // Smoothly ease the visual progress towards the target progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let raf = 0;
        const tick = ()=>{
            setAnimatedProgress((prev)=>{
                const next = prev + (progress - prev) * easing;
                return Math.abs(next - progress) < 0.001 ? progress : next;
            });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    }, [
        progress
    ]);
    // Max visual height should not exceed both viewport and section visible area to feel sticky in-section
    const sectionHeight = (()=>{
        if ("TURBOPACK compile-time truthy", 1) return 300;
        //TURBOPACK unreachable
        ;
        const el = undefined;
    })();
    // If we have card dots, span the line from first to last offset; else fall back to viewport/section constraint
    const dotsSpan = dotOffsets.length > 1 ? Math.max(0, dotOffsets[dotOffsets.length - 1]) : undefined;
    const fallbackMax = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 300;
    const maxHeight = dotsSpan !== undefined ? dotsSpan : fallbackMax;
    const height = Math.max(20, Math.round(maxHeight * animatedProgress)); // Force minimum height for debugging
    // Debug: always show for now to check positioning
    const visible = true; // animatedProgress > 0 && animatedProgress <= 1;
    const lineStyle = {
        position: "fixed",
        top: 100,
        right: side === "right" ? right : undefined,
        left: side === "left" ? 50 : undefined,
        width: 6,
        height: 200,
        borderRadius: 999,
        background: `linear-gradient(180deg, ${color}, #a78bfa)`,
        boxShadow: `0 0 8px ${color}, 0 0 16px ${color}, 0 0 24px ${color}77`,
        transition: "height 200ms linear",
        zIndex: 40,
        pointerEvents: "none",
        opacity: 1
    };
    // Dots: one per card, positioned by offset from the first card's center
    const dots = dotOffsets.map((off)=>baseTop + off);
    const isLeft = side === "left";
    const dotPosStyleBase = isLeft ? {
        left: (leftPx ?? 24) - (dotSize - 4) / 2
    } : {
        right: right - (dotSize - 4) / 2
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: lineStyle
            }, void 0, false, {
                fileName: "[project]/my-app/components/NeonScrollLine.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            visible && dots.map((y, i)=>{
                const active = y <= baseTop + height + dotSize / 2 + 1; // inclusive at the end
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    style: {
                        position: "fixed",
                        top: y - dotSize / 2,
                        width: dotSize,
                        height: dotSize,
                        borderRadius: 999,
                        background: active ? color : "#475569",
                        opacity: active ? 1 : 0.35,
                        boxShadow: active ? `0 0 6px ${color}, 0 0 14px ${color}AA` : "none",
                        zIndex: 41,
                        pointerEvents: "none",
                        ...dotPosStyleBase
                    }
                }, i, false, {
                    fileName: "[project]/my-app/components/NeonScrollLine.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true);
}
}),
"[project]/my-app/app/about/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/AnimatedContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ProfileCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$FallingText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/FallingText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ClickSpark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/SplitText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/CircularGallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$NeonScrollLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/NeonScrollLine.tsx [app-ssr] (ecmascript)");
"use client";
;
;
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
    const educationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eduListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/about/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "min-h-[60vh] sm:min-h-[70vh] grid gap-6 sm:gap-8 sm:grid-cols-5 items-center",
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
                                        onContactClick: ()=>router.push('/contact')
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/about/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 38,
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
                                className: "text-foreground/90 leading-relaxed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$FallingText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: "I design and build fast, accessible web apps with modern tooling. My focus is craft, motion, and clarity.",
                                    highlightWords: [
                                        "fast",
                                        "accessible",
                                        "modern",
                                        "craft",
                                        "motion",
                                        "clarity"
                                    ],
                                    highlightClass: "highlighted",
                                    trigger: "hover",
                                    backgroundColor: "transparent",
                                    wireframes: false,
                                    gravity: 0.45,
                                    fontSize: "1rem",
                                    mouseConstraintStiffness: 0.9,
                                    className: "text-foreground/90 leading-relaxed"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/about/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 56,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 'clamp(360px, 60vh, 640px)',
                        position: 'relative'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$CircularGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        bend: 3,
                        textColor: "#ffffff",
                        borderRadius: 0.05,
                        scrollEase: 0.02,
                        // Temporary images — replace or extend this list as needed
                        items: [
                            {
                                image: "https://picsum.photos/seed/a1/800/600",
                                text: "City"
                            },
                            {
                                image: "https://picsum.photos/seed/a2/800/600",
                                text: "Forest"
                            },
                            {
                                image: "https://picsum.photos/seed/a3/800/600",
                                text: "Beach"
                            },
                            {
                                image: "https://picsum.photos/seed/a4/800/600",
                                text: "Mountains"
                            },
                            {
                                image: "https://picsum.photos/seed/a5/800/600",
                                text: "Canyon"
                            },
                            {
                                image: "https://picsum.photos/seed/a6/800/600",
                                text: "Desert"
                            },
                            {
                                image: "https://picsum.photos/seed/a7/800/600",
                                text: "Skyline"
                            },
                            {
                                image: "https://picsum.photos/seed/a8/800/600",
                                text: "Harbor"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/about/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 73,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-12",
                    ref: educationRef,
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
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/about/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 94,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto space-y-6",
                            ref: eduListRef,
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
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Your University • 2018–2022"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Relevant coursework: Data Structures, Web Development, Computer Graphics."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 112,
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
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Online Program • 2022"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Focus: React, Next.js, animations, accessibility, performance."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 119,
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
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Design School • 2021"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Emphasis on motion, micro-interactions, and design systems."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 126,
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
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Tech University • 2023–2025"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Specialization: Distributed systems, cloud-native architectures, CI/CD."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 133,
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
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Intensive Program • 2020"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Built projects with React, Node.js, databases, and deployment workflows."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 140,
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
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "DesignConf • 2019"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Learned modern layout techniques, GPU-accelerated motion, and micro-interactions."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 147,
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
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Frontend Masters • 2021"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Learned profiling, memoization strategies, Suspense, and code-splitting for large apps."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 154,
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
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "Udacity • 2020"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Explored GPU pipelines, GLSL, and interactive visuals powering effects like the circular gallery."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 161,
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
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70",
                                                children: "General Assembly • 2018"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-foreground/90",
                                                children: "Built production‑ready apps with Node.js, Next.js, and modern CI/CD practices."
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/about/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/about/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/about/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/about/page.tsx",
                            lineNumber: 111,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$NeonScrollLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    startRef: educationRef,
                    anchorRef: eduListRef,
                    side: "left",
                    offset: 16,
                    topOffset: 120,
                    bottomOffset: 120,
                    color: "#22d3ee"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/about/page.tsx",
                    lineNumber: 178,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/about/page.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/about/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=my-app_b0c22c93._.js.map