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
        n(n.s = 60)
}({
    60: function(e, t, n) {
        e.exports = n(61)
    },
    61: function(e, t, n) {
        "use strict";
        n.r(t);
        n(62),
            n(63),
            n(64),
            n(9);
        var r = null;
        jQuery(".fast-login").click((function() {
                if (!r || r.closed) {
                    var e = screen.width / 2 - 200
                        , t = screen.height / 2 - 250;
                    r = window.open("/user/login?op=fastlogin", "_blank", "menubar=0,toolbar=0,directories=0,location=1,scrollbars=no,resizable=no, height = 500, width = 400,top=" + t + ",left=" + e)
                }
            }
        )),
            jQuery((function(e) {
                    e(".js-toggle-password").click((function() {
                            var t = e(this).parent().find("input");
                            t.focus(),
                                "password" == t.attr("type") ? t.attr("type", "text") : t.attr("type", "password")
                        }
                    )),
                        e(document).on("keyup", ".user-register-form #edit-name", (function() {
                                var e = jQuery(this).val();
                                jQuery(this).val(e.toLowerCase().replaceAll(/[^a-z0-9]/g, ""))
                            }
                        ))
                }
            ))
    },
    62: function(e, t, n) {},
    63: function(e, t, n) {},
    64: function(e, t, n) {},
    9: function(e, t, n) {}
});
