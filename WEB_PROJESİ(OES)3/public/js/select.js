!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
    }
    n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    n.d(r, i, function(t) {
                        return e[t]
                    }
                        .bind(null, i));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
            ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/assets/",
        n(n.s = 43)
}({
    1: function(e, t, n) {
        var r;
        /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
        !function(t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(e)
                }
                : n(t)
        }("undefined" != typeof window ? window : this, (function(n, i) {
                "use strict";
                var o = []
                    , s = Object.getPrototypeOf
                    , a = o.slice
                    , l = o.flat ? function(e) {
                        return o.flat.call(e)
                    }
                    : function(e) {
                        return o.concat.apply([], e)
                    }
                    , u = o.push
                    , c = o.indexOf
                    , p = {}
                    , d = p.toString
                    , f = p.hasOwnProperty
                    , h = f.toString
                    , g = h.call(Object)
                    , m = {}
                    , v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                }
                    , y = function(e) {
                    return null != e && e === e.window
                }
                    , b = n.document
                    , x = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function w(e, t, n) {
                    var r, i, o = (n = n || b).createElement("script");
                    if (o.text = e,
                        t)
                        for (r in x)
                            (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }
                function _(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
                }
                var C = function(e, t) {
                    return new C.fn.init(e,t)
                };
                function A(e) {
                    var t = !!e && "length"in e && e.length
                        , n = _(e);
                    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                C.fn = C.prototype = {
                    jquery: "3.5.1",
                    constructor: C,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(e) {
                        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = C.merge(this.constructor(), e);
                        return t.prevObject = this,
                            t
                    },
                    each: function(e) {
                        return C.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(C.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                                return (t + 1) % 2
                            }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                                return t % 2
                            }
                        )))
                    },
                    eq: function(e) {
                        var t = this.length
                            , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: u,
                    sort: o.sort,
                    splice: o.splice
                },
                    C.extend = C.fn.extend = function() {
                        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                        for ("boolean" == typeof s && (u = s,
                            s = arguments[a] || {},
                            a++),
                             "object" == typeof s || v(s) || (s = {}),
                             a === l && (s = this,
                                 a--); a < l; a++)
                            if (null != (e = arguments[a]))
                                for (t in e)
                                    r = e[t],
                                    "__proto__" !== t && s !== r && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t],
                                        o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {},
                                        i = !1,
                                        s[t] = C.extend(u, o, r)) : void 0 !== r && (s[t] = r));
                        return s
                    }
                    ,
                    C.extend({
                        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var t, n;
                            return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g)
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e)
                                return !1;
                            return !0
                        },
                        globalEval: function(e, t, n) {
                            w(e, {
                                nonce: t && t.nonce
                            }, n)
                        },
                        each: function(e, t) {
                            var n, r = 0;
                            if (A(e))
                                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                                    ;
                            else
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r]))
                                        break;
                            return e
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (A(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                                n
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : c.call(t, e, n)
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                                e[i++] = t[r];
                            return e.length = i,
                                e
                        },
                        grep: function(e, t, n) {
                            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                                !t(e[i], i) !== s && r.push(e[i]);
                            return r
                        },
                        map: function(e, t, n) {
                            var r, i, o = 0, s = [];
                            if (A(e))
                                for (r = e.length; o < r; o++)
                                    null != (i = t(e[o], o, n)) && s.push(i);
                            else
                                for (o in e)
                                    null != (i = t(e[o], o, n)) && s.push(i);
                            return l(s)
                        },
                        guid: 1,
                        support: m
                    }),
                "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]),
                    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                            p["[object " + t + "]"] = t.toLowerCase()
                        }
                    ));
                var T = /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
                    function(e) {
                        var t, n, r, i, o, s, a, l, u, c, p, d, f, h, g, m, v, y, b, x = "sizzle" + 1 * new Date, w = e.document, _ = 0, C = 0, A = le(), T = le(), $ = le(), S = le(), E = function(e, t) {
                            return e === t && (p = !0),
                                0
                        }, D = {}.hasOwnProperty, k = [], j = k.pop, O = k.push, q = k.push, L = k.slice, N = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                if (e[n] === t)
                                    return n;
                            return -1
                        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", R = "\\[" + H + "*(" + I + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + H + "*\\]", M = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", U = new RegExp(H + "+","g"), z = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$","g"), W = new RegExp("^" + H + "*," + H + "*"), B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), F = new RegExp(H + "|>"), G = new RegExp(M), Y = new RegExp("^" + I + "$"), X = {
                            ID: new RegExp("^#(" + I + ")"),
                            CLASS: new RegExp("^\\.(" + I + ")"),
                            TAG: new RegExp("^(" + I + "|[*])"),
                            ATTR: new RegExp("^" + R),
                            PSEUDO: new RegExp("^" + M),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)","i"),
                            bool: new RegExp("^(?:" + P + ")$","i"),
                            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)","i")
                        }, K = /HTML$/i, V = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }, oe = function() {
                            d()
                        }, se = xe((function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }
                        ), {
                            dir: "parentNode",
                            next: "legend"
                        });
                        try {
                            q.apply(k = L.call(w.childNodes), w.childNodes),
                                k[w.childNodes.length].nodeType
                        } catch (e) {
                            q = {
                                apply: k.length ? function(e, t) {
                                        O.apply(e, L.call(t))
                                    }
                                    : function(e, t) {
                                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                            ;
                                        e.length = n - 1
                                    }
                            }
                        }
                        function ae(e, t, r, i) {
                            var o, a, u, c, p, h, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                            if (r = r || [],
                            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                                return r;
                            if (!i && (d(t),
                                t = t || f,
                                g)) {
                                if (11 !== w && (p = J.exec(e)))
                                    if (o = p[1]) {
                                        if (9 === w) {
                                            if (!(u = t.getElementById(o)))
                                                return r;
                                            if (u.id === o)
                                                return r.push(u),
                                                    r
                                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o)
                                            return r.push(u),
                                                r
                                    } else {
                                        if (p[2])
                                            return q.apply(r, t.getElementsByTagName(e)),
                                                r;
                                        if ((o = p[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                            return q.apply(r, t.getElementsByClassName(o)),
                                                r
                                    }
                                if (n.qsa && !S[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                    if (v = e,
                                        y = t,
                                    1 === w && (F.test(e) || B.test(e))) {
                                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)),
                                                 a = (h = s(e)).length; a--; )
                                            h[a] = (c ? "#" + c : ":scope") + " " + be(h[a]);
                                        v = h.join(",")
                                    }
                                    try {
                                        return q.apply(r, y.querySelectorAll(v)),
                                            r
                                    } catch (t) {
                                        S(e, !0)
                                    } finally {
                                        c === x && t.removeAttribute("id")
                                    }
                                }
                            }
                            return l(e.replace(z, "$1"), t, r, i)
                        }
                        function le() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                                    t[n + " "] = i
                            }
                        }
                        function ue(e) {
                            return e[x] = !0,
                                e
                        }
                        function ce(e) {
                            var t = f.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t),
                                    t = null
                            }
                        }
                        function pe(e, t) {
                            for (var n = e.split("|"), i = n.length; i--; )
                                r.attrHandle[n[i]] = t
                        }
                        function de(e, t) {
                            var n = t && e
                                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r)
                                return r;
                            if (n)
                                for (; n = n.nextSibling; )
                                    if (n === t)
                                        return -1;
                            return e ? 1 : -1
                        }
                        function fe(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }
                        function he(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }
                        function ge(e) {
                            return function(t) {
                                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
                            }
                        }
                        function me(e) {
                            return ue((function(t) {
                                    return t = +t,
                                        ue((function(n, r) {
                                                for (var i, o = e([], n.length, t), s = o.length; s--; )
                                                    n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                                            }
                                        ))
                                }
                            ))
                        }
                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = ae.support = {},
                            o = ae.isXML = function(e) {
                                var t = e.namespaceURI
                                    , n = (e.ownerDocument || e).documentElement;
                                return !K.test(t || n && n.nodeName || "HTML")
                            }
                            ,
                            d = ae.setDocument = function(e) {
                                var t, i, s = e ? e.ownerDocument || e : w;
                                return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement,
                                    g = !o(f),
                                w != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                                    n.scope = ce((function(e) {
                                            return h.appendChild(e).appendChild(f.createElement("div")),
                                            void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                        }
                                    )),
                                    n.attributes = ce((function(e) {
                                            return e.className = "i",
                                                !e.getAttribute("className")
                                        }
                                    )),
                                    n.getElementsByTagName = ce((function(e) {
                                            return e.appendChild(f.createComment("")),
                                                !e.getElementsByTagName("*").length
                                        }
                                    )),
                                    n.getElementsByClassName = Z.test(f.getElementsByClassName),
                                    n.getById = ce((function(e) {
                                            return h.appendChild(e).id = x,
                                            !f.getElementsByName || !f.getElementsByName(x).length
                                        }
                                    )),
                                    n.getById ? (r.filter.ID = function(e) {
                                            var t = e.replace(te, ne);
                                            return function(e) {
                                                return e.getAttribute("id") === t
                                            }
                                        }
                                            ,
                                            r.find.ID = function(e, t) {
                                                if (void 0 !== t.getElementById && g) {
                                                    var n = t.getElementById(e);
                                                    return n ? [n] : []
                                                }
                                            }
                                    ) : (r.filter.ID = function(e) {
                                            var t = e.replace(te, ne);
                                            return function(e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t
                                            }
                                        }
                                            ,
                                            r.find.ID = function(e, t) {
                                                if (void 0 !== t.getElementById && g) {
                                                    var n, r, i, o = t.getElementById(e);
                                                    if (o) {
                                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                                            return [o];
                                                        for (i = t.getElementsByName(e),
                                                                 r = 0; o = i[r++]; )
                                                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                                                return [o]
                                                    }
                                                    return []
                                                }
                                            }
                                    ),
                                    r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                        }
                                        : function(e, t) {
                                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; n = o[i++]; )
                                                    1 === n.nodeType && r.push(n);
                                                return r
                                            }
                                            return o
                                        }
                                    ,
                                    r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                        if (void 0 !== t.getElementsByClassName && g)
                                            return t.getElementsByClassName(e)
                                    }
                                    ,
                                    v = [],
                                    m = [],
                                (n.qsa = Z.test(f.querySelectorAll)) && (ce((function(e) {
                                        var t;
                                        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + P + ")"),
                                        e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                                            (t = f.createElement("input")).setAttribute("name", ""),
                                            e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || m.push(":checked"),
                                        e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"),
                                            e.querySelectorAll("\\\f"),
                                            m.push("[\\r\\n\\f]")
                                    }
                                )),
                                    ce((function(e) {
                                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                            var t = f.createElement("input");
                                            t.setAttribute("type", "hidden"),
                                                e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="),
                                            2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                                h.appendChild(e).disabled = !0,
                                            2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                                e.querySelectorAll("*,:x"),
                                                m.push(",.*:")
                                        }
                                    ))),
                                (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                                        n.disconnectedMatch = y.call(e, "*"),
                                            y.call(e, "[s!='']:x"),
                                            v.push("!=", M)
                                    }
                                )),
                                    m = m.length && new RegExp(m.join("|")),
                                    v = v.length && new RegExp(v.join("|")),
                                    t = Z.test(h.compareDocumentPosition),
                                    b = t || Z.test(h.contains) ? function(e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement : e
                                                , r = t && t.parentNode;
                                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                        }
                                        : function(e, t) {
                                            if (t)
                                                for (; t = t.parentNode; )
                                                    if (t === e)
                                                        return !0;
                                            return !1
                                        }
                                    ,
                                    E = t ? function(e, t) {
                                            if (e === t)
                                                return p = !0,
                                                    0;
                                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : c ? N(c, e) - N(c, t) : 0 : 4 & r ? -1 : 1)
                                        }
                                        : function(e, t) {
                                            if (e === t)
                                                return p = !0,
                                                    0;
                                            var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                                            if (!i || !o)
                                                return e == f ? -1 : t == f ? 1 : i ? -1 : o ? 1 : c ? N(c, e) - N(c, t) : 0;
                                            if (i === o)
                                                return de(e, t);
                                            for (n = e; n = n.parentNode; )
                                                s.unshift(n);
                                            for (n = t; n = n.parentNode; )
                                                a.unshift(n);
                                            for (; s[r] === a[r]; )
                                                r++;
                                            return r ? de(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0
                                        }
                                    ,
                                    f) : f
                            }
                            ,
                            ae.matches = function(e, t) {
                                return ae(e, null, null, t)
                            }
                            ,
                            ae.matchesSelector = function(e, t) {
                                if (d(e),
                                n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                                    try {
                                        var r = y.call(e, t);
                                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                            return r
                                    } catch (e) {
                                        S(t, !0)
                                    }
                                return ae(t, f, null, [e]).length > 0
                            }
                            ,
                            ae.contains = function(e, t) {
                                return (e.ownerDocument || e) != f && d(e),
                                    b(e, t)
                            }
                            ,
                            ae.attr = function(e, t) {
                                (e.ownerDocument || e) != f && d(e);
                                var i = r.attrHandle[t.toLowerCase()]
                                    , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                            }
                            ,
                            ae.escape = function(e) {
                                return (e + "").replace(re, ie)
                            }
                            ,
                            ae.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }
                            ,
                            ae.uniqueSort = function(e) {
                                var t, r = [], i = 0, o = 0;
                                if (p = !n.detectDuplicates,
                                    c = !n.sortStable && e.slice(0),
                                    e.sort(E),
                                    p) {
                                    for (; t = e[o++]; )
                                        t === e[o] && (i = r.push(o));
                                    for (; i--; )
                                        e.splice(r[i], 1)
                                }
                                return c = null,
                                    e
                            }
                            ,
                            i = ae.getText = function(e) {
                                var t, n = "", r = 0, o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent)
                                            return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            n += i(e)
                                    } else if (3 === o || 4 === o)
                                        return e.nodeValue
                                } else
                                    for (; t = e[r++]; )
                                        n += i(t);
                                return n
                            }
                            ,
                            (r = ae.selectors = {
                                cacheLength: 50,
                                createPseudo: ue,
                                match: X,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(te, ne),
                                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                            e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(),
                                            "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                                            e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                            e[2] = n.slice(0, t)),
                                            e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ? function() {
                                                return !0
                                            }
                                            : function(e) {
                                                return e.nodeName && e.nodeName.toLowerCase() === t
                                            }
                                    },
                                    CLASS: function(e) {
                                        var t = A[e + " "];
                                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && A(e, (function(e) {
                                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                            }
                                        ))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(r) {
                                            var i = ae.attr(r, e);
                                            return null == i ? "!=" === t : !t || (i += "",
                                                "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3)
                                            , s = "last" !== e.slice(-4)
                                            , a = "of-type" === t;
                                        return 1 === r && 0 === i ? function(e) {
                                                return !!e.parentNode
                                            }
                                            : function(t, n, l) {
                                                var u, c, p, d, f, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                                if (m) {
                                                    if (o) {
                                                        for (; g; ) {
                                                            for (d = t; d = d[g]; )
                                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                                    return !1;
                                                            h = g = "only" === e && !h && "nextSibling"
                                                        }
                                                        return !0
                                                    }
                                                    if (h = [s ? m.firstChild : m.lastChild],
                                                    s && y) {
                                                        for (b = (f = (u = (c = (p = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === _ && u[1]) && u[2],
                                                                 d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || h.pop(); )
                                                            if (1 === d.nodeType && ++b && d === t) {
                                                                c[e] = [_, f, b];
                                                                break
                                                            }
                                                    } else if (y && (b = f = (u = (c = (p = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === _ && u[1]),
                                                    !1 === b)
                                                        for (; (d = ++f && d && d[g] || (b = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (p = d[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] = [_, b]),
                                                        d !== t)); )
                                                            ;
                                                    return (b -= i) === r || b % r == 0 && b / r >= 0
                                                }
                                            }
                                    },
                                    PSEUDO: function(e, t) {
                                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                        return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                                                r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                                        for (var r, o = i(e, t), s = o.length; s--; )
                                                            e[r = N(e, o[s])] = !(n[r] = o[s])
                                                    }
                                                )) : function(e) {
                                                    return i(e, 0, n)
                                                }
                                        ) : i
                                    }
                                },
                                pseudos: {
                                    not: ue((function(e) {
                                            var t = []
                                                , n = []
                                                , r = a(e.replace(z, "$1"));
                                            return r[x] ? ue((function(e, t, n, i) {
                                                    for (var o, s = r(e, null, i, []), a = e.length; a--; )
                                                        (o = s[a]) && (e[a] = !(t[a] = o))
                                                }
                                            )) : function(e, i, o) {
                                                return t[0] = e,
                                                    r(t, null, o, n),
                                                    t[0] = null,
                                                    !n.pop()
                                            }
                                        }
                                    )),
                                    has: ue((function(e) {
                                            return function(t) {
                                                return ae(e, t).length > 0
                                            }
                                        }
                                    )),
                                    contains: ue((function(e) {
                                            return e = e.replace(te, ne),
                                                function(t) {
                                                    return (t.textContent || i(t)).indexOf(e) > -1
                                                }
                                        }
                                    )),
                                    lang: ue((function(e) {
                                            return Y.test(e || "") || ae.error("unsupported lang: " + e),
                                                e = e.replace(te, ne).toLowerCase(),
                                                function(t) {
                                                    var n;
                                                    do {
                                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                                    return !1
                                                }
                                        }
                                    )),
                                    target: function(t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id
                                    },
                                    root: function(e) {
                                        return e === h
                                    },
                                    focus: function(e) {
                                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex,
                                        !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6)
                                                return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !r.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return Q.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return V.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: me((function() {
                                            return [0]
                                        }
                                    )),
                                    last: me((function(e, t) {
                                            return [t - 1]
                                        }
                                    )),
                                    eq: me((function(e, t, n) {
                                            return [n < 0 ? n + t : n]
                                        }
                                    )),
                                    even: me((function(e, t) {
                                            for (var n = 0; n < t; n += 2)
                                                e.push(n);
                                            return e
                                        }
                                    )),
                                    odd: me((function(e, t) {
                                            for (var n = 1; n < t; n += 2)
                                                e.push(n);
                                            return e
                                        }
                                    )),
                                    lt: me((function(e, t, n) {
                                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                                e.push(r);
                                            return e
                                        }
                                    )),
                                    gt: me((function(e, t, n) {
                                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                                e.push(r);
                                            return e
                                        }
                                    ))
                                }
                            }).pseudos.nth = r.pseudos.eq,
                            {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            })
                            r.pseudos[t] = fe(t);
                        for (t in {
                            submit: !0,
                            reset: !0
                        })
                            r.pseudos[t] = he(t);
                        function ye() {}
                        function be(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++)
                                r += e[t].value;
                            return r
                        }
                        function xe(e, t, n) {
                            var r = t.dir
                                , i = t.next
                                , o = i || r
                                , s = n && "parentNode" === o
                                , a = C++;
                            return t.first ? function(t, n, i) {
                                    for (; t = t[r]; )
                                        if (1 === t.nodeType || s)
                                            return e(t, n, i);
                                    return !1
                                }
                                : function(t, n, l) {
                                    var u, c, p, d = [_, a];
                                    if (l) {
                                        for (; t = t[r]; )
                                            if ((1 === t.nodeType || s) && e(t, n, l))
                                                return !0
                                    } else
                                        for (; t = t[r]; )
                                            if (1 === t.nodeType || s)
                                                if (c = (p = t[x] || (t[x] = {}))[t.uniqueID] || (p[t.uniqueID] = {}),
                                                i && i === t.nodeName.toLowerCase())
                                                    t = t[r] || t;
                                                else {
                                                    if ((u = c[o]) && u[0] === _ && u[1] === a)
                                                        return d[2] = u[2];
                                                    if (c[o] = d,
                                                        d[2] = e(t, n, l))
                                                        return !0
                                                }
                                    return !1
                                }
                        }
                        function we(e) {
                            return e.length > 1 ? function(t, n, r) {
                                    for (var i = e.length; i--; )
                                        if (!e[i](t, n, r))
                                            return !1;
                                    return !0
                                }
                                : e[0]
                        }
                        function _e(e, t, n, r, i) {
                            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                                u && t.push(a)));
                            return s
                        }
                        function Ce(e, t, n, r, i, o) {
                            return r && !r[x] && (r = Ce(r)),
                            i && !i[x] && (i = Ce(i, o)),
                                ue((function(o, s, a, l) {
                                        var u, c, p, d = [], f = [], h = s.length, g = o || function(e, t, n) {
                                            for (var r = 0, i = t.length; r < i; r++)
                                                ae(e, t[r], n);
                                            return n
                                        }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : _e(g, d, e, a, l), v = n ? i || (o ? e : h || r) ? [] : s : m;
                                        if (n && n(m, v, a, l),
                                            r)
                                            for (u = _e(v, f),
                                                     r(u, [], a, l),
                                                     c = u.length; c--; )
                                                (p = u[c]) && (v[f[c]] = !(m[f[c]] = p));
                                        if (o) {
                                            if (i || e) {
                                                if (i) {
                                                    for (u = [],
                                                             c = v.length; c--; )
                                                        (p = v[c]) && u.push(m[c] = p);
                                                    i(null, v = [], u, l)
                                                }
                                                for (c = v.length; c--; )
                                                    (p = v[c]) && (u = i ? N(o, p) : d[c]) > -1 && (o[u] = !(s[u] = p))
                                            }
                                        } else
                                            v = _e(v === s ? v.splice(h, v.length) : v),
                                                i ? i(null, s, v, l) : q.apply(s, v)
                                    }
                                ))
                        }
                        function Ae(e) {
                            for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = xe((function(e) {
                                    return e === t
                                }
                            ), a, !0), p = xe((function(e) {
                                    return N(t, e) > -1
                                }
                            ), a, !0), d = [function(e, n, r) {
                                var i = !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
                                return t = null,
                                    i
                            }
                            ]; l < o; l++)
                                if (n = r.relative[e[l].type])
                                    d = [xe(we(d), n)];
                                else {
                                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                                        for (i = ++l; i < o && !r.relative[e[i].type]; i++)
                                            ;
                                        return Ce(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(z, "$1"), n, l < i && Ae(e.slice(l, i)), i < o && Ae(e = e.slice(i)), i < o && be(e))
                                    }
                                    d.push(n)
                                }
                            return we(d)
                        }
                        return ye.prototype = r.filters = r.pseudos,
                            r.setFilters = new ye,
                            s = ae.tokenize = function(e, t) {
                                var n, i, o, s, a, l, u, c = T[e + " "];
                                if (c)
                                    return t ? 0 : c.slice(0);
                                for (a = e,
                                         l = [],
                                         u = r.preFilter; a; ) {
                                    for (s in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                                        l.push(o = [])),
                                        n = !1,
                                    (i = B.exec(a)) && (n = i.shift(),
                                        o.push({
                                            value: n,
                                            type: i[0].replace(z, " ")
                                        }),
                                        a = a.slice(n.length)),
                                        r.filter)
                                        !(i = X[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(),
                                            o.push({
                                                value: n,
                                                type: s,
                                                matches: i
                                            }),
                                            a = a.slice(n.length));
                                    if (!n)
                                        break
                                }
                                return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
                            }
                            ,
                            a = ae.compile = function(e, t) {
                                var n, i = [], o = [], a = $[e + " "];
                                if (!a) {
                                    for (t || (t = s(e)),
                                             n = t.length; n--; )
                                        (a = Ae(t[n]))[x] ? i.push(a) : o.push(a);
                                    (a = $(e, function(e, t) {
                                        var n = t.length > 0
                                            , i = e.length > 0
                                            , o = function(o, s, a, l, c) {
                                            var p, h, m, v = 0, y = "0", b = o && [], x = [], w = u, C = o || i && r.find.TAG("*", c), A = _ += null == w ? 1 : Math.random() || .1, T = C.length;
                                            for (c && (u = s == f || s || c); y !== T && null != (p = C[y]); y++) {
                                                if (i && p) {
                                                    for (h = 0,
                                                         s || p.ownerDocument == f || (d(p),
                                                             a = !g); m = e[h++]; )
                                                        if (m(p, s || f, a)) {
                                                            l.push(p);
                                                            break
                                                        }
                                                    c && (_ = A)
                                                }
                                                n && ((p = !m && p) && v--,
                                                o && b.push(p))
                                            }
                                            if (v += y,
                                            n && y !== v) {
                                                for (h = 0; m = t[h++]; )
                                                    m(b, x, s, a);
                                                if (o) {
                                                    if (v > 0)
                                                        for (; y--; )
                                                            b[y] || x[y] || (x[y] = j.call(l));
                                                    x = _e(x)
                                                }
                                                q.apply(l, x),
                                                c && !o && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                            }
                                            return c && (_ = A,
                                                u = w),
                                                b
                                        };
                                        return n ? ue(o) : o
                                    }(o, i))).selector = e
                                }
                                return a
                            }
                            ,
                            l = ae.select = function(e, t, n, i) {
                                var o, l, u, c, p, d = "function" == typeof e && e, f = !i && s(e = d.selector || e);
                                if (n = n || [],
                                1 === f.length) {
                                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                                        if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                                            return n;
                                        d && (t = t.parentNode),
                                            e = e.slice(l.shift().value.length)
                                    }
                                    for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o],
                                        !r.relative[c = u.type]); )
                                        if ((p = r.find[c]) && (i = p(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                            if (l.splice(o, 1),
                                                !(e = i.length && be(l)))
                                                return q.apply(n, i),
                                                    n;
                                            break
                                        }
                                }
                                return (d || a(e, f))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t),
                                    n
                            }
                            ,
                            n.sortStable = x.split("").sort(E).join("") === x,
                            n.detectDuplicates = !!p,
                            d(),
                            n.sortDetached = ce((function(e) {
                                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                                }
                            )),
                        ce((function(e) {
                                return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                            }
                        )) || pe("type|href|height|width", (function(e, t, n) {
                                if (!n)
                                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                            }
                        )),
                        n.attributes && ce((function(e) {
                                return e.innerHTML = "<input/>",
                                    e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                            }
                        )) || pe("value", (function(e, t, n) {
                                if (!n && "input" === e.nodeName.toLowerCase())
                                    return e.defaultValue
                            }
                        )),
                        ce((function(e) {
                                return null == e.getAttribute("disabled")
                            }
                        )) || pe(P, (function(e, t, n) {
                                var r;
                                if (!n)
                                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                            }
                        )),
                            ae
                    }(n);
                C.find = T,
                    C.expr = T.selectors,
                    C.expr[":"] = C.expr.pseudos,
                    C.uniqueSort = C.unique = T.uniqueSort,
                    C.text = T.getText,
                    C.isXMLDoc = T.isXML,
                    C.contains = T.contains,
                    C.escapeSelector = T.escape;
                var $ = function(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && C(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                }
                    , S = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                    , E = C.expr.match.needsContext;
                function D(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function j(e, t, n) {
                    return v(t) ? C.grep(e, (function(e, r) {
                            return !!t.call(e, r, e) !== n
                        }
                    )) : t.nodeType ? C.grep(e, (function(e) {
                            return e === t !== n
                        }
                    )) : "string" != typeof t ? C.grep(e, (function(e) {
                            return c.call(t, e) > -1 !== n
                        }
                    )) : C.filter(t, e, n)
                }
                C.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                        1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                                return 1 === e.nodeType
                            }
                        )))
                }
                    ,
                    C.fn.extend({
                        find: function(e) {
                            var t, n, r = this.length, i = this;
                            if ("string" != typeof e)
                                return this.pushStack(C(e).filter((function() {
                                        for (t = 0; t < r; t++)
                                            if (C.contains(i[t], this))
                                                return !0
                                    }
                                )));
                            for (n = this.pushStack([]),
                                     t = 0; t < r; t++)
                                C.find(e, i[t], n);
                            return r > 1 ? C.uniqueSort(n) : n
                        },
                        filter: function(e) {
                            return this.pushStack(j(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(j(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!j(this, "string" == typeof e && E.test(e) ? C(e) : e || [], !1).length
                        }
                    });
                var O, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (C.fn.init = function(e, t, n) {
                        var r, i;
                        if (!e)
                            return this;
                        if (n = n || O,
                        "string" == typeof e) {
                            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t)
                                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (t = t instanceof C ? t[0] : t,
                                    C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                                k.test(r[1]) && C.isPlainObject(t))
                                    for (r in t)
                                        v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            }
                            return (i = b.getElementById(r[2])) && (this[0] = i,
                                this.length = 1),
                                this
                        }
                        return e.nodeType ? (this[0] = e,
                            this.length = 1,
                            this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
                    }
                ).prototype = C.fn,
                    O = C(b);
                var L = /^(?:parents|prev(?:Until|All))/
                    , N = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function P(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; )
                        ;
                    return e
                }
                C.fn.extend({
                    has: function(e) {
                        var t = C(e, this)
                            , n = t.length;
                        return this.filter((function() {
                                for (var e = 0; e < n; e++)
                                    if (C.contains(this, t[e]))
                                        return !0
                            }
                        ))
                    },
                    closest: function(e, t) {
                        var n, r = 0, i = this.length, o = [], s = "string" != typeof e && C(e);
                        if (!E.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? c.call(C(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                    C.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return $(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return $(e, "parentNode", n)
                        },
                        next: function(e) {
                            return P(e, "nextSibling")
                        },
                        prev: function(e) {
                            return P(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return $(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return $(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return $(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return $(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return S((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return S(e.firstChild)
                        },
                        contents: function(e) {
                            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e),
                                C.merge([], e.childNodes))
                        }
                    }, (function(e, t) {
                            C.fn[e] = function(n, r) {
                                var i = C.map(this, t, n);
                                return "Until" !== e.slice(-5) && (r = n),
                                r && "string" == typeof r && (i = C.filter(r, i)),
                                this.length > 1 && (N[e] || C.uniqueSort(i),
                                L.test(e) && i.reverse()),
                                    this.pushStack(i)
                            }
                        }
                    ));
                var H = /[^\x20\t\r\n\f]+/g;
                function I(e) {
                    return e
                }
                function R(e) {
                    throw e
                }
                function M(e, t, n, r) {
                    var i;
                    try {
                        e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                C.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return C.each(e.match(H) || [], (function(e, n) {
                                t[n] = !0
                            }
                        )),
                            t
                    }(e) : C.extend({}, e);
                    var t, n, r, i, o = [], s = [], a = -1, l = function() {
                        for (i = i || e.once,
                                 r = t = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < o.length; )
                                !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length,
                                    n = !1);
                        e.memory || (n = !1),
                            t = !1,
                        i && (o = n ? [] : "")
                    }, u = {
                        add: function() {
                            return o && (n && !t && (a = o.length - 1,
                                s.push(n)),
                                function t(n) {
                                    C.each(n, (function(n, r) {
                                            v(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== _(r) && t(r)
                                        }
                                    ))
                                }(arguments),
                            n && !t && l()),
                                this
                        },
                        remove: function() {
                            return C.each(arguments, (function(e, t) {
                                    for (var n; (n = C.inArray(t, o, n)) > -1; )
                                        o.splice(n, 1),
                                        n <= a && a--
                                }
                            )),
                                this
                        },
                        has: function(e) {
                            return e ? C.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []),
                                this
                        },
                        disable: function() {
                            return i = s = [],
                                o = n = "",
                                this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = s = [],
                            n || t || (o = n = ""),
                                this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                                s.push(n),
                            t || l()),
                                this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments),
                                this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                    return u
                }
                    ,
                    C.extend({
                        Deferred: function(e) {
                            var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                                , r = "pending"
                                , i = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments),
                                        this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return C.Deferred((function(n) {
                                            C.each(t, (function(t, r) {
                                                    var i = v(e[r[4]]) && e[r[4]];
                                                    o[r[1]]((function() {
                                                            var e = i && i.apply(this, arguments);
                                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                                        }
                                                    ))
                                                }
                                            )),
                                                e = null
                                        }
                                    )).promise()
                                },
                                then: function(e, r, i) {
                                    var o = 0;
                                    function s(e, t, r, i) {
                                        return function() {
                                            var a = this
                                                , l = arguments
                                                , u = function() {
                                                    var n, u;
                                                    if (!(e < o)) {
                                                        if ((n = r.apply(a, l)) === t.promise())
                                                            throw new TypeError("Thenable self-resolution");
                                                        u = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                                            v(u) ? i ? u.call(n, s(o, t, I, i), s(o, t, R, i)) : (o++,
                                                                u.call(n, s(o, t, I, i), s(o, t, R, i), s(o, t, I, t.notifyWith))) : (r !== I && (a = void 0,
                                                                l = [n]),
                                                                (i || t.resolveWith)(a, l))
                                                    }
                                                }
                                                , c = i ? u : function() {
                                                    try {
                                                        u()
                                                    } catch (n) {
                                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace),
                                                        e + 1 >= o && (r !== R && (a = void 0,
                                                            l = [n]),
                                                            t.rejectWith(a, l))
                                                    }
                                                }
                                            ;
                                            e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                                                n.setTimeout(c))
                                        }
                                    }
                                    return C.Deferred((function(n) {
                                            t[0][3].add(s(0, n, v(i) ? i : I, n.notifyWith)),
                                                t[1][3].add(s(0, n, v(e) ? e : I)),
                                                t[2][3].add(s(0, n, v(r) ? r : R))
                                        }
                                    )).promise()
                                },
                                promise: function(e) {
                                    return null != e ? C.extend(e, i) : i
                                }
                            }
                                , o = {};
                            return C.each(t, (function(e, n) {
                                    var s = n[2]
                                        , a = n[5];
                                    i[n[1]] = s.add,
                                    a && s.add((function() {
                                            r = a
                                        }
                                    ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                                        s.add(n[3].fire),
                                        o[n[0]] = function() {
                                            return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                                                this
                                        }
                                        ,
                                        o[n[0] + "With"] = s.fireWith
                                }
                            )),
                                i.promise(o),
                            e && e.call(o, o),
                                o
                        },
                        when: function(e) {
                            var t = arguments.length
                                , n = t
                                , r = Array(n)
                                , i = a.call(arguments)
                                , o = C.Deferred()
                                , s = function(e) {
                                return function(n) {
                                    r[e] = this,
                                        i[e] = arguments.length > 1 ? a.call(arguments) : n,
                                    --t || o.resolveWith(r, i)
                                }
                            };
                            if (t <= 1 && (M(e, o.done(s(n)).resolve, o.reject, !t),
                            "pending" === o.state() || v(i[n] && i[n].then)))
                                return o.then();
                            for (; n--; )
                                M(i[n], s(n), o.reject);
                            return o.promise()
                        }
                    });
                var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                C.Deferred.exceptionHook = function(e, t) {
                    n.console && n.console.warn && e && U.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
                    ,
                    C.readyException = function(e) {
                        n.setTimeout((function() {
                                throw e
                            }
                        ))
                    }
                ;
                var z = C.Deferred();
                function W() {
                    b.removeEventListener("DOMContentLoaded", W),
                        n.removeEventListener("load", W),
                        C.ready()
                }
                C.fn.ready = function(e) {
                    return z.then(e).catch((function(e) {
                            C.readyException(e)
                        }
                    )),
                        this
                }
                    ,
                    C.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0,
                            !0 !== e && --C.readyWait > 0 || z.resolveWith(b, [C]))
                        }
                    }),
                    C.ready.then = z.then,
                    "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", W),
                        n.addEventListener("load", W));
                var B = function(e, t, n, r, i, o, s) {
                    var a = 0
                        , l = e.length
                        , u = null == n;
                    if ("object" === _(n))
                        for (a in i = !0,
                            n)
                            B(e, t, a, n[a], !0, o, s);
                    else if (void 0 !== r && (i = !0,
                    v(r) || (s = !0),
                    u && (s ? (t.call(e, r),
                        t = null) : (u = t,
                            t = function(e, t, n) {
                                return u.call(C(e), n)
                            }
                    )),
                        t))
                        for (; a < l; a++)
                            t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                    return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
                }
                    , F = /^-ms-/
                    , G = /-([a-z])/g;
                function Y(e, t) {
                    return t.toUpperCase()
                }
                function X(e) {
                    return e.replace(F, "ms-").replace(G, Y)
                }
                var K = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
                function V() {
                    this.expando = C.expando + V.uid++
                }
                V.uid = 1,
                    V.prototype = {
                        cache: function(e) {
                            var t = e[this.expando];
                            return t || (t = {},
                            K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))),
                                t
                        },
                        set: function(e, t, n) {
                            var r, i = this.cache(e);
                            if ("string" == typeof t)
                                i[X(t)] = n;
                            else
                                for (r in t)
                                    i[X(r)] = t[r];
                            return i
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
                        },
                        access: function(e, t, n) {
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                                void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, r = e[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(H) || []).length;
                                    for (; n--; )
                                        delete r[t[n]]
                                }
                                (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !C.isEmptyObject(t)
                        }
                    };
                var Q = new V
                    , Z = new V
                    , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                    , ee = /[A-Z]/g;
                function te(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
                        "string" == typeof (n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            Z.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                C.extend({
                    hasData: function(e) {
                        return Z.hasData(e) || Q.hasData(e)
                    },
                    data: function(e, t, n) {
                        return Z.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        Z.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return Q.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        Q.remove(e, t)
                    }
                }),
                    C.fn.extend({
                        data: function(e, t) {
                            var n, r, i, o = this[0], s = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (i = Z.get(o),
                                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                    for (n = s.length; n--; )
                                        s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = X(r.slice(5)),
                                            te(o, r, i[r]));
                                    Q.set(o, "hasDataAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof e ? this.each((function() {
                                    Z.set(this, e)
                                }
                            )) : B(this, (function(t) {
                                    var n;
                                    if (o && void 0 === t)
                                        return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                                    this.each((function() {
                                            Z.set(this, e, t)
                                        }
                                    ))
                                }
                            ), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each((function() {
                                    Z.remove(this, e)
                                }
                            ))
                        }
                    }),
                    C.extend({
                        queue: function(e, t, n) {
                            var r;
                            if (e)
                                return t = (t || "fx") + "queue",
                                    r = Q.get(e, t),
                                n && (!r || Array.isArray(n) ? r = Q.access(e, t, C.makeArray(n)) : r.push(n)),
                                r || []
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = C.queue(e, t)
                                , r = n.length
                                , i = n.shift()
                                , o = C._queueHooks(e, t);
                            "inprogress" === i && (i = n.shift(),
                                r--),
                            i && ("fx" === t && n.unshift("inprogress"),
                                delete o.stop,
                                i.call(e, (function() {
                                        C.dequeue(e, t)
                                    }
                                ), o)),
                            !r && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return Q.get(e, n) || Q.access(e, n, {
                                empty: C.Callbacks("once memory").add((function() {
                                        Q.remove(e, [t + "queue", n])
                                    }
                                ))
                            })
                        }
                    }),
                    C.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e,
                                e = "fx",
                                n--),
                                arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                        var n = C.queue(this, e, t);
                                        C._queueHooks(this, e),
                                        "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                                    }
                                ))
                        },
                        dequeue: function(e) {
                            return this.each((function() {
                                    C.dequeue(this, e)
                                }
                            ))
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, r = 1, i = C.Deferred(), o = this, s = this.length, a = function() {
                                --r || i.resolveWith(o, [o])
                            };
                            for ("string" != typeof e && (t = e,
                                e = void 0),
                                     e = e || "fx"; s--; )
                                (n = Q.get(o[s], e + "queueHooks")) && n.empty && (r++,
                                    n.empty.add(a));
                            return a(),
                                i.promise(t)
                        }
                    });
                var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                    , re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
                    , ie = ["Top", "Right", "Bottom", "Left"]
                    , oe = b.documentElement
                    , se = function(e) {
                    return C.contains(e.ownerDocument, e)
                }
                    , ae = {
                    composed: !0
                };
                oe.getRootNode && (se = function(e) {
                        return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
                    }
                );
                var le = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === C.css(e, "display")
                };
                function ue(e, t, n, r) {
                    var i, o, s = 20, a = r ? function() {
                            return r.cur()
                        }
                        : function() {
                            return C.css(e, t, "")
                        }
                        , l = a(), u = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && re.exec(C.css(e, t));
                    if (c && c[3] !== u) {
                        for (l /= 2,
                                 u = u || c[3],
                                 c = +l || 1; s--; )
                            C.style(e, t, c + u),
                            (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                                c /= o;
                        c *= 2,
                            C.style(e, t, c + u),
                            n = n || []
                    }
                    return n && (c = +c || +l || 0,
                        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = u,
                        r.start = c,
                        r.end = i)),
                        i
                }
                var ce = {};
                function pe(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, i = ce[r];
                    return i || (t = n.body.appendChild(n.createElement(r)),
                        i = C.css(t, "display"),
                        t.parentNode.removeChild(t),
                    "none" === i && (i = "block"),
                        ce[r] = i,
                        i)
                }
                function de(e, t) {
                    for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
                        (r = e[o]).style && (n = r.style.display,
                            t ? ("none" === n && (i[o] = Q.get(r, "display") || null,
                            i[o] || (r.style.display = "")),
                            "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none",
                                Q.set(r, "display", n)));
                    for (o = 0; o < s; o++)
                        null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                C.fn.extend({
                    show: function() {
                        return de(this, !0)
                    },
                    hide: function() {
                        return de(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                le(this) ? C(this).show() : C(this).hide()
                            }
                        ))
                    }
                });
                var fe, he, ge = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ve = /^$|^module$|\/(?:java|ecma)script/i;
                fe = b.createDocumentFragment().appendChild(b.createElement("div")),
                    (he = b.createElement("input")).setAttribute("type", "radio"),
                    he.setAttribute("checked", "checked"),
                    he.setAttribute("name", "t"),
                    fe.appendChild(he),
                    m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    fe.innerHTML = "<textarea>x</textarea>",
                    m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue,
                    fe.innerHTML = "<option></option>",
                    m.option = !!fe.lastChild;
                var ye = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                function be(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                        void 0 === t || t && D(e, t) ? C.merge([e], n) : n
                }
                function xe(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
                }
                ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
                    ye.th = ye.td,
                m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
                var we = /<|&#?\w+;/;
                function _e(e, t, n, r, i) {
                    for (var o, s, a, l, u, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
                        if ((o = e[f]) || 0 === o)
                            if ("object" === _(o))
                                C.merge(d, o.nodeType ? [o] : o);
                            else if (we.test(o)) {
                                for (s = s || p.appendChild(t.createElement("div")),
                                         a = (me.exec(o) || ["", ""])[1].toLowerCase(),
                                         l = ye[a] || ye._default,
                                         s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                                         c = l[0]; c--; )
                                    s = s.lastChild;
                                C.merge(d, s.childNodes),
                                    (s = p.firstChild).textContent = ""
                            } else
                                d.push(t.createTextNode(o));
                    for (p.textContent = "",
                             f = 0; o = d[f++]; )
                        if (r && C.inArray(o, r) > -1)
                            i && i.push(o);
                        else if (u = se(o),
                            s = be(p.appendChild(o), "script"),
                        u && xe(s),
                            n)
                            for (c = 0; o = s[c++]; )
                                ve.test(o.type || "") && n.push(o);
                    return p
                }
                var Ce = /^key/
                    , Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                    , Te = /^([^.]*)(?:\.(.+)|)/;
                function $e() {
                    return !0
                }
                function Se() {
                    return !1
                }
                function Ee(e, t) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }
                function De(e, t, n, r, i, o) {
                    var s, a;
                    if ("object" == typeof t) {
                        for (a in "string" != typeof n && (r = r || n,
                            n = void 0),
                            t)
                            De(e, a, n, r, t[a], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n,
                        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                        r = void 0) : (i = r,
                        r = n,
                        n = void 0)),
                    !1 === i)
                        i = Se;
                    else if (!i)
                        return e;
                    return 1 === o && (s = i,
                        (i = function(e) {
                                return C().off(e),
                                    s.apply(this, arguments)
                            }
                        ).guid = s.guid || (s.guid = C.guid++)),
                        e.each((function() {
                                C.event.add(this, t, i, r, n)
                            }
                        ))
                }
                function ke(e, t, n) {
                    n ? (Q.set(e, t, !1),
                        C.event.add(e, t, {
                            namespace: !1,
                            handler: function(e) {
                                var r, i, o = Q.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (o.length)
                                        (C.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (o = a.call(arguments),
                                        Q.set(this, t, o),
                                        r = n(this, t),
                                        this[t](),
                                        o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {},
                                    o !== i)
                                        return e.stopImmediatePropagation(),
                                            e.preventDefault(),
                                            i.value
                                } else
                                    o.length && (Q.set(this, t, {
                                        value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                                    }),
                                        e.stopImmediatePropagation())
                            }
                        })) : void 0 === Q.get(e, t) && C.event.add(e, t, $e)
                }
                C.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, s, a, l, u, c, p, d, f, h, g, m = Q.get(e);
                        if (K(e))
                            for (n.handler && (n = (o = n).handler,
                                i = o.selector),
                                 i && C.find.matchesSelector(oe, i),
                                 n.guid || (n.guid = C.guid++),
                                 (l = m.events) || (l = m.events = Object.create(null)),
                                 (s = m.handle) || (s = m.handle = function(t) {
                                         return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                                     }
                                 ),
                                     u = (t = (t || "").match(H) || [""]).length; u--; )
                                f = g = (a = Te.exec(t[u]) || [])[1],
                                    h = (a[2] || "").split(".").sort(),
                                f && (p = C.event.special[f] || {},
                                    f = (i ? p.delegateType : p.bindType) || f,
                                    p = C.event.special[f] || {},
                                    c = C.extend({
                                        type: f,
                                        origType: g,
                                        data: r,
                                        handler: n,
                                        guid: n.guid,
                                        selector: i,
                                        needsContext: i && C.expr.match.needsContext.test(i),
                                        namespace: h.join(".")
                                    }, o),
                                (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                                p.setup && !1 !== p.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(f, s)),
                                p.add && (p.add.call(e, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                    C.event.global[f] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, s, a, l, u, c, p, d, f, h, g, m = Q.hasData(e) && Q.get(e);
                        if (m && (l = m.events)) {
                            for (u = (t = (t || "").match(H) || [""]).length; u--; )
                                if (f = g = (a = Te.exec(t[u]) || [])[1],
                                    h = (a[2] || "").split(".").sort(),
                                    f) {
                                    for (p = C.event.special[f] || {},
                                             d = l[f = (r ? p.delegateType : p.bindType) || f] || [],
                                             a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                             s = o = d.length; o--; )
                                        c = d[o],
                                        !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                                        c.selector && d.delegateCount--,
                                        p.remove && p.remove.call(e, c));
                                    s && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || C.removeEvent(e, f, m.handle),
                                        delete l[f])
                                } else
                                    for (f in l)
                                        C.event.remove(e, f + t[u], n, r, !0);
                            C.isEmptyObject(l) && Q.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, s, a = new Array(arguments.length), l = C.event.fix(e), u = (Q.get(this, "events") || Object.create(null))[l.type] || [], c = C.event.special[l.type] || {};
                        for (a[0] = l,
                                 t = 1; t < arguments.length; t++)
                            a[t] = arguments[t];
                        if (l.delegateTarget = this,
                        !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                            for (s = C.event.handlers.call(this, l, u),
                                     t = 0; (i = s[t++]) && !l.isPropagationStopped(); )
                                for (l.currentTarget = i.elem,
                                         n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                    l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                                        l.data = o.data,
                                    void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(),
                                        l.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, l),
                                l.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, s, a = [], l = t.delegateCount, u = e.target;
                        if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                            for (; u !== this; u = u.parentNode || this)
                                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                    for (o = [],
                                             s = {},
                                             n = 0; n < l; n++)
                                        void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length),
                                        s[i] && o.push(r);
                                    o.length && a.push({
                                        elem: u,
                                        handlers: o
                                    })
                                }
                        return u = this,
                        l < t.length && a.push({
                            elem: u,
                            handlers: t.slice(l)
                        }),
                            a
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(C.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(t) ? function() {
                                    if (this.originalEvent)
                                        return t(this.originalEvent)
                                }
                                : function() {
                                    if (this.originalEvent)
                                        return this.originalEvent[e]
                                }
                            ,
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[C.expando] ? e : new C.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && D(t, "input") && ke(t, "click", $e),
                                    !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && D(t, "input") && ke(t, "click"),
                                    !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return ge.test(t.type) && t.click && D(t, "input") && Q.get(t, "click") || D(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                },
                    C.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }
                    ,
                    C.Event = function(e, t) {
                        if (!(this instanceof C.Event))
                            return new C.Event(e,t);
                        e && e.type ? (this.originalEvent = e,
                            this.type = e.type,
                            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? $e : Se,
                            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                            this.currentTarget = e.currentTarget,
                            this.relatedTarget = e.relatedTarget) : this.type = e,
                        t && C.extend(this, t),
                            this.timeStamp = e && e.timeStamp || Date.now(),
                            this[C.expando] = !0
                    }
                    ,
                    C.Event.prototype = {
                        constructor: C.Event,
                        isDefaultPrevented: Se,
                        isPropagationStopped: Se,
                        isImmediatePropagationStopped: Se,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = $e,
                            e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = $e,
                            e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = $e,
                            e && !this.isSimulated && e.stopImmediatePropagation(),
                                this.stopPropagation()
                        }
                    },
                    C.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function(e) {
                            var t = e.button;
                            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ae.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                        }
                    }, C.event.addProp),
                    C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                            C.event.special[e] = {
                                setup: function() {
                                    return ke(this, e, Ee),
                                        !1
                                },
                                trigger: function() {
                                    return ke(this, e),
                                        !0
                                },
                                delegateType: t
                            }
                        }
                    )),
                    C.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(e, t) {
                            C.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function(e) {
                                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                                    return i && (i === r || C.contains(r, i)) || (e.type = o.origType,
                                        n = o.handler.apply(this, arguments),
                                        e.type = t),
                                        n
                                }
                            }
                        }
                    )),
                    C.fn.extend({
                        on: function(e, t, n, r) {
                            return De(this, e, t, n, r)
                        },
                        one: function(e, t, n, r) {
                            return De(this, e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, i;
                            if (e && e.preventDefault && e.handleObj)
                                return r = e.handleObj,
                                    C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                                    this;
                            if ("object" == typeof e) {
                                for (i in e)
                                    this.off(i, t, e[i]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t,
                                t = void 0),
                            !1 === n && (n = Se),
                                this.each((function() {
                                        C.event.remove(this, e, n, t)
                                    }
                                ))
                        }
                    });
                var je = /<script|<style|<link/i
                    , Oe = /checked\s*(?:[^=]|=\s*.checked.)/i
                    , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function Le(e, t) {
                    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
                }
                function Ne(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                        e
                }
                function Pe(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                        e
                }
                function He(e, t) {
                    var n, r, i, o, s, a;
                    if (1 === t.nodeType) {
                        if (Q.hasData(e) && (a = Q.get(e).events))
                            for (i in Q.remove(t, "handle events"),
                                a)
                                for (n = 0,
                                         r = a[i].length; n < r; n++)
                                    C.event.add(t, i, a[i][n]);
                        Z.hasData(e) && (o = Z.access(e),
                            s = C.extend({}, o),
                            Z.set(t, s))
                    }
                }
                function Ie(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
                function Re(e, t, n, r) {
                    t = l(t);
                    var i, o, s, a, u, c, p = 0, d = e.length, f = d - 1, h = t[0], g = v(h);
                    if (g || d > 1 && "string" == typeof h && !m.checkClone && Oe.test(h))
                        return e.each((function(i) {
                                var o = e.eq(i);
                                g && (t[0] = h.call(this, i, o.html())),
                                    Re(o, t, n, r)
                            }
                        ));
                    if (d && (o = (i = _e(t, e[0].ownerDocument, !1, e, r)).firstChild,
                    1 === i.childNodes.length && (i = o),
                    o || r)) {
                        for (a = (s = C.map(be(i, "script"), Ne)).length; p < d; p++)
                            u = i,
                            p !== f && (u = C.clone(u, !0, !0),
                            a && C.merge(s, be(u, "script"))),
                                n.call(e[p], u, p);
                        if (a)
                            for (c = s[s.length - 1].ownerDocument,
                                     C.map(s, Pe),
                                     p = 0; p < a; p++)
                                u = s[p],
                                ve.test(u.type || "") && !Q.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
                                    nonce: u.nonce || u.getAttribute("nonce")
                                }, c) : w(u.textContent.replace(qe, ""), u, c))
                    }
                    return e
                }
                function Me(e, t, n) {
                    for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                        n || 1 !== r.nodeType || C.cleanData(be(r)),
                        r.parentNode && (n && se(r) && xe(be(r, "script")),
                            r.parentNode.removeChild(r));
                    return e
                }
                C.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, s, a = e.cloneNode(!0), l = se(e);
                        if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                            for (s = be(a),
                                     r = 0,
                                     i = (o = be(e)).length; r < i; r++)
                                Ie(o[r], s[r]);
                        if (t)
                            if (n)
                                for (o = o || be(e),
                                         s = s || be(a),
                                         r = 0,
                                         i = o.length; r < i; r++)
                                    He(o[r], s[r]);
                            else
                                He(e, a);
                        return (s = be(a, "script")).length > 0 && xe(s, !l && be(e, "script")),
                            a
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (K(n)) {
                                if (t = n[Q.expando]) {
                                    if (t.events)
                                        for (r in t.events)
                                            i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                    n[Q.expando] = void 0
                                }
                                n[Z.expando] && (n[Z.expando] = void 0)
                            }
                    }
                }),
                    C.fn.extend({
                        detach: function(e) {
                            return Me(this, e, !0)
                        },
                        remove: function(e) {
                            return Me(this, e)
                        },
                        text: function(e) {
                            return B(this, (function(e) {
                                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                        }
                                    ))
                                }
                            ), null, e, arguments.length)
                        },
                        append: function() {
                            return Re(this, arguments, (function(e) {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                                }
                            ))
                        },
                        prepend: function() {
                            return Re(this, arguments, (function(e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = Le(this, e);
                                        t.insertBefore(e, t.firstChild)
                                    }
                                }
                            ))
                        },
                        before: function() {
                            return Re(this, arguments, (function(e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this)
                                }
                            ))
                        },
                        after: function() {
                            return Re(this, arguments, (function(e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                                }
                            ))
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++)
                                1 === e.nodeType && (C.cleanData(be(e, !1)),
                                    e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e,
                                t = null == t ? e : t,
                                this.map((function() {
                                        return C.clone(this, e, t)
                                    }
                                ))
                        },
                        html: function(e) {
                            return B(this, (function(e) {
                                    var t = this[0] || {}
                                        , n = 0
                                        , r = this.length;
                                    if (void 0 === e && 1 === t.nodeType)
                                        return t.innerHTML;
                                    if ("string" == typeof e && !je.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                        e = C.htmlPrefilter(e);
                                        try {
                                            for (; n < r; n++)
                                                1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)),
                                                    t.innerHTML = e);
                                            t = 0
                                        } catch (e) {}
                                    }
                                    t && this.empty().append(e)
                                }
                            ), null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return Re(this, arguments, (function(t) {
                                    var n = this.parentNode;
                                    C.inArray(this, e) < 0 && (C.cleanData(be(this)),
                                    n && n.replaceChild(t, this))
                                }
                            ), e)
                        }
                    }),
                    C.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(e, t) {
                            C.fn[e] = function(e) {
                                for (var n, r = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++)
                                    n = s === o ? this : this.clone(!0),
                                        C(i[s])[t](n),
                                        u.apply(r, n.get());
                                return this.pushStack(r)
                            }
                        }
                    ));
                var Ue = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
                    , ze = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n),
                        t.getComputedStyle(e)
                }
                    , We = function(e, t, n) {
                    var r, i, o = {};
                    for (i in t)
                        o[i] = e.style[i],
                            e.style[i] = t[i];
                    for (i in r = n.call(e),
                        t)
                        e.style[i] = o[i];
                    return r
                }
                    , Be = new RegExp(ie.join("|"),"i");
                function Fe(e, t, n) {
                    var r, i, o, s, a = e.style;
                    return (n = n || ze(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = C.style(e, t)),
                    !m.pixelBoxStyles() && Ue.test(s) && Be.test(t) && (r = a.width,
                        i = a.minWidth,
                        o = a.maxWidth,
                        a.minWidth = a.maxWidth = a.width = s,
                        s = n.width,
                        a.width = r,
                        a.minWidth = i,
                        a.maxWidth = o)),
                        void 0 !== s ? s + "" : s
                }
                function Ge(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                !function() {
                    function e() {
                        if (c) {
                            u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                                oe.appendChild(u).appendChild(c);
                            var e = n.getComputedStyle(c);
                            r = "1%" !== e.top,
                                l = 12 === t(e.marginLeft),
                                c.style.right = "60%",
                                s = 36 === t(e.right),
                                i = 36 === t(e.width),
                                c.style.position = "absolute",
                                o = 12 === t(c.offsetWidth / 3),
                                oe.removeChild(u),
                                c = null
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var r, i, o, s, a, l, u = b.createElement("div"), c = b.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box",
                        c.cloneNode(!0).style.backgroundClip = "",
                        m.clearCloneStyle = "content-box" === c.style.backgroundClip,
                        C.extend(m, {
                            boxSizingReliable: function() {
                                return e(),
                                    i
                            },
                            pixelBoxStyles: function() {
                                return e(),
                                    s
                            },
                            pixelPosition: function() {
                                return e(),
                                    r
                            },
                            reliableMarginLeft: function() {
                                return e(),
                                    l
                            },
                            scrollboxSize: function() {
                                return e(),
                                    o
                            },
                            reliableTrDimensions: function() {
                                var e, t, r, i;
                                return null == a && (e = b.createElement("table"),
                                    t = b.createElement("tr"),
                                    r = b.createElement("div"),
                                    e.style.cssText = "position:absolute;left:-11111px",
                                    t.style.height = "1px",
                                    r.style.height = "9px",
                                    oe.appendChild(e).appendChild(t).appendChild(r),
                                    i = n.getComputedStyle(t),
                                    a = parseInt(i.height) > 3,
                                    oe.removeChild(e)),
                                    a
                            }
                        }))
                }();
                var Ye = ["Webkit", "Moz", "ms"]
                    , Xe = b.createElement("div").style
                    , Ke = {};
                function Ve(e) {
                    var t = C.cssProps[e] || Ke[e];
                    return t || (e in Xe ? e : Ke[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                            if ((e = Ye[n] + t)in Xe)
                                return e
                    }(e) || e)
                }
                var Qe = /^(none|table(?!-c[ea]).+)/
                    , Ze = /^--/
                    , Je = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                    , et = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function tt(e, t, n) {
                    var r = re.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function nt(e, t, n, r, i, o) {
                    var s = "width" === t ? 1 : 0
                        , a = 0
                        , l = 0;
                    if (n === (r ? "border" : "content"))
                        return 0;
                    for (; s < 4; s += 2)
                        "margin" === n && (l += C.css(e, n + ie[s], !0, i)),
                            r ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, i)),
                            "margin" !== n && (l -= C.css(e, "border" + ie[s] + "Width", !0, i))) : (l += C.css(e, "padding" + ie[s], !0, i),
                                "padding" !== n ? l += C.css(e, "border" + ie[s] + "Width", !0, i) : a += C.css(e, "border" + ie[s] + "Width", !0, i));
                    return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
                        l
                }
                function rt(e, t, n) {
                    var r = ze(e)
                        , i = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r)
                        , o = i
                        , s = Fe(e, t, r)
                        , a = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Ue.test(s)) {
                        if (!n)
                            return s;
                        s = "auto"
                    }
                    return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && D(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r),
                    (o = a in e) && (s = e[a])),
                    (s = parseFloat(s) || 0) + nt(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
                }
                function it(e, t, n, r, i) {
                    return new it.prototype.init(e,t,n,r,i)
                }
                C.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Fe(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, s, a = X(t), l = Ze.test(t), u = e.style;
                            if (l || (t = Ve(a)),
                                s = C.cssHooks[t] || C.cssHooks[a],
                            void 0 === n)
                                return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                            "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = ue(e, t, i),
                                o = "number"),
                            null != n && n == n && ("number" !== o || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")),
                            m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                            s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, s, a = X(t);
                        return Ze.test(t) || (t = Ve(a)),
                        (s = C.cssHooks[t] || C.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
                        void 0 === i && (i = Fe(e, t, r)),
                        "normal" === i && t in et && (i = et[t]),
                            "" === n || n ? (o = parseFloat(i),
                                !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }),
                    C.each(["height", "width"], (function(e, t) {
                            C.cssHooks[t] = {
                                get: function(e, n, r) {
                                    if (n)
                                        return !Qe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : We(e, Je, (function() {
                                                return rt(e, t, r)
                                            }
                                        ))
                                },
                                set: function(e, n, r) {
                                    var i, o = ze(e), s = !m.scrollboxSize() && "absolute" === o.position, a = (s || r) && "border-box" === C.css(e, "boxSizing", !1, o), l = r ? nt(e, t, r, a, o) : 0;
                                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)),
                                    l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                                        n = C.css(e, t)),
                                        tt(0, n, l)
                                }
                            }
                        }
                    )),
                    C.cssHooks.marginLeft = Ge(m.reliableMarginLeft, (function(e, t) {
                            if (t)
                                return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                                    marginLeft: 0
                                }, (function() {
                                        return e.getBoundingClientRect().left
                                    }
                                ))) + "px"
                        }
                    )),
                    C.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(e, t) {
                            C.cssHooks[e + t] = {
                                expand: function(n) {
                                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                                        i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                                    return i
                                }
                            },
                            "margin" !== e && (C.cssHooks[e + t].set = tt)
                        }
                    )),
                    C.fn.extend({
                        css: function(e, t) {
                            return B(this, (function(e, t, n) {
                                    var r, i, o = {}, s = 0;
                                    if (Array.isArray(t)) {
                                        for (r = ze(e),
                                                 i = t.length; s < i; s++)
                                            o[t[s]] = C.css(e, t[s], !1, r);
                                        return o
                                    }
                                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                                }
                            ), e, t, arguments.length > 1)
                        }
                    }),
                    C.Tween = it,
                    it.prototype = {
                        constructor: it,
                        init: function(e, t, n, r, i, o) {
                            this.elem = e,
                                this.prop = n,
                                this.easing = i || C.easing._default,
                                this.options = t,
                                this.start = this.now = this.cur(),
                                this.end = r,
                                this.unit = o || (C.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = it.propHooks[this.prop];
                            return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = it.propHooks[this.prop];
                            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                                this.now = (this.end - this.start) * t + this.start,
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                                n && n.set ? n.set(this) : it.propHooks._default.set(this),
                                this
                        }
                    },
                    it.prototype.init.prototype = it.prototype,
                    it.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function(e) {
                                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    },
                    it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    },
                    C.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    },
                    C.fx = it.prototype.init,
                    C.fx.step = {};
                var ot, st, at = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
                function ut() {
                    st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, C.fx.interval),
                        C.fx.tick())
                }
                function ct() {
                    return n.setTimeout((function() {
                            ot = void 0
                        }
                    )),
                        ot = Date.now()
                }
                function pt(e, t) {
                    var n, r = 0, i = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        i["margin" + (n = ie[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e),
                        i
                }
                function dt(e, t, n) {
                    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                        if (r = i[o].call(n, t, e))
                            return r
                }
                function ft(e, t, n) {
                    var r, i, o = 0, s = ft.prefilters.length, a = C.Deferred().always((function() {
                            delete l.elem
                        }
                    )), l = function() {
                        if (i)
                            return !1;
                        for (var t = ot || ct(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++)
                            u.tweens[o].run(r);
                        return a.notifyWith(e, [u, r, n]),
                            r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]),
                                a.resolveWith(e, [u]),
                                !1)
                    }, u = a.promise({
                        elem: e,
                        props: C.extend({}, t),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: ot || ct(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(r),
                                r
                        },
                        stop: function(t) {
                            var n = 0
                                , r = t ? u.tweens.length : 0;
                            if (i)
                                return this;
                            for (i = !0; n < r; n++)
                                u.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [u, 1, 0]),
                                a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                                this
                        }
                    }), c = u.props;
                    for (!function(e, t) {
                        var n, r, i, o, s;
                        for (n in e)
                            if (i = t[r = X(n)],
                                o = e[n],
                            Array.isArray(o) && (i = o[1],
                                o = e[n] = o[0]),
                            n !== r && (e[r] = o,
                                delete e[n]),
                            (s = C.cssHooks[r]) && "expand"in s)
                                for (n in o = s.expand(o),
                                    delete e[r],
                                    o)
                                    n in e || (e[n] = o[n],
                                        t[n] = i);
                            else
                                t[r] = i
                    }(c, u.opts.specialEasing); o < s; o++)
                        if (r = ft.prefilters[o].call(u, e, c, u.opts))
                            return v(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                                r;
                    return C.map(c, dt, u),
                    v(u.opts.start) && u.opts.start.call(e, u),
                        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                        C.fx.timer(C.extend(l, {
                            elem: e,
                            anim: u,
                            queue: u.opts.queue
                        })),
                        u
                }
                C.Animation = C.extend(ft, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, re.exec(t), n),
                                n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        v(e) ? (t = e,
                            e = ["*"]) : e = e.match(H);
                        for (var n, r = 0, i = e.length; r < i; r++)
                            n = e[r],
                                ft.tweeners[n] = ft.tweeners[n] || [],
                                ft.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, s, a, l, u, c, p = "width"in t || "height"in t, d = this, f = {}, h = e.style, g = e.nodeType && le(e), m = Q.get(e, "fxshow");
                        for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                                a = s.empty.fire,
                                s.empty.fire = function() {
                                    s.unqueued || a()
                                }
                        ),
                            s.unqueued++,
                            d.always((function() {
                                    d.always((function() {
                                            s.unqueued--,
                                            C.queue(e, "fx").length || s.empty.fire()
                                        }
                                    ))
                                }
                            ))),
                            t)
                            if (i = t[r],
                                at.test(i)) {
                                if (delete t[r],
                                    o = o || "toggle" === i,
                                i === (g ? "hide" : "show")) {
                                    if ("show" !== i || !m || void 0 === m[r])
                                        continue;
                                    g = !0
                                }
                                f[r] = m && m[r] || C.style(e, r)
                            }
                        if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                            for (r in p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                            null == (u = m && m.display) && (u = Q.get(e, "display")),
                            "none" === (c = C.css(e, "display")) && (u ? c = u : (de([e], !0),
                                u = e.style.display || u,
                                c = C.css(e, "display"),
                                de([e]))),
                            ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (d.done((function() {
                                    h.display = u
                                }
                            )),
                            null == u && (c = h.display,
                                u = "none" === c ? "" : c)),
                                h.display = "inline-block")),
                            n.overflow && (h.overflow = "hidden",
                                d.always((function() {
                                        h.overflow = n.overflow[0],
                                            h.overflowX = n.overflow[1],
                                            h.overflowY = n.overflow[2]
                                    }
                                ))),
                                l = !1,
                                f)
                                l || (m ? "hidden"in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                                    display: u
                                }),
                                o && (m.hidden = !g),
                                g && de([e], !0),
                                    d.done((function() {
                                            for (r in g || de([e]),
                                                Q.remove(e, "fxshow"),
                                                f)
                                                C.style(e, r, f[r])
                                        }
                                    ))),
                                    l = dt(g ? m[r] : 0, r, d),
                                r in m || (m[r] = l.start,
                                g && (l.end = l.start,
                                    l.start = 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
                    }
                }),
                    C.speed = function(e, t, n) {
                        var r = e && "object" == typeof e ? C.extend({}, e) : {
                            complete: n || !n && t || v(e) && e,
                            duration: e,
                            easing: n && t || t && !v(t) && t
                        };
                        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
                        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                            r.old = r.complete,
                            r.complete = function() {
                                v(r.old) && r.old.call(this),
                                r.queue && C.dequeue(this, r.queue)
                            }
                            ,
                            r
                    }
                    ,
                    C.fn.extend({
                        fadeTo: function(e, t, n, r) {
                            return this.filter(le).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, n, r)
                        },
                        animate: function(e, t, n, r) {
                            var i = C.isEmptyObject(e)
                                , o = C.speed(t, n, r)
                                , s = function() {
                                var t = ft(this, C.extend({}, e), o);
                                (i || Q.get(this, "finish")) && t.stop(!0)
                            };
                            return s.finish = s,
                                i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                        },
                        stop: function(e, t, n) {
                            var r = function(e) {
                                var t = e.stop;
                                delete e.stop,
                                    t(n)
                            };
                            return "string" != typeof e && (n = t,
                                t = e,
                                e = void 0),
                            t && this.queue(e || "fx", []),
                                this.each((function() {
                                        var t = !0
                                            , i = null != e && e + "queueHooks"
                                            , o = C.timers
                                            , s = Q.get(this);
                                        if (i)
                                            s[i] && s[i].stop && r(s[i]);
                                        else
                                            for (i in s)
                                                s[i] && s[i].stop && lt.test(i) && r(s[i]);
                                        for (i = o.length; i--; )
                                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                                t = !1,
                                                o.splice(i, 1));
                                        !t && n || C.dequeue(this, e)
                                    }
                                ))
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"),
                                this.each((function() {
                                        var t, n = Q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = C.timers, s = r ? r.length : 0;
                                        for (n.finish = !0,
                                                 C.queue(this, e, []),
                                             i && i.stop && i.stop.call(this, !0),
                                                 t = o.length; t--; )
                                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                                o.splice(t, 1));
                                        for (t = 0; t < s; t++)
                                            r[t] && r[t].finish && r[t].finish.call(this);
                                        delete n.finish
                                    }
                                ))
                        }
                    }),
                    C.each(["toggle", "show", "hide"], (function(e, t) {
                            var n = C.fn[t];
                            C.fn[t] = function(e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, i)
                            }
                        }
                    )),
                    C.each({
                        slideDown: pt("show"),
                        slideUp: pt("hide"),
                        slideToggle: pt("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function(e, t) {
                            C.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        }
                    )),
                    C.timers = [],
                    C.fx.tick = function() {
                        var e, t = 0, n = C.timers;
                        for (ot = Date.now(); t < n.length; t++)
                            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || C.fx.stop(),
                            ot = void 0
                    }
                    ,
                    C.fx.timer = function(e) {
                        C.timers.push(e),
                            C.fx.start()
                    }
                    ,
                    C.fx.interval = 13,
                    C.fx.start = function() {
                        st || (st = !0,
                            ut())
                    }
                    ,
                    C.fx.stop = function() {
                        st = null
                    }
                    ,
                    C.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    },
                    C.fn.delay = function(e, t) {
                        return e = C.fx && C.fx.speeds[e] || e,
                            t = t || "fx",
                            this.queue(t, (function(t, r) {
                                    var i = n.setTimeout(t, e);
                                    r.stop = function() {
                                        n.clearTimeout(i)
                                    }
                                }
                            ))
                    }
                    ,
                    function() {
                        var e = b.createElement("input")
                            , t = b.createElement("select").appendChild(b.createElement("option"));
                        e.type = "checkbox",
                            m.checkOn = "" !== e.value,
                            m.optSelected = t.selected,
                            (e = b.createElement("input")).value = "t",
                            e.type = "radio",
                            m.radioValue = "t" === e.value
                    }();
                var ht, gt = C.expr.attrHandle;
                C.fn.extend({
                    attr: function(e, t) {
                        return B(this, C.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                                C.removeAttr(this, e)
                            }
                        ))
                    }
                }),
                    C.extend({
                        attr: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o)
                                return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)),
                                    void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                                        n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!m.radioValue && "radio" === t && D(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t),
                                        n && (e.value = n),
                                            t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r = 0, i = t && t.match(H);
                            if (i && 1 === e.nodeType)
                                for (; n = i[r++]; )
                                    e.removeAttribute(n)
                        }
                    }),
                    ht = {
                        set: function(e, t, n) {
                            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
                                n
                        }
                    },
                    C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                            var n = gt[t] || C.find.attr;
                            gt[t] = function(e, t, r) {
                                var i, o, s = t.toLowerCase();
                                return r || (o = gt[s],
                                    gt[s] = i,
                                    i = null != n(e, t, r) ? s : null,
                                    gt[s] = o),
                                    i
                            }
                        }
                    ));
                var mt = /^(?:input|select|textarea|button)$/i
                    , vt = /^(?:a|area)$/i;
                function yt(e) {
                    return (e.match(H) || []).join(" ")
                }
                function bt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function xt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
                }
                C.fn.extend({
                    prop: function(e, t) {
                        return B(this, C.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                                delete this[C.propFix[e] || e]
                            }
                        ))
                    }
                }),
                    C.extend({
                        prop: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o)
                                return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                                    i = C.propHooks[t]),
                                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = C.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }),
                m.optSelected || (C.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                            null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                            C.propFix[this.toLowerCase()] = this
                        }
                    )),
                    C.fn.extend({
                        addClass: function(e) {
                            var t, n, r, i, o, s, a, l = 0;
                            if (v(e))
                                return this.each((function(t) {
                                        C(this).addClass(e.call(this, t, bt(this)))
                                    }
                                ));
                            if ((t = xt(e)).length)
                                for (; n = this[l++]; )
                                    if (i = bt(n),
                                        r = 1 === n.nodeType && " " + yt(i) + " ") {
                                        for (s = 0; o = t[s++]; )
                                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                        i !== (a = yt(r)) && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        removeClass: function(e) {
                            var t, n, r, i, o, s, a, l = 0;
                            if (v(e))
                                return this.each((function(t) {
                                        C(this).removeClass(e.call(this, t, bt(this)))
                                    }
                                ));
                            if (!arguments.length)
                                return this.attr("class", "");
                            if ((t = xt(e)).length)
                                for (; n = this[l++]; )
                                    if (i = bt(n),
                                        r = 1 === n.nodeType && " " + yt(i) + " ") {
                                        for (s = 0; o = t[s++]; )
                                            for (; r.indexOf(" " + o + " ") > -1; )
                                                r = r.replace(" " + o + " ", " ");
                                        i !== (a = yt(r)) && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e
                                , r = "string" === n || Array.isArray(e);
                            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                                    C(this).toggleClass(e.call(this, n, bt(this), t), t)
                                }
                            )) : this.each((function() {
                                    var t, i, o, s;
                                    if (r)
                                        for (i = 0,
                                                 o = C(this),
                                                 s = xt(e); t = s[i++]; )
                                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                    else
                                        void 0 !== e && "boolean" !== n || ((t = bt(this)) && Q.set(this, "__className__", t),
                                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                                }
                            ))
                        },
                        hasClass: function(e) {
                            var t, n, r = 0;
                            for (t = " " + e + " "; n = this[r++]; )
                                if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                                    return !0;
                            return !1
                        }
                    });
                var wt = /\r/g;
                C.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = v(e),
                            this.each((function(n) {
                                    var i;
                                    1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(e) {
                                            return null == e ? "" : e + ""
                                        }
                                    ))),
                                    (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                }
                            ))) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                    }
                }),
                    C.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = C.find.attr(e, "value");
                                    return null != t ? t : yt(C.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : i.length;
                                    for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                            if (t = C(n).val(),
                                                s)
                                                return t;
                                            a.push(t)
                                        }
                                    return a
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--; )
                                        ((r = i[s]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1),
                                        o
                                }
                            }
                        }
                    }),
                    C.each(["radio", "checkbox"], (function() {
                            C.valHooks[this] = {
                                set: function(e, t) {
                                    if (Array.isArray(t))
                                        return e.checked = C.inArray(C(e).val(), t) > -1
                                }
                            },
                            m.checkOn || (C.valHooks[this].get = function(e) {
                                    return null === e.getAttribute("value") ? "on" : e.value
                                }
                            )
                        }
                    )),
                    m.focusin = "onfocusin"in n;
                var _t = /^(?:focusinfocus|focusoutblur)$/
                    , Ct = function(e) {
                    e.stopPropagation()
                };
                C.extend(C.event, {
                    trigger: function(e, t, r, i) {
                        var o, s, a, l, u, c, p, d, h = [r || b], g = f.call(e, "type") ? e.type : e, m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = d = a = r = r || b,
                        3 !== r.nodeType && 8 !== r.nodeType && !_t.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."),
                            g = m.shift(),
                            m.sort()),
                            u = g.indexOf(":") < 0 && "on" + g,
                            (e = e[C.expando] ? e : new C.Event(g,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                            e.namespace = m.join("."),
                            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            e.result = void 0,
                        e.target || (e.target = r),
                            t = null == t ? [e] : C.makeArray(t, [e]),
                            p = C.event.special[g] || {},
                        i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                            if (!i && !p.noBubble && !y(r)) {
                                for (l = p.delegateType || g,
                                     _t.test(l + g) || (s = s.parentNode); s; s = s.parentNode)
                                    h.push(s),
                                        a = s;
                                a === (r.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n)
                            }
                            for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                                d = s,
                                    e.type = o > 1 ? l : p.bindType || g,
                                (c = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && c.apply(s, t),
                                (c = u && s[u]) && c.apply && K(s) && (e.result = c.apply(s, t),
                                !1 === e.result && e.preventDefault());
                            return e.type = g,
                            i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !K(r) || u && v(r[g]) && !y(r) && ((a = r[u]) && (r[u] = null),
                                C.event.triggered = g,
                            e.isPropagationStopped() && d.addEventListener(g, Ct),
                                r[g](),
                            e.isPropagationStopped() && d.removeEventListener(g, Ct),
                                C.event.triggered = void 0,
                            a && (r[u] = a)),
                                e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = C.extend(new C.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        C.event.trigger(r, null, t)
                    }
                }),
                    C.fn.extend({
                        trigger: function(e, t) {
                            return this.each((function() {
                                    C.event.trigger(e, t, this)
                                }
                            ))
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n)
                                return C.event.trigger(e, t, n, !0)
                        }
                    }),
                m.focusin || C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                        var n = function(e) {
                            C.event.simulate(t, e.target, C.event.fix(e))
                        };
                        C.event.special[t] = {
                            setup: function() {
                                var r = this.ownerDocument || this.document || this
                                    , i = Q.access(r, t);
                                i || r.addEventListener(e, n, !0),
                                    Q.access(r, t, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this.document || this
                                    , i = Q.access(r, t) - 1;
                                i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0),
                                    Q.remove(r, t))
                            }
                        }
                    }
                ));
                var At = n.location
                    , Tt = {
                    guid: Date.now()
                }
                    , $t = /\?/;
                C.parseXML = function(e) {
                    var t;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
                        t
                }
                ;
                var St = /\[\]$/
                    , Et = /\r?\n/g
                    , Dt = /^(?:submit|button|image|reset|file)$/i
                    , kt = /^(?:input|select|textarea|keygen)/i;
                function jt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t))
                        C.each(t, (function(t, i) {
                                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                            }
                        ));
                    else if (n || "object" !== _(t))
                        r(e, t);
                    else
                        for (i in t)
                            jt(e + "[" + i + "]", t[i], n, r)
                }
                C.param = function(e, t) {
                    var n, r = [], i = function(e, t) {
                        var n = v(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e)
                        return "";
                    if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
                        C.each(e, (function() {
                                i(this.name, this.value)
                            }
                        ));
                    else
                        for (n in e)
                            jt(n, e[n], t, i);
                    return r.join("&")
                }
                    ,
                    C.fn.extend({
                        serialize: function() {
                            return C.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                    var e = C.prop(this, "elements");
                                    return e ? C.makeArray(e) : this
                                }
                            )).filter((function() {
                                    var e = this.type;
                                    return this.name && !C(this).is(":disabled") && kt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ge.test(e))
                                }
                            )).map((function(e, t) {
                                    var n = C(this).val();
                                    return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                                            return {
                                                name: t.name,
                                                value: e.replace(Et, "\r\n")
                                            }
                                        }
                                    )) : {
                                        name: t.name,
                                        value: n.replace(Et, "\r\n")
                                    }
                                }
                            )).get()
                        }
                    });
                var Ot = /%20/g
                    , qt = /#.*$/
                    , Lt = /([?&])_=[^&]*/
                    , Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm
                    , Pt = /^(?:GET|HEAD)$/
                    , Ht = /^\/\//
                    , It = {}
                    , Rt = {}
                    , Mt = "*/".concat("*")
                    , Ut = b.createElement("a");
                function zt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t,
                            t = "*");
                        var r, i = 0, o = t.toLowerCase().match(H) || [];
                        if (v(n))
                            for (; r = o[i++]; )
                                "+" === r[0] ? (r = r.slice(1) || "*",
                                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
                function Wt(e, t, n, r) {
                    var i = {}
                        , o = e === Rt;
                    function s(a) {
                        var l;
                        return i[a] = !0,
                            C.each(e[a] || [], (function(e, a) {
                                    var u = a(t, n, r);
                                    return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                                        s(u),
                                        !1)
                                }
                            )),
                            l
                    }
                    return s(t.dataTypes[0]) || !i["*"] && s("*")
                }
                function Bt(e, t) {
                    var n, r, i = C.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && C.extend(!0, e, r),
                        e
                }
                Ut.href = At.href,
                    C.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: At.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Mt,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": C.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
                        },
                        ajaxPrefilter: zt(It),
                        ajaxTransport: zt(Rt),
                        ajax: function(e, t) {
                            "object" == typeof e && (t = e,
                                e = void 0),
                                t = t || {};
                            var r, i, o, s, a, l, u, c, p, d, f = C.ajaxSetup({}, t), h = f.context || f, g = f.context && (h.nodeType || h.jquery) ? C(h) : C.event, m = C.Deferred(), v = C.Callbacks("once memory"), y = f.statusCode || {}, x = {}, w = {}, _ = "canceled", A = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (u) {
                                        if (!s)
                                            for (s = {}; t = Nt.exec(o); )
                                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = s[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return u ? o : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                                        x[e] = t),
                                        this
                                },
                                overrideMimeType: function(e) {
                                    return null == u && (f.mimeType = e),
                                        this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e)
                                        if (u)
                                            A.always(e[A.status]);
                                        else
                                            for (t in e)
                                                y[t] = [y[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || _;
                                    return r && r.abort(t),
                                        T(0, t),
                                        this
                                }
                            };
                            if (m.promise(A),
                                f.url = ((e || f.url || At.href) + "").replace(Ht, At.protocol + "//"),
                                f.type = t.method || t.type || f.method || f.type,
                                f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""],
                            null == f.crossDomain) {
                                l = b.createElement("a");
                                try {
                                    l.href = f.url,
                                        l.href = l.href,
                                        f.crossDomain = Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host
                                } catch (e) {
                                    f.crossDomain = !0
                                }
                            }
                            if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)),
                                Wt(It, f, t, A),
                                u)
                                return A;
                            for (p in (c = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                                f.type = f.type.toUpperCase(),
                                f.hasContent = !Pt.test(f.type),
                                i = f.url.replace(qt, ""),
                                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ot, "+")) : (d = f.url.slice(i.length),
                                f.data && (f.processData || "string" == typeof f.data) && (i += ($t.test(i) ? "&" : "?") + f.data,
                                    delete f.data),
                                !1 === f.cache && (i = i.replace(Lt, "$1"),
                                    d = ($t.test(i) ? "&" : "?") + "_=" + Tt.guid++ + d),
                                    f.url = i + d),
                            f.ifModified && (C.lastModified[i] && A.setRequestHeader("If-Modified-Since", C.lastModified[i]),
                            C.etag[i] && A.setRequestHeader("If-None-Match", C.etag[i])),
                            (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && A.setRequestHeader("Content-Type", f.contentType),
                                A.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : f.accepts["*"]),
                                f.headers)
                                A.setRequestHeader(p, f.headers[p]);
                            if (f.beforeSend && (!1 === f.beforeSend.call(h, A, f) || u))
                                return A.abort();
                            if (_ = "abort",
                                v.add(f.complete),
                                A.done(f.success),
                                A.fail(f.error),
                                r = Wt(Rt, f, t, A)) {
                                if (A.readyState = 1,
                                c && g.trigger("ajaxSend", [A, f]),
                                    u)
                                    return A;
                                f.async && f.timeout > 0 && (a = n.setTimeout((function() {
                                        A.abort("timeout")
                                    }
                                ), f.timeout));
                                try {
                                    u = !1,
                                        r.send(x, T)
                                } catch (e) {
                                    if (u)
                                        throw e;
                                    T(-1, e)
                                }
                            } else
                                T(-1, "No Transport");
                            function T(e, t, s, l) {
                                var p, d, b, x, w, _ = t;
                                u || (u = !0,
                                a && n.clearTimeout(a),
                                    r = void 0,
                                    o = l || "",
                                    A.readyState = e > 0 ? 4 : 0,
                                    p = e >= 200 && e < 300 || 304 === e,
                                s && (x = function(e, t, n) {
                                    for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                                        l.shift(),
                                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in a)
                                            if (a[i] && a[i].test(r)) {
                                                l.unshift(i);
                                                break
                                            }
                                    if (l[0]in n)
                                        o = l[0];
                                    else {
                                        for (i in n) {
                                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                                o = i;
                                                break
                                            }
                                            s || (s = i)
                                        }
                                        o = o || s
                                    }
                                    if (o)
                                        return o !== l[0] && l.unshift(o),
                                            n[o]
                                }(f, A, s)),
                                !p && C.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function() {}
                                ),
                                    x = function(e, t, n, r) {
                                        var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
                                        if (c[1])
                                            for (s in e.converters)
                                                u[s.toLowerCase()] = e.converters[s];
                                        for (o = c.shift(); o; )
                                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                                l = o,
                                                o = c.shift())
                                                if ("*" === o)
                                                    o = l;
                                                else if ("*" !== l && l !== o) {
                                                    if (!(s = u[l + " " + o] || u["* " + o]))
                                                        for (i in u)
                                                            if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                                !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0],
                                                                    c.unshift(a[1]));
                                                                break
                                                            }
                                                    if (!0 !== s)
                                                        if (s && e.throws)
                                                            t = s(t);
                                                        else
                                                            try {
                                                                t = s(t)
                                                            } catch (e) {
                                                                return {
                                                                    state: "parsererror",
                                                                    error: s ? e : "No conversion from " + l + " to " + o
                                                                }
                                                            }
                                                }
                                        return {
                                            state: "success",
                                            data: t
                                        }
                                    }(f, x, A, p),
                                    p ? (f.ifModified && ((w = A.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w),
                                    (w = A.getResponseHeader("etag")) && (C.etag[i] = w)),
                                        204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state,
                                            d = x.data,
                                            p = !(b = x.error))) : (b = _,
                                    !e && _ || (_ = "error",
                                    e < 0 && (e = 0))),
                                    A.status = e,
                                    A.statusText = (t || _) + "",
                                    p ? m.resolveWith(h, [d, _, A]) : m.rejectWith(h, [A, _, b]),
                                    A.statusCode(y),
                                    y = void 0,
                                c && g.trigger(p ? "ajaxSuccess" : "ajaxError", [A, f, p ? d : b]),
                                    v.fireWith(h, [A, _]),
                                c && (g.trigger("ajaxComplete", [A, f]),
                                --C.active || C.event.trigger("ajaxStop")))
                            }
                            return A
                        },
                        getJSON: function(e, t, n) {
                            return C.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return C.get(e, void 0, t, "script")
                        }
                    }),
                    C.each(["get", "post"], (function(e, t) {
                            C[t] = function(e, n, r, i) {
                                return v(n) && (i = i || r,
                                    r = n,
                                    n = void 0),
                                    C.ajax(C.extend({
                                        url: e,
                                        type: t,
                                        dataType: i,
                                        data: n,
                                        success: r
                                    }, C.isPlainObject(e) && e))
                            }
                        }
                    )),
                    C.ajaxPrefilter((function(e) {
                            var t;
                            for (t in e.headers)
                                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                        }
                    )),
                    C._evalUrl = function(e, t, n) {
                        return C.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(e) {
                                C.globalEval(e, t, n)
                            }
                        })
                    }
                    ,
                    C.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return this[0] && (v(e) && (e = e.call(this[0])),
                                t = C(e, this[0].ownerDocument).eq(0).clone(!0),
                            this[0].parentNode && t.insertBefore(this[0]),
                                t.map((function() {
                                        for (var e = this; e.firstElementChild; )
                                            e = e.firstElementChild;
                                        return e
                                    }
                                )).append(this)),
                                this
                        },
                        wrapInner: function(e) {
                            return v(e) ? this.each((function(t) {
                                    C(this).wrapInner(e.call(this, t))
                                }
                            )) : this.each((function() {
                                    var t = C(this)
                                        , n = t.contents();
                                    n.length ? n.wrapAll(e) : t.append(e)
                                }
                            ))
                        },
                        wrap: function(e) {
                            var t = v(e);
                            return this.each((function(n) {
                                    C(this).wrapAll(t ? e.call(this, n) : e)
                                }
                            ))
                        },
                        unwrap: function(e) {
                            return this.parent(e).not("body").each((function() {
                                    C(this).replaceWith(this.childNodes)
                                }
                            )),
                                this
                        }
                    }),
                    C.expr.pseudos.hidden = function(e) {
                        return !C.expr.pseudos.visible(e)
                    }
                    ,
                    C.expr.pseudos.visible = function(e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    }
                    ,
                    C.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest
                        } catch (e) {}
                    }
                ;
                var Ft = {
                    0: 200,
                    1223: 204
                }
                    , Gt = C.ajaxSettings.xhr();
                m.cors = !!Gt && "withCredentials"in Gt,
                    m.ajax = Gt = !!Gt,
                    C.ajaxTransport((function(e) {
                            var t, r;
                            if (m.cors || Gt && !e.crossDomain)
                                return {
                                    send: function(i, o) {
                                        var s, a = e.xhr();
                                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                                            e.xhrFields)
                                            for (s in e.xhrFields)
                                                a[s] = e.xhrFields[s];
                                        for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                            i)
                                            a.setRequestHeader(s, i[s]);
                                        t = function(e) {
                                            return function() {
                                                t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                                    "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                                        binary: a.response
                                                    } : {
                                                        text: a.responseText
                                                    }, a.getAllResponseHeaders()))
                                            }
                                        }
                                            ,
                                            a.onload = t(),
                                            r = a.onerror = a.ontimeout = t("error"),
                                            void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                                                4 === a.readyState && n.setTimeout((function() {
                                                        t && r()
                                                    }
                                                ))
                                            }
                                            ,
                                            t = t("abort");
                                        try {
                                            a.send(e.hasContent && e.data || null)
                                        } catch (e) {
                                            if (t)
                                                throw e
                                        }
                                    },
                                    abort: function() {
                                        t && t()
                                    }
                                }
                        }
                    )),
                    C.ajaxPrefilter((function(e) {
                            e.crossDomain && (e.contents.script = !1)
                        }
                    )),
                    C.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return C.globalEval(e),
                                    e
                            }
                        }
                    }),
                    C.ajaxPrefilter("script", (function(e) {
                            void 0 === e.cache && (e.cache = !1),
                            e.crossDomain && (e.type = "GET")
                        }
                    )),
                    C.ajaxTransport("script", (function(e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function(r, i) {
                                        t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                            charset: e.scriptCharset,
                                            src: e.url
                                        }).on("load error", n = function(e) {
                                                t.remove(),
                                                    n = null,
                                                e && i("error" === e.type ? 404 : 200, e.type)
                                            }
                                        ),
                                            b.head.appendChild(t[0])
                                    },
                                    abort: function() {
                                        n && n()
                                    }
                                }
                        }
                    ));
                var Yt, Xt = [], Kt = /(=)\?(?=&|$)|\?\?/;
                C.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Xt.pop() || C.expando + "_" + Tt.guid++;
                        return this[e] = !0,
                            e
                    }
                }),
                    C.ajaxPrefilter("json jsonp", (function(e, t, r) {
                            var i, o, s, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
                            if (a || "jsonp" === e.dataTypes[0])
                                return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                                    a ? e[a] = e[a].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                                    e.converters["script json"] = function() {
                                        return s || C.error(i + " was not called"),
                                            s[0]
                                    }
                                    ,
                                    e.dataTypes[0] = "json",
                                    o = n[i],
                                    n[i] = function() {
                                        s = arguments
                                    }
                                    ,
                                    r.always((function() {
                                            void 0 === o ? C(n).removeProp(i) : n[i] = o,
                                            e[i] && (e.jsonpCallback = t.jsonpCallback,
                                                Xt.push(i)),
                                            s && v(o) && o(s[0]),
                                                s = o = void 0
                                        }
                                    )),
                                    "script"
                        }
                    )),
                    m.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                    2 === Yt.childNodes.length),
                    C.parseHTML = function(e, t, n) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                            t = !1),
                        t || (m.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                            t.head.appendChild(r)) : t = b),
                            o = !n && [],
                            (i = k.exec(e)) ? [t.createElement(i[1])] : (i = _e([e], t, o),
                            o && o.length && C(o).remove(),
                                C.merge([], i.childNodes)));
                        var r, i, o
                    }
                    ,
                    C.fn.load = function(e, t, n) {
                        var r, i, o, s = this, a = e.indexOf(" ");
                        return a > -1 && (r = yt(e.slice(a)),
                            e = e.slice(0, a)),
                            v(t) ? (n = t,
                                t = void 0) : t && "object" == typeof t && (i = "POST"),
                        s.length > 0 && C.ajax({
                            url: e,
                            type: i || "GET",
                            dataType: "html",
                            data: t
                        }).done((function(e) {
                                o = arguments,
                                    s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                            }
                        )).always(n && function(e, t) {
                            s.each((function() {
                                    n.apply(this, o || [e.responseText, t, e])
                                }
                            ))
                        }
                        ),
                            this
                    }
                    ,
                    C.expr.pseudos.animated = function(e) {
                        return C.grep(C.timers, (function(t) {
                                return e === t.elem
                            }
                        )).length
                    }
                    ,
                    C.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, o, s, a, l, u = C.css(e, "position"), c = C(e), p = {};
                            "static" === u && (e.style.position = "relative"),
                                a = c.offset(),
                                o = C.css(e, "top"),
                                l = C.css(e, "left"),
                                ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top,
                                    i = r.left) : (s = parseFloat(o) || 0,
                                    i = parseFloat(l) || 0),
                            v(t) && (t = t.call(e, n, C.extend({}, a))),
                            null != t.top && (p.top = t.top - a.top + s),
                            null != t.left && (p.left = t.left - a.left + i),
                                "using"in t ? t.using.call(e, p) : ("number" == typeof p.top && (p.top += "px"),
                                "number" == typeof p.left && (p.left += "px"),
                                    c.css(p))
                        }
                    },
                    C.fn.extend({
                        offset: function(e) {
                            if (arguments.length)
                                return void 0 === e ? this : this.each((function(t) {
                                        C.offset.setOffset(this, e, t)
                                    }
                                ));
                            var t, n, r = this[0];
                            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                                n = r.ownerDocument.defaultView,
                                {
                                    top: t.top + n.pageYOffset,
                                    left: t.left + n.pageXOffset
                                }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n, r = this[0], i = {
                                    top: 0,
                                    left: 0
                                };
                                if ("fixed" === C.css(r, "position"))
                                    t = r.getBoundingClientRect();
                                else {
                                    for (t = this.offset(),
                                             n = r.ownerDocument,
                                             e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                                        e = e.parentNode;
                                    e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                                        i.left += C.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - i.top - C.css(r, "marginTop", !0),
                                    left: t.left - i.left - C.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                    for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                                        e = e.offsetParent;
                                    return e || oe
                                }
                            ))
                        }
                    }),
                    C.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(e, t) {
                            var n = "pageYOffset" === t;
                            C.fn[e] = function(r) {
                                return B(this, (function(e, r, i) {
                                        var o;
                                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                                        void 0 === i)
                                            return o ? o[t] : e[r];
                                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                                    }
                                ), e, r, arguments.length)
                            }
                        }
                    )),
                    C.each(["top", "left"], (function(e, t) {
                            C.cssHooks[t] = Ge(m.pixelPosition, (function(e, n) {
                                    if (n)
                                        return n = Fe(e, t),
                                            Ue.test(n) ? C(e).position()[t] + "px" : n
                                }
                            ))
                        }
                    )),
                    C.each({
                        Height: "height",
                        Width: "width"
                    }, (function(e, t) {
                            C.each({
                                padding: "inner" + e,
                                content: t,
                                "": "outer" + e
                            }, (function(n, r) {
                                    C.fn[r] = function(i, o) {
                                        var s = arguments.length && (n || "boolean" != typeof i)
                                            , a = n || (!0 === i || !0 === o ? "margin" : "border");
                                        return B(this, (function(t, n, i) {
                                                var o;
                                                return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
                                            }
                                        ), t, s ? i : void 0, s)
                                    }
                                }
                            ))
                        }
                    )),
                    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                            C.fn[t] = function(e) {
                                return this.on(t, e)
                            }
                        }
                    )),
                    C.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        },
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }),
                    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                            C.fn[t] = function(e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                            }
                        }
                    ));
                var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                C.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t],
                        t = e,
                        e = n),
                        v(e))
                        return r = a.call(arguments, 2),
                            (i = function() {
                                    return e.apply(t || this, r.concat(a.call(arguments)))
                                }
                            ).guid = e.guid = e.guid || C.guid++,
                            i
                }
                    ,
                    C.holdReady = function(e) {
                        e ? C.readyWait++ : C.ready(!0)
                    }
                    ,
                    C.isArray = Array.isArray,
                    C.parseJSON = JSON.parse,
                    C.nodeName = D,
                    C.isFunction = v,
                    C.isWindow = y,
                    C.camelCase = X,
                    C.type = _,
                    C.now = Date.now,
                    C.isNumeric = function(e) {
                        var t = C.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }
                    ,
                    C.trim = function(e) {
                        return null == e ? "" : (e + "").replace(Vt, "")
                    }
                    ,
                void 0 === (r = function() {
                    return C
                }
                    .apply(t, [])) || (e.exports = r);
                var Qt = n.jQuery
                    , Zt = n.$;
                return C.noConflict = function(e) {
                    return n.$ === C && (n.$ = Zt),
                    e && n.jQuery === C && (n.jQuery = Qt),
                        C
                }
                    ,
                void 0 === i && (n.jQuery = n.$ = C),
                    C
            }
        ))
    },
    43: function(e, t, n) {
        e.exports = n(44)
    },
    44: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1)
            , i = n.n(r);
        n(45),
            n(6),
            n(7);
        function o(e) {
            i()(e).select2({
                replica: ".m-select-replica",
                replicaOption: ".m-select-replica__selected",
                openClass: "m-select-replica--open",
                replicaContainer: ".m-select-native-container",
                replicaOptionIcon: ".m-select-replica__icon",
                replicaOptionColor: ".m-select-replica__color",
                language: "tr"
            }).on("change", (function(e) {
                    var t = i()(this).data("change");
                    t && window[t](this, e)
                }
            ))
        }
        i()((function(e) {
                o(e("select:not('.not-select2')"))
            }
        )),
            window.loadSelectBox = o
    },
    45: function(e, t, n) {
        var r, i, o;
        i = [n(1)],
        void 0 === (o = "function" == typeof (r = function(e) {
                var t = function() {
                    if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                        var t = e.fn.select2.amd;
                    return function() {
                        /**
                         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                         */
                        var e, n, r;
                        t && t.requirejs || (t ? n = t : t = {},
                            function(t) {
                                var i, o, s, a, l = {}, u = {}, c = {}, p = {}, d = Object.prototype.hasOwnProperty, f = [].slice, h = /\.js$/;
                                function g(e, t) {
                                    return d.call(e, t)
                                }
                                function m(e, t) {
                                    var n, r, i, o, s, a, l, u, p, d, f, g = t && t.split("/"), m = c.map, v = m && m["*"] || {};
                                    if (e) {
                                        for (s = (e = e.split("/")).length - 1,
                                             c.nodeIdCompat && h.test(e[s]) && (e[s] = e[s].replace(h, "")),
                                             "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)),
                                                 p = 0; p < e.length; p++)
                                            if ("." === (f = e[p]))
                                                e.splice(p, 1),
                                                    p -= 1;
                                            else if (".." === f) {
                                                if (0 === p || 1 === p && ".." === e[2] || ".." === e[p - 1])
                                                    continue;
                                                p > 0 && (e.splice(p - 1, 2),
                                                    p -= 2)
                                            }
                                        e = e.join("/")
                                    }
                                    if ((g || v) && m) {
                                        for (p = (n = e.split("/")).length; p > 0; p -= 1) {
                                            if (r = n.slice(0, p).join("/"),
                                                g)
                                                for (d = g.length; d > 0; d -= 1)
                                                    if ((i = m[g.slice(0, d).join("/")]) && (i = i[r])) {
                                                        o = i,
                                                            a = p;
                                                        break
                                                    }
                                            if (o)
                                                break;
                                            !l && v && v[r] && (l = v[r],
                                                u = p)
                                        }
                                        !o && l && (o = l,
                                            a = u),
                                        o && (n.splice(0, a, o),
                                            e = n.join("/"))
                                    }
                                    return e
                                }
                                function v(e, t) {
                                    return function() {
                                        var n = f.call(arguments, 0);
                                        return "string" != typeof n[0] && 1 === n.length && n.push(null),
                                            o.apply(void 0, n.concat([e, t]))
                                    }
                                }
                                function y(e) {
                                    return function(t) {
                                        l[e] = t
                                    }
                                }
                                function b(e) {
                                    if (g(u, e)) {
                                        var t = u[e];
                                        delete u[e],
                                            p[e] = !0,
                                            i.apply(void 0, t)
                                    }
                                    if (!g(l, e) && !g(p, e))
                                        throw new Error("No " + e);
                                    return l[e]
                                }
                                function x(e) {
                                    var t, n = e ? e.indexOf("!") : -1;
                                    return n > -1 && (t = e.substring(0, n),
                                        e = e.substring(n + 1, e.length)),
                                        [t, e]
                                }
                                function w(e) {
                                    return e ? x(e) : []
                                }
                                function _(e) {
                                    return function() {
                                        return c && c.config && c.config[e] || {}
                                    }
                                }
                                s = function(e, t) {
                                    var n, r, i = x(e), o = i[0], s = t[1];
                                    return e = i[1],
                                    o && (n = b(o = m(o, s))),
                                        o ? e = n && n.normalize ? n.normalize(e, (r = s,
                                                function(e) {
                                                    return m(e, r)
                                                }
                                        )) : m(e, s) : (o = (i = x(e = m(e, s)))[0],
                                            e = i[1],
                                        o && (n = b(o))),
                                        {
                                            f: o ? o + "!" + e : e,
                                            n: e,
                                            pr: o,
                                            p: n
                                        }
                                }
                                    ,
                                    a = {
                                        require: function(e) {
                                            return v(e)
                                        },
                                        exports: function(e) {
                                            var t = l[e];
                                            return void 0 !== t ? t : l[e] = {}
                                        },
                                        module: function(e) {
                                            return {
                                                id: e,
                                                uri: "",
                                                exports: l[e],
                                                config: _(e)
                                            }
                                        }
                                    },
                                    i = function(e, t, n, r) {
                                        var i, o, c, d, f, h, m, x = [], _ = typeof n;
                                        if (h = w(r = r || e),
                                        "undefined" === _ || "function" === _) {
                                            for (t = !t.length && n.length ? ["require", "exports", "module"] : t,
                                                     f = 0; f < t.length; f += 1)
                                                if ("require" === (o = (d = s(t[f], h)).f))
                                                    x[f] = a.require(e);
                                                else if ("exports" === o)
                                                    x[f] = a.exports(e),
                                                        m = !0;
                                                else if ("module" === o)
                                                    i = x[f] = a.module(e);
                                                else if (g(l, o) || g(u, o) || g(p, o))
                                                    x[f] = b(o);
                                                else {
                                                    if (!d.p)
                                                        throw new Error(e + " missing " + o);
                                                    d.p.load(d.n, v(r, !0), y(o), {}),
                                                        x[f] = l[o]
                                                }
                                            c = n ? n.apply(l[e], x) : void 0,
                                            e && (i && void 0 !== i.exports && i.exports !== l[e] ? l[e] = i.exports : void 0 === c && m || (l[e] = c))
                                        } else
                                            e && (l[e] = n)
                                    }
                                    ,
                                    e = n = o = function(e, t, n, r, l) {
                                        if ("string" == typeof e)
                                            return a[e] ? a[e](t) : b(s(e, w(t)).f);
                                        if (!e.splice) {
                                            if ((c = e).deps && o(c.deps, c.callback),
                                                !t)
                                                return;
                                            t.splice ? (e = t,
                                                t = n,
                                                n = null) : e = void 0
                                        }
                                        return t = t || function() {}
                                            ,
                                        "function" == typeof n && (n = r,
                                            r = l),
                                            r ? i(void 0, e, t, n) : setTimeout((function() {
                                                    i(void 0, e, t, n)
                                                }
                                            ), 4),
                                            o
                                    }
                                    ,
                                    o.config = function(e) {
                                        return o(e)
                                    }
                                    ,
                                    e._defined = l,
                                    (r = function(e, t, n) {
                                            if ("string" != typeof e)
                                                throw new Error("See almond README: incorrect module build, no module name");
                                            t.splice || (n = t,
                                                t = []),
                                            g(l, e) || g(u, e) || (u[e] = [e, t, n])
                                        }
                                    ).amd = {
                                        jQuery: !0
                                    }
                            }(),
                            t.requirejs = e,
                            t.require = n,
                            t.define = r)
                    }(),
                        t.define("almond", (function() {}
                        )),
                        t.define("jquery", [], (function() {
                                var t = e || $;
                                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                                    t
                            }
                        )),
                        t.define("select2/utils", ["jquery"], (function(e) {
                                var t = {};
                                function n(e) {
                                    var t = e.prototype
                                        , n = [];
                                    for (var r in t)
                                        "function" == typeof t[r] && "constructor" !== r && n.push(r);
                                    return n
                                }
                                t.Extend = function(e, t) {
                                    var n = {}.hasOwnProperty;
                                    function r() {
                                        this.constructor = e
                                    }
                                    for (var i in t)
                                        n.call(t, i) && (e[i] = t[i]);
                                    return r.prototype = t.prototype,
                                        e.prototype = new r,
                                        e.__super__ = t.prototype,
                                        e
                                }
                                    ,
                                    t.Decorate = function(e, t) {
                                        var r = n(t)
                                            , i = n(e);
                                        function o() {
                                            var n = Array.prototype.unshift
                                                , r = t.prototype.constructor.length
                                                , i = e.prototype.constructor;
                                            r > 0 && (n.call(arguments, e.prototype.constructor),
                                                i = t.prototype.constructor),
                                                i.apply(this, arguments)
                                        }
                                        t.displayName = e.displayName,
                                            o.prototype = new function() {
                                                this.constructor = o
                                            }
                                        ;
                                        for (var s = 0; s < i.length; s++) {
                                            var a = i[s];
                                            o.prototype[a] = e.prototype[a]
                                        }
                                        for (var l = function(e) {
                                            var n = function() {};
                                            e in o.prototype && (n = o.prototype[e]);
                                            var r = t.prototype[e];
                                            return function() {
                                                var e = Array.prototype.unshift;
                                                return e.call(arguments, n),
                                                    r.apply(this, arguments)
                                            }
                                        }, u = 0; u < r.length; u++) {
                                            var c = r[u];
                                            o.prototype[c] = l(c)
                                        }
                                        return o
                                    }
                                ;
                                var r = function() {
                                    this.listeners = {}
                                };
                                r.prototype.on = function(e, t) {
                                    this.listeners = this.listeners || {},
                                        e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                                }
                                    ,
                                    r.prototype.trigger = function(e) {
                                        var t = Array.prototype.slice
                                            , n = t.call(arguments, 1);
                                        this.listeners = this.listeners || {},
                                        null == n && (n = []),
                                        0 === n.length && n.push({}),
                                            n[0]._type = e,
                                        e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                                        "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
                                    }
                                    ,
                                    r.prototype.invoke = function(e, t) {
                                        for (var n = 0, r = e.length; n < r; n++)
                                            e[n].apply(this, t)
                                    }
                                    ,
                                    t.Observable = r,
                                    t.generateChars = function(e) {
                                        for (var t = "", n = 0; n < e; n++)
                                            t += Math.floor(36 * Math.random()).toString(36);
                                        return t
                                    }
                                    ,
                                    t.bind = function(e, t) {
                                        return function() {
                                            e.apply(t, arguments)
                                        }
                                    }
                                    ,
                                    t._convertData = function(e) {
                                        for (var t in e) {
                                            var n = t.split("-")
                                                , r = e;
                                            if (1 !== n.length) {
                                                for (var i = 0; i < n.length; i++) {
                                                    var o = n[i];
                                                    (o = o.substring(0, 1).toLowerCase() + o.substring(1))in r || (r[o] = {}),
                                                    i == n.length - 1 && (r[o] = e[t]),
                                                        r = r[o]
                                                }
                                                delete e[t]
                                            }
                                        }
                                        return e
                                    }
                                    ,
                                    t.hasScroll = function(t, n) {
                                        var r = e(n)
                                            , i = n.style.overflowX
                                            , o = n.style.overflowY;
                                        return (i !== o || "hidden" !== o && "visible" !== o) && ("scroll" === i || "scroll" === o || r.innerHeight() < n.scrollHeight || r.innerWidth() < n.scrollWidth)
                                    }
                                    ,
                                    t.escapeMarkup = function(e) {
                                        var t = {
                                            "\\": "&#92;",
                                            "&": "&amp;",
                                            "<": "&lt;",
                                            ">": "&gt;",
                                            '"': "&quot;",
                                            "'": "&#39;",
                                            "/": "&#47;"
                                        };
                                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                                                return t[e]
                                            }
                                        ))
                                    }
                                    ,
                                    t.appendMany = function(t, n) {
                                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                            var r = e();
                                            e.map(n, (function(e) {
                                                    r = r.add(e)
                                                }
                                            )),
                                                n = r
                                        }
                                        t.append(n)
                                    }
                                    ,
                                    t.__cache = {};
                                var i = 0;
                                return t.GetUniqueElementId = function(e) {
                                    var t = e.getAttribute("data-select2-id");
                                    return null == t && (e.id ? (t = e.id,
                                        e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++i),
                                        t = i.toString())),
                                        t
                                }
                                    ,
                                    t.StoreData = function(e, n, r) {
                                        var i = t.GetUniqueElementId(e);
                                        t.__cache[i] || (t.__cache[i] = {}),
                                            t.__cache[i][n] = r
                                    }
                                    ,
                                    t.GetData = function(n, r) {
                                        var i = t.GetUniqueElementId(n);
                                        return r ? t.__cache[i] && null != t.__cache[i][r] ? t.__cache[i][r] : e(n).data(r) : t.__cache[i]
                                    }
                                    ,
                                    t.RemoveData = function(e) {
                                        var n = t.GetUniqueElementId(e);
                                        null != t.__cache[n] && delete t.__cache[n],
                                            e.removeAttribute("data-select2-id")
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                                function n(e, t, r) {
                                    this.$element = e,
                                        this.data = r,
                                        this.options = t,
                                        n.__super__.constructor.call(this)
                                }
                                return t.Extend(n, t.Observable),
                                    n.prototype.render = function() {
                                        var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                                            this.$results = t,
                                            t
                                    }
                                    ,
                                    n.prototype.clear = function() {
                                        this.$results.empty()
                                    }
                                    ,
                                    n.prototype.displayMessage = function(t) {
                                        var n = this.options.get("escapeMarkup");
                                        this.clear(),
                                            this.hideLoading();
                                        var r = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
                                            , i = this.options.get("translations").get(t.message);
                                        r.append(n(i(t.args))),
                                            r[0].className += " select2-results__message",
                                            this.$results.append(r)
                                    }
                                    ,
                                    n.prototype.hideMessages = function() {
                                        this.$results.find(".select2-results__message").remove()
                                    }
                                    ,
                                    n.prototype.append = function(e) {
                                        this.hideLoading();
                                        var t = [];
                                        if (null != e.results && 0 !== e.results.length) {
                                            e.results = this.sort(e.results);
                                            for (var n = 0; n < e.results.length; n++) {
                                                var r = e.results[n]
                                                    , i = this.option(r);
                                                t.push(i)
                                            }
                                            this.$results.append(t)
                                        } else
                                            0 === this.$results.children().length && this.trigger("results:message", {
                                                message: "noResults"
                                            })
                                    }
                                    ,
                                    n.prototype.position = function(e, t) {
                                        t.find(".select2-results").append(e)
                                    }
                                    ,
                                    n.prototype.sort = function(e) {
                                        return this.options.get("sorter")(e)
                                    }
                                    ,
                                    n.prototype.highlightFirstItem = function() {
                                        var e = this.$results.find(".select2-results__option[aria-selected]")
                                            , t = e.filter("[aria-selected=true]");
                                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                                            this.ensureHighlightVisible()
                                    }
                                    ,
                                    n.prototype.setClasses = function() {
                                        var n = this;
                                        this.data.current((function(r) {
                                                var i = e.map(r, (function(e) {
                                                        return e.id.toString()
                                                    }
                                                ));
                                                n.$results.find(".select2-results__option[aria-selected]").each((function() {
                                                        var n = e(this)
                                                            , r = t.GetData(this, "data")
                                                            , o = "" + r.id;
                                                        null != r.element && r.element.selected || null == r.element && e.inArray(o, i) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                                                    }
                                                ))
                                            }
                                        ))
                                    }
                                    ,
                                    n.prototype.showLoading = function(e) {
                                        this.hideLoading();
                                        var t = {
                                            disabled: !0,
                                            loading: !0,
                                            text: this.options.get("translations").get("searching")(e)
                                        }
                                            , n = this.option(t);
                                        n.className += " loading-results",
                                            this.$results.prepend(n)
                                    }
                                    ,
                                    n.prototype.hideLoading = function() {
                                        this.$results.find(".loading-results").remove()
                                    }
                                    ,
                                    n.prototype.option = function(n) {
                                        var r = document.createElement("li");
                                        r.className = "select2-results__option";
                                        var i = {
                                            role: "option",
                                            "aria-selected": "false"
                                        }
                                            , o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                                        for (var s in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete i["aria-selected"],
                                            i["aria-disabled"] = "true"),
                                        null == n.id && delete i["aria-selected"],
                                        null != n._resultId && (r.id = n._resultId),
                                        n.title && (r.title = n.title),
                                        n.children && (i.role = "group",
                                            i["aria-label"] = n.text,
                                            delete i["aria-selected"]),
                                            i) {
                                            var a = i[s];
                                            r.setAttribute(s, a)
                                        }
                                        if (n.children) {
                                            var l = e(r)
                                                , u = document.createElement("strong");
                                            u.className = "select2-results__group",
                                                e(u),
                                                this.template(n, u);
                                            for (var c = [], p = 0; p < n.children.length; p++) {
                                                var d = n.children[p]
                                                    , f = this.option(d);
                                                c.push(f)
                                            }
                                            var h = e("<ul></ul>", {
                                                class: "select2-results__options select2-results__options--nested"
                                            });
                                            h.append(c),
                                                l.append(u),
                                                l.append(h)
                                        } else
                                            this.template(n, r);
                                        return t.StoreData(r, "data", n),
                                            r
                                    }
                                    ,
                                    n.prototype.bind = function(n, r) {
                                        var i = this
                                            , o = n.id + "-results";
                                        this.$results.attr("id", o),
                                            n.on("results:all", (function(e) {
                                                    i.clear(),
                                                        i.append(e.data),
                                                    n.isOpen() && (i.setClasses(),
                                                        i.highlightFirstItem())
                                                }
                                            )),
                                            n.on("results:append", (function(e) {
                                                    i.append(e.data),
                                                    n.isOpen() && i.setClasses()
                                                }
                                            )),
                                            n.on("query", (function(e) {
                                                    i.hideMessages(),
                                                        i.showLoading(e)
                                                }
                                            )),
                                            n.on("select", (function() {
                                                    n.isOpen() && (i.setClasses(),
                                                    i.options.get("scrollAfterSelect") && i.highlightFirstItem())
                                                }
                                            )),
                                            n.on("unselect", (function() {
                                                    n.isOpen() && (i.setClasses(),
                                                    i.options.get("scrollAfterSelect") && i.highlightFirstItem())
                                                }
                                            )),
                                            n.on("open", (function() {
                                                    i.$results.attr("aria-expanded", "true"),
                                                        i.$results.attr("aria-hidden", "false"),
                                                        i.setClasses(),
                                                        i.ensureHighlightVisible()
                                                }
                                            )),
                                            n.on("close", (function() {
                                                    i.$results.attr("aria-expanded", "false"),
                                                        i.$results.attr("aria-hidden", "true"),
                                                        i.$results.removeAttr("aria-activedescendant")
                                                }
                                            )),
                                            n.on("results:toggle", (function() {
                                                    var e = i.getHighlightedResults();
                                                    0 !== e.length && e.trigger("mouseup")
                                                }
                                            )),
                                            n.on("results:select", (function() {
                                                    var e = i.getHighlightedResults();
                                                    if (0 !== e.length) {
                                                        var n = t.GetData(e[0], "data");
                                                        "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                                            data: n
                                                        })
                                                    }
                                                }
                                            )),
                                            n.on("results:previous", (function() {
                                                    var e = i.getHighlightedResults()
                                                        , t = i.$results.find("[aria-selected]")
                                                        , n = t.index(e);
                                                    if (!(n <= 0)) {
                                                        var r = n - 1;
                                                        0 === e.length && (r = 0);
                                                        var o = t.eq(r);
                                                        o.trigger("mouseenter");
                                                        var s = i.$results.offset().top
                                                            , a = o.offset().top
                                                            , l = i.$results.scrollTop() + (a - s);
                                                        0 === r ? i.$results.scrollTop(0) : a - s < 0 && i.$results.scrollTop(l)
                                                    }
                                                }
                                            )),
                                            n.on("results:next", (function() {
                                                    var e = i.getHighlightedResults()
                                                        , t = i.$results.find("[aria-selected]")
                                                        , n = t.index(e) + 1;
                                                    if (!(n >= t.length)) {
                                                        var r = t.eq(n);
                                                        r.trigger("mouseenter");
                                                        var o = i.$results.offset().top + i.$results.outerHeight(!1)
                                                            , s = r.offset().top + r.outerHeight(!1)
                                                            , a = i.$results.scrollTop() + s - o;
                                                        0 === n ? i.$results.scrollTop(0) : s > o && i.$results.scrollTop(a)
                                                    }
                                                }
                                            )),
                                            n.on("results:focus", (function(e) {
                                                    e.element.addClass("select2-results__option--highlighted")
                                                }
                                            )),
                                            n.on("results:message", (function(e) {
                                                    i.displayMessage(e)
                                                }
                                            )),
                                        e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                                                var t = i.$results.scrollTop()
                                                    , n = i.$results.get(0).scrollHeight - t + e.deltaY
                                                    , r = e.deltaY > 0 && t - e.deltaY <= 0
                                                    , o = e.deltaY < 0 && n <= i.$results.height();
                                                r ? (i.$results.scrollTop(0),
                                                    e.preventDefault(),
                                                    e.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()),
                                                    e.preventDefault(),
                                                    e.stopPropagation())
                                            }
                                        )),
                                            this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) {
                                                    var r = e(this)
                                                        , o = t.GetData(this, "data");
                                                    "true" !== r.attr("aria-selected") ? i.trigger("select", {
                                                        originalEvent: n,
                                                        data: o
                                                    }) : i.options.get("multiple") ? i.trigger("unselect", {
                                                        originalEvent: n,
                                                        data: o
                                                    }) : i.trigger("close", {})
                                                }
                                            )),
                                            this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) {
                                                    var r = t.GetData(this, "data");
                                                    i.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                                                        i.trigger("results:focus", {
                                                            data: r,
                                                            element: e(this)
                                                        })
                                                }
                                            ))
                                    }
                                    ,
                                    n.prototype.getHighlightedResults = function() {
                                        return this.$results.find(".select2-results__option--highlighted")
                                    }
                                    ,
                                    n.prototype.destroy = function() {
                                        this.$results.remove()
                                    }
                                    ,
                                    n.prototype.ensureHighlightVisible = function() {
                                        var e = this.getHighlightedResults();
                                        if (0 !== e.length) {
                                            var t = this.$results.find("[aria-selected]").index(e)
                                                , n = this.$results.offset().top
                                                , r = e.offset().top
                                                , i = this.$results.scrollTop() + (r - n)
                                                , o = r - n;
                                            i -= 2 * e.outerHeight(!1),
                                                t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(i)
                                        }
                                    }
                                    ,
                                    n.prototype.template = function(t, n) {
                                        var r = this.options.get("templateResult")
                                            , i = this.options.get("escapeMarkup")
                                            , o = r(t, n);
                                        null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = i(o) : e(n).append(o)
                                    }
                                    ,
                                    n
                            }
                        )),
                        t.define("select2/keys", [], (function() {
                                return {
                                    BACKSPACE: 8,
                                    TAB: 9,
                                    ENTER: 13,
                                    SHIFT: 16,
                                    CTRL: 17,
                                    ALT: 18,
                                    ESC: 27,
                                    SPACE: 32,
                                    PAGE_UP: 33,
                                    PAGE_DOWN: 34,
                                    END: 35,
                                    HOME: 36,
                                    LEFT: 37,
                                    UP: 38,
                                    RIGHT: 39,
                                    DOWN: 40,
                                    DELETE: 46
                                }
                            }
                        )),
                        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                                function r(e, t) {
                                    this.$element = e,
                                        this.options = t,
                                        r.__super__.constructor.call(this)
                                }
                                return t.Extend(r, t.Observable),
                                    r.prototype.render = function() {
                                        var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                                        return this._tabindex = 0,
                                            null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                                            n.attr("title", this.$element.attr("title")),
                                            n.attr("tabindex", this._tabindex),
                                            n.attr("aria-disabled", "false"),
                                            this.$selection = n,
                                            n
                                    }
                                    ,
                                    r.prototype.bind = function(e, t) {
                                        var r = this
                                            , i = e.id + "-results";
                                        this.container = e,
                                            this.$selection.on("focus", (function(e) {
                                                    r.trigger("focus", e)
                                                }
                                            )),
                                            this.$selection.on("blur", (function(e) {
                                                    r._handleBlur(e)
                                                }
                                            )),
                                            this.$selection.on("keydown", (function(e) {
                                                    r.trigger("keypress", e),
                                                    e.which === n.SPACE && e.preventDefault()
                                                }
                                            )),
                                            e.on("results:focus", (function(e) {
                                                    r.$selection.attr("aria-activedescendant", e.data._resultId)
                                                }
                                            )),
                                            e.on("selection:update", (function(e) {
                                                    r.update(e.data)
                                                }
                                            )),
                                            e.on("open", (function() {
                                                    r.$selection.attr("aria-expanded", "true"),
                                                        r.$selection.attr("aria-owns", i),
                                                        r._attachCloseHandler(e)
                                                }
                                            )),
                                            e.on("close", (function() {
                                                    r.$selection.attr("aria-expanded", "false"),
                                                        r.$selection.removeAttr("aria-activedescendant"),
                                                        r.$selection.removeAttr("aria-owns"),
                                                        r.$selection.trigger("focus"),
                                                        r._detachCloseHandler(e)
                                                }
                                            )),
                                            e.on("enable", (function() {
                                                    r.$selection.attr("tabindex", r._tabindex),
                                                        r.$selection.attr("aria-disabled", "false")
                                                }
                                            )),
                                            e.on("disable", (function() {
                                                    r.$selection.attr("tabindex", "-1"),
                                                        r.$selection.attr("aria-disabled", "true")
                                                }
                                            ))
                                    }
                                    ,
                                    r.prototype._handleBlur = function(t) {
                                        var n = this;
                                        window.setTimeout((function() {
                                                document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                                            }
                                        ), 1)
                                    }
                                    ,
                                    r.prototype._attachCloseHandler = function(n) {
                                        e(document.body).on("mousedown.select2." + n.id, (function(n) {
                                                var r = e(n.target).closest(".select2");
                                                e(".select2.select2-container--open").each((function() {
                                                        this != r[0] && t.GetData(this, "element").select2("close")
                                                    }
                                                ))
                                            }
                                        ))
                                    }
                                    ,
                                    r.prototype._detachCloseHandler = function(t) {
                                        e(document.body).off("mousedown.select2." + t.id)
                                    }
                                    ,
                                    r.prototype.position = function(e, t) {
                                        t.find(".selection").append(e)
                                    }
                                    ,
                                    r.prototype.destroy = function() {
                                        this._detachCloseHandler(this.container)
                                    }
                                    ,
                                    r.prototype.update = function(e) {
                                        throw new Error("The `update` method must be defined in child classes.")
                                    }
                                    ,
                                    r.prototype.isEnabled = function() {
                                        return !this.isDisabled()
                                    }
                                    ,
                                    r.prototype.isDisabled = function() {
                                        return this.options.get("disabled")
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, r) {
                                function i() {
                                    i.__super__.constructor.apply(this, arguments)
                                }
                                return n.Extend(i, t),
                                    i.prototype.render = function() {
                                        var e = i.__super__.render.call(this);
                                        return e.addClass("select2-selection--single"),
                                            e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                                            e
                                    }
                                    ,
                                    i.prototype.bind = function(e, t) {
                                        var n = this;
                                        i.__super__.bind.apply(this, arguments);
                                        var r = e.id + "-container";
                                        this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"),
                                            this.$selection.attr("aria-labelledby", r),
                                            this.$selection.on("mousedown", (function(e) {
                                                    1 === e.which && n.trigger("toggle", {
                                                        originalEvent: e
                                                    })
                                                }
                                            )),
                                            this.$selection.on("focus", (function(e) {}
                                            )),
                                            this.$selection.on("blur", (function(e) {}
                                            )),
                                            e.on("focus", (function(t) {
                                                    e.isOpen() || n.$selection.trigger("focus")
                                                }
                                            ))
                                    }
                                    ,
                                    i.prototype.clear = function() {
                                        var e = this.$selection.find(".select2-selection__rendered");
                                        e.empty(),
                                            e.removeAttr("title")
                                    }
                                    ,
                                    i.prototype.display = function(e, t) {
                                        var n = this.options.get("templateSelection");
                                        return this.options.get("escapeMarkup")(n(e, t))
                                    }
                                    ,
                                    i.prototype.selectionContainer = function() {
                                        return e("<span></span>")
                                    }
                                    ,
                                    i.prototype.update = function(e) {
                                        if (0 !== e.length) {
                                            var t = e[0]
                                                , n = this.$selection.find(".select2-selection__rendered")
                                                , r = this.display(t, n);
                                            n.empty().append(r);
                                            var i = t.title || t.text;
                                            i ? n.attr("title", i) : n.removeAttr("title")
                                        } else
                                            this.clear()
                                    }
                                    ,
                                    i
                            }
                        )),
                        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
                                function r(e, t) {
                                    r.__super__.constructor.apply(this, arguments)
                                }
                                return n.Extend(r, t),
                                    r.prototype.render = function() {
                                        var e = r.__super__.render.call(this);
                                        return e.addClass("select2-selection--multiple"),
                                            e.html('<ul class="select2-selection__rendered"></ul>'),
                                            e
                                    }
                                    ,
                                    r.prototype.bind = function(t, i) {
                                        var o = this;
                                        r.__super__.bind.apply(this, arguments),
                                            this.$selection.on("click", (function(e) {
                                                    o.trigger("toggle", {
                                                        originalEvent: e
                                                    })
                                                }
                                            )),
                                            this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                                                    if (!o.isDisabled()) {
                                                        var r = e(this).parent()
                                                            , i = n.GetData(r[0], "data");
                                                        o.trigger("unselect", {
                                                            originalEvent: t,
                                                            data: i
                                                        })
                                                    }
                                                }
                                            ))
                                    }
                                    ,
                                    r.prototype.clear = function() {
                                        var e = this.$selection.find(".select2-selection__rendered");
                                        e.empty(),
                                            e.removeAttr("title")
                                    }
                                    ,
                                    r.prototype.display = function(e, t) {
                                        var n = this.options.get("templateSelection");
                                        return this.options.get("escapeMarkup")(n(e, t))
                                    }
                                    ,
                                    r.prototype.selectionContainer = function() {
                                        return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                                    }
                                    ,
                                    r.prototype.update = function(e) {
                                        if (this.clear(),
                                        0 !== e.length) {
                                            for (var t = [], r = 0; r < e.length; r++) {
                                                var i = e[r]
                                                    , o = this.selectionContainer()
                                                    , s = this.display(i, o);
                                                o.append(s);
                                                var a = i.title || i.text;
                                                a && o.attr("title", a),
                                                    n.StoreData(o[0], "data", i),
                                                    t.push(o)
                                            }
                                            var l = this.$selection.find(".select2-selection__rendered");
                                            n.appendMany(l, t)
                                        }
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/selection/placeholder", ["../utils"], (function(e) {
                                function t(e, t, n) {
                                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                                        e.call(this, t, n)
                                }
                                return t.prototype.normalizePlaceholder = function(e, t) {
                                    return "string" == typeof t && (t = {
                                        id: "",
                                        text: t
                                    }),
                                        t
                                }
                                    ,
                                    t.prototype.createPlaceholder = function(e, t) {
                                        var n = this.selectionContainer();
                                        return n.html(this.display(t)),
                                            n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                                            n
                                    }
                                    ,
                                    t.prototype.update = function(e, t) {
                                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                                        if (t.length > 1 || n)
                                            return e.call(this, t);
                                        this.clear();
                                        var r = this.createPlaceholder(this.placeholder);
                                        this.$selection.find(".select2-selection__rendered").append(r)
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
                                function r() {}
                                return r.prototype.bind = function(e, t, n) {
                                    var r = this;
                                    e.call(this, t, n),
                                    null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                                        this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                                                r._handleClear(e)
                                            }
                                        )),
                                        t.on("keypress", (function(e) {
                                                r._handleKeyboardClear(e, t)
                                            }
                                        ))
                                }
                                    ,
                                    r.prototype._handleClear = function(e, t) {
                                        if (!this.isDisabled()) {
                                            var r = this.$selection.find(".select2-selection__clear");
                                            if (0 !== r.length) {
                                                t.stopPropagation();
                                                var i = n.GetData(r[0], "data")
                                                    , o = this.$element.val();
                                                this.$element.val(this.placeholder.id);
                                                var s = {
                                                    data: i
                                                };
                                                if (this.trigger("clear", s),
                                                    s.prevented)
                                                    this.$element.val(o);
                                                else {
                                                    for (var a = 0; a < i.length; a++)
                                                        if (s = {
                                                            data: i[a]
                                                        },
                                                            this.trigger("unselect", s),
                                                            s.prevented)
                                                            return void this.$element.val(o);
                                                    this.$element.trigger("input").trigger("change"),
                                                        this.trigger("toggle", {})
                                                }
                                            }
                                        }
                                    }
                                    ,
                                    r.prototype._handleKeyboardClear = function(e, n, r) {
                                        r.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                                    }
                                    ,
                                    r.prototype.update = function(t, r) {
                                        if (t.call(this, r),
                                            !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === r.length)) {
                                            var i = this.options.get("translations").get("removeAllItems")
                                                , o = e('<span class="select2-selection__clear" title="' + i() + '">&times;</span>');
                                            n.StoreData(o[0], "data", r),
                                                this.$selection.find(".select2-selection__rendered").prepend(o)
                                        }
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                                function r(e, t, n) {
                                    e.call(this, t, n)
                                }
                                return r.prototype.render = function(t) {
                                    var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                                    this.$searchContainer = n,
                                        this.$search = n.find("input");
                                    var r = t.call(this);
                                    return this._transferTabIndex(),
                                        r
                                }
                                    ,
                                    r.prototype.bind = function(e, r, i) {
                                        var o = this
                                            , s = r.id + "-results";
                                        e.call(this, r, i),
                                            r.on("open", (function() {
                                                    o.$search.attr("aria-controls", s),
                                                        o.$search.trigger("focus")
                                                }
                                            )),
                                            r.on("close", (function() {
                                                    o.$search.val(""),
                                                        o.$search.removeAttr("aria-controls"),
                                                        o.$search.removeAttr("aria-activedescendant"),
                                                        o.$search.trigger("focus")
                                                }
                                            )),
                                            r.on("enable", (function() {
                                                    o.$search.prop("disabled", !1),
                                                        o._transferTabIndex()
                                                }
                                            )),
                                            r.on("disable", (function() {
                                                    o.$search.prop("disabled", !0)
                                                }
                                            )),
                                            r.on("focus", (function(e) {
                                                    o.$search.trigger("focus")
                                                }
                                            )),
                                            r.on("results:focus", (function(e) {
                                                    e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                                                }
                                            )),
                                            this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                                                    o.trigger("focus", e)
                                                }
                                            )),
                                            this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                                                    o._handleBlur(e)
                                                }
                                            )),
                                            this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                                                    if (e.stopPropagation(),
                                                        o.trigger("keypress", e),
                                                        o._keyUpPrevented = e.isDefaultPrevented(),
                                                    e.which === n.BACKSPACE && "" === o.$search.val()) {
                                                        var r = o.$searchContainer.prev(".select2-selection__choice");
                                                        if (r.length > 0) {
                                                            var i = t.GetData(r[0], "data");
                                                            o.searchRemoveChoice(i),
                                                                e.preventDefault()
                                                        }
                                                    }
                                                }
                                            )),
                                            this.$selection.on("click", ".select2-search--inline", (function(e) {
                                                    o.$search.val() && e.stopPropagation()
                                                }
                                            ));
                                        var a = document.documentMode
                                            , l = a && a <= 11;
                                        this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                                                l ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                                            }
                                        )),
                                            this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                                                    if (l && "input" === e.type)
                                                        o.$selection.off("input.search input.searchcheck");
                                                    else {
                                                        var t = e.which;
                                                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                                                    }
                                                }
                                            ))
                                    }
                                    ,
                                    r.prototype._transferTabIndex = function(e) {
                                        this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                                            this.$selection.attr("tabindex", "-1")
                                    }
                                    ,
                                    r.prototype.createPlaceholder = function(e, t) {
                                        this.$search.attr("placeholder", t.text)
                                    }
                                    ,
                                    r.prototype.update = function(e, t) {
                                        var n = this.$search[0] == document.activeElement;
                                        this.$search.attr("placeholder", ""),
                                            e.call(this, t),
                                            this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                                            this.resizeSearch(),
                                        n && this.$search.trigger("focus")
                                    }
                                    ,
                                    r.prototype.handleSearch = function() {
                                        if (this.resizeSearch(),
                                            !this._keyUpPrevented) {
                                            var e = this.$search.val();
                                            this.trigger("query", {
                                                term: e
                                            })
                                        }
                                        this._keyUpPrevented = !1
                                    }
                                    ,
                                    r.prototype.searchRemoveChoice = function(e, t) {
                                        this.trigger("unselect", {
                                            data: t
                                        }),
                                            this.$search.val(t.text),
                                            this.handleSearch()
                                    }
                                    ,
                                    r.prototype.resizeSearch = function() {
                                        this.$search.css("width", "25px");
                                        var e = "";
                                        e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em",
                                            this.$search.css("width", e)
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                                function t() {}
                                return t.prototype.bind = function(t, n, r) {
                                    var i = this
                                        , o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                                        , s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                                    t.call(this, n, r),
                                        n.on("*", (function(t, n) {
                                                if (-1 !== e.inArray(t, o)) {
                                                    n = n || {};
                                                    var r = e.Event("select2:" + t, {
                                                        params: n
                                                    });
                                                    i.$element.trigger(r),
                                                    -1 !== e.inArray(t, s) && (n.prevented = r.isDefaultPrevented())
                                                }
                                            }
                                        ))
                                }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                                function n(e) {
                                    this.dict = e || {}
                                }
                                return n.prototype.all = function() {
                                    return this.dict
                                }
                                    ,
                                    n.prototype.get = function(e) {
                                        return this.dict[e]
                                    }
                                    ,
                                    n.prototype.extend = function(t) {
                                        this.dict = e.extend({}, t.all(), this.dict)
                                    }
                                    ,
                                    n._cache = {},
                                    n.loadPath = function(e) {
                                        if (!(e in n._cache)) {
                                            var r = t(e);
                                            n._cache[e] = r
                                        }
                                        return new n(n._cache[e])
                                    }
                                    ,
                                    n
                            }
                        )),
                        t.define("select2/diacritics", [], (function() {
                                return {
                                    "Ⓐ": "A",
                                    "Ａ": "A",
                                    "À": "A",
                                    "Á": "A",
                                    "Â": "A",
                                    "Ầ": "A",
                                    "Ấ": "A",
                                    "Ẫ": "A",
                                    "Ẩ": "A",
                                    "Ã": "A",
                                    "Ā": "A",
                                    "Ă": "A",
                                    "Ằ": "A",
                                    "Ắ": "A",
                                    "Ẵ": "A",
                                    "Ẳ": "A",
                                    "Ȧ": "A",
                                    "Ǡ": "A",
                                    "Ä": "A",
                                    "Ǟ": "A",
                                    "Ả": "A",
                                    "Å": "A",
                                    "Ǻ": "A",
                                    "Ǎ": "A",
                                    "Ȁ": "A",
                                    "Ȃ": "A",
                                    "Ạ": "A",
                                    "Ậ": "A",
                                    "Ặ": "A",
                                    "Ḁ": "A",
                                    "Ą": "A",
                                    "Ⱥ": "A",
                                    "Ɐ": "A",
                                    "Ꜳ": "AA",
                                    "Æ": "AE",
                                    "Ǽ": "AE",
                                    "Ǣ": "AE",
                                    "Ꜵ": "AO",
                                    "Ꜷ": "AU",
                                    "Ꜹ": "AV",
                                    "Ꜻ": "AV",
                                    "Ꜽ": "AY",
                                    "Ⓑ": "B",
                                    "Ｂ": "B",
                                    "Ḃ": "B",
                                    "Ḅ": "B",
                                    "Ḇ": "B",
                                    "Ƀ": "B",
                                    "Ƃ": "B",
                                    "Ɓ": "B",
                                    "Ⓒ": "C",
                                    "Ｃ": "C",
                                    "Ć": "C",
                                    "Ĉ": "C",
                                    "Ċ": "C",
                                    "Č": "C",
                                    "Ç": "C",
                                    "Ḉ": "C",
                                    "Ƈ": "C",
                                    "Ȼ": "C",
                                    "Ꜿ": "C",
                                    "Ⓓ": "D",
                                    "Ｄ": "D",
                                    "Ḋ": "D",
                                    "Ď": "D",
                                    "Ḍ": "D",
                                    "Ḑ": "D",
                                    "Ḓ": "D",
                                    "Ḏ": "D",
                                    "Đ": "D",
                                    "Ƌ": "D",
                                    "Ɗ": "D",
                                    "Ɖ": "D",
                                    "Ꝺ": "D",
                                    "Ǳ": "DZ",
                                    "Ǆ": "DZ",
                                    "ǲ": "Dz",
                                    "ǅ": "Dz",
                                    "Ⓔ": "E",
                                    "Ｅ": "E",
                                    "È": "E",
                                    "É": "E",
                                    "Ê": "E",
                                    "Ề": "E",
                                    "Ế": "E",
                                    "Ễ": "E",
                                    "Ể": "E",
                                    "Ẽ": "E",
                                    "Ē": "E",
                                    "Ḕ": "E",
                                    "Ḗ": "E",
                                    "Ĕ": "E",
                                    "Ė": "E",
                                    "Ë": "E",
                                    "Ẻ": "E",
                                    "Ě": "E",
                                    "Ȅ": "E",
                                    "Ȇ": "E",
                                    "Ẹ": "E",
                                    "Ệ": "E",
                                    "Ȩ": "E",
                                    "Ḝ": "E",
                                    "Ę": "E",
                                    "Ḙ": "E",
                                    "Ḛ": "E",
                                    "Ɛ": "E",
                                    "Ǝ": "E",
                                    "Ⓕ": "F",
                                    "Ｆ": "F",
                                    "Ḟ": "F",
                                    "Ƒ": "F",
                                    "Ꝼ": "F",
                                    "Ⓖ": "G",
                                    "Ｇ": "G",
                                    "Ǵ": "G",
                                    "Ĝ": "G",
                                    "Ḡ": "G",
                                    "Ğ": "G",
                                    "Ġ": "G",
                                    "Ǧ": "G",
                                    "Ģ": "G",
                                    "Ǥ": "G",
                                    "Ɠ": "G",
                                    "Ꞡ": "G",
                                    "Ᵹ": "G",
                                    "Ꝿ": "G",
                                    "Ⓗ": "H",
                                    "Ｈ": "H",
                                    "Ĥ": "H",
                                    "Ḣ": "H",
                                    "Ḧ": "H",
                                    "Ȟ": "H",
                                    "Ḥ": "H",
                                    "Ḩ": "H",
                                    "Ḫ": "H",
                                    "Ħ": "H",
                                    "Ⱨ": "H",
                                    "Ⱶ": "H",
                                    "Ɥ": "H",
                                    "Ⓘ": "I",
                                    "Ｉ": "I",
                                    "Ì": "I",
                                    "Í": "I",
                                    "Î": "I",
                                    "Ĩ": "I",
                                    "Ī": "I",
                                    "Ĭ": "I",
                                    "İ": "I",
                                    "Ï": "I",
                                    "Ḯ": "I",
                                    "Ỉ": "I",
                                    "Ǐ": "I",
                                    "Ȉ": "I",
                                    "Ȋ": "I",
                                    "Ị": "I",
                                    "Į": "I",
                                    "Ḭ": "I",
                                    "Ɨ": "I",
                                    "Ⓙ": "J",
                                    "Ｊ": "J",
                                    "Ĵ": "J",
                                    "Ɉ": "J",
                                    "Ⓚ": "K",
                                    "Ｋ": "K",
                                    "Ḱ": "K",
                                    "Ǩ": "K",
                                    "Ḳ": "K",
                                    "Ķ": "K",
                                    "Ḵ": "K",
                                    "Ƙ": "K",
                                    "Ⱪ": "K",
                                    "Ꝁ": "K",
                                    "Ꝃ": "K",
                                    "Ꝅ": "K",
                                    "Ꞣ": "K",
                                    "Ⓛ": "L",
                                    "Ｌ": "L",
                                    "Ŀ": "L",
                                    "Ĺ": "L",
                                    "Ľ": "L",
                                    "Ḷ": "L",
                                    "Ḹ": "L",
                                    "Ļ": "L",
                                    "Ḽ": "L",
                                    "Ḻ": "L",
                                    "Ł": "L",
                                    "Ƚ": "L",
                                    "Ɫ": "L",
                                    "Ⱡ": "L",
                                    "Ꝉ": "L",
                                    "Ꝇ": "L",
                                    "Ꞁ": "L",
                                    "Ǉ": "LJ",
                                    "ǈ": "Lj",
                                    "Ⓜ": "M",
                                    "Ｍ": "M",
                                    "Ḿ": "M",
                                    "Ṁ": "M",
                                    "Ṃ": "M",
                                    "Ɱ": "M",
                                    "Ɯ": "M",
                                    "Ⓝ": "N",
                                    "Ｎ": "N",
                                    "Ǹ": "N",
                                    "Ń": "N",
                                    "Ñ": "N",
                                    "Ṅ": "N",
                                    "Ň": "N",
                                    "Ṇ": "N",
                                    "Ņ": "N",
                                    "Ṋ": "N",
                                    "Ṉ": "N",
                                    "Ƞ": "N",
                                    "Ɲ": "N",
                                    "Ꞑ": "N",
                                    "Ꞥ": "N",
                                    "Ǌ": "NJ",
                                    "ǋ": "Nj",
                                    "Ⓞ": "O",
                                    "Ｏ": "O",
                                    "Ò": "O",
                                    "Ó": "O",
                                    "Ô": "O",
                                    "Ồ": "O",
                                    "Ố": "O",
                                    "Ỗ": "O",
                                    "Ổ": "O",
                                    "Õ": "O",
                                    "Ṍ": "O",
                                    "Ȭ": "O",
                                    "Ṏ": "O",
                                    "Ō": "O",
                                    "Ṑ": "O",
                                    "Ṓ": "O",
                                    "Ŏ": "O",
                                    "Ȯ": "O",
                                    "Ȱ": "O",
                                    "Ö": "O",
                                    "Ȫ": "O",
                                    "Ỏ": "O",
                                    "Ő": "O",
                                    "Ǒ": "O",
                                    "Ȍ": "O",
                                    "Ȏ": "O",
                                    "Ơ": "O",
                                    "Ờ": "O",
                                    "Ớ": "O",
                                    "Ỡ": "O",
                                    "Ở": "O",
                                    "Ợ": "O",
                                    "Ọ": "O",
                                    "Ộ": "O",
                                    "Ǫ": "O",
                                    "Ǭ": "O",
                                    "Ø": "O",
                                    "Ǿ": "O",
                                    "Ɔ": "O",
                                    "Ɵ": "O",
                                    "Ꝋ": "O",
                                    "Ꝍ": "O",
                                    "Œ": "OE",
                                    "Ƣ": "OI",
                                    "Ꝏ": "OO",
                                    "Ȣ": "OU",
                                    "Ⓟ": "P",
                                    "Ｐ": "P",
                                    "Ṕ": "P",
                                    "Ṗ": "P",
                                    "Ƥ": "P",
                                    "Ᵽ": "P",
                                    "Ꝑ": "P",
                                    "Ꝓ": "P",
                                    "Ꝕ": "P",
                                    "Ⓠ": "Q",
                                    "Ｑ": "Q",
                                    "Ꝗ": "Q",
                                    "Ꝙ": "Q",
                                    "Ɋ": "Q",
                                    "Ⓡ": "R",
                                    "Ｒ": "R",
                                    "Ŕ": "R",
                                    "Ṙ": "R",
                                    "Ř": "R",
                                    "Ȑ": "R",
                                    "Ȓ": "R",
                                    "Ṛ": "R",
                                    "Ṝ": "R",
                                    "Ŗ": "R",
                                    "Ṟ": "R",
                                    "Ɍ": "R",
                                    "Ɽ": "R",
                                    "Ꝛ": "R",
                                    "Ꞧ": "R",
                                    "Ꞃ": "R",
                                    "Ⓢ": "S",
                                    "Ｓ": "S",
                                    "ẞ": "S",
                                    "Ś": "S",
                                    "Ṥ": "S",
                                    "Ŝ": "S",
                                    "Ṡ": "S",
                                    "Š": "S",
                                    "Ṧ": "S",
                                    "Ṣ": "S",
                                    "Ṩ": "S",
                                    "Ș": "S",
                                    "Ş": "S",
                                    "Ȿ": "S",
                                    "Ꞩ": "S",
                                    "Ꞅ": "S",
                                    "Ⓣ": "T",
                                    "Ｔ": "T",
                                    "Ṫ": "T",
                                    "Ť": "T",
                                    "Ṭ": "T",
                                    "Ț": "T",
                                    "Ţ": "T",
                                    "Ṱ": "T",
                                    "Ṯ": "T",
                                    "Ŧ": "T",
                                    "Ƭ": "T",
                                    "Ʈ": "T",
                                    "Ⱦ": "T",
                                    "Ꞇ": "T",
                                    "Ꜩ": "TZ",
                                    "Ⓤ": "U",
                                    "Ｕ": "U",
                                    "Ù": "U",
                                    "Ú": "U",
                                    "Û": "U",
                                    "Ũ": "U",
                                    "Ṹ": "U",
                                    "Ū": "U",
                                    "Ṻ": "U",
                                    "Ŭ": "U",
                                    "Ü": "U",
                                    "Ǜ": "U",
                                    "Ǘ": "U",
                                    "Ǖ": "U",
                                    "Ǚ": "U",
                                    "Ủ": "U",
                                    "Ů": "U",
                                    "Ű": "U",
                                    "Ǔ": "U",
                                    "Ȕ": "U",
                                    "Ȗ": "U",
                                    "Ư": "U",
                                    "Ừ": "U",
                                    "Ứ": "U",
                                    "Ữ": "U",
                                    "Ử": "U",
                                    "Ự": "U",
                                    "Ụ": "U",
                                    "Ṳ": "U",
                                    "Ų": "U",
                                    "Ṷ": "U",
                                    "Ṵ": "U",
                                    "Ʉ": "U",
                                    "Ⓥ": "V",
                                    "Ｖ": "V",
                                    "Ṽ": "V",
                                    "Ṿ": "V",
                                    "Ʋ": "V",
                                    "Ꝟ": "V",
                                    "Ʌ": "V",
                                    "Ꝡ": "VY",
                                    "Ⓦ": "W",
                                    "Ｗ": "W",
                                    "Ẁ": "W",
                                    "Ẃ": "W",
                                    "Ŵ": "W",
                                    "Ẇ": "W",
                                    "Ẅ": "W",
                                    "Ẉ": "W",
                                    "Ⱳ": "W",
                                    "Ⓧ": "X",
                                    "Ｘ": "X",
                                    "Ẋ": "X",
                                    "Ẍ": "X",
                                    "Ⓨ": "Y",
                                    "Ｙ": "Y",
                                    "Ỳ": "Y",
                                    "Ý": "Y",
                                    "Ŷ": "Y",
                                    "Ỹ": "Y",
                                    "Ȳ": "Y",
                                    "Ẏ": "Y",
                                    "Ÿ": "Y",
                                    "Ỷ": "Y",
                                    "Ỵ": "Y",
                                    "Ƴ": "Y",
                                    "Ɏ": "Y",
                                    "Ỿ": "Y",
                                    "Ⓩ": "Z",
                                    "Ｚ": "Z",
                                    "Ź": "Z",
                                    "Ẑ": "Z",
                                    "Ż": "Z",
                                    "Ž": "Z",
                                    "Ẓ": "Z",
                                    "Ẕ": "Z",
                                    "Ƶ": "Z",
                                    "Ȥ": "Z",
                                    "Ɀ": "Z",
                                    "Ⱬ": "Z",
                                    "Ꝣ": "Z",
                                    "ⓐ": "a",
                                    "ａ": "a",
                                    "ẚ": "a",
                                    "à": "a",
                                    "á": "a",
                                    "â": "a",
                                    "ầ": "a",
                                    "ấ": "a",
                                    "ẫ": "a",
                                    "ẩ": "a",
                                    "ã": "a",
                                    "ā": "a",
                                    "ă": "a",
                                    "ằ": "a",
                                    "ắ": "a",
                                    "ẵ": "a",
                                    "ẳ": "a",
                                    "ȧ": "a",
                                    "ǡ": "a",
                                    "ä": "a",
                                    "ǟ": "a",
                                    "ả": "a",
                                    "å": "a",
                                    "ǻ": "a",
                                    "ǎ": "a",
                                    "ȁ": "a",
                                    "ȃ": "a",
                                    "ạ": "a",
                                    "ậ": "a",
                                    "ặ": "a",
                                    "ḁ": "a",
                                    "ą": "a",
                                    "ⱥ": "a",
                                    "ɐ": "a",
                                    "ꜳ": "aa",
                                    "æ": "ae",
                                    "ǽ": "ae",
                                    "ǣ": "ae",
                                    "ꜵ": "ao",
                                    "ꜷ": "au",
                                    "ꜹ": "av",
                                    "ꜻ": "av",
                                    "ꜽ": "ay",
                                    "ⓑ": "b",
                                    "ｂ": "b",
                                    "ḃ": "b",
                                    "ḅ": "b",
                                    "ḇ": "b",
                                    "ƀ": "b",
                                    "ƃ": "b",
                                    "ɓ": "b",
                                    "ⓒ": "c",
                                    "ｃ": "c",
                                    "ć": "c",
                                    "ĉ": "c",
                                    "ċ": "c",
                                    "č": "c",
                                    "ç": "c",
                                    "ḉ": "c",
                                    "ƈ": "c",
                                    "ȼ": "c",
                                    "ꜿ": "c",
                                    "ↄ": "c",
                                    "ⓓ": "d",
                                    "ｄ": "d",
                                    "ḋ": "d",
                                    "ď": "d",
                                    "ḍ": "d",
                                    "ḑ": "d",
                                    "ḓ": "d",
                                    "ḏ": "d",
                                    "đ": "d",
                                    "ƌ": "d",
                                    "ɖ": "d",
                                    "ɗ": "d",
                                    "ꝺ": "d",
                                    "ǳ": "dz",
                                    "ǆ": "dz",
                                    "ⓔ": "e",
                                    "ｅ": "e",
                                    "è": "e",
                                    "é": "e",
                                    "ê": "e",
                                    "ề": "e",
                                    "ế": "e",
                                    "ễ": "e",
                                    "ể": "e",
                                    "ẽ": "e",
                                    "ē": "e",
                                    "ḕ": "e",
                                    "ḗ": "e",
                                    "ĕ": "e",
                                    "ė": "e",
                                    "ë": "e",
                                    "ẻ": "e",
                                    "ě": "e",
                                    "ȅ": "e",
                                    "ȇ": "e",
                                    "ẹ": "e",
                                    "ệ": "e",
                                    "ȩ": "e",
                                    "ḝ": "e",
                                    "ę": "e",
                                    "ḙ": "e",
                                    "ḛ": "e",
                                    "ɇ": "e",
                                    "ɛ": "e",
                                    "ǝ": "e",
                                    "ⓕ": "f",
                                    "ｆ": "f",
                                    "ḟ": "f",
                                    "ƒ": "f",
                                    "ꝼ": "f",
                                    "ⓖ": "g",
                                    "ｇ": "g",
                                    "ǵ": "g",
                                    "ĝ": "g",
                                    "ḡ": "g",
                                    "ğ": "g",
                                    "ġ": "g",
                                    "ǧ": "g",
                                    "ģ": "g",
                                    "ǥ": "g",
                                    "ɠ": "g",
                                    "ꞡ": "g",
                                    "ᵹ": "g",
                                    "ꝿ": "g",
                                    "ⓗ": "h",
                                    "ｈ": "h",
                                    "ĥ": "h",
                                    "ḣ": "h",
                                    "ḧ": "h",
                                    "ȟ": "h",
                                    "ḥ": "h",
                                    "ḩ": "h",
                                    "ḫ": "h",
                                    "ẖ": "h",
                                    "ħ": "h",
                                    "ⱨ": "h",
                                    "ⱶ": "h",
                                    "ɥ": "h",
                                    "ƕ": "hv",
                                    "ⓘ": "i",
                                    "ｉ": "i",
                                    "ì": "i",
                                    "í": "i",
                                    "î": "i",
                                    "ĩ": "i",
                                    "ī": "i",
                                    "ĭ": "i",
                                    "ï": "i",
                                    "ḯ": "i",
                                    "ỉ": "i",
                                    "ǐ": "i",
                                    "ȉ": "i",
                                    "ȋ": "i",
                                    "ị": "i",
                                    "į": "i",
                                    "ḭ": "i",
                                    "ɨ": "i",
                                    "ı": "i",
                                    "ⓙ": "j",
                                    "ｊ": "j",
                                    "ĵ": "j",
                                    "ǰ": "j",
                                    "ɉ": "j",
                                    "ⓚ": "k",
                                    "ｋ": "k",
                                    "ḱ": "k",
                                    "ǩ": "k",
                                    "ḳ": "k",
                                    "ķ": "k",
                                    "ḵ": "k",
                                    "ƙ": "k",
                                    "ⱪ": "k",
                                    "ꝁ": "k",
                                    "ꝃ": "k",
                                    "ꝅ": "k",
                                    "ꞣ": "k",
                                    "ⓛ": "l",
                                    "ｌ": "l",
                                    "ŀ": "l",
                                    "ĺ": "l",
                                    "ľ": "l",
                                    "ḷ": "l",
                                    "ḹ": "l",
                                    "ļ": "l",
                                    "ḽ": "l",
                                    "ḻ": "l",
                                    "ſ": "l",
                                    "ł": "l",
                                    "ƚ": "l",
                                    "ɫ": "l",
                                    "ⱡ": "l",
                                    "ꝉ": "l",
                                    "ꞁ": "l",
                                    "ꝇ": "l",
                                    "ǉ": "lj",
                                    "ⓜ": "m",
                                    "ｍ": "m",
                                    "ḿ": "m",
                                    "ṁ": "m",
                                    "ṃ": "m",
                                    "ɱ": "m",
                                    "ɯ": "m",
                                    "ⓝ": "n",
                                    "ｎ": "n",
                                    "ǹ": "n",
                                    "ń": "n",
                                    "ñ": "n",
                                    "ṅ": "n",
                                    "ň": "n",
                                    "ṇ": "n",
                                    "ņ": "n",
                                    "ṋ": "n",
                                    "ṉ": "n",
                                    "ƞ": "n",
                                    "ɲ": "n",
                                    "ŉ": "n",
                                    "ꞑ": "n",
                                    "ꞥ": "n",
                                    "ǌ": "nj",
                                    "ⓞ": "o",
                                    "ｏ": "o",
                                    "ò": "o",
                                    "ó": "o",
                                    "ô": "o",
                                    "ồ": "o",
                                    "ố": "o",
                                    "ỗ": "o",
                                    "ổ": "o",
                                    "õ": "o",
                                    "ṍ": "o",
                                    "ȭ": "o",
                                    "ṏ": "o",
                                    "ō": "o",
                                    "ṑ": "o",
                                    "ṓ": "o",
                                    "ŏ": "o",
                                    "ȯ": "o",
                                    "ȱ": "o",
                                    "ö": "o",
                                    "ȫ": "o",
                                    "ỏ": "o",
                                    "ő": "o",
                                    "ǒ": "o",
                                    "ȍ": "o",
                                    "ȏ": "o",
                                    "ơ": "o",
                                    "ờ": "o",
                                    "ớ": "o",
                                    "ỡ": "o",
                                    "ở": "o",
                                    "ợ": "o",
                                    "ọ": "o",
                                    "ộ": "o",
                                    "ǫ": "o",
                                    "ǭ": "o",
                                    "ø": "o",
                                    "ǿ": "o",
                                    "ɔ": "o",
                                    "ꝋ": "o",
                                    "ꝍ": "o",
                                    "ɵ": "o",
                                    "œ": "oe",
                                    "ƣ": "oi",
                                    "ȣ": "ou",
                                    "ꝏ": "oo",
                                    "ⓟ": "p",
                                    "ｐ": "p",
                                    "ṕ": "p",
                                    "ṗ": "p",
                                    "ƥ": "p",
                                    "ᵽ": "p",
                                    "ꝑ": "p",
                                    "ꝓ": "p",
                                    "ꝕ": "p",
                                    "ⓠ": "q",
                                    "ｑ": "q",
                                    "ɋ": "q",
                                    "ꝗ": "q",
                                    "ꝙ": "q",
                                    "ⓡ": "r",
                                    "ｒ": "r",
                                    "ŕ": "r",
                                    "ṙ": "r",
                                    "ř": "r",
                                    "ȑ": "r",
                                    "ȓ": "r",
                                    "ṛ": "r",
                                    "ṝ": "r",
                                    "ŗ": "r",
                                    "ṟ": "r",
                                    "ɍ": "r",
                                    "ɽ": "r",
                                    "ꝛ": "r",
                                    "ꞧ": "r",
                                    "ꞃ": "r",
                                    "ⓢ": "s",
                                    "ｓ": "s",
                                    "ß": "s",
                                    "ś": "s",
                                    "ṥ": "s",
                                    "ŝ": "s",
                                    "ṡ": "s",
                                    "š": "s",
                                    "ṧ": "s",
                                    "ṣ": "s",
                                    "ṩ": "s",
                                    "ș": "s",
                                    "ş": "s",
                                    "ȿ": "s",
                                    "ꞩ": "s",
                                    "ꞅ": "s",
                                    "ẛ": "s",
                                    "ⓣ": "t",
                                    "ｔ": "t",
                                    "ṫ": "t",
                                    "ẗ": "t",
                                    "ť": "t",
                                    "ṭ": "t",
                                    "ț": "t",
                                    "ţ": "t",
                                    "ṱ": "t",
                                    "ṯ": "t",
                                    "ŧ": "t",
                                    "ƭ": "t",
                                    "ʈ": "t",
                                    "ⱦ": "t",
                                    "ꞇ": "t",
                                    "ꜩ": "tz",
                                    "ⓤ": "u",
                                    "ｕ": "u",
                                    "ù": "u",
                                    "ú": "u",
                                    "û": "u",
                                    "ũ": "u",
                                    "ṹ": "u",
                                    "ū": "u",
                                    "ṻ": "u",
                                    "ŭ": "u",
                                    "ü": "u",
                                    "ǜ": "u",
                                    "ǘ": "u",
                                    "ǖ": "u",
                                    "ǚ": "u",
                                    "ủ": "u",
                                    "ů": "u",
                                    "ű": "u",
                                    "ǔ": "u",
                                    "ȕ": "u",
                                    "ȗ": "u",
                                    "ư": "u",
                                    "ừ": "u",
                                    "ứ": "u",
                                    "ữ": "u",
                                    "ử": "u",
                                    "ự": "u",
                                    "ụ": "u",
                                    "ṳ": "u",
                                    "ų": "u",
                                    "ṷ": "u",
                                    "ṵ": "u",
                                    "ʉ": "u",
                                    "ⓥ": "v",
                                    "ｖ": "v",
                                    "ṽ": "v",
                                    "ṿ": "v",
                                    "ʋ": "v",
                                    "ꝟ": "v",
                                    "ʌ": "v",
                                    "ꝡ": "vy",
                                    "ⓦ": "w",
                                    "ｗ": "w",
                                    "ẁ": "w",
                                    "ẃ": "w",
                                    "ŵ": "w",
                                    "ẇ": "w",
                                    "ẅ": "w",
                                    "ẘ": "w",
                                    "ẉ": "w",
                                    "ⱳ": "w",
                                    "ⓧ": "x",
                                    "ｘ": "x",
                                    "ẋ": "x",
                                    "ẍ": "x",
                                    "ⓨ": "y",
                                    "ｙ": "y",
                                    "ỳ": "y",
                                    "ý": "y",
                                    "ŷ": "y",
                                    "ỹ": "y",
                                    "ȳ": "y",
                                    "ẏ": "y",
                                    "ÿ": "y",
                                    "ỷ": "y",
                                    "ẙ": "y",
                                    "ỵ": "y",
                                    "ƴ": "y",
                                    "ɏ": "y",
                                    "ỿ": "y",
                                    "ⓩ": "z",
                                    "ｚ": "z",
                                    "ź": "z",
                                    "ẑ": "z",
                                    "ż": "z",
                                    "ž": "z",
                                    "ẓ": "z",
                                    "ẕ": "z",
                                    "ƶ": "z",
                                    "ȥ": "z",
                                    "ɀ": "z",
                                    "ⱬ": "z",
                                    "ꝣ": "z",
                                    "Ά": "Α",
                                    "Έ": "Ε",
                                    "Ή": "Η",
                                    "Ί": "Ι",
                                    "Ϊ": "Ι",
                                    "Ό": "Ο",
                                    "Ύ": "Υ",
                                    "Ϋ": "Υ",
                                    "Ώ": "Ω",
                                    "ά": "α",
                                    "έ": "ε",
                                    "ή": "η",
                                    "ί": "ι",
                                    "ϊ": "ι",
                                    "ΐ": "ι",
                                    "ό": "ο",
                                    "ύ": "υ",
                                    "ϋ": "υ",
                                    "ΰ": "υ",
                                    "ώ": "ω",
                                    "ς": "σ",
                                    "’": "'"
                                }
                            }
                        )),
                        t.define("select2/data/base", ["../utils"], (function(e) {
                                function t(e, n) {
                                    t.__super__.constructor.call(this)
                                }
                                return e.Extend(t, e.Observable),
                                    t.prototype.current = function(e) {
                                        throw new Error("The `current` method must be defined in child classes.")
                                    }
                                    ,
                                    t.prototype.query = function(e, t) {
                                        throw new Error("The `query` method must be defined in child classes.")
                                    }
                                    ,
                                    t.prototype.bind = function(e, t) {}
                                    ,
                                    t.prototype.destroy = function() {}
                                    ,
                                    t.prototype.generateResultId = function(t, n) {
                                        var r = t.id + "-result-";
                                        return r += e.generateChars(4),
                                            null != n.id ? r += "-" + n.id.toString() : r += "-" + e.generateChars(4),
                                            r
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
                                function r(e, t) {
                                    this.$element = e,
                                        this.options = t,
                                        r.__super__.constructor.call(this)
                                }
                                return t.Extend(r, e),
                                    r.prototype.current = function(e) {
                                        var t = []
                                            , r = this;
                                        this.$element.find(":selected").each((function() {
                                                var e = n(this)
                                                    , i = r.item(e);
                                                t.push(i)
                                            }
                                        )),
                                            e(t)
                                    }
                                    ,
                                    r.prototype.select = function(e) {
                                        var t = this;
                                        if (e.selected = !0,
                                            n(e.element).is("option"))
                                            return e.element.selected = !0,
                                                void this.$element.trigger("input").trigger("change");
                                        if (this.$element.prop("multiple"))
                                            this.current((function(r) {
                                                    var i = [];
                                                    (e = [e]).push.apply(e, r);
                                                    for (var o = 0; o < e.length; o++) {
                                                        var s = e[o].id;
                                                        -1 === n.inArray(s, i) && i.push(s)
                                                    }
                                                    t.$element.val(i),
                                                        t.$element.trigger("input").trigger("change")
                                                }
                                            ));
                                        else {
                                            var r = e.id;
                                            this.$element.val(r),
                                                this.$element.trigger("input").trigger("change")
                                        }
                                    }
                                    ,
                                    r.prototype.unselect = function(e) {
                                        var t = this;
                                        if (this.$element.prop("multiple")) {
                                            if (e.selected = !1,
                                                n(e.element).is("option"))
                                                return e.element.selected = !1,
                                                    void this.$element.trigger("input").trigger("change");
                                            this.current((function(r) {
                                                    for (var i = [], o = 0; o < r.length; o++) {
                                                        var s = r[o].id;
                                                        s !== e.id && -1 === n.inArray(s, i) && i.push(s)
                                                    }
                                                    t.$element.val(i),
                                                        t.$element.trigger("input").trigger("change")
                                                }
                                            ))
                                        }
                                    }
                                    ,
                                    r.prototype.bind = function(e, t) {
                                        var n = this;
                                        this.container = e,
                                            e.on("select", (function(e) {
                                                    n.select(e.data)
                                                }
                                            )),
                                            e.on("unselect", (function(e) {
                                                    n.unselect(e.data)
                                                }
                                            ))
                                    }
                                    ,
                                    r.prototype.destroy = function() {
                                        this.$element.find("*").each((function() {
                                                t.RemoveData(this)
                                            }
                                        ))
                                    }
                                    ,
                                    r.prototype.query = function(e, t) {
                                        var r = []
                                            , i = this;
                                        this.$element.children().each((function() {
                                                var t = n(this);
                                                if (t.is("option") || t.is("optgroup")) {
                                                    var o = i.item(t)
                                                        , s = i.matches(e, o);
                                                    null !== s && r.push(s)
                                                }
                                            }
                                        )),
                                            t({
                                                results: r
                                            })
                                    }
                                    ,
                                    r.prototype.addOptions = function(e) {
                                        t.appendMany(this.$element, e)
                                    }
                                    ,
                                    r.prototype.option = function(e) {
                                        var r;
                                        e.children ? (r = document.createElement("optgroup")).label = e.text : void 0 !== (r = document.createElement("option")).textContent ? r.textContent = e.text : r.innerText = e.text,
                                        void 0 !== e.id && (r.value = e.id),
                                        e.disabled && (r.disabled = !0),
                                        e.selected && (r.selected = !0),
                                        e.title && (r.title = e.title);
                                        var i = n(r)
                                            , o = this._normalizeItem(e);
                                        return o.element = r,
                                            t.StoreData(r, "data", o),
                                            i
                                    }
                                    ,
                                    r.prototype.item = function(e) {
                                        var r = {};
                                        if (null != (r = t.GetData(e[0], "data")))
                                            return r;
                                        if (e.is("option"))
                                            r = {
                                                id: e.val(),
                                                text: e.text(),
                                                disabled: e.prop("disabled"),
                                                selected: e.prop("selected"),
                                                title: e.prop("title")
                                            };
                                        else if (e.is("optgroup")) {
                                            r = {
                                                text: e.prop("label"),
                                                children: [],
                                                title: e.prop("title")
                                            };
                                            for (var i = e.children("option"), o = [], s = 0; s < i.length; s++) {
                                                var a = n(i[s])
                                                    , l = this.item(a);
                                                o.push(l)
                                            }
                                            r.children = o
                                        }
                                        return (r = this._normalizeItem(r)).element = e[0],
                                            t.StoreData(e[0], "data", r),
                                            r
                                    }
                                    ,
                                    r.prototype._normalizeItem = function(e) {
                                        return e !== Object(e) && (e = {
                                            id: e,
                                            text: e
                                        }),
                                        null != (e = n.extend({}, {
                                            text: ""
                                        }, e)).id && (e.id = e.id.toString()),
                                        null != e.text && (e.text = e.text.toString()),
                                        null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                                            n.extend({}, {
                                                selected: !1,
                                                disabled: !1
                                            }, e)
                                    }
                                    ,
                                    r.prototype.matches = function(e, t) {
                                        return this.options.get("matcher")(e, t)
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
                                function r(e, t) {
                                    this._dataToConvert = t.get("data") || [],
                                        r.__super__.constructor.call(this, e, t)
                                }
                                return t.Extend(r, e),
                                    r.prototype.bind = function(e, t) {
                                        r.__super__.bind.call(this, e, t),
                                            this.addOptions(this.convertToOptions(this._dataToConvert))
                                    }
                                    ,
                                    r.prototype.select = function(e) {
                                        var t = this.$element.find("option").filter((function(t, n) {
                                                return n.value == e.id.toString()
                                            }
                                        ));
                                        0 === t.length && (t = this.option(e),
                                            this.addOptions(t)),
                                            r.__super__.select.call(this, e)
                                    }
                                    ,
                                    r.prototype.convertToOptions = function(e) {
                                        var r = this
                                            , i = this.$element.find("option")
                                            , o = i.map((function() {
                                                return r.item(n(this)).id
                                            }
                                        )).get()
                                            , s = [];
                                        function a(e) {
                                            return function() {
                                                return n(this).val() == e.id
                                            }
                                        }
                                        for (var l = 0; l < e.length; l++) {
                                            var u = this._normalizeItem(e[l]);
                                            if (n.inArray(u.id, o) >= 0) {
                                                var c = i.filter(a(u))
                                                    , p = this.item(c)
                                                    , d = n.extend(!0, {}, u, p)
                                                    , f = this.option(d);
                                                c.replaceWith(f)
                                            } else {
                                                var h = this.option(u);
                                                if (u.children) {
                                                    var g = this.convertToOptions(u.children);
                                                    t.appendMany(h, g)
                                                }
                                                s.push(h)
                                            }
                                        }
                                        return s
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
                                function r(e, t) {
                                    this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                                    null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                                        r.__super__.constructor.call(this, e, t)
                                }
                                return t.Extend(r, e),
                                    r.prototype._applyDefaults = function(e) {
                                        var t = {
                                            data: function(e) {
                                                return n.extend({}, e, {
                                                    q: e.term
                                                })
                                            },
                                            transport: function(e, t, r) {
                                                var i = n.ajax(e);
                                                return i.then(t),
                                                    i.fail(r),
                                                    i
                                            }
                                        };
                                        return n.extend({}, t, e, !0)
                                    }
                                    ,
                                    r.prototype.processResults = function(e) {
                                        return e
                                    }
                                    ,
                                    r.prototype.query = function(e, t) {
                                        var r = this;
                                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(),
                                            this._request = null);
                                        var i = n.extend({
                                            type: "GET"
                                        }, this.ajaxOptions);
                                        function o() {
                                            var o = i.transport(i, (function(i) {
                                                    var o = r.processResults(i, e);
                                                    r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                                        t(o)
                                                }
                                            ), (function() {
                                                    (!("status"in o) || 0 !== o.status && "0" !== o.status) && r.trigger("results:message", {
                                                        message: "errorLoading"
                                                    })
                                                }
                                            ));
                                            r._request = o
                                        }
                                        "function" == typeof i.url && (i.url = i.url.call(this.$element, e)),
                                        "function" == typeof i.data && (i.data = i.data.call(this.$element, e)),
                                            this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                                                this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o()
                                    }
                                    ,
                                    r
                            }
                        )),
                        t.define("select2/data/tags", ["jquery"], (function(e) {
                                function t(t, n, r) {
                                    var i = r.get("tags")
                                        , o = r.get("createTag");
                                    void 0 !== o && (this.createTag = o);
                                    var s = r.get("insertTag");
                                    if (void 0 !== s && (this.insertTag = s),
                                        t.call(this, n, r),
                                        e.isArray(i))
                                        for (var a = 0; a < i.length; a++) {
                                            var l = i[a]
                                                , u = this._normalizeItem(l)
                                                , c = this.option(u);
                                            this.$element.append(c)
                                        }
                                }
                                return t.prototype.query = function(e, t, n) {
                                    var r = this;
                                    this._removeOldTags(),
                                        null != t.term && null == t.page ? e.call(this, t, (function e(i, o) {
                                                for (var s = i.results, a = 0; a < s.length; a++) {
                                                    var l = s[a]
                                                        , u = null != l.children && !e({
                                                        results: l.children
                                                    }, !0);
                                                    if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || u)
                                                        return !o && (i.data = s,
                                                            void n(i))
                                                }
                                                if (o)
                                                    return !0;
                                                var c = r.createTag(t);
                                                if (null != c) {
                                                    var p = r.option(c);
                                                    p.attr("data-select2-tag", !0),
                                                        r.addOptions([p]),
                                                        r.insertTag(s, c)
                                                }
                                                i.results = s,
                                                    n(i)
                                            }
                                        )) : e.call(this, t, n)
                                }
                                    ,
                                    t.prototype.createTag = function(t, n) {
                                        var r = e.trim(n.term);
                                        return "" === r ? null : {
                                            id: r,
                                            text: r
                                        }
                                    }
                                    ,
                                    t.prototype.insertTag = function(e, t, n) {
                                        t.unshift(n)
                                    }
                                    ,
                                    t.prototype._removeOldTags = function(t) {
                                        this.$element.find("option[data-select2-tag]").each((function() {
                                                this.selected || e(this).remove()
                                            }
                                        ))
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                                function t(e, t, n) {
                                    var r = n.get("tokenizer");
                                    void 0 !== r && (this.tokenizer = r),
                                        e.call(this, t, n)
                                }
                                return t.prototype.bind = function(e, t, n) {
                                    e.call(this, t, n),
                                        this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                                }
                                    ,
                                    t.prototype.query = function(t, n, r) {
                                        var i = this;
                                        n.term = n.term || "";
                                        var o = this.tokenizer(n, this.options, (function(t) {
                                                var n = i._normalizeItem(t);
                                                if (!i.$element.find("option").filter((function() {
                                                        return e(this).val() === n.id
                                                    }
                                                )).length) {
                                                    var r = i.option(n);
                                                    r.attr("data-select2-tag", !0),
                                                        i._removeOldTags(),
                                                        i.addOptions([r])
                                                }
                                                !function(e) {
                                                    i.trigger("select", {
                                                        data: e
                                                    })
                                                }(n)
                                            }
                                        ));
                                        o.term !== n.term && (this.$search.length && (this.$search.val(o.term),
                                            this.$search.trigger("focus")),
                                            n.term = o.term),
                                            t.call(this, n, r)
                                    }
                                    ,
                                    t.prototype.tokenizer = function(t, n, r, i) {
                                        for (var o = r.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                                            return {
                                                id: e.term,
                                                text: e.term
                                            }
                                        }
                                            ; a < s.length; ) {
                                            var u = s[a];
                                            if (-1 !== e.inArray(u, o)) {
                                                var c = s.substr(0, a)
                                                    , p = l(e.extend({}, n, {
                                                    term: c
                                                }));
                                                null != p ? (i(p),
                                                    s = s.substr(a + 1) || "",
                                                    a = 0) : a++
                                            } else
                                                a++
                                        }
                                        return {
                                            term: s
                                        }
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/data/minimumInputLength", [], (function() {
                                function e(e, t, n) {
                                    this.minimumInputLength = n.get("minimumInputLength"),
                                        e.call(this, t, n)
                                }
                                return e.prototype.query = function(e, t, n) {
                                    t.term = t.term || "",
                                        t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                                            message: "inputTooShort",
                                            args: {
                                                minimum: this.minimumInputLength,
                                                input: t.term,
                                                params: t
                                            }
                                        }) : e.call(this, t, n)
                                }
                                    ,
                                    e
                            }
                        )),
                        t.define("select2/data/maximumInputLength", [], (function() {
                                function e(e, t, n) {
                                    this.maximumInputLength = n.get("maximumInputLength"),
                                        e.call(this, t, n)
                                }
                                return e.prototype.query = function(e, t, n) {
                                    t.term = t.term || "",
                                        this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                                            message: "inputTooLong",
                                            args: {
                                                maximum: this.maximumInputLength,
                                                input: t.term,
                                                params: t
                                            }
                                        }) : e.call(this, t, n)
                                }
                                    ,
                                    e
                            }
                        )),
                        t.define("select2/data/maximumSelectionLength", [], (function() {
                                function e(e, t, n) {
                                    this.maximumSelectionLength = n.get("maximumSelectionLength"),
                                        e.call(this, t, n)
                                }
                                return e.prototype.bind = function(e, t, n) {
                                    var r = this;
                                    e.call(this, t, n),
                                        t.on("select", (function() {
                                                r._checkIfMaximumSelected()
                                            }
                                        ))
                                }
                                    ,
                                    e.prototype.query = function(e, t, n) {
                                        var r = this;
                                        this._checkIfMaximumSelected((function() {
                                                e.call(r, t, n)
                                            }
                                        ))
                                    }
                                    ,
                                    e.prototype._checkIfMaximumSelected = function(e, t) {
                                        var n = this;
                                        this.current((function(e) {
                                                var r = null != e ? e.length : 0;
                                                n.maximumSelectionLength > 0 && r >= n.maximumSelectionLength ? n.trigger("results:message", {
                                                    message: "maximumSelected",
                                                    args: {
                                                        maximum: n.maximumSelectionLength
                                                    }
                                                }) : t && t()
                                            }
                                        ))
                                    }
                                    ,
                                    e
                            }
                        )),
                        t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                                function n(e, t) {
                                    this.$element = e,
                                        this.options = t,
                                        n.__super__.constructor.call(this)
                                }
                                return t.Extend(n, t.Observable),
                                    n.prototype.render = function() {
                                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                                        return t.attr("dir", this.options.get("dir")),
                                            this.$dropdown = t,
                                            t
                                    }
                                    ,
                                    n.prototype.bind = function() {}
                                    ,
                                    n.prototype.position = function(e, t) {}
                                    ,
                                    n.prototype.destroy = function() {
                                        this.$dropdown.remove()
                                    }
                                    ,
                                    n
                            }
                        )),
                        t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
                                function n() {}
                                return n.prototype.render = function(t) {
                                    var n = t.call(this)
                                        , r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                                    return this.$searchContainer = r,
                                        this.$search = r.find("input"),
                                        n.prepend(r),
                                        n
                                }
                                    ,
                                    n.prototype.bind = function(t, n, r) {
                                        var i = this
                                            , o = n.id + "-results";
                                        t.call(this, n, r),
                                            this.$search.on("keydown", (function(e) {
                                                    i.trigger("keypress", e),
                                                        i._keyUpPrevented = e.isDefaultPrevented()
                                                }
                                            )),
                                            this.$search.on("input", (function(t) {
                                                    e(this).off("keyup")
                                                }
                                            )),
                                            this.$search.on("keyup input", (function(e) {
                                                    i.handleSearch(e)
                                                }
                                            )),
                                            n.on("open", (function() {
                                                    i.$search.attr("tabindex", 0),
                                                        i.$search.attr("aria-controls", o),
                                                        i.$search.trigger("focus"),
                                                        window.setTimeout((function() {
                                                                i.$search.trigger("focus")
                                                            }
                                                        ), 0)
                                                }
                                            )),
                                            n.on("close", (function() {
                                                    i.$search.attr("tabindex", -1),
                                                        i.$search.removeAttr("aria-controls"),
                                                        i.$search.removeAttr("aria-activedescendant"),
                                                        i.$search.val(""),
                                                        i.$search.trigger("blur")
                                                }
                                            )),
                                            n.on("focus", (function() {
                                                    n.isOpen() || i.$search.trigger("focus")
                                                }
                                            )),
                                            n.on("results:all", (function(e) {
                                                    null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                                                }
                                            )),
                                            n.on("results:focus", (function(e) {
                                                    e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant")
                                                }
                                            ))
                                    }
                                    ,
                                    n.prototype.handleSearch = function(e) {
                                        if (!this._keyUpPrevented) {
                                            var t = this.$search.val();
                                            this.trigger("query", {
                                                term: t
                                            })
                                        }
                                        this._keyUpPrevented = !1
                                    }
                                    ,
                                    n.prototype.showSearch = function(e, t) {
                                        return !0
                                    }
                                    ,
                                    n
                            }
                        )),
                        t.define("select2/dropdown/hidePlaceholder", [], (function() {
                                function e(e, t, n, r) {
                                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                                        e.call(this, t, n, r)
                                }
                                return e.prototype.append = function(e, t) {
                                    t.results = this.removePlaceholder(t.results),
                                        e.call(this, t)
                                }
                                    ,
                                    e.prototype.normalizePlaceholder = function(e, t) {
                                        return "string" == typeof t && (t = {
                                            id: "",
                                            text: t
                                        }),
                                            t
                                    }
                                    ,
                                    e.prototype.removePlaceholder = function(e, t) {
                                        for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                                            var i = t[r];
                                            this.placeholder.id === i.id && n.splice(r, 1)
                                        }
                                        return n
                                    }
                                    ,
                                    e
                            }
                        )),
                        t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                                function t(e, t, n, r) {
                                    this.lastParams = {},
                                        e.call(this, t, n, r),
                                        this.$loadingMore = this.createLoadingMore(),
                                        this.loading = !1
                                }
                                return t.prototype.append = function(e, t) {
                                    this.$loadingMore.remove(),
                                        this.loading = !1,
                                        e.call(this, t),
                                    this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                                        this.loadMoreIfNeeded())
                                }
                                    ,
                                    t.prototype.bind = function(e, t, n) {
                                        var r = this;
                                        e.call(this, t, n),
                                            t.on("query", (function(e) {
                                                    r.lastParams = e,
                                                        r.loading = !0
                                                }
                                            )),
                                            t.on("query:append", (function(e) {
                                                    r.lastParams = e,
                                                        r.loading = !0
                                                }
                                            )),
                                            this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                                    }
                                    ,
                                    t.prototype.loadMoreIfNeeded = function() {
                                        var t = e.contains(document.documentElement, this.$loadingMore[0]);
                                        !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore()
                                    }
                                    ,
                                    t.prototype.loadMore = function() {
                                        this.loading = !0;
                                        var t = e.extend({}, {
                                            page: 1
                                        }, this.lastParams);
                                        t.page++,
                                            this.trigger("query:append", t)
                                    }
                                    ,
                                    t.prototype.showLoadingMore = function(e, t) {
                                        return t.pagination && t.pagination.more
                                    }
                                    ,
                                    t.prototype.createLoadingMore = function() {
                                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
                                            , n = this.options.get("translations").get("loadingMore");
                                        return t.html(n(this.lastParams)),
                                            t
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                                function n(t, n, r) {
                                    this.$dropdownParent = e(r.get("dropdownParent") || document.body),
                                        t.call(this, n, r)
                                }
                                return n.prototype.bind = function(e, t, n) {
                                    var r = this;
                                    e.call(this, t, n),
                                        t.on("open", (function() {
                                                r._showDropdown(),
                                                    r._attachPositioningHandler(t),
                                                    r._bindContainerResultHandlers(t)
                                            }
                                        )),
                                        t.on("close", (function() {
                                                r._hideDropdown(),
                                                    r._detachPositioningHandler(t)
                                            }
                                        )),
                                        this.$dropdownContainer.on("mousedown", (function(e) {
                                                e.stopPropagation()
                                            }
                                        ))
                                }
                                    ,
                                    n.prototype.destroy = function(e) {
                                        e.call(this),
                                            this.$dropdownContainer.remove()
                                    }
                                    ,
                                    n.prototype.position = function(e, t, n) {
                                        t.attr("class", n.attr("class")),
                                            t.removeClass("select2"),
                                            t.addClass("select2-container--open"),
                                            t.css({
                                                position: "absolute",
                                                top: -999999
                                            }),
                                            this.$container = n
                                    }
                                    ,
                                    n.prototype.render = function(t) {
                                        var n = e("<span></span>")
                                            , r = t.call(this);
                                        return n.append(r),
                                            this.$dropdownContainer = n,
                                            n
                                    }
                                    ,
                                    n.prototype._hideDropdown = function(e) {
                                        this.$dropdownContainer.detach()
                                    }
                                    ,
                                    n.prototype._bindContainerResultHandlers = function(e, t) {
                                        if (!this._containerResultsHandlersBound) {
                                            var n = this;
                                            t.on("results:all", (function() {
                                                    n._positionDropdown(),
                                                        n._resizeDropdown()
                                                }
                                            )),
                                                t.on("results:append", (function() {
                                                        n._positionDropdown(),
                                                            n._resizeDropdown()
                                                    }
                                                )),
                                                t.on("results:message", (function() {
                                                        n._positionDropdown(),
                                                            n._resizeDropdown()
                                                    }
                                                )),
                                                t.on("select", (function() {
                                                        n._positionDropdown(),
                                                            n._resizeDropdown()
                                                    }
                                                )),
                                                t.on("unselect", (function() {
                                                        n._positionDropdown(),
                                                            n._resizeDropdown()
                                                    }
                                                )),
                                                this._containerResultsHandlersBound = !0
                                        }
                                    }
                                    ,
                                    n.prototype._attachPositioningHandler = function(n, r) {
                                        var i = this
                                            , o = "scroll.select2." + r.id
                                            , s = "resize.select2." + r.id
                                            , a = "orientationchange.select2." + r.id
                                            , l = this.$container.parents().filter(t.hasScroll);
                                        l.each((function() {
                                                t.StoreData(this, "select2-scroll-position", {
                                                    x: e(this).scrollLeft(),
                                                    y: e(this).scrollTop()
                                                })
                                            }
                                        )),
                                            l.on(o, (function(n) {
                                                    var r = t.GetData(this, "select2-scroll-position");
                                                    e(this).scrollTop(r.y)
                                                }
                                            )),
                                            e(window).on(o + " " + s + " " + a, (function(e) {
                                                    i._positionDropdown(),
                                                        i._resizeDropdown()
                                                }
                                            ))
                                    }
                                    ,
                                    n.prototype._detachPositioningHandler = function(n, r) {
                                        var i = "scroll.select2." + r.id
                                            , o = "resize.select2." + r.id
                                            , s = "orientationchange.select2." + r.id;
                                        this.$container.parents().filter(t.hasScroll).off(i),
                                            e(window).off(i + " " + o + " " + s)
                                    }
                                    ,
                                    n.prototype._positionDropdown = function() {
                                        var t = e(window)
                                            , n = this.$dropdown.hasClass("select2-dropdown--above")
                                            , r = this.$dropdown.hasClass("select2-dropdown--below")
                                            , i = null
                                            , o = this.$container.offset();
                                        o.bottom = o.top + this.$container.outerHeight(!1);
                                        var s = {
                                            height: this.$container.outerHeight(!1)
                                        };
                                        s.top = o.top,
                                            s.bottom = o.top + s.height;
                                        var a = this.$dropdown.outerHeight(!1)
                                            , l = t.scrollTop()
                                            , u = t.scrollTop() + t.height()
                                            , c = l < o.top - a
                                            , p = u > o.bottom + a
                                            , d = {
                                            left: o.left,
                                            top: s.bottom
                                        }
                                            , f = this.$dropdownParent;
                                        "static" === f.css("position") && (f = f.offsetParent());
                                        var h = {
                                            top: 0,
                                            left: 0
                                        };
                                        (e.contains(document.body, f[0]) || f[0].isConnected) && (h = f.offset()),
                                            d.top -= h.top,
                                            d.left -= h.left,
                                        n || r || (i = "below"),
                                            p || !c || n ? !c && p && n && (i = "below") : i = "above",
                                        ("above" == i || n && "below" !== i) && (d.top = s.top - h.top - a),
                                        null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i),
                                            this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)),
                                            this.$dropdownContainer.css(d)
                                    }
                                    ,
                                    n.prototype._resizeDropdown = function() {
                                        var e = {
                                            width: this.$container.outerWidth(!1) + "px"
                                        };
                                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                                            e.position = "relative",
                                            e.width = "auto"),
                                            this.$dropdown.css(e)
                                    }
                                    ,
                                    n.prototype._showDropdown = function(e) {
                                        this.$dropdownContainer.appendTo(this.$dropdownParent),
                                            this._positionDropdown(),
                                            this._resizeDropdown()
                                    }
                                    ,
                                    n
                            }
                        )),
                        t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                                function e(e, t, n, r) {
                                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                                    this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                                        e.call(this, t, n, r)
                                }
                                return e.prototype.showSearch = function(e, t) {
                                    return !(function e(t) {
                                        for (var n = 0, r = 0; r < t.length; r++) {
                                            var i = t[r];
                                            i.children ? n += e(i.children) : n++
                                        }
                                        return n
                                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                                }
                                    ,
                                    e
                            }
                        )),
                        t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                                function t() {}
                                return t.prototype.bind = function(e, t, n) {
                                    var r = this;
                                    e.call(this, t, n),
                                        t.on("close", (function(e) {
                                                r._handleSelectOnClose(e)
                                            }
                                        ))
                                }
                                    ,
                                    t.prototype._handleSelectOnClose = function(t, n) {
                                        if (n && null != n.originalSelect2Event) {
                                            var r = n.originalSelect2Event;
                                            if ("select" === r._type || "unselect" === r._type)
                                                return
                                        }
                                        var i = this.getHighlightedResults();
                                        if (!(i.length < 1)) {
                                            var o = e.GetData(i[0], "data");
                                            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                                                data: o
                                            })
                                        }
                                    }
                                    ,
                                    t
                            }
                        )),
                        t.define("select2/dropdown/closeOnSelect", [], (function() {
                                function e() {}
                                return e.prototype.bind = function(e, t, n) {
                                    var r = this;
                                    e.call(this, t, n),
                                        t.on("select", (function(e) {
                                                r._selectTriggered(e)
                                            }
                                        )),
                                        t.on("unselect", (function(e) {
                                                r._selectTriggered(e)
                                            }
                                        ))
                                }
                                    ,
                                    e.prototype._selectTriggered = function(e, t) {
                                        var n = t.originalEvent;
                                        n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                                            originalEvent: n,
                                            originalSelect2Event: t
                                        })
                                    }
                                    ,
                                    e
                            }
                        )),
                        t.define("select2/i18n/en", [], (function() {
                                return {
                                    errorLoading: function() {
                                        return "The results could not be loaded."
                                    },
                                    inputTooLong: function(e) {
                                        var t = e.input.length - e.maximum
                                            , n = "Please delete " + t + " character";
                                        return 1 != t && (n += "s"),
                                            n
                                    },
                                    inputTooShort: function(e) {
                                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                                    },
                                    loadingMore: function() {
                                        return "Loading more results…"
                                    },
                                    maximumSelected: function(e) {
                                        var t = "You can only select " + e.maximum + " item";
                                        return 1 != e.maximum && (t += "s"),
                                            t
                                    },
                                    noResults: function() {
                                        return "No results found"
                                    },
                                    searching: function() {
                                        return "Searching…"
                                    },
                                    removeAllItems: function() {
                                        return "Remove all items"
                                    }
                                }
                            }
                        )),
                        t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, n, r, i, o, s, a, l, u, c, p, d, f, h, g, m, v, y, b, x, w, _, C, A, T, $, S, E) {
                                function D() {
                                    this.reset()
                                }
                                return D.prototype.apply = function(c) {
                                    if (null == (c = e.extend(!0, {}, this.defaults, c)).dataAdapter) {
                                        if (null != c.ajax ? c.dataAdapter = h : null != c.data ? c.dataAdapter = f : c.dataAdapter = d,
                                        c.minimumInputLength > 0 && (c.dataAdapter = u.Decorate(c.dataAdapter, v)),
                                        c.maximumInputLength > 0 && (c.dataAdapter = u.Decorate(c.dataAdapter, y)),
                                        c.maximumSelectionLength > 0 && (c.dataAdapter = u.Decorate(c.dataAdapter, b)),
                                        c.tags && (c.dataAdapter = u.Decorate(c.dataAdapter, g)),
                                        null == c.tokenSeparators && null == c.tokenizer || (c.dataAdapter = u.Decorate(c.dataAdapter, m)),
                                        null != c.query) {
                                            var p = t(c.amdBase + "compat/query");
                                            c.dataAdapter = u.Decorate(c.dataAdapter, p)
                                        }
                                        if (null != c.initSelection) {
                                            var E = t(c.amdBase + "compat/initSelection");
                                            c.dataAdapter = u.Decorate(c.dataAdapter, E)
                                        }
                                    }
                                    if (null == c.resultsAdapter && (c.resultsAdapter = n,
                                    null != c.ajax && (c.resultsAdapter = u.Decorate(c.resultsAdapter, C)),
                                    null != c.placeholder && (c.resultsAdapter = u.Decorate(c.resultsAdapter, _)),
                                    c.selectOnClose && (c.resultsAdapter = u.Decorate(c.resultsAdapter, $))),
                                    null == c.dropdownAdapter) {
                                        if (c.multiple)
                                            c.dropdownAdapter = x;
                                        else {
                                            var D = u.Decorate(x, w);
                                            c.dropdownAdapter = D
                                        }
                                        if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = u.Decorate(c.dropdownAdapter, T)),
                                        c.closeOnSelect && (c.dropdownAdapter = u.Decorate(c.dropdownAdapter, S)),
                                        null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
                                            var k = t(c.amdBase + "compat/dropdownCss");
                                            c.dropdownAdapter = u.Decorate(c.dropdownAdapter, k)
                                        }
                                        c.dropdownAdapter = u.Decorate(c.dropdownAdapter, A)
                                    }
                                    if (null == c.selectionAdapter) {
                                        if (c.multiple ? c.selectionAdapter = i : c.selectionAdapter = r,
                                        null != c.placeholder && (c.selectionAdapter = u.Decorate(c.selectionAdapter, o)),
                                        c.allowClear && (c.selectionAdapter = u.Decorate(c.selectionAdapter, s)),
                                        c.multiple && (c.selectionAdapter = u.Decorate(c.selectionAdapter, a)),
                                        null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
                                            var j = t(c.amdBase + "compat/containerCss");
                                            c.selectionAdapter = u.Decorate(c.selectionAdapter, j)
                                        }
                                        c.selectionAdapter = u.Decorate(c.selectionAdapter, l)
                                    }
                                    c.language = this._resolveLanguage(c.language),
                                        c.language.push("en");
                                    for (var O = [], q = 0; q < c.language.length; q++) {
                                        var L = c.language[q];
                                        -1 === O.indexOf(L) && O.push(L)
                                    }
                                    return c.language = O,
                                        c.translations = this._processTranslations(c.language, c.debug),
                                        c
                                }
                                    ,
                                    D.prototype.reset = function() {
                                        function t(e) {
                                            return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                                                    return p[e] || e
                                                }
                                            ))
                                        }
                                        this.defaults = {
                                            amdBase: "./",
                                            amdLanguageBase: "./i18n/",
                                            closeOnSelect: !0,
                                            debug: !1,
                                            dropdownAutoWidth: !1,
                                            escapeMarkup: u.escapeMarkup,
                                            language: {},
                                            matcher: function n(r, i) {
                                                if ("" === e.trim(r.term))
                                                    return i;
                                                if (i.children && i.children.length > 0) {
                                                    for (var o = e.extend(!0, {}, i), s = i.children.length - 1; s >= 0; s--)
                                                        null == n(r, i.children[s]) && o.children.splice(s, 1);
                                                    return o.children.length > 0 ? o : n(r, o)
                                                }
                                                var a = t(i.text).toUpperCase()
                                                    , l = t(r.term).toUpperCase();
                                                return a.indexOf(l) > -1 ? i : null
                                            },
                                            minimumInputLength: 0,
                                            maximumInputLength: 0,
                                            maximumSelectionLength: 0,
                                            minimumResultsForSearch: 0,
                                            selectOnClose: !1,
                                            scrollAfterSelect: !1,
                                            sorter: function(e) {
                                                return e
                                            },
                                            templateResult: function(e) {
                                                return e.text
                                            },
                                            templateSelection: function(e) {
                                                return e.text
                                            },
                                            theme: "default",
                                            width: "resolve"
                                        }
                                    }
                                    ,
                                    D.prototype.applyFromElement = function(e, t) {
                                        var n = e.language
                                            , r = this.defaults.language
                                            , i = t.prop("lang")
                                            , o = t.closest("[lang]").prop("lang")
                                            , s = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(r), this._resolveLanguage(o));
                                        return e.language = s,
                                            e
                                    }
                                    ,
                                    D.prototype._resolveLanguage = function(t) {
                                        if (!t)
                                            return [];
                                        if (e.isEmptyObject(t))
                                            return [];
                                        if (e.isPlainObject(t))
                                            return [t];
                                        var n;
                                        n = e.isArray(t) ? t : [t];
                                        for (var r = [], i = 0; i < n.length; i++)
                                            if (r.push(n[i]),
                                            "string" == typeof n[i] && n[i].indexOf("-") > 0) {
                                                var o = n[i].split("-")[0];
                                                r.push(o)
                                            }
                                        return r
                                    }
                                    ,
                                    D.prototype._processTranslations = function(t, n) {
                                        for (var r = new c, i = 0; i < t.length; i++) {
                                            var o = new c
                                                , s = t[i];
                                            if ("string" == typeof s)
                                                try {
                                                    o = c.loadPath(s)
                                                } catch (e) {
                                                    try {
                                                        s = this.defaults.amdLanguageBase + s,
                                                            o = c.loadPath(s)
                                                    } catch (e) {
                                                        n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.')
                                                    }
                                                }
                                            else
                                                o = e.isPlainObject(s) ? new c(s) : s;
                                            r.extend(o)
                                        }
                                        return r
                                    }
                                    ,
                                    D.prototype.set = function(t, n) {
                                        var r = {};
                                        r[e.camelCase(t)] = n;
                                        var i = u._convertData(r);
                                        e.extend(!0, this.defaults, i)
                                    }
                                    ,
                                    new D
                            }
                        )),
                        t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, n, r) {
                                function i(t, i) {
                                    if (this.options = t,
                                    null != i && this.fromElement(i),
                                    null != i && (this.options = n.applyFromElement(this.options, i)),
                                        this.options = n.apply(this.options),
                                    i && i.is("input")) {
                                        var o = e(this.get("amdBase") + "compat/inputData");
                                        this.options.dataAdapter = r.Decorate(this.options.dataAdapter, o)
                                    }
                                }
                                return i.prototype.fromElement = function(e) {
                                    var n = ["select2"];
                                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                                    null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                                    null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                                        e.prop("disabled", this.options.disabled),
                                        e.prop("multiple", this.options.multiple),
                                    r.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                                        r.StoreData(e[0], "data", r.GetData(e[0], "select2Tags")),
                                        r.StoreData(e[0], "tags", !0)),
                                    r.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                                        e.attr("ajax--url", r.GetData(e[0], "ajaxUrl")),
                                        r.StoreData(e[0], "ajax-Url", r.GetData(e[0], "ajaxUrl")));
                                    var i = {};
                                    function o(e, t) {
                                        return t.toUpperCase()
                                    }
                                    for (var s = 0; s < e[0].attributes.length; s++) {
                                        var a = e[0].attributes[s].name;
                                        if ("data-" == a.substr(0, "data-".length)) {
                                            var l = a.substring("data-".length)
                                                , u = r.GetData(e[0], l);
                                            i[l.replace(/-([a-z])/g, o)] = u
                                        }
                                    }
                                    t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (i = t.extend(!0, {}, e[0].dataset, i));
                                    var c = t.extend(!0, {}, r.GetData(e[0]), i);
                                    for (var p in c = r._convertData(c))
                                        t.inArray(p, n) > -1 || (t.isPlainObject(this.options[p]) ? t.extend(this.options[p], c[p]) : this.options[p] = c[p]);
                                    return this
                                }
                                    ,
                                    i.prototype.get = function(e) {
                                        return this.options[e]
                                    }
                                    ,
                                    i.prototype.set = function(e, t) {
                                        this.options[e] = t
                                    }
                                    ,
                                    i
                            }
                        )),
                        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, r) {
                                var i = function(e, r) {
                                    null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(),
                                        this.$element = e,
                                        this.id = this._generateId(e),
                                        r = r || {},
                                        this.options = new t(r,e),
                                        i.__super__.constructor.call(this);
                                    var o = e.attr("tabindex") || 0;
                                    n.StoreData(e[0], "old-tabindex", o),
                                        e.attr("tabindex", "-1");
                                    var s = this.options.get("dataAdapter");
                                    this.dataAdapter = new s(e,this.options);
                                    var a = this.render();
                                    this._placeContainer(a);
                                    var l = this.options.get("selectionAdapter");
                                    this.selection = new l(e,this.options),
                                        this.$selection = this.selection.render(),
                                        this.selection.position(this.$selection, a);
                                    var u = this.options.get("dropdownAdapter");
                                    this.dropdown = new u(e,this.options),
                                        this.$dropdown = this.dropdown.render(),
                                        this.dropdown.position(this.$dropdown, a);
                                    var c = this.options.get("resultsAdapter");
                                    this.results = new c(e,this.options,this.dataAdapter),
                                        this.$results = this.results.render(),
                                        this.results.position(this.$results, this.$dropdown);
                                    var p = this;
                                    this._bindAdapters(),
                                        this._registerDomEvents(),
                                        this._registerDataEvents(),
                                        this._registerSelectionEvents(),
                                        this._registerDropdownEvents(),
                                        this._registerResultsEvents(),
                                        this._registerEvents(),
                                        this.dataAdapter.current((function(e) {
                                                p.trigger("selection:update", {
                                                    data: e
                                                })
                                            }
                                        )),
                                        e.addClass("select2-hidden-accessible"),
                                        e.attr("aria-hidden", "true"),
                                        this._syncAttributes(),
                                        n.StoreData(e[0], "select2", this),
                                        e.data("select2", this)
                                };
                                return n.Extend(i, n.Observable),
                                    i.prototype._generateId = function(e) {
                                        return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                                    }
                                    ,
                                    i.prototype._placeContainer = function(e) {
                                        e.insertAfter(this.$element);
                                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                                        null != t && e.css("width", t)
                                    }
                                    ,
                                    i.prototype._resolveWidth = function(e, t) {
                                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                        if ("resolve" == t) {
                                            var r = this._resolveWidth(e, "style");
                                            return null != r ? r : this._resolveWidth(e, "element")
                                        }
                                        if ("element" == t) {
                                            var i = e.outerWidth(!1);
                                            return i <= 0 ? "auto" : i + "px"
                                        }
                                        if ("style" == t) {
                                            var o = e.attr("style");
                                            if ("string" != typeof o)
                                                return null;
                                            for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                                                var u = s[a].replace(/\s/g, "").match(n);
                                                if (null !== u && u.length >= 1)
                                                    return u[1]
                                            }
                                            return null
                                        }
                                        return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
                                    }
                                    ,
                                    i.prototype._bindAdapters = function() {
                                        this.dataAdapter.bind(this, this.$container),
                                            this.selection.bind(this, this.$container),
                                            this.dropdown.bind(this, this.$container),
                                            this.results.bind(this, this.$container)
                                    }
                                    ,
                                    i.prototype._registerDomEvents = function() {
                                        var e = this;
                                        this.$element.on("change.select2", (function() {
                                                e.dataAdapter.current((function(t) {
                                                        e.trigger("selection:update", {
                                                            data: t
                                                        })
                                                    }
                                                ))
                                            }
                                        )),
                                            this.$element.on("focus.select2", (function(t) {
                                                    e.trigger("focus", t)
                                                }
                                            )),
                                            this._syncA = n.bind(this._syncAttributes, this),
                                            this._syncS = n.bind(this._syncSubtree, this),
                                        this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                                        var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                        null != t ? (this._observer = new t((function(t) {
                                                e._syncA(),
                                                    e._syncS(null, t)
                                            }
                                        )),
                                            this._observer.observe(this.$element[0], {
                                                attributes: !0,
                                                childList: !0,
                                                subtree: !1
                                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1),
                                            this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1),
                                            this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                                    }
                                    ,
                                    i.prototype._registerDataEvents = function() {
                                        var e = this;
                                        this.dataAdapter.on("*", (function(t, n) {
                                                e.trigger(t, n)
                                            }
                                        ))
                                    }
                                    ,
                                    i.prototype._registerSelectionEvents = function() {
                                        var t = this
                                            , n = ["toggle", "focus"];
                                        this.selection.on("toggle", (function() {
                                                t.toggleDropdown()
                                            }
                                        )),
                                            this.selection.on("focus", (function(e) {
                                                    t.focus(e)
                                                }
                                            )),
                                            this.selection.on("*", (function(r, i) {
                                                    -1 === e.inArray(r, n) && t.trigger(r, i)
                                                }
                                            ))
                                    }
                                    ,
                                    i.prototype._registerDropdownEvents = function() {
                                        var e = this;
                                        this.dropdown.on("*", (function(t, n) {
                                                e.trigger(t, n)
                                            }
                                        ))
                                    }
                                    ,
                                    i.prototype._registerResultsEvents = function() {
                                        var e = this;
                                        this.results.on("*", (function(t, n) {
                                                e.trigger(t, n)
                                            }
                                        ))
                                    }
                                    ,
                                    i.prototype._registerEvents = function() {
                                        var e = this;
                                        this.on("open", (function() {
                                                e.$container.addClass("select2-container--open")
                                            }
                                        )),
                                            this.on("close", (function() {
                                                    e.$container.removeClass("select2-container--open")
                                                }
                                            )),
                                            this.on("enable", (function() {
                                                    e.$container.removeClass("select2-container--disabled")
                                                }
                                            )),
                                            this.on("disable", (function() {
                                                    e.$container.addClass("select2-container--disabled")
                                                }
                                            )),
                                            this.on("blur", (function() {
                                                    e.$container.removeClass("select2-container--focus")
                                                }
                                            )),
                                            this.on("query", (function(t) {
                                                    e.isOpen() || e.trigger("open", {}),
                                                        this.dataAdapter.query(t, (function(n) {
                                                                e.trigger("results:all", {
                                                                    data: n,
                                                                    query: t
                                                                })
                                                            }
                                                        ))
                                                }
                                            )),
                                            this.on("query:append", (function(t) {
                                                    this.dataAdapter.query(t, (function(n) {
                                                            e.trigger("results:append", {
                                                                data: n,
                                                                query: t
                                                            })
                                                        }
                                                    ))
                                                }
                                            )),
                                            this.on("keypress", (function(t) {
                                                    var n = t.which;
                                                    e.isOpen() ? n === r.ESC || n === r.TAB || n === r.UP && t.altKey ? (e.close(t),
                                                        t.preventDefault()) : n === r.ENTER ? (e.trigger("results:select", {}),
                                                        t.preventDefault()) : n === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                                                        t.preventDefault()) : n === r.UP ? (e.trigger("results:previous", {}),
                                                        t.preventDefault()) : n === r.DOWN && (e.trigger("results:next", {}),
                                                        t.preventDefault()) : (n === r.ENTER || n === r.SPACE || n === r.DOWN && t.altKey) && (e.open(),
                                                        t.preventDefault())
                                                }
                                            ))
                                    }
                                    ,
                                    i.prototype._syncAttributes = function() {
                                        this.options.set("disabled", this.$element.prop("disabled")),
                                            this.isDisabled() ? (this.isOpen() && this.close(),
                                                this.trigger("disable", {})) : this.trigger("enable", {})
                                    }
                                    ,
                                    i.prototype._isChangeMutation = function(t, n) {
                                        var r = !1
                                            , i = this;
                                        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                                            if (n)
                                                if (n.addedNodes && n.addedNodes.length > 0)
                                                    for (var o = 0; o < n.addedNodes.length; o++)
                                                        n.addedNodes[o].selected && (r = !0);
                                                else
                                                    n.removedNodes && n.removedNodes.length > 0 ? r = !0 : e.isArray(n) && e.each(n, (function(e, t) {
                                                            if (i._isChangeMutation(e, t))
                                                                return r = !0,
                                                                    !1
                                                        }
                                                    ));
                                            else
                                                r = !0;
                                            return r
                                        }
                                    }
                                    ,
                                    i.prototype._syncSubtree = function(e, t) {
                                        var n = this._isChangeMutation(e, t)
                                            , r = this;
                                        n && this.dataAdapter.current((function(e) {
                                                r.trigger("selection:update", {
                                                    data: e
                                                })
                                            }
                                        ))
                                    }
                                    ,
                                    i.prototype.trigger = function(e, t) {
                                        var n = i.__super__.trigger
                                            , r = {
                                            open: "opening",
                                            close: "closing",
                                            select: "selecting",
                                            unselect: "unselecting",
                                            clear: "clearing"
                                        };
                                        if (void 0 === t && (t = {}),
                                        e in r) {
                                            var o = r[e]
                                                , s = {
                                                prevented: !1,
                                                name: e,
                                                args: t
                                            };
                                            if (n.call(this, o, s),
                                                s.prevented)
                                                return void (t.prevented = !0)
                                        }
                                        n.call(this, e, t)
                                    }
                                    ,
                                    i.prototype.toggleDropdown = function() {
                                        this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                                    }
                                    ,
                                    i.prototype.open = function() {
                                        this.isOpen() || this.isDisabled() || this.trigger("query", {})
                                    }
                                    ,
                                    i.prototype.close = function(e) {
                                        this.isOpen() && this.trigger("close", {
                                            originalEvent: e
                                        })
                                    }
                                    ,
                                    i.prototype.isEnabled = function() {
                                        return !this.isDisabled()
                                    }
                                    ,
                                    i.prototype.isDisabled = function() {
                                        return this.options.get("disabled")
                                    }
                                    ,
                                    i.prototype.isOpen = function() {
                                        return this.$container.hasClass("select2-container--open")
                                    }
                                    ,
                                    i.prototype.hasFocus = function() {
                                        return this.$container.hasClass("select2-container--focus")
                                    }
                                    ,
                                    i.prototype.focus = function(e) {
                                        this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                                            this.trigger("focus", {}))
                                    }
                                    ,
                                    i.prototype.enable = function(e) {
                                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                                        null != e && 0 !== e.length || (e = [!0]);
                                        var t = !e[0];
                                        this.$element.prop("disabled", t)
                                    }
                                    ,
                                    i.prototype.data = function() {
                                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                                        var e = [];
                                        return this.dataAdapter.current((function(t) {
                                                e = t
                                            }
                                        )),
                                            e
                                    }
                                    ,
                                    i.prototype.val = function(t) {
                                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                                        null == t || 0 === t.length)
                                            return this.$element.val();
                                        var n = t[0];
                                        e.isArray(n) && (n = e.map(n, (function(e) {
                                                return e.toString()
                                            }
                                        ))),
                                            this.$element.val(n).trigger("input").trigger("change")
                                    }
                                    ,
                                    i.prototype.destroy = function() {
                                        this.$container.remove(),
                                        this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                                            null != this._observer ? (this._observer.disconnect(),
                                                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                                                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                                                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                                            this._syncA = null,
                                            this._syncS = null,
                                            this.$element.off(".select2"),
                                            this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                                            this.$element.removeClass("select2-hidden-accessible"),
                                            this.$element.attr("aria-hidden", "false"),
                                            n.RemoveData(this.$element[0]),
                                            this.$element.removeData("select2"),
                                            this.dataAdapter.destroy(),
                                            this.selection.destroy(),
                                            this.dropdown.destroy(),
                                            this.results.destroy(),
                                            this.dataAdapter = null,
                                            this.selection = null,
                                            this.dropdown = null,
                                            this.results = null
                                    }
                                    ,
                                    i.prototype.render = function() {
                                        var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                                        return t.attr("dir", this.options.get("dir")),
                                            this.$container = t,
                                            this.$container.addClass("select2-container--" + this.options.get("theme")),
                                            n.StoreData(t[0], "element", this.$element),
                                            t
                                    }
                                    ,
                                    i
                            }
                        )),
                        t.define("jquery-mousewheel", ["jquery"], (function(e) {
                                return e
                            }
                        )),
                        t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, r, i) {
                                if (null == e.fn.select2) {
                                    var o = ["open", "close", "destroy"];
                                    e.fn.select2 = function(t) {
                                        if ("object" == typeof (t = t || {}))
                                            return this.each((function() {
                                                    var r = e.extend(!0, {}, t);
                                                    new n(e(this),r)
                                                }
                                            )),
                                                this;
                                        if ("string" == typeof t) {
                                            var r, s = Array.prototype.slice.call(arguments, 1);
                                            return this.each((function() {
                                                    var e = i.GetData(this, "select2");
                                                    null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                                                        r = e[t].apply(e, s)
                                                }
                                            )),
                                                e.inArray(t, o) > -1 ? this : r
                                        }
                                        throw new Error("Invalid arguments for Select2: " + t)
                                    }
                                }
                                return null == e.fn.select2.defaults && (e.fn.select2.defaults = r),
                                    n
                            }
                        )),
                        {
                            define: t.define,
                            require: t.require
                        }
                }()
                    , n = t.require("jquery.select2");
                return e.fn.select2.amd = t,
                    n
            }
        ) ? r.apply(t, i) : r) || (e.exports = o)
    },
    6: function(e, t, n) {},
    7: function(e, t, n) {}
});
