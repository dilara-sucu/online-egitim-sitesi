!function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var o = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n.m = e,
        n.c = t,
        n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
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
            var a = Object.create(null);
            if (n.r(a),
                Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(a, o, function(t) {
                        return e[t]
                    }
                        .bind(null, o));
            return a
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
        n(n.s = 46)
}({
    46: function(e, t, n) {
        e.exports = n(47)
    },
    47: function(e, t, n) {
        "use strict";
        n.r(t);
        n(48),
            n(49);
        jQuery((function(e) {
                e(document).on("click", "#delete_friends", (function(t) {
                        t.preventDefault();
                        var n = e(this).attr("data-uid")
                            , a = e(this).attr("data-csrf");
                        e.ajax({
                            method: "POST",
                            url: "/delete_friend?uid=" + n,
                            data: {
                                csrf_token: a
                            },
                            success: function() {
                                location.reload()
                            }
                        })
                    }
                )).on("click", "#add_friends", (function(t) {
                        t.preventDefault();
                        var n = e(this).attr("data-uid")
                            , a = e(this).attr("data-csrf");
                        e.ajax({
                            method: "POST",
                            url: "/add_friend?uid=" + n,
                            data: {
                                csrf_token: a
                            },
                            success: function() {
                                location.reload()
                            }
                        })
                    }
                )).on("click", "#update_status", (function(t) {
                        t.preventDefault();
                        var n = e(this).attr("data-uid")
                            , a = e(this).attr("data-csrf")
                            , o = e(this).attr("data-status");
                        e.ajax({
                            method: "POST",
                            url: "/update-friend-request/" + n + "/" + o,
                            data: {
                                csrf_token: a
                            },
                            success: function() {
                                location.reload()
                            }
                        })
                    }
                )),
                    e(".js-user-avatar").on("click", (function() {
                            e(this).parents(".o-header__user__profile").toggleClass("active")
                        }
                    )),
                    e(".js_menu-trigger").on("click", (function(t) {
                            t.preventDefault(),
                                e(".o-header-mobile-menu__list > li").each((function(t, n) {
                                        e(n).find("ul").hide()
                                    }
                                )),
                                e(".o-header-mobile-menu__submenu").hide(),
                                e("body").addClass("mobile-menu-open"),
                                e(".o-header-mobile-menu").addClass("active")
                        }
                    )),
                    e(".js-header-menu-close").on("click", (function() {
                            e("body").removeClass("mobile-menu-open"),
                                e(".o-header-mobile-menu").removeClass("active"),
                                e(".o-header__search-open").removeClass("active")
                        }
                    )),
                    e(document).on("click", ".o-header-mobile-menu__list li a", (function(t) {
                            var n = e(t.target).closest("li");
                            n.children("ul").length > 0 && (t.preventDefault(),
                                n.children("a").toggleClass("active"),
                                n.children("ul").slideToggle())
                        }
                    )).on("click", ".o-header-mobile-menu__item--profile", (function() {
                            var t = e(this).find("ul");
                            e(this).hasClass("o-header-mobile-menu__item--active") ? t.slideUp() : t.slideDown(),
                                e(this).toggleClass("o-header-mobile-menu__item--active")
                        }
                    )).on("click", ".js-o-header-search, .js-o-header-close", (function(t) {
                            t.preventDefault(),
                                e(".o-header__search-open").toggleClass("active")
                        }
                    )).on("click", ".js_menu-search-trigger", (function(t) {
                            t.preventDefault(),
                                e("body").addClass("mobile-menu-open"),
                                e(".o-header-mobile-menu").addClass("active"),
                                e(".o-header__search-open").addClass("active")
                        }
                    ))
            }
        ))
    },
    48: function(e, t, n) {},
    49: function(e, t, n) {}
});
