/*! For license information please see 21.6a7b5840.chunk.js.LICENSE.txt */
(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [21, 38], {
        1012: function(t, e, r) {
            "use strict";
            var i = r(1),
                n = r(13),
                a = r(0),
                s = (r(10), r(9)),
                o = r(977),
                l = r(978),
                h = r(1009),
                p = r(1007),
                c = r(976),
                f = r(775),
                u = r(760),
                m = r(23),
                d = a.forwardRef((function(t, e) {
                    var r = t.children,
                        o = t.classes,
                        l = t.className,
                        h = t.component,
                        p = void 0 === h ? "p" : h,
                        c = (t.disabled, t.error, t.filled, t.focused, t.margin, t.required, t.variant, Object(n.a)(t, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"])),
                        m = Object(u.a)(),
                        d = Object(f.a)({
                            props: t,
                            muiFormControl: m,
                            states: ["variant", "margin", "disabled", "error", "filled", "focused", "required"]
                        });
                    return a.createElement(p, Object(i.a)({
                        className: Object(s.a)(o.root, ("filled" === d.variant || "outlined" === d.variant) && o.contained, l, d.disabled && o.disabled, d.error && o.error, d.filled && o.filled, d.focused && o.focused, d.required && o.required, "dense" === d.margin && o.marginDense),
                        ref: e
                    }, c), " " === r ? a.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: "&#8203;"
                        }
                    }) : r)
                })),
                y = Object(m.a)((function(t) {
                    return {
                        root: Object(i.a)(Object(i.a)({
                            color: t.palette.text.secondary
                        }, t.typography.caption), {}, {
                            textAlign: "left",
                            marginTop: 3,
                            margin: 0,
                            "&$disabled": {
                                color: t.palette.text.disabled
                            },
                            "&$error": {
                                color: t.palette.error.main
                            }
                        }),
                        error: {},
                        disabled: {},
                        marginDense: {
                            marginTop: 4
                        },
                        contained: {
                            marginLeft: 14,
                            marginRight: 14
                        },
                        focused: {},
                        filled: {},
                        required: {}
                    }
                }), {
                    name: "MuiFormHelperText"
                })(d),
                g = r(997),
                v = {
                    standard: o.a,
                    filled: l.a,
                    outlined: h.a
                },
                x = a.forwardRef((function(t, e) {
                    var r = t.autoComplete,
                        o = t.autoFocus,
                        l = void 0 !== o && o,
                        h = t.children,
                        f = t.classes,
                        u = t.className,
                        m = t.color,
                        d = void 0 === m ? "primary" : m,
                        x = t.defaultValue,
                        b = t.disabled,
                        P = void 0 !== b && b,
                        E = t.error,
                        _ = void 0 !== E && E,
                        k = t.FormHelperTextProps,
                        S = t.fullWidth,
                        C = void 0 !== S && S,
                        A = t.helperText,
                        T = t.hiddenLabel,
                        D = t.id,
                        w = t.InputLabelProps,
                        M = t.inputProps,
                        F = t.InputProps,
                        I = t.inputRef,
                        V = t.label,
                        O = t.multiline,
                        R = void 0 !== O && O,
                        B = t.name,
                        L = t.onBlur,
                        N = t.onChange,
                        G = t.onFocus,
                        z = t.placeholder,
                        j = t.required,
                        H = void 0 !== j && j,
                        W = t.rows,
                        q = t.rowsMax,
                        U = t.select,
                        $ = void 0 !== U && U,
                        K = t.SelectProps,
                        Y = t.type,
                        X = t.value,
                        Z = t.variant,
                        J = void 0 === Z ? "standard" : Z,
                        Q = Object(n.a)(t, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);
                    var tt = {};
                    if ("outlined" === J && (w && "undefined" !== typeof w.shrink && (tt.notched = w.shrink), V)) {
                        var et, rt = null !== (et = null === w || void 0 === w ? void 0 : w.required) && void 0 !== et ? et : H;
                        tt.label = a.createElement(a.Fragment, null, V, rt && "\xa0*")
                    }
                    $ && (K && K.native || (tt.id = void 0), tt["aria-describedby"] = void 0);
                    var it = A && D ? "".concat(D, "-helper-text") : void 0,
                        nt = V && D ? "".concat(D, "-label") : void 0,
                        at = v[J],
                        st = a.createElement(at, Object(i.a)({
                            "aria-describedby": it,
                            autoComplete: r,
                            autoFocus: l,
                            defaultValue: x,
                            fullWidth: C,
                            multiline: R,
                            name: B,
                            rows: W,
                            rowsMax: q,
                            type: Y,
                            value: X,
                            id: D,
                            inputRef: I,
                            onBlur: L,
                            onChange: N,
                            onFocus: G,
                            placeholder: z,
                            inputProps: M
                        }, tt, F));
                    return a.createElement(c.a, Object(i.a)({
                        className: Object(s.a)(f.root, u),
                        disabled: P,
                        error: _,
                        fullWidth: C,
                        hiddenLabel: T,
                        ref: e,
                        required: H,
                        color: d,
                        variant: J
                    }, Q), V && a.createElement(p.a, Object(i.a)({
                        htmlFor: D,
                        id: nt
                    }, w), V), $ ? a.createElement(g.a, Object(i.a)({
                        "aria-describedby": it,
                        id: D,
                        labelId: nt,
                        value: X,
                        input: st
                    }, K), h) : st, A && a.createElement(y, Object(i.a)({
                        id: it
                    }, k), A))
                }));
            e.a = Object(m.a)({
                root: {}
            }, {
                name: "MuiTextField"
            })(x)
        },
        763: function(t, e, r) {
            "use strict";
            var i = r(1),
                n = r(13),
                a = r(36),
                s = r(0),
                o = (r(10), r(9)),
                l = r(23),
                h = r(34),
                p = s.forwardRef((function(t, e) {
                    var r = t.classes,
                        a = t.className,
                        l = t.component,
                        p = void 0 === l ? "div" : l,
                        c = t.disableGutters,
                        f = void 0 !== c && c,
                        u = t.fixed,
                        m = void 0 !== u && u,
                        d = t.maxWidth,
                        y = void 0 === d ? "lg" : d,
                        g = Object(n.a)(t, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);
                    return s.createElement(p, Object(i.a)({
                        className: Object(o.a)(r.root, a, m && r.fixed, f && r.disableGutters, !1 !== y && r["maxWidth".concat(Object(h.a)(String(y)))]),
                        ref: e
                    }, g))
                }));
            e.a = Object(l.a)((function(t) {
                return {
                    root: Object(a.a)({
                        width: "100%",
                        marginLeft: "auto",
                        boxSizing: "border-box",
                        marginRight: "auto",
                        paddingLeft: t.spacing(2),
                        paddingRight: t.spacing(2),
                        display: "block"
                    }, t.breakpoints.up("sm"), {
                        paddingLeft: t.spacing(3),
                        paddingRight: t.spacing(3)
                    }),
                    disableGutters: {
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    fixed: Object.keys(t.breakpoints.values).reduce((function(e, r) {
                        var i = t.breakpoints.values[r];
                        return 0 !== i && (e[t.breakpoints.up(r)] = {
                            maxWidth: i
                        }), e
                    }), {}),
                    maxWidthXs: Object(a.a)({}, t.breakpoints.up("xs"), {
                        maxWidth: Math.max(t.breakpoints.values.xs, 444)
                    }),
                    maxWidthSm: Object(a.a)({}, t.breakpoints.up("sm"), {
                        maxWidth: t.breakpoints.values.sm
                    }),
                    maxWidthMd: Object(a.a)({}, t.breakpoints.up("md"), {
                        maxWidth: t.breakpoints.values.md
                    }),
                    maxWidthLg: Object(a.a)({}, t.breakpoints.up("lg"), {
                        maxWidth: t.breakpoints.values.lg
                    }),
                    maxWidthXl: Object(a.a)({}, t.breakpoints.up("xl"), {
                        maxWidth: t.breakpoints.values.xl
                    })
                }
            }), {
                name: "MuiContainer"
            })(p)
        },
        764: function(t, e, r) {
            "use strict";
            var i = r(13),
                n = r(36),
                a = r(1),
                s = r(0),
                o = (r(10), r(9)),
                l = r(23),
                h = r(730),
                p = s.forwardRef((function(t, e) {
                    var r, n = t.classes,
                        l = t.className,
                        p = t.component,
                        c = void 0 === p ? "li" : p,
                        f = t.disableGutters,
                        u = void 0 !== f && f,
                        m = t.ListItemClasses,
                        d = t.role,
                        y = void 0 === d ? "menuitem" : d,
                        g = t.selected,
                        v = t.tabIndex,
                        x = Object(i.a)(t, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);
                    return t.disabled || (r = void 0 !== v ? v : -1), s.createElement(h.a, Object(a.a)({
                        button: !0,
                        role: y,
                        tabIndex: r,
                        component: c,
                        selected: g,
                        disableGutters: u,
                        classes: Object(a.a)({
                            dense: n.dense
                        }, m),
                        className: Object(o.a)(n.root, l, g && n.selected, !u && n.gutters),
                        ref: e
                    }, x))
                }));
            e.a = Object(l.a)((function(t) {
                return {
                    root: Object(a.a)(Object(a.a)({}, t.typography.body1), {}, Object(n.a)({
                        minHeight: 48,
                        paddingTop: 6,
                        paddingBottom: 6,
                        boxSizing: "border-box",
                        width: "auto",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }, t.breakpoints.up("sm"), {
                        minHeight: "auto"
                    })),
                    gutters: {},
                    selected: {},
                    dense: Object(a.a)(Object(a.a)({}, t.typography.body2), {}, {
                        minHeight: "auto"
                    })
                }
            }), {
                name: "MuiMenuItem"
            })(p)
        },
        769: function(t, e, r) {
            "use strict";
            var i = r(1),
                n = r(13),
                a = r(0),
                s = (r(10), r(9)),
                o = r(23),
                l = r(34);

            function h(t) {
                var e, r, i;
                return e = t, r = 0, i = 1, t = (Math.min(Math.max(r, e), i) - r) / (i - r), t = (t -= 1) * t * t + 1
            }
            var p = a.forwardRef((function(t, e) {
                var r, o = t.classes,
                    p = t.className,
                    c = t.color,
                    f = void 0 === c ? "primary" : c,
                    u = t.disableShrink,
                    m = void 0 !== u && u,
                    d = t.size,
                    y = void 0 === d ? 40 : d,
                    g = t.style,
                    v = t.thickness,
                    x = void 0 === v ? 3.6 : v,
                    b = t.value,
                    P = void 0 === b ? 0 : b,
                    E = t.variant,
                    _ = void 0 === E ? "indeterminate" : E,
                    k = Object(n.a)(t, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                    S = {},
                    C = {},
                    A = {};
                if ("determinate" === _ || "static" === _) {
                    var T = 2 * Math.PI * ((44 - x) / 2);
                    S.strokeDasharray = T.toFixed(3), A["aria-valuenow"] = Math.round(P), "static" === _ ? (S.strokeDashoffset = "".concat(((100 - P) / 100 * T).toFixed(3), "px"), C.transform = "rotate(-90deg)") : (S.strokeDashoffset = "".concat((r = (100 - P) / 100, r * r * T).toFixed(3), "px"), C.transform = "rotate(".concat((270 * h(P / 70)).toFixed(3), "deg)"))
                }
                return a.createElement("div", Object(i.a)({
                    className: Object(s.a)(o.root, p, "inherit" !== f && o["color".concat(Object(l.a)(f))], {
                        indeterminate: o.indeterminate,
                        static: o.static
                    }[_]),
                    style: Object(i.a)(Object(i.a)({
                        width: y,
                        height: y
                    }, C), g),
                    ref: e,
                    role: "progressbar"
                }, A, k), a.createElement("svg", {
                    className: o.svg,
                    viewBox: "".concat(22, " ").concat(22, " ").concat(44, " ").concat(44)
                }, a.createElement("circle", {
                    className: Object(s.a)(o.circle, m && o.circleDisableShrink, {
                        indeterminate: o.circleIndeterminate,
                        static: o.circleStatic
                    }[_]),
                    style: S,
                    cx: 44,
                    cy: 44,
                    r: (44 - x) / 2,
                    fill: "none",
                    strokeWidth: x
                })))
            }));
            e.a = Object(o.a)((function(t) {
                return {
                    root: {
                        display: "inline-block"
                    },
                    static: {
                        transition: t.transitions.create("transform")
                    },
                    indeterminate: {
                        animation: "$circular-rotate 1.4s linear infinite"
                    },
                    colorPrimary: {
                        color: t.palette.primary.main
                    },
                    colorSecondary: {
                        color: t.palette.secondary.main
                    },
                    svg: {
                        display: "block"
                    },
                    circle: {
                        stroke: "currentColor"
                    },
                    circleStatic: {
                        transition: t.transitions.create("stroke-dashoffset")
                    },
                    circleIndeterminate: {
                        animation: "$circular-dash 1.4s ease-in-out infinite",
                        strokeDasharray: "80px, 200px",
                        strokeDashoffset: "0px"
                    },
                    "@keyframes circular-rotate": {
                        "100%": {
                            transform: "rotate(360deg)"
                        }
                    },
                    "@keyframes circular-dash": {
                        "0%": {
                            strokeDasharray: "1px, 200px",
                            strokeDashoffset: "0px"
                        },
                        "50%": {
                            strokeDasharray: "100px, 200px",
                            strokeDashoffset: "-15px"
                        },
                        "100%": {
                            strokeDasharray: "100px, 200px",
                            strokeDashoffset: "-125px"
                        }
                    },
                    circleDisableShrink: {
                        animation: "none"
                    }
                }
            }), {
                name: "MuiCircularProgress",
                flip: !1
            })(p)
        },
        774: function(t, e, r) {
            "use strict";
            var i = r(1),
                n = r(13),
                a = r(0),
                s = (r(10), r(9)),
                o = r(23),
                l = a.forwardRef((function(t, e) {
                    var r = t.classes,
                        o = t.className,
                        l = t.component,
                        h = void 0 === l ? "div" : l,
                        p = Object(n.a)(t, ["classes", "className", "component"]);
                    return a.createElement(h, Object(i.a)({
                        className: Object(s.a)(r.root, o),
                        ref: e
                    }, p))
                }));
            e.a = Object(o.a)({
                root: {
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 24
                    }
                }
            }, {
                name: "MuiCardContent"
            })(l)
        },
        790: function(t, e, r) {
            "use strict";

            function i(t, e) {
                if (null == t) return {};
                var r, i, n = function(t, e) {
                    if (null == t) return {};
                    var r, i, n = {},
                        a = Object.keys(t);
                    for (i = 0; i < a.length; i++) r = a[i], e.indexOf(r) >= 0 || (n[r] = t[r]);
                    return n
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < a.length; i++) r = a[i], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                }
                return n
            }
            r.d(e, "a", (function() {
                return i
            }))
        },
        937: function(t, e, r) {
            "use strict";
            var i = r(0),
                n = r.n(i);

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function s() {
                return (s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                    }
                    return t
                }).apply(this, arguments)
            }

            function o(t) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p() {}

            function c() {}
            c.resetWarningCache = p;
            var f = function(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }((function(t) {
                t.exports = function() {
                    function t(t, e, r, i, n, a) {
                        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw s.name = "Invariant Violation", s
                        }
                    }

                    function e() {
                        return t
                    }
                    t.isRequired = t;
                    var r = {
                        array: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: c,
                        resetWarningCache: p
                    };
                    return r.PropTypes = r, r
                }()
            }));

            function u() {}

            function m(t) {
                return !!(t || "").match(/\d/)
            }

            function d(t) {
                return t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function y(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = "-" === t[0],
                    i = r && e,
                    n = (t = t.replace("-", "")).split("."),
                    a = n[0],
                    s = n[1] || "";
                return {
                    beforeDecimal: a,
                    afterDecimal: s,
                    hasNagation: r,
                    addNegation: i
                }
            }

            function g(t, e, r) {
                for (var i = "", n = r ? "0" : "", a = 0; a <= e - 1; a++) i += t[a] || n;
                return i
            }

            function v(t, e) {
                if (t.value = t.value, null !== t) {
                    if (t.createTextRange) {
                        var r = t.createTextRange();
                        return r.move("character", e), r.select(), !0
                    }
                    return t.selectionStart || 0 === t.selectionStart ? (t.focus(), t.setSelectionRange(e, e), !0) : (t.focus(), !1)
                }
            }

            function x(t, e, r) {
                return Math.min(Math.max(t, e), r)
            }

            function b(t) {
                return Math.max(t.selectionStart, t.selectionEnd)
            }
            var P = {
                    thousandSeparator: f.oneOfType([f.string, f.oneOf([!0])]),
                    decimalSeparator: f.string,
                    allowedDecimalSeparators: f.arrayOf(f.string),
                    thousandsGroupStyle: f.oneOf(["thousand", "lakh", "wan"]),
                    decimalScale: f.number,
                    fixedDecimalScale: f.bool,
                    displayType: f.oneOf(["input", "text"]),
                    prefix: f.string,
                    suffix: f.string,
                    format: f.oneOfType([f.string, f.func]),
                    removeFormatting: f.func,
                    mask: f.oneOfType([f.string, f.arrayOf(f.string)]),
                    value: f.oneOfType([f.number, f.string]),
                    defaultValue: f.oneOfType([f.number, f.string]),
                    isNumericString: f.bool,
                    customInput: f.elementType,
                    allowNegative: f.bool,
                    allowEmptyFormatting: f.bool,
                    allowLeadingZeros: f.bool,
                    onValueChange: f.func,
                    onKeyDown: f.func,
                    onMouseUp: f.func,
                    onChange: f.func,
                    onFocus: f.func,
                    onBlur: f.func,
                    type: f.oneOf(["text", "tel", "password"]),
                    isAllowed: f.func,
                    renderText: f.func,
                    getInputRef: f.oneOfType([f.func, f.shape({
                        current: f.any
                    })])
                },
                E = {
                    displayType: "input",
                    decimalSeparator: ".",
                    thousandsGroupStyle: "thousand",
                    fixedDecimalScale: !1,
                    prefix: "",
                    suffix: "",
                    allowNegative: !0,
                    allowEmptyFormatting: !1,
                    allowLeadingZeros: !1,
                    isNumericString: !1,
                    type: "text",
                    onValueChange: u,
                    onChange: u,
                    onKeyDown: u,
                    onMouseUp: u,
                    onFocus: u,
                    onBlur: u,
                    isAllowed: function() {
                        return !0
                    }
                },
                _ = function(t) {
                    function e(t) {
                        var r, i, n;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), i = this, r = !(n = o(e).call(this, t)) || "object" !== typeof n && "function" !== typeof n ? h(i) : n;
                        var a = t.defaultValue;
                        r.validateProps();
                        var s = r.formatValueProp(a);
                        return r.state = {
                            value: s,
                            numAsString: r.removeFormatting(s)
                        }, r.selectionBeforeInput = {
                            selectionStart: 0,
                            selectionEnd: 0
                        }, r.onChange = r.onChange.bind(h(r)), r.onKeyDown = r.onKeyDown.bind(h(r)), r.onMouseUp = r.onMouseUp.bind(h(r)), r.onFocus = r.onFocus.bind(h(r)), r.onBlur = r.onBlur.bind(h(r)), r
                    }
                    var r, i, p;
                    return function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e)
                    }(e, t), r = e, (i = [{
                        key: "componentDidUpdate",
                        value: function(t) {
                            this.updateValueIfRequired(t)
                        }
                    }, {
                        key: "updateValueIfRequired",
                        value: function(t) {
                            var e = this.props,
                                r = this.state,
                                i = this.focusedElm,
                                n = r.value,
                                a = r.numAsString,
                                s = void 0 === a ? "" : a;
                            if (t !== e) {
                                this.validateProps();
                                var o = this.formatNumString(s),
                                    l = void 0 === e.value ? o : this.formatValueProp(),
                                    h = this.removeFormatting(l),
                                    p = parseFloat(h),
                                    c = parseFloat(s);
                                (isNaN(p) && isNaN(c) || p === c) && o === n && (null !== i || l === n) || this.updateValue({
                                    formattedValue: l,
                                    numAsString: h,
                                    input: i
                                })
                            }
                        }
                    }, {
                        key: "getFloatString",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = this.props.decimalScale,
                                r = this.getSeparators(),
                                i = r.decimalSeparator,
                                n = this.getNumberRegex(!0),
                                a = "-" === t[0];
                            a && (t = t.replace("-", "")), i && 0 === e && (t = t.split(i)[0]);
                            var s = (t = (t.match(n) || []).join("").replace(i, ".")).indexOf(".");
                            return -1 !== s && (t = "".concat(t.substring(0, s), ".").concat(t.substring(s + 1, t.length).replace(new RegExp(d(i), "g"), ""))), a && (t = "-" + t), t
                        }
                    }, {
                        key: "getNumberRegex",
                        value: function(t, e) {
                            var r = this.props,
                                i = r.format,
                                n = r.decimalScale,
                                a = this.getSeparators().decimalSeparator;
                            return new RegExp("\\d" + (!a || 0 === n || e || i ? "" : "|" + d(a)), t ? "g" : void 0)
                        }
                    }, {
                        key: "getSeparators",
                        value: function() {
                            var t = this.props.decimalSeparator,
                                e = this.props,
                                r = e.thousandSeparator,
                                i = e.allowedDecimalSeparators;
                            return !0 === r && (r = ","), i || (i = [t, "."]), {
                                decimalSeparator: t,
                                thousandSeparator: r,
                                allowedDecimalSeparators: i
                            }
                        }
                    }, {
                        key: "getMaskAtIndex",
                        value: function(t) {
                            var e = this.props.mask,
                                r = void 0 === e ? " " : e;
                            return "string" === typeof r ? r : r[t] || " "
                        }
                    }, {
                        key: "getValueObject",
                        value: function(t, e) {
                            var r = parseFloat(e);
                            return {
                                formattedValue: t,
                                value: e,
                                floatValue: isNaN(r) ? void 0 : r
                            }
                        }
                    }, {
                        key: "validateProps",
                        value: function() {
                            var t = this.props.mask,
                                e = this.getSeparators(),
                                r = e.decimalSeparator,
                                i = e.thousandSeparator;
                            if (r === i) throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(i, ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(r, " (default value for decimalSeparator is .)\n       "));
                            if (t && ("string" === t ? t : t.toString()).match(/\d/g)) throw new Error("\n          Mask ".concat(t, " should not contain numeric character;\n        "))
                        }
                    }, {
                        key: "setPatchedCaretPosition",
                        value: function(t, e, r) {
                            v(t, e), setTimeout((function() {
                                t.value === r && v(t, e)
                            }), 0)
                        }
                    }, {
                        key: "correctCaretPosition",
                        value: function(t, e, r) {
                            var i = this.props,
                                n = i.prefix,
                                a = i.suffix,
                                s = i.format;
                            if ("" === t) return 0;
                            if (e = x(e, 0, t.length), !s) {
                                var o = "-" === t[0];
                                return x(e, n.length + (o ? 1 : 0), t.length - a.length)
                            }
                            if ("function" === typeof s) return e;
                            if ("#" === s[e] && m(t[e])) return e;
                            if ("#" === s[e - 1] && m(t[e - 1])) return e;
                            var l = s.indexOf("#");
                            e = x(e, l, s.lastIndexOf("#") + 1);
                            for (var h = s.substring(e, s.length).indexOf("#"), p = e, c = e + (-1 === h ? 0 : h); p > l && ("#" !== s[p] || !m(t[p]));) p -= 1;
                            return !m(t[c]) || "left" === r && e !== l || e - p < c - e ? m(t[p]) ? p + 1 : p : c
                        }
                    }, {
                        key: "getCaretPosition",
                        value: function(t, e, r) {
                            var i, n, a = this.props.format,
                                s = this.state.value,
                                o = this.getNumberRegex(!0),
                                l = (t.match(o) || []).join(""),
                                h = (e.match(o) || []).join("");
                            for (i = 0, n = 0; n < r; n++) {
                                var p = t[n] || "",
                                    c = e[i] || "";
                                if ((p.match(o) || p === c) && ("0" !== p || !c.match(o) || "0" === c || l.length === h.length)) {
                                    for (; p !== e[i] && i < e.length;) i++;
                                    i++
                                }
                            }
                            return "string" !== typeof a || s || (i = e.length), i = this.correctCaretPosition(e, i)
                        }
                    }, {
                        key: "removePrefixAndSuffix",
                        value: function(t) {
                            var e = this.props,
                                r = e.format,
                                i = e.prefix,
                                n = e.suffix;
                            if (!r && t) {
                                var a = "-" === t[0];
                                a && (t = t.substring(1, t.length));
                                var s = (t = i && 0 === t.indexOf(i) ? t.substring(i.length, t.length) : t).lastIndexOf(n);
                                t = n && -1 !== s && s === t.length - n.length ? t.substring(0, s) : t, a && (t = "-" + t)
                            }
                            return t
                        }
                    }, {
                        key: "removePatternFormatting",
                        value: function(t) {
                            for (var e = this.props.format.split("#").filter((function(t) {
                                    return "" !== t
                                })), r = 0, i = "", n = 0, a = e.length; n <= a; n++) {
                                var s = e[n] || "",
                                    o = n === a ? t.length : t.indexOf(s, r);
                                if (-1 === o) {
                                    i = t;
                                    break
                                }
                                i += t.substring(r, o), r = o + s.length
                            }
                            return (i.match(/\d/g) || []).join("")
                        }
                    }, {
                        key: "removeFormatting",
                        value: function(t) {
                            var e = this.props,
                                r = e.format,
                                i = e.removeFormatting;
                            return t ? (r ? t = "string" === typeof r ? this.removePatternFormatting(t) : "function" === typeof i ? i(t) : (t.match(/\d/g) || []).join("") : (t = this.removePrefixAndSuffix(t), t = this.getFloatString(t)), t) : t
                        }
                    }, {
                        key: "formatWithPattern",
                        value: function(t) {
                            for (var e = this.props.format, r = 0, i = e.split(""), n = 0, a = e.length; n < a; n++) "#" === e[n] && (i[n] = t[r] || this.getMaskAtIndex(r), r += 1);
                            return i.join("")
                        }
                    }, {
                        key: "formatAsNumber",
                        value: function(t) {
                            var e = this.props,
                                r = e.decimalScale,
                                i = e.fixedDecimalScale,
                                n = e.prefix,
                                a = e.suffix,
                                s = e.allowNegative,
                                o = e.thousandsGroupStyle,
                                l = this.getSeparators(),
                                h = l.thousandSeparator,
                                p = l.decimalSeparator,
                                c = -1 !== t.indexOf(".") || r && i,
                                f = y(t, s),
                                u = f.beforeDecimal,
                                m = f.afterDecimal,
                                d = f.addNegation;
                            return void 0 !== r && (m = g(m, r, i)), h && (u = function(t, e, r) {
                                var i = function(t) {
                                        switch (t) {
                                            case "lakh":
                                                return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                            case "wan":
                                                return /(\d)(?=(\d{4})+(?!\d))/g;
                                            case "thousand":
                                            default:
                                                return /(\d)(?=(\d{3})+(?!\d))/g
                                        }
                                    }(r),
                                    n = t.search(/[1-9]/);
                                return n = -1 === n ? t.length : n, t.substring(0, n) + t.substring(n, t.length).replace(i, "$1" + e)
                            }(u, h, o)), n && (u = n + u), a && (m += a), d && (u = "-" + u), t = u + (c && p || "") + m
                        }
                    }, {
                        key: "formatNumString",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = this.props,
                                r = e.format,
                                i = e.allowEmptyFormatting,
                                n = t;
                            return n = "" !== t || i ? "-" !== t || r ? "string" === typeof r ? this.formatWithPattern(n) : "function" === typeof r ? r(n) : this.formatAsNumber(n) : "-" : ""
                        }
                    }, {
                        key: "formatValueProp",
                        value: function(t) {
                            var e = this.props,
                                r = e.format,
                                i = e.decimalScale,
                                n = e.fixedDecimalScale,
                                a = e.allowEmptyFormatting,
                                s = this.props,
                                o = s.value,
                                l = void 0 === o ? t : o,
                                h = s.isNumericString,
                                p = !l && 0 !== l;
                            return p && a && (l = ""), p && !a ? "" : ("number" === typeof l && (l = l.toString(), h = !0), "Infinity" === l && h && (l = ""), h && !r && "number" === typeof i && (l = function(t, e, r) {
                                if (-1 !== ["", "-"].indexOf(t)) return t;
                                var i = -1 !== t.indexOf(".") && e,
                                    n = y(t),
                                    a = n.beforeDecimal,
                                    s = n.afterDecimal,
                                    o = n.hasNagation,
                                    l = parseFloat("0.".concat(s || "0")).toFixed(e).split("."),
                                    h = a.split("").reverse().reduce((function(t, e, r) {
                                        return t.length > r ? (Number(t[0]) + Number(e)).toString() + t.substring(1, t.length) : e + t
                                    }), l[0]),
                                    p = g(l[1] || "", Math.min(e, s.length), r),
                                    c = i ? "." : "";
                                return "".concat(o ? "-" : "").concat(h).concat(c).concat(p)
                            }(l, i, n)), h ? this.formatNumString(l) : this.formatInput(l))
                        }
                    }, {
                        key: "formatNegation",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = this.props.allowNegative,
                                r = new RegExp("(-)"),
                                i = new RegExp("(-)(.)*(-)"),
                                n = r.test(t),
                                a = i.test(t);
                            return t = t.replace(/-/g, ""), n && !a && e && (t = "-" + t), t
                        }
                    }, {
                        key: "formatInput",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = this.props.format;
                            return e || (t = this.removePrefixAndSuffix(t), t = this.formatNegation(t)), t = this.removeFormatting(t), this.formatNumString(t)
                        }
                    }, {
                        key: "isCharacterAFormat",
                        value: function(t, e) {
                            var r = this.props,
                                i = r.format,
                                n = r.prefix,
                                a = r.suffix,
                                s = r.decimalScale,
                                o = r.fixedDecimalScale,
                                l = this.getSeparators().decimalSeparator;
                            return "string" === typeof i && "#" !== i[t] || !(i || !(t < n.length || t >= e.length - a.length || s && o && e[t] === l))
                        }
                    }, {
                        key: "checkIfFormatGotDeleted",
                        value: function(t, e, r) {
                            for (var i = t; i < e; i++)
                                if (this.isCharacterAFormat(i, r)) return !0;
                            return !1
                        }
                    }, {
                        key: "correctInputValue",
                        value: function(t, e, r) {
                            var i = this.props,
                                n = i.format,
                                a = i.allowNegative,
                                s = i.prefix,
                                o = i.suffix,
                                l = i.decimalScale,
                                h = this.getSeparators(),
                                p = h.allowedDecimalSeparators,
                                c = h.decimalSeparator,
                                f = this.state.numAsString || "",
                                u = this.selectionBeforeInput,
                                m = u.selectionStart,
                                d = u.selectionEnd,
                                g = function(t, e) {
                                    for (var r = 0, i = 0, n = t.length, a = e.length; t[r] === e[r] && r < n;) r++;
                                    for (; t[n - 1 - i] === e[a - 1 - i] && a - i > r && n - i > r;) i++;
                                    return {
                                        start: r,
                                        end: n - i
                                    }
                                }(e, r),
                                v = g.start,
                                x = g.end;
                            if (!n && v === x && -1 !== p.indexOf(r[m])) {
                                var b = 0 === l ? "" : c;
                                return r.substr(0, m) + b + r.substr(m + 1, r.length)
                            }
                            var P = n ? 0 : s.length,
                                E = e.length - (n ? 0 : o.length);
                            if (r.length > e.length || !r.length || v === x || 0 === m && d === e.length || m === P && d === E) return r;
                            if (this.checkIfFormatGotDeleted(v, x, e) && (r = e), !n) {
                                var _ = this.removeFormatting(r),
                                    k = y(_, a),
                                    S = k.beforeDecimal,
                                    C = k.afterDecimal,
                                    A = k.addNegation,
                                    T = t < r.indexOf(c) + 1;
                                if (_.length < f.length && T && "" === S && !parseFloat(C)) return A ? "-" : ""
                            }
                            return r
                        }
                    }, {
                        key: "updateValue",
                        value: function(t) {
                            var e = t.formattedValue,
                                r = t.input,
                                i = t.setCaretPosition,
                                n = void 0 === i || i,
                                a = t.numAsString,
                                s = t.caretPos,
                                o = this.props.onValueChange,
                                l = this.state.value;
                            if (r)
                                if (n) {
                                    if (!s) {
                                        var h = t.inputValue || r.value,
                                            p = b(r);
                                        r.value = e, s = this.getCaretPosition(h, e, p)
                                    }
                                    this.setPatchedCaretPosition(r, s, e)
                                } else r.value = e;
                            void 0 === a && (a = this.removeFormatting(e)), e !== l && (this.setState({
                                value: e,
                                numAsString: a
                            }), o(this.getValueObject(e, a)))
                        }
                    }, {
                        key: "onChange",
                        value: function(t) {
                            var e = t.target,
                                r = e.value,
                                i = this.state,
                                n = this.props,
                                a = n.isAllowed,
                                s = i.value || "",
                                o = b(e);
                            r = this.correctInputValue(o, s, r);
                            var l = this.formatInput(r) || "",
                                h = this.removeFormatting(l);
                            a(this.getValueObject(l, h)) || (l = s), this.updateValue({
                                formattedValue: l,
                                numAsString: h,
                                inputValue: r,
                                input: e
                            }), n.onChange(t)
                        }
                    }, {
                        key: "onBlur",
                        value: function(t) {
                            var e = this.props,
                                r = this.state,
                                i = e.format,
                                n = e.onBlur,
                                a = e.allowLeadingZeros,
                                s = r.numAsString,
                                o = r.value;
                            if (this.focusedElm = null, this.focusTimeout && clearTimeout(this.focusTimeout), !i) {
                                isNaN(parseFloat(s)) && (s = ""), a || (s = function(t) {
                                    if (!t) return t;
                                    var e = "-" === t[0];
                                    e && (t = t.substring(1, t.length));
                                    var r = t.split("."),
                                        i = r[0].replace(/^0+/, "") || "0",
                                        n = r[1] || "";
                                    return "".concat(e ? "-" : "").concat(i).concat(n ? ".".concat(n) : "")
                                }(s));
                                var l = this.formatNumString(s);
                                if (l !== o) return this.updateValue({
                                    formattedValue: l,
                                    numAsString: s,
                                    input: t.target,
                                    setCaretPosition: !1
                                }), void n(t)
                            }
                            n(t)
                        }
                    }, {
                        key: "onKeyDown",
                        value: function(t) {
                            var e, r = t.target,
                                i = t.key,
                                n = r.selectionStart,
                                a = r.selectionEnd,
                                s = r.value,
                                o = void 0 === s ? "" : s,
                                l = this.props,
                                h = l.decimalScale,
                                p = l.fixedDecimalScale,
                                c = l.prefix,
                                f = l.suffix,
                                u = l.format,
                                m = l.onKeyDown,
                                d = void 0 !== h && p,
                                y = this.getNumberRegex(!1, d),
                                g = new RegExp("-"),
                                v = "string" === typeof u;
                            if (this.selectionBeforeInput = {
                                    selectionStart: n,
                                    selectionEnd: a
                                }, "ArrowLeft" === i || "Backspace" === i ? e = n - 1 : "ArrowRight" === i ? e = n + 1 : "Delete" === i && (e = n), void 0 !== e && n === a) {
                                var x = e,
                                    b = v ? u.indexOf("#") : c.length,
                                    P = v ? u.lastIndexOf("#") + 1 : o.length - f.length;
                                if ("ArrowLeft" === i || "ArrowRight" === i) {
                                    var E = "ArrowLeft" === i ? "left" : "right";
                                    x = this.correctCaretPosition(o, e, E)
                                } else if ("Delete" !== i || y.test(o[e]) || g.test(o[e])) {
                                    if ("Backspace" === i && !y.test(o[e]))
                                        if (n <= b + 1 && "-" === o[0] && "undefined" === typeof u) {
                                            var _ = o.substring(1);
                                            this.updateValue({
                                                formattedValue: _,
                                                caretPos: x,
                                                input: r
                                            })
                                        } else if (!g.test(o[e])) {
                                        for (; !y.test(o[x - 1]) && x > b;) x--;
                                        x = this.correctCaretPosition(o, x, "left")
                                    }
                                } else
                                    for (; !y.test(o[x]) && x < P;) x++;
                                (x !== e || e < b || e > P) && (t.preventDefault(), this.setPatchedCaretPosition(r, x, o)), t.isUnitTestRun && this.setPatchedCaretPosition(r, x, o), m(t)
                            } else m(t)
                        }
                    }, {
                        key: "onMouseUp",
                        value: function(t) {
                            var e = t.target,
                                r = e.selectionStart,
                                i = e.selectionEnd,
                                n = e.value,
                                a = void 0 === n ? "" : n;
                            if (r === i) {
                                var s = this.correctCaretPosition(a, r);
                                s !== r && this.setPatchedCaretPosition(e, s, a)
                            }
                            this.props.onMouseUp(t)
                        }
                    }, {
                        key: "onFocus",
                        value: function(t) {
                            var e = this;
                            t.persist(), this.focusedElm = t.target, this.focusTimeout = setTimeout((function() {
                                var r = t.target,
                                    i = r.selectionStart,
                                    n = r.selectionEnd,
                                    a = r.value,
                                    s = void 0 === a ? "" : a,
                                    o = e.correctCaretPosition(s, i);
                                o === i || 0 === i && n === s.length || e.setPatchedCaretPosition(r, o, s), e.props.onFocus(t)
                            }), 0)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.type,
                                r = t.displayType,
                                i = t.customInput,
                                a = t.renderText,
                                o = t.getInputRef,
                                l = this.state.value,
                                h = function(t, e) {
                                    var r = {};
                                    return Object.keys(t).forEach((function(i) {
                                        e[i] || (r[i] = t[i])
                                    })), r
                                }(this.props, P),
                                p = s({
                                    inputMode: "numeric"
                                }, h, {
                                    type: e,
                                    value: l,
                                    onChange: this.onChange,
                                    onKeyDown: this.onKeyDown,
                                    onMouseUp: this.onMouseUp,
                                    onFocus: this.onFocus,
                                    onBlur: this.onBlur
                                });
                            if ("text" === r) return a ? a(l) || null : n.a.createElement("span", s({}, h, {
                                ref: o
                            }), l);
                            if (i) {
                                var c = i;
                                return n.a.createElement(c, s({}, p, {
                                    ref: o
                                }))
                            }
                            return n.a.createElement("input", s({}, p, {
                                ref: o
                            }))
                        }
                    }]) && a(r.prototype, i), p && a(r, p), e
                }(n.a.Component);
            _.propTypes = P, _.defaultProps = E, e.a = _
        },
        938: function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
                react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
                prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
                prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),
                _extendStatics = function(t, e) {
                    return (_extendStatics = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        })(t, e)
                };

            function __extends(t, e) {
                function r() {
                    this.constructor = t
                }
                _extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var _assign = function() {
                return (_assign = Object.assign || function(t) {
                    for (var e, r = 1, i = arguments.length; r < i; r++)
                        for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }).apply(this, arguments)
            };

            function __rest(t, e) {
                var r = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]])
                }
                return r
            }
            var _assign$ = function() {
                    return (_assign$ = Object.assign || function(t) {
                        for (var e, r = 1, i = arguments.length; r < i; r++)
                            for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }).apply(this, arguments)
                },
                clamp = function(t, e) {
                    return function(r) {
                        return Math.max(Math.min(r, e), t)
                    }
                },
                sanitize = function(t) {
                    return t % 1 ? Number(t.toFixed(5)) : t
                },
                floatRegex = /(-)?(\d[\d\.]*)/g,
                colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
                number = {
                    test: function(t) {
                        return "number" === typeof t
                    },
                    parse: parseFloat,
                    transform: function(t) {
                        return t
                    }
                },
                alpha = _assign$({}, number, {
                    transform: clamp(0, 1)
                }),
                scale = _assign$({}, number, {
                    default: 1
                }),
                createUnitType = function(t) {
                    return {
                        test: function(e) {
                            return "string" === typeof e && e.endsWith(t) && 1 === e.split(" ").length
                        },
                        parse: parseFloat,
                        transform: function(e) {
                            return "" + e + t
                        }
                    }
                },
                degrees = createUnitType("deg"),
                percent = createUnitType("%"),
                px = createUnitType("px"),
                vh = createUnitType("vh"),
                vw = createUnitType("vw"),
                progressPercentage = _assign$({}, percent, {
                    parse: function(t) {
                        return percent.parse(t) / 100
                    },
                    transform: function(t) {
                        return percent.transform(100 * t)
                    }
                }),
                getValueFromFunctionString = function(t) {
                    return t.substring(t.indexOf("(") + 1, t.lastIndexOf(")"))
                },
                clampRgbUnit = clamp(0, 255),
                isRgba = function(t) {
                    return void 0 !== t.red
                },
                isHsla = function(t) {
                    return void 0 !== t.hue
                },
                splitColorValues = function(t) {
                    return function(e) {
                        if ("string" !== typeof e) return e;
                        for (var r = {}, i = getValueFromFunctionString(e).split(/,\s*/), n = 0; n < 4; n++) r[t[n]] = void 0 !== i[n] ? parseFloat(i[n]) : 1;
                        return r
                    }
                },
                rgbaTemplate = function(t) {
                    var e = t.red,
                        r = t.green,
                        i = t.blue,
                        n = t.alpha;
                    return "rgba(" + e + ", " + r + ", " + i + ", " + (void 0 === n ? 1 : n) + ")"
                },
                hslaTemplate = function(t) {
                    var e = t.hue,
                        r = t.saturation,
                        i = t.lightness,
                        n = t.alpha;
                    return "hsla(" + e + ", " + r + ", " + i + ", " + (void 0 === n ? 1 : n) + ")"
                },
                rgbUnit = _assign$({}, number, {
                    transform: function(t) {
                        return Math.round(clampRgbUnit(t))
                    }
                });

            function isColorString(t, e) {
                return t.startsWith(e) && singleColorRegex.test(t)
            }
            var rgba = {
                    test: function(t) {
                        return "string" === typeof t ? isColorString(t, "rgb") : isRgba(t)
                    },
                    parse: splitColorValues(["red", "green", "blue", "alpha"]),
                    transform: function(t) {
                        var e = t.red,
                            r = t.green,
                            i = t.blue,
                            n = t.alpha,
                            a = void 0 === n ? 1 : n;
                        return rgbaTemplate({
                            red: rgbUnit.transform(e),
                            green: rgbUnit.transform(r),
                            blue: rgbUnit.transform(i),
                            alpha: sanitize(alpha.transform(a))
                        })
                    }
                },
                hsla = {
                    test: function(t) {
                        return "string" === typeof t ? isColorString(t, "hsl") : isHsla(t)
                    },
                    parse: splitColorValues(["hue", "saturation", "lightness", "alpha"]),
                    transform: function(t) {
                        var e = t.hue,
                            r = t.saturation,
                            i = t.lightness,
                            n = t.alpha,
                            a = void 0 === n ? 1 : n;
                        return hslaTemplate({
                            hue: Math.round(e),
                            saturation: percent.transform(sanitize(r)),
                            lightness: percent.transform(sanitize(i)),
                            alpha: sanitize(alpha.transform(a))
                        })
                    }
                },
                hex = _assign$({}, rgba, {
                    test: function(t) {
                        return "string" === typeof t && isColorString(t, "#")
                    },
                    parse: function(t) {
                        var e = "",
                            r = "",
                            i = "";
                        return t.length > 4 ? (e = t.substr(1, 2), r = t.substr(3, 2), i = t.substr(5, 2)) : (e = t.substr(1, 1), r = t.substr(2, 1), i = t.substr(3, 1), e += e, r += r, i += i), {
                            red: parseInt(e, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(i, 16),
                            alpha: 1
                        }
                    }
                }),
                color = {
                    test: function(t) {
                        return "string" === typeof t && singleColorRegex.test(t) || isRgba(t) || isHsla(t)
                    },
                    parse: function(t) {
                        return rgba.test(t) ? rgba.parse(t) : hsla.test(t) ? hsla.parse(t) : hex.test(t) ? hex.parse(t) : t
                    },
                    transform: function(t) {
                        return isRgba(t) ? rgba.transform(t) : isHsla(t) ? hsla.transform(t) : t
                    }
                },
                COLOR_TOKEN = "${c}",
                NUMBER_TOKEN = "${n}",
                convertNumbersToZero = function(t) {
                    return "number" === typeof t ? 0 : t
                },
                complex = {
                    test: function(t) {
                        if ("string" !== typeof t || !isNaN(t)) return !1;
                        var e = 0,
                            r = t.match(floatRegex),
                            i = t.match(colorRegex);
                        return r && (e += r.length), i && (e += i.length), e > 0
                    },
                    parse: function(t) {
                        var e = t,
                            r = [],
                            i = e.match(colorRegex);
                        i && (e = e.replace(colorRegex, COLOR_TOKEN), r.push.apply(r, i.map(color.parse)));
                        var n = e.match(floatRegex);
                        return n && r.push.apply(r, n.map(number.parse)), r
                    },
                    createTransformer: function(t) {
                        var e = t,
                            r = 0,
                            i = t.match(colorRegex),
                            n = i ? i.length : 0;
                        if (i)
                            for (var a = 0; a < n; a++) e = e.replace(i[a], COLOR_TOKEN), r++;
                        var s = e.match(floatRegex),
                            o = s ? s.length : 0;
                        if (s)
                            for (a = 0; a < o; a++) e = e.replace(s[a], NUMBER_TOKEN), r++;
                        return function(t) {
                            for (var i = e, a = 0; a < r; a++) i = i.replace(a < n ? COLOR_TOKEN : NUMBER_TOKEN, a < n ? color.transform(t[a]) : sanitize(t[a]));
                            return i
                        }
                    },
                    getAnimatableNone: function(t) {
                        var e = complex.parse(t);
                        return complex.createTransformer(t)(e.map(convertNumbersToZero))
                    }
                },
                warning = function() {},
                invariant = function() {};
            var prevTime = 0,
                onNextFrame = "undefined" !== typeof window && void 0 !== window.requestAnimationFrame ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    var e = Date.now(),
                        r = Math.max(0, 16.7 - (e - prevTime));
                    prevTime = e + r, setTimeout((function() {
                        return t(prevTime)
                    }), r)
                },
                createStep = function(t) {
                    var e = [],
                        r = [],
                        i = 0,
                        n = !1,
                        a = 0,
                        s = new WeakSet,
                        o = new WeakSet,
                        l = {
                            cancel: function(t) {
                                var e = r.indexOf(t);
                                s.add(t), -1 !== e && r.splice(e, 1)
                            },
                            process: function(h) {
                                var p, c;
                                if (n = !0, e = (p = [r, e])[0], (r = p[1]).length = 0, i = e.length)
                                    for (a = 0; a < i; a++)(c = e[a])(h), !0 !== o.has(c) || s.has(c) || (l.schedule(c), t(!0));
                                n = !1
                            },
                            schedule: function(t, a, l) {
                                void 0 === a && (a = !1), void 0 === l && (l = !1), invariant("function" === typeof t, "Argument must be a function");
                                var h = l && n,
                                    p = h ? e : r;
                                s.delete(t), a && o.add(t), -1 === p.indexOf(t) && (p.push(t), h && (i = e.length))
                            }
                        };
                    return l
                },
                StepId;
            ! function(t) {
                t.Read = "read", t.Update = "update", t.Render = "render", t.PostRender = "postRender", t.FixedUpdate = "fixedUpdate"
            }(StepId || (StepId = {}));
            var maxElapsed = 40,
                defaultElapsed = 1 / 60 * 1e3,
                useDefaultElapsed = !0,
                willRunNextFrame = !1,
                isProcessing = !1,
                frame = {
                    delta: 0,
                    timestamp: 0
                },
                stepsOrder = [StepId.Read, StepId.Update, StepId.Render, StepId.PostRender],
                setWillRunNextFrame = function(t) {
                    return willRunNextFrame = t
                },
                _a = stepsOrder.reduce((function(t, e) {
                    var r = createStep(setWillRunNextFrame);
                    return t.sync[e] = function(t, e, i) {
                        return void 0 === e && (e = !1), void 0 === i && (i = !1), willRunNextFrame || startLoop(), r.schedule(t, e, i), t
                    }, t.cancelSync[e] = function(t) {
                        return r.cancel(t)
                    }, t.steps[e] = r, t
                }), {
                    steps: {},
                    sync: {},
                    cancelSync: {}
                }),
                steps = _a.steps,
                sync = _a.sync,
                cancelSync = _a.cancelSync,
                processStep = function(t) {
                    return steps[t].process(frame)
                },
                processFrame = function t(e) {
                    willRunNextFrame = !1, frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(e - frame.timestamp, maxElapsed), 1), useDefaultElapsed || (defaultElapsed = frame.delta), frame.timestamp = e, isProcessing = !0, stepsOrder.forEach(processStep), isProcessing = !1, willRunNextFrame && (useDefaultElapsed = !1, onNextFrame(t))
                },
                startLoop = function() {
                    willRunNextFrame = !0, useDefaultElapsed = !0, isProcessing || onNextFrame(processFrame)
                },
                getFrameData = function() {
                    return frame
                },
                DEFAULT_OVERSHOOT_STRENGTH = 1.525,
                reversed = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                mirrored = function(t) {
                    return function(e) {
                        return e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
                    }
                },
                createReversedEasing = reversed,
                createExpoIn = function(t) {
                    return function(e) {
                        return Math.pow(e, t)
                    }
                },
                createBackIn = function(t) {
                    return function(e) {
                        return e * e * ((t + 1) * e - t)
                    }
                },
                createAnticipateEasing = function(t) {
                    var e = createBackIn(t);
                    return function(t) {
                        return (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    }
                },
                linear = function(t) {
                    return t
                },
                easeIn = createExpoIn(2),
                easeOut = reversed(easeIn),
                easeInOut = mirrored(easeIn),
                circIn = function(t) {
                    return 1 - Math.sin(Math.acos(t))
                },
                circOut = reversed(circIn),
                circInOut = mirrored(circOut),
                backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH),
                backOut = reversed(backIn),
                backInOut = mirrored(backIn),
                anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH),
                NEWTON_ITERATIONS = 8,
                NEWTON_MIN_SLOPE = .001,
                SUBDIVISION_PRECISION = 1e-7,
                SUBDIVISION_MAX_ITERATIONS = 10,
                K_SPLINE_TABLE_SIZE = 11,
                K_SAMPLE_STEP_SIZE = 1 / (K_SPLINE_TABLE_SIZE - 1),
                FLOAT_32_SUPPORTED = "undefined" !== typeof Float32Array,
                a = function(t, e) {
                    return 1 - 3 * e + 3 * t
                },
                b = function(t, e) {
                    return 3 * e - 6 * t
                },
                c = function(t) {
                    return 3 * t
                },
                getSlope = function(t, e, r) {
                    return 3 * a(e, r) * t * t + 2 * b(e, r) * t + c(e)
                },
                calcBezier = function(t, e, r) {
                    return ((a(e, r) * t + b(e, r)) * t + c(e)) * t
                };

            function cubicBezier(t, e, r, i) {
                var n = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE),
                    a = function(e) {
                        for (var i, a, s, o = 0, l = 1, h = K_SPLINE_TABLE_SIZE - 1; l !== h && n[l] <= e; ++l) o += K_SAMPLE_STEP_SIZE;
                        return --l, i = (e - n[l]) / (n[l + 1] - n[l]), (s = getSlope(a = o + i * K_SAMPLE_STEP_SIZE, t, r)) >= NEWTON_MIN_SLOPE ? function(e, i) {
                            for (var n = 0, a = 0; n < NEWTON_ITERATIONS; ++n) {
                                if (0 === (a = getSlope(i, t, r))) return i;
                                i -= (calcBezier(i, t, r) - e) / a
                            }
                            return i
                        }(e, a) : 0 === s ? a : function(e, i, n) {
                            var a, s, o = 0;
                            do {
                                (a = calcBezier(s = i + (n - i) / 2, t, r) - e) > 0 ? n = s : i = s
                            } while (Math.abs(a) > SUBDIVISION_PRECISION && ++o < SUBDIVISION_MAX_ITERATIONS);
                            return s
                        }(e, o, o + K_SAMPLE_STEP_SIZE)
                    };
                ! function() {
                    for (var e = 0; e < K_SPLINE_TABLE_SIZE; ++e) n[e] = calcBezier(e * K_SAMPLE_STEP_SIZE, t, r)
                }();
                return function(n) {
                    return t === e && r === i ? n : 0 === n ? 0 : 1 === n ? 1 : calcBezier(a(n), e, i)
                }
            }
            var zeroPoint = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                isNum = function(t) {
                    return "number" === typeof t
                },
                radiansToDegrees = function(t) {
                    return 180 * t / Math.PI
                },
                angle = function(t, e) {
                    return void 0 === e && (e = zeroPoint), radiansToDegrees(Math.atan2(e.y - t.y, e.x - t.x))
                },
                applyOffset = function(t, e) {
                    var r = !0;
                    return void 0 === e && (e = t, r = !1),
                        function(i) {
                            return r ? i - t + e : (t = i, r = !0, e)
                        }
                },
                curryRange = function(t) {
                    return function(e, r, i) {
                        return void 0 !== i ? t(e, r, i) : function(i) {
                            return t(e, r, i)
                        }
                    }
                },
                clamp$1 = function(t, e, r) {
                    return Math.min(Math.max(r, t), e)
                },
                clamp$1$1 = curryRange(clamp$1),
                conditional = function(t, e) {
                    return function(r) {
                        return t(r) ? e(r) : r
                    }
                },
                degreesToRadians = function(t) {
                    return t * Math.PI / 180
                },
                isPoint = function(t) {
                    return t.hasOwnProperty("x") && t.hasOwnProperty("y")
                },
                isPoint3D = function(t) {
                    return isPoint(t) && t.hasOwnProperty("z")
                },
                distance1D = function(t, e) {
                    return Math.abs(t - e)
                },
                distance = function(t, e) {
                    if (void 0 === e && (e = zeroPoint), isNum(t) && isNum(e)) return distance1D(t, e);
                    if (isPoint(t) && isPoint(e)) {
                        var r = distance1D(t.x, e.x),
                            i = distance1D(t.y, e.y),
                            n = isPoint3D(t) && isPoint3D(e) ? distance1D(t.z, e.z) : 0;
                        return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2) + Math.pow(n, 2))
                    }
                    return 0
                },
                progress = function(t, e, r) {
                    var i = e - t;
                    return 0 === i ? 1 : (r - t) / i
                },
                mix = function(t, e, r) {
                    return -r * t + r * e + t
                },
                _assign$2 = function() {
                    return (_assign$2 = Object.assign || function(t) {
                        for (var e, r = 1, i = arguments.length; r < i; r++)
                            for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }).apply(this, arguments)
                },
                mixLinearColor = function(t, e, r) {
                    var i = t * t,
                        n = e * e;
                    return Math.sqrt(Math.max(0, r * (n - i) + i))
                },
                colorTypes = [hex, rgba, hsla],
                getColorType = function(t) {
                    return colorTypes.find((function(e) {
                        return e.test(t)
                    }))
                },
                notAnimatable = function(t) {
                    return "'" + t + "' is not an animatable color. Use the equivalent color code instead."
                },
                mixColor = function(t, e) {
                    var r = getColorType(t),
                        i = getColorType(e);
                    invariant(!!r, notAnimatable(t)), invariant(!!i, notAnimatable(e)), invariant(r.transform === i.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
                    var n = r.parse(t),
                        a = i.parse(e),
                        s = _assign$2({}, n),
                        o = r === hsla ? mix : mixLinearColor;
                    return function(t) {
                        for (var e in s) "alpha" !== e && (s[e] = o(n[e], a[e], t));
                        return s.alpha = mix(n.alpha, a.alpha, t), r.transform(s)
                    }
                },
                combineFunctions = function(t, e) {
                    return function(r) {
                        return e(t(r))
                    }
                },
                pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return t.reduce(combineFunctions)
                };

            function getMixer(t, e) {
                return isNum(t) ? function(r) {
                    return mix(t, e, r)
                } : color.test(t) ? mixColor(t, e) : mixComplex(t, e)
            }
            var mixArray = function(t, e) {
                    var r = t.slice(),
                        i = r.length,
                        n = t.map((function(t, r) {
                            return getMixer(t, e[r])
                        }));
                    return function(t) {
                        for (var e = 0; e < i; e++) r[e] = n[e](t);
                        return r
                    }
                },
                mixObject = function(t, e) {
                    var r = _assign$2({}, t, e),
                        i = {};
                    for (var n in r) void 0 !== t[n] && void 0 !== e[n] && (i[n] = getMixer(t[n], e[n]));
                    return function(t) {
                        for (var e in i) r[e] = i[e](t);
                        return r
                    }
                };

            function analyse(t) {
                for (var e = complex.parse(t), r = e.length, i = 0, n = 0, a = 0, s = 0; s < r; s++) i || "number" === typeof e[s] ? i++ : void 0 !== e[s].hue ? a++ : n++;
                return {
                    parsed: e,
                    numNumbers: i,
                    numRGB: n,
                    numHSL: a
                }
            }
            var mixComplex = function(t, e) {
                    var r = complex.createTransformer(e),
                        i = analyse(t),
                        n = analyse(e);
                    return invariant(i.numHSL === n.numHSL && i.numRGB === n.numRGB && i.numNumbers >= n.numNumbers, "Complex values '" + t + "' and '" + e + "' too different to mix. Ensure all colors are of the same type."), pipe(mixArray(i.parsed, n.parsed), r)
                },
                mixNumber = function(t, e) {
                    return function(r) {
                        return mix(t, e, r)
                    }
                };

            function detectMixerFactory(t) {
                return "number" === typeof t ? mixNumber : "string" === typeof t ? color.test(t) ? mixColor : mixComplex : Array.isArray(t) ? mixArray : "object" === typeof t ? mixObject : void 0
            }

            function createMixers(t, e, r) {
                for (var i = [], n = r || detectMixerFactory(t[0]), a = t.length - 1, s = 0; s < a; s++) {
                    var o = n(t[s], t[s + 1]);
                    if (e) {
                        var l = Array.isArray(e) ? e[s] : e;
                        o = pipe(l, o)
                    }
                    i.push(o)
                }
                return i
            }

            function fastInterpolate(t, e) {
                var r = t[0],
                    i = t[1],
                    n = e[0];
                return function(t) {
                    return n(progress(r, i, t))
                }
            }

            function slowInterpolate(t, e) {
                var r = t.length,
                    i = r - 1;
                return function(n) {
                    var a = 0,
                        s = !1;
                    if (n <= t[0] ? s = !0 : n >= t[i] && (a = i - 1, s = !0), !s) {
                        for (var o = 1; o < r && !(t[o] > n || o === i); o++);
                        a = o - 1
                    }
                    var l = progress(t[a], t[a + 1], n);
                    return e[a](l)
                }
            }

            function interpolate(t, e, r) {
                var i = void 0 === r ? {} : r,
                    n = i.clamp,
                    a = void 0 === n || n,
                    s = i.ease,
                    o = i.mixer,
                    l = t.length;
                invariant(l === e.length, "Both input and output ranges must be the same length"), invariant(!s || !Array.isArray(s) || s.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[l - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                var h = createMixers(e, s, o),
                    p = 2 === l ? fastInterpolate(t, h) : slowInterpolate(t, h);
                return a ? pipe(clamp$1$1(t[0], t[l - 1]), p) : p
            }
            var pointFromVector = function(t, e, r) {
                    return e = degreesToRadians(e), {
                        x: r * Math.cos(e) + t.x,
                        y: r * Math.sin(e) + t.y
                    }
                },
                toDecimal = function(t, e) {
                    return void 0 === e && (e = 2), e = Math.pow(10, e), Math.round(t * e) / e
                },
                smoothFrame = function(t, e, r, i) {
                    return void 0 === i && (i = 0), toDecimal(t + r * (e - t) / Math.max(i, r))
                },
                smooth = function(t) {
                    void 0 === t && (t = 50);
                    var e = 0,
                        r = 0;
                    return function(i) {
                        var n = getFrameData().timestamp,
                            a = n !== r ? n - r : 0,
                            s = a ? smoothFrame(e, i, a, t) : e;
                        return r = n, e = s, s
                    }
                },
                snap = function(t) {
                    if ("number" === typeof t) return function(e) {
                        return Math.round(e / t) * t
                    };
                    var e = 0,
                        r = t.length;
                    return function(i) {
                        var n = Math.abs(t[0] - i);
                        for (e = 1; e < r; e++) {
                            var a = t[e],
                                s = Math.abs(a - i);
                            if (0 === s) return a;
                            if (s > n) return t[e - 1];
                            if (e === r - 1) return a;
                            n = s
                        }
                    }
                },
                identity = function(t) {
                    return t
                },
                springForce = function(t) {
                    return void 0 === t && (t = identity), curryRange((function(e, r, i) {
                        var n = r - i,
                            a = -(0 - e + 1) * (0 - t(Math.abs(n)));
                        return n <= 0 ? r + a : r - a
                    }))
                },
                springForceLinear = springForce(),
                springForceExpo = springForce(Math.sqrt),
                velocityPerFrame = function(t, e) {
                    return isNum(t) ? t / (1e3 / e) : 0
                },
                velocityPerSecond = function(t, e) {
                    return e ? t * (1e3 / e) : 0
                },
                wrap = function(t, e, r) {
                    var i = e - t;
                    return ((r - t) % i + i) % i + t
                },
                wrap$1 = curryRange(wrap),
                clampProgress = clamp$1$1(0, 1),
                _assign$3 = function() {
                    return (_assign$3 = Object.assign || function(t) {
                        for (var e, r = 1, i = arguments.length; r < i; r++)
                            for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }).apply(this, arguments)
                };

            function __rest$1(t, e) {
                var r = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && (r[i[n]] = t[i[n]])
                }
                return r
            }
            var createStyler = function(t) {
                    var e = t.onRead,
                        r = t.onRender,
                        i = t.uncachedValues,
                        n = void 0 === i ? new Set : i,
                        a = t.useCache,
                        s = void 0 === a || a;
                    return function(t) {
                        void 0 === t && (t = {});
                        var i = __rest$1(t, []),
                            a = {},
                            o = [],
                            l = !1;

                        function h(t, e) {
                            t.startsWith("--") && (i.hasCSSVariable = !0);
                            var r = a[t];
                            a[t] = e, a[t] !== r && (-1 === o.indexOf(t) && o.push(t), l || (l = !0, sync.render(p.render)))
                        }
                        var p = {
                            get: function(t, r) {
                                return void 0 === r && (r = !1), !r && s && !n.has(t) && void 0 !== a[t] ? a[t] : e(t, i)
                            },
                            set: function(t, e) {
                                if ("string" === typeof t) h(t, e);
                                else
                                    for (var r in t) h(r, t[r]);
                                return this
                            },
                            render: function(t) {
                                return void 0 === t && (t = !1), (l || !0 === t) && (r(a, i, o), l = !1, o.length = 0), this
                            }
                        };
                        return p
                    }
                },
                CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g,
                REPLACE_TEMPLATE = "$1-$2",
                camelToDash = function(t) {
                    return t.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase()
                },
                setDomAttrs = function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && t.setAttribute(r, e[r])
                },
                camelCache = new Map,
                dashCache = new Map,
                prefixes = ["Webkit", "Moz", "O", "ms", ""],
                numPrefixes = prefixes.length,
                isBrowser = "undefined" !== typeof document,
                testElement, setDashPrefix = function(t, e) {
                    return dashCache.set(t, camelToDash(e))
                },
                testPrefix = function(t) {
                    testElement = testElement || document.createElement("div");
                    for (var e = 0; e < numPrefixes; e++) {
                        var r = prefixes[e],
                            i = "" === r,
                            n = i ? t : r + t.charAt(0).toUpperCase() + t.slice(1);
                        (n in testElement.style || i) && (camelCache.set(t, n), setDashPrefix(t, (i ? "" : "-") + camelToDash(n)))
                    }
                },
                setServerProperty = function(t) {
                    return setDashPrefix(t, t)
                },
                prefixer = function(t, e) {
                    void 0 === e && (e = !1);
                    var r = e ? dashCache : camelCache;
                    return r.has(t) || (isBrowser ? testPrefix(t) : setServerProperty(t)), r.get(t) || t
                },
                axes = ["", "X", "Y", "Z"],
                order = ["scale", "rotate", "skew", "transformPerspective"],
                transformProps = order.reduce((function(t, e) {
                    return axes.reduce((function(t, r) {
                        return t.push(e + r), t
                    }), t)
                }), ["x", "y", "z"]),
                transformPropDictionary = transformProps.reduce((function(t, e) {
                    return t[e] = !0, t
                }), {});

            function isTransformProp(t) {
                return !0 === transformPropDictionary[t]
            }

            function sortTransformProps(t, e) {
                return transformProps.indexOf(t) - transformProps.indexOf(e)
            }
            var transformOriginProps = new Set(["originX", "originY", "originZ"]);

            function isTransformOriginProp(t) {
                return transformOriginProps.has(t)
            }
            var rounded = _assign$3({}, number, {
                    transform: Math.round
                }),
                valueTypes = {
                    color: color,
                    backgroundColor: color,
                    outlineColor: color,
                    fill: color,
                    stroke: color,
                    borderColor: color,
                    borderTopColor: color,
                    borderRightColor: color,
                    borderBottomColor: color,
                    borderLeftColor: color,
                    borderWidth: px,
                    borderTopWidth: px,
                    borderRightWidth: px,
                    borderBottomWidth: px,
                    borderLeftWidth: px,
                    borderRadius: px,
                    radius: px,
                    borderTopLeftRadius: px,
                    borderTopRightRadius: px,
                    borderBottomRightRadius: px,
                    borderBottomLeftRadius: px,
                    width: px,
                    maxWidth: px,
                    height: px,
                    maxHeight: px,
                    size: px,
                    top: px,
                    right: px,
                    bottom: px,
                    left: px,
                    padding: px,
                    paddingTop: px,
                    paddingRight: px,
                    paddingBottom: px,
                    paddingLeft: px,
                    margin: px,
                    marginTop: px,
                    marginRight: px,
                    marginBottom: px,
                    marginLeft: px,
                    rotate: degrees,
                    rotateX: degrees,
                    rotateY: degrees,
                    rotateZ: degrees,
                    scale: scale,
                    scaleX: scale,
                    scaleY: scale,
                    scaleZ: scale,
                    skew: degrees,
                    skewX: degrees,
                    skewY: degrees,
                    distance: px,
                    x: px,
                    y: px,
                    z: px,
                    perspective: px,
                    opacity: alpha,
                    originX: progressPercentage,
                    originY: progressPercentage,
                    originZ: px,
                    zIndex: rounded
                },
                getValueType = function(t) {
                    return valueTypes[t]
                },
                getValueAsType = function(t, e) {
                    return e && "number" === typeof t ? e.transform(t) : t
                },
                SCROLL_LEFT = "scrollLeft",
                SCROLL_TOP = "scrollTop",
                scrollKeys = new Set([SCROLL_LEFT, SCROLL_TOP]),
                blacklist = new Set([SCROLL_LEFT, SCROLL_TOP, "transform"]),
                translateAlias = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                };

            function isCustomTemplate(t) {
                return "function" === typeof t
            }

            function buildTransform(t, e, r, i, n) {
                var a = "",
                    s = !1;
                r.sort(sortTransformProps);
                for (var o = r.length, l = 0; l < o; l++) {
                    var h = r[l];
                    a += (translateAlias[h] || h) + "(" + e[h] + ") ", s = "z" === h || s
                }
                return !s && n ? a += "translateZ(0)" : a = a.trim(), isCustomTemplate(t.transform) ? a = t.transform(e, a) : i && (a = "none"), a
            }

            function buildStyleProperty(t, e, r, i, n, a, s) {
                void 0 === e && (e = !0), void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === n && (n = {}), void 0 === a && (a = []), void 0 === s && (s = !1);
                var o = !0,
                    l = !1,
                    h = !1;
                for (var p in t) {
                    var c = t[p],
                        f = getValueType(p),
                        u = getValueAsType(c, f);
                    isTransformProp(p) ? (l = !0, i[p] = u, a.push(p), o && (f.default && c !== f.default || !f.default && 0 !== c) && (o = !1)) : isTransformOriginProp(p) ? (n[p] = u, h = !0) : blacklist.has(p) && isCustomTemplate(u) || (r[prefixer(p, s)] = u)
                }
                return (l || "function" === typeof t.transform) && (r.transform = buildTransform(t, i, a, o, e)), h && (r.transformOrigin = (n.originX || 0) + " " + (n.originY || 0) + " " + (n.originZ || 0)), r
            }

            function createStyleBuilder(t) {
                void 0 === t && (t = !0);
                var e = {},
                    r = {},
                    i = {},
                    n = [];
                return function(a) {
                    return n.length = 0, buildStyleProperty(a, t, e, r, i, n, !0), e
                }
            }

            function onRead(t, e) {
                var r = e.element,
                    i = e.preparseOutput,
                    n = getValueType(t);
                if (isTransformProp(t)) return n && n.default || 0;
                if (scrollKeys.has(t)) return r[t];
                var a = window.getComputedStyle(r, null).getPropertyValue(prefixer(t, !0)) || 0;
                return i && n && n.test(a) && n.parse ? n.parse(a) : a
            }

            function onRender(t, e, r) {
                var i = e.element,
                    n = e.buildStyles,
                    a = e.hasCSSVariable;
                if (Object.assign(i.style, n(t)), a)
                    for (var s = r.length, o = 0; o < s; o++) {
                        var l = r[o];
                        l.startsWith("--") && i.style.setProperty(l, t[l])
                    } - 1 !== r.indexOf(SCROLL_LEFT) && (i[SCROLL_LEFT] = t[SCROLL_LEFT]), -1 !== r.indexOf(SCROLL_TOP) && (i[SCROLL_TOP] = t[SCROLL_TOP])
            }
            var cssStyler = createStyler({
                onRead: onRead,
                onRender: onRender,
                uncachedValues: scrollKeys
            });

            function createCssStyler(t, e) {
                void 0 === e && (e = {});
                var r = e.enableHardwareAcceleration,
                    i = __rest$1(e, ["enableHardwareAcceleration"]);
                return cssStyler(_assign$3({
                    element: t,
                    buildStyles: createStyleBuilder(r),
                    preparseOutput: !0
                }, i))
            }
            var camelCaseAttributes = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues"]),
                ZERO_NOT_ZERO = 1e-7,
                progressToPixels = function(t, e) {
                    return t * e + "px"
                },
                build = function(t, e, r, i) {
                    var n = !1,
                        a = !1,
                        s = {},
                        o = r ? {
                            pathLength: "0",
                            pathSpacing: "" + i
                        } : void 0,
                        l = void 0 !== t.scale ? t.scale || ZERO_NOT_ZERO : t.scaleX || 1,
                        h = void 0 !== t.scaleY ? t.scaleY || ZERO_NOT_ZERO : l || 1,
                        p = e.width * (t.originX || 50) + e.x,
                        c = e.height * (t.originY || 50) + e.y,
                        f = 1 * l * -p,
                        u = 1 * h * -c,
                        m = p / l,
                        d = c / h,
                        y = {
                            translate: "translate(" + t.x + ", " + t.y + ") ",
                            scale: "translate(" + f + ", " + u + ") scale(" + l + ", " + h + ") translate(" + m + ", " + d + ") ",
                            rotate: "rotate(" + t.rotate + ", " + p + ", " + c + ") ",
                            skewX: "skewX(" + t.skewX + ") ",
                            skewY: "skewY(" + t.skewY + ") "
                        };
                    for (var g in t)
                        if (t.hasOwnProperty(g)) {
                            var v = t[g];
                            if (isTransformProp(g)) n = !0;
                            else if (!r || "pathLength" !== g && "pathSpacing" !== g || "number" !== typeof v)
                                if (r && "pathOffset" === g) s["stroke-dashoffset"] = progressToPixels(-v, i);
                                else {
                                    s[camelCaseAttributes.has(g) ? g : camelToDash(g)] = v
                                }
                            else a = !0, o[g] = progressToPixels(v, i)
                        }
                    if (a && (s["stroke-dasharray"] = o.pathLength + " " + o.pathSpacing), n)
                        for (var g in s.transform = "", y)
                            if (y.hasOwnProperty(g)) {
                                var x = "scale" === g ? "1" : "0";
                                s.transform += y[g].replace(/undefined/g, x)
                            }
                    return s
                },
                int = _assign$3({}, number, {
                    transform: Math.round
                }),
                valueTypes$1 = {
                    fill: color,
                    stroke: color,
                    scale: scale,
                    scaleX: scale,
                    scaleY: scale,
                    opacity: alpha,
                    fillOpacity: alpha,
                    strokeOpacity: alpha,
                    numOctaves: int
                },
                getValueType$1 = function(t) {
                    return valueTypes$1[t]
                },
                getDimensions = function(t) {
                    return "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                },
                getSVGElementDimensions = function(t) {
                    try {
                        return getDimensions(t)
                    } catch (e) {
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                },
                svgStyler = createStyler({
                    onRead: function(t, e) {
                        var r = e.element;
                        if (isTransformProp(t)) {
                            var i = getValueType$1(t);
                            return i ? i.default : 0
                        }
                        return r.getAttribute(t)
                    },
                    onRender: function(t, e) {
                        var r = e.dimensions,
                            i = e.element,
                            n = e.isPath,
                            a = e.pathLength;
                        setDomAttrs(i, build(t, r, n, a))
                    }
                }),
                svg = function(t) {
                    var e = {
                        element: t,
                        dimensions: getSVGElementDimensions(t),
                        isPath: !1
                    };
                    return "path" === t.tagName && (e.isPath = !0, e.pathLength = t.getTotalLength()), svgStyler(e)
                },
                viewport = createStyler({
                    useCache: !1,
                    onRead: function(t) {
                        return "scrollTop" === t ? window.pageYOffset : window.pageXOffset
                    },
                    onRender: function(t) {
                        var e = t.scrollTop,
                            r = void 0 === e ? 0 : e,
                            i = t.scrollLeft,
                            n = void 0 === i ? 0 : i;
                        return window.scrollTo(n, r)
                    }
                }),
                cache = new WeakMap,
                createDOMStyler = function(t, e) {
                    var r;
                    return t instanceof HTMLElement ? r = createCssStyler(t, e) : t instanceof SVGElement ? r = svg(t) : t === window && (r = viewport(t)), invariant(void 0 !== r, "No valid node provided. Node must be HTMLElement, SVGElement or window."), cache.set(t, r), r
                },
                getStyler = function(t, e) {
                    return cache.has(t) ? cache.get(t) : createDOMStyler(t, e)
                };

            function index(t, e) {
                var r = "string" === typeof t ? document.querySelector(t) : t;
                return getStyler(r, e)
            }
            var Chainable = function() {
                    function t(t) {
                        void 0 === t && (t = {}), this.props = t
                    }
                    return t.prototype.applyMiddleware = function(t) {
                        return this.create(_assign({}, this.props, {
                            middleware: this.props.middleware ? [t].concat(this.props.middleware) : [t]
                        }))
                    }, t.prototype.pipe = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var r = 1 === t.length ? t[0] : pipe.apply(void 0, t);
                        return this.applyMiddleware((function(t) {
                            return function(e) {
                                return t(r(e))
                            }
                        }))
                    }, t.prototype.while = function(t) {
                        return this.applyMiddleware((function(e, r) {
                            return function(i) {
                                return t(i) ? e(i) : r()
                            }
                        }))
                    }, t.prototype.filter = function(t) {
                        return this.applyMiddleware((function(e) {
                            return function(r) {
                                return t(r) && e(r)
                            }
                        }))
                    }, t
                }(),
                Observer = function() {
                    return function(t, e) {
                        var r = t.middleware,
                            i = t.onComplete,
                            n = this;
                        this.isActive = !0, this.update = function(t) {
                            n.observer.update && n.updateObserver(t)
                        }, this.complete = function() {
                            n.observer.complete && n.isActive && n.observer.complete(), n.onComplete && n.onComplete(), n.isActive = !1
                        }, this.error = function(t) {
                            n.observer.error && n.isActive && n.observer.error(t), n.isActive = !1
                        }, this.observer = e, this.updateObserver = function(t) {
                            return e.update(t)
                        }, this.onComplete = i, e.update && r && r.length && r.forEach((function(t) {
                            return n.updateObserver = t(n.updateObserver, n.complete)
                        }))
                    }
                }(),
                createObserver = function(t, e, r) {
                    var i = e.middleware;
                    return new Observer({
                        middleware: i,
                        onComplete: r
                    }, "function" === typeof t ? {
                        update: t
                    } : t)
                },
                Action = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return __extends(e, t), e.prototype.create = function(t) {
                        return new e(t)
                    }, e.prototype.start = function(t) {
                        void 0 === t && (t = {});
                        var e = !1,
                            r = {
                                stop: function() {}
                            },
                            i = this.props,
                            n = i.init,
                            a = __rest(i, ["init"]),
                            s = n(createObserver(t, a, (function() {
                                e = !0, r.stop()
                            })));
                        return r = s ? _assign({}, r, s) : r, t.registerParent && t.registerParent(r), e && r.stop(), r
                    }, e
                }(Chainable),
                action = function(t) {
                    return new Action({
                        init: t
                    })
                },
                BaseMulticast = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.subscribers = [], e
                    }
                    return __extends(e, t), e.prototype.complete = function() {
                        this.subscribers.forEach((function(t) {
                            return t.complete()
                        }))
                    }, e.prototype.error = function(t) {
                        this.subscribers.forEach((function(e) {
                            return e.error(t)
                        }))
                    }, e.prototype.update = function(t) {
                        for (var e = 0; e < this.subscribers.length; e++) this.subscribers[e].update(t)
                    }, e.prototype.subscribe = function(t) {
                        var e = this,
                            r = createObserver(t, this.props);
                        return this.subscribers.push(r), {
                            unsubscribe: function() {
                                var t = e.subscribers.indexOf(r); - 1 !== t && e.subscribers.splice(t, 1)
                            }
                        }
                    }, e.prototype.stop = function() {
                        this.parent && this.parent.stop()
                    }, e.prototype.registerParent = function(t) {
                        this.stop(), this.parent = t
                    }, e
                }(Chainable),
                Multicast = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return __extends(e, t), e.prototype.create = function(t) {
                        return new e(t)
                    }, e
                }(BaseMulticast),
                stepProgress = function(t, e) {
                    var r = 1 / (t - 1),
                        i = 1 / (2 * (t - 1)),
                        n = Math.min(e, 1) / i;
                    return Math.floor((n + 1) / 2) * r
                },
                calc = Object.freeze({
                    angle: angle,
                    degreesToRadians: degreesToRadians,
                    distance: distance,
                    isPoint3D: isPoint3D,
                    isPoint: isPoint,
                    dilate: mix,
                    getValueFromProgress: mix,
                    pointFromAngleAndDistance: pointFromVector,
                    getProgressFromValue: progress,
                    radiansToDegrees: radiansToDegrees,
                    smooth: smoothFrame,
                    speedPerFrame: velocityPerFrame,
                    speedPerSecond: velocityPerSecond,
                    stepProgress: stepProgress
                }),
                isValueList = function(t) {
                    return Array.isArray(t)
                },
                isSingleValue = function(t) {
                    var e = typeof t;
                    return "string" === e || "number" === e
                },
                ValueReaction = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.scheduleVelocityCheck = function() {
                            return sync.postRender(r.velocityCheck)
                        }, r.velocityCheck = function(t) {
                            t.timestamp !== r.lastUpdated && (r.prev = r.current)
                        }, r.prev = r.current = e.value || 0, isSingleValue(r.current) ? (r.updateCurrent = function(t) {
                            return r.current = t
                        }, r.getVelocityOfCurrent = function() {
                            return r.getSingleVelocity(r.current, r.prev)
                        }) : isValueList(r.current) ? (r.updateCurrent = function(t) {
                            return r.current = t.slice()
                        }, r.getVelocityOfCurrent = function() {
                            return r.getListVelocity()
                        }) : (r.updateCurrent = function(t) {
                            for (var e in r.current = {}, t) t.hasOwnProperty(e) && (r.current[e] = t[e])
                        }, r.getVelocityOfCurrent = function() {
                            return r.getMapVelocity()
                        }), e.initialSubscription && r.subscribe(e.initialSubscription), r
                    }
                    return __extends(e, t), e.prototype.create = function(t) {
                        return new e(t)
                    }, e.prototype.get = function() {
                        return this.current
                    }, e.prototype.getVelocity = function() {
                        return this.getVelocityOfCurrent()
                    }, e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this.prev = this.current, this.updateCurrent(e);
                        var r = getFrameData(),
                            i = r.delta,
                            n = r.timestamp;
                        this.timeDelta = i, this.lastUpdated = n, sync.postRender(this.scheduleVelocityCheck)
                    }, e.prototype.subscribe = function(e) {
                        var r = t.prototype.subscribe.call(this, e);
                        return this.subscribers[this.subscribers.length - 1].update(this.current), r
                    }, e.prototype.getSingleVelocity = function(t, e) {
                        return "number" === typeof t && "number" === typeof e ? velocityPerSecond(t - e, this.timeDelta) : velocityPerSecond(parseFloat(t) - parseFloat(e), this.timeDelta) || 0
                    }, e.prototype.getListVelocity = function() {
                        var t = this;
                        return this.current.map((function(e, r) {
                            return t.getSingleVelocity(e, t.prev[r])
                        }))
                    }, e.prototype.getMapVelocity = function() {
                        var t = {};
                        for (var e in this.current) this.current.hasOwnProperty(e) && (t[e] = this.getSingleVelocity(this.current[e], this.prev[e]));
                        return t
                    }, e
                }(BaseMulticast),
                value = function(t, e) {
                    return new ValueReaction({
                        value: t,
                        initialSubscription: e
                    })
                },
                multi = function(t) {
                    var e = t.getCount,
                        r = t.getFirst,
                        i = t.getOutput,
                        n = t.mapApi,
                        a = t.setProp,
                        s = t.startActions;
                    return function(t) {
                        return action((function(o) {
                            var l = o.update,
                                h = o.complete,
                                p = o.error,
                                c = e(t),
                                f = i(),
                                u = function() {
                                    return l(f)
                                },
                                m = 0,
                                d = s(t, (function(t, e) {
                                    var r = !1;
                                    return t.start({
                                        complete: function() {
                                            r || (r = !0, ++m === c && sync.update(h))
                                        },
                                        error: p,
                                        update: function(t) {
                                            a(f, e, t), sync.update(u, !1, !0)
                                        }
                                    })
                                }));
                            return Object.keys(r(d)).reduce((function(t, e) {
                                return t[e] = n(d, e), t
                            }), {})
                        }))
                    }
                },
                composite = multi({
                    getOutput: function() {
                        return {}
                    },
                    getCount: function(t) {
                        return Object.keys(t).length
                    },
                    getFirst: function(t) {
                        return t[Object.keys(t)[0]]
                    },
                    mapApi: function(t, e) {
                        return function() {
                            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                            return Object.keys(t).reduce((function(i, n) {
                                var a;
                                return t[n][e] && (r[0] && void 0 !== r[0][n] ? i[n] = t[n][e](r[0][n]) : i[n] = (a = t[n])[e].apply(a, r)), i
                            }), {})
                        }
                    },
                    setProp: function(t, e, r) {
                        return t[e] = r
                    },
                    startActions: function(t, e) {
                        return Object.keys(t).reduce((function(r, i) {
                            return r[i] = e(t[i], i), r
                        }), {})
                    }
                }),
                parallel = multi({
                    getOutput: function() {
                        return []
                    },
                    getCount: function(t) {
                        return t.length
                    },
                    getFirst: function(t) {
                        return t[0]
                    },
                    mapApi: function(t, e) {
                        return function() {
                            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                            return t.map((function(t, i) {
                                if (t[e]) return Array.isArray(r[0]) ? t[e](r[0][i]) : t[e].apply(t, r)
                            }))
                        }
                    },
                    setProp: function(t, e, r) {
                        return t[e] = r
                    },
                    startActions: function(t, e) {
                        return t.map((function(t, r) {
                            return e(t, r)
                        }))
                    }
                }),
                parallel$1 = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return parallel(t)
                },
                createVectorTests = function(t) {
                    var e = Object.keys(t),
                        r = function(e, r) {
                            return void 0 !== e && !t[r](e)
                        };
                    return {
                        getVectorKeys: function(t) {
                            return e.reduce((function(e, i) {
                                return r(t[i], i) && e.push(i), e
                            }), [])
                        },
                        testVectorProps: function(t) {
                            return t && e.some((function(e) {
                                return r(t[e], e)
                            }))
                        }
                    }
                },
                unitTypes = [px, percent, degrees, vh, vw],
                findUnitType = function(t) {
                    return unitTypes.find((function(e) {
                        return e.test(t)
                    }))
                },
                isUnitProp = function(t) {
                    return Boolean(findUnitType(t))
                },
                createAction = function(t, e) {
                    return t(e)
                },
                reduceArrayValue = function(t) {
                    return function(e, r) {
                        return e[r] = e[r][t], e
                    }
                },
                createArrayAction = function(t, e, r) {
                    var i = r[0],
                        n = e[i].map((function(i, n) {
                            var a = r.reduce(reduceArrayValue(n), _assign({}, e));
                            return getActionCreator(i)(t, a)
                        }));
                    return parallel$1.apply(void 0, n)
                },
                reduceObjectValue = function(t) {
                    return function(e, r) {
                        return e[r] = e[r][t], e
                    }
                },
                createObjectAction = function(t, e, r) {
                    var i = r[0],
                        n = Object.keys(e[i]).reduce((function(n, a) {
                            var s = r.reduce(reduceObjectValue(a), _assign({}, e));
                            return n[a] = getActionCreator(e[i][a])(t, s), n
                        }), {});
                    return composite(n)
                },
                createUnitAction = function(t, e) {
                    var r = e.from,
                        i = e.to,
                        n = __rest(e, ["from", "to"]),
                        a = findUnitType(r) || findUnitType(i),
                        s = a.transform,
                        o = a.parse;
                    return t(_assign({}, n, {
                        from: "string" === typeof r ? o(r) : r,
                        to: "string" === typeof i ? o(i) : i
                    })).pipe(s)
                },
                createMixerAction = function(t) {
                    return function(e, r) {
                        var i = r.from,
                            n = r.to,
                            a = __rest(r, ["from", "to"]);
                        return e(_assign({}, a, {
                            from: 0,
                            to: 1
                        })).pipe(t(i, n))
                    }
                },
                createColorAction = createMixerAction(mixColor),
                createComplexAction = createMixerAction(mixComplex),
                createVectorAction = function(t, e) {
                    var r = createVectorTests(e),
                        i = r.testVectorProps,
                        n = r.getVectorKeys;
                    return function(e) {
                        if (!i(e)) return t(e);
                        var r = n(e),
                            a = e[r[0]];
                        return getActionCreator(a)(t, e, r)
                    }
                },
                getActionCreator = function(t) {
                    return "number" === typeof t ? createAction : Array.isArray(t) ? createArrayAction : isUnitProp(t) ? createUnitAction : color.test(t) ? createColorAction : complex.test(t) ? createComplexAction : "object" === typeof t ? createObjectAction : createAction
                },
                decay = function(t) {
                    return void 0 === t && (t = {}), action((function(e) {
                        var r = e.complete,
                            i = e.update,
                            n = t.velocity,
                            a = void 0 === n ? 0 : n,
                            s = t.from,
                            o = void 0 === s ? 0 : s,
                            l = t.power,
                            h = void 0 === l ? .8 : l,
                            p = t.timeConstant,
                            c = void 0 === p ? 350 : p,
                            f = t.restDelta,
                            u = void 0 === f ? .5 : f,
                            m = t.modifyTarget,
                            d = 0,
                            y = h * a,
                            g = Math.round(o + y),
                            v = "undefined" === typeof m ? g : m(g),
                            x = sync.update((function(t) {
                                var e = t.delta;
                                d += e;
                                var n = -y * Math.exp(-d / c),
                                    a = n > u || n < -u;
                                i(a ? v + n : v), a || (cancelSync.update(x), r())
                            }), !0);
                        return {
                            stop: function() {
                                return cancelSync.update(x)
                            }
                        }
                    }))
                },
                vectorDecay = createVectorAction(decay, {
                    from: number.test,
                    modifyTarget: function(t) {
                        return "function" === typeof t
                    },
                    velocity: number.test
                }),
                spring = function(t) {
                    return void 0 === t && (t = {}), action((function(e) {
                        var r = e.update,
                            i = e.complete,
                            n = t.velocity,
                            a = void 0 === n ? 0 : n,
                            s = t.from,
                            o = void 0 === s ? 0 : s,
                            l = t.to,
                            h = void 0 === l ? 0 : l,
                            p = t.stiffness,
                            c = void 0 === p ? 100 : p,
                            f = t.damping,
                            u = void 0 === f ? 10 : f,
                            m = t.mass,
                            d = void 0 === m ? 1 : m,
                            y = t.restSpeed,
                            g = void 0 === y ? .01 : y,
                            v = t.restDelta,
                            x = void 0 === v ? .01 : v,
                            b = a ? -a / 1e3 : 0,
                            P = 0,
                            E = h - o,
                            _ = o,
                            k = _,
                            S = sync.update((function(t) {
                                var e = t.delta;
                                P += e;
                                var n = u / (2 * Math.sqrt(c * d)),
                                    s = Math.sqrt(c / d) / 1e3;
                                if (k = _, n < 1) {
                                    var o = Math.exp(-n * s * P),
                                        l = s * Math.sqrt(1 - n * n);
                                    _ = h - o * ((b + n * s * E) / l * Math.sin(l * P) + E * Math.cos(l * P))
                                } else {
                                    o = Math.exp(-s * P);
                                    _ = h - o * (E + (b + s * E) * P)
                                }
                                a = velocityPerSecond(_ - k, e);
                                var p = Math.abs(a) <= g,
                                    f = Math.abs(h - _) <= x;
                                p && f ? (r(_ = h), cancelSync.update(S), i()) : r(_)
                            }), !0);
                        return {
                            stop: function() {
                                return cancelSync.update(S)
                            }
                        }
                    }))
                },
                vectorSpring = createVectorAction(spring, {
                    from: number.test,
                    to: number.test,
                    stiffness: number.test,
                    damping: number.test,
                    mass: number.test,
                    velocity: number.test
                }),
                scrubber = function(t) {
                    var e = t.from,
                        r = void 0 === e ? 0 : e,
                        i = t.to,
                        n = void 0 === i ? 1 : i,
                        a = t.ease,
                        s = void 0 === a ? linear : a,
                        o = t.reverseEase;
                    return void 0 !== o && o && (s = createReversedEasing(s)), action((function(t) {
                        var e = t.update;
                        return {
                            seek: function(t) {
                                return e(t)
                            }
                        }
                    })).pipe(s, (function(t) {
                        return mix(r, n, t)
                    }))
                },
                vectorScrubber = createVectorAction(scrubber, {
                    ease: function(t) {
                        return "function" === typeof t
                    },
                    from: number.test,
                    to: number.test
                }),
                clampProgress$1 = clamp$1$1(0, 1),
                tween = function(t) {
                    return void 0 === t && (t = {}), action((function(e) {
                        var r, i = e.update,
                            n = e.complete,
                            a = t.duration,
                            s = void 0 === a ? 300 : a,
                            o = t.ease,
                            l = void 0 === o ? easeOut : o,
                            h = t.flip,
                            p = void 0 === h ? 0 : h,
                            c = t.loop,
                            f = void 0 === c ? 0 : c,
                            u = t.yoyo,
                            m = void 0 === u ? 0 : u,
                            d = t.repeatDelay,
                            y = void 0 === d ? 0 : d,
                            g = t.from,
                            v = void 0 === g ? 0 : g,
                            x = t.to,
                            b = void 0 === x ? 1 : x,
                            P = t.elapsed,
                            E = void 0 === P ? 0 : P,
                            _ = t.flipCount,
                            k = void 0 === _ ? 0 : _,
                            S = t.yoyoCount,
                            C = void 0 === S ? 0 : S,
                            A = t.loopCount,
                            T = void 0 === A ? 0 : A,
                            D = vectorScrubber({
                                from: v,
                                to: b,
                                ease: l
                            }).start(i),
                            w = 0,
                            M = !1,
                            F = function(t) {
                                var e;
                                void 0 === t && (t = !1), D = vectorScrubber({
                                    from: v = (e = [b, v])[0],
                                    to: b = e[1],
                                    ease: l,
                                    reverseEase: t
                                }).start(i)
                            },
                            I = function() {
                                w = clampProgress$1(progress(0, s, E)), D.seek(w)
                            },
                            V = function() {
                                M = !0, r = sync.update((function(t) {
                                    var e = t.delta;
                                    E += e, I(),
                                        function() {
                                            var t = M && E > s + y;
                                            return !!t && (!(!t || f || p || m) || (E = s - (E - y), f && T < f ? (T++, !1) : p && k < p ? (k++, F(), !1) : !(m && C < m) || (C++, F(C % 2 !== 0), !1)))
                                        }() && (cancelSync.update(r), n && sync.update(n, !1, !0))
                                }), !0)
                            },
                            O = function() {
                                M = !1, r && cancelSync.update(r)
                            };
                        return V(), {
                            isActive: function() {
                                return M
                            },
                            getElapsed: function() {
                                return clamp$1$1(0, s, E)
                            },
                            getProgress: function() {
                                return w
                            },
                            stop: function() {
                                O()
                            },
                            pause: function() {
                                return O(), this
                            },
                            resume: function() {
                                return M || V(), this
                            },
                            seek: function(t) {
                                return E = mix(0, s, t), sync.update(I, !1, !0), this
                            },
                            reverse: function() {
                                return F(), this
                            }
                        }
                    }))
                },
                clampProgress$1$1 = clamp$1$1(0, 1),
                defaultEasings = function(t, e) {
                    return t.map((function() {
                        return e || easeOut
                    })).splice(0, t.length - 1)
                },
                defaultTimings = function(t) {
                    var e = t.length;
                    return t.map((function(t, r) {
                        return 0 !== r ? r / (e - 1) : 0
                    }))
                },
                interpolateScrubbers = function(t, e, r) {
                    var i = t.length,
                        n = i - 1,
                        a = n - 1,
                        s = e.map((function(t) {
                            return t.start(r)
                        }));
                    return function(e) {
                        e <= t[0] && s[0].seek(0), e >= t[n] && s[a].seek(1);
                        for (var r = 1; r < i && !(t[r] > e || r === n); r++);
                        var o = progress(t[r - 1], t[r], e);
                        s[r - 1].seek(clampProgress$1$1(o))
                    }
                },
                keyframes = function(t) {
                    var e = t.easings,
                        r = t.ease,
                        i = void 0 === r ? linear : r,
                        n = t.times,
                        a = t.values,
                        s = __rest(t, ["easings", "ease", "times", "values"]);
                    e = Array.isArray(e) ? e : defaultEasings(a, e), n = n || defaultTimings(a);
                    var o = e.map((function(t, e) {
                        return vectorScrubber({
                            from: a[e],
                            to: a[e + 1],
                            ease: t
                        })
                    }));
                    return tween(_assign({}, s, {
                        ease: i
                    })).applyMiddleware((function(t) {
                        return interpolateScrubbers(n, o, t)
                    }))
                },
                physics = function(t) {
                    return void 0 === t && (t = {}), action((function(e) {
                        var r = e.complete,
                            i = e.update,
                            n = t.acceleration,
                            a = void 0 === n ? 0 : n,
                            s = t.friction,
                            o = void 0 === s ? 0 : s,
                            l = t.velocity,
                            h = void 0 === l ? 0 : l,
                            p = t.springStrength,
                            c = t.to,
                            f = t.restSpeed,
                            u = void 0 === f ? .001 : f,
                            m = t.from,
                            d = void 0 === m ? 0 : m,
                            y = sync.update((function(t) {
                                var e = t.delta,
                                    n = Math.max(e, 16);
                                (a && (h += velocityPerFrame(a, n)), o && (h *= Math.pow(1 - o, n / 100)), void 0 !== p && void 0 !== c) && (h += (c - d) * velocityPerFrame(p, n));
                                d += velocityPerFrame(h, n), i(d), !1 !== u && (!h || Math.abs(h) <= u) && (cancelSync.update(y), r())
                            }), !0);
                        return {
                            set: function(t) {
                                return d = t, this
                            },
                            setAcceleration: function(t) {
                                return a = t, this
                            },
                            setFriction: function(t) {
                                return o = t, this
                            },
                            setSpringStrength: function(t) {
                                return p = t, this
                            },
                            setSpringTarget: function(t) {
                                return c = t, this
                            },
                            setVelocity: function(t) {
                                return h = t, this
                            },
                            stop: function() {
                                return cancelSync.update(y)
                            }
                        }
                    }))
                },
                vectorPhysics = createVectorAction(physics, {
                    acceleration: number.test,
                    friction: number.test,
                    velocity: number.test,
                    from: number.test,
                    to: number.test,
                    springStrength: number.test
                }),
                listen = function(t, e, r) {
                    return action((function(i) {
                        var n = i.update,
                            a = e.split(" ").map((function(e) {
                                return t.addEventListener(e, n, r), e
                            }));
                        return {
                            stop: function() {
                                return a.forEach((function(e) {
                                    return t.removeEventListener(e, n, r)
                                }))
                            }
                        }
                    }))
                },
                defaultPointerPos = function() {
                    return {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        x: 0,
                        y: 0
                    }
                },
                eventToPoint = function(t, e) {
                    return void 0 === e && (e = defaultPointerPos()), e.clientX = e.x = t.clientX, e.clientY = e.y = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY, e
                },
                points = [defaultPointerPos()],
                isTouchDevice = !1;
            if ("undefined" !== typeof document) {
                var updatePointsLocation = function(t) {
                    var e = t.touches;
                    isTouchDevice = !0;
                    var r = e.length;
                    points.length = 0;
                    for (var i = 0; i < r; i++) {
                        var n = e[i];
                        points.push(eventToPoint(n))
                    }
                };
                listen(document, "touchstart touchmove", {
                    passive: !0,
                    capture: !0
                }).start(updatePointsLocation)
            }
            var multitouch = function(t) {
                    var e = void 0 === t ? {} : t,
                        r = e.preventDefault,
                        i = void 0 === r || r,
                        n = e.scale,
                        a = void 0 === n ? 1 : n,
                        s = e.rotate,
                        o = void 0 === s ? 0 : s;
                    return action((function(t) {
                        var e = t.update,
                            r = {
                                touches: points,
                                scale: a,
                                rotate: o
                            },
                            n = 0,
                            s = 0,
                            l = points.length > 1;
                        if (l) {
                            var h = points[0],
                                p = points[1];
                            n = distance(h, p), s = angle(h, p)
                        }
                        var c = function() {
                                if (l) {
                                    var t = points[0],
                                        i = points[1],
                                        h = distance(t, i),
                                        p = angle(t, i);
                                    r.scale = a * (h / n), r.rotate = o + (p - s)
                                }
                                e(r)
                            },
                            f = listen(document, "touchmove", {
                                passive: !i
                            }).start((function(t) {
                                (i || t.touches.length > 1) && t.preventDefault(), sync.update(c)
                            }));
                        return isTouchDevice && sync.update(c), {
                            stop: function() {
                                cancelSync.update(c), f.stop()
                            }
                        }
                    }))
                },
                getIsTouchDevice = function() {
                    return isTouchDevice
                },
                point = defaultPointerPos(),
                isMouseDevice = !1;
            if ("undefined" !== typeof document) {
                var updatePointLocation = function(t) {
                    isMouseDevice = !0, eventToPoint(t, point)
                };
                listen(document, "mousedown mousemove", !0).start(updatePointLocation)
            }
            var mouse = function(t) {
                    var e = (void 0 === t ? {} : t).preventDefault,
                        r = void 0 === e || e;
                    return action((function(t) {
                        var e = t.update,
                            i = function() {
                                return e(point)
                            },
                            n = listen(document, "mousemove").start((function(t) {
                                r && t.preventDefault(), sync.update(i)
                            }));
                        return isMouseDevice && sync.update(i), {
                            stop: function() {
                                cancelSync.update(i), n.stop()
                            }
                        }
                    }))
                },
                getFirstTouch = function(t) {
                    return t[0]
                },
                pointer = function(t) {
                    return void 0 === t && (t = {}), getIsTouchDevice() ? multitouch(t).pipe((function(t) {
                        return t.touches
                    }), getFirstTouch) : mouse(t)
                },
                index$1$1 = function(t) {
                    void 0 === t && (t = {});
                    var e = t.x,
                        r = t.y,
                        i = __rest(t, ["x", "y"]);
                    if (void 0 !== e || void 0 !== r) {
                        var n = applyOffset(e || 0),
                            a = applyOffset(r || 0),
                            s = {
                                x: 0,
                                y: 0
                            };
                        return pointer(i).pipe((function(t) {
                            return s.x = n(t.x), s.y = a(t.y), s
                        }))
                    }
                    return pointer(i)
                },
                chain = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return action((function(e) {
                        var r, i = e.update,
                            n = e.complete,
                            a = 0;
                        return function e() {
                            r = t[a].start({
                                complete: function() {
                                    ++a >= t.length ? n() : e()
                                },
                                update: i
                            })
                        }(), {
                            stop: function() {
                                return r && r.stop()
                            }
                        }
                    }))
                },
                delay = function(t) {
                    return action((function(e) {
                        var r = e.complete,
                            i = setTimeout(r, t);
                        return {
                            stop: function() {
                                return clearTimeout(i)
                            }
                        }
                    }))
                },
                appendUnit = function(t) {
                    return function(e) {
                        return "" + e + t
                    }
                },
                steps$2 = function(t, e, r) {
                    return void 0 === e && (e = 0), void 0 === r && (r = 1),
                        function(i) {
                            var n = progress(e, r, i);
                            return mix(e, r, stepProgress(t, n))
                        }
                },
                transformMap = function(t) {
                    return function(e) {
                        var r = _assign({}, e);
                        for (var i in t)
                            if (t.hasOwnProperty(i)) {
                                var n = t[i];
                                r[i] = n(e[i])
                            }
                        return r
                    }
                },
                transformers = Object.freeze({
                    applyOffset: applyOffset,
                    clamp: clamp$1$1,
                    conditional: conditional,
                    interpolate: interpolate,
                    blendArray: mixArray,
                    blendColor: mixColor,
                    pipe: pipe,
                    smooth: smooth,
                    snap: snap,
                    generateStaticSpring: springForce,
                    nonlinearSpring: springForceExpo,
                    linearSpring: springForceLinear,
                    wrap: wrap$1,
                    appendUnit: appendUnit,
                    steps: steps$2,
                    transformMap: transformMap
                }),
                getPoseValues = function(t) {
                    t.transition, t.flip, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.afterChildren, t.beforeChildren, t.preTransition, t.applyAtStart, t.applyAtEnd;
                    return __rest(t, ["transition", "flip", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition", "applyAtStart", "applyAtEnd"])
                },
                selectPoses = function(t) {
                    t.label, t.props, t.values, t.parentValues, t.ancestorValues, t.onChange, t.passive, t.initialPose;
                    return __rest(t, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"])
                },
                selectAllValues = function(t, e) {
                    var r = {};
                    return t.forEach((function(t, i) {
                        return r[i] = e(t)
                    })), r
                },
                resolveProp = function(t, e) {
                    return "function" === typeof t ? t(e) : t
                },
                poseDefault = function(t, e, r, i) {
                    return t && void 0 !== t[e] ? resolveProp(t[e], i) : r
                },
                startChildAnimations = function(t, e, r, i) {
                    var n = [],
                        a = poseDefault(r, "delayChildren", 0, i),
                        s = poseDefault(r, "staggerChildren", 0, i),
                        o = poseDefault(r, "staggerDirection", 1, i),
                        l = (t.size - 1) * s,
                        h = 1 === o ? function(t) {
                            return t * s
                        } : function(t) {
                            return l - t * s
                        };
                    return Array.from(t).forEach((function(t, r) {
                        n.push(t.set(e, {
                            delay: a + h(r)
                        }))
                    })), n
                },
                resolveTransition = function t(e, r, i, n, a, s) {
                    var o;
                    if ("function" === typeof e) o = t(e(n), r, i, n, a, s);
                    else if (e[r] || e.default) {
                        var l = e[r] || e.default;
                        o = "function" === typeof l ? l(n) : l
                    } else o = e;
                    return !1 === o ? s(i, n) : a(i, o, n)
                },
                findInsertionIndex = function(t, e, r) {
                    for (var i = 0, n = r - 1; n >= 0; n--) {
                        var a = t.indexOf(e[n]);
                        if (-1 !== a) {
                            i = a + 1;
                            break
                        }
                    }
                    return i
                },
                applyValues = function(t, e, r, i, n) {
                    return invariant("object" === typeof t, "applyAtStart and applyAtEnd must be of type object"), Object.keys(t).forEach((function(a) {
                        var s = resolveProp(t[a], r);
                        e.has(a) ? i(e.get(a), s) : n(a, s, r)
                    }))
                },
                createPoseSetter = function(t) {
                    var e = t.state,
                        r = t.poses,
                        i = t.startAction,
                        n = t.stopAction,
                        a = t.getInstantTransition,
                        s = t.addActionDelay,
                        o = t.getTransitionProps,
                        l = t.resolveTarget,
                        h = t.transformPose,
                        p = t.posePriority,
                        c = t.convertTransitionDefinition,
                        f = t.setValue,
                        u = t.setValueNative,
                        m = t.forceRender;
                    return function(t, d, y) {
                        void 0 === d && (d = {}), void 0 === y && (y = !0);
                        var g = e.children,
                            v = e.values,
                            x = e.props,
                            b = e.activeActions,
                            P = e.activePoses,
                            E = d.delay,
                            _ = void 0 === E ? 0 : E,
                            k = g.size,
                            S = _assign({}, x, d),
                            C = r[t],
                            A = function() {
                                return k && y ? startChildAnimations(g, t, C, S) : []
                            },
                            T = function() {
                                if (!C) return [];
                                var r = C.applyAtStart;
                                r && (applyValues(r, v, S, f, u), m && m(S)), h && (C = h(C, t, e));
                                var d = C.preTransition,
                                    y = C.transition,
                                    g = C.applyAtEnd;
                                d && d(S);
                                var x = Object.keys(getPoseValues(C)).map((function(e) {
                                    var r = (P.has(e) || P.set(e, []), P.get(e)),
                                        h = r.indexOf(t); - 1 !== h && r.splice(h, 1);
                                    var f = p ? p.indexOf(t) : 0,
                                        u = f <= 0 ? 0 : findInsertionIndex(r, p, f);
                                    return r.splice(u, 0, t), 0 === u ? new Promise((function(t) {
                                        var r = v.get(e),
                                            h = _assign({}, S, {
                                                key: e,
                                                value: r
                                            }),
                                            p = l(r, resolveProp(C[e], h));
                                        b.has(e) && n(b.get(e));
                                        var f = _assign({
                                                to: p
                                            }, h, o(r, p, h)),
                                            u = resolveTransition(y, e, r, f, c, a),
                                            m = _ || resolveProp(C.delay, h);
                                        m && (u = s(m, u)), b.set(e, i(r, u, t))
                                    })) : Promise.resolve()
                                }));
                                return g ? [Promise.all(x).then((function() {
                                    applyValues(g, v, S, f, u)
                                }))] : x
                            };
                        if (C && k) {
                            if (resolveProp(C.beforeChildren, S)) return Promise.all(T()).then((function() {
                                return Promise.all(A())
                            }));
                            if (resolveProp(C.afterChildren, S)) return Promise.all(A()).then((function() {
                                return Promise.all(T())
                            }))
                        }
                        return Promise.all(T().concat(A()))
                    }
                },
                DEFAULT_INITIAL_POSE = "init",
                isScale = function(t) {
                    return t.includes("scale")
                },
                defaultReadValueFromSource = function(t) {
                    return isScale(t) ? 1 : 0
                },
                readValueFromPose = function(t, e, r) {
                    var i = t.applyAtEnd && void 0 !== t.applyAtEnd[e] ? t.applyAtEnd[e] : void 0 !== t[e] ? t[e] : t.applyAtStart && void 0 !== t.applyAtStart[e] ? t.applyAtStart[e] : 0;
                    return resolveProp(i, r)
                },
                getPosesToSearch = function(t) {
                    var e = Array.isArray(t) ? t : [t];
                    return e.push(DEFAULT_INITIAL_POSE), e
                },
                getInitialValue = function(t, e, r, i, n, a) {
                    void 0 === n && (n = defaultReadValueFromSource);
                    var s = getPosesToSearch(r).filter(Boolean).find((function(r) {
                        var i = t[r];
                        return i && (void 0 !== i[e] || i.applyAtStart && void 0 !== i.applyAtStart[e] || i.applyAtEnd && void 0 !== i.applyAtEnd[e])
                    }));
                    return a.set(e, [s || DEFAULT_INITIAL_POSE]), s ? readValueFromPose(t[s], e, i) : n(e, i)
                },
                createValues = function(t, e) {
                    var r = e.userSetValues,
                        i = e.createValue,
                        n = e.convertValue,
                        a = e.readValueFromSource,
                        s = e.initialPose,
                        o = e.poses,
                        l = e.activePoses,
                        h = e.props;
                    return function(e) {
                        if (!t.has(e)) {
                            var p;
                            if (r && void 0 !== r[e]) p = n(r[e], e, h);
                            else {
                                var c = getInitialValue(o, e, s, h, a, l);
                                p = i(c, e, h)
                            }
                            t.set(e, p)
                        }
                    }
                },
                scrapeValuesFromPose = function(t, e) {
                    return function(r) {
                        var i = e.poses[r];
                        Object.keys(getPoseValues(i)).forEach(createValues(t, e))
                    }
                },
                getAncestorValue = function(t, e, r) {
                    if (!0 === e) return r[0] && r[0].values.get(t);
                    var i = r.find((function(t) {
                        return t.label === e
                    }));
                    return i && i.values.get(t)
                },
                bindPassiveValues = function(t, e) {
                    var r = e.passive,
                        i = e.ancestorValues,
                        n = e.createValue,
                        a = e.readValue,
                        s = e.props;
                    return function(e) {
                        var o = r[e],
                            l = o[0],
                            h = o[1],
                            p = o[2],
                            c = p && i.length ? getAncestorValue(l, p, i) : !!t.has(l) && t.get(l);
                        if (c) {
                            var f = n(a(c), e, s, {
                                passiveParentKey: l,
                                passiveParent: c,
                                passiveProps: h
                            });
                            t.set(e, f)
                        }
                    }
                },
                setNativeValues = function(t) {
                    var e = t.setValueNative,
                        r = t.initialPose,
                        i = t.props,
                        n = t.poses,
                        a = new Set,
                        s = function(t, r) {
                            if (t[r])
                                for (var n in t[r]) a.has(n) || (a.add(n), e(n, resolveProp(t[r][n], i), i))
                        };
                    getPosesToSearch(r).forEach((function(t) {
                        var e = n[t];
                        e && (s(e, "applyAtEnd"), s(e, "applyAtStart"))
                    }))
                },
                createValueMap = function(t) {
                    var e = t.poses,
                        r = t.passive,
                        i = new Map;
                    return Object.keys(e).forEach(scrapeValuesFromPose(i, t)), setNativeValues(t), r && Object.keys(r).forEach(bindPassiveValues(i, t)), i
                },
                applyDefaultTransition = function(t, e, r) {
                    return _assign({}, t, {
                        transition: r.has(e) ? r.get(e) : r.get("default")
                    })
                },
                generateTransitions = function(t, e) {
                    return Object.keys(t).forEach((function(r) {
                        var i = t[r];
                        invariant("object" === typeof i, "Pose '" + r + "' is of invalid type. All poses should be objects."), t[r] = void 0 !== i.transition ? i : applyDefaultTransition(i, r, e)
                    })), t
                },
                sortByReversePriority = function(t) {
                    return function(e, r) {
                        var i = t.indexOf(e),
                            n = t.indexOf(r);
                        return -1 === i && -1 !== n ? -1 : -1 !== i && -1 === n ? 1 : i - n
                    }
                },
                poseFactory = function(t) {
                    var e = t.getDefaultProps,
                        r = t.defaultTransitions,
                        i = t.bindOnChange,
                        n = t.startAction,
                        a = t.stopAction,
                        s = t.readValue,
                        o = t.readValueFromSource,
                        l = t.resolveTarget,
                        h = t.setValue,
                        p = t.setValueNative,
                        c = t.createValue,
                        f = t.convertValue,
                        u = t.getInstantTransition,
                        m = t.getTransitionProps,
                        d = t.addActionDelay,
                        y = t.selectValueToRead,
                        g = t.convertTransitionDefinition,
                        v = t.transformPose,
                        x = t.posePriority,
                        b = t.forceRender,
                        P = t.extendAPI;
                    return function(t) {
                        var E = t.parentValues,
                            _ = t.ancestorValues,
                            k = void 0 === _ ? [] : _;
                        E && k.unshift({
                            values: E
                        });
                        var S = new Map,
                            C = new Map,
                            A = new Set,
                            T = generateTransitions(selectPoses(t), r),
                            D = t.props,
                            w = void 0 === D ? {} : D;
                        e && (w = _assign({}, e(t), w));
                        var M = t.passive,
                            F = t.values,
                            I = t.initialPose,
                            V = void 0 === I ? DEFAULT_INITIAL_POSE : I,
                            O = createValueMap({
                                poses: T,
                                passive: M,
                                ancestorValues: k,
                                readValue: s,
                                setValueNative: p,
                                createValue: c,
                                convertValue: f,
                                readValueFromSource: o,
                                userSetValues: F,
                                initialPose: V,
                                activePoses: C,
                                props: w
                            }),
                            R = {
                                activeActions: S,
                                activePoses: C,
                                children: A,
                                props: w,
                                values: O
                            },
                            B = t.onChange;
                        B && Object.keys(B).forEach(i(O, B));
                        var L = createPoseSetter({
                            state: R,
                            poses: T,
                            getInstantTransition: u,
                            getTransitionProps: m,
                            convertTransitionDefinition: g,
                            setValue: h,
                            setValueNative: p,
                            startAction: n,
                            stopAction: a,
                            resolveTarget: l,
                            addActionDelay: d,
                            transformPose: v,
                            posePriority: x,
                            forceRender: b
                        });
                        return P({
                            set: L,
                            unset: function(t, e) {
                                var r = [];
                                C.forEach((function(e) {
                                    var i = e.indexOf(t);
                                    if (-1 !== i) {
                                        var n = e[0];
                                        e.splice(i, 1);
                                        var a = e[0];
                                        a !== n && -1 === r.indexOf(a) && r.push(a)
                                    }
                                }));
                                var i = r.sort(sortByReversePriority(x)).map((function(t) {
                                    return L(t, e, !1)
                                }));
                                return A.forEach((function(e) {
                                    return i.push(e.unset(t))
                                })), Promise.all(i)
                            },
                            get: function(t) {
                                return t ? y(O.get(t)) : selectAllValues(O, y)
                            },
                            has: function(t) {
                                return !!T[t]
                            },
                            setProps: function(t) {
                                return R.props = _assign({}, R.props, t)
                            },
                            _addChild: function(e, r) {
                                var i = r(_assign({
                                    initialPose: V
                                }, e, {
                                    ancestorValues: [{
                                        label: t.label,
                                        values: O
                                    }].concat(k)
                                }));
                                return A.add(i), i
                            },
                            removeChild: function(t) {
                                return A.delete(t)
                            },
                            clearChildren: function() {
                                A.forEach((function(t) {
                                    return t.destroy()
                                })), A.clear()
                            },
                            destroy: function() {
                                S.forEach(a), A.forEach((function(t) {
                                    return t.destroy()
                                }))
                            }
                        }, R, t)
                    }
                },
                _assign$4 = function() {
                    return (_assign$4 = Object.assign || function(t) {
                        for (var e, r = 1, i = arguments.length; r < i; r++)
                            for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }).apply(this, arguments)
                },
                BoundingBoxDimension;

            function __rest$2(t, e) {
                var r = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && (r[i[n]] = t[i[n]])
                }
                return r
            }! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(BoundingBoxDimension || (BoundingBoxDimension = {}));
            var measureWithoutTransform = function(t) {
                    var e = t.style.transform;
                    t.style.transform = "";
                    var r = t.getBoundingClientRect();
                    return t.style.transform = e, r
                },
                resolveProp$1 = function(t, e) {
                    return "function" === typeof t ? t(e) : t
                },
                interpolate$1 = transformers.interpolate,
                singleAxisPointer = function(t) {
                    return function(e) {
                        var r;
                        return index$1$1((r = {}, r[t] = "string" === typeof e ? parseFloat(e) : e, r)).pipe((function(e) {
                            return e[t]
                        }))
                    }
                },
                pointerX = singleAxisPointer("x"),
                pointerY = singleAxisPointer("y"),
                createPointer = function(t, e, r, i) {
                    return function(n) {
                        var a = n.from,
                            s = n.type,
                            o = n.dimensions,
                            l = n.dragBounds,
                            h = t(o.measurementAsPixels(i, a, s)),
                            p = [];
                        if (l) {
                            var c = resolveProp$1(l, n);
                            void 0 !== c[e] && p.push((function(t) {
                                return Math.max(t, o.measurementAsPixels(i, c[e], s))
                            })), void 0 !== c[r] && p.push((function(t) {
                                return Math.min(t, o.measurementAsPixels(i, c[r], s))
                            }))
                        }
                        return s === percent && p.push(interpolate$1([0, o.get(i)], [0, 100], {
                            clamp: !1
                        }), (function(t) {
                            return t + "%"
                        })), p.length ? h.pipe.apply(h, p) : h
                    }
                },
                just = function(t) {
                    return action((function(e) {
                        var r = e.update,
                            i = e.complete;
                        r(t), i()
                    }))
                },
                underDampedSpring = function(t) {
                    var e = t.from,
                        r = t.velocity,
                        i = t.to;
                    return vectorSpring({
                        from: e,
                        to: i,
                        velocity: r,
                        stiffness: 500,
                        damping: 25,
                        restDelta: .5,
                        restSpeed: 10
                    })
                },
                overDampedSpring = function(t) {
                    var e = t.from,
                        r = t.velocity,
                        i = t.to;
                    return vectorSpring({
                        from: e,
                        to: i,
                        velocity: r,
                        stiffness: 700,
                        damping: 0 === i ? 100 : 35
                    })
                },
                linearTween = function(t) {
                    var e = t.from,
                        r = t.to;
                    return tween({
                        from: e,
                        to: r,
                        ease: linear
                    })
                },
                intelligentTransition = {
                    x: underDampedSpring,
                    y: underDampedSpring,
                    z: underDampedSpring,
                    rotate: underDampedSpring,
                    rotateX: underDampedSpring,
                    rotateY: underDampedSpring,
                    rotateZ: underDampedSpring,
                    scaleX: overDampedSpring,
                    scaleY: overDampedSpring,
                    scale: overDampedSpring,
                    opacity: linearTween,
                    default: tween
                },
                dragAction = _assign$4({}, intelligentTransition, {
                    x: createPointer(pointerX, "left", "right", BoundingBoxDimension.width),
                    y: createPointer(pointerY, "top", "bottom", BoundingBoxDimension.height)
                }),
                justAxis = function(t) {
                    var e = t.from;
                    return just(e)
                },
                intelligentDragEnd = _assign$4({}, intelligentTransition, {
                    x: justAxis,
                    y: justAxis
                }),
                defaultTransitions = new Map([
                    ["default", intelligentTransition],
                    ["drag", dragAction],
                    ["dragEnd", intelligentDragEnd]
                ]),
                animationLookup = {
                    tween: tween,
                    spring: vectorSpring,
                    decay: vectorDecay,
                    keyframes: keyframes,
                    physics: vectorPhysics
                },
                easingLookup = {
                    linear: linear,
                    easeIn: easeIn,
                    easeOut: easeOut,
                    easeInOut: easeInOut,
                    circIn: circIn,
                    circOut: circOut,
                    circInOut: circInOut,
                    backIn: backIn,
                    backOut: backOut,
                    backInOut: backInOut,
                    anticipate: anticipate
                },
                auto = {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                },
                valueTypeTests = [number, degrees, percent, px, vw, vh, auto],
                testValueType = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                getValueType$2 = function(t) {
                    return valueTypeTests.find(testValueType(t))
                },
                createPassiveValue = function(t, e, r) {
                    var i = value(r(t));
                    return e.raw.subscribe((function(t) {
                        return i.update(r(t))
                    })), {
                        raw: i
                    }
                },
                _createValue = function(t) {
                    var e = getValueType$2(t);
                    return {
                        raw: value(t),
                        type: e
                    }
                },
                addActionDelay = function(t, e) {
                    return void 0 === t && (t = 0), chain(delay(t), e)
                },
                isCubicBezierArgs = function(t) {
                    return "number" === typeof t[0]
                },
                getAction = function(t, e, r) {
                    var i, n = r.from,
                        a = r.to,
                        s = r.velocity,
                        o = e.type,
                        l = void 0 === o ? "tween" : o,
                        h = e.ease,
                        p = __rest$2(e, ["type", "ease"]);
                    if (invariant(void 0 !== animationLookup[l], "Invalid transition type '" + l + "'. Valid transition types are: tween, spring, decay, physics and keyframes."), "tween" === l && "function" !== typeof h)
                        if ("string" === typeof h) invariant(void 0 !== easingLookup[h], "Invalid easing type '" + h + "'. popmotion.io/pose/api/config"), i = easingLookup[h];
                        else if (Array.isArray(h) && isCubicBezierArgs(h)) {
                        invariant(4 === h.length, "Cubic bezier arrays must contain four numerical values."), i = cubicBezier(h[0], h[1], h[2], h[3])
                    }
                    i = i || h;
                    var c = "keyframes" !== l ? {
                        from: n,
                        to: a,
                        velocity: s,
                        ease: i
                    } : {
                        ease: i
                    };
                    return animationLookup[l](_assign$4({}, c, p))
                },
                isAction = function(t) {
                    return "undefined" !== typeof t.start
                },
                pose = function(t) {
                    var e = t.transformPose,
                        r = t.addListenerToValue,
                        i = t.extendAPI,
                        n = t.readValueFromSource,
                        a = t.posePriority,
                        s = t.setValueNative;
                    return poseFactory({
                        bindOnChange: function(t, e) {
                            return function(r) {
                                t.has(r) && t.get(r).raw.subscribe(e[r])
                            }
                        },
                        readValue: function(t) {
                            return t.raw.get()
                        },
                        setValue: function(t, e) {
                            return t.raw.update(e)
                        },
                        createValue: function(t, e, i, n) {
                            var a = i.elementStyler,
                                s = void 0 === n ? {} : n,
                                o = s.passiveParent,
                                l = s.passiveProps,
                                h = o ? createPassiveValue(t, o, l) : _createValue(t);
                            return h.raw.subscribe(r(e, a)), h
                        },
                        convertValue: function(t, e, i) {
                            var n = i.elementStyler;
                            return t.subscribe(r(e, n)), {
                                raw: t,
                                type: getValueType$2(t.get())
                            }
                        },
                        getTransitionProps: function(t, e) {
                            var r = t.raw,
                                i = t.type;
                            return {
                                from: r.get(),
                                velocity: r.getVelocity(),
                                to: e,
                                type: i
                            }
                        },
                        resolveTarget: function(t, e) {
                            return e
                        },
                        selectValueToRead: function(t) {
                            return t.raw
                        },
                        startAction: function(t, e, r) {
                            var i = t.raw,
                                n = {
                                    update: function(t) {
                                        return i.update(t)
                                    },
                                    complete: r
                                };
                            return e.start(n)
                        },
                        stopAction: function(t) {
                            return t.stop()
                        },
                        getInstantTransition: function(t, e) {
                            var r = e.to;
                            return just(r)
                        },
                        convertTransitionDefinition: function(t, e, r) {
                            if (isAction(e)) return e;
                            var i = e.delay,
                                n = e.min,
                                a = e.max,
                                s = e.round,
                                o = __rest$2(e, ["delay", "min", "max", "round"]),
                                l = getAction(t, o, r),
                                h = [];
                            return i && (l = addActionDelay(i, l)), void 0 !== n && h.push((function(t) {
                                return Math.max(t, n)
                            })), void 0 !== a && h.push((function(t) {
                                return Math.min(t, a)
                            })), s && h.push(Math.round), h.length ? l.pipe.apply(l, h) : l
                        },
                        setValueNative: s,
                        addActionDelay: addActionDelay,
                        defaultTransitions: defaultTransitions,
                        transformPose: e,
                        readValueFromSource: n,
                        posePriority: a,
                        extendAPI: i
                    })
                },
                createDimensions = function(t) {
                    var e = !1,
                        r = {
                            width: 0,
                            height: 0,
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        };
                    return {
                        get: function(t) {
                            return t ? r[t] : r
                        },
                        measure: function() {
                            return r = t.getBoundingClientRect(), e = !0, r
                        },
                        measurementAsPixels: function(t, e, i) {
                            return i === percent ? ("string" === typeof e ? parseFloat(e) : e) / 100 * r[t] : e
                        },
                        has: function() {
                            return e
                        }
                    }
                },
                makeUIEventApplicator = function(t) {
                    var e = t.startEvents,
                        r = t.endEvents,
                        i = t.startPose,
                        n = t.endPose,
                        a = t.startCallback,
                        s = t.endCallback,
                        o = t.useDocumentToEnd,
                        l = t.preventScroll;
                    return function(t, h, p, c) {
                        var f = i + "Start",
                            u = i + "End",
                            m = i + "Move";
                        if (l) {
                            var d = listen(t, "touchmove", {
                                passive: !1
                            }).start((function(t) {
                                t.preventDefault()
                            }));
                            h.set(m, d)
                        }
                        var y = listen(t, e).start((function(e) {
                            p.unset(n), p.set(i), a && c[a] && c[a](e);
                            var l = listen(o ? document.documentElement : t, r + (o ? " mouseenter" : "")).start((function(t) {
                                o && "mouseenter" === t.type && 1 === t.buttons || (h.get(u).stop(), p.unset(i), p.set(n), s && c[s] && c[s](t))
                            }));
                            h.set(u, l)
                        }));
                        h.set(f, y)
                    }
                },
                events = {
                    draggable: makeUIEventApplicator({
                        startEvents: "mousedown touchstart",
                        endEvents: "mouseup touchend",
                        startPose: "drag",
                        endPose: "dragEnd",
                        startCallback: "onDragStart",
                        endCallback: "onDragEnd",
                        useDocumentToEnd: !0,
                        preventScroll: !0
                    }),
                    hoverable: makeUIEventApplicator({
                        startEvents: "mouseenter",
                        endEvents: "mouseleave",
                        startPose: "hover",
                        endPose: "hoverEnd"
                    }),
                    focusable: makeUIEventApplicator({
                        startEvents: "focus",
                        endEvents: "blur",
                        startPose: "focus",
                        endPose: "blur"
                    }),
                    pressable: makeUIEventApplicator({
                        startEvents: "mousedown touchstart",
                        endEvents: "mouseup touchend",
                        startPose: "press",
                        endPose: "pressEnd",
                        startCallback: "onPressStart",
                        endCallback: "onPressEnd",
                        useDocumentToEnd: !0
                    })
                },
                eventKeys = Object.keys(events),
                appendEventListeners = function(t, e, r, i) {
                    var n = i.props;
                    return eventKeys.forEach((function(i) {
                        n[i] && events[i](t, e, r, n)
                    }))
                },
                ORIGIN_START = 0,
                ORIGIN_CENTER = "50%",
                ORIGIN_END = "100%",
                findCenter = function(t) {
                    var e = t.top,
                        r = t.right,
                        i = t.bottom;
                    return {
                        x: (t.left + r) / 2,
                        y: (e + i) / 2
                    }
                },
                positionalProps = ["width", "height", "top", "left", "bottom", "right"],
                positionalPropsDict = new Set(positionalProps),
                checkPositionalProp = function(t) {
                    return positionalPropsDict.has(t)
                },
                hasPositionalProps = function(t) {
                    return Object.keys(t).some(checkPositionalProp)
                },
                isFlipPose = function(t, e, r) {
                    return r.props.element instanceof HTMLElement && (!0 === t || "flip" === e)
                },
                setValue = function(t, e, r) {
                    var i = t.values,
                        n = t.props;
                    if (i.has(e)) {
                        var a = i.get(e).raw;
                        a.update(r), a.update(r)
                    } else i.set(e, {
                        raw: value(r, (function(t) {
                            return n.elementStyler.set(e, t)
                        }))
                    })
                },
                explicitlyFlipPose = function(t, e) {
                    var r = t.props,
                        i = r.dimensions,
                        n = r.elementStyler;
                    i.measure();
                    e.width, e.height, e.top, e.left, e.bottom, e.right, e.position;
                    var a = __rest$2(e, ["width", "height", "top", "left", "bottom", "right", "position"]),
                        s = positionalProps.concat("position").reduce((function(r, i) {
                            return void 0 !== e[i] && (r[i] = resolveProp$1(e[i], t.props)), r
                        }), {});
                    return n.set(s).render(), implicitlyFlipPose(t, a)
                },
                implicitlyFlipPose = function(t, e) {
                    var r = t.props,
                        i = r.dimensions,
                        n = r.element,
                        a = r.elementStyler;
                    if (!i.has()) return {};
                    var s = i.get(),
                        o = measureWithoutTransform(n),
                        l = s.left === o.left ? ORIGIN_START : s.right === o.right ? ORIGIN_END : ORIGIN_CENTER,
                        h = s.top === o.top ? ORIGIN_START : s.bottom === o.bottom ? ORIGIN_END : ORIGIN_CENTER;
                    a.set({
                        originX: l,
                        originY: h
                    }), s.width !== o.width && (setValue(t, "scaleX", s.width / o.width), e.scaleX = 1), s.height !== o.height && (setValue(t, "scaleY", s.height / o.height), e.scaleY = 1);
                    var p = findCenter(s),
                        c = findCenter(o);
                    return l === ORIGIN_CENTER && (setValue(t, "x", p.x - c.x), e.x = 0), h === ORIGIN_CENTER && (setValue(t, "y", p.y - c.y), e.y = 0), a.render(), e
                },
                flipPose = function(t, e) {
                    return hasPositionalProps(e) ? explicitlyFlipPose(t, e) : implicitlyFlipPose(t, e)
                },
                getPosFromMatrix = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                getTranslateFromMatrix = function(t, e) {
                    return function(r, i, n) {
                        var a = n.transform;
                        if ("none" === a) return 0;
                        var s = a.match(/^matrix3d\((.+)\)$/);
                        return s ? getPosFromMatrix(s[1], e) : getPosFromMatrix(a.match(/^matrix\((.+)\)$/)[1], t)
                    }
                },
                positionalValues = {
                    width: function(t, e) {
                        var r = e.width;
                        return r
                    },
                    height: function(t, e) {
                        var r = e.height;
                        return r
                    },
                    top: function(t, e, r) {
                        var i = r.top;
                        return parseFloat(i)
                    },
                    left: function(t, e, r) {
                        var i = r.left;
                        return parseFloat(i)
                    },
                    bottom: function(t, e, r) {
                        var i = e.height,
                            n = r.top;
                        return parseFloat(n) + i
                    },
                    right: function(t, e, r) {
                        var i = e.width,
                            n = r.left;
                        return parseFloat(n) + i
                    },
                    x: getTranslateFromMatrix(4, 13),
                    y: getTranslateFromMatrix(5, 14)
                },
                isPositionalKey = function(t) {
                    return void 0 !== positionalValues[t]
                },
                isPositional = function(t) {
                    return Object.keys(t).some(isPositionalKey)
                },
                convertPositionalUnits = function(t, e) {
                    var r = t.values,
                        i = t.props,
                        n = i.element,
                        a = i.elementStyler,
                        s = Object.keys(e).filter(isPositionalKey),
                        o = [],
                        l = getComputedStyle(n),
                        h = !1;
                    if (s.forEach((function(n) {
                            var a = r.get(n),
                                s = getValueType$2(a.raw.get()),
                                l = resolveProp$1(e[n], i);
                            s !== getValueType$2(l) && (o.push(n), h || (h = !0, e.applyAtEnd = e.applyAtEnd ? _assign$4({}, e.applyAtEnd) : {}), e.applyAtEnd[n] = e.applyAtEnd[n] || e[n], setValue(t, n, l))
                        })), !o.length) return e;
                    var p = n.getBoundingClientRect(),
                        c = {
                            top: l.top,
                            left: l.left,
                            bottom: l.bottom,
                            right: l.right,
                            transform: l.transform
                        };
                    a.render();
                    var f = n.getBoundingClientRect();
                    return o.forEach((function(r) {
                        setValue(t, r, positionalValues[r](n, p, c)), e[r] = positionalValues[r](n, f, l)
                    })), a.render(), e
                },
                getCurrent = function(t) {
                    return function(e) {
                        return e.elementStyler.get(t)
                    }
                },
                dragPoses = function(t) {
                    var e = {
                            preTransition: function(t) {
                                return t.dimensions.measure()
                            }
                        },
                        r = {};
                    return !0 !== t && "x" !== t || (e.x = r.x = getCurrent("x")), !0 !== t && "y" !== t || (e.y = r.y = getCurrent("y")), {
                        drag: e,
                        dragEnd: r
                    }
                },
                createPoseConfig = function(t, e) {
                    var r = e.onDragStart,
                        i = e.onDragEnd,
                        n = e.onPressStart,
                        a = e.onPressEnd,
                        s = e.draggable,
                        o = e.hoverable,
                        l = e.focusable,
                        h = e.pressable,
                        p = e.dragBounds,
                        c = __rest$2(e, ["onDragStart", "onDragEnd", "onPressStart", "onPressEnd", "draggable", "hoverable", "focusable", "pressable", "dragBounds"]),
                        f = _assign$4({
                            flip: {}
                        }, c, {
                            props: _assign$4({}, c.props, {
                                onDragStart: r,
                                onDragEnd: i,
                                onPressStart: n,
                                onPressEnd: a,
                                dragBounds: p,
                                draggable: s,
                                hoverable: o,
                                focusable: l,
                                pressable: h,
                                element: t,
                                elementStyler: index(t, {
                                    preparseOutput: !1
                                }),
                                dimensions: createDimensions(t)
                            })
                        });
                    if (s) {
                        var u = dragPoses(s),
                            m = u.drag,
                            d = u.dragEnd;
                        f.drag = _assign$4({}, m, f.drag), f.dragEnd = _assign$4({}, d, f.dragEnd)
                    }
                    return f
                },
                domPose = pose({
                    posePriority: ["drag", "press", "focus", "hover"],
                    transformPose: function(t, e, r) {
                        var i = t.flip,
                            n = __rest$2(t, ["flip"]);
                        return isFlipPose(i, e, r) ? flipPose(r, n) : isPositional(n) ? convertPositionalUnits(r, n) : n
                    },
                    forceRender: function(t) {
                        t.elementStyler.render()
                    },
                    addListenerToValue: function(t, e) {
                        return function(r) {
                            return e.set(t, r)
                        }
                    },
                    readValueFromSource: function(t, e) {
                        var r = e.elementStyler,
                            i = e.dragBounds,
                            n = r.get(t);
                        if (i && ("x" === t || "y" === t)) {
                            var a = "x" === t ? i.left || i.right : i.top || i.bottom;
                            if (a) n = getValueType$2(a).transform(n)
                        }
                        return isNaN(n) ? n : parseFloat(n)
                    },
                    setValueNative: function(t, e, r) {
                        return r.elementStyler.set(t, e)
                    },
                    extendAPI: function(t, e, r) {
                        var i = e.props,
                            n = e.activeActions,
                            a = i.dimensions.measure,
                            s = _assign$4({}, t, {
                                addChild: function(e, r) {
                                    return t._addChild(createPoseConfig(e, r), domPose)
                                },
                                measure: a,
                                flip: function(e) {
                                    return e && (a(), e()), t.set("flip")
                                }
                            });
                        return i.elementStyler.render(), appendEventListeners(i.element, n, s, r), s
                    }
                }),
                domPose$1 = function(t, e) {
                    return domPose(createPoseConfig(t, e))
                };

            function memoize(t) {
                var e = {};
                return function(r) {
                    return void 0 === e[r] && (e[r] = t(r)), e[r]
                }
            }
            var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                index$2 = memoize((function(t) {
                    return reactPropsRegex.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91
                })),
                hasChanged = function(t, e) {
                    if (t === e) return !1;
                    var r = Array.isArray(t),
                        i = Array.isArray(e);
                    if (r !== i || !r && !i) return !0;
                    if (r && i) {
                        var n = t.length;
                        if (n !== e.length) return !0;
                        for (var a = 0; a < n; a++)
                            if (t[a] !== e[a]) return !0
                    }
                    return !1
                },
                pickAssign = function(t, e) {
                    return e.reduce((function(e, r) {
                        for (var i in r) t(i) && (e[i] = r[i]);
                        return e
                    }), {})
                },
                _a$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),
                PoseParentConsumer = _a$1.Consumer,
                PoseParentProvider = _a$1.Provider,
                calcPopFromFlowStyle = function(t) {
                    return {
                        position: "absolute",
                        top: t.offsetTop,
                        left: t.offsetLeft,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                },
                hasPose = function(t, e) {
                    return Array.isArray(t) ? -1 !== t.indexOf(e) : t === e
                },
                objectToMap = function(t) {
                    return Object.keys(t).reduce((function(e, r) {
                        return e.set(r, {
                            raw: t[r]
                        }), e
                    }), new Map)
                },
                testAlwaysTrue = function() {
                    return !0
                },
                filterProps = function(t) {
                    t.elementType, t.poseConfig, t.onValueChange, t.innerRef, t._pose, t.pose, t.initialPose, t.poseKey, t.onPoseComplete, t.getParentPoseConfig, t.registerChild, t.onUnmount, t.getInitialPoseFromParent, t.popFromFlow, t.values, t.parentValues, t.onDragStart, t.onDragEnd, t.onPressStart, t.onPressEnd;
                    return __rest(t, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"])
                },
                PoseElement = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        r.children = new Set, r.childrenHandlers = {
                            registerChild: function(t) {
                                r.children.add(t), r.poser && r.flushChildren()
                            },
                            onUnmount: function(t) {
                                return r.poser.removeChild(t)
                            },
                            getParentPoseConfig: function() {
                                return r.poseConfig
                            },
                            getInitialPoseFromParent: function() {
                                return r.getInitialPose()
                            }
                        }, r.setRef = function(t) {
                            warning(null === t || t instanceof Element && void 0 === r.ref, "ref must be provided to the same DOM component for the entire lifecycle of a posed component."), r.ref = t;
                            var e = r.props.innerRef;
                            e && ("function" === typeof e ? e(t) : e.current = t)
                        }, r.shouldForwardProp = "string" === typeof r.props.elementType ? index$2 : testAlwaysTrue;
                        var i = r.props.poseConfig;
                        return r.poseConfig = "function" === typeof i ? i(filterProps(e)) : i, r
                    }
                    return __extends(e, t), e.prototype.getInitialPose = function() {
                        var t = this.props,
                            e = t.getInitialPoseFromParent,
                            r = t.pose,
                            i = t._pose,
                            n = t.initialPose;
                        if (n) return n;
                        var a = e && e(),
                            s = (Array.isArray(a) ? a : [a]).concat(r, i).filter(Boolean);
                        return s.length > 0 ? s : void 0
                    }, e.prototype.getFirstPose = function() {
                        var t = this.props,
                            e = t.initialPose,
                            r = t.pose,
                            i = t._pose;
                        if (e) {
                            var n = (Array.isArray(r) ? r : [r]).concat(i).filter(Boolean);
                            return 1 === n.length ? n[0] : n
                        }
                    }, e.prototype.getSetProps = function() {
                        var t = filterProps(this.props);
                        return this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement ? this.popStyle ? t.style = this.popStyle : (t.style = _assign({}, t.style, calcPopFromFlowStyle(this.ref)), this.popStyle = t.style) : this.popStyle = null, t
                    }, e.prototype.componentDidMount = function() {
                        var t = this;
                        invariant(this.ref instanceof Element, "No valid DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the ref to the host DOM node via the React.forwardRef function.");
                        var e = this.props,
                            r = e.onValueChange,
                            i = e.registerChild,
                            n = e.values,
                            a = e.parentValues,
                            s = e.onDragStart,
                            o = e.onDragEnd,
                            l = e.onPressStart,
                            h = e.onPressEnd,
                            p = _assign({}, this.poseConfig, {
                                initialPose: this.getInitialPose(),
                                values: n || this.poseConfig.values,
                                parentValues: a ? objectToMap(a) : void 0,
                                props: this.getSetProps(),
                                onDragStart: s,
                                onDragEnd: o,
                                onPressStart: l,
                                onPressEnd: h,
                                onChange: r
                            });
                        i ? i({
                            element: this.ref,
                            poseConfig: p,
                            onRegistered: function(e) {
                                return t.initPoser(e)
                            }
                        }) : this.initPoser(domPose$1(this.ref, p))
                    }, e.prototype.getSnapshotBeforeUpdate = function() {
                        var t = this.props,
                            e = t.pose,
                            r = t._pose;
                        return (hasPose(e, "flip") || hasPose(r, "flip")) && this.poser.measure(), null
                    }, e.prototype.componentDidUpdate = function(t) {
                        var e = this.props,
                            r = e.pose,
                            i = e._pose,
                            n = e.poseKey;
                        this.poser.setProps(this.getSetProps()), (n !== t.poseKey || hasChanged(t.pose, r) || "flip" === r) && this.setPose(r), i === t._pose && "flip" !== i || this.setPose(i)
                    }, e.prototype.componentWillUnmount = function() {
                        if (this.poser) {
                            var t = this.props.onUnmount;
                            t && t(this.poser), this.poser.destroy()
                        }
                    }, e.prototype.initPoser = function(t) {
                        this.poser = t, this.flushChildren();
                        var e = this.getFirstPose();
                        e && this.setPose(e)
                    }, e.prototype.setPose = function(t) {
                        var e = this,
                            r = this.props.onPoseComplete,
                            i = Array.isArray(t) ? t : [t];
                        Promise.all(i.map((function(t) {
                            return t && e.poser.set(t)
                        }))).then((function() {
                            return r && r(t)
                        }))
                    }, e.prototype.flushChildren = function() {
                        var t = this;
                        this.children.forEach((function(e) {
                            var r = e.element,
                                i = e.poseConfig;
                            return (0, e.onRegistered)(t.poser.addChild(r, i))
                        })), this.children.clear()
                    }, e.prototype.render = function() {
                        var t = this.props.elementType;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PoseParentProvider, {
                            value: this.childrenHandlers
                        }, Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t, pickAssign(this.shouldForwardProp, [this.getSetProps(), {
                            ref: this.setRef
                        }])))
                    }, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent),
                supportedElements = ["a", "article", "aside", "audio", "b", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dialog", "div", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "i", "iframe", "img", "input", "label", "legend", "li", "nav", "object", "ol", "option", "p", "param", "picture", "pre", "progress", "q", "section", "select", "span", "strong", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "ul", "video", "circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
                componentCache = new Map,
                createComponentFactory = function(t) {
                    var e = function(e) {
                        return void 0 === e && (e = {}), Object(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(r, i) {
                            var n = r.withParent,
                                a = void 0 === n || n,
                                s = __rest(r, ["withParent"]);
                            return warning(void 0 === s.innerRef, "innerRef is deprecated. Please use ref instead."), !a || s.parentValues ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PoseElement, _assign({
                                poseConfig: e,
                                innerRef: i,
                                elementType: t
                            }, s)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PoseParentConsumer, null, (function(r) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PoseElement, _assign({
                                    poseConfig: e,
                                    elementType: t,
                                    innerRef: i
                                }, s, r))
                            }))
                        }))
                    };
                    return componentCache.set(t, e), e
                },
                getComponentFactory = function(t) {
                    return componentCache.has(t) ? componentCache.get(t) : createComponentFactory(t)
                },
                posed = function(t) {
                    return getComponentFactory(t)
                };
            supportedElements.reduce((function(t, e) {
                return t[e] = createComponentFactory(e), t
            }), posed);
            var getKey = function(t) {
                    return invariant(t && null !== t.key, "Every child of Transition must be given a unique key"), ("number" === typeof t.key ? t.key.toString() : t.key).replace(".$", "")
                },
                prependProps = function(t, e) {
                    return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t.type, _assign({
                        key: t.key,
                        ref: t.ref
                    }, e, t.props))
                },
                handleTransition = function(t, e) {
                    var r = e.displayedChildren,
                        i = e.finishedLeaving,
                        n = e.hasInitialized,
                        a = e.indexedChildren,
                        s = e.scheduleChildRemoval,
                        o = t.children,
                        l = t.preEnterPose,
                        h = t.enterPose,
                        p = t.exitPose,
                        c = t.animateOnMount,
                        f = (t.enterAfterExit, t.flipMove),
                        u = (t.onRest, __rest(t, ["children", "preEnterPose", "enterPose", "exitPose", "animateOnMount", "enterAfterExit", "flipMove", "onRest"])),
                        m = makeChildList(o),
                        d = {
                            displayedChildren: []
                        };
                    var y = r.map(getKey),
                        g = m.map(getKey),
                        v = 0 !== Object.keys(u).length,
                        x = new Set(g.filter((function(t) {
                            return i.hasOwnProperty(t) || -1 === y.indexOf(t)
                        })));
                    x.forEach((function(t) {
                        return delete i[t]
                    }));
                    var b = [],
                        P = {};
                    y.forEach((function(t) {
                        if (!x.has(t)) {
                            var e = i.hasOwnProperty(t);
                            (e || -1 === g.indexOf(t)) && (b.push(t), e || (i[t] = !1, P[t] = !0))
                        }
                    }));
                    var E = new Set(y.filter((function(t, e) {
                        return !x.has(t) || -1 === b.indexOf(t)
                    })));
                    return m.forEach((function(t) {
                        var e = {};
                        x.has(t.key) ? ((n || c) && (e.initialPose = l), e._pose = h) : E.has(t.key) && f ? e._pose = [h, "flip"] : e._pose = h;
                        var r = Object(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(t, e);
                        a[t.key] = r, d.displayedChildren.push(v ? prependProps(r, u) : r)
                    })), b.forEach((function(t) {
                        var e = a[t],
                            r = P[t] ? Object(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(e, {
                                _pose: p,
                                onPoseComplete: function(r) {
                                    r === p && s(t);
                                    var i = e.props.onPoseComplete;
                                    i && i(r)
                                },
                                popFromFlow: f
                            }) : e,
                            i = y.indexOf(t);
                        a[e.key] = r, d.displayedChildren.splice(i, 0, v ? prependProps(r, u) : r)
                    })), d
                },
                handleChildrenTransitions = function(t, e) {
                    var r = handleTransition(t, e);
                    return r.hasInitialized = !0, r
                },
                makeChildList = function(t) {
                    var e = [];
                    return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(t, (function(t) {
                        return t && e.push(t)
                    })), e
                },
                Transition = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            displayedChildren: [],
                            finishedLeaving: {},
                            hasInitialized: !1,
                            indexedChildren: {},
                            scheduleChildRemoval: function(t) {
                                return e.removeChild(t)
                            }
                        }, e
                    }
                    return __extends(e, t), e.prototype.removeChild = function(t) {
                        var e = this.state,
                            r = e.displayedChildren,
                            i = e.finishedLeaving,
                            n = this.props,
                            a = n.enterAfterExit,
                            s = n.onRest;
                        if (i.hasOwnProperty(t) && (i[t] = !0, Object.keys(i).every((function(t) {
                                return i[t]
                            })))) {
                            var o = r.filter((function(t) {
                                    return !i.hasOwnProperty(t.key)
                                })),
                                l = a ? _assign({
                                    finishedLeaving: {}
                                }, handleChildrenTransitions(_assign({}, this.props, {
                                    enterAfterExit: !1
                                }), _assign({}, this.state, {
                                    displayedChildren: o
                                }))) : {
                                    finishedLeaving: {},
                                    displayedChildren: o
                                };
                            this.setState(l, s)
                        }
                    }, e.prototype.shouldComponentUpdate = function(t, e) {
                        return this.state !== e
                    }, e.prototype.render = function() {
                        return this.state.displayedChildren
                    }, e.defaultProps = {
                        flipMove: !1,
                        enterAfterExit: !1,
                        preEnterPose: "exit",
                        enterPose: "enter",
                        exitPose: "exit"
                    }, e.getDerivedStateFromProps = handleChildrenTransitions, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                PoseGroup = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return __extends(e, t), e.prototype.render = function() {
                        return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Transition, _assign({}, this.props))
                    }, e.defaultProps = {
                        flipMove: !0
                    }, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                PI = Math.PI,
                defaultColors = ["#A45BF1", "#25C6F6", "#72F753", "#F76C88", "#F5F770"],
                createElements = function(t, e, r, i, n) {
                    return Array.from({
                        length: e
                    }).map((function(e, a) {
                        var s = document.createElement("span"),
                            o = n[a % n.length];
                        return s.style["background-color"] = o, s.style.width = r + "px", s.style.height = r + "px", s.style.position = "absolute", s.style.zIndex = i, t.appendChild(s), s
                    }))
                },
                radiansFrom = function(t) {
                    return t * (PI / 180)
                },
                generatePhysics = function(t, e, r, i) {
                    var n = radiansFrom(t),
                        a = radiansFrom(e);
                    return {
                        x: 0,
                        y: 0,
                        wobble: 10 * i(),
                        velocity: .5 * r + i() * r,
                        angle2D: -n + (.5 * a - i() * a),
                        angle3D: -PI / 4 + i() * (PI / 2),
                        tiltAngle: i() * PI
                    }
                },
                updateFetti = function(t, e, r, i) {
                    t.physics.x += Math.cos(t.physics.angle2D) * t.physics.velocity, t.physics.y += Math.sin(t.physics.angle2D) * t.physics.velocity, t.physics.z += Math.sin(t.physics.angle3D) * t.physics.velocity, t.physics.wobble += .05, t.physics.velocity *= r, t.physics.y += 3.5, t.physics.tiltAngle += .15;
                    var n = t.physics,
                        a = n.x,
                        s = n.y,
                        o = n.tiltAngle,
                        l = n.wobble,
                        h = "translate3d(" + (i % 2 === 0 ? a + (6 * Math.sin(l) + e) : a + (12 * Math.cos(l) + e)) + "px, " + (s + 5 * Math.sin(l)) + "px, 0) rotate3d(1, 1, 1, " + o + "rad)";
                    t.element.style.transform = h, t.element.style.scale = 1 - .2 * e, t.element.style.opacity = 1 - e
                },
                animate = function(t, e, r, i) {
                    var n = i,
                        a = 0;
                    window.requestAnimationFrame((function i() {
                        e.forEach((function(t, e) {
                            return updateFetti(t, a / n, r, e)
                        })), (a += 1) < n ? window.requestAnimationFrame(i) : e.forEach((function(e) {
                            if (e.element.parentNode === t) return t.removeChild(e.element)
                        }))
                    }))
                },
                confetti = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = e.elementCount,
                        i = void 0 === r ? 50 : r,
                        n = e.elementSize,
                        a = void 0 === n ? 8 : n,
                        s = e.colors,
                        o = void 0 === s ? defaultColors : s,
                        l = e.angle,
                        h = void 0 === l ? 90 : l,
                        p = e.spread,
                        c = void 0 === p ? 45 : p,
                        f = e.decay,
                        u = void 0 === f ? .9 : f,
                        m = e.lifetime,
                        d = void 0 === m ? 200 : m,
                        y = e.startVelocity,
                        g = void 0 === y ? 35 : y,
                        v = e.zIndex,
                        x = void 0 === v ? 0 : v,
                        b = e.random,
                        P = void 0 === b ? Math.random : b,
                        E = createElements(t, i, a, x, o),
                        _ = E.map((function(t) {
                            return {
                                element: t,
                                physics: generatePhysics(h, c, g, P)
                            }
                        }));
                    animate(t, _, u, d)
                },
                PI$1 = Math.PI,
                defaultEmoji = ["\ud83d\udc4d", "\ud83d\ude0a", "\ud83c\udf89"],
                createElements$1 = function(t, e, r, i, n) {
                    return Array.from({
                        length: e
                    }).map((function(e, a) {
                        var s = document.createElement("span"),
                            o = n[a % n.length];
                        return s.innerHTML = o, s.style.fontSize = r + "px", s.style.position = "absolute", s.style.zIndex = i, t.appendChild(s), s
                    }))
                },
                radiansFrom$1 = function(t) {
                    return t * (PI$1 / 180)
                },
                generatePhysics$1 = function(t, e, r, i) {
                    var n = radiansFrom$1(t),
                        a = radiansFrom$1(e);
                    return {
                        x: 0,
                        y: 0,
                        wobble: 10 * i(),
                        velocity: .5 * r + i() * r,
                        angle2D: -n + (.5 * a - i() * a),
                        angle3D: -PI$1 / 4 + i() * (PI$1 / 2),
                        tiltAngle: i() * PI$1
                    }
                },
                updateMojis = function(t, e, r) {
                    t.physics.x += Math.cos(t.physics.angle2D) * t.physics.velocity, t.physics.y += Math.sin(t.physics.angle2D) * t.physics.velocity, t.physics.wobble += 0, t.physics.velocity *= r, t.physics.y += 5, t.physics.tiltAngle += .1;
                    var i = t.physics,
                        n = "translate3d(" + (i.x + 0) + "px, " + (i.y + 0) + "px, 0) rotate(" + i.tiltAngle + "rad)";
                    t.element.style.transform = n, t.element.style.opacity = 1 - e
                },
                animate$1 = function(t, e, r, i) {
                    var n = i,
                        a = 0;
                    window.requestAnimationFrame((function i() {
                        e.forEach((function(t) {
                            return updateMojis(t, a / n, r)
                        })), (a += 1) < n ? window.requestAnimationFrame(i) : e.forEach((function(e) {
                            if (e.element.parentNode === t) return t.removeChild(e.element)
                        }))
                    }))
                },
                emoji = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = e.angle,
                        i = void 0 === r ? 90 : r,
                        n = e.decay,
                        a = void 0 === n ? .9 : n,
                        s = e.spread,
                        o = void 0 === s ? 45 : s,
                        l = e.startVelocity,
                        h = void 0 === l ? 35 : l,
                        p = e.elementCount,
                        c = void 0 === p ? 50 : p,
                        f = e.elementSize,
                        u = void 0 === f ? 25 : f,
                        m = e.lifetime,
                        d = void 0 === m ? 200 : m,
                        y = e.zIndex,
                        g = void 0 === y ? 0 : y,
                        v = e.emoji,
                        x = void 0 === v ? defaultEmoji : v,
                        b = e.random,
                        P = void 0 === b ? Math.random : b,
                        E = createElements$1(t, c, u, g, x),
                        _ = E.map((function(t) {
                            return {
                                element: t,
                                physics: generatePhysics$1(i, o, h, P)
                            }
                        }));
                    animate$1(t, _, a, d)
                };

            function createCommonjsModule(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }
            var lottie = createCommonjsModule((function(module) {
                    var root, factory;
                    "undefined" !== typeof navigator && (root = window || {}, factory = function(window) {
                        var svgNS = "http://www.w3.org/2000/svg",
                            locationHref = "",
                            initialDefaultFrame = -999999,
                            subframeEnabled = !0,
                            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                            bm_pow = Math.pow,
                            bm_sqrt = Math.sqrt,
                            bm_floor = Math.floor,
                            bm_max = Math.max,
                            bm_min = Math.min,
                            BMMath = {};

                        function ProjectInterface() {
                            return {}
                        }! function() {
                            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                                r = e.length;
                            for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
                        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                            if ("object" === typeof t && t.length) {
                                var e, r = createSizedArray(t.length),
                                    i = t.length;
                                for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                                return r
                            }
                            return Math.abs(t)
                        };
                        var defaultCurveSegments = 150,
                            degToRads = Math.PI / 180,
                            roundCorner = .5519;

                        function styleDiv(t) {
                            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
                        }

                        function BMEnterFrameEvent(t, e, r, i) {
                            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
                        }

                        function BMCompleteEvent(t, e) {
                            this.type = t, this.direction = e < 0 ? -1 : 1
                        }

                        function BMCompleteLoopEvent(t, e, r, i) {
                            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                        }

                        function BMSegmentStartEvent(t, e, r) {
                            this.type = t, this.firstFrame = e, this.totalFrames = r
                        }

                        function BMDestroyEvent(t, e) {
                            this.type = t, this.target = e
                        }
                        var createElementID = function() {
                            var t = 0;
                            return function() {
                                return "__lottie_element_" + ++t
                            }
                        }();

                        function HSVtoRGB(t, e, r) {
                            var i, n, a, s, o, l, h, p;
                            switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), s % 6) {
                                case 0:
                                    i = r, n = p, a = l;
                                    break;
                                case 1:
                                    i = h, n = r, a = l;
                                    break;
                                case 2:
                                    i = l, n = r, a = p;
                                    break;
                                case 3:
                                    i = l, n = h, a = r;
                                    break;
                                case 4:
                                    i = p, n = l, a = r;
                                    break;
                                case 5:
                                    i = r, n = l, a = h
                            }
                            return [i, n, a]
                        }

                        function RGBtoHSV(t, e, r) {
                            var i, n = Math.max(t, e, r),
                                a = Math.min(t, e, r),
                                s = n - a,
                                o = 0 === n ? 0 : s / n,
                                l = n / 255;
                            switch (n) {
                                case a:
                                    i = 0;
                                    break;
                                case t:
                                    i = e - r + s * (e < r ? 6 : 0), i /= 6 * s;
                                    break;
                                case e:
                                    i = r - t + 2 * s, i /= 6 * s;
                                    break;
                                case r:
                                    i = t - e + 4 * s, i /= 6 * s
                            }
                            return [i, o, l]
                        }

                        function addSaturationToRGB(t, e) {
                            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
                        }

                        function addBrightnessToRGB(t, e) {
                            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
                        }

                        function addHueToRGB(t, e) {
                            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
                        }
                        var rgbToHex = function() {
                            var t, e, r = [];
                            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 == e.length ? "0" + e : e;
                            return function(t, e, i) {
                                return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
                            }
                        }();

                        function BaseEvent() {}
                        BaseEvent.prototype = {
                            triggerEvent: function(t, e) {
                                if (this._cbs[t])
                                    for (var r = this._cbs[t].length, i = 0; i < r; i++) this._cbs[t][i](e)
                            },
                            addEventListener: function(t, e) {
                                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                                    function() {
                                        this.removeEventListener(t, e)
                                    }.bind(this)
                            },
                            removeEventListener: function(t, e) {
                                if (e) {
                                    if (this._cbs[t]) {
                                        for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                                        this._cbs[t].length || (this._cbs[t] = null)
                                    }
                                } else this._cbs[t] = null
                            }
                        };
                        var createTypedArray = "function" === typeof Uint8ClampedArray && "function" === typeof Float32Array ? function(t, e) {
                            return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
                        } : function(t, e) {
                            var r, i = 0,
                                n = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    r = 1;
                                    break;
                                default:
                                    r = 1.1
                            }
                            for (i = 0; i < e; i += 1) n.push(r);
                            return n
                        };

                        function createSizedArray(t) {
                            return Array.apply(null, {
                                length: t
                            })
                        }

                        function createNS(t) {
                            return document.createElementNS(svgNS, t)
                        }

                        function createTag(t) {
                            return document.createElement(t)
                        }

                        function DynamicPropertyContainer() {}
                        DynamicPropertyContainer.prototype = {
                            addDynamicProperty: function(t) {
                                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                            },
                            iterateDynamicProperties: function() {
                                this._mdf = !1;
                                var t, e = this.dynamicProperties.length;
                                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                            },
                            initDynamicPropertyContainer: function(t) {
                                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                            }
                        };
                        var getBlendMode = function() {
                                var t = {
                                    0: "source-over",
                                    1: "multiply",
                                    2: "screen",
                                    3: "overlay",
                                    4: "darken",
                                    5: "lighten",
                                    6: "color-dodge",
                                    7: "color-burn",
                                    8: "hard-light",
                                    9: "soft-light",
                                    10: "difference",
                                    11: "exclusion",
                                    12: "hue",
                                    13: "saturation",
                                    14: "color",
                                    15: "luminosity"
                                };
                                return function(e) {
                                    return t[e] || ""
                                }
                            }(),
                            Matrix = function() {
                                var t = Math.cos,
                                    e = Math.sin,
                                    r = Math.tan,
                                    i = Math.round;

                                function n() {
                                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                                }

                                function a(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        n = e(r);
                                    return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function s(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        n = e(r);
                                    return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1)
                                }

                                function o(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        n = e(r);
                                    return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1)
                                }

                                function l(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        n = e(r);
                                    return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function h(t, e) {
                                    return this._t(1, e, t, 1, 0, 0)
                                }

                                function p(t, e) {
                                    return this.shear(r(t), r(e))
                                }

                                function c(i, n) {
                                    var a = t(n),
                                        s = e(n);
                                    return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function f(t, e, r) {
                                    return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                                }

                                function u(t, e, r, i, n, a, s, o, l, h, p, c, f, u, m, d) {
                                    return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = n, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = u, this.props[14] = m, this.props[15] = d, this
                                }

                                function m(t, e, r) {
                                    return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                                }

                                function d(t, e, r, i, n, a, s, o, l, h, p, c, f, u, m, d) {
                                    var y = this.props;
                                    if (1 === t && 0 === e && 0 === r && 0 === i && 0 === n && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * u, y[14] = y[14] * p + y[15] * m, y[15] = y[15] * d, this._identityCalculated = !1, this;
                                    var g = y[0],
                                        v = y[1],
                                        x = y[2],
                                        b = y[3],
                                        P = y[4],
                                        E = y[5],
                                        _ = y[6],
                                        k = y[7],
                                        S = y[8],
                                        C = y[9],
                                        A = y[10],
                                        T = y[11],
                                        D = y[12],
                                        w = y[13],
                                        M = y[14],
                                        F = y[15];
                                    return y[0] = g * t + v * n + x * l + b * f, y[1] = g * e + v * a + x * h + b * u, y[2] = g * r + v * s + x * p + b * m, y[3] = g * i + v * o + x * c + b * d, y[4] = P * t + E * n + _ * l + k * f, y[5] = P * e + E * a + _ * h + k * u, y[6] = P * r + E * s + _ * p + k * m, y[7] = P * i + E * o + _ * c + k * d, y[8] = S * t + C * n + A * l + T * f, y[9] = S * e + C * a + A * h + T * u, y[10] = S * r + C * s + A * p + T * m, y[11] = S * i + C * o + A * c + T * d, y[12] = D * t + w * n + M * l + F * f, y[13] = D * e + w * a + M * h + F * u, y[14] = D * r + w * s + M * p + F * m, y[15] = D * i + w * o + M * c + F * d, this._identityCalculated = !1, this
                                }

                                function y() {
                                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                                }

                                function g(t) {
                                    for (var e = 0; e < 16;) {
                                        if (t.props[e] !== this.props[e]) return !1;
                                        e += 1
                                    }
                                    return !0
                                }

                                function v(t) {
                                    var e;
                                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
                                }

                                function x(t) {
                                    var e;
                                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                                }

                                function b(t, e, r) {
                                    return {
                                        x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                                        y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                                        z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                                    }
                                }

                                function P(t, e, r) {
                                    return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                                }

                                function E(t, e, r) {
                                    return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                                }

                                function _(t, e, r) {
                                    return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                                }

                                function k(t) {
                                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                        r = this.props[5] / e,
                                        i = -this.props[1] / e,
                                        n = -this.props[4] / e,
                                        a = this.props[0] / e,
                                        s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                                    return [t[0] * r + t[1] * n + s, t[0] * i + t[1] * a + o, 0]
                                }

                                function S(t) {
                                    var e, r = t.length,
                                        i = [];
                                    for (e = 0; e < r; e += 1) i[e] = k(t[e]);
                                    return i
                                }

                                function C(t, e, r) {
                                    var i = createTypedArray("float32", 6);
                                    if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
                                    else {
                                        var n = this.props[0],
                                            a = this.props[1],
                                            s = this.props[4],
                                            o = this.props[5],
                                            l = this.props[12],
                                            h = this.props[13];
                                        i[0] = t[0] * n + t[1] * s + l, i[1] = t[0] * a + t[1] * o + h, i[2] = e[0] * n + e[1] * s + l, i[3] = e[0] * a + e[1] * o + h, i[4] = r[0] * n + r[1] * s + l, i[5] = r[0] * a + r[1] * o + h
                                    }
                                    return i
                                }

                                function A(t, e, r) {
                                    return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                                }

                                function T(t, e) {
                                    if (this.isIdentity()) return t + "," + e;
                                    var r = this.props;
                                    return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                                }

                                function D() {
                                    for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
                                    return r
                                }

                                function w(t) {
                                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                                }

                                function M() {
                                    var t = this.props;
                                    return "matrix(" + w(t[0]) + "," + w(t[1]) + "," + w(t[4]) + "," + w(t[5]) + "," + w(t[12]) + "," + w(t[13]) + ")"
                                }
                                return function() {
                                    this.reset = n, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = f, this.setTransform = u, this.translate = m, this.transform = d, this.applyToPoint = b, this.applyToX = P, this.applyToY = E, this.applyToZ = _, this.applyToPointArray = A, this.applyToTriplePoints = C, this.applyToPointStringified = T, this.toCSS = D, this.to2dCSS = M, this.clone = v, this.cloneFromProps = x, this.equals = g, this.inversePoints = S, this.inversePoint = k, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                                }
                            }();
                        ! function(t, e) {
                            var r = this,
                                i = e.pow(256, 6),
                                n = e.pow(2, 52),
                                a = 2 * n;

                            function s(t) {
                                var e, r = t.length,
                                    i = this,
                                    n = 0,
                                    a = i.i = i.j = 0,
                                    s = i.S = [];
                                for (r || (t = [r++]); n < 256;) s[n] = n++;
                                for (n = 0; n < 256; n++) s[n] = s[a = 255 & a + t[n % r] + (e = s[n])], s[a] = e;
                                i.g = function(t) {
                                    for (var e, r = 0, n = i.i, a = i.j, s = i.S; t--;) e = s[n = 255 & n + 1], r = 256 * r + s[255 & (s[n] = s[a = 255 & a + e]) + (s[a] = e)];
                                    return i.i = n, i.j = a, r
                                }
                            }

                            function o(t, e) {
                                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                            }

                            function l(t, e) {
                                for (var r, i = t + "", n = 0; n < i.length;) e[255 & n] = 255 & (r ^= 19 * e[255 & n]) + i.charCodeAt(n++);
                                return h(e)
                            }

                            function h(t) {
                                return String.fromCharCode.apply(0, t)
                            }
                            e.seedrandom = function(p, c, f) {
                                var u = [],
                                    m = l(function t(e, r) {
                                        var i, n = [],
                                            a = typeof e;
                                        if (r && "object" == a)
                                            for (i in e) try {
                                                n.push(t(e[i], r - 1))
                                            } catch (s) {}
                                        return n.length ? n : "string" == a ? e : e + "\0"
                                    }((c = !0 === c ? {
                                        entropy: !0
                                    } : c || {}).entropy ? [p, h(t)] : null === p ? function() {
                                        try {
                                            var e = new Uint8Array(256);
                                            return (r.crypto || r.msCrypto).getRandomValues(e), h(e)
                                        } catch (a) {
                                            var i = r.navigator,
                                                n = i && i.plugins;
                                            return [+new Date, r, n, r.screen, h(t)]
                                        }
                                    }() : p, 3), u),
                                    d = new s(u),
                                    y = function() {
                                        for (var t = d.g(6), e = i, r = 0; t < n;) t = 256 * (t + r), e *= 256, r = d.g(1);
                                        for (; t >= a;) t /= 2, e /= 2, r >>>= 1;
                                        return (t + r) / e
                                    };
                                return y.int32 = function() {
                                    return 0 | d.g(4)
                                }, y.quick = function() {
                                    return d.g(4) / 4294967296
                                }, y.double = y, l(h(d.S), t), (c.pass || f || function(t, r, i, n) {
                                    return n && (n.S && o(n, d), t.state = function() {
                                        return o(d, {})
                                    }), i ? (e.random = t, r) : t
                                })(y, m, "global" in c ? c.global : this == e, c.state)
                            }, l(e.random(), t)
                        }([], BMMath);
                        var BezierFactory = function() {
                            var t = {
                                    getBezierEasing: function(t, r, i, n, a) {
                                        var s = a || ("bez_" + t + "_" + r + "_" + i + "_" + n).replace(/\./g, "p");
                                        if (e[s]) return e[s];
                                        var o = new l([t, r, i, n]);
                                        return e[s] = o, o
                                    }
                                },
                                e = {},
                                r = "function" === typeof Float32Array;

                            function i(t, e) {
                                return 1 - 3 * e + 3 * t
                            }

                            function n(t, e) {
                                return 3 * e - 6 * t
                            }

                            function a(t) {
                                return 3 * t
                            }

                            function s(t, e, r) {
                                return ((i(e, r) * t + n(e, r)) * t + a(e)) * t
                            }

                            function o(t, e, r) {
                                return 3 * i(e, r) * t * t + 2 * n(e, r) * t + a(e)
                            }

                            function l(t) {
                                this._p = t, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                            }
                            return l.prototype = {
                                get: function(t) {
                                    var e = this._p[0],
                                        r = this._p[1],
                                        i = this._p[2],
                                        n = this._p[3];
                                    return this._precomputed || this._precompute(), e === r && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : s(this._getTForX(t), r, n)
                                },
                                _precompute: function() {
                                    var t = this._p[0],
                                        e = this._p[1],
                                        r = this._p[2],
                                        i = this._p[3];
                                    this._precomputed = !0, t === e && r === i || this._calcSampleValues()
                                },
                                _calcSampleValues: function() {
                                    for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r) this._mSampleValues[r] = s(.1 * r, t, e)
                                },
                                _getTForX: function(t) {
                                    for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, n = 0, a = 1; 10 !== a && i[a] <= t; ++a) n += .1;
                                    var l = n + (t - i[--a]) / (i[a + 1] - i[a]) * .1,
                                        h = o(l, e, r);
                                    return h >= .001 ? function(t, e, r, i) {
                                        for (var n = 0; n < 4; ++n) {
                                            var a = o(e, r, i);
                                            if (0 === a) return e;
                                            e -= (s(e, r, i) - t) / a
                                        }
                                        return e
                                    }(t, l, e, r) : 0 === h ? l : function(t, e, r, i, n) {
                                        var a, o, l = 0;
                                        do {
                                            (a = s(o = e + (r - e) / 2, i, n) - t) > 0 ? r = o : e = o
                                        } while (Math.abs(a) > 1e-7 && ++l < 10);
                                        return o
                                    }(t, n, n + .1, e, r)
                                }
                            }, t
                        }();

                        function extendPrototype(t, e) {
                            var r, i, n = t.length;
                            for (r = 0; r < n; r += 1)
                                for (var a in i = t[r].prototype) i.hasOwnProperty(a) && (e.prototype[a] = i[a])
                        }

                        function getDescriptor(t, e) {
                            return Object.getOwnPropertyDescriptor(t, e)
                        }

                        function createProxyFunction(t) {
                            function e() {}
                            return e.prototype = t, e
                        }

                        function bezFunction() {
                            function t(t, e, r, i, n, a) {
                                var s = t * i + e * n + r * a - n * i - a * t - r * e;
                                return s > -.001 && s < .001
                            }
                            var e = function(t, e, r, i) {
                                var n, a, s, o, l, h, p = defaultCurveSegments,
                                    c = 0,
                                    f = [],
                                    u = [],
                                    m = bezier_length_pool.newElement();
                                for (s = r.length, n = 0; n < p; n += 1) {
                                    for (l = n / (p - 1), h = 0, a = 0; a < s; a += 1) o = bm_pow(1 - l, 3) * t[a] + 3 * bm_pow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bm_pow(l, 2) * i[a] + bm_pow(l, 3) * e[a], f[a] = o, null !== u[a] && (h += bm_pow(f[a] - u[a], 2)), u[a] = f[a];
                                    h && (c += h = bm_sqrt(h)), m.percents[n] = l, m.lengths[n] = c
                                }
                                return m.addedLength = c, m
                            };

                            function r(t) {
                                this.segmentLength = 0, this.points = new Array(t)
                            }

                            function i(t, e) {
                                this.partialLength = t, this.point = e
                            }
                            var n = function() {
                                var e = {};
                                return function(n, a, s, o) {
                                    var l = (n[0] + "_" + n[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                                    if (!e[l]) {
                                        var h, p, c, f, u, m, d, y = defaultCurveSegments,
                                            g = 0,
                                            v = null;
                                        2 === n.length && (n[0] != a[0] || n[1] != a[1]) && t(n[0], n[1], a[0], a[1], n[0] + s[0], n[1] + s[1]) && t(n[0], n[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (y = 2);
                                        var x = new r(y);
                                        for (c = s.length, h = 0; h < y; h += 1) {
                                            for (d = createSizedArray(c), u = h / (y - 1), m = 0, p = 0; p < c; p += 1) f = bm_pow(1 - u, 3) * n[p] + 3 * bm_pow(1 - u, 2) * u * (n[p] + s[p]) + 3 * (1 - u) * bm_pow(u, 2) * (a[p] + o[p]) + bm_pow(u, 3) * a[p], d[p] = f, null !== v && (m += bm_pow(d[p] - v[p], 2));
                                            g += m = bm_sqrt(m), x.points[h] = new i(m, d), v = d
                                        }
                                        x.segmentLength = g, e[l] = x
                                    }
                                    return e[l]
                                }
                            }();

                            function a(t, e) {
                                var r = e.percents,
                                    i = e.lengths,
                                    n = r.length,
                                    a = bm_floor((n - 1) * t),
                                    s = t * e.addedLength,
                                    o = 0;
                                if (a === n - 1 || 0 === a || s === i[a]) return r[a];
                                for (var l = i[a] > s ? -1 : 1, h = !0; h;)
                                    if (i[a] <= s && i[a + 1] > s ? (o = (s - i[a]) / (i[a + 1] - i[a]), h = !1) : a += l, a < 0 || a >= n - 1) {
                                        if (a === n - 1) return r[a];
                                        h = !1
                                    }
                                return r[a] + (r[a + 1] - r[a]) * o
                            }
                            var s = createTypedArray("float32", 8);
                            return {
                                getSegmentsLength: function(t) {
                                    var r, i = segments_length_pool.newElement(),
                                        n = t.c,
                                        a = t.v,
                                        s = t.o,
                                        o = t.i,
                                        l = t._length,
                                        h = i.lengths,
                                        p = 0;
                                    for (r = 0; r < l - 1; r += 1) h[r] = e(a[r], a[r + 1], s[r], o[r + 1]), p += h[r].addedLength;
                                    return n && l && (h[r] = e(a[r], a[0], s[r], o[0]), p += h[r].addedLength), i.totalLength = p, i
                                },
                                getNewSegment: function(t, e, r, i, n, o, l) {
                                    var h, p = a(n = n < 0 ? 0 : n > 1 ? 1 : n, l),
                                        c = a(o = o > 1 ? 1 : o, l),
                                        f = t.length,
                                        u = 1 - p,
                                        m = 1 - c,
                                        d = u * u * u,
                                        y = p * u * u * 3,
                                        g = p * p * u * 3,
                                        v = p * p * p,
                                        x = u * u * m,
                                        b = p * u * m + u * p * m + u * u * c,
                                        P = p * p * m + u * p * c + p * u * c,
                                        E = p * p * c,
                                        _ = u * m * m,
                                        k = p * m * m + u * c * m + u * m * c,
                                        S = p * c * m + u * c * c + p * m * c,
                                        C = p * c * c,
                                        A = m * m * m,
                                        T = c * m * m + m * c * m + m * m * c,
                                        D = c * c * m + m * c * c + c * m * c,
                                        w = c * c * c;
                                    for (h = 0; h < f; h += 1) s[4 * h] = Math.round(1e3 * (d * t[h] + y * r[h] + g * i[h] + v * e[h])) / 1e3, s[4 * h + 1] = Math.round(1e3 * (x * t[h] + b * r[h] + P * i[h] + E * e[h])) / 1e3, s[4 * h + 2] = Math.round(1e3 * (_ * t[h] + k * r[h] + S * i[h] + C * e[h])) / 1e3, s[4 * h + 3] = Math.round(1e3 * (A * t[h] + T * r[h] + D * i[h] + w * e[h])) / 1e3;
                                    return s
                                },
                                getPointInSegment: function(t, e, r, i, n, s) {
                                    var o = a(n, s),
                                        l = 1 - o;
                                    return [Math.round(1e3 * (l * l * l * t[0] + (o * l * l + l * o * l + l * l * o) * r[0] + (o * o * l + l * o * o + o * l * o) * i[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (l * l * l * t[1] + (o * l * l + l * o * l + l * l * o) * r[1] + (o * o * l + l * o * o + o * l * o) * i[1] + o * o * o * e[1])) / 1e3]
                                },
                                buildBezierData: n,
                                pointOnLine2D: t,
                                pointOnLine3D: function(e, r, i, n, a, s, o, l, h) {
                                    if (0 === i && 0 === s && 0 === h) return t(e, r, n, a, o, l);
                                    var p, c = Math.sqrt(Math.pow(n - e, 2) + Math.pow(a - r, 2) + Math.pow(s - i, 2)),
                                        f = Math.sqrt(Math.pow(o - e, 2) + Math.pow(l - r, 2) + Math.pow(h - i, 2)),
                                        u = Math.sqrt(Math.pow(o - n, 2) + Math.pow(l - a, 2) + Math.pow(h - s, 2));
                                    return (p = c > f ? c > u ? c - f - u : u - f - c : u > f ? u - f - c : f - c - u) > -1e-4 && p < 1e-4
                                }
                            }
                        }! function() {
                            for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
                            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, r) {
                                var i = (new Date).getTime(),
                                    n = Math.max(0, 16 - (i - t)),
                                    a = setTimeout((function() {
                                        e(i + n)
                                    }), n);
                                return t = i + n, a
                            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                                clearTimeout(t)
                            })
                        }();
                        var bez = bezFunction();

                        function dataFunctionManager() {
                            function t(t, e) {
                                for (var r = 0, i = e.length; r < i;) {
                                    if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                                    r += 1
                                }
                            }

                            function e(t) {
                                var i, n, a;
                                for (i = t.length - 1; i >= 0; i -= 1)
                                    if ("sh" == t[i].ty)
                                        if (t[i].ks.k.i) r(t[i].ks.k);
                                        else
                                            for (a = t[i].ks.k.length, n = 0; n < a; n += 1) t[i].ks.k[n].s && r(t[i].ks.k[n].s[0]), t[i].ks.k[n].e && r(t[i].ks.k[n].e[0]);
                                else "gr" == t[i].ty && e(t[i].it)
                            }

                            function r(t) {
                                var e, r = t.i.length;
                                for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                            }

                            function i(t, e) {
                                var r = e ? e.split(".") : [100, 100, 100];
                                return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0))
                            }
                            var n = function() {
                                    var t = [4, 4, 14];

                                    function e(t) {
                                        var e = t.t.d;
                                        t.t.d = {
                                            k: [{
                                                s: e,
                                                t: 0
                                            }]
                                        }
                                    }

                                    function r(t) {
                                        var r, i = t.length;
                                        for (r = 0; r < i; r += 1) 5 === t[r].ty && e(t[r])
                                    }
                                    return function(e) {
                                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                                            var n, a = e.assets.length;
                                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                                        }
                                    }
                                }(),
                                a = function() {
                                    var t = [4, 7, 99];
                                    return function(e) {
                                        if (e.chars && !i(t, e.v)) {
                                            var n, a, s, o, l, h = e.chars.length;
                                            for (n = 0; n < h; n += 1)
                                                if (e.chars[n].data && e.chars[n].data.shapes)
                                                    for (s = (l = e.chars[n].data.shapes[0].it).length, a = 0; a < s; a += 1)(o = l[a].ks.k).__converted || (r(l[a].ks.k), o.__converted = !0)
                                        }
                                    }
                                }(),
                                s = function() {
                                    var t = [4, 1, 9];

                                    function e(t) {
                                        var r, i, n, a = t.length;
                                        for (r = 0; r < a; r += 1)
                                            if ("gr" === t[r].ty) e(t[r].it);
                                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                                            if (t[r].c.k && t[r].c.k[0].i)
                                                for (n = t[r].c.k.length, i = 0; i < n; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                                    }

                                    function r(t) {
                                        var r, i = t.length;
                                        for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                                    }
                                    return function(e) {
                                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                                            var n, a = e.assets.length;
                                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                                        }
                                    }
                                }(),
                                o = function() {
                                    var t = [4, 4, 18];

                                    function e(t) {
                                        var r, i, n;
                                        for (r = t.length - 1; r >= 0; r -= 1)
                                            if ("sh" == t[r].ty)
                                                if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                                else
                                                    for (n = t[r].ks.k.length, i = 0; i < n; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                                        else "gr" == t[r].ty && e(t[r].it)
                                    }

                                    function r(t) {
                                        var r, i, n, a, s, o, l = t.length;
                                        for (i = 0; i < l; i += 1) {
                                            if ((r = t[i]).hasMask) {
                                                var h = r.masksProperties;
                                                for (a = h.length, n = 0; n < a; n += 1)
                                                    if (h[n].pt.k.i) h[n].pt.k.c = h[n].cl;
                                                    else
                                                        for (o = h[n].pt.k.length, s = 0; s < o; s += 1) h[n].pt.k[s].s && (h[n].pt.k[s].s[0].c = h[n].cl), h[n].pt.k[s].e && (h[n].pt.k[s].e[0].c = h[n].cl)
                                            }
                                            4 === r.ty && e(r.shapes)
                                        }
                                    }
                                    return function(e) {
                                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                                            var n, a = e.assets.length;
                                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                                        }
                                    }
                                }();

                            function l(t, e) {
                                0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                            }
                            var h = {
                                completeData: function(i, h) {
                                    i.__complete || (s(i), n(i), a(i), o(i), function i(n, a, s) {
                                        var o, h, p, c, f, u, m = n.length;
                                        for (h = 0; h < m; h += 1)
                                            if ("ks" in (o = n[h]) && !o.completed) {
                                                if (o.completed = !0, o.tt && (n[h - 1].td = o.tt), o.hasMask) {
                                                    var d = o.masksProperties;
                                                    for (c = d.length, p = 0; p < c; p += 1)
                                                        if (d[p].pt.k.i) r(d[p].pt.k);
                                                        else
                                                            for (u = d[p].pt.k.length, f = 0; f < u; f += 1) d[p].pt.k[f].s && r(d[p].pt.k[f].s[0]), d[p].pt.k[f].e && r(d[p].pt.k[f].e[0])
                                                }
                                                0 === o.ty ? (o.layers = t(o.refId, a), i(o.layers, a, s)) : 4 === o.ty ? e(o.shapes) : 5 == o.ty && l(o)
                                            }
                                    }(i.layers, i.assets, h), i.__complete = !0)
                                }
                            };
                            return h
                        }
                        var dataManager = dataFunctionManager(),
                            FontManager = function() {
                                var t = {
                                        w: 0,
                                        size: 0,
                                        shapes: []
                                    },
                                    e = [];

                                function r(t, e) {
                                    var r = createTag("span");
                                    r.style.fontFamily = e;
                                    var i = createTag("span");
                                    i.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
                                    var n = i.offsetWidth;
                                    return i.style.fontFamily = t + ", " + e, {
                                        node: i,
                                        w: n,
                                        parent: r
                                    }
                                }

                                function i(t, e) {
                                    var r = createNS("text");
                                    return r.style.fontSize = "100px", r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", e.fStyle), r.setAttribute("font-weight", e.fWeight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r
                                }
                                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                                var n = function() {
                                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
                                };
                                return n.getCombinedCharacterCodes = function() {
                                    return e
                                }, n.prototype.addChars = function(t) {
                                    if (t) {
                                        this.chars || (this.chars = []);
                                        var e, r, i, n = t.length,
                                            a = this.chars.length;
                                        for (e = 0; e < n; e += 1) {
                                            for (r = 0, i = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                                            i || (this.chars.push(t[e]), a += 1)
                                        }
                                    }
                                }, n.prototype.addFonts = function(t, e) {
                                    if (t) {
                                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                        var n, a = t.list,
                                            s = a.length,
                                            o = s;
                                        for (n = 0; n < s; n += 1) {
                                            var l, h, p = !0;
                                            if (a[n].loaded = !1, a[n].monoCase = r(a[n].fFamily, "monospace"), a[n].sansCase = r(a[n].fFamily, "sans-serif"), a[n].fPath) {
                                                if ("p" === a[n].fOrigin || 3 === a[n].origin) {
                                                    if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[n].fFamily + '"], style[f-origin="3"][f-family="' + a[n].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                        var c = createTag("style");
                                                        c.setAttribute("f-forigin", a[n].fOrigin), c.setAttribute("f-origin", a[n].origin), c.setAttribute("f-family", a[n].fFamily), c.type = "text/css", c.innerHTML = "@font-face {font-family: " + a[n].fFamily + "; font-style: normal; src: url('" + a[n].fPath + "');}", e.appendChild(c)
                                                    }
                                                } else if ("g" === a[n].fOrigin || 1 === a[n].origin) {
                                                    for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h++) - 1 !== l[h].href.indexOf(a[n].fPath) && (p = !1);
                                                    if (p) {
                                                        var f = createTag("link");
                                                        f.setAttribute("f-forigin", a[n].fOrigin), f.setAttribute("f-origin", a[n].origin), f.type = "text/css", f.rel = "stylesheet", f.href = a[n].fPath, document.body.appendChild(f)
                                                    }
                                                } else if ("t" === a[n].fOrigin || 2 === a[n].origin) {
                                                    for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h++) a[n].fPath === l[h].src && (p = !1);
                                                    if (p) {
                                                        var u = createTag("link");
                                                        u.setAttribute("f-forigin", a[n].fOrigin), u.setAttribute("f-origin", a[n].origin), u.setAttribute("rel", "stylesheet"), u.setAttribute("href", a[n].fPath), e.appendChild(u)
                                                    }
                                                }
                                            } else a[n].loaded = !0, o -= 1;
                                            a[n].helper = i(e, a[n]), a[n].cache = {}, this.fonts.push(a[n])
                                        }
                                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                    } else this.isLoaded = !0
                                }, n.prototype.getCharData = function(e, r, i) {
                                    for (var n = 0, a = this.chars.length; n < a;) {
                                        if (this.chars[n].ch === e && this.chars[n].style === r && this.chars[n].fFamily === i) return this.chars[n];
                                        n += 1
                                    }
                                    return ("string" === typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && console.warn("Missing character from exported characters list: ", e, r, i), t
                                }, n.prototype.getFontByName = function(t) {
                                    for (var e = 0, r = this.fonts.length; e < r;) {
                                        if (this.fonts[e].fName === t) return this.fonts[e];
                                        e += 1
                                    }
                                    return this.fonts[0]
                                }, n.prototype.measureText = function(t, e, r) {
                                    var i = this.getFontByName(e),
                                        n = t.charCodeAt(0);
                                    if (!i.cache[n + 1]) {
                                        var a = i.helper;
                                        if (" " === t) {
                                            a.textContent = "|" + t + "|";
                                            var s = a.getComputedTextLength();
                                            a.textContent = "||";
                                            var o = a.getComputedTextLength();
                                            i.cache[n + 1] = (s - o) / 100
                                        } else a.textContent = t, i.cache[n + 1] = a.getComputedTextLength() / 100
                                    }
                                    return i.cache[n + 1] * r
                                }, n.prototype.checkLoadedFonts = function() {
                                    var t, e, r, i = this.fonts.length,
                                        n = i;
                                    for (t = 0; t < i; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (n -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                    0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                                        this.isLoaded = !0
                                    }.bind(this), 0)
                                }, n.prototype.loaded = function() {
                                    return this.isLoaded
                                }, n
                            }(),
                            PropertyFactory = function() {
                                var t = initialDefaultFrame,
                                    e = Math.abs;

                                function r(t, e) {
                                    var r, n = this.offsetTime;
                                    "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                                    for (var a, s, o, l, h, p, c, f, u = e.lastIndex, m = u, d = this.keyframes.length - 1, y = !0; y;) {
                                        if (a = this.keyframes[m], s = this.keyframes[m + 1], m === d - 1 && t >= s.t - n) {
                                            a.h && (a = s), u = 0;
                                            break
                                        }
                                        if (s.t - n > t) {
                                            u = m;
                                            break
                                        }
                                        m < d - 1 ? m += 1 : (u = 0, y = !1)
                                    }
                                    var g, v = s.t - n,
                                        x = a.t - n;
                                    if (a.to) {
                                        a.bezierData || (a.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                                        var b = a.bezierData;
                                        if (t >= v || t < x) {
                                            var P = t >= v ? b.points.length - 1 : 0;
                                            for (l = b.points[P].point.length, o = 0; o < l; o += 1) r[o] = b.points[P].point[o]
                                        } else {
                                            a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = f), h = f((t - x) / (v - x));
                                            var E, _ = b.segmentLength * h,
                                                k = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                                            for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = b.points.length; y;) {
                                                if (k += b.points[c].partialLength, 0 === _ || 0 === h || c === b.points.length - 1) {
                                                    for (l = b.points[c].point.length, o = 0; o < l; o += 1) r[o] = b.points[c].point[o];
                                                    break
                                                }
                                                if (_ >= k && _ < k + b.points[c + 1].partialLength) {
                                                    for (E = (_ - k) / b.points[c + 1].partialLength, l = b.points[c].point.length, o = 0; o < l; o += 1) r[o] = b.points[c].point[o] + (b.points[c + 1].point[o] - b.points[c].point[o]) * E;
                                                    break
                                                }
                                                c < p - 1 ? c += 1 : y = !1
                                            }
                                            e._lastPoint = c, e._lastAddedLength = k - b.points[c].partialLength, e._lastKeyframeIndex = m
                                        }
                                    } else {
                                        var S, C, A, T, D;
                                        if (d = a.s.length, g = s.s || a.e, this.sh && 1 !== a.h) t >= v ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : t <= x ? (r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2]) : function(t, e) {
                                            var r = e[0],
                                                i = e[1],
                                                n = e[2],
                                                a = e[3],
                                                s = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
                                                o = Math.asin(2 * r * i + 2 * n * a),
                                                l = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
                                            t[0] = s / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
                                        }(r, function(t, e, r) {
                                            var i, n, a, s, o, l = [],
                                                h = t[0],
                                                p = t[1],
                                                c = t[2],
                                                f = t[3],
                                                u = e[0],
                                                m = e[1],
                                                d = e[2],
                                                y = e[3];
                                            return (n = h * u + p * m + c * d + f * y) < 0 && (n = -n, u = -u, m = -m, d = -d, y = -y), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (s = 1 - r, o = r), l[0] = s * h + o * u, l[1] = s * p + o * m, l[2] = s * c + o * d, l[3] = s * f + o * y, l
                                        }(i(a.s), i(g), (t - x) / (v - x)));
                                        else
                                            for (m = 0; m < d; m += 1) 1 !== a.h && (t >= v ? h = 1 : t < x ? h = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? f = a.__fnct[m] : (S = "undefined" === typeof a.o.x[m] ? a.o.x[0] : a.o.x[m], C = "undefined" === typeof a.o.y[m] ? a.o.y[0] : a.o.y[m], A = "undefined" === typeof a.i.x[m] ? a.i.x[0] : a.i.x[m], T = "undefined" === typeof a.i.y[m] ? a.i.y[0] : a.i.y[m], f = BezierFactory.getBezierEasing(S, C, A, T).get, a.__fnct[m] = f)) : a.__fnct ? f = a.__fnct : (S = a.o.x, C = a.o.y, A = a.i.x, T = a.i.y, f = BezierFactory.getBezierEasing(S, C, A, T).get, a.__fnct = f), h = f((t - x) / (v - x)))), g = s.s || a.e, D = 1 === a.h ? a.s[m] : a.s[m] + (g[m] - a.s[m]) * h, 1 === d ? r = D : r[m] = D
                                    }
                                    return e.lastIndex = u, r
                                }

                                function i(t) {
                                    var e = t[0] * degToRads,
                                        r = t[1] * degToRads,
                                        i = t[2] * degToRads,
                                        n = Math.cos(e / 2),
                                        a = Math.cos(r / 2),
                                        s = Math.cos(i / 2),
                                        o = Math.sin(e / 2),
                                        l = Math.sin(r / 2),
                                        h = Math.sin(i / 2);
                                    return [o * l * s + n * a * h, o * a * s + n * l * h, n * l * s - o * a * h, n * a * s - o * l * h]
                                }

                                function n() {
                                    var e = this.comp.renderedFrame - this.offsetTime,
                                        r = this.keyframes[0].t - this.offsetTime,
                                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
                                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                        var n = this.interpolateValue(e, this._caching);
                                        this.pv = n
                                    }
                                    return this._caching.lastFrame = e, this.pv
                                }

                                function a(t) {
                                    var r;
                                    if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
                                    else
                                        for (var i = 0, n = this.v.length; i < n;) r = t[i] * this.mult, e(this.v[i] - r) > 1e-5 && (this.v[i] = r, this._mdf = !0), i += 1
                                }

                                function s() {
                                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                        if (this.lock) this.setVValue(this.pv);
                                        else {
                                            this.lock = !0, this._mdf = this._isFirstFrame;
                                            var t, e = this.effectsSequence.length,
                                                r = this.kf ? this.pv : this.data.k;
                                            for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                        }
                                }

                                function o(t) {
                                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                                }

                                function l(t, e, r, i) {
                                    this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o
                                }

                                function h(t, e, r, i) {
                                    this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                    var n, l = e.k.length;
                                    for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), createTypedArray("float32", l), this.vel = createTypedArray("float32", l), n = 0; n < l; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
                                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o
                                }

                                function p(e, i, l, h) {
                                    this.propType = "unidimensional", this.keyframes = i.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                        lastFrame: t,
                                        lastIndex: 0,
                                        value: 0,
                                        _lastKeyframeIndex: -1
                                    }, this.k = !0, this.kf = !0, this.data = i, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [n.bind(this)], this.addEffect = o
                                }

                                function c(e, i, l, h) {
                                    this.propType = "multidimensional";
                                    var p, c, f, u, m, d = i.k.length;
                                    for (p = 0; p < d - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p].e && (c = i.k[p].s, f = i.k[p].e, u = i.k[p].to, m = i.k[p].ti, (2 === c.length && (c[0] !== f[0] || c[1] !== f[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], c[0] + u[0], c[1] + u[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], f[0] + m[0], f[1] + m[1]) || 3 === c.length && (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], c[0] + u[0], c[1] + u[1], c[2] + u[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], f[0] + m[0], f[1] + m[1], f[2] + m[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === f[0] && c[1] === f[1] && 0 === u[0] && 0 === u[1] && 0 === m[0] && 0 === m[1] && (2 === c.length || c[2] === f[2] && 0 === u[2] && 0 === m[2]) && (i.k[p].to = null, i.k[p].ti = null));
                                    this.effectsSequence = [n.bind(this)], this.keyframes = i.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
                                    var y = i.k[0].s.length;
                                    for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1) this.v[p] = t, this.pv[p] = t;
                                    this._caching = {
                                        lastFrame: t,
                                        lastIndex: 0,
                                        value: createTypedArray("float32", y)
                                    }, this.addEffect = o
                                }
                                return {
                                    getProp: function(t, e, r, i, n) {
                                        var a;
                                        if (e.k.length)
                                            if ("number" === typeof e.k[0]) a = new h(t, e, i, n);
                                            else switch (r) {
                                                case 0:
                                                    a = new p(t, e, i, n);
                                                    break;
                                                case 1:
                                                    a = new c(t, e, i, n)
                                            } else a = new l(t, e, i, n);
                                        return a.effectsSequence.length && n.addDynamicProperty(a), a
                                    }
                                }
                            }(),
                            TransformPropertyFactory = function() {
                                function t(t, e, r) {
                                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                            k: [0, 0, 0]
                                        }, 1, 0, this), e.rx) {
                                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                            var i, n = e.or.k.length;
                                            for (i = 0; i < n; i += 1) e.or.k[i].to = e.or.k[i].ti = null
                                        }
                                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                                    } else this.r = PropertyFactory.getProp(t, e.r || {
                                        k: 0
                                    }, 0, degToRads, this);
                                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                        k: [0, 0, 0]
                                    }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                        k: [100, 100, 100]
                                    }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                                        _mdf: !1,
                                        v: 1
                                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                                }
                                return t.prototype = {
                                    applyToMatrix: function(t) {
                                        var e = this._mdf;
                                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    },
                                    getValue: function(t) {
                                        if (this.elem.globalData.frameId !== this.frameId) {
                                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                                    var e, r, i = this.elem.globalData.frameRate;
                                                    if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / i, 0)) : (e = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                        e = [], r = [];
                                                        var n = this.px,
                                                            a = this.py;
                                                        n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (e[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (e[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (e = [n.pv, a.pv], r[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                                    }
                                                    this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]))
                                                }
                                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                            }
                                            this.frameId = this.elem.globalData.frameId
                                        }
                                    },
                                    precalculateMatrix: function() {
                                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                            }
                                            if (this.r) {
                                                if (this.r.effectsSequence.length) return;
                                                this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                                            } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                        }
                                    },
                                    autoOrient: function() {}
                                }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(t) {
                                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                                }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                                    getTransformProperty: function(e, r, i) {
                                        return new t(e, r, i)
                                    }
                                }
                            }();

                        function ShapePath() {
                            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                        }
                        ShapePath.prototype.setPathData = function(t, e) {
                            this.c = t, this.setLength(e);
                            for (var r = 0; r < e;) this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1
                        }, ShapePath.prototype.setLength = function(t) {
                            for (; this._maxLength < t;) this.doubleArrayLength();
                            this._length = t
                        }, ShapePath.prototype.doubleArrayLength = function() {
                            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                        }, ShapePath.prototype.setXYAt = function(t, e, r, i, n) {
                            var a;
                            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                                case "v":
                                    a = this.v;
                                    break;
                                case "i":
                                    a = this.i;
                                    break;
                                case "o":
                                    a = this.o
                            }(!a[i] || a[i] && !n) && (a[i] = point_pool.newElement()), a[i][0] = t, a[i][1] = e
                        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, n, a, s, o) {
                            this.setXYAt(t, e, "v", s, o), this.setXYAt(r, i, "o", s, o), this.setXYAt(n, a, "i", s, o)
                        }, ShapePath.prototype.reverse = function() {
                            var t = new ShapePath;
                            t.setPathData(this.c, this._length);
                            var e = this.v,
                                r = this.o,
                                i = this.i,
                                n = 0;
                            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
                            var a, s = this._length - 1,
                                o = this._length;
                            for (a = n; a < o; a += 1) t.setTripleAt(e[s][0], e[s][1], i[s][0], i[s][1], r[s][0], r[s][1], a, !1), s -= 1;
                            return t
                        };
                        var ShapePropertyFactory = function() {
                                function t(t, e, r) {
                                    var i, n, a, s, o, l, h, p, c, f = r.lastIndex,
                                        u = this.keyframes;
                                    if (t < u[0].t - this.offsetTime) i = u[0].s[0], a = !0, f = 0;
                                    else if (t >= u[u.length - 1].t - this.offsetTime) i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], a = !0;
                                    else {
                                        for (var m, d, y = f, g = u.length - 1, v = !0; v && (m = u[y], !((d = u[y + 1]).t - this.offsetTime > t));) y < g - 1 ? y += 1 : v = !1;
                                        if (f = y, !(a = 1 === m.h)) {
                                            if (t >= d.t - this.offsetTime) p = 1;
                                            else if (t < m.t - this.offsetTime) p = 0;
                                            else {
                                                var x;
                                                m.__fnct ? x = m.__fnct : (x = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = x), p = x((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))
                                            }
                                            n = d.s ? d.s[0] : m.e[0]
                                        }
                                        i = m.s[0]
                                    }
                                    for (l = e._length, h = i.i[0].length, r.lastIndex = f, s = 0; s < l; s += 1)
                                        for (o = 0; o < h; o += 1) c = a ? i.i[s][o] : i.i[s][o] + (n.i[s][o] - i.i[s][o]) * p, e.i[s][o] = c, c = a ? i.o[s][o] : i.o[s][o] + (n.o[s][o] - i.o[s][o]) * p, e.o[s][o] = c, c = a ? i.v[s][o] : i.v[s][o] + (n.v[s][o] - i.v[s][o]) * p, e.v[s][o] = c
                                }

                                function e() {
                                    var t = this.comp.renderedFrame - this.offsetTime,
                                        e = this.keyframes[0].t - this.offsetTime,
                                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                        i = this._caching.lastFrame;
                                    return -999999 !== i && (i < e && t < e || i > r && t > r) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                                }

                                function r() {
                                    this.paths = this.localShapeCollection
                                }

                                function i(t) {
                                    (function(t, e) {
                                        if (t._length !== e._length || t.c !== e.c) return !1;
                                        var r, i = t._length;
                                        for (r = 0; r < i; r += 1)
                                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                                        return !0
                                    })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                                }

                                function n() {
                                    if (this.elem.globalData.frameId !== this.frameId)
                                        if (this.effectsSequence.length)
                                            if (this.lock) this.setVValue(this.pv);
                                            else {
                                                this.lock = !0, this._mdf = !1;
                                                var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                                    r = this.effectsSequence.length;
                                                for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                                                this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                            }
                                    else this._mdf = !1
                                }

                                function a(t, e, i) {
                                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                                    var n = 3 === i ? e.pt.k : e.ks.k;
                                    this.v = shape_pool.clone(n), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                                }

                                function s(t) {
                                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                                }

                                function o(t, i, n) {
                                    this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === n ? i.pt.k : i.ks.k, this.k = !0, this.kf = !0;
                                    var a = this.keyframes[0].s[0].i.length;
                                    this.keyframes[0].s[0].i[0].length, this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = r, this._caching = {
                                        lastFrame: -999999,
                                        lastIndex: 0
                                    }, this.effectsSequence = [e.bind(this)]
                                }
                                a.prototype.interpolateShape = t, a.prototype.getValue = n, a.prototype.setVValue = i, a.prototype.addEffect = s, o.prototype.getValue = n, o.prototype.interpolateShape = t, o.prototype.setVValue = i, o.prototype.addEffect = s;
                                var l = function() {
                                        var t = roundCorner;

                                        function e(t, e) {
                                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                        }
                                        return e.prototype = {
                                            reset: r,
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                            },
                                            convertEllToPath: function() {
                                                var e = this.p.v[0],
                                                    r = this.p.v[1],
                                                    i = this.s.v[0] / 2,
                                                    n = this.s.v[1] / 2,
                                                    a = 3 !== this.d,
                                                    s = this.v;
                                                s.v[0][0] = e, s.v[0][1] = r - n, s.v[1][0] = a ? e + i : e - i, s.v[1][1] = r, s.v[2][0] = e, s.v[2][1] = r + n, s.v[3][0] = a ? e - i : e + i, s.v[3][1] = r, s.i[0][0] = a ? e - i * t : e + i * t, s.i[0][1] = r - n, s.i[1][0] = a ? e + i : e - i, s.i[1][1] = r - n * t, s.i[2][0] = a ? e + i * t : e - i * t, s.i[2][1] = r + n, s.i[3][0] = a ? e - i : e + i, s.i[3][1] = r + n * t, s.o[0][0] = a ? e + i * t : e - i * t, s.o[0][1] = r - n, s.o[1][0] = a ? e + i : e - i, s.o[1][1] = r + n * t, s.o[2][0] = a ? e - i * t : e + i * t, s.o[2][1] = r + n, s.o[3][0] = a ? e - i : e + i, s.o[3][1] = r - n * t
                                            }
                                        }, extendPrototype([DynamicPropertyContainer], e), e
                                    }(),
                                    h = function() {
                                        function t(t, e) {
                                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                        }
                                        return t.prototype = {
                                            reset: r,
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                            },
                                            convertStarToPath: function() {
                                                var t, e, r, i, n = 2 * Math.floor(this.pt.v),
                                                    a = 2 * Math.PI / n,
                                                    s = !0,
                                                    o = this.or.v,
                                                    l = this.ir.v,
                                                    h = this.os.v,
                                                    p = this.is.v,
                                                    c = 2 * Math.PI * o / (2 * n),
                                                    f = 2 * Math.PI * l / (2 * n),
                                                    u = -Math.PI / 2;
                                                u += this.r.v;
                                                var m = 3 === this.data.d ? -1 : 1;
                                                for (this.v._length = 0, t = 0; t < n; t += 1) {
                                                    r = s ? h : p, i = s ? c : f;
                                                    var d = (e = s ? o : l) * Math.cos(u),
                                                        y = e * Math.sin(u),
                                                        g = 0 === d && 0 === y ? 0 : y / Math.sqrt(d * d + y * y),
                                                        v = 0 === d && 0 === y ? 0 : -d / Math.sqrt(d * d + y * y);
                                                    d += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(d, y, d - g * i * r * m, y - v * i * r * m, d + g * i * r * m, y + v * i * r * m, t, !0), s = !s, u += a * m
                                                }
                                            },
                                            convertPolygonToPath: function() {
                                                var t, e = Math.floor(this.pt.v),
                                                    r = 2 * Math.PI / e,
                                                    i = this.or.v,
                                                    n = this.os.v,
                                                    a = 2 * Math.PI * i / (4 * e),
                                                    s = -Math.PI / 2,
                                                    o = 3 === this.data.d ? -1 : 1;
                                                for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                    var l = i * Math.cos(s),
                                                        h = i * Math.sin(s),
                                                        p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                                    l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * a * n * o, h - c * a * n * o, l + p * a * n * o, h + c * a * n * o, t, !0), s += r * o
                                                }
                                                this.paths.length = 0, this.paths[0] = this.v
                                            }
                                        }, extendPrototype([DynamicPropertyContainer], t), t
                                    }(),
                                    p = function() {
                                        function t(t, e) {
                                            this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                        }
                                        return t.prototype = {
                                            convertRectToPath: function() {
                                                var t = this.p.v[0],
                                                    e = this.p.v[1],
                                                    r = this.s.v[0] / 2,
                                                    i = this.s.v[1] / 2,
                                                    n = bm_min(r, i, this.r.v),
                                                    a = n * (1 - roundCorner);
                                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + n, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - a, t + r, e + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e + i, t + r - n, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + n, e + i, t - r + a, e + i, t - r + n, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - n, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + a, t - r, e - i + n, 5, !0), this.v.setTripleAt(t - r + n, e - i, t - r + n, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - n, e - i, t + r - a, e - i, t + r - n, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + a, t + r, e - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e - i, t + r - n, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + n, e - i, t - r + a, e - i, t - r + n, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + n, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - a, t - r, e + i - n, 4, !0), this.v.setTripleAt(t - r + n, e + i, t - r + n, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - n, e + i, t + r - a, e + i, t + r - n, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - n, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
                                            },
                                            getValue: function(t) {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                            },
                                            reset: r
                                        }, extendPrototype([DynamicPropertyContainer], t), t
                                    }(),
                                    c = {
                                        getShapeProp: function(t, e, r) {
                                            var i;
                                            return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new o(t, e, r) : new a(t, e, r) : 5 === r ? i = new p(t, e) : 6 === r ? i = new l(t, e) : 7 === r && (i = new h(t, e)), i.k && t.addDynamicProperty(i), i
                                        },
                                        getConstructorFunction: function() {
                                            return a
                                        },
                                        getKeyframedConstructorFunction: function() {
                                            return o
                                        }
                                    };
                                return c
                            }(),
                            ShapeModifiers = function() {
                                var t = {},
                                    e = {};
                                return t.registerModifier = function(t, r) {
                                    e[t] || (e[t] = r)
                                }, t.getModifier = function(t, r, i) {
                                    return new e[t](r, i)
                                }, t
                            }();

                        function ShapeModifier() {}

                        function TrimModifier() {}

                        function RoundCornersModifier() {}

                        function RepeaterModifier() {}

                        function ShapeCollection() {
                            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                        }

                        function DashProperty(t, e, r, i) {
                            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                            var n, a, s = e.length || 0;
                            for (n = 0; n < s; n += 1) a = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
                                n: e[n].n,
                                p: a
                            };
                            this.k || this.getValue(!0), this._isAnimated = this.k
                        }

                        function GradientProperty(t, e, r) {
                            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                            var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                        }
                        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                            if (!this.closed) {
                                t.sh.container.addDynamicProperty(t.sh);
                                var e = {
                                    shape: t.sh,
                                    data: t,
                                    localShapeCollection: shapeCollection_pool.newShapeCollection()
                                };
                                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                            }
                        }, ShapeModifier.prototype.init = function(t, e) {
                            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, ShapeModifier.prototype.processKeys = function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                        }, TrimModifier.prototype.addShapeToModifier = function(t) {
                            t.pathsData = []
                        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, n) {
                            var a = [];
                            e <= 1 ? a.push({
                                s: t,
                                e: e
                            }) : t >= 1 ? a.push({
                                s: t - 1,
                                e: e - 1
                            }) : (a.push({
                                s: t,
                                e: 1
                            }), a.push({
                                s: 0,
                                e: e - 1
                            }));
                            var s, o, l = [],
                                h = a.length;
                            for (s = 0; s < h; s += 1) {
                                var p, c;
                                (o = a[s]).e * n < i || o.s * n > i + r || (p = o.s * n <= i ? 0 : (o.s * n - i) / r, c = o.e * n >= i + r ? 1 : (o.e * n - i) / r, l.push([p, c]))
                            }
                            return l.length || l.push([0, 0]), l
                        }, TrimModifier.prototype.releasePathsData = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) segments_length_pool.release(t[e]);
                            return t.length = 0, t
                        }, TrimModifier.prototype.processShapes = function(t) {
                            var e, r, i;
                            if (this._mdf || t) {
                                var n = this.o.v % 360 / 360;
                                if (n < 0 && (n += 1), (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + n) > (r = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + n)) {
                                    var a = e;
                                    e = r, r = a
                                }
                                e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
                            } else e = this.sValue, r = this.eValue;
                            var s, o, l, h, p, c, f = this.shapes.length,
                                u = 0;
                            if (r === e)
                                for (s = 0; s < f; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection;
                            else if (1 === r && 0 === e || 0 === r && 1 === e) {
                                if (this._mdf)
                                    for (s = 0; s < f; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
                            } else {
                                var m, d, y = [];
                                for (s = 0; s < f; s += 1)
                                    if ((m = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                                        if (l = (i = m.shape.paths)._length, c = 0, !m.shape._mdf && m.pathsData.length) c = m.totalShapeLength;
                                        else {
                                            for (h = this.releasePathsData(m.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(i.shapes[o]), h.push(p), c += p.totalLength;
                                            m.totalShapeLength = c, m.pathsData = h
                                        }
                                        u += c, m.shape._mdf = !0
                                    } else m.shape.paths = m.localShapeCollection;
                                var g, v = e,
                                    x = r,
                                    b = 0;
                                for (s = f - 1; s >= 0; s -= 1)
                                    if ((m = this.shapes[s]).shape._mdf) {
                                        for ((d = m.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, r, m.totalShapeLength, b, u), b += m.totalShapeLength) : g = [
                                                [v, x]
                                            ], l = g.length, o = 0; o < l; o += 1) {
                                            v = g[o][0], x = g[o][1], y.length = 0, x <= 1 ? y.push({
                                                s: m.totalShapeLength * v,
                                                e: m.totalShapeLength * x
                                            }) : v >= 1 ? y.push({
                                                s: m.totalShapeLength * (v - 1),
                                                e: m.totalShapeLength * (x - 1)
                                            }) : (y.push({
                                                s: m.totalShapeLength * v,
                                                e: m.totalShapeLength
                                            }), y.push({
                                                s: 0,
                                                e: m.totalShapeLength * (x - 1)
                                            }));
                                            var P = this.addShapes(m, y[0]);
                                            if (y[0].s !== y[0].e) {
                                                if (y.length > 1)
                                                    if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                                        var E = P.pop();
                                                        this.addPaths(P, d), P = this.addShapes(m, y[1], E)
                                                    } else this.addPaths(P, d), P = this.addShapes(m, y[1]);
                                                this.addPaths(P, d)
                                            }
                                        }
                                        m.shape.paths = d
                                    }
                            }
                        }, TrimModifier.prototype.addPaths = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) e.addShape(t[r])
                        }, TrimModifier.prototype.addSegment = function(t, e, r, i, n, a, s) {
                            n.setXYAt(e[0], e[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), s && n.setXYAt(t[0], t[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
                        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
                            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
                        }, TrimModifier.prototype.addShapes = function(t, e, r) {
                            var i, n, a, s, o, l, h, p, c = t.pathsData,
                                f = t.shape.paths.shapes,
                                u = t.shape.paths._length,
                                m = 0,
                                d = [],
                                y = !0;
                            for (r ? (o = r._length, p = r._length) : (r = shape_pool.newElement(), o = 0, p = 0), d.push(r), i = 0; i < u; i += 1) {
                                for (l = c[i].lengths, r.c = f[i].c, a = f[i].c ? l.length : l.length + 1, n = 1; n < a; n += 1)
                                    if (m + (s = l[n - 1]).addedLength < e.s) m += s.addedLength, r.c = !1;
                                    else {
                                        if (m > e.e) {
                                            r.c = !1;
                                            break
                                        }
                                        e.s <= m && e.e >= m + s.addedLength ? (this.addSegment(f[i].v[n - 1], f[i].o[n - 1], f[i].i[n], f[i].v[n], r, o, y), y = !1) : (h = bez.getNewSegment(f[i].v[n - 1], f[i].v[n], f[i].o[n - 1], f[i].i[n], (e.s - m) / s.addedLength, (e.e - m) / s.addedLength, l[n - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1), m += s.addedLength, o += 1
                                    }
                                if (f[i].c && l.length) {
                                    if (s = l[n - 1], m <= e.e) {
                                        var g = l[n - 1].addedLength;
                                        e.s <= m && e.e >= m + g ? (this.addSegment(f[i].v[n - 1], f[i].o[n - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (h = bez.getNewSegment(f[i].v[n - 1], f[i].v[0], f[i].o[n - 1], f[i].i[0], (e.s - m) / g, (e.e - m) / g, l[n - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1)
                                    } else r.c = !1;
                                    m += s.addedLength, o += 1
                                }
                                if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), m > e.e) break;
                                i < u - 1 && (r = shape_pool.newElement(), y = !0, d.push(r), o = 0)
                            }
                            return d
                        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                        }, RoundCornersModifier.prototype.processPath = function(t, e) {
                            var r = shape_pool.newElement();
                            r.c = t.c;
                            var i, n, a, s, o, l, h, p, c, f, u, m, d, y = t._length,
                                g = 0;
                            for (i = 0; i < y; i += 1) n = t.v[i], s = t.o[i], a = t.i[i], n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = m = n[0] + (o[0] - n[0]) * h, c = d = n[1] - (n[1] - o[1]) * h, f = p - (p - n[0]) * roundCorner, u = c - (c - n[1]) * roundCorner, r.setTripleAt(p, c, f, u, m, d, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = f = n[0] + (o[0] - n[0]) * h, c = u = n[1] + (o[1] - n[1]) * h, m = p - (p - n[0]) * roundCorner, d = c - (c - n[1]) * roundCorner, r.setTripleAt(p, c, f, u, m, d, g), g += 1) : (r.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
                            return r
                        }, RoundCornersModifier.prototype.processShapes = function(t) {
                            var e, r, i, n, a, s, o = this.shapes.length,
                                l = this.rd.v;
                            if (0 !== l)
                                for (r = 0; r < o; r += 1) {
                                    if ((a = this.shapes[r]).shape.paths, s = a.localShapeCollection, a.shape._mdf || this._mdf || t)
                                        for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l));
                                    a.shape.paths = a.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, n, a) {
                            var s = a ? -1 : 1,
                                o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
                                l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
                            t.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * s * n), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
                            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
                            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, RepeaterModifier.prototype.resetElements = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                        }, RepeaterModifier.prototype.cloneElements = function(t) {
                            t.length;
                            var e = JSON.parse(JSON.stringify(t));
                            return this.resetElements(e), e
                        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
                        }, RepeaterModifier.prototype.processShapes = function(t) {
                            var e, r, i, n, a;
                            if (this._mdf || t) {
                                var s, o = Math.ceil(this.c.v);
                                if (this._groups.length < o) {
                                    for (; this._groups.length < o;) {
                                        var l = {
                                            it: this.cloneElements(this._elements),
                                            ty: "gr"
                                        };
                                        l.it.push({
                                            a: {
                                                a: 0,
                                                ix: 1,
                                                k: [0, 0]
                                            },
                                            nm: "Transform",
                                            o: {
                                                a: 0,
                                                ix: 7,
                                                k: 100
                                            },
                                            p: {
                                                a: 0,
                                                ix: 2,
                                                k: [0, 0]
                                            },
                                            r: {
                                                a: 1,
                                                ix: 6,
                                                k: [{
                                                    s: 0,
                                                    e: 0,
                                                    t: 0
                                                }, {
                                                    s: 0,
                                                    e: 0,
                                                    t: 1
                                                }]
                                            },
                                            s: {
                                                a: 0,
                                                ix: 3,
                                                k: [100, 100]
                                            },
                                            sa: {
                                                a: 0,
                                                ix: 5,
                                                k: 0
                                            },
                                            sk: {
                                                a: 0,
                                                ix: 4,
                                                k: 0
                                            },
                                            ty: "tr"
                                        }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                                    }
                                    this.elem.reloadShapes()
                                }
                                for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) s = a < o, this._groups[i]._render = s, this.changeGroupRender(this._groups[i].it, s), a += 1;
                                this._currentCopies = o;
                                var h = this.o.v,
                                    p = h % 1,
                                    c = h > 0 ? Math.floor(h) : Math.ceil(h),
                                    f = (this.tr.v.props, this.pMatrix.props),
                                    u = this.rMatrix.props,
                                    m = this.sMatrix.props;
                                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                                var d, y, g = 0;
                                if (h > 0) {
                                    for (; g < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1;
                                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), g += p)
                                } else if (h < 0) {
                                    for (; g > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1;
                                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), g -= p)
                                }
                                for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                                    if (y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== g) {
                                        for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d = 0; d < y; d += 1) r[d] = this.matrix.props[d];
                                        this.matrix.reset()
                                    } else
                                        for (this.matrix.reset(), d = 0; d < y; d += 1) r[d] = this.matrix.props[d];
                                    g += 1, a -= 1, i += n
                                }
                            } else
                                for (a = this._currentCopies, i = 0, n = 1; a;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += n
                        }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                        }, ShapeCollection.prototype.releaseShapes = function() {
                            var t;
                            for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
                            this._length = 0
                        }, DashProperty.prototype.getValue = function(t) {
                            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                                var e = 0,
                                    r = this.dataProps.length;
                                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                            for (var r = 0, i = this.o.length / 2; r < i;) {
                                if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
                                r += 1
                            }
                            return !0
                        }, GradientProperty.prototype.checkCollapsable = function() {
                            if (this.o.length / 2 !== this.c.length / 4) return !1;
                            if (this.data.k.k[0].s)
                                for (var t = 0, e = this.data.k.k.length; t < e;) {
                                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                    t += 1
                                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                            return !0
                        }, GradientProperty.prototype.getValue = function(t) {
                            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                                var e, r, i, n = 4 * this.data.p;
                                for (e = 0; e < n; e += 1) r = e % 4 === 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                                if (this.o.length)
                                    for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) r = e % 2 === 0 ? 100 : 1, i = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                                this._mdf = !t
                            }
                        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                        var buildShapeString = function(t, e, r, i) {
                                if (0 === e) return "";
                                var n, a = t.o,
                                    s = t.i,
                                    o = t.v,
                                    l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                                for (n = 1; n < e; n += 1) l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
                                return r && e && (l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                            },
                            ImagePreloader = function() {
                                var t = function() {
                                    var t = createTag("canvas");
                                    t.width = 1, t.height = 1;
                                    var e = t.getContext("2d");
                                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                                }();

                                function e() {
                                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                                }

                                function r(e) {
                                    var r = function(t, e, r) {
                                            var i = "";
                                            if (t.e) i = t.p;
                                            else if (e) {
                                                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), i = e + n
                                            } else i = r, i += t.u ? t.u : "", i += t.p;
                                            return i
                                        }(e, this.assetsPath, this.path),
                                        i = createTag("img");
                                    i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded.bind(this), !1), i.addEventListener("error", function() {
                                        n.img = t, this._imageLoaded()
                                    }.bind(this), !1), i.src = r;
                                    var n = {
                                        img: i,
                                        assetData: e
                                    };
                                    return n
                                }

                                function i(t, e) {
                                    this.imagesLoadedCb = e;
                                    var r, i = t.length;
                                    for (r = 0; r < i; r += 1) t[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[r])))
                                }

                                function n(t) {
                                    this.path = t || ""
                                }

                                function a(t) {
                                    this.assetsPath = t || ""
                                }

                                function s(t) {
                                    for (var e = 0, r = this.images.length; e < r;) {
                                        if (this.images[e].assetData === t) return this.images[e].img;
                                        e += 1
                                    }
                                }

                                function o() {
                                    this.imagesLoadedCb = null, this.images.length = 0
                                }

                                function l() {
                                    return this.totalImages === this.loadedAssets
                                }
                                return function() {
                                    this.loadAssets = i, this.setAssetsPath = a, this.setPath = n, this.loaded = l, this.destroy = o, this.getImage = s, this._createImageData = r, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                                }
                            }(),
                            featureSupport = function() {
                                var t = {
                                    maskType: !0
                                };
                                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                            }(),
                            filtersFactory = function() {
                                var t = {
                                    createFilter: function(t) {
                                        var e = createNS("filter");
                                        return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
                                    },
                                    createAlphaToLuminanceFilter: function() {
                                        var t = createNS("feColorMatrix");
                                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                                    }
                                };
                                return t
                            }(),
                            assetLoader = function() {
                                function t(t) {
                                    return t.response && "object" === typeof t.response ? t.response : t.response && "string" === typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
                                }
                                return {
                                    load: function(e, r, i) {
                                        var n, a = new XMLHttpRequest;
                                        a.open("GET", e, !0);
                                        try {
                                            a.responseType = "json"
                                        } catch (s) {}
                                        a.send(), a.onreadystatechange = function() {
                                            if (4 == a.readyState)
                                                if (200 == a.status) n = t(a), r(n);
                                                else try {
                                                    n = t(a), r(n)
                                                } catch (s) {
                                                    i && i(s)
                                                }
                                        }
                                    }
                                }
                            }();

                        function TextAnimatorProperty(t, e, r) {
                            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                                alignment: {}
                            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
                        }

                        function TextAnimatorDataProperty(t, e, r) {
                            var i = {
                                    propType: !1
                                },
                                n = PropertyFactory.getProp,
                                a = e.a;
                            this.a = {
                                r: a.r ? n(t, a.r, 0, degToRads, r) : i,
                                rx: a.rx ? n(t, a.rx, 0, degToRads, r) : i,
                                ry: a.ry ? n(t, a.ry, 0, degToRads, r) : i,
                                sk: a.sk ? n(t, a.sk, 0, degToRads, r) : i,
                                sa: a.sa ? n(t, a.sa, 0, degToRads, r) : i,
                                s: a.s ? n(t, a.s, 1, .01, r) : i,
                                a: a.a ? n(t, a.a, 1, 0, r) : i,
                                o: a.o ? n(t, a.o, 0, .01, r) : i,
                                p: a.p ? n(t, a.p, 1, 0, r) : i,
                                sw: a.sw ? n(t, a.sw, 0, 0, r) : i,
                                sc: a.sc ? n(t, a.sc, 1, 0, r) : i,
                                fc: a.fc ? n(t, a.fc, 1, 0, r) : i,
                                fh: a.fh ? n(t, a.fh, 0, 0, r) : i,
                                fs: a.fs ? n(t, a.fs, 0, .01, r) : i,
                                fb: a.fb ? n(t, a.fb, 0, .01, r) : i,
                                t: a.t ? n(t, a.t, 0, 0, r) : i
                            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
                        }

                        function LetterProps(t, e, r, i, n, a) {
                            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
                                o: !0,
                                sw: !!e,
                                sc: !!r,
                                fc: !!i,
                                m: !0,
                                p: !0
                            }
                        }

                        function TextProperty(t, e) {
                            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                                ascent: 0,
                                boxWidth: this.defaultBoxWidth,
                                f: "",
                                fStyle: "",
                                fWeight: "",
                                fc: "",
                                j: "",
                                justifyOffset: "",
                                l: [],
                                lh: 0,
                                lineWidths: [],
                                ls: "",
                                of: "",
                                s: "",
                                sc: "",
                                sw: 0,
                                t: 0,
                                tr: 0,
                                sz: 0,
                                ps: null,
                                fillColorAnim: !1,
                                strokeColorAnim: !1,
                                strokeWidthAnim: !1,
                                yOffset: 0,
                                finalSize: 0,
                                finalText: [],
                                finalLineHeight: 0,
                                __complete: !1
                            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                        }
                        TextAnimatorProperty.prototype.searchProperties = function() {
                            var t, e, r = this._textData.a.length,
                                i = PropertyFactory.getProp;
                            for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                                f: i(this._elem, this._textData.p.f, 0, 0, this),
                                l: i(this._elem, this._textData.p.l, 0, 0, this),
                                r: this._textData.p.r,
                                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
                        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                                this._isFirstFrame = !1;
                                var r, i, n, a, s, o, l, h, p, c, f, u, m, d, y, g, v, x, b, P = this._moreOptions.alignment.v,
                                    E = this._animatorsData,
                                    _ = this._textData,
                                    k = this.mHelper,
                                    S = this._renderType,
                                    C = this.renderedLetters.length,
                                    A = (this.data, t.l);
                                if (this._hasMaskedPath) {
                                    if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                        var T, D = b.v;
                                        for (this._pathData.r && (D = D.reverse()), s = {
                                                tLength: 0,
                                                segments: []
                                            }, a = D._length - 1, g = 0, n = 0; n < a; n += 1) T = bez.buildBezierData(D.v[n], D.v[n + 1], [D.o[n][0] - D.v[n][0], D.o[n][1] - D.v[n][1]], [D.i[n + 1][0] - D.v[n + 1][0], D.i[n + 1][1] - D.v[n + 1][1]]), s.tLength += T.segmentLength, s.segments.push(T), g += T.segmentLength;
                                        n = a, b.v.c && (T = bez.buildBezierData(D.v[n], D.v[0], [D.o[n][0] - D.v[n][0], D.o[n][1] - D.v[n][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), s.tLength += T.segmentLength, s.segments.push(T), g += T.segmentLength), this._pathData.pi = s
                                    }
                                    if (s = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, h = 0, p = !0, d = s.segments, o < 0 && b.v.c)
                                        for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (m = d[f = d.length - 1].points).length - 1; o < 0;) o += m[c].partialLength, (c -= 1) < 0 && (c = (m = d[f -= 1].points).length - 1);
                                    u = (m = d[f].points)[c - 1], y = (l = m[c]).partialLength
                                }
                                a = A.length, r = 0, i = 0;
                                var w, M, F, I, V = 1.2 * t.finalSize * .714,
                                    O = !0;
                                F = E.length;
                                var R, B, L, N, G, z, j, H, W, q, U, $, K, Y = -1,
                                    X = o,
                                    Z = f,
                                    J = c,
                                    Q = -1,
                                    tt = "",
                                    et = this.defaultPropsArray;
                                if (2 === t.j || 1 === t.j) {
                                    var rt = 0,
                                        it = 0,
                                        nt = 2 === t.j ? -.5 : -1,
                                        at = 0,
                                        st = !0;
                                    for (n = 0; n < a; n += 1)
                                        if (A[n].n) {
                                            for (rt && (rt += it); at < n;) A[at].animatorJustifyOffset = rt, at += 1;
                                            rt = 0, st = !0
                                        } else {
                                            for (M = 0; M < F; M += 1)(w = E[M].a).t.propType && (st && 2 === t.j && (it += w.t.v * nt), (R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars)).length ? rt += w.t.v * R[0] * nt : rt += w.t.v * R * nt);
                                            st = !1
                                        }
                                    for (rt && (rt += it); at < n;) A[at].animatorJustifyOffset = rt, at += 1
                                }
                                for (n = 0; n < a; n += 1) {
                                    if (k.reset(), G = 1, A[n].n) r = 0, i += t.yOffset, i += O ? 1 : 0, o = X, O = !1, this._hasMaskedPath && (c = J, u = (m = d[f = Z].points)[c - 1], y = (l = m[c]).partialLength, h = 0), K = q = $ = tt = "", et = this.defaultPropsArray;
                                    else {
                                        if (this._hasMaskedPath) {
                                            if (Q !== A[n].line) {
                                                switch (t.j) {
                                                    case 1:
                                                        o += g - t.lineWidths[A[n].line];
                                                        break;
                                                    case 2:
                                                        o += (g - t.lineWidths[A[n].line]) / 2
                                                }
                                                Q = A[n].line
                                            }
                                            Y !== A[n].ind && (A[Y] && (o += A[Y].extra), o += A[n].an / 2, Y = A[n].ind), o += P[0] * A[n].an / 200;
                                            var ot = 0;
                                            for (M = 0; M < F; M += 1)(w = E[M].a).p.propType && ((R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars)).length ? ot += w.p.v[0] * R[0] : ot += w.p.v[0] * R), w.a.propType && ((R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars)).length ? ot += w.a.v[0] * R[0] : ot += w.a.v[0] * R);
                                            for (p = !0; p;) h + y >= o + ot || !m ? (v = (o + ot - h) / l.partialLength, L = u.point[0] + (l.point[0] - u.point[0]) * v, N = u.point[1] + (l.point[1] - u.point[1]) * v, k.translate(-P[0] * A[n].an / 200, -P[1] * V / 100), p = !1) : m && (h += l.partialLength, (c += 1) >= m.length && (c = 0, d[f += 1] ? m = d[f].points : b.v.c ? (c = 0, m = d[f = 0].points) : (h -= l.partialLength, m = null)), m && (u = l, y = (l = m[c]).partialLength));
                                            B = A[n].an / 2 - A[n].add, k.translate(-B, 0, 0)
                                        } else B = A[n].an / 2 - A[n].add, k.translate(-B, 0, 0), k.translate(-P[0] * A[n].an / 200, -P[1] * V / 100, 0);
                                        for (A[n].l, M = 0; M < F; M += 1)(w = E[M].a).t.propType && (R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? R.length ? o += w.t.v * R[0] : o += w.t.v * R : R.length ? r += w.t.v * R[0] : r += w.t.v * R));
                                        for (A[n].l, t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < F; M += 1)(w = E[M].a).a.propType && ((R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars)).length ? k.translate(-w.a.v[0] * R[0], -w.a.v[1] * R[1], w.a.v[2] * R[2]) : k.translate(-w.a.v[0] * R, -w.a.v[1] * R, w.a.v[2] * R));
                                        for (M = 0; M < F; M += 1)(w = E[M].a).s.propType && ((R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars)).length ? k.scale(1 + (w.s.v[0] - 1) * R[0], 1 + (w.s.v[1] - 1) * R[1], 1) : k.scale(1 + (w.s.v[0] - 1) * R, 1 + (w.s.v[1] - 1) * R, 1));
                                        for (M = 0; M < F; M += 1) {
                                            if (w = E[M].a, R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars), w.sk.propType && (R.length ? k.skewFromAxis(-w.sk.v * R[0], w.sa.v * R[1]) : k.skewFromAxis(-w.sk.v * R, w.sa.v * R)), w.r.propType && (R.length ? k.rotateZ(-w.r.v * R[2]) : k.rotateZ(-w.r.v * R)), w.ry.propType && (R.length ? k.rotateY(w.ry.v * R[1]) : k.rotateY(w.ry.v * R)), w.rx.propType && (R.length ? k.rotateX(w.rx.v * R[0]) : k.rotateX(w.rx.v * R)), w.o.propType && (R.length ? G += (w.o.v * R[0] - G) * R[0] : G += (w.o.v * R - G) * R), t.strokeWidthAnim && w.sw.propType && (R.length ? j += w.sw.v * R[0] : j += w.sw.v * R), t.strokeColorAnim && w.sc.propType)
                                                for (W = 0; W < 3; W += 1) R.length ? z[W] = z[W] + (w.sc.v[W] - z[W]) * R[0] : z[W] = z[W] + (w.sc.v[W] - z[W]) * R;
                                            if (t.fillColorAnim && t.fc) {
                                                if (w.fc.propType)
                                                    for (W = 0; W < 3; W += 1) R.length ? H[W] = H[W] + (w.fc.v[W] - H[W]) * R[0] : H[W] = H[W] + (w.fc.v[W] - H[W]) * R;
                                                w.fh.propType && (H = R.length ? addHueToRGB(H, w.fh.v * R[0]) : addHueToRGB(H, w.fh.v * R)), w.fs.propType && (H = R.length ? addSaturationToRGB(H, w.fs.v * R[0]) : addSaturationToRGB(H, w.fs.v * R)), w.fb.propType && (H = R.length ? addBrightnessToRGB(H, w.fb.v * R[0]) : addBrightnessToRGB(H, w.fb.v * R))
                                            }
                                        }
                                        for (M = 0; M < F; M += 1)(w = E[M].a).p.propType && (R = E[M].s.getMult(A[n].anIndexes[M], _.a[M].s.totalChars), this._hasMaskedPath ? R.length ? k.translate(0, w.p.v[1] * R[0], -w.p.v[2] * R[1]) : k.translate(0, w.p.v[1] * R, -w.p.v[2] * R) : R.length ? k.translate(w.p.v[0] * R[0], w.p.v[1] * R[1], -w.p.v[2] * R[2]) : k.translate(w.p.v[0] * R, w.p.v[1] * R, -w.p.v[2] * R));
                                        if (t.strokeWidthAnim && (q = j < 0 ? 0 : j), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && ($ = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                            if (k.translate(0, -t.ls), k.translate(0, P[1] * V / 100 + i, 0), _.p.p) {
                                                x = (l.point[1] - u.point[1]) / (l.point[0] - u.point[0]);
                                                var lt = 180 * Math.atan(x) / Math.PI;
                                                l.point[0] < u.point[0] && (lt += 180), k.rotate(-lt * Math.PI / 180)
                                            }
                                            k.translate(L, N, 0), o -= P[0] * A[n].an / 200, A[n + 1] && Y !== A[n + 1].ind && (o += A[n].an / 2, o += t.tr / 1e3 * t.finalSize)
                                        } else {
                                            switch (k.translate(r, i, 0), t.ps && k.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                                case 1:
                                                    k.translate(A[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[n].line]), 0, 0);
                                                    break;
                                                case 2:
                                                    k.translate(A[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[n].line]) / 2, 0, 0)
                                            }
                                            k.translate(0, -t.ls), k.translate(B, 0, 0), k.translate(P[0] * A[n].an / 200, P[1] * V / 100, 0), r += A[n].l + t.tr / 1e3 * t.finalSize
                                        }
                                        "html" === S ? tt = k.toCSS() : "svg" === S ? tt = k.to2dCSS() : et = [k.props[0], k.props[1], k.props[2], k.props[3], k.props[4], k.props[5], k.props[6], k.props[7], k.props[8], k.props[9], k.props[10], k.props[11], k.props[12], k.props[13], k.props[14], k.props[15]], K = G
                                    }
                                    C <= n ? (I = new LetterProps(K, q, U, $, tt, et), this.renderedLetters.push(I), C += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[n], this.lettersChangedFlag = I.update(K, q, U, $, tt, et) || this.lettersChangedFlag)
                                }
                            }
                        }, TextAnimatorProperty.prototype.getValue = function() {
                            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, i, n, a) {
                            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                            var s = !1;
                            return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== n && (this.m = n, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
                        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                            return t
                        }, TextProperty.prototype.setCurrentData = function(t) {
                            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                        }, TextProperty.prototype.searchProperty = function() {
                            return this.searchKeyframes()
                        }, TextProperty.prototype.searchKeyframes = function() {
                            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                        }, TextProperty.prototype.addEffect = function(t) {
                            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.getValue = function(t) {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                                var e = this.currentData,
                                    r = this.keysIndex;
                                if (this.lock) this.setCurrentData(this.currentData);
                                else {
                                    this.lock = !0, this._mdf = !1;
                                    var i, n = this.effectsSequence.length,
                                        a = t || this.data.d.k[this.keysIndex].s;
                                    for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                                    e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }
                        }, TextProperty.prototype.getKeyframeValue = function() {
                            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && (t[r].s, !(r === i - 1 || t[r + 1].t > e));) r += 1;
                            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
                        }, TextProperty.prototype.buildFinalText = function(t) {
                            for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], n = 0, a = t.length; n < a;) e = t.charCodeAt(n), -1 !== r.indexOf(e) ? i[i.length - 1] += t.charAt(n) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(n + 1)) >= 56320 && e <= 57343 ? (i.push(t.substr(n, 2)), ++n) : i.push(t.charAt(n)), n += 1;
                            return i
                        }, TextProperty.prototype.completeTextData = function(t) {
                            t.__complete = !0;
                            var e, r, i, n, a, s, o, l = this.elem.globalData.fontManager,
                                h = this.data,
                                p = [],
                                c = 0,
                                f = h.m.g,
                                u = 0,
                                m = 0,
                                d = 0,
                                y = [],
                                g = 0,
                                v = 0,
                                x = l.getFontByName(t.f),
                                b = 0,
                                P = x.fStyle ? x.fStyle.split(" ") : [],
                                E = "normal",
                                _ = "normal";
                            for (r = P.length, e = 0; e < r; e += 1) switch (P[e].toLowerCase()) {
                                case "italic":
                                    _ = "italic";
                                    break;
                                case "bold":
                                    E = "700";
                                    break;
                                case "black":
                                    E = "900";
                                    break;
                                case "medium":
                                    E = "500";
                                    break;
                                case "regular":
                                case "normal":
                                    E = "400";
                                    break;
                                case "light":
                                case "thin":
                                    E = "200"
                            }
                            t.fWeight = x.fWeight || E, t.fStyle = _, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
                            var k, S = t.tr / 1e3 * t.finalSize;
                            if (t.sz)
                                for (var C, A, T = !0, D = t.sz[0], w = t.sz[1]; T;) {
                                    C = 0, g = 0, r = (A = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                                    var M = -1;
                                    for (e = 0; e < r; e += 1) k = A[e].charCodeAt(0), i = !1, " " === A[e] ? M = e : 13 !== k && 3 !== k || (g = 0, i = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(A[e], x.fStyle, x.fFamily), b = i ? 0 : o.w * t.finalSize / 100) : b = l.measureText(A[e], t.f, t.finalSize), g + b > D && " " !== A[e] ? (-1 === M ? r += 1 : e = M, C += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, M === e ? 1 : 0, "\r"), M = -1, g = 0) : (g += b, g += S);
                                    C += x.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && w < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, r = t.finalText.length, T = !1)
                                }
                            g = -S, b = 0;
                            var F, I = 0;
                            for (e = 0; e < r; e += 1)
                                if (i = !1, k = (F = t.finalText[e]).charCodeAt(0), " " === F ? n = "\xa0" : 13 === k || 3 === k ? (I = 0, y.push(g), v = g > v ? g : v, g = -2 * S, n = "", i = !0, d += 1) : n = t.finalText[e], l.chars ? (o = l.getCharData(F, x.fStyle, l.getFontByName(t.f).fFamily), b = i ? 0 : o.w * t.finalSize / 100) : b = l.measureText(n, t.f, t.finalSize), " " === F ? I += b + S : (g += b + S + I, I = 0), p.push({
                                        l: b,
                                        an: b,
                                        add: u,
                                        n: i,
                                        anIndexes: [],
                                        val: n,
                                        line: d,
                                        animatorJustifyOffset: 0
                                    }), 2 == f) {
                                    if (u += b, "" === n || "\xa0" === n || e === r - 1) {
                                        for ("" !== n && "\xa0" !== n || (u -= b); m <= e;) p[m].an = u, p[m].ind = c, p[m].extra = b, m += 1;
                                        c += 1, u = 0
                                    }
                                } else if (3 == f) {
                                if (u += b, "" === n || e === r - 1) {
                                    for ("" === n && (u -= b); m <= e;) p[m].an = u, p[m].ind = c, p[m].extra = b, m += 1;
                                    u = 0, c += 1
                                }
                            } else p[c].ind = c, p[c].extra = 0, c += 1;
                            if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                            else switch (t.boxWidth = v, t.j) {
                                case 1:
                                    t.justifyOffset = -t.boxWidth;
                                    break;
                                case 2:
                                    t.justifyOffset = -t.boxWidth / 2;
                                    break;
                                default:
                                    t.justifyOffset = 0
                            }
                            t.lineWidths = y;
                            var V, O, R = h.a;
                            s = R.length;
                            var B, L, N = [];
                            for (a = 0; a < s; a += 1) {
                                for ((V = R[a]).a.sc && (t.strokeColorAnim = !0), V.a.sw && (t.strokeWidthAnim = !0), (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0), L = 0, B = V.s.b, e = 0; e < r; e += 1)(O = p[e]).anIndexes[a] = L, (1 == B && "" !== O.val || 2 == B && "" !== O.val && "\xa0" !== O.val || 3 == B && (O.n || "\xa0" == O.val || e == r - 1) || 4 == B && (O.n || e == r - 1)) && (1 === V.s.rn && N.push(L), L += 1);
                                h.a[a].s.totalChars = L;
                                var G, z = -1;
                                if (1 === V.s.rn)
                                    for (e = 0; e < r; e += 1) z != (O = p[e]).anIndexes[a] && (z = O.anIndexes[a], G = N.splice(Math.floor(Math.random() * N.length), 1)[0]), O.anIndexes[a] = G
                            }
                            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = x.ascent * t.finalSize / 100
                        }, TextProperty.prototype.updateDocumentData = function(t, e) {
                            e = void 0 === e ? this.keysIndex : e;
                            var r = this.copyData({}, this.data.d.k[e].s);
                            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.recalculate = function(t) {
                            var e = this.data.d.k[t].s;
                            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                        }, TextProperty.prototype.canResizeFont = function(t) {
                            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.setMinimumFontSize = function(t) {
                            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        };
                        var TextSelectorProp = function() {
                                var t = Math.max,
                                    e = Math.min,
                                    r = Math.floor;

                                function i(t, e) {
                                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                        k: 0
                                    }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                        v: 100
                                    }, this.o = PropertyFactory.getProp(t, e.o || {
                                        k: 0
                                    }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                        k: 0
                                    }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                        k: 0
                                    }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                                }
                                return i.prototype = {
                                    getMult: function(i) {
                                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                        var n = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                                            a = 0,
                                            s = this.finalS,
                                            o = this.finalE,
                                            l = this.data.sh;
                                        if (2 == l) a = n(a = o === s ? i >= o ? 1 : 0 : t(0, e(.5 / (o - s) + (i - s) / (o - s), 1)));
                                        else if (3 == l) a = n(a = o === s ? i >= o ? 0 : 1 : 1 - t(0, e(.5 / (o - s) + (i - s) / (o - s), 1)));
                                        else if (4 == l) o === s ? a = 0 : (a = t(0, e(.5 / (o - s) + (i - s) / (o - s), 1))) < .5 ? a *= 2 : a = 1 - 2 * (a - .5), a = n(a);
                                        else if (5 == l) {
                                            if (o === s) a = 0;
                                            else {
                                                var h = o - s,
                                                    p = -h / 2 + (i = e(t(0, i + .5 - s), o - s)),
                                                    c = h / 2;
                                                a = Math.sqrt(1 - p * p / (c * c))
                                            }
                                            a = n(a)
                                        } else 6 == l ? (o === s ? a = 0 : (i = e(t(0, i + .5 - s), o - s), a = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (o - s))) / 2), a = n(a)) : (i >= r(s) && (a = i - s < 0 ? 1 - (s - i) : t(0, e(o - i, 1))), a = n(a));
                                        return a * this.a.v
                                    },
                                    getValue: function(t) {
                                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                            r = this.o.v / e,
                                            i = this.s.v / e + r,
                                            n = this.e.v / e + r;
                                        if (i > n) {
                                            var a = i;
                                            i = n, n = a
                                        }
                                        this.finalS = i, this.finalE = n
                                    }
                                }, extendPrototype([DynamicPropertyContainer], i), {
                                    getTextSelectorProp: function(t, e, r) {
                                        return new i(t, e, r)
                                    }
                                }
                            }(),
                            pool_factory = function(t, e, r, i) {
                                var n = 0,
                                    a = t,
                                    s = createSizedArray(a);
                                return {
                                    newElement: function() {
                                        return n ? s[n -= 1] : e()
                                    },
                                    release: function(t) {
                                        n === a && (s = pooling.double(s), a *= 2), r && r(t), s[n] = t, n += 1
                                    }
                                }
                            },
                            pooling = {
                                double: function(t) {
                                    return t.concat(createSizedArray(t.length))
                                }
                            },
                            point_pool = pool_factory(8, (function() {
                                return createTypedArray("float32", 2)
                            })),
                            shape_pool = function() {
                                var t = pool_factory(4, (function() {
                                    return new ShapePath
                                }), (function(t) {
                                    var e, r = t._length;
                                    for (e = 0; e < r; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                                    t._length = 0, t.c = !1
                                }));
                                return t.clone = function(e) {
                                    var r, i = t.newElement(),
                                        n = void 0 === e._length ? e.v.length : e._length;
                                    for (i.setLength(n), i.c = e.c, r = 0; r < n; r += 1) i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                                    return i
                                }, t
                            }(),
                            shapeCollection_pool = function() {
                                var t = {
                                        newShapeCollection: function() {
                                            return e ? i[e -= 1] : new ShapeCollection
                                        },
                                        release: function(t) {
                                            var n, a = t._length;
                                            for (n = 0; n < a; n += 1) shape_pool.release(t.shapes[n]);
                                            t._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = t, e += 1
                                        }
                                    },
                                    e = 0,
                                    r = 4,
                                    i = createSizedArray(r);
                                return t
                            }(),
                            segments_length_pool = pool_factory(8, (function() {
                                return {
                                    lengths: [],
                                    totalLength: 0
                                }
                            }), (function(t) {
                                var e, r = t.lengths.length;
                                for (e = 0; e < r; e += 1) bezier_length_pool.release(t.lengths[e]);
                                t.lengths.length = 0
                            })),
                            bezier_length_pool = pool_factory(8, (function() {
                                return {
                                    addedLength: 0,
                                    percents: createTypedArray("float32", defaultCurveSegments),
                                    lengths: createTypedArray("float32", defaultCurveSegments)
                                }
                            }));

                        function BaseRenderer() {}

                        function SVGRenderer(t, e) {
                            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                            var r = "";
                            if (e && e.title) {
                                var i = createNS("title"),
                                    n = createElementID();
                                i.setAttribute("id", n), i.textContent = e.title, this.svgElement.appendChild(i), r += n
                            }
                            if (e && e.description) {
                                var a = createNS("desc"),
                                    s = createElementID();
                                a.setAttribute("id", s), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + s
                            }
                            r && this.svgElement.setAttribute("aria-labelledby", r);
                            var o = createNS("defs");
                            this.svgElement.appendChild(o);
                            var l = createNS("g");
                            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                progressiveLoad: e && e.progressiveLoad || !1,
                                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                                viewBoxOnly: e && e.viewBoxOnly || !1,
                                viewBoxSize: e && e.viewBoxSize || !1,
                                className: e && e.className || ""
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                defs: o,
                                renderConfig: this.renderConfig
                            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                        }

                        function CanvasRenderer(t, e) {
                            this.animationItem = t, this.renderConfig = {
                                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                                context: e && e.context || null,
                                progressiveLoad: e && e.progressiveLoad || !1,
                                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                className: e && e.className || ""
                            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                                frameNum: -1,
                                _mdf: !1,
                                renderConfig: this.renderConfig,
                                currentGlobalAlpha: -1
                            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                        }

                        function HybridRenderer(t, e) {
                            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                                className: e && e.className || "",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                hideOnTransparent: !e || !1 !== e.hideOnTransparent
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                renderConfig: this.renderConfig
                            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                        }

                        function MaskElement(t, e, r) {
                            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                            var i, n = this.globalData.defs,
                                a = this.masksProperties ? this.masksProperties.length : 0;
                            this.viewData = createSizedArray(a), this.solidPath = "";
                            var s, o, l, h, p, c, f, u = this.masksProperties,
                                m = 0,
                                d = [],
                                y = createElementID(),
                                g = "clipPath",
                                v = "clip-path";
                            for (i = 0; i < a; i++)
                                if (("a" !== u[i].mode && "n" !== u[i].mode || u[i].inv || 100 !== u[i].o.k || u[i].o.x) && (g = "mask", v = "mask"), "s" != u[i].mode && "i" != u[i].mode || 0 !== m ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), d.push(h)), s = createNS("path"), "n" != u[i].mode) {
                                    var x;
                                    if (m += 1, s.setAttribute("fill", "s" === u[i].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== u[i].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, u[i].x, 0, null, this.element), x = createElementID(), (p = createNS("filter")).setAttribute("id", x), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), n.appendChild(p), s.setAttribute("stroke", "s" === u[i].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[i] = {
                                            elem: s,
                                            x: f,
                                            expan: c,
                                            lastPath: "",
                                            lastOperator: "",
                                            filterId: x,
                                            lastRadius: 0
                                        }, "i" == u[i].mode) {
                                        l = d.length;
                                        var b = createNS("g");
                                        for (o = 0; o < l; o += 1) b.appendChild(d[o]);
                                        var P = createNS("mask");
                                        P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + m), P.appendChild(s), n.appendChild(P), b.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + m + ")"), d.length = 0, d.push(b)
                                    } else d.push(s);
                                    u[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                        elem: s,
                                        lastPath: "",
                                        op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
                                        prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                                        invRect: h
                                    }, this.viewData[i].prop.k || this.drawPath(u[i], this.viewData[i].prop.v, this.viewData[i])
                                } else this.viewData[i] = {
                                    op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
                                    prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                                    elem: s,
                                    lastPath: ""
                                }, n.appendChild(s);
                            for (this.maskElement = createNS(g), a = d.length, i = 0; i < a; i += 1) this.maskElement.appendChild(d[i]);
                            m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                        }

                        function HierarchyElement() {}

                        function FrameElement() {}

                        function TransformElement() {}

                        function RenderableElement() {}

                        function RenderableDOMElement() {}

                        function ProcessedElement(t, e) {
                            this.elem = t, this.pos = e
                        }

                        function SVGStyleData(t, e) {
                            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                        }

                        function SVGShapeData(t, e, r) {
                            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
                            for (var i = 0, n = t.length; i < n;) {
                                if (t[i].mProps.dynamicProperties.length) {
                                    this._isAnimated = !0;
                                    break
                                }
                                i += 1
                            }
                        }

                        function SVGTransformData(t, e, r) {
                            this.transform = {
                                mProps: t,
                                op: e,
                                container: r
                            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                        }

                        function SVGStrokeStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
                        }

                        function SVGFillStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
                        }

                        function SVGGradientFillStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
                        }

                        function SVGGradientStrokeStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
                        }

                        function ShapeGroupData() {
                            this.it = [], this.prevViewData = [], this.gr = createNS("g")
                        }
                        BaseRenderer.prototype.checkLayers = function(t) {
                            var e, r, i = this.layers.length;
                            for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.createItem = function(t) {
                            switch (t.ty) {
                                case 2:
                                    return this.createImage(t);
                                case 0:
                                    return this.createComp(t);
                                case 1:
                                    return this.createSolid(t);
                                case 3:
                                    return this.createNull(t);
                                case 4:
                                    return this.createShape(t);
                                case 5:
                                    return this.createText(t);
                                case 13:
                                    return this.createCamera(t)
                            }
                            return this.createNull(t)
                        }, BaseRenderer.prototype.createCamera = function() {
                            throw new Error("You're using a 3d camera. Try the html renderer.")
                        }, BaseRenderer.prototype.buildAllItems = function() {
                            var t, e = this.layers.length;
                            for (t = 0; t < e; t += 1) this.buildItem(t);
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.includeLayers = function(t) {
                            this.completeLayers = !1;
                            var e, r, i = t.length,
                                n = this.layers.length;
                            for (e = 0; e < i; e += 1)
                                for (r = 0; r < n;) {
                                    if (this.layers[r].id == t[e].id) {
                                        this.layers[r] = t[e];
                                        break
                                    }
                                    r += 1
                                }
                        }, BaseRenderer.prototype.setProjectInterface = function(t) {
                            this.globalData.projectInterface = t
                        }, BaseRenderer.prototype.initItems = function() {
                            this.globalData.progressiveLoad || this.buildAllItems()
                        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                            for (var i = this.elements, n = this.layers, a = 0, s = n.length; a < s;) n[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== n[a].parent ? this.buildElementParenting(t, n[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
                        }, BaseRenderer.prototype.addPendingElement = function(t) {
                            this.pendingElements.push(t)
                        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1)
                                if (t[e].xt) {
                                    var i = this.createComp(t[e]);
                                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                                }
                        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                                w: t.w,
                                h: t.h
                            }
                        }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                            return new NullElement(t, this.globalData, this)
                        }, SVGRenderer.prototype.createShape = function(t) {
                            return new SVGShapeElement(t, this.globalData, this)
                        }, SVGRenderer.prototype.createText = function(t) {
                            return new SVGTextElement(t, this.globalData, this)
                        }, SVGRenderer.prototype.createImage = function(t) {
                            return new IImageElement(t, this.globalData, this)
                        }, SVGRenderer.prototype.createComp = function(t) {
                            return new SVGCompElement(t, this.globalData, this)
                        }, SVGRenderer.prototype.createSolid = function(t) {
                            return new ISolidElement(t, this.globalData, this)
                        }, SVGRenderer.prototype.configAnimation = function(t) {
                            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                            var e = this.globalData.defs;
                            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                            var r = createNS("clipPath"),
                                i = createNS("rect");
                            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                            var n = createElementID();
                            r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + n + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                        }, SVGRenderer.prototype.destroy = function() {
                            this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
                            var t, e = this.layers ? this.layers.length : 0;
                            for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                            var e = this.elements;
                            if (!e[t] && 99 != this.layers[t].ty) {
                                e[t] = !0;
                                var r = this.createItem(this.layers[t]);
                                e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
                            }
                        }, SVGRenderer.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) {
                                var t = this.pendingElements.pop();
                                if (t.checkParenting(), t.data.tt)
                                    for (var e = 0, r = this.elements.length; e < r;) {
                                        if (this.elements[e] === t) {
                                            t.setMatte(this.elements[e - 1].layerId);
                                            break
                                        }
                                        e += 1
                                    }
                            }
                        }, SVGRenderer.prototype.renderFrame = function(t) {
                            if (this.renderedFrame !== t && !this.destroyed) {
                                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                                var e, r = this.layers.length;
                                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                                if (this.globalData._mdf)
                                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                            }
                        }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                            var r = t.getBaseElement();
                            if (r) {
                                for (var i, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
                                i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
                            }
                        }, SVGRenderer.prototype.hide = function() {
                            this.layerElement.style.display = "none"
                        }, SVGRenderer.prototype.show = function() {
                            this.layerElement.style.display = "block"
                        }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                            return new CVShapeElement(t, this.globalData, this)
                        }, CanvasRenderer.prototype.createText = function(t) {
                            return new CVTextElement(t, this.globalData, this)
                        }, CanvasRenderer.prototype.createImage = function(t) {
                            return new CVImageElement(t, this.globalData, this)
                        }, CanvasRenderer.prototype.createComp = function(t) {
                            return new CVCompElement(t, this.globalData, this)
                        }, CanvasRenderer.prototype.createSolid = function(t) {
                            return new CVSolidElement(t, this.globalData, this)
                        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                                if (this.renderConfig.clearCanvas) {
                                    this.transformMat.cloneFromProps(t);
                                    var e = this.contextData.cTr.props;
                                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                                    var r = this.contextData.cTr.props;
                                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                        }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                        }, CanvasRenderer.prototype.reset = function() {
                            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                        }, CanvasRenderer.prototype.save = function(t) {
                            if (this.renderConfig.clearCanvas) {
                                t && this.canvasContext.save();
                                var e = this.contextData.cTr.props;
                                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                                var r, i = this.contextData.saved[this.contextData.cArrPos];
                                for (r = 0; r < 16; r += 1) i[r] = e[r];
                                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                            } else this.canvasContext.save()
                        }, CanvasRenderer.prototype.restore = function(t) {
                            if (this.renderConfig.clearCanvas) {
                                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                                var e, r = this.contextData.saved[this.contextData.cArrPos],
                                    i = this.contextData.cTr.props;
                                for (e = 0; e < 16; e += 1) i[e] = r[e];
                                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
                            } else this.canvasContext.restore()
                        }, CanvasRenderer.prototype.configAnimation = function(t) {
                            this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
                                w: t.w,
                                h: t.h,
                                sx: 0,
                                sy: 0,
                                tx: 0,
                                ty: 0
                            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                        }, CanvasRenderer.prototype.updateContainerSize = function() {
                            var t, e, r, i;
                            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                                var n = this.renderConfig.preserveAspectRatio.split(" "),
                                    a = n[1] || "meet",
                                    s = n[0] || "xMidYMid",
                                    o = s.substr(0, 4),
                                    l = s.substr(4);
                                r = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (i > r && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (i > r && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                            } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                        }, CanvasRenderer.prototype.destroy = function() {
                            var t;
                            for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                        }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                                var r, i = this.layers.length;
                                for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r++)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                                if (this.globalData._mdf) {
                                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                                    !0 !== this.renderConfig.clearCanvas && this.restore()
                                }
                            }
                        }, CanvasRenderer.prototype.buildItem = function(t) {
                            var e = this.elements;
                            if (!e[t] && 99 != this.layers[t].ty) {
                                var r = this.createItem(this.layers[t], this, this.globalData);
                                e[t] = r, r.initExpressions()
                            }
                        }, CanvasRenderer.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, CanvasRenderer.prototype.hide = function() {
                            this.animationItem.container.style.display = "none"
                        }, CanvasRenderer.prototype.show = function() {
                            this.animationItem.container.style.display = "block"
                        }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                            var r = t.getBaseElement();
                            if (r) {
                                var i = this.layers[e];
                                if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                                else if (this.threeDElements) this.addTo3dContainer(r, e);
                                else {
                                    for (var n, a, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || n), s += 1;
                                    n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                                }
                            }
                        }, HybridRenderer.prototype.createShape = function(t) {
                            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                        }, HybridRenderer.prototype.createText = function(t) {
                            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this)
                        }, HybridRenderer.prototype.createCamera = function(t) {
                            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                        }, HybridRenderer.prototype.createImage = function(t) {
                            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                        }, HybridRenderer.prototype.createComp = function(t) {
                            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                        }, HybridRenderer.prototype.createSolid = function(t) {
                            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                        }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                            for (var e = 0, r = this.threeDElements.length; e < r;) {
                                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                                e += 1
                            }
                        }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                            var r = createTag("div");
                            styleDiv(r);
                            var i = createTag("div");
                            styleDiv(i), "3d" === e && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(i);
                            var n = {
                                container: i,
                                perspectiveElem: r,
                                startPos: t,
                                endPos: t,
                                type: e
                            };
                            return this.threeDElements.push(n), n
                        }, HybridRenderer.prototype.build3dContainers = function() {
                            var t, e, r = this.layers.length,
                                i = "";
                            for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                            for (t = (r = this.threeDElements.length) - 1; t >= 0; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                        }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                            for (var r = 0, i = this.threeDElements.length; r < i;) {
                                if (e <= this.threeDElements[r].endPos) {
                                    for (var n, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
                                    n ? this.threeDElements[r].container.insertBefore(t, n) : this.threeDElements[r].container.appendChild(t);
                                    break
                                }
                                r += 1
                            }
                        }, HybridRenderer.prototype.configAnimation = function(t) {
                            var e = createTag("div"),
                                r = this.animationItem.wrapper;
                            e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), e.style.overflow = "hidden";
                            var i = createNS("svg");
                            i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
                            var n = createNS("defs");
                            i.appendChild(n), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                        }, HybridRenderer.prototype.destroy = function() {
                            this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
                            var t, e = this.layers ? this.layers.length : 0;
                            for (t = 0; t < e; t++) this.elements[t].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, HybridRenderer.prototype.updateContainerSize = function() {
                            var t, e, r, i, n = this.animationItem.wrapper.offsetWidth,
                                a = this.animationItem.wrapper.offsetHeight,
                                s = n / a;
                            this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)"
                        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                            this.resizerElem.style.display = "none"
                        }, HybridRenderer.prototype.show = function() {
                            this.resizerElem.style.display = "block"
                        }, HybridRenderer.prototype.initItems = function() {
                            if (this.buildAllItems(), this.camera) this.camera.setup();
                            else {
                                var t, e = this.globalData.compSize.w,
                                    r = this.globalData.compSize.h,
                                    i = this.threeDElements.length;
                                for (t = 0; t < i; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"
                            }
                        }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                            var e, r = t.length,
                                i = createTag("div");
                            for (e = 0; e < r; e += 1)
                                if (t[e].xt) {
                                    var n = this.createComp(t[e], i, this.globalData.comp, null);
                                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                                }
                        }, MaskElement.prototype.getMaskProperty = function(t) {
                            return this.viewData[t].prop
                        }, MaskElement.prototype.renderFrame = function(t) {
                            var e, r = this.element.finalTransform.mat,
                                i = this.masksProperties.length;
                            for (e = 0; e < i; e++)
                                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -r.props[12]), this.viewData[e].invRect.setAttribute("y", -r.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                    var n = this.storedData[e].expan;
                                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                                }
                        }, MaskElement.prototype.getMaskelement = function() {
                            return this.maskElement
                        }, MaskElement.prototype.createLayerSolidPath = function() {
                            var t = "M0,0 ";
                            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
                        }, MaskElement.prototype.drawPath = function(t, e, r) {
                            var i, n, a = " M" + e.v[0][0] + "," + e.v[0][1];
                            for (n = e._length, i = 1; i < n; i += 1) a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                            if (e.c && n > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
                                var s = "";
                                r.elem && (e.c && (s = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
                            }
                        }, MaskElement.prototype.destroy = function() {
                            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                        }, HierarchyElement.prototype = {
                            initHierarchy: function() {
                                this.hierarchy = [], this._isParent = !1, this.checkParenting()
                            },
                            setHierarchy: function(t) {
                                this.hierarchy = t
                            },
                            setAsParent: function() {
                                this._isParent = !0
                            },
                            checkParenting: function() {
                                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                            }
                        }, FrameElement.prototype = {
                            initFrame: function() {
                                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                            },
                            prepareProperties: function(t, e) {
                                var r, i = this.dynamicProperties.length;
                                for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                            },
                            addDynamicProperty: function(t) {
                                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                            }
                        }, TransformElement.prototype = {
                            initTransform: function() {
                                this.finalTransform = {
                                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                        o: 0
                                    },
                                    _matMdf: !1,
                                    _opMdf: !1,
                                    mat: new Matrix
                                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                            },
                            renderTransform: function() {
                                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                    var t, e = this.finalTransform.mat,
                                        r = 0,
                                        i = this.hierarchy.length;
                                    if (!this.finalTransform._matMdf)
                                        for (; r < i;) {
                                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                                this.finalTransform._matMdf = !0;
                                                break
                                            }
                                            r += 1
                                        }
                                    if (this.finalTransform._matMdf)
                                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                                }
                            },
                            globalToLocal: function(t) {
                                var e = [];
                                e.push(this.finalTransform);
                                for (var r = !0, i = this.comp; r;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
                                var n, a, s = e.length;
                                for (n = 0; n < s; n += 1) a = e[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
                                return t
                            },
                            mHelper: new Matrix
                        }, RenderableElement.prototype = {
                            initRenderable: function() {
                                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                            },
                            addRenderableComponent: function(t) {
                                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                            },
                            removeRenderableComponent: function(t) {
                                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                            },
                            prepareRenderableFrame: function(t) {
                                this.checkLayerLimits(t)
                            },
                            checkTransparency: function() {
                                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                            },
                            checkLayerLimits: function(t) {
                                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                            },
                            renderRenderable: function() {
                                var t, e = this.renderableComponents.length;
                                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                            },
                            sourceRectAtTime: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    width: 100,
                                    height: 100
                                }
                            },
                            getLayerSize: function() {
                                return 5 === this.data.ty ? {
                                    w: this.data.textData.width,
                                    h: this.data.textData.height
                                } : {
                                    w: this.data.width,
                                    h: this.data.height
                                }
                            }
                        }, extendPrototype([RenderableElement, createProxyFunction({
                            initElement: function(t, e, r) {
                                this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            },
                            hide: function() {
                                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                            },
                            show: function() {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(t) {
                                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                            this.d = "", this._mdf = !1
                        }, SVGShapeData.prototype.setAsAnimated = function() {
                            this._isAnimated = !0
                        }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
                            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                                k: 0
                            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                                k: 0
                            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
                        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                            var r = createElementID(),
                                i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                            var n, a, s, o = [];
                            for (s = 4 * e.g.p, a = 0; a < s; a += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
                            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o
                        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                            if (this.g._hasOpacity && !this.g._collapsable) {
                                var r, i, n, a = createNS("mask"),
                                    s = createNS("path");
                                a.appendChild(s);
                                var o = createElementID(),
                                    l = createElementID();
                                a.setAttribute("id", l);
                                var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                                h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                                var p = this.stops;
                                for (i = 4 * t.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), p.push(r);
                                s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = a, this.ost = p, this.maskId = l, e.msElem = s
                            }
                        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                        var SVGElementsRenderer = function() {
                            var t = new Matrix,
                                e = new Matrix;

                            function r(t, e, r) {
                                (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                            }

                            function i(r, i, n) {
                                var a, s, o, l, h, p, c, f, u, m, d, y = i.styles.length,
                                    g = i.lvl;
                                for (p = 0; p < y; p += 1) {
                                    if (l = i.sh._mdf || n, i.styles[p].lvl < g) {
                                        for (f = e.reset(), m = g - i.styles[p].lvl, d = i.transformers.length - 1; !l && m > 0;) l = i.transformers[d].mProps._mdf || l, m--, d--;
                                        if (l)
                                            for (m = g - i.styles[p].lvl, d = i.transformers.length - 1; m > 0;) u = i.transformers[d].mProps.v.props, f.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m--, d--
                                    } else f = t;
                                    if (s = (c = i.sh.paths)._length, l) {
                                        for (o = "", a = 0; a < s; a += 1)(h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, f));
                                        i.caches[p] = o
                                    } else o = i.caches[p];
                                    i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = l || i.styles[p]._mdf
                                }
                            }

                            function n(t, e, r) {
                                var i = e.style;
                                (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
                            }

                            function a(t, e, r) {
                                s(t, e, r), o(0, e, r)
                            }

                            function s(t, e, r) {
                                var i, n, a, s, o, l = e.gf,
                                    h = e.g._hasOpacity,
                                    p = e.s.v,
                                    c = e.e.v;
                                if (e.o._mdf || r) {
                                    var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                    e.style.pElem.setAttribute(f, e.o.v)
                                }
                                if (e.s._mdf || r) {
                                    var u = 1 === t.t ? "x1" : "cx",
                                        m = "x1" === u ? "y1" : "cy";
                                    l.setAttribute(u, p[0]), l.setAttribute(m, p[1]), h && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
                                }
                                if (e.g._cmdf || r) {
                                    i = e.cst;
                                    var d = e.g.c;
                                    for (a = i.length, n = 0; n < a; n += 1)(s = i[n]).setAttribute("offset", d[4 * n] + "%"), s.setAttribute("stop-color", "rgb(" + d[4 * n + 1] + "," + d[4 * n + 2] + "," + d[4 * n + 3] + ")")
                                }
                                if (h && (e.g._omdf || r)) {
                                    var y = e.g.o;
                                    for (a = (i = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < a; n += 1) s = i[n], e.g._collapsable || s.setAttribute("offset", y[2 * n] + "%"), s.setAttribute("stop-opacity", y[2 * n + 1])
                                }
                                if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                                else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                                    o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                                    var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                                        v = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                                        x = Math.cos(g + e.a.v) * v + p[0],
                                        b = Math.sin(g + e.a.v) * v + p[1];
                                    l.setAttribute("fx", x), l.setAttribute("fy", b), h && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", b))
                                }
                            }

                            function o(t, e, r) {
                                var i = e.style,
                                    n = e.d;
                                n && (n._mdf || r) && n.dashStr && (i.pElem.setAttribute("stroke-dasharray", n.dashStr), i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
                            }
                            return {
                                createRenderFunction: function(t) {
                                    switch (t.ty, t.ty) {
                                        case "fl":
                                            return n;
                                        case "gf":
                                            return s;
                                        case "gs":
                                            return a;
                                        case "st":
                                            return o;
                                        case "sh":
                                        case "el":
                                        case "rc":
                                        case "sr":
                                            return i;
                                        case "tr":
                                            return r
                                    }
                                }
                            }
                        }();

                        function ShapeTransformManager() {
                            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                        }

                        function CVShapeData(t, e, r, i) {
                            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                            var n = 4;
                            "rc" == e.ty ? n = 5 : "el" == e.ty ? n = 6 : "sr" == e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
                            var a, s, o = r.length;
                            for (a = 0; a < o; a += 1) r[a].closed || (s = {
                                transforms: i.addTransformSequence(r[a].transforms),
                                trNodes: []
                            }, this.styledShapes.push(s), r[a].elements.push(s))
                        }

                        function BaseElement() {}

                        function NullElement(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
                        }

                        function SVGBaseElement() {}

                        function IShapeElement() {}

                        function ITextElement() {}

                        function ICompElement() {}

                        function IImageElement(t, e, r) {
                            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                                top: 0,
                                left: 0,
                                width: this.assetData.w,
                                height: this.assetData.h
                            }
                        }

                        function ISolidElement(t, e, r) {
                            this.initElement(t, e, r)
                        }

                        function SVGCompElement(t, e, r) {
                            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function SVGTextElement(t, e, r) {
                            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
                        }

                        function SVGShapeElement(t, e, r) {
                            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
                        }

                        function SVGTintFilter(t, e) {
                            this.filterManager = e;
                            var r = createNS("feColorMatrix");
                            if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                                var i, n = createNS("feMerge");
                                t.appendChild(n), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), n.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), n.appendChild(i)
                            }
                        }

                        function SVGFillFilter(t, e) {
                            this.filterManager = e;
                            var r = createNS("feColorMatrix");
                            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
                        }

                        function SVGGaussianBlurEffect(t, e) {
                            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                            var r = createNS("feGaussianBlur");
                            t.appendChild(r), this.feGaussianBlur = r
                        }

                        function SVGStrokeEffect(t, e) {
                            this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                        }

                        function SVGTritoneFilter(t, e) {
                            this.filterManager = e;
                            var r = createNS("feColorMatrix");
                            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
                            var i = createNS("feComponentTransfer");
                            i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
                            var n = createNS("feFuncR");
                            n.setAttribute("type", "table"), i.appendChild(n), this.feFuncR = n;
                            var a = createNS("feFuncG");
                            a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
                            var s = createNS("feFuncB");
                            s.setAttribute("type", "table"), i.appendChild(s), this.feFuncB = s
                        }

                        function SVGProLevelsFilter(t, e) {
                            this.filterManager = e;
                            var r = this.filterManager.effectElements,
                                i = createNS("feComponentTransfer");
                            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
                        }

                        function SVGDropShadowEffect(t, e) {
                            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
                            var r = createNS("feGaussianBlur");
                            r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
                            var i = createNS("feOffset");
                            i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
                            var n = createNS("feFlood");
                            n.setAttribute("flood-color", "#00ff00"), n.setAttribute("flood-opacity", "1"), n.setAttribute("result", "drop_shadow_3"), this.feFlood = n, t.appendChild(n);
                            var a = createNS("feComposite");
                            a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
                            var s, o = createNS("feMerge");
                            t.appendChild(o), s = createNS("feMergeNode"), o.appendChild(s), (s = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = s, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(s)
                        }
                        ShapeTransformManager.prototype = {
                            addTransformSequence: function(t) {
                                var e, r = t.length,
                                    i = "_";
                                for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
                                var n = this.sequences[i];
                                return n || (n = {
                                    transforms: [].concat(t),
                                    finalTransform: new Matrix,
                                    _mdf: !1
                                }, this.sequences[i] = n, this.sequenceList.push(n)), n
                            },
                            processSequence: function(t, e) {
                                for (var r, i = 0, n = t.transforms.length, a = e; i < n && !e;) {
                                    if (t.transforms[i].transform.mProps._mdf) {
                                        a = !0;
                                        break
                                    }
                                    i += 1
                                }
                                if (a)
                                    for (t.finalTransform.reset(), i = n - 1; i >= 0; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                                t._mdf = a
                            },
                            processSequences: function(t) {
                                var e, r = this.sequenceList.length;
                                for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
                            },
                            getNewKey: function() {
                                return "_" + this.transform_key_count++
                            }
                        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                            checkMasks: function() {
                                if (!this.data.hasMask) return !1;
                                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                    t += 1
                                }
                                return !1
                            },
                            initExpressions: function() {
                                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                            },
                            setBlendMode: function() {
                                var t = getBlendMode(this.data.bm);
                                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                            },
                            initBaseData: function(t, e, r) {
                                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                            },
                            getType: function() {
                                return this.type
                            },
                            sourceRectAtTime: function() {}
                        }, NullElement.prototype.prepareFrame = function(t) {
                            this.prepareProperties(t, !0)
                        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                            return null
                        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                            initRendererElement: function() {
                                this.layerElement = createNS("g")
                            },
                            createContainerElements: function() {
                                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                                var t, e, r, i = null;
                                if (this.data.td) {
                                    if (3 == this.data.td || 1 == this.data.td) {
                                        var n = createNS("mask");
                                        n.setAttribute("id", this.layerId), n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), i = n, this.globalData.defs.appendChild(n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, n.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                                    } else if (2 == this.data.td) {
                                        var a = createNS("mask");
                                        a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                                        var s = createNS("g");
                                        a.appendChild(s), t = createElementID(), e = filtersFactory.createFilter(t);
                                        var o = createNS("feComponentTransfer");
                                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                        var l = createNS("feFuncA");
                                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                                        var h = createNS("rect");
                                        h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), s.appendChild(h), s.appendChild(this.layerElement), i = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), s.appendChild(h), r.appendChild(this.layerElement), i = r, s.appendChild(r)), this.globalData.defs.appendChild(a)
                                    }
                                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                    var p = createNS("clipPath"),
                                        c = createNS("path");
                                    c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                    var f = createElementID();
                                    if (p.setAttribute("id", f), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
                                        var u = createNS("g");
                                        u.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), u.appendChild(this.layerElement), this.transformedElement = u, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
                                }
                                0 !== this.data.bm && this.setBlendMode()
                            },
                            renderElement: function() {
                                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                            },
                            destroyBaseElement: function() {
                                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                            },
                            getBaseElement: function() {
                                return this.data.hd ? null : this.baseElement
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                            },
                            setMatte: function(t) {
                                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                            }
                        }, IShapeElement.prototype = {
                            addShapeToModifiers: function(t) {
                                var e, r = this.shapeModifiers.length;
                                for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
                            },
                            isShapeInAnimatedModifiers: function(t) {
                                for (var e = this.shapeModifiers.length; 0 < e;)
                                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                                return !1
                            },
                            renderModifiers: function() {
                                if (this.shapeModifiers.length) {
                                    var t, e = this.shapes.length;
                                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
                                }
                            },
                            lcEnum: {
                                1: "butt",
                                2: "round",
                                3: "square"
                            },
                            ljEnum: {
                                1: "miter",
                                2: "round",
                                3: "bevel"
                            },
                            searchProcessedElement: function(t) {
                                for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                                    if (e[r].elem === t) return e[r].pos;
                                    r += 1
                                }
                                return 0
                            },
                            addProcessedElement: function(t, e) {
                                for (var r = this.processedElements, i = r.length; i;)
                                    if (r[i -= 1].elem === t) return void(r[i].pos = e);
                                r.push(new ProcessedElement(t, e))
                            },
                            prepareFrame: function(t) {
                                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                            }
                        }, ITextElement.prototype.initElement = function(t, e, r) {
                            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                        }, ITextElement.prototype.prepareFrame = function(t) {
                            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                        }, ITextElement.prototype.createPathShape = function(t, e) {
                            var r, i, n = e.length,
                                a = "";
                            for (r = 0; r < n; r += 1) i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t);
                            return a
                        }, ITextElement.prototype.updateDocumentData = function(t, e) {
                            this.textProperty.updateDocumentData(t, e)
                        }, ITextElement.prototype.canResizeFont = function(t) {
                            this.textProperty.canResizeFont(t)
                        }, ITextElement.prototype.setMinimumFontSize = function(t) {
                            this.textProperty.setMinimumFontSize(t)
                        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, n) {
                            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                                case 1:
                                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                                    break;
                                case 2:
                                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
                            }
                            e.translate(i, n, 0)
                        }, ITextElement.prototype.buildColor = function(t) {
                            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                        }, ICompElement.prototype.prepareFrame = function(t) {
                            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                                else {
                                    var e = this.tm.v;
                                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                                }
                                var r, i = this.elements.length;
                                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                            }
                        }, ICompElement.prototype.renderInnerContent = function() {
                            var t, e = this.layers.length;
                            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                        }, ICompElement.prototype.setElements = function(t) {
                            this.elements = t
                        }, ICompElement.prototype.getElements = function() {
                            return this.elements
                        }, ICompElement.prototype.destroyElements = function() {
                            var t, e = this.layers.length;
                            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                        }, ICompElement.prototype.destroy = function() {
                            this.destroyElements(), this.destroyBaseElement()
                        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                            var t = this.globalData.getAssetsPath(this.assetData);
                            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                        }, IImageElement.prototype.sourceRectAtTime = function() {
                            return this.sourceRect
                        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                            var t = createNS("rect");
                            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                        }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() {
                            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                        }, SVGTextElement.prototype.buildTextContents = function(t) {
                            for (var e = 0, r = t.length, i = [], n = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(n), n = "") : n += t[e], e += 1;
                            return i.push(n), i
                        }, SVGTextElement.prototype.buildNewText = function() {
                            var t, e, r = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                            var i = this.globalData.fontManager.getFontByName(r.f);
                            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                            else {
                                this.layerElement.setAttribute("font-family", i.fFamily);
                                var n = r.fWeight,
                                    a = r.fStyle;
                                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
                            }
                            this.layerElement.setAttribute("aria-label", r.t);
                            var s, o = r.l || [],
                                l = !!this.globalData.fontManager.chars;
                            e = o.length;
                            var h, p = this.mHelper,
                                c = "",
                                f = this.data.singleShape,
                                u = 0,
                                m = 0,
                                d = !0,
                                y = r.tr / 1e3 * r.finalSize;
                            if (!f || l || r.sz) {
                                var g, v, x = this.textSpans.length;
                                for (t = 0; t < e; t += 1) l && f && 0 !== t || (s = x > t ? this.textSpans[t] : createNS(l ? "path" : "text"), x <= t && (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = s, this.layerElement.appendChild(s)), s.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (u = -y, m += r.yOffset, m += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, u, m), u += o[t].l || 0, u += y), l ? (h = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? c += this.createPathShape(p, h) : s.setAttribute("d", this.createPathShape(p, h))) : (f && s.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                                f && s && s.setAttribute("d", c)
                            } else {
                                var b = this.textContainer,
                                    P = "start";
                                switch (r.j) {
                                    case 1:
                                        P = "end";
                                        break;
                                    case 2:
                                        P = "middle"
                                }
                                b.setAttribute("text-anchor", P), b.setAttribute("letter-spacing", y);
                                var E = this.buildTextContents(r.finalText);
                                for (e = E.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t] || createNS("tspan")).textContent = E[t], s.setAttribute("x", 0), s.setAttribute("y", m), s.style.display = "inherit", b.appendChild(s), this.textSpans[t] = s, m += r.finalLineHeight;
                                this.layerElement.appendChild(b)
                            }
                            for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                            this._sizeChanged = !0
                        }, SVGTextElement.prototype.sourceRectAtTime = function(t) {
                            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                                this._sizeChanged = !1;
                                var e = this.layerElement.getBBox();
                                this.bbox = {
                                    top: e.y,
                                    left: e.x,
                                    width: e.width,
                                    height: e.height
                                }
                            }
                            return this.bbox
                        }, SVGTextElement.prototype.renderInnerContent = function() {
                            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                                var t, e;
                                this._sizeChanged = !0;
                                var r, i, n = this.textAnimator.renderedLetters,
                                    a = this.textProperty.currentData.l;
                                for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = n[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
                            }
                        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                            var t, e, r, i, n = this.shapes.length,
                                a = this.stylesList.length,
                                s = [],
                                o = !1;
                            for (r = 0; r < a; r += 1) {
                                for (i = this.stylesList[r], o = !1, s.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (s.push(e), o = e._isAnimated || o);
                                s.length > 1 && o && this.setShapesAsAnimated(s)
                            }
                        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
                        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                            var r, i = new SVGStyleData(t, e),
                                n = i.pElem;
                            return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" !== t.ty && "gs" !== t.ty || (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
                        }, SVGShapeElement.prototype.createGroupElement = function(t) {
                            var e = new ShapeGroupData;
                            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                                i = new SVGTransformData(r, r.o, e);
                            return this.addToAnimatedContents(t, i), i
                        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                            var i = 4;
                            "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                            var n = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
                            return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
                        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                            for (var r = 0, i = this.animatedContents.length; r < i;) {
                                if (this.animatedContents[r].element === e) return;
                                r += 1
                            }
                            this.animatedContents.push({
                                fn: SVGElementsRenderer.createRenderFunction(t),
                                element: e,
                                data: t
                            })
                        }, SVGShapeElement.prototype.setElementStyles = function(t) {
                            var e, r = t.styles,
                                i = this.stylesList.length;
                            for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
                        }, SVGShapeElement.prototype.reloadShapes = function() {
                            this._isFirstFrame = !0;
                            var t, e = this.itemsData.length;
                            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                            this.renderModifiers()
                        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, n, a, s) {
                            var o, l, h, p, c, f, u = [].concat(a),
                                m = t.length - 1,
                                d = [],
                                y = [];
                            for (o = m; o >= 0; o -= 1) {
                                if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = s, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && i.appendChild(e[o].style.pElem), d.push(e[o].style);
                                else if ("gr" == t[o].ty) {
                                    if (f)
                                        for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                                    else e[o] = this.createGroupElement(t[o]);
                                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, u, s), t[o]._render && i.appendChild(e[o].gr)
                                } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, u.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], u, n)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" == t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), s = !1), y.push(c));
                                this.addProcessedElement(t[o], o + 1)
                            }
                            for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
                            for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0
                        }, SVGShapeElement.prototype.renderInnerContent = function() {
                            this.renderModifiers();
                            var t, e = this.stylesList.length;
                            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                        }, SVGShapeElement.prototype.renderShape = function() {
                            var t, e, r = this.animatedContents.length;
                            for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                        }, SVGShapeElement.prototype.destroy = function() {
                            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                        }, SVGTintFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = this.filterManager.effectElements[0].p.v,
                                    r = this.filterManager.effectElements[1].p.v,
                                    i = this.filterManager.effectElements[2].p.v / 100;
                                this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                            }
                        }, SVGFillFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = this.filterManager.effectElements[2].p.v,
                                    r = this.filterManager.effectElements[6].p.v;
                                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                            }
                        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = .3 * this.filterManager.effectElements[0].p.v,
                                    r = this.filterManager.effectElements[1].p.v,
                                    i = 3 == r ? 0 : e,
                                    n = 2 == r ? 0 : e;
                                this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
                                var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                                this.feGaussianBlur.setAttribute("edgeMode", a)
                            }
                        }, SVGStrokeEffect.prototype.initialize = function() {
                            var t, e, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                            for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                                p: t,
                                m: r
                            });
                            if (3 === this.filterManager.effectElements[10].p.v) {
                                var a = createNS("mask"),
                                    s = createElementID();
                                a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                                var o = createNS("g");
                                for (o.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); n[0];) o.appendChild(n[0]);
                                this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
                            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                                if (2 === this.filterManager.effectElements[10].p.v)
                                    for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                            }
                            this.initialized = !0, this.pathMasker = e
                        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                            this.initialized || this.initialize();
                            var e, r, i, n = this.paths.length;
                            for (e = 0; e < n; e += 1)
                                if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                                    var a;
                                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                        var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                            o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                            l = i.getTotalLength();
                                        a = "0 0 0 " + l * s + " ";
                                        var h, p = l * (o - s),
                                            c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                                            f = Math.floor(p / c);
                                        for (h = 0; h < f; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                                        a += "0 " + 10 * l + " 0 0"
                                    } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                                    i.setAttribute("stroke-dasharray", a)
                                }
                            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                                var u = this.filterManager.effectElements[3].p.v;
                                this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * u[0]) + "," + bm_floor(255 * u[1]) + "," + bm_floor(255 * u[2]) + ")")
                            }
                        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = this.filterManager.effectElements[0].p.v,
                                    r = this.filterManager.effectElements[1].p.v,
                                    i = this.filterManager.effectElements[2].p.v,
                                    n = i[0] + " " + r[0] + " " + e[0],
                                    a = i[1] + " " + r[1] + " " + e[1],
                                    s = i[2] + " " + r[2] + " " + e[2];
                                this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
                            }
                        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                            var r = createNS(t);
                            return r.setAttribute("type", "table"), e.appendChild(r), r
                        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, n) {
                            for (var a, s, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
                                    length: 256
                                }), c = 0, f = n - i, u = e - t; o <= 256;) s = (a = o / 256) <= l ? u < 0 ? n : i : a >= h ? u < 0 ? i : n : i + f * Math.pow((a - t) / u, 1 / r), p[c++] = s, o += 256 / 255;
                            return p.join(" ")
                        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e, r = this.filterManager.effectElements;
                                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                            }
                        }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                                    var e = this.filterManager.effectElements[0].p.v;
                                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                                }
                                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                    var r = this.filterManager.effectElements[3].p.v,
                                        i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                        n = r * Math.cos(i),
                                        a = r * Math.sin(i);
                                    this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
                                }
                            }
                        };
                        var _svgMatteSymbols = [];

                        function SVGMatte3Effect(t, e, r) {
                            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
                        }

                        function SVGEffects(t) {
                            var e, r, i = t.data.ef ? t.data.ef.length : 0,
                                n = createElementID(),
                                a = filtersFactory.createFilter(n),
                                s = 0;
                            for (this.filters = [], e = 0; e < i; e += 1) r = null, 20 === t.data.ef[e].ty ? (s += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (s += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (s += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (s += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (s += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (s += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
                            s && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
                        }

                        function CVContextData() {
                            var t;
                            for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                            this._length = 15
                        }

                        function CVBaseElement() {}

                        function CVImageElement(t, e, r) {
                            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, r)
                        }

                        function CVCompElement(t, e, r) {
                            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function CVMaskElement(t, e) {
                            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                            var r, i = this.masksProperties.length,
                                n = !1;
                            for (r = 0; r < i; r++) "n" !== this.masksProperties[r].mode && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                            this.hasMasks = n, n && this.element.addRenderableComponent(this)
                        }

                        function CVShapeElement(t, e, r) {
                            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
                        }

                        function CVSolidElement(t, e, r) {
                            this.initElement(t, e, r)
                        }

                        function CVTextElement(t, e, r) {
                            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                                fill: "rgba(0,0,0,0)",
                                stroke: "rgba(0,0,0,0)",
                                sWidth: 0,
                                fValue: ""
                            }, this.initElement(t, e, r)
                        }

                        function CVEffects() {}

                        function HBaseElement(t, e, r) {}

                        function HSolidElement(t, e, r) {
                            this.initElement(t, e, r)
                        }

                        function HCompElement(t, e, r) {
                            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function HShapeElement(t, e, r) {
                            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                                x: 999999,
                                y: -999999,
                                h: 0,
                                w: 0
                            }
                        }

                        function HTextElement(t, e, r) {
                            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                                x: 999999,
                                y: -999999,
                                h: 0,
                                w: 0
                            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
                        }

                        function HImageElement(t, e, r) {
                            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
                        }

                        function HCameraElement(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
                            var i = PropertyFactory.getProp;
                            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                                var n, a = t.ks.or.k.length;
                                for (n = 0; n < a; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
                            }
                            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                                mProp: this
                            }
                        }
                        SVGMatte3Effect.prototype.findSymbol = function(t) {
                            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                                e += 1
                            }
                            return null
                        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                            var r = t.layerElement.parentNode;
                            if (r) {
                                for (var i, n = r.children, a = 0, s = n.length; a < s && n[a] !== t.layerElement;) a += 1;
                                a <= s - 2 && (i = n[a + 1]);
                                var o = createNS("use");
                                o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
                            }
                        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                            if (!this.findSymbol(e)) {
                                var r = createElementID(),
                                    i = createNS("mask");
                                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                                var n = t.globalData.defs;
                                n.appendChild(i);
                                var a = createNS("symbol");
                                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), n.appendChild(a);
                                var s = createNS("use");
                                s.setAttribute("href", "#" + r), i.appendChild(s), e.data.hd = !1, e.show()
                            }
                            t.setMatte(e.layerId)
                        }, SVGMatte3Effect.prototype.initialize = function() {
                            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
                            this.initialized = !0
                        }, SVGMatte3Effect.prototype.renderFrame = function() {
                            this.initialized || this.initialize()
                        }, SVGEffects.prototype.renderFrame = function(t) {
                            var e, r = this.filters.length;
                            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
                        }, CVContextData.prototype.duplicate = function() {
                            var t = 2 * this._length,
                                e = this.savedOp;
                            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                            var r = 0;
                            for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
                            this._length = t
                        }, CVContextData.prototype.reset = function() {
                            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                        }, CVBaseElement.prototype = {
                            createElements: function() {},
                            initRendererElement: function() {},
                            createContainerElements: function() {
                                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                            },
                            createContent: function() {},
                            setBlendMode: function() {
                                var t = this.globalData;
                                if (t.blendMode !== this.data.bm) {
                                    t.blendMode = this.data.bm;
                                    var e = getBlendMode(this.data.bm);
                                    t.canvasContext.globalCompositeOperation = e
                                }
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new CVMaskElement(this.data, this)
                            },
                            hideElement: function() {
                                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                            },
                            showElement: function() {
                                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                            },
                            renderFrame: function() {
                                this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            destroy: function() {
                                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                            },
                            mHelper: new Matrix
                        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                                var t = createTag("canvas");
                                t.width = this.assetData.w, t.height = this.assetData.h;
                                var e, r, i = t.getContext("2d"),
                                    n = this.img.width,
                                    a = this.img.height,
                                    s = n / a,
                                    o = this.assetData.w / this.assetData.h,
                                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                                s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (r = a) * o : r = (e = n) / o, i.drawImage(this.img, (n - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                            }
                        }, CVImageElement.prototype.renderInnerContent = function(t) {
                            this.canvasContext.drawImage(this.img, 0, 0)
                        }, CVImageElement.prototype.destroy = function() {
                            this.img = null
                        }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                            var t;
                            for (t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                        }, CVCompElement.prototype.destroy = function() {
                            var t;
                            for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                            this.layers = null, this.elements = null
                        }, CVMaskElement.prototype.renderFrame = function() {
                            if (this.hasMasks) {
                                var t, e, r, i, n = this.element.finalTransform.mat,
                                    a = this.element.canvasContext,
                                    s = this.masksProperties.length;
                                for (a.beginPath(), t = 0; t < s; t++)
                                    if ("n" !== this.masksProperties[t].mode) {
                                        this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                                        var o, l = i._length;
                                        for (o = 1; o < l; o++) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                                        r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                                    }
                                this.element.globalData.renderer.save(!0), a.clip()
                            }
                        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                            this.element = null
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                            opacity: 1,
                            _opMdf: !1
                        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                            var r = {
                                    data: t,
                                    type: t.ty,
                                    preTransforms: this.transformsManager.addTransformSequence(e),
                                    transforms: [],
                                    elements: [],
                                    closed: !0 === t.hd
                                },
                                i = {};
                            if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                                    k: 0
                                }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                                    k: 0
                                }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
                                if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                                    var n = new DashProperty(this, t.d, "canvas", this);
                                    i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                                }
                            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
                            return this.stylesList.push(r), i.style = r, i
                        }, CVShapeElement.prototype.createGroupElement = function(t) {
                            return {
                                it: [],
                                prevViewData: []
                            }
                        }, CVShapeElement.prototype.createTransformElement = function(t) {
                            return {
                                transform: {
                                    opacity: 1,
                                    _opMdf: !1,
                                    key: this.transformsManager.getNewKey(),
                                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                                }
                            }
                        }, CVShapeElement.prototype.createShapeElement = function(t) {
                            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                            return this.shapes.push(e), this.addShapeToModifiers(e), e
                        }, CVShapeElement.prototype.reloadShapes = function() {
                            this._isFirstFrame = !0;
                            var t, e = this.itemsData.length;
                            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                            var e, r = this.stylesList.length;
                            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                            var t, e = this.stylesList.length;
                            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                        }, CVShapeElement.prototype.closeStyles = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) t[e].closed = !0
                        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, n) {
                            var a, s, o, l, h, p, c = t.length - 1,
                                f = [],
                                u = [],
                                m = [].concat(n);
                            for (a = c; a >= 0; a -= 1) {
                                if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = i, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], m), f.push(e[a].style);
                                else if ("gr" == t[a].ty) {
                                    if (l)
                                        for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
                                    else e[a] = this.createGroupElement(t[a]);
                                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, m)
                                } else "tr" == t[a].ty ? (l || (p = this.createTransformElement(t[a]), e[a] = p), m.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (l ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = h, this.shapeModifiers.push(h)), u.push(h)) : "rp" == t[a].ty && (l ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty), e[a] = h, h.init(this, t, a, e), this.shapeModifiers.push(h), i = !1), u.push(h));
                                this.addProcessedElement(t[a], a + 1)
                            }
                            for (this.removeTransformFromStyleList(), this.closeStyles(f), c = u.length, a = 0; a < c; a += 1) u[a].closed = !0
                        }, CVShapeElement.prototype.renderInnerContent = function() {
                            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                        }, CVShapeElement.prototype.drawLayer = function() {
                            var t, e, r, i, n, a, s, o, l, h = this.stylesList.length,
                                p = this.globalData.renderer,
                                c = this.globalData.canvasContext;
                            for (t = 0; t < h; t += 1)
                                if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                                    for (p.save(), a = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                                        for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), n = (s = a[e].trNodes).length, i = 0; i < n; i += 1) "m" == s[i].t ? c.moveTo(s[i].p[0], s[i].p[1]) : "c" == s[i].t ? c.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : c.closePath();
                                        "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter))
                                    }
                                    "st" !== o && "gs" !== o && c.fill(l.r), p.restore()
                                }
                        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
                            var n, a;
                            for (a = t, n = e.length - 1; n >= 0; n -= 1) "tr" == e[n].ty ? (a = r[n].transform, this.renderShapeTransform(t, a)) : "sh" == e[n].ty || "el" == e[n].ty || "rc" == e[n].ty || "sr" == e[n].ty ? this.renderPath(e[n], r[n]) : "fl" == e[n].ty ? this.renderFill(e[n], r[n], a) : "st" == e[n].ty ? this.renderStroke(e[n], r[n], a) : "gf" == e[n].ty || "gs" == e[n].ty ? this.renderGradientFill(e[n], r[n], a) : "gr" == e[n].ty ? this.renderShape(a, e[n].it, r[n].it) : e[n].ty;
                            i && this.drawLayer()
                        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                                var r, i, n, a = t.trNodes,
                                    s = e.paths,
                                    o = s._length;
                                a.length = 0;
                                var l = t.transforms.finalTransform;
                                for (n = 0; n < o; n += 1) {
                                    var h = s.shapes[n];
                                    if (h && h.v) {
                                        for (i = h._length, r = 1; r < i; r += 1) 1 === r && a.push({
                                            t: "m",
                                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                        }), a.push({
                                            t: "c",
                                            pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                                        });
                                        1 === i && a.push({
                                            t: "m",
                                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                        }), h.c && i && (a.push({
                                            t: "c",
                                            pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                                        }), a.push({
                                            t: "z"
                                        }))
                                    }
                                }
                                t.trNodes = a
                            }
                        }, CVShapeElement.prototype.renderPath = function(t, e) {
                            if (!0 !== t.hd && t._shouldRender) {
                                var r, i = e.styledShapes.length;
                                for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
                            }
                        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
                            var i = e.style;
                            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
                        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                            var i = e.style;
                            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                                var n = this.globalData.canvasContext,
                                    a = e.s.v,
                                    s = e.e.v;
                                if (1 === t.t) f = n.createLinearGradient(a[0], a[1], s[0], s[1]);
                                else var o = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)),
                                    l = Math.atan2(s[1] - a[1], s[0] - a[0]),
                                    h = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                                    p = Math.cos(l + e.a.v) * h + a[0],
                                    c = Math.sin(l + e.a.v) * h + a[1],
                                    f = n.createRadialGradient(p, c, 0, a[0], a[1], o);
                                var u, m = t.g.p,
                                    d = e.g.c,
                                    y = 1;
                                for (u = 0; u < m; u += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * u + 1]), f.addColorStop(d[4 * u] / 100, "rgba(" + d[4 * u + 1] + "," + d[4 * u + 2] + "," + d[4 * u + 3] + "," + y + ")");
                                i.grd = f
                            }
                            i.coOp = e.o.v * r.opacity
                        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
                            var i = e.style,
                                n = e.d;
                            n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                        }, CVShapeElement.prototype.destroy = function() {
                            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                            var t = this.canvasContext;
                            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                            var t = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                            var e = !1;
                            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                            var r = !1;
                            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                            var i, n, a = this.globalData.fontManager.getFontByName(t.f),
                                s = t.l,
                                o = this.mHelper;
                            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
                            var l, h, p, c, f, u, m, d, y, g, v = this.data.singleShape,
                                x = t.tr / 1e3 * t.finalSize,
                                b = 0,
                                P = 0,
                                E = !0,
                                _ = 0;
                            for (i = 0; i < n; i += 1) {
                                for (h = (l = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && l.data || {}, o.reset(), v && s[i].n && (b = -x, P += t.yOffset, P += E ? 1 : 0, E = !1), m = (f = h.shapes ? h.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, s[i].line, b, P), y = createSizedArray(m), u = 0; u < m; u += 1) {
                                    for (c = f[u].ks.k.i.length, d = f[u].ks.k, g = [], p = 1; p < c; p += 1) 1 == p && g.push(o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), g.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[p][0], d.i[p][1], 0), o.applyToY(d.i[p][0], d.i[p][1], 0), o.applyToX(d.v[p][0], d.v[p][1], 0), o.applyToY(d.v[p][0], d.v[p][1], 0));
                                    g.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[0][0], d.i[0][1], 0), o.applyToY(d.i[0][0], d.i[0][1], 0), o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), y[u] = g
                                }
                                v && (b += s[i].l, b += x), this.textSpans[_] ? this.textSpans[_].elem = y : this.textSpans[_] = {
                                    elem: y
                                }, _ += 1
                            }
                        }, CVTextElement.prototype.renderInnerContent = function() {
                            var t, e, r, i, n, a, s = this.canvasContext;
                            this.finalTransform.mat.props, s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                            var o, l = this.textAnimator.renderedLetters,
                                h = this.textProperty.currentData.l;
                            e = h.length;
                            var p, c, f = null,
                                u = null,
                                m = null;
                            for (t = 0; t < e; t += 1)
                                if (!h[t].n) {
                                    if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                        for (o && o.fc ? f !== o.fc && (f = o.fc, s.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, s.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                            for (a = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                                    }
                                    if (this.stroke) {
                                        for (o && o.sw ? m !== o.sw && (m = o.sw, s.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? u !== o.sc && (u = o.sc, s.strokeStyle = o.sc) : u !== this.values.stroke && (u = this.values.stroke, s.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                            for (a = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                                    }
                                    o && this.globalData.renderer.restore()
                                }
                        }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                            checkBlendMode: function() {},
                            initRendererElement: function() {
                                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                            },
                            createContainerElements: function() {
                                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                            },
                            renderElement: function() {
                                this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            destroy: function() {
                                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new MaskElement(this.data, this, this.globalData)
                            },
                            addEffects: function() {},
                            setMatte: function() {}
                        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                            var t;
                            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                        }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                            for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
                            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
                        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                            var t;
                            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                            else {
                                t = createNS("svg");
                                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                            }
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
                            return e
                        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                            var r, i, n, a, s, o = t.sh.v,
                                l = t.transformers,
                                h = o._length;
                            if (!(h <= 1)) {
                                for (r = 0; r < h - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, n, a, s, e);
                                o.c && (i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, n, a, s, e))
                            }
                        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, n) {
                            this.getBoundsOfCurve(t, e, r, i);
                            var a = this.shapeBoundingBox;
                            n.x = bm_min(a.left, n.x), n.xMax = bm_max(a.right, n.xMax), n.y = bm_min(a.top, n.y), n.yMax = bm_max(a.bottom, n.yMax)
                        }, HShapeElement.prototype.shapeBoundingBox = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, HShapeElement.prototype.tempBoundingBox = {
                            x: 0,
                            xMax: 0,
                            y: 0,
                            yMax: 0,
                            width: 0,
                            height: 0
                        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
                            for (var n, a, s, o, l, h, p, c = [
                                    [t[0], i[0]],
                                    [t[1], i[1]]
                                ], f = 0; f < 2; ++f)
                                if (a = 6 * t[f] - 12 * e[f] + 6 * r[f], n = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], s = 3 * e[f] - 3 * t[f], a |= 0, s |= 0, 0 !== (n |= 0))(l = a * a - 4 * s * n) < 0 || (0 < (h = (-a + bm_sqrt(l)) / (2 * n)) && h < 1 && c[f].push(this.calculateF(h, t, e, r, i, f)), 0 < (p = (-a - bm_sqrt(l)) / (2 * n)) && p < 1 && c[f].push(this.calculateF(p, t, e, r, i, f)));
                                else {
                                    if (0 === a) continue;
                                    0 < (o = -s / a) && o < 1 && c[f].push(this.calculateF(o, t, e, r, i, f))
                                }
                            this.shapeBoundingBox.left = bm_min.apply(null, c[0]), this.shapeBoundingBox.top = bm_min.apply(null, c[1]), this.shapeBoundingBox.right = bm_max.apply(null, c[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, c[1])
                        }, HShapeElement.prototype.calculateF = function(t, e, r, i, n, a) {
                            return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bm_pow(t, 2) * i[a] + bm_pow(t, 3) * n[a]
                        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
                        }, HShapeElement.prototype.currentBoxContains = function(t) {
                            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                        }, HShapeElement.prototype.renderInnerContent = function() {
                            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var t = this.tempBoundingBox,
                                    e = 999999;
                                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                                var r = !1;
                                this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                            }
                        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                            if (this.isMasked = this.checkMasks(), this.isMasked) {
                                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                                var t = createNS("g");
                                this.maskedElement.appendChild(t), this.innerElem = t
                            } else this.renderType = "html", this.innerElem = this.layerElement;
                            this.checkParenting()
                        }, HTextElement.prototype.buildNewText = function() {
                            var t = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                            var e = this.innerElem.style;
                            e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                            var r, i, n = this.globalData.fontManager.getFontByName(t.f);
                            if (!this.globalData.fontManager.chars)
                                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
                                else {
                                    e.fontFamily = n.fFamily;
                                    var a = t.fWeight,
                                        s = t.fStyle;
                                    e.fontStyle = s, e.fontWeight = a
                                }
                            var o, l, h, p = t.l;
                            i = p.length;
                            var c, f = this.mHelper,
                                u = "",
                                m = 0;
                            for (r = 0; r < i; r += 1) {
                                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? o = this.textPaths[m] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? h = (l = this.textSpans[m]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(o), styleDiv(l)))) : this.isMasked ? o = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (l = this.textSpans[m], o = this.textPaths[m]) : (styleDiv(l = createTag("span")), styleDiv(o = createTag("span")), l.appendChild(o)), this.globalData.fontManager.chars) {
                                    var d, y = this.globalData.fontManager.getCharData(t.finalText[r], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                                    if (d = y ? y.data : null, f.reset(), d && d.shapes && (c = d.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), u = this.createPathShape(f, c), o.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(o);
                                    else {
                                        if (this.innerElem.appendChild(l), d && d.shapes) {
                                            document.body.appendChild(h);
                                            var g = h.getBBox();
                                            h.setAttribute("width", g.width + 2), h.setAttribute("height", g.height + 2), h.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), h.style.transform = h.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", p[r].yOffset = g.y - 1
                                        } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                                        l.appendChild(h)
                                    }
                                } else o.textContent = p[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(l), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
                                this.isMasked ? this.textSpans[m] = o : this.textSpans[m] = l, this.textSpans[m].style.display = "block", this.textPaths[m] = o, m += 1
                            }
                            for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
                        }, HTextElement.prototype.renderInnerContent = function() {
                            if (this.data.singleShape) {
                                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                                this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
                            }
                            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                                var t, e, r, i, n, a = 0,
                                    s = this.textAnimator.renderedLetters,
                                    o = this.textProperty.currentData.l;
                                for (e = o.length, t = 0; t < e; t += 1) o[t].n ? a += 1 : (i = this.textSpans[t], n = this.textPaths[t], r = s[a], a += 1, r._mdf.m && (this.isMasked ? i.setAttribute("transform", r.m) : i.style.transform = i.style.webkitTransform = r.m), i.style.opacity = r.o, r.sw && r._mdf.sw && n.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && n.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (n.setAttribute("fill", r.fc), n.style.color = r.fc));
                                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                    var l = this.innerElem.getBBox();
                                    this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height)), this.currentBBox.w === l.width + 2 && this.currentBBox.h === l.height + 2 && this.currentBBox.x === l.x - 1 && this.currentBBox.y === l.y - 1 || (this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                                }
                            }
                        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                            var t = this.globalData.getAssetsPath(this.assetData),
                                e = new Image;
                            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                            var t, e, r = this.comp.threeDElements.length;
                            for (t = 0; t < r; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
                        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                            var t, e, r = this._isFirstFrame;
                            if (this.hierarchy)
                                for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
                            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                                if (this.mat.reset(), this.hierarchy)
                                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                        var i = this.hierarchy[t].finalTransform.mProp;
                                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                                    }
                                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                    var n = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
                                        a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                                        s = [n[0] / a, n[1] / a, n[2] / a],
                                        o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                                        l = Math.atan2(s[1], o),
                                        h = Math.atan2(s[0], -s[2]);
                                    this.mat.rotateY(h).rotateX(-l)
                                }
                                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                                var p = !this._prevMat.equals(this.mat);
                                if ((p || this.pe._mdf) && this.comp.threeDElements) {
                                    var c;
                                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (c = this.comp.threeDElements[t]).type && (p && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                                    this.mat.clone(this._prevMat)
                                }
                            }
                            this._isFirstFrame = !1
                        }, HCameraElement.prototype.prepareFrame = function(t) {
                            this.prepareProperties(t, !0)
                        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                            return null
                        };
                        var animationManager = function() {
                                var t = {},
                                    e = [],
                                    r = 0,
                                    i = 0,
                                    n = 0,
                                    a = !0,
                                    s = !1;

                                function o(t) {
                                    for (var r = 0, n = t.target; r < i;) e[r].animation === n && (e.splice(r, 1), r -= 1, i -= 1, n.isPaused || p()), r += 1
                                }

                                function l(t, r) {
                                    if (!t) return null;
                                    for (var n = 0; n < i;) {
                                        if (e[n].elem == t && null !== e[n].elem) return e[n].animation;
                                        n += 1
                                    }
                                    var a = new AnimationItem;
                                    return c(a, t), a.setData(t, r), a
                                }

                                function h() {
                                    n += 1, m()
                                }

                                function p() {
                                    n -= 1
                                }

                                function c(t, r) {
                                    t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                                        elem: r,
                                        animation: t
                                    }), i += 1
                                }

                                function f(t) {
                                    var o, l = t - r;
                                    for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
                                    r = t, n && !s ? window.requestAnimationFrame(f) : a = !0
                                }

                                function u(t) {
                                    r = t, window.requestAnimationFrame(f)
                                }

                                function m() {
                                    !s && n && a && (window.requestAnimationFrame(u), a = !1)
                                }
                                return t.registerAnimation = l, t.loadAnimation = function(t) {
                                    var e = new AnimationItem;
                                    return c(e, null), e.setParams(t), e
                                }, t.setSpeed = function(t, r) {
                                    var n;
                                    for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r)
                                }, t.setDirection = function(t, r) {
                                    var n;
                                    for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r)
                                }, t.play = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.play(t)
                                }, t.pause = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.pause(t)
                                }, t.stop = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.stop(t)
                                }, t.togglePause = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
                                }, t.searchAnimations = function(t, e, r) {
                                    var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                        a = n.length;
                                    for (i = 0; i < a; i += 1) r && n[i].setAttribute("data-bm-type", r), l(n[i], t);
                                    if (e && 0 === a) {
                                        r || (r = "svg");
                                        var s = document.getElementsByTagName("body")[0];
                                        s.innerHTML = "";
                                        var o = createTag("div");
                                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, t)
                                    }
                                }, t.resize = function() {
                                    var t;
                                    for (t = 0; t < i; t += 1) e[t].animation.resize()
                                }, t.goToAndStop = function(t, r, n) {
                                    var a;
                                    for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, n)
                                }, t.destroy = function(t) {
                                    var r;
                                    for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
                                }, t.freeze = function() {
                                    s = !0
                                }, t.unfreeze = function() {
                                    s = !1, m()
                                }, t.getRegisteredAnimations = function() {
                                    var t, r = e.length,
                                        i = [];
                                    for (t = 0; t < r; t += 1) i.push(e[t].animation);
                                    return i
                                }, t
                            }(),
                            AnimationItem = function() {
                                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
                            };
                        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                            t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                            var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
                            switch (e) {
                                case "canvas":
                                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                                    break;
                                case "svg":
                                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                                    break;
                                default:
                                    this.renderer = new HybridRenderer(this, t.rendererSettings)
                            }
                            this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && ("json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json"), -1 != t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                                this.trigger("data_failed")
                            }.bind(this)))
                        }, AnimationItem.prototype.setData = function(t, e) {
                            var r = {
                                    wrapper: t,
                                    animationData: e ? "object" === typeof e ? e : JSON.parse(e) : null
                                },
                                i = t.attributes;
                            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                            var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                            "" === n || (r.loop = "false" !== n && ("true" === n || parseInt(n)));
                            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                            r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
                        }, AnimationItem.prototype.includeLayers = function(t) {
                            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                            var e, r, i = this.animationData.layers,
                                n = i.length,
                                a = t.layers,
                                s = a.length;
                            for (r = 0; r < s; r += 1)
                                for (e = 0; e < n;) {
                                    if (i[e].id == a[r].id) {
                                        i[e] = a[r];
                                        break
                                    }
                                    e += 1
                                }
                            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                                for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
                            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                        }, AnimationItem.prototype.loadNextSegment = function() {
                            var t = this.animationData.segments;
                            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                            var e = t.shift();
                            this.timeCompleted = e.time * this.frameRate;
                            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                            this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() {
                                this.trigger("data_failed")
                            }.bind(this))
                        }, AnimationItem.prototype.loadSegments = function() {
                            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                        }, AnimationItem.prototype.imagesLoaded = function() {
                            this.trigger("loaded_images"), this.checkLoaded()
                        }, AnimationItem.prototype.preloadImages = function() {
                            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                        }, AnimationItem.prototype.configAnimation = function(t) {
                            this.renderer && (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.renderer.searchExtraCompositions(t.assets), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded())
                        }, AnimationItem.prototype.waitForFontsLoaded = function() {
                            this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                        }, AnimationItem.prototype.checkLoaded = function() {
                            this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                                this.trigger("DOMLoaded")
                            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                        }, AnimationItem.prototype.resize = function() {
                            this.renderer.updateContainerSize()
                        }, AnimationItem.prototype.setSubframe = function(t) {
                            this.subframeEnabled = !!t
                        }, AnimationItem.prototype.gotoFrame = function() {
                            this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
                        }, AnimationItem.prototype.renderFrame = function() {
                            !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        }, AnimationItem.prototype.play = function(t) {
                            t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
                        }, AnimationItem.prototype.pause = function(t) {
                            t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
                        }, AnimationItem.prototype.togglePause = function(t) {
                            t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
                        }, AnimationItem.prototype.stop = function(t) {
                            t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
                            r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
                        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                            this.goToAndStop(t, e, r), this.play()
                        }, AnimationItem.prototype.advanceTime = function(t) {
                            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                                var e = this.currentRawFrame + t * this.frameModifier,
                                    r = !1;
                                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                            }
                        }, AnimationItem.prototype.adjustSegment = function(t, e) {
                            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                        }, AnimationItem.prototype.setSegment = function(t, e) {
                            var r = -1;
                            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0)
                        }, AnimationItem.prototype.playSegments = function(t, e) {
                            if (e && (this.segments.length = 0), "object" === typeof t[0]) {
                                var r, i = t.length;
                                for (r = 0; r < i; r += 1) this.segments.push(t[r])
                            } else this.segments.push(t);
                            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                        }, AnimationItem.prototype.resetSegments = function(t) {
                            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                        }, AnimationItem.prototype.checkSegments = function(t) {
                            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                        }, AnimationItem.prototype.destroy = function(t) {
                            t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
                        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                            this.currentRawFrame = t, this.gotoFrame()
                        }, AnimationItem.prototype.setSpeed = function(t) {
                            this.playSpeed = t, this.updaFrameModifier()
                        }, AnimationItem.prototype.setDirection = function(t) {
                            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                        }, AnimationItem.prototype.updaFrameModifier = function() {
                            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
                        }, AnimationItem.prototype.getPath = function() {
                            return this.path
                        }, AnimationItem.prototype.getAssetsPath = function(t) {
                            var e = "";
                            if (t.e) e = t.p;
                            else if (this.assetsPath) {
                                var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
                            } else e = this.path, e += t.u ? t.u : "", e += t.p;
                            return e
                        }, AnimationItem.prototype.getAssetData = function(t) {
                            for (var e = 0, r = this.assets.length; e < r;) {
                                if (t == this.assets[e].id) return this.assets[e];
                                e += 1
                            }
                        }, AnimationItem.prototype.hide = function() {
                            this.renderer.hide()
                        }, AnimationItem.prototype.show = function() {
                            this.renderer.show()
                        }, AnimationItem.prototype.getDuration = function(t) {
                            return t ? this.totalFrames : this.totalFrames / this.frameRate
                        }, AnimationItem.prototype.trigger = function(t) {
                            if (this._cbs && this._cbs[t]) switch (t) {
                                case "enterFrame":
                                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                    break;
                                case "loopComplete":
                                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                                    break;
                                case "complete":
                                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                                    break;
                                case "segmentStart":
                                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                                    break;
                                case "destroy":
                                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                                    break;
                                default:
                                    this.triggerEvent(t)
                            }
                            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                        };
                        var Expressions = function() {
                            var t = {
                                initExpressions: function(t) {
                                    var e = 0,
                                        r = [];
                                    t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                                        e += 1
                                    }, t.renderer.globalData.popExpression = function() {
                                        0 === (e -= 1) && function() {
                                            var t, e = r.length;
                                            for (t = 0; t < e; t += 1) r[t].release();
                                            r.length = 0
                                        }()
                                    }, t.renderer.globalData.registerExpressionProperty = function(t) {
                                        -1 === r.indexOf(t) && r.push(t)
                                    }
                                }
                            };
                            return t
                        }();
                        expressionsPlugin = Expressions;
                        var ExpressionManager = function() {
                                var ob = {},
                                    Math = BMMath,
                                    easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                                function initiateExpression(elem, data, property) {
                                    var val = data.x,
                                        needsVelocity = /velocity(?![\w\d])/.test(val),
                                        _needsRandom = -1 !== val.indexOf("random"),
                                        elemType = elem.data.ty,
                                        transform, content, effect, thisProperty = property;
                                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                        get: function() {
                                            return thisProperty.v
                                        }
                                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                        width = elem.data.sw ? elem.data.sw : 0,
                                        height = elem.data.sh ? elem.data.sh : 0,
                                        name = elem.data.nm,
                                        loopIn, loopOut, smooth, toWorld, fromWorld, fromComp, toComp, anchorPoint, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                                        scoped_bm_rt;
                                    if (data.xf) {
                                        var i, len = data.xf.length;
                                        for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                                    }
                                    var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                        numKeys = property.kf ? data.k.length : 0,
                                        active = !this.data || !0 !== this.data.hd,
                                        wiggle = function(t, e) {
                                            var r, i, n = this.pv.length ? this.pv.length : 1,
                                                a = createTypedArray("float32", n),
                                                s = Math.floor(5 * time);
                                            for (r = 0, i = 0; r < s;) {
                                                for (i = 0; i < n; i += 1) a[i] += -e + 2 * e * BMMath.random();
                                                r += 1
                                            }
                                            var o = 5 * time,
                                                l = o - Math.floor(o),
                                                h = createTypedArray("float32", n);
                                            if (n > 1) {
                                                for (i = 0; i < n; i += 1) h[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * l;
                                                return h
                                            }
                                            return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                                        }.bind(this);
                                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty)), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty)), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                                    function seedRandom(t) {
                                        BMMath.seedrandom(randSeed + t)
                                    }
                                    var index = elem.data.ind,
                                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                        parent, randSeed = Math.floor(1e6 * Math.random()),
                                        globalData = elem.globalData;

                                    function executeExpression(t) {
                                        return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null), transform || (transform = elem.layerInterface("ADBE Transform Group")) && (anchorPoint = transform.anchorPoint), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                                    }
                                    return executeExpression
                                }
                                return ob.initiateExpression = initiateExpression, ob
                            }(),
                            expressionHelpers = {
                                searchExpressions: function(t, e, r) {
                                    e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                                },
                                getSpeedAtTime: function(t) {
                                    var e = this.getValueAtTime(t),
                                        r = this.getValueAtTime(t + -.01),
                                        i = 0;
                                    if (e.length) {
                                        var n;
                                        for (n = 0; n < e.length; n += 1) i += Math.pow(r[n] - e[n], 2);
                                        i = 100 * Math.sqrt(i)
                                    } else i = 0;
                                    return i
                                },
                                getVelocityAtTime: function(t) {
                                    if (void 0 !== this.vel) return this.vel;
                                    var e, r, i = this.getValueAtTime(t),
                                        n = this.getValueAtTime(t + -.001);
                                    if (i.length)
                                        for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (n[r] - i[r]) / -.001;
                                    else e = (n - i) / -.001;
                                    return e
                                },
                                getValueAtTime: function(t) {
                                    return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                                },
                                getStaticValueAtTime: function() {
                                    return this.pv
                                },
                                setGroupProperty: function(t) {
                                    this.propertyGroup = t
                                }
                            };
                        ! function() {
                            function t(t, e, r) {
                                if (!this.k || !this.keyframes) return this.pv;
                                t = t ? t.toLowerCase() : "";
                                var i, n, a, s, o, l = this.comp.renderedFrame,
                                    h = this.keyframes,
                                    p = h[h.length - 1].t;
                                if (l <= p) return this.pv;
                                if (r ? n = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = p - (n = h[h.length - 1 - e].t)), "pingpong" === t) {
                                    if (Math.floor((l - n) / i) % 2 !== 0) return this.getValueAtTime((i - (l - n) % i + n) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === t) {
                                        var c = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                            f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            u = this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0),
                                            m = Math.floor((l - n) / i);
                                        if (this.pv.length) {
                                            for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (f[a] - c[a]) * m + u[a];
                                            return o
                                        }
                                        return (f - c) * m + u
                                    }
                                    if ("continue" === t) {
                                        var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (s = (o = new Array(d.length)).length, a = 0; a < s; a += 1) o[a] = d[a] + (d[a] - y[a]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4;
                                            return o
                                        }
                                        return d + (l - p) / .001 * (d - y)
                                    }
                                }
                                return this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0)
                            }

                            function e(t, e, r) {
                                if (!this.k) return this.pv;
                                t = t ? t.toLowerCase() : "";
                                var i, n, a, s, o, l = this.comp.renderedFrame,
                                    h = this.keyframes,
                                    p = h[0].t;
                                if (l >= p) return this.pv;
                                if (r ? n = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = (n = h[e].t) - p), "pingpong" === t) {
                                    if (Math.floor((p - l) / i) % 2 === 0) return this.getValueAtTime(((p - l) % i + p) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === t) {
                                        var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            f = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                            u = this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0),
                                            m = Math.floor((p - l) / i) + 1;
                                        if (this.pv.length) {
                                            for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = u[a] - (f[a] - c[a]) * m;
                                            return o
                                        }
                                        return u - (f - c) * m
                                    }
                                    if ("continue" === t) {
                                        var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (s = (o = new Array(d.length)).length, a = 0; a < s; a += 1) o[a] = d[a] + (d[a] - y[a]) * (p - l) / .001;
                                            return o
                                        }
                                        return d + (d - y) * (p - l) / .001
                                    }
                                }
                                return this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0)
                            }

                            function r(t, e) {
                                if (!this.k) return this.pv;
                                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                                var r, i, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                                    a = n - t,
                                    s = e > 1 ? (n + t - a) / (e - 1) : 1,
                                    o = 0,
                                    l = 0;
                                for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                                    if (i = this.getValueAtTime(a + o * s), this.pv.length)
                                        for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
                                    else r += i;
                                    o += 1
                                }
                                if (this.pv.length)
                                    for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
                                else r /= e;
                                return r
                            }

                            function i(t) {
                                console.warn("Transform at time not supported")
                            }

                            function n(t) {}
                            var a = TransformPropertyFactory.getTransformProperty;
                            TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                                var s = a(t, e, r);
                                return s.dynamicProperties.length ? s.getValueAtTime = i.bind(s) : s.getValueAtTime = n.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
                            };
                            var s = PropertyFactory.getProp;
                            PropertyFactory.getProp = function(i, n, a, o, l) {
                                var h = s(i, n, a, o, l);
                                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === n.a ? n.k.length : 0, h.propertyIndex = n.ix;
                                var p = 0;
                                return 0 !== a && (p = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), h._cachingAtTime = {
                                    lastFrame: initialDefaultFrame,
                                    lastIndex: 0,
                                    value: p
                                }, expressionHelpers.searchExpressions(i, n, h), h.k && l.addDynamicProperty(h), h
                            };
                            var o = ShapePropertyFactory.getConstructorFunction(),
                                l = ShapePropertyFactory.getKeyframedConstructorFunction();

                            function h() {}
                            h.prototype = {
                                vertices: function(t, e) {
                                    this.k && this.getValue();
                                    var r = this.v;
                                    void 0 !== e && (r = this.getValueAtTime(e, 0));
                                    var i, n = r._length,
                                        a = r[t],
                                        s = r.v,
                                        o = createSizedArray(n);
                                    for (i = 0; i < n; i += 1) o[i] = "i" === t || "o" === t ? [a[i][0] - s[i][0], a[i][1] - s[i][1]] : [a[i][0], a[i][1]];
                                    return o
                                },
                                points: function(t) {
                                    return this.vertices("v", t)
                                },
                                inTangents: function(t) {
                                    return this.vertices("i", t)
                                },
                                outTangents: function(t) {
                                    return this.vertices("o", t)
                                },
                                isClosed: function() {
                                    return this.v.c
                                },
                                pointOnPath: function(t, e) {
                                    var r = this.v;
                                    void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                                    for (var i, n = this._segmentsLength, a = n.lengths, s = n.totalLength * t, o = 0, l = a.length, h = 0; o < l;) {
                                        if (h + a[o].addedLength > s) {
                                            var p = o,
                                                c = r.c && o === l - 1 ? 0 : o + 1,
                                                f = (s - h) / a[o].addedLength;
                                            i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], f, a[o]);
                                            break
                                        }
                                        h += a[o].addedLength, o += 1
                                    }
                                    return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
                                },
                                vectorOnPath: function(t, e, r) {
                                    t = 1 == t ? this.v.c ? 0 : .999 : t;
                                    var i = this.pointOnPath(t, e),
                                        n = this.pointOnPath(t + .001, e),
                                        a = n[0] - i[0],
                                        s = n[1] - i[1],
                                        o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
                                    return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
                                },
                                tangentOnPath: function(t, e) {
                                    return this.vectorOnPath(t, e, "tangent")
                                },
                                normalOnPath: function(t, e) {
                                    return this.vectorOnPath(t, e, "normal")
                                },
                                setGroupProperty: expressionHelpers.setGroupProperty,
                                getValueAtTime: expressionHelpers.getStaticValueAtTime
                            }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
                                return this._cachingAtTime || (this._cachingAtTime = {
                                    shapeValue: shape_pool.clone(this.pv),
                                    lastIndex: 0,
                                    lastTime: initialDefaultFrame
                                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                            }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                            var p = ShapePropertyFactory.getShapeProp;
                            ShapePropertyFactory.getShapeProp = function(t, e, r, i, n) {
                                var a = p(t, e, r, i, n);
                                return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
                            }
                        }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                            var r = this.calculateExpression(e);
                            if (t.t !== r) {
                                var i = {};
                                return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
                            }
                            return t
                        }, TextProperty.prototype.searchProperty = function() {
                            var t = this.searchKeyframes(),
                                e = this.searchExpressions();
                            return this.kf = t || e, this.kf
                        }, TextProperty.prototype.searchExpressions = function() {
                            if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
                        };
                        var ShapeExpressionInterface = function() {
                                function t(t, c, f) {
                                    var u, m = [],
                                        d = t ? t.length : 0;
                                    for (u = 0; u < d; u += 1) "gr" == t[u].ty ? m.push(e(t[u], c[u], f)) : "fl" == t[u].ty ? m.push(r(t[u], c[u], f)) : "st" == t[u].ty ? m.push(i(t[u], c[u], f)) : "tm" == t[u].ty ? m.push(n(t[u], c[u], f)) : "tr" == t[u].ty || ("el" == t[u].ty ? m.push(a(t[u], c[u], f)) : "sr" == t[u].ty ? m.push(s(t[u], c[u], f)) : "sh" == t[u].ty ? m.push(p(t[u], c[u], f)) : "rc" == t[u].ty ? m.push(o(t[u], c[u], f)) : "rd" == t[u].ty ? m.push(l(t[u], c[u], f)) : "rp" == t[u].ty && m.push(h(t[u], c[u], f)));
                                    return m
                                }

                                function e(e, r, i) {
                                    var n = function(t) {
                                        switch (t) {
                                            case "ADBE Vectors Group":
                                            case "Contents":
                                            case 2:
                                                return n.content;
                                            default:
                                                return n.transform
                                        }
                                    };
                                    n.propertyGroup = function(t) {
                                        return 1 === t ? n : i(t - 1)
                                    };
                                    var a = function(e, r, i) {
                                            var n, a = function(t) {
                                                for (var e = 0, r = n.length; e < r;) {
                                                    if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                                                    e += 1
                                                }
                                                if ("number" === typeof t) return n[t - 1]
                                            };
                                            return a.propertyGroup = function(t) {
                                                return 1 === t ? a : i(t - 1)
                                            }, n = t(e.it, r.it, a.propertyGroup), a.numProperties = n.length, a.propertyIndex = e.cix, a._name = e.nm, a
                                        }(e, r, n.propertyGroup),
                                        s = function(t, e, r) {
                                            function i(t) {
                                                return 1 == t ? n : r(--t)
                                            }

                                            function n(e) {
                                                return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : void 0
                                            }
                                            return e.transform.mProps.o.setGroupProperty(i), e.transform.mProps.p.setGroupProperty(i), e.transform.mProps.a.setGroupProperty(i), e.transform.mProps.s.setGroupProperty(i), e.transform.mProps.r.setGroupProperty(i), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(i), e.transform.mProps.sa.setGroupProperty(i)), e.transform.op.setGroupProperty(i), Object.defineProperties(n, {
                                                opacity: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.o)
                                                },
                                                position: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.p)
                                                },
                                                anchorPoint: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.a)
                                                },
                                                scale: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.s)
                                                },
                                                rotation: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.r)
                                                },
                                                skew: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                                },
                                                skewAxis: {
                                                    get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                                },
                                                _name: {
                                                    value: t.nm
                                                }
                                            }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = r, n
                                        }(e.it[e.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
                                    return n.content = a, n.transform = s, Object.defineProperty(n, "_name", {
                                        get: function() {
                                            return e.nm
                                        }
                                    }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
                                }

                                function r(t, e, r) {
                                    function i(t) {
                                        return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0
                                    }
                                    return Object.defineProperties(i, {
                                        color: {
                                            get: ExpressionPropertyInterface(e.c)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        _name: {
                                            value: t.nm
                                        },
                                        mn: {
                                            value: t.mn
                                        }
                                    }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), i
                                }

                                function i(t, e, r) {
                                    function i(t) {
                                        return 1 === t ? ob : r(t - 1)
                                    }

                                    function n(t) {
                                        return 1 === t ? l : i(t - 1)
                                    }

                                    function a(r) {
                                        Object.defineProperty(l, t.d[r].nm, {
                                            get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                                        })
                                    }
                                    var s, o = t.d ? t.d.length : 0,
                                        l = {};
                                    for (s = 0; s < o; s += 1) a(s), e.d.dataProps[s].p.setGroupProperty(n);

                                    function h(t) {
                                        return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : void 0
                                    }
                                    return Object.defineProperties(h, {
                                        color: {
                                            get: ExpressionPropertyInterface(e.c)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        strokeWidth: {
                                            get: ExpressionPropertyInterface(e.w)
                                        },
                                        dash: {
                                            get: function() {
                                                return l
                                            }
                                        },
                                        _name: {
                                            value: t.nm
                                        },
                                        mn: {
                                            value: t.mn
                                        }
                                    }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), h
                                }

                                function n(t, e, r) {
                                    function i(t) {
                                        return 1 == t ? n : r(--t)
                                    }

                                    function n(e) {
                                        return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : void 0
                                    }
                                    return n.propertyIndex = t.ix, e.s.setGroupProperty(i), e.e.setGroupProperty(i), e.o.setGroupProperty(i), n.propertyIndex = t.ix, n.propertyGroup = r, Object.defineProperties(n, {
                                        start: {
                                            get: ExpressionPropertyInterface(e.s)
                                        },
                                        end: {
                                            get: ExpressionPropertyInterface(e.e)
                                        },
                                        offset: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), n.mn = t.mn, n
                                }

                                function a(t, e, r) {
                                    function i(t) {
                                        return 1 == t ? a : r(--t)
                                    }
                                    a.propertyIndex = t.ix;
                                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                                    function a(e) {
                                        return t.p.ix === e ? a.position : t.s.ix === e ? a.size : void 0
                                    }
                                    return n.s.setGroupProperty(i), n.p.setGroupProperty(i), Object.defineProperties(a, {
                                        size: {
                                            get: ExpressionPropertyInterface(n.s)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(n.p)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), a.mn = t.mn, a
                                }

                                function s(t, e, r) {
                                    function i(t) {
                                        return 1 == t ? a : r(--t)
                                    }
                                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                                    function a(e) {
                                        return t.p.ix === e ? a.position : t.r.ix === e ? a.rotation : t.pt.ix === e ? a.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? a.outerRadius : t.os.ix === e ? a.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? a.innerRoundness : void 0 : a.innerRadius
                                    }
                                    return a.propertyIndex = t.ix, n.or.setGroupProperty(i), n.os.setGroupProperty(i), n.pt.setGroupProperty(i), n.p.setGroupProperty(i), n.r.setGroupProperty(i), t.ir && (n.ir.setGroupProperty(i), n.is.setGroupProperty(i)), Object.defineProperties(a, {
                                        position: {
                                            get: ExpressionPropertyInterface(n.p)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(n.r)
                                        },
                                        points: {
                                            get: ExpressionPropertyInterface(n.pt)
                                        },
                                        outerRadius: {
                                            get: ExpressionPropertyInterface(n.or)
                                        },
                                        outerRoundness: {
                                            get: ExpressionPropertyInterface(n.os)
                                        },
                                        innerRadius: {
                                            get: ExpressionPropertyInterface(n.ir)
                                        },
                                        innerRoundness: {
                                            get: ExpressionPropertyInterface(n.is)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), a.mn = t.mn, a
                                }

                                function o(t, e, r) {
                                    function i(t) {
                                        return 1 == t ? a : r(--t)
                                    }
                                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                                    function a(e) {
                                        return t.p.ix === e ? a.position : t.r.ix === e ? a.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? a.size : void 0
                                    }
                                    return a.propertyIndex = t.ix, n.p.setGroupProperty(i), n.s.setGroupProperty(i), n.r.setGroupProperty(i), Object.defineProperties(a, {
                                        position: {
                                            get: ExpressionPropertyInterface(n.p)
                                        },
                                        roundness: {
                                            get: ExpressionPropertyInterface(n.r)
                                        },
                                        size: {
                                            get: ExpressionPropertyInterface(n.s)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), a.mn = t.mn, a
                                }

                                function l(t, e, r) {
                                    var i = e;

                                    function n(e) {
                                        if (t.r.ix === e || "Round Corners 1" === e) return n.radius
                                    }
                                    return n.propertyIndex = t.ix, i.rd.setGroupProperty((function(t) {
                                        return 1 == t ? n : r(--t)
                                    })), Object.defineProperties(n, {
                                        radius: {
                                            get: ExpressionPropertyInterface(i.rd)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), n.mn = t.mn, n
                                }

                                function h(t, e, r) {
                                    function i(t) {
                                        return 1 == t ? a : r(--t)
                                    }
                                    var n = e;

                                    function a(e) {
                                        return t.c.ix === e || "Copies" === e ? a.copies : t.o.ix === e || "Offset" === e ? a.offset : void 0
                                    }
                                    return a.propertyIndex = t.ix, n.c.setGroupProperty(i), n.o.setGroupProperty(i), Object.defineProperties(a, {
                                        copies: {
                                            get: ExpressionPropertyInterface(n.c)
                                        },
                                        offset: {
                                            get: ExpressionPropertyInterface(n.o)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), a.mn = t.mn, a
                                }

                                function p(t, e, r) {
                                    var i = e.sh;

                                    function n(t) {
                                        if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return n.path
                                    }
                                    return i.setGroupProperty((function(t) {
                                        return 1 == t ? n : r(--t)
                                    })), Object.defineProperties(n, {
                                        path: {
                                            get: function() {
                                                return i.k && i.getValue(), i
                                            }
                                        },
                                        shape: {
                                            get: function() {
                                                return i.k && i.getValue(), i
                                            }
                                        },
                                        _name: {
                                            value: t.nm
                                        },
                                        ix: {
                                            value: t.ix
                                        },
                                        propertyIndex: {
                                            value: t.ix
                                        },
                                        mn: {
                                            value: t.mn
                                        }
                                    }), n
                                }
                                return function(e, r, i) {
                                    var n;

                                    function a(t) {
                                        if ("number" === typeof t) return n[t - 1];
                                        for (var e = 0, r = n.length; e < r;) {
                                            if (n[e]._name === t) return n[e];
                                            e += 1
                                        }
                                    }
                                    return a.propertyGroup = i, n = t(e, r, a), a.numProperties = n.length, a
                                }
                            }(),
                            TextExpressionInterface = function(t) {
                                var e;

                                function r() {}
                                return Object.defineProperty(r, "sourceText", {
                                    get: function() {
                                        t.textProperty.getValue();
                                        var r = t.textProperty.currentData.t;
                                        return void 0 !== r && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), e
                                    }
                                }), r
                            },
                            LayerExpressionInterface = function() {
                                function t(t, e) {
                                    var r = new Matrix;
                                    if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var i, n = this._elem.hierarchy.length;
                                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                                        return r.applyToPointArray(t[0], t[1], t[2] || 0)
                                    }
                                    return r.applyToPointArray(t[0], t[1], t[2] || 0)
                                }

                                function e(t, e) {
                                    var r = new Matrix;
                                    if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var i, n = this._elem.hierarchy.length;
                                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                                        return r.inversePoint(t)
                                    }
                                    return r.inversePoint(t)
                                }

                                function r(t) {
                                    var e = new Matrix;
                                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var r, i = this._elem.hierarchy.length;
                                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                                        return e.inversePoint(t)
                                    }
                                    return e.inversePoint(t)
                                }

                                function i() {
                                    return [1, 1, 1, 1]
                                }
                                return function(n) {
                                    var a;

                                    function s(t) {
                                        switch (t) {
                                            case "ADBE Root Vectors Group":
                                            case "Contents":
                                            case 2:
                                                return s.shapeInterface;
                                            case 1:
                                            case 6:
                                            case "Transform":
                                            case "transform":
                                            case "ADBE Transform Group":
                                                return a;
                                            case 4:
                                            case "ADBE Effect Parade":
                                            case "effects":
                                            case "Effects":
                                                return s.effect
                                        }
                                    }
                                    s.toWorld = t, s.fromWorld = e, s.toComp = t, s.fromComp = r, s.sampleImage = i, s.sourceRectAtTime = n.sourceRectAtTime.bind(n), s._elem = n;
                                    var o = getDescriptor(a = TransformExpressionInterface(n.finalTransform.mProp), "anchorPoint");
                                    return Object.defineProperties(s, {
                                        hasParent: {
                                            get: function() {
                                                return n.hierarchy.length
                                            }
                                        },
                                        parent: {
                                            get: function() {
                                                return n.hierarchy[0].layerInterface
                                            }
                                        },
                                        rotation: getDescriptor(a, "rotation"),
                                        scale: getDescriptor(a, "scale"),
                                        position: getDescriptor(a, "position"),
                                        opacity: getDescriptor(a, "opacity"),
                                        anchorPoint: o,
                                        anchor_point: o,
                                        transform: {
                                            get: function() {
                                                return a
                                            }
                                        },
                                        active: {
                                            get: function() {
                                                return n.isInRange
                                            }
                                        }
                                    }), s.startTime = n.data.st, s.index = n.data.ind, s.source = n.data.refId, s.height = 0 === n.data.ty ? n.data.h : 100, s.width = 0 === n.data.ty ? n.data.w : 100, s.inPoint = n.data.ip / n.comp.globalData.frameRate, s.outPoint = n.data.op / n.comp.globalData.frameRate, s._name = n.data.nm, s.registerMaskInterface = function(t) {
                                        s.mask = new MaskManagerInterface(t, n)
                                    }, s.registerEffectsInterface = function(t) {
                                        s.effect = t
                                    }, s
                                }
                            }(),
                            CompExpressionInterface = function(t) {
                                function e(e) {
                                    for (var r = 0, i = t.layers.length; r < i;) {
                                        if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                                        r += 1
                                    }
                                    return null
                                }
                                return Object.defineProperty(e, "_name", {
                                    value: t.data.nm
                                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                            },
                            TransformExpressionInterface = function(t) {
                                function e(t) {
                                    switch (t) {
                                        case "scale":
                                        case "Scale":
                                        case "ADBE Scale":
                                        case 6:
                                            return e.scale;
                                        case "rotation":
                                        case "Rotation":
                                        case "ADBE Rotation":
                                        case "ADBE Rotate Z":
                                        case 10:
                                            return e.rotation;
                                        case "ADBE Rotate X":
                                            return e.xRotation;
                                        case "ADBE Rotate Y":
                                            return e.yRotation;
                                        case "position":
                                        case "Position":
                                        case "ADBE Position":
                                        case 2:
                                            return e.position;
                                        case "ADBE Position_0":
                                            return e.xPosition;
                                        case "ADBE Position_1":
                                            return e.yPosition;
                                        case "ADBE Position_2":
                                            return e.zPosition;
                                        case "anchorPoint":
                                        case "AnchorPoint":
                                        case "Anchor Point":
                                        case "ADBE AnchorPoint":
                                        case 1:
                                            return e.anchorPoint;
                                        case "opacity":
                                        case "Opacity":
                                        case 11:
                                            return e.opacity
                                    }
                                }
                                if (Object.defineProperty(e, "rotation", {
                                        get: ExpressionPropertyInterface(t.r || t.rz)
                                    }), Object.defineProperty(e, "zRotation", {
                                        get: ExpressionPropertyInterface(t.rz || t.r)
                                    }), Object.defineProperty(e, "xRotation", {
                                        get: ExpressionPropertyInterface(t.rx)
                                    }), Object.defineProperty(e, "yRotation", {
                                        get: ExpressionPropertyInterface(t.ry)
                                    }), Object.defineProperty(e, "scale", {
                                        get: ExpressionPropertyInterface(t.s)
                                    }), t.p) var r = ExpressionPropertyInterface(t.p);
                                return Object.defineProperty(e, "position", {
                                    get: function() {
                                        return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
                                    }
                                }), Object.defineProperty(e, "xPosition", {
                                    get: ExpressionPropertyInterface(t.px)
                                }), Object.defineProperty(e, "yPosition", {
                                    get: ExpressionPropertyInterface(t.py)
                                }), Object.defineProperty(e, "zPosition", {
                                    get: ExpressionPropertyInterface(t.pz)
                                }), Object.defineProperty(e, "anchorPoint", {
                                    get: ExpressionPropertyInterface(t.a)
                                }), Object.defineProperty(e, "opacity", {
                                    get: ExpressionPropertyInterface(t.o)
                                }), Object.defineProperty(e, "skew", {
                                    get: ExpressionPropertyInterface(t.sk)
                                }), Object.defineProperty(e, "skewAxis", {
                                    get: ExpressionPropertyInterface(t.sa)
                                }), Object.defineProperty(e, "orientation", {
                                    get: ExpressionPropertyInterface(t.or)
                                }), e
                            },
                            ProjectInterface = function() {
                                function t(t) {
                                    this.compositions.push(t)
                                }
                                return function() {
                                    function e(t) {
                                        for (var e = 0, r = this.compositions.length; e < r;) {
                                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                            e += 1
                                        }
                                    }
                                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                                }
                            }(),
                            EffectsExpressionInterface = function() {
                                function t(r, i, n, a) {
                                    var s, o = [],
                                        l = r.ef.length;
                                    for (s = 0; s < l; s += 1) 5 === r.ef[s].ty ? o.push(t(r.ef[s], i.effectElements[s], i.effectElements[s].propertyGroup, a)) : o.push(e(i.effectElements[s], r.ef[s].ty, a, h));

                                    function h(t) {
                                        return 1 === t ? p : n(t - 1)
                                    }
                                    var p = function(t) {
                                        for (var e = r.ef, i = 0, n = e.length; i < n;) {
                                            if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? o[i] : o[i]();
                                            i += 1
                                        }
                                        return o[0]()
                                    };
                                    return p.propertyGroup = h, "ADBE Color Control" === r.mn && Object.defineProperty(p, "color", {
                                        get: function() {
                                            return o[0]()
                                        }
                                    }), Object.defineProperty(p, "numProperties", {
                                        get: function() {
                                            return r.np
                                        }
                                    }), p.active = p.enabled = 0 !== r.en, p
                                }

                                function e(t, e, r, i) {
                                    var n = ExpressionPropertyInterface(t.p);
                                    return t.p.setGroupProperty && t.p.setGroupProperty(i),
                                        function() {
                                            return 10 === e ? r.comp.compInterface(t.p.v) : n()
                                        }
                                }
                                return {
                                    createEffectsInterface: function(e, r) {
                                        if (e.effectsManager) {
                                            var i, n = [],
                                                a = e.data.ef,
                                                s = e.effectsManager.effectElements.length;
                                            for (i = 0; i < s; i += 1) n.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                                            return function(t) {
                                                for (var r = e.data.ef || [], i = 0, a = r.length; i < a;) {
                                                    if (t === r[i].nm || t === r[i].mn || t === r[i].ix) return n[i];
                                                    i += 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }(),
                            MaskManagerInterface = function() {
                                function t(t, e) {
                                    this._mask = t, this._data = e
                                }
                                return Object.defineProperty(t.prototype, "maskPath", {
                                        get: function() {
                                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                        }
                                    }), Object.defineProperty(t.prototype, "maskOpacity", {
                                        get: function() {
                                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                        }
                                    }),
                                    function(e, r) {
                                        var i, n = createSizedArray(e.viewData.length),
                                            a = e.viewData.length;
                                        for (i = 0; i < a; i += 1) n[i] = new t(e.viewData[i], e.masksProperties[i]);
                                        return function(t) {
                                            for (i = 0; i < a;) {
                                                if (e.masksProperties[i].nm === t) return n[i];
                                                i += 1
                                            }
                                        }
                                    }
                            }(),
                            ExpressionPropertyInterface = function() {
                                var t = {
                                        pv: 0,
                                        v: 0,
                                        mult: 1
                                    },
                                    e = {
                                        pv: [0, 0, 0],
                                        v: [0, 0, 0],
                                        mult: 1
                                    };

                                function r(t, e, r) {
                                    Object.defineProperty(t, "velocity", {
                                        get: function() {
                                            return e.getVelocityAtTime(e.comp.currentFrame)
                                        }
                                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                                        if (t.numKeys) {
                                            var n = "";
                                            n = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                                            var a = "unidimensional" === r ? new Number(n) : Object.assign({}, n);
                                            return a.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, a
                                        }
                                        return 0
                                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                                }

                                function i() {
                                    return t
                                }
                                return function(n) {
                                    return n ? "unidimensional" === n.propType ? function(e) {
                                        e && "pv" in e || (e = t);
                                        var i = 1 / e.mult,
                                            n = e.pv * i,
                                            a = new Number(n);
                                        return a.value = n, r(a, e, "unidimensional"),
                                            function() {
                                                return e.k && e.getValue(), n = e.v * i, a.value !== n && ((a = new Number(n)).value = n, r(a, e, "unidimensional")), a
                                            }
                                    }(n) : function(t) {
                                        t && "pv" in t || (t = e);
                                        var i = 1 / t.mult,
                                            n = t.pv.length,
                                            a = createTypedArray("float32", n),
                                            s = createTypedArray("float32", n);
                                        return a.value = s, r(a, t, "multidimensional"),
                                            function() {
                                                t.k && t.getValue();
                                                for (var e = 0; e < n; e += 1) a[e] = s[e] = t.v[e] * i;
                                                return a
                                            }
                                    }(n) : i
                                }
                            }();

                        function SliderEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function AngleEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function ColorEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                        }

                        function PointEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                        }

                        function LayerIndexEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function MaskIndexEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function CheckboxEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function NoValueEffect() {
                            this.p = {}
                        }

                        function EffectsManager() {}

                        function EffectsManager(t, e) {
                            var r = t.ef || [];
                            this.effectElements = [];
                            var i, n, a = r.length;
                            for (i = 0; i < a; i++) n = new GroupEffect(r[i], e), this.effectElements.push(n)
                        }

                        function GroupEffect(t, e) {
                            this.init(t, e)
                        }! function() {
                            var t = function() {
                                    function t(t, e) {
                                        return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                                    }
                                    return function(e, r) {
                                        this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                                    }
                                }(),
                                e = TextSelectorProp.getTextSelectorProp;
                            TextSelectorProp.getTextSelectorProp = function(r, i, n) {
                                return 1 === i.t ? new t(r, i, n) : e(r, i, n)
                            }
                        }(), extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                            var r, i, n = this.data.ef.length,
                                a = this.data.ef;
                            for (r = 0; r < n; r += 1) {
                                switch (i = null, a[r].ty) {
                                    case 0:
                                        i = new SliderEffect(a[r], e, this);
                                        break;
                                    case 1:
                                        i = new AngleEffect(a[r], e, this);
                                        break;
                                    case 2:
                                        i = new ColorEffect(a[r], e, this);
                                        break;
                                    case 3:
                                        i = new PointEffect(a[r], e, this);
                                        break;
                                    case 4:
                                    case 7:
                                        i = new CheckboxEffect(a[r], e, this);
                                        break;
                                    case 10:
                                        i = new LayerIndexEffect(a[r], e, this);
                                        break;
                                    case 11:
                                        i = new MaskIndexEffect(a[r], e, this);
                                        break;
                                    case 5:
                                        i = new EffectsManager(a[r], e, this);
                                        break;
                                    default:
                                        i = new NoValueEffect(a[r], e, this)
                                }
                                i && this.effectElements.push(i)
                            }
                        };
                        var lottiejs = {};

                        function setLocationHref(t) {
                            locationHref = t
                        }

                        function searchAnimations() {
                            animationManager.searchAnimations()
                        }

                        function setSubframeRendering(t) {
                            subframeEnabled = t
                        }

                        function loadAnimation(t) {
                            return animationManager.loadAnimation(t)
                        }

                        function setQuality(t) {
                            if ("string" === typeof t) switch (t) {
                                case "high":
                                    defaultCurveSegments = 200;
                                    break;
                                case "medium":
                                    defaultCurveSegments = 50;
                                    break;
                                case "low":
                                    defaultCurveSegments = 10
                            } else !isNaN(t) && t > 1 && (defaultCurveSegments = t)
                        }

                        function inBrowser() {
                            return "undefined" !== typeof navigator
                        }

                        function installPlugin(t, e) {
                            "expressions" === t && (expressionsPlugin = e)
                        }

                        function getFactory(t) {
                            switch (t) {
                                case "propertyFactory":
                                    return PropertyFactory;
                                case "shapePropertyFactory":
                                    return ShapePropertyFactory;
                                case "matrix":
                                    return Matrix
                            }
                        }

                        function checkReady() {
                            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                        }

                        function getQueryVariable(t) {
                            for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
                                var i = e[r].split("=");
                                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                            }
                        }
                        lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.7";
                        var renderer = "",
                            scripts = document.getElementsByTagName("script"),
                            index = scripts.length - 1,
                            myScript = scripts[index] || {
                                src: ""
                            },
                            queryString = myScript.src.replace(/^[^\?]+\??/, "");
                        renderer = getQueryVariable("renderer");
                        var readyStateCheckInterval = setInterval(checkReady, 100);
                        return lottiejs
                    }, module.exports ? module.exports = factory(root) : (root.lottie = factory(root), root.bodymovin = root.lottie))
                })),
                data = {
                    v: "5.4.1",
                    fr: 29.9700012207031,
                    ip: 0,
                    op: 75.0000030548126,
                    w: 1280,
                    h: 800,
                    nm: "Confetti",
                    ddd: 0,
                    assets: [{
                        id: "comp_0",
                        layers: [{
                            ddd: 0,
                            ind: 1,
                            ty: 4,
                            nm: "elems Outlines",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 0,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [648, 408, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [55, 55, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            v: [
                                                [0, -56.517],
                                                [65.259, 56.517],
                                                [-65.26, 56.517]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833],
                                                y: [.833]
                                            },
                                            o: {
                                                x: [.167],
                                                y: [.167]
                                            },
                                            n: ["0p833_0p833_0p167_0p167"],
                                            t: 0,
                                            s: [.96862745098, .423529411765, .533333333333, 1],
                                            e: [.701960802078, .070588238537, .090196080506, 1]
                                        }, {
                                            t: 45.0000018328876
                                        }],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [285.686, 74.119],
                                            to: [-57.8834648132324, -52.8268241882324],
                                            ti: [57.8834648132324, 52.8268241882324]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 18],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 2,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-78.593, 0],
                                                [.001, -78.593],
                                                [78.594, 0],
                                                [.001, 78.593]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833],
                                                y: [.833]
                                            },
                                            o: {
                                                x: [.167],
                                                y: [.167]
                                            },
                                            n: ["0p833_0p833_0p167_0p167"],
                                            t: 0,
                                            s: [.643137276173, .35686275363, .945098042488, 1],
                                            e: [.61960786581, .243137255311, .996078431606, 1]
                                        }, {
                                            t: 45.0000018328876
                                        }],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [629.686, 746.119],
                                            to: [-.55013018846512, 59.1731758117676],
                                            ti: [.55013018846512, -59.1731758117676]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 3",
                                np: 2,
                                cix: 2,
                                ix: 2,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            v: [
                                                [24.5, -23.5],
                                                [24.5, -81.5],
                                                [-23.5, -81.5],
                                                [-23.5, -23.5],
                                                [-81.5, -23.5],
                                                [-81.5, 23.5],
                                                [-23.5, 23.5],
                                                [-23.5, 81.5],
                                                [24.5, 81.5],
                                                [24.5, 23.5],
                                                [81.5, 23.5],
                                                [81.5, -23.5]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833],
                                                y: [.833]
                                            },
                                            o: {
                                                x: [.167],
                                                y: [.167]
                                            },
                                            n: ["0p833_0p833_0p167_0p167"],
                                            t: 0,
                                            s: [.960784313725, .96862745098, .439215686275, 1],
                                            e: [.96928614378, .919638156891, .541258990765, 1]
                                        }, {
                                            t: 45.0000018328876
                                        }],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [1013.686, 133.119],
                                            to: [63.4498710632324, -42.9934883117676],
                                            ti: [-63.4498710632324, 42.9934883117676]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 5",
                                np: 2,
                                cix: 2,
                                ix: 3,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [-43.406, 0],
                                                [0, -43.406],
                                                [43.406, 0],
                                                [0, 43.406]
                                            ],
                                            o: [
                                                [43.406, 0],
                                                [0, 43.406],
                                                [-43.406, 0],
                                                [0, -43.406]
                                            ],
                                            v: [
                                                [0, -78.593],
                                                [78.593, 0],
                                                [0, 78.593],
                                                [-78.593, 0]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833],
                                                y: [.833]
                                            },
                                            o: {
                                                x: [.167],
                                                y: [.167]
                                            },
                                            n: ["0p833_0p833_0p167_0p167"],
                                            t: 0,
                                            s: [.145098039216, .776470588235, .964705882353, 1],
                                            e: [.196078434587, .745098054409, .996078431606, 1]
                                        }, {
                                            t: 45.0000018328876
                                        }],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [137.686, 622.119],
                                            to: [-82.5501327514648, 38.5065116882324],
                                            ti: [82.5501327514648, -38.5065116882324]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 7",
                                np: 2,
                                cix: 2,
                                ix: 4,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 2,
                            ty: 4,
                            nm: "elems greys",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 50,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 0,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [653, 411, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [55, 55, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            v: [
                                                [0, -56.517],
                                                [65.259, 56.517],
                                                [-65.26, 56.517]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.903109669685, .903109669685, .903109669685, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [277.686, 123.119],
                                            to: [-59.216796875, -44.66015625],
                                            ti: [59.216796875, 44.66015625]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 18],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 2,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-78.593, 0],
                                                [.001, -78.593],
                                                [78.594, 0],
                                                [.001, 78.593]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [648.686, 706.119],
                                            to: [2.61653637886047, 52.5065116882324],
                                            ti: [-2.61653637886047, -52.5065116882324]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 3",
                                np: 2,
                                cix: 2,
                                ix: 2,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                                [0, 0]
                                            ],
                                            v: [
                                                [24.5, -23.5],
                                                [24.5, -81.5],
                                                [-23.5, -81.5],
                                                [-23.5, -23.5],
                                                [-81.5, -23.5],
                                                [-81.5, 23.5],
                                                [-23.5, 23.5],
                                                [-23.5, 81.5],
                                                [24.5, 81.5],
                                                [24.5, 23.5],
                                                [81.5, 23.5],
                                                [81.5, -23.5]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [992.686, 193.119],
                                            to: [59.9498710632324, -32.9934883117676],
                                            ti: [-59.9498710632324, 32.9934883117676]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 5",
                                np: 2,
                                cix: 2,
                                ix: 3,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [-43.406, 0],
                                                [0, -43.406],
                                                [43.406, 0],
                                                [0, 43.406]
                                            ],
                                            o: [
                                                [43.406, 0],
                                                [0, 43.406],
                                                [-43.406, 0],
                                                [0, -43.406]
                                            ],
                                            v: [
                                                [0, -78.593],
                                                [78.593, 0],
                                                [0, 78.593],
                                                [-78.593, 0]
                                            ],
                                            c: !0
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 25,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: .196,
                                                y: 1
                                            },
                                            o: {
                                                x: 0,
                                                y: 0
                                            },
                                            n: "0p196_1_0_0",
                                            t: 0,
                                            s: [632.987, 391.08],
                                            e: [171.686, 618.119],
                                            to: [-76.8834609985352, 37.83984375],
                                            ti: [76.8834609985352, -37.83984375]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.833, .833],
                                                y: [.833, .833]
                                            },
                                            o: {
                                                x: [1, 1],
                                                y: [0, 0]
                                            },
                                            n: ["0p833_0p833_1_0", "0p833_0p833_1_0"],
                                            t: 0,
                                            s: [33.246, 33.246],
                                            e: [0, 0]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 3
                                    },
                                    r: {
                                        a: 1,
                                        k: [{
                                            i: {
                                                x: [.529],
                                                y: [1]
                                            },
                                            o: {
                                                x: [.054],
                                                y: [.039]
                                            },
                                            n: ["0p529_1_0p054_0p039"],
                                            t: 0,
                                            s: [0],
                                            e: [720]
                                        }, {
                                            t: 60.0000024438501
                                        }],
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 7",
                                np: 2,
                                cix: 2,
                                ix: 4,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }]
                    }, {
                        id: "comp_1",
                        layers: [{
                            ddd: 0,
                            ind: 1,
                            ty: 4,
                            nm: "twiggle Outlines 10",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 20,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 399, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [545, 457, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 50,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 25,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 12,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 2,
                            ty: 4,
                            nm: "twiggle Outlines 9",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 308,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 399, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [545, 457, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 50,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 25,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 12,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 3,
                            ty: 4,
                            nm: "twiggle Outlines 8",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 236,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 399, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [545, 457, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 50,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 25,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 12,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 4,
                            ty: 4,
                            nm: "twiggle Outlines 7",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 164,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 399, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [545, 457, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 50,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 25,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 12,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 5,
                            ty: 4,
                            nm: "twiggle Outlines 6",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 92,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 399, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [545, 457, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.901960790157, .901960790157, .901960790157, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 50,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 25,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 12,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 38.0000015477717
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 6,
                            ty: 4,
                            nm: "twiggle Outlines 5",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 360,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.96862745285, .423529416323, .533333361149, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 13,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 0,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 7,
                            ty: 4,
                            nm: "twiggle Outlines 4",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 288,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.643137276173, .35686275363, .945098042488, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 13,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 0,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 8,
                            ty: 4,
                            nm: "twiggle Outlines 3",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 216,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.447058826685, .96862745285, .32549020648, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 13,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 0,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 9,
                            ty: 4,
                            nm: "twiggle Outlines 2",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 144,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.145098039216, .776470588235, .964705882353, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 13,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 0,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }, {
                            ddd: 0,
                            ind: 10,
                            ty: 4,
                            nm: "twiggle Outlines",
                            sr: 1,
                            ks: {
                                o: {
                                    a: 0,
                                    k: 100,
                                    ix: 11
                                },
                                r: {
                                    a: 0,
                                    k: 72,
                                    ix: 10
                                },
                                p: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 2
                                },
                                a: {
                                    a: 0,
                                    k: [640, 400, 0],
                                    ix: 1
                                },
                                s: {
                                    a: 0,
                                    k: [74.124, 74.124, 100],
                                    ix: 6
                                }
                            },
                            ao: 0,
                            shapes: [{
                                ty: "gr",
                                it: [{
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [0, 0],
                                                [-54.167, -22.916],
                                                [-31.25, 25],
                                                [-17.709, 23.959],
                                                [-17.709, 37.5],
                                                [0, 0]
                                            ],
                                            o: [
                                                [0, 0],
                                                [54.166, 22.917],
                                                [31.25, -25],
                                                [17.708, -23.958],
                                                [17.708, -37.5],
                                                [0, 0]
                                            ],
                                            v: [
                                                [-141.771, 120.599],
                                                [-86.354, 90.057],
                                                [-33.229, 21.307],
                                                [48.021, -3.693],
                                                [60.281, -83.099],
                                                [141.771, -118.996]
                                            ],
                                            c: !1
                                        },
                                        ix: 2
                                    },
                                    nm: "Path 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: !1
                                }, {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [.960784316063, .96862745285, .439215689898, 1],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 8,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 10,
                                    ml2: {
                                        a: 0,
                                        k: 10,
                                        ix: 8
                                    },
                                    nm: "Stroke 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: !1
                                }, {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [1, 1, 1, 1],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    nm: "Fill 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: !1
                                }, {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [788.771, 279.401],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [0, 0],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [100, 100],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transform"
                                }],
                                nm: "Group 1",
                                np: 3,
                                cix: 2,
                                ix: 1,
                                mn: "ADBE Vector Group",
                                hd: !1
                            }, {
                                ty: "tm",
                                s: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 13,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 1
                                },
                                e: {
                                    a: 1,
                                    k: [{
                                        i: {
                                            x: [.833],
                                            y: [.833]
                                        },
                                        o: {
                                            x: [.167],
                                            y: [.167]
                                        },
                                        n: ["0p833_0p833_0p167_0p167"],
                                        t: 0,
                                        s: [0],
                                        e: [100]
                                    }, {
                                        t: 30.0000012219251
                                    }],
                                    ix: 2
                                },
                                o: {
                                    a: 0,
                                    k: 0,
                                    ix: 3
                                },
                                m: 1,
                                ix: 2,
                                nm: "Trim Paths 1",
                                mn: "ADBE Vector Filter - Trim",
                                hd: !1
                            }],
                            ip: 0,
                            op: 300.00001221925,
                            st: 0,
                            bm: 0
                        }]
                    }],
                    layers: [{
                        ddd: 0,
                        ind: 2,
                        ty: 0,
                        nm: "layer 1",
                        refId: "comp_0",
                        sr: 1,
                        ks: {
                            o: {
                                a: 0,
                                k: 100,
                                ix: 11
                            },
                            r: {
                                a: 0,
                                k: 0,
                                ix: 10
                            },
                            p: {
                                a: 0,
                                k: [660, 420, 0],
                                ix: 2
                            },
                            a: {
                                a: 0,
                                k: [640, 400, 0],
                                ix: 1
                            },
                            s: {
                                a: 0,
                                k: [67.505, 67.505, 100],
                                ix: 6
                            }
                        },
                        ao: 0,
                        w: 1280,
                        h: 800,
                        ip: 0,
                        op: 300.00001221925,
                        st: 0,
                        bm: 0
                    }, {
                        ddd: 0,
                        ind: 3,
                        ty: 0,
                        nm: "layer 1",
                        refId: "comp_0",
                        sr: 1,
                        ks: {
                            o: {
                                a: 0,
                                k: 100,
                                ix: 11
                            },
                            r: {
                                a: 0,
                                k: 215,
                                ix: 10
                            },
                            p: {
                                a: 0,
                                k: [660, 420, 0],
                                ix: 2
                            },
                            a: {
                                a: 0,
                                k: [640, 400, 0],
                                ix: 1
                            },
                            s: {
                                a: 0,
                                k: [67.505, 67.505, 100],
                                ix: 6
                            }
                        },
                        ao: 0,
                        w: 1280,
                        h: 800,
                        ip: 4.00000016292334,
                        op: 304.000012382174,
                        st: 4.00000016292334,
                        bm: 0
                    }, {
                        ddd: 0,
                        ind: 4,
                        ty: 0,
                        nm: "layer 1",
                        refId: "comp_0",
                        sr: 1,
                        ks: {
                            o: {
                                a: 0,
                                k: 100,
                                ix: 11
                            },
                            r: {
                                a: 0,
                                k: 58,
                                ix: 10
                            },
                            p: {
                                a: 0,
                                k: [660, 420, 0],
                                ix: 2
                            },
                            a: {
                                a: 0,
                                k: [640, 400, 0],
                                ix: 1
                            },
                            s: {
                                a: 0,
                                k: [82.5, 82.5, 100],
                                ix: 6
                            }
                        },
                        ao: 0,
                        w: 1280,
                        h: 800,
                        ip: 9.00000036657752,
                        op: 309.000012585828,
                        st: 9.00000036657752,
                        bm: 0
                    }, {
                        ddd: 0,
                        ind: 6,
                        ty: 0,
                        nm: "Twiggles",
                        refId: "comp_1",
                        sr: 1,
                        ks: {
                            o: {
                                a: 0,
                                k: 100,
                                ix: 11
                            },
                            r: {
                                a: 0,
                                k: 0,
                                ix: 10
                            },
                            p: {
                                a: 0,
                                k: [660, 420, 0],
                                ix: 2
                            },
                            a: {
                                a: 0,
                                k: [640, 400, 0],
                                ix: 1
                            },
                            s: {
                                a: 0,
                                k: [67.505, 67.505, 100],
                                ix: 6
                            }
                        },
                        ao: 0,
                        w: 1280,
                        h: 800,
                        ip: 6.00000024438501,
                        op: 306.000012463636,
                        st: 6.00000024438501,
                        bm: 0
                    }],
                    markers: []
                };

            function styleInject(t, e) {
                void 0 === e && (e = {});
                var r = e.insertAt;
                if (t && "undefined" !== typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        n = document.createElement("style");
                    n.type = "text/css", "top" === r && i.firstChild ? i.insertBefore(n, i.firstChild) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t))
                }
            }
            var css$1 = ".absolute-player {\n    width: 800px!important;\n    position: absolute;\n    bottom: 0;\n    height: 800px!important;\n    transform: translate3d(-413px, 409px, 10px) !important;\n}";
            styleInject(css$1);
            var memphis = function(t) {
                    lottie.loadAnimation({
                        container: t,
                        renderer: "svg",
                        rendererSettings: {
                            className: "absolute-player"
                        },
                        loop: !1,
                        autoplay: !0,
                        animationData: data,
                        onComplete: lottie.destroy()
                    })
                },
                classCallCheck = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                createClass = function() {
                    function t(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, r, i) {
                        return r && t(e.prototype, r), i && t(e, i), e
                    }
                }(),
                _extends = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                    }
                    return t
                },
                inherits = function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                },
                possibleConstructorReturn = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                },
                transition = {
                    type: "spring",
                    stiffness: 200,
                    damping: 2
                },
                SpringAnim = posed.div({
                    confetti: {
                        y: 5,
                        transition: transition
                    },
                    emoji: {
                        y: 5,
                        transition: transition
                    },
                    memphis: {
                        scale: 1.1,
                        transition: transition
                    },
                    punished: {
                        x: 5,
                        transition: transition
                    },
                    resting: {
                        y: 0,
                        x: 0,
                        scale: 1,
                        transition: transition
                    }
                }),
                Reward = function(t) {
                    function e() {
                        var t, r, i;
                        classCallCheck(this, e);
                        for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                        return r = i = possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(a))), i.state = {
                            state: "resting"
                        }, i.rewardMe = function() {
                            var t = i.props,
                                e = t.type,
                                r = t.config,
                                n = [i.container, r];
                            switch (e) {
                                case "confetti":
                                    i.handleAnimation(e), confetti.apply(void 0, n);
                                    break;
                                case "emoji":
                                    i.handleAnimation(e), emoji.apply(void 0, n);
                                    break;
                                case "memphis":
                                    i.handleAnimation(e), memphis(i.lottieContainer, r)
                            }
                        }, i.punishMe = function() {
                            i.handlePunishAnimation()
                        }, i.rest = function() {
                            setTimeout((function() {
                                i.setState({
                                    state: "resting"
                                })
                            }), 100)
                        }, i.handleAnimation = function(t) {
                            i.setState({
                                state: t
                            }, (function() {
                                i.rest()
                            }))
                        }, i.handlePunishAnimation = function() {
                            i.setState({
                                state: "punished"
                            }, (function() {
                                i.rest()
                            }))
                        }, possibleConstructorReturn(i, r)
                    }
                    return inherits(e, t), createClass(e, [{
                        key: "render",
                        value: function() {
                            var t = this,
                                e = this.props,
                                r = e.config,
                                i = e.children,
                                n = r.springAnimation,
                                a = void 0 === n || n,
                                s = r.containerStyle,
                                o = void 0 === s ? {} : s,
                                l = this.state.state;
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                                style: o,
                                ref: function(e) {
                                    t.container = e
                                }
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                                style: _extends({}, o, lottieContainerStyles),
                                ref: function(e) {
                                    t.lottieContainer = e
                                }
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpringAnim, {
                                pose: a && l
                            }, i))
                        }
                    }]), e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                lottieContainerStyles = {
                    position: "relative"
                };
            Reward.propTypes = {
                type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
                config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
                children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired
            }, Reward.defaultProps = {
                config: {}
            }, __webpack_exports__.a = Reward
        },
        939: function(t, e, r) {
            "use strict";
            var i = r(59);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(r(0)),
                a = (0, i(r(64)).default)(n.default.createElement(n.default.Fragment, null, n.default.createElement("path", {
                    d: "M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                }), n.default.createElement("circle", {
                    cx: "16",
                    cy: "12",
                    r: "1.5"
                })), "AccountBalanceWalletOutlined");
            e.default = a
        },
        940: function(t, e, r) {
            "use strict";
            var i = r(59);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(r(0)),
                a = (0, i(r(64)).default)(n.default.createElement("path", {
                    d: "M10.54 14.53L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06zm6.797-12.72l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
                }), "AlarmOnOutlined");
            e.default = a
        },
        941: function(t, e, r) {
            "use strict";
            var i = r(59);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(r(0)),
                a = (0, i(r(64)).default)(n.default.createElement("path", {
                    d: "M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"
                }), "RecordVoiceOverOutlined");
            e.default = a
        },
        942: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return S
                }));
                var i = r(0),
                    n = r.n(i),
                    a = r(943),
                    s = r.n(a);

                function o() {
                    return (o = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function l(t, e) {
                    if (null == t) return {};
                    var r, i, n = {},
                        a = Object.keys(t);
                    for (i = 0; i < a.length; i++) r = a[i], e.indexOf(r) >= 0 || (n[r] = t[r]);
                    return n
                }

                function h(t) {
                    var e = t.attributes,
                        r = void 0 === e ? {} : e,
                        i = t.children,
                        a = void 0 === i ? null : i,
                        s = t.selfClose,
                        o = void 0 !== s && s,
                        l = t.tagName;
                    return o ? n.a.createElement(l, r) : n.a.createElement(l, r, a)
                }
                var p = function() {
                        function t() {}
                        var e = t.prototype;
                        return e.attribute = function(t, e) {
                            return e
                        }, e.node = function(t, e) {
                            return e
                        }, t
                    }(),
                    c = /(url|image|image-set)\(/i,
                    f = function(t) {
                        var e, r;

                        function i() {
                            return t.apply(this, arguments) || this
                        }
                        return r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, i.prototype.attribute = function(t, e) {
                            return "style" === t && Object.keys(e).forEach((function(t) {
                                String(e[t]).match(c) && delete e[t]
                            })), e
                        }, i
                    }(p),
                    u = {
                        a: {
                            content: 9,
                            self: !1,
                            type: 105
                        },
                        address: {
                            invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
                            self: !1
                        },
                        audio: {
                            children: ["track", "source"]
                        },
                        br: {
                            type: 9,
                            void: !0
                        },
                        body: {
                            content: 127
                        },
                        button: {
                            content: 8,
                            type: 105
                        },
                        caption: {
                            content: 1,
                            parent: ["table"]
                        },
                        col: {
                            parent: ["colgroup"],
                            void: !0
                        },
                        colgroup: {
                            children: ["col"],
                            parent: ["table"]
                        },
                        details: {
                            children: ["summary"],
                            type: 97
                        },
                        dd: {
                            content: 1,
                            parent: ["dl"]
                        },
                        dl: {
                            children: ["dt", "dd"],
                            type: 1
                        },
                        dt: {
                            content: 1,
                            invalid: ["footer", "header"],
                            parent: ["dl"]
                        },
                        figcaption: {
                            content: 1,
                            parent: ["figure"]
                        },
                        footer: {
                            invalid: ["footer", "header"]
                        },
                        header: {
                            invalid: ["footer", "header"]
                        },
                        hr: {
                            type: 1,
                            void: !0
                        },
                        img: {
                            void: !0
                        },
                        li: {
                            content: 1,
                            parent: ["ul", "ol", "menu"]
                        },
                        main: {
                            self: !1
                        },
                        ol: {
                            children: ["li"],
                            type: 1
                        },
                        picture: {
                            children: ["source", "img"],
                            type: 25
                        },
                        rb: {
                            parent: ["ruby", "rtc"]
                        },
                        rp: {
                            parent: ["ruby", "rtc"]
                        },
                        rt: {
                            content: 8,
                            parent: ["ruby", "rtc"]
                        },
                        rtc: {
                            content: 8,
                            parent: ["ruby"]
                        },
                        ruby: {
                            children: ["rb", "rp", "rt", "rtc"]
                        },
                        source: {
                            parent: ["audio", "video", "picture"],
                            void: !0
                        },
                        summary: {
                            content: 8,
                            parent: ["details"]
                        },
                        table: {
                            children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
                            type: 1
                        },
                        tbody: {
                            parent: ["table"],
                            children: ["tr"]
                        },
                        td: {
                            content: 1,
                            parent: ["tr"]
                        },
                        tfoot: {
                            parent: ["table"],
                            children: ["tr"]
                        },
                        th: {
                            content: 1,
                            parent: ["tr"]
                        },
                        thead: {
                            parent: ["table"],
                            children: ["tr"]
                        },
                        tr: {
                            parent: ["table", "tbody", "thead", "tfoot"],
                            children: ["th", "td"]
                        },
                        track: {
                            parent: ["audio", "video"],
                            void: !0
                        },
                        ul: {
                            children: ["li"],
                            type: 1
                        },
                        video: {
                            children: ["track", "source"]
                        },
                        wbr: {
                            type: 9,
                            void: !0
                        }
                    };

                function m(t) {
                    return function(e) {
                        u[e] = o({}, t, u[e])
                    }
                }["address", "main", "div", "figure", "p", "pre"].forEach(m({
                    content: 1,
                    type: 65
                })), ["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(m({
                    content: 8,
                    type: 73
                })), ["p", "pre"].forEach(m({
                    content: 8,
                    type: 65
                })), ["s", "small", "span", "del", "ins"].forEach(m({
                    content: 8,
                    type: 9
                })), ["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(m({
                    content: 1,
                    type: 67
                })), ["h1", "h2", "h3", "h4", "h5", "h6"].forEach(m({
                    content: 8,
                    type: 69
                })), ["audio", "canvas", "iframe", "img", "video"].forEach(m({
                    type: 89
                }));
                var d = Object.freeze(u),
                    y = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"],
                    g = Object.keys(d).filter((function(t) {
                        return "canvas" !== t && "iframe" !== t
                    })),
                    v = Object.freeze({
                        alt: 1,
                        cite: 1,
                        class: 1,
                        colspan: 3,
                        controls: 4,
                        datetime: 1,
                        default: 4,
                        disabled: 4,
                        dir: 1,
                        height: 1,
                        href: 1,
                        id: 1,
                        kind: 1,
                        label: 1,
                        lang: 1,
                        loading: 1,
                        loop: 4,
                        media: 1,
                        muted: 4,
                        poster: 1,
                        role: 1,
                        rowspan: 3,
                        scope: 1,
                        sizes: 1,
                        span: 3,
                        start: 3,
                        style: 5,
                        src: 1,
                        srclang: 1,
                        srcset: 1,
                        target: 1,
                        title: 1,
                        type: 1,
                        width: 1
                    }),
                    x = Object.freeze({
                        class: "className",
                        colspan: "colSpan",
                        datetime: "dateTime",
                        rowspan: "rowSpan",
                        srclang: "srcLang",
                        srcset: "srcSet"
                    }),
                    b = /^<(!doctype|(html|head|body)(\s|>))/i,
                    P = /^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,
                    E = /{{{(\w+)\/?}}}/;

                function _() {
                    if ("undefined" !== typeof window && "undefined" !== typeof document) return document.implementation.createHTMLDocument("Interweave")
                }
                var k = function() {
                    function e(t, e, r, i) {
                        void 0 === e && (e = {}), void 0 === r && (r = []), void 0 === i && (i = []), this.allowed = void 0, this.banned = void 0, this.blocked = void 0, this.container = void 0, this.content = [], this.props = void 0, this.matchers = void 0, this.filters = void 0, this.keyIndex = void 0, this.props = e, this.matchers = r, this.filters = [].concat(i, [new f]), this.keyIndex = -1, this.container = this.createContainer(t || ""), this.allowed = new Set(e.allowList || g), this.banned = new Set(y), this.blocked = new Set(e.blockList)
                    }
                    var r = e.prototype;
                    return r.applyAttributeFilters = function(t, e) {
                        return this.filters.reduce((function(e, r) {
                            return null !== e && "function" === typeof r.attribute ? r.attribute(t, e) : e
                        }), e)
                    }, r.applyNodeFilters = function(t, e) {
                        return this.filters.reduce((function(e, r) {
                            return null !== e && "function" === typeof r.node ? r.node(t, e) : e
                        }), e)
                    }, r.applyMatchers = function(t, e) {
                        var r = this,
                            i = {},
                            n = this.props,
                            a = t,
                            s = 0,
                            h = null;
                        return this.matchers.forEach((function(t) {
                            var p = t.asTag().toLowerCase(),
                                c = r.getTagConfig(p);
                            if (!n[t.inverseName] && r.isTagAllowed(p) && r.canRenderChild(e, c)) {
                                for (var f = ""; a && (h = t.match(a));) {
                                    var u = h,
                                        m = u.index,
                                        d = u.length,
                                        y = u.match,
                                        g = u.valid,
                                        v = u.void,
                                        x = l(u, ["index", "length", "match", "valid", "void"]),
                                        b = t.propName + s;
                                    m > 0 && (f += a.slice(0, m)), g ? (f += v ? "{{{" + b + "/}}}" : "{{{" + b + "}}}" + y + "{{{/" + b + "}}}", r.keyIndex += 1, s += 1, i[b] = {
                                        children: y,
                                        matcher: t,
                                        props: o({}, n, x, {
                                            key: r.keyIndex
                                        })
                                    }) : f += y, t.greedy ? (a = f + a.slice(m + d), f = "") : a = a.slice(m + (d || y.length))
                                }
                                t.greedy || (a = f + a)
                            }
                        })), 0 === s ? t : this.replaceTokens(a, i)
                    }, r.canRenderChild = function(t, e) {
                        return !(!t.tagName || !e.tagName) && (!t.void && (t.children.length > 0 ? t.children.includes(e.tagName) : !(t.invalid.length > 0 && t.invalid.includes(e.tagName)) && (e.parent.length > 0 ? e.parent.includes(t.tagName) : !(!t.self && t.tagName === e.tagName) && Boolean(t && t.content & e.type))))
                    }, r.convertLineBreaks = function(t) {
                        var e = this.props,
                            r = e.noHtml,
                            i = e.disableLineBreaks;
                        if (r || i || t.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi)) return t;
                        var n = t.replace(/\r\n/g, "\n");
                        return n = (n = n.replace(/\n{3,}/g, "\n\n\n")).replace(/\n/g, "<br/>")
                    }, r.createContainer = function(e) {
                        var r = (t.INTERWEAVE_SSR_POLYFILL || _)();
                        if (r) {
                            var i = this.props.containerTagName || "body",
                                n = "body" === i || "fragment" === i ? r.body : r.createElement(i);
                            return e.match(b) || (n.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? s()(e) : e)), n
                        }
                    }, r.extractAttributes = function(t) {
                        var e = this,
                            r = this.props.allowAttributes,
                            i = {},
                            n = 0;
                        return 1 === t.nodeType && t.attributes ? (Array.from(t.attributes).forEach((function(a) {
                            var s = a.name,
                                o = a.value,
                                l = s.toLowerCase(),
                                h = v[l] || v[s];
                            if (e.isSafe(t) && (l.match(P) || (r || h && 2 !== h) && !l.match(/^on/) && !o.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i))) {
                                var p = "style" === l ? e.extractStyleAttribute(t) : o;
                                4 === h ? p = !0 : 3 === h ? p = Number.parseFloat(String(p)) : 5 !== h && (p = String(p)), i[x[l] || l] = e.applyAttributeFilters(l, p), n += 1
                            }
                        })), 0 === n ? null : i) : null
                    }, r.extractStyleAttribute = function(t) {
                        var e = {};
                        return Array.from(t.style).forEach((function(r) {
                            var i = t.style[r];
                            "string" !== typeof i && "number" !== typeof i || (e[r.replace(/-([a-z])/g, (function(t, e) {
                                return e.toUpperCase()
                            }))] = i)
                        })), e
                    }, r.getTagConfig = function(t) {
                        var e = {
                            children: [],
                            content: 0,
                            invalid: [],
                            parent: [],
                            self: !0,
                            tagName: "",
                            type: 0,
                            void: !1
                        };
                        return d[t] ? o({}, e, d[t], {
                            tagName: t
                        }) : e
                    }, r.isSafe = function(t) {
                        if ("undefined" !== typeof HTMLAnchorElement && t instanceof HTMLAnchorElement) {
                            var e = t.getAttribute("href");
                            if (e && "#" === e.charAt(0)) return !0;
                            var r = t.protocol.toLowerCase();
                            return ":" === r || "http:" === r || "https:" === r || "mailto:" === r || "tel:" === r
                        }
                        return !0
                    }, r.isTagAllowed = function(t) {
                        return !this.banned.has(t) && !this.blocked.has(t) && (this.props.allowElements || this.allowed.has(t))
                    }, r.parse = function() {
                        return this.container ? this.parseNode(this.container, this.getTagConfig(this.container.nodeName.toLowerCase())) : []
                    }, r.parseNode = function(t, e) {
                        var r = this,
                            i = this.props,
                            a = i.noHtml,
                            s = i.noHtmlExceptMatchers,
                            l = i.allowElements,
                            p = i.transform,
                            c = [],
                            f = "";
                        return Array.from(t.childNodes).forEach((function(t) {
                            if (1 === t.nodeType) {
                                var i = t.nodeName.toLowerCase(),
                                    u = r.getTagConfig(i);
                                f && (c.push(f), f = "");
                                var m, d = r.applyNodeFilters(i, t);
                                if (!d) return;
                                if (p) {
                                    r.keyIndex += 1;
                                    var y = r.keyIndex;
                                    m = r.parseNode(d, u);
                                    var g = p(d, m, u);
                                    if (null === g) return;
                                    if ("undefined" !== typeof g) return void c.push(n.a.cloneElement(g, {
                                        key: y
                                    }));
                                    r.keyIndex = y - 1
                                }
                                if (r.banned.has(i)) return;
                                if (a || s && "br" !== i || !r.isTagAllowed(i) || !l && !r.canRenderChild(e, u)) c = c.concat(r.parseNode(d, u.tagName ? u : e));
                                else {
                                    r.keyIndex += 1;
                                    var v = r.extractAttributes(d),
                                        x = {
                                            tagName: i
                                        };
                                    v && (x.attributes = v), u.void && (x.selfClose = u.void), c.push(n.a.createElement(h, o({}, x, {
                                        key: r.keyIndex
                                    }), m || r.parseNode(d, u)))
                                }
                            } else if (3 === t.nodeType) {
                                var b = a && !s ? t.textContent : r.applyMatchers(t.textContent || "", e);
                                Array.isArray(b) ? c = c.concat(b) : f += b
                            }
                        })), f && c.push(f), c
                    }, r.replaceTokens = function(t, e) {
                        if (!t.includes("{{{")) return t;
                        for (var r = [], i = t, n = null; n = i.match(E);) {
                            var a = n,
                                s = a[0],
                                o = a[1],
                                l = n.index,
                                h = s.includes("/");
                            0, l > 0 && (r.push(i.slice(0, l)), i = i.slice(l));
                            var p = e[o],
                                c = p.children,
                                f = p.matcher,
                                u = p.props,
                                m = void 0;
                            if (h) m = s.length, r.push(f.createElement(c, u));
                            else {
                                var d = i.match(new RegExp("{{{/" + o + "}}}"));
                                0, m = d.index + d[0].length, r.push(f.createElement(this.replaceTokens(i.slice(s.length, d.index), e), u))
                            }
                            i = i.slice(m)
                        }
                        return i.length > 0 && r.push(i), 0 === r.length ? "" : 1 === r.length && "string" === typeof r[0] ? r[0] : r
                    }, e
                }();

                function S(t) {
                    var e, r = t.attributes,
                        i = t.containerTagName,
                        a = t.content,
                        s = t.emptyContent,
                        o = t.parsedContent,
                        l = t.tagName,
                        p = i || l || "div",
                        c = "fragment" === p || t.noWrap;
                    if (o) e = o;
                    else {
                        var f = new k(a || "", t).parse();
                        f.length > 0 && (e = f)
                    }
                    return e || (e = s), c ? n.a.createElement(n.a.Fragment, null, e) : n.a.createElement(h, {
                        attributes: r,
                        tagName: p
                    }, e)
                }! function() {
                    function t(t, e, r) {
                        this.greedy = !1, this.options = void 0, this.propName = void 0, this.inverseName = void 0, this.factory = void 0, this.options = o({}, e), this.propName = t, this.inverseName = "no" + (t.charAt(0).toUpperCase() + t.slice(1)), this.factory = r || null
                    }
                    var e = t.prototype;
                    e.createElement = function(t, e) {
                        return this.factory ? n.a.createElement(this.factory, e, t) : this.replaceWith(t, e)
                    }, e.doMatch = function(t, e, r, i) {
                        return void 0 === i && (i = !1),
                            function(t, e, r, i) {
                                void 0 === i && (i = !1);
                                var n = t.match(e instanceof RegExp ? e : new RegExp(e, "i"));
                                return n ? o({
                                    match: n[0],
                                    void: i
                                }, r(n), {
                                    index: n.index,
                                    length: n[0].length,
                                    valid: !0
                                }) : null
                            }(t, e, r, i)
                    }, e.onBeforeParse = function(t, e) {
                        return t
                    }, e.onAfterParse = function(t, e) {
                        return t
                    }
                }()
            }).call(this, r(27))
        },
        943: function(t, e, r) {
            "use strict";
            var i = /["'&<>]/;
            t.exports = function(t) {
                var e, r = "" + t,
                    n = i.exec(r);
                if (!n) return r;
                var a = "",
                    s = 0,
                    o = 0;
                for (s = n.index; s < r.length; s++) {
                    switch (r.charCodeAt(s)) {
                        case 34:
                            e = "&quot;";
                            break;
                        case 38:
                            e = "&amp;";
                            break;
                        case 39:
                            e = "&#39;";
                            break;
                        case 60:
                            e = "&lt;";
                            break;
                        case 62:
                            e = "&gt;";
                            break;
                        default:
                            continue
                    }
                    o !== s && (a += r.substring(o, s)), o = s + 1, a += e
                }
                return o !== s ? a + r.substring(o, s) : a
            }
        },
        999: function(t, e, r) {
            "use strict";
            var i = r(1),
                n = r(13),
                a = r(0),
                s = (r(10), r(9)),
                o = r(842),
                l = r(698),
                h = Object(l.a)(a.createElement("path", {
                    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                }), "CheckBoxOutlineBlank"),
                p = Object(l.a)(a.createElement("path", {
                    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                }), "CheckBox"),
                c = r(39),
                f = Object(l.a)(a.createElement("path", {
                    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
                }), "IndeterminateCheckBox"),
                u = r(34),
                m = r(23),
                d = a.createElement(p, null),
                y = a.createElement(h, null),
                g = a.createElement(f, null),
                v = a.forwardRef((function(t, e) {
                    var r = t.checkedIcon,
                        l = void 0 === r ? d : r,
                        h = t.classes,
                        p = t.color,
                        c = void 0 === p ? "secondary" : p,
                        f = t.icon,
                        m = void 0 === f ? y : f,
                        v = t.indeterminate,
                        x = void 0 !== v && v,
                        b = t.indeterminateIcon,
                        P = void 0 === b ? g : b,
                        E = t.inputProps,
                        _ = t.size,
                        k = void 0 === _ ? "medium" : _,
                        S = Object(n.a)(t, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);
                    return a.createElement(o.a, Object(i.a)({
                        type: "checkbox",
                        classes: {
                            root: Object(s.a)(h.root, h["color".concat(Object(u.a)(c))], x && h.indeterminate),
                            checked: h.checked,
                            disabled: h.disabled
                        },
                        color: c,
                        inputProps: Object(i.a)({
                            "data-indeterminate": x
                        }, E),
                        icon: a.cloneElement(x ? P : m, {
                            fontSize: "small" === k ? "small" : "default"
                        }),
                        checkedIcon: a.cloneElement(x ? P : l, {
                            fontSize: "small" === k ? "small" : "default"
                        }),
                        ref: e
                    }, S))
                }));
            e.a = Object(m.a)((function(t) {
                return {
                    root: {
                        color: t.palette.text.secondary
                    },
                    checked: {},
                    disabled: {},
                    indeterminate: {},
                    colorPrimary: {
                        "&$checked": {
                            color: t.palette.primary.main,
                            "&:hover": {
                                backgroundColor: Object(c.c)(t.palette.primary.main, t.palette.action.hoverOpacity),
                                "@media (hover: none)": {
                                    backgroundColor: "transparent"
                                }
                            }
                        },
                        "&$disabled": {
                            color: t.palette.action.disabled
                        }
                    },
                    colorSecondary: {
                        "&$checked": {
                            color: t.palette.secondary.main,
                            "&:hover": {
                                backgroundColor: Object(c.c)(t.palette.secondary.main, t.palette.action.hoverOpacity),
                                "@media (hover: none)": {
                                    backgroundColor: "transparent"
                                }
                            }
                        },
                        "&$disabled": {
                            color: t.palette.action.disabled
                        }
                    }
                }
            }), {
                name: "MuiCheckbox"
            })(v)
        }
    }
]);