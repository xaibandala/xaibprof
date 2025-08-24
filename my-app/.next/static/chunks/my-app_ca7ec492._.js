(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-app/data/certificates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certificates",
    ()=>certificates,
    "getCertificateBySlug",
    ()=>getCertificateBySlug
]);
const certificates = [
    {
        slug: 'ui-ux-design-professional',
        title: 'UI/UX Design Professional',
        issuer: 'Google UX Design',
        imageUrl: '/grtlearning.jpg',
        certificateUrl: '/certificates/great-learning-ui-ux-beginner-certificate.pdf',
        description: 'Professional certificate covering the foundations of UX research, prototyping, and usability.'
    },
    {
        slug: 'figma-advanced-prototyping',
        title: 'Figma Advanced Prototyping',
        issuer: 'Figma Academy',
        imageUrl: 'https://picsum.photos/seed/figma/400/300',
        certificateUrl: 'https://example.com/certificate/2',
        description: 'Advanced prototyping techniques in Figma including interactive components and variables.'
    },
    {
        slug: 'design-systems-fundamentals',
        title: 'Design Systems Fundamentals',
        issuer: 'Design Systems University',
        imageUrl: 'https://picsum.photos/seed/design-systems/400/300',
        certificateUrl: 'https://example.com/certificate/3',
        description: 'Principles of scalable design systems, tokens, and governance.'
    },
    {
        slug: 'user-research-and-testing',
        title: 'User Research & Testing',
        issuer: 'Nielsen Norman Group',
        imageUrl: 'https://picsum.photos/seed/user-research/400/300',
        certificateUrl: 'https://example.com/certificate/4',
        description: 'Methods for qualitative and quantitative research, interviews, and usability testing.'
    },
    {
        slug: 'accessibility-in-design',
        title: 'Accessibility in Design',
        issuer: 'W3C Web Accessibility',
        imageUrl: 'https://picsum.photos/seed/accessibility/400/300',
        certificateUrl: 'https://example.com/certificate/5',
        description: 'WCAG guidelines, ARIA, and inclusive design practices.'
    },
    {
        slug: 'mobile-interface-design',
        title: 'Mobile Interface Design',
        issuer: 'Apple Design Resources',
        imageUrl: 'https://picsum.photos/seed/mobile-design/400/300',
        certificateUrl: 'https://example.com/certificate/6',
        description: 'Designing intuitive mobile experiences across iOS and Android.'
    }
];
function getCertificateBySlug(slug) {
    return certificates.find((c)=>c.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/certificates/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificateDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$data$2f$certificates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/data/certificates.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CertificateDetailPage(param) {
    let { params } = param;
    const cert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$data$2f$certificates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCertificateBySlug"])(params.slug);
    if (!cert) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-4 sm:px-8 py-6 sm:py-10 mx-auto max-w-7xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 sm:mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/certificates",
                    className: "text-sm text-blue-500 hover:underline",
                    children: "← Back to Certificates"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full border rounded-lg overflow-hidden bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageWithFallback, {
                    src: cert.imageUrl,
                    alt: "".concat(cert.title, " preview")
                }, void 0, false, {
                    fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = CertificateDetailPage;
function ImageWithFallback(param) {
    let { src, alt } = param;
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (failed) {
        // Plain <img> fallback
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[80vh] flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                className: "max-h-[80vh] w-auto object-contain",
                onError: ()=>{}
            }, void 0, false, {
                fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[80vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            fill: true,
            className: "object-contain",
            sizes: "100vw",
            onError: ()=>setFailed(true)
        }, void 0, false, {
            fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/certificates/[slug]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ImageWithFallback, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c1 = ImageWithFallback;
var _c, _c1;
__turbopack_context__.k.register(_c, "CertificateDetailPage");
__turbopack_context__.k.register(_c1, "ImageWithFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-app_ca7ec492._.js.map