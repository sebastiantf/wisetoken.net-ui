(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [45], {
        1004: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, "default", (function() {
                return h
            }));
            var n = t(25),
                r = t(0),
                c = t.n(r),
                l = t(749),
                i = t(9),
                o = t(726),
                s = t(18),
                d = t(6),
                m = t(7),
                u = t(11),
                p = t(12),
                b = t(733),
                v = t(91),
                E = t.n(v),
                f = t(100),
                g = function(e) {
                    Object(u.a)(t, e);
                    var a = Object(p.a)(t);

                    function t() {
                        return Object(d.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(m.a)(t, [{
                        key: "render",
                        value: function() {
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement(E.a, {
                                className: "docs-overflow-visible"
                            }, c.a.createElement("div", {
                                className: "card-header rounded-0 bg-white px-0 px-lg-3 py-1 border-bottom"
                            }, c.a.createElement("div", {
                                className: "py-0 w-100"
                            }, c.a.createElement(b.a, {
                                container: !0,
                                spacing: 6
                            }, c.a.createElement(b.a, {
                                item: !0,
                                md: 12,
                                lg: 12
                            }, c.a.createElement("div", {
                                className: "dashboard-header mt-5 pt-5"
                            }, c.a.createElement(f.c, {
                                titleHeading: "Gas Refunds",
                                titleDescription: "COMING SOON",
                                titleIcon: "LocalGasStationTwoToneIcon"
                            }))))))))
                        }
                    }]), t
                }(r.Component);

            function h() {
                l.a.initialize("UA-168804464-1"), l.a.pageview(window.location.pathname + window.location.search);
                var e = Object(r.useState)(!1),
                    a = Object(n.a)(e, 2),
                    t = a[0],
                    d = a[1],
                    m = function() {
                        return d(!t)
                    };
                return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                    className: "d-block d-lg-flex app-inner-content-layout app-inner-content-layout-fixed"
                }, c.a.createElement("div", {
                    className: "btn-md-pane d-lg-none px-4 order-0"
                }, c.a.createElement(o.a, {
                    onClick: m,
                    size: "large",
                    className: "btn-primary p-0 btn-icon d-40"
                }, c.a.createElement(s.a, {
                    icon: ["fas", "bookmark"]
                }))), c.a.createElement("div", {
                    className: "app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary"
                }, c.a.createElement(g, null)), c.a.createElement("div", {
                    onClick: m,
                    className: Object(i.a)("sidebar-inner-layout-overlay", {
                        active: t
                    })
                })))
            }
        }
    }
]);