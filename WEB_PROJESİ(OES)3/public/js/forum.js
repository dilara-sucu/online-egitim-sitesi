!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
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
                for (var o in e)
                    n.d(r, o, function(t) {
                        return e[t]
                    }
                        .bind(null, o));
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
        n(n.s = 65)
}({
    11: function(e, t, n) {},
    12: function(e, t, n) {},
    65: function(e, t, n) {
        e.exports = n(66)
    },
    66: function(e, t, n) {
        "use strict";
        n.r(t);
        n(67),
            n(68),
            n(11),
            n(12);
        function r(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return o(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                        , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, c = !0, u = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                        e
                },
                e: function(e) {
                    u = !0,
                        i = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (u)
                            throw i
                    }
                }
            }
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        jQuery((function(e) {
                e("div").hasClass("m-question-tab") && e(".m-tab-default__items--desc a[href='" + window.location.pathname + "']").parent("div").addClass("m-tab-default__item--active"),
                    window.formSubmit = function(e, t) {
                        jQuery(e).closest("form").submit()
                    }
                    ,
                    e(".qa-short-filter .m-select").attr("data-change", "formSubmit"),
                    e("#edit-soru-kategori").attr("data-change", "formSubmit");
                var t = function(e, t) {
                    t || (t = window.location.href);
                    e = e.replace(/[\[\]]/g, "\\$&");
                    var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                }("sort_bef_combine");
                void 0 !== t && null != t && (e(".qa-short-filter select :selected").prop("selected", !1),
                    e(".qa-short-filter select option[value=" + t + "]").prop("selected", !0)),
                    e(".ask_question").click((function(t) {
                            if (t.preventDefault(),
                                drupalSettings.user.uid) {
                                var n = !1;
                                try {
                                    var r = document.cookie.split("; ");
                                    r && r.find((function(e) {
                                            return e.startsWith("questionTermAccepted")
                                        }
                                    )) && (n = !0)
                                } catch (t) {
                                    n = !1
                                }
                                n ? window.location = e("#modal-question-terms form").attr("action") : e.fancybox.open({
                                    src: "#modal-question-terms"
                                })
                            } else {
                                var o = window.location.pathname;
                                "/soru-cevap" == o ? window.location = "".concat(drupalSettings.path.baseUrl, "user/login?destination=").concat(encodeURIComponent(o)) : location.reload()
                            }
                        }
                    )),
                    e(".question-term-accept-form").submit((function() {
                            document.cookie = "questionTermAccepted=true"
                        }
                    )),
                    e("#modal-user-badges").on("click", (function(t) {
                            t.preventDefault(),
                                t.preventDefault();
                            var n = e(this).data("author");
                            e.ajax({
                                url: "/badge-author/".concat(n),
                                success: function(e) {
                                    var t, n = "", o = r(e.badges);
                                    try {
                                        for (o.s(); !(t = o.n()).done; ) {
                                            var a = t.value;
                                            n += '\n                    <div class="m-grid-col-6">\n                        <div class="badge">\n                            <div class="badge__image"><img src="'.concat(a.badge_image, '"></div>\n                            <div class="badge__text"><b>').concat(a.badge_name, "</b></div>\n                        </div>\n                    </div>")
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    var i = "<h4>".concat(e.name, '’nın Rozetleri</h4>\n                <div class="badges">\n                    <div class="m-grid">\n                        ').concat(n, "\n                    </div>\n                </div>");
                                    showMessage(i, "large-modal m-modal--badges")
                                }
                            })
                        }
                    ))
            }
        )),
            jQuery(".m-card-answer-v2__answer p a").attr("rel", "nofollow"),
            jQuery(".m-card-answer-v2__comments p a").attr("rel", "nofollow"),
            jQuery(".m-card-question__answer p a").attr("rel", "nofollow")
    },
    67: function(e, t, n) {},
    68: function(e, t, n) {}
});
