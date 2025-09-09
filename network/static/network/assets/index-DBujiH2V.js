(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const h of s)
      if (h.type === "childList")
        for (const p of h.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && r(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(s) {
    const h = {};
    return (
      s.integrity && (h.integrity = s.integrity),
      s.referrerPolicy && (h.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const h = f(s);
    fetch(s.href, h);
  }
})();
function Op(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var hf = { exports: {} },
  lu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qh;
function zp() {
  if (qh) return lu;
  qh = 1;
  var u = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function f(r, s, h) {
    var p = null;
    if (
      (h !== void 0 && (p = "" + h),
      s.key !== void 0 && (p = "" + s.key),
      "key" in s)
    ) {
      h = {};
      for (var x in s) x !== "key" && (h[x] = s[x]);
    } else h = s;
    return (
      (s = h.ref),
      { $$typeof: u, type: r, key: p, ref: s !== void 0 ? s : null, props: h }
    );
  }
  return (lu.Fragment = c), (lu.jsx = f), (lu.jsxs = f), lu;
}
var Yh;
function Np() {
  return Yh || ((Yh = 1), (hf.exports = zp())), hf.exports;
}
var A = Np(),
  mf = { exports: {} },
  au = {},
  yf = { exports: {} },
  pf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gh;
function Dp() {
  return (
    Gh ||
      ((Gh = 1),
      (function (u) {
        function c(D, Z) {
          var I = D.length;
          D.push(Z);
          t: for (; 0 < I; ) {
            var rt = (I - 1) >>> 1,
              b = D[rt];
            if (0 < s(b, Z)) (D[rt] = Z), (D[I] = b), (I = rt);
            else break t;
          }
        }
        function f(D) {
          return D.length === 0 ? null : D[0];
        }
        function r(D) {
          if (D.length === 0) return null;
          var Z = D[0],
            I = D.pop();
          if (I !== Z) {
            D[0] = I;
            t: for (var rt = 0, b = D.length, H = b >>> 1; rt < H; ) {
              var Q = 2 * (rt + 1) - 1,
                V = D[Q],
                F = Q + 1,
                ft = D[F];
              if (0 > s(V, I))
                F < b && 0 > s(ft, V)
                  ? ((D[rt] = ft), (D[F] = I), (rt = F))
                  : ((D[rt] = V), (D[Q] = I), (rt = Q));
              else if (F < b && 0 > s(ft, I))
                (D[rt] = ft), (D[F] = I), (rt = F);
              else break t;
            }
          }
          return Z;
        }
        function s(D, Z) {
          var I = D.sortIndex - Z.sortIndex;
          return I !== 0 ? I : D.id - Z.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          u.unstable_now = function () {
            return h.now();
          };
        } else {
          var p = Date,
            x = p.now();
          u.unstable_now = function () {
            return p.now() - x;
          };
        }
        var v = [],
          m = [],
          g = 1,
          N = null,
          z = 3,
          j = !1,
          q = !1,
          X = !1,
          L = !1,
          B = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        function k(D) {
          for (var Z = f(m); Z !== null; ) {
            if (Z.callback === null) r(m);
            else if (Z.startTime <= D)
              r(m), (Z.sortIndex = Z.expirationTime), c(v, Z);
            else break;
            Z = f(m);
          }
        }
        function K(D) {
          if (((X = !1), k(D), !q))
            if (f(v) !== null) (q = !0), P || ((P = !0), qt());
            else {
              var Z = f(m);
              Z !== null && Yt(K, Z.startTime - D);
            }
        }
        var P = !1,
          $ = -1,
          bt = 5,
          Tt = -1;
        function te() {
          return L ? !0 : !(u.unstable_now() - Tt < bt);
        }
        function le() {
          if (((L = !1), P)) {
            var D = u.unstable_now();
            Tt = D;
            var Z = !0;
            try {
              t: {
                (q = !1), X && ((X = !1), Y($), ($ = -1)), (j = !0);
                var I = z;
                try {
                  e: {
                    for (
                      k(D), N = f(v);
                      N !== null && !(N.expirationTime > D && te());

                    ) {
                      var rt = N.callback;
                      if (typeof rt == "function") {
                        (N.callback = null), (z = N.priorityLevel);
                        var b = rt(N.expirationTime <= D);
                        if (((D = u.unstable_now()), typeof b == "function")) {
                          (N.callback = b), k(D), (Z = !0);
                          break e;
                        }
                        N === f(v) && r(v), k(D);
                      } else r(v);
                      N = f(v);
                    }
                    if (N !== null) Z = !0;
                    else {
                      var H = f(m);
                      H !== null && Yt(K, H.startTime - D), (Z = !1);
                    }
                  }
                  break t;
                } finally {
                  (N = null), (z = I), (j = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? qt() : (P = !1);
            }
          }
        }
        var qt;
        if (typeof G == "function")
          qt = function () {
            G(le);
          };
        else if (typeof MessageChannel < "u") {
          var Ke = new MessageChannel(),
            ke = Ke.port2;
          (Ke.port1.onmessage = le),
            (qt = function () {
              ke.postMessage(null);
            });
        } else
          qt = function () {
            B(le, 0);
          };
        function Yt(D, Z) {
          $ = B(function () {
            D(u.unstable_now());
          }, Z);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (u.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (bt = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (u.unstable_next = function (D) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = z;
            }
            var I = z;
            z = Z;
            try {
              return D();
            } finally {
              z = I;
            }
          }),
          (u.unstable_requestPaint = function () {
            L = !0;
          }),
          (u.unstable_runWithPriority = function (D, Z) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var I = z;
            z = D;
            try {
              return Z();
            } finally {
              z = I;
            }
          }),
          (u.unstable_scheduleCallback = function (D, Z, I) {
            var rt = u.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? rt + I : rt))
                : (I = rt),
              D)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = I + b),
              (D = {
                id: g++,
                callback: Z,
                priorityLevel: D,
                startTime: I,
                expirationTime: b,
                sortIndex: -1,
              }),
              I > rt
                ? ((D.sortIndex = I),
                  c(m, D),
                  f(v) === null &&
                    D === f(m) &&
                    (X ? (Y($), ($ = -1)) : (X = !0), Yt(K, I - rt)))
                : ((D.sortIndex = b),
                  c(v, D),
                  q || j || ((q = !0), P || ((P = !0), qt()))),
              D
            );
          }),
          (u.unstable_shouldYield = te),
          (u.unstable_wrapCallback = function (D) {
            var Z = z;
            return function () {
              var I = z;
              z = Z;
              try {
                return D.apply(this, arguments);
              } finally {
                z = I;
              }
            };
          });
      })(pf)),
    pf
  );
}
var Xh;
function Cp() {
  return Xh || ((Xh = 1), (yf.exports = Dp())), yf.exports;
}
var vf = { exports: {} },
  nt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh;
function Mp() {
  if (Qh) return nt;
  Qh = 1;
  var u = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function z(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (N && b[N]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    q = Object.assign,
    X = {};
  function L(b, H, Q) {
    (this.props = b),
      (this.context = H),
      (this.refs = X),
      (this.updater = Q || j);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (b, H) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, b, H, "setState");
    }),
    (L.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function B() {}
  B.prototype = L.prototype;
  function Y(b, H, Q) {
    (this.props = b),
      (this.context = H),
      (this.refs = X),
      (this.updater = Q || j);
  }
  var G = (Y.prototype = new B());
  (G.constructor = Y), q(G, L.prototype), (G.isPureReactComponent = !0);
  var k = Array.isArray,
    K = { H: null, A: null, T: null, S: null, V: null },
    P = Object.prototype.hasOwnProperty;
  function $(b, H, Q, V, F, ft) {
    return (
      (Q = ft.ref),
      { $$typeof: u, type: b, key: H, ref: Q !== void 0 ? Q : null, props: ft }
    );
  }
  function bt(b, H) {
    return $(b.type, H, void 0, void 0, void 0, b.props);
  }
  function Tt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === u;
  }
  function te(b) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (Q) {
        return H[Q];
      })
    );
  }
  var le = /\/+/g;
  function qt(b, H) {
    return typeof b == "object" && b !== null && b.key != null
      ? te("" + b.key)
      : H.toString(36);
  }
  function Ke() {}
  function ke(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(Ke, Ke)
            : ((b.status = "pending"),
              b.then(
                function (H) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = H));
                },
                function (H) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = H));
                }
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function Yt(b, H, Q, V, F) {
    var ft = typeof b;
    (ft === "undefined" || ft === "boolean") && (b = null);
    var et = !1;
    if (b === null) et = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          et = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case u:
            case c:
              et = !0;
              break;
            case g:
              return (et = b._init), Yt(et(b._payload), H, Q, V, F);
          }
      }
    if (et)
      return (
        (F = F(b)),
        (et = V === "" ? "." + qt(b, 0) : V),
        k(F)
          ? ((Q = ""),
            et != null && (Q = et.replace(le, "$&/") + "/"),
            Yt(F, H, Q, "", function (Wt) {
              return Wt;
            }))
          : F != null &&
            (Tt(F) &&
              (F = bt(
                F,
                Q +
                  (F.key == null || (b && b.key === F.key)
                    ? ""
                    : ("" + F.key).replace(le, "$&/") + "/") +
                  et
              )),
            H.push(F)),
        1
      );
    et = 0;
    var Gt = V === "" ? "." : V + ":";
    if (k(b))
      for (var yt = 0; yt < b.length; yt++)
        (V = b[yt]), (ft = Gt + qt(V, yt)), (et += Yt(V, H, Q, ft, F));
    else if (((yt = z(b)), typeof yt == "function"))
      for (b = yt.call(b), yt = 0; !(V = b.next()).done; )
        (V = V.value), (ft = Gt + qt(V, yt++)), (et += Yt(V, H, Q, ft, F));
    else if (ft === "object") {
      if (typeof b.then == "function") return Yt(ke(b), H, Q, V, F);
      throw (
        ((H = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return et;
  }
  function D(b, H, Q) {
    if (b == null) return b;
    var V = [],
      F = 0;
    return (
      Yt(b, V, "", "", function (ft) {
        return H.call(Q, ft, F++);
      }),
      V
    );
  }
  function Z(b) {
    if (b._status === -1) {
      var H = b._result;
      (H = H()),
        H.then(
          function (Q) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = Q));
          },
          function (Q) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = Q));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = H));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var I =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function rt() {}
  return (
    (nt.Children = {
      map: D,
      forEach: function (b, H, Q) {
        D(
          b,
          function () {
            H.apply(this, arguments);
          },
          Q
        );
      },
      count: function (b) {
        var H = 0;
        return (
          D(b, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (b) {
        return (
          D(b, function (H) {
            return H;
          }) || []
        );
      },
      only: function (b) {
        if (!Tt(b))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return b;
      },
    }),
    (nt.Component = L),
    (nt.Fragment = f),
    (nt.Profiler = s),
    (nt.PureComponent = Y),
    (nt.StrictMode = r),
    (nt.Suspense = v),
    (nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (nt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return K.H.useMemoCache(b);
      },
    }),
    (nt.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (nt.cloneElement = function (b, H, Q) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + "."
        );
      var V = q({}, b.props),
        F = b.key,
        ft = void 0;
      if (H != null)
        for (et in (H.ref !== void 0 && (ft = void 0),
        H.key !== void 0 && (F = "" + H.key),
        H))
          !P.call(H, et) ||
            et === "key" ||
            et === "__self" ||
            et === "__source" ||
            (et === "ref" && H.ref === void 0) ||
            (V[et] = H[et]);
      var et = arguments.length - 2;
      if (et === 1) V.children = Q;
      else if (1 < et) {
        for (var Gt = Array(et), yt = 0; yt < et; yt++)
          Gt[yt] = arguments[yt + 2];
        V.children = Gt;
      }
      return $(b.type, F, void 0, void 0, ft, V);
    }),
    (nt.createContext = function (b) {
      return (
        (b = {
          $$typeof: p,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: h, _context: b }),
        b
      );
    }),
    (nt.createElement = function (b, H, Q) {
      var V,
        F = {},
        ft = null;
      if (H != null)
        for (V in (H.key !== void 0 && (ft = "" + H.key), H))
          P.call(H, V) &&
            V !== "key" &&
            V !== "__self" &&
            V !== "__source" &&
            (F[V] = H[V]);
      var et = arguments.length - 2;
      if (et === 1) F.children = Q;
      else if (1 < et) {
        for (var Gt = Array(et), yt = 0; yt < et; yt++)
          Gt[yt] = arguments[yt + 2];
        F.children = Gt;
      }
      if (b && b.defaultProps)
        for (V in ((et = b.defaultProps), et))
          F[V] === void 0 && (F[V] = et[V]);
      return $(b, ft, void 0, void 0, null, F);
    }),
    (nt.createRef = function () {
      return { current: null };
    }),
    (nt.forwardRef = function (b) {
      return { $$typeof: x, render: b };
    }),
    (nt.isValidElement = Tt),
    (nt.lazy = function (b) {
      return { $$typeof: g, _payload: { _status: -1, _result: b }, _init: Z };
    }),
    (nt.memo = function (b, H) {
      return { $$typeof: m, type: b, compare: H === void 0 ? null : H };
    }),
    (nt.startTransition = function (b) {
      var H = K.T,
        Q = {};
      K.T = Q;
      try {
        var V = b(),
          F = K.S;
        F !== null && F(Q, V),
          typeof V == "object" &&
            V !== null &&
            typeof V.then == "function" &&
            V.then(rt, I);
      } catch (ft) {
        I(ft);
      } finally {
        K.T = H;
      }
    }),
    (nt.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (nt.use = function (b) {
      return K.H.use(b);
    }),
    (nt.useActionState = function (b, H, Q) {
      return K.H.useActionState(b, H, Q);
    }),
    (nt.useCallback = function (b, H) {
      return K.H.useCallback(b, H);
    }),
    (nt.useContext = function (b) {
      return K.H.useContext(b);
    }),
    (nt.useDebugValue = function () {}),
    (nt.useDeferredValue = function (b, H) {
      return K.H.useDeferredValue(b, H);
    }),
    (nt.useEffect = function (b, H, Q) {
      var V = K.H;
      if (typeof Q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return V.useEffect(b, H);
    }),
    (nt.useId = function () {
      return K.H.useId();
    }),
    (nt.useImperativeHandle = function (b, H, Q) {
      return K.H.useImperativeHandle(b, H, Q);
    }),
    (nt.useInsertionEffect = function (b, H) {
      return K.H.useInsertionEffect(b, H);
    }),
    (nt.useLayoutEffect = function (b, H) {
      return K.H.useLayoutEffect(b, H);
    }),
    (nt.useMemo = function (b, H) {
      return K.H.useMemo(b, H);
    }),
    (nt.useOptimistic = function (b, H) {
      return K.H.useOptimistic(b, H);
    }),
    (nt.useReducer = function (b, H, Q) {
      return K.H.useReducer(b, H, Q);
    }),
    (nt.useRef = function (b) {
      return K.H.useRef(b);
    }),
    (nt.useState = function (b) {
      return K.H.useState(b);
    }),
    (nt.useSyncExternalStore = function (b, H, Q) {
      return K.H.useSyncExternalStore(b, H, Q);
    }),
    (nt.useTransition = function () {
      return K.H.useTransition();
    }),
    (nt.version = "19.1.1"),
    nt
  );
}
var Zh;
function Uf() {
  return Zh || ((Zh = 1), (vf.exports = Mp())), vf.exports;
}
var gf = { exports: {} },
  It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh;
function jp() {
  if (Vh) return It;
  Vh = 1;
  var u = Uf();
  function c(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var r = {
      d: {
        f,
        r: function () {
          throw Error(c(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function h(v, m, g) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: N == null ? null : "" + N,
      children: v,
      containerInfo: m,
      implementation: g,
    };
  }
  var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(v, m) {
    if (v === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (It.createPortal = function (v, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(c(299));
      return h(v, m, null, g);
    }),
    (It.flushSync = function (v) {
      var m = p.T,
        g = r.p;
      try {
        if (((p.T = null), (r.p = 2), v)) return v();
      } finally {
        (p.T = m), (r.p = g), r.d.f();
      }
    }),
    (It.preconnect = function (v, m) {
      typeof v == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(v, m));
    }),
    (It.prefetchDNS = function (v) {
      typeof v == "string" && r.d.D(v);
    }),
    (It.preinit = function (v, m) {
      if (typeof v == "string" && m && typeof m.as == "string") {
        var g = m.as,
          N = x(g, m.crossOrigin),
          z = typeof m.integrity == "string" ? m.integrity : void 0,
          j = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? r.d.S(v, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: N,
              integrity: z,
              fetchPriority: j,
            })
          : g === "script" &&
            r.d.X(v, {
              crossOrigin: N,
              integrity: z,
              fetchPriority: j,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (It.preinitModule = function (v, m) {
      if (typeof v == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = x(m.as, m.crossOrigin);
            r.d.M(v, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(v);
    }),
    (It.preload = function (v, m) {
      if (
        typeof v == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          N = x(g, m.crossOrigin);
        r.d.L(v, g, {
          crossOrigin: N,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (It.preloadModule = function (v, m) {
      if (typeof v == "string")
        if (m) {
          var g = x(m.as, m.crossOrigin);
          r.d.m(v, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(v);
    }),
    (It.requestFormReset = function (v) {
      r.d.r(v);
    }),
    (It.unstable_batchedUpdates = function (v, m) {
      return v(m);
    }),
    (It.useFormState = function (v, m, g) {
      return p.H.useFormState(v, m, g);
    }),
    (It.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (It.version = "19.1.1"),
    It
  );
}
var Kh;
function Up() {
  if (Kh) return gf.exports;
  Kh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), (gf.exports = jp()), gf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh;
function Hp() {
  if (kh) return au;
  kh = 1;
  var u = Cp(),
    c = Uf(),
    f = Up();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (h(t) !== t) throw Error(r(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return x(n), t;
          if (i === a) return x(n), e;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) (l = n), (a = i);
      else {
        for (var o = !1, d = n.child; d; ) {
          if (d === l) {
            (o = !0), (l = n), (a = i);
            break;
          }
          if (d === a) {
            (o = !0), (a = n), (l = i);
            break;
          }
          d = d.sibling;
        }
        if (!o) {
          for (d = i.child; d; ) {
            if (d === l) {
              (o = !0), (l = i), (a = n);
              break;
            }
            if (d === a) {
              (o = !0), (a = i), (l = n);
              break;
            }
            d = d.sibling;
          }
          if (!o) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    N = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    j = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    Y = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    k = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    bt = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    te = Symbol.for("react.memo_cache_sentinel"),
    le = Symbol.iterator;
  function qt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (le && t[le]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ke = Symbol.for("react.client.reference");
  function ke(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ke ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case q:
        return "Fragment";
      case L:
        return "Profiler";
      case X:
        return "StrictMode";
      case K:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case j:
          return "Portal";
        case G:
          return (t.displayName || "Context") + ".Provider";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case k:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case $:
          return (
            (e = t.displayName || null), e !== null ? e : ke(t.type) || "Memo"
          );
        case bt:
          (e = t._payload), (t = t._init);
          try {
            return ke(t(e));
          } catch {}
      }
    return null;
  }
  var Yt = Array.isArray,
    D = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    rt = [],
    b = -1;
  function H(t) {
    return { current: t };
  }
  function Q(t) {
    0 > b || ((t.current = rt[b]), (rt[b] = null), b--);
  }
  function V(t, e) {
    b++, (rt[b] = t.current), (t.current = e);
  }
  var F = H(null),
    ft = H(null),
    et = H(null),
    Gt = H(null);
  function yt(t, e) {
    switch ((V(et, e), V(ft, t), V(F, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? hh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = hh(e)), (t = mh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Q(F), V(F, t);
  }
  function Wt() {
    Q(F), Q(ft), Q(et);
  }
  function ql(t) {
    t.memoizedState !== null && V(Gt, t);
    var e = F.current,
      l = mh(e, t.type);
    e !== l && (V(ft, t), V(F, l));
  }
  function Je(t) {
    ft.current === t && (Q(F), Q(ft)),
      Gt.current === t && (Q(Gt), (Fn._currentValue = I));
  }
  var Se = Object.prototype.hasOwnProperty,
    Ii = u.unstable_scheduleCallback,
    tc = u.unstable_cancelCallback,
    i0 = u.unstable_shouldYield,
    c0 = u.unstable_requestPaint,
    Ue = u.unstable_now,
    r0 = u.unstable_getCurrentPriorityLevel,
    Kf = u.unstable_ImmediatePriority,
    kf = u.unstable_UserBlockingPriority,
    yu = u.unstable_NormalPriority,
    f0 = u.unstable_LowPriority,
    Jf = u.unstable_IdlePriority,
    o0 = u.log,
    s0 = u.unstable_setDisableYieldValue,
    nn = null,
    oe = null;
  function hl(t) {
    if (
      (typeof o0 == "function" && s0(t),
      oe && typeof oe.setStrictMode == "function")
    )
      try {
        oe.setStrictMode(nn, t);
      } catch {}
  }
  var se = Math.clz32 ? Math.clz32 : m0,
    d0 = Math.log,
    h0 = Math.LN2;
  function m0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((d0(t) / h0) | 0)) | 0;
  }
  var pu = 256,
    vu = 4194304;
  function Yl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function gu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = t.suspendedLanes,
      o = t.pingedLanes;
    t = t.warmLanes;
    var d = a & 134217727;
    return (
      d !== 0
        ? ((a = d & ~i),
          a !== 0
            ? (n = Yl(a))
            : ((o &= d),
              o !== 0
                ? (n = Yl(o))
                : l || ((l = d & ~t), l !== 0 && (n = Yl(l)))))
        : ((d = a & ~i),
          d !== 0
            ? (n = Yl(d))
            : o !== 0
            ? (n = Yl(o))
            : l || ((l = a & ~t), l !== 0 && (n = Yl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & i) === 0 &&
          ((i = n & -n),
          (l = e & -e),
          i >= l || (i === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function un(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function y0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $f() {
    var t = pu;
    return (pu <<= 1), (pu & 4194048) === 0 && (pu = 256), t;
  }
  function Wf() {
    var t = vu;
    return (vu <<= 1), (vu & 62914560) === 0 && (vu = 4194304), t;
  }
  function ec(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function cn(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function p0(t, e, l, a, n, i) {
    var o = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var d = t.entanglements,
      y = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var C = 31 - se(l),
        U = 1 << C;
      (d[C] = 0), (y[C] = -1);
      var w = _[C];
      if (w !== null)
        for (_[C] = null, C = 0; C < w.length; C++) {
          var O = w[C];
          O !== null && (O.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Ff(t, a, 0),
      i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(o & ~e));
  }
  function Ff(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - se(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function Pf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - se(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function lc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ac(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function If() {
    var t = Z.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Mh(t.type));
  }
  function v0(t, e) {
    var l = Z.p;
    try {
      return (Z.p = t), e();
    } finally {
      Z.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2),
    Ft = "__reactFiber$" + ml,
    ae = "__reactProps$" + ml,
    fa = "__reactContainer$" + ml,
    nc = "__reactEvents$" + ml,
    g0 = "__reactListeners$" + ml,
    b0 = "__reactHandles$" + ml,
    to = "__reactResources$" + ml,
    rn = "__reactMarker$" + ml;
  function uc(t) {
    delete t[Ft], delete t[ae], delete t[nc], delete t[g0], delete t[b0];
  }
  function oa(t) {
    var e = t[Ft];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[fa] || l[Ft])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = gh(t); t !== null; ) {
            if ((l = t[Ft])) return l;
            t = gh(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function sa(t) {
    if ((t = t[Ft] || t[fa])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function fn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function da(t) {
    var e = t[to];
    return (
      e ||
        (e = t[to] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Xt(t) {
    t[rn] = !0;
  }
  var eo = new Set(),
    lo = {};
  function Gl(t, e) {
    ha(t, e), ha(t + "Capture", e);
  }
  function ha(t, e) {
    for (lo[t] = e, t = 0; t < e.length; t++) eo.add(e[t]);
  }
  var S0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ao = {},
    no = {};
  function x0(t) {
    return Se.call(no, t)
      ? !0
      : Se.call(ao, t)
      ? !1
      : S0.test(t)
      ? (no[t] = !0)
      : ((ao[t] = !0), !1);
  }
  function bu(t, e, l) {
    if (x0(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Su(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function $e(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var ic, uo;
  function ma(t) {
    if (ic === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (ic = (e && e[1]) || ""),
          (uo =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ic +
      t +
      uo
    );
  }
  var cc = !1;
  function rc(t, e) {
    if (!t || cc) return "";
    cc = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (O) {
                  var w = O;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (O) {
                  w = O;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                w = O;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (O) {
            if (O && w && typeof O.stack == "string") return [O.stack, w.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        o = i[0],
        d = i[1];
      if (o && d) {
        var y = o.split(`
`),
          _ = d.split(`
`);
        for (
          n = a = 0;
          a < y.length && !y[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < _.length && !_[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === y.length || n === _.length)
          for (
            a = y.length - 1, n = _.length - 1;
            1 <= a && 0 <= n && y[a] !== _[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (y[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || y[a] !== _[n])) {
                  var C =
                    `
` + y[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", t.displayName)),
                    C
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (cc = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? ma(l) : "";
  }
  function E0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ma(t.type);
      case 16:
        return ma("Lazy");
      case 13:
        return ma("Suspense");
      case 19:
        return ma("SuspenseList");
      case 0:
      case 15:
        return rc(t.type, !1);
      case 11:
        return rc(t.type.render, !1);
      case 1:
        return rc(t.type, !0);
      case 31:
        return ma("Activity");
      default:
        return "";
    }
  }
  function io(t) {
    try {
      var e = "";
      do (e += E0(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function co(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function T0(t) {
    var e = co(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (o) {
            (a = "" + o), i.call(this, o);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (o) {
            a = "" + o;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function xu(t) {
    t._valueTracker || (t._valueTracker = T0(t));
  }
  function ro(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = co(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Eu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var A0 = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(A0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function fc(t, e, l, a, n, i, o, d) {
    (t.name = ""),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (t.type = o)
        : t.removeAttribute("type"),
      e != null
        ? o === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + xe(e))
          : t.value !== "" + xe(e) && (t.value = "" + xe(e))
        : (o !== "submit" && o !== "reset") || t.removeAttribute("value"),
      e != null
        ? oc(t, o, xe(e))
        : l != null
        ? oc(t, o, xe(l))
        : a != null && t.removeAttribute("value"),
      n == null && i != null && (t.defaultChecked = !!i),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.name = "" + xe(d))
        : t.removeAttribute("name");
  }
  function fo(t, e, l, a, n, i, o, d) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) return;
      (l = l != null ? "" + xe(l) : ""),
        (e = e != null ? "" + xe(e) : l),
        d || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = d ? t.checked : !!a),
      (t.defaultChecked = !!a),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.name = o);
  }
  function oc(t, e, l) {
    (e === "number" && Eu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function ya(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + xe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function oo(t, e, l) {
    if (
      e != null &&
      ((e = "" + xe(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + xe(l) : "";
  }
  function so(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Yt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = xe(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function pa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var R0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ho(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || R0.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function mo(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && ho(t, n, a);
    } else for (var i in e) e.hasOwnProperty(i) && ho(t, i, e[i]);
  }
  function sc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    w0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tu(t) {
    return w0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var dc = null;
  function hc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var va = null,
    ga = null;
  function yo(t) {
    var e = sa(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (fc(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Ee("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ae] || null;
                if (!n) throw Error(r(90));
                fc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && ro(a);
          }
          break t;
        case "textarea":
          oo(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && ya(t, !!l.multiple, e, !1);
      }
    }
  }
  var mc = !1;
  function po(t, e, l) {
    if (mc) return t(e, l);
    mc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((mc = !1),
        (va !== null || ga !== null) &&
          (ri(), va && ((e = va), (t = ga), (ga = va = null), yo(e), t)))
      )
        for (e = 0; e < t.length; e++) yo(t[e]);
    }
  }
  function on(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ae] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var We = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    yc = !1;
  if (We)
    try {
      var sn = {};
      Object.defineProperty(sn, "passive", {
        get: function () {
          yc = !0;
        },
      }),
        window.addEventListener("test", sn, sn),
        window.removeEventListener("test", sn, sn);
    } catch {
      yc = !1;
    }
  var yl = null,
    pc = null,
    Au = null;
  function vo() {
    if (Au) return Au;
    var t,
      e = pc,
      l = e.length,
      a,
      n = "value" in yl ? yl.value : yl.textContent,
      i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var o = l - t;
    for (a = 1; a <= o && e[l - a] === n[i - a]; a++);
    return (Au = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ru(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function _u() {
    return !0;
  }
  function go() {
    return !1;
  }
  function ne(t) {
    function e(l, a, n, i, o) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var d in t)
        t.hasOwnProperty(d) && ((l = t[d]), (this[d] = l ? l(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? _u
          : go),
        (this.isPropagationStopped = go),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = _u));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = _u));
        },
        persist: function () {},
        isPersistent: _u,
      }),
      e
    );
  }
  var Xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wu = ne(Xl),
    dn = g({}, Xl, { view: 0, detail: 0 }),
    O0 = ne(dn),
    vc,
    gc,
    hn,
    Ou = g({}, dn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== hn &&
              (hn && t.type === "mousemove"
                ? ((vc = t.screenX - hn.screenX), (gc = t.screenY - hn.screenY))
                : (gc = vc = 0),
              (hn = t)),
            vc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : gc;
      },
    }),
    bo = ne(Ou),
    z0 = g({}, Ou, { dataTransfer: 0 }),
    N0 = ne(z0),
    D0 = g({}, dn, { relatedTarget: 0 }),
    bc = ne(D0),
    C0 = g({}, Xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M0 = ne(C0),
    j0 = g({}, Xl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    U0 = ne(j0),
    H0 = g({}, Xl, { data: 0 }),
    So = ne(H0),
    B0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    L0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    q0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Y0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = q0[t])
      ? !!e[t]
      : !1;
  }
  function Sc() {
    return Y0;
  }
  var G0 = g({}, dn, {
      key: function (t) {
        if (t.key) {
          var e = B0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ru(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? L0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sc,
      charCode: function (t) {
        return t.type === "keypress" ? Ru(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ru(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    X0 = ne(G0),
    Q0 = g({}, Ou, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xo = ne(Q0),
    Z0 = g({}, dn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sc,
    }),
    V0 = ne(Z0),
    K0 = g({}, Xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    k0 = ne(K0),
    J0 = g({}, Ou, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    $0 = ne(J0),
    W0 = g({}, Xl, { newState: 0, oldState: 0 }),
    F0 = ne(W0),
    P0 = [9, 13, 27, 32],
    xc = We && "CompositionEvent" in window,
    mn = null;
  We && "documentMode" in document && (mn = document.documentMode);
  var I0 = We && "TextEvent" in window && !mn,
    Eo = We && (!xc || (mn && 8 < mn && 11 >= mn)),
    To = " ",
    Ao = !1;
  function Ro(t, e) {
    switch (t) {
      case "keyup":
        return P0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _o(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ba = !1;
  function ty(t, e) {
    switch (t) {
      case "compositionend":
        return _o(e);
      case "keypress":
        return e.which !== 32 ? null : ((Ao = !0), To);
      case "textInput":
        return (t = e.data), t === To && Ao ? null : t;
      default:
        return null;
    }
  }
  function ey(t, e) {
    if (ba)
      return t === "compositionend" || (!xc && Ro(t, e))
        ? ((t = vo()), (Au = pc = yl = null), (ba = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Eo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ly = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function wo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ly[t.type] : e === "textarea";
  }
  function Oo(t, e, l, a) {
    va ? (ga ? ga.push(a) : (ga = [a])) : (va = a),
      (e = mi(e, "onChange")),
      0 < e.length &&
        ((l = new wu("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var yn = null,
    pn = null;
  function ay(t) {
    rh(t, 0);
  }
  function zu(t) {
    var e = fn(t);
    if (ro(e)) return t;
  }
  function zo(t, e) {
    if (t === "change") return e;
  }
  var No = !1;
  if (We) {
    var Ec;
    if (We) {
      var Tc = "oninput" in document;
      if (!Tc) {
        var Do = document.createElement("div");
        Do.setAttribute("oninput", "return;"),
          (Tc = typeof Do.oninput == "function");
      }
      Ec = Tc;
    } else Ec = !1;
    No = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function Co() {
    yn && (yn.detachEvent("onpropertychange", Mo), (pn = yn = null));
  }
  function Mo(t) {
    if (t.propertyName === "value" && zu(pn)) {
      var e = [];
      Oo(e, pn, t, hc(t)), po(ay, e);
    }
  }
  function ny(t, e, l) {
    t === "focusin"
      ? (Co(), (yn = e), (pn = l), yn.attachEvent("onpropertychange", Mo))
      : t === "focusout" && Co();
  }
  function uy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return zu(pn);
  }
  function iy(t, e) {
    if (t === "click") return zu(e);
  }
  function cy(t, e) {
    if (t === "input" || t === "change") return zu(e);
  }
  function ry(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var de = typeof Object.is == "function" ? Object.is : ry;
  function vn(t, e) {
    if (de(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Se.call(e, n) || !de(t[n], e[n])) return !1;
    }
    return !0;
  }
  function jo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Uo(t, e) {
    var l = jo(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = jo(l);
    }
  }
  function Ho(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Ho(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Bo(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Eu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Eu(t.document);
    }
    return e;
  }
  function Ac(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var fy = We && "documentMode" in document && 11 >= document.documentMode,
    Sa = null,
    Rc = null,
    gn = null,
    _c = !1;
  function Lo(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    _c ||
      Sa == null ||
      Sa !== Eu(a) ||
      ((a = Sa),
      "selectionStart" in a && Ac(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (gn && vn(gn, a)) ||
        ((gn = a),
        (a = mi(Rc, "onSelect")),
        0 < a.length &&
          ((e = new wu("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = Sa))));
  }
  function Ql(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var xa = {
      animationend: Ql("Animation", "AnimationEnd"),
      animationiteration: Ql("Animation", "AnimationIteration"),
      animationstart: Ql("Animation", "AnimationStart"),
      transitionrun: Ql("Transition", "TransitionRun"),
      transitionstart: Ql("Transition", "TransitionStart"),
      transitioncancel: Ql("Transition", "TransitionCancel"),
      transitionend: Ql("Transition", "TransitionEnd"),
    },
    wc = {},
    qo = {};
  We &&
    ((qo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xa.animationend.animation,
      delete xa.animationiteration.animation,
      delete xa.animationstart.animation),
    "TransitionEvent" in window || delete xa.transitionend.transition);
  function Zl(t) {
    if (wc[t]) return wc[t];
    if (!xa[t]) return t;
    var e = xa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in qo) return (wc[t] = e[l]);
    return t;
  }
  var Yo = Zl("animationend"),
    Go = Zl("animationiteration"),
    Xo = Zl("animationstart"),
    oy = Zl("transitionrun"),
    sy = Zl("transitionstart"),
    dy = Zl("transitioncancel"),
    Qo = Zl("transitionend"),
    Zo = new Map(),
    Oc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Oc.push("scrollEnd");
  function De(t, e) {
    Zo.set(t, e), Gl(e, [t]);
  }
  var Vo = new WeakMap();
  function Te(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Vo.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: io(e) }), Vo.set(t, e), e);
    }
    return { value: t, source: e, stack: io(e) };
  }
  var Ae = [],
    Ea = 0,
    zc = 0;
  function Nu() {
    for (var t = Ea, e = (zc = Ea = 0); e < t; ) {
      var l = Ae[e];
      Ae[e++] = null;
      var a = Ae[e];
      Ae[e++] = null;
      var n = Ae[e];
      Ae[e++] = null;
      var i = Ae[e];
      if (((Ae[e++] = null), a !== null && n !== null)) {
        var o = a.pending;
        o === null ? (n.next = n) : ((n.next = o.next), (o.next = n)),
          (a.pending = n);
      }
      i !== 0 && Ko(l, n, i);
    }
  }
  function Du(t, e, l, a) {
    (Ae[Ea++] = t),
      (Ae[Ea++] = e),
      (Ae[Ea++] = l),
      (Ae[Ea++] = a),
      (zc |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Nc(t, e, l, a) {
    return Du(t, e, l, a), Cu(t);
  }
  function Ta(t, e) {
    return Du(t, null, null, e), Cu(t);
  }
  function Ko(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = i),
        (i = i.return);
    return t.tag === 3
      ? ((i = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - se(l)),
          (t = i.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function Cu(t) {
    if (50 < Qn) throw ((Qn = 0), (Hr = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Aa = {};
  function hy(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function he(t, e, l, a) {
    return new hy(t, e, l, a);
  }
  function Dc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Fe(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = he(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function ko(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Mu(t, e, l, a, n, i) {
    var o = 0;
    if (((a = t), typeof t == "function")) Dc(t) && (o = 1);
    else if (typeof t == "string")
      o = yp(t, l, F.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Tt:
          return (t = he(31, l, e, n)), (t.elementType = Tt), (t.lanes = i), t;
        case q:
          return Vl(l.children, n, i, e);
        case X:
          (o = 8), (n |= 24);
          break;
        case L:
          return (
            (t = he(12, l, e, n | 2)), (t.elementType = L), (t.lanes = i), t
          );
        case K:
          return (t = he(13, l, e, n)), (t.elementType = K), (t.lanes = i), t;
        case P:
          return (t = he(19, l, e, n)), (t.elementType = P), (t.lanes = i), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case B:
              case G:
                o = 10;
                break t;
              case Y:
                o = 9;
                break t;
              case k:
                o = 11;
                break t;
              case $:
                o = 14;
                break t;
              case bt:
                (o = 16), (a = null);
                break t;
            }
          (o = 29),
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = he(o, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = i), e
    );
  }
  function Vl(t, e, l, a) {
    return (t = he(7, t, a, e)), (t.lanes = l), t;
  }
  function Cc(t, e, l) {
    return (t = he(6, t, null, e)), (t.lanes = l), t;
  }
  function Mc(t, e, l) {
    return (
      (e = he(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ra = [],
    _a = 0,
    ju = null,
    Uu = 0,
    Re = [],
    _e = 0,
    Kl = null,
    Pe = 1,
    Ie = "";
  function kl(t, e) {
    (Ra[_a++] = Uu), (Ra[_a++] = ju), (ju = t), (Uu = e);
  }
  function Jo(t, e, l) {
    (Re[_e++] = Pe), (Re[_e++] = Ie), (Re[_e++] = Kl), (Kl = t);
    var a = Pe;
    t = Ie;
    var n = 32 - se(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var i = 32 - se(e) + n;
    if (30 < i) {
      var o = n - (n % 5);
      (i = (a & ((1 << o) - 1)).toString(32)),
        (a >>= o),
        (n -= o),
        (Pe = (1 << (32 - se(e) + n)) | (l << n) | a),
        (Ie = i + t);
    } else (Pe = (1 << i) | (l << n) | a), (Ie = t);
  }
  function jc(t) {
    t.return !== null && (kl(t, 1), Jo(t, 1, 0));
  }
  function Uc(t) {
    for (; t === ju; )
      (ju = Ra[--_a]), (Ra[_a] = null), (Uu = Ra[--_a]), (Ra[_a] = null);
    for (; t === Kl; )
      (Kl = Re[--_e]),
        (Re[_e] = null),
        (Ie = Re[--_e]),
        (Re[_e] = null),
        (Pe = Re[--_e]),
        (Re[_e] = null);
  }
  var ee = null,
    Nt = null,
    mt = !1,
    Jl = null,
    He = !1,
    Hc = Error(r(519));
  function $l(t) {
    var e = Error(r(418, ""));
    throw (xn(Te(e, t)), Hc);
  }
  function $o(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Ft] = t), (e[ae] = a), l)) {
      case "dialog":
        st("cancel", e), st("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Vn.length; l++) st(Vn[l], e);
        break;
      case "source":
        st("error", e);
        break;
      case "img":
      case "image":
      case "link":
        st("error", e), st("load", e);
        break;
      case "details":
        st("toggle", e);
        break;
      case "input":
        st("invalid", e),
          fo(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          xu(e);
        break;
      case "select":
        st("invalid", e);
        break;
      case "textarea":
        st("invalid", e), so(e, a.value, a.defaultValue, a.children), xu(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      dh(e.textContent, l)
        ? (a.popover != null && (st("beforetoggle", e), st("toggle", e)),
          a.onScroll != null && st("scroll", e),
          a.onScrollEnd != null && st("scrollend", e),
          a.onClick != null && (e.onclick = yi),
          (e = !0))
        : (e = !1),
      e || $l(t);
  }
  function Wo(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 13:
          He = !1;
          return;
        case 27:
        case 3:
          He = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function bn(t) {
    if (t !== ee) return !1;
    if (!mt) return Wo(t), (mt = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || Pr(t.type, t.memoizedProps))),
        (l = !l)),
      l && Nt && $l(t),
      Wo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Nt = Me(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Nt = null;
      }
    } else
      e === 27
        ? ((e = Nt), Dl(t.type) ? ((t = lf), (lf = null), (Nt = t)) : (Nt = e))
        : (Nt = ee ? Me(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Sn() {
    (Nt = ee = null), (mt = !1);
  }
  function Fo() {
    var t = Jl;
    return (
      t !== null &&
        (ce === null ? (ce = t) : ce.push.apply(ce, t), (Jl = null)),
      t
    );
  }
  function xn(t) {
    Jl === null ? (Jl = [t]) : Jl.push(t);
  }
  var Bc = H(null),
    Wl = null,
    tl = null;
  function pl(t, e, l) {
    V(Bc, e._currentValue), (e._currentValue = l);
  }
  function el(t) {
    (t._currentValue = Bc.current), Q(Bc);
  }
  function Lc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function qc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var o = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var y = 0; y < e.length; y++)
            if (d.context === e[y]) {
              (i.lanes |= l),
                (d = i.alternate),
                d !== null && (d.lanes |= l),
                Lc(i.return, l, t),
                a || (o = null);
              break t;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (((o = n.return), o === null)) throw Error(r(341));
        (o.lanes |= l),
          (i = o.alternate),
          i !== null && (i.lanes |= l),
          Lc(o, l, t),
          (o = null);
      } else o = n.child;
      if (o !== null) o.return = n;
      else
        for (o = n; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (((n = o.sibling), n !== null)) {
            (n.return = o.return), (o = n);
            break;
          }
          o = o.return;
        }
      n = o;
    }
  }
  function En(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var o = n.alternate;
        if (o === null) throw Error(r(387));
        if (((o = o.memoizedProps), o !== null)) {
          var d = n.type;
          de(n.pendingProps.value, o.value) ||
            (t !== null ? t.push(d) : (t = [d]));
        }
      } else if (n === Gt.current) {
        if (((o = n.alternate), o === null)) throw Error(r(387));
        o.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Fn) : (t = [Fn]));
      }
      n = n.return;
    }
    t !== null && qc(e, t, l, a), (e.flags |= 262144);
  }
  function Hu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!de(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Fl(t) {
    (Wl = t),
      (tl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Pt(t) {
    return Po(Wl, t);
  }
  function Bu(t, e) {
    return Wl === null && Fl(t), Po(t, e);
  }
  function Po(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), tl === null)) {
      if (t === null) throw Error(r(308));
      (tl = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else tl = tl.next = e;
    return l;
  }
  var my =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    yy = u.unstable_scheduleCallback,
    py = u.unstable_NormalPriority,
    Bt = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Yc() {
    return { controller: new my(), data: new Map(), refCount: 0 };
  }
  function Tn(t) {
    t.refCount--,
      t.refCount === 0 &&
        yy(py, function () {
          t.controller.abort();
        });
  }
  var An = null,
    Gc = 0,
    wa = 0,
    Oa = null;
  function vy(t, e) {
    if (An === null) {
      var l = (An = []);
      (Gc = 0),
        (wa = Qr()),
        (Oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Gc++, e.then(Io, Io), e;
  }
  function Io() {
    if (--Gc === 0 && An !== null) {
      Oa !== null && (Oa.status = "fulfilled");
      var t = An;
      (An = null), (wa = 0), (Oa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function gy(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var ts = D.S;
  D.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      vy(t, e),
      ts !== null && ts(t, e);
  };
  var Pl = H(null);
  function Xc() {
    var t = Pl.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function Lu(t, e) {
    e === null ? V(Pl, Pl.current) : V(Pl, e.pool);
  }
  function es() {
    var t = Xc();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var Rn = Error(r(460)),
    ls = Error(r(474)),
    qu = Error(r(542)),
    Qc = { then: function () {} };
  function as(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Yu() {}
  function ns(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Yu, Yu), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), is(t), t);
      default:
        if (typeof e.status == "string") e.then(Yu, Yu);
        else {
          if (((t = Rt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), is(t), t);
        }
        throw ((_n = e), Rn);
    }
  }
  var _n = null;
  function us() {
    if (_n === null) throw Error(r(459));
    var t = _n;
    return (_n = null), t;
  }
  function is(t) {
    if (t === Rn || t === qu) throw Error(r(483));
  }
  var vl = !1;
  function Zc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Vc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function gl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (vt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = Cu(t)),
        Ko(t, null, l),
        e
      );
    }
    return Du(t, a, e, l), Cu(t);
  }
  function wn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Pf(t, l);
    }
  }
  function Kc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = o) : (i = i.next = o), (l = l.next);
        } while (l !== null);
        i === null ? (n = i = e) : (i = i.next = e);
      } else n = i = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var kc = !1;
  function On() {
    if (kc) {
      var t = Oa;
      if (t !== null) throw t;
    }
  }
  function zn(t, e, l, a) {
    kc = !1;
    var n = t.updateQueue;
    vl = !1;
    var i = n.firstBaseUpdate,
      o = n.lastBaseUpdate,
      d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var y = d,
        _ = y.next;
      (y.next = null), o === null ? (i = _) : (o.next = _), (o = y);
      var C = t.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (d = C.lastBaseUpdate),
        d !== o &&
          (d === null ? (C.firstBaseUpdate = _) : (d.next = _),
          (C.lastBaseUpdate = y)));
    }
    if (i !== null) {
      var U = n.baseState;
      (o = 0), (C = _ = y = null), (d = i);
      do {
        var w = d.lane & -536870913,
          O = w !== d.lane;
        if (O ? (dt & w) === w : (a & w) === w) {
          w !== 0 && w === wa && (kc = !0),
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var at = t,
              tt = d;
            w = e;
            var Et = l;
            switch (tt.tag) {
              case 1:
                if (((at = tt.payload), typeof at == "function")) {
                  U = at.call(Et, U, w);
                  break t;
                }
                U = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = tt.payload),
                  (w = typeof at == "function" ? at.call(Et, U, w) : at),
                  w == null)
                )
                  break t;
                U = g({}, U, w);
                break t;
              case 2:
                vl = !0;
            }
          }
          (w = d.callback),
            w !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = n.callbacks),
              O === null ? (n.callbacks = [w]) : O.push(w));
        } else
          (O = {
            lane: w,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            C === null ? ((_ = C = O), (y = U)) : (C = C.next = O),
            (o |= w);
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break;
          (O = d),
            (d = O.next),
            (O.next = null),
            (n.lastBaseUpdate = O),
            (n.shared.pending = null);
        }
      } while (!0);
      C === null && (y = U),
        (n.baseState = y),
        (n.firstBaseUpdate = _),
        (n.lastBaseUpdate = C),
        i === null && (n.shared.lanes = 0),
        (wl |= o),
        (t.lanes = o),
        (t.memoizedState = U);
    }
  }
  function cs(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function rs(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) cs(l[t], e);
  }
  var za = H(null),
    Gu = H(0);
  function fs(t, e) {
    (t = rl), V(Gu, t), V(za, e), (rl = t | e.baseLanes);
  }
  function Jc() {
    V(Gu, rl), V(za, za.current);
  }
  function $c() {
    (rl = Gu.current), Q(za), Q(Gu);
  }
  var Sl = 0,
    it = null,
    St = null,
    jt = null,
    Xu = !1,
    Na = !1,
    Il = !1,
    Qu = 0,
    Nn = 0,
    Da = null,
    by = 0;
  function Ct() {
    throw Error(r(321));
  }
  function Wc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!de(t[l], e[l])) return !1;
    return !0;
  }
  function Fc(t, e, l, a, n, i) {
    return (
      (Sl = i),
      (it = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (D.H = t === null || t.memoizedState === null ? Ks : ks),
      (Il = !1),
      (i = l(a, n)),
      (Il = !1),
      Na && (i = ss(e, l, a, n)),
      os(t),
      i
    );
  }
  function os(t) {
    D.H = $u;
    var e = St !== null && St.next !== null;
    if (((Sl = 0), (jt = St = it = null), (Xu = !1), (Nn = 0), (Da = null), e))
      throw Error(r(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && Hu(t) && (Qt = !0));
  }
  function ss(t, e, l, a) {
    it = t;
    var n = 0;
    do {
      if ((Na && (Da = null), (Nn = 0), (Na = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (jt = St = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (D.H = _y), (i = e(l, a));
    } while (Na);
    return i;
  }
  function Sy() {
    var t = D.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Dn(e) : e),
      (t = t.useState()[0]),
      (St !== null ? St.memoizedState : null) !== t && (it.flags |= 1024),
      e
    );
  }
  function Pc() {
    var t = Qu !== 0;
    return (Qu = 0), t;
  }
  function Ic(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function tr(t) {
    if (Xu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Xu = !1;
    }
    (Sl = 0), (jt = St = it = null), (Na = !1), (Nn = Qu = 0), (Da = null);
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return jt === null ? (it.memoizedState = jt = t) : (jt = jt.next = t), jt;
  }
  function Ut() {
    if (St === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = jt === null ? it.memoizedState : jt.next;
    if (e !== null) (jt = e), (St = t);
    else {
      if (t === null)
        throw it.alternate === null ? Error(r(467)) : Error(r(310));
      (St = t),
        (t = {
          memoizedState: St.memoizedState,
          baseState: St.baseState,
          baseQueue: St.baseQueue,
          queue: St.queue,
          next: null,
        }),
        jt === null ? (it.memoizedState = jt = t) : (jt = jt.next = t);
    }
    return jt;
  }
  function er() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Dn(t) {
    var e = Nn;
    return (
      (Nn += 1),
      Da === null && (Da = []),
      (t = ns(Da, t, e)),
      (e = it),
      (jt === null ? e.memoizedState : jt.next) === null &&
        ((e = e.alternate),
        (D.H = e === null || e.memoizedState === null ? Ks : ks)),
      t
    );
  }
  function Zu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Dn(t);
      if (t.$$typeof === G) return Pt(t);
    }
    throw Error(r(438, String(t)));
  }
  function lr(t) {
    var e = null,
      l = it.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = it.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = er()), (it.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = te;
    return e.index++, l;
  }
  function ll(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Vu(t) {
    var e = Ut();
    return ar(e, St, t);
  }
  function ar(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var o = n.next;
        (n.next = i.next), (i.next = o);
      }
      (e.baseQueue = n = i), (a.pending = null);
    }
    if (((i = t.baseState), n === null)) t.memoizedState = i;
    else {
      e = n.next;
      var d = (o = null),
        y = null,
        _ = e,
        C = !1;
      do {
        var U = _.lane & -536870913;
        if (U !== _.lane ? (dt & U) === U : (Sl & U) === U) {
          var w = _.revertLane;
          if (w === 0)
            y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              U === wa && (C = !0);
          else if ((Sl & w) === w) {
            (_ = _.next), w === wa && (C = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: _.revertLane,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              y === null ? ((d = y = U), (o = i)) : (y = y.next = U),
              (it.lanes |= w),
              (wl |= w);
          (U = _.action),
            Il && l(i, U),
            (i = _.hasEagerState ? _.eagerState : l(i, U));
        } else
          (w = {
            lane: U,
            revertLane: _.revertLane,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            y === null ? ((d = y = w), (o = i)) : (y = y.next = w),
            (it.lanes |= U),
            (wl |= U);
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (
        (y === null ? (o = i) : (y.next = d),
        !de(i, t.memoizedState) && ((Qt = !0), C && ((l = Oa), l !== null)))
      )
        throw l;
      (t.memoizedState = i),
        (t.baseState = o),
        (t.baseQueue = y),
        (a.lastRenderedState = i);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function nr(t) {
    var e = Ut(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var o = (n = n.next);
      do (i = t(i, o.action)), (o = o.next);
      while (o !== n);
      de(i, e.memoizedState) || (Qt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function ds(t, e, l) {
    var a = it,
      n = Ut(),
      i = mt;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var o = !de((St || n).memoizedState, l);
    o && ((n.memoizedState = l), (Qt = !0)), (n = n.queue);
    var d = ys.bind(null, a, n, t);
    if (
      (Cn(2048, 8, d, [t]),
      n.getSnapshot !== e || o || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ca(9, Ku(), ms.bind(null, a, n, l, e), null),
        Rt === null)
      )
        throw Error(r(349));
      i || (Sl & 124) !== 0 || hs(a, e, l);
    }
    return l;
  }
  function hs(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = it.updateQueue),
      e === null
        ? ((e = er()), (it.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function ms(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), ps(e) && vs(t);
  }
  function ys(t, e, l) {
    return l(function () {
      ps(e) && vs(t);
    });
  }
  function ps(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !de(t, l);
    } catch {
      return !0;
    }
  }
  function vs(t) {
    var e = Ta(t, 2);
    e !== null && ge(e, t, 2);
  }
  function ur(t) {
    var e = ue();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Il)) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: t,
      }),
      e
    );
  }
  function gs(t, e, l, a) {
    return (t.baseState = l), ar(t, St, typeof a == "function" ? a : ll);
  }
  function xy(t, e, l, a, n) {
    if (Ju(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          i.listeners.push(o);
        },
      };
      D.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = e.pending),
        l === null
          ? ((i.next = e.pending = i), bs(e, i))
          : ((i.next = l.next), (e.pending = l.next = i));
    }
  }
  function bs(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var i = D.T,
        o = {};
      D.T = o;
      try {
        var d = l(n, a),
          y = D.S;
        y !== null && y(o, d), Ss(t, e, d);
      } catch (_) {
        ir(t, e, _);
      } finally {
        D.T = i;
      }
    } else
      try {
        (i = l(n, a)), Ss(t, e, i);
      } catch (_) {
        ir(t, e, _);
      }
  }
  function Ss(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            xs(t, e, a);
          },
          function (a) {
            return ir(t, e, a);
          }
        )
      : xs(t, e, l);
  }
  function xs(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      Es(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), bs(t, l)));
  }
  function ir(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), Es(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Es(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ts(t, e) {
    return e;
  }
  function As(t, e) {
    if (mt) {
      var l = Rt.formState;
      if (l !== null) {
        t: {
          var a = it;
          if (mt) {
            if (Nt) {
              e: {
                for (var n = Nt, i = He; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (((n = Me(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (Nt = Me(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            $l(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = ue()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ts,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Qs.bind(null, it, a)),
      (a.dispatch = l),
      (a = ur(!1)),
      (i = sr.bind(null, it, !1, a.queue)),
      (a = ue()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = xy.bind(null, it, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Rs(t) {
    var e = Ut();
    return _s(e, St, t);
  }
  function _s(t, e, l) {
    if (
      ((e = ar(t, e, Ts)[0]),
      (t = Vu(ll)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Dn(e);
      } catch (o) {
        throw o === Rn ? qu : o;
      }
    else a = e;
    e = Ut();
    var n = e.queue,
      i = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((it.flags |= 2048), Ca(9, Ku(), Ey.bind(null, n, l), null)),
      [a, i, t]
    );
  }
  function Ey(t, e) {
    t.action = e;
  }
  function ws(t) {
    var e = Ut(),
      l = St;
    if (l !== null) return _s(e, l, t);
    Ut(), (e = e.memoizedState), (l = Ut());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function Ca(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = it.updateQueue),
      e === null && ((e = er()), (it.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Ku() {
    return { destroy: void 0, resource: void 0 };
  }
  function Os() {
    return Ut().memoizedState;
  }
  function ku(t, e, l, a) {
    var n = ue();
    (a = a === void 0 ? null : a),
      (it.flags |= t),
      (n.memoizedState = Ca(1 | e, Ku(), l, a));
  }
  function Cn(t, e, l, a) {
    var n = Ut();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    St !== null && a !== null && Wc(a, St.memoizedState.deps)
      ? (n.memoizedState = Ca(e, i, l, a))
      : ((it.flags |= t), (n.memoizedState = Ca(1 | e, i, l, a)));
  }
  function zs(t, e) {
    ku(8390656, 8, t, e);
  }
  function Ns(t, e) {
    Cn(2048, 8, t, e);
  }
  function Ds(t, e) {
    return Cn(4, 2, t, e);
  }
  function Cs(t, e) {
    return Cn(4, 4, t, e);
  }
  function Ms(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function js(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Cn(4, 4, Ms.bind(null, e, t), l);
  }
  function cr() {}
  function Us(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Wc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Hs(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Wc(e, a[1])) return a[0];
    if (((a = t()), Il)) {
      hl(!0);
      try {
        t();
      } finally {
        hl(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function rr(t, e, l) {
    return l === void 0 || (Sl & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = qd()), (it.lanes |= t), (wl |= t), l);
  }
  function Bs(t, e, l, a) {
    return de(l, e)
      ? l
      : za.current !== null
      ? ((t = rr(t, l, a)), de(t, e) || (Qt = !0), t)
      : (Sl & 42) === 0
      ? ((Qt = !0), (t.memoizedState = l))
      : ((t = qd()), (it.lanes |= t), (wl |= t), e);
  }
  function Ls(t, e, l, a, n) {
    var i = Z.p;
    Z.p = i !== 0 && 8 > i ? i : 8;
    var o = D.T,
      d = {};
    (D.T = d), sr(t, !1, e, l);
    try {
      var y = n(),
        _ = D.S;
      if (
        (_ !== null && _(d, y),
        y !== null && typeof y == "object" && typeof y.then == "function")
      ) {
        var C = gy(y, a);
        Mn(t, e, C, ve(t));
      } else Mn(t, e, a, ve(t));
    } catch (U) {
      Mn(t, e, { then: function () {}, status: "rejected", reason: U }, ve());
    } finally {
      (Z.p = i), (D.T = o);
    }
  }
  function Ty() {}
  function fr(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = qs(t).queue;
    Ls(
      t,
      n,
      e,
      I,
      l === null
        ? Ty
        : function () {
            return Ys(t), l(a);
          }
    );
  }
  function qs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: I,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ll,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Ys(t) {
    var e = qs(t).next.queue;
    Mn(t, e, {}, ve());
  }
  function or() {
    return Pt(Fn);
  }
  function Gs() {
    return Ut().memoizedState;
  }
  function Xs() {
    return Ut().memoizedState;
  }
  function Ay(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ve();
          t = gl(l);
          var a = bl(e, t, l);
          a !== null && (ge(a, e, l), wn(a, e, l)),
            (e = { cache: Yc() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Ry(t, e, l) {
    var a = ve();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ju(t)
        ? Zs(e, l)
        : ((l = Nc(t, e, l, a)), l !== null && (ge(l, t, a), Vs(l, e, a)));
  }
  function Qs(t, e, l) {
    var a = ve();
    Mn(t, e, l, a);
  }
  function Mn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ju(t)) Zs(e, n);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var o = e.lastRenderedState,
            d = i(o, l);
          if (((n.hasEagerState = !0), (n.eagerState = d), de(d, o)))
            return Du(t, e, n, 0), Rt === null && Nu(), !1;
        } catch {
        } finally {
        }
      if (((l = Nc(t, e, n, a)), l !== null))
        return ge(l, t, a), Vs(l, e, a), !0;
    }
    return !1;
  }
  function sr(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Qr(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ju(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Nc(t, l, a, 2)), e !== null && ge(e, t, 2);
  }
  function Ju(t) {
    var e = t.alternate;
    return t === it || (e !== null && e === it);
  }
  function Zs(t, e) {
    Na = Xu = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Vs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Pf(t, l);
    }
  }
  var $u = {
      readContext: Pt,
      use: Zu,
      useCallback: Ct,
      useContext: Ct,
      useEffect: Ct,
      useImperativeHandle: Ct,
      useLayoutEffect: Ct,
      useInsertionEffect: Ct,
      useMemo: Ct,
      useReducer: Ct,
      useRef: Ct,
      useState: Ct,
      useDebugValue: Ct,
      useDeferredValue: Ct,
      useTransition: Ct,
      useSyncExternalStore: Ct,
      useId: Ct,
      useHostTransitionStatus: Ct,
      useFormState: Ct,
      useActionState: Ct,
      useOptimistic: Ct,
      useMemoCache: Ct,
      useCacheRefresh: Ct,
    },
    Ks = {
      readContext: Pt,
      use: Zu,
      useCallback: function (t, e) {
        return (ue().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Pt,
      useEffect: zs,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          ku(4194308, 4, Ms.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return ku(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ku(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = ue();
        e = e === void 0 ? null : e;
        var a = t();
        if (Il) {
          hl(!0);
          try {
            t();
          } finally {
            hl(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = ue();
        if (l !== void 0) {
          var n = l(e);
          if (Il) {
            hl(!0);
            try {
              l(e);
            } finally {
              hl(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = Ry.bind(null, it, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = ur(t);
        var e = t.queue,
          l = Qs.bind(null, it, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: cr,
      useDeferredValue: function (t, e) {
        var l = ue();
        return rr(l, t, e);
      },
      useTransition: function () {
        var t = ur(!1);
        return (
          (t = Ls.bind(null, it, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = it,
          n = ue();
        if (mt) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), Rt === null)) throw Error(r(349));
          (dt & 124) !== 0 || hs(a, e, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (n.queue = i),
          zs(ys.bind(null, a, i, t), [t]),
          (a.flags |= 2048),
          Ca(9, Ku(), ms.bind(null, a, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = ue(),
          e = Rt.identifierPrefix;
        if (mt) {
          var l = Ie,
            a = Pe;
          (l = (a & ~(1 << (32 - se(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = Qu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = by++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: or,
      useFormState: As,
      useActionState: As,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = sr.bind(null, it, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: lr,
      useCacheRefresh: function () {
        return (ue().memoizedState = Ay.bind(null, it));
      },
    },
    ks = {
      readContext: Pt,
      use: Zu,
      useCallback: Us,
      useContext: Pt,
      useEffect: Ns,
      useImperativeHandle: js,
      useInsertionEffect: Ds,
      useLayoutEffect: Cs,
      useMemo: Hs,
      useReducer: Vu,
      useRef: Os,
      useState: function () {
        return Vu(ll);
      },
      useDebugValue: cr,
      useDeferredValue: function (t, e) {
        var l = Ut();
        return Bs(l, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Vu(ll)[0],
          e = Ut().memoizedState;
        return [typeof t == "boolean" ? t : Dn(t), e];
      },
      useSyncExternalStore: ds,
      useId: Gs,
      useHostTransitionStatus: or,
      useFormState: Rs,
      useActionState: Rs,
      useOptimistic: function (t, e) {
        var l = Ut();
        return gs(l, St, t, e);
      },
      useMemoCache: lr,
      useCacheRefresh: Xs,
    },
    _y = {
      readContext: Pt,
      use: Zu,
      useCallback: Us,
      useContext: Pt,
      useEffect: Ns,
      useImperativeHandle: js,
      useInsertionEffect: Ds,
      useLayoutEffect: Cs,
      useMemo: Hs,
      useReducer: nr,
      useRef: Os,
      useState: function () {
        return nr(ll);
      },
      useDebugValue: cr,
      useDeferredValue: function (t, e) {
        var l = Ut();
        return St === null ? rr(l, t, e) : Bs(l, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = nr(ll)[0],
          e = Ut().memoizedState;
        return [typeof t == "boolean" ? t : Dn(t), e];
      },
      useSyncExternalStore: ds,
      useId: Gs,
      useHostTransitionStatus: or,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (t, e) {
        var l = Ut();
        return St !== null
          ? gs(l, St, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: lr,
      useCacheRefresh: Xs,
    },
    Ma = null,
    jn = 0;
  function Wu(t) {
    var e = jn;
    return (jn += 1), Ma === null && (Ma = []), ns(Ma, t, e);
  }
  function Un(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Fu(t, e) {
    throw e.$$typeof === N
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Js(t) {
    var e = t._init;
    return e(t._payload);
  }
  function $s(t) {
    function e(T, S) {
      if (t) {
        var R = T.deletions;
        R === null ? ((T.deletions = [S]), (T.flags |= 16)) : R.push(S);
      }
    }
    function l(T, S) {
      if (!t) return null;
      for (; S !== null; ) e(T, S), (S = S.sibling);
      return null;
    }
    function a(T) {
      for (var S = new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), (T = T.sibling);
      return S;
    }
    function n(T, S) {
      return (T = Fe(T, S)), (T.index = 0), (T.sibling = null), T;
    }
    function i(T, S, R) {
      return (
        (T.index = R),
        t
          ? ((R = T.alternate),
            R !== null
              ? ((R = R.index), R < S ? ((T.flags |= 67108866), S) : R)
              : ((T.flags |= 67108866), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function o(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function d(T, S, R, M) {
      return S === null || S.tag !== 6
        ? ((S = Cc(R, T.mode, M)), (S.return = T), S)
        : ((S = n(S, R)), (S.return = T), S);
    }
    function y(T, S, R, M) {
      var J = R.type;
      return J === q
        ? C(T, S, R.props.children, M, R.key)
        : S !== null &&
          (S.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === bt &&
              Js(J) === S.type))
        ? ((S = n(S, R.props)), Un(S, R), (S.return = T), S)
        : ((S = Mu(R.type, R.key, R.props, null, T.mode, M)),
          Un(S, R),
          (S.return = T),
          S);
    }
    function _(T, S, R, M) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== R.containerInfo ||
        S.stateNode.implementation !== R.implementation
        ? ((S = Mc(R, T.mode, M)), (S.return = T), S)
        : ((S = n(S, R.children || [])), (S.return = T), S);
    }
    function C(T, S, R, M, J) {
      return S === null || S.tag !== 7
        ? ((S = Vl(R, T.mode, M, J)), (S.return = T), S)
        : ((S = n(S, R)), (S.return = T), S);
    }
    function U(T, S, R) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (S = Cc("" + S, T.mode, R)), (S.return = T), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case z:
            return (
              (R = Mu(S.type, S.key, S.props, null, T.mode, R)),
              Un(R, S),
              (R.return = T),
              R
            );
          case j:
            return (S = Mc(S, T.mode, R)), (S.return = T), S;
          case bt:
            var M = S._init;
            return (S = M(S._payload)), U(T, S, R);
        }
        if (Yt(S) || qt(S))
          return (S = Vl(S, T.mode, R, null)), (S.return = T), S;
        if (typeof S.then == "function") return U(T, Wu(S), R);
        if (S.$$typeof === G) return U(T, Bu(T, S), R);
        Fu(T, S);
      }
      return null;
    }
    function w(T, S, R, M) {
      var J = S !== null ? S.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return J !== null ? null : d(T, S, "" + R, M);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            return R.key === J ? y(T, S, R, M) : null;
          case j:
            return R.key === J ? _(T, S, R, M) : null;
          case bt:
            return (J = R._init), (R = J(R._payload)), w(T, S, R, M);
        }
        if (Yt(R) || qt(R)) return J !== null ? null : C(T, S, R, M, null);
        if (typeof R.then == "function") return w(T, S, Wu(R), M);
        if (R.$$typeof === G) return w(T, S, Bu(T, R), M);
        Fu(T, R);
      }
      return null;
    }
    function O(T, S, R, M, J) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (T = T.get(R) || null), d(S, T, "" + M, J);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case z:
            return (
              (T = T.get(M.key === null ? R : M.key) || null), y(S, T, M, J)
            );
          case j:
            return (
              (T = T.get(M.key === null ? R : M.key) || null), _(S, T, M, J)
            );
          case bt:
            var ct = M._init;
            return (M = ct(M._payload)), O(T, S, R, M, J);
        }
        if (Yt(M) || qt(M)) return (T = T.get(R) || null), C(S, T, M, J, null);
        if (typeof M.then == "function") return O(T, S, R, Wu(M), J);
        if (M.$$typeof === G) return O(T, S, R, Bu(S, M), J);
        Fu(S, M);
      }
      return null;
    }
    function at(T, S, R, M) {
      for (
        var J = null, ct = null, W = S, lt = (S = 0), Vt = null;
        W !== null && lt < R.length;
        lt++
      ) {
        W.index > lt ? ((Vt = W), (W = null)) : (Vt = W.sibling);
        var ht = w(T, W, R[lt], M);
        if (ht === null) {
          W === null && (W = Vt);
          break;
        }
        t && W && ht.alternate === null && e(T, W),
          (S = i(ht, S, lt)),
          ct === null ? (J = ht) : (ct.sibling = ht),
          (ct = ht),
          (W = Vt);
      }
      if (lt === R.length) return l(T, W), mt && kl(T, lt), J;
      if (W === null) {
        for (; lt < R.length; lt++)
          (W = U(T, R[lt], M)),
            W !== null &&
              ((S = i(W, S, lt)),
              ct === null ? (J = W) : (ct.sibling = W),
              (ct = W));
        return mt && kl(T, lt), J;
      }
      for (W = a(W); lt < R.length; lt++)
        (Vt = O(W, T, lt, R[lt], M)),
          Vt !== null &&
            (t &&
              Vt.alternate !== null &&
              W.delete(Vt.key === null ? lt : Vt.key),
            (S = i(Vt, S, lt)),
            ct === null ? (J = Vt) : (ct.sibling = Vt),
            (ct = Vt));
      return (
        t &&
          W.forEach(function (Hl) {
            return e(T, Hl);
          }),
        mt && kl(T, lt),
        J
      );
    }
    function tt(T, S, R, M) {
      if (R == null) throw Error(r(151));
      for (
        var J = null, ct = null, W = S, lt = (S = 0), Vt = null, ht = R.next();
        W !== null && !ht.done;
        lt++, ht = R.next()
      ) {
        W.index > lt ? ((Vt = W), (W = null)) : (Vt = W.sibling);
        var Hl = w(T, W, ht.value, M);
        if (Hl === null) {
          W === null && (W = Vt);
          break;
        }
        t && W && Hl.alternate === null && e(T, W),
          (S = i(Hl, S, lt)),
          ct === null ? (J = Hl) : (ct.sibling = Hl),
          (ct = Hl),
          (W = Vt);
      }
      if (ht.done) return l(T, W), mt && kl(T, lt), J;
      if (W === null) {
        for (; !ht.done; lt++, ht = R.next())
          (ht = U(T, ht.value, M)),
            ht !== null &&
              ((S = i(ht, S, lt)),
              ct === null ? (J = ht) : (ct.sibling = ht),
              (ct = ht));
        return mt && kl(T, lt), J;
      }
      for (W = a(W); !ht.done; lt++, ht = R.next())
        (ht = O(W, T, lt, ht.value, M)),
          ht !== null &&
            (t &&
              ht.alternate !== null &&
              W.delete(ht.key === null ? lt : ht.key),
            (S = i(ht, S, lt)),
            ct === null ? (J = ht) : (ct.sibling = ht),
            (ct = ht));
      return (
        t &&
          W.forEach(function (wp) {
            return e(T, wp);
          }),
        mt && kl(T, lt),
        J
      );
    }
    function Et(T, S, R, M) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === q &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case z:
            t: {
              for (var J = R.key; S !== null; ) {
                if (S.key === J) {
                  if (((J = R.type), J === q)) {
                    if (S.tag === 7) {
                      l(T, S.sibling),
                        (M = n(S, R.props.children)),
                        (M.return = T),
                        (T = M);
                      break t;
                    }
                  } else if (
                    S.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === bt &&
                      Js(J) === S.type)
                  ) {
                    l(T, S.sibling),
                      (M = n(S, R.props)),
                      Un(M, R),
                      (M.return = T),
                      (T = M);
                    break t;
                  }
                  l(T, S);
                  break;
                } else e(T, S);
                S = S.sibling;
              }
              R.type === q
                ? ((M = Vl(R.props.children, T.mode, M, R.key)),
                  (M.return = T),
                  (T = M))
                : ((M = Mu(R.type, R.key, R.props, null, T.mode, M)),
                  Un(M, R),
                  (M.return = T),
                  (T = M));
            }
            return o(T);
          case j:
            t: {
              for (J = R.key; S !== null; ) {
                if (S.key === J)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === R.containerInfo &&
                    S.stateNode.implementation === R.implementation
                  ) {
                    l(T, S.sibling),
                      (M = n(S, R.children || [])),
                      (M.return = T),
                      (T = M);
                    break t;
                  } else {
                    l(T, S);
                    break;
                  }
                else e(T, S);
                S = S.sibling;
              }
              (M = Mc(R, T.mode, M)), (M.return = T), (T = M);
            }
            return o(T);
          case bt:
            return (J = R._init), (R = J(R._payload)), Et(T, S, R, M);
        }
        if (Yt(R)) return at(T, S, R, M);
        if (qt(R)) {
          if (((J = qt(R)), typeof J != "function")) throw Error(r(150));
          return (R = J.call(R)), tt(T, S, R, M);
        }
        if (typeof R.then == "function") return Et(T, S, Wu(R), M);
        if (R.$$typeof === G) return Et(T, S, Bu(T, R), M);
        Fu(T, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          S !== null && S.tag === 6
            ? (l(T, S.sibling), (M = n(S, R)), (M.return = T), (T = M))
            : (l(T, S), (M = Cc(R, T.mode, M)), (M.return = T), (T = M)),
          o(T))
        : l(T, S);
    }
    return function (T, S, R, M) {
      try {
        jn = 0;
        var J = Et(T, S, R, M);
        return (Ma = null), J;
      } catch (W) {
        if (W === Rn || W === qu) throw W;
        var ct = he(29, W, null, T.mode);
        return (ct.lanes = M), (ct.return = T), ct;
      } finally {
      }
    };
  }
  var ja = $s(!0),
    Ws = $s(!1),
    we = H(null),
    Be = null;
  function xl(t) {
    var e = t.alternate;
    V(Lt, Lt.current & 1),
      V(we, t),
      Be === null &&
        (e === null || za.current !== null || e.memoizedState !== null) &&
        (Be = t);
  }
  function Fs(t) {
    if (t.tag === 22) {
      if ((V(Lt, Lt.current), V(we, t), Be === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Be = t);
      }
    } else El();
  }
  function El() {
    V(Lt, Lt.current), V(we, we.current);
  }
  function al(t) {
    Q(we), Be === t && (Be = null), Q(Lt);
  }
  var Lt = H(0);
  function Pu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || ef(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function dr(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : g({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var hr = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ve(),
        n = gl(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = bl(t, n, a)),
        e !== null && (ge(e, t, a), wn(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ve(),
        n = gl(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = bl(t, n, a)),
        e !== null && (ge(e, t, a), wn(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ve(),
        a = gl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = bl(t, a, l)),
        e !== null && (ge(e, t, l), wn(e, t, l));
    },
  };
  function Ps(t, e, l, a, n, i, o) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, i, o)
        : e.prototype && e.prototype.isPureReactComponent
        ? !vn(l, a) || !vn(n, i)
        : !0
    );
  }
  function Is(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && hr.enqueueReplaceState(e, e.state, null);
  }
  function ta(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = g({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var Iu =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function td(t) {
    Iu(t);
  }
  function ed(t) {
    console.error(t);
  }
  function ld(t) {
    Iu(t);
  }
  function ti(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ad(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function mr(t, e, l) {
    return (
      (l = gl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        ti(t, e);
      }),
      l
    );
  }
  function nd(t) {
    return (t = gl(t)), (t.tag = 3), t;
  }
  function ud(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      (t.payload = function () {
        return n(i);
      }),
        (t.callback = function () {
          ad(e, l, a);
        });
    }
    var o = l.stateNode;
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        ad(e, l, a),
          typeof n != "function" &&
            (Ol === null ? (Ol = new Set([this])) : Ol.add(this));
        var d = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function wy(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && En(e, l, n, !0),
        (l = we.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Be === null ? Lr() : l.alternate === null && Dt === 0 && (Dt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Qc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Yr(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Qc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Yr(t, a, n)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return Yr(t, a, n), Lr(), !1;
    }
    if (mt)
      return (
        (e = we.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Hc && ((t = Error(r(422), { cause: a })), xn(Te(t, l))))
          : (a !== Hc && ((e = Error(r(423), { cause: a })), xn(Te(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = Te(a, l)),
            (n = mr(t.stateNode, a, n)),
            Kc(t, n),
            Dt !== 4 && (Dt = 2)),
        !1
      );
    var i = Error(r(520), { cause: a });
    if (
      ((i = Te(i, l)),
      Xn === null ? (Xn = [i]) : Xn.push(i),
      Dt !== 4 && (Dt = 2),
      e === null)
    )
      return !0;
    (a = Te(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = mr(l.stateNode, a, t)),
            Kc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Ol === null || !Ol.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = nd(n)),
              ud(n, t, l, a),
              Kc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var id = Error(r(461)),
    Qt = !1;
  function kt(t, e, l, a) {
    e.child = t === null ? Ws(e, null, l, a) : ja(e, t.child, l, a);
  }
  function cd(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var o = {};
      for (var d in a) d !== "ref" && (o[d] = a[d]);
    } else o = a;
    return (
      Fl(e),
      (a = Fc(t, e, l, o, i, n)),
      (d = Pc()),
      t !== null && !Qt
        ? (Ic(t, e, n), nl(t, e, n))
        : (mt && d && jc(e), (e.flags |= 1), kt(t, e, a, n), e.child)
    );
  }
  function rd(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Dc(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = i), fd(t, e, i, a, n))
        : ((t = Mu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !Er(t, n))) {
      var o = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : vn), l(o, a) && t.ref === e.ref)
      )
        return nl(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Fe(i, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function fd(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (vn(i, a) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = a = i), Er(t, n)))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return (e.lanes = t.lanes), nl(t, e, n);
    }
    return yr(t, e, l, a, n);
  }
  function od(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      i = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, i = 0; n !== null; )
            (i = i | n.lanes | n.childLanes), (n = n.sibling);
          e.childLanes = i & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return sd(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Lu(e, i !== null ? i.cachePool : null),
          i !== null ? fs(e, i) : Jc(),
          Fs(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          sd(t, e, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null
        ? (Lu(e, i.cachePool), fs(e, i), El(), (e.memoizedState = null))
        : (t !== null && Lu(e, null), Jc(), El());
    return kt(t, e, n, l), e.child;
  }
  function sd(t, e, l, a) {
    var n = Xc();
    return (
      (n = n === null ? null : { parent: Bt._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && Lu(e, null),
      Jc(),
      Fs(e),
      t !== null && En(t, e, a, !0),
      null
    );
  }
  function ei(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function yr(t, e, l, a, n) {
    return (
      Fl(e),
      (l = Fc(t, e, l, a, void 0, n)),
      (a = Pc()),
      t !== null && !Qt
        ? (Ic(t, e, n), nl(t, e, n))
        : (mt && a && jc(e), (e.flags |= 1), kt(t, e, l, n), e.child)
    );
  }
  function dd(t, e, l, a, n, i) {
    return (
      Fl(e),
      (e.updateQueue = null),
      (l = ss(e, a, l, n)),
      os(t),
      (a = Pc()),
      t !== null && !Qt
        ? (Ic(t, e, i), nl(t, e, i))
        : (mt && a && jc(e), (e.flags |= 1), kt(t, e, l, i), e.child)
    );
  }
  function hd(t, e, l, a, n) {
    if ((Fl(e), e.stateNode === null)) {
      var i = Aa,
        o = l.contextType;
      typeof o == "object" && o !== null && (i = Pt(o)),
        (i = new l(a, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = hr),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = a),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Zc(e),
        (o = l.contextType),
        (i.context = typeof o == "object" && o !== null ? Pt(o) : Aa),
        (i.state = e.memoizedState),
        (o = l.getDerivedStateFromProps),
        typeof o == "function" && (dr(e, l, o, a), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((o = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          o !== i.state && hr.enqueueReplaceState(i, i.state, null),
          zn(e, a, i, n),
          On(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      i = e.stateNode;
      var d = e.memoizedProps,
        y = ta(l, d);
      i.props = y;
      var _ = i.context,
        C = l.contextType;
      (o = Aa), typeof C == "object" && C !== null && (o = Pt(C));
      var U = l.getDerivedStateFromProps;
      (C =
        typeof U == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (d = e.pendingProps !== d),
        C ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d || _ !== o) && Is(e, i, a, o)),
        (vl = !1);
      var w = e.memoizedState;
      (i.state = w),
        zn(e, a, i, n),
        On(),
        (_ = e.memoizedState),
        d || w !== _ || vl
          ? (typeof U == "function" && (dr(e, l, U, a), (_ = e.memoizedState)),
            (y = vl || Ps(e, l, y, a, w, _, o))
              ? (C ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = _)),
            (i.props = a),
            (i.state = _),
            (i.context = o),
            (a = y))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (i = e.stateNode),
        Vc(t, e),
        (o = e.memoizedProps),
        (C = ta(l, o)),
        (i.props = C),
        (U = e.pendingProps),
        (w = i.context),
        (_ = l.contextType),
        (y = Aa),
        typeof _ == "object" && _ !== null && (y = Pt(_)),
        (d = l.getDerivedStateFromProps),
        (_ =
          typeof d == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((o !== U || w !== y) && Is(e, i, a, y)),
        (vl = !1),
        (w = e.memoizedState),
        (i.state = w),
        zn(e, a, i, n),
        On();
      var O = e.memoizedState;
      o !== U ||
      w !== O ||
      vl ||
      (t !== null && t.dependencies !== null && Hu(t.dependencies))
        ? (typeof d == "function" && (dr(e, l, d, a), (O = e.memoizedState)),
          (C =
            vl ||
            Ps(e, l, C, a, w, O, y) ||
            (t !== null && t.dependencies !== null && Hu(t.dependencies)))
            ? (_ ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, O, y),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, O, y)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === t.memoizedProps && w === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === t.memoizedProps && w === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = O)),
          (i.props = a),
          (i.state = O),
          (i.context = y),
          (a = C))
        : (typeof i.componentDidUpdate != "function" ||
            (o === t.memoizedProps && w === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === t.memoizedProps && w === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      ei(t, e),
      (a = (e.flags & 128) !== 0),
      i || a
        ? ((i = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ja(e, t.child, null, n)),
              (e.child = ja(e, null, l, n)))
            : kt(t, e, l, n),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = nl(t, e, n)),
      t
    );
  }
  function md(t, e, l, a) {
    return Sn(), (e.flags |= 256), kt(t, e, l, a), e.child;
  }
  var pr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function vr(t) {
    return { baseLanes: t, cachePool: es() };
  }
  function gr(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Oe), t;
  }
  function yd(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      i = (e.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o =
          t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0),
      o && ((n = !0), (e.flags &= -129)),
      (o = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (mt) {
        if ((n ? xl(e) : El(), mt)) {
          var d = Nt,
            y;
          if ((y = d)) {
            t: {
              for (y = d, d = He; y.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break t;
                }
                if (((y = Me(y.nextSibling)), y === null)) {
                  d = null;
                  break t;
                }
              }
              d = y;
            }
            d !== null
              ? ((e.memoizedState = {
                  dehydrated: d,
                  treeContext: Kl !== null ? { id: Pe, overflow: Ie } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (y = he(18, null, null, 0)),
                (y.stateNode = d),
                (y.return = e),
                (e.child = y),
                (ee = e),
                (Nt = null),
                (y = !0))
              : (y = !1);
          }
          y || $l(e);
        }
        if (
          ((d = e.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return ef(d) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        al(e);
      }
      return (
        (d = a.children),
        (a = a.fallback),
        n
          ? (El(),
            (n = e.mode),
            (d = li({ mode: "hidden", children: d }, n)),
            (a = Vl(a, n, l, null)),
            (d.return = e),
            (a.return = e),
            (d.sibling = a),
            (e.child = d),
            (n = e.child),
            (n.memoizedState = vr(l)),
            (n.childLanes = gr(t, o, l)),
            (e.memoizedState = pr),
            a)
          : (xl(e), br(e, d))
      );
    }
    if (
      ((y = t.memoizedState), y !== null && ((d = y.dehydrated), d !== null))
    ) {
      if (i)
        e.flags & 256
          ? (xl(e), (e.flags &= -257), (e = Sr(t, e, l)))
          : e.memoizedState !== null
          ? (El(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (El(),
            (n = a.fallback),
            (d = e.mode),
            (a = li({ mode: "visible", children: a.children }, d)),
            (n = Vl(n, d, l, null)),
            (n.flags |= 2),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            ja(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = vr(l)),
            (a.childLanes = gr(t, o, l)),
            (e.memoizedState = pr),
            (e = n));
      else if ((xl(e), ef(d))) {
        if (((o = d.nextSibling && d.nextSibling.dataset), o)) var _ = o.dgst;
        (o = _),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = o),
          xn({ value: a, source: null, stack: null }),
          (e = Sr(t, e, l));
      } else if (
        (Qt || En(t, e, l, !1), (o = (l & t.childLanes) !== 0), Qt || o)
      ) {
        if (
          ((o = Rt),
          o !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : lc(a)),
            (a = (a & (o.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== y.retryLane))
        )
          throw ((y.retryLane = a), Ta(t, a), ge(o, t, a), id);
        d.data === "$?" || Lr(), (e = Sr(t, e, l));
      } else
        d.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = y.treeContext),
            (Nt = Me(d.nextSibling)),
            (ee = e),
            (mt = !0),
            (Jl = null),
            (He = !1),
            t !== null &&
              ((Re[_e++] = Pe),
              (Re[_e++] = Ie),
              (Re[_e++] = Kl),
              (Pe = t.id),
              (Ie = t.overflow),
              (Kl = e)),
            (e = br(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (El(),
        (n = a.fallback),
        (d = e.mode),
        (y = t.child),
        (_ = y.sibling),
        (a = Fe(y, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = y.subtreeFlags & 65011712),
        _ !== null ? (n = Fe(_, n)) : ((n = Vl(n, d, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (d = t.child.memoizedState),
        d === null
          ? (d = vr(l))
          : ((y = d.cachePool),
            y !== null
              ? ((_ = Bt._currentValue),
                (y = y.parent !== _ ? { parent: _, pool: _ } : y))
              : (y = es()),
            (d = { baseLanes: d.baseLanes | l, cachePool: y })),
        (n.memoizedState = d),
        (n.childLanes = gr(t, o, l)),
        (e.memoizedState = pr),
        a)
      : (xl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Fe(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((o = e.deletions),
          o === null ? ((e.deletions = [t]), (e.flags |= 16)) : o.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function br(t, e) {
    return (
      (e = li({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function li(t, e) {
    return (
      (t = he(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Sr(t, e, l) {
    return (
      ja(e, t.child, null, l),
      (t = br(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function pd(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Lc(t.return, e, l);
  }
  function xr(t, e, l, a, n) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n));
  }
  function vd(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((kt(t, e, a.children, l), (a = Lt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && pd(t, l, e);
          else if (t.tag === 19) pd(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((V(Lt, a), n)) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && Pu(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          xr(e, !1, n, l, i);
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && Pu(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        xr(e, !0, l, null, i);
        break;
      case "together":
        xr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function nl(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (wl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((En(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Fe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = Fe(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Er(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Hu(t)));
  }
  function Oy(t, e, l) {
    switch (e.tag) {
      case 3:
        yt(e, e.stateNode.containerInfo),
          pl(e, Bt, t.memoizedState.cache),
          Sn();
        break;
      case 27:
      case 5:
        ql(e);
        break;
      case 4:
        yt(e, e.stateNode.containerInfo);
        break;
      case 10:
        pl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (xl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? yd(t, e, l)
            : (xl(e), (t = nl(t, e, l)), t !== null ? t.sibling : null);
        xl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (En(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return vd(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          V(Lt, Lt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), od(t, e, l);
      case 24:
        pl(e, Bt, t.memoizedState.cache);
    }
    return nl(t, e, l);
  }
  function gd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!Er(t, l) && (e.flags & 128) === 0) return (Qt = !1), Oy(t, e, l);
        Qt = (t.flags & 131072) !== 0;
      }
    else (Qt = !1), mt && (e.flags & 1048576) !== 0 && Jo(e, Uu, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (((a = n(a._payload)), (e.type = a), typeof a == "function"))
            Dc(a)
              ? ((t = ta(a, t)), (e.tag = 1), (e = hd(null, e, a, t, l)))
              : ((e.tag = 0), (e = yr(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === k)) {
                (e.tag = 11), (e = cd(null, e, a, t, l));
                break t;
              } else if (n === $) {
                (e.tag = 14), (e = rd(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = ke(a) || a), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return yr(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = ta(a, e.pendingProps)), hd(t, e, a, n, l);
      case 3:
        t: {
          if ((yt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          (n = i.element), Vc(t, e), zn(e, a, null, l);
          var o = e.memoizedState;
          if (
            ((a = o.cache),
            pl(e, Bt, a),
            a !== i.cache && qc(e, [Bt], l, !0),
            On(),
            (a = o.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: o.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = md(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = Te(Error(r(424)), e)), xn(n), (e = md(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Nt = Me(t.firstChild),
                  ee = e,
                  mt = !0,
                  Jl = null,
                  He = !0,
                  l = Ws(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Sn(), a === n)) {
              e = nl(t, e, l);
              break t;
            }
            kt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ei(t, e),
          t === null
            ? (l = Eh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : mt ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = pi(et.current).createElement(l)),
                (a[Ft] = e),
                (a[ae] = t),
                $t(a, l, t),
                Xt(a),
                (e.stateNode = a))
            : (e.memoizedState = Eh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ql(e),
          t === null &&
            mt &&
            ((a = e.stateNode = bh(e.type, e.pendingProps, et.current)),
            (ee = e),
            (He = !0),
            (n = Nt),
            Dl(e.type) ? ((lf = n), (Nt = Me(a.firstChild))) : (Nt = n)),
          kt(t, e, e.pendingProps.children, l),
          ei(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            mt &&
            ((n = a = Nt) &&
              ((a = lp(a, e.type, e.pendingProps, He)),
              a !== null
                ? ((e.stateNode = a),
                  (ee = e),
                  (Nt = Me(a.firstChild)),
                  (He = !1),
                  (n = !0))
                : (n = !1)),
            n || $l(e)),
          ql(e),
          (n = e.type),
          (i = e.pendingProps),
          (o = t !== null ? t.memoizedProps : null),
          (a = i.children),
          Pr(n, i) ? (a = null) : o !== null && Pr(n, o) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Fc(t, e, Sy, null, null, l)), (Fn._currentValue = n)),
          ei(t, e),
          kt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            mt &&
            ((t = l = Nt) &&
              ((l = ap(l, e.pendingProps, He)),
              l !== null
                ? ((e.stateNode = l), (ee = e), (Nt = null), (t = !0))
                : (t = !1)),
            t || $l(e)),
          null
        );
      case 13:
        return yd(t, e, l);
      case 4:
        return (
          yt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ja(e, null, a, l)) : kt(t, e, a, l),
          e.child
        );
      case 11:
        return cd(t, e, e.type, e.pendingProps, l);
      case 7:
        return kt(t, e, e.pendingProps, l), e.child;
      case 8:
        return kt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return kt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          pl(e, e.type, a.value),
          kt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Fl(e),
          (n = Pt(n)),
          (a = a(n)),
          (e.flags |= 1),
          kt(t, e, a, l),
          e.child
        );
      case 14:
        return rd(t, e, e.type, e.pendingProps, l);
      case 15:
        return fd(t, e, e.type, e.pendingProps, l);
      case 19:
        return vd(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = li(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = Fe(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return od(t, e, l);
      case 24:
        return (
          Fl(e),
          (a = Pt(Bt)),
          t === null
            ? ((n = Xc()),
              n === null &&
                ((n = Rt),
                (i = Yc()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (e.memoizedState = { parent: a, cache: n }),
              Zc(e),
              pl(e, Bt, n))
            : ((t.lanes & l) !== 0 && (Vc(t, e), zn(e, null, null, l), On()),
              (n = t.memoizedState),
              (i = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  pl(e, Bt, a))
                : ((a = i.cache),
                  pl(e, Bt, a),
                  a !== n.cache && qc(e, [Bt], l, !0))),
          kt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ul(t) {
    t.flags |= 4;
  }
  function bd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !wh(e))) {
      if (
        ((e = we.current),
        e !== null &&
          ((dt & 4194048) === dt
            ? Be !== null
            : ((dt & 62914560) !== dt && (dt & 536870912) === 0) || e !== Be))
      )
        throw ((_n = Qc), ls);
      t.flags |= 8192;
    }
  }
  function ai(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Wf() : 536870912), (t.lanes |= e), (La |= e));
  }
  function Hn(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function zy(t, e, l) {
    var a = e.pendingProps;
    switch ((Uc(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          el(Bt),
          Wt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (bn(e)
              ? ul(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Fo())),
          Ot(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (ul(e),
              l !== null ? (Ot(e), bd(e, l)) : (Ot(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (ul(e), Ot(e), bd(e, l))
              : (Ot(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && ul(e), Ot(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Je(e), (l = et.current);
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && ul(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Ot(e), null;
          }
          (t = F.current),
            bn(e) ? $o(e) : ((t = bh(n, a, l)), (e.stateNode = t), ul(e));
        }
        return Ot(e), null;
      case 5:
        if ((Je(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && ul(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Ot(e), null;
          }
          if (((t = F.current), bn(e))) $o(e);
          else {
            switch (((n = pi(et.current)), t)) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = n.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (t[Ft] = e), (t[ae] = a);
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            e.stateNode = t;
            t: switch (($t(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && ul(e);
          }
        }
        return Ot(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && ul(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = et.current), bn(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = ee),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Ft] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                dh(t.nodeValue, l)
              )),
              t || $l(e);
          } else (t = pi(t).createTextNode(a)), (t[Ft] = e), (e.stateNode = t);
        }
        return Ot(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = bn(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(r(317));
              n[Ft] = e;
            } else
              Sn(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (n = !1);
          } else
            (n = Fo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (al(e), e) : (al(e), null);
        }
        if ((al(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          ai(e, e.updateQueue),
          Ot(e),
          null
        );
      case 4:
        return Wt(), t === null && kr(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return el(e.type), Ot(e), null;
      case 19:
        if ((Q(Lt), (n = e.memoizedState), n === null)) return Ot(e), null;
        if (((a = (e.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) Hn(n, !1);
          else {
            if (Dt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = Pu(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      Hn(n, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      ai(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    ko(l, t), (l = l.sibling);
                  return V(Lt, (Lt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null &&
              Ue() > ii &&
              ((e.flags |= 128), (a = !0), Hn(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Pu(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ai(e, t),
                Hn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !mt)
              )
                return Ot(e), null;
            } else
              2 * Ue() - n.renderingStartTime > ii &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), Hn(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = n.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Ue()),
            (e.sibling = null),
            (t = Lt.current),
            V(Lt, a ? (t & 1) | 2 : t & 1),
            e)
          : (Ot(e), null);
      case 22:
      case 23:
        return (
          al(e),
          $c(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (l = e.updateQueue),
          l !== null && ai(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Q(Pl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          el(Bt),
          Ot(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Ny(t, e) {
    switch ((Uc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          el(Bt),
          Wt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Je(e), null;
      case 13:
        if (
          (al(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Sn();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Q(Lt), null;
      case 4:
        return Wt(), null;
      case 10:
        return el(e.type), null;
      case 22:
      case 23:
        return (
          al(e),
          $c(),
          t !== null && Q(Pl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return el(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sd(t, e) {
    switch ((Uc(e), e.tag)) {
      case 3:
        el(Bt), Wt();
        break;
      case 26:
      case 27:
      case 5:
        Je(e);
        break;
      case 4:
        Wt();
        break;
      case 13:
        al(e);
        break;
      case 19:
        Q(Lt);
        break;
      case 10:
        el(e.type);
        break;
      case 22:
      case 23:
        al(e), $c(), t !== null && Q(Pl);
        break;
      case 24:
        el(Bt);
    }
  }
  function Bn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create,
              o = l.inst;
            (a = i()), (o.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      At(e, e.return, d);
    }
  }
  function Tl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var o = a.inst,
              d = o.destroy;
            if (d !== void 0) {
              (o.destroy = void 0), (n = e);
              var y = l,
                _ = d;
              try {
                _();
              } catch (C) {
                At(n, y, C);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (C) {
      At(e, e.return, C);
    }
  }
  function xd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        rs(e, l);
      } catch (a) {
        At(t, t.return, a);
      }
    }
  }
  function Ed(t, e, l) {
    (l.props = ta(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      At(t, e, a);
    }
  }
  function Ln(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      At(t, e, n);
    }
  }
  function Le(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          At(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          At(t, e, n);
        }
      else l.current = null;
  }
  function Td(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      At(t, t.return, n);
    }
  }
  function Tr(t, e, l) {
    try {
      var a = t.stateNode;
      Fy(a, t.type, l, e), (a[ae] = e);
    } catch (n) {
      At(t, t.return, n);
    }
  }
  function Ad(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Dl(t.type)) ||
      t.tag === 4
    );
  }
  function Ar(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ad(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Dl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Rr(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = yi));
    else if (
      a !== 4 &&
      (a === 27 && Dl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Rr(t, e, l), t = t.sibling; t !== null; )
        Rr(t, e, l), (t = t.sibling);
  }
  function ni(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Dl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (ni(t, e, l), t = t.sibling; t !== null; )
        ni(t, e, l), (t = t.sibling);
  }
  function Rd(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      $t(e, a, l), (e[Ft] = t), (e[ae] = l);
    } catch (i) {
      At(t, t.return, i);
    }
  }
  var il = !1,
    Mt = !1,
    _r = !1,
    _d = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null;
  function Dy(t, e) {
    if (((t = t.containerInfo), (Wr = Ei), (t = Bo(t)), Ac(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var o = 0,
              d = -1,
              y = -1,
              _ = 0,
              C = 0,
              U = t,
              w = null;
            e: for (;;) {
              for (
                var O;
                U !== l || (n !== 0 && U.nodeType !== 3) || (d = o + n),
                  U !== i || (a !== 0 && U.nodeType !== 3) || (y = o + a),
                  U.nodeType === 3 && (o += U.nodeValue.length),
                  (O = U.firstChild) !== null;

              )
                (w = U), (U = O);
              for (;;) {
                if (U === t) break e;
                if (
                  (w === l && ++_ === n && (d = o),
                  w === i && ++C === a && (y = o),
                  (O = U.nextSibling) !== null)
                )
                  break;
                (U = w), (w = U.parentNode);
              }
              U = O;
            }
            l = d === -1 || y === -1 ? null : { start: d, end: y };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Fr = { focusedElem: t, selectionRange: l }, Ei = !1, Zt = e;
      Zt !== null;

    )
      if (
        ((e = Zt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((e = Zt), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                (t = void 0),
                  (l = e),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var at = ta(l.type, n, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(at, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (tt) {
                  At(l, l.return, tt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  tf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      tf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Zt = t);
            break;
          }
          Zt = e.return;
        }
  }
  function wd(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(t, l), a & 4 && Bn(5, l);
        break;
      case 1:
        if ((Al(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (o) {
              At(l, l.return, o);
            }
          else {
            var n = ta(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (o) {
              At(l, l.return, o);
            }
          }
        a & 64 && xd(l), a & 512 && Ln(l, l.return);
        break;
      case 3:
        if ((Al(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            rs(t, e);
          } catch (o) {
            At(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Rd(l);
      case 26:
      case 5:
        Al(t, l), e === null && a & 4 && Td(l), a & 512 && Ln(l, l.return);
        break;
      case 12:
        Al(t, l);
        break;
      case 13:
        Al(t, l),
          a & 4 && Nd(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Yy.bind(null, l)), np(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || il), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Mt), (n = il);
          var i = Mt;
          (il = a),
            (Mt = e) && !i ? Rl(t, l, (l.subtreeFlags & 8772) !== 0) : Al(t, l),
            (il = n),
            (Mt = i);
        }
        break;
      case 30:
        break;
      default:
        Al(t, l);
    }
  }
  function Od(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Od(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && uc(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var wt = null,
    ie = !1;
  function cl(t, e, l) {
    for (l = l.child; l !== null; ) zd(t, e, l), (l = l.sibling);
  }
  function zd(t, e, l) {
    if (oe && typeof oe.onCommitFiberUnmount == "function")
      try {
        oe.onCommitFiberUnmount(nn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Mt || Le(l, e),
          cl(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Mt || Le(l, e);
        var a = wt,
          n = ie;
        Dl(l.type) && ((wt = l.stateNode), (ie = !1)),
          cl(t, e, l),
          kn(l.stateNode),
          (wt = a),
          (ie = n);
        break;
      case 5:
        Mt || Le(l, e);
      case 6:
        if (
          ((a = wt),
          (n = ie),
          (wt = null),
          cl(t, e, l),
          (wt = a),
          (ie = n),
          wt !== null)
        )
          if (ie)
            try {
              (wt.nodeType === 9
                ? wt.body
                : wt.nodeName === "HTML"
                ? wt.ownerDocument.body
                : wt
              ).removeChild(l.stateNode);
            } catch (i) {
              At(l, e, i);
            }
          else
            try {
              wt.removeChild(l.stateNode);
            } catch (i) {
              At(l, e, i);
            }
        break;
      case 18:
        wt !== null &&
          (ie
            ? ((t = wt),
              vh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              eu(t))
            : vh(wt, l.stateNode));
        break;
      case 4:
        (a = wt),
          (n = ie),
          (wt = l.stateNode.containerInfo),
          (ie = !0),
          cl(t, e, l),
          (wt = a),
          (ie = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Mt || Tl(2, l, e), Mt || Tl(4, l, e), cl(t, e, l);
        break;
      case 1:
        Mt ||
          (Le(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Ed(l, e, a)),
          cl(t, e, l);
        break;
      case 21:
        cl(t, e, l);
        break;
      case 22:
        (Mt = (a = Mt) || l.memoizedState !== null), cl(t, e, l), (Mt = a);
        break;
      default:
        cl(t, e, l);
    }
  }
  function Nd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        eu(t);
      } catch (l) {
        At(e, e.return, l);
      }
  }
  function Cy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _d()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new _d()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function wr(t, e) {
    var l = Cy(t);
    e.forEach(function (a) {
      var n = Gy.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function me(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = t,
          o = e,
          d = o;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Dl(d.type)) {
                (wt = d.stateNode), (ie = !1);
                break t;
              }
              break;
            case 5:
              (wt = d.stateNode), (ie = !1);
              break t;
            case 3:
            case 4:
              (wt = d.stateNode.containerInfo), (ie = !0);
              break t;
          }
          d = d.return;
        }
        if (wt === null) throw Error(r(160));
        zd(i, o, n),
          (wt = null),
          (ie = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Dd(e, t), (e = e.sibling);
  }
  var Ce = null;
  function Dd(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        me(e, t),
          ye(t),
          a & 4 && (Tl(3, t, t.return), Bn(3, t), Tl(5, t, t.return));
        break;
      case 1:
        me(e, t),
          ye(t),
          a & 512 && (Mt || l === null || Le(l, l.return)),
          a & 64 &&
            il &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Ce;
        if (
          (me(e, t),
          ye(t),
          a & 512 && (Mt || l === null || Le(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[rn] ||
                          i[Ft] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        $t(i, a, l),
                        (i[Ft] = t),
                        Xt(i),
                        (a = i);
                      break t;
                    case "link":
                      var o = Rh("link", "href", n).get(a + (l.href || ""));
                      if (o) {
                        for (var d = 0; d < o.length; d++)
                          if (
                            ((i = o[d]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(d, 1);
                            break e;
                          }
                      }
                      (i = n.createElement(a)),
                        $t(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (o = Rh("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (d = 0; d < o.length; d++)
                          if (
                            ((i = o[d]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(d, 1);
                            break e;
                          }
                      }
                      (i = n.createElement(a)),
                        $t(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (i[Ft] = t), Xt(i), (a = i);
                }
                t.stateNode = a;
              } else _h(n, t.type, t.stateNode);
            else t.stateNode = Ah(n, a, t.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? _h(n, t.type, t.stateNode)
                  : Ah(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Tr(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        me(e, t),
          ye(t),
          a & 512 && (Mt || l === null || Le(l, l.return)),
          l !== null && a & 4 && Tr(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (me(e, t),
          ye(t),
          a & 512 && (Mt || l === null || Le(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            pa(n, "");
          } catch (O) {
            At(t, t.return, O);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Tr(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (_r = !0);
        break;
      case 6:
        if ((me(e, t), ye(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (O) {
            At(t, t.return, O);
          }
        }
        break;
      case 3:
        if (
          ((bi = null),
          (n = Ce),
          (Ce = vi(e.containerInfo)),
          me(e, t),
          (Ce = n),
          ye(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            eu(e.containerInfo);
          } catch (O) {
            At(t, t.return, O);
          }
        _r && ((_r = !1), Cd(t));
        break;
      case 4:
        (a = Ce),
          (Ce = vi(t.stateNode.containerInfo)),
          me(e, t),
          ye(t),
          (Ce = a);
        break;
      case 12:
        me(e, t), ye(t);
        break;
      case 13:
        me(e, t),
          ye(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Mr = Ue()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), wr(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var y = l !== null && l.memoizedState !== null,
          _ = il,
          C = Mt;
        if (
          ((il = _ || n),
          (Mt = C || y),
          me(e, t),
          (Mt = C),
          (il = _),
          ye(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || y || il || Mt || ea(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                y = l = e;
                try {
                  if (((i = y.stateNode), n))
                    (o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none");
                  else {
                    d = y.stateNode;
                    var U = y.memoizedProps.style,
                      w =
                        U != null && U.hasOwnProperty("display")
                          ? U.display
                          : null;
                    d.style.display =
                      w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (O) {
                  At(y, y.return, O);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                y = e;
                try {
                  y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                } catch (O) {
                  At(y, y.return, O);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), wr(t, l))));
        break;
      case 19:
        me(e, t),
          ye(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), wr(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        me(e, t), ye(t);
    }
  }
  function ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ad(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = Ar(t);
            ni(t, i, n);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (pa(o, ""), (l.flags &= -33));
            var d = Ar(t);
            ni(t, d, o);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              _ = Ar(t);
            Rr(t, _, y);
            break;
          default:
            throw Error(r(161));
        }
      } catch (C) {
        At(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Cd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Cd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Al(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) wd(t, e.alternate, e), (e = e.sibling);
  }
  function ea(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Tl(4, e, e.return), ea(e);
          break;
        case 1:
          Le(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Ed(e, e.return, l),
            ea(e);
          break;
        case 27:
          kn(e.stateNode);
        case 26:
        case 5:
          Le(e, e.return), ea(e);
          break;
        case 22:
          e.memoizedState === null && ea(e);
          break;
        case 30:
          ea(e);
          break;
        default:
          ea(e);
      }
      t = t.sibling;
    }
  }
  function Rl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        i = e,
        o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Rl(n, i, l), Bn(4, i);
          break;
        case 1:
          if (
            (Rl(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (_) {
              At(a, a.return, _);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var d = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  cs(y[n], d);
            } catch (_) {
              At(a, a.return, _);
            }
          }
          l && o & 64 && xd(i), Ln(i, i.return);
          break;
        case 27:
          Rd(i);
        case 26:
        case 5:
          Rl(n, i, l), l && a === null && o & 4 && Td(i), Ln(i, i.return);
          break;
        case 12:
          Rl(n, i, l);
          break;
        case 13:
          Rl(n, i, l), l && o & 4 && Nd(n, i);
          break;
        case 22:
          i.memoizedState === null && Rl(n, i, l), Ln(i, i.return);
          break;
        case 30:
          break;
        default:
          Rl(n, i, l);
      }
      e = e.sibling;
    }
  }
  function Or(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Tn(l));
  }
  function zr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Tn(t));
  }
  function qe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Md(t, e, l, a), (e = e.sibling);
  }
  function Md(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qe(t, e, l, a), n & 2048 && Bn(9, e);
        break;
      case 1:
        qe(t, e, l, a);
        break;
      case 3:
        qe(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Tn(t)));
        break;
      case 12:
        if (n & 2048) {
          qe(t, e, l, a), (t = e.stateNode);
          try {
            var i = e.memoizedProps,
              o = i.id,
              d = i.onPostCommit;
            typeof d == "function" &&
              d(
                o,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (y) {
            At(e, e.return, y);
          }
        } else qe(t, e, l, a);
        break;
      case 13:
        qe(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = e.stateNode),
          (o = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? qe(t, e, l, a)
              : qn(t, e)
            : i._visibility & 2
            ? qe(t, e, l, a)
            : ((i._visibility |= 2),
              Ua(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && Or(o, e);
        break;
      case 24:
        qe(t, e, l, a), n & 2048 && zr(e.alternate, e);
        break;
      default:
        qe(t, e, l, a);
    }
  }
  function Ua(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var i = t,
        o = e,
        d = l,
        y = a,
        _ = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Ua(i, o, d, y, n), Bn(8, o);
          break;
        case 23:
          break;
        case 22:
          var C = o.stateNode;
          o.memoizedState !== null
            ? C._visibility & 2
              ? Ua(i, o, d, y, n)
              : qn(i, o)
            : ((C._visibility |= 2), Ua(i, o, d, y, n)),
            n && _ & 2048 && Or(o.alternate, o);
          break;
        case 24:
          Ua(i, o, d, y, n), n && _ & 2048 && zr(o.alternate, o);
          break;
        default:
          Ua(i, o, d, y, n);
      }
      e = e.sibling;
    }
  }
  function qn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            qn(l, a), n & 2048 && Or(a.alternate, a);
            break;
          case 24:
            qn(l, a), n & 2048 && zr(a.alternate, a);
            break;
          default:
            qn(l, a);
        }
        e = e.sibling;
      }
  }
  var Yn = 8192;
  function Ha(t) {
    if (t.subtreeFlags & Yn)
      for (t = t.child; t !== null; ) jd(t), (t = t.sibling);
  }
  function jd(t) {
    switch (t.tag) {
      case 26:
        Ha(t),
          t.flags & Yn &&
            t.memoizedState !== null &&
            vp(Ce, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ha(t);
        break;
      case 3:
      case 4:
        var e = Ce;
        (Ce = vi(t.stateNode.containerInfo)), Ha(t), (Ce = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Yn), (Yn = 16777216), Ha(t), (Yn = e))
            : Ha(t));
        break;
      default:
        Ha(t);
    }
  }
  function Ud(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Gn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Zt = a), Bd(a, t);
        }
      Ud(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Hd(t), (t = t.sibling);
  }
  function Hd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gn(t), t.flags & 2048 && Tl(9, t, t.return);
        break;
      case 3:
        Gn(t);
        break;
      case 12:
        Gn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ui(t))
          : Gn(t);
        break;
      default:
        Gn(t);
    }
  }
  function ui(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Zt = a), Bd(a, t);
        }
      Ud(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Tl(8, e, e.return), ui(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), ui(e));
          break;
        default:
          ui(e);
      }
      t = t.sibling;
    }
  }
  function Bd(t, e) {
    for (; Zt !== null; ) {
      var l = Zt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Tl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Tn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Zt = a);
      else
        t: for (l = t; Zt !== null; ) {
          a = Zt;
          var n = a.sibling,
            i = a.return;
          if ((Od(a), a === l)) {
            Zt = null;
            break t;
          }
          if (n !== null) {
            (n.return = i), (Zt = n);
            break t;
          }
          Zt = i;
        }
    }
  }
  var My = {
      getCacheForType: function (t) {
        var e = Pt(Bt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    jy = typeof WeakMap == "function" ? WeakMap : Map,
    vt = 0,
    Rt = null,
    ot = null,
    dt = 0,
    gt = 0,
    pe = null,
    _l = !1,
    Ba = !1,
    Nr = !1,
    rl = 0,
    Dt = 0,
    wl = 0,
    la = 0,
    Dr = 0,
    Oe = 0,
    La = 0,
    Xn = null,
    ce = null,
    Cr = !1,
    Mr = 0,
    ii = 1 / 0,
    ci = null,
    Ol = null,
    Jt = 0,
    zl = null,
    qa = null,
    Ya = 0,
    jr = 0,
    Ur = null,
    Ld = null,
    Qn = 0,
    Hr = null;
  function ve() {
    if ((vt & 2) !== 0 && dt !== 0) return dt & -dt;
    if (D.T !== null) {
      var t = wa;
      return t !== 0 ? t : Qr();
    }
    return If();
  }
  function qd() {
    Oe === 0 && (Oe = (dt & 536870912) === 0 || mt ? $f() : 536870912);
    var t = we.current;
    return t !== null && (t.flags |= 32), Oe;
  }
  function ge(t, e, l) {
    ((t === Rt && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null) &&
      (Ga(t, 0), Nl(t, dt, Oe, !1)),
      cn(t, l),
      ((vt & 2) === 0 || t !== Rt) &&
        (t === Rt &&
          ((vt & 2) === 0 && (la |= l), Dt === 4 && Nl(t, dt, Oe, !1)),
        Ye(t));
  }
  function Yd(t, e, l) {
    if ((vt & 6) !== 0) throw Error(r(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || un(t, e),
      n = a ? By(t, e) : qr(t, e, !0),
      i = a;
    do {
      if (n === 0) {
        Ba && !a && Nl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !Uy(l))) {
          (n = qr(t, e, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var o = 0;
          else
            (o = t.pendingLanes & -536870913),
              (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0);
          if (o !== 0) {
            e = o;
            t: {
              var d = t;
              n = Xn;
              var y = d.current.memoizedState.isDehydrated;
              if ((y && (Ga(d, o).flags |= 256), (o = qr(d, o, !1)), o !== 2)) {
                if (Nr && !y) {
                  (d.errorRecoveryDisabledLanes |= i), (la |= i), (n = 4);
                  break t;
                }
                (i = ce),
                  (ce = n),
                  i !== null && (ce === null ? (ce = i) : ce.push.apply(ce, i));
              }
              n = o;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Ga(t, 0), Nl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (i = n), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Nl(a, e, Oe, !_l);
              break t;
            case 2:
              ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((n = Mr + 300 - Ue()), 10 < n)) {
            if ((Nl(a, e, Oe, !_l), gu(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = yh(
              Gd.bind(null, a, l, ce, ci, Cr, e, Oe, la, La, _l, i, 2, -0, 0),
              n
            );
            break t;
          }
          Gd(a, l, ce, ci, Cr, e, Oe, la, La, _l, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ye(t);
  }
  function Gd(t, e, l, a, n, i, o, d, y, _, C, U, w, O) {
    if (
      ((t.timeoutHandle = -1),
      (U = e.subtreeFlags),
      (U & 8192 || (U & 16785408) === 16785408) &&
        ((Wn = { stylesheets: null, count: 0, unsuspend: pp }),
        jd(e),
        (U = gp()),
        U !== null))
    ) {
      (t.cancelPendingCommit = U(
        Jd.bind(null, t, e, i, l, a, n, o, d, y, C, 1, w, O)
      )),
        Nl(t, i, o, !_);
      return;
    }
    Jd(t, e, i, l, a, n, o, d, y);
  }
  function Uy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!de(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Nl(t, e, l, a) {
    (e &= ~Dr),
      (e &= ~la),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var i = 31 - se(n),
        o = 1 << i;
      (a[i] = -1), (n &= ~o);
    }
    l !== 0 && Ff(t, l, e);
  }
  function ri() {
    return (vt & 6) === 0 ? (Zn(0), !1) : !0;
  }
  function Br() {
    if (ot !== null) {
      if (gt === 0) var t = ot.return;
      else (t = ot), (tl = Wl = null), tr(t), (Ma = null), (jn = 0), (t = ot);
      for (; t !== null; ) Sd(t.alternate, t), (t = t.return);
      ot = null;
    }
  }
  function Ga(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Iy(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Br(),
      (Rt = t),
      (ot = l = Fe(t.current, null)),
      (dt = e),
      (gt = 0),
      (pe = null),
      (_l = !1),
      (Ba = un(t, e)),
      (Nr = !1),
      (La = Oe = Dr = la = wl = Dt = 0),
      (ce = Xn = null),
      (Cr = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - se(a),
          i = 1 << n;
        (e |= t[n]), (a &= ~i);
      }
    return (rl = e), Nu(), l;
  }
  function Xd(t, e) {
    (it = null),
      (D.H = $u),
      e === Rn || e === qu
        ? ((e = us()), (gt = 3))
        : e === ls
        ? ((e = us()), (gt = 4))
        : (gt =
            e === id
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (pe = e),
      ot === null && ((Dt = 1), ti(t, Te(e, t.current)));
  }
  function Qd() {
    var t = D.H;
    return (D.H = $u), t === null ? $u : t;
  }
  function Zd() {
    var t = D.A;
    return (D.A = My), t;
  }
  function Lr() {
    (Dt = 4),
      _l || ((dt & 4194048) !== dt && we.current !== null) || (Ba = !0),
      ((wl & 134217727) === 0 && (la & 134217727) === 0) ||
        Rt === null ||
        Nl(Rt, dt, Oe, !1);
  }
  function qr(t, e, l) {
    var a = vt;
    vt |= 2;
    var n = Qd(),
      i = Zd();
    (Rt !== t || dt !== e) && ((ci = null), Ga(t, e)), (e = !1);
    var o = Dt;
    t: do
      try {
        if (gt !== 0 && ot !== null) {
          var d = ot,
            y = pe;
          switch (gt) {
            case 8:
              Br(), (o = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              we.current === null && (e = !0);
              var _ = gt;
              if (((gt = 0), (pe = null), Xa(t, d, y, _), l && Ba)) {
                o = 0;
                break t;
              }
              break;
            default:
              (_ = gt), (gt = 0), (pe = null), Xa(t, d, y, _);
          }
        }
        Hy(), (o = Dt);
        break;
      } catch (C) {
        Xd(t, C);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (tl = Wl = null),
      (vt = a),
      (D.H = n),
      (D.A = i),
      ot === null && ((Rt = null), (dt = 0), Nu()),
      o
    );
  }
  function Hy() {
    for (; ot !== null; ) Vd(ot);
  }
  function By(t, e) {
    var l = vt;
    vt |= 2;
    var a = Qd(),
      n = Zd();
    Rt !== t || dt !== e
      ? ((ci = null), (ii = Ue() + 500), Ga(t, e))
      : (Ba = un(t, e));
    t: do
      try {
        if (gt !== 0 && ot !== null) {
          e = ot;
          var i = pe;
          e: switch (gt) {
            case 1:
              (gt = 0), (pe = null), Xa(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (as(i)) {
                (gt = 0), (pe = null), Kd(e);
                break;
              }
              (e = function () {
                (gt !== 2 && gt !== 9) || Rt !== t || (gt = 7), Ye(t);
              }),
                i.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              as(i)
                ? ((gt = 0), (pe = null), Kd(e))
                : ((gt = 0), (pe = null), Xa(t, e, i, 7));
              break;
            case 5:
              var o = null;
              switch (ot.tag) {
                case 26:
                  o = ot.memoizedState;
                case 5:
                case 27:
                  var d = ot;
                  if (!o || wh(o)) {
                    (gt = 0), (pe = null);
                    var y = d.sibling;
                    if (y !== null) ot = y;
                    else {
                      var _ = d.return;
                      _ !== null ? ((ot = _), fi(_)) : (ot = null);
                    }
                    break e;
                  }
              }
              (gt = 0), (pe = null), Xa(t, e, i, 5);
              break;
            case 6:
              (gt = 0), (pe = null), Xa(t, e, i, 6);
              break;
            case 8:
              Br(), (Dt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        Ly();
        break;
      } catch (C) {
        Xd(t, C);
      }
    while (!0);
    return (
      (tl = Wl = null),
      (D.H = a),
      (D.A = n),
      (vt = l),
      ot !== null ? 0 : ((Rt = null), (dt = 0), Nu(), Dt)
    );
  }
  function Ly() {
    for (; ot !== null && !i0(); ) Vd(ot);
  }
  function Vd(t) {
    var e = gd(t.alternate, t, rl);
    (t.memoizedProps = t.pendingProps), e === null ? fi(t) : (ot = e);
  }
  function Kd(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = dd(l, e, e.pendingProps, e.type, void 0, dt);
        break;
      case 11:
        e = dd(l, e, e.pendingProps, e.type.render, e.ref, dt);
        break;
      case 5:
        tr(e);
      default:
        Sd(l, e), (e = ot = ko(e, rl)), (e = gd(l, e, rl));
    }
    (t.memoizedProps = t.pendingProps), e === null ? fi(t) : (ot = e);
  }
  function Xa(t, e, l, a) {
    (tl = Wl = null), tr(e), (Ma = null), (jn = 0);
    var n = e.return;
    try {
      if (wy(t, n, e, l, dt)) {
        (Dt = 1), ti(t, Te(l, t.current)), (ot = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((ot = n), i);
      (Dt = 1), ti(t, Te(l, t.current)), (ot = null);
      return;
    }
    e.flags & 32768
      ? (mt || a === 1
          ? (t = !0)
          : Ba || (dt & 536870912) !== 0
          ? (t = !1)
          : ((_l = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = we.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        kd(e, t))
      : fi(e);
  }
  function fi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        kd(e, _l);
        return;
      }
      t = e.return;
      var l = zy(e.alternate, e, rl);
      if (l !== null) {
        ot = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ot = e;
        return;
      }
      ot = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function kd(t, e) {
    do {
      var l = Ny(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (ot = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ot = t;
        return;
      }
      ot = t = l;
    } while (t !== null);
    (Dt = 6), (ot = null);
  }
  function Jd(t, e, l, a, n, i, o, d, y) {
    t.cancelPendingCommit = null;
    do oi();
    while (Jt !== 0);
    if ((vt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= zc),
        p0(t, l, i, o, d, y),
        t === Rt && ((ot = Rt = null), (dt = 0)),
        (qa = e),
        (zl = t),
        (Ya = l),
        (jr = i),
        (Ur = n),
        (Ld = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Xy(yu, function () {
              return Id(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = D.T), (D.T = null), (n = Z.p), (Z.p = 2), (o = vt), (vt |= 4);
        try {
          Dy(t, e, l);
        } finally {
          (vt = o), (Z.p = n), (D.T = a);
        }
      }
      (Jt = 1), $d(), Wd(), Fd();
    }
  }
  function $d() {
    if (Jt === 1) {
      Jt = 0;
      var t = zl,
        e = qa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = D.T), (D.T = null);
        var a = Z.p;
        Z.p = 2;
        var n = vt;
        vt |= 4;
        try {
          Dd(e, t);
          var i = Fr,
            o = Bo(t.containerInfo),
            d = i.focusedElem,
            y = i.selectionRange;
          if (
            o !== d &&
            d &&
            d.ownerDocument &&
            Ho(d.ownerDocument.documentElement, d)
          ) {
            if (y !== null && Ac(d)) {
              var _ = y.start,
                C = y.end;
              if ((C === void 0 && (C = _), "selectionStart" in d))
                (d.selectionStart = _),
                  (d.selectionEnd = Math.min(C, d.value.length));
              else {
                var U = d.ownerDocument || document,
                  w = (U && U.defaultView) || window;
                if (w.getSelection) {
                  var O = w.getSelection(),
                    at = d.textContent.length,
                    tt = Math.min(y.start, at),
                    Et = y.end === void 0 ? tt : Math.min(y.end, at);
                  !O.extend && tt > Et && ((o = Et), (Et = tt), (tt = o));
                  var T = Uo(d, tt),
                    S = Uo(d, Et);
                  if (
                    T &&
                    S &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== T.node ||
                      O.anchorOffset !== T.offset ||
                      O.focusNode !== S.node ||
                      O.focusOffset !== S.offset)
                  ) {
                    var R = U.createRange();
                    R.setStart(T.node, T.offset),
                      O.removeAllRanges(),
                      tt > Et
                        ? (O.addRange(R), O.extend(S.node, S.offset))
                        : (R.setEnd(S.node, S.offset), O.addRange(R));
                  }
                }
              }
            }
            for (U = [], O = d; (O = O.parentNode); )
              O.nodeType === 1 &&
                U.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < U.length;
              d++
            ) {
              var M = U[d];
              (M.element.scrollLeft = M.left), (M.element.scrollTop = M.top);
            }
          }
          (Ei = !!Wr), (Fr = Wr = null);
        } finally {
          (vt = n), (Z.p = a), (D.T = l);
        }
      }
      (t.current = e), (Jt = 2);
    }
  }
  function Wd() {
    if (Jt === 2) {
      Jt = 0;
      var t = zl,
        e = qa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = D.T), (D.T = null);
        var a = Z.p;
        Z.p = 2;
        var n = vt;
        vt |= 4;
        try {
          wd(t, e.alternate, e);
        } finally {
          (vt = n), (Z.p = a), (D.T = l);
        }
      }
      Jt = 3;
    }
  }
  function Fd() {
    if (Jt === 4 || Jt === 3) {
      (Jt = 0), c0();
      var t = zl,
        e = qa,
        l = Ya,
        a = Ld;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (qa = zl = null), Pd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (Ol = null),
        ac(l),
        (e = e.stateNode),
        oe && typeof oe.onCommitFiberRoot == "function")
      )
        try {
          oe.onCommitFiberRoot(nn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = D.T), (n = Z.p), (Z.p = 2), (D.T = null);
        try {
          for (var i = t.onRecoverableError, o = 0; o < a.length; o++) {
            var d = a[o];
            i(d.value, { componentStack: d.stack });
          }
        } finally {
          (D.T = e), (Z.p = n);
        }
      }
      (Ya & 3) !== 0 && oi(),
        Ye(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? t === Hr
            ? Qn++
            : ((Qn = 0), (Hr = t))
          : (Qn = 0),
        Zn(0);
    }
  }
  function Pd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Tn(e)));
  }
  function oi(t) {
    return $d(), Wd(), Fd(), Id();
  }
  function Id() {
    if (Jt !== 5) return !1;
    var t = zl,
      e = jr;
    jr = 0;
    var l = ac(Ya),
      a = D.T,
      n = Z.p;
    try {
      (Z.p = 32 > l ? 32 : l), (D.T = null), (l = Ur), (Ur = null);
      var i = zl,
        o = Ya;
      if (((Jt = 0), (qa = zl = null), (Ya = 0), (vt & 6) !== 0))
        throw Error(r(331));
      var d = vt;
      if (
        ((vt |= 4),
        Hd(i.current),
        Md(i, i.current, o, l),
        (vt = d),
        Zn(0, !1),
        oe && typeof oe.onPostCommitFiberRoot == "function")
      )
        try {
          oe.onPostCommitFiberRoot(nn, i);
        } catch {}
      return !0;
    } finally {
      (Z.p = n), (D.T = a), Pd(t, e);
    }
  }
  function th(t, e, l) {
    (e = Te(l, e)),
      (e = mr(t.stateNode, e, 2)),
      (t = bl(t, e, 2)),
      t !== null && (cn(t, 2), Ye(t));
  }
  function At(t, e, l) {
    if (t.tag === 3) th(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          th(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Ol === null || !Ol.has(a)))
          ) {
            (t = Te(l, t)),
              (l = nd(2)),
              (a = bl(e, l, 2)),
              a !== null && (ud(l, a, e, t), cn(a, 2), Ye(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Yr(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new jy();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((Nr = !0), n.add(l), (t = qy.bind(null, t, e, l)), e.then(t, t));
  }
  function qy(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Rt === t &&
        (dt & l) === l &&
        (Dt === 4 || (Dt === 3 && (dt & 62914560) === dt && 300 > Ue() - Mr)
          ? (vt & 2) === 0 && Ga(t, 0)
          : (Dr |= l),
        La === dt && (La = 0)),
      Ye(t);
  }
  function eh(t, e) {
    e === 0 && (e = Wf()), (t = Ta(t, e)), t !== null && (cn(t, e), Ye(t));
  }
  function Yy(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), eh(t, l);
  }
  function Gy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), eh(t, l);
  }
  function Xy(t, e) {
    return Ii(t, e);
  }
  var si = null,
    Qa = null,
    Gr = !1,
    di = !1,
    Xr = !1,
    aa = 0;
  function Ye(t) {
    t !== Qa &&
      t.next === null &&
      (Qa === null ? (si = Qa = t) : (Qa = Qa.next = t)),
      (di = !0),
      Gr || ((Gr = !0), Zy());
  }
  function Zn(t, e) {
    if (!Xr && di) {
      Xr = !0;
      do
        for (var l = !1, a = si; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var o = a.suspendedLanes,
                d = a.pingedLanes;
              (i = (1 << (31 - se(42 | t) + 1)) - 1),
                (i &= n & ~(o & ~d)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), uh(a, i));
          } else
            (i = dt),
              (i = gu(
                a,
                a === Rt ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || un(a, i) || ((l = !0), uh(a, i));
          a = a.next;
        }
      while (l);
      Xr = !1;
    }
  }
  function Qy() {
    lh();
  }
  function lh() {
    di = Gr = !1;
    var t = 0;
    aa !== 0 && (Py() && (t = aa), (aa = 0));
    for (var e = Ue(), l = null, a = si; a !== null; ) {
      var n = a.next,
        i = ah(a, e);
      i === 0
        ? ((a.next = null),
          l === null ? (si = n) : (l.next = n),
          n === null && (Qa = l))
        : ((l = a), (t !== 0 || (i & 3) !== 0) && (di = !0)),
        (a = n);
    }
    Zn(t);
  }
  function ah(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;

    ) {
      var o = 31 - se(i),
        d = 1 << o,
        y = n[o];
      y === -1
        ? ((d & l) === 0 || (d & a) !== 0) && (n[o] = y0(d, e))
        : y <= e && (t.expiredLanes |= d),
        (i &= ~d);
    }
    if (
      ((e = Rt),
      (l = dt),
      (l = gu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (gt === 2 || gt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && tc(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || un(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && tc(a), ac(l))) {
        case 2:
        case 8:
          l = kf;
          break;
        case 32:
          l = yu;
          break;
        case 268435456:
          l = Jf;
          break;
        default:
          l = yu;
      }
      return (
        (a = nh.bind(null, t)),
        (l = Ii(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && tc(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function nh(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (oi() && t.callbackNode !== l) return null;
    var a = dt;
    return (
      (a = gu(
        t,
        t === Rt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Yd(t, a, e),
          ah(t, Ue()),
          t.callbackNode != null && t.callbackNode === l
            ? nh.bind(null, t)
            : null)
    );
  }
  function uh(t, e) {
    if (oi()) return null;
    Yd(t, e, !0);
  }
  function Zy() {
    tp(function () {
      (vt & 6) !== 0 ? Ii(Kf, Qy) : lh();
    });
  }
  function Qr() {
    return aa === 0 && (aa = $f()), aa;
  }
  function ih(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Tu("" + t);
  }
  function ch(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Vy(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = ih((n[ae] || null).action),
        o = a.submitter;
      o &&
        ((e = (e = o[ae] || null)
          ? ih(e.formAction)
          : o.getAttribute("formAction")),
        e !== null && ((i = e), (o = null)));
      var d = new wu("action", "action", null, a, n);
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (aa !== 0) {
                  var y = o ? ch(n, o) : new FormData(n);
                  fr(
                    l,
                    { pending: !0, data: y, method: n.method, action: i },
                    null,
                    y
                  );
                }
              } else
                typeof i == "function" &&
                  (d.preventDefault(),
                  (y = o ? ch(n, o) : new FormData(n)),
                  fr(
                    l,
                    { pending: !0, data: y, method: n.method, action: i },
                    i,
                    y
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Zr = 0; Zr < Oc.length; Zr++) {
    var Vr = Oc[Zr],
      Ky = Vr.toLowerCase(),
      ky = Vr[0].toUpperCase() + Vr.slice(1);
    De(Ky, "on" + ky);
  }
  De(Yo, "onAnimationEnd"),
    De(Go, "onAnimationIteration"),
    De(Xo, "onAnimationStart"),
    De("dblclick", "onDoubleClick"),
    De("focusin", "onFocus"),
    De("focusout", "onBlur"),
    De(oy, "onTransitionRun"),
    De(sy, "onTransitionStart"),
    De(dy, "onTransitionCancel"),
    De(Qo, "onTransitionEnd"),
    ha("onMouseEnter", ["mouseout", "mouseover"]),
    ha("onMouseLeave", ["mouseout", "mouseover"]),
    ha("onPointerEnter", ["pointerout", "pointerover"]),
    ha("onPointerLeave", ["pointerout", "pointerover"]),
    Gl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Gl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Gl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Gl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Gl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Gl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Vn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Jy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Vn)
    );
  function rh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var o = a.length - 1; 0 <= o; o--) {
            var d = a[o],
              y = d.instance,
              _ = d.currentTarget;
            if (((d = d.listener), y !== i && n.isPropagationStopped()))
              break t;
            (i = d), (n.currentTarget = _);
            try {
              i(n);
            } catch (C) {
              Iu(C);
            }
            (n.currentTarget = null), (i = y);
          }
        else
          for (o = 0; o < a.length; o++) {
            if (
              ((d = a[o]),
              (y = d.instance),
              (_ = d.currentTarget),
              (d = d.listener),
              y !== i && n.isPropagationStopped())
            )
              break t;
            (i = d), (n.currentTarget = _);
            try {
              i(n);
            } catch (C) {
              Iu(C);
            }
            (n.currentTarget = null), (i = y);
          }
      }
    }
  }
  function st(t, e) {
    var l = e[nc];
    l === void 0 && (l = e[nc] = new Set());
    var a = t + "__bubble";
    l.has(a) || (fh(e, t, 2, !1), l.add(a));
  }
  function Kr(t, e, l) {
    var a = 0;
    e && (a |= 4), fh(l, t, a, e);
  }
  var hi = "_reactListening" + Math.random().toString(36).slice(2);
  function kr(t) {
    if (!t[hi]) {
      (t[hi] = !0),
        eo.forEach(function (l) {
          l !== "selectionchange" && (Jy.has(l) || Kr(l, !1, t), Kr(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[hi] || ((e[hi] = !0), Kr("selectionchange", !1, e));
    }
  }
  function fh(t, e, l, a) {
    switch (Mh(e)) {
      case 2:
        var n = xp;
        break;
      case 8:
        n = Ep;
        break;
      default:
        n = rf;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !yc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function Jr(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var o = a.tag;
        if (o === 3 || o === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (o === 4)
            for (o = a.return; o !== null; ) {
              var y = o.tag;
              if ((y === 3 || y === 4) && o.stateNode.containerInfo === n)
                return;
              o = o.return;
            }
          for (; d !== null; ) {
            if (((o = oa(d)), o === null)) return;
            if (((y = o.tag), y === 5 || y === 6 || y === 26 || y === 27)) {
              a = i = o;
              continue t;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    po(function () {
      var _ = i,
        C = hc(l),
        U = [];
      t: {
        var w = Zo.get(t);
        if (w !== void 0) {
          var O = wu,
            at = t;
          switch (t) {
            case "keypress":
              if (Ru(l) === 0) break t;
            case "keydown":
            case "keyup":
              O = X0;
              break;
            case "focusin":
              (at = "focus"), (O = bc);
              break;
            case "focusout":
              (at = "blur"), (O = bc);
              break;
            case "beforeblur":
            case "afterblur":
              O = bc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = bo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = N0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = V0;
              break;
            case Yo:
            case Go:
            case Xo:
              O = M0;
              break;
            case Qo:
              O = k0;
              break;
            case "scroll":
            case "scrollend":
              O = O0;
              break;
            case "wheel":
              O = $0;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = U0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = xo;
              break;
            case "toggle":
            case "beforetoggle":
              O = F0;
          }
          var tt = (e & 4) !== 0,
            Et = !tt && (t === "scroll" || t === "scrollend"),
            T = tt ? (w !== null ? w + "Capture" : null) : w;
          tt = [];
          for (var S = _, R; S !== null; ) {
            var M = S;
            if (
              ((R = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                R === null ||
                T === null ||
                ((M = on(S, T)), M != null && tt.push(Kn(S, M, R))),
              Et)
            )
              break;
            S = S.return;
          }
          0 < tt.length &&
            ((w = new O(w, at, null, l, C)),
            U.push({ event: w, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((w = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            w &&
              l !== dc &&
              (at = l.relatedTarget || l.fromElement) &&
              (oa(at) || at[fa]))
          )
            break t;
          if (
            (O || w) &&
            ((w =
              C.window === C
                ? C
                : (w = C.ownerDocument)
                ? w.defaultView || w.parentWindow
                : window),
            O
              ? ((at = l.relatedTarget || l.toElement),
                (O = _),
                (at = at ? oa(at) : null),
                at !== null &&
                  ((Et = h(at)),
                  (tt = at.tag),
                  at !== Et || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (at = null))
              : ((O = null), (at = _)),
            O !== at)
          ) {
            if (
              ((tt = bo),
              (M = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = xo),
                (M = "onPointerLeave"),
                (T = "onPointerEnter"),
                (S = "pointer")),
              (Et = O == null ? w : fn(O)),
              (R = at == null ? w : fn(at)),
              (w = new tt(M, S + "leave", O, l, C)),
              (w.target = Et),
              (w.relatedTarget = R),
              (M = null),
              oa(C) === _ &&
                ((tt = new tt(T, S + "enter", at, l, C)),
                (tt.target = R),
                (tt.relatedTarget = Et),
                (M = tt)),
              (Et = M),
              O && at)
            )
              e: {
                for (tt = O, T = at, S = 0, R = tt; R; R = Za(R)) S++;
                for (R = 0, M = T; M; M = Za(M)) R++;
                for (; 0 < S - R; ) (tt = Za(tt)), S--;
                for (; 0 < R - S; ) (T = Za(T)), R--;
                for (; S--; ) {
                  if (tt === T || (T !== null && tt === T.alternate)) break e;
                  (tt = Za(tt)), (T = Za(T));
                }
                tt = null;
              }
            else tt = null;
            O !== null && oh(U, w, O, tt, !1),
              at !== null && Et !== null && oh(U, Et, at, tt, !0);
          }
        }
        t: {
          if (
            ((w = _ ? fn(_) : window),
            (O = w.nodeName && w.nodeName.toLowerCase()),
            O === "select" || (O === "input" && w.type === "file"))
          )
            var J = zo;
          else if (wo(w))
            if (No) J = cy;
            else {
              J = uy;
              var ct = ny;
            }
          else
            (O = w.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (w.type !== "checkbox" && w.type !== "radio")
                ? _ && sc(_.elementType) && (J = zo)
                : (J = iy);
          if (J && (J = J(t, _))) {
            Oo(U, J, l, C);
            break t;
          }
          ct && ct(t, w, _),
            t === "focusout" &&
              _ &&
              w.type === "number" &&
              _.memoizedProps.value != null &&
              oc(w, "number", w.value);
        }
        switch (((ct = _ ? fn(_) : window), t)) {
          case "focusin":
            (wo(ct) || ct.contentEditable === "true") &&
              ((Sa = ct), (Rc = _), (gn = null));
            break;
          case "focusout":
            gn = Rc = Sa = null;
            break;
          case "mousedown":
            _c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_c = !1), Lo(U, l, C);
            break;
          case "selectionchange":
            if (fy) break;
          case "keydown":
          case "keyup":
            Lo(U, l, C);
        }
        var W;
        if (xc)
          t: {
            switch (t) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break t;
              case "compositionend":
                lt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break t;
            }
            lt = void 0;
          }
        else
          ba
            ? Ro(t, l) && (lt = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (lt = "onCompositionStart");
        lt &&
          (Eo &&
            l.locale !== "ko" &&
            (ba || lt !== "onCompositionStart"
              ? lt === "onCompositionEnd" && ba && (W = vo())
              : ((yl = C),
                (pc = "value" in yl ? yl.value : yl.textContent),
                (ba = !0))),
          (ct = mi(_, lt)),
          0 < ct.length &&
            ((lt = new So(lt, t, null, l, C)),
            U.push({ event: lt, listeners: ct }),
            W ? (lt.data = W) : ((W = _o(l)), W !== null && (lt.data = W)))),
          (W = I0 ? ty(t, l) : ey(t, l)) &&
            ((lt = mi(_, "onBeforeInput")),
            0 < lt.length &&
              ((ct = new So("onBeforeInput", "beforeinput", null, l, C)),
              U.push({ event: ct, listeners: lt }),
              (ct.data = W))),
          Vy(U, t, _, l, C);
      }
      rh(U, e);
    });
  }
  function Kn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function mi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = on(t, l)),
          n != null && a.unshift(Kn(t, n, i)),
          (n = on(t, e)),
          n != null && a.push(Kn(t, n, i))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Za(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function oh(t, e, l, a, n) {
    for (var i = e._reactName, o = []; l !== null && l !== a; ) {
      var d = l,
        y = d.alternate,
        _ = d.stateNode;
      if (((d = d.tag), y !== null && y === a)) break;
      (d !== 5 && d !== 26 && d !== 27) ||
        _ === null ||
        ((y = _),
        n
          ? ((_ = on(l, i)), _ != null && o.unshift(Kn(l, _, y)))
          : n || ((_ = on(l, i)), _ != null && o.push(Kn(l, _, y)))),
        (l = l.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var $y = /\r\n?/g,
    Wy = /\u0000|\uFFFD/g;
  function sh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        $y,
        `
`
      )
      .replace(Wy, "");
  }
  function dh(t, e) {
    return (e = sh(e)), sh(t) === e;
  }
  function yi() {}
  function xt(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || pa(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            pa(t, "" + a);
        break;
      case "className":
        Su(t, "class", a);
        break;
      case "tabIndex":
        Su(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Su(t, l, a);
        break;
      case "style":
        mo(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          Su(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Tu("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (e !== "input" && xt(t, e, "name", n.name, n, null),
                xt(t, e, "formEncType", n.formEncType, n, null),
                xt(t, e, "formMethod", n.formMethod, n, null),
                xt(t, e, "formTarget", n.formTarget, n, null))
              : (xt(t, e, "encType", n.encType, n, null),
                xt(t, e, "method", n.method, n, null),
                xt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Tu("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = yi);
        break;
      case "onScroll":
        a != null && st("scroll", t);
        break;
      case "onScrollEnd":
        a != null && st("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Tu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        st("beforetoggle", t), st("toggle", t), bu(t, "popover", a);
        break;
      case "xlinkActuate":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        bu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = _0.get(l) || l), bu(t, l, a));
    }
  }
  function $r(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        mo(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? pa(t, a)
          : (typeof a == "number" || typeof a == "bigint") && pa(t, "" + a);
        break;
      case "onScroll":
        a != null && st("scroll", t);
        break;
      case "onScrollEnd":
        a != null && st("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = yi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!lo.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (i = t[ae] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && t.removeEventListener(e, i, n),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : bu(t, l, a);
          }
    }
  }
  function $t(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        st("error", t), st("load", t);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  xt(t, e, i, o, l, null);
              }
          }
        n && xt(t, e, "srcSet", l.srcSet, l, null),
          a && xt(t, e, "src", l.src, l, null);
        return;
      case "input":
        st("invalid", t);
        var d = (i = o = n = null),
          y = null,
          _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case "name":
                  n = C;
                  break;
                case "type":
                  o = C;
                  break;
                case "checked":
                  y = C;
                  break;
                case "defaultChecked":
                  _ = C;
                  break;
                case "value":
                  i = C;
                  break;
                case "defaultValue":
                  d = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null) throw Error(r(137, e));
                  break;
                default:
                  xt(t, e, a, C, l, null);
              }
          }
        fo(t, i, d, y, _, o, n, !1), xu(t);
        return;
      case "select":
        st("invalid", t), (a = o = i = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((d = l[n]), d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                o = d;
                break;
              case "multiple":
                a = d;
              default:
                xt(t, e, n, d, l, null);
            }
        (e = i),
          (l = o),
          (t.multiple = !!a),
          e != null ? ya(t, !!a, e, !1) : l != null && ya(t, !!a, l, !0);
        return;
      case "textarea":
        st("invalid", t), (i = n = a = null);
        for (o in l)
          if (l.hasOwnProperty(o) && ((d = l[o]), d != null))
            switch (o) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                xt(t, e, o, d, l, null);
            }
        so(t, a, n, i), xu(t);
        return;
      case "option":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                xt(t, e, y, a, l, null);
            }
        return;
      case "dialog":
        st("beforetoggle", t), st("toggle", t), st("cancel", t), st("close", t);
        break;
      case "iframe":
      case "object":
        st("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Vn.length; a++) st(Vn[a], t);
        break;
      case "image":
        st("error", t), st("load", t);
        break;
      case "details":
        st("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        st("error", t), st("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in l)
          if (l.hasOwnProperty(_) && ((a = l[_]), a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                xt(t, e, _, a, l, null);
            }
        return;
      default:
        if (sc(e)) {
          for (C in l)
            l.hasOwnProperty(C) &&
              ((a = l[C]), a !== void 0 && $r(t, e, C, a, l, void 0));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((a = l[d]), a != null && xt(t, e, d, a, l, null));
  }
  function Fy(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          o = null,
          d = null,
          y = null,
          _ = null,
          C = null;
        for (O in l) {
          var U = l[O];
          if (l.hasOwnProperty(O) && U != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = U;
              default:
                a.hasOwnProperty(O) || xt(t, e, O, null, a, U);
            }
        }
        for (var w in a) {
          var O = a[w];
          if (((U = l[w]), a.hasOwnProperty(w) && (O != null || U != null)))
            switch (w) {
              case "type":
                i = O;
                break;
              case "name":
                n = O;
                break;
              case "checked":
                _ = O;
                break;
              case "defaultChecked":
                C = O;
                break;
              case "value":
                o = O;
                break;
              case "defaultValue":
                d = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, e));
                break;
              default:
                O !== U && xt(t, e, w, O, a, U);
            }
        }
        fc(t, o, d, y, _, C, i, n);
        return;
      case "select":
        O = o = d = w = null;
        for (i in l)
          if (((y = l[i]), l.hasOwnProperty(i) && y != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                O = y;
              default:
                a.hasOwnProperty(i) || xt(t, e, i, null, a, y);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (y = l[n]),
            a.hasOwnProperty(n) && (i != null || y != null))
          )
            switch (n) {
              case "value":
                w = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                o = i;
              default:
                i !== y && xt(t, e, n, i, a, y);
            }
        (e = d),
          (l = o),
          (a = O),
          w != null
            ? ya(t, !!l, w, !1)
            : !!a != !!l &&
              (e != null ? ya(t, !!l, e, !0) : ya(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        O = w = null;
        for (d in l)
          if (
            ((n = l[d]),
            l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                xt(t, e, d, null, a, n);
            }
        for (o in a)
          if (
            ((n = a[o]),
            (i = l[o]),
            a.hasOwnProperty(o) && (n != null || i != null))
          )
            switch (o) {
              case "value":
                w = n;
                break;
              case "defaultValue":
                O = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && xt(t, e, o, n, a, i);
            }
        oo(t, w, O);
        return;
      case "option":
        for (var at in l)
          if (
            ((w = l[at]),
            l.hasOwnProperty(at) && w != null && !a.hasOwnProperty(at))
          )
            switch (at) {
              case "selected":
                t.selected = !1;
                break;
              default:
                xt(t, e, at, null, a, w);
            }
        for (y in a)
          if (
            ((w = a[y]),
            (O = l[y]),
            a.hasOwnProperty(y) && w !== O && (w != null || O != null))
          )
            switch (y) {
              case "selected":
                t.selected =
                  w && typeof w != "function" && typeof w != "symbol";
                break;
              default:
                xt(t, e, y, w, a, O);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in l)
          (w = l[tt]),
            l.hasOwnProperty(tt) &&
              w != null &&
              !a.hasOwnProperty(tt) &&
              xt(t, e, tt, null, a, w);
        for (_ in a)
          if (
            ((w = a[_]),
            (O = l[_]),
            a.hasOwnProperty(_) && w !== O && (w != null || O != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(r(137, e));
                break;
              default:
                xt(t, e, _, w, a, O);
            }
        return;
      default:
        if (sc(e)) {
          for (var Et in l)
            (w = l[Et]),
              l.hasOwnProperty(Et) &&
                w !== void 0 &&
                !a.hasOwnProperty(Et) &&
                $r(t, e, Et, void 0, a, w);
          for (C in a)
            (w = a[C]),
              (O = l[C]),
              !a.hasOwnProperty(C) ||
                w === O ||
                (w === void 0 && O === void 0) ||
                $r(t, e, C, w, a, O);
          return;
        }
    }
    for (var T in l)
      (w = l[T]),
        l.hasOwnProperty(T) &&
          w != null &&
          !a.hasOwnProperty(T) &&
          xt(t, e, T, null, a, w);
    for (U in a)
      (w = a[U]),
        (O = l[U]),
        !a.hasOwnProperty(U) ||
          w === O ||
          (w == null && O == null) ||
          xt(t, e, U, w, a, O);
  }
  var Wr = null,
    Fr = null;
  function pi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function hh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function mh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Pr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ir = null;
  function Py() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ir
        ? !1
        : ((Ir = t), !0)
      : ((Ir = null), !1);
  }
  var yh = typeof setTimeout == "function" ? setTimeout : void 0,
    Iy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ph = typeof Promise == "function" ? Promise : void 0,
    tp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ph < "u"
        ? function (t) {
            return ph.resolve(null).then(t).catch(ep);
          }
        : yh;
  function ep(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Dl(t) {
    return t === "head";
  }
  function vh(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if ((t.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var o = t.ownerDocument;
            if ((l & 1 && kn(o.documentElement), l & 2 && kn(o.body), l & 4))
              for (l = o.head, kn(l), o = l.firstChild; o; ) {
                var d = o.nextSibling,
                  y = o.nodeName;
                o[rn] ||
                  y === "SCRIPT" ||
                  y === "STYLE" ||
                  (y === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(o),
                  (o = d);
              }
          }
          if (n === 0) {
            t.removeChild(i), eu(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    eu(e);
  }
  function tf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          tf(l), uc(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function lp(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[rn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = Me(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function ap(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Me(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ef(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function np(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Me(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var lf = null;
  function gh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function bh(t, e, l) {
    switch (((e = pi(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function kn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    uc(t);
  }
  var ze = new Map(),
    Sh = new Set();
  function vi(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var fl = Z.d;
  Z.d = { f: up, r: ip, D: cp, C: rp, L: fp, m: op, X: dp, S: sp, M: hp };
  function up() {
    var t = fl.f(),
      e = ri();
    return t || e;
  }
  function ip(t) {
    var e = sa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ys(e) : fl.r(t);
  }
  var Va = typeof document > "u" ? null : document;
  function xh(t, e, l) {
    var a = Va;
    if (a && typeof e == "string" && e) {
      var n = Ee(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Sh.has(n) ||
          (Sh.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            $t(e, "link", t),
            Xt(e),
            a.head.appendChild(e)));
    }
  }
  function cp(t) {
    fl.D(t), xh("dns-prefetch", t, null);
  }
  function rp(t, e) {
    fl.C(t, e), xh("preconnect", t, e);
  }
  function fp(t, e, l) {
    fl.L(t, e, l);
    var a = Va;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Ee(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Ee(l.imageSizes) + '"]'))
        : (n += '[href="' + Ee(t) + '"]');
      var i = n;
      switch (e) {
        case "style":
          i = Ka(t);
          break;
        case "script":
          i = ka(t);
      }
      ze.has(i) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        ze.set(i, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(Jn(i))) ||
          (e === "script" && a.querySelector($n(i))) ||
          ((e = a.createElement("link")),
          $t(e, "link", t),
          Xt(e),
          a.head.appendChild(e)));
    }
  }
  function op(t, e) {
    fl.m(t, e);
    var l = Va;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Ee(a) + '"][href="' + Ee(t) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ka(t);
      }
      if (
        !ze.has(i) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        ze.set(i, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector($n(i))) return;
        }
        (a = l.createElement("link")),
          $t(a, "link", t),
          Xt(a),
          l.head.appendChild(a);
      }
    }
  }
  function sp(t, e, l) {
    fl.S(t, e, l);
    var a = Va;
    if (a && t) {
      var n = da(a).hoistableStyles,
        i = Ka(t);
      e = e || "default";
      var o = n.get(i);
      if (!o) {
        var d = { loading: 0, preload: null };
        if ((o = a.querySelector(Jn(i)))) d.loading = 5;
        else {
          (t = g({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = ze.get(i)) && af(t, l);
          var y = (o = a.createElement("link"));
          Xt(y),
            $t(y, "link", t),
            (y._p = new Promise(function (_, C) {
              (y.onload = _), (y.onerror = C);
            })),
            y.addEventListener("load", function () {
              d.loading |= 1;
            }),
            y.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            gi(o, e, a);
        }
        (o = { type: "stylesheet", instance: o, count: 1, state: d }),
          n.set(i, o);
      }
    }
  }
  function dp(t, e) {
    fl.X(t, e);
    var l = Va;
    if (l && t) {
      var a = da(l).hoistableScripts,
        n = ka(t),
        i = a.get(n);
      i ||
        ((i = l.querySelector($n(n))),
        i ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = ze.get(n)) && nf(t, e),
          (i = l.createElement("script")),
          Xt(i),
          $t(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function hp(t, e) {
    fl.M(t, e);
    var l = Va;
    if (l && t) {
      var a = da(l).hoistableScripts,
        n = ka(t),
        i = a.get(n);
      i ||
        ((i = l.querySelector($n(n))),
        i ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = ze.get(n)) && nf(t, e),
          (i = l.createElement("script")),
          Xt(i),
          $t(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Eh(t, e, l, a) {
    var n = (n = et.current) ? vi(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ka(l.href)),
            (l = da(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ka(l.href);
          var i = da(n).hoistableStyles,
            o = i.get(t);
          if (
            (o ||
              ((n = n.ownerDocument || n),
              (o = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, o),
              (i = n.querySelector(Jn(t))) &&
                !i._p &&
                ((o.instance = i), (o.state.loading = 5)),
              ze.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                ze.set(t, l),
                i || mp(n, t, l, o.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return o;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ka(l)),
              (l = da(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ka(t) {
    return 'href="' + Ee(t) + '"';
  }
  function Jn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Th(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function mp(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        $t(e, "link", l),
        Xt(e),
        t.head.appendChild(e));
  }
  function ka(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function $n(t) {
    return "script[async]" + t;
  }
  function Ah(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ee(l.href) + '"]');
          if (a) return (e.instance = a), Xt(a), a;
          var n = g({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Xt(a),
            $t(a, "style", n),
            gi(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Ka(l.href);
          var i = t.querySelector(Jn(n));
          if (i) return (e.state.loading |= 4), (e.instance = i), Xt(i), i;
          (a = Th(l)),
            (n = ze.get(n)) && af(a, n),
            (i = (t.ownerDocument || t).createElement("link")),
            Xt(i);
          var o = i;
          return (
            (o._p = new Promise(function (d, y) {
              (o.onload = d), (o.onerror = y);
            })),
            $t(i, "link", a),
            (e.state.loading |= 4),
            gi(i, l.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = ka(l.src)),
            (n = t.querySelector($n(i)))
              ? ((e.instance = n), Xt(n), n)
              : ((a = l),
                (n = ze.get(i)) && ((a = g({}, l)), nf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Xt(n),
                $t(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), gi(a, l.precedence, t));
    return e.instance;
  }
  function gi(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        o = 0;
      o < a.length;
      o++
    ) {
      var d = a[o];
      if (d.dataset.precedence === e) i = d;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function af(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function nf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var bi = null;
  function Rh(t, e, l) {
    if (bi === null) {
      var a = new Map(),
        n = (bi = new Map());
      n.set(l, a);
    } else (n = bi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[rn] ||
          i[Ft] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var o = i.getAttribute(e) || "";
        o = t + o;
        var d = a.get(o);
        d ? d.push(i) : a.set(o, [i]);
      }
    }
    return a;
  }
  function _h(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function yp(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function wh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Wn = null;
  function pp() {}
  function vp(t, e, l) {
    if (Wn === null) throw Error(r(475));
    var a = Wn;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = Ka(l.href),
          i = t.querySelector(Jn(n));
        if (i) {
          (t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Si.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = i),
            Xt(i);
          return;
        }
        (i = t.ownerDocument || t),
          (l = Th(l)),
          (n = ze.get(n)) && af(l, n),
          (i = i.createElement("link")),
          Xt(i);
        var o = i;
        (o._p = new Promise(function (d, y) {
          (o.onload = d), (o.onerror = y);
        })),
          $t(i, "link", l),
          (e.instance = i);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Si.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function gp() {
    if (Wn === null) throw Error(r(475));
    var t = Wn;
    return (
      t.stylesheets && t.count === 0 && uf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && uf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Si() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) uf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var xi = null;
  function uf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (xi = new Map()),
        e.forEach(bp, t),
        (xi = null),
        Si.call(t));
  }
  function bp(t, e) {
    if (!(e.state.loading & 4)) {
      var l = xi.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), xi.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var o = n[i];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") &&
            (l.set(o.dataset.precedence, o), (a = o));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (o = n.getAttribute("data-precedence")),
        (i = l.get(o) || a),
        i === a && l.set(null, n),
        l.set(o, n),
        this.count++,
        (a = Si.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Fn = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function Sp(t, e, l, a, n, i, o, d) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ec(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ec(0)),
      (this.hiddenUpdates = ec(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map());
  }
  function Oh(t, e, l, a, n, i, o, d, y, _, C, U) {
    return (
      (t = new Sp(t, e, l, o, d, y, _, U)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = he(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Yc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Zc(i),
      t
    );
  }
  function zh(t) {
    return t ? ((t = Aa), t) : Aa;
  }
  function Nh(t, e, l, a, n, i) {
    (n = zh(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = gl(e)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = bl(t, a, e)),
      l !== null && (ge(l, t, e), wn(l, t, e));
  }
  function Dh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function cf(t, e) {
    Dh(t, e), (t = t.alternate) && Dh(t, e);
  }
  function Ch(t) {
    if (t.tag === 13) {
      var e = Ta(t, 67108864);
      e !== null && ge(e, t, 67108864), cf(t, 67108864);
    }
  }
  var Ei = !0;
  function xp(t, e, l, a) {
    var n = D.T;
    D.T = null;
    var i = Z.p;
    try {
      (Z.p = 2), rf(t, e, l, a);
    } finally {
      (Z.p = i), (D.T = n);
    }
  }
  function Ep(t, e, l, a) {
    var n = D.T;
    D.T = null;
    var i = Z.p;
    try {
      (Z.p = 8), rf(t, e, l, a);
    } finally {
      (Z.p = i), (D.T = n);
    }
  }
  function rf(t, e, l, a) {
    if (Ei) {
      var n = ff(a);
      if (n === null) Jr(t, e, a, Ti, l), jh(t, a);
      else if (Ap(n, t, e, l, a)) a.stopPropagation();
      else if ((jh(t, a), e & 4 && -1 < Tp.indexOf(t))) {
        for (; n !== null; ) {
          var i = sa(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var o = Yl(i.pendingLanes);
                  if (o !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; o; ) {
                      var y = 1 << (31 - se(o));
                      (d.entanglements[1] |= y), (o &= ~y);
                    }
                    Ye(i), (vt & 6) === 0 && ((ii = Ue() + 500), Zn(0));
                  }
                }
                break;
              case 13:
                (d = Ta(i, 2)), d !== null && ge(d, i, 2), ri(), cf(i, 2);
            }
          if (((i = ff(a)), i === null && Jr(t, e, a, Ti, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else Jr(t, e, a, null, l);
    }
  }
  function ff(t) {
    return (t = hc(t)), of(t);
  }
  var Ti = null;
  function of(t) {
    if (((Ti = null), (t = oa(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ti = t), null;
  }
  function Mh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (r0()) {
          case Kf:
            return 2;
          case kf:
            return 8;
          case yu:
          case f0:
            return 32;
          case Jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sf = !1,
    Cl = null,
    Ml = null,
    jl = null,
    Pn = new Map(),
    In = new Map(),
    Ul = [],
    Tp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function jh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Cl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ml = null;
        break;
      case "mouseover":
      case "mouseout":
        jl = null;
        break;
      case "pointerover":
      case "pointerout":
        Pn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        In.delete(e.pointerId);
    }
  }
  function tu(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        e !== null && ((e = sa(e)), e !== null && Ch(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function Ap(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (Cl = tu(Cl, t, e, l, a, n)), !0;
      case "dragenter":
        return (Ml = tu(Ml, t, e, l, a, n)), !0;
      case "mouseover":
        return (jl = tu(jl, t, e, l, a, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return Pn.set(i, tu(Pn.get(i) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), In.set(i, tu(In.get(i) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function Uh(t) {
    var e = oa(t.target);
    if (e !== null) {
      var l = h(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = p(l)), e !== null)) {
            (t.blockedOn = e),
              v0(t.priority, function () {
                if (l.tag === 13) {
                  var a = ve();
                  a = lc(a);
                  var n = Ta(l, a);
                  n !== null && ge(n, l, a), cf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ai(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = ff(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (dc = a), l.target.dispatchEvent(a), (dc = null);
      } else return (e = sa(l)), e !== null && Ch(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function Hh(t, e, l) {
    Ai(t) && l.delete(e);
  }
  function Rp() {
    (sf = !1),
      Cl !== null && Ai(Cl) && (Cl = null),
      Ml !== null && Ai(Ml) && (Ml = null),
      jl !== null && Ai(jl) && (jl = null),
      Pn.forEach(Hh),
      In.forEach(Hh);
  }
  function Ri(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      sf ||
        ((sf = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Rp)));
  }
  var _i = null;
  function Bh(t) {
    _i !== t &&
      ((_i = t),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        _i === t && (_i = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (of(a || l) === null) continue;
            break;
          }
          var i = sa(l);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            fr(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function eu(t) {
    function e(y) {
      return Ri(y, t);
    }
    Cl !== null && Ri(Cl, t),
      Ml !== null && Ri(Ml, t),
      jl !== null && Ri(jl, t),
      Pn.forEach(e),
      In.forEach(e);
    for (var l = 0; l < Ul.length; l++) {
      var a = Ul[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ul.length && ((l = Ul[0]), l.blockedOn === null); )
      Uh(l), l.blockedOn === null && Ul.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          o = n[ae] || null;
        if (typeof i == "function") o || Bh(l);
        else if (o) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (o = i[ae] || null))) d = o.formAction;
            else if (of(n) !== null) continue;
          } else d = o.action;
          typeof d == "function" ? (l[a + 1] = d) : (l.splice(a, 3), (a -= 3)),
            Bh(l);
        }
      }
  }
  function df(t) {
    this._internalRoot = t;
  }
  (wi.prototype.render = df.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        a = ve();
      Nh(l, a, t, e, null, null);
    }),
    (wi.prototype.unmount = df.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Nh(t.current, 2, null, t, null, null), ri(), (e[fa] = null);
        }
      });
  function wi(t) {
    this._internalRoot = t;
  }
  wi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = If();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ul.length && e !== 0 && e < Ul[l].priority; l++);
      Ul.splice(l, 0, t), l === 0 && Uh(t);
    }
  };
  var Lh = c.version;
  if (Lh !== "19.1.1") throw Error(r(527, Lh, "19.1.1"));
  Z.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var _p = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oi.isDisabled && Oi.supportsFiber)
      try {
        (nn = Oi.inject(_p)), (oe = Oi);
      } catch {}
  }
  return (
    (au.createRoot = function (t, e) {
      if (!s(t)) throw Error(r(299));
      var l = !1,
        a = "",
        n = td,
        i = ed,
        o = ld,
        d = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (o = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks)),
        (e = Oh(t, 1, !1, null, null, l, a, n, i, o, d, null)),
        (t[fa] = e.current),
        kr(t),
        new df(e)
      );
    }),
    (au.hydrateRoot = function (t, e, l) {
      if (!s(t)) throw Error(r(299));
      var a = !1,
        n = "",
        i = td,
        o = ed,
        d = ld,
        y = null,
        _ = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (o = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (y = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (_ = l.formState)),
        (e = Oh(t, 1, !0, e, l ?? null, a, n, i, o, d, y, _)),
        (e.context = zh(null)),
        (l = e.current),
        (a = ve()),
        (a = lc(a)),
        (n = gl(a)),
        (n.callback = null),
        bl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        cn(e, l),
        Ye(e),
        (t[fa] = e.current),
        kr(t),
        new wi(e)
      );
    }),
    (au.version = "19.1.1"),
    au
  );
}
var Jh;
function Bp() {
  if (Jh) return mf.exports;
  Jh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), (mf.exports = Hp()), mf.exports;
}
var Lp = Bp(),
  E = Uf();
const cu = Op(E),
  ra = "/static/network/assets/836-BbAhqpuB.jpg";
var re = function () {
  return (
    (re =
      Object.assign ||
      function (c) {
        for (var f, r = 1, s = arguments.length; r < s; r++) {
          f = arguments[r];
          for (var h in f)
            Object.prototype.hasOwnProperty.call(f, h) && (c[h] = f[h]);
        }
        return c;
      }),
    re.apply(this, arguments)
  );
};
function qi(u, c, f) {
  if (f || arguments.length === 2)
    for (var r = 0, s = c.length, h; r < s; r++)
      (h || !(r in c)) &&
        (h || (h = Array.prototype.slice.call(c, 0, r)), (h[r] = c[r]));
  return u.concat(h || Array.prototype.slice.call(c));
}
var _t = "-ms-",
  iu = "-moz-",
  pt = "-webkit-",
  pm = "comm",
  Zi = "rule",
  Hf = "decl",
  qp = "@import",
  vm = "@keyframes",
  Yp = "@layer",
  gm = Math.abs,
  Bf = String.fromCharCode,
  _f = Object.assign;
function Gp(u, c) {
  return Kt(u, 0) ^ 45
    ? (((((((c << 2) ^ Kt(u, 0)) << 2) ^ Kt(u, 1)) << 2) ^ Kt(u, 2)) << 2) ^
        Kt(u, 3)
    : 0;
}
function bm(u) {
  return u.trim();
}
function ol(u, c) {
  return (u = c.exec(u)) ? u[0] : u;
}
function ut(u, c, f) {
  return u.replace(c, f);
}
function Ci(u, c, f) {
  return u.indexOf(c, f);
}
function Kt(u, c) {
  return u.charCodeAt(c) | 0;
}
function Wa(u, c, f) {
  return u.slice(c, f);
}
function Ge(u) {
  return u.length;
}
function Sm(u) {
  return u.length;
}
function uu(u, c) {
  return c.push(u), u;
}
function Xp(u, c) {
  return u.map(c).join("");
}
function $h(u, c) {
  return u.filter(function (f) {
    return !ol(f, c);
  });
}
var Vi = 1,
  Fa = 1,
  xm = 0,
  Ne = 0,
  Ht = 0,
  en = "";
function Ki(u, c, f, r, s, h, p, x) {
  return {
    value: u,
    root: c,
    parent: f,
    type: r,
    props: s,
    children: h,
    line: Vi,
    column: Fa,
    length: p,
    return: "",
    siblings: x,
  };
}
function Bl(u, c) {
  return _f(
    Ki("", null, null, "", null, null, 0, u.siblings),
    u,
    { length: -u.length },
    c
  );
}
function Ja(u) {
  for (; u.root; ) u = Bl(u.root, { children: [u] });
  uu(u, u.siblings);
}
function Qp() {
  return Ht;
}
function Zp() {
  return (
    (Ht = Ne > 0 ? Kt(en, --Ne) : 0), Fa--, Ht === 10 && ((Fa = 1), Vi--), Ht
  );
}
function je() {
  return (
    (Ht = Ne < xm ? Kt(en, Ne++) : 0), Fa++, Ht === 10 && ((Fa = 1), Vi++), Ht
  );
}
function ia() {
  return Kt(en, Ne);
}
function Mi() {
  return Ne;
}
function ki(u, c) {
  return Wa(en, u, c);
}
function wf(u) {
  switch (u) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Vp(u) {
  return (Vi = Fa = 1), (xm = Ge((en = u))), (Ne = 0), [];
}
function Kp(u) {
  return (en = ""), u;
}
function bf(u) {
  return bm(ki(Ne - 1, Of(u === 91 ? u + 2 : u === 40 ? u + 1 : u)));
}
function kp(u) {
  for (; (Ht = ia()) && Ht < 33; ) je();
  return wf(u) > 2 || wf(Ht) > 3 ? "" : " ";
}
function Jp(u, c) {
  for (
    ;
    --c &&
    je() &&
    !(Ht < 48 || Ht > 102 || (Ht > 57 && Ht < 65) || (Ht > 70 && Ht < 97));

  );
  return ki(u, Mi() + (c < 6 && ia() == 32 && je() == 32));
}
function Of(u) {
  for (; je(); )
    switch (Ht) {
      case u:
        return Ne;
      case 34:
      case 39:
        u !== 34 && u !== 39 && Of(Ht);
        break;
      case 40:
        u === 41 && Of(u);
        break;
      case 92:
        je();
        break;
    }
  return Ne;
}
function $p(u, c) {
  for (; je() && u + Ht !== 57; ) if (u + Ht === 84 && ia() === 47) break;
  return "/*" + ki(c, Ne - 1) + "*" + Bf(u === 47 ? u : je());
}
function Wp(u) {
  for (; !wf(ia()); ) je();
  return ki(u, Ne);
}
function Fp(u) {
  return Kp(ji("", null, null, null, [""], (u = Vp(u)), 0, [0], u));
}
function ji(u, c, f, r, s, h, p, x, v) {
  for (
    var m = 0,
      g = 0,
      N = p,
      z = 0,
      j = 0,
      q = 0,
      X = 1,
      L = 1,
      B = 1,
      Y = 0,
      G = "",
      k = s,
      K = h,
      P = r,
      $ = G;
    L;

  )
    switch (((q = Y), (Y = je()))) {
      case 40:
        if (q != 108 && Kt($, N - 1) == 58) {
          Ci(($ += ut(bf(Y), "&", "&\f")), "&\f", gm(m ? x[m - 1] : 0)) != -1 &&
            (B = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += bf(Y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += kp(q);
        break;
      case 92:
        $ += Jp(Mi() - 1, 7);
        continue;
      case 47:
        switch (ia()) {
          case 42:
          case 47:
            uu(Pp($p(je(), Mi()), c, f, v), v);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * X:
        x[m++] = Ge($) * B;
      case 125 * X:
      case 59:
      case 0:
        switch (Y) {
          case 0:
          case 125:
            L = 0;
          case 59 + g:
            B == -1 && ($ = ut($, /\f/g, "")),
              j > 0 &&
                Ge($) - N &&
                uu(
                  j > 32
                    ? Fh($ + ";", r, f, N - 1, v)
                    : Fh(ut($, " ", "") + ";", r, f, N - 2, v),
                  v
                );
            break;
          case 59:
            $ += ";";
          default:
            if (
              (uu(
                (P = Wh($, c, f, m, g, s, x, G, (k = []), (K = []), N, h)),
                h
              ),
              Y === 123)
            )
              if (g === 0) ji($, c, P, P, k, h, N, x, K);
              else
                switch (z === 99 && Kt($, 3) === 110 ? 100 : z) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ji(
                      u,
                      P,
                      P,
                      r && uu(Wh(u, P, P, 0, 0, s, x, G, s, (k = []), N, K), K),
                      s,
                      K,
                      N,
                      x,
                      r ? k : K
                    );
                    break;
                  default:
                    ji($, P, P, P, [""], K, 0, x, K);
                }
        }
        (m = g = j = 0), (X = B = 1), (G = $ = ""), (N = p);
        break;
      case 58:
        (N = 1 + Ge($)), (j = q);
      default:
        if (X < 1) {
          if (Y == 123) --X;
          else if (Y == 125 && X++ == 0 && Zp() == 125) continue;
        }
        switch ((($ += Bf(Y)), Y * X)) {
          case 38:
            B = g > 0 ? 1 : (($ += "\f"), -1);
            break;
          case 44:
            (x[m++] = (Ge($) - 1) * B), (B = 1);
            break;
          case 64:
            ia() === 45 && ($ += bf(je())),
              (z = ia()),
              (g = N = Ge((G = $ += Wp(Mi())))),
              Y++;
            break;
          case 45:
            q === 45 && Ge($) == 2 && (X = 0);
        }
    }
  return h;
}
function Wh(u, c, f, r, s, h, p, x, v, m, g, N) {
  for (
    var z = s - 1, j = s === 0 ? h : [""], q = Sm(j), X = 0, L = 0, B = 0;
    X < r;
    ++X
  )
    for (var Y = 0, G = Wa(u, z + 1, (z = gm((L = p[X])))), k = u; Y < q; ++Y)
      (k = bm(L > 0 ? j[Y] + " " + G : ut(G, /&\f/g, j[Y]))) && (v[B++] = k);
  return Ki(u, c, f, s === 0 ? Zi : x, v, m, g, N);
}
function Pp(u, c, f, r) {
  return Ki(u, c, f, pm, Bf(Qp()), Wa(u, 2, -2), 0, r);
}
function Fh(u, c, f, r, s) {
  return Ki(u, c, f, Hf, Wa(u, 0, r), Wa(u, r + 1, -1), r, s);
}
function Em(u, c, f) {
  switch (Gp(u, c)) {
    case 5103:
      return pt + "print-" + u + u;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return pt + u + u;
    case 4789:
      return iu + u + u;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return pt + u + iu + u + _t + u + u;
    case 5936:
      switch (Kt(u, c + 11)) {
        case 114:
          return pt + u + _t + ut(u, /[svh]\w+-[tblr]{2}/, "tb") + u;
        case 108:
          return pt + u + _t + ut(u, /[svh]\w+-[tblr]{2}/, "tb-rl") + u;
        case 45:
          return pt + u + _t + ut(u, /[svh]\w+-[tblr]{2}/, "lr") + u;
      }
    case 6828:
    case 4268:
    case 2903:
      return pt + u + _t + u + u;
    case 6165:
      return pt + u + _t + "flex-" + u + u;
    case 5187:
      return (
        pt + u + ut(u, /(\w+).+(:[^]+)/, pt + "box-$1$2" + _t + "flex-$1$2") + u
      );
    case 5443:
      return (
        pt +
        u +
        _t +
        "flex-item-" +
        ut(u, /flex-|-self/g, "") +
        (ol(u, /flex-|baseline/)
          ? ""
          : _t + "grid-row-" + ut(u, /flex-|-self/g, "")) +
        u
      );
    case 4675:
      return (
        pt +
        u +
        _t +
        "flex-line-pack" +
        ut(u, /align-content|flex-|-self/g, "") +
        u
      );
    case 5548:
      return pt + u + _t + ut(u, "shrink", "negative") + u;
    case 5292:
      return pt + u + _t + ut(u, "basis", "preferred-size") + u;
    case 6060:
      return (
        pt +
        "box-" +
        ut(u, "-grow", "") +
        pt +
        u +
        _t +
        ut(u, "grow", "positive") +
        u
      );
    case 4554:
      return pt + ut(u, /([^-])(transform)/g, "$1" + pt + "$2") + u;
    case 6187:
      return (
        ut(
          ut(ut(u, /(zoom-|grab)/, pt + "$1"), /(image-set)/, pt + "$1"),
          u,
          ""
        ) + u
      );
    case 5495:
    case 3959:
      return ut(u, /(image-set\([^]*)/, pt + "$1$`$1");
    case 4968:
      return (
        ut(
          ut(u, /(.+:)(flex-)?(.*)/, pt + "box-pack:$3" + _t + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        pt +
        u +
        u
      );
    case 4200:
      if (!ol(u, /flex-|baseline/))
        return _t + "grid-column-align" + Wa(u, c) + u;
      break;
    case 2592:
    case 3360:
      return _t + ut(u, "template-", "") + u;
    case 4384:
    case 3616:
      return f &&
        f.some(function (r, s) {
          return (c = s), ol(r.props, /grid-\w+-end/);
        })
        ? ~Ci(u + (f = f[c].value), "span", 0)
          ? u
          : _t +
            ut(u, "-start", "") +
            u +
            _t +
            "grid-row-span:" +
            (~Ci(f, "span", 0) ? ol(f, /\d+/) : +ol(f, /\d+/) - +ol(u, /\d+/)) +
            ";"
        : _t + ut(u, "-start", "") + u;
    case 4896:
    case 4128:
      return f &&
        f.some(function (r) {
          return ol(r.props, /grid-\w+-start/);
        })
        ? u
        : _t + ut(ut(u, "-end", "-span"), "span ", "") + u;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ut(u, /(.+)-inline(.+)/, pt + "$1$2") + u;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ge(u) - 1 - c > 6)
        switch (Kt(u, c + 1)) {
          case 109:
            if (Kt(u, c + 4) !== 45) break;
          case 102:
            return (
              ut(
                u,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  pt +
                  "$2-$3$1" +
                  iu +
                  (Kt(u, c + 3) == 108 ? "$3" : "$2-$3")
              ) + u
            );
          case 115:
            return ~Ci(u, "stretch", 0)
              ? Em(ut(u, "stretch", "fill-available"), c, f) + u
              : u;
        }
      break;
    case 5152:
    case 5920:
      return ut(
        u,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, s, h, p, x, v, m) {
          return (
            _t +
            s +
            ":" +
            h +
            m +
            (p ? _t + s + "-span:" + (x ? v : +v - +h) + m : "") +
            u
          );
        }
      );
    case 4949:
      if (Kt(u, c + 6) === 121) return ut(u, ":", ":" + pt) + u;
      break;
    case 6444:
      switch (Kt(u, Kt(u, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ut(
              u,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                pt +
                (Kt(u, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                pt +
                "$2$3$1" +
                _t +
                "$2box$3"
            ) + u
          );
        case 100:
          return ut(u, ":", ":" + _t) + u;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ut(u, "scroll-", "scroll-snap-") + u;
  }
  return u;
}
function Yi(u, c) {
  for (var f = "", r = 0; r < u.length; r++) f += c(u[r], r, u, c) || "";
  return f;
}
function Ip(u, c, f, r) {
  switch (u.type) {
    case Yp:
      if (u.children.length) break;
    case qp:
    case Hf:
      return (u.return = u.return || u.value);
    case pm:
      return "";
    case vm:
      return (u.return = u.value + "{" + Yi(u.children, r) + "}");
    case Zi:
      if (!Ge((u.value = u.props.join(",")))) return "";
  }
  return Ge((f = Yi(u.children, r)))
    ? (u.return = u.value + "{" + f + "}")
    : "";
}
function tv(u) {
  var c = Sm(u);
  return function (f, r, s, h) {
    for (var p = "", x = 0; x < c; x++) p += u[x](f, r, s, h) || "";
    return p;
  };
}
function ev(u) {
  return function (c) {
    c.root || ((c = c.return) && u(c));
  };
}
function lv(u, c, f, r) {
  if (u.length > -1 && !u.return)
    switch (u.type) {
      case Hf:
        u.return = Em(u.value, u.length, f);
        return;
      case vm:
        return Yi([Bl(u, { value: ut(u.value, "@", "@" + pt) })], r);
      case Zi:
        if (u.length)
          return Xp((f = u.props), function (s) {
            switch (ol(s, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Ja(Bl(u, { props: [ut(s, /:(read-\w+)/, ":" + iu + "$1")] })),
                  Ja(Bl(u, { props: [s] })),
                  _f(u, { props: $h(f, r) });
                break;
              case "::placeholder":
                Ja(
                  Bl(u, { props: [ut(s, /:(plac\w+)/, ":" + pt + "input-$1")] })
                ),
                  Ja(Bl(u, { props: [ut(s, /:(plac\w+)/, ":" + iu + "$1")] })),
                  Ja(Bl(u, { props: [ut(s, /:(plac\w+)/, _t + "input-$1")] })),
                  Ja(Bl(u, { props: [s] })),
                  _f(u, { props: $h(f, r) });
                break;
            }
            return "";
          });
    }
}
var av = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  be = {},
  Pa =
    (typeof process < "u" &&
      be !== void 0 &&
      (be.REACT_APP_SC_ATTR || be.SC_ATTR)) ||
    "data-styled",
  Tm = "active",
  Am = "data-styled-version",
  Ji = "6.1.19",
  Lf = `/*!sc*/
`,
  Gi = typeof window < "u" && typeof document < "u",
  nv = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      be !== void 0 &&
      be.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      be.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? be.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      be.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      be !== void 0 &&
      be.SC_DISABLE_SPEEDY !== void 0 &&
      be.SC_DISABLE_SPEEDY !== "" &&
      be.SC_DISABLE_SPEEDY !== "false" &&
      be.SC_DISABLE_SPEEDY),
  $i = Object.freeze([]),
  Ia = Object.freeze({});
function uv(u, c, f) {
  return (
    f === void 0 && (f = Ia), (u.theme !== f.theme && u.theme) || c || f.theme
  );
}
var Rm = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  iv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  cv = /(^-|-$)/g;
function Ph(u) {
  return u.replace(iv, "-").replace(cv, "");
}
var rv = /(a)(d)/gi,
  zi = 52,
  Ih = function (u) {
    return String.fromCharCode(u + (u > 25 ? 39 : 97));
  };
function zf(u) {
  var c,
    f = "";
  for (c = Math.abs(u); c > zi; c = (c / zi) | 0) f = Ih(c % zi) + f;
  return (Ih(c % zi) + f).replace(rv, "$1-$2");
}
var Sf,
  _m = 5381,
  $a = function (u, c) {
    for (var f = c.length; f; ) u = (33 * u) ^ c.charCodeAt(--f);
    return u;
  },
  wm = function (u) {
    return $a(_m, u);
  };
function fv(u) {
  return zf(wm(u) >>> 0);
}
function ov(u) {
  return u.displayName || u.name || "Component";
}
function xf(u) {
  return typeof u == "string" && !0;
}
var Om = typeof Symbol == "function" && Symbol.for,
  zm = Om ? Symbol.for("react.memo") : 60115,
  sv = Om ? Symbol.for("react.forward_ref") : 60112,
  dv = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  hv = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Nm = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  mv =
    (((Sf = {})[sv] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Sf[zm] = Nm),
    Sf);
function tm(u) {
  return ("type" in (c = u) && c.type.$$typeof) === zm
    ? Nm
    : "$$typeof" in u
    ? mv[u.$$typeof]
    : dv;
  var c;
}
var yv = Object.defineProperty,
  pv = Object.getOwnPropertyNames,
  em = Object.getOwnPropertySymbols,
  vv = Object.getOwnPropertyDescriptor,
  gv = Object.getPrototypeOf,
  lm = Object.prototype;
function Dm(u, c, f) {
  if (typeof c != "string") {
    if (lm) {
      var r = gv(c);
      r && r !== lm && Dm(u, r, f);
    }
    var s = pv(c);
    em && (s = s.concat(em(c)));
    for (var h = tm(u), p = tm(c), x = 0; x < s.length; ++x) {
      var v = s[x];
      if (!(v in hv || (f && f[v]) || (p && v in p) || (h && v in h))) {
        var m = vv(c, v);
        try {
          yv(u, v, m);
        } catch {}
      }
    }
  }
  return u;
}
function tn(u) {
  return typeof u == "function";
}
function qf(u) {
  return typeof u == "object" && "styledComponentId" in u;
}
function ua(u, c) {
  return u && c ? "".concat(u, " ").concat(c) : u || c || "";
}
function am(u, c) {
  if (u.length === 0) return "";
  for (var f = u[0], r = 1; r < u.length; r++) f += u[r];
  return f;
}
function ru(u) {
  return (
    u !== null &&
    typeof u == "object" &&
    u.constructor.name === Object.name &&
    !("props" in u && u.$$typeof)
  );
}
function Nf(u, c, f) {
  if ((f === void 0 && (f = !1), !f && !ru(u) && !Array.isArray(u))) return c;
  if (Array.isArray(c))
    for (var r = 0; r < c.length; r++) u[r] = Nf(u[r], c[r]);
  else if (ru(c)) for (var r in c) u[r] = Nf(u[r], c[r]);
  return u;
}
function Yf(u, c) {
  Object.defineProperty(u, "toString", { value: c });
}
function ou(u) {
  for (var c = [], f = 1; f < arguments.length; f++) c[f - 1] = arguments[f];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(u, " for more information.")
      .concat(c.length > 0 ? " Args: ".concat(c.join(", ")) : "")
  );
}
var bv = (function () {
    function u(c) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = c);
    }
    return (
      (u.prototype.indexOfGroup = function (c) {
        for (var f = 0, r = 0; r < c; r++) f += this.groupSizes[r];
        return f;
      }),
      (u.prototype.insertRules = function (c, f) {
        if (c >= this.groupSizes.length) {
          for (var r = this.groupSizes, s = r.length, h = s; c >= h; )
            if ((h <<= 1) < 0) throw ou(16, "".concat(c));
          (this.groupSizes = new Uint32Array(h)),
            this.groupSizes.set(r),
            (this.length = h);
          for (var p = s; p < h; p++) this.groupSizes[p] = 0;
        }
        for (
          var x = this.indexOfGroup(c + 1), v = ((p = 0), f.length);
          p < v;
          p++
        )
          this.tag.insertRule(x, f[p]) && (this.groupSizes[c]++, x++);
      }),
      (u.prototype.clearGroup = function (c) {
        if (c < this.length) {
          var f = this.groupSizes[c],
            r = this.indexOfGroup(c),
            s = r + f;
          this.groupSizes[c] = 0;
          for (var h = r; h < s; h++) this.tag.deleteRule(r);
        }
      }),
      (u.prototype.getGroup = function (c) {
        var f = "";
        if (c >= this.length || this.groupSizes[c] === 0) return f;
        for (
          var r = this.groupSizes[c],
            s = this.indexOfGroup(c),
            h = s + r,
            p = s;
          p < h;
          p++
        )
          f += "".concat(this.tag.getRule(p)).concat(Lf);
        return f;
      }),
      u
    );
  })(),
  Ui = new Map(),
  Xi = new Map(),
  Hi = 1,
  Ni = function (u) {
    if (Ui.has(u)) return Ui.get(u);
    for (; Xi.has(Hi); ) Hi++;
    var c = Hi++;
    return Ui.set(u, c), Xi.set(c, u), c;
  },
  Sv = function (u, c) {
    (Hi = c + 1), Ui.set(u, c), Xi.set(c, u);
  },
  xv = "style[".concat(Pa, "][").concat(Am, '="').concat(Ji, '"]'),
  Ev = new RegExp(
    "^".concat(Pa, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Tv = function (u, c, f) {
    for (var r, s = f.split(","), h = 0, p = s.length; h < p; h++)
      (r = s[h]) && u.registerName(c, r);
  },
  Av = function (u, c) {
    for (
      var f,
        r = ((f = c.textContent) !== null && f !== void 0 ? f : "").split(Lf),
        s = [],
        h = 0,
        p = r.length;
      h < p;
      h++
    ) {
      var x = r[h].trim();
      if (x) {
        var v = x.match(Ev);
        if (v) {
          var m = 0 | parseInt(v[1], 10),
            g = v[2];
          m !== 0 && (Sv(g, m), Tv(u, g, v[3]), u.getTag().insertRules(m, s)),
            (s.length = 0);
        } else s.push(x);
      }
    }
  },
  nm = function (u) {
    for (
      var c = document.querySelectorAll(xv), f = 0, r = c.length;
      f < r;
      f++
    ) {
      var s = c[f];
      s &&
        s.getAttribute(Pa) !== Tm &&
        (Av(u, s), s.parentNode && s.parentNode.removeChild(s));
    }
  };
function Rv() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Cm = function (u) {
    var c = document.head,
      f = u || c,
      r = document.createElement("style"),
      s = (function (x) {
        var v = Array.from(x.querySelectorAll("style[".concat(Pa, "]")));
        return v[v.length - 1];
      })(f),
      h = s !== void 0 ? s.nextSibling : null;
    r.setAttribute(Pa, Tm), r.setAttribute(Am, Ji);
    var p = Rv();
    return p && r.setAttribute("nonce", p), f.insertBefore(r, h), r;
  },
  _v = (function () {
    function u(c) {
      (this.element = Cm(c)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (f) {
          if (f.sheet) return f.sheet;
          for (var r = document.styleSheets, s = 0, h = r.length; s < h; s++) {
            var p = r[s];
            if (p.ownerNode === f) return p;
          }
          throw ou(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (u.prototype.insertRule = function (c, f) {
        try {
          return this.sheet.insertRule(f, c), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (u.prototype.deleteRule = function (c) {
        this.sheet.deleteRule(c), this.length--;
      }),
      (u.prototype.getRule = function (c) {
        var f = this.sheet.cssRules[c];
        return f && f.cssText ? f.cssText : "";
      }),
      u
    );
  })(),
  wv = (function () {
    function u(c) {
      (this.element = Cm(c)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (u.prototype.insertRule = function (c, f) {
        if (c <= this.length && c >= 0) {
          var r = document.createTextNode(f);
          return (
            this.element.insertBefore(r, this.nodes[c] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (u.prototype.deleteRule = function (c) {
        this.element.removeChild(this.nodes[c]), this.length--;
      }),
      (u.prototype.getRule = function (c) {
        return c < this.length ? this.nodes[c].textContent : "";
      }),
      u
    );
  })(),
  Ov = (function () {
    function u(c) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (u.prototype.insertRule = function (c, f) {
        return (
          c <= this.length && (this.rules.splice(c, 0, f), this.length++, !0)
        );
      }),
      (u.prototype.deleteRule = function (c) {
        this.rules.splice(c, 1), this.length--;
      }),
      (u.prototype.getRule = function (c) {
        return c < this.length ? this.rules[c] : "";
      }),
      u
    );
  })(),
  um = Gi,
  zv = { isServer: !Gi, useCSSOMInjection: !nv },
  Mm = (function () {
    function u(c, f, r) {
      c === void 0 && (c = Ia), f === void 0 && (f = {});
      var s = this;
      (this.options = re(re({}, zv), c)),
        (this.gs = f),
        (this.names = new Map(r)),
        (this.server = !!c.isServer),
        !this.server && Gi && um && ((um = !1), nm(this)),
        Yf(this, function () {
          return (function (h) {
            for (
              var p = h.getTag(),
                x = p.length,
                v = "",
                m = function (N) {
                  var z = (function (B) {
                    return Xi.get(B);
                  })(N);
                  if (z === void 0) return "continue";
                  var j = h.names.get(z),
                    q = p.getGroup(N);
                  if (j === void 0 || !j.size || q.length === 0)
                    return "continue";
                  var X = ""
                      .concat(Pa, ".g")
                      .concat(N, '[id="')
                      .concat(z, '"]'),
                    L = "";
                  j !== void 0 &&
                    j.forEach(function (B) {
                      B.length > 0 && (L += "".concat(B, ","));
                    }),
                    (v += ""
                      .concat(q)
                      .concat(X, '{content:"')
                      .concat(L, '"}')
                      .concat(Lf));
                },
                g = 0;
              g < x;
              g++
            )
              m(g);
            return v;
          })(s);
        });
    }
    return (
      (u.registerId = function (c) {
        return Ni(c);
      }),
      (u.prototype.rehydrate = function () {
        !this.server && Gi && nm(this);
      }),
      (u.prototype.reconstructWithOptions = function (c, f) {
        return (
          f === void 0 && (f = !0),
          new u(
            re(re({}, this.options), c),
            this.gs,
            (f && this.names) || void 0
          )
        );
      }),
      (u.prototype.allocateGSInstance = function (c) {
        return (this.gs[c] = (this.gs[c] || 0) + 1);
      }),
      (u.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((c = (function (f) {
              var r = f.useCSSOMInjection,
                s = f.target;
              return f.isServer ? new Ov(s) : r ? new _v(s) : new wv(s);
            })(this.options)),
            new bv(c)))
        );
        var c;
      }),
      (u.prototype.hasNameForId = function (c, f) {
        return this.names.has(c) && this.names.get(c).has(f);
      }),
      (u.prototype.registerName = function (c, f) {
        if ((Ni(c), this.names.has(c))) this.names.get(c).add(f);
        else {
          var r = new Set();
          r.add(f), this.names.set(c, r);
        }
      }),
      (u.prototype.insertRules = function (c, f, r) {
        this.registerName(c, f), this.getTag().insertRules(Ni(c), r);
      }),
      (u.prototype.clearNames = function (c) {
        this.names.has(c) && this.names.get(c).clear();
      }),
      (u.prototype.clearRules = function (c) {
        this.getTag().clearGroup(Ni(c)), this.clearNames(c);
      }),
      (u.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      u
    );
  })(),
  Nv = /&/g,
  Dv = /^\s*\/\/.*$/gm;
function jm(u, c) {
  return u.map(function (f) {
    return (
      f.type === "rule" &&
        ((f.value = "".concat(c, " ").concat(f.value)),
        (f.value = f.value.replaceAll(",", ",".concat(c, " "))),
        (f.props = f.props.map(function (r) {
          return "".concat(c, " ").concat(r);
        }))),
      Array.isArray(f.children) &&
        f.type !== "@keyframes" &&
        (f.children = jm(f.children, c)),
      f
    );
  });
}
function Cv(u) {
  var c,
    f,
    r,
    s = Ia,
    h = s.options,
    p = h === void 0 ? Ia : h,
    x = s.plugins,
    v = x === void 0 ? $i : x,
    m = function (z, j, q) {
      return q.startsWith(f) && q.endsWith(f) && q.replaceAll(f, "").length > 0
        ? ".".concat(c)
        : z;
    },
    g = v.slice();
  g.push(function (z) {
    z.type === Zi &&
      z.value.includes("&") &&
      (z.props[0] = z.props[0].replace(Nv, f).replace(r, m));
  }),
    p.prefix && g.push(lv),
    g.push(Ip);
  var N = function (z, j, q, X) {
    j === void 0 && (j = ""),
      q === void 0 && (q = ""),
      X === void 0 && (X = "&"),
      (c = X),
      (f = j),
      (r = new RegExp("\\".concat(f, "\\b"), "g"));
    var L = z.replace(Dv, ""),
      B = Fp(q || j ? "".concat(q, " ").concat(j, " { ").concat(L, " }") : L);
    p.namespace && (B = jm(B, p.namespace));
    var Y = [];
    return (
      Yi(
        B,
        tv(
          g.concat(
            ev(function (G) {
              return Y.push(G);
            })
          )
        )
      ),
      Y
    );
  };
  return (
    (N.hash = v.length
      ? v
          .reduce(function (z, j) {
            return j.name || ou(15), $a(z, j.name);
          }, _m)
          .toString()
      : ""),
    N
  );
}
var Mv = new Mm(),
  Df = Cv(),
  Um = cu.createContext({
    shouldForwardProp: void 0,
    styleSheet: Mv,
    stylis: Df,
  });
Um.Consumer;
cu.createContext(void 0);
function im() {
  return E.useContext(Um);
}
var jv = (function () {
    function u(c, f) {
      var r = this;
      (this.inject = function (s, h) {
        h === void 0 && (h = Df);
        var p = r.name + h.hash;
        s.hasNameForId(r.id, p) ||
          s.insertRules(r.id, p, h(r.rules, p, "@keyframes"));
      }),
        (this.name = c),
        (this.id = "sc-keyframes-".concat(c)),
        (this.rules = f),
        Yf(this, function () {
          throw ou(12, String(r.name));
        });
    }
    return (
      (u.prototype.getName = function (c) {
        return c === void 0 && (c = Df), this.name + c.hash;
      }),
      u
    );
  })(),
  Uv = function (u) {
    return u >= "A" && u <= "Z";
  };
function cm(u) {
  for (var c = "", f = 0; f < u.length; f++) {
    var r = u[f];
    if (f === 1 && r === "-" && u[0] === "-") return u;
    Uv(r) ? (c += "-" + r.toLowerCase()) : (c += r);
  }
  return c.startsWith("ms-") ? "-" + c : c;
}
var Hm = function (u) {
    return u == null || u === !1 || u === "";
  },
  Bm = function (u) {
    var c,
      f,
      r = [];
    for (var s in u) {
      var h = u[s];
      u.hasOwnProperty(s) &&
        !Hm(h) &&
        ((Array.isArray(h) && h.isCss) || tn(h)
          ? r.push("".concat(cm(s), ":"), h, ";")
          : ru(h)
          ? r.push.apply(r, qi(qi(["".concat(s, " {")], Bm(h), !1), ["}"], !1))
          : r.push(
              ""
                .concat(cm(s), ": ")
                .concat(
                  ((c = s),
                  (f = h) == null || typeof f == "boolean" || f === ""
                    ? ""
                    : typeof f != "number" ||
                      f === 0 ||
                      c in av ||
                      c.startsWith("--")
                    ? String(f).trim()
                    : "".concat(f, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function ca(u, c, f, r) {
  if (Hm(u)) return [];
  if (qf(u)) return [".".concat(u.styledComponentId)];
  if (tn(u)) {
    if (!tn((h = u)) || (h.prototype && h.prototype.isReactComponent) || !c)
      return [u];
    var s = u(c);
    return ca(s, c, f, r);
  }
  var h;
  return u instanceof jv
    ? f
      ? (u.inject(f, r), [u.getName(r)])
      : [u]
    : ru(u)
    ? Bm(u)
    : Array.isArray(u)
    ? Array.prototype.concat.apply(
        $i,
        u.map(function (p) {
          return ca(p, c, f, r);
        })
      )
    : [u.toString()];
}
function Hv(u) {
  for (var c = 0; c < u.length; c += 1) {
    var f = u[c];
    if (tn(f) && !qf(f)) return !1;
  }
  return !0;
}
var Bv = wm(Ji),
  Lv = (function () {
    function u(c, f, r) {
      (this.rules = c),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Hv(c)),
        (this.componentId = f),
        (this.baseHash = $a(Bv, f)),
        (this.baseStyle = r),
        Mm.registerId(f);
    }
    return (
      (u.prototype.generateAndInjectStyles = function (c, f, r) {
        var s = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(c, f, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            f.hasNameForId(this.componentId, this.staticRulesId)
          )
            s = ua(s, this.staticRulesId);
          else {
            var h = am(ca(this.rules, c, f, r)),
              p = zf($a(this.baseHash, h) >>> 0);
            if (!f.hasNameForId(this.componentId, p)) {
              var x = r(h, ".".concat(p), void 0, this.componentId);
              f.insertRules(this.componentId, p, x);
            }
            (s = ua(s, p)), (this.staticRulesId = p);
          }
        else {
          for (
            var v = $a(this.baseHash, r.hash), m = "", g = 0;
            g < this.rules.length;
            g++
          ) {
            var N = this.rules[g];
            if (typeof N == "string") m += N;
            else if (N) {
              var z = am(ca(N, c, f, r));
              (v = $a(v, z + g)), (m += z);
            }
          }
          if (m) {
            var j = zf(v >>> 0);
            f.hasNameForId(this.componentId, j) ||
              f.insertRules(
                this.componentId,
                j,
                r(m, ".".concat(j), void 0, this.componentId)
              ),
              (s = ua(s, j));
          }
        }
        return s;
      }),
      u
    );
  })(),
  Lm = cu.createContext(void 0);
Lm.Consumer;
var Ef = {};
function qv(u, c, f) {
  var r = qf(u),
    s = u,
    h = !xf(u),
    p = c.attrs,
    x = p === void 0 ? $i : p,
    v = c.componentId,
    m =
      v === void 0
        ? (function (k, K) {
            var P = typeof k != "string" ? "sc" : Ph(k);
            Ef[P] = (Ef[P] || 0) + 1;
            var $ = "".concat(P, "-").concat(fv(Ji + P + Ef[P]));
            return K ? "".concat(K, "-").concat($) : $;
          })(c.displayName, c.parentComponentId)
        : v,
    g = c.displayName,
    N =
      g === void 0
        ? (function (k) {
            return xf(k) ? "styled.".concat(k) : "Styled(".concat(ov(k), ")");
          })(u)
        : g,
    z =
      c.displayName && c.componentId
        ? "".concat(Ph(c.displayName), "-").concat(c.componentId)
        : c.componentId || m,
    j = r && s.attrs ? s.attrs.concat(x).filter(Boolean) : x,
    q = c.shouldForwardProp;
  if (r && s.shouldForwardProp) {
    var X = s.shouldForwardProp;
    if (c.shouldForwardProp) {
      var L = c.shouldForwardProp;
      q = function (k, K) {
        return X(k, K) && L(k, K);
      };
    } else q = X;
  }
  var B = new Lv(f, z, r ? s.componentStyle : void 0);
  function Y(k, K) {
    return (function (P, $, bt) {
      var Tt = P.attrs,
        te = P.componentStyle,
        le = P.defaultProps,
        qt = P.foldedComponentIds,
        Ke = P.styledComponentId,
        ke = P.target,
        Yt = cu.useContext(Lm),
        D = im(),
        Z = P.shouldForwardProp || D.shouldForwardProp,
        I = uv($, Yt, le) || Ia,
        rt = (function (ft, et, Gt) {
          for (
            var yt,
              Wt = re(re({}, et), { className: void 0, theme: Gt }),
              ql = 0;
            ql < ft.length;
            ql += 1
          ) {
            var Je = tn((yt = ft[ql])) ? yt(Wt) : yt;
            for (var Se in Je)
              Wt[Se] =
                Se === "className"
                  ? ua(Wt[Se], Je[Se])
                  : Se === "style"
                  ? re(re({}, Wt[Se]), Je[Se])
                  : Je[Se];
          }
          return (
            et.className && (Wt.className = ua(Wt.className, et.className)), Wt
          );
        })(Tt, $, I),
        b = rt.as || ke,
        H = {};
      for (var Q in rt)
        rt[Q] === void 0 ||
          Q[0] === "$" ||
          Q === "as" ||
          (Q === "theme" && rt.theme === I) ||
          (Q === "forwardedAs"
            ? (H.as = rt.forwardedAs)
            : (Z && !Z(Q, b)) || (H[Q] = rt[Q]));
      var V = (function (ft, et) {
          var Gt = im(),
            yt = ft.generateAndInjectStyles(et, Gt.styleSheet, Gt.stylis);
          return yt;
        })(te, rt),
        F = ua(qt, Ke);
      return (
        V && (F += " " + V),
        rt.className && (F += " " + rt.className),
        (H[xf(b) && !Rm.has(b) ? "class" : "className"] = F),
        bt && (H.ref = bt),
        E.createElement(b, H)
      );
    })(G, k, K);
  }
  Y.displayName = N;
  var G = cu.forwardRef(Y);
  return (
    (G.attrs = j),
    (G.componentStyle = B),
    (G.displayName = N),
    (G.shouldForwardProp = q),
    (G.foldedComponentIds = r
      ? ua(s.foldedComponentIds, s.styledComponentId)
      : ""),
    (G.styledComponentId = z),
    (G.target = r ? s.target : u),
    Object.defineProperty(G, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (k) {
        this._foldedDefaultProps = r
          ? (function (K) {
              for (var P = [], $ = 1; $ < arguments.length; $++)
                P[$ - 1] = arguments[$];
              for (var bt = 0, Tt = P; bt < Tt.length; bt++) Nf(K, Tt[bt], !0);
              return K;
            })({}, s.defaultProps, k)
          : k;
      },
    }),
    Yf(G, function () {
      return ".".concat(G.styledComponentId);
    }),
    h &&
      Dm(G, u, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    G
  );
}
function rm(u, c) {
  for (var f = [u[0]], r = 0, s = c.length; r < s; r += 1)
    f.push(c[r], u[r + 1]);
  return f;
}
var fm = function (u) {
  return Object.assign(u, { isCss: !0 });
};
function Yv(u) {
  for (var c = [], f = 1; f < arguments.length; f++) c[f - 1] = arguments[f];
  if (tn(u) || ru(u)) return fm(ca(rm($i, qi([u], c, !0))));
  var r = u;
  return c.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? ca(r)
    : fm(ca(rm(r, c)));
}
function Cf(u, c, f) {
  if ((f === void 0 && (f = Ia), !c)) throw ou(1, c);
  var r = function (s) {
    for (var h = [], p = 1; p < arguments.length; p++) h[p - 1] = arguments[p];
    return u(c, f, Yv.apply(void 0, qi([s], h, !1)));
  };
  return (
    (r.attrs = function (s) {
      return Cf(
        u,
        c,
        re(re({}, f), {
          attrs: Array.prototype.concat(f.attrs, s).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (s) {
      return Cf(u, c, re(re({}, f), s));
    }),
    r
  );
}
var qm = function (u) {
    return Cf(qv, u);
  },
  Ym = qm;
Rm.forEach(function (u) {
  Ym[u] = qm(u);
});
const Gv = ({ id: u, onToggle: c, likes: f, likeIsOn: r, fetchDone: s }) => {
    const [h, p] = E.useState(r);
    return (
      E.useEffect(() => {
        p(s);
      }, [s]),
      A.jsx(Xv, {
        children: A.jsxs("div", {
          className: "like-button",
          children: [
            A.jsx("input", {
              className: "on",
              id: u,
              type: "checkbox",
              style: { display: "none" },
              checked: r,
              onChange: (x) => c?.(x.target.checked),
            }),
            A.jsx("label", {
              className: "like",
              htmlFor: u,
              children: A.jsx("svg", {
                className: "like-icon",
                fillRule: "nonzero",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: A.jsx("path", {
                  d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z",
                }),
              }),
            }),
            A.jsx("span", {
              className: "like-count one",
              children: h ? f - 1 : f,
            }),
            A.jsx("span", {
              className: "like-count two",
              children: h ? f : f + 1,
            }),
          ],
        }),
      })
    );
  },
  Xv = Ym.div`
  #heart {
    display: none;
  }

  .like-button {
    pointer-events: auto; /* keep it clickable */
    user-select: none; /* prevent text selection */
    position: relative;
    cursor: pointer;
    display: flex;
    height: 40px; /* smaller height */
    width: 100px; /* smaller width */
    border-radius: 9999px; /* full pill shape */
    border: none;
    background-color: transparent;
    overflow: hidden;
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.15),
      inset 1px 1px 3px rgba(0, 0, 0, 0.15), 2px 2px 6px rgba(0, 0, 0, 0.3),
      -1px -1px 4px rgba(255, 255, 255, 0.08);
  }

  .like {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px; /* tighter spacing */
    cursor: pointer;
  }

  .like-icon {
    fill: #505050;
    height: 25px; /* smaller heart */
    width: 25px;
    transition: fill 0.2s ease;
  }

  .like-count {
    position: absolute;
    right: 0;
    cursor: default;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: left;
    padding-left: 7px;
    align-items: center;
    color: #717070;
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    border-left: 1px solid #3a3a3a;
    transition: all 0.3s ease-out;
    background-color: #1b1b1bff;
  }

  .like-count.two {
    transform: translateY(30px);
  }

  .on:checked ~ .like .like-icon {
    fill: #fc4e4e;
    animation: enlarge 0.2s ease-out 1;
  }

  .on:checked ~ .like-count.two {
    transform: translateX(0);
    color: #fcfcfc;
  }

  .on:checked ~ .like-count.one {
    transform: translateY(-30px);
  }

  @keyframes enlarge {
    0% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var om = "popstate";
function Qv(u = {}) {
  function c(r, s) {
    let { pathname: h, search: p, hash: x } = r.location;
    return Mf(
      "",
      { pathname: h, search: p, hash: x },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function f(r, s) {
    return typeof s == "string" ? s : fu(s);
  }
  return Vv(c, f, null, u);
}
function zt(u, c) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(c);
}
function Qe(u, c) {
  if (!u) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Zv() {
  return Math.random().toString(36).substring(2, 10);
}
function sm(u, c) {
  return { usr: u.state, key: u.key, idx: c };
}
function Mf(u, c, f = null, r) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...(typeof c == "string" ? ln(c) : c),
    state: f,
    key: (c && c.key) || r || Zv(),
  };
}
function fu({ pathname: u = "/", search: c = "", hash: f = "" }) {
  return (
    c && c !== "?" && (u += c.charAt(0) === "?" ? c : "?" + c),
    f && f !== "#" && (u += f.charAt(0) === "#" ? f : "#" + f),
    u
  );
}
function ln(u) {
  let c = {};
  if (u) {
    let f = u.indexOf("#");
    f >= 0 && ((c.hash = u.substring(f)), (u = u.substring(0, f)));
    let r = u.indexOf("?");
    r >= 0 && ((c.search = u.substring(r)), (u = u.substring(0, r))),
      u && (c.pathname = u);
  }
  return c;
}
function Vv(u, c, f, r = {}) {
  let { window: s = document.defaultView, v5Compat: h = !1 } = r,
    p = s.history,
    x = "POP",
    v = null,
    m = g();
  m == null && ((m = 0), p.replaceState({ ...p.state, idx: m }, ""));
  function g() {
    return (p.state || { idx: null }).idx;
  }
  function N() {
    x = "POP";
    let L = g(),
      B = L == null ? null : L - m;
    (m = L), v && v({ action: x, location: X.location, delta: B });
  }
  function z(L, B) {
    x = "PUSH";
    let Y = Mf(X.location, L, B);
    m = g() + 1;
    let G = sm(Y, m),
      k = X.createHref(Y);
    try {
      p.pushState(G, "", k);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError") throw K;
      s.location.assign(k);
    }
    h && v && v({ action: x, location: X.location, delta: 1 });
  }
  function j(L, B) {
    x = "REPLACE";
    let Y = Mf(X.location, L, B);
    m = g();
    let G = sm(Y, m),
      k = X.createHref(Y);
    p.replaceState(G, "", k),
      h && v && v({ action: x, location: X.location, delta: 0 });
  }
  function q(L) {
    return Kv(L);
  }
  let X = {
    get action() {
      return x;
    },
    get location() {
      return u(s, p);
    },
    listen(L) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(om, N),
        (v = L),
        () => {
          s.removeEventListener(om, N), (v = null);
        }
      );
    },
    createHref(L) {
      return c(s, L);
    },
    createURL: q,
    encodeLocation(L) {
      let B = q(L);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: z,
    replace: j,
    go(L) {
      return p.go(L);
    },
  };
  return X;
}
function Kv(u, c = !1) {
  let f = "http://localhost";
  typeof window < "u" &&
    (f =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    zt(f, "No window.location.(origin|href) available to create URL");
  let r = typeof u == "string" ? u : fu(u);
  return (
    (r = r.replace(/ $/, "%20")),
    !c && r.startsWith("//") && (r = f + r),
    new URL(r, f)
  );
}
function Gm(u, c, f = "/") {
  return kv(u, c, f, !1);
}
function kv(u, c, f, r) {
  let s = typeof c == "string" ? ln(c) : c,
    h = dl(s.pathname || "/", f);
  if (h == null) return null;
  let p = Xm(u);
  Jv(p);
  let x = null;
  for (let v = 0; x == null && v < p.length; ++v) {
    let m = ug(h);
    x = ag(p[v], m, r);
  }
  return x;
}
function Xm(u, c = [], f = [], r = "", s = !1) {
  let h = (p, x, v = s, m) => {
    let g = {
      relativePath: m === void 0 ? p.path || "" : m,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: x,
      route: p,
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(r) && v) return;
      zt(
        g.relativePath.startsWith(r),
        `Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (g.relativePath = g.relativePath.slice(r.length));
    }
    let N = sl([r, g.relativePath]),
      z = f.concat(g);
    p.children &&
      p.children.length > 0 &&
      (zt(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${N}".`
      ),
      Xm(p.children, c, z, N, v)),
      !(p.path == null && !p.index) &&
        c.push({ path: N, score: eg(N, p.index), routesMeta: z });
  };
  return (
    u.forEach((p, x) => {
      if (p.path === "" || !p.path?.includes("?")) h(p, x);
      else for (let v of Qm(p.path)) h(p, x, !0, v);
    }),
    c
  );
}
function Qm(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [f, ...r] = c,
    s = f.endsWith("?"),
    h = f.replace(/\?$/, "");
  if (r.length === 0) return s ? [h, ""] : [h];
  let p = Qm(r.join("/")),
    x = [];
  return (
    x.push(...p.map((v) => (v === "" ? h : [h, v].join("/")))),
    s && x.push(...p),
    x.map((v) => (u.startsWith("/") && v === "" ? "/" : v))
  );
}
function Jv(u) {
  u.sort((c, f) =>
    c.score !== f.score
      ? f.score - c.score
      : lg(
          c.routesMeta.map((r) => r.childrenIndex),
          f.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var $v = /^:[\w-]+$/,
  Wv = 3,
  Fv = 2,
  Pv = 1,
  Iv = 10,
  tg = -2,
  dm = (u) => u === "*";
function eg(u, c) {
  let f = u.split("/"),
    r = f.length;
  return (
    f.some(dm) && (r += tg),
    c && (r += Fv),
    f
      .filter((s) => !dm(s))
      .reduce((s, h) => s + ($v.test(h) ? Wv : h === "" ? Pv : Iv), r)
  );
}
function lg(u, c) {
  return u.length === c.length && u.slice(0, -1).every((r, s) => r === c[s])
    ? u[u.length - 1] - c[c.length - 1]
    : 0;
}
function ag(u, c, f = !1) {
  let { routesMeta: r } = u,
    s = {},
    h = "/",
    p = [];
  for (let x = 0; x < r.length; ++x) {
    let v = r[x],
      m = x === r.length - 1,
      g = h === "/" ? c : c.slice(h.length) || "/",
      N = Qi(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: m },
        g
      ),
      z = v.route;
    if (
      (!N &&
        m &&
        f &&
        !r[r.length - 1].route.index &&
        (N = Qi(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          g
        )),
      !N)
    )
      return null;
    Object.assign(s, N.params),
      p.push({
        params: s,
        pathname: sl([h, N.pathname]),
        pathnameBase: fg(sl([h, N.pathnameBase])),
        route: z,
      }),
      N.pathnameBase !== "/" && (h = sl([h, N.pathnameBase]));
  }
  return p;
}
function Qi(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [f, r] = ng(u.path, u.caseSensitive, u.end),
    s = c.match(f);
  if (!s) return null;
  let h = s[0],
    p = h.replace(/(.)\/+$/, "$1"),
    x = s.slice(1);
  return {
    params: r.reduce((m, { paramName: g, isOptional: N }, z) => {
      if (g === "*") {
        let q = x[z] || "";
        p = h.slice(0, h.length - q.length).replace(/(.)\/+$/, "$1");
      }
      const j = x[z];
      return (
        N && !j ? (m[g] = void 0) : (m[g] = (j || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: h,
    pathnameBase: p,
    pattern: u,
  };
}
function ng(u, c = !1, f = !0) {
  Qe(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    s =
      "^" +
      u
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, x, v) => (
            r.push({ paramName: x, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    u.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : f
      ? (s += "\\/*$")
      : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, c ? void 0 : "i"), r]
  );
}
function ug(u) {
  try {
    return u
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      Qe(
        !1,
        `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
      ),
      u
    );
  }
}
function dl(u, c) {
  if (c === "/") return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase())) return null;
  let f = c.endsWith("/") ? c.length - 1 : c.length,
    r = u.charAt(f);
  return r && r !== "/" ? null : u.slice(f) || "/";
}
function ig(u, c = "/") {
  let {
    pathname: f,
    search: r = "",
    hash: s = "",
  } = typeof u == "string" ? ln(u) : u;
  return {
    pathname: f ? (f.startsWith("/") ? f : cg(f, c)) : c,
    search: og(r),
    hash: sg(s),
  };
}
function cg(u, c) {
  let f = c.replace(/\/+$/, "").split("/");
  return (
    u.split("/").forEach((s) => {
      s === ".." ? f.length > 1 && f.pop() : s !== "." && f.push(s);
    }),
    f.length > 1 ? f.join("/") : "/"
  );
}
function Tf(u, c, f, r) {
  return `Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rg(u) {
  return u.filter(
    (c, f) => f === 0 || (c.route.path && c.route.path.length > 0)
  );
}
function Zm(u) {
  let c = rg(u);
  return c.map((f, r) => (r === c.length - 1 ? f.pathname : f.pathnameBase));
}
function Vm(u, c, f, r = !1) {
  let s;
  typeof u == "string"
    ? (s = ln(u))
    : ((s = { ...u }),
      zt(
        !s.pathname || !s.pathname.includes("?"),
        Tf("?", "pathname", "search", s)
      ),
      zt(
        !s.pathname || !s.pathname.includes("#"),
        Tf("#", "pathname", "hash", s)
      ),
      zt(!s.search || !s.search.includes("#"), Tf("#", "search", "hash", s)));
  let h = u === "" || s.pathname === "",
    p = h ? "/" : s.pathname,
    x;
  if (p == null) x = f;
  else {
    let N = c.length - 1;
    if (!r && p.startsWith("..")) {
      let z = p.split("/");
      for (; z[0] === ".."; ) z.shift(), (N -= 1);
      s.pathname = z.join("/");
    }
    x = N >= 0 ? c[N] : "/";
  }
  let v = ig(s, x),
    m = p && p !== "/" && p.endsWith("/"),
    g = (h || p === ".") && f.endsWith("/");
  return !v.pathname.endsWith("/") && (m || g) && (v.pathname += "/"), v;
}
var sl = (u) => u.join("/").replace(/\/\/+/g, "/"),
  fg = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  og = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
  sg = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u);
function dg(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.internal == "boolean" &&
    "data" in u
  );
}
var Km = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Km);
var hg = ["GET", ...Km];
new Set(hg);
var an = E.createContext(null);
an.displayName = "DataRouter";
var Wi = E.createContext(null);
Wi.displayName = "DataRouterState";
E.createContext(!1);
var km = E.createContext({ isTransitioning: !1 });
km.displayName = "ViewTransition";
var mg = E.createContext(new Map());
mg.displayName = "Fetchers";
var yg = E.createContext(null);
yg.displayName = "Await";
var Ze = E.createContext(null);
Ze.displayName = "Navigation";
var su = E.createContext(null);
su.displayName = "Location";
var Ve = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ve.displayName = "Route";
var Gf = E.createContext(null);
Gf.displayName = "RouteError";
function pg(u, { relative: c } = {}) {
  zt(
    du(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: r } = E.useContext(Ze),
    { hash: s, pathname: h, search: p } = hu(u, { relative: c }),
    x = h;
  return (
    f !== "/" && (x = h === "/" ? f : sl([f, h])),
    r.createHref({ pathname: x, search: p, hash: s })
  );
}
function du() {
  return E.useContext(su) != null;
}
function Ll() {
  return (
    zt(
      du(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    E.useContext(su).location
  );
}
var Jm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $m(u) {
  E.useContext(Ze).static || E.useLayoutEffect(u);
}
function Fi() {
  let { isDataRoute: u } = E.useContext(Ve);
  return u ? Ng() : vg();
}
function vg() {
  zt(
    du(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = E.useContext(an),
    { basename: c, navigator: f } = E.useContext(Ze),
    { matches: r } = E.useContext(Ve),
    { pathname: s } = Ll(),
    h = JSON.stringify(Zm(r)),
    p = E.useRef(!1);
  return (
    $m(() => {
      p.current = !0;
    }),
    E.useCallback(
      (v, m = {}) => {
        if ((Qe(p.current, Jm), !p.current)) return;
        if (typeof v == "number") {
          f.go(v);
          return;
        }
        let g = Vm(v, JSON.parse(h), s, m.relative === "path");
        u == null &&
          c !== "/" &&
          (g.pathname = g.pathname === "/" ? c : sl([c, g.pathname])),
          (m.replace ? f.replace : f.push)(g, m.state, m);
      },
      [c, f, h, s, u]
    )
  );
}
E.createContext(null);
function gg() {
  let { matches: u } = E.useContext(Ve),
    c = u[u.length - 1];
  return c ? c.params : {};
}
function hu(u, { relative: c } = {}) {
  let { matches: f } = E.useContext(Ve),
    { pathname: r } = Ll(),
    s = JSON.stringify(Zm(f));
  return E.useMemo(() => Vm(u, JSON.parse(s), r, c === "path"), [u, s, r, c]);
}
function bg(u, c) {
  return Wm(u, c);
}
function Wm(u, c, f, r, s) {
  zt(
    du(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = E.useContext(Ze),
    { matches: p } = E.useContext(Ve),
    x = p[p.length - 1],
    v = x ? x.params : {},
    m = x ? x.pathname : "/",
    g = x ? x.pathnameBase : "/",
    N = x && x.route;
  {
    let Y = (N && N.path) || "";
    Fm(
      m,
      !N || Y.endsWith("*") || Y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${
        Y === "/" ? "*" : `${Y}/*`
      }">.`
    );
  }
  let z = Ll(),
    j;
  if (c) {
    let Y = typeof c == "string" ? ln(c) : c;
    zt(
      g === "/" || Y.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${Y.pathname}" was given in the \`location\` prop.`
    ),
      (j = Y);
  } else j = z;
  let q = j.pathname || "/",
    X = q;
  if (g !== "/") {
    let Y = g.replace(/^\//, "").split("/");
    X = "/" + q.replace(/^\//, "").split("/").slice(Y.length).join("/");
  }
  let L = Gm(u, { pathname: X });
  Qe(
    N || L != null,
    `No routes matched location "${j.pathname}${j.search}${j.hash}" `
  ),
    Qe(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let B = Ag(
    L &&
      L.map((Y) =>
        Object.assign({}, Y, {
          params: Object.assign({}, v, Y.params),
          pathname: sl([
            g,
            h.encodeLocation
              ? h.encodeLocation(Y.pathname).pathname
              : Y.pathname,
          ]),
          pathnameBase:
            Y.pathnameBase === "/"
              ? g
              : sl([
                  g,
                  h.encodeLocation
                    ? h.encodeLocation(Y.pathnameBase).pathname
                    : Y.pathnameBase,
                ]),
        })
      ),
    p,
    f,
    r,
    s
  );
  return c && B
    ? E.createElement(
        su.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...j,
            },
            navigationType: "POP",
          },
        },
        B
      )
    : B;
}
function Sg() {
  let u = zg(),
    c = dg(u)
      ? `${u.status} ${u.statusText}`
      : u instanceof Error
      ? u.message
      : JSON.stringify(u),
    f = u instanceof Error ? u.stack : null,
    r = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: r },
    h = { padding: "2px 4px", backgroundColor: r },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", u),
    (p = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: h }, "errorElement"),
        " prop on your route."
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, c),
      f ? E.createElement("pre", { style: s }, f) : null,
      p
    )
  );
}
var xg = E.createElement(Sg, null),
  Eg = class extends E.Component {
    constructor(u) {
      super(u),
        (this.state = {
          location: u.location,
          revalidation: u.revalidation,
          error: u.error,
        });
    }
    static getDerivedStateFromError(u) {
      return { error: u };
    }
    static getDerivedStateFromProps(u, c) {
      return c.location !== u.location ||
        (c.revalidation !== "idle" && u.revalidation === "idle")
        ? { error: u.error, location: u.location, revalidation: u.revalidation }
        : {
            error: u.error !== void 0 ? u.error : c.error,
            location: c.location,
            revalidation: u.revalidation || c.revalidation,
          };
    }
    componentDidCatch(u, c) {
      this.props.unstable_onError
        ? this.props.unstable_onError(u, c)
        : console.error(
            "React Router caught the following error during render",
            u
          );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            Ve.Provider,
            { value: this.props.routeContext },
            E.createElement(Gf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Tg({ routeContext: u, match: c, children: f }) {
  let r = E.useContext(an);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = c.route.id),
    E.createElement(Ve.Provider, { value: u }, f)
  );
}
function Ag(u, c = [], f = null, r = null, s = null) {
  if (u == null) {
    if (!f) return null;
    if (f.errors) u = f.matches;
    else if (c.length === 0 && !f.initialized && f.matches.length > 0)
      u = f.matches;
    else return null;
  }
  let h = u,
    p = f?.errors;
  if (p != null) {
    let m = h.findIndex((g) => g.route.id && p?.[g.route.id] !== void 0);
    zt(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
      ).join(",")}`
    ),
      (h = h.slice(0, Math.min(h.length, m + 1)));
  }
  let x = !1,
    v = -1;
  if (f)
    for (let m = 0; m < h.length; m++) {
      let g = h[m];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (v = m),
        g.route.id)
      ) {
        let { loaderData: N, errors: z } = f,
          j =
            g.route.loader &&
            !N.hasOwnProperty(g.route.id) &&
            (!z || z[g.route.id] === void 0);
        if (g.route.lazy || j) {
          (x = !0), v >= 0 ? (h = h.slice(0, v + 1)) : (h = [h[0]]);
          break;
        }
      }
    }
  return h.reduceRight((m, g, N) => {
    let z,
      j = !1,
      q = null,
      X = null;
    f &&
      ((z = p && g.route.id ? p[g.route.id] : void 0),
      (q = g.route.errorElement || xg),
      x &&
        (v < 0 && N === 0
          ? (Fm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (j = !0),
            (X = null))
          : v === N &&
            ((j = !0), (X = g.route.hydrateFallbackElement || null))));
    let L = c.concat(h.slice(0, N + 1)),
      B = () => {
        let Y;
        return (
          z
            ? (Y = q)
            : j
            ? (Y = X)
            : g.route.Component
            ? (Y = E.createElement(g.route.Component, null))
            : g.route.element
            ? (Y = g.route.element)
            : (Y = m),
          E.createElement(Tg, {
            match: g,
            routeContext: { outlet: m, matches: L, isDataRoute: f != null },
            children: Y,
          })
        );
      };
    return f && (g.route.ErrorBoundary || g.route.errorElement || N === 0)
      ? E.createElement(Eg, {
          location: f.location,
          revalidation: f.revalidation,
          component: q,
          error: z,
          children: B(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          unstable_onError: r,
        })
      : B();
  }, null);
}
function Xf(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rg(u) {
  let c = E.useContext(an);
  return zt(c, Xf(u)), c;
}
function _g(u) {
  let c = E.useContext(Wi);
  return zt(c, Xf(u)), c;
}
function wg(u) {
  let c = E.useContext(Ve);
  return zt(c, Xf(u)), c;
}
function Qf(u) {
  let c = wg(u),
    f = c.matches[c.matches.length - 1];
  return (
    zt(
      f.route.id,
      `${u} can only be used on routes that contain a unique "id"`
    ),
    f.route.id
  );
}
function Og() {
  return Qf("useRouteId");
}
function zg() {
  let u = E.useContext(Gf),
    c = _g("useRouteError"),
    f = Qf("useRouteError");
  return u !== void 0 ? u : c.errors?.[f];
}
function Ng() {
  let { router: u } = Rg("useNavigate"),
    c = Qf("useNavigate"),
    f = E.useRef(!1);
  return (
    $m(() => {
      f.current = !0;
    }),
    E.useCallback(
      async (s, h = {}) => {
        Qe(f.current, Jm),
          f.current &&
            (typeof s == "number"
              ? u.navigate(s)
              : await u.navigate(s, { fromRouteId: c, ...h }));
      },
      [u, c]
    )
  );
}
var hm = {};
function Fm(u, c, f) {
  !c && !hm[u] && ((hm[u] = !0), Qe(!1, f));
}
E.memo(Dg);
function Dg({ routes: u, future: c, state: f, unstable_onError: r }) {
  return Wm(u, void 0, f, r, c);
}
function na(u) {
  zt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Cg({
  basename: u = "/",
  children: c = null,
  location: f,
  navigationType: r = "POP",
  navigator: s,
  static: h = !1,
}) {
  zt(
    !du(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = u.replace(/^\/*/, "/"),
    x = E.useMemo(
      () => ({ basename: p, navigator: s, static: h, future: {} }),
      [p, s, h]
    );
  typeof f == "string" && (f = ln(f));
  let {
      pathname: v = "/",
      search: m = "",
      hash: g = "",
      state: N = null,
      key: z = "default",
    } = f,
    j = E.useMemo(() => {
      let q = dl(v, p);
      return q == null
        ? null
        : {
            location: { pathname: q, search: m, hash: g, state: N, key: z },
            navigationType: r,
          };
    }, [p, v, m, g, N, z, r]);
  return (
    Qe(
      j != null,
      `<Router basename="${p}"> is not able to match the URL "${v}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    j == null
      ? null
      : E.createElement(
          Ze.Provider,
          { value: x },
          E.createElement(su.Provider, { children: c, value: j })
        )
  );
}
function Mg({ children: u, location: c }) {
  return bg(jf(u), c);
}
function jf(u, c = []) {
  let f = [];
  return (
    E.Children.forEach(u, (r, s) => {
      if (!E.isValidElement(r)) return;
      let h = [...c, s];
      if (r.type === E.Fragment) {
        f.push.apply(f, jf(r.props.children, h));
        return;
      }
      zt(
        r.type === na,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        zt(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let p = {
        id: r.props.id || h.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (p.children = jf(r.props.children, h)), f.push(p);
    }),
    f
  );
}
var Bi = "get",
  Li = "application/x-www-form-urlencoded";
function Pi(u) {
  return u != null && typeof u.tagName == "string";
}
function jg(u) {
  return Pi(u) && u.tagName.toLowerCase() === "button";
}
function Ug(u) {
  return Pi(u) && u.tagName.toLowerCase() === "form";
}
function Hg(u) {
  return Pi(u) && u.tagName.toLowerCase() === "input";
}
function Bg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Lg(u, c) {
  return u.button === 0 && (!c || c === "_self") && !Bg(u);
}
var Di = null;
function qg() {
  if (Di === null)
    try {
      new FormData(document.createElement("form"), 0), (Di = !1);
    } catch {
      Di = !0;
    }
  return Di;
}
var Yg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Af(u) {
  return u != null && !Yg.has(u)
    ? (Qe(
        !1,
        `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Li}"`
      ),
      null)
    : u;
}
function Gg(u, c) {
  let f, r, s, h, p;
  if (Ug(u)) {
    let x = u.getAttribute("action");
    (r = x ? dl(x, c) : null),
      (f = u.getAttribute("method") || Bi),
      (s = Af(u.getAttribute("enctype")) || Li),
      (h = new FormData(u));
  } else if (jg(u) || (Hg(u) && (u.type === "submit" || u.type === "image"))) {
    let x = u.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = u.getAttribute("formaction") || x.getAttribute("action");
    if (
      ((r = v ? dl(v, c) : null),
      (f = u.getAttribute("formmethod") || x.getAttribute("method") || Bi),
      (s =
        Af(u.getAttribute("formenctype")) ||
        Af(x.getAttribute("enctype")) ||
        Li),
      (h = new FormData(x, u)),
      !qg())
    ) {
      let { name: m, type: g, value: N } = u;
      if (g === "image") {
        let z = m ? `${m}.` : "";
        h.append(`${z}x`, "0"), h.append(`${z}y`, "0");
      } else m && h.append(m, N);
    }
  } else {
    if (Pi(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (f = Bi), (r = null), (s = Li), (p = u);
  }
  return (
    h && s === "text/plain" && ((p = h), (h = void 0)),
    { action: r, method: f.toLowerCase(), encType: s, formData: h, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Zf(u, c) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(c);
}
function Xg(u, c, f) {
  let r =
    typeof u == "string"
      ? new URL(
          u,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : u;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${f}`)
      : c && dl(r.pathname, c) === "/"
      ? (r.pathname = `${c.replace(/\/$/, "")}/_root.${f}`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${f}`),
    r
  );
}
async function Qg(u, c) {
  if (u.id in c) return c[u.id];
  try {
    let f = await import(u.module);
    return (c[u.id] = f), f;
  } catch (f) {
    return (
      console.error(
        `Error loading route module \`${u.module}\`, reloading page...`
      ),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Zg(u) {
  return u == null
    ? !1
    : u.href == null
    ? u.rel === "preload" &&
      typeof u.imageSrcSet == "string" &&
      typeof u.imageSizes == "string"
    : typeof u.rel == "string" && typeof u.href == "string";
}
async function Vg(u, c, f) {
  let r = await Promise.all(
    u.map(async (s) => {
      let h = c.routes[s.route.id];
      if (h) {
        let p = await Qg(h, f);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return $g(
    r
      .flat(1)
      .filter(Zg)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" }
      )
  );
}
function mm(u, c, f, r, s, h) {
  let p = (v, m) => (f[m] ? v.route.id !== f[m].route.id : !0),
    x = (v, m) =>
      f[m].pathname !== v.pathname ||
      (f[m].route.path?.endsWith("*") && f[m].params["*"] !== v.params["*"]);
  return h === "assets"
    ? c.filter((v, m) => p(v, m) || x(v, m))
    : h === "data"
    ? c.filter((v, m) => {
        let g = r.routes[v.route.id];
        if (!g || !g.hasLoader) return !1;
        if (p(v, m) || x(v, m)) return !0;
        if (v.route.shouldRevalidate) {
          let N = v.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: f[0]?.params || {},
            nextUrl: new URL(u, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof N == "boolean") return N;
        }
        return !0;
      })
    : [];
}
function Kg(u, c, { includeHydrateFallback: f } = {}) {
  return kg(
    u
      .map((r) => {
        let s = c.routes[r.route.id];
        if (!s) return [];
        let h = [s.module];
        return (
          s.clientActionModule && (h = h.concat(s.clientActionModule)),
          s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)),
          f &&
            s.hydrateFallbackModule &&
            (h = h.concat(s.hydrateFallbackModule)),
          s.imports && (h = h.concat(s.imports)),
          h
        );
      })
      .flat(1)
  );
}
function kg(u) {
  return [...new Set(u)];
}
function Jg(u) {
  let c = {},
    f = Object.keys(u).sort();
  for (let r of f) c[r] = u[r];
  return c;
}
function $g(u, c) {
  let f = new Set();
  return (
    new Set(c),
    u.reduce((r, s) => {
      let h = JSON.stringify(Jg(s));
      return f.has(h) || (f.add(h), r.push({ key: h, link: s })), r;
    }, [])
  );
}
function Pm() {
  let u = E.useContext(an);
  return (
    Zf(
      u,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    u
  );
}
function Wg() {
  let u = E.useContext(Wi);
  return (
    Zf(
      u,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    u
  );
}
var Vf = E.createContext(void 0);
Vf.displayName = "FrameworkContext";
function Im() {
  let u = E.useContext(Vf);
  return (
    Zf(u, "You must render this element inside a <HydratedRouter> element"), u
  );
}
function Fg(u, c) {
  let f = E.useContext(Vf),
    [r, s] = E.useState(!1),
    [h, p] = E.useState(!1),
    {
      onFocus: x,
      onBlur: v,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: N,
    } = c,
    z = E.useRef(null);
  E.useEffect(() => {
    if ((u === "render" && p(!0), u === "viewport")) {
      let X = (B) => {
          B.forEach((Y) => {
            p(Y.isIntersecting);
          });
        },
        L = new IntersectionObserver(X, { threshold: 0.5 });
      return (
        z.current && L.observe(z.current),
        () => {
          L.disconnect();
        }
      );
    }
  }, [u]),
    E.useEffect(() => {
      if (r) {
        let X = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(X);
        };
      }
    }, [r]);
  let j = () => {
      s(!0);
    },
    q = () => {
      s(!1), p(!1);
    };
  return f
    ? u !== "intent"
      ? [h, z, {}]
      : [
          h,
          z,
          {
            onFocus: nu(x, j),
            onBlur: nu(v, q),
            onMouseEnter: nu(m, j),
            onMouseLeave: nu(g, q),
            onTouchStart: nu(N, j),
          },
        ]
    : [!1, z, {}];
}
function nu(u, c) {
  return (f) => {
    u && u(f), f.defaultPrevented || c(f);
  };
}
function Pg({ page: u, ...c }) {
  let { router: f } = Pm(),
    r = E.useMemo(() => Gm(f.routes, u, f.basename), [f.routes, u, f.basename]);
  return r ? E.createElement(t1, { page: u, matches: r, ...c }) : null;
}
function Ig(u) {
  let { manifest: c, routeModules: f } = Im(),
    [r, s] = E.useState([]);
  return (
    E.useEffect(() => {
      let h = !1;
      return (
        Vg(u, c, f).then((p) => {
          h || s(p);
        }),
        () => {
          h = !0;
        }
      );
    }, [u, c, f]),
    r
  );
}
function t1({ page: u, matches: c, ...f }) {
  let r = Ll(),
    { manifest: s, routeModules: h } = Im(),
    { basename: p } = Pm(),
    { loaderData: x, matches: v } = Wg(),
    m = E.useMemo(() => mm(u, c, v, s, r, "data"), [u, c, v, s, r]),
    g = E.useMemo(() => mm(u, c, v, s, r, "assets"), [u, c, v, s, r]),
    N = E.useMemo(() => {
      if (u === r.pathname + r.search + r.hash) return [];
      let q = new Set(),
        X = !1;
      if (
        (c.forEach((B) => {
          let Y = s.routes[B.route.id];
          !Y ||
            !Y.hasLoader ||
            ((!m.some((G) => G.route.id === B.route.id) &&
              B.route.id in x &&
              h[B.route.id]?.shouldRevalidate) ||
            Y.hasClientLoader
              ? (X = !0)
              : q.add(B.route.id));
        }),
        q.size === 0)
      )
        return [];
      let L = Xg(u, p, "data");
      return (
        X &&
          q.size > 0 &&
          L.searchParams.set(
            "_routes",
            c
              .filter((B) => q.has(B.route.id))
              .map((B) => B.route.id)
              .join(",")
          ),
        [L.pathname + L.search]
      );
    }, [p, x, r, s, m, c, u, h]),
    z = E.useMemo(() => Kg(g, s), [g, s]),
    j = Ig(g);
  return E.createElement(
    E.Fragment,
    null,
    N.map((q) =>
      E.createElement("link", {
        key: q,
        rel: "prefetch",
        as: "fetch",
        href: q,
        ...f,
      })
    ),
    z.map((q) =>
      E.createElement("link", { key: q, rel: "modulepreload", href: q, ...f })
    ),
    j.map(({ key: q, link: X }) =>
      E.createElement("link", { key: q, nonce: f.nonce, ...X })
    )
  );
}
function e1(...u) {
  return (c) => {
    u.forEach((f) => {
      typeof f == "function" ? f(c) : f != null && (f.current = c);
    });
  };
}
var t0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  t0 && (window.__reactRouterVersion = "7.8.2");
} catch {}
function l1({ basename: u, children: c, window: f }) {
  let r = E.useRef();
  r.current == null && (r.current = Qv({ window: f, v5Compat: !0 }));
  let s = r.current,
    [h, p] = E.useState({ action: s.action, location: s.location }),
    x = E.useCallback(
      (v) => {
        E.startTransition(() => p(v));
      },
      [p]
    );
  return (
    E.useLayoutEffect(() => s.listen(x), [s, x]),
    E.createElement(Cg, {
      basename: u,
      children: c,
      location: h.location,
      navigationType: h.action,
      navigator: s,
    })
  );
}
var e0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Xe = E.forwardRef(function (
    {
      onClick: c,
      discover: f = "render",
      prefetch: r = "none",
      relative: s,
      reloadDocument: h,
      replace: p,
      state: x,
      target: v,
      to: m,
      preventScrollReset: g,
      viewTransition: N,
      ...z
    },
    j
  ) {
    let { basename: q } = E.useContext(Ze),
      X = typeof m == "string" && e0.test(m),
      L,
      B = !1;
    if (typeof m == "string" && X && ((L = m), t0))
      try {
        let Tt = new URL(window.location.href),
          te = m.startsWith("//") ? new URL(Tt.protocol + m) : new URL(m),
          le = dl(te.pathname, q);
        te.origin === Tt.origin && le != null
          ? (m = le + te.search + te.hash)
          : (B = !0);
      } catch {
        Qe(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Y = pg(m, { relative: s }),
      [G, k, K] = Fg(r, z),
      P = i1(m, {
        replace: p,
        state: x,
        target: v,
        preventScrollReset: g,
        relative: s,
        viewTransition: N,
      });
    function $(Tt) {
      c && c(Tt), Tt.defaultPrevented || P(Tt);
    }
    let bt = E.createElement("a", {
      ...z,
      ...K,
      href: L || Y,
      onClick: B || h ? c : $,
      ref: e1(j, k),
      target: v,
      "data-discover": !X && f === "render" ? "true" : void 0,
    });
    return G && !X
      ? E.createElement(E.Fragment, null, bt, E.createElement(Pg, { page: Y }))
      : bt;
  });
Xe.displayName = "Link";
var a1 = E.forwardRef(function (
  {
    "aria-current": c = "page",
    caseSensitive: f = !1,
    className: r = "",
    end: s = !1,
    style: h,
    to: p,
    viewTransition: x,
    children: v,
    ...m
  },
  g
) {
  let N = hu(p, { relative: m.relative }),
    z = Ll(),
    j = E.useContext(Wi),
    { navigator: q, basename: X } = E.useContext(Ze),
    L = j != null && s1(N) && x === !0,
    B = q.encodeLocation ? q.encodeLocation(N).pathname : N.pathname,
    Y = z.pathname,
    G =
      j && j.navigation && j.navigation.location
        ? j.navigation.location.pathname
        : null;
  f ||
    ((Y = Y.toLowerCase()),
    (G = G ? G.toLowerCase() : null),
    (B = B.toLowerCase())),
    G && X && (G = dl(G, X) || G);
  const k = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
  let K = Y === B || (!s && Y.startsWith(B) && Y.charAt(k) === "/"),
    P =
      G != null &&
      (G === B || (!s && G.startsWith(B) && G.charAt(B.length) === "/")),
    $ = { isActive: K, isPending: P, isTransitioning: L },
    bt = K ? c : void 0,
    Tt;
  typeof r == "function"
    ? (Tt = r($))
    : (Tt = [
        r,
        K ? "active" : null,
        P ? "pending" : null,
        L ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let te = typeof h == "function" ? h($) : h;
  return E.createElement(
    Xe,
    {
      ...m,
      "aria-current": bt,
      className: Tt,
      ref: g,
      style: te,
      to: p,
      viewTransition: x,
    },
    typeof v == "function" ? v($) : v
  );
});
a1.displayName = "NavLink";
var n1 = E.forwardRef(
  (
    {
      discover: u = "render",
      fetcherKey: c,
      navigate: f,
      reloadDocument: r,
      replace: s,
      state: h,
      method: p = Bi,
      action: x,
      onSubmit: v,
      relative: m,
      preventScrollReset: g,
      viewTransition: N,
      ...z
    },
    j
  ) => {
    let q = f1(),
      X = o1(x, { relative: m }),
      L = p.toLowerCase() === "get" ? "get" : "post",
      B = typeof x == "string" && e0.test(x),
      Y = (G) => {
        if ((v && v(G), G.defaultPrevented)) return;
        G.preventDefault();
        let k = G.nativeEvent.submitter,
          K = k?.getAttribute("formmethod") || p;
        q(k || G.currentTarget, {
          fetcherKey: c,
          method: K,
          navigate: f,
          replace: s,
          state: h,
          relative: m,
          preventScrollReset: g,
          viewTransition: N,
        });
      };
    return E.createElement("form", {
      ref: j,
      method: L,
      action: X,
      onSubmit: r ? v : Y,
      ...z,
      "data-discover": !B && u === "render" ? "true" : void 0,
    });
  }
);
n1.displayName = "Form";
function u1(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function l0(u) {
  let c = E.useContext(an);
  return zt(c, u1(u)), c;
}
function i1(
  u,
  {
    target: c,
    replace: f,
    state: r,
    preventScrollReset: s,
    relative: h,
    viewTransition: p,
  } = {}
) {
  let x = Fi(),
    v = Ll(),
    m = hu(u, { relative: h });
  return E.useCallback(
    (g) => {
      if (Lg(g, c)) {
        g.preventDefault();
        let N = f !== void 0 ? f : fu(v) === fu(m);
        x(u, {
          replace: N,
          state: r,
          preventScrollReset: s,
          relative: h,
          viewTransition: p,
        });
      }
    },
    [v, x, m, f, r, c, u, s, h, p]
  );
}
var c1 = 0,
  r1 = () => `__${String(++c1)}__`;
function f1() {
  let { router: u } = l0("useSubmit"),
    { basename: c } = E.useContext(Ze),
    f = Og();
  return E.useCallback(
    async (r, s = {}) => {
      let { action: h, method: p, encType: x, formData: v, body: m } = Gg(r, c);
      if (s.navigate === !1) {
        let g = s.fetcherKey || r1();
        await u.fetch(g, f, s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: v,
          body: m,
          formMethod: s.method || p,
          formEncType: s.encType || x,
          flushSync: s.flushSync,
        });
      } else
        await u.navigate(s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: v,
          body: m,
          formMethod: s.method || p,
          formEncType: s.encType || x,
          replace: s.replace,
          state: s.state,
          fromRouteId: f,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [u, c, f]
  );
}
function o1(u, { relative: c } = {}) {
  let { basename: f } = E.useContext(Ze),
    r = E.useContext(Ve);
  zt(r, "useFormAction must be used inside a RouteContext");
  let [s] = r.matches.slice(-1),
    h = { ...hu(u || ".", { relative: c }) },
    p = Ll();
  if (u == null) {
    h.search = p.search;
    let x = new URLSearchParams(h.search),
      v = x.getAll("index");
    if (v.some((g) => g === "")) {
      x.delete("index"),
        v.filter((N) => N).forEach((N) => x.append("index", N));
      let g = x.toString();
      h.search = g ? `?${g}` : "";
    }
  }
  return (
    (!u || u === ".") &&
      s.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    f !== "/" && (h.pathname = h.pathname === "/" ? f : sl([f, h.pathname])),
    fu(h)
  );
}
function s1(u, { relative: c } = {}) {
  let f = E.useContext(km);
  zt(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = l0("useViewTransitionState"),
    s = hu(u, { relative: c });
  if (!f.isTransitioning) return !1;
  let h = dl(f.currentLocation.pathname, r) || f.currentLocation.pathname,
    p = dl(f.nextLocation.pathname, r) || f.nextLocation.pathname;
  return Qi(s.pathname, p) != null || Qi(s.pathname, h) != null;
}
const d1 = {
  backgroundColor: "#0e0e0eff",
  color: "white",
  borderWidth: "1px",
  borderRadius: "20px",
  borderTop: "solid #2b2b2bff ",
  borderBottom: "solid #2b2b2bff",
  paddingBottom: "10px !important",
  margin: "10px 0px",
  display: "flex",
  flexDirection: "row",
};
function h1({
  id: u,
  name: c,
  time: f,
  image: r,
  description: s,
  liked_users: h,
}) {
  const {
      userName: p,
      setImgURL: x,
      setShowImg: v,
      csrftoken: m,
    } = E.useContext(fe),
    g = m1(f);
  E.useRef(null);
  const [N, z] = E.useState({ profileImg: ra }),
    [j, q] = E.useState(!1),
    [X, L] = E.useState(!1);
  E.useEffect(() => {
    async function G() {
      try {
        const P = await (
            await fetch(`/api/user/${c}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            })
          ).json(),
          $ = P.profile_pic_url;
        z($ !== "" ? `${P.profile_pic_url}` : ra);
      } catch (k) {
        console.error(k);
      } finally {
        let k = function (K, P) {
          return K.includes(String(P));
        };
        q(k(h, p)), L(k(h, p));
      }
    }
    G();
  }, []);
  const B = s.map((G, k) =>
    A.jsx("div", { style: { minHeight: "15px" }, children: G }, k)
  );
  async function Y() {
    try {
      if (j) {
        q(!1);
        const G = await fetch(`/api/post/${u}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-CSRFToken": m },
          body: JSON.stringify({ to_like: !1 }),
          credentials: "include",
        });
        if (!G.ok) throw new Error(`HTTP error ${G.status}`);
        console.log("unliked");
      } else {
        q(!0);
        const G = await fetch(`/api/post/${u}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-CSRFToken": m },
          body: JSON.stringify({ to_like: !0 }),
          credentials: "include",
        });
        if (!G.ok) throw new Error(`HTTP error ${G.status}`);
        console.log("liked");
      }
    } catch (G) {
      console.error(G);
    }
  }
  return A.jsxs("div", {
    style: { ...d1 },
    className: "style",
    id: u,
    children: [
      A.jsx("div", {
        children: A.jsx(Xe, {
          to: `/u/${c}`,
          children: A.jsx("img", { src: N, className: "profile-pic" }),
        }),
      }),
      A.jsxs("div", {
        style: { marginLeft: 10, marginRight: 10 },
        children: [
          A.jsx("div", {
            style: { display: "flex", width: "100%", alignItems: "flex-start" },
            children: A.jsxs("div", {
              style: {
                fontSize: 16.5,
                fontFamily: "monospace",
                fontWeight: 1e3,
              },
              children: [
                A.jsx(Xe, {
                  to: `/u/${c}`,
                  children: A.jsxs("b", {
                    className: "user",
                    children: [c, " "],
                  }),
                }),
                A.jsx("span", { className: "ago", children: g }),
              ],
            }),
          }),
          A.jsx("div", {
            style: {
              fontSize: 15,
              fontFamily: "Segoe UI",
              marginTop: 5,
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
            },
            children: B,
          }),
          r !== "" && r !== void 0
            ? A.jsx("img", {
                src: r,
                alt: "xyz",
                className: "post-image",
                onClick: () => {
                  x(r), v(!0);
                },
              })
            : null,
          A.jsx(Gv, {
            style: { alignSelf: "center" },
            id: `like-${u}`,
            onToggle: Y,
            likes: h.length,
            likeIsOn: j,
            fetchDone: X,
          }),
        ],
      }),
    ],
  });
}
function m1(u, c = Date.now()) {
  let f;
  typeof u == "string"
    ? (f = new Date(u).getTime())
    : ((f = Number(u)), String(f).length === 10 && (f *= 1e3));
  const r = Number(c);
  if (!f || isNaN(f) || !r || isNaN(r)) return "just now";
  let s = Math.floor((r - f) / 1e3);
  return (
    (s -= 5.5 * 3600),
    s < 0 && (s = 0),
    s < 5
      ? "just now"
      : s < 60
      ? `${s}s`
      : s < 3600
      ? `${Math.floor(s / 60)}m`
      : s < 86400
      ? `${Math.floor(s / 3600)}h`
      : s < 604800
      ? `${Math.floor(s / 86400)}d`
      : s < 2592e3
      ? `${Math.floor(s / 604800)}w`
      : s < 31536e3
      ? `${Math.floor(s / 2592e3)}mo`
      : `${Math.floor(s / 31536e3)}y`
  );
}
const y1 = {
  width: "100%",
  maxWidth: "90vw",
  color: "white",
  borderWidth: "1px",
  borderRadius: "20px",
  padding: 20,
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  background: "rgba(13, 19, 20, 0.95)",
  backdropFilter: "blur(15px)",
  border: "solid 1px rgba(51, 51, 51, 1)",
};
function p1({ following: u }) {
  const [c, f] = E.useState({ profileImg: ra }),
    { userProfilePic: r, setCreateButtonOn: s } = E.useContext(fe);
  return (
    E.useEffect(() => {
      f(r !== "" ? `${r}` : ra);
    }, [u, r]),
    u
      ? null
      : A.jsxs("div", {
          style: y1,
          id: 556467,
          children: [
            A.jsx("div", {
              children: A.jsx("img", { src: c, className: "profile-pic" }),
            }),
            A.jsxs("div", {
              style: { marginLeft: 10, marginRight: 10, width: "100%" },
              children: [
                A.jsx("div", { style: { display: "flex", width: "100%" } }),
                A.jsxs("div", {
                  style: {
                    fontSize: 14,
                    fontFamily: "Segoe UI",
                    marginTop: 5,
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "34px",
                  },
                  children: [
                    A.jsx("div", {
                      style: {
                        width: "100%",
                        color: "grey",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        fontSize: "16px",
                        cursor: "text",
                        userSelect: "none",
                      },
                      onClick: () => {
                        s(!0);
                      },
                      children: "What's Happening?",
                    }),
                    A.jsx("button", {
                      style: {
                        backgroundColor: "#090c0dff",
                        color: "white",
                        border: "1px solid #333",
                        borderRadius: "7px",
                        fontSize: "14.5px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        userSelect: "none",
                        outline: "none",
                        padding: "10px 10px 10px 10px",
                        height: "40px",
                        width: "60px",
                      },
                      onClick: () => {
                        s(!0);
                      },
                      children: "Post",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
  );
}
const v1 = {
  width: "100%",
  maxWidth: "90vw",
  height: "auto",
  color: "white",
  borderWidth: "1px",
  borderRadius: "20px",
  padding: 20,
  marginTop: "4vw",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "row",
  background: "rgba(13, 19, 20, 0.95)",
  backdropFilter: "blur(15px)",
  border: "solid 1px rgba(51, 51, 51, 1)",
};
function g1({ following: u, myProfile: c, userInfo: f }) {
  const [r, s] = E.useState(ra),
    {
      setCreateButtonOn: h,
      userName: p,
      setMessageName: x,
      csrftoken: v,
      setShowMessage: m,
    } = E.useContext(fe),
    [g, N] = E.useState(!1);
  E.useEffect(() => {
    if ((f && f.profile_pic_url !== "" && s(`${f.profile_pic_url}`), f && p)) {
      let j = function (q, X) {
        return q.includes(X);
      };
      console.log(f),
        console.log(f.followers),
        console.log(j(f.followers, p)),
        N(j(f.followers, p));
    }
  }, [f, p]);
  function z() {
    console.log(g);
    async function j() {
      try {
        const q = await fetch(`../../api/user/${f.username}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-CSRFToken": v },
          body: JSON.stringify({ to_follow: !g }),
          credentials: "include",
        });
        x(`Started ${g ? "Unfollowing" : "Following"} ${f.username}`),
          N(!g),
          m(!0);
      } catch (q) {
        console.log(q);
      }
    }
    j();
  }
  return u
    ? null
    : A.jsxs("div", {
        style: v1,
        id: "556468new",
        children: [
          A.jsx("div", {
            className: "profile-pic-container-new",
            children: A.jsx("img", { src: r, className: "profile-pic1-new" }),
          }),
          A.jsxs("div", {
            style: { marginLeft: 20, marginRight: 10, width: "100%" },
            children: [
              A.jsx("div", {
                style: { display: "flex", width: "100%", marginTop: "3%" },
                children:
                  f &&
                  A.jsxs("div", {
                    children: [
                      " ",
                      A.jsx("div", {
                        id: "29368999",
                        style: { fontSize: 28, fontFamily: "monospace" },
                        children: A.jsx("b", { children: f.username }),
                      }),
                      A.jsx("div", {
                        id: "293999",
                        style: {
                          fontSize: 14,
                          fontFamily: "sans-serif",
                          color: "grey",
                        },
                        children: f.email,
                      }),
                    ],
                  }),
              }),
              A.jsxs("div", {
                style: {
                  fontSize: 14,
                  fontFamily: "Segoe UI",
                  marginTop: 5,
                  marginBottom: 5,
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "34px",
                },
                children: [
                  A.jsx("div", {
                    style: {
                      fontSize: 14,
                      fontFamily: "Segoe UI",
                      marginTop: 5,
                      marginBottom: 5,
                      display: "flex",
                      flexDirection: "row",
                      width: "120%",
                      height: "34px",
                    },
                    children: A.jsxs("div", {
                      style: {
                        fontSize: 14,
                        fontFamily: "Segoe UI",
                        marginTop: -5,
                        marginBottom: 5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "75%",
                        height: "60px",
                        alignItems: "center",
                      },
                      children: [
                        A.jsxs("div", {
                          style: {
                            display: "flex",
                            marginLeft: "-12%",
                            width: "10%",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: 1,
                          },
                          children: [
                            A.jsx("div", {
                              className: "style22",
                              children: f?.total_posts || 0,
                            }),
                            A.jsx("div", {
                              className: "style21",
                              children: "Posts",
                            }),
                          ],
                        }),
                        A.jsxs("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: 1,
                          },
                          children: [
                            A.jsx("div", {
                              className: "style22",
                              children: f?.followers?.length || 0,
                            }),
                            A.jsx("div", {
                              className: "style21",
                              children: "Followers",
                            }),
                          ],
                        }),
                        A.jsxs("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: 1,
                          },
                          children: [
                            A.jsx("div", {
                              className: "style22",
                              children: f?.following?.length || 0,
                            }),
                            A.jsx("div", {
                              className: "style21",
                              children: "Following",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  !c &&
                    A.jsx("button", {
                      style: {
                        backgroundColor: "#090c0dff",
                        color: "white",
                        border: "1px solid #333",
                        borderRadius: "7px",
                        fontSize: "14.5px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        userSelect: "none",
                        outline: "none",
                        padding: "10px 10px 10px 10px",
                        height: "40px",
                        width: "auto",
                        marginTop: "-15px",
                      },
                      onClick: z,
                      children: g ? "Unfollow" : "Follow",
                    }),
                ],
              }),
            ],
          }),
        ],
      });
}
function b1() {
  const { setLoading: u } = E.useContext(fe),
    [c, f] = E.useState(!0);
  return (
    E.useEffect(() => {
      setTimeout(() => {
        f(!1);
      }, 500);
    }),
    c
      ? A.jsx("div", {
          style: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            color: "white ",
            justifyContent: "center",
            padding: "20px",
            fontFace: "monospace",
          },
          children: A.jsx("h4", { children: "loading..." }),
        })
      : null
  );
}
function Rf({ type: u }) {
  const c = Fi(),
    { profile_userName: f } = gg(),
    [r, s] = E.useState(!0),
    [h, p] = E.useState(!1),
    [x, v] = E.useState(!1),
    [m, g] = E.useState(null);
  E.useEffect(() => {
    u == "normal" && (document.title = "Home - TweetX"),
      u == "profile_page" && (document.title = `@${f} - TweetX`),
      u == "liked_page" && (document.title = "Likes - TweetX");
  }, []);
  const {
    loading: N,
    setLoading: z,
    userName: j,
    setUserName: q,
    userProfilePic: X,
    setUserProfilePic: L,
    setCsrftoken: B,
  } = E.useContext(fe);
  async function Y() {
    try {
      return await (
        await fetch("/api/user_info", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
      ).json();
    } catch (G) {
      console.log("user_not_found"),
        setTimeout(() => {
          c("/login");
        }, 1),
        console.error(G);
    } finally {
      B(
        (function (k) {
          let K = null;
          if (document.cookie && document.cookie !== "") {
            const P = document.cookie.split(";");
            for (let $ = 0; $ < P.length; $++) {
              const bt = P[$].trim();
              if (bt.substring(0, k.length + 1) === k + "=") {
                K = decodeURIComponent(bt.substring(k.length + 1));
                break;
              }
            }
          }
          return K;
        })("csrftoken")
      );
    }
  }
  return (
    E.useEffect(() => {
      async function G() {
        const k = await Y();
        console.log(k.username), q(k.username), L(k.profile_pic);
      }
      G();
    }, []),
    E.useEffect(() => {
      setTimeout(() => {
        v(!0);
      }, 100),
        setTimeout(() => {
          v(!1);
        }, 120);
    }, []),
    E.useEffect(() => {
      if (j && u == "profile_page") {
        console.log(j), G();
        async function G() {
          try {
            const k = await fetch(`/api/user/${String(f)}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            });
            if (!k.ok) {
              console.log("userNotFound"), s(!1);
              return;
            }
            const K = await k.json();
            console.log(K.username),
              g(K),
              K.username === j && (console.log("matched"), p(!0));
            return;
          } catch (k) {
            console.error(k);
          }
        }
      }
    }, [j]),
    E.useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [x]),
    r || u == "normal"
      ? A.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "650px",
          },
          children: [
            u == "normal" ? A.jsx(x1, { following: x, setFollowing: v }) : null,
            u == "normal" ? A.jsx(p1, { following: x }) : null,
            u == "profile_page"
              ? A.jsx(g1, { following: x, myProfile: h, userInfo: m })
              : null,
            A.jsxs("div", {
              style: {
                width: "100%",
                minHeight: "100vh",
                borderRadius: "30px",
                position: "relative",
                overflowY: "hidden",
              },
              children: [
                A.jsx(b1, {}),
                u == "profile_page"
                  ? A.jsx("div", {
                      style: {
                        width: "100%",
                        height: "auto",
                        backgroundColor: "black",
                        color: "white ",
                        padding: "0px",
                        fontFamily: "Sans-serif",
                      },
                      children: A.jsx("h2", { children: "All Posts:" }),
                    })
                  : null,
                u == "liked_page"
                  ? A.jsx("div", {
                      style: {
                        width: "99%",
                        height: "auto",
                        backgroundColor: "black",
                        borderTop: "solid 1px white",
                        borderRadius: "100px",
                        color: "white ",
                        padding: "0px",
                        textAlign: "center",
                        fontFamily: "Sans-serif",
                      },
                      children: A.jsx("h1", { children: "Liked Posts:" }),
                    })
                  : null,
                A.jsx(S1, {
                  userName: j,
                  following: x,
                  setFollowing: v,
                  loading: N,
                  setLoading: z,
                  profile_userName: f,
                  type: u,
                }),
              ],
            }),
          ],
        })
      : A.jsxs("div", {
          style: { color: "white", marginTop: "10vh" },
          children: [" ", A.jsx("h1", { children: "User Not Found" }), " "],
        })
  );
}
function S1({
  following: u,
  loading: c,
  setLoading: f,
  profile_userName: r,
  type: s,
  userName: h,
  setFollowing: p,
}) {
  const [x, v] = E.useState([]);
  E.useEffect(() => {
    f(!0);
    async function g() {
      try {
        let N = function (L) {
          return L.split(`
`);
        };
        const q = (
          await (
            await fetch("/api/posts", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                type: u ? "follows" : "all",
              },
              credentials: "include",
            })
          ).json()
        ).map((L) => ({
          id: String(L.id),
          name: String(L.owner),
          time: String(L.created_at),
          description: N(L.body),
          image: L.image_url,
          liked_users: L.liked_users,
        }));
        let X = q;
        if (
          (s === "profile_page" && (X = q.filter((L) => L.name === r)),
          s === "liked_page")
        ) {
          let L = function (B, Y) {
            return B.includes(String(Y));
          };
          X = q.filter((B) => L(B.liked_users, h));
        }
        v(X);
      } catch {
      } finally {
        f(!1);
      }
    }
    g();
  }, [u]);
  const m = x.map((g) =>
    A.jsx(
      h1,
      {
        id: g.id,
        name: g.name,
        time: g.time,
        image: g.image,
        description: g.description,
        liked_users: g.liked_users,
      },
      g.id
    )
  );
  return (
    console.log(),
    c
      ? null
      : A.jsx("div", {
          style: { display: "flex", justifyContent: "center", width: "100%" },
          children: A.jsxs("div", {
            style: { width: "100%", display: "flex", flexDirection: "column" },
            children: [
              A.jsx("div", { style: { color: "white" } }),
              A.jsx("div", { children: m }),
            ],
          }),
        })
  );
}
function x1({ following: u, setFollowing: c }) {
  const f = {
      fontWeight: "600",
      color: u ? "#fff" : "#aaa",
      borderBottom: u ? "3px solid #1DA1F2" : "3px solid transparent",
      background: "transparent",
      paddingBottom: "10px",
    },
    r = {
      fontWeight: "600",
      color: u ? "#aaa" : "#fff",
      borderBottom: u ? "3px solid transparent" : "3px solid #1DA1F2",
      background: "transparent",
      paddingBottom: "10px",
    },
    s = { cursor: "pointer" };
  return A.jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      zIndex: 10,
      position: "sticky",
      padding: "10px 0 0 0",
      background: "rgba(0,0,0, 0.6)",
      backdropFilter: "blur(10px)",
      top: "0px",
    },
    children: [
      A.jsx("button", {
        className: "top-btn",
        style: {
          width: "50%",
          marginRight: "2%",
          marginLeft: "10%",
          border: "None",
          ...r,
          ...s,
        },
        onClick: () => {
          c(!1);
        },
        children: "For You",
      }),
      " ",
      A.jsx("button", {
        className: "top-btn",
        style: {
          width: "50%",
          marginRight: "10%",
          marginLeft: "2%",
          border: "None",
          ...f,
          ...s,
        },
        onClick: () => {
          c(!0);
        },
        children: "Following",
      }),
    ],
  });
}
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  T1 = (u) =>
    u.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, f, r) =>
      r ? r.toUpperCase() : f.toLowerCase()
    ),
  ym = (u) => {
    const c = T1(u);
    return c.charAt(0).toUpperCase() + c.slice(1);
  },
  a0 = (...u) =>
    u
      .filter((c, f, r) => !!c && c.trim() !== "" && r.indexOf(c) === f)
      .join(" ")
      .trim(),
  A1 = (u) => {
    for (const c in u)
      if (c.startsWith("aria-") || c === "role" || c === "title") return !0;
  };
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var R1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _1 = E.forwardRef(
  (
    {
      color: u = "currentColor",
      size: c = 24,
      strokeWidth: f = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: h,
      iconNode: p,
      ...x
    },
    v
  ) =>
    E.createElement(
      "svg",
      {
        ref: v,
        ...R1,
        width: c,
        height: c,
        stroke: u,
        strokeWidth: r ? (Number(f) * 24) / Number(c) : f,
        className: a0("lucide", s),
        ...(!h && !A1(x) && { "aria-hidden": "true" }),
        ...x,
      },
      [
        ...p.map(([m, g]) => E.createElement(m, g)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mu = (u, c) => {
  const f = E.forwardRef(({ className: r, ...s }, h) =>
    E.createElement(_1, {
      ref: h,
      iconNode: c,
      className: a0(`lucide-${E1(ym(u))}`, `lucide-${u}`, r),
      ...s,
    })
  );
  return (f.displayName = ym(u)), f;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  O1 = mu("heart", w1);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  n0 = mu("plus", z1);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  D1 = mu("search", N1);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  M1 = mu("user", C1);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  u0 = mu("x", j1);
function U1() {
  const {
    setCreateButtonOn: u,
    userName: c,
    setShowMessage: f,
    setMessageName: r,
  } = E.useContext(fe);
  function s() {
    u(!0);
  }
  return A.jsxs("div", {
    className:
      " side-bar flex flex-col items-center space-y-6 bg-black h-screen py-6 ",
    children: [
      A.jsx(Xe, {
        to: "/",
        children: A.jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "lucide lucide-house text-white w-6 h-6 options",
          "aria-hidden": "true",
          children: [
            A.jsx("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
            A.jsx("path", {
              d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            }),
          ],
        }),
      }),
      A.jsx(D1, {
        className: "text-gray-500 w-6 h-6 options",
        color: "white",
        size: 32,
        strokeWidth: 1.5,
        onClick: () => {
          r("SEARCH feature coming after mid-sem :)"), f(!0);
        },
      }),
      A.jsx("div", {
        className:
          "plus-bg bg-gray-800 p-3 rounded-xl flex items-center justify-center",
        onClick: s,
        children: A.jsx(n0, {
          className: "text-white w-100 h-100 options",
          color: "white",
          size: 45,
          strokeWidth: 2,
        }),
      }),
      A.jsx(Xe, {
        to: "/liked",
        children: A.jsx(O1, {
          className: "text-gray-500 w-6 h-6 options",
          color: "white",
          size: 32,
          strokeWidth: 1.5,
        }),
      }),
      A.jsx(Xe, {
        to: `/u/${c}`,
        children: A.jsx(M1, {
          className: "text-gray-500 w-6 h-6 options",
          color: "white",
          size: 32,
          strokeWidth: 1.5,
        }),
      }),
    ],
  });
}
const H1 = { zIndex: "100" };
function B1() {
  const {
    showMessage: u,
    setShowMessage: c,
    messageName: f,
  } = E.useContext(fe);
  return (
    E.useEffect(() => {
      if (u) {
        console.log("hello");
        const r = setTimeout(() => {
          c(!1);
        }, 2e3);
        return () => clearTimeout(r);
      }
    }, [u]),
    u ? A.jsx("div", { style: H1, className: "message", children: f }) : null
  );
}
function L1() {
  const {
      createButtonOn: u,
      setCreateButtonOn: c,
      loading: f,
      setLoading: r,
      userName: s,
      userProfilePic: h,
      csrftoken: p,
      setShowMessage: x,
      setMessageName: v,
    } = E.useContext(fe),
    [m, g] = E.useState({ body: "", image_url: "" }),
    N = E.useRef(null);
  E.useEffect(
    () => (
      console.log(s),
      z(),
      u && N.current && N.current.focus(),
      u
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto"),
      () => {
        document.body.style.overflow = "auto";
      }
    ),
    [u]
  ),
    E.useEffect(() => {
      function B(Y) {
        Y.key === "Escape" && q();
      }
      return (
        window.addEventListener("keydown", B),
        () => window.removeEventListener("keydown", B)
      );
    }, []);
  const z = () => {
    const B = N.current;
    B && ((B.style.height = "auto"), (B.style.height = B.scrollHeight + "px"));
  };
  function j() {
    r(!0),
      fetch("/api/create_post", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-CSRFToken": p },
        credentials: "include",
        body: JSON.stringify({ body: m.body, image_url: m.image_url }),
      })
        .then(async (B) => {
          const Y = await B.json();
          return { status: B.status, data: Y };
        })
        .then((B) => {
          if ((console.log(B.data), B.status === 201)) {
            console.log("sent"),
              g({ body: "", image_url: "" }),
              r(!1),
              c(!1),
              v("Posted Successfully"),
              x(!0);
            return;
          } else {
            console.log("not sent!"), r(!1), v(`${B.data.error}!`), x(!0);
            return;
          }
        });
  }
  function q() {
    c(!1);
  }
  const [X, L] = E.useState({ profileImg: ra });
  return (
    E.useEffect(() => {
      L(h !== "" ? `${h}` : ra);
    }, [u]),
    u
      ? A.jsxs("div", {
          className: "create-div-overlay",
          children: [
            A.jsx(u0, {
              onClick: q,
              className: "text-white w-6 h-6 options create-div-close",
              color: "white",
              size: 50,
              strokeWidth: 2.5,
            }),
            A.jsxs("div", {
              className: "create-div-modal",
              children: [
                A.jsx("div", {
                  className: "header create-div-header",
                  children: A.jsx("b", { children: "New Post" }),
                }),
                A.jsxs("div", {
                  className: "create-div-content",
                  style: { width: "95%" },
                  children: [
                    A.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        color: "white",
                      },
                      children: [
                        A.jsx("div", {
                          children: A.jsx("img", {
                            src: X,
                            className: "profile-pic",
                          }),
                        }),
                        A.jsxs("div", {
                          style: {
                            marginLeft: 10,
                            marginRight: 10,
                            width: "100%",
                          },
                          children: [
                            A.jsx("div", {
                              style: { display: "flex", width: "100%" },
                              children: A.jsx("div", {
                                style: {
                                  fontSize: 18,
                                  fontFamily: "monospace",
                                },
                                children: A.jsxs("b", { children: [s, " "] }),
                              }),
                            }),
                            A.jsx("div", {
                              children: A.jsx("textarea", {
                                ref: N,
                                onInput: z,
                                id: "body",
                                className: "create-div-input-body",
                                placeholder: "What's happening?",
                                value: m.body,
                                onChange: (B) => {
                                  g({ ...m, body: B.target.value });
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    A.jsxs("div", {
                      className: "submiting-div",
                      style: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                      },
                      children: [
                        A.jsx("input", {
                          id: "image_url",
                          className: "create-div-input",
                          placeholder: "Image URL (optional)",
                          value: m.image_url,
                          type: "url",
                          onChange: (B) => {
                            g({ ...m, image_url: B.target.value });
                          },
                        }),
                        A.jsx("button", {
                          className: "submit-btn",
                          onClick: j,
                          children: "Post",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null
  );
}
const q1 = "/static/network/assets/twitter-Cm4O4c-l.png";
function Y1() {
  const { showImg: u, setShowImg: c, imgURL: f } = E.useContext(fe);
  E.useEffect(() => {
    function s(h) {
      h.key === "Escape" && r();
    }
    return (
      window.addEventListener("keydown", s),
      () => window.removeEventListener("keydown", s)
    );
  }, []);
  function r() {
    c(!1);
  }
  return u
    ? A.jsx("div", {
        style: {
          width: "100vw",
          height: "100vh",
          zIndex: 100,
          position: "fixed",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(7px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        children: A.jsxs("div", {
          style: {
            padding: "0",
            borderRadius: "0",
            color: "white",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          },
          children: [
            A.jsx(u0, {
              onClick: r,
              className: "text-white w-6 h-6 options create-div-close",
              color: "white",
              size: 50,
              strokeWidth: 2.5,
              style: {
                position: "absolute",
                top: "20px",
                right: "20px",
                cursor: "pointer",
                zIndex: 200,
              },
            }),
            A.jsx("img", {
              src: f,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              },
            }),
          ],
        }),
      })
    : null;
}
function G1() {
  const { loading: u } = E.useContext(fe);
  return u
    ? A.jsxs("div", {
        style: {
          zIndex: 50,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        children: [
          A.jsx("div", { className: "loader" }),
          A.jsx("style", {
            children: `
          .loader {
            width: 48px;
            height: 48px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `,
          }),
        ],
      })
    : null;
}
const X1 = {
  zIndex: "50",
  width: "55px",
  position: "fixed",
  left: "1vw",
  top: "3vh",
};
function Q1() {
  const [u, c] = E.useState("");
  return (
    E.useEffect(() => {
      c(q1);
    }, []),
    A.jsx("div", {
      style: X1,
      className: "logo",
      children: A.jsx(Xe, {
        to: "/",
        children: A.jsx("img", {
          id: "panchi",
          src: u,
          style: { width: "100%", filter: "drop-shadow(0 0 20px #12465aff)" },
        }),
      }),
    })
  );
}
function Z1() {
  return A.jsx("div", {
    style: {
      zIndex: "0",
      width: "55px",
      position: "fixed",
      right: "1vw",
      top: "3vh",
    },
    className: "logo",
    children: A.jsx("a", {
      href: "https://github.com/sawankshrma/threads-vite-app",
      target: "_blank",
      children: A.jsx("img", {
        id: "pan",
        src: "https://i.pinimg.com/1200x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
        style: {
          borderRadius: "45%",
          width: "90%",
          filter: "drop-shadow(0 0 20px #12465aff)",
        },
      }),
    }),
  });
}
function V1() {
  const { createButtonOn: u, setCreateButtonOn: c } = E.useContext(fe);
  function f() {
    c(!0);
  }
  return A.jsx("div", {
    className:
      "plus-bg1 bg-gray-800 p-3 rounded-xl flex items-center justify-center",
    onClick: f,
    children: A.jsx(n0, {
      className: "text-white w-100 h-100",
      color: "white",
      size: 40,
      strokeWidth: 3,
    }),
  });
}
function K1() {
  const u = Fi();
  E.useEffect(() => {
    document.title = "Login - TweetX";
  }, []);
  const {
      createButtonOn: c,
      setCreateButtonOn: f,
      loading: r,
      setLoading: s,
      username: h,
      userProfilePic: p,
      setShowMessage: x,
      setMessageName: v,
    } = E.useContext(fe),
    [m, g] = E.useState({ username: "", password: "" });
  function N() {
    s(!0),
      fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: m.username, password: m.password }),
      })
        .then(async (z) => {
          const j = await z.json();
          return { status: z.status, data: j };
        })
        .then((z) => {
          if ((console.log(z.data), z.status === 201)) {
            console.log("sent"),
              g({ username: "", password: "" }),
              s(!1),
              v("Login Successfull"),
              x(!0),
              setTimeout(() => {
                u("/");
              }, 500);
            return;
          } else {
            console.log("not sent!"), s(!1), v(`${z.data.error}!`), x(!0);
            return;
          }
        });
  }
  return A.jsxs("div", {
    className: "create-div-overlaynew",
    children: [
      A.jsxs("div", {
        className: "create-div-modalnew",
        children: [
          A.jsx("div", {
            className: "headernew create-div-headernew",
            children: A.jsx("b", { children: "LogIn" }),
          }),
          A.jsx("div", {
            className: "create-div-contentnew",
            style: { width: "95%" },
          }),
          A.jsx("input", {
            id: "username",
            className: "create-div-inputnew",
            placeholder: "Username",
            value: m.username,
            onChange: (z) => {
              g({ ...m, username: z.target.value });
            },
          }),
          A.jsx("input", {
            id: "Password",
            className: "create-div-inputnew",
            placeholder: "Password",
            value: m.password,
            type: "password",
            onChange: (z) => {
              g({ ...m, password: z.target.value });
            },
          }),
          A.jsx("div", {
            className: "submiting-divnew",
            style: {
              width: "100%",
              display: "flex",
              flexDirection: "column  ",
              alignItems: "center",
            },
            children: A.jsx("button", {
              className: "submit-btnnew",
              onClick: N,
              children: "LogIn",
            }),
          }),
        ],
      }),
      A.jsxs("div", {
        className: "redirectnew",
        children: [
          "New User?",
          " ",
          A.jsx(Xe, {
            to: "/register",
            children: A.jsx("b", { children: "Register" }),
          }),
        ],
      }),
    ],
  });
}
function k1() {
  const u = Fi();
  E.useEffect(() => {
    document.title = "Register - TweetX";
  }, []);
  const {
      createButtonOn: c,
      setCreateButtonOn: f,
      loading: r,
      setLoading: s,
      username: h,
      userProfilePic: p,
      setShowMessage: x,
      setMessageName: v,
    } = E.useContext(fe),
    [m, g] = E.useState({
      username: "",
      password: "",
      email: "",
      confirmation: "",
      profile_pic_url: "",
    });
  function N() {
    s(!0),
      fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: m.username,
          password: m.password,
          confirmation: m.confirmation,
          email: m.email,
          profile_pic_url: m.profile_pic_url,
        }),
      })
        .then(async (z) => {
          const j = await z.json();
          return { status: z.status, data: j };
        })
        .then((z) => {
          if ((console.log(z.data), z.status === 201)) {
            console.log("sent"),
              g({ username: "", password: "" }),
              s(!1),
              v("Login Successfull"),
              x(!0),
              setTimeout(() => {
                u("/");
              }, 500);
            return;
          } else {
            console.log("not sent!"), s(!1), v(`${z.data.error}!`), x(!0);
            return;
          }
        });
  }
  return A.jsxs("div", {
    className: "create-div-overlaynew",
    children: [
      A.jsxs("div", {
        className: "create-div-modalnew",
        style: { maxWidth: "500px", height: "370px" },
        children: [
          A.jsx("div", {
            className: "headernew create-div-headernew",
            children: A.jsx("b", { children: "Register" }),
          }),
          A.jsx("div", { className: "create-div-contentnew" }),
          A.jsx("input", {
            id: "username",
            className: "create-div-inputnew create-div-input-registernew",
            placeholder: "Choose a Username",
            value: m.username,
            onChange: (z) => {
              g({ ...m, username: z.target.value });
            },
          }),
          A.jsx("input", {
            id: "Password1",
            className: "create-div-inputnew create-div-input-registernew",
            placeholder: "Set a Password",
            value: m.password,
            type: "password",
            onChange: (z) => {
              g({ ...m, password: z.target.value });
            },
          }),
          A.jsx("input", {
            id: "Password2",
            className: "create-div-inputnew create-div-input-registernew",
            placeholder: "Confirm Password",
            value: m.confirmation,
            type: "password",
            onChange: (z) => {
              g({ ...m, confirmation: z.target.value });
            },
          }),
          A.jsx("input", {
            id: "email",
            className: "create-div-inputnew create-div-input-registernew",
            placeholder: "Email",
            value: m.email,
            type: "email",
            onChange: (z) => {
              g({ ...m, email: z.target.value });
            },
          }),
          A.jsx("input", {
            id: "profile_pic_url",
            className: "create-div-inputnew create-div-input-registernew",
            placeholder: "Profile Pic URL (optional)",
            value: m.profile_pic_url,
            type: "URL",
            onChange: (z) => {
              g({ ...m, profile_pic_url: z.target.value });
            },
          }),
          A.jsx("div", {
            className: "submiting-divnew",
            style: {
              width: "100%",
              display: "flex",
              flexDirection: "column  ",
              alignItems: "center",
            },
            children: A.jsx("button", {
              className: "submit-btnnew",
              onClick: N,
              children: "Register",
            }),
          }),
        ],
      }),
      A.jsxs("div", {
        className: "redirect1new",
        children: [
          "Already a User?",
          " ",
          A.jsx(Xe, {
            to: "/logIn",
            children: A.jsx("b", { children: "LogIn" }),
          }),
        ],
      }),
    ],
  });
}
const fe = E.createContext();
function J1({ children: u }) {
  const [c, f] = E.useState(!1),
    [r, s] = E.useState(!1),
    [h, p] = E.useState(null),
    [x, v] = E.useState(""),
    [m, g] = E.useState(""),
    [N, z] = E.useState(!1),
    [j, q] = E.useState(!1),
    [X, L] = E.useState(null),
    [B, Y] = E.useState(null);
  return A.jsx(fe.Provider, {
    value: {
      createButtonOn: c,
      setCreateButtonOn: f,
      loading: r,
      setLoading: s,
      userName: h,
      setUserName: p,
      setUserProfilePic: v,
      userProfilePic: x,
      showMessage: N,
      setShowMessage: z,
      messageName: m,
      setMessageName: g,
      showImg: j,
      setShowImg: q,
      imgURL: X,
      setImgURL: L,
      csrftoken: B,
      setCsrftoken: Y,
    },
    children: u,
  });
}
function $1() {
  const u = Ll();
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx(Q1, {}),
      A.jsx(V1, {}),
      A.jsx(U1, {}),
      A.jsx(B1, {}),
      A.jsx(L1, {}),
      A.jsx(G1, {}),
      A.jsx(Y1, {}),
      A.jsx(Z1, {}),
      A.jsxs(
        Mg,
        {
          children: [
            A.jsx(na, {
              path: "/",
              element: A.jsx(Rf, { type: "normal" }, Date.now()),
            }),
            A.jsx(na, { path: "/login", element: A.jsx(K1, {}, Date.now()) }),
            A.jsx(na, {
              path: "/register",
              element: A.jsx(k1, {}, Date.now()),
            }),
            A.jsx(
              na,
              {
                path: "/u/:profile_userName",
                element: A.jsx(Rf, { type: "profile_page" }),
              },
              Date.now()
            ),
            A.jsx(
              na,
              { path: "/liked", element: A.jsx(Rf, { type: "liked_page" }) },
              Date.now()
            ),
            A.jsx(na, {
              path: "*",
              element: A.jsx("h1", {
                style: { color: "white", margintop: "10vh" },
                children: "Not Found",
              }),
            }),
          ],
        },
        u.pathname
      ),
    ],
  });
}
function W1() {
  return A.jsx("div", {
    style: { width: "98vw", display: "flex", justifyContent: "center" },
    children: A.jsx(J1, { children: A.jsx(l1, { children: A.jsx($1, {}) }) }),
  });
}
Lp.createRoot(document.getElementById("root")).render(A.jsx(W1, {}));
