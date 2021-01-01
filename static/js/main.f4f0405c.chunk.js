(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [14], {
        100: function(e, a, t) {
            "use strict";
            t.d(a, "b", (function() {
                return F
            })), t.d(a, "f", (function() {
                return be
            })), t.d(a, "e", (function() {
                return ye
            })), t.d(a, "a", (function() {
                return fe
            })), t.d(a, "c", (function() {
                return $e
            })), t.d(a, "d", (function() {
                return xa
            }));
            var n = t(4),
                s = t.n(n),
                r = t(143),
                l = t(25),
                i = t(0),
                o = t.n(i),
                p = t(9),
                c = t(35),
                m = t(66),
                d = t(18),
                u = t(741),
                b = t(726),
                y = t(244),
                f = t.n(y),
                E = t(91),
                g = t.n(E),
                h = Object(c.b)((function(e) {
                    return {
                        headerDrawerToggle: e.SchemeOptions.headerDrawerToggle
                    }
                }), (function(e) {
                    return {
                        setHeaderDrawerToggle: function(a) {
                            return e(Object(m.c)(a))
                        }
                    }
                }))((function(e) {
                    var a = e.headerDrawerToggle,
                        t = e.setHeaderDrawerToggle,
                        n = function() {
                            t(!a)
                        };
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "app-drawer-wrapper"
                    }, o.a.createElement(u.a, {
                        arrow: !0,
                        title: "More Statistic Options - Coming Soon",
                        placement: "left"
                    }, o.a.createElement("button", {
                        className: Object(p.a)("navbar-toggler hamburger hamburger--elastic", {
                            "is-active": a
                        })
                    }, o.a.createElement("span", {
                        className: "hamburger-box"
                    }, o.a.createElement("span", {
                        className: "hamburger-inner"
                    }))))), o.a.createElement("div", {
                        className: "app-drawer-content"
                    }, o.a.createElement(u.a, {
                        title: "Close Statistic",
                        placement: "left"
                    }, o.a.createElement(b.a, {
                        onClick: n,
                        className: "close-drawer-btn btn btn-sm"
                    }, o.a.createElement("div", {
                        className: Object(p.a)("navbar-toggler hamburger hamburger--elastic", {
                            "is-active": a
                        })
                    }, o.a.createElement("span", {
                        className: "hamburger-box"
                    }, o.a.createElement("span", {
                        className: "hamburger-inner"
                    }))))), o.a.createElement("div", {
                        className: "vh-100 shadow-overflow"
                    }, o.a.createElement(g.a, null, o.a.createElement("div", {
                        className: "bg-secondary pb-4"
                    }, o.a.createElement("div", {
                        className: "text-center px-4 pt-4"
                    }, o.a.createElement("div", {
                        className: "font-weight-bold font-size-xl mb-0 line-height-1 text-black"
                    }, "Statistics"), o.a.createElement("p", {
                        className: "text-black-50"
                    }, "New Stakes")), o.a.createElement("div", {
                        className: "rounded overflow-hidden mx-4 bg-deep-sky"
                    }, o.a.createElement("div", {
                        className: "text-center text-white pt-4 px-4"
                    }, o.a.createElement("h3", {
                        className: "mb-0 display-3 mt-1 font-weight-bold"
                    }), o.a.createElement("div", {
                        className: "text-white-50 text-center"
                    }, "Total Amount")), o.a.createElement("div", null, o.a.createElement(f.a, {
                        options: {
                            chart: {
                                toolbar: {
                                    show: !1
                                },
                                sparkline: {
                                    enabled: !0
                                }
                            },
                            dataLabels: {
                                enabled: !1
                            },
                            stroke: {
                                color: "#4191ff",
                                curve: "smooth",
                                width: 2
                            },
                            colors: ["#4191ff"],
                            fill: {
                                color: "#4191ff",
                                opacity: .1,
                                gradient: {
                                    shade: "light",
                                    type: "vertical",
                                    shadeIntensity: .2,
                                    inverseColors: !1,
                                    opacityFrom: .6,
                                    opacityTo: 0,
                                    stops: [0, 100]
                                }
                            },
                            legend: {
                                show: !1
                            },
                            xaxis: {
                                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                crosshairs: {
                                    width: 1
                                }
                            },
                            yaxis: {
                                min: 0
                            }
                        },
                        series: [{
                            name: "Monthly Analytics",
                            data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
                        }],
                        type: "area",
                        height: 120
                    })))), o.a.createElement("div", {
                        className: "divider"
                    }), o.a.createElement("div", {
                        className: "px-4 text-center pt-4"
                    }, o.a.createElement("div", {
                        className: "font-weight-bold font-size-xl mb-0 line-height-1 text-black"
                    }, "Transactions"), o.a.createElement("p", {
                        className: "text-black-50"
                    }, "Recent transactions")), o.a.createElement("div", {
                        className: "divider"
                    }), o.a.createElement("div", {
                        className: "text-center bg-secondary p-4 d-block"
                    }, o.a.createElement(b.a, {
                        className: "btn-neutral-success",
                        size: "small"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "search"]
                    })), o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, "See More Details")))))), o.a.createElement("div", {
                        onClick: n,
                        className: Object(p.a)("app-drawer-overlay", {
                            "is-active": a
                        })
                    }))
                })),
                v = t(703),
                w = t(729),
                T = t(728),
                S = t(730),
                k = t(731),
                N = function() {
                    var e = Object(i.useState)(null),
                        a = Object(l.a)(e, 2),
                        t = a[0],
                        n = a[1];
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, "0x641AD78BAca220C5BD28b51Ce8e0F495e85Fe689"), o.a.createElement("div", {
                        className: "position-relative ml-2 hidden"
                    }, o.a.createElement(b.a, {
                        onClick: function(e) {
                            n(e.currentTarget)
                        },
                        className: "btn-link p-0 text-left d-flex btn-transition-none align-items-center"
                    }, o.a.createElement("div", {
                        className: "d-block p-0 avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "badge badge-success badge-circle p-top-a"
                    }, "Online"), o.a.createElement("div", {
                        className: "avatar-icon rounded"
                    }, "H")), o.a.createElement("div", {
                        className: "d-none d-xl-block pl-2"
                    }, o.a.createElement("div", {
                        className: "font-weight-bold"
                    }, "Emma Taylor"), o.a.createElement("span", {
                        className: "text-black-50"
                    }, "Senior accountant")), o.a.createElement("span", {
                        className: "pl-1 pl-xl-3"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "angle-down"],
                        className: "opacity-5"
                    }))), o.a.createElement(v.a, {
                        anchorEl: t,
                        keepMounted: !0,
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "center"
                        },
                        open: Boolean(t),
                        classes: {
                            list: "p-0"
                        },
                        onClose: function() {
                            n(null)
                        }
                    }, o.a.createElement("div", {
                        className: "dropdown-menu-lg overflow-hidden p-0"
                    }, o.a.createElement("div", {
                        className: "d-flex px-3 pt-3 align-items-center justify-content-between"
                    }, o.a.createElement(w.a, {
                        className: "text-capitalize pl-1 font-weight-bold text-primary"
                    }, o.a.createElement("span", null, "Profile Options")), o.a.createElement("div", {
                        className: "font-size-xs pr-1"
                    }, o.a.createElement(u.a, {
                        title: "Change settings",
                        arrow: !0
                    }, o.a.createElement("a", {
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "plus-circle"]
                    }))))), o.a.createElement(T.a, {
                        component: "div",
                        className: "nav-neutral-primary text-left d-flex align-items-center flex-column px-3 pb-3"
                    }, o.a.createElement(S.a, {
                        button: !0,
                        className: "d-block text-left"
                    }, "My Account"), o.a.createElement(S.a, {
                        button: !0,
                        className: "d-block text-left"
                    }, "Profile settings"), o.a.createElement(S.a, {
                        button: !0,
                        className: "d-block text-left"
                    }, "Active tasks")), o.a.createElement(k.a, {
                        className: "w-100"
                    }), o.a.createElement("div", {
                        className: "d-flex py-3 justify-content-center"
                    }, o.a.createElement("div", {
                        className: "d-flex align-items-center"
                    }, o.a.createElement("div", null, o.a.createElement(d.a, {
                        icon: ["far", "chart-bar"],
                        className: "font-size-xxl text-info"
                    })), o.a.createElement("div", {
                        className: "pl-3 line-height-sm"
                    }, o.a.createElement("b", {
                        className: "font-size-lg"
                    }, "$9,693"), o.a.createElement("span", {
                        className: "text-black-50 d-block"
                    }, "revenue")))), o.a.createElement(k.a, {
                        className: "w-100"
                    }), o.a.createElement("div", {
                        className: "d-block rounded-bottom py-3 text-center"
                    }, o.a.createElement(u.a, {
                        arrow: !0,
                        title: "Facebook"
                    }, o.a.createElement(b.a, {
                        size: "large",
                        className: "btn-facebook p-0 d-40 font-size-lg text-white"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fab", "facebook"]
                    })))), o.a.createElement(u.a, {
                        arrow: !0,
                        title: "Dribbble"
                    }, o.a.createElement(b.a, {
                        size: "large",
                        className: "btn-dribbble p-0 d-40 font-size-lg text-white mx-2"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fab", "dribbble"]
                    })))), o.a.createElement(u.a, {
                        arrow: !0,
                        title: "Twitter"
                    }, o.a.createElement(b.a, {
                        size: "large",
                        className: "btn-twitter p-0 d-40 font-size-lg text-white"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fab", "twitter"]
                    })))))))))
                },
                x = t(26),
                O = function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "app-header-menu"
                    }, o.a.createElement("div", {
                        className: "header-nav-wrapper navbar-light"
                    }, o.a.createElement("div", {
                        className: "header-nav-menu d-none d-lg-block"
                    }, o.a.createElement("ul", {
                        className: "d-flex nav nav-neutral-first justify-content-center"
                    }, o.a.createElement("li", null, o.a.createElement(x.b, {
                        to: "/reservations",
                        className: "font-weight-bold rounded-sm px-3"
                    }, "Reservations")), o.a.createElement("li", null, o.a.createElement(x.b, {
                        to: "/referrals",
                        className: "font-weight-bold rounded-sm px-3"
                    }, "Referrals")), o.a.createElement("li", null, o.a.createElement(x.b, {
                        to: "/docs",
                        className: "font-weight-bold rounded-sm px-3"
                    }, "Docs")))))))
                },
                I = t(109),
                W = t.n(I),
                M = t(114),
                A = t.n(M),
                D = (t(372), t(116)),
                j = t(117),
                C = t(42),
                R = (t(145), t(80)),
                P = t(165),
                _ = t(240),
                z = t(164),
                H = t(60),
                F = (new R.a({
                    supportedChainIds: [1, 3, 4, 5, 42]
                }), Object(c.b)((function(e) {
                    return {
                        headerShadow: e.SchemeOptions.headerShadow,
                        headerBgTransparent: e.SchemeOptions.headerBgTransparent,
                        sidebarToggleMobile: e.SchemeOptions.sidebarToggleMobile,
                        sharePrice: e.SchemeOptions.sharePrice
                    }
                }), (function(e) {
                    return {
                        setSidebarToggleMobile: function(a) {
                            return e(Object(m.e)(a))
                        },
                        setSharePrice: function(a) {
                            return e(Object(m.d)(a))
                        }
                    }
                }))((function(e) {
                    var a = e.setSharePrice,
                        t = e.headerShadow,
                        n = (e.headerBgTransparent, e.sidebarToggleMobile),
                        c = e.setSidebarToggleMobile,
                        m = Object(C.b)(),
                        d = m.chainId,
                        u = m.account,
                        b = (m.library, m.activate, m.active, m.connector),
                        y = o.a.useState(),
                        f = Object(l.a)(y, 2),
                        E = f[0],
                        g = f[1];
                    Object(i.useEffect)((function() {
                        E && E === b && g(void 0)
                    }), [E, b]);
                    var v = Object(D.a)();
                    Object(i.useRef)(!0);
                    Object(j.a)(!v || !!E);
                    var w = Object(z.a)(d),
                        T = new A.a(A.a.givenProvider),
                        S = (window.ethereum && window.ethereum.selectedAddress, new T.eth.Contract(P, w.tokenAddress)),
                        k = (new T.eth.Contract(_, w.uniswapAddress), Object(i.useState)({})),
                        x = Object(l.a)(k, 2),
                        I = x[0],
                        M = x[1],
                        R = Object(i.useState)("0.00"),
                        F = Object(l.a)(R, 2),
                        q = (F[0], F[1]),
                        L = Object(i.useState)("0.00"),
                        B = Object(l.a)(L, 2),
                        U = B[0],
                        G = B[1],
                        V = Object(i.useState)("0.00"),
                        Y = Object(l.a)(V, 2),
                        K = Y[0],
                        X = Y[1],
                        J = Object(i.useState)("0.00"),
                        Q = Object(l.a)(J, 2),
                        $ = Q[0],
                        Z = Q[1],
                        ee = Object(i.useState)("0.00"),
                        ae = Object(l.a)(ee, 2),
                        te = ae[0],
                        ne = ae[1];
                    return Object(i.useEffect)((function() {
                        (function() {
                            var e = Object(r.a)(s.a.mark((function e() {
                                var t, n, l, i, o, p, c, m, u, b, y, f, E, g;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, !d) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 4, S.methods.globals().call().then((function(e) {
                                                e && (t = e.totalStaked, n = e.totalShares, l = e.referralShares, i = e.sharePrice, e.currentWiseDay, M(e), a(e.sharePrice))
                                            }));
                                        case 4:
                                            return e.sent, o = function(e, a) {
                                                var t = (T.utils.fromWei(a.toString()) - T.utils.fromWei(e.toString())) / T.utils.fromWei(a.toString()) * 100;
                                                X(t)
                                            }, p = function(e, a) {
                                                var t = (T.utils.fromWei(a.toString()) - T.utils.fromWei(e.toString())) / T.utils.fromWei(a.toString()) * 100;
                                                Z(t)
                                            }, c = function(e, a) {
                                                var t = (T.utils.fromWei(a.toString()) - T.utils.fromWei(e.toString())) / T.utils.fromWei(a.toString()) * 100;
                                                G(t)
                                            }, m = function(e, a) {
                                                var t = (T.utils.fromWei(a.toString()) - T.utils.fromWei(e.toString())) / T.utils.fromWei(a.toString()) * 100;
                                                ne(t)
                                            }, u = function() {
                                                var e = Object(r.a)(s.a.mark((function e(a) {
                                                    return s.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, S.getPastEvents("NewGlobals", a).then((function(e) {
                                                                    if (e.length > 0) {
                                                                        var s = e[0].returnValues.totalStaked > 0 ? e[0].returnValues.totalStaked : t,
                                                                            r = e[0].returnValues.totalShares > 0 ? e[0].returnValues.totalShares : n,
                                                                            d = e[0].returnValues.referrerShares > 0 ? e[0].returnValues.referrerShares : l,
                                                                            b = e[0].returnValues.shareRate;
                                                                        return c(s, t), o(r, n), p(d, l), m(b, i), !0
                                                                    }
                                                                    var y = a.fromBlock - w.blockStep,
                                                                        f = {
                                                                            fromBlock: y,
                                                                            toBlock: y + w.blockStep
                                                                        };
                                                                    u(f)
                                                                }));
                                                            case 2:
                                                                e.sent;
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 12, T.eth.getBlock("latest");
                                        case 12:
                                            return b = e.sent, y = b.number - w.blocksInDay, f = {
                                                fromBlock: y,
                                                toBlock: y + w.blockStep
                                            }, u(f), e.next = 18, S.methods.balanceOf(w.uniswapPair).call();
                                        case 18:
                                            return E = e.sent, e.next = 21, S.methods.totalSupply().call();
                                        case 21:
                                            g = e.sent, q(parseInt(t / (g - E) * 100));
                                        case 24:
                                            e.next = 29;
                                            break;
                                        case 26:
                                            e.prev = 26, e.t0 = e.catch(0), console.log(e.t0);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 26]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [u, d]), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("app-header", {
                            "app-header--shadow": t
                        })
                    }, o.a.createElement("div", {
                        className: "container d-flex w-100 justify-content-space-around",
                        spacing: 0
                    }, o.a.createElement("div", {
                        className: "flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "d-flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "font-size-md text-success mr-2 show-md-only"
                    }, o.a.createElement(W.a, null)), o.a.createElement("div", {
                        className: "px-2"
                    }, o.a.createElement("span", {
                        className: "opacity-6 text-uppercase font-size-sm"
                    }, o.a.createElement("small", null, "Global WISE Staked")), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center pt-1"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg line-height-1"
                    }, Object(H.e)(I.totalStaked, 0, T), " WISE"), U > 0 ? o.a.createElement("div", {
                        className: "badge badge-neutral-success ml-2 text-success"
                    }, "+", "".concat(Object(H.k)(U, 2)), "%") : o.a.createElement("div", {
                        className: "badge badge-neutral-danger ml-2 text-danger"
                    }, "".concat(Object(H.k)(U, 2)), "%"))))), o.a.createElement("div", {
                        className: "flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "d-flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "font-size-md text-success mr-2 show-md-only"
                    }, o.a.createElement(W.a, null)), o.a.createElement("div", {
                        className: "px-2"
                    }, o.a.createElement("span", {
                        className: "opacity-6 text-uppercase font-size-sm"
                    }, o.a.createElement("small", null, "Global WISE Shares")), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center pt-1"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg line-height-1"
                    }, Object(H.e)(I.totalShares, 0, T), " SHRS"), K > 0 ? o.a.createElement("div", {
                        className: "badge badge-neutral-success ml-2 text-success"
                    }, "+", "".concat(Object(H.k)(K, 2)), "%") : o.a.createElement("div", {
                        className: "badge badge-neutral-danger ml-2 text-danger"
                    }, "".concat(Object(H.k)(K, 2)), "%"))))), o.a.createElement("div", {
                        className: "flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "d-flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "font-size-md text-success mr-2 show-md-only"
                    }, o.a.createElement(W.a, null)), o.a.createElement("div", {
                        className: "px-2"
                    }, o.a.createElement("span", {
                        className: "opacity-6 text-uppercase font-size-sm"
                    }, o.a.createElement("small", null, "Global Referral Shares")), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center pt-1"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg line-height-1"
                    }, Object(H.e)(I.referralShares, 0, T), " rSHRS"), $ > 0 ? o.a.createElement("div", {
                        className: "badge badge-neutral-success ml-2 text-success"
                    }, "+", "".concat(Object(H.k)($, 2)), "%") : o.a.createElement("div", {
                        className: "badge badge-neutral-danger ml-2 text-danger"
                    }, "".concat(Object(H.k)($, 2)), "%"))))), o.a.createElement("div", {
                        className: "flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "d-flex align-items-center pr-0"
                    }, o.a.createElement("div", {
                        className: "font-size-lg text-success mr-2 show-md-only"
                    }, o.a.createElement(W.a, null)), o.a.createElement("div", {
                        className: "px-2"
                    }, o.a.createElement("span", {
                        className: "opacity-6 text-uppercase font-size-sm"
                    }, o.a.createElement("small", null, "Global Share Price")), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center pt-1"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg line-height-1"
                    }, o.a.createElement("small", {
                        className: "hidden opacity-6 pr-1"
                    }, "$"), Object(H.e)(I.sharePrice, 3, T), " WISE"), te > 0 ? o.a.createElement("div", {
                        className: "badge badge-neutral-success ml-2 text-success"
                    }, "+", "".concat(Object(H.k)(te, 2)), "%") : o.a.createElement("div", {
                        className: "badge badge-neutral-success ml-2 text-success"
                    }, "+0.00%")))))), o.a.createElement("div", {
                        className: "app-header--pane"
                    }, o.a.createElement("button", {
                        className: Object(p.a)("navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn", {
                            "is-active": n
                        }),
                        onClick: function() {
                            c(!n)
                        }
                    }, o.a.createElement("span", {
                        className: "hamburger-box"
                    }, o.a.createElement("span", {
                        className: "hamburger-inner"
                    }))), o.a.createElement("div", {
                        className: "hidden"
                    }, o.a.createElement(O, null))), o.a.createElement("div", {
                        className: "app-header--pane"
                    }, o.a.createElement("div", {
                        className: "hidden"
                    }, o.a.createElement(N, null)), o.a.createElement(h, null))))
                }))),
                q = t(99),
                L = t(241),
                B = t.n(L),
                U = t(130),
                G = t.n(U),
                V = t(128),
                Y = t.n(V),
                K = t(132),
                X = t.n(K),
                J = t(127),
                Q = t.n(J),
                $ = t(362),
                Z = t.n($),
                ee = t(97),
                ae = t.n(ee),
                te = t(360),
                ne = t.n(te),
                se = t(344),
                re = t.n(se),
                le = t(133),
                ie = t.n(le),
                oe = t(343),
                pe = t.n(oe),
                ce = t(361),
                me = t.n(ce),
                de = t(131),
                ue = t.n(de),
                be = Object(c.b)((function(e) {
                    return {
                        sidebarShadow: e.SchemeOptions.sidebarShadow,
                        sidebarStyle: e.SchemeOptions.sidebarStyle,
                        sidebarToggleMobile: e.SchemeOptions.sidebarToggleMobile,
                        darkMode: e.SchemeOptions.darkMode
                    }
                }), (function(e) {
                    return {
                        setSidebarToggleMobile: function(a) {
                            return e(Object(m.e)(a))
                        },
                        setDarkMode: function(a) {
                            return e(Object(m.b)(a))
                        }
                    }
                }))((function(e) {
                    var a = Object(q.f)().location.pathname,
                        t = e.sidebarShadow,
                        n = e.sidebarStyle,
                        s = e.sidebarToggleMobile,
                        r = e.setSidebarToggleMobile,
                        l = e.darkMode,
                        i = e.setDarkMode;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("app-sidebar app-sidebar--collapsed app-sidebar--mini bg-primary", n, {
                            "app-sidebar--shadow": t
                        })
                    }, o.a.createElement("div", {
                        className: "app-sidebar--header"
                    }, o.a.createElement("div", {
                        className: "app-sidebar-logo hover-scale-lg"
                    }, o.a.createElement(x.b, {
                        to: "/overview",
                        title: "",
                        className: "app-sidebar-logo"
                    }, o.a.createElement(B.a, {
                        className: "wise-logo-white",
                        src: "wise.svg"
                    }, o.a.createElement("img", {
                        alt: "wise",
                        src: "wise.svg"
                    }))))), o.a.createElement("div", {
                        className: "app-sidebar--content"
                    }, o.a.createElement(g.a, {
                        className: "d-flex align-items-center justify-content-center flex-between"
                    }, o.a.createElement("ul", {
                        className: "sidebar-menu-collapsed"
                    }, o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Documentation",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        activeClassName: "active",
                        to: "/docs"
                    }, o.a.createElement("span", null, o.a.createElement(ne.a, {
                        className: Object(p.a)("hover-text-white", {
                            "text-white": "/docs" === a,
                            "text-white-50": "/docs" !== a
                        })
                    }))))), o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Dark Mode",
                        arrow: !0
                    }, o.a.createElement("span", {
                        className: "cursor-pointer",
                        onClick: function() {
                            console.log(l), i(!l)
                        }
                    }, o.a.createElement(pe.a, {
                        className: "hover-text-white"
                    })))), o.a.createElement("li", {
                        className: "hidden"
                    }, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Connect Wallet",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/wallet-dashboard"
                    }, o.a.createElement("span", null, o.a.createElement(me.a, {
                        className: "text-white-50 hover-text-white"
                    }))))), o.a.createElement("li", {
                        className: "d-none hidden"
                    }, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Home",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        activeClassName: "active",
                        to: "/overview"
                    }, o.a.createElement("span", null, o.a.createElement(ae.a, {
                        className: "text-white-50 hover-text-white"
                    })))))), o.a.createElement("ul", {
                        className: "sidebar-menu-collapsed"
                    }, o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Wise Dashboard",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/dashboard"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(G.a, null))))), o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Personal Dashboard",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/personal"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(ue.a, null))))), o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Token Reservations",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/reserve"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(X.a, null))))), o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Staking System",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/staking"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(Q.a, null))))), o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Referral System",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        activeClassName: "active",
                        to: "/refer"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(Y.a, null))))), o.a.createElement("li", null, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Gas Refunds",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/gas"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(ie.a, null))))), o.a.createElement("li", {
                        className: "hidden"
                    }, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Wise Swap",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        disabled: !0,
                        activeClassName: "active",
                        to: "/wise-swaps"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(W.a, null))))), o.a.createElement("li", {
                        className: "hidden"
                    }, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Profile",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        activeClassName: "active",
                        to: "/profile"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(Z.a, null))))), o.a.createElement("li", {
                        className: "hidden"
                    }, o.a.createElement(u.a, {
                        classes: {
                            tooltip: "tooltip-secondary text-nowrap"
                        },
                        placement: "right",
                        title: "Settings",
                        arrow: !0
                    }, o.a.createElement(x.b, {
                        activeClassName: "active",
                        to: "/settings"
                    }, o.a.createElement("span", {
                        className: "text-white-50 hover-text-white"
                    }, o.a.createElement(re.a, null))))))))), o.a.createElement("div", {
                        onClick: function() {
                            r(!s)
                        },
                        className: Object(p.a)("app-sidebar-overlay", {
                            "is-active": s
                        })
                    }))
                })),
                ye = Object(c.b)((function(e) {
                    return {
                        sidebarShadow: e.SchemeOptions.sidebarShadow,
                        sidebarStyle: e.SchemeOptions.sidebarStyle,
                        sidebarToggleMobile: e.SchemeOptions.sidebarToggleMobile
                    }
                }), (function(e) {
                    return {
                        setSidebarToggleMobile: function(a) {
                            return e(Object(m.e)(a))
                        }
                    }
                }))((function(e) {
                    var a = e.sidebarStyle,
                        t = e.sidebarShadow,
                        n = e.sidebarToggleMobile,
                        s = e.setSidebarToggleMobile;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("app-sidebar", a, {
                            "app-sidebar--shadow": t
                        })
                    }, o.a.createElement(be, null)), o.a.createElement("div", {
                        onClick: function() {
                            s(!n)
                        },
                        className: Object(p.a)("app-sidebar-overlay", {
                            "is-active": n
                        })
                    }))
                })),
                fe = Object(c.b)((function(e) {
                    return {
                        footerShadow: e.SchemeOptions.footerShadow,
                        footerBgTransparent: e.SchemeOptions.footerBgTransparent
                    }
                }))((function(e) {
                    var a = e.footerShadow,
                        t = e.footerBgTransparent;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("app-footer text-black-50", {
                            "app-footer--shadow": a,
                            "app-footer--opacity-bg": t
                        })
                    }, o.a.createElement("div", {
                        className: "app-footer--first"
                    }, o.a.createElement(T.a, {
                        component: "div",
                        className: "nav-neutral-primary d-flex align-items-center"
                    }, o.a.createElement(S.a, {
                        className: "rounded-sm",
                        button: !0,
                        component: x.b,
                        to: "/DashboardAnalytics"
                    }, o.a.createElement("span", null, "Analytics")), o.a.createElement(S.a, {
                        className: "rounded-sm",
                        button: !0,
                        component: x.b,
                        to: "/DashboardStatistics"
                    }, o.a.createElement("span", null, "Statistics")), o.a.createElement(S.a, {
                        className: "rounded-sm",
                        button: !0,
                        component: x.b,
                        to: "/Overview"
                    }, o.a.createElement("span", null, "Overview")))), o.a.createElement("div", {
                        className: "app-footer--second"
                    }, o.a.createElement("span", null, "WISE"))))
                })),
                Ee = (Object(c.b)((function(e) {
                    return {
                        pageTitleStyle: e.SchemeOptions.pageTitleStyle,
                        pageTitleBackground: e.SchemeOptions.pageTitleBackground,
                        pageTitleShadow: e.SchemeOptions.pageTitleShadow,
                        pageTitleIconBox: e.SchemeOptions.pageTitleIconBox,
                        pageTitleDescription: e.SchemeOptions.pageTitleDescription
                    }
                }))((function(e) {
                    var a = e.pageTitleStyle,
                        t = e.pageTitleBackground,
                        n = e.pageTitleShadow,
                        s = e.pageTitleIconBox,
                        r = e.pageTitleDescription,
                        l = e.titleHeading,
                        i = e.titleDescription,
                        c = e.children;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("app-page-title", a, t, {
                            "app-page-title--shadow": n
                        })
                    }, o.a.createElement("div", null, o.a.createElement("div", {
                        className: "app-page-title--first"
                    }, s && o.a.createElement("div", {
                        className: "app-page-title--iconbox d-70"
                    }, o.a.createElement("div", {
                        className: "d-70 d-flex align-items-center justify-content-center display-1"
                    }, o.a.createElement(ae.a, {
                        className: "text-primary"
                    }))), o.a.createElement("div", {
                        className: "app-page-title--heading"
                    }, o.a.createElement("h1", null, l), r && o.a.createElement("div", {
                        className: "app-page-title--description"
                    }, i)))), o.a.createElement("div", {
                        className: "d-flex align-items-center"
                    }, c)))
                })), t(744)),
                ge = t(736),
                he = t(733),
                ve = t(120),
                we = t(167),
                Te = t.n(we),
                Se = (t(239), t(166)),
                ke = t(345),
                Ne = (new Te.a({
                    network: "mainnet",
                    cacheProvider: !0,
                    providerOptions: {}
                }), {
                    id: "app.labels.connectWithMetamask",
                    defaultMessage: "Connect With Metamask"
                }),
                xe = {
                    id: "app.labels.metamaskRequired",
                    defaultMessage: "MetaMask Required"
                },
                Oe = {
                    id: "app.labels.thisWillAllow",
                    defaultMessage: "This will allow you to interract with the blockchain"
                },
                Ie = {
                    id: "app.labels.learnMore",
                    defaultMessage: "Learn More"
                },
                We = {
                    id: "app.labels.installMetamask",
                    defaultMessage: "Install MetaMask"
                },
                Me = {
                    id: "app.labels.otherWallet",
                    defaultMessage: "Other wallet providers support coming soon"
                },
                Ae = {
                    id: "app.labels.navigationMenu",
                    defaultMessage: "Navigation Menu"
                },
                De = {
                    id: "app.labels.reservation",
                    defaultMessage: "Reservation"
                },
                je = {
                    id: "app.labels.referrals",
                    defaultMessage: "Referrals"
                },
                Ce = {
                    id: "app.labels.docs",
                    defaultMessage: "Docs"
                },
                Re = {
                    id: "app.labels.addNewReservation",
                    defaultMessage: "Add new reservation"
                },
                Pe = {
                    id: "app.labels.stakeWise",
                    defaultMessage: "Stake Wise"
                },
                _e = {
                    id: "app.labels.wiseActions",
                    defaultMessage: "Wise Actions"
                },
                ze = {
                    id: "app.labels.reserveWise",
                    defaultMessage: "Reserve Wise"
                },
                He = {
                    id: "app.labels.connectWallet",
                    defaultMessage: "Connect Wallet"
                },
                Fe = {
                    id: "app.labels.wiseServices",
                    defaultMessage: "Wise Services"
                },
                qe = {
                    id: "app.labels.wiseReports",
                    defaultMessage: "Wise Reports"
                },
                Le = {
                    id: "app.labels.others",
                    defaultMessage: "Others"
                },
                Be = {
                    id: "app.labels.wiseStats",
                    defaultMessage: "Wise Stats"
                },
                Ue = {
                    id: "app.labels.viewDetails",
                    defaultMessage: "View details"
                },
                Ge = {
                    id: "app.labels.fixedSupply",
                    defaultMessage: "Fixed Supply"
                },
                Ve = {
                    id: "app.labels.randomSupply",
                    defaultMessage: "Random Supply"
                },
                Ye = {
                    id: "app.labels.extremeSupply",
                    defaultMessage: "Extreme Supply"
                },
                Ke = {
                    id: "app.labels.reservationDay",
                    defaultMessage: "Reservation Day"
                },
                Xe = {
                    id: "app.labels.contribution",
                    defaultMessage: "Contribution"
                },
                Je = {
                    id: "app.labels.confirmReservation",
                    defaultMessage: "Confirm Reservation"
                },
                Qe = {
                    id: "app.labels.wonderfulSerenity",
                    defaultMessage: "Wonderful serenity has possession"
                },
                $e = Object(c.b)((function(e) {
                    return {
                        pageTitleStyle: e.SchemeOptions.pageTitleStyle,
                        pageTitleBackground: e.SchemeOptions.pageTitleBackground,
                        pageTitleShadow: e.SchemeOptions.pageTitleShadow,
                        pageTitleIconBox: e.SchemeOptions.pageTitleIconBox,
                        pageTitleDescription: e.SchemeOptions.pageTitleDescription
                    }
                }))((function(e) {
                    var a = e.pageTitleStyle,
                        t = e.pageTitleBackground,
                        n = e.pageTitleShadow,
                        s = e.pageTitleIconBox,
                        r = e.pageTitleDescription,
                        c = e.titleHeading,
                        m = e.titleIcon,
                        y = e.titleDescription,
                        f = e.children,
                        E = Object(i.useState)(!1),
                        h = Object(l.a)(E, 2),
                        w = h[0],
                        k = h[1],
                        N = function() {
                            return k(!w)
                        },
                        O = Object(i.useState)(null),
                        I = Object(l.a)(O, 2),
                        W = I[0],
                        M = I[1],
                        A = Object(ke.a)().formatMessage;
                    var D = !!window.ethereum || !!window.web3,
                        j = Object(i.useState)(!1),
                        C = Object(l.a)(j, 2),
                        R = C[0],
                        P = C[1],
                        _ = function() {
                            return P(!R)
                        },
                        z = Object(i.useState)(!1),
                        H = Object(l.a)(z, 2),
                        F = H[0],
                        q = H[1],
                        L = function() {
                            q(!F)
                        };
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("pt-1 mt-1 pb-0 mb-0 app-page-title", a, t, {
                            "app-page-title--shadow": n
                        })
                    }, o.a.createElement("div", null, o.a.createElement("div", {
                        className: "app-page-title--first"
                    }, s && o.a.createElement("div", {
                        className: "app-page-title--iconbox d-70"
                    }, o.a.createElement("div", {
                        className: "d-70 d-flex align-items-center justify-content-center display-1"
                    }, "ListAltTwoToneIcon" === m && o.a.createElement(G.a, {
                        className: "text-primary"
                    }), "HomeWorkTwoToneIcon" === m && o.a.createElement(ae.a, {
                        className: "text-primary"
                    }), "AccountBalanceWalletTwoToneIcon" === m && o.a.createElement(ue.a, {
                        className: "text-primary"
                    }), "ShoppingCartTwoToneIcon" === m && o.a.createElement(X.a, {
                        className: "text-primary"
                    }), "AccessAlarmTwoToneIcon" === m && o.a.createElement(Q.a, {
                        className: "text-primary"
                    }), "RecordVoiceOverTwoToneIcon" === m && o.a.createElement(Y.a, {
                        className: "text-primary"
                    }), "LocalGasStationTwoToneIcon" === m && o.a.createElement(ie.a, {
                        className: "text-primary"
                    }))), o.a.createElement("div", {
                        className: "app-page-title--heading"
                    }, o.a.createElement("h1", null, c), r && o.a.createElement("div", {
                        className: "app-page-title--description"
                    }, y)))), o.a.createElement("div", {
                        className: "header-nav-actions flex-grow-0 flex-lg-grow-0"
                    }, D && o.a.createElement("div", {
                        className: "d-none d-lg-block"
                    }, o.a.createElement(ve.a, null)), !D && o.a.createElement("div", null, o.a.createElement("span", {
                        className: "d-none d-lg-block"
                    }, o.a.createElement(b.a, {
                        onClick: L,
                        className: "rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning hover-scale-sm"
                    }, A(Ne)), o.a.createElement(Ee.a, {
                        open: F,
                        onClose: L,
                        classes: {
                            paper: "shadow-lg rounded"
                        }
                    }, o.a.createElement("div", {
                        className: "text-center p-5"
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, o.a.createElement(Se.a, null)), o.a.createElement("div", {
                        className: "font-weight-bold font-size-lg mt-4"
                    }, A(xe)), o.a.createElement("p", {
                        className: "mb-0 mt-2"
                    }, A(Oe)), o.a.createElement("div", {
                        className: "pt-4"
                    }, o.a.createElement(b.a, {
                        href: "https://metamask.io/",
                        target: "_blank",
                        className: "btn-secondary btn-pill mx-1"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(Ie))), o.a.createElement(b.a, {
                        href: "https://metamask.io/download.html",
                        target: "_blank",
                        variant: "text",
                        className: "btn-outline-warning btn-pill mx-1"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(We)))), o.a.createElement("p", {
                        className: "mt-4 text-black-50"
                    }, A(Me)))))), o.a.createElement("div", null, o.a.createElement("span", {
                        className: "d-block d-lg-none"
                    }, o.a.createElement("button", {
                        onClick: _,
                        className: Object(p.a)("navbar-toggler hamburger hamburger--elastic", {
                            "is-active": R
                        })
                    }, o.a.createElement("span", {
                        className: "hamburger-box"
                    }, o.a.createElement("span", {
                        className: "hamburger-inner"
                    })))))), o.a.createElement("div", {
                        className: "d-flex d-lg-none"
                    }, o.a.createElement(ge.a, { in: R,
                        className: "nav-collapsed-wrapper shadow-sm-dark navbar-collapse"
                    }, o.a.createElement("div", {
                        className: "nav-inner-wrapper"
                    }, o.a.createElement(b.a, {
                        onClick: _,
                        className: "btn-primary btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "times"]
                    }))), o.a.createElement("div", {
                        className: "p-3"
                    }, o.a.createElement("div", {
                        className: "px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm"
                    }, A(Ae)), o.a.createElement(T.a, {
                        component: "div",
                        className: "nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                    }, o.a.createElement(S.a, {
                        button: !0,
                        component: x.b,
                        to: "/reservations",
                        className: "px-4 d-flex align-items-center"
                    }, o.a.createElement("span", null, A(De)), o.a.createElement(d.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), o.a.createElement(S.a, {
                        button: !0,
                        component: x.b,
                        to: "/referrals",
                        className: "px-4 d-flex align-items-center"
                    }, o.a.createElement("span", null, A(je)), o.a.createElement(d.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), o.a.createElement(S.a, {
                        button: !0,
                        component: x.b,
                        to: "/docs",
                        className: "px-4 d-flex align-items-center"
                    }, o.a.createElement("span", null, A(Ce)), o.a.createElement(d.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })))), o.a.createElement("div", {
                        className: "divider"
                    }), o.a.createElement("div", {
                        className: "card-footer bg-secondary text-center p-3"
                    }, o.a.createElement(ve.a, null))))), o.a.createElement("div", {
                        className: "d-flex align-items-center hidden"
                    }, f, o.a.createElement(u.a, {
                        title: A(Re)
                    }, o.a.createElement(b.a, {
                        variant: "contained",
                        size: "small",
                        className: "btn-wise py-3 px-4",
                        onClick: N
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(Pe)), o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "plus"],
                        className: "opacity-8"
                    })))), o.a.createElement(b.a, {
                        variant: "contained",
                        onClick: function(e) {
                            M(e.currentTarget)
                        },
                        size: "small",
                        className: "btn-primary py-3 px-4 w-auto mx-0 mr-3 mr-lg-0 mx-lg-3"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(_e)), o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "angle-down"],
                        className: "opacity-5"
                    }))), o.a.createElement(u.a, {
                        title: "Add new reservation"
                    }, o.a.createElement(b.a, {
                        variant: "contained",
                        size: "small",
                        className: "btn-wise py-3 px-4",
                        onClick: N
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(ze)), o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "plus"],
                        className: "opacity-8"
                    })))), o.a.createElement(v.a, {
                        id: "userMenu",
                        component: "div",
                        anchorEl: W,
                        keepMounted: !0,
                        getContentAnchorEl: null,
                        classes: {
                            list: "p-0"
                        },
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        open: Boolean(W),
                        onClose: function() {
                            M(null)
                        }
                    }, o.a.createElement("div", {
                        className: "dropdown-menu-xl outline-none p-0"
                    }, o.a.createElement("div", {
                        className: "bg-composed-wrapper bg-plum-plate mt-0"
                    }, o.a.createElement("div", {
                        className: "bg-composed-wrapper--image bg-composed-img-5"
                    }), o.a.createElement("div", {
                        className: "bg-composed-wrapper--content text-white text-center p-4"
                    }, o.a.createElement("h5", {
                        className: "mb-1"
                    }, A(_e)), o.a.createElement("p", {
                        className: "mb-0 opacity-7"
                    }, A(He)))), o.a.createElement("div", {
                        className: "scroll-area-sm shadow-overflow"
                    }, o.a.createElement(g.a, null, o.a.createElement(T.a, {
                        component: "div",
                        className: "flex-column"
                    }, o.a.createElement(S.a, {
                        button: !0,
                        className: "rounded-0"
                    }, o.a.createElement("div", {
                        className: "nav-link-icon opacity-6"
                    }, o.a.createElement(d.a, {
                        icon: ["far", "chart-bar"]
                    })), o.a.createElement("span", null, A(Fe))), o.a.createElement(S.a, {
                        button: !0,
                        className: "rounded-0"
                    }, o.a.createElement("div", {
                        className: "nav-link-icon opacity-6"
                    }, o.a.createElement(d.a, {
                        icon: ["far", "user-circle"]
                    })), o.a.createElement("span", null, A(qe))), o.a.createElement(S.a, {
                        className: "rounded-0"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold text-uppercase font-size-xs text-dark"
                    }, A(Le))), o.a.createElement(S.a, {
                        button: !0,
                        className: "rounded-0"
                    }, o.a.createElement("div", {
                        className: "nav-link-icon opacity-6"
                    }, o.a.createElement(d.a, {
                        icon: ["far", "chart-bar"]
                    })), o.a.createElement("span", null, A(Be)))))), o.a.createElement("div", {
                        className: "card-footer d-flex justify-content-between"
                    }, o.a.createElement(b.a, {
                        size: "small",
                        className: "btn-transparent px-0 btn-link btn-link-primary"
                    }, o.a.createElement("span", null, A(Ue))), o.a.createElement(b.a, {
                        size: "small",
                        className: "btn-wise",
                        variant: "contained",
                        color: "primary"
                    }, A(He))))))), o.a.createElement(Ee.a, {
                        scroll: "body",
                        classes: {
                            paper: "bg-transparent"
                        },
                        maxWidth: "xl",
                        open: w,
                        onClose: N
                    }, o.a.createElement(he.a, {
                        container: !0,
                        spacing: 0
                    }, o.a.createElement(he.a, {
                        item: !0,
                        lg: 5
                    }, o.a.createElement("div", {
                        className: "bg-white rounded-left"
                    }, o.a.createElement("div", {
                        className: "p-4 text-center"
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle mx-auto"
                    }, o.a.createElement("div", {
                        className: "d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first"
                    }, o.a.createElement("div", {
                        className: "rounded-circle border-3 border-white overflow-hidden"
                    }))), o.a.createElement("h4", {
                        className: "font-size-lg font-weight-bold my-2"
                    }, A(ze)), o.a.createElement("div", {
                        className: "text-center my-4"
                    }, o.a.createElement("div", {
                        className: "badge badge-pill badge-neutral-success text-success mx-1"
                    }, A(Ge)), o.a.createElement("div", {
                        className: "badge badge-pill badge-neutral-warning text-warning mx-1"
                    }, A(Ve)), o.a.createElement("div", {
                        className: "badge badge-pill badge-neutral-danger text-danger mx-1"
                    }, A(Ye))), o.a.createElement("p", {
                        className: "text-muted mb-4"
                    }), o.a.createElement("div", {
                        className: "divider my-4"
                    }), o.a.createElement(he.a, {
                        container: !0
                    }, o.a.createElement(he.a, {
                        item: !0,
                        lg: 6
                    }, o.a.createElement("span", {
                        className: "opacity-6 pb-2"
                    }, A(Ke)), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg"
                    }, "Day 01"), o.a.createElement("div", {
                        className: "badge badge-neutral-danger ml-2 text-danger"
                    }, "100 ETH"))), o.a.createElement(he.a, {
                        item: !0,
                        lg: 6
                    }, o.a.createElement("span", {
                        className: "opacity-6 pb-2"
                    }), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg"
                    }, "0x65942...02345")))), o.a.createElement("div", {
                        className: "divider my-4"
                    }), o.a.createElement("div", {
                        className: "font-weight-bold text-uppercase text-black-50 text-center mb-3"
                    }, "ETH ", A(Xe)), o.a.createElement("div", {
                        className: "avatar-wrapper-overlap d-flex justify-content-center mb-3"
                    }, o.a.createElement(u.a, {
                        title: "Chelsey Delaney",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Laibah Santos",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Ksawery Weber",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Killian Magana",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Kean Banks",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    })))), o.a.createElement("div", {
                        className: "divider my-4"
                    }), o.a.createElement(b.a, {
                        variant: "text",
                        className: "btn-primary mt-2"
                    }, A(Je))))), o.a.createElement(he.a, {
                        item: !0,
                        lg: 7
                    }, o.a.createElement("div", {
                        className: "hero-wrapper bg-composed-wrapper h-100 rounded-right"
                    }, o.a.createElement("div", {
                        className: "flex-grow-1 w-100 d-flex align-items-end"
                    }, o.a.createElement("div", {
                        className: "bg-white rounded-right"
                    }), o.a.createElement("div", {
                        className: "bg-white text-center p-5"
                    }, o.a.createElement("div", {
                        className: "text-white mt-3"
                    }, o.a.createElement("h1", {
                        className: "display-3 my-3 font-weight-bold"
                    }, A(Qe)), o.a.createElement("p", {
                        className: "font-size-lg mb-0 text-white opacity-7"
                    }, "View any of the 5+ live previews we've set up to learn why this dashboard template is the last one you'll ever need!"), o.a.createElement("div", {
                        className: "divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25"
                    }), o.a.createElement("div", null)))))))))
                })),
                Ze = (new Te.a({
                    network: "mainnet",
                    cacheProvider: !0,
                    providerOptions: {}
                }), {
                    id: "app.labels.connectWithMetamask",
                    defaultMessage: "Connect With Metamask"
                }),
                ea = {
                    id: "app.labels.metamaskRequired",
                    defaultMessage: "MetaMask Required"
                },
                aa = {
                    id: "app.labels.thisWillAllow",
                    defaultMessage: "This will allow you to interract with the blockchain"
                },
                ta = {
                    id: "app.labels.learnMore",
                    defaultMessage: "Learn More"
                },
                na = {
                    id: "app.labels.installMetamask",
                    defaultMessage: "Install MetaMask"
                },
                sa = {
                    id: "app.labels.otherWallet",
                    defaultMessage: "Other wallet providers support coming soon"
                },
                ra = {
                    id: "app.labels.navigationMenu",
                    defaultMessage: "Navigation Menu"
                },
                la = {
                    id: "app.labels.reservation",
                    defaultMessage: "Reservation"
                },
                ia = {
                    id: "app.labels.referrals",
                    defaultMessage: "Referrals"
                },
                oa = {
                    id: "app.labels.docs",
                    defaultMessage: "Docs"
                },
                pa = {
                    id: "app.labels.addNewReservation",
                    defaultMessage: "Add new reservation"
                },
                ca = {
                    id: "app.labels.stakeWise",
                    defaultMessage: "Stake Wise"
                },
                ma = {
                    id: "app.labels.wiseActions",
                    defaultMessage: "Wise Actions"
                },
                da = {
                    id: "app.labels.reserveWise",
                    defaultMessage: "Reserve Wise"
                },
                ua = {
                    id: "app.labels.connectWallet",
                    defaultMessage: "Connect Wallet"
                },
                ba = {
                    id: "app.labels.wiseServices",
                    defaultMessage: "Wise Services"
                },
                ya = {
                    id: "app.labels.wiseReports",
                    defaultMessage: "Wise Reports"
                },
                fa = {
                    id: "app.labels.others",
                    defaultMessage: "Others"
                },
                Ea = {
                    id: "app.labels.wiseStats",
                    defaultMessage: "Wise Stats"
                },
                ga = {
                    id: "app.labels.viewDetails",
                    defaultMessage: "View details"
                },
                ha = {
                    id: "app.labels.fixedSupply",
                    defaultMessage: "Fixed Supply"
                },
                va = {
                    id: "app.labels.randomSupply",
                    defaultMessage: "Random Supply"
                },
                wa = {
                    id: "app.labels.extremeSupply",
                    defaultMessage: "Extreme Supply"
                },
                Ta = {
                    id: "app.labels.reservationDay",
                    defaultMessage: "Reservation Day"
                },
                Sa = {
                    id: "app.labels.contribution",
                    defaultMessage: "Contribution"
                },
                ka = {
                    id: "app.labels.confirmReservation",
                    defaultMessage: "Confirm Reservation"
                },
                Na = {
                    id: "app.labels.wonderfulSerenity",
                    defaultMessage: "Wonderful serenity has possession"
                },
                xa = Object(c.b)((function(e) {
                    return {
                        pageTitleStyle: e.SchemeOptions.pageTitleStyle,
                        pageTitleBackground: e.SchemeOptions.pageTitleBackground,
                        pageTitleShadow: e.SchemeOptions.pageTitleShadow,
                        pageTitleIconBox: e.SchemeOptions.pageTitleIconBox,
                        pageTitleDescription: e.SchemeOptions.pageTitleDescription
                    }
                }))((function(e) {
                    var a = e.pageTitleStyle,
                        t = e.pageTitleBackground,
                        n = e.pageTitleShadow,
                        s = e.pageTitleIconBox,
                        r = e.pageTitleDescription,
                        c = e.titleHeading,
                        m = e.titleIcon,
                        y = e.titleDescription,
                        f = e.children,
                        E = Object(i.useState)(!1),
                        h = Object(l.a)(E, 2),
                        w = h[0],
                        k = h[1],
                        N = function() {
                            return k(!w)
                        },
                        O = Object(i.useState)(null),
                        I = Object(l.a)(O, 2),
                        W = I[0],
                        M = I[1],
                        A = Object(ke.a)().formatMessage;
                    var D = !!window.ethereum || !!window.web3,
                        j = Object(i.useState)(!1),
                        C = Object(l.a)(j, 2),
                        R = C[0],
                        P = C[1],
                        _ = function() {
                            return P(!R)
                        },
                        z = Object(i.useState)(!1),
                        H = Object(l.a)(z, 2),
                        F = H[0],
                        q = H[1],
                        L = function() {
                            q(!F)
                        };
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Object(p.a)("pt-1 mt-1 pb-0 mb-0 app-page-title", a, t, {
                            "app-page-title--shadow": n
                        })
                    }, o.a.createElement("div", null, o.a.createElement("div", {
                        className: "app-page-title--first"
                    }, s && o.a.createElement("div", {
                        className: "app-page-title--iconbox d-70"
                    }, o.a.createElement("div", {
                        className: "d-70 d-flex align-items-center justify-content-center display-1"
                    }, "ListAltTwoToneIcon" === m && o.a.createElement(G.a, {
                        className: "text-primary"
                    }), "HomeWorkTwoToneIcon" === m && o.a.createElement(ae.a, {
                        className: "text-primary"
                    }), "AccountBalanceWalletTwoToneIcon" === m && o.a.createElement(ue.a, {
                        className: "text-primary"
                    }), "ShoppingCartTwoToneIcon" === m && o.a.createElement(X.a, {
                        className: "text-primary"
                    }), "AccessAlarmTwoToneIcon" === m && o.a.createElement(Q.a, {
                        className: "text-primary"
                    }), "RecordVoiceOverTwoToneIcon" === m && o.a.createElement(Y.a, {
                        className: "text-primary"
                    }), "LocalGasStationTwoToneIcon" === m && o.a.createElement(ie.a, {
                        className: "text-primary"
                    }))), o.a.createElement("div", {
                        className: "app-page-title--heading"
                    }, o.a.createElement("h1", null, c), r && o.a.createElement("div", {
                        className: "app-page-title--description"
                    }, y)))), o.a.createElement("div", {
                        className: "header-nav-actions flex-grow-0 flex-lg-grow-0"
                    }, o.a.createElement(T.a, {
                        className: "list-group-bordered hidden"
                    }, o.a.createElement(S.a, {
                        className: "d-block d-lg-flex justify-content-between align-items-center py-3"
                    }, o.a.createElement("div", {
                        className: "d-flex align-items-center mr-4"
                    }, o.a.createElement(b.a, {
                        component: "a",
                        className: "d-50 d-flex shadow-none p-0 align-items-center justify-content-center rounded-pill mr-3 font-size-lg border-0 btn-google",
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, o.a.createElement(d.a, {
                        icon: ["fab", "google"],
                        className: "font-size-xl"
                    })), o.a.createElement("div", null, o.a.createElement("div", {
                        className: "d-block"
                    }, o.a.createElement("div", {
                        className: "font-weight-bold"
                    }, o.a.createElement("b", null, "Google"), " account is not yet connected."), o.a.createElement("div", {
                        className: "opacity-7"
                    }, "Click the Connect button to get started.")))), o.a.createElement("div", {
                        className: "d-block d-md-flex mt-3 mt-lg-0 align-items-center"
                    }, o.a.createElement(b.a, {
                        className: "btn-light shadow-none font-weight-bold font-size-lg mr-1"
                    }, "Token Address"), o.a.createElement(b.a, {
                        className: "btn-light shadow-none font-weight-bold font-size-lg ml-1"
                    }, "Uniswap Pair")))), D && o.a.createElement("div", {
                        className: "d-none d-lg-block"
                    }, o.a.createElement(ve.a, null)), !D && o.a.createElement("div", null, o.a.createElement("span", {
                        className: "d-none d-lg-block"
                    }, o.a.createElement(b.a, {
                        onClick: L,
                        className: "rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning hover-scale-sm"
                    }, A(Ze)), o.a.createElement(Ee.a, {
                        open: F,
                        onClose: L,
                        classes: {
                            paper: "shadow-lg rounded"
                        }
                    }, o.a.createElement("div", {
                        className: "text-center p-5"
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, o.a.createElement(Se.a, null)), o.a.createElement("div", {
                        className: "font-weight-bold font-size-lg mt-4"
                    }, A(ea)), o.a.createElement("p", {
                        className: "mb-0 mt-2"
                    }, A(aa)), o.a.createElement("div", {
                        className: "pt-4"
                    }, o.a.createElement(b.a, {
                        href: "https://metamask.io/",
                        target: "_blank",
                        className: "btn-secondary btn-pill mx-1"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(ta))), o.a.createElement(b.a, {
                        href: "https://metamask.io/download.html",
                        target: "_blank",
                        variant: "text",
                        className: "btn-outline-warning btn-pill mx-1"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(na)))), o.a.createElement("p", {
                        className: "mt-4 text-black-50"
                    }, A(sa)))))), o.a.createElement("div", null, o.a.createElement("span", {
                        className: "d-block d-lg-none"
                    }, o.a.createElement("button", {
                        onClick: _,
                        className: Object(p.a)("navbar-toggler hamburger hamburger--elastic", {
                            "is-active": R
                        })
                    }, o.a.createElement("span", {
                        className: "hamburger-box"
                    }, o.a.createElement("span", {
                        className: "hamburger-inner"
                    })))))), o.a.createElement("div", {
                        className: "d-flex d-lg-none"
                    }, o.a.createElement(ge.a, { in: R,
                        className: "nav-collapsed-wrapper shadow-sm-dark navbar-collapse"
                    }, o.a.createElement("div", {
                        className: "nav-inner-wrapper"
                    }, o.a.createElement(b.a, {
                        onClick: _,
                        className: "btn-primary btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "times"]
                    }))), o.a.createElement("div", {
                        className: "p-3"
                    }, o.a.createElement("div", {
                        className: "px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm"
                    }, A(ra)), o.a.createElement(T.a, {
                        component: "div",
                        className: "nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                    }, o.a.createElement(S.a, {
                        button: !0,
                        component: x.b,
                        to: "/reservations",
                        className: "px-4 d-flex align-items-center"
                    }, o.a.createElement("span", null, A(la)), o.a.createElement(d.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), o.a.createElement(S.a, {
                        button: !0,
                        component: x.b,
                        to: "/referrals",
                        className: "px-4 d-flex align-items-center"
                    }, o.a.createElement("span", null, A(ia)), o.a.createElement(d.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), o.a.createElement(S.a, {
                        button: !0,
                        component: x.b,
                        to: "/docs",
                        className: "px-4 d-flex align-items-center"
                    }, o.a.createElement("span", null, A(oa)), o.a.createElement(d.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })))), o.a.createElement("div", {
                        className: "divider"
                    }), o.a.createElement("div", {
                        className: "card-footer bg-secondary text-center p-3"
                    }, o.a.createElement(ve.a, null))))), o.a.createElement("div", {
                        className: "d-flex align-items-center hidden"
                    }, f, o.a.createElement(u.a, {
                        title: A(pa)
                    }, o.a.createElement(b.a, {
                        variant: "contained",
                        size: "small",
                        className: "btn-wise py-3 px-4",
                        onClick: N
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(ca)), o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "plus"],
                        className: "opacity-8"
                    })))), o.a.createElement(b.a, {
                        variant: "contained",
                        onClick: function(e) {
                            M(e.currentTarget)
                        },
                        size: "small",
                        className: "btn-primary py-3 px-4 w-auto mx-0 mr-3 mr-lg-0 mx-lg-3"
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(ma)), o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "angle-down"],
                        className: "opacity-5"
                    }))), o.a.createElement(u.a, {
                        title: "Add new reservation"
                    }, o.a.createElement(b.a, {
                        variant: "contained",
                        size: "small",
                        className: "btn-wise py-3 px-4",
                        onClick: N
                    }, o.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, A(da)), o.a.createElement("span", {
                        className: "btn-wrapper--icon"
                    }, o.a.createElement(d.a, {
                        icon: ["fas", "plus"],
                        className: "opacity-8"
                    })))), o.a.createElement(v.a, {
                        id: "userMenu",
                        component: "div",
                        anchorEl: W,
                        keepMounted: !0,
                        getContentAnchorEl: null,
                        classes: {
                            list: "p-0"
                        },
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        open: Boolean(W),
                        onClose: function() {
                            M(null)
                        }
                    }, o.a.createElement("div", {
                        className: "dropdown-menu-xl outline-none p-0"
                    }, o.a.createElement("div", {
                        className: "bg-composed-wrapper bg-plum-plate mt-0"
                    }, o.a.createElement("div", {
                        className: "bg-composed-wrapper--image bg-composed-img-5"
                    }), o.a.createElement("div", {
                        className: "bg-composed-wrapper--content text-white text-center p-4"
                    }, o.a.createElement("h5", {
                        className: "mb-1"
                    }, A(ma)), o.a.createElement("p", {
                        className: "mb-0 opacity-7"
                    }, A(ua)))), o.a.createElement("div", {
                        className: "scroll-area-sm shadow-overflow"
                    }, o.a.createElement(g.a, null, o.a.createElement(T.a, {
                        component: "div",
                        className: "flex-column"
                    }, o.a.createElement(S.a, {
                        button: !0,
                        className: "rounded-0"
                    }, o.a.createElement("div", {
                        className: "nav-link-icon opacity-6"
                    }, o.a.createElement(d.a, {
                        icon: ["far", "chart-bar"]
                    })), o.a.createElement("span", null, A(ba))), o.a.createElement(S.a, {
                        button: !0,
                        className: "rounded-0"
                    }, o.a.createElement("div", {
                        className: "nav-link-icon opacity-6"
                    }, o.a.createElement(d.a, {
                        icon: ["far", "user-circle"]
                    })), o.a.createElement("span", null, A(ya))), o.a.createElement(S.a, {
                        className: "rounded-0"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold text-uppercase font-size-xs text-dark"
                    }, A(fa))), o.a.createElement(S.a, {
                        button: !0,
                        className: "rounded-0"
                    }, o.a.createElement("div", {
                        className: "nav-link-icon opacity-6"
                    }, o.a.createElement(d.a, {
                        icon: ["far", "chart-bar"]
                    })), o.a.createElement("span", null, A(Ea)))))), o.a.createElement("div", {
                        className: "card-footer d-flex justify-content-between"
                    }, o.a.createElement(b.a, {
                        size: "small",
                        className: "btn-transparent px-0 btn-link btn-link-primary"
                    }, o.a.createElement("span", null, A(ga))), o.a.createElement(b.a, {
                        size: "small",
                        className: "btn-wise",
                        variant: "contained",
                        color: "primary"
                    }, A(ua))))))), o.a.createElement(Ee.a, {
                        scroll: "body",
                        classes: {
                            paper: "bg-transparent"
                        },
                        maxWidth: "xl",
                        open: w,
                        onClose: N
                    }, o.a.createElement(he.a, {
                        container: !0,
                        spacing: 0
                    }, o.a.createElement(he.a, {
                        item: !0,
                        lg: 5
                    }, o.a.createElement("div", {
                        className: "bg-white rounded-left"
                    }, o.a.createElement("div", {
                        className: "p-4 text-center"
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle mx-auto"
                    }, o.a.createElement("div", {
                        className: "d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first"
                    }, o.a.createElement("div", {
                        className: "rounded-circle border-3 border-white overflow-hidden"
                    }))), o.a.createElement("h4", {
                        className: "font-size-lg font-weight-bold my-2"
                    }, A(da)), o.a.createElement("div", {
                        className: "text-center my-4"
                    }, o.a.createElement("div", {
                        className: "badge badge-pill badge-neutral-success text-success mx-1"
                    }, A(ha)), o.a.createElement("div", {
                        className: "badge badge-pill badge-neutral-warning text-warning mx-1"
                    }, A(va)), o.a.createElement("div", {
                        className: "badge badge-pill badge-neutral-danger text-danger mx-1"
                    }, A(wa))), o.a.createElement("p", {
                        className: "text-muted mb-4"
                    }), o.a.createElement("div", {
                        className: "divider my-4"
                    }), o.a.createElement(he.a, {
                        container: !0
                    }, o.a.createElement(he.a, {
                        item: !0,
                        lg: 6
                    }, o.a.createElement("span", {
                        className: "opacity-6 pb-2"
                    }, A(Ta)), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg"
                    }, "Day 01"), o.a.createElement("div", {
                        className: "badge badge-neutral-danger ml-2 text-danger"
                    }, "100 ETH"))), o.a.createElement(he.a, {
                        item: !0,
                        lg: 6
                    }, o.a.createElement("span", {
                        className: "opacity-6 pb-2"
                    }), o.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-center"
                    }, o.a.createElement("span", {
                        className: "font-weight-bold font-size-lg"
                    }, "0x65942...02345")))), o.a.createElement("div", {
                        className: "divider my-4"
                    }), o.a.createElement("div", {
                        className: "font-weight-bold text-uppercase text-black-50 text-center mb-3"
                    }, "ETH ", A(Sa)), o.a.createElement("div", {
                        className: "avatar-wrapper-overlap d-flex justify-content-center mb-3"
                    }, o.a.createElement(u.a, {
                        title: "Chelsey Delaney",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Laibah Santos",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Ksawery Weber",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Killian Magana",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    }))), o.a.createElement(u.a, {
                        title: "Kean Banks",
                        arrow: !0
                    }, o.a.createElement("div", {
                        className: "avatar-icon-wrapper"
                    }, o.a.createElement("div", {
                        className: "avatar-icon"
                    })))), o.a.createElement("div", {
                        className: "divider my-4"
                    }), o.a.createElement(b.a, {
                        variant: "text",
                        className: "btn-primary mt-2"
                    }, A(ka))))), o.a.createElement(he.a, {
                        item: !0,
                        lg: 7
                    }, o.a.createElement("div", {
                        className: "hero-wrapper bg-composed-wrapper h-100 rounded-right"
                    }, o.a.createElement("div", {
                        className: "flex-grow-1 w-100 d-flex align-items-end"
                    }, o.a.createElement("div", {
                        className: "bg-white rounded-right"
                    }), o.a.createElement("div", {
                        className: "bg-white text-center p-5"
                    }, o.a.createElement("div", {
                        className: "text-white mt-3"
                    }, o.a.createElement("h1", {
                        className: "display-3 my-3 font-weight-bold"
                    }, A(Na)), o.a.createElement("p", {
                        className: "font-size-lg mb-0 text-white opacity-7"
                    }, "View any of the 5+ live previews we've set up to learn why this dashboard template is the last one you'll ever need!"), o.a.createElement("div", {
                        className: "divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25"
                    }), o.a.createElement("div", null)))))))))
                }))
        },
        113: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return l
            }));
            var n = t(80),
                s = "https://mainnet.infura.io/v3/2d1d16f0c30b43f397ed11782e78da22",
                r = "https://ropsten.infura.io/v3/2d1d16f0c30b43f397ed11782e78da22",
                l = (new(t(355).a)({
                    urls: {
                        1: s,
                        3: r
                    },
                    defaultChainId: 1
                }), new n.a({
                    supportedChainIds: [1, 3, 4, 5, 42]
                }))
        },
        116: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return i
            }));
            var n = t(25),
                s = t(0),
                r = t(42),
                l = t(113);

            function i() {
                var e = Object(r.b)(),
                    a = e.activate,
                    t = e.active,
                    i = Object(s.useState)(!1),
                    o = Object(n.a)(i, 2),
                    p = o[0],
                    c = o[1];
                return Object(s.useEffect)((function() {
                    l.a.isAuthorized().then((function(e) {
                        console.log("useEagerConnect:", {
                            active: t,
                            isAuthorized: e
                        }), e ? a(l.a, void 0, !0).catch((function() {
                            c(!0)
                        })) : c(!0)
                    }))
                }), [a]), Object(s.useEffect)((function() {
                    !p && t && c(!0)
                }), [p, t]), p
            }
        },
        117: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return l
            }));
            var n = t(0),
                s = t(42),
                r = t(113);

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    a = Object(s.b)(),
                    t = a.active,
                    l = a.error,
                    i = a.activate;
                Object(n.useEffect)((function() {
                    if (e) return function() {};
                    var a = window.ethereum;
                    if (a && a.on && !t && !l) {
                        var n = function(e) {
                                console.log("chainChanged", e), i(r.a)
                            },
                            s = function(e) {
                                console.log("accountsChanged", e), e.length > 0 && i(r.a)
                            },
                            o = function(e) {
                                console.log("networkChanged", e), i(r.a)
                            };
                        return a.on("chainChanged", n), a.on("accountsChanged", s), a.on("networkChanged", o),
                            function() {
                                a.removeListener && (a.removeListener("chainChanged", n), a.removeListener("accountsChanged", s), a.removeListener("networkChanged", o))
                            }
                    }
                    return function() {}
                }), [t, l, e, i])
            }
        },
        120: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return se
            }));
            var n = t(0),
                s = t.n(n),
                r = t(42),
                l = t(145),
                i = t(80),
                o = t(25),
                p = t(114),
                c = t.n(p),
                m = t(728),
                d = t(730),
                u = t(726),
                b = t(733),
                y = t(744),
                f = t(732),
                E = t(742),
                g = t(738),
                h = t(201),
                v = t(18),
                w = t(54),
                T = t(200),
                S = t(87),
                k = t(182),
                N = function() {
                    var e = Object(r.b)(),
                        a = e.account,
                        t = e.library,
                        l = Object(S.b)(["getBalance", a, "latest"]),
                        i = l.data,
                        o = l.mutate;
                    return Object(n.useEffect)((function() {
                        return console.log("listening for blocks..."), t && t.on("block", (function() {
                                o(void 0, !0)
                            })),
                            function() {
                                t && t.removeAllListeners("block")
                            }
                    }), []), i ? s.a.createElement("div", null, parseFloat(Object(k.a)(i)).toPrecision(4)) : s.a.createElement("div", null, "0")
                },
                x = t(4),
                O = t.n(x),
                I = t(143),
                W = t(165),
                M = t(164),
                A = t(60),
                D = function(e) {
                    var a = e.web3,
                        t = Object(r.b)(),
                        l = t.account,
                        i = t.library,
                        p = t.chainId,
                        c = Object(S.b)(["getBalance", l, "latest"]),
                        m = (c.data, c.mutate),
                        d = Object(M.a)(p),
                        u = new a.eth.Contract(W, d.tokenAddress),
                        b = Object(n.useState)(0),
                        y = Object(o.a)(b, 2),
                        f = y[0],
                        E = y[1];
                    return Object(n.useEffect)((function() {
                        (function() {
                            var e = Object(I.a)(O.a.mark((function e() {
                                var a;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, u.methods.balanceOf(l).call();
                                        case 2:
                                            a = e.sent, E(a);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [l, p]), Object(n.useEffect)((function() {
                        return console.log("listening for blocks..."), i && i.on("block", (function() {
                                m(void 0, !0)
                            })),
                            function() {
                                i && i.removeAllListeners("block")
                            }
                    }), []), f ? s.a.createElement("div", null, Object(A.f)(f, null, a)) : s.a.createElement("div", null, "0.00")
                },
                j = t(197),
                C = t(53),
                R = function(e) {
                    var a = e.symbol,
                        t = e.address,
                        l = e.decimals,
                        i = Object(r.b)(),
                        o = i.account,
                        p = i.library,
                        c = Object(S.b)([t, "balanceOf", o]),
                        m = c.data,
                        d = c.mutate;
                    return Object(n.useEffect)((function() {
                        console.log("listening for Transfer...");
                        var e = new j.a(t, C, p.getSigner()),
                            a = e.filters.Transfer(o, null);
                        p.on(a, (function(e, a, t, n) {
                            console.log("Transfer|sent", {
                                from: e,
                                to: a,
                                amount: t,
                                event: n
                            }), d(void 0, !0)
                        }));
                        var n = e.filters.Transfer(null, o);
                        return p.on(n, (function(e, a, t, n) {
                                console.log("Transfer|received", {
                                    from: e,
                                    to: a,
                                    amount: t,
                                    event: n
                                }), d(void 0, !0)
                            })),
                            function() {
                                p.removeAllListeners(n), p.removeAllListeners(a)
                            }
                    }), []), m ? s.a.createElement("div", null, parseFloat(Object(k.b)(m, l)).toPrecision(4), " ", a) : s.a.createElement("div", null, "...")
                },
                P = function(e) {
                    var a = e.chainId;
                    return s.a.createElement(s.a.Fragment, null, w.b[a].map((function(e) {
                        return s.a.createElement(R, Object.assign({
                            key: e.address
                        }, e))
                    })))
                },
                _ = t(116),
                z = t(117),
                H = t(364),
                F = t.n(H),
                q = t(345),
                L = Object(n.lazy)((function() {
                    return Promise.all([t.e(12), t.e(29)]).then(t.bind(null, 986))
                })),
                B = (Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(2), t.e(4), t.e(11), t.e(25)]).then(t.bind(null, 849))
                })), Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(35)]).then(t.bind(null, 934))
                }))),
                U = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(34)]).then(t.bind(null, 935))
                })),
                G = new i.a({
                    supportedChainIds: [w.a.MainNet, w.a.Ropsten, w.a.Rinkeby, w.a.Goerli, w.a.Kovan]
                }),
                V = Object(f.a)((function(e) {
                    return {
                        alertWrapper: {
                            "& .MuiPaper-root": {
                                color: "#ffffff"
                            }
                        }
                    }
                })),
                Y = {
                    id: "app.labels.createReferralLink",
                    defaultMessage: "Create Referral Link"
                },
                K = {
                    id: "app.labels.stakeWiseTokens",
                    defaultMessage: "Stake WISE Tokens"
                },
                X = {
                    id: "app.labels.personalDashboard",
                    defaultMessage: "Personal Dashboard"
                },
                J = {
                    id: "app.labels.wrongNetwork",
                    defaultMessage: "Wrong network, please switch to Mainnet"
                },
                Q = {
                    id: "app.labels.connectWithMetamask",
                    defaultMessage: "Connect With Metamast"
                },
                $ = function() {
                    var e = Object(r.b)(),
                        a = e.chainId,
                        t = e.account,
                        l = e.library,
                        i = e.activate,
                        p = e.active,
                        f = e.connector,
                        k = new c.a(c.a.givenProvider),
                        x = V(),
                        O = Object(q.a)().formatMessage,
                        I = Object(n.useMemo)((function() {
                            return (a && w.b[a] ? w.b[a] : []).map((function(e) {
                                return [e.address, e.abi]
                            }))
                        }), [a]),
                        W = s.a.useState(),
                        M = Object(o.a)(W, 2),
                        A = M[0],
                        j = M[1];
                    Object(n.useEffect)((function() {
                        console.log("Wallet running"), A && A === f && j(void 0)
                    }), [A, f]);
                    var C = Object(_.a)();
                    Object(z.a)(!C || !!A);
                    var R = Object(n.useState)(!1),
                        H = Object(o.a)(R, 2),
                        $ = H[0],
                        Z = H[1],
                        ee = function() {
                            return Z((function(e) {
                                return !e
                            }))
                        },
                        ae = Object(n.useState)(!1),
                        te = Object(o.a)(ae, 2),
                        ne = te[0],
                        se = te[1],
                        re = Object(n.useState)(!1),
                        le = Object(o.a)(re, 2),
                        ie = le[0],
                        oe = le[1],
                        pe = function() {
                            return oe(!ie)
                        },
                        ce = Object(n.useState)(!1),
                        me = Object(o.a)(ce, 2),
                        de = me[0],
                        ue = me[1],
                        be = function() {
                            ue(!1)
                        };
                    Object(n.useEffect)((function() {
                        p && 1 !== a && ue(!0)
                    }), [p, a]);
                    var ye = Object(n.useState)(!1),
                        fe = Object(o.a)(ye, 2);
                    fe[0], fe[1];
                    return s.a.createElement("div", null, p ? s.a.createElement("div", null, s.a.createElement("div", {
                        className: "header-nav-menu d-block d-lg-none"
                    }, s.a.createElement("div", {
                        className: "mobile-wallet"
                    }, s.a.createElement(h.a, {
                        v: t
                    }), l && s.a.createElement("div", {
                        className: "d-flex"
                    }, s.a.createElement("div", {
                        className: "font-size-xxl line-sm"
                    }, s.a.createElement(v.a, {
                        icon: ["fab", "ethereum"]
                    })), s.a.createElement("div", {
                        className: "ml-2 mr-3 font-size-md"
                    }, s.a.createElement(S.a, {
                        value: {
                            fetcher: Object(T.a)(l, new Map(I))
                        }
                    }, s.a.createElement(N, null))))), s.a.createElement(m.a, {
                        component: "div",
                        className: "nav-pills nav-transparent nav-pills-rounded flex-column"
                    }, s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        onClick: ee,
                        className: "px-4 text-black-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, "Claim Wise Tokens"), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        onClick: pe,
                        className: "px-4 text-black-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, O(Y)), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        target: "_blank",
                        href: "/staking",
                        className: "px-4 text-black-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, O(K)), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    }))), s.a.createElement(m.a, {
                        component: "div",
                        className: "nav-pills nav-transparent nav-pills-rounded flex-column"
                    }, s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        target: "_blank",
                        href: "/personal",
                        className: "px-4 text-black-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, O(X)), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })))), s.a.createElement("div", {
                        className: "header-nav-menu d-none d-lg-block"
                    }, s.a.createElement("ul", {
                        className: "d-flex nav nav-neutral-first justify-content-center"
                    }, s.a.createElement("li", null, s.a.createElement(u.a, {
                        className: "bg-plum-plate wallet-badge shadow-first-lg"
                    }, s.a.createElement("div", {
                        className: "d-flex align-items-center"
                    }, s.a.createElement("div", {
                        className: "d-flex font-size-sm justify-content-center py-0 text-white"
                    }, s.a.createElement("span", {
                        className: "mr-2"
                    }, s.a.createElement(v.a, {
                        icon: ["fas", "wallet"]
                    })), s.a.createElement(h.a, {
                        v: t
                    })), s.a.createElement("div", {
                        className: "mx-3"
                    }, s.a.createElement("div", {
                        className: "divider-v bg-light opacity-1 position-relative"
                    })), s.a.createElement("div", {
                        className: "d-flex font-size-sm justify-content-center py-3 py-md-0 text-white"
                    }, s.a.createElement(v.a, {
                        icon: ["fas", "cog"]
                    })))), s.a.createElement("div", {
                        className: "submenu-dropdown"
                    }, s.a.createElement(b.a, {
                        container: !0,
                        spacing: 0
                    }, s.a.createElement(b.a, {
                        item: !0,
                        lg: 12,
                        className: "d-flex align-items-center"
                    }, s.a.createElement("div", {
                        className: "shadow-sm-dark w-100 bg-plum-plate p-3 rounded"
                    }, s.a.createElement("div", {
                        className: "px-3 pt-2 text-white font-weight-bold font-size-sm"
                    }, l && s.a.createElement("div", {
                        className: "d-flex"
                    }, s.a.createElement("div", {
                        className: "font-size-xxl line-sm"
                    }, s.a.createElement(v.a, {
                        icon: ["fab", "ethereum"]
                    })), s.a.createElement("div", {
                        className: "ml-2 mr-3 font-size-md"
                    }, s.a.createElement(S.a, {
                        value: {
                            fetcher: Object(T.a)(l, new Map(I))
                        }
                    }, s.a.createElement(N, null))), s.a.createElement("div", {
                        className: "font-size-lg mr-3"
                    }, "|"), s.a.createElement("div", {
                        className: "font-size-xxl line-sm"
                    }, s.a.createElement("img", {
                        src: F.a,
                        style: {
                            height: "1.38rem"
                        },
                        alt: "WISE"
                    })), s.a.createElement("div", {
                        className: "ml-2 font-size-md"
                    }, s.a.createElement(D, {
                        web3: k
                    })))), s.a.createElement(m.a, {
                        component: "div",
                        className: "nav-pills nav-transparent nav-pills-rounded flex-column"
                    }, s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        onClick: ee,
                        className: "px-4 text-white-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, "Claim WISE Tokens"), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        target: "_blank",
                        href: "/staking",
                        className: "px-4 text-white-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, O(K)), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })), s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        onClick: pe,
                        className: "px-4 text-white-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, O(Y)), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    }))), s.a.createElement(m.a, {
                        component: "div",
                        className: "nav-pills nav-transparent nav-pills-rounded flex-column"
                    }, s.a.createElement(d.a, {
                        component: "a",
                        button: !0,
                        target: "_blank",
                        href: "/personal",
                        className: "px-4 text-white-50 d-flex align-items-center"
                    }, s.a.createElement("span", null, O(X)), s.a.createElement(v.a, {
                        icon: ["fas", "angle-right"],
                        className: "opacity-6 ml-auto"
                    })))))))))), s.a.createElement(y.a, {
                        open: $,
                        onClose: ee,
                        classes: {
                            paper: "shadow-lg rounded invisible-extra"
                        }
                    }, s.a.createElement(n.Suspense, {
                        fallback: s.a.createElement("div", null)
                    }, s.a.createElement(L, null))), s.a.createElement(y.a, {
                        open: ne,
                        onClose: function() {
                            return se(!ne)
                        },
                        classes: {
                            paper: "shadow-lg rounded"
                        }
                    }, s.a.createElement(n.Suspense, {
                        fallback: s.a.createElement("div", null)
                    }, s.a.createElement(B, null))), s.a.createElement(y.a, {
                        open: ie,
                        onClose: pe,
                        classes: {
                            paper: "shadow-lg rounded"
                        }
                    }, s.a.createElement(n.Suspense, {
                        fallback: s.a.createElement("div", null)
                    }, s.a.createElement(U, {
                        v: t
                    }))), s.a.createElement(E.a, {
                        open: de,
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        autoHideDuration: 3e3,
                        onClose: be
                    }, s.a.createElement("div", {
                        className: x.alertWrapper
                    }, s.a.createElement(g.a, {
                        elevation: 6,
                        variant: "filled",
                        onClose: be,
                        severity: "error"
                    }, O(J))))) : s.a.createElement(u.a, {
                        onClick: function() {
                            i(G)
                        },
                        className: "rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning"
                    }, O(Q)), p && l && s.a.createElement("div", {
                        className: "hidden"
                    }, s.a.createElement(S.a, {
                        value: {
                            fetcher: Object(T.a)(l, new Map(I))
                        }
                    }, s.a.createElement(N, null), s.a.createElement(P, {
                        chainId: a
                    }))))
                },
                Z = t(243),
                ee = t.n(Z),
                ae = new i.a({
                    supportedChainIds: [w.a.MainNet, w.a.Ropsten, w.a.Rinkeby, w.a.Goerli, w.a.Kovan]
                }),
                te = function() {
                    var e = Object(r.b)(),
                        a = e.chainId,
                        t = e.account,
                        l = e.activate,
                        i = e.active,
                        p = e.connector,
                        c = (Object(n.useMemo)((function() {
                            return [].map((function(e) {
                                return [e.address, e.abi]
                            }))
                        }), [a]), s.a.useState()),
                        m = Object(o.a)(c, 2),
                        d = m[0],
                        b = m[1];
                    s.a.useEffect((function() {
                        console.log("Wallet running again"), d && d === p && b(void 0)
                    }), [d, p]);
                    var y = Object(_.a)();
                    Object(z.a)(!y || !!d);
                    var f = Object(n.useState)("Copy Link"),
                        E = Object(o.a)(f, 2),
                        g = E[0],
                        h = E[1],
                        w = Object(n.useState)("btn-success"),
                        T = Object(o.a)(w, 2),
                        S = T[0],
                        k = T[1],
                        N = function(e) {
                            ee()(e), h("Copied"), k("btn-wise")
                        };
                    return s.a.createElement("div", null, i ? s.a.createElement("div", null, s.a.createElement("div", {
                        className: "card-tr-actions"
                    }, s.a.createElement("a", {
                        href: "/docs#sec-3-1",
                        target: "_blank"
                    }, s.a.createElement(u.a, {
                        className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-white",
                        variant: "outlined"
                    }, s.a.createElement(v.a, {
                        icon: ["far", "question-circle"],
                        className: "font-size-sm text-white"
                    })))), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "text-center pt-1 pb-0"
                    }, s.a.createElement("div", {
                        className: "font-weight-bold display-4 mb-0"
                    }, "Your Referral Link"), s.a.createElement("p", {
                        className: "text-white select-all overflow-elipsis line-height-2 font-size-lg px-3 text-size-xxl mb-4 mt-3 font-weight-bold"
                    }, "https://wisetoken.net/?w=", t))), s.a.createElement("div", {
                        className: "divider bg-white mt-2 opacity-2"
                    }), s.a.createElement("div", {
                        className: "d-flex bg-white-10 align-items-center justify-content-between py-4 px-5 w-100"
                    }, s.a.createElement("div", {
                        className: "hidden display-2 font-weight-bold"
                    }, s.a.createElement("span", {
                        className: "font-size-md"
                    }), s.a.createElement("span", null, "+10%"), s.a.createElement("span", {
                        className: "font-size-lg"
                    })), s.a.createElement("div", {
                        className: "w-100"
                    }, s.a.createElement(u.a, {
                        onClick: function() {
                            N("https://wisetoken.net/?w=".concat(t))
                        },
                        className: "rounded-sm w-100 text-uppercase font-weight-bold hover-scale-lg px-4 ".concat(S),
                        size: "large"
                    }, g)))) : s.a.createElement("div", null, s.a.createElement("div", {
                        className: "card-tr-actions"
                    }, s.a.createElement("a", {
                        href: "/docs#sec-3-1",
                        target: "_blank"
                    }, s.a.createElement(u.a, {
                        className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-white",
                        variant: "outlined"
                    }, s.a.createElement(v.a, {
                        icon: ["far", "question-circle"],
                        className: "font-size-sm text-white"
                    })))), s.a.createElement("div", {
                        className: "text-center pt-1 pb-0"
                    }, s.a.createElement("div", {
                        className: "font-weight-bold display-4 mb-0"
                    }, "Your Referral Link"), s.a.createElement("div", {
                        className: "text-white select-none overflow-elipsis line-height-2 font-size-lg px-3 text-size-xxl mb-3 mt-3 font-weight-bold"
                    }, "https://wisetoken.net/?w=YOUR-ETH-ADDRESS", s.a.createElement("div", {
                        onClick: function() {
                            l(ae)
                        },
                        className: "badge hover-scale-md cursor-pointer badge-warning my-2 mx-3 h-auto py-2 font-size-xs badge-pill mb-3"
                    }, "Generate with Metamask"))), s.a.createElement("div", {
                        className: "divider bg-white mt-2 opacity-2"
                    }), s.a.createElement("div", {
                        className: "d-flex bg-white-10 align-items-center justify-content-between py-4 px-5 w-100"
                    }, s.a.createElement("div", {
                        className: "hidden display-2 font-weight-bold"
                    }, s.a.createElement("span", {
                        className: "font-size-md"
                    }), s.a.createElement("span", null, "+10%"), s.a.createElement("span", {
                        className: "font-size-lg"
                    })), s.a.createElement("div", {
                        className: "w-100"
                    }, s.a.createElement(u.a, {
                        onClick: function() {
                            N("https://wisetoken.net/?w=YOUR-ETH-ADDRESS")
                        },
                        className: "rounded-sm w-100 text-uppercase font-weight-bold hover-scale-lg px-4 ".concat(S),
                        size: "large"
                    }, g)))))
                };
            new i.a({
                supportedChainIds: [1, 3, 4, 5, 42]
            });

            function ne(e) {
                var a = new l.a(e, "any");
                return a.pollingInterval = 12e3, a
            }
            var se = function(e) {
                return "referral" === e.view ? s.a.createElement(r.a, {
                    getLibrary: ne
                }, s.a.createElement(te, null)) : s.a.createElement(r.a, {
                    getLibrary: ne
                }, s.a.createElement($, null))
            };
            a.b = se
        },
        146: function(e, a, t) {
            "use strict";
            t.d(a, "d", (function() {
                return n
            })), t.d(a, "c", (function() {
                return s
            })), t.d(a, "a", (function() {
                return r
            })), t.d(a, "b", (function() {
                return l
            }));
            var n = "app/show_confetti",
                s = "app/hide_confetti",
                r = "app/change_flag",
                l = "app/change_lang"
        },
        164: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return n
            }));
            var n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    a = {
                        ropsten: {
                            address: "0xfafbFc24695178F74f158f70BD7EA6162d836A18",
                            uniswapAddress: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
                            uniswapPair: "0x8f130D27c1Fbd004FFD0A8f6dA480199a0B48491",
                            wethAddress: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
                            infuraURL: "https://ropsten.infura.io/v3/960773bc580844be9146d406cfdfa589",
                            fromBlock: 8653977,
                            inceptionTimestamp: 1608606533,
                            inceptionDay: "2020-11-10",
                            secondsInDay: 900,
                            blocksInDay: 900,
                            blockStep: 300,
                            buttonOpen: Date.UTC(2020, 11, 31, 1),
                            fromBlockShifted: 9365547,
                            tokenAddress: "0xa89cb3aa23f7d85def5dccdb73450ae236afee61",
                            etherScan: "https://ropsten.etherscan.io",
                            zeroAddress: "0x0000000000000000000000000000000000000000",
                            teamAddresses: ["0x9404f4B0846A2cD5c659c1edD52BA60abF1F10F4", "0x2ab6736fe0Bb2473276F250cA1d12A448115D539", "0x91143a01a6111ac86efBcc92Fc4f86c01c10AE9F", "0xa803c226c8281550454523191375695928DcFE92", "0x641AD78BAca220C5BD28b51Ce8e0F495e85Fe689", "0xE73168deb6831502FFC1F437e4835A3eA12D69b7", "0x280589BfD85ecd518C823c0BB0D954187c5f64aB"],
                            testAddress: "0xd492F0eb711d6A1369646916C43258AC739A6ebE"
                        },
                        mainnet: {
                            address: "0xfef0d2f3a79b4338d8418003dd9df89281242063",
                            uniswapAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                            uniswapPair: "0x8f130D27c1Fbd004FFD0A8f6dA480199a0B48491",
                            wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                            infuraURL: "https://mainnet.infura.io/v3/960773bc580844be9146d406cfdfa589",
                            fromBlock: 11010573,
                            inceptionTimestamp: 1604966400,
                            inceptionDay: "2020-11-10",
                            secondsInDay: 86400,
                            blocksInDay: 6170,
                            blockStep: 750,
                            buttonOpen: Date.UTC(2020, 11, 31, 1),
                            fromBlockShifted: 11557700,
                            tokenAddress: "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
                            etherScan: "https://etherscan.io",
                            teamAddresses: ["0x6aaf4ade164931B40404d22Ff801Ac107816Abfe", "0x9404f4B0846A2cD5c659c1edD52BA60abF1F10F4", "0x2ab6736fe0Bb2473276F250cA1d12A448115D539", "0x91143a01a6111ac86efBcc92Fc4f86c01c10AE9F", "0xa803c226c8281550454523191375695928DcFE92", "0x280589BfD85ecd518C823c0BB0D954187c5f64aB"],
                            zeroAddress: "0x0000000000000000000000000000000000000000"
                        }
                    };
                return 1 === e ? a.mainnet : 3 === e ? a.ropsten : a.mainnet
            };
            n()
        },
        165: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes16","name":"stakeID","type":"bytes16"},{"indexed":true,"internalType":"address","name":"stakerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"scrapeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"scrapeDay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakersPenalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referrerPenalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentWiseDay","type":"uint256"}],"name":"InterestScraped","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"LiquidityGuardStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStaked","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shareRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referrerShares","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"currentWiseDay","type":"uint256"}],"name":"NewGlobals","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newSharePrice","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"stakeID","type":"bytes32"}],"name":"NewSharePrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"bytes16","name":"stakeID","type":"bytes16"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"bytes16","name":"referrerID","type":"bytes16"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"ReferralCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes16","name":"stakeID","type":"bytes16"},{"indexed":true,"internalType":"address","name":"stakerAddress","type":"address"},{"indexed":true,"internalType":"address","name":"referralAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakesShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referralShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"closeDay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penaltyAmount","type":"uint256"}],"name":"StakeEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes16","name":"stakeID","type":"bytes16"},{"indexed":true,"internalType":"address","name":"stakerAddress","type":"address"},{"indexed":true,"internalType":"address","name":"referralAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakesShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referralShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startDay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDays","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"daiEquivalent","type":"uint256"}],"name":"StakeStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserveA","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserveB","type":"uint112"},{"indexed":false,"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"name":"UniswapReserves","type":"event"},{"inputs":[],"name":"INFLATION_RATE","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIQUIDITY_GUARD","outputs":[{"internalType":"contract ILiquidityGuard","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIQUIDITY_RATE","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIQUIDITY_TRANSFORMER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_FACTORY","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_PAIR","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_ROUTER","outputs":[{"internalType":"contract IUniswapRouterV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"activeReferralCount","outputs":[{"internalType":"uint256","name":"activeCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"activeStakesCount","outputs":[{"internalType":"uint256","name":"activeCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"bytes16","name":"_liquidityStakeID","type":"bytes16"}],"name":"checkLiquidityStakeByID","outputs":[{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"closeDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"bytes16","name":"_stakeID","type":"bytes16"}],"name":"checkMatureStake","outputs":[{"internalType":"bool","name":"isMature","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"bytes16","name":"_referralID","type":"bytes16"}],"name":"checkReferralsByID","outputs":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"bytes16","name":"stakeID","type":"bytes16"},{"internalType":"uint256","name":"referrerShares","type":"uint256"},{"internalType":"uint256","name":"referralInterest","type":"uint256"},{"internalType":"bool","name":"isActiveReferral","type":"bool"},{"internalType":"bool","name":"isActiveStake","type":"bool"},{"internalType":"bool","name":"isMatureStake","type":"bool"},{"internalType":"bool","name":"isEndedStake","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"bytes16","name":"_stakeID","type":"bytes16"}],"name":"checkStakeByID","outputs":[{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lockDays","type":"uint256"},{"internalType":"uint256","name":"finalDay","type":"uint256"},{"internalType":"uint256","name":"closeDay","type":"uint256"},{"internalType":"uint256","name":"scrapeDay","type":"uint256"},{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"stakesShares","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"penaltyAmount","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isMature","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityTokens","type":"uint256"}],"name":"createLiquidityStake","outputs":[{"internalType":"bytes16","name":"liquidityStakeID","type":"bytes16"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakedAmount","type":"uint256"},{"internalType":"uint64","name":"_lockDays","type":"uint64"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"createStake","outputs":[{"internalType":"bytes16","name":"","type":"bytes16"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes16","name":"referralID","type":"bytes16"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_lockDays","type":"uint64"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"createStakeWithETH","outputs":[{"internalType":"bytes16","name":"","type":"bytes16"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes16","name":"referralID","type":"bytes16"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"},{"internalType":"uint64","name":"_lockDays","type":"uint64"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"createStakeWithToken","outputs":[{"internalType":"bytes16","name":"","type":"bytes16"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes16","name":"referralID","type":"bytes16"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"criticalMass","outputs":[{"internalType":"uint256","name":"totalAmount","type":"uint256"},{"internalType":"uint256","name":"activationDay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentWiseDay","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes16","name":"_liquidityStakeID","type":"bytes16"}],"name":"endLiquidityStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes16","name":"_stakeID","type":"bytes16"}],"name":"endStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"x","type":"address"},{"internalType":"uint256","name":"y","type":"uint256"},{"internalType":"bytes1","name":"z","type":"bytes1"}],"name":"generateID","outputs":[{"internalType":"bytes16","name":"b","type":"bytes16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"giveStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"globals","outputs":[{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalShares","type":"uint256"},{"internalType":"uint256","name":"sharePrice","type":"uint256"},{"internalType":"uint256","name":"currentWiseDay","type":"uint256"},{"internalType":"uint256","name":"referralShares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isLiquidityGuardActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestDaiEquivalent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"latestLiquidityStakeID","outputs":[{"internalType":"bytes16","name":"","type":"bytes16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"latestReferralID","outputs":[{"internalType":"bytes16","name":"","type":"bytes16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"latestStakeID","outputs":[{"internalType":"bytes16","name":"","type":"bytes16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGuardTrigger","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"liquidityStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes16","name":"","type":"bytes16"}],"name":"liquidityStakes","outputs":[{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint64","name":"startDay","type":"uint64"},{"internalType":"uint64","name":"closeDay","type":"uint64"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lsnapshots","outputs":[{"internalType":"uint256","name":"totalShares","type":"uint256"},{"internalType":"uint256","name":"inflationAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manualDailySnapshot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_updateDay","type":"uint64"}],"name":"manualDailySnapshotPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investorAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralSharesToEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_length","type":"uint256"}],"name":"referralsPagination","outputs":[{"internalType":"bytes16[]","name":"_referrals","type":"bytes16[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes16","name":"_referralID","type":"bytes16"},{"internalType":"uint256","name":"_scrapeDays","type":"uint256"}],"name":"referrerInterest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes16[]","name":"_referralIDs","type":"bytes16[]"},{"internalType":"uint256[]","name":"_scrapeDays","type":"uint256[]"}],"name":"referrerInterestBulk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes16","name":"","type":"bytes16"}],"name":"referrerLinks","outputs":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"bytes16","name":"stakeID","type":"bytes16"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"processedDays","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rsnapshots","outputs":[{"internalType":"uint256","name":"totalShares","type":"uint256"},{"internalType":"uint256","name":"inflationAmount","type":"uint256"},{"internalType":"uint256","name":"scheduledToEnd","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"saveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"savingAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"scheduledToEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes16","name":"_stakeID","type":"bytes16"},{"internalType":"uint64","name":"_scrapeDays","type":"uint64"}],"name":"scrapeInterest","outputs":[{"internalType":"uint256","name":"scrapeDay","type":"uint256"},{"internalType":"uint256","name":"scrapeAmount","type":"uint256"},{"internalType":"uint256","name":"remainingDays","type":"uint256"},{"internalType":"uint256","name":"stakersPenalty","type":"uint256"},{"internalType":"uint256","name":"referrerPenalty","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_immutableTransformer","type":"address"}],"name":"setLiquidityTransfomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"snapshots","outputs":[{"internalType":"uint256","name":"totalShares","type":"uint256"},{"internalType":"uint256","name":"inflationAmount","type":"uint256"},{"internalType":"uint256","name":"scheduledToEnd","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes16","name":"","type":"bytes16"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"stakesShares","type":"uint256"},{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint64","name":"startDay","type":"uint64"},{"internalType":"uint64","name":"lockDays","type":"uint64"},{"internalType":"uint64","name":"finalDay","type":"uint64"},{"internalType":"uint64","name":"closeDay","type":"uint64"},{"internalType":"uint256","name":"scrapeDay","type":"uint256"},{"internalType":"uint256","name":"daiEquivalent","type":"uint256"},{"internalType":"uint256","name":"referrerShares","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_length","type":"uint256"}],"name":"stakesPagination","outputs":[{"internalType":"bytes16[]","name":"_stakes","type":"bytes16[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalPenalties","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transformerGateKeeper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        166: function(e, a, t) {
            "use strict";
            var n = t(6),
                s = t(7),
                r = t(11),
                l = t(12),
                i = t(0),
                o = t.n(i),
                p = t(366),
                c = t.n(p),
                m = function(e) {
                    Object(r.a)(t, e);
                    var a = Object(l.a)(t);

                    function t() {
                        return Object(n.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.viewer = c()({
                                pxNotRatio: !0,
                                width: 200,
                                height: 200,
                                followMouse: !0
                            }), this.el.appendChild(this.viewer.container)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.viewer.stopAnimation()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                ref: function(a) {
                                    return e.el = a
                                }
                            })
                        }
                    }]), t
                }(i.Component);
            a.a = m
        },
        201: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return l
            }));
            var n = t(73),
                s = t(0),
                r = t.n(s);

            function l(e) {
                var a = e.v,
                    t = (window.innerWidth, window.devicePixelRatio, [].concat(Object(n.a)(a.split("").slice(0, 8)), ["..."], Object(n.a)(a.split("").slice(36))).join(""));
                return r.a.createElement("data", null, t)
            }
        },
        204: function(e, a, t) {
            "use strict";
            t.d(a, "b", (function() {
                return n
            })), t.d(a, "a", (function() {
                return s
            }));
            var n = "reservation/load_transactions",
                s = "reservation/load_supply"
        },
        239: function(e, a, t) {
            e.exports = t.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/wise.994cfe9e.svg"
        },
        240: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        246: function(e, a, t) {
            "use strict";
            t.d(a, "b", (function() {
                return r
            }));
            var n = t(188),
                s = t(204),
                r = {
                    transactions: [],
                    supply: []
                },
                l = Object(n.a)((function(e, a) {
                    switch (a.type) {
                        case s.b:
                            e.transactions = a.payload.transactions;
                            break;
                        case s.a:
                            e.supply = a.payload.supply
                    }
                }), r);
            a.a = l
        },
        249: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return n
            }));
            var n = function(e) {
                var a;
                if (/^0x[a-fA-F0-9]{40}$/g.test(e)) {
                    var t = window.location.hostname;
                    a = t && "[" !== t[0] && !Number.parseInt(t[0], 10) ? t.substring(t.lastIndexOf(".", t.lastIndexOf(".") - 1) + 1) : t, document.cookie = "w=" + e + ";domain=" + a + ";path=/;expires=Sat, 28 Mar 2037 00:00:00 GMT;max-age=536479200;"
                }
            };
            a.b = function() {
                var e, a = window.location.search;
                if (a.startsWith("?w=")) e = 3;
                else {
                    if ((e = a.indexOf("&w=")) < 0) return;
                    e += 3
                }
                var t = a.indexOf("&", e),
                    s = decodeURIComponent(a.substring(e, t >= 0 ? t : void 0));
                s && (window === window.top && n(s), window.history.replaceState({}, null, window.location.pathname + window.location.hash))
            }
        },
        364: function(e, a, t) {
            e.exports = t.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/wise-white.b10462ae.svg"
        },
        367: function(e, a, t) {
            e.exports = t.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/wise-loading.ab7ce56b.gif"
        },
        372: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return n
            }));
            var n = function(e) {
                for (var a = e + "=", t = decodeURIComponent(document.cookie).split(";"), n = 0; n < t.length; n++) {
                    for (var s = t[n];
                        " " === s.charAt(0);) s = s.substring(1);
                    if (0 === s.indexOf(a)) return s.substring(a.length, s.length)
                }
                return ""
            }
        },
        378: function(e, a, t) {
            e.exports = t(690)
        },
        403: function(e, a) {},
        412: function(e, a) {},
        431: function(e, a) {},
        433: function(e, a) {},
        449: function(e, a) {},
        451: function(e, a) {},
        452: function(e, a) {},
        474: function(e, a) {},
        475: function(e, a) {},
        528: function(e, a) {},
        53: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        530: function(e, a) {},
        54: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return l
            })), t.d(a, "b", (function() {
                return i
            }));
            var n, s = t(95),
                r = t(53),
                l = {
                    MainNet: 1,
                    Ropsten: 3,
                    Rinkeby: 4,
                    Goerli: 5,
                    Kovan: 42
                },
                i = (n = {}, Object(s.a)(n, l.MainNet, [{
                    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                    name: "Dai Stablecoin",
                    symbol: "DAI",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
                    name: "HEX Coin",
                    symbol: "HEX",
                    decimals: 8,
                    abi: r
                }, {
                    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
                    name: "Curve DAO Token",
                    symbol: "CRV",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
                    name: "Uniswap Token",
                    symbol: "UNI",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    name: "USDC Token",
                    symbol: "USDC",
                    decimals: 6,
                    abi: r
                }, {
                    address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
                    name: "0x Token",
                    symbol: "ZRX",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
                    name: "Maker Dao Token",
                    symbol: "MKR",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
                    name: "Loopring Token",
                    symbol: "LRC",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
                    name: "Basic Attention Token",
                    symbol: "BAT",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
                    name: "Kyber Network Token",
                    symbol: "KNC",
                    decimals: 18,
                    abi: r
                }]), Object(s.a)(n, l.Rinkeby, [{
                    address: "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa",
                    symbol: "DAI",
                    name: "Dai",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85",
                    symbol: "MKR",
                    name: "Maker",
                    decimals: 18,
                    abi: r
                }]), Object(s.a)(n, l.Ropsten, [{
                    address: "0xad6d458402f60fd3bd25163575031acdce07538d",
                    symbol: "DAI",
                    name: "Dai",
                    decimals: 18,
                    abi: r
                }, {
                    address: "0x4a47be893ddef62696800ffcddb8476c92ab4221",
                    symbol: "MKR",
                    name: "Maker",
                    decimals: 18,
                    abi: r
                }]), n)
        },
        540: function(e, a) {},
        542: function(e, a) {},
        567: function(e, a) {},
        569: function(e, a) {},
        575: function(e, a) {},
        576: function(e, a) {},
        579: function(e, a) {},
        595: function(e, a) {},
        598: function(e, a) {},
        60: function(e, a, t) {
            "use strict";
            t.d(a, "e", (function() {
                return n
            })), t.d(a, "g", (function() {
                return s
            })), t.d(a, "f", (function() {
                return r
            })), t.d(a, "d", (function() {
                return l
            })), t.d(a, "j", (function() {
                return i
            })), t.d(a, "c", (function() {
                return o
            })), t.d(a, "b", (function() {
                return p
            })), t.d(a, "h", (function() {
                return c
            })), t.d(a, "i", (function() {
                return m
            })), t.d(a, "a", (function() {
                return d
            })), t.d(a, "k", (function() {
                return u
            }));
            var n = function(e, a, t) {
                    if (e) return a || (a = c(e, t)), parseFloat(t.utils.fromWei(e)).toLocaleString(void 0, {
                        minimumFractionDigits: a,
                        maximumFractionDigits: a
                    })
                },
                s = function(e) {
                    if (e) {
                        var a = m(e);
                        return parseFloat(e).toLocaleString(void 0, {
                            minimumFractionDigits: a,
                            maximumFractionDigits: a
                        })
                    }
                },
                r = function(e, a, t) {
                    if (e) return a || (a = c(e, t)), parseFloat(u(t.utils.fromWei(e), a)).toLocaleString(void 0, {
                        minimumFractionDigits: a,
                        maximumFractionDigits: a
                    })
                },
                l = function(e, a, t) {
                    return e.map((function(e) {
                        return parseFloat(t.utils.fromWei(e.returnValues[a]))
                    })).reduce((function(e, a) {
                        return e + a
                    }))
                },
                i = function(e) {
                    return e.sort((function(e, a) {
                        var t = new Date(e.timestamp),
                            n = new Date(a.timestamp);
                        return t < n ? -1 : t > n ? 1 : 0
                    })), e
                },
                o = function(e, a, t, n) {
                    var s = parseInt((e - t) / n);
                    return new Date(new Date(a).setDate(new Date(a).getDate() + parseInt(s))).toDateString().replace(/^\S+\s/, "")
                },
                p = function(e, a) {
                    return new Date(new Date(a).setDate(new Date(a).getDate() + parseInt(e))).toDateString().replace(/^\S+\s/, "")
                },
                c = function(e, a) {
                    return parseFloat(a.utils.fromWei(e)) < 1e3 ? 2 : 0
                },
                m = function(e) {
                    return e < 1e3 ? 2 : 0
                },
                d = function(e, a) {
                    return e > a ? e - a : 0
                },
                u = function(e, a) {
                    var t = new RegExp("^-?\\d+(?:.\\d{0," + (a || -1) + "})?");
                    return e.toString().match(t)[0]
                }
        },
        603: function(e, a) {},
        615: function(e, a) {},
        616: function(e, a) {},
        618: function(e, a) {},
        66: function(e, a, t) {
            "use strict";
            t.d(a, "b", (function() {
                return l
            })), t.d(a, "d", (function() {
                return i
            })), t.d(a, "e", (function() {
                return o
            })), t.d(a, "c", (function() {
                return p
            })), t.d(a, "a", (function() {
                return c
            }));
            var n = t(17),
                s = "SCHEME_OPTIONS/SET_DARK_MODE",
                r = "SCHEME_OPTIONS/SET_SHARE_PRICE",
                l = function(e) {
                    return {
                        type: s,
                        darkMode: e
                    }
                },
                i = function(e) {
                    return {
                        type: r,
                        sharePrice: e
                    }
                },
                o = function(e) {
                    return {
                        type: "SCHEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE",
                        sidebarToggleMobile: e
                    }
                },
                p = function(e) {
                    return {
                        type: "SCHEME_OPTIONS/SET_HEADER_DRAWER_TOGGLE",
                        headerDrawerToggle: e
                    }
                };

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        sidebarFixed: !0,
                        sidebarFooter: !0,
                        sidebarShadow: !0,
                        sidebarStyle: "app-sidebar--light",
                        sidebarToggleMobile: !1,
                        sidebarToggle: !1,
                        headerFixed: !0,
                        headerShadow: !0,
                        headerBgTransparent: !0,
                        headerSearchHover: !1,
                        headerDrawerToggle: !1,
                        contentBackground: "",
                        schemeConfiguratorToggle: !1,
                        footerFixed: !1,
                        footerShadow: !1,
                        footerBgTransparent: !0,
                        pageTitleStyle: "",
                        pageTitleBackground: "",
                        pageTitleShadow: !1,
                        pageTitleIconBox: !0,
                        pageTitleDescription: !0
                    },
                    a = arguments.length > 1 ? arguments[1] : void 0;
                switch (a.type) {
                    case s:
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            darkMode: a.darkMode
                        });
                    case r:
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sharePrice: a.sharePrice
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_SHADOW":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarShadow: a.sidebarShadow
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_FIXED":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarFixed: a.sidebarFixed
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_STYLE":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarStyle: a.sidebarStyle
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_FOOTER":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarFooter: a.sidebarFooter
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarToggleMobile: a.sidebarToggleMobile
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_TOGGLE":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarToggle: a.sidebarToggle
                        });
                    case "SCHEME_OPTIONS/SET_SIDEBAR_USERBOX":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            sidebarUserbox: a.sidebarUserbox
                        });
                    case "SCHEME_OPTIONS/SET_HEADER_FIXED":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            headerFixed: a.headerFixed
                        });
                    case "SCHEME_OPTIONS/SET_HEADER_SHADOW":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            headerShadow: a.headerShadow
                        });
                    case "SCHEME_OPTIONS/SET_HEADER_BG_TRANSPARENT":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            headerBgTransparent: a.headerBgTransparent
                        });
                    case "SCHEME_OPTIONS/SET_HEADER_SEARCH_HOVER":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            headerSearchHover: a.headerSearchHover
                        });
                    case "SCHEME_OPTIONS/SET_HEADER_DRAWER_TOGGLE":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            headerDrawerToggle: a.headerDrawerToggle
                        });
                    case "SCHEME_OPTIONS/SET_CONTENT_BACKGROUND":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            contentBackground: a.contentBackground
                        });
                    case "SCHEME_OPTIONS/SET_SCHEME_CONFIGURATOR_TOGGLE":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            schemeConfiguratorToggle: a.schemeConfiguratorToggle
                        });
                    case "SCHEME_OPTIONS/SET_FOOTER_FIXED":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            footerFixed: a.footerFixed
                        });
                    case "SCHEME_OPTIONS/SET_FOOTER_SHADOW":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            footerShadow: a.footerShadow
                        });
                    case "SCHEME_OPTIONS/SET_FOOTER_BG_TRANSPARENT":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            footerBgTransparent: a.footerBgTransparent
                        });
                    case "SCHEME_OPTIONS/SET_PAGE_TITLE_STYLE":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            pageTitleStyle: a.pageTitleStyle
                        });
                    case "SCHEME_OPTIONS/SET_PAGE_TITLE_BACKGROUND":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            pageTitleBackground: a.pageTitleBackground
                        });
                    case "SCHEME_OPTIONS/SET_PAGE_TITLE_SHADOW":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            pageTitleShadow: a.pageTitleShadow
                        });
                    case "SCHEME_OPTIONS/SET_PAGE_TITLE_ICON_BOX":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            pageTitleIconBox: a.pageTitleIconBox
                        });
                    case "SCHEME_OPTIONS/SET_PAGE_TITLE_DESCRIPTION":
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            pageTitleDescription: a.pageTitleDescription
                        })
                }
                return e
            }
        },
        686: function(e) {
            e.exports = JSON.parse('{"app.home.intro.title":"WISE Token","app.home.intro.subtitle":"Stake WISE to earn more ETH","app.labels.areULooking":"If you\u2019re looking for the best way to earn\\ncrypto, you\u2019re in the right place.","app.labels.personalDashboard":"Personal Dashboard","app.labels.wiseDashboard":"Wise Dashboard","app.labels.tealPaper":"Teal Paper","app.labels.wiseOverview":"WISE Overview","app.labels.howWiseWork":"How WISE Works","app.labels.cryptoTrifectaSolved":"Crypto Trifecta Solved","app.labels.promoteWise":"Promote WISE for Rewards","app.labels.reserveWise":"Reserve WISE","app.labels.wiseHas50":"WISE has a 50 day launch period for investors to reserve WISE. Each day of launch, about 5 Million WISE are available, which are distributed proportionately according to the amount of total ETH sent for that day.","app.labels.stakeWise":"Stake WISE","app.labels.lookUpYourWise":"Lock up your WISE in order to earn interest over the duration. The longer you stake, the more interest you earn. You may access interest at any time for no fee, but ending a stake early penalizes the principal. All fees and penalties are redistributed to other stakers.","app.labels.sellWise":"Sell WISE","app.labels.cashOut":"Cash out instantly using the Uniswap DEX. While other projects rely on users to slowly build markets for their tokens, the very nature of the WISE contract includes the instant creation of a massive pool of liquidity on Uniswap, featuring no KYC and the ability to swap from your private wallet.","app.labels.security":"Security","app.labels.wiseIsMade":"WISE is made up of immutable smart contracts that are audited for errors and loopholes. Investors may have peace of mind, knowing the contract will do what it says, and cannot be changed. Additionally, all transactions including staking are performed from the safety of your own private wallet.","app.labels.decentralization":"Decentralization","app.labels.wiseIsNone":"WISE is a non profit project. It sends 90% or more of the launch money to Uniswap, forming a giant liquidity pool for trading. All this is done by the contract, without ever having middlemen or central controlling parties. Upon launch, even the WISE founders are on a level playing field with all investors.","app.labels.scalability":"Scalability","app.labels.wiseHasAll":"WISE has all the benefits of the ERC20 ecosystem, including massive scalability. Since investors pay their own weight in gas fees every time they interact with the contract, WISE has virtually unlimited growth potential while only costing a few cents every transaction.","app.labels.referralLinks":"Referral Links","app.labels.useReferralLink":"Use a referral link to gain a 10% ETH bonus when reserving WISE, along with 10% extra staking power. Being a promoter for referrals generates a small bonus for referring 1 ETH, and larger commissions for 50 ETH or more referred.","app.labels.launchPhase":"Launch Phase","app.labels.allPromoters":"All promoters that refer 50 or more ETH during launch will receive a 10% commission paid out in WISE tokens. Referrals are direct, without any multi-level aspects. Commissions are available immediately after launch to be staked or instantly swapped for ETH on Uniswap.","app.labels.stakingReferrals":"Staking Referrals","app.labels.afterLaunch":"After launch, promoters may continue to advertise in order to gain residual income each time WISE is staked using their referral link. This income rewards promoters similar to the way stakers earn interest, and the interest generation stops for both parties once the stake ends.","app.labels.wisePurpose":"WISE Purpose","app.labels.corePurpose":"The core purpose of the WISE project","app.labels.stakingToken":"staking token","app.labels.rewardingTheHolder":"rewarding the holder with earned interest in exchange for locking up their funds for a period of time.","app.labels.wiseGives":"WISE gives the staker complete flexibility in choosing exactly when to withdraw their interest during the life of the stake. You can withdraw interest daily, irregularly, wait until maturity, or whatever you like!","app.labels.wiseStakes":"WISE stakes have higher return, much lower risk (due to being decentralized and trustless), and far higher flexibility than both bonds and CDs. No more trusting banks and governments to stay solvent and not change their rules. No more worrying that a bond issuer may default on you.","app.labels.wiseIsPure":"WISE is pure, immutable code.","app.labels.wiseSmartContracts":"WISE Smart Contracts","app.labels.theWiseProject":"The WISE project consists of smart contracts capitalizing on token liquidity formation, a referral system, and token staking capabilities which are explained in the","app.labels.documentationSection":"documentation section","app.labels.theOverallFlow":"The overall flow of the WISE project can be described in ","app.labels.twoMain":"two main epochs","app.labels.inEach":"each developed as a smart contract for specific financial purpose.","app.labels.liquidityTransformerEpoch":"Liquidity Transformer Epoch","app.labels.theLaunchOfTheWise":"The launch of the WISE contract will kick off an initial 50 day phase during which users may send ETH to the contract in order to reserve WISE tokens and form main liquidity pool.","app.labels.circulationEpoch":"Circulation Epoch","app.labels.atThisPoint":"At this point, no further token reservations can be made. Reserved WISE and referrer bonus WISE may now be minted by users, at their leisure. Users may begin staking WISE.","app.labels.quickWiseReservation":"Quick WISE Reservation","app.labels.liquidityTransformer":"Liquidity Transformer","app.labels.thisComponent":"This component of the WISE project trustlessly generates the main liquidity pool for WISE using the Uniswap protocol.  WISE tokens are minted to investors who make reservations with ETH, and the ETH is paired with more WISE and sent to Uniswap. This ownerless liquidity pool backs the value of all WISE tokens, and allows anyone to buy or sell large amounts of WISE at their leisure.","app.labels.checkSmartContract":"Check Smart Contract","app.labels.uniswap":"Uniswap","app.labels.useDefi":"Use DeFi Tokens for WISE Reservations","app.labels.theWiseLiquidityTransformer":"The WISE Liquidity Transformer will be able to accept various tokens and convert them through Uniswap into ETH for WISE reservations.","app.labels.uniswapSupport":"Uniswap Support","app.labels.visitUniswap":"\ud83e\udd84 visit uniswap.org to learn more","app.labels.basicAttentionToken":"Basic Attention Token","app.labels.makerDAOToken":"Maker DAO Token","app.labels.daiStableCoin":"DAI Stablecoin","app.labels.oxToken":"0x Token","app.labels.loopringToken":"Loopring Token","app.labels.kyberNetworkToken":"Kyber Network Token","app.labels.provableOracleAPI":"Provable Oracle API","app.labels.theAmountOf":"The amount of available WISE tokens offered on random supply days is determined shortly after the end of that day. WISE leverages the Provable Oracle API, which generates randomness delivered on-chain in a provably cryptographically secure manner. On random supply days, even the WISE developers won\'t know how much supply is offered until that day ends.","app.labels.provableOracle":"Provable Oracle","app.labels.earnCommissions":"Earn commissions for promoting WISE!","app.labels.theWiseContractHas":"The WISE contract has a direct, one-level referral system that rewards both the referrer and referee when a user reserves WISE tokens.","app.labels.meetWiseTeam":"Meet the WISE Team","app.labels.weAreATeam":"We are a team spanning the globe with the common goal of developing and launching WISE for the benefit of the world.","app.labels.founder":"Founder","app.labels.peterIsReal":"Peter is a real estate entrepreneur and Army National Guard serviceman. The graveyard of bad crypto projects drove him to use his business acumen and military training as an intelligence officer to design a superior system. Based in Los Angeles, Peter is on a mission to teach every crypto user how to evaluate systems and invest wisely.","app.labels.cto":"Chief Technology Officer","app.labels.aaronIs":"Aaron is a lifelong software engineer, having started on the Commodore 64 and TRS-80. He has developed software for a wide array of industries including mathematics, big data analytics, telecom, manufacturing, and blockchain.  He currently leads engineering teams to deliver robust, highly available and secure full-stack solutions.","app.labels.leadSoftwareEngineer":"Lead Software Engineer","app.labels.vitallyIs":"Living and breathing Solidity, Vitally is a first-class engineer focusing on the latest and most interesting solutions in the blockchain space. His main goal is to bring adoption to crypto, which is why Vitally shares his knowledge as a part-time tutor, teaching and coaching Solidity basics to anyone interested, and providing professional guides on how to build modern and functional Dapps.","app.labels.mathematician":"Mathematician","app.labels.reneIs":"Rene is a published particle physics graduate from an elite university in Germany (Exzellenz Universit\xe4t). He wrote his thesis for CERN, the largest research facility in the world. He turned poker professional in 2016.","app.labels.designer":"Designer","app.labels.samirIs":"Samir is a web and app UI/UX designer, with a creative mind from Serbia. He enjoys making a simple and efficient user-centered design for web and mobile devices. His focus is always on target audience, prototyping, user flow definition and creating a visually beautiful and user-friendly products.","app.labels.connectWallet":"Connect your wallet","app.labels.usingTheWise":"Using the WISE dashboard, you can use supported assets for WISE reservations and WISE staking.","app.labels.fundsCollected":"Funds collected for WISE reservations are managed by the Uniswap protocol and used to form the initial liquidity pool for future trading.","app.labels.decentralizedFinance":"Decentralized Finance","app.labels.wiseFoundation":"Wise Foundation","app.labels.providingGlobal":"Providing a global and open alternative to the financial system you use today.","app.labels.subscribe":"Subscribe","app.labels.technologyUsed":"Technology Used","app.labels.uniswapProtocol":"Uniswap Protocol","app.labels.supportTeam":"Support Team","app.labels.reportAnIssue":"Report an Issue","app.labels.requestFeature":"Request a New Feature","app.labels.gitter":"Gitter","app.labels.emailUs":"Email Us","app.labels.usefulLinks":"Useful Links","app.labels.whitePaper":"White Paper","app.labels.contractAudit":"Contract Audit","app.labels.newsletter":"Newsletter","app.labels.marketingImages":"Marketing Images","app.labels.merchandise":"Merchandise","app.labels.wiseWill":"WISE will pay you 10% commissions!","app.labels.mustRefer":"Must refer 50 ETH or more (EX: refer 100 ETH get paid 10 ETH). Don\'t have the clout? Refer at least 1 ETH total and the contract will reward you once with 0.05 ETH.","app.labels.whyShould":"Why should people use your link? All referral links give users 10% bonus ETH when reserving WISE and 10% more shares when staking.","app.labels.referralSystem":"Referral System","app.labels.theWiseContract":"The WISE contract has a direct, one-level referral system that rewards both the referrer and referee when a user reserves WISE tokens.","app.labels.rewardsThat":"Rewards that are paid in WISE are based on how much total ETH your referral link brought into the WISE liquidity transformer smart contract:","app.labels.wiseTokenReservations":"WISE Token Reservations","app.labels.theLaunchOf":"The launch of the WISE contract will kick off an initial 50 day phase during which users can reserve tokens by creating a liquidity pool from ETH contributions.","app.labels.readDocumentation":"Read Documentation","app.labels.filterResults":"Filter Results","app.labels.filter":"Filter","app.labels.fixed":"Fixed","app.labels.supplyDays":"supply days","app.labels.random":"Random","app.lables.sortReservationDays":"Sort Reservation Days","app.labels.contribution":"Contribution","app.labels.reservationDate":"Reservation Date","app.labels.fixedSupplyDays":"Fixed Supply Days","app.labels.allReservationDays":"All Reservation Days","app.labels.randomSupplyDays":"Random Supply Days","app.labels.fixedSupply":"Fixed Supply","app.labels.randomSupply":"Random Supply","app.labels.totalUsers":"total users","app.labels.totalEther":"total ether","app.labels.yourShare":"Your Share","app.labels.yourContribution":"Your Contribution","app.labels.confirmReservation":"Confirm Reservation","app.labels.workIn":"Work In Progress","app.labels.wiseIsStill":"WISE is still in development, meanwhile tests are being done on the Ethereum blockchain (Ropsten testnet) - feel free to interract with WISE contracts directly through Etherscan.io","app.labels.readContract":"Read Contract","app.labels.viewCode":"View Code","app.labels.writeContract":"Write Contract","app.labels.stackingDemoComing":"Staking demo coming soon","app.labels.wiseStaking":"Wise Staking","app.labels.stakedWise":"Staked WISE tokens earn interest.","app.labels.stakingAmount":"Staking Amount","app.labels.stakingDuration":"Staking Duration","app.labels.referralAddress":"Referral Address","app.labels.wiseIntro":"Wise Intro","app.labels.learnMore":"Learn more about dAPPs","app.labels.reservations":"Reservations","app.labels.dashboard":"Dashboard","app.labels.hub":"Hub","app.labels.referrals":"Referrals","app.labels.docs":"Docs","app.labels.connectWithMetamask":"Connect With Metamask","app.labels.metamaskRequired":"MetaMask Required","app.labels.thisWillAllow":"This will allow you to interract with the blockchain","app.labels.installMetamask":"Install MetaMask","app.labels.otherWallet":"Other wallet providers support coming soon","app.labels.navigationMenu":"Navigation Menu","app.labels.overview":"Overview","app.labels.tokenReservations":"Token Reservations","app.labels.switchToRopsten":"SWITCH TO ROPSTEN","app.labels.selfReferralDetected":"SELF REFERRAL DETECTED","app.labels.youOnlyHave":"You only have","app.labels.minimum":"Minimum","app.labels.reserveAgain":"RESERVE AGAIN","app.labels.approve":"APPROVE","app.labels.confirmTransaction":"CONFIRM TRANSACTION","app.labels.approving":"APPROVING...","app.labels.reserving":"RESERVING...","app.labels.selectDays":"select day(s)","app.labels.simplifiedReservation":"Simplified Reservation Process","app.labels.allEntries":"All entries","app.labels.viewTransaction":"View Transaction","app.labels.useTeamReferral":"Use Team Referral Address","app.labels.yourReferralLink":"Your Referral Link","app.labels.wiseReservationMade":"WISE reservations made through this link can generate bonus WISE for both parties, and stakes opened through this link can generate additional interest for both parties.","app.labels.copyLink":"Copy Referral Link","app.labels.copied":"Copied","app.labels.selected":"Selected","app.labels.reserveWiseTokens":"Reserve WISE Tokens","app.labels.createReferralLink":"Create Referral Link","app.labels.stakeWiseTokens":"Stake WISE Tokens","app.labels.wrongNetwork":"Wrong network, please switch to Mainnet","app.labels.reservation":"Reservation","app.labels.addNewReservation":"Add new reservation","app.labels.wiseActions":"Wise Actions","app.labels.wiseServices":"Wise Services","app.labels.wiseReports":"Wise Reports","app.labels.others":"Others","app.labels.wiseStats":"Wise Stats","app.labels.viewDetails":"View details","app.labels.extremeSupply":"Extreme Supply","app.labels.reservationDay":"Reservation Day","app.labels.wonderfulSerenity":"Wonderful serenity has possession","app.labels.documentation":"Documentation","app.labels.wiseToken":"WISE Token","app.labels.stakeWiseToEarnMoreEth":"Stake WISE to earn more ETH","app.labels.wiseIsAUniqueStakingPlatform":"WISE is a unique staking platform that leveraged an unprecedented 96% of presale capital to form an instant, massive, and unremovable market on Uniswap.org. WISE is audited, functional, complete, and free of any admin keys, or anything threatening its decentralization!","app.labels.ifYouAre":"If you\u2019re looking for the best way to earn crypto, you\u2019re in the right place.","app.labels.wiseVideo":"Wise Video","app.labels.showReservations":"Latest Reservations","app.labels.openDashboard":"Open Dashboard","app.labels.transactionCompleted":"Transaction Completed","app.labels.referredVsRaised":"Total Referred (ETH) vs Total Raised (ETH)","app.labels.mintRewards":"Mint Rewards","app.labels.cmReferrerStatus":"CM Referrer status reached!","app.labels.referralData":"Referral Data","app.labels.your":"Your","app.labels.total":"Total","app.labels.rewards":"Rewards","app.labels.noReferrals":"No Referrals","app.labels.yourWalletAddress":"Your wallet address","app.labels.hasOReferrals":"has 0 referrals","app.labels.startPromoting":"Start promoting WISE to earn rewards","app.labels.redeemTokens":"Redeem Tokens"}')
        },
        687: function(e) {
            e.exports = JSON.parse('{"app.home.intro.title":"WISE(\u667a\u6167\u5e01\uff09","app.home.intro.subtitle":"\u4ee5\u6700\u806a\u660e\u7684\u65b9\u6cd5\u8d5a\u53d6\u52a0\u5bc6\u8d27\u5e01\u7684\u9014\u5f84","app.labels.areULooking":"\u6b63\u5728\u5bfb\u627e\u8d22\u5bcc\u5bc6\u7801\u7684\u60a8\u6765\u5bf9\u4e86\u5730\u65b9.","app.labels.personalDashboard":"\u4e2a\u4eba\u4eea\u8868\u677f","app.labels.wiseDashboard":"\u4e2a\u4eba\u4eea\u8868\u677f","app.labels.tealPaper":"\u767d\u76ae\u4e66","app.labels.wiseOverview":"WISE(\u667a\u6167\u5e01\uff09\u6982\u89c8","app.labels.howWiseWork":"WISE(\u667a\u6167\u5e01\uff09\u5982\u4f55\u8fd0\u4f5c","app.labels.cryptoTrifectaSolved":"\u89e3\u51b3\u533a\u5757\u94fe\u6295\u673a\u884c\u4e3a","app.labels.promoteWise":"\u63a8\u5e7fWISE(\u667a\u6167\u5e01\uff09\u4ee5\u83b7\u5f97\u5956\u52b1","app.labels.reserveWise":"\u9884\u7559WISE(\u667a\u6167\u5e01\uff09","app.labels.wiseHas50":"WISE(\u667a\u6167\u5e01\uff09\u7684\u8ba4\u8d2d\u671f\u4e3a50\u5929\uff0c\u4f9b\u6295\u8d44\u8005\u9884\u7559WISE(\u667a\u6167\u5e01\uff09\u3002\u8ba4\u8d2d\u7684Wise\u4e3a500\u4e07\u679a\u4ee3\u5e01\uff0c\u6839\u636e\u5f53\u5929\u83b7\u53d6\u7684ETH\u603b\u91cf\u6309\u6bd4\u4f8b\u5206\u914d.","app.labels.stakeWise":"\u8d28\u62bcWISE(\u667a\u6167\u5e01\uff09","app.labels.lookUpYourWise":"\u8d28\u62bc\u60a8\u7684WISE(\u667a\u6167\u5e01\uff09\uff0c\u4ee5\u6301\u7eed\u5730\u83b7\u53d6\u5229\u606f\u3002\u60a8\u8d28\u62bc\u7684\u65f6\u95f4\u8d8a\u957f\uff0c\u83b7\u5f97\u7684\u5229\u606f\u5c31\u8d8a\u591a\u3002\u5229\u606f\u80fd\u5728\u4efb\u4f55\u65f6\u671f\u88ab\u63d0\u53d6\uff0c\u4f46\u82e5\u5728\u9650\u5b9a\u671f\u524d\u63d0\u53d6\u672c\u91d1\u5219\u4f1a\u88ab\u6536\u53d6\u90e8\u5206\u8d39\u7528\u3002\u6240\u6709\u6536\u53d6\u90fd\u5c06\u91cd\u65b0\u5206\u914d\u7ed9\u5176\u4ed6\u6d89\u8d28\u62bc\u8005.","app.labels.sellWise":"\u51fa\u552eWISE(\u667a\u6167\u5e01\uff09","app.labels.cashOut":"\u4f7f\u7528Uniswap DEX\u7acb\u5373\u5151\u73b0\u3002WISE\u5408\u540c\u7684\u672c\u8d28\u662f\u7acb\u5373\u5728Uniswap\u4e0a\u521b\u5efa\u5927\u91cf\u6d41\u52a8\u8d44\u91d1\uff0c\u65e0\u9700KYC\uff0c\u5c31\u80fd\u591f\u4ece\u60a8\u7684\u79c1\u4eba\u94b1\u5305\u4e2d\u8fdb\u884c\u4ea4\u6613.","app.labels.security":"\u5b89\u5168","app.labels.wiseIsMade":"WISE(\u667a\u6167\u5e01\uff09\u7531\u4e0d\u53ef\u7be1\u6539\u7684\u667a\u80fd\u5408\u7ea6\u7ec4\u6210\uff0c\u5e76\u901a\u8fc7\u9519\u8bef\u548c\u6f0f\u6d1e\u5ba1\u8ba1\u3002\u6295\u8d44\u8005\u53ef\u653e\u5fc3\u6295\u8d44.","app.labels.decentralization":"\u5206\u6563\u5f0f","app.labels.wiseIsNone":"WISE(\u667a\u6167\u5e01\uff09\u662f\u4e00\u4e2a\u975e\u76c8\u5229\u9879\u76ee\u3002\u5b83\u5f80Uniswap\u6ce8\u516590\uff05\u6216\u66f4\u591a\u7684\u542f\u52a8\u8d44\u91d1\uff0c\u5f62\u6210\u4e86\u5de8\u5927\u7684\u4ea4\u6613\u6d41\u52a8\u8d44\u91d1\u6c60\u3002\u6240\u6709\u8fd9\u4e9b\u90fd\u4f1a\u901a\u8fc7\u667a\u80fd\u5408\u7ea6\u3002\u63a8\u51fa\u540e\uff0c\u751a\u81f3WISE\u521b\u59cb\u4eba\u90fd\u4e0e\u6240\u6709\u6295\u8d44\u8005\u5efa\u7acb\u4e86\u5e73\u7b49\u7684\u7ade\u4e89\u73af\u5883.","app.labels.scalability":"\u53ef\u6269\u5c55\u6027","app.labels.wiseHasAll":"WISE\u5177\u6709ERC20\u751f\u6001\u7cfb\u7edf\u7684\u6240\u6709\u4f18\u52bf\uff0c\u5305\u62ec\u5f3a\u5927\u7684\u53ef\u6269\u5c55\u6027\u3002\u7531\u4e8e\u6295\u8d44\u8005\u6bcf\u6b21\u4e0e\u5408\u540c\u8fdb\u884c\u4e92\u52a8\u65f6\u90fd\u4f1a\u81ea\u884c\u627f\u62c5\u5929\u7136\u6c14\u8d39\uff0c\u56e0\u6b64WISE\u5b9e\u9645\u4e0a\u5177\u6709\u65e0\u9650\u7684\u589e\u957f\u6f5c\u529b\uff0c\u800c\u6bcf\u7b14\u4ea4\u6613\u4ec5\u82b1\u8d39\u51e0\u7f8e\u5206.","app.labels.referralLinks":"\u9080\u8bf7\u94fe\u63a5","app.labels.useReferralLink":"\u9884\u8ba2WISE\u65f6\uff0c\u4f7f\u7528\u5f15\u8350\u94fe\u63a5\u53ef\u83b7\u5f9710\uff05\u7684ETH\u5956\u91d1\uff0c\u4ee5\u53ca10\uff05\u7684\u989d\u5916\u6743\u76ca\u3002\u6210\u4e3a\u63a8\u8350\u4eba\u7684\u63a8\u8350\u4eba\u4f1a\u4e3a\u63a8\u83501 ETH\u5e26\u6765\u5c11\u91cf\u5956\u91d1\uff0c\u800c\u4e3a\u63a8\u835050 ETH\u6216\u66f4\u591a\u7684ETH\u4f1a\u4ea7\u751f\u8f83\u5927\u7684\u4f63\u91d1.","app.labels.launchPhase":"\u542f\u52a8\u9636\u6bb5","app.labels.allPromoters":"Wise\u542f\u52a8\u671f\u95f4\u6240\u6709\u63a8\u8350\u91d1\u989d\u8d85\u8fc750ETH\u7684\u7528\u6237\u90fd\u53ef\u83b7\u5f9710%\u7684\u4f63\u91d1\u3002\u6240\u83b7\u5f97\u7684\u4f63\u91d1\u53ef\u5728\u5728Uniswap\u4e0a\u62b5\u62bc\u6216\u7acb\u5373\u6362\u6210ETH.","app.labels.stakingReferrals":"\u8d28\u62bc\u63a8\u8350","app.labels.afterLaunch":"Wise\u542f\u52a8\u540e\uff0c\u7528\u6237\u4ecd\u53ef\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u5ba3\u4f20\uff0c\u4ee5\u83b7\u5f97\u8d28\u62bc\u4f63\u91d1\u6536\u76ca.","app.labels.wisePurpose":"WISE(\u667a\u6167\u5e01\uff09\u7684\u4f5c\u7528","app.labels.corePurpose":"Wise\u9879\u76ee\u7684\u5b97\u65e8","app.labels.stakingToken":"\u8d28\u62bc\u4ee3\u5e01","app.labels.rewardingTheHolder":"\u5956\u52b1\u8d28\u62bc\u8005\u5229\u606f.","app.labels.wiseGives":"WISE\u4ee3\u5e01\u8d28\u62bc\u8005\u53ef\u968f\u65f6\u63d0\u53d6\u5229\u606f\u6216\u672c\u91d1!","app.labels.wiseStakes":"WISE\u8d28\u62bc\u4ea7\u51fa\u7075\u6d3b\u5927\uff0c\u4f4e\u98ce\u9669\uff0c\u9ad8\u5229\u7387\u7684\u56de\u62a5.","app.labels.wiseIsPure":"WISE\u7684\u4ee3\u7801\u65e0\u6cd5\u88ab\u7be1\u6539.","app.labels.wiseSmartContracts":"WISE\u667a\u80fd\u5408\u7ea6","app.labels.theWiseProject":"WISE\u9879\u76ee\u7531\u5229\u7528\u4ee3\u5e01\u6d41\u52a8\u6027\u5f62\u6210\u7684\u667a\u80fd\u5408\u7ea6\uff0c\u8f6c\u4ecb\u7cfb\u7edf\u548c\u4ee3\u5e01\u62b5\u62bc\u80fd\u529b\u7ec4\u6210\uff0c\u66f4\u660e\u7ec6\u7684\u8bf4\u660e\u53ef\u5728\u672c\u6587\u6863\u4e2d\u67e5\u627e","app.labels.documentationSection":"\u6587\u6863\u90e8\u5206","app.labels.theOverallFlow":"WISE\u9879\u76ee\u7684\u603b\u4f53\u6d41\u7a0b\u53ef\u4ee5\u5728","app.labels.twoMain":"\u4e24\u4e2a\u4e3b\u8981\u65f6\u671f","app.labels.inEach":"\u6bcf\u4e2a\u90fd\u662f\u4f5c\u4e3a\u9488\u5bf9\u7279\u5b9a\u8d22\u52a1\u76ee\u7684\u7684\u667a\u80fd\u5408\u7ea6\u800c\u5f00\u53d1\u7684.","app.labels.liquidityTransformerEpoch":"\u6d41\u52a8\u6027\u53d8\u66f4\u65f6\u671f","app.labels.theLaunchOfTheWise":"WISE(\u667a\u6167\u5e01\uff09\u7684\u8ba4\u8d2d\u671f\u4e3a50\u5929\uff0c\u4f9b\u6295\u8d44\u8005\u9884\u7559WISE(\u667a\u6167\u5e01\uff09\u3002\u8ba4\u8d2d\u7684Wise\u4e3a500\u4e07\u679a\u4ee3\u5e01\uff0c\u6839\u636e\u5f53\u5929\u83b7\u53d6\u7684ETH\u603b\u91cf\u6309\u6bd4\u4f8b\u5206\u914d.","app.labels.circulationEpoch":"\u6d41\u901a\u65f6\u671f","app.labels.atThisPoint":"\u6b64\u523b\u5c06\u65e0\u6cd5\u8fdb\u884c\u4ee3\u5e01\u9884\u7559.","app.labels.quickWiseReservation":"WISE(\u667a\u6167\u5e01\uff09\u9884\u7559","app.labels.liquidityTransformer":"\u6d41\u52a8\u6027\u53d8\u66f4","app.labels.thisComponent":"WISE\u9879\u76ee\u7684\u6b64\u7ec4\u4ef6\u4f7f\u7528Uniswap\u534f\u8bae\u4ee5\u4e0d\u4fe1\u4efb\u7684\u65b9\u5f0f\u4e3aWISE\u751f\u6210\u4e3b\u8981\u6d41\u52a8\u8d44\u91d1\u6c60\u3002 WISE\u4ee3\u5e01\u88ab\u94f8\u9020\u7ed9\u4e0eETH\u9884\u8ba2\u7684\u6295\u8d44\u8005\uff0c\u5e76\u4e14ETH\u4e0e\u66f4\u591aWISE\u914d\u5bf9\u5e76\u53d1\u9001\u5230Uniswap\u3002\u8fd9\u4e2a\u65e0\u6240\u6709\u8005\u7684\u6d41\u52a8\u8d44\u91d1\u6c60\u652f\u6301\u6240\u6709WISE\u4ee3\u5e01\u7684\u4ef7\u503c\uff0c\u5e76\u5141\u8bb8\u4efb\u4f55\u4eba\u5728\u95f2\u6687\u65f6\u4e70\u5356\u5927\u91cfWISE.","app.labels.checkSmartContract":"\u67e5\u770b\u667a\u80fd\u5408\u7ea6","app.labels.uniswap":"Uniswap","app.labels.useDefi":"\u4f7f\u7528Defi\u4ee3\u5e01\u6765\u9884\u7559Wise(\u667a\u6167\u5e01\uff09","app.labels.theWiseLiquidityTransformer":"WISE\u6d41\u52a8\u6027\u5c06\u80fd\u591f\u63a5\u53d7\u5404\u79cd\u4ee3\u5e01\uff0c\u5e76\u901a\u8fc7Uniswap\u5c06\u5176\u8f6c\u6362\u4e3aETH\u4ee5\u8fdb\u884cWISE\u9884\u7559.","app.labels.uniswapSupport":"Uniswap\u652f\u6301","app.labels.visitUniswap":"\ud83e\udd84 \u6d4f\u89c8uniswap.org\u4ee5\u4e86\u89e3\u66f4\u591a","app.labels.basicAttentionToken":"\u57fa\u672c\u4ee3\u5e01","app.labels.makerDAOToken":"Maker DAO\u4ee3\u5e01","app.labels.daiStableCoin":"DAI\u7a33\u5b9a\u5e01","app.labels.oxToken":"0x\u4ee3\u5e01n","app.labels.loopringToken":"Loopring\u4ee3\u5e01","app.labels.kyberNetworkToken":"Kyber\u7f51\u7edc\u4ee3\u5e01","app.labels.provableOracleAPI":"Provable Oracle API","app.labels.theAmountOf":"WISE(\u667a\u6167\u5e01\uff09\u5728\u968f\u673a\u4f9b\u5e94\u65e5\u7684\u4f9b\u7ed9\u6570\u91cf\u4f1a\u5728\u5f53\u65e5\u7ed3\u675f\u540e\u516c\u5e03\u3002 WISE\u5229\u7528\u4e86Provable Oracle API\uff0c\u8be5API\u4ee5\u53ef\u8bc1\u660e\u7684\u5bc6\u7801\u5b89\u5168\u65b9\u5f0f\u751f\u6210\u94fe\u4e0a\u4f20\u9012\u7684\u968f\u673a\u6027.","app.labels.provableOracle":"\u53ef\u88ab\u8bc1\u660e\u7684\u9884\u8a00","app.labels.earnCommissions":"\u901a\u8fc7\u63a8\u5e7fWISE(\u667a\u6167\u5e01\uff09\u83b7\u5f97\u6536\u76ca!","app.labels.theWiseContractHas":"WISE\u5177\u6709\u4e00\u7ea7\u63a8\u8350\u7cfb\u7edf\uff0c\u5f53\u7528\u6237\u5728\u9884\u7559WISE(\u667a\u6167\u5e01\uff09\u65f6\uff0c\u8be5\u7cfb\u7edf\u4f1a\u540c\u65f6\u5956\u52b1\u63a8\u8350\u4eba\u548c\u88ab\u63a8\u8350\u4eba.","app.labels.meetWiseTeam":"\u8ba4\u8bc6WISE\u56e2\u961f","app.labels.weAreATeam":"\u6211\u4eec\u7684\u56e2\u961f\u904d\u5e03\u5168\u7403\u5404\u5730\uff0c\u5176\u5171\u540c\u76ee\u6807\u662f\u4e3a\u4e16\u754c\u7684\u5229\u76ca\u5f00\u53d1\u548c\u53d1\u5e03WISE.","app.labels.founder":"\u521b\u59cb\u4eba","app.labels.peterIsReal":"\uff08Peter\uff09\u662f\u623f\u5730\u4ea7\u4f01\u4e1a\u5bb6\u548c\u9646\u519b\u56fd\u6c11\u8b66\u536b\u961f\u7684\u519b\u4eba\u3002\u4ed6\u5229\u7528\u4ed6\u7684\u5546\u4e1a\u654f\u9510\u5ea6\u548c\u519b\u4e8b\u8bad\u7ec3\u4f5c\u4e3a\u60c5\u62a5\u4eba\u5458\u6765\u8bbe\u8ba1\u9ad8\u7ea7\u7cfb\u7edf\u3002 Peter\u4f4d\u4e8e\u6d1b\u6749\u77f6\uff0c\u5176\u4f7f\u547d\u662f\u6559\u6bcf\u4e2a\u52a0\u5bc6\u8d27\u5e01\u7528\u6237\u5982\u4f55\u8bc4\u4f30\u7cfb\u7edf\u548c\u8fdb\u884c\u660e\u667a\u7684\u6295\u8d44.","app.labels.cto":"\u9996\u5e2d\u6280\u672f\u5b98","app.labels.aaronIs":"Aaron\u662f\u4e00\u540d\u8001\u7ec3\u7684\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u3002\u4ed6\u4e3a\u5404\u79cd\u884c\u4e1a\u5f00\u53d1\u4e86\u8f6f\u4ef6\uff0c\u5305\u62ec\u6570\u5b66\uff0c\u5927\u6570\u636e\u5206\u6790\uff0c\u7535\u4fe1\uff0c\u5236\u9020\u4e1a\u548c\u533a\u5757\u94fe\u3002\u4ed6\u76ee\u524d\u9886\u5bfc\u5de5\u7a0b\u56e2\u961f\u63d0\u4f9b\u5f3a\u5927\uff0c\u9ad8\u5ea6\u53ef\u7528\u548c\u5b89\u5168\u7684\u5168\u6808\u89e3\u51b3\u65b9\u6848.","app.labels.leadSoftwareEngineer":"\u9996\u5e2d\u8f6f\u4ef6\u5de5\u7a0b\u5e08","app.labels.vitallyIs":"\u5584\u4e8e\u5e76\u7cbe\u901aSolidity\uff0cVitally\u662f\u4e00\u6d41\u7684\u5de5\u7a0b\u5e08\uff0c\u81f4\u529b\u4e8e\u533a\u5757\u94fe\u9886\u57df\u7684\u6700\u65b0\u548c\u6700\u6709\u8da3\u7684\u89e3\u51b3\u65b9\u6848\u3002\u4ed6\u7684\u4e3b\u8981\u76ee\u6807\u662f\u4f7f\u52a0\u5bc6\u6280\u672f\u5f97\u5230\u91c7\u7528\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48Vitally\u4f5c\u4e3a\u517c\u804c\u5bfc\u5e08\u5206\u4eab\u4ed6\u7684\u77e5\u8bc6\uff0c\u5411\u6709\u5174\u8da3\u7684\u4eba\u6559\u6388\u548c\u57f9\u8badSolidity\u57fa\u7840\u77e5\u8bc6\uff0c\u5e76\u63d0\u4f9b\u6709\u5173\u5982\u4f55\u6784\u5efa\u73b0\u4ee3\u529f\u80fdDapps\u7684\u4e13\u4e1a\u6307\u5357\u7684\u539f\u56e0.","app.labels.mathematician":"\u6570\u5b66\u5bb6","app.labels.reneIs":"Rene\u662f\u6765\u81ea\u5fb7\u56fd\u4e00\u6240\u7cbe\u82f1\u5927\u5b66\uff08ExzellenzUniversit\xe4t\uff09\u5df2\u53d1\u8868\u7c92\u5b50\u7269\u7406\u5b66\u7684\u6bd5\u4e1a\u751f\u3002\u4ed6\u66fe\u4e3a\u4e16\u754c\u6700\u5927\u7684\u7814\u7a76\u673a\u6784CERN\u64b0\u5199\u8bba\u6587.","app.labels.designer":"\u8bbe\u8ba1\u5e08","app.labels.samirIs":"Samir\u662f\u4e00\u4f4d\u6765\u81ea\u585e\u5c14\u7ef4\u4e9a\u7684\u7f51\u9875\u548c\u5e94\u7528\u7a0b\u5e8fUI / UX\u8bbe\u8ba1\u5e08\u3002\u4ed6\u559c\u6b22\u4e3a\u7f51\u9875\u548c\u79fb\u52a8\u8bbe\u5907\u8bbe\u8ba1\u7b80\u5355\u6709\u6548\u4e14\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u8bbe\u8ba1.","app.labels.connectWallet":"\u8fde\u63a5\u60a8\u7684\u94b1\u5305","app.labels.usingTheWise":"\u4f7f\u7528WISE\u4eea\u8868\u677f\uff0c\u60a8\u53ef\u4ee5\u5c06\u53d7\u652f\u6301\u7684\u8d44\u4ea7\u7528\u4e8eWISE\u9884\u7559\u548cWISE\u8d28\u62bc.","app.labels.fundsCollected":"WISE(\u667a\u6167\u5e01\uff09\u9884\u7559\u6240\u6536\u96c6\u7684\u8d44\u91d1\u7531Uniswap\u534f\u8bae\u7ba1\u7406\uff0c\u5e76\u7528\u4e8e\u5f62\u6210\u672a\u6765\u4ea4\u6613\u7684\u521d\u59cb\u6d41\u52a8\u8d44\u91d1\u6c60.","app.labels.decentralizedFinance":"\u5206\u6563\u5f0f\u91d1\u878d","app.labels.wiseFoundation":"Wise(\u667a\u6167\u5e01\uff09\u57fa\u91d1\u4f1a","app.labels.providingGlobal":"\u5f53\u4e0b\u91d1\u878d\u7cfb\u7edf\u7684\u66ff\u4ee3\u65b9\u6848.","app.labels.subscribe":"\u8ba2\u9605","app.labels.technologyUsed":"\u4f7f\u7528\u7684\u6280\u672f","app.labels.uniswapProtocol":"Uniswap\u534f\u8bae","app.labels.supportTeam":"\u652f\u6301\u56e2\u961f","app.labels.reportAnIssue":"\u62a5\u544a\u95ee\u9898","app.labels.requestFeature":"\u7533\u8bf7\u65b0\u529f\u80fd","app.labels.gitter":"Gitter","app.labels.emailUs":"\u7ed9\u6211\u4eec\u53d1\u9001\u7535\u5b50\u90ae\u4ef6","app.labels.usefulLinks":"\u6709\u7528\u7684\u94fe\u63a5","app.labels.whitePaper":"\u767d\u76ae\u4e66","app.labels.contractAudit":"\u5408\u540c\u5ba1\u6838","app.labels.newsletter":"\u901a\u8baf","app.labels.marketingImages":"\u5e02\u573a\u8425\u9500\u56fe\u50cf","app.labels.merchandise":"\u5546\u54c1","app.labels.wiseWill":"WISE\u5c06\u652f\u4ed8\u60a810\uff05\u7684\u4f63\u91d1!","app.labels.mustRefer":"\u63a8\u8350\u6295\u8d44\u989d\u5fc5\u987b\u8fbe50ETH\u6216\u66f4\u591a.","app.labels.whyShould":"\u4e3a\u4f55\u60a8\u7684\u670b\u53cb\u5e94\u8be5\u4f7f\u7528\u60a8\u7684\u94fe\u63a5\uff1f\u6240\u6709\u4f7f\u7528\u63a8\u8350\u94fe\u63a5\u7684\u7528\u6237\u5728\u9884\u7559WISE(\u667a\u6167\u5e01\uff09\u65f6\u4f1a\u5f97\u523010\uff05\u7684ETH\u5956\u52b1\uff0c\u800c\u5728\u8fdb\u884c\u8d28\u62bc\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u989d\u591610\uff05\u7684\u4efd\u989d.","app.labels.referralSystem":"\u63a8\u8350\u7cfb\u7edf","app.labels.theWiseContract":"\u7528\u6237\u9884\u7559Wise(\u667a\u6167\u5e01\uff09\u65f6\uff0c\u5408\u7ea6\u7684\u4e00\u7ea7\u63a8\u8350\u7cfb\u7edf\u4f1a\u7ed9\u4e88\u63a8\u8350\u4eba\u548c\u9080\u8bf7\u8005\u5956\u52b1.","app.labels.rewardsThat":"\u4ee5WISE(\u667a\u6167\u5e01\uff09\u652f\u4ed8\u7684\u5956\u52b1\uff0c\u53d6\u51b3\u4e8e\u901a\u8fc7\u60a8\u63a8\u8350\u94fe\u63a5\u6ce8\u5165WISE\u53ea\u80fd\u5408\u7ea6\u7684ETH\u6570\u91cf\uff1a","app.labels.wiseTokenReservations":"WISE(\u667a\u6167\u5e01\uff09\u9884\u7559","app.labels.theLaunchOf":"WISE(\u667a\u6167\u5e01\uff09\u7684\u5408\u7ea6\u542f\u52a8\u7684\u524d50\u5929\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8d21\u732eETH\u521b\u5efa\u6d41\u52a8\u6027\u6c60\u6765\u9884\u7559\u4ee3\u5e01.","app.labels.readDocumentation":"\u9605\u8bfb\u6587\u6863","app.labels.filterResults":"\u7b5b\u9009\u7ed3\u679c","app.labels.filter":"\u7b5b\u9009","app.labels.fixed":"\u5b9a\u989d","app.labels.supplyDays":"\u4f9b\u5e94\u5929\u6570","app.labels.random":"\u968f\u673a","app.lables.sortReservationDays":"\u6392\u5e8f\u9884\u8ba2\u5929\u6570","app.labels.contribution":"\u8d21\u732e","app.labels.reservationDate":"\u9884\u7559\u65e5\u671f","app.labels.fixedSupplyDays":"\u5b9a\u989d\u4f9b\u5e94\u5929\u6570","app.labels.allReservationDays":"\u6240\u6709\u9884\u7559\u65e5\u671f","app.labels.randomSupplyDays":"\u968f\u673a\u4f9b\u5e94\u5929\u6570","app.labels.fixedSupply":"\u5b9a\u989d\u4f9b\u5e94","app.labels.randomSupply":"\u968f\u673a\u4f9b\u5e94","app.labels.totalUsers":"\u603b\u7528\u6237","app.labels.totalEther":"\u4ee5\u592a\u603b\u989d","app.labels.yourShare":"\u60a8\u7684\u4efd\u989d","app.labels.yourContribution":"\u60a8\u7684\u8d21\u732e","app.labels.confirmReservation":"\u786e\u8ba4\u9884\u7559","app.labels.workIn":"\u6b63\u5728\u5f00\u53d1\u4e2d","app.labels.wiseIsStill":"WISE\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u540c\u65f6\u6b63\u5728\u4ee5\u592a\u574a\u533a\u5757\u94fe\uff08Ropsten\u6d4b\u8bd5\u7f51\uff09\u4e0a\u8fdb\u884c\u6d4b\u8bd5-\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7Etherscan.io\u4e0eWISE\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92","app.labels.readContract":"\u9605\u8bfb\u5408\u7ea6","app.labels.viewCode":"\u67e5\u770b\u4ee3\u7801","app.labels.writeContract":"\u5199\u5408\u7ea6","app.labels.stackingDemoComing":"\u5373\u5c06\u63a8\u51fa\u8d28\u62bc\u6f14\u793a","app.labels.wiseStaking":"Wise(\u667a\u6167\u5e01\uff09\u8d28\u62bc","app.labels.stakedWise":"\u5df2\u8d28\u62bc\u7684WISE(\u667a\u6167\u5e01\uff09\u4f1a\u4ea7\u751f\u5229\u606f.","app.labels.stakingAmount":"\u8d28\u62bc\u6570\u989d","app.labels.stakingDuration":"\u8d28\u62bc\u65f6\u671f","app.labels.referralAddress":"\u9080\u8bf7\u5730\u5740","app.labels.wiseIntro":"Wise(\u667a\u6167\u5e01\uff09\u4ecb\u7ecd","app.labels.learnMore":"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e(\u667a\u6167\u5e01\uff09\u7684\u8be6\u60c5","app.labels.reservations":"\u9884\u7559","app.labels.dashboard":"\u4eea\u8868\u677f","app.labels.hub":"\u4e2d\u5fc3","app.labels.referrals":"\u9080\u8bf7\u4eba","app.labels.docs":"\u6587\u6863","app.labels.connectWithMetamask":"\u4e0eMetamask\u94fe\u63a5","app.labels.metamaskRequired":"\u9700\u8981\u6709MetaMask","app.labels.thisWillAllow":"\u8fd9\u5c06\u5141\u8bb8\u60a8\u4e0e\u533a\u5757\u94fe\u8fdb\u884c\u4ea4\u4e92","app.labels.installMetamask":"\u5b89\u88c5MetaMask","app.labels.otherWallet":"\u77ed\u671f\u5185\u4f1a\u652f\u6301\u66f4\u591a\u7684\u94b1\u5305","app.labels.navigationMenu":"\u5bfc\u822a\u83dc\u5355","app.labels.overview":"\u6982\u89c8","app.labels.tokenReservations":"\u4ee3\u5e01\u9884\u7559","app.labels.switchToRopsten":"\u66f4\u6362\u53bbROPSTEN","app.labels.selfReferralDetected":"\u53d1\u73b0\u7528\u6237\u4f7f\u7528\u81ea\u5df1\u7684\u9080\u8bf7\u94fe\u63a5","app.labels.youOnlyHave":"\u60a8\u53ea\u6709","app.labels.minimum":"\u6700\u4f4e","app.labels.reserveAgain":"\u518d\u6b21\u9884\u7559","app.labels.approve":"\u6279\u51c6","app.labels.confirmTransaction":"\u786e\u8ba4\u4ea4\u6613","app.labels.approving":"\u6279\u51c6\u4e2d","app.labels.reserving":"\u9884\u7559\u4e2d","app.labels.selectDays":"\u9009\u62e9\u5929\u6570","app.labels.simplifiedReservation":"\u5efa\u8bae\u7684\u9884\u7559\u64cd\u4f5c","app.labels.allEntries":"\u6240\u6709\u6761\u76ee","app.labels.viewTransaction":"\u67e5\u770b\u4ea4\u6613","app.labels.useTeamReferral":"\u4f7f\u7528\u5b98\u65b9\u7684\u9080\u8bf7\u94fe\u63a5","app.labels.yourReferralLink":"\u60a8\u7684\u9080\u8bf7\u94fe\u63a5","app.labels.wiseReservationMade":"\u901a\u8fc7\u6b64\u94fe\u63a5\u8fdb\u884c\u9884\u7559\u548c\u8d28\u62bc\u7684WISE\uff08\u667a\u6167\u5e01\uff09\uff0c\u9080\u8bf7\u4eba\u548c\u9080\u8bf7\u8005\u90fd\u4f1a\u5404\u5f97\u989d\u5916\u5956\u52b1.","app.labels.copyLink":"\u590d\u5236\u94fe\u63a5","app.labels.copied":"\u5df2\u590d\u5236","app.labels.selected":"\u9009\u62e9","app.labels.reserveWiseTokens":"\u9884\u7559Wise\uff08\u667a\u6167\u5e01\uff09","app.labels.createReferralLink":"\u521b\u5efa\u9080\u8bf7\u94fe\u63a5","app.labels.stakeWiseTokens":"\u8d28\u62bcWISE(\u667a\u6167\u5e01\uff09","app.labels.wrongNetwork":"\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u5207\u6362\u5230\u4e3b\u7f51","app.labels.reservation":"\u9884\u7559","app.labels.addNewReservation":"\u6dfb\u52a0\u65b0\u7684\u9884\u7559","app.labels.wiseActions":"Wise(\u667a\u6167\u5e01\uff09\u884c\u52a8","app.labels.wiseServices":"Wise(\u667a\u6167\u5e01\uff09\u670d\u52a1","app.labels.wiseReports":"Wise(\u667a\u6167\u5e01\uff09\u62a5\u544a","app.labels.others":"\u5176\u4ed6","app.labels.wiseStats":"Wise(\u667a\u6167\u5e01\uff09\u6570\u636e","app.labels.viewDetails":"\u67e5\u770b\u7ec6\u8282","app.labels.extremeSupply":"\u6781\u7aef\u4f9b\u5e94","app.labels.reservationDay":"\u9884\u7559\u5929\u6570","app.labels.wonderfulSerenity":"\u5947\u5999\u7684\u5b81\u9759","app.labels.documentation":"\u6587\u6863\u8d44\u6599","app.labels.wiseToken":"WISE(\u667a\u6167\u5e01\uff09","app.labels.stakeWiseToEarnMoreEth":"\u4ee5\u6700\u806a\u660e\u7684\u65b9\u6cd5\u8d5a\u53d6\u52a0\u5bc6\u8d27\u5e01\u7684\u9014\u5f84","app.labels.wiseIsAUniqueStakingPlatform":"$WISE\u667a\u6167\u5e01\u4ee5\u6b63\u786e\u7684\u65b9\u5f0f\u91cd\u65b0\u5b9a\u4e49DeFI\uff1a\u96f6\u56e2\u961f\u4ee3\u5e01\uff0c90\uff05\u6216\u66f4\u591a\u7684\u9884\u552e\u8d44\u91d1\u7528\u4e8eUniswap\u6d41\u52a8\u8d44\u91d1\uff0c\u5408\u7ea6\u70e7\u6bc1Uniswap LP\u4ee3\u5e01.","app.labels.ifYouAre":"\u5728\u5bfb\u6c42\u901a\u8fc7\u52a0\u5bc6\u6216\u83b7\u5229\u7684\u60a8\uff0c\u8fd9\u5c31\u662f\u60a8\u6700\u597d\u7684\u5730\u65b9.","app.labels.wiseVideo":"Wise(\u667a\u6167\u5e01\uff09\u89c6\u9891","app.labels.showReservations":"\u663e\u793a\u9884\u8ba2","app.labels.openDashboard":"\u6253\u5f00\u4eea\u8868\u677f","app.labels.transactionCompleted":"\u5b8c\u6210\u4ea4\u6613"}')
        },
        688: function(e) {
            e.exports = JSON.parse('{"app.home.intro.title":"Token da WISE","app.home.intro.subtitle":"A maneira mais inteligente de ter rendimentos com criptomoeda","app.labels.areULooking":"Se vc estiver procurando pela melhor forma de fazer render sua criptomoeda, voc\xea chegou ao lugar certo.","app.labels.wiseDashboard":"Dashboard da Wise","app.labels.tealPaper":"Contrato da Wise","app.labels.wiseOverview":"Vis\xe3o Geral da WISE","app.labels.howWiseWork":"Como a WISE funciona","app.labels.cryptoTrifectaSolved":"Trip\xe9 de Cripto solucionado","app.labels.promoteWise":"Programa de afiliados da WISE para recompensas","app.labels.reserveWise":"Reserve WISE","app.labels.wiseHas50":"A WISE tem um per\xedodo de 50 dias de lan\xe7amento para os investidores reservarem WISE. Cada dia de lan\xe7amento, cerca de 5 milh\xf5es de moedas WISE estar\xe3o dispon\xedveis, as quais ser\xe3o distribu\xeddas, de modo proporcional, de acordo com a quantidade total de Ethereum (ETH) enviada naquele dia.","app.labels.stakeWise":"Aplicar a WISE no Stake","app.labels.lookUpYourWise":"Aplique suas moedas WISE para render juros enquanto durar o stake. Quanto mais duradouro o stake, mais juros voc\xea ir\xe1 ganhar. Voc\xea poder\xe1 acessar e retirar os juros di\xe1rios sem taxas. Entretanto, se voc\xea fechar seu stake, de modo antecipado, implicar\xe1 em multa incidente sob o capital aplicado. Todas as taxas e multas ser\xe3o redistribu\xeddas entre os stakers  (investidores que aplicaram a Wise no stake).","app.labels.sellWise":"Vender WISE","app.labels.cashOut":"Saque instant\xe2neo usando o Uniswap DEX. Enquanto outros projetos ficam na depend\xeancia de de usu\xe1rios para construir lentamente um mercado para seus tokens de moeda, a pr\xf3pria natureza do contrato da WISE inclui a cria\xe7\xe3o instant\xe2nea de uma grande piscina (pool) de liquidez no Uniswap, onde voc\xea pode realizar a troca da moeda digital, mesmo de dentro da sua pr\xf3pria carteira digital sem mesmo precisar usar chave de seguran\xe7a como KYC.","app.labels.security":"Seguran\xe7a","app.labels.wiseIsMade":"A WISE \xe9 feita de contratos inteligentes imut\xe1veis com selo de certifica\xe7\xe3o aprovado por empresas de auditoria contra erros e brechas. Os investidores podem ficar descansados, entendendo que o contrato cumprir\xe1 o prop\xf3sito para o fim que foi criado e n\xe3o poder\xe1 vir a ser modificado. Al\xe9m disso, todas as transa\xe7\xf5es, incluindo a aplica\xe7\xe3o da Wise no stake ser\xe3o executadas com a seguran\xe7a da pr\xf3pria carteira digital particular.","app.labels.decentralization":"Descentralizado","app.labels.wiseIsNone":"A WISE \xe9 um projeto sem fins lucrativos. Cerca de 90% ou mais de todo o dinheiro capitalizado, durante o lan\xe7amento da moeda, ser\xe1 enviado ao Uniswap para formar uma grande piscina de liquidez para que opera\xe7\xf5es de trade sejam poss\xedveis. Tudo isso \xe9 feito atrav\xe9s do software do contrato da WISE, sem haver qualquer interfer\xeancia humana, intermedi\xe1rios ou controladores centrais. Ap\xf3s o lan\xe7amento, mesmo os fundadores da WISE est\xe3ro em igualdade de condi\xe7\xf5es com todos os investidores.","app.labels.scalability":"Resgate","app.labels.wiseHasAll":"A WISE tem todos os benef\xedcios do protocolo ERC20, inclusive \xe9 poss\xedvel a escalabilidade ou resgate maci\xe7o. Uma vez que os investidores pagam taxas justas de g\xe1s do seu pr\xf3prio bolso, cada vez que interagem com o contrato, a WISE tem potencial de crescimento, virtualmente ilimitado, enquanto custa apenas alguns centavos a cada transa\xe7\xe3o.","app.labels.referralLinks":"Links de Afiliados","app.labels.useReferralLink":"Use um link de afiliados para ganhar 10% de bonus em ETH ao reservar a WISE, al\xe9m de ganhar 10% a mais quando aplicar a Wise no stake. Participe do programa de afiliados para obter um pequeno b\xf4nus se o investidor afiliado reservar 1 ETH. Comiss\xf5es maiores ser\xe3o apenas pagas para o afiliado cujo investidor reservar mais de 50 ETH.","app.labels.launchPhase":"Fase de Lan\xe7amento","app.labels.allPromoters":"Todos os afiliados que referirem quantia maior ou igual a 50 ETH, durante o lan\xe7amento, receber\xe3o uma comiss\xe3o de 10% pagas na forma de tokens de WISE. O programa de afiliado \xe9 diretos, em n\xedvel 1, sem aspectos em v\xe1rios n\xedveis. As comiss\xf5es ficar\xe3o dispon\xedveis, imediatamente ap\xf3s o lan\xe7amento e poder\xe3o ser aplicadas no stake, instantaneamente, ou trocadas por ETH no Uniswap.","app.labels.stakingReferrals":"Afiliados de Staking","app.labels.afterLaunch":"Ap\xf3s o lan\xe7amento, os afiliados poder\xe3o continuar a promover a WISE para obter renda adicional, cada vez que WISE for aplicada no stake, desde que usem o mesmo link de afiliado do programa de associados. Essa renda \xe9 para recompensar os afiliados de forma semelhante \xe0 como os investidores stakers (aqueles que aplicam a WISE no stake) ganham juros. Portanto, h\xe1 o rendimento de de juros para para ambas as partes (stakers e afiliados) quando o stake terminar.","app.labels.wisePurpose":"Prop\xf3sito da WISE","app.labels.corePurpose":"O objetivo central do projeto WISE","app.labels.stakingToken":"token do stake","app.labels.rewardingTheHolder":"recompensar o titular com juros ganhos em troca do bloqueio dos fundos para ser aplicado por um per\xedodo de tempo pr\xe9-determinado.","app.labels.wiseGives":"A WISE proporciona ao staker (investidor aplicador da WISE no stake) a flexibilidade completa para escolher exatamente quando retirar os seus juros enquanto durar o stake. Voc\xea pode resgatar seu ganho em juros diariamente, de modo irregular, poder\xe1 sacar ao final da maturidade do stake ou da forma que desejar!","app.labels.wiseStakes":"O stake, que \xe9 a aplica\xe7\xe3o na poupan\xe7a digital da WISE, apresenta alto retorno financeiro, menor exposi\xe7\xe3o de risco (devido \xe0 natureza descentralizada e por ter funcionamento inconfi\xe1vel a humanos), al\xe9m de maior flexibilidade do que t\xedtulos p\xfablicos ou CDBs (Certificado de Dep\xf3sito Banc\xe1rios). Chega de confiar em bancos e no governo para ter seguran\xe7a financeira de retorno financeiro sem que haja mudan\xe7a inesperada de regras. N\xe3o se preocupe mais que um emissor de t\xedtulos financeiros possa ir \xe0 fal\xeancia e ficar inadimplente com voc\xea","app.labels.wiseIsPure":"WISE \xe9 c\xf3digo puro e imut\xe1vel.","app.labels.wiseSmartContracts":"Contratos inteligentes da WISE","app.labels.theWiseProject":"O projeto WISE consiste na promo\xe7\xe3o de contratos inteligentes que capitalizam a forma\xe7\xe3o de liquidez no token da WISE, um sistema de afiliados e capacidade de stake do token que s\xe3o explicados na","app.labels.documentationSection":"se\xe7\xe3o de documenta\xe7\xe3o","app.labels.theOverallFlow":"O fluxo geral do projeto WISE pode ser descrito em ","app.labels.twoMain":"duas \xe9pocas principais","app.labels.inEach":"cada um desenvolvido como um contrato inteligente para fins financeiros espec\xedficos.","app.labels.liquidityTransformerEpoch":"\xc9poca do Transformador de Liquidez","app.labels.theLaunchOfTheWise":"O lan\xe7amento do contrato WISE dar\xe1 in\xedcio a uma fase inicial de 50 dias, durante a qual os usu\xe1rios podem enviar ETH para o contrato a fim de reservar os tokens da WISE e formar a piscina (pool) de liquidez principal.","app.labels.circulationEpoch":"Circulation Epoch","app.labels.atThisPoint":"Nesse ponto, nenhuma outra reserva de token poder\xe1 ser feita. O WISE reservado e o b\xf4nus de afiliado da WISE agora podem ser resgatados pelos usu\xe1rios, quando quiser. Os usu\xe1rios podem come\xe7ar a aplicar a WISE no stake.","app.labels.quickWiseReservation":"WISE - Reserva r\xe1pida","app.labels.liquidityTransformer":"Transformador de Liquidez","app.labels.thisComponent":"Este componente do projeto WISE n\xe3o tem interfer\xeancia humana e gera uma piscina de liquidez principal para a WISE, usando o protocolo do Uniswap. Os tokens WISE poder\xe3o ser resgatados pelos afiliados que fizeram reservas da WISE em ETH. Assim sendo, haver\xe1 um pareamento do ETH com mais WISE que ser\xe1 enviada ao Uniswap. Essa piscina de dinheiro forma uma liquidez financeira, momentaneamente sem propriet\xe1rio, que respalda e garante o valor de todos os tokens da WISE e permite que qualquer pessoa compre ou venda grandes quantidades de WISE quando quiser.","app.labels.checkSmartContract":"Checar Contrato Inteligente","app.labels.uniswap":"Uniswap","app.labels.useDefi":"Usar Tokens DeFi para Reservar WISE","app.labels.theWiseLiquidityTransformer":"O Transformador de Liquidez WISE ser\xe1 capaz de aceitar v\xe1rios tokens e convert\xea-los atrav\xe9s do Uniswap em ETH para fazer as reservas de WISE.","app.labels.uniswapSupport":"Suporte ao Uniswap","app.labels.visitUniswap":"\ud83e\udd84 visite o uniswap.org para saber mais","app.labels.basicAttentionToken":"Token de Aten\xe7\xe3o B\xe1sica","app.labels.makerDAOToken":"Criar Token DAO","app.labels.daiStableCoin":"Moeda Est\xe1vel DAI","app.labels.oxToken":"0x Token","app.labels.loopringToken":"Token da Loopring","app.labels.kyberNetworkToken":"Token da rede Kyber","app.labels.provableOracleAPI":"API da Oracle Demonstr\xe1vel","app.labels.theAmountOf":"A quantidade de tokens WISE dispon\xedveis, a serem fornecidos nos dias aleat\xf3rios, ir\xe1 ser determinada logo ap\xf3s o final de cada dia aleat\xf3rio. A WISE aproveita a API da Oracle Demonstr\xe1vel, que gerar\xe1 a aleatoriedade a ser entregue na cadeia criptogr\xe1fica de maneira demonstr\xe1vel e comprovadamente segura. Em dias de fornecimento aleat\xf3rios, mesmo os desenvolvedores do WISE n\xe3o saber\xe3o a quantidade da oferta de tokens at\xe9 o final daquele dia.","app.labels.provableOracle":"Oracle Demonstr\xe1vel","app.labels.earnCommissions":"Ganhe comiss\xf5es promovendo a WISE!","app.labels.theWiseContractHas":"O contrato WISE tem um sistema de indica\xe7\xe3o direto de um n\xedvel que recompensa tanto o afiliado (emissor do link de rastreamento por cookie) quanto o investidor  reserva os tokens da WISE.","app.labels.meetWiseTeam":"Conhe\xe7a o Time da WISE","app.labels.weAreATeam":"Somos uma equipe de abrang\xeangia global com o objetivo m\xfatuo de desenvolver e lan\xe7ar a WISE para o benef\xedcio de todos.","app.labels.founder":"Fundador","app.labels.peterIsReal":"Peter \xe9 um empres\xe1rio imobili\xe1rio e militar da Guarda Nacional do Ex\xe9rcito. A exist\xeancia de v\xe1rios projetos de criptografia ruins o levou a usar sua perspic\xe1cia para os neg\xf3cios e treinamento militar como oficial de intelig\xeancia para projetar um sistema superior. Com a base localizada em Los Angeles, Peter est\xe1 em uma miss\xe3o de ensinar a cada usu\xe1rio de criptomoeda como avaliar sistemas e investir com sabedoria.","app.labels.cto":"Diretor de Tecnologia","app.labels.aaronIs":"Aaron \xe9 um engenheiro de software de longa data, tendo iniciado no Commodore 64 e TRS-80. Ele desenvolveu software para uma ampla gama de ind\xfastrias, incluindo matem\xe1tica, an\xe1lise de grandes dados, telecomunica\xe7\xf5es, manufatura e blockchain. Atualmente, ele lidera equipes de engenharia para fornecer solu\xe7\xf5es full-stack robustas, altamente dispon\xedveis e seguras.","app.labels.leadSoftwareEngineer":"Engenheiro L\xedder de software","app.labels.vitallyIs":"Vivendo e respirando a linguagem de programa\xe7\xe3o Solidity, Vitally \xe9 um engenheiro de primeira classe com foco nas solu\xe7\xf5es mais recentes e interessantes no espa\xe7o da blockchain. Seu principal objetivo \xe9 levar a ado\xe7\xe3o da criptomoeda, e \xe9 por isso que Vitally compartilha seus conhecimentos como tutor em meio per\xedodo, ensinando e treinando no\xe7\xf5es b\xe1sicas do Solidity para todos os interessados \u200b\u200be fornecendo guias profissionais sobre como construir Dapps modernos e funcionais.","app.labels.mathematician":"Matem\xe1tico","app.labels.reneIs":"Rene \xe9 graduado em f\xedsica de part\xedculas por uma universidade de elite na Alemanha (Exzellenz Universit\xe4t). Ele escreveu sua tese para o CERN, o maior centro de pesquisa do mundo. Ele se tornou um profissional de p\xf4quer em 2016.","app.labels.designer":"Designer","app.labels.samirIs":"Samir \xe9 um designer de UI / UX para web e aplicativos, com uma mente criativa da S\xe9rvia. Ele gosta de fazer um design centrado no usu\xe1rio simples e eficiente para dispositivos m\xf3veis e da web. Seu foco est\xe1 sempre no p\xfablico-alvo, na prototipagem, na defini\xe7\xe3o do fluxo do usu\xe1rio e na cria\xe7\xe3o de produtos visualmente bonitos e amig\xe1veis.","app.labels.connectWallet":"Conectar sua carteira","app.labels.usingTheWise":"Usando a dashboard WISE, voc\xea pode usar ativos suportados para reservas WISE e aplicar a WISE no stake.","app.labels.fundsCollected":"Os fundos coletados pelas reservas da WISE s\xe3o gerenciados pelo protocolo Uniswap e usados \u200b\u200bpara formar a piscina de de liquidez financeira inicial para negocia\xe7\xe3o futura.","app.labels.decentralizedFinance":"Finan\xe7a Descentralizada","app.labels.wiseFoundation":"Funda\xe7\xe3o Wise","app.labels.providingGlobal":"Fornecendo uma alternativa global e aberta para o sistema financeiro que voc\xea usa hoje.","app.labels.subscribe":"Inscreva-se","app.labels.technologyUsed":"Tecnologia Usada","app.labels.uniswapProtocol":"Protocolo Uniswap","app.labels.supportTeam":"Time de Suporte","app.labels.reportAnIssue":"Relatar um Problema","app.labels.requestFeature":"Solicite uma Nova Ideia","app.labels.gitter":"Gitter","app.labels.emailUs":"Email","app.labels.usefulLinks":"Links \xdateis","app.labels.whitePaper":"Contrato da Wise","app.labels.contractAudit":"Auditoria do Contrato","app.labels.newsletter":"Newsletter","app.labels.marketingImages":"Imagens de Marketing","app.labels.merchandise":"Mercadoria","app.labels.wiseWill":"WISE paga 10% de comiss\xf5es!","app.labels.mustRefer":"Deve indicar 50 ETH ou mais (EX: indicar 100 ETH recebe 10 ETH). N\xe3o tem rede de influ\xeancia? Indique pelo menos 1 ETH no total e o contrato o recompensar\xe1 uma vez com 0,05 ETH.","app.labels.whyShould":"Por que as pessoas deveriam usar o seu link? Todos os links de refer\xeancia d\xe3o aos usu\xe1rios 10% de b\xf4nus ETH ao reservar o WISE e garantem 10% a mais de a\xe7\xf5es quando a WISE for aplicada no stake.","app.labels.referralSystem":"Programa de Afiliados","app.labels.theWiseContract":"O contrato WISE tem um sistema de indica\xe7\xe3o direta de um n\xedvel que recompensa tanto recompensa tanto o afiliado (emissor do link de rastreamento por cookie) quanto o investidor  reserva os tokens da WISE.","app.labels.rewardsThat":"As recompensas que s\xe3o pagas no WISE s\xe3o baseadas em quanto ETH total seu link de refer\xeancia trouxe para o contrato inteligente do transformador de liquidez WISE:","app.labels.wiseTokenReservations":"Reserva de Tokens da WISE","app.labels.theLaunchOf":"O lan\xe7amento do contrato da WISE dar\xe1 in\xedcio a uma fase inicial contendo 50 dias, durante a qual os usu\xe1rios poder\xe3o reservar os tokens da WISE, criando um pool de liquidez financeira a partir das compras da moeda em ETH.","app.labels.readDocumentation":"Ler a Documenta\xe7\xe3o","app.labels.filterResults":"Resultados dos Filtros","app.labels.filter":"Filtros","app.labels.fixed":"Fixos","app.labels.supplyDays":"Oferta de dias","app.labels.random":"Rand\xf4micos","app.lables.sortReservationDays":"Classificar Dias de Reserva","app.labels.contribution":"Contribui\xe7\xe3o","app.labels.reservationDate":"Data de Reserva","app.labels.fixedSupplyDays":"Dias de Oferta Fixa","app.labels.allReservationDays":"Todos os dias de reserva","app.labels.randomSupplyDays":"Dias de Oferta Aleat\xf3ria","app.labels.fixedSupply":"Oferta Fixa","app.labels.randomSupply":"Oferta Rand\xf4mica","app.labels.totalUsers":"total de usu\xe1rios","app.labels.totalEther":"total de Ethereum","app.labels.yourShare":"Sua Parte","app.labels.yourContribution":"Sua Contribui\xe7\xe3o","app.labels.confirmReservation":"Confirme a Reserva","app.labels.workIn":"Trabalho em constru\xe7\xe3o","app.labels.wiseIsStill":"A WISE ainda est\xe1 em desenvolvimento, enquanto os testes est\xe3o sendo feitos no blockchain Ethereum (Ropsten testnet) - sinta-se \xe0 vontade para interagir com os contratos WISE diretamente atrav\xe9s do Etherscan.io","app.labels.readContract":"Leia o Contrato","app.labels.viewCode":"Ver C\xf3digo","app.labels.writeContract":"Escrever no Contrato","app.labels.stackingDemoComing":"Demonstra\xe7\xe3o de staking em breve","app.labels.wiseStaking":"Aplicar Wise no Stake","app.labels.stakedWise":"Tokens da WISE aplicados no stake rendem juros.","app.labels.stakingAmount":"Quandidade no Stake","app.labels.stakingDuration":"Dura\xe7\xe3o do Stake","app.labels.referralAddress":"Link de Afiliado","app.labels.wiseIntro":"Introdu\xe7\xe3o da Wise","app.labels.learnMore":"Aprenda mais sobre a WISE","app.labels.reservations":"Reservas","app.labels.dashboard":"Dashboard","app.labels.hub":"Hub","app.labels.referrals":"Afiliados","app.labels.docs":"Docs","app.labels.connectWithMetamask":"Conectar Metamask","app.labels.metamaskRequired":"MetaMask necess\xe1ria","app.labels.thisWillAllow":"Isso permitir\xe1 que voc\xea interaja com o blockchain","app.labels.installMetamask":"Instalar MetaMask","app.labels.otherWallet":"Outros provedores de carteira em breve","app.labels.navigationMenu":"Menu de Navega\xe7\xe3o","app.labels.overview":"Vis\xe3o Geral","app.labels.tokenReservations":"Reservas de Tokens","app.labels.switchToRopsten":"MUDAR PARA ROPSTEN","app.labels.selfReferralDetected":"AUTO REFER\xcaNCIA DETECTADA","app.labels.youOnlyHave":"Voc\xea s\xf3 tem","app.labels.minimum":"M\xednimo","app.labels.reserveAgain":"RESERVAR DE NOVO","app.labels.approve":"APROVAR","app.labels.confirmTransaction":"CONFIRMAR TRANSA\xc7\xc3O","app.labels.approving":"APROVANDO...","app.labels.reserving":"RESERVANDO...","app.labels.selectDays":"selecionar dias(s)","app.labels.simplifiedReservation":"Processo de Reserva Simplificado","app.labels.allEntries":"Todas as Entradas","app.labels.viewTransaction":"Visualizar Transa\xe7\xf5es","app.labels.useTeamReferral":"Usar Link do Time","app.labels.yourReferralLink":"Seu Link de afiliado","app.labels.wiseReservationMade":"As reservas WISE feitas por meio deste link podem gerar b\xf4nus WISE para ambas as partes, e os stakes abertos por meio deste link podem gerar interesse adicional para ambas as partes.","app.labels.copyLink":"Copiar Link","app.labels.copied":"Copiado","app.labels.selected":"Selecionado","app.labels.reserveWiseTokens":"Reservar Tokens da Wise","app.labels.createReferralLink":"Criar Link de Afiliado","app.labels.stakeWiseTokens":"Aplicar Tokens da WISE no Stake","app.labels.wrongNetwork":"Rede errada, favor trocar para Mainnet","app.labels.reservation":"Reserva","app.labels.addNewReservation":"Adicionar nova reserva","app.labels.wiseActions":"A\xe7\xf5es da Wise","app.labels.wiseServices":"Servi\xe7os da Wise","app.labels.wiseReports":"Relat\xf3rios da Wise","app.labels.others":"Outros","app.labels.wiseStats":"Estat\xedstica da Wise","app.labels.viewDetails":"Ver detalhes","app.labels.extremeSupply":"Oferta Extrema","app.labels.reservationDay":"Dia de Reserva","app.labels.wonderfulSerenity":"Maravilhosa serenidade tem posse","app.labels.documentation":"Documenta\xe7\xe3o","app.labels.wiseToken":"Token da WISE","app.labels.stakeWiseToEarnMoreEth":"A maneira inteligente de fazer render Crypto","app.labels.wiseIsAUniqueStakingPlatform":"$WISE est\xe1 redefinindo o DeFI fazendo cripto do jeito certo: o time da Wise n\xe3o guarda tokens da Wise, 90% ou mais do dinheiro arrecadado no pr\xe9-venda vai para a liquidez do Uniswap, o Contrato QUEIMA os tokens LP no Uniswap, n\xe3o h\xe1 chaves de Admin.","app.labels.ifYouAre":"Se voc\xea est\xe1 procurando a melhor forma de fazer render criptomoeda, voc\xea chegou ao lugar certo.","app.labels.wiseVideo":"V\xeddeo da Wise","app.labels.showReservations":"Mostrar Reservas","app.labels.openDashboard":"Abrir Dashboard","app.labels.transactionCompleted":"Transa\xe7\xe3o Completa"}')
        },
        689: function(e, a, t) {},
        690: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                s = t.n(n),
                r = t(28),
                l = t.n(r),
                i = t(6),
                o = t(7),
                p = t(11),
                c = t(12),
                m = t(26),
                d = t(98),
                u = t(346),
                b = t(743),
                y = t(66),
                f = t(17);
            var E = t(246),
                g = t(188),
                h = t(146),
                v = {
                    showConfetti: !1,
                    refetchAfterReservation: !1,
                    lang: "en"
                },
                w = Object(g.a)((function(e, a) {
                    switch (a.type) {
                        case h.d:
                            e.showConfetti = !0;
                            break;
                        case h.c:
                            e.showConfetti = !1;
                            break;
                        case h.a:
                            e.refetchAfterReservation = !e.refetchAfterReservation;
                            break;
                        case h.b:
                            e.lang = a.payload.lang
                    }
                }), v),
                T = Object(d.c)({
                    app: w,
                    SchemeOptions: y.a,
                    WiseOptions: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                userWalletAddress: null
                            },
                            a = arguments.length > 1 ? arguments[1] : void 0;
                        switch (a.type) {
                            case "WISE_OPTIONS/SET_USER_WALLET_ADDRESS":
                                return Object(f.a)(Object(f.a)({}, e), {}, {
                                    userWalletAddress: a.userWalletAddress
                                })
                        }
                        return e
                    },
                    reservation: E.a
                }),
                S = function(e, a) {
                    return T(e, a)
                };
            var k = t(35),
                N = t(99),
                x = t(370),
                O = t(737),
                I = t(9),
                W = t(100),
                M = Object(k.b)((function(e) {
                    return {
                        contentBackground: e.SchemeOptions.contentBackground,
                        sidebarToggleMobile: e.SchemeOptions.sidebarToggleMobile,
                        headerDrawerToggle: e.SchemeOptions.headerDrawerToggle,
                        headerSearchHover: e.SchemeOptions.headerSearchHover,
                        darkMode: e.SchemeOptions.darkMode
                    }
                }))((function(e) {
                    var a = e.children,
                        t = e.contentBackground,
                        n = e.sidebarToggleMobile,
                        r = e.headerDrawerToggle,
                        l = e.headerSearchHover,
                        i = e.darkMode;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                        className: Object(I.a)("app-wrapper app-sidebar-collapsed app-sidebar-fixed app-header-fixed vh-100", t, {
                            "dark-mode": i,
                            "app-sidebar-mobile-open": n,
                            "header-drawer-open": r,
                            "search-wrapper-open": l
                        })
                    }, s.a.createElement(W.f, null), s.a.createElement("div", {
                        className: "app-main"
                    }, s.a.createElement(W.b, null), s.a.createElement("div", {
                        className: "app-content pt-0"
                    }, s.a.createElement("div", {
                        className: "app-inner-content-layout--main"
                    }, a)))))
                })),
                A = (Object(k.b)((function(e) {
                    return {
                        sidebarToggle: e.SchemeOptions.sidebarToggle,
                        sidebarToggleMobile: e.SchemeOptions.sidebarToggleMobile,
                        sidebarFixed: e.SchemeOptions.sidebarFixed,
                        headerFixed: e.SchemeOptions.headerFixed,
                        headerSearchHover: e.SchemeOptions.headerSearchHover,
                        headerDrawerToggle: e.SchemeOptions.headerDrawerToggle,
                        footerFixed: e.SchemeOptions.footerFixed,
                        contentBackground: e.SchemeOptions.contentBackground
                    }
                }))((function(e) {
                    var a = e.children,
                        t = e.sidebarToggle,
                        n = e.sidebarToggleMobile,
                        r = e.sidebarFixed,
                        l = e.headerFixed,
                        i = e.headerSearchHover,
                        o = e.headerDrawerToggle,
                        p = e.footerFixed,
                        c = e.contentBackground;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                        className: Object(I.a)("app-wrapper", c, {
                            "header-drawer-open": o,
                            "app-sidebar-collapsed": t,
                            "app-sidebar-mobile-open": n,
                            "app-sidebar-fixed": r,
                            "app-header-fixed": l,
                            "app-footer-fixed": p,
                            "search-wrapper-open": i
                        })
                    }, s.a.createElement("div", null, s.a.createElement(W.e, null)), s.a.createElement("div", {
                        className: "app-main"
                    }, s.a.createElement(W.b, null), s.a.createElement("div", {
                        className: "app-content"
                    }, s.a.createElement("div", {
                        className: "app-content--inner"
                    }, s.a.createElement("div", {
                        className: "app-content--inner__wrapper"
                    }, a)), s.a.createElement(W.a, null)))))
                })), t(10)),
                D = t.n(A),
                j = function(e) {
                    var a = e.children;
                    return s.a.createElement(s.a.Fragment, null, a)
                };
            j.propTypes = {
                children: D.a.node
            };
            var C = function(e) {
                var a = e.children;
                return s.a.createElement(s.a.Fragment, null, a)
            };
            C.propTypes = {
                children: D.a.node
            };
            var R = C,
                P = t(739),
                _ = t(199),
                z = t.n(_),
                H = t(369),
                F = ["none", "0 0.46875rem 2.1875rem rgba(59, 62, 102, 0.03), 0 0.9375rem 1.40625rem rgba(59, 62, 102, 0.03), 0 0.25rem 0.53125rem rgba(59, 62, 102, 0.05), 0 0.125rem 0.1875rem rgba(59, 62, 102, 0.03)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)", "0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)"],
                q = Object(H.a)({
                    palette: {
                        primary: {
                            main: "#008080",
                            contrastText: "#ffffff"
                        },
                        grey: {
                            300: "#fefefe",
                            A100: "#f8f9ff"
                        },
                        secondary: {
                            main: "#4191ff"
                        },
                        error: {
                            main: "#f83245"
                        },
                        success: {
                            main: "#1bc943"
                        },
                        info: {
                            main: "#11c5db"
                        },
                        warning: {
                            main: "#f4772e"
                        },
                        helpers: {
                            primary: "#3c44b1",
                            main: "rgba(25, 46, 91, .035)"
                        },
                        contrastThreshold: 3,
                        tonalOffset: .1
                    },
                    breakpoints: {
                        values: {
                            xs: 0,
                            sm: 576,
                            md: 768,
                            lg: 1100,
                            xl: 1381
                        }
                    },
                    shape: {
                        borderRadius: "0.2rem"
                    },
                    overrides: {
                        MuiTab: {
                            root: {
                                fontWeight: "bold"
                            }
                        },
                        MuiButton: {
                            sizeSmall: {
                                padding: "6px 20px",
                                fontSize: 14
                            },
                            outlined: {
                                padding: "10px 22px",
                                fontSize: 14
                            },
                            text: {
                                padding: "10px 22px",
                                fontSize: 14
                            },
                            sizeLarge: {
                                padding: "16px 28px",
                                fontSize: 16
                            },
                            root: {
                                textTransform: "none",
                                fontWeight: "normal",
                                padding: "10px 22px",
                                fontSize: 14,
                                "&:hover": {
                                    transform: "translateY(0) !important"
                                }
                            }
                        },
                        MuiTooltip: {
                            tooltip: {
                                backgroundColor: "#070919",
                                padding: "8px 16px",
                                fontSize: "13px"
                            },
                            arrow: {
                                color: "#070919"
                            }
                        }
                    },
                    typography: {
                        fontFamily: ["Heebo", "sans-serif"].join(","),
                        htmlFontSize: 16,
                        fontSize: 14
                    },
                    shadows: F
                }),
                L = t(367),
                B = t.n(L),
                U = t(129),
                G = function(e) {
                    return e.app || v
                },
                V = t(230),
                Y = (t(95), t(142).addLocaleData, t(686)),
                K = t(687),
                X = t(688),
                J = {
                    "en-US": Y,
                    en: Y,
                    zh: K,
                    pt: X
                },
                Q = Object(U.b)({
                    showConfetti: Object(U.a)(G, (function(e) {
                        return e.showConfetti
                    }))
                }),
                $ = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(2), t.e(4), t.e(5), t.e(18)]).then(t.bind(null, 991))
                })),
                Z = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(5), t.e(6), t.e(9), t.e(23)]).then(t.bind(null, 996))
                })),
                ee = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(8), t.e(9), t.e(24)]).then(t.bind(null, 981))
                })),
                ae = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(26), t.e(9), t.e(36)]).then(t.bind(null, 994))
                })),
                te = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(19), t.e(46)]).then(t.bind(null, 995))
                })),
                ne = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(5), t.e(6), t.e(22)]).then(t.bind(null, 1002))
                })),
                se = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(2), t.e(28)]).then(t.bind(null, 1003))
                })),
                re = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(8), t.e(10), t.e(33)]).then(t.bind(null, 998))
                })),
                le = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(2), t.e(8), t.e(27)]).then(t.bind(null, 1001))
                })),
                ie = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(45)]).then(t.bind(null, 1004))
                })),
                oe = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(5), t.e(6), t.e(20)]).then(t.bind(null, 1005))
                })),
                pe = Object(n.lazy)((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(5), t.e(6), t.e(17)]).then(t.bind(null, 1006))
                })),
                ce = function() {
                    var e = Object(N.g)(),
                        a = Object(P.a)(),
                        t = a.width,
                        r = a.height,
                        l = Object(k.d)(Q).showConfetti,
                        i = Object(k.d)((function(e) {
                            return e.app
                        })).lang,
                        o = function() {
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                                className: "d-flex coin-bg flex-column vh-100 justify-content-center"
                            }, s.a.createElement("div", {
                                className: "text-muted coin-bg font-size-xl text-center"
                            }, s.a.createElement("img", {
                                className: "w-10 coin",
                                src: B.a,
                                alt: "loading assets..."
                            }))))
                        };
                    return s.a.createElement(V.b, {
                        messages: J[i],
                        locale: i,
                        defaultLocale: "en-US",
                        timeZone: "UTC"
                    }, s.a.createElement(O.a, {
                        theme: q
                    }, s.a.createElement(x.a, null, s.a.createElement(n.Suspense, {
                        fallback: s.a.createElement(o, null)
                    }, s.a.createElement(N.c, null, s.a.createElement(N.a, {
                        path: ["/dashboard", "/personal", "/personal/:address", "/reserve", "/refer", "/wise-reservations", "/wise-swaps", "/swaps", "/gas", "/wise-referrals", "/wise-staking", "/staking", "/settings"]
                    }, s.a.createElement(M, null, s.a.createElement(N.c, {
                        location: e,
                        key: e.pathname
                    }, s.a.createElement(N.a, {
                        path: "/reserve",
                        component: pe
                    }), s.a.createElement(N.a, {
                        path: "/dashboard",
                        component: ne
                    }), s.a.createElement(N.a, {
                        path: "/personal/:address",
                        component: oe
                    }), s.a.createElement(N.a, {
                        path: "/personal",
                        component: oe
                    }), s.a.createElement(N.a, {
                        path: "/gas",
                        component: ie
                    }), s.a.createElement(N.a, {
                        path: "/refer",
                        component: re
                    }), s.a.createElement(N.a, {
                        path: "/swaps",
                        component: se
                    }), s.a.createElement(N.a, {
                        path: "/wise-swaps",
                        component: te
                    }), s.a.createElement(N.a, {
                        path: "/wise-referrals",
                        component: te
                    }), s.a.createElement(N.a, {
                        path: "/wise-staking",
                        component: te
                    }), s.a.createElement(N.a, {
                        path: "/staking",
                        component: le
                    }))), l && s.a.createElement("div", {
                        className: "confetti-wrapper"
                    }, s.a.createElement(z.a, {
                        width: t,
                        height: r,
                        opacity: 1
                    }))), s.a.createElement(N.a, {
                        path: ["/docs", "/docs", "/settings"]
                    }, s.a.createElement(M, null, s.a.createElement(N.c, {
                        location: e,
                        key: e.pathname
                    }, s.a.createElement(N.a, {
                        path: "/docs",
                        component: te
                    }), s.a.createElement(N.a, {
                        path: "/docs",
                        component: te
                    }))), l && s.a.createElement("div", {
                        className: "confetti-wrapper"
                    }, s.a.createElement(z.a, {
                        width: t,
                        height: r,
                        opacity: 1
                    }))), s.a.createElement(N.a, {
                        path: ["/", "/home", "/token-reservation", "/referrals"]
                    }, s.a.createElement(R, null, s.a.createElement(N.c, {
                        location: e,
                        key: e.pathname
                    }, s.a.createElement(N.a, {
                        path: "/dapp",
                        component: ee
                    }), s.a.createElement(N.a, {
                        path: "/staking",
                        component: ee
                    }), s.a.createElement(N.a, {
                        path: "/referrals",
                        component: Z
                    }), s.a.createElement(N.a, {
                        path: "/reservations",
                        component: ee
                    }), s.a.createElement(N.a, {
                        path: "/home",
                        component: $
                    }), s.a.createElement(N.a, {
                        path: "/hub",
                        component: ae
                    }), s.a.createElement(N.a, {
                        path: "/",
                        component: $
                    }))), l && s.a.createElement("div", {
                        className: "confetti-wrapper"
                    }, s.a.createElement(z.a, {
                        width: t,
                        height: r,
                        opacity: 1
                    }))), s.a.createElement(N.a, {
                        path: "/teal",
                        onEnter: function() {
                            return window.location.reload()
                        }
                    }))))))
                },
                me = Object(N.i)((function(e) {
                    var a = e.children,
                        t = e.location.pathname;
                    return Object(n.useEffect)((function() {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    }), [t]), a || null
                })),
                de = t(111),
                ue = t(58),
                be = t(22),
                ye = t(14);
            de.b.add(be.L, be.F, be.A, be.f, be.H, be.j, be.G, be.i, be.w, be.I, be.r, be.n, be.h, be.v, be.z, be.d, be.k, be.a, be.C, be.D, be.y, be.J, be.B, be.x, be.g, be.K, be.E, be.c, be.b, be.q, be.o, be.t, be.u, be.s, be.p, be.m, be.l, be.e), de.b.add(ue.n, ue.c, ue.k, ue.l, ue.i, ue.f, ue.e, ue.g, ue.h, ue.m, ue.a, ue.j, ue.b, ue.d), de.b.add(ye.nb, ye.G, ye.c, ye.b, ye.w, ye.eb, ye.K, ye.o, ye.p, ye.z, ye.cb, ye.U, ye.O, ye.jb, ye.a, ye.H, ye.ab, ye.L, ye.hb, ye.V, ye.gb, ye.Z, ye.u, ye.ib, ye.C, ye.Q, ye.t, ye.r, ye.P, ye.s, ye.q, ye.I, ye.lb, ye.D, ye.m, ye.R, ye.W, ye.mb, ye.n, ye.F, ye.X, ye.db, ye.v, ye.A, ye.S, ye.M, ye.y, ye.kb, ye.x, ye.J, ye.Y, ye.E, ye.B, ye.l, ye.T, ye.f, ye.g, ye.e, ye.d, ye.k, ye.h, ye.j, ye.i, ye.fb, ye.bb, ye.N);
            var fe = t(249),
                Ee = (t(689), t(42)),
                ge = t(145),
                he = t(63),
                ve = Object(he.a)();

            function we(e) {
                var a = new ge.a(e, "any");
                return a.pollingInterval = 12e3, a
            }
            Object(fe.b)();
            var Te = function(e) {
                    var a = d.d,
                        t = [u.a, Object(b.a)(e)],
                        n = d.a.apply(void 0, t),
                        s = Object(d.e)(S, a(n));
                    return s.injectedReducers = {}, s
                }(ve),
                Se = function(e) {
                    Object(p.a)(t, e);
                    var a = Object(c.a)(t);

                    function t() {
                        return Object(i.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(Ee.a, {
                                getLibrary: we
                            }, s.a.createElement(k.a, {
                                store: Te
                            }, s.a.createElement(m.a, null, s.a.createElement(me, null, s.a.createElement(ce, null)))))
                        }
                    }]), t
                }(n.Component);
            l.a.render(s.a.createElement(Se, null), document.getElementById("root"))
        }
    },
    [
        [378, 15, 16]
    ]
]);