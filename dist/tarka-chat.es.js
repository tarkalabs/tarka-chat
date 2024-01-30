(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap";#tarka-chat{position:fixed;bottom:2rem;right:3rem;display:flex;flex-direction:column;align-items:flex-end;max-height:700px;z-index:1000}#tarka-chat .t-container{font-family:Inter;width:400px;border:1.5px solid var(--primary-primary-alt-subtle);border-radius:32px 32px 8px;box-shadow:-28px 48px 42px #00000008;flex-direction:column;overflow:hidden;display:none;position:relative;background:#ffffff}#tarka-chat .t-container .scroll-fade{position:absolute;width:100%;height:140px;background:var(--gradient-gradient-fade)}#tarka-chat .t-container .header{display:flex;padding:24px;justify-content:space-between;align-items:center}#tarka-chat .t-container .header .title{overflow:hidden;color:var(--primary-primary-alt);text-overflow:ellipsis;opacity:.6;font-size:18px;font-style:normal;font-weight:600;line-height:24px;letter-spacing:-.18px}#tarka-chat .t-container .header .logo{width:32px;height:32px}#tarka-chat .t-container .body{background:var(--gradient-background);padding:0 24px;min-height:200px;overflow-y:auto}#tarka-chat .t-container .body .message-container{min-height:100%;display:flex;flex-direction:column;justify-content:flex-end}#tarka-chat .t-container .body .message-container .message:first-of-type{margin-top:32px}#tarka-chat .t-container .body .message-container .message{max-width:90%}#tarka-chat .t-container .body .message-container .message .wrapper{display:flex;flex-direction:column;flex-grow:1;padding:8px;border-radius:8px}#tarka-chat .t-container .body .message-container .message .message-content{font-size:16px;font-weight:500;line-height:24px;letter-spacing:-.18px;overflow-wrap:break-word;margin:4px 0}#tarka-chat .t-container .body .message-container .message .attachment{display:flex;align-items:center;margin:4px 0}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info{display:flex;border:1px solid var(--primary-primary-subtle, #f0dafb);padding:8px;border-radius:8px}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info .attachment-file-name{font-size:14px;font-weight:700;padding:0 15px 0 5px;align-self:center;color:#333}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info .attachment-download-btn{border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:4px;padding:8px 12px;background:var(--primary-primary-subtle, #f0dafb);cursor:pointer}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info .attachment-download-btn img{width:16px;height:16px}#tarka-chat .t-container .body .message-container .message .image-container{position:relative;width:300px;height:300px;border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:15px;margin:4px 0}#tarka-chat .t-container .body .message-container .message .image-container img{width:100%;height:auto;display:block}#tarka-chat .t-container .body .message-container .message .overlay{position:absolute;top:0;right:0;display:flex;align-items:center;margin:10px;border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:4px;padding:8px 12px;background:var(--primary-primary-subtle, #f0dafb);cursor:pointer;opacity:.6}#tarka-chat .t-container .body .message-container .message .overlay img{width:16px;height:16px}#tarka-chat .t-container .body .message-container .message .overlay:hover{opacity:1}#tarka-chat .t-container .body .message-container .message .message-meta{margin:4px 0;color:var(--primary-primary-alt);font-size:12px;font-weight:400;line-height:14px;letter-spacing:.12px}#tarka-chat .t-container .body .message-container .incoming{color:var(--primary-primary-alt)}#tarka-chat .t-container .body .message-container .outgoing{margin-left:auto;color:var(--primary-primary)}#tarka-chat .t-container .footer{display:flex;justify-content:center}#tarka-chat .t-container .footer .input-container{display:flex;padding:8px 8px 8px 24px;align-items:center;width:100%}#tarka-chat .t-container .footer .input-container .chat-input{color:var(--primary-primary-alt);opacity:.7;font-size:16px;font-weight:500;line-height:20px;flex:1;border:none}#tarka-chat .t-container .footer .input-container .chat-input:focus{outline:none}#tarka-chat .t-container .footer .input-container .send-btn{width:48px;height:48px;border:none;background:transparent;display:flex;align-items:center;justify-content:center}#tarka-chat .t-container .footer .input-container .send-btn path{fill:var(--primary-primary, #9500b3)}#tarka-chat .t-container .footer .chat-loader{display:none;padding:8px}#tarka-chat .t-container .footer .chat-loader:after{content:" ";display:block;width:24px;height:24px;margin:8px;border-radius:50%;border:4px solid #9500b3;border-color:#9500b3 transparent #9500b3 transparent;animation:chat-loader 1.2s linear infinite}@keyframes chat-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}#tarka-chat .launcher{flex:none;display:flex;width:48px;height:48px;align-items:center;justify-content:center;border:none;border-radius:20px 10px 20px 20px;background:var(--primary-primary-subtle, #f0dafb);margin-top:8px}#tarka-chat .launcher .opened{display:none}#tarka-chat .tc-logo-face path{fill:var(--primary-primary-subtle, #f0dafb)}@media only screen and (max-width: 700px){#tarka-chat{bottom:10px;right:10px}#tarka-chat .t-container{width:calc(100vw - 20px)}}')),document.head.appendChild(a)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const style = "", layout = `<div id="tarka-chat">
  <div class="t-container">
    <div class="scroll-fade"></div>
    <div class="header">
      <span class="title"></span>
      <span class="logo"></span>
    </div>
    <div class="body">
      <div class="message-container"></div>
    </div>
    <div class="footer">
      <div class="input-container">
        <input
          type="text"
          name="message"
          placeholder="Write a message..."
          class="chat-input"
        />
        <button class="send-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.3059 9.26075C21.5647 10.3894 21.5647 13.6106 19.3059 14.7392L7.44461 20.6659C4.92862 21.9231 2.18886 19.4122 3.22484 16.7987L4.67997 13.1279C4.96718 12.4034 4.96718 11.5966 4.67997 10.8721L3.22484 7.20124C2.18885 4.58776 4.92863 2.07693 7.44461 3.33408L19.3059 9.26075Z"
              fill="#9500B3"
            />
          </svg>
        </button>
      </div>
      <div class="chat-loader"></div>
    </div>
  </div>
  <button class="launcher">
    <div class="closed"></div>
    <svg
      class="opened"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M9.68834 13.3416C8.9027 14.5787 7.09737 14.5787 6.31174 13.3416L0.424876 4.07222C-0.420758 2.74069 0.535813 1.00001 2.11317 1.00001L13.8869 1.00001C15.4643 1.00001 16.4208 2.74069 15.5752 4.07222L9.68834 13.3416Z"
        fill="#43214A"
      />
    </svg>
  </button>
</div>
`;
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lottie$1 = { exports: {} };
(function(module, exports) {
  typeof navigator < "u" && function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(e) {
      _useWebWorker = !!e;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(e) {
      locationHref = e;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(t) {
      return document.createElement(t);
    }
    function extendPrototype(t, e) {
      var r, i = t.length, s;
      for (r = 0; r < i; r += 1) {
        s = t[r].prototype;
        for (var a in s)
          Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a]);
      }
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var audioControllerFactory = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
      }
      return t.prototype = {
        addAudio: function(r) {
          this.audios.push(r);
        },
        pause: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].pause();
        },
        resume: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].resume();
        },
        setRate: function(r) {
          var i, s = this.audios.length;
          for (i = 0; i < s; i += 1)
            this.audios[i].setRate(r);
        },
        createAudio: function(r) {
          return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
            src: [r]
          }) : {
            isPlaying: !1,
            play: function() {
              this.isPlaying = !0;
            },
            seek: function() {
              this.isPlaying = !1;
            },
            playing: function() {
            },
            rate: function() {
            },
            setVolume: function() {
            }
          };
        },
        setAudioFactory: function(r) {
          this.audioFactory = r;
        },
        setVolume: function(r) {
          this._volume = r, this._updateVolume();
        },
        mute: function() {
          this._isMuted = !0, this._updateVolume();
        },
        unmute: function() {
          this._isMuted = !1, this._updateVolume();
        },
        getVolume: function() {
          return this._volume;
        },
        _updateVolume: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }, function() {
        return new t();
      };
    }(), createTypedArray = function() {
      function t(r, i) {
        var s = 0, a = [], n;
        switch (r) {
          case "int16":
          case "uint8c":
            n = 1;
            break;
          default:
            n = 1.1;
            break;
        }
        for (s = 0; s < i; s += 1)
          a.push(n);
        return a;
      }
      function e(r, i) {
        return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function createSizedArray(t) {
      return Array.apply(null, {
        length: t
      });
    }
    function _typeof$6(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
        return typeof r;
      } : _typeof$6 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$6(t);
    }
    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, r = t.length;
      for (e = 0; e < r; e += 1)
        BMMath[t[e]] = Math[t[e]];
    })(), BMMath.random = Math.random, BMMath.abs = function(t) {
      var e = _typeof$6(t);
      if (e === "object" && t.length) {
        var r = createSizedArray(t.length), i, s = t.length;
        for (i = 0; i < s; i += 1)
          r[i] = Math.abs(t[i]);
        return r;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t, e, r, i) {
      this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, r, i) {
      this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, r) {
      this.type = t, this.firstFrame = e, this.totalFrames = r;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    var createElementID = function() {
      var t = 0;
      return function() {
        return t += 1, idPrefix$1 + "__lottie_element_" + t;
      };
    }();
    function HSVtoRGB(t, e, r) {
      var i, s, a, n, l, o, p, g;
      switch (n = Math.floor(t * 6), l = t * 6 - n, o = r * (1 - e), p = r * (1 - l * e), g = r * (1 - (1 - l) * e), n % 6) {
        case 0:
          i = r, s = g, a = o;
          break;
        case 1:
          i = p, s = r, a = o;
          break;
        case 2:
          i = o, s = r, a = g;
          break;
        case 3:
          i = o, s = p, a = r;
          break;
        case 4:
          i = g, s = o, a = r;
          break;
        case 5:
          i = r, s = o, a = p;
          break;
      }
      return [i, s, a];
    }
    function RGBtoHSV(t, e, r) {
      var i = Math.max(t, e, r), s = Math.min(t, e, r), a = i - s, n, l = i === 0 ? 0 : a / i, o = i / 255;
      switch (i) {
        case s:
          n = 0;
          break;
        case t:
          n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
          break;
        case e:
          n = r - t + a * 2, n /= 6 * a;
          break;
        case r:
          n = t - e + a * 4, n /= 6 * a;
          break;
      }
      return [n, l, o];
    }
    function addSaturationToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    var rgbToHex = function() {
      var t = [], e, r;
      for (e = 0; e < 256; e += 1)
        r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
      return function(i, s, a) {
        return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[i] + t[s] + t[a];
      };
    }(), setSubframeEnabled = function(e) {
      subframeEnabled = !!e;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(e) {
      expressionsPlugin = e;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(e) {
      expressionsInterfaces = e;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(e) {
      defaultCurveSegments = e;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(e) {
      idPrefix$1 = e;
    };
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function _typeof$5(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
        return typeof r;
      } : _typeof$5 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$5(t);
    }
    var dataManager = function() {
      var t = 1, e = [], r, i, s = {
        onmessage: function() {
        },
        postMessage: function(x) {
          r({
            data: x
          });
        }
      }, a = {
        postMessage: function(x) {
          s.onmessage({
            data: x
          });
        }
      };
      function n(c) {
        if (window.Worker && window.Blob && getWebWorker()) {
          var x = new Blob(["var _workerSelf = self; self.onmessage = ", c.toString()], {
            type: "text/javascript"
          }), b = URL.createObjectURL(x);
          return new Worker(b);
        }
        return r = c, s;
      }
      function l() {
        i || (i = n(function(x) {
          function b() {
            function M(L, E) {
              var T, A, C = L.length, V, I, O, q;
              for (A = 0; A < C; A += 1)
                if (T = L[A], "ks" in T && !T.completed) {
                  if (T.completed = !0, T.hasMask) {
                    var j = T.masksProperties;
                    for (I = j.length, V = 0; V < I; V += 1)
                      if (j[V].pt.k.i)
                        S(j[V].pt.k);
                      else
                        for (q = j[V].pt.k.length, O = 0; O < q; O += 1)
                          j[V].pt.k[O].s && S(j[V].pt.k[O].s[0]), j[V].pt.k[O].e && S(j[V].pt.k[O].e[0]);
                  }
                  T.ty === 0 ? (T.layers = f(T.refId, E), M(T.layers, E)) : T.ty === 4 ? y(T.shapes) : T.ty === 5 && G(T);
                }
            }
            function u(L, E) {
              if (L) {
                var T = 0, A = L.length;
                for (T = 0; T < A; T += 1)
                  L[T].t === 1 && (L[T].data.layers = f(L[T].data.refId, E), M(L[T].data.layers, E));
              }
            }
            function d(L, E) {
              for (var T = 0, A = E.length; T < A; ) {
                if (E[T].id === L)
                  return E[T];
                T += 1;
              }
              return null;
            }
            function f(L, E) {
              var T = d(L, E);
              return T ? T.layers.__used ? JSON.parse(JSON.stringify(T.layers)) : (T.layers.__used = !0, T.layers) : null;
            }
            function y(L) {
              var E, T = L.length, A, C;
              for (E = T - 1; E >= 0; E -= 1)
                if (L[E].ty === "sh")
                  if (L[E].ks.k.i)
                    S(L[E].ks.k);
                  else
                    for (C = L[E].ks.k.length, A = 0; A < C; A += 1)
                      L[E].ks.k[A].s && S(L[E].ks.k[A].s[0]), L[E].ks.k[A].e && S(L[E].ks.k[A].e[0]);
                else
                  L[E].ty === "gr" && y(L[E].it);
            }
            function S(L) {
              var E, T = L.i.length;
              for (E = 0; E < T; E += 1)
                L.i[E][0] += L.v[E][0], L.i[E][1] += L.v[E][1], L.o[E][0] += L.v[E][0], L.o[E][1] += L.v[E][1];
            }
            function k(L, E) {
              var T = E ? E.split(".") : [100, 100, 100];
              return L[0] > T[0] ? !0 : T[0] > L[0] ? !1 : L[1] > T[1] ? !0 : T[1] > L[1] ? !1 : L[2] > T[2] ? !0 : T[2] > L[2] ? !1 : null;
            }
            var _ = function() {
              var L = [4, 4, 14];
              function E(A) {
                var C = A.t.d;
                A.t.d = {
                  k: [{
                    s: C,
                    t: 0
                  }]
                };
              }
              function T(A) {
                var C, V = A.length;
                for (C = 0; C < V; C += 1)
                  A[C].ty === 5 && E(A[C]);
              }
              return function(A) {
                if (k(L, A.v) && (T(A.layers), A.assets)) {
                  var C, V = A.assets.length;
                  for (C = 0; C < V; C += 1)
                    A.assets[C].layers && T(A.assets[C].layers);
                }
              };
            }(), F = function() {
              var L = [4, 7, 99];
              return function(E) {
                if (E.chars && !k(L, E.v)) {
                  var T, A = E.chars.length;
                  for (T = 0; T < A; T += 1) {
                    var C = E.chars[T];
                    C.data && C.data.shapes && (y(C.data.shapes), C.data.ip = 0, C.data.op = 99999, C.data.st = 0, C.data.sr = 1, C.data.ks = {
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      }
                    }, E.chars[T].t || (C.data.shapes.push({
                      ty: "no"
                    }), C.data.shapes[0].it.push({
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      },
                      sk: {
                        k: 0,
                        a: 0
                      },
                      sa: {
                        k: 0,
                        a: 0
                      },
                      ty: "tr"
                    })));
                  }
                }
              };
            }(), B = function() {
              var L = [5, 7, 15];
              function E(A) {
                var C = A.t.p;
                typeof C.a == "number" && (C.a = {
                  a: 0,
                  k: C.a
                }), typeof C.p == "number" && (C.p = {
                  a: 0,
                  k: C.p
                }), typeof C.r == "number" && (C.r = {
                  a: 0,
                  k: C.r
                });
              }
              function T(A) {
                var C, V = A.length;
                for (C = 0; C < V; C += 1)
                  A[C].ty === 5 && E(A[C]);
              }
              return function(A) {
                if (k(L, A.v) && (T(A.layers), A.assets)) {
                  var C, V = A.assets.length;
                  for (C = 0; C < V; C += 1)
                    A.assets[C].layers && T(A.assets[C].layers);
                }
              };
            }(), H = function() {
              var L = [4, 1, 9];
              function E(A) {
                var C, V = A.length, I, O;
                for (C = 0; C < V; C += 1)
                  if (A[C].ty === "gr")
                    E(A[C].it);
                  else if (A[C].ty === "fl" || A[C].ty === "st")
                    if (A[C].c.k && A[C].c.k[0].i)
                      for (O = A[C].c.k.length, I = 0; I < O; I += 1)
                        A[C].c.k[I].s && (A[C].c.k[I].s[0] /= 255, A[C].c.k[I].s[1] /= 255, A[C].c.k[I].s[2] /= 255, A[C].c.k[I].s[3] /= 255), A[C].c.k[I].e && (A[C].c.k[I].e[0] /= 255, A[C].c.k[I].e[1] /= 255, A[C].c.k[I].e[2] /= 255, A[C].c.k[I].e[3] /= 255);
                    else
                      A[C].c.k[0] /= 255, A[C].c.k[1] /= 255, A[C].c.k[2] /= 255, A[C].c.k[3] /= 255;
              }
              function T(A) {
                var C, V = A.length;
                for (C = 0; C < V; C += 1)
                  A[C].ty === 4 && E(A[C].shapes);
              }
              return function(A) {
                if (k(L, A.v) && (T(A.layers), A.assets)) {
                  var C, V = A.assets.length;
                  for (C = 0; C < V; C += 1)
                    A.assets[C].layers && T(A.assets[C].layers);
                }
              };
            }(), D = function() {
              var L = [4, 4, 18];
              function E(A) {
                var C, V = A.length, I, O;
                for (C = V - 1; C >= 0; C -= 1)
                  if (A[C].ty === "sh")
                    if (A[C].ks.k.i)
                      A[C].ks.k.c = A[C].closed;
                    else
                      for (O = A[C].ks.k.length, I = 0; I < O; I += 1)
                        A[C].ks.k[I].s && (A[C].ks.k[I].s[0].c = A[C].closed), A[C].ks.k[I].e && (A[C].ks.k[I].e[0].c = A[C].closed);
                  else
                    A[C].ty === "gr" && E(A[C].it);
              }
              function T(A) {
                var C, V, I = A.length, O, q, j, W;
                for (V = 0; V < I; V += 1) {
                  if (C = A[V], C.hasMask) {
                    var Q = C.masksProperties;
                    for (q = Q.length, O = 0; O < q; O += 1)
                      if (Q[O].pt.k.i)
                        Q[O].pt.k.c = Q[O].cl;
                      else
                        for (W = Q[O].pt.k.length, j = 0; j < W; j += 1)
                          Q[O].pt.k[j].s && (Q[O].pt.k[j].s[0].c = Q[O].cl), Q[O].pt.k[j].e && (Q[O].pt.k[j].e[0].c = Q[O].cl);
                  }
                  C.ty === 4 && E(C.shapes);
                }
              }
              return function(A) {
                if (k(L, A.v) && (T(A.layers), A.assets)) {
                  var C, V = A.assets.length;
                  for (C = 0; C < V; C += 1)
                    A.assets[C].layers && T(A.assets[C].layers);
                }
              };
            }();
            function R(L) {
              L.__complete || (H(L), _(L), F(L), B(L), D(L), M(L.layers, L.assets), u(L.chars, L.assets), L.__complete = !0);
            }
            function G(L) {
              L.t.a.length === 0 && "m" in L.t.p;
            }
            var z = {};
            return z.completeData = R, z.checkColors = H, z.checkChars = F, z.checkPathProperties = B, z.checkShapes = D, z.completeLayers = M, z;
          }
          if (a.dataManager || (a.dataManager = b()), a.assetLoader || (a.assetLoader = function() {
            function M(d) {
              var f = d.getResponseHeader("content-type");
              return f && d.responseType === "json" && f.indexOf("json") !== -1 || d.response && _typeof$5(d.response) === "object" ? d.response : d.response && typeof d.response == "string" ? JSON.parse(d.response) : d.responseText ? JSON.parse(d.responseText) : null;
            }
            function u(d, f, y, S) {
              var k, _ = new XMLHttpRequest();
              try {
                _.responseType = "json";
              } catch {
              }
              _.onreadystatechange = function() {
                if (_.readyState === 4)
                  if (_.status === 200)
                    k = M(_), y(k);
                  else
                    try {
                      k = M(_), y(k);
                    } catch (F) {
                      S && S(F);
                    }
              };
              try {
                _.open(["G", "E", "T"].join(""), d, !0);
              } catch {
                _.open(["G", "E", "T"].join(""), f + "/" + d, !0);
              }
              _.send();
            }
            return {
              load: u
            };
          }()), x.data.type === "loadAnimation")
            a.assetLoader.load(x.data.path, x.data.fullPath, function(M) {
              a.dataManager.completeData(M), a.postMessage({
                id: x.data.id,
                payload: M,
                status: "success"
              });
            }, function() {
              a.postMessage({
                id: x.data.id,
                status: "error"
              });
            });
          else if (x.data.type === "complete") {
            var m = x.data.animation;
            a.dataManager.completeData(m), a.postMessage({
              id: x.data.id,
              payload: m,
              status: "success"
            });
          } else
            x.data.type === "loadData" && a.assetLoader.load(x.data.path, x.data.fullPath, function(M) {
              a.postMessage({
                id: x.data.id,
                payload: M,
                status: "success"
              });
            }, function() {
              a.postMessage({
                id: x.data.id,
                status: "error"
              });
            });
        }), i.onmessage = function(c) {
          var x = c.data, b = x.id, m = e[b];
          e[b] = null, x.status === "success" ? m.onComplete(x.payload) : m.onError && m.onError();
        });
      }
      function o(c, x) {
        t += 1;
        var b = "processId_" + t;
        return e[b] = {
          onComplete: c,
          onError: x
        }, b;
      }
      function p(c, x, b) {
        l();
        var m = o(x, b);
        i.postMessage({
          type: "loadAnimation",
          path: c,
          fullPath: window.location.origin + window.location.pathname,
          id: m
        });
      }
      function g(c, x, b) {
        l();
        var m = o(x, b);
        i.postMessage({
          type: "loadData",
          path: c,
          fullPath: window.location.origin + window.location.pathname,
          id: m
        });
      }
      function P(c, x, b) {
        l();
        var m = o(x, b);
        i.postMessage({
          type: "complete",
          animation: c,
          id: m
        });
      }
      return {
        loadAnimation: p,
        loadData: g,
        completeAnimation: P
      };
    }(), ImagePreloader = function() {
      var t = function() {
        var u = createTag("canvas");
        u.width = 1, u.height = 1;
        var d = u.getContext("2d");
        return d.fillStyle = "rgba(0,0,0,0)", d.fillRect(0, 0, 1, 1), u;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(u, d, f) {
        var y = "";
        if (u.e)
          y = u.p;
        else if (d) {
          var S = u.p;
          S.indexOf("images/") !== -1 && (S = S.split("/")[1]), y = d + S;
        } else
          y = f, y += u.u ? u.u : "", y += u.p;
        return y;
      }
      function s(u) {
        var d = 0, f = setInterval((function() {
          var y = u.getBBox();
          (y.width || d > 500) && (this._imageLoaded(), clearInterval(f)), d += 1;
        }).bind(this), 50);
      }
      function a(u) {
        var d = i(u, this.assetsPath, this.path), f = createNS("image");
        isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", (function() {
          y.img = t, this._imageLoaded();
        }).bind(this), !1), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", d), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
        var y = {
          img: f,
          assetData: u
        };
        return y;
      }
      function n(u) {
        var d = i(u, this.assetsPath, this.path), f = createTag("img");
        f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", (function() {
          y.img = t, this._imageLoaded();
        }).bind(this), !1), f.src = d;
        var y = {
          img: f,
          assetData: u
        };
        return y;
      }
      function l(u) {
        var d = {
          assetData: u
        }, f = i(u, this.assetsPath, this.path);
        return dataManager.loadData(f, (function(y) {
          d.img = y, this._footageLoaded();
        }).bind(this), (function() {
          d.img = {}, this._footageLoaded();
        }).bind(this)), d;
      }
      function o(u, d) {
        this.imagesLoadedCb = d;
        var f, y = u.length;
        for (f = 0; f < y; f += 1)
          u[f].layers || (!u[f].t || u[f].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(u[f]))) : u[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(u[f]))));
      }
      function p(u) {
        this.path = u || "";
      }
      function g(u) {
        this.assetsPath = u || "";
      }
      function P(u) {
        for (var d = 0, f = this.images.length; d < f; ) {
          if (this.images[d].assetData === u)
            return this.images[d].img;
          d += 1;
        }
        return null;
      }
      function c() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function x() {
        return this.totalImages === this.loadedAssets;
      }
      function b() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function m(u, d) {
        u === "svg" ? (this._elementHelper = d, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function M() {
        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return M.prototype = {
        loadAssets: o,
        setAssetsPath: g,
        setPath: p,
        loadedImages: x,
        loadedFootages: b,
        destroy: c,
        getAsset: P,
        createImgData: n,
        createImageData: a,
        imageLoaded: e,
        footageLoaded: r,
        setCacheType: m
      }, M;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = {
      triggerEvent: function(e, r) {
        if (this._cbs[e])
          for (var i = this._cbs[e], s = 0; s < i.length; s += 1)
            i[s](r);
      },
      addEventListener: function(e, r) {
        return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r), (function() {
          this.removeEventListener(e, r);
        }).bind(this);
      },
      removeEventListener: function(e, r) {
        if (!r)
          this._cbs[e] = null;
        else if (this._cbs[e]) {
          for (var i = 0, s = this._cbs[e].length; i < s; )
            this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
          this._cbs[e].length || (this._cbs[e] = null);
        }
      }
    };
    var markerParser = function() {
      function t(e) {
        for (var r = e.split(`\r
`), i = {}, s, a = 0, n = 0; n < r.length; n += 1)
          s = r[n].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), a += 1);
        if (a === 0)
          throw new Error();
        return i;
      }
      return function(e) {
        for (var r = [], i = 0; i < e.length; i += 1) {
          var s = e[i], a = {
            time: s.tm,
            duration: s.dr
          };
          try {
            a.payload = JSON.parse(e[i].cm);
          } catch {
            try {
              a.payload = t(e[i].cm);
            } catch {
              a.payload = {
                name: e[i].cm
              };
            }
          }
          r.push(a);
        }
        return r;
      };
    }(), ProjectInterface = function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(r) {
          for (var i = 0, s = this.compositions.length; i < s; ) {
            if (this.compositions[i].data && this.compositions[i].data.nm === r)
              return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
            i += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), renderers = {}, registerRenderer = function(e, r) {
      renderers[e] = r;
    };
    function getRenderer(t) {
      return renderers[t];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas)
        return "canvas";
      for (var t in renderers)
        if (renderers[t])
          return t;
      return "";
    }
    function _typeof$4(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
        return typeof r;
      } : _typeof$4 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$4(t);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var r = getRenderer(e);
      this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(t) {
      dataManager.completeAnimation(t, this.configAnimation);
    }, AnimationItem.prototype.setData = function(t, e) {
      e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
      var r = {
        wrapper: t,
        animationData: e
      }, i = t.attributes;
      r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
      s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
      var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
      r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
      var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
      n === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, r, i = e.length, s = t.layers, a, n = s.length;
      for (a = 0; a < n; a += 1)
        for (r = 0; r < i; ) {
          if (e[r].id === s[a].id) {
            e[r] = s[a];
            break;
          }
          r += 1;
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (i = t.assets.length, r = 0; r < i; r += 1)
          this.animationData.assets.push(t.assets[r]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = getExpressionsPlugin();
      e && e.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer)
        try {
          this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (e) {
          this.triggerConfigError(e);
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(t, e) {
      var r = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(r, i);
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (!(this.isLoaded === !1 || !this.renderer))
        try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t) {
          this.triggerRenderFrameError(t);
        }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, r = 0; r < this.markers.length; r += 1)
        if (e = this.markers[r], e.payload && e.payload.name === t)
          return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && this.goToAndStop(s.time, !0);
        } else
          e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0));
        } else
          this.goToAndStop(i, e, r);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (!(this.isPaused === !0 || this.isLoaded === !1)) {
        var e = this.currentRawFrame + t * this.frameModifier, r = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
          this.segments.push(t[r]);
      } else
        this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(t) {
      this.loop = t;
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e)
        e = t.p;
      else if (this.assetsPath) {
        var r = t.p;
        r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r;
      } else
        e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, r = this.assets.length; e < r; ) {
        if (t === this.assets[e].id)
          return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
      try {
        var i = this.renderer.getElementByPath(t);
        i.updateDocumentData(e, r);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t])
        switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
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
            this.triggerEvent(t);
        }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var animationManager = function() {
      var t = {}, e = [], r = 0, i = 0, s = 0, a = !0, n = !1;
      function l(E) {
        for (var T = 0, A = E.target; T < i; )
          e[T].animation === A && (e.splice(T, 1), T -= 1, i -= 1, A.isPaused || P()), T += 1;
      }
      function o(E, T) {
        if (!E)
          return null;
        for (var A = 0; A < i; ) {
          if (e[A].elem === E && e[A].elem !== null)
            return e[A].animation;
          A += 1;
        }
        var C = new AnimationItem();
        return c(C, E), C.setData(E, T), C;
      }
      function p() {
        var E, T = e.length, A = [];
        for (E = 0; E < T; E += 1)
          A.push(e[E].animation);
        return A;
      }
      function g() {
        s += 1, H();
      }
      function P() {
        s -= 1;
      }
      function c(E, T) {
        E.addEventListener("destroy", l), E.addEventListener("_active", g), E.addEventListener("_idle", P), e.push({
          elem: T,
          animation: E
        }), i += 1;
      }
      function x(E) {
        var T = new AnimationItem();
        return c(T, null), T.setParams(E), T;
      }
      function b(E, T) {
        var A;
        for (A = 0; A < i; A += 1)
          e[A].animation.setSpeed(E, T);
      }
      function m(E, T) {
        var A;
        for (A = 0; A < i; A += 1)
          e[A].animation.setDirection(E, T);
      }
      function M(E) {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.play(E);
      }
      function u(E) {
        var T = E - r, A;
        for (A = 0; A < i; A += 1)
          e[A].animation.advanceTime(T);
        r = E, s && !n ? window.requestAnimationFrame(u) : a = !0;
      }
      function d(E) {
        r = E, window.requestAnimationFrame(u);
      }
      function f(E) {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.pause(E);
      }
      function y(E, T, A) {
        var C;
        for (C = 0; C < i; C += 1)
          e[C].animation.goToAndStop(E, T, A);
      }
      function S(E) {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.stop(E);
      }
      function k(E) {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.togglePause(E);
      }
      function _(E) {
        var T;
        for (T = i - 1; T >= 0; T -= 1)
          e[T].animation.destroy(E);
      }
      function F(E, T, A) {
        var C = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), V, I = C.length;
        for (V = 0; V < I; V += 1)
          A && C[V].setAttribute("data-bm-type", A), o(C[V], E);
        if (T && I === 0) {
          A || (A = "svg");
          var O = document.getElementsByTagName("body")[0];
          O.innerText = "";
          var q = createTag("div");
          q.style.width = "100%", q.style.height = "100%", q.setAttribute("data-bm-type", A), O.appendChild(q), o(q, E);
        }
      }
      function B() {
        var E;
        for (E = 0; E < i; E += 1)
          e[E].animation.resize();
      }
      function H() {
        !n && s && a && (window.requestAnimationFrame(d), a = !1);
      }
      function D() {
        n = !0;
      }
      function R() {
        n = !1, H();
      }
      function G(E, T) {
        var A;
        for (A = 0; A < i; A += 1)
          e[A].animation.setVolume(E, T);
      }
      function z(E) {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.mute(E);
      }
      function L(E) {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.unmute(E);
      }
      return t.registerAnimation = o, t.loadAnimation = x, t.setSpeed = b, t.setDirection = m, t.play = M, t.pause = f, t.stop = S, t.togglePause = k, t.searchAnimations = F, t.resize = B, t.goToAndStop = y, t.destroy = _, t.freeze = D, t.unfreeze = R, t.setVolume = G, t.mute = z, t.unmute = L, t.getRegisteredAnimations = p, t;
    }(), BezierFactory = function() {
      var t = {};
      t.getBezierEasing = r;
      var e = {};
      function r(d, f, y, S, k) {
        var _ = k || ("bez_" + d + "_" + f + "_" + y + "_" + S).replace(/\./g, "p");
        if (e[_])
          return e[_];
        var F = new u([d, f, y, S]);
        return e[_] = F, F;
      }
      var i = 4, s = 1e-3, a = 1e-7, n = 10, l = 11, o = 1 / (l - 1), p = typeof Float32Array == "function";
      function g(d, f) {
        return 1 - 3 * f + 3 * d;
      }
      function P(d, f) {
        return 3 * f - 6 * d;
      }
      function c(d) {
        return 3 * d;
      }
      function x(d, f, y) {
        return ((g(f, y) * d + P(f, y)) * d + c(f)) * d;
      }
      function b(d, f, y) {
        return 3 * g(f, y) * d * d + 2 * P(f, y) * d + c(f);
      }
      function m(d, f, y, S, k) {
        var _, F, B = 0;
        do
          F = f + (y - f) / 2, _ = x(F, S, k) - d, _ > 0 ? y = F : f = F;
        while (Math.abs(_) > a && ++B < n);
        return F;
      }
      function M(d, f, y, S) {
        for (var k = 0; k < i; ++k) {
          var _ = b(f, y, S);
          if (_ === 0)
            return f;
          var F = x(f, y, S) - d;
          f -= F / _;
        }
        return f;
      }
      function u(d) {
        this._p = d, this._mSampleValues = p ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return u.prototype = {
        get: function(f) {
          var y = this._p[0], S = this._p[1], k = this._p[2], _ = this._p[3];
          return this._precomputed || this._precompute(), y === S && k === _ ? f : f === 0 ? 0 : f === 1 ? 1 : x(this._getTForX(f), S, _);
        },
        // Private part
        _precompute: function() {
          var f = this._p[0], y = this._p[1], S = this._p[2], k = this._p[3];
          this._precomputed = !0, (f !== y || S !== k) && this._calcSampleValues();
        },
        _calcSampleValues: function() {
          for (var f = this._p[0], y = this._p[2], S = 0; S < l; ++S)
            this._mSampleValues[S] = x(S * o, f, y);
        },
        /**
             * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
             */
        _getTForX: function(f) {
          for (var y = this._p[0], S = this._p[2], k = this._mSampleValues, _ = 0, F = 1, B = l - 1; F !== B && k[F] <= f; ++F)
            _ += o;
          --F;
          var H = (f - k[F]) / (k[F + 1] - k[F]), D = _ + H * o, R = b(D, y, S);
          return R >= s ? M(f, D, y, S) : R === 0 ? D : m(f, _, _ + o, y, S);
        }
      }, t;
    }(), pooling = function() {
      function t(e) {
        return e.concat(createSizedArray(e.length));
      }
      return {
        double: t
      };
    }(), poolFactory = function() {
      return function(t, e, r) {
        var i = 0, s = t, a = createSizedArray(s), n = {
          newElement: l,
          release: o
        };
        function l() {
          var p;
          return i ? (i -= 1, p = a[i]) : p = e(), p;
        }
        function o(p) {
          i === s && (a = pooling.double(a), s *= 2), r && r(p), a[i] = p, i += 1;
        }
        return n;
      };
    }(), bezierLengthPool = function() {
      function t() {
        return {
          addedLength: 0,
          percents: createTypedArray("float32", getDefaultCurveSegments()),
          lengths: createTypedArray("float32", getDefaultCurveSegments())
        };
      }
      return poolFactory(8, t);
    }(), segmentsLengthPool = function() {
      function t() {
        return {
          lengths: [],
          totalLength: 0
        };
      }
      function e(r) {
        var i, s = r.lengths.length;
        for (i = 0; i < s; i += 1)
          bezierLengthPool.release(r.lengths[i]);
        r.lengths.length = 0;
      }
      return poolFactory(8, t, e);
    }();
    function bezFunction() {
      var t = Math;
      function e(c, x, b, m, M, u) {
        var d = c * m + x * M + b * u - M * m - u * c - b * x;
        return d > -1e-3 && d < 1e-3;
      }
      function r(c, x, b, m, M, u, d, f, y) {
        if (b === 0 && u === 0 && y === 0)
          return e(c, x, m, M, d, f);
        var S = t.sqrt(t.pow(m - c, 2) + t.pow(M - x, 2) + t.pow(u - b, 2)), k = t.sqrt(t.pow(d - c, 2) + t.pow(f - x, 2) + t.pow(y - b, 2)), _ = t.sqrt(t.pow(d - m, 2) + t.pow(f - M, 2) + t.pow(y - u, 2)), F;
        return S > k ? S > _ ? F = S - k - _ : F = _ - k - S : _ > k ? F = _ - k - S : F = k - S - _, F > -1e-4 && F < 1e-4;
      }
      var i = function() {
        return function(c, x, b, m) {
          var M = getDefaultCurveSegments(), u, d, f, y, S, k = 0, _, F = [], B = [], H = bezierLengthPool.newElement();
          for (f = b.length, u = 0; u < M; u += 1) {
            for (S = u / (M - 1), _ = 0, d = 0; d < f; d += 1)
              y = bmPow(1 - S, 3) * c[d] + 3 * bmPow(1 - S, 2) * S * b[d] + 3 * (1 - S) * bmPow(S, 2) * m[d] + bmPow(S, 3) * x[d], F[d] = y, B[d] !== null && (_ += bmPow(F[d] - B[d], 2)), B[d] = F[d];
            _ && (_ = bmSqrt(_), k += _), H.percents[u] = S, H.lengths[u] = k;
          }
          return H.addedLength = k, H;
        };
      }();
      function s(c) {
        var x = segmentsLengthPool.newElement(), b = c.c, m = c.v, M = c.o, u = c.i, d, f = c._length, y = x.lengths, S = 0;
        for (d = 0; d < f - 1; d += 1)
          y[d] = i(m[d], m[d + 1], M[d], u[d + 1]), S += y[d].addedLength;
        return b && f && (y[d] = i(m[d], m[0], M[d], u[0]), S += y[d].addedLength), x.totalLength = S, x;
      }
      function a(c) {
        this.segmentLength = 0, this.points = new Array(c);
      }
      function n(c, x) {
        this.partialLength = c, this.point = x;
      }
      var l = function() {
        var c = {};
        return function(x, b, m, M) {
          var u = (x[0] + "_" + x[1] + "_" + b[0] + "_" + b[1] + "_" + m[0] + "_" + m[1] + "_" + M[0] + "_" + M[1]).replace(/\./g, "p");
          if (!c[u]) {
            var d = getDefaultCurveSegments(), f, y, S, k, _, F = 0, B, H, D = null;
            x.length === 2 && (x[0] !== b[0] || x[1] !== b[1]) && e(x[0], x[1], b[0], b[1], x[0] + m[0], x[1] + m[1]) && e(x[0], x[1], b[0], b[1], b[0] + M[0], b[1] + M[1]) && (d = 2);
            var R = new a(d);
            for (S = m.length, f = 0; f < d; f += 1) {
              for (H = createSizedArray(S), _ = f / (d - 1), B = 0, y = 0; y < S; y += 1)
                k = bmPow(1 - _, 3) * x[y] + 3 * bmPow(1 - _, 2) * _ * (x[y] + m[y]) + 3 * (1 - _) * bmPow(_, 2) * (b[y] + M[y]) + bmPow(_, 3) * b[y], H[y] = k, D !== null && (B += bmPow(H[y] - D[y], 2));
              B = bmSqrt(B), F += B, R.points[f] = new n(B, H), D = H;
            }
            R.segmentLength = F, c[u] = R;
          }
          return c[u];
        };
      }();
      function o(c, x) {
        var b = x.percents, m = x.lengths, M = b.length, u = bmFloor((M - 1) * c), d = c * x.addedLength, f = 0;
        if (u === M - 1 || u === 0 || d === m[u])
          return b[u];
        for (var y = m[u] > d ? -1 : 1, S = !0; S; )
          if (m[u] <= d && m[u + 1] > d ? (f = (d - m[u]) / (m[u + 1] - m[u]), S = !1) : u += y, u < 0 || u >= M - 1) {
            if (u === M - 1)
              return b[u];
            S = !1;
          }
        return b[u] + (b[u + 1] - b[u]) * f;
      }
      function p(c, x, b, m, M, u) {
        var d = o(M, u), f = 1 - d, y = t.round((f * f * f * c[0] + (d * f * f + f * d * f + f * f * d) * b[0] + (d * d * f + f * d * d + d * f * d) * m[0] + d * d * d * x[0]) * 1e3) / 1e3, S = t.round((f * f * f * c[1] + (d * f * f + f * d * f + f * f * d) * b[1] + (d * d * f + f * d * d + d * f * d) * m[1] + d * d * d * x[1]) * 1e3) / 1e3;
        return [y, S];
      }
      var g = createTypedArray("float32", 8);
      function P(c, x, b, m, M, u, d) {
        M < 0 ? M = 0 : M > 1 && (M = 1);
        var f = o(M, d);
        u = u > 1 ? 1 : u;
        var y = o(u, d), S, k = c.length, _ = 1 - f, F = 1 - y, B = _ * _ * _, H = f * _ * _ * 3, D = f * f * _ * 3, R = f * f * f, G = _ * _ * F, z = f * _ * F + _ * f * F + _ * _ * y, L = f * f * F + _ * f * y + f * _ * y, E = f * f * y, T = _ * F * F, A = f * F * F + _ * y * F + _ * F * y, C = f * y * F + _ * y * y + f * F * y, V = f * y * y, I = F * F * F, O = y * F * F + F * y * F + F * F * y, q = y * y * F + F * y * y + y * F * y, j = y * y * y;
        for (S = 0; S < k; S += 1)
          g[S * 4] = t.round((B * c[S] + H * b[S] + D * m[S] + R * x[S]) * 1e3) / 1e3, g[S * 4 + 1] = t.round((G * c[S] + z * b[S] + L * m[S] + E * x[S]) * 1e3) / 1e3, g[S * 4 + 2] = t.round((T * c[S] + A * b[S] + C * m[S] + V * x[S]) * 1e3) / 1e3, g[S * 4 + 3] = t.round((I * c[S] + O * b[S] + q * m[S] + j * x[S]) * 1e3) / 1e3;
        return g;
      }
      return {
        getSegmentsLength: s,
        getNewSegment: P,
        getPointInSegment: p,
        buildBezierData: l,
        pointOnLine2D: e,
        pointOnLine3D: r
      };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var r = this.offsetTime, i;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var s = e.lastIndex, a = s, n = this.keyframes.length - 1, l = !0, o, p, g; l; ) {
        if (o = this.keyframes[a], p = this.keyframes[a + 1], a === n - 1 && t >= p.t - r) {
          o.h && (o = p), s = 0;
          break;
        }
        if (p.t - r > t) {
          s = a;
          break;
        }
        a < n - 1 ? a += 1 : (s = 0, l = !1);
      }
      g = this.keyframesMetadata[a] || {};
      var P, c, x, b, m, M, u = p.t - r, d = o.t - r, f;
      if (o.to) {
        g.bezierData || (g.bezierData = bez.buildBezierData(o.s, p.s || o.e, o.to, o.ti));
        var y = g.bezierData;
        if (t >= u || t < d) {
          var S = t >= u ? y.points.length - 1 : 0;
          for (c = y.points[S].point.length, P = 0; P < c; P += 1)
            i[P] = y.points[S].point[P];
        } else {
          g.__fnct ? M = g.__fnct : (M = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, g.__fnct = M), x = M((t - d) / (u - d));
          var k = y.segmentLength * x, _, F = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
          for (m = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, l = !0, b = y.points.length; l; ) {
            if (F += y.points[m].partialLength, k === 0 || x === 0 || m === y.points.length - 1) {
              for (c = y.points[m].point.length, P = 0; P < c; P += 1)
                i[P] = y.points[m].point[P];
              break;
            } else if (k >= F && k < F + y.points[m + 1].partialLength) {
              for (_ = (k - F) / y.points[m + 1].partialLength, c = y.points[m].point.length, P = 0; P < c; P += 1)
                i[P] = y.points[m].point[P] + (y.points[m + 1].point[P] - y.points[m].point[P]) * _;
              break;
            }
            m < b - 1 ? m += 1 : l = !1;
          }
          e._lastPoint = m, e._lastAddedLength = F - y.points[m].partialLength, e._lastKeyframeIndex = a;
        }
      } else {
        var B, H, D, R, G;
        if (n = o.s.length, f = p.s || o.e, this.sh && o.h !== 1)
          if (t >= u)
            i[0] = f[0], i[1] = f[1], i[2] = f[2];
          else if (t <= d)
            i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
          else {
            var z = createQuaternion(o.s), L = createQuaternion(f), E = (t - d) / (u - d);
            quaternionToEuler(i, slerp(z, L, E));
          }
        else
          for (a = 0; a < n; a += 1)
            o.h !== 1 && (t >= u ? x = 1 : t < d ? x = 0 : (o.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[a] ? M = g.__fnct[a] : (B = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], H = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], D = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], R = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], M = BezierFactory.getBezierEasing(B, H, D, R).get, g.__fnct[a] = M)) : g.__fnct ? M = g.__fnct : (B = o.o.x, H = o.o.y, D = o.i.x, R = o.i.y, M = BezierFactory.getBezierEasing(B, H, D, R).get, o.keyframeMetadata = M), x = M((t - d) / (u - d)))), f = p.s || o.e, G = o.h === 1 ? o.s[a] : o.s[a] + (f[a] - o.s[a]) * x, this.propType === "multidimensional" ? i[a] = G : i = G;
      }
      return e.lastIndex = s, i;
    }
    function slerp(t, e, r) {
      var i = [], s = t[0], a = t[1], n = t[2], l = t[3], o = e[0], p = e[1], g = e[2], P = e[3], c, x, b, m, M;
      return x = s * o + a * p + n * g + l * P, x < 0 && (x = -x, o = -o, p = -p, g = -g, P = -P), 1 - x > 1e-6 ? (c = Math.acos(x), b = Math.sin(c), m = Math.sin((1 - r) * c) / b, M = Math.sin(r * c) / b) : (m = 1 - r, M = r), i[0] = m * s + M * o, i[1] = m * a + M * p, i[2] = m * n + M * g, i[3] = m * l + M * P, i;
    }
    function quaternionToEuler(t, e) {
      var r = e[0], i = e[1], s = e[2], a = e[3], n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s), l = Math.asin(2 * r * i + 2 * s * a), o = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
      t[0] = n / degToRads, t[1] = l / degToRads, t[2] = o / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(r / 2), n = Math.cos(i / 2), l = Math.sin(e / 2), o = Math.sin(r / 2), p = Math.sin(i / 2), g = s * a * n - l * o * p, P = l * o * n + s * a * p, c = l * a * n + s * o * p, x = s * o * n - l * a * p;
      return [P, c, x, g];
    }
    function getValueAtCurrentTime() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(t, this._caching);
        this.pv = i;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function setVValue(t) {
      var e;
      if (this.propType === "unidimensional")
        e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
      else
        for (var r = 0, i = this.v.length; r < i; )
          e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1;
    }
    function processEffectsSequence() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = !0, this._mdf = this._isFirstFrame;
        var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1)
          r = this.effectsSequence[t](r);
        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function ValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var s, a = e.k.length;
      for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1)
        this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional";
      var s, a = e.k.length, n, l, o, p;
      for (s = 0; s < a - 1; s += 1)
        e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, l = e.k[s + 1].s, o = e.k[s].to, p = e.k[s].ti, (n.length === 2 && !(n[0] === l[0] && n[1] === l[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], l[0] + p[0], l[1] + p[1]) || n.length === 3 && !(n[0] === l[0] && n[1] === l[1] && n[2] === l[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], l[0] + p[0], l[1] + p[1], l[2] + p[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === l[0] && n[1] === l[1] && o[0] === 0 && o[1] === 0 && p[0] === 0 && p[1] === 0 && (n.length === 2 || n[2] === l[2] && o[2] === 0 && p[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var g = e.k[0].s.length;
      for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), s = 0; s < g; s += 1)
        this.v[s] = initFrame, this.pv[s] = initFrame;
      this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: createTypedArray("float32", g)
      }, this.addEffect = addEffect;
    }
    var PropertyFactory = function() {
      function t(r, i, s, a, n) {
        i.sid && (i = r.globalData.slotManager.getProp(i));
        var l;
        if (!i.k.length)
          l = new ValueProperty(r, i, a, n);
        else if (typeof i.k[0] == "number")
          l = new MultiDimensionalProperty(r, i, a, n);
        else
          switch (s) {
            case 0:
              l = new KeyframedValueProperty(r, i, a, n);
              break;
            case 1:
              l = new KeyframedMultidimensionalProperty(r, i, a, n);
              break;
          }
        return l.effectsSequence.length && n.addDynamicProperty(l), l;
      }
      var e = {
        getProp: t
      };
      return e;
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function(e) {
        this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0);
      },
      iterateDynamicProperties: function() {
        this._mdf = !1;
        var e, r = this.dynamicProperties.length;
        for (e = 0; e < r; e += 1)
          this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
      },
      initDynamicPropertyContainer: function(e) {
        this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
      }
    };
    var pointPool = function() {
      function t() {
        return createTypedArray("float32", 2);
      }
      return poolFactory(8, t);
    }();
    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var r = 0; r < e; )
        this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; )
        this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
      var a;
      switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          a = this.v;
          break;
        case "i":
          a = this.i;
          break;
        case "o":
          a = this.o;
          break;
        default:
          a = [];
          break;
      }
      (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, l) {
      this.setXYAt(t, e, "v", n, l), this.setXYAt(r, i, "o", n, l), this.setXYAt(s, a, "i", n, l);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, r = this.o, i = this.i, s = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
      var a = this._length - 1, n = this._length, l;
      for (l = s; l < n; l += 1)
        t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], l, !1), a -= 1;
      return t;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = function() {
      function t() {
        return new ShapePath();
      }
      function e(s) {
        var a = s._length, n;
        for (n = 0; n < a; n += 1)
          pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
        s._length = 0, s.c = !1;
      }
      function r(s) {
        var a = i.newElement(), n, l = s._length === void 0 ? s.v.length : s._length;
        for (a.setLength(l), a.c = s.c, n = 0; n < l; n += 1)
          a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
        return a;
      }
      var i = poolFactory(4, t, e);
      return i.clone = r, i;
    }();
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1)
        shapePool.release(this.shapes[t]);
      this._length = 0;
    };
    var shapeCollectionPool = function() {
      var t = {
        newShapeCollection: s,
        release: a
      }, e = 0, r = 4, i = createSizedArray(r);
      function s() {
        var n;
        return e ? (e -= 1, n = i[e]) : n = new ShapeCollection(), n;
      }
      function a(n) {
        var l, o = n._length;
        for (l = 0; l < o; l += 1)
          shapePool.release(n.shapes[l]);
        n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1;
      }
      return t;
    }(), ShapePropertyFactory = function() {
      var t = -999999;
      function e(u, d, f) {
        var y = f.lastIndex, S, k, _, F, B, H, D, R, G, z = this.keyframes;
        if (u < z[0].t - this.offsetTime)
          S = z[0].s[0], _ = !0, y = 0;
        else if (u >= z[z.length - 1].t - this.offsetTime)
          S = z[z.length - 1].s ? z[z.length - 1].s[0] : z[z.length - 2].e[0], _ = !0;
        else {
          for (var L = y, E = z.length - 1, T = !0, A, C, V; T && (A = z[L], C = z[L + 1], !(C.t - this.offsetTime > u)); )
            L < E - 1 ? L += 1 : T = !1;
          if (V = this.keyframesMetadata[L] || {}, _ = A.h === 1, y = L, !_) {
            if (u >= C.t - this.offsetTime)
              R = 1;
            else if (u < A.t - this.offsetTime)
              R = 0;
            else {
              var I;
              V.__fnct ? I = V.__fnct : (I = BezierFactory.getBezierEasing(A.o.x, A.o.y, A.i.x, A.i.y).get, V.__fnct = I), R = I((u - (A.t - this.offsetTime)) / (C.t - this.offsetTime - (A.t - this.offsetTime)));
            }
            k = C.s ? C.s[0] : A.e[0];
          }
          S = A.s[0];
        }
        for (H = d._length, D = S.i[0].length, f.lastIndex = y, F = 0; F < H; F += 1)
          for (B = 0; B < D; B += 1)
            G = _ ? S.i[F][B] : S.i[F][B] + (k.i[F][B] - S.i[F][B]) * R, d.i[F][B] = G, G = _ ? S.o[F][B] : S.o[F][B] + (k.o[F][B] - S.o[F][B]) * R, d.o[F][B] = G, G = _ ? S.v[F][B] : S.v[F][B] + (k.v[F][B] - S.v[F][B]) * R, d.v[F][B] = G;
      }
      function r() {
        var u = this.comp.renderedFrame - this.offsetTime, d = this.keyframes[0].t - this.offsetTime, f = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, y = this._caching.lastFrame;
        return y !== t && (y < d && u < d || y > f && u > f) || (this._caching.lastIndex = y < u ? this._caching.lastIndex : 0, this.interpolateShape(u, this.pv, this._caching)), this._caching.lastFrame = u, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function s(u, d) {
        if (u._length !== d._length || u.c !== d.c)
          return !1;
        var f, y = u._length;
        for (f = 0; f < y; f += 1)
          if (u.v[f][0] !== d.v[f][0] || u.v[f][1] !== d.v[f][1] || u.o[f][0] !== d.o[f][0] || u.o[f][1] !== d.o[f][1] || u.i[f][0] !== d.i[f][0] || u.i[f][1] !== d.i[f][1])
            return !1;
        return !0;
      }
      function a(u) {
        s(this.v, u) || (this.v = shapePool.clone(u), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function n() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = !1;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = !0, this._mdf = !1;
          var u;
          this.kf ? u = this.pv : this.data.ks ? u = this.data.ks.k : u = this.data.pt.k;
          var d, f = this.effectsSequence.length;
          for (d = 0; d < f; d += 1)
            u = this.effectsSequence[d](u);
          this.setVValue(u), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function l(u, d, f) {
        this.propType = "shape", this.comp = u.comp, this.container = u, this.elem = u, this.data = d, this.k = !1, this.kf = !1, this._mdf = !1;
        var y = f === 3 ? d.pt.k : d.ks.k;
        this.v = shapePool.clone(y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function o(u) {
        this.effectsSequence.push(u), this.container.addDynamicProperty(this);
      }
      l.prototype.interpolateShape = e, l.prototype.getValue = n, l.prototype.setVValue = a, l.prototype.addEffect = o;
      function p(u, d, f) {
        this.propType = "shape", this.comp = u.comp, this.elem = u, this.container = u, this.offsetTime = u.data.st, this.keyframes = f === 3 ? d.pt.k : d.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var y = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
          lastFrame: t,
          lastIndex: 0
        }, this.effectsSequence = [r.bind(this)];
      }
      p.prototype.getValue = n, p.prototype.interpolateShape = e, p.prototype.setVValue = a, p.prototype.addEffect = o;
      var g = function() {
        var u = roundCorner;
        function d(f, y) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = y.d, this.elem = f, this.comp = f.comp, this.frameId = -1, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, y.p, 1, 0, this), this.s = PropertyFactory.getProp(f, y.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return d.prototype = {
          reset: i,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
          },
          convertEllToPath: function() {
            var y = this.p.v[0], S = this.p.v[1], k = this.s.v[0] / 2, _ = this.s.v[1] / 2, F = this.d !== 3, B = this.v;
            B.v[0][0] = y, B.v[0][1] = S - _, B.v[1][0] = F ? y + k : y - k, B.v[1][1] = S, B.v[2][0] = y, B.v[2][1] = S + _, B.v[3][0] = F ? y - k : y + k, B.v[3][1] = S, B.i[0][0] = F ? y - k * u : y + k * u, B.i[0][1] = S - _, B.i[1][0] = F ? y + k : y - k, B.i[1][1] = S - _ * u, B.i[2][0] = F ? y + k * u : y - k * u, B.i[2][1] = S + _, B.i[3][0] = F ? y - k : y + k, B.i[3][1] = S + _ * u, B.o[0][0] = F ? y + k * u : y - k * u, B.o[0][1] = S - _, B.o[1][0] = F ? y + k : y - k, B.o[1][1] = S + _ * u, B.o[2][0] = F ? y - k * u : y + k * u, B.o[2][1] = S + _, B.o[3][0] = F ? y - k : y + k, B.o[3][1] = S - _ * u;
          }
        }, extendPrototype([DynamicPropertyContainer], d), d;
      }(), P = function() {
        function u(d, f) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = d, this.comp = d.comp, this.data = f, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(d), f.sy === 1 ? (this.ir = PropertyFactory.getProp(d, f.ir, 0, 0, this), this.is = PropertyFactory.getProp(d, f.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(d, f.pt, 0, 0, this), this.p = PropertyFactory.getProp(d, f.p, 1, 0, this), this.r = PropertyFactory.getProp(d, f.r, 0, degToRads, this), this.or = PropertyFactory.getProp(d, f.or, 0, 0, this), this.os = PropertyFactory.getProp(d, f.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return u.prototype = {
          reset: i,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
          },
          convertStarToPath: function() {
            var f = Math.floor(this.pt.v) * 2, y = Math.PI * 2 / f, S = !0, k = this.or.v, _ = this.ir.v, F = this.os.v, B = this.is.v, H = 2 * Math.PI * k / (f * 2), D = 2 * Math.PI * _ / (f * 2), R, G, z, L, E = -Math.PI / 2;
            E += this.r.v;
            var T = this.data.d === 3 ? -1 : 1;
            for (this.v._length = 0, R = 0; R < f; R += 1) {
              G = S ? k : _, z = S ? F : B, L = S ? H : D;
              var A = G * Math.cos(E), C = G * Math.sin(E), V = A === 0 && C === 0 ? 0 : C / Math.sqrt(A * A + C * C), I = A === 0 && C === 0 ? 0 : -A / Math.sqrt(A * A + C * C);
              A += +this.p.v[0], C += +this.p.v[1], this.v.setTripleAt(A, C, A - V * L * z * T, C - I * L * z * T, A + V * L * z * T, C + I * L * z * T, R, !0), S = !S, E += y * T;
            }
          },
          convertPolygonToPath: function() {
            var f = Math.floor(this.pt.v), y = Math.PI * 2 / f, S = this.or.v, k = this.os.v, _ = 2 * Math.PI * S / (f * 4), F, B = -Math.PI * 0.5, H = this.data.d === 3 ? -1 : 1;
            for (B += this.r.v, this.v._length = 0, F = 0; F < f; F += 1) {
              var D = S * Math.cos(B), R = S * Math.sin(B), G = D === 0 && R === 0 ? 0 : R / Math.sqrt(D * D + R * R), z = D === 0 && R === 0 ? 0 : -D / Math.sqrt(D * D + R * R);
              D += +this.p.v[0], R += +this.p.v[1], this.v.setTripleAt(D, R, D - G * _ * k * H, R - z * _ * k * H, D + G * _ * k * H, R + z * _ * k * H, F, !0), B += y * H;
            }
            this.paths.length = 0, this.paths[0] = this.v;
          }
        }, extendPrototype([DynamicPropertyContainer], u), u;
      }(), c = function() {
        function u(d, f) {
          this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = d, this.comp = d.comp, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(d), this.p = PropertyFactory.getProp(d, f.p, 1, 0, this), this.s = PropertyFactory.getProp(d, f.s, 1, 0, this), this.r = PropertyFactory.getProp(d, f.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return u.prototype = {
          convertRectToPath: function() {
            var f = this.p.v[0], y = this.p.v[1], S = this.s.v[0] / 2, k = this.s.v[1] / 2, _ = bmMin(S, k, this.r.v), F = _ * (1 - roundCorner);
            this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + S, y - k + _, f + S, y - k + _, f + S, y - k + F, 0, !0), this.v.setTripleAt(f + S, y + k - _, f + S, y + k - F, f + S, y + k - _, 1, !0), _ !== 0 ? (this.v.setTripleAt(f + S - _, y + k, f + S - _, y + k, f + S - F, y + k, 2, !0), this.v.setTripleAt(f - S + _, y + k, f - S + F, y + k, f - S + _, y + k, 3, !0), this.v.setTripleAt(f - S, y + k - _, f - S, y + k - _, f - S, y + k - F, 4, !0), this.v.setTripleAt(f - S, y - k + _, f - S, y - k + F, f - S, y - k + _, 5, !0), this.v.setTripleAt(f - S + _, y - k, f - S + _, y - k, f - S + F, y - k, 6, !0), this.v.setTripleAt(f + S - _, y - k, f + S - F, y - k, f + S - _, y - k, 7, !0)) : (this.v.setTripleAt(f - S, y + k, f - S + F, y + k, f - S, y + k, 2), this.v.setTripleAt(f - S, y - k, f - S, y - k + F, f - S, y - k, 3))) : (this.v.setTripleAt(f + S, y - k + _, f + S, y - k + F, f + S, y - k + _, 0, !0), _ !== 0 ? (this.v.setTripleAt(f + S - _, y - k, f + S - _, y - k, f + S - F, y - k, 1, !0), this.v.setTripleAt(f - S + _, y - k, f - S + F, y - k, f - S + _, y - k, 2, !0), this.v.setTripleAt(f - S, y - k + _, f - S, y - k + _, f - S, y - k + F, 3, !0), this.v.setTripleAt(f - S, y + k - _, f - S, y + k - F, f - S, y + k - _, 4, !0), this.v.setTripleAt(f - S + _, y + k, f - S + _, y + k, f - S + F, y + k, 5, !0), this.v.setTripleAt(f + S - _, y + k, f + S - F, y + k, f + S - _, y + k, 6, !0), this.v.setTripleAt(f + S, y + k - _, f + S, y + k - _, f + S, y + k - F, 7, !0)) : (this.v.setTripleAt(f - S, y - k, f - S + F, y - k, f - S, y - k, 1, !0), this.v.setTripleAt(f - S, y + k, f - S, y + k - F, f - S, y + k, 2, !0), this.v.setTripleAt(f + S, y + k, f + S - F, y + k, f + S, y + k, 3, !0)));
          },
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
          },
          reset: i
        }, extendPrototype([DynamicPropertyContainer], u), u;
      }();
      function x(u, d, f) {
        var y;
        if (f === 3 || f === 4) {
          var S = f === 3 ? d.pt : d.ks, k = S.k;
          k.length ? y = new p(u, d, f) : y = new l(u, d, f);
        } else
          f === 5 ? y = new c(u, d) : f === 6 ? y = new g(u, d) : f === 7 && (y = new P(u, d));
        return y.k && u.addDynamicProperty(y), y;
      }
      function b() {
        return l;
      }
      function m() {
        return p;
      }
      var M = {};
      return M.getShapeProp = x, M.getConstructorFunction = b, M.getKeyframedConstructorFunction = m, M;
    }();
    /*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     */
    var Matrix = function() {
      var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function a(A) {
        if (A === 0)
          return this;
        var C = t(A), V = e(A);
        return this._t(C, -V, 0, 0, V, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function n(A) {
        if (A === 0)
          return this;
        var C = t(A), V = e(A);
        return this._t(1, 0, 0, 0, 0, C, -V, 0, 0, V, C, 0, 0, 0, 0, 1);
      }
      function l(A) {
        if (A === 0)
          return this;
        var C = t(A), V = e(A);
        return this._t(C, 0, V, 0, 0, 1, 0, 0, -V, 0, C, 0, 0, 0, 0, 1);
      }
      function o(A) {
        if (A === 0)
          return this;
        var C = t(A), V = e(A);
        return this._t(C, -V, 0, 0, V, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function p(A, C) {
        return this._t(1, C, A, 1, 0, 0);
      }
      function g(A, C) {
        return this.shear(r(A), r(C));
      }
      function P(A, C) {
        var V = t(C), I = e(C);
        return this._t(V, I, 0, 0, -I, V, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(A), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(V, -I, 0, 0, I, V, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function c(A, C, V) {
        return !V && V !== 0 && (V = 1), A === 1 && C === 1 && V === 1 ? this : this._t(A, 0, 0, 0, 0, C, 0, 0, 0, 0, V, 0, 0, 0, 0, 1);
      }
      function x(A, C, V, I, O, q, j, W, Q, X, $, rt, Z, J, U, Y) {
        return this.props[0] = A, this.props[1] = C, this.props[2] = V, this.props[3] = I, this.props[4] = O, this.props[5] = q, this.props[6] = j, this.props[7] = W, this.props[8] = Q, this.props[9] = X, this.props[10] = $, this.props[11] = rt, this.props[12] = Z, this.props[13] = J, this.props[14] = U, this.props[15] = Y, this;
      }
      function b(A, C, V) {
        return V = V || 0, A !== 0 || C !== 0 || V !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, A, C, V, 1) : this;
      }
      function m(A, C, V, I, O, q, j, W, Q, X, $, rt, Z, J, U, Y) {
        var N = this.props;
        if (A === 1 && C === 0 && V === 0 && I === 0 && O === 0 && q === 1 && j === 0 && W === 0 && Q === 0 && X === 0 && $ === 1 && rt === 0)
          return N[12] = N[12] * A + N[15] * Z, N[13] = N[13] * q + N[15] * J, N[14] = N[14] * $ + N[15] * U, N[15] *= Y, this._identityCalculated = !1, this;
        var st = N[0], ht = N[1], at = N[2], it = N[3], nt = N[4], ot = N[5], K = N[6], lt = N[7], ft = N[8], tt = N[9], pt = N[10], et = N[11], ct = N[12], ut = N[13], dt = N[14], mt = N[15];
        return N[0] = st * A + ht * O + at * Q + it * Z, N[1] = st * C + ht * q + at * X + it * J, N[2] = st * V + ht * j + at * $ + it * U, N[3] = st * I + ht * W + at * rt + it * Y, N[4] = nt * A + ot * O + K * Q + lt * Z, N[5] = nt * C + ot * q + K * X + lt * J, N[6] = nt * V + ot * j + K * $ + lt * U, N[7] = nt * I + ot * W + K * rt + lt * Y, N[8] = ft * A + tt * O + pt * Q + et * Z, N[9] = ft * C + tt * q + pt * X + et * J, N[10] = ft * V + tt * j + pt * $ + et * U, N[11] = ft * I + tt * W + pt * rt + et * Y, N[12] = ct * A + ut * O + dt * Q + mt * Z, N[13] = ct * C + ut * q + dt * X + mt * J, N[14] = ct * V + ut * j + dt * $ + mt * U, N[15] = ct * I + ut * W + dt * rt + mt * Y, this._identityCalculated = !1, this;
      }
      function M(A) {
        var C = A.props;
        return this.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]);
      }
      function u() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function d(A) {
        for (var C = 0; C < 16; ) {
          if (A.props[C] !== this.props[C])
            return !1;
          C += 1;
        }
        return !0;
      }
      function f(A) {
        var C;
        for (C = 0; C < 16; C += 1)
          A.props[C] = this.props[C];
        return A;
      }
      function y(A) {
        var C;
        for (C = 0; C < 16; C += 1)
          this.props[C] = A[C];
      }
      function S(A, C, V) {
        return {
          x: A * this.props[0] + C * this.props[4] + V * this.props[8] + this.props[12],
          y: A * this.props[1] + C * this.props[5] + V * this.props[9] + this.props[13],
          z: A * this.props[2] + C * this.props[6] + V * this.props[10] + this.props[14]
        };
      }
      function k(A, C, V) {
        return A * this.props[0] + C * this.props[4] + V * this.props[8] + this.props[12];
      }
      function _(A, C, V) {
        return A * this.props[1] + C * this.props[5] + V * this.props[9] + this.props[13];
      }
      function F(A, C, V) {
        return A * this.props[2] + C * this.props[6] + V * this.props[10] + this.props[14];
      }
      function B() {
        var A = this.props[0] * this.props[5] - this.props[1] * this.props[4], C = this.props[5] / A, V = -this.props[1] / A, I = -this.props[4] / A, O = this.props[0] / A, q = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / A, j = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / A, W = new Matrix();
        return W.props[0] = C, W.props[1] = V, W.props[4] = I, W.props[5] = O, W.props[12] = q, W.props[13] = j, W;
      }
      function H(A) {
        var C = this.getInverseMatrix();
        return C.applyToPointArray(A[0], A[1], A[2] || 0);
      }
      function D(A) {
        var C, V = A.length, I = [];
        for (C = 0; C < V; C += 1)
          I[C] = H(A[C]);
        return I;
      }
      function R(A, C, V) {
        var I = createTypedArray("float32", 6);
        if (this.isIdentity())
          I[0] = A[0], I[1] = A[1], I[2] = C[0], I[3] = C[1], I[4] = V[0], I[5] = V[1];
        else {
          var O = this.props[0], q = this.props[1], j = this.props[4], W = this.props[5], Q = this.props[12], X = this.props[13];
          I[0] = A[0] * O + A[1] * j + Q, I[1] = A[0] * q + A[1] * W + X, I[2] = C[0] * O + C[1] * j + Q, I[3] = C[0] * q + C[1] * W + X, I[4] = V[0] * O + V[1] * j + Q, I[5] = V[0] * q + V[1] * W + X;
        }
        return I;
      }
      function G(A, C, V) {
        var I;
        return this.isIdentity() ? I = [A, C, V] : I = [A * this.props[0] + C * this.props[4] + V * this.props[8] + this.props[12], A * this.props[1] + C * this.props[5] + V * this.props[9] + this.props[13], A * this.props[2] + C * this.props[6] + V * this.props[10] + this.props[14]], I;
      }
      function z(A, C) {
        if (this.isIdentity())
          return A + "," + C;
        var V = this.props;
        return Math.round((A * V[0] + C * V[4] + V[12]) * 100) / 100 + "," + Math.round((A * V[1] + C * V[5] + V[13]) * 100) / 100;
      }
      function L() {
        for (var A = 0, C = this.props, V = "matrix3d(", I = 1e4; A < 16; )
          V += i(C[A] * I) / I, V += A === 15 ? ")" : ",", A += 1;
        return V;
      }
      function E(A) {
        var C = 1e4;
        return A < 1e-6 && A > 0 || A > -1e-6 && A < 0 ? i(A * C) / C : A;
      }
      function T() {
        var A = this.props, C = E(A[0]), V = E(A[1]), I = E(A[4]), O = E(A[5]), q = E(A[12]), j = E(A[13]);
        return "matrix(" + C + "," + V + "," + I + "," + O + "," + q + "," + j + ")";
      }
      return function() {
        this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = l, this.rotateZ = o, this.skew = g, this.skewFromAxis = P, this.shear = p, this.scale = c, this.setTransform = x, this.translate = b, this.transform = m, this.multiply = M, this.applyToPoint = S, this.applyToX = k, this.applyToY = _, this.applyToZ = F, this.applyToPointArray = G, this.applyToTriplePoints = R, this.applyToPointStringified = z, this.toCSS = L, this.to2dCSS = T, this.clone = f, this.cloneFromProps = y, this.equals = d, this.inversePoints = D, this.inversePoint = H, this.getInverseMatrix = B, this._t = this.transform, this.isIdentity = u, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
        return typeof r;
      } : _typeof$3 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$3(t);
    }
    var lottie = {};
    function setLocation(t) {
      setLocationHref(t);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      setSubframeEnabled(t);
    }
    function setPrefix(t) {
      setIdPrefix(t);
    }
    function loadAnimation(t) {
      return animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if (typeof t == "string")
        switch (t) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10);
            break;
        }
      else
        !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(t, e) {
      t === "expressions" && setExpressionsPlugin(e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
        var i = e[r].split("=");
        if (decodeURIComponent(i[0]) == t)
          return decodeURIComponent(i[1]);
      }
      return null;
    }
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
        src: ""
      };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers = function() {
      var t = {}, e = {};
      t.registerModifier = r, t.getModifier = i;
      function r(s, a) {
        e[s] || (e[s] = a);
      }
      function i(s, a, n) {
        return new e[s](a, n);
      }
      return t;
    }();
    function ShapeModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = {
          shape: t.sh,
          data: t,
          localShapeCollection: shapeCollectionPool.newShapeCollection()
        };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier);
    function TrimModifier() {
    }
    extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
      var a = [];
      e <= 1 ? a.push({
        s: t,
        e
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
      var n = [], l, o = a.length, p;
      for (l = 0; l < o; l += 1)
        if (p = a[l], !(p.e * s < i || p.s * s > i + r)) {
          var g, P;
          p.s * s <= i ? g = 0 : g = (p.s * s - i) / r, p.e * s >= i + r ? P = 1 : P = (p.e * s - i) / r, n.push([g, P]);
        }
      return n.length || n.push([0, 0]), n;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, r;
      if (this._mdf || t) {
        var i = this.o.v % 360 / 360;
        if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
          var s = e;
          e = r, r = s;
        }
        e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r;
      } else
        e = this.sValue, r = this.eValue;
      var a, n, l = this.shapes.length, o, p, g, P, c, x = 0;
      if (r === e)
        for (n = 0; n < l; n += 1)
          this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
      else if (r === 1 && e === 0 || r === 0 && e === 1) {
        if (this._mdf)
          for (n = 0; n < l; n += 1)
            this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
      } else {
        var b = [], m, M;
        for (n = 0; n < l; n += 1)
          if (m = this.shapes[n], !m.shape._mdf && !this._mdf && !t && this.m !== 2)
            m.shape.paths = m.localShapeCollection;
          else {
            if (a = m.shape.paths, p = a._length, c = 0, !m.shape._mdf && m.pathsData.length)
              c = m.totalShapeLength;
            else {
              for (g = this.releasePathsData(m.pathsData), o = 0; o < p; o += 1)
                P = bez.getSegmentsLength(a.shapes[o]), g.push(P), c += P.totalLength;
              m.totalShapeLength = c, m.pathsData = g;
            }
            x += c, m.shape._mdf = !0;
          }
        var u = e, d = r, f = 0, y;
        for (n = l - 1; n >= 0; n -= 1)
          if (m = this.shapes[n], m.shape._mdf) {
            for (M = m.localShapeCollection, M.releaseShapes(), this.m === 2 && l > 1 ? (y = this.calculateShapeEdges(e, r, m.totalShapeLength, f, x), f += m.totalShapeLength) : y = [[u, d]], p = y.length, o = 0; o < p; o += 1) {
              u = y[o][0], d = y[o][1], b.length = 0, d <= 1 ? b.push({
                s: m.totalShapeLength * u,
                e: m.totalShapeLength * d
              }) : u >= 1 ? b.push({
                s: m.totalShapeLength * (u - 1),
                e: m.totalShapeLength * (d - 1)
              }) : (b.push({
                s: m.totalShapeLength * u,
                e: m.totalShapeLength
              }), b.push({
                s: 0,
                e: m.totalShapeLength * (d - 1)
              }));
              var S = this.addShapes(m, b[0]);
              if (b[0].s !== b[0].e) {
                if (b.length > 1) {
                  var k = m.shape.paths.shapes[m.shape.paths._length - 1];
                  if (k.c) {
                    var _ = S.pop();
                    this.addPaths(S, M), S = this.addShapes(m, b[1], _);
                  } else
                    this.addPaths(S, M), S = this.addShapes(m, b[1]);
                }
                this.addPaths(S, M);
              }
            }
            m.shape.paths = M;
          }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        e.addShape(t[r]);
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
      s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
      e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
      var i = t.pathsData, s = t.shape.paths.shapes, a, n = t.shape.paths._length, l, o, p = 0, g, P, c, x, b = [], m, M = !0;
      for (r ? (P = r._length, m = r._length) : (r = shapePool.newElement(), P = 0, m = 0), b.push(r), a = 0; a < n; a += 1) {
        for (c = i[a].lengths, r.c = s[a].c, o = s[a].c ? c.length : c.length + 1, l = 1; l < o; l += 1)
          if (g = c[l - 1], p + g.addedLength < e.s)
            p += g.addedLength, r.c = !1;
          else if (p > e.e) {
            r.c = !1;
            break;
          } else
            e.s <= p && e.e >= p + g.addedLength ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[l], s[a].v[l], r, P, M), M = !1) : (x = bez.getNewSegment(s[a].v[l - 1], s[a].v[l], s[a].o[l - 1], s[a].i[l], (e.s - p) / g.addedLength, (e.e - p) / g.addedLength, c[l - 1]), this.addSegmentFromArray(x, r, P, M), M = !1, r.c = !1), p += g.addedLength, P += 1;
        if (s[a].c && c.length) {
          if (g = c[l - 1], p <= e.e) {
            var u = c[l - 1].addedLength;
            e.s <= p && e.e >= p + u ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[0], s[a].v[0], r, P, M), M = !1) : (x = bez.getNewSegment(s[a].v[l - 1], s[a].v[0], s[a].o[l - 1], s[a].i[0], (e.s - p) / u, (e.e - p) / u, c[l - 1]), this.addSegmentFromArray(x, r, P, M), M = !1, r.c = !1);
          } else
            r.c = !1;
          p += g.addedLength, P += 1;
        }
        if (r._length && (r.setXYAt(r.v[m][0], r.v[m][1], "i", m), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > e.e)
          break;
        a < n - 1 && (r = shapePool.newElement(), M = !0, b.push(r), P = 0);
      }
      return b;
    };
    function PuckerAndBloatModifier() {
    }
    extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var r = e / 100, i = [0, 0], s = t._length, a = 0;
      for (a = 0; a < s; a += 1)
        i[0] += t.v[a][0], i[1] += t.v[a][1];
      i[0] /= s, i[1] /= s;
      var n = shapePool.newElement();
      n.c = t.c;
      var l, o, p, g, P, c;
      for (a = 0; a < s; a += 1)
        l = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, p = t.o[a][0] + (i[0] - t.o[a][0]) * -r, g = t.o[a][1] + (i[1] - t.o[a][1]) * -r, P = t.i[a][0] + (i[0] - t.i[a][0]) * -r, c = t.i[a][1] + (i[1] - t.i[a][1]) * -r, n.setTripleAt(l, o, p, g, P, c, a);
      return n;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.amount.v;
      if (n !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t))
            for (o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1)
              o.addShape(this.processPath(e[s], n));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(o) {
        var p = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || p, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
            var p;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var g, P;
              if (p = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / p, 0), P = this.p.getValueAtTime(this.p.keyframes[0].t / p, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / p, 0), P = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / p, 0)) : (g = this.p.pv, P = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / p, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                g = [], P = [];
                var c = this.px, x = this.py;
                c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (g[0] = c.getValueAtTime((c.keyframes[0].t + 0.01) / p, 0), g[1] = x.getValueAtTime((x.keyframes[0].t + 0.01) / p, 0), P[0] = c.getValueAtTime(c.keyframes[0].t / p, 0), P[1] = x.getValueAtTime(x.keyframes[0].t / p, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (g[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / p, 0), g[1] = x.getValueAtTime(x.keyframes[x.keyframes.length - 1].t / p, 0), P[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - 0.01) / p, 0), P[1] = x.getValueAtTime((x.keyframes[x.keyframes.length - 1].t - 0.01) / p, 0)) : (g = [c.pv, x.pv], P[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - 0.01) / p, c.offsetTime), P[1] = x.getValueAtTime((x._caching.lastFrame + x.offsetTime - 0.01) / p, x.offsetTime));
              } else
                P = t, g = P;
              this.v.rotate(-Math.atan2(g[1] - P[1], g[0] - P[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function i() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length)
          this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else
          return;
        if (!this.s.effectsSequence.length)
          this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else
          return;
        if (this.sk)
          if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          else
            return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function s() {
      }
      function a(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
      }
      function n(o, p, g) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = p, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || o), p.p && p.p.s ? (this.px = PropertyFactory.getProp(o, p.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, p.p.y, 0, 0, this), p.p.z && (this.pz = PropertyFactory.getProp(o, p.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, p.p || {
          k: [0, 0, 0]
        }, 1, 0, this), p.rx) {
          if (this.rx = PropertyFactory.getProp(o, p.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, p.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, p.rz, 0, degToRads, this), p.or.k[0].ti) {
            var P, c = p.or.k.length;
            for (P = 0; P < c; P += 1)
              p.or.k[P].to = null, p.or.k[P].ti = null;
          }
          this.or = PropertyFactory.getProp(o, p.or, 1, degToRads, this), this.or.sh = !0;
        } else
          this.r = PropertyFactory.getProp(o, p.r || {
            k: 0
          }, 0, degToRads, this);
        p.sk && (this.sk = PropertyFactory.getProp(o, p.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, p.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, p.a || {
          k: [0, 0, 0]
        }, 1, 0, this), this.s = PropertyFactory.getProp(o, p.s || {
          k: [100, 100, 100]
        }, 1, 0.01, this), p.o ? this.o = PropertyFactory.getProp(o, p.o, 0, 0.01, o) : this.o = {
          _mdf: !1,
          v: 1
        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      n.prototype = {
        applyToMatrix: e,
        getValue: r,
        precalculateMatrix: i,
        autoOrient: s
      }, extendPrototype([DynamicPropertyContainer], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
      function l(o, p, g) {
        return new n(o, p, g);
      }
      return {
        getTransformProperty: l
      };
    }();
    function RepeaterModifier() {
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
      var n = a ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
      t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / l : l, a ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, r, i) {
      for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0; )
        r -= 1, this._elements.unshift(e[r]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, r, i, s, a, n = !1;
      if (this._mdf || t) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l; ) {
            var o = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            o.it.push({
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
            }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), n = !0;
        }
        a = 0;
        var p;
        for (i = 0; i <= this._groups.length - 1; i += 1) {
          if (p = a < l, this._groups[i]._render = p, this.changeGroupRender(this._groups[i].it, p), !p) {
            var g = this.elemsData[i].it, P = g[g.length - 1];
            P.transform.op.v !== 0 ? (P.transform.op._mdf = !0, P.transform.op.v = 0) : P.transform.op._mdf = !1;
          }
          a += 1;
        }
        this._currentCopies = l;
        var c = this.o.v, x = c % 1, b = c > 0 ? Math.floor(c) : Math.ceil(c), m = this.pMatrix.props, M = this.rMatrix.props, u = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var d = 0;
        if (c > 0) {
          for (; d < b; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), d += 1;
          x && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, x, !1), d += x);
        } else if (c < 0) {
          for (; d > b; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), d -= 1;
          x && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -x, !0), d -= x);
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
        for (var f, y; a; ) {
          if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, y = r.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), d !== 0) {
            for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(M[0], M[1], M[2], M[3], M[4], M[5], M[6], M[7], M[8], M[9], M[10], M[11], M[12], M[13], M[14], M[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f = 0; f < y; f += 1)
              r[f] = this.matrix.props[f];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), f = 0; f < y; f += 1)
              r[f] = this.matrix.props[f];
          d += 1, a -= 1, i += s;
        }
      } else
        for (a = this._currentCopies, i = 0, s = 1; a; )
          e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
      return n;
    }, RepeaterModifier.prototype.addShape = function() {
    };
    function RoundCornersModifier() {
    }
    extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var r = shapePool.newElement();
      r.c = t.c;
      var i, s = t._length, a, n, l, o, p, g, P = 0, c, x, b, m, M, u;
      for (i = 0; i < s; i += 1)
        a = t.v[i], l = t.o[i], n = t.i[i], a[0] === l[0] && a[1] === l[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(a[0], a[1], l[0], l[1], n[0], n[1], P), P += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], p = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), g = p ? Math.min(p / 2, e) / p : 0, M = a[0] + (o[0] - a[0]) * g, c = M, u = a[1] - (a[1] - o[1]) * g, x = u, b = c - (c - a[0]) * roundCorner, m = x - (x - a[1]) * roundCorner, r.setTripleAt(c, x, b, m, M, u, P), P += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], p = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), g = p ? Math.min(p / 2, e) / p : 0, b = a[0] + (o[0] - a[0]) * g, c = b, m = a[1] + (o[1] - a[1]) * g, x = m, M = c - (c - a[0]) * roundCorner, u = x - (x - a[1]) * roundCorner, r.setTripleAt(c, x, b, m, M, u, P), P += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], P), P += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.rd.v;
      if (n !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t))
            for (o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1)
              o.addShape(this.processPath(e[s], n));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function floatEqual(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function floatZero(t) {
      return Math.abs(t) <= 1e-5;
    }
    function lerp(t, e, r) {
      return t * (1 - r) + e * r;
    }
    function lerpPoint(t, e, r) {
      return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
    }
    function quadRoots(t, e, r) {
      if (t === 0)
        return [];
      var i = e * e - 4 * t * r;
      if (i < 0)
        return [];
      var s = -e / (2 * t);
      if (i === 0)
        return [s];
      var a = Math.sqrt(i) / (2 * t);
      return [s - a, s + a];
    }
    function polynomialCoefficients(t, e, r, i) {
      return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t];
    }
    function singlePoint(t) {
      return new PolynomialBezier(t, t, t, t, !1);
    }
    function PolynomialBezier(t, e, r, i, s) {
      s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
      var a = polynomialCoefficients(t[0], e[0], r[0], i[0]), n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
      this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i];
    }
    PolynomialBezier.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, PolynomialBezier.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(t))
        return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (r < 0)
        return [];
      var i = Math.sqrt(r);
      return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
        return s > 0 && s < 1;
      });
    }, PolynomialBezier.prototype.split = function(t) {
      if (t <= 0)
        return [singlePoint(this.points[0]), this];
      if (t >= 1)
        return [this, singlePoint(this.points[this.points.length - 1])];
      var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r, t), a = lerpPoint(r, i, t), n = lerpPoint(s, a, t);
      return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)];
    };
    function extrema(t, e) {
      var r = t.points[0][e], i = t.points[t.points.length - 1][e];
      if (r > i) {
        var s = i;
        i = r, r = s;
      }
      for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
        if (a[n] > 0 && a[n] < 1) {
          var l = t.point(a[n])[e];
          l < r ? r = l : l > i && (i = l);
        }
      return {
        min: r,
        max: i
      };
    }
    PolynomialBezier.prototype.bounds = function() {
      return {
        x: extrema(this, 0),
        y: extrema(this, 1)
      };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var t = this.bounds();
      return {
        left: t.x.min,
        right: t.x.max,
        top: t.y.min,
        bottom: t.y.max,
        width: t.x.max - t.x.min,
        height: t.y.max - t.y.min,
        cx: (t.x.max + t.x.min) / 2,
        cy: (t.y.max + t.y.min) / 2
      };
    };
    function intersectData(t, e, r) {
      var i = t.boundingBox();
      return {
        cx: i.cx,
        cy: i.cy,
        width: i.width,
        height: i.height,
        bez: t,
        t: (e + r) / 2,
        t1: e,
        t2: r
      };
    }
    function splitData(t) {
      var e = t.bez.split(0.5);
      return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }
    function boxIntersect(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function intersectsImpl(t, e, r, i, s, a) {
      if (boxIntersect(t, e)) {
        if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
          s.push([t.t, e.t]);
          return;
        }
        var n = splitData(t), l = splitData(e);
        intersectsImpl(n[0], l[0], r + 1, i, s, a), intersectsImpl(n[0], l[1], r + 1, i, s, a), intersectsImpl(n[1], l[0], r + 1, i, s, a), intersectsImpl(n[1], l[1], r + 1, i, s, a);
      }
    }
    PolynomialBezier.prototype.intersections = function(t, e, r) {
      e === void 0 && (e = 2), r === void 0 && (r = 7);
      var i = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
    }, PolynomialBezier.shapeSegment = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0);
    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0);
    };
    function crossProduct(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function lineIntersection(t, e, r, i) {
      var s = [t[0], t[1], 1], a = [e[0], e[1], 1], n = [r[0], r[1], 1], l = [i[0], i[1], 1], o = crossProduct(crossProduct(s, a), crossProduct(n, l));
      return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]];
    }
    function polarOffset(t, e, r) {
      return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
    }
    function pointDistance(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function pointEqual(t, e) {
      return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }
    function ZigZagModifier() {
    }
    extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function setPoint(t, e, r, i, s, a, n) {
      var l = r - Math.PI / 2, o = r + Math.PI / 2, p = e[0] + Math.cos(r) * i * s, g = e[1] - Math.sin(r) * i * s;
      t.setTripleAt(p, g, p + Math.cos(l) * a, g - Math.sin(l) * a, p + Math.cos(o) * n, g - Math.sin(o) * n, t.length());
    }
    function getPerpendicularVector(t, e) {
      var r = [e[0] - t[0], e[1] - t[1]], i = -Math.PI * 0.5, s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
      return s;
    }
    function getProjectingAngle(t, e) {
      var r = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = t.v[r], a = t.v[i], n = getPerpendicularVector(s, a);
      return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
    }
    function zigZagCorner(t, e, r, i, s, a, n) {
      var l = getProjectingAngle(e, r), o = e.v[r % e._length], p = e.v[r === 0 ? e._length - 1 : r - 1], g = e.v[(r + 1) % e._length], P = a === 2 ? Math.sqrt(Math.pow(o[0] - p[0], 2) + Math.pow(o[1] - p[1], 2)) : 0, c = a === 2 ? Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)) : 0;
      setPoint(t, e.v[r % e._length], l, n, i, c / ((s + 1) * 2), P / ((s + 1) * 2));
    }
    function zigZagSegment(t, e, r, i, s, a) {
      for (var n = 0; n < i; n += 1) {
        var l = (n + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, p = e.normalAngle(l), g = e.point(l);
        setPoint(t, g, p, a, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), a = -a;
      }
      return a;
    }
    ZigZagModifier.prototype.processPath = function(t, e, r, i) {
      var s = t._length, a = shapePool.newElement();
      if (a.c = t.c, t.c || (s -= 1), s === 0)
        return a;
      var n = -1, l = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(a, t, 0, e, r, i, n);
      for (var o = 0; o < s; o += 1)
        n = zigZagSegment(a, l, e, r, i, -n), o === s - 1 && !t.c ? l = null : l = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(a, t, o + 1, e, r, i, n);
      return a;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (n !== 0) {
        var p, g;
        for (r = 0; r < i; r += 1) {
          if (p = this.shapes[r], g = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t))
            for (g.releaseShapes(), p.shape._mdf = !0, e = p.shape.paths.shapes, a = p.shape.paths._length, s = 0; s < a; s += 1)
              g.addShape(this.processPath(e[s], n, l, o));
          p.shape.paths = p.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function linearOffset(t, e, r) {
      var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, i, r), polarOffset(e, i, r)];
    }
    function offsetSegment(t, e) {
      var r, i, s, a, n, l, o;
      o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], a = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], l = o[1];
      var p = lineIntersection(r, i, s, a);
      p === null && (p = i);
      var g = lineIntersection(n, l, s, a);
      return g === null && (g = n), new PolynomialBezier(r, p, g, l);
    }
    function joinLines(t, e, r, i, s) {
      var a = e.points[3], n = r.points[0];
      if (i === 3 || pointEqual(a, n))
        return a;
      if (i === 2) {
        var l = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, p = lineIntersection(a, polarOffset(a, l + Math.PI / 2, 100), n, polarOffset(n, l + Math.PI / 2, 100)), g = p ? pointDistance(p, a) : pointDistance(a, n) / 2, P = polarOffset(a, l, 2 * g * roundCorner);
        return t.setXYAt(P[0], P[1], "o", t.length() - 1), P = polarOffset(n, o, 2 * g * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], P[0], P[1], t.length()), n;
      }
      var c = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], x = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1], b = lineIntersection(c, a, n, x);
      return b && pointDistance(b, a) < s ? (t.setTripleAt(b[0], b[1], b[0], b[1], b[0], b[1], t.length()), b) : a;
    }
    function getIntersection(t, e) {
      var r = t.intersections(e);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
    }
    function pruneSegmentIntersection(t, e) {
      var r = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
      return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i];
    }
    function pruneIntersections(t) {
      for (var e, r = 1; r < t.length; r += 1)
        e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
      return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function offsetSegmentSplit(t, e) {
      var r = t.inflectionPoints(), i, s, a, n;
      if (r.length === 0)
        return [offsetSegment(t, e)];
      if (r.length === 1 || floatEqual(r[1], 1))
        return a = t.split(r[0]), i = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(s, e)];
      a = t.split(r[0]), i = a[0];
      var l = (r[1] - r[0]) / (1 - r[0]);
      return a = a[1].split(l), n = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)];
    }
    function OffsetPathModifier() {
    }
    extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
      var s = shapePool.newElement();
      s.c = t.c;
      var a = t.length();
      t.c || (a -= 1);
      var n, l, o, p = [];
      for (n = 0; n < a; n += 1)
        o = PolynomialBezier.shapeSegment(t, n), p.push(offsetSegmentSplit(o, e));
      if (!t.c)
        for (n = a - 1; n >= 0; n -= 1)
          o = PolynomialBezier.shapeSegmentInverted(t, n), p.push(offsetSegmentSplit(o, e));
      p = pruneIntersections(p);
      var g = null, P = null;
      for (n = 0; n < p.length; n += 1) {
        var c = p[n];
        for (P && (g = joinLines(s, P, c[0], r, i)), P = c[c.length - 1], l = 0; l < c.length; l += 1)
          o = c[l], g && pointEqual(o.points[0], g) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), g = o.points[3];
      }
      return p.length && joinLines(s, P, p[0][0], r, i), s;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
      if (n !== 0) {
        var p, g;
        for (r = 0; r < i; r += 1) {
          if (p = this.shapes[r], g = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t))
            for (g.releaseShapes(), p.shape._mdf = !0, e = p.shape.paths.shapes, a = p.shape.paths._length, s = 0; s < a; s += 1)
              g.addShape(this.processPath(e[s], n, o, l));
          p.shape.paths = p.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a, n = 0; n < s; n += 1)
        switch (a = e[n].toLowerCase(), a) {
          case "italic":
            i = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200";
            break;
        }
      return {
        style: i,
        weight: t.fWeight || r
      };
    }
    var FontManager = function() {
      var t = 5e3, e = {
        w: 0,
        size: 0,
        shapes: [],
        data: {
          shapes: []
        }
      }, r = [];
      r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = 127988, s = 917631, a = 917601, n = 917626, l = 65039, o = 8205, p = 127462, g = 127487, P = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function c(E) {
        var T = E.split(","), A, C = T.length, V = [];
        for (A = 0; A < C; A += 1)
          T[A] !== "sans-serif" && T[A] !== "monospace" && V.push(T[A]);
        return V.join(",");
      }
      function x(E, T) {
        var A = createTag("span");
        A.setAttribute("aria-hidden", !0), A.style.fontFamily = T;
        var C = createTag("span");
        C.innerText = "giItT1WQy@!-/#", A.style.position = "absolute", A.style.left = "-10000px", A.style.top = "-10000px", A.style.fontSize = "300px", A.style.fontVariant = "normal", A.style.fontStyle = "normal", A.style.fontWeight = "normal", A.style.letterSpacing = "0", A.appendChild(C), document.body.appendChild(A);
        var V = C.offsetWidth;
        return C.style.fontFamily = c(E) + ", " + T, {
          node: C,
          w: V,
          parent: A
        };
      }
      function b() {
        var E, T = this.fonts.length, A, C, V = T;
        for (E = 0; E < T; E += 1)
          this.fonts[E].loaded ? V -= 1 : this.fonts[E].fOrigin === "n" || this.fonts[E].origin === 0 ? this.fonts[E].loaded = !0 : (A = this.fonts[E].monoCase.node, C = this.fonts[E].monoCase.w, A.offsetWidth !== C ? (V -= 1, this.fonts[E].loaded = !0) : (A = this.fonts[E].sansCase.node, C = this.fonts[E].sansCase.w, A.offsetWidth !== C && (V -= 1, this.fonts[E].loaded = !0)), this.fonts[E].loaded && (this.fonts[E].sansCase.parent.parentNode.removeChild(this.fonts[E].sansCase.parent), this.fonts[E].monoCase.parent.parentNode.removeChild(this.fonts[E].monoCase.parent)));
        V !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function m(E, T) {
        var A = document.body && T ? "svg" : "canvas", C, V = getFontProperties(E);
        if (A === "svg") {
          var I = createNS("text");
          I.style.fontSize = "100px", I.setAttribute("font-family", E.fFamily), I.setAttribute("font-style", V.style), I.setAttribute("font-weight", V.weight), I.textContent = "1", E.fClass ? (I.style.fontFamily = "inherit", I.setAttribute("class", E.fClass)) : I.style.fontFamily = E.fFamily, T.appendChild(I), C = I;
        } else {
          var O = new OffscreenCanvas(500, 500).getContext("2d");
          O.font = V.style + " " + V.weight + " 100px " + E.fFamily, C = O;
        }
        function q(j) {
          return A === "svg" ? (C.textContent = j, C.getComputedTextLength()) : C.measureText(j).width;
        }
        return {
          measureText: q
        };
      }
      function M(E, T) {
        if (!E) {
          this.isLoaded = !0;
          return;
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = E.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = !0, E.list.forEach(function($) {
            $.helper = m($), $.cache = {};
          }), this.fonts = E.list;
          return;
        }
        var A = E.list, C, V = A.length, I = V;
        for (C = 0; C < V; C += 1) {
          var O = !0, q, j;
          if (A[C].loaded = !1, A[C].monoCase = x(A[C].fFamily, "monospace"), A[C].sansCase = x(A[C].fFamily, "sans-serif"), !A[C].fPath)
            A[C].loaded = !0, I -= 1;
          else if (A[C].fOrigin === "p" || A[C].origin === 3) {
            if (q = document.querySelectorAll('style[f-forigin="p"][f-family="' + A[C].fFamily + '"], style[f-origin="3"][f-family="' + A[C].fFamily + '"]'), q.length > 0 && (O = !1), O) {
              var W = createTag("style");
              W.setAttribute("f-forigin", A[C].fOrigin), W.setAttribute("f-origin", A[C].origin), W.setAttribute("f-family", A[C].fFamily), W.type = "text/css", W.innerText = "@font-face {font-family: " + A[C].fFamily + "; font-style: normal; src: url('" + A[C].fPath + "');}", T.appendChild(W);
            }
          } else if (A[C].fOrigin === "g" || A[C].origin === 1) {
            for (q = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j = 0; j < q.length; j += 1)
              q[j].href.indexOf(A[C].fPath) !== -1 && (O = !1);
            if (O) {
              var Q = createTag("link");
              Q.setAttribute("f-forigin", A[C].fOrigin), Q.setAttribute("f-origin", A[C].origin), Q.type = "text/css", Q.rel = "stylesheet", Q.href = A[C].fPath, document.body.appendChild(Q);
            }
          } else if (A[C].fOrigin === "t" || A[C].origin === 2) {
            for (q = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j = 0; j < q.length; j += 1)
              A[C].fPath === q[j].src && (O = !1);
            if (O) {
              var X = createTag("link");
              X.setAttribute("f-forigin", A[C].fOrigin), X.setAttribute("f-origin", A[C].origin), X.setAttribute("rel", "stylesheet"), X.setAttribute("href", A[C].fPath), T.appendChild(X);
            }
          }
          A[C].helper = m(A[C], T), A[C].cache = {}, this.fonts.push(A[C]);
        }
        I === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function u(E) {
        if (E) {
          this.chars || (this.chars = []);
          var T, A = E.length, C, V = this.chars.length, I;
          for (T = 0; T < A; T += 1) {
            for (C = 0, I = !1; C < V; )
              this.chars[C].style === E[T].style && this.chars[C].fFamily === E[T].fFamily && this.chars[C].ch === E[T].ch && (I = !0), C += 1;
            I || (this.chars.push(E[T]), V += 1);
          }
        }
      }
      function d(E, T, A) {
        for (var C = 0, V = this.chars.length; C < V; ) {
          if (this.chars[C].ch === E && this.chars[C].style === T && this.chars[C].fFamily === A)
            return this.chars[C];
          C += 1;
        }
        return (typeof E == "string" && E.charCodeAt(0) !== 13 || !E) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", E, T, A)), e;
      }
      function f(E, T, A) {
        var C = this.getFontByName(T), V = E;
        if (!C.cache[V]) {
          var I = C.helper;
          if (E === " ") {
            var O = I.measureText("|" + E + "|"), q = I.measureText("||");
            C.cache[V] = (O - q) / 100;
          } else
            C.cache[V] = I.measureText(E) / 100;
        }
        return C.cache[V] * A;
      }
      function y(E) {
        for (var T = 0, A = this.fonts.length; T < A; ) {
          if (this.fonts[T].fName === E)
            return this.fonts[T];
          T += 1;
        }
        return this.fonts[0];
      }
      function S(E) {
        var T = 0, A = E.charCodeAt(0);
        if (A >= 55296 && A <= 56319) {
          var C = E.charCodeAt(1);
          C >= 56320 && C <= 57343 && (T = (A - 55296) * 1024 + C - 56320 + 65536);
        }
        return T;
      }
      function k(E, T) {
        var A = E.toString(16) + T.toString(16);
        return P.indexOf(A) !== -1;
      }
      function _(E) {
        return E === o;
      }
      function F(E) {
        return E === l;
      }
      function B(E) {
        var T = S(E);
        return T >= p && T <= g;
      }
      function H(E) {
        return B(E.substr(0, 2)) && B(E.substr(2, 2));
      }
      function D(E) {
        return r.indexOf(E) !== -1;
      }
      function R(E, T) {
        var A = S(E.substr(T, 2));
        if (A !== i)
          return !1;
        var C = 0;
        for (T += 2; C < 5; ) {
          if (A = S(E.substr(T, 2)), A < a || A > n)
            return !1;
          C += 1, T += 2;
        }
        return S(E.substr(T, 2)) === s;
      }
      function G() {
        this.isLoaded = !0;
      }
      var z = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      z.isModifier = k, z.isZeroWidthJoiner = _, z.isFlagEmoji = H, z.isRegionalCode = B, z.isCombinedCharacter = D, z.isRegionalFlag = R, z.isVariationSelector = F, z.BLACK_FLAG_CODE_POINT = i;
      var L = {
        addChars: u,
        addFonts: M,
        getCharData: d,
        getFontByName: y,
        measureText: f,
        checkLoadedFonts: b,
        setIsLoaded: G
      };
      return z.prototype = L, z;
    }();
    function SlotManager(t) {
      this.animationData = t;
    }
    SlotManager.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function slotFactory(t) {
      return new SlotManager(t);
    }
    function RenderableElement() {
    }
    RenderableElement.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
      },
      addRenderableComponent: function(e) {
        this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
      },
      removeRenderableComponent: function(e) {
        this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
      },
      prepareRenderableFrame: function(e) {
        this.checkLayerLimits(e);
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
      },
      /**
         * @function
         * Initializes frame related properties.
         *
         * @param {number} num
         * current frame number in Layer's time
         *
         */
      checkLayerLimits: function(e) {
        this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
      },
      renderRenderable: function() {
        var e, r = this.renderableComponents.length;
        for (e = 0; e < r; e += 1)
          this.renderableComponents[e].renderFrame(this._isFirstFrame);
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        };
      },
      getLayerSize: function() {
        return this.data.ty === 5 ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        };
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
        return t[e] || "";
      };
    }();
    function SliderEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function AngleEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function ColorEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function PointEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function LayerIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function MaskIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function CheckboxEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var r = t.ef || [];
      this.effectElements = [];
      var i, s = r.length, a;
      for (i = 0; i < s; i += 1)
        a = new GroupEffect(r[i], e), this.effectElements.push(a);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, i = this.data.ef.length, s, a = this.data.ef;
      for (r = 0; r < i; r += 1) {
        switch (s = null, a[r].ty) {
          case 0:
            s = new SliderEffect(a[r], e, this);
            break;
          case 1:
            s = new AngleEffect(a[r], e, this);
            break;
          case 2:
            s = new ColorEffect(a[r], e, this);
            break;
          case 3:
            s = new PointEffect(a[r], e, this);
            break;
          case 4:
          case 7:
            s = new CheckboxEffect(a[r], e, this);
            break;
          case 10:
            s = new LayerIndexEffect(a[r], e, this);
            break;
          case 11:
            s = new MaskIndexEffect(a[r], e, this);
            break;
          case 5:
            s = new EffectsManager(a[r], e);
            break;
          default:
            s = new NoValueEffect(a[r]);
            break;
        }
        s && this.effectElements.push(s);
      }
    };
    function BaseElement() {
    }
    BaseElement.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask)
          return !1;
        for (var e = 0, r = this.data.masksProperties.length; e < r; ) {
          if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1)
            return !0;
          e += 1;
        }
        return !1;
      },
      initExpressions: function() {
        var e = getExpressionInterfaces();
        if (e) {
          var r = e("layer"), i = e("effects"), s = e("shape"), a = e("text"), n = e("comp");
          this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
          var l = i.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = n(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface);
        }
      },
      setBlendMode: function() {
        var e = getBlendMode(this.data.bm), r = this.baseElement || this.layerElement;
        r.style["mix-blend-mode"] = e;
      },
      initBaseData: function(e, r, i) {
        this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
      },
      getType: function() {
        return this.type;
      },
      sourceRectAtTime: function() {
      }
    };
    function FrameElement() {
    }
    FrameElement.prototype = {
      /**
         * @function
         * Initializes frame related properties.
         *
         */
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
      },
      /**
         * @function
         * Calculates all dynamic values
         *
         * @param {number} num
         * current frame number in Layer's time
         * @param {boolean} isVisible
         * if layers is currently in range
         *
         */
      prepareProperties: function(e, r) {
        var i, s = this.dynamicProperties.length;
        for (i = 0; i < s; i += 1)
          (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      },
      addDynamicProperty: function(e) {
        this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
      }
    };
    function FootageElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
    }
    FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("footage");
        this.layerInterface = e(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    };
    function AudioElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
      var i = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
        k: [100]
      }, 1, 0.01, this);
    }
    AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder)
        this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    };
    function BaseRenderer() {
    }
    BaseRenderer.prototype.checkLayers = function(t) {
      var e, r = this.layers.length, i;
      for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1)
        this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
      this.checkPendingElements();
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
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      this.completeLayers = !1;
      var e, r = t.length, i, s = this.layers.length;
      for (e = 0; e < r; e += 1)
        for (i = 0; i < s; ) {
          if (this.layers[i].id === t[e].id) {
            this.layers[i] = t[e];
            break;
          }
          i += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
      for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
        s[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (r.push(i[a]), i[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r))), a += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var i = this.createComp(t[e]);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
        }
    }, BaseRenderer.prototype.getElementById = function(t) {
      var e, r = this.elements.length;
      for (e = 0; e < r; e += 1)
        if (this.elements[e].data.ind === t)
          return this.elements[e];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(t) {
      var e = t.shift(), r;
      if (typeof e == "number")
        r = this.elements[e];
      else {
        var i, s = this.elements.length;
        for (i = 0; i < s; i += 1)
          if (this.elements[i].data.nm === e) {
            r = this.elements[i];
            break;
          }
      }
      return t.length === 0 ? r : r.getElementByPath(t);
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      };
    };
    var effectTypes = {
      TRANSFORM_EFFECT: "transformEFfect"
    };
    function TransformElement() {
    }
    TransformElement.prototype = {
      initTransform: function() {
        var e = new Matrix();
        this.finalTransform = {
          mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _localMatMdf: !1,
          _opMdf: !1,
          mat: e,
          localMat: e,
          localOpacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var e, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; i < s; ) {
              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break;
              }
              i += 1;
            }
          if (this.finalTransform._matMdf)
            for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < s; i += 1)
              r.multiply(this.hierarchy[i].finalTransform.mProp.v);
        }
        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
      },
      renderLocalTransform: function() {
        if (this.localTransforms) {
          var e = 0, r = this.localTransforms.length;
          if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            for (; e < r; )
              this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
          if (this.finalTransform._localMatMdf) {
            var i = this.finalTransform.localMat;
            for (this.localTransforms[0].matrix.clone(i), e = 1; e < r; e += 1) {
              var s = this.localTransforms[e].matrix;
              i.multiply(s);
            }
            i.multiply(this.finalTransform.mat);
          }
          if (this.finalTransform._opMdf) {
            var a = this.finalTransform.localOpacity;
            for (e = 0; e < r; e += 1)
              a *= this.localTransforms[e].opacity * 0.01;
            this.finalTransform.localOpacity = a;
          }
        }
      },
      searchEffectTransforms: function() {
        if (this.renderableEffectsManager) {
          var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
          if (e.length) {
            this.localTransforms = [], this.finalTransform.localMat = new Matrix();
            var r = 0, i = e.length;
            for (r = 0; r < i; r += 1)
              this.localTransforms.push(e[r]);
          }
        }
      },
      globalToLocal: function(e) {
        var r = [];
        r.push(this.finalTransform);
        for (var i = !0, s = this.comp; i; )
          s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
        var a, n = r.length, l;
        for (a = 0; a < n; a += 1)
          l = r[a].mat.applyToPointArray(0, 0, 0), e = [e[0] - l[0], e[1] - l[1], 0];
        return e;
      },
      mHelper: new Matrix()
    };
    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i = this.globalData.defs, s, a = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(a), this.solidPath = "";
      var n, l = this.masksProperties, o = 0, p = [], g, P, c = createElementID(), x, b, m, M, u = "clipPath", d = "clip-path";
      for (s = 0; s < a; s += 1)
        if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (u = "mask", d = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (x = createNS("rect"), x.setAttribute("fill", "#ffffff"), x.setAttribute("width", this.element.comp.data.w || 0), x.setAttribute("height", this.element.comp.data.h || 0), p.push(x)) : x = null, n = createNS("path"), l[s].mode === "n")
          this.viewData[s] = {
            op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            elem: n,
            lastPath: ""
          }, i.appendChild(n);
        else {
          o += 1, n.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
          var f;
          if (l[s].x.k !== 0 ? (u = "mask", d = "mask", M = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), f = createElementID(), b = createNS("filter"), b.setAttribute("id", f), m = createNS("feMorphology"), m.setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), b.appendChild(m), i.appendChild(b), n.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (m = null, M = null), this.storedData[s] = {
            elem: n,
            x: M,
            expan: m,
            lastPath: "",
            lastOperator: "",
            filterId: f,
            lastRadius: 0
          }, l[s].mode === "i") {
            P = p.length;
            var y = createNS("g");
            for (g = 0; g < P; g += 1)
              y.appendChild(p[g]);
            var S = createNS("mask");
            S.setAttribute("mask-type", "alpha"), S.setAttribute("id", c + "_" + o), S.appendChild(n), i.appendChild(S), y.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + o + ")"), p.length = 0, p.push(y);
          } else
            p.push(n);
          l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
            elem: n,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            invRect: x
          }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s]);
        }
      for (this.maskElement = createNS(u), a = p.length, s = 0; s < a; s += 1)
        this.maskElement.appendChild(p[s]);
      o > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(d, "url(" + getLocationHref() + "#" + c + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
      for (r = 0; r < i; r += 1)
        if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
          var s = this.storedData[r].expan;
          this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2));
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, MaskElement.prototype.drawPath = function(t, e, r) {
      var i = " M" + e.v[0][0] + "," + e.v[0][1], s, a;
      for (a = e._length, s = 1; s < a; s += 1)
        i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
      if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
        var n = "";
        r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = r;
      function e(i, s) {
        var a = createNS("filter");
        return a.setAttribute("id", i), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a;
      }
      function r() {
        var i = createNS("feColorMatrix");
        return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
      }
      return t;
    }(), featureSupport = function() {
      var t = {
        maskType: !0,
        svgLumaHidden: !0,
        offscreenCanvas: typeof OffscreenCanvas < "u"
      };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, !0), n = 0;
      this.filters = [];
      var l;
      for (e = 0; e < i; e += 1) {
        l = null;
        var o = t.data.ef[e].ty;
        if (registeredEffects$1[o]) {
          var p = registeredEffects$1[o].effect;
          l = new p(a, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1);
        }
        l && this.filters.push(l);
      }
      n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    SVGEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1)
        this.filters[e].renderFrame(t);
    }, SVGEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1)
        this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function registerEffect$1(t, e, r) {
      registeredEffects$1[t] = {
        effect: e,
        countsAsEffect: r
      };
    }
    function SVGBaseElement() {
    }
    SVGBaseElement.prototype = {
      initRendererElement: function() {
        this.layerElement = createNS("g");
      },
      createContainerElements: function() {
        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var e = null;
        if (this.data.td) {
          this.matteMasks = {};
          var r = createNS("g");
          r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r);
        } else
          this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
          var i = createNS("clipPath"), s = createNS("path");
          s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var a = createElementID();
          if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
            var n = createNS("g");
            n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
          } else
            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")");
        }
        this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement;
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
      },
      getMatte: function(e) {
        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
          var r = this.layerId + "_" + e, i, s, a, n;
          if (e === 1 || e === 3) {
            var l = createNS("mask");
            l.setAttribute("id", r), l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(a), this.globalData.defs.appendChild(l), !featureSupport.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), n.appendChild(a), l.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
          } else if (e === 2) {
            var o = createNS("mask");
            o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
            var p = createNS("g");
            o.appendChild(p), i = createElementID(), s = filtersFactory.createFilter(i);
            var g = createNS("feComponentTransfer");
            g.setAttribute("in", "SourceGraphic"), s.appendChild(g);
            var P = createNS("feFuncA");
            P.setAttribute("type", "table"), P.setAttribute("tableValues", "1.0 0.0"), g.appendChild(P), this.globalData.defs.appendChild(s);
            var c = createNS("rect");
            c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), p.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), p.appendChild(c), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), p.appendChild(a), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), p.appendChild(c), n.appendChild(this.layerElement), p.appendChild(n)), this.globalData.defs.appendChild(o);
          }
          this.matteMasks[e] = r;
        }
        return this.matteMasks[e];
      },
      setMatte: function(e) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
      }
    };
    function HierarchyElement() {
    }
    HierarchyElement.prototype = {
      /**
         * @function
         * Initializes hierarchy properties
         *
         */
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting();
      },
      /**
         * @function
         * Sets layer's hierarchy.
         * @param {array} hierarch
         * layer's parent list
         *
         */
      setHierarchy: function(e) {
        this.hierarchy = e;
      },
      /**
         * @function
         * Sets layer as parent.
         *
         */
      setAsParent: function() {
        this._isParent = !0;
      },
      /**
         * @function
         * Searches layer's parenting chain
         *
         */
      checkParenting: function() {
        this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
      }
    };
    function RenderableDOMElement() {
    }
    (function() {
      var t = {
        initElement: function(r, i, s) {
          this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        },
        hide: function() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            var r = this.baseElement || this.layerElement;
            r.style.display = "none", this.hidden = !0;
          }
        },
        show: function() {
          if (this.isInRange && !this.isTransparent) {
            if (!this.data.hd) {
              var r = this.baseElement || this.layerElement;
              r.style.display = "block";
            }
            this.hidden = !1, this._isFirstFrame = !0;
          }
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        renderInnerContent: function() {
        },
        prepareFrame: function(r) {
          this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency();
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement();
        }
      };
      extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement);
    })();
    function IImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      };
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function IShapeElement() {
    }
    IShapeElement.prototype = {
      addShapeToModifiers: function(e) {
        var r, i = this.shapeModifiers.length;
        for (r = 0; r < i; r += 1)
          this.shapeModifiers[r].addShape(e);
      },
      isShapeInAnimatedModifiers: function(e) {
        for (var r = 0, i = this.shapeModifiers.length; r < i; )
          if (this.shapeModifiers[r].isAnimatedWithShape(e))
            return !0;
        return !1;
      },
      renderModifiers: function() {
        if (this.shapeModifiers.length) {
          var e, r = this.shapes.length;
          for (e = 0; e < r; e += 1)
            this.shapes[e].sh.reset();
          r = this.shapeModifiers.length;
          var i;
          for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame), !i); e -= 1)
            ;
        }
      },
      searchProcessedElement: function(e) {
        for (var r = this.processedElements, i = 0, s = r.length; i < s; ) {
          if (r[i].elem === e)
            return r[i].pos;
          i += 1;
        }
        return 0;
      },
      addProcessedElement: function(e, r) {
        for (var i = this.processedElements, s = i.length; s; )
          if (s -= 1, i[s].elem === e) {
            i[s].pos = r;
            return;
          }
        i.push(new ProcessedElement(e, r));
      },
      prepareFrame: function(e) {
        this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
      }
    };
    var lineCapEnum = {
      1: "butt",
      2: "round",
      3: "square"
    }, lineJoinEnum = {
      1: "miter",
      2: "round",
      3: "bevel"
    };
    function SVGShapeData(t, e, r) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
      for (var i = 0, s = t.length; i < s; ) {
        if (t[i].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        i += 1;
      }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    };
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null;
    }
    SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    };
    function DashProperty(t, e, r, i) {
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
      var s, a = e.length || 0, n;
      for (s = 0; s < a; s += 1)
        n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
          n: e[s].n,
          p: n
        };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    DashProperty.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, r = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1)
          this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty);
    function SVGStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
    function SVGFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
    function SVGNoStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
    function GradientProperty(t, e, r) {
      this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
      var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    GradientProperty.prototype.comparePoints = function(t, e) {
      for (var r = 0, i = this.o.length / 2, s; r < i; ) {
        if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > 0.01)
          return !1;
        r += 1;
      }
      return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4)
        return !1;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e; ) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
            return !1;
          t += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return !1;
      return !0;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, r = this.data.p * 4, i, s;
        for (e = 0; e < r; e += 1)
          i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
        if (this.o.length)
          for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1)
            i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    function SVGGradientFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
        k: 0
      }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || {
        k: 0
      }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var r = createElementID(), i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
      i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
      var s = [], a, n, l;
      for (l = e.g.p * 4, n = 0; n < l; n += 4)
        a = createNS("stop"), i.appendChild(a), s.push(a);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, s, a = createNS("mask"), n = createNS("path");
        a.appendChild(n);
        var l = createElementID(), o = createElementID();
        a.setAttribute("id", o);
        var p = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        p.setAttribute("id", l), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var g = this.stops;
        for (i = t.g.p * 4; i < s; i += 2)
          r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(r), g.push(r);
        n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = p, this.ms = a, this.ost = g, this.maskId = o, e.msElem = n;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(t, e, r) {
      this.transform = {
        mProps: t,
        op: e,
        container: r
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var buildShapeString = function(e, r, i, s) {
      if (r === 0)
        return "";
      var a = e.o, n = e.i, l = e.v, o, p = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
      for (o = 1; o < r; o += 1)
        p += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
      return i && r && (p += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), p += "z"), p;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix(), r = {
        createRenderFunction: i
      };
      function i(P) {
        switch (P.ty) {
          case "fl":
            return l;
          case "gf":
            return p;
          case "gs":
            return o;
          case "st":
            return g;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return n;
          case "tr":
            return s;
          case "no":
            return a;
          default:
            return null;
        }
      }
      function s(P, c, x) {
        (x || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (x || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS());
      }
      function a() {
      }
      function n(P, c, x) {
        var b, m, M, u, d, f, y = c.styles.length, S = c.lvl, k, _, F, B;
        for (f = 0; f < y; f += 1) {
          if (u = c.sh._mdf || x, c.styles[f].lvl < S) {
            for (_ = e.reset(), F = S - c.styles[f].lvl, B = c.transformers.length - 1; !u && F > 0; )
              u = c.transformers[B].mProps._mdf || u, F -= 1, B -= 1;
            if (u)
              for (F = S - c.styles[f].lvl, B = c.transformers.length - 1; F > 0; )
                _.multiply(c.transformers[B].mProps.v), F -= 1, B -= 1;
          } else
            _ = t;
          if (k = c.sh.paths, m = k._length, u) {
            for (M = "", b = 0; b < m; b += 1)
              d = k.shapes[b], d && d._length && (M += buildShapeString(d, d._length, d.c, _));
            c.caches[f] = M;
          } else
            M = c.caches[f];
          c.styles[f].d += P.hd === !0 ? "" : M, c.styles[f]._mdf = u || c.styles[f]._mdf;
        }
      }
      function l(P, c, x) {
        var b = c.style;
        (c.c._mdf || x) && b.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || x) && b.pElem.setAttribute("fill-opacity", c.o.v);
      }
      function o(P, c, x) {
        p(P, c, x), g(P, c, x);
      }
      function p(P, c, x) {
        var b = c.gf, m = c.g._hasOpacity, M = c.s.v, u = c.e.v;
        if (c.o._mdf || x) {
          var d = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          c.style.pElem.setAttribute(d, c.o.v);
        }
        if (c.s._mdf || x) {
          var f = P.t === 1 ? "x1" : "cx", y = f === "x1" ? "y1" : "cy";
          b.setAttribute(f, M[0]), b.setAttribute(y, M[1]), m && !c.g._collapsable && (c.of.setAttribute(f, M[0]), c.of.setAttribute(y, M[1]));
        }
        var S, k, _, F;
        if (c.g._cmdf || x) {
          S = c.cst;
          var B = c.g.c;
          for (_ = S.length, k = 0; k < _; k += 1)
            F = S[k], F.setAttribute("offset", B[k * 4] + "%"), F.setAttribute("stop-color", "rgb(" + B[k * 4 + 1] + "," + B[k * 4 + 2] + "," + B[k * 4 + 3] + ")");
        }
        if (m && (c.g._omdf || x)) {
          var H = c.g.o;
          for (c.g._collapsable ? S = c.cst : S = c.ost, _ = S.length, k = 0; k < _; k += 1)
            F = S[k], c.g._collapsable || F.setAttribute("offset", H[k * 2] + "%"), F.setAttribute("stop-opacity", H[k * 2 + 1]);
        }
        if (P.t === 1)
          (c.e._mdf || x) && (b.setAttribute("x2", u[0]), b.setAttribute("y2", u[1]), m && !c.g._collapsable && (c.of.setAttribute("x2", u[0]), c.of.setAttribute("y2", u[1])));
        else {
          var D;
          if ((c.s._mdf || c.e._mdf || x) && (D = Math.sqrt(Math.pow(M[0] - u[0], 2) + Math.pow(M[1] - u[1], 2)), b.setAttribute("r", D), m && !c.g._collapsable && c.of.setAttribute("r", D)), c.e._mdf || c.h._mdf || c.a._mdf || x) {
            D || (D = Math.sqrt(Math.pow(M[0] - u[0], 2) + Math.pow(M[1] - u[1], 2)));
            var R = Math.atan2(u[1] - M[1], u[0] - M[0]), G = c.h.v;
            G >= 1 ? G = 0.99 : G <= -1 && (G = -0.99);
            var z = D * G, L = Math.cos(R + c.a.v) * z + M[0], E = Math.sin(R + c.a.v) * z + M[1];
            b.setAttribute("fx", L), b.setAttribute("fy", E), m && !c.g._collapsable && (c.of.setAttribute("fx", L), c.of.setAttribute("fy", E));
          }
        }
      }
      function g(P, c, x) {
        var b = c.style, m = c.d;
        m && (m._mdf || x) && m.dashStr && (b.pElem.setAttribute("stroke-dasharray", m.dashStr), b.pElem.setAttribute("stroke-dashoffset", m.dashoffset[0])), c.c && (c.c._mdf || x) && b.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || x) && b.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || x) && (b.pElem.setAttribute("stroke-width", c.w.v), b.msElem && b.msElem.setAttribute("stroke-width", c.w.v));
      }
      return r;
    }();
    function SVGShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, r, i, s = this.stylesList.length, a, n = [], l = !1;
      for (i = 0; i < s; i += 1) {
        for (a = this.stylesList[i], l = !1, n.length = 0, t = 0; t < e; t += 1)
          r = this.shapes[t], r.styles.indexOf(a) !== -1 && (n.push(r), l = r._isAnimated || l);
        n.length > 1 && l && this.setShapesAsAnimated(n);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var r, i = new SVGStyleData(t, e), s = i.pElem;
      if (t.ty === "st")
        r = new SVGStrokeStyleData(this, t, i);
      else if (t.ty === "fl")
        r = new SVGFillStyleData(this, t, i);
      else if (t.ty === "gf" || t.ty === "gs") {
        var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        r = new a(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
      } else
        t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
      return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
      return this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
      var i = 4;
      t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
      var s = ShapePropertyFactory.getShapeProp(this, t, i, this), a = new SVGShapeData(e, r, s);
      return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var r = 0, i = this.animatedContents.length; r < i; ) {
        if (this.animatedContents[r].element === e)
          return;
        r += 1;
      }
      this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(t),
        element: e,
        data: t
      });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e = t.styles, r, i = this.stylesList.length;
      for (r = 0; r < i; r += 1)
        this.stylesList[r].closed || e.push(this.stylesList[r]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
      var l = [].concat(a), o, p = t.length - 1, g, P, c = [], x = [], b, m, M;
      for (o = p; o >= 0; o -= 1) {
        if (M = this.searchProcessedElement(t[o]), M ? e[o] = r[M - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no")
          M ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), c.push(e[o].style);
        else if (t[o].ty === "gr") {
          if (!M)
            e[o] = this.createGroupElement(t[o]);
          else
            for (P = e[o].it.length, g = 0; g < P; g += 1)
              e[o].prevViewData[g] = e[o].it[g];
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, l, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
        } else
          t[o].ty === "tr" ? (M || (e[o] = this.createTransformElement(t[o], i)), b = e[o].transform, l.push(b)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (M || (e[o] = this.createShapeElement(t[o], l, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (M ? (m = e[o], m.closed = !1) : (m = ShapeModifiers.getModifier(t[o].ty), m.init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), x.push(m)) : t[o].ty === "rp" && (M ? (m = e[o], m.closed = !0) : (m = ShapeModifiers.getModifier(t[o].ty), e[o] = m, m.init(this, t, o, e), this.shapeModifiers.push(m), n = !1), x.push(m));
        this.addProcessedElement(t[o], o + 1);
      }
      for (p = c.length, o = 0; o < p; o += 1)
        c[o].closed = !0;
      for (p = x.length, o = 0; o < p; o += 1)
        x[o].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)
        (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, r;
      for (t = 0; t < e; t += 1)
        r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function LetterProps(t, e, r, i, s, a) {
      this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
        o: !0,
        sw: !!e,
        sc: !!r,
        fc: !!i,
        m: !0,
        p: !0
      };
    }
    LetterProps.prototype.update = function(t, e, r, i, s, a) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var n = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n;
    };
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
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
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, r = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = !0, this._mdf = !1;
        var i, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < s; i += 1)
          r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
        e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
        r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e = [], r = 0, i = t.length, s, a, n = !1, l = !1, o = ""; r < i; )
        n = l, l = !1, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (a = t.charCodeAt(r + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(r, 2), n = !0) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (a = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, l = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), r += o.length;
      return e;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = !0;
      var e = this.elem.globalData.fontManager, r = this.data, i = [], s, a, n, l = 0, o, p = r.m.g, g = 0, P = 0, c = 0, x = [], b = 0, m = 0, M, u, d = e.getFontByName(t.f), f, y = 0, S = getFontProperties(d);
      t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
      var k = t.tr / 1e3 * t.finalSize, _;
      if (t.sz)
        for (var F = !0, B = t.sz[0], H = t.sz[1], D, R; F; ) {
          R = this.buildFinalText(t.t), D = 0, b = 0, a = R.length, k = t.tr / 1e3 * t.finalSize;
          var G = -1;
          for (s = 0; s < a; s += 1)
            _ = R[s].charCodeAt(0), n = !1, R[s] === " " ? G = s : (_ === 13 || _ === 3) && (b = 0, n = !0, D += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (f = e.getCharData(R[s], d.fStyle, d.fFamily), y = n ? 0 : f.w * t.finalSize / 100) : y = e.measureText(R[s], t.f, t.finalSize), b + y > B && R[s] !== " " ? (G === -1 ? a += 1 : s = G, D += t.finalLineHeight || t.finalSize * 1.2, R.splice(s, G === s ? 1 : 0, "\r"), G = -1, b = 0) : (b += y, b += k);
          D += d.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && H < D ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = R, a = t.finalText.length, F = !1);
        }
      b = -k, y = 0;
      var z = 0, L;
      for (s = 0; s < a; s += 1)
        if (n = !1, L = t.finalText[s], _ = L.charCodeAt(0), _ === 13 || _ === 3 ? (z = 0, x.push(b), m = b > m ? b : m, b = -2 * k, o = "", n = !0, c += 1) : o = L, e.chars ? (f = e.getCharData(L, d.fStyle, e.getFontByName(t.f).fFamily), y = n ? 0 : f.w * t.finalSize / 100) : y = e.measureText(o, t.f, t.finalSize), L === " " ? z += y + k : (b += y + k + z, z = 0), i.push({
          l: y,
          an: y,
          add: g,
          n,
          anIndexes: [],
          val: o,
          line: c,
          animatorJustifyOffset: 0
        }), p == 2) {
          if (g += y, o === "" || o === " " || s === a - 1) {
            for ((o === "" || o === " ") && (g -= y); P <= s; )
              i[P].an = g, i[P].ind = l, i[P].extra = y, P += 1;
            l += 1, g = 0;
          }
        } else if (p == 3) {
          if (g += y, o === "" || s === a - 1) {
            for (o === "" && (g -= y); P <= s; )
              i[P].an = g, i[P].ind = l, i[P].extra = y, P += 1;
            g = 0, l += 1;
          }
        } else
          i[l].ind = l, i[l].extra = 0, l += 1;
      if (t.l = i, m = b > m ? b : m, x.push(b), t.sz)
        t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else
        switch (t.boxWidth = m, t.j) {
          case 1:
            t.justifyOffset = -t.boxWidth;
            break;
          case 2:
            t.justifyOffset = -t.boxWidth / 2;
            break;
          default:
            t.justifyOffset = 0;
        }
      t.lineWidths = x;
      var E = r.a, T, A;
      u = E.length;
      var C, V, I = [];
      for (M = 0; M < u; M += 1) {
        for (T = E[M], T.a.sc && (t.strokeColorAnim = !0), T.a.sw && (t.strokeWidthAnim = !0), (T.a.fc || T.a.fh || T.a.fs || T.a.fb) && (t.fillColorAnim = !0), V = 0, C = T.s.b, s = 0; s < a; s += 1)
          A = i[s], A.anIndexes[M] = V, (C == 1 && A.val !== "" || C == 2 && A.val !== "" && A.val !== " " || C == 3 && (A.n || A.val == " " || s == a - 1) || C == 4 && (A.n || s == a - 1)) && (T.s.rn === 1 && I.push(V), V += 1);
        r.a[M].s.totalChars = V;
        var O = -1, q;
        if (T.s.rn === 1)
          for (s = 0; s < a; s += 1)
            A = i[s], O != A.anIndexes[M] && (O = A.anIndexes[M], q = I.splice(Math.floor(Math.random() * I.length), 1)[0]), A.anIndexes[M] = q;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = d.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var r = this.copyData({}, this.data.d.k[e].s);
      r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var t = Math.max, e = Math.min, r = Math.floor;
      function i(a, n) {
        this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {
          k: 0
        }, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {
          v: 100
        }, this.o = PropertyFactory.getProp(a, n.o || {
          k: 0
        }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {
          k: 0
        }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {
          k: 0
        }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {
          k: 100
        }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      i.prototype = {
        getMult: function(n) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var l = 0, o = 0, p = 1, g = 1;
          this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? p = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
          var P = BezierFactory.getBezierEasing(l, o, p, g).get, c = 0, x = this.finalS, b = this.finalE, m = this.data.sh;
          if (m === 2)
            b === x ? c = n >= b ? 1 : 0 : c = t(0, e(0.5 / (b - x) + (n - x) / (b - x), 1)), c = P(c);
          else if (m === 3)
            b === x ? c = n >= b ? 0 : 1 : c = 1 - t(0, e(0.5 / (b - x) + (n - x) / (b - x), 1)), c = P(c);
          else if (m === 4)
            b === x ? c = 0 : (c = t(0, e(0.5 / (b - x) + (n - x) / (b - x), 1)), c < 0.5 ? c *= 2 : c = 1 - 2 * (c - 0.5)), c = P(c);
          else if (m === 5) {
            if (b === x)
              c = 0;
            else {
              var M = b - x;
              n = e(t(0, n + 0.5 - x), b - x);
              var u = -M / 2 + n, d = M / 2;
              c = Math.sqrt(1 - u * u / (d * d));
            }
            c = P(c);
          } else
            m === 6 ? (b === x ? c = 0 : (n = e(t(0, n + 0.5 - x), b - x), c = (1 + Math.cos(Math.PI + Math.PI * 2 * n / (b - x))) / 2), c = P(c)) : (n >= r(x) && (n - x < 0 ? c = t(0, e(e(b, 1) - (x - n), 1)) : c = t(0, e(b - n, 1))), c = P(c));
          if (this.sm.v !== 100) {
            var f = this.sm.v * 0.01;
            f === 0 && (f = 1e-8);
            var y = 0.5 - f * 0.5;
            c < y ? c = 0 : (c = (c - y) / f, c > 1 && (c = 1));
          }
          return c * this.a.v;
        },
        getValue: function(n) {
          this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && this.data.r === 2 && (this.e.v = this._currentTextLength);
          var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, p = this.s.v / l + o, g = this.e.v / l + o;
          if (p > g) {
            var P = p;
            p = g, g = P;
          }
          this.finalS = p, this.finalE = g;
        }
      }, extendPrototype([DynamicPropertyContainer], i);
      function s(a, n, l) {
        return new i(a, n);
      }
      return {
        getTextSelectorProp: s
      };
    }();
    function TextAnimatorDataProperty(t, e, r) {
      var i = {
        propType: !1
      }, s = PropertyFactory.getProp, a = e.a;
      this.a = {
        r: a.r ? s(t, a.r, 0, degToRads, r) : i,
        rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
        ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
        sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
        sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
        s: a.s ? s(t, a.s, 1, 0.01, r) : i,
        a: a.a ? s(t, a.a, 1, 0, r) : i,
        o: a.o ? s(t, a.o, 0, 0.01, r) : i,
        p: a.p ? s(t, a.p, 1, 0, r) : i,
        sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
        sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
        fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
        fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
        fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
        fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
        t: a.t ? s(t, a.t, 0, 0, r) : i
      }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
    }
    function TextAnimatorProperty(t, e, r) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
      for (t = 0; t < e; t += 1)
        r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: i(this._elem, this._textData.p.a, 0, 0, this),
        f: i(this._elem, this._textData.p.f, 0, 0, this),
        l: i(this._elem, this._textData.p.l, 0, 0, this),
        r: i(this._elem, this._textData.p.r, 0, 0, this),
        p: i(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = !1;
        var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, a = this.mHelper, n = this._renderType, l = this.renderedLetters.length, o, p, g, P, c = t.l, x, b, m, M, u, d, f, y, S, k, _, F, B, H, D;
        if (this._hasMaskedPath) {
          if (D = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var R = D.v;
            this._pathData.r.v && (R = R.reverse()), x = {
              tLength: 0,
              segments: []
            }, P = R._length - 1;
            var G;
            for (F = 0, g = 0; g < P; g += 1)
              G = bez.buildBezierData(R.v[g], R.v[g + 1], [R.o[g][0] - R.v[g][0], R.o[g][1] - R.v[g][1]], [R.i[g + 1][0] - R.v[g + 1][0], R.i[g + 1][1] - R.v[g + 1][1]]), x.tLength += G.segmentLength, x.segments.push(G), F += G.segmentLength;
            g = P, D.v.c && (G = bez.buildBezierData(R.v[g], R.v[0], [R.o[g][0] - R.v[g][0], R.o[g][1] - R.v[g][1]], [R.i[0][0] - R.v[0][0], R.i[0][1] - R.v[0][1]]), x.tLength += G.segmentLength, x.segments.push(G), F += G.segmentLength), this._pathData.pi = x;
          }
          if (x = this._pathData.pi, b = this._pathData.f.v, f = 0, d = 1, M = 0, u = !0, k = x.segments, b < 0 && D.v.c)
            for (x.tLength < Math.abs(b) && (b = -Math.abs(b) % x.tLength), f = k.length - 1, S = k[f].points, d = S.length - 1; b < 0; )
              b += S[d].partialLength, d -= 1, d < 0 && (f -= 1, S = k[f].points, d = S.length - 1);
          S = k[f].points, y = S[d - 1], m = S[d], _ = m.partialLength;
        }
        P = c.length, o = 0, p = 0;
        var z = t.finalSize * 1.2 * 0.714, L = !0, E, T, A, C, V;
        C = i.length;
        var I, O = -1, q, j, W, Q = b, X = f, $ = d, rt = -1, Z, J, U, Y, N, st, ht, at, it = "", nt = this.defaultPropsArray, ot;
        if (t.j === 2 || t.j === 1) {
          var K = 0, lt = 0, ft = t.j === 2 ? -0.5 : -1, tt = 0, pt = !0;
          for (g = 0; g < P; g += 1)
            if (c[g].n) {
              for (K && (K += lt); tt < g; )
                c[tt].animatorJustifyOffset = K, tt += 1;
              K = 0, pt = !0;
            } else {
              for (A = 0; A < C; A += 1)
                E = i[A].a, E.t.propType && (pt && t.j === 2 && (lt += E.t.v * ft), T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), I.length ? K += E.t.v * I[0] * ft : K += E.t.v * I * ft);
              pt = !1;
            }
          for (K && (K += lt); tt < g; )
            c[tt].animatorJustifyOffset = K, tt += 1;
        }
        for (g = 0; g < P; g += 1) {
          if (a.reset(), Z = 1, c[g].n)
            o = 0, p += t.yOffset, p += L ? 1 : 0, b = Q, L = !1, this._hasMaskedPath && (f = X, d = $, S = k[f].points, y = S[d - 1], m = S[d], _ = m.partialLength, M = 0), it = "", at = "", st = "", ot = "", nt = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (rt !== c[g].line) {
                switch (t.j) {
                  case 1:
                    b += F - t.lineWidths[c[g].line];
                    break;
                  case 2:
                    b += (F - t.lineWidths[c[g].line]) / 2;
                    break;
                }
                rt = c[g].line;
              }
              O !== c[g].ind && (c[O] && (b += c[O].extra), b += c[g].an / 2, O = c[g].ind), b += r[0] * c[g].an * 5e-3;
              var et = 0;
              for (A = 0; A < C; A += 1)
                E = i[A].a, E.p.propType && (T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), I.length ? et += E.p.v[0] * I[0] : et += E.p.v[0] * I), E.a.propType && (T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), I.length ? et += E.a.v[0] * I[0] : et += E.a.v[0] * I);
              for (u = !0, this._pathData.a.v && (b = c[0].an * 0.5 + (F - this._pathData.f.v - c[0].an * 0.5 - c[c.length - 1].an * 0.5) * O / (P - 1), b += this._pathData.f.v); u; )
                M + _ >= b + et || !S ? (B = (b + et - M) / m.partialLength, j = y.point[0] + (m.point[0] - y.point[0]) * B, W = y.point[1] + (m.point[1] - y.point[1]) * B, a.translate(-r[0] * c[g].an * 5e-3, -(r[1] * z) * 0.01), u = !1) : S && (M += m.partialLength, d += 1, d >= S.length && (d = 0, f += 1, k[f] ? S = k[f].points : D.v.c ? (d = 0, f = 0, S = k[f].points) : (M -= m.partialLength, S = null)), S && (y = m, m = S[d], _ = m.partialLength));
              q = c[g].an / 2 - c[g].add, a.translate(-q, 0, 0);
            } else
              q = c[g].an / 2 - c[g].add, a.translate(-q, 0, 0), a.translate(-r[0] * c[g].an * 5e-3, -r[1] * z * 0.01, 0);
            for (A = 0; A < C; A += 1)
              E = i[A].a, E.t.propType && (T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? I.length ? b += E.t.v * I[0] : b += E.t.v * I : I.length ? o += E.t.v * I[0] : o += E.t.v * I));
            for (t.strokeWidthAnim && (U = t.sw || 0), t.strokeColorAnim && (t.sc ? J = [t.sc[0], t.sc[1], t.sc[2]] : J = [0, 0, 0]), t.fillColorAnim && t.fc && (Y = [t.fc[0], t.fc[1], t.fc[2]]), A = 0; A < C; A += 1)
              E = i[A].a, E.a.propType && (T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), I.length ? a.translate(-E.a.v[0] * I[0], -E.a.v[1] * I[1], E.a.v[2] * I[2]) : a.translate(-E.a.v[0] * I, -E.a.v[1] * I, E.a.v[2] * I));
            for (A = 0; A < C; A += 1)
              E = i[A].a, E.s.propType && (T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), I.length ? a.scale(1 + (E.s.v[0] - 1) * I[0], 1 + (E.s.v[1] - 1) * I[1], 1) : a.scale(1 + (E.s.v[0] - 1) * I, 1 + (E.s.v[1] - 1) * I, 1));
            for (A = 0; A < C; A += 1) {
              if (E = i[A].a, T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), E.sk.propType && (I.length ? a.skewFromAxis(-E.sk.v * I[0], E.sa.v * I[1]) : a.skewFromAxis(-E.sk.v * I, E.sa.v * I)), E.r.propType && (I.length ? a.rotateZ(-E.r.v * I[2]) : a.rotateZ(-E.r.v * I)), E.ry.propType && (I.length ? a.rotateY(E.ry.v * I[1]) : a.rotateY(E.ry.v * I)), E.rx.propType && (I.length ? a.rotateX(E.rx.v * I[0]) : a.rotateX(E.rx.v * I)), E.o.propType && (I.length ? Z += (E.o.v * I[0] - Z) * I[0] : Z += (E.o.v * I - Z) * I), t.strokeWidthAnim && E.sw.propType && (I.length ? U += E.sw.v * I[0] : U += E.sw.v * I), t.strokeColorAnim && E.sc.propType)
                for (N = 0; N < 3; N += 1)
                  I.length ? J[N] += (E.sc.v[N] - J[N]) * I[0] : J[N] += (E.sc.v[N] - J[N]) * I;
              if (t.fillColorAnim && t.fc) {
                if (E.fc.propType)
                  for (N = 0; N < 3; N += 1)
                    I.length ? Y[N] += (E.fc.v[N] - Y[N]) * I[0] : Y[N] += (E.fc.v[N] - Y[N]) * I;
                E.fh.propType && (I.length ? Y = addHueToRGB(Y, E.fh.v * I[0]) : Y = addHueToRGB(Y, E.fh.v * I)), E.fs.propType && (I.length ? Y = addSaturationToRGB(Y, E.fs.v * I[0]) : Y = addSaturationToRGB(Y, E.fs.v * I)), E.fb.propType && (I.length ? Y = addBrightnessToRGB(Y, E.fb.v * I[0]) : Y = addBrightnessToRGB(Y, E.fb.v * I));
              }
            }
            for (A = 0; A < C; A += 1)
              E = i[A].a, E.p.propType && (T = i[A].s, I = T.getMult(c[g].anIndexes[A], s.a[A].s.totalChars), this._hasMaskedPath ? I.length ? a.translate(0, E.p.v[1] * I[0], -E.p.v[2] * I[1]) : a.translate(0, E.p.v[1] * I, -E.p.v[2] * I) : I.length ? a.translate(E.p.v[0] * I[0], E.p.v[1] * I[1], -E.p.v[2] * I[2]) : a.translate(E.p.v[0] * I, E.p.v[1] * I, -E.p.v[2] * I));
            if (t.strokeWidthAnim && (st = U < 0 ? 0 : U), t.strokeColorAnim && (ht = "rgb(" + Math.round(J[0] * 255) + "," + Math.round(J[1] * 255) + "," + Math.round(J[2] * 255) + ")"), t.fillColorAnim && t.fc && (at = "rgb(" + Math.round(Y[0] * 255) + "," + Math.round(Y[1] * 255) + "," + Math.round(Y[2] * 255) + ")"), this._hasMaskedPath) {
              if (a.translate(0, -t.ls), a.translate(0, r[1] * z * 0.01 + p, 0), this._pathData.p.v) {
                H = (m.point[1] - y.point[1]) / (m.point[0] - y.point[0]);
                var ct = Math.atan(H) * 180 / Math.PI;
                m.point[0] < y.point[0] && (ct += 180), a.rotate(-ct * Math.PI / 180);
              }
              a.translate(j, W, 0), b -= r[0] * c[g].an * 5e-3, c[g + 1] && O !== c[g + 1].ind && (b += c[g].an / 2, b += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (a.translate(o, p, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  a.translate(c[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[g].line]), 0, 0);
                  break;
                case 2:
                  a.translate(c[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[g].line]) / 2, 0, 0);
                  break;
              }
              a.translate(0, -t.ls), a.translate(q, 0, 0), a.translate(r[0] * c[g].an * 5e-3, r[1] * z * 0.01, 0), o += c[g].l + t.tr * 1e-3 * t.finalSize;
            }
            n === "html" ? it = a.toCSS() : n === "svg" ? it = a.to2dCSS() : nt = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], ot = Z;
          }
          l <= g ? (V = new LetterProps(ot, st, ht, at, it, nt), this.renderedLetters.push(V), l += 1, this.lettersChangedFlag = !0) : (V = this.renderedLetters[g], this.lettersChangedFlag = V.update(ot, st, ht, at, it, nt) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
    function ITextElement() {
    }
    ITextElement.prototype.initElement = function(t, e, r) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var r, i = e.length, s, a = "";
      for (r = 0; r < i; r += 1)
        e[r].ty === "sh" && (s = e[r].ks.k, a += buildShapeString(s, s.i.length, !0, t));
      return a;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
          break;
      }
      e.translate(i, s, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var emptyShapeData = {
      shapes: []
    };
    function SVGTextLottieElement(t, e, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, r = t.length, i = [], s = ""; e < r; )
        t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
      return i.push(s), i;
    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var r = t.shapes[0];
        if (r.it) {
          var i = r.it[r.it.length - 1];
          i.s && (i.s.k[0] = e, i.s.k[1] = e);
        }
      }
      return t;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var i = this.globalData.fontManager.getFontByName(r.f);
      if (i.fClass)
        this.layerElement.setAttribute("class", i.fClass);
      else {
        this.layerElement.setAttribute("font-family", i.fFamily);
        var s = r.fWeight, a = r.fStyle;
        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var n = r.l || [], l = !!this.globalData.fontManager.chars;
      e = n.length;
      var o, p = this.mHelper, g = "", P = this.data.singleShape, c = 0, x = 0, b = !0, m = r.tr * 1e-3 * r.finalSize;
      if (P && !l && !r.sz) {
        var M = this.textContainer, u = "start";
        switch (r.j) {
          case 1:
            u = "end";
            break;
          case 2:
            u = "middle";
            break;
          default:
            u = "start";
            break;
        }
        M.setAttribute("text-anchor", u), M.setAttribute("letter-spacing", m);
        var d = this.buildTextContents(r.finalText);
        for (e = d.length, x = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
          o = this.textSpans[t].span || createNS("tspan"), o.textContent = d[t], o.setAttribute("x", 0), o.setAttribute("y", x), o.style.display = "inherit", M.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
            span: null,
            glyph: null
          }), this.textSpans[t].span = o, x += r.finalLineHeight;
        this.layerElement.appendChild(M);
      } else {
        var f = this.textSpans.length, y;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = {
            span: null,
            childSpan: null,
            glyph: null
          }), !l || !P || t === 0) {
            if (o = f > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), f <= t) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                var S = createNS("g");
                o.appendChild(S), this.textSpans[t].childSpan = S;
              }
              this.textSpans[t].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (p.reset(), P && (n[t].n && (c = -m, x += r.yOffset, x += b ? 1 : 0, b = !1), this.applyTextPropertiesToMatrix(r, p, n[t].line, c, x), c += n[t].l || 0, c += m), l) {
            y = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var k;
            if (y.t === 1)
              k = new SVGCompElement(y.data, this.globalData, this);
            else {
              var _ = emptyShapeData;
              y.data && y.data.shapes && (_ = this.buildShapeData(y.data, r.finalSize)), k = new SVGShapeElement(_, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var F = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(F.layerElement), F.destroy();
            }
            this.textSpans[t].glyph = k, k._debug = !0, k.prepareFrame(0), k.renderFrame(), this.textSpans[t].childSpan.appendChild(k.layerElement), y.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else
            P && o.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        P && o && o.setAttribute("d", g);
      }
      for (; t < this.textSpans.length; )
        this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = !0;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var t = this.layerElement.getBBox();
        this.bbox = {
          top: t.y,
          left: t.x,
          width: t.width,
          height: t.height
        };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var t, e = this.textSpans.length, r;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)
        r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
        e = i.length;
        var s, a, n;
        for (t = 0; t < e; t += 1)
          i[t].n || (s = r[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc));
      }
    };
    function ISolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function NullElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
    }
    NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
    function SVGRendererBase() {
    }
    extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var r = createNS("clipPath"), i = createNS("rect");
      i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
      var s = createElementID();
      r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(t) {
      var e = 0, r = this.layers.length;
      for (e = 0; e < r; e += 1)
        if (this.layers[e].ind === t)
          return e;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = !0;
        var r = this.createItem(this.layers[t]);
        if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
          var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (i === -1)
            return;
          if (!this.elements[i] || this.elements[i] === !0)
            this.buildItem(i), this.addPendingElement(r);
          else {
            var s = e[i], a = s.getMatte(this.layers[t].tt);
            r.setMatte(a);
          }
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, r = this.elements.length; e < r; ) {
            if (this.elements[e] === t) {
              var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i], a = s.getMatte(this.layers[e].tt);
              t.setMatte(a);
              break;
            }
            e += 1;
          }
      }
    }, SVGRendererBase.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var e, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)
          (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < r; e += 1)
            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        for (var i = 0, s; i < e; )
          this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
        s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function ICompElement() {
    }
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder)
          this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var r, i = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function SVGCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (e && e.title) {
        var i = createNS("title"), s = createElementID();
        i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
      }
      if (e && e.description) {
        var a = createNS("desc"), n = createElementID();
        a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n;
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var l = createNS("defs");
      this.svgElement.appendChild(l);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: e && e.contentVisibility || "visible",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        viewBoxOnly: e && e.viewBoxOnly || !1,
        viewBoxSize: e && e.viewBoxSize || !1,
        className: e && e.className || "",
        id: e && e.id || "",
        focusable: e && e.focusable,
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "100%",
          height: e && e.filterSize && e.filterSize.height || "100%",
          x: e && e.filterSize && e.filterSize.x || "0%",
          y: e && e.filterSize && e.filterSize.y || "0%"
        },
        width: e && e.width,
        height: e && e.height,
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: l,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function(e) {
        var r, i = e.length, s = "_";
        for (r = 0; r < i; r += 1)
          s += e[r].transform.key + "_";
        var a = this.sequences[s];
        return a || (a = {
          transforms: [].concat(e),
          finalTransform: new Matrix(),
          _mdf: !1
        }, this.sequences[s] = a, this.sequenceList.push(a)), a;
      },
      processSequence: function(e, r) {
        for (var i = 0, s = e.transforms.length, a = r; i < s && !r; ) {
          if (e.transforms[i].transform.mProps._mdf) {
            a = !0;
            break;
          }
          i += 1;
        }
        if (a)
          for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
            e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
        e._mdf = a;
      },
      processSequences: function(e) {
        var r, i = this.sequenceList.length;
        for (r = 0; r < i; r += 1)
          this.processSequence(this.sequenceList[r], e);
      },
      getNewKey: function() {
        return this.transform_key_count += 1, "_" + this.transform_key_count;
      }
    };
    var lumaLoader = function() {
      var e = "__lottie_element_luma_buffer", r = null, i = null, s = null;
      function a() {
        var o = createNS("svg"), p = createNS("filter"), g = createNS("feColorMatrix");
        return p.setAttribute("id", e), g.setAttribute("type", "matrix"), g.setAttribute("color-interpolation-filters", "sRGB"), g.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), p.appendChild(g), o.appendChild(p), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o;
      }
      function n() {
        r || (s = a(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
      }
      function l(o) {
        return r || n(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r;
      }
      return {
        load: n,
        get: l
      };
    };
    function createCanvas(t, e) {
      if (featureSupport.offscreenCanvas)
        return new OffscreenCanvas(t, e);
      var r = createTag("canvas");
      return r.width = t, r.height = e, r;
    }
    var assetLoader = function() {
      return {
        loadLumaCanvas: lumaLoader.load,
        getLumaCanvas: lumaLoader.get,
        createCanvas
      };
    }(), registeredEffects = {};
    function CVEffects(t) {
      var e, r = t.data.ef ? t.data.ef.length : 0;
      this.filters = [];
      var i;
      for (e = 0; e < r; e += 1) {
        i = null;
        var s = t.data.ef[e].ty;
        if (registeredEffects[s]) {
          var a = registeredEffects[s].effect;
          i = new a(t.effectsManager.effectElements[e], t);
        }
        i && this.filters.push(i);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    CVEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1)
        this.filters[e].renderFrame(t);
    }, CVEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1)
        this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function registerEffect(t, e) {
      registeredEffects[t] = {
        effect: e
      };
    }
    function CVMaskElement(t, e) {
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r, i = this.masksProperties.length, s = !1;
      for (r = 0; r < i; r += 1)
        this.masksProperties[r].mode !== "n" && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = s, s && this.element.addRenderableComponent(this);
    }
    CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t = this.element.finalTransform.mat, e = this.element.canvasContext, r, i = this.masksProperties.length, s, a, n;
        for (e.beginPath(), r = 0; r < i; r += 1)
          if (this.masksProperties[r].mode !== "n") {
            this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[r].v, s = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(s[0], s[1]);
            var l, o = n._length;
            for (l = 1; l < o; l += 1)
              a = t.applyToTriplePoints(n.o[l - 1], n.i[l], n.v[l]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
            a = t.applyToTriplePoints(n.o[l - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          }
        this.element.globalData.renderer.save(!0), e.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    function CVBaseElement() {
    }
    var operationsMap = {
      1: "source-in",
      2: "source-out",
      3: "source-in",
      4: "source-out"
    };
    CVBaseElement.prototype = {
      createElements: function() {
      },
      initRendererElement: function() {
      },
      createContainerElements: function() {
        if (this.data.tt >= 1) {
          this.buffers = [];
          var e = this.globalData.canvasContext, r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
          this.buffers.push(r);
          var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
          this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
        }
        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
      },
      createContent: function() {
      },
      setBlendMode: function() {
        var e = this.globalData;
        if (e.blendMode !== this.data.bm) {
          e.blendMode = this.data.bm;
          var r = getBlendMode(this.data.bm);
          e.canvasContext.globalCompositeOperation = r;
        }
      },
      createRenderableComponents: function() {
        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
      },
      hideElement: function() {
        !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
      },
      showElement: function() {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
      },
      clearCanvas: function(e) {
        e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
      },
      prepareLayer: function() {
        if (this.data.tt >= 1) {
          var e = this.buffers[0], r = e.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
        }
      },
      exitLayer: function() {
        if (this.data.tt >= 1) {
          var e = this.buffers[1], r = e.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
          var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
          if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
            var s = assetLoader.getLumaCanvas(this.canvasContext.canvas), a = s.getContext("2d");
            a.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0);
          }
          this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
        }
      },
      renderFrame: function(e) {
        if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
          this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
          var r = this.data.ty === 0;
          this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
        }
      },
      destroy: function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
      },
      mHelper: new Matrix()
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
    function CVShapeData(t, e, r, i) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var s = 4;
      e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
      var a, n = r.length, l;
      for (a = 0; a < n; a += 1)
        r[a].closed || (l = {
          transforms: i.addTransformSequence(r[a].transforms),
          trNodes: []
        }, this.styledShapes.push(l), r[a].elements.push(l));
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
    function CVShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var r = {
        data: t,
        type: t.ty,
        preTransforms: this.transformsManager.addTransformSequence(e),
        transforms: [],
        elements: [],
        closed: t.hd === !0
      }, i = {};
      if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
        k: 0
      }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || {
        k: 0
      }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), t.ty === "st" || t.ty === "gs") {
        if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
          var s = new DashProperty(this, t.d, "canvas", this);
          i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
        }
      } else
        r.r = t.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(r), i.style = r, i;
    }, CVShapeElement.prototype.createGroupElement = function() {
      var t = {
        it: [],
        prevViewData: []
      };
      return t;
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      var e = {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
          mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
        }
      };
      return e;
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, CVShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, r = this.stylesList.length;
      for (e = 0; e < r; e += 1)
        this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
      var a, n = t.length - 1, l, o, p = [], g = [], P, c, x, b = [].concat(s);
      for (a = n; a >= 0; a -= 1) {
        if (P = this.searchProcessedElement(t[a]), P ? e[a] = r[P - 1] : t[a]._shouldRender = i, t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs")
          P ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], b), p.push(e[a].style);
        else if (t[a].ty === "gr") {
          if (!P)
            e[a] = this.createGroupElement(t[a]);
          else
            for (o = e[a].it.length, l = 0; l < o; l += 1)
              e[a].prevViewData[l] = e[a].it[l];
          this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, b);
        } else
          t[a].ty === "tr" ? (P || (x = this.createTransformElement(t[a]), e[a] = x), b.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? P || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (P ? (c = e[a], c.closed = !1) : (c = ShapeModifiers.getModifier(t[a].ty), c.init(this, t[a]), e[a] = c, this.shapeModifiers.push(c)), g.push(c)) : t[a].ty === "rp" && (P ? (c = e[a], c.closed = !0) : (c = ShapeModifiers.getModifier(t[a].ty), e[a] = c, c.init(this, t, a, e), this.shapeModifiers.push(c), i = !1), g.push(c));
        this.addProcessedElement(t[a], a + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(p), n = g.length, a = 0; a < n; a += 1)
        g[a].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e = this.stylesList.length, r, i, s, a, n, l, o = this.globalData.renderer, p = this.globalData.canvasContext, g, P;
      for (t = 0; t < e; t += 1)
        if (P = this.stylesList[t], g = P.type, !((g === "st" || g === "gs") && P.wi === 0 || !P.data._shouldRender || P.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
          for (o.save(), n = P.elements, g === "st" || g === "gs" ? (o.ctxStrokeStyle(g === "st" ? P.co : P.grd), o.ctxLineWidth(P.wi), o.ctxLineCap(P.lc), o.ctxLineJoin(P.lj), o.ctxMiterLimit(P.ml || 0)) : o.ctxFillStyle(g === "fl" ? P.co : P.grd), o.ctxOpacity(P.coOp), g !== "st" && g !== "gs" && p.beginPath(), o.ctxTransform(P.preTransforms.finalTransform.props), i = n.length, r = 0; r < i; r += 1) {
            for ((g === "st" || g === "gs") && (p.beginPath(), P.da && (p.setLineDash(P.da), p.lineDashOffset = P.do)), l = n[r].trNodes, a = l.length, s = 0; s < a; s += 1)
              l[s].t === "m" ? p.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? p.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : p.closePath();
            (g === "st" || g === "gs") && (o.ctxStroke(), P.da && p.setLineDash(this.dashResetter));
          }
          g !== "st" && g !== "gs" && this.globalData.renderer.ctxFill(P.r), o.restore();
        }
    }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
      var s, a = e.length - 1, n;
      for (n = t, s = a; s >= 0; s -= 1)
        e[s].ty === "tr" ? (n = r[s].transform, this.renderShapeTransform(t, n)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], n) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], n) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], n) : e[s].ty === "gr" ? this.renderShape(n, e[s].it, r[s].it) : e[s].ty;
      i && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var r = t.trNodes, i = e.paths, s, a, n, l = i._length;
        r.length = 0;
        var o = t.transforms.finalTransform;
        for (n = 0; n < l; n += 1) {
          var p = i.shapes[n];
          if (p && p.v) {
            for (a = p._length, s = 1; s < a; s += 1)
              s === 1 && r.push({
                t: "m",
                p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
              }), r.push({
                t: "c",
                pts: o.applyToTriplePoints(p.o[s - 1], p.i[s], p.v[s])
              });
            a === 1 && r.push({
              t: "m",
              p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), p.c && a && (r.push({
              t: "c",
              pts: o.applyToTriplePoints(p.o[s - 1], p.i[0], p.v[0])
            }), r.push({
              t: "z"
            }));
          }
        }
        t.trNodes = r;
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (t.hd !== !0 && t._shouldRender) {
        var r, i = e.styledShapes.length;
        for (r = 0; r < i; r += 1)
          this.renderStyledShape(e.styledShapes[r], e.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
      var i = e.style;
      (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
      var i = e.style, s;
      if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
        var a = this.globalData.canvasContext, n = e.s.v, l = e.e.v;
        if (t.t === 1)
          s = a.createLinearGradient(n[0], n[1], l[0], l[1]);
        else {
          var o = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2)), p = Math.atan2(l[1] - n[1], l[0] - n[0]), g = e.h.v;
          g >= 1 ? g = 0.99 : g <= -1 && (g = -0.99);
          var P = o * g, c = Math.cos(p + e.a.v) * P + n[0], x = Math.sin(p + e.a.v) * P + n[1];
          s = a.createRadialGradient(c, x, 0, n[0], n[1], o);
        }
        var b, m = t.g.p, M = e.g.c, u = 1;
        for (b = 0; b < m; b += 1)
          e.g._hasOpacity && e.g._collapsable && (u = e.g.o[b * 2 + 1]), s.addColorStop(M[b * 4] / 100, "rgba(" + M[b * 4 + 1] + "," + M[b * 4 + 2] + "," + M[b * 4 + 3] + "," + u + ")");
        i.grd = s;
      }
      i.coOp = e.o.v * r.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
      var i = e.style, s = e.d;
      s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    };
    function CVTextElement(t, e, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = !1;
      t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var r = !1;
      t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var i = this.globalData.fontManager.getFontByName(t.f), s, a, n = t.l, l = this.mHelper;
      this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
      var o, p, g, P, c, x, b, m, M, u, d = this.data.singleShape, f = t.tr * 1e-3 * t.finalSize, y = 0, S = 0, k = !0, _ = 0;
      for (s = 0; s < a; s += 1) {
        o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), p = o && o.data || {}, l.reset(), d && n[s].n && (y = -f, S += t.yOffset, S += k ? 1 : 0, k = !1), c = p.shapes ? p.shapes[0].it : [], b = c.length, l.scale(t.finalSize / 100, t.finalSize / 100), d && this.applyTextPropertiesToMatrix(t, l, n[s].line, y, S), M = createSizedArray(b - 1);
        var F = 0;
        for (x = 0; x < b; x += 1)
          if (c[x].ty === "sh") {
            for (P = c[x].ks.k.i.length, m = c[x].ks.k, u = [], g = 1; g < P; g += 1)
              g === 1 && u.push(l.applyToX(m.v[0][0], m.v[0][1], 0), l.applyToY(m.v[0][0], m.v[0][1], 0)), u.push(l.applyToX(m.o[g - 1][0], m.o[g - 1][1], 0), l.applyToY(m.o[g - 1][0], m.o[g - 1][1], 0), l.applyToX(m.i[g][0], m.i[g][1], 0), l.applyToY(m.i[g][0], m.i[g][1], 0), l.applyToX(m.v[g][0], m.v[g][1], 0), l.applyToY(m.v[g][0], m.v[g][1], 0));
            u.push(l.applyToX(m.o[g - 1][0], m.o[g - 1][1], 0), l.applyToY(m.o[g - 1][0], m.o[g - 1][1], 0), l.applyToX(m.i[0][0], m.i[0][1], 0), l.applyToY(m.i[0][0], m.i[0][1], 0), l.applyToX(m.v[0][0], m.v[0][1], 0), l.applyToY(m.v[0][0], m.v[0][1], 0)), M[F] = u, F += 1;
          }
        d && (y += n[s].l, y += f), this.textSpans[_] ? this.textSpans[_].elem = M : this.textSpans[_] = {
          elem: M
        }, _ += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var t = this.canvasContext;
      t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var e, r, i, s, a, n, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
      r = o.length;
      var p, g = null, P = null, c = null, x, b, m = this.globalData.renderer;
      for (e = 0; e < r; e += 1)
        if (!o[e].n) {
          if (p = l[e], p && (m.save(), m.ctxTransform(p.p), m.ctxOpacity(p.o)), this.fill) {
            for (p && p.fc ? g !== p.fc && (m.ctxFillStyle(p.fc), g = p.fc) : g !== this.values.fill && (g = this.values.fill, m.ctxFillStyle(this.values.fill)), x = this.textSpans[e].elem, s = x.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (b = x[i], n = b.length, this.globalData.canvasContext.moveTo(b[0], b[1]), a = 2; a < n; a += 6)
                this.globalData.canvasContext.bezierCurveTo(b[a], b[a + 1], b[a + 2], b[a + 3], b[a + 4], b[a + 5]);
            this.globalData.canvasContext.closePath(), m.ctxFill();
          }
          if (this.stroke) {
            for (p && p.sw ? c !== p.sw && (c = p.sw, m.ctxLineWidth(p.sw)) : c !== this.values.sWidth && (c = this.values.sWidth, m.ctxLineWidth(this.values.sWidth)), p && p.sc ? P !== p.sc && (P = p.sc, m.ctxStrokeStyle(p.sc)) : P !== this.values.stroke && (P = this.values.stroke, m.ctxStrokeStyle(this.values.stroke)), x = this.textSpans[e].elem, s = x.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (b = x[i], n = b.length, this.globalData.canvasContext.moveTo(b[0], b[1]), a = 2; a < n; a += 6)
                this.globalData.canvasContext.bezierCurveTo(b[a], b[a + 1], b[a + 2], b[a + 3], b[a + 4], b[a + 5]);
            this.globalData.canvasContext.closePath(), m.ctxStroke();
          }
          p && this.globalData.renderer.restore();
        }
    };
    function CVImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e = t.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i, a = this.assetData.w / this.assetData.h, n, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        s > a && o === "xMidYMid slice" || s < a && o !== "xMidYMid slice" ? (l = i, n = l * a) : (n = r, l = n / a), e.drawImage(this.img, (r - n) / 2, (i - l) / 2, n, l, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    };
    function CVSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    };
    function CanvasRendererBase() {
    }
    extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
      t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
      this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
      this.canvasContext.fillStyle = t;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
      this.canvasContext.strokeStyle = t;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
      this.canvasContext.lineWidth = t;
    }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
      this.canvasContext.lineCap = t;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
      this.canvasContext.lineJoin = t;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
      this.canvasContext.miterLimit = t;
    }, CanvasRendererBase.prototype.ctxFill = function(t) {
      this.canvasContext.fill(t);
    }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
      this.canvasContext.fillRect(t, e, r, i);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      this.contextData.reset();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(t) {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
    }, CanvasRendererBase.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var r = "0px 0px 0px";
        e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else
        this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
        w: t.w,
        h: t.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
      this.reset();
      var r, i;
      t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
      var s, a;
      if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var n = this.renderConfig.preserveAspectRatio.split(" "), l = n[1] || "meet", o = n[0] || "xMidYMid", p = o.substr(0, 4), g = o.substr(4);
        s = r / i, a = this.transformCanvas.w / this.transformCanvas.h, a > s && l === "meet" || a < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), p === "xMid" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : p === "xMax" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, g === "YMid" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : g === "YMax" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
      } else
        this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRendererBase.prototype.destroy = function() {
      this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
      var t, e = this.layers ? this.layers.length : 0;
      for (t = e - 1; t >= 0; t -= 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
      if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var r, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)
            (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        var r = this.createItem(this.layers[t], this, this.globalData);
        e[t] = r, r.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    };
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
      var t, e = 15;
      for (t = 0; t < e; t += 1) {
        var r = new CanvasContext();
        this.stack[t] = r;
      }
      this._length = e, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    CVContextData.prototype.duplicate = function() {
      var t = this._length * 2, e = 0;
      for (e = this._length; e < t; e += 1)
        this.stack[e] = new CanvasContext();
      this._length = t;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(t) {
      this.cArrPos -= 1;
      var e = this.stack[this.cArrPos], r = e.transform, i, s = this.cTr.props;
      for (i = 0; i < 16; i += 1)
        s[i] = r[i];
      if (t) {
        this.nativeContext.restore();
        var a = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit;
      }
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
    }, CVContextData.prototype.save = function(t) {
      t && this.nativeContext.save();
      var e = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var r = this.stack[this.cArrPos], i;
      for (i = 0; i < 16; i += 1)
        r.transform[i] = e[i];
      this.cArrPos += 1;
      var s = this.stack[this.cArrPos];
      s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit;
    }, CVContextData.prototype.setOpacity = function(t) {
      this.stack[this.cArrPos].opacity = t;
    }, CVContextData.prototype.setContext = function(t) {
      this.nativeContext = t;
    }, CVContextData.prototype.fillStyle = function(t) {
      this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
    }, CVContextData.prototype.strokeStyle = function(t) {
      this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
    }, CVContextData.prototype.lineWidth = function(t) {
      this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
    }, CVContextData.prototype.lineCap = function(t) {
      this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
    }, CVContextData.prototype.lineJoin = function(t) {
      this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
    }, CVContextData.prototype.miterLimit = function(t) {
      this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
    }, CVContextData.prototype.transform = function(t) {
      this.transformMat.cloneFromProps(t);
      var e = this.cTr;
      this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
      var r = e.props;
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
    }, CVContextData.prototype.opacity = function(t) {
      var e = this.stack[this.cArrPos].opacity;
      e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
    }, CVContextData.prototype.fill = function(t) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
    }, CVContextData.prototype.fillRect = function(t, e, r, i) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    };
    function CVCompElement(t, e, r) {
      this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t = this.canvasContext;
      t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
      var e, r = this.layers.length;
      for (e = r - 1; e >= 0; e -= 1)
        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var t, e = this.layers.length;
      for (t = e - 1; t >= 0; t -= 1)
        this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    };
    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = {
        clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
        context: e && e.context || null,
        progressiveLoad: e && e.progressiveLoad || !1,
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: e && e.contentVisibility || "visible",
        className: e && e.className || "",
        id: e && e.id || "",
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    };
    function HBaseElement() {
    }
    HBaseElement.prototype = {
      checkBlendMode: function() {
      },
      initRendererElement: function() {
        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
      },
      createContainerElements: function() {
        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        var e = this.transformedElement ? this.transformedElement.style : {};
        if (this.finalTransform._matMdf) {
          var r = this.finalTransform.mat.toCSS();
          e.transform = r, e.webkitTransform = r;
        }
        this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
      },
      renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
      },
      destroy: function() {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData);
      },
      addEffects: function() {
      },
      setMatte: function() {
      }
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
    function HSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    };
    function HShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      };
    }
    extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask)
        this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var r = t.sh.v, i = t.transformers, s, a = r._length, n, l, o, p;
      if (!(a <= 1)) {
        for (s = 0; s < a - 1; s += 1)
          n = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), p = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(n, l, o, p, e);
        r.c && (n = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), p = this.getTransformedPoint(i, r.v[0]), this.checkBounds(n, l, o, p, e));
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
      this.getBoundsOfCurve(t, e, r, i);
      var a = this.shapeBoundingBox;
      s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
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
      for (var s = [[t[0], i[0]], [t[1], i[1]]], a, n, l, o, p, g, P, c = 0; c < 2; ++c)
        n = 6 * t[c] - 12 * e[c] + 6 * r[c], a = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * i[c], l = 3 * e[c] - 3 * t[c], n |= 0, a |= 0, l |= 0, a === 0 && n === 0 || (a === 0 ? (o = -l / n, o > 0 && o < 1 && s[c].push(this.calculateF(o, t, e, r, i, c))) : (p = n * n - 4 * l * a, p >= 0 && (g = (-n + bmSqrt(p)) / (2 * a), g > 0 && g < 1 && s[c].push(this.calculateF(g, t, e, r, i, c)), P = (-n - bmSqrt(p)) / (2 * a), P > 0 && P < 1 && s[c].push(this.calculateF(P, t, e, r, i, c)))));
      this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1]);
    }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
      return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a];
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
      var r = 0;
      if (t.keyframes) {
        for (var i = 0; i < t.keyframes.length; i += 1) {
          var s = t.keyframes[i].s;
          s > r && (r = s);
        }
        r *= t.mult;
      } else
        r = t.v * t.mult;
      e.x -= r, e.xMax += r, e.y -= r, e.yMax += r;
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
          return;
        var r = !1;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          i.transform = s, i.webkitTransform = s;
        }
      }
    };
    function HTextElement(t, e, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else
        this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var i = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars)
        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass)
          this.innerElem.className = i.fClass;
        else {
          e.fontFamily = i.fFamily;
          var s = t.fWeight, a = t.fStyle;
          e.fontStyle = a, e.fontWeight = s;
        }
      var n, l, o = t.l;
      l = o.length;
      var p, g, P, c = this.mHelper, x, b = "", m = 0;
      for (n = 0; n < l; n += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[m] ? p = this.textPaths[m] : (p = createNS("path"), p.setAttribute("stroke-linecap", lineCapEnum[1]), p.setAttribute("stroke-linejoin", lineJoinEnum[2]), p.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? (g = this.textSpans[m], P = g.children[0]) : (g = createTag("div"), g.style.lineHeight = 0, P = createNS("svg"), P.appendChild(p), styleDiv(g)))) : this.isMasked ? p = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (g = this.textSpans[m], p = this.textPaths[m]) : (g = createTag("span"), styleDiv(g), p = createTag("span"), styleDiv(p), g.appendChild(p)), this.globalData.fontManager.chars) {
          var M = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), u;
          if (M ? u = M.data : u = null, c.reset(), u && u.shapes && u.shapes.length && (x = u.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), b = this.createPathShape(c, x), p.setAttribute("d", b)), this.isMasked)
            this.innerElem.appendChild(p);
          else {
            if (this.innerElem.appendChild(g), u && u.shapes) {
              document.body.appendChild(P);
              var d = P.getBBox();
              P.setAttribute("width", d.width + 2), P.setAttribute("height", d.height + 2), P.setAttribute("viewBox", d.x - 1 + " " + (d.y - 1) + " " + (d.width + 2) + " " + (d.height + 2));
              var f = P.style, y = "translate(" + (d.x - 1) + "px," + (d.y - 1) + "px)";
              f.transform = y, f.webkitTransform = y, o[n].yOffset = d.y - 1;
            } else
              P.setAttribute("width", 1), P.setAttribute("height", 1);
            g.appendChild(P);
          }
        } else if (p.textContent = o[n].val, p.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
          this.innerElem.appendChild(p);
        else {
          this.innerElem.appendChild(g);
          var S = p.style, k = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          S.transform = k, S.webkitTransform = k;
        }
        this.isMasked ? this.textSpans[m] = p : this.textSpans[m] = g, this.textSpans[m].style.display = "block", this.textPaths[m] = p, m += 1;
      }
      for (; m < this.textSpans.length; )
        this.textSpans[m].style.display = "none", m += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var t;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag)
          return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
        var r, i, s = 0, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
        i = n.length;
        var l, o, p;
        for (r = 0; r < i; r += 1)
          n[r].n ? s += 1 : (o = this.textSpans[r], p = this.textPaths[r], l = a[s], s += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && p.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && p.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (p.setAttribute("fill", l.fc), p.style.color = l.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var g = this.innerElem.getBBox();
          this.currentBBox.w !== g.width && (this.currentBBox.w = g.width, this.svgElement.setAttribute("width", g.width)), this.currentBBox.h !== g.height && (this.currentBBox.h = g.height, this.svgElement.setAttribute("height", g.height));
          var P = 1;
          if (this.currentBBox.w !== g.width + P * 2 || this.currentBBox.h !== g.height + P * 2 || this.currentBBox.x !== g.x - P || this.currentBBox.y !== g.y - P) {
            this.currentBBox.w = g.width + P * 2, this.currentBBox.h = g.height + P * 2, this.currentBBox.x = g.x - P, this.currentBBox.y = g.y - P, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = c, t.webkitTransform = c;
          }
        }
      }
    };
    function HCameraElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
      var i = PropertyFactory.getProp;
      if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var s, a = t.ks.or.k.length;
        for (s = 0; s < a; s += 1)
          t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
      }
      this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      };
    }
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e = this.comp.threeDElements.length, r, i, s;
      for (t = 0; t < e; t += 1)
        if (r = this.comp.threeDElements[t], r.type === "3d") {
          i = r.perspectiveElem.style, s = r.container.style;
          var a = this.pe.v + "px", n = "0px 0px 0px", l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          i.perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = l, i.webkitTransform = l;
        }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var t = this._isFirstFrame, e, r;
      if (this.hierarchy)
        for (r = this.hierarchy.length, e = 0; e < r; e += 1)
          t = this.hierarchy[e].finalTransform.mProp._mdf || t;
      if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (r = this.hierarchy.length - 1, e = r; e >= 0; e -= 1) {
            var i = this.hierarchy[e].finalTransform.mProp;
            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var s;
          this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [s[0] / a, s[1] / a, s[2] / a], l = Math.sqrt(n[2] * n[2] + n[0] * n[0]), o = Math.atan2(n[1], l), p = Math.atan2(n[0], -n[2]);
          this.mat.rotateY(p).rotateX(-o);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var g = !this._prevMat.equals(this.mat);
        if ((g || this.pe._mdf) && this.comp.threeDElements) {
          r = this.comp.threeDElements.length;
          var P, c, x;
          for (e = 0; e < r; e += 1)
            if (P = this.comp.threeDElements[e], P.type === "3d") {
              if (g) {
                var b = this.mat.toCSS();
                x = P.container.style, x.transform = b, x.webkitTransform = b;
              }
              this.pe._mdf && (c = P.perspectiveElem.style, c.perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px");
            }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    };
    function HImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    };
    function HybridRendererBase(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: e && e.className || "",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "400%",
          height: e && e.filterSize && e.filterSize.height || "400%",
          x: e && e.filterSize && e.filterSize.x || "-100%",
          y: e && e.filterSize && e.filterSize.y || "-100%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        var i = this.layers[e];
        if (!i.ddd || !this.supports3d)
          if (this.threeDElements)
            this.addTo3dContainer(r, e);
          else {
            for (var s = 0, a, n, l; s < e; )
              this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (n = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement(), a = l || a), s += 1;
            a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r);
          }
        else
          this.addTo3dContainer(r, e);
      }
    }, HybridRendererBase.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, r = this.threeDElements.length; e < r; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
          return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
      var r = createTag("div"), i, s;
      styleDiv(r);
      var a = createTag("div");
      if (styleDiv(a), e === "3d") {
        i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
        var n = "50% 50%";
        i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n, s = a.style;
        var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        s.transform = l, s.webkitTransform = l;
      }
      r.appendChild(a);
      var o = {
        container: a,
        perspectiveElem: r,
        startPos: t,
        endPos: t,
        type: e
      };
      return this.threeDElements.push(o), o;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var t, e = this.layers.length, r, i = "";
      for (t = 0; t < e; t += 1)
        this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(t, "3d")), r.endPos = Math.max(r.endPos, t)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(t, "2d")), r.endPos = Math.max(r.endPos, t));
      for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1)
        this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i = this.threeDElements.length; r < i; ) {
        if (e <= this.threeDElements[r].endPos) {
          for (var s = this.threeDElements[r].startPos, a; s < e; )
            this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
          a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
          break;
        }
        r += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(t) {
      var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
      i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
      var s = createNS("svg");
      s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
      var a = createNS("defs");
      s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, r = t / e, i = this.globalData.compSize.w / this.globalData.compSize.h, s, a, n, l;
      i > r ? (s = t / this.globalData.compSize.w, a = t / this.globalData.compSize.w, n = 0, l = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, a = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, l = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + l + ",0,1)", o.transform = o.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera)
        this.camera.setup();
      else {
        var t = this.globalData.compSize.w, e = this.globalData.compSize.h, r, i = this.threeDElements.length;
        for (r = 0; r < i; r += 1) {
          var s = this.threeDElements[r].perspectiveElem.style;
          s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length, i = createTag("div");
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var s = this.createComp(t[e], i, this.globalData.comp, null);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
        }
    };
    function HCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i; r < e; )
        this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
      i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
    }, HCompElement.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: e && e.className || "",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "400%",
          height: e && e.filterSize && e.filterSize.height || "400%",
          x: e && e.filterSize && e.filterSize.x || "-100%",
          y: e && e.filterSize && e.filterSize.y || "-100%"
        },
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    var CompExpressionInterface = function() {
      return function(t) {
        function e(r) {
          for (var i = 0, s = t.layers.length; i < s; ) {
            if (t.layers[i].nm === r || t.layers[i].ind === r)
              return t.elements[i].layerInterface;
            i += 1;
          }
          return null;
        }
        return Object.defineProperty(e, "_name", {
          value: t.data.nm
        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
      };
    }();
    function _typeof$2(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
        return typeof r;
      } : _typeof$2 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$2(t);
    }
    function seedRandom(t, e) {
      var r = this, i = 256, s = 6, a = 52, n = "random", l = e.pow(i, s), o = e.pow(2, a), p = o * 2, g = i - 1, P;
      function c(f, y, S) {
        var k = [];
        y = y === !0 ? {
          entropy: !0
        } : y || {};
        var _ = M(m(y.entropy ? [f, d(t)] : f === null ? u() : f, 3), k), F = new x(k), B = function() {
          for (var D = F.g(s), R = l, G = 0; D < o; )
            D = (D + G) * i, R *= i, G = F.g(1);
          for (; D >= p; )
            D /= 2, R /= 2, G >>>= 1;
          return (D + G) / R;
        };
        return B.int32 = function() {
          return F.g(4) | 0;
        }, B.quick = function() {
          return F.g(4) / 4294967296;
        }, B.double = B, M(d(F.S), t), (y.pass || S || function(H, D, R, G) {
          return G && (G.S && b(G, F), H.state = function() {
            return b(F, {});
          }), R ? (e[n] = H, D) : H;
        })(B, _, "global" in y ? y.global : this == e, y.state);
      }
      e["seed" + n] = c;
      function x(f) {
        var y, S = f.length, k = this, _ = 0, F = k.i = k.j = 0, B = k.S = [];
        for (S || (f = [S++]); _ < i; )
          B[_] = _++;
        for (_ = 0; _ < i; _++)
          B[_] = B[F = g & F + f[_ % S] + (y = B[_])], B[F] = y;
        k.g = function(H) {
          for (var D, R = 0, G = k.i, z = k.j, L = k.S; H--; )
            D = L[G = g & G + 1], R = R * i + L[g & (L[G] = L[z = g & z + D]) + (L[z] = D)];
          return k.i = G, k.j = z, R;
        };
      }
      function b(f, y) {
        return y.i = f.i, y.j = f.j, y.S = f.S.slice(), y;
      }
      function m(f, y) {
        var S = [], k = _typeof$2(f), _;
        if (y && k == "object")
          for (_ in f)
            try {
              S.push(m(f[_], y - 1));
            } catch {
            }
        return S.length ? S : k == "string" ? f : f + "\0";
      }
      function M(f, y) {
        for (var S = f + "", k, _ = 0; _ < S.length; )
          y[g & _] = g & (k ^= y[g & _] * 19) + S.charCodeAt(_++);
        return d(y);
      }
      function u() {
        try {
          var f = new Uint8Array(i);
          return (r.crypto || r.msCrypto).getRandomValues(f), d(f);
        } catch {
          var y = r.navigator, S = y && y.plugins;
          return [+/* @__PURE__ */ new Date(), r, S, r.screen, d(t)];
        }
      }
      function d(f) {
        return String.fromCharCode.apply(0, f);
      }
      M(e.random(), t);
    }
    function initialize$2(t) {
      seedRandom([], t);
    }
    var propTypes = {
      SHAPE: "shape"
    };
    function _typeof$1(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
        return typeof r;
      } : _typeof$1 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$1(t);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      initialize$2(BMMath);
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return t === "number" || e instanceof Number || t === "boolean" || t === "string";
      }
      function $bm_neg(t) {
        var e = _typeof$1(t);
        if (e === "number" || t instanceof Number || e === "boolean")
          return -t;
        if ($bm_isInstanceOfArray(t)) {
          var r, i = t.length, s = [];
          for (r = 0; r < i; r += 1)
            s[r] = -t[r];
          return s;
        }
        return t.propType ? t.v : -t;
      }
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string")
          return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
          return t = t.slice(0), t[0] += e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
          return e = e.slice(0), e[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n; )
            (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] + e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e))
          return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
          return t = t.slice(0), t[0] -= e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
          return e = e.slice(0), e[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n; )
            (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] - e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      function mul(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e))
          return t * e;
        var a, n;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t[a] * e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t * e[a];
          return s;
        }
        return 0;
      }
      function div(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e))
          return t / e;
        var a, n;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t[a] / e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t / e[a];
          return s;
        }
        return 0;
      }
      function mod(t, e) {
        return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, r) {
        if (e > r) {
          var i = r;
          r = e, e = i;
        }
        return Math.min(Math.max(t, e), r);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if (typeof t == "number" || t instanceof Number)
          return e = e || 0, Math.abs(t - e);
        e || (e = helperLengthArray);
        var r, i = Math.min(t.length, e.length), s = 0;
        for (r = 0; r < i; r += 1)
          s += Math.pow(e[r] - t[r], 2);
        return Math.sqrt(s);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), a = Math.min(e, r, i), n, l, o = (s + a) / 2;
        if (s === a)
          n = 0, l = 0;
        else {
          var p = s - a;
          switch (l = o > 0.5 ? p / (2 - s - a) : p / (s + a), s) {
            case e:
              n = (r - i) / p + (r < i ? 6 : 0);
              break;
            case r:
              n = (i - e) / p + 2;
              break;
            case i:
              n = (e - r) / p + 4;
              break;
          }
          n /= 6;
        }
        return [n, l, o, t[3]];
      }
      function hue2rgb(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
      }
      function hslToRgb(t) {
        var e = t[0], r = t[1], i = t[2], s, a, n;
        if (r === 0)
          s = i, n = i, a = i;
        else {
          var l = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - l;
          s = hue2rgb(o, l, e + 1 / 3), a = hue2rgb(o, l, e), n = hue2rgb(o, l, e - 1 / 3);
        }
        return [s, a, n, t[3]];
      }
      function linear(t, e, r, i, s) {
        if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
          var a = r;
          r = e, e = a;
        }
        if (t <= e)
          return i;
        if (t >= r)
          return s;
        var n = r === e ? 0 : (t - e) / (r - e);
        if (!i.length)
          return i + (s - i) * n;
        var l, o = i.length, p = createTypedArray("float32", o);
        for (l = 0; l < o; l += 1)
          p[l] = i[l] + (s[l] - i[l]) * n;
        return p;
      }
      function random(t, e) {
        if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var r, i = e.length;
          t || (t = createTypedArray("float32", i));
          var s = createTypedArray("float32", i), a = BMMath.random();
          for (r = 0; r < i; r += 1)
            s[r] = t[r] + a * (e[r] - t[r]);
          return s;
        }
        t === void 0 && (t = 0);
        var n = BMMath.random();
        return t + n * (e - t);
      }
      function createPath(t, e, r, i) {
        var s, a = t.length, n = shapePool.newElement();
        n.setPathData(!!i, a);
        var l = [0, 0], o, p;
        for (s = 0; s < a; s += 1)
          o = e && e[s] ? e[s] : l, p = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], p[0] + t[s][0], p[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
        return n;
      }
      function initiateExpression(elem, data, property) {
        function noOp(t) {
          return t;
        }
        if (!elem.globalData.renderConfig.runExpressions)
          return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
          get: function() {
            return thisProperty.v;
          }
        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t(e, r) {
          var i, s, a = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", a);
          e = 5;
          var l = Math.floor(time * e);
          for (i = 0, s = 0; i < l; ) {
            for (s = 0; s < a; s += 1)
              n[s] += -r + r * 2 * BMMath.random();
            i += 1;
          }
          var o = time * e, p = o - Math.floor(o), g = createTypedArray("float32", a);
          if (a > 1) {
            for (s = 0; s < a; s += 1)
              g[s] = this.pv[s] + n[s] + (-r + r * 2 * BMMath.random()) * p;
            return g;
          }
          return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * p;
        }).bind(this);
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
        function loopInDuration(t, e) {
          return loopIn(t, e, !0);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, !0);
        }
        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
        function lookAt(t, e) {
          var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads, s = -Math.atan2(r[1], r[2]) / degToRads;
          return [s, i, 0];
        }
        function easeOut(t, e, r, i, s) {
          return applyEase(easeOutBez, t, e, r, i, s);
        }
        function easeIn(t, e, r, i, s) {
          return applyEase(easeInBez, t, e, r, i, s);
        }
        function ease(t, e, r, i, s) {
          return applyEase(easeInOutBez, t, e, r, i, s);
        }
        function applyEase(t, e, r, i, s, a) {
          s === void 0 ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
          var n = t(e);
          if ($bm_isInstanceOfArray(s)) {
            var l, o = s.length, p = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1)
              p[l] = (a[l] - s[l]) * n + s[l];
            return p;
          }
          return (a - s) * n + s;
        }
        function nearestKey(t) {
          var e, r = data.k.length, i, s;
          if (!data.k.length || typeof data.k[0] == "number")
            i = 0, s = 0;
          else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t)
            i = 1, s = data.k[0].t;
          else {
            for (e = 0; e < r - 1; e += 1)
              if (t === data.k[e].t) {
                i = e + 1, s = data.k[e].t;
                break;
              } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                break;
              }
            i === -1 && (i = e + 1, s = data.k[e].t);
          }
          var a = {};
          return a.index = i, a.time = s / elem.comp.globalData.frameRate, a;
        }
        function key(t) {
          var e, r, i;
          if (!data.k.length || typeof data.k[0] == "number")
            throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = {
            time: data.k[t].t / elem.comp.globalData.frameRate,
            value: []
          };
          var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (i = s.length, r = 0; r < i; r += 1)
            e[r] = s[r], e.value[r] = s[r];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var t = {};
      t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;
      function e(r) {
        var i = 0, s = [];
        function a() {
          i += 1;
        }
        function n() {
          i -= 1, i === 0 && o();
        }
        function l(p) {
          s.indexOf(p) === -1 && s.push(p);
        }
        function o() {
          var p, g = s.length;
          for (p = 0; p < g; p += 1)
            s[p].release();
          s.length = 0;
        }
        r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = a, r.renderer.globalData.popExpression = n, r.renderer.globalData.registerExpressionProperty = l;
      }
      return t;
    }(), MaskManagerInterface = function() {
      function t(r, i) {
        this._mask = r, this._data = i;
      }
      Object.defineProperty(t.prototype, "maskPath", {
        get: function() {
          return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
        }
      }), Object.defineProperty(t.prototype, "maskOpacity", {
        get: function() {
          return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
        }
      });
      var e = function(i) {
        var s = createSizedArray(i.viewData.length), a, n = i.viewData.length;
        for (a = 0; a < n; a += 1)
          s[a] = new t(i.viewData[a], i.masksProperties[a]);
        var l = function(p) {
          for (a = 0; a < n; ) {
            if (i.masksProperties[a].nm === p)
              return s[a];
            a += 1;
          }
          return null;
        };
        return l;
      };
      return e;
    }(), ExpressionPropertyInterface = function() {
      var t = {
        pv: 0,
        v: 0,
        mult: 1
      }, e = {
        pv: [0, 0, 0],
        v: [0, 0, 0],
        mult: 1
      };
      function r(n, l, o) {
        Object.defineProperty(n, "velocity", {
          get: function() {
            return l.getVelocityAtTime(l.comp.currentFrame);
          }
        }), n.numKeys = l.keyframes ? l.keyframes.length : 0, n.key = function(p) {
          if (!n.numKeys)
            return 0;
          var g = "";
          "s" in l.keyframes[p - 1] ? g = l.keyframes[p - 1].s : "e" in l.keyframes[p - 2] ? g = l.keyframes[p - 2].e : g = l.keyframes[p - 2].s;
          var P = o === "unidimensional" ? new Number(g) : Object.assign({}, g);
          return P.time = l.keyframes[p - 1].t / l.elem.comp.globalData.frameRate, P.value = o === "unidimensional" ? g[0] : g, P;
        }, n.valueAtTime = l.getValueAtTime, n.speedAtTime = l.getSpeedAtTime, n.velocityAtTime = l.getVelocityAtTime, n.propertyGroup = l.propertyGroup;
      }
      function i(n) {
        (!n || !("pv" in n)) && (n = t);
        var l = 1 / n.mult, o = n.pv * l, p = new Number(o);
        return p.value = o, r(p, n, "unidimensional"), function() {
          return n.k && n.getValue(), o = n.v * l, p.value !== o && (p = new Number(o), p.value = o, r(p, n, "unidimensional")), p;
        };
      }
      function s(n) {
        (!n || !("pv" in n)) && (n = e);
        var l = 1 / n.mult, o = n.data && n.data.l || n.pv.length, p = createTypedArray("float32", o), g = createTypedArray("float32", o);
        return p.value = g, r(p, n, "multidimensional"), function() {
          n.k && n.getValue();
          for (var P = 0; P < o; P += 1)
            g[P] = n.v[P] * l, p[P] = g[P];
          return p;
        };
      }
      function a() {
        return t;
      }
      return function(n) {
        return n ? n.propType === "unidimensional" ? i(n) : s(n) : a;
      };
    }(), TransformExpressionInterface = function() {
      return function(t) {
        function e(n) {
          switch (n) {
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
              return e.opacity;
            default:
              return null;
          }
        }
        Object.defineProperty(e, "rotation", {
          get: ExpressionPropertyInterface(t.r || t.rz)
        }), Object.defineProperty(e, "zRotation", {
          get: ExpressionPropertyInterface(t.rz || t.r)
        }), Object.defineProperty(e, "xRotation", {
          get: ExpressionPropertyInterface(t.rx)
        }), Object.defineProperty(e, "yRotation", {
          get: ExpressionPropertyInterface(t.ry)
        }), Object.defineProperty(e, "scale", {
          get: ExpressionPropertyInterface(t.s)
        });
        var r, i, s, a;
        return t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
          get: function() {
            return t.p ? a() : [r(), i(), s ? s() : 0];
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
        }), e;
      };
    }(), LayerExpressionInterface = function() {
      function t(p) {
        var g = new Matrix();
        if (p !== void 0) {
          var P = this._elem.finalTransform.mProp.getValueAtTime(p);
          P.clone(g);
        } else {
          var c = this._elem.finalTransform.mProp;
          c.applyToMatrix(g);
        }
        return g;
      }
      function e(p, g) {
        var P = this.getMatrix(g);
        return P.props[12] = 0, P.props[13] = 0, P.props[14] = 0, this.applyPoint(P, p);
      }
      function r(p, g) {
        var P = this.getMatrix(g);
        return this.applyPoint(P, p);
      }
      function i(p, g) {
        var P = this.getMatrix(g);
        return P.props[12] = 0, P.props[13] = 0, P.props[14] = 0, this.invertPoint(P, p);
      }
      function s(p, g) {
        var P = this.getMatrix(g);
        return this.invertPoint(P, p);
      }
      function a(p, g) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var P, c = this._elem.hierarchy.length;
          for (P = 0; P < c; P += 1)
            this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(p);
        }
        return p.applyToPointArray(g[0], g[1], g[2] || 0);
      }
      function n(p, g) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var P, c = this._elem.hierarchy.length;
          for (P = 0; P < c; P += 1)
            this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(p);
        }
        return p.inversePoint(g);
      }
      function l(p) {
        var g = new Matrix();
        if (g.reset(), this._elem.finalTransform.mProp.applyToMatrix(g), this._elem.hierarchy && this._elem.hierarchy.length) {
          var P, c = this._elem.hierarchy.length;
          for (P = 0; P < c; P += 1)
            this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(g);
          return g.inversePoint(p);
        }
        return g.inversePoint(p);
      }
      function o() {
        return [1, 1, 1, 1];
      }
      return function(p) {
        var g;
        function P(m) {
          x.mask = new MaskManagerInterface(m, p);
        }
        function c(m) {
          x.effect = m;
        }
        function x(m) {
          switch (m) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return x.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return g;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return x.effect;
            case "ADBE Text Properties":
              return x.textInterface;
            default:
              return null;
          }
        }
        x.getMatrix = t, x.invertPoint = n, x.applyPoint = a, x.toWorld = r, x.toWorldVec = e, x.fromWorld = s, x.fromWorldVec = i, x.toComp = r, x.fromComp = l, x.sampleImage = o, x.sourceRectAtTime = p.sourceRectAtTime.bind(p), x._elem = p, g = TransformExpressionInterface(p.finalTransform.mProp);
        var b = getDescriptor(g, "anchorPoint");
        return Object.defineProperties(x, {
          hasParent: {
            get: function() {
              return p.hierarchy.length;
            }
          },
          parent: {
            get: function() {
              return p.hierarchy[0].layerInterface;
            }
          },
          rotation: getDescriptor(g, "rotation"),
          scale: getDescriptor(g, "scale"),
          position: getDescriptor(g, "position"),
          opacity: getDescriptor(g, "opacity"),
          anchorPoint: b,
          anchor_point: b,
          transform: {
            get: function() {
              return g;
            }
          },
          active: {
            get: function() {
              return p.isInRange;
            }
          }
        }), x.startTime = p.data.st, x.index = p.data.ind, x.source = p.data.refId, x.height = p.data.ty === 0 ? p.data.h : 100, x.width = p.data.ty === 0 ? p.data.w : 100, x.inPoint = p.data.ip / p.comp.globalData.frameRate, x.outPoint = p.data.op / p.comp.globalData.frameRate, x._name = p.data.nm, x.registerMaskInterface = P, x.registerEffectsInterface = c, x;
      };
    }(), propertyGroupFactory = function() {
      return function(t, e) {
        return function(r) {
          return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1);
        };
      };
    }(), PropertyInterface = function() {
      return function(t, e) {
        var r = {
          _name: t
        };
        function i(s) {
          return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1);
        }
        return i;
      };
    }(), EffectsExpressionInterface = function() {
      var t = {
        createEffectsInterface: e
      };
      function e(s, a) {
        if (s.effectsManager) {
          var n = [], l = s.data.ef, o, p = s.effectsManager.effectElements.length;
          for (o = 0; o < p; o += 1)
            n.push(r(l[o], s.effectsManager.effectElements[o], a, s));
          var g = s.data.ef || [], P = function(x) {
            for (o = 0, p = g.length; o < p; ) {
              if (x === g[o].nm || x === g[o].mn || x === g[o].ix)
                return n[o];
              o += 1;
            }
            return null;
          };
          return Object.defineProperty(P, "numProperties", {
            get: function() {
              return g.length;
            }
          }), P;
        }
        return null;
      }
      function r(s, a, n, l) {
        function o(x) {
          for (var b = s.ef, m = 0, M = b.length; m < M; ) {
            if (x === b[m].nm || x === b[m].mn || x === b[m].ix)
              return b[m].ty === 5 ? g[m] : g[m]();
            m += 1;
          }
          throw new Error();
        }
        var p = propertyGroupFactory(o, n), g = [], P, c = s.ef.length;
        for (P = 0; P < c; P += 1)
          s.ef[P].ty === 5 ? g.push(r(s.ef[P], a.effectElements[P], a.effectElements[P].propertyGroup, l)) : g.push(i(a.effectElements[P], s.ef[P].ty, l, p));
        return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
          get: function() {
            return g[0]();
          }
        }), Object.defineProperties(o, {
          numProperties: {
            get: function() {
              return s.np;
            }
          },
          _name: {
            value: s.nm
          },
          propertyGroup: {
            value: p
          }
        }), o.enabled = s.en !== 0, o.active = o.enabled, o;
      }
      function i(s, a, n, l) {
        var o = ExpressionPropertyInterface(s.p);
        function p() {
          return a === 10 ? n.comp.compInterface(s.p.v) : o();
        }
        return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), p;
      }
      return t;
    }(), ShapePathInterface = function() {
      return function(e, r, i) {
        var s = r.sh;
        function a(l) {
          return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? a.path : null;
        }
        var n = propertyGroupFactory(a, i);
        return s.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(a, {
          path: {
            get: function() {
              return s.k && s.getValue(), s;
            }
          },
          shape: {
            get: function() {
              return s.k && s.getValue(), s;
            }
          },
          _name: {
            value: e.nm
          },
          ix: {
            value: e.ix
          },
          propertyIndex: {
            value: e.ix
          },
          mn: {
            value: e.mn
          },
          propertyGroup: {
            value: i
          }
        }), a;
      };
    }(), ShapeExpressionInterface = function() {
      function t(b, m, M) {
        var u = [], d, f = b ? b.length : 0;
        for (d = 0; d < f; d += 1)
          b[d].ty === "gr" ? u.push(r(b[d], m[d], M)) : b[d].ty === "fl" ? u.push(i(b[d], m[d], M)) : b[d].ty === "st" ? u.push(n(b[d], m[d], M)) : b[d].ty === "tm" ? u.push(l(b[d], m[d], M)) : b[d].ty === "tr" || (b[d].ty === "el" ? u.push(p(b[d], m[d], M)) : b[d].ty === "sr" ? u.push(g(b[d], m[d], M)) : b[d].ty === "sh" ? u.push(ShapePathInterface(b[d], m[d], M)) : b[d].ty === "rc" ? u.push(P(b[d], m[d], M)) : b[d].ty === "rd" ? u.push(c(b[d], m[d], M)) : b[d].ty === "rp" ? u.push(x(b[d], m[d], M)) : b[d].ty === "gf" ? u.push(s(b[d], m[d], M)) : u.push(a(b[d], m[d])));
        return u;
      }
      function e(b, m, M) {
        var u, d = function(S) {
          for (var k = 0, _ = u.length; k < _; ) {
            if (u[k]._name === S || u[k].mn === S || u[k].propertyIndex === S || u[k].ix === S || u[k].ind === S)
              return u[k];
            k += 1;
          }
          return typeof S == "number" ? u[S - 1] : null;
        };
        d.propertyGroup = propertyGroupFactory(d, M), u = t(b.it, m.it, d.propertyGroup), d.numProperties = u.length;
        var f = o(b.it[b.it.length - 1], m.it[m.it.length - 1], d.propertyGroup);
        return d.transform = f, d.propertyIndex = b.cix, d._name = b.nm, d;
      }
      function r(b, m, M) {
        var u = function(S) {
          switch (S) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return u.content;
            default:
              return u.transform;
          }
        };
        u.propertyGroup = propertyGroupFactory(u, M);
        var d = e(b, m, u.propertyGroup), f = o(b.it[b.it.length - 1], m.it[m.it.length - 1], u.propertyGroup);
        return u.content = d, u.transform = f, Object.defineProperty(u, "_name", {
          get: function() {
            return b.nm;
          }
        }), u.numProperties = b.np, u.propertyIndex = b.ix, u.nm = b.nm, u.mn = b.mn, u;
      }
      function i(b, m, M) {
        function u(d) {
          return d === "Color" || d === "color" ? u.color : d === "Opacity" || d === "opacity" ? u.opacity : null;
        }
        return Object.defineProperties(u, {
          color: {
            get: ExpressionPropertyInterface(m.c)
          },
          opacity: {
            get: ExpressionPropertyInterface(m.o)
          },
          _name: {
            value: b.nm
          },
          mn: {
            value: b.mn
          }
        }), m.c.setGroupProperty(PropertyInterface("Color", M)), m.o.setGroupProperty(PropertyInterface("Opacity", M)), u;
      }
      function s(b, m, M) {
        function u(d) {
          return d === "Start Point" || d === "start point" ? u.startPoint : d === "End Point" || d === "end point" ? u.endPoint : d === "Opacity" || d === "opacity" ? u.opacity : null;
        }
        return Object.defineProperties(u, {
          startPoint: {
            get: ExpressionPropertyInterface(m.s)
          },
          endPoint: {
            get: ExpressionPropertyInterface(m.e)
          },
          opacity: {
            get: ExpressionPropertyInterface(m.o)
          },
          type: {
            get: function() {
              return "a";
            }
          },
          _name: {
            value: b.nm
          },
          mn: {
            value: b.mn
          }
        }), m.s.setGroupProperty(PropertyInterface("Start Point", M)), m.e.setGroupProperty(PropertyInterface("End Point", M)), m.o.setGroupProperty(PropertyInterface("Opacity", M)), u;
      }
      function a() {
        function b() {
          return null;
        }
        return b;
      }
      function n(b, m, M) {
        var u = propertyGroupFactory(_, M), d = propertyGroupFactory(k, u);
        function f(F) {
          Object.defineProperty(k, b.d[F].nm, {
            get: ExpressionPropertyInterface(m.d.dataProps[F].p)
          });
        }
        var y, S = b.d ? b.d.length : 0, k = {};
        for (y = 0; y < S; y += 1)
          f(y), m.d.dataProps[y].p.setGroupProperty(d);
        function _(F) {
          return F === "Color" || F === "color" ? _.color : F === "Opacity" || F === "opacity" ? _.opacity : F === "Stroke Width" || F === "stroke width" ? _.strokeWidth : null;
        }
        return Object.defineProperties(_, {
          color: {
            get: ExpressionPropertyInterface(m.c)
          },
          opacity: {
            get: ExpressionPropertyInterface(m.o)
          },
          strokeWidth: {
            get: ExpressionPropertyInterface(m.w)
          },
          dash: {
            get: function() {
              return k;
            }
          },
          _name: {
            value: b.nm
          },
          mn: {
            value: b.mn
          }
        }), m.c.setGroupProperty(PropertyInterface("Color", u)), m.o.setGroupProperty(PropertyInterface("Opacity", u)), m.w.setGroupProperty(PropertyInterface("Stroke Width", u)), _;
      }
      function l(b, m, M) {
        function u(f) {
          return f === b.e.ix || f === "End" || f === "end" ? u.end : f === b.s.ix ? u.start : f === b.o.ix ? u.offset : null;
        }
        var d = propertyGroupFactory(u, M);
        return u.propertyIndex = b.ix, m.s.setGroupProperty(PropertyInterface("Start", d)), m.e.setGroupProperty(PropertyInterface("End", d)), m.o.setGroupProperty(PropertyInterface("Offset", d)), u.propertyIndex = b.ix, u.propertyGroup = M, Object.defineProperties(u, {
          start: {
            get: ExpressionPropertyInterface(m.s)
          },
          end: {
            get: ExpressionPropertyInterface(m.e)
          },
          offset: {
            get: ExpressionPropertyInterface(m.o)
          },
          _name: {
            value: b.nm
          }
        }), u.mn = b.mn, u;
      }
      function o(b, m, M) {
        function u(f) {
          return b.a.ix === f || f === "Anchor Point" ? u.anchorPoint : b.o.ix === f || f === "Opacity" ? u.opacity : b.p.ix === f || f === "Position" ? u.position : b.r.ix === f || f === "Rotation" || f === "ADBE Vector Rotation" ? u.rotation : b.s.ix === f || f === "Scale" ? u.scale : b.sk && b.sk.ix === f || f === "Skew" ? u.skew : b.sa && b.sa.ix === f || f === "Skew Axis" ? u.skewAxis : null;
        }
        var d = propertyGroupFactory(u, M);
        return m.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", d)), m.transform.mProps.p.setGroupProperty(PropertyInterface("Position", d)), m.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", d)), m.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", d)), m.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", d)), m.transform.mProps.sk && (m.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", d)), m.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", d))), m.transform.op.setGroupProperty(PropertyInterface("Opacity", d)), Object.defineProperties(u, {
          opacity: {
            get: ExpressionPropertyInterface(m.transform.mProps.o)
          },
          position: {
            get: ExpressionPropertyInterface(m.transform.mProps.p)
          },
          anchorPoint: {
            get: ExpressionPropertyInterface(m.transform.mProps.a)
          },
          scale: {
            get: ExpressionPropertyInterface(m.transform.mProps.s)
          },
          rotation: {
            get: ExpressionPropertyInterface(m.transform.mProps.r)
          },
          skew: {
            get: ExpressionPropertyInterface(m.transform.mProps.sk)
          },
          skewAxis: {
            get: ExpressionPropertyInterface(m.transform.mProps.sa)
          },
          _name: {
            value: b.nm
          }
        }), u.ty = "tr", u.mn = b.mn, u.propertyGroup = M, u;
      }
      function p(b, m, M) {
        function u(y) {
          return b.p.ix === y ? u.position : b.s.ix === y ? u.size : null;
        }
        var d = propertyGroupFactory(u, M);
        u.propertyIndex = b.ix;
        var f = m.sh.ty === "tm" ? m.sh.prop : m.sh;
        return f.s.setGroupProperty(PropertyInterface("Size", d)), f.p.setGroupProperty(PropertyInterface("Position", d)), Object.defineProperties(u, {
          size: {
            get: ExpressionPropertyInterface(f.s)
          },
          position: {
            get: ExpressionPropertyInterface(f.p)
          },
          _name: {
            value: b.nm
          }
        }), u.mn = b.mn, u;
      }
      function g(b, m, M) {
        function u(y) {
          return b.p.ix === y ? u.position : b.r.ix === y ? u.rotation : b.pt.ix === y ? u.points : b.or.ix === y || y === "ADBE Vector Star Outer Radius" ? u.outerRadius : b.os.ix === y ? u.outerRoundness : b.ir && (b.ir.ix === y || y === "ADBE Vector Star Inner Radius") ? u.innerRadius : b.is && b.is.ix === y ? u.innerRoundness : null;
        }
        var d = propertyGroupFactory(u, M), f = m.sh.ty === "tm" ? m.sh.prop : m.sh;
        return u.propertyIndex = b.ix, f.or.setGroupProperty(PropertyInterface("Outer Radius", d)), f.os.setGroupProperty(PropertyInterface("Outer Roundness", d)), f.pt.setGroupProperty(PropertyInterface("Points", d)), f.p.setGroupProperty(PropertyInterface("Position", d)), f.r.setGroupProperty(PropertyInterface("Rotation", d)), b.ir && (f.ir.setGroupProperty(PropertyInterface("Inner Radius", d)), f.is.setGroupProperty(PropertyInterface("Inner Roundness", d))), Object.defineProperties(u, {
          position: {
            get: ExpressionPropertyInterface(f.p)
          },
          rotation: {
            get: ExpressionPropertyInterface(f.r)
          },
          points: {
            get: ExpressionPropertyInterface(f.pt)
          },
          outerRadius: {
            get: ExpressionPropertyInterface(f.or)
          },
          outerRoundness: {
            get: ExpressionPropertyInterface(f.os)
          },
          innerRadius: {
            get: ExpressionPropertyInterface(f.ir)
          },
          innerRoundness: {
            get: ExpressionPropertyInterface(f.is)
          },
          _name: {
            value: b.nm
          }
        }), u.mn = b.mn, u;
      }
      function P(b, m, M) {
        function u(y) {
          return b.p.ix === y ? u.position : b.r.ix === y ? u.roundness : b.s.ix === y || y === "Size" || y === "ADBE Vector Rect Size" ? u.size : null;
        }
        var d = propertyGroupFactory(u, M), f = m.sh.ty === "tm" ? m.sh.prop : m.sh;
        return u.propertyIndex = b.ix, f.p.setGroupProperty(PropertyInterface("Position", d)), f.s.setGroupProperty(PropertyInterface("Size", d)), f.r.setGroupProperty(PropertyInterface("Rotation", d)), Object.defineProperties(u, {
          position: {
            get: ExpressionPropertyInterface(f.p)
          },
          roundness: {
            get: ExpressionPropertyInterface(f.r)
          },
          size: {
            get: ExpressionPropertyInterface(f.s)
          },
          _name: {
            value: b.nm
          }
        }), u.mn = b.mn, u;
      }
      function c(b, m, M) {
        function u(y) {
          return b.r.ix === y || y === "Round Corners 1" ? u.radius : null;
        }
        var d = propertyGroupFactory(u, M), f = m;
        return u.propertyIndex = b.ix, f.rd.setGroupProperty(PropertyInterface("Radius", d)), Object.defineProperties(u, {
          radius: {
            get: ExpressionPropertyInterface(f.rd)
          },
          _name: {
            value: b.nm
          }
        }), u.mn = b.mn, u;
      }
      function x(b, m, M) {
        function u(y) {
          return b.c.ix === y || y === "Copies" ? u.copies : b.o.ix === y || y === "Offset" ? u.offset : null;
        }
        var d = propertyGroupFactory(u, M), f = m;
        return u.propertyIndex = b.ix, f.c.setGroupProperty(PropertyInterface("Copies", d)), f.o.setGroupProperty(PropertyInterface("Offset", d)), Object.defineProperties(u, {
          copies: {
            get: ExpressionPropertyInterface(f.c)
          },
          offset: {
            get: ExpressionPropertyInterface(f.o)
          },
          _name: {
            value: b.nm
          }
        }), u.mn = b.mn, u;
      }
      return function(b, m, M) {
        var u;
        function d(y) {
          if (typeof y == "number")
            return y = y === void 0 ? 1 : y, y === 0 ? M : u[y - 1];
          for (var S = 0, k = u.length; S < k; ) {
            if (u[S]._name === y)
              return u[S];
            S += 1;
          }
          return null;
        }
        function f() {
          return M;
        }
        return d.propertyGroup = propertyGroupFactory(d, f), u = t(b, m, d.propertyGroup), d.numProperties = u.length, d._name = "Contents", d;
      };
    }(), TextExpressionInterface = function() {
      return function(t) {
        var e;
        function r(i) {
          switch (i) {
            case "ADBE Text Document":
              return r.sourceText;
            default:
              return null;
          }
        }
        return Object.defineProperty(r, "sourceText", {
          get: function() {
            t.textProperty.getValue();
            var s = t.textProperty.currentData.t;
            return (!e || s !== e.value) && (e = new String(s), e.value = s || new String(s), Object.defineProperty(e, "style", {
              get: function() {
                return {
                  fillColor: t.textProperty.currentData.fc
                };
              }
            })), e;
          }
        }), r;
      };
    }();
    function _typeof(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
        return typeof r;
      } : _typeof = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof(t);
    }
    var FootageInterface = function() {
      var t = function(i) {
        var s = "", a = i.getFootageData();
        function n() {
          return s = "", a = i.getFootageData(), l;
        }
        function l(o) {
          if (a[o])
            return s = o, a = a[o], _typeof(a) === "object" ? l : a;
          var p = o.indexOf(s);
          if (p !== -1) {
            var g = parseInt(o.substr(p + s.length), 10);
            return a = a[g], _typeof(a) === "object" ? l : a;
          }
          return "";
        }
        return n;
      }, e = function(i) {
        function s(a) {
          return a === "Outline" ? s.outlineInterface() : null;
        }
        return s._name = "Outline", s.outlineInterface = t(i), s;
      };
      return function(r) {
        function i(s) {
          return s === "Data" ? i.dataInterface : null;
        }
        return i._name = "Data", i.dataInterface = e(r), i;
      };
    }(), interfaces = {
      layer: LayerExpressionInterface,
      effects: EffectsExpressionInterface,
      comp: CompExpressionInterface,
      shape: ShapeExpressionInterface,
      text: TextExpressionInterface,
      footage: FootageInterface
    };
    function getInterface(t) {
      return interfaces[t] || null;
    }
    var expressionHelpers = function() {
      function t(n, l, o) {
        l.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, l, o).bind(o)));
      }
      function e(n) {
        return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
      }
      function r(n) {
        var l = -0.01, o = this.getValueAtTime(n), p = this.getValueAtTime(n + l), g = 0;
        if (o.length) {
          var P;
          for (P = 0; P < o.length; P += 1)
            g += Math.pow(p[P] - o[P], 2);
          g = Math.sqrt(g) * 100;
        } else
          g = 0;
        return g;
      }
      function i(n) {
        if (this.vel !== void 0)
          return this.vel;
        var l = -1e-3, o = this.getValueAtTime(n), p = this.getValueAtTime(n + l), g;
        if (o.length) {
          g = createTypedArray("float32", o.length);
          var P;
          for (P = 0; P < o.length; P += 1)
            g[P] = (p[P] - o[P]) / l;
        } else
          g = (p - o) / l;
        return g;
      }
      function s() {
        return this.pv;
      }
      function a(n) {
        this.propertyGroup = n;
      }
      return {
        searchExpressions: t,
        getSpeedAtTime: r,
        getVelocityAtTime: i,
        getValueAtTime: e,
        getStaticValueAtTime: s,
        setGroupProperty: a
      };
    }();
    function addPropertyDecorator() {
      function t(c, x, b) {
        if (!this.k || !this.keyframes)
          return this.pv;
        c = c ? c.toLowerCase() : "";
        var m = this.comp.renderedFrame, M = this.keyframes, u = M[M.length - 1].t;
        if (m <= u)
          return this.pv;
        var d, f;
        b ? (x ? d = Math.abs(u - this.elem.comp.globalData.frameRate * x) : d = Math.max(0, u - this.elem.data.ip), f = u - d) : ((!x || x > M.length - 1) && (x = M.length - 1), f = M[M.length - 1 - x].t, d = u - f);
        var y, S, k;
        if (c === "pingpong") {
          var _ = Math.floor((m - f) / d);
          if (_ % 2 !== 0)
            return this.getValueAtTime((d - (m - f) % d + f) / this.comp.globalData.frameRate, 0);
        } else if (c === "offset") {
          var F = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), B = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), H = this.getValueAtTime(((m - f) % d + f) / this.comp.globalData.frameRate, 0), D = Math.floor((m - f) / d);
          if (this.pv.length) {
            for (k = new Array(F.length), S = k.length, y = 0; y < S; y += 1)
              k[y] = (B[y] - F[y]) * D + H[y];
            return k;
          }
          return (B - F) * D + H;
        } else if (c === "continue") {
          var R = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((u - 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (k = new Array(R.length), S = k.length, y = 0; y < S; y += 1)
              k[y] = R[y] + (R[y] - G[y]) * ((m - u) / this.comp.globalData.frameRate) / 5e-4;
            return k;
          }
          return R + (R - G) * ((m - u) / 1e-3);
        }
        return this.getValueAtTime(((m - f) % d + f) / this.comp.globalData.frameRate, 0);
      }
      function e(c, x, b) {
        if (!this.k)
          return this.pv;
        c = c ? c.toLowerCase() : "";
        var m = this.comp.renderedFrame, M = this.keyframes, u = M[0].t;
        if (m >= u)
          return this.pv;
        var d, f;
        b ? (x ? d = Math.abs(this.elem.comp.globalData.frameRate * x) : d = Math.max(0, this.elem.data.op - u), f = u + d) : ((!x || x > M.length - 1) && (x = M.length - 1), f = M[x].t, d = f - u);
        var y, S, k;
        if (c === "pingpong") {
          var _ = Math.floor((u - m) / d);
          if (_ % 2 === 0)
            return this.getValueAtTime(((u - m) % d + u) / this.comp.globalData.frameRate, 0);
        } else if (c === "offset") {
          var F = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), B = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), H = this.getValueAtTime((d - (u - m) % d + u) / this.comp.globalData.frameRate, 0), D = Math.floor((u - m) / d) + 1;
          if (this.pv.length) {
            for (k = new Array(F.length), S = k.length, y = 0; y < S; y += 1)
              k[y] = H[y] - (B[y] - F[y]) * D;
            return k;
          }
          return H - (B - F) * D;
        } else if (c === "continue") {
          var R = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((u + 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (k = new Array(R.length), S = k.length, y = 0; y < S; y += 1)
              k[y] = R[y] + (R[y] - G[y]) * (u - m) / 1e-3;
            return k;
          }
          return R + (R - G) * (u - m) / 1e-3;
        }
        return this.getValueAtTime((d - ((u - m) % d + u)) / this.comp.globalData.frameRate, 0);
      }
      function r(c, x) {
        if (!this.k)
          return this.pv;
        if (c = (c || 0.4) * 0.5, x = Math.floor(x || 5), x <= 1)
          return this.pv;
        var b = this.comp.renderedFrame / this.comp.globalData.frameRate, m = b - c, M = b + c, u = x > 1 ? (M - m) / (x - 1) : 1, d = 0, f = 0, y;
        this.pv.length ? y = createTypedArray("float32", this.pv.length) : y = 0;
        for (var S; d < x; ) {
          if (S = this.getValueAtTime(m + d * u), this.pv.length)
            for (f = 0; f < this.pv.length; f += 1)
              y[f] += S[f];
          else
            y += S;
          d += 1;
        }
        if (this.pv.length)
          for (f = 0; f < this.pv.length; f += 1)
            y[f] /= x;
        else
          y /= x;
        return y;
      }
      function i(c) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new Matrix()
        });
        var x = this._transformCachingAtTime.v;
        if (x.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var b = this.a.getValueAtTime(c);
          x.translate(-b[0] * this.a.mult, -b[1] * this.a.mult, b[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var m = this.s.getValueAtTime(c);
          x.scale(m[0] * this.s.mult, m[1] * this.s.mult, m[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var M = this.sk.getValueAtTime(c), u = this.sa.getValueAtTime(c);
          x.skewFromAxis(-M * this.sk.mult, u * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var d = this.r.getValueAtTime(c);
          x.rotate(-d * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var f = this.rz.getValueAtTime(c), y = this.ry.getValueAtTime(c), S = this.rx.getValueAtTime(c), k = this.or.getValueAtTime(c);
          x.rotateZ(-f * this.rz.mult).rotateY(y * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-k[2] * this.or.mult).rotateY(k[1] * this.or.mult).rotateX(k[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var _ = this.px.getValueAtTime(c), F = this.py.getValueAtTime(c);
          if (this.data.p.z) {
            var B = this.pz.getValueAtTime(c);
            x.translate(_ * this.px.mult, F * this.py.mult, -B * this.pz.mult);
          } else
            x.translate(_ * this.px.mult, F * this.py.mult, 0);
        } else {
          var H = this.p.getValueAtTime(c);
          x.translate(H[0] * this.p.mult, H[1] * this.p.mult, -H[2] * this.p.mult);
        }
        return x;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var a = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(c, x, b) {
        var m = a(c, x, b);
        return m.dynamicProperties.length ? m.getValueAtTime = i.bind(m) : m.getValueAtTime = s.bind(m), m.setGroupProperty = expressionHelpers.setGroupProperty, m;
      };
      var n = PropertyFactory.getProp;
      PropertyFactory.getProp = function(c, x, b, m, M) {
        var u = n(c, x, b, m, M);
        u.kf ? u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u) : u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u.loopOut = t, u.loopIn = e, u.smooth = r, u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u), u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u), u.numKeys = x.a === 1 ? x.k.length : 0, u.propertyIndex = x.ix;
        var d = 0;
        return b !== 0 && (d = createTypedArray("float32", x.a === 1 ? x.k[0].s.length : x.k.length)), u._cachingAtTime = {
          lastFrame: initialDefaultFrame,
          lastIndex: 0,
          value: d
        }, expressionHelpers.searchExpressions(c, x, u), u.k && M.addDynamicProperty(u), u;
      };
      function l(c) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      var o = ShapePropertyFactory.getConstructorFunction(), p = ShapePropertyFactory.getKeyframedConstructorFunction();
      function g() {
      }
      g.prototype = {
        vertices: function(x, b) {
          this.k && this.getValue();
          var m = this.v;
          b !== void 0 && (m = this.getValueAtTime(b, 0));
          var M, u = m._length, d = m[x], f = m.v, y = createSizedArray(u);
          for (M = 0; M < u; M += 1)
            x === "i" || x === "o" ? y[M] = [d[M][0] - f[M][0], d[M][1] - f[M][1]] : y[M] = [d[M][0], d[M][1]];
          return y;
        },
        points: function(x) {
          return this.vertices("v", x);
        },
        inTangents: function(x) {
          return this.vertices("i", x);
        },
        outTangents: function(x) {
          return this.vertices("o", x);
        },
        isClosed: function() {
          return this.v.c;
        },
        pointOnPath: function(x, b) {
          var m = this.v;
          b !== void 0 && (m = this.getValueAtTime(b, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(m));
          for (var M = this._segmentsLength, u = M.lengths, d = M.totalLength * x, f = 0, y = u.length, S = 0, k; f < y; ) {
            if (S + u[f].addedLength > d) {
              var _ = f, F = m.c && f === y - 1 ? 0 : f + 1, B = (d - S) / u[f].addedLength;
              k = bez.getPointInSegment(m.v[_], m.v[F], m.o[_], m.i[F], B, u[f]);
              break;
            } else
              S += u[f].addedLength;
            f += 1;
          }
          return k || (k = m.c ? [m.v[0][0], m.v[0][1]] : [m.v[m._length - 1][0], m.v[m._length - 1][1]]), k;
        },
        vectorOnPath: function(x, b, m) {
          x == 1 ? x = this.v.c : x == 0 && (x = 0.999);
          var M = this.pointOnPath(x, b), u = this.pointOnPath(x + 1e-3, b), d = u[0] - M[0], f = u[1] - M[1], y = Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2));
          if (y === 0)
            return [0, 0];
          var S = m === "tangent" ? [d / y, f / y] : [-f / y, d / y];
          return S;
        },
        tangentOnPath: function(x, b) {
          return this.vectorOnPath(x, b, "tangent");
        },
        normalOnPath: function(x, b) {
          return this.vectorOnPath(x, b, "normal");
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
      }, extendPrototype([g], o), extendPrototype([g], p), p.prototype.getValueAtTime = l, p.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var P = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(c, x, b, m, M) {
        var u = P(c, x, b, m, M);
        return u.propertyIndex = x.ix, u.lock = !1, b === 3 ? expressionHelpers.searchExpressions(c, x.pt, u) : b === 4 && expressionHelpers.searchExpressions(c, x.ks, u), u.k && c.addDynamicProperty(u), u;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      function t() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      }
      TextProperty.prototype.getExpressionValue = function(e, r) {
        var i = this.calculateExpression(r);
        if (e.t !== i) {
          var s = {};
          return this.copyData(s, e), s.t = i.toString(), s.__complete = !1, s;
        }
        return e;
      }, TextProperty.prototype.searchProperty = function() {
        var e = this.searchKeyframes(), r = this.searchExpressions();
        return this.kf = e || r, this.kf;
      }, TextProperty.prototype.searchExpressions = t;
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = {
      createMergeNode: function t(e, r) {
        var i = createNS("feMerge");
        i.setAttribute("result", e);
        var s, a;
        for (a = 0; a < r.length; a += 1)
          s = createNS("feMergeNode"), s.setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
        return i;
      }
    };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(t, e, r, i, s) {
      this.filterManager = e;
      var a = createNS("feColorMatrix");
      a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
      var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
      t.appendChild(n);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
      }
    };
    function SVGFillFilter(t, e, r, i) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s;
    }
    SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
      }
    };
    function SVGStrokeEffect(t, e, r) {
      this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = [];
    }
    SVGStrokeEffect.prototype.initialize = function() {
      var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, r, i, s;
      for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1)
        e = createNS("path"), r.appendChild(e), this.paths.push({
          p: e,
          m: i
        });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var a = createNS("mask"), n = createElementID();
        a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
        var l = createNS("g");
        for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0]; )
          l.appendChild(t[0]);
        this.elem.layerElement.appendChild(l), this.masker = a, r.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2)
          for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length; )
            this.elem.layerElement.removeChild(t[0]);
        this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = r;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      this.initialized || this.initialize();
      var e, r = this.paths.length, i, s;
      for (e = 0; e < r; e += 1)
        if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
          var a;
          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o = s.getTotalLength();
            a = "0 0 0 " + o * n + " ";
            var p = o * (l - n), g = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, P = Math.floor(p / g), c;
            for (c = 0; c < P; c += 1)
              a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
            a += "0 " + o * 10 + " 0 0";
          } else
            a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          s.setAttribute("stroke-dasharray", a);
        }
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var x = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(x[0] * 255) + "," + bmFloor(x[1] * 255) + "," + bmFloor(x[2] * 255) + ")");
      }
    };
    function SVGTritoneFilter(t, e, r, i) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
      var a = createNS("feComponentTransfer");
      a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
      var n = createNS("feFuncR");
      n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
      var l = createNS("feFuncG");
      l.setAttribute("type", "table"), a.appendChild(l), this.feFuncG = l;
      var o = createNS("feFuncB");
      o.setAttribute("type", "table"), a.appendChild(o), this.feFuncB = o, t.appendChild(a);
    }
    SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
      }
    };
    function SVGProLevelsFilter(t, e, r, i) {
      this.filterManager = e;
      var s = this.filterManager.effectElements, a = createNS("feComponentTransfer");
      (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var r = createNS(t);
      return r.setAttribute("type", "table"), e.appendChild(r), r;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
      for (var a = 0, n = 256, l, o = Math.min(t, e), p = Math.max(t, e), g = Array.call(null, {
        length: n
      }), P, c = 0, x = s - i, b = e - t; a <= 256; )
        l = a / 256, l <= o ? P = b < 0 ? s : i : l >= p ? P = b < 0 ? i : s : P = i + x * Math.pow((l - t) / b, 1 / r), g[c] = P, c += 1, a += 256 / (n - 1);
      return g.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, r = this.filterManager.effectElements;
        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    };
    function SVGDropShadowEffect(t, e, r, i, s) {
      var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
      t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
      var l = createNS("feGaussianBlur");
      l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, t.appendChild(l);
      var o = createNS("feOffset");
      o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
      var p = createNS("feFlood");
      p.setAttribute("flood-color", "#00ff00"), p.setAttribute("flood-opacity", "1"), p.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = p, t.appendChild(p);
      var g = createNS("feComposite");
      g.setAttribute("in", i + "_drop_shadow_3"), g.setAttribute("in2", i + "_drop_shadow_2"), g.setAttribute("operator", "in"), g.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(g);
      var P = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
      t.appendChild(P);
    }
    extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)));
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), a = r * Math.sin(i);
          this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, r) {
      this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
    }
    SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
        if (_svgMatteSymbols[e] === t)
          return _svgMatteSymbols[e];
        e += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var r = t.layerElement.parentNode;
      if (r) {
        for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement; )
          s += 1;
        var n;
        s <= a - 2 && (n = i[s + 1]);
        var l = createNS("use");
        l.setAttribute("href", "#" + e), n ? r.insertBefore(l, n) : r.appendChild(l);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var r = createElementID(), i = createNS("mask");
        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var s = t.globalData.defs;
        s.appendChild(i);
        var a = createNS("symbol");
        a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
        var n = createNS("use");
        n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show();
      }
      t.setMatte(e.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
        e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
      this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    };
    function SVGGaussianBlurEffect(t, e, r, i) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var s = createNS("feGaussianBlur");
      s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s;
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = 0.3, r = this.filterManager.effectElements[0].p.v * e, i = this.filterManager.effectElements[1].p.v, s = i == 3 ? 0 : r, a = i == 2 ? 0 : r;
        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
        var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", n);
      }
    };
    function TransformEffect() {
    }
    TransformEffect.prototype.init = function(t) {
      this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
    }, TransformEffect.prototype.renderFrame = function(t) {
      if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
        var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1, a = e[3].p.v, n = s ? a : e[4].p.v, l = e[5].p.v, o = e[6].p.v, p = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(n * 0.01, a * 0.01, 1), this.matrix.rotate(-p * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
      }
    };
    function SVGTransformEffect(t, e) {
      this.init(e);
    }
    extendPrototype([TransformEffect], SVGTransformEffect);
    function CVTransformEffect(t) {
      this.init(t);
    }
    return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
  });
})(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports;
const lottie = /* @__PURE__ */ getDefaultExportFromCjs(lottieExports), v = "4.8.0", meta = {
  g: "LottieFiles AE 3.5.1",
  a: "",
  k: "",
  d: "",
  tc: ""
}, fr = 60, ip = 0, op = 504, w = 48, h = 48, nm = "animation", ddd = 0, assets = [], layers = [
  {
    ddd: 0,
    ind: 1,
    ty: 3,
    nm: "Animated face - Null",
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
        a: 1,
        k: [
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 0.061,
            s: [
              12,
              14,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 60.061,
            s: [
              12,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0.273
            },
            t: 120.061,
            s: [
              12,
              14,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 135.172,
            s: [
              17.054,
              9.957,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 143.057,
            s: [
              17,
              10,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0
            },
            t: 203.057,
            s: [
              17,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 218.17,
            s: [
              8.914,
              9.979,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 226.055,
            s: [
              9,
              10,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 286.055,
            s: [
              9,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.5,
              y: 0.21
            },
            t: 346.055,
            s: [
              9,
              10,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 352.596,
            s: [
              10.045,
              11.394,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 359.137,
            s: [
              11.212,
              12.95,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 365.68,
            s: [
              11.782,
              13.709,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 372.221,
            s: [
              11.973,
              13.963,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 376.801,
            s: [
              12,
              14,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.479,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 426.6,
            s: [
              12,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 480,
            s: [
              12,
              14,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 3,
    nm: "left-eye-controller",
    parent: 1,
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
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 120,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 126,
            s: [
              0,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 132,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 150,
            s: [
              0,
              1,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 210,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 480.6,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.15,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0
            },
            t: 492,
            s: [
              0,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 504,
            s: [
              0,
              0,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "left-eye",
    cl: "tc-logo-left-eye",
    parent: 2,
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
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 1,
              k: [
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 120,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 126,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.42,
                    y: 0
                  },
                  t: 132,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 150,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          6.5
                        ],
                        [
                          6.5,
                          8
                        ],
                        [
                          1.5,
                          8
                        ],
                        [
                          0,
                          6.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 210,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 480.6,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 492,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  t: 504,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                }
              ],
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.262745112181,
                0.129411771894,
                0.290196090937,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
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
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 4,
    ty: 3,
    nm: "right-eye-controller",
    parent: 1,
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
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 120,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 126,
            s: [
              16,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 132,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 150,
            s: [
              16,
              1,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 210,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 480.6,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.15,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0
            },
            t: 492,
            s: [
              16,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 504,
            s: [
              16,
              0,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 5,
    ty: 4,
    nm: "right-eye",
    cl: "tc-logo-right-eye",
    parent: 4,
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
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 1,
              k: [
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 120,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 126,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.42,
                    y: 0
                  },
                  t: 132,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 150,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          6.5
                        ],
                        [
                          6.5,
                          8
                        ],
                        [
                          1.5,
                          8
                        ],
                        [
                          0,
                          6.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 210,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 480.6,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 492,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  t: 504,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                }
              ],
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.262745112181,
                0.129411771894,
                0.290196090937,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
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
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 6,
    ty: 3,
    nm: "mouth-controller",
    parent: 1,
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
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 120,
            s: [
              5.131,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 126,
            s: [
              3.85,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 132,
            s: [
              3.848,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 150,
            s: [
              5.131,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 210,
            s: [
              7.172,
              16,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 383.957,
            s: [
              5.092,
              14.981,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 480.6,
            s: [
              5.131,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.15,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0.35
            },
            t: 492,
            s: [
              3.848,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 504,
            s: [
              5.13,
              15,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 7,
    ty: 4,
    nm: "mouth",
    cl: "tc-logo-mouth",
    parent: 6,
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
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 1,
              k: [
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 120,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 126,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.81,
                          4.051
                        ],
                        [
                          0.983,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.208,
                          -1.041
                        ],
                        [
                          -3.982,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.982,
                          0
                        ],
                        [
                          0.208,
                          -1.041
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.983,
                          0
                        ],
                        [
                          0.81,
                          4.051
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          8.152,
                          9
                        ],
                        [
                          16.271,
                          1.915
                        ],
                        [
                          14.679,
                          0
                        ],
                        [
                          1.624,
                          0
                        ],
                        [
                          0.033,
                          1.915
                        ],
                        [
                          8.152,
                          9
                        ],
                        [
                          8.152,
                          9
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.42,
                    y: 0
                  },
                  t: 132,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.81,
                          4.051
                        ],
                        [
                          0.983,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.208,
                          -1.041
                        ],
                        [
                          -3.982,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.982,
                          0
                        ],
                        [
                          0.208,
                          -1.041
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.983,
                          0
                        ],
                        [
                          0.81,
                          4.051
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          8.152,
                          9
                        ],
                        [
                          16.271,
                          1.915
                        ],
                        [
                          14.679,
                          0
                        ],
                        [
                          1.624,
                          0
                        ],
                        [
                          0.033,
                          1.915
                        ],
                        [
                          8.152,
                          9
                        ],
                        [
                          8.152,
                          9
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 150,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.67,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 210,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.48,
                          2.251
                        ],
                        [
                          0.582,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.123,
                          -0.578
                        ],
                        [
                          -2.358,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          2.358,
                          0
                        ],
                        [
                          0.123,
                          -0.578
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.582,
                          0
                        ],
                        [
                          0.48,
                          2.25
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          4.828,
                          5
                        ],
                        [
                          9.636,
                          1.064
                        ],
                        [
                          8.693,
                          0
                        ],
                        [
                          0.962,
                          0
                        ],
                        [
                          0.019,
                          1.064
                        ],
                        [
                          4.828,
                          5
                        ],
                        [
                          4.828,
                          5
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.67,
                    y: 1
                  },
                  o: {
                    x: 0.33,
                    y: 0
                  },
                  t: 383.957,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.686,
                          3.168
                        ],
                        [
                          0.833,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.176,
                          -0.814
                        ],
                        [
                          -3.374,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.374,
                          0
                        ],
                        [
                          0.176,
                          -0.814
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.833,
                          0
                        ],
                        [
                          0.686,
                          3.168
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.908,
                          7.039
                        ],
                        [
                          13.789,
                          1.497
                        ],
                        [
                          12.44,
                          0
                        ],
                        [
                          1.377,
                          0
                        ],
                        [
                          0.028,
                          1.497
                        ],
                        [
                          6.908,
                          7.039
                        ],
                        [
                          6.908,
                          7.039
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.33,
                    y: 0
                  },
                  t: 480.6,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 492,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.81,
                          4.051
                        ],
                        [
                          0.983,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.208,
                          -1.041
                        ],
                        [
                          -3.982,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.982,
                          0
                        ],
                        [
                          0.208,
                          -1.041
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.983,
                          0
                        ],
                        [
                          0.81,
                          4.051
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          8.152,
                          9
                        ],
                        [
                          16.271,
                          1.915
                        ],
                        [
                          14.679,
                          0
                        ],
                        [
                          1.624,
                          0
                        ],
                        [
                          0.033,
                          1.915
                        ],
                        [
                          8.152,
                          9
                        ],
                        [
                          8.152,
                          9
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  t: 504,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                }
              ],
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.262745112181,
                0.129411771894,
                0.290196090937,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
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
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 8,
    ty: 4,
    nm: "face",
    cl: "tc-logo-face",
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
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -5.523
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    11.046,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    11.046
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -11.046,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    5.523,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    11.046
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -11.046,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -11.046
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    20,
                    0
                  ],
                  [
                    38,
                    0
                  ],
                  [
                    48,
                    10
                  ],
                  [
                    48,
                    28
                  ],
                  [
                    28,
                    48
                  ],
                  [
                    20,
                    48
                  ],
                  [
                    0,
                    28
                  ],
                  [
                    0,
                    20
                  ],
                  [
                    20,
                    0
                  ],
                  [
                    20,
                    0
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.941176474094,
                0.854901969433,
                0.984313726425,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
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
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  }
], markers = [], animationData = {
  v,
  meta,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers
};
function bound01(t, e) {
  isOnePointZero(t) && (t = "100%");
  const r = isPercentage(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), r && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function clamp01(t) {
  return Math.min(1, Math.max(0, t));
}
function isOnePointZero(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function isPercentage(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function boundAlpha(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function convertToPercentage(t) {
  return Number(t) <= 1 ? `${Number(t) * 100}%` : t;
}
function pad2(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function rgbToRgb(t, e, r) {
  return {
    r: bound01(t, 255) * 255,
    g: bound01(e, 255) * 255,
    b: bound01(r, 255) * 255
  };
}
function rgbToHsl(t, e, r) {
  t = bound01(t, 255), e = bound01(e, 255), r = bound01(r, 255);
  const i = Math.max(t, e, r), s = Math.min(t, e, r);
  let a = 0, n = 0;
  const l = (i + s) / 2;
  if (i === s)
    n = 0, a = 0;
  else {
    const o = i - s;
    switch (n = l > 0.5 ? o / (2 - i - s) : o / (i + s), i) {
      case t:
        a = (e - r) / o + (e < r ? 6 : 0);
        break;
      case e:
        a = (r - t) / o + 2;
        break;
      case r:
        a = (t - e) / o + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: n, l };
}
function hue2rgb(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * (6 * r) : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function hslToRgb(t, e, r) {
  let i, s, a;
  if (t = bound01(t, 360), e = bound01(e, 100), r = bound01(r, 100), e === 0)
    s = r, a = r, i = r;
  else {
    const n = r < 0.5 ? r * (1 + e) : r + e - r * e, l = 2 * r - n;
    i = hue2rgb(l, n, t + 1 / 3), s = hue2rgb(l, n, t), a = hue2rgb(l, n, t - 1 / 3);
  }
  return { r: i * 255, g: s * 255, b: a * 255 };
}
function rgbToHsv(t, e, r) {
  t = bound01(t, 255), e = bound01(e, 255), r = bound01(r, 255);
  const i = Math.max(t, e, r), s = Math.min(t, e, r);
  let a = 0;
  const n = i, l = i - s, o = i === 0 ? 0 : l / i;
  if (i === s)
    a = 0;
  else {
    switch (i) {
      case t:
        a = (e - r) / l + (e < r ? 6 : 0);
        break;
      case e:
        a = (r - t) / l + 2;
        break;
      case r:
        a = (t - e) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: o, v: n };
}
function hsvToRgb(t, e, r) {
  t = bound01(t, 360) * 6, e = bound01(e, 100), r = bound01(r, 100);
  const i = Math.floor(t), s = t - i, a = r * (1 - e), n = r * (1 - s * e), l = r * (1 - (1 - s) * e), o = i % 6, p = [r, n, a, a, l, r][o], g = [l, r, r, n, a, a][o], P = [a, a, l, r, r, n][o];
  return { r: p * 255, g: g * 255, b: P * 255 };
}
function rgbToHex(t, e, r, i) {
  const s = [
    pad2(Math.round(t).toString(16)),
    pad2(Math.round(e).toString(16)),
    pad2(Math.round(r).toString(16))
  ];
  return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function rgbaToHex(t, e, r, i, s) {
  const a = [
    pad2(Math.round(t).toString(16)),
    pad2(Math.round(e).toString(16)),
    pad2(Math.round(r).toString(16)),
    pad2(convertDecimalToHex(i))
  ];
  return s && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function convertDecimalToHex(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function convertHexToDecimal(t) {
  return parseIntFromHex(t) / 255;
}
function parseIntFromHex(t) {
  return parseInt(t, 16);
}
function numberInputToObject(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
const names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(t) {
  let e = { r: 0, g: 0, b: 0 }, r = 1, i = null, s = null, a = null, n = !1, l = !1;
  return typeof t == "string" && (t = stringInputToObject(t)), typeof t == "object" && (isValidCSSUnit(t.r) && isValidCSSUnit(t.g) && isValidCSSUnit(t.b) ? (e = rgbToRgb(t.r, t.g, t.b), n = !0, l = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : isValidCSSUnit(t.h) && isValidCSSUnit(t.s) && isValidCSSUnit(t.v) ? (i = convertToPercentage(t.s), s = convertToPercentage(t.v), e = hsvToRgb(t.h, i, s), n = !0, l = "hsv") : isValidCSSUnit(t.h) && isValidCSSUnit(t.s) && isValidCSSUnit(t.l) && (i = convertToPercentage(t.s), a = convertToPercentage(t.l), e = hslToRgb(t.h, i, a), n = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (r = t.a)), r = boundAlpha(r), {
    ok: n,
    format: t.format || l,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: r
  };
}
const CSS_INTEGER = "[-\\+]?\\d+%?", CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?", CSS_UNIT = `(?:${CSS_NUMBER})|(?:${CSS_INTEGER})`, PERMISSIVE_MATCH3 = `[\\s|\\(]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})\\s*\\)?`, PERMISSIVE_MATCH4 = `[\\s|\\(]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})\\s*\\)?`, matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  let e = !1;
  if (names[t])
    t = names[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r = matchers.rgb.exec(t);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = matchers.rgba.exec(t), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = matchers.hsl.exec(t), r ? { h: r[1], s: r[2], l: r[3] } : (r = matchers.hsla.exec(t), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = matchers.hsv.exec(t), r ? { h: r[1], s: r[2], v: r[3] } : (r = matchers.hsva.exec(t), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = matchers.hex8.exec(t), r ? {
    r: parseIntFromHex(r[1]),
    g: parseIntFromHex(r[2]),
    b: parseIntFromHex(r[3]),
    a: convertHexToDecimal(r[4]),
    format: e ? "name" : "hex8"
  } : (r = matchers.hex6.exec(t), r ? {
    r: parseIntFromHex(r[1]),
    g: parseIntFromHex(r[2]),
    b: parseIntFromHex(r[3]),
    format: e ? "name" : "hex"
  } : (r = matchers.hex4.exec(t), r ? {
    r: parseIntFromHex(r[1] + r[1]),
    g: parseIntFromHex(r[2] + r[2]),
    b: parseIntFromHex(r[3] + r[3]),
    a: convertHexToDecimal(r[4] + r[4]),
    format: e ? "name" : "hex8"
  } : (r = matchers.hex3.exec(t), r ? {
    r: parseIntFromHex(r[1] + r[1]),
    g: parseIntFromHex(r[2] + r[2]),
    b: parseIntFromHex(r[3] + r[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function isValidCSSUnit(t) {
  return !!matchers.CSS_UNIT.exec(String(t));
}
class TinyColor {
  constructor(e = "", r = {}) {
    if (e instanceof TinyColor)
      return e;
    typeof e == "number" && (e = numberInputToObject(e)), this.originalInput = e;
    const i = inputToRGB(e);
    this.originalInput = e, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = r.format ?? i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const e = this.toRgb();
    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const e = this.toRgb();
    let r, i, s;
    const a = e.r / 255, n = e.g / 255, l = e.b / 255;
    return a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), n <= 0.03928 ? i = n / 12.92 : i = Math.pow((n + 0.055) / 1.055, 2.4), l <= 0.03928 ? s = l / 12.92 : s = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * i + 0.0722 * s;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(e) {
    return this.a = boundAlpha(e), this.roundA = Math.round(100 * this.a) / 100, this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: e } = this.toHsl();
    return e === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const e = rgbToHsv(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const e = rgbToHsv(this.r, this.g, this.b), r = Math.round(e.h * 360), i = Math.round(e.s * 100), s = Math.round(e.v * 100);
    return this.a === 1 ? `hsv(${r}, ${i}%, ${s}%)` : `hsva(${r}, ${i}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const e = rgbToHsl(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const e = rgbToHsl(this.r, this.g, this.b), r = Math.round(e.h * 360), i = Math.round(e.s * 100), s = Math.round(e.l * 100);
    return this.a === 1 ? `hsl(${r}, ${i}%, ${s}%)` : `hsla(${r}, ${i}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(e = !1) {
    return rgbToHex(this.r, this.g, this.b, e);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(e = !1) {
    return "#" + this.toHex(e);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(e = !1) {
    return rgbaToHex(this.r, this.g, this.b, this.a, e);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(e = !1) {
    return "#" + this.toHex8(e);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(e = !1) {
    return this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const e = Math.round(this.r), r = Math.round(this.g), i = Math.round(this.b);
    return this.a === 1 ? `rgb(${e}, ${r}, ${i})` : `rgba(${e}, ${r}, ${i}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const e = (r) => `${Math.round(bound01(r, 255) * 100)}%`;
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const e = (r) => Math.round(bound01(r, 255) * 100);
    return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    const e = "#" + rgbToHex(this.r, this.g, this.b, !1);
    for (const [r, i] of Object.entries(names))
      if (e === i)
        return r;
    return !1;
  }
  toString(e) {
    const r = !!e;
    e = e ?? this.format;
    let i = !1;
    const s = this.a < 1 && this.a >= 0;
    return !r && s && (e.startsWith("hex") || e === "name") ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (i = this.toRgbString()), e === "prgb" && (i = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (i = this.toHexString()), e === "hex3" && (i = this.toHexString(!0)), e === "hex4" && (i = this.toHex8String(!0)), e === "hex8" && (i = this.toHex8String()), e === "name" && (i = this.toName()), e === "hsl" && (i = this.toHslString()), e === "hsv" && (i = this.toHsvString()), i || this.toHexString());
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new TinyColor(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(e = 10) {
    const r = this.toHsl();
    return r.l += e / 100, r.l = clamp01(r.l), new TinyColor(r);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(e = 10) {
    const r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(e / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(e / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(e / 100)))), new TinyColor(r);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(e = 10) {
    const r = this.toHsl();
    return r.l -= e / 100, r.l = clamp01(r.l), new TinyColor(r);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(e = 10) {
    return this.mix("white", e);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(e = 10) {
    return this.mix("black", e);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(e = 10) {
    const r = this.toHsl();
    return r.s -= e / 100, r.s = clamp01(r.s), new TinyColor(r);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(e = 10) {
    const r = this.toHsl();
    return r.s += e / 100, r.s = clamp01(r.s), new TinyColor(r);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(e) {
    const r = this.toHsl(), i = (r.h + e) % 360;
    return r.h = i < 0 ? 360 + i : i, new TinyColor(r);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(e, r = 50) {
    const i = this.toRgb(), s = new TinyColor(e).toRgb(), a = r / 100, n = {
      r: (s.r - i.r) * a + i.r,
      g: (s.g - i.g) * a + i.g,
      b: (s.b - i.b) * a + i.b,
      a: (s.a - i.a) * a + i.a
    };
    return new TinyColor(n);
  }
  analogous(e = 6, r = 30) {
    const i = this.toHsl(), s = 360 / r, a = [this];
    for (i.h = (i.h - (s * e >> 1) + 720) % 360; --e; )
      i.h = (i.h + s) % 360, a.push(new TinyColor(i));
    return a;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const e = this.toHsl();
    return e.h = (e.h + 180) % 360, new TinyColor(e);
  }
  monochromatic(e = 6) {
    const r = this.toHsv(), { h: i } = r, { s } = r;
    let { v: a } = r;
    const n = [], l = 1 / e;
    for (; e--; )
      n.push(new TinyColor({ h: i, s, v: a })), a = (a + l) % 1;
    return n;
  }
  splitcomplement() {
    const e = this.toHsl(), { h: r } = e;
    return [
      this,
      new TinyColor({ h: (r + 72) % 360, s: e.s, l: e.l }),
      new TinyColor({ h: (r + 216) % 360, s: e.s, l: e.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(e) {
    const r = this.toRgb(), i = new TinyColor(e).toRgb(), s = r.a + i.a * (1 - r.a);
    return new TinyColor({
      r: (r.r * r.a + i.r * i.a * (1 - r.a)) / s,
      g: (r.g * r.a + i.g * i.a * (1 - r.a)) / s,
      b: (r.b * r.a + i.b * i.a * (1 - r.a)) / s,
      a: s
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(e) {
    const r = this.toHsl(), { h: i } = r, s = [this], a = 360 / e;
    for (let n = 1; n < e; n++)
      s.push(new TinyColor({ h: (i + n * a) % 360, s: r.s, l: r.l }));
    return s;
  }
  /**
   * compare color vs current color
   */
  equals(e) {
    return this.toRgbString() === new TinyColor(e).toRgbString();
  }
}
const attachment = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB0SSURBVHic7d1t7L5nXd/xd/unpRW6tiotwopQFNyUOdFk0KKJBh+wCJUA7YCo0cUs2QBRvIuLEQgEGHdO0AeLmTNz3MldmYMt0QeKheyBMcO5AAJyUwolYEGFctf/fw+uqwJt6f/ud53HdV7H65Wc+fXZ+T3/PY/v8bmO87jO65wY7bzqO6qHVg/Z/v226qLqXtWl27/njyoQDshnqxurm6v/Xb2lemd128iiYIRzRhcwoWPV91Q/VP1g9f1tJnhgjE9U/6H6zerzg2uBxQgAy3l49ePVk6vLBtcC3NlHqmdWbxxdCCxBANiti6qfrn6q+s7BtQAnd6J6fvVr1fHBtcBOCQC78Y3V06tnbP8bWJc3VE+pvji6ENgVAeBofUP1K20m/osG1wKcnbdUT0oI4EAJAEfnsdVvVA8cXAdwdN5WPb76wuhC4KgJAGfviuq3qh8ZXQiwE1YCOEgCwNn5keq/VN80uA5gt6wEcHDOHV3ASt2jenZ1fSZ/mMFjqjdV9xxdCBwVKwCn7xvbLAlePboQYHEeB3AwBIDT8y3V/6z+2ehCgGE8DuAgCACn7juq/1U9YHQhwHBCAKsnAJyaf1L9SfXNowsB9obHAayaAHBy969uqL51dCHA3rESwGr5FsDdu6R6ayZ/4K75dgCrJQB8fedVf5ANf8Dde0z1uur80YXA6RAAvr4X5Kt+wKl5XPXmrASwIvYA3LV/2ebTv38f4HTYE8BqmODu7Irqz/OGP+DM+HYAq+ARwJ39ZiZ/4Mx5HMAqCABf60fb/KwvwNnw7QD2nkcAX/EN1f+tHjS6EOBg2BPA3rIC8BW/kskfOFq+IsjesgKw8Y3VB6uLBtcBHCYrAewdKwAbz8jkD+yOPQHsHSsAda82n/790A+wa1YC2BtWAOrfZPIHlmFPAHvDCkC9q3rY6CKAqVgJYLjZVwC+N5M/sDx7AmCwX69O7Nnx5epPqmdVj6gua/PLhMDG6DF6lMf1eRwAiztW3dz4BnD78bnqRW0mfODrGz1WhQBYue9r/MC//fj9Nj9CBJzc6PEqBMDK/VLjB/3x6tnZjAmnY/S43dXx1uwJgEW8rbGD/bbqX+38KuHwjJ6od3lYCYAdO6/6+8YO9F/Z+VXCYRo9SQsBsGIPa+wA//0s+8OZGj1BCwGwYk9s3MC+NRv+4GyMnpyXOuwJYKdmfRHQQwee+z9WHxl4fmAdvCwIduB3G5Pov5zv+cPZGv3JfOnD4wB2YtYVgCsHnfcd1ScGnRtYp8e12TckBHCkZg0Alww675sHnRdYt8e16R8eB3BkZg0AFw067zsGnRdYP3sCOFKzBoB7Dzrv+wedFzgMj6lel8cBcMa+0JjNPAYtnL3Rm/L24fAVQc7arC+jOTHovLP+e8NRGjV+983bqse3+UADp23WRwAAa2dPAGdFAABYLyGAMyYAAKybEMAZEQAA1k8I4LQJAACHQQjgtAgAAKfmLaMLOAXeEwAnMeq7u8DZGzV+z2vzCXv0OwC8JwDOggAA6zVy/AoBsHICAKzX6PErBMCKjW4gwJnbh/ErBMBK7UMDAc7MvoxfIQBWaF8aCHD69mn8CgGwMvvUQIDTs2/jVwiAFdm3BgKcun0cv0IArMQ+NhDg1Ozr+BUCYAX2tYEAJ7fP41cIgD23zw0EuHv7Pn6FANhj+95AgK9vDeNXCIA9tYYGAty1tYxfIQD20FoaCHBnaxq/QgDsmTU1EOBrrW38CgGwR9bWQICvWOP4FQJgT6yxgQAbax2/QgDsgbU2EGDd41cIgMHW3EBgdmsfv0IADLT2BgIzO4TxKwTAIIfQQGBWhzJ+hQAY4FAaCMzokMavEAALO6QGArM5tPErBMCCDq2BwEwOcfwKAbCQQ2wgMItDHb9CACzgUBsIzOCQx68QADt2yA0EDt2hj18hAHbo0BsIHLIZxq8QADsyQwOBQzXL+BUCYAdmaSBwiGYav0IAHLGZGggcmtnGrxAAR2i2BgKHZMbxKwTAEZmxgcChmHX8CgFwBGZtIHAIZh6/QgCcpZkbCKzd7ONXCICzMHsDgTUzfoUAOGMaCKyX8bshBMAZ0EBgvYzfrxAC4DRpILBexu/XEgLgNGggsF7G750JAXCKNBBYL+P3rgkBcAo0EFgv4/frEwLgJDQQWC/j9+4JAXA3NBBYL+P35IQA+Do0EFgv4/fUCAFwFzQQWC/j99QJAXAHGgisl/F7eoQA+CoaCKyX8Xv6hADY0kBgvYzfMyMEQBoIrJnxe+aEAKangcB6Gb9nRwhgahoIrJfxe/aEAKalgcB6Gb9HQwhgShoIrNcXGjN+z1/i4hYmBDAdAQDW65ONGb+XLXFxA5xfXd/4Cf5Ujus7zCDGggQAWK8PNmb8PmKBaxvFSsCEzh1dAMBp+rtB533UoPMu4UvVtdWbRxdyCh7TJqwIAZwRKwCwXm9vzPh9+xIXN5jHARw8AQDW63cbM36/3OHuA/hqQsAkPAIA1ua9g857rPr5Qede0herJ7aOxwGPa1OnxwGcMisAsF5PbNwYvrV6wO4vcS/YGMhBEgBgvb6rsZPNG6tzdn6V+8HjAA6OAADrdV6bbwKMnGx+dedXuT+EAA6KAADr9rbGTjTHqyfv/Cr3hxDAwRAAYN1+sfETzfHqhc2zmdqeAA6CAADr9r2Nn2RuP97YPBsDrQSwegIArNux6uONn2RuP26tXlxdvsuL3hNCAKsmAMD6vbzxE8wdj9uqP61+obqqTSA4xAlICDgAs3yV5Y5GTcaz/nvDLjy8+rPRRbAKb6se3+anpNmadUISAOAwvKt62OgiWAUh4A5m2b0KHKbfGV0Aq/GY6nV5HPAPZv1EagUADsO9qg9W3zy4DtbDSsCWFQBgzT5bvWJ0EazKY6r/lvlv2k+kVgDgcFxcfWj7F07V85rrlc53Mn0CAlbvM9VvjC6C1fn31Y+OLmKkWT+RWgGAw3Jh9ZfVg0YXwqp8sPqOJt0PYAUAOAS3Vj87ughW54HVvx1dxCizfiK1AgCH6S3VY0cXwap8rPrHbX7caSpWAIBD8u+qT40uglX5lupfjC5iBAEAOCQfqX48v73B6blmdAEjCADAoXlr9ZLRRbAqV48uYIRZn0nbAwCH7bzqj6rvH10Iq/DxNo8CpjLrhCQAwOG7uPrj6rtHF8Le+0J1wegiljbrhCQAwBzuV93Q5utecHem68/2AACH7KY2737/5OhCYN8IAMChe3ebvQAfHl0I7BMBAJjBu6tHVO8aXQjsCwEAmMXHqh+s3j66ENgHAgAwk7+pfqh6ThO++hW+2nS7Hrd8CwB4dPV71eWjC2EvTNefrQAAs/rD6vva/IAQTEcAAGZ2Y5v3wD+2+uvBtcCiplvy2PIIALijC6tfqn62+keDa2F50/Xn6S54SwAAvp6Lqp+qfrm67+BaWM50/Xm6C94SAICTuXf109VPVg8bXAu7N11/nu6CtwQA4HR8Z/Vj1U9kVeBQTdefp7vgLQEAOFNXtvkK4aOrH64uGVsOR2S6/jzdBW8JAMBRuEf10O3xkO3fb2/z+OCiNuHg3tX5owrklE3Xn6e74C0BAGA/6c8L8R4AAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACd1jdAFM71h1dXVNdVV1ZXVpdd7IouCIfam6pfpAdUN1ffWO6raRRTG3c0YXMMiJQeed9d/7rlxY/Uz1c9V9BtcCI3yiemn1iurWwbXsE/15IdNd8JYbbKxrq5dV9x9dCOyBj7QJwq8fXcie0J8XYg8ASzqnenb1mkz+cLsrqtdVL0xPZkHTJZ4tCXN551avbvPpH7hrr62eUh0fXchA+vNCpE2W8vxM/nAy11XPHV0Ec5gu8WxJmMu6ts0nG+DkTlRPqt4wupBB9OeFTHfBW26w5VxYvafNc07g1Hy0ekj1udGFDKA/L8QjAHbtmZn84XTdv3ra6CI4bNMlni0JcxnHqo/le/5wJm5uEwRme1mQ/rwQKwDs0qMy+cOZurx65OgiOFwCALt0zegCYOWMIXZGAGCXrhpdAKycMcTOCADs0pWjC4CVe/DoAjhcAgC7dPHoAmDlLhldAIdLAACACQkA7NJnRhcAK/fp0QVwuAQAdun9owuAlXvf6AI4XAIAu3TD6AJg5YwhdkYAYJeuH10ArJwxxM5M9+rDLa+aXMax6qbqstGFwArdXN2vOj66kIXpzwuxAsAu3Va9dHQRsFIvbr7JnwVNl3i2JMzlXNDm54AfMLoQWJEb2/wc8K2jCxlAf16IFQB27fPVsxo3qGFtTlTPaM7JnwUJACzh9dULRhcBK/G86k2ji+DwTbfksWWJaXnnVq+qrhtdCOyx11RPbe5n//rzQqwAsJTj1ZOr5+RxANzRiepFmfxZ0HSJZ0vCHOsJ1curK0YXAnvgw9Uzs+x/O/15IdNd8JYbbLwLqqe32SB4+eBaYISbq5dUr2yzWZYN/Xkh013wlhtsf5xbXVVds/374OrS6vyRRcER+2J1S5vfx7ihzRv+3pnl/ruiPy9kugvecoMB7Cf9eSE2AQLAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATOgeowtgeseqq6trqquqK6tLq/NGFgVH7EvVLdUHqhuq66t3VLeNLIq5nTO6gEFODDrvrP/ed+XC6meqn6vuM7gWGOET1UurV1S3Dq5ln+jPC5nugrfcYGNdW72suv/oQmAPfKRNEH796EL2hP68EHsAWNI51bOr12Tyh9tdUb2uemF6MguaLvFsSZjLO7d6dZtP/8Bde231lOr46EIG0p8XIm2ylOdn8oeTua567ugimMN0iWdLwlzWtW0+2QAnd6J6UvWG0YUMoj8vZLoL3nKDLefC6j1tnnMCp+aj1UOqz40uZAD9eSEeAbBrz8zkD6fr/tXTRhfBYZsu8WxJmMs4Vn0s3/OHM3FzmyAw28uC9OeFWAFglx6VyR/O1OXVI0cXweESANila0YXACtnDLEzAgC7dNXoAmDljCF2RgBgl64cXQCs3INHF8DhEgDYpYtHFwArd8noAjhcAgAATEgAYJc+M7oAWLlPjy6AwyUAsEvvH10ArNz7RhfA4RIA2KUbRhcAK2cMsTMCALt0/egCYOWMIXZmulcfbnnV5DKOVTdVl40uBFbo5up+1fHRhSxMf16IFQB26bbqpaOLgJV6cfNN/ixousSzJWEu54I2Pwf8gNGFwIrc2ObngG8dXcgA+vNCrACwa5+vntW4QQ1rc6J6RnNO/ixIAGAJr69eMLoIWInnVW8aXQSHb7oljy1LTMs7t3pVdd3oQmCPvaZ6anM/+9efF2IFgKUcr55cPSePA+COTlQvyuTPgqZLPFsS5lhPqF5eXTG6ENgDH66emWX/2+nPC5nugrfcYONdUD29zQbBywfXAiPcXL2kemWbzbJs6M8Lme6Ct9xg++Pc6qrqmu3fB1eXVuePLAqO2BerW9r8PsYNbd7w984s998V/Xkh013wlhsMYD/pzwuxCRAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEL3GF0A0ztWXV1dU11VXVldWp03sig4Yl+qbqk+UN1QXV+9o7ptZFHM7ZzRBQxyYtB5Z/33visXVj9T/Vx1n8G1wAifqF5avaK6dXAt+0R/Xsh0F7zlBhvr2upl1f1HFwJ74CNtgvDrRxeyJ/TnhdgDwJLOqZ5dvSaTP9zuiup11QvTk1nQdIlnS8Jc3rnVq9t8+gfu2murp1THRxcykP68EGmTpTw/kz+czHXVc0cXwRymSzxbEuayrm3zyQY4uRPVk6o3jC5kEP15IdNd8JYbbDkXVu9p85wTODUfrR5SfW50IQPozwvxCIBde2Ymfzhd96+eNroIDtt0iWdLwlzGsepj+Z4/nImb2wSB2V4WpD8vxAoAu/SoTP5wpi6vHjm6CA6XAMAuXTO6AFg5Y4idEQDYpatGFwArZwyxMwIAu3Tl6AJg5R48ugAOlwDALl08ugBYuUtGF8DhEgAAYEICALv0mdEFwMp9enQBHC4BgF16/+gCYOXeN7oADpcAwC7dMLoAWDljiJ0RANil60cXACtnDLEz0736cMurJpdxrLqpumx0IbBCN1f3q46PLmRh+vNCrACwS7dVLx1dBKzUi5tv8mdB0yWeLQlzORe0+TngB4wuBFbkxjY/B3zr6EIG0J8XYgWAXft89azGDWpYmxPVM5pz8mdBAgBLeH31gtFFwEo8r3rT6CI4fNMteWxZYlreudWrqutGFwJ77DXVU5v72b/+vBArACzlePXk6jl5HAB3dKJ6USZ/FjRd4tmSMMd6QvXy6orRhcAe+HD1zCz7305/Xsh0F7zlBhvvgurpbTYIXj64Fhjh5uol1SvbbJZlQ39eyHQXvOUG2x/nVldV12z/Pri6tDp/ZFFwxL5Y3dLm9zFuaPOGv3dmuf+u6M8Lme6Ct9xgAPtJf16ITYAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABO6x+gCmN6x6urqmuqq6srq0uq8kUWxc1+qbqk+UN1QXV+9o7ptZFHA4Tsx6OArLqx+ufpE4/5/OPbruLn6xTb3BvMadf8xCTfYWNdWNzZ+wnHs5/Hh6okxq1H3HZNwg41xTvXs6njjJxnHfh/Hqxdmn9KMRt1z0zlndAGDjPqfPeu/d20a+avbfPqHU/Xa6iltAgFz0J8XIl2zlOdn8uf0XVc9d3QRcIimSzxbEuayrm3zSQ7OxInqSdUbRhfCIvTnhUx3wVtusOVcWL2numJ0IazaR6uHVJ8bXQg7pz8vxCMAdu2Zmfw5e/evnja6CDgk0yWeLQlzGceqj1X3GV0IB+HmNkHAy4IOm/68ECsA7NKjMvlzdC6vHjm6CDgUAgC7dM3oAjg47ik4IgIAu3TV6AI4OO4pOCICALt05egCODgPHl0AHAoBgF26eHQBHJxLRhcAh0IAAIAJCQDs0mdGF8DB+fToAuBQCADs0vtHF8DBed/oAuBQCADs0g2jC+DguKfgiAgA7NL1owvg4Lin4IhM9+rDLa+aXMax6qbqstGFcBBuru5XHR9dCDulPy/ECgC7dFv10tFFcDBenMkfjsx0iWdLwlzOBW1+DvgBowth1W5s83PAt44uhJ3TnxdiBYBd+3z1rMYNatbvRPWMTP5wpAQAlvD66gWji2C1nle9aXQRcGimW/LYssS0vHOrV1XXjS6EVXlN9dQ8+5+J/rwQKwAs5Xj15Oo5eRzAyZ2oXpTJHzhiJwYdbDyh+nDj/j849vv4UPX4mNWo+45JuMHGu6D6herjjZ9wHPtxfLz6+Tb3BvMadf9NZ7pnHluj/mfP+u99d86trqqu2f59cHVpdf7Ioti5L1a3tPm9iBvavOHvnVnuR39ezHQXvOUGA9hP+vNCbAIEgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEZg0AXxx03vMHnRdgDe456LxfGHTeoWYNAH836LyXDDovwBqM6pGj5oShZg0Afz/ovFcOOi/AGnzboPMKABMZ9T/7UYPOC7AGo3rk3w4671CzBoBPDzrvNYPOC7AGjxt03s8MOu9QswaADww67yOrywadG2Cf3bd6xKBzj5oThpo1ALx30HmPVT8/6NwA++wXGjcnvWfQeRngidWJQcet1QN2f4kAq/HA6vON68uP3/kVsje+q3E32onqjdU5O79KgP13TvXmxvbkf7rzq2RvnNfmmwAjb7hf3flVAuy/X2tsL/7bNnMCE3lbY2+649WTd36VAPvrqW164che/D92fpXsnV9s7E13ewh4YfNuxgTmdE71S9Vtje/Dz9rxtbKHvrfxN97txxuzMRCYw7c2/pn/Vx/fs9vLZR8dqz7e+Jvv9uPW6sXV5bu8aIBB7lu9pLG7/e943JQV2Gm9vPE34B2P26o/bfOd2KvaBAK/IgisyT3b9K6r2zxuvaH9WO6/4/HSXf0DrMHsX0V7ePVno4sAYIh/Xv2f0UWMMnsAqHpX9bDRRQCwqL9s806YaXn2Ub8zugAAFvfbowsYzQpA3av6YPXNg+sAYBmfqh7UuJ+G3wtWAOqz1StHFwHAYn69ySf/sgJwu4urD23/AnC4/rbNuwg+PbqQ0awAbHym+o3RRQCwcy/L5F9ZAfhqF7bZFfqg0YUAsBMfavPLf58bXcg+sALwFbdWPzu6CAB25mmZ/P+BAPC1rq/+++giADhyb67+YHQR+8QjgDu7ovrz6ptGFwLAkfhkmx/9uXF0IfvECsCdfaT68TbviQZg3U5U/zqT/50cG13AnvqrNi8Iunp0IQCclRdVvzW6iH3kEcDXd171R9X3jy4EgDPyx9Wjqy+PLmQfCQB37+I2N9B3jy4EgNPyl9UPVH8zupB9JQCc3P3a/Jb1AwfXAcCpubHNI9wPjy5kn9kEeHI3VY9ps4sUgP32yeqHM/mflABwat7dZi+AGwpgf91U/VCbns1JCACn7t3VI6p3jS4EgDv5f2169F+MLmQtBIDT87HqB6u3jy4EgH/wx9Wj2rzHhVPkPQCn79bqv7Z5ucQPZCMlwCgnqldUP1Z9dnAtq2PyOjuPrn6vunx0IQCT+WT1E9VbRxeyVh4BnJ0/rL6vesvoQgAmcn2bd/ub/M+CAHD2bqyuqR5b/fXgWgAO2QeqH6l+NO/2P2v2AByd91b/qc0rJx9e3XNsOQAH4zPVC6unttntzxGwB2A3Lqp+qvrl6r6DawFYq09Vr6z+Y3XL4FoOjgCwW/eufrr6yephg2sBWIu/qP5z9dvV3w+u5WAJAMv5zjZfVfmJrAoA3NGnqje0+Zr1nw6uZQoCwBhXtvkK4aPbvLP6krHlACzus9U723yb6g+rP6+OD61oMgLAePeoHro9HrL9++1tHh9c1CYc3Ls6f1SBAKfpi22W7j9d/d32+Ks2m6XfW71ne3x5VIHU/wefrK9LjekI6QAAAABJRU5ErkJggg==", downloadImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO2WTQrCQAyFP1T8uZOewsO4c2u9hRs3rgTB1gNVL1EYCYwiQ0szmVFc9MGDWbzJRwKBQL+mwB64Ay5wDRQ+k6yiBeACSyZZbZ24wI8cIKd0sgaQWcPo/mt0a6CJKO463PhanRoBpwygMzDu60oCxwTIFZhpR2iFlcBcC7HCSgskFlalQLSwKgekD3aLgWgXTmCHj/wFWMTUj9ls2bMNsAUmyj8mkEXu56DaP5ZfgKx8bWGozqlU7wQkx5/AXp3l9PvAfAKV7hPWLfRRtQAAAABJRU5ErkJggg==", INITIAL_STATE = !1;
function loadLottie(t) {
  return lottie.loadAnimation({
    container: t,
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    animationData
  });
}
const main = {
  selectorId: "",
  title: "",
  botName: "",
  greeting: "",
  init: function(t = {}) {
    return this.selectorId = t.selectorId, this.title = t.title, this.botName = t.botName, this.greeting = t.greeting, this.setCssVars(t.themeColor), this.render(t.submitHandler), t.preChatRenderer && this.renderPreChat(t.preChatRenderer), this.toggle(t.expand || INITIAL_STATE), { toggle: this.toggle, isOpen: this.isOpen };
  },
  isOpen: function() {
    return document.querySelector("#tarka-chat .t-container").style.display === "flex";
  },
  toggle: function(t = void 0) {
    const e = document.querySelector("#tarka-chat .t-container"), r = document.querySelector("#tarka-chat .closed"), i = document.querySelector("#tarka-chat .opened");
    t === !0 || t === void 0 && !this.isOpen() ? (e.style.display = "flex", i.style.display = "block", r.style.display = "none") : (e.style.display = "none", i.style.display = "none", r.style.display = "block");
  },
  render: function(t) {
    const e = document.getElementById(this.selectorId), r = (s) => {
      this.isProcessing = s;
      const a = document.querySelector("#tarka-chat .input-container");
      a.style.display = s ? "none" : "flex";
      const n = document.querySelector("#tarka-chat .chat-loader");
      n.style.display = s ? "block" : "none";
    }, i = async () => {
      const s = document.querySelector("#tarka-chat .chat-input"), a = s.value;
      if (!this.isProcessing && a.length > 0) {
        r(!0), s.value = "", this.insertMessage(a, !1);
        const n = await t(a);
        this.insertMessage(n, !0), r(!1), s.focus();
      }
    };
    if (e) {
      e.innerHTML = layout, this.setupLaucher(), loadLottie(document.querySelector("#tarka-chat .logo")), document.querySelector("#tarka-chat .title").textContent = this.title, this.insertMessage(this.greeting, !0);
      const s = document.querySelector("#tarka-chat .send-btn"), a = document.querySelector("#tarka-chat .chat-input");
      s.addEventListener("click", i), a.addEventListener("keyup", async function(n) {
        n.keyCode === 13 && await i();
      });
    } else
      console.error(`Element with ID "${this.selectorId}" not found.`);
  },
  setupLaucher: function() {
    document.querySelector("#tarka-chat .launcher").addEventListener("click", () => this.toggle());
    const e = document.querySelector("#tarka-chat .closed");
    loadLottie(e);
  },
  createNode(t, e) {
    const r = document.createElement("div");
    return r.className = t, r.innerHTML = e, r;
  },
  createNodeByType(t) {
    switch (t.type) {
      case "text":
        return this.createNode("message-content", t.message);
      case "file":
        const e = `
          <div class="attachment-info">
            <img src="${attachment}" alt="File Icon" width="38" height="38">
            <div class="attachment-file-name">
              ${t.name || "File"}
            </div>
            <a href="${t.link}" class="attachment-download-btn">
              <img src="${downloadImg}" alt="Download Button" width="24" height="24">
            </a>
          </div>`;
        return this.createNode("attachment", e);
      case "image":
        const r = `
        <img src="${t.link}" alt="Your Image">
        <a href="${t.link}" class="overlay">
              <img src="${downloadImg}" alt="Download Button" width="24" height="24">
        </a>
        `;
        return this.createNode("image-container", r);
      default:
        throw new Error(`Invalid type: ${type}`);
    }
  },
  insertMessage(t = "", e = !1) {
    const r = document.querySelector(
      "#tarka-chat .message-container"
    ), i = document.createElement("div");
    i.className = "wrapper", typeof t == "string" && i.appendChild(
      this.createNodeByType({ type: "text", message: t })
    ), Array.isArray(t) && t.forEach((a) => {
      i.appendChild(this.createNodeByType(a));
    }), typeof t == "object" && !Array.isArray(t) && i.appendChild(this.createNodeByType(t)), i.appendChild(
      this.createNode("message-meta", e ? this.botName : "You")
    );
    const s = document.createElement("div");
    s.className = `message ${e ? "incoming" : "outgoing"}`, s.appendChild(i), r.appendChild(s), r.lastElementChild.scrollIntoView();
  },
  setCssVars: function(t = "#F0DAFB") {
    const e = new TinyColor(t).toHsl(), r = {
      primary: e.h,
      primaryOffset: e.h - 10,
      primaryOffsetHover: e.h + 10
    }, i = document.querySelector(":root");
    i.style.setProperty(
      "--primary-background",
      `hsla(${r.primaryOffset}, 80%, 99%, 1)`
    ), i.style.setProperty(
      "--primary-primary",
      `hsla(${r.primary}, 100%, 35%, 1)`
    ), i.style.setProperty(
      "--primary-primary-subtle",
      `hsla(${r.primaryOffset}, 80%, 92%, 1)`
    ), i.style.setProperty(
      "--primary-primary-subtle-hover",
      `hsla(${r.primaryOffsetHover}, 80%, 89%, 1)`
    ), i.style.setProperty(
      "--primary-primary-alt",
      `hsla(${r.primary}, 38%, 21%, 1)`
    ), i.style.setProperty(
      "--primary-primary-alt-subtle",
      `hsla(${r.primaryOffset}, 23%, 91%, 1)`
    ), i.style.setProperty(
      "--gradient-background",
      `linear-gradient(0deg, hsla(${r.primary}, 100%, 35%, 0.05) 0%, hsla(${r.primary}, 0%, 0%, 0) 100%)`
    ), i.style.setProperty(
      "--gradient-gradient-fade",
      `linear-gradient(-0deg, hsla(${r.primaryOffset}, 80%, 99%, 0) 0%, hsla(${r.primaryOffset}, 80%, 99%, 1) 50%)`
    );
  },
  renderPreChat: function(t) {
    const e = document.querySelector("#tarka-chat > .t-container > .body"), r = document.querySelector("#tarka-chat > .t-container > .scroll-fade"), i = document.querySelector("#tarka-chat > .t-container > .body > .message-container"), s = document.querySelector("#tarka-chat > .t-container > .footer");
    r.style.display = "none", i.style.display = "none", s.style.display = "none";
    const n = t(() => {
      var l;
      (l = e.querySelector(".tc-injected-prechat")) == null || l.remove(), r.style.display = "block", i.style.display = "flex", s.style.display = "flex";
    });
    n.className += " tc-injected-prechat", e.appendChild(n);
  }
};
export {
  main as default
};
