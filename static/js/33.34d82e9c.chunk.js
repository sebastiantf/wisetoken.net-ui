(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [33], {
        777: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(73),
                c = a(0),
                s = a.n(c);

            function r(e) {
                var t = e.v,
                    a = (window.innerWidth, window.devicePixelRatio, [].concat(Object(n.a)(t.split("").slice(0, 5)), ["..."], Object(n.a)(t.split("").slice(31))).join(""));
                return s.a.createElement("data", null, a)
            }
        },
        796: function(e, t, a) {
            "use strict";
            var n = a(13),
                c = a(1),
                s = a(0),
                r = (a(10), a(9)),
                l = a(23);
            var i = s.createContext(),
                o = s.forwardRef((function(e, t) {
                    var a = e.classes,
                        l = e.className,
                        o = e.component,
                        d = void 0 === o ? "table" : o,
                        m = e.padding,
                        u = void 0 === m ? "default" : m,
                        b = e.size,
                        f = void 0 === b ? "medium" : b,
                        p = e.stickyHeader,
                        v = void 0 !== p && p,
                        g = Object(n.a)(e, ["classes", "className", "component", "padding", "size", "stickyHeader"]),
                        E = s.useMemo((function() {
                            return {
                                padding: u,
                                size: f,
                                stickyHeader: v
                            }
                        }), [u, f, v]);
                    return s.createElement(i.Provider, {
                        value: E
                    }, s.createElement(d, Object(c.a)({
                        role: "table" === d ? null : "table",
                        ref: t,
                        className: Object(r.a)(a.root, l, v && a.stickyHeader)
                    }, g)))
                }));
            t.a = Object(l.a)((function(e) {
                return {
                    root: {
                        display: "table",
                        width: "100%",
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        "& caption": Object(c.a)(Object(c.a)({}, e.typography.body2), {}, {
                            padding: e.spacing(2),
                            color: e.palette.text.secondary,
                            textAlign: "left",
                            captionSide: "bottom"
                        })
                    },
                    stickyHeader: {
                        borderCollapse: "separate"
                    }
                }
            }), {
                name: "MuiTable"
            })(o)
        },
        944: function(e, t, a) {
            "use strict";
            var n = a(1),
                c = a(13),
                s = a(0),
                r = (a(10), a(9)),
                l = a(23),
                i = a(92),
                o = a(85),
                d = a(247);
            var m = a(39),
                u = a(81),
                b = a(238),
                f = a(698),
                p = Object(f.a)(s.createElement("path", {
                    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                }), "FirstPage"),
                v = Object(f.a)(s.createElement("path", {
                    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                }), "LastPage"),
                g = Object(f.a)(s.createElement("path", {
                    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                }), "NavigateBefore"),
                E = Object(f.a)(s.createElement("path", {
                    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                }), "NavigateNext"),
                k = a(34),
                h = s.forwardRef((function(e, t) {
                    var a = e.classes,
                        l = e.className,
                        i = e.color,
                        o = void 0 === i ? "standard" : i,
                        d = e.component,
                        m = e.disabled,
                        f = void 0 !== m && m,
                        h = e.page,
                        x = e.selected,
                        y = void 0 !== x && x,
                        N = e.shape,
                        O = void 0 === N ? "round" : N,
                        j = e.size,
                        w = void 0 === j ? "medium" : j,
                        z = e.type,
                        S = void 0 === z ? "page" : z,
                        A = e.variant,
                        D = void 0 === A ? "text" : A,
                        C = Object(c.a)(e, ["classes", "className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"]),
                        R = ("rtl" === Object(u.a)().direction ? {
                            previous: E,
                            next: g,
                            last: p,
                            first: v
                        } : {
                            previous: g,
                            next: E,
                            first: p,
                            last: v
                        })[S];
                    return "start-ellipsis" === S || "end-ellipsis" === S ? s.createElement("div", {
                        ref: t,
                        className: Object(r.a)(a.root, a.ellipsis, f && a.disabled, "medium" !== w && a["size".concat(Object(k.a)(w))])
                    }, "\u2026") : s.createElement(b.a, Object(n.a)({
                        ref: t,
                        component: d,
                        disabled: f,
                        focusVisibleClassName: a.focusVisible,
                        className: Object(r.a)(a.root, a.page, a[D], a[O], l, "standard" !== o && a["".concat(D).concat(Object(k.a)(o))], f && a.disabled, y && a.selected, "medium" !== w && a["size".concat(Object(k.a)(w))])
                    }, C), "page" === S && h, R ? s.createElement(R, {
                        className: a.icon
                    }) : null)
                })),
                x = Object(l.a)((function(e) {
                    return {
                        root: Object(n.a)(Object(n.a)({}, e.typography.body2), {}, {
                            borderRadius: 16,
                            textAlign: "center",
                            boxSizing: "border-box",
                            minWidth: 32,
                            height: 32,
                            padding: "0 6px",
                            margin: "0 3px",
                            color: e.palette.text.primary
                        }),
                        page: {
                            transition: e.transitions.create(["color", "background-color"], {
                                duration: e.transitions.duration.short
                            }),
                            "&:hover": {
                                backgroundColor: e.palette.action.hover,
                                "@media (hover: none)": {
                                    backgroundColor: "transparent"
                                }
                            },
                            "&$focusVisible": {
                                backgroundColor: e.palette.action.focus
                            },
                            "&$selected": {
                                backgroundColor: e.palette.action.selected,
                                "&:hover, &$focusVisible": {
                                    backgroundColor: Object(m.c)(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
                                    "@media (hover: none)": {
                                        backgroundColor: "transparent"
                                    }
                                },
                                "&$disabled": {
                                    opacity: 1,
                                    color: e.palette.action.disabled,
                                    backgroundColor: e.palette.action.selected
                                }
                            },
                            "&$disabled": {
                                opacity: e.palette.action.disabledOpacity
                            }
                        },
                        sizeSmall: {
                            minWidth: 26,
                            height: 26,
                            borderRadius: 13,
                            margin: "0 1px",
                            padding: "0 4px",
                            "& $icon": {
                                fontSize: e.typography.pxToRem(18)
                            }
                        },
                        sizeLarge: {
                            minWidth: 40,
                            height: 40,
                            borderRadius: 20,
                            padding: "0 10px",
                            fontSize: e.typography.pxToRem(15),
                            "& $icon": {
                                fontSize: e.typography.pxToRem(22)
                            }
                        },
                        textPrimary: {
                            "&$selected": {
                                color: e.palette.primary.contrastText,
                                backgroundColor: e.palette.primary.main,
                                "&:hover, &$focusVisible": {
                                    backgroundColor: e.palette.primary.dark,
                                    "@media (hover: none)": {
                                        backgroundColor: e.palette.primary.main
                                    }
                                },
                                "&$disabled": {
                                    color: e.palette.action.disabled
                                }
                            }
                        },
                        textSecondary: {
                            "&$selected": {
                                color: e.palette.secondary.contrastText,
                                backgroundColor: e.palette.secondary.main,
                                "&:hover, &$focusVisible": {
                                    backgroundColor: e.palette.secondary.dark,
                                    "@media (hover: none)": {
                                        backgroundColor: e.palette.secondary.main
                                    }
                                },
                                "&$disabled": {
                                    color: e.palette.action.disabled
                                }
                            }
                        },
                        outlined: {
                            border: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
                            "&$selected": {
                                "&$disabled": {
                                    border: "1px solid ".concat(e.palette.action.disabledBackground)
                                }
                            }
                        },
                        outlinedPrimary: {
                            "&$selected": {
                                color: e.palette.primary.main,
                                border: "1px solid ".concat(Object(m.c)(e.palette.primary.main, .5)),
                                backgroundColor: Object(m.c)(e.palette.primary.main, e.palette.action.activatedOpacity),
                                "&:hover, &$focusVisible": {
                                    backgroundColor: Object(m.c)(e.palette.primary.main, e.palette.action.activatedOpacity + e.palette.action.hoverOpacity),
                                    "@media (hover: none)": {
                                        backgroundColor: "transparent"
                                    }
                                },
                                "&$disabled": {
                                    color: e.palette.action.disabled
                                }
                            }
                        },
                        outlinedSecondary: {
                            "&$selected": {
                                color: e.palette.secondary.main,
                                border: "1px solid ".concat(Object(m.c)(e.palette.secondary.main, .5)),
                                backgroundColor: Object(m.c)(e.palette.secondary.main, e.palette.action.activatedOpacity),
                                "&:hover, &$focusVisible": {
                                    backgroundColor: Object(m.c)(e.palette.secondary.main, e.palette.action.activatedOpacity + e.palette.action.hoverOpacity),
                                    "@media (hover: none)": {
                                        backgroundColor: "transparent"
                                    }
                                },
                                "&$disabled": {
                                    color: e.palette.action.disabled
                                }
                            }
                        },
                        rounded: {
                            borderRadius: e.shape.borderRadius
                        },
                        ellipsis: {
                            height: "auto",
                            "&$disabled": {
                                opacity: e.palette.action.disabledOpacity
                            }
                        },
                        focusVisible: {},
                        disabled: {},
                        selected: {},
                        icon: {
                            fontSize: e.typography.pxToRem(20),
                            margin: "0 -8px"
                        }
                    }
                }), {
                    name: "MuiPaginationItem"
                })(h);

            function y(e, t, a) {
                return "page" === e ? "".concat(a ? "" : "Go to ", "page ").concat(t) : "Go to ".concat(e, " page")
            }
            var N = s.forwardRef((function(e, t) {
                e.boundaryCount;
                var a = e.classes,
                    l = e.className,
                    m = e.color,
                    u = void 0 === m ? "standard" : m,
                    b = (e.count, e.defaultPage, e.disabled, e.getItemAriaLabel),
                    f = void 0 === b ? y : b,
                    p = (e.hideNextButton, e.hidePrevButton, e.onChange, e.page, e.renderItem),
                    v = void 0 === p ? function(e) {
                        return s.createElement(x, e)
                    } : p,
                    g = e.shape,
                    E = void 0 === g ? "round" : g,
                    k = (e.showFirstButton, e.showLastButton, e.siblingCount, e.size),
                    h = void 0 === k ? "medium" : k,
                    N = e.variant,
                    O = void 0 === N ? "text" : N,
                    j = Object(c.a)(e, ["boundaryCount", "classes", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"]),
                    w = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.boundaryCount,
                            a = void 0 === t ? 1 : t,
                            s = e.componentName,
                            r = void 0 === s ? "usePagination" : s,
                            l = e.count,
                            m = void 0 === l ? 1 : l,
                            u = e.defaultPage,
                            b = void 0 === u ? 1 : u,
                            f = e.disabled,
                            p = void 0 !== f && f,
                            v = e.hideNextButton,
                            g = void 0 !== v && v,
                            E = e.hidePrevButton,
                            k = void 0 !== E && E,
                            h = e.onChange,
                            x = e.page,
                            y = e.showFirstButton,
                            N = void 0 !== y && y,
                            O = e.showLastButton,
                            j = void 0 !== O && O,
                            w = e.siblingCount,
                            z = void 0 === w ? 1 : w,
                            S = Object(c.a)(e, ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"]),
                            A = Object(d.a)({
                                controlled: x,
                                default: b,
                                name: r,
                                state: "page"
                            }),
                            D = Object(o.a)(A, 2),
                            C = D[0],
                            R = D[1],
                            I = function(e, t) {
                                x || R(t), h && h(e, t)
                            },
                            P = function(e, t) {
                                var a = t - e + 1;
                                return Array.from({
                                    length: a
                                }, (function(t, a) {
                                    return e + a
                                }))
                            },
                            L = P(1, Math.min(a, m)),
                            M = P(Math.max(m - a + 1, a + 1), m),
                            T = Math.max(Math.min(C - z, m - a - 2 * z - 1), a + 2),
                            W = Math.min(Math.max(C + z, a + 2 * z + 2), M[0] - 2),
                            $ = [].concat(Object(i.a)(N ? ["first"] : []), Object(i.a)(k ? [] : ["previous"]), Object(i.a)(L), Object(i.a)(T > a + 2 ? ["start-ellipsis"] : a + 1 < m - a ? [a + 1] : []), Object(i.a)(P(T, W)), Object(i.a)(W < m - a - 1 ? ["end-ellipsis"] : m - a > a ? [m - a] : []), Object(i.a)(M), Object(i.a)(g ? [] : ["next"]), Object(i.a)(j ? ["last"] : [])),
                            B = function(e) {
                                switch (e) {
                                    case "first":
                                        return 1;
                                    case "previous":
                                        return C - 1;
                                    case "next":
                                        return C + 1;
                                    case "last":
                                        return m;
                                    default:
                                        return null
                                }
                            },
                            H = $.map((function(e) {
                                return "number" === typeof e ? {
                                    onClick: function(t) {
                                        I(t, e)
                                    },
                                    type: "page",
                                    page: e,
                                    selected: e === C,
                                    disabled: p,
                                    "aria-current": e === C ? "true" : void 0
                                } : {
                                    onClick: function(t) {
                                        I(t, B(e))
                                    },
                                    type: e,
                                    page: B(e),
                                    selected: !1,
                                    disabled: p || -1 === e.indexOf("ellipsis") && ("next" === e || "last" === e ? C >= m : C <= 1)
                                }
                            }));
                        return Object(n.a)({
                            items: H
                        }, S)
                    }(Object(n.a)(Object(n.a)({}, e), {}, {
                        componentName: "Pagination"
                    })).items;
                return s.createElement("nav", Object(n.a)({
                    "aria-label": "pagination navigation",
                    className: Object(r.a)(a.root, l),
                    ref: t
                }, j), s.createElement("ul", {
                    className: a.ul
                }, w.map((function(e, t) {
                    return s.createElement("li", {
                        key: t
                    }, v(Object(n.a)(Object(n.a)({}, e), {}, {
                        color: u,
                        "aria-label": f(e.type, e.page, e.selected),
                        shape: E,
                        size: h,
                        variant: O
                    })))
                }))))
            }));
            t.a = Object(l.a)({
                root: {},
                ul: {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    padding: 0,
                    margin: 0,
                    listStyle: "none"
                }
            }, {
                name: "MuiPagination"
            })(N)
        },
        998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return le
            }));
            var n = a(25),
                c = a(0),
                s = a.n(c),
                r = a(749),
                l = a(9),
                i = a(18),
                o = a(6),
                d = a(7),
                m = a(11),
                u = a(12),
                b = a(733),
                f = a(91),
                p = a.n(f),
                v = a(100),
                g = a(73),
                E = a(4),
                k = a.n(E),
                h = a(143),
                x = a(35),
                y = a(755),
                N = a.n(y),
                O = a(766),
                j = a(741),
                w = a(802),
                z = a(726),
                S = a(703),
                A = a(728),
                D = a(730),
                C = a(982),
                R = a(983),
                I = a(796),
                P = a(744),
                L = (a(794), a(795)),
                M = a(783),
                T = a(944),
                W = a(772),
                $ = a.n(W),
                B = a(128),
                H = a.n(B),
                F = a(785),
                Y = a.n(F),
                V = a(786),
                G = a.n(V),
                J = a(114),
                U = a.n(J),
                q = (a(372), a(116)),
                K = a(117),
                _ = a(42),
                Q = (a(145), a(80)),
                X = a(165),
                Z = (a(240), a(164)),
                ee = a(777);

            function te(e) {
                var t = e.v,
                    a = (window.innerWidth, window.devicePixelRatio, [].concat(Object(g.a)(t.split("").slice(0, 6)), ["..."], Object(g.a)(t.split("").slice(37))).join(""));
                return s.a.createElement("data", null, a)
            }
            var ae = a(60),
                ne = Object(c.lazy)((function() {
                    return a.e(31).then(a.bind(null, 1010))
                })),
                ce = Object(c.lazy)((function() {
                    return a.e(13).then(a.bind(null, 935))
                })),
                se = (new Q.a({
                    supportedChainIds: [1, 3, 4, 5, 42]
                }), Object(x.b)((function(e) {
                    return {
                        sharePrice: e.SchemeOptions.sharePrice
                    }
                }))((function(e) {
                    var t = Object(c.useState)("WISE"),
                        a = Object(n.a)(t, 2),
                        r = (a[0], a[1], Object(c.useState)(!1)),
                        o = Object(n.a)(r, 2),
                        d = (o[0], o[1], Object(c.useState)(!1)),
                        m = Object(n.a)(d, 2),
                        u = (m[0], m[1], Object(c.useState)(!1)),
                        f = Object(n.a)(u, 2),
                        p = (f[0], f[1], Object(c.useState)(!1)),
                        v = Object(n.a)(p, 2),
                        E = v[0],
                        x = v[1],
                        y = (e.sharePrice, function(e) {
                            e.stake.finalDay > 0 && (Ae(e.stake), Ie(e)), x(!E)
                        }),
                        W = Object(c.useState)(!0),
                        B = Object(n.a)(W, 2),
                        F = B[0],
                        V = B[1],
                        J = Object(c.useState)(!1),
                        Q = Object(n.a)(J, 2),
                        se = (Q[0], Q[1]),
                        re = Object(c.useState)(!1),
                        le = Object(n.a)(re, 2),
                        ie = le[0],
                        oe = le[1],
                        de = Object(c.useState)("1"),
                        me = Object(n.a)(de, 2),
                        ue = (me[0], me[1], Object(c.useState)(0)),
                        be = Object(n.a)(ue, 2),
                        fe = be[0],
                        pe = be[1],
                        ve = Object(c.useState)(5),
                        ge = Object(n.a)(ve, 2),
                        Ee = ge[0],
                        ke = ge[1],
                        he = Object(c.useState)(0),
                        xe = Object(n.a)(he, 2),
                        ye = xe[0],
                        Ne = xe[1],
                        Oe = Object(c.useState)(e.defaultText),
                        je = Object(n.a)(Oe, 2),
                        we = (je[0], je[1], Object(c.useState)({})),
                        ze = Object(n.a)(we, 2),
                        Se = ze[0],
                        Ae = ze[1],
                        De = Object(c.useState)({
                            stake: {}
                        }),
                        Ce = Object(n.a)(De, 2),
                        Re = Ce[0],
                        Ie = Ce[1],
                        Pe = Object(c.useState)(0),
                        Le = Object(n.a)(Pe, 2),
                        Me = (Le[0], Le[1]),
                        Te = Object(_.b)(),
                        We = Te.chainId,
                        $e = Te.account,
                        Be = (Te.library, Te.activate, Te.active, Te.connector),
                        He = s.a.useState(),
                        Fe = Object(n.a)(He, 2),
                        Ye = Fe[0],
                        Ve = Fe[1];
                    Object(c.useEffect)((function() {
                        Ye && Ye === Be && Ve(void 0)
                    }), [Ye, Be]);
                    var Ge = Object(q.a)();
                    Object(c.useRef)(!0);
                    Object(K.a)(!Ge || !!Ye);
                    var Je = Object(Z.a)(We),
                        Ue = new U.a(U.a.givenProvider),
                        qe = Je.inceptionDay,
                        Ke = window.ethereum ? window.ethereum.selectedAddress : null,
                        _e = new Ue.eth.Contract(X, Je.tokenAddress),
                        Qe = Object(c.useState)(null),
                        Xe = Object(n.a)(Qe, 2),
                        Ze = Xe[0],
                        et = Xe[1],
                        tt = Object(c.useState)([]),
                        at = Object(n.a)(tt, 2),
                        nt = (at[0], at[1]),
                        ct = Object(c.useState)([]),
                        st = Object(n.a)(ct, 2),
                        rt = st[0],
                        lt = st[1],
                        it = Object(c.useState)(""),
                        ot = Object(n.a)(it, 2),
                        dt = (ot[0], ot[1], Object(c.useState)("")),
                        mt = Object(n.a)(dt, 2),
                        ut = (mt[0], mt[1], Object(c.useState)(!1)),
                        bt = Object(n.a)(ut, 2),
                        ft = bt[0],
                        pt = bt[1],
                        vt = Object(c.useState)(!1),
                        gt = Object(n.a)(vt, 2),
                        Et = gt[0],
                        kt = gt[1],
                        ht = Object(c.useState)(!1),
                        xt = Object(n.a)(ht, 2),
                        yt = (xt[0], xt[1], Object(c.useState)({})),
                        Nt = Object(n.a)(yt, 2),
                        Ot = Nt[0],
                        jt = Nt[1],
                        wt = Object(c.useState)(0),
                        zt = Object(n.a)(wt, 2),
                        St = zt[0],
                        At = zt[1];
                    Object(c.useEffect)((function() {
                        var e = function() {
                                var e = Object(h.a)(k.a.mark((function e(t, a, n, c) {
                                    var s;
                                    return k.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, _e.methods.checkStakeByID(c, t).call().then((function(e) {
                                                    return e.index = a, e.stakeID = t, e.opensDayDate = Object(ae.b)(e.startDay - 1, qe), e.startDayDate = Object(ae.b)(e.startDay, qe), e.finalDayDate = Object(ae.b)(e.finalDay, qe), e.closeDayDate = Object(ae.b)(e.closeDay, qe), e.currentWiseDay = n, e.currentWiseDayToDate = Object(ae.b)(n, qe), e.daysLeft = e.isActive ? Object(ae.a)(parseInt(e.finalDay), parseInt(n)) : Object(ae.a)(parseInt(e.finalDay), parseInt(e.closeDay)), parseInt(e.daysLeft) > parseInt(e.lockDays) && 0 === parseInt(e.closeDay) && (e.isPending = !0), e
                                                }));
                                            case 3:
                                                return s = e.sent, e.abrupt("return", s);
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function(t, a, n, c) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            t = function() {
                                var t = Object(h.a)(k.a.mark((function t(n, c, s) {
                                    return k.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, _e.methods.checkReferralsByID(Ke, n).call().then(function() {
                                                    var t = Object(h.a)(k.a.mark((function t(r) {
                                                        return k.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return r.index = c, r.referralID = n, r.closedPrematurely = !r.isActiveStake && !r.isMatureStake, t.next = 5, e(r.stakeID, c, s, r.staker);
                                                                case 5:
                                                                    r.stake = t.sent, r.referralInterest = r.isActiveReferral ? r.referralInterest : "0", r.stakeCancelled = r.stake.closeDay > 0 && parseInt(r.stake.closeDay) < parseInt(r.stake.startDay), r.isActiveReferral = !r.stakeCancelled && r.isActiveReferral, a(r, c), V(!1);
                                                                case 11:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }());
                                            case 3:
                                                t.sent, t.next = 9;
                                                break;
                                            case 6:
                                                t.prev = 6, t.t0 = t.catch(0), console.log(t.t0);
                                            case 9:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 6]
                                    ])
                                })));
                                return function(e, a, n) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            a = function() {
                                var e = Object(h.a)(k.a.mark((function e(t, a) {
                                    return k.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                lt((function(e) {
                                                    var n = Object(g.a)(e);
                                                    return n[a] = t, n
                                                }));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            n = function() {
                                var e = Object(h.a)(k.a.mark((function e() {
                                    var a, n;
                                    return k.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (lt([]), e.prev = 1, !We) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.next = 5, _e.methods.referralCount($e).call();
                                            case 5:
                                                return a = e.sent, Me(a), Ne(Math.ceil(a / Ee)), e.next = 10, _e.methods.currentWiseDay().call();
                                            case 10:
                                                return n = e.sent, pt(n), e.next = 14, _e.methods.referralsPagination(Ke, fe * Ee, Ee).call().then((function(e) {
                                                    e.length > 0 ? (se(!0), e.forEach((function(e, a) {
                                                        console.log(e, "referralID"), t(e, a, n)
                                                    }))) : (se(!1), oe(!0), V(!1))
                                                }));
                                            case 14:
                                                e.sent;
                                            case 15:
                                                e.next = 19;
                                                break;
                                            case 17:
                                                e.prev = 17, e.t0 = e.catch(1);
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 17]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            c = function() {
                                var e = Object(h.a)(k.a.mark((function e() {
                                    var t, a;
                                    return k.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, !We) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.next = 4, _e.methods.criticalMass($e).call();
                                            case 4:
                                                t = e.sent, jt(t), a = parseInt(parseFloat(Ue.utils.fromWei(t.totalAmount.toString())) / 100), At(a);
                                            case 8:
                                                e.next = 12;
                                                break;
                                            case 10:
                                                e.prev = 10, e.t0 = e.catch(0);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 10]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        V(!0), oe(!1), c(), n()
                    }), [$e, We, Et, fe, Ee]);
                    var Dt = function(e) {
                            return 0 === e ? "NO DAYS LEFT" : 1 === e ? "1 DAY LEFT" : "".concat(e, " DAYS LEFT")
                        },
                        Ct = function(e) {
                            return 0 === e ? "TODAY" : 1 === e ? "YESTERDAY" : "".concat(e, " DAYS AGO")
                        },
                        Rt = Object(c.useState)(!1),
                        It = Object(n.a)(Rt, 2),
                        Pt = It[0],
                        Lt = It[1],
                        Mt = function() {
                            return Lt(!Pt)
                        };
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
                        container: !0,
                        className: "mt-3"
                    }, s.a.createElement(b.a, {
                        item: !0,
                        xl: 12,
                        className: "d-flex"
                    }, s.a.createElement(O.a, {
                        className: "card-box w-100"
                    }, s.a.createElement("div", {
                        className: "card-header"
                    }, s.a.createElement("div", {
                        className: "card-header--title d-flex flex-space-between align-items-center"
                    }, Ot.activationDay > 0 ? s.a.createElement("div", {
                        className: "d-flex"
                    }, s.a.createElement("div", {
                        className: "avatar-icon-wrapper avatar-initials shadow-none d-40 mr-3"
                    }, s.a.createElement("div", {
                        className: "avatar-icon text-white bg-night-sky d-40 font-size-sm"
                    }, "CM"), s.a.createElement("div", {
                        className: "badge badge-success badge-position badge-position--bottom-center badge-circle-inner",
                        title: "Badge bottom center"
                    }, "Online")), s.a.createElement("div", {
                        className: "card-header--title"
                    }, s.a.createElement("small", {
                        className: "d-block text-uppercase mt-1"
                    }, "Status Achieved"), s.a.createElement("b", null, "Critical Mass Referrer"))) : s.a.createElement("div", {
                        className: "d-flex cursor-pointer"
                    }, s.a.createElement(j.a, {
                        title: "".concat(St, "% Progress $").concat(Object(ae.e)(Ot.totalAmount, 0, Ue), " out of $10,000 Referred"),
                        placement: "right",
                        arrow: !0
                    }, s.a.createElement("div", {
                        className: "d-flex"
                    }, s.a.createElement("div", {
                        className: "avatar-icon-wrapper avatar-initials shadow-none d-40 mr-3"
                    }, s.a.createElement("div", {
                        className: "avatar-icon text-white bg-night-sky d-40 font-size-sm"
                    }, St, "%"), s.a.createElement("div", {
                        className: "badge badge-danger badge-position badge-position--bottom-center badge-circle-inner",
                        title: "Badge bottom center"
                    }, "Offline")), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "card-header--title"
                    }, s.a.createElement("small", {
                        className: "d-block text-uppercase mt-1"
                    }, "Status Not Achieved"), s.a.createElement("b", null, "Critical Mass Referrer")), s.a.createElement("div", {
                        className: "card-header--title text-left hidden"
                    }, s.a.createElement(w.a, {
                        variant: "determinate",
                        className: "progress-animated-alt progress-bar-success",
                        value: 50
                    }), s.a.createElement("div", {
                        className: "font-size-sm text-black-50 pt-1"
                    }, s.a.createElement("div", {
                        className: "align-box-row progress-bar--label mt-1 text-muted"
                    }, s.a.createElement("small", {
                        className: "text-dark"
                    }, "10"), s.a.createElement("small", {
                        className: "text-dark"
                    }, "100")))))))), s.a.createElement("div", {
                        className: "d-flex"
                    }, s.a.createElement("div", null, s.a.createElement(z.a, {
                        onClick: function(e) {
                            et(e.currentTarget)
                        },
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary d-40 p-0 d-flex align-items-center justify-content-center mr-3"
                    }, s.a.createElement(Y.a, {
                        className: "w-50"
                    })), s.a.createElement(S.a, {
                        anchorEl: Ze,
                        keepMounted: !0,
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: "center",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "center",
                            horizontal: "center"
                        },
                        open: Boolean(Ze),
                        classes: {
                            list: "p-0"
                        },
                        onClose: function() {
                            et(null)
                        }
                    }, s.a.createElement("div", {
                        className: "dropdown-menu-lg overflow-hidden p-0"
                    }, s.a.createElement("div", {
                        className: "font-weight-bold px-4 pt-3 d-flex justify-content-between"
                    }, "Results"), s.a.createElement(A.a, {
                        className: "nav-neutral-first nav-pills-rounded flex-column p-2"
                    }, s.a.createElement(D.a, {
                        button: !0,
                        onClick: function() {
                            return ke(5)
                        }
                    }, s.a.createElement("div", {
                        className: "nav-link-icon mr-2"
                    }, s.a.createElement(G.a, null)), s.a.createElement("span", {
                        className: "font-size-md"
                    }, s.a.createElement("b", null, "05"), " results per page")), s.a.createElement(D.a, {
                        button: !0,
                        onClick: function() {
                            return ke(10)
                        }
                    }, s.a.createElement("div", {
                        className: "nav-link-icon mr-2"
                    }, s.a.createElement(G.a, null)), s.a.createElement("span", {
                        className: "font-size-md"
                    }, s.a.createElement("b", null, "10"), " results per page")), s.a.createElement(D.a, {
                        button: !0,
                        onClick: function() {
                            return ke(15)
                        }
                    }, s.a.createElement("div", {
                        className: "nav-link-icon mr-2"
                    }, s.a.createElement(G.a, null)), s.a.createElement("span", {
                        className: "font-size-md"
                    }, s.a.createElement("b", null, "15"), " results per page"))), s.a.createElement("div", {
                        className: "divider"
                    }), s.a.createElement("div", {
                        className: "font-weight-bold px-4 pt-4 d-flex justify-content-between"
                    }, "Order", s.a.createElement("div", {
                        className: "badge btn-pill font-size-xxs badge-gray disabled"
                    }, "Coming soon")), s.a.createElement(A.a, {
                        className: "nav-neutral-first nav-pills-rounded flex-column p-2"
                    }, s.a.createElement(D.a, {
                        button: !0,
                        disabled: !0,
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, s.a.createElement("div", {
                        className: "mr-2"
                    }, s.a.createElement(H.a, null)), s.a.createElement("span", {
                        className: "font-size-md"
                    }, "Ascending")), s.a.createElement(D.a, {
                        button: !0,
                        disabled: !0,
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, s.a.createElement("div", {
                        className: "mr-2"
                    }, s.a.createElement(H.a, null)), s.a.createElement("span", {
                        className: "font-size-md"
                    }, "Descending"))), s.a.createElement("div", {
                        className: "divider"
                    }), s.a.createElement("div", {
                        className: "font-weight-bold px-4 pt-4 d-flex justify-content-between"
                    }, "Filter", s.a.createElement("div", {
                        className: "badge btn-pill font-size-xxs badge-gray disabled"
                    }, "Coming soon")), s.a.createElement("div", {
                        className: "font-size-md mt-3 mb-3"
                    }, s.a.createElement("div", {
                        className: "d-flex justify-content-center"
                    }, s.a.createElement(C.a, {
                        disabled: !0,
                        control: s.a.createElement(R.a, {
                            checked: !1,
                            className: "switch-small toggle-switch-primary"
                        }),
                        className: "row-reverse font-weight-bold mb-2"
                    }), s.a.createElement("span", {
                        className: "font-size-md text-black-50"
                    }, "Hide closed stakes")))))), s.a.createElement("div", null, s.a.createElement(z.a, {
                        onClick: function() {
                            V(!0), kt(!Et)
                        },
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary d-40 p-0 d-flex align-items-center justify-content-center mr-3"
                    }, s.a.createElement($.a, {
                        className: "w-50"
                    })))))), s.a.createElement("div", {
                        className: Object(l.a)("d-flex transition-base align-items-center justify-content-between py-2 px-4", {
                            "bg-secondary": !1
                        })
                    }, s.a.createElement("div", {
                        className: "hidden"
                    }, s.a.createElement(z.a, {
                        size: "small",
                        disabled: !0,
                        className: "btn-link p-0 btn-transition-none btn-link-danger"
                    }, s.a.createElement("span", {
                        className: "btn-wrapper--label font-size-sm"
                    }, "Select All Referrals"))), s.a.createElement("div", {
                        className: "hidden font-size-sm font-weight-bold"
                    }, "Referrer Action")), s.a.createElement("div", {
                        className: "divider hidden"
                    }), s.a.createElement("div", {
                        className: Object(l.a)("d-flex align-items-center transition-base px-4 py-1", {
                            "py-3 bg-secondary": !1
                        })
                    }), s.a.createElement("div", {
                        className: "pb-4 px-4 tab-item-wrapper overflow-visible active"
                    }, F && s.a.createElement("div", {
                        className: "text-center p-3 p-lg-5"
                    }, s.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, s.a.createElement("div", null, s.a.createElement(M.RingLoader, {
                        color: "var(--primary)",
                        loading: !0
                    })))), rt.length > 0 && s.a.createElement(I.a, {
                        className: "table table-alternate-spaced mb-0"
                    }, s.a.createElement("thead", {
                        className: "thead-light text-capitalize font-size-sm font-weight-bold"
                    }, s.a.createElement("tr", null, s.a.createElement("th", {
                        className: "text-left"
                    }, "Referred Stake Start"), s.a.createElement("th", {
                        className: "text-left pr-0"
                    }, "Referral Span"), s.a.createElement("th", {
                        className: "text-left pr-0"
                    }, "Contributor"), s.a.createElement("th", {
                        className: "text-left pr-0"
                    }, "Referral ID"), s.a.createElement("th", {
                        className: "text-left pr-0"
                    }, "Stake ID"), s.a.createElement("th", {
                        className: "text-right px-0"
                    }, "Referred Amount"), s.a.createElement("th", {
                        className: "text-right d-flex align-items-baseline justify-content-end px-0"
                    }, s.a.createElement("span", null, "Rewards / Shares"), s.a.createElement(j.a, {
                        title: "Available Rewards vs Collected Rewards",
                        placement: "left",
                        arrow: !0,
                        className: "hidden"
                    }, s.a.createElement("a", {
                        href: "/docs#sec-2-2-1"
                    }, s.a.createElement(z.a, {
                        className: "ml-1 p-0 mb-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                        variant: "outlined"
                    }, s.a.createElement(i.a, {
                        icon: ["far", "question-circle"],
                        className: "font-size-sm"
                    }))))), s.a.createElement("th", {
                        className: "text-center"
                    }, "Actions"))), s.a.createElement("tbody", null, rt.length > 0 && rt.map((function(e, t) {
                        return s.a.createElement(s.a.Fragment, {
                            key: t
                        }, !!e && s.a.createElement("tr", null, s.a.createElement("td", {
                            className: "pl-4 pr-0"
                        }, s.a.createElement(j.a, {
                            title: "Total Span: ".concat(e.stake.lockDays, " Days"),
                            placement: "left",
                            arrow: !0
                        }, s.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, !!e.stake.isPending && e.stake.isActive && s.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "d-flex align-items-center mr-3"
                        }, s.a.createElement(L.b, {
                            value: 0,
                            strokeWidth: 6,
                            className: "circular-progress-primary circular-progress-xs"
                        }, s.a.createElement("div", {
                            className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-neutral-primary text-primary"
                        }, s.a.createElement(H.a, {
                            className: "font-size-md"
                        })))), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, s.a.createElement(te, {
                            v: e.staker
                        })), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.stake.stakesShares, null, Ue), " SHRS")), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, e.stake.lockDays, " DAYS TOTAL"), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "text-primary"
                        }, Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Dt(e.stake.daysLeft)), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "text-success"
                        }, Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))), s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Ct(ft - e.stake.startDay + 1)), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.stake.opensDayDate))), !e.stake.isMature && !e.stake.isPending && e.stake.isActive && s.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "d-flex align-items-center mr-3"
                        }, s.a.createElement(L.b, {
                            value: 100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays),
                            strokeWidth: 6,
                            className: "circular-progress-success circular-progress-xs"
                        }, s.a.createElement("div", {
                            className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-neutral-success text-success"
                        }, s.a.createElement(H.a, {
                            className: "font-size-md"
                        })))), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, s.a.createElement(te, {
                            v: e.staker
                        })), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.stake.stakesShares, 2, Ue), " SHRS")), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, e.stake.lockDays, " DAYS TOTAL"), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "text-success"
                        }, Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Dt(e.stake.daysLeft)), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "text-success"
                        }, Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))), s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Ct(ft - e.stake.startDay + 1)), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.stake.opensDayDate))), !!e.stake.isMature && e.stake.isActive && e.isActiveReferral && s.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "d-flex align-items-center mr-3"
                        }, s.a.createElement(L.b, {
                            value: 100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays),
                            strokeWidth: 6,
                            className: "circular-progress-success circular-progress-xs"
                        }, s.a.createElement("div", {
                            className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-neutral-success text-success"
                        }, s.a.createElement(H.a, {
                            className: "font-size-md"
                        })))), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, s.a.createElement(te, {
                            v: e.staker
                        })), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.stake.stakesShares, 2, Ue), " SHRS")), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, e.stake.lockDays, " DAYS TOTAL"), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "text-success"
                        }, Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))), s.a.createElement("div", {
                            className: "hidden"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Dt(e.stake.daysLeft)), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "text-success"
                        }, Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))), s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Ct(ft - e.stake.startDay + 1)), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.stake.opensDayDate))), !e.isActiveStake && e.isActiveReferral && s.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "d-flex align-items-center mr-3"
                        }, s.a.createElement(L.b, {
                            value: e.referralInterest > 0 ? 100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays) : 0,
                            strokeWidth: 6,
                            className: "circular-progress-".concat(e.referralInterest > 0 ? "warning" : "dark", " circular-progress-xs")
                        }, s.a.createElement("div", {
                            className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-neutral-".concat(e.referralInterest > 0 ? "warning" : "dark", " text-").concat(e.referralInterest > 0 ? "warning" : "dark")
                        }, s.a.createElement(H.a, {
                            className: "font-size-md"
                        })))), s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Ct(ft - e.stake.startDay + 1)), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.stake.opensDayDate))), !e.isActiveReferral && s.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "d-flex align-items-center mr-3"
                        }, s.a.createElement(L.b, {
                            value: e.referralInterest > 0 ? 100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays) : 0,
                            strokeWidth: 6,
                            className: "circular-progress-dark circular-progress-xs"
                        }, s.a.createElement("div", {
                            className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-neutral-dark text-dark"
                        }, s.a.createElement(H.a, {
                            className: "font-size-md"
                        })))), s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, Ct(ft - e.stake.startDay + 1)), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.stake.opensDayDate)))))), s.a.createElement("td", {
                            className: "text-left pr-2"
                        }, !e.isActiveStake && s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, "STAKE CLOSED"), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "".concat(e.referralInterest > 0 ? "text-warning" : "text-dark")
                        }, e.closedPrematurely ? "".concat(Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Prematurely") : "0.00% Remaining"))), e.isActiveStake && s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, e.stake.isPending ? "NOT STARTED" : Dt(e.stake.daysLeft)), s.a.createElement("div", {
                            className: "d-flex align-items-center font-size-xs"
                        }, s.a.createElement("div", {
                            className: "".concat(e.stake.isPending ? "text-primary" : "text-success")
                        }, e.stake.isPending ? "Starts Tomorrow" : "".concat(Object(ae.k)(100 - 100 * (1 - e.stake.daysLeft / e.stake.lockDays), 0), "% Remaining"))))), s.a.createElement("td", {
                            className: "text-left"
                        }, s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "" : "text-dark")
                        }, s.a.createElement(te, {
                            v: e.staker
                        })), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, s.a.createElement("a", {
                            href: "".concat(Je.etherScan, "/address/").concat(e.staker),
                            target: "_blank"
                        }, "View Wallet", s.a.createElement(N.a, {
                            className: "ml-1 font-size-xxl"
                        }))))), s.a.createElement("td", {
                            className: "text-left pr-0"
                        }, s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold"
                        }, s.a.createElement(ee.a, {
                            v: e.referralID
                        })), e.isActiveReferral && e.isActiveStake && !!e.stake.isPending && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-primary d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-primary mr-1 border-0 badge-circle"
                        }, "Pending"), "Pending"), e.isActiveReferral && e.isActiveStake && !e.stake.isPending && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-success d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-success mr-1 border-0 badge-circle"
                        }, "Active"), "Active"), e.isActiveReferral && e.closedPrematurely && !e.stakeCancelled && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-warning d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-warning mr-1 border-0 badge-circle"
                        }, "Active"), "Active"), e.isActiveReferral && !e.isActiveStake && !e.closedPrematurely && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-success d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-success mr-1 border-0 badge-circle"
                        }, "Active"), "Active"), e.isActiveReferral && e.stakeCancelled && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-dark d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-dark mr-1 border-0 badge-circle"
                        }, "Inactive"), "Inactive"), !e.isActiveReferral && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-dark d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-dark mr-1 border-0 badge-circle"
                        }, "Inactive"), "Inactive"))), s.a.createElement("td", {
                            className: "text-left pr-0"
                        }, s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold"
                        }, s.a.createElement(ee.a, {
                            v: e.stakeID
                        })), !0 === e.stake.isPending && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-primary d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-primary mr-1 border-0 badge-circle"
                        }, "Pending"), "Pending"), !e.stake.isMature && e.stake.isActive && !e.stake.isPending && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-success d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-success mr-1 border-0 badge-circle"
                        }, "Ongoing"), "Ongoing"), !!e.stake.isMature && e.stake.isActive && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-success d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-success mr-1 border-0 badge-circle"
                        }, "Matured"), "Matured"), !e.stake.isActive && s.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-dark d-flex align-items-center"
                        }, s.a.createElement("div", {
                            className: "badge badge-dark mr-1 border-0 badge-circle"
                        }, (e.stakeCancelled, "Closed")), (e.stakeCancelled, "Closed")))), s.a.createElement("td", {
                            className: "text-right px-1"
                        }, s.a.createElement("div", {
                            className: "hide-md-always"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActiveReferral ? "text-primary" : "text-black-50")
                        }, Object(ae.f)(e.stake.stakedAmount, null, Ue), " WISE"), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.stake.stakesShares, null, Ue), " SHRS")), s.a.createElement("div", {
                            className: "show-md-only-block"
                        }, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActiveReferral ? "text-primary" : "text-black-50")
                        }, Object(ae.f)(e.stake.stakedAmount, 2, Ue), " WISE"), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.stake.stakesShares, 2, Ue), " SHRS"))), s.a.createElement("td", {
                            className: "text-right px-1"
                        }, !e.stake.isMature && !!e.stake.isPending && s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "text-primary" : "text-black-50")
                        }, "+", Object(ae.f)(e.referralInterest, null, Ue), " WISE"), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.referrerShares, null, Ue), " rSHRS")), !e.stake.isMature && !e.stake.isPending && e.isActiveReferral && s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.stake.isActive ? "text-success" : "text-warning")
                        }, "+", Object(ae.f)(e.referralInterest, null, Ue), " WISE"), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.referrerShares, null, Ue), " rSHRS")), !e.stake.isMature && !e.stake.isPending && !e.isActiveReferral && s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold text-black-50"
                        }, "+", Object(ae.f)(e.referralInterest, null, Ue), " WISE"), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.referrerShares, null, Ue), " rSHRS")), !!e.stake.isMature && s.a.createElement("div", null, s.a.createElement("div", {
                            className: "font-size-sm font-weight-bold text-success"
                        }, "+", Object(ae.f)(e.referralInterest, null, Ue), " WISE"), s.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ae.f)(e.referrerShares, null, Ue), " rSHRS"))), s.a.createElement("td", {
                            className: "text-center"
                        }, s.a.createElement(z.a, {
                            onClick: function() {
                                y(e)
                            },
                            className: "btn-neutral-primary mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, s.a.createElement(i.a, {
                            icon: ["fas", "search"],
                            className: "font-size-sm"
                        }), s.a.createElement("span", {
                            className: "btn-wrapper--label hidden"
                        }, "Details")), s.a.createElement(j.a, {
                            title: "Wise Collect - Coming Soon",
                            placement: "right",
                            arrow: !0
                        }, s.a.createElement(z.a, {
                            className: "btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, s.a.createElement("span", {
                            className: "btn-wrapper--icon"
                        }, s.a.createElement(i.a, {
                            icon: ["fas", "plus"]
                        })))))), s.a.createElement("tr", {
                            className: "divider"
                        }))
                    })))), !!ie && s.a.createElement("div", {
                        className: "text-center p-3 p-lg-5"
                    }, s.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, s.a.createElement("div", {
                        className: "d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-primary text-teal m-0 d-130"
                    }, s.a.createElement(i.a, {
                        icon: ["fas", "sitemap"],
                        className: "d-flex align-self-center display-3"
                    }))), s.a.createElement("div", {
                        className: ""
                    }, s.a.createElement("h4", {
                        className: "font-weight-bold text-teal line-height-sm px-4 mt-5"
                    }, Ot.activationDay > 0 ? "You don't have any referred stakes at the moment" : "You don't have critical mass referrer status yet"), s.a.createElement("p", {
                        className: "mb-0 font-size-lg"
                    }, "Start ", s.a.createElement("b", null, "promoting"), " WISE by creating your ", s.a.createElement("b", null, "referral link")), s.a.createElement("div", {
                        className: "pt-5 d-flex text-center justify-content-center"
                    }, s.a.createElement("div", null, s.a.createElement(z.a, {
                        onClick: Mt,
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary p-0 d-flex align-items-center justify-content-center p-2 px-3 mr-3"
                    }, "Create WISE Referral Link")))))), s.a.createElement("div", {
                        className: "card-footer bg-secondary p-4 d-flex justify-content-center"
                    }, s.a.createElement(T.a, {
                        onChange: function(e, t) {
                            pe(t - 1)
                        },
                        className: "pagination-primary",
                        count: ye
                    }))))), s.a.createElement(P.a, {
                        maxWidth: "lg",
                        onClose: function() {
                            y({
                                stake: {}
                            })
                        },
                        open: E,
                        classes: {
                            paper: "shadow-lg rounded w-100"
                        }
                    }, s.a.createElement(c.Suspense, {
                        fallback: s.a.createElement("div", null)
                    }, s.a.createElement(ne, {
                        stake: Se,
                        referral: Re,
                        web3: Ue,
                        wiseContract: _e,
                        account: $e,
                        setStakes: nt
                    }))), s.a.createElement(P.a, {
                        open: Pt,
                        onClose: Mt,
                        classes: {
                            paper: "shadow-lg rounded"
                        }
                    }, s.a.createElement(c.Suspense, {
                        fallback: s.a.createElement("div", null)
                    }, s.a.createElement(ce, {
                        v: $e
                    }))))
                }))),
                re = function(e) {
                    Object(m.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        return Object(o.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement(p.a, {
                                className: "docs-overflow-visible"
                            }, s.a.createElement("div", {
                                className: "card-header rounded-0 bg-white px-4 px-lg-4 py-0 border-bottom mt-5"
                            }, s.a.createElement("div", {
                                className: "py-0 w-100 mt-5"
                            }, s.a.createElement(b.a, {
                                container: !0,
                                spacing: 6
                            }, s.a.createElement(b.a, {
                                item: !0,
                                md: 12,
                                lg: 12
                            }, s.a.createElement("div", {
                                className: "dashboard-header"
                            }, s.a.createElement(v.c, {
                                titleHeading: "Wise Referrals",
                                titleDescription: "Stakes opened with your referral address",
                                titleIcon: "RecordVoiceOverTwoToneIcon"
                            }))), s.a.createElement(b.a, {
                                item: !0,
                                md: 12,
                                lg: 12
                            }, s.a.createElement(se, null)))))))
                        }
                    }]), a
                }(c.Component);

            function le() {
                r.a.initialize("UA-168804464-1"), r.a.pageview(window.location.pathname + window.location.search);
                var e = Object(_.b)(),
                    t = (e.account, e.activate, e.active, e.connector),
                    a = e.chainId;
                r.a.initialize("UA-168804464-1"), r.a.pageview(window.location.pathname + window.location.search);
                var i = s.a.useState(),
                    o = Object(n.a)(i, 2),
                    d = o[0],
                    m = o[1];
                Object(c.useEffect)((function() {
                    d && d === t && m(void 0)
                }), [d, t]);
                var u = Object(q.a)();
                Object(K.a)(!u || !!d);
                window.ethereum && window.ethereum.selectedAddress;
                var b = Object(c.useState)(!1),
                    f = Object(n.a)(b, 2),
                    p = f[0],
                    v = f[1];
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: "d-block d-lg-flex app-inner-content-layout app-inner-content-layout-fixed"
                }, s.a.createElement("div", {
                    className: Object(l.a)("app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary", {
                        hidden: a !== a
                    })
                }, s.a.createElement(re, null)), s.a.createElement("div", {
                    onClick: function() {
                        return v(!p)
                    },
                    className: Object(l.a)("sidebar-inner-layout-overlay", {
                        active: p
                    })
                })))
            }
        }
    }
]);