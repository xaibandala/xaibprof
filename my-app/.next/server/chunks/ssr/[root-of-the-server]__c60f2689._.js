module.exports = [
"[project]/my-app/.next-internal/server/app/projects/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/my-app/app/favicon.ico.mjs { IMAGE => \"[project]/my-app/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-app/app/favicon.ico.mjs { IMAGE => \"[project]/my-app/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/my-app/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-app/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/my-app/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "simple-blog-system",
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
        githubUrl: "https://github.com/xaibandala/blog",
        status: "completed"
    },
    {
        slug: "interactive-dashboard",
        title: "Interactive Dashboard",
        description: "A responsive web dashboard with real-time data visualization, featuring clean animations and intuitive user interactions built with modern web technologies.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Chart.js"
        ],
        imageUrl: "https://picsum.photos/seed/dashboard/600/400",
        details: "The dashboard aggregates metrics from multiple sources and renders them with Chart.js. It supports theming, keyboard navigation, and animated transitions powered by Framer Motion/Tailwind. State management uses lightweight hooks and memoized selectors.",
        moreImages: [
            "/blog2.jpg",
            "/blog3.jpg",
            "/blog4.jpg"
        ],
        demoUrl: "https://example.com/dashboard",
        githubUrl: "https://github.com/xaibandala/interactive-dashboard",
        status: "completed"
    },
    {
        slug: "mobile-app-design",
        title: "Mobile App Design",
        description: "A sleek mobile application design focusing on user experience and accessibility, featuring smooth micro-interactions and modern design patterns.",
        technologies: [
            "Figma",
            "Mobile Design",
            "Micro-interactions",
            "Accessibility"
        ],
        imageUrl: "https://picsum.photos/seed/mobile-app/600/400",
        details: "High-fidelity mobile app concepts including onboarding, auth, and core flows. Emphasis on color contrast, tap targets, and motion to guide attention. Includes component variants and design tokens for scalability.",
        moreImages: [
            "/blog3.jpg",
            "/blog2.jpg"
        ],
        demoUrl: "https://example.com/mobile-app",
        githubUrl: "https://github.com/xaibandala/mobile-app-design",
        status: "in-progress"
    },
    {
        slug: "ecommerce-platform",
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with modern UI design, secure payment integration, and optimized user experience for both desktop and mobile.",
        technologies: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Stripe"
        ],
        imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
        details: "Feature set includes product catalog, faceted search, cart, checkout with Stripe, and order history. Built with API routes, incremental static regeneration, and a modular data layer for maintainability.",
        moreImages: [
            "/blog4.jpg",
            "/blog2.jpg"
        ],
        githubUrl: "https://github.com/xaibandala/ecommerce-platform",
        status: "planned"
    },
    {
        slug: "design-system-library",
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
        githubUrl: "https://github.com/xaibandala/design-system-library",
        status: "completed"
    },
    {
        slug: "portfolio-website",
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
        githubUrl: "https://github.com/xaibandala/portfolio-website",
        status: "completed"
    }
];
}),
"[project]/my-app/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/data/projects.ts [app-rsc] (ecmascript)");
;
;
;
;
function ProjectDetailPage({ params }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === params.slug);
    if (!project) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-6 sm:px-10 py-10 mx-auto max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/projects",
                    className: "text-sm text-foreground/70 hover:text-foreground",
                    children: "← Back to Projects"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-2",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-foreground/5 border-foreground/15 text-foreground/80",
                        children: project.status.replace("-", " ")
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            project.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl overflow-hidden border border-foreground/10 mb-6 bg-foreground/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: project.imageUrl,
                    alt: `${project.title} cover`,
                    className: "w-full h-64 object-cover"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-2",
                        children: "Overview"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground/80 leading-relaxed",
                        children: project.details || project.description
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Technologies"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm",
                                children: tech
                            }, tech, false, {
                                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            project.moreImages && project.moreImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3",
                        children: "Gallery"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                        children: project.moreImages.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg overflow-hidden bg-foreground/5 border border-foreground/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src,
                                    alt: `${project.title} ${i + 1}`,
                                    className: "w-full h-40 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    project.demoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.demoUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 sm:flex-none sm:px-6 sm:py-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium text-center hover:bg-foreground/90 transition-colors",
                        children: "Live Demo"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.githubUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 sm:flex-none sm:px-6 sm:py-2 px-4 py-2 border border-foreground/20 text-foreground rounded-lg font-medium text-center hover:border-foreground/40 hover:bg-foreground/5 transition-colors",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/projects/[slug]/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-app/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-app/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c60f2689._.js.map