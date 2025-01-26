! function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f51e9c8f-f43c-42ba-bbbc-304f160ea6ed", e._sentryDebugIdIdentifier = "sentry-dbid-f51e9c8f-f43c-42ba-bbbc-304f160ea6ed")
    } catch (e) {}
}(),
function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f51e9c8f-f43c-42ba-bbbc-304f160ea6ed", e._sentryDebugIdIdentifier = "sentry-dbid-f51e9c8f-f43c-42ba-bbbc-304f160ea6ed")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [572], {
        78200: function (e, t, a) {
            "use strict";
            a.d(t, {
                jc: function () {
                    return y
                },
                Lg: function () {
                    return v
                },
                n_: function () {
                    return g
                }
            });
            var s = a(57437),
                l = a(2265),
                n = a(98099),
                r = a(63726),
                i = a(85042),
                o = a(68915),
                d = a(83547),
                c = a.n(d);
            let u = e => {
                let {
                    balance: t,
                    deposit: a,
                    tokenIcon: d,
                    onButtonClick: u,
                    className: x
                } = e, m = a && (0, o.T4)(a), f = (0, o.T4)(t), {
                    title: p,
                    value: y
                } = l.useCallback(() => "0" === m || 0 === m || (0, o.wp)(m) ? {
                    title: "Available Funds:",
                    value: "$".concat(f)
                } : {
                    title: "Your Deposit:",
                    value: "$".concat(m)
                }, [f, m])();
                return (0, s.jsx)("div", {
                    className: (0, n.Z)(c().root, x),
                    "data-sentry-component": "AvailableFunds",
                    "data-sentry-source-file": "AvailableFunds.tsx",
                    children: (0, s.jsxs)("div", {
                        className: c().availableFundsInnerContainer,
                        children: [(0, s.jsxs)("div", {
                            className: c().funds,
                            children: [(0, s.jsx)(i.xv, {
                                className: c().fundsTitle,
                                textView: i.yS.C3,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "AvailableFunds.tsx",
                                children: p
                            }), (0, s.jsxs)(i.xv, {
                                className: c().fundsValue,
                                textView: i.yS.P3,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "AvailableFunds.tsx",
                                children: [(0, s.jsx)("span", {
                                    className: c().tetherIconContainer,
                                    children: d && (0, s.jsx)(r.default, {
                                        src: d,
                                        alt: "",
                                        height: 16,
                                        width: 16
                                    })
                                }), y]
                            })]
                        }), (0, s.jsx)(i.zx, {
                            view: i.r5.Secondary,
                            size: i.qE.Small,
                            className: c().depositButton,
                            onClick: u,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "AvailableFunds.tsx",
                            children: "Deposit"
                        })]
                    })
                })
            };
            var x = a(18586),
                m = a(19081),
                f = a(38),
                p = a.n(f);
            let y = e => {
                var t;
                let {
                    vault: a,
                    userBalance: d,
                    className: c,
                    linkClassName: f,
                    isDisabled: y
                } = e, h = (null === (t = a.tokens) || void 0 === t ? void 0 : t.length) ? a.tokens : [a.token], {
                    isConnected: v
                } = (0, m.Zc)(), [b, g] = l.useState(0), w = l.useRef(null), _ = () => {
                    w.current && g(w.current.offsetWidth)
                };
                return l.useEffect(() => (_(), window.addEventListener("resize", _), () => {
                    window.removeEventListener("resize", _)
                }), []), (0, s.jsxs)(i.rU, {
                    isDisabled: y,
                    className: (0, n.Z)(p().link, f, "relative overflow-hidden"),
                    href: y ? "#" : "/explore/".concat(a.id),
                    "data-sentry-element": "Link",
                    "data-sentry-component": "Vault",
                    "data-sentry-source-file": "Vault.tsx",
                    children: [y && (0, s.jsx)("div", {
                        className: "z-50 absolute size-full backdrop-blur-[5px] flex items-center justify-center",
                        children: (0, s.jsx)("span", {
                            className: "px-2 py-1 text-black bg-white",
                            children: "Coming soon"
                        })
                    }), (0, s.jsxs)("div", {
                        className: (0, n.Z)(p().root, b > 390 && p().large, c),
                        ref: w,
                        children: [(0, s.jsxs)("div", {
                            className: p().titleContainer,
                            children: [(0, s.jsxs)("div", {
                                className: p().title,
                                children: [(0, s.jsx)("div", {
                                    className: "flex flex-row gap-2",
                                    children: h.map(e => {
                                        var t;
                                        return (0, s.jsxs)("div", {
                                            className: p().tokenContainer,
                                            children: [(0, s.jsx)(r.default, {
                                                className: p().tokenicon,
                                                src: null !== (t = e.icon) && void 0 !== t ? t : a.icon,
                                                alt: "",
                                                width: 40,
                                                height: 40
                                            }), (0, s.jsx)("p", {
                                                className: p().tokenName,
                                                children: e.name
                                            })]
                                        })
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col items-center gap-1.5",
                                    children: [(0, s.jsx)(i.UI, {
                                        content: null == a ? void 0 : a.alert_text,
                                        "data-sentry-element": "AlertTooltip",
                                        "data-sentry-source-file": "Vault.tsx"
                                    }), (0, s.jsx)(i.xv, {
                                        textView: i.yS.H4,
                                        className: p().titleText,
                                        "data-sentry-element": "Text",
                                        "data-sentry-source-file": "Vault.tsx",
                                        children: a.name
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: p().chipsContainer,
                                children: a.badges.slice(0, 1).map(e => (0, s.jsx)(i.Af, {
                                    viewType: i.m7.Blue,
                                    children: e.name
                                }, e.name))
                            })]
                        }), v && !(0, o.wp)(d) && (0, s.jsx)(u, {
                            tokenIcon: a.icon,
                            balance: d,
                            deposit: a.balance_usd
                        }), (0, s.jsx)(x.q, {
                            apy: a.apy,
                            cybroPoints: "20",
                            tvl: a.tvl,
                            provider: a.provider.name,
                            viewType: x.z.Card,
                            overallVaultInvestment: a.overall_investments_usd,
                            "data-sentry-element": "VaultStats",
                            "data-sentry-source-file": "Vault.tsx"
                        }), (0, s.jsx)(i.d3, {
                            value: a.trust_score,
                            className: p().trustScore,
                            "data-sentry-element": "TrustScore",
                            "data-sentry-source-file": "Vault.tsx"
                        })]
                    })]
                })
            };
            var h = a(48153);
            let v = () => {
                let {
                    data: e,
                    isLoading: t
                } = (0, h.Vpq)({
                    offset: 0,
                    limit: 3
                }, {
                    query: {
                        select: e => e.data.data
                    }
                });
                return {
                    vaults: e,
                    isLoading: t,
                    vaultSkeletons: Array.from({
                        length: 3
                    }).fill("")
                }
            };
            var b = a(88263);
            let g = () => {
                let {
                    data: e,
                    isLoading: t
                } = (0, h.qbI)({}, {
                    query: {
                        queryKey: [b.S8.AvailableVaults]
                    }
                });
                return {
                    vaults: l.useMemo(() => {
                        var t;
                        return null == e ? void 0 : null === (t = e.data.data) || void 0 === t ? void 0 : t.filter(e => {
                            var t, a;
                            return (null === (t = e.parameter) || void 0 === t ? void 0 : t.manager) === "cybro" && (null === (a = e.parameter) || void 0 === a ? void 0 : a.management_type) === "auto"
                        })
                    }, [e]),
                    isLoading: t,
                    vaultSkeletons: Array.from({
                        length: 3
                    }).fill("")
                }
            }
        },
        18586: function (e, t, a) {
            "use strict";
            a.d(t, {
                q: function () {
                    return x
                },
                z: function () {
                    return l
                }
            });
            var s, l, n = a(57437);
            a(2265);
            var r = a(98099),
                i = a(13380),
                o = a.n(i),
                d = a(85042);
            (s = l || (l = {})).Full = "full", s.Card = "card";
            var c = a(15763),
                u = a.n(c);
            let x = e => {
                let {
                    apy: t,
                    tvl: a,
                    provider: s,
                    overallVaultInvestment: i,
                    viewType: c = l.Card,
                    isLoading: x = !1,
                    className: m
                } = e, f = Number(i || 0), p = o()(null != a ? a : 0).format("0.00a"), y = o()(f).format("0.00a");
                return x ? (0, n.jsx)(d.zq, {
                    className: m
                }) : c === l.Card ? (0, n.jsxs)("div", {
                    className: (0, r.Z)(u().root, u()[c], m),
                    children: [(0, n.jsx)("div", {
                        className: u().cardRow,
                        children: (0, n.jsxs)("div", {
                            className: u().cardTitleContainer,
                            children: [(0, n.jsx)(d.rU, {
                                className: u().cardTitle,
                                viewType: d.tx.Tooltip,
                                tooltipContent: "Vault's APY is calculated as a daily average",
                                tooltipClassName: u().tooltipContent,
                                children: (0, n.jsx)(d.xv, {
                                    textView: d.yS.C3,
                                    className: u().detailsTitle,
                                    children: "APY"
                                })
                            }), (0, n.jsx)("div", {
                                className: u().detailsLine
                            }), (0, n.jsxs)(d.xv, {
                                textView: d.yS.P3,
                                className: (0, r.Z)(u().detailsValue, u().weeklyApyValue, u().cardValue),
                                children: [t, "%"]
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: u().cardRow,
                        children: (0, n.jsxs)("div", {
                            className: u().cardTitleContainer,
                            children: [(0, n.jsx)(d.rU, {
                                className: u().cardTitle,
                                viewType: d.tx.Tooltip,
                                tooltipContent: (0, n.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, n.jsxs)(d.xv, {
                                        textView: d.yS.C3,
                                        className: u().detailsTitle,
                                        children: ["Total TVL: $", p]
                                    }), (0, n.jsxs)(d.xv, {
                                        textView: d.yS.C3,
                                        className: u().detailsTitle,
                                        children: ["Cybro TVL: $", y]
                                    })]
                                }),
                                tooltipClassName: u().tooltipContent,
                                children: (0, n.jsx)(d.xv, {
                                    textView: d.yS.C3,
                                    className: u().detailsTitle,
                                    children: "TVL"
                                })
                            }), (0, n.jsx)("div", {
                                className: u().detailsLine
                            }), (0, n.jsxs)(d.xv, {
                                textView: d.yS.P3,
                                className: (0, r.Z)(u().detailsValue, u().cardValue),
                                children: ["$", p]
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: u().cardRow,
                        children: (0, n.jsxs)("div", {
                            className: u().cardTitleContainer,
                            children: [(0, n.jsx)(d.xv, {
                                textView: d.yS.C3,
                                className: u().detailsTitle,
                                children: "Provider"
                            }), (0, n.jsx)("div", {
                                className: u().detailsLine
                            }), (0, n.jsx)(d.xv, {
                                textView: d.yS.P3,
                                className: (0, r.Z)(u().detailsValue, u().cardValue),
                                children: s
                            })]
                        })
                    })]
                }) : (0, n.jsx)("div", {
                    className: (0, r.Z)(u().root, u()[c], m),
                    "data-sentry-component": "VaultStats",
                    "data-sentry-source-file": "VaultStats.tsx",
                    children: (0, n.jsxs)("div", {
                        className: (0, r.Z)(u().firstRow, u().row),
                        children: [(0, n.jsxs)("div", {
                            className: u().detailsItem,
                            children: [(0, n.jsx)(d.rU, {
                                viewType: d.tx.Tooltip,
                                tooltipContent: "Vault's APY is calculated as a daily average",
                                tooltipClassName: u().tooltipContent,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "VaultStats.tsx",
                                children: (0, n.jsx)(d.xv, {
                                    textView: d.yS.C3,
                                    className: u().detailsTitle,
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "VaultStats.tsx",
                                    children: "APY"
                                })
                            }), (0, n.jsxs)(d.xv, {
                                textView: d.yS.P3,
                                className: (0, r.Z)(u().detailsValue, u().weeklyApyValue),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "VaultStats.tsx",
                                children: [t, "%"]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: u().detailsItem,
                            children: [(0, n.jsx)(d.rU, {
                                viewType: d.tx.Tooltip,
                                tooltipContent: (0, n.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, n.jsxs)(d.xv, {
                                        textView: d.yS.C3,
                                        className: u().detailsTitle,
                                        children: ["Total TVL: $", p]
                                    }), (0, n.jsxs)(d.xv, {
                                        textView: d.yS.C3,
                                        className: u().detailsTitle,
                                        children: ["Cybro TVL: $", y]
                                    })]
                                }),
                                tooltipClassName: u().tooltipContent,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "VaultStats.tsx",
                                children: (0, n.jsx)(d.xv, {
                                    textView: d.yS.C3,
                                    className: u().detailsTitle,
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "VaultStats.tsx",
                                    children: "TVL"
                                })
                            }), (0, n.jsxs)(d.xv, {
                                textView: d.yS.P3,
                                className: u().detailsValue,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "VaultStats.tsx",
                                children: ["$", p]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: u().detailsItem,
                            children: [(0, n.jsx)(d.xv, {
                                textView: d.yS.C3,
                                className: u().detailsTitle,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "VaultStats.tsx",
                                children: "Provider"
                            }), (0, n.jsx)(d.xv, {
                                textView: d.yS.P3,
                                className: (0, r.Z)(u().detailsValue, u().provider),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "VaultStats.tsx",
                                children: s
                            })]
                        })]
                    })
                })
            }
        },
        28120: function (e, t, a) {
            "use strict";
            a.d(t, {
                _: function () {
                    return i
                },
                F: function () {
                    return p
                }
            });
            var s = a(2265),
                l = a(19081),
                n = a(48153),
                r = a(85042);
            let i = () => {
                let {
                    triggerToast: e
                } = (0, l.pm)(), t = s.useRef(null), {
                    data: a,
                    isLoading: i
                } = (0, n.rNJ)({
                    query: {
                        select: e => e.data.data.sitekey
                    }
                }), {
                    mutateAsync: o
                } = (0, n.DXF)();
                return {
                    captchaKey: a,
                    isLoadingCaptcha: i,
                    handleAddWaitList: async a => {
                        var s;
                        let l = await (null == t ? void 0 : null === (s = t.current) || void 0 === s ? void 0 : s.executeAsync());
                        if (!l) throw Error("Captcha token failed.");
                        return o({
                            data: {
                                captcha_answer: l,
                                email: a
                            }
                        }).then(() => {
                            e({
                                message: "Success",
                                description: "You have been added to waitlist"
                            })
                        }).catch(() => {
                            e({
                                message: "Error",
                                description: "Unexpected error. Contact support",
                                type: r.pC.Error
                            })
                        })
                    },
                    recaptchaRef: t
                }
            };
            var o = a(25820);
            let d = (e, t, a) => {
                    if (e && "reportValidity" in e) {
                        let s = (0, o.U2)(a, t);
                        e.setCustomValidity(s && s.message || ""), e.reportValidity()
                    }
                },
                c = (e, t) => {
                    for (let a in t.fields) {
                        let s = t.fields[a];
                        s && s.ref && "reportValidity" in s.ref ? d(s.ref, a, e) : s.refs && s.refs.forEach(t => d(t, a, e))
                    }
                },
                u = (e, t) => {
                    t.shouldUseNativeValidation && c(e, t);
                    let a = {};
                    for (let s in e) {
                        let l = (0, o.U2)(t.fields, s),
                            n = Object.assign(e[s] || {}, {
                                ref: l && l.ref
                            });
                        if (x(t.names || Object.keys(e), s)) {
                            let e = Object.assign({}, (0, o.U2)(a, s));
                            (0, o.t8)(e, "root", n), (0, o.t8)(a, s, e)
                        } else(0, o.t8)(a, s, n)
                    }
                    return a
                },
                x = (e, t) => e.some(e => e.startsWith(t + "."));
            var m = a(33111);
            let f = m.Ry().shape({
                    email: m.Z_().required("Email is required").email("Enter a valid email address")
                }),
                p = e => {
                    var t, a;
                    let {
                        handleSubmit: l,
                        ...n
                    } = (0, o.cI)({
                        mode: "onBlur",
                        resolver: (void 0 === t && (t = {}), void 0 === a && (a = {}), function (e, s, l) {
                            try {
                                return Promise.resolve(function (n, r) {
                                    try {
                                        var i = (t.context, Promise.resolve(f["sync" === a.mode ? "validateSync" : "validate"](e, Object.assign({
                                            abortEarly: !1
                                        }, t, {
                                            context: s
                                        }))).then(function (t) {
                                            return l.shouldUseNativeValidation && c({}, l), {
                                                values: a.raw ? e : t,
                                                errors: {}
                                            }
                                        }))
                                    } catch (e) {
                                        return r(e)
                                    }
                                    return i && i.then ? i.then(void 0, r) : i
                                }(0, function (e) {
                                    var t;
                                    if (!e.inner) throw e;
                                    return {
                                        values: {},
                                        errors: u((t = !l.shouldUseNativeValidation && "all" === l.criteriaMode, (e.inner || []).reduce(function (e, a) {
                                            if (e[a.path] || (e[a.path] = {
                                                    message: a.message,
                                                    type: a.type
                                                }), t) {
                                                var s = e[a.path].types,
                                                    l = s && s[a.type];
                                                e[a.path] = (0, o.KN)(a.path, t, e, a.type, l ? [].concat(l, a.message) : a.message)
                                            }
                                            return e
                                        }, {})), l)
                                    }
                                }))
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        })
                    }), r = l(e);
                    return s.useEffect(() => {
                        n.reset()
                    }, [n.formState.isSubmitted]), {
                        ...n,
                        handleSubmit: r
                    }
                }
        },
        70572: function (e, t, a) {
            "use strict";
            a.d(t, {
                dR: function () {
                    return j
                },
                e: function () {
                    return b
                },
                Yc: function () {
                    return i
                },
                xu: function () {
                    return V
                },
                t8: function () {
                    return u
                }
            });
            var s = a(57437);
            a(2265);
            var l = a(98099),
                n = a(19081),
                r = a(85042);
            let i = e => {
                let {
                    desc: t,
                    title: a
                } = e, i = (0, n.ac)("md");
                return (0, s.jsx)("section", {
                    id: "hub-hero",
                    className: (0, l.Z)("bg-[url('/images/HubHeroMobile.png')] h-[250px] flex justify-center items-center", "md:bg-[url('/images/HubHero.png')] md:h-[492px] md:block", "w-full mt-[2.5px] bg-contain bg-no-repeat bg-center"),
                    "data-sentry-component": "HubHero",
                    "data-sentry-source-file": "HubHero.tsx",
                    children: (0, s.jsxs)("div", {
                        className: (0, l.Z)("static md:absolute", "flex flex-col items-center gap-4 mx-auto left-0 right-0 top-[96px] max-w-[492px]"),
                        children: [(0, s.jsx)(r.xv, {
                            textView: i ? r.yS.H3 : r.yS.H2,
                            className: "first-line:!text-white !text-text-accent-yellow text-center",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "HubHero.tsx",
                            children: a
                        }), (0, s.jsx)(r.xv, {
                            textView: r.yS.BP2,
                            className: "!text-white/80 text-center",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "HubHero.tsx",
                            children: t
                        })]
                    })
                })
            };
            var o = a(36298),
                d = a(99485),
                c = a(78200);
            let u = () => {
                    let {
                        vaults: e,
                        isLoading: t,
                        vaultSkeletons: a
                    } = (0, c.Lg)();
                    return (0, s.jsxs)("div", {
                        className: (0, l.Z)("flex items-center flex-col gap-6 mt-auto md:mt-[-217px] px-6 md:px-0 z-10"),
                        "data-sentry-component": "HubVaults",
                        "data-sentry-source-file": "HubVaults.tsx",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-row flex-wrap gap-5 justify-center",
                            children: [!t && (null == e ? void 0 : e.map(e => (0, s.jsx)(c.jc, {
                                vault: e.vault,
                                // linkClassName: "w-full md:w-[327px] min-h-[426px]"
                            }, e.vault_id))), t && a.map((e, t) => (0, s.jsx)(o.X, {
                                classNames: {
                                    base: "w-[327px] h-[426px] rounded-[20px] dark:bg-background-tableRow"
                                }
                            }, t))]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-row gap-2 flex-wrap",
                            children: []
                        })]
                    })
                },
                x = e => {
                    let {
                        title: t,
                        description: a,
                        href: l
                    } = e;
                    return (0, s.jsxs)("a", {
                        target: "_blank",
                        href: l,
                        className: "*:cursor-pointer min-w-0 md:min-w-[375px] flex flex-col gap-3 w-full p-2.5 hover:bg-background-chips rounded-[10px]",
                        rel: "noreferrer",
                        "data-sentry-component": "ArticleCard",
                        "data-sentry-source-file": "ArticleCard.tsx",
                        children: [(0, s.jsx)(r.xv, {
                            textView: r.yS.BU1,
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "ArticleCard.tsx",
                            children: t
                        }), (0, s.jsx)(r.xv, {
                            textView: r.yS.C4,
                            className: "!text-white/60",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "ArticleCard.tsx",
                            children: a
                        })]
                    })
                };
            var m = a(48153);
            let f = () => {
                let {
                    data: e,
                    isLoading: t
                } = (0, m.FMY)({
                    limit: 3,
                    offset: 0
                }, {
                    query: {
                        select: e => e.data.data
                    }
                }), a = !t && !(null == e ? void 0 : e.length);
                return {
                    articles: e,
                    isLoading: t,
                    isNoArticles: a,
                    articleSkeletons: Array.from({
                        length: 3
                    }).fill("")
                }
            };
            var p = a(83278),
                y = a(28120),
                h = a(84744),
                v = a.n(h);
            let b = () => {
                let {
                    articles: e,
                    isLoading: t,
                    isNoArticles: a,
                    articleSkeletons: i
                } = f(), {
                    handleAddWaitList: d,
                    isLoadingCaptcha: c,
                    captchaKey: u,
                    recaptchaRef: m
                } = (0, y._)(), {
                    register: h,
                    handleSubmit: b,
                    formState: {
                        isValid: g,
                        isSubmitting: w
                    }
                } = (0, y.F)(async e => {
                    let {
                        email: t
                    } = e;
                    return d(t)
                }), _ = (0, n.ac)("md");
                return (0, s.jsxs)("section", {
                    id: "blog",
                    className: "mt-[42px] md:mt-[70px] px-6 md:px-0 flex flex-row justify-between gap-x-[73px] gap-y-6 flex-wrap",
                    "data-sentry-component": "HubBlog",
                    "data-sentry-source-file": "HubBlog.tsx",
                    children: [(0, s.jsxs)("div", {
                        className: (0, l.Z)(v().blog, "flex-1 relative flex flex-col gap-9 px-[35px] pt-[43px] pb-[35px] max-w-[588px] w-full min-h-[455px] bg-black"),
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-2 text-center",
                            children: [(0, s.jsx)(r.xv, {
                                textView: _ ? r.yS.H3 : r.yS.H2,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "HubBlog.tsx",
                                children: "Latest Crypto News & Insights"
                            }), (0, s.jsx)(r.xv, {
                                textView: r.yS.BP2,
                                className: "mt-2 !text-white/80",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "HubBlog.tsx",
                                children: "Stay updated with the most important trends and developments in the world of cryptocurrency. From market movements to regulatory changes."
                            }), (0, s.jsx)(r.xv, {
                                textView: r.yS.BU2,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "HubBlog.tsx",
                                children: "Explore expert analysis and predictions to make informed investment decisions."
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-[15px] text-center",
                            children: [(0, s.jsxs)("form", {
                                onSubmit: b,
                                className: "flex flex-col lg:flex-row gap-y-4 items-centerm rounded-[18px] bg-transparent lg:bg-background-chips p-0 lg:pr-1 lg:pl-[27px] lg:py-1",
                                children: [(0, s.jsx)("input", {
                                    className: "flex-1 bg-background-chips lg:bg-transparent outline-none py-[23px] pl-[23px] rounded-[18px] lg:p-0",
                                    placeholder: "Your email here",
                                    type: "email",
                                    ...h("email")
                                }), (0, s.jsx)(r.zx, {
                                    disabled: !g || c || w,
                                    className: "flex-1 w-full lg:max-w-[173px]",
                                    size: r.qE.Large,
                                    type: "submit",
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "HubBlog.tsx",
                                    children: "Send"
                                })]
                            }), (0, s.jsxs)(r.xv, {
                                textView: r.yS.C4,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "HubBlog.tsx",
                                children: ["No spam. ", (0, s.jsx)("span", {
                                    className: "text-white/80",
                                    children: "Only updates and release announcements."
                                })]
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex-1 flex flex-col gap-6 justify-between",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [a && (0, s.jsx)(r.xv, {
                                textView: r.yS.C4,
                                children: "No articles"
                            }), t ? i.map((e, t) => (0, s.jsx)(o.X, {
                                classNames: {
                                    base: "w-full h-[130px] dark:bg-background-tableRow rounded-[10px]"
                                }
                            }, t)) : null == e ? void 0 : e.map(e => (0, s.jsx)(x, {
                                href: e.link,
                                title: e.name,
                                description: e.short_description
                            }, e.name))]
                        }), ]
                    }), u && (0, s.jsx)(p.Z, {
                        ref: m,
                        size: "invisible",
                        sitekey: u
                    })]
                })
            };
            var g = a(63726),
                w = {
                    src: "/_next/static/media/HubOneClick.6a7aca23.png",
                    height: 1859,
                    width: 2560,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEUREhceHwkJCQ4TFxUXGhsfHxgsLTMGBwgREhEkJSkODhFJSD4SFBYmKSoJCQgcHB81Nzu4osBCAAAADnRSTlOt/YR0k/v++/39nv2+ujnz8lgAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAzSURBVHicBcGBAcAgCASxU8EH24L7T9uEueyAgdzH6BTVqWoPaj9R+wbKG9op5jLej/MDIvsBZc84d2YAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                _ = {
                    src: "/_next/static/media/HubOneClickMobile.cf500ee6.png",
                    height: 2568,
                    width: 750,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAMAAADk895wAAAAFVBMVEUYGBgTFRQbGhQfHhcREhIiIyIkJhUx6yBDAAAABXRSTlP+u+fdszVPvlcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAbSURBVHicY2BmYmBgZWBlZWBjA5EMDCCShREAAs4AOi6/CeQAAAAASUVORK5CYII=",
                    blurWidth: 2,
                    blurHeight: 8
                };
            let V = () => {
                    let e = (0, n.ac)("md");
                    return (0, s.jsx)("div", {
                        className: "relative flex flex-col mx-auto my-[42px] md:my-0 md:mt-[-25px] bg-[url('/images/HubOneClick-bg.png')] bg-contain justify-center items-center",
                        "data-sentry-component": "HubOneClick",
                        "data-sentry-source-file": "HubOneClick.tsx",
                        children: (0, s.jsx)("div", {
                            className: "max-w-screen-xl",
                            children: (0, s.jsx)(g.default, {
                                src: e ? _ : w,
                                alt: "One click",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "HubOneClick.tsx"
                            })
                        })
                    })
                },
                j = () => (0, n.ac)("md") ? (0, s.jsx)("div", {
                    className: (0, l.Z)("self-center w-[375px] h-[603px] bg-[url('/images/HubBannerMobile.png')] bg-[length:100%_100%] relative mt-[42px] pt-[42px]"),
                    "data-sentry-component": "HubBanner",
                    "data-sentry-source-file": "HubBanner.tsx",
                    children: (0, s.jsxs)("div", {
                        className: "flex flex-col items-center text-center",
                        children: [(0, s.jsx)(r.xv, {
                            textView: r.yS.H3,
                            className: "whitespace-pre-wrap !text-text-accent-yellow first-line:text-white",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "HubBanner.tsx",
                            children: "join the\npoints hunt"
                        }), (0, s.jsx)(r.xv, {
                            textView: r.yS.P3,
                            className: "mt-2.5 max-w-[241px]",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "HubBanner.tsx",
                            children: "To start racking up CYBRO Points by getting friends onboard, you'll need to grab some CYBRO tokens"
                        }), (0, s.jsx)("a", {
                            href: n.Ok.preSale,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, s.jsx)(r.zx, {
                                className: "w-fit mt-[271px] mb-4",
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "HubBanner.tsx",
                                children: "Buy cybro tokens"
                            })
                        }), (0, s.jsx)(r.rU, {
                            viewType: r.tx.Link,
                            href: n.Ok.docCybroPoints,
                            target: "_blank",
                            className: "max-w-[173px]",
                            "data-sentry-element": "Link",
                            "data-sentry-source-file": "HubBanner.tsx",
                            children: "watch our detailed Cybro points faq"
                        })]
                    })
                }) : (0, s.jsx)("div", {
                    className: (0, l.Z)("mt-[70px] w-full max-w-[1204px] h-[631px] relative pt-[55px] px-9 pb-[54px]", "before:pointer-events-none before:top-0 before:right-0 before:absolute before:w-full before:h-full before:bg-[url('/images/HubBanner.png')] before:z-[1] before:bg-[length:100%_100%] before:bg-no-repeat"),
                    children: (0, s.jsx)("div", {
                        className: (0, l.Z)(v().blog, "relative w-full h-full bg-black pt-[86px] pl-[90px]"),
                        children: (0, s.jsxs)("div", {
                            className: "absolute flex flex-col max-w-[490px] z-[2]",
                            children: [(0, s.jsx)(r.xv, {
                                textView: r.yS.H3,
                                className: "whitespace-pre-wrap !text-[50px] !text-text-accent-yellow first-line:text-white",
                                children: "join the\npoints hunt"
                            }), (0, s.jsx)(r.xv, {
                                textView: r.yS.H4,
                                className: "mt-2 !font-normal !font-poppins",
                                children: "To start racking up CYBRO Points by getting friends onboard, you'll need to grab some CYBRO tokens"
                            }), (0, s.jsx)("a", {
                                href: n.Ok.preSale,
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, s.jsx)(r.zx, {
                                    className: "w-fit my-[26px]",
                                    children: "Buy cybro tokens"
                                })
                            }), (0, s.jsx)(r.rU, {
                                viewType: r.tx.Link,
                                href: n.Ok.docCybroPoints,
                                target: "_blank",
                                children: "watch our detailed Cybro points faq"
                            })]
                        })
                    })
                })
        },
        83547: function (e) {
            e.exports = {
                root: "AvailableFunds_root__wKaWI",
                availableFundsInnerContainer: "AvailableFunds_availableFundsInnerContainer__bSfnr",
                fundsTitle: "AvailableFunds_fundsTitle__IDQlZ",
                fundsValue: "AvailableFunds_fundsValue__Bu7Za"
            }
        },
        38: function (e) {
            e.exports = {
                link: "Vault_link__YNJRz",
                howCountsDesktop: "Vault_howCountsDesktop__HLmY5",
                chipsContainer: "Vault_chipsContainer__24A_v",
                tokenContainer: "Vault_tokenContainer__C1Te2",
                tokenName: "Vault_tokenName__jTeeb",
                root: "Vault_root__wbRLH",
                title: "Vault_title__fyPXY",
                titleText: "Vault_titleText__pz95s",
                trustScoreContainer: "Vault_trustScoreContainer__EAyfR",
                large: "Vault_large__pHKAp",
                howCountsMobile: "Vault_howCountsMobile__X3EJu"
            }
        },
        15763: function (e) {
            e.exports = {
                root: "VaultStats_root__IYfNU",
                secondRow: "VaultStats_secondRow__A3e74",
                detailsItem: "VaultStats_detailsItem__Tj_Tn",
                detailsTitle: "VaultStats_detailsTitle__TVbId",
                detailsValue: "VaultStats_detailsValue__FWXNe",
                provider: "VaultStats_provider__hotDA",
                vaultInvestment: "VaultStats_vaultInvestment__86zC_",
                light: "VaultStats_light__kc46C",
                row: "VaultStats_row__t1VNz",
                full: "VaultStats_full__xGx9l",
                firstRow: "VaultStats_firstRow__r_vn5",
                availableFundsValue: "VaultStats_availableFundsValue__H5qe9",
                yourDepositValue: "VaultStats_yourDepositValue__VHb3R",
                card: "VaultStats_card__lYtSc",
                thirdRow: "VaultStats_thirdRow__Vsw9Y",
                weeklyApyValue: "VaultStats_weeklyApyValue__aFius",
                cardRow: "VaultStats_cardRow__zdb4_",
                cardTitleContainer: "VaultStats_cardTitleContainer__VMDzV",
                detailsLine: "VaultStats_detailsLine__e_XaH",
                overallInvestmentValue: "VaultStats_overallInvestmentValue__EFtgH",
                earningsMonthlyValue: "VaultStats_earningsMonthlyValue__y1JjW",
                tetherIconContainer: "VaultStats_tetherIconContainer__y57sL",
                tooltipContent: "VaultStats_tooltipContent__3nicS"
            }
        },
        84744: function (e) {
            e.exports = {
                blog: "Blog_blog__8pZ5A"
            }
        }
    }
]);