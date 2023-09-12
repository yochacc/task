/*! For license information please see 96-43f1dbc62659bc4802c3.js.LICENSE.txt */
(self.webpackChunkorange = self.webpackChunkorange || []).push([[96], {
    3658: (e,t)=>{
        "use strict";
        var s = function(e, t, s, i) {
            var a = ""
                , n = "";
            if (s) {
                var r = new Date;
                r.setTime(r.getTime() + 60 * s * 1e3),
                    a = "; expires=" + r.toGMTString()
            }
            i && (n = "; domain=" + i),
                document.cookie = e + "=" + escape(t) + a + n + "; path=/; samesite=lax"
        }
            , i = function(e) {
            var t, s, i = e + "=", a = document.cookie.split(";");
            for (t = 0; t < a.length; t++) {
                for (s = a[t]; " " === s.charAt(0); )
                    s = s.substring(1, s.length);
                if (0 === s.indexOf(i))
                    return unescape(s.substring(i.length, s.length))
            }
            return null
        }
            , a = {
            urlPrefix: "",
            visitsUrl: "/ahoy/visits",
            eventsUrl: "/ahoy/events",
            page: null,
            platform: "Web",
            useBeacon: !0,
            startOnReady: !0,
            trackVisits: !0,
            cookies: !0,
            cookieDomain: null,
            headers: {},
            visitParams: {},
            withCredentials: !1,
            visitDuration: 240,
            visitorDuration: 1051200
        }
            , n = window.ahoy || window.Ahoy || {};
        n.configure = function(e) {
            for (var t in e)
                e.hasOwnProperty(t) && (a[t] = e[t])
        }
            ,
            n.configure(n);
        var r, o, l, d, c = window.jQuery || window.Zepto || window.$, p = !1, h = [], u = "undefined" !== typeof JSON && "undefined" !== typeof JSON.stringify, f = [];
        function m() {
            return a.urlPrefix + a.eventsUrl
        }
        function g() {
            return (a.useBeacon || a.trackNow) && (e = a.headers,
            0 === Object.keys(e).length) && u && "undefined" !== typeof window.navigator.sendBeacon && !a.withCredentials;
            var e
        }
        function v(e, t, i) {
            s(e, t, i, a.cookieDomain || a.domain)
        }
        function b(e) {
            return i(e)
        }
        function y(e) {
            s(e, "", -1)
        }
        function x(e) {
            b("ahoy_debug") && window.console.log(e)
        }
        function w() {
            for (var e; e = h.shift(); )
                e();
            p = !0
        }
        function T(e, t) {
            var s = e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
            return s ? s.apply(e, [t]) ? e : e.parentElement ? T(e.parentElement, t) : null : (x("Unable to match"),
                null)
        }
        function E(e, t, s) {
            document.addEventListener(e, (function(e) {
                    var i = T(e.target, t);
                    i && s.call(i, e)
                }
            ))
        }
        function C() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                }
            ))
        }
        function S() {
            a.cookies && u && v("ahoy_events", JSON.stringify(f), 1)
        }
        function $() {
            var e = document.querySelector("meta[name=csrf-token]");
            return e && e.content
        }
        function M(e) {
            var t = $();
            t && e.setRequestHeader("X-CSRF-Token", t)
        }
        function P(e, t, s) {
            if (u)
                if (c && c.ajax)
                    c.ajax({
                        type: "POST",
                        url: e,
                        data: JSON.stringify(t),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        beforeSend: M,
                        success: s,
                        headers: a.headers,
                        xhrFields: {
                            withCredentials: a.withCredentials
                        }
                    });
                else {
                    var i = new XMLHttpRequest;
                    for (var n in i.open("POST", e, !0),
                        i.withCredentials = a.withCredentials,
                        i.setRequestHeader("Content-Type", "application/json"),
                        a.headers)
                        a.headers.hasOwnProperty(n) && i.setRequestHeader(n, a.headers[n]);
                    i.onload = function() {
                        200 === i.status && s()
                    }
                        ,
                        M(i),
                        i.send(JSON.stringify(t))
                }
        }
        function L(e) {
            var t = {
                events: [e]
            };
            return a.cookies && (t.visit_token = e.visit_token,
                t.visitor_token = e.visitor_token),
                delete e.visit_token,
                delete e.visitor_token,
                t
        }
        function k(e) {
            n.ready((function() {
                    P(m(), L(e), (function() {
                            for (var t = 0; t < f.length; t++)
                                if (f[t].id == e.id) {
                                    f.splice(t, 1);
                                    break
                                }
                            S()
                        }
                    ))
                }
            ))
        }
        function z(e) {
            n.ready((function() {
                    var t, s = L(e), i = (t = document.querySelector("meta[name=csrf-param]")) && t.content, a = $();
                    i && a && (s[i] = a),
                        s.events_json = JSON.stringify(s.events),
                        delete s.events,
                        window.navigator.sendBeacon(m(), function(e) {
                            var t = new FormData;
                            for (var s in e)
                                e.hasOwnProperty(s) && t.append(s, e[s]);
                            return t
                        }(s))
                }
            ))
        }
        function I() {
            return a.page || window.location.pathname
        }
        function A(e) {
            return e && e.length > 0 ? e : null
        }
        function D() {
            return function(e) {
                for (var t in e)
                    e.hasOwnProperty(t) && null === e[t] && delete e[t];
                return e
            }({
                tag: this.tagName.toLowerCase(),
                id: A(this.id),
                class: A(this.className),
                page: I(),
                section: O(this)
            })
        }
        function O(e) {
            for (; e && e !== document; e = e.parentNode)
                if (e.hasAttribute("data-section"))
                    return e.getAttribute("data-section");
            return null
        }
        function H() {
            if (p = !1,
                r = n.getVisitId(),
                o = n.getVisitorId(),
                l = b("ahoy_track"),
            !1 === a.cookies || !1 === a.trackVisits)
                x("Visit tracking disabled"),
                    w();
            else if (r && o && !l)
                x("Active visit"),
                    w();
            else if (r || v("ahoy_visit", r = C(), a.visitDuration),
                b("ahoy_visit")) {
                x("Visit started"),
                o || v("ahoy_visitor", o = C(), a.visitorDuration);
                var e = {
                    visit_token: r,
                    visitor_token: o,
                    platform: a.platform,
                    landing_page: window.location.href,
                    screen_width: window.screen.width,
                    screen_height: window.screen.height,
                    js: !0
                };
                for (var t in document.referrer.length > 0 && (e.referrer = document.referrer),
                    a.visitParams)
                    a.visitParams.hasOwnProperty(t) && (e[t] = a.visitParams[t]);
                x(e),
                    P(a.urlPrefix + a.visitsUrl, e, (function() {
                            y("ahoy_track"),
                                w()
                        }
                    ))
            } else
                x("Cookies disabled"),
                    w()
        }
        n.ready = function(e) {
            p ? e() : h.push(e)
        }
            ,
            n.getVisitId = n.getVisitToken = function() {
                return b("ahoy_visit")
            }
            ,
            n.getVisitorId = n.getVisitorToken = function() {
                return b("ahoy_visitor")
            }
            ,
            n.reset = function() {
                return y("ahoy_visit"),
                    y("ahoy_visitor"),
                    y("ahoy_events"),
                    y("ahoy_track"),
                    !0
            }
            ,
            n.debug = function(e) {
                return !1 === e ? y("ahoy_debug") : v("ahoy_debug", "t", 525600),
                    !0
            }
            ,
            n.track = function(e, t) {
                var s = {
                    name: e,
                    properties: t || {},
                    time: (new Date).getTime() / 1e3,
                    id: C(),
                    js: !0
                };
                return n.ready((function() {
                        a.cookies && !n.getVisitId() && H(),
                            n.ready((function() {
                                    x(s),
                                        s.visit_token = n.getVisitId(),
                                        s.visitor_token = n.getVisitorId(),
                                        g() ? z(s) : (f.push(s),
                                            S(),
                                            setTimeout((function() {
                                                    k(s)
                                                }
                                            ), 1e3))
                                }
                            ))
                    }
                )),
                    !0
            }
            ,
            n.trackView = function(e) {
                var t = {
                    url: window.location.href,
                    title: document.title,
                    page: I()
                };
                if (e)
                    for (var s in e)
                        e.hasOwnProperty(s) && (t[s] = e[s]);
                n.track("$view", t)
            }
            ,
            n.trackClicks = function(e) {
                if (void 0 === e)
                    throw new Error("Missing selector");
                E("click", e, (function(e) {
                        var t = D.call(this, e);
                        t.text = "input" == t.tag ? this.value : (this.textContent || this.innerText || this.innerHTML).replace(/[\s\r\n]+/g, " ").trim(),
                            t.href = this.href,
                            n.track("$click", t)
                    }
                ))
            }
            ,
            n.trackSubmits = function(e) {
                if (void 0 === e)
                    throw new Error("Missing selector");
                E("submit", e, (function(e) {
                        var t = D.call(this, e);
                        n.track("$submit", t)
                    }
                ))
            }
            ,
            n.trackChanges = function(e) {
                if (x("trackChanges is deprecated and will be removed in 0.5.0"),
                void 0 === e)
                    throw new Error("Missing selector");
                E("change", e, (function(e) {
                        var t = D.call(this, e);
                        n.track("$change", t)
                    }
                ))
            }
        ;
        try {
            f = JSON.parse(b("ahoy_events") || "[]")
        } catch (F) {}
        for (var N = 0; N < f.length; N++)
            k(f[N]);
        n.start = function() {
            H(),
                n.start = function() {}
        }
            ,
            d = function() {
                a.startOnReady && n.start()
            }
            ,
            "interactive" === document.readyState || "complete" === document.readyState ? setTimeout(d, 0) : document.addEventListener("DOMContentLoaded", d),
            t.Z = n
    }
    ,
    2213: e=>{
        window,
            e.exports = function(e) {
                var t = {};
                function s(i) {
                    if (t[i])
                        return t[i].exports;
                    var a = t[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(a.exports, a, a.exports, s),
                        a.l = !0,
                        a.exports
                }
                return s.m = e,
                    s.c = t,
                    s.d = function(e, t, i) {
                        s.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: i
                        })
                    }
                    ,
                    s.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                    }
                    ,
                    s.t = function(e, t) {
                        if (1 & t && (e = s(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var i = Object.create(null);
                        if (s.r(i),
                            Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: e
                            }),
                        2 & t && "string" != typeof e)
                            for (var a in e)
                                s.d(i, a, function(t) {
                                    return e[t]
                                }
                                    .bind(null, a));
                        return i
                    }
                    ,
                    s.n = function(e) {
                        var t = e && e.__esModule ? function() {
                                    return e.default
                                }
                                : function() {
                                    return e
                                }
                        ;
                        return s.d(t, "a", t),
                            t
                    }
                    ,
                    s.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    s.p = "",
                    s(s.s = 0)
            }([function(e, t, s) {
                "use strict";
                s.r(t);
                var i, a = "fslightbox-", n = "".concat(a, "styles"), r = "".concat(a, "cursor-grabbing"), o = "".concat(a, "full-dimension"), l = "".concat(a, "flex-centered"), d = "".concat(a, "open"), c = "".concat(a, "transform-transition"), p = "".concat(a, "absoluted"), h = "".concat(a, "slide-btn"), u = "".concat(h, "-container"), f = "".concat(a, "fade-in"), m = "".concat(a, "fade-out"), g = f + "-strong", v = m + "-strong", b = "".concat(a, "opacity-"), y = "".concat(b, "1"), x = "".concat(a, "source");
                function w(e) {
                    return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                    )(e)
                }
                function T(e) {
                    var t, s = e.props, i = 0, a = {};
                    this.getSourceTypeFromLocalStorageByUrl = function(e) {
                        return t[e] ? t[e] : n(e)
                    }
                        ,
                        this.handleReceivedSourceTypeForUrl = function(e, s) {
                            !1 === a[s] && (i--,
                                "invalid" !== e ? a[s] = e : delete a[s],
                            0 === i && (function(e, t) {
                                for (var s in t)
                                    e[s] = t[s]
                            }(t, a),
                                localStorage.setItem("fslightbox-types", JSON.stringify(t))))
                        }
                    ;
                    var n = function(e) {
                        i++,
                            a[e] = !1
                    };
                    s.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function() {}
                            ,
                            this.handleReceivedSourceTypeForUrl = function() {}
                    ) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {},
                        this.getSourceTypeFromLocalStorageByUrl = n)
                }
                function E(e, t, s, i) {
                    var a = e.data
                        , n = e.elements.sources
                        , r = s / i
                        , o = 0;
                    this.adjustSize = function() {
                        if ((o = a.maxSourceWidth / r) < a.maxSourceHeight)
                            return s < a.maxSourceWidth && (o = i),
                                l();
                        o = i > a.maxSourceHeight ? a.maxSourceHeight : i,
                            l()
                    }
                    ;
                    var l = function() {
                        n[t].style.width = o * r + "px",
                            n[t].style.height = o + "px"
                    }
                }
                function C(e, t) {
                    var s = this
                        , i = e.collections.sourceSizers
                        , a = e.elements
                        , n = a.sourceAnimationWrappers
                        , r = a.sourceMainWrappers
                        , o = a.sources
                        , l = e.resolve;
                    function d(e, s) {
                        i[t] = l(E, [t, e, s]),
                            i[t].adjustSize()
                    }
                    this.runActions = function(e, i) {
                        o[t].classList.add(y),
                            n[t].classList.add(g),
                            r[t].removeChild(r[t].firstChild),
                            d(e, i),
                            s.runActions = d
                    }
                }
                function S(e, t) {
                    var s, i = this, a = e.elements.sources, n = e.props, r = (0,
                        e.resolve)(C, [t]);
                    this.handleImageLoad = function(e) {
                        var t = e.target
                            , s = t.naturalWidth
                            , i = t.naturalHeight;
                        r.runActions(s, i)
                    }
                        ,
                        this.handleVideoLoad = function(e) {
                            var t = e.target
                                , i = t.videoWidth
                                , a = t.videoHeight;
                            s = !0,
                                r.runActions(i, a)
                        }
                        ,
                        this.handleNotMetaDatedVideoLoad = function() {
                            s || i.handleYoutubeLoad()
                        }
                        ,
                        this.handleYoutubeLoad = function() {
                            var e = 1920
                                , t = 1080;
                            n.maxYoutubeDimensions && (e = n.maxYoutubeDimensions.width,
                                t = n.maxYoutubeDimensions.height),
                                r.runActions(e, t)
                        }
                        ,
                        this.handleCustomLoad = function() {
                            setTimeout((function() {
                                    var e = a[t];
                                    r.runActions(e.offsetWidth, e.offsetHeight)
                                }
                            ))
                        }
                }
                function $(e, t, s) {
                    var i = e.elements.sources
                        , a = e.props.customClasses
                        , n = a[t] ? a[t] : "";
                    i[t].className = s + " " + n
                }
                function M(e, t) {
                    var s = e.elements.sources
                        , i = e.props.customAttributes;
                    for (var a in i[t])
                        s[t].setAttribute(a, i[t][a])
                }
                function P(e, t) {
                    var s = e.collections.sourceLoadHandlers
                        , i = e.elements
                        , a = i.sources
                        , n = i.sourceAnimationWrappers
                        , r = e.props.sources;
                    a[t] = document.createElement("img"),
                        $(e, t, x),
                        a[t].src = r[t],
                        a[t].onload = s[t].handleImageLoad,
                        M(e, t),
                        n[t].appendChild(a[t])
                }
                function L(e, t) {
                    var s = e.collections.sourceLoadHandlers
                        , i = e.elements
                        , a = i.sources
                        , n = i.sourceAnimationWrappers
                        , r = e.props
                        , o = r.sources
                        , l = r.videosPosters;
                    a[t] = document.createElement("video"),
                        $(e, t, x),
                        a[t].src = o[t],
                        a[t].onloadedmetadata = function(e) {
                            s[t].handleVideoLoad(e)
                        }
                        ,
                        a[t].controls = !0,
                        M(e, t),
                    l[t] && (a[t].poster = l[t]);
                    var d = document.createElement("source");
                    d.src = o[t],
                        a[t].appendChild(d),
                        setTimeout(s[t].handleNotMetaDatedVideoLoad, 3e3),
                        n[t].appendChild(a[t])
                }
                function k(e, t) {
                    var s = e.collections.sourceLoadHandlers
                        , i = e.elements
                        , n = i.sources
                        , r = i.sourceAnimationWrappers
                        , o = e.props.sources;
                    n[t] = document.createElement("iframe"),
                        $(e, t, "".concat(x, " ").concat(a, "youtube-iframe")),
                        n[t].src = "https://www.youtube.com/embed/".concat(o[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"),
                        n[t].allowFullscreen = !0,
                        M(e, t),
                        r[t].appendChild(n[t]),
                        s[t].handleYoutubeLoad()
                }
                function z(e, t) {
                    var s = e.collections.sourceLoadHandlers
                        , i = e.elements
                        , a = i.sources
                        , n = i.sourceAnimationWrappers
                        , r = e.props.sources;
                    a[t] = r[t],
                        $(e, t, "".concat(a[t].className, " ").concat(x)),
                        n[t].appendChild(a[t]),
                        s[t].handleCustomLoad()
                }
                function I(e, t) {
                    var s = e.elements
                        , i = s.sources
                        , n = s.sourceAnimationWrappers
                        , r = s.sourceMainWrappers;
                    e.props.sources,
                        i[t] = document.createElement("div"),
                        i[t].className = "".concat(a, "invalid-file-wrapper ").concat(l),
                        i[t].innerHTML = "Invalid source",
                        n[t].classList.add(g),
                        n[t].appendChild(i[t]),
                        r[t].removeChild(r[t].firstChild)
                }
                function A(e) {
                    var t = e.collections
                        , s = t.sourceLoadHandlers
                        , i = t.sourcesRenderFunctions
                        , a = e.core.sourceDisplayFacade
                        , n = e.resolve;
                    this.runActionsForSourceTypeAndIndex = function(t, r) {
                        var o;
                        switch ("invalid" !== t && (s[r] = n(S, [r])),
                            t) {
                            case "image":
                                o = P;
                                break;
                            case "video":
                                o = L;
                                break;
                            case "youtube":
                                o = k;
                                break;
                            case "custom":
                                o = z;
                                break;
                            default:
                                o = I
                        }
                        i[r] = function() {
                            return o(e, r)
                        }
                            ,
                            a.displaySourcesWhichShouldBeDisplayed()
                    }
                }
                function D() {
                    var e, t, s, i = {
                        isUrlYoutubeOne: function(e) {
                            var t = document.createElement("a");
                            return t.href = e,
                            "www.youtube.com" === t.hostname
                        },
                        getTypeFromResponseContentType: function(e) {
                            return e.slice(0, e.indexOf("/"))
                        }
                    };
                    function a() {
                        if (4 !== s.readyState) {
                            if (2 === s.readyState) {
                                var e;
                                switch (i.getTypeFromResponseContentType(s.getResponseHeader("content-type"))) {
                                    case "image":
                                        e = "image";
                                        break;
                                    case "video":
                                        e = "video";
                                        break;
                                    default:
                                        e = "invalid"
                                }
                                s.onreadystatechange = null,
                                    s.abort(),
                                    t(e)
                            }
                        } else
                            t("invalid")
                    }
                    this.setUrlToCheck = function(t) {
                        e = t
                    }
                        ,
                        this.getSourceType = function(n) {
                            if (i.isUrlYoutubeOne(e))
                                return n("youtube");
                            t = n,
                                (s = new XMLHttpRequest).onreadystatechange = a,
                                s.open("GET", e, !0),
                                s.send()
                        }
                }
                function O(e, t, s) {
                    var i = e.props
                        , a = i.types
                        , n = i.type
                        , r = i.sources
                        , o = e.resolve;
                    this.getTypeSetByClientForIndex = function(e) {
                        var t;
                        return a && a[e] ? t = a[e] : n && (t = n),
                            t
                    }
                        ,
                        this.retrieveTypeWithXhrForIndex = function(e) {
                            var i = o(D);
                            i.setUrlToCheck(r[e]),
                                i.getSourceType((function(i) {
                                        t.handleReceivedSourceTypeForUrl(i, r[e]),
                                            s.runActionsForSourceTypeAndIndex(i, e)
                                    }
                                ))
                        }
                }
                function H(e, t) {
                    var s = e.componentsServices.hideSourceLoaderIfNotYetCollection
                        , i = e.elements
                        , a = i.sourceWrappersContainer
                        , n = i.sourceMainWrappers;
                    n[t] = document.createElement("div"),
                        n[t].className = "".concat(p, " ").concat(o, " ").concat(l),
                        n[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
                    var r = n[t].firstChild;
                    s[t] = function() {
                        n[t].contains(r) && n[t].removeChild(r)
                    }
                        ,
                        a.appendChild(n[t]),
                        function(e, t) {
                            var s = e.elements
                                , i = s.sourceMainWrappers
                                , a = s.sourceAnimationWrappers;
                            a[t] = document.createElement("div"),
                                i[t].appendChild(a[t])
                        }(e, t)
                }
                function N(e, t, s, i) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    n.setAttributeNS(null, "width", t),
                        n.setAttributeNS(null, "height", t),
                        n.setAttributeNS(null, "viewBox", s);
                    var r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return r.setAttributeNS(null, "class", "".concat(a, "svg-path")),
                        r.setAttributeNS(null, "d", i),
                        n.appendChild(r),
                        e.appendChild(n),
                        n
                }
                function F(e, t) {
                    var s = document.createElement("div");
                    return s.className = "".concat(a, "toolbar-button ").concat(l),
                        s.title = t,
                        e.appendChild(s),
                        s
                }
                function R(e, t) {
                    var s = document.createElement("div");
                    s.className = "".concat(a, "toolbar"),
                        t.appendChild(s),
                        function(e, t) {
                            var s = e.componentsServices
                                , i = e.core.fullscreenToggler
                                , a = e.data
                                , n = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
                                , r = F(t);
                            r.title = "Enter fullscreen";
                            var o = N(r, "20px", "0 0 18 18", n);
                            s.enterFullscreen = function() {
                                a.isFullscreenOpen = !0,
                                    r.title = "Exit fullscreen",
                                    o.setAttributeNS(null, "width", "24px"),
                                    o.setAttributeNS(null, "height", "24px"),
                                    o.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                                    o.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                            }
                                ,
                                s.exitFullscreen = function() {
                                    a.isFullscreenOpen = !1,
                                        r.title = "Enter fullscreen",
                                        o.setAttributeNS(null, "width", "20px"),
                                        o.setAttributeNS(null, "height", "20px"),
                                        o.setAttributeNS(null, "viewBox", "0 0 18 18"),
                                        o.firstChild.setAttributeNS(null, "d", n)
                                }
                                ,
                                r.onclick = function() {
                                    a.isFullscreenOpen ? i.exitFullscreen() : i.enterFullscreen()
                                }
                        }(e, s),
                        function(e, t) {
                            var s = F(t, "Close");
                            s.onclick = e.core.lightboxCloser.closeLightbox,
                                N(s, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
                        }(e, s)
                }
                function B(e) {
                    var t = e.props.sources
                        , s = e.elements.container
                        , i = document.createElement("div");
                    i.className = "".concat(a, "nav"),
                        s.appendChild(i),
                        R(e, i),
                    t.length > 1 && function(e, t) {
                        var s = e.componentsServices
                            , i = e.props.sources
                            , n = (e.stageIndexes,
                            document.createElement("div"));
                        n.className = "".concat(a, "slide-number-container");
                        var r = document.createElement("div");
                        r.className = l;
                        var o = document.createElement("span");
                        s.setSlideNumber = function(e) {
                            return o.innerHTML = e
                        }
                        ;
                        var d = document.createElement("span");
                        d.className = "".concat(a, "slash");
                        var c = document.createElement("div");
                        c.innerHTML = i.length,
                            n.appendChild(r),
                            r.appendChild(o),
                            r.appendChild(d),
                            r.appendChild(c),
                            t.appendChild(n),
                            setTimeout((function() {
                                    r.offsetWidth > 55 && (n.style.justifyContent = "flex-start")
                                }
                            ))
                    }(e, i)
                }
                function W(e, t) {
                    var s = this
                        , i = e.elements.sourceMainWrappers
                        , a = e.props
                        , n = 0;
                    this.byValue = function(e) {
                        return n = e,
                            s
                    }
                        ,
                        this.negative = function() {
                            r(-o())
                        }
                        ,
                        this.zero = function() {
                            r(0)
                        }
                        ,
                        this.positive = function() {
                            r(o())
                        }
                    ;
                    var r = function(e) {
                        i[t].style.transform = "translateX(".concat(e + n, "px)"),
                            n = 0
                    }
                        , o = function() {
                        return (1 + a.slideDistance) * innerWidth
                    }
                }
                function G(e, t, s, i) {
                    var a = e.elements.container
                        , n = s.charAt(0).toUpperCase() + s.slice(1)
                        , r = document.createElement("div");
                    r.className = "".concat(u, " ").concat(u, "-").concat(s),
                        r.title = "".concat(n, " slide"),
                        r.onclick = t,
                        function(e, t) {
                            var s = document.createElement("div");
                            s.className = "".concat(h, " ").concat(l),
                                N(s, "20px", "0 0 20 20", t),
                                e.appendChild(s)
                        }(r, i),
                        a.appendChild(r)
                }
                function V(e, t) {
                    var s = e.classList;
                    s.contains(t) && s.remove(t)
                }
                function X(e) {
                    var t = this
                        , s = e.core
                        , i = s.eventsDispatcher
                        , a = s.fullscreenToggler
                        , n = s.globalEventsController
                        , r = s.scrollbarRecompensor
                        , o = e.data
                        , l = e.elements
                        , c = e.props
                        , p = e.sourcePointerProps;
                    this.isLightboxFadingOut = !1,
                        this.runActions = function() {
                            t.isLightboxFadingOut = !0,
                                l.container.classList.add(v),
                                n.removeListeners(),
                            c.exitFullscreenOnClose && o.isFullscreenOpen && a.exitFullscreen(),
                                setTimeout((function() {
                                        t.isLightboxFadingOut = !1,
                                            p.isPointering = !1,
                                            l.container.classList.remove(v),
                                            document.documentElement.classList.remove(d),
                                            r.removeRecompense(),
                                            document.body.removeChild(l.container),
                                            i.dispatch("onClose")
                                    }
                                ), 270)
                        }
                }
                function Y(e) {
                    var t, s, i, a = e.collections.sourceMainWrappersTransformers, n = e.componentsServices, r = e.core, o = r.classFacade, l = r.slideIndexChanger, d = r.sourceDisplayFacade, p = r.stageManager, h = e.elements.sourceAnimationWrappers, u = e.stageIndexes, v = (t = function() {
                            o.removeFromEachElementClassIfContains("sourceAnimationWrappers", m)
                        }
                            ,
                            s = 300,
                            i = [],
                            function() {
                                i.push(!0),
                                    setTimeout((function() {
                                            i.pop(),
                                            i.length || t()
                                        }
                                    ), s)
                            }
                    );
                    l.changeTo = function(e) {
                        u.current = e,
                            p.updateStageIndexes(),
                            n.setSlideNumber(e + 1),
                            d.displaySourcesWhichShouldBeDisplayed()
                    }
                        ,
                        l.jumpTo = function(e) {
                            var t = u.current;
                            l.changeTo(e),
                                o.removeFromEachElementClassIfContains("sourceMainWrappers", c),
                                V(h[t], g),
                                V(h[t], f),
                                h[t].classList.add(m),
                                V(h[e], g),
                                V(h[e], m),
                                h[e].classList.add(f),
                                v(),
                                a[e].zero(),
                                setTimeout((function() {
                                        t !== u.current && a[t].negative()
                                    }
                                ), 270)
                        }
                }
                function j(e) {
                    var t = e.core
                        , s = t.lightboxCloser
                        , i = t.fullscreenToggler
                        , a = t.slideChangeFacade;
                    this.listener = function(e) {
                        switch (e.key) {
                            case "Escape":
                                s.closeLightbox();
                                break;
                            case "ArrowLeft":
                                a.changeToPrevious();
                                break;
                            case "ArrowRight":
                                a.changeToNext();
                                break;
                            case "F11":
                                e.preventDefault(),
                                    i.enterFullscreen()
                        }
                    }
                }
                function q(e) {
                    var t = e.collections.sourceMainWrappersTransformers
                        , s = e.elements
                        , i = e.sourcePointerProps
                        , a = e.stageIndexes;
                    function n(e, s) {
                        t[e].byValue(i.swipedX)[s]()
                    }
                    this.runActionsForEvent = function(e) {
                        var t, o, l;
                        s.container.contains(s.slideSwipingHoverer) || s.container.appendChild(s.slideSwipingHoverer),
                            t = s.container,
                            o = r,
                        (l = t.classList).contains(o) || l.add(o),
                            i.swipedX = e.screenX - i.downScreenX,
                            n(a.current, "zero"),
                            void 0 !== a.previous && i.swipedX > 0 ? n(a.previous, "negative") : void 0 !== a.next && i.swipedX < 0 && n(a.next, "positive")
                    }
                }
                function _(e) {
                    var t = e.props.sources
                        , s = e.resolve
                        , i = e.sourcePointerProps
                        , a = s(q);
                    1 === t.length ? this.listener = function() {
                            i.swipedX = 1
                        }
                        : this.listener = function(e) {
                            i.isPointering && a.runActionsForEvent(e)
                        }
                }
                function U(e) {
                    var t = e.collections.sourceMainWrappersTransformers
                        , s = e.core.slideIndexChanger
                        , i = e.elements.sourceMainWrappers
                        , a = e.stageIndexes;
                    this.runPositiveSwipedXActions = function() {
                        void 0 === a.previous || (n("positive"),
                            s.changeTo(a.previous)),
                            n("zero")
                    }
                        ,
                        this.runNegativeSwipedXActions = function() {
                            void 0 === a.next || (n("negative"),
                                s.changeTo(a.next)),
                                n("zero")
                        }
                    ;
                    var n = function(e) {
                        i[a.current].classList.add(c),
                            t[a.current][e]()
                    }
                }
                function K(e, t) {
                    e.contains(t) && e.removeChild(t)
                }
                function J(e) {
                    var t = e.core.lightboxCloser
                        , s = e.elements
                        , i = e.resolve
                        , a = e.sourcePointerProps
                        , n = i(U);
                    this.runNoSwipeActions = function() {
                        K(s.container, s.slideSwipingHoverer),
                        a.isSourceDownEventTarget || t.closeLightbox(),
                            a.isPointering = !1
                    }
                        ,
                        this.runActions = function() {
                            a.swipedX > 0 ? n.runPositiveSwipedXActions() : n.runNegativeSwipedXActions(),
                                K(s.container, s.slideSwipingHoverer),
                                s.container.classList.remove(r),
                                a.isPointering = !1
                        }
                }
                function Z(e) {
                    var t = e.resolve
                        , s = e.sourcePointerProps
                        , i = t(J);
                    this.listener = function() {
                        s.isPointering && (s.swipedX ? i.runActions() : i.runNoSwipeActions())
                    }
                }
                function Q(e) {
                    var t, s, i;
                    s = (t = e).core.classFacade,
                        i = t.elements,
                        s.removeFromEachElementClassIfContains = function(e, t) {
                            for (var s = 0; s < i[e].length; s++)
                                V(i[e][s], t)
                        }
                        ,
                        function(e) {
                            var t = e.core.eventsDispatcher
                                , s = e.props;
                            t.dispatch = function(e) {
                                s[e] && s[e]()
                            }
                        }(e),
                        function(e) {
                            var t = e.componentsServices
                                , s = e.core.fullscreenToggler;
                            s.enterFullscreen = function() {
                                t.enterFullscreen();
                                var e = document.documentElement;
                                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                            }
                                ,
                                s.exitFullscreen = function() {
                                    t.exitFullscreen(),
                                        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                                }
                        }(e),
                        function(e) {
                            var t = e.core
                                , s = t.globalEventsController
                                , i = t.windowResizeActioner
                                , a = e.resolve
                                , n = a(j)
                                , r = a(_)
                                , o = a(Z);
                            s.attachListeners = function() {
                                document.addEventListener("pointermove", r.listener),
                                    document.addEventListener("pointerup", o.listener),
                                    addEventListener("resize", i.runActions),
                                    document.addEventListener("keydown", n.listener)
                            }
                                ,
                                s.removeListeners = function() {
                                    document.removeEventListener("pointermove", r.listener),
                                        document.removeEventListener("pointerup", o.listener),
                                        removeEventListener("resize", i.runActions),
                                        document.removeEventListener("keydown", n.listener)
                                }
                        }(e),
                        function(e) {
                            var t = e.core.lightboxCloser
                                , s = (0,
                                e.resolve)(X);
                            t.closeLightbox = function() {
                                s.isLightboxFadingOut || s.runActions()
                            }
                        }(e),
                        se(e),
                        function(e) {
                            var t = e.data
                                , s = e.core.scrollbarRecompensor;
                            function i() {
                                document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
                            }
                            s.addRecompense = function() {
                                "complete" === document.readyState ? i() : addEventListener("load", (function() {
                                        i(),
                                            s.addRecompense = i
                                    }
                                ))
                            }
                                ,
                                s.removeRecompense = function() {
                                    document.body.style.removeProperty("margin-right")
                                }
                        }(e),
                        function(e) {
                            var t = e.core
                                , s = t.slideChangeFacade
                                , i = t.slideIndexChanger
                                , a = t.stageManager;
                            e.props.sources.length > 1 ? (s.changeToPrevious = function() {
                                    i.jumpTo(a.getPreviousSlideIndex())
                                }
                                    ,
                                    s.changeToNext = function() {
                                        i.jumpTo(a.getNextSlideIndex())
                                    }
                            ) : (s.changeToPrevious = function() {}
                                    ,
                                    s.changeToNext = function() {}
                            )
                        }(e),
                        Y(e),
                        function(e) {
                            var t = e.core
                                , s = t.classFacade
                                , i = t.sourcesPointerDown
                                , a = e.elements.sources
                                , n = e.sourcePointerProps
                                , r = e.stageIndexes;
                            i.listener = function(e) {
                                "VIDEO" !== e.target.tagName && e.preventDefault(),
                                    n.isPointering = !0,
                                    n.downScreenX = e.screenX,
                                    n.swipedX = 0;
                                var t = a[r.current];
                                t && t.contains(e.target) ? n.isSourceDownEventTarget = !0 : n.isSourceDownEventTarget = !1,
                                    s.removeFromEachElementClassIfContains("sourceMainWrappers", c)
                            }
                        }(e),
                        function(e) {
                            var t = e.collections.sourcesRenderFunctions
                                , s = e.core.sourceDisplayFacade
                                , i = e.props
                                , a = e.stageIndexes;
                            function n(e) {
                                t[e] && (t[e](),
                                    delete t[e])
                            }
                            s.displaySourcesWhichShouldBeDisplayed = function() {
                                if (i.loadOnlyCurrentSource)
                                    n(a.current);
                                else
                                    for (var e in a)
                                        n(a[e])
                            }
                        }(e),
                        function(e) {
                            var t = e.stageIndexes
                                , s = e.core.stageManager
                                , i = e.props.sources.length - 1;
                            s.getPreviousSlideIndex = function() {
                                return 0 === t.current ? i : t.current - 1
                            }
                                ,
                                s.getNextSlideIndex = function() {
                                    return t.current === i ? 0 : t.current + 1
                                }
                                ,
                                s.updateStageIndexes = 0 === i ? function() {}
                                    : 1 === i ? function() {
                                            0 === t.current ? (t.next = 1,
                                                delete t.previous) : (t.previous = 0,
                                                delete t.next)
                                        }
                                        : function() {
                                            t.previous = s.getPreviousSlideIndex(),
                                                t.next = s.getNextSlideIndex()
                                        }
                                ,
                                s.isSourceInStage = i <= 2 ? function() {
                                        return !0
                                    }
                                    : function(e) {
                                        var s = t.current;
                                        if (0 === s && e === i || s === i && 0 === e)
                                            return !0;
                                        var a = s - e;
                                        return -1 === a || 0 === a || 1 === a
                                    }
                        }(e),
                        function(e) {
                            var t = e.collections
                                , s = t.sourceMainWrappersTransformers
                                , i = t.sourceSizers
                                , a = e.core.windowResizeActioner
                                , n = e.data
                                , r = e.elements.sourceMainWrappers
                                , o = e.props
                                , l = e.stageIndexes;
                            a.runActions = function() {
                                innerWidth < 992 ? n.maxSourceWidth = innerWidth : n.maxSourceWidth = .9 * innerWidth,
                                    n.maxSourceHeight = .9 * innerHeight;
                                for (var e = 0; e < o.sources.length; e++)
                                    V(r[e], c),
                                    e !== l.current && s[e].negative(),
                                    i[e] && i[e].adjustSize()
                            }
                        }(e)
                }
                function ee(e) {
                    var t = e.props.disableLocalStorage;
                    if (!t) {
                        var s = localStorage.getItem("fslightbox-scrollbar-width");
                        if (s)
                            return s
                    }
                    var i = function() {
                        var e = document.createElement("div")
                            , t = e.style;
                        return t.visibility = "hidden",
                            t.width = "100px",
                            t.msOverflowStyle = "scrollbar",
                            t.overflow = "scroll",
                            e
                    }()
                        , a = function() {
                        var e = document.createElement("div");
                        return e.style.width = "100%",
                            e
                    }();
                    document.body.appendChild(i);
                    var n = i.offsetWidth;
                    i.appendChild(a);
                    var r = a.offsetWidth;
                    document.body.removeChild(i);
                    var o = n - r;
                    return t || localStorage.setItem("fslightbox-scrollbar-width", o.toString()),
                        o
                }
                function te(e) {
                    var t = e.core.eventsDispatcher
                        , s = e.data
                        , i = e.elements
                        , n = e.props.sources;
                    s.isInitialized = !0,
                        s.scrollbarWidth = ee(e),
                        function(e) {
                            for (var t = e.collections.sourceMainWrappersTransformers, s = e.props.sources, i = e.resolve, a = 0; a < s.length; a++)
                                t[a] = i(W, [a])
                        }(e),
                        Q(e),
                        i.container = document.createElement("div"),
                        i.container.className = "".concat(a, "container ").concat(o, " ").concat(g),
                        function(e) {
                            var t = e.elements;
                            t.slideSwipingHoverer = document.createElement("div"),
                                t.slideSwipingHoverer.className = "".concat(a, "slide-swiping-hoverer ").concat(o, " ").concat(p)
                        }(e),
                        B(e),
                        function(e) {
                            var t = e.core.sourcesPointerDown
                                , s = e.elements
                                , i = e.props.sources
                                , a = document.createElement("div");
                            a.className = "".concat(p, " ").concat(o),
                                s.container.appendChild(a),
                                a.addEventListener("pointerdown", t.listener),
                                s.sourceWrappersContainer = a;
                            for (var n = 0; n < i.length; n++)
                                H(e, n)
                        }(e),
                    n.length > 1 && function(e) {
                        var t = e.core.slideChangeFacade;
                        G(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),
                            G(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")
                    }(e),
                        function(e) {
                            for (var t = e.props.sources, s = e.resolve, i = s(T), a = s(A), n = s(O, [i, a]), r = 0; r < t.length; r++)
                                if ("string" == typeof t[r]) {
                                    var o = n.getTypeSetByClientForIndex(r);
                                    if (o)
                                        a.runActionsForSourceTypeAndIndex(o, r);
                                    else {
                                        var l = i.getSourceTypeFromLocalStorageByUrl(t[r]);
                                        l ? a.runActionsForSourceTypeAndIndex(l, r) : n.retrieveTypeWithXhrForIndex(r)
                                    }
                                } else
                                    a.runActionsForSourceTypeAndIndex("custom", r)
                        }(e),
                        t.dispatch("onInit")
                }
                function se(e) {
                    var t = e.collections.sourceMainWrappersTransformers
                        , s = e.componentsServices
                        , i = e.core
                        , a = i.eventsDispatcher
                        , n = i.lightboxOpener
                        , r = i.globalEventsController
                        , o = i.scrollbarRecompensor
                        , l = i.sourceDisplayFacade
                        , c = i.stageManager
                        , p = i.windowResizeActioner
                        , h = e.data
                        , u = e.elements
                        , f = e.stageIndexes;
                    n.open = function() {
                        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        f.current = i,
                            h.isInitialized ? a.dispatch("onShow") : te(e),
                            c.updateStageIndexes(),
                            l.displaySourcesWhichShouldBeDisplayed(),
                            s.setSlideNumber(i + 1),
                            document.body.appendChild(u.container),
                            document.documentElement.classList.add(d),
                            o.addRecompense(),
                            r.attachListeners(),
                            p.runActions(),
                            t[f.current].zero(),
                            a.dispatch("onOpen")
                    }
                }
                function ie(e, t, s) {
                    return (ie = ae() ? Reflect.construct : function(e, t, s) {
                            var i = [null];
                            i.push.apply(i, t);
                            var a = new (Function.bind.apply(e, i));
                            return s && ne(a, s.prototype),
                                a
                        }
                    ).apply(null, arguments)
                }
                function ae() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                        ))),
                            !0
                    } catch (e) {
                        return !1
                    }
                }
                function ne(e, t) {
                    return (ne = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t,
                                e
                        }
                    )(e, t)
                }
                function re(e) {
                    return function(e) {
                        if (Array.isArray(e))
                            return oe(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return oe(e, t);
                            var s = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === s && e.constructor && (s = e.constructor.name),
                                "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? oe(e, t) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
                function oe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var s = 0, i = new Array(t); s < t; s++)
                        i[s] = e[s];
                    return i
                }
                function le() {
                    for (var e = document.getElementsByTagName("a"), t = function(t) {
                        if (!e[t].hasAttribute("data-fslightbox"))
                            return "continue";
                        var s = e[t].getAttribute("data-fslightbox")
                            , i = e[t].getAttribute("href");
                        fsLightboxInstances[s] || (fsLightboxInstances[s] = new FsLightbox);
                        var a = null;
                        "#" === i.charAt(0) ? (a = document.getElementById(i.substring(1)).cloneNode(!0)).removeAttribute("id") : a = i,
                            fsLightboxInstances[s].props.sources.push(a),
                            fsLightboxInstances[s].elements.a.push(e[t]);
                        var n = fsLightboxInstances[s].props.sources.length - 1;
                        e[t].onclick = function(e) {
                            e.preventDefault(),
                                fsLightboxInstances[s].open(n)
                        }
                            ,
                            p("types", "data-type"),
                            p("videosPosters", "data-video-poster"),
                            p("customClasses", "data-class"),
                            p("customClasses", "data-custom-class");
                        for (var r = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], o = e[t].attributes, l = fsLightboxInstances[s].props.customAttributes, d = 0; d < o.length; d++)
                            if (-1 === r.indexOf(o[d].name) && "data-" === o[d].name.substr(0, 5)) {
                                l[n] || (l[n] = {});
                                var c = o[d].name.substr(5);
                                l[n][c] = o[d].value
                            }
                        function p(i, a) {
                            e[t].hasAttribute(a) && (fsLightboxInstances[s].props[i][n] = e[t].getAttribute(a))
                        }
                    }, s = 0; s < e.length; s++)
                        t(s);
                    var i = Object.keys(fsLightboxInstances);
                    window.fsLightbox = fsLightboxInstances[i[i.length - 1]]
                }
                "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((i = document.createElement("style")).className = n,
                    i.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),
                    document.head.appendChild(i)),
                    window.FsLightbox = function() {
                        var e = this;
                        this.props = {
                            sources: [],
                            customAttributes: [],
                            customClasses: [],
                            types: [],
                            videosPosters: [],
                            slideDistance: .3
                        },
                            this.data = {
                                isInitialized: !1,
                                isFullscreenOpen: !1,
                                maxSourceWidth: 0,
                                maxSourceHeight: 0,
                                scrollbarWidth: 0
                            },
                            this.sourcePointerProps = {
                                downScreenX: null,
                                isPointering: !1,
                                isSourceDownEventTarget: !1,
                                swipedX: 0
                            },
                            this.stageIndexes = {},
                            this.elements = {
                                a: [],
                                container: null,
                                slideSwipingHoverer: null,
                                sourceWrappersContainer: null,
                                sources: [],
                                sourceMainWrappers: [],
                                sourceAnimationWrappers: []
                            },
                            this.componentsServices = {
                                enterFullscreen: null,
                                exitFullscreen: null,
                                hideSourceLoaderIfNotYetCollection: [],
                                setSlideNumber: function() {}
                            },
                            this.resolve = function(t) {
                                var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                return s.unshift(e),
                                    ie(t, re(s))
                            }
                            ,
                            this.collections = {
                                sourceMainWrappersTransformers: [],
                                sourceLoadHandlers: [],
                                sourcesRenderFunctions: [],
                                sourceSizers: []
                            },
                            this.core = {
                                classFacade: {},
                                eventsDispatcher: {},
                                fullscreenToggler: {},
                                globalEventsController: {},
                                lightboxCloser: {},
                                lightboxOpener: {},
                                lightboxUpdater: {},
                                scrollbarRecompensor: {},
                                slideChangeFacade: {},
                                slideIndexChanger: {},
                                sourcesPointerDown: {},
                                sourceDisplayFacade: {},
                                stageManager: {},
                                windowResizeActioner: {}
                            },
                            se(this),
                            this.open = function(t) {
                                return e.core.lightboxOpener.open(t)
                            }
                            ,
                            this.close = function() {
                                return e.core.lightboxCloser.closeLightbox()
                            }
                    }
                    ,
                    window.fsLightboxInstances = {},
                    le(),
                    window.refreshFsLightbox = function() {
                        for (var e in fsLightboxInstances) {
                            var t = fsLightboxInstances[e].props;
                            fsLightboxInstances[e] = new FsLightbox,
                                fsLightboxInstances[e].props = t,
                                fsLightboxInstances[e].props.sources = [],
                                fsLightboxInstances[e].elements.a = []
                        }
                        le()
                    }
            }
            ])
    }
    ,
    8625: (e,t,s)=>{
        "use strict";
        s.d(t, {
            w: ()=>h
        });
        const i = e=>"[object Object]" === Object.prototype.toString.call(e)
            , a = (e,t)=>{
                const s = document.createElement(e);
                if (t && "object" == typeof t)
                    for (const i in t)
                        "html" === i ? s.innerHTML = t[i] : s.setAttribute(i, t[i]);
                return s
            }
            , n = e=>{
                e instanceof NodeList ? e.forEach((e=>n(e))) : e.innerHTML = ""
            }
            , r = (e,t,s)=>a("li", {
                class: e,
                html: `<a href="#" data-page="${t}">${s}</a>`
            })
            , o = (e,t)=>{
                let s, i;
                1 === t ? (s = 0,
                    i = e.length) : -1 === t && (s = e.length - 1,
                    i = -1);
                for (let a = !0; a; ) {
                    a = !1;
                    for (let n = s; n != i; n += t)
                        if (e[n + t] && e[n].value > e[n + t].value) {
                            const s = e[n]
                                , i = e[n + t]
                                , r = s;
                            e[n] = i,
                                e[n + t] = r,
                                a = !0
                        }
                }
                return e
            }
        ;
        class l {
            constructor(e, t) {
                return this.dt = e,
                    this.rows = t,
                    this
            }
            build(e) {
                const t = a("tr");
                let s = this.dt.headings;
                return s.length || (s = e.map((()=>""))),
                    s.forEach(((s,i)=>{
                            const n = a("td");
                            e[i] && e[i].length || (e[i] = ""),
                                n.innerHTML = e[i],
                                n.data = e[i],
                                t.appendChild(n)
                        }
                    )),
                    t
            }
            render(e) {
                return e
            }
            add(e) {
                if (Array.isArray(e)) {
                    const t = this.dt;
                    Array.isArray(e[0]) ? e.forEach((e=>{
                            t.data.push(this.build(e))
                        }
                    )) : t.data.push(this.build(e)),
                    t.data.length && (t.hasRows = !0),
                        this.update(),
                        t.columns().rebuild()
                }
            }
            remove(e) {
                const t = this.dt;
                Array.isArray(e) ? (e.sort(((e,t)=>t - e)),
                    e.forEach((e=>{
                            t.data.splice(e, 1)
                        }
                    ))) : "all" == e ? t.data = [] : t.data.splice(e, 1),
                t.data.length || (t.hasRows = !1),
                    this.update(),
                    t.columns().rebuild()
            }
            update() {
                this.dt.data.forEach(((e,t)=>{
                        e.dataIndex = t
                    }
                ))
            }
            findRowIndex(e, t) {
                return this.dt.data.findIndex((s=>s.children[e].innerText.toLowerCase().includes(String(t).toLowerCase())))
            }
            findRow(e, t) {
                const s = this.findRowIndex(e, t);
                if (s < 0)
                    return {
                        index: -1,
                        row: null,
                        cols: []
                    };
                const i = this.dt.data[s];
                return {
                    index: s,
                    row: i,
                    cols: [...i.cells].map((e=>e.innerHTML))
                }
            }
            updateRow(e, t) {
                const s = this.build(t);
                this.dt.data.splice(e, 1, s),
                    this.update(),
                    this.dt.columns().rebuild()
            }
        }
        class d {
            constructor(e) {
                return this.dt = e,
                    this
            }
            swap(e) {
                if (e.length && 2 === e.length) {
                    const t = [];
                    this.dt.headings.forEach(((e,s)=>{
                            t.push(s)
                        }
                    ));
                    const s = e[0]
                        , i = e[1]
                        , a = t[i];
                    t[i] = t[s],
                        t[s] = a,
                        this.order(t)
                }
            }
            order(e) {
                let t, s, i, a, n, r, o;
                const l = [[], [], [], []]
                    , d = this.dt;
                e.forEach(((e,i)=>{
                        n = d.headings[e],
                            r = "false" !== n.getAttribute("data-sortable"),
                            t = n.cloneNode(!0),
                            t.originalCellIndex = i,
                            t.sortable = r,
                            l[0].push(t),
                        d.hiddenColumns.includes(e) || (s = n.cloneNode(!0),
                            s.originalCellIndex = i,
                            s.sortable = r,
                            l[1].push(s))
                    }
                )),
                    d.data.forEach(((t,s)=>{
                            i = t.cloneNode(!1),
                                a = t.cloneNode(!1),
                                i.dataIndex = a.dataIndex = s,
                            null !== t.searchIndex && void 0 !== t.searchIndex && (i.searchIndex = a.searchIndex = t.searchIndex),
                                e.forEach((e=>{
                                        o = t.cells[e].cloneNode(!0),
                                            o.data = t.cells[e].data,
                                            i.appendChild(o),
                                        d.hiddenColumns.includes(e) || (o = t.cells[e].cloneNode(!0),
                                            o.data = t.cells[e].data,
                                            a.appendChild(o))
                                    }
                                )),
                                l[2].push(i),
                                l[3].push(a)
                        }
                    )),
                    d.headings = l[0],
                    d.activeHeadings = l[1],
                    d.data = l[2],
                    d.activeRows = l[3],
                    d.update()
            }
            hide(e) {
                if (e.length) {
                    const t = this.dt;
                    e.forEach((e=>{
                            t.hiddenColumns.includes(e) || t.hiddenColumns.push(e)
                        }
                    )),
                        this.rebuild()
                }
            }
            show(e) {
                if (e.length) {
                    let t;
                    const s = this.dt;
                    e.forEach((e=>{
                            t = s.hiddenColumns.indexOf(e),
                            t > -1 && s.hiddenColumns.splice(t, 1)
                        }
                    )),
                        this.rebuild()
                }
            }
            visible(e) {
                let t;
                const s = this.dt;
                return e = e || s.headings.map((e=>e.originalCellIndex)),
                    isNaN(e) ? Array.isArray(e) && (t = [],
                        e.forEach((e=>{
                                t.push(!s.hiddenColumns.includes(e))
                            }
                        ))) : t = !s.hiddenColumns.includes(e),
                    t
            }
            add(e) {
                let t;
                const s = document.createElement("th");
                if (!this.dt.headings.length)
                    return this.dt.insert({
                        headings: [e.heading],
                        data: e.data.map((e=>[e]))
                    }),
                        void this.rebuild();
                this.dt.hiddenHeader ? s.innerHTML = "" : e.heading.nodeName ? s.appendChild(e.heading) : s.innerHTML = e.heading,
                    this.dt.headings.push(s),
                    this.dt.data.forEach(((s,i)=>{
                            e.data[i] && (t = document.createElement("td"),
                                e.data[i].nodeName ? t.appendChild(e.data[i]) : t.innerHTML = e.data[i],
                                t.data = t.innerHTML,
                            e.render && (t.innerHTML = e.render.call(this, t.data, t, s)),
                                s.appendChild(t))
                        }
                    )),
                e.type && s.setAttribute("data-type", e.type),
                e.format && s.setAttribute("data-format", e.format),
                e.hasOwnProperty("sortable") && (s.sortable = e.sortable,
                    s.setAttribute("data-sortable", !0 === e.sortable ? "true" : "false")),
                    this.rebuild(),
                    this.dt.renderHeader()
            }
            remove(e) {
                Array.isArray(e) ? (e.sort(((e,t)=>t - e)),
                    e.forEach((e=>this.remove(e)))) : (this.dt.headings.splice(e, 1),
                    this.dt.data.forEach((t=>{
                            t.removeChild(t.cells[e])
                        }
                    ))),
                    this.rebuild()
            }
            filter(e, t, s, i) {
                const a = this.dt;
                if (a.filterState || (a.filterState = {
                    originalData: a.data
                }),
                    !a.filterState[e]) {
                    const t = [...i, ()=>!0];
                    a.filterState[e] = function() {
                        let e = 0;
                        return ()=>t[e++ % t.length]
                    }()
                }
                const n = a.filterState[e]()
                    , r = Array.from(a.filterState.originalData).filter((t=>{
                        const s = t.cells[e]
                            , i = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.innerText;
                        return "function" === typeof n ? n(i) : i === n
                    }
                ));
                a.data = r,
                    a.data.length ? (this.rebuild(),
                        a.update()) : (a.clear(),
                        a.hasRows = !1,
                        a.setMessage(a.options.labels.noRows)),
                s || a.emit("datatable.sort", e, t)
            }
            sort(e, t, i) {
                const a = this.dt;
                if (a.hasHeadings && (e < 0 || e > a.headings.length))
                    return !1;
                const n = a.options.filters && a.options.filters[a.headings[e].textContent];
                if (n && 0 !== n.length)
                    return void this.filter(e, t, i, n);
                a.sorting = !0,
                i || a.emit("datatable.sorting", e, t);
                let r = a.data;
                const l = []
                    , d = [];
                let c = 0
                    , p = 0;
                const h = a.headings[e]
                    , u = [];
                if ("date" === h.getAttribute("data-type")) {
                    let e = !1;
                    h.hasAttribute("data-format") && (e = h.getAttribute("data-format")),
                        u.push(s.e(568).then(s.bind(s, 9568)).then((({parseDate: t})=>s=>t(s, e))))
                }
                Promise.all(u).then((s=>{
                        const n = s[0];
                        let u, f;
                        Array.from(r).forEach((t=>{
                                const s = t.cells[e]
                                    , i = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.innerText;
                                let a;
                                a = n ? n(i) : "string" === typeof i ? i.replace(/(\$|,|\s|%)/g, "") : i,
                                    parseFloat(a) == a ? d[p++] = {
                                        value: Number(a),
                                        row: t
                                    } : l[c++] = {
                                        value: "string" === typeof i ? i.toLowerCase() : i,
                                        row: t
                                    }
                            }
                        )),
                        t || (t = h.classList.contains("asc") ? "desc" : "asc"),
                            "desc" == t ? (u = o(l, -1),
                                f = o(d, -1),
                                h.classList.remove("asc"),
                                h.classList.add("desc")) : (u = o(d, 1),
                                f = o(l, 1),
                                h.classList.remove("desc"),
                                h.classList.add("asc")),
                        a.lastTh && h != a.lastTh && (a.lastTh.classList.remove("desc"),
                            a.lastTh.classList.remove("asc")),
                            a.lastTh = h,
                            r = u.concat(f),
                            a.data = [];
                        const m = [];
                        r.forEach(((e,t)=>{
                                a.data.push(e.row),
                                null !== e.row.searchIndex && void 0 !== e.row.searchIndex && m.push(t)
                            }
                        )),
                            a.searchData = m,
                            this.rebuild(),
                            a.update(),
                        i || a.emit("datatable.sort", e, t)
                    }
                ))
            }
            rebuild() {
                let e, t, s, i;
                const a = this.dt
                    , n = [];
                a.activeRows = [],
                    a.activeHeadings = [],
                    a.headings.forEach(((e,t)=>{
                            e.originalCellIndex = t,
                                e.sortable = "false" !== e.getAttribute("data-sortable"),
                            a.hiddenColumns.includes(t) || a.activeHeadings.push(e)
                        }
                    )),
                    a.data.forEach(((r,o)=>{
                            e = r.cloneNode(!1),
                                t = r.cloneNode(!1),
                                e.dataIndex = t.dataIndex = o,
                            null !== r.searchIndex && void 0 !== r.searchIndex && (e.searchIndex = t.searchIndex = r.searchIndex),
                                Array.from(r.cells).forEach((n=>{
                                        s = n.cloneNode(!0),
                                            s.data = n.data,
                                            e.appendChild(s),
                                        a.hiddenColumns.includes(s.cellIndex) || (i = s.cloneNode(!0),
                                            i.data = s.data,
                                            t.appendChild(i))
                                    }
                                )),
                                n.push(e),
                                a.activeRows.push(t)
                        }
                    )),
                    a.data = n,
                    a.update()
            }
        }
        const c = function(e) {
            let t = !1
                , s = !1;
            if ((e = e || this.options.data).headings) {
                t = a("thead");
                const s = a("tr");
                e.headings.forEach((e=>{
                        const t = a("th", {
                            html: e
                        });
                        s.appendChild(t)
                    }
                )),
                    t.appendChild(s)
            }
            e.data && e.data.length && (s = a("tbody"),
                e.data.forEach((t=>{
                        if (e.headings && e.headings.length !== t.length)
                            throw new Error("The number of rows do not match the number of headings.");
                        const i = a("tr");
                        t.forEach((e=>{
                                const t = a("td", {
                                    html: e
                                });
                                i.appendChild(t)
                            }
                        )),
                            s.appendChild(i)
                    }
                ))),
            t && (null !== this.dom.tHead && this.dom.removeChild(this.dom.tHead),
                this.dom.appendChild(t)),
            s && (this.dom.tBodies.length && this.dom.removeChild(this.dom.tBodies[0]),
                this.dom.appendChild(s))
        }
            , p = {
            sortable: !0,
            searchable: !0,
            paging: !0,
            perPage: 10,
            perPageSelect: [5, 10, 15, 20, 25],
            nextPrev: !0,
            firstLast: !1,
            prevText: "&lsaquo;",
            nextText: "&rsaquo;",
            firstText: "&laquo;",
            lastText: "&raquo;",
            ellipsisText: "&hellip;",
            ascText: "\u25b4",
            descText: "\u25be",
            truncatePager: !0,
            pagerDelta: 2,
            scrollY: "",
            fixedColumns: !0,
            fixedHeight: !1,
            header: !0,
            hiddenHeader: !1,
            footer: !1,
            labels: {
                placeholder: "Search...",
                perPage: "{select} entries per page",
                noRows: "No entries found",
                noResults: "No results match your search query",
                info: "Showing {start} to {end} of {rows} entries"
            },
            layout: {
                top: "{select}{search}",
                bottom: "{info}{pager}"
            }
        };
        class h {
            constructor(e, t={}) {
                const s = "string" === typeof e ? document.querySelector(e) : e;
                if (this.options = {
                    ...p,
                    ...t,
                    layout: {
                        ...p.layout,
                        ...t.layout
                    },
                    labels: {
                        ...p.labels,
                        ...t.labels
                    }
                },
                    this.initialized = !1,
                    this.initialLayout = s.innerHTML,
                    this.initialSortable = this.options.sortable,
                this.options.header || (this.options.sortable = !1),
                null === s.tHead && (!this.options.data || this.options.data && !this.options.data.headings) && (this.options.sortable = !1),
                s.tBodies.length && !s.tBodies[0].rows.length && this.options.data && !this.options.data.data)
                    throw new Error("You seem to be using the data option, but you've not defined any rows.");
                this.dom = s,
                    this.table = this.dom,
                    this.listeners = {
                        onResize: e=>this.onResize(e)
                    },
                    this.init()
            }
            static extend(e, t) {
                "function" === typeof t ? h.prototype[e] = t : h[e] = t
            }
            init(e) {
                if (this.initialized || this.dom.classList.contains("dataTable-table"))
                    return !1;
                Object.assign(this.options, e || {}),
                    this.currentPage = 1,
                    this.onFirstPage = !0,
                    this.hiddenColumns = [],
                    this.columnRenderers = [],
                    this.selectedColumns = [],
                    this.render(),
                    setTimeout((()=>{
                            this.emit("datatable.init"),
                                this.initialized = !0,
                            this.options.plugins && Object.entries(this.options.plugins).forEach((([e,t])=>{
                                    this[e] && "function" === typeof this[e] && (this[e] = this[e](t, {
                                        createElement: a
                                    }),
                                    t.enabled && this[e].init && "function" === typeof this[e].init && this[e].init())
                                }
                            ))
                        }
                    ), 10)
            }
            render(e) {
                if (e) {
                    switch (e) {
                        case "page":
                            this.renderPage();
                            break;
                        case "pager":
                            this.renderPager();
                            break;
                        case "header":
                            this.renderHeader()
                    }
                    return !1
                }
                const t = this.options;
                let s = "";
                if (t.data && c.call(this),
                    this.body = this.dom.tBodies[0],
                    this.head = this.dom.tHead,
                    this.foot = this.dom.tFoot,
                this.body || (this.body = a("tbody"),
                    this.dom.appendChild(this.body)),
                    this.hasRows = this.body.rows.length > 0,
                    !this.head) {
                    const e = a("thead")
                        , s = a("tr");
                    this.hasRows && (Array.from(this.body.rows[0].cells).forEach((()=>{
                            s.appendChild(a("th"))
                        }
                    )),
                        e.appendChild(s)),
                        this.head = e,
                        this.dom.insertBefore(this.head, this.body),
                        this.hiddenHeader = t.hiddenHeader
                }
                if (this.headings = [],
                    this.hasHeadings = this.head.rows.length > 0,
                this.hasHeadings && (this.header = this.head.rows[0],
                    this.headings = [].slice.call(this.header.cells)),
                t.header || this.head && this.dom.removeChild(this.dom.tHead),
                    t.footer ? this.head && !this.foot && (this.foot = a("tfoot", {
                        html: this.head.innerHTML
                    }),
                        this.dom.appendChild(this.foot)) : this.foot && this.dom.removeChild(this.dom.tFoot),
                    this.wrapper = a("div", {
                        class: "dataTable-wrapper dataTable-loading"
                    }),
                    s += "<div class='dataTable-top'>",
                    s += t.layout.top,
                    s += "</div>",
                    t.scrollY.length ? s += `<div class='dataTable-container' style='height: ${t.scrollY}; overflow-Y: auto;'></div>` : s += "<div class='dataTable-container'></div>",
                    s += "<div class='dataTable-bottom'>",
                    s += t.layout.bottom,
                    s += "</div>",
                    s = s.replace("{info}", t.paging ? "<div class='dataTable-info'></div>" : ""),
                t.paging && t.perPageSelect) {
                    let e = "<div class='dataTable-dropdown'><label>";
                    e += t.labels.perPage,
                        e += "</label></div>";
                    const i = a("select", {
                        class: "dataTable-selector"
                    });
                    t.perPageSelect.forEach((e=>{
                            const s = e === t.perPage
                                , a = new Option(e,e,s,s);
                            i.add(a)
                        }
                    )),
                        e = e.replace("{select}", i.outerHTML),
                        s = s.replace("{select}", e)
                } else
                    s = s.replace("{select}", "");
                if (t.searchable) {
                    const e = `<div class='dataTable-search'><input class='dataTable-input' placeholder='${t.labels.placeholder}' type='text'></div>`;
                    s = s.replace("{search}", e)
                } else
                    s = s.replace("{search}", "");
                this.hasHeadings && this.render("header"),
                    this.dom.classList.add("dataTable-table");
                const i = a("nav", {
                    class: "dataTable-pagination"
                })
                    , n = a("ul", {
                    class: "dataTable-pagination-list"
                });
                i.appendChild(n),
                    s = s.replace(/\{pager\}/g, i.outerHTML),
                    this.wrapper.innerHTML = s,
                    this.container = this.wrapper.querySelector(".dataTable-container"),
                    this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination-list"),
                    this.label = this.wrapper.querySelector(".dataTable-info"),
                    this.dom.parentNode.replaceChild(this.wrapper, this.dom),
                    this.container.appendChild(this.dom),
                    this.rect = this.dom.getBoundingClientRect(),
                    this.data = Array.from(this.body.rows),
                    this.activeRows = this.data.slice(),
                    this.activeHeadings = this.headings.slice(),
                    this.update(),
                    this.setColumns(),
                    this.fixHeight(),
                    this.fixColumns(),
                t.header || this.wrapper.classList.add("no-header"),
                t.footer || this.wrapper.classList.add("no-footer"),
                t.sortable && this.wrapper.classList.add("sortable"),
                t.searchable && this.wrapper.classList.add("searchable"),
                t.fixedHeight && this.wrapper.classList.add("fixed-height"),
                t.fixedColumns && this.wrapper.classList.add("fixed-columns"),
                    this.bindEvents()
            }
            renderPage() {
                if (this.hasHeadings && (n(this.header),
                    this.activeHeadings.forEach((e=>this.header.appendChild(e)))),
                this.hasRows && this.totalPages) {
                    this.currentPage > this.totalPages && (this.currentPage = 1);
                    const e = this.currentPage - 1
                        , t = document.createDocumentFragment();
                    this.pages[e].forEach((e=>t.appendChild(this.rows().render(e)))),
                        this.clear(t),
                        this.onFirstPage = 1 === this.currentPage,
                        this.onLastPage = this.currentPage === this.lastPage
                } else
                    this.setMessage(this.options.labels.noRows);
                let e, t = 0, s = 0, i = 0;
                if (this.totalPages && (t = this.currentPage - 1,
                    s = t * this.options.perPage,
                    i = s + this.pages[t].length,
                    s += 1,
                    e = this.searching ? this.searchData.length : this.data.length),
                this.label && this.options.labels.info.length) {
                    const t = this.options.labels.info.replace("{start}", s).replace("{end}", i).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", e);
                    this.label.innerHTML = e ? t : ""
                }
                1 == this.currentPage && this.fixHeight()
            }
            renderPager() {
                if (n(this.pagers),
                this.totalPages > 1) {
                    const e = "pager"
                        , t = document.createDocumentFragment()
                        , s = this.onFirstPage ? 1 : this.currentPage - 1
                        , i = this.onLastPage ? this.totalPages : this.currentPage + 1;
                    this.options.firstLast && t.appendChild(r(e, 1, this.options.firstText)),
                    this.options.nextPrev && !this.onFirstPage && t.appendChild(r(e, s, this.options.prevText));
                    let n = this.links;
                    this.options.truncatePager && (n = ((e,t,s,i,n)=>{
                            let r;
                            const o = 2 * (i = i || 2);
                            let l = t - i
                                , d = t + i;
                            const c = []
                                , p = [];
                            t < 4 - i + o ? d = 3 + o : t > s - (3 - i + o) && (l = s - (2 + o));
                            for (let a = 1; a <= s; a++)
                                if (1 == a || a == s || a >= l && a <= d) {
                                    const t = e[a - 1];
                                    t.classList.remove("active"),
                                        c.push(t)
                                }
                            return c.forEach((t=>{
                                    const s = t.children[0].getAttribute("data-page");
                                    if (r) {
                                        const t = r.children[0].getAttribute("data-page");
                                        if (s - t == 2)
                                            p.push(e[t]);
                                        else if (s - t != 1) {
                                            const e = a("li", {
                                                class: "ellipsis",
                                                html: `<a href="#">${n}</a>`
                                            });
                                            p.push(e)
                                        }
                                    }
                                    p.push(t),
                                        r = t
                                }
                            )),
                                p
                        }
                    )(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText)),
                        this.links[this.currentPage - 1].classList.add("active"),
                        n.forEach((e=>{
                                e.classList.remove("active"),
                                    t.appendChild(e)
                            }
                        )),
                        this.links[this.currentPage - 1].classList.add("active"),
                    this.options.nextPrev && !this.onLastPage && t.appendChild(r(e, i, this.options.nextText)),
                    this.options.firstLast && t.appendChild(r(e, this.totalPages, this.options.lastText)),
                        this.pagers.forEach((e=>{
                                e.appendChild(t.cloneNode(!0))
                            }
                        ))
                }
            }
            renderHeader() {
                this.labels = [],
                this.headings && this.headings.length && this.headings.forEach(((e,t)=>{
                        if (this.labels[t] = e.textContent,
                        e.firstElementChild && e.firstElementChild.classList.contains("dataTable-sorter") && (e.innerHTML = e.firstElementChild.innerHTML),
                            e.sortable = "false" !== e.getAttribute("data-sortable"),
                            e.originalCellIndex = t,
                        this.options.sortable && e.sortable) {
                            const t = a("a", {
                                href: "#",
                                class: "dataTable-sorter",
                                html: e.innerHTML
                            });
                            e.innerHTML = "",
                                e.setAttribute("data-sortable", ""),
                                e.appendChild(t)
                        }
                    }
                )),
                    this.fixColumns()
            }
            bindEvents() {
                const e = this.options;
                if (e.perPageSelect) {
                    const t = this.wrapper.querySelector(".dataTable-selector");
                    t && t.addEventListener("change", (()=>{
                            e.perPage = parseInt(t.value, 10),
                                this.update(),
                                this.fixHeight(),
                                this.emit("datatable.perpage", e.perPage)
                        }
                    ), !1)
                }
                e.searchable && (this.input = this.wrapper.querySelector(".dataTable-input"),
                this.input && this.input.addEventListener("keyup", (()=>this.search(this.input.value)), !1)),
                    this.wrapper.addEventListener("click", (t=>{
                            const s = t.target.closest("a");
                            s && "a" === s.nodeName.toLowerCase() && (s.hasAttribute("data-page") ? (this.page(s.getAttribute("data-page")),
                                t.preventDefault()) : e.sortable && s.classList.contains("dataTable-sorter") && "false" != s.parentNode.getAttribute("data-sortable") && (this.columns().sort(this.headings.indexOf(s.parentNode)),
                                t.preventDefault()))
                        }
                    ), !1),
                    window.addEventListener("resize", this.listeners.onResize)
            }
            onResize() {
                this.rect = this.container.getBoundingClientRect(),
                this.rect.width && this.fixColumns()
            }
            setColumns(e) {
                e || this.data.forEach((e=>{
                        Array.from(e.cells).forEach((e=>{
                                e.data = e.innerHTML
                            }
                        ))
                    }
                )),
                this.options.columns && this.headings.length && this.options.columns.forEach((e=>{
                        Array.isArray(e.select) || (e.select = [e.select]),
                        e.hasOwnProperty("render") && "function" === typeof e.render && (this.selectedColumns = this.selectedColumns.concat(e.select),
                            this.columnRenderers.push({
                                columns: e.select,
                                renderer: e.render
                            })),
                            e.select.forEach((t=>{
                                    const s = this.headings[t];
                                    e.type && s.setAttribute("data-type", e.type),
                                    e.format && s.setAttribute("data-format", e.format),
                                    e.hasOwnProperty("sortable") && s.setAttribute("data-sortable", e.sortable),
                                    e.hasOwnProperty("hidden") && !1 !== e.hidden && this.columns().hide([t]),
                                    e.hasOwnProperty("sort") && 1 === e.select.length && this.columns().sort(e.select[0], e.sort, !0)
                                }
                            ))
                    }
                )),
                this.hasRows && (this.data.forEach(((e,t)=>{
                        e.dataIndex = t,
                            Array.from(e.cells).forEach((e=>{
                                    e.data = e.innerHTML
                                }
                            ))
                    }
                )),
                this.selectedColumns.length && this.data.forEach((e=>{
                        Array.from(e.cells).forEach(((t,s)=>{
                                this.selectedColumns.includes(s) && this.columnRenderers.forEach((i=>{
                                        i.columns.includes(s) && (t.innerHTML = i.renderer.call(this, t.data, t, e))
                                    }
                                ))
                            }
                        ))
                    }
                )),
                    this.columns().rebuild()),
                    this.render("header")
            }
            destroy() {
                this.dom.innerHTML = this.initialLayout,
                    this.dom.classList.remove("dataTable-table"),
                    this.wrapper.parentNode.replaceChild(this.dom, this.wrapper),
                    this.initialized = !1,
                    window.removeEventListener("resize", this.listeners.onResize)
            }
            update() {
                this.wrapper.classList.remove("dataTable-empty"),
                    this.paginate(this),
                    this.render("page"),
                    this.links = [];
                let e = this.pages.length;
                for (; e--; ) {
                    const t = e + 1;
                    this.links[e] = r(0 === e ? "active" : "", t, t)
                }
                this.sorting = !1,
                    this.render("pager"),
                    this.rows().update(),
                    this.emit("datatable.update")
            }
            paginate() {
                const e = this.options.perPage;
                let t = this.activeRows;
                return this.searching && (t = [],
                    this.searchData.forEach((e=>t.push(this.activeRows[e])))),
                    this.options.paging ? this.pages = t.map(((s,i)=>i % e === 0 ? t.slice(i, i + e) : null)).filter((e=>e)) : this.pages = [t],
                    this.totalPages = this.lastPage = this.pages.length,
                    this.totalPages
            }
            fixColumns() {
                if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
                    let e, t = !1;
                    if (this.columnWidths = [],
                        this.dom.tHead) {
                        if (this.options.scrollY.length && (t = a("thead"),
                            t.appendChild(a("tr")),
                            t.style.height = "0px",
                        this.headerTable && (this.dom.tHead = this.headerTable.tHead)),
                            this.activeHeadings.forEach((e=>{
                                    e.style.width = ""
                                }
                            )),
                            this.activeHeadings.forEach(((e,s)=>{
                                    const i = e.offsetWidth
                                        , n = i / this.rect.width * 100;
                                    if (e.style.width = `${n}%`,
                                        this.columnWidths[s] = i,
                                        this.options.scrollY.length) {
                                        const e = a("th");
                                        t.firstElementChild.appendChild(e),
                                            e.style.width = `${n}%`,
                                            e.style.paddingTop = "0",
                                            e.style.paddingBottom = "0",
                                            e.style.border = "0"
                                    }
                                }
                            )),
                            this.options.scrollY.length) {
                            const e = this.dom.parentElement;
                            if (!this.headerTable) {
                                this.headerTable = a("table", {
                                    class: "dataTable-table"
                                });
                                const t = a("div", {
                                    class: "dataTable-headercontainer"
                                });
                                t.appendChild(this.headerTable),
                                    e.parentElement.insertBefore(t, e)
                            }
                            const s = this.dom.tHead;
                            this.dom.replaceChild(t, s),
                                this.headerTable.tHead = s,
                                this.headerTable.parentElement.style.paddingRight = `${this.headerTable.clientWidth - this.dom.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || "0", 10)}px`,
                            e.scrollHeight > e.clientHeight && (e.style.overflowY = "scroll")
                        }
                    } else {
                        e = [],
                            t = a("thead");
                        const s = a("tr");
                        Array.from(this.dom.tBodies[0].rows[0].cells).forEach((()=>{
                                const t = a("th");
                                s.appendChild(t),
                                    e.push(t)
                            }
                        )),
                            t.appendChild(s),
                            this.dom.insertBefore(t, this.body);
                        const i = [];
                        e.forEach(((e,t)=>{
                                const s = e.offsetWidth
                                    , a = s / this.rect.width * 100;
                                i.push(a),
                                    this.columnWidths[t] = s
                            }
                        )),
                            this.data.forEach((e=>{
                                    Array.from(e.cells).forEach(((e,t)=>{
                                            this.columns(e.cellIndex).visible() && (e.style.width = `${i[t]}%`)
                                        }
                                    ))
                                }
                            )),
                            this.dom.removeChild(t)
                    }
                }
            }
            fixHeight() {
                this.options.fixedHeight && (this.container.style.height = null,
                    this.rect = this.container.getBoundingClientRect(),
                    this.container.style.height = `${this.rect.height}px`)
            }
            search(e) {
                return !!this.hasRows && (e = e.toLowerCase(),
                    this.currentPage = 1,
                    this.searching = !0,
                    this.searchData = [],
                    e.length ? (this.clear(),
                        this.data.forEach(((t,s)=>{
                                const i = this.searchData.includes(t);
                                e.split(" ").reduce(((e,s)=>{
                                        let i = !1
                                            , a = null
                                            , n = null;
                                        for (let r = 0; r < t.cells.length; r++)
                                            if (a = t.cells[r],
                                                n = a.hasAttribute("data-content") ? a.getAttribute("data-content") : a.textContent,
                                            n.toLowerCase().includes(s) && this.columns(a.cellIndex).visible()) {
                                                i = !0;
                                                break
                                            }
                                        return e && i
                                    }
                                ), !0) && !i ? (t.searchIndex = s,
                                    this.searchData.push(s)) : t.searchIndex = null
                            }
                        )),
                        this.wrapper.classList.add("search-results"),
                        this.searchData.length ? this.update() : (this.wrapper.classList.remove("search-results"),
                            this.setMessage(this.options.labels.noResults)),
                        void this.emit("datatable.search", e, this.searchData)) : (this.searching = !1,
                        this.update(),
                        this.emit("datatable.search", e, this.searchData),
                        this.wrapper.classList.remove("search-results"),
                        !1))
            }
            page(e) {
                return e != this.currentPage && (isNaN(e) || (this.currentPage = parseInt(e, 10)),
                !(e > this.pages.length || e < 0) && (this.render("page"),
                    this.render("pager"),
                    void this.emit("datatable.page", e)))
            }
            sortColumn(e, t) {
                this.columns().sort(e, t)
            }
            insert(e) {
                let t = [];
                if (i(e)) {
                    if (e.headings && !this.hasHeadings && !this.hasRows) {
                        const t = a("tr");
                        e.headings.forEach((e=>{
                                const s = a("th", {
                                    html: e
                                });
                                t.appendChild(s)
                            }
                        )),
                            this.head.appendChild(t),
                            this.header = t,
                            this.headings = [].slice.call(t.cells),
                            this.hasHeadings = !0,
                            this.options.sortable = this.initialSortable,
                            this.render("header"),
                            this.activeHeadings = this.headings.slice()
                    }
                    e.data && Array.isArray(e.data) && (t = e.data)
                } else
                    Array.isArray(e) && e.forEach((e=>{
                            const s = [];
                            Object.entries(e).forEach((([e,t])=>{
                                    const i = this.labels.indexOf(e);
                                    i > -1 && (s[i] = t)
                                }
                            )),
                                t.push(s)
                        }
                    ));
                t.length && (this.rows().add(t),
                    this.hasRows = !0),
                    this.update(),
                    this.setColumns(),
                    this.fixColumns()
            }
            refresh() {
                this.options.searchable && (this.input.value = "",
                    this.searching = !1),
                    this.currentPage = 1,
                    this.onFirstPage = !0,
                    this.update(),
                    this.emit("datatable.refresh")
            }
            clear(e) {
                this.body && n(this.body);
                let t = this.body;
                if (this.body || (t = this.dom),
                    e) {
                    if ("string" === typeof e) {
                        document.createDocumentFragment().innerHTML = e
                    }
                    t.appendChild(e)
                }
            }
            export(e) {
                if (!this.hasHeadings && !this.hasRows)
                    return !1;
                const t = this.activeHeadings;
                let s = [];
                const a = [];
                let n, r, o, l;
                if (!i(e))
                    return !1;
                const d = {
                    download: !0,
                    skipColumn: [],
                    lineDelimiter: "\n",
                    columnDelimiter: ",",
                    tableName: "myTable",
                    replacer: null,
                    space: 4,
                    ...e
                };
                if (d.type) {
                    if ("txt" !== d.type && "csv" !== d.type || (s[0] = this.header),
                        d.selection)
                        if (isNaN(d.selection)) {
                            if (Array.isArray(d.selection))
                                for (n = 0; n < d.selection.length; n++)
                                    s = s.concat(this.pages[d.selection[n] - 1])
                        } else
                            s = s.concat(this.pages[d.selection - 1]);
                    else
                        s = s.concat(this.activeRows);
                    if (s.length) {
                        if ("txt" === d.type || "csv" === d.type) {
                            for (o = "",
                                     n = 0; n < s.length; n++) {
                                for (r = 0; r < s[n].cells.length; r++)
                                    if (!d.skipColumn.includes(t[r].originalCellIndex) && this.columns(t[r].originalCellIndex).visible()) {
                                        let e = s[n].cells[r].textContent;
                                        e = e.trim(),
                                            e = e.replace(/\s{2,}/g, " "),
                                            e = e.replace(/\n/g, "  "),
                                            e = e.replace(/"/g, '""'),
                                            e = e.replace(/#/g, "%23"),
                                        e.includes(",") && (e = `"${e}"`),
                                            o += e + d.columnDelimiter
                                    }
                                o = o.trim().substring(0, o.length - 1),
                                    o += d.lineDelimiter
                            }
                            o = o.trim().substring(0, o.length - 1),
                            d.download && (o = `data:text/csv;charset=utf-8,${o}`)
                        } else if ("sql" === d.type) {
                            for (o = `INSERT INTO \`${d.tableName}\` (`,
                                     n = 0; n < t.length; n++)
                                !d.skipColumn.includes(t[n].originalCellIndex) && this.columns(t[n].originalCellIndex).visible() && (o += `\`${t[n].textContent}\`,`);
                            for (o = o.trim().substring(0, o.length - 1),
                                     o += ") VALUES ",
                                     n = 0; n < s.length; n++) {
                                for (o += "(",
                                         r = 0; r < s[n].cells.length; r++)
                                    !d.skipColumn.includes(t[r].originalCellIndex) && this.columns(t[r].originalCellIndex).visible() && (o += `"${s[n].cells[r].textContent}",`);
                                o = o.trim().substring(0, o.length - 1),
                                    o += "),"
                            }
                            o = o.trim().substring(0, o.length - 1),
                                o += ";",
                            d.download && (o = `data:application/sql;charset=utf-8,${o}`)
                        } else if ("json" === d.type) {
                            for (r = 0; r < s.length; r++)
                                for (a[r] = a[r] || {},
                                         n = 0; n < t.length; n++)
                                    !d.skipColumn.includes(t[n].originalCellIndex) && this.columns(t[n].originalCellIndex).visible() && (a[r][t[n].textContent] = s[r].cells[n].textContent);
                            o = JSON.stringify(a, d.replacer, d.space),
                            d.download && (o = `data:application/json;charset=utf-8,${o}`)
                        }
                        return d.download && (d.filename = d.filename || "datatable_export",
                            d.filename += `.${d.type}`,
                            o = encodeURI(o),
                            l = document.createElement("a"),
                            l.href = o,
                            l.download = d.filename,
                            document.body.appendChild(l),
                            l.click(),
                            document.body.removeChild(l)),
                            o
                    }
                }
                return !1
            }
            import(e) {
                let t = !1;
                if (!i(e))
                    return !1;
                const s = {
                    lineDelimiter: "\n",
                    columnDelimiter: ",",
                    ...e
                };
                if (s.data.length || i(s.data)) {
                    if ("csv" === s.type) {
                        t = {
                            data: []
                        };
                        const e = s.data.split(s.lineDelimiter);
                        e.length && (s.headings && (t.headings = e[0].split(s.columnDelimiter),
                            e.shift()),
                            e.forEach(((e,i)=>{
                                    t.data[i] = [];
                                    const a = e.split(s.columnDelimiter);
                                    a.length && a.forEach((e=>{
                                            t.data[i].push(e)
                                        }
                                    ))
                                }
                            )))
                    } else if ("json" === s.type) {
                        const e = (e=>{
                                let t = !1;
                                try {
                                    t = JSON.parse(e)
                                } catch (s) {
                                    return !1
                                }
                                return !(null === t || !Array.isArray(t) && !i(t)) && t
                            }
                        )(s.data);
                        e && (t = {
                            headings: [],
                            data: []
                        },
                            e.forEach(((e,s)=>{
                                    t.data[s] = [],
                                        Object.entries(e).forEach((([e,i])=>{
                                                t.headings.includes(e) || t.headings.push(e),
                                                    t.data[s].push(i)
                                            }
                                        ))
                                }
                            )))
                    }
                    i(s.data) && (t = s.data),
                    t && this.insert(t)
                }
                return !1
            }
            print() {
                const e = this.activeHeadings
                    , t = this.activeRows
                    , s = a("table")
                    , i = a("thead")
                    , n = a("tbody")
                    , r = a("tr");
                e.forEach((e=>{
                        r.appendChild(a("th", {
                            html: e.textContent
                        }))
                    }
                )),
                    i.appendChild(r),
                    t.forEach((e=>{
                            const t = a("tr");
                            Array.from(e.cells).forEach((e=>{
                                    t.appendChild(a("td", {
                                        html: e.textContent
                                    }))
                                }
                            )),
                                n.appendChild(t)
                        }
                    )),
                    s.appendChild(i),
                    s.appendChild(n);
                const o = window.open();
                o.document.body.appendChild(s),
                    o.print()
            }
            setMessage(e) {
                let t = 1;
                this.hasRows ? t = this.data[0].cells.length : this.activeHeadings.length && (t = this.activeHeadings.length),
                    this.wrapper.classList.add("dataTable-empty"),
                this.label && (this.label.innerHTML = ""),
                    this.totalPages = 0,
                    this.render("pager"),
                    this.clear(a("tr", {
                        html: `<td class="dataTables-empty" colspan="${t}">${e}</td>`
                    }))
            }
            columns(e) {
                return new d(this,e)
            }
            rows(e) {
                return new l(this,e)
            }
            on(e, t) {
                this.events = this.events || {},
                    this.events[e] = this.events[e] || [],
                    this.events[e].push(t)
            }
            off(e, t) {
                this.events = this.events || {},
                e in this.events !== !1 && this.events[e].splice(this.events[e].indexOf(t), 1)
            }
            emit(e) {
                if (this.events = this.events || {},
                e in this.events !== !1)
                    for (let t = 0; t < this.events[e].length; t++)
                        this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }
    }
    ,
    7003: (e,t,s)=>{
        "use strict";
        function i(e) {
            return null !== e && "object" === typeof e && "constructor"in e && e.constructor === Object
        }
        function a(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
                Object.keys(t).forEach((function(s) {
                        "undefined" === typeof e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && a(e[s], t[s])
                    }
                ))
        }
        s.d(t, {
            Z: ()=>pe
        });
        var n = "undefined" !== typeof document ? document : {}
            , r = {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            createElementNS: function() {
                return {}
            },
            importNode: function() {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        a(n, r);
        var o = "undefined" !== typeof window ? window : {};
        a(o, {
            document: r,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState: function() {},
                pushState: function() {},
                go: function() {},
                back: function() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {},
            matchMedia: function() {
                return {}
            }
        });
        class l {
            constructor(e) {
                const t = this;
                for (let s = 0; s < e.length; s += 1)
                    t[s] = e[s];
                return t.length = e.length,
                    this
            }
        }
        function d(e, t) {
            const s = [];
            let i = 0;
            if (e && !t && e instanceof l)
                return e;
            if (e)
                if ("string" === typeof e) {
                    let a, r;
                    const o = e.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        let e = "div";
                        for (0 === o.indexOf("<li") && (e = "ul"),
                             0 === o.indexOf("<tr") && (e = "tbody"),
                             0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (e = "tr"),
                             0 === o.indexOf("<tbody") && (e = "table"),
                             0 === o.indexOf("<option") && (e = "select"),
                                 r = n.createElement(e),
                                 r.innerHTML = o,
                                 i = 0; i < r.childNodes.length; i += 1)
                            s.push(r.childNodes[i])
                    } else
                        for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || n).querySelectorAll(e.trim()) : [n.getElementById(e.trim().split("#")[1])],
                                 i = 0; i < a.length; i += 1)
                            a[i] && s.push(a[i])
                } else if (e.nodeType || e === o || e === n)
                    s.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1)
                        s.push(e[i]);
            return new l(s)
        }
        function c(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
                -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }
        d.fn = l.prototype,
            d.Class = l,
            d.Dom7 = l;
        "resize scroll".split(" ");
        const p = {
            addClass: function(e) {
                if ("undefined" === typeof e)
                    return this;
                const t = e.split(" ");
                for (let s = 0; s < t.length; s += 1)
                    for (let e = 0; e < this.length; e += 1)
                        "undefined" !== typeof this[e] && "undefined" !== typeof this[e].classList && this[e].classList.add(t[s]);
                return this
            },
            removeClass: function(e) {
                const t = e.split(" ");
                for (let s = 0; s < t.length; s += 1)
                    for (let e = 0; e < this.length; e += 1)
                        "undefined" !== typeof this[e] && "undefined" !== typeof this[e].classList && this[e].classList.remove(t[s]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                const t = e.split(" ");
                for (let s = 0; s < t.length; s += 1)
                    for (let e = 0; e < this.length; e += 1)
                        "undefined" !== typeof this[e] && "undefined" !== typeof this[e].classList && this[e].classList.toggle(t[s]);
                return this
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" === typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let s = 0; s < this.length; s += 1)
                    if (2 === arguments.length)
                        this[s].setAttribute(e, t);
                    else
                        for (const t in e)
                            this[s][t] = e[t],
                                this[s].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                let s;
                if ("undefined" !== typeof t) {
                    for (let i = 0; i < this.length; i += 1)
                        s = this[i],
                        s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                            s.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (s = this[0],
                    s) {
                    if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage)
                        return s.dom7ElementDataStorage[e];
                    const t = s.getAttribute(`data-${e}`);
                    return t || void 0
                }
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t].style;
                    s.webkitTransform = e,
                        s.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" !== typeof e && (e = `${e}ms`);
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t].style;
                    s.webkitTransitionDuration = e,
                        s.transitionDuration = e
                }
                return this
            },
            on: function(...e) {
                let[t,s,i,a] = e;
                function n(e) {
                    const t = e.target;
                    if (!t)
                        return;
                    const a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e),
                        d(t).is(s))
                        i.apply(t, a);
                    else {
                        const e = d(t).parents();
                        for (let t = 0; t < e.length; t += 1)
                            d(e[t]).is(s) && i.apply(e[t], a)
                    }
                }
                function r(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e),
                        i.apply(this, t)
                }
                "function" === typeof e[1] && ([t,i,a] = e,
                    s = void 0),
                a || (a = !1);
                const o = t.split(" ");
                let l;
                for (let d = 0; d < this.length; d += 1) {
                    const e = this[d];
                    if (s)
                        for (l = 0; l < o.length; l += 1) {
                            const t = o[l];
                            e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                            e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                                e.dom7LiveListeners[t].push({
                                    listener: i,
                                    proxyListener: n
                                }),
                                e.addEventListener(t, n, a)
                        }
                    else
                        for (l = 0; l < o.length; l += 1) {
                            const t = o[l];
                            e.dom7Listeners || (e.dom7Listeners = {}),
                            e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                                e.dom7Listeners[t].push({
                                    listener: i,
                                    proxyListener: r
                                }),
                                e.addEventListener(t, r, a)
                        }
                }
                return this
            },
            off: function(...e) {
                let[t,s,i,a] = e;
                "function" === typeof e[1] && ([t,i,a] = e,
                    s = void 0),
                a || (a = !1);
                const n = t.split(" ");
                for (let r = 0; r < n.length; r += 1) {
                    const e = n[r];
                    for (let t = 0; t < this.length; t += 1) {
                        const n = this[t];
                        let r;
                        if (!s && n.dom7Listeners ? r = n.dom7Listeners[e] : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[e]),
                        r && r.length)
                            for (let t = r.length - 1; t >= 0; t -= 1) {
                                const s = r[t];
                                i && s.listener === i || i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (n.removeEventListener(e, s.proxyListener, a),
                                    r.splice(t, 1)) : i || (n.removeEventListener(e, s.proxyListener, a),
                                    r.splice(t, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                const t = e[0].split(" ")
                    , s = e[1];
                for (let a = 0; a < t.length; a += 1) {
                    const r = t[a];
                    for (let t = 0; t < this.length; t += 1) {
                        const a = this[t];
                        let l;
                        try {
                            l = new o.CustomEvent(r,{
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (i) {
                            l = n.createEvent("Event"),
                                l.initEvent(r, !0, !0),
                                l.detail = s
                        }
                        a.dom7EventData = e.filter(((e,t)=>t > 0)),
                            a.dispatchEvent(l),
                            a.dom7EventData = [],
                            delete a.dom7EventData
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                const t = ["webkitTransitionEnd", "transitionend"]
                    , s = this;
                let i;
                function a(n) {
                    if (n.target === this)
                        for (e.call(this, n),
                                 i = 0; i < t.length; i += 1)
                            s.off(t[i], a)
                }
                if (e)
                    for (i = 0; i < t.length; i += 1)
                        s.on(t[i], a);
                return this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (this.length > 0) {
                    const e = this[0]
                        , t = e.getBoundingClientRect()
                        , s = n.body
                        , i = e.clientTop || s.clientTop || 0
                        , a = e.clientLeft || s.clientLeft || 0
                        , r = e === o ? o.scrollY : e.scrollTop
                        , l = e === o ? o.scrollX : e.scrollLeft;
                    return {
                        top: t.top + r - i,
                        left: t.left + l - a
                    }
                }
                return null
            },
            css: function(e, t) {
                let s;
                if (1 === arguments.length) {
                    if ("string" !== typeof e) {
                        for (s = 0; s < this.length; s += 1)
                            for (let t in e)
                                this[s].style[t] = e[t];
                        return this
                    }
                    if (this[0])
                        return o.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" === typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        this[s].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                if (!e)
                    return this;
                for (let t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t]))
                        return this;
                return this
            },
            html: function(e) {
                if ("undefined" === typeof e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (let t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if ("undefined" === typeof e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            },
            is: function(e) {
                const t = this[0];
                let s, i;
                if (!t || "undefined" === typeof e)
                    return !1;
                if ("string" === typeof e) {
                    if (t.matches)
                        return t.matches(e);
                    if (t.webkitMatchesSelector)
                        return t.webkitMatchesSelector(e);
                    if (t.msMatchesSelector)
                        return t.msMatchesSelector(e);
                    for (s = d(e),
                             i = 0; i < s.length; i += 1)
                        if (s[i] === t)
                            return !0;
                    return !1
                }
                if (e === n)
                    return t === n;
                if (e === o)
                    return t === o;
                if (e.nodeType || e instanceof l) {
                    for (s = e.nodeType ? [e] : e,
                             i = 0; i < s.length; i += 1)
                        if (s[i] === t)
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if ("undefined" === typeof e)
                    return this;
                const t = this.length;
                let s;
                return e > t - 1 ? new l([]) : e < 0 ? (s = t + e,
                    new l(s < 0 ? [] : [this[s]])) : new l([this[e]])
            },
            append: function(...e) {
                let t;
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" === typeof t) {
                            const s = n.createElement("div");
                            for (s.innerHTML = t; s.firstChild; )
                                this[e].appendChild(s.firstChild)
                        } else if (t instanceof l)
                            for (let s = 0; s < t.length; s += 1)
                                this[e].appendChild(t[s]);
                        else
                            this[e].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                let t, s;
                for (t = 0; t < this.length; t += 1)
                    if ("string" === typeof e) {
                        const i = n.createElement("div");
                        for (i.innerHTML = e,
                                 s = i.childNodes.length - 1; s >= 0; s -= 1)
                            this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                    } else if (e instanceof l)
                        for (s = 0; s < e.length; s += 1)
                            this[t].insertBefore(e[s], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
            },
            nextAll: function(e) {
                const t = [];
                let s = this[0];
                if (!s)
                    return new l([]);
                for (; s.nextElementSibling; ) {
                    const i = s.nextElementSibling;
                    e ? d(i).is(e) && t.push(i) : t.push(i),
                        s = i
                }
                return new l(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
                }
                return new l([])
            },
            prevAll: function(e) {
                const t = [];
                let s = this[0];
                if (!s)
                    return new l([]);
                for (; s.previousElementSibling; ) {
                    const i = s.previousElementSibling;
                    e ? d(i).is(e) && t.push(i) : t.push(i),
                        s = i
                }
                return new l(t)
            },
            parent: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1)
                    null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                return d(c(t))
            },
            parents: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    let i = this[s].parentNode;
                    for (; i; )
                        e ? d(i).is(e) && t.push(i) : t.push(i),
                            i = i.parentNode
                }
                return d(c(t))
            },
            closest: function(e) {
                let t = this;
                return "undefined" === typeof e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                    t)
            },
            find: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1)
                        t.push(i[e])
                }
                return new l(t)
            },
            children: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].childNodes;
                    for (let s = 0; s < i.length; s += 1)
                        e ? 1 === i[s].nodeType && d(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s])
                }
                return new l(c(t))
            },
            filter: function(e) {
                const t = []
                    , s = this;
                for (let i = 0; i < s.length; i += 1)
                    e.call(s[i], i, s[i]) && t.push(s[i]);
                return new l(t)
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function(...e) {
                const t = this;
                let s, i;
                for (s = 0; s < e.length; s += 1) {
                    const a = d(e[s]);
                    for (i = 0; i < a.length; i += 1)
                        t[t.length] = a[i],
                            t.length += 1
                }
                return t
            },
            styles: function() {
                return this[0] ? o.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(p).forEach((e=>{
                d.fn[e] = d.fn[e] || p[e]
            }
        ));
        const h = {
            deleteProps(e) {
                const t = e;
                Object.keys(t).forEach((e=>{
                        try {
                            t[e] = null
                        } catch (s) {}
                        try {
                            delete t[e]
                        } catch (s) {}
                    }
                ))
            },
            nextTick: (e,t=0)=>setTimeout(e, t),
            now: ()=>Date.now(),
            getTranslate(e, t="x") {
                let s, i, a;
                const n = o.getComputedStyle(e, null);
                return o.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
                    a = new o.WebKitCSSMatrix("none" === i ? "" : i)) : (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                    s = a.toString().split(",")),
                "x" === t && (i = o.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
                "y" === t && (i = o.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
                i || 0
            },
            parseUrlQuery(e) {
                const t = {};
                let s, i, a, n, r = e || o.location.href;
                if ("string" === typeof r && r.length)
                    for (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "",
                             i = r.split("&").filter((e=>"" !== e)),
                             n = i.length,
                             s = 0; s < n; s += 1)
                        a = i[s].replace(/#\S+/g, "").split("="),
                            t[decodeURIComponent(a[0])] = "undefined" === typeof a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return t
            },
            isObject: e=>"object" === typeof e && null !== e && e.constructor && e.constructor === Object,
            extend(...e) {
                const t = Object(e[0]);
                for (let s = 1; s < e.length; s += 1) {
                    const i = e[s];
                    if (void 0 !== i && null !== i) {
                        const e = Object.keys(Object(i));
                        for (let s = 0, a = e.length; s < a; s += 1) {
                            const a = e[s]
                                , n = Object.getOwnPropertyDescriptor(i, a);
                            void 0 !== n && n.enumerable && (h.isObject(t[a]) && h.isObject(i[a]) ? h.extend(t[a], i[a]) : !h.isObject(t[a]) && h.isObject(i[a]) ? (t[a] = {},
                                h.extend(t[a], i[a])) : t[a] = i[a])
                        }
                    }
                }
                return t
            }
        }
            , u = {
            touch: !!("ontouchstart"in o || o.DocumentTouch && n instanceof o.DocumentTouch),
            pointerEvents: !!o.PointerEvent && "maxTouchPoints"in o.navigator && o.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver"in o || "WebkitMutationObserver"in o,
            passiveListener: function() {
                let e = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get() {
                            e = !0
                        }
                    });
                    o.addEventListener("testPassiveListener", null, t)
                } catch (t) {}
                return e
            }(),
            gestures: "ongesturestart"in o
        };
        class f {
            constructor(e={}) {
                const t = this;
                t.params = e,
                    t.eventsListeners = {},
                t.params && t.params.on && Object.keys(t.params.on).forEach((e=>{
                        t.on(e, t.params.on[e])
                    }
                ))
            }
            on(e, t, s) {
                const i = this;
                if ("function" !== typeof t)
                    return i;
                const a = s ? "unshift" : "push";
                return e.split(" ").forEach((e=>{
                        i.eventsListeners[e] || (i.eventsListeners[e] = []),
                            i.eventsListeners[e][a](t)
                    }
                )),
                    i
            }
            once(e, t, s) {
                const i = this;
                if ("function" !== typeof t)
                    return i;
                function a(...s) {
                    i.off(e, a),
                    a.f7proxy && delete a.f7proxy,
                        t.apply(i, s)
                }
                return a.f7proxy = t,
                    i.on(e, a, s)
            }
            off(e, t) {
                const s = this;
                return s.eventsListeners ? (e.split(" ").forEach((e=>{
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].length && s.eventsListeners[e].forEach(((i,a)=>{
                                (i === t || i.f7proxy && i.f7proxy === t) && s.eventsListeners[e].splice(a, 1)
                            }
                        ))
                    }
                )),
                    s) : s
            }
            emit(...e) {
                const t = this;
                if (!t.eventsListeners)
                    return t;
                let s, i, a;
                "string" === typeof e[0] || Array.isArray(e[0]) ? (s = e[0],
                    i = e.slice(1, e.length),
                    a = t) : (s = e[0].events,
                    i = e[0].data,
                    a = e[0].context || t);
                return (Array.isArray(s) ? s : s.split(" ")).forEach((e=>{
                        if (t.eventsListeners && t.eventsListeners[e]) {
                            const s = [];
                            t.eventsListeners[e].forEach((e=>{
                                    s.push(e)
                                }
                            )),
                                s.forEach((e=>{
                                        e.apply(a, i)
                                    }
                                ))
                        }
                    }
                )),
                    t
            }
            useModulesParams(e) {
                const t = this;
                t.modules && Object.keys(t.modules).forEach((s=>{
                        const i = t.modules[s];
                        i.params && h.extend(e, i.params)
                    }
                ))
            }
            useModules(e={}) {
                const t = this;
                t.modules && Object.keys(t.modules).forEach((s=>{
                        const i = t.modules[s]
                            , a = e[s] || {};
                        i.instance && Object.keys(i.instance).forEach((e=>{
                                const s = i.instance[e];
                                t[e] = "function" === typeof s ? s.bind(t) : s
                            }
                        )),
                        i.on && t.on && Object.keys(i.on).forEach((e=>{
                                t.on(e, i.on[e])
                            }
                        )),
                        i.create && i.create.bind(t)(a)
                    }
                ))
            }
            static set components(e) {
                this.use && this.use(e)
            }
            static installModule(e, ...t) {
                const s = this;
                s.prototype.modules || (s.prototype.modules = {});
                const i = e.name || `${Object.keys(s.prototype.modules).length}_ ${h.now()}`;
                return s.prototype.modules[i] = e,
                e.proto && Object.keys(e.proto).forEach((t=>{
                        s.prototype[t] = e.proto[t]
                    }
                )),
                e.static && Object.keys(e.static).forEach((t=>{
                        s[t] = e.static[t]
                    }
                )),
                e.install && e.install.apply(s, t),
                    s
            }
            static use(e, ...t) {
                const s = this;
                return Array.isArray(e) ? (e.forEach((e=>s.installModule(e))),
                    s) : s.installModule(e, ...t)
            }
        }
        var m = {
            updateSize: function() {
                const e = this;
                let t, s;
                const i = e.$el;
                t = "undefined" !== typeof e.params.width ? e.params.width : i[0].clientWidth,
                    s = "undefined" !== typeof e.params.height ? e.params.height : i[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
                    s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
                    h.extend(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
            },
            updateSlides: function() {
                const e = this
                    , t = e.params
                    , {$wrapperEl: s, size: i, rtlTranslate: a, wrongRTL: n} = e
                    , r = e.virtual && t.virtual.enabled
                    , l = r ? e.virtual.slides.length : e.slides.length
                    , d = s.children(`.${e.params.slideClass}`)
                    , c = r ? e.virtual.slides.length : d.length;
                let p = [];
                const u = []
                    , f = [];
                function m(e) {
                    return !t.cssMode || e !== d.length - 1
                }
                let g = t.slidesOffsetBefore;
                "function" === typeof g && (g = t.slidesOffsetBefore.call(e));
                let v = t.slidesOffsetAfter;
                "function" === typeof v && (v = t.slidesOffsetAfter.call(e));
                const b = e.snapGrid.length
                    , y = e.snapGrid.length;
                let x, w, T = t.spaceBetween, E = -g, C = 0, S = 0;
                if ("undefined" === typeof i)
                    return;
                "string" === typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * i),
                    e.virtualSize = -T,
                    a ? d.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                t.slidesPerColumn > 1 && (x = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                const $ = t.slidesPerColumn
                    , M = x / $
                    , P = Math.floor(c / t.slidesPerColumn);
                for (let h = 0; h < c; h += 1) {
                    w = 0;
                    const s = d.eq(h);
                    if (t.slidesPerColumn > 1) {
                        let i, a, n;
                        if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                            const e = Math.floor(h / (t.slidesPerGroup * t.slidesPerColumn))
                                , r = h - t.slidesPerColumn * t.slidesPerGroup * e
                                , o = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((c - e * $ * t.slidesPerGroup) / $), t.slidesPerGroup);
                            n = Math.floor(r / o),
                                a = r - n * o + e * t.slidesPerGroup,
                                i = a + n * x / $,
                                s.css({
                                    "-webkit-box-ordinal-group": i,
                                    "-moz-box-ordinal-group": i,
                                    "-ms-flex-order": i,
                                    "-webkit-order": i,
                                    order: i
                                })
                        } else
                            "column" === t.slidesPerColumnFill ? (a = Math.floor(h / $),
                                n = h - a * $,
                            (a > P || a === P && n === $ - 1) && (n += 1,
                            n >= $ && (n = 0,
                                a += 1))) : (n = Math.floor(h / M),
                                a = h - n * M);
                        s.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== n && t.spaceBetween && `${t.spaceBetween}px`)
                    }
                    if ("none" !== s.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            const i = o.getComputedStyle(s[0], null)
                                , a = s[0].style.transform
                                , n = s[0].style.webkitTransform;
                            if (a && (s[0].style.transform = "none"),
                            n && (s[0].style.webkitTransform = "none"),
                                t.roundLengths)
                                w = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                const e = parseFloat(i.getPropertyValue("width"))
                                    , t = parseFloat(i.getPropertyValue("padding-left"))
                                    , s = parseFloat(i.getPropertyValue("padding-right"))
                                    , a = parseFloat(i.getPropertyValue("margin-left"))
                                    , n = parseFloat(i.getPropertyValue("margin-right"))
                                    , r = i.getPropertyValue("box-sizing");
                                w = r && "border-box" === r ? e + a + n : e + t + s + a + n
                            } else {
                                const e = parseFloat(i.getPropertyValue("height"))
                                    , t = parseFloat(i.getPropertyValue("padding-top"))
                                    , s = parseFloat(i.getPropertyValue("padding-bottom"))
                                    , a = parseFloat(i.getPropertyValue("margin-top"))
                                    , n = parseFloat(i.getPropertyValue("margin-bottom"))
                                    , r = i.getPropertyValue("box-sizing");
                                w = r && "border-box" === r ? e + a + n : e + t + s + a + n
                            }
                            a && (s[0].style.transform = a),
                            n && (s[0].style.webkitTransform = n),
                            t.roundLengths && (w = Math.floor(w))
                        } else
                            w = (i - (t.slidesPerView - 1) * T) / t.slidesPerView,
                            t.roundLengths && (w = Math.floor(w)),
                            d[h] && (e.isHorizontal() ? d[h].style.width = `${w}px` : d[h].style.height = `${w}px`);
                        d[h] && (d[h].swiperSlideSize = w),
                            f.push(w),
                            t.centeredSlides ? (E = E + w / 2 + C / 2 + T,
                            0 === C && 0 !== h && (E = E - i / 2 - T),
                            0 === h && (E = E - i / 2 - T),
                            Math.abs(E) < .001 && (E = 0),
                            t.roundLengths && (E = Math.floor(E)),
                            S % t.slidesPerGroup === 0 && p.push(E),
                                u.push(E)) : (t.roundLengths && (E = Math.floor(E)),
                            (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && p.push(E),
                                u.push(E),
                                E = E + w + T),
                            e.virtualSize += w + T,
                            C = w,
                            S += 1
                    }
                }
                let L;
                if (e.virtualSize = Math.max(e.virtualSize, i) + v,
                a && n && ("slide" === t.effect || "coverflow" === t.effect) && s.css({
                    width: `${e.virtualSize + t.spaceBetween}px`
                }),
                t.setWrapperSize && (e.isHorizontal() ? s.css({
                    width: `${e.virtualSize + t.spaceBetween}px`
                }) : s.css({
                    height: `${e.virtualSize + t.spaceBetween}px`
                })),
                t.slidesPerColumn > 1 && (e.virtualSize = (w + t.spaceBetween) * x,
                    e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                    e.isHorizontal() ? s.css({
                        width: `${e.virtualSize + t.spaceBetween}px`
                    }) : s.css({
                        height: `${e.virtualSize + t.spaceBetween}px`
                    }),
                    t.centeredSlides)) {
                    L = [];
                    for (let s = 0; s < p.length; s += 1) {
                        let i = p[s];
                        t.roundLengths && (i = Math.floor(i)),
                        p[s] < e.virtualSize + p[0] && L.push(i)
                    }
                    p = L
                }
                if (!t.centeredSlides) {
                    L = [];
                    for (let s = 0; s < p.length; s += 1) {
                        let a = p[s];
                        t.roundLengths && (a = Math.floor(a)),
                        p[s] <= e.virtualSize - i && L.push(a)
                    }
                    p = L,
                    Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? a ? d.filter(m).css({
                    marginLeft: `${T}px`
                }) : d.filter(m).css({
                    marginRight: `${T}px`
                }) : d.filter(m).css({
                    marginBottom: `${T}px`
                })),
                t.centeredSlides && t.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((s=>{
                            e += s + (t.spaceBetween ? t.spaceBetween : 0)
                        }
                    )),
                        e -= t.spaceBetween;
                    const s = e - i;
                    p = p.map((e=>e < 0 ? -g : e > s ? s + v : e))
                }
                if (t.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach((s=>{
                            e += s + (t.spaceBetween ? t.spaceBetween : 0)
                        }
                    )),
                        e -= t.spaceBetween,
                    e < i) {
                        const t = (i - e) / 2;
                        p.forEach(((e,s)=>{
                                p[s] = e - t
                            }
                        )),
                            u.forEach(((e,s)=>{
                                    u[s] = e + t
                                }
                            ))
                    }
                }
                h.extend(e, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: u,
                    slidesSizesGrid: f
                }),
                c !== l && e.emit("slidesLengthChange"),
                p.length !== b && (e.params.watchOverflow && e.checkOverflow(),
                    e.emit("snapGridLengthChange")),
                u.length !== y && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            },
            updateAutoHeight: function(e) {
                const t = this
                    , s = [];
                let i, a = 0;
                if ("number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
                "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        t.visibleSlides.each(((e,t)=>{
                                s.push(t)
                            }
                        ));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length)
                                break;
                            s.push(t.slides.eq(e)[0])
                        }
                else
                    s.push(t.slides.eq(t.activeIndex)[0]);
                for (i = 0; i < s.length; i += 1)
                    if ("undefined" !== typeof s[i]) {
                        const e = s[i].offsetHeight;
                        a = e > a ? e : a
                    }
                a && t.$wrapperEl.css("height", `${a}px`)
            },
            updateSlidesOffset: function() {
                const e = this
                    , t = e.slides;
                for (let s = 0; s < t.length; s += 1)
                    t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
            },
            updateSlidesProgress: function(e=this && this.translate || 0) {
                const t = this
                    , s = t.params
                    , {slides: i, rtlTranslate: a} = t;
                if (0 === i.length)
                    return;
                "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                a && (n = e),
                    i.removeClass(s.slideVisibleClass),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                for (let r = 0; r < i.length; r += 1) {
                    const e = i[r]
                        , o = (n + (s.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + s.spaceBetween);
                    if (s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) {
                        const a = -(n - e.swiperSlideOffset)
                            , o = a + t.slidesSizesGrid[r];
                        (a >= 0 && a < t.size - 1 || o > 1 && o <= t.size || a <= 0 && o >= t.size) && (t.visibleSlides.push(e),
                            t.visibleSlidesIndexes.push(r),
                            i.eq(r).addClass(s.slideVisibleClass))
                    }
                    e.progress = a ? -o : o
                }
                t.visibleSlides = d(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if ("undefined" === typeof e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params
                    , i = t.maxTranslate() - t.minTranslate();
                let {progress: a, isBeginning: n, isEnd: r} = t;
                const o = n
                    , l = r;
                0 === i ? (a = 0,
                    n = !0,
                    r = !0) : (a = (e - t.minTranslate()) / i,
                    n = a <= 0,
                    r = a >= 1),
                    h.extend(t, {
                        progress: a,
                        isBeginning: n,
                        isEnd: r
                    }),
                (s.watchSlidesProgress || s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                n && !o && t.emit("reachBeginning toEdge"),
                r && !l && t.emit("reachEnd toEdge"),
                (o && !n || l && !r) && t.emit("fromEdge"),
                    t.emit("progress", a)
            },
            updateSlidesClasses: function() {
                const e = this
                    , {slides: t, params: s, $wrapperEl: i, activeIndex: a, realIndex: n} = e
                    , r = e.virtual && s.virtual.enabled;
                let o;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                    o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a),
                    o.addClass(s.slideActiveClass),
                s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
                let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === l.length && (l = t.eq(0),
                    l.addClass(s.slideNextClass));
                let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === d.length && (d = t.eq(-1),
                    d.addClass(s.slidePrevClass)),
                s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                    d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                const t = this
                    , s = t.rtlTranslate ? t.translate : -t.translate
                    , {slidesGrid: i, snapGrid: a, params: n, activeIndex: r, realIndex: o, snapIndex: l} = t;
                let d, c = e;
                if ("undefined" === typeof c) {
                    for (let e = 0; e < i.length; e += 1)
                        "undefined" !== typeof i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
                    n.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                }
                if (a.indexOf(s) >= 0)
                    d = a.indexOf(s);
                else {
                    const e = Math.min(n.slidesPerGroupSkip, c);
                    d = e + Math.floor((c - e) / n.slidesPerGroup)
                }
                if (d >= a.length && (d = a.length - 1),
                c === r)
                    return void (d !== l && (t.snapIndex = d,
                        t.emit("snapIndexChange")));
                const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                h.extend(t, {
                    snapIndex: d,
                    realIndex: p,
                    previousIndex: r,
                    activeIndex: c
                }),
                    t.emit("activeIndexChange"),
                    t.emit("snapIndexChange"),
                o !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this
                    , s = t.params
                    , i = d(e.target).closest(`.${s.slideClass}`)[0];
                let a = !1;
                if (i)
                    for (let n = 0; n < t.slides.length; n += 1)
                        t.slides[n] === i && (a = !0);
                if (!i || !a)
                    return t.clickedSlide = void 0,
                        void (t.clickedIndex = void 0);
                t.clickedSlide = i,
                    t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = d(i).index(),
                s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };
        var g = {
            getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: s, translate: i, $wrapperEl: a} = this;
                if (t.virtualTranslate)
                    return s ? -i : i;
                if (t.cssMode)
                    return i;
                let n = h.getTranslate(a[0], e);
                return s && (n = -n),
                n || 0
            },
            setTranslate: function(e, t) {
                const s = this
                    , {rtlTranslate: i, params: a, $wrapperEl: n, wrapperEl: r, progress: o} = s;
                let l, d = 0, c = 0;
                s.isHorizontal() ? d = i ? -e : e : c = e,
                a.roundLengths && (d = Math.floor(d),
                    c = Math.floor(c)),
                    a.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : a.virtualTranslate || n.transform(`translate3d(${d}px, ${c}px, 0px)`),
                    s.previousTranslate = s.translate,
                    s.translate = s.isHorizontal() ? d : c;
                const p = s.maxTranslate() - s.minTranslate();
                l = 0 === p ? 0 : (e - s.minTranslate()) / p,
                l !== o && s.updateProgress(e),
                    s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e=0, t=this.params.speed, s=!0, i=!0, a) {
                const n = this
                    , {params: r, wrapperEl: o} = n;
                if (n.animating && r.preventInteractionOnTransition)
                    return !1;
                const l = n.minTranslate()
                    , d = n.maxTranslate();
                let c;
                if (c = i && e > l ? l : i && e < d ? d : e,
                    n.updateProgress(c),
                    r.cssMode) {
                    const e = n.isHorizontal();
                    return 0 === t ? o[e ? "scrollLeft" : "scrollTop"] = -c : o.scrollTo ? o.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    }) : o[e ? "scrollLeft" : "scrollTop"] = -c,
                        !0
                }
                return 0 === t ? (n.setTransition(0),
                    n.setTranslate(c),
                s && (n.emit("beforeTransitionStart", t, a),
                    n.emit("transitionEnd"))) : (n.setTransition(t),
                    n.setTranslate(c),
                s && (n.emit("beforeTransitionStart", t, a),
                    n.emit("transitionStart")),
                n.animating || (n.animating = !0,
                n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                            n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                            n.onTranslateToWrapperTransitionEnd = null,
                            delete n.onTranslateToWrapperTransitionEnd,
                        s && n.emit("transitionEnd"))
                    }
                ),
                    n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                    n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
                    !0
            }
        };
        var v = {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e),
                    s.emit("setTransition", e, t)
            },
            transitionStart: function(e=!0, t) {
                const s = this
                    , {activeIndex: i, params: a, previousIndex: n} = s;
                if (a.cssMode)
                    return;
                a.autoHeight && s.updateAutoHeight();
                let r = t;
                if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"),
                    s.emit("transitionStart"),
                e && i !== n) {
                    if ("reset" === r)
                        return void s.emit("slideResetTransitionStart");
                    s.emit("slideChangeTransitionStart"),
                        "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function(e=!0, t) {
                const s = this
                    , {activeIndex: i, previousIndex: a, params: n} = s;
                if (s.animating = !1,
                    n.cssMode)
                    return;
                s.setTransition(0);
                let r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                    s.emit("transitionEnd"),
                e && i !== a) {
                    if ("reset" === r)
                        return void s.emit("slideResetTransitionEnd");
                    s.emit("slideChangeTransitionEnd"),
                        "next" === r ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd")
                }
            }
        };
        var b = {
            slideTo: function(e=0, t=this.params.speed, s=!0, i) {
                const a = this;
                let n = e;
                n < 0 && (n = 0);
                const {params: r, snapGrid: o, slidesGrid: l, previousIndex: d, activeIndex: c, rtlTranslate: p, wrapperEl: h} = a;
                if (a.animating && r.preventInteractionOnTransition)
                    return !1;
                const u = Math.min(a.params.slidesPerGroupSkip, n);
                let f = u + Math.floor((n - u) / a.params.slidesPerGroup);
                f >= o.length && (f = o.length - 1),
                (c || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
                const m = -o[f];
                if (a.updateProgress(m),
                    r.normalizeSlideIndex)
                    for (let v = 0; v < l.length; v += 1)
                        -Math.floor(100 * m) >= Math.floor(100 * l[v]) && (n = v);
                if (a.initialized && n !== c) {
                    if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
                        return !1;
                    if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (c || 0) !== n)
                        return !1
                }
                let g;
                if (g = n > c ? "next" : n < c ? "prev" : "reset",
                p && -m === a.translate || !p && m === a.translate)
                    return a.updateActiveIndex(n),
                    r.autoHeight && a.updateAutoHeight(),
                        a.updateSlidesClasses(),
                    "slide" !== r.effect && a.setTranslate(m),
                    "reset" !== g && (a.transitionStart(s, g),
                        a.transitionEnd(s, g)),
                        !1;
                if (r.cssMode) {
                    const e = a.isHorizontal();
                    let s = -m;
                    return p && (s = h.scrollWidth - h.offsetWidth - s),
                        0 === t ? h[e ? "scrollLeft" : "scrollTop"] = s : h.scrollTo ? h.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        }) : h[e ? "scrollLeft" : "scrollTop"] = s,
                        !0
                }
                return 0 === t ? (a.setTransition(0),
                    a.setTranslate(m),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, i),
                    a.transitionStart(s, g),
                    a.transitionEnd(s, g)) : (a.setTransition(t),
                    a.setTranslate(m),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, i),
                    a.transitionStart(s, g),
                a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                            a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                            a.onSlideToWrapperTransitionEnd = null,
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(s, g))
                    }
                ),
                    a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                    !0
            },
            slideToLoop: function(e=0, t=this.params.speed, s=!0, i) {
                const a = this;
                let n = e;
                return a.params.loop && (n += a.loopedSlides),
                    a.slideTo(n, t, s, i)
            },
            slideNext: function(e=this.params.speed, t=!0, s) {
                const i = this
                    , {params: a, animating: n} = i
                    , r = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
                if (a.loop) {
                    if (n)
                        return !1;
                    i.loopFix(),
                        i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return i.slideTo(i.activeIndex + r, e, t, s)
            },
            slidePrev: function(e=this.params.speed, t=!0, s) {
                const i = this
                    , {params: a, animating: n, snapGrid: r, slidesGrid: o, rtlTranslate: l} = i;
                if (a.loop) {
                    if (n)
                        return !1;
                    i.loopFix(),
                        i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const c = d(l ? i.translate : -i.translate)
                    , p = r.map((e=>d(e)));
                o.map((e=>d(e))),
                    r[p.indexOf(c)];
                let h, u = r[p.indexOf(c) - 1];
                return "undefined" === typeof u && a.cssMode && r.forEach((e=>{
                        !u && c >= e && (u = e)
                    }
                )),
                "undefined" !== typeof u && (h = o.indexOf(u),
                h < 0 && (h = i.activeIndex - 1)),
                    i.slideTo(h, e, t, s)
            },
            slideReset: function(e=this.params.speed, t=!0, s) {
                return this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function(e=this.params.speed, t=!0, s, i=.5) {
                const a = this;
                let n = a.activeIndex;
                const r = Math.min(a.params.slidesPerGroupSkip, n)
                    , o = r + Math.floor((n - r) / a.params.slidesPerGroup)
                    , l = a.rtlTranslate ? a.translate : -a.translate;
                if (l >= a.snapGrid[o]) {
                    const e = a.snapGrid[o];
                    l - e > (a.snapGrid[o + 1] - e) * i && (n += a.params.slidesPerGroup)
                } else {
                    const e = a.snapGrid[o - 1];
                    l - e <= (a.snapGrid[o] - e) * i && (n -= a.params.slidesPerGroup)
                }
                return n = Math.max(n, 0),
                    n = Math.min(n, a.slidesGrid.length - 1),
                    a.slideTo(n, e, t, s)
            },
            slideToClickedSlide: function() {
                const e = this
                    , {params: t, $wrapperEl: s} = e
                    , i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let a, n = e.clickedIndex;
                if (t.loop) {
                    if (e.animating)
                        return;
                    a = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                        t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(),
                            n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                            h.nextTick((()=>{
                                    e.slideTo(n)
                                }
                            ))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(),
                            n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                            h.nextTick((()=>{
                                    e.slideTo(n)
                                }
                            ))) : e.slideTo(n)
                } else
                    e.slideTo(n)
            }
        };
        var y = {
            loopCreate: function() {
                const e = this
                    , {params: t, $wrapperEl: s} = e;
                s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                let i = s.children(`.${t.slideClass}`);
                if (t.loopFillGroupWithBlank) {
                    const e = t.slidesPerGroup - i.length % t.slidesPerGroup;
                    if (e !== t.slidesPerGroup) {
                        for (let i = 0; i < e; i += 1) {
                            const e = d(n.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                            s.append(e)
                        }
                        i = s.children(`.${t.slideClass}`)
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = i.length),
                    e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
                    e.loopedSlides += t.loopAdditionalSlides,
                e.loopedSlides > i.length && (e.loopedSlides = i.length);
                const a = []
                    , r = [];
                i.each(((t,s)=>{
                        const n = d(s);
                        t < e.loopedSlides && r.push(s),
                        t < i.length && t >= i.length - e.loopedSlides && a.push(s),
                            n.attr("data-swiper-slide-index", t)
                    }
                ));
                for (let n = 0; n < r.length; n += 1)
                    s.append(d(r[n].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (let n = a.length - 1; n >= 0; n -= 1)
                    s.prepend(d(a[n].cloneNode(!0)).addClass(t.slideDuplicateClass))
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const {activeIndex: t, slides: s, loopedSlides: i, allowSlidePrev: a, allowSlideNext: n, snapGrid: r, rtlTranslate: o} = e;
                let l;
                e.allowSlidePrev = !0,
                    e.allowSlideNext = !0;
                const d = -r[t] - e.getTranslate();
                if (t < i) {
                    l = s.length - 3 * i + t,
                        l += i;
                    e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                } else if (t >= s.length - i) {
                    l = -s.length + t + i,
                        l += i;
                    e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                }
                e.allowSlidePrev = a,
                    e.allowSlideNext = n,
                    e.emit("loopFix")
            },
            loopDestroy: function() {
                const {$wrapperEl: e, params: t, slides: s} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                    s.removeAttr("data-swiper-slide-index")
            }
        };
        var x = {
            setGrabCursor: function(e) {
                const t = this;
                if (u.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = t.el;
                s.style.cursor = "move",
                    s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    s.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    s.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                const e = this;
                u.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
            }
        };
        var w = {
            appendSlide: function(e) {
                const t = this
                    , {$wrapperEl: s, params: i} = t;
                if (i.loop && t.loopDestroy(),
                "object" === typeof e && "length"in e)
                    for (let a = 0; a < e.length; a += 1)
                        e[a] && s.append(e[a]);
                else
                    s.append(e);
                i.loop && t.loopCreate(),
                i.observer && u.observer || t.update()
            },
            prependSlide: function(e) {
                const t = this
                    , {params: s, $wrapperEl: i, activeIndex: a} = t;
                s.loop && t.loopDestroy();
                let n = a + 1;
                if ("object" === typeof e && "length"in e) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && i.prepend(e[t]);
                    n = a + e.length
                } else
                    i.prepend(e);
                s.loop && t.loopCreate(),
                s.observer && u.observer || t.update(),
                    t.slideTo(n, 0, !1)
            },
            addSlide: function(e, t) {
                const s = this
                    , {$wrapperEl: i, params: a, activeIndex: n} = s;
                let r = n;
                a.loop && (r -= s.loopedSlides,
                    s.loopDestroy(),
                    s.slides = i.children(`.${a.slideClass}`));
                const o = s.slides.length;
                if (e <= 0)
                    return void s.prependSlide(t);
                if (e >= o)
                    return void s.appendSlide(t);
                let l = r > e ? r + 1 : r;
                const d = [];
                for (let c = o - 1; c >= e; c -= 1) {
                    const e = s.slides.eq(c);
                    e.remove(),
                        d.unshift(e)
                }
                if ("object" === typeof t && "length"in t) {
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && i.append(t[e]);
                    l = r > e ? r + t.length : r
                } else
                    i.append(t);
                for (let c = 0; c < d.length; c += 1)
                    i.append(d[c]);
                a.loop && s.loopCreate(),
                a.observer && u.observer || s.update(),
                    a.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
            },
            removeSlide: function(e) {
                const t = this
                    , {params: s, $wrapperEl: i, activeIndex: a} = t;
                let n = a;
                s.loop && (n -= t.loopedSlides,
                    t.loopDestroy(),
                    t.slides = i.children(`.${s.slideClass}`));
                let r, o = n;
                if ("object" === typeof e && "length"in e) {
                    for (let s = 0; s < e.length; s += 1)
                        r = e[s],
                        t.slides[r] && t.slides.eq(r).remove(),
                        r < o && (o -= 1);
                    o = Math.max(o, 0)
                } else
                    r = e,
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < o && (o -= 1),
                        o = Math.max(o, 0);
                s.loop && t.loopCreate(),
                s.observer && u.observer || t.update(),
                    s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
            },
            removeAllSlides: function() {
                const e = this
                    , t = [];
                for (let s = 0; s < e.slides.length; s += 1)
                    t.push(s);
                e.removeSlide(t)
            }
        };
        const T = function() {
            const e = o.navigator.platform
                , t = o.navigator.userAgent
                , s = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!o.cordova && !o.phonegap),
                phonegap: !(!o.cordova && !o.phonegap),
                electron: !1
            }
                , i = o.screen.width
                , a = o.screen.height
                , n = t.match(/(Android);?[\s\/]+([\d.]+)?/);
            let r = t.match(/(iPad).*OS\s([\d_]+)/);
            const l = t.match(/(iPod)(.*OS\s([\d_]+))?/)
                , d = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                , c = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
                , p = t.indexOf("Edge/") >= 0
                , h = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0
                , f = "Win32" === e
                , m = t.toLowerCase().indexOf("electron") >= 0;
            let g = "MacIntel" === e;
            return !r && g && u.touch && (1024 === i && 1366 === a || 834 === i && 1194 === a || 834 === i && 1112 === a || 768 === i && 1024 === a) && (r = t.match(/(Version)\/([\d.]+)/),
                g = !1),
                s.ie = c,
                s.edge = p,
                s.firefox = h,
            n && !f && (s.os = "android",
                s.osVersion = n[2],
                s.android = !0,
                s.androidChrome = t.toLowerCase().indexOf("chrome") >= 0),
            (r || d || l) && (s.os = "ios",
                s.ios = !0),
            d && !l && (s.osVersion = d[2].replace(/_/g, "."),
                s.iphone = !0),
            r && (s.osVersion = r[2].replace(/_/g, "."),
                s.ipad = !0),
            l && (s.osVersion = l[3] ? l[3].replace(/_/g, ".") : null,
                s.ipod = !0),
            s.ios && s.osVersion && t.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
                s.webView = !(!(d || r || l) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !o.navigator.standalone) || o.matchMedia && o.matchMedia("(display-mode: standalone)").matches,
                s.webview = s.webView,
                s.standalone = s.webView,
                s.desktop = !(s.ios || s.android) || m,
            s.desktop && (s.electron = m,
                s.macos = g,
                s.windows = f,
            s.macos && (s.os = "macos"),
            s.windows && (s.os = "windows")),
                s.pixelRatio = o.devicePixelRatio || 1,
                s
        }();
        function E(e) {
            const t = this
                , s = t.touchEventsData
                , {params: i, touches: a} = t;
            if (t.animating && i.preventInteractionOnTransition)
                return;
            let r = e;
            r.originalEvent && (r = r.originalEvent);
            const l = d(r.target);
            if ("wrapper" === i.touchEventsTarget && !l.closest(t.wrapperEl).length)
                return;
            if (s.isTouchEvent = "touchstart" === r.type,
            !s.isTouchEvent && "which"in r && 3 === r.which)
                return;
            if (!s.isTouchEvent && "button"in r && r.button > 0)
                return;
            if (s.isTouched && s.isMoved)
                return;
            if (i.noSwiping && l.closest(i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`)[0])
                return void (t.allowClick = !0);
            if (i.swipeHandler && !l.closest(i.swipeHandler)[0])
                return;
            a.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX,
                a.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
            const c = a.currentX
                , p = a.currentY
                , u = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
                , f = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
            if (!u || !(c <= f || c >= o.screen.width - f)) {
                if (h.extend(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }),
                    a.startX = c,
                    a.startY = p,
                    s.touchStartTime = h.now(),
                    t.allowClick = !0,
                    t.updateSize(),
                    t.swipeDirection = void 0,
                i.threshold > 0 && (s.allowThresholdMove = !1),
                "touchstart" !== r.type) {
                    let e = !0;
                    l.is(s.formElements) && (e = !1),
                    n.activeElement && d(n.activeElement).is(s.formElements) && n.activeElement !== l[0] && n.activeElement.blur();
                    const a = e && t.allowTouchMove && i.touchStartPreventDefault;
                    (i.touchStartForcePreventDefault || a) && r.preventDefault()
                }
                t.emit("touchStart", r)
            }
        }
        function C(e) {
            const t = this
                , s = t.touchEventsData
                , {params: i, touches: a, rtlTranslate: r} = t;
            let o = e;
            if (o.originalEvent && (o = o.originalEvent),
                !s.isTouched)
                return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o));
            if (s.isTouchEvent && "touchmove" !== o.type)
                return;
            const l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0])
                , c = "touchmove" === o.type ? l.pageX : o.pageX
                , p = "touchmove" === o.type ? l.pageY : o.pageY;
            if (o.preventedByNestedSwiper)
                return a.startX = c,
                    void (a.startY = p);
            if (!t.allowTouchMove)
                return t.allowClick = !1,
                    void (s.isTouched && (h.extend(a, {
                        startX: c,
                        startY: p,
                        currentX: c,
                        currentY: p
                    }),
                        s.touchStartTime = h.now()));
            if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (t.isVertical()) {
                    if (p < a.startY && t.translate <= t.maxTranslate() || p > a.startY && t.translate >= t.minTranslate())
                        return s.isTouched = !1,
                            void (s.isMoved = !1)
                } else if (c < a.startX && t.translate <= t.maxTranslate() || c > a.startX && t.translate >= t.minTranslate())
                    return;
            if (s.isTouchEvent && n.activeElement && o.target === n.activeElement && d(o.target).is(s.formElements))
                return s.isMoved = !0,
                    void (t.allowClick = !1);
            if (s.allowTouchCallbacks && t.emit("touchMove", o),
            o.targetTouches && o.targetTouches.length > 1)
                return;
            a.currentX = c,
                a.currentY = p;
            const u = a.currentX - a.startX
                , f = a.currentY - a.startY;
            if (t.params.threshold && Math.sqrt(u ** 2 + f ** 2) < t.params.threshold)
                return;
            if ("undefined" === typeof s.isScrolling) {
                let e;
                t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : u * u + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(u)) / Math.PI,
                    s.isScrolling = t.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
            }
            if (s.isScrolling && t.emit("touchMoveOpposite", o),
            "undefined" === typeof s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)),
                s.isScrolling)
                return void (s.isTouched = !1);
            if (!s.startMoving)
                return;
            t.allowClick = !1,
            !i.cssMode && o.cancelable && o.preventDefault(),
            i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
            s.isMoved || (i.loop && t.loopFix(),
                s.startTranslate = t.getTranslate(),
                t.setTransition(0),
            t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                s.allowMomentumBounce = !1,
            !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                t.emit("sliderFirstMove", o)),
                t.emit("sliderMove", o),
                s.isMoved = !0;
            let m = t.isHorizontal() ? u : f;
            a.diff = m,
                m *= i.touchRatio,
            r && (m = -m),
                t.swipeDirection = m > 0 ? "prev" : "next",
                s.currentTranslate = m + s.startTranslate;
            let g = !0
                , v = i.resistanceRatio;
            if (i.touchReleaseOnEdges && (v = 0),
                m > 0 && s.currentTranslate > t.minTranslate() ? (g = !1,
                i.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** v)) : m < 0 && s.currentTranslate < t.maxTranslate() && (g = !1,
                i.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** v)),
            g && (o.preventedByNestedSwiper = !0),
            !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
            !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
            i.threshold > 0) {
                if (!(Math.abs(m) > i.threshold || s.allowThresholdMove))
                    return void (s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove)
                    return s.allowThresholdMove = !0,
                        a.startX = a.currentX,
                        a.startY = a.currentY,
                        s.currentTranslate = s.startTranslate,
                        void (a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(),
                t.updateSlidesClasses()),
            i.freeMode && (0 === s.velocities.length && s.velocities.push({
                position: a[t.isHorizontal() ? "startX" : "startY"],
                time: s.touchStartTime
            }),
                s.velocities.push({
                    position: a[t.isHorizontal() ? "currentX" : "currentY"],
                    time: h.now()
                })),
                t.updateProgress(s.currentTranslate),
                t.setTranslate(s.currentTranslate))
        }
        function S(e) {
            const t = this
                , s = t.touchEventsData
                , {params: i, touches: a, rtlTranslate: n, $wrapperEl: r, slidesGrid: o, snapGrid: l} = t;
            let d = e;
            if (d.originalEvent && (d = d.originalEvent),
            s.allowTouchCallbacks && t.emit("touchEnd", d),
                s.allowTouchCallbacks = !1,
                !s.isTouched)
                return s.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    s.isMoved = !1,
                    void (s.startMoving = !1);
            i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const c = h.now()
                , p = c - s.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d),
                t.emit("tap click", d),
            p < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
                s.lastClickTime = h.now(),
                h.nextTick((()=>{
                        t.destroyed || (t.allowClick = !0)
                    }
                )),
            !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate)
                return s.isTouched = !1,
                    s.isMoved = !1,
                    void (s.startMoving = !1);
            let u;
            if (s.isTouched = !1,
                s.isMoved = !1,
                s.startMoving = !1,
                u = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate,
                i.cssMode)
                return;
            if (i.freeMode) {
                if (u < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (u > -t.maxTranslate())
                    return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (s.velocities.length > 1) {
                        const e = s.velocities.pop()
                            , a = s.velocities.pop()
                            , n = e.position - a.position
                            , r = e.time - a.time;
                        t.velocity = n / r,
                            t.velocity /= 2,
                        Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                        (r > 150 || h.now() - e.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio,
                        s.velocities.length = 0;
                    let e = 1e3 * i.freeModeMomentumRatio;
                    const a = t.velocity * e;
                    let o = t.translate + a;
                    n && (o = -o);
                    let d, c = !1;
                    const p = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    let u;
                    if (o < t.maxTranslate())
                        i.freeModeMomentumBounce ? (o + t.maxTranslate() < -p && (o = t.maxTranslate() - p),
                            d = t.maxTranslate(),
                            c = !0,
                            s.allowMomentumBounce = !0) : o = t.maxTranslate(),
                        i.loop && i.centeredSlides && (u = !0);
                    else if (o > t.minTranslate())
                        i.freeModeMomentumBounce ? (o - t.minTranslate() > p && (o = t.minTranslate() + p),
                            d = t.minTranslate(),
                            c = !0,
                            s.allowMomentumBounce = !0) : o = t.minTranslate(),
                        i.loop && i.centeredSlides && (u = !0);
                    else if (i.freeModeSticky) {
                        let e;
                        for (let t = 0; t < l.length; t += 1)
                            if (l[t] > -o) {
                                e = t;
                                break
                            }
                        o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1],
                            o = -o
                    }
                    if (u && t.once("transitionEnd", (()=>{
                            t.loopFix()
                        }
                    )),
                    0 !== t.velocity) {
                        if (e = n ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity),
                            i.freeModeSticky) {
                            const s = Math.abs((n ? -o : o) - t.translate)
                                , a = t.slidesSizesGrid[t.activeIndex];
                            e = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed
                        }
                    } else if (i.freeModeSticky)
                        return void t.slideToClosest();
                    i.freeModeMomentumBounce && c ? (t.updateProgress(d),
                        t.setTransition(e),
                        t.setTranslate(o),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating = !0,
                        r.transitionEnd((()=>{
                                t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"),
                                    t.setTransition(i.speed),
                                    setTimeout((()=>{
                                            t.setTranslate(d),
                                                r.transitionEnd((()=>{
                                                        t && !t.destroyed && t.transitionEnd()
                                                    }
                                                ))
                                        }
                                    ), 0))
                            }
                        ))) : t.velocity ? (t.updateProgress(o),
                        t.setTransition(e),
                        t.setTranslate(o),
                        t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                        r.transitionEnd((()=>{
                                t && !t.destroyed && t.transitionEnd()
                            }
                        )))) : t.updateProgress(o),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                } else if (i.freeModeSticky)
                    return void t.slideToClosest();
                return void ((!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()))
            }
            let f = 0
                , m = t.slidesSizesGrid[0];
            for (let h = 0; h < o.length; h += h < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                const e = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                "undefined" !== typeof o[h + e] ? u >= o[h] && u < o[h + e] && (f = h,
                    m = o[h + e] - o[h]) : u >= o[h] && (f = h,
                    m = o[o.length - 1] - o[o.length - 2])
            }
            const g = (u - o[f]) / m
                , v = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (p > i.longSwipesMs) {
                if (!i.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f)),
                "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f))
            } else {
                if (!i.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(f + v) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(f + v),
                "prev" === t.swipeDirection && t.slideTo(f))
            }
        }
        function $() {
            const e = this
                , {params: t, el: s} = e;
            if (s && 0 === s.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: i, allowSlidePrev: a, snapGrid: n} = e;
            e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                e.allowSlidePrev = a,
                e.allowSlideNext = i,
            e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
        }
        function M(e) {
            const t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
        }
        function P() {
            const e = this
                , {wrapperEl: t, rtlTranslate: s} = e;
            let i;
            e.previousTranslate = e.translate,
                e.isHorizontal() ? e.translate = s ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop,
            -0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            const a = e.maxTranslate() - e.minTranslate();
            i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a,
            i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1)
        }
        let L = !1;
        function k() {}
        var z = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        };
        const I = {
            update: m,
            translate: g,
            transition: v,
            slide: b,
            loop: y,
            grabCursor: x,
            manipulation: w,
            events: {
                attachEvents: function() {
                    const e = this
                        , {params: t, touchEvents: s, el: i, wrapperEl: a} = e;
                    e.onTouchStart = E.bind(e),
                        e.onTouchMove = C.bind(e),
                        e.onTouchEnd = S.bind(e),
                    t.cssMode && (e.onScroll = P.bind(e)),
                        e.onClick = M.bind(e);
                    const r = !!t.nested;
                    if (!u.touch && u.pointerEvents)
                        i.addEventListener(s.start, e.onTouchStart, !1),
                            n.addEventListener(s.move, e.onTouchMove, r),
                            n.addEventListener(s.end, e.onTouchEnd, !1);
                    else {
                        if (u.touch) {
                            const a = !("touchstart" !== s.start || !u.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i.addEventListener(s.start, e.onTouchStart, a),
                                i.addEventListener(s.move, e.onTouchMove, u.passiveListener ? {
                                    passive: !1,
                                    capture: r
                                } : r),
                                i.addEventListener(s.end, e.onTouchEnd, a),
                            s.cancel && i.addEventListener(s.cancel, e.onTouchEnd, a),
                            L || (n.addEventListener("touchstart", k),
                                L = !0)
                        }
                        (t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !u.touch && T.ios) && (i.addEventListener("mousedown", e.onTouchStart, !1),
                            n.addEventListener("mousemove", e.onTouchMove, r),
                            n.addEventListener("mouseup", e.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && i.addEventListener("click", e.onClick, !0),
                    t.cssMode && a.addEventListener("scroll", e.onScroll),
                        t.updateOnWindowResize ? e.on(T.ios || T.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : e.on("observerUpdate", $, !0)
                },
                detachEvents: function() {
                    const e = this
                        , {params: t, touchEvents: s, el: i, wrapperEl: a} = e
                        , r = !!t.nested;
                    if (!u.touch && u.pointerEvents)
                        i.removeEventListener(s.start, e.onTouchStart, !1),
                            n.removeEventListener(s.move, e.onTouchMove, r),
                            n.removeEventListener(s.end, e.onTouchEnd, !1);
                    else {
                        if (u.touch) {
                            const a = !("onTouchStart" !== s.start || !u.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i.removeEventListener(s.start, e.onTouchStart, a),
                                i.removeEventListener(s.move, e.onTouchMove, r),
                                i.removeEventListener(s.end, e.onTouchEnd, a),
                            s.cancel && i.removeEventListener(s.cancel, e.onTouchEnd, a)
                        }
                        (t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !u.touch && T.ios) && (i.removeEventListener("mousedown", e.onTouchStart, !1),
                            n.removeEventListener("mousemove", e.onTouchMove, r),
                            n.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }
                    (t.preventClicks || t.preventClicksPropagation) && i.removeEventListener("click", e.onClick, !0),
                    t.cssMode && a.removeEventListener("scroll", e.onScroll),
                        e.off(T.ios || T.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this
                        , {activeIndex: t, initialized: s, loopedSlides: i=0, params: a, $el: n} = e
                        , r = a.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length)
                        return;
                    const o = e.getBreakpoint(r);
                    if (o && e.currentBreakpoint !== o) {
                        const l = o in r ? r[o] : void 0;
                        l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((e=>{
                                const t = l[e];
                                "undefined" !== typeof t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }
                        ));
                        const d = l || e.originalParams
                            , c = a.slidesPerColumn > 1
                            , p = d.slidesPerColumn > 1;
                        c && !p ? n.removeClass(`${a.containerModifierClass}multirow ${a.containerModifierClass}multirow-column`) : !c && p && (n.addClass(`${a.containerModifierClass}multirow`),
                        "column" === d.slidesPerColumnFill && n.addClass(`${a.containerModifierClass}multirow-column`));
                        const u = d.direction && d.direction !== a.direction
                            , f = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                        u && s && e.changeDirection(),
                            h.extend(e.params, d),
                            h.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }),
                            e.currentBreakpoint = o,
                        f && s && (e.loopDestroy(),
                            e.loopCreate(),
                            e.updateSlides(),
                            e.slideTo(t - i + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", d)
                    }
                },
                getBreakpoint: function(e) {
                    if (!e)
                        return;
                    let t = !1;
                    const s = Object.keys(e).map((e=>{
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: o.innerHeight * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }
                    ));
                    s.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let i = 0; i < s.length; i += 1) {
                        const {point: e, value: a} = s[i];
                        a <= o.innerWidth && (t = e)
                    }
                    return t || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this
                        , t = e.params
                        , s = e.isLocked
                        , i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length,
                        e.allowSlideNext = !e.isLocked,
                        e.allowSlidePrev = !e.isLocked,
                    s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                    s && s !== e.isLocked && (e.isEnd = !1,
                    e.navigation && e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    const {classNames: e, params: t, rtl: s, $el: i} = this
                        , a = [];
                    a.push("initialized"),
                        a.push(t.direction),
                    t.freeMode && a.push("free-mode"),
                    t.autoHeight && a.push("autoheight"),
                    s && a.push("rtl"),
                    t.slidesPerColumn > 1 && (a.push("multirow"),
                    "column" === t.slidesPerColumnFill && a.push("multirow-column")),
                    T.android && a.push("android"),
                    T.ios && a.push("ios"),
                    t.cssMode && a.push("css-mode"),
                        a.forEach((s=>{
                                e.push(t.containerModifierClass + s)
                            }
                        )),
                        i.addClass(e.join(" "))
                },
                removeClasses: function() {
                    const {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, s, i, a, n) {
                    let r;
                    function l() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && a ? l() : t ? (r = new o.Image,
                        r.onload = l,
                        r.onerror = l,
                    i && (r.sizes = i),
                    s && (r.srcset = s),
                    t && (r.src = t)) : l()
                },
                preloadImages: function() {
                    const e = this;
                    function t() {
                        "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                            e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const i = e.imagesToLoad[s];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
            , A = {};
        class D extends f {
            constructor(...e) {
                let t, s;
                1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : [t,s] = e,
                s || (s = {}),
                    s = h.extend({}, s),
                t && !s.el && (s.el = t),
                    super(s),
                    Object.keys(I).forEach((e=>{
                            Object.keys(I[e]).forEach((t=>{
                                    D.prototype[t] || (D.prototype[t] = I[e][t])
                                }
                            ))
                        }
                    ));
                const i = this;
                "undefined" === typeof i.modules && (i.modules = {}),
                    Object.keys(i.modules).forEach((e=>{
                            const t = i.modules[e];
                            if (t.params) {
                                const e = Object.keys(t.params)[0]
                                    , i = t.params[e];
                                if ("object" !== typeof i || null === i)
                                    return;
                                if (!(e in s) || !("enabled"in i))
                                    return;
                                !0 === s[e] && (s[e] = {
                                    enabled: !0
                                }),
                                "object" !== typeof s[e] || "enabled"in s[e] || (s[e].enabled = !0),
                                s[e] || (s[e] = {
                                    enabled: !1
                                })
                            }
                        }
                    ));
                const a = h.extend({}, z);
                i.useModulesParams(a),
                    i.params = h.extend({}, a, A, s),
                    i.originalParams = h.extend({}, i.params),
                    i.passedParams = h.extend({}, s),
                    i.$ = d;
                const n = d(i.params.el);
                if (t = n[0],
                    !t)
                    return;
                if (n.length > 1) {
                    const e = [];
                    return n.each(((t,i)=>{
                            const a = h.extend({}, s, {
                                el: i
                            });
                            e.push(new D(a))
                        }
                    )),
                        e
                }
                let r;
                return t.swiper = i,
                    n.data("swiper", i),
                    t && t.shadowRoot && t.shadowRoot.querySelector ? (r = d(t.shadowRoot.querySelector(`.${i.params.wrapperClass}`)),
                        r.children = e=>n.children(e)) : r = n.children(`.${i.params.wrapperClass}`),
                    h.extend(i, {
                        $el: n,
                        el: t,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        classNames: [],
                        slides: d(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: ()=>"horizontal" === i.params.direction,
                        isVertical: ()=>"vertical" === i.params.direction,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                        rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                            let t = ["mousedown", "mousemove", "mouseup"];
                            return u.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]),
                                i.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2],
                                    cancel: e[3]
                                },
                                i.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                },
                                u.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: h.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }),
                    i.useModules(),
                i.params.init && i.init(),
                    i
            }
            slidesPerViewDynamic() {
                const {params: e, slides: t, slidesGrid: s, size: i, activeIndex: a} = this;
                let n = 1;
                if (e.centeredSlides) {
                    let e, s = t[a].swiperSlideSize;
                    for (let r = a + 1; r < t.length; r += 1)
                        t[r] && !e && (s += t[r].swiperSlideSize,
                            n += 1,
                        s > i && (e = !0));
                    for (let r = a - 1; r >= 0; r -= 1)
                        t[r] && !e && (s += t[r].swiperSlideSize,
                            n += 1,
                        s > i && (e = !0))
                } else
                    for (let r = a + 1; r < t.length; r += 1)
                        s[r] - s[a] < i && (n += 1);
                return n
            }
            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const {snapGrid: t, params: s} = e;
                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                        , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }
                let a;
                s.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode ? (i(),
                    e.params.autoHeight && e.updateAutoHeight()) : (a = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                    a || i()),
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update")
            }
            changeDirection(e, t=!0) {
                const s = this
                    , i = s.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`),
                    s.params.direction = e,
                    s.slides.each(((t,s)=>{
                            "vertical" === e ? s.style.width = "" : s.style.height = ""
                        }
                    )),
                    s.emit("changeDirection"),
                t && s.update()),
                    s
            }
            init() {
                const e = this;
                e.initialized || (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    e.initialized = !0,
                    e.emit("init"))
            }
            destroy(e=!0, t=!0) {
                const s = this
                    , {params: i, $el: a, $wrapperEl: n, slides: r} = s;
                return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"),
                    s.initialized = !1,
                    s.detachEvents(),
                i.loop && s.loopDestroy(),
                t && (s.removeClasses(),
                    a.removeAttr("style"),
                    n.removeAttr("style"),
                r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                    s.emit("destroy"),
                    Object.keys(s.eventsListeners).forEach((e=>{
                            s.off(e)
                        }
                    )),
                !1 !== e && (s.$el[0].swiper = null,
                    s.$el.data("swiper", null),
                    h.deleteProps(s)),
                    s.destroyed = !0),
                    null
            }
            static extendDefaults(e) {
                h.extend(A, e)
            }
            static get extendedDefaults() {
                return A
            }
            static get defaults() {
                return z
            }
            static get Class() {
                return f
            }
            static get $() {
                return d
            }
        }
        var O = {
            name: "device",
            proto: {
                device: T
            },
            static: {
                device: T
            }
        }
            , H = {
            name: "support",
            proto: {
                support: u
            },
            static: {
                support: u
            }
        };
        const N = {
            isEdge: !!o.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                const e = o.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.navigator.userAgent)
        };
        var F = {
            name: "browser",
            proto: {
                browser: N
            },
            static: {
                browser: N
            }
        }
            , R = {
            name: "resize",
            create() {
                const e = this;
                h.extend(e, {
                    resize: {
                        resizeHandler() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                                e.emit("resize"))
                        },
                        orientationChangeHandler() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init() {
                    o.addEventListener("resize", this.resize.resizeHandler),
                        o.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy() {
                    o.removeEventListener("resize", this.resize.resizeHandler),
                        o.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        };
        const B = {
            func: o.MutationObserver || o.WebkitMutationObserver,
            attach(e, t={}) {
                const s = this
                    , i = new (0,
                    B.func)((e=>{
                        if (1 === e.length)
                            return void s.emit("observerUpdate", e[0]);
                        const t = function() {
                            s.emit("observerUpdate", e[0])
                        };
                        o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
                    }
                ));
                i.observe(e, {
                    attributes: "undefined" === typeof t.attributes || t.attributes,
                    childList: "undefined" === typeof t.childList || t.childList,
                    characterData: "undefined" === typeof t.characterData || t.characterData
                }),
                    s.observer.observers.push(i)
            },
            init() {
                const e = this;
                if (u.observer && e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let s = 0; s < t.length; s += 1)
                            e.observer.attach(t[s])
                    }
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }),
                        e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                }
            },
            destroy() {
                this.observer.observers.forEach((e=>{
                        e.disconnect()
                    }
                )),
                    this.observer.observers = []
            }
        };
        var W = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create() {
                const e = this;
                h.extend(e, {
                    observer: {
                        init: B.init.bind(e),
                        attach: B.attach.bind(e),
                        destroy: B.destroy.bind(e),
                        observers: []
                    }
                })
            },
            on: {
                init() {
                    this.observer.init()
                },
                destroy() {
                    this.observer.destroy()
                }
            }
        };
        const G = {
            update(e) {
                const t = this
                    , {slidesPerView: s, slidesPerGroup: i, centeredSlides: a} = t.params
                    , {addSlidesBefore: n, addSlidesAfter: r} = t.params.virtual
                    , {from: o, to: l, slides: d, slidesGrid: c, renderSlide: p, offset: u} = t.virtual;
                t.updateActiveIndex();
                const f = t.activeIndex || 0;
                let m, g, v;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                    a ? (g = Math.floor(s / 2) + i + n,
                        v = Math.floor(s / 2) + i + r) : (g = s + (i - 1) + n,
                        v = i + r);
                const b = Math.max((f || 0) - v, 0)
                    , y = Math.min((f || 0) + g, d.length - 1)
                    , x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
                function w() {
                    t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                    t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (h.extend(t.virtual, {
                    from: b,
                    to: y,
                    offset: x,
                    slidesGrid: t.slidesGrid
                }),
                o === b && l === y && !e)
                    return t.slidesGrid !== c && x !== u && t.slides.css(m, `${x}px`),
                        void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return t.params.virtual.renderExternal.call(t, {
                        offset: x,
                        from: b,
                        to: y,
                        slides: function() {
                            const e = [];
                            for (let t = b; t <= y; t += 1)
                                e.push(d[t]);
                            return e
                        }()
                    }),
                        void w();
                const T = []
                    , E = [];
                if (e)
                    t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                else
                    for (let h = o; h <= l; h += 1)
                        (h < b || h > y) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${h}"]`).remove();
                for (let h = 0; h < d.length; h += 1)
                    h >= b && h <= y && ("undefined" === typeof l || e ? E.push(h) : (h > l && E.push(h),
                    h < o && T.push(h)));
                E.forEach((e=>{
                        t.$wrapperEl.append(p(d[e], e))
                    }
                )),
                    T.sort(((e,t)=>t - e)).forEach((e=>{
                            t.$wrapperEl.prepend(p(d[e], e))
                        }
                    )),
                    t.$wrapperEl.children(".swiper-slide").css(m, `${x}px`),
                    w()
            },
            renderSlide(e, t) {
                const s = this
                    , i = s.params.virtual;
                if (i.cache && s.virtual.cache[t])
                    return s.virtual.cache[t];
                const a = i.renderSlide ? d(i.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t),
                i.cache && (s.virtual.cache[t] = a),
                    a
            },
            appendSlide(e) {
                const t = this;
                if ("object" === typeof e && "length"in e)
                    for (let s = 0; s < e.length; s += 1)
                        e[s] && t.virtual.slides.push(e[s]);
                else
                    t.virtual.slides.push(e);
                t.virtual.update(!0)
            },
            prependSlide(e) {
                const t = this
                    , s = t.activeIndex;
                let i = s + 1
                    , a = 1;
                if (Array.isArray(e)) {
                    for (let s = 0; s < e.length; s += 1)
                        e[s] && t.virtual.slides.unshift(e[s]);
                    i = s + e.length,
                        a = e.length
                } else
                    t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    const e = t.virtual.cache
                        , s = {};
                    Object.keys(e).forEach((t=>{
                            const i = e[t]
                                , n = i.attr("data-swiper-slide-index");
                            n && i.attr("data-swiper-slide-index", parseInt(n, 10) + 1),
                                s[parseInt(t, 10) + a] = i
                        }
                    )),
                        t.virtual.cache = s
                }
                t.virtual.update(!0),
                    t.slideTo(i, 0)
            },
            removeSlide(e) {
                const t = this;
                if ("undefined" === typeof e || null === e)
                    return;
                let s = t.activeIndex;
                if (Array.isArray(e))
                    for (let i = e.length - 1; i >= 0; i -= 1)
                        t.virtual.slides.splice(e[i], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[i]],
                        e[i] < s && (s -= 1),
                            s = Math.max(s, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < s && (s -= 1),
                        s = Math.max(s, 0);
                t.virtual.update(!0),
                    t.slideTo(s, 0)
            },
            removeAllSlides() {
                const e = this;
                e.virtual.slides = [],
                e.params.virtual.cache && (e.virtual.cache = {}),
                    e.virtual.update(!0),
                    e.slideTo(0, 0)
            }
        };
        var V = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    virtual: {
                        update: G.update.bind(e),
                        appendSlide: G.appendSlide.bind(e),
                        prependSlide: G.prependSlide.bind(e),
                        removeSlide: G.removeSlide.bind(e),
                        removeAllSlides: G.removeAllSlides.bind(e),
                        renderSlide: G.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (!e.params.virtual.enabled)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}virtual`);
                    const t = {
                        watchSlidesProgress: !0
                    };
                    h.extend(e.params, t),
                        h.extend(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                },
                setTranslate() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        };
        const X = {
            handle(e) {
                const t = this
                    , {rtlTranslate: s} = t;
                let i = e;
                i.originalEvent && (i = i.originalEvent);
                const a = i.keyCode || i.charCode
                    , r = t.params.keyboard.pageUpDown
                    , l = r && 33 === a
                    , d = r && 34 === a
                    , c = 37 === a
                    , p = 39 === a
                    , h = 38 === a
                    , u = 40 === a;
                if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && u || d))
                    return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && h || l))
                    return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) && (!n.activeElement || !n.activeElement.nodeName || "input" !== n.activeElement.nodeName.toLowerCase() && "textarea" !== n.activeElement.nodeName.toLowerCase())) {
                    if (t.params.keyboard.onlyInViewport && (l || d || c || p || h || u)) {
                        let e = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                            return;
                        const i = o.innerWidth
                            , a = o.innerHeight
                            , n = t.$el.offset();
                        s && (n.left -= t.$el[0].scrollLeft);
                        const r = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]];
                        for (let t = 0; t < r.length; t += 1) {
                            const s = r[t];
                            s[0] >= 0 && s[0] <= i && s[1] >= 0 && s[1] <= a && (e = !0)
                        }
                        if (!e)
                            return
                    }
                    t.isHorizontal() ? ((l || d || c || p) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                    ((d || p) && !s || (l || c) && s) && t.slideNext(),
                    ((l || c) && !s || (d || p) && s) && t.slidePrev()) : ((l || d || h || u) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                    (d || u) && t.slideNext(),
                    (l || h) && t.slidePrev()),
                        t.emit("keyPress", a)
                }
            },
            enable() {
                const e = this;
                e.keyboard.enabled || (d(n).on("keydown", e.keyboard.handle),
                    e.keyboard.enabled = !0)
            },
            disable() {
                const e = this;
                e.keyboard.enabled && (d(n).off("keydown", e.keyboard.handle),
                    e.keyboard.enabled = !1)
            }
        };
        var Y = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: X.enable.bind(e),
                        disable: X.disable.bind(e),
                        handle: X.handle.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy() {
                    const e = this;
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        };
        const j = {
            lastScrollTime: h.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: ()=>o.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                const e = "onwheel";
                let t = e in n;
                if (!t) {
                    const s = n.createElement("div");
                    s.setAttribute(e, "return;"),
                        t = "function" === typeof s.onwheel
                }
                return !t && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (t = n.implementation.hasFeature("Events.wheel", "3.0")),
                    t
            }() ? "wheel" : "mousewheel",
            normalize(e) {
                let t = 0
                    , s = 0
                    , i = 0
                    , a = 0;
                return "detail"in e && (s = e.detail),
                "wheelDelta"in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                    s = 0),
                    i = 10 * t,
                    a = 10 * s,
                "deltaY"in e && (a = e.deltaY),
                "deltaX"in e && (i = e.deltaX),
                e.shiftKey && !i && (i = a,
                    a = 0),
                (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
                    a *= 40) : (i *= 800,
                    a *= 800)),
                i && !t && (t = i < 1 ? -1 : 1),
                a && !s && (s = a < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: s,
                        pixelX: i,
                        pixelY: a
                    }
            },
            handleMouseEnter() {
                this.mouseEntered = !0
            },
            handleMouseLeave() {
                this.mouseEntered = !1
            },
            handle(e) {
                let t = e;
                const s = this
                    , i = s.params.mousewheel;
                s.params.cssMode && t.preventDefault();
                let a = s.$el;
                if ("container" !== s.params.mousewheel.eventsTarged && (a = d(s.params.mousewheel.eventsTarged)),
                !s.mouseEntered && !a[0].contains(t.target) && !i.releaseOnEdges)
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                let n = 0;
                const r = s.rtlTranslate ? -1 : 1
                    , o = j.normalize(t);
                if (i.forceToAxis)
                    if (s.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                            return !0;
                        n = -o.pixelX * r
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                            return !0;
                        n = -o.pixelY
                    }
                else
                    n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === n)
                    return !0;
                if (i.invert && (n = -n),
                    s.params.freeMode) {
                    const e = {
                        time: h.now(),
                        delta: Math.abs(n),
                        direction: Math.sign(n)
                    }
                        , {lastEventBeforeSnap: a} = s.mousewheel
                        , r = a && e.time < a.time + 500 && e.delta <= a.delta && e.direction === a.direction;
                    if (!r) {
                        s.mousewheel.lastEventBeforeSnap = void 0,
                        s.params.loop && s.loopFix();
                        let a = s.getTranslate() + n * i.sensitivity;
                        const o = s.isBeginning
                            , l = s.isEnd;
                        if (a >= s.minTranslate() && (a = s.minTranslate()),
                        a <= s.maxTranslate() && (a = s.maxTranslate()),
                            s.setTransition(0),
                            s.setTranslate(a),
                            s.updateProgress(),
                            s.updateActiveIndex(),
                            s.updateSlidesClasses(),
                        (!o && s.isBeginning || !l && s.isEnd) && s.updateSlidesClasses(),
                            s.params.freeModeSticky) {
                            clearTimeout(s.mousewheel.timeout),
                                s.mousewheel.timeout = void 0;
                            const t = s.mousewheel.recentWheelEvents;
                            t.length >= 15 && t.shift();
                            const i = t.length ? t[t.length - 1] : void 0
                                , a = t[0];
                            if (t.push(e),
                            i && (e.delta > i.delta || e.direction !== i.direction))
                                t.splice(0);
                            else if (t.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                                const i = n > 0 ? .8 : .2;
                                s.mousewheel.lastEventBeforeSnap = e,
                                    t.splice(0),
                                    s.mousewheel.timeout = h.nextTick((()=>{
                                            s.slideToClosest(s.params.speed, !0, void 0, i)
                                        }
                                    ), 0)
                            }
                            s.mousewheel.timeout || (s.mousewheel.timeout = h.nextTick((()=>{
                                    s.mousewheel.lastEventBeforeSnap = e,
                                        t.splice(0),
                                        s.slideToClosest(s.params.speed, !0, void 0, .5)
                                }
                            ), 500))
                        }
                        if (r || s.emit("scroll", t),
                        s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                        a === s.minTranslate() || a === s.maxTranslate())
                            return !0
                    }
                } else {
                    const t = {
                        time: h.now(),
                        delta: Math.abs(n),
                        direction: Math.sign(n),
                        raw: e
                    }
                        , i = s.mousewheel.recentWheelEvents;
                    i.length >= 2 && i.shift();
                    const a = i.length ? i[i.length - 1] : void 0;
                    if (i.push(t),
                        a ? (t.direction !== a.direction || t.delta > a.delta || t.time > a.time + 150) && s.mousewheel.animateSlider(t) : s.mousewheel.animateSlider(t),
                        s.mousewheel.releaseScroll(t))
                        return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    !1
            },
            animateSlider(e) {
                const t = this;
                return e.delta >= 6 && h.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
                    t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
                    t.emit("scroll", e.raw)),
                    t.mousewheel.lastScrollTime = (new o.Date).getTime(),
                    !1)
            },
            releaseScroll(e) {
                const t = this
                    , s = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                        return !0
                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                    return !0;
                return !1
            },
            enable() {
                const e = this
                    , t = j.event();
                if (e.params.cssMode)
                    return e.wrapperEl.removeEventListener(t, e.mousewheel.handle),
                        !0;
                if (!t)
                    return !1;
                if (e.mousewheel.enabled)
                    return !1;
                let s = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (s = d(e.params.mousewheel.eventsTarged)),
                    s.on("mouseenter", e.mousewheel.handleMouseEnter),
                    s.on("mouseleave", e.mousewheel.handleMouseLeave),
                    s.on(t, e.mousewheel.handle),
                    e.mousewheel.enabled = !0,
                    !0
            },
            disable() {
                const e = this
                    , t = j.event();
                if (e.params.cssMode)
                    return e.wrapperEl.addEventListener(t, e.mousewheel.handle),
                        !0;
                if (!t)
                    return !1;
                if (!e.mousewheel.enabled)
                    return !1;
                let s = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (s = d(e.params.mousewheel.eventsTarged)),
                    s.off(t, e.mousewheel.handle),
                    e.mousewheel.enabled = !1,
                    !0
            }
        };
        const q = {
            update() {
                const e = this
                    , t = e.params.navigation;
                if (e.params.loop)
                    return;
                const {$nextEl: s, $prevEl: i} = e.navigation;
                i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                    i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                    s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            },
            onPrevClick(e) {
                const t = this;
                e.preventDefault(),
                t.isBeginning && !t.params.loop || t.slidePrev()
            },
            onNextClick(e) {
                const t = this;
                e.preventDefault(),
                t.isEnd && !t.params.loop || t.slideNext()
            },
            init() {
                const e = this
                    , t = e.params.navigation;
                if (!t.nextEl && !t.prevEl)
                    return;
                let s, i;
                t.nextEl && (s = d(t.nextEl),
                e.params.uniqueNavElements && "string" === typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))),
                t.prevEl && (i = d(t.prevEl),
                e.params.uniqueNavElements && "string" === typeof t.prevEl && i.length > 1 && 1 === e.$el.find(t.prevEl).length && (i = e.$el.find(t.prevEl))),
                s && s.length > 0 && s.on("click", e.navigation.onNextClick),
                i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
                    h.extend(e.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: i,
                        prevEl: i && i[0]
                    })
            },
            destroy() {
                const e = this
                    , {$nextEl: t, $prevEl: s} = e.navigation;
                t && t.length && (t.off("click", e.navigation.onNextClick),
                    t.removeClass(e.params.navigation.disabledClass)),
                s && s.length && (s.off("click", e.navigation.onPrevClick),
                    s.removeClass(e.params.navigation.disabledClass))
            }
        };
        const _ = {
            update() {
                const e = this
                    , t = e.rtl
                    , s = e.params.pagination;
                if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                    , a = e.pagination.$el;
                let n;
                const r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? (n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
                n > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides),
                n > r - 1 && (n -= r),
                n < 0 && "bullets" !== e.params.paginationType && (n = r + n)) : n = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    const i = e.pagination.bullets;
                    let r, o, l;
                    if (s.dynamicBullets && (e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                        a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                    s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex,
                        e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                        r = n - e.pagination.dynamicBulletIndex,
                        o = r + (Math.min(i.length, s.dynamicMainBullets) - 1),
                        l = (o + r) / 2),
                        i.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`),
                    a.length > 1)
                        i.each(((e,t)=>{
                                const i = d(t)
                                    , a = i.index();
                                a === n && i.addClass(s.bulletActiveClass),
                                s.dynamicBullets && (a >= r && a <= o && i.addClass(`${s.bulletActiveClass}-main`),
                                a === r && i.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`),
                                a === o && i.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`))
                            }
                        ));
                    else {
                        const t = i.eq(n)
                            , a = t.index();
                        if (t.addClass(s.bulletActiveClass),
                            s.dynamicBullets) {
                            const t = i.eq(r)
                                , n = i.eq(o);
                            for (let e = r; e <= o; e += 1)
                                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            if (e.params.loop)
                                if (a >= i.length - s.dynamicMainBullets) {
                                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                        i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                } else
                                    t.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`),
                                        n.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
                            else
                                t.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`),
                                    n.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`)
                        }
                    }
                    if (s.dynamicBullets) {
                        const a = Math.min(i.length, s.dynamicMainBullets + 4)
                            , n = (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 - l * e.pagination.bulletSize
                            , r = t ? "right" : "left";
                        i.css(e.isHorizontal() ? r : "top", `${n}px`)
                    }
                }
                if ("fraction" === s.type && (a.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)),
                    a.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))),
                "progressbar" === s.type) {
                    let t;
                    t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const i = (n + 1) / r;
                    let o = 1
                        , l = 1;
                    "horizontal" === t ? o = i : l = i,
                        a.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`).transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, r)),
                    e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]),
                    a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            },
            render() {
                const e = this
                    , t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                    , i = e.pagination.$el;
                let a = "";
                if ("bullets" === t.type) {
                    const n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    for (let s = 0; s < n; s += 1)
                        t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    i.html(a),
                        e.pagination.bullets = i.find(`.${t.bulletClass}`)
                }
                "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
                    i.html(a)),
                "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
                    i.html(a)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            },
            init() {
                const e = this
                    , t = e.params.pagination;
                if (!t.el)
                    return;
                let s = d(t.el);
                0 !== s.length && (e.params.uniqueNavElements && "string" === typeof t.el && s.length > 1 && (s = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                    s.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                    e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
                t.clickable && s.on("click", `.${t.bulletClass}`, (function(t) {
                        t.preventDefault();
                        let s = d(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (s += e.loopedSlides),
                            e.slideTo(s)
                    }
                )),
                    h.extend(e.pagination, {
                        $el: s,
                        el: s[0]
                    }))
            },
            destroy() {
                const e = this
                    , t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                    return;
                const s = e.pagination.$el;
                s.removeClass(t.hiddenClass),
                    s.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && s.off("click", `.${t.bulletClass}`)
            }
        };
        const U = {
            setTranslate() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el)
                    return;
                const {scrollbar: t, rtlTranslate: s, progress: i} = e
                    , {dragSize: a, trackSize: n, $dragEl: r, $el: o} = t
                    , l = e.params.scrollbar;
                let d = a
                    , c = (n - a) * i;
                s ? (c = -c,
                    c > 0 ? (d = a - c,
                        c = 0) : -c + a > n && (d = n + c)) : c < 0 ? (d = a + c,
                    c = 0) : c + a > n && (d = n - c),
                    e.isHorizontal() ? (r.transform(`translate3d(${c}px, 0, 0)`),
                        r[0].style.width = `${d}px`) : (r.transform(`translate3d(0px, ${c}px, 0)`),
                        r[0].style.height = `${d}px`),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                    o[0].style.opacity = 1,
                    e.scrollbar.timeout = setTimeout((()=>{
                            o[0].style.opacity = 0,
                                o.transition(400)
                        }
                    ), 1e3))
            },
            setTransition(e) {
                const t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el)
                    return;
                const {scrollbar: t} = e
                    , {$dragEl: s, $el: i} = t;
                s[0].style.width = "",
                    s[0].style.height = "";
                const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight
                    , n = e.size / e.virtualSize
                    , r = n * (a / e.size);
                let o;
                o = "auto" === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10),
                    e.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`,
                    i[0].style.display = n >= 1 ? "none" : "",
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                    h.extend(t, {
                        trackSize: a,
                        divider: n,
                        moveDivider: r,
                        dragSize: o
                    }),
                    t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            },
            getPointerPosition(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition(e) {
                const t = this
                    , {scrollbar: s, rtlTranslate: i} = t
                    , {$el: a, dragSize: n, trackSize: r, dragStartPos: o} = s;
                let l;
                l = (s.getPointerPosition(e) - a.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (r - n),
                    l = Math.max(Math.min(l, 1), 0),
                i && (l = 1 - l);
                const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
                t.updateProgress(d),
                    t.setTranslate(d),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
            },
            onDragStart(e) {
                const t = this
                    , s = t.params.scrollbar
                    , {scrollbar: i, $wrapperEl: a} = t
                    , {$el: n, $dragEl: r} = i;
                t.scrollbar.isTouched = !0,
                    t.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
                    e.preventDefault(),
                    e.stopPropagation(),
                    a.transition(100),
                    r.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    n.transition(0),
                s.hide && n.css("opacity", 1),
                t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                    t.emit("scrollbarDragStart", e)
            },
            onDragMove(e) {
                const t = this
                    , {scrollbar: s, $wrapperEl: i} = t
                    , {$el: a, $dragEl: n} = s;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    s.setDragPosition(e),
                    i.transition(0),
                    a.transition(0),
                    n.transition(0),
                    t.emit("scrollbarDragMove", e))
            },
            onDragEnd(e) {
                const t = this
                    , s = t.params.scrollbar
                    , {scrollbar: i, $wrapperEl: a} = t
                    , {$el: n} = i;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
                t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
                    a.transition("")),
                s.hide && (clearTimeout(t.scrollbar.dragTimeout),
                    t.scrollbar.dragTimeout = h.nextTick((()=>{
                            n.css("opacity", 0),
                                n.transition(400)
                        }
                    ), 1e3)),
                    t.emit("scrollbarDragEnd", e),
                s.snapOnRelease && t.slideToClosest())
            },
            enableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, touchEventsTouch: s, touchEventsDesktop: i, params: a} = e
                    , r = t.$el[0]
                    , o = !(!u.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                    , l = !(!u.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                u.touch ? (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
                    r.addEventListener(s.move, e.scrollbar.onDragMove, o),
                    r.addEventListener(s.end, e.scrollbar.onDragEnd, l)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, o),
                    n.addEventListener(i.move, e.scrollbar.onDragMove, o),
                    n.addEventListener(i.end, e.scrollbar.onDragEnd, l))
            },
            disableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, touchEventsTouch: s, touchEventsDesktop: i, params: a} = e
                    , r = t.$el[0]
                    , o = !(!u.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                    , l = !(!u.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                u.touch ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
                    r.removeEventListener(s.move, e.scrollbar.onDragMove, o),
                    r.removeEventListener(s.end, e.scrollbar.onDragEnd, l)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, o),
                    n.removeEventListener(i.move, e.scrollbar.onDragMove, o),
                    n.removeEventListener(i.end, e.scrollbar.onDragEnd, l))
            },
            init() {
                const e = this;
                if (!e.params.scrollbar.el)
                    return;
                const {scrollbar: t, $el: s} = e
                    , i = e.params.scrollbar;
                let a = d(i.el);
                e.params.uniqueNavElements && "string" === typeof i.el && a.length > 1 && 1 === s.find(i.el).length && (a = s.find(i.el));
                let n = a.find(`.${e.params.scrollbar.dragClass}`);
                0 === n.length && (n = d(`<div class="${e.params.scrollbar.dragClass}"></div>`),
                    a.append(n)),
                    h.extend(t, {
                        $el: a,
                        el: a[0],
                        $dragEl: n,
                        dragEl: n[0]
                    }),
                i.draggable && t.enableDraggable()
            },
            destroy() {
                this.scrollbar.disableDraggable()
            }
        };
        const K = {
            setTransform(e, t) {
                const {rtl: s} = this
                    , i = d(e)
                    , a = s ? -1 : 1
                    , n = i.attr("data-swiper-parallax") || "0";
                let r = i.attr("data-swiper-parallax-x")
                    , o = i.attr("data-swiper-parallax-y");
                const l = i.attr("data-swiper-parallax-scale")
                    , c = i.attr("data-swiper-parallax-opacity");
                if (r || o ? (r = r || "0",
                    o = o || "0") : this.isHorizontal() ? (r = n,
                    o = "0") : (o = n,
                    r = "0"),
                    r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * a + "%" : r * t * a + "px",
                    o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px",
                "undefined" !== typeof c && null !== c) {
                    const e = c - (c - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = e
                }
                if ("undefined" === typeof l || null === l)
                    i.transform(`translate3d(${r}, ${o}, 0px)`);
                else {
                    const e = l - (l - 1) * (1 - Math.abs(t));
                    i.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`)
                }
            },
            setTranslate() {
                const e = this
                    , {$el: t, slides: s, progress: i, snapGrid: a} = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,s)=>{
                        e.parallax.setTransform(s, i)
                    }
                )),
                    s.each(((t,s)=>{
                            let n = s.progress;
                            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - i * (a.length - 1)),
                                n = Math.min(Math.max(n, -1), 1),
                                d(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,s)=>{
                                        e.parallax.setTransform(s, n)
                                    }
                                ))
                        }
                    ))
            },
            setTransition(e=this.params.speed) {
                const {$el: t} = this;
                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,s)=>{
                        const i = d(s);
                        let a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (a = 0),
                            i.transition(a)
                    }
                ))
            }
        };
        const J = {
            getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2)
                    return 1;
                const t = e.targetTouches[0].pageX
                    , s = e.targetTouches[0].pageY
                    , i = e.targetTouches[1].pageX
                    , a = e.targetTouches[1].pageY;
                return Math.sqrt((i - t) ** 2 + (a - s) ** 2)
            },
            onGestureStart(e) {
                const t = this
                    , s = t.params.zoom
                    , i = t.zoom
                    , {gesture: a} = i;
                if (i.fakeGestureTouched = !1,
                    i.fakeGestureMoved = !1,
                    !u.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                        return;
                    i.fakeGestureTouched = !0,
                        a.scaleStart = J.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = d(e.target).closest(`.${t.params.slideClass}`),
                0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)),
                    a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                    a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`),
                    a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
                0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0),
                    t.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange(e) {
                const t = this.params.zoom
                    , s = this.zoom
                    , {gesture: i} = s;
                if (!u.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                        return;
                    s.fakeGestureMoved = !0,
                        i.scaleMove = J.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (s.scale = u.gestures ? e.scale * s.currentScale : i.scaleMove / i.scaleStart * s.currentScale,
                s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** .5),
                s.scale < t.minRatio && (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** .5),
                    i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`))
            },
            onGestureEnd(e) {
                const t = this
                    , s = t.params.zoom
                    , i = t.zoom
                    , {gesture: a} = i;
                if (!u.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                        return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !T.android)
                        return;
                    i.fakeGestureTouched = !1,
                        i.fakeGestureMoved = !1
                }
                a.$imageEl && 0 !== a.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, a.maxRatio), s.minRatio),
                    a.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
                    i.currentScale = i.scale,
                    i.isScaling = !1,
                1 === i.scale && (a.$slideEl = void 0))
            },
            onTouchStart(e) {
                const t = this.zoom
                    , {gesture: s, image: i} = t;
                s.$imageEl && 0 !== s.$imageEl.length && (i.isTouched || (T.android && e.cancelable && e.preventDefault(),
                    i.isTouched = !0,
                    i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove(e) {
                const t = this
                    , s = t.zoom
                    , {gesture: i, image: a, velocity: n} = s;
                if (!i.$imageEl || 0 === i.$imageEl.length)
                    return;
                if (t.allowClick = !1,
                !a.isTouched || !i.$slideEl)
                    return;
                a.isMoved || (a.width = i.$imageEl[0].offsetWidth,
                    a.height = i.$imageEl[0].offsetHeight,
                    a.startX = h.getTranslate(i.$imageWrapEl[0], "x") || 0,
                    a.startY = h.getTranslate(i.$imageWrapEl[0], "y") || 0,
                    i.slideWidth = i.$slideEl[0].offsetWidth,
                    i.slideHeight = i.$slideEl[0].offsetHeight,
                    i.$imageWrapEl.transition(0),
                t.rtl && (a.startX = -a.startX,
                    a.startY = -a.startY));
                const r = a.width * s.scale
                    , o = a.height * s.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (a.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                        a.maxX = -a.minX,
                        a.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                        a.maxY = -a.minY,
                        a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !a.isMoved && !s.isScaling) {
                        if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x))
                            return void (a.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y))
                            return void (a.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                        e.stopPropagation(),
                        a.isMoved = !0,
                        a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX,
                        a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY,
                    a.currentX < a.minX && (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** .8),
                    a.currentX > a.maxX && (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** .8),
                    a.currentY < a.minY && (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** .8),
                    a.currentY > a.maxY && (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** .8),
                    n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x),
                    n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y),
                    n.prevTime || (n.prevTime = Date.now()),
                        n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2,
                        n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2,
                    Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                    Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                        n.prevPositionX = a.touchesCurrent.x,
                        n.prevPositionY = a.touchesCurrent.y,
                        n.prevTime = Date.now(),
                        i.$imageWrapEl.transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`)
                }
            },
            onTouchEnd() {
                const e = this.zoom
                    , {gesture: t, image: s, velocity: i} = e;
                if (!t.$imageEl || 0 === t.$imageEl.length)
                    return;
                if (!s.isTouched || !s.isMoved)
                    return s.isTouched = !1,
                        void (s.isMoved = !1);
                s.isTouched = !1,
                    s.isMoved = !1;
                let a = 300
                    , n = 300;
                const r = i.x * a
                    , o = s.currentX + r
                    , l = i.y * n
                    , d = s.currentY + l;
                0 !== i.x && (a = Math.abs((o - s.currentX) / i.x)),
                0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
                const c = Math.max(a, n);
                s.currentX = o,
                    s.currentY = d;
                const p = s.width * e.scale
                    , h = s.height * e.scale;
                s.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(t.slideHeight / 2 - h / 2, 0),
                    s.maxY = -s.minY,
                    s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX),
                    s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY),
                    t.$imageWrapEl.transition(c).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
            },
            onTransitionEnd() {
                const e = this
                    , t = e.zoom
                    , {gesture: s} = t;
                s.$slideEl && e.previousIndex !== e.activeIndex && (s.$imageEl && s.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                s.$imageWrapEl && s.$imageWrapEl.transform("translate3d(0,0,0)"),
                    t.scale = 1,
                    t.currentScale = 1,
                    s.$slideEl = void 0,
                    s.$imageEl = void 0,
                    s.$imageWrapEl = void 0)
            },
            toggle(e) {
                const t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in(e) {
                const t = this
                    , s = t.zoom
                    , i = t.params.zoom
                    , {gesture: a, image: n} = s;
                if (a.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? a.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : a.$slideEl = t.slides.eq(t.activeIndex),
                    a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                    a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`)),
                !a.$imageEl || 0 === a.$imageEl.length)
                    return;
                let r, o, l, d, c, p, h, u, f, m, g, v, b, y, x, w, T, E;
                a.$slideEl.addClass(`${i.zoomedSlideClass}`),
                    "undefined" === typeof n.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                        o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = n.touchesStart.x,
                        o = n.touchesStart.y),
                    s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                    s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                    e ? (T = a.$slideEl[0].offsetWidth,
                        E = a.$slideEl[0].offsetHeight,
                        l = a.$slideEl.offset().left,
                        d = a.$slideEl.offset().top,
                        c = l + T / 2 - r,
                        p = d + E / 2 - o,
                        f = a.$imageEl[0].offsetWidth,
                        m = a.$imageEl[0].offsetHeight,
                        g = f * s.scale,
                        v = m * s.scale,
                        b = Math.min(T / 2 - g / 2, 0),
                        y = Math.min(E / 2 - v / 2, 0),
                        x = -b,
                        w = -y,
                        h = c * s.scale,
                        u = p * s.scale,
                    h < b && (h = b),
                    h > x && (h = x),
                    u < y && (u = y),
                    u > w && (u = w)) : (h = 0,
                        u = 0),
                    a.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${u}px,0)`),
                    a.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
            },
            out() {
                const e = this
                    , t = e.zoom
                    , s = e.params.zoom
                    , {gesture: i} = t;
                i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : i.$slideEl = e.slides.eq(e.activeIndex),
                    i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
                    i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`)),
                i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
                    t.currentScale = 1,
                    i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                    i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    i.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                    i.$slideEl = void 0)
            },
            enable() {
                const e = this
                    , t = e.zoom;
                if (t.enabled)
                    return;
                t.enabled = !0;
                const s = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                    , i = !u.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                    , a = `.${e.params.slideClass}`;
                u.gestures ? (e.$wrapperEl.on("gesturestart", a, t.onGestureStart, s),
                    e.$wrapperEl.on("gesturechange", a, t.onGestureChange, s),
                    e.$wrapperEl.on("gestureend", a, t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, a, t.onGestureStart, s),
                    e.$wrapperEl.on(e.touchEvents.move, a, t.onGestureChange, i),
                    e.$wrapperEl.on(e.touchEvents.end, a, t.onGestureEnd, s),
                e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, t.onGestureEnd, s)),
                    e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i)
            },
            disable() {
                const e = this
                    , t = e.zoom;
                if (!t.enabled)
                    return;
                e.zoom.enabled = !1;
                const s = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                    , i = !u.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                    , a = `.${e.params.slideClass}`;
                u.gestures ? (e.$wrapperEl.off("gesturestart", a, t.onGestureStart, s),
                    e.$wrapperEl.off("gesturechange", a, t.onGestureChange, s),
                    e.$wrapperEl.off("gestureend", a, t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, a, t.onGestureStart, s),
                    e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, i),
                    e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, s),
                e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, t.onGestureEnd, s)),
                    e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i)
            }
        };
        const Z = {
            loadInSlide(e, t=!0) {
                const s = this
                    , i = s.params.lazy;
                if ("undefined" === typeof e)
                    return;
                if (0 === s.slides.length)
                    return;
                const a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`) : s.slides.eq(e);
                let n = a.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                !a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || (n = n.add(a[0])),
                0 !== n.length && n.each(((e,n)=>{
                        const r = d(n);
                        r.addClass(i.loadingClass);
                        const o = r.attr("data-background")
                            , l = r.attr("data-src")
                            , c = r.attr("data-srcset")
                            , p = r.attr("data-sizes")
                            , h = r.parent("picture");
                        s.loadImage(r[0], l || o, c, p, !1, (()=>{
                                if ("undefined" !== typeof s && null !== s && s && (!s || s.params) && !s.destroyed) {
                                    if (o ? (r.css("background-image", `url("${o}")`),
                                        r.removeAttr("data-background")) : (c && (r.attr("srcset", c),
                                        r.removeAttr("data-srcset")),
                                    p && (r.attr("sizes", p),
                                        r.removeAttr("data-sizes")),
                                    h.length && h.children("source").each(((e,t)=>{
                                            const s = d(t);
                                            s.attr("data-srcset") && (s.attr("srcset", s.attr("data-srcset")),
                                                s.removeAttr("data-srcset"))
                                        }
                                    )),
                                    l && (r.attr("src", l),
                                        r.removeAttr("data-src"))),
                                        r.addClass(i.loadedClass).removeClass(i.loadingClass),
                                        a.find(`.${i.preloaderClass}`).remove(),
                                    s.params.loop && t) {
                                        const e = a.attr("data-swiper-slide-index");
                                        if (a.hasClass(s.params.slideDuplicateClass)) {
                                            const t = s.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`);
                                            s.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            const t = s.$wrapperEl.children(`.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                            s.lazy.loadInSlide(t.index(), !1)
                                        }
                                    }
                                    s.emit("lazyImageReady", a[0], r[0]),
                                    s.params.autoHeight && s.updateAutoHeight()
                                }
                            }
                        )),
                            s.emit("lazyImageLoad", a[0], r[0])
                    }
                ))
            },
            load() {
                const e = this
                    , {$wrapperEl: t, params: s, slides: i, activeIndex: a} = e
                    , n = e.virtual && s.virtual.enabled
                    , r = s.lazy;
                let o = s.slidesPerView;
                function l(e) {
                    if (n) {
                        if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)
                            return !0
                    } else if (i[e])
                        return !0;
                    return !1
                }
                function c(e) {
                    return n ? d(e).attr("data-swiper-slide-index") : d(e).index()
                }
                if ("auto" === o && (o = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                    e.params.watchSlidesVisibility)
                    t.children(`.${s.slideVisibleClass}`).each(((t,s)=>{
                            const i = n ? d(s).attr("data-swiper-slide-index") : d(s).index();
                            e.lazy.loadInSlide(i)
                        }
                    ));
                else if (o > 1)
                    for (let d = a; d < a + o; d += 1)
                        l(d) && e.lazy.loadInSlide(d);
                else
                    e.lazy.loadInSlide(a);
                if (r.loadPrevNext)
                    if (o > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                        const t = r.loadPrevNextAmount
                            , s = o
                            , n = Math.min(a + s + Math.max(t, s), i.length)
                            , d = Math.max(a - Math.max(s, t), 0);
                        for (let i = a + o; i < n; i += 1)
                            l(i) && e.lazy.loadInSlide(i);
                        for (let i = d; i < a; i += 1)
                            l(i) && e.lazy.loadInSlide(i)
                    } else {
                        const i = t.children(`.${s.slideNextClass}`);
                        i.length > 0 && e.lazy.loadInSlide(c(i));
                        const a = t.children(`.${s.slidePrevClass}`);
                        a.length > 0 && e.lazy.loadInSlide(c(a))
                    }
            }
        };
        const Q = {
            LinearSpline: function(e, t) {
                const s = function() {
                    let e, t, s;
                    return (i,a)=>{
                        for (t = -1,
                                 e = i.length; e - t > 1; )
                            s = e + t >> 1,
                                i[s] <= a ? t = s : e = s;
                        return e
                    }
                }();
                let i, a;
                return this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1,
                    this.interpolate = function(e) {
                        return e ? (a = s(this.x, e),
                            i = a - 1,
                        (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
                    }
                    ,
                    this
            },
            getInterpolateFunction(e) {
                const t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new Q.LinearSpline(t.slidesGrid,e.slidesGrid) : new Q.LinearSpline(t.snapGrid,e.snapGrid))
            },
            setTranslate(e, t) {
                const s = this
                    , i = s.controller.control;
                let a, n;
                function r(e) {
                    const t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                        n = -s.controller.spline.interpolate(-t)),
                    n && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                        n = (t - s.minTranslate()) * a + e.minTranslate()),
                    s.params.controller.inverse && (n = e.maxTranslate() - n),
                        e.updateProgress(n),
                        e.setTranslate(n, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let o = 0; o < i.length; o += 1)
                        i[o] !== t && i[o]instanceof D && r(i[o]);
                else
                    i instanceof D && t !== i && r(i)
            },
            setTransition(e, t) {
                const s = this
                    , i = s.controller.control;
                let a;
                function n(t) {
                    t.setTransition(e, s),
                    0 !== e && (t.transitionStart(),
                    t.params.autoHeight && h.nextTick((()=>{
                            t.updateAutoHeight()
                        }
                    )),
                        t.$wrapperEl.transitionEnd((()=>{
                                i && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                                    t.transitionEnd())
                            }
                        )))
                }
                if (Array.isArray(i))
                    for (a = 0; a < i.length; a += 1)
                        i[a] !== t && i[a]instanceof D && n(i[a]);
                else
                    i instanceof D && t !== i && n(i)
            }
        };
        var ee = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: Q.getInterpolateFunction.bind(e),
                        setTranslate: Q.setTranslate.bind(e),
                        setTransition: Q.setTransition.bind(e)
                    }
                })
            },
            on: {
                update() {
                    const e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                },
                resize() {
                    const e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                },
                observerUpdate() {
                    const e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                },
                setTranslate(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        };
        const te = {
            makeElFocusable: e=>(e.attr("tabIndex", "0"),
                e),
            makeElNotFocusable: e=>(e.attr("tabIndex", "-1"),
                e),
            addElRole: (e,t)=>(e.attr("role", t),
                e),
            addElLabel: (e,t)=>(e.attr("aria-label", t),
                e),
            disableEl: e=>(e.attr("aria-disabled", !0),
                e),
            enableEl: e=>(e.attr("aria-disabled", !1),
                e),
            onEnterKey(e) {
                const t = this
                    , s = t.params.a11y;
                if (13 !== e.keyCode)
                    return;
                const i = d(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                    t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                    t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)),
                t.pagination && i.is(`.${t.params.pagination.bulletClass}`) && i[0].click()
            },
            notify(e) {
                const t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""),
                    t.html(e))
            },
            updateNavigation() {
                const e = this;
                if (e.params.loop || !e.navigation)
                    return;
                const {$nextEl: t, $prevEl: s} = e.navigation;
                s && s.length > 0 && (e.isBeginning ? (e.a11y.disableEl(s),
                    e.a11y.makeElNotFocusable(s)) : (e.a11y.enableEl(s),
                    e.a11y.makeElFocusable(s))),
                t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t),
                    e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t),
                    e.a11y.makeElFocusable(t)))
            },
            updatePagination() {
                const e = this
                    , t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((s,i)=>{
                        const a = d(i);
                        e.a11y.makeElFocusable(a),
                            e.a11y.addElRole(a, "button"),
                            e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
                    }
                ))
            },
            init() {
                const e = this;
                e.$el.append(e.a11y.liveRegion);
                const t = e.params.a11y;
                let s, i;
                e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
                s && (e.a11y.makeElFocusable(s),
                    e.a11y.addElRole(s, "button"),
                    e.a11y.addElLabel(s, t.nextSlideMessage),
                    s.on("keydown", e.a11y.onEnterKey)),
                i && (e.a11y.makeElFocusable(i),
                    e.a11y.addElRole(i, "button"),
                    e.a11y.addElLabel(i, t.prevSlideMessage),
                    i.on("keydown", e.a11y.onEnterKey)),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
            },
            destroy() {
                const e = this;
                let t, s;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                t && t.off("keydown", e.a11y.onEnterKey),
                s && s.off("keydown", e.a11y.onEnterKey),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
            }
        };
        const se = {
            init() {
                const e = this;
                if (!e.params.history)
                    return;
                if (!o.history || !o.history.pushState)
                    return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                const t = e.history;
                t.initialized = !0,
                    t.paths = se.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || o.addEventListener("popstate", e.history.setHistoryPopState))
            },
            destroy() {
                const e = this;
                e.params.history.replaceState || o.removeEventListener("popstate", e.history.setHistoryPopState)
            },
            setHistoryPopState() {
                const e = this;
                e.history.paths = se.getPathValues(),
                    e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues() {
                const e = o.location.pathname.slice(1).split("/").filter((e=>"" !== e))
                    , t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory(e, t) {
                const s = this;
                if (!s.history.initialized || !s.params.history.enabled)
                    return;
                const i = s.slides.eq(t);
                let a = se.slugify(i.attr("data-history"));
                o.location.pathname.includes(e) || (a = `${e}/${a}`);
                const n = o.history.state;
                n && n.value === a || (s.params.history.replaceState ? o.history.replaceState({
                    value: a
                }, null, a) : o.history.pushState({
                    value: a
                }, null, a))
            },
            slugify: e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            scrollToSlide(e, t, s) {
                const i = this;
                if (t)
                    for (let a = 0, n = i.slides.length; a < n; a += 1) {
                        const n = i.slides.eq(a);
                        if (se.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            const t = n.index();
                            i.slideTo(t, e, s)
                        }
                    }
                else
                    i.slideTo(0, e, s)
            }
        };
        const ie = {
            onHashCange() {
                const e = this;
                e.emit("hashChange");
                const t = n.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if ("undefined" === typeof s)
                        return;
                    e.slideTo(s)
                }
            },
            setHash() {
                const e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState)
                        o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""),
                            e.emit("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex)
                            , s = t.attr("data-hash") || t.attr("data-history");
                        n.location.hash = s || "",
                            e.emit("hashSet")
                    }
            },
            init() {
                const e = this;
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                    return;
                e.hashNavigation.initialized = !0;
                const t = n.location.hash.replace("#", "");
                if (t) {
                    const s = 0;
                    for (let i = 0, a = e.slides.length; i < a; i += 1) {
                        const a = e.slides.eq(i);
                        if ((a.attr("data-hash") || a.attr("data-history")) === t && !a.hasClass(e.params.slideDuplicateClass)) {
                            const t = a.index();
                            e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && d(o).on("hashchange", e.hashNavigation.onHashCange)
            },
            destroy() {
                const e = this;
                e.params.hashNavigation.watchState && d(o).off("hashchange", e.hashNavigation.onHashCange)
            }
        };
        const ae = {
            run() {
                const e = this
                    , t = e.slides.eq(e.activeIndex);
                let s = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    e.autoplay.timeout = h.nextTick((()=>{
                            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                                e.slidePrev(e.params.speed, !0, !0),
                                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                                e.slideNext(e.params.speed, !0, !0),
                                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                                e.emit("autoplay")),
                            e.params.cssMode && e.autoplay.running && e.autoplay.run()
                        }
                    ), s)
            },
            start() {
                const e = this;
                return "undefined" === typeof e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
                    e.emit("autoplayStart"),
                    e.autoplay.run(),
                    !0))
            },
            stop() {
                const e = this;
                return !!e.autoplay.running && ("undefined" !== typeof e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                    e.autoplay.timeout = void 0),
                    e.autoplay.running = !1,
                    e.emit("autoplayStop"),
                    !0))
            },
            pause(e) {
                const t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                    t.autoplay.paused = !0,
                    0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
                        t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
                        t.autoplay.run())))
            }
        };
        const ne = {
            setTranslate() {
                const e = this
                    , {slides: t} = e;
                for (let s = 0; s < t.length; s += 1) {
                    const t = e.slides.eq(s);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let a = 0;
                    e.isHorizontal() || (a = i,
                        i = 0);
                    const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${a}px, 0px)`)
                }
            },
            setTransition(e) {
                const t = this
                    , {slides: s, $wrapperEl: i} = t;
                if (s.transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    let e = !1;
                    s.transitionEnd((()=>{
                            if (e)
                                return;
                            if (!t || t.destroyed)
                                return;
                            e = !0,
                                t.animating = !1;
                            const s = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < s.length; e += 1)
                                i.trigger(s[e])
                        }
                    ))
                }
            }
        };
        const re = {
            setTranslate() {
                const e = this
                    , {$el: t, $wrapperEl: s, slides: i, width: a, height: n, rtlTranslate: r, size: o} = e
                    , l = e.params.cubeEffect
                    , c = e.isHorizontal()
                    , p = e.virtual && e.params.virtual.enabled;
                let h, u = 0;
                l.shadow && (c ? (h = s.find(".swiper-cube-shadow"),
                0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                    s.append(h)),
                    h.css({
                        height: `${a}px`
                    })) : (h = t.find(".swiper-cube-shadow"),
                0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                    t.append(h))));
                for (let m = 0; m < i.length; m += 1) {
                    const e = i.eq(m);
                    let t = m;
                    p && (t = parseInt(e.attr("data-swiper-slide-index"), 10));
                    let s = 90 * t
                        , a = Math.floor(s / 360);
                    r && (s = -s,
                        a = Math.floor(-s / 360));
                    const n = Math.max(Math.min(e[0].progress, 1), -1);
                    let h = 0
                        , f = 0
                        , g = 0;
                    t % 4 === 0 ? (h = 4 * -a * o,
                        g = 0) : (t - 1) % 4 === 0 ? (h = 0,
                        g = 4 * -a * o) : (t - 2) % 4 === 0 ? (h = o + 4 * a * o,
                        g = o) : (t - 3) % 4 === 0 && (h = -o,
                        g = 3 * o + 4 * o * a),
                    r && (h = -h),
                    c || (f = h,
                        h = 0);
                    const v = `rotateX(${c ? 0 : -s}deg) rotateY(${c ? s : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                    if (n <= 1 && n > -1 && (u = 90 * t + 90 * n,
                    r && (u = 90 * -t - 90 * n)),
                        e.transform(v),
                        l.slideShadows) {
                        let t = c ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
                            , s = c ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = d(`<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`),
                            e.append(t)),
                        0 === s.length && (s = d(`<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`),
                            e.append(s)),
                        t.length && (t[0].style.opacity = Math.max(-n, 0)),
                        s.length && (s[0].style.opacity = Math.max(n, 0))
                    }
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                    "-moz-transform-origin": `50% 50% -${o / 2}px`,
                    "-ms-transform-origin": `50% 50% -${o / 2}px`,
                    "transform-origin": `50% 50% -${o / 2}px`
                }),
                    l.shadow)
                    if (c)
                        h.transform(`translate3d(0px, ${a / 2 + l.shadowOffset}px, ${-a / 2}px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`);
                    else {
                        const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                            , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                            , s = l.shadowScale
                            , i = l.shadowScale / t
                            , a = l.shadowOffset;
                        h.transform(`scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + a}px, ${-n / 2 / i}px) rotateX(-90deg)`)
                    }
                const f = N.isSafari || N.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : u}deg) rotateY(${e.isHorizontal() ? -u : 0}deg)`)
            },
            setTransition(e) {
                const t = this
                    , {$el: s, slides: i} = t;
                i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            }
        };
        const oe = {
            setTranslate() {
                const e = this
                    , {slides: t, rtlTranslate: s} = e;
                for (let i = 0; i < t.length; i += 1) {
                    const a = t.eq(i);
                    let n = a[0].progress;
                    e.params.flipEffect.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                    let r = -180 * n
                        , o = 0
                        , l = -a[0].swiperSlideOffset
                        , c = 0;
                    if (e.isHorizontal() ? s && (r = -r) : (c = l,
                        l = 0,
                        o = -r,
                        r = 0),
                        a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length,
                        e.params.flipEffect.slideShadows) {
                        let t = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                            , s = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = d(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`),
                            a.append(t)),
                        0 === s.length && (s = d(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`),
                            a.append(s)),
                        t.length && (t[0].style.opacity = Math.max(-n, 0)),
                        s.length && (s[0].style.opacity = Math.max(n, 0))
                    }
                    a.transform(`translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`)
                }
            },
            setTransition(e) {
                const t = this
                    , {slides: s, activeIndex: i, $wrapperEl: a} = t;
                if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    let e = !1;
                    s.eq(i).transitionEnd((function() {
                            if (e)
                                return;
                            if (!t || t.destroyed)
                                return;
                            e = !0,
                                t.animating = !1;
                            const s = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < s.length; e += 1)
                                a.trigger(s[e])
                        }
                    ))
                }
            }
        };
        const le = {
            setTranslate() {
                const e = this
                    , {width: t, height: s, slides: i, $wrapperEl: a, slidesSizesGrid: n} = e
                    , r = e.params.coverflowEffect
                    , o = e.isHorizontal()
                    , l = e.translate
                    , c = o ? t / 2 - l : s / 2 - l
                    , p = o ? r.rotate : -r.rotate
                    , h = r.depth;
                for (let u = 0, f = i.length; u < f; u += 1) {
                    const e = i.eq(u)
                        , t = n[u]
                        , s = (c - e[0].swiperSlideOffset - t / 2) / t * r.modifier;
                    let a = o ? p * s : 0
                        , l = o ? 0 : p * s
                        , f = -h * Math.abs(s)
                        , m = r.stretch;
                    "string" === typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * t);
                    let g = o ? 0 : m * s
                        , v = o ? m * s : 0
                        , b = 1 - (1 - r.scale) * Math.abs(s);
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(a) < .001 && (a = 0),
                    Math.abs(l) < .001 && (l = 0),
                    Math.abs(b) < .001 && (b = 0);
                    const y = `translate3d(${v}px,${g}px,${f}px)  rotateX(${l}deg) rotateY(${a}deg) scale(${b})`;
                    if (e.transform(y),
                        e[0].style.zIndex = 1 - Math.abs(Math.round(s)),
                        r.slideShadows) {
                        let t = o ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
                            , i = o ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = d(`<div class="swiper-slide-shadow-${o ? "left" : "top"}"></div>`),
                            e.append(t)),
                        0 === i.length && (i = d(`<div class="swiper-slide-shadow-${o ? "right" : "bottom"}"></div>`),
                            e.append(i)),
                        t.length && (t[0].style.opacity = s > 0 ? s : 0),
                        i.length && (i[0].style.opacity = -s > 0 ? -s : 0)
                    }
                }
                if (u.pointerEvents || u.prefixedPointerEvents) {
                    a[0].style.perspectiveOrigin = `${c}px 50%`
                }
            },
            setTransition(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        };
        const de = {
            init() {
                const e = this
                    , {thumbs: t} = e.params
                    , s = e.constructor;
                t.swiper instanceof s ? (e.thumbs.swiper = t.swiper,
                    h.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }),
                    h.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : h.isObject(t.swiper) && (e.thumbs.swiper = new s(h.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })),
                    e.thumbs.swiperCreated = !0),
                    e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick() {
                const e = this
                    , t = e.thumbs.swiper;
                if (!t)
                    return;
                const s = t.clickedIndex
                    , i = t.clickedSlide;
                if (i && d(i).hasClass(e.params.thumbs.slideThumbActiveClass))
                    return;
                if ("undefined" === typeof s || null === s)
                    return;
                let a;
                if (a = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
                    e.params.loop) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                        e._clientLeft = e.$wrapperEl[0].clientLeft,
                        t = e.activeIndex);
                    const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${a}"]`).eq(0).index()
                        , i = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${a}"]`).eq(0).index();
                    a = "undefined" === typeof s ? i : "undefined" === typeof i ? s : i - t < t - s ? i : s
                }
                e.slideTo(a)
            },
            update(e) {
                const t = this
                    , s = t.thumbs.swiper;
                if (!s)
                    return;
                const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView
                    , a = t.params.thumbs.autoScrollOffset
                    , n = a && !s.params.loop;
                if (t.realIndex !== s.realIndex || n) {
                    let r, o, l = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(l).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                            s._clientLeft = s.$wrapperEl[0].clientLeft,
                            l = s.activeIndex);
                        const e = s.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                            , i = s.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        r = "undefined" === typeof e ? i : "undefined" === typeof i ? e : i - l === l - e ? l : i - l < l - e ? i : e,
                            o = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else
                        r = t.realIndex,
                            o = r > t.previousIndex ? "next" : "prev";
                    n && (r += "next" === o ? a : -1 * a),
                    s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1),
                        s.slideTo(r, e ? 0 : void 0))
                }
                let r = 1;
                const o = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (r = 1),
                    r = Math.floor(r),
                    s.slides.removeClass(o),
                s.params.loop || s.params.virtual && s.params.virtual.enabled)
                    for (let l = 0; l < r; l += 1)
                        s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + l}"]`).addClass(o);
                else
                    for (let l = 0; l < r; l += 1)
                        s.slides.eq(t.realIndex + l).addClass(o)
            }
        };
        const ce = [O, H, F, R, W, V, Y, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: j.enable.bind(e),
                        disable: j.disable.bind(e),
                        handle: j.handle.bind(e),
                        handleMouseEnter: j.handleMouseEnter.bind(e),
                        handleMouseLeave: j.handleMouseLeave.bind(e),
                        animateSlider: j.animateSlider.bind(e),
                        releaseScroll: j.releaseScroll.bind(e),
                        lastScrollTime: h.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(),
                    e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy() {
                    const e = this;
                    e.params.cssMode && e.mousewheel.enable(),
                    e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    navigation: {
                        init: q.init.bind(e),
                        update: q.update.bind(e),
                        destroy: q.destroy.bind(e),
                        onNextClick: q.onNextClick.bind(e),
                        onPrevClick: q.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init() {
                    this.navigation.init(),
                        this.navigation.update()
                },
                toEdge() {
                    this.navigation.update()
                },
                fromEdge() {
                    this.navigation.update()
                },
                destroy() {
                    this.navigation.destroy()
                },
                click(e) {
                    const t = this
                        , {$nextEl: s, $prevEl: i} = t.navigation;
                    if (t.params.navigation.hideOnClick && !d(e.target).is(i) && !d(e.target).is(s)) {
                        let e;
                        s ? e = s.hasClass(t.params.navigation.hiddenClass) : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                            !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t),
                        s && s.toggleClass(t.params.navigation.hiddenClass),
                        i && i.toggleClass(t.params.navigation.hiddenClass)
                    }
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e=>e,
                    formatFractionTotal: e=>e,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    pagination: {
                        init: _.init.bind(e),
                        render: _.render.bind(e),
                        update: _.update.bind(e),
                        destroy: _.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.pagination.init(),
                        e.pagination.render(),
                        e.pagination.update()
                },
                activeIndexChange() {
                    const e = this;
                    (e.params.loop || "undefined" === typeof e.snapIndex) && e.pagination.update()
                },
                snapIndexChange() {
                    const e = this;
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange() {
                    const e = this;
                    e.params.loop && (e.pagination.render(),
                        e.pagination.update())
                },
                snapGridLengthChange() {
                    const e = this;
                    e.params.loop || (e.pagination.render(),
                        e.pagination.update())
                },
                destroy() {
                    this.pagination.destroy()
                },
                click(e) {
                    const t = this;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !d(e.target).hasClass(t.params.pagination.bulletClass)) {
                        !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                            t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                    }
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    scrollbar: {
                        init: U.init.bind(e),
                        destroy: U.destroy.bind(e),
                        updateSize: U.updateSize.bind(e),
                        setTranslate: U.setTranslate.bind(e),
                        setTransition: U.setTransition.bind(e),
                        enableDraggable: U.enableDraggable.bind(e),
                        disableDraggable: U.disableDraggable.bind(e),
                        setDragPosition: U.setDragPosition.bind(e),
                        getPointerPosition: U.getPointerPosition.bind(e),
                        onDragStart: U.onDragStart.bind(e),
                        onDragMove: U.onDragMove.bind(e),
                        onDragEnd: U.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.scrollbar.init(),
                        e.scrollbar.updateSize(),
                        e.scrollbar.setTranslate()
                },
                update() {
                    this.scrollbar.updateSize()
                },
                resize() {
                    this.scrollbar.updateSize()
                },
                observerUpdate() {
                    this.scrollbar.updateSize()
                },
                setTranslate() {
                    this.scrollbar.setTranslate()
                },
                setTransition(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    parallax: {
                        setTransform: K.setTransform.bind(e),
                        setTranslate: K.setTranslate.bind(e),
                        setTransition: K.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0)
                },
                init() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create() {
                const e = this
                    , t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((s=>{
                        t[s] = J[s].bind(e)
                    }
                )),
                    h.extend(e, {
                        zoom: t
                    });
                let s = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: ()=>s,
                    set(t) {
                        if (s !== t) {
                            const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                                , i = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, i)
                        }
                        s = t
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy() {
                    this.zoom.disable()
                },
                touchStart(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap(e) {
                    const t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                },
                transitionEnd() {
                    const e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                },
                slideChange() {
                    const e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: Z.load.bind(e),
                        loadInSlide: Z.loadInSlide.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init() {
                    const e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll() {
                    const e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize() {
                    const e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                scrollbarDragMove() {
                    const e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart() {
                    const e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd() {
                    const e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange() {
                    const e = this;
                    e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                }
            }
        }, ee, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    a11y: {
                        liveRegion: d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                    }
                }),
                    Object.keys(te).forEach((t=>{
                            e.a11y[t] = te[t].bind(e)
                        }
                    ))
            },
            on: {
                init() {
                    const e = this;
                    e.params.a11y.enabled && (e.a11y.init(),
                        e.a11y.updateNavigation())
                },
                toEdge() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    history: {
                        init: se.init.bind(e),
                        setHistory: se.setHistory.bind(e),
                        setHistoryPopState: se.setHistoryPopState.bind(e),
                        scrollToSlide: se.scrollToSlide.bind(e),
                        destroy: se.destroy.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.history.enabled && e.history.init()
                },
                destroy() {
                    const e = this;
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd() {
                    const e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                },
                slideChange() {
                    const e = this;
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: ie.init.bind(e),
                        destroy: ie.destroy.bind(e),
                        setHash: ie.setHash.bind(e),
                        onHashCange: ie.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy() {
                    const e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd() {
                    const e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                },
                slideChange() {
                    const e = this;
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ae.run.bind(e),
                        start: ae.start.bind(e),
                        stop: ae.stop.bind(e),
                        pause: ae.pause.bind(e),
                        onVisibilityChange() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                            "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                                e.autoplay.paused = !1)
                        },
                        onTransitionEnd(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                e.autoplay.paused = !1,
                                e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.params.autoplay.enabled && (e.autoplay.start(),
                        document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                },
                beforeTransitionStart(e, t) {
                    const s = this;
                    s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop())
                },
                sliderFirstMove() {
                    const e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                touchEnd() {
                    const e = this;
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                },
                destroy() {
                    const e = this;
                    e.autoplay.running && e.autoplay.stop(),
                        document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    fadeEffect: {
                        setTranslate: ne.setTranslate.bind(e),
                        setTransition: ne.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if ("fade" !== e.params.effect)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}fade`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    h.extend(e.params, t),
                        h.extend(e.originalParams, t)
                },
                setTranslate() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    cubeEffect: {
                        setTranslate: re.setTranslate.bind(e),
                        setTransition: re.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if ("cube" !== e.params.effect)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}cube`),
                        e.classNames.push(`${e.params.containerModifierClass}3d`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    h.extend(e.params, t),
                        h.extend(e.originalParams, t)
                },
                setTranslate() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    flipEffect: {
                        setTranslate: oe.setTranslate.bind(e),
                        setTransition: oe.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if ("flip" !== e.params.effect)
                        return;
                    e.classNames.push(`${e.params.containerModifierClass}flip`),
                        e.classNames.push(`${e.params.containerModifierClass}3d`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    h.extend(e.params, t),
                        h.extend(e.originalParams, t)
                },
                setTranslate() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    coverflowEffect: {
                        setTranslate: le.setTranslate.bind(e),
                        setTransition: le.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(`${e.params.containerModifierClass}coverflow`),
                        e.classNames.push(`${e.params.containerModifierClass}3d`),
                        e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create() {
                const e = this;
                h.extend(e, {
                    thumbs: {
                        swiper: null,
                        init: de.init.bind(e),
                        update: de.update.bind(e),
                        onThumbClick: de.onThumbClick.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this
                        , {thumbs: t} = e.params;
                    t && t.swiper && (e.thumbs.init(),
                        e.thumbs.update(!0))
                },
                slideChange() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition(e) {
                    const t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy() {
                    const e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
        "undefined" === typeof D.use && (D.use = D.Class.use,
            D.installModule = D.Class.installModule),
            D.use(ce);
        var pe = D
    }
}]);
//# sourceMappingURL=96-43f1dbc62659bc4802c3.js.map
