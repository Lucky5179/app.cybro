!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "8826f4c5-cdeb-41d6-acc4-cdcc2c8f1035"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8826f4c5-cdeb-41d6-acc4-cdcc2c8f1035"));
  } catch (e) {}
})(),
  (function () {
    try {
      var e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        t = new e.Error().stack;
      t &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[t] = "8826f4c5-cdeb-41d6-acc4-cdcc2c8f1035"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-8826f4c5-cdeb-41d6-acc4-cdcc2c8f1035"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3385],
    {
      81084: function (e, t, a) {
        "use strict";
        var n,
          r = a(50814);
        function s() {
          return (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        t.Z = function (e) {
          return r.createElement(
            "svg",
            s(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "#fff",
              },
              e
            ),
            n ||
              (n = r.createElement("path", {
                fillRule: "evenodd",
                d: "M6.872 10.261 4 12.78v3.742l7.03-6.217-.05-.044.05-.043L4 4v3.743zm11.076 0 .052.044-7.031 6.217V12.78l2.872-2.519-2.872-2.518V4l7.03 6.218z",
                clipRule: "evenodd",
              }))
          );
        };
      },
      71318: function (e, t, a) {
        "use strict";
        var n,
          r,
          s = a(50814);
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        t.Z = function (e) {
          return s.createElement(
            "svg",
            l(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 14,
                height: 14,
                fill: "none",
              },
              e
            ),
            n ||
              (n = s.createElement("path", {
                fill: "#fff",
                d: "M7 13.665A6.667 6.667 0 1 0 7 .332a6.667 6.667 0 0 0 0 13.333",
              })),
            r ||
              (r = s.createElement("path", {
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M6.334 3.332v4l2.667 1.333",
              }))
          );
        };
      },
      84981: function (e, t, a) {
        "use strict";
        a.d(t, {
          Y: function () {
            return i;
          },
        });
        var n = a(57437);
        a(2265);
        var r = a(36298),
          s = a(98099),
          l = a(85042),
          o = a(68915);
        let i = (e) => {
          let {
            icon: t,
            title: a,
            balanceUSD: i,
            balance: d,
            className: c,
            isLoading: u,
          } = e;
          return (0, n.jsxs)(l.Kq, {
            className: (0, s.Z)("gap-1", c),
            "data-sentry-element": "Stack",
            "data-sentry-component": "StakingBalance",
            "data-sentry-source-file": "StakingBalance.tsx",
            children: [
              (0, n.jsx)(l.ZT, {
                variant: "caption",
                order: 4,
                className: "text-white/60",
                "data-sentry-element": "Typography",
                "data-sentry-source-file": "StakingBalance.tsx",
                children: a,
              }),
              (0, n.jsxs)(l.ZA, {
                className: "gap-2 items-center",
                "data-sentry-element": "Group",
                "data-sentry-source-file": "StakingBalance.tsx",
                children: [
                  t,
                  (0, n.jsx)(r.X, {
                    isLoaded: !u,
                    className: "rounded-lg",
                    "data-sentry-element": "Skeleton",
                    "data-sentry-source-file": "StakingBalance.tsx",
                    children: (0, n.jsx)(l.ZT, {
                      order: 1,
                      "data-sentry-element": "Typography",
                      "data-sentry-source-file": "StakingBalance.tsx",
                      children: (0, o.T4)(d),
                    }),
                  }),
                  "number" == typeof i &&
                    (0, n.jsxs)(l.ZT, {
                      variant: "caption",
                      order: 4,
                      className: "text-white/40",
                      children: ["≈ $", (0, o.T4)(i)],
                    }),
                ],
              }),
            ],
          });
        };
      },
      52484: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            Footer: function () {
              return p;
            },
          });
        var n = a(57437);
        a(2265);
        var r = a(98099),
          s = a(63726),
          l = a(99485),
          o = a(81084),
          i = a(90027),
          d = a(15376),
          c = a(5659),
          u = a(19081),
          m = a(85042),
          f = {
            src: "/_next/static/media/CybroFooter.a6768600.png",
            height: 345,
            width: 2560,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEUCAgUBAQYBAQUCAgUEBAiofR6DAAAABXRSTlNynY1ZPk2m/wIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BgYWZiZGBgBAAARgAMXeNOmQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 1,
          },
          h = a(8949),
          y = a.n(h);
        let p = (e) => {
          let { className: t } = e;
          return (0, n.jsxs)("footer", {
            className: (0, r.Z)(y().root, t),
            "data-sentry-component": "Footer",
            "data-sentry-source-file": "Footer.tsx",
            children: [
              (0, n.jsx)("div", {
                className: (0, r.Z)(
                  y().imageWrapper,
                  "relative flex justify-center items-center z-[-1]"
                ),
                children: (0, n.jsx)(s.default, {
                  src: f,
                  alt: "Cybro",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "Footer.tsx",
                }),
              }),
              (0, n.jsxs)("div", {
                className: y().footerWrapper,
                children: [
                  (0, n.jsxs)("div", {
                    className: y().footerContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, r.Z)(y().section),
                        children: [
                          (0, n.jsx)("div", {
                            className: y().logoContainer,
                            children: (0, n.jsx)(m.TR, {
                              height: 17,
                              width: 138,
                              "data-sentry-element": "Logo",
                              "data-sentry-source-file": "Footer.tsx",
                            }),
                          }),
                          (0, n.jsx)("p", {
                            className: y().slogan,
                            children: "Your AI copilot for yield farming",
                          }),
                          (0, n.jsx)("a", {
                            href: u.Ok.preSale,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)(m.zx, {
                              className: y().buyButton,
                              endIcon: (0, n.jsx)(o.Z, {}),
                              "data-sentry-element": "Button",
                              "data-sentry-source-file": "Footer.tsx",
                              children: "Buy cybro tokens",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: (0, r.Z)(y().section),
                        children: [
                          (0, n.jsx)("p", {
                            className: y().sectionHeading,
                            children: "Follow us",
                          }),
                          (0, n.jsxs)("ul", {
                            className: (0, r.Z)(y().sectionList),
                            children: [
                              (0, n.jsx)("li", {
                                className: (0, r.Z)(
                                  y().socialItem,
                                  y().sectionItem
                                ),
                                children: (0, n.jsxs)(l.default, {
                                  className: y().socialLink,
                                  href: "https://x.com/cybro_erc20",
                                  target: "_blank",
                                  "data-sentry-element": "Link",
                                  "data-sentry-source-file": "Footer.tsx",
                                  children: [
                                    (0, n.jsx)(c.Z, {
                                      "data-sentry-element": "TwitterIcon",
                                      "data-sentry-source-file": "Footer.tsx",
                                    }),
                                    (0, n.jsx)("span", { children: "Twitter" }),
                                  ],
                                }),
                              }),
                              (0, n.jsx)("li", {
                                className: (0, r.Z)(
                                  y().socialItem,
                                  y().sectionItem
                                ),
                                children: (0, n.jsxs)(l.default, {
                                  className: y().socialLink,
                                  href: "https://t.me/cybro_erc20",
                                  target: "_blank",
                                  "data-sentry-element": "Link",
                                  "data-sentry-source-file": "Footer.tsx",
                                  children: [
                                    " ",
                                    (0, n.jsx)(d.Z, {
                                      "data-sentry-element": "TelegramIcon",
                                      "data-sentry-source-file": "Footer.tsx",
                                    }),
                                    (0, n.jsx)("span", {
                                      children: "Telegram",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: (0, r.Z)(y().section),
                        children: [
                          (0, n.jsx)("p", {
                            className: y().sectionHeading,
                            children: "Legal",
                          }),
                          (0, n.jsxs)("ul", {
                            className: (0, r.Z)(y().sectionList),
                            children: [

                              (0, n.jsx)("li", {
                                className: y().sectionItem,
                                children: (0, n.jsx)(l.default, {
                                  href: "https://docs.cybroai.vip/cybro",
                                  target: "_blank",
                                  "data-sentry-element": "Link",
                                  "data-sentry-source-file": "Footer.tsx",
                                  children: "Documentation",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                     
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: y().copyright,
                    children: "CoinLock Protector LLC",
                  }),
                ],
              }),
            ],
          });
        };
      },
      60574: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            Header: function () {
              return _;
            },
          });
        var n,
          r = a(57437),
          s = a(2265),
          l = a(11742),
          o = a(48173),
          i = a(37649),
          d = a(18301),
          c = a(2685),
          u = a(70149),
          m = a(98099),
          f = a(4123),
          h = a(31701),
          y = a(50814);
        function p() {
          return (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var x = function (e) {
            return y.createElement(
              "svg",
              p(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  fill: "none",
                },
                e
              ),
              n ||
                (n = y.createElement("path", {
                  stroke: "#fff",
                  d: "M3 8h17.455M3 12h17.455M3 16h17.455",
                }))
            );
          },
          g = a(19081),
          b = a(85042),
          v = a(85096),
          w = a.n(v);
        let k = [
            { title: "Ai Broker", href: "/ai-broker", isComingSoon: !0 },
            { title: "Staking", href: "/staking" },
          ],
          _ = (e) => {
            let { className: t, connectedComponent: a } = e,
              { isConnected: n } = (0, g.Zc)(),
              { disconnect: y } = (0, g.tV)(),
              [p, v] = s.useState(!1);
            return (0, r.jsxs)(l.R, {
              className: (0, m.Z)(w().navbar, t),
              onMenuOpenChange: v,
              "data-sentry-element": "Navbar",
              "data-sentry-component": "Header",
              "data-sentry-source-file": "Header.tsx",
              children: [
                (0, r.jsxs)("div", {
                  className: w().menuContainer,
                  children: [
                    (0, r.jsxs)(o.U, {
                      className: w().leftContainer,
                      "data-sentry-element": "NavbarContent",
                      "data-sentry-source-file": "Header.tsx",
                      children: [
                        (0, r.jsx)(i.L, {
                          icon: p ? h.Z : x,
                          className: (0, m.Z)(
                            w().burgerButton,
                            p && w().menuOpened,
                            "text-default"
                          ),
                          "aria-label": p ? "Close menu" : "Open menu",
                          "data-sentry-element": "NavbarMenuToggle",
                          "data-sentry-source-file": "Header.tsx",
                        }),
                        (0, r.jsx)(d.H, {
                          "data-sentry-element": "NavbarBrand",
                          "data-sentry-source-file": "Header.tsx",
                          children: (0, r.jsx)(b.TR, {
                            className: w().logo,
                            "data-sentry-element": "Logo",
                            "data-sentry-source-file": "Header.tsx",
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(o.U, {
                      className: w().desktopMenu,
                      "data-sentry-element": "NavbarContent",
                      "data-sentry-source-file": "Header.tsx",
                      children: k
                        .filter(
                          (e) => e.shouldConnected === n || !e.shouldConnected
                        )
                        .map((e, t) =>
                          (0, r.jsx)(
                            c.h,
                            {
                              children: (0, r.jsx)(b.Uk, {
                                href: e.href,
                                isDisabled: e.isDisabled,
                                isComingSoon: e.isComingSoon,
                                children: e.title,
                              }),
                            },
                            e.title
                          )
                        ),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "justify-end",
                  children: (0, r.jsx)(f.R, {
                    className: w().connectWallet,
                    size: b.qE.Small,
                    whenConnectedComponent: a,
                    "data-sentry-element": "ConnectWallet",
                    "data-sentry-source-file": "Header.tsx",
                  }),
                }),
                (0, r.jsx)(u.$, {
                  className: (0, m.Z)(w().mobileMenu),
                  "data-sentry-element": "NavbarMenu",
                  "data-sentry-source-file": "Header.tsx",
                  children: (0, r.jsxs)("div", {
                    className: w().mobileMenuTop,
                    children: [
                      k.map((e) =>
                        (0, r.jsx)(
                          c.h,
                          {
                            className: w().mobileMenuList,
                            children: (0, r.jsx)(b.Uk, {
                              className: w().menuLinkMobile,
                              href: e.href,
                              isDisabled: e.isDisabled,
                              isComingSoon: e.isComingSoon,
                              children: e.title,
                            }),
                          },
                          e.title
                        )
                      ),
                      (0, r.jsx)(b.I_, {
                        "data-sentry-element": "Socials",
                        "data-sentry-source-file": "Header.tsx",
                      }),
                      (0, r.jsx)(f.R, {
                        whenConnectedComponent: (0, r.jsx)(b.zx, {
                          view: b.r5.Primary,
                          onClick: () => y(),
                          children: "Disconnect",
                        }),
                        "data-sentry-element": "ConnectWallet",
                        "data-sentry-source-file": "Header.tsx",
                      }),
                    ],
                  }),
                }),
              ],
            });
          };
      },
      79248: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            ProfileStatsPopover: function () {
              return Z;
            },
          });
        var n,
          r,
          s,
          l,
          o,
          i,
          d,
          c,
          u,
          m,
          f = a(57437),
          h = a(2265),
          y = a(66549),
          p = a(24986),
          x = a(36298),
          g = a(4562),
          b = a(63726);
        a(9070), a(28);
        var v = a(99485),
          w = a(50814);
        function k() {
          return (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var _ = function (e) {
          return w.createElement(
            "svg",
            k(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 19,
                height: 19,
                fill: "none",
              },
              e
            ),
            n ||
              (n = w.createElement(
                "g",
                { clipPath: "url(#copy_svg__a)" },
                w.createElement("path", {
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.583,
                  d: "M8.313 1.586c-.535.007-.856.038-1.115.17-.298.152-.54.395-.692.693-.132.259-.163.58-.17 1.114m9.102-1.977c.534.007.855.038 1.114.17.298.152.54.395.692.693.132.259.163.58.17 1.114m0 7.125c-.007.535-.038.855-.17 1.115-.151.298-.394.54-.692.692-.26.132-.58.163-1.114.17m1.979-6.331v1.583m-6.334-6.333h1.584m-8.55 15.833h6.017c.886 0 1.33 0 1.668-.172.298-.152.54-.394.692-.692.173-.339.173-.782.173-1.669V8.867c0-.886 0-1.33-.173-1.669a1.6 1.6 0 0 0-.692-.691c-.338-.173-.782-.173-1.668-.173H4.116c-.887 0-1.33 0-1.669.173-.298.151-.54.394-.692.692-.173.338-.173.782-.173 1.668v6.017c0 .887 0 1.33.173 1.669.152.298.394.54.692.692.339.172.782.172 1.669.172",
                })
              )),
            r ||
              (r = w.createElement(
                "defs",
                null,
                w.createElement(
                  "clipPath",
                  { id: "copy_svg__a" },
                  w.createElement("path", { fill: "#fff", d: "M0 0h19v19H0z" })
                )
              ))
          );
        };
        function j() {
          return (j = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var S = function (e) {
          return w.createElement(
            "svg",
            j(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 40,
                height: 40,
                fill: "none",
              },
              e
            ),
            w.createElement(
              "g",
              { clipPath: "url(#eth_svg__a)" },
              s ||
                (s = w.createElement("path", {
                  fill: "#F8F8F8",
                  d: "M40 20C40 8.954 31.047 0 20 0S0 8.954 0 20c.001 11.046 8.956 20 20.001 20s20-8.954 20-20",
                })),
              w.createElement(
                "mask",
                {
                  id: "eth_svg__b",
                  width: 30,
                  height: 30,
                  x: 5,
                  y: 5,
                  maskUnits: "userSpaceOnUse",
                  style: { maskType: "luminance" },
                },
                l ||
                  (l = w.createElement("path", {
                    fill: "#fff",
                    d: "M35 5H5v30h30z",
                  }))
              ),
              o ||
                (o = w.createElement(
                  "g",
                  { mask: "url(#eth_svg__b)" },
                  w.createElement("path", {
                    fill: "#343434",
                    d: "m19.997 5-.201.684V25.52l.201.2 9.208-5.442z",
                  }),
                  w.createElement("path", {
                    fill: "#8C8C8C",
                    d: "m19.997 5-9.208 15.278 9.208 5.443V5",
                  }),
                  w.createElement("path", {
                    fill: "#3C3C3B",
                    d: "m19.997 27.464-.113.139v7.066l.113.33 9.214-12.975z",
                  }),
                  w.createElement("path", {
                    fill: "#8C8C8C",
                    d: "M19.997 35v-7.536l-9.208-5.44z",
                  }),
                  w.createElement("path", {
                    fill: "#141414",
                    d: "m19.997 25.72 9.208-5.442-9.208-4.185z",
                  }),
                  w.createElement("path", {
                    fill: "#393939",
                    d: "m10.79 20.278 9.207 5.443v-9.628z",
                  })
                ))
            ),
            i ||
              (i = w.createElement(
                "defs",
                null,
                w.createElement(
                  "clipPath",
                  { id: "eth_svg__a" },
                  w.createElement("path", { fill: "#fff", d: "M0 0h40v40H0z" })
                )
              ))
          );
        };
        function N() {
          return (N = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var C = function (e) {
            return w.createElement(
              "svg",
              N(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 17,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              d ||
                (d = w.createElement("circle", {
                  cx: 8.5,
                  cy: 8,
                  r: 8,
                  fill: "#FFF528",
                })),
              c ||
                (c = w.createElement("path", {
                  fill: "#000",
                  fillRule: "evenodd",
                  d: "M5.996 5.077 2.708 8.104l3.287 3.132h5.01l3.289-3.132-3.288-3.027zM4.639 8.104l1.483 1.441 3.11-3.11H6.466zm6.142-1.446L7.56 9.878h2.976l1.827-1.774z",
                  clipRule: "evenodd",
                }))
            );
          },
          A = {
            src: "/_next/static/media/profile.6014b587.png",
            height: 60,
            width: 60,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEUHBwcVFBUNDQ1JRUAsKypMaXEBAQEeHRslJSYBAQIDAwNJREANDAsGBQQQCwcfFQk5MitQNws0HgBRQHIsAAAADXRSTlOx+Sv7+QAv/fz17rK9VXdRlgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADxJREFUeJwFwYERwCAIALEHQcAearv/sE1wJQN15pKdQyaEfScNKu95rxXVeXZEQUfvapi2O2RNXJHxqP9A2wHWZJTGRQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8,
          };
        function B() {
          return (B = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var R = function (e) {
            return w.createElement(
              "svg",
              B(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 40,
                  height: 40,
                  fill: "none",
                },
                e
              ),
              u ||
                (u = w.createElement(
                  "g",
                  { clipPath: "url(#usdb_svg__a)" },
                  w.createElement("path", {
                    fill: "#FCFC03",
                    d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20",
                  }),
                  w.createElement("path", {
                    fill: "#000",
                    d: "m14.812 17.787.546-1.685-2.783-2.036-1.592 4.884 2.769 2.034-.005.015h12.458l-1.2 3.7H9.162L8.097 27.98H23.94l4.145-2.062 2.038-6.282-2.564-1.884z",
                  }),
                  w.createElement("path", {
                    fill: "#000",
                    d: "m16.876 10.838-4.302 3.228 18.983.006 1.048-3.234z",
                  }),
                  w.createElement("path", {
                    fill: "#000",
                    d: "m17.225 33.572 8.994-27.955H23.03l-8.9 27.955z",
                  })
                )),
              m ||
                (m = w.createElement(
                  "defs",
                  null,
                  w.createElement(
                    "clipPath",
                    { id: "usdb_svg__a" },
                    w.createElement("path", {
                      fill: "#fff",
                      d: "M0 0h40v40H0z",
                    })
                  )
                ))
            );
          },
          E = a(19081),
          L = a(68915);
        let O = (e) => {
          var t, a;
          let {
              profileData: n,
              earnedYield: r,
              address: s,
              isLoading: l,
              cybroBalance: o,
            } = e,
            { disconnect: i } = (0, E.tV)(),
            d = (0, h.useMemo)(() => {
              var e, t, a, s, l;
              return {
                list: [
                  {
                    label: "CYBRO Tokens",
                    value: (0, L.lb)(o),
                    leftIcon: C,
                    isNativeYieldInfo: !1,
                  },
                  {
                    label: "CYBRO Points",
                    value: "".concat(
                      null !== (l = null == n ? void 0 : n.points) &&
                        void 0 !== l
                        ? l
                        : 0,
                      " pts"
                    ),
                    isNativeYieldInfo: !1,
                  },
                  {
                    label: "Total Earned",
                    leftIcon: S,
                    value: "".concat(
                      (0, L.lb)(
                        Number(
                          null == r
                            ? void 0
                            : null === (e = r.ETH) || void 0 === e
                            ? void 0
                            : e.total
                        )
                      )
                    ),
                    isNativeYieldInfo: !0,
                  },
                  {
                    label: "Due Last Week",
                    leftIcon: S,
                    value: "".concat(
                      (0, L.lb)(
                        Number(
                          null == r
                            ? void 0
                            : null === (t = r.ETH) || void 0 === t
                            ? void 0
                            : t.last
                        )
                      )
                    ),
                    isNativeYieldInfo: !0,
                  },
                  {
                    label: null,
                    leftIcon: R,
                    value: "".concat(
                      (0, L.lb)(
                        Number(
                          null == r
                            ? void 0
                            : null === (a = r.USDB) || void 0 === a
                            ? void 0
                            : a.total
                        )
                      )
                    ),
                    isNativeYieldInfo: !0,
                  },
                  {
                    label: null,
                    leftIcon: R,
                    value: "".concat(
                      (0, L.lb)(
                        Number(
                          null == r
                            ? void 0
                            : null === (s = r.USDB) || void 0 === s
                            ? void 0
                            : s.last
                        )
                      )
                    ),
                    isNativeYieldInfo: !0,
                  },
                ],
                desc: "You are a participant in the Pre-Alpha Yield Program and earn <b>additional income</b> from your Cybro Token Balance.",
              };
            }, [n, r]),
            c = /<b>(.*)<\/b>/,
            u = d.desc.split(c),
            m = {
              firstPart: u[0],
              boldText:
                (null == d
                  ? void 0
                  : null === (a = d.desc) || void 0 === a
                  ? void 0
                  : null === (t = a.match(c)) || void 0 === t
                  ? void 0
                  : t[1]) || "",
              secondPart: u[1],
            },
            y = (0, h.useMemo)(
              () =>
                (null == n ? void 0 : n.balance_usd) && Number(n.balance_usd)
                  ? Number(n.balance_usd)
                  : 0,
              [null == n ? void 0 : n.balance_usd]
            );
          return (0, f.jsxs)("div", {
            className: "user-menu z-50 relative",
            "data-sentry-component": "ProfileStatsPanel",
            "data-sentry-source-file": "ProfileStatsPanel.tsx",
            children: [
              (0, f.jsxs)("div", {
                className: "user-menu__header",
                children: [
                  (0, f.jsxs)("div", {
                    className: "user-menu__header-block",
                    children: [
                      (0, f.jsx)("span", {
                        className: "user-menu__header-label",
                        children: "Your Cybro Profile",
                      }),
                      (0, f.jsx)("button", {
                        onClick: i,
                        className: "user-menu__logout",
                        children: "Log out",
                      }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    className: "user-menu__copy",
                    children: [
                      (0, f.jsx)(b.default, {
                        src: A,
                        alt: "profile",
                        className: "user-menu__logo",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "ProfileStatsPanel.tsx",
                      }),
                      s
                        ? (0, f.jsxs)(h.Fragment, {
                            children: [
                              (0, f.jsx)("span", {
                                className: "user-menu__copy-text",
                                children: (0, E.ro)(s, 3),
                              }),
                              (0, f.jsxs)("div", {
                                className: "user-menu__copy-box",
                                children: [
                                  (0, f.jsx)("button", {
                                    className: "user-menu__copy-btn",
                                    onClick: () => {
                                      navigator.clipboard.writeText(
                                        "".concat(s)
                                      );
                                    },
                                    children: (0, f.jsx)(_, {
                                      className: "user-menu__copy-icon",
                                    }),
                                  }),
                                  (0, f.jsx)("span", {
                                    className: "user-menu__copy-label",
                                    children: "Copied!",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, f.jsx)(x.X, {
                            classNames: {
                              base: "w-20 h-[22px] rounded-lg dark:bg-background-tableRow",
                            },
                          }),
                    ],
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "user-menu__content",
                children: [
                  (0, f.jsx)("ul", {
                    className: "user-menu__list",
                    children: d.list.map(
                      (e, t) =>
                        (!e.isNativeYieldInfo ||
                          (e.isNativeYieldInfo &&
                            (null == n
                              ? void 0
                              : n.claimable_yield_enrolled))) &&
                        (0, f.jsxs)(
                          "div",
                          {
                            className: "user-menu__item".concat(
                              null === e.label ? " user-menu__item-compact" : ""
                            ),
                            children: [
                              null !== e.label &&
                                (0, f.jsx)("span", {
                                  className: "user-menu__item-label",
                                  children: e.label,
                                }),
                              (0, f.jsxs)("div", {
                                className: "user-menu__item-content",
                                children: [
                                  e.leftIcon
                                    ? (0, f.jsx)(e.leftIcon, {
                                        className:
                                          "user-menu__item-currency-left",
                                      })
                                    : null,
                                  (0, f.jsx)("span", {
                                    className: "user-menu__item-value",
                                    children: l
                                      ? (0, f.jsx)(x.X, {
                                          classNames: {
                                            base: "w-12 h-[22px] rounded-lg dark:bg-background-tableRow",
                                          },
                                        })
                                      : e.value,
                                  }),
                                ],
                              }),
                            ],
                          },
                          "userMenuItem" + t
                        )
                    ),
                  }),
                  !!y &&
                    (null == n ? void 0 : n.claimable_yield_enrolled) &&
                    (0, f.jsxs)("p", {
                      className: "user-menu__desc",
                      children: [
                        (0, f.jsx)("span", { children: m.firstPart }),
                        m.boldText
                          ? (0, f.jsx)("b", { children: m.boldText })
                          : null,
                        m.secondPart
                          ? (0, f.jsxs)("span", {
                              children: ["\xa0", m.secondPart],
                            })
                          : null,
                      ],
                    }),
                  (0, f.jsxs)("div", {
                    className: "user-menu__offer",
                    children: [
                      (0, f.jsx)("span", {
                        className: "user-menu__offer-title",
                        children: "Grow your CYBRO Capital",
                      }),
                      (0, f.jsx)("p", {
                        className: "user-menu__offer-desc",
                        children:
                          "Stake your CYBRO tokens and earn up to 20% more!",
                      }),
                      (0, f.jsx)(v.default, {
                        href: "/staking",
                        className:
                          "button button--yellow button--arrow user-menu__offer-btn",
                        rel: "noreferrer",
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "ProfileStatsPanel.tsx",
                        children: "Stake CYBRO",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
        var T = a(31892),
          P = a(48153);
        let F = () => {
            let { address: e } = (0, E.Zc)(),
              { data: t, isLoading: a } = (0, P._R0)(e, {
                query: { enabled: !!e, select: (e) => e.data.data },
              }),
              { data: n, isLoading: r } = (0, P.$_j)(e, {
                query: { enabled: !!e, select: (e) => e.data.data },
              }),
              { balance: s, isLoadingBalance: l } = (0, T.Ym)(e);
            return {
              cybroBalance: s.locked + s.cybro,
              address: e,
              userProfile: t,
              earnedYield: n,
              isLoading: r || a || l,
            };
          },
          Z = () => {
            let {
              address: e,
              cybroBalance: t,
              userProfile: a,
              earnedYield: n,
              isLoading: r,
            } = F();
            return (0, f.jsxs)(y.j, {
              placement: "bottom",
              "data-sentry-element": "Popover",
              "data-sentry-component": "ProfileStatsPopover",
              "data-sentry-source-file": "ProfileStatsPopover.tsx",
              children: [
                (0, f.jsx)(p.b, {
                  "data-sentry-element": "PopoverTrigger",
                  "data-sentry-source-file": "ProfileStatsPopover.tsx",
                  children: (0, f.jsxs)("button", {
                    className: "user-toggle",
                    children: [
                      (0, f.jsx)("div", {
                        className: "user-toggle__profile",
                        children: (0, f.jsx)(b.default, {
                          src: A,
                          alt: "profile",
                          className: "user-toggle__profile-icon",
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "ProfileStatsPopover.tsx",
                        }),
                      }),
                      (0, f.jsxs)("div", {
                        className: "user-toggle__content",
                        children: [
                          (0, f.jsx)("div", {
                            className: "user-toggle__inner",
                            children: e
                              ? (0, f.jsx)("span", {
                                  className: "user-toggle__name",
                                  children: (0, E.ro)(e, 3),
                                })
                              : (0, f.jsx)(x.X, {
                                  classNames: {
                                    base: "w-11 h-[14px] rounded-lg dark:bg-background-tableRow",
                                  },
                                }),
                          }),
                          (0, f.jsxs)("div", {
                            className: "user-toggle__inner landscape",
                            children: [
                              (0, f.jsx)("span", {
                                className: "user-toggle__money",
                                children: r
                                  ? (0, f.jsx)(x.X, {
                                      classNames: {
                                        base: "w-6 h-[14px] rounded-lg dark:bg-background-tableRow",
                                      },
                                    })
                                  : (0, L.lb)(t),
                              }),
                              (0, f.jsx)(C, {
                                className: "user-toggle__currency",
                                "data-sentry-element": "LogoIcon",
                                "data-sentry-source-file":
                                  "ProfileStatsPopover.tsx",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, f.jsx)(g.g, {
                  className: "p-0 bg-transparent shadow-none",
                  "data-sentry-element": "PopoverContent",
                  "data-sentry-source-file": "ProfileStatsPopover.tsx",
                  children: (0, f.jsx)(O, {
                    isLoading: r,
                    address: e,
                    profileData: a,
                    earnedYield: n,
                    cybroBalance: t,
                    "data-sentry-element": "ProfileStatsPanel",
                    "data-sentry-source-file": "ProfileStatsPopover.tsx",
                  }),
                }),
              ],
            });
          };
      },
      31892: function (e, t, a) {
        "use strict";
        a.d(t, {
          LE: function () {
            return R;
          },
          YN: function () {
            return E.Y;
          },
          n5: function () {
            return P;
          },
          DS: function () {
            return y;
          },
          WG: function () {
            return p;
          },
          Ym: function () {
            return m;
          },
          QW: function () {
            return b;
          },
          tm: function () {
            return r;
          },
          xL: function () {
            return w;
          },
        });
        var n = a(48153);
        let r = () => {
          let { data: e, isLoading: t } = (0, n.P$h)({
            query: { queryKey: ["stakingConfig"] },
          });
          return {
            config: null == e ? void 0 : e.data.data,
            isLoadingConfig: t,
          };
        };
        var s = a(37161),
          l = a(77673),
          o = a(17289),
          i = a(19254),
          d = a(41359),
          c = a(88263),
          u = a(19081);
        let m = (e, t) => {
            let { config: a } = r(),
              { data: n, isLoading: m } = (0, l.useQuery)({
                queryKey: [
                  c.S8.CybroBalance,
                  e,
                  null == a ? void 0 : a.token.locked,
                  a,
                  t,
                ],
                enabled: !!a,
                queryFn: async () => {
                  var n, r;
                  if (!a || !e) return f;
                  let l = (0, d.JF)(s.a.BLS);
                  if (!l) return f;
                  let c = (0, u.s)(a.token.cybro, l),
                    m = (0, u.QT)(null != t ? t : a.token.locked, l),
                    h = await m.decimals(),
                    y = await m.balanceOf(e),
                    p = await c.balanceOf(e);
                  return {
                    locked: new o.O(
                      null !== (n = i.formatUnits(y, h)) && void 0 !== n ? n : 0
                    )
                      .dp(6, o.O.ROUND_DOWN)
                      .toNumber(),
                    cybro: new o.O(
                      null !== (r = i.formatUnits(p, h)) && void 0 !== r ? r : 0
                    )
                      .dp(6, o.O.ROUND_DOWN)
                      .toNumber(),
                  };
                },
              });
            return { balance: null != n ? n : f, isLoadingBalance: m };
          },
          f = { locked: 0, cybro: 0 },
          h = async (e) => {
            let { walletAddress: t, stakingAddress: a } = e,
              n = (0, d.JF)(s.a.BLS);
            if (!n) throw Error("Wallet provider not found");
            let r = (0, u.V6)(a, n),
              l = await r.getRewardOf(t);
            return i.formatEther(l);
          },
          y = (e) => {
            let { stakingData: t } = e,
              { address: a } = (0, u.Zc)(),
              { data: n, isLoading: r } = (0, l.useQuery)({
                queryKey: [c.S8.AvailableRewards, t, a],
                queryFn: async () => {
                  if (!t || !a) return 0;
                  let e = t.map((e) =>
                    h({ walletAddress: a, stakingAddress: e.address })
                  );
                  return (await Promise.all(e)).reduce(
                    (e, t) => new o.O(e).plus(t).toNumber(),
                    0
                  );
                },
                enabled: !!a && !!t,
              });
            return { rewards: null != n ? n : 0, isLoadingAvailableRewards: r };
          },
          p = (e, t) => {
            let { data: a, isLoading: n } = (0, l.useQuery)({
              queryKey: [c.S8.ClaimedCybroBalance, e, t],
              enabled: !!t && !!e,
              queryFn: async () => {
                var a, n;
                if (!t || !e) return x;
                let r = (0, d.JF)(s.a.BLS);
                if (!r) return x;
                let l = (0, u.QT)(t, r),
                  c = await l.claimedAmount(e),
                  m = await l.getClaimableAmount(e);
                return {
                  claimed: new o.O(
                    null !== (a = i.formatUnits(c)) && void 0 !== a ? a : 0
                  )
                    .dp(6, o.O.ROUND_DOWN)
                    .toNumber(),
                  claimable: new o.O(
                    null !== (n = i.formatUnits(m)) && void 0 !== n ? n : 0
                  )
                    .dp(6, o.O.ROUND_DOWN)
                    .toNumber(),
                };
              },
            });
            return { claim: null != a ? a : x, isLoadingClaimedBalance: n };
          },
          x = { claimed: 0, claimable: 0 },
          g = async (e) => {
            let { walletAddress: t, stakingAddress: a } = e,
              n = (0, d.JF)(s.a.BLS);
            if (!n) throw Error("Wallet provider not found");
            let r = (0, u.V6)(a, n),
              [l, o, c, m] = await r.users(t);
            return {
              balance: i.formatEther(l),
              lastClaimTimestamp: o.toNumber(),
              unlockTimestamp: c.toNumber(),
              yearlyReward: i.formatEther(m),
            };
          },
          b = (e) => {
            let { stakingData: t } = e,
              { address: a } = (0, u.Zc)(),
              { data: n, isLoading: r } = (0, l.useQuery)({
                queryKey: [c.S8.StakedReport, a, t],
                queryFn: async () => {
                  if (!t || !a) return [];
                  let e = t.map((e) =>
                    Promise.all([
                      h({ walletAddress: a, stakingAddress: e.address }),
                      g({ walletAddress: a, stakingAddress: e.address }),
                    ])
                  );
                  return (await Promise.all(e))
                    .map((e, a) => ({
                      address: t[a].address,
                      reward: e[0],
                      report: e[1],
                    }))
                    .filter((e) => {
                      let { report: t } = e;
                      return !new o.O(t.balance).isZero();
                    });
                },
                enabled: !!a && !!t,
              });
            return { report: null != n ? n : [], isLoadingReport: r };
          },
          v = async (e) => {
            let { stakingAddress: t } = e,
              a = (0, d.JF)(s.a.BLS);
            if (!a) throw Error("Wallet provider not found");
            let n = (0, u.V6)(t, a),
              r = await n.totalLocked();
            return i.formatEther(r);
          },
          w = (e) => {
            let { stakingData: t } = e,
              { data: a, isLoading: n } = (0, l.useQuery)({
                queryKey: [c.S8.TotalStaked, t],
                enabled: !!t,
                queryFn: async () => {
                  if (!t || !(0, d.JF)(s.a.BLS)) return k;
                  let e = [];
                  for (let a of t) {
                    let t = await v({ stakingAddress: a.address });
                    e.push({ amount: t, months: a.months });
                  }
                  return e;
                },
              });
            return {
              totalStaked: null != a ? a : k,
              isLoadingTotalStaked: n || !t,
            };
          },
          k = [
            { amount: 0, months: 15 },
            { amount: 0, months: 10 },
            { amount: 0, months: 5 },
          ];
        var _ = a(57437);
        a(2265);
        var j = a(98099),
          S = a(75596),
          N = a.n(S),
          C = a(13243),
          A = a(85042),
          B = a(68915);
        let R = (e) => {
          let { report: t, reward: a, address: n, icon: r, tokenName: s } = e,
            l = N()().isAfter(1e3 * t.unlockTimestamp),
            i = new o.O(a).isGreaterThanOrEqualTo(1e-6);
          return (0, _.jsxs)(A.Kq, {
            className:
              "gap-2 py-6 lg:py-4 px-6 bg-background-card lg:bg-background-window rounded-[14px]",
            "data-sentry-element": "Stack",
            "data-sentry-component": "StakedCard",
            "data-sentry-source-file": "StakedCard.tsx",
            children: [
              (0, _.jsxs)(A.ZA, {
                className: "justify-between",
                "data-sentry-element": "Group",
                "data-sentry-source-file": "StakedCard.tsx",
                children: [
                  (0, _.jsxs)(A.Dx, {
                    order: 5,
                    "data-sentry-element": "Title",
                    "data-sentry-source-file": "StakedCard.tsx",
                    children: ["Staked ", s],
                  }),
                  l
                    ? (0, _.jsx)(A.ZT, {
                        variant: "caption",
                        order: 4,
                        className: "text-white/40",
                        children: "Staking Finished",
                      })
                    : (0, _.jsxs)(A.ZT, {
                        variant: "caption",
                        order: 4,
                        children: [
                          (0, _.jsx)("span", {
                            className: "text-white/60",
                            children: "End ",
                          }),
                          N()(1e3 * t.unlockTimestamp).format("DD MMM YYYY"),
                        ],
                      }),
                ],
              }),
              (0, _.jsxs)(A.ZA, {
                className: "gap-2",
                "data-sentry-element": "Group",
                "data-sentry-source-file": "StakedCard.tsx",
                children: [
                  r,
                  (0, _.jsx)(A.ZT, {
                    order: 2,
                    weight: "bold",
                    "data-sentry-element": "Typography",
                    "data-sentry-source-file": "StakedCard.tsx",
                    children: (0, B.T4)(t.balance),
                  }),
                  (0, _.jsx)(A.ZA, {
                    className: (0, j.Z)(
                      "justify-center items-center px-2 py-1 rounded-md",
                      "text-text-accent-logoYellow bg-trustScore-yellow-100/15"
                    ),
                    "data-sentry-element": "Group",
                    "data-sentry-source-file": "StakedCard.tsx",
                    children: (0, _.jsxs)(A.ZT, {
                      order: 3,
                      weight: "bold",
                      "data-sentry-element": "Typography",
                      "data-sentry-source-file": "StakedCard.tsx",
                      children: ["+", (0, B.T4)(a)],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(A.ZT, {
                variant: "caption",
                order: 4,
                weight: "medium",
                className: "text-white/60 max-w-[319px]",
                "data-sentry-element": "Typography",
                "data-sentry-source-file": "StakedCard.tsx",
                children: [
                  "If you add more ",
                  s,
                  " to this staking pool, the staking duration will reset, and the countdown will start from the new date.",
                ],
              }),
              l && (0, _.jsx)(C.TU, { stakeAddress: n, tokenName: s }),
              !l &&
                "CYBRO" !== s &&
                (0, _.jsx)(C.hH, {
                  stakeAddress: n,
                  isDisabled: !i,
                  tokenName: s,
                }),
            ],
          });
        };
        var E = a(84981),
          L = a(36298),
          O = a(13380),
          T = a.n(O);
        let P = (e) => {
          let { months: t, amount: a, isLoading: n } = e;
          return (0, _.jsxs)(
            A.Kq,
            {
              className: (0, j.Z)("gap-1 flex-1"),
              "data-sentry-element": "Stack",
              "data-sentry-component": "TotalStakedField",
              "data-sentry-source-file": "TotalStakedField.tsx",
              children: [
                (0, _.jsxs)(A.ZT, {
                  variant: "caption",
                  order: 4,
                  className: "text-white/60",
                  "data-sentry-element": "Typography",
                  "data-sentry-source-file": "TotalStakedField.tsx",
                  children: [t, " Month"],
                }),
                (0, _.jsx)(A.ZA, {
                  className: "gap-2 items-center",
                  "data-sentry-element": "Group",
                  "data-sentry-source-file": "TotalStakedField.tsx",
                  children: (0, _.jsx)(L.X, {
                    isLoaded: !n,
                    className: "rounded-lg",
                    "data-sentry-element": "Skeleton",
                    "data-sentry-source-file": "TotalStakedField.tsx",
                    children: (0, _.jsx)(A.ZT, {
                      order: 1,
                      "data-sentry-element": "Typography",
                      "data-sentry-source-file": "TotalStakedField.tsx",
                      children: T()(a).format("0.00a"),
                    }),
                  }),
                }),
              ],
            },
            t
          );
        };
      },
      13243: function (e, t, a) {
        "use strict";
        a.d(t, {
          hH: function () {
            return el;
          },
          hj: function () {
            return ee;
          },
          TU: function () {
            return en;
          },
          s0: function () {
            return H;
          },
        });
        var n,
          r,
          s,
          l,
          o,
          i = a(57437),
          d = a(2265),
          c = a(4874),
          u = a(85042);
        let m = "stake-confirmation-modal";
        var f = a(16128),
          h = a.n(f);
        let y = c.ZP.create((e) => {
            let { onAccept: t, onCancel: a } = e;
            return (0, i.jsxs)(u.u_, {
              classNames: { base: "w-[375px]" },
              onClose: a,
              children: [
                (0, i.jsx)(u.u_.Header, { children: "Staking Confirmation" }),
                (0, i.jsxs)(u.u_.Body, {
                  className: "gap-4 relative",
                  children: [
                    (0, i.jsxs)(u.ZT, {
                      variant: "poppins",
                      order: 3,
                      className: "text-white/60 text-center !text-sm",
                      children: [
                        "Once staked, your Locked CYBRO will remain locked until the staking period ends. Adding more Locked CYBRO later will reset the staking period.",
                        (0, i.jsx)("span", {
                          className: "text-white",
                          children: " Are you ready to proceed?",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", { className: h().confirmationBg }),
                    (0, i.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, i.jsx)(u.zx, {
                          view: u.r5.Secondary,
                          onClick: a,
                          children: "No, cancel",
                        }),
                        (0, i.jsx)(u.zx, {
                          onClick: t,
                          children: "Yes, Confirm",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
          p = () => {
            let {
                isConfirmation: e,
                acceptConfirmation: t,
                cancelConfirmation: a,
              } = H(),
              n = c.ZP.useModal(m);
            return (
              d.useEffect(() => {
                e ? n.show() : n.remove();
              }, [e]),
              (0, i.jsx)(y, {
                id: m,
                onAccept: t,
                onCancel: a,
                "data-sentry-element": "StakeConfirmation",
                "data-sentry-component": "StakeConfirmationModal",
                "data-sentry-source-file": "StakeConfirmationModal.tsx",
              })
            );
          };
        var x = a(19081),
          g = a(37161),
          b = a(77359),
          v = a(90531),
          w = a(17289),
          k = a(31892),
          _ = a(99656),
          j = a(88263),
          S = a(68915),
          N = a(33111);
        let C = N.Ry().shape({ amount: N.Rx().required().positive() }),
          A = (e) =>
            (0, x.cI)({
              initialValues: { amount: "" },
              validationSchema: C,
              onSubmit: e,
            });
        var B = a(3728),
          R = a(19254),
          E = a(52002),
          L = a(99312);
        let O = async (e) => {
            let {
                tokenAddress: t,
                stakeAddress: a,
                walletAddress: n,
                amount: r,
              } = e,
              s = L.v6.getWalletProvider();
            if (!s) throw Error("Wallet provider not found");
            let l = R.parseUnits(r),
              o = new E.Q(s).getSigner(),
              i = (0, x.s)(t, o),
              d = (0, x.V6)(a, o);
            if ((await i.allowance(n, a)).lt(l)) {
              let e = await i.approve(a, l);
              await e.wait();
            }
            let c = await d.estimateGas.stake(l.toString()),
              u = (0, S.zb)(c, 1.35),
              m = await d.stake(l.toString(), { gasLimit: u });
            await m.wait();
          },
          T = () => {
            let e = (0, b.useQueryClient)(),
              { mutateAsync: t, isPending: a } = (0, B.useMutation)({
                mutationFn: O,
                onSuccess: () => {
                  setTimeout(() => {
                    e.invalidateQueries({ queryKey: [j.S8.AvailableRewards] }),
                      e.invalidateQueries({ queryKey: [j.S8.StakedReport] }),
                      e.invalidateQueries({ queryKey: [j.S8.CybroBalance] });
                  }, 1e3);
                },
              });
            return { stakeTokenMutation: t, isPending: a };
          },
          P = (e) => {
            var t;
            let { isLockedCybro: a, stakingData: n, tokenAddress: r } = e,
              s = (0, b.useQueryClient)(),
              { switchNetwork: l } = (0, v.g0)(),
              { address: o, chainId: i } = (0, x.Zc)(),
              [c, m] = d.useState(null),
              [f, h] = d.useState(!1),
              { balance: y, isLoadingBalance: p } = (0, k.Ym)(o),
              N = a ? y.locked : y.cybro,
              { stakeTokenMutation: C, isPending: B } = T(),
              R = !o || !r || !c,
              E = A(() => {
                R || h(!0);
              }),
              L = new w.O(
                null !== (t = E.values.amount) && void 0 !== t ? t : 0
              )
                .dp(6, w.O.ROUND_DOWN)
                .toNumber();
            d.useEffect(() => {
              var e;
              let t =
                null == n ? void 0 : n.sort((e, t) => t.months - e.months);
              m(
                null !== (e = null == t ? void 0 : t[0]) && void 0 !== e
                  ? e
                  : null
              );
            }, [n]);
            let O = d.useMemo(() => {
                let e = new w.O(E.values.amount);
                return !c || e.isNaN() || e.isZero()
                  ? 0
                  : e
                      .multipliedBy(c.months / 12)
                      .multipliedBy(c.percent / 100)
                      .toNumber();
              }, [c, E.values.amount]),
              P = i !== g.a.BLS,
              F = L > N,
              Z = d.useMemo(
                () =>
                  B
                    ? "Staking ".concat(a ? "LCYBRO" : "CYBRO", "...")
                    : P
                    ? "Switch network"
                    : F
                    ? "Insufficient balance"
                    : null,
                [F, a, P, B]
              ),
              H = !P && (!E.isValid || F || !c || B);
            return {
              period: c,
              setPeriod: m,
              form: E,
              rewards: O,
              balance: N,
              isLoadingLockedBalance: p,
              submitText: Z,
              isSubmitDisabled: H,
              handleSubmit: () => {
                if (P) {
                  l(g.a.BLS).then();
                  return;
                }
                E.handleSubmit();
              },
              isPendingStakeToken: B,
              acceptConfirmation: () => {
                R ||
                  (h(!1),
                  C({
                    amount: E.values.amount,
                    walletAddress: o,
                    tokenAddress: r,
                    stakeAddress: c.address,
                  })
                    .then(() => {
                      _.j.event(_.s.StakeSuccess, {
                        amount: E.values.amount,
                        walletAddress: o,
                        tokenAddress: r,
                        stakeAddress: c.address,
                      }),
                        (0, x.RF)({
                          message: "Successfully staked "
                            .concat((0, S.T4)(E.values.amount), " ")
                            .concat(a ? "Locked Cybro" : "Cybro"),
                          description: "Check your updated Balance.",
                        }),
                        E.handleReset({}),
                        s.invalidateQueries({
                          queryKey: [j.S8.AvailableRewards],
                        });
                    })
                    .catch((e) => {
                      _.j.event(
                        (0, x.ur)(e) ? _.s.StakeReject : _.s.StakeError,
                        {
                          amount: E.values.amount,
                          walletAddress: o,
                          tokenAddress: r,
                          stakeAddress: c.address,
                          message: JSON.stringify(e),
                        }
                      ),
                        (0, x.ur)(e) ||
                          (0, x.RF)({
                            message: "Something went wrong",
                            description:
                              "We were unable to complete the current operation. Try again or connect support.",
                            type: u.pC.Error,
                          });
                    }));
              },
              cancelConfirmation: () => {
                h(!1);
              },
              isConfirmation: f,
              isLockedCybro: a,
              tokenAddress: r,
              stakingData: n,
            };
          },
          F = d.createContext(null),
          Z = (e) => {
            let { children: t, ...a } = e,
              n = P(a);
            return (0, i.jsx)(F.Provider, {
              value: n,
              "data-sentry-element": "unknown",
              "data-sentry-component": "StakeContextProvider",
              "data-sentry-source-file": "StakeContext.tsx",
              children: t,
            });
          },
          H = () => {
            let e = d.useContext(F);
            if (!e)
              throw Error(
                "useStakeContext must be used within a StakeContextProvider"
              );
            return e;
          },
          M = () => {
            let { form: e, balance: t } = H();
            return (0, i.jsx)(u.ZA, {
              className:
                "justify-center items-center p-4 border-1 border-stroke-tableBorder rounded-[20px]",
              "data-sentry-element": "Group",
              "data-sentry-component": "StakeAmount",
              "data-sentry-source-file": "StakeAmount.tsx",
              children: (0, i.jsx)(u._Z, {
                placeholder: "0",
                label: "Entry Amount",
                showPercent: !0,
                max: t,
                onSelectPercent: (a) => {
                  e.setFieldValue(
                    "amount",
                    new w.O(t * a).dp(1 === a ? 18 : 6).toFixed()
                  );
                },
                ...e.register("amount"),
                "data-sentry-element": "AmountInput",
                "data-sentry-source-file": "StakeAmount.tsx",
              }),
            });
          };
        var I = a(4123);
        let D = () => {
          let {
            period: e,
            submitText: t,
            isSubmitDisabled: a,
            isPendingStakeToken: n,
            handleSubmit: r,
          } = H();
          return (0, i.jsx)(I.R, {
            whenConnectedComponent: (0, i.jsx)(u.zx, {
              isLoading: n,
              type: "button",
              onClick: (e) => {
                e.preventDefault(), r();
              },
              disabled: a,
              children:
                t ||
                "Stake for ".concat(null == e ? void 0 : e.months, " months"),
            }),
            "data-sentry-element": "ConnectWallet",
            "data-sentry-component": "StakeButton",
            "data-sentry-source-file": "StakeButton.tsx",
          });
        };
        var U = a(36298),
          Q = a(98099);
        let Y = (e) => {
            let { month: t, arpPercent: a, isActive: n, onClick: r } = e;
            return (0, i.jsxs)(u.Kq, {
              onClick: r,
              "data-active": !!n,
              className: (0, Q.Z)(
                h().bg,
                "w-[103px] p-2.5 rounded-[14px] justify-between"
              ),
              "data-sentry-element": "Stack",
              "data-sentry-component": "StakePeriodButton",
              "data-sentry-source-file": "StakePeriodButton.tsx",
              children: [
                (0, i.jsx)(u.Dx, {
                  order: 2,
                  "data-sentry-element": "Title",
                  "data-sentry-source-file": "StakePeriodButton.tsx",
                  children: t,
                }),
                (0, i.jsx)(u.ZT, {
                  order: 2,
                  className: "text-white/40",
                  "data-sentry-element": "Typography",
                  "data-sentry-source-file": "StakePeriodButton.tsx",
                  children: "months",
                }),
                (0, i.jsx)(u.ZA, {
                  className: (0, Q.Z)(
                    "justify-center items-center px-2 py-1 rounded-md",
                    n
                      ? "text-text-accent-logoYellow bg-trustScore-yellow-100/15"
                      : "bg-background-tableRow  text-white/80"
                  ),
                  "data-sentry-element": "Group",
                  "data-sentry-source-file": "StakePeriodButton.tsx",
                  children: (0, i.jsxs)(u.ZT, {
                    order: 3,
                    weight: "bold",
                    "data-sentry-element": "Typography",
                    "data-sentry-source-file": "StakePeriodButton.tsx",
                    children: [a, "% APR"],
                  }),
                }),
              ],
            });
          },
          W = () => {
            let { period: e, setPeriod: t, stakingData: a } = H(),
              n = (null != a ? a : []).sort((e, t) => t.months - e.months);
            return (0, i.jsxs)(u.ZA, {
              className: "gap-2",
              "data-sentry-element": "Group",
              "data-sentry-component": "StakePeriod",
              "data-sentry-source-file": "StakePeriod.tsx",
              children: [
                !a && (0, i.jsx)(z, {}),
                a &&
                  n.map((a) =>
                    (0, i.jsx)(
                      Y,
                      {
                        month: a.months,
                        arpPercent: a.percent,
                        isActive: a.months === (null == e ? void 0 : e.months),
                        onClick: () => t(a),
                      },
                      a.months
                    )
                  ),
              ],
            });
          },
          z = () =>
            [0, 1, 2].map((e) =>
              (0, i.jsx)(
                U.X,
                {
                  className:
                    "w-[103px] h-[110px] rounded-[14px] dark:bg-background-tableRow",
                },
                e
              )
            );
        var q = a(50814);
        function K() {
          return (K = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var V = function (e) {
          return q.createElement(
            "svg",
            K(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 14,
                height: 14,
                fill: "none",
              },
              e
            ),
            n ||
              (n = q.createElement("circle", {
                cx: 7,
                cy: 7,
                r: 7,
                fill: "#FFF528",
              })),
            r ||
              (r = q.createElement("path", {
                fill: "#000",
                fillRule: "evenodd",
                d: "M4.73 4.21 1.75 6.952 4.73 9.79h4.54l2.98-2.838-2.98-2.744zM3.5 6.952l1.344 1.306 2.82-2.82H5.155zm5.566-1.311L6.147 8.56h2.698L10.5 6.953z",
                clipRule: "evenodd",
              }))
          );
        };
        function J() {
          return (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }).apply(null, arguments);
        }
        var G = function (e) {
            return q.createElement(
              "svg",
              J(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 14,
                  height: 15,
                  fill: "none",
                },
                e
              ),
              s ||
                (s = q.createElement("circle", {
                  cx: 7,
                  cy: 7.5,
                  r: 7,
                  fill: "#53FF28",
                })),
              l ||
                (l = q.createElement("path", {
                  fill: "#000",
                  fillRule: "evenodd",
                  d: "M4.808 5.871 1.93 8.52l2.877 2.74h4.384l2.877-2.74L9.192 5.87zM3.62 8.52l1.298 1.26L7.64 7.059H5.22zm5.375-1.266-2.819 2.818h2.605l1.598-1.552z",
                  clipRule: "evenodd",
                })),
              o ||
                (o = q.createElement("path", {
                  stroke: "#000",
                  strokeWidth: 1.313,
                  d: "M8.75 6.746v-1.75L7 4.121l-1.75.875v1.75",
                }))
            );
          },
          X = a(71318);
        let $ = (e) => {
            let { children: t } = e,
              { period: a, rewards: n, isLockedCybro: r } = H();
            return (0, i.jsxs)(u.Kq, {
              className:
                "w-full px-1 pb-1 pt-4 gap-4 bg-button-secondary-defaultBg rounded-2xl",
              "data-sentry-element": "Stack",
              "data-sentry-component": "StakeReward",
              "data-sentry-source-file": "StakeReward.tsx",
              children: [
                (0, i.jsxs)(u.Kq, {
                  className: "gap-2 px-1",
                  "data-sentry-element": "Stack",
                  "data-sentry-source-file": "StakeReward.tsx",
                  children: [
                    (0, i.jsxs)(u.Kq, {
                      "data-sentry-element": "Stack",
                      "data-sentry-source-file": "StakeReward.tsx",
                      children: [
                        (0, i.jsx)(u.xv, {
                          textView: u.yS.C4,
                          className: "!text-white/60",
                          "data-sentry-element": "Text",
                          "data-sentry-source-file": "StakeReward.tsx",
                          children: "Your total reward:",
                        }),
                        (0, i.jsxs)(u.ZA, {
                          className: "gap-2 items-center",
                          "data-sentry-element": "Group",
                          "data-sentry-source-file": "StakeReward.tsx",
                          children: [
                            r ? (0, i.jsx)(G, {}) : (0, i.jsx)(V, {}),
                            (0, i.jsx)(U.X, {
                              isLoaded: !0,
                              className:
                                "rounded-lg dark:bg-background-tableRow",
                              "data-sentry-element": "Skeleton",
                              "data-sentry-source-file": "StakeReward.tsx",
                              children: (0, i.jsxs)(u.xv, {
                                textView: u.yS.BP1,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "StakeReward.tsx",
                                children: ["+ ", (0, S.T4)(n)],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(u.ZA, {
                      className: "gap-2",
                      "data-sentry-element": "Group",
                      "data-sentry-source-file": "StakeReward.tsx",
                      children: [
                        (0, i.jsx)(X.Z, {
                          "data-sentry-element": "ClockIcon",
                          "data-sentry-source-file": "StakeReward.tsx",
                        }),
                        (0, i.jsxs)(u.xv, {
                          textView: u.yS.C4,
                          className: "!text-white/80",
                          "data-sentry-element": "Text",
                          "data-sentry-source-file": "StakeReward.tsx",
                          children: [
                            "After ",
                            null == a ? void 0 : a.months,
                            " months",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t,
              ],
            });
          },
          ee = (e) =>
            (0, i.jsxs)(Z, {
              ...e,
              "data-sentry-element": "StakeContextProvider",
              "data-sentry-component": "Stake",
              "data-sentry-source-file": "Stake.tsx",
              children: [
                (0, i.jsxs)(u.Kq, {
                  className:
                    "bg-transparent lg:bg-background-window rounded-[30px] gap-4 p-0 lg:p-6 w-full max-w-[327px] lg:max-w-none lg:w-[375px] items-center",
                  "data-sentry-element": "Stack",
                  "data-sentry-source-file": "Stake.tsx",
                  children: [
                    (0, i.jsxs)(u.Dx, {
                      order: 4,
                      "data-sentry-element": "Title",
                      "data-sentry-source-file": "Stake.tsx",
                      children: [
                        "Stake ",
                        e.isLockedCybro ? "LockedCYBRO" : "CYBRO",
                      ],
                    }),
                    (0, i.jsx)(W, {
                      "data-sentry-element": "StakePeriod",
                      "data-sentry-source-file": "Stake.tsx",
                    }),
                    (0, i.jsx)(M, {
                      "data-sentry-element": "StakeAmount",
                      "data-sentry-source-file": "Stake.tsx",
                    }),
                    (0, i.jsx)($, {
                      "data-sentry-element": "StakeReward",
                      "data-sentry-source-file": "Stake.tsx",
                      children: (0, i.jsx)(D, {
                        "data-sentry-element": "StakeButton",
                        "data-sentry-source-file": "Stake.tsx",
                      }),
                    }),
                    (0, i.jsx)(u.rU, {
                      viewType: u.tx.Link,
                      href: x.Ok.docStaking,
                      target: "_blank",
                      "data-sentry-element": "Link",
                      "data-sentry-source-file": "Stake.tsx",
                      children: "How To Stake?",
                    }),
                  ],
                }),
                (0, i.jsx)(p, {
                  "data-sentry-element": "StakeConfirmationModal",
                  "data-sentry-source-file": "Stake.tsx",
                }),
              ],
            }),
          et = async (e) => {
            let { stakeAddress: t } = e,
              a = L.v6.getWalletProvider();
            if (!a) throw Error("Wallet provider not found");
            let n = new E.Q(a).getSigner(),
              r = (0, x.V6)(t, n),
              s = await r["withdraw()"]();
            await s.wait();
          },
          ea = () => {
            let e = (0, b.useQueryClient)(),
              { mutateAsync: t, isPending: a } = (0, B.useMutation)({
                mutationFn: (e) => et({ stakeAddress: e }),
                onSuccess: () => {
                  e.invalidateQueries({ queryKey: [j.S8.AvailableRewards] }),
                    e.invalidateQueries({ queryKey: [j.S8.StakedReport] }),
                    e.invalidateQueries({ queryKey: [j.S8.CybroBalance] });
                },
              });
            return { unstakeTokenMutation: t, isPending: a };
          },
          en = (e) => {
            let { stakeAddress: t, tokenName: a } = e,
              { unstakeTokenMutation: n, isPending: r } = ea(),
              { switchNetwork: s, isNeedSwitchNetwork: l } = (0, x.CB)(g.a.BLS);
            return (0, i.jsx)(u.zx, {
              type: "button",
              size: u.qE.Small,
              view: u.r5.Secondary,
              className: "w-full lg:w-fit",
              disabled: r,
              isLoading: r,
              onClick: () => {
                if (l) {
                  s();
                  return;
                }
                n(t)
                  .then(() => {
                    _.j.event(_.s.UnstakeSuccess, {
                      token: a,
                      stakeAddress: t,
                    }),
                      (0, x.RF)({
                        message: "Successfully unstaked ".concat(a),
                        description: "Check your updated balance.",
                      });
                  })
                  .catch((e) => {
                    _.j.event(
                      (0, x.ur)(e) ? _.s.UnstakeReject : _.s.UnstakeError,
                      { token: a, stakeAddress: t, message: JSON.stringify(e) }
                    ),
                      (0, x.ur)(e) ||
                        (0, x.RF)({
                          message: "Something went wrong",
                          description:
                            "We were unable to complete the current operation. Try again or connect feedback.",
                          type: u.pC.Error,
                        });
                  });
              },
              "data-sentry-element": "Button",
              "data-sentry-component": "UnstakeButton",
              "data-sentry-source-file": "UnstakeButton.tsx",
              children: l ? "Switch network" : "Unstake & Claim rewards",
            });
          },
          er = async (e) => {
            let { stakeAddress: t } = e,
              a = L.v6.getWalletProvider();
            if (!a) throw Error("Wallet provider not found");
            let n = new E.Q(a).getSigner(),
              r = (0, x.V6)(t, n),
              s = await r.claim();
            await s.wait();
          },
          es = () => {
            let e = (0, b.useQueryClient)(),
              { mutateAsync: t, isPending: a } = (0, B.useMutation)({
                mutationFn: (e) => er({ stakeAddress: e }),
                onSuccess: () => {
                  e.invalidateQueries({ queryKey: [j.S8.AvailableRewards] }),
                    e.invalidateQueries({ queryKey: [j.S8.StakedReport] }),
                    e.invalidateQueries({ queryKey: [j.S8.CybroBalance] });
                },
              });
            return { claimRewardMutation: t, isPending: a };
          },
          el = (e) => {
            let { stakeAddress: t, isDisabled: a, tokenName: n } = e,
              { claimRewardMutation: r, isPending: s } = es(),
              { isNeedSwitchNetwork: l, switchNetwork: o } = (0, x.CB)(g.a.BLS);
            return (0, i.jsx)(u.zx, {
              type: "button",
              size: u.qE.Small,
              view: u.r5.Secondary,
              className: "w-full lg:w-fit",
              disabled: s || a,
              isLoading: s,
              onClick: () => {
                if (l) {
                  o();
                  return;
                }
                r(t)
                  .then(() => {
                    _.j.event(_.s.ClaimRewardsSuccess, {
                      tokenName: n,
                      stakeAddress: t,
                    }),
                      (0, x.RF)({
                        message: "Successfully claimed ".concat(n),
                        description: "Check your updated Balance.",
                      });
                  })
                  .catch((e) => {
                    _.j.event(
                      (0, x.ur)(e)
                        ? _.s.ClaimRewardsReject
                        : _.s.ClaimRewardsError,
                      {
                        tokenName: n,
                        stakeAddress: t,
                        message: JSON.stringify(e),
                      }
                    ),
                      (0, x.ur)(e) ||
                        (0, x.RF)({
                          message: "Something went wrong",
                          description:
                            "We were unable to complete the current operation. Try again or connect feedback.",
                          type: u.pC.Error,
                        });
                  });
              },
              "data-sentry-element": "Button",
              "data-sentry-component": "ClaimRewardButton",
              "data-sentry-source-file": "ClaimRewardButton.tsx",
              children: l ? "Switch network" : "Claim rewards",
            });
          };
      },
      28: function () {},
      9070: function () {},
      88882: function (e) {
        e.exports = {
          header: "BaseLayout_header__sHIv2",
          mainContent: "BaseLayout_mainContent__BbTgk",
          main: "BaseLayout_main__s_oTn",
          noFooter: "BaseLayout_noFooter__Q_C5q",
          footer: "BaseLayout_footer__2_bFu",
          logoBottomContainer: "BaseLayout_logoBottomContainer__f8aDj",
          logoBottom: "BaseLayout_logoBottom__srNya",
        };
      },
      16128: function (e) {
        e.exports = {
          bg: "Stake_bg__7BSaK",
          confirmationBg: "Stake_confirmationBg___pwS4",
        };
      },
      8949: function (e) {
        e.exports = {
          root: "Footer_root__5_ulm",
          imageWrapper: "Footer_imageWrapper__5FT_i",
          footerWrapper: "Footer_footerWrapper__MpPjr",
          footerContainer: "Footer_footerContainer__adlbi",
          section: "Footer_section__UV4DR",
          slogan: "Footer_slogan___iy79",
          copyright: "Footer_copyright__u4adx",
          copyrightLong: "Footer_copyrightLong__fYWtD",
          sectionHeading: "Footer_sectionHeading__9R_jx",
          logoContainer: "Footer_logoContainer__86RQf",
          sectionList: "Footer_sectionList___wJZv",
          sectionItem: "Footer_sectionItem__SImOq",
          socialLink: "Footer_socialLink__ZnHsm",
          buyButton: "Footer_buyButton__qHuRz",
        };
      },
      85096: function (e) {
        e.exports = {
          logo: "Header_logo__ZmplL",
          navbar: "Header_navbar__zJB0u",
          connectedWalletContainer: "Header_connectedWalletContainer__F2T6o",
          avatarContainer: "Header_avatarContainer__cN9Oz",
          leftContainer: "Header_leftContainer__BZD7m",
          desktopMenu: "Header_desktopMenu__o77yz",
          burgerButton: "Header_burgerButton__UyR48",
          menuOpened: "Header_menuOpened__AKLfq",
          languageDropdown: "Header_languageDropdown__ObO6a",
          darkModeSwitch: "Header_darkModeSwitch__VzGnL",
          connectWallet: "Header_connectWallet__pkqWo",
          menuLinkMobile: "Header_menuLinkMobile__TwwQX",
          mobileMenu: "Header_mobileMenu___HWXm",
          mobileMenuTop: "Header_mobileMenuTop__7f3bR",
          mobileMenuBottom: "Header_mobileMenuBottom__Obs9T",
          tooltipContainer: "Header_tooltipContainer__URCBx",
          settingsButton: "Header_settingsButton__eue5L",
          menuContainer: "Header_menuContainer__SYJwX",
        };
      },
    },
  ]);
