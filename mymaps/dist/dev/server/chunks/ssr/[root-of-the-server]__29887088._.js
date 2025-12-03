module.exports = [
"[project]/mymaps/src/data/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===========================================
// TYPE DEFINITIONS
// ===========================================
__turbopack_context__.s([
    "SPHERE_COLORS",
    ()=>SPHERE_COLORS,
    "SPHERE_LABELS",
    ()=>SPHERE_LABELS
]);
const SPHERE_COLORS = {
    RED_CORE: '#8B0000',
    RED_ALLY: '#CD5C5C',
    RED_TIE: '#FF8C00',
    RED_WEAK: '#F0E68C',
    BLUE_CORE: '#00008B',
    BLUE_ALLY: '#87CEEB',
    BLUE_SURR: '#90EE90',
    NEUTRAL_STRONG: '#4F4F4F',
    NEUTRAL_WEAK: '#2C2C2C'
};
const SPHERE_LABELS = {
    RED_CORE: 'Red Core (Aggressor)',
    RED_ALLY: 'Red Ally',
    RED_TIE: 'Red Tie (Economic)',
    RED_WEAK: 'Red Weak',
    BLUE_CORE: 'Blue Core (NATO)',
    BLUE_ALLY: 'Blue Ally',
    BLUE_SURR: 'Blue Surrounded',
    NEUTRAL_STRONG: 'Neutral Strong',
    NEUTRAL_WEAK: 'Neutral'
};
}),
"[project]/mymaps/src/components/MapViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$src$2f$data$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/src/data/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function MapViewer({ mapData }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scriptLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scriptLoadedRef.current) return;
        const loadScript = (src)=>{
            return new Promise((resolve, reject)=>{
                const script = document.createElement('script');
                script.src = src;
                script.onload = ()=>resolve();
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };
        const initMap = async ()=>{
            try {
                // Load Highcharts if not already loaded
                if (!window.Highcharts) {
                    await loadScript('https://code.highcharts.com/maps/highmaps.js');
                    await loadScript('https://code.highcharts.com/maps/modules/exporting.js');
                }
                // Load the specific map
                const mapUrl = `https://code.highcharts.com/mapdata/${mapData.config.mapPath}.js`;
                await loadScript(mapUrl);
                scriptLoadedRef.current = true;
                // Get map key
                const mapKey = Object.keys(window.Highcharts.maps)[0];
                if (!mapKey || !containerRef.current) return;
                // Prepare data
                const chartData = mapData.countries.map((c)=>({
                        code: c.code,
                        name: c.name,
                        role: c.role,
                        color: c.color || __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$src$2f$data$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPHERE_COLORS"][c.sphere]
                    }));
                // Render map
                window.Highcharts.mapChart(containerRef.current, {
                    chart: {
                        map: window.Highcharts.maps[mapKey],
                        backgroundColor: '#121212'
                    },
                    title: {
                        text: ''
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom',
                            theme: {
                                fill: '#333',
                                stroke: '#444',
                                style: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        borderColor: '#666',
                        style: {
                            color: '#fff'
                        },
                        formatter: function() {
                            if (this.point.role) {
                                return `<b>${this.point.name}</b><br><span style="color:${this.point.color}">${this.point.role}</span>`;
                            }
                            return `<b>${this.point.name}</b><br>Neutral`;
                        }
                    },
                    series: [
                        {
                            data: chartData,
                            joinBy: [
                                mapData.config.joinBy,
                                'code'
                            ],
                            name: 'Strategic',
                            nullColor: '#2C2C2C',
                            borderColor: '#444',
                            borderWidth: 0.5,
                            states: {
                                hover: {
                                    color: '#fff',
                                    borderColor: '#fff'
                                }
                            }
                        }
                    ]
                });
            } catch (error) {
                console.error('Error loading map:', error);
            }
        };
        initMap();
    }, [
        mapData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            height: 'calc(100vh - 200px)',
            minHeight: '400px',
            margin: '20px',
            border: '1px solid #333',
            borderRadius: '8px'
        }
    }, void 0, false, {
        fileName: "[project]/mymaps/src/components/MapViewer.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/mymaps/src/components/ClientCityMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientCityMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
const CityMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/mymaps/src/components/CityMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: 'calc(100vh - 200px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            children: "Loading Map..."
        }, void 0, false, {
            fileName: "[project]/mymaps/src/components/ClientCityMap.tsx",
            lineNumber: 7,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
function ClientCityMap() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CityMap, {}, void 0, false, {
        fileName: "[project]/mymaps/src/components/ClientCityMap.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/mymaps/src/components/Legend.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Legend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$src$2f$data$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mymaps/src/data/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
const sphereOrder = [
    'RED_CORE',
    'RED_ALLY',
    'RED_TIE',
    'RED_WEAK',
    'BLUE_CORE',
    'BLUE_ALLY',
    'BLUE_SURR',
    'NEUTRAL_STRONG',
    'NEUTRAL_WEAK'
];
function Legend() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "legend",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "legend__title",
                children: "Color Legend"
            }, void 0, false, {
                fileName: "[project]/mymaps/src/components/Legend.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "legend__grid",
                children: sphereOrder.map((sphere)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "legend__item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "legend__dot",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$src$2f$data$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPHERE_COLORS"][sphere]
                                }
                            }, void 0, false, {
                                fileName: "[project]/mymaps/src/components/Legend.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$mymaps$2f$src$2f$data$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPHERE_LABELS"][sphere]
                        ]
                    }, sphere, true, {
                        fileName: "[project]/mymaps/src/components/Legend.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/mymaps/src/components/Legend.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mymaps/src/components/Legend.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__29887088._.js.map