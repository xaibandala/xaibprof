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
"[project]/my-app/components/ProjectCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const ProjectCard = ({ title, description, technologies, imageUrl, demoUrl, githubUrl, details: _details, moreImages: _moreImages = [] })=>{
    const liveLink = demoUrl ?? githubUrl;
    const isUsingGithubAsDemo = !demoUrl && !!githubUrl;
    const areLinksIdentical = !!demoUrl && !!githubUrl && demoUrl === githubUrl;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 cursor-pointer h-full flex flex-col",
        "aria-label": `${title}`,
        children: [
            imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-4 rounded-lg overflow-hidden bg-foreground/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageUrl,
                    alt: title,
                    className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                }, void 0, false, {
                    fileName: "[project]/my-app/components/ProjectCard.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/my-app/components/ProjectCard.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold mb-3 group-hover:text-foreground/90 transition-colors",
                children: title
            }, void 0, false, {
                fileName: "[project]/my-app/components/ProjectCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-foreground/70 mb-4 leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/my-app/components/ProjectCard.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-6",
                children: technologies.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors",
                        children: tech
                    }, index, false, {
                        fileName: "[project]/my-app/components/ProjectCard.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/my-app/components/ProjectCard.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mt-auto",
                children: [
                    liveLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: liveLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e)=>e.stopPropagation(),
                        className: "flex-1 bg-foreground text-background px-4 py-2 rounded-lg font-medium text-center hover:bg-foreground/90 transition-colors",
                        children: "Live Demo"
                    }, void 0, false, {
                        fileName: "[project]/my-app/components/ProjectCard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: true,
                        className: "flex-1 bg-foreground/30 text-background/80 px-4 py-2 rounded-lg font-medium text-center cursor-not-allowed",
                        children: "Live Demo"
                    }, void 0, false, {
                        fileName: "[project]/my-app/components/ProjectCard.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    githubUrl && !isUsingGithubAsDemo && !areLinksIdentical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: githubUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e)=>e.stopPropagation(),
                        className: "flex-1 border border-foreground/20 text-foreground px-4 py-2 rounded-lg font-medium text-center hover:border-foreground/40 hover:bg-foreground/5 transition-colors",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/my-app/components/ProjectCard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/components/ProjectCard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/components/ProjectCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProjectCard;
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
"[project]/my-app/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        title: "Simple Blog System",
        description: "A simple and clean blog system built with PHP backend, featuring dynamic content management, responsive design, and interactive user interface elements.",
        technologies: [
            "PHP",
            "JavaScript",
            "CSS"
        ],
        imageUrl: "/blog1.jpg",
        details: "This project is a lightweight blog platform supporting posts, categories, and comments. It focuses on clean architecture, SEO-friendly pages, and an intuitive authoring experience. The backend is written in PHP with templated views, and the UI is responsive with accessible components.",
        moreImages: [
            "/blog1.jpg",
            "/blog2.jpg",
            "/blog3.jpg"
        ],
        demoUrl: "https://example.com/ui-portfolio",
        githubUrl: "https://github.com/xaibandala/blog"
    },
    {
        title: "php-enrollment-system",
        description: "A PHP-based enrollment system with student enrollment, admin dashboard, login/OTP, and email notifications using PHPMailer.",
        technologies: [
            "PHP"
        ],
        imageUrl: "/enroll1.jpg",
        details: "The dashboard aggregates metrics from multiple sources and renders them with Chart.js. It supports theming, keyboard navigation, and animated transitions powered by Framer Motion/Tailwind. State management uses lightweight hooks and memoized selectors.",
        moreImages: [
            "/blog2.jpg",
            "/blog3.jpg",
            "/blog4.jpg"
        ],
        demoUrl: "https://example.com/dashboard",
        githubUrl: "https://github.com/xaibandala/php-enrollment-system"
    },
    {
        title: "LOML: A Digital Love Story",
        description: "A thoughtfully designed personal web page that documents a couple’s journey, showcasing key milestones, meaningful experiences, and memorable moments in a digital storytelling format.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        imageUrl: "/loml1.jpg",
        details: "High-fidelity mobile app concepts including onboarding, auth, and core flows. Emphasis on color contrast, tap targets, and motion to guide attention. Includes component variants and design tokens for scalability.",
        moreImages: [
            "/blog3.jpg",
            "/blog2.jpg"
        ],
        demoUrl: "https://lomlat5.vercel.app/",
        githubUrl: "https://github.com/xaibandala/lomlat5"
    },
    {
        title: "Money Tools by Xai",
        description: "A lightweight, responsive set of money utilities built with Bootstrap 5. Includes a Percentage Calculator and a Basic Calculator. The app supports light/dark themes with a persistent toggle and works entirely offline using static HTML.",
        technologies: [
            "HTML"
        ],
        imageUrl: "/money.jpg",
        details: "Feature set includes product catalog, faceted search, cart, checkout with Stripe, and order history. Built with API routes, incremental static regeneration, and a modular data layer for maintainability.",
        moreImages: [
            "/blog4.jpg",
            "/blog2.jpg"
        ],
        demoUrl: "https://xaicalc.netlify.app/",
        githubUrl: "https://github.com/xaibandala/moneycalc"
    },
    {
        title: "Design System Library",
        description: "A comprehensive design system and component library built to ensure consistency across multiple projects, featuring reusable components and design tokens.",
        technologies: [
            "Figma",
            "Storybook",
            "React",
            "Design Tokens"
        ],
        imageUrl: "https://picsum.photos/seed/design-system/600/400",
        details: "Token-driven UI kit with foundations (color, spacing, typography) and accessible components documented in Storybook. Includes usage guidelines, code examples, and visual regression testing setup.",
        moreImages: [
            "/blog2.jpg",
            "/blog3.jpg"
        ],
        demoUrl: "https://example.com/design-system",
        githubUrl: "https://github.com/xaibandala/design-system-library"
    },
    {
        title: "Portfolio Website",
        description: "This very website you're viewing! A modern, animated portfolio showcasing my work with smooth interactions, responsive design, and optimized performance.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        imageUrl: "https://picsum.photos/seed/portfolio/600/400",
        details: "Built with Next.js App Router, TypeScript, and Tailwind. Page transitions and micro-interactions are implemented with Framer Motion and custom hooks. Optimized for CLS/LCP and accessible navigation.",
        moreImages: [
            "/blog3.jpg",
            "/blog4.jpg"
        ],
        demoUrl: "https://example.com/dashboard",
        githubUrl: "https://github.com/xaibandala/portfolio-website"
    }
];
}),
"[project]/my-app/components/TargetCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
const TargetCursor = ({ targetSelector = ".cursor-target", spinDuration = 2, hideDefaultCursor = true })=>{
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cornersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const constants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            borderWidth: 3,
            cornerSize: 12,
            parallaxStrength: 0.00005
        }), []);
    const moveCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y)=>{
        if (!cursorRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
            x,
            y,
            duration: 0.1,
            ease: "power3.out"
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const cleanupTarget = (target)=>{
            if (currentTargetMove) {
                target.removeEventListener("mousemove", currentTargetMove);
            }
            if (currentLeaveHandler) {
                target.removeEventListener("mouseleave", currentLeaveHandler);
            }
            currentTargetMove = null;
            currentLeaveHandler = null;
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursor, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });
        const createSpinTimeline = ()=>{
            if (spinTl.current) {
                spinTl.current.kill();
            }
            spinTl.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                repeat: -1
            }).to(cursor, {
                rotation: "+=360",
                duration: spinDuration,
                ease: "none"
            });
        };
        createSpinTimeline();
        const moveHandler = (e)=>moveCursor(e.clientX, e.clientY);
        window.addEventListener("mousemove", moveHandler);
        const scrollHandler = ()=>{
            if (!activeTarget || !cursorRef.current) return;
            const mouseX = Number(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(cursorRef.current, "x"));
            const mouseY = Number(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(cursorRef.current, "y"));
            const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
            const isStillOverTarget = elementUnderMouse && (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);
            if (!isStillOverTarget) {
                if (currentLeaveHandler) {
                    currentLeaveHandler();
                }
            }
        };
        window.addEventListener("scroll", scrollHandler, {
            passive: true
        });
        // Click scale animation
        const mouseDownHandler = ()=>{
            if (!dotRef.current || !cursorRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dotRef.current, {
                scale: 0.7,
                duration: 0.3
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                scale: 0.9,
                duration: 0.2
            });
        };
        const mouseUpHandler = ()=>{
            if (!dotRef.current || !cursorRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dotRef.current, {
                scale: 1,
                duration: 0.3
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                scale: 1,
                duration: 0.2
            });
        };
        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);
        const enterHandler = (e)=>{
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
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(cursorRef.current, "rotation");
            spinTl.current?.pause();
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                rotation: 0
            });
            const updateCorners = (mouseX, mouseY)=>{
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
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
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
                corners.forEach((corner, index)=>{
                    tl.to(corner, {
                        x: offsets[index].x,
                        y: offsets[index].y,
                        duration: 0.2,
                        ease: "power2.out"
                    }, 0);
                });
            };
            isAnimatingToTarget = true;
            updateCorners();
            setTimeout(()=>{
                isAnimatingToTarget = false;
            }, 1);
            let moveThrottle = null;
            const targetMove = (ev)=>{
                if (moveThrottle || isAnimatingToTarget) return;
                moveThrottle = requestAnimationFrame(()=>{
                    const mouseEvent = ev;
                    updateCorners(mouseEvent.clientX, mouseEvent.clientY);
                    moveThrottle = null;
                });
            };
            const leaveHandler = ()=>{
                activeTarget = null;
                isAnimatingToTarget = false;
                if (cornersRef.current) {
                    const corners = Array.from(cornersRef.current);
                    __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(corners);
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
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                    corners.forEach((corner, index)=>{
                        tl.to(corner, {
                            x: positions[index].x,
                            y: positions[index].y,
                            duration: 0.3,
                            ease: "power3.out"
                        }, 0);
                    });
                }
                resumeTimeout = window.setTimeout(()=>{
                    if (!activeTarget && cursorRef.current && spinTl.current) {
                        const currentRotation = Number(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(cursorRef.current, "rotation"));
                        const normalizedRotation = currentRotation % 360;
                        spinTl.current.kill();
                        spinTl.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            repeat: -1
                        }).to(cursorRef.current, {
                            rotation: "+=360",
                            duration: spinDuration,
                            ease: "none"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                            rotation: normalizedRotation + 360,
                            duration: spinDuration * (1 - normalizedRotation / 360),
                            ease: "none",
                            onComplete: ()=>{
                                spinTl.current?.restart();
                            }
                        });
                    }
                    resumeTimeout = null;
                }, 50);
                cleanupTarget(target);
            };
            currentTargetMove = targetMove;
            currentLeaveHandler = leaveHandler;
            target.addEventListener("mousemove", targetMove);
            target.addEventListener("mouseleave", leaveHandler);
        };
        window.addEventListener("mouseover", enterHandler, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseover", enterHandler);
            window.removeEventListener("scroll", scrollHandler);
            if (activeTarget) {
                cleanupTarget(activeTarget);
            }
            spinTl.current?.kill();
            document.body.style.cursor = originalCursor;
        };
    }, [
        targetSelector,
        spinDuration,
        moveCursor,
        constants,
        hideDefaultCursor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!cursorRef.current || !spinTl.current) return;
        if (spinTl.current.isActive()) {
            spinTl.current.kill();
            spinTl.current = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                repeat: -1
            }).to(cursorRef.current, {
                rotation: "+=360",
                duration: spinDuration,
                ease: "none"
            });
        }
    }, [
        spinDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: "target-cursor-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "target-cursor-dot"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-tl"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-tr"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "target-cursor-corner corner-br"
            }, void 0, false, {
                fileName: "[project]/my-app/components/TargetCursor.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = TargetCursor;
}),
"[project]/my-app/app/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/AnimatedContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ProjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/ClickSpark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/SplitText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$TargetCursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/components/TargetCursor.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ClickSpark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        sparkColor: "#ffffff",
        sparkSize: 10,
        sparkRadius: 15,
        sparkCount: 10,
        duration: 450,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "px-6 sm:px-10 py-10 mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$TargetCursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    spinDuration: 2,
                    hideDefaultCursor: true
                }, void 0, false, {
                    fileName: "[project]/my-app/app/projects/page.tsx",
                    lineNumber: 15,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            distance: 80,
                            direction: "vertical",
                            duration: 1.2,
                            initialOpacity: 0,
                            animateOpacity: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 sm:mb-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$SplitText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        text: "My Projects",
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
                                        fileName: "[project]/my-app/app/projects/page.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-300/90 leading-relaxed",
                                        children: "These are some of the websites I’ve made using HTML, CSS, and JavaScript. Each project is a reflection of my practice, creativity, and willingness to explore new ideas. Through building them, I was able to sharpen my coding skills, experiment with different designs, and bring concepts to life. They represent my journey of learning step by step while enjoying the process of creating something functional and fun."
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/projects/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/projects/page.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/projects/page.tsx",
                            lineNumber: 17,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$AnimatedContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    distance: 60,
                                    direction: "vertical",
                                    duration: 0.6,
                                    initialOpacity: 0,
                                    animateOpacity: true,
                                    delay: idx * 0.1,
                                    className: "h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-target h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            title: p.title,
                                            description: p.description,
                                            technologies: p.technologies,
                                            imageUrl: p.imageUrl,
                                            details: p.details,
                                            moreImages: p.moreImages,
                                            demoUrl: p.demoUrl,
                                            githubUrl: p.githubUrl
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/projects/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/projects/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, `${p.title}-${idx}`, false, {
                                    fileName: "[project]/my-app/app/projects/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/projects/page.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/projects/page.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/projects/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/projects/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=my-app_976bf7b2._.js.map