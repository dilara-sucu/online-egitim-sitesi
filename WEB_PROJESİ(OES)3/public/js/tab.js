!function(e) {
    var t = {};
    function a(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, a),
            r.l = !0,
            r.exports
    }
    a.m = e,
        a.c = t,
        a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        a.t = function(e, t) {
            if (1 & t && (e = a(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (a.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var r in e)
                    a.d(n, r, function(t) {
                        return e[t]
                    }
                        .bind(null, r));
            return n
        }
        ,
        a.n = function(e) {
            var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
            ;
            return a.d(t, "a", t),
                t
        }
        ,
        a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        a.p = "/assets/",
        a(a.s = 72)
}({
    72: function(e, t, a) {
        e.exports = a(73)
    },
    73: function(e, t, a) {
        "use strict";
        a.r(t);
        a(74);
        Drupal.behaviors.tabs = {
            attach: function(e, t) {
                jQuery(".m-tab-default__items--desc>a").once("tabs").click((function() {
                        jQuery(this).closest(".m-tab-default").find(".m-tab-default__items--desc").removeClass("m-tab-default__item--active"),
                            jQuery(this).closest(".m-tab-default__items--desc").addClass("m-tab-default__item--active");
                        var e = jQuery(this).closest(".m-tab-default__items--desc").index();
                        jQuery(this).closest(".m-tab-default").find(".m-tab-default__panes .m-tab-default__pane").removeClass(" m-tab-default__pane--active"),
                            jQuery(this).closest(".m-tab-default").find(".m-tab-default__panes .m-tab-default__pane").eq(e).addClass(" m-tab-default__pane--active")
                    }
                ))
            }
        }
    },
    74: function(e, t, a) {}
});
