(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [13], {
        935: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return v
            }));
            var n = a(25),
                s = a(0),
                r = a.n(s),
                i = a(749),
                l = a(18),
                c = a(766),
                o = a(726),
                d = a(243),
                m = a.n(d),
                p = a(345),
                f = {
                    id: "app.labels.yourReferralLink",
                    defaultMessage: "Your Referral Link"
                },
                u = {
                    id: "app.labels.copyLink",
                    defaultMessage: "Copy Link"
                },
                b = {
                    id: "app.labels.copied",
                    defaultMessage: "Copied"
                };

            function v(e) {
                var t = e.v;
                i.a.modalview("Referrals");
                var a = Object(p.a)().formatMessage,
                    d = Object(s.useState)(a(u)),
                    v = Object(n.a)(d, 2),
                    g = v[0],
                    w = v[1],
                    h = Object(s.useState)("btn-primary"),
                    E = Object(n.a)(h, 2),
                    N = E[0],
                    k = E[1];
                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(c.a, {
                    className: "bg-white rounded mb-5 mb-lg-0"
                }, r.a.createElement("div", {
                    className: "card-tr-actions"
                }, r.a.createElement("a", {
                    href: "/docs#sec-2-2-3",
                    target: "_blank"
                }, r.a.createElement(o.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, r.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))), r.a.createElement("div", {
                    className: "text-center rounded-top px-5 pt-5 pb-4"
                }, r.a.createElement("div", {
                    className: "font-weight-bold display-3"
                }, a(f)), r.a.createElement("p", {
                    className: "text-black-50 line-height-2 font-size-md px-3 mt-3 px-xl-5 mb-0"
                }, "Stakes opened through this link will generate rewards for staker and referrer. To participate you must have CM referrer status by referring total of $10,000 equivalent in WISE stakes."), r.a.createElement("p", {
                    className: "text-black-50 line-height-2 font-size-md px-3 mt-3 px-xl-5 mb-0"
                }, "Note: referrer rewards are only generated for stakes with minimum duration of 365 days.")), r.a.createElement("div", {
                    className: "divider"
                }), r.a.createElement("div", {
                    className: "pl-5 pr-5 pt-1"
                }, r.a.createElement("div", {
                    className: "align-items-center justify-content-between pt-3"
                }, r.a.createElement("div", {
                    className: "font-weight-bold font-size-lg text-center select-all overflow-elipsis"
                }, "https://wisetoken.net/?w=", t)), r.a.createElement("div", {
                    className: "divider opacity-6 mt-4"
                })), r.a.createElement("div", {
                    className: "divider"
                }), r.a.createElement("div", {
                    className: "d-flex bg-secondary rounded-bottom align-items-center justify-content-between py-4 px-5"
                }, r.a.createElement("div", {
                    className: "w-100"
                }, r.a.createElement(o.a, {
                    onClick: function() {
                        m()("https://wisetoken.net/?w=".concat(t)), w(a(b)), k("btn-wise")
                    },
                    className: "w-100 font-weight-bold ".concat(N, " text-uppercase rounded-sm font-weight-bold hover-scale-sm px-4 font-size-md"),
                    size: "large"
                }, g))))))
            }
        }
    }
]);