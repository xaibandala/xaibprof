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
"[project]/my-app/components/MagicBento.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;
const cardData = [
    {
        color: "#060010",
        title: "Analytics",
        description: "Track user behavior",
        label: "Insights"
    },
    {
        color: "#060010",
        title: "Dashboard",
        description: "Centralized data view",
        label: "Overview"
    },
    {
        color: "#060010",
        title: "Collaboration",
        description: "Work together seamlessly",
        label: "Teamwork"
    },
    {
        color: "#060010",
        title: "Automation",
        description: "Streamline workflows",
        label: "Efficiency"
    },
    {
        color: "#060010",
        title: "Integration",
        description: "Connect favorite tools",
        label: "Connectivity"
    },
    {
        color: "#060010",
        title: "Security",
        description: "Enterprise-grade protection",
        label: "Protection"
    }
];
const createParticleElement = function(x, y) {
    let color = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_GLOW_COLOR;
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = "\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    background: rgba(".concat(color, ", 1);\n    box-shadow: 0 0 6px rgba(").concat(color, ", 0.6);\n    pointer-events: none;\n    z-index: 100;\n    left: ").concat(x, "px;\n    top: ").concat(y, "px;\n  ");
    return el;
};
const calculateSpotlightValues = (radius)=>({
        proximity: radius * 0.5,
        fadeDistance: radius * 0.75
    });
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius)=>{
    const rect = card.getBoundingClientRect();
    const relativeX = (mouseX - rect.left) / rect.width * 100;
    const relativeY = (mouseY - rect.top) / rect.height * 100;
    card.style.setProperty("--glow-x", "".concat(relativeX, "%"));
    card.style.setProperty("--glow-y", "".concat(relativeY, "%"));
    card.style.setProperty("--glow-intensity", glow.toString());
    card.style.setProperty("--glow-radius", "".concat(radius, "px"));
};
const ParticleCard = (param)=>{
    let { children, className = "", disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false } = param;
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const memoizedParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const magnetismAnimationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializeParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[initializeParticles]": ()=>{
            if (particlesInitialized.current || !cardRef.current) return;
            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({
                length: particleCount
            }, {
                "ParticleCard.useCallback[initializeParticles]": ()=>createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            }["ParticleCard.useCallback[initializeParticles]"]);
            particlesInitialized.current = true;
        }
    }["ParticleCard.useCallback[initializeParticles]"], [
        particleCount,
        glowColor
    ]);
    const clearAllParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[clearAllParticles]": ()=>{
            var _magnetismAnimationRef_current;
            timeoutsRef.current.forEach({
                "ParticleCard.useCallback[clearAllParticles]": (id)=>window.clearTimeout(id)
            }["ParticleCard.useCallback[clearAllParticles]"]);
            timeoutsRef.current = [];
            (_magnetismAnimationRef_current = magnetismAnimationRef.current) === null || _magnetismAnimationRef_current === void 0 ? void 0 : _magnetismAnimationRef_current.kill();
            particlesRef.current.forEach({
                "ParticleCard.useCallback[clearAllParticles]": (particle)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(particle, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "back.in(1.7)",
                        onComplete: {
                            "ParticleCard.useCallback[clearAllParticles]": ()=>{
                                particle.parentNode && particle.parentNode.removeChild(particle);
                            }
                        }["ParticleCard.useCallback[clearAllParticles]"]
                    });
                }
            }["ParticleCard.useCallback[clearAllParticles]"]);
            particlesRef.current = [];
        }
    }["ParticleCard.useCallback[clearAllParticles]"], []);
    const animateParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[animateParticles]": ()=>{
            if (!cardRef.current || !isHoveredRef.current) return;
            if (!particlesInitialized.current) {
                initializeParticles();
            }
            memoizedParticles.current.forEach({
                "ParticleCard.useCallback[animateParticles]": (particle, index)=>{
                    const timeoutId = window.setTimeout({
                        "ParticleCard.useCallback[animateParticles].timeoutId": ()=>{
                            if (!isHoveredRef.current || !cardRef.current) return;
                            const clone = particle.cloneNode(true);
                            cardRef.current.appendChild(clone);
                            particlesRef.current.push(clone);
                            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(clone, {
                                scale: 0,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.3,
                                ease: "back.out(1.7)"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                x: (Math.random() - 0.5) * 100,
                                y: (Math.random() - 0.5) * 100,
                                rotation: Math.random() * 360,
                                duration: 2 + Math.random() * 2,
                                ease: "none",
                                repeat: -1,
                                yoyo: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                opacity: 0.3,
                                duration: 1.5,
                                ease: "power2.inOut",
                                repeat: -1,
                                yoyo: true
                            });
                        }
                    }["ParticleCard.useCallback[animateParticles].timeoutId"], index * 100);
                    timeoutsRef.current.push(timeoutId);
                }
            }["ParticleCard.useCallback[animateParticles]"]);
        }
    }["ParticleCard.useCallback[animateParticles]"], [
        initializeParticles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCard.useEffect": ()=>{
            if (disableAnimations || !cardRef.current) return;
            const element = cardRef.current;
            const handleMouseEnter = {
                "ParticleCard.useEffect.handleMouseEnter": ()=>{
                    isHoveredRef.current = true;
                    animateParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 5,
                            rotateY: 5,
                            duration: 0.3,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "ParticleCard.useEffect.handleMouseLeave": ()=>{
                    isHoveredRef.current = false;
                    clearAllParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                    if (enableMagnetism) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseLeave"];
            const handleMouseMove = {
                "ParticleCard.useEffect.handleMouseMove": (e)=>{
                    if (!enableTilt && !enableMagnetism) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    if (enableTilt) {
                        const rotateX = (y - centerY) / centerY * -10;
                        const rotateY = (x - centerX) / centerX * 10;
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX,
                            rotateY,
                            duration: 0.1,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                    if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;
                        magnetismAnimationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: magnetX,
                            y: magnetY,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseMove"];
            const handleClick = {
                "ParticleCard.useEffect.handleClick": (e)=>{
                    if (!clickEffect) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                    const ripple = document.createElement("div");
                    ripple.style.cssText = "\n        position: absolute;\n        width: ".concat(maxDistance * 2, "px;\n        height: ").concat(maxDistance * 2, "px;\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(").concat(glowColor, ", 0.4) 0%, rgba(").concat(glowColor, ", 0.2) 30%, transparent 70%);\n        left: ").concat(x - maxDistance, "px;\n        top: ").concat(y - maxDistance, "px;\n        pointer-events: none;\n        z-index: 1000;\n      ");
                    element.appendChild(ripple);
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ripple, {
                        scale: 0,
                        opacity: 1
                    }, {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        onComplete: {
                            "ParticleCard.useEffect.handleClick": ()=>ripple.remove()
                        }["ParticleCard.useEffect.handleClick"]
                    });
                }
            }["ParticleCard.useEffect.handleClick"];
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("click", handleClick);
            return ({
                "ParticleCard.useEffect": ()=>{
                    isHoveredRef.current = false;
                    element.removeEventListener("mouseenter", handleMouseEnter);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                    element.removeEventListener("mousemove", handleMouseMove);
                    element.removeEventListener("click", handleClick);
                    clearAllParticles();
                }
            })["ParticleCard.useEffect"];
        }
    }["ParticleCard.useEffect"], [
        animateParticles,
        clearAllParticles,
        disableAnimations,
        enableTilt,
        enableMagnetism,
        clickEffect,
        glowColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "".concat(className, " particle-container"),
        style: {
            ...style,
            position: "relative",
            overflow: "hidden"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/my-app/components/MagicBento.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticleCard, "8H+Z7UUSOy00JZLTsdrtDvxLl+c=");
_c = ParticleCard;
const GlobalSpotlight = (param)=>{
    let { gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR } = param;
    _s1();
    const spotlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInsideSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSpotlight.useEffect": ()=>{
            if (disableAnimations || !(gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) || !enabled) return;
            const spotlight = document.createElement("div");
            spotlight.className = "global-spotlight";
            spotlight.style.cssText = "\n      position: fixed;\n      width: 800px;\n      height: 800px;\n      border-radius: 50%;\n      pointer-events: none;\n      background: radial-gradient(circle,\n        rgba(".concat(glowColor, ", 0.15) 0%,\n        rgba(").concat(glowColor, ", 0.08) 15%,\n        rgba(").concat(glowColor, ", 0.04) 25%,\n        rgba(").concat(glowColor, ", 0.02) 40%,\n        rgba(").concat(glowColor, ", 0.01) 65%,\n        transparent 70%\n      );\n      z-index: 200;\n      opacity: 0;\n      transform: translate(-50%, -50%);\n      mix-blend-mode: screen;\n    ");
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;
            const handleMouseMove = {
                "GlobalSpotlight.useEffect.handleMouseMove": (e)=>{
                    if (!spotlightRef.current || !gridRef.current) return;
                    const section = gridRef.current.closest(".bento-section");
                    const rect = section === null || section === void 0 ? void 0 : section.getBoundingClientRect();
                    const mouseInside = !!rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
                    isInsideSection.current = mouseInside || false;
                    const cards = gridRef.current.querySelectorAll(".card");
                    if (!mouseInside) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        cards.forEach({
                            "GlobalSpotlight.useEffect.handleMouseMove": (card)=>{
                                card.style.setProperty("--glow-intensity", "0");
                            }
                        }["GlobalSpotlight.useEffect.handleMouseMove"]);
                        return;
                    }
                    const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                    let minDistance = Infinity;
                    cards.forEach({
                        "GlobalSpotlight.useEffect.handleMouseMove": (card)=>{
                            const cardRect = card.getBoundingClientRect();
                            const centerX = cardRect.left + cardRect.width / 2;
                            const centerY = cardRect.top + cardRect.height / 2;
                            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                            const effectiveDistance = Math.max(0, distance);
                            minDistance = Math.min(minDistance, effectiveDistance);
                            let glowIntensity = 0;
                            if (effectiveDistance <= proximity) {
                                glowIntensity = 1;
                            } else if (effectiveDistance <= fadeDistance) {
                                glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                            }
                            updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                        }
                    }["GlobalSpotlight.useEffect.handleMouseMove"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        left: e.clientX,
                        top: e.clientY,
                        duration: 0.1,
                        ease: "power2.out"
                    });
                    const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? (fadeDistance - minDistance) / (fadeDistance - proximity) * 0.8 : 0;
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        opacity: targetOpacity,
                        duration: targetOpacity > 0 ? 0.2 : 0.5,
                        ease: "power2.out"
                    });
                }
            }["GlobalSpotlight.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "GlobalSpotlight.useEffect.handleMouseLeave": ()=>{
                    var _gridRef_current;
                    isInsideSection.current = false;
                    (_gridRef_current = gridRef.current) === null || _gridRef_current === void 0 ? void 0 : _gridRef_current.querySelectorAll(".card").forEach({
                        "GlobalSpotlight.useEffect.handleMouseLeave": (card)=>{
                            card.style.setProperty("--glow-intensity", "0");
                        }
                    }["GlobalSpotlight.useEffect.handleMouseLeave"]);
                    if (spotlightRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["GlobalSpotlight.useEffect.handleMouseLeave"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "GlobalSpotlight.useEffect": ()=>{
                    var _spotlightRef_current;
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                    if ((_spotlightRef_current = spotlightRef.current) === null || _spotlightRef_current === void 0 ? void 0 : _spotlightRef_current.parentNode) {
                        spotlightRef.current.parentNode.removeChild(spotlightRef.current);
                    }
                }
            })["GlobalSpotlight.useEffect"];
        }
    }["GlobalSpotlight.useEffect"], [
        gridRef,
        disableAnimations,
        enabled,
        spotlightRadius,
        glowColor
    ]);
    return null;
};
_s1(GlobalSpotlight, "T4X9HpgVM7a5ZqCd6QjO7E5uETY=");
_c1 = GlobalSpotlight;
const BentoCardGrid = (param)=>{
    let { children, gridRef } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-grid bento-section",
        ref: gridRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/my-app/components/MagicBento.tsx",
        lineNumber: 487,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = BentoCardGrid;
const useMobileDetection = ()=>{
    _s2();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileDetection.useEffect": ()=>{
            const checkMobile = {
                "useMobileDetection.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
            }["useMobileDetection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "useMobileDetection.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["useMobileDetection.useEffect"];
        }
    }["useMobileDetection.useEffect"], []);
    return isMobile;
};
_s2(useMobileDetection, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
const MagicBento = (param)=>{
    let { textAutoHide = true, enableStars = true, enableSpotlight = true, enableBorderGlow = true, disableAnimations = false, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, particleCount = DEFAULT_PARTICLE_COUNT, enableTilt = false, glowColor = DEFAULT_GLOW_COLOR, clickEffect = true, enableMagnetism = true } = param;
    _s3();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            enableSpotlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalSpotlight, {
                gridRef: gridRef,
                disableAnimations: shouldDisableAnimations,
                enabled: enableSpotlight,
                spotlightRadius: spotlightRadius,
                glowColor: glowColor
            }, void 0, false, {
                fileName: "[project]/my-app/components/MagicBento.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BentoCardGrid, {
                gridRef: gridRef,
                children: cardData.map((card, index)=>{
                    const baseClassName = "card ".concat(textAutoHide ? "card--text-autohide" : "", " ").concat(enableBorderGlow ? "card--border-glow" : "").trim();
                    const cardProps = {
                        className: baseClassName,
                        style: {
                            backgroundColor: card.color,
                            "--glow-color": glowColor
                        }
                    };
                    if (enableStars) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleCard, {
                            ...cardProps,
                            disableAnimations: shouldDisableAnimations,
                            particleCount: particleCount,
                            glowColor: glowColor,
                            enableTilt: enableTilt,
                            clickEffect: clickEffect,
                            enableMagnetism: enableMagnetism,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card__header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card__label",
                                        children: card.label
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/components/MagicBento.tsx",
                                        lineNumber: 574,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/MagicBento.tsx",
                                    lineNumber: 573,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card__content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "card__title",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/components/MagicBento.tsx",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "card__description",
                                            children: card.description
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/components/MagicBento.tsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-app/components/MagicBento.tsx",
                                    lineNumber: 576,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/my-app/components/MagicBento.tsx",
                            lineNumber: 563,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ...cardProps,
                        ref: (el)=>{
                            if (!el) return;
                            const handleMouseMove = (e)=>{
                                if (shouldDisableAnimations) return;
                                const rect = el.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const centerX = rect.width / 2;
                                const centerY = rect.height / 2;
                                if (enableTilt) {
                                    const rotateX = (y - centerY) / centerY * -10;
                                    const rotateY = (x - centerX) / centerX * 10;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                        rotateX,
                                        rotateY,
                                        duration: 0.1,
                                        ease: "power2.out",
                                        transformPerspective: 1000
                                    });
                                }
                                if (enableMagnetism) {
                                    const magnetX = (x - centerX) * 0.05;
                                    const magnetY = (y - centerY) * 0.05;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                        x: magnetX,
                                        y: magnetY,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }
                            };
                            const handleMouseLeave = ()=>{
                                if (shouldDisableAnimations) return;
                                if (enableTilt) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                        rotateX: 0,
                                        rotateY: 0,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }
                                if (enableMagnetism) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                        x: 0,
                                        y: 0,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }
                            };
                            const handleClick = (e)=>{
                                if (!clickEffect || shouldDisableAnimations) return;
                                const rect = el.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                                const ripple = document.createElement("div");
                                ripple.style.cssText = "\n                    position: absolute;\n                    width: ".concat(maxDistance * 2, "px;\n                    height: ").concat(maxDistance * 2, "px;\n                    border-radius: 50%;\n                    background: radial-gradient(circle, rgba(").concat(glowColor, ", 0.4) 0%, rgba(").concat(glowColor, ", 0.2) 30%, transparent 70%);\n                    left: ").concat(x - maxDistance, "px;\n                    top: ").concat(y - maxDistance, "px;\n                    pointer-events: none;\n                    z-index: 1000;\n                  ");
                                el.appendChild(ripple);
                                __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ripple, {
                                    scale: 0,
                                    opacity: 1
                                }, {
                                    scale: 1,
                                    opacity: 0,
                                    duration: 0.8,
                                    ease: "power2.out",
                                    onComplete: ()=>ripple.remove()
                                });
                            };
                            el.addEventListener("mousemove", handleMouseMove);
                            el.addEventListener("mouseleave", handleMouseLeave);
                            el.addEventListener("click", handleClick);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card__header",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card__label",
                                    children: card.label
                                }, void 0, false, {
                                    fileName: "[project]/my-app/components/MagicBento.tsx",
                                    lineNumber: 697,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/my-app/components/MagicBento.tsx",
                                lineNumber: 696,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card__content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "card__title",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/components/MagicBento.tsx",
                                        lineNumber: 700,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card__description",
                                        children: card.description
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/components/MagicBento.tsx",
                                        lineNumber: 701,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/components/MagicBento.tsx",
                                lineNumber: 699,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/my-app/components/MagicBento.tsx",
                        lineNumber: 585,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/my-app/components/MagicBento.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s3(MagicBento, "XUa7xZJiDL4EXgyb7a00zBxNt6w=", false, function() {
    return [
        useMobileDetection
    ];
});
_c3 = MagicBento;
const __TURBOPACK__default__export__ = MagicBento;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ParticleCard");
__turbopack_context__.k.register(_c1, "GlobalSpotlight");
__turbopack_context__.k.register(_c2, "BentoCardGrid");
__turbopack_context__.k.register(_c3, "MagicBento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/AnimatedContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$MagicBento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/MagicBento.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ClickSpark.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sparkColor: "#ffffff",
        sparkSize: 10,
        sparkRadius: 15,
        sparkCount: 10,
        duration: 450,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "px-6 sm:px-10 py-10 mx-auto max-w-6xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    distance: 80,
                    direction: "vertical",
                    duration: 0.8,
                    initialOpacity: 0,
                    animateOpacity: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/projects/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$MagicBento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            textAutoHide: true,
                            enableStars: true,
                            enableSpotlight: true,
                            enableBorderGlow: true,
                            enableTilt: true,
                            enableMagnetism: true,
                            clickEffect: true,
                            spotlightRadius: 300,
                            particleCount: 12,
                            glowColor: "132, 0, 255"
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/projects/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/projects/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/projects/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-app/app/projects/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/projects/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-app_5ae6bf7b._.js.map