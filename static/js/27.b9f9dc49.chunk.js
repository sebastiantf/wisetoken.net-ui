(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [27], {
        1001: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return de
            }));
            var n = a(25),
                l = a(0),
                c = a.n(l),
                r = a(749),
                i = a(9),
                s = a(726),
                o = a(18),
                m = a(6),
                d = a(7),
                u = a(11),
                p = a(12),
                b = a(733),
                f = a(91),
                v = a.n(f),
                E = a(100),
                g = a(73),
                h = a(4),
                N = a.n(h),
                y = a(143),
                x = a(35),
                j = a(766),
                w = a(728),
                O = a(730),
                k = a(741),
                z = a(703),
                C = a(982),
                S = a(983),
                A = a(796),
                D = a(802),
                P = a(744),
                M = a(783),
                I = a(944),
                W = a(772),
                L = a.n(W),
                R = a(846),
                T = a.n(R),
                B = a(127),
                $ = a.n(B),
                H = a(844),
                V = a.n(H),
                F = a(785),
                _ = a.n(F),
                U = a(845),
                G = a.n(U),
                Y = a(786),
                q = a.n(Y),
                K = a(114),
                J = a.n(K),
                Q = (a(372), a(116)),
                X = a(117),
                Z = a(42),
                ee = (a(145), a(80)),
                te = a(165),
                ae = a(240),
                ne = a(164),
                le = a(777),
                ce = a(60),
                re = Object(l.lazy)((function() {
                    return Promise.all([a.e(4), a.e(21), a.e(42)]).then(a.bind(null, 1011))
                })),
                ie = Object(l.lazy)((function() {
                    return Promise.all([a.e(10), a.e(30)]).then(a.bind(null, 988))
                })),
                se = Object(l.lazy)((function() {
                    return Promise.all([a.e(10), a.e(32)]).then(a.bind(null, 989))
                })),
                oe = (new ee.a({
                    supportedChainIds: [1, 3, 4, 5, 42]
                }), Object(x.b)((function(e) {
                    return {
                        sharePrice: e.SchemeOptions.sharePrice
                    }
                }))((function(e) {
                    var t = Object(l.useState)("WISE"),
                        a = Object(n.a)(t, 2),
                        r = a[0],
                        m = a[1],
                        d = Object(l.useState)(!1),
                        u = Object(n.a)(d, 2),
                        p = u[0],
                        f = u[1],
                        v = Object(l.useState)(!1),
                        E = Object(n.a)(v, 2),
                        h = (E[0], E[1], Object(l.useState)(!1)),
                        x = Object(n.a)(h, 2),
                        W = x[0],
                        R = x[1],
                        B = Object(l.useState)(!1),
                        H = Object(n.a)(B, 2),
                        F = H[0],
                        U = H[1],
                        Y = (e.sharePrice, function() {
                            m("WISE"), f(!p)
                        }),
                        K = function() {
                            m("ETH"), f(!p)
                        },
                        ee = function(e) {
                            e.finalDay > 0 && Fe(e), U(!F)
                        },
                        oe = function(e) {
                            e.startDay > 0 && Fe(e), R(!W)
                        },
                        me = Object(l.useState)(!0),
                        de = Object(n.a)(me, 2),
                        ue = de[0],
                        pe = de[1],
                        be = Object(l.useState)(!1),
                        fe = Object(n.a)(be, 2),
                        ve = fe[0],
                        Ee = fe[1],
                        ge = Object(l.useState)(!1),
                        he = Object(n.a)(ge, 2),
                        Ne = he[0],
                        ye = he[1],
                        xe = Object(l.useState)("1"),
                        je = Object(n.a)(xe, 2),
                        we = je[0],
                        Oe = je[1],
                        ke = Object(l.useState)(0),
                        ze = Object(n.a)(ke, 2),
                        Ce = ze[0],
                        Se = ze[1],
                        Ae = Object(l.useState)(5),
                        De = Object(n.a)(Ae, 2),
                        Pe = De[0],
                        Me = De[1],
                        Ie = Object(l.useState)(0),
                        We = Object(n.a)(Ie, 2),
                        Le = We[0],
                        Re = We[1],
                        Te = Object(l.useState)(e.defaultText),
                        Be = Object(n.a)(Te, 2),
                        $e = (Be[0], Be[1], Object(l.useState)({})),
                        He = Object(n.a)($e, 2),
                        Ve = He[0],
                        Fe = He[1],
                        _e = Object(l.useState)(0),
                        Ue = Object(n.a)(_e, 2),
                        Ge = Ue[0],
                        Ye = Ue[1],
                        qe = function(e) {
                            we !== e && Oe(e)
                        },
                        Ke = Object(Z.b)(),
                        Je = Ke.chainId,
                        Qe = Ke.account,
                        Xe = (Ke.library, Ke.activate, Ke.active, Ke.connector),
                        Ze = c.a.useState(),
                        et = Object(n.a)(Ze, 2),
                        tt = et[0],
                        at = et[1];
                    Object(l.useEffect)((function() {
                        tt && tt === Xe && at(void 0)
                    }), [tt, Xe]);
                    var nt = Object(Q.a)();
                    Object(l.useRef)(!0);
                    Object(X.a)(!nt || !!tt);
                    var lt = Object(ne.a)(Je),
                        ct = new J.a(J.a.givenProvider),
                        rt = lt.inceptionDay,
                        it = window.ethereum ? window.ethereum.selectedAddress : null,
                        st = new ct.eth.Contract(te, lt.tokenAddress),
                        ot = (new ct.eth.Contract(ae, lt.uniswapAddress), Object(l.useState)(null)),
                        mt = Object(n.a)(ot, 2),
                        dt = mt[0],
                        ut = mt[1],
                        pt = function() {
                            pe(!0), St(!Ct)
                        },
                        bt = Object(l.useState)([]),
                        ft = Object(n.a)(bt, 2),
                        vt = ft[0],
                        Et = ft[1],
                        gt = Object(l.useState)(""),
                        ht = Object(n.a)(gt, 2),
                        Nt = (ht[0], ht[1], Object(l.useState)("")),
                        yt = Object(n.a)(Nt, 2),
                        xt = (yt[0], yt[1], Object(l.useState)(!1)),
                        jt = Object(n.a)(xt, 2),
                        wt = jt[0],
                        Ot = jt[1],
                        kt = Object(l.useState)(!1),
                        zt = Object(n.a)(kt, 2),
                        Ct = zt[0],
                        St = zt[1],
                        At = Object(l.useState)(!1),
                        Dt = Object(n.a)(At, 2);
                    Dt[0], Dt[1];
                    Object(l.useEffect)((function() {
                        var e = function() {
                                var e = Object(y.a)(N.a.mark((function e(a, n, l) {
                                    return N.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, st.methods.checkStakeByID(it, a).call().then((function(e) {
                                                    e.index = n, e.stakeID = a, e.opensDayDate = Object(ce.b)(e.startDay - 1, rt), e.startDayDate = Object(ce.b)(e.startDay, rt), e.finalDayDate = Object(ce.b)(e.finalDay, rt), e.closeDayDate = Object(ce.b)(e.closeDay, rt), e.currentWiseDay = l, e.currentWiseDayToDate = Object(ce.b)(l, rt), e.daysLeft = e.isActive ? Object(ce.a)(parseInt(e.finalDay), parseInt(l)) : Object(ce.a)(parseInt(e.finalDay), parseInt(e.closeDay)), parseInt(e.daysLeft) > parseInt(e.lockDays) && 0 === parseInt(e.closeDay) && (e.isPending = !0), t(e, n), pe(!1)
                                                }));
                                            case 3:
                                                e.sent, e.next = 9;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e.catch(0), console.log(e.t0);
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 6]
                                    ])
                                })));
                                return function(t, a, n) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            t = function() {
                                var e = Object(y.a)(N.a.mark((function e(t, a) {
                                    return N.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                Et((function(e) {
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
                            a = function() {
                                var t = Object(y.a)(N.a.mark((function t() {
                                    var a, n;
                                    return N.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (Et([]), t.prev = 1, !Je) {
                                                    t.next = 15;
                                                    break
                                                }
                                                return t.next = 5, st.methods.stakeCount(Qe).call();
                                            case 5:
                                                return a = t.sent, Ye(a), Re(Math.ceil(a / Pe)), t.next = 10, st.methods.currentWiseDay().call();
                                            case 10:
                                                return n = t.sent, Ot(n), t.next = 14, st.methods.stakesPagination(it, Ce * Pe, Pe).call().then((function(t) {
                                                    t.length > 0 ? (Ee(!0), t.forEach((function(t, a) {
                                                        e(t, a, n)
                                                    }))) : (Ee(!1), ye(!0), pe(!1))
                                                }));
                                            case 14:
                                                t.sent;
                                            case 15:
                                                t.next = 19;
                                                break;
                                            case 17:
                                                t.prev = 17, t.t0 = t.catch(1);
                                            case 19:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 17]
                                    ])
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                        pe(!0), ye(!1), a()
                    }), [Qe, Je, Ct, Ce, Pe]);
                    return c.a.createElement(c.a.Fragment, null, c.a.createElement(j.a, {
                        className: "card-box mt-4"
                    }, c.a.createElement("div", {
                        className: "card-header d-flex align-items-center justify-content-between card-header-alt mt-2 p-0"
                    }, c.a.createElement(w.a, {
                        component: "div",
                        className: "w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary"
                    }, c.a.createElement(O.a, {
                        button: !0,
                        disableRipple: !0,
                        className: "px-5 py-4",
                        selected: "1" === we,
                        onClick: function() {
                            qe("1")
                        }
                    }, c.a.createElement("span", {
                        className: "font-weight-bold text-uppercase"
                    }, c.a.createElement(V.a, {
                        className: "mr-2 ml-0 font-size-xl"
                    }), "REGULAR STAKING (", Ge, ")"), c.a.createElement("div", {
                        className: "divider"
                    })), c.a.createElement(O.a, {
                        button: !0,
                        disableRipple: !0,
                        className: "px-5 py-4",
                        selected: "2" === we,
                        onClick: function() {
                            qe("2")
                        }
                    }, c.a.createElement("span", {
                        className: "font-weight-bold text-uppercase"
                    }, c.a.createElement(G.a, {
                        className: "mr-2 ml-0 font-size-xl"
                    }), "INSURANCE STAKING (0)"), c.a.createElement("div", {
                        className: "divider"
                    })), c.a.createElement(O.a, {
                        button: !0,
                        disableRipple: !0,
                        className: "px-5 py-4",
                        selected: "3" === we,
                        onClick: function() {
                            qe("3")
                        }
                    }, c.a.createElement("span", {
                        className: "font-weight-bold text-uppercase"
                    }, c.a.createElement(T.a, {
                        className: "mr-2 ml-0 font-size-xl"
                    }), "COLLATERAL STAKING (0)"), c.a.createElement("div", {
                        className: "divider"
                    })))), c.a.createElement("div", {
                        className: "divider"
                    }), c.a.createElement("div", {
                        className: Object(i.a)("tab-item-wrapper", {
                            active: "2" === we
                        }),
                        index: 2
                    }, c.a.createElement("div", {
                        className: "text-center p-3 p-lg-5"
                    }, c.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, c.a.createElement("div", {
                        className: "d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130"
                    }, c.a.createElement(o.a, {
                        icon: ["fas", "exclamation-triangle"],
                        className: "d-flex align-self-center display-3"
                    }))), c.a.createElement("h4", {
                        className: "font-weight-bold text-warning line-height-sm px-4 mt-5"
                    }, "Insurance staking is not available at the moment"), c.a.createElement("p", {
                        className: "mb-0 font-size-lg"
                    }, "This service allows to end stakes pre-maturely with no penalty"), c.a.createElement("div", {
                        className: "pt-5"
                    }, c.a.createElement(s.a, {
                        className: "btn-primary",
                        disabled: !0
                    }, c.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, "Coming Soon"))))), c.a.createElement("div", {
                        className: Object(i.a)("tab-item-wrapper", {
                            active: "3" === we
                        }),
                        index: 2
                    }, c.a.createElement("div", {
                        className: "text-center p-3 p-lg-5"
                    }, c.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, c.a.createElement("div", {
                        className: "d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130"
                    }, c.a.createElement(o.a, {
                        icon: ["fas", "exclamation-triangle"],
                        className: "d-flex align-self-center display-3"
                    }))), c.a.createElement("h4", {
                        className: "font-weight-bold text-warning line-height-sm px-4 mt-5"
                    }, "Collateral staking is not available at the moment"), c.a.createElement("p", {
                        className: "mb-0 font-size-lg"
                    }, "This service allows to use stakes as collateral for taking loans"), c.a.createElement("div", {
                        className: "pt-5"
                    }, c.a.createElement(s.a, {
                        className: "btn-primary",
                        disabled: !0
                    }, c.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, "Coming Soon"))))), c.a.createElement("div", {
                        className: Object(i.a)("tab-item-wrapper overflow-visible", {
                            active: "1" === we
                        })
                    }, (vt.length > 0 || !0 === ve) && c.a.createElement("div", {
                        className: "p-4 text-left d-flex flex-space-between bg-secondary align-items-center"
                    }, c.a.createElement("div", {
                        className: "d-flex justify-content-center"
                    }, c.a.createElement("div", null, c.a.createElement(s.a, {
                        onClick: Y,
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary p-0 d-flex align-items-center justify-content-center p-2 px-3 mr-3"
                    }, "Create Regular Stake (WISE)")), c.a.createElement("div", null, c.a.createElement(s.a, {
                        onClick: K,
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary p-0 d-flex align-items-center justify-content-center p-2 px-3 mr-3"
                    }, "Create Regular Stake (ETH)")), c.a.createElement("div", {
                        className: "d-flex show-md-only justify-content-center align-items-center"
                    }, c.a.createElement(k.a, {
                        title: "Penalty is proportional to the amount of days left till the maturity, in range from 90% to 10%",
                        placement: "left",
                        arrow: !0
                    }, c.a.createElement("a", {
                        href: "/docs#sec-2-2-1"
                    }, c.a.createElement(s.a, {
                        className: "mr-1 p-0 mb-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                        variant: "outlined"
                    }, c.a.createElement(o.a, {
                        icon: ["far", "question-circle"],
                        className: "font-size-sm"
                    })))), c.a.createElement("div", {
                        className: "font-size-sm"
                    }, "Regular stakes are subject to penalties if ended pre-maturely"), c.a.createElement("div", {
                        className: "ml-2 mb-1"
                    }, c.a.createElement("a", {
                        href: "/docs#sec-2-3-5",
                        target: "_blank"
                    }, c.a.createElement("div", {
                        className: "badge btn-pill badge-primary"
                    }, "Learn more"))))), c.a.createElement("div", {
                        className: "d-flex"
                    }, c.a.createElement("div", null, c.a.createElement(s.a, {
                        onClick: function(e) {
                            ut(e.currentTarget)
                        },
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary d-40 p-0 d-flex align-items-center justify-content-center mr-3"
                    }, c.a.createElement(_.a, {
                        className: "w-50"
                    })), c.a.createElement(z.a, {
                        anchorEl: dt,
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
                        open: Boolean(dt),
                        classes: {
                            list: "p-0"
                        },
                        onClose: function() {
                            ut(null)
                        }
                    }, c.a.createElement("div", {
                        className: "dropdown-menu-lg overflow-hidden p-0"
                    }, c.a.createElement("div", {
                        className: "font-weight-bold px-4 pt-3 d-flex justify-content-between"
                    }, "Results"), c.a.createElement(w.a, {
                        className: "nav-neutral-first nav-pills-rounded flex-column p-2"
                    }, c.a.createElement(O.a, {
                        button: !0,
                        onClick: function() {
                            return Me(5)
                        }
                    }, c.a.createElement("div", {
                        className: "nav-link-icon mr-2"
                    }, c.a.createElement(q.a, null)), c.a.createElement("span", {
                        className: "font-size-md"
                    }, c.a.createElement("b", null, "05"), " results per page")), c.a.createElement(O.a, {
                        button: !0,
                        onClick: function() {
                            return Me(10)
                        }
                    }, c.a.createElement("div", {
                        className: "nav-link-icon mr-2"
                    }, c.a.createElement(q.a, null)), c.a.createElement("span", {
                        className: "font-size-md"
                    }, c.a.createElement("b", null, "10"), " results per page")), c.a.createElement(O.a, {
                        button: !0,
                        onClick: function() {
                            return Me(15)
                        }
                    }, c.a.createElement("div", {
                        className: "nav-link-icon mr-2"
                    }, c.a.createElement(q.a, null)), c.a.createElement("span", {
                        className: "font-size-md"
                    }, c.a.createElement("b", null, "15"), " results per page"))), c.a.createElement("div", {
                        className: "divider"
                    }), c.a.createElement("div", {
                        className: "font-weight-bold px-4 pt-4 d-flex justify-content-between"
                    }, "Order", c.a.createElement("div", {
                        className: "badge btn-pill font-size-xxs badge-gray disabled"
                    }, "Coming soon")), c.a.createElement(w.a, {
                        className: "nav-neutral-first nav-pills-rounded flex-column p-2"
                    }, c.a.createElement(O.a, {
                        button: !0,
                        disabled: !0,
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, c.a.createElement("div", {
                        className: "mr-2"
                    }, c.a.createElement($.a, null)), c.a.createElement("span", {
                        className: "font-size-md"
                    }, "Ascending")), c.a.createElement(O.a, {
                        button: !0,
                        disabled: !0,
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, c.a.createElement("div", {
                        className: "mr-2"
                    }, c.a.createElement($.a, null)), c.a.createElement("span", {
                        className: "font-size-md"
                    }, "Descending"))), c.a.createElement("div", {
                        className: "divider"
                    }), c.a.createElement("div", {
                        className: "font-weight-bold px-4 pt-4 d-flex justify-content-between"
                    }, "Filter", c.a.createElement("div", {
                        className: "badge btn-pill font-size-xxs badge-gray disabled"
                    }, "Coming soon")), c.a.createElement("div", {
                        className: "font-size-md mt-3 mb-3"
                    }, c.a.createElement("div", {
                        className: "d-flex justify-content-center"
                    }, c.a.createElement(C.a, {
                        disabled: !0,
                        control: c.a.createElement(S.a, {
                            checked: !1,
                            className: "switch-small toggle-switch-primary"
                        }),
                        className: "row-reverse font-weight-bold mb-2"
                    }), c.a.createElement("span", {
                        className: "font-size-md text-black-50"
                    }, "Hide closed stakes")))))), c.a.createElement("div", null, c.a.createElement(s.a, {
                        onClick: pt,
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary d-40 p-0 d-flex align-items-center justify-content-center mr-3"
                    }, c.a.createElement(L.a, {
                        className: "w-50"
                    })))))), c.a.createElement("div", {
                        className: "p-3 hidden"
                    }, c.a.createElement(b.a, {
                        container: !0,
                        spacing: 6
                    }, c.a.createElement(b.a, {
                        item: !0,
                        md: 4
                    }, c.a.createElement(w.a, {
                        className: "nav-neutral-success flex-column p-0"
                    }, c.a.createElement(O.a, {
                        button: !0,
                        selected: !0,
                        className: "d-flex rounded-sm justify-content-center",
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, c.a.createElement("span", {
                        className: "font-weight-bold"
                    }, "Active")))), c.a.createElement(b.a, {
                        item: !0,
                        md: 4
                    }, c.a.createElement(w.a, {
                        className: "nav-neutral-warning flex-column p-0"
                    }, c.a.createElement(O.a, {
                        button: !0,
                        className: "d-flex rounded-sm justify-content-center",
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, c.a.createElement("span", {
                        className: "font-weight-bold"
                    }, "Matured")))), c.a.createElement(b.a, {
                        item: !0,
                        md: 4
                    }, c.a.createElement(w.a, {
                        className: "nav-neutral-danger flex-column p-0"
                    }, c.a.createElement(O.a, {
                        button: !0,
                        className: "d-flex rounded-sm justify-content-center",
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, c.a.createElement("span", {
                        className: "font-weight-bold"
                    }, "Closed")))))), c.a.createElement("div", {
                        className: "divider hidden"
                    }), c.a.createElement("div", {
                        className: Object(i.a)("pt-4 px-4 tab-item-wrapper overflow-visible", {
                            active: "1" === we
                        })
                    }, ue && c.a.createElement("div", {
                        className: "text-center p-3 p-lg-5"
                    }, c.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, c.a.createElement("div", null, c.a.createElement(M.RingLoader, {
                        color: "var(--primary)",
                        loading: !0
                    })))), vt.length > 0 && c.a.createElement(A.a, {
                        className: "table table-alternate-spaced mb-0"
                    }, c.a.createElement("thead", {
                        className: "thead-light text-capitalize font-size-sm font-weight-bold"
                    }, c.a.createElement("tr", null, c.a.createElement("th", {
                        className: "text-left pl-4 pr-2"
                    }, "Stake Created"), c.a.createElement("th", {
                        className: "text-left"
                    }, "Stake Progress"), c.a.createElement("th", {
                        className: "text-left"
                    }, "Lock up"), c.a.createElement("th", {
                        className: "text-left"
                    }, "Stake ID"), c.a.createElement("th", {
                        className: "text-right"
                    }, "Amount Staked"), c.a.createElement("th", {
                        className: "text-right"
                    }, "Reward / Penalty"), c.a.createElement("th", {
                        className: "text-center"
                    }, "Actions"))), c.a.createElement("tbody", null, vt.length > 0 && vt.map((function(e, t) {
                        return c.a.createElement(c.a.Fragment, {
                            key: t
                        }, !!e && c.a.createElement("tr", null, c.a.createElement("td", {
                            className: "pl-4 pr-2"
                        }, c.a.createElement("div", {
                            className: "d-flex align-items-center"
                        }, !!e.isPending && e.isActive && c.a.createElement("div", {
                            className: "d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-primary text-primary"
                        }, c.a.createElement($.a, null)), !e.isMature && !e.isPending && e.isActive && c.a.createElement("div", {
                            className: "d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-warning text-warning"
                        }, c.a.createElement($.a, null)), !!e.isMature && e.isActive && c.a.createElement("div", {
                            className: "d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success"
                        }, c.a.createElement($.a, null)), !e.isActive && c.a.createElement("div", {
                            className: "d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-dark text-dark"
                        }, c.a.createElement($.a, null)), c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActive ? "" : "text-dark")
                        }, 0 === (n = wt - e.startDay + 1) ? "TODAY" : 1 === n ? "YESTERDAY" : "".concat(n, " DAYS AGO")), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.opensDayDate)))), c.a.createElement("td", {
                            className: "text-left w-25"
                        }, c.a.createElement(D.a, {
                            variant: "determinate",
                            className: Object(i.a)("progress-sm", {
                                "progress-animated-alt progress-bar-success": !!e.isMature && e.isActive,
                                "progress-animated-alt progress-bar-warning": !e.isMature && e.isActive && !e.isPending,
                                "progress-bar-primary": e.isActive && e.isPending,
                                "progress-bar-dark": !e.isActive
                            }),
                            value: 100 * (1 - e.daysLeft / e.lockDays)
                        }), c.a.createElement("div", {
                            className: "font-size-sm text-black-50 pt-1"
                        }, c.a.createElement("div", {
                            className: "align-box-row progress-bar--label mt-1 text-muted"
                        }, c.a.createElement("small", {
                            className: e.isActive ? "text-dark" : ""
                        }, parseFloat((a = 100 * (1 - e.daysLeft / e.lockDays), a < 0 ? 0 : a)).toFixed(2), "% Matured"), c.a.createElement("small", {
                            className: "ml-auto ".concat(e.isActive ? "text-dark" : "")
                        }, e.lockDays, " Days Total")))), c.a.createElement("td", {
                            className: "text-left"
                        }, !!e.isPending && c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold"
                        }, "STARTS ON"), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.startDayDate)), !e.isPending && 0 == e.closeDay && c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActive ? "text-black" : "text-black-50")
                        }, function(e) {
                            return 0 === e ? "MATURED ON" : 1 === e ? "TOMORROW" : "".concat(e, " DAYS LEFT")
                        }(e.daysLeft)), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.finalDayDate)), e.closeDay > 0 && c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold text-black-50"
                        }, "CLOSED ON"), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, e.closeDayDate))), c.a.createElement("td", {
                            className: "text-left"
                        }, c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold"
                        }, c.a.createElement(le.a, {
                            v: e.stakeID
                        })), !0 === e.isPending && c.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-primary d-flex align-items-center"
                        }, c.a.createElement("div", {
                            className: "badge badge-primary mr-1 border-0 badge-circle"
                        }, "Pending"), "Pending"), !e.isMature && e.isActive && !e.isPending && c.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-warning d-flex align-items-center"
                        }, c.a.createElement("div", {
                            className: "badge badge-warning mr-1 border-0 badge-circle"
                        }, "Ongoing"), "Ongoing"), !!e.isMature && e.isActive && c.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-success d-flex align-items-center"
                        }, c.a.createElement("div", {
                            className: "badge badge-success mr-1 border-0 badge-circle"
                        }, "Matured"), "Matured"), !e.isActive && c.a.createElement("div", {
                            className: "font-size-sm opacity-7 text-dark d-flex align-items-center"
                        }, c.a.createElement("div", {
                            className: "badge badge-dark mr-1 border-0 badge-circle"
                        }, "Closed"), "Closed"))), c.a.createElement("td", {
                            className: "text-right"
                        }, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActive ? "text-primary" : "text-black-50")
                        }, Object(ce.e)(e.stakedAmount, null, ct), " WISE"), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, Object(ce.e)(e.stakesShares, null, ct), " SHRS")), c.a.createElement("td", {
                            className: "text-right"
                        }, !e.isMature && !!e.isPending && c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActive ? "text-primary" : "text-black-50")
                        }, "-", Object(ce.e)(e.penaltyAmount, null, ct), " WISE"), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, "+", Object(ce.e)(e.rewardAmount, null, ct), " WISE")), !e.isMature && !e.isPending && c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold ".concat(e.isActive ? "text-warning" : "text-danger")
                        }, "-", Object(ce.e)(e.penaltyAmount, null, ct), " WISE"), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, "+", Object(ce.e)(e.rewardAmount, null, ct), " WISE")), !!e.isMature && c.a.createElement("div", null, c.a.createElement("div", {
                            className: "font-size-sm font-weight-bold text-success"
                        }, "+", Object(ce.e)(e.rewardAmount, null, ct), " WISE"), c.a.createElement("div", {
                            className: "font-size-sm opacity-7"
                        }, "-0.00 WISE"))), c.a.createElement("td", {
                            className: "text-center"
                        }, c.a.createElement(s.a, {
                            onClick: function() {
                                ee(e)
                            },
                            className: "btn-neutral-primary mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, c.a.createElement(o.a, {
                            icon: ["fas", "search"],
                            className: "font-size-sm"
                        })), e.isPending && c.a.createElement(s.a, {
                            onClick: function() {
                                oe(e)
                            },
                            className: "btn-neutral-primary mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, c.a.createElement(o.a, {
                            icon: ["fas", "times"],
                            className: "font-size-sm"
                        })), !e.isMature && e.isActive && !e.isPending && c.a.createElement(s.a, {
                            onClick: function() {
                                oe(e)
                            },
                            className: "btn-neutral-warning mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, c.a.createElement(o.a, {
                            icon: ["fas", "times"],
                            className: "font-size-sm"
                        })), !!e.isMature && e.isActive && c.a.createElement(s.a, {
                            onClick: function() {
                                oe(e)
                            },
                            className: "btn-neutral-success mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, c.a.createElement(o.a, {
                            icon: ["fas", "check"],
                            className: "font-size-sm"
                        })), !e.isActive && c.a.createElement(s.a, {
                            onClick: function() {
                                oe(e)
                            },
                            className: "btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        }, c.a.createElement(o.a, {
                            icon: ["fas", "check"],
                            className: "font-size-sm"
                        })))), c.a.createElement("tr", {
                            className: "divider"
                        }));
                        var a, n
                    })))), !!Ne && c.a.createElement("div", {
                        className: "text-center p-3 p-lg-5"
                    }, c.a.createElement("div", {
                        className: "avatar-icon-wrapper rounded-circle m-0"
                    }, c.a.createElement("div", {
                        className: "d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-primary text-teal m-0 d-130"
                    }, c.a.createElement(o.a, {
                        icon: ["fas", "sitemap"],
                        className: "d-flex align-self-center display-3"
                    }))), c.a.createElement("div", {
                        className: ""
                    }, c.a.createElement("h4", {
                        className: "font-weight-bold text-teal line-height-sm px-4 mt-5"
                    }, "You don't have regular stakes at the moment"), c.a.createElement("p", {
                        className: "mb-0 font-size-lg"
                    }, "Start ", c.a.createElement("b", null, "earning"), " interest by creating your ", c.a.createElement("b", null, "first"), " stake"), c.a.createElement("div", {
                        className: "pt-5 d-flex text-center justify-content-center"
                    }, c.a.createElement("div", null, c.a.createElement(k.a, {
                        title: "\ud83d\udcb0Creates stake using WISE token",
                        placement: "left",
                        arrow: !0
                    }, c.a.createElement(s.a, {
                        onClick: Y,
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary p-0 d-flex align-items-center justify-content-center p-2 px-3 mr-3"
                    }, "Create Regular Stake (WISE)"))), c.a.createElement("div", null, c.a.createElement(k.a, {
                        title: "\ud83e\udd84Converts ETH into WISE for staking",
                        placement: "right",
                        arrow: !0
                    }, c.a.createElement(s.a, {
                        onClick: K,
                        size: "small",
                        variant: "text",
                        className: "btn-outline-primary p-0 d-flex align-items-center justify-content-center p-2 px-3 mr-3"
                    }, "Create Regular Stake (ETH)")))), c.a.createElement("div", {
                        className: "pt-5 d-flex text-center justify-content-center hidden"
                    }, c.a.createElement("div", {
                        className: "d-flex show-md-only justify-content-center align-items-center"
                    }, c.a.createElement(k.a, {
                        title: "Penalty is proportional to the amount of days left till the maturity, in range from 90% to 10%",
                        placement: "left",
                        arrow: !0
                    }, c.a.createElement("a", {
                        href: "/docs#sec-2-3-5",
                        target: "_blank"
                    }, c.a.createElement(s.a, {
                        className: "mr-1 p-0 mb-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                        variant: "outlined"
                    }, c.a.createElement(o.a, {
                        icon: ["far", "question-circle"],
                        className: "font-size-sm"
                    })))), c.a.createElement("div", {
                        className: "font-size-sm"
                    }, "Regular stakes are subject to penalties if ended pre-maturely"), c.a.createElement("div", {
                        className: "ml-2 mb-1"
                    }, c.a.createElement("a", {
                        href: "/docs#sec-2-3-5",
                        target: "_blank"
                    }, c.a.createElement("div", {
                        className: "badge btn-pill badge-primary"
                    }, "Learn more")))))))), c.a.createElement("div", {
                        className: "mt-3"
                    }), c.a.createElement("div", {
                        className: "card-footer bg-secondary p-4 d-flex justify-content-center"
                    }, c.a.createElement(I.a, {
                        onChange: function(e, t) {
                            Se(t - 1)
                        },
                        className: "pagination-primary",
                        count: Le
                    }))), c.a.createElement(P.a, {
                        maxWidth: "lg",
                        open: p,
                        classes: {
                            paper: "shadow-lg rounded"
                        }
                    }, c.a.createElement(l.Suspense, {
                        fallback: c.a.createElement("div", null)
                    }, c.a.createElement(re, {
                        defaultCurrency: r,
                        closefunc: Y,
                        refresh: pt
                    }))), c.a.createElement(P.a, {
                        maxWidth: "lg",
                        onClose: function() {
                            ee({})
                        },
                        open: F,
                        classes: {
                            paper: "shadow-lg rounded w-100"
                        }
                    }, c.a.createElement(l.Suspense, {
                        fallback: c.a.createElement("div", null)
                    }, c.a.createElement(se, {
                        stake: Ve,
                        web3: ct,
                        wiseContract: st,
                        account: Qe,
                        setStakes: Et
                    }))), c.a.createElement(P.a, {
                        maxWidth: "md",
                        onClose: function() {
                            oe({})
                        },
                        open: W,
                        classes: {
                            paper: "shadow-lg rounded w-100"
                        }
                    }, c.a.createElement(l.Suspense, {
                        fallback: c.a.createElement("div", null)
                    }, c.a.createElement(ie, {
                        stake: Ve,
                        web3: ct,
                        wiseContract: st,
                        account: Qe,
                        setStakes: Et
                    }))))
                }))),
                me = (a(829), function(e) {
                    Object(u.a)(a, e);
                    var t = Object(p.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement(v.a, null, c.a.createElement("div", {
                                className: "card-header rounded-0 bg-white px-4 px-lg-4 py-0 border-bottom mt-5"
                            }, c.a.createElement("div", {
                                className: "py-0 w-100 mt-5"
                            }, c.a.createElement(b.a, {
                                container: !0,
                                spacing: 6
                            }, c.a.createElement(b.a, {
                                item: !0,
                                md: 12,
                                lg: 12
                            }, c.a.createElement("div", {
                                className: "dashboard-header"
                            }, c.a.createElement(E.d, {
                                titleHeading: "Wise Staking",
                                titleDescription: "Time-lock your funds to earn interest",
                                titleIcon: "AccessAlarmTwoToneIcon"
                            }))), c.a.createElement(b.a, {
                                item: !0,
                                md: 12,
                                lg: 12,
                                className: "pt-0"
                            }, c.a.createElement(oe, null)))))))
                        }
                    }]), a
                }(l.Component));

            function de() {
                r.a.initialize("UA-168804464-1"), r.a.pageview(window.location.pathname + window.location.search);
                var e = Object(Z.b)(),
                    t = (e.account, e.activate, e.active, e.connector),
                    a = e.chainId;
                r.a.initialize("UA-168804464-1"), r.a.pageview(window.location.pathname + window.location.search);
                var m = c.a.useState(),
                    d = Object(n.a)(m, 2),
                    u = d[0],
                    p = d[1];
                Object(l.useEffect)((function() {
                    u && u === t && p(void 0)
                }), [u, t]);
                var b = Object(Q.a)();
                Object(X.a)(!b || !!u);
                window.ethereum && window.ethereum.selectedAddress;
                var f = Object(l.useState)(!1),
                    v = Object(n.a)(f, 2),
                    E = v[0],
                    g = v[1],
                    h = function() {
                        return g(!E)
                    };
                return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                    className: "d-block d-lg-flex app-inner-content-layout app-inner-content-layout-fixed"
                }, c.a.createElement("div", {
                    className: "btn-md-pane d-lg-none px-4 order-0"
                }, c.a.createElement(s.a, {
                    onClick: h,
                    size: "large",
                    className: "btn-primary p-0 btn-icon d-40"
                }, c.a.createElement(o.a, {
                    icon: ["fas", "bookmark"]
                }))), c.a.createElement("div", {
                    className: Object(i.a)("app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary", {
                        hidden: a !== a
                    })
                }, c.a.createElement(me, null)), c.a.createElement("div", {
                    onClick: h,
                    className: Object(i.a)("sidebar-inner-layout-overlay", {
                        active: E
                    })
                })))
            }
        },
        777: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(73),
                l = a(0),
                c = a.n(l);

            function r(e) {
                var t = e.v,
                    a = (window.innerWidth, window.devicePixelRatio, [].concat(Object(n.a)(t.split("").slice(0, 5)), ["..."], Object(n.a)(t.split("").slice(31))).join(""));
                return c.a.createElement("data", null, a)
            }
        },
        796: function(e, t, a) {
            "use strict";
            var n = a(13),
                l = a(1),
                c = a(0),
                r = (a(10), a(9)),
                i = a(23);
            var s = c.createContext(),
                o = c.forwardRef((function(e, t) {
                    var a = e.classes,
                        i = e.className,
                        o = e.component,
                        m = void 0 === o ? "table" : o,
                        d = e.padding,
                        u = void 0 === d ? "default" : d,
                        p = e.size,
                        b = void 0 === p ? "medium" : p,
                        f = e.stickyHeader,
                        v = void 0 !== f && f,
                        E = Object(n.a)(e, ["classes", "className", "component", "padding", "size", "stickyHeader"]),
                        g = c.useMemo((function() {
                            return {
                                padding: u,
                                size: b,
                                stickyHeader: v
                            }
                        }), [u, b, v]);
                    return c.createElement(s.Provider, {
                        value: g
                    }, c.createElement(m, Object(l.a)({
                        role: "table" === m ? null : "table",
                        ref: t,
                        className: Object(r.a)(a.root, i, v && a.stickyHeader)
                    }, E)))
                }));
            t.a = Object(i.a)((function(e) {
                return {
                    root: {
                        display: "table",
                        width: "100%",
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        "& caption": Object(l.a)(Object(l.a)({}, e.typography.body2), {}, {
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
        829: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return v
            }));
            var n = a(25),
                l = a(0),
                c = a.n(l),
                r = a(9),
                i = a(18),
                s = a(766),
                o = a(728),
                m = a(730),
                d = a(976),
                u = a(979),
                p = a(726),
                b = a(703),
                f = a(1009);

            function v() {
                var e = Object(l.useState)(null),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    v = t[1],
                    E = function(e) {
                        v(e.currentTarget)
                    },
                    g = function() {
                        v(null)
                    },
                    h = Object(l.useState)("1"),
                    N = Object(n.a)(h, 2),
                    y = N[0],
                    x = N[1],
                    j = function(e) {
                        y !== e && x(e)
                    };
                return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                    className: "text-center my-4"
                }, c.a.createElement("h6", {
                    className: "font-weight-bold display-3 font-size-lg mb-1 text-black"
                }, "Wise Swaps"), c.a.createElement("p", {
                    className: "font-size-lg text-black-50 mb-0"
                }, "Instantly Swap Wise for ETH")), c.a.createElement(s.a, {
                    className: "mb-5"
                }, c.a.createElement("div", {
                    className: "card-header d-flex align-items-center justify-content-between card-header-alt p-0"
                }, c.a.createElement(o.a, {
                    component: "div",
                    className: "w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary"
                }, c.a.createElement(m.a, {
                    button: !0,
                    disableRipple: !0,
                    className: "px-5 py-4",
                    selected: "1" === y,
                    onClick: function() {
                        j("1")
                    }
                }, c.a.createElement("span", {
                    className: "font-weight-bold text-uppercase"
                }, "Buy Wise"), c.a.createElement("div", {
                    className: "divider"
                })), c.a.createElement(m.a, {
                    button: !0,
                    disableRipple: !0,
                    className: "px-5 py-4",
                    selected: "2" === y,
                    onClick: function() {
                        j("2")
                    }
                }, c.a.createElement("span", {
                    className: "font-weight-bold text-uppercase"
                }, "Provide Liquidity"), c.a.createElement("div", {
                    className: "divider"
                })), c.a.createElement(m.a, {
                    button: !0,
                    disableRipple: !0,
                    className: "px-5 py-4",
                    selected: "3" === y,
                    onClick: function() {
                        j("3")
                    }
                }, c.a.createElement("span", {
                    className: "font-weight-bold text-uppercase"
                }, "Sell Wise"), c.a.createElement("div", {
                    className: "divider"
                })))), c.a.createElement("div", {
                    className: "p-4"
                }, c.a.createElement("div", {
                    className: Object(r.a)("tab-item-wrapper overflow-visible", {
                        active: "1" === y
                    }),
                    index: 1
                }, c.a.createElement("div", {
                    className: "d-flex align-items-center justify-content-between mb-2"
                }, c.a.createElement("div", {
                    className: "font-weight-bold font-size-xl text-primary"
                }, "Currency"), c.a.createElement("div", null, c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "text-dark opacity-6",
                    title: "More info"
                }, "More info"))), c.a.createElement("div", {
                    className: "divider mb-4"
                }), c.a.createElement("div", {
                    className: "d-flex justify-content-center"
                }, c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "active mr-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "selected-icon"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "check"]
                })), c.a.createElement("div", {
                    className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-first"
                }, c.a.createElement(i.a, {
                    icon: ["fab", "ethereum"]
                })), c.a.createElement("div", {
                    className: "font-weight-bold mt-2"
                }, "ETH"), c.a.createElement("div", {
                    className: "opacity-6"
                }, "$373.28")), c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "mr-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "selected-icon"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "check"]
                })), c.a.createElement("div", {
                    className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-first"
                }, c.a.createElement(i.a, {
                    icon: ["fab", "ethereum"]
                })), c.a.createElement("div", {
                    className: "font-weight-bold mt-2"
                }, "WETH"), c.a.createElement("div", {
                    className: "opacity-6"
                }, "$373.28")), c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "mr-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "selected-icon"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "check"]
                })), c.a.createElement("div", {
                    className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning"
                }, c.a.createElement(i.a, {
                    icon: ["fab", "bitcoin"]
                })), c.a.createElement("div", {
                    className: "font-weight-bold mt-2"
                }, "WBTC"), c.a.createElement("div", {
                    className: "opacity-6"
                }, "$10456.44"))), c.a.createElement("div", {
                    className: "d-flex align-items-center justify-content-between mb-2 mt-4"
                }, c.a.createElement("div", {
                    className: "font-weight-bold font-size-xl text-primary"
                }, "Liquidity Provider"), c.a.createElement("div", null, c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "text-dark opacity-6",
                    title: "Buy limits"
                }, "More Info"))), c.a.createElement("div", {
                    className: "divider mb-4"
                }), c.a.createElement("div", {
                    className: "d-flex justify-content-center"
                }, c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "active mr-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "selected-icon"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "check"]
                })), c.a.createElement("div", {
                    className: "d-30 text-dark d-flex align-items-center justify-content-center rounded-pill bg-light"
                }, c.a.createElement("span", {
                    role: "img",
                    "aria-label": "uniswap"
                }, "\ud83e\udd84")), c.a.createElement("div", {
                    className: "font-weight-bold mt-2"
                }, "Uniswap"), c.a.createElement("div", {
                    className: "opacity-6"
                }, "V2")), c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "mr-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "selected-icon"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "check"]
                })), c.a.createElement("div", {
                    className: "d-30 text-dark d-flex align-items-center justify-content-center rounded-pill bg-light"
                }, c.a.createElement("span", {
                    role: "img",
                    "aria-label": "uniswap"
                }, "\ud83e\udd84")), c.a.createElement("div", {
                    className: "font-weight-bold mt-2"
                }, "Uniswap"), c.a.createElement("div", {
                    className: "opacity-6"
                }, "V1")), c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "mr-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "selected-icon"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "check"]
                })), c.a.createElement("div", {
                    className: "d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-second"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "balance-scale"]
                })), c.a.createElement("div", {
                    className: "font-weight-bold mt-2"
                }, "Balancer"), c.a.createElement("div", {
                    className: "opacity-6"
                }, "Coming Soon")), c.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "mx-3 mb-3 btn-input-select"
                }, c.a.createElement("div", {
                    className: "d-30 d-flex align-items-center justify-content-center rounded-pill bg-secondary text-primary"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "plus"]
                })), c.a.createElement("div", {
                    className: "font-weight-bold text-primary opacity-6 mt-2"
                }, "Add Liquidity"))), c.a.createElement("div", {
                    className: "d-flex align-items-center justify-content-between mb-2 mt-4"
                }, c.a.createElement("div", {
                    className: "font-weight-bold font-size-xl text-primary"
                }, "Amount")), c.a.createElement("div", {
                    className: "divider mb-4"
                }), c.a.createElement("div", {
                    className: "d-block d-md-flex align-items-center justify-content-center"
                }, c.a.createElement(d.a, {
                    variant: "outlined",
                    fullWidth: !0
                }, c.a.createElement(f.a, {
                    value: "0.549",
                    classes: {
                        input: "font-size-lg font-weight-bold p-4 h-auto",
                        notchedOutline: "border-2"
                    },
                    endAdornment: c.a.createElement(u.a, {
                        position: "end"
                    }, c.a.createElement(p.a, {
                        onClick: E,
                        size: "small",
                        className: "btn-neutral-dark d-flex align-items-center"
                    }, c.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, "ETH"), c.a.createElement("span", {
                        className: "btn-wrapper--icon d-flex"
                    }, c.a.createElement(i.a, {
                        icon: ["fas", "chevron-down"],
                        className: "opacity-8 font-size-xs ml-1"
                    }))), c.a.createElement(b.a, {
                        anchorEl: a,
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
                        open: Boolean(a),
                        classes: {
                            list: "p-0"
                        },
                        onClose: g
                    }, c.a.createElement("div", {
                        className: "p-2"
                    }, c.a.createElement(o.a, {
                        component: "div",
                        className: "nav-pills p-0 m-0 nav-neutral-dark flex-column"
                    }, c.a.createElement(m.a, {
                        button: !0,
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        },
                        className: "px-3 mx-2"
                    }, c.a.createElement("span", null, "Euro")))))),
                    labelWidth: 0
                })), c.a.createElement("div", {
                    className: "my-3 mx-auto my-md-0 d-60 d-flex align-items-center justify-content-center px-4"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "exchange-alt"],
                    className: "opacity-8 font-size-xl"
                })), c.a.createElement(d.a, {
                    variant: "outlined",
                    fullWidth: !0
                }, c.a.createElement(f.a, {
                    value: "567.34",
                    classes: {
                        input: "font-size-lg font-weight-bold p-4 h-auto",
                        notchedOutline: "border-2"
                    },
                    endAdornment: c.a.createElement(u.a, {
                        position: "end"
                    }, c.a.createElement(p.a, {
                        onClick: E,
                        size: "small",
                        className: "btn-neutral-dark d-flex align-items-center"
                    }, c.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, "WISE"), c.a.createElement("span", {
                        className: "btn-wrapper--icon d-flex"
                    }, c.a.createElement(i.a, {
                        icon: ["fas", "chevron-down"],
                        className: "opacity-8 font-size-xs ml-1"
                    }))), c.a.createElement(b.a, {
                        anchorEl: a,
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
                        open: Boolean(a),
                        classes: {
                            list: "p-0"
                        },
                        onClose: g
                    }, c.a.createElement("div", {
                        className: "p-2"
                    }, c.a.createElement(o.a, {
                        component: "div",
                        className: "nav-pills p-0 m-0 nav-neutral-dark flex-column"
                    }, c.a.createElement(m.a, {
                        button: !0,
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        },
                        selected: !0,
                        className: "px-3 mx-2"
                    }, c.a.createElement("span", null, "WISE")))))),
                    labelWidth: 0
                }))), c.a.createElement(p.a, {
                    className: "btn-primary py-4 mt-5 px-5 font-weight-bold font-size-lg",
                    fullWidth: !0
                }, "Buy Wise Tokens")), c.a.createElement("div", {
                    className: Object(r.a)("tab-item-wrapper", {
                        active: "2" === y || "3" === y
                    }),
                    index: 2
                }, c.a.createElement("div", {
                    className: "text-center p-3 p-lg-5"
                }, c.a.createElement("div", {
                    className: "avatar-icon-wrapper rounded-circle m-0"
                }, c.a.createElement("div", {
                    className: "d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130"
                }, c.a.createElement(i.a, {
                    icon: ["fas", "exclamation-triangle"],
                    className: "d-flex align-self-center display-3"
                }))), c.a.createElement("h4", {
                    className: "font-weight-bold text-warning line-height-sm px-4 mt-5"
                }, "You don't have WISE tokens at the moment!"), c.a.createElement("p", {
                    className: "mb-0 font-size-lg"
                }, "Wise tokens will be distributed on 31st of December"), c.a.createElement("div", {
                    className: "pt-5"
                }, c.a.createElement(p.a, {
                    className: "btn-neutral"
                }, c.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, "Redeem Tokens"))))))))
            }
        },
        844: function(e, t, a) {
            "use strict";
            var n = a(59);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(0)),
                c = (0, n(a(64)).default)(l.default.createElement("path", {
                    d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                }), "AccessAlarm");
            t.default = c
        },
        845: function(e, t, a) {
            "use strict";
            var n = a(59);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(0)),
                c = (0, n(a(64)).default)(l.default.createElement("path", {
                    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"
                }), "VerifiedUserOutlined");
            t.default = c
        },
        846: function(e, t, a) {
            "use strict";
            var n = a(59);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(0)),
                c = (0, n(a(64)).default)(l.default.createElement("path", {
                    d: "M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"
                }), "AccountBalanceOutlined");
            t.default = c
        },
        944: function(e, t, a) {
            "use strict";
            var n = a(1),
                l = a(13),
                c = a(0),
                r = (a(10), a(9)),
                i = a(23),
                s = a(92),
                o = a(85),
                m = a(247);
            var d = a(39),
                u = a(81),
                p = a(238),
                b = a(698),
                f = Object(b.a)(c.createElement("path", {
                    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                }), "FirstPage"),
                v = Object(b.a)(c.createElement("path", {
                    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                }), "LastPage"),
                E = Object(b.a)(c.createElement("path", {
                    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                }), "NavigateBefore"),
                g = Object(b.a)(c.createElement("path", {
                    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                }), "NavigateNext"),
                h = a(34),
                N = c.forwardRef((function(e, t) {
                    var a = e.classes,
                        i = e.className,
                        s = e.color,
                        o = void 0 === s ? "standard" : s,
                        m = e.component,
                        d = e.disabled,
                        b = void 0 !== d && d,
                        N = e.page,
                        y = e.selected,
                        x = void 0 !== y && y,
                        j = e.shape,
                        w = void 0 === j ? "round" : j,
                        O = e.size,
                        k = void 0 === O ? "medium" : O,
                        z = e.type,
                        C = void 0 === z ? "page" : z,
                        S = e.variant,
                        A = void 0 === S ? "text" : S,
                        D = Object(l.a)(e, ["classes", "className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"]),
                        P = ("rtl" === Object(u.a)().direction ? {
                            previous: g,
                            next: E,
                            last: f,
                            first: v
                        } : {
                            previous: E,
                            next: g,
                            first: f,
                            last: v
                        })[C];
                    return "start-ellipsis" === C || "end-ellipsis" === C ? c.createElement("div", {
                        ref: t,
                        className: Object(r.a)(a.root, a.ellipsis, b && a.disabled, "medium" !== k && a["size".concat(Object(h.a)(k))])
                    }, "\u2026") : c.createElement(p.a, Object(n.a)({
                        ref: t,
                        component: m,
                        disabled: b,
                        focusVisibleClassName: a.focusVisible,
                        className: Object(r.a)(a.root, a.page, a[A], a[w], i, "standard" !== o && a["".concat(A).concat(Object(h.a)(o))], b && a.disabled, x && a.selected, "medium" !== k && a["size".concat(Object(h.a)(k))])
                    }, D), "page" === C && N, P ? c.createElement(P, {
                        className: a.icon
                    }) : null)
                })),
                y = Object(i.a)((function(e) {
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
                                    backgroundColor: Object(d.c)(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
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
                                border: "1px solid ".concat(Object(d.c)(e.palette.primary.main, .5)),
                                backgroundColor: Object(d.c)(e.palette.primary.main, e.palette.action.activatedOpacity),
                                "&:hover, &$focusVisible": {
                                    backgroundColor: Object(d.c)(e.palette.primary.main, e.palette.action.activatedOpacity + e.palette.action.hoverOpacity),
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
                                border: "1px solid ".concat(Object(d.c)(e.palette.secondary.main, .5)),
                                backgroundColor: Object(d.c)(e.palette.secondary.main, e.palette.action.activatedOpacity),
                                "&:hover, &$focusVisible": {
                                    backgroundColor: Object(d.c)(e.palette.secondary.main, e.palette.action.activatedOpacity + e.palette.action.hoverOpacity),
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
                })(N);

            function x(e, t, a) {
                return "page" === e ? "".concat(a ? "" : "Go to ", "page ").concat(t) : "Go to ".concat(e, " page")
            }
            var j = c.forwardRef((function(e, t) {
                e.boundaryCount;
                var a = e.classes,
                    i = e.className,
                    d = e.color,
                    u = void 0 === d ? "standard" : d,
                    p = (e.count, e.defaultPage, e.disabled, e.getItemAriaLabel),
                    b = void 0 === p ? x : p,
                    f = (e.hideNextButton, e.hidePrevButton, e.onChange, e.page, e.renderItem),
                    v = void 0 === f ? function(e) {
                        return c.createElement(y, e)
                    } : f,
                    E = e.shape,
                    g = void 0 === E ? "round" : E,
                    h = (e.showFirstButton, e.showLastButton, e.siblingCount, e.size),
                    N = void 0 === h ? "medium" : h,
                    j = e.variant,
                    w = void 0 === j ? "text" : j,
                    O = Object(l.a)(e, ["boundaryCount", "classes", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"]),
                    k = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.boundaryCount,
                            a = void 0 === t ? 1 : t,
                            c = e.componentName,
                            r = void 0 === c ? "usePagination" : c,
                            i = e.count,
                            d = void 0 === i ? 1 : i,
                            u = e.defaultPage,
                            p = void 0 === u ? 1 : u,
                            b = e.disabled,
                            f = void 0 !== b && b,
                            v = e.hideNextButton,
                            E = void 0 !== v && v,
                            g = e.hidePrevButton,
                            h = void 0 !== g && g,
                            N = e.onChange,
                            y = e.page,
                            x = e.showFirstButton,
                            j = void 0 !== x && x,
                            w = e.showLastButton,
                            O = void 0 !== w && w,
                            k = e.siblingCount,
                            z = void 0 === k ? 1 : k,
                            C = Object(l.a)(e, ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"]),
                            S = Object(m.a)({
                                controlled: y,
                                default: p,
                                name: r,
                                state: "page"
                            }),
                            A = Object(o.a)(S, 2),
                            D = A[0],
                            P = A[1],
                            M = function(e, t) {
                                y || P(t), N && N(e, t)
                            },
                            I = function(e, t) {
                                var a = t - e + 1;
                                return Array.from({
                                    length: a
                                }, (function(t, a) {
                                    return e + a
                                }))
                            },
                            W = I(1, Math.min(a, d)),
                            L = I(Math.max(d - a + 1, a + 1), d),
                            R = Math.max(Math.min(D - z, d - a - 2 * z - 1), a + 2),
                            T = Math.min(Math.max(D + z, a + 2 * z + 2), L[0] - 2),
                            B = [].concat(Object(s.a)(j ? ["first"] : []), Object(s.a)(h ? [] : ["previous"]), Object(s.a)(W), Object(s.a)(R > a + 2 ? ["start-ellipsis"] : a + 1 < d - a ? [a + 1] : []), Object(s.a)(I(R, T)), Object(s.a)(T < d - a - 1 ? ["end-ellipsis"] : d - a > a ? [d - a] : []), Object(s.a)(L), Object(s.a)(E ? [] : ["next"]), Object(s.a)(O ? ["last"] : [])),
                            $ = function(e) {
                                switch (e) {
                                    case "first":
                                        return 1;
                                    case "previous":
                                        return D - 1;
                                    case "next":
                                        return D + 1;
                                    case "last":
                                        return d;
                                    default:
                                        return null
                                }
                            },
                            H = B.map((function(e) {
                                return "number" === typeof e ? {
                                    onClick: function(t) {
                                        M(t, e)
                                    },
                                    type: "page",
                                    page: e,
                                    selected: e === D,
                                    disabled: f,
                                    "aria-current": e === D ? "true" : void 0
                                } : {
                                    onClick: function(t) {
                                        M(t, $(e))
                                    },
                                    type: e,
                                    page: $(e),
                                    selected: !1,
                                    disabled: f || -1 === e.indexOf("ellipsis") && ("next" === e || "last" === e ? D >= d : D <= 1)
                                }
                            }));
                        return Object(n.a)({
                            items: H
                        }, C)
                    }(Object(n.a)(Object(n.a)({}, e), {}, {
                        componentName: "Pagination"
                    })).items;
                return c.createElement("nav", Object(n.a)({
                    "aria-label": "pagination navigation",
                    className: Object(r.a)(a.root, i),
                    ref: t
                }, O), c.createElement("ul", {
                    className: a.ul
                }, k.map((function(e, t) {
                    return c.createElement("li", {
                        key: t
                    }, v(Object(n.a)(Object(n.a)({}, e), {}, {
                        color: u,
                        "aria-label": b(e.type, e.page, e.selected),
                        shape: g,
                        size: N,
                        variant: w
                    })))
                }))))
            }));
            t.a = Object(i.a)({
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
            })(j)
        }
    }
]);