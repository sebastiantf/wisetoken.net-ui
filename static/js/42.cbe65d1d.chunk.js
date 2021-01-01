(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [42], {
        1011: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(73),
                r = a(25),
                i = a(4),
                l = a.n(i),
                c = a(143),
                s = a(790),
                o = a(0),
                m = a.n(o),
                u = a(749),
                d = a(35),
                b = a(779),
                f = a(942),
                p = a(769),
                g = a(937),
                h = a(9),
                v = a(782),
                E = a.n(v),
                k = a(164),
                x = (a(201), a(372)),
                N = a(18),
                O = a(755),
                w = a.n(O),
                S = a(763),
                j = a(726),
                y = a(766),
                A = a(733),
                C = a(1012),
                R = a(979),
                D = a(703),
                z = a(764),
                F = a(982),
                L = a(999),
                I = a(774),
                T = a(741),
                M = a(728),
                _ = a(730),
                W = a(42),
                P = a(114),
                B = a.n(P),
                Y = (a(239), a(939)),
                H = a.n(Y),
                U = a(940),
                V = a.n(U),
                G = a(941),
                K = a.n(G),
                q = a(240),
                J = a(165),
                Q = a(6),
                X = a(7),
                Z = a(11),
                $ = a(12),
                ee = a(938),
                te = function(e) {
                    Object(Z.a)(a, e);
                    var t = Object($.a)(a);

                    function a() {
                        var e;
                        Object(Q.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            isLiked: !1
                        }, e.processLike = function() {
                            e.setState({
                                isLiked: !0
                            }), e.reward.rewardMe()
                        }, e
                    }
                    return Object(X.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.reward.rewardMe()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement(ee.a, {
                                ref: function(t) {
                                    e.reward = t
                                },
                                type: "emoji",
                                config: {
                                    emoji: ["\ud83e\udd89", "\ud83e\udd84", "\ud83d\ude0a", "\ud83d\udc4d", "\ud83c\udf89", "\ud83e\udd89", "\ud83e\udd89"],
                                    springAnimation: !0,
                                    elementCount: 10
                                }
                            }, m.a.createElement(j.a, {
                                size: "large",
                                className: "py-3 px-4 btn-wise w-100"
                            }, m.a.createElement("span", {
                                className: "text-uppercase font-weight-bold"
                            }, "DONE"))))
                        }
                    }]), a
                }(o.Component),
                ae = a(60),
                ne = function(e) {
                    e.inputRef;
                    var t = e.onChange,
                        a = Object(s.a)(e, ["inputRef", "onChange"]);
                    return m.a.createElement(g.a, Object.assign({}, a, {
                        allowNegative: !1,
                        decimalScale: 2,
                        onValueChange: function(a) {
                            t({
                                target: {
                                    name: e.name,
                                    value: a.value
                                }
                            })
                        },
                        fixedDecimalScale: !0,
                        thousandSeparator: !0,
                        isNumericString: !0
                    }))
                },
                re = function(e) {
                    e.inputRef;
                    var t = e.onChange,
                        a = Object(s.a)(e, ["inputRef", "onChange"]);
                    return m.a.createElement(g.a, Object.assign({}, a, {
                        allowNegative: !1,
                        decimalScale: 0,
                        onValueChange: function(a) {
                            t({
                                target: {
                                    name: e.name,
                                    value: a.value
                                }
                            })
                        },
                        thousandSeparator: !0,
                        isNumericString: !0
                    }))
                };
            t.default = Object(d.b)((function(e) {
                return {
                    sharePrice: e.SchemeOptions.sharePrice
                }
            }))((function(e) {
                var t = Object(b.a)(p.a)({
                        color: "#dc004d",
                        marginLeft: "1em"
                    }),
                    a = "",
                    i = 0,
                    s = e.refresh,
                    d = e.closefunc,
                    g = e.sharePrice,
                    v = function() {
                        var e = Object(c.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        d();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    O = function() {
                        var e = Object(c.a)(l.a.mark((function e(t) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        kt(t);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    P = function() {
                        var e = Object(c.a)(l.a.mark((function e(t) {
                            var a, n, r, i;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return 1 === t && (n = Math.floor(Math.random() * ze.teamAddresses.length), a = ze.teamAddresses[n]), 2 === t && (r = Math.floor(Math.random() * ze.teamAddresses.length), a = ze.teamAddresses[r]), 3 === t && (i = Math.floor(Math.random() * ze.teamAddresses.length), a = ze.teamAddresses[i]), st(10), We(a), e.next = 7, At(ut, Et, a);
                                    case 7:
                                        !0 === e.sent && Qt("NORMAL");
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Y = function() {
                        var e = Object(c.a)(l.a.mark((function e(t) {
                            var a, n, r;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 8;
                                            break
                                        }
                                        return a = Le.utils.toWei(t.toString()), e.next = 4, Ie.methods.getAmountsOut(a, [ze.wethAddress, ze.tokenAddress]).call();
                                    case 4:
                                        return n = e.sent, r = Le.utils.fromWei(n[1]), gt(parseFloat(r)), e.abrupt("return", r);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    U = function() {
                        var e = Object(c.a)(l.a.mark((function e(t) {
                            var a;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = Object(ae.k)(je * t / 100, 2), !1 !== pe || !a) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, Y(a);
                                    case 4:
                                        dt((function(e) {
                                            return parseFloat(a)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    G = Object(o.useRef)(!0),
                    Q = Object(o.useState)(e.defaultCurrency || "WISE"),
                    X = Object(r.a)(Q, 2),
                    Z = X[0],
                    $ = (X[1], Object(o.useState)(null)),
                    ee = Object(r.a)($, 2),
                    ie = ee[0],
                    le = ee[1],
                    ce = Object(o.useState)(null),
                    se = Object(r.a)(ce, 2),
                    oe = se[0],
                    me = se[1],
                    ue = Object(o.useState)(null),
                    de = Object(r.a)(ue, 2),
                    be = de[0],
                    fe = de[1],
                    pe = "WISE" === Z,
                    ge = Object(W.b)(),
                    he = ge.chainId,
                    ve = ge.account,
                    Ee = (ge.library, ge.activate, ge.active);
                ge.connector;
                u.a.modalview("StakeWise");
                var ke = Object(o.useState)(0),
                    xe = Object(r.a)(ke, 2),
                    Ne = (xe[0], xe[1], Object(o.useState)("0.00")),
                    Oe = Object(r.a)(Ne, 2),
                    we = (Oe[0], Oe[1], Object(o.useState)(0)),
                    Se = Object(r.a)(we, 2),
                    je = Se[0],
                    ye = Se[1],
                    Ae = Object(o.useState)("0.00"),
                    Ce = Object(r.a)(Ae, 2),
                    Re = Ce[0],
                    De = Ce[1],
                    ze = Object(k.a)(he),
                    Fe = Object(x.a)("w"),
                    Le = (Math.floor(Math.random() * ze.teamAddresses.length), new B.a(B.a.givenProvider)),
                    Ie = new Le.eth.Contract(q, ze.uniswapAddress),
                    Te = Object(o.useState)(Fe || ""),
                    Me = Object(r.a)(Te, 2),
                    _e = Me[0],
                    We = Me[1],
                    Pe = Object(o.useState)(e.defaultText),
                    Be = Object(r.a)(Pe, 2),
                    Ye = (Be[0], Be[1], Object(o.useState)(null)),
                    He = Object(r.a)(Ye, 2),
                    Ue = He[0],
                    Ve = He[1],
                    Ge = Object(o.useState)(!1),
                    Ke = Object(r.a)(Ge, 2),
                    qe = (Ke[0], Ke[1]),
                    Je = Object(o.useState)(15330),
                    Qe = Object(r.a)(Je, 2),
                    Xe = Qe[0],
                    Ze = (Qe[1], Object(o.useState)(parseFloat(Le.utils.fromWei(g)))),
                    $e = Object(r.a)(Ze, 2),
                    et = $e[0],
                    tt = ($e[1], Object(o.useState)(0)),
                    at = Object(r.a)(tt, 2),
                    nt = at[0],
                    rt = at[1],
                    it = Object(o.useState)(0),
                    lt = Object(r.a)(it, 2),
                    ct = lt[0],
                    st = lt[1],
                    ot = Object(o.useState)(""),
                    mt = Object(r.a)(ot, 2),
                    ut = mt[0],
                    dt = mt[1],
                    bt = Object(o.useState)(""),
                    ft = Object(r.a)(bt, 2),
                    pt = ft[0],
                    gt = ft[1],
                    ht = Object(o.useState)(""),
                    vt = Object(r.a)(ht, 2),
                    Et = vt[0],
                    kt = vt[1],
                    xt = Object(o.useState)(!0),
                    Nt = Object(r.a)(xt, 2),
                    Ot = (Nt[0], Nt[1], Object(o.useState)([])),
                    wt = Object(r.a)(Ot, 2);
                wt[0], wt[1];
                Object(o.useEffect)((function() {
                    (function() {
                        var e = Object(c.a)(l.a.mark((function e() {
                            var t;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!pe) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, Rt.methods.balanceOf(ve).call();
                                    case 3:
                                        t = e.sent, ye(Le.utils.fromWei(t)), De(parseFloat(Le.utils.fromWei(t)).toLocaleString(void 0, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })), e.next = 9;
                                        break;
                                    case 8:
                                        Le.eth.getBalance(ve).then((function(e) {
                                            ye(Le.utils.fromWei(e)), De(parseFloat(Le.utils.fromWei(e)).toLocaleString(void 0, {
                                                minimumFractionDigits: 3,
                                                maximumFractionDigits: 3
                                            }))
                                        })).catch((function(e) {
                                            console.log("eth balance error")
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()(), _e === ve && Qt("SELF_REFERRAL"), _e.includes("0x") && st(10)
                }), [he, ve, Ee]);
                var St = function() {
                        var e = Object(c.a)(l.a.mark((function e(t) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (kt(t.target.value), rt(jt(t.target.value)), _e !== ve) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 4:
                                        return e.next = 6, At(ut, t.target.value, _e, "duration");
                                    case 6:
                                        !0 === e.sent && Qt("NORMAL");
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    jt = function(e) {
                        return e <= 1825 ? .0136986301369863 * e : .00037023324 * (Math.min(e, 15330) - 1825) + 25
                    },
                    yt = function() {
                        var e = Object(c.a)(l.a.mark((function e(t) {
                            var a, n, r;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (dt((function(e) {
                                                return t.target.value
                                            })), _e !== ve) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 3:
                                        return e.next = 5, At(t.target.value, Et, _e, "amount");
                                    case 5:
                                        if (!0 !== e.sent) {
                                            e.next = 18;
                                            break
                                        }
                                        if (!1 !== pe || !t.target.value) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 10, Y(t.target.value);
                                    case 10:
                                        a = e.sent, n = parseFloat(a).toLocaleString(void 0, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }), r = "By clicking the <b>Create Regular Stake</b> button below you agree that provided <b>ETH</b> amount will be converted to <b>".concat(n, " WISE</b> and used to create the stake."), Qt("NORMAL"), Jt(r), e.next = 18;
                                        break;
                                    case 17:
                                        Qt("NORMAL");
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    At = function() {
                        var e = Object(c.a)(l.a.mark((function e(t, a, n, r) {
                            var i;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(parseInt(a) > Xe)) {
                                            e.next = 3;
                                            break
                                        }
                                        return Qt("DAYS_LIMIT"), e.abrupt("return", !1);
                                    case 3:
                                        if (!(parseFloat(t) > parseFloat(je))) {
                                            e.next = 6;
                                            break
                                        }
                                        return Qt("LESS_BALANCE"), e.abrupt("return", !1);
                                    case 6:
                                        if ("duration" === r) {
                                            e.next = 14;
                                            break
                                        }
                                        if (!(t > 0)) {
                                            e.next = 12;
                                            break
                                        }
                                        if ("amount" !== r) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", !0);
                                    case 10:
                                        e.next = 14;
                                        break;
                                    case 12:
                                        return Qt("NO_AMOUNT"), e.abrupt("return", !1);
                                    case 14:
                                        if ("amount" === r) {
                                            e.next = 22;
                                            break
                                        }
                                        if (!(a > 0)) {
                                            e.next = 20;
                                            break
                                        }
                                        if ("duration" !== r) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.abrupt("return", !0);
                                    case 18:
                                        e.next = 22;
                                        break;
                                    case 20:
                                        return Qt("NO_DURATION"), e.abrupt("return", !1);
                                    case 22:
                                        if (i = n.includes("0x") ? n : ze.zeroAddress, B.a.utils.isAddress(i)) {
                                            e.next = 26;
                                            break
                                        }
                                        return Qt("INVALID_REFERRAL"), e.abrupt("return", !1);
                                    case 26:
                                        if (i !== ve) {
                                            e.next = 29;
                                            break
                                        }
                                        return Qt("SELF_REFERRAL"), e.abrupt("return", !1);
                                    case 29:
                                        return e.abrupt("return", !0);
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, a, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ct = function() {
                        var e = Object(c.a)(l.a.mark((function e() {
                            var t, n;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = _e.includes("0x") ? _e : ze.zeroAddress, e.next = 3, At(ut, Et, t, "all");
                                    case 3:
                                        n = e.sent, "Create Regular Stake" === Ht && !0 === n && (Qt("CONFIRM_TRANSACTION"), a = "", i = 0, Zt(B.a.utils.toWei(ut), Et, t));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Rt = new Le.eth.Contract(J, ze.tokenAddress),
                    Dt = Object(o.useState)("NORMAL"),
                    zt = Object(r.a)(Dt, 2),
                    Ft = (zt[0], zt[1]),
                    Lt = Object(o.useState)(!1),
                    It = Object(r.a)(Lt, 2),
                    Tt = It[0],
                    Mt = It[1],
                    _t = Object(o.useState)("Regular Stake"),
                    Wt = Object(r.a)(_t, 2),
                    Pt = Wt[0],
                    Bt = (Wt[1], Object(o.useState)("Create Regular Stake")),
                    Yt = Object(r.a)(Bt, 2),
                    Ht = Yt[0],
                    Ut = Yt[1],
                    Vt = pe ? "By clicking the <b>Create Regular Stake</b> button below you agree that provided values are accurate and reviewed before the final decision to create stake is made." : "By clicking the <b>Create Regular Stake</b> button below you agree that provided <b>ETH</b> amount will be converted to <b>".concat(pt.toLocaleString(void 0, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }), " WISE</b> and used to create the stake."),
                    Gt = Object(o.useState)(Vt),
                    Kt = Object(r.a)(Gt, 2),
                    qt = Kt[0],
                    Jt = Kt[1],
                    Qt = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        Ft((function(a) {
                            var n = !0;
                            "STAKING" === a && "DONE" !== e && (n = !1), "CONFIRM_TRANSACTION" === a && "STAKING" !== e && null == t && (n = !1);
                            var r = n ? e : a;
                            Ft(r), Mt(Xt[r].disabled), Ut(Xt[r].text), Jt(Xt[r].info)
                        }))
                    },
                    Xt = {
                        SELF_REFERRAL: {
                            text: "Self-Referral Detected",
                            info: "Self-referrals are not allowed, please choose a different random <b>referral address</b> or <b>team referral address</b> (support the team) from the <b>ADDY</b> option box above.",
                            disabled: !0
                        },
                        INVALID_REFERRAL: {
                            text: "Invalid Referral",
                            info: "The referral address is invalid. please choose a different random <b>referral address</b> or team referral address (support the team) from the <b>ADDY</b> option box above.",
                            disabled: !0
                        },
                        LESS_BALANCE: {
                            text: "Insufficient Balance",
                            info: pe ? "Your current balance is <b>".concat(Re, " ").concat(Z, "</b> please make sure you have enough tokens by either purchasing them on Uniswap or using <b>ETH</b> option for staking.") : "Your current balance is <b>".concat(Re, " ").concat(Z, "</b> please make sure you have enough <b>ETH</b>. Consider using a different account that might have more funds to stake with."),
                            disabled: !0
                        },
                        NO_AMOUNT: {
                            text: "Provide Staking Amount",
                            info: pe ? "Please input <b>Staking Amount</b> into the corresponding field above. Your current balance is <b>".concat(Re, " ").concat(Z, "</b> you can get more on Uniswap or use ETH staking option.") : "Please input <b>Staking Amount</b> into the corresponding field above. Your current balance is <b>".concat(Re, " ").concat(Z, "</b> which can be converted to <b>WISE</b> tokens for staking."),
                            disabled: !0
                        },
                        NO_DURATION: {
                            text: "Provide Staking Duration",
                            info: "Please input <b>Staking Duration</b> into the corresponding field above. Your stake duration can span between 1 and 15,330 days long which is about 42 years \ud83d\ude80",
                            disabled: !0
                        },
                        DAYS_LIMIT: {
                            text: "Duration limit breached",
                            info: "Stake duration is exceeding maximum staking time which is <b>15,330 days</b> for <b>".concat(Pt, "</b>. Please decrease staking duration to appropriate value."),
                            disabled: !0
                        },
                        NORMAL: {
                            text: "Create ".concat(Pt),
                            info: Vt,
                            disabled: !1
                        },
                        CONFIRM_TRANSACTION: {
                            text: "Confirm Transaction",
                            info: "Staking transaction needs to be confirmed from your wallet interface, please click <b>Confirm</b> or reject within your wallet interface when prompted.",
                            disabled: !0
                        },
                        STAKING: {
                            text: "Staking In Progress",
                            info: "Transaction is now in progress, to check status of this transaction and verify it please click on the <b>View Transaction</b> link below the button.",
                            disabled: !0
                        },
                        DONE: {
                            text: "DONE",
                            info: "Staking transaction is now confirmed and completed. Click the <b>Done</b> button below to stake again or click the <b>Transaction Completed</b> link to verify results.",
                            disabled: !1
                        }
                    },
                    Zt = function() {
                        var e = Object(c.a)(l.a.mark((function e(t, n, r) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        pe ? Rt.methods.createStake(t, n, r).send({
                                            from: ve
                                        }).on("transactionHash", (function(e) {
                                            G.current && (Ve(e), Qt("STAKING"), a = e)
                                        })).on("confirmation", (function(e, t) {
                                            t.transactionHash === a && (i++, console.log(i)), G.current && 1 === i && (Qt("DONE"), s(), qe((function(e) {
                                                return !e
                                            })))
                                        })).on("error", (function(e) {
                                            G.current && (Qt("NORMAL", !0), Ve(null))
                                        })) : Rt.methods.createStakeWithETH(n, r).send({
                                            value: t,
                                            from: ve
                                        }).on("transactionHash", (function(e) {
                                            G.current && (Ve(e), Qt("STAKING"), a = e)
                                        })).on("confirmation", (function(e, t) {
                                            t.transactionHash === a && (i++, console.log(i)), G.current && 1 === i && (Qt("DONE"), s(), qe((function(e) {
                                                return !e
                                            })))
                                        })).on("error", (function(e) {
                                            G.current && (Qt("NORMAL", !0), Ve(null))
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, a, n) {
                            return e.apply(this, arguments)
                        }
                    }();
                return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", null, m.a.createElement(S.a, null, m.a.createElement("div", {
                    className: "card-header d-flex align-items-center justify-content-center card-header-alt p-3"
                }, m.a.createElement("div", {
                    className: "card-lr-actions absolute-left"
                }, m.a.createElement(j.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined",
                    onClick: function() {
                        v({})
                    }
                }, m.a.createElement(E.a, {
                    fontSize: "small"
                })))), m.a.createElement(y.a, {
                    className: "rounded-sm modal-content shadow-none e ml-3 mb-3 mt-0 mr-0 pt-2 bg-white-10"
                }, m.a.createElement(y.a, {
                    className: "rounded-sm shadow-none font-size-sm p-3 p-sm-0"
                }, m.a.createElement(A.a, {
                    container: !0,
                    spacing: 0
                }, m.a.createElement(A.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex flex-column"
                }, m.a.createElement("div", {
                    className: "text-center mb-1"
                }, m.a.createElement("h1", {
                    className: "font-size-xxl mb-1 font-weight-bold"
                }, "Input Details"), m.a.createElement("p", {
                    className: "mb-0 text-black-50"
                }, "Staking ", Z, " ", "WISE" === Z ? "tokens" : null, " generates SHRS")), m.a.createElement("div", null, m.a.createElement("div", {
                    className: "mb-4 mt-4"
                }, m.a.createElement(C.a, {
                    fullWidth: !0,
                    value: ut,
                    onChange: yt,
                    onBlur: function() {
                        Y(ut)
                    },
                    variant: "outlined",
                    id: "textfield-stake",
                    label: "Staking Amount",
                    className: "font-weight-bold font-size-md",
                    placeholder: "Staking Amount",
                    InputProps: {
                        inputComponent: ne,
                        classes: {
                            input: "font-size-lg font-weight-bold py-4 px-1 h-auto special-placeholder",
                            notchedOutline: "border-2"
                        },
                        endAdornment: m.a.createElement(R.a, {
                            position: "end"
                        }, m.a.createElement(j.a, {
                            onClick: function(e) {
                                le(e.currentTarget)
                            },
                            size: "small",
                            className: "btn-neutral-dark d-flex align-items-center"
                        }, m.a.createElement("span", {
                            className: "btn-wrapper--label font-weight-bold"
                        }, Z), m.a.createElement("span", {
                            className: "btn-wrapper--icon d-flex"
                        }, m.a.createElement(N.a, {
                            icon: ["fas", "chevron-down"],
                            className: "opacity-8 font-size-xs ml-1"
                        }))), m.a.createElement(D.a, {
                            anchorEl: ie,
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "center",
                                horizontal: "center"
                            },
                            transformOrigin: {
                                vertical: "center",
                                horizontal: "center"
                            },
                            onChange: U,
                            open: Boolean(ie),
                            classes: {
                                list: "p-0"
                            },
                            onClose: function() {
                                le(null)
                            }
                        }, [{
                            value: 25,
                            label: "25% Balance"
                        }, {
                            value: 50,
                            label: "50% Balance"
                        }, {
                            value: 75,
                            label: "75% Balance"
                        }, {
                            value: 100,
                            label: "Max Balance"
                        }].map((function(e) {
                            return m.a.createElement(z.a, {
                                key: e.value,
                                onClick: function() {
                                    return U(e.value)
                                }
                            }, e.label)
                        })))),
                        startAdornment: m.a.createElement(R.a, {
                            position: "start"
                        }, m.a.createElement(H.a, null))
                    }
                })), m.a.createElement("div", {
                    className: "mb-4"
                }, m.a.createElement(C.a, {
                    onChange: St,
                    fullWidth: !0,
                    value: Et,
                    variant: "outlined",
                    id: "textfield-stake",
                    label: "Staking Duration",
                    className: "font-weight-bold font-size-md",
                    placeholder: "Staking Duration",
                    InputProps: {
                        inputComponent: re,
                        classes: {
                            input: "font-size-lg font-weight-bold py-4 px-1 h-auto special-placeholder",
                            notchedOutline: "border-2"
                        },
                        endAdornment: m.a.createElement(R.a, {
                            position: "end"
                        }, m.a.createElement(j.a, {
                            onClick: function(e) {
                                me(e.currentTarget)
                            },
                            size: "small",
                            className: "btn-neutral-dark d-flex align-items-center"
                        }, m.a.createElement("span", {
                            className: "btn-wrapper--label font-weight-bold"
                        }, "DAYS"), m.a.createElement("span", {
                            className: "btn-wrapper--icon d-flex"
                        }, m.a.createElement(N.a, {
                            icon: ["fas", "chevron-down"],
                            className: "opacity-8 font-size-xs ml-1"
                        }))), m.a.createElement(D.a, {
                            anchorEl: oe,
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "center",
                                horizontal: "center"
                            },
                            transformOrigin: {
                                vertical: "center",
                                horizontal: "center"
                            },
                            onChange: O,
                            open: Boolean(oe),
                            classes: {
                                list: "p-0"
                            },
                            onClose: function() {
                                me(null)
                            }
                        }, [{
                            value: "730",
                            label: "2 Years"
                        }, {
                            value: "1095",
                            label: "3 Years"
                        }, {
                            value: "1460",
                            label: "4 Years"
                        }, {
                            value: "1825",
                            label: "5 Years"
                        }].map((function(e) {
                            return m.a.createElement(z.a, {
                                key: e.value,
                                onClick: function() {
                                    return O(e.value)
                                }
                            }, e.label)
                        })))),
                        startAdornment: m.a.createElement(R.a, {
                            position: "start"
                        }, m.a.createElement(V.a, null))
                    }
                })), m.a.createElement("div", {
                    className: "mb-3"
                }, m.a.createElement(C.a, {
                    fullWidth: !0,
                    disabled: !0,
                    value: _e.includes("0x") ? [].concat(Object(n.a)(_e.split("").slice(0, 8)), ["..."], Object(n.a)(_e.split("").slice(36))).join("") : "",
                    variant: "outlined",
                    id: "textfield-stake",
                    label: "Referral Address",
                    className: "font-weight-bold font-size-md",
                    placeholder: "Staking Referral",
                    InputProps: {
                        classes: {
                            input: "py-4 px-1 h-auto special-placeholder",
                            notchedOutline: "border-2"
                        },
                        endAdornment: m.a.createElement(R.a, {
                            position: "end"
                        }, m.a.createElement(j.a, {
                            size: "small",
                            onClick: function(e) {
                                fe(e.currentTarget)
                            },
                            className: "btn-neutral-dark d-flex align-items-center"
                        }, m.a.createElement("span", {
                            className: "btn-wrapper--label font-weight-bold"
                        }, "ADDY"), m.a.createElement("span", {
                            className: "btn-wrapper--icon d-flex"
                        }, m.a.createElement(N.a, {
                            icon: ["fas", "chevron-down"],
                            className: "opacity-8 font-size-xs ml-1"
                        }))), m.a.createElement(D.a, {
                            anchorEl: be,
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "center",
                                horizontal: "center"
                            },
                            transformOrigin: {
                                vertical: "center",
                                horizontal: "center"
                            },
                            onChange: P,
                            open: Boolean(be),
                            classes: {
                                list: "p-0"
                            },
                            onClose: function() {
                                fe(null)
                            }
                        }, [{
                            value: 1,
                            label: "Wise Team Referral"
                        }, {
                            value: 2,
                            label: "Latest CM Referral"
                        }, {
                            value: 3,
                            label: "Random CM Referral"
                        }].map((function(e) {
                            return m.a.createElement(z.a, {
                                key: e.value,
                                onClick: function() {
                                    return P(e.value)
                                }
                            }, e.label)
                        })))),
                        startAdornment: m.a.createElement(R.a, {
                            position: "start"
                        }, m.a.createElement(K.a, null))
                    }
                })), m.a.createElement("div", {
                    className: "d-flex align-items-center mb-2"
                }, m.a.createElement(F.a, {
                    disabled: !0,
                    "aria-label": "Acknowledge",
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    onFocus: function(e) {
                        return e.stopPropagation()
                    },
                    control: m.a.createElement(L.a, {
                        className: "mr-1"
                    }),
                    label: "I would like convert this stake to Insurance Stake"
                }), m.a.createElement("div", {
                    className: "mb-1"
                }, m.a.createElement("div", {
                    className: "badge btn-pill badge-gray"
                }, "Coming Soon"))), m.a.createElement("div", {
                    className: "d-flex align-items-center justify-content-between"
                }, m.a.createElement("div", {
                    className: "d-flex"
                }, m.a.createElement(f.a, {
                    content: qt
                }))), m.a.createElement("div", {
                    className: "text-center py-4"
                }, "DONE" === Ht && m.a.createElement("div", {
                    onClick: function() {
                        G.current && (Ve(null), Qt("NORMAL"))
                    }
                }, m.a.createElement(te, null)), m.a.createElement(j.a, {
                    onClick: Ct,
                    size: "large",
                    disabled: Tt,
                    className: Object(h.a)("py-3 px-4 btn-primary w-100", {
                        hidden: "DONE" === Ht
                    })
                }, m.a.createElement("span", {
                    className: "text-uppercase font-weight-bold"
                }, Ht), "Staking In Progress" === Ht ? m.a.createElement(t, {
                    size: 20
                }) : null), Ue && m.a.createElement("div", {
                    className: "mt-3"
                }, m.a.createElement("a", {
                    href: "".concat(ze.etherScan, "/tx/").concat(Ue),
                    target: "_blank"
                }, "DONE" === Ht ? "Transaction Completed" : "View Transaction", m.a.createElement(w.a, {
                    className: "ml-1"
                })))))), m.a.createElement(A.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex"
                }, m.a.createElement("div", {
                    className: "p-1"
                }, m.a.createElement("div", {
                    className: "text-center"
                }, m.a.createElement("h1", {
                    className: "font-size-xxl mb-1 font-weight-bold"
                }, "Staking Summary"), m.a.createElement("p", {
                    className: "mb-0 text-black-50"
                }, "Estimated SHRS for opening new stake")), m.a.createElement(I.a, {
                    className: "pb-0 mt-2"
                }, m.a.createElement("div", {
                    className: "d-flex align-items-center justify-content-between py-3"
                }, m.a.createElement("div", {
                    className: "font-size-md d-flex align-items-center"
                }, m.a.createElement(N.a, {
                    icon: ["fas", "angle-double-right"],
                    className: "font-size-lg d-block mr-3 text-dark opacity-5"
                }), "Staking Shares"), m.a.createElement("div", {
                    className: "font-weight-bold text-black-50 font-size-lg d-flex align-items-center"
                }, m.a.createElement("div", null, pe ? m.a.createElement("span", null, (ut / et).toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })) : m.a.createElement("span", null, (pt / et).toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })), " SHRS"), m.a.createElement("div", null, m.a.createElement(T.a, {
                    title: "Shares determine your stakes daily reward",
                    placement: "left",
                    arrow: !0
                }, m.a.createElement("a", {
                    href: "/docs#sec-2-3-5",
                    target: "_blank"
                }, m.a.createElement(j.a, {
                    className: "p-0 d-30 ml-2 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, m.a.createElement(N.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-xs"
                }))))))), m.a.createElement("div", {
                    className: "divider my-3"
                }), m.a.createElement("div", {
                    className: "d-flex font-size-md align-items-center justify-content-between py-3"
                }, m.a.createElement("div", {
                    className: "d-flex align-items-center"
                }, m.a.createElement(N.a, {
                    icon: ["fas", "angle-double-right"],
                    className: "font-size-lg d-block mr-3 text-dark opacity-5"
                }), "Duration Bonus"), m.a.createElement("div", {
                    className: "font-weight-bold text-success font-size-lg d-flex align-items-center"
                }, m.a.createElement("div", null, "+", nt.toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }), "%"), m.a.createElement("div", null, m.a.createElement(T.a, {
                    title: "Longer duration grants larger bonus",
                    placement: "left",
                    arrow: !0
                }, m.a.createElement("a", {
                    href: "/docs#sec-2-3-5",
                    target: "_blank"
                }, m.a.createElement(j.a, {
                    className: "p-0 d-30 ml-2 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, m.a.createElement(N.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-xs"
                }))))))), m.a.createElement("div", {
                    className: "divider my-3"
                }), m.a.createElement("div", {
                    className: "d-flex font-size-md align-items-center justify-content-between py-3"
                }, m.a.createElement("div", {
                    className: "d-flex align-items-center"
                }, m.a.createElement(N.a, {
                    icon: ["fas", "angle-double-right"],
                    className: "font-size-lg d-block mr-3 text-dark opacity-5"
                }), "Referral Bonus"), m.a.createElement("div", {
                    className: "font-weight-bold text-success font-size-lg d-flex align-items-center"
                }, m.a.createElement("div", null, "+", ct.toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }), "%"), m.a.createElement("div", null, m.a.createElement(T.a, {
                    title: "Using referral address gives +10% bonus",
                    placement: "left",
                    arrow: !0
                }, m.a.createElement("a", {
                    href: "/docs#sec-2-3-5",
                    target: "_blank"
                }, m.a.createElement(j.a, {
                    className: "p-0 d-30 ml-2 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, m.a.createElement(N.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-xs"
                }))))))), m.a.createElement("div", {
                    className: "divider my-3"
                }), m.a.createElement("div", {
                    className: "d-flex align-items-center justify-content-between py-3"
                }, m.a.createElement("div", {
                    className: "d-flex font-size-md align-items-center"
                }, m.a.createElement(N.a, {
                    icon: ["fas", "receipt"],
                    className: "font-size-lg d-block mr-3 text-dark opacity-5"
                }), m.a.createElement("b", null, "Total Estimated Shares")), m.a.createElement("div", {
                    className: "font-weight-bold text-primary font-size-lg d-flex align-items-center"
                }, m.a.createElement("div", null, pe ? m.a.createElement("span", null, (ut / et * (100 + ct + nt) / 100).toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })) : m.a.createElement("span", null, (pt / et * (100 + ct + nt) / 100).toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })), " SHRS"), m.a.createElement("div", null, m.a.createElement(T.a, {
                    title: "Final amount based on all bonuses",
                    placement: "left",
                    arrow: !0
                }, m.a.createElement("a", {
                    href: "/docs#sec-2-3-5",
                    target: "_blank"
                }, m.a.createElement(j.a, {
                    className: "p-0 d-30 ml-2 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, m.a.createElement(N.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-xs"
                }))))))), m.a.createElement("div", {
                    className: "divider my-3"
                })), m.a.createElement(M.a, {
                    component: "div",
                    className: "list-group-flush mb-2"
                }, m.a.createElement(_.a, {
                    className: "py-2 border-0"
                }, m.a.createElement("div", {
                    className: "align-box-row w-100"
                }, m.a.createElement("div", {
                    className: "mr-3"
                }, m.a.createElement("div", {
                    className: "bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm"
                }, m.a.createElement(N.a, {
                    icon: ["fas", "calendar-times"]
                }))), m.a.createElement("div", null, m.a.createElement("div", {
                    className: "font-weight-bold d-block opacity-8"
                }, "Regular Staking"), m.a.createElement("div", {
                    className: "text-dark opacity-5"
                }, "Regular stakes are subject to penalties if ended pre-maturely. Penalties span between 90% and 10%. ", m.a.createElement("span", {
                    className: "badge btn-pill badge-gray"
                }, "Learn More"))))), m.a.createElement(_.a, {
                    className: "py-2 border-0 hidden"
                }, m.a.createElement("div", {
                    className: "align-box-row w-100"
                }, m.a.createElement("div", {
                    className: "mr-3"
                }, m.a.createElement("div", {
                    className: "bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm"
                }, m.a.createElement(N.a, {
                    icon: ["far", "object-group"]
                }))), m.a.createElement("div", null, m.a.createElement("div", {
                    className: "font-weight-bold d-block opacity-8"
                }, "Insurance Staking"), m.a.createElement("div", {
                    className: "text-dark opacity-5"
                }, "Dislike men who are so beguiled and demoralized by the charms.")))), m.a.createElement(_.a, {
                    className: "py-2 border-0 hidden"
                }, m.a.createElement("div", {
                    className: "align-box-row w-100"
                }, m.a.createElement("div", {
                    className: "mr-3"
                }, m.a.createElement("div", {
                    className: "bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm"
                }, m.a.createElement(N.a, {
                    icon: ["far", "chart-bar"]
                }))), m.a.createElement("div", null, m.a.createElement("div", {
                    className: "font-weight-bold d-block opacity-8"
                }, "Collateral Staking"), m.a.createElement("div", {
                    className: "text-dark opacity-5"
                }, "Pleasure of the moment, so blinded by desire, that they foresee.")))))))))))))
            }))
        }
    }
]);