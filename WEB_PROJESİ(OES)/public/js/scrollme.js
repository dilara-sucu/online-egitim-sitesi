!function(e) {
    var t = {};
    function a(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, a),
            i.l = !0,
            i.exports
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
                for (var i in e)
                    a.d(n, i, function(t) {
                        return e[t]
                    }
                        .bind(null, i));
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
        a(a.s = 22)
}({
    22: function(e, t, a) {
        e.exports = a(23)
    },
    23: function(e, t) {
        var a, n, i, o;
        a = jQuery,
            n = {},
            i = a(document),
            o = a(window),
            n.body_height = 0,
            n.viewport_height = 0,
            n.viewport_top = 0,
            n.viewport_bottom = 0,
            n.viewport_top_previous = -1,
            n.elements = [],
            n.elements_in_view = [],
            n.property_defaults = {
                opacity: 1,
                translatex: 0,
                translatey: 0,
                translatez: 0,
                rotatex: 0,
                rotatey: 0,
                rotatez: 0,
                scale: 1,
                scalex: 1,
                scaley: 1,
                scalez: 1
            },
            n.scrollme_selector = ".scrollme",
            n.animateme_selector = ".animateme",
            n.update_interval = 10,
            n.easing_functions = {
                linear: function(e) {
                    return e
                },
                easeout: function(e) {
                    return e * e * e
                },
                easein: function(e) {
                    return 1 - (e = 1 - e) * e * e
                },
                easeinout: function(e) {
                    return e < .5 ? 4 * e * e * e : 1 - 4 * (e = 1 - e) * e * e
                }
            },
            n.init_events = ["ready", "page:load", "page:change"],
            n.init_if = function() {
                return !0
            }
            ,
            n.init = function() {
                return !!n.init_if() && (n.init_elements(),
                    n.on_resize(),
                    o.on("resize orientationchange", (function() {
                            n.on_resize()
                        }
                    )),
                    a(document).ready((function() {
                            setTimeout((function() {
                                    n.on_resize()
                                }
                            ), 100)
                        }
                    )),
                    setInterval(n.update, n.update_interval),
                    !0)
            }
            ,
            n.init_elements = function() {
                a(n.scrollme_selector).each((function() {
                        var e = {};
                        e.element = a(this);
                        var t = [];
                        a(this).find(n.animateme_selector).addBack(n.animateme_selector).each((function() {
                                var e = {};
                                e.element = a(this),
                                    e.when = e.element.data("when"),
                                    e.from = e.element.data("from"),
                                    e.to = e.element.data("to"),
                                    e.element.is("[data-crop]") ? e.crop = e.element.data("crop") : e.crop = !0,
                                    e.element.is("[data-easing]") ? e.easing = n.easing_functions[e.element.data("easing")] : e.easing = n.easing_functions.easeout;
                                var i = {};
                                e.element.is("[data-opacity]") && (i.opacity = e.element.data("opacity")),
                                e.element.is("[data-translatex]") && (i.translatex = e.element.data("translatex")),
                                e.element.is("[data-translatey]") && (i.translatey = e.element.data("translatey")),
                                e.element.is("[data-translatez]") && (i.translatez = e.element.data("translatez")),
                                e.element.is("[data-rotatex]") && (i.rotatex = e.element.data("rotatex")),
                                e.element.is("[data-rotatey]") && (i.rotatey = e.element.data("rotatey")),
                                e.element.is("[data-rotatez]") && (i.rotatez = e.element.data("rotatez")),
                                e.element.is("[data-scale]") && (i.scale = e.element.data("scale")),
                                e.element.is("[data-scalex]") && (i.scalex = e.element.data("scalex")),
                                e.element.is("[data-scaley]") && (i.scaley = e.element.data("scaley")),
                                e.element.is("[data-scalez]") && (i.scalez = e.element.data("scalez")),
                                    e.properties = i,
                                    t.push(e)
                            }
                        )),
                            e.effects = t,
                            n.elements.push(e)
                    }
                ))
            }
            ,
            n.update = function() {
                window.requestAnimationFrame((function() {
                        n.update_viewport_position(),
                        n.viewport_top_previous != n.viewport_top && (n.update_elements_in_view(),
                            n.animate()),
                            n.viewport_top_previous = n.viewport_top
                    }
                ))
            }
            ,
            n.animate = function() {
                for (var e = n.elements_in_view.length, t = 0; t < e; t++)
                    for (var a = n.elements_in_view[t], i = a.effects.length, o = 0; o < i; o++) {
                        var r = a.effects[o];
                        switch (r.when) {
                            case "view":
                            case "span":
                                var s = a.top - n.viewport_height
                                    , l = a.bottom;
                                break;
                            case "exit":
                                s = a.bottom - n.viewport_height,
                                    l = a.bottom;
                                break;
                            default:
                                s = a.top - n.viewport_height,
                                    l = a.top
                        }
                        r.crop && (s < 0 && (s = 0),
                        l > n.body_height - n.viewport_height && (l = n.body_height - n.viewport_height));
                        var u = (n.viewport_top - s) / (l - s)
                            , c = r.from
                            , p = r.to
                            , m = (u - c) / (p - c)
                            , _ = r.easing(m)
                            , d = n.animate_value(u, _, c, p, r, "opacity")
                            , f = n.animate_value(u, _, c, p, r, "translatey")
                            , v = n.animate_value(u, _, c, p, r, "translatex")
                            , h = n.animate_value(u, _, c, p, r, "translatez")
                            , y = n.animate_value(u, _, c, p, r, "rotatex")
                            , w = n.animate_value(u, _, c, p, r, "rotatey")
                            , g = n.animate_value(u, _, c, p, r, "rotatez")
                            , x = n.animate_value(u, _, c, p, r, "scale")
                            , b = n.animate_value(u, _, c, p, r, "scalex")
                            , z = n.animate_value(u, _, c, p, r, "scaley")
                            , j = n.animate_value(u, _, c, p, r, "scalez");
                        "scale"in r.properties && (b = x,
                            z = x,
                            j = x),
                            r.element.css({
                                opacity: d,
                                transform: "translate3d( " + v + "px , " + f + "px , " + h + "px ) rotateX( " + y + "deg ) rotateY( " + w + "deg ) rotateZ( " + g + "deg ) scale3d( " + b + " , " + z + " , " + j + " )"
                            })
                    }
            }
            ,
            n.animate_value = function(e, t, a, i, o, r) {
                var s = n.property_defaults[r];
                if (!(r in o.properties))
                    return s;
                var l = o.properties[r]
                    , u = i > a;
                if (e < a && u)
                    return s;
                if (e > i && u)
                    return l;
                if (e > a && !u)
                    return s;
                if (e < i && !u)
                    return l;
                var c = s + t * (l - s);
                switch (r) {
                    case "opacity":
                        c = c.toFixed(2);
                        break;
                    case "translatex":
                    case "translatey":
                    case "translatez":
                        c = c.toFixed(0);
                        break;
                    case "rotatex":
                    case "rotatey":
                    case "rotatez":
                        c = c.toFixed(1);
                        break;
                    case "scale":
                        c = c.toFixed(3)
                }
                return c
            }
            ,
            n.update_viewport_position = function() {
                n.viewport_top = o.scrollTop(),
                    n.viewport_bottom = n.viewport_top + n.viewport_height
            }
            ,
            n.update_elements_in_view = function() {
                n.elements_in_view = [];
                for (var e = n.elements.length, t = 0; t < e; t++)
                    n.elements[t].top < n.viewport_bottom && n.elements[t].bottom > n.viewport_top && n.elements_in_view.push(n.elements[t])
            }
            ,
            n.on_resize = function() {
                n.update_viewport(),
                    n.update_element_heights(),
                    n.update_viewport_position(),
                    n.update_elements_in_view(),
                    n.animate()
            }
            ,
            n.update_viewport = function() {
                n.body_height = i.height(),
                    n.viewport_height = o.height()
            }
            ,
            n.update_element_heights = function() {
                for (var e = n.elements.length, t = 0; t < e; t++) {
                    var a = n.elements[t].element.outerHeight()
                        , i = n.elements[t].element.offset();
                    n.elements[t].height = a,
                        n.elements[t].top = i.top,
                        n.elements[t].bottom = i.top + a
                }
            }
            ,
            a("docuemnt").ready((function() {
                    n.init()
                }
            ))
    }
});
