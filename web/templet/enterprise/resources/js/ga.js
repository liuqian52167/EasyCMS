(function () {
    var g = void 0, h = null, aa = encodeURIComponent, ba = decodeURIComponent, j = Math;

    function ca(a, b) {
        return a.name = b
    }

    var k = "push", da = "slice", ea = "replace", fa = "load", l = "charAt", ga = "value", n = "indexOf", ha = "match", o = "name", ia = "host", r = "toString", s = "length", t = "prototype", u = "split", v = "stopPropagation", ja = "scope", w = "location", x = "getString", y = "substring", la = "navigator", A = "join", B = "toLowerCase", C;

    function ma(a, b) {
        switch (b) {
            case 0:
                return"" + a;
            case 1:
                return a * 1;
            case 2:
                return!!a;
            case 3:
                return a * 1E3
        }
        return a
    }

    function D(a) {
        return g == a || "-" == a || "" == a
    }

    function na(a) {
        if (!a || "" == a)return"";
        for (; a && " \n\r\t"[n](a[l](0)) > -1;)a = a[y](1);
        for (; a && " \n\r\t"[n](a[l](a[s] - 1)) > -1;)a = a[y](0, a[s] - 1);
        return a
    }

    function oa(a) {
        var b = 1, c = 0, d;
        if (!D(a)) {
            b = 0;
            for (d = a[s] - 1; d >= 0; d--)c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = c != 0 ? b ^ c >> 21 : b
        }
        return b
    }

    function pa() {
        return j.round(j.random() * 2147483647)
    }

    function qa() {
    }

    function E(a, b) {
        return aa instanceof Function ? b ? encodeURI(a) : aa(a) : (F(68), escape(a))
    }

    function G(a) {
        a = a[u]("+")[A](" ");
        if (ba instanceof Function)try {
            return ba(a)
        } catch (b) {
            F(17)
        } else F(68);
        return unescape(a)
    }

    var ra = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, sa = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
    };

    function H(a) {
        return a && a[s] > 0 ? a[0] : ""
    }

    function ta(a) {
        var b = a ? a[s] : 0;
        return b > 0 ? a[b - 1] : ""
    }

    var ua = function () {
        this.prefix = "ga.";
        this.F = {}
    };
    ua[t].set = function (a, b) {
        this.F[this.prefix + a] = b
    };
    ua[t].get = function (a) {
        return this.F[this.prefix + a]
    };
    ua[t].contains = function (a) {
        return this.get(a) !== g
    };
    function va(a) {
        a[n]("www.") == 0 && (a = a[y](4));
        return a[B]()
    }

    function wa(a, b) {
        var c, d = {url: a, protocol: "http", host: "", path: "", c: new ua, anchor: ""};
        if (!a)return d;
        c = a[n]("://");
        if (c >= 0)d.protocol = a[y](0, c), a = a[y](c + 3);
        c = a.search("/|\\?|#");
        if (c >= 0)d.host = a[y](0, c)[B](), a = a[y](c); else return d.host = a[B](), d;
        c = a[n]("#");
        if (c >= 0)d.anchor = a[y](c + 1), a = a[y](0, c);
        c = a[n]("?");
        c >= 0 && (xa(d.c, a[y](c + 1)), a = a[y](0, c));
        d.anchor && b && xa(d.c, d.anchor);
        a && a[l](0) == "/" && (a = a[y](1));
        d.path = a;
        return d
    }

    function xa(a, b) {
        function c(b, c) {
            a.contains(b) || a.set(b, []);
            a.get(b)[k](c)
        }

        for (var d = na(b)[u]("&"), e = 0; e < d[s]; e++)if (d[e]) {
            var f = d[e][n]("=");
            f < 0 ? c(d[e], "1") : c(d[e][y](0, f), d[e][y](f + 1))
        }
    }

    function ya(a, b) {
        if (D(a))return"-";
        if ("[" == a[l](0) && "]" == a[l](a[s] - 1))return"-";
        var c = I.domain;
        c += b && b != "/" ? b : "";
        return a[n](c) == (a[n]("http://") == 0 ? 7 : a[n]("https://") == 0 ? 8 : 0) ? "0" : a
    };
    function za(a, b, c) {
        j.random() * 100 >= 1 || (a = ["utmt=error", "type=" + a, "utmwv=5.1.7", "utmn=" + pa(), "utmsp=1"], b && a[k]("api=" + b), c && a[k]("msg=" + E(c[y](0, 100))), J.p && a[k]("aip=1"), Aa(a[A]("&")))
    };
    var Ba = 0;

    function K(a) {
        return(a ? "_" : "") + Ba++
    }

    var Ca = K(), Da = K(), Ea = K(), Fa = K(), Ga = K(), L = K(), M = K(), Ha = K(), Ia = K(), Ja = K(), Ka = K(), La = K(), Ma = K(), Na = K(), Oa = K(), Pa = K(), Qa = K(), Ra = K(), Sa = K(), Ta = K(), Ua = K(), Va = K(), Wa = K(), Xa = K(), Ya = K(), Za = K(), $a = K(), ab = K(), bb = K(), cb = K(), db = K(), eb = K(), fb = K(), gb = K(), hb = K(), N = K(!0), ib = K(), jb = K(), kb = K(), lb = K(), mb = K(), nb = K(), ob = K(), pb = K(), qb = K(), rb = K(), O = K(!0), sb = K(!0), tb = K(!0), ub = K(!0), wb = K(!0), xb = K(!0), yb = K(!0), zb = K(!0), Ab = K(!0), Bb = K(!0), Cb = K(!0), P = K(!0), Db = K(!0), Eb = K(!0), Fb = K(!0), Gb = K(!0), Hb = K(!0), Ib = K(!0), Jb = K(!0), Kb = K(!0),
        Lb = K(!0), Mb = K(!0), Nb = K(!0), Ob = K(!0), Pb = K(!0), Qb = K(), Rb = K();
    K();
    var Sb = K(), Tb = K(), Ub = K(), Vb = K(), Wb = K(), Xb = K(), $b = K(), ac = K(), bc = K();
    K();
    var cc = K(), dc = K();
    var ec = function () {
        function a(a, c, d) {
            Q(R[t], a, c, d)
        }

        S("_getName", Ea, 58);
        S("_getAccount", Ca, 64);
        S("_visitCode", O, 54);
        S("_getClientInfo", Na, 53, 1);
        S("_getDetectTitle", Qa, 56, 1);
        S("_getDetectFlash", Oa, 65, 1);
        S("_getLocalGifPath", $a, 57);
        S("_getServiceMode", ab, 59);
        T("_setClientInfo", Na, 66, 2);
        T("_setAccount", Ca, 3);
        T("_setNamespace", Da, 48);
        T("_setAllowLinker", Ka, 11, 2);
        T("_setDetectFlash", Oa, 61, 2);
        T("_setDetectTitle", Qa, 62, 2);
        T("_setLocalGifPath", $a, 46, 0);
        T("_setLocalServerMode", ab, 92, g, 0);
        T("_setRemoteServerMode",
            ab, 63, g, 1);
        T("_setLocalRemoteServerMode", ab, 47, g, 2);
        T("_setSampleRate", Za, 45, 1);
        T("_setCampaignTrack", Pa, 36, 2);
        T("_setAllowAnchor", La, 7, 2);
        T("_setCampNameKey", Sa, 41);
        T("_setCampContentKey", Xa, 38);
        T("_setCampIdKey", Ra, 39);
        T("_setCampMediumKey", Va, 40);
        T("_setCampNOKey", Ya, 42);
        T("_setCampSourceKey", Ua, 43);
        T("_setCampTermKey", Wa, 44);
        T("_setCampCIdKey", Ta, 37);
        T("_setCookiePath", M, 9, 0);
        T("_setMaxCustomVariables", bb, 0, 1);
        T("_setVisitorCookieTimeout", Ha, 28, 1);
        T("_setSessionCookieTimeout", Ia, 26, 1);
        T("_setCampaignCookieTimeout",
            Ja, 29, 1);
        T("_setReferrerOverride", kb, 49);
        a("_trackPageview", R[t].ka, 1);
        a("_trackEvent", R[t].u, 4);
        a("_trackSocial", R[t].la, 104);
        a("_trackPageLoadTime", R[t].ja, 100);
        a("_trackTrans", R[t].ma, 18);
        a("_sendXEvent", R[t].t, 78);
        a("_createEventTracker", R[t].S, 74);
        a("_getVersion", R[t].X, 60);
        a("_setDomainName", R[t].s, 6);
        a("_setAllowHash", R[t].ba, 8);
        a("_getLinkerUrl", R[t].W, 52);
        a("_link", R[t].link, 101);
        a("_linkByPost", R[t].aa, 102);
        a("_setTrans", R[t].ea, 20);
        a("_addTrans", R[t].L, 21);
        a("_addItem", R[t].J, 19);
        a("_setTransactionDelim",
            R[t].fa, 82);
        a("_setCustomVar", R[t].ca, 10);
        a("_deleteCustomVar", R[t].U, 35);
        a("_getVisitorCustomVar", R[t].Y, 50);
        a("_setXKey", R[t].ha, 83);
        a("_setXValue", R[t].ia, 84);
        a("_getXKey", R[t].Z, 76);
        a("_getXValue", R[t].$, 77);
        a("_clearXKey", R[t].P, 72);
        a("_clearXValue", R[t].Q, 73);
        a("_createXObj", R[t].T, 75);
        a("_addIgnoredOrganic", R[t].H, 15);
        a("_clearIgnoredOrganic", R[t].M, 97);
        a("_addIgnoredRef", R[t].I, 31);
        a("_clearIgnoredRef", R[t].N, 32);
        a("_addOrganic", R[t].K, 14);
        a("_clearOrganic", R[t].O, 70);
        a("_cookiePathCopy",
            R[t].R, 30);
        a("_get", R[t].V, 106);
        a("_set", R[t].da, 107);
        a("_addEventListener", R[t].addEventListener, 108);
        a("_removeEventListener", R[t].removeEventListener, 109);
        a("_initData", R[t].l, 2);
        a("_setVar", R[t].ga, 22);
        T("_setSessionTimeout", Ia, 27, 3);
        T("_setCookieTimeout", Ja, 25, 3);
        T("_setCookiePersistence", Ha, 24, 1);
        a("_setAutoTrackOutbound", qa, 79);
        a("_setTrackOutboundSubdomains", qa, 81);
        a("_setHrefExamineLimit", qa, 80)
    }, Q = function (a, b, c, d) {
        a[b] = function () {
            try {
                return F(d), c.apply(this, arguments)
            } catch (a) {
                throw za("exc",
                    b, a && a[o]), a;
            }
        }
    }, S = function (a, b, c, d) {
        R[t][a] = function () {
            try {
                return F(c), ma(this.a.get(b), d)
            } catch (e) {
                throw za("exc", a, e && e[o]), e;
            }
        }
    }, T = function (a, b, c, d, e) {
        R[t][a] = function (f) {
            try {
                F(c), e == g ? this.a.set(b, ma(f, d)) : this.a.set(b, e)
            } catch (i) {
                throw za("exc", a, i && i[o]), i;
            }
        }
    }, fc = function (a, b) {
        return{type: b, target: a, stopPropagation: function () {
            throw"aborted";
        }}
    };
    var gc = function (a, b) {
        return b !== "/" ? !1 : (a[n]("www.google.") == 0 || a[n](".google.") == 0 || a[n]("google.") == 0) && !(a[n]("google.org") > -1) ? !0 : !1
    }, hc = function (a) {
        var b = a.get(Ga), c = a[x](M, "/");
        gc(b, c) && a[v]()
    };
    var lc = function () {
        var a = {}, b = {}, c = new ic;
        this.g = function (a, b) {
            c.add(a, b)
        };
        var d = new ic;
        this.d = function (a, b) {
            d.add(a, b)
        };
        var e = !1, f = !1, i = !0;
        this.G = function () {
            e = !0
        };
        this.f = function (a) {
            this[fa]();
            this.set(Qb, a, !0);
            e = !1;
            d.execute(this);
            e = !0;
            b = {};
            this.i()
        };
        this.load = function () {
            e && (e = !1, this.na(), jc(this), f || (f = !0, c.execute(this), kc(this), jc(this)), e = !0)
        };
        this.i = function () {
            if (e)if (f)e = !1, kc(this), e = !0; else this[fa]()
        };
        this.get = function (c) {
            c && c[l](0) == "_" && this[fa]();
            return b[c] !== g ? b[c] : a[c]
        };
        this.set =
            function (c, d, e) {
                c && c[l](0) == "_" && this[fa]();
                e ? b[c] = d : a[c] = d;
                c && c[l](0) == "_" && this.i()
            };
        this.m = function (b) {
            a[b] = this.b(b, 0) + 1
        };
        this.b = function (a, b) {
            var c = this.get(a);
            return c == g || c === "" ? b : c * 1
        };
        this.getString = function (a, b) {
            var c = this.get(a);
            return c == g ? b : c + ""
        };
        this.na = function () {
            if (i) {
                var b = this[x](Ga, ""), c = this[x](M, "/");
                gc(b, c) || (a[L] = a[Ma] && b != "" ? oa(b) : 1, i = !1)
            }
        }
    };
    lc[t].stopPropagation = function () {
        throw"aborted";
    };
    function mc(a, b) {
        for (var b = b || [], c = 0; c < b[s]; c++) {
            var d = b[c];
            if ("" + a == d || d[n](a + ".") == 0)return d
        }
        return"-"
    }

    var oc = function (a, b, c) {
        c = c ? "" : a[x](L, "1");
        b = b[u](".");
        if (b[s] !== 6 || nc(b[0], c))return!1;
        var c = b[1] * 1, d = b[2] * 1, e = b[3] * 1, f = b[4] * 1, b = b[5] * 1;
        if (!(c >= 0 && d > 0 && e > 0 && f > 0 && b >= 0))return F(110), !1;
        a.set(O, c);
        a.set(wb, d);
        a.set(xb, e);
        a.set(yb, f);
        a.set(zb, b);
        return!0
    }, pc = function (a) {
        var b = a.get(O), c = a.get(wb), d = a.get(xb), e = a.get(yb), f = a.b(zb, 1);
        b == g ? F(113) : b == NaN && F(114);
        b >= 0 && c > 0 && d > 0 && e > 0 && f >= 0 || F(115);
        return[a.b(L, 1), b != g ? b : "-", c || "-", d || "-", e || "-", f][A](".")
    }, qc = function (a) {
        return[a.b(L, 1), a.b(Cb, 0), a.b(P, 1),
            a.b(Db, 0)][A](".")
    }, rc = function (a, b, c) {
        var c = c ? "" : a[x](L, "1"), d = b[u](".");
        if (d[s] !== 4 || nc(d[0], c))d = h;
        a.set(Cb, d ? d[1] * 1 : 0);
        a.set(P, d ? d[2] * 1 : 10);
        a.set(Db, d ? d[3] * 1 : a.get(Fa));
        return d != h || !nc(b, c)
    }, sc = function (a, b) {
        var c = E(a[x](tb, "")), d = [], e = a.get(N);
        if (!b && e) {
            for (var f = 0; f < e[s]; f++) {
                var i = e[f];
                i && i[ja] == 1 && d[k](f + "=" + E(i[o]) + "=" + E(i[ga]) + "=1")
            }
            d[s] > 0 && (c += "|" + d[A](","))
        }
        return c ? a.b(L, 1) + "." + c : h
    }, tc = function (a, b, c) {
        c = c ? "" : a[x](L, "1");
        b = b[u](".");
        if (b[s] < 2 || nc(b[0], c))return!1;
        b = b[da](1)[A](".")[u]("|");
        b[s] > 0 && a.set(tb, G(b[0]));
        if (b[s] <= 1)return!0;
        for (var c = b[1][u](b[1][n](",") == -1 ? "^" : ","), d = 0; d < c[s]; d++) {
            var e = c[d][u]("=");
            if (e[s] == 4) {
                var f = {};
                ca(f, G(e[1]));
                f.value = G(e[2]);
                f.scope = 1;
                a.get(N)[e[0]] = f
            }
        }
        b[1][n]("^") >= 0 && F(125);
        return!0
    }, vc = function (a, b) {
        var c = uc(a, b);
        return c ? [a.b(L, 1), a.b(Eb, 0), a.b(Fb, 1), a.b(Gb, 1), c][A](".") : ""
    }, uc = function (a) {
        function b(b, e) {
            if (!D(a.get(b))) {
                var f = a[x](b, ""), f = f[u](" ")[A]("%20"), f = f[u]("+")[A]("%20");
                c[k](e + "=" + f)
            }
        }

        var c = [];
        b(Ib, "utmcid");
        b(Mb, "utmcsr");
        b(Kb,
            "utmgclid");
        b(Lb, "utmdclid");
        b(Jb, "utmccn");
        b(Nb, "utmcmd");
        b(Ob, "utmctr");
        b(Pb, "utmcct");
        return c[A]("|")
    }, xc = function (a, b, c) {
        c = c ? "" : a[x](L, "1");
        b = b[u](".");
        if (b[s] < 5 || nc(b[0], c))return a.set(Eb, g), a.set(Fb, g), a.set(Gb, g), a.set(Ib, g), a.set(Jb, g), a.set(Mb, g), a.set(Nb, g), a.set(Ob, g), a.set(Pb, g), a.set(Kb, g), a.set(Lb, g), !1;
        a.set(Eb, b[1] * 1);
        a.set(Fb, b[2] * 1);
        a.set(Gb, b[3] * 1);
        wc(a, b[da](4)[A]("."));
        return!0
    }, wc = function (a, b) {
        function c(a) {
            return(a = b[ha](a + "=(.*?)(?:\\|utm|$)")) && a[s] == 2 ? a[1] : g
        }

        function d(b, c) {
            c && (c = e ? G(c) : c[u]("%20")[A](" "), a.set(b, c))
        }

        b[n]("=") == -1 && (b = G(b));
        var e = c("utmcvr") == "2";
        d(Ib, c("utmcid"));
        d(Jb, c("utmccn"));
        d(Mb, c("utmcsr"));
        d(Nb, c("utmcmd"));
        d(Ob, c("utmctr"));
        d(Pb, c("utmcct"));
        d(Kb, c("utmgclid"));
        d(Lb, c("utmdclid"))
    }, nc = function (a, b) {
        return b ? a != b : !/^\d+$/.test(a)
    };
    var ic = function () {
        this.r = []
    };
    ic[t].add = function (a, b) {
        this.r[k]({name: a, xa: b})
    };
    ic[t].execute = function (a) {
        try {
            for (var b = 0; b < this.r[s]; b++)this.r[b].xa.call(U, a)
        } catch (c) {
        }
    };
    function yc(a) {
        a.get(Za) != 100 && a.get(O) % 1E4 >= a.get(Za) * 100 && a[v]()
    }

    function zc(a) {
        Ac() && a[v]()
    }

    function Bc(a) {
        I[w].protocol == "file:" && a[v]()
    }

    function Cc(a) {
        a.get(jb) || a.set(jb, I.title, !0);
        a.get(ib) || a.set(ib, I[w].pathname + I[w].search, !0)
    };
    var Dc = new function () {
        var a = [];
        this.set = function (b) {
            a[b] = !0
        };
        this.ya = function () {
            for (var b = [], c = 0; c < a[s]; c++)a[c] && (b[j.floor(c / 6)] ^= 1 << c % 6);
            for (c = 0; c < b[s]; c++)b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[l](b[c] || 0);
            return b[A]("") + "~"
        }
    };

    function F(a) {
        Dc.set(a)
    };
    var U = window, I = document, Ac = function () {
        var a = U._gaUserPrefs;
        return a && a.ioo && a.ioo()
    }, Ec = function (a, b) {
        setTimeout(a, b)
    }, V = function (a) {
        for (var b = [], c = I.cookie[u](";"), a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), d = 0; d < c[s]; d++) {
            var e = c[d][ha](a);
            e && b[k](e[1])
        }
        return b
    }, W = function (a, b, c, d, e) {
        var f;
        f = Ac() ? !1 : gc(d, c) ? !1 : !0;
        if (f) {
            if (b && U[la].userAgent[n]("Firefox") >= 0) {
                b = b[ea](/\n|\r/g, " ");
                f = 0;
                for (var i = b[s]; f < i; ++f) {
                    var m = b.charCodeAt(f) & 255;
                    if (m == 10 || m == 13)b = b[y](0, f) + "?" + b[y](f + 1)
                }
            }
            b && b[s] > 2E3 && (b = b[y](0,
                2E3), F(69));
            a = a + "=" + b + "; path=" + c + "; ";
            e && (a += "expires=" + (new Date((new Date).getTime() + e)).toGMTString() + "; ");
            d && (a += "domain=" + d + ";");
            I.cookie = a
        }
    };
    var Fc, Gc, Hc = function () {
        if (!Fc) {
            var a = {}, b = U[la], c = U.screen;
            a.D = c ? c.width + "x" + c.height : "-";
            a.C = c ? c.colorDepth + "-bit" : "-";
            a.language = (b && (b.language || b.browserLanguage) || "-")[B]();
            a.javaEnabled = b && b.javaEnabled() ? 1 : 0;
            a.characterSet = I.characterSet || I.charset || "-";
            Fc = a
        }
    }, Ic = function () {
        Hc();
        for (var a = Fc, b = U[la], a = b.appName + b.version + a.language + b.platform + b.userAgent + a.javaEnabled + a.D + a.C + (I.cookie ? I.cookie : "") + (I.referrer ? I.referrer : ""), b = a[s], c = U.history[s]; c > 0;)a += c-- ^ b++;
        return oa(a)
    }, Jc = function (a) {
        Hc();
        var b = Fc;
        a.set(mb, b.D);
        a.set(nb, b.C);
        a.set(qb, b.language);
        a.set(rb, b.characterSet);
        a.set(ob, b.javaEnabled);
        if (a.get(Na) && a.get(Oa)) {
            if (!(b = Gc)) {
                var c, d, e;
                d = "ShockwaveFlash";
                if ((b = (b = U[la]) ? b.plugins : g) && b[s] > 0)for (c = 0; c < b[s] && !e; c++)d = b[c], d[o][n]("Shockwave Flash") > -1 && (e = d.description[u]("Shockwave Flash ")[1]); else {
                    d = d + "." + d;
                    try {
                        c = new ActiveXObject(d + ".7"), e = c.GetVariable("$version")
                    } catch (f) {
                    }
                    if (!e)try {
                        c = new ActiveXObject(d + ".6"), e = "WIN 6,0,21,0", c.AllowScriptAccess = "always", e = c.GetVariable("$version")
                    } catch (i) {
                    }
                    if (!e)try {
                        c =
                            new ActiveXObject(d), e = c.GetVariable("$version")
                    } catch (m) {
                    }
                    e && (e = e[u](" ")[1][u](","), e = e[0] + "." + e[1] + " r" + e[2])
                }
                b = e ? e : "-"
            }
            Gc = b;
            a.set(pb, Gc)
        } else a.set(pb, "-")
    };
    var X = function () {
        Q(X[t], "push", X[t][k], 5);
        Q(X[t], "_createAsyncTracker", X[t].va, 33);
        Q(X[t], "_getAsyncTracker", X[t].wa, 34);
        this.q = 0
    };
    X[t].va = function (a, b) {
        return J.k(a, b || "")
    };
    X[t].wa = function (a) {
        return J.o(a)
    };
    X[t].push = function (a) {
        this.q > 0 && F(105);
        this.q++;
        for (var b = arguments, c = 0, d = 0; d < b[s]; d++)try {
            if (typeof b[d] === "function")b[d](); else {
                var e = "", f = b[d][0], i = f.lastIndexOf(".");
                i > 0 && (e = f[y](0, i), f = f[y](i + 1));
                var m = e == "_gat" ? J : e == "_gaq" ? Kc : J.o(e);
                m[f].apply(m, b[d][da](1))
            }
        } catch (p) {
            c++
        }
        this.q--;
        return c
    };
    var Nc = function () {
        function a(a, b, c, d) {
            g == f[a] && (f[a] = {});
            g == f[a][b] && (f[a][b] = []);
            f[a][b][c] = d
        }

        function b(a, b, c) {
            if (g != f[a] && g != f[a][b])return f[a][b][c]
        }

        function c(a, b) {
            if (g != f[a] && g != f[a][b]) {
                f[a][b] = g;
                var c = !0, d;
                for (d = 0; d < i[s]; d++)if (g != f[a][i[d]]) {
                    c = !1;
                    break
                }
                c && (f[a] = g)
            }
        }

        function d(a) {
            var b = "", c = !1, d, e;
            for (d = 0; d < i[s]; d++)if (e = a[i[d]], g != e) {
                c && (b += i[d]);
                for (var c = [], f = g, Y = g, Y = 0; Y < e[s]; Y++)if (g != e[Y]) {
                    f = "";
                    Y != Z && g == e[Y - 1] && (f += Y[r]() + ka);
                    for (var Oc = e[Y], Pc = "", vb = g, Yb = g, Zb = g, vb = 0; vb < Oc[s]; vb++)Yb =
                        Oc[l](vb), Zb = z[Yb], Pc += g != Zb ? Zb : Yb;
                    f += Pc;
                    c[k](f)
                }
                b += m + c[A](q) + p;
                c = !1
            } else c = !0;
            return b
        }

        var e = this, f = [], i = ["k", "v"], m = "(", p = ")", q = "*", ka = "!", z = {"'": "'0"};
        z[p] = "'1";
        z[q] = "'2";
        z[ka] = "'3";
        var Z = 1;
        e.qa = function (a) {
            return g != f[a]
        };
        e.n = function () {
            for (var a = "", b = 0; b < f[s]; b++)g != f[b] && (a += b[r]() + d(f[b]));
            return a
        };
        e.pa = function (a) {
            if (a == g)return e.n();
            for (var b = a.n(), c = 0; c < f[s]; c++)g != f[c] && !a.qa(c) && (b += c[r]() + d(f[c]));
            return b
        };
        e.e = function (b, c, d) {
            if (!Lc(d))return!1;
            a(b, "k", c, d);
            return!0
        };
        e.j = function (b, c, d) {
            if (!Mc(d))return!1;
            a(b, "v", c, d[r]());
            return!0
        };
        e.getKey = function (a, c) {
            return b(a, "k", c)
        };
        e.z = function (a, c) {
            return b(a, "v", c)
        };
        e.v = function (a) {
            c(a, "k")
        };
        e.w = function (a) {
            c(a, "v")
        };
        Q(e, "_setKey", e.e, 89);
        Q(e, "_setValue", e.j, 90);
        Q(e, "_getKey", e.getKey, 87);
        Q(e, "_getValue", e.z, 88);
        Q(e, "_clearKey", e.v, 85);
        Q(e, "_clearValue", e.w, 86)
    };

    function Lc(a) {
        return typeof a == "string"
    }

    function Mc(a) {
        return typeof a != "number" && (g == Number || !(a instanceof Number)) || j.round(a) != a || a == NaN || a == Infinity ? !1 : !0
    };
    var Qc = function (a) {
        var b = U.gaGlobal;
        a && !b && (U.gaGlobal = b = {});
        return b
    }, Rc = function () {
        var a = Qc(!0).hid;
        if (a == h)a = pa(), Qc(!0).hid = a;
        return a
    }, Sc = function (a) {
        a.set(lb, Rc());
        var b = Qc();
        if (b && b.dh == a.get(L)) {
            var c = b.sid;
            c && (c == "0" && F(112), a.set(yb, c), a.get(sb) && a.set(xb, c));
            b = b.vid;
            a.get(sb) && b && (b = b[u]("."), b[1] * 1 || F(112), a.set(O, b[0] * 1), a.set(wb, b[1] * 1))
        }
    };
    var Tc, Uc = function (a, b, c) {
        var d = a[x](Ga, ""), e = a[x](M, "/"), a = a.b(Ha, 0);
        W(b, c, e, d, a)
    }, kc = function (a) {
        var b = a[x](Ga, "");
        a.b(L, 1);
        var c = a[x](M, "/");
        W("__utma", pc(a), c, b, a.get(Ha));
        W("__utmb", qc(a), c, b, a.get(Ia));
        W("__utmc", "" + a.b(L, 1), c, b);
        var d = vc(a, !0);
        d ? W("__utmz", d, c, b, a.get(Ja)) : W("__utmz", "", c, b, -1);
        (d = sc(a, !1)) ? W("__utmv", d, c, b, a.get(Ha)) : W("__utmv", "", c, b, -1)
    }, jc = function (a) {
        var b = a.b(L, 1);
        if (!oc(a, mc(b, V("__utma"))))return a.set(ub, !0), !1;
        var c = !rc(a, mc(b, V("__utmb")));
        a.set(Bb, c);
        xc(a, mc(b,
            V("__utmz")));
        tc(a, mc(b, V("__utmv")));
        Tc = !c;
        return!0
    }, Vc = function (a) {
        !Tc && !(V("__utmb")[s] > 0) && (W("__utmd", "1", a[x](M, "/"), a[x](Ga, ""), 1E4), V("__utmd")[s] == 0 && a[v]())
    };
    var Yc = function (a) {
        a.get(O) == g ? Wc(a) : a.get(ub) && !a.get(cc) ? Wc(a) : a.get(Bb) && Xc(a)
    }, Zc = function (a) {
        a.get(Hb) && !a.get(Ab) && (Xc(a), a.set(Fb, a.get(zb)))
    }, Wc = function (a) {
        var b = a.get(Fa);
        a.set(sb, !0);
        a.set(O, pa() ^ Ic(a) & 2147483647);
        a.set(tb, "");
        a.set(wb, b);
        a.set(xb, b);
        a.set(yb, b);
        a.set(zb, 1);
        a.set(Ab, !0);
        a.set(Cb, 0);
        a.set(P, 10);
        a.set(Db, b);
        a.set(N, []);
        a.set(ub, !1);
        a.set(Bb, !1)
    }, Xc = function (a) {
        a.set(xb, a.get(yb));
        a.set(yb, a.get(Fa));
        a.m(zb);
        a.set(Ab, !0);
        a.set(Cb, 0);
        a.set(P, 10);
        a.set(Db, a.get(Fa));
        a.set(Bb,
            !1)
    };
    var $c = "daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(","), fd = function (a) {
        if (a.get(Pa) && !a.get(cc)) {
            for (var b = !D(a.get(Ib)) || !D(a.get(Mb)) || !D(a.get(Kb)) || !D(a.get(Lb)), c = {}, d = 0; d < ad[s]; d++) {
                var e = ad[d];
                c[e] = a.get(e)
            }
            d = wa(I[w].href, a.get(La));
            if (!(ta(d.c.get(a.get(Ya))) == "1" && b) && (!bd(a, d) && !cd(a) && !b && a.get(Ab) && a.get(Ab) && dd(a, g, "(direct)", g, g, "(direct)", "(none)", g, g), a.set(Hb, ed(a, c)), b = a.get(Mb) == "(direct)" && a.get(Jb) == "(direct)" && a.get(Nb) == "(none)", a.get(Hb) || a.get(Ab) && !b))a.set(Eb, a.get(Fa)), a.set(Fb, a.get(zb)), a.m(Gb)
        }
    }, bd = function (a, b) {
        function c(c, d) {
            var d = d || "-", e = ta(b.c.get(a.get(c)));
            return e && e != "-" ? G(e) : d
        }

        var d = ta(b.c.get(a.get(Ra))) || "-", e = ta(b.c.get(a.get(Ua))) || "-", f = ta(b.c.get(a.get(Ta))) ||
            "-", i = ta(b.c.get("dclid")) || "-", m = c(Sa, "(not set)"), p = c(Va, "(not set)"), q = c(Wa), ka = c(Xa);
        if (D(d) && D(f) && D(i) && D(e))return!1;
        if (D(q)) {
            var z = ya(a.get(kb), a.get(M)), z = wa(z, !0);
            (z = gd(a, z)) && !D(z[1] && !z[2]) && (q = z[1])
        }
        dd(a, d, e, f, i, m, p, q, ka);
        return!0
    }, cd = function (a) {
        var b = ya(a.get(kb), a.get(M)), c = wa(b, !0);
        if (!(b != g && b != h && b != "" && b != "0" && b != "-" && b[n]("://") >= 0) || c && c[ia][n]("google") > -1 && c.c.contains("q") && c.path == "cse")return!1;
        if ((b = gd(a, c)) && !b[2])return dd(a, g, b[0], g, g, "(organic)", "organic", b[1], g), !0;
        else if (b)return!1;
        if (a.get(Ab))a:{
            for (var b = a.get(eb), d = va(c[ia]), e = 0; e < b[s]; ++e)if (d[n](b[e]) > -1) {
                a = !1;
                break a
            }
            dd(a, g, d, g, g, "(referral)", "referral", g, "/" + c.path);
            a = !0
        } else a = !1;
        return a
    }, gd = function (a, b) {
        for (var c = a.get(cb), d = 0; d < c[s]; ++d) {
            var e = c[d][u](":");
            if (b[ia][n](e[0][B]()) > -1) {
                var f = H(b.c.get(e[1]));
                if (f && (!e[3] || b.url[n](e[3]) > -1)) {
                    a:{
                        for (var c = f, d = a.get(db), c = G(c)[B](), i = 0; i < d[s]; ++i)if (c == d[i]) {
                            c = !0;
                            break a
                        }
                        c = !1
                    }
                    return[e[2] || e[0], f, c]
                }
            }
        }
        return h
    }, dd = function (a, b, c, d, e, f, i, m, p) {
        a.set(Ib,
            b);
        a.set(Mb, c);
        a.set(Kb, d);
        a.set(Lb, e);
        a.set(Jb, f);
        a.set(Nb, i);
        a.set(Ob, m);
        a.set(Pb, p)
    }, ad = [Jb, Ib, Kb, Lb, Mb, Nb, Ob, Pb], ed = function (a, b) {
        function c(a) {
            a = ("" + a)[u]("+")[A]("%20");
            return a = a[u](" ")[A]("%20")
        }

        function d(c) {
            var d = "" + (a.get(c) || ""), c = "" + (b[c] || "");
            return d[s] > 0 && d == c
        }

        var e = !1;
        if (d(Kb) || d(Lb))e = !0;
        for (var f = 0; f < ad[s]; f++) {
            var i = ad[f], m = b[i] || "-", i = a.get(i) || "-";
            if (c(m) != c(i))return e && F(131), !0
        }
        return!1
    };
    var id = function (a) {
        hd(a, I[w].href) ? (a.set(cc, !0), F(12)) : a.set(cc, !1)
    }, hd = function (a, b) {
        if (!a.get(Ka))return!1;
        var c = wa(b, a.get(La)), d = H(c.c.get("__utma")), e = H(c.c.get("__utmb")), f = H(c.c.get("__utmc")), i = H(c.c.get("__utmx")), m = H(c.c.get("__utmz")), p = H(c.c.get("__utmv")), c = H(c.c.get("__utmk"));
        if (oa("" + d + e + f + i + m + p) != c) {
            d = G(d);
            e = G(e);
            f = G(f);
            i = G(i);
            a:{
                for (var f = d + e + f + i, q = 0; q < 3; q++) {
                    for (var ka = 0; ka < 3; ka++) {
                        if (c == oa(f + m + p)) {
                            F(127);
                            c = [m, p];
                            break a
                        }
                        var z = m[ea](/ /g, "%20"), Z = p[ea](/ /g, "%20");
                        if (c == oa(f + z +
                            Z)) {
                            F(128);
                            c = [z, Z];
                            break a
                        }
                        z = z[ea](/\+/g, "%20");
                        Z = Z[ea](/\+/g, "%20");
                        if (c == oa(f + z + Z)) {
                            F(129);
                            c = [z, Z];
                            break a
                        }
                        m = G(m)
                    }
                    p = G(p)
                }
                c = g
            }
            if (!c)return!1;
            m = c[0];
            p = c[1]
        }
        if (!oc(a, d, !0))return!1;
        rc(a, e, !0);
        xc(a, m, !0);
        tc(a, p, !0);
        jd(a, i, !0);
        return!0
    }, ld = function (a, b, c) {
        var d;
        d = pc(a) || "-";
        var e = qc(a) || "-", f = "" + a.b(L, 1) || "-", i = kd(a) || "-", m = vc(a, !1) || "-", a = sc(a, !1) || "-", p = oa("" + d + e + f + i + m + a), q = [];
        q[k]("__utma=" + d);
        q[k]("__utmb=" + e);
        q[k]("__utmc=" + f);
        q[k]("__utmx=" + i);
        q[k]("__utmz=" + m);
        q[k]("__utmv=" + a);
        q[k]("__utmk=" +
            p);
        d = q[A]("&");
        if (!d)return b;
        e = b[n]("#");
        return c ? e < 0 ? b + "#" + d : b + "&" + d : (c = "", f = b[n]("?"), e > 0 && (c = b[y](e), b = b[y](0, e)), f < 0 ? b + "?" + d + c : b + "&" + d + c)
    };
    var md = "|", od = function (a, b, c, d, e, f, i, m, p) {
        var q = nd(a, b);
        q || (q = {}, a.get(fb)[k](q));
        q.id_ = b;
        q.affiliation_ = c;
        q.total_ = d;
        q.tax_ = e;
        q.shipping_ = f;
        q.city_ = i;
        q.state_ = m;
        q.country_ = p;
        q.items_ = q.items_ || [];
        return q
    }, pd = function (a, b, c, d, e, f, i) {
        var a = nd(a, b) || od(a, b, "", 0, 0, 0, "", "", ""), m;
        a:{
            if (a && a.items_) {
                m = a.items_;
                for (var p = 0; p < m[s]; p++)if (m[p].sku_ == c) {
                    m = m[p];
                    break a
                }
            }
            m = h
        }
        p = m || {};
        p.transId_ = b;
        p.sku_ = c;
        p.name_ = d;
        p.category_ = e;
        p.price_ = f;
        p.quantity_ = i;
        m || a.items_[k](p);
        return p
    }, nd = function (a, b) {
        for (var c =
            a.get(fb), d = 0; d < c[s]; d++)if (c[d].id_ == b)return c[d];
        return h
    };
    var qd, rd = function (a) {
        var f;
        var e;
        if (!qd) {
            var b;
            b = I[w].hash;
            var c = U[o], d = /^#?gaso=([^&]*)/;
            if (f = (e = (b = b && b[ha](d) || c && c[ha](d)) ? b[1] : H(V("GASO")), b = e) && b[ha](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i), c = f)if (Uc(a, "GASO", "" + b), J._gasoDomain = a.get(Ga), J._gasoCPath = a.get(M), b = "https://" + ((c[1] || "www") + ".google.com") + "/analytics/reporting/overlay_js?gaso=" + c[2] + "&" + pa())a = I.createElement("script"), a.type = "text/javascript", a.async = !0, a.src = b, a.id = "_gasojs", a.onload = g, b = I.getElementsByTagName("script")[0],
                b.parentNode.insertBefore(a, b);
            qd = !0
        }
    };
    var jd = function (a, b, c) {
        c && (b = G(b));
        c = a.b(L, 1);
        b = b[u](".");
        !(b[s] < 2) && /^\d+$/.test(b[0]) && (b[0] = "" + c, Uc(a, "__utmx", b[A](".")))
    }, kd = function (a, b) {
        var c = mc(a.get(L), V("__utmx"));
        c == "-" && (c = "");
        return b ? E(c) : c
    };
    var vd = function (a, b) {
        if (a.b(O, 0) % 100 >= a.b(bc, 0))return!1;
        var c = sd();
        c == g && (c = td());
        if (c == g || c == Infinity || isNaN(c))return!1;
        c > 0 ? b(ud(c)) : ra(U, "load", function () {
            vd(a, b)
        }, !1);
        return!0
    }, ud = function (a) {
        var b = new Nc, c = j.min(j.floor(a / 100), 5E3);
        b.e(14, 1, c > 0 ? c + "00" : "0");
        b.j(14, 1, a);
        return b
    }, sd = function () {
        var a = U.performance || U.webkitPerformance;
        return(a = a && a.timing) && a.loadEventStart - a.fetchStart
    }, td = function () {
        if (U.top == U) {
            var a = U.external, b = a && a.onloadT;
            a && !a.isValidLoadTime && (b = g);
            b > 2147483648 && (b = g);
            b > 0 && a.setPageReadyTime();
            return b
        }
    };
    var R = function (a, b, c) {
        function d(a) {
            return function (b) {
                if ((b = b.get(dc)[a]) && b[s])for (var c = fc(e, a), d = 0; d < b[s]; d++)b[d].call(e, c)
            }
        }

        var e = this;
        this.a = new lc;
        this.get = function (a) {
            return this.a.get(a)
        };
        this.set = function (a, b, c) {
            this.a.set(a, b, c)
        };
        this.set(Ca, b || "UA-XXXXX-X");
        this.set(Ea, a || "");
        this.set(Da, c || "");
        this.set(Fa, j.round((new Date).getTime() / 1E3));
        this.set(M, "/");
        this.set(Ha, 63072E6);
        this.set(Ja, 15768E6);
        this.set(Ia, 18E5);
        this.set(Ka, !1);
        this.set(bb, 50);
        this.set(La, !1);
        this.set(Ma, !0);
        this.set(Na,
            !0);
        this.set(Oa, !0);
        this.set(Pa, !0);
        this.set(Qa, !0);
        this.set(Sa, "utm_campaign");
        this.set(Ra, "utm_id");
        this.set(Ta, "gclid");
        this.set(Ua, "utm_source");
        this.set(Va, "utm_medium");
        this.set(Wa, "utm_term");
        this.set(Xa, "utm_content");
        this.set(Ya, "utm_nooverride");
        this.set(Za, 100);
        this.set(bc, 10);
        this.set($a, "/__utm.gif");
        this.set(ab, 1);
        this.set(fb, []);
        this.set(N, []);
        this.set(cb, $c);
        this.set(db, []);
        this.set(eb, []);
        this.s("auto");
        this.set(kb, I.referrer);
        this.set(dc, {hit: [], load: []});
        this.a.g("0", id);
        this.a.g("1",
            Yc);
        this.a.g("2", fd);
        this.a.g("3", Zc);
        this.a.g("4", d("load"));
        this.a.g("5", rd);
        this.a.d("A", zc);
        this.a.d("B", Bc);
        this.a.d("C", Yc);
        this.a.d("D", yc);
        this.a.d("E", hc);
        this.a.d("F", wd);
        this.a.d("G", Vc);
        this.a.d("H", Cc);
        this.a.d("I", Jc);
        this.a.d("J", Sc);
        this.a.d("K", d("hit"));
        this.a.d("L", xd);
        this.a.d("M", yd);
        this.get(Fa) === 0 && F(111);
        this.a.G()
    };
    C = R[t];
    C.h = function () {
        var a = this.get(gb);
        a || (a = new Nc, this.set(gb, a));
        return a
    };
    C.oa = function (a) {
        for (var b in a) {
            var c = a[b];
            a.hasOwnProperty(b) && typeof c != "function" && this.set(b, c, !0)
        }
    };
    C.ka = function (a) {
        a && a != g && (a.constructor + "")[n]("String") > -1 ? (F(13), this.set(ib, a, !0)) : typeof a === "object" && a !== h && this.oa(a);
        this.a.f("page")
    };
    C.u = function (a, b, c, d, e) {
        if (a == "" || !Lc(a) || b == "" || !Lc(b))return!1;
        if (c != g && !Lc(c))return!1;
        if (d != g && !Mc(d))return!1;
        this.set(Tb, a, !0);
        this.set(Ub, b, !0);
        this.set(Vb, c, !0);
        this.set(Wb, d, !0);
        this.set(Sb, !!e, !0);
        this.a.f("event");
        return!0
    };
    C.la = function (a, b, c, d) {
        if (!a || !b)return!1;
        this.set(Xb, a, !0);
        this.set($b, b, !0);
        this.set(ac, c || I[w].href, !0);
        d && this.set(ib, d, !0);
        this.a.f("social");
        return!0
    };
    C.ja = function () {
        var a = this;
        return vd(this.a, function (b) {
            a.t(b)
        })
    };
    C.ma = function () {
        this.a.f("trans")
    };
    C.t = function (a) {
        this.set(hb, a, !0);
        this.a.f("event")
    };
    C.S = function (a) {
        this.l();
        var b = this;
        return{_trackEvent: function (c, d, e) {
            F(91);
            b.u(a, c, d, e)
        }}
    };
    C.V = function (a) {
        return this.get(a)
    };
    C.da = function (a, b) {
        if (a)if (a != g && (a.constructor + "")[n]("String") > -1)this.set(a, b); else if (typeof a == "object")for (var c in a)a.hasOwnProperty(c) && this.set(c, a[c])
    };
    C.addEventListener = function (a, b) {
        var c = this.get(dc)[a];
        c && c[k](b)
    };
    C.removeEventListener = function (a, b) {
        for (var c = this.get(dc)[a], d = 0; c && d < c[s]; d++)if (c[d] == b) {
            c.splice(d, 1);
            break
        }
    };
    C.X = function () {
        return"5.1.7"
    };
    C.s = function (a) {
        this.get(Ma);
        a = a == "auto" ? va(I.domain) : !a || a == "-" || a == "none" ? "" : a[B]();
        this.set(Ga, a)
    };
    C.ba = function (a) {
        this.set(Ma, !!a)
    };
    C.W = function (a, b) {
        return ld(this.a, a, b)
    };
    C.link = function (a, b) {
        if (this.a.get(Ka) && a) {
            var c = ld(this.a, a, b);
            I[w].href = c
        }
    };
    C.aa = function (a, b) {
        this.a.get(Ka) && a && a.action && (a.action = ld(this.a, a.action, b))
    };
    C.ea = function () {
        this.l();
        var a = this.a, b = I.getElementById ? I.getElementById("utmtrans") : I.utmform && I.utmform.utmtrans ? I.utmform.utmtrans : h;
        if (b && b[ga]) {
            a.set(fb, []);
            for (var b = b[ga][u]("UTM:"), c = 0; c < b[s]; c++) {
                b[c] = na(b[c]);
                for (var d = b[c][u](md), e = 0; e < d[s]; e++)d[e] = na(d[e]);
                "T" == d[0] ? od(a, d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]) : "I" == d[0] && pd(a, d[1], d[2], d[3], d[4], d[5], d[6])
            }
        }
    };
    C.L = function (a, b, c, d, e, f, i, m) {
        return od(this.a, a, b, c, d, e, f, i, m)
    };
    C.J = function (a, b, c, d, e, f) {
        return pd(this.a, a, b, c, d, e, f)
    };
    C.fa = function (a) {
        md = a || "|"
    };
    C.ca = function (a, b, c, d) {
        var e = this.a;
        if (a <= 0 || a > e.get(bb))a = !1; else if (!b || !c || E(b)[s] + E(c)[s] > 64)a = !1; else {
            d != 1 && d != 2 && (d = 3);
            var f = {};
            ca(f, b);
            f.value = c;
            f.scope = d;
            e.get(N)[a] = f;
            a = !0
        }
        a && this.a.i();
        return a
    };
    C.U = function (a) {
        this.a.get(N)[a] = g;
        this.a.i()
    };
    C.Y = function (a) {
        return(a = this.a.get(N)[a]) && a[ja] == 1 ? a[ga] : g
    };
    C.ha = function (a, b, c) {
        this.h().e(a, b, c)
    };
    C.ia = function (a, b, c) {
        this.h().j(a, b, c)
    };
    C.Z = function (a, b) {
        return this.h().getKey(a, b)
    };
    C.$ = function (a, b) {
        return this.h().z(a, b)
    };
    C.P = function (a) {
        this.h().v(a)
    };
    C.Q = function (a) {
        this.h().w(a)
    };
    C.T = function () {
        return new Nc
    };
    C.H = function (a) {
        a && this.get(db)[k](a[B]())
    };
    C.M = function () {
        this.set(db, [])
    };
    C.I = function (a) {
        a && this.get(eb)[k](a[B]())
    };
    C.N = function () {
        this.set(eb, [])
    };
    C.K = function (a, b, c, d, e) {
        if (a && b) {
            a = [a, b[B]()][A](":");
            if (d || e)a = [a, d, e][A](":");
            d = this.get(cb);
            d.splice(c ? 0 : d[s], 0, a)
        }
    };
    C.O = function () {
        this.set(cb, [])
    };
    C.R = function (a) {
        this.a[fa]();
        var b = this.get(M), c = kd(this.a);
        this.set(M, a);
        this.a.i();
        jd(this.a, c);
        this.set(M, b)
    };
    C.l = function () {
        this.a[fa]()
    };
    C.ga = function (a) {
        a && a != "" && (this.set(tb, a), this.a.f("var"))
    };
    var wd = function (a) {
        a.get(Qb) !== "trans" && a.b(Cb, 0) >= 500 && a[v]();
        if (a.get(Qb) === "event") {
            var b = (new Date).getTime(), c = a.b(Db, 0), d = a.b(yb, 0), c = j.floor(0.2 * ((b - (c != d ? c : c * 1E3)) / 1E3));
            c > 0 && (a.set(Db, b), a.set(P, j.min(10, a.b(P, 0) + c)));
            a.b(P, 0) <= 0 && a[v]()
        }
    }, yd = function (a) {
        a.get(Qb) === "event" && a.set(P, j.max(0, a.b(P, 10) - 1))
    };
    var zd = function () {
        var a = [];
        this.add = function (b, c, d) {
            d && (c = E("" + c));
            a[k](b + "=" + c)
        };
        this.toString = function () {
            return a[A]("&")
        }
    }, Ad = function (a, b) {
        (b || a.get(ab) != 2) && a.m(Cb)
    }, Bd = function (a, b) {
        b.add("utmwv", "5.1.7");
        b.add("utms", a.get(Cb));
        b.add("utmn", pa());
        var c = I[w].hostname;
        D(c) || b.add("utmhn", c, !0);
        c = a.get(Za);
        c != 100 && b.add("utmsp", c, !0)
    }, Dd = function (a, b) {
        b.add("utmac", a.get(Ca));
        a.get(Sb) && b.add("utmni", 1);
        Cd(a, b);
        J.p && b.add("aip", 1);
        b.add("utmu", Dc.ya())
    }, Cd = function (a, b) {
        function c(a, b) {
            b && d[k](a +
                "=" + b + ";")
        }

        var d = [];
        c("__utma", pc(a));
        c("__utmz", vc(a, !1));
        c("__utmv", sc(a, !0));
        c("__utmx", kd(a));
        b.add("utmcc", d[A]("+"), !0)
    }, Ed = function (a, b) {
        a.get(Na) && (b.add("utmcs", a.get(rb), !0), b.add("utmsr", a.get(mb)), b.add("utmsc", a.get(nb)), b.add("utmul", a.get(qb)), b.add("utmje", a.get(ob)), b.add("utmfl", a.get(pb), !0))
    }, Fd = function (a, b) {
        a.get(Qa) && a.get(jb) && b.add("utmdt", a.get(jb), !0);
        b.add("utmhid", a.get(lb));
        b.add("utmr", ya(a.get(kb), a.get(M)), !0);
        b.add("utmp", E(a.get(ib), !0), !0)
    }, Gd = function (a, b) {
        for (var c =
            a.get(gb), d = a.get(hb), e = a.get(N) || [], f = 0; f < e[s]; f++) {
            var i = e[f];
            i && (c || (c = new Nc), c.e(8, f, i[o]), c.e(9, f, i[ga]), i[ja] != 3 && c.e(11, f, "" + i[ja]))
        }
        !D(a.get(Tb)) && !D(a.get(Ub)) && (c || (c = new Nc), c.e(5, 1, a.get(Tb)), c.e(5, 2, a.get(Ub)), e = a.get(Vb), e != g && c.e(5, 3, e), e = a.get(Wb), e != g && c.j(5, 1, e));
        c ? b.add("utme", c.pa(d), !0) : d && b.add("utme", d.n(), !0)
    }, Hd = function (a, b, c) {
        var d = new zd;
        Ad(a, c);
        Bd(a, d);
        d.add("utmt", "tran");
        d.add("utmtid", b.id_, !0);
        d.add("utmtst", b.affiliation_, !0);
        d.add("utmtto", b.total_, !0);
        d.add("utmttx",
            b.tax_, !0);
        d.add("utmtsp", b.shipping_, !0);
        d.add("utmtci", b.city_, !0);
        d.add("utmtrg", b.state_, !0);
        d.add("utmtco", b.country_, !0);
        !c && Dd(a, d);
        return d[r]()
    }, Id = function (a, b, c) {
        var d = new zd;
        Ad(a, c);
        Bd(a, d);
        d.add("utmt", "item");
        d.add("utmtid", b.transId_, !0);
        d.add("utmipc", b.sku_, !0);
        d.add("utmipn", b.name_, !0);
        d.add("utmiva", b.category_, !0);
        d.add("utmipr", b.price_, !0);
        d.add("utmiqt", b.quantity_, !0);
        !c && Dd(a, d);
        return d[r]()
    }, Jd = function (a, b) {
        var c = a.get(Qb);
        if (c == "page")c = new zd, Ad(a, b), Bd(a, c), Gd(a, c),
            Ed(a, c), Fd(a, c), b || Dd(a, c), c = [c[r]()]; else if (c == "event")c = new zd, Ad(a, b), Bd(a, c), c.add("utmt", "event"), Gd(a, c), Ed(a, c), Fd(a, c), !b && Dd(a, c), c = [c[r]()]; else if (c == "var")c = new zd, Ad(a, b), Bd(a, c), c.add("utmt", "var"), !b && Dd(a, c), c = [c[r]()]; else if (c == "trans")for (var c = [], d = a.get(fb), e = 0; e < d[s]; ++e) {
            c[k](Hd(a, d[e], b));
            for (var f = d[e].items_, i = 0; i < f[s]; ++i)c[k](Id(a, f[i], b))
        } else c == "social" ? b ? c = [] : (c = new zd, Ad(a, b), Bd(a, c), c.add("utmt", "social"), c.add("utmsn", a.get(Xb), !0), c.add("utmsa", a.get($b), !0), c.add("utmsid",
            a.get(ac), !0), Gd(a, c), Ed(a, c), Fd(a, c), Dd(a, c), c = [c[r]()]) : c = [];
        return c
    }, xd = function (a) {
        var b, c = a.get(Rb), d = a.get(ab);
        if (d == 0 || d == 2) {
            var e = a.get($a) + "?";
            b = Jd(a, !0);
            for (var f = 0, i = b[s]; f < i; f++)Aa(b[f], d != 2 && f == i - 1 && c, e, !0)
        }
        if (d == 1 || d == 2) {
            b = Jd(a);
            f = 0;
            for (i = b[s]; f < i; f++)try {
                Aa(b[f], f == i - 1 && c)
            } catch (m) {
                m && za(m[o], g, m.message)
            }
        }
    };
    var Kd = "https:" == I[w].protocol ? "https://ssl.google-analytics.com" : "http://www.google-analytics.com", Ld = function (a) {
        ca(this, "len");
        this.message = a + "-8192"
    }, Md = function (a) {
        ca(this, "ff2post");
        this.message = a + "-2036"
    }, Aa = function (a, b, c, d) {
        b = b || qa;
        if (d || a[s] <= 2036)Nd(a, b, c); else if (a[s] <= 8192) {
            if (U[la].userAgent[n]("Firefox") >= 0 && ![].reduce)throw new Md(a[s]);
            Od(a, b) || Pd(a, b)
        } else throw new Ld(a[s]);
    }, Nd = function (a, b, c) {
        var c = c || Kd + "/__utm.gif?", d = new Image(1, 1);
        d.src = c + a;
        d.onload = function () {
            d.onload = h;
            b()
        }
    }, Od = function (a, b) {
        var c, d = Kd + "/p/__utm.gif", e = U.XDomainRequest;
        if (e)c = new e, c.open("POST", d); else if (e = U.XMLHttpRequest)e = new e, "withCredentials"in e && (c = e, c.open("POST", d, !0), c.setRequestHeader("Content-Type", "text/plain"));
        if (c)return c.onreadystatechange = function () {
            c.readyState == 4 && (b(), c = h)
        }, c.send(a), !0
    }, Pd = function (a, b) {
        if (I.body) {
            a = aa(a);
            try {
                var c = I.createElement('<iframe name="' + a + '"></iframe>')
            } catch (d) {
                c = I.createElement("iframe"), ca(c, a)
            }
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var e = I[w], e = Kd + "/u/post_iframe.html#" + aa(e.protocol + "//" + e[ia] + "/favicon.ico"), f = function () {
                c.src = "";
                c.parentNode && c.parentNode.removeChild(c)
            };
            ra(U, "beforeunload", f);
            var i = !1, m = 0, p = function () {
                if (!i) {
                    try {
                        if (m > 9 || c.contentWindow[w][ia] == I[w][ia]) {
                            i = !0;
                            f();
                            sa(U, "beforeunload", f);
                            b();
                            return
                        }
                    } catch (a) {
                    }
                    m++;
                    setTimeout(p, 200)
                }
            };
            ra(c, "load", p);
            I.body.appendChild(c);
            c.src = e
        } else Ec(function () {
            Pd(a, b)
        }, 100)
    };
    var $ = function () {
        this.p = !1;
        this.A = {};
        this.B = [];
        this.ra = 0;
        this._gasoCPath = this._gasoDomain = g;
        Q($[t], "_createTracker", $[t].k, 55);
        Q($[t], "_getTracker", $[t].ta, 0);
        Q($[t], "_getTrackerByName", $[t].o, 51);
        Q($[t], "_getTrackers", $[t].ua, 130);
        Q($[t], "_anonymizeIp", $[t].sa, 16);
        ec()
    };
    C = $[t];
    C.ta = function (a, b) {
        return this.k(a, g, b)
    };
    C.k = function (a, b, c) {
        b && F(23);
        c && F(67);
        b == g && (b = "~" + J.ra++);
        a = new R(b, a, c);
        J.A[b] = a;
        J.B[k](a);
        return a
    };
    C.o = function (a) {
        a = a || "";
        return J.A[a] || J.k(g, a)
    };
    C.ua = function () {
        return J.B[da](0)
    };
    C.sa = function () {
        this.p = !0
    };
    var Qd = function (a) {
        if (I.webkitVisibilityState == "prerender")return!1;
        a();
        return!0
    };
    var J = new $;
    var Rd = U._gat;
    Rd && typeof Rd._getTracker == "function" ? J = Rd : U._gat = J;
    var Kc = new X;
    (function (a) {
        if (!Qd(a)) {
            F(123);
            var b = !1, c = function () {
                !b && Qd(a) && (F(124), b = !0, sa(I, "webkitvisibilitychange", c))
            };
            ra(I, "webkitvisibilitychange", c)
        }
    })(function () {
        var a = U._gaq, b = !1;
        if (a && typeof a[k] == "function" && (b = Object[t][r].call(Object(a)) == "[object Array]", !b)) {
            Kc = a;
            return
        }
        U._gaq = Kc;
        b && Kc[k].apply(Kc, a)
    });
})();
